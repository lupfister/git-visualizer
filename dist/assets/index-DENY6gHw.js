(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Tx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lh={exports:{}},ec={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function bv(){if(ty)return ec;ty=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return ec.Fragment=n,ec.jsx=i,ec.jsxs=i,ec}var ny;function vv(){return ny||(ny=1,Lh.exports=bv()),Lh.exports}var l=vv(),Oh={exports:{}},tc={},zh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function wv(){return sy||(sy=1,(function(t){function n(z,ie){var X=z.length;z.push(ie);e:for(;0<X;){var me=X-1>>>1,Te=z[me];if(0<c(Te,ie))z[me]=ie,z[X]=Te,X=me;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var ie=z[0],X=z.pop();if(X!==ie){z[0]=X;e:for(var me=0,Te=z.length,A=Te>>>1;me<A;){var ee=2*(me+1)-1,q=z[ee],ue=ee+1,je=z[ue];if(0>c(q,X))ue<Te&&0>c(je,q)?(z[me]=je,z[ue]=X,me=ue):(z[me]=q,z[ee]=X,me=ee);else if(ue<Te&&0>c(je,X))z[me]=je,z[ue]=X,me=ue;else break e}}return ie}function c(z,ie){var X=z.sortIndex-ie.sortIndex;return X!==0?X:z.id-ie.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,b=null,v=3,S=!1,C=!1,j=!1,M=!1,T=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var ie=i(g);ie!==null;){if(ie.callback===null)a(g);else if(ie.startTime<=z)a(g),ie.sortIndex=ie.expirationTime,n(p,ie);else break;ie=i(g)}}function P(z){if(j=!1,N(z),!C)if(i(p)!==null)C=!0,Y||(Y=!0,be());else{var ie=i(g);ie!==null&&le(P,ie.startTime-z)}}var Y=!1,V=-1,U=5,Q=-1;function se(){return M?!0:!(t.unstable_now()-Q<U)}function oe(){if(M=!1,Y){var z=t.unstable_now();Q=z;var ie=!0;try{e:{C=!1,j&&(j=!1,I(V),V=-1),S=!0;var X=v;try{t:{for(N(z),b=i(p);b!==null&&!(b.expirationTime>z&&se());){var me=b.callback;if(typeof me=="function"){b.callback=null,v=b.priorityLevel;var Te=me(b.expirationTime<=z);if(z=t.unstable_now(),typeof Te=="function"){b.callback=Te,N(z),ie=!0;break t}b===i(p)&&a(p),N(z)}else a(p);b=i(p)}if(b!==null)ie=!0;else{var A=i(g);A!==null&&le(P,A.startTime-z),ie=!1}}break e}finally{b=null,v=X,S=!1}ie=void 0}}finally{ie?be():Y=!1}}}var be;if(typeof B=="function")be=function(){B(oe)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,K=Ee.port2;Ee.port1.onmessage=oe,be=function(){K.postMessage(null)}}else be=function(){T(oe,0)};function le(z,ie){V=T(function(){z(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ie=3;break;default:ie=v}var X=v;v=ie;try{return z()}finally{v=X}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(z,ie){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=v;v=z;try{return ie()}finally{v=X}},t.unstable_scheduleCallback=function(z,ie,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,z){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=X+Te,z={id:_++,callback:ie,priorityLevel:z,startTime:X,expirationTime:Te,sortIndex:-1},X>me?(z.sortIndex=X,n(g,z),i(p)===null&&z===i(g)&&(j?(I(V),V=-1):j=!0,le(P,X-me))):(z.sortIndex=Te,n(p,z),C||S||(C=!0,Y||(Y=!0,be()))),z},t.unstable_shouldYield=se,t.unstable_wrapCallback=function(z){var ie=v;return function(){var X=v;v=ie;try{return z.apply(this,arguments)}finally{v=X}}}})($h)),$h}var oy;function Sv(){return oy||(oy=1,zh.exports=wv()),zh.exports}var Ih={exports:{}},Zt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function Cv(){if(iy)return Zt;iy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),v=Symbol.iterator;function S(A){return A===null||typeof A!="object"?null:(A=v&&A[v]||A["@@iterator"],typeof A=="function"?A:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,M={};function T(A,ee,q){this.props=A,this.context=ee,this.refs=M,this.updater=q||C}T.prototype.isReactComponent={},T.prototype.setState=function(A,ee){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,ee,"setState")},T.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function I(){}I.prototype=T.prototype;function B(A,ee,q){this.props=A,this.context=ee,this.refs=M,this.updater=q||C}var N=B.prototype=new I;N.constructor=B,j(N,T.prototype),N.isPureReactComponent=!0;var P=Array.isArray;function Y(){}var V={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function Q(A,ee,q){var ue=q.ref;return{$$typeof:t,type:A,key:ee,ref:ue!==void 0?ue:null,props:q}}function se(A,ee){return Q(A.type,ee,A.props)}function oe(A){return typeof A=="object"&&A!==null&&A.$$typeof===t}function be(A){var ee={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(q){return ee[q]})}var Ee=/\/+/g;function K(A,ee){return typeof A=="object"&&A!==null&&A.key!=null?be(""+A.key):ee.toString(36)}function le(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(Y,Y):(A.status="pending",A.then(function(ee){A.status==="pending"&&(A.status="fulfilled",A.value=ee)},function(ee){A.status==="pending"&&(A.status="rejected",A.reason=ee)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function z(A,ee,q,ue,je){var Re=typeof A;(Re==="undefined"||Re==="boolean")&&(A=null);var ve=!1;if(A===null)ve=!0;else switch(Re){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(A.$$typeof){case t:case n:ve=!0;break;case _:return ve=A._init,z(ve(A._payload),ee,q,ue,je)}}if(ve)return je=je(A),ve=ue===""?"."+K(A,0):ue,P(je)?(q="",ve!=null&&(q=ve.replace(Ee,"$&/")+"/"),z(je,ee,q,"",function($e){return $e})):je!=null&&(oe(je)&&(je=se(je,q+(je.key==null||A&&A.key===je.key?"":(""+je.key).replace(Ee,"$&/")+"/")+ve)),ee.push(je)),1;ve=0;var ot=ue===""?".":ue+":";if(P(A))for(var Xe=0;Xe<A.length;Xe++)ue=A[Xe],Re=ot+K(ue,Xe),ve+=z(ue,ee,q,Re,je);else if(Xe=S(A),typeof Xe=="function")for(A=Xe.call(A),Xe=0;!(ue=A.next()).done;)ue=ue.value,Re=ot+K(ue,Xe++),ve+=z(ue,ee,q,Re,je);else if(Re==="object"){if(typeof A.then=="function")return z(le(A),ee,q,ue,je);throw ee=String(A),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ve}function ie(A,ee,q){if(A==null)return A;var ue=[],je=0;return z(A,ue,"","",function(Re){return ee.call(q,Re,je++)}),ue}function X(A){if(A._status===-1){var ee=A._result;ee=ee(),ee.then(function(q){(A._status===0||A._status===-1)&&(A._status=1,A._result=q)},function(q){(A._status===0||A._status===-1)&&(A._status=2,A._result=q)}),A._status===-1&&(A._status=0,A._result=ee)}if(A._status===1)return A._result.default;throw A._result}var me=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},Te={map:ie,forEach:function(A,ee,q){ie(A,function(){ee.apply(this,arguments)},q)},count:function(A){var ee=0;return ie(A,function(){ee++}),ee},toArray:function(A){return ie(A,function(ee){return ee})||[]},only:function(A){if(!oe(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return Zt.Activity=b,Zt.Children=Te,Zt.Component=T,Zt.Fragment=i,Zt.Profiler=c,Zt.PureComponent=B,Zt.StrictMode=a,Zt.Suspense=p,Zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,Zt.__COMPILER_RUNTIME={__proto__:null,c:function(A){return V.H.useMemoCache(A)}},Zt.cache=function(A){return function(){return A.apply(null,arguments)}},Zt.cacheSignal=function(){return null},Zt.cloneElement=function(A,ee,q){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ue=j({},A.props),je=A.key;if(ee!=null)for(Re in ee.key!==void 0&&(je=""+ee.key),ee)!U.call(ee,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&ee.ref===void 0||(ue[Re]=ee[Re]);var Re=arguments.length-2;if(Re===1)ue.children=q;else if(1<Re){for(var ve=Array(Re),ot=0;ot<Re;ot++)ve[ot]=arguments[ot+2];ue.children=ve}return Q(A.type,je,ue)},Zt.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},Zt.createElement=function(A,ee,q){var ue,je={},Re=null;if(ee!=null)for(ue in ee.key!==void 0&&(Re=""+ee.key),ee)U.call(ee,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(je[ue]=ee[ue]);var ve=arguments.length-2;if(ve===1)je.children=q;else if(1<ve){for(var ot=Array(ve),Xe=0;Xe<ve;Xe++)ot[Xe]=arguments[Xe+2];je.children=ot}if(A&&A.defaultProps)for(ue in ve=A.defaultProps,ve)je[ue]===void 0&&(je[ue]=ve[ue]);return Q(A,Re,je)},Zt.createRef=function(){return{current:null}},Zt.forwardRef=function(A){return{$$typeof:h,render:A}},Zt.isValidElement=oe,Zt.lazy=function(A){return{$$typeof:_,_payload:{_status:-1,_result:A},_init:X}},Zt.memo=function(A,ee){return{$$typeof:g,type:A,compare:ee===void 0?null:ee}},Zt.startTransition=function(A){var ee=V.T,q={};V.T=q;try{var ue=A(),je=V.S;je!==null&&je(q,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(Y,me)}catch(Re){me(Re)}finally{ee!==null&&q.types!==null&&(ee.types=q.types),V.T=ee}},Zt.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},Zt.use=function(A){return V.H.use(A)},Zt.useActionState=function(A,ee,q){return V.H.useActionState(A,ee,q)},Zt.useCallback=function(A,ee){return V.H.useCallback(A,ee)},Zt.useContext=function(A){return V.H.useContext(A)},Zt.useDebugValue=function(){},Zt.useDeferredValue=function(A,ee){return V.H.useDeferredValue(A,ee)},Zt.useEffect=function(A,ee){return V.H.useEffect(A,ee)},Zt.useEffectEvent=function(A){return V.H.useEffectEvent(A)},Zt.useId=function(){return V.H.useId()},Zt.useImperativeHandle=function(A,ee,q){return V.H.useImperativeHandle(A,ee,q)},Zt.useInsertionEffect=function(A,ee){return V.H.useInsertionEffect(A,ee)},Zt.useLayoutEffect=function(A,ee){return V.H.useLayoutEffect(A,ee)},Zt.useMemo=function(A,ee){return V.H.useMemo(A,ee)},Zt.useOptimistic=function(A,ee){return V.H.useOptimistic(A,ee)},Zt.useReducer=function(A,ee,q){return V.H.useReducer(A,ee,q)},Zt.useRef=function(A){return V.H.useRef(A)},Zt.useState=function(A){return V.H.useState(A)},Zt.useSyncExternalStore=function(A,ee,q){return V.H.useSyncExternalStore(A,ee,q)},Zt.useTransition=function(){return V.H.useTransition()},Zt.version="19.2.4",Zt}var ay;function dp(){return ay||(ay=1,Ih.exports=Cv()),Ih.exports}var Ph={exports:{}},Ro={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function kv(){if(ry)return Ro;ry=1;var t=dp();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ro.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ro.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},Ro.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},Ro.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Ro.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Ro.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,b=h(_,g.crossOrigin),v=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:b,integrity:v,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ro.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Ro.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,b=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ro.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Ro.requestFormReset=function(p){a.d.r(p)},Ro.unstable_batchedUpdates=function(p,g){return p(g)},Ro.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},Ro.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ro.version="19.2.4",Ro}var ly;function Ex(){if(ly)return Ph.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Ph.exports=kv(),Ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function jv(){if(cy)return tc;cy=1;var t=Sv(),n=dp(),i=Ex();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var w=!1,E=f.child;E;){if(E===o){w=!0,o=f,r=m;break}if(E===r){w=!0,r=f,o=m;break}E=E.sibling}if(!w){for(E=m.child;E;){if(E===o){w=!0,o=m,r=f;break}if(E===r){w=!0,r=m,o=f;break}E=E.sibling}if(!w)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var b=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),B=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case T:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case Y:return"SuspenseList";case Q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case B:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case N:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return s=e.displayName||null,s!==null?s:K(e.type)||"Memo";case U:s=e._payload,e=e._init;try{return K(e(s))}catch{}}return null}var le=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},me=[],Te=-1;function A(e){return{current:e}}function ee(e){0>Te||(e.current=me[Te],me[Te]=null,Te--)}function q(e,s){Te++,me[Te]=e.current,e.current=s}var ue=A(null),je=A(null),Re=A(null),ve=A(null);function ot(e,s){switch(q(Re,s),q(je,e),q(ue,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=C0(s),e=k0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(ue),q(ue,e)}function Xe(){ee(ue),ee(je),ee(Re)}function $e(e){e.memoizedState!==null&&q(ve,e);var s=ue.current,o=k0(s,e.type);s!==o&&(q(je,e),q(ue,o))}function lt(e){je.current===e&&(ee(ue),ee(je)),ve.current===e&&(ee(ve),Kl._currentValue=X)}var nt,zt;function ct(e){if(nt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);nt=s&&s[1]||"",zt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nt+e+zt}var Rt=!1;function Oe(e,s){if(!e||Rt)return"";Rt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Be=function(){throw Error()};if(Object.defineProperty(Be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Be,[])}catch(xe){var pe=xe}Reflect.construct(e,[],Be)}else{try{Be.call()}catch(xe){pe=xe}e.call(Be.prototype)}}else{try{throw Error()}catch(xe){pe=xe}(Be=e())&&typeof Be.catch=="function"&&Be.catch(function(){})}}catch(xe){if(xe&&pe&&typeof xe.stack=="string")return[xe.stack,pe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),w=m[0],E=m[1];if(w&&E){var F=w.split(`
`),fe=E.split(`
`);for(f=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;f<fe.length&&!fe[f].includes("DetermineComponentFrameRoot");)f++;if(r===F.length||f===fe.length)for(r=F.length-1,f=fe.length-1;1<=r&&0<=f&&F[r]!==fe[f];)f--;for(;1<=r&&0<=f;r--,f--)if(F[r]!==fe[f]){if(r!==1||f!==1)do if(r--,f--,0>f||F[r]!==fe[f]){var Se=`
`+F[r].replace(" at new "," at ");return e.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",e.displayName)),Se}while(1<=r&&0<=f);break}}}finally{Rt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?ct(o):""}function dt(e,s){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==s&&s!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return ct("Activity");default:return""}}function ce(e){try{var s="",o=null;do s+=dt(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var He=Object.prototype.hasOwnProperty,Ge=t.unstable_scheduleCallback,ze=t.unstable_cancelCallback,Mt=t.unstable_shouldYield,ft=t.unstable_requestPaint,rt=t.unstable_now,it=t.unstable_getCurrentPriorityLevel,at=t.unstable_ImmediatePriority,Et=t.unstable_UserBlockingPriority,Ze=t.unstable_NormalPriority,H=t.unstable_LowPriority,Z=t.unstable_IdlePriority,te=t.log,_e=t.unstable_setDisableYieldValue,Fe=null,Ue=null;function De(e){if(typeof te=="function"&&_e(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(Fe,e)}catch{}}var St=Math.clz32?Math.clz32:pt,Ve=Math.log,bt=Math.LN2;function pt(e){return e>>>=0,e===0?32:31-(Ve(e)/bt|0)|0}var Ie=256,st=262144,Ht=4194304;function cn(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,w=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~m,r!==0?f=cn(r):(w&=E,w!==0?f=cn(w):o||(o=E&~e,o!==0&&(f=cn(o))))):(E=r&~m,E!==0?f=cn(E):w!==0?f=cn(w):o||(o=r&~e,o!==0&&(f=cn(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Bt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function At(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function un(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function _t(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qt(e,s,o,r,f,m){var w=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var E=e.entanglements,F=e.expirationTimes,fe=e.hiddenUpdates;for(o=w&~o;0<o;){var Se=31-St(o),Be=1<<Se;E[Se]=0,F[Se]=-1;var pe=fe[Se];if(pe!==null)for(fe[Se]=null,Se=0;Se<pe.length;Se++){var xe=pe[Se];xe!==null&&(xe.lane&=-536870913)}o&=~Be}r!==0&&An(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(w&~s))}function An(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-St(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function os(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-St(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function gn(e,s){var o=s&-s;return o=(o&42)!==0?1:lo(o),(o&(e.suspendedLanes|s))!==0?0:o}function lo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wn(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:q0(e.type))}function Wt(e,s){var o=ie.p;try{return ie.p=e,s()}finally{ie.p=o}}var Mn=Math.random().toString(36).slice(2),an="__reactFiber$"+Mn,tn="__reactProps$"+Mn,Qe="__reactContainer$"+Mn,Zn="__reactEvents$"+Mn,Ls="__reactListeners$"+Mn,Fs="__reactHandles$"+Mn,ys="__reactResources$"+Mn,Xs="__reactMarker$"+Mn;function Mo(e){delete e[an],delete e[tn],delete e[Zn],delete e[Ls],delete e[Fs]}function yo(e){var s=e[an];if(s)return s;for(var o=e.parentNode;o;){if(s=o[Qe]||o[an]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=N0(e);e!==null;){if(o=e[an])return o;e=N0(e)}return s}e=o,o=e.parentNode}return null}function as(e){if(e=e[an]||e[Qe]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function xs(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Os(e){var s=e[ys];return s||(s=e[ys]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function nn(e){e[Xs]=!0}var pi=new Set,Wo={};function bs(e,s){Rn(e,s),Rn(e+"Capture",s)}function Rn(e,s){for(Wo[e]=s,e=0;e<s.length;e++)pi.add(s[e])}var Lo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oi={},Oo={};function Fo(e){return He.call(Oo,e)?!0:He.call(oi,e)?!1:Lo.test(e)?Oo[e]=!0:(oi[e]=!0,!1)}function co(e,s,o){if(Fo(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function vs(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function zs(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function vn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jn(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Yi(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){o=""+w,m.call(this,w)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(w){o=""+w},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Xo(e){if(!e._valueTracker){var s=Jn(e)?"checked":"value";e._valueTracker=Yi(e,s,""+e[s])}}function so(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Jn(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zo=/[\n"\\]/g;function rs(e){return e.replace(zo,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function $s(e,s,o,r,f,m,w,E){e.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.type=w:e.removeAttribute("type"),s!=null?w==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+vn(s)):e.value!==""+vn(s)&&(e.value=""+vn(s)):w!=="submit"&&w!=="reset"||e.removeAttribute("value"),s!=null?uo(e,w,vn(s)):o!=null?uo(e,w,vn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+vn(E):e.removeAttribute("name")}function Cn(e,s,o,r,f,m,w,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Xo(e);return}o=o!=null?""+vn(o):"",s=s!=null?""+vn(s):o,E||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(e.name=w),Xo(e)}function uo(e,s,o){s==="number"&&xo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function ls(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+vn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function Fn(e,s,o){if(s!=null&&(s=""+vn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+vn(o):""}function _i(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(le(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=vn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Xo(e)}function To(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var qo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||qo.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Di(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Xt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Xt(e,m,s[m])}function Is(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$o=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(e){return $o.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ps(){}var Eo=null;function Es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wn=null,fo=null;function Xn(e){var s=as(e);if(s&&(e=s.stateNode)){var o=e[tn]||null;e:switch(e=s.stateNode,s.type){case"input":if($s(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+rs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[tn]||null;if(!f)throw Error(a(90));$s(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&so(r)}break e;case"textarea":Fn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ls(e,!!o.multiple,s,!1)}}}var ws=!1;function qn(e,s,o){if(ws)return e(s,o);ws=!0;try{var r=e(s);return r}finally{if(ws=!1,(wn!==null||fo!==null)&&(yu(),wn&&(s=wn,e=fo,fo=wn=null,Xn(s),e)))for(s=0;s<e.length;s++)Xn(e[s])}}function Qt(e,s){var o=e.stateNode;if(o===null)return null;var r=o[tn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var qs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),es=!1;if(qs)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){es=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{es=!1}var cs=null,Ao=null,Ss=null;function ii(){if(Ss)return Ss;var e,s=Ao,o=s.length,r,f="value"in cs?cs.value:cs.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var w=o-e;for(r=1;r<=w&&s[o-r]===f[m-r];r++);return Ss=f.slice(e,1<r?1-r:void 0)}function As(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Ds(){return!0}function ho(){return!1}function x(e){function s(o,r,f,m,w){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ds:ho,this.isPropagationStopped=ho,this}return b(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),s}var k={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},D=x(k),O=b({},k,{view:0,detail:0}),ae=x(O),he,we,Ne,Je=b({},O,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ne&&(Ne&&e.type==="mousemove"?(he=e.screenX-Ne.screenX,we=e.screenY-Ne.screenY):we=he=0,Ne=e),he)},movementY:function(e){return"movementY"in e?e.movementY:we}}),ut=x(Je),$t=b({},Je,{dataTransfer:0}),Dt=x($t),sn=b({},O,{relatedTarget:0}),Ut=x(sn),zn=b({},k,{animationName:0,elapsedTime:0,pseudoElement:0}),Dn=x(zn),oo=b({},k,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bo=x(oo),en=b({},k,{data:0}),qe=x(en),ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ks={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Do={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function js(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Do[e])?!!s[e]:!1}function Ms(){return js}var mo=b({},O,{key:function(e){if(e.key){var s=ts[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ks[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yn=x(mo),Cs=b({},Je,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$n=x(Cs),ai=b({},O,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),ta=x(ai),gi=b({},k,{propertyName:0,elapsedTime:0,pseudoElement:0}),po=x(gi),us=b({},Je,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ke=x(us),et=b({},k,{newState:0,oldState:0}),yt=x(et),mt=[9,13,27,32],Lt=qs&&"CompositionEvent"in window,gt=null;qs&&"documentMode"in document&&(gt=document.documentMode);var fn=qs&&"TextEvent"in window&&!gt,rn=qs&&(!Lt||gt&&8<gt&&11>=gt),ds=" ",Ts=!1;function vo(e,s){switch(e){case"keyup":return mt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function na(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _o=!1;function va(e,s){switch(e){case"compositionend":return na(s);case"keypress":return s.which!==32?null:(Ts=!0,ds);case"textInput":return e=s.data,e===ds&&Ts?null:e;default:return null}}function Ko(e,s){if(_o)return e==="compositionend"||!Lt&&vo(e,s)?(e=ii(),Ss=Ao=cs=null,_o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return rn&&s.locale!=="ko"?null:s.data;default:return null}}var Lc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bl(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Lc[e.type]:s==="textarea"}function vl(e,s,o,r){wn?fo?fo.push(r):fo=[r]:wn=r,s=ku(s,"onChange"),0<s.length&&(o=new D("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var wa=null,Sa=null;function Oc(e){y0(e,0)}function R(e){var s=xs(e);if(so(s))return e}function $(e,s){if(e==="change")return s}var G=!1;if(qs){var W;if(qs){var ne="oninput"in document;if(!ne){var ye=document.createElement("div");ye.setAttribute("oninput","return;"),ne=typeof ye.oninput=="function"}W=ne}else W=!1;G=W&&(!document.documentMode||9<document.documentMode)}function Ye(){wa&&(wa.detachEvent("onpropertychange",We),Sa=wa=null)}function We(e){if(e.propertyName==="value"&&R(Sa)){var s=[];vl(s,Sa,e,Es(e)),qn(Oc,s)}}function tt(e,s,o){e==="focusin"?(Ye(),wa=s,Sa=o,wa.attachEvent("onpropertychange",We)):e==="focusout"&&Ye()}function vt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return R(Sa)}function Nt(e,s){if(e==="click")return R(s)}function Gt(e,s){if(e==="input"||e==="change")return R(s)}function Kt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var wt=typeof Object.is=="function"?Object.is:Kt;function ht(e,s){if(wt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!He.call(s,f)||!wt(e[f],s[f]))return!1}return!0}function fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hs(e,s){var o=fs(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=fs(o)}}function ms(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?ms(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function bn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=xo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=xo(e.document)}return s}function Nn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Yt=qs&&"documentMode"in document&&11>=document.documentMode,Ft=null,ps=null,Sn=null,io=!1;function No(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;io||Ft==null||Ft!==xo(r)||(r=Ft,"selectionStart"in r&&Nn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sn&&ht(Sn,r)||(Sn=r,r=ku(ps,"onSelect"),0<r.length&&(s=new D("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Ft)))}function Gn(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var yi={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionrun:Gn("Transition","TransitionRun"),transitionstart:Gn("Transition","TransitionStart"),transitioncancel:Gn("Transition","TransitionCancel"),transitionend:Gn("Transition","TransitionEnd")},Ni={},Ri={};qs&&(Ri=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function In(e){if(Ni[e])return Ni[e];if(!yi[e])return e;var s=yi[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Ri)return Ni[e]=s[o];return e}var Bi=In("animationend"),Wi=In("animationiteration"),zc=In("animationstart"),Yd=In("transitionrun"),Wd=In("transitionstart"),Fd=In("transitioncancel"),Qp=In("transitionend"),Zp=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xd.push("scrollEnd");function Li(e,s){Zp.set(e,s),bs(s,[e])}var $c=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],jr=0,qd=0;function Ic(){for(var e=jr,s=qd=jr=0;s<e;){var o=xi[s];xi[s++]=null;var r=xi[s];xi[s++]=null;var f=xi[s];xi[s++]=null;var m=xi[s];if(xi[s++]=null,r!==null&&f!==null){var w=r.pending;w===null?f.next=f:(f.next=w.next,w.next=f),r.pending=f}m!==0&&Jp(o,f,m)}}function Pc(e,s,o,r){xi[jr++]=e,xi[jr++]=s,xi[jr++]=o,xi[jr++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Gd(e,s,o,r){return Pc(e,s,o,r),Hc(e)}function er(e,s){return Pc(e,null,null,s),Hc(e)}function Jp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-St(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Hc(e){if(50<Vl)throw Vl=0,ih=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Mr={};function s2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,s,o,r){return new s2(e,s,o,r)}function Kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,s){var o=e.alternate;return o===null?(o=ri(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function e_(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Uc(e,s,o,r,f,m){var w=0;if(r=e,typeof e=="function")Kd(e)&&(w=1);else if(typeof e=="string")w=lv(e,o,ue.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Q:return e=ri(31,o,s,f),e.elementType=Q,e.lanes=m,e;case j:return tr(o.children,f,m,s);case M:w=8,f|=24;break;case T:return e=ri(12,o,s,f|2),e.elementType=T,e.lanes=m,e;case P:return e=ri(13,o,s,f),e.elementType=P,e.lanes=m,e;case Y:return e=ri(19,o,s,f),e.elementType=Y,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:w=10;break e;case I:w=9;break e;case N:w=11;break e;case V:w=14;break e;case U:w=16,r=null;break e}w=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=ri(w,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function tr(e,s,o,r){return e=ri(7,e,r,s),e.lanes=o,e}function Qd(e,s,o){return e=ri(6,e,null,s),e.lanes=o,e}function t_(e){var s=ri(18,null,null,0);return s.stateNode=e,s}function Zd(e,s,o){return s=ri(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var n_=new WeakMap;function bi(e,s){if(typeof e=="object"&&e!==null){var o=n_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ce(s)},n_.set(e,s),s)}return{value:e,source:s,stack:ce(s)}}var Tr=[],Er=0,Vc=null,wl=0,vi=[],wi=0,Ca=null,Fi=1,Xi="";function oa(e,s){Tr[Er++]=wl,Tr[Er++]=Vc,Vc=e,wl=s}function s_(e,s,o){vi[wi++]=Fi,vi[wi++]=Xi,vi[wi++]=Ca,Ca=e;var r=Fi;e=Xi;var f=32-St(r)-1;r&=~(1<<f),o+=1;var m=32-St(s)+f;if(30<m){var w=f-f%5;m=(r&(1<<w)-1).toString(32),r>>=w,f-=w,Fi=1<<32-St(s)+f|o<<f|r,Xi=m+e}else Fi=1<<m|o<<f|r,Xi=e}function Jd(e){e.return!==null&&(oa(e,1),s_(e,1,0))}function ef(e){for(;e===Vc;)Vc=Tr[--Er],Tr[Er]=null,wl=Tr[--Er],Tr[Er]=null;for(;e===Ca;)Ca=vi[--wi],vi[wi]=null,Xi=vi[--wi],vi[wi]=null,Fi=vi[--wi],vi[wi]=null}function o_(e,s){vi[wi++]=Fi,vi[wi++]=Xi,vi[wi++]=Ca,Fi=s.id,Xi=s.overflow,Ca=e}var wo=null,_s=null,xn=!1,ka=null,Si=!1,tf=Error(a(519));function ja(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sl(bi(s,e)),tf}function i_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[an]=e,s[tn]=r,o){case"dialog":mn("cancel",s),mn("close",s);break;case"iframe":case"object":case"embed":mn("load",s);break;case"video":case"audio":for(o=0;o<Wl.length;o++)mn(Wl[o],s);break;case"source":mn("error",s);break;case"img":case"image":case"link":mn("error",s),mn("load",s);break;case"details":mn("toggle",s);break;case"input":mn("invalid",s),Cn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":mn("invalid",s);break;case"textarea":mn("invalid",s),_i(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||w0(s.textContent,o)?(r.popover!=null&&(mn("beforetoggle",s),mn("toggle",s)),r.onScroll!=null&&mn("scroll",s),r.onScrollEnd!=null&&mn("scrollend",s),r.onClick!=null&&(s.onclick=Ps),s=!0):s=!1,s||ja(e,!0)}function a_(e){for(wo=e.return;wo;)switch(wo.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:wo=wo.return}}function Ar(e){if(e!==wo)return!1;if(!xn)return a_(e),xn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||bh(e.type,e.memoizedProps)),o=!o),o&&_s&&ja(e),a_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));_s=D0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));_s=D0(e)}else s===27?(s=_s,Pa(e.type)?(e=kh,kh=null,_s=e):_s=s):_s=wo?ki(e.stateNode.nextSibling):null;return!0}function nr(){_s=wo=null,xn=!1}function nf(){var e=ka;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),ka=null),e}function Sl(e){ka===null?ka=[e]:ka.push(e)}var sf=A(null),sr=null,ia=null;function Ma(e,s,o){q(sf,s._currentValue),s._currentValue=o}function aa(e){e._currentValue=sf.current,ee(sf)}function of(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function af(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var w=f.child;m=m.firstContext;e:for(;m!==null;){var E=m;m=f;for(var F=0;F<s.length;F++)if(E.context===s[F]){m.lanes|=o,E=m.alternate,E!==null&&(E.lanes|=o),of(m.return,o,e),r||(w=null);break e}m=E.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(a(341));w.lanes|=o,m=w.alternate,m!==null&&(m.lanes|=o),of(w,o,e),w=null}else w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===e){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function Dr(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(a(387));if(w=w.memoizedProps,w!==null){var E=f.type;wt(f.pendingProps.value,w.value)||(e!==null?e.push(E):e=[E])}}else if(f===ve.current){if(w=f.alternate,w===null)throw Error(a(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Kl):e=[Kl])}f=f.return}e!==null&&af(s,e,o,r),s.flags|=262144}function Yc(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){sr=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function So(e){return r_(sr,e)}function Wc(e,s){return sr===null&&or(e),r_(e,s)}function r_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ia===null){if(e===null)throw Error(a(308));ia=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ia=ia.next=s;return o}var o2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},i2=t.unstable_scheduleCallback,a2=t.unstable_NormalPriority,Qs={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new o2,data:new Map,refCount:0}}function Cl(e){e.refCount--,e.refCount===0&&i2(a2,function(){e.controller.abort()})}var kl=null,lf=0,Nr=0,Rr=null;function r2(e,s){if(kl===null){var o=kl=[];lf=0,Nr=dh(),Rr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return lf++,s.then(l_,l_),s}function l_(){if(--lf===0&&kl!==null){Rr!==null&&(Rr.status="fulfilled");var e=kl;kl=null,Nr=0,Rr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function l2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var c_=z.S;z.S=function(e,s){Fg=rt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&r2(e,s),c_!==null&&c_(e,s)};var ir=A(null);function cf(){var e=ir.current;return e!==null?e:Kn.pooledCache}function Fc(e,s){s===null?q(ir,ir.current):q(ir,s.pool)}function u_(){var e=cf();return e===null?null:{parent:Qs._currentValue,pool:e}}var Br=Error(a(460)),uf=Error(a(474)),Xc=Error(a(542)),qc={then:function(){}};function d_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function f_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Ps,Ps),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e;default:if(typeof s.status=="string")s.then(Ps,Ps);else{if(e=Kn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e}throw rr=s,Br}}function ar(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(rr=o,Br):o}}var rr=null;function h_(){if(rr===null)throw Error(a(459));var e=rr;return rr=null,e}function m_(e){if(e===Br||e===Xc)throw Error(a(483))}var Lr=null,jl=0;function Gc(e){var s=jl;return jl+=1,Lr===null&&(Lr=[]),f_(Lr,e,s)}function Ml(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Kc(e,s){throw s.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function p_(e){function s(re,J){if(e){var de=re.deletions;de===null?(re.deletions=[J],re.flags|=16):de.push(J)}}function o(re,J){if(!e)return null;for(;J!==null;)s(re,J),J=J.sibling;return null}function r(re){for(var J=new Map;re!==null;)re.key!==null?J.set(re.key,re):J.set(re.index,re),re=re.sibling;return J}function f(re,J){return re=sa(re,J),re.index=0,re.sibling=null,re}function m(re,J,de){return re.index=de,e?(de=re.alternate,de!==null?(de=de.index,de<J?(re.flags|=67108866,J):de):(re.flags|=67108866,J)):(re.flags|=1048576,J)}function w(re){return e&&re.alternate===null&&(re.flags|=67108866),re}function E(re,J,de,Ae){return J===null||J.tag!==6?(J=Qd(de,re.mode,Ae),J.return=re,J):(J=f(J,de),J.return=re,J)}function F(re,J,de,Ae){var It=de.type;return It===j?Se(re,J,de.props.children,Ae,de.key):J!==null&&(J.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===U&&ar(It)===J.type)?(J=f(J,de.props),Ml(J,de),J.return=re,J):(J=Uc(de.type,de.key,de.props,null,re.mode,Ae),Ml(J,de),J.return=re,J)}function fe(re,J,de,Ae){return J===null||J.tag!==4||J.stateNode.containerInfo!==de.containerInfo||J.stateNode.implementation!==de.implementation?(J=Zd(de,re.mode,Ae),J.return=re,J):(J=f(J,de.children||[]),J.return=re,J)}function Se(re,J,de,Ae,It){return J===null||J.tag!==7?(J=tr(de,re.mode,Ae,It),J.return=re,J):(J=f(J,de),J.return=re,J)}function Be(re,J,de){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return J=Qd(""+J,re.mode,de),J.return=re,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return de=Uc(J.type,J.key,J.props,null,re.mode,de),Ml(de,J),de.return=re,de;case C:return J=Zd(J,re.mode,de),J.return=re,J;case U:return J=ar(J),Be(re,J,de)}if(le(J)||be(J))return J=tr(J,re.mode,de,null),J.return=re,J;if(typeof J.then=="function")return Be(re,Gc(J),de);if(J.$$typeof===B)return Be(re,Wc(re,J),de);Kc(re,J)}return null}function pe(re,J,de,Ae){var It=J!==null?J.key:null;if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return It!==null?null:E(re,J,""+de,Ae);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case S:return de.key===It?F(re,J,de,Ae):null;case C:return de.key===It?fe(re,J,de,Ae):null;case U:return de=ar(de),pe(re,J,de,Ae)}if(le(de)||be(de))return It!==null?null:Se(re,J,de,Ae,null);if(typeof de.then=="function")return pe(re,J,Gc(de),Ae);if(de.$$typeof===B)return pe(re,J,Wc(re,de),Ae);Kc(re,de)}return null}function xe(re,J,de,Ae,It){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return re=re.get(de)||null,E(J,re,""+Ae,It);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case S:return re=re.get(Ae.key===null?de:Ae.key)||null,F(J,re,Ae,It);case C:return re=re.get(Ae.key===null?de:Ae.key)||null,fe(J,re,Ae,It);case U:return Ae=ar(Ae),xe(re,J,de,Ae,It)}if(le(Ae)||be(Ae))return re=re.get(de)||null,Se(J,re,Ae,It,null);if(typeof Ae.then=="function")return xe(re,J,de,Gc(Ae),It);if(Ae.$$typeof===B)return xe(re,J,de,Wc(J,Ae),It);Kc(J,Ae)}return null}function kt(re,J,de,Ae){for(var It=null,kn=null,Tt=J,ln=J=0,_n=null;Tt!==null&&ln<de.length;ln++){Tt.index>ln?(_n=Tt,Tt=null):_n=Tt.sibling;var jn=pe(re,Tt,de[ln],Ae);if(jn===null){Tt===null&&(Tt=_n);break}e&&Tt&&jn.alternate===null&&s(re,Tt),J=m(jn,J,ln),kn===null?It=jn:kn.sibling=jn,kn=jn,Tt=_n}if(ln===de.length)return o(re,Tt),xn&&oa(re,ln),It;if(Tt===null){for(;ln<de.length;ln++)Tt=Be(re,de[ln],Ae),Tt!==null&&(J=m(Tt,J,ln),kn===null?It=Tt:kn.sibling=Tt,kn=Tt);return xn&&oa(re,ln),It}for(Tt=r(Tt);ln<de.length;ln++)_n=xe(Tt,re,ln,de[ln],Ae),_n!==null&&(e&&_n.alternate!==null&&Tt.delete(_n.key===null?ln:_n.key),J=m(_n,J,ln),kn===null?It=_n:kn.sibling=_n,kn=_n);return e&&Tt.forEach(function(Wa){return s(re,Wa)}),xn&&oa(re,ln),It}function Vt(re,J,de,Ae){if(de==null)throw Error(a(151));for(var It=null,kn=null,Tt=J,ln=J=0,_n=null,jn=de.next();Tt!==null&&!jn.done;ln++,jn=de.next()){Tt.index>ln?(_n=Tt,Tt=null):_n=Tt.sibling;var Wa=pe(re,Tt,jn.value,Ae);if(Wa===null){Tt===null&&(Tt=_n);break}e&&Tt&&Wa.alternate===null&&s(re,Tt),J=m(Wa,J,ln),kn===null?It=Wa:kn.sibling=Wa,kn=Wa,Tt=_n}if(jn.done)return o(re,Tt),xn&&oa(re,ln),It;if(Tt===null){for(;!jn.done;ln++,jn=de.next())jn=Be(re,jn.value,Ae),jn!==null&&(J=m(jn,J,ln),kn===null?It=jn:kn.sibling=jn,kn=jn);return xn&&oa(re,ln),It}for(Tt=r(Tt);!jn.done;ln++,jn=de.next())jn=xe(Tt,re,ln,jn.value,Ae),jn!==null&&(e&&jn.alternate!==null&&Tt.delete(jn.key===null?ln:jn.key),J=m(jn,J,ln),kn===null?It=jn:kn.sibling=jn,kn=jn);return e&&Tt.forEach(function(xv){return s(re,xv)}),xn&&oa(re,ln),It}function Un(re,J,de,Ae){if(typeof de=="object"&&de!==null&&de.type===j&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case S:e:{for(var It=de.key;J!==null;){if(J.key===It){if(It=de.type,It===j){if(J.tag===7){o(re,J.sibling),Ae=f(J,de.props.children),Ae.return=re,re=Ae;break e}}else if(J.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===U&&ar(It)===J.type){o(re,J.sibling),Ae=f(J,de.props),Ml(Ae,de),Ae.return=re,re=Ae;break e}o(re,J);break}else s(re,J);J=J.sibling}de.type===j?(Ae=tr(de.props.children,re.mode,Ae,de.key),Ae.return=re,re=Ae):(Ae=Uc(de.type,de.key,de.props,null,re.mode,Ae),Ml(Ae,de),Ae.return=re,re=Ae)}return w(re);case C:e:{for(It=de.key;J!==null;){if(J.key===It)if(J.tag===4&&J.stateNode.containerInfo===de.containerInfo&&J.stateNode.implementation===de.implementation){o(re,J.sibling),Ae=f(J,de.children||[]),Ae.return=re,re=Ae;break e}else{o(re,J);break}else s(re,J);J=J.sibling}Ae=Zd(de,re.mode,Ae),Ae.return=re,re=Ae}return w(re);case U:return de=ar(de),Un(re,J,de,Ae)}if(le(de))return kt(re,J,de,Ae);if(be(de)){if(It=be(de),typeof It!="function")throw Error(a(150));return de=It.call(de),Vt(re,J,de,Ae)}if(typeof de.then=="function")return Un(re,J,Gc(de),Ae);if(de.$$typeof===B)return Un(re,J,Wc(re,de),Ae);Kc(re,de)}return typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint"?(de=""+de,J!==null&&J.tag===6?(o(re,J.sibling),Ae=f(J,de),Ae.return=re,re=Ae):(o(re,J),Ae=Qd(de,re.mode,Ae),Ae.return=re,re=Ae),w(re)):o(re,J)}return function(re,J,de,Ae){try{jl=0;var It=Un(re,J,de,Ae);return Lr=null,It}catch(Tt){if(Tt===Br||Tt===Xc)throw Tt;var kn=ri(29,Tt,null,re.mode);return kn.lanes=Ae,kn.return=re,kn}finally{}}}var lr=p_(!0),__=p_(!1),Ta=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Tn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Hc(e),Jp(e,null,o),s}return Pc(e,r,s,o),Hc(e)}function Tl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,os(e,o)}}function hf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var mf=!1;function El(){if(mf){var e=Rr;if(e!==null)throw e}}function Al(e,s,o,r){mf=!1;var f=e.updateQueue;Ta=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var F=E,fe=F.next;F.next=null,w===null?m=fe:w.next=fe,w=F;var Se=e.alternate;Se!==null&&(Se=Se.updateQueue,E=Se.lastBaseUpdate,E!==w&&(E===null?Se.firstBaseUpdate=fe:E.next=fe,Se.lastBaseUpdate=F))}if(m!==null){var Be=f.baseState;w=0,Se=fe=F=null,E=m;do{var pe=E.lane&-536870913,xe=pe!==E.lane;if(xe?(pn&pe)===pe:(r&pe)===pe){pe!==0&&pe===Nr&&(mf=!0),Se!==null&&(Se=Se.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var kt=e,Vt=E;pe=s;var Un=o;switch(Vt.tag){case 1:if(kt=Vt.payload,typeof kt=="function"){Be=kt.call(Un,Be,pe);break e}Be=kt;break e;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=Vt.payload,pe=typeof kt=="function"?kt.call(Un,Be,pe):kt,pe==null)break e;Be=b({},Be,pe);break e;case 2:Ta=!0}}pe=E.callback,pe!==null&&(e.flags|=64,xe&&(e.flags|=8192),xe=f.callbacks,xe===null?f.callbacks=[pe]:xe.push(pe))}else xe={lane:pe,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Se===null?(fe=Se=xe,F=Be):Se=Se.next=xe,w|=pe;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;xe=E,E=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);Se===null&&(F=Be),f.baseState=F,f.firstBaseUpdate=fe,f.lastBaseUpdate=Se,m===null&&(f.shared.lanes=0),La|=w,e.lanes=w,e.memoizedState=Be}}function g_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function y_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)g_(o[e],s)}var Or=A(null),Qc=A(0);function x_(e,s){e=pa,q(Qc,e),q(Or,s),pa=e|s.baseLanes}function pf(){q(Qc,pa),q(Or,Or.current)}function _f(){pa=Qc.current,ee(Or),ee(Qc)}var li=A(null),Ci=null;function Da(e){var s=e.alternate;q(Hs,Hs.current&1),q(li,e),Ci===null&&(s===null||Or.current!==null||s.memoizedState!==null)&&(Ci=e)}function gf(e){q(Hs,Hs.current),q(li,e),Ci===null&&(Ci=e)}function b_(e){e.tag===22?(q(Hs,Hs.current),q(li,e),Ci===null&&(Ci=e)):Na()}function Na(){q(Hs,Hs.current),q(li,li.current)}function ci(e){ee(li),Ci===e&&(Ci=null),ee(Hs)}var Hs=A(0);function Zc(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Sh(o)||Ch(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ra=0,on=null,Pn=null,Zs=null,Jc=!1,zr=!1,cr=!1,eu=0,Dl=0,$r=null,c2=0;function Ns(){throw Error(a(321))}function yf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!wt(e[o],s[o]))return!1;return!0}function xf(e,s,o,r,f,m){return ra=m,on=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=e===null||e.memoizedState===null?sg:Bf,cr=!1,m=o(r,f),cr=!1,zr&&(m=w_(s,o,r,f)),v_(e),m}function v_(e){z.H=Bl;var s=Pn!==null&&Pn.next!==null;if(ra=0,Zs=Pn=on=null,Jc=!1,Dl=0,$r=null,s)throw Error(a(300));e===null||Js||(e=e.dependencies,e!==null&&Yc(e)&&(Js=!0))}function w_(e,s,o,r){on=e;var f=0;do{if(zr&&($r=null),Dl=0,zr=!1,25<=f)throw Error(a(301));if(f+=1,Zs=Pn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=og,m=s(o,r)}while(zr);return m}function u2(){var e=z.H,s=e.useState()[0];return s=typeof s.then=="function"?Nl(s):s,e=e.useState()[0],(Pn!==null?Pn.memoizedState:null)!==e&&(on.flags|=1024),s}function bf(){var e=eu!==0;return eu=0,e}function vf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function wf(e){if(Jc){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}Jc=!1}ra=0,Zs=Pn=on=null,zr=!1,Dl=eu=0,$r=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zs===null?on.memoizedState=Zs=e:Zs=Zs.next=e,Zs}function Us(){if(Pn===null){var e=on.alternate;e=e!==null?e.memoizedState:null}else e=Pn.next;var s=Zs===null?on.memoizedState:Zs.next;if(s!==null)Zs=s,Pn=e;else{if(e===null)throw on.alternate===null?Error(a(467)):Error(a(310));Pn=e,e={memoizedState:Pn.memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null},Zs===null?on.memoizedState=Zs=e:Zs=Zs.next=e}return Zs}function tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nl(e){var s=Dl;return Dl+=1,$r===null&&($r=[]),e=f_($r,e,s),s=on,(Zs===null?s.memoizedState:Zs.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?sg:Bf),e}function nu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Nl(e);if(e.$$typeof===B)return So(e)}throw Error(a(438,String(e)))}function Sf(e){var s=null,o=on.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=on.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=tu(),on.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=se;return s.index++,o}function la(e,s){return typeof s=="function"?s(e):s}function su(e){var s=Us();return Cf(s,Pn,e)}function Cf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var E=w=null,F=null,fe=s,Se=!1;do{var Be=fe.lane&-536870913;if(Be!==fe.lane?(pn&Be)===Be:(ra&Be)===Be){var pe=fe.revertLane;if(pe===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),Be===Nr&&(Se=!0);else if((ra&pe)===pe){fe=fe.next,pe===Nr&&(Se=!0);continue}else Be={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},F===null?(E=F=Be,w=m):F=F.next=Be,on.lanes|=pe,La|=pe;Be=fe.action,cr&&o(m,Be),m=fe.hasEagerState?fe.eagerState:o(m,Be)}else pe={lane:Be,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},F===null?(E=F=pe,w=m):F=F.next=pe,on.lanes|=Be,La|=Be;fe=fe.next}while(fe!==null&&fe!==s);if(F===null?w=m:F.next=E,!wt(m,e.memoizedState)&&(Js=!0,Se&&(o=Rr,o!==null)))throw o;e.memoizedState=m,e.baseState=w,e.baseQueue=F,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function kf(e){var s=Us(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do m=e(m,w.action),w=w.next;while(w!==f);wt(m,s.memoizedState)||(Js=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function S_(e,s,o){var r=on,f=Us(),m=xn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var w=!wt((Pn||f).memoizedState,o);if(w&&(f.memoizedState=o,Js=!0),f=f.queue,Tf(j_.bind(null,r,f,e),[e]),f.getSnapshot!==s||w||Zs!==null&&Zs.memoizedState.tag&1){if(r.flags|=2048,Ir(9,{destroy:void 0},k_.bind(null,r,f,o,s),null),Kn===null)throw Error(a(349));m||(ra&127)!==0||C_(r,s,o)}return o}function C_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=on.updateQueue,s===null?(s=tu(),on.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function k_(e,s,o,r){s.value=o,s.getSnapshot=r,M_(s)&&T_(e)}function j_(e,s,o){return o(function(){M_(s)&&T_(e)})}function M_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!wt(e,o)}catch{return!0}}function T_(e){var s=er(e,2);s!==null&&ti(s,e,2)}function jf(e){var s=Po();if(typeof e=="function"){var o=e;if(e=o(),cr){De(!0);try{o()}finally{De(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},s}function E_(e,s,o,r){return e.baseState=o,Cf(e,Pn,typeof r=="function"?r:la)}function d2(e,s,o,r,f){if(au(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){m.listeners.push(w)}};z.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,A_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function A_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=z.T,w={};z.T=w;try{var E=o(f,r),F=z.S;F!==null&&F(w,E),D_(e,s,E)}catch(fe){Mf(e,s,fe)}finally{m!==null&&w.types!==null&&(m.types=w.types),z.T=m}}else try{m=o(f,r),D_(e,s,m)}catch(fe){Mf(e,s,fe)}}function D_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){N_(e,s,r)},function(r){return Mf(e,s,r)}):N_(e,s,o)}function N_(e,s,o){s.status="fulfilled",s.value=o,R_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,A_(e,o)))}function Mf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,R_(s),s=s.next;while(s!==r)}e.action=null}function R_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function B_(e,s){return s}function L_(e,s){if(xn){var o=Kn.formState;if(o!==null){e:{var r=on;if(xn){if(_s){t:{for(var f=_s,m=Si;f.nodeType!==8;){if(!m){f=null;break t}if(f=ki(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){_s=ki(f.nextSibling),r=f.data==="F!";break e}}ja(r)}r=!1}r&&(s=o[0])}}return o=Po(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B_,lastRenderedState:s},o.queue=r,o=eg.bind(null,on,r),r.dispatch=o,r=jf(!1),m=Rf.bind(null,on,!1,r.queue),r=Po(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=d2.bind(null,on,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function O_(e){var s=Us();return z_(s,Pn,e)}function z_(e,s,o){if(s=Cf(e,s,B_)[0],e=su(la)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Nl(s)}catch(w){throw w===Br?Xc:w}else r=s;s=Us();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(on.flags|=2048,Ir(9,{destroy:void 0},f2.bind(null,f,o),null)),[r,m,e]}function f2(e,s){e.action=s}function $_(e){var s=Us(),o=Pn;if(o!==null)return z_(s,o,e);Us(),s=s.memoizedState,o=Us();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Ir(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=on.updateQueue,s===null&&(s=tu(),on.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function I_(){return Us().memoizedState}function ou(e,s,o,r){var f=Po();on.flags|=e,f.memoizedState=Ir(1|s,{destroy:void 0},o,r===void 0?null:r)}function iu(e,s,o,r){var f=Us();r=r===void 0?null:r;var m=f.memoizedState.inst;Pn!==null&&r!==null&&yf(r,Pn.memoizedState.deps)?f.memoizedState=Ir(s,m,o,r):(on.flags|=e,f.memoizedState=Ir(1|s,m,o,r))}function P_(e,s){ou(8390656,8,e,s)}function Tf(e,s){iu(2048,8,e,s)}function h2(e){on.flags|=4;var s=on.updateQueue;if(s===null)s=tu(),on.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function H_(e){var s=Us().memoizedState;return h2({ref:s,nextImpl:e}),function(){if((Tn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function U_(e,s){return iu(4,2,e,s)}function V_(e,s){return iu(4,4,e,s)}function Y_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function W_(e,s,o){o=o!=null?o.concat([e]):null,iu(4,4,Y_.bind(null,s,e),o)}function Ef(){}function F_(e,s){var o=Us();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&yf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function X_(e,s){var o=Us();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&yf(s,r[1]))return r[0];if(r=e(),cr){De(!0);try{e()}finally{De(!1)}}return o.memoizedState=[r,s],r}function Af(e,s,o){return o===void 0||(ra&1073741824)!==0&&(pn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=qg(),on.lanes|=e,La|=e,o)}function q_(e,s,o,r){return wt(o,s)?o:Or.current!==null?(e=Af(e,o,r),wt(e,s)||(Js=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(pn&261930)===0?(Js=!0,e.memoizedState=o):(e=qg(),on.lanes|=e,La|=e,s)}function G_(e,s,o,r,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var w=z.T,E={};z.T=E,Rf(e,!1,s,o);try{var F=f(),fe=z.S;if(fe!==null&&fe(E,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var Se=l2(F,r);Rl(e,s,Se,fi(e))}else Rl(e,s,r,fi(e))}catch(Be){Rl(e,s,{then:function(){},status:"rejected",reason:Be},fi())}finally{ie.p=m,w!==null&&E.types!==null&&(w.types=E.types),z.T=w}}function m2(){}function Df(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=K_(e).queue;G_(e,f,s,X,o===null?m2:function(){return Q_(e),o(r)})}function K_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:X},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function Q_(e){var s=K_(e);s.next===null&&(s=e.alternate.memoizedState),Rl(e,s.next.queue,{},fi())}function Nf(){return So(Kl)}function Z_(){return Us().memoizedState}function J_(){return Us().memoizedState}function p2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=fi();e=Ea(o);var r=Aa(s,e,o);r!==null&&(ti(r,s,o),Tl(r,s,o)),s={cache:rf()},e.payload=s;return}s=s.return}}function _2(e,s,o){var r=fi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},au(e)?tg(s,o):(o=Gd(e,s,o,r),o!==null&&(ti(o,e,r),ng(o,s,r)))}function eg(e,s,o){var r=fi();Rl(e,s,o,r)}function Rl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(au(e))tg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,E=m(w,o);if(f.hasEagerState=!0,f.eagerState=E,wt(E,w))return Pc(e,s,f,0),Kn===null&&Ic(),!1}catch{}finally{}if(o=Gd(e,s,f,r),o!==null)return ti(o,e,r),ng(o,s,r),!0}return!1}function Rf(e,s,o,r){if(r={lane:2,revertLane:dh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},au(e)){if(s)throw Error(a(479))}else s=Gd(e,o,r,2),s!==null&&ti(s,e,2)}function au(e){var s=e.alternate;return e===on||s!==null&&s===on}function tg(e,s){zr=Jc=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function ng(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,os(e,o)}}var Bl={readContext:So,use:nu,useCallback:Ns,useContext:Ns,useEffect:Ns,useImperativeHandle:Ns,useLayoutEffect:Ns,useInsertionEffect:Ns,useMemo:Ns,useReducer:Ns,useRef:Ns,useState:Ns,useDebugValue:Ns,useDeferredValue:Ns,useTransition:Ns,useSyncExternalStore:Ns,useId:Ns,useHostTransitionStatus:Ns,useFormState:Ns,useActionState:Ns,useOptimistic:Ns,useMemoCache:Ns,useCacheRefresh:Ns};Bl.useEffectEvent=Ns;var sg={readContext:So,use:nu,useCallback:function(e,s){return Po().memoizedState=[e,s===void 0?null:s],e},useContext:So,useEffect:P_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ou(4194308,4,Y_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ou(4194308,4,e,s)},useInsertionEffect:function(e,s){ou(4,2,e,s)},useMemo:function(e,s){var o=Po();s=s===void 0?null:s;var r=e();if(cr){De(!0);try{e()}finally{De(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Po();if(o!==void 0){var f=o(s);if(cr){De(!0);try{o(s)}finally{De(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=_2.bind(null,on,e),[r.memoizedState,e]},useRef:function(e){var s=Po();return e={current:e},s.memoizedState=e},useState:function(e){e=jf(e);var s=e.queue,o=eg.bind(null,on,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Po();return Af(o,e,s)},useTransition:function(){var e=jf(!1);return e=G_.bind(null,on,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=on,f=Po();if(xn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),Kn===null)throw Error(a(349));(pn&127)!==0||C_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,P_(j_.bind(null,r,m,e),[e]),r.flags|=2048,Ir(9,{destroy:void 0},k_.bind(null,r,m,o,s),null),o},useId:function(){var e=Po(),s=Kn.identifierPrefix;if(xn){var o=Xi,r=Fi;o=(r&~(1<<32-St(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=eu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=c2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Nf,useFormState:L_,useActionState:L_,useOptimistic:function(e){var s=Po();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Rf.bind(null,on,!0,o),o.dispatch=s,[e,s]},useMemoCache:Sf,useCacheRefresh:function(){return Po().memoizedState=p2.bind(null,on)},useEffectEvent:function(e){var s=Po(),o={impl:e};return s.memoizedState=o,function(){if((Tn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Bf={readContext:So,use:nu,useCallback:F_,useContext:So,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:U_,useLayoutEffect:V_,useMemo:X_,useReducer:su,useRef:I_,useState:function(){return su(la)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Us();return q_(o,Pn.memoizedState,e,s)},useTransition:function(){var e=su(la)[0],s=Us().memoizedState;return[typeof e=="boolean"?e:Nl(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Nf,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=Us();return E_(o,Pn,e,s)},useMemoCache:Sf,useCacheRefresh:J_};Bf.useEffectEvent=H_;var og={readContext:So,use:nu,useCallback:F_,useContext:So,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:U_,useLayoutEffect:V_,useMemo:X_,useReducer:kf,useRef:I_,useState:function(){return kf(la)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Us();return Pn===null?Af(o,e,s):q_(o,Pn.memoizedState,e,s)},useTransition:function(){var e=kf(la)[0],s=Us().memoizedState;return[typeof e=="boolean"?e:Nl(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Nf,useFormState:$_,useActionState:$_,useOptimistic:function(e,s){var o=Us();return Pn!==null?E_(o,Pn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:J_};og.useEffectEvent=H_;function Lf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:b({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Of={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=fi(),f=Ea(r);f.payload=s,o!=null&&(f.callback=o),s=Aa(e,f,r),s!==null&&(ti(s,e,r),Tl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=fi(),f=Ea(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Aa(e,f,r),s!==null&&(ti(s,e,r),Tl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=fi(),r=Ea(o);r.tag=2,s!=null&&(r.callback=s),s=Aa(e,r,o),s!==null&&(ti(s,e,o),Tl(s,e,o))}};function ig(e,s,o,r,f,m,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,w):s.prototype&&s.prototype.isPureReactComponent?!ht(o,r)||!ht(f,m):!0}function ag(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Of.enqueueReplaceState(s,s.state,null)}function ur(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=b({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function rg(e){$c(e)}function lg(e){console.error(e)}function cg(e){$c(e)}function ru(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function ug(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function zf(e,s,o){return o=Ea(o),o.tag=3,o.payload={element:null},o.callback=function(){ru(e,s)},o}function dg(e){return e=Ea(e),e.tag=3,e}function fg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){ug(s,o,r)}}var w=o.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(e.callback=function(){ug(s,o,r),typeof f!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function g2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Dr(s,o,f,!0),o=li.current,o!==null){switch(o.tag){case 31:case 13:return Ci===null?xu():o.alternate===null&&Rs===0&&(Rs=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),lh(e,r,f)),!1;case 22:return o.flags|=65536,r===qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),lh(e,r,f)),!1}throw Error(a(435,o.tag))}return lh(e,r,f),xu(),!1}if(xn)return s=li.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==tf&&(e=Error(a(422),{cause:r}),Sl(bi(e,o)))):(r!==tf&&(s=Error(a(423),{cause:r}),Sl(bi(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=bi(r,o),f=zf(e.stateNode,r,f),hf(e,f),Rs!==4&&(Rs=2)),!1;var m=Error(a(520),{cause:r});if(m=bi(m,o),Ul===null?Ul=[m]:Ul.push(m),Rs!==4&&(Rs=2),s===null)return!0;r=bi(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=zf(o.stateNode,r,e),hf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Oa===null||!Oa.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=dg(f),fg(f,e,o,r),hf(o,f),!1}o=o.return}while(o!==null);return!1}var $f=Error(a(461)),Js=!1;function Co(e,s,o,r){s.child=e===null?__(s,null,o,r):lr(s,e.child,o,r)}function hg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var w={};for(var E in r)E!=="ref"&&(w[E]=r[E])}else w=r;return or(s),r=xf(e,s,o,w,m,f),E=bf(),e!==null&&!Js?(vf(e,s,f),ca(e,s,f)):(xn&&E&&Jd(s),s.flags|=1,Co(e,s,r,f),s.child)}function mg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Kd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,pg(e,s,m,r,f)):(e=Uc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Ff(e,f)){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:ht,o(w,r)&&e.ref===s.ref)return ca(e,s,f)}return s.flags|=1,e=sa(m,r),e.ref=s.ref,e.return=s,s.child=e}function pg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(ht(m,r)&&e.ref===s.ref)if(Js=!1,s.pendingProps=r=m,Ff(e,f))(e.flags&131072)!==0&&(Js=!0);else return s.lanes=e.lanes,ca(e,s,f)}return If(e,s,o,r,f)}function _g(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return gg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fc(s,m!==null?m.cachePool:null),m!==null?x_(s,m):pf(),b_(s);else return r=s.lanes=536870912,gg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(Fc(s,m.cachePool),x_(s,m),Na(),s.memoizedState=null):(e!==null&&Fc(s,null),pf(),Na());return Co(e,s,f,o),s.child}function Ll(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function gg(e,s,o,r,f){var m=cf();return m=m===null?null:{parent:Qs._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&Fc(s,null),pf(),b_(s),e!==null&&Dr(e,s,r,!0),s.childLanes=f,null}function lu(e,s){return s=uu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function yg(e,s,o){return lr(s,e.child,null,o),e=lu(s,s.pendingProps),e.flags|=2,ci(s),s.memoizedState=null,e}function y2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(xn){if(r.mode==="hidden")return e=lu(s,r),s.lanes=536870912,Ll(null,e);if(gf(s),(e=_s)?(e=A0(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Fi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,wo=s,_s=null)):e=null,e===null)throw ja(s);return s.lanes=536870912,null}return lu(s,r)}var m=e.memoizedState;if(m!==null){var w=m.dehydrated;if(gf(s),f)if(s.flags&256)s.flags&=-257,s=yg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Js||Dr(e,s,o,!1),f=(o&e.childLanes)!==0,Js||f){if(r=Kn,r!==null&&(w=gn(r,o),w!==0&&w!==m.retryLane))throw m.retryLane=w,er(e,w),ti(r,e,w),$f;xu(),s=yg(e,s,o)}else e=m.treeContext,_s=ki(w.nextSibling),wo=s,xn=!0,ka=null,Si=!1,e!==null&&o_(s,e),s=lu(s,r),s.flags|=4096;return s}return e=sa(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function cu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function If(e,s,o,r,f){return or(s),o=xf(e,s,o,r,void 0,f),r=bf(),e!==null&&!Js?(vf(e,s,f),ca(e,s,f)):(xn&&r&&Jd(s),s.flags|=1,Co(e,s,o,f),s.child)}function xg(e,s,o,r,f,m){return or(s),s.updateQueue=null,o=w_(s,r,o,f),v_(e),r=bf(),e!==null&&!Js?(vf(e,s,m),ca(e,s,m)):(xn&&r&&Jd(s),s.flags|=1,Co(e,s,o,m),s.child)}function bg(e,s,o,r,f){if(or(s),s.stateNode===null){var m=Mr,w=o.contextType;typeof w=="object"&&w!==null&&(m=So(w)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Of,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},df(s),w=o.contextType,m.context=typeof w=="object"&&w!==null?So(w):Mr,m.state=s.memoizedState,w=o.getDerivedStateFromProps,typeof w=="function"&&(Lf(s,o,w,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&Of.enqueueReplaceState(m,m.state,null),Al(s,r,m,f),El(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var E=s.memoizedProps,F=ur(o,E);m.props=F;var fe=m.context,Se=o.contextType;w=Mr,typeof Se=="object"&&Se!==null&&(w=So(Se));var Be=o.getDerivedStateFromProps;Se=typeof Be=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=s.pendingProps!==E,Se||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||fe!==w)&&ag(s,m,r,w),Ta=!1;var pe=s.memoizedState;m.state=pe,Al(s,r,m,f),El(),fe=s.memoizedState,E||pe!==fe||Ta?(typeof Be=="function"&&(Lf(s,o,Be,r),fe=s.memoizedState),(F=Ta||ig(s,o,F,r,pe,fe,w))?(Se||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=fe),m.props=r,m.state=fe,m.context=w,r=F):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,ff(e,s),w=s.memoizedProps,Se=ur(o,w),m.props=Se,Be=s.pendingProps,pe=m.context,fe=o.contextType,F=Mr,typeof fe=="object"&&fe!==null&&(F=So(fe)),E=o.getDerivedStateFromProps,(fe=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==Be||pe!==F)&&ag(s,m,r,F),Ta=!1,pe=s.memoizedState,m.state=pe,Al(s,r,m,f),El();var xe=s.memoizedState;w!==Be||pe!==xe||Ta||e!==null&&e.dependencies!==null&&Yc(e.dependencies)?(typeof E=="function"&&(Lf(s,o,E,r),xe=s.memoizedState),(Se=Ta||ig(s,o,Se,r,pe,xe,F)||e!==null&&e.dependencies!==null&&Yc(e.dependencies))?(fe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,xe,F),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,xe,F)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&pe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&pe===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=xe),m.props=r,m.state=xe,m.context=F,r=Se):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&pe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&pe===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,cu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=lr(s,e.child,null,f),s.child=lr(s,null,o,f)):Co(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ca(e,s,f),e}function vg(e,s,o,r){return nr(),s.flags|=256,Co(e,s,o,r),s.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:u_()}}function Uf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=di),e}function wg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,w;if((w=m)||(w=e!==null&&e.memoizedState===null?!1:(Hs.current&2)!==0),w&&(f=!0,s.flags&=-129),w=(s.flags&32)!==0,s.flags&=-33,e===null){if(xn){if(f?Da(s):Na(),(e=_s)?(e=A0(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Fi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,wo=s,_s=null)):e=null,e===null)throw ja(s);return Ch(e)?s.lanes=32:s.lanes=536870912,null}var E=r.children;return r=r.fallback,f?(Na(),f=s.mode,E=uu({mode:"hidden",children:E},f),r=tr(r,f,o,null),E.return=s,r.return=s,E.sibling=r,s.child=E,r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,w,o),s.memoizedState=Pf,Ll(null,r)):(Da(s),Vf(s,E))}var F=e.memoizedState;if(F!==null&&(E=F.dehydrated,E!==null)){if(m)s.flags&256?(Da(s),s.flags&=-257,s=Yf(e,s,o)):s.memoizedState!==null?(Na(),s.child=e.child,s.flags|=128,s=null):(Na(),E=r.fallback,f=s.mode,r=uu({mode:"visible",children:r.children},f),E=tr(E,f,o,null),E.flags|=2,r.return=s,E.return=s,r.sibling=E,s.child=r,lr(s,e.child,null,o),r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,w,o),s.memoizedState=Pf,s=Ll(null,r));else if(Da(s),Ch(E)){if(w=E.nextSibling&&E.nextSibling.dataset,w)var fe=w.dgst;w=fe,r=Error(a(419)),r.stack="",r.digest=w,Sl({value:r,source:null,stack:null}),s=Yf(e,s,o)}else if(Js||Dr(e,s,o,!1),w=(o&e.childLanes)!==0,Js||w){if(w=Kn,w!==null&&(r=gn(w,o),r!==0&&r!==F.retryLane))throw F.retryLane=r,er(e,r),ti(w,e,r),$f;Sh(E)||xu(),s=Yf(e,s,o)}else Sh(E)?(s.flags|=192,s.child=e.child,s=null):(e=F.treeContext,_s=ki(E.nextSibling),wo=s,xn=!0,ka=null,Si=!1,e!==null&&o_(s,e),s=Vf(s,r.children),s.flags|=4096);return s}return f?(Na(),E=r.fallback,f=s.mode,F=e.child,fe=F.sibling,r=sa(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,fe!==null?E=sa(fe,E):(E=tr(E,f,o,null),E.flags|=2),E.return=s,r.return=s,r.sibling=E,s.child=r,Ll(null,r),r=s.child,E=e.child.memoizedState,E===null?E=Hf(o):(f=E.cachePool,f!==null?(F=Qs._currentValue,f=f.parent!==F?{parent:F,pool:F}:f):f=u_(),E={baseLanes:E.baseLanes|o,cachePool:f}),r.memoizedState=E,r.childLanes=Uf(e,w,o),s.memoizedState=Pf,Ll(e.child,r)):(Da(s),o=e.child,e=o.sibling,o=sa(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(w=s.deletions,w===null?(s.deletions=[e],s.flags|=16):w.push(e)),s.child=o,s.memoizedState=null,o)}function Vf(e,s){return s=uu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function uu(e,s){return e=ri(22,e,null,s),e.lanes=0,e}function Yf(e,s,o){return lr(s,e.child,null,o),e=Vf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Sg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),of(e.return,s,o)}function Wf(e,s,o,r,f,m){var w=e.memoizedState;w===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(w.isBackwards=s,w.rendering=null,w.renderingStartTime=0,w.last=r,w.tail=o,w.tailMode=f,w.treeForkCount=m)}function Cg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var w=Hs.current,E=(w&2)!==0;if(E?(w=w&1|2,s.flags|=128):w&=1,q(Hs,w),Co(e,s,r,o),r=xn?wl:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,o,s);else if(e.tag===19)Sg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&Zc(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Wf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Zc(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Wf(s,!0,o,null,m,r);break;case"together":Wf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ca(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),La|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Dr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=sa(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=sa(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Ff(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Yc(e)))}function x2(e,s,o){switch(s.tag){case 3:ot(s,s.stateNode.containerInfo),Ma(s,Qs,e.memoizedState.cache),nr();break;case 27:case 5:$e(s);break;case 4:ot(s,s.stateNode.containerInfo);break;case 10:Ma(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,gf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Da(s),s.flags|=128,null):(o&s.child.childLanes)!==0?wg(e,s,o):(Da(s),e=ca(e,s,o),e!==null?e.sibling:null);Da(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Dr(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Cg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),q(Hs,Hs.current),r)break;return null;case 22:return s.lanes=0,_g(e,s,o,s.pendingProps);case 24:Ma(s,Qs,e.memoizedState.cache)}return ca(e,s,o)}function kg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Js=!0;else{if(!Ff(e,o)&&(s.flags&128)===0)return Js=!1,x2(e,s,o);Js=(e.flags&131072)!==0}else Js=!1,xn&&(s.flags&1048576)!==0&&s_(s,wl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=ar(s.elementType),s.type=e,typeof e=="function")Kd(e)?(r=ur(e,r),s.tag=1,s=bg(null,s,e,r,o)):(s.tag=0,s=If(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===N){s.tag=11,s=hg(null,s,e,r,o);break e}else if(f===V){s.tag=14,s=mg(null,s,e,r,o);break e}}throw s=K(e)||e,Error(a(306,s,""))}}return s;case 0:return If(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=ur(r,s.pendingProps),bg(e,s,r,f,o);case 3:e:{if(ot(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,ff(e,s),Al(s,r,null,o);var w=s.memoizedState;if(r=w.cache,Ma(s,Qs,r),r!==m.cache&&af(s,[Qs],o,!0),El(),r=w.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:w.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=vg(e,s,r,o);break e}else if(r!==f){f=bi(Error(a(424)),s),Sl(f),s=vg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_s=ki(e.firstChild),wo=s,xn=!0,ka=null,Si=!0,o=__(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(nr(),r===f){s=ca(e,s,o);break e}Co(e,s,r,o)}s=s.child}return s;case 26:return cu(e,s),e===null?(o=O0(s.type,null,s.pendingProps,null))?s.memoizedState=o:xn||(o=s.type,e=s.pendingProps,r=ju(Re.current).createElement(o),r[an]=s,r[tn]=e,ko(r,o,e),nn(r),s.stateNode=r):s.memoizedState=O0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return $e(s),e===null&&xn&&(r=s.stateNode=R0(s.type,s.pendingProps,Re.current),wo=s,Si=!0,f=_s,Pa(s.type)?(kh=f,_s=ki(r.firstChild)):_s=f),Co(e,s,s.pendingProps.children,o),cu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&xn&&((f=r=_s)&&(r=G2(r,s.type,s.pendingProps,Si),r!==null?(s.stateNode=r,wo=s,_s=ki(r.firstChild),Si=!1,f=!0):f=!1),f||ja(s)),$e(s),f=s.type,m=s.pendingProps,w=e!==null?e.memoizedProps:null,r=m.children,bh(f,m)?r=null:w!==null&&bh(f,w)&&(s.flags|=32),s.memoizedState!==null&&(f=xf(e,s,u2,null,null,o),Kl._currentValue=f),cu(e,s),Co(e,s,r,o),s.child;case 6:return e===null&&xn&&((e=o=_s)&&(o=K2(o,s.pendingProps,Si),o!==null?(s.stateNode=o,wo=s,_s=null,e=!0):e=!1),e||ja(s)),null;case 13:return wg(e,s,o);case 4:return ot(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=lr(s,null,r,o):Co(e,s,r,o),s.child;case 11:return hg(e,s,s.type,s.pendingProps,o);case 7:return Co(e,s,s.pendingProps,o),s.child;case 8:return Co(e,s,s.pendingProps.children,o),s.child;case 12:return Co(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Ma(s,s.type,r.value),Co(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,or(s),f=So(f),r=r(f),s.flags|=1,Co(e,s,r,o),s.child;case 14:return mg(e,s,s.type,s.pendingProps,o);case 15:return pg(e,s,s.type,s.pendingProps,o);case 19:return Cg(e,s,o);case 31:return y2(e,s,o);case 22:return _g(e,s,o,s.pendingProps);case 24:return or(s),r=So(Qs),e===null?(f=cf(),f===null&&(f=Kn,m=rf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},df(s),Ma(s,Qs,f)):((e.lanes&o)!==0&&(ff(e,s),Al(s,null,null,o),El()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ma(s,Qs,r)):(r=m.cache,Ma(s,Qs,r),r!==f.cache&&af(s,[Qs],o,!0))),Co(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ua(e){e.flags|=4}function Xf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Zg())e.flags|=8192;else throw rr=qc,uf}else e.flags&=-16777217}function jg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(s))if(Zg())e.flags|=8192;else throw rr=qc,uf}function du(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?Ot():536870912,e.lanes|=s,Vr|=s)}function Ol(e,s){if(!xn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function gs(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function b2(e,s,o){var r=s.pendingProps;switch(ef(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gs(s),null;case 1:return gs(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),aa(Qs),Xe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ar(s)?ua(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,nf())),gs(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ua(s),m!==null?(gs(s),jg(s,m)):(gs(s),Xf(s,f,null,r,o))):m?m!==e.memoizedState?(ua(s),gs(s),jg(s,m)):(gs(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ua(s),gs(s),Xf(s,f,e,r,o)),null;case 27:if(lt(s),o=Re.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ua(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return gs(s),null}e=ue.current,Ar(s)?i_(s):(e=R0(f,r,o),s.stateNode=e,ua(s))}return gs(s),null;case 5:if(lt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ua(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return gs(s),null}if(m=ue.current,Ar(s))i_(s);else{var w=ju(Re.current);switch(m){case 1:m=w.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=w.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=w.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=w.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=w.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?w.createElement("select",{is:r.is}):w.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?w.createElement(f,{is:r.is}):w.createElement(f)}}m[an]=s,m[tn]=r;e:for(w=s.child;w!==null;){if(w.tag===5||w.tag===6)m.appendChild(w.stateNode);else if(w.tag!==4&&w.tag!==27&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===s)break e;for(;w.sibling===null;){if(w.return===null||w.return===s)break e;w=w.return}w.sibling.return=w.return,w=w.sibling}s.stateNode=m;e:switch(ko(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ua(s)}}return gs(s),Xf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ua(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Re.current,Ar(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=wo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[an]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||w0(e.nodeValue,o)),e||ja(s,!0)}else e=ju(e).createTextNode(r),e[an]=s,s.stateNode=e}return gs(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=Ar(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[an]=s}else nr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;gs(s),e=!1}else o=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(ci(s),s):(ci(s),null);if((s.flags&128)!==0)throw Error(a(558))}return gs(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Ar(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[an]=s}else nr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;gs(s),f=!1}else f=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(ci(s),s):(ci(s),null)}return ci(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),du(s,s.updateQueue),gs(s),null);case 4:return Xe(),e===null&&ph(s.stateNode.containerInfo),gs(s),null;case 10:return aa(s.type),gs(s),null;case 19:if(ee(Hs),r=s.memoizedState,r===null)return gs(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Ol(r,!1);else{if(Rs!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=Zc(e),m!==null){for(s.flags|=128,Ol(r,!1),e=m.updateQueue,s.updateQueue=e,du(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)e_(o,e),o=o.sibling;return q(Hs,Hs.current&1|2),xn&&oa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&rt()>_u&&(s.flags|=128,f=!0,Ol(r,!1),s.lanes=4194304)}else{if(!f)if(e=Zc(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,du(s,e),Ol(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!xn)return gs(s),null}else 2*rt()-r.renderingStartTime>_u&&o!==536870912&&(s.flags|=128,f=!0,Ol(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=rt(),e.sibling=null,o=Hs.current,q(Hs,f?o&1|2:o&1),xn&&oa(s,r.treeForkCount),e):(gs(s),null);case 22:case 23:return ci(s),_f(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(gs(s),s.subtreeFlags&6&&(s.flags|=8192)):gs(s),o=s.updateQueue,o!==null&&du(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ee(ir),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),aa(Qs),gs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function v2(e,s){switch(ef(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return aa(Qs),Xe(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return lt(s),null;case 31:if(s.memoizedState!==null){if(ci(s),s.alternate===null)throw Error(a(340));nr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(ci(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));nr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ee(Hs),null;case 4:return Xe(),null;case 10:return aa(s.type),null;case 22:case 23:return ci(s),_f(),e!==null&&ee(ir),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return aa(Qs),null;case 25:return null;default:return null}}function Mg(e,s){switch(ef(s),s.tag){case 3:aa(Qs),Xe();break;case 26:case 27:case 5:lt(s);break;case 4:Xe();break;case 31:s.memoizedState!==null&&ci(s);break;case 13:ci(s);break;case 19:ee(Hs);break;case 10:aa(s.type);break;case 22:case 23:ci(s),_f(),e!==null&&ee(ir);break;case 24:aa(Qs)}}function zl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,w=o.inst;r=m(),w.destroy=r}o=o.next}while(o!==f)}}catch(E){Ln(s,s.return,E)}}function Ra(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var w=r.inst,E=w.destroy;if(E!==void 0){w.destroy=void 0,f=s;var F=o,fe=E;try{fe()}catch(Se){Ln(f,F,Se)}}}r=r.next}while(r!==m)}}catch(Se){Ln(s,s.return,Se)}}function Tg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{y_(s,o)}catch(r){Ln(e,e.return,r)}}}function Eg(e,s,o){o.props=ur(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Ln(e,s,r)}}function $l(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Ln(e,s,f)}}function qi(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Ln(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Ln(e,s,f)}else o.current=null}function Ag(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Ln(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;V2(r,e.type,o,s),r[tn]=s}catch(f){Ln(e,e.return,f)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function Gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Ps));else if(r!==4&&(r===27&&Pa(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Kf(e,s,o),e=e.sibling;e!==null;)Kf(e,s,o),e=e.sibling}function fu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Pa(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(fu(e,s,o),e=e.sibling;e!==null;)fu(e,s,o),e=e.sibling}function Ng(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);ko(s,r,o),s[an]=e,s[tn]=o}catch(m){Ln(e,e.return,m)}}var da=!1,eo=!1,Qf=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,go=null;function w2(e,s){if(e=e.containerInfo,yh=Ru,e=bn(e),Nn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,E=-1,F=-1,fe=0,Se=0,Be=e,pe=null;t:for(;;){for(var xe;Be!==o||f!==0&&Be.nodeType!==3||(E=w+f),Be!==m||r!==0&&Be.nodeType!==3||(F=w+r),Be.nodeType===3&&(w+=Be.nodeValue.length),(xe=Be.firstChild)!==null;)pe=Be,Be=xe;for(;;){if(Be===e)break t;if(pe===o&&++fe===f&&(E=w),pe===m&&++Se===r&&(F=w),(xe=Be.nextSibling)!==null)break;Be=pe,pe=Be.parentNode}Be=xe}o=E===-1||F===-1?null:{start:E,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(xh={focusedElem:e,selectionRange:o},Ru=!1,go=s;go!==null;)if(s=go,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,go=e;else for(;go!==null;){switch(s=go,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var kt=ur(o.type,f);e=r.getSnapshotBeforeUpdate(kt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Vt){Ln(o,o.return,Vt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)wh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,go=e;break}go=s.return}}function Bg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:ha(e,o),r&4&&zl(5,o);break;case 1:if(ha(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(w){Ln(o,o.return,w)}else{var f=ur(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(w){Ln(o,o.return,w)}}r&64&&Tg(o),r&512&&$l(o,o.return);break;case 3:if(ha(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{y_(e,s)}catch(w){Ln(o,o.return,w)}}break;case 27:s===null&&r&4&&Ng(o);case 26:case 5:ha(e,o),s===null&&r&4&&Ag(o),r&512&&$l(o,o.return);break;case 12:ha(e,o);break;case 31:ha(e,o),r&4&&zg(e,o);break;case 13:ha(e,o),r&4&&$g(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=D2.bind(null,o),Q2(e,o))));break;case 22:if(r=o.memoizedState!==null||da,!r){s=s!==null&&s.memoizedState!==null||eo,f=da;var m=eo;da=r,(eo=s)&&!m?ma(e,o,(o.subtreeFlags&8772)!==0):ha(e,o),da=f,eo=m}break;case 30:break;default:ha(e,o)}}function Lg(e){var s=e.alternate;s!==null&&(e.alternate=null,Lg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&Mo(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ks=null,Qo=!1;function fa(e,s,o){for(o=o.child;o!==null;)Og(e,s,o),o=o.sibling}function Og(e,s,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Fe,o)}catch{}switch(o.tag){case 26:eo||qi(o,s),fa(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:eo||qi(o,s);var r=ks,f=Qo;Pa(o.type)&&(ks=o.stateNode,Qo=!1),fa(e,s,o),Xl(o.stateNode),ks=r,Qo=f;break;case 5:eo||qi(o,s);case 6:if(r=ks,f=Qo,ks=null,fa(e,s,o),ks=r,Qo=f,ks!==null)if(Qo)try{(ks.nodeType===9?ks.body:ks.nodeName==="HTML"?ks.ownerDocument.body:ks).removeChild(o.stateNode)}catch(m){Ln(o,s,m)}else try{ks.removeChild(o.stateNode)}catch(m){Ln(o,s,m)}break;case 18:ks!==null&&(Qo?(e=ks,T0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),Qr(e)):T0(ks,o.stateNode));break;case 4:r=ks,f=Qo,ks=o.stateNode.containerInfo,Qo=!0,fa(e,s,o),ks=r,Qo=f;break;case 0:case 11:case 14:case 15:Ra(2,o,s),eo||Ra(4,o,s),fa(e,s,o);break;case 1:eo||(qi(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Eg(o,s,r)),fa(e,s,o);break;case 21:fa(e,s,o);break;case 22:eo=(r=eo)||o.memoizedState!==null,fa(e,s,o),eo=r;break;default:fa(e,s,o)}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(o){Ln(s,s.return,o)}}}function $g(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(o){Ln(s,s.return,o)}}function S2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Rg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Rg),s;default:throw Error(a(435,e.tag))}}function hu(e,s){var o=S2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=N2.bind(null,e,r);r.then(f,f)}})}function Zo(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,w=s,E=w;e:for(;E!==null;){switch(E.tag){case 27:if(Pa(E.type)){ks=E.stateNode,Qo=!1;break e}break;case 5:ks=E.stateNode,Qo=!1;break e;case 3:case 4:ks=E.stateNode.containerInfo,Qo=!0;break e}E=E.return}if(ks===null)throw Error(a(160));Og(m,w,f),ks=null,Qo=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Ig(s,e),s=s.sibling}var Oi=null;function Ig(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zo(s,e),Jo(e),r&4&&(Ra(3,e,e.return),zl(3,e),Ra(5,e,e.return));break;case 1:Zo(s,e),Jo(e),r&512&&(eo||o===null||qi(o,o.return)),r&64&&da&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Oi;if(Zo(s,e),Jo(e),r&512&&(eo||o===null||qi(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Xs]||m[an]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),ko(m,r,o),m[an]=e,nn(m),r=m;break e;case"link":var w=I0("link","href",f).get(r+(o.href||""));if(w){for(var E=0;E<w.length;E++)if(m=w[E],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){w.splice(E,1);break t}}m=f.createElement(r),ko(m,r,o),f.head.appendChild(m);break;case"meta":if(w=I0("meta","content",f).get(r+(o.content||""))){for(E=0;E<w.length;E++)if(m=w[E],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){w.splice(E,1);break t}}m=f.createElement(r),ko(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[an]=e,nn(m),r=m}e.stateNode=r}else P0(f,e.type,e.stateNode);else e.stateNode=$0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?P0(f,e.type,e.stateNode):$0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:Zo(s,e),Jo(e),r&512&&(eo||o===null||qi(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(Zo(s,e),Jo(e),r&512&&(eo||o===null||qi(o,o.return)),e.flags&32){f=e.stateNode;try{To(f,"")}catch(kt){Ln(e,e.return,kt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Qf=!0);break;case 6:if(Zo(s,e),Jo(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(kt){Ln(e,e.return,kt)}}break;case 3:if(Eu=null,f=Oi,Oi=Mu(s.containerInfo),Zo(s,e),Oi=f,Jo(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{Qr(s.containerInfo)}catch(kt){Ln(e,e.return,kt)}Qf&&(Qf=!1,Pg(e));break;case 4:r=Oi,Oi=Mu(e.stateNode.containerInfo),Zo(s,e),Jo(e),Oi=r;break;case 12:Zo(s,e),Jo(e);break;case 31:Zo(s,e),Jo(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hu(e,r)));break;case 13:Zo(s,e),Jo(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(pu=rt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hu(e,r)));break;case 22:f=e.memoizedState!==null;var F=o!==null&&o.memoizedState!==null,fe=da,Se=eo;if(da=fe||f,eo=Se||F,Zo(s,e),eo=Se,da=fe,Jo(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||F||da||eo||dr(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){F=o=s;try{if(m=F.stateNode,f)w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{E=F.stateNode;var Be=F.memoizedProps.style,pe=Be!=null&&Be.hasOwnProperty("display")?Be.display:null;E.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(kt){Ln(F,F.return,kt)}}}else if(s.tag===6){if(o===null){F=s;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(kt){Ln(F,F.return,kt)}}}else if(s.tag===18){if(o===null){F=s;try{var xe=F.stateNode;f?E0(xe,!0):E0(F.stateNode,!1)}catch(kt){Ln(F,F.return,kt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,hu(e,o))));break;case 19:Zo(s,e),Jo(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hu(e,r)));break;case 30:break;case 21:break;default:Zo(s,e),Jo(e)}}function Jo(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Dg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Gf(e);fu(e,m,f);break;case 5:var w=o.stateNode;o.flags&32&&(To(w,""),o.flags&=-33);var E=Gf(e);fu(e,E,w);break;case 3:case 4:var F=o.stateNode.containerInfo,fe=Gf(e);Kf(e,fe,F);break;default:throw Error(a(161))}}catch(Se){Ln(e,e.return,Se)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Pg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function ha(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Bg(e,s.alternate,s),s=s.sibling}function dr(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ra(4,s,s.return),dr(s);break;case 1:qi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Eg(s,s.return,o),dr(s);break;case 27:Xl(s.stateNode);case 26:case 5:qi(s,s.return),dr(s);break;case 22:s.memoizedState===null&&dr(s);break;case 30:dr(s);break;default:dr(s)}e=e.sibling}}function ma(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,w=m.flags;switch(m.tag){case 0:case 11:case 15:ma(f,m,o),zl(4,m);break;case 1:if(ma(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(fe){Ln(r,r.return,fe)}if(r=m,f=r.updateQueue,f!==null){var E=r.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)g_(F[f],E)}catch(fe){Ln(r,r.return,fe)}}o&&w&64&&Tg(m),$l(m,m.return);break;case 27:Ng(m);case 26:case 5:ma(f,m,o),o&&r===null&&w&4&&Ag(m),$l(m,m.return);break;case 12:ma(f,m,o);break;case 31:ma(f,m,o),o&&w&4&&zg(f,m);break;case 13:ma(f,m,o),o&&w&4&&$g(f,m);break;case 22:m.memoizedState===null&&ma(f,m,o),$l(m,m.return);break;case 30:break;default:ma(f,m,o)}s=s.sibling}}function Zf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Cl(o))}function Jf(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Cl(e))}function zi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Hg(e,s,o,r),s=s.sibling}function Hg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:zi(e,s,o,r),f&2048&&zl(9,s);break;case 1:zi(e,s,o,r);break;case 3:zi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Cl(e)));break;case 12:if(f&2048){zi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,w=m.id,E=m.onPostCommit;typeof E=="function"&&E(w,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ln(s,s.return,F)}}else zi(e,s,o,r);break;case 31:zi(e,s,o,r);break;case 13:zi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,w=s.alternate,s.memoizedState!==null?m._visibility&2?zi(e,s,o,r):Il(e,s):m._visibility&2?zi(e,s,o,r):(m._visibility|=2,Pr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Zf(w,s);break;case 24:zi(e,s,o,r),f&2048&&Jf(s.alternate,s);break;default:zi(e,s,o,r)}}function Pr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,w=s,E=o,F=r,fe=w.flags;switch(w.tag){case 0:case 11:case 15:Pr(m,w,E,F,f),zl(8,w);break;case 23:break;case 22:var Se=w.stateNode;w.memoizedState!==null?Se._visibility&2?Pr(m,w,E,F,f):Il(m,w):(Se._visibility|=2,Pr(m,w,E,F,f)),f&&fe&2048&&Zf(w.alternate,w);break;case 24:Pr(m,w,E,F,f),f&&fe&2048&&Jf(w.alternate,w);break;default:Pr(m,w,E,F,f)}s=s.sibling}}function Il(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Il(o,r),f&2048&&Zf(r.alternate,r);break;case 24:Il(o,r),f&2048&&Jf(r.alternate,r);break;default:Il(o,r)}s=s.sibling}}var Pl=8192;function Hr(e,s,o){if(e.subtreeFlags&Pl)for(e=e.child;e!==null;)Ug(e,s,o),e=e.sibling}function Ug(e,s,o){switch(e.tag){case 26:Hr(e,s,o),e.flags&Pl&&e.memoizedState!==null&&cv(o,Oi,e.memoizedState,e.memoizedProps);break;case 5:Hr(e,s,o);break;case 3:case 4:var r=Oi;Oi=Mu(e.stateNode.containerInfo),Hr(e,s,o),Oi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Pl,Pl=16777216,Hr(e,s,o),Pl=r):Hr(e,s,o));break;default:Hr(e,s,o)}}function Vg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Hl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];go=r,Wg(r,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,mu(e)):Hl(e);break;default:Hl(e)}}function mu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];go=r,Wg(r,e)}Vg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ra(8,s,s.return),mu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,mu(s));break;default:mu(s)}e=e.sibling}}function Wg(e,s){for(;go!==null;){var o=go;switch(o.tag){case 0:case 11:case 15:Ra(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Cl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,go=r;else e:for(o=e;go!==null;){r=go;var f=r.sibling,m=r.return;if(Lg(r),r===o){go=null;break e}if(f!==null){f.return=m,go=f;break e}go=m}}}var C2={getCacheForType:function(e){var s=So(Qs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return So(Qs).controller.signal}},k2=typeof WeakMap=="function"?WeakMap:Map,Tn=0,Kn=null,hn=null,pn=0,Bn=0,ui=null,Ba=!1,Ur=!1,eh=!1,pa=0,Rs=0,La=0,fr=0,th=0,di=0,Vr=0,Ul=null,ei=null,nh=!1,pu=0,Fg=0,_u=1/0,gu=null,Oa=null,ao=0,za=null,Yr=null,_a=0,sh=0,oh=null,Xg=null,Vl=0,ih=null;function fi(){return(Tn&2)!==0&&pn!==0?pn&-pn:z.T!==null?dh():Wn()}function qg(){if(di===0)if((pn&536870912)===0||xn){var e=st;st<<=1,(st&3932160)===0&&(st=262144),di=e}else di=536870912;return e=li.current,e!==null&&(e.flags|=32),di}function ti(e,s,o){(e===Kn&&(Bn===2||Bn===9)||e.cancelPendingCommit!==null)&&(Wr(e,0),$a(e,pn,di,!1)),_t(e,o),((Tn&2)===0||e!==Kn)&&(e===Kn&&((Tn&2)===0&&(fr|=o),Rs===4&&$a(e,pn,di,!1)),Gi(e))}function Gg(e,s,o){if((Tn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Bt(e,s),f=r?T2(e,s):rh(e,s,!0),m=r;do{if(f===0){Ur&&!r&&$a(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!j2(o)){f=rh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var w=0;else w=e.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){s=w;e:{var E=e;f=Ul;var F=E.current.memoizedState.isDehydrated;if(F&&(Wr(E,w).flags|=256),w=rh(E,w,!1),w!==2){if(eh&&!F){E.errorRecoveryDisabledLanes|=m,fr|=m,f=4;break e}m=ei,ei=f,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}f=w}if(m=!1,f!==2)continue}}if(f===1){Wr(e,0),$a(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:$a(r,s,di,!Ba);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=pu+300-rt(),10<f)){if($a(r,s,di,!Ba),Ke(r,0,!0)!==0)break e;_a=s,r.timeoutHandle=j0(Kg.bind(null,r,o,ei,gu,nh,s,di,fr,Vr,Ba,m,"Throttled",-0,0),f);break e}Kg(r,o,ei,gu,nh,s,di,fr,Vr,Ba,m,null,-0,0)}}break}while(!0);Gi(e)}function Kg(e,s,o,r,f,m,w,E,F,fe,Se,Be,pe,xe){if(e.timeoutHandle=-1,Be=s.subtreeFlags,Be&8192||(Be&16785408)===16785408){Be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ps},Ug(s,m,Be);var kt=(m&62914560)===m?pu-rt():(m&4194048)===m?Fg-rt():0;if(kt=uv(Be,kt),kt!==null){_a=m,e.cancelPendingCommit=kt(o0.bind(null,e,s,m,o,r,f,w,E,F,Se,Be,null,pe,xe)),$a(e,m,w,!fe);return}}o0(e,s,m,o,r,f,w,E,F)}function j2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!wt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function $a(e,s,o,r){s&=~th,s&=~fr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-St(f),w=1<<m;r[m]=-1,f&=~w}o!==0&&An(e,o,s)}function yu(){return(Tn&6)===0?(Yl(0),!1):!0}function ah(){if(hn!==null){if(Bn===0)var e=hn.return;else e=hn,ia=sr=null,wf(e),Lr=null,jl=0,e=hn;for(;e!==null;)Mg(e.alternate,e),e=e.return;hn=null}}function Wr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,F2(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),_a=0,ah(),Kn=e,hn=o=sa(e.current,null),pn=s,Bn=0,ui=null,Ba=!1,Ur=Bt(e,s),eh=!1,Vr=di=th=fr=La=Rs=0,ei=Ul=null,nh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-St(r),m=1<<f;s|=e[f],r&=~m}return pa=s,Ic(),o}function Qg(e,s){on=null,z.H=Bl,s===Br||s===Xc?(s=h_(),Bn=3):s===uf?(s=h_(),Bn=4):Bn=s===$f?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,ui=s,hn===null&&(Rs=1,ru(e,bi(s,e.current)))}function Zg(){var e=li.current;return e===null?!0:(pn&4194048)===pn?Ci===null:(pn&62914560)===pn||(pn&536870912)!==0?e===Ci:!1}function Jg(){var e=z.H;return z.H=Bl,e===null?Bl:e}function e0(){var e=z.A;return z.A=C2,e}function xu(){Rs=4,Ba||(pn&4194048)!==pn&&li.current!==null||(Ur=!0),(La&134217727)===0&&(fr&134217727)===0||Kn===null||$a(Kn,pn,di,!1)}function rh(e,s,o){var r=Tn;Tn|=2;var f=Jg(),m=e0();(Kn!==e||pn!==s)&&(gu=null,Wr(e,s)),s=!1;var w=Rs;e:do try{if(Bn!==0&&hn!==null){var E=hn,F=ui;switch(Bn){case 8:ah(),w=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(s=!0);var fe=Bn;if(Bn=0,ui=null,Fr(e,E,F,fe),o&&Ur){w=0;break e}break;default:fe=Bn,Bn=0,ui=null,Fr(e,E,F,fe)}}M2(),w=Rs;break}catch(Se){Qg(e,Se)}while(!0);return s&&e.shellSuspendCounter++,ia=sr=null,Tn=r,z.H=f,z.A=m,hn===null&&(Kn=null,pn=0,Ic()),w}function M2(){for(;hn!==null;)t0(hn)}function T2(e,s){var o=Tn;Tn|=2;var r=Jg(),f=e0();Kn!==e||pn!==s?(gu=null,_u=rt()+500,Wr(e,s)):Ur=Bt(e,s);e:do try{if(Bn!==0&&hn!==null){s=hn;var m=ui;t:switch(Bn){case 1:Bn=0,ui=null,Fr(e,s,m,1);break;case 2:case 9:if(d_(m)){Bn=0,ui=null,n0(s);break}s=function(){Bn!==2&&Bn!==9||Kn!==e||(Bn=7),Gi(e)},m.then(s,s);break e;case 3:Bn=7;break e;case 4:Bn=5;break e;case 7:d_(m)?(Bn=0,ui=null,n0(s)):(Bn=0,ui=null,Fr(e,s,m,7));break;case 5:var w=null;switch(hn.tag){case 26:w=hn.memoizedState;case 5:case 27:var E=hn;if(w?H0(w):E.stateNode.complete){Bn=0,ui=null;var F=E.sibling;if(F!==null)hn=F;else{var fe=E.return;fe!==null?(hn=fe,bu(fe)):hn=null}break t}}Bn=0,ui=null,Fr(e,s,m,5);break;case 6:Bn=0,ui=null,Fr(e,s,m,6);break;case 8:ah(),Rs=6;break e;default:throw Error(a(462))}}E2();break}catch(Se){Qg(e,Se)}while(!0);return ia=sr=null,z.H=r,z.A=f,Tn=o,hn!==null?0:(Kn=null,pn=0,Ic(),Rs)}function E2(){for(;hn!==null&&!Mt();)t0(hn)}function t0(e){var s=kg(e.alternate,e,pa);e.memoizedProps=e.pendingProps,s===null?bu(e):hn=s}function n0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=xg(o,s,s.pendingProps,s.type,void 0,pn);break;case 11:s=xg(o,s,s.pendingProps,s.type.render,s.ref,pn);break;case 5:wf(s);default:Mg(o,s),s=hn=e_(s,pa),s=kg(o,s,pa)}e.memoizedProps=e.pendingProps,s===null?bu(e):hn=s}function Fr(e,s,o,r){ia=sr=null,wf(s),Lr=null,jl=0;var f=s.return;try{if(g2(e,f,s,o,pn)){Rs=1,ru(e,bi(o,e.current)),hn=null;return}}catch(m){if(f!==null)throw hn=f,m;Rs=1,ru(e,bi(o,e.current)),hn=null;return}s.flags&32768?(xn||r===1?e=!0:Ur||(pn&536870912)!==0?e=!1:(Ba=e=!0,(r===2||r===9||r===3||r===6)&&(r=li.current,r!==null&&r.tag===13&&(r.flags|=16384))),s0(s,e)):bu(s)}function bu(e){var s=e;do{if((s.flags&32768)!==0){s0(s,Ba);return}e=s.return;var o=b2(s.alternate,s,pa);if(o!==null){hn=o;return}if(s=s.sibling,s!==null){hn=s;return}hn=s=e}while(s!==null);Rs===0&&(Rs=5)}function s0(e,s){do{var o=v2(e.alternate,e);if(o!==null){o.flags&=32767,hn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){hn=e;return}hn=e=o}while(e!==null);Rs=6,hn=null}function o0(e,s,o,r,f,m,w,E,F){e.cancelPendingCommit=null;do vu();while(ao!==0);if((Tn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,qt(e,o,m,w,E,F),e===Kn&&(hn=Kn=null,pn=0),Yr=s,za=e,_a=o,sh=m,oh=f,Xg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R2(Ze,function(){return c0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,f=ie.p,ie.p=2,w=Tn,Tn|=4;try{w2(e,s,o)}finally{Tn=w,ie.p=f,z.T=r}}ao=1,i0(),a0(),r0()}}function i0(){if(ao===1){ao=0;var e=za,s=Yr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var r=ie.p;ie.p=2;var f=Tn;Tn|=4;try{Ig(s,e);var m=xh,w=bn(e.containerInfo),E=m.focusedElem,F=m.selectionRange;if(w!==E&&E&&E.ownerDocument&&ms(E.ownerDocument.documentElement,E)){if(F!==null&&Nn(E)){var fe=F.start,Se=F.end;if(Se===void 0&&(Se=fe),"selectionStart"in E)E.selectionStart=fe,E.selectionEnd=Math.min(Se,E.value.length);else{var Be=E.ownerDocument||document,pe=Be&&Be.defaultView||window;if(pe.getSelection){var xe=pe.getSelection(),kt=E.textContent.length,Vt=Math.min(F.start,kt),Un=F.end===void 0?Vt:Math.min(F.end,kt);!xe.extend&&Vt>Un&&(w=Un,Un=Vt,Vt=w);var re=hs(E,Vt),J=hs(E,Un);if(re&&J&&(xe.rangeCount!==1||xe.anchorNode!==re.node||xe.anchorOffset!==re.offset||xe.focusNode!==J.node||xe.focusOffset!==J.offset)){var de=Be.createRange();de.setStart(re.node,re.offset),xe.removeAllRanges(),Vt>Un?(xe.addRange(de),xe.extend(J.node,J.offset)):(de.setEnd(J.node,J.offset),xe.addRange(de))}}}}for(Be=[],xe=E;xe=xe.parentNode;)xe.nodeType===1&&Be.push({element:xe,left:xe.scrollLeft,top:xe.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Be.length;E++){var Ae=Be[E];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}Ru=!!yh,xh=yh=null}finally{Tn=f,ie.p=r,z.T=o}}e.current=s,ao=2}}function a0(){if(ao===2){ao=0;var e=za,s=Yr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var r=ie.p;ie.p=2;var f=Tn;Tn|=4;try{Bg(e,s.alternate,s)}finally{Tn=f,ie.p=r,z.T=o}}ao=3}}function r0(){if(ao===4||ao===3){ao=0,ft();var e=za,s=Yr,o=_a,r=Xg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?ao=5:(ao=0,Yr=za=null,l0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Oa=null),is(o),s=s.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Fe,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=z.T,f=ie.p,ie.p=2,z.T=null;try{for(var m=e.onRecoverableError,w=0;w<r.length;w++){var E=r[w];m(E.value,{componentStack:E.stack})}}finally{z.T=s,ie.p=f}}(_a&3)!==0&&vu(),Gi(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ih?Vl++:(Vl=0,ih=e):Vl=0,Yl(0)}}function l0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Cl(s)))}function vu(){return i0(),a0(),r0(),c0()}function c0(){if(ao!==5)return!1;var e=za,s=sh;sh=0;var o=is(_a),r=z.T,f=ie.p;try{ie.p=32>o?32:o,z.T=null,o=oh,oh=null;var m=za,w=_a;if(ao=0,Yr=za=null,_a=0,(Tn&6)!==0)throw Error(a(331));var E=Tn;if(Tn|=4,Yg(m.current),Hg(m,m.current,w,o),Tn=E,Yl(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Fe,m)}catch{}return!0}finally{ie.p=f,z.T=r,l0(e,s)}}function u0(e,s,o){s=bi(o,s),s=zf(e.stateNode,s,2),e=Aa(e,s,2),e!==null&&(_t(e,2),Gi(e))}function Ln(e,s,o){if(e.tag===3)u0(e,e,o);else for(;s!==null;){if(s.tag===3){u0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Oa===null||!Oa.has(r))){e=bi(o,e),o=dg(2),r=Aa(s,o,2),r!==null&&(fg(o,r,s,e),_t(r,2),Gi(r));break}}s=s.return}}function lh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new k2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(eh=!0,f.add(o),e=A2.bind(null,e,s,o),s.then(e,e))}function A2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,Kn===e&&(pn&o)===o&&(Rs===4||Rs===3&&(pn&62914560)===pn&&300>rt()-pu?(Tn&2)===0&&Wr(e,0):th|=o,Vr===pn&&(Vr=0)),Gi(e)}function d0(e,s){s===0&&(s=Ot()),e=er(e,s),e!==null&&(_t(e,s),Gi(e))}function D2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),d0(e,o)}function N2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),d0(e,o)}function R2(e,s){return Ge(e,s)}var wu=null,Xr=null,ch=!1,Su=!1,uh=!1,Ia=0;function Gi(e){e!==Xr&&e.next===null&&(Xr===null?wu=Xr=e:Xr=Xr.next=e),Su=!0,ch||(ch=!0,L2())}function Yl(e,s){if(!uh&&Su){uh=!0;do for(var o=!1,r=wu;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var w=r.suspendedLanes,E=r.pingedLanes;m=(1<<31-St(42|e)+1)-1,m&=f&~(w&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,p0(r,m))}else m=pn,m=Ke(r,r===Kn?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Bt(r,m)||(o=!0,p0(r,m));r=r.next}while(o);uh=!1}}function B2(){f0()}function f0(){Su=ch=!1;var e=0;Ia!==0&&W2()&&(e=Ia);for(var s=rt(),o=null,r=wu;r!==null;){var f=r.next,m=h0(r,s);m===0?(r.next=null,o===null?wu=f:o.next=f,f===null&&(Xr=o)):(o=r,(e!==0||(m&3)!==0)&&(Su=!0)),r=f}ao!==0&&ao!==5||Yl(e),Ia!==0&&(Ia=0)}function h0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var w=31-St(m),E=1<<w,F=f[w];F===-1?((E&o)===0||(E&r)!==0)&&(f[w]=At(E,s)):F<=s&&(e.expiredLanes|=E),m&=~E}if(s=Kn,o=pn,o=Ke(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Bn===2||Bn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ze(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Bt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&ze(r),is(o)){case 2:case 8:o=Et;break;case 32:o=Ze;break;case 268435456:o=Z;break;default:o=Ze}return r=m0.bind(null,e),o=Ge(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&ze(r),e.callbackPriority=2,e.callbackNode=null,2}function m0(e,s){if(ao!==0&&ao!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(vu()&&e.callbackNode!==o)return null;var r=pn;return r=Ke(e,e===Kn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Gg(e,r,s),h0(e,rt()),e.callbackNode!=null&&e.callbackNode===o?m0.bind(null,e):null)}function p0(e,s){if(vu())return null;Gg(e,s,!0)}function L2(){X2(function(){(Tn&6)!==0?Ge(at,B2):f0()})}function dh(){if(Ia===0){var e=Nr;e===0&&(e=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),Ia=e}return Ia}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Io(""+e)}function g0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function O2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=_0((f[tn]||null).action),w=r.submitter;w&&(s=(s=w[tn]||null)?_0(s.formAction):w.getAttribute("formAction"),s!==null&&(m=s,w=null));var E=new D("action","action",null,r,f);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ia!==0){var F=w?g0(f,w):new FormData(f);Df(o,{pending:!0,data:F,method:f.method,action:m},null,F)}}else typeof m=="function"&&(E.preventDefault(),F=w?g0(f,w):new FormData(f),Df(o,{pending:!0,data:F,method:f.method,action:m},m,F))},currentTarget:f}]})}}for(var fh=0;fh<Xd.length;fh++){var hh=Xd[fh],z2=hh.toLowerCase(),$2=hh[0].toUpperCase()+hh.slice(1);Li(z2,"on"+$2)}Li(Bi,"onAnimationEnd"),Li(Wi,"onAnimationIteration"),Li(zc,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(Yd,"onTransitionRun"),Li(Wd,"onTransitionStart"),Li(Fd,"onTransitionCancel"),Li(Qp,"onTransitionEnd"),Rn("onMouseEnter",["mouseout","mouseover"]),Rn("onMouseLeave",["mouseout","mouseover"]),Rn("onPointerEnter",["pointerout","pointerover"]),Rn("onPointerLeave",["pointerout","pointerover"]),bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bs("onBeforeInput",["compositionend","keypress","textInput","paste"]),bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function y0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var w=r.length-1;0<=w;w--){var E=r[w],F=E.instance,fe=E.currentTarget;if(E=E.listener,F!==m&&f.isPropagationStopped())break e;m=E,f.currentTarget=fe;try{m(f)}catch(Se){$c(Se)}f.currentTarget=null,m=F}else for(w=0;w<r.length;w++){if(E=r[w],F=E.instance,fe=E.currentTarget,E=E.listener,F!==m&&f.isPropagationStopped())break e;m=E,f.currentTarget=fe;try{m(f)}catch(Se){$c(Se)}f.currentTarget=null,m=F}}}}function mn(e,s){var o=s[Zn];o===void 0&&(o=s[Zn]=new Set);var r=e+"__bubble";o.has(r)||(x0(s,e,2,!1),o.add(r))}function mh(e,s,o){var r=0;s&&(r|=4),x0(o,e,r,s)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[Cu]){e[Cu]=!0,pi.forEach(function(o){o!=="selectionchange"&&(I2.has(o)||mh(o,!1,e),mh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Cu]||(s[Cu]=!0,mh("selectionchange",!1,s))}}function x0(e,s,o,r){switch(q0(s)){case 2:var f=hv;break;case 8:f=mv;break;default:f=Ah}o=f.bind(null,s,o,e),f=void 0,!es||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function _h(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var w=r.tag;if(w===3||w===4){var E=r.stateNode.containerInfo;if(E===f)break;if(w===4)for(w=r.return;w!==null;){var F=w.tag;if((F===3||F===4)&&w.stateNode.containerInfo===f)return;w=w.return}for(;E!==null;){if(w=yo(E),w===null)return;if(F=w.tag,F===5||F===6||F===26||F===27){r=m=w;continue e}E=E.parentNode}}r=r.return}qn(function(){var fe=m,Se=Es(o),Be=[];e:{var pe=Zp.get(e);if(pe!==void 0){var xe=D,kt=e;switch(e){case"keypress":if(As(o)===0)break e;case"keydown":case"keyup":xe=yn;break;case"focusin":kt="focus",xe=Ut;break;case"focusout":kt="blur",xe=Ut;break;case"beforeblur":case"afterblur":xe=Ut;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=ut;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=Dt;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=ta;break;case Bi:case Wi:case zc:xe=Dn;break;case Qp:xe=po;break;case"scroll":case"scrollend":xe=ae;break;case"wheel":xe=ke;break;case"copy":case"cut":case"paste":xe=bo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=$n;break;case"toggle":case"beforetoggle":xe=yt}var Vt=(s&4)!==0,Un=!Vt&&(e==="scroll"||e==="scrollend"),re=Vt?pe!==null?pe+"Capture":null:pe;Vt=[];for(var J=fe,de;J!==null;){var Ae=J;if(de=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||de===null||re===null||(Ae=Qt(J,re),Ae!=null&&Vt.push(Fl(J,Ae,de))),Un)break;J=J.return}0<Vt.length&&(pe=new xe(pe,kt,null,o,Se),Be.push({event:pe,listeners:Vt}))}}if((s&7)===0){e:{if(pe=e==="mouseover"||e==="pointerover",xe=e==="mouseout"||e==="pointerout",pe&&o!==Eo&&(kt=o.relatedTarget||o.fromElement)&&(yo(kt)||kt[Qe]))break e;if((xe||pe)&&(pe=Se.window===Se?Se:(pe=Se.ownerDocument)?pe.defaultView||pe.parentWindow:window,xe?(kt=o.relatedTarget||o.toElement,xe=fe,kt=kt?yo(kt):null,kt!==null&&(Un=u(kt),Vt=kt.tag,kt!==Un||Vt!==5&&Vt!==27&&Vt!==6)&&(kt=null)):(xe=null,kt=fe),xe!==kt)){if(Vt=ut,Ae="onMouseLeave",re="onMouseEnter",J="mouse",(e==="pointerout"||e==="pointerover")&&(Vt=$n,Ae="onPointerLeave",re="onPointerEnter",J="pointer"),Un=xe==null?pe:xs(xe),de=kt==null?pe:xs(kt),pe=new Vt(Ae,J+"leave",xe,o,Se),pe.target=Un,pe.relatedTarget=de,Ae=null,yo(Se)===fe&&(Vt=new Vt(re,J+"enter",kt,o,Se),Vt.target=de,Vt.relatedTarget=Un,Ae=Vt),Un=Ae,xe&&kt)t:{for(Vt=P2,re=xe,J=kt,de=0,Ae=re;Ae;Ae=Vt(Ae))de++;Ae=0;for(var It=J;It;It=Vt(It))Ae++;for(;0<de-Ae;)re=Vt(re),de--;for(;0<Ae-de;)J=Vt(J),Ae--;for(;de--;){if(re===J||J!==null&&re===J.alternate){Vt=re;break t}re=Vt(re),J=Vt(J)}Vt=null}else Vt=null;xe!==null&&b0(Be,pe,xe,Vt,!1),kt!==null&&Un!==null&&b0(Be,Un,kt,Vt,!0)}}e:{if(pe=fe?xs(fe):window,xe=pe.nodeName&&pe.nodeName.toLowerCase(),xe==="select"||xe==="input"&&pe.type==="file")var kn=$;else if(bl(pe))if(G)kn=Gt;else{kn=vt;var Tt=tt}else xe=pe.nodeName,!xe||xe.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?fe&&Is(fe.elementType)&&(kn=$):kn=Nt;if(kn&&(kn=kn(e,fe))){vl(Be,kn,o,Se);break e}Tt&&Tt(e,pe,fe),e==="focusout"&&fe&&pe.type==="number"&&fe.memoizedProps.value!=null&&uo(pe,"number",pe.value)}switch(Tt=fe?xs(fe):window,e){case"focusin":(bl(Tt)||Tt.contentEditable==="true")&&(Ft=Tt,ps=fe,Sn=null);break;case"focusout":Sn=ps=Ft=null;break;case"mousedown":io=!0;break;case"contextmenu":case"mouseup":case"dragend":io=!1,No(Be,o,Se);break;case"selectionchange":if(Yt)break;case"keydown":case"keyup":No(Be,o,Se)}var ln;if(Lt)e:{switch(e){case"compositionstart":var _n="onCompositionStart";break e;case"compositionend":_n="onCompositionEnd";break e;case"compositionupdate":_n="onCompositionUpdate";break e}_n=void 0}else _o?vo(e,o)&&(_n="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(_n="onCompositionStart");_n&&(rn&&o.locale!=="ko"&&(_o||_n!=="onCompositionStart"?_n==="onCompositionEnd"&&_o&&(ln=ii()):(cs=Se,Ao="value"in cs?cs.value:cs.textContent,_o=!0)),Tt=ku(fe,_n),0<Tt.length&&(_n=new qe(_n,e,null,o,Se),Be.push({event:_n,listeners:Tt}),ln?_n.data=ln:(ln=na(o),ln!==null&&(_n.data=ln)))),(ln=fn?va(e,o):Ko(e,o))&&(_n=ku(fe,"onBeforeInput"),0<_n.length&&(Tt=new qe("onBeforeInput","beforeinput",null,o,Se),Be.push({event:Tt,listeners:_n}),Tt.data=ln)),O2(Be,e,fe,o,Se)}y0(Be,s)})}function Fl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function ku(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Qt(e,o),f!=null&&r.unshift(Fl(e,f,m)),f=Qt(e,s),f!=null&&r.push(Fl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function P2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,s,o,r,f){for(var m=s._reactName,w=[];o!==null&&o!==r;){var E=o,F=E.alternate,fe=E.stateNode;if(E=E.tag,F!==null&&F===r)break;E!==5&&E!==26&&E!==27||fe===null||(F=fe,f?(fe=Qt(o,m),fe!=null&&w.unshift(Fl(o,fe,F))):f||(fe=Qt(o,m),fe!=null&&w.push(Fl(o,fe,F)))),o=o.return}w.length!==0&&e.push({event:s,listeners:w})}var H2=/\r\n?/g,U2=/\u0000|\uFFFD/g;function v0(e){return(typeof e=="string"?e:""+e).replace(H2,`
`).replace(U2,"")}function w0(e,s){return s=v0(s),v0(e)===s}function Hn(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||To(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&To(e,""+r);break;case"className":vs(e,"class",r);break;case"tabIndex":vs(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(e,o,r);break;case"style":Di(e,r,m);break;case"data":if(s!=="object"){vs(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Io(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Hn(e,s,"name",f.name,f,null),Hn(e,s,"formEncType",f.formEncType,f,null),Hn(e,s,"formMethod",f.formMethod,f,null),Hn(e,s,"formTarget",f.formTarget,f,null)):(Hn(e,s,"encType",f.encType,f,null),Hn(e,s,"method",f.method,f,null),Hn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Io(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Ps);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Io(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":mn("beforetoggle",e),mn("toggle",e),co(e,"popover",r);break;case"xlinkActuate":zs(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":zs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":zs(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":zs(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":zs(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":zs(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":zs(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":zs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":zs(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":co(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Go.get(o)||o,co(e,o,r))}}function gh(e,s,o,r,f,m){switch(o){case"style":Di(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?To(e,r):(typeof r=="number"||typeof r=="bigint")&&To(e,""+r);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ps);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[tn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):co(e,o,r)}}}function ko(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mn("error",e),mn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var w=o[m];if(w!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Hn(e,s,m,w,o,null)}}f&&Hn(e,s,"srcSet",o.srcSet,o,null),r&&Hn(e,s,"src",o.src,o,null);return;case"input":mn("invalid",e);var E=m=w=f=null,F=null,fe=null;for(r in o)if(o.hasOwnProperty(r)){var Se=o[r];if(Se!=null)switch(r){case"name":f=Se;break;case"type":w=Se;break;case"checked":F=Se;break;case"defaultChecked":fe=Se;break;case"value":m=Se;break;case"defaultValue":E=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,s));break;default:Hn(e,s,r,Se,o,null)}}Cn(e,m,E,F,fe,w,f,!1);return;case"select":mn("invalid",e),r=w=m=null;for(f in o)if(o.hasOwnProperty(f)&&(E=o[f],E!=null))switch(f){case"value":m=E;break;case"defaultValue":w=E;break;case"multiple":r=E;default:Hn(e,s,f,E,o,null)}s=m,o=w,e.multiple=!!r,s!=null?ls(e,!!r,s,!1):o!=null&&ls(e,!!r,o,!0);return;case"textarea":mn("invalid",e),m=f=r=null;for(w in o)if(o.hasOwnProperty(w)&&(E=o[w],E!=null))switch(w){case"value":r=E;break;case"defaultValue":f=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Hn(e,s,w,E,o,null)}_i(e,r,f,m);return;case"option":for(F in o)if(o.hasOwnProperty(F)&&(r=o[F],r!=null))switch(F){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Hn(e,s,F,r,o,null)}return;case"dialog":mn("beforetoggle",e),mn("toggle",e),mn("cancel",e),mn("close",e);break;case"iframe":case"object":mn("load",e);break;case"video":case"audio":for(r=0;r<Wl.length;r++)mn(Wl[r],e);break;case"image":mn("error",e),mn("load",e);break;case"details":mn("toggle",e);break;case"embed":case"source":case"link":mn("error",e),mn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(fe in o)if(o.hasOwnProperty(fe)&&(r=o[fe],r!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Hn(e,s,fe,r,o,null)}return;default:if(Is(s)){for(Se in o)o.hasOwnProperty(Se)&&(r=o[Se],r!==void 0&&gh(e,s,Se,r,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(r=o[E],r!=null&&Hn(e,s,E,r,o,null))}function V2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,w=null,E=null,F=null,fe=null,Se=null;for(xe in o){var Be=o[xe];if(o.hasOwnProperty(xe)&&Be!=null)switch(xe){case"checked":break;case"value":break;case"defaultValue":F=Be;default:r.hasOwnProperty(xe)||Hn(e,s,xe,null,r,Be)}}for(var pe in r){var xe=r[pe];if(Be=o[pe],r.hasOwnProperty(pe)&&(xe!=null||Be!=null))switch(pe){case"type":m=xe;break;case"name":f=xe;break;case"checked":fe=xe;break;case"defaultChecked":Se=xe;break;case"value":w=xe;break;case"defaultValue":E=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,s));break;default:xe!==Be&&Hn(e,s,pe,xe,r,Be)}}$s(e,w,E,F,fe,Se,m,f);return;case"select":xe=w=E=pe=null;for(m in o)if(F=o[m],o.hasOwnProperty(m)&&F!=null)switch(m){case"value":break;case"multiple":xe=F;default:r.hasOwnProperty(m)||Hn(e,s,m,null,r,F)}for(f in r)if(m=r[f],F=o[f],r.hasOwnProperty(f)&&(m!=null||F!=null))switch(f){case"value":pe=m;break;case"defaultValue":E=m;break;case"multiple":w=m;default:m!==F&&Hn(e,s,f,m,r,F)}s=E,o=w,r=xe,pe!=null?ls(e,!!o,pe,!1):!!r!=!!o&&(s!=null?ls(e,!!o,s,!0):ls(e,!!o,o?[]:"",!1));return;case"textarea":xe=pe=null;for(E in o)if(f=o[E],o.hasOwnProperty(E)&&f!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Hn(e,s,E,null,r,f)}for(w in r)if(f=r[w],m=o[w],r.hasOwnProperty(w)&&(f!=null||m!=null))switch(w){case"value":pe=f;break;case"defaultValue":xe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Hn(e,s,w,f,r,m)}Fn(e,pe,xe);return;case"option":for(var kt in o)if(pe=o[kt],o.hasOwnProperty(kt)&&pe!=null&&!r.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Hn(e,s,kt,null,r,pe)}for(F in r)if(pe=r[F],xe=o[F],r.hasOwnProperty(F)&&pe!==xe&&(pe!=null||xe!=null))switch(F){case"selected":e.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:Hn(e,s,F,pe,r,xe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Vt in o)pe=o[Vt],o.hasOwnProperty(Vt)&&pe!=null&&!r.hasOwnProperty(Vt)&&Hn(e,s,Vt,null,r,pe);for(fe in r)if(pe=r[fe],xe=o[fe],r.hasOwnProperty(fe)&&pe!==xe&&(pe!=null||xe!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,s));break;default:Hn(e,s,fe,pe,r,xe)}return;default:if(Is(s)){for(var Un in o)pe=o[Un],o.hasOwnProperty(Un)&&pe!==void 0&&!r.hasOwnProperty(Un)&&gh(e,s,Un,void 0,r,pe);for(Se in r)pe=r[Se],xe=o[Se],!r.hasOwnProperty(Se)||pe===xe||pe===void 0&&xe===void 0||gh(e,s,Se,pe,r,xe);return}}for(var re in o)pe=o[re],o.hasOwnProperty(re)&&pe!=null&&!r.hasOwnProperty(re)&&Hn(e,s,re,null,r,pe);for(Be in r)pe=r[Be],xe=o[Be],!r.hasOwnProperty(Be)||pe===xe||pe==null&&xe==null||Hn(e,s,Be,pe,r,xe)}function S0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,w=f.initiatorType,E=f.duration;if(m&&E&&S0(w)){for(w=0,E=f.responseEnd,r+=1;r<o.length;r++){var F=o[r],fe=F.startTime;if(fe>E)break;var Se=F.transferSize,Be=F.initiatorType;Se&&S0(Be)&&(F=F.responseEnd,w+=Se*(F<E?1:(E-fe)/(F-fe)))}if(--r,s+=8*(m+w)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yh=null,xh=null;function ju(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function bh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vh=null;function W2(){var e=window.event;return e&&e.type==="popstate"?e===vh?!1:(vh=e,!0):(vh=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,F2=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,X2=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(q2)}:j0;function q2(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function T0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),Qr(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Xl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Xl(o);for(var m=o.firstChild;m;){var w=m.nextSibling,E=m.nodeName;m[Xs]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=w}}else o==="body"&&Xl(e.ownerDocument.body);o=f}while(o);Qr(s)}function E0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function wh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":wh(o),Mo(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function G2(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Xs])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=ki(e.nextSibling),e===null)break}return null}function K2(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=ki(e.nextSibling),e===null))return null;return e}function A0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ki(e.nextSibling),e===null))return null;return e}function Sh(e){return e.data==="$?"||e.data==="$~"}function Ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Q2(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ki(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var kh=null;function D0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return ki(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function N0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function R0(e,s,o){switch(s=ju(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Xl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Mo(e)}var ji=new Map,B0=new Set;function Mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=ie.d;ie.d={f:Z2,r:J2,D:ev,C:tv,L:nv,m:sv,X:iv,S:ov,M:av};function Z2(){var e=ga.f(),s=yu();return e||s}function J2(e){var s=as(e);s!==null&&s.tag===5&&s.type==="form"?Q_(s):ga.r(e)}var qr=typeof document>"u"?null:document;function L0(e,s,o){var r=qr;if(r&&typeof s=="string"&&s){var f=rs(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),B0.has(f)||(B0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),ko(s,"link",e),nn(s),r.head.appendChild(s)))}}function ev(e){ga.D(e),L0("dns-prefetch",e,null)}function tv(e,s){ga.C(e,s),L0("preconnect",e,s)}function nv(e,s,o){ga.L(e,s,o);var r=qr;if(r&&e&&s){var f='link[rel="preload"][as="'+rs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+rs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+rs(o.imageSizes)+'"]')):f+='[href="'+rs(e)+'"]';var m=f;switch(s){case"style":m=Gr(e);break;case"script":m=Kr(e)}ji.has(m)||(e=b({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),ji.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(ql(m))||s==="script"&&r.querySelector(Gl(m))||(s=r.createElement("link"),ko(s,"link",e),nn(s),r.head.appendChild(s)))}}function sv(e,s){ga.m(e,s);var o=qr;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+rs(r)+'"][href="'+rs(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Kr(e)}if(!ji.has(m)&&(e=b({rel:"modulepreload",href:e},s),ji.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Gl(m)))return}r=o.createElement("link"),ko(r,"link",e),nn(r),o.head.appendChild(r)}}}function ov(e,s,o){ga.S(e,s,o);var r=qr;if(r&&e){var f=Os(r).hoistableStyles,m=Gr(e);s=s||"default";var w=f.get(m);if(!w){var E={loading:0,preload:null};if(w=r.querySelector(ql(m)))E.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":s},o),(o=ji.get(m))&&jh(e,o);var F=w=r.createElement("link");nn(F),ko(F,"link",e),F._p=new Promise(function(fe,Se){F.onload=fe,F.onerror=Se}),F.addEventListener("load",function(){E.loading|=1}),F.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Tu(w,s,r)}w={type:"stylesheet",instance:w,count:1,state:E},f.set(m,w)}}}function iv(e,s){ga.X(e,s);var o=qr;if(o&&e){var r=Os(o).hoistableScripts,f=Kr(e),m=r.get(f);m||(m=o.querySelector(Gl(f)),m||(e=b({src:e,async:!0},s),(s=ji.get(f))&&Mh(e,s),m=o.createElement("script"),nn(m),ko(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function av(e,s){ga.M(e,s);var o=qr;if(o&&e){var r=Os(o).hoistableScripts,f=Kr(e),m=r.get(f);m||(m=o.querySelector(Gl(f)),m||(e=b({src:e,async:!0,type:"module"},s),(s=ji.get(f))&&Mh(e,s),m=o.createElement("script"),nn(m),ko(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function O0(e,s,o,r){var f=(f=Re.current)?Mu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Gr(o.href),o=Os(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=Gr(o.href);var m=Os(f).hoistableStyles,w=m.get(e);if(w||(f=f.ownerDocument||f,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,w),(m=f.querySelector(ql(e)))&&!m._p&&(w.instance=m,w.state.loading=5),ji.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ji.set(e,o),m||rv(f,e,o,w.state))),s&&r===null)throw Error(a(528,""));return w}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Kr(o),o=Os(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Gr(e){return'href="'+rs(e)+'"'}function ql(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function rv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),ko(s,"link",o),nn(s),e.head.appendChild(s))}function Kr(e){return'[src="'+rs(e)+'"]'}function Gl(e){return"script[async]"+e}function $0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+rs(o.href)+'"]');if(r)return s.instance=r,nn(r),r;var f=b({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),nn(r),ko(r,"style",f),Tu(r,o.precedence,e),s.instance=r;case"stylesheet":f=Gr(o.href);var m=e.querySelector(ql(f));if(m)return s.state.loading|=4,s.instance=m,nn(m),m;r=z0(o),(f=ji.get(f))&&jh(r,f),m=(e.ownerDocument||e).createElement("link"),nn(m);var w=m;return w._p=new Promise(function(E,F){w.onload=E,w.onerror=F}),ko(m,"link",r),s.state.loading|=4,Tu(m,o.precedence,e),s.instance=m;case"script":return m=Kr(o.src),(f=e.querySelector(Gl(m)))?(s.instance=f,nn(f),f):(r=o,(f=ji.get(m))&&(r=b({},o),Mh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),nn(f),ko(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Tu(r,o.precedence,e));return s.instance}function Tu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,w=0;w<r.length;w++){var E=r[w];if(E.dataset.precedence===s)m=E;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function jh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Eu=null;function I0(e,s,o){if(Eu===null){var r=new Map,f=Eu=new Map;f.set(o,r)}else f=Eu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Xs]||m[an]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var w=m.getAttribute(s)||"";w=e+w;var E=r.get(w);E?E.push(m):r.set(w,[m])}}return r}function P0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function lv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=Gr(r.href),m=s.querySelector(ql(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Au.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,nn(m);return}m=s.ownerDocument||s,r=z0(r),(f=ji.get(f))&&jh(r,f),m=m.createElement("link"),nn(m);var w=m;w._p=new Promise(function(E,F){w.onload=E,w.onerror=F}),ko(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Au.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function uv(e,s){return e.stylesheets&&e.count===0&&Nu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*Y2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Du=null;function Nu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Du=new Map,s.forEach(dv,e),Du=null,Au.call(e))}function dv(e,s){if(!(s.state.loading&4)){var o=Du.get(e);if(o)var r=o.get(null);else{o=new Map,Du.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var w=f[m];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(o.set(w.dataset.precedence,w),r=w)}r&&o.set(null,r)}f=s.instance,w=f.getAttribute("data-precedence"),m=o.get(w)||r,m===r&&o.set(null,f),o.set(w,f),this.count++,r=Au.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Kl={$$typeof:B,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function fv(e,s,o,r,f,m,w,E,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=un(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.hiddenUpdates=un(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function U0(e,s,o,r,f,m,w,E,F,fe,Se,Be){return e=new fv(e,s,o,w,F,fe,Se,Be,E),s=1,m===!0&&(s|=24),m=ri(3,null,null,s),e.current=m,m.stateNode=e,s=rf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},df(m),e}function V0(e){return e?(e=Mr,e):Mr}function Y0(e,s,o,r,f,m){f=V0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ea(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Aa(e,r,s),o!==null&&(ti(o,e,s),Tl(o,e,s))}function W0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Eh(e,s){W0(e,s),(e=e.alternate)&&W0(e,s)}function F0(e){if(e.tag===13||e.tag===31){var s=er(e,67108864);s!==null&&ti(s,e,67108864),Eh(e,67108864)}}function X0(e){if(e.tag===13||e.tag===31){var s=fi();s=lo(s);var o=er(e,s);o!==null&&ti(o,e,s),Eh(e,s)}}var Ru=!0;function hv(e,s,o,r){var f=z.T;z.T=null;var m=ie.p;try{ie.p=2,Ah(e,s,o,r)}finally{ie.p=m,z.T=f}}function mv(e,s,o,r){var f=z.T;z.T=null;var m=ie.p;try{ie.p=8,Ah(e,s,o,r)}finally{ie.p=m,z.T=f}}function Ah(e,s,o,r){if(Ru){var f=Dh(r);if(f===null)_h(e,s,r,Bu,o),G0(e,r);else if(_v(f,e,s,o,r))r.stopPropagation();else if(G0(e,r),s&4&&-1<pv.indexOf(e)){for(;f!==null;){var m=as(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var w=cn(m.pendingLanes);if(w!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;w;){var F=1<<31-St(w);E.entanglements[1]|=F,w&=~F}Gi(m),(Tn&6)===0&&(_u=rt()+500,Yl(0))}}break;case 31:case 13:E=er(m,2),E!==null&&ti(E,m,2),yu(),Eh(m,2)}if(m=Dh(r),m===null&&_h(e,s,r,Bu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else _h(e,s,r,null,o)}}function Dh(e){return e=Es(e),Nh(e)}var Bu=null;function Nh(e){if(Bu=null,e=yo(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Bu=e,null}function q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case at:return 2;case Et:return 8;case Ze:case H:return 32;case Z:return 268435456;default:return 32}default:return 32}}var Rh=!1,Ha=null,Ua=null,Va=null,Ql=new Map,Zl=new Map,Ya=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G0(e,s){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Ql.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(s.pointerId)}}function Jl(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=as(s),s!==null&&F0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function _v(e,s,o,r,f){switch(s){case"focusin":return Ha=Jl(Ha,e,s,o,r,f),!0;case"dragenter":return Ua=Jl(Ua,e,s,o,r,f),!0;case"mouseover":return Va=Jl(Va,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return Ql.set(m,Jl(Ql.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,Zl.set(m,Jl(Zl.get(m)||null,e,s,o,r,f)),!0}return!1}function K0(e){var s=yo(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,Wt(e.priority,function(){X0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,Wt(e.priority,function(){X0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lu(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Eo=r,o.target.dispatchEvent(r),Eo=null}else return s=as(o),s!==null&&F0(s),e.blockedOn=o,!1;s.shift()}return!0}function Q0(e,s,o){Lu(e)&&o.delete(s)}function gv(){Rh=!1,Ha!==null&&Lu(Ha)&&(Ha=null),Ua!==null&&Lu(Ua)&&(Ua=null),Va!==null&&Lu(Va)&&(Va=null),Ql.forEach(Q0),Zl.forEach(Q0)}function Ou(e,s){e.blockedOn===s&&(e.blockedOn=null,Rh||(Rh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,gv)))}var zu=null;function Z0(e){zu!==e&&(zu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){zu===e&&(zu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Nh(r||o)===null)continue;break}var m=as(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function Qr(e){function s(F){return Ou(F,e)}Ha!==null&&Ou(Ha,e),Ua!==null&&Ou(Ua,e),Va!==null&&Ou(Va,e),Ql.forEach(s),Zl.forEach(s);for(var o=0;o<Ya.length;o++){var r=Ya[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ya.length&&(o=Ya[0],o.blockedOn===null);)K0(o),o.blockedOn===null&&Ya.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],w=f[tn]||null;if(typeof m=="function")w||Z0(o);else if(w){var E=null;if(m&&m.hasAttribute("formAction")){if(f=m,w=m[tn]||null)E=w.formAction;else if(Nh(f)!==null)continue}else E=w.action;typeof E=="function"?o[r+1]=E:(o.splice(r,3),r-=3),Z0(o)}}}function J0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(w){return f=w})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Bh(e){this._internalRoot=e}$u.prototype.render=Bh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=fi();Y0(o,r,e,s,null,null)},$u.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;Y0(e.current,2,null,e,null,null),yu(),s[Qe]=null}};function $u(e){this._internalRoot=e}$u.prototype.unstable_scheduleHydration=function(e){if(e){var s=Wn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Ya.length&&s!==0&&s<Ya[o].priority;o++);Ya.splice(o,0,e),o===0&&K0(e)}};var ey=n.version;if(ey!=="19.2.4")throw Error(a(527,ey,"19.2.4"));ie.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var yv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{Fe=Iu.inject(yv),Ue=Iu}catch{}}return tc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=rg,m=lg,w=cg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError)),s=U0(e,1,!1,null,null,o,r,null,f,m,w,J0),e[Qe]=s.current,ph(e),new Bh(s)},tc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=rg,w=lg,E=cg,F=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(w=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.formState!==void 0&&(F=o.formState)),s=U0(e,1,!0,s,o!=null?o:null,r,f,F,m,w,E,J0),s.context=V0(null),o=s.current,r=fi(),r=lo(r),f=Ea(r),f.callback=null,Aa(o,f,r),o=r,s.current.lanes=o,_t(s,o),Gi(s),e[Qe]=s.current,ph(e),new $u(s)},tc.version="19.2.4",tc}var uy;function Mv(){if(uy)return Oh.exports;uy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Oh.exports=jv(),Oh.exports}var Tv=Mv();const Ev=Tx(Tv);var y=dp();const Av=Tx(y);function Dv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Nv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var dd;const Ai="__TAURI_TO_IPC_KEY__";function Rv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function ge(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Bv{get rid(){return Dv(this,dd,"f")}constructor(n){dd.set(this,void 0),Nv(this,dd,n)}async close(){return ge("plugin:resources|close",{rid:this.rid})}}dd=new WeakMap;var hi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(hi||(hi={}));async function Ax(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await ge("plugin:event|unlisten",{event:t,eventId:n})}async function al(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return ge("plugin:event|listen",{event:t,target:c,handler:Rv(n)}).then(u=>async()=>Ax(t,u))}async function Lv(t,n,i){return al(t,a=>{Ax(t,a.id),n(a)},i)}async function Ov(t,n){await ge("plugin:event|emit",{event:t,payload:n})}async function zv(t,n,i){await ge("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Dx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new mc(this.width*n,this.height*n)}[Ai](){return{width:this.width,height:this.height}}toJSON(){return this[Ai]()}}class mc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Dx(this.width/n,this.height/n)}[Ai](){return{width:this.width,height:this.height}}toJSON(){return this[Ai]()}}class Zr{constructor(n){this.size=n}toLogical(n){return this.size instanceof Dx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof mc?this.size:this.size.toPhysical(n)}[Ai](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ai]()}}class Nx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ga(this.x*n,this.y*n)}[Ai](){return{x:this.x,y:this.y}}toJSON(){return this[Ai]()}}class Ga{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Nx(this.x/n,this.y/n)}[Ai](){return{x:this.x,y:this.y}}toJSON(){return this[Ai]()}}class Pu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Nx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ga?this.position:this.position.toPhysical(n)}[Ai](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ai]()}}class pc extends Bv{constructor(n){super(n)}static async new(n,i,a){return ge("plugin:image|new",{rgba:wd(n),width:i,height:a}).then(c=>new pc(c))}static async fromBytes(n){return ge("plugin:image|from_bytes",{bytes:wd(n)}).then(i=>new pc(i))}static async fromPath(n){return ge("plugin:image|from_path",{path:n}).then(i=>new pc(i))}async rgba(){return ge("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return ge("plugin:image|size",{rid:this.rid})}}function wd(t){return t==null?null:typeof t=="string"?t:t instanceof pc?t.rid:t}var Mm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Mm||(Mm={}));class $v{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var dy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(dy||(dy={}));function Tm(){return new Rx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Hh(){return ge("plugin:window|get_all_windows").then(t=>t.map(n=>new Rx(n,{skip:!0})))}const Uh=["tauri://created","tauri://error"];class Rx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||ge("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Hh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Tm()}static async getAll(){return Hh()}static async getFocusedWindow(){for(const n of await Hh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:al(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Lv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Uh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Ov(n,i)}async emitTo(n,i,a){if(Uh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return zv(n,i,a)}_handleTauriEvent(n,i){return Uh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return ge("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return ge("plugin:window|inner_position",{label:this.label}).then(n=>new Ga(n))}async outerPosition(){return ge("plugin:window|outer_position",{label:this.label}).then(n=>new Ga(n))}async innerSize(){return ge("plugin:window|inner_size",{label:this.label}).then(n=>new mc(n))}async outerSize(){return ge("plugin:window|outer_size",{label:this.label}).then(n=>new mc(n))}async isFullscreen(){return ge("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return ge("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return ge("plugin:window|is_maximized",{label:this.label})}async isFocused(){return ge("plugin:window|is_focused",{label:this.label})}async isDecorated(){return ge("plugin:window|is_decorated",{label:this.label})}async isResizable(){return ge("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return ge("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return ge("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return ge("plugin:window|is_closable",{label:this.label})}async isVisible(){return ge("plugin:window|is_visible",{label:this.label})}async title(){return ge("plugin:window|title",{label:this.label})}async theme(){return ge("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return ge("plugin:window|is_always_on_top",{label:this.label})}async center(){return ge("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Mm.Critical?i={type:"Critical"}:i={type:"Informational"}),ge("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return ge("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return ge("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return ge("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return ge("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return ge("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return ge("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return ge("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return ge("plugin:window|maximize",{label:this.label})}async unmaximize(){return ge("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return ge("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return ge("plugin:window|minimize",{label:this.label})}async unminimize(){return ge("plugin:window|unminimize",{label:this.label})}async show(){return ge("plugin:window|show",{label:this.label})}async hide(){return ge("plugin:window|hide",{label:this.label})}async close(){return ge("plugin:window|close",{label:this.label})}async destroy(){return ge("plugin:window|destroy",{label:this.label})}async setDecorations(n){return ge("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return ge("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return ge("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return ge("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return ge("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return ge("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return ge("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return ge("plugin:window|set_size",{label:this.label,value:n instanceof Zr?n:new Zr(n)})}async setMinSize(n){return ge("plugin:window|set_min_size",{label:this.label,value:n instanceof Zr?n:n?new Zr(n):null})}async setMaxSize(n){return ge("plugin:window|set_max_size",{label:this.label,value:n instanceof Zr?n:n?new Zr(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return ge("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return ge("plugin:window|set_position",{label:this.label,value:n instanceof Pu?n:new Pu(n)})}async setFullscreen(n){return ge("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return ge("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return ge("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return ge("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return ge("plugin:window|set_icon",{label:this.label,value:wd(n)})}async setSkipTaskbar(n){return ge("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return ge("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return ge("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return ge("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return ge("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return ge("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Pu?n:new Pu(n)})}async setIgnoreCursorEvents(n){return ge("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return ge("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return ge("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return ge("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return ge("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return ge("plugin:window|set_overlay_icon",{label:this.label,value:n?wd(n):void 0})}async setProgressBar(n){return ge("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return ge("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return ge("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return ge("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(hi.WINDOW_RESIZED,i=>{i.payload=new mc(i.payload),n(i)})}async onMoved(n){return this.listen(hi.WINDOW_MOVED,i=>{i.payload=new Ga(i.payload),n(i)})}async onCloseRequested(n){return this.listen(hi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new $v(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(hi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ga(d.payload.position)}})}),a=await this.listen(hi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ga(d.payload.position)}})}),c=await this.listen(hi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ga(d.payload.position)}})}),u=await this.listen(hi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(hi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(hi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(hi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(hi.WINDOW_THEME_CHANGED,n)}}var fy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(fy||(fy={}));var hy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(hy||(hy={}));var my;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(my||(my={}));var py;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(py||(py={}));async function Iv(t={}){return typeof t=="object"&&Object.freeze(t),await ge("plugin:dialog|open",{options:t})}const Pv=3.7,Hu=200,Em=240,ns=540,Vs=176,Vh=32,Tc=20,Hv=Em/2,nc=ns+Hv,Jr=18,el=18,Yh="#E6E6E6";function _y(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function xr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ya(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function Uu(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ya(t).localeCompare(ya(n))}function Am(t){var h,p,g,_,b;if(t.length<=1)return[...t];const n=new Map(t.map(v=>[ya(v),v])),i=new Map,a=new Map;t.forEach(v=>i.set(ya(v),0));for(const v of t){const S=(h=v.parentSha)!=null?h:void 0;if(!S||!n.has(S))continue;const C=ya(v);i.set(C,((p=i.get(C))!=null?p:0)+1);const j=(g=a.get(S))!=null?g:[];j.push(v),a.set(S,j)}for(const v of a.values())v.sort(Uu);const c=t.filter(v=>{var S;return((S=i.get(ya(v)))!=null?S:0)===0}).sort(Uu),u=[],d=new Set;for(;c.length>0;){const v=c.shift(),S=ya(v);if(!d.has(S)){d.add(S),u.push(v);for(const C of(_=a.get(S))!=null?_:[]){const j=ya(C),M=((b=i.get(j))!=null?b:0)-1;i.set(j,M),M===0&&c.push(C)}c.sort(Uu)}}return u.length===t.length?u:[...u,...t.filter(v=>!d.has(ya(v))).sort(Uu)]}function Bx(t,n){var i;return Am(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Lx(t,n,i){return Bx(t,i)}function Wh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Uv(t,n){var u,d;if(!n||t.length===0)return Wh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Wh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Wh(t)}function Vu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Vv(t,n,i){var _,b,v,S,C,j,M;const a=Lx(t,i,n);if(a.length===0)return null;const c=a.map(T=>xr(t,T)),u=new Set(c.map(T=>T.id)),d=(b=(_=c[0])==null?void 0:_.parentSha)!=null?b:null,h=(S=(v=c.find(T=>T.kind==="branch-created"))==null?void 0:v.id)!=null?S:null,p=(C=c[0])==null?void 0:C.date,g=c.find(T=>h&&T.id===h||d&&T.id===d?!0:!T.parentSha||!u.has(T.parentSha));return g||((M=(j=Uv(c,p!=null?p:void 0))!=null?j:c[0])!=null?M:null)}function Yv(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Bx(t.name,i);if(a.length>0){const g=a.map(v=>xr(t.name,v)),_=new Set(g.map(v=>v.id)),b=(u=(c=g.find(v=>!v.parentSha||!_.has(v.parentSha)))!=null?c:g[0])!=null?u:null;if(b!=null&&b.parentSha)return b.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function fp(t,n,i={},a={}){var se,oe,be,Ee;const u=new Map(t.map(K=>[K.name,K])),d=new Map,h=new Map;for(const K of t){const z=((se=i[K.name])!=null?se:[]).filter(ie=>ie.kind!=="branch-created").map(ie=>new Date(ie.date).getTime()).filter(ie=>Number.isFinite(ie)).sort((ie,X)=>ie-X)[0];z!=null&&h.set(K.name,z)}const p=K=>{const le=h.get(K.name);return le!=null?le:_y(K).start},g=K=>{var z;const le=(z=a[K.name])!=null?z:null;return le&&le!==K.name&&(le===n||u.has(le))?le:K.name===n?null:K.parentBranch&&K.parentBranch!==K.name&&u.has(K.parentBranch)?K.parentBranch:null};for(const K of t){if(K.name===n)continue;const le=(oe=g(K))!=null?oe:n,z=(be=d.get(le))!=null?be:[];z.push(K),d.set(le,z)}for(const K of d.values())K.sort((le,z)=>p(le)-p(z)||le.name.localeCompare(z.name));const _=new Map,b=[],v=new Map,S=new Map,C=new Map;for(const K of Object.values(i))for(const le of K){const z=new Date(le.date).getTime();Number.isFinite(z)&&(le.fullSha&&C.set(le.fullSha,z),le.sha&&C.set(le.sha,z))}const j=(K,le)=>({start:Math.min(K,le),end:Math.max(K,le)}),M=K=>{var q,ue;const le=j(p(K),_y(K).end),z=[le],ie=le.start,X=Yv(K,n,i),me=X?C.get(X):void 0,Te=new Date((ue=(q=K.divergedFromDate)!=null?q:K.createdDate)!=null?ue:K.lastCommitDate).getTime(),A=Number.isFinite(me!=null?me:NaN)?me:Number.isFinite(Te)?Te:null;if(A==null)return z;const ee=j(A,ie);return ee.start!==ee.end&&z.push(ee),z},T=Math.max(1,360*60*1e3*Pv),I=(K,le)=>!(K.start-le.end>=T||le.start-K.end>=T),B=(K,le)=>le.some(z=>{var ie;return((ie=S.get(K))!=null?ie:[]).some(X=>I(z,X))}),N=(K,le=new Set)=>{const z=v.get(K);if(z!=null)return z;if(le.has(K))return 1;le.add(K);const ie=u.get(K);if(!ie||K===n)return le.delete(K),v.set(K,0),0;const X=g(ie),me=X?N(X,le)+1:1;return le.delete(K),v.set(K,me),me},P=(K,le=new Set)=>{var Re,ve;const z=_.get(K);if(z)return z.column;if(le.has(K))return 0;le.add(K);const ie=u.get(K);if(!ie)return le.delete(K),0;if(K===n){const ot={name:K,column:0,parentName:null};_.set(K,ot),b.push(ot);const Xe=M(ie);return S.set(0,[...(Re=S.get(0))!=null?Re:[],...Xe]),le.delete(K),0}const X=g(ie),me=X&&!le.has(X)?X:null,Te=me?P(me,le):0,A=Math.max(1,N(K)),ee=Math.max(me?Te+1:1,A),q=M(ie);let ue=ee;for(;B(ue,q);)ue+=1;const je={name:K,column:ue,parentName:me};return _.set(K,je),b.push(je),S.set(ue,[...(ve=S.get(ue))!=null?ve:[],...q]),le.delete(K),ue};P(n);const Y=t.filter(K=>!_.has(K.name)).sort((K,le)=>p(K)-p(le)||K.name.localeCompare(le.name)),V=Y.filter(K=>g(K)!=null),U=Y.filter(K=>g(K)==null);for(const K of V)P(K.name);let Q=Math.max(0,...b.map(K=>K.column))+1+1;for(const K of U){const le=M(K);let z=Q;for(;B(z,le);)z+=1;const ie={name:K.name,column:z,parentName:null};_.set(K.name,ie),b.push(ie),S.set(z,[...(Ee=S.get(z))!=null?Ee:[],...le]),Q=z+1}return b.sort((K,le)=>K.column-le.column||K.name.localeCompare(le.name))}const Yu=2.25,$i=0,Fh=0,Wv=1800*1e3,Fv=1440*60*1e3,Mi=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Hi=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function gy(t,n,i=new Map){var U,Q,se,oe,be,Ee,K,le,z,ie,X,me,Te;if(t.length===0)return new Map;const a=[...t].sort((A,ee)=>{const q=Mi(A.date)-Mi(ee.date);return q!==0?q:A.id!==ee.id?A.id.localeCompare(ee.id):A.visualId.localeCompare(ee.visualId)}),c=new Map;for(const A of t){const ee=(U=A.parentSha)!=null?U:null;if(ee){const q=(Q=c.get(ee))!=null?Q:new Set;q.add(A.id),c.set(ee,q)}for(const q of(se=i.get(A.id))!=null?se:[]){if(!q)continue;const ue=(oe=c.get(q))!=null?oe:new Set;ue.add(A.id),c.set(q,ue)}}const u=new Map,d=new Map,h=new Map,p=new Set,g=new Map,_=new Map,b=new Map,v=new Map;for(const A of t){const ee=(be=g.get(A.branchName))!=null?be:new Set;ee.add(A.id),g.set(A.branchName,ee);const q=(K=(Ee=n.get(A.branchName))==null?void 0:Ee.column)!=null?K:0,ue=(le=_.get(A.id))!=null?le:new Set;ue.add(q),_.set(A.id,ue);const je=new Set;A.parentSha&&je.add(A.parentSha),b.set(A.visualId,je);const Re=new Set(je);for(const ve of(z=i.get(A.id))!=null?z:[])ve&&Re.add(ve);v.set(A.visualId,Re)}const S=new Set(Array.from(_.keys())),C=Array.from(S),j=new Map,M=A=>{const ee=[];for(const q of C)Hi(q,A)&&ee.push(q);return ee},T=new Map;for(const A of C)T.set(A,new Set);for(const A of t){const ee=M(A.id);if(ee.length===0)continue;const q=(ie=v.get(A.visualId))!=null?ie:new Set,ue=new Set;for(const je of q)for(const Re of M(je))ue.add(Re);for(const je of ee){const Re=(X=T.get(je))!=null?X:new Set;for(const ve of ue)Re.add(ve);T.set(je,Re)}}const I=new Map,B=(A,ee=new Set)=>{var Re;const q=I.get(A);if(q)return q;if(ee.has(A))return new Set;ee.add(A);const ue=(Re=T.get(A))!=null?Re:new Set,je=new Set;for(const ve of ue){je.add(ve);for(const ot of B(ve,ee))je.add(ot)}return ee.delete(A),I.set(A,je),je},N=(A,ee)=>{if(Hi(A,ee))return!0;const q=M(A),ue=M(ee);for(const je of q){const Re=B(je);for(const ve of ue)if(Re.has(ve))return!0}for(const je of ue){const Re=B(je);for(const ve of q)if(Re.has(ve))return!0}return!1};let P=1;const Y=(A,ee)=>{var dt,ce,He,Ge,ze,Mt,ft,rt,it;const q=(ce=(dt=n.get(A.branchName))==null?void 0:dt.column)!=null?ce:0,ue=(He=g.get(A.branchName))!=null?He:new Set,Re=!(!!A.parentSha&&ue.has(A.parentSha))&&A.parentSha?A.parentSha:null,ve=Array.from(ee).flatMap(at=>M(at).flatMap(Et=>{var Ze;return(Ze=j.get(Et))!=null?Ze:[]})),ot=ve.length>0?Math.max(...ve)+1:1,Xe=(Ge=c.get(A.id))!=null?Ge:new Set,lt=Array.from(Xe).flatMap(at=>{var Et;return Array.from((Et=_.get(at))!=null?Et:[])}).some(at=>at!==q),nt=new Date(A.date).getTime(),zt=Math.max(ot,1);let ct=null;for(let at=zt;at<P;at+=1){const Et=(ze=d.get(at))!=null?ze:[];if(Et.length===0||lt||p.has(at))continue;const Ze=(Mt=v.get(A.visualId))!=null?Mt:new Set;if(!(Et.some(_e=>N(A.id,_e.sha)?!0:Array.from(Ze).some(Ue=>Hi(Ue,_e.sha)))||Et.some(_e=>_e.column===q)||!Number.isFinite(nt)||!Et.every(_e=>{if(!Number.isFinite(_e.time))return!1;const Ue=!!Re&&!!_e.branchEntryParentSha&&Re===_e.branchEntryParentSha?Fv:Wv;return Math.abs(_e.time-nt)<=Ue}))){ct=at;break}}ct==null&&(ct=Math.max(ot,P)),u.set(A.visualId,ct),ct>=P&&(P=ct+1);const Rt=(ft=d.get(ct))!=null?ft:[];Rt.push({visualId:A.visualId,sha:A.id,column:q,time:nt,branchEntryParentSha:Re}),d.set(ct,Rt),lt&&p.add(ct);for(const at of ee){const Et=(rt=h.get(at))!=null?rt:[];Et.push(ct),h.set(at,Et)}const Oe=(it=j.get(A.id))!=null?it:[];Oe.push(ct),j.set(A.id,Oe)};let V=[...a];for(;V.length>0;){const A=[];let ee=!1;for(const q of V){const ue=(me=b.get(q.visualId))!=null?me:new Set;if(Array.from(ue).some(Re=>M(Re).some(ve=>{var ot,Xe;return((Xe=(ot=j.get(ve))==null?void 0:ot.length)!=null?Xe:0)===0}))){A.push(q);continue}Y(q,ue),ee=!0}if(!ee){const q=A.shift();if(!q)break;Y(q,(Te=b.get(q.visualId))!=null?Te:new Set)}V=A}return u}function Sd(t){var Oo,Fo,co,vs,zs,vn,Jn,Yi,Xo,so,xo,zo,rs,$s,Cn,uo,ls,Fn,_i,To,qo,Xt,Di,Is,Go,$o,Io,Ps,Eo,Es,wn,fo,Xn,ws,qn,Qt,qs,es,Gs,cs,Ao,Ss,ii,As,Ds,ho;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:g,manuallyOpenedClumps:_,manuallyClosedClumps:b,isDebugOpen:v,gridSearchQuery:S,gridFocusSha:C,checkedOutRef:j,orientation:M="horizontal"}=t,T=M==="horizontal",I=new Map(i.map(x=>[x.name,x])),B=new Map(n.map(x=>[x.name,x])),N=Am([...a.map(x=>{var k,D,O;return{id:x.fullSha,branchName:d,message:(k=x.prTitle)!=null?k:x.sha,author:"",date:x.date,parentSha:(O=(D=x.parentShas)==null?void 0:D[0])!=null?O:null}}),...((Oo=h[d])!=null?Oo:[]).map(x=>xr(d,x)),...c.map(x=>xr(d,x)),...u.map(x=>xr(d,x))]),P=new Map,Y=new Map;for(const x of i){if(x.name===d)continue;const k=Lx(x.name,g,h);Y.set(x.name,k);const D=Am(k.map(he=>xr(x.name,he)));if(D.length>0){P.set(x.name,D);continue}const O=(vs=(co=(Fo=x.presidesFromSha)!=null?Fo:x.divergedFromSha)!=null?co:x.createdFromSha)!=null?vs:null;if(!O)continue;const ae={id:`BRANCH_HEAD:${x.name}:${O}`,branchName:x.name,message:`Branch ${x.name}`,author:x.lastCommitAuthor,date:(vn=(zs=x.createdDate)!=null?zs:x.divergedFromDate)!=null?vn:x.lastCommitDate,parentSha:null,kind:"branch-created"};P.set(x.name,[ae])}const V=new Set(N.map(x=>x.id)),U=(Jn=[...N].sort((x,k)=>Mi(x.date)-Mi(k.date)||x.id.localeCompare(k.id))[0])!=null?Jn:null,Q=new Map(Array.from(P.entries()).map(([x,k])=>[x,new Set(k.map(D=>D.id))])),se=new Map;for(const x of i){if(x.name===d)continue;const k=Vv(x.name,h,g);if(k){se.set(x.name,k);continue}const D=(Yi=P.get(x.name))==null?void 0:Yi[0];if(D){const O=(xo=(so=(Xo=x.presidesFromSha)!=null?Xo:x.divergedFromSha)!=null?so:x.createdFromSha)!=null?xo:null;se.set(x.name,{...D,parentSha:O})}}const oe=new Map;for(const[x,k]of P.entries()){const D=k.find(O=>O.kind!=="branch-created");D&&oe.set(x,D)}const be=new Map;for(const[x,k]of P.entries()){const D=k.filter(Ne=>Ne.kind!=="branch-created"),O=D.length>0?D:k,ae=new Set(O.map(Ne=>Ne.id)),he=O.find(Ne=>!Ne.parentSha||!ae.has(Ne.parentSha)),we=he!=null?he:O[0];we&&be.set(x,we)}const Ee=new Map;for(const x of i){if(x.name===d)continue;const k=(zo=be.get(x.name))!=null?zo:null,D=(rs=k==null?void 0:k.parentSha)!=null?rs:null;if(D){Ee.set(x.name,D);continue}const O=(Cn=($s=se.get(x.name))==null?void 0:$s.parentSha)!=null?Cn:null;if(O){Ee.set(x.name,O);continue}const ae=(Fn=(ls=(uo=x.presidesFromSha)!=null?uo:x.divergedFromSha)!=null?ls:x.createdFromSha)!=null?Fn:null;ae&&Ee.set(x.name,ae)}const K=x=>{var he,we,Ne,Je,ut,$t,Dt,sn;const k=(he=p[x.name])!=null?he:null;if(!(k&&k!==d&&k!==x.name&&I.has(k)))return k!=null?k:d;const O=(Je=(Ne=(we=Ee.get(x.name))!=null?we:x.presidesFromSha)!=null?Ne:x.divergedFromSha)!=null?Je:x.createdFromSha;if(O&&((ut=Q.get(k))!=null?ut:new Set).has(O))return k;const ae=(Dt=($t=se.get(x.name))==null?void 0:$t.parentSha)!=null?Dt:null;return ae&&((sn=Q.get(k))!=null?sn:new Set).has(ae),k},le=x=>{var ae,he,we,Ne,Je,ut,$t,Dt;const k=se.get(x.name),D=(Je=(Ne=(we=(he=(ae=Ee.get(x.name))!=null?ae:k==null?void 0:k.parentSha)!=null?he:x.presidesFromSha)!=null?we:x.divergedFromSha)!=null?Ne:x.createdFromSha)!=null?Je:null;if(!x.parentBranch&&!D||!D)return null;if(K(x)===d){if(V.has(D))return D;const sn=(ut=k==null?void 0:k.parentSha)!=null?ut:null;return sn&&V.has(sn)?sn:(Dt=($t=U==null?void 0:U.id)!=null?$t:sn)!=null?Dt:D}return V.has(D),D},z=x=>le(x),ie=new Map;for(const x of[...c,...u]){const k={...xr(x.branch||d,x),visualId:`${x.branch||d}:${x.fullSha}`};ie.set(x.fullSha,k)}const X=new Map(ie),me=x=>{X.has(x.id)||X.set(x.id,x)},Te=new Map(Array.from(P.entries()).map(([x,k])=>[x,new Set(k.map(D=>D.id))])),A=new Set;for(const x of Te.values())for(const k of x)A.add(k);for(const x of N)A.has(x.id)||me({...x,visualId:`${x.branchName}:${x.id}`});for(const[x,k]of P.entries())for(const D of k)me({...D,visualId:`${x}:${D.id}`});const q=[...Array.from(X.values()).map(x=>({...x,visualId:`${x.branchName}:${x.id}`}))].sort((x,k)=>Mi(x.date)-Mi(k.date)||x.id.localeCompare(k.id)),ue=new Map;for(const x of q){const k=(_i=ue.get(x.branchName))!=null?_i:new Set;k.add(x.id),ue.set(x.branchName,k)}const je=(x,k)=>{const D=ue.get(x);if(!D||D.size===0)return!1;for(const O of D)if(Hi(O,k))return!0;return!1},Re=(x,k)=>{const D=Array.from(ue.entries()).filter(([O])=>O!==k).filter(([,O])=>Array.from(O).some(ae=>Hi(ae,x))).map(([O])=>O);return D.length>0?D.sort()[0]:x.slice(0,7)},ve=[],ot=new Map,Xe=new Map;for(const x of a){const k=x.fullSha,D=x.targetBranch,O=x.targetCommitSha;if(!k||!D||!O||!je(D,O))continue;const ae=((To=x.parentShas)!=null?To:[]).slice(1).filter(we=>!!we&&!Hi(we,k));if(ae.length===0)continue;const he=(qo=Xe.get(k))!=null?qo:new Set;for(const we of ae){he.add(we);const Ne=Re(we,D);ve.push({sourceCommitSha:we,sourceBranchName:Ne,mergeCommitSha:k,targetCommitSha:O,targetBranchName:D});const Je=(Xt=ot.get(Ne))!=null?Xt:new Map,ut=(Di=Je.get(we))!=null?Di:new Set;ut.add(D),Je.set(we,ut),ot.set(Ne,Je)}Xe.set(k,he)}const $e=new Map;for(const x of i){if(x.name===d)continue;const k=le(x);k&&$e.set(x.name,k)}const lt=new Map;for(const x of q){const k=Xe.get(x.id);if(k&&k.size>0){const ae=(Is=lt.get(x.id))!=null?Is:new Set;for(const he of k)ae.add(he);lt.set(x.id,ae)}if(x.branchName===d)continue;const D=$e.get(x.branchName);if(!D||D===x.id)continue;const O=(Go=lt.get(x.id))!=null?Go:new Set;O.add(D),lt.set(x.id,O)}const nt=gy(q,B,lt),zt=new Map;for(const x of q){const k=($o=zt.get(x.branchName))!=null?$o:[];k.push(x),zt.set(x.branchName,k)}const ct=new Map,Rt=new Map,Oe=new Map,dt=new Map,ce=new Map,He=(x,k)=>{var he,we,Ne;if(k.length===0)return[];const D=[...k].sort((Je,ut)=>{var sn,Ut;const $t=(sn=nt.get(Je.visualId))!=null?sn:Number.MAX_SAFE_INTEGER,Dt=(Ut=nt.get(ut.visualId))!=null?Ut:Number.MAX_SAFE_INTEGER;return $t!==Dt?$t-Dt:Mi(Je.date)-Mi(ut.date)||Je.id.localeCompare(ut.id)}),O=new Map;for(const Je of D){const ut=((he=Je.clusterKey)==null?void 0:he.trim())||`cluster:${x}:${Je.id}`,$t=(we=O.get(ut))!=null?we:[];$t.push(Je),O.set(ut,$t)}const ae=[];for(const[Je,ut]of O.entries()){if(ut.length===0)continue;const Dt=[...ut].sort((Ut,zn)=>{var bo,en;const Dn=(bo=nt.get(Ut.visualId))!=null?bo:Number.MIN_SAFE_INTEGER,oo=(en=nt.get(zn.visualId))!=null?en:Number.MIN_SAFE_INTEGER;return Dn!==oo?oo-Dn:Mi(zn.date)-Mi(Ut.date)||zn.id.localeCompare(Ut.id)})[0].visualId,sn={branchName:x,key:Je,commitIds:ut.map(Ut=>Ut.visualId),leadId:Dt,count:ut.length};ae.push(sn),dt.set(Je,Dt),ce.set(Je,ut.length);for(const Ut of sn.commitIds){Rt.set(Ut,Je);const zn=Ut.split(":").slice(1).join(":"),Dn=(Ne=Oe.get(zn))!=null?Ne:[];Dn.includes(Je)||Dn.push(Je),Oe.set(zn,Dn)}}return ae};for(const[x,k]of zt.entries())ct.set(x,He(x,k));const Ge=new Map;for(const x of q)Ge.set(x.id,x);const ze=x=>{if(!x)return"none";const k=Array.from(Ge.values()).find(D=>Hi(D.id,x)||Hi(D.id.slice(0,7),x)||Hi(x,D.id));return k?`${k.id.slice(0,7)} ${k.branchName}`:x.slice(0,7)},Mt=v?["Lane rows (expected):",...[...n].sort((x,k)=>x.column-k.column||x.name.localeCompare(k.name)).map(x=>{var k;return`  row=${x.column} branch=${x.name} parent=${(k=x.parentName)!=null?k:"none"}`}),"",...i.flatMap(x=>{var we,Ne,Je,ut,$t,Dt,sn;const k=(we=h[x.name])!=null?we:[],D=[...(Ne=Y.get(x.name))!=null?Ne:[]].reverse(),O=new Set(((Je=P.get(x.name))!=null?Je:[]).map(Ut=>Ut.id)),ae=(ut=Ee.get(x.name))!=null?ut:null,he=(Dt=($t=D.find(Ut=>!Ut.parentSha||!D.some(zn=>{var Dn;return Hi(zn.fullSha,(Dn=Ut.parentSha)!=null?Dn:"")})))!=null?$t:D[0])!=null?Dt:null;return[`Branch ${x.name}`,`  ahead=${(sn=g[x.name])!=null?sn:0} previews=${D.length} rendered=${O.size}`,`  db parent commit=${ze(ae)}`,`  db child commit=${he?`${he.fullSha.slice(0,7)} ${x.name}`:"none"}`,...D.map(Ut=>{const zn=O.has(Ut.fullSha)?"visible":"hidden",Dn=O.has(Ut.fullSha)?"kept by render set":"dropped by render set";return`  ${zn} ${Ut.fullSha.slice(0,7)} ${Ut.message} [${Dn}]`}),k.length===0?"  no preview data":null].filter(Ut=>Ut!=null)})]:[],ft=v?Array.from(P.entries()).map(([x,k])=>[`Branch debug ${x}`,...k.map(D=>`  ${D.id.slice(0,7)} ${D.message}`)].join(`
`)):[],rt=nt,it=Em/Yu,at=20/Yu,Et=T?ns+it+at:Hu+it+at,Ze=T?Hu+it+at:nc,H=Math.max(0,...q.map(x=>{var k;return(k=rt.get(x.visualId))!=null?k:1})),Z=q.map(x=>{var ae,he;const k=B.get(x.branchName),D=(ae=rt.get(x.visualId))!=null?ae:1,O=(he=k==null?void 0:k.column)!=null?he:0;return T?{commit:x,row:D,column:O,x:el+(D-1)*Et,y:Jr+O*Ze}:{commit:x,row:D,column:O,x:el+O*nc,y:Jr+(H-D)*Et}}),te=S.trim().toLowerCase(),_e=te?Z.filter(x=>{const k=x.commit.id.toLowerCase(),D=x.commit.id.slice(0,7).toLowerCase(),O=x.commit.message.toLowerCase(),ae=x.commit.branchName.toLowerCase();return k.includes(te)||D.includes(te)||O.includes(te)||ae.includes(te)}):Z,Fe=C&&(Io=Z.find(x=>x.commit.id===C))!=null?Io:null,Ue=new Set(_e.map(x=>x.commit.id)),De=(Ps=j==null?void 0:j.headSha)!=null?Ps:null,St=(()=>{var k,D;const x=(k=j==null?void 0:j.branchName)!=null?k:null;return!De||!x?null:(D=Rt.get(`${x}:${De}`))!=null?D:null})(),Ve=new Set;for(const x of ct.values())for(const k of x)k.count>1&&k.key!==St&&Ve.add(k.key);const bt=[...q].filter(x=>{var he;const k=Rt.get(x.visualId);if(!k)return!0;const D=dt.get(k),O=(he=ce.get(k))!=null?he:1,ae=_.has(k)||!Ve.has(k)&&!b.has(k);return O<=1||ae||D===x.visualId}),pt=gy(bt,B,lt),Ie=Em/Yu,st=20/Yu,Ht=T?ns+Ie+st:Hu+Ie+st,cn=T?Hu+Ie+st:nc,Ke=Math.max(0,...bt.map(x=>{var k;return(k=pt.get(x.visualId))!=null?k:1})),Bt=bt.map(x=>{var ae,he;const k=B.get(x.branchName),D=(ae=pt.get(x.visualId))!=null?ae:1,O=(he=k==null?void 0:k.column)!=null?he:0;return T?{commit:x,row:D,column:O,x:el+(D-1)*Ht,y:Jr+O*cn}:{commit:x,row:D,column:O,x:el+O*nc,y:Jr+(Ke-D)*Ht}}),At=new Map;for(const x of Bt){const k=(Eo=At.get(x.commit.id))!=null?Eo:[];k.push(x),At.set(x.commit.id,k)}const Ot=new Map;for(const x of Bt){const k=Rt.get(x.commit.visualId);if(!k)continue;const D=Ot.get(k);(!D||(T?x.x>D.x:x.y<D.y))&&Ot.set(k,x)}const un=(x,k)=>`${x.toFixed(1)} ${k.toFixed(1)}`,_t=Math.max(0,...Bt.map(x=>x.row)),qt=Math.max(0,...n.map(x=>x.column)),An=T?el*2+Math.max(0,_t-1)*Ht+ns+Vh+st:el*2+(qt+1)*nc,os=T?Jr*2+qt*cn+Vs+Vh+st:Jr*2+Math.max(0,_t-1)*Ht+Vs+Vh+st,gn=[],lo=new Map(i.map(x=>{var D,O;const k=new Date((O=(D=x.createdDate)!=null?D:x.divergedFromDate)!=null?O:x.lastCommitDate).getTime();return[x.name,Number.isFinite(k)?k:0]})),is=x=>{var k;return(k=lo.get(x))!=null?k:0},Wn=[],Wt=x=>{v&&Wn.push(x)},Mn=new Set,an=new Map,tn=(x,k)=>{var O;const D=(O=an.get(x))!=null?O:[];D.includes(k)||D.push(k),an.set(x,D)},Qe=new Set,Zn=new Set,Ls=new Set,Fs=(x,k)=>{var ae,he;if(!x)return null;const D=Vu(At,x,k);if(D)return D;const O=(ae=Rt.get(`${k!=null?k:d}:${x}`))!=null?ae:Rt.get(x);return O&&(he=Ot.get(O))!=null?he:null},ys=new Set;for(const x of i){const k=z(x);k&&Zn.add(k);const D=(Es=Ee.get(x.name))!=null?Es:null;D&&Ls.add(D)}const Xs=x=>{var ae;const k=Fs(x.id,x.branchName);if(k)return k;const D=Rt.get(x.visualId);if(!D)return null;const O=dt.get(D);return O&&(ae=Bt.find(he=>he.commit.id===O))!=null?ae:null},Mo=(x,k)=>x?Vu(At,x,k):null,yo=(x,k)=>T?{x:x.x-$i,y:x.y+Vs/2,face:"left"}:{x:x.x+ns/2,y:x.y+Vs+$i,face:"bottom"},as=x=>T?{x:x.x+ns+$i,y:x.y+Vs/2,face:"right"}:{x:x.x+ns/2,y:x.y+Vs+$i,face:"bottom"},xs=(x,k)=>x.column!==k.column?!0:T?x.commit.branchName!==k.commit.branchName:!1,Os=(x,k,D)=>{if(!T)return{x:k?x.x+ns:x.x+ns/2,y:k?x.y+Vs/2:x.y,face:k?"right":"top"};if(!k)return{x:x.x+ns+$i,y:x.y+Vs/2,face:"right"};if(D&&D.column===x.column&&D.commit.branchName!==x.commit.branchName){if(D.x>x.x)return{x:x.x+ns/2,y:x.y+Vs+$i,face:"bottom"};if(D.x<x.x)return{x:x.x+ns/2,y:x.y-$i,face:"top"}}return!D||D.column===x.column?{x:x.x+ns+$i,y:x.y+Vs/2,face:"right"}:D.column>x.column?{x:x.x+ns/2,y:x.y+Vs+$i,face:"bottom"}:{x:x.x+ns/2,y:x.y-$i,face:"top"}},nn=x=>T?{x:x.x+ns/2,y:x.y+Vs+$i,face:"bottom"}:{x:x.x+ns,y:x.y+Vs/2,face:"right"},pi=(x,k)=>Vu(At,x,k),Wo=(x,k)=>Mo(x,k),bs=[],Rn=new Set;for(const x of ve){const k=(wn=Fs(x.targetCommitSha,x.targetBranchName))!=null?wn:null;if(!k){Wt({id:`merge:${x.mergeCommitSha}:${x.sourceCommitSha}:target`,kind:"merge",parent:x.sourceCommitSha,child:x.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const D=x.sourceCommitSha,O=`merge:${x.mergeCommitSha}:${D!=null?D:"unknown"}`;if(!D||Hi(D,x.targetCommitSha)){Wt({id:O,kind:"merge",parent:D!=null?D:"unknown",child:x.targetCommitSha,rendered:!1,reason:D?"merged parent equals merge target sha":"missing merged parent sha"});continue}const ae=(fo=Vu(At,D))!=null?fo:null;if(!ae){Wt({id:O,kind:"merge",parent:D,child:x.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(ae.commit.id===k.commit.id){Wt({id:O,kind:"merge",parent:ae.commit.id,child:k.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let he,we,Ne;const Je=T?k.x+ns/2:k.x+ns-Fh,ut=T?k.y+Vs+Fh:k.y+Vs/2,$t=T?"bottom":"right";T?(he=ae.x+ns+Fh,we=ae.y+Vs/2,Ne="right"):(he=ae.x+ns/2,we=ae.y,Ne="top");const Dt=`${he.toFixed(2)}:${we.toFixed(2)}:${Je.toFixed(2)}:${ut.toFixed(2)}`;if(Rn.has(Dt)){Wt({id:O,kind:"merge",parent:ae.commit.id,child:k.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Rn.add(Dt),bs.push({id:O,fromX:he,fromY:we,toX:Je,toY:ut,fromFace:Ne,toFace:$t,zIndex:is(ae.commit.branchName)}),Wt({id:O,kind:"merge",parent:ae.commit.id,child:k.commit.id,rendered:!0,reason:`merge connector rendered to ${x.targetBranchName}`})}const Lo=new Set;for(const x of i){if(x.name===d)continue;const k=se.get(x.name);if(!k)continue;const D=K(x),O=pi((Xn=Ee.get(x.name))!=null?Xn:"",D),ae=(ws=oe.get(x.name))!=null?ws:k,he=(qn=Wo(ae.id,x.name))!=null?qn:Xs(ae);if(!O||!he||O.commit.id===he.commit.id){const $t=Rt.get(`${x.name}:${k.id}`),Dt=Rt.get(`${x.name}:${ae.id}`),sn=!!$t&&!Ve.has($t),Ut=!!Dt&&!Ve.has(Dt),zn=!!$t&&!_.has($t)&&(sn?b.has($t):!0),Dn=!!Dt&&!_.has(Dt)&&(Ut?b.has(Dt):!0);!O&&!zn&&tn((Qt=he==null?void 0:he.commit.id)!=null?Qt:k.id,"Missing parent node"),!he&&!Dn&&tn(k.id,"Missing child node"),Wt({id:`branch:${(qs=O==null?void 0:O.commit.id)!=null?qs:"null"}->${(es=he==null?void 0:he.commit.id)!=null?es:"null"}`,kind:"branch",parent:(Gs=O==null?void 0:O.commit.id)!=null?Gs:"null",child:(cs=he==null?void 0:he.commit.id)!=null?cs:"null",rendered:!1,reason:O?he?"parent and child are the same node":"missing child node":"missing parent node"});continue}const we=`branch:${O.commit.id}->${he.commit.id}`;if(ys.has(we)){Wt({id:we,kind:"branch",parent:O.commit.id,child:he.commit.id,rendered:!1,reason:"duplicate connector key"});continue}ys.add(we),Qe.add(O.commit.id);const Ne=xs(O,he);O.commit.branchName!==he.commit.branchName&&Lo.add(O.commit.id);const Je=nn(O),ut=as(he);gn.push({id:we,fromX:Je.x,fromY:Je.y,toX:ut.x,toY:ut.y,fromFace:Je.face,toFace:ut.face,zIndex:is(he.commit.branchName)}),Wt({id:we,kind:"branch",parent:O.commit.id,child:he.commit.id,rendered:!0,reason:Ne?"branch connector rendered":T?"horizontal connector rendered":"vertical connector rendered"})}for(const x of q){const k=Xs(x);if(!k)continue;const D=(Ao=x.parentSha)!=null?Ao:null;if(!D)continue;const O=(Ss=Fs(D,x.branchName))!=null?Ss:pi(D,x.branchName);if(!O){const Je=(ii=Rt.get(`${x.branchName}:${D}`))!=null?ii:Rt.get(D),ut=!!Je&&!Ve.has(Je);!!Je&&!_.has(Je)&&(ut?b.has(Je):!0)||tn(x.id,"Missing parent node"),Wt({id:`${x.visualId}->${D}`,kind:"ancestry",parent:D,child:x.id,rendered:!1,reason:"missing parent node"});continue}if(k.commit.id===O.commit.id){tn(k.commit.id,"Parent and child resolve to the same node"),Wt({id:`${O.commit.id}->${k.commit.id}`,kind:"ancestry",parent:O.commit.id,child:k.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const ae=`${x.branchName}:${(As=O.commit.visualId)!=null?As:O.commit.id}->${k.commit.visualId}`;if(ys.has(ae)){tn(O.commit.id,"Duplicate connector key"),tn(k.commit.id,"Duplicate connector key"),Wt({id:ae,kind:"ancestry",parent:O.commit.id,child:k.commit.id,rendered:!1,reason:"duplicate connector key"});continue}ys.add(ae),Qe.add(O.commit.id);const he=xs(O,k),we=Os(O,he,k),Ne=yo(k);gn.push({id:ae,fromX:we.x,fromY:we.y,toX:Ne.x,toY:Ne.y,fromFace:we.face,toFace:Ne.face,zIndex:is(k.commit.branchName)}),Wt({id:ae,kind:"ancestry",parent:O.commit.id,child:k.commit.id,rendered:!0,reason:he?"ancestry connector rendered":T?"horizontal ancestry rendered":"vertical ancestry rendered"}),Mn.add(O.commit.id),Mn.add(k.commit.id)}const oi=new Map;for(const x of Bt){const k=(Ds=oi.get(x.commit.branchName))!=null?Ds:[];k.push(x),oi.set(x.commit.branchName,k)}for(const[x,k]of oi.entries()){if(k.length<2)continue;const D=[...k].sort((O,ae)=>{var he,we,Ne,Je,ut,$t,Dt,sn;return O.row!==ae.row?O.row-ae.row:Mi((we=(he=O==null?void 0:O.commit)==null?void 0:he.date)!=null?we:null)-Mi((Je=(Ne=ae==null?void 0:ae.commit)==null?void 0:Ne.date)!=null?Je:null)||(($t=(ut=O==null?void 0:O.commit)==null?void 0:ut.id)!=null?$t:"").localeCompare((sn=(Dt=ae==null?void 0:ae.commit)==null?void 0:Dt.id)!=null?sn:"")});for(let O=1;O<D.length;O+=1){const ae=D[O-1],he=D[O];if(ae.commit.id===he.commit.id)continue;const we=(ho=he.commit.parentSha)!=null?ho:null;if(we&&pi(we,he.commit.branchName))continue;const Ne=`chain:${x}:${ae.commit.id}->${he.commit.id}`;if(ys.has(Ne)){tn(ae.commit.id,"Duplicate branch chain connector"),tn(he.commit.id,"Duplicate branch chain connector"),Wt({id:Ne,kind:"ancestry",parent:ae.commit.id,child:he.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}ys.add(Ne);const Je=xs(ae,he),ut=Os(ae,Je,he),$t=yo(he);gn.push({id:Ne,fromX:ut.x,fromY:ut.y,toX:$t.x,toY:$t.y,fromFace:ut.face,toFace:$t.face,zIndex:is(he.commit.branchName)}),Wt({id:Ne,kind:"ancestry",parent:ae.commit.id,child:he.commit.id,rendered:!0,reason:"branch chain rendered"}),Mn.add(ae.commit.id),Mn.add(he.commit.id)}}return{branchByName:I,laneByName:B,mainCommits:N,branchCommitsByLane:P,branchPreviewSets:Y,allCommits:q,clustersByBranch:ct,clusterKeyByCommitId:Rt,clusterKeyBySha:Oe,leadByClusterKey:dt,clusterCounts:ce,debugRows:Mt,branchDebugRows:ft,nodes:Z,normalizedSearchQuery:te,matchingNodes:_e,matchingNodeIds:Ue,focusedNode:Fe,checkedOutClusterKey:St,defaultCollapsedClumps:Ve,visibleCommitsList:bt,renderNodes:Bt,visibleNodesBySha:At,visibleNodeByClusterKey:Ot,pointFormatter:un,contentWidth:An,contentHeight:os,connectors:gn,mergeConnectors:bs,connectorDecisions:Wn,nodeWarnings:an,connectorParentShas:Qe,branchStartShas:Zn,branchOffNodeShas:Ls,crossBranchOutgoingShas:Lo,commitIdsWithRenderedAncestry:Mn,branchBaseCommitByName:se,firstBranchCommitByName:be,mergeDestinations:ve,mergeTargetBranchesBySourceBranchAndCommitSha:ot}}const Xv=8,qv=44,yy=120,xy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Ox(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const b=d>=0?1:-1,v=h>=0?1:-1;if(Math.min(p,g)<Xv){const Y=d/_,V=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+Y*U,c1y:n+V*U,c2x:i-Y*U,c2y:a-V*U}}if(Math.min(p,g)<qv){const Y=d/_,V=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+Y*U,c1y:n+V*U,c2x:i-Y*U,c2y:a-V*U}}const S=Math.min(160,p*.42),C=Math.min(100,p*.22),j=Math.min(120,g*.32),M=Math.min(160,g*.42),T=xy(c),I=xy(u);if(!(T==="v"&&I==="h"||T==="v"&&I==null&&g>=p||T==null&&I==="h"&&g>=p||T==="v"&&I==="v"||T==null&&I==null&&g>p)){const Y=i,V=n;return{kind:"elbowH",cx:Y,cy:V,s1c1x:t+b*S,s1c1y:n,s1c2x:Y-b*C,s1c2y:V,s2c1x:Y,s2c1y:V+v*j,s2c2x:i,s2c2y:a-v*M}}const N=t,P=a;return{kind:"elbowV",cx:N,cy:P,s1c1x:t,s1c1y:n+v*M,s1c2x:N,s1c2y:P-v*j,s2c1x:N+b*S,s2c1y:P,s2c2x:i-b*C,s2c2y:a}}function Gv(t,n,i,a,c,u){const d=Ox(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function by(t,n,i,a,c,u,d){const h=Ox(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const S=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),C=i>=t?1:-1,j=a>=n?1:-1,M=h.cx-C*S,T=h.cy+j*S;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(M-C*S*.5,h.cy)} ${c(M,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,T)}`,`C ${c(h.cx,T+j*S*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,b=h.cy-_*p,v=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,b-_*p*.5)} ${c(h.cx,b)}`,`Q ${c(h.cx,h.cy)} ${c(v,h.cy)}`,`C ${c(v+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const hp=2.25,sc=hp/2,Kv=.45,Qv=.01,xa=hp,Cd=10,Zv=-100,vy=0,wy=.9,Jv=.9,Sy=.001,Xh=.001,ew=12,tw=ns+48;function Ws(...t){return t.filter(Boolean).join(" ")}function nw(t){return Math.max(Kv,Math.min(hp,t))}function sw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function zx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function ow(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function iw(t,n,i,a,c,u,d){const h=Gv(t,n,i,a,u,d),p=ow(h);return zx(c,p)}function $x(t,n){return{left:t.x,top:t.y+n,right:t.x+ns,bottom:t.y+Tc+Vs+4}}function aw(t,n){const i=tw,a=Math.max(120,Math.ceil(Tc+Vs+4-n+24)),c=new Map;for(const u of t){const d=$x(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),b=u.commit.visualId;for(let v=h;v<=p;v++)for(let S=g;S<=_;S++){const C=`${v},${S}`;let j=c.get(C);j||(j=new Set,c.set(C,j)),j.add(b)}}return{cellW:i,cellH:a,buckets:c}}function rw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),b=new Set;for(let S=h;S<=p;S++)for(let C=g;C<=_;C++){const j=d.get(`${S},${C}`);if(j)for(const M of j)b.add(M)}const v=new Set;for(const S of b){const C=i.get(S);if(!C)continue;const j=$x(C,a);zx(n,j)&&v.add(S)}return v}function Cy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/xa;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function lw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function ky(t,n,i){const a=n/xa;return!Number.isFinite(a)||a<=0?t:lw(t,100/a)}function jy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function mi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Dm(t,n){if(n){const i=jy(n),a=jy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Dm(t,n)}function cw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function uw({fadeIn:t,className:n,style:i,onClick:a,dataCommitCard:c,children:u}){const[d,h]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){h(!0);return}h(!1);let p=null;const g=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>h(!0))});return()=>{cancelAnimationFrame(g),p!=null&&cancelAnimationFrame(p)}},[t]),l.jsx("div",{className:n,"data-commit-card":c,onClick:a,style:{...i,opacity:d?1:0,transition:t?"opacity 240ms ease-out":void 0},children:u})}function dw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,labelTopPx:g,inverseZoomStyle:_,displayZoom:b,selectedVisibleCommitShas:v,iconScaleStyle:S,normalizedSearchQuery:C,matchingNodeIds:j,focusedNode:M,renderNodes:T,shouldRenderNode:I,manuallyOpenedClumps:B,manuallyClosedClumps:N,defaultCollapsedClumps:P,leadByClusterKey:Y,clusterKeyByCommitId:V,clusterCounts:U,commitIdsWithRenderedAncestry:Q,nodeWarnings:se,connectorParentShas:oe,branchStartShas:be,branchOffNodeShas:Ee,crossBranchOutgoingShas:K,branchBaseCommitByName:le,branchStartAccentClass:z,connectorParentAccentClass:ie,commitCornerRadiusPx:X,lineStrokeWidth:me,pointFormatter:Te,connectors:A,mergeConnectors:ee,cullConnectorPath:q,flushCameraReactTick:ue,setManuallyOpenedClumps:je,setManuallyClosedClumps:Re,onCommitCardClick:ve,unpushedCommitShasSetByBranch:ot,checkedOutHeadSha:Xe}){const[$e,lt]=y.useState(new Set),nt=y.useRef(null);y.useEffect(()=>{const Oe=new Set;U.forEach((He,Ge)=>{(B.has(Ge)||!P.has(Ge)&&!N.has(Ge))&&Oe.add(Ge)});const dt=nt.current;if(dt==null){nt.current=Oe;return}const ce=[];if(Oe.forEach(He=>{dt.has(He)||ce.push(He)}),ce.length>0){lt(Ge=>{const ze=new Set(Ge);return ce.forEach(Mt=>ze.add(Mt)),ze});const He=window.setTimeout(()=>{lt(Ge=>{const ze=new Set(Ge);return ce.forEach(Mt=>ze.delete(Mt)),ze})},260);return nt.current=Oe,()=>{window.clearTimeout(He)}}nt.current=Oe},[U,P,N,B]);const zt=(Oe,dt)=>{const ce=dt.zIndex-Oe.zIndex;if(ce!==0)return ce;const He=Math.min(Oe.fromY,Oe.toY),Ge=Math.min(dt.fromY,dt.toY),ze=He-Ge;return ze!==0?ze:Oe.id.localeCompare(dt.id)},ct=ee.filter(Oe=>q(Oe)).sort(zt),Rt=A.filter(Oe=>q(Oe)).sort(zt);return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[T.filter(Oe=>I(Oe)).map(Oe=>{var Fe,Ue,De,St,Ve;const dt=V.get(Oe.commit.visualId),ce=dt?B.has(dt)||!P.has(dt)&&!N.has(dt):!1,He=dt?Y.get(dt)===Oe.commit.visualId:!1,Ge=dt!=null&&ce&&!He&&$e.has(dt),ze=dt&&(Fe=U.get(dt))!=null?Fe:1,Mt=Q.has(Oe.commit.id),ft=(Ue=se.get(Oe.commit.id))!=null?Ue:[],rt=ft.length>0&&!Mt,it=v.includes(Oe.commit.id),at=Oe.commit.id==="WORKING_TREE"||Oe.commit.kind==="uncommitted",Et=Oe.commit.kind==="stash"||Oe.commit.id.startsWith("STASH:"),Ze=at||((St=(De=ot.get(Oe.commit.branchName))==null?void 0:De.has(Oe.commit.id))!=null?St:!1),Z=(at||Xe!=null&&Oe.commit.id===Xe)&&!it,te=Z?"text-[#38BDF2]":it?"text-[#158EFC]":"text-muted-foreground",_e=Z?{color:"#38BDF2"}:it?{color:"#158EFC"}:void 0;return l.jsxs(uw,{fadeIn:Ge,dataCommitCard:"true",className:Ws("group absolute z-20 cursor-pointer",C&&!j.has(Oe.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",C&&j.has(Oe.commit.id)?"scale-[1.01]":"",(M==null?void 0:M.commit.id)===Oe.commit.id?"z-30 scale-[1.015]":""),style:{left:Oe.x,top:Oe.y,width:ns,height:Tc+Vs+4,overflow:"visible"},onClick:bt=>ve(bt,Oe),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{..._,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsxs("div",{className:Ws("min-w-0 h-4 flex-1 text-sm font-medium leading-none",te,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:_e,children:[Oe.commit.branchName,"/",Oe.commit.id.slice(0,7)]}),He&&ze>1?l.jsx("button",{type:"button",onMouseDown:bt=>{bt.stopPropagation()},onClick:bt=>{if(bt.stopPropagation(),bt.preventDefault(),!dt)return;!P.has(dt)?(je(Ie=>{if(!Ie.has(dt))return Ie;const st=new Set(Ie);return st.delete(dt),st}),Re(Ie=>{const st=new Set(Ie);return st.has(dt)?st.delete(dt):st.add(dt),st})):(Re(Ie=>{if(!Ie.has(dt))return Ie;const st=new Set(Ie);return st.delete(dt),st}),je(Ie=>{const st=new Set(Ie);return st.has(dt)?st.delete(dt):st.add(dt),st})),ue()},className:Ws("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",te),style:_e,children:ce?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${ze}`}):null]})}),l.jsx("div",{className:Ws("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Z&&!Ze&&!Et?"bg-[#EBF7FE]":it&&!Ze&&!Et?"bg-[#E5F0FF]":Ze||Et?"bg-transparent":"bg-[#F5F5F5]",Et||at?"border-dashed":"",Ee.has(Oe.commit.id)||be.has(Oe.commit.id)||K.has(Oe.commit.id)?z:oe.has(Oe.commit.id)?ie:((Ve=le.get(Oe.commit.branchName))==null?void 0:Ve.id)===Oe.commit.id?"border-amber-500":rt?"border-red-500":"",(C&&j.has(Oe.commit.id)&&!d,"")),style:{top:0,borderWidth:`${Et||at?me*(2/1.5):me}px`,borderColor:Z?"#38BDF2":it?"#158EFC":Yh,borderTopLeftRadius:0,borderTopRightRadius:`${X}px`,borderBottomRightRadius:`${X}px`,borderBottomLeftRadius:`${X}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:_,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Ws("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",te,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:_e,children:He&&ce?Oe.commit.message:He&&ze>1?`${Oe.commit.message} +${ze-1}`:Oe.commit.message}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:rt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:ft.join(`
`),children:"Broken ancestry"}):null})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Ws("text-sm font-medium",te),style:_e,children:["@",Oe.commit.author]}),l.jsx("div",{className:Ws("text-sm font-medium",te),style:_e,children:new Date(Oe.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(M==null?void 0:M.commit.id)===Oe.commit.id&&C?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:S,children:"Search result"}):null]})})]},Oe.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[ct.map(Oe=>{const{fromX:dt,fromY:ce,toX:He,toY:Ge}=Oe,ze=by(dt,ce,He,Ge,Te,Oe.fromFace,Oe.toFace);return l.jsx("path",{d:ze,fill:"none",stroke:Yh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},Oe.id)}),Rt.map(Oe=>{const{fromX:dt,fromY:ce,toX:He,toY:Ge}=Oe,ze=by(dt,ce,He,Ge,Te,Oe.fromFace,Oe.toFace);return l.jsx("path",{d:ze,fill:"none",stroke:Yh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},Oe.id)})]})]})})})}function fw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:b,onPushCurrentBranch:v,onPushAllBranches:S,onPushCommitTargets:C,onDeleteSelection:j,onCreateBranchFromNode:M,onMergeRefsIntoBranch:T,selectedPushTargets:I,selectedPushLabel:B,canPushCurrentBranch:N,pushCurrentBranchLabel:P,pushableRemoteBranchCount:Y,deletableSelectionCount:V,canCreateRootBranch:U,selectedCommitTargetOption:Q,mergeInProgress:se,setMergeTargetCommitSha:oe,worktrees:be,currentRepoPath:Ee,worktreeMenuOpen:K,setWorktreeMenuOpen:le,onSwitchToWorktree:z,onRemoveWorktree:ie,removeWorktreeInProgress:X,setCommitDialogOpen:me,setDeleteConfirmOpen:Te,setNewBranchDialogOpen:A}){const ee=t.length>0;return l.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("button",{type:"button",onClick:()=>me(!0),disabled:!g||i||ee||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||i||ee||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),l.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||u||ee||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),l.jsx("button",{type:"button",onClick:()=>void(v==null?void 0:v()),disabled:!v||!N||ee||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":P}),l.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S()),disabled:!S||Y<2||ee||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>void(C==null?void 0:C(I.map(q=>({branchName:q.branchName,targetSha:q.targetSha})))),disabled:!C||I.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:I.length>0?B:"Select commits to push",children:I.length>0?B:"Push selected"}),l.jsx("button",{type:"button",onClick:()=>Te(!0),disabled:!j||V===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"}),l.jsx("button",{type:"button",onClick:()=>A(!0),disabled:!M&&!U||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&Q.options.length>0&&Q.targetBranch&&T?l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),Q.options.map(q=>{const ue=q.targetBranch===Q.targetBranch;return l.jsx("button",{type:"button",onClick:()=>oe(q.targetSha),className:Ws("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",ue?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:q.targetBranch},`merge-${q.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void T(Q.sources,Q.targetBranch),disabled:Q.sources.length===0||se,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:se?"Merging...":"Confirm"})]}):null,be.length>0&&(z||ie)?l.jsxs("div",{className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>le(q=>!q),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[be.length," ",be.length===1?"Worktree":"Worktrees"]}),K?l.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:be.map(q=>{var ue;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:q.path,children:Dm(q,Ee)?cw(q.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(ue=q.branchName)!=null?ue:"detached"," • ",q.headSha.slice(0,7)]})]}),Dm(q,Ee)?l.jsxs("div",{className:"flex items-center gap-1",children:[z?l.jsx("button",{type:"button",onClick:()=>{le(!1),z(q.path)},disabled:X||q.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,ie?l.jsx("button",{type:"button",onClick:()=>void ie(q.path,q.isPrunable),disabled:X,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:X?"...":"Remove"}):null]}):null]},q.path)})}):null]}):null]})}function hw({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:h,renderedConnectorCount:p,totalConnectorCount:g,mapGridCullViewportInsetScreenPx:_,debugRows:b,branchDebugRows:v,connectorDecisions:S}){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:l.jsx("button",{type:"button",onClick:n,className:Ws("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?l.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${h}`,`Rendered connectors: ${p} / ${g}`,"",...b,...v,"",...S.map(C=>`${C.rendered?"rendered":"skipped"} [${C.kind}] ${C.parent.slice(0,7)} -> ${C.child.slice(0,7)} (${C.reason})`)].join(`
`)})})]}):null]})}function mw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:b,newBranchDialogOpen:v,newBranchName:S,newBranchCreateMode:C,onNewBranchNameChange:j,onNewBranchCreateModeChange:M,onNewBranchDialogClose:T,onNewBranchConfirm:I,selectedCommitCanCreateBranch:B,createBranchFromNodeInProgress:N}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:P=>i(P.target.value),onKeyDown:P=>{(P.metaKey||P.ctrlKey)&&P.key==="Enter"&&(P.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(P=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:P},P))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:g,disabled:b===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,v?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>M("from-selected-node"),className:Ws("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>M("new-root"),className:Ws("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),C==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:S,onChange:P=>j(P.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:T,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:I,disabled:!S.trim()||N||C==="from-selected-node"&&!B,className:Ws("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:N?"Creating...":"Create"})]})]})}):null]})}function pw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(sc),c=y.useRef({panX:0,panY:0,zoom:sc}),u=y.useRef(null),d=y.useRef(sc),h=y.useRef(null),[p,g]=y.useState(!1),[_,b]=y.useState(sc),[v,S]=y.useState(0),C=y.useRef(null),j=y.useRef(0),M=y.useCallback(()=>{const Q=t.current;if(!Q)return null;const se=Q.getBoundingClientRect(),oe=getComputedStyle(Q),be=Number.parseFloat(oe.borderLeftWidth)||0,Ee=Number.parseFloat(oe.borderTopWidth)||0,K=Number.parseFloat(oe.paddingLeft)||Cd,le=Number.parseFloat(oe.paddingTop)||Cd;return{x:se.left+be+K,y:se.top+Ee+le}},[t]),T=y.useCallback(()=>{C.current!=null&&(window.clearTimeout(C.current),C.current=null),y.startTransition(()=>{S(Q=>Q+1)}),j.current=performance.now()},[]),I=y.useCallback((Q,se,oe)=>{const be=c.current;c.current={panX:Q,panY:se,zoom:oe};const Ee=n.current;if(Ee&&(Ee.style.transform=`translate3d(${Q}px, ${se}px, 0) scale(${oe/xa})`),Math.abs(d.current-oe)>Xh&&(d.current=oe,b(oe)),Math.abs(oe-be.zoom)>Xh){T();return}const z=performance.now()-j.current;if(z>=vy){T();return}C.current!=null&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{C.current=null,T()},vy-z)},[T,n]),B=y.useRef(null),N=y.useCallback(()=>{u.current!=null||!B.current||(u.current=window.requestAnimationFrame(B.current))},[]),P=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),Y=y.useCallback((Q,se,oe)=>{i.current={x:Q,y:se},a.current=oe,P(),N()},[P,N]);B.current=()=>{u.current=null;const Q=c.current,se=i.current.x,oe=i.current.y,be=a.current,Ee=Math.abs(se-Q.panX)<=Sy?se:Q.panX+(se-Q.panX)*wy,K=Math.abs(oe-Q.panY)<=Sy?oe:Q.panY+(oe-Q.panY)*wy,le=Math.abs(be-Q.zoom)<=Xh?be:Q.zoom+(be-Q.zoom)*Jv;I(Ee,K,le),Ee!==se||K!==oe||le!==be?B.current&&(u.current=window.requestAnimationFrame(B.current)):T()};const V=y.useCallback((Q,se,oe)=>{const be=nw(oe),Ee=c.current,K=M();if(!K){Y(i.current.x,i.current.y,be);return}const le=Q-K.x,z=se-K.y,ie=Ee.zoom/xa,X=be/xa,me=(le-Ee.panX)/ie,Te=(z-Ee.panY)/ie;Y(le-me*X,z-Te*X,be)},[M,Y]),U=y.useCallback(Q=>{if(Q.preventDefault(),Q.ctrlKey||Q.metaKey){const se=Math.exp(-Q.deltaY*Qv);V(Q.clientX,Q.clientY,a.current*se);return}Y(i.current.x-Q.deltaX,i.current.y-Q.deltaY,a.current)},[Y,V]);return y.useLayoutEffect(()=>(I(0,0,sc),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),C.current!=null&&(window.clearTimeout(C.current),C.current=null)}),[I]),y.useLayoutEffect(()=>{const Q=n.current;if(!Q)return;const se=c.current;Q.style.transform=`translate3d(${se.panX}px, ${se.panY}px, 0) scale(${se.zoom/xa})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:v,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:M,flushCameraReactTick:T,syncCamera:Y,handleWheel:U}}function _w(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function gw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[b,v]=y.useState(null),[S,C]=y.useState([]),[j,M]=y.useState(null),T=y.useCallback(B=>{const N=t.current,P=i();if(!N||!P)return[];const Y=N.getBoundingClientRect(),V=n.current.zoom/xa;if(V<=0)return[];const U=[],Q=B.left,se=B.left+B.width,oe=B.top,be=B.top+B.height;for(const Ee of a){if(!c(Ee))continue;const K=P.x+n.current.panX+Ee.x*V-Y.left,le=P.y+n.current.panY+Ee.y*V-Y.top,z=K+ns*V,ie=le+(Tc+Vs)*V;!(z<Q||K>se||ie<oe||le>be)&&U.push(Ee.commit.id)}return U},[i,a,n,t,c]),I=y.useCallback(B=>{if(B.button!==0)return;const N=B.target;if(N!=null&&N.closest("[data-commit-card]")||N!=null&&N.closest("button, a, input, textarea, select"))return;const P=t.current;if(!P)return;B.preventDefault();const Y=P.getBoundingClientRect(),V=B.clientX-Y.left,U=B.clientY-Y.top;d.current={startX:V,startY:U,currentX:V,currentY:U,additive:B.metaKey||B.ctrlKey},h.current=!1,p.current=B.metaKey||B.ctrlKey?S:[],_(!0),v({left:V,top:U,width:0,height:0})},[t,S]);return y.useEffect(()=>{const B=P=>{var oe;const Y=d.current;if(!Y)return;const V=t.current;if(!V)return;const U=V.getBoundingClientRect();Y.currentX=P.clientX-U.left,Y.currentY=P.clientY-U.top,!h.current&&(Math.abs(Y.currentX-Y.startX)>2||Math.abs(Y.currentY-Y.startY)>2)&&(h.current=!0);const Q=_w(Y);v(Q);const se=T(Q);C(Y.additive?Array.from(new Set([...p.current,...se])):Array.from(new Set(se))),Y.additive||M((oe=se[se.length-1])!=null?oe:null)},N=()=>{if(d.current){const P=h.current;d.current=null,h.current=!1,_(!1),v(null),P||(C([]),M(null));return}u()};return window.addEventListener("mousemove",B),window.addEventListener("mouseup",N),()=>{window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",N)}},[T,u,t]),{isMarqueeSelecting:g,marqueeRect:b,selectedCommitShas:S,setSelectedCommitShas:C,mergeTargetCommitSha:j,setMergeTargetCommitSha:M,startMarqueeDrag:I}}function My({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:b=!1,scrollRequest:v,focusedErrorBranch:S,mapTopInsetPx:C=0,onMergeRefsIntoBranch:j,mergeInProgress:M=!1,onPushAllBranches:T,onPushCurrentBranch:I,onPushCommitTargets:B,pushInProgress:N=!1,onDeleteSelection:P,deleteInProgress:Y=!1,worktrees:V=[],currentRepoPath:U,onRemoveWorktree:Q,removeWorktreeInProgress:se=!1,onSwitchToWorktree:oe,onStashLocalChanges:be,stashInProgress:Ee=!1,stashDisabled:K=!1,onCommitLocalChanges:le,commitInProgress:z=!1,commitDisabled:ie=!1,onStageAllChanges:X,stageInProgress:me=!1,onCreateBranchFromNode:Te,onCreateRootBranch:A,createBranchFromNodeInProgress:ee=!1,orientation:q="horizontal",branchCommitPreviews:ue={},branchParentByName:je={},branchUniqueAheadCounts:Re={},gridSearchQuery:ve="",gridSearchJumpToken:ot=0,gridFocusSha:Xe=null,checkedOutRef:$e=null,onGridSearchResultCountChange:lt,onGridSearchFocusChange:nt,onInteractionChange:zt,manuallyOpenedClumps:ct,manuallyClosedClumps:Rt,setManuallyOpenedClumps:Oe,setManuallyClosedClumps:dt,layoutModel:ce}){var Do,js,Ms,mo,yn,Cs,$n,ai,ta,gi,po,us;const He=y.useRef(null),Ge=y.useRef(null),ze=y.useRef(null),[Mt,ft]=y.useState(!1),[rt,it]=y.useState(!1),[at,Et]=y.useState(""),[Ze,H]=y.useState(!1),[Z,te]=y.useState(!1),[_e,Fe]=y.useState(""),[Ue,De]=y.useState("from-selected-node"),[St,Ve]=y.useState(()=>new Set),[bt,pt]=y.useState(()=>new Set),Ie=ct!=null?ct:St,st=Rt!=null?Rt:bt,Ht=Oe!=null?Oe:Ve,cn=dt!=null?dt:pt,[Ke,Bt]=y.useState(!1),[At,Ot]=y.useState(null),[un,_t]=y.useState(null),{isCameraMoving:qt,renderedZoom:An,cameraRenderTick:os,renderedCameraRef:gn,interactionIdleTimeoutRef:lo,getTransformLayerOriginScreen:is,flushCameraReactTick:Wn,syncCamera:Wt,handleWheel:Mn}=pw({mapPadHostRef:Ge,transformLayerRef:ze}),an=y.useMemo(()=>fp(t,d,ue,je),[t,d,ue,je]),tn=y.useMemo(()=>Sd({lanes:an,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:ue,branchParentByName:je,branchUniqueAheadCounts:Re,manuallyOpenedClumps:Ie,manuallyClosedClumps:st,isDebugOpen:Ke,gridSearchQuery:ve,gridFocusSha:Xe,checkedOutRef:$e!=null?$e:null,orientation:q}),[an,t,n,i,a,d,ue,je,Re,Ie,st,Ke,ve,Xe,(Do=$e==null?void 0:$e.headSha)!=null?Do:null,(js=$e==null?void 0:$e.branchName)!=null?js:null,q]),Qe=ce!=null?ce:tn,Zn=y.useMemo(()=>Sd({lanes:an,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:ue,branchParentByName:je,branchUniqueAheadCounts:Re,manuallyOpenedClumps:Ie,manuallyClosedClumps:st,isDebugOpen:Ke,gridSearchQuery:ve,gridFocusSha:Xe,checkedOutRef:$e!=null?$e:null,orientation:q}),[an,t,n,i,a,d,ue,je,Re,Ie,st,Ke,ve,Xe,(Ms=$e==null?void 0:$e.headSha)!=null?Ms:null,(mo=$e==null?void 0:$e.branchName)!=null?mo:null,q]),{allCommits:Ls,clusterKeyByCommitId:Fs,leadByClusterKey:ys,clusterCounts:Xs,matchingNodes:Mo,matchingNodeIds:yo,normalizedSearchQuery:as,focusedNode:xs,defaultCollapsedClumps:Os,renderNodes:nn,visibleNodesBySha:pi,contentWidth:Wo,contentHeight:bs,connectors:Rn,mergeConnectors:Lo,connectorDecisions:oi,nodeWarnings:Oo,commitIdsWithRenderedAncestry:Fo,connectorParentShas:co,branchStartShas:vs,branchOffNodeShas:zs,crossBranchOutgoingShas:vn,branchBaseCommitByName:Jn,pointFormatter:Yi}=Qe,Xo=!!as,so=An/xa,xo=y.useMemo(()=>({transform:`scale(${1/so})`,transformOrigin:"top left",width:`${100*so}%`,height:`${100*so}%`}),[so]),zo=-(20/so),rs=y.useMemo(()=>{const ke=new Map;for(const et of nn)ke.set(et.commit.visualId,et);return ke},[nn]),$s=y.useMemo(()=>aw(nn,zo),[nn,zo]),Cn=ke=>{var Lt;const et=ke.commit.id,yt=ke.commit.visualId;if(Xo&&yo.has(et)||(xs==null?void 0:xs.commit.id)===et||At===null)return!0;if(!At.has(yt))return!1;const mt=Fs.get(yt);return mt&&((Lt=Xs.get(mt))!=null?Lt:1)>1&&(Ie.has(mt)||!Os.has(mt)&&!st.has(mt)),!0},uo=1.5/so,ls=ew/so,Fn=y.useMemo(()=>({transform:`scale(${1/so})`,transformOrigin:"center"}),[so]),_i="border-slate-400/70",To="border-blue-500",qo=y.useMemo(()=>new Map(t.map(ke=>[ke.name,ke])),[t]);y.useMemo(()=>new Set(t.filter(ke=>ke.commitsAhead===0&&!ke.name.startsWith("*")).map(ke=>ke.name)),[t]);const Xt=y.useMemo(()=>{var et,yt,mt;const ke=new Map;for(const Lt of nn){const gt=(et=ke.get(Lt.commit.id))!=null?et:new Set;gt.add(Lt.commit.branchName),ke.set(Lt.commit.id,gt)}for(const Lt of i){const gt=(yt=ke.get(Lt.fullSha))!=null?yt:new Set;gt.add((mt=Lt.branch)!=null?mt:d),ke.set(Lt.fullSha,gt)}return ke},[nn,i,d]),Di=y.useMemo(()=>new Map(Object.entries(c).map(([ke,et])=>[ke,new Set(et)])),[c]),Is=y.useCallback(()=>{lo.current,Wn()},[Wn,lo]),{isMarqueeSelecting:Go,marqueeRect:$o,selectedCommitShas:Io,setSelectedCommitShas:Ps,mergeTargetCommitSha:Eo,setMergeTargetCommitSha:Es,startMarqueeDrag:wn}=gw({scrollContainerRef:He,renderedCameraRef:gn,getTransformLayerOriginScreen:is,renderNodes:nn,shouldRenderNode:Cn,onPointerReleaseNoMarquee:Is}),fo=y.useMemo(()=>new Set(nn.map(ke=>ke.commit.id)),[nn]),Xn=y.useMemo(()=>Io.filter(ke=>fo.has(ke)),[Io,fo]),ws=y.useCallback((ke,et)=>{var Lt;if(!et)return!1;if(((Lt=ue[ke])!=null?Lt:[]).some(gt=>mi(gt.fullSha,et)||mi(gt.sha,et)))return!0;const mt=qo.get(ke);return!!(mt!=null&&mt.headSha&&mi(mt.headSha,et))},[ue,qo]),qn=(yn=$e==null?void 0:$e.branchName)!=null?yn:null,Qt=(Cs=$e==null?void 0:$e.headSha)!=null?Cs:null,qs=qn==null,es=y.useMemo(()=>{if(!Xe)return null;const ke=nn.filter(et=>et.commit.id===Xe);return ke.length===0?null:ke.length===1||!xs?ke[0]:ke.reduce((et,yt)=>{const mt=(et.x-xs.x)**2+(et.y-xs.y)**2;return(yt.x-xs.x)**2+(yt.y-xs.y)**2<mt?yt:et})},[Xe,nn,xs]),Gs=y.useCallback((ke,et,yt)=>{for(const mt of V){if(!qh(mt,U))continue;if(mt.branchName){if(mt.branchName===ke&&mi(mt.headSha,et))return mt;continue}if(!mi(mt.headSha,et)&&!mi(mt.headSha,yt))continue;if(mt.parentSha&&ws(ke,mt.parentSha)||ws(ke,mt.headSha))return mt;const Lt=qo.get(ke);if(Lt&&mi(Lt.headSha,mt.headSha)||ke===d&&i.some(gt=>mi(gt.fullSha,mt.headSha)))return mt}return null},[V,U,ws,qo,d,i]),cs=y.useCallback(ke=>{for(const et of V)if(qh(et,U)&&et.branchName===ke)return et;return null},[V,U]),Ao=y.useCallback((ke,et)=>{for(const yt of V)if(qh(yt,U)&&(mi(yt.headSha,ke)||mi(yt.headSha,et)))return yt;return null},[V,U]),Ss=y.useCallback(ke=>{var et;return Array.from((et=Xt.get(ke))!=null?et:[])},[Xt]),ii=y.useMemo(()=>{var Lt,gt,fn,rn;const ke=new Map;for(const ds of Xn){const Ts=Ss(ds);if(Ts.length===0)continue;const vo=(Lt=Ts.find(_o=>_o!==d))!=null?Lt:Ts[0],na=Xn.filter(_o=>_o!==ds).filter(_o=>!new Set(Ss(_o)).has(vo));ke.set(vo,{targetSha:ds,targetBranch:vo,sourceRefs:na})}const et=Array.from(ke.values()),yt=Eo?et.find(ds=>{var Ts;return ds.targetSha===Eo||ds.targetBranch===((Ts=Ss(Eo)[0])!=null?Ts:"")}):null,mt=(gt=yt!=null?yt:et[et.length-1])!=null?gt:null;return{options:et,selected:mt,targetBranch:(fn=mt==null?void 0:mt.targetBranch)!=null?fn:null,sources:(rn=mt==null?void 0:mt.sourceRefs)!=null?rn:[]}},[Xn,Ss,d,Eo]),As=y.useMemo(()=>{const ke=[...qn===d?[{name:d,headSha:Qt!=null?Qt:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(et=>!et.name.startsWith("*")&&et.unpushedCommits>0&&et.remoteSyncStatus!=="on-github").map(et=>[et.name,et]);return new Map(ke)},[t,qn,Qt,d,a.length]),Ds=y.useMemo(()=>{const ke=mt=>{var gt;const Lt=Ss(mt).filter(fn=>As.has(fn));return Lt.length===0?null:Lt.length===1?Lt[0]:qn&&Lt.includes(qn)?qn:(gt=Lt.find(fn=>fn!==d))!=null?gt:Lt[0]},et=mt=>{var Lt;return mt===d?a.map(gt=>{var fn,rn;return{fullSha:gt.fullSha,sha:gt.sha,parentSha:(fn=gt.parentSha)!=null?fn:null,message:gt.message,author:gt.author,date:gt.date,kind:(rn=gt.kind)!=null?rn:"commit"}}):(Lt=ue[mt])!=null?Lt:[]},yt=new Map;for(const mt of Xn){const Lt=ke(mt);if(!Lt)continue;const gt=As.get(Lt);if(!gt)continue;const fn=et(Lt).slice(0,gt.unpushedCommits),rn=fn.findIndex(Ts=>Ts.fullSha===mt);if(rn===-1)continue;const ds=yt.get(Lt);(!ds||rn<ds.targetIndex)&&yt.set(Lt,{branchName:Lt,targetSha:mt,targetIndex:rn,commitCount:fn.length-rn})}return Array.from(yt.values())},[Xn,Ss,As,qn,d,a,ue]),ho=y.useMemo(()=>Array.from(new Set(Xn.map(ke=>/^STASH:(\d+)$/.exec(ke)).filter(ke=>!!ke).map(ke=>parseInt(ke[1],10)))).sort((ke,et)=>ke-et),[Xn]),x=Xn.includes("WORKING_TREE"),k=(x?1:0)+ho.length,D=[...x?["Uncommitted changes"]:[],...ho.map(ke=>`Stash ${ke+1}`)],O=As.size,ae=!qs&&!!qn&&As.has(qn),he=qn?`Push ${qn}`:"Push current branch",we=Ds.length===1?Ds[0].commitCount>1?`Push ${Ds[0].commitCount} commits on ${Ds[0].branchName}`:`Push ${Ds[0].targetSha.slice(0,7)} on ${Ds[0].branchName}`:`Push ${Ds.length} selected ranges`;y.useEffect(()=>{zt==null||zt(qt||Go)},[qt,Go,zt]),y.useEffect(()=>{lt==null||lt(as?Mo.length:null)},[Mo.length,as,lt]);const Ne=y.useMemo(()=>{var ds,Ts,vo,na,_o,va;if(!as)return null;const ke=as,et=t.map(Ko=>Ko.name),yt=et.find(Ko=>Ko.toLowerCase()===ke),mt=yt!=null?yt:et.find(Ko=>Ko.toLowerCase().startsWith(ke)),gt=mt!=null?mt:et.find(Ko=>Ko.toLowerCase().includes(ke));if(!gt)return null;const fn=(ds=t.find(Ko=>Ko.name===gt))!=null?ds:null;if(fn!=null&&fn.headSha)return fn.headSha;const rn=(Ts=ue[gt])!=null?Ts:[];return rn.length>0?(na=(vo=rn[0])==null?void 0:vo.fullSha)!=null?na:null:gt===d&&(va=(_o=i[0])==null?void 0:_o.fullSha)!=null?va:null},[as,t,ue,d,i]);y.useEffect(()=>{var et,yt;if(!as){nt==null||nt(null);return}if(ot<=0)return;if(Ne){nt==null||nt(Ne);return}const ke=(yt=(et=Mo[0])==null?void 0:et.commit.id)!=null?yt:null;nt==null||nt(ke)},[Mo,as,nt,Ne,ot]),y.useLayoutEffect(()=>{if(!Xe)return;const ke=He.current,et=es;if(!ke||!et)return;const yt=is();if(!yt)return;const mt=ke.getBoundingClientRect(),Lt=gn.current.zoom,gt=Lt/xa,fn=et.x+ns/2,rn=et.y+Tc+Vs/2,ds=mt.left+mt.width/2,Ts=mt.top+mt.height/2;Wt(ds-yt.x-fn*gt,Ts-yt.y-rn*gt,Lt)},[Xe,ot,es,is,Wt,gn]);const Je=(ta=(ai=un==null?void 0:un.width)!=null?ai:($n=He.current)==null?void 0:$n.clientWidth)!=null?ta:0,ut=(us=(po=un==null?void 0:un.height)!=null?po:(gi=He.current)==null?void 0:gi.clientHeight)!=null?us:0,$t=Je>0&&ut>0?Cy(Je,ut,gn.current,{innerPaddingPx:Cd}):null,Dt=$t!=null?ky($t,gn.current.zoom):null,sn=ke=>{if(!Dt)return!0;const{fromX:et,fromY:yt,toX:mt,toY:Lt}=ke;return iw(et,yt,mt,Lt,Dt,ke.fromFace,ke.toFace)};y.useLayoutEffect(()=>{var fn;const ke=He.current;if(!ke||ke.clientWidth<=0||ke.clientHeight<=0)return;const et=ke.clientWidth,yt=ke.clientHeight;_t(rn=>(rn==null?void 0:rn.width)===et&&(rn==null?void 0:rn.height)===yt?rn:{width:et,height:yt});const mt=Cy(et,yt,gn.current,{innerPaddingPx:Cd});if(!mt){Ot(rn=>rn===null?rn:null);return}const Lt=ky(mt,gn.current.zoom),gt=rw($s,Lt,rs,zo);for(const rn of nn){const ds=Fs.get(rn.commit.visualId);if(!ds||((fn=Xs.get(ds))!=null?fn:1)<=1)continue;(Ie.has(ds)||!Os.has(ds)&&!st.has(ds))&&gt.add(rn.commit.visualId)}Ot(rn=>sw(rn,gt)?rn:gt)},[An,ot,Xe,qt,os,Ie,st,Os,Fs,Xs,nn,un,$s,rs,zo]),y.useLayoutEffect(()=>{const ke=He.current;if(!ke)return;const et=()=>{const mt=ke.clientWidth,Lt=ke.clientHeight;mt<=0||Lt<=0||_t(gt=>(gt==null?void 0:gt.width)===mt&&(gt==null?void 0:gt.height)===Lt?gt:{width:mt,height:Lt})};et();const yt=new ResizeObserver(et);return yt.observe(ke),()=>yt.disconnect()},[Ls.length]);const Ut=nn.filter(ke=>Cn(ke)).length,zn=Lo.filter(ke=>sn(ke)).length,Dn=Rn.filter(ke=>sn(ke)).length,oo=y.useCallback((ke,et)=>{ke.stopPropagation();const yt=et.commit.id;if(ke.shiftKey?(Ps(fn=>fn.includes(yt)?fn.filter(rn=>rn!==yt):[...fn,yt]),Es(yt)):(Ps(fn=>fn.includes(yt)?[]:[yt]),Es(fn=>fn===yt?null:yt)),!(ke.metaKey||ke.ctrlKey||ke.detail>=2)||yt==="WORKING_TREE")return;const Lt=yt.length>=40?yt.slice(0,7):yt;let gt=null;if(et.commit.branchName?(gt=Gs(et.commit.branchName,yt,Lt),gt||(gt=cs(et.commit.branchName))):gt=Ao(yt,Lt),gt&&oe){oe(gt.path);return}h==null||h({commitSha:yt})},[Ao,Gs,cs,h,oe]),bo=y.useCallback(async()=>{if(!le)return;await le(at)&&(it(!1),Et(""))},[le,at]),en=y.useCallback(async()=>{P&&(await P({branchNames:[],discardUncommittedChanges:x,stashIndices:ho}),H(!1),Ps([]),Es(null))},[P,x,ho]),qe=y.useCallback(async()=>{const ke=_e.trim();if(ke){if(Ue==="new-root"){if(!A)return;await A(ke)}else{if(!Te||Xn.length!==1)return;const et=Xn[0];if(!(et==="WORKING_TREE"||et.startsWith("STASH:")))return;await Te(et,ke)}te(!1),Fe(""),De("from-selected-node"),Ps([]),Es(null)}},[Ue,_e,Te,A,Xn]),ts=Xn.length===1&&(Xn[0]==="WORKING_TREE"||Xn[0].startsWith("STASH:")),Ks=!!A;return y.useEffect(()=>{if(Z){if(!ts&&Ks){De("new-root");return}ts&&De("from-selected-node")}},[Ks,Z,ts]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[l.jsx(hw,{isOpen:Ke,onToggle:()=>Bt(ke=>!ke),onClose:()=>Bt(!1),visibleBounds:Dt,renderedNodeCount:Ut,totalNodeCount:nn.length,renderedMergeConnectorCount:zn,totalMergeConnectorCount:Lo.length,renderedConnectorCount:Dn,totalConnectorCount:Rn.length,mapGridCullViewportInsetScreenPx:Zv,debugRows:Zn.debugRows,branchDebugRows:Zn.branchDebugRows,connectorDecisions:oi}),Ls.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(dw,{scrollContainerRef:He,mapPadHostRef:Ge,transformLayerRef:ze,isMarqueeSelecting:Go,contentWidth:Wo,contentHeight:bs,isCameraMoving:qt,onWheel:Mn,onMouseDown:wn,labelTopPx:zo,inverseZoomStyle:xo,displayZoom:so,iconScaleStyle:Fn,selectedVisibleCommitShas:Xn,normalizedSearchQuery:as,matchingNodeIds:yo,focusedNode:es,renderNodes:nn,shouldRenderNode:Cn,manuallyOpenedClumps:Ie,manuallyClosedClumps:st,defaultCollapsedClumps:Os,leadByClusterKey:ys,clusterKeyByCommitId:Fs,clusterCounts:Xs,commitIdsWithRenderedAncestry:Fo,nodeWarnings:Oo,connectorParentShas:co,branchStartShas:vs,branchOffNodeShas:zs,crossBranchOutgoingShas:vn,branchBaseCommitByName:Jn,branchStartAccentClass:To,connectorParentAccentClass:_i,commitCornerRadiusPx:ls,lineStrokeWidth:uo,pointFormatter:Yi,connectors:Rn,mergeConnectors:Lo,cullConnectorPath:sn,flushCameraReactTick:Wn,setManuallyOpenedClumps:Ht,setManuallyClosedClumps:cn,onCommitCardClick:oo,unpushedCommitShasSetByBranch:Di,checkedOutHeadSha:Qt}),$o&&Go?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:$o.left,top:$o.top,width:$o.width,height:$o.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(fw,{selectedVisibleCommitShas:Xn,commitInProgress:z,commitDisabled:ie,stageInProgress:me,stashInProgress:Ee,stashDisabled:K,pushInProgress:N,deleteInProgress:Y,createBranchFromNodeInProgress:ee,onCommitLocalChanges:le,onStageAllChanges:X?()=>void X():void 0,onStashLocalChanges:be,onPushCurrentBranch:I,onPushAllBranches:T,onPushCommitTargets:B,onDeleteSelection:P,onCreateBranchFromNode:Te,onMergeRefsIntoBranch:j,selectedPushTargets:Ds,selectedPushLabel:we,canPushCurrentBranch:ae,pushCurrentBranchLabel:he,pushableRemoteBranchCount:O,deletableSelectionCount:k,canCreateRootBranch:Ks,selectedCommitTargetOption:ii,mergeInProgress:M,mergeTargetCommitSha:Eo,setMergeTargetCommitSha:Es,worktrees:V,currentRepoPath:U,worktreeMenuOpen:Mt,setWorktreeMenuOpen:ft,onSwitchToWorktree:oe,onRemoveWorktree:Q,removeWorktreeInProgress:se,setCommitDialogOpen:it,setDeleteConfirmOpen:H,setNewBranchDialogOpen:te}),l.jsx(mw,{commitDialogOpen:rt,commitMessageDraft:at,onCommitMessageDraftChange:Et,onCommitDialogClose:()=>it(!1),onCommitConfirm:()=>void bo(),commitInProgress:z,deleteConfirmOpen:Ze,deleteSelectionItems:D,onDeleteConfirmClose:()=>H(!1),onDeleteConfirm:()=>void en(),deleteInProgress:Y,deletableSelectionCount:k,newBranchDialogOpen:Z,newBranchName:_e,newBranchCreateMode:Ue,onNewBranchNameChange:Fe,onNewBranchCreateModeChange:De,onNewBranchDialogClose:()=>te(!1),onNewBranchConfirm:()=>void qe(),selectedCommitCanCreateBranch:ts,createBranchFromNodeInProgress:ee})]})}function yw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchParentByName:b={},branchUniqueAheadCounts:v={},gridSearchQuery:S="",gridSearchJumpToken:C=0,gridFocusSha:j=null,onGridSearchResultCountChange:M,onGridSearchFocusChange:T,view:I="time",isLoading:B=!1,scrollRequest:N,focusedErrorBranch:P,checkedOutRef:Y=null,mapTopInsetPx:V=0,onMergeRefsIntoBranch:U,mergeInProgress:Q=!1,onPushAllBranches:se,onPushCurrentBranch:oe,onPushCommitTargets:be,pushInProgress:Ee=!1,onDeleteSelection:K,deleteInProgress:le=!1,worktrees:z=[],currentRepoPath:ie,onRemoveWorktree:X,removeWorktreeInProgress:me=!1,onSwitchToWorktree:Te,onStashLocalChanges:A,stashInProgress:ee=!1,stashDisabled:q=!1,onCommitLocalChanges:ue,commitInProgress:je=!1,commitDisabled:Re=!1,onStageAllChanges:ve,stageInProgress:ot=!1,onCreateBranchFromNode:Xe,onCreateRootBranch:$e,createBranchFromNodeInProgress:lt=!1,onMoveNodeBackToBranch:nt,orientation:zt="horizontal",onInteractionChange:ct,manuallyOpenedClumps:Rt,manuallyClosedClumps:Oe,setManuallyOpenedClumps:dt,setManuallyClosedClumps:ce,layoutModel:He}){const Ge=new Set(u.map(it=>it.branchName)),ze=14*864e5,Mt=Date.now();function ft(it){return Ge.has(it.name)||Mt-new Date(it.lastCommitDate).getTime()<=ze}const rt=t.filter(it=>it.status==="stale"&&ft(it)).sort((it,at)=>new Date(at.lastCommitDate).getTime()-new Date(it.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:I==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(My,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchParentByName:b,branchUniqueAheadCounts:v,gridSearchQuery:S,gridSearchJumpToken:C,gridFocusSha:j,onGridSearchResultCountChange:M,onGridSearchFocusChange:T,staleBranches:rt,isLoading:B,scrollRequest:N,focusedErrorBranch:P,checkedOutRef:Y,mapTopInsetPx:V,onMergeRefsIntoBranch:U,mergeInProgress:Q,onPushAllBranches:se,onPushCurrentBranch:oe,onPushCommitTargets:be,pushInProgress:Ee,onDeleteSelection:K,deleteInProgress:le,worktrees:z,currentRepoPath:ie,onRemoveWorktree:X,removeWorktreeInProgress:me,onSwitchToWorktree:Te,onStashLocalChanges:A,stashInProgress:ee,stashDisabled:q,onCommitLocalChanges:ue,commitInProgress:je,commitDisabled:Re,onStageAllChanges:ve,stageInProgress:ot,onCreateBranchFromNode:Xe,onCreateRootBranch:$e,createBranchFromNodeInProgress:lt,onMoveNodeBackToBranch:nt,orientation:zt,onInteractionChange:ct,manuallyOpenedClumps:Rt,manuallyClosedClumps:Oe,setManuallyOpenedClumps:dt,setManuallyClosedClumps:ce,layoutModel:He})}):I==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(My,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:b,branchUniqueAheadCounts:v,gridSearchQuery:S,gridSearchJumpToken:C,gridFocusSha:j,checkedOutRef:Y,onGridSearchResultCountChange:M,onGridSearchFocusChange:T,onInteractionChange:ct,manuallyOpenedClumps:Rt,manuallyClosedClumps:Oe,setManuallyOpenedClumps:dt,setManuallyClosedClumps:ce,layoutModel:He,orientation:zt})}):null})}const tl=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function xw(t,n,i,a,c,u){var Q,se,oe,be,Ee;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(se=(Q=i[0])==null?void 0:Q.fullSha)!=null?se:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(K=>({name:K.name,headSha:K.headSha,isDefault:!1}))],b=d?_.filter(K=>tl(K.headSha,d)):[],v=(oe=b.find(K=>K.isDefault))!=null?oe:b[0],S=!!(v&&d&&tl(v.headSha,d)),C=v&&!v.isDefault?n.find(K=>K.name===v.name):void 0,j=(()=>{var le;if(!d)return null;const K=i.find(z=>tl(z.fullSha,d)||tl(z.sha,d));if(K!=null&&K.date)return K.date;if(C){const z=((le=a[C.name])!=null?le:[]).find(ie=>tl(ie.fullSha,d)||tl(ie.sha,d));if(z!=null&&z.date)return z.date}return null})(),M=j?new Date(j).getTime():Number.NaN,T=Date.now(),I=Number.isFinite(M)?Math.max(T,M+1+t.index):T+t.index,B=new Date(I).toISOString(),N=t.message.trim(),P={fullSha:h,sha:p,parentSha:d,message:N||p,author:"You",date:B,kind:"stash"},Y={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(be=C==null?void 0:C.name)!=null?be:u,message:N||p,author:"You",date:B,kind:"stash"};if(S&&(v!=null&&v.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,Y]};if(S&&C)return{branches:n.map(le=>le.name===C.name?{...le,commitsAhead:le.commitsAhead+1,unpushedCommits:le.unpushedCommits+1,lastCommitDate:B,headSha:h}:le),directCommits:i,branchCommitPreviews:{...a,[C.name]:[P,...a[C.name]||[]]},branchUniqueAheadCounts:{...c,[C.name]:Math.max(0,(Ee=Object.prototype.hasOwnProperty.call(c,C.name)?c[C.name]:C.commitsAhead)!=null?Ee:0)+1}};const V=`*Stash:${t.index}`;return{branches:[{name:V,commitsAhead:1,commitsBehind:0,lastCommitDate:B,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(v==null?void 0:v.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[V]:[P]},branchUniqueAheadCounts:{...c,[V]:1}}}function Ix(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=xw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function bw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:g,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:b=new Set,gridSearchQuery:v="",gridFocusSha:S=null,orientation:C="horizontal"}){var V,U,Q,se;const j=Ix(g,t,i,u,h,c);let M=j.branches,T=j.directCommits,I=j.branchCommitPreviews,B=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const oe=p.headSha||p.parentSha||null,be=(U=(V=T[0])==null?void 0:V.fullSha)!=null?U:null,Ee=(ve,ot)=>!ve||!ot?!1:ve===ot||ve.startsWith(ot)||ot.startsWith(ve),K=[{name:c,headSha:be!=null?be:"",isDefault:!0},...M.map(ve=>({name:ve.name,headSha:ve.headSha,isDefault:!1}))],le=p.branchName?K.find(ve=>ve.name===p.branchName):void 0,z=oe?K.filter(ve=>Ee(ve.headSha,oe)):[],ie=(Q=le!=null?le:z.find(ve=>ve.isDefault))!=null?Q:z[0],X=!!(ie&&oe&&Ee(ie.headSha,oe)),me=ie&&!ie.isDefault?M.find(ve=>ve.name===ie.name):void 0,Te=(()=>{var ot;if(!oe)return null;const ve=T.find(Xe=>Ee(Xe.fullSha,oe)||Ee(Xe.sha,oe));if(ve!=null&&ve.date)return ve.date;if(me){const Xe=((ot=I[me.name])!=null?ot:[]).find($e=>Ee($e.fullSha,oe)||Ee($e.sha,oe));if(Xe!=null&&Xe.date)return Xe.date}return null})(),A=Te?new Date(Te).getTime():Number.NaN,ee=Date.now(),q=Number.isFinite(A)?Math.max(ee,A+1):ee,ue=new Date(q).toISOString(),je={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:oe,message:"Local uncommitted changes",author:"You",date:ue,kind:"uncommitted"},Re={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:oe,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:ue,kind:"uncommitted"};if(X&&(ie!=null&&ie.isDefault))T=[...T,Re];else if(X&&me)M=M.map(ve=>ve.name===me.name?{...ve,commitsAhead:ve.commitsAhead+1,unpushedCommits:ve.unpushedCommits+1,lastCommitDate:ue,headSha:"WORKING_TREE"}:ve),I={...I,[me.name]:[je,...I[me.name]||[]]},B={...B,[me.name]:Math.max(0,(se=Object.prototype.hasOwnProperty.call(B,me.name)?B[me.name]:me.commitsAhead)!=null?se:0)+1};else{const ve={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:ue,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:oe!=null?oe:void 0,parentBranch:(ie==null?void 0:ie.name)||p.branchName||c};M=[ve,...M],I={...I,[ve.name]:[je]},B={...B,[ve.name]:1}}}const N={...d};N[c]=null;const P=fp(M,c,I,N),Y=Sd({lanes:P,branches:M,mergeNodes:n,directCommits:T,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:I,branchParentByName:N,branchUniqueAheadCounts:B,manuallyOpenedClumps:_,manuallyClosedClumps:b,isDebugOpen:!1,gridSearchQuery:v,gridFocusSha:S,checkedOutRef:p,orientation:C});return{enrichedBranches:M,enrichedBranchCommitPreviews:I,enrichedBranchUniqueAheadCounts:B,enrichedDirectCommits:T,sharedGridLayoutModel:Y}}function Ty(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,b,v,S;const p=new Date((b=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?b:0).getTime(),g=new Date((S=(v=i.get(h))==null?void 0:v.lastCommitDate)!=null?S:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function Ey(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,b,v,S;const p=new Date((b=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?b:0).getTime(),g=new Date((S=(v=a.get(h))==null?void 0:v.lastCommitDate)!=null?S:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ay(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const b of _)c.add(b);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Nm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:b,getMergeTargetLabels:v,sourceBranchName:S,clusterKeyByCommitId:C,isGridClusterOpen:j,onToggleGridCluster:M,onSelectCommit:T,onSelectBranch:I}){var A,ee;if(_.has(t)||!a.get(t))return null;const N=(A=u.get(t))!=null?A:[],P=N.length>0,Y=y.useMemo(()=>{var q;return[...(q=c[t])!=null?q:[]]},[c,t]),V=b&&Y.length>0,U=b,Q=P||V,se=h.has(t),oe=U?Y:[],be=se&&oe.length>0,Ee=g===t,K=new Set(_);K.add(t);const le="top-[-0.2rem] h-4.5 w-[10px]",z="rounded-bl-[7px]",ie="left-[0.65rem]",X=new Map,me=[];for(const q of N){const ue=d.get(q);if(ue){const je=oe.findIndex(Re=>mi(Re.fullSha,ue)||mi(Re.sha,ue));if(je>=0){const Re=(ee=X.get(je))!=null?ee:[];Re.push(q),X.set(je,Re);continue}}me.push(q)}const Te=y.useMemo(()=>{if(!b||oe.length===0)return[];const q=[];let ue=[],je=null;const Re=()=>{if(ue.length===0)return;const ve=ue[ue.length-1],ot=`sidebar-single-${t}-${ve.fullSha}`;q.push({key:je!=null?je:ot,commits:ue,count:ue.length,lead:ve}),ue=[],je=null};return oe.forEach(ve=>{var Xe;const ot=(Xe=C.get(`${t}:${ve.fullSha}`))!=null?Xe:null;if(ue.length===0){ue=[ve],je=ot;return}if(ot===je){ue.push(ve);return}Re(),ue=[ve],je=ot}),Re(),q},[t,b,oe,C]);return l.jsxs("li",{className:Ws("relative",n>0?"pl-4":"pl-0",n===0&&!i?se?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Ws("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",z,ie,le)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Ws("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ie)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{Q&&p(t),I==null||I(t)},className:Ws("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",Ee?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[Q?l.jsx("span",{className:Ws("inline-block text-[10px] text-muted-foreground transition-transform",se?"rotate-90":""),children:"▶"}):null,l.jsx("span",{className:"min-w-0 break-words",children:l.jsx("span",{className:Ws(Ee?"font-medium text-foreground":"font-normal"),children:t})})]})}),be?l.jsx("ul",{className:"relative space-y-1 pl-4",children:Te.map(q=>{const ue=q.count>1&&!j(q.key);return(ue?[q.lead]:q.commits).map(Re=>{var Xe;const ve=oe.findIndex($e=>$e.fullSha===Re.fullSha),ot=v(Re.fullSha,S!=null?S:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>T==null?void 0:T(Re.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Re.message,children:[l.jsx("span",{className:"block truncate",children:Re.message}),ot.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:ot.map($e=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:$e})]},`${Re.fullSha}:${$e}`))}):null]}),q.count>1&&Re.fullSha===q.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${q.lead.fullSha}`,onClick:()=>M(q.key,`${t}:${q.lead.fullSha}`),className:Ws("shrink-0 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",ue?"":"min-w-[2ch] text-center"),children:ue?`+${Math.max(1,q.count-1)}`:"−"}):null]}),(Xe=X.get(ve))!=null&&Xe.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:X.get(ve).map(($e,lt,nt)=>l.jsx(Nm,{branchName:$e,depth:n+1,isLast:lt===nt.length-1&&me.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:K,showCommits:b,getMergeTargetLabels:v,sourceBranchName:$e,clusterKeyByCommitId:C,isGridClusterOpen:j,onToggleGridCluster:M,onSelectCommit:T,onSelectBranch:I},$e))}):null]},`${t}:${Re.fullSha}`)})})}):null,P&&se&&me.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:me.map((q,ue)=>l.jsx(Nm,{branchName:q,depth:n+1,isLast:ue===me.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:K,showCommits:b,getMergeTargetLabels:v,sourceBranchName:q,clusterKeyByCommitId:C,isGridClusterOpen:j,onToggleGridCluster:M,onSelectCommit:T,onSelectBranch:I},q))}):null]})}function vw({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,projectLoading:c=!1,projectError:u=null,branches:d,defaultBranch:h,checkedOutRef:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,setManuallyOpenedClumps:b,setManuallyClosedClumps:v,gridLayoutModel:S,onSelectCommit:C,onSelectBranch:j,className:M}){var Xe;const T=y.useRef(null),I=y.useRef(null),[B,N]=y.useState(!1),[P,Y]=y.useState(()=>new Set),[V,U]=y.useState(()=>new Set),[Q,se]=y.useState(()=>new Set),oe=g!=null?g:V,be=_!=null?_:Q,Ee=b!=null?b:U,K=v!=null?v:se,[le,z]=y.useState(null),[ie,X]=y.useState(null),me=y.useMemo(()=>d.some(lt=>lt.name===h)?d:[{name:h,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...d],[d,h]),Te=y.useMemo(()=>Ty(me,h),[me,h]),A=y.useMemo(()=>Ey(me,h,Te),[me,h,Te]),[ee,q]=y.useState(()=>Ay(A,Te,p,h));y.useEffect(()=>{q($e=>{const lt=Ay(A,Te,p,h),nt=new Set($e);for(const zt of lt)nt.add(zt);return nt})},[A,Te,p,h]);const ue=(Xe=S==null?void 0:S.defaultCollapsedClumps)!=null?Xe:new Set,je=$e=>oe.has($e)||!ue.has($e)&&!be.has($e),Re=($e,lt)=>{const nt=T.current,zt=I.current;if(nt&&zt){const ct=`[data-clump-toggle-id="${lt}"]`,Rt=nt.querySelector(ct);if(Rt){const Oe=Rt.getBoundingClientRect().top-zt.getBoundingClientRect().top;X({id:lt,topWithinScrollBody:Oe})}else X(null)}else X(null);z(lt),Ee(ct=>{const Rt=new Set(ct),Oe=je($e);return K(dt=>{const ce=new Set(dt);return Oe?(Rt.delete($e),ce.add($e)):(ce.delete($e),Rt.add($e)),ce}),Rt})};y.useLayoutEffect(()=>{if(!le)return;const $e=T.current,lt=I.current;if(!$e||!lt)return;const nt=`[data-clump-toggle-id="${le}"]`,zt=$e.querySelector(nt);if(zt){if((ie==null?void 0:ie.id)===le){const Rt=zt.getBoundingClientRect().top-lt.getBoundingClientRect().top-ie.topWithinScrollBody;Number.isFinite(Rt)&&Rt!==0&&(lt.scrollTop+=Rt)}zt.focus({preventScroll:!0}),z(null),X(null)}},[oe,be,le,ie]);const ve=$e=>{q(lt=>{const nt=new Set(lt);return nt.has($e)?nt.delete($e):nt.add($e),nt})};y.useEffect(()=>{Y($e=>{const lt=new Set($e);for(const nt of t)lt.add(nt.path);return n&&lt.add(n),lt})},[n,t]);const ot=y.useMemo(()=>{var lt,nt,zt,ct,Rt,Oe,dt,ce,He,Ge;const $e=new Map;for(const ze of t){const Mt=ze.path===n,ft=bw({branches:ze.branches,mergeNodes:ze.mergeNodes,directCommits:ze.directCommits,unpushedDirectCommits:ze.unpushedDirectCommits,defaultBranch:ze.defaultBranch,branchCommitPreviews:ze.branchCommitPreviews,branchUniqueAheadCounts:ze.branchUniqueAheadCounts,checkedOutRef:ze.checkedOutRef,stashes:ze.stashes,manuallyOpenedClumps:Mt?oe:new Set,manuallyClosedClumps:Mt?be:new Set}),rt=ft.enrichedBranches.some(Ve=>Ve.name===ze.defaultBranch)?ft.enrichedBranches:[{name:ze.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...ft.enrichedBranches],it=new Map(ft.sharedGridLayoutModel.nodes.map(Ve=>[Ve.commit.visualId,Ve.row])),at={};for(const Ve of ft.sharedGridLayoutModel.allCommits){const bt=(lt=at[Ve.branchName])!=null?lt:[];bt.push({fullSha:Ve.id,sha:Ve.id.slice(0,7),parentSha:(nt=Ve.parentSha)!=null?nt:null,message:Ve.message,author:Ve.author,date:Ve.date,kind:(zt=Ve.kind)!=null?zt:"commit"}),at[Ve.branchName]=bt}for(const Ve of Object.keys(at))at[Ve]=at[Ve].sort((bt,pt)=>{var Ke,Bt;const Ie=(Ke=it.get(`${Ve}:${bt.fullSha}`))!=null?Ke:Number.MAX_SAFE_INTEGER,st=(Bt=it.get(`${Ve}:${pt.fullSha}`))!=null?Bt:Number.MAX_SAFE_INTEGER;if(Ie!==st)return Ie-st;const Ht=new Date(bt.date).getTime(),cn=new Date(pt.date).getTime();return Ht!==cn?Ht-cn:bt.fullSha.localeCompare(pt.fullSha)});const Et=(ct=ft.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?ct:new Map,Ze=(Ve,bt)=>{const pt=Et.get(bt);if(!pt)return[];for(const[Ie,st]of pt.entries())if(mi(Ve,Ie))return Array.from(st).sort();return[]},H=Ty(rt,ze.defaultBranch),Z=Ey(rt,ze.defaultBranch,H),te=new Map(rt.map(Ve=>[Ve.name,Ve])),_e=new Map;for(const Ve of rt){const bt=(Oe=(Rt=ft.sharedGridLayoutModel.firstBranchCommitByName.get(Ve.name))==null?void 0:Rt.parentSha)!=null?Oe:null,pt=bt!=null?bt:null;_e.set(Ve.name,pt)}const Fe=(dt=ft.sharedGridLayoutModel.defaultCollapsedClumps)!=null?dt:new Set,Ue=Mt?oe:new Set,De=Mt?be:new Set,St=Ve=>Ue.has(Ve)||!Fe.has(Ve)&&!De.has(Ve);$e.set(ze.path,{rootBranchNames:Z,branchByName:te,branchCommitPreviewsFromLayout:at,childNamesByParent:H,branchAnchorShaByName:_e,checkedOutBranchName:(He=(ce=ze.checkedOutRef)==null?void 0:ce.branchName)!=null?He:null,clusterKeyByCommitId:(Ge=ft.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Ge:new Map,getMergeTargetLabels:Ze,isGridClusterOpen:St})}return $e},[n,be,oe,t]);return l.jsx("aside",{ref:T,"aria-label":"Dense branch sidebar",className:Ws("pointer-events-auto h-full",M),children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3 px-5",children:[l.jsx("h2",{className:"text-sm font-medium text-foreground",children:"Projects"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:c,className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Add repo"}),l.jsx("button",{type:"button",onClick:()=>N($e=>!$e),className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:B?"Hide commits":"Show commits"})]})]}),u&&l.jsx("div",{className:"px-5 pb-3",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:u})}),l.jsx("div",{ref:I,className:"mb-3 min-h-0 flex-1 space-y-2 overflow-y-auto px-5",children:t.map($e=>{var Oe,dt;const lt=$e.path===n,nt=P.has($e.path)||lt,zt=(Oe=$e.treeLoaded)!=null?Oe:$e.branches.length>0,ct=ot.get($e.path),Rt=lt?ee:new Set(ct?Array.from(ct.branchByName.keys()):[]);return l.jsxs("div",{className:"rounded-xl border border-border/50 bg-card",children:[l.jsxs("button",{type:"button",onClick:()=>{i($e.path)},className:Ws("flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors",lt?"bg-primary/10 text-foreground":"hover:bg-accent"),children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"truncate text-sm font-medium",children:$e.name}),l.jsx("p",{className:"truncate text-xs text-muted-foreground",children:$e.path})]}),l.jsx("span",{className:"shrink-0 text-xs text-muted-foreground",children:(dt=$e.branchName)!=null?dt:"branch"})]}),nt&&l.jsx("div",{className:"border-t border-border/50 px-3 py-3",children:zt&&ct?l.jsx("ul",{className:"space-y-1",children:ct.rootBranchNames.map((ce,He)=>l.jsx(Nm,{branchName:ce,depth:0,isLast:He===ct.rootBranchNames.length-1,branchByName:ct.branchByName,branchCommitPreviews:ct.branchCommitPreviewsFromLayout,childNamesByParent:ct.childNamesByParent,branchAnchorShaByName:ct.branchAnchorShaByName,expandedBranchNames:Rt,onToggleBranch:ve,checkedOutBranchName:ct.checkedOutBranchName,ancestors:new Set,showCommits:B,getMergeTargetLabels:ct.getMergeTargetLabels,sourceBranchName:ce,clusterKeyByCommitId:ct.clusterKeyByCommitId,isGridClusterOpen:ct.isGridClusterOpen,onToggleGridCluster:Re,onSelectCommit:async Ge=>{lt||await i($e.path),C==null||C(Ge)},onSelectBranch:async Ge=>{lt||await i($e.path),j==null||j(Ge)}},`${$e.path}:${ce}`))}):l.jsx("p",{className:"px-2 py-1 text-xs text-muted-foreground",children:"Loading branch tree..."})})]},$e.path)})})]})})}const ww="git-visualizer",Gh="git-visualizer:projects",Dy=12,Ny=1400,Sw=180;function hr(t){return t==="/"?t:t.replace(/\/+$/,"")}function Kh(...t){return t.filter(Boolean).join(" ")}function fd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Cw(t){return fd(t)===ww}function kw(){var Ds,ho;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,g]=y.useState(!1),[_,b]=y.useState([]),[v,S]=y.useState([]),[C,j]=y.useState([]),[M,T]=y.useState([]),[I,B]=y.useState({}),[N,P]=y.useState([]),[Y,V]=y.useState("main"),[U,Q]=y.useState(null),[se,oe]=y.useState([]),[be,Ee]=y.useState(!1),[K,le]=y.useState(""),[z,ie]=y.useState(0),[X,me]=y.useState(()=>new Set),[Te,A]=y.useState(()=>new Set),[ee,q]=y.useState(null),[ue,je]=y.useState(null),[Re,ve]=y.useState(!1),[ot,Xe]=y.useState(!1),[$e,lt]=y.useState(null),[nt,zt]=y.useState(!1),[ct,Rt]=y.useState(!1),[Oe,dt]=y.useState("active"),[ce,He]=y.useState(null),[Ge,ze]=y.useState(null),[Mt,ft]=y.useState(!1),[rt,it]=y.useState(null),[at,Et]=y.useState(!1),[Ze,H]=y.useState(null),[Z,te]=y.useState(null),[_e,Fe]=y.useState(!1),[Ue,De]=y.useState(!1),[St,Ve]=y.useState(!1),[bt,pt]=y.useState(!1),[Ie,st]=y.useState({}),[Ht,cn]=y.useState({}),[Ke,Bt]=y.useState({}),[At,Ot]=y.useState({}),[un,_t]=y.useState([]),[qt,An]=y.useState(!1),[os,gn]=y.useState(!1),[lo,is]=y.useState(!1),[Wn,Wt]=y.useState(!1),[Mn,an]=y.useState(!1),[tn,Qe]=y.useState("horizontal"),Zn=y.useRef(null),Ls=y.useRef(0),Fs=y.useRef(0),ys=y.useRef(null),Xs=Cw(t),Mo=y.useRef(!1),yo=y.useRef(!1),as=y.useRef(new Set),xs=y.useRef([]),Os=y.useRef([]),nn=y.useRef(null),pi=y.useMemo(()=>c.map(x=>{var k,D,O,ae,he,we,Ne,Je,ut,$t,Dt,sn,Ut,zn,Dn,oo,bo,en,qe,ts,Ks,Do,js,Ms,mo,yn;return{...x,...(k=d[x.path])!=null?k:{},branches:(O=(D=d[x.path])==null?void 0:D.branches)!=null?O:[],mergeNodes:(he=(ae=d[x.path])==null?void 0:ae.mergeNodes)!=null?he:[],directCommits:(Ne=(we=d[x.path])==null?void 0:we.directCommits)!=null?Ne:[],unpushedDirectCommits:(ut=(Je=d[x.path])==null?void 0:Je.unpushedDirectCommits)!=null?ut:[],unpushedCommitShasByBranch:(Dt=($t=d[x.path])==null?void 0:$t.unpushedCommitShasByBranch)!=null?Dt:{},checkedOutRef:(Ut=(sn=d[x.path])==null?void 0:sn.checkedOutRef)!=null?Ut:null,worktrees:(Dn=(zn=d[x.path])==null?void 0:zn.worktrees)!=null?Dn:[],stashes:(bo=(oo=d[x.path])==null?void 0:oo.stashes)!=null?bo:[],branchCommitPreviews:(qe=(en=d[x.path])==null?void 0:en.branchCommitPreviews)!=null?qe:{},branchUniqueAheadCounts:(Ks=(ts=d[x.path])==null?void 0:ts.branchUniqueAheadCounts)!=null?Ks:{},defaultBranch:(Ms=(js=(Do=d[x.path])==null?void 0:Do.defaultBranch)!=null?js:x.branchName)!=null?Ms:"main",treeLoaded:(yn=(mo=d[x.path])==null?void 0:mo.loaded)!=null?yn:!1}}),[c,d]);y.useEffect(()=>{try{const x=localStorage.getItem(Gh);if(!x)return;const k=JSON.parse(x);if(!Array.isArray(k))return;const D=k.filter(O=>typeof O=="object"&&O!==null&&typeof O.path=="string"&&typeof O.name=="string"&&typeof O.lastOpenedAt=="number");u(D.slice(0,Dy))}catch{u([])}},[]),y.useEffect(()=>{yo.current||t||c.length!==0&&(yo.current=!0,rs(c[0].path))},[c,t]);const Wo=y.useMemo(()=>v.reduce((x,k)=>(x[k.targetCommitSha]=k.targetBranch,x),{}),[v]);y.useEffect(()=>{t&&h(x=>{var k,D;return{...x,[t]:{path:t,name:i||fd(t),branches:_,mergeNodes:v,directCommits:C,unpushedDirectCommits:M,mergeTargetBranchByCommitSha:v.reduce((O,ae)=>(O[ae.targetCommitSha]=ae.targetBranch,O),{}),unpushedCommitShasByBranch:I,checkedOutRef:U,worktrees:se,stashes:un,branchCommitPreviews:Ht,branchParentByName:Ke,branchUniqueAheadCounts:At,defaultBranch:Y,loaded:!0,cacheSchemaVersion:(D=(k=x[t])==null?void 0:k.cacheSchemaVersion)!=null?D:1,updatedAtMs:Date.now()}}})},[t,i,_,v,C,M,Wo,I,U,se,un,Ht,Ke,At,Y]);async function bs(x,k=!1){var O;const D=hr(x);if(D&&!as.current.has(D)&&!(!k&&((O=d[D])!=null&&O.loaded))){as.current.add(D),g(!0);try{const ae=await ge("get_repo_visual_snapshot",{repoPath:D,forceRefresh:k});h(he=>({...he,[D]:ae}))}finally{as.current.delete(D),as.current.size===0&&g(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach(x=>{bs(x.path),ge("watch_repo",{repoPath:x.path}).catch(console.error)})},[c]),y.useEffect(()=>{let x=!1,k=null;return al("git-activity",D=>{if(x)return;const O=hr(D.payload.repoPath);!O||O===t||bs(O,!0)}).then(D=>{x?D():k=D}).catch(console.error),()=>{x=!0,k&&k()}},[t]);function Rn(x){u(k=>{const D=hr(x.path);if(!D)return k;const O={...x,path:D},he=(k.some(we=>we.path===D)?k.map(we=>we.path===D?O:we):[...k,O]).slice(-Dy);try{localStorage.setItem(Gh,JSON.stringify(he))}catch{}return he})}async function Lo(x){const k=hr(x);if(k){lt(null);try{const[D,O]=await Promise.all([ge("get_repo_info",{repoPath:k}),ge("get_default_branch",{repoPath:k}).catch(()=>"main")]);Rn({path:k,name:D.name,lastOpenedAt:Date.now(),branchName:O}),await bs(k,!0)}catch(D){lt(D instanceof Error?D.message:String(D))}}}function oi(x,k){u(D=>{const O=D.map(ae=>ae.path===x?{...ae,branchName:k}:ae);try{localStorage.setItem(Gh,JSON.stringify(O))}catch{}return O})}function Oo(x){if(x.button!==0)return;const k=x.target;if(k!=null&&k.closest(".window-no-drag"))return;const D=Tm();ge("start_window_drag").catch(()=>D.startDragging()).catch(O=>{console.warn("Failed to start window drag:",O)})}async function Fo(x,k){const O=[];let ae=0;for(;;){const he=await ge("get_merge_nodes",{repoPath:x,branch:k,page:ae,perPage:100});if(O.push(...he.nodes),!he.hasMore||he.nodes.length===0)break;ae+=1}return O}async function co(x,k,D){const O=Array.from(new Set([D,...k.map(we=>we.name)].filter(we=>!!we)));if(O.length===0)return[];const ae=await Promise.all(O.map(we=>Fo(x,we).catch(()=>[]))),he=new Map;for(const we of ae)for(const Ne of we){const Je=`${Ne.targetCommitSha}:${Ne.targetBranch}`;he.has(Je)||he.set(Je,Ne)}return Array.from(he.values())}const vs=x=>x.map(k=>`${k.name}|${k.headSha}|${k.commitsAhead}|${k.commitsBehind}|${k.unpushedCommits}|${k.remoteSyncStatus}`).join("||"),zs=x=>x.map(k=>k.fullSha).join("|"),vn=x=>{var k,D;return x?`${(k=x.branchName)!=null?k:""}|${x.headSha}|${(D=x.parentSha)!=null?D:""}|${x.hasUncommittedChanges?1:0}`:"__none__"};async function Jn(x,k){const D=k!=null?k:Y,[O,ae,he,we,Ne,Je]=await Promise.all([ge("get_branches",{repoPath:x}),ge("get_all_repo_commits",{repoPath:x}),ge("get_unpushed_direct_commits",{repoPath:x,branch:D}).catch(()=>[]),ge("get_checked_out_ref",{repoPath:x}).catch(()=>null),ge("list_worktrees",{repoPath:x}).catch(()=>[]),ge("list_stashes",{repoPath:x}).catch(()=>[])]),ut=await co(x,O,D),$t=await Promise.all([D,...O.map(Dt=>Dt.name)].map(async Dt=>{const sn=await ge("get_branch_unpushed_commit_shas",{repoPath:x,branch:Dt}).catch(()=>[]);return[Dt,sn]}));b(O),S(ut),j(ae),T(he),B(Object.fromEntries($t)),Q(we),oe(Ne),_t(Je)}async function Yi(x){const[k,D,O]=await Promise.all([ge("get_branches",{repoPath:x}).catch(()=>[]),ge("get_all_repo_commits",{repoPath:x}).catch(()=>[]),ge("get_checked_out_ref",{repoPath:x}).catch(()=>null)]);return vs(k)!==vs(xs.current)||zs(D)!==zs(Os.current)||vn(O)!==vn(nn.current)}async function Xo(x){te(null),Xe(!0);try{const[k,D]=await Promise.all([ge("get_repo_info",{repoPath:x}),ge("get_default_branch",{repoPath:x})]);a(k.name),V(D),n(x),await Jn(x,D),$s(x),te({kind:"success",message:`Now targeting worktree at ${x}`})}catch(k){const D=k instanceof Error?k.message:String(k);te({kind:"error",message:D}),console.error("Failed to switch worktree:",D)}finally{Xe(!1)}}async function so(x,k){if(!(!t||be)){Ee(!0),te(null);try{await ge("remove_worktree",{repoPath:t,worktreePath:x,force:k}),await Jn(t),te({kind:"success",message:`Removed worktree at ${x}`})}catch(D){const O=D instanceof Error?D.message:String(D);te({kind:"error",message:O}),console.error("Failed to remove worktree:",O)}finally{Ee(!1)}}}function xo(x,k){var D;a(k.name||fd(x)),V(k.defaultBranch||"main"),b(k.branches),S(k.mergeNodes),j(k.directCommits),T(k.unpushedDirectCommits),B(k.unpushedCommitShasByBranch),Q(k.checkedOutRef),oe(k.worktrees),_t(k.stashes),cn(k.branchCommitPreviews),Bt((D=k.branchParentByName)!=null?D:{}),Ot(k.branchUniqueAheadCounts),n(x)}async function zo(x,k){try{const[D,O]=await Promise.all([ge("get_repo_info",{repoPath:x}),ge("get_default_branch",{repoPath:x})]);if(k!==Ls.current)return;const ae=await ge("get_repo_visual_snapshot",{repoPath:x,forceRefresh:!0});if(k!==Ls.current)return;h(he=>({...he,[x]:ae})),a(D.name),V(O),(t===x||Ls.current===k)&&xo(x,ae),$s(x)}catch(D){if(k!==Ls.current)return;console.error("Background snapshot refresh failed:",D)}}async function rs(x){const k=++Ls.current,D=hr(x);if(!D)return;const O=d[D];if(O!=null&&O.loaded){lt(null),xo(D,O),Rn({path:D,name:O.name||fd(D),lastOpenedAt:Date.now(),branchName:O.defaultBranch}),Xe(!1),ve(!1),zo(D,k);return}if(ve(!0),Xe(!0),lt(null),await new Promise(ae=>setTimeout(ae,15)),k===Ls.current)try{const[ae,he]=await Promise.all([ge("get_repo_info",{repoPath:D}),ge("get_default_branch",{repoPath:D})]);if(k!==Ls.current)return;a(ae.name),V(he);const we=await ge("get_repo_visual_snapshot",{repoPath:D,forceRefresh:!0});if(k!==Ls.current)return;h(Ne=>({...Ne,[D]:we})),xo(D,we),Rn({path:D,name:ae.name,lastOpenedAt:Date.now(),branchName:he}),Xe(!1),ve(!1),$s(D)}catch(ae){if(k!==Ls.current)return;console.error("Failed to load repo:",ae),lt(ae instanceof Error?ae.message:String(ae)),n(null),ve(!1),Xe(!1)}}async function $s(x){const k=++Fs.current;try{if(k!==Fs.current)return;ft(!1),H(null);const D=await ge("get_github_info",{repoPath:x}),O=await ge("get_github_auth_status");if(k!==Fs.current||(it(O),!O.ghAvailable||!O.authenticated))return;const ae=await ge("get_open_prs",{owner:D.owner,repo:D.repo});if(k!==Fs.current)return;P(ae),ft(!0)}catch(D){if(k!==Fs.current)return;console.log("GitHub data not available:",D),H(D instanceof Error?D.message:String(D)),ft(!1)}}y.useEffect(()=>{let x=null,k=!1;const D=(()=>{try{return Tm().label}catch{return null}})(),O=async he=>{var Ne;const we=(Ne=he==null?void 0:he.path)==null?void 0:Ne.trim();!we||k||t!==we&&await rs(we)};return(async()=>{D==="main"&&(x=await al("gitviz://open-repo",async we=>{await O(we.payload)}));const he=await ge("take_pending_open_repo");await O(he)})(),()=>{k=!0,x&&x()}},[t]),y.useEffect(()=>{xs.current=_},[_]),y.useEffect(()=>{Os.current=C},[C]),y.useEffect(()=>{nn.current=U},[U]),y.useEffect(()=>{Mo.current=Mn},[Mn]),y.useEffect(()=>{if(!t||!Y||Xs)return;ge("watch_repo",{repoPath:t}).catch(console.error);let x=!1,k=!1,D,O=null;const ae=new Set;let he=null,we=!1,Ne=!1,Je=null,ut=null,$t=null,Dt=null;const sn=en=>en.map(qe=>`${qe.name}|${qe.headSha}|${qe.commitsAhead}|${qe.commitsBehind}|${qe.unpushedCommits}|${qe.remoteSyncStatus}`).join("||"),Ut=en=>en.map(qe=>{var ts;return`${qe.targetCommitSha}:${qe.targetBranch}:${((ts=qe.parentShas)!=null?ts:[]).join(",")}`}).join("|"),zn=en=>en.map(qe=>qe.fullSha).join("|"),Dn=async()=>{if(x){k=!0;return}x=!0;try{const en=ge("get_branches",{repoPath:t}),qe=ge("get_checked_out_ref",{repoPath:t}).catch(()=>null),ts=ge("list_worktrees",{repoPath:t}).catch(()=>[]),Ks=ge("get_all_repo_commits",{repoPath:t}),Do=ge("get_unpushed_direct_commits",{repoPath:t,branch:Y}).catch(()=>[]),[js,Ms,mo,yn,Cs]=await Promise.allSettled([en,qe,ts,Ks,Do]);if(we)return;const $n=js.status==="fulfilled"?js.value:null;if($n){const us=sn($n);us!==ut&&(ut=us,b($n))}if(yn.status==="fulfilled"){const us=yn.value,ke=zn(us);ke!==Dt&&(Dt=ke,j(us))}Cs.status==="fulfilled"&&T(Cs.value),mo.status==="fulfilled"&&oe(mo.value);const ai=[Y,...($n!=null?$n:[]).map(us=>us.name)],ta=await Promise.all(ai.map(async us=>{const ke=await ge("get_branch_unpushed_commit_shas",{repoPath:t,branch:us}).catch(()=>[]);return[us,ke]}));if(we||B(Object.fromEntries(ta)),ge("list_stashes",{repoPath:t}).then(us=>{we||_t(us)}).catch(()=>{}),Xe(!1),Ms.status==="fulfilled"&&Ms.value){const us=Ms.value;Q(ke=>ke&&ke.branchName===us.branchName&&ke.headSha===us.headSha&&ke.parentSha===us.parentSha&&ke.hasUncommittedChanges===us.hasUncommittedChanges?ke:us)}const gi=await co(t,$n!=null?$n:[],Y).catch(()=>[]);if(we)return;const po=Ut(gi);po!==$t&&($t=po,S(gi))}catch(en){console.error("Auto-refresh failed:",en)}finally{Xe(!1),x=!1,k&&!we&&(k=!1,D=window.setTimeout(Dn,200))}},oo=async()=>{var en;if(!Ne){Ne=!0;try{const qe=await ge("get_checked_out_ref",{repoPath:t});if(we)return;const ts=`${(en=qe.branchName)!=null?en:""}|${qe.headSha}|${qe.hasUncommittedChanges?1:0}`,Ks=Je,Do=!Ks||Ks.split("|").slice(0,2).join("|")!==ts.split("|").slice(0,2).join("|");Je=ts,Q(js=>js&&js.branchName===qe.branchName&&js.headSha===qe.headSha&&js.hasUncommittedChanges===qe.hasUncommittedChanges?js:qe),qe.branchName&&oi(t,qe.branchName),Do&&bo()}catch{}finally{Ne=!1}}},bo=()=>{clearTimeout(D),D=window.setTimeout(Dn,100);const en=[450];for(const qe of en){const ts=window.setTimeout(()=>{ae.delete(ts),Dn()},qe);ae.add(ts)}};return al("git-activity",en=>{if(hr(en.payload.repoPath)!==t)return;if(en.payload.kind==="local"){bs(t,!0),oo();return}bs(t,!0),bo()}).then(en=>{we?en():he=en}).catch(console.error),Dn(),O=window.setInterval(()=>{oo()},700),oo(),()=>{we=!0,clearTimeout(D),O!=null&&window.clearInterval(O);for(const en of ae)window.clearTimeout(en);ae.clear(),he&&he()}},[t,Y,Xs]),y.useEffect(()=>{if(!t||!Y||!Xs)return;ge("watch_repo",{repoPath:t}).catch(console.error);let x=!1,k=!1,D=!1,O=null;const ae=async()=>{if(!x){if(Mo.current){k=!0;return}if(D){k=!0;return}D=!0;try{if(!await Yi(t)||x)return;await Jn(t,Y)}catch(we){console.warn("Frozen git-activity refresh failed:",we)}finally{D=!1,k&&!x&&(k=!1,window.setTimeout(()=>{ae()},0))}}},he=()=>{k=!0,ae()};return al("git-activity",we=>{hr(we.payload.repoPath)===t&&(bs(t,!0),he())}).then(we=>{x?we():O=we}).catch(console.error),()=>{x=!0,O&&O()}},[t,Y,Xs]);async function Cn(){if(t){Et(!0),H(null);try{await ge("authenticate_github");const x=await ge("get_github_auth_status");it(x),x.authenticated?await $s(t):x.message&&H(x.message)}catch(x){H(x instanceof Error?x.message:String(x))}finally{Et(!1)}}}const uo=new Set(N.map(x=>x.branchName)),ls=14*864e5,Fn=Date.now(),_i=_.filter(x=>x.status==="stale"),To=_i.filter(x=>uo.has(x.name)||Fn-new Date(x.lastCommitDate).getTime()<=ls),qo=_i.filter(x=>!uo.has(x.name)&&Fn-new Date(x.lastCommitDate).getTime()>ls),Xt=x=>{var k;return Object.prototype.hasOwnProperty.call(At,x.name)?Math.max(0,(k=At[x.name])!=null?k:0):Math.max(0,x.commitsAhead)};y.useEffect(()=>{st({}),ys.current=null,Et(!1),it(null),H(null),P([]),te(null)},[t]),y.useEffect(()=>{var we;if(!t||!Y){st({}),cn({}),Bt({}),Ot({}),ys.current=null;return}const x=_.map(Ne=>{var Je;return`${Ne.name}:${Ne.headSha}:${(Je=Ne.parentBranch)!=null?Je:""}:${Ne.commitsAhead}`}).join("|"),k=v.map(Ne=>{var Je,ut;return`${Ne.fullSha}:${(ut=(Je=Ne.parentShas)==null?void 0:Je[1])!=null?ut:""}`}).join("|"),D=`${t}|${Y}|${x}|${k}`;if(ys.current===D)return;ys.current=D;const O={},ae={};for(const Ne of _){if(Ne.name===Y)continue;const Je=C.filter(ut=>ut.branch===Ne.name).map(ut=>{var $t;return{fullSha:ut.fullSha,sha:ut.sha,parentSha:($t=ut.parentSha)!=null?$t:null,message:ut.message,author:ut.author,date:ut.date,kind:"commit"}});O[Ne.name]=Je,ae[Ne.name]=Je.length}const he={[Y]:null};for(const Ne of _)he[Ne.name]=(we=Ne.parentBranch)!=null?we:null;st({}),cn(O),Bt(he),Ot(ae)},[t,Y,_,v,C]),y.useEffect(()=>{if(!Z){Fe(!1);return}Fe(!0);const x=window.setTimeout(()=>{Fe(!1)},Ny),k=window.setTimeout(()=>{te(null)},Ny+Sw);return()=>{window.clearTimeout(x),window.clearTimeout(k)}},[Z]),y.useEffect(()=>{if(!t||_.length===0)return;const x=O=>new Promise(ae=>setTimeout(ae,O));async function k(){const ae=`${await ge("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${ae}`),await x(800),await ge("screenshot",{path:`${ae}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${ae}`)}const D=O=>{(O.metaKey||O.ctrlKey)&&O.shiftKey&&O.key==="S"&&(O.preventDefault(),k())};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[t,i,_]);function Di(){Rt(!0),setTimeout(()=>{zt(!1),Rt(!1),dt("active"),ze(null)},100)}async function Is(x){if(!t)return;te(null);const k=/^STASH:(\d+)$/.exec(x.commitSha);if(k){try{const D=parseInt(k[1],10),O=await ge("apply_stash_restore",{repoPath:t,stashIndex:D});Q(O),await Jn(t);const ae=`Stash ${D+1}`,he=O.branchName?` on branch ${O.branchName}`:" at the stash base (detached HEAD)";te({kind:"success",message:`Restored ${ae}${he}; stash applied and dropped (uncommitted changes).`})}catch(D){const O=D instanceof Error?D.message:String(D);te({kind:"error",message:O}),console.error("Failed to apply stash:",O)}return}if(x.branchName){const D=(ae,he)=>{const we=ae.replace(/\\/g,"/").replace(/\/+$/,""),Ne=he.replace(/\\/g,"/").replace(/\/+$/,"");return we===Ne||we.toLowerCase()===Ne.toLowerCase()},O=se.find(ae=>ae.pathExists===!1||ae.isCurrent||t&&D(ae.path,t)?!1:ae.branchName===x.branchName);if(O){await Xo(O.path);return}}try{let D="";(await ge("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await ge("stash_push",{repoPath:t,includeUntracked:!0}),D="Stashed local changes (including untracked), then ",await Jn(t));const ae=x.branchName?await ge("checkout_branch",{repoPath:t,branchName:x.branchName}):await ge("checkout_ref",{repoPath:t,refName:x.commitSha}),he=await ge("get_checked_out_ref",{repoPath:t}).catch(()=>ae);Q(he),await Jn(t);const we=he.branchName?he.branchName:`${he.headSha.slice(0,7)} (detached)`;te({kind:"success",message:`${D}Checked out ${we}`})}catch(D){const O=D instanceof Error?D.message:String(D);te({kind:"error",message:O}),console.error("Failed to checkout commit:",O)}}async function Go(){if(!(!t||qt)){te(null),An(!0);try{if(!(await ge("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){te({kind:"error",message:"No local changes to stash."});return}await ge("stash_push",{repoPath:t,includeUntracked:!0}),await Jn(t),te({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(x){const k=x instanceof Error?x.message:String(x);te({kind:"error",message:k}),console.error("Failed to stash:",k)}finally{An(!1)}}}async function $o(x){if(!t||os)return!1;const k=x.trim();if(!k)return te({kind:"error",message:"Enter a commit message."}),!1;te(null),gn(!0);try{if(!(await ge("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return te({kind:"error",message:"No local changes to commit."}),!1;const O=await ge("commit_working_tree",{repoPath:t,message:k});return Q(O),await Jn(t),te({kind:"success",message:"Committed local changes."}),!0}catch(D){const O=D instanceof Error?D.message:String(D);return te({kind:"error",message:O}),console.error("Failed to commit:",O),!1}finally{gn(!1)}}async function Io(){if(!t||lo)return!1;te(null),is(!0);try{if(!(await ge("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return te({kind:"error",message:"No local changes to stage."}),!1;const k=await ge("stage_working_tree",{repoPath:t});return Q(k),await Jn(t),te({kind:"success",message:"Staged all changes."}),!0}catch(x){const k=x instanceof Error?x.message:String(x);return te({kind:"error",message:k}),console.error("Failed to stage:",k),!1}finally{is(!1)}}async function Ps(x,k){if(!(!t||Wn)){Wt(!0),te(null);try{const D=/^STASH:(\d+)$/.exec(x);let O;if(D){const ae=parseInt(D[1],10);O=await ge("move_stash_to_new_branch",{repoPath:t,stashIndex:ae,branchName:k})}else O=await ge("create_branch_from_uncommitted",{repoPath:t,branchName:k});Q(O),await Jn(t),te({kind:"success",message:`Moved to new branch "${k}"`})}catch(D){const O=D instanceof Error?D.message:String(D);te({kind:"error",message:O}),console.error("Failed to create branch from node:",O)}finally{Wt(!1)}}}async function Eo(x){if(!(!t||Wn)){Wt(!0),te(null);try{const k=await ge("create_root_branch",{repoPath:t,branchName:x});Q(k),await Jn(t),te({kind:"success",message:`Created new root branch "${x}"`})}catch(k){const D=k instanceof Error?k.message:String(k);te({kind:"error",message:D}),console.error("Failed to create root branch:",D)}finally{Wt(!1)}}}async function Es(x,k){if(!t)return;const D=Array.from(new Set(x.filter(O=>!!O&&O!==k)));if(D.length!==0){te(null),De(!0);try{let O=null;for(const ae of D)O=await ge("merge_ref_into_branch",{repoPath:t,sourceRef:ae,targetBranch:k});await Jn(t),O&&Q(O),te({kind:"success",message:D.length===1?`Merged ${D[0].slice(0,7)} into ${k}`:`Merged ${D.length} commits into ${k}`})}catch(O){const ae=O instanceof Error?O.message:String(O);te({kind:"error",message:ae}),console.error("Failed to merge refs into branch:",ae)}finally{De(!1)}}}async function wn(){if(!(!t||St)){te(null),Ve(!0);try{const x=await ge("push_all_unpushed_branches",{repoPath:t});await Jn(t),te({kind:"success",message:x.length>0?x.length===1?`Pushed ${x[0].branchName}`:`Pushed ${x.length} branches`:"Everything local is already pushed."})}catch(x){const k=x instanceof Error?x.message:String(x);te({kind:"error",message:k}),console.error("Failed to push all branches:",k)}finally{Ve(!1)}}}async function fo(){if(!(!t||St)){te(null),Ve(!0);try{const x=await ge("push_current_branch",{repoPath:t});await Jn(t),te({kind:"success",message:`Pushed ${x.branchName}`})}catch(x){const k=x instanceof Error?x.message:String(x);te({kind:"error",message:k}),console.error("Failed to push current branch:",k)}finally{Ve(!1)}}}async function Xn(x){var D;if(!t||St)return;const k=Array.from(new Map(x.filter(O=>O.branchName&&O.targetSha).map(O=>[O.branchName,O])).values());if(k.length!==0){te(null),Ve(!0);try{for(const O of k)await ge("push_branch",{repoPath:t,branchName:O.branchName,targetSha:O.targetSha});await Jn(t),te({kind:"success",message:k.length===1?`Pushed ${k[0].branchName} through ${(D=k[0].targetSha)==null?void 0:D.slice(0,7)}`:`Pushed ${k.length} selected commit ranges`})}catch(O){const ae=O instanceof Error?O.message:String(O);te({kind:"error",message:ae}),console.error("Failed to push selected commits:",ae)}finally{Ve(!1)}}}async function ws(x){var he;if(!t||bt)return;const k=Array.from(new Set(x.branchNames.filter(we=>we&&we!==Y))),D=!!x.discardUncommittedChanges,O=(he=x.stashIndices)!=null?he:[],ae=Array.from(new Set(O)).sort((we,Ne)=>Ne-we);if(!(k.length===0&&!D&&ae.length===0)){te(null),pt(!0);try{for(const Je of ae)await ge("stash_drop",{repoPath:t,stashIndex:Je});const we=k.length>0||D?await ge("delete_selected_elements",{repoPath:t,branchNames:k,discardUncommittedChanges:D}):{deletedBranches:[],discardedUncommittedChanges:!1};await Jn(t);const Ne=[];ae.length>0&&Ne.push(ae.length===1?`removed stash ${ae[0]+1}`:`removed ${ae.length} stashes`),we.discardedUncommittedChanges&&Ne.push("discarded local uncommitted changes"),we.deletedBranches.length>0&&Ne.push(we.deletedBranches.length===1?`deleted ${we.deletedBranches[0]}`:`deleted ${we.deletedBranches.length} branches`),te({kind:"success",message:Ne.length>0?Ne.join(" and "):"Nothing to delete."})}catch(we){const Ne=we instanceof Error?we.message:String(we);te({kind:"error",message:Ne}),console.error("Failed to delete selected elements:",Ne)}finally{pt(!1)}}}function qn(x){ze(x),He(k=>{var D;return{branch:x,seq:((D=k==null?void 0:k.seq)!=null?D:0)+1}})}function Qt(x){x&&(je(x),ie(k=>k+1))}function qs(x){x&&(le(x),ie(k=>k+1))}y.useEffect(()=>{var D;const x=U!=null&&U.hasUncommittedChanges?"WORKING_TREE":(D=U==null?void 0:U.headSha)!=null?D:null;if(!x)return;const k=`${t!=null?t:"__no-repo__"}|${tn}|${x}`;Zn.current!==k&&(Zn.current=k,je(x),ie(O=>O+1))},[U==null?void 0:U.hasUncommittedChanges,U==null?void 0:U.headSha,tn,t]),y.useEffect(()=>{Zn.current=null},[t]);const{enrichedBranches:es,enrichedBranchCommitPreviews:Gs,enrichedBranchUniqueAheadCounts:cs,enrichedDirectCommits:Ao}=y.useMemo(()=>{var Do,js,Ms,mo;const x=Ix(un,_,C,Ht,At,Y);let k=x.branches,D=x.directCommits,O=x.branchCommitPreviews,ae=x.branchUniqueAheadCounts;if(!(U!=null&&U.hasUncommittedChanges))return{enrichedBranches:k,enrichedDirectCommits:D,enrichedBranchCommitPreviews:O,enrichedBranchUniqueAheadCounts:ae};const he=U.headSha||U.parentSha||null,we=(js=(Do=D[0])==null?void 0:Do.fullSha)!=null?js:null,Ne=(yn,Cs)=>!yn||!Cs?!1:yn===Cs||yn.startsWith(Cs)||Cs.startsWith(yn),Je=[{name:Y,headSha:we!=null?we:"",isDefault:!0},...k.map(yn=>({name:yn.name,headSha:yn.headSha,isDefault:!1}))],ut=U.branchName?Je.find(yn=>yn.name===U.branchName):void 0,$t=he?Je.filter(yn=>Ne(yn.headSha,he)):[],Dt=(Ms=ut!=null?ut:$t.find(yn=>yn.isDefault))!=null?Ms:$t[0],sn=!!(Dt&&he&&Ne(Dt.headSha,he)),Ut=Dt&&!Dt.isDefault?k.find(yn=>yn.name===Dt.name):void 0,zn=(()=>{var Cs;if(!he)return null;const yn=D.find($n=>Ne($n.fullSha,he)||Ne($n.sha,he));if(yn!=null&&yn.date)return yn.date;if(Ut){const $n=((Cs=O[Ut.name])!=null?Cs:[]).find(ai=>Ne(ai.fullSha,he)||Ne(ai.sha,he));if($n!=null&&$n.date)return $n.date}return null})(),Dn=zn?new Date(zn).getTime():Number.NaN,oo=Date.now(),bo=Number.isFinite(Dn)?Math.max(oo,Dn+1):oo,en=new Date(bo).toISOString(),qe={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:he,message:"Local uncommitted changes",author:"You",date:en,kind:"uncommitted"},ts={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:he,childShas:[],branch:Y,message:"Local uncommitted changes",author:"You",date:en,kind:"uncommitted"};if(sn&&(Dt!=null&&Dt.isDefault))return{enrichedBranches:k,enrichedBranchCommitPreviews:O,enrichedBranchUniqueAheadCounts:ae,enrichedDirectCommits:[...D,ts]};if(sn&&Ut)return{enrichedBranches:k.map(Cs=>Cs.name===Ut.name?{...Cs,commitsAhead:Cs.commitsAhead+1,unpushedCommits:Cs.unpushedCommits+1,lastCommitDate:en,headSha:"WORKING_TREE"}:Cs),enrichedDirectCommits:D,enrichedBranchCommitPreviews:{...O,[Ut.name]:[qe,...O[Ut.name]||[]]},enrichedBranchUniqueAheadCounts:{...ae,[Ut.name]:Math.max(0,(mo=Object.prototype.hasOwnProperty.call(ae,Ut.name)?ae[Ut.name]:Ut.commitsAhead)!=null?mo:0)+1}};const Ks={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:en,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:he!=null?he:void 0,parentBranch:(Dt==null?void 0:Dt.name)||U.branchName||Y};return{enrichedBranches:[Ks,...k],enrichedBranchCommitPreviews:{...O,[Ks.name]:[qe]},enrichedBranchUniqueAheadCounts:{...ae,[Ks.name]:1},enrichedDirectCommits:D}},[_,Ht,At,U,Y,C,un]),Ss=y.useMemo(()=>{const x={...Ke};return x[Y]=null,x},[Ke,Y,es]),ii=y.useMemo(()=>fp(es,Y,Gs,Ss),[es,Y,Gs,Ss]),As=y.useMemo(()=>Sd({lanes:ii,branches:es,mergeNodes:v,directCommits:Ao,unpushedDirectCommits:M,defaultBranch:Y,branchCommitPreviews:Gs,branchParentByName:Ss,branchUniqueAheadCounts:cs,manuallyOpenedClumps:X,manuallyClosedClumps:Te,isDebugOpen:!1,gridSearchQuery:K,gridFocusSha:ue,checkedOutRef:U!=null?U:null,orientation:tn}),[ii,es,v,Ao,M,Y,Gs,Ss,cs,X,Te,K,ue,(Ds=U==null?void 0:U.headSha)!=null?Ds:null,(ho=U==null?void 0:U.branchName)!=null?ho:null,tn]);return l.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:Oo}),l.jsx("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsx(vw,{className:"min-h-0 w-[27rem] shrink-0 border-r border-border/50 pb-4 pt-16",projects:pi,activeProjectPath:t,onSelectProject:rs,onAddProject:()=>{(async()=>{var x,k;try{const D=await Iv({directory:!0,multiple:!1,defaultPath:(k=(x=c[0])==null?void 0:x.path)!=null?k:void 0});typeof D=="string"&&D&&await Lo(D)}catch(D){lt(D instanceof Error?D.message:String(D))}})()},projectLoading:Re||p,projectError:$e,branches:es,defaultBranch:Y,checkedOutRef:U,manuallyOpenedClumps:X,manuallyClosedClumps:Te,setManuallyOpenedClumps:me,setManuallyClosedClumps:A,gridLayoutModel:As,onSelectCommit:Qt,onSelectBranch:qs}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx(yw,{branches:es,mergeNodes:v,directCommits:Ao,unpushedDirectCommits:M,unpushedCommitShasByBranch:I,defaultBranch:Y,branchCommitPreviews:Gs,branchParentByName:Ss,branchUniqueAheadCounts:cs,gridSearchQuery:K,gridSearchJumpToken:z,gridFocusSha:ue,onGridSearchResultCountChange:q,onGridSearchFocusChange:je,checkedOutRef:U,onCommitClick:Is,onMergeRefsIntoBranch:Es,mergeInProgress:Ue,onPushAllBranches:wn,onPushCurrentBranch:fo,onPushCommitTargets:Xn,pushInProgress:St,onDeleteSelection:ws,deleteInProgress:bt,worktrees:se,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:so,removeWorktreeInProgress:be,onSwitchToWorktree:Xo,onStashLocalChanges:Go,stashInProgress:qt,stashDisabled:!1,onCommitLocalChanges:$o,commitInProgress:os,commitDisabled:!1,onStageAllChanges:Io,stageInProgress:lo,onCreateBranchFromNode:Ps,onCreateRootBranch:Eo,createBranchFromNodeInProgress:Wn,onInteractionChange:an,manuallyOpenedClumps:X,manuallyClosedClumps:Te,setManuallyOpenedClumps:me,setManuallyClosedClumps:A,layoutModel:As,orientation:tn}),l.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"flex shrink-0 rounded-full border border-border bg-muted/20 p-0.5 shadow-sm",role:"radiogroup","aria-label":"Commit map layout",children:[l.jsx("button",{type:"button",role:"radio","aria-checked":tn==="horizontal",tabIndex:0,onClick:()=>Qe("horizontal"),onKeyDown:x=>{(x.key==="ArrowRight"||x.key==="ArrowDown")&&(x.preventDefault(),Qe("vertical"))},className:Kh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",tn==="horizontal"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),l.jsx("button",{type:"button",role:"radio","aria-checked":tn==="vertical",tabIndex:0,onClick:()=>Qe("vertical"),onKeyDown:x=>{(x.key==="ArrowLeft"||x.key==="ArrowUp")&&(x.preventDefault(),Qe("horizontal"))},className:Kh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",tn==="vertical"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]}),(rt==null?void 0:rt.ghAvailable)&&!rt.authenticated&&l.jsx("button",{onClick:Cn,disabled:at,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:at?"Connecting GitHub...":"Connect GitHub"}),rt&&!rt.ghAvailable&&l.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),Ze&&l.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:Ze,children:Ze}),l.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[l.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),l.jsx("input",{value:K,onChange:x=>le(x.target.value),onKeyDown:x=>{x.key==="Enter"&&(x.preventDefault(),ie(k=>k+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),l.jsx("button",{type:"button",onClick:()=>ie(x=>x+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),ee!=null&&l.jsxs("span",{className:"text-xs text-muted-foreground",children:[ee," match",ee===1?"":"es"]}),ue&&l.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",ue.slice(0,7)]}),Z&&l.jsx("span",{className:Kh("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",_e?"opacity-100":"opacity-0",Z.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:Z.message,children:Z.message})]})})]}),nt&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${ct?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Di,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>dt("active"),className:`text-xs font-medium transition-colors ${Oe==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[To.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>dt("inactive"),className:`text-xs font-medium transition-colors ${Oe==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[qo.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Oe==="active"?To:qo).map(x=>{const k=(Ge==null?void 0:Ge.name)===x.name,D=Xt(x);return l.jsxs("button",{onClick:()=>qn(x),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${k?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:x.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[D>0&&`${D} ahead`,D>0&&x.commitsBehind>0&&", ",x.commitsBehind>0&&`${x.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},x.name)})})]})]})})]})}var Ec=Ex(),jw=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Mw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=jw}var Qn=Mw,Tw=`.icon-transitions-module__iconState___uqK9J {
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
}`,Ew={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Tw}var Vn=Ew,Aw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Dw=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Nw=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Rw=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${Vn.iconState} ${n?Vn.hiddenScaled:Vn.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${Vn.iconState} ${n?Vn.visibleScaled:Vn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Bw=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${Vn.iconStateFast} ${i?Vn.visibleScaled:u?Vn.sending:Vn.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${Vn.iconStateFast} ${a?Vn.visibleScaled:Vn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Vn.iconStateFast} ${c?Vn.visibleScaled:Vn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Lw=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Vn.iconFade} ${n?Vn.visible:Vn.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Vn.iconFade} ${n?Vn.hidden:Vn.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Ow=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Vn.iconFadeFast} ${n?Vn.hidden:Vn.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${Vn.iconFadeFast} ${n?Vn.visible:Vn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),zw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),$w=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Px=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Iw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Pw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Hw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Uw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Vw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Yw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Ww=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Hx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Qh=Hx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Rm="feedback-freeze-styles",Zh="__agentation_freeze";function Fw(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Zh]||(t[Zh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Zh]}var dn=Fw();typeof window<"u"&&!dn.installed&&(dn.origSetTimeout=window.setTimeout.bind(window),dn.origSetInterval=window.setInterval.bind(window),dn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?dn.origSetTimeout(t,n):dn.origSetTimeout((...a)=>{dn.frozen?dn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?dn.origSetInterval(t,n):dn.origSetInterval((...a)=>{dn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>dn.origRAF(n=>{dn.frozen?dn.frozenRAFQueue.push(t):t(n)}),dn.installed=!0);var Pt=dn.origSetTimeout,Xw=dn.origSetInterval,rl=dn.origRAF;function qw(t){return t?Hx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function Gw(){if(typeof document>"u"||dn.frozen)return;dn.frozen=!0,dn.frozenTimeoutQueue=[],dn.frozenRAFQueue=[];let t=document.getElementById(Rm);t||(t=document.createElement("style"),t.id=Rm),t.textContent=`
    *${Qh},
    *${Qh}::before,
    *${Qh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),dn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;qw(i)||(n.pause(),dn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Ry(){var i;if(typeof document>"u"||!dn.frozen)return;dn.frozen=!1;const t=dn.frozenTimeoutQueue;dn.frozenTimeoutQueue=[];for(const a of t)dn.origSetTimeout(()=>{if(dn.frozen){dn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=dn.frozenRAFQueue;dn.frozenRAFQueue=[];for(const a of n)dn.origRAF(c=>{if(dn.frozen){dn.frozenRAFQueue.push(a);return}a(c)});for(const a of dn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}dn.pausedAnimations=[],(i=document.getElementById(Rm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Jh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var kd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:b="#3c82f7",isExiting:v=!1,lightMode:S=!1,computedStyles:C},j){const[M,T]=y.useState(u),[I,B]=y.useState(!1),[N,P]=y.useState("initial"),[Y,V]=y.useState(!1),[U,Q]=y.useState(!1),se=y.useRef(null),oe=y.useRef(null),be=y.useRef(null),Ee=y.useRef(null);y.useEffect(()=>{v&&N!=="exit"&&P("exit")},[v,N]),y.useEffect(()=>{Pt(()=>{P("enter")},0);const me=Pt(()=>{P("entered")},200),Te=Pt(()=>{const A=se.current;A&&(Jh(A),A.selectionStart=A.selectionEnd=A.value.length,A.scrollTop=A.scrollHeight)},50);return()=>{clearTimeout(me),clearTimeout(Te),be.current&&clearTimeout(be.current),Ee.current&&clearTimeout(Ee.current)}},[]);const K=y.useCallback(()=>{Ee.current&&clearTimeout(Ee.current),B(!0),Ee.current=Pt(()=>{B(!1),Jh(se.current)},250)},[]);y.useImperativeHandle(j,()=>({shake:K}),[K]);const le=y.useCallback(()=>{P("exit"),be.current=Pt(()=>{p()},150)},[p]),z=y.useCallback(()=>{M.trim()&&h(M.trim())},[M,h]),ie=y.useCallback(me=>{me.stopPropagation(),!me.nativeEvent.isComposing&&(me.key==="Enter"&&!me.shiftKey&&(me.preventDefault(),z()),me.key==="Escape"&&le())},[z,le]),X=[Qn.popup,S?Qn.light:"",N==="enter"?Qn.enter:"",N==="entered"?Qn.entered:"",N==="exit"?Qn.exit:"",I?Qn.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:oe,className:X,"data-annotation-popup":!0,style:_,onClick:me=>me.stopPropagation(),children:[l.jsxs("div",{className:Qn.header,children:[C&&Object.keys(C).length>0?l.jsxs("button",{className:Qn.headerToggle,onClick:()=>{const me=U;Q(!U),me&&Pt(()=>Jh(se.current),0)},type:"button",children:[l.jsx("svg",{className:`${Qn.chevron} ${U?Qn.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:Qn.element,children:n})]}):l.jsx("span",{className:Qn.element,children:n}),i&&l.jsx("span",{className:Qn.timestamp,children:i})]}),C&&Object.keys(C).length>0&&l.jsx("div",{className:`${Qn.stylesWrapper} ${U?Qn.expanded:""}`,children:l.jsx("div",{className:Qn.stylesInner,children:l.jsx("div",{className:Qn.stylesBlock,children:Object.entries(C).map(([me,Te])=>l.jsxs("div",{className:Qn.styleLine,children:[l.jsx("span",{className:Qn.styleProperty,children:me.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:Qn.styleValue,children:Te}),";"]},me))})})}),a&&l.jsxs("div",{className:Qn.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:se,className:Qn.textarea,style:{borderColor:Y?b:void 0},placeholder:c,value:M,onChange:me=>T(me.target.value),onFocus:()=>V(!0),onBlur:()=>V(!1),rows:2,onKeyDown:ie}),l.jsxs("div",{className:Qn.actions,children:[g&&l.jsx("div",{className:Qn.deleteWrapper,children:l.jsx("button",{className:Qn.deleteButton,onClick:g,type:"button",children:l.jsx(Vw,{size:22})})}),l.jsx("button",{className:Qn.cancel,onClick:le,children:"Cancel"}),l.jsx("button",{className:Qn.submit,style:{backgroundColor:b,opacity:M.trim()?1:.4},onClick:z,disabled:!M.trim(),children:d})]})]})}),Kw=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),b=y.useRef(null),v=()=>{if(g.current){const j=g.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},S=()=>{d(!0),b.current&&(clearTimeout(b.current),b.current=null),v(),_.current=Pt(()=>{c(!0)},500)},C=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),b.current=Pt(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),b.current&&clearTimeout(b.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:g,onMouseEnter:S,onMouseLeave:C,...i,children:n}),u&&Ec.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},Qw=`.styles-module__tooltip___mcXL2 {
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
}`,Zw={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=Qw}var By=Zw,br=({content:t})=>l.jsx(Kw,{className:By.tooltip,content:t,children:l.jsx(Nw,{className:By.tooltipIcon})}),xt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Ux=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...xt.navigation},{type:"header",label:"Header",...xt.header},{type:"hero",label:"Hero",...xt.hero},{type:"section",label:"Section",...xt.section},{type:"sidebar",label:"Sidebar",...xt.sidebar},{type:"footer",label:"Footer",...xt.footer},{type:"modal",label:"Modal",...xt.modal},{type:"banner",label:"Banner",...xt.banner},{type:"drawer",label:"Drawer",...xt.drawer},{type:"popover",label:"Popover",...xt.popover},{type:"divider",label:"Divider",...xt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...xt.card},{type:"text",label:"Text",...xt.text},{type:"image",label:"Image",...xt.image},{type:"video",label:"Video",...xt.video},{type:"table",label:"Table",...xt.table},{type:"grid",label:"Grid",...xt.grid},{type:"list",label:"List",...xt.list},{type:"chart",label:"Chart",...xt.chart},{type:"codeBlock",label:"Code Block",...xt.codeBlock},{type:"map",label:"Map",...xt.map},{type:"timeline",label:"Timeline",...xt.timeline},{type:"calendar",label:"Calendar",...xt.calendar},{type:"accordion",label:"Accordion",...xt.accordion},{type:"carousel",label:"Carousel",...xt.carousel},{type:"logo",label:"Logo",...xt.logo},{type:"faq",label:"FAQ",...xt.faq},{type:"gallery",label:"Gallery",...xt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...xt.button},{type:"input",label:"Input",...xt.input},{type:"search",label:"Search",...xt.search},{type:"form",label:"Form",...xt.form},{type:"tabs",label:"Tabs",...xt.tabs},{type:"dropdown",label:"Dropdown",...xt.dropdown},{type:"toggle",label:"Toggle",...xt.toggle},{type:"stepper",label:"Stepper",...xt.stepper},{type:"rating",label:"Rating",...xt.rating},{type:"fileUpload",label:"File Upload",...xt.fileUpload},{type:"checkbox",label:"Checkbox",...xt.checkbox},{type:"radio",label:"Radio",...xt.radio},{type:"slider",label:"Slider",...xt.slider},{type:"datePicker",label:"Date Picker",...xt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...xt.avatar},{type:"badge",label:"Badge",...xt.badge},{type:"tag",label:"Tag",...xt.tag},{type:"breadcrumb",label:"Breadcrumb",...xt.breadcrumb},{type:"pagination",label:"Pagination",...xt.pagination},{type:"progress",label:"Progress",...xt.progress},{type:"alert",label:"Alert",...xt.alert},{type:"toast",label:"Toast",...xt.toast},{type:"notification",label:"Notification",...xt.notification},{type:"tooltip",label:"Tooltip",...xt.tooltip},{type:"stat",label:"Stat",...xt.stat},{type:"skeleton",label:"Skeleton",...xt.skeleton},{type:"chip",label:"Chip",...xt.chip},{type:"icon",label:"Icon",...xt.icon},{type:"spinner",label:"Spinner",...xt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...xt.pricing},{type:"testimonial",label:"Testimonial",...xt.testimonial},{type:"cta",label:"CTA",...xt.cta},{type:"productCard",label:"Product Card",...xt.productCard},{type:"profile",label:"Profile",...xt.profile},{type:"feature",label:"Feature",...xt.feature},{type:"team",label:"Team",...xt.team},{type:"login",label:"Login",...xt.login},{type:"contact",label:"Contact",...xt.contact}]}],Ui={};for(const t of Ux)for(const n of t.items)Ui[n.type]=n;function Le({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function On({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Yo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Jw({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(On,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Le,{w:t*.06}),l.jsx(Le,{w:t*.07}),l.jsx(Le,{w:t*.05}),l.jsx(Le,{w:t*.06})]}),l.jsx(On,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function eS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Le,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Le,{w:t*.6}),l.jsx(Le,{w:t*.4}),l.jsx(On,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function tS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Le,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(On,{w:10,h:10,radius:2}),l.jsx(Le,{w:t*(.4+c*17%30/100)})]},c))]})}function nS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"70%",h:2}),l.jsx(Le,{w:"60%",h:2})]},c))})}function sS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"90%"}),l.jsx(Le,{w:"70%"}),l.jsx(Le,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(On,{w:70,h:26,radius:4}),l.jsx(On,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function oS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:4,strong:!0}),l.jsx(Le,{w:"95%",h:2}),l.jsx(Le,{w:"85%",h:2}),l.jsx(Le,{w:"50%",h:2})]})]})}function iS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Le,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Le,{w:`${70+u*13%25}%`,h:2},u))]})}function aS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function rS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function lS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Yo,{size:8}),l.jsx(Le,{w:`${55+c*17%35}%`,h:2})]},c))})}function cS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Le,{w:Math.max(20,t*.5),h:3,strong:!0})})}function uS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Le,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Le,{w:"40%",h:2})})]})}function dS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:60+c*17%30,h:2}),l.jsx(On,{w:"100%",h:28,radius:4})]},c)),l.jsx(On,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function fS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Le,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"65%",h:2}),l.jsx(Le,{w:"75%",h:2})]})]})}function hS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function mS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0})})}function pS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Le,{w:t*.35})]})}function _S({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx(Le,{w:t*.7}),l.jsx(Le,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(On,{w:"33%",h:"100%",radius:4}),l.jsx(On,{w:"33%",h:"100%",radius:4}),l.jsx(On,{w:"33%",h:"100%",radius:4})]})]})}function gS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(On,{w:"100%",h:"100%",radius:4},u))})}function yS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Le,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Le,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function xS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function bS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Yo,{size:Math.min(14,n*.4)}),l.jsx(Le,{w:"50%",h:2})]})}function vS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Yo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function wS({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function SS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(On,{w:a,h:`${d}%`,radius:2},u)})})}function CS({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(On,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function kS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function jS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Le,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function MS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(On,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function TS({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function ES({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Le,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function AS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(On,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Yo,{size:5}),l.jsx(Yo,{size:5}),l.jsx(Yo,{size:5})]})]})}function DS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx(Le,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Yo,{size:5}),l.jsx(Le,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(On,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function NS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"75%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Yo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Le,{w:60,h:3,strong:!0}),l.jsx(Le,{w:40,h:2})]})]})]})}function RS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Le,{w:t*.35}),l.jsx(On,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function BS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"40%",h:3,strong:!0}),l.jsx(Le,{w:"70%",h:2})]})]})}function LS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx(On,{w:60,h:Math.min(24,n*.6),radius:4})]})}function OS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Le,{w:t*.5,h:2}),l.jsx(Le,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Le,{w:t*.3,h:2})]})}function zS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function $S({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function IS({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function PS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function HS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Yo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Le,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function US({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Le,{w:t*.4,h:2}),l.jsx(Le,{w:t*.25,h:2})]})}function VS({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Yo,{size:6}),l.jsx(Yo,{size:6}),l.jsx(Yo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Le,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function YS({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Le,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function WS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Yo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"50%",h:3,strong:!0}),l.jsx(Le,{w:"75%",h:2})]}),l.jsx(Le,{w:30,h:2})]})}function FS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"65%",h:4,strong:!0}),l.jsx(Le,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:"30%",h:5,strong:!0}),l.jsx(On,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function XS({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Yo,{size:i}),l.jsx(Le,{w:t*.45,h:4,strong:!0}),l.jsx(Le,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]})]})]})}function qS({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Le,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Le,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function GS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:3,strong:!0}),l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function KS({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(On,{w:i,h:i,radius:i*.25}),l.jsx(Le,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function QS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Le,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function ZS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function JS({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function e4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function t4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function n4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Le,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function s4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function o4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Le,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function i4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function a4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function r4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(On,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Le,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function l4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Yo,{size:a}),l.jsx(Le,{w:t*.12,h:3,strong:!0}),l.jsx(Le,{w:t*.08,h:2})]},u))})]})}function c4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Le,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:Math.min(60,t*.2),h:2}),l.jsx(On,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(On,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Le,{w:t*.4,h:2})]})}function u4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Le,{w:t*.4,h:4,strong:!0}),l.jsx(Le,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx(On,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:40,h:2}),l.jsx(On,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx(On,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Le,{w:60,h:2}),l.jsx(On,{w:"100%",h:"100%",radius:4})]}),l.jsx(On,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var d4={navigation:Jw,hero:eS,sidebar:tS,footer:nS,modal:sS,card:oS,text:iS,image:aS,table:rS,list:lS,button:cS,input:uS,form:dS,tabs:fS,avatar:hS,badge:mS,header:pS,section:_S,grid:gS,dropdown:yS,toggle:xS,search:bS,toast:vS,progress:wS,chart:SS,video:CS,tooltip:kS,breadcrumb:jS,pagination:MS,divider:TS,accordion:ES,carousel:AS,pricing:DS,testimonial:NS,cta:RS,alert:BS,banner:LS,stat:OS,stepper:zS,tag:$S,rating:IS,map:PS,timeline:HS,fileUpload:US,codeBlock:VS,calendar:YS,notification:WS,productCard:FS,profile:XS,drawer:qS,popover:GS,logo:KS,faq:QS,gallery:ZS,checkbox:JS,radio:e4,slider:t4,datePicker:n4,skeleton:s4,chip:o4,icon:i4,spinner:a4,feature:r4,team:l4,login:c4,contact:u4};function f4({type:t,width:n,height:i,text:a}){const c=d4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var h4=`svg[fill=none] {
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
}`,m4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=h4}var Me=m4,nl=24,Wu=5;function Ly(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,b=t.y+t.height,v=t.y+t.height/2,S=!a,C=S?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],j=S?[_,b,v]:[...a.top?[_]:[],...a.bottom?[b]:[]],M=[];for(const oe of n)i.has(oe.id)||M.push(oe);c&&M.push(...c);for(const oe of M){const be=oe.x,Ee=oe.x+oe.width,K=oe.x+oe.width/2,le=oe.y,z=oe.y+oe.height,ie=oe.y+oe.height/2;for(const X of C)for(const me of[be,Ee,K]){const Te=me-X;Math.abs(Te)<Wu&&Math.abs(Te)<Math.abs(u)&&(u=Te)}for(const X of j)for(const me of[le,z,ie]){const Te=me-X;Math.abs(Te)<Wu&&Math.abs(Te)<Math.abs(d)&&(d=Te)}}const T=Math.abs(u)<Wu?u:0,I=Math.abs(d)<Wu?d:0,B=[],N=new Set,P=h+T,Y=p+T,V=g+T,U=_+I,Q=b+I,se=v+I;for(const oe of M){const be=oe.x,Ee=oe.x+oe.width,K=oe.x+oe.width/2,le=oe.y,z=oe.y+oe.height,ie=oe.y+oe.height/2;for(const X of[be,K,Ee])for(const me of[P,V,Y])if(Math.abs(me-X)<.5){const Te=`x:${Math.round(X)}`;N.has(Te)||(N.add(Te),B.push({axis:"x",pos:X}))}for(const X of[le,ie,z])for(const me of[U,se,Q])if(Math.abs(me-X)<.5){const Te=`y:${Math.round(X)}`;N.has(Te)||(N.add(Te),B.push({axis:"y",pos:X}))}}return{dx:T,dy:I,guides:B}}function Oy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function p4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:b,onDragMove:v,onDragEnd:S,clearSignal:C,wireframe:j}){const[M,T]=y.useState(new Set),[I,B]=y.useState(null),[N,P]=y.useState(null),[Y,V]=y.useState(null),[U,Q]=y.useState([]),[se,oe]=y.useState(null),[be,Ee]=y.useState(!1),K=y.useRef(!1),[le,z]=y.useState(new Set),ie=y.useRef(new Map),X=y.useRef(null),me=y.useRef(null),Te=y.useRef(t);Te.current=t;const A=y.useRef(_);A.current=_;const ee=y.useRef(v);ee.current=v;const q=y.useRef(S);q.current=S;const ue=y.useRef(b);y.useEffect(()=>{b!==ue.current&&(ue.current=b,T(new Set))},[b]);const je=y.useRef(C);y.useEffect(()=>{if(C!==void 0&&C!==je.current){je.current=C;const ce=new Set(Te.current.map(He=>He.id));ce.size>0&&(z(ce),T(new Set),me.current=null,Pt(()=>{n([]),z(new Set)},180))}},[C,n]),y.useEffect(()=>{const ce=He=>{const Ge=He.target;if(!(Ge.tagName==="INPUT"||Ge.tagName==="TEXTAREA"||Ge.isContentEditable)){if((He.key==="Backspace"||He.key==="Delete")&&M.size>0){He.preventDefault();const Mt=new Set(M);z(Mt),T(new Set),Pt(()=>{n(Te.current.filter(ft=>!Mt.has(ft.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(He.key)&&M.size>0){He.preventDefault();const Mt=He.shiftKey?20:1,ft=He.key==="ArrowLeft"?-Mt:He.key==="ArrowRight"?Mt:0,rt=He.key==="ArrowUp"?-Mt:He.key==="ArrowDown"?Mt:0;n(t.map(it=>M.has(it.id)?{...it,x:Math.max(0,it.x+ft),y:Math.max(0,it.y+rt)}:it));return}if(He.key==="Escape"){i?a(null):M.size>0&&T(new Set);return}}};return document.addEventListener("keydown",ce),()=>document.removeEventListener("keydown",ce)},[M,i,t,n,a]);const Re=y.useCallback(ce=>{if(ce.button!==0||p||ce.target.closest(`.${Me.placement}`))return;ce.preventDefault(),ce.stopPropagation();const Ge=window.scrollY,ze=ce.clientX,Mt=ce.clientY;if(i){me.current="place",d==null||d(!0);let ft=!1,rt=ze,it=Mt;const at=Ze=>{rt=Ze.clientX,it=Ze.clientY;const H=Math.abs(rt-ze),Z=Math.abs(it-Mt);if((H>5||Z>5)&&(ft=!0),ft){const te=Math.min(ze,rt),_e=Math.min(Mt,it),Fe=Math.abs(rt-ze),Ue=Math.abs(it-Mt);B({x:te,y:_e,w:Fe,h:Ue}),V({x:Ze.clientX+12,y:Ze.clientY+12,text:`${Math.round(Fe)} × ${Math.round(Ue)}`})}},Et=Ze=>{window.removeEventListener("mousemove",at),window.removeEventListener("mouseup",Et),B(null),V(null),me.current=null,d==null||d(!1);const H=xt[i];let Z,te,_e,Fe;ft?(Z=Math.min(ze,rt),te=Math.min(Mt,it)+Ge,_e=Math.max(nl,Math.abs(rt-ze)),Fe=Math.max(nl,Math.abs(it-Mt))):(_e=H.width,Fe=H.height,Z=ze-_e/2,te=Mt+Ge-Fe/2),Z=Math.max(0,Z),te=Math.max(0,te);const Ue={id:Oy(),type:i,x:Z,y:te,width:_e,height:Fe,scrollY:Ge,timestamp:Date.now()},De=[...t,Ue];n(De),T(new Set([Ue.id])),a(null)};window.addEventListener("mousemove",at),window.addEventListener("mouseup",Et)}else{ce.shiftKey||T(new Set),me.current="select";let ft=!1;const rt=at=>{const Et=Math.abs(at.clientX-ze),Ze=Math.abs(at.clientY-Mt);if((Et>4||Ze>4)&&(ft=!0),ft){const H=Math.min(ze,at.clientX),Z=Math.min(Mt,at.clientY);P({x:H,y:Z,w:Math.abs(at.clientX-ze),h:Math.abs(at.clientY-Mt)})}},it=at=>{if(window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",it),me.current=null,ft){const Et=Math.min(ze,at.clientX),Ze=Math.min(Mt,at.clientY)+Ge,H=Math.abs(at.clientX-ze),Z=Math.abs(at.clientY-Mt),te=new Set(ce.shiftKey?M:new Set);for(const _e of t)_e.y-Ge,_e.x+_e.width>Et&&_e.x<Et+H&&_e.y+_e.height>Ze&&_e.y<Ze+Z&&te.add(_e.id);T(te)}P(null)};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",it)}},[i,p,t,n,M]),ve=y.useCallback((ce,He)=>{var Ue;if(ce.button!==0)return;const Ge=ce.target;if(Ge.closest(`.${Me.handle}`)||Ge.closest(`.${Me.deleteButton}`))return;ce.preventDefault(),ce.stopPropagation();let ze;ce.shiftKey?(ze=new Set(M),ze.has(He)?ze.delete(He):ze.add(He)):M.has(He)?ze=new Set(M):ze=new Set([He]),T(ze),(ze.size!==M.size||[...ze].some(De=>!M.has(De)))&&((Ue=A.current)==null||Ue.call(A,ze,ce.shiftKey));const ft=ce.clientX,rt=ce.clientY,it=new Map;for(const De of t)ze.has(De.id)&&it.set(De.id,{x:De.x,y:De.y});me.current="move",d==null||d(!0);let at=!1,Et=!1,Ze=t,H=0,Z=0;const te=new Map;for(const De of t)it.has(De.id)&&te.set(De.id,{w:De.width,h:De.height});const _e=De=>{var un;const St=De.clientX-ft,Ve=De.clientY-rt;if((Math.abs(St)>2||Math.abs(Ve)>2)&&(at=!0),!at)return;if(De.altKey&&!Et){Et=!0;const _t=[];for(const qt of t)it.has(qt.id)&&_t.push({...qt,id:Oy(),timestamp:Date.now()});Ze=[...t,..._t]}let bt=1/0,pt=1/0,Ie=-1/0,st=-1/0;for(const[_t,qt]of it){const An=te.get(_t);An&&(bt=Math.min(bt,qt.x+St),pt=Math.min(pt,qt.y+Ve),Ie=Math.max(Ie,qt.x+St+An.w),st=Math.max(st,qt.y+Ve+An.h))}const Ht={x:bt,y:pt,width:Ie-bt,height:st-pt},{dx:cn,dy:Ke,guides:Bt}=Ly(Ht,Ze,new Set(it.keys()),void 0,g);Q(Bt);const At=St+cn,Ot=Ve+Ke;H=At,Z=Ot,n(Ze.map(_t=>{const qt=it.get(_t.id);return qt?{..._t,x:Math.max(0,qt.x+At),y:Math.max(0,qt.y+Ot)}:_t})),(un=ee.current)==null||un.call(ee,At,Ot)},Fe=()=>{var De;window.removeEventListener("mousemove",_e),window.removeEventListener("mouseup",Fe),me.current=null,d==null||d(!1),Q([]),(De=q.current)==null||De.call(q,H,Z,at)};window.addEventListener("mousemove",_e),window.addEventListener("mouseup",Fe)},[M,t,n,d]),ot=y.useCallback((ce,He,Ge)=>{ce.preventDefault(),ce.stopPropagation();const ze=t.find(te=>te.id===He);if(!ze)return;T(new Set([He])),me.current="resize",d==null||d(!0);const Mt=ce.clientX,ft=ce.clientY,rt=ze.width,it=ze.height,at=ze.x,Et=ze.y,Ze={left:Ge.includes("w"),right:Ge.includes("e"),top:Ge.includes("n"),bottom:Ge.includes("s")},H=te=>{const _e=te.clientX-Mt,Fe=te.clientY-ft;let Ue=rt,De=it,St=at,Ve=Et;Ge.includes("e")&&(Ue=Math.max(nl,rt+_e)),Ge.includes("w")&&(Ue=Math.max(nl,rt-_e),St=at+rt-Ue),Ge.includes("s")&&(De=Math.max(nl,it+Fe)),Ge.includes("n")&&(De=Math.max(nl,it-Fe),Ve=Et+it-De);const bt={x:St,y:Ve,width:Ue,height:De},{dx:pt,dy:Ie,guides:st}=Ly(bt,Te.current,new Set([He]),Ze,g);Q(st),pt!==0&&(Ze.right?Ue+=pt:Ze.left&&(St+=pt,Ue-=pt)),Ie!==0&&(Ze.bottom?De+=Ie:Ze.top&&(Ve+=Ie,De-=Ie)),n(Te.current.map(Ht=>Ht.id===He?{...Ht,x:St,y:Ve,width:Ue,height:De}:Ht)),V({x:te.clientX+12,y:te.clientY+12,text:`${Math.round(Ue)} × ${Math.round(De)}`})},Z=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",Z),V(null),me.current=null,d==null||d(!1),Q([])};window.addEventListener("mousemove",H),window.addEventListener("mouseup",Z)},[t,n,d]),Xe=y.useCallback(ce=>{me.current=null,z(He=>{const Ge=new Set(He);return Ge.add(ce),Ge}),T(He=>{const Ge=new Set(He);return Ge.delete(ce),Ge}),Pt(()=>{n(Te.current.filter(He=>He.id!==ce)),z(He=>{const Ge=new Set(He);return Ge.delete(ce),Ge})},180)},[n]),$e={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},lt=y.useCallback(ce=>{const He=t.find(Ge=>Ge.id===ce);He&&(K.current=!!He.text,oe(ce),Ee(!1))},[t]),nt=y.useCallback(()=>{se&&(Ee(!0),Pt(()=>{oe(null),Ee(!1)},150))},[se]);y.useEffect(()=>{u&&se&&nt()},[u]);const zt=y.useCallback(ce=>{se&&(n(t.map(He=>He.id===se?{...He,text:ce.trim()||void 0}:He)),nt())},[se,t,n,nt]),ct=typeof window<"u"?window.scrollY:0,Rt=["nw","ne","se","sw"],Oe=j?"#f97316":"#3c82f7",dt=[{dir:"n",cls:Me.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Oe})})},{dir:"e",cls:Me.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Oe})})},{dir:"s",cls:Me.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Oe})})},{dir:"w",cls:Me.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Oe})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:X,className:`${Me.overlay} ${c?"":Me.light} ${i?Me.placing:""} ${p?Me.passthrough:""} ${u?Me.overlayExiting:""} ${j?Me.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Re,children:t.map(ce=>{var Mt;const He=M.has(ce.id),Ge=((Mt=Ui[ce.type])==null?void 0:Mt.label)||ce.type,ze=ce.y-ct;return l.jsxs("div",{"data-design-placement":ce.id,className:`${Me.placement} ${He?Me.selected:""} ${le.has(ce.id)?Me.exiting:""}`,style:{left:ce.x,top:ze,width:ce.width,height:ce.height,position:"fixed"},onMouseDown:ft=>ve(ft,ce.id),onDoubleClick:()=>lt(ce.id),children:[l.jsx("span",{className:Me.placementLabel,children:Ge}),l.jsx("span",{className:`${Me.placementAnnotation} ${ce.text?Me.annotationVisible:""}`,children:(ce.text&&ie.current.set(ce.id,ce.text),ce.text||ie.current.get(ce.id)||"")}),l.jsx("div",{className:Me.placementContent,children:l.jsx(f4,{type:ce.type,width:ce.width,height:ce.height,text:ce.text})}),l.jsx("div",{className:Me.deleteButton,onMouseDown:ft=>ft.stopPropagation(),onClick:()=>Xe(ce.id),children:"✕"}),Rt.map(ft=>l.jsx("div",{className:`${Me.handle} ${Me[`handle${ft.charAt(0).toUpperCase()}${ft.slice(1)}`]}`,onMouseDown:rt=>ot(rt,ce.id,ft)},ft)),dt.map(({dir:ft,cls:rt,arrow:it})=>l.jsx("div",{className:`${Me.edgeHandle} ${rt}`,onMouseDown:at=>ot(at,ce.id,ft),children:it},ft))]},ce.id)})}),se&&(()=>{var Et,Ze;const ce=t.find(H=>H.id===se);if(!ce)return null;const He=ce.y-ct,Ge=ce.x+ce.width/2,ze=He-8,Mt=He+ce.height+8,ft=ze>200,rt=Mt<window.innerHeight-100,it=Math.max(160,Math.min(window.innerWidth-160,Ge));let at;return ft?at={left:it,bottom:window.innerHeight-ze}:rt?at={left:it,top:Mt}:at={left:it,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:((Et=Ui[ce.type])==null?void 0:Et.label)||ce.type,placeholder:$e[ce.type]||"Label or content text",initialValue:(Ze=ce.text)!=null?Ze:"",submitLabel:K.current?"Save":"Set",onSubmit:zt,onCancel:nt,onDelete:K.current?()=>{zt("")}:void 0,isExiting:be,lightMode:!c,style:at})})(),I&&l.jsx("div",{className:Me.drawBox,style:{left:I.x,top:I.y,width:I.w,height:I.h},"data-feedback-toolbar":!0}),N&&l.jsx("div",{className:Me.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),Y&&l.jsx("div",{className:Me.sizeIndicator,style:{left:Y.x,top:Y.y},"data-feedback-toolbar":!0,children:Y.text}),U.map((ce,He)=>l.jsx("div",{className:Me.guideLine,style:ce.axis==="x"?{position:"fixed",left:ce.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ce.pos-ct,right:0,height:1},"data-feedback-toolbar":!0},`${ce.axis}-${ce.pos}-${He}`))]})}function _4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Me.fadeTop:""} ${i?Me.fadeBottom:""}`}var L="currentColor",Ce="0.5";function g4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:L,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:L,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:L,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:L,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:L,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:L,strokeWidth:Ce})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:L,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:L,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:L,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:L,strokeWidth:Ce})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:L,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:L,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:L,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:L,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:L,strokeWidth:Ce,fill:L,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Ce})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:L,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:L,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:L,strokeWidth:Ce})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:L,strokeWidth:Ce,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:L,strokeWidth:Ce,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:L,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:L,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:L,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:L,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:L,strokeWidth:Ce}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:L,strokeWidth:Ce,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:L,strokeWidth:Ce,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:L,strokeWidth:Ce})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:L,strokeWidth:Ce})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:L,strokeWidth:Ce,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:L,strokeWidth:Ce,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:L,strokeWidth:Ce}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:L,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:L,strokeWidth:Ce}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:L,strokeWidth:Ce}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:L,strokeWidth:Ce})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:L,strokeWidth:Ce,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:L,strokeWidth:Ce,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:L,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:L,opacity:".15",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:Ce})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:L,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:L,strokeWidth:Ce,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:L,strokeWidth:Ce})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:L,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:L,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:L,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:L,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:L,strokeWidth:Ce,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:L,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:L,strokeWidth:Ce})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:L,strokeWidth:Ce,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:L,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:L,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:L,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:L,strokeWidth:Ce})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:L,opacity:".2",stroke:L,strokeWidth:Ce}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:L,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:L,strokeWidth:Ce}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:L,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:L,strokeWidth:Ce})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:L,strokeWidth:Ce,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:L,strokeWidth:Ce,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:L,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:L,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:L,strokeWidth:Ce,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:L,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:L,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:L,opacity:".15",stroke:L,strokeWidth:Ce})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:L,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:L,opacity:".2",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:L,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:Ce,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:L,strokeWidth:Ce,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:L,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:L,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:L,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:L,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:L,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:L,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:L,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:L,strokeWidth:Ce,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:L,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:L,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:L,strokeWidth:Ce})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:L,strokeWidth:Ce,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:L,strokeWidth:Ce})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:L,strokeWidth:Ce}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:L,strokeWidth:Ce,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:L,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:L,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:L,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:L,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Ce})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:L,strokeWidth:Ce,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:L,strokeWidth:Ce}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:L,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:L,strokeWidth:Ce})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:L,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:L,strokeWidth:Ce,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:L,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:L,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:L,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:L,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:L,opacity:".08",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:L,strokeWidth:Ce,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:L,strokeWidth:Ce,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:L,strokeWidth:Ce,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:L,strokeWidth:Ce,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:L,strokeWidth:Ce,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:L,strokeWidth:Ce,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:L,strokeWidth:Ce,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:L,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:L,strokeWidth:Ce,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:L,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:L,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:L,strokeWidth:Ce}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:L,opacity:".2"})]});default:return null}}function y4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Me.placeScroll} ${c||""}`,children:Ux.map(d=>l.jsxs("div",{className:Me.paletteSection,children:[l.jsx("div",{className:Me.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Me.paletteItem} ${t===h.type?Me.active:""} ${u?Me.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Me.paletteItemIcon,children:l.jsx(g4,{type:h.type})}),l.jsx("span",{className:Me.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function x4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),b=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Pt(()=>a(null),250)}else g.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):b?l.jsxs("span",{className:Me.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Me.rollingNum} ${d==="up"?Me.exitUp:Me.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Me.rollingNum} ${d==="up"?Me.enterUp:Me.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Me.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Me.rollingNum} ${d==="up"?Me.exitUp:Me.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Me.rollingNum} ${d==="up"?Me.enterUp:Me.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function b4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:b,wireframePurpose:v,onWireframePurposeChange:S,Tooltip:C}){const[j,M]=y.useState(!1),[T,I]=y.useState("exit"),[B,N]=y.useState(!1),[P,Y]=y.useState(!0),V=y.useRef(0),U=y.useRef(""),Q=y.useRef(0),se=y.useRef(),oe=y.useRef(null),[be,Ee]=y.useState("");y.useEffect(()=>(u?(M(!0),clearTimeout(se.current),cancelAnimationFrame(Q.current),Q.current=rl(()=>{Q.current=rl(()=>{I("enter")})})):(cancelAnimationFrame(Q.current),I("exit"),clearTimeout(se.current),se.current=Pt(()=>{M(!1),d==null||d()},200)),()=>cancelAnimationFrame(Q.current)),[u]);const K=h>0||a>0,le=h+a;return le>0&&(V.current=le,U.current=_?le===1?"Component":"Components":le===1?"Change":"Changes"),y.useEffect(()=>{if(K)B?Y(!1):(Y(!0),N(!0),rl(()=>{rl(()=>{Y(!1)})}));else{Y(!0);const z=Pt(()=>N(!1),300);return()=>clearTimeout(z)}},[K]),y.useEffect(()=>{if(!j)return;const z=oe.current;if(!z)return;const ie=()=>Ee(_4(z));ie(),z.addEventListener("scroll",ie,{passive:!0});const X=new ResizeObserver(ie);return X.observe(z),()=>{z.removeEventListener("scroll",ie),X.disconnect()}},[j]),j?l.jsxs("div",{className:`${Me.palette} ${Me[T]} ${i?"":Me.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(se.current),M(!1),I("exit"),d==null||d()))},children:[l.jsxs("div",{className:Me.paletteHeader,children:[l.jsx("div",{className:Me.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Me.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Me.canvasToggle} ${_?Me.active:""}`,onClick:()=>b(!_),children:[l.jsx("span",{className:Me.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Me.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Me.wireframePurposeWrap} ${_?"":Me.collapsed}`,children:l.jsx("div",{className:Me.wireframePurposeInner,children:l.jsx("textarea",{className:Me.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:v,onChange:z=>S(z.target.value),rows:2})})}),l.jsx(y4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:oe,fadeClass:be,blankCanvas:_}),B&&l.jsx("div",{className:`${Me.paletteFooterWrap} ${P?Me.footerHidden:""}`,children:l.jsx("div",{className:Me.paletteFooterInner,children:l.jsx("div",{className:Me.paletteFooterInnerContent,children:l.jsxs("div",{className:Me.paletteFooter,children:[l.jsx("span",{className:Me.paletteFooterCount,children:l.jsx(x4,{value:V.current,suffix:U.current})}),l.jsx("button",{className:Me.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function fl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Ho(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=fl(i)}return null}function v4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=fl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function dl(t){var a,c,u,d,h,p,g,_;const n=v4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const b=Ho(t,"svg");if(b){const v=fl(b);if(v instanceof HTMLElement)return{name:`graphic in ${dl(v).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const b=fl(t);if((b==null?void 0:b.tagName.toLowerCase())==="button"){const v=(a=b.textContent)==null?void 0:a.trim();return{name:v?`icon in "${v}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const b=(c=t.textContent)==null?void 0:c.trim(),v=t.getAttribute("aria-label");return v?{name:`button [${v}]`,path:n}:{name:b?`button "${b.slice(0,25)}"`:"button",path:n}}if(i==="a"){const b=(u=t.textContent)==null?void 0:u.trim(),v=t.getAttribute("href");return b?{name:`link "${b.slice(0,25)}"`,path:n}:v?{name:`link to ${v.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const b=t.getAttribute("type")||"text",v=t.getAttribute("placeholder"),S=t.getAttribute("name");return v?{name:`input "${v}"`,path:n}:S?{name:`input [${S}]`,path:n}:{name:`${b} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const b=(d=t.textContent)==null?void 0:d.trim();return{name:b?`${i} "${b.slice(0,35)}"`:i,path:n}}if(i==="p"){const b=(h=t.textContent)==null?void 0:h.trim();return b?{name:`paragraph: "${b.slice(0,40)}${b.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const b=(p=t.textContent)==null?void 0:p.trim();return b&&b.length<40?{name:`"${b}"`,path:n}:{name:i,path:n}}if(i==="li"){const b=(g=t.textContent)==null?void 0:g.trim();return b&&b.length<40?{name:`list item: "${b.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const b=(_=t.textContent)==null?void 0:_.trim();return b&&b.length<30?{name:`code: \`${b}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const b=t.getAttribute("alt");return{name:b?`image "${b.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const b=t.className,v=t.getAttribute("role"),S=t.getAttribute("aria-label");if(S)return{name:`${i} [${S}]`,path:n};if(v)return{name:`${v}`,path:n};if(typeof b=="string"&&b){const C=b.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(C.length>0)return{name:C.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function oc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Fu(t){const n=fl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var C;const b=_.tagName.toLowerCase(),v=_.className;let S="";if(typeof v=="string"&&v){const j=v.split(/\s+/).map(M=>M.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M));j&&(S=`.${j}`)}if(b==="button"||b==="a"){const j=(C=_.textContent)==null?void 0:C.trim().slice(0,15);if(j)return`${b}${S} "${j}"`}return`${b}${S}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(b=>b.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(b=>b.length>2&&!/^[a-z]{1,2}$/.test(b));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function ic(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Vx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),w4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),S4=new Set(["input","textarea","select"]),C4=new Set(["img","video","canvas","svg"]),k4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Xu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;w4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:S4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:C4.has(a)?c=["width","height","objectFit","borderRadius"]:k4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Vx.has(h)&&(i[u]=h)}return i}var j4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function qu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of j4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Vx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function M4(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Gu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Ku(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=fl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var T4=new Set(["nav","header","main","section","article","footer","aside"]),Bm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},zy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},E4=new Set(["script","style","noscript","link","meta"]),A4=40;function Yx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function kr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":kr(i)} > ${n}:nth-child(${c})`}return n}function jd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Bm[a])return Bm[a];if(zy[n])return zy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=dl(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Wx(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function Fx(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function D4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(E4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<A4)return;const g=T4.has(d),_=c.getAttribute("role")&&Bm[c.getAttribute("role")],b=d==="div"&&p.height>=60;if(!g&&!_&&!b)return;const v=window.scrollY,S=Yx(c),C={x:p.x,y:S?p.y:p.y+v,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(c),tagName:d,selector:kr(c),role:c.getAttribute("role"),className:Wx(c),textSnippet:Fx(c),originalRect:C,currentRect:{...C},originalIndex:u,isFixed:S})}),a}function N4(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Yx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(t),tagName:t.tagName.toLowerCase(),selector:kr(t),role:t.getAttribute("role"),className:Wx(t),textSnippet:Fx(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var $y={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Iy=["nw","n","ne","e","se","s","sw","w"],Qu=24,Py=16,Zu=5;function Hy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,b=t.y+t.height/2,v=[];for(const V of n)i.has(V.id)||v.push(V.currentRect);a&&v.push(...a);for(const V of v){const U=V.x,Q=V.x+V.width,se=V.x+V.width/2,oe=V.y,be=V.y+V.height,Ee=V.y+V.height/2;for(const K of[d,h,p])for(const le of[U,Q,se]){const z=le-K;Math.abs(z)<Zu&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const K of[g,_,b])for(const le of[oe,be,Ee]){const z=le-K;Math.abs(z)<Zu&&Math.abs(z)<Math.abs(u)&&(u=z)}}const S=Math.abs(c)<Zu?c:0,C=Math.abs(u)<Zu?u:0,j=[],M=new Set,T=d+S,I=h+S,B=p+S,N=g+C,P=_+C,Y=b+C;for(const V of v){const U=V.x,Q=V.x+V.width,se=V.x+V.width/2,oe=V.y,be=V.y+V.height,Ee=V.y+V.height/2;for(const K of[U,se,Q])for(const le of[T,B,I])if(Math.abs(le-K)<.5){const z=`x:${Math.round(K)}`;M.has(z)||(M.add(z),j.push({axis:"x",pos:K}))}for(const K of[oe,Ee,be])for(const le of[N,Y,P])if(Math.abs(le-K)<.5){const z=`y:${Math.round(K)}`;M.has(z)||(M.add(z),j.push({axis:"y",pos:K}))}}return{dx:S,dy:C,guides:j}}var R4=new Set(["script","style","noscript","link","meta","br","hr"]);function Uy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(R4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Py&&i.height>=Py)return n;n=n.parentElement}return null}function B4({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:b}){const{sections:v}=t,S=y.useRef(t);S.current=t;const[C,j]=y.useState(new Set),[M,T]=y.useState(!1),I=y.useRef(b);y.useEffect(()=>{b!==void 0&&b!==I.current&&(I.current=b,v.length>0&&T(!0))},[b,v.length]);const B=y.useRef(p);y.useEffect(()=>{p!==B.current&&(B.current=p,j(new Set))},[p]);const[N,P]=y.useState(null),[Y,V]=y.useState(!1),U=y.useRef(!1),Q=y.useCallback(H=>{const Z=v.find(te=>te.id===H);Z&&(U.current=!!Z.note,P(H),V(!1))},[v]),se=y.useCallback(()=>{N&&(V(!0),Pt(()=>{P(null),V(!1)},150))},[N]),oe=y.useCallback(H=>{N&&(n({...t,sections:v.map(Z=>Z.id===N?{...Z,note:H.trim()||void 0}:Z)}),se())},[N,v,t,n,se]);y.useEffect(()=>{a&&N&&se()},[a]);const[be,Ee]=y.useState(new Set),K=y.useRef(new Map),[le,z]=y.useState(null),[ie,X]=y.useState(null),[me,Te]=y.useState([]),[A,ee]=y.useState(0),q=y.useRef(null),ue=y.useRef(new Set),je=y.useRef(new Map),[Re,ve]=y.useState(new Map),[ot,Xe]=y.useState(new Map),$e=y.useRef(new Set),lt=y.useRef(new Map),nt=y.useRef(h);nt.current=h;const zt=y.useRef(g);zt.current=g;const ct=y.useRef(_);ct.current=_,y.useEffect(()=>{u&&j(new Set)},[u]);const[Rt,Oe]=y.useState(()=>!t.sections.some(H=>{const Z=H.originalRect,te=H.currentRect;return Math.abs(Z.x-te.x)>1||Math.abs(Z.y-te.y)>1||Math.abs(Z.width-te.width)>1||Math.abs(Z.height-te.height)>1}));y.useEffect(()=>{if(!Rt){const H=Pt(()=>Oe(!0),380);return()=>clearTimeout(H)}},[]);const dt=y.useRef(new Set);y.useEffect(()=>{dt.current=new Set(v.map(H=>H.selector))},[v]),y.useEffect(()=>{const H=()=>ee(window.scrollY);return H(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H)}},[]),y.useEffect(()=>{const H=Z=>{if(q.current){z(null);return}const te=document.elementFromPoint(Z.clientX,Z.clientY);if(!te){z(null);return}if(te.closest("[data-feedback-toolbar]")){z(null);return}if(te.closest("[data-design-placement]")){z(null);return}if(te.closest("[data-annotation-popup]")){z(null);return}const _e=Uy(te);if(!_e){z(null);return}for(const Ue of dt.current)try{const De=document.querySelector(Ue);if(De&&(De===_e||_e.contains(De))){z(null);return}}catch{}const Fe=_e.getBoundingClientRect();z({x:Fe.x,y:Fe.y,w:Fe.width,h:Fe.height})};return document.addEventListener("mousemove",H,{passive:!0}),()=>document.removeEventListener("mousemove",H)},[v]),y.useEffect(()=>{const H=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=H}},[]),y.useEffect(()=>{const H=Z=>{var De,St,Ve,bt;if(q.current||Z.button!==0)return;const te=Z.target;if(!te||te.closest("[data-feedback-toolbar]")||te.closest("[data-design-placement]")||te.closest("[data-annotation-popup]"))return;const _e=Uy(te);let Fe=!1;if(_e)for(const pt of dt.current)try{const Ie=document.querySelector(pt);if(Ie&&(Ie===_e||_e.contains(Ie))){Fe=!0;break}}catch{}const Ue=!!(Z.shiftKey||Z.metaKey||Z.ctrlKey);if(_e&&!Fe){Z.preventDefault(),Z.stopPropagation();const pt=N4(_e),Ie=[...v,pt],st=[...t.originalOrder,pt.id];n({...t,sections:Ie,originalOrder:st});const Ht=new Set([pt.id]);j(Ht),(De=nt.current)==null||De.call(nt,Ht,Ue),z(null);const cn=Z.clientX,Ke=Z.clientY,Bt={x:pt.currentRect.x,y:pt.currentRect.y};pt.originalRect;let At=!1,Ot=0,un=0;q.current="move";const _t=An=>{var an;const os=An.clientX-cn,gn=An.clientY-Ke;if(!At&&(Math.abs(os)>2||Math.abs(gn)>2)&&(At=!0),!At)return;const lo={x:Bt.x+os,y:Bt.y+gn,width:pt.currentRect.width,height:pt.currentRect.height},is=Hy(lo,Ie,new Set([pt.id]),d);Te(is.guides);const Wn=os+is.dx,Wt=gn+is.dy;Ot=Wn,un=Wt;const Mn=document.querySelector(`[data-rearrange-section="${pt.id}"]`);Mn&&(Mn.style.transform=`translate(${Wn}px, ${Wt}px)`),ve(new Map([[pt.id,{x:Bt.x+Wn,y:Bt.y+Wt,width:pt.currentRect.width,height:pt.currentRect.height}]])),(an=zt.current)==null||an.call(zt,Wn,Wt)},qt=()=>{var os;window.removeEventListener("mousemove",_t),window.removeEventListener("mouseup",qt),q.current=null,Te([]),ve(new Map);const An=document.querySelector(`[data-rearrange-section="${pt.id}"]`);An&&(An.style.transform=""),At&&n({...t,sections:Ie.map(gn=>gn.id===pt.id?{...gn,currentRect:{...gn.currentRect,x:Math.max(0,Bt.x+Ot),y:Math.max(0,Bt.y+un)}}:gn),originalOrder:st}),(os=ct.current)==null||os.call(ct,Ot,un,At)};window.addEventListener("mousemove",_t),window.addEventListener("mouseup",qt)}else if(Fe&&_e){Z.preventDefault();for(const pt of v)try{const Ie=document.querySelector(pt.selector);if(Ie&&Ie===_e){const st=new Set([pt.id]);j(st),(St=nt.current)==null||St.call(nt,st,Ue);return}}catch{}Ue||(j(new Set),(Ve=nt.current)==null||Ve.call(nt,new Set,!1))}else Ue||(j(new Set),(bt=nt.current)==null||bt.call(nt,new Set,!1))};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[v,t,n]),y.useEffect(()=>{const H=Z=>{const te=Z.target;if(!(te.tagName==="INPUT"||te.tagName==="TEXTAREA"||te.isContentEditable)){if((Z.key==="Backspace"||Z.key==="Delete")&&C.size>0){Z.preventDefault();const _e=new Set(C);Ee(Fe=>{const Ue=new Set(Fe);for(const De of _e)Ue.add(De);return Ue}),j(new Set),Pt(()=>{const Fe=S.current;n({...Fe,sections:Fe.sections.filter(Ue=>!_e.has(Ue.id)),originalOrder:Fe.originalOrder.filter(Ue=>!_e.has(Ue))}),Ee(Ue=>{const De=new Set(Ue);for(const St of _e)De.delete(St);return De})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Z.key)&&C.size>0){Z.preventDefault();const _e=Z.shiftKey?20:1,Fe=Z.key==="ArrowLeft"?-_e:Z.key==="ArrowRight"?_e:0,Ue=Z.key==="ArrowUp"?-_e:Z.key==="ArrowDown"?_e:0;n({...t,sections:v.map(De=>C.has(De.id)?{...De,currentRect:{...De.currentRect,x:Math.max(0,De.currentRect.x+Fe),y:Math.max(0,De.currentRect.y+Ue)}}:De)});return}Z.key==="Escape"&&C.size>0&&j(new Set)}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[C,v,t,n]);const ce=y.useCallback((H,Z)=>{var cn;if(H.button!==0)return;const te=H.target;if(te.closest(`.${Me.handle}`)||te.closest(`.${Me.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let _e;H.shiftKey||H.metaKey||H.ctrlKey?(_e=new Set(C),_e.has(Z)?_e.delete(Z):_e.add(Z)):C.has(Z)?_e=new Set(C):_e=new Set([Z]),j(_e),(_e.size!==C.size||[..._e].some(Ke=>!C.has(Ke)))&&((cn=nt.current)==null||cn.call(nt,_e,!!(H.shiftKey||H.metaKey||H.ctrlKey)));const Ue=H.clientX,De=H.clientY,St=new Map;for(const Ke of v)_e.has(Ke.id)&&St.set(Ke.id,{x:Ke.currentRect.x,y:Ke.currentRect.y});q.current="move";let Ve=!1,bt=0,pt=0;const Ie=new Map;for(const Ke of v)if(_e.has(Ke.id)){const Bt=document.querySelector(`[data-rearrange-section="${Ke.id}"]`);Ie.set(Ke.id,{outlineEl:Bt,curW:Ke.currentRect.width,curH:Ke.currentRect.height})}const st=Ke=>{var is;const Bt=Ke.clientX-Ue,At=Ke.clientY-De;if(Bt===0&&At===0)return;Ve=!0;let Ot=1/0,un=1/0,_t=-1/0,qt=-1/0;for(const[Wn,{curW:Wt,curH:Mn}]of Ie){const an=St.get(Wn);if(!an)continue;const tn=an.x+Bt,Qe=an.y+At;Ot=Math.min(Ot,tn),un=Math.min(un,Qe),_t=Math.max(_t,tn+Wt),qt=Math.max(qt,Qe+Mn)}const An=Hy({x:Ot,y:un,width:_t-Ot,height:qt-un},v,_e,d),os=Bt+An.dx,gn=At+An.dy;bt=os,pt=gn,Te(An.guides);for(const[,{outlineEl:Wn}]of Ie)Wn&&(Wn.style.transform=`translate(${os}px, ${gn}px)`);const lo=new Map;for(const[Wn,{curW:Wt,curH:Mn}]of Ie){const an=St.get(Wn);if(an){const tn={x:Math.max(0,an.x+os),y:Math.max(0,an.y+gn),width:Wt,height:Mn};lo.set(Wn,tn)}}ve(lo),(is=zt.current)==null||is.call(zt,os,gn)},Ht=Ke=>{var Bt,At;window.removeEventListener("mousemove",st),window.removeEventListener("mouseup",Ht),q.current=null,Te([]),ve(new Map);for(const[,{outlineEl:Ot}]of Ie)Ot&&(Ot.style.transform="");if(Ve){const Ot=Ke.clientX-Ue,un=Ke.clientY-De;if(Math.abs(Ot)<5&&Math.abs(un)<5)n({...t,sections:v.map(_t=>{const qt=St.get(_t.id);return qt?{..._t,currentRect:{..._t.currentRect,x:qt.x,y:qt.y}}:_t})});else{n({...t,sections:v.map(_t=>{const qt=St.get(_t.id);return qt?{..._t,currentRect:{..._t.currentRect,x:Math.max(0,qt.x+bt),y:Math.max(0,qt.y+pt)}}:_t})}),(Bt=ct.current)==null||Bt.call(ct,bt,pt,!0);return}}(At=ct.current)==null||At.call(ct,0,0,!1)};window.addEventListener("mousemove",st),window.addEventListener("mouseup",Ht)},[C,v,t,n]),He=y.useCallback((H,Z,te)=>{H.preventDefault(),H.stopPropagation();const _e=v.find(st=>st.id===Z);if(!_e)return;j(new Set([Z])),q.current="resize";const Fe=H.clientX,Ue=H.clientY,De={..._e.currentRect};_e.originalRect;const St=De.width/De.height;let Ve={...De};const bt=document.querySelector(`[data-rearrange-section="${Z}"]`),pt=st=>{const Ht=st.clientX-Fe,cn=st.clientY-Ue;let Ke=De.x,Bt=De.y,At=De.width,Ot=De.height;if(te.includes("e")&&(At=Math.max(Qu,De.width+Ht)),te.includes("w")&&(At=Math.max(Qu,De.width-Ht),Ke=De.x+De.width-At),te.includes("s")&&(Ot=Math.max(Qu,De.height+cn)),te.includes("n")&&(Ot=Math.max(Qu,De.height-cn),Bt=De.y+De.height-Ot),st.shiftKey)if(te.length===2){const _t=Math.abs(At-De.width),qt=Math.abs(Ot-De.height);_t>qt?Ot=At/St:At=Ot*St,te.includes("w")&&(Ke=De.x+De.width-At),te.includes("n")&&(Bt=De.y+De.height-Ot)}else te==="e"||te==="w"?Ot=At/St:At=Ot*St,te==="w"&&(Ke=De.x+De.width-At),te==="n"&&(Bt=De.y+De.height-Ot);Ve={x:Ke,y:Bt,width:At,height:Ot},bt&&(bt.style.left=`${Ke}px`,bt.style.top=`${Bt-A}px`,bt.style.width=`${At}px`,bt.style.height=`${Ot}px`),X({x:st.clientX+12,y:st.clientY+12,text:`${Math.round(At)} × ${Math.round(Ot)}`}),ve(new Map([[Z,Ve]]))},Ie=()=>{window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",Ie),X(null),q.current=null,ve(new Map),n({...t,sections:v.map(st=>st.id===Z?{...st,currentRect:Ve}:st)})};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",Ie)},[v,t,n,A]),Ge=y.useCallback(H=>{Ee(Z=>{const te=new Set(Z);return te.add(H),te}),j(Z=>{const te=new Set(Z);return te.delete(H),te}),Pt(()=>{const Z=S.current;n({...Z,sections:Z.sections.filter(te=>te.id!==H),originalOrder:Z.originalOrder.filter(te=>te!==H)}),Ee(te=>{const _e=new Set(te);return _e.delete(H),_e})},180)},[n]),ze=H=>{const Z=H.originalRect,te=H.currentRect;return Math.abs(Z.x-te.x)>1||Math.abs(Z.y-te.y)>1||Math.abs(Z.width-te.width)>1||Math.abs(Z.height-te.height)>1},Mt=H=>{const Z=H.originalRect,te=H.currentRect;return Math.abs(Z.x-te.x)>1||Math.abs(Z.y-te.y)>1},ft=H=>{const Z=H.originalRect,te=H.currentRect;return Math.abs(Z.width-te.width)>1||Math.abs(Z.height-te.height)>1};for(const H of v)je.current.has(H.id)||(Mt(H)?je.current.set(H.id,"move"):ft(H)&&je.current.set(H.id,"resize"));for(const H of je.current.keys())v.some(Z=>Z.id===H)||je.current.delete(H);const rt=v.filter(H=>{try{if(be.has(H.id)||C.has(H.id))return!0;const Z=document.querySelector(H.selector);if(!Z)return!1;const te=Z.getBoundingClientRect(),_e=H.originalRect;return Math.abs(te.width-_e.width)+Math.abs(te.height-_e.height)<200}catch{return!1}}),it=rt.filter(H=>ze(H)),at=rt.filter(H=>!ze(H)),Et=new Set(it.map(H=>H.id));for(const H of ue.current)Et.has(H)||ue.current.delete(H);const Ze=[...Et].sort().join(",");for(const H of it)lt.current.set(H.id,{currentRect:H.currentRect,originalRect:H.originalRect,isFixed:H.isFixed});return y.useEffect(()=>{const H=$e.current;$e.current=Et;const Z=new Map;for(const te of H)if(!Et.has(te)){if(!v.some(Fe=>Fe.id===te))continue;const _e=lt.current.get(te);_e&&(Z.set(te,{orig:_e.originalRect,target:_e.currentRect,isFixed:_e.isFixed}),lt.current.delete(te))}if(Z.size>0){Xe(_e=>{const Fe=new Map(_e);for(const[Ue,De]of Z)Fe.set(Ue,De);return Fe});const te=Pt(()=>{Xe(_e=>{const Fe=new Map(_e);for(const Ue of Z.keys())Fe.delete(Ue);return Fe})},250);return()=>clearTimeout(te)}},[Ze,v]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Me.rearrangeOverlay} ${i?"":Me.light} ${a?Me.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[le&&l.jsx("div",{className:Me.hoverHighlight,style:{left:le.x,top:le.y,width:le.w,height:le.h}}),at.map(H=>{const Z=H.currentRect,te=H.isFixed?Z.y:Z.y-A,_e=$y,Fe=C.has(H.id);return l.jsxs("div",{"data-rearrange-section":H.id,className:`${Me.sectionOutline} ${Fe?Me.selected:""} ${M||a||be.has(H.id)?Me.exiting:""}`,style:{left:Z.x,top:te,width:Z.width,height:Z.height,borderColor:_e.border,backgroundColor:_e.bg,...Rt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ue=>ce(Ue,H.id),onDoubleClick:()=>Q(H.id),children:[l.jsx("span",{className:Me.sectionLabel,style:{backgroundColor:_e.pill},children:H.label}),l.jsx("span",{className:`${Me.sectionAnnotation} ${H.note?Me.annotationVisible:""}`,children:(H.note&&K.current.set(H.id,H.note),H.note||K.current.get(H.id)||"")}),l.jsxs("span",{className:Me.sectionDimensions,children:[Math.round(Z.width)," × ",Math.round(Z.height)]}),l.jsx("div",{className:Me.deleteButton,onMouseDown:Ue=>Ue.stopPropagation(),onClick:()=>Ge(H.id),children:"✕"}),Iy.map(Ue=>l.jsx("div",{className:`${Me.handle} ${Me[`handle${Ue.charAt(0).toUpperCase()}${Ue.slice(1)}`]}`,onMouseDown:De=>He(De,H.id,Ue)},Ue))]},H.id)}),it.map(H=>{const Z=H.currentRect,te=H.isFixed?Z.y:Z.y-A,_e=C.has(H.id),Fe=Mt(H),Ue=ft(H);if(u&&!_e)return null;const St=!ue.current.has(H.id);return St&&ue.current.add(H.id),l.jsxs("div",{"data-rearrange-section":H.id,className:`${Me.ghostOutline} ${_e?Me.selected:""} ${M||a||be.has(H.id)?Me.exiting:""}`,style:{left:Z.x,top:te,width:Z.width,height:Z.height,...Rt?{}:{opacity:0,animation:"none",transition:"none"},...St?{}:{animation:"none"}},onMouseDown:Ve=>ce(Ve,H.id),onDoubleClick:()=>Q(H.id),children:[l.jsx("span",{className:Me.sectionLabel,style:{backgroundColor:$y.pill},children:H.label}),l.jsx("span",{className:`${Me.sectionAnnotation} ${H.note?Me.annotationVisible:""}`,children:(H.note&&K.current.set(H.id,H.note),H.note||K.current.get(H.id)||"")}),l.jsxs("span",{className:Me.sectionDimensions,children:[Math.round(Z.width)," × ",Math.round(Z.height)]}),l.jsx("div",{className:Me.deleteButton,onMouseDown:Ve=>Ve.stopPropagation(),onClick:()=>Ge(H.id),children:"✕"}),Iy.map(Ve=>l.jsx("div",{className:`${Me.handle} ${Me[`handle${Ve.charAt(0).toUpperCase()}${Ve.slice(1)}`]}`,onMouseDown:bt=>He(bt,H.id,Ve)},Ve)),l.jsx("span",{className:Me.ghostBadge,children:(()=>{const Ve=je.current.get(H.id);if(Fe&&Ue){const[bt,pt]=Ve==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",bt," ",l.jsxs("span",{className:Me.ghostBadgeExtra,children:["& ",pt]})]})}return`Suggested ${Ue?"Resize":"Move"}`})()})]},H.id)})]}),!u&&(()=>{const H=[];for(const Z of it){const te=Re.get(Z.id);H.push({id:Z.id,orig:Z.originalRect,target:te||Z.currentRect,isFixed:Z.isFixed,isSelected:C.has(Z.id),isExiting:be.has(Z.id)})}for(const[Z,te]of Re)if(!H.some(_e=>_e.id===Z)){const _e=v.find(Fe=>Fe.id===Z);_e&&H.push({id:Z,orig:_e.originalRect,target:te,isFixed:_e.isFixed,isSelected:C.has(Z)})}for(const[Z,te]of ot)H.some(_e=>_e.id===Z)||H.push({id:Z,orig:te.orig,target:te.target,isFixed:te.isFixed,isSelected:!1,isExiting:!0});return H.length===0?null:l.jsxs("svg",{className:`${Me.connectorSvg} ${M||a?Me.connectorExiting:""}`,children:[H.map(({id:Z,orig:te,target:_e,isFixed:Fe,isSelected:Ue,isExiting:De})=>{const St=te.x+te.width/2,Ve=(Fe?te.y:te.y-A)+te.height/2,bt=_e.x+_e.width/2,pt=(Fe?_e.y:_e.y-A)+_e.height/2,Ie=bt-St,st=pt-Ve,Ht=Math.sqrt(Ie*Ie+st*st);if(Ht<2)return null;const cn=Math.min(1,Ht/40),Ke=Math.min(Ht*.3,60),Bt=Ht>0?-st/Ht:0,At=Ht>0?Ie/Ht:0,Ot=(St+bt)/2+Bt*Ke,un=(Ve+pt)/2+At*Ke,_t=Re.has(Z),qt=_t||Ue?1:.4,An=_t||Ue?1:.5;return l.jsxs("g",{className:De?Me.connectorExiting:"",children:[l.jsx("path",{className:Me.connectorLine,d:`M ${St} ${Ve} Q ${Ot} ${un} ${bt} ${pt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:qt*cn}),l.jsx("circle",{className:Me.connectorDot,cx:St,cy:Ve,r:4*cn,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:An*cn,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Me.connectorDot,cx:bt,cy:pt,r:4*cn,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:An*cn,filter:"url(#connDotShadow)"})]},`conn-${Z}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{var pt;const H=v.find(Ie=>Ie.id===N);if(!H)return null;const Z=H.currentRect,te=H.isFixed?Z.y:Z.y-A,_e=Z.x+Z.width/2,Fe=te-8,Ue=te+Z.height+8,De=Fe>200,St=Ue<window.innerHeight-100,Ve=Math.max(160,Math.min(window.innerWidth-160,_e));let bt;return De?bt={left:Ve,bottom:window.innerHeight-Fe}:St?bt={left:Ve,top:Ue}:bt={left:Ve,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:H.label,placeholder:"Add a note about this section",initialValue:(pt=H.note)!=null?pt:"",submitLabel:U.current?"Save":"Set",onSubmit:oe,onCancel:se,onDelete:U.current?()=>{oe("")}:void 0,isExiting:Y,lightMode:!i,style:bt})})(),ie&&l.jsx("div",{className:Me.sizeIndicator,style:{left:ie.x,top:ie.y},"data-feedback-toolbar":!0,children:ie.text}),me.map((H,Z)=>l.jsx("div",{className:Me.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:H.pos-A,width:"100vw",height:1}},`${H.axis}-${H.pos}-${Z}`))]})}var Lm=new Set(["script","style","noscript","link","meta","br","hr"]);function L4(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Lm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:jd(c),selector:kr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Lm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:jd(h),selector:kr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function O4(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function z4(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Om(t,n){const i=n?O4(n):L4(),a=z4(t);let c=null,u=null,d=null,h=null,p=null;for(const C of i){if(Math.abs(C.left-a.left)<2&&Math.abs(C.top-a.top)<2&&Math.abs(C.right-C.left-t.width)<2&&Math.abs(C.bottom-C.top-t.height)<2)continue;C.left<=a.left+2&&C.right>=a.right-2&&C.top<=a.top+2&&C.bottom>=a.bottom-2&&C.area>a.area*1.5&&(!p||C.area<p._area)&&(p={label:C.label,selector:C.selector,_area:C.area});const j=a.right>C.left+5&&a.left<C.right-5,M=a.bottom>C.top+5&&a.top<C.bottom-5;if(j&&C.bottom<=a.top+5){const T=Math.round(a.top-C.bottom);(!c||T<c._dist)&&(c={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}if(j&&C.top>=a.bottom-5){const T=Math.round(C.top-a.bottom);(!u||T<u._dist)&&(u={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}if(M&&C.right<=a.left+5){const T=Math.round(a.left-C.right);(!d||T<d._dist)&&(d={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}if(M&&C.left>=a.right-5){const T=Math.round(C.left-a.right);(!h||T<h._dist)&&(h={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}}const g=window.innerWidth,_=window.innerHeight,b=I4(t,g),v=C=>C?{label:C.label,selector:C.selector,gap:C.gap}:null,S=$4(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:v(c),below:v(u),left:v(d),right:v(h),alignment:b,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:S}}function $4(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function I4(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function Xx(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function qx(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=Xx(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function P4(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(Xx(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Vy=15;function Yy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Vy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Vy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function H4(t){var d;if(t.length<2)return[];const n=Yy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Yy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const b of i){const v=b.labels.filter(S=>p.has(S)).length;v>=2&&v>_&&(g=b,_=v)}if(g){const b=g.labels.filter(S=>p.has(S)),v=b.join(", ");if(g.type!==h.type){const S=h.type==="row"?"y":"x",C=g.type==="row"?"y":"x";a.push(`**${v}**: ${h.type} (${S}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${C}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const S=h.type==="row"?"y":"x",C=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${S}: ${h.sharedEdge} → ${g.sharedEdge}`:"",j=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${v}**: ${h.type} shifted —${C}${j}`)}b.forEach(S=>c.add(S))}else{const b=h.labels.join(", "),v=h.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${v}≈${h.sharedEdge}) dissolved`),h.labels.forEach(S=>c.add(S))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(v=>h.labels.includes(v)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(b=>c.add(b))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function Gx(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Lm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:kr(h)}}}return{viewport:t,contentArea:null}}function U4(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:kr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function Kx(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,b=t.width/a>.95,v=[];return b?v.push("`width: 100%` of container"):v.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!b&&v.push("centered — `margin-inline: auto`"),v.join(" — ")}function Qx(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function V4(t){const n=U4(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Wy(t,n,i,a="standard"){var M,T,I,B;if(t.length===0)return"";const c=[...t].sort((N,P)=>Math.abs(N.y-P.y)<20?N.x-P.x:N.y-P.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((N,P)=>{var V;const Y=((V=Ui[N.type])==null?void 0:V.label)||N.type;u+=`${P+1}. **${Y}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}),u;const d=Gx(n);u+=Qx(d),u+=`### Components
`,c.forEach((N,P)=>{var be;const Y=((be=Ui[N.type])==null?void 0:be.label)||N.type,V={x:N.x,y:N.y,width:N.width,height:N.height};u+=`${P+1}. **${Y}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`;const U=Om(V),se=qx(U,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ee of se)u+=`   - ${Ee}
`;const oe=Kx(V,d);oe&&(u+=`   - CSS: ${oe}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const N of c){const P=h.find(Y=>Math.abs(Y.y-N.y)<30);P?P.items.push(N):h.push({y:N.y,items:[N]})}if(h.sort((N,P)=>N.y-P.y),h.forEach((N,P)=>{N.items.sort((V,U)=>V.x-U.x);const Y=N.items.map(V=>{var U;return((U=Ui[V.type])==null?void 0:U.label)||V.type});if(N.items.length===1){const U=N.items[0].width>n.width*.8;u+=`- Row ${P+1} (y≈${Math.round(N.y)}): ${Y[0]}${U?" — full width":""}
`}else u+=`- Row ${P+1} (y≈${Math.round(N.y)}): ${Y.join(" | ")} — ${N.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let N=0;N<c.length-1;N++){const P=c[N],Y=c[N+1],V=((M=Ui[P.type])==null?void 0:M.label)||P.type,U=((T=Ui[Y.type])==null?void 0:T.label)||Y.type,Q=Math.round(Y.y-(P.y+P.height)),se=Math.round(Y.x-(P.x+P.width));Math.abs(P.y-Y.y)<30?u+=`- ${V} → ${U}: \`${se}px\` horizontal gap
`:u+=`- ${V} → ${U}: \`${Q}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let N=0;N<c.length;N++)for(let P=N+1;P<c.length;P++){const Y=c[N],V=c[P],U=((I=Ui[Y.type])==null?void 0:I.label)||Y.type,Q=((B=Ui[V.type])==null?void 0:B.label)||V.type,se=Math.round(V.y-(Y.y+Y.height)),oe=Math.round(V.x-(Y.x+Y.width));u+=`- ${U} ↔ ${Q}: h=\`${oe}px\` v=\`${se}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((N,P)=>{var V;const Y=((V=Ui[N.type])==null?void 0:V.label)||N.type;u+=`${P}. ${Y} at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(N=>N.type==="navigation"),g=c.some(N=>N.type==="hero"),_=c.some(N=>N.type==="sidebar"),b=c.some(N=>N.type==="footer"),v=c.filter(N=>N.type==="card"),S=c.filter(N=>N.type==="form"),C=c.filter(N=>N.type==="table"),j=c.filter(N=>N.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),g&&(u+=`- Hero section with heading, subtext, and call-to-action
`),_&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),v.length>1?u+=`- ${v.length}-column card grid — use CSS Grid or Flexbox
`:v.length===1&&(u+=`- Card component with image + content area
`),S.length>0&&(u+=`- ${S.length} form${S.length>1?"s":""} — add proper labels, validation, and submit handling
`),C.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),b&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,_){const N=c.find(P=>P.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(N.width)}px 1fr;\`
`}if(v.length>1){const N=Math.round(v[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${v.length}, ${N}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Fy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const b=_.originalRect,v=_.currentRect,S=Math.abs(b.x-v.x)>1||Math.abs(b.y-v.y)>1,C=Math.abs(b.width-v.width)>1||Math.abs(b.height-v.height)>1;if(!S&&!C){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:S,sizeChanged:C})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=Gx({width:d,height:h});n!=="compact"&&(u+=Qx(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const g=_=>a.map(b=>({label:b.label,selector:b.selector,rect:_==="original"?b.originalRect:b.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:b,sizeChanged:v}of c){const S=_.originalRect,C=_.currentRect;if(!b&&!v){u+=`- ${_.label} — unchanged at (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(n==="compact"){b&&v?u+=`- Suggested: move **${_.label}** to (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`:b?u+=`- Suggested: move **${_.label}** to (${Math.round(C.x)}, ${Math.round(C.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(b&&v?u+=`- Suggested: move and resize **${_.label}**
`:b?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(S.width)}×${Math.round(S.height)}px to ${Math.round(C.width)}×${Math.round(C.height)}px
`,b){const M=Om(S,g("original")),T=Om(C,g("current")),I=v?{width:S.width,height:S.height}:void 0;u+=`  - Currently ${P4(M,{x:S.x,y:S.y},I)}
`;const B=v?{width:C.width,height:C.height}:void 0,N=`at (${Math.round(C.x)}, ${Math.round(C.y)})`,P=B?`, ${Math.round(B.width)}×${Math.round(B.height)}px`:"",V=qx(T,{includeLeftRight:n==="detailed"||n==="forensic"});if(V.length>0){u+=`  - Suggested position ${N}${P}: ${V[0]}
`;for(let Q=1;Q<V.length;Q++)u+=`    ${V[Q]}
`}else u+=`  - Suggested position ${N}${P}
`;const U=Kx(C,p);U&&(u+=`  - CSS: ${U}
`)}const j=V4(_.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const M=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;M!==_.selector&&(u+=`  - Element: \`${M}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`)}if(n!=="compact"){const _=c.filter(v=>v.posMoved).map(v=>({label:v.section.label,originalRect:v.section.originalRect,currentRect:v.section.currentRect})),b=H4(_);if(b.length>0){u+=`
### Layout Summary
`;for(const v of b)u+=`- ${v}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((b,v)=>Math.abs(b.currentRect.y-v.currentRect.y)<20?b.currentRect.x-v.currentRect.x:b.currentRect.y-v.currentRect.y);for(const b of _){const v=b.currentRect,S=Math.abs(v.x-b.originalRect.x)>1||Math.abs(v.y-b.originalRect.y)>1||Math.abs(v.width-b.originalRect.width)>1||Math.abs(v.height-b.originalRect.height)>1;u+=`- ${b.label}: \`${Math.round(v.width)}×${Math.round(v.height)}px\` at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`${S?" ← suggested":""}
`}}return u}var zm="feedback-annotations-",Zx=7;function Md(t){return`${zm}${t}`}function em(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Md(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-Zx*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function Jx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Md(t),JSON.stringify(n))}catch{}}function Y4(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Zx*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(zm)){const c=a.slice(zm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function ac(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));Jx(t,a)}var mp="agentation-design-";function W4(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function F4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function X4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-rearrange-";function q4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function G4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function K4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var _p="agentation-wireframe-";function Q4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${_p}${t}`);return n?JSON.parse(n):null}catch{return null}}function Xy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${_p}${t}`,JSON.stringify(n))}catch{}}function Ju(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${_p}${t}`)}catch{}}var eb="agentation-session-";function gp(t){return`${eb}${t}`}function Z4(t){if(typeof window>"u")return null;try{return localStorage.getItem(gp(t))}catch{return null}}function tm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(gp(t),n)}catch{}}function J4(t){if(!(typeof window>"u"))try{localStorage.removeItem(gp(t))}catch{}}var tb=`${eb}toolbar-hidden`;function e6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(tb)==="1"}catch{return!1}}function t6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(tb,"1")}catch{}}async function nm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function qy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function sl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Gy(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Fa(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var En={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Ky=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Qy=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],n6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function s6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Ky;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Ky,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Qy,...t.skipPatterns]:Qy,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:n6,filter:t==null?void 0:t.filter}}function o6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function i6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function a6(t,n){const i=o6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function r6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&a6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ol=null,l6=new WeakMap;function sm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function c6(){if(ol!==null)return ol;if(typeof document>"u")return!1;if(document.body&&sm(document.body))return ol=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&sm(i))return ol=!0,!0}if(document.body){for(const n of document.body.children)if(sm(n))return ol=!0,!0}return ol=!1,!1}var rc={map:l6};function u6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function d6(t){const n=u6(t);return n?t[n]:null}function mr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function f6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===En.HostComponent||n===En.HostText||n===En.HostHoistable||n===En.HostSingleton||n===En.Fragment||n===En.Mode||n===En.Profiler||n===En.DehydratedFragment||n===En.HostRoot||n===En.HostPortal||n===En.ScopeComponent||n===En.OffscreenComponent||n===En.LegacyHiddenComponent||n===En.CacheComponent||n===En.TracingMarkerComponent||n===En.Throw||n===En.ViewTransitionComponent||n===En.ActivityComponent)return null;if(n===En.ForwardRef){const u=a;if(u!=null&&u.render){const d=mr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:mr(i)}if(n===En.MemoComponent||n===En.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=mr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:mr(i)}if(n===En.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===En.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===En.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?mr(u._result):null}return n===En.SuspenseComponent||n===En.SuspenseListComponent?null:n===En.IncompleteClassComponent||n===En.IncompleteFunctionComponent||n===En.FunctionComponent||n===En.ClassComponent||n===En.IndeterminateComponent?mr(i):null}function h6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function m6(t,n){const i=s6(n),a=i.mode==="all";if(a){const p=rc.map.get(t);if(p!==void 0)return p}if(!c6()){const p={path:null,components:[]};return a&&rc.map.set(t,p),p}const c=i.mode==="smart"?i6(t):void 0,u=[];try{let p=d6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=f6(p);_&&!h6(_)&&r6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&rc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&rc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&rc.map.set(t,h),h}var lc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function p6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function wc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function _6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:wc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:wc(i._debugOwner)};i=i.return,a++}return null}function g6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:wc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:wc(n)}}}n=n.return,i++}return null}var ed=new Map;function y6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===lc.FunctionComponent||n===lc.IndeterminateComponent)&&typeof i=="function")return i;if(n===lc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===lc.MemoComponent||n===lc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function x6(){const t=Av,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function b6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function v6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function w6(t){const n=y6(t);if(!n)return null;if(ed.has(n))return ed.get(n);const i=x6();if(!i)return ed.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=b6(d.stack);h&&(c={fileName:v6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:wc(t)||void 0})}}}finally{i.set(a)}return ed.set(n,c),c}function S6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=w6(i);if(c)return c;i=i.return,a++}return null}function $m(t){const n=p6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=_6(n);if(i||(i=g6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=S6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function C6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function k6(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=$m(i);if(c.found)return c;i=i.parentElement,a++}return $m(t)}var j6=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,M6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=j6}var Pe=M6,cc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Zy(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var T6=`@keyframes styles-module__markerIn___x4G8D {
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
}`,E6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=T6}var Ys=E6;function Jy({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:b,tooltipStyle:v,onHoverEnter:S,onHoverLeave:C,onClick:j,onContextMenu:M}){const T=(h||p)&&!g,I=T&&b==="delete",B=t.isMultiSelect,N=B?"var(--agentation-color-green)":"var(--agentation-color-accent)",P=c?Ys.exit:u?Ys.clearing:d?"":Ys.enter,Y=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Ys.marker} ${B?Ys.multiSelect:""} ${P} ${I?Ys.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:I?void 0:N,animationDelay:Y},onMouseEnter:()=>S(t),onMouseLeave:C,onClick:V=>{V.stopPropagation(),c||j(t)},onContextMenu:M?V=>{b==="delete"&&(V.preventDefault(),V.stopPropagation(),c||M(t))}:void 0,children:[T?I?l.jsx(Px,{size:B?18:16}):l.jsx(Uw,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Ys.renumber:void 0,children:n+1}),h&&!g&&l.jsxs("div",{className:`${Ys.markerTooltip} ${Ys.enter}`,style:v,children:[l.jsxs("span",{className:Ys.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Ys.markerNote,children:t.comment})]})]})}function A6({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Ys.marker} ${Ys.pending} ${i?Ys.multiSelect:""} ${a?Ys.exit:Ys.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(Aw,{size:12})})}function e1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Ys.marker} ${n?Ys.fixed:""} ${Ys.hovered} ${i?Ys.multiSelect:""} ${Ys.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Px,{size:i?12:10})})}var D6=`.styles-module__switchContainer___Ka-AB {
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
}`,N6={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=D6}var om=N6,im=({className:t="",...n})=>l.jsxs("div",{className:`${om.switchContainer} ${t}`,children:[l.jsx("input",{className:om.switchInput,type:"checkbox",...n}),l.jsx("div",{className:om.switchThumb})]}),R6=`.styles-module__checkboxContainer___joqZk {
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
}`,B6={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=R6}var td=B6,L6=({className:t="",...n})=>l.jsxs("div",{className:`${td.checkboxContainer} ${t}`,children:[l.jsx("input",{className:td.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:td.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:td.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),O6=`.styles-module__container___w8eAF {
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
}`,z6={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=O6}var t1=z6,n1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${t1.container} ${t}`,...u,children:[l.jsx(L6,{id:d,onChange:c,checked:a}),l.jsx("label",{className:t1.label,htmlFor:d,children:n}),i&&l.jsx(br,{content:i})]})},$6=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,I6={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=$6}var Ct=I6;function P6({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:b}){var v;return l.jsx("div",{className:`${Ct.settingsPanel} ${h?Ct.enter:Ct.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Ct.settingsPanelContainer,children:[l.jsxs("div",{className:`${Ct.settingsPage} ${g==="automations"?Ct.slideLeft:""}`,children:[l.jsxs("div",{className:Ct.settingsHeader,children:[l.jsx("a",{className:Ct.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Ct.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Ct.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Ct.themeIconWrapper,children:l.jsx("span",{className:Ct.themeIcon,children:i?l.jsx(Pw,{size:20}):l.jsx(Hw,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Output Detail",l.jsx(br,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Ct.cycleButton,onClick:()=>{const C=(cc.findIndex(j=>j.value===t.outputDetail)+1)%cc.length;n({outputDetail:cc[C].value})},children:[l.jsx("span",{className:Ct.cycleButtonText,children:(v=cc.find(S=>S.value===t.outputDetail))==null?void 0:v.label},t.outputDetail),l.jsx("span",{className:Ct.cycleDots,children:cc.map(S=>l.jsx("span",{className:`${Ct.cycleDot} ${t.outputDetail===S.value?Ct.active:""}`},S.value))})]})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop} ${c?"":Ct.settingsRowDisabled}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["React Components",l.jsx(br,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(im,{checked:c&&t.reactEnabled,onChange:S=>n({reactEnabled:S.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Hide Until Restart",l.jsx(br,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(im,{checked:!1,onChange:S=>{S.target.checked&&b()}})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx("div",{className:`${Ct.settingsLabel} ${Ct.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Ct.colorOptions,children:_c.map(S=>l.jsx("button",{className:`${Ct.colorOption} ${t.annotationColorId===S.id?Ct.selected:""}`,style:{"--swatch":S.srgb,"--swatch-p3":S.p3},onClick:()=>n({annotationColorId:S.id}),title:S.label,type:"button"},S.id))})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx(n1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:S=>n({autoClearAfterCopy:S.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(n1,{className:Ct.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:S=>n({blockInteractions:S.target.checked})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("button",{className:Ct.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Ct.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Ct.mcpNavIndicator} ${Ct[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Ct.settingsPage} ${Ct.automationsPage} ${g==="automations"?Ct.slideIn:""}`,children:[l.jsxs("button",{className:Ct.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(Yw,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["MCP Connection",l.jsx(br,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Ct.mcpStatusDot} ${Ct[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Ct.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ct.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:`${Ct.settingsSection} ${Ct.settingsSectionGrow}`,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["Webhooks",l.jsx(br,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Ct.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Ct.autoSendLabel} ${t.webhooksEnabled?Ct.active:""} ${t.webhookUrl?"":Ct.disabled}`,children:"Auto-Send"}),l.jsx(im,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:S=>n({webhooksEnabled:S.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Ct.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Ct.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:S=>S.stopPropagation(),onChange:S=>n({webhookUrl:S.target.value})})]})]})]})})}function am(t,n="filtered"){const{name:i,path:a}=dl(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=m6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var s1=!1,rm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Ki=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},_c=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],H6=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[..._c.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${_c.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${_c.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};H6();function pr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function lm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function _r(t){return t.status!=="resolved"&&t.status!=="dismissed"}function nd(t){const n=$m(t),i=n.found?n:k6(t);if(i.found&&i.source)return C6(i.source,"path")}function U6({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:b,onSessionCreated:v,webhookUrl:S,className:C}={}){var Ko,Lc,bl,vl,wa,Sa,Oc;const[j,M]=y.useState(!1),[T,I]=y.useState([]),[B,N]=y.useState(!0),[P,Y]=y.useState(()=>e6()),[V,U]=y.useState(!1),Q=y.useRef(null);y.useEffect(()=>{const R=G=>{const W=Q.current;W&&W.contains(G.target)&&G.stopPropagation()},$=["mousedown","click","pointerdown"];return $.forEach(G=>document.body.addEventListener(G,R)),()=>{$.forEach(G=>document.body.removeEventListener(G,R))}},[]);const[se,oe]=y.useState(!1),[be,Ee]=y.useState(!1),[K,le]=y.useState(null),[z,ie]=y.useState({x:0,y:0}),[X,me]=y.useState(null),[Te,A]=y.useState(!1),[ee,q]=y.useState("idle"),[ue,je]=y.useState(!1),[Re,ve]=y.useState(!1),[ot,Xe]=y.useState(null),[$e,lt]=y.useState(null),[nt,zt]=y.useState([]),[ct,Rt]=y.useState(null),[Oe,dt]=y.useState(null),[ce,He]=y.useState(null),[Ge,ze]=y.useState(null),[Mt,ft]=y.useState([]),[rt,it]=y.useState(0),[at,Et]=y.useState(!1),[Ze,H]=y.useState(!1),[Z,te]=y.useState(!1),[_e,Fe]=y.useState(!1),[Ue,De]=y.useState(!1),[St,Ve]=y.useState("main"),[bt,pt]=y.useState(!1),[Ie,st]=y.useState(!1),[Ht,cn]=y.useState(!1),[Ke,Bt]=y.useState([]),[At,Ot]=y.useState(null),un=y.useRef(!1),[_t,qt]=y.useState(!1),[An,os]=y.useState(!1),[gn,lo]=y.useState(1),[is,Wn]=y.useState("new-page"),[Wt,Mn]=y.useState(""),[an,tn]=y.useState(!1),[Qe,Zn]=y.useState(null),Ls=y.useRef(!1),Fs=y.useRef({rearrange:null,placements:[]}),ys=y.useRef({rearrange:null,placements:[]}),[Xs,Mo]=y.useState(0),[yo,as]=y.useState(0),[xs,Os]=y.useState(0),[nn,pi]=y.useState(0),Wo=y.useRef(new Set),bs=y.useRef(new Set),Rn=y.useRef(null),Lo=y.useRef(),oi=Ie&&j&&!Ht&&_t;y.useEffect(()=>{if(oi){os(!1);const R=rl(()=>{os(!0)});return()=>cancelAnimationFrame(R)}else os(!1)},[oi]);const Oo=y.useRef(new Map),Fo=y.useRef(new Map),co=y.useRef(),[vs,zs]=y.useState(!1),[vn,Jn]=y.useState([]),Yi=y.useRef(vn);Yi.current=vn;const[Xo,so]=y.useState(null),xo=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[zo,rs]=y.useState(!1),$s=y.useRef(null),[Cn,uo]=y.useState([]),ls=y.useRef({cmd:!1,shift:!1}),Fn=()=>{pt(!0)},_i=()=>{pt(!1)},To=()=>{zo||($s.current=Pt(()=>rs(!0),850))},qo=()=>{$s.current&&(clearTimeout($s.current),$s.current=null),rs(!1),_i()};y.useEffect(()=>()=>{$s.current&&clearTimeout($s.current)},[]);const[Xt,Di]=y.useState(()=>{var R;try{const $=JSON.parse((R=localStorage.getItem("feedback-toolbar-settings"))!=null?R:"");return{...rm,...$,annotationColorId:_c.find(G=>G.id===$.annotationColorId)?$.annotationColorId:rm.annotationColorId}}catch{return rm}}),[Is,Go]=y.useState(!0),[$o,Io]=y.useState(!1),Ps=()=>{var R;(R=Q.current)==null||R.classList.add(Pe.disableTransitions),Go($=>!$),rl(()=>{var $;($=Q.current)==null||$.classList.remove(Pe.disableTransitions)})},Eo=!1,Es="off",[wn,fo]=y.useState(b!=null?b:null),Xn=y.useRef(!1),[ws,qn]=y.useState(_?"connecting":"disconnected"),[Qt,qs]=y.useState(null),[es,Gs]=y.useState(!1),[cs,Ao]=y.useState(null),Ss=y.useRef(!1),[ii,As]=y.useState(new Set),[Ds,ho]=y.useState(new Set),[x,k]=y.useState(!1),[D,O]=y.useState(!1),[ae,he]=y.useState(!1),we=y.useRef(null),Ne=y.useRef(null),Je=y.useRef(null),ut=y.useRef(null),$t=y.useRef(!1),Dt=y.useRef(0),sn=y.useRef(null),Ut=y.useRef(null),zn=8,Dn=50,oo=y.useRef(null),bo=y.useRef(null),en=y.useRef(null),qe=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(_e)De(!0);else{pt(!1),Ve("main");const R=Pt(()=>De(!1),0);return()=>clearTimeout(R)}},[_e]);const ts=j&&B&&!Ie;y.useEffect(()=>{if(ts){Ee(!1),oe(!0),As(new Set);const R=Pt(()=>{As($=>{const G=new Set($);return T.forEach(W=>G.add(W.id)),G})},350);return()=>clearTimeout(R)}else if(se){Ee(!0);const R=Pt(()=>{oe(!1),Ee(!1)},250);return()=>clearTimeout(R)}},[ts]),y.useEffect(()=>{H(!0),it(window.scrollY);const R=em(qe);I(R.filter(_r)),s1||(Io(!0),s1=!0,Pt(()=>Io(!1),750));try{const $=localStorage.getItem("feedback-toolbar-theme");$!==null&&Go($==="dark")}catch{}try{const $=localStorage.getItem("feedback-toolbar-position");if($){const G=JSON.parse($);typeof G.x=="number"&&typeof G.y=="number"&&qs(G)}}catch{}},[qe]),y.useEffect(()=>{Ze&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Xt))},[Xt,Ze]),y.useEffect(()=>{Ze&&localStorage.setItem("feedback-toolbar-theme",Is?"dark":"light")},[Is,Ze]);const Ks=y.useRef(!1);y.useEffect(()=>{const R=Ks.current;Ks.current=es,R&&!es&&Qt&&Ze&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Qt))},[es,Qt,Ze]),y.useEffect(()=>{if(!_||!Ze||Xn.current)return;Xn.current=!0,qn("connecting"),(async()=>{try{const $=Z4(qe),G=b||$;let W=!1;if(G)try{const ne=await qy(_,G);fo(ne.id),qn("connected"),tm(qe,ne.id),W=!0;const ye=em(qe),Ye=new Set(ne.annotations.map(tt=>tt.id)),We=ye.filter(tt=>!Ye.has(tt.id));if(We.length>0){const vt=`${typeof window<"u"?window.location.origin:""}${qe}`,Gt=(await Promise.allSettled(We.map(wt=>sl(_,ne.id,{...wt,sessionId:ne.id,url:vt})))).map((wt,ht)=>wt.status==="fulfilled"?wt.value:(console.warn("[Agentation] Failed to sync annotation:",wt.reason),We[ht])),Kt=[...ne.annotations,...Gt];I(Kt.filter(_r)),ac(qe,Kt.filter(_r),ne.id)}else I(ne.annotations.filter(_r)),ac(qe,ne.annotations.filter(_r),ne.id)}catch(ne){console.warn("[Agentation] Could not join session, creating new:",ne),J4(qe)}if(!W){const ne=typeof window<"u"?window.location.href:"/",ye=await nm(_,ne);fo(ye.id),qn("connected"),tm(qe,ye.id),v==null||v(ye.id);const Ye=Y4(),We=typeof window<"u"?window.location.origin:"",tt=[];for(const[vt,Nt]of Ye){const Gt=Nt.filter(ht=>!ht._syncedTo);if(Gt.length===0)continue;const Kt=`${We}${vt}`,wt=vt===qe;tt.push((async()=>{try{const ht=wt?ye:await nm(_,Kt),ms=(await Promise.allSettled(Gt.map(bn=>sl(_,ht.id,{...bn,sessionId:ht.id,url:Kt})))).map((bn,Nn)=>bn.status==="fulfilled"?bn.value:(console.warn("[Agentation] Failed to sync annotation:",bn.reason),Gt[Nn])).filter(_r);if(ac(vt,ms,ht.id),wt){const bn=new Set(Gt.map(Nn=>Nn.id));I(Nn=>{const Yt=Nn.filter(Ft=>!bn.has(Ft.id));return[...ms,...Yt]})}}catch(ht){console.warn(`[Agentation] Failed to sync annotations for ${vt}:`,ht)}})())}await Promise.allSettled(tt)}}catch($){qn("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",$)}})()},[_,b,Ze,v,qe]),y.useEffect(()=>{if(!_||!Ze)return;const R=async()=>{try{(await fetch(`${_}/health`)).ok?qn("connected"):qn("disconnected")}catch{qn("disconnected")}};R();const $=Xw(R,1e4);return()=>clearInterval($)},[_,Ze]),y.useEffect(()=>{if(!_||!Ze||!wn)return;const R=new EventSource(`${_}/sessions/${wn}/events`),$=["resolved","dismissed"],G=W=>{var ne;try{const ye=JSON.parse(W.data);if($.includes((ne=ye.payload)==null?void 0:ne.status)){const Ye=ye.payload.id,We=ye.payload.kind;if(We==="placement"){for(const[tt,vt]of Oo.current)if(vt===Ye){Oo.current.delete(tt),Bt(Nt=>Nt.filter(Gt=>Gt.id!==tt));break}}else if(We==="rearrange"){for(const[tt,vt]of Fo.current)if(vt===Ye){Fo.current.delete(tt),Zn(Nt=>{if(!Nt)return null;const Gt=Nt.sections.filter(Kt=>Kt.id!==tt);return Gt.length===0?null:{...Nt,sections:Gt}});break}}else ho(tt=>new Set(tt).add(Ye)),Pt(()=>{I(tt=>tt.filter(vt=>vt.id!==Ye)),ho(tt=>{const vt=new Set(tt);return vt.delete(Ye),vt})},150)}}catch{}};return R.addEventListener("annotation.updated",G),()=>{R.removeEventListener("annotation.updated",G),R.close()}},[_,Ze,wn]),y.useEffect(()=>{if(!_||!Ze)return;const R=Ut.current==="disconnected",$=ws==="connected";Ut.current=ws,R&&$&&(async()=>{try{const W=em(qe);if(W.length===0)return;const ye=`${typeof window<"u"?window.location.origin:""}${qe}`;let Ye=wn,We=[];if(Ye)try{We=(await qy(_,Ye)).annotations}catch{Ye=null}Ye||(Ye=(await nm(_,ye)).id,fo(Ye),tm(qe,Ye));const tt=new Set(We.map(Nt=>Nt.id)),vt=W.filter(Nt=>!tt.has(Nt.id));if(vt.length>0){const Gt=(await Promise.allSettled(vt.map(ht=>sl(_,Ye,{...ht,sessionId:Ye,url:ye})))).map((ht,fs)=>ht.status==="fulfilled"?ht.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ht.reason),vt[fs])),wt=[...We,...Gt].filter(_r);I(wt),ac(qe,wt,Ye)}}catch(W){console.warn("[Agentation] Failed to sync on reconnect:",W)}})()},[ws,_,Ze,wn,qe]);const Do=y.useCallback(()=>{V||(U(!0),Fe(!1),M(!1),Pt(()=>{t6(!0),Y(!0),U(!1)},400))},[V]);y.useEffect(()=>{if(!i||!Ze||!t||t.length===0||T.length>0)return;const R=[];return R.push(Pt(()=>{M(!0)},n-200)),t.forEach(($,G)=>{const W=n+G*300;R.push(Pt(()=>{const ne=document.querySelector($.selector);if(!ne)return;const ye=ne.getBoundingClientRect(),{name:Ye,path:We}=dl(ne),tt={id:`demo-${Date.now()}-${G}`,x:(ye.left+ye.width/2)/window.innerWidth*100,y:ye.top+ye.height/2+window.scrollY,comment:$.comment,element:Ye,elementPath:We,timestamp:Date.now(),selectedText:$.selectedText,boundingBox:{x:ye.left,y:ye.top+window.scrollY,width:ye.width,height:ye.height},nearbyText:oc(ne),cssClasses:ic(ne)};I(vt=>[...vt,tt])},W))}),()=>{R.forEach(clearTimeout)}},[i,Ze,t,n]),y.useEffect(()=>{const R=()=>{it(window.scrollY),Et(!0),en.current&&clearTimeout(en.current),en.current=Pt(()=>{Et(!1)},150)};return window.addEventListener("scroll",R,{passive:!0}),()=>{window.removeEventListener("scroll",R),en.current&&clearTimeout(en.current)}},[]),y.useEffect(()=>{Ze&&T.length>0?wn?ac(qe,T,wn):Jx(qe,T):Ze&&T.length===0&&localStorage.removeItem(Md(qe))},[T,qe,Ze,wn]),y.useEffect(()=>{if(Ze&&!un.current){un.current=!0;const R=W4(qe);R.length>0&&Bt(R)}},[Ze,qe]),y.useEffect(()=>{Ze&&un.current&&!_t&&(Ke.length>0?F4(qe,Ke):X4(qe))},[Ke,qe,Ze,_t]),y.useEffect(()=>{if(Ze&&!Ls.current){Ls.current=!0;const R=q4(qe);if(R){const $={...R,sections:R.sections.map(G=>{var W;return{...G,currentRect:(W=G.currentRect)!=null?W:{...G.originalRect}}})};Zn($)}}},[Ze,qe]),y.useEffect(()=>{Ze&&Ls.current&&!_t&&(Qe?G4(qe,Qe):K4(qe))},[Qe,qe,Ze,_t]);const js=y.useRef(!1);y.useEffect(()=>{if(Ze&&!js.current){js.current=!0;const R=Q4(qe);R&&(ys.current={rearrange:R.rearrange,placements:R.placements||[]},R.purpose&&Mn(R.purpose))}},[Ze,qe]),y.useEffect(()=>{var $,G,W,ne,ye;if(!Ze||!js.current)return;const R=ys.current;_t?((G=($=Qe==null?void 0:Qe.sections)==null?void 0:$.length)!=null?G:0)>0||Ke.length>0||Wt?Xy(qe,{rearrange:Qe,placements:Ke,purpose:Wt}):Ju(qe):((ye=(ne=(W=R.rearrange)==null?void 0:W.sections)==null?void 0:ne.length)!=null?ye:0)>0||R.placements.length>0||Wt?Xy(qe,{rearrange:R.rearrange,placements:R.placements,purpose:Wt}):Ju(qe)},[Qe,Ke,Wt,_t,qe,Ze]),y.useEffect(()=>{Ie&&!Qe&&Zn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ie,Qe]),y.useEffect(()=>{if(!_||!wn)return;const R=Oo.current,$=new Set(Ke.map(G=>G.id));for(const G of Ke){if(R.has(G.id))continue;R.set(G.id,"");const W=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:qe;sl(_,wn,{id:G.id,x:G.x/window.innerWidth*100,y:G.y,comment:`Place ${G.type} at (${Math.round(G.x)}, ${Math.round(G.y)}), ${G.width}×${G.height}px${G.text?` — "${G.text}"`:""}`,element:`[design:${G.type}]`,elementPath:"[placement]",timestamp:G.timestamp,url:W,intent:"change",severity:"important",kind:"placement",placement:{componentType:G.type,width:G.width,height:G.height,scrollY:G.scrollY,text:G.text}}).then(ne=>{R.has(G.id)&&R.set(G.id,ne.id)}).catch(ne=>{console.warn("[Agentation] Failed to sync placement annotation:",ne),R.delete(G.id)})}for(const[G,W]of R)$.has(G)||(R.delete(G),W&&Fa(_,W).catch(()=>{}))},[Ke,_,wn,qe]),y.useEffect(()=>{if(!(!_||!wn))return co.current&&clearTimeout(co.current),co.current=Pt(()=>{const R=Fo.current;if(!Qe||Qe.sections.length===0){for(const[,W]of R)W&&Fa(_,W).catch(()=>{});R.clear();return}const $=new Set(Qe.sections.map(W=>W.id)),G=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:qe;for(const W of Qe.sections){const ne=W.originalRect,ye=W.currentRect;if(!(Math.abs(ne.x-ye.x)>1||Math.abs(ne.y-ye.y)>1||Math.abs(ne.width-ye.width)>1||Math.abs(ne.height-ye.height)>1)){const tt=R.get(W.id);tt&&(R.delete(W.id),Fa(_,tt).catch(()=>{}));continue}const We=R.get(W.id);We?Gy(_,We,{comment:`Move ${W.label} section (${W.tagName}) — from (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}×${Math.round(ne.height)} to (${Math.round(ye.x)},${Math.round(ye.y)}) ${Math.round(ye.width)}×${Math.round(ye.height)}`}).catch(tt=>{console.warn("[Agentation] Failed to update rearrange annotation:",tt)}):(R.set(W.id,""),sl(_,wn,{id:W.id,x:ye.x/window.innerWidth*100,y:ye.y,comment:`Move ${W.label} section (${W.tagName}) — from (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}×${Math.round(ne.height)} to (${Math.round(ye.x)},${Math.round(ye.y)}) ${Math.round(ye.width)}×${Math.round(ye.height)}`,element:W.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:G,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:W.selector,label:W.label,tagName:W.tagName,originalRect:ne,currentRect:ye}}).then(tt=>{R.has(W.id)&&R.set(W.id,tt.id)}).catch(tt=>{console.warn("[Agentation] Failed to sync rearrange annotation:",tt),R.delete(W.id)}))}for(const[W,ne]of R)$.has(W)||(R.delete(W),ne&&Fa(_,ne).catch(()=>{}))},300),()=>{co.current&&clearTimeout(co.current)}},[Qe,_,wn,qe]);const Ms=y.useRef(new Map);y.useLayoutEffect(()=>{var G;const R=(G=Qe==null?void 0:Qe.sections)!=null?G:[],$=new Set;if((Ie||Ht)&&j)for(const W of R){$.add(W.id);try{const ne=document.querySelector(W.selector);if(!ne)continue;if(!Ms.current.has(W.id)){const ye={transform:ne.style.transform,transformOrigin:ne.style.transformOrigin,opacity:ne.style.opacity,position:ne.style.position,zIndex:ne.style.zIndex,display:ne.style.display},Ye=[];let We=ne.parentElement;for(;We&&We!==document.body;){const vt=getComputedStyle(We);(vt.overflow!=="visible"||vt.overflowX!=="visible"||vt.overflowY!=="visible")&&(Ye.push({el:We,overflow:We.style.overflow}),We.style.overflow="visible"),We=We.parentElement}getComputedStyle(ne).display==="inline"&&(ne.style.display="inline-block"),Ms.current.set(W.id,{el:ne,origStyles:ye,ancestors:Ye}),ne.style.transformOrigin="top left",ne.style.zIndex="9999"}}catch{}}for(const[W,ne]of Ms.current)if(!$.has(W)){const{el:ye,origStyles:Ye,ancestors:We}=ne;ye.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ye.style.transform=Ye.transform,ye.style.transformOrigin=Ye.transformOrigin,ye.style.opacity=Ye.opacity,ye.style.position=Ye.position,ye.style.zIndex=Ye.zIndex,Ms.current.delete(W),Pt(()=>{ye.style.transition="",ye.style.display=Ye.display;for(const tt of We)tt.el.style.overflow=tt.overflow},450)}},[Qe,Ie,Ht,j]),y.useEffect(()=>()=>{for(const[,R]of Ms.current){const{el:$,origStyles:G,ancestors:W}=R;$.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",$.style.transform=G.transform,$.style.transformOrigin=G.transformOrigin,$.style.opacity=G.opacity,$.style.position=G.position,$.style.zIndex=G.zIndex,Pt(()=>{$.style.transition="",$.style.display=G.display;for(const ne of W)ne.el.style.overflow=ne.overflow},450)}Ms.current.clear()},[]);const mo=y.useCallback(()=>{cn(!0),st(!1),Ot(null),clearTimeout(Lo.current),Lo.current=Pt(()=>{cn(!1)},300)},[]),yn=y.useCallback(()=>{Ie&&(cn(!0),st(!1),Ot(null),clearTimeout(Lo.current),Lo.current=Pt(()=>{cn(!1)},300)),M(!1)},[Ie]),Cs=y.useCallback(()=>{Z||(Gw(),te(!0))},[Z]),$n=y.useCallback(()=>{Z&&(Ry(),te(!1))},[Z]),ai=y.useCallback(()=>{Z?$n():Cs()},[Z,Cs,$n]),ta=y.useCallback(()=>{if(Cn.length===0)return;const R=Cn[0],$=R.element,G=Cn.length>1,W=Cn.map(ne=>ne.element.getBoundingClientRect());if(G){const ne={left:Math.min(...W.map(ht=>ht.left)),top:Math.min(...W.map(ht=>ht.top)),right:Math.max(...W.map(ht=>ht.right)),bottom:Math.max(...W.map(ht=>ht.bottom))},ye=Cn.slice(0,5).map(ht=>ht.name).join(", "),Ye=Cn.length>5?` +${Cn.length-5} more`:"",We=W.map(ht=>({x:ht.left,y:ht.top+window.scrollY,width:ht.width,height:ht.height})),vt=Cn[Cn.length-1].element,Nt=W[W.length-1],Gt=Nt.left+Nt.width/2,Kt=Nt.top+Nt.height/2,wt=lm(vt);me({x:Gt/window.innerWidth*100,y:wt?Kt:Kt+window.scrollY,clientY:Kt,element:`${Cn.length} elements: ${ye}${Ye}`,elementPath:"multi-select",boundingBox:{x:ne.left,y:ne.top+window.scrollY,width:ne.right-ne.left,height:ne.bottom-ne.top},isMultiSelect:!0,isFixed:wt,elementBoundingBoxes:We,multiSelectElements:Cn.map(ht=>ht.element),targetElement:vt,fullPath:Ku($),accessibility:Gu($),computedStyles:qu($),computedStylesObj:Xu($),nearbyElements:Fu($),cssClasses:ic($),nearbyText:oc($),sourceFile:nd($)})}else{const ne=W[0],ye=lm($);me({x:ne.left/window.innerWidth*100,y:ye?ne.top:ne.top+window.scrollY,clientY:ne.top,element:R.name,elementPath:R.path,boundingBox:{x:ne.left,y:ye?ne.top:ne.top+window.scrollY,width:ne.width,height:ne.height},isFixed:ye,fullPath:Ku($),accessibility:Gu($),computedStyles:qu($),computedStylesObj:Xu($),nearbyElements:Fu($),cssClasses:ic($),nearbyText:oc($),reactComponents:R.reactComponents,sourceFile:nd($)})}uo([]),le(null)},[Cn]);y.useEffect(()=>{j||(me(null),He(null),ze(null),ft([]),le(null),Fe(!1),uo([]),ls.current={cmd:!1,shift:!1},Z&&$n())},[j,Z,$n]),y.useEffect(()=>()=>{Ry()},[]),y.useEffect(()=>{if(!j)return;const R=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),$=":not([data-agentation-root]):not([data-agentation-root] *)",G=document.createElement("style");return G.id="feedback-cursor-styles",G.textContent=`
      body ${$} {
        cursor: crosshair !important;
      }

      body :is(${R})${$} {
        cursor: text !important;
      }
    `,document.head.appendChild(G),()=>{const W=document.getElementById("feedback-cursor-styles");W&&W.remove()}},[j]),y.useEffect(()=>{if(Xo!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Xo,j]),y.useEffect(()=>{if(!j||X||vs||Ie)return;const R=$=>{const G=$.composedPath()[0]||$.target;if(Ho(G,"[data-feedback-toolbar]")){le(null);return}const W=pr($.clientX,$.clientY);if(!W||Ho(W,"[data-feedback-toolbar]")){le(null);return}const{name:ne,elementName:ye,path:Ye,reactComponents:We}=am(W,Es),tt=W.getBoundingClientRect();le({element:ne,elementName:ye,elementPath:Ye,rect:tt,reactComponents:We}),ie({x:$.clientX,y:$.clientY})};return document.addEventListener("mousemove",R),()=>document.removeEventListener("mousemove",R)},[j,X,vs,Ie,Es,vn]);const gi=y.useCallback(R=>{var $;if(He(R),Xe(null),lt(null),zt([]),($=R.elementBoundingBoxes)!=null&&$.length){const G=[];for(const W of R.elementBoundingBoxes){const ne=W.x+W.width/2,ye=W.y+W.height/2-window.scrollY,Ye=pr(ne,ye);Ye&&G.push(Ye)}ft(G),ze(null)}else if(R.boundingBox){const G=R.boundingBox,W=G.x+G.width/2,ne=R.isFixed?G.y+G.height/2:G.y+G.height/2-window.scrollY,ye=pr(W,ne);if(ye){const Ye=ye.getBoundingClientRect(),We=Ye.width/G.width,tt=Ye.height/G.height;We<.5||tt<.5?ze(null):ze(ye)}else ze(null);ft([])}else ze(null),ft([])},[]);y.useEffect(()=>{if(!j||vs||Ie)return;const R=$=>{var hs,ms;if($t.current){$t.current=!1;return}const G=$.composedPath()[0]||$.target;if(Ho(G,"[data-feedback-toolbar]")||Ho(G,"[data-annotation-popup]")||Ho(G,"[data-annotation-marker]"))return;if($.metaKey&&$.shiftKey&&!X&&!ce){$.preventDefault(),$.stopPropagation();const bn=pr($.clientX,$.clientY);if(!bn)return;const Nn=bn.getBoundingClientRect(),{name:Yt,path:Ft,reactComponents:ps}=am(bn,Es),Sn=Cn.findIndex(io=>io.element===bn);Sn>=0?uo(io=>io.filter((No,Gn)=>Gn!==Sn)):uo(io=>[...io,{element:bn,rect:Nn,name:Yt,path:Ft,reactComponents:ps!=null?ps:void 0}]);return}const W=Ho(G,"button, a, input, select, textarea, [role='button'], [onclick]");if(Xt.blockInteractions&&W&&($.preventDefault(),$.stopPropagation()),X){if(W&&!Xt.blockInteractions)return;$.preventDefault(),(hs=oo.current)==null||hs.shake();return}if(ce){if(W&&!Xt.blockInteractions)return;$.preventDefault(),(ms=bo.current)==null||ms.shake();return}$.preventDefault();const ne=pr($.clientX,$.clientY);if(!ne)return;const{name:ye,path:Ye,reactComponents:We}=am(ne,Es),tt=ne.getBoundingClientRect(),vt=$.clientX/window.innerWidth*100,Nt=lm(ne),Gt=Nt?$.clientY:$.clientY+window.scrollY,Kt=window.getSelection();let wt;Kt&&Kt.toString().trim().length>0&&(wt=Kt.toString().trim().slice(0,500));const ht=Xu(ne),fs=qu(ne);me({x:vt,y:Gt,clientY:$.clientY,element:ye,elementPath:Ye,selectedText:wt,boundingBox:{x:tt.left,y:Nt?tt.top:tt.top+window.scrollY,width:tt.width,height:tt.height},nearbyText:oc(ne),cssClasses:ic(ne),isFixed:Nt,fullPath:Ku(ne),accessibility:Gu(ne),computedStyles:fs,computedStylesObj:ht,nearbyElements:Fu(ne),reactComponents:We!=null?We:void 0,sourceFile:nd(ne),targetElement:ne}),le(null)};return document.addEventListener("click",R,!0),()=>document.removeEventListener("click",R,!0)},[j,vs,Ie,X,ce,Xt.blockInteractions,Es,Cn]),y.useEffect(()=>{if(!j)return;const R=W=>{W.key==="Meta"&&(ls.current.cmd=!0),W.key==="Shift"&&(ls.current.shift=!0)},$=W=>{const ne=ls.current.cmd&&ls.current.shift;W.key==="Meta"&&(ls.current.cmd=!1),W.key==="Shift"&&(ls.current.shift=!1);const ye=ls.current.cmd&&ls.current.shift;ne&&!ye&&Cn.length>0&&ta()},G=()=>{ls.current={cmd:!1,shift:!1},uo([])};return document.addEventListener("keydown",R),document.addEventListener("keyup",$),window.addEventListener("blur",G),()=>{document.removeEventListener("keydown",R),document.removeEventListener("keyup",$),window.removeEventListener("blur",G)}},[j,Cn,ta]),y.useEffect(()=>{if(!j||X||vs||Ie)return;const R=$=>{const G=$.composedPath()[0]||$.target;Ho(G,"[data-feedback-toolbar]")||Ho(G,"[data-annotation-marker]")||Ho(G,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(G.tagName)||G.isContentEditable||($.preventDefault(),we.current={x:$.clientX,y:$.clientY})};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[j,X,vs,Ie]),y.useEffect(()=>{if(!j||X)return;const R=$=>{if(!we.current)return;const G=$.clientX-we.current.x,W=$.clientY-we.current.y,ne=G*G+W*W,ye=zn*zn;if(!ae&&ne>=ye&&(Ne.current=we.current,he(!0),$.preventDefault()),(ae||ne>=ye)&&Ne.current){if(Je.current){const Yt=Math.min(Ne.current.x,$.clientX),Ft=Math.min(Ne.current.y,$.clientY),ps=Math.abs($.clientX-Ne.current.x),Sn=Math.abs($.clientY-Ne.current.y);Je.current.style.transform=`translate(${Yt}px, ${Ft}px)`,Je.current.style.width=`${ps}px`,Je.current.style.height=`${Sn}px`}const Ye=Date.now();if(Ye-Dt.current<Dn)return;Dt.current=Ye;const We=Ne.current.x,tt=Ne.current.y,vt=Math.min(We,$.clientX),Nt=Math.min(tt,$.clientY),Gt=Math.max(We,$.clientX),Kt=Math.max(tt,$.clientY),wt=(vt+Gt)/2,ht=(Nt+Kt)/2,fs=new Set,hs=[[vt,Nt],[Gt,Nt],[vt,Kt],[Gt,Kt],[wt,ht],[wt,Nt],[wt,Kt],[vt,ht],[Gt,ht]];for(const[Yt,Ft]of hs){const ps=document.elementsFromPoint(Yt,Ft);for(const Sn of ps)Sn instanceof HTMLElement&&fs.add(Sn)}const ms=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Yt of ms)if(Yt instanceof HTMLElement){const Ft=Yt.getBoundingClientRect(),ps=Ft.left+Ft.width/2,Sn=Ft.top+Ft.height/2,io=ps>=vt&&ps<=Gt&&Sn>=Nt&&Sn<=Kt,No=Math.min(Ft.right,Gt)-Math.max(Ft.left,vt),Gn=Math.min(Ft.bottom,Kt)-Math.max(Ft.top,Nt),yi=No>0&&Gn>0?No*Gn:0,Ni=Ft.width*Ft.height,Ri=Ni>0?yi/Ni:0;(io||Ri>.5)&&fs.add(Yt)}const bn=[],Nn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Yt of fs){if(Ho(Yt,"[data-feedback-toolbar]")||Ho(Yt,"[data-annotation-marker]"))continue;const Ft=Yt.getBoundingClientRect();if(!(Ft.width>window.innerWidth*.8&&Ft.height>window.innerHeight*.5)&&!(Ft.width<10||Ft.height<10)&&Ft.left<Gt&&Ft.right>vt&&Ft.top<Kt&&Ft.bottom>Nt){const ps=Yt.tagName;let Sn=Nn.has(ps);if(!Sn&&(ps==="DIV"||ps==="SPAN")){const io=Yt.textContent&&Yt.textContent.trim().length>0,No=Yt.onclick!==null||Yt.getAttribute("role")==="button"||Yt.getAttribute("role")==="link"||Yt.classList.contains("clickable")||Yt.hasAttribute("data-clickable");(io||No)&&!Yt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Sn=!0)}if(Sn){let io=!1;for(const No of bn)if(No.left<=Ft.left&&No.right>=Ft.right&&No.top<=Ft.top&&No.bottom>=Ft.bottom){io=!0;break}io||bn.push(Ft)}}}if(ut.current){const Yt=ut.current;for(;Yt.children.length>bn.length;)Yt.removeChild(Yt.lastChild);bn.forEach((Ft,ps)=>{let Sn=Yt.children[ps];Sn||(Sn=document.createElement("div"),Sn.className=Pe.selectedElementHighlight,Yt.appendChild(Sn)),Sn.style.transform=`translate(${Ft.left}px, ${Ft.top}px)`,Sn.style.width=`${Ft.width}px`,Sn.style.height=`${Ft.height}px`})}}};return document.addEventListener("mousemove",R,{passive:!0}),()=>document.removeEventListener("mousemove",R)},[j,X,ae,zn]),y.useEffect(()=>{if(!j)return;const R=$=>{const G=ae,W=Ne.current;if(ae&&W){$t.current=!0;const ne=Math.min(W.x,$.clientX),ye=Math.min(W.y,$.clientY),Ye=Math.max(W.x,$.clientX),We=Math.max(W.y,$.clientY),tt=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(wt=>{if(!(wt instanceof HTMLElement)||Ho(wt,"[data-feedback-toolbar]")||Ho(wt,"[data-annotation-marker]"))return;const ht=wt.getBoundingClientRect();ht.width>window.innerWidth*.8&&ht.height>window.innerHeight*.5||ht.width<10||ht.height<10||ht.left<Ye&&ht.right>ne&&ht.top<We&&ht.bottom>ye&&tt.push({element:wt,rect:ht})});const Nt=tt.filter(({element:wt})=>!tt.some(({element:ht})=>ht!==wt&&wt.contains(ht))),Gt=$.clientX/window.innerWidth*100,Kt=$.clientY+window.scrollY;if(Nt.length>0){const wt=Nt.reduce((Nn,{rect:Yt})=>({left:Math.min(Nn.left,Yt.left),top:Math.min(Nn.top,Yt.top),right:Math.max(Nn.right,Yt.right),bottom:Math.max(Nn.bottom,Yt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ht=Nt.slice(0,5).map(({element:Nn})=>dl(Nn).name).join(", "),fs=Nt.length>5?` +${Nt.length-5} more`:"",hs=Nt[0].element,ms=Xu(hs),bn=qu(hs);me({x:Gt,y:Kt,clientY:$.clientY,element:`${Nt.length} elements: ${ht}${fs}`,elementPath:"multi-select",boundingBox:{x:wt.left,y:wt.top+window.scrollY,width:wt.right-wt.left,height:wt.bottom-wt.top},isMultiSelect:!0,fullPath:Ku(hs),accessibility:Gu(hs),computedStyles:bn,computedStylesObj:ms,nearbyElements:Fu(hs),cssClasses:ic(hs),nearbyText:oc(hs),sourceFile:nd(hs)})}else{const wt=Math.abs(Ye-ne),ht=Math.abs(We-ye);wt>20&&ht>20&&me({x:Gt,y:Kt,clientY:$.clientY,element:"Area selection",elementPath:`region at (${Math.round(ne)}, ${Math.round(ye)})`,boundingBox:{x:ne,y:ye+window.scrollY,width:wt,height:ht},isMultiSelect:!0})}le(null)}else G&&($t.current=!0);we.current=null,Ne.current=null,he(!1),ut.current&&(ut.current.innerHTML="")};return document.addEventListener("mouseup",R),()=>document.removeEventListener("mouseup",R)},[j,ae]);const po=y.useCallback(async(R,$,G)=>{const W=Xt.webhookUrl||S;if(!W||!Xt.webhooksEnabled&&!G)return!1;try{return(await fetch(W,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:R,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...$})})).ok}catch(ne){return console.warn("[Agentation] Webhook failed:",ne),!1}},[S,Xt.webhookUrl,Xt.webhooksEnabled]),us=y.useCallback(R=>{var G;if(!X)return;const $={id:Date.now().toString(),x:X.x,y:X.y,comment:R,element:X.element,elementPath:X.elementPath,timestamp:Date.now(),selectedText:X.selectedText,boundingBox:X.boundingBox,nearbyText:X.nearbyText,cssClasses:X.cssClasses,isMultiSelect:X.isMultiSelect,isFixed:X.isFixed,fullPath:X.fullPath,accessibility:X.accessibility,computedStyles:X.computedStyles,nearbyElements:X.nearbyElements,reactComponents:X.reactComponents,sourceFile:X.sourceFile,elementBoundingBoxes:X.elementBoundingBoxes,..._&&wn?{sessionId:wn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};I(W=>[...W,$]),sn.current=$.id,Pt(()=>{sn.current=null},300),Pt(()=>{As(W=>new Set(W).add($.id))},250),a==null||a($),po("annotation.add",{annotation:$}),k(!0),Pt(()=>{me(null),k(!1)},150),(G=window.getSelection())==null||G.removeAllRanges(),_&&wn&&sl(_,wn,$).then(W=>{W.id!==$.id&&(I(ne=>ne.map(ye=>ye.id===$.id?{...ye,id:W.id}:ye)),As(ne=>{const ye=new Set(ne);return ye.delete($.id),ye.add(W.id),ye}))}).catch(W=>{console.warn("[Agentation] Failed to sync annotation:",W)})},[X,a,po,_,wn]),ke=y.useCallback(()=>{k(!0),Pt(()=>{me(null),k(!1)},150)},[]),et=y.useCallback(R=>{const $=T.findIndex(W=>W.id===R),G=T[$];(ce==null?void 0:ce.id)===R&&(O(!0),Pt(()=>{He(null),ze(null),ft([]),O(!1)},150)),Rt(R),ho(W=>new Set(W).add(R)),G&&(c==null||c(G),po("annotation.delete",{annotation:G})),_&&Fa(_,R).catch(W=>{console.warn("[Agentation] Failed to delete annotation from server:",W)}),Pt(()=>{I(W=>W.filter(ne=>ne.id!==R)),ho(W=>{const ne=new Set(W);return ne.delete(R),ne}),Rt(null),$<T.length-1&&(dt($),Pt(()=>dt(null),200))},150)},[T,ce,c,po,_]),yt=y.useCallback(R=>{var $;if(!R){Xe(null),lt(null),zt([]);return}if(Xe(R.id),($=R.elementBoundingBoxes)!=null&&$.length){const G=[];for(const W of R.elementBoundingBoxes){const ne=W.x+W.width/2,ye=W.y+W.height/2-window.scrollY,We=document.elementsFromPoint(ne,ye).find(tt=>!tt.closest("[data-annotation-marker]")&&!tt.closest("[data-agentation-root]"));We&&G.push(We)}zt(G),lt(null)}else if(R.boundingBox){const G=R.boundingBox,W=G.x+G.width/2,ne=R.isFixed?G.y+G.height/2:G.y+G.height/2-window.scrollY,ye=pr(W,ne);if(ye){const Ye=ye.getBoundingClientRect(),We=Ye.width/G.width,tt=Ye.height/G.height;We<.5||tt<.5?lt(null):lt(ye)}else lt(null);zt([])}else lt(null),zt([])},[]),mt=y.useCallback(R=>{if(!ce)return;const $={...ce,comment:R};I(G=>G.map(W=>W.id===ce.id?$:W)),u==null||u($),po("annotation.update",{annotation:$}),_&&Gy(_,ce.id,{comment:R}).catch(G=>{console.warn("[Agentation] Failed to update annotation on server:",G)}),O(!0),Pt(()=>{He(null),ze(null),ft([]),O(!1)},150)},[ce,u,po,_]),Lt=y.useCallback(()=>{O(!0),Pt(()=>{He(null),ze(null),ft([]),O(!1)},150)},[]),gt=y.useCallback(()=>{const R=T.length,$=Ke.length>0||!!Qe;if(R===0&&vn.length===0&&!$)return;if(d==null||d(T),po("annotations.clear",{annotations:T}),_){Promise.all(T.map(ne=>Fa(_,ne.id).catch(ye=>{console.warn("[Agentation] Failed to delete annotation from server:",ye)})));for(const[,ne]of Oo.current)ne&&Fa(_,ne).catch(()=>{});Oo.current.clear();for(const[,ne]of Fo.current)ne&&Fa(_,ne).catch(()=>{});Fo.current.clear()}ve(!0),je(!0),Jn([]);const G=xo.current;if(G){const ne=G.getContext("2d");ne&&ne.clearRect(0,0,G.width,G.height)}(Ke.length>0||Qe)&&(Os(ne=>ne+1),pi(ne=>ne+1),Pt(()=>{Bt([]),Zn(null)},200)),_t&&qt(!1),Wt&&Mn(""),ys.current={rearrange:null,placements:[]},Ju(qe);const W=R*30+200;Pt(()=>{I([]),As(new Set),localStorage.removeItem(Md(qe)),ve(!1)},W),Pt(()=>je(!1),1500)},[qe,T,vn,Ke,Qe,_t,Wt,d,po,_]),fn=y.useCallback(async()=>{const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:qe,$=Ie&&_t;let G;if($){if(Ke.length===0&&!Qe&&!Wt)return;G=""}else{if(G=Zy(T,R,Xt.outputDetail),!G&&vn.length===0&&Ke.length===0&&!Qe)return;G||(G=`## Page Feedback: ${R}
`)}if(!$&&vn.length>0){const W=new Set;for(const We of T)We.drawingIndex!=null&&W.add(We.drawingIndex);const ne=xo.current;ne&&(ne.style.visibility="hidden");const ye=[],Ye=window.scrollY;for(let We=0;We<vn.length;We++){if(W.has(We))continue;const tt=vn[We];if(tt.points.length<2)continue;const vt=tt.fixed?tt.points:tt.points.map(In=>({x:In.x,y:In.y-Ye}));let Nt=1/0,Gt=1/0,Kt=-1/0,wt=-1/0;for(const In of vt)Nt=Math.min(Nt,In.x),Gt=Math.min(Gt,In.y),Kt=Math.max(Kt,In.x),wt=Math.max(wt,In.y);const ht=Kt-Nt,fs=wt-Gt,hs=Math.hypot(ht,fs),ms=vt[0],bn=vt[vt.length-1],Nn=Math.hypot(bn.x-ms.x,bn.y-ms.y);let Yt;const Ft=Nn<hs*.35,ps=ht/Math.max(fs,1);if(Ft&&hs>20){const In=Math.max(ht,fs)*.15;let Bi=0;for(const Wi of vt){const zc=Wi.x-Nt<In,Yd=Kt-Wi.x<In,Wd=Wi.y-Gt<In,Fd=wt-Wi.y<In;(zc||Yd)&&(Wd||Fd)&&Bi++}Yt=Bi>vt.length*.15?"box":"circle"}else ps>3&&fs<40?Yt="underline":Nn>hs*.5?Yt="arrow":Yt="drawing";const Sn=Math.min(10,vt.length),io=Math.max(1,Math.floor(vt.length/Sn)),No=new Set,Gn=[],yi=[ms];for(let In=io;In<vt.length-1;In+=io)yi.push(vt[In]);yi.push(bn);for(const In of yi){const Bi=pr(In.x,In.y);if(!Bi||No.has(Bi)||Ho(Bi,"[data-feedback-toolbar]"))continue;No.add(Bi);const{name:Wi}=dl(Bi);Gn.includes(Wi)||Gn.push(Wi)}const Ni=`${Math.round(Nt)},${Math.round(Gt)} → ${Math.round(Kt)},${Math.round(wt)}`;let Ri;(Yt==="circle"||Yt==="box")&&Gn.length>0?Ri=`${Yt==="box"?"Boxed":"Circled"} **${Gn[0]}**${Gn.length>1?` (and ${Gn.slice(1).join(", ")})`:""} (region: ${Ni})`:Yt==="underline"&&Gn.length>0?Ri=`Underlined **${Gn[0]}** (${Ni})`:Yt==="arrow"&&Gn.length>=2?Ri=`Arrow from **${Gn[0]}** to **${Gn[Gn.length-1]}** (${Math.round(ms.x)},${Math.round(ms.y)} → ${Math.round(bn.x)},${Math.round(bn.y)})`:Gn.length>0?Ri=`${Yt==="arrow"?"Arrow":"Drawing"} near **${Gn.join("**, **")}** (region: ${Ni})`:Ri=`Drawing at ${Ni}`,ye.push(Ri)}ne&&(ne.style.visibility=""),ye.length>0&&(G+=`
**Drawings:**
`,ye.forEach((We,tt)=>{G+=`${tt+1}. ${We}
`}))}if((Ke.length>0||$&&Wt)&&(G+=`
`+Wy(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:_t,wireframePurpose:Wt||void 0},Xt.outputDetail)),Qe){const W=Fy(Qe,Xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});W&&(G+=`
`+W)}if(g)try{await navigator.clipboard.writeText(G)}catch{}h==null||h(G),A(!0),Pt(()=>A(!1),2e3),Xt.autoClearAfterCopy&&Pt(()=>gt(),500)},[T,vn,Ke,Qe,_t,Ie,is,Wt,qe,Xt.outputDetail,Es,Xt.autoClearAfterCopy,gt,g,h]),rn=y.useCallback(async()=>{const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:qe;let $=Zy(T,R,Xt.outputDetail);if(!$&&Ke.length===0&&!Qe)return;if($||($=`## Page Feedback: ${R}
`),Ke.length>0&&($+=`
`+Wy(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:_t,wireframePurpose:Wt||void 0},Xt.outputDetail)),Qe){const W=Fy(Qe,Xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});W&&($+=`
`+W)}p&&p($,T),q("sending"),await new Promise(W=>Pt(W,150));const G=await po("submit",{output:$,annotations:T},!0);q(G?"sent":"failed"),Pt(()=>q("idle"),2500),G&&Xt.autoClearAfterCopy&&Pt(()=>gt(),500)},[p,po,T,Ke,Qe,_t,is,qe,Xt.outputDetail,Es,Xt.autoClearAfterCopy,gt]);y.useEffect(()=>{if(!cs)return;const R=10,$=W=>{const ne=W.clientX-cs.x,ye=W.clientY-cs.y,Ye=Math.sqrt(ne*ne+ye*ye);if(!es&&Ye>R&&Gs(!0),es||Ye>R){let We=cs.toolbarX+ne,tt=cs.toolbarY+ye;const vt=20,Nt=337,Gt=44,wt=Nt-(j?ws==="connected"?297:257:44),ht=vt-wt,fs=window.innerWidth-vt-Nt;We=Math.max(ht,Math.min(fs,We)),tt=Math.max(vt,Math.min(window.innerHeight-Gt-vt,tt)),qs({x:We,y:tt})}},G=()=>{es&&(Ss.current=!0),Gs(!1),Ao(null)};return document.addEventListener("mousemove",$),document.addEventListener("mouseup",G),()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",G)}},[cs,es,j,ws]);const ds=y.useCallback(R=>{var ye,Ye;if(R.target.closest("button")||R.target.closest("[data-agentation-settings-panel]"))return;const $=R.currentTarget.parentElement;if(!$)return;const G=$.getBoundingClientRect(),W=(ye=Qt==null?void 0:Qt.x)!=null?ye:G.left,ne=(Ye=Qt==null?void 0:Qt.y)!=null?Ye:G.top;Ao({x:R.clientX,y:R.clientY,toolbarX:W,toolbarY:ne})},[Qt]);if(y.useEffect(()=>{if(!Qt)return;const R=()=>{let ne=Qt.x,ye=Qt.y;const tt=20-(337-(j?ws==="connected"?297:257:44)),vt=window.innerWidth-20-337;ne=Math.max(tt,Math.min(vt,ne)),ye=Math.max(20,Math.min(window.innerHeight-44-20,ye)),(ne!==Qt.x||ye!==Qt.y)&&qs({x:ne,y:ye})};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[Qt,j,ws]),y.useEffect(()=>{const R=$=>{const G=$.target,W=G.tagName==="INPUT"||G.tagName==="TEXTAREA"||G.isContentEditable;if($.key==="Escape"){if(Ie){At?Ot(null):mo();return}if(vs){zs(!1);return}if(Cn.length>0){uo([]);return}X||j&&(Fn(),M(!1))}if(($.metaKey||$.ctrlKey)&&$.shiftKey&&($.key==="f"||$.key==="F")){$.preventDefault(),Fn(),j?yn():M(!0);return}if(!(W||$.metaKey||$.ctrlKey)&&(($.key==="p"||$.key==="P")&&($.preventDefault(),Fn(),ai()),($.key==="l"||$.key==="L")&&($.preventDefault(),Fn(),vs&&zs(!1),_e&&Fe(!1),X&&ke(),Ie?mo():st(!0)),($.key==="h"||$.key==="H")&&T.length>0&&($.preventDefault(),Fn(),N(ne=>!ne)),($.key==="c"||$.key==="C")&&(T.length>0||Ke.length>0||Qe)&&($.preventDefault(),Fn(),fn()),($.key==="x"||$.key==="X")&&(T.length>0||Ke.length>0||Qe)&&($.preventDefault(),Fn(),gt(),Ke.length>0&&Bt([]),Qe&&Zn(null)),$.key==="s"||$.key==="S")){const ne=Ki(Xt.webhookUrl)||Ki(S||"");T.length>0&&ne&&ee==="idle"&&($.preventDefault(),Fn(),rn())}};return document.addEventListener("keydown",R),()=>document.removeEventListener("keydown",R)},[j,vs,Ie,At,Ke,Qe,X,T.length,Xt.webhookUrl,S,ee,rn,ai,fn,gt,Cn]),!Ze||P)return null;const Ts=T.length>0,vo=T.filter(R=>!Ds.has(R.id)&&R.kind!=="placement"&&R.kind!=="rearrange"),na=vo.length>0,_o=T.filter(R=>Ds.has(R.id)),va=R=>{const ye=R.x/100*window.innerWidth,Ye=typeof R.y=="string"?parseFloat(R.y):R.y,We={};window.innerHeight-Ye-22-10<80&&(We.top="auto",We.bottom="calc(100% + 10px)");const vt=ye-200/2,Nt=10;if(vt<Nt){const Gt=Nt-vt;We.left=`calc(50% + ${Gt}px)`}else if(vt+200>window.innerWidth-Nt){const Gt=vt+200-(window.innerWidth-Nt);We.left=`calc(50% - ${Gt}px)`}return We};return Ec.createPortal(l.jsxs("div",{ref:Q,style:{display:"contents"},"data-agentation-theme":Is?"dark":"light","data-agentation-accent":Xt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Pe.toolbar}${C?` ${C}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Qt?{left:Qt.x,top:Qt.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Pe.toolbarContainer} ${j?Pe.expanded:Pe.collapsed} ${$o?Pe.entrance:""} ${V?Pe.hiding:""} ${!Xt.webhooksEnabled&&(Ki(Xt.webhookUrl)||Ki(S||""))?Pe.serverConnected:""}`,onClick:j?void 0:R=>{if(Ss.current){Ss.current=!1,R.preventDefault();return}M(!0)},onMouseDown:ds,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Pe.toggleContent} ${j?Pe.hidden:Pe.visible}`,children:[l.jsx(Dw,{size:24}),na&&l.jsx("span",{className:`${Pe.badge} ${j?Pe.fadeOut:""} ${$o?Pe.entrance:""}`,children:vo.length})]}),l.jsxs("div",{className:`${Pe.controlsContent} ${j?Pe.visible:Pe.hidden} ${Qt&&Qt.y<100?Pe.tooltipBelow:""} ${bt||_e?Pe.tooltipsHidden:""} ${zo?Pe.tooltipsInSession:""}`,onMouseEnter:To,onMouseLeave:qo,children:[l.jsxs("div",{className:`${Pe.buttonWrapper} ${Qt&&Qt.x<120?Pe.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),ai()},"data-active":Z,children:l.jsx(Ow,{size:24,isPaused:Z})}),l.jsxs("span",{className:Pe.buttonTooltip,children:[Z?"Resume animations":"Pause animations",l.jsx("span",{className:Pe.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:`${Pe.controlButton} ${Is?"":Pe.light}`,onClick:R=>{R.stopPropagation(),Fn(),vs&&zs(!1),_e&&Fe(!1),X&&ke(),Ie?mo():st(!0)},"data-active":Ie,style:Ie&&_t?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(Ww,{size:21})}),l.jsxs("span",{className:Pe.buttonTooltip,children:[Ie?"Exit layout mode":"Layout mode",l.jsx("span",{className:Pe.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),N(!B)},disabled:!Ts||Ie,children:l.jsx(Lw,{size:24,isOpen:B})}),l.jsxs("span",{className:Pe.buttonTooltip,children:[B?"Hide markers":"Show markers",l.jsx("span",{className:Pe.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:`${Pe.controlButton} ${Te?Pe.statusShowing:""}`,onClick:R=>{R.stopPropagation(),Fn(),fn()},disabled:Ie&&_t?Ke.length===0&&!((Ko=Qe==null?void 0:Qe.sections)!=null&&Ko.length):!Ts&&vn.length===0&&Ke.length===0&&!((Lc=Qe==null?void 0:Qe.sections)!=null&&Lc.length),"data-active":Te,children:l.jsx(Rw,{size:24,copied:Te,tint:Ie&&_t&&(Ke.length>0||(bl=Qe==null?void 0:Qe.sections)!=null&&bl.length)?"#f97316":void 0})}),l.jsxs("span",{className:Pe.buttonTooltip,children:[Ie&&_t?"Copy layout":"Copy feedback",l.jsx("span",{className:Pe.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Pe.buttonWrapper} ${Pe.sendButtonWrapper} ${j&&!Xt.webhooksEnabled&&(Ki(Xt.webhookUrl)||Ki(S||""))?Pe.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Pe.controlButton} ${ee==="sent"||ee==="failed"?Pe.statusShowing:""}`,onClick:R=>{R.stopPropagation(),Fn(),rn()},disabled:!Ts||!Ki(Xt.webhookUrl)&&!Ki(S||"")||ee==="sending","data-no-hover":ee==="sent"||ee==="failed",tabIndex:Ki(Xt.webhookUrl)||Ki(S||"")?0:-1,children:[l.jsx(Bw,{size:24,state:ee}),Ts&&ee==="idle"&&l.jsx("span",{className:Pe.buttonBadge,children:T.length})]}),l.jsxs("span",{className:Pe.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Pe.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),gt()},disabled:!Ts&&vn.length===0&&Ke.length===0&&!((vl=Qe==null?void 0:Qe.sections)!=null&&vl.length),"data-danger":!0,children:l.jsx($w,{size:24})}),l.jsxs("span",{className:Pe.buttonTooltip,children:["Clear all",l.jsx("span",{className:Pe.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Pe.buttonWrapper,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),Ie&&mo(),Fe(!_e)},children:l.jsx(zw,{size:24})}),_&&ws!=="disconnected"&&l.jsx("span",{className:`${Pe.mcpIndicator} ${Pe[ws]} ${_e?Pe.hidden:""}`,title:ws==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Pe.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Pe.divider}),l.jsxs("div",{className:`${Pe.buttonWrapper} ${Qt&&typeof window<"u"&&Qt.x>window.innerWidth-120?Pe.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Pe.controlButton,onClick:R=>{R.stopPropagation(),Fn(),yn()},children:l.jsx(Iw,{size:24})}),l.jsxs("span",{className:Pe.buttonTooltip,children:["Exit",l.jsx("span",{className:Pe.shortcut,children:"Esc"})]})]})]}),l.jsx(b4,{visible:Ie&&j,activeType:At,onSelect:R=>{Ot(At===R?null:R)},isDarkMode:Is,sectionCount:(wa=Qe==null?void 0:Qe.sections.length)!=null?wa:0,onDetectSections:()=>{var Ye,We;const R=D4(),$=(Ye=Qe==null?void 0:Qe.sections)!=null?Ye:[],G=new Set($.map(tt=>tt.selector)),W=R.filter(tt=>!G.has(tt.selector)),ne=[...$,...W],ye=[...(We=Qe==null?void 0:Qe.originalOrder)!=null?We:[],...W.map(tt=>tt.id)];Zn({sections:ne,originalOrder:ye,detectedAt:Date.now()})},placementCount:Ke.length,onClearPlacements:()=>{Os(R=>R+1),pi(R=>R+1),Pt(()=>{Zn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:_t,onBlankCanvasChange:R=>{const $={sections:[],originalOrder:[],detectedAt:Date.now()};R?(Fs.current={rearrange:Qe,placements:Ke},Zn(ys.current.rearrange||$),Bt(ys.current.placements),Ot(null)):(ys.current={rearrange:Qe,placements:Ke},Zn(Fs.current.rearrange||$),Bt(Fs.current.placements)),qt(R)},wireframePurpose:Wt,onWireframePurposeChange:Mn,Tooltip:br,onDragStart:(R,$)=>{var Gt;$.preventDefault();const G=xt[R];let W=null,ne=!1;const ye=$.clientX,Ye=$.clientY,We=$.target.closest("[data-feedback-toolbar]"),tt=(Gt=We==null?void 0:We.getBoundingClientRect().top)!=null?Gt:window.innerHeight,vt=Kt=>{const wt=Kt.clientX-ye,ht=Kt.clientY-Ye;if(!ne&&(Math.abs(wt)>4||Math.abs(ht)>4)&&(ne=!0,W=document.createElement("div"),W.className=`${Me.dragPreview}${_t?` ${Me.dragPreviewWireframe}`:""}`,document.body.appendChild(W)),!W)return;const fs=Math.max(0,tt-Kt.clientY),hs=Math.min(1,fs/180),ms=1-Math.pow(1-hs,2),bn=28,Nn=20,Yt=Math.min(140,G.width*.18),Ft=Math.min(90,G.height*.18),ps=bn+(Yt-bn)*ms,Sn=Nn+(Ft-Nn)*ms;W.style.width=`${ps}px`,W.style.height=`${Sn}px`,W.style.left=`${Kt.clientX-ps/2}px`,W.style.top=`${Kt.clientY-Sn/2}px`,W.style.opacity=`${.5+.5*ms}`,W.textContent=ms>.25?R:""},Nt=Kt=>{if(window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",Nt),W&&document.body.removeChild(W),ne){const wt=G.width,ht=G.height,fs=window.scrollY,hs=Math.max(0,Kt.clientX-wt/2),ms=Math.max(0,Kt.clientY+fs-ht/2),bn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:R,x:hs,y:ms,width:wt,height:ht,scrollY:fs,timestamp:Date.now()};Bt(Nn=>[...Nn,bn]),Ot(null),Wo.current=new Set,Mo(Nn=>Nn+1)}};window.addEventListener("mousemove",vt),window.addEventListener("mouseup",Nt)}}),l.jsx(P6,{settings:Xt,onSettingsChange:R=>Di($=>({...$,...R})),isDarkMode:Is,onToggleTheme:Ps,isDevMode:Eo,connectionStatus:ws,endpoint:_,isVisible:Ue,toolbarNearBottom:!!Qt&&Qt.y<230,settingsPage:St,onSettingsPageChange:Ve,onHideToolbar:Do})]})}),(Ie||Ht)&&l.jsx("div",{className:`${Me.blankCanvas} ${An?Me.visible:""} ${an?Me.gridActive:""}`,style:{"--canvas-opacity":gn},"data-feedback-toolbar":!0}),Ie&&_t&&An&&l.jsxs("div",{className:Me.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Me.wireframeOpacityRow,children:[l.jsx("span",{className:Me.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Me.wireframeOpacitySlider,min:0,max:1,step:.01,value:gn,onChange:R=>lo(Number(R.target.value))})]}),l.jsxs("div",{className:Me.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Me.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Me.wireframeNoticeDivider}),l.jsx("button",{className:Me.wireframeStartOver,onClick:()=>{Os(R=>R+1),Zn({sections:[],originalOrder:[],detectedAt:Date.now()}),ys.current={rearrange:null,placements:[]},Mn(""),Ju(qe)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ie||Ht)&&l.jsx(p4,{placements:Ke,onChange:Bt,activeComponent:Ht?null:At,onActiveComponentChange:Ot,isDarkMode:Is,exiting:Ht,onInteractionChange:tn,passthrough:!At,extraSnapRects:Qe==null?void 0:Qe.sections.map(R=>R.currentRect),deselectSignal:Xs,clearSignal:xs,wireframe:_t,onSelectionChange:(R,$)=>{Wo.current=R,$||(bs.current=new Set,as(G=>G+1))},onDragMove:(R,$)=>{const G=bs.current;if(!(!G.size||!Qe)){if(!Rn.current){Rn.current=new Map;for(const W of Qe.sections)G.has(W.id)&&Rn.current.set(W.id,{x:W.currentRect.x,y:W.currentRect.y})}for(const W of Qe.sections){if(!G.has(W.id)||!Rn.current.get(W.id))continue;const ye=document.querySelector(`[data-rearrange-section="${W.id}"]`);ye&&(ye.style.transform=`translate(${R}px, ${$}px)`)}}},onDragEnd:(R,$,G)=>{const W=bs.current,ne=Rn.current;if(Rn.current=null,!(!W.size||!Qe||!ne)){for(const ye of W){const Ye=document.querySelector(`[data-rearrange-section="${ye}"]`);Ye&&(Ye.style.transform="")}G&&Zn(ye=>ye&&{...ye,sections:ye.sections.map(Ye=>{const We=ne.get(Ye.id);return We?{...Ye,currentRect:{...Ye.currentRect,x:Math.max(0,We.x+R),y:Math.max(0,We.y+$)}}:Ye})})}}}),(Ie||Ht)&&Qe&&l.jsx(B4,{rearrangeState:Qe,onChange:Zn,isDarkMode:Is,exiting:Ht,blankCanvas:_t,extraSnapRects:Ke.map(R=>({x:R.x,y:R.y,width:R.width,height:R.height})),clearSignal:nn,deselectSignal:yo,onSelectionChange:(R,$)=>{bs.current=R,$||(Wo.current=new Set,Mo(G=>G+1))},onDragMove:(R,$)=>{const G=Wo.current;if(G.size){if(!Rn.current){Rn.current=new Map;for(const W of Ke)G.has(W.id)&&Rn.current.set(W.id,{x:W.x,y:W.y})}for(const W of G){const ne=document.querySelector(`[data-design-placement="${W}"]`);ne&&(ne.style.transform=`translate(${R}px, ${$}px)`)}}},onDragEnd:(R,$,G)=>{const W=Wo.current,ne=Rn.current;if(Rn.current=null,!(!W.size||!ne)){for(const ye of W){const Ye=document.querySelector(`[data-design-placement="${ye}"]`);Ye&&(Ye.style.transform="")}G&&Bt(ye=>ye.map(Ye=>{const We=ne.get(Ye.id);return We?{...Ye,x:Math.max(0,We.x+R),y:Math.max(0,We.y+$)}:Ye}))}}}),l.jsx("canvas",{ref:xo,className:`${Pe.drawCanvas} ${vs?Pe.active:""}`,style:{opacity:ts?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Pe.markersLayer,"data-feedback-toolbar":!0,children:[se&&vo.filter(R=>!R.isFixed).map((R,$,G)=>l.jsx(Jy,{annotation:R,globalIndex:vo.findIndex(W=>W.id===R.id),layerIndex:$,layerSize:G.length,isExiting:be,isClearing:Re,isAnimated:ii.has(R.id),isHovered:!be&&ot===R.id,isDeleting:ct===R.id,isEditingAny:!!ce,renumberFrom:Oe,markerClickBehavior:Xt.markerClickBehavior,tooltipStyle:va(R),onHoverEnter:W=>!be&&W.id!==sn.current&&yt(W),onHoverLeave:()=>yt(null),onClick:W=>Xt.markerClickBehavior==="delete"?et(W.id):gi(W),onContextMenu:gi},R.id)),se&&!be&&_o.filter(R=>!R.isFixed).map(R=>l.jsx(e1,{annotation:R},R.id))]}),l.jsxs("div",{className:Pe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[se&&vo.filter(R=>R.isFixed).map((R,$,G)=>l.jsx(Jy,{annotation:R,globalIndex:vo.findIndex(W=>W.id===R.id),layerIndex:$,layerSize:G.length,isExiting:be,isClearing:Re,isAnimated:ii.has(R.id),isHovered:!be&&ot===R.id,isDeleting:ct===R.id,isEditingAny:!!ce,renumberFrom:Oe,markerClickBehavior:Xt.markerClickBehavior,tooltipStyle:va(R),onHoverEnter:W=>!be&&W.id!==sn.current&&yt(W),onHoverLeave:()=>yt(null),onClick:W=>Xt.markerClickBehavior==="delete"?et(W.id):gi(W),onContextMenu:gi},R.id)),se&&!be&&_o.filter(R=>R.isFixed).map(R=>l.jsx(e1,{annotation:R,fixed:!0},R.id))]}),j&&l.jsxs("div",{className:Pe.overlay,"data-feedback-toolbar":!0,style:X||ce?{zIndex:99999}:void 0,children:[(K==null?void 0:K.rect)&&!X&&!at&&!ae&&l.jsx("div",{className:`${Pe.hoverHighlight} ${Pe.enter}`,style:{left:K.rect.left,top:K.rect.top,width:K.rect.width,height:K.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Cn.filter(R=>document.contains(R.element)).map((R,$)=>{const G=R.element.getBoundingClientRect(),W=Cn.length>1;return l.jsx("div",{className:W?Pe.multiSelectOutline:Pe.singleSelectOutline,style:{position:"fixed",left:G.left,top:G.top,width:G.width,height:G.height,...W?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},$)}),ot&&!X&&(()=>{var ne;const R=T.find(ye=>ye.id===ot);if(!(R!=null&&R.boundingBox))return null;if((ne=R.elementBoundingBoxes)!=null&&ne.length)return nt.length>0?nt.filter(ye=>document.contains(ye)).map((ye,Ye)=>{const We=ye.getBoundingClientRect();return l.jsx("div",{className:`${Pe.multiSelectOutline} ${Pe.enter}`,style:{left:We.left,top:We.top,width:We.width,height:We.height}},`hover-outline-live-${Ye}`)}):R.elementBoundingBoxes.map((ye,Ye)=>l.jsx("div",{className:`${Pe.multiSelectOutline} ${Pe.enter}`,style:{left:ye.x,top:ye.y-rt,width:ye.width,height:ye.height}},`hover-outline-${Ye}`));const $=$e&&document.contains($e)?$e.getBoundingClientRect():null,G=$?{x:$.left,y:$.top,width:$.width,height:$.height}:{x:R.boundingBox.x,y:R.isFixed?R.boundingBox.y:R.boundingBox.y-rt,width:R.boundingBox.width,height:R.boundingBox.height},W=R.isMultiSelect;return l.jsx("div",{className:`${W?Pe.multiSelectOutline:Pe.singleSelectOutline} ${Pe.enter}`,style:{left:G.x,top:G.y,width:G.width,height:G.height,...W?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),K&&!X&&!at&&!ae&&l.jsxs("div",{className:`${Pe.hoverTooltip} ${Pe.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(K.reactComponents?48:32),8)},children:[K.reactComponents&&l.jsx("div",{className:Pe.hoverReactPath,children:K.reactComponents}),l.jsx("div",{className:Pe.hoverElementName,children:K.elementName})]}),X&&l.jsxs(l.Fragment,{children:[(Sa=X.multiSelectElements)!=null&&Sa.length?X.multiSelectElements.filter(R=>document.contains(R)).map((R,$)=>{const G=R.getBoundingClientRect();return l.jsx("div",{className:`${Pe.multiSelectOutline} ${x?Pe.exit:Pe.enter}`,style:{left:G.left,top:G.top,width:G.width,height:G.height}},`pending-multi-${$}`)}):X.targetElement&&document.contains(X.targetElement)?(()=>{const R=X.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Pe.singleSelectOutline} ${x?Pe.exit:Pe.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():X.boundingBox&&l.jsx("div",{className:`${X.isMultiSelect?Pe.multiSelectOutline:Pe.singleSelectOutline} ${x?Pe.exit:Pe.enter}`,style:{left:X.boundingBox.x,top:X.boundingBox.y-rt,width:X.boundingBox.width,height:X.boundingBox.height,...X.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const R=X.x,$=X.isFixed?X.y:X.y-rt;return l.jsxs(l.Fragment,{children:[l.jsx(A6,{x:R,y:$,isMultiSelect:X.isMultiSelect,isExiting:x}),l.jsx(kd,{ref:oo,element:X.element,selectedText:X.selectedText,computedStyles:X.computedStylesObj,placeholder:X.element==="Area selection"?"What should change in this area?":X.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:us,onCancel:ke,isExiting:x,lightMode:!Is,accentColor:X.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,R/100*window.innerWidth)),...$>window.innerHeight-290?{bottom:window.innerHeight-$+20}:{top:$+20}}})]})})()]}),ce&&l.jsxs(l.Fragment,{children:[(Oc=ce.elementBoundingBoxes)!=null&&Oc.length?Mt.length>0?Mt.filter(R=>document.contains(R)).map((R,$)=>{const G=R.getBoundingClientRect();return l.jsx("div",{className:`${Pe.multiSelectOutline} ${Pe.enter}`,style:{left:G.left,top:G.top,width:G.width,height:G.height}},`edit-multi-live-${$}`)}):ce.elementBoundingBoxes.map((R,$)=>l.jsx("div",{className:`${Pe.multiSelectOutline} ${Pe.enter}`,style:{left:R.x,top:R.y-rt,width:R.width,height:R.height}},`edit-multi-${$}`)):(()=>{const R=Ge&&document.contains(Ge)?Ge.getBoundingClientRect():null,$=R?{x:R.left,y:R.top,width:R.width,height:R.height}:ce.boundingBox?{x:ce.boundingBox.x,y:ce.isFixed?ce.boundingBox.y:ce.boundingBox.y-rt,width:ce.boundingBox.width,height:ce.boundingBox.height}:null;return $?l.jsx("div",{className:`${ce.isMultiSelect?Pe.multiSelectOutline:Pe.singleSelectOutline} ${Pe.enter}`,style:{left:$.x,top:$.y,width:$.width,height:$.height,...ce.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(kd,{ref:bo,element:ce.element,selectedText:ce.selectedText,computedStyles:M4(ce.computedStyles),placeholder:"Edit your feedback...",initialValue:ce.comment,submitLabel:"Save",onSubmit:mt,onCancel:Lt,onDelete:()=>et(ce.id),isExiting:D,lightMode:!Is,accentColor:ce.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const R=ce.isFixed?ce.y:ce.y-rt;return{left:Math.max(160,Math.min(window.innerWidth-160,ce.x/100*window.innerWidth)),...R>window.innerHeight-290?{bottom:window.innerHeight-R+20}:{top:R+20}}})()})]}),ae&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Je,className:Pe.dragSelection}),l.jsx("div",{ref:ut,className:Pe.highlightsContainer})]})]})]}),document.body)}const yp=y.createContext({});function Ac(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const V6=typeof window<"u",xp=V6?y.useLayoutEffect:y.useEffect,Od=y.createContext(null);function bp(t,n){t.indexOf(n)===-1&&t.push(n)}function hl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ea=(t,n,i)=>i>n?n:i<t?t:i;let vp=()=>{};const Qa={},nb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function sb(t){return typeof t=="object"&&t!==null}const ob=t=>/^0[^.\s]+$/u.test(t);function ib(t){let n;return()=>(n===void 0&&(n=t()),n)}const Ei=t=>t,Y6=(t,n)=>i=>n(t(i)),Dc=(...t)=>t.reduce(Y6),ml=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class wp{constructor(){this.subscriptions=[]}add(n){return bp(this.subscriptions,n),()=>hl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const si=t=>t*1e3,Ti=t=>t/1e3;function ab(t,n){return n?t*(1e3/n):0}const W6=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},rb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,F6=1e-7,X6=12;function q6(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=rb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>F6&&++h<X6);return d}function Nc(t,n,i,a){if(t===n&&i===a)return Ei;const c=u=>q6(u,0,1,t,i);return u=>u===0||u===1?u:rb(c(u),n,a)}const lb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,cb=t=>n=>1-t(1-n),ub=Nc(.33,1.53,.69,.99),Sp=cb(ub),db=lb(Sp),fb=t=>t>=1?1:(t*=2)<1?.5*Sp(t):.5*(2-Math.pow(2,-10*(t-1))),Cp=t=>1-Math.sin(Math.acos(t)),hb=cb(Cp),mb=lb(Cp),G6=Nc(.42,0,1,1),K6=Nc(0,0,.58,1),pb=Nc(.42,0,.58,1),_b=t=>Array.isArray(t)&&typeof t[0]!="number";function gb(t,n){return _b(t)?t[W6(0,t.length,n)]:t}const yb=t=>Array.isArray(t)&&typeof t[0]=="number",Q6={linear:Ei,easeIn:G6,easeInOut:pb,easeOut:K6,circIn:Cp,circInOut:mb,circOut:hb,backIn:Sp,backInOut:db,backOut:ub,anticipate:fb},Z6=t=>typeof t=="string",o1=t=>{if(yb(t)){vp(t.length===4);const[n,i,a,c]=t;return Nc(n,i,a,c)}else if(Z6(t))return Q6[t];return t},sd=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function J6(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,b=!1,v=!1)=>{const C=v&&c?i:a;return b&&d.add(_),C.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const b=i;i=a,a=b,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const eC=40;function xb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=sd.reduce((B,N)=>(B[N]=J6(u),B),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:b,preRender:v,render:S,postRender:C}=d,j=()=>{const B=Qa.useManualTiming,N=B?c.timestamp:performance.now();i=!1,B||(c.delta=a?1e3/60:Math.max(Math.min(N-c.timestamp,eC),1)),c.timestamp=N,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),b.process(c),v.process(c),S.process(c),C.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},M=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:sd.reduce((B,N)=>{const P=d[N];return B[N]=(Y,V=!1,U=!1)=>(i||M(),P.schedule(Y,V,U)),B},{}),cancel:B=>{for(let N=0;N<sd.length;N++)d[sd[N]].cancel(B)},state:c,steps:d}}const{schedule:Yn,cancel:ba,state:jo,steps:cm}=xb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ei,!0);let hd;function tC(){hd=void 0}const Uo={now:()=>(hd===void 0&&Uo.set(jo.isProcessing||Qa.useManualTiming?jo.timestamp:performance.now()),hd),set:t=>{hd=t,queueMicrotask(tC)}},bb=t=>n=>typeof n=="string"&&n.startsWith(t),vb=bb("--"),nC=bb("var(--"),kp=t=>nC(t)?sC.test(t.split("/*")[0].trim()):!1,sC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function i1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const _l={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Sc={..._l,transform:t=>ea(0,1,t)},od={..._l,default:1},gc=t=>Math.round(t*1e5)/1e5,jp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function oC(t){return t==null}const iC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mp=(t,n)=>i=>!!(typeof i=="string"&&iC.test(i)&&i.startsWith(t)||n&&!oC(i)&&Object.prototype.hasOwnProperty.call(i,n)),wb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(jp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},aC=t=>ea(0,255,t),um={..._l,transform:t=>Math.round(aC(t))},vr={test:Mp("rgb","red"),parse:wb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+um.transform(t)+", "+um.transform(n)+", "+um.transform(i)+", "+gc(Sc.transform(a))+")"};function rC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Im={test:Mp("#"),parse:rC,transform:vr.transform},Rc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Xa=Rc("deg"),Ji=Rc("%"),jt=Rc("px"),lC=Rc("vh"),cC=Rc("vw"),a1={...Ji,parse:t=>Ji.parse(t)/100,transform:t=>Ji.transform(t*100)},ll={test:Mp("hsl","hue"),parse:wb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+Ji.transform(gc(n))+", "+Ji.transform(gc(i))+", "+gc(Sc.transform(a))+")"},no={test:t=>vr.test(t)||Im.test(t)||ll.test(t),parse:t=>vr.test(t)?vr.parse(t):ll.test(t)?ll.parse(t):Im.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?vr.transform(t):ll.transform(t),getAnimatableNone:t=>{const n=no.parse(t);return n.alpha=0,no.transform(n)}},uC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(jp))==null?void 0:n.length)||0)+(((i=t.match(uC))==null?void 0:i.length)||0)>0}const Sb="number",Cb="color",fC="var",hC="var(",r1="${}",mC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function pl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(mC,p=>(no.test(p)?(a.color.push(u),c.push(Cb),i.push(no.parse(p))):p.startsWith(hC)?(a.var.push(u),c.push(fC),i.push(p)):(a.number.push(u),c.push(Sb),i.push(parseFloat(p))),++u,r1)).split(r1);return{values:i,split:h,indexes:a,types:c}}function pC(t){return pl(t).values}function kb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Sb?c+=gc(a[u]):d===Cb?c+=no.transform(a[u]):c+=a[u]}return c}}function _C(t){return kb(pl(t))}const gC=t=>typeof t=="number"?0:no.test(t)?no.getAnimatableNone(t):t,yC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:gC(t);function xC(t){const n=pl(t);return kb(n)(n.values.map((a,c)=>yC(a,n.split[c])))}const Vi={test:dC,parse:pC,createTransformer:_C,getAnimatableNone:xC};function dm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function bC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=dm(p,h,t+1/3),u=dm(p,h,t),d=dm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const ss=(t,n,i)=>t+(n-t)*i,fm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},vC=[Im,vr,ll],wC=t=>vC.find(n=>n.test(t));function l1(t){const n=wC(t);if(!n)return!1;let i=n.parse(t);return n===ll&&(i=bC(i)),i}const c1=(t,n)=>{const i=l1(t),a=l1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=fm(i.red,a.red,u),c.green=fm(i.green,a.green,u),c.blue=fm(i.blue,a.blue,u),c.alpha=ss(i.alpha,a.alpha,u),vr.transform(c))},Pm=new Set(["none","hidden"]);function SC(t,n){return Pm.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function CC(t,n){return i=>ss(t,n,i)}function Tp(t){return typeof t=="number"?CC:typeof t=="string"?kp(t)?Td:no.test(t)?c1:MC:Array.isArray(t)?jb:typeof t=="object"?no.test(t)?c1:kC:Td}function jb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Tp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function kC(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Tp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function jC(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const MC=(t,n)=>{const i=Vi.createTransformer(n),a=pl(t),c=pl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Pm.has(t)&&!c.values.length||Pm.has(n)&&!a.values.length?SC(t,n):Dc(jb(jC(a,c),c.values),i):Td(t,n)};function Mb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?ss(t,n,i):Tp(t)(t,n)}const TC=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>Yn.update(n,i),stop:()=>ba(n),now:()=>jo.isProcessing?jo.timestamp:Uo.now()}},Tb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ed=2e4;function Ep(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ed;)n+=i,a=t.next(n);return n>=Ed?1/0:n}function Eb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Ep(a),Ed);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Ti(c)}}const Bs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Hm(t,n){return t*Math.sqrt(1-n*n)}const EC=12;function AC(t,n,i){let a=i;for(let c=1;c<EC;c++)a=a-t(a)/n(a);return a}const hm=.001;function DC({duration:t=Bs.duration,bounce:n=Bs.bounce,velocity:i=Bs.velocity,mass:a=Bs.mass}){let c,u,d=1-n;d=ea(Bs.minDamping,Bs.maxDamping,d),t=ea(Bs.minDuration,Bs.maxDuration,Ti(t)),d<1?(c=g=>{const _=g*d,b=_*t,v=_-i,S=Hm(g,d),C=Math.exp(-b);return hm-v/S*C},u=g=>{const b=g*d*t,v=b*i+i,S=Math.pow(d,2)*Math.pow(g,2)*t,C=Math.exp(-b),j=Hm(Math.pow(g,2),d);return(-c(g)+hm>0?-1:1)*((v-S)*C)/j}):(c=g=>{const _=Math.exp(-g*t),b=(g-i)*t+1;return-hm+_*b},u=g=>{const _=Math.exp(-g*t),b=(i-g)*(t*t);return _*b});const h=5/t,p=AC(c,u,h);if(t=si(t),isNaN(p))return{stiffness:Bs.stiffness,damping:Bs.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const NC=["duration","bounce"],RC=["stiffness","damping","mass"];function u1(t,n){return n.some(i=>t[i]!==void 0)}function BC(t){let n={velocity:Bs.velocity,stiffness:Bs.stiffness,damping:Bs.damping,mass:Bs.mass,isResolvedFromDuration:!1,...t};if(!u1(t,RC)&&u1(t,NC))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ea(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Bs.mass,stiffness:c,damping:u}}else{const i=DC({...t,velocity:0});n={...n,...i,mass:Bs.mass},n.isResolvedFromDuration=!0}return n}function Cc(t=Bs.visualDuration,n=Bs.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:b,velocity:v,isResolvedFromDuration:S}=BC({...i,velocity:-Ti(i.velocity||0)}),C=v||0,j=g/(2*Math.sqrt(p*_)),M=d-u,T=Ti(Math.sqrt(p/_)),I=Math.abs(M)<5;a||(a=I?Bs.restSpeed.granular:Bs.restSpeed.default),c||(c=I?Bs.restDelta.granular:Bs.restDelta.default);let B,N,P,Y,V,U;if(j<1)P=Hm(T,j),Y=(C+j*T*M)/P,B=se=>{const oe=Math.exp(-j*T*se);return d-oe*(Y*Math.sin(P*se)+M*Math.cos(P*se))},V=j*T*Y+M*P,U=j*T*M-Y*P,N=se=>Math.exp(-j*T*se)*(V*Math.sin(P*se)+U*Math.cos(P*se));else if(j===1){B=oe=>d-Math.exp(-T*oe)*(M+(C+T*M)*oe);const se=C+T*M;N=oe=>Math.exp(-T*oe)*(T*se*oe-C)}else{const se=T*Math.sqrt(j*j-1);B=K=>{const le=Math.exp(-j*T*K),z=Math.min(se*K,300);return d-le*((C+j*T*M)*Math.sinh(z)+se*M*Math.cosh(z))/se};const oe=(C+j*T*M)/se,be=j*T*oe-M*se,Ee=j*T*M-oe*se;N=K=>{const le=Math.exp(-j*T*K),z=Math.min(se*K,300);return le*(be*Math.sinh(z)+Ee*Math.cosh(z))}}const Q={calculatedDuration:S&&b||null,velocity:se=>si(N(se)),next:se=>{if(!S&&j<1){const be=Math.exp(-j*T*se),Ee=Math.sin(P*se),K=Math.cos(P*se),le=d-be*(Y*Ee+M*K),z=si(be*(V*Ee+U*K));return h.done=Math.abs(z)<=a&&Math.abs(d-le)<=c,h.value=h.done?d:le,h}const oe=B(se);if(S)h.done=se>=b;else{const be=si(N(se));h.done=Math.abs(be)<=a&&Math.abs(d-oe)<=c}return h.value=h.done?d:oe,h},toString:()=>{const se=Math.min(Ep(Q),Ed),oe=Tb(be=>Q.next(se*be).value,se,30);return se+"ms "+oe},toTransition:()=>{}};return Q}Cc.applyToOptions=t=>{const n=Eb(t,100,Cc);return t.ease=n.ease,t.duration=si(n.duration),t.type="keyframes",t};const LC=5;function Ab(t,n,i){const a=Math.max(n-LC,0);return ab(i-t(a),n-a)}function Um({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const b=t[0],v={done:!1,value:b},S=U=>h!==void 0&&U<h||p!==void 0&&U>p,C=U=>h===void 0?p:p===void 0||Math.abs(h-U)<Math.abs(p-U)?h:p;let j=i*n;const M=b+j,T=d===void 0?M:d(M);T!==M&&(j=T-b);const I=U=>-j*Math.exp(-U/a),B=U=>T+I(U),N=U=>{const Q=I(U),se=B(U);v.done=Math.abs(Q)<=g,v.value=v.done?T:se};let P,Y;const V=U=>{S(v.value)&&(P=U,Y=Cc({keyframes:[v.value,C(v.value)],velocity:Ab(B,U,v.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return V(0),{calculatedDuration:null,next:U=>{let Q=!1;return!Y&&P===void 0&&(Q=!0,N(U),V(U)),P!==void 0&&U>=P?Y.next(U-P):(!Q&&N(U),v)}}}function OC(t,n,i){const a=[],c=i||Qa.mix||Mb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Ei:n;h=Dc(p,h)}a.push(h)}return a}function Db(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(vp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=OC(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let b=0;if(p>1)for(;b<t.length-2&&!(_<t[b+1]);b++);const v=ml(t[b],t[b+1],_);return h[b](v)};return i?_=>g(ea(t[0],t[u-1],_)):g}function Nb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=ml(0,n,a);t.push(ss(i,1,c))}}function Rb(t){const n=[0];return Nb(n,t.length-1),n}function zC(t,n){return t.map(i=>i*n)}function $C(t,n){return t.map(()=>n||pb).splice(0,t.length-1)}function yc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=_b(a)?a.map(o1):o1(a),u={done:!1,value:n[0]},d=zC(i&&i.length===n.length?i:Rb(n),t),h=Db(d,n,{ease:Array.isArray(c)?c:$C(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const IC=t=>t!==null;function zd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(IC),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const PC={decay:Um,inertia:Um,tween:yc,keyframes:yc,spring:Cc};function Bb(t){typeof t.type=="string"&&(t.type=PC[t.type])}class Ap{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const HC=t=>t/100;class Ad extends Ap{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Uo.now()&&this.tick(Uo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Bb(n);const{type:i=yc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||yc;p!==yc&&typeof h[0]!="number"&&(this.mixKeyframes=Dc(HC,Mb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Ep(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:b,repeatType:v,repeatDelay:S,type:C,onUpdate:j,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const T=this.currentTime-g*(this.playbackSpeed>=0?1:-1),I=this.playbackSpeed>=0?T<0:T>c;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let B=this.currentTime,N=a;if(b){const U=Math.min(this.currentTime,c)/h;let Q=Math.floor(U),se=U%1;!se&&U>=1&&(se=1),se===1&&Q--,Q=Math.min(Q,b+1),!!(Q%2)&&(v==="reverse"?(se=1-se,S&&(se-=S/h)):v==="mirror"&&(N=d)),B=ea(0,1,se)*h}let P;I?(this.delayState.value=_[0],P=this.delayState):P=N.next(B),u&&!I&&(P.value=u(P.value));let{done:Y}=P;!I&&p!==null&&(Y=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return V&&C!==Um&&(P.value=zd(_,this.options,M,this.speed)),j&&j(P.value),V&&this.finish(),P}then(n,i){return this.finished.then(n,i)}get duration(){return Ti(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ti(n)}get time(){return Ti(this.currentTime)}set time(n){n=si(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ab(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Uo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Ti(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=TC,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Uo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function UC(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const wr=t=>t*180/Math.PI,Vm=t=>{const n=wr(Math.atan2(t[1],t[0]));return Ym(n)},VC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Vm,rotateZ:Vm,skewX:t=>wr(Math.atan(t[1])),skewY:t=>wr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Ym=t=>(t=t%360,t<0&&(t+=360),t),d1=Vm,f1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),h1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),YC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:f1,scaleY:h1,scale:t=>(f1(t)+h1(t))/2,rotateX:t=>Ym(wr(Math.atan2(t[6],t[5]))),rotateY:t=>Ym(wr(Math.atan2(-t[2],t[0]))),rotateZ:d1,rotate:d1,skewX:t=>wr(Math.atan(t[4])),skewY:t=>wr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Wm(t){return t.includes("scale")?1:0}function Fm(t,n){if(!t||t==="none")return Wm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=YC,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=VC,c=h}if(!c)return Wm(n);const u=a[n],d=c[1].split(",").map(FC);return typeof u=="function"?u(d):d[u]}const WC=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Fm(i,n)};function FC(t){return parseFloat(t.trim())}const gl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],yl=new Set(gl),m1=t=>t===_l||t===jt,XC=new Set(["x","y","z"]),qC=gl.filter(t=>!XC.has(t));function GC(t){const n=[];return qC.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Ka={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Fm(n,"x"),y:(t,{transform:n})=>Fm(n,"y")};Ka.translateX=Ka.x;Ka.translateY=Ka.y;const Sr=new Set;let Xm=!1,qm=!1,Gm=!1;function Lb(){if(qm){const t=Array.from(Sr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=GC(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}qm=!1,Xm=!1,Sr.forEach(t=>t.complete(Gm)),Sr.clear()}function Ob(){Sr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(qm=!0)})}function KC(){Gm=!0,Ob(),Lb(),Gm=!1}class Dp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Sr.add(this),Xm||(Xm=!0,Yn.read(Ob),Yn.resolveKeyframes(Lb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}UC(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Sr.delete(this)}cancel(){this.state==="scheduled"&&(Sr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const QC=t=>t.startsWith("--");function zb(t,n,i){QC(n)?t.style.setProperty(n,i):t.style[n]=i}const ZC={};function $b(t,n){const i=ib(t);return()=>{var a;return(a=ZC[n])!=null?a:i()}}const JC=$b(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ib=$b(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),hc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,p1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hc([0,.65,.55,1]),circOut:hc([.55,0,1,.45]),backIn:hc([.31,.01,.66,-.59]),backOut:hc([.33,1.53,.69,.99])};function Pb(t,n){if(t)return typeof t=="function"?Ib()?Tb(t,n):"ease-out":yb(t)?hc(t):Array.isArray(t)?t.map(i=>Pb(i,n)||p1.easeOut):p1[t]}function e3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const b=Pb(h,c);Array.isArray(b)&&(_.easing=b);const v={delay:a,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(v.pseudoElement=g),t.animate(_,v)}function Np(t){return typeof t=="function"&&"applyToOptions"in t}function t3({type:t,...n}){var i,a;return Np(t)&&Ib()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Hb extends Ap{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,vp(typeof n.type!="string");const g=t3(n);this.animation=e3(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=zd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),zb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Ti(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ti(n)}get time(){return Ti(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=si(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&JC()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Ei):c(this)}}const Ub={anticipate:fb,backInOut:db,circInOut:mb};function n3(t){return t in Ub}function s3(t){typeof t.ease=="string"&&n3(t.ease)&&(t.ease=Ub[t.ease])}const mm=10;class o3 extends Hb{constructor(n){s3(n),Bb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Ad({...d,autoplay:!1}),p=Math.max(mm,Uo.now()-this.startTime),g=ea(0,mm,p-mm),_=h.sample(p).value,{name:b}=this.options;u&&b&&zb(u,b,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const _1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Vi.test(t)||t==="0")&&!t.startsWith("url("));function i3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function a3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=_1(c,n),h=_1(u,n);return!d||!h?!1:i3(t)||(i==="spring"||Np(i))&&a}function Km(t){t.duration=0,t.type="keyframes"}const Vb=new Set(["opacity","clipPath","filter","transform"]),r3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function l3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&r3.test(t[n]))return!0;return!1}const c3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),u3=ib(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function d3(t){var b;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((b=n==null?void 0:n.owner)==null?void 0:b.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return u3()&&i&&(Vb.has(i)||c3.has(i)&&l3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const f3=40;class h3 extends Ap{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...b}){var C;super(),this.stop=()=>{var j,M;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(M=this.keyframeResolver)==null||M.cancel()},this.createdAt=Uo.now();const v={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...b},S=(_==null?void 0:_.KeyframeResolver)||Dp;this.keyframeResolver=new S(h,(j,M,T)=>this.onKeyframesResolved(j,M,v,!T),p,g,_),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(n,i,a,c){var T,I;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Uo.now();let b=!0;a3(n,u,d,h)||(b=!1,(Qa.instantAnimations||!p)&&(_==null||_(zd(n,a,i))),n[0]=n[n.length-1],Km(a),a.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>f3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},C=b&&!g&&d3(S),j=(I=(T=S.motionValue)==null?void 0:T.owner)==null?void 0:I.current;let M;if(C)try{M=new o3({...S,element:j})}catch{M=new Ad(S)}else M=new Ad(S);M.finished.then(()=>{this.notifyFinished()}).catch(Ei),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),KC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class m3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return g1(this.animations,"duration")}get iterationDuration(){return g1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function g1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class p3 extends m3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Yb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const _3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function g3(t){const n=_3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Wb(t,n,i=1){const[a,c]=g3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return nb(d)?parseFloat(d):d}return kp(c)?Wb(c,n,i+1):c}const y3={type:"spring",stiffness:500,damping:25,restSpeed:10},x3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),b3={type:"keyframes",duration:.8},v3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},w3=(t,{keyframes:n})=>n.length>2?b3:yl.has(t)?t.startsWith("scale")?x3(n[1]):y3:v3;function Fb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Rp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Fb(i,t):i}const S3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function C3(t){for(const n in t)if(!S3.has(n))return!0;return!1}const Bp=(t,n,i,a={},c,u)=>d=>{const h=Rp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-si(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:v=>{n.set(v),h.onUpdate&&h.onUpdate(v)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};C3(h)||Object.assign(_,w3(t,_)),_.duration&&(_.duration=si(_.duration)),_.repeatDelay&&(_.repeatDelay=si(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let b=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Km(_),_.delay===0&&(b=!0)),(Qa.instantAnimations||Qa.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(b=!0,Km(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,b&&!u&&n.get()!==void 0){const v=zd(_.keyframes,h);if(v!==void 0){Yn.update(()=>{_.onUpdate(v),_.onComplete()});return}}return h.isSync?new Ad(_):new h3(_)};function y1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Lp(t,n,i,a){if(typeof n=="function"){const[c,u]=y1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=y1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Cr(t,n,i){const a=t.getProps();return Lp(a,n,i!==void 0?i:a.custom,t)}const Xb=new Set(["width","height","top","left","right","bottom",...gl]),x1=30,k3=t=>!isNaN(parseFloat(t)),xc={current:void 0};class j3{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Uo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Uo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=k3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new wp);const a=this.events[n].add(i);return n==="change"?()=>{a(),Yn.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return xc.current&&xc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Uo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>x1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,x1);return ab(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Za(t,n){return new j3(t,n)}const Qm=t=>Array.isArray(t);function M3(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,Za(i))}function T3(t){return Qm(t)?t[t.length-1]||0:t}function E3(t,n){const i=Cr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=T3(u[d]);M3(t,d,h)}}const ro=t=>!!(t&&t.getVelocity);function A3(t){return!!(ro(t)&&t.add)}function Zm(t,n){const i=t.getValue("willChange");if(A3(i))return i.add(n);if(!i&&Qa.WillChange){const a=new Qa.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Op(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const D3="framerAppearId",qb="data-"+Op(D3);function Gb(t){return t.props[qb]}function N3({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function zp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var v;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Fb(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],b=c&&t.animationState&&t.animationState.getState()[c];for(const S in h){const C=t.getValue(S,(v=t.latestValues[S])!=null?v:null),j=h[S];if(j===void 0||b&&N3(b,S))continue;const M={delay:i,...Rp(u||{},S)},T=C.get();if(T!==void 0&&!C.isAnimating()&&!Array.isArray(j)&&j===T&&!M.velocity){Yn.update(()=>C.set(j));continue}let I=!1;if(window.MotionHandoffAnimation){const P=Gb(t);if(P){const Y=window.MotionHandoffAnimation(P,S,Yn);Y!==null&&(M.startTime=Y,I=!0)}}Zm(t,S);const B=g!=null?g:t.shouldReduceMotion;C.start(Bp(S,C,j,B&&Xb.has(S)?{type:!1}:M,t,I));const N=C.animation;N&&_.push(N)}if(d){const S=()=>Yn.update(()=>{d&&E3(t,d)});_.length?Promise.all(_).then(S):S()}return _}function Jm(t,n,i={}){var p;const a=Cr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(zp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:b,staggerDirection:v}=c;return R3(t,n,g,_,b,v,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function R3(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Jm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Yb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function B3(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Jm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Jm(t,n,i);else{const c=typeof n=="function"?Cr(t,n,i.custom):n;a=Promise.all(zp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const L3={test:t=>t==="auto",parse:t=>t},Kb=t=>n=>n.test(t),Qb=[_l,jt,Ji,Xa,cC,lC,L3],b1=t=>Qb.find(Kb(t));function O3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ob(t):!0}const z3=new Set(["brightness","contrast","saturate","opacity"]);function $3(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(jp)||[];if(!a)return t;const c=i.replace(a,"");let u=z3.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const I3=/\b([a-z-]*)\(.*?\)/gu,ep={...Vi,getAnimatableNone:t=>{const n=t.match(I3);return n?n.map($3).join(" "):t}},tp={...Vi,getAnimatableNone:t=>{const n=Vi.parse(t);return Vi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},v1={..._l,transform:Math.round},P3={rotate:Xa,rotateX:Xa,rotateY:Xa,rotateZ:Xa,scale:od,scaleX:od,scaleY:od,scaleZ:od,skew:Xa,skewX:Xa,skewY:Xa,distance:jt,translateX:jt,translateY:jt,translateZ:jt,x:jt,y:jt,z:jt,perspective:jt,transformPerspective:jt,opacity:Sc,originX:a1,originY:a1,originZ:jt},$p={borderWidth:jt,borderTopWidth:jt,borderRightWidth:jt,borderBottomWidth:jt,borderLeftWidth:jt,borderRadius:jt,borderTopLeftRadius:jt,borderTopRightRadius:jt,borderBottomRightRadius:jt,borderBottomLeftRadius:jt,width:jt,maxWidth:jt,height:jt,maxHeight:jt,top:jt,right:jt,bottom:jt,left:jt,inset:jt,insetBlock:jt,insetBlockStart:jt,insetBlockEnd:jt,insetInline:jt,insetInlineStart:jt,insetInlineEnd:jt,padding:jt,paddingTop:jt,paddingRight:jt,paddingBottom:jt,paddingLeft:jt,paddingBlock:jt,paddingBlockStart:jt,paddingBlockEnd:jt,paddingInline:jt,paddingInlineStart:jt,paddingInlineEnd:jt,margin:jt,marginTop:jt,marginRight:jt,marginBottom:jt,marginLeft:jt,marginBlock:jt,marginBlockStart:jt,marginBlockEnd:jt,marginInline:jt,marginInlineStart:jt,marginInlineEnd:jt,fontSize:jt,backgroundPositionX:jt,backgroundPositionY:jt,...P3,zIndex:v1,fillOpacity:Sc,strokeOpacity:Sc,numOctaves:v1},H3={...$p,color:no,backgroundColor:no,outlineColor:no,fill:no,stroke:no,borderColor:no,borderTopColor:no,borderRightColor:no,borderBottomColor:no,borderLeftColor:no,filter:ep,WebkitFilter:ep,mask:tp,WebkitMask:tp},Zb=t=>H3[t],U3=new Set([ep,tp]);function Jb(t,n){let i=Zb(t);return U3.has(i)||(i=Vi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const V3=new Set(["auto","none","0"]);function Y3(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!V3.has(u)&&pl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Jb(i,c)}class W3 extends Dp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let b=n[_];if(typeof b=="string"&&(b=b.trim(),kp(b))){const v=Wb(b,i.current);v!==void 0&&(n[_]=v),_===n.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Xb.has(a)||n.length!==2)return;const[c,u]=n,d=b1(c),h=b1(u),p=i1(c),g=i1(u);if(p!==g&&Ka[a]){this.needsMeasurement=!0;return}if(d!==h)if(m1(d)&&m1(h))for(let _=0;_<n.length;_++){const b=n[_];typeof b=="string"&&(n[_]=parseFloat(b))}else Ka[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||O3(n[c]))&&a.push(c);a.length&&Y3(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ka[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=Ka[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function Ip(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const e5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function md(t){return sb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Pp}=xb(queueMicrotask,!1),Pi={x:!1,y:!1};function t5(){return Pi.x||Pi.y}function F3(t){return t==="x"||t==="y"?Pi[t]?null:(Pi[t]=!0,()=>{Pi[t]=!1}):Pi.x||Pi.y?null:(Pi.x=Pi.y=!0,()=>{Pi.x=Pi.y=!1})}function n5(t,n){const i=Ip(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function X3(t){return!(t.pointerType==="touch"||t5())}function q3(t,n,i={}){const[a,c,u]=n5(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",C)},b=M=>{g&&(g(M),g=void 0),_()},v=M=>{h=!1,window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),p&&(p=!1,b(M))},S=()=>{h=!0,window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",v,c)},C=M=>{if(M.pointerType!=="touch"){if(h){p=!0;return}b(M)}},j=M=>{if(!X3(M))return;p=!1;const T=n(d,M);typeof T=="function"&&(g=T,d.addEventListener("pointerleave",C,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",S,c)}),u}const s5=(t,n)=>n?t===n?!0:s5(t,n.parentElement):!1,Hp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,G3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function K3(t){return G3.has(t.tagName)||t.isContentEditable===!0}const Q3=new Set(["INPUT","SELECT","TEXTAREA"]);function Z3(t){return Q3.has(t.tagName)||t.isContentEditable===!0}const pd=new WeakSet;function w1(t){return n=>{n.key==="Enter"&&t(n)}}function pm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const J3=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=w1(()=>{if(pd.has(i))return;pm(i,"down");const c=w1(()=>{pm(i,"up")}),u=()=>pm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function S1(t){return Hp(t)&&!t5()}const C1=new WeakSet;function ek(t,n,i={}){const[a,c,u]=n5(t,i),d=h=>{const p=h.currentTarget;if(!S1(h)||C1.has(h))return;pd.add(p),i.stopPropagation&&C1.add(h);const g=n(p,h),_=(S,C)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",v),pd.has(p)&&pd.delete(p),S1(S)&&typeof g=="function"&&g(S,{success:C})},b=S=>{_(S,p===window||p===document||i.useGlobalTarget||s5(p,S.target))},v=S=>{_(S,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",v,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),md(h)&&(h.addEventListener("focus",g=>J3(g,c)),!K3(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function $d(t){return sb(t)&&"ownerSVGElement"in t}const _d=new WeakMap;let qa;const o5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:$d(a)&&"getBBox"in a?a.getBBox()[n]:a[i],tk=o5("inline","width","offsetWidth"),nk=o5("block","height","offsetHeight");function sk({target:t,borderBoxSize:n}){var i;(i=_d.get(t))==null||i.forEach(a=>{a(t,{get width(){return tk(t,n)},get height(){return nk(t,n)}})})}function ok(t){t.forEach(sk)}function ik(){typeof ResizeObserver>"u"||(qa=new ResizeObserver(ok))}function ak(t,n){qa||ik();const i=Ip(t);return i.forEach(a=>{let c=_d.get(a);c||(c=new Set,_d.set(a,c)),c.add(n),qa==null||qa.observe(a)}),()=>{i.forEach(a=>{const c=_d.get(a);c==null||c.delete(n),c!=null&&c.size||qa==null||qa.unobserve(a)})}}const gd=new Set;let cl;function rk(){cl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};gd.forEach(n=>n(t))},window.addEventListener("resize",cl)}function lk(t){return gd.add(t),cl||rk(),()=>{gd.delete(t),!gd.size&&typeof cl=="function"&&(window.removeEventListener("resize",cl),cl=void 0)}}function k1(t,n){return typeof t=="function"?lk(t):ak(t,n)}function i5(t){return $d(t)&&t.tagName==="svg"}function ck(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Db(c,u,d);return n?h(a):h}const uk=[...Qb,no,Vi],dk=t=>uk.find(Kb(t)),j1=()=>({translate:0,scale:1,origin:0,originPoint:0}),ul=()=>({x:j1(),y:j1()}),M1=()=>({min:0,max:0}),to=()=>({x:M1(),y:M1()}),kc=new WeakMap;function Id(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function jc(t){return typeof t=="string"||Array.isArray(t)}const Up=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...Up];function Pd(t){return Id(t.animate)||Vp.some(n=>jc(t[n]))}function a5(t){return!!(Pd(t)||t.variants)}function fk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(ro(c))t.addValue(a,c);else if(ro(u))t.addValue(a,Za(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,Za(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const np={current:null},r5={current:!1},hk=typeof window<"u";function mk(){if(r5.current=!0,!!hk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>np.current=t.matches;t.addEventListener("change",n),n()}else np.current=!1}const T1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function l5(t){Dd=t}function pk(){return Dd}class c5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Dp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Uo.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Yn.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Pd(i),this.isVariantNode=a5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:b,...v}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in v){const C=v[S];g[S]!==void 0&&ro(C)&&C.set(g[S])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,kc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(r5.current||mk(),this.shouldReduceMotion=np.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),ba(this.notifyUpdate),ba(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Vb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,b=new Hb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:si(_)}),v=d(b);this.valueSubscriptions.set(n,()=>{v(),b.cancel()});return}const a=yl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&Yn.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):to()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<T1.length;a++){const c=T1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=fk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=Za(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(nb(a)||ob(a))?a=parseFloat(a):!dk(a)&&Vi.test(i)&&(a=Jb(n,i)),this.setBaseTarget(n,ro(a)?a.get():a)),ro(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Lp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!ro(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new wp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Pp.render(this.render)}}class u5 extends c5{constructor(){super(...arguments),this.KeyframeResolver=W3}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;ro(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Ja{constructor(n){this.isMounted=!1,this.node=n}update(){}}function d5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function _k({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function gk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function _m(t){return t===void 0||t===1}function sp({scale:t,scaleX:n,scaleY:i}){return!_m(t)||!_m(n)||!_m(i)}function yr(t){return sp(t)||f5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function f5(t){return E1(t.x)||E1(t.y)}function E1(t){return t&&t!=="0%"}function Nd(t,n,i){const a=t-i,c=n*a;return i+c}function A1(t,n,i,a,c){return c!==void 0&&(t=Nd(t,c,a)),Nd(t,i,a)+n}function op(t,n=0,i=1,a,c){t.min=A1(t.min,n,i,a,c),t.max=A1(t.max,n,i,a,c)}function h5(t,{x:n,y:i}){op(t.x,n.translate,n.scale,n.originPoint),op(t.y,i.translate,i.scale,i.originPoint)}const D1=.999999999999,N1=1.0000000000001;function yk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Zi(t.x,-u.scroll.offset.x),Zi(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,h5(t,d)),a&&yr(u.latestValues)&&yd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<N1&&n.x>D1&&(n.x=1),n.y<N1&&n.y>D1&&(n.y=1)}function Zi(t,n){t.min+=n,t.max+=n}function R1(t,n,i,a,c=.5){const u=ss(t.min,t.max,c);op(t,n,i,u,a)}function B1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function yd(t,n,i){const a=i!=null?i:t;R1(t.x,B1(n.x,a.x),n.scaleX,n.scale,n.originX),R1(t.y,B1(n.y,a.y),n.scaleY,n.scale,n.originY)}function m5(t,n){return d5(gk(t.getBoundingClientRect(),n))}function xk(t,n,i){const a=m5(t,i),{scroll:c}=n;return c&&(Zi(a.x,c.offset.x),Zi(a.y,c.offset.y)),a}const bk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vk=gl.length;function wk(t,n,i){let a="",c=!0;for(let u=0;u<vk;u++){const d=gl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=e5(h,$p[d]);if(!p){c=!1;const _=bk[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Yp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(yl.has(p)){d=!0;continue}else if(vb(p)){c[p]=g;continue}else{const _=e5(g,$p[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=wk(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function p5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function L1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const uc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(jt.test(t))t=parseFloat(t);else return t;const i=L1(t,n.target.x),a=L1(t,n.target.y);return`${i}% ${a}%`}},Sk={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Vi.parse(t);if(c.length>5)return a;const u=Vi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=ss(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},ip={borderRadius:{...uc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:uc,borderTopRightRadius:uc,borderBottomLeftRadius:uc,borderBottomRightRadius:uc,boxShadow:Sk};function _5(t,{layout:n,layoutId:i}){return yl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!ip[t]||t==="opacity")}function Wp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(ro(a[h])||c&&ro(c[h])||_5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function Ck(t){return window.getComputedStyle(t)}class g5 extends u5{constructor(){super(...arguments),this.type="html",this.renderInstance=p5}readValueFromInstance(n,i){var a;if(yl.has(i))return(a=this.projection)!=null&&a.isProjecting?Wm(i):WC(n,i);{const c=Ck(n),u=(vb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return m5(n,i)}build(n,i,a){Yp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Wp(n,i,a)}}function kk(t,n){return t in n}class jk extends c5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(kk(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return to()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const Mk={offset:"stroke-dashoffset",array:"stroke-dasharray"},Tk={offset:"strokeDashoffset",array:"strokeDasharray"};function Ek(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?Mk:Tk;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const Ak=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function y5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var S,C;if(Yp(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:b,style:v}=t;b.transform&&(v.transform=b.transform,delete b.transform),(v.transform||b.transformOrigin)&&(v.transformOrigin=(S=b.transformOrigin)!=null?S:"50% 50%",delete b.transformOrigin),v.transform&&(v.transformBox=(C=_==null?void 0:_.transformBox)!=null?C:"fill-box",delete b.transformBox);for(const j of Ak)b[j]!==void 0&&(v[j]=b[j],delete b[j]);n!==void 0&&(b.x=n),i!==void 0&&(b.y=i),a!==void 0&&(b.scale=a),c!==void 0&&Ek(b,c,u,d,!1)}const x5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),b5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Dk(t,n,i,a){p5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(x5.has(c)?c:Op(c),n.attrs[c])}function v5(t,n,i){const a=Wp(t,n,i);for(const c in t)if(ro(t[c])||ro(n[c])){const u=gl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class w5 extends u5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=to}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(yl.has(i)){const a=Zb(i);return a&&a.default||0}return i=x5.has(i)?i:Op(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return v5(n,i,a)}build(n,i,a){y5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){Dk(n,i,a,c)}mount(n){this.isSVGTag=b5(n.tagName),super.mount(n)}}const Nk=Vp.length;function S5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?S5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<Nk;i++){const a=Vp[i],c=t.props[a];(jc(c)||c===!1)&&(n[a]=c)}return n}function C5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const Rk=[...Up].reverse(),Bk=Up.length;function Lk(t){return n=>Promise.all(n.map(({animation:i,options:a})=>B3(t,i,a)))}function Ok(t){let n=Lk(t),i=O1(),a=!0,c=!1;const u=g=>(_,b)=>{var S;const v=Cr(t,b,g==="exit"?(S=t.presenceContext)==null?void 0:S.custom:void 0);if(v){const{transition:C,transitionEnd:j,...M}=v;_={..._,...M,...j}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,b=S5(t.parent)||{},v=[],S=new Set;let C={},j=1/0;for(let T=0;T<Bk;T++){const I=Rk[T],B=i[I],N=_[I]!==void 0?_[I]:b[I],P=jc(N),Y=I===g?B.isActive:null;Y===!1&&(j=T);let V=N===b[I]&&N!==_[I]&&P;if(V&&(a||c)&&t.manuallyAnimateOnMount&&(V=!1),B.protectedKeys={...C},!B.isActive&&Y===null||!N&&!B.prevProp||Id(N)||typeof N=="boolean")continue;if(I==="exit"&&B.isActive&&Y!==!0){B.prevResolvedValues&&(C={...C,...B.prevResolvedValues});continue}const U=zk(B.prevProp,N);let Q=U||I===g&&B.isActive&&!V&&P||T>j&&P,se=!1;const oe=Array.isArray(N)?N:[N];let be=oe.reduce(u(I),{});Y===!1&&(be={});const{prevResolvedValues:Ee={}}=B,K={...Ee,...be},le=X=>{Q=!0,S.has(X)&&(se=!0,S.delete(X)),B.needsAnimating[X]=!0;const me=t.getValue(X);me&&(me.liveStyle=!1)};for(const X in K){const me=be[X],Te=Ee[X];if(C.hasOwnProperty(X))continue;let A=!1;Qm(me)&&Qm(Te)?A=!C5(me,Te):A=me!==Te,A?me!=null?le(X):S.add(X):me!==void 0&&S.has(X)?le(X):B.protectedKeys[X]=!0}B.prevProp=N,B.prevResolvedValues=be,B.isActive&&(C={...C,...be}),(a||c)&&t.blockInitialAnimation&&(Q=!1);const z=V&&U;Q&&(!z||se)&&v.push(...oe.map(X=>{const me={type:I};if(typeof X=="string"&&(a||c)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:Te}=t,A=Cr(Te,X);if(Te.enteringChildren&&A){const{delayChildren:ee}=A.transition||{};me.delay=Yb(Te.enteringChildren,t,ee)}}return{animation:X,options:me}}))}if(S.size){const T={};if(typeof _.initial!="boolean"){const I=Cr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);I&&I.transition&&(T.transition=I.transition)}S.forEach(I=>{const B=t.getBaseTarget(I),N=t.getValue(I);N&&(N.liveStyle=!0),T[I]=B!=null?B:null}),v.push({animation:T})}let M=!!v.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(M=!1),a=!1,c=!1,M?n(v):Promise.resolve()}function p(g,_){var v;if(i[g].isActive===_)return Promise.resolve();(v=t.variantChildren)==null||v.forEach(S=>{var C;return(C=S.animationState)==null?void 0:C.setActive(g,_)}),i[g].isActive=_;const b=h(g);for(const S in i)i[S].protectedKeys={};return b}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=O1(),c=!0}}}function zk(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!C5(n,t):!1}function gr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function O1(){return{animate:gr(!0),whileInView:gr(),whileHover:gr(),whileTap:gr(),whileDrag:gr(),whileFocus:gr(),exit:gr()}}function ap(t,n){t.min=n.min,t.max=n.max}function Ii(t,n){ap(t.x,n.x),ap(t.y,n.y)}function z1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const k5=1e-4,$k=1-k5,Ik=1+k5,j5=.01,Pk=0-j5,Hk=0+j5;function Vo(t){return t.max-t.min}function Uk(t,n,i){return Math.abs(t-n)<=i}function $1(t,n,i,a=.5){t.origin=a,t.originPoint=ss(n.min,n.max,t.origin),t.scale=Vo(i)/Vo(n),t.translate=ss(i.min,i.max,t.origin)-t.originPoint,(t.scale>=$k&&t.scale<=Ik||isNaN(t.scale))&&(t.scale=1),(t.translate>=Pk&&t.translate<=Hk||isNaN(t.translate))&&(t.translate=0)}function bc(t,n,i,a){$1(t.x,n.x,i.x,a?a.originX:void 0),$1(t.y,n.y,i.y,a?a.originY:void 0)}function I1(t,n,i,a=0){const c=a?ss(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Vo(n)}function Vk(t,n,i,a){I1(t.x,n.x,i.x,a==null?void 0:a.x),I1(t.y,n.y,i.y,a==null?void 0:a.y)}function P1(t,n,i,a=0){const c=a?ss(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Vo(n)}function Rd(t,n,i,a){P1(t.x,n.x,i.x,a==null?void 0:a.x),P1(t.y,n.y,i.y,a==null?void 0:a.y)}function H1(t,n,i,a,c){return t-=n,t=Nd(t,1/i,a),c!==void 0&&(t=Nd(t,1/c,a)),t}function Yk(t,n=0,i=1,a=.5,c,u=t,d=t){if(Ji.test(n)&&(n=parseFloat(n),n=ss(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ss(u.min,u.max,a);t===u&&(h-=n),t.min=H1(t.min,n,i,h,c),t.max=H1(t.max,n,i,h,c)}function U1(t,n,[i,a,c],u,d){Yk(t,n[i],n[a],n[c],n.scale,u,d)}const Wk=["x","scaleX","originX"],Fk=["y","scaleY","originY"];function V1(t,n,i,a){U1(t.x,n,Wk,i?i.x:void 0,a?a.x:void 0),U1(t.y,n,Fk,i?i.y:void 0,a?a.y:void 0)}function Y1(t){return t.translate===0&&t.scale===1}function M5(t){return Y1(t.x)&&Y1(t.y)}function W1(t,n){return t.min===n.min&&t.max===n.max}function Xk(t,n){return W1(t.x,n.x)&&W1(t.y,n.y)}function F1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function T5(t,n){return F1(t.x,n.x)&&F1(t.y,n.y)}function X1(t){return Vo(t.x)/Vo(t.y)}function q1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function Qi(t){return[t("x"),t("y")]}function qk(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:b,rotateY:v,skewX:S,skewY:C}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),b&&(a+=`rotateX(${b}deg) `),v&&(a+=`rotateY(${v}deg) `),S&&(a+=`skewX(${S}deg) `),C&&(a+=`skewY(${C}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const E5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Gk=E5.length,G1=t=>typeof t=="string"?parseFloat(t):t,K1=t=>typeof t=="number"||jt.test(t);function Kk(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=ss(0,(d=i.opacity)!=null?d:1,Qk(a)),t.opacityExit=ss((h=n.opacity)!=null?h:1,0,Zk(a))):u&&(t.opacity=ss((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<Gk;_++){const b=E5[_];let v=Q1(n,b),S=Q1(i,b);if(v===void 0&&S===void 0)continue;v||(v=0),S||(S=0),v===0||S===0||K1(v)===K1(S)?(t[b]=Math.max(ss(G1(v),G1(S),a),0),(Ji.test(S)||Ji.test(v))&&(t[b]+="%")):t[b]=S}(n.rotate||i.rotate)&&(t.rotate=ss(n.rotate||0,i.rotate||0,a))}function Q1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const Qk=A5(0,.5,hb),Zk=A5(.5,.95,Ei);function A5(t,n,i){return a=>a<t?0:a>n?1:i(ml(t,n,a))}function D5(t,n,i){const a=ro(t)?t:Za(t);return a.start(Bp("",a,n,i)),a.animation}function Mc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const Jk=(t,n)=>t.depth-n.depth;class e8{constructor(){this.children=[],this.isDirty=!1}add(n){bp(this.children,n),this.isDirty=!0}remove(n){hl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(Jk),this.isDirty=!1,this.children.forEach(n)}}function t8(t,n){const i=Uo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(ba(a),t(u-n))};return Yn.setup(a,!0),()=>ba(a)}function xd(t){return ro(t)?t.get():t}class n8{constructor(){this.members=[]}add(n){bp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(hl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(hl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const bd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gm=["","X","Y","Z"],s8=1e3;let o8=0;function ym(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function N5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Gb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Yn,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&N5(a)}function R5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=o8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(r8),this.nodes.forEach(h8),this.nodes.forEach(m8),this.nodes.forEach(l8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new e8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new wp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=$d(d)&&!i5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,b=0;const v=()=>this.root.updateBlockedByResize=!1;Yn.read(()=>{b=window.innerWidth}),t(d,()=>{const S=window.innerWidth;S!==b&&(b=S,this.root.updateBlockedByResize=!0,_&&_(),_=t8(v,250),bd.hasAnimatedSinceResize&&(bd.hasAnimatedSinceResize=!1,this.nodes.forEach(ex)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:b,hasRelativeLayoutChanged:v,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||g.getDefaultTransition()||x8,{onLayoutAnimationStart:j,onLayoutAnimationComplete:M}=g.getProps(),T=!this.targetLayout||!T5(this.targetLayout,S),I=!b&&v;if(this.options.layoutRoot||this.resumeFrom||I||b&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const B={...Rp(C,"layout"),onPlay:j,onComplete:M};(g.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B),this.setAnimationOrigin(_,I)}else b||ex(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ba(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(p8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&N5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const b=this.path[_];b.shouldResetTransform=!0,(typeof b.latestValues.x=="string"||typeof b.latestValues.y=="string")&&(b.isLayoutDirty=!0),b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(u8),this.nodes.forEach(Z1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(J1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(d8),this.nodes.forEach(f8),this.nodes.forEach(i8),this.nodes.forEach(a8)):this.nodes.forEach(J1),this.clearAllSnapshots();const h=Uo.now();jo.delta=ea(0,1e3/60,h-jo.timestamp),jo.timestamp=h,jo.isProcessing=!0,cm.update.process(jo),cm.preRender.process(jo),cm.render.process(jo),jo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(c8),this.sharedNodes.forEach(_8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Yn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Yn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vo(this.snapshot.measuredBox.x)&&!Vo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=to()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!M5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||yr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),b8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return to();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(v8))){const{scroll:_}=this.root;_&&(Zi(h.x,_.offset.x),Zi(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=to();if(Ii(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:b,options:v}=_;_!==this.root&&b&&v.layoutScroll&&(b.wasRoot&&Ii(h,d),Zi(h.x,b.offset.x),Zi(h.y,b.offset.y))}return h}applyTransform(d,h=!1,p){var _,b;const g=p||to();Ii(g,d);for(let v=0;v<this.path.length;v++){const S=this.path[v];!h&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(Zi(g.x,-S.scroll.offset.x),Zi(g.y,-S.scroll.offset.y)),yr(S.latestValues)&&yd(g,S.latestValues,(_=S.layout)==null?void 0:_.layoutBox)}return yr(this.latestValues)&&yd(g,this.latestValues,(b=this.layout)==null?void 0:b.layoutBox),g}removeTransform(d){var p;const h=to();Ii(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!yr(_.latestValues))continue;let b;_.instance&&(sp(_.latestValues)&&_.updateSnapshot(),b=to(),Ii(b,_.measurePageBox())),V1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,b)}return yr(this.latestValues)&&V1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==jo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var S;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:b}=this.options;if(!this.layout||!(_||b))return;this.resolvedRelativeTargetAt=jo.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=to(),this.targetWithTransforms=to()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Vk(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ii(this.target,this.layout.layoutBox),h5(this.target,this.targetDelta)):Ii(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||sp(this.parent.latestValues)||f5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=to(),this.relativeTargetOrigin=to(),Rd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Ii(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var C;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===jo.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Ii(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,v=this.treeScale.y;yk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=to());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(z1(this.prevProjectionDelta.x,this.projectionDelta.x),z1(this.prevProjectionDelta.y,this.projectionDelta.y)),bc(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==v||!q1(this.projectionDelta.x,this.prevProjectionDelta.x)||!q1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ul(),this.projectionDelta=ul(),this.projectionDeltaWithTransform=ul()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},b=ul();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const v=to(),S=p?p.source:void 0,C=this.layout?this.layout.source:void 0,j=S!==C,M=this.getStack(),T=!M||M.members.length<=1,I=!!(j&&!T&&this.options.crossfade===!0&&!this.path.some(y8));this.animationProgress=0;let B;this.mixTargetDelta=N=>{const P=N/1e3;tx(b.x,d.x,P),tx(b.y,d.y,P),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Rd(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),g8(this.relativeTarget,this.relativeTargetOrigin,v,P),B&&Xk(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=to()),Ii(B,this.relativeTarget)),j&&(this.animationValues=_,Kk(_,g,this.latestValues,P,I,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(ba(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Yn.update(()=>{bd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Za(0)),this.motionValue.jump(0,!1),this.currentAnimation=D5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(s8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&B5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||to();const b=Vo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+b;const v=Vo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+v}Ii(h,p),yd(h,_),bc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new n8),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&ym("z",d,g,this.animationValues);for(let _=0;_<gm.length;_++)ym(`rotate${gm[_]}`,d,g,this.animationValues),ym(`skew${gm[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var C,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!yr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=qk(this.projectionDeltaWithTransform,this.treeScale,_);p&&(b=p(_,b)),d.transform=b;const{x:v,y:S}=this.projectionDelta;d.transformOrigin=`${v.origin*100}% ${S.origin*100}% 0`,g.animationValues?d.opacity=g===this?(j=(C=_.opacity)!=null?C:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const M in ip){if(_[M]===void 0)continue;const{correct:T,applyTo:I,isCSSVariable:B}=ip[M],N=b==="none"?_[M]:T(_[M],g);if(I){const P=I.length;for(let Y=0;Y<P;Y++)d[I[Y]]=N}else B?this.options.visualElement.renderState.vars[M]=N:d[M]=N}this.options.layoutId&&(d.pointerEvents=g===this?xd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Z1),this.root.sharedNodes.clear()}}}function i8(t){t.updateLayout()}function a8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")Qi(b=>{const v=d?n.measuredBox[b]:n.layoutBox[b],S=Vo(v);v.min=a[b].min,v.max=v.min+S});else if(u==="x"||u==="y"){const b=u==="x"?"y":"x";ap(d?n.measuredBox[b]:n.layoutBox[b],a[b])}else B5(u,n.layoutBox,a)&&Qi(b=>{const v=d?n.measuredBox[b]:n.layoutBox[b],S=Vo(a[b]);v.max=v.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[b].max=t.relativeTarget[b].min+S)});const h=ul();bc(h,a,n.layoutBox);const p=ul();d?bc(p,t.applyTransform(c,!0),n.measuredBox):bc(p,a,n.layoutBox);const g=!M5(h);let _=!1;if(!t.resumeFrom){const b=t.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:v,layout:S}=b;if(v&&S){const C=t.options.layoutAnchor||void 0,j=to();Rd(j,n.layoutBox,v.layoutBox,C);const M=to();Rd(M,a,S.layoutBox,C),T5(j,M)||(_=!0),b.options.layoutRoot&&(t.relativeTarget=M,t.relativeTargetOrigin=j,t.relativeParent=b)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function r8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function l8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function c8(t){t.clearSnapshot()}function Z1(t){t.clearMeasurements()}function u8(t){t.isLayoutDirty=!0,t.updateLayout()}function J1(t){t.isLayoutDirty=!1}function d8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function f8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ex(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function h8(t){t.resolveTargetDelta()}function m8(t){t.calcProjection()}function p8(t){t.resetSkewAndRotation()}function _8(t){t.removeLeadSnapshot()}function tx(t,n,i){t.translate=ss(n.translate,0,i),t.scale=ss(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function nx(t,n,i,a){t.min=ss(n.min,i.min,a),t.max=ss(n.max,i.max,a)}function g8(t,n,i,a){nx(t.x,n.x,i.x,a),nx(t.y,n.y,i.y,a)}function y8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const x8={duration:.45,ease:[.4,0,.1,1]},sx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ox=sx("applewebkit/")&&!sx("chrome/")?Math.round:Ei;function ix(t){t.min=ox(t.min),t.max=ox(t.max)}function b8(t){ix(t.x),ix(t.y)}function B5(t,n,i){return t==="position"||t==="preserve-aspect"&&!Uk(X1(n),X1(i),.2)}function v8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const w8=R5({attachResizeListener:(t,n)=>Mc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xm={current:void 0},L5=R5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!xm.current){const t=new w8({});t.mount(window),t.setOptions({layoutScroll:!0}),xm.current=t}return xm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Hd=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function ax(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function S8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=ax(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():ax(t[c],null)}}}}function C8(...t){return y.useCallback(S8(...t),t)}class k8 extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(md(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=md(a)&&a.offsetWidth||0,u=md(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function j8({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var v,S;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Hd),_=(S=(v=t.props)==null?void 0:v.ref)!=null?S:t==null?void 0:t.ref,b=C8(h,_);return y.useInsertionEffect(()=>{const{width:C,height:j,top:M,left:T,right:I,bottom:B}=p.current;if(n||u===!1||!h.current||!C||!j)return;const N=i==="left"?`left: ${T}`:`right: ${I}`,P=a==="bottom"?`bottom: ${B}`:`top: ${M}`;h.current.dataset.motionPopId=d;const Y=document.createElement("style");g&&(Y.nonce=g);const V=c!=null?c:document.head;return V.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${j}px !important;
            ${N}px !important;
            ${P}px !important;
          }
        `),()=>{var U;(U=h.current)==null||U.removeAttribute("data-motion-pop-id"),V.contains(Y)&&V.removeChild(Y)}},[n]),l.jsx(k8,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:b})})}const M8=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Ac(T8),b=y.useId();let v=!0,S=y.useMemo(()=>(v=!1,{id:b,initial:n,isPresent:i,custom:c,onExitComplete:C=>{_.set(C,!0);for(const j of _.values())if(!j)return;a&&a()},register:C=>(_.set(C,!1),()=>_.delete(C))}),[i,_,a]);return u&&v&&(S={...S}),y.useMemo(()=>{_.forEach((C,j)=>_.set(j,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(j8,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),l.jsx(Od.Provider,{value:S,children:t})};function T8(){return new Map}function O5(t=!0){const n=y.useContext(Od);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const id=t=>t.key||"";function rx(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Ud=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,b]=O5(d),v=y.useMemo(()=>rx(t),[t]),S=d&&!_?[]:v.map(id),C=y.useRef(!0),j=y.useRef(v),M=Ac(()=>new Map),T=y.useRef(new Set),[I,B]=y.useState(v),[N,P]=y.useState(v);xp(()=>{C.current=!1,j.current=v;for(let U=0;U<N.length;U++){const Q=id(N[U]);S.includes(Q)?(M.delete(Q),T.current.delete(Q)):M.get(Q)!==!0&&M.set(Q,!1)}},[N,S.length,S.join("-")]);const Y=[];if(v!==I){let U=[...v];for(let Q=0;Q<N.length;Q++){const se=N[Q],oe=id(se);S.includes(oe)||(U.splice(Q,0,se),Y.push(se))}return u==="wait"&&Y.length&&(U=Y),P(rx(U)),B(v),null}const{forceRender:V}=y.useContext(yp);return l.jsx(l.Fragment,{children:N.map(U=>{const Q=id(U),se=d&&!_?!1:v===N||S.includes(Q),oe=()=>{if(T.current.has(Q))return;if(M.has(Q))T.current.add(Q),M.set(Q,!0);else return;let be=!0;M.forEach(Ee=>{Ee||(be=!1)}),be&&(V==null||V(),P(j.current),d&&(b==null||b()),a&&a())};return l.jsx(M8,{isPresent:se,initial:!C.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:se?void 0:oe,anchorX:h,anchorY:p,children:U},Q)})})},z5=y.createContext({strict:!1}),lx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let cx=!1;function E8(){if(cx)return;const t={};for(const n in lx)t[n]={isEnabled:i=>lx[n].some(a=>!!i[a])};l5(t),cx=!0}function $5(){return E8(),pk()}function A8(t){const n=$5();for(const i in t)n[i]={...n[i],...t[i]};l5(n)}const D8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Bd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||D8.has(t)}let I5=t=>!Bd(t);function N8(t){typeof t=="function"&&(I5=n=>n.startsWith("on")?!Bd(n):t(n))}try{N8(require("@emotion/is-prop-valid").default)}catch{}function R8(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||ro(t[c])||(I5(c)||i===!0&&Bd(c)||!n&&!Bd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Vd=y.createContext({});function B8(t,n){if(Pd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||jc(i)?i:void 0,animate:jc(a)?a:void 0}}return t.inherit!==!1?n:{}}function L8(t){const{initial:n,animate:i}=B8(t,y.useContext(Vd));return y.useMemo(()=>({initial:n,animate:i}),[ux(n),ux(i)])}function ux(t){return Array.isArray(t)?t.join(" "):t}const Fp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function P5(t,n,i){for(const a in n)!ro(n[a])&&!_5(a,i)&&(t[a]=n[a])}function O8({transformTemplate:t},n){return y.useMemo(()=>{const i=Fp();return Yp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function z8(t,n){const i=t.style||{},a={};return P5(a,i,t),Object.assign(a,O8(t,n)),a}function $8(t,n){const i={},a=z8(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const H5=()=>({...Fp(),attrs:{}});function I8(t,n,i,a){const c=y.useMemo(()=>{const u=H5();return y5(u,n,b5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};P5(u,t.style,t),c.style={...u,...c.style}}return c}const P8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xp(t){return typeof t!="string"||t.includes("-")?!1:!!(P8.indexOf(t)>-1||/[A-Z]/u.test(t))}function H8(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Xp(t))?I8:$8)(n,a,c,t),g=R8(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:b}=n,v=y.useMemo(()=>ro(b)?b.get():b,[b]);return y.createElement(t,{..._,children:v})}function U8({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:V8(i,a,c,t),renderState:n()}}function V8(t,n,i,a){const c={},u=a(t,{});for(const v in u)c[v]=xd(u[v]);let{initial:d,animate:h}=t;const p=Pd(t),g=a5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const b=_?h:d;if(b&&typeof b!="boolean"&&!Id(b)){const v=Array.isArray(b)?b:[b];for(let S=0;S<v.length;S++){const C=Lp(t,v[S]);if(C){const{transitionEnd:j,transition:M,...T}=C;for(const I in T){let B=T[I];if(Array.isArray(B)){const N=_?B.length-1:0;B=B[N]}B!==null&&(c[I]=B)}for(const I in j)c[I]=j[I]}}}return c}const U5=t=>(n,i)=>{const a=y.useContext(Vd),c=y.useContext(Od),u=()=>U8(t,n,a,c);return i?u():Ac(u)},Y8=U5({scrapeMotionValuesFromProps:Wp,createRenderState:Fp}),W8=U5({scrapeMotionValuesFromProps:v5,createRenderState:H5}),F8=Symbol.for("motionComponentSymbol");function X8(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const V5=y.createContext({});function il(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function q8(t,n,i,a,c,u){var B,N;const{visualElement:d}=y.useContext(Vd),h=y.useContext(z5),p=y.useContext(Od),g=y.useContext(Hd),_=g.reducedMotion,b=g.skipAnimations,v=y.useRef(null),S=y.useRef(!1);a=a||h.renderer,!v.current&&a&&(v.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:b,isSVG:u}),S.current&&v.current&&(v.current.manuallyAnimateOnMount=!0));const C=v.current,j=y.useContext(V5);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&G8(v.current,i,c,j);const M=y.useRef(!1);y.useInsertionEffect(()=>{C&&M.current&&C.update(i,p)});const T=i[qb],I=y.useRef(!!T&&typeof window<"u"&&!((B=window.MotionHandoffIsComplete)!=null&&B.call(window,T))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,T)));return xp(()=>{S.current=!0,C&&(M.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),I.current&&C.animationState&&C.animationState.animateChanges())}),y.useEffect(()=>{C&&(!I.current&&C.animationState&&C.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)==null||P.call(window,T)}),I.current=!1),C.enteringChildren=void 0)}),C}function G8(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:b}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:Y5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&il(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:b,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function Y5(t){if(t)return t.options.allowProjection!==!1?t.projection:Y5(t.parent)}function bm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&A8(a);const u=i?i==="svg":Xp(t),d=u?W8:Y8;function h(b,v){let S;const C={...y.useContext(Hd),...b,layoutId:K8(b)},{isStatic:j}=C,M=L8(b),T=d(b,j);if(!j&&typeof window<"u"){Q8();const I=Z8(C);S=I.MeasureLayout,M.visualElement=q8(t,T,C,c,I.ProjectionNode,u)}return l.jsxs(Vd.Provider,{value:M,children:[S&&M.visualElement?l.jsx(S,{visualElement:M.visualElement,...C}):null,H8(t,b,X8(T,M.visualElement,v),T,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[F8]=t,p}function K8({layoutId:t}){const n=y.useContext(yp).id;return n&&t!==void 0?n+"-"+t:t}function Q8(t,n){y.useContext(z5).strict}function Z8(t){const n=$5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function J8(t,n){if(typeof Proxy>"u")return bm;const i=new Map,a=(u,d)=>bm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,bm(d,void 0,t,n)),i.get(d))})}const ej=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Xp(t))?new w5(n):new g5(n,{allowProjection:t!==y.Fragment})};class tj extends Ja{constructor(n){super(n),n.animationState||(n.animationState=Ok(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Id(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let nj=0;class sj extends Ja{constructor(){super(...arguments),this.id=nj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Cr(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...b}=p;for(const v in b)(u=this.node.getValue(v))==null||u.jump(b[v])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const oj={animation:{Feature:tj},exit:{Feature:sj}};function Bc(t){return{point:{x:t.pageX,y:t.pageY}}}const ij=t=>n=>Hp(n)&&t(n,Bc(n));function vc(t,n,i,a){return Mc(t,n,ij(i),a)}const W5=({current:t})=>t?t.ownerDocument.defaultView:null,dx=(t,n)=>Math.abs(t-n);function aj(t,n){const i=dx(t.x,n.x),a=dx(t.y,n.y);return Math.sqrt(i**2+a**2)}const fx=new Set(["auto","scroll"]);class F5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ad(this.lastRawMoveEventInfo,this.transformPagePoint));const S=vm(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,j=aj(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!j)return;const{point:M}=S,{timestamp:T}=jo;this.history.push({...M,timestamp:T});const{onStart:I,onMove:B}=this.handlers;C||(I&&I(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),B&&B(this.lastMoveEvent,S)},this.handlePointerMove=(S,C)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=ad(C,this.transformPagePoint),Yn.update(this.updatePoint,!0)},this.handlePointerUp=(S,C)=>{this.end();const{onEnd:j,onSessionEnd:M,resumeAnimation:T}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=vm(S.type==="pointercancel"?this.lastMoveEventInfo:ad(C,this.transformPagePoint),this.history);this.startEvent&&j&&j(S,I),M&&M(S,I)},!Hp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Bc(n),g=ad(p,this.transformPagePoint),{point:_}=g,{timestamp:b}=jo;this.history=[{..._,timestamp:b}];const{onSessionStart:v}=i;v&&v(n,vm(g,this.history)),this.removeListeners=Dc(vc(this.contextWindow,"pointermove",this.handlePointerMove),vc(this.contextWindow,"pointerup",this.handlePointerUp),vc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(fx.has(a.overflowX)||fx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),Yn.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ba(this.updatePoint)}}function ad(t,n){return n?{point:n(t.point)}:t}function hx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function vm({point:t},n){return{point:t,delta:hx(t,X5(n)),offset:hx(t,rj(n)),velocity:lj(n,.1)}}function rj(t){return t[0]}function X5(t){return t[t.length-1]}function lj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=X5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>si(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>si(n)*2&&(a=t[1]);const u=Ti(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function cj(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?ss(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?ss(i,t,a.max):Math.min(t,i)),t}function mx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function uj(t,{top:n,left:i,bottom:a,right:c}){return{x:mx(t.x,i,c),y:mx(t.y,n,a)}}function px(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function dj(t,n){return{x:px(t.x,n.x),y:px(t.y,n.y)}}function fj(t,n){let i=.5;const a=Vo(t),c=Vo(n);return c>a?i=ml(n.min,n.max-a,t.min):a>c&&(i=ml(t.min,t.max-c,n.min)),ea(0,1,i)}function hj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const rp=.35;function mj(t=rp){return t===!1?t=0:t===!0&&(t=rp),{x:_x(t,"left","right"),y:_x(t,"top","bottom")}}function _x(t,n,i){return{min:gx(t,n),max:gx(t,i)}}function gx(t,n){return typeof t=="number"?t:t[n]||0}const pj=new WeakMap;class _j{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=to(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=b=>{i&&this.snapToCursor(Bc(b).point),this.stopAnimation()},d=(b,v)=>{const{drag:S,dragPropagation:C,onDragStart:j}=this.getProps();if(S&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=F3(S),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qi(T=>{let I=this.getAxisMotionValue(T).get()||0;if(Ji.test(I)){const{projection:B}=this.visualElement;if(B&&B.layout){const N=B.layout.layoutBox[T];N&&(I=Vo(N)*(parseFloat(I)/100))}}this.originPoint[T]=I}),j&&Yn.update(()=>j(b,v),!1,!0),Zm(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},h=(b,v)=>{this.latestPointerEvent=b,this.latestPanInfo=v;const{dragPropagation:S,dragDirectionLock:C,onDirectionLock:j,onDrag:M}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:T}=v;if(C&&this.currentDirection===null){this.currentDirection=yj(T),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",v.point,T),this.updateAxis("y",v.point,T),this.visualElement.render(),M&&Yn.update(()=>M(b,v),!1,!0)},p=(b,v)=>{this.latestPointerEvent=b,this.latestPanInfo=v,this.stop(b,v),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new F5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:W5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Yn.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!rd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=cj(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&il(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=uj(a.layoutBox,n):this.constraints=!1,this.elastic=mj(i),c!==this.constraints&&!il(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Qi(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=hj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!il(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=xk(a,c.root,this.visualElement.getTransformPagePoint());let d=dj(c.layout.layoutBox,u);if(i){const h=i(_k(d));this.hasMutatedConstraints=!!h,h&&(d=d5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Qi(_=>{if(!rd(_,i,this.currentDirection))return;let b=p&&p[_]||{};(d===!0||d===_)&&(b={min:0,max:0});const v=c?200:1e6,S=c?40:1e7,C={type:"inertia",velocity:a?n[_]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...b};return this.startAxisValueAnimation(_,C)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Zm(this.visualElement,n),a.start(Bp(n,a,0,i,this.visualElement,!1))}stopAnimation(){Qi(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Qi(i=>{const{drag:a}=this.getProps();if(!rd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ss(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!il(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Qi(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=fj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Qi(d=>{if(!rd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(ss(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;pj.set(this.visualElement,this);const n=this.visualElement.current,i=vc(n,"pointerdown",g=>{const{drag:_,dragListener:b=!0}=this.getProps(),v=g.target,S=v!==n&&Z3(v);_&&b&&!S&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();il(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=gj(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Yn.read(c);const h=Mc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(Qi(b=>{const v=this.getAxisMotionValue(b);v&&(this.originPoint[b]+=g[b].translate,v.set(v.get()+g[b].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=rp,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function yx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function gj(t,n,i){const a=k1(t,yx(i)),c=k1(n,yx(i));return()=>{a(),c()}}function rd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function yj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class xj extends Ja{constructor(n){super(n),this.removeGroupControls=Ei,this.removeListeners=Ei,this.controls=new _j(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ei}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const wm=t=>(n,i)=>{t&&Yn.update(()=>t(n,i),!1,!0)};class bj extends Ja{constructor(){super(...arguments),this.removePointerDownListener=Ei}onPointerDown(n){this.session=new F5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:W5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:wm(n),onStart:wm(i),onMove:wm(a),onEnd:(u,d)=>{delete this.session,c&&Yn.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=vc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Sm=!1;class vj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Sm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),bd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Sm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||Yn.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Pp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Sm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function q5(t){const[n,i]=O5(),a=y.useContext(yp);return l.jsx(vj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(V5),isPresent:n,safeToRemove:i})}const wj={pan:{Feature:bj},drag:{Feature:xj,ProjectionNode:L5,MeasureLayout:q5}};function xx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&Yn.postRender(()=>u(n,Bc(n)))}class Sj extends Ja{mount(){const{current:n}=this.node;n&&(this.unmount=q3(n,(i,a)=>(xx(this.node,a,"Start"),c=>xx(this.node,c,"End"))))}unmount(){}}class Cj extends Ja{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dc(Mc(this.node.current,"focus",()=>this.onFocus()),Mc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function bx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&Yn.postRender(()=>u(n,Bc(n)))}class kj extends Ja{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=ek(n,(c,u)=>(bx(this.node,u,"Start"),(d,{success:h})=>bx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const lp=new WeakMap,Cm=new WeakMap,jj=t=>{const n=lp.get(t.target);n&&n(t)},Mj=t=>{t.forEach(jj)};function Tj({root:t,...n}){const i=t||document;Cm.has(i)||Cm.set(i,{});const a=Cm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(Mj,{root:t,...n})),a[c]}function Ej(t,n,i){const a=Tj(n);return lp.set(t,i),a.observe(t),()=>{lp.delete(t),a.unobserve(t)}}const Aj={some:0,all:1};class Dj extends Ja{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:Aj[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:b,onViewportLeave:v}=this.node.getProps(),S=_?b:v;S&&S(g)};this.stopObserver=Ej(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Nj(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Nj({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const Rj={inView:{Feature:Dj},tap:{Feature:kj},focus:{Feature:Cj},hover:{Feature:Sj}},Bj={layout:{ProjectionNode:L5,MeasureLayout:q5}},Lj={...oj,...Rj,...wj,...Bj},ni=J8(Lj,ej);function cp(t){const n=Ac(()=>Za(t)),{isStatic:i}=y.useContext(Hd);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function G5(t,n){const i=cp(n()),a=()=>i.set(n());return a(),xp(()=>{const c=()=>Yn.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),ba(a)}}),i}function Oj(t){xc.current=[],t();const n=G5(xc.current,t);return xc.current=void 0,n}function ld(t,n,i,a){if(typeof t=="function")return Oj(t);const u=typeof n=="function"?n:ck(n,i,a),d=Array.isArray(t)?vx(t,u):vx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function vx(t,n){const i=Ac(()=>[]);return G5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function qp(t){return typeof t=="object"&&!Array.isArray(t)}function K5(t,n,i,a){return t==null?[]:typeof t=="string"&&qp(n)?Ip(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function zj(t,n,i){return t*(n+1)}function wx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function $j(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(hl(t,c),a--)}}function Ij(t,n,i,a,c,u){$j(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:ss(c,u,a[d]),easing:gb(i,d)})}function Pj(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function Hj(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const Uj="easeInOut";function Vj(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,b=0,v=0;for(let S=0;S<t.length;S++){const C=t[S];if(typeof C=="string"){g.set(C,b);continue}else if(!Array.isArray(C)){g.set(C.name,wx(b,C.at,_,g));continue}let[j,M,T={}]=C;T.at!==void 0&&(b=wx(b,T.at,_,g));let I=0;const B=(N,P,Y,V=0,U=0)=>{const Q=Yj(N),{delay:se=0,times:oe=Rb(Q),type:be=n.type||"keyframes",repeat:Ee,repeatType:K,repeatDelay:le=0,...z}=P;let{ease:ie=n.ease||"easeOut",duration:X}=P;const me=typeof se=="function"?se(V,U):se,Te=Q.length,A=Np(be)?be:c==null?void 0:c[be||"keyframes"];if(Te<=2&&A){let je=100;if(Te===2&&Xj(Q)){const ot=Q[1]-Q[0];je=Math.abs(ot)}const Re={...n,...z};X!==void 0&&(Re.duration=si(X));const ve=Eb(Re,je,A);ie=ve.ease,X=ve.duration}X!=null||(X=u);const ee=b+me;oe.length===1&&oe[0]===0&&(oe[1]=1);const q=oe.length-Q.length;if(q>0&&Nb(oe,q),Q.length===1&&Q.unshift(null),Ee){X=zj(X,Ee);const je=[...Q],Re=[...oe];ie=Array.isArray(ie)?[...ie]:[ie];const ve=[...ie];for(let ot=0;ot<Ee;ot++){Q.push(...je);for(let Xe=0;Xe<je.length;Xe++)oe.push(Re[Xe]+(ot+1)),ie.push(Xe===0?"linear":gb(ve,Xe-1))}Pj(oe,Ee)}const ue=ee+X;Ij(Y,Q,ie,oe,ee,ue),I=Math.max(me+X,I),v=Math.max(ue,v)};if(ro(j)){const N=Sx(j,h);B(M,T,Cx("default",N))}else{const N=K5(j,M,a,p),P=N.length;for(let Y=0;Y<P;Y++){M=M,T=T;const V=N[Y],U=Sx(V,h);for(const Q in M)B(M[Q],Wj(T,Q),Cx(Q,U),Y,P)}}_=b,b+=I}return h.forEach((S,C)=>{for(const j in S){const M=S[j];M.sort(Hj);const T=[],I=[],B=[];for(let V=0;V<M.length;V++){const{at:U,value:Q,easing:se}=M[V];T.push(Q),I.push(ml(0,v,U)),B.push(se||"easeOut")}I[0]!==0&&(I.unshift(0),T.unshift(T[0]),B.unshift(Uj)),I[I.length-1]!==1&&(I.push(1),T.push(null)),d.has(C)||d.set(C,{keyframes:{},transition:{}});const N=d.get(C);N.keyframes[j]=T;const{type:P,...Y}=n;N.transition[j]={...Y,duration:v,ease:B,times:I,...i}}}),d}function Sx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Cx(t,n){return n[t]||(n[t]=[]),n[t]}function Yj(t){return Array.isArray(t)?t:[t]}function Wj(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const Fj=t=>typeof t=="number",Xj=t=>t.every(Fj);function qj(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=$d(t)&&!i5(t)?new w5(n):new g5(n);i.mount(t),kc.set(t,i)}function Gj(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new jk(n);i.mount(t),kc.set(t,i)}function Kj(t,n){return ro(t)||typeof t=="number"||typeof t=="string"&&!qp(n)}function Q5(t,n,i,a){const c=[];if(Kj(t,n))c.push(D5(t,qp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=K5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?qj:Gj;kc.has(p)||g(p);const _=kc.get(p),b={...i};"delay"in b&&typeof b.delay=="function"&&(b.delay=b.delay(h,d)),c.push(...zp(_,{...n,transition:b},{}))}}return c}function Qj(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=Za(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return Vj(c,n,i,{spring:Cc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...Q5(p,d,h))}),a}function Zj(t){return Array.isArray(t)&&t.some(Array.isArray)}function Jj(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(Zj(c)){const{onComplete:_,...b}=u||{};typeof _=="function"&&(p=_),h=Qj(c,i!==void 0?{reduceMotion:i,...b}:b,n)}else{const{onComplete:_,...b}=d||{};typeof _=="function"&&(p=_),h=Q5(c,u,i!==void 0?{reduceMotion:i,...b}:b,n)}const g=new p3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{hl(n.animations,g)})),g}return a}const kx=Jj();var eM=Object.freeze({}),tM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var v;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[S,C]of Object.entries(h))p[S]=this.normalizePreservedValue(c.values[S],C,d.get(S));this.initTransitionModes(i,"",p);for(const[S,C]of Object.entries(c.values)){if(!S.endsWith(".__mode"))continue;const j=S.slice(0,-7),M=d.get(j);(M==null?void 0:M.type)==="transition"&&(p[S]=C)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(v=this.baseValues.get(t))!=null?v:{},b={};for(const[S,C]of Object.entries(h))b[S]=this.normalizePreservedValue(_[S],C,d.get(S));for(const[S,C]of Object.entries(p))S.endsWith(".__mode")&&(b[S]=C);this.baseValues.set(t,b),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:eM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:b,step:v}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:b,step:v,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,b="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:b,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},Jt=new tM;function nM(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(Jt.registerPanel(c,t,u.current,p.current),()=>Jt.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}Jt.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>Jt.subscribeActions(c,v=>{var S;(S=h.current)==null||S.call(h,v)}),[c]);const b=y.useSyncExternalStore(v=>Jt.subscribe(c,v),()=>Jt.getValues(c),()=>Jt.getValues(c));return Z5(n,b,"")}function Z5(t,n,i){var c,u,d,h,p,g,_,b,v,S;const a={};for(const[C,j]of Object.entries(t)){if(C==="_collapsed")continue;const M=i?`${i}.${C}`:C;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[C]=(c=n[M])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[C]=(u=n[M])!=null?u:j;else if(sM(j)||oM(j))a[C]=(d=n[M])!=null?d:j;else if(iM(j))a[C]=(h=n[M])!=null?h:j;else if(aM(j)){const T=(p=j.default)!=null?p:cM(j.options);a[C]=(g=n[M])!=null?g:T}else rM(j)?a[C]=(b=(_=n[M])!=null?_:j.default)!=null?b:"#000000":lM(j)?a[C]=(S=(v=n[M])!=null?v:j.default)!=null?S:"":typeof j=="object"&&j!==null&&(a[C]=Z5(j,n,M))}return a}function xl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function sM(t){return xl(t,"spring")}function oM(t){return xl(t,"easing")}function iM(t){return xl(t,"action")}function aM(t){return xl(t,"select")&&"options"in t&&Array.isArray(t.options)}function rM(t){return xl(t,"color")}function lM(t){return xl(t,"text")}function cM(t){const n=t[0];return typeof n=="string"?n:n.value}function up(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function vd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(up(n)))}function dc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function fc(t,n,i,a,c){var g,_;const u=Jt.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));Jt.updateValue(t,n,vd(p,a))}function uM(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function cd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function km(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function J5(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=J5(i.children,n);if(a)return a}}return null}var ud=4;function dM(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function fM(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=dM(n);return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function hM(t){return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function e2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var t2=y.createContext({activePanelId:null,activePath:null});function mM({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const b=Jt.getPanels();for(const v of b)for(const[S,C]of Object.entries(v.shortcuts)){if(!C.key||C.key.toLowerCase()!==_||((g=C.interaction)!=null?g:"scroll")!==p)continue;const j=J5(v.controls,S);if(j&&j.type==="slider")return{panelId:v.id,path:S,control:j,shortcut:C}}}return null},[]);return y.useEffect(()=>{const p=j=>{if(cd())return;const M=j.key.toLowerCase();if((M==="arrowleft"||M==="arrowright"||M==="arrowup"||M==="arrowdown")&&a.current.size>0){const N=h("scroll")||h("drag")||h("move");if(N&&N.control.type==="slider"){j.preventDefault();const P=M==="arrowright"||M==="arrowup"?1:-1,Y=dc(N.control,N.shortcut);fc(N.panelId,N.path,N.control,Y,P);return}}const T=a.current.has(M);a.current.add(M);const I=km(j),B=Jt.resolveShortcutTarget(M,I);if(B&&(i({activePanelId:B.panelId,activePath:B.path}),!T&&B.control.type==="toggle")){const N=Jt.getValue(B.panelId,B.path);Jt.updateValue(B.panelId,B.path,!N)}T||(u.current=null,d.current=0)},g=j=>{const M=j.key.toLowerCase();if(a.current.delete(M),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let T=!1;for(const I of a.current){const B=km(j),N=Jt.resolveShortcutTarget(I,B);if(N){i({activePanelId:N.panelId,activePath:N.path}),T=!0;break}}T||i({activePanelId:null,activePath:null})}},_=j=>{var I,B;if(cd())return;const M=km(j);if(a.current.size>0)for(const N of a.current){const P=Jt.resolveShortcutTarget(N,M);if(!P)continue;const{panelId:Y,path:V,control:U}=P;if(((B=(I=U.shortcut)==null?void 0:I.interaction)!=null?B:"scroll")!=="scroll"||U.type!=="slider")continue;j.preventDefault();const se=dc(U,U.shortcut),oe=j.deltaY>0?-1:1;fc(Y,V,U,se,oe);return}const T=Jt.resolveScrollOnlyTargets();for(const{panelId:N,path:P,control:Y,shortcut:V}of T){if(Y.type!=="slider")continue;j.preventDefault();const U=dc(Y,V),Q=j.deltaY>0?-1:1;fc(N,P,Y,U,Q);return}},b=j=>{if(cd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},v=()=>{c.current=!1,u.current=null,d.current=0},S=j=>{if(cd()||a.current.size===0)return;if(c.current){const T=h("drag");if(T&&u.current!==null){const I=j.clientX-u.current;u.current=j.clientX,d.current+=I;const B=dc(T.control,T.shortcut),N=Math.trunc(d.current/ud);N!==0&&(d.current-=N*ud,fc(T.panelId,T.path,T.control,B,N))}return}const M=h("move");if(M){if(u.current===null){u.current=j.clientX;return}const T=j.clientX-u.current;u.current=j.clientX,d.current+=T;const I=dc(M.control,M.shortcut),B=Math.trunc(d.current/ud);B!==0&&(d.current-=B*ud,fc(M.panelId,M.path,M.control,I,B))}},C=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",b),window.addEventListener("mouseup",v),window.addEventListener("mousemove",S),window.addEventListener("blur",C),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",b),window.removeEventListener("mouseup",v),window.removeEventListener("mousemove",S),window.removeEventListener("blur",C)}},[h]),l.jsx(t2.Provider,{value:n,children:t})}var Gp="M6 9.5L12 15.5L18 9.5",pM="M5 12.75L10 19L19 5",jm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},_M=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],gM=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],jx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Ld({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),b=y.useRef(null),[v,S]=y.useState(void 0),[C,j]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const I=()=>j(window.innerHeight);return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[a]),y.useEffect(()=>{const I=b.current;if(!I)return;const B=new ResizeObserver(()=>{if(h){const N=I.offsetHeight;S(P=>P===N?P:N)}});return B.observe(I),()=>B.disconnect()},[h]);const M=()=>{if(c&&a)return;const I=!h;p(I),_(!I),u==null||u(I)},T=l.jsxs("div",{ref:a?b:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:M,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:jx.path,fill:"currentColor"}),jx.circles.map((I,B)=>l.jsx("circle",{cx:I.cx,cy:I.cy,r:I.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},B))]}),!a&&l.jsx(ni.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Gp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:I=>I.stopPropagation(),children:d})]}),l.jsx(Ud,{initial:!1,children:h&&l.jsx(ni.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:T});const I=h?{width:280,height:v!==void 0?Math.min(v+10,C-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ni.div,{className:"dialkit-panel-inner",style:I,onClick:h?void 0:M,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:T})}return T}var yM=3,xM=32,bM=200,vM=8;function Bo({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var Ze;const g=y.useRef(null),_=y.useRef(null),b=y.useRef(null),v=y.useRef(null),S=y.useRef(null),[C,j]=y.useState(!1),[M,T]=y.useState(!1),[I,B]=y.useState(!1),[N,P]=y.useState(!1),[Y,V]=y.useState(!1),[U,Q]=y.useState(!1),[se,oe]=y.useState(""),be=y.useRef(null),Ee=y.useRef(null),K=y.useRef(!0),le=y.useRef(null),z=y.useRef(null),ie=y.useRef(1),X=(n-a)/(c-a)*100,me=C||I,Te=cp(X),A=ld(Te,H=>`${H}%`),ee=ld(Te,H=>`max(5px, calc(${H}% - 9px))`),q=cp(0),ue=ld(q,H=>`calc(100% + ${Math.abs(H)}px)`),je=ld(q,H=>H<0?H:0);y.useEffect(()=>{!C&&!le.current&&Te.jump(X)},[X,C,Te]);const Re=y.useCallback(H=>{const Z=z.current;if(!Z)return n;const _e=(H-Z.left)/ie.current,Fe=g.current?g.current.offsetWidth:Z.width,Ue=Math.max(0,Math.min(1,_e/Fe)),De=a+Ue*(c-a);return Math.max(a,Math.min(c,De))},[a,c,n]),ve=y.useCallback(H=>(H-a)/(c-a)*100,[a,c]),ot=y.useCallback((H,Z)=>{const te=z.current;if(!te)return 0;const _e=Z<0?te.left-H:H-te.right,Fe=Math.max(0,_e-xM);return Z*vM*Math.sqrt(Math.min(Fe/bM,1))},[]),Xe=y.useCallback(H=>{if(!U&&(H.preventDefault(),H.target.setPointerCapture(H.pointerId),Ee.current={x:H.clientX,y:H.clientY},K.current=!0,j(!0),g.current)){z.current=g.current.getBoundingClientRect();const Z=g.current.offsetWidth;ie.current=z.current.width/Z}},[U]),$e=y.useCallback(H=>{if(!C||!Ee.current)return;const Z=H.clientX-Ee.current.x,te=H.clientY-Ee.current.y,_e=Math.sqrt(Z*Z+te*te);if(K.current&&_e>yM&&(K.current=!1,T(!0)),!K.current){const Fe=z.current;Fe&&(H.clientX<Fe.left?q.jump(ot(H.clientX,-1)):H.clientX>Fe.right?q.jump(ot(H.clientX,1)):q.jump(0));const Ue=Re(H.clientX),De=ve(Ue);le.current&&(le.current.stop(),le.current=null),Te.jump(De),i(vd(Ue,u))}},[C,Re,ve,i,Te,q,ot]),lt=y.useCallback(H=>{if(C){if(K.current){const Z=Re(H.clientX),_e=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((Z-a)/u)*u)):uM(Z,a,c),Fe=ve(_e);le.current&&le.current.stop(),le.current=kx(Te,Fe,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{le.current=null}}),i(vd(_e,u))}q.get()!==0&&kx(q,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),T(!1),Ee.current=null}},[C,Re,ve,i,a,c,Te,q]);y.useEffect(()=>(N&&!U&&!Y?be.current=setTimeout(()=>{V(!0)},800):!N&&!U&&(be.current&&(clearTimeout(be.current),be.current=null),V(!1)),()=>{be.current&&clearTimeout(be.current)}),[N,U,Y]),y.useEffect(()=>{U&&b.current&&(b.current.focus(),b.current.select())},[U]);const nt=H=>{oe(H.target.value)},zt=()=>{const H=parseFloat(se);if(!isNaN(H)){const Z=Math.max(a,Math.min(c,H));i(vd(Z,u))}Q(!1),P(!1),V(!1)},ct=H=>{Y&&(H.stopPropagation(),H.preventDefault(),Q(!0),oe(n.toFixed(up(u))))},Rt=H=>{H.key==="Enter"?zt():H.key==="Escape"&&(Q(!1),P(!1))},Oe=()=>{zt()},dt=n.toFixed(up(u)),ce=8,He=10,Ge=10;let ze=30,Mt=78;const ft=(Ze=g.current)==null?void 0:Ze.offsetWidth;ft&&ft>0&&(v.current&&(ze=(He+v.current.offsetWidth+ce)/ft*100),S.current&&(Mt=(ft-Ge-S.current.offsetWidth-ce)/ft*100));const rt=X<ze||X>Mt,it=me?rt?.1:M?.9:.5:0,at=(c-a)/u,Et=at<=10?Array.from({length:at-1},(H,Z)=>{const te=(Z+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${te}%`}},Z)}):Array.from({length:9},(H,Z)=>{const te=(Z+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${te}%`}},Z)});return l.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:l.jsxs(ni.div,{ref:_,className:`dialkit-slider ${me?"dialkit-slider-active":""}`,onPointerDown:Xe,onPointerMove:$e,onPointerUp:lt,onMouseEnter:()=>B(!0),onMouseLeave:()=>B(!1),style:{width:ue,x:je},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Et}),l.jsx(ni.div,{className:"dialkit-slider-fill",style:{width:A}}),l.jsx(ni.div,{className:"dialkit-slider-handle",style:{left:ee,y:"-50%"},animate:{opacity:it,scaleX:me?1:.25,scaleY:me&&rt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:v,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:fM(h)})]}),U?l.jsx("input",{ref:b,type:"text",className:"dialkit-slider-input",value:se,onChange:nt,onKeyDown:Rt,onBlur:Oe,onClick:H=>H.stopPropagation(),onMouseDown:H=>H.stopPropagation()}):l.jsx("span",{ref:S,className:`dialkit-slider-value ${Y?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),onClick:ct,onMouseDown:H=>Y&&H.stopPropagation(),style:{cursor:Y?"text":"default"},children:dt})]})})}function Kp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return l.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function wM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:hM(a)})]}),l.jsx(Kp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function SM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const b=_*d;c.push([b,h]);const v=-t*(h-g),S=-n*p,C=(v+S)/i;p+=C*d,h+=p*d}return c}function n2({spring:t,isSimpleMode:n}){var j,M,T,I,B;let c,u,d;if(n){const N=(j=t.visualDuration)!=null?j:.3,P=(M=t.bounce)!=null?M:.2;d=1,c=2*Math.PI/N,c=Math.pow(c,2),u=2*(1-P)*Math.sqrt(c*d)}else c=(T=t.stiffness)!=null?T:400,u=(I=t.damping)!=null?I:17,d=(B=t.mass)!=null?B:1;const h=2,p=SM(c,u,d,h),g=p.map(([,N])=>N),_=Math.min(...g),v=Math.max(...g)-_,S=p.map(([N,P],Y)=>{const V=N/h*256,Q=140-((P-_)/(v||1)*140*.6+140*.2);return`${Y===0?"M":"L"} ${V} ${Q}`}).join(" "),C=[];for(let N=1;N<4;N++){const P=64*N,Y=140/4*N;C.push(l.jsx("line",{x1:P,y1:0,x2:P,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${N}`),l.jsx("line",{x1:0,y1:Y,x2:256,y2:Y,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${N}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[C,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:S,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function CM({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,b,v,S,C;const u=y.useSyncExternalStore(j=>Jt.subscribe(t,j),()=>Jt.getSpringMode(t,n),()=>Jt.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{Jt.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},g=(j,M)=>{if(d){const{stiffness:T,damping:I,mass:B,...N}=a;c({...N,[j]:M})}else{const{visualDuration:T,bounce:I,...B}=a;c({...B,[j]:M})}};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(n2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:j=>g("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Bo,{label:"Bounce",value:(b=a.bounce)!=null?b:.2,onChange:j=>g("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"Stiffness",value:(v=a.stiffness)!=null?v:400,onChange:j=>g("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Bo,{label:"Damping",value:(S=a.damping)!=null?S:17,onChange:j=>g("damping",j),min:1,max:100,step:1}),l.jsx(Bo,{label:"Mass",value:(C=a.mass)!=null?C:1,onChange:j=>g("mass",j),min:.1,max:10,step:.1})]})]})})}function kM({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(v,S)=>({x:a+(v+.5)*u,y:a+(1.5-S)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),b=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:b,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function jM({panelId:t,path:n,label:i,value:a,onChange:c}){var C,j,M,T,I;const u=y.useSyncExternalStore(B=>Jt.subscribe(t,B),()=>Jt.getTransitionMode(t,n),()=>Jt.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,b=B=>{Jt.updateTransitionMode(t,n,B),c(B==="easing"?p.current.easing:B==="simple"?p.current.simple:p.current.advanced)},v=(B,N)=>{if(h){const{stiffness:P,damping:Y,mass:V,...U}=g;c({...U,[B]:N})}else{const{visualDuration:P,bounce:Y,...V}=g;c({...V,[B]:N})}},S=(B,N)=>{const P=[..._.ease];P[B]=N,c({..._,ease:P})};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(kM,{easing:_}):l.jsx(n2,{spring:g,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:b})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"x1",value:_.ease[0],onChange:B=>S(0,B),min:0,max:1,step:.01}),l.jsx(Bo,{label:"y1",value:_.ease[1],onChange:B=>S(1,B),min:-1,max:2,step:.01}),l.jsx(Bo,{label:"x2",value:_.ease[2],onChange:B=>S(2,B),min:0,max:1,step:.01}),l.jsx(Bo,{label:"y2",value:_.ease[3],onChange:B=>S(3,B),min:-1,max:2,step:.01}),l.jsx(Bo,{label:"Duration",value:_.duration,onChange:B=>c({..._,duration:B}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(TM,{ease:_.ease,onChange:B=>c({..._,ease:B})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"Duration",value:(C=g.visualDuration)!=null?C:.3,onChange:B=>v("visualDuration",B),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Bo,{label:"Bounce",value:(j=g.bounce)!=null?j:.2,onChange:B=>v("bounce",B),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"Stiffness",value:(M=g.stiffness)!=null?M:400,onChange:B=>v("stiffness",B),min:1,max:1e3,step:10}),l.jsx(Bo,{label:"Damping",value:(T=g.damping)!=null?T:17,onChange:B=>v("damping",B),min:1,max:100,step:1}),l.jsx(Bo,{label:"Mass",value:(I=g.mass)!=null?I:1,onChange:B=>v("mass",B),min:.1,max:10,step:.1})]})]})})}function Mx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function MM(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function TM({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(Mx(t)),a(!0)},h=()=>{const g=MM(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Mx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function EM({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function AM(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function DM(t){return t.map(n=>typeof n=="string"?{value:n,label:AM(n)}:n)}function NM({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,b]=y.useState(null),v=DM(i),S=v.find(M=>M.value===n),C=y.useCallback(()=>{const M=d.current;if(!M)return;const T=M.getBoundingClientRect(),I=8+v.length*36,B=window.innerHeight-T.bottom-4,N=B<I&&T.top>B;b({top:N?T.top-4:T.bottom+4,left:T.left,width:T.width,above:N})},[v.length]);return y.useEffect(()=>{var T;const M=(T=d.current)==null?void 0:T.closest(".dialkit-root");g(M!=null?M:document.body)},[]),y.useEffect(()=>{c&&C()},[c,C]),y.useEffect(()=>{if(!c)return;const M=T=>{const I=T.target;d.current&&!d.current.contains(I)&&h.current&&!h.current.contains(I)&&u(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=S==null?void 0:S.label)!=null?j:n}),l.jsx(ni.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Gp})})]})]}),p&&Ec.createPortal(l.jsx(Ud,{children:c&&_&&l.jsx(ni.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:v.map(M=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(M.value===n),onClick:()=>{a(M.value),u(!1)},children:M.label},M.value))})}),p)]})}var RM=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function BM({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),RM.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?LM(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function LM(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function OM({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,b=n.find(T=>T.id===i),v=y.useCallback(()=>{var I;if(!_)return;const T=(I=d.current)==null?void 0:I.getBoundingClientRect();T&&g({top:T.bottom+4,left:T.left,width:T.width}),u(!0)},[_]),S=y.useCallback(()=>u(!1),[]),C=y.useCallback(()=>{c?S():v()},[c,v,S]);y.useEffect(()=>{if(!c)return;const T=I=>{var N,P;const B=I.target;(N=d.current)!=null&&N.contains(B)||(P=h.current)!=null&&P.contains(B)||S()};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c,S]);const j=T=>{T?Jt.loadPreset(t,T):Jt.clearActivePreset(t),S()},M=(T,I)=>{T.stopPropagation(),Jt.deletePreset(t,I)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:C,"data-open":String(c),"data-has-preset":String(!!b),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:b?b.name:"Version 1"}),l.jsx(ni.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Gp})})]}),Ec.createPortal(l.jsx(Ud,{children:c&&l.jsxs(ni.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(T=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(T.id===i),onClick:()=>j(T.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:T.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:I=>M(I,T.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:gM.map((I,B)=>l.jsx("path",{d:I},B))})})]},T.id))]})}),document.body)]})}function zM({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(t2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(M=>Jt.subscribe(t.id,M),()=>Jt.getValues(t.id),()=>Jt.getValues(t.id)),g=Jt.getPresets(t.id),_=Jt.getActivePresetId(t.id),b=()=>{const M=g.length+2;Jt.savePreset(t.id,`Version ${M}`)},v=()=>{const M=JSON.stringify(p,null,2),T=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${M}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(T),c(!0),setTimeout(()=>c(!1),1500)},S=M=>{var I,B,N;const T=p[M.path];switch(M.type){case"slider":return l.jsx(Bo,{label:M.label,value:T,onChange:P=>Jt.updateValue(t.id,M.path,P),min:M.min,max:M.max,step:M.step,shortcut:M.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===M.path},M.path);case"toggle":return l.jsx(wM,{label:M.label,checked:T,onChange:P=>Jt.updateValue(t.id,M.path,P),shortcut:M.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===M.path},M.path);case"spring":return l.jsx(CM,{panelId:t.id,path:M.path,label:M.label,spring:T,onChange:P=>Jt.updateValue(t.id,M.path,P)},M.path);case"transition":return l.jsx(jM,{panelId:t.id,path:M.path,label:M.label,value:T,onChange:P=>Jt.updateValue(t.id,M.path,P)},M.path);case"folder":return l.jsx(Ld,{title:M.label,defaultOpen:(I=M.defaultOpen)!=null?I:!0,children:(B=M.children)==null?void 0:B.map(S)},M.path);case"text":return l.jsx(EM,{label:M.label,value:T,onChange:P=>Jt.updateValue(t.id,M.path,P),placeholder:M.placeholder},M.path);case"select":return l.jsx(NM,{label:M.label,value:T,options:(N=M.options)!=null?N:[],onChange:P=>Jt.updateValue(t.id,M.path,P)},M.path);case"color":return l.jsx(BM,{label:M.label,value:T,onChange:P=>Jt.updateValue(t.id,M.path,P)},M.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>Jt.triggerAction(t.id,M.path),children:M.label},M.path);default:return null}},C=()=>t.controls.map(S),j=l.jsxs(l.Fragment,{children:[l.jsx(ni.button,{className:"dialkit-toolbar-add",onClick:b,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:_M.map((M,T)=>l.jsx("path",{d:M},T))})}),l.jsx(OM,{panelId:t.id,presets:g,activePresetId:_,onAdd:b}),l.jsx(ni.button,{className:"dialkit-toolbar-add",onClick:v,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Ud,{initial:!1,mode:"wait",children:a?l.jsx(ni.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:pM})},"check"):l.jsxs(ni.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:jm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:jm.sparkle,fill:"currentColor"}),l.jsx("path",{d:jm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Ld,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:C()})})}var $M=typeof process<"u"?!1:!(typeof import.meta<"u");function IM({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=$M}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[b,v]=y.useState(null),[S,C]=y.useState(t),j=y.useRef(null),M=y.useRef(!1),T=y.useRef(null),I=y.useRef(!1);y.useEffect(()=>(p(!0),d(Jt.getPanels()),Jt.subscribeGlobal(()=>{d(Jt.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const U=new MutationObserver(()=>{var oe;const Q=(oe=_.current)==null?void 0:oe.querySelector(".dialkit-panel-inner");if(!Q)return;if(Q.getAttribute("data-collapsed")==="true")j.current&&v(j.current);else{if(b){j.current=b;const be=b.x+21,Ee=window.innerWidth/2;C(be<Ee?"top-left":"top-right")}else C(t);v(null)}});return U.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>U.disconnect()},[g,b,t]);const B=y.useCallback(U=>{var oe;const Q=(oe=_.current)==null?void 0:oe.querySelector(".dialkit-panel-inner");if(!Q||Q.getAttribute("data-collapsed")!=="true")return;const se=_.current.getBoundingClientRect();T.current={pointerX:U.clientX,pointerY:U.clientY,elX:se.left,elY:se.top},I.current=!1,M.current=!0,U.target.setPointerCapture(U.pointerId)},[]),N=y.useCallback(U=>{if(!M.current||!T.current)return;const Q=U.clientX-T.current.pointerX,se=U.clientY-T.current.pointerY;!I.current&&Math.abs(Q)+Math.abs(se)<4||(I.current=!0,v({x:T.current.elX+Q,y:T.current.elY+se}))},[]),P=y.useCallback(U=>{var Q;if(M.current&&(M.current=!1,T.current=null,I.current)){U.stopPropagation();const se=(Q=_.current)==null?void 0:Q.querySelector(".dialkit-panel-inner");if(se){const oe=be=>{be.stopPropagation()};se.addEventListener("click",oe,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const Y=b?{top:b.y,left:b.x,right:"auto",bottom:"auto"}:void 0,V=l.jsx(mM,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||b?void 0:S,"data-mode":i,style:Y,onPointerDown:g?void 0:B,onPointerMove:g?void 0:N,onPointerUp:g?void 0:P,children:u.map(U=>l.jsx(zM,{panel:U,defaultOpen:g||n,inline:g},U.id))})})});return g?V:Ec.createPortal(V,document.body)}const PM=()=>(nM("Git Visualizer",{preview:[1,0,1]}),null),HM=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(PM,{}),l.jsx(IM,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(U6,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Ev.createRoot(document.getElementById("root")).render(l.jsx(HM,{children:l.jsx(kw,{})}));

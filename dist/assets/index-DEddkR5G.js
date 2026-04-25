(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oh={exports:{}},sc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function Ev(){if(J0)return sc;J0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return sc.Fragment=n,sc.jsx=i,sc.jsxs=i,sc}var ey;function Av(){return ey||(ey=1,Oh.exports=Ev()),Oh.exports}var l=Av(),zh={exports:{}},oc={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function Dv(){return ty||(ty=1,(function(t){function n(I,ne){var F=I.length;I.push(ne);e:for(;0<F;){var K=F-1>>>1,ge=I[K];if(0<c(ge,ne))I[K]=ne,I[F]=ge,F=K;else break e}}function i(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var ne=I[0],F=I.pop();if(F!==ne){I[0]=F;e:for(var K=0,ge=I.length,B=ge>>>1;K<B;){var ae=2*(K+1)-1,re=I[ae],de=ae+1,Ee=I[de];if(0>c(re,F))de<ge&&0>c(Ee,re)?(I[K]=Ee,I[de]=F,K=de):(I[K]=re,I[ae]=F,K=ae);else if(de<ge&&0>c(Ee,F))I[K]=Ee,I[de]=F,K=de;else break e}}return ne}function c(I,ne){var F=I.sortIndex-ne.sortIndex;return F!==0?F:I.id-ne.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],_=[],g=1,x=null,b=3,w=!1,S=!1,j=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var ne=i(_);ne!==null;){if(ne.callback===null)a(_);else if(ne.startTime<=I)a(_),ne.sortIndex=ne.expirationTime,n(p,ne);else break;ne=i(_)}}function W(I){if(j=!1,D(I),!S)if(i(p)!==null)S=!0,U||(U=!0,ke());else{var ne=i(_);ne!==null&&ue(W,ne.startTime-I)}}var U=!1,X=-1,V=5,J=-1;function le(){return k?!0:!(t.unstable_now()-J<V)}function ie(){if(k=!1,U){var I=t.unstable_now();J=I;var ne=!0;try{e:{S=!1,j&&(j=!1,z(X),X=-1),w=!0;var F=b;try{t:{for(D(I),x=i(p);x!==null&&!(x.expirationTime>I&&le());){var K=x.callback;if(typeof K=="function"){x.callback=null,b=x.priorityLevel;var ge=K(x.expirationTime<=I);if(I=t.unstable_now(),typeof ge=="function"){x.callback=ge,D(I),ne=!0;break t}x===i(p)&&a(p),D(I)}else a(p);x=i(p)}if(x!==null)ne=!0;else{var B=i(_);B!==null&&ue(W,B.startTime-I),ne=!1}}break e}finally{x=null,b=F,w=!1}ne=void 0}}finally{ne?ke():U=!1}}}var ke;if(typeof L=="function")ke=function(){L(ie)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Z=$e.port2;$e.port1.onmessage=ie,ke=function(){Z.postMessage(null)}}else ke=function(){M(ie,0)};function ue(I,ne){X=M(function(){I(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(I){switch(b){case 1:case 2:case 3:var ne=3;break;default:ne=b}var F=b;b=ne;try{return I()}finally{b=F}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(I,ne){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=b;b=I;try{return ne()}finally{b=F}},t.unstable_scheduleCallback=function(I,ne,F){var K=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?K+F:K):F=K,I){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=F+ge,I={id:g++,callback:ne,priorityLevel:I,startTime:F,expirationTime:ge,sortIndex:-1},F>K?(I.sortIndex=F,n(_,I),i(p)===null&&I===i(_)&&(j?(z(X),X=-1):j=!0,ue(W,F-K))):(I.sortIndex=ge,n(p,I),S||w||(S=!0,U||(U=!0,ke()))),I},t.unstable_shouldYield=le,t.unstable_wrapCallback=function(I){var ne=b;return function(){var F=b;b=ne;try{return I.apply(this,arguments)}finally{b=F}}}})(Ih)),Ih}var ny;function Nv(){return ny||(ny=1,$h.exports=Dv()),$h.exports}var Ph={exports:{}},Zt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function Rv(){if(sy)return Zt;sy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(B){return B===null||typeof B!="object"?null:(B=b&&B[b]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function M(B,ae,re){this.props=B,this.context=ae,this.refs=k,this.updater=re||S}M.prototype.isReactComponent={},M.prototype.setState=function(B,ae){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ae,"setState")},M.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function z(){}z.prototype=M.prototype;function L(B,ae,re){this.props=B,this.context=ae,this.refs=k,this.updater=re||S}var D=L.prototype=new z;D.constructor=L,j(D,M.prototype),D.isPureReactComponent=!0;var W=Array.isArray;function U(){}var X={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function J(B,ae,re){var de=re.ref;return{$$typeof:t,type:B,key:ae,ref:de!==void 0?de:null,props:re}}function le(B,ae){return J(B.type,ae,B.props)}function ie(B){return typeof B=="object"&&B!==null&&B.$$typeof===t}function ke(B){var ae={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(re){return ae[re]})}var $e=/\/+/g;function Z(B,ae){return typeof B=="object"&&B!==null&&B.key!=null?ke(""+B.key):ae.toString(36)}function ue(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(U,U):(B.status="pending",B.then(function(ae){B.status==="pending"&&(B.status="fulfilled",B.value=ae)},function(ae){B.status==="pending"&&(B.status="rejected",B.reason=ae)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function I(B,ae,re,de,Ee){var Oe=typeof B;(Oe==="undefined"||Oe==="boolean")&&(B=null);var Ae=!1;if(B===null)Ae=!0;else switch(Oe){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(B.$$typeof){case t:case n:Ae=!0;break;case g:return Ae=B._init,I(Ae(B._payload),ae,re,de,Ee)}}if(Ae)return Ee=Ee(B),Ae=de===""?"."+Z(B,0):de,W(Ee)?(re="",Ae!=null&&(re=Ae.replace($e,"$&/")+"/"),I(Ee,ae,re,"",function(zt){return zt})):Ee!=null&&(ie(Ee)&&(Ee=le(Ee,re+(Ee.key==null||B&&B.key===Ee.key?"":(""+Ee.key).replace($e,"$&/")+"/")+Ae)),ae.push(Ee)),1;Ae=0;var et=de===""?".":de+":";if(W(B))for(var ft=0;ft<B.length;ft++)de=B[ft],Oe=et+Z(de,ft),Ae+=I(de,ae,re,Oe,Ee);else if(ft=w(B),typeof ft=="function")for(B=ft.call(B),ft=0;!(de=B.next()).done;)de=de.value,Oe=et+Z(de,ft++),Ae+=I(de,ae,re,Oe,Ee);else if(Oe==="object"){if(typeof B.then=="function")return I(ue(B),ae,re,de,Ee);throw ae=String(B),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function ne(B,ae,re){if(B==null)return B;var de=[],Ee=0;return I(B,de,"","",function(Oe){return ae.call(re,Oe,Ee++)}),de}function F(B){if(B._status===-1){var ae=B._result;ae=ae(),ae.then(function(re){(B._status===0||B._status===-1)&&(B._status=1,B._result=re)},function(re){(B._status===0||B._status===-1)&&(B._status=2,B._result=re)}),B._status===-1&&(B._status=0,B._result=ae)}if(B._status===1)return B._result.default;throw B._result}var K=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},ge={map:ne,forEach:function(B,ae,re){ne(B,function(){ae.apply(this,arguments)},re)},count:function(B){var ae=0;return ne(B,function(){ae++}),ae},toArray:function(B){return ne(B,function(ae){return ae})||[]},only:function(B){if(!ie(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return Zt.Activity=x,Zt.Children=ge,Zt.Component=M,Zt.Fragment=i,Zt.Profiler=c,Zt.PureComponent=L,Zt.StrictMode=a,Zt.Suspense=p,Zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,Zt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return X.H.useMemoCache(B)}},Zt.cache=function(B){return function(){return B.apply(null,arguments)}},Zt.cacheSignal=function(){return null},Zt.cloneElement=function(B,ae,re){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var de=j({},B.props),Ee=B.key;if(ae!=null)for(Oe in ae.key!==void 0&&(Ee=""+ae.key),ae)!V.call(ae,Oe)||Oe==="key"||Oe==="__self"||Oe==="__source"||Oe==="ref"&&ae.ref===void 0||(de[Oe]=ae[Oe]);var Oe=arguments.length-2;if(Oe===1)de.children=re;else if(1<Oe){for(var Ae=Array(Oe),et=0;et<Oe;et++)Ae[et]=arguments[et+2];de.children=Ae}return J(B.type,Ee,de)},Zt.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:u,_context:B},B},Zt.createElement=function(B,ae,re){var de,Ee={},Oe=null;if(ae!=null)for(de in ae.key!==void 0&&(Oe=""+ae.key),ae)V.call(ae,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(Ee[de]=ae[de]);var Ae=arguments.length-2;if(Ae===1)Ee.children=re;else if(1<Ae){for(var et=Array(Ae),ft=0;ft<Ae;ft++)et[ft]=arguments[ft+2];Ee.children=et}if(B&&B.defaultProps)for(de in Ae=B.defaultProps,Ae)Ee[de]===void 0&&(Ee[de]=Ae[de]);return J(B,Oe,Ee)},Zt.createRef=function(){return{current:null}},Zt.forwardRef=function(B){return{$$typeof:h,render:B}},Zt.isValidElement=ie,Zt.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:F}},Zt.memo=function(B,ae){return{$$typeof:_,type:B,compare:ae===void 0?null:ae}},Zt.startTransition=function(B){var ae=X.T,re={};X.T=re;try{var de=B(),Ee=X.S;Ee!==null&&Ee(re,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(U,K)}catch(Oe){K(Oe)}finally{ae!==null&&re.types!==null&&(ae.types=re.types),X.T=ae}},Zt.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},Zt.use=function(B){return X.H.use(B)},Zt.useActionState=function(B,ae,re){return X.H.useActionState(B,ae,re)},Zt.useCallback=function(B,ae){return X.H.useCallback(B,ae)},Zt.useContext=function(B){return X.H.useContext(B)},Zt.useDebugValue=function(){},Zt.useDeferredValue=function(B,ae){return X.H.useDeferredValue(B,ae)},Zt.useEffect=function(B,ae){return X.H.useEffect(B,ae)},Zt.useEffectEvent=function(B){return X.H.useEffectEvent(B)},Zt.useId=function(){return X.H.useId()},Zt.useImperativeHandle=function(B,ae,re){return X.H.useImperativeHandle(B,ae,re)},Zt.useInsertionEffect=function(B,ae){return X.H.useInsertionEffect(B,ae)},Zt.useLayoutEffect=function(B,ae){return X.H.useLayoutEffect(B,ae)},Zt.useMemo=function(B,ae){return X.H.useMemo(B,ae)},Zt.useOptimistic=function(B,ae){return X.H.useOptimistic(B,ae)},Zt.useReducer=function(B,ae,re){return X.H.useReducer(B,ae,re)},Zt.useRef=function(B){return X.H.useRef(B)},Zt.useState=function(B){return X.H.useState(B)},Zt.useSyncExternalStore=function(B,ae,re){return X.H.useSyncExternalStore(B,ae,re)},Zt.useTransition=function(){return X.H.useTransition()},Zt.version="19.2.4",Zt}var oy;function cp(){return oy||(oy=1,Ph.exports=Rv()),Ph.exports}var Hh={exports:{}},Io={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function Bv(){if(iy)return Io;iy=1;var t=cp();function n(p){var _="https://react.dev/errors/"+p;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)_+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,_,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:_,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,_){if(p==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Io.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Io.createPortal=function(p,_){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(n(299));return u(p,_,null,g)},Io.flushSync=function(p){var _=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=_,a.p=g,a.d.f()}},Io.preconnect=function(p,_){typeof p=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,a.d.C(p,_))},Io.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Io.preinit=function(p,_){if(typeof p=="string"&&_&&typeof _.as=="string"){var g=_.as,x=h(g,_.crossOrigin),b=typeof _.integrity=="string"?_.integrity:void 0,w=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;g==="style"?a.d.S(p,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Io.preinitModule=function(p,_){if(typeof p=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var g=h(_.as,_.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&a.d.M(p)},Io.preload=function(p,_){if(typeof p=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var g=_.as,x=h(g,_.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Io.preloadModule=function(p,_){if(typeof p=="string")if(_){var g=h(_.as,_.crossOrigin);a.d.m(p,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else a.d.m(p)},Io.requestFormReset=function(p){a.d.r(p)},Io.unstable_batchedUpdates=function(p,_){return p(_)},Io.useFormState=function(p,_,g){return d.H.useFormState(p,_,g)},Io.useFormStatus=function(){return d.H.useHostTransitionStatus()},Io.version="19.2.4",Io}var ay;function Bx(){if(ay)return Hh.exports;ay=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=Bv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function Lv(){if(ry)return oc;ry=1;var t=Nv(),n=cp(),i=Bx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function _(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case W:return"Suspense";case U:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case D:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return s=e.displayName||null,s!==null?s:Z(e.type)||"Memo";case V:s=e._payload,e=e._init;try{return Z(e(s))}catch{}}return null}var ue=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},K=[],ge=-1;function B(e){return{current:e}}function ae(e){0>ge||(e.current=K[ge],K[ge]=null,ge--)}function re(e,s){ge++,K[ge]=e.current,e.current=s}var de=B(null),Ee=B(null),Oe=B(null),Ae=B(null);function et(e,s){switch(re(Oe,s),re(Ee,e),re(de,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?w0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=w0(s),e=S0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(de),re(de,e)}function ft(){ae(de),ae(Ee),ae(Oe)}function zt(e){e.memoizedState!==null&&re(Ae,e);var s=de.current,o=S0(s,e.type);s!==o&&(re(Ee,e),re(de,o))}function gt(e){Ee.current===e&&(ae(de),ae(Ee)),Ae.current===e&&(ae(Ae),Jl._currentValue=F)}var pt,qe;function Yt(e){if(pt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);pt=s&&s[1]||"",qe=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pt+e+qe}var Kt=!1;function Ze(e,s){if(!e||Kt)return"";Kt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var ze=function(){throw Error()};if(Object.defineProperty(ze.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ze,[])}catch(we){var ye=we}Reflect.construct(e,[],ze)}else{try{ze.call()}catch(we){ye=we}e.call(ze.prototype)}}else{try{throw Error()}catch(we){ye=we}(ze=e())&&typeof ze.catch=="function"&&ze.catch(function(){})}}catch(we){if(we&&ye&&typeof we.stack=="string")return[we.stack,ye.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var q=v.split(`
`),pe=A.split(`
`);for(f=r=0;r<q.length&&!q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<pe.length&&!pe[f].includes("DetermineComponentFrameRoot");)f++;if(r===q.length||f===pe.length)for(r=q.length-1,f=pe.length-1;1<=r&&0<=f&&q[r]!==pe[f];)f--;for(;1<=r&&0<=f;r--,f--)if(q[r]!==pe[f]){if(r!==1||f!==1)do if(r--,f--,0>f||q[r]!==pe[f]){var Me=`
`+q[r].replace(" at new "," at ");return e.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",e.displayName)),Me}while(1<=r&&0<=f);break}}}finally{Kt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Yt(o):""}function At(e,s){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return e.child!==s&&s!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Ze(e.type,!1);case 11:return Ze(e.type.render,!1);case 1:return Ze(e.type,!0);case 31:return Yt("Activity");default:return""}}function Y(e){try{var s="",o=null;do s+=At(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var je=Object.prototype.hasOwnProperty,We=t.unstable_scheduleCallback,Ue=t.unstable_cancelCallback,it=t.unstable_shouldYield,Ne=t.unstable_requestPaint,st=t.unstable_now,at=t.unstable_getCurrentPriorityLevel,yt=t.unstable_ImmediatePriority,xt=t.unstable_UserBlockingPriority,ot=t.unstable_NormalPriority,H=t.unstable_LowPriority,te=t.unstable_IdlePriority,me=t.log,ve=t.unstable_setDisableYieldValue,Qe=null,Ge=null;function Re(e){if(typeof me=="function"&&ve(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(Qe,e)}catch{}}var vt=Math.clz32?Math.clz32:bt,Ve=Math.log,$t=Math.LN2;function bt(e){return e>>>=0,e===0?32:31-(Ve(e)/$t|0)|0}var tt=256,Lt=262144,Ht=4194304;function dt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pe(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=dt(r):(v&=A,v!==0?f=dt(v):o||(o=A&~e,o!==0&&(f=dt(o))))):(A=r&~m,A!==0?f=dt(A):v!==0?f=dt(v):o||(o=r&~e,o!==0&&(f=dt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function jt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Mt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function en(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function ct(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,q=e.expirationTimes,pe=e.hiddenUpdates;for(o=v&~o;0<o;){var Me=31-vt(o),ze=1<<Me;A[Me]=0,q[Me]=-1;var ye=pe[Me];if(ye!==null)for(pe[Me]=null,Me=0;Me<ye.length;Me++){var we=ye[Me];we!==null&&(we.lane&=-536870913)}o&=~ze}r!==0&&xn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function xn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-vt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function Bn(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-vt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function Sn(e,s){var o=s&-s;return o=(o&42)!==0?1:ls(o),(o&(e.suspendedLanes|s))!==0?0:o}function ls(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tn(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:F0(e.type))}function Cn(e,s){var o=ne.p;try{return ne.p=e,s()}finally{ne.p=o}}var $n=Math.random().toString(36).slice(2),rn="__reactFiber$"+$n,En="__reactProps$"+$n,nt="__reactContainer$"+$n,ln="__reactEvents$"+$n,no="__reactListeners$"+$n,Ao="__reactHandles$"+$n,cs="__reactResources$"+$n,Es="__reactMarker$"+$n;function ei(e){delete e[rn],delete e[En],delete e[ln],delete e[no],delete e[Ao]}function Cs(e){var s=e[rn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[nt]||o[rn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=A0(e);e!==null;){if(o=e[rn])return o;e=A0(e)}return s}e=o,o=e.parentNode}return null}function uo(e){if(e=e[rn]||e[nt]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function so(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function fo(e){var s=e[cs];return s||(s=e[cs]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function kn(e){e[Es]=!0}var ti=new Set,Is={};function As(e,s){us(e,s),us(e+"Capture",s)}function us(e,s){for(Is[e]=s,e=0;e<s.length;e++)ti.add(s[e])}var Ho=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ho={},Ds={};function Ps(e){return je.call(Ds,e)?!0:je.call(ho,e)?!1:Ho.test(e)?Ds[e]=!0:(ho[e]=!0,!1)}function An(e,s,o){if(Ps(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function os(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function jn(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function tn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Do(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ds(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function di(e){if(!e._valueTracker){var s=Do(e)?"checked":"value";e._valueTracker=ds(e,s,""+e[s])}}function fi(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Do(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function No(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ni=/[\n"\\]/g;function ys(e){return e.replace(ni,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function wo(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+tn(s)):e.value!==""+tn(s)&&(e.value=""+tn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Xs(e,v,tn(s)):o!=null?Xs(e,v,tn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+tn(A):e.removeAttribute("name")}function In(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){di(e);return}o=o!=null?""+tn(o):"",s=s!=null?""+tn(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),di(e)}function Xs(e,s,o){s==="number"&&No(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function fs(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+tn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function hs(e,s,o){if(s!=null&&(s=""+tn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+tn(o):""}function zi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(ue(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=tn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),di(e)}function Uo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Qi.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function $i(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&qt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&qt(e,m,s[m])}function Ln(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ro=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pn(e){return Ro.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oo(){}var Vo=null;function mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bn=null,So=null;function Yo(e){var s=uo(e);if(s&&(e=s.stateNode)){var o=e[En]||null;e:switch(e=s.stateNode,s.type){case"input":if(wo(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ys(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[En]||null;if(!f)throw Error(a(90));wo(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&fi(r)}break e;case"textarea":hs(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&fs(e,!!o.multiple,s,!1)}}}var xs=!1;function Gs(e,s,o){if(xs)return e(s,o);xs=!0;try{var r=e(s);return r}finally{if(xs=!1,(bn!==null||So!==null)&&(vu(),bn&&(s=bn,e=So,So=bn=null,Yo(s),e)))for(s=0;s<e.length;s++)Yo(e[s])}}function sn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[En]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Ns=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=!1;if(Ns)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){io=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{io=!1}var ms=null,po=null,Lo=null;function Wo(){if(Lo)return Lo;var e,s=po,o=s.length,r,f="value"in ms?ms.value:ms.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Lo=f.slice(e,1<r?1-r:void 0)}function Hs(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function si(){return!1}function qn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_o:si,this.isPropagationStopped=si,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),s}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=qn(dn),Wn=x({},dn,{view:0,detail:0}),Rs=qn(Wn),hi,ao,ks,go=x({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ks&&(ks&&e.type==="mousemove"?(hi=e.screenX-ks.screenX,ao=e.screenY-ks.screenY):ao=hi=0,ks=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),Oo=qn(go),T=x({},go,{dataTransfer:0}),G=qn(T),fe=x({},Wn,{relatedTarget:0}),be=qn(fe),He=x({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ke=qn(He),It=x({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vt=qn(It),Dt=x({},dn,{data:0}),Fe=qn(Dt),Qt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Un(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Hn[e])?!!s[e]:!1}function pn(){return Un}var js=x({},Wn,{key:function(e){if(e.key){var s=Qt[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return e.type==="keypress"?Hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yo=qn(js),mi=x({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xo=qn(mi),Zi=x({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn}),ua=qn(Zi),Ii=x({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$=qn(Ii),Q=x({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),se=qn(Q),_e=x({},dn,{newState:0,oldState:0}),Je=qn(_e),rt=[9,13,27,32],mt=Ns&&"CompositionEvent"in window,Ot=null;Ns&&"documentMode"in document&&(Ot=document.documentMode);var ps=Ns&&"TextEvent"in window&&!Ot,Us=Ns&&(!mt||Ot&&8<Ot&&11>=Ot),xo=" ",vn=!1;function Ft(e,s){switch(e){case"keyup":return rt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function an(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function Ms(e,s){switch(e){case"compositionend":return an(s);case"keypress":return s.which!==32?null:(vn=!0,xo);case"textInput":return e=s.data,e===xo&&vn?null:e;default:return null}}function Co(e,s){if(cn)return e==="compositionend"||!mt&&Ft(e,s)?(e=Wo(),Lo=po=ms=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Us&&s.locale!=="ko"?null:s.data;default:return null}}var Vs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bs(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Vs[e.type]:s==="textarea"}function qs(e,s,o,r){bn?So?So.push(r):So=[r]:bn=r,s=Tu(s,"onChange"),0<s.length&&(o=new Fo("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var zo=null,bo=null;function xe(e){_0(e,0)}function C(e){var s=so(e);if(fi(s))return e}function E(e,s){if(e==="change")return s}var N=!1;if(Ns){var R;if(Ns){var P="oninput"in document;if(!P){var oe=document.createElement("div");oe.setAttribute("oninput","return;"),P=typeof oe.oninput=="function"}R=P}else R=!1;N=R&&(!document.documentMode||9<document.documentMode)}function Ce(){zo&&(zo.detachEvent("onpropertychange",Le),bo=zo=null)}function Le(e){if(e.propertyName==="value"&&C(bo)){var s=[];qs(s,bo,e,mo(e)),Gs(xe,s)}}function Xe(e,s,o){e==="focusin"?(Ce(),zo=s,bo=o,zo.attachEvent("onpropertychange",Le)):e==="focusout"&&Ce()}function ut(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return C(bo)}function St(e,s){if(e==="click")return C(s)}function Tt(e,s){if(e==="input"||e==="change")return C(s)}function Nt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var lt=typeof Object.is=="function"?Object.is:Nt;function ht(e,s){if(lt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!je.call(s,f)||!lt(e[f],s[f]))return!1}return!0}function Kn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qn(e,s){var o=Kn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kn(o)}}function bs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?bs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function wn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=No(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=No(e.document)}return s}function Vn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Xt=Ns&&"documentMode"in document&&11>=document.documentMode,Gt=null,vs=null,Mn=null,ro=!1;function $o(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ro||Gt==null||Gt!==No(r)||(r=Gt,"selectionStart"in r&&Vn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&ht(Mn,r)||(Mn=r,r=Tu(vs,"onSelect"),0<r.length&&(s=new Fo("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Gt)))}function is(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var Ci={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},Pi={},Hi={};Ns&&(Hi=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function Zn(e){if(Pi[e])return Pi[e];if(!Ci[e])return e;var s=Ci[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Hi)return Pi[e]=s[o];return e}var Ui=Zn("animationend"),Ji=Zn("animationiteration"),Pc=Zn("animationstart"),Wd=Zn("transitionrun"),Fd=Zn("transitionstart"),Xd=Zn("transitioncancel"),qp=Zn("transitionend"),Kp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Vi(e,s){Kp.set(e,s),As(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ki=[],Rr=0,qd=0;function Uc(){for(var e=Rr,s=qd=Rr=0;s<e;){var o=ki[s];ki[s++]=null;var r=ki[s];ki[s++]=null;var f=ki[s];ki[s++]=null;var m=ki[s];if(ki[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Qp(o,f,m)}}function Vc(e,s,o,r){ki[Rr++]=e,ki[Rr++]=s,ki[Rr++]=o,ki[Rr++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Vc(e,s,o,r),Yc(e)}function ir(e,s){return Vc(e,null,null,s),Yc(e)}function Qp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-vt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Fl)throw Fl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Br={};function f2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,s,o,r){return new f2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,s){var o=e.alternate;return o===null?(o=pi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Zp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=gv(e,o,de.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=pi(31,o,s,f),e.elementType=J,e.lanes=m,e;case j:return ar(o.children,f,m,s);case k:v=8,f|=24;break;case M:return e=pi(12,o,s,f|2),e.elementType=M,e.lanes=m,e;case W:return e=pi(13,o,s,f),e.elementType=W,e.lanes=m,e;case U:return e=pi(19,o,s,f),e.elementType=U,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case z:v=9;break e;case D:v=11;break e;case X:v=14;break e;case V:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=pi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ar(e,s,o,r){return e=pi(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=pi(6,e,null,s),e.lanes=o,e}function Jp(e){var s=pi(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=pi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var e_=new WeakMap;function ji(e,s){if(typeof e=="object"&&e!==null){var o=e_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:Y(s)},e_.set(e,s),s)}return{value:e,source:s,stack:Y(s)}}var Lr=[],Or=0,Fc=null,kl=0,Mi=[],Ti=0,Ta=null,ea=1,ta="";function fa(e,s){Lr[Or++]=kl,Lr[Or++]=Fc,Fc=e,kl=s}function t_(e,s,o){Mi[Ti++]=ea,Mi[Ti++]=ta,Mi[Ti++]=Ta,Ta=e;var r=ea;e=ta;var f=32-vt(r)-1;r&=~(1<<f),o+=1;var m=32-vt(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ea=1<<32-vt(s)+f|o<<f|r,ta=m+e}else ea=1<<m|o<<f|r,ta=e}function ef(e){e.return!==null&&(fa(e,1),t_(e,1,0))}function tf(e){for(;e===Fc;)Fc=Lr[--Or],Lr[Or]=null,kl=Lr[--Or],Lr[Or]=null;for(;e===Ta;)Ta=Mi[--Ti],Mi[Ti]=null,ta=Mi[--Ti],Mi[Ti]=null,ea=Mi[--Ti],Mi[Ti]=null}function n_(e,s){Mi[Ti++]=ea,Mi[Ti++]=ta,Mi[Ti++]=Ta,ea=s.id,ta=s.overflow,Ta=e}var ko=null,ws=null,yn=!1,Ea=null,Ei=!1,nf=Error(a(519));function Aa(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jl(ji(s,e)),nf}function s_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[rn]=e,s[En]=r,o){case"dialog":mn("cancel",s),mn("close",s);break;case"iframe":case"object":case"embed":mn("load",s);break;case"video":case"audio":for(o=0;o<Gl.length;o++)mn(Gl[o],s);break;case"source":mn("error",s);break;case"img":case"image":case"link":mn("error",s),mn("load",s);break;case"details":mn("toggle",s);break;case"input":mn("invalid",s),In(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":mn("invalid",s);break;case"textarea":mn("invalid",s),zi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||b0(s.textContent,o)?(r.popover!=null&&(mn("beforetoggle",s),mn("toggle",s)),r.onScroll!=null&&mn("scroll",s),r.onScrollEnd!=null&&mn("scrollend",s),r.onClick!=null&&(s.onclick=oo),s=!0):s=!1,s||Aa(e,!0)}function o_(e){for(ko=e.return;ko;)switch(ko.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:ko=ko.return}}function zr(e){if(e!==ko)return!1;if(!yn)return o_(e),yn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&ws&&Aa(e),o_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ws=E0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ws=E0(e)}else s===27?(s=ws,Ya(e.type)?(e=jh,jh=null,ws=e):ws=s):ws=ko?Di(e.stateNode.nextSibling):null;return!0}function rr(){ws=ko=null,yn=!1}function sf(){var e=Ea;return e!==null&&(ri===null?ri=e:ri.push.apply(ri,e),Ea=null),e}function jl(e){Ea===null?Ea=[e]:Ea.push(e)}var of=B(null),lr=null,ha=null;function Da(e,s,o){re(of,s._currentValue),s._currentValue=o}function ma(e){e._currentValue=of.current,ae(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var q=0;q<s.length;q++)if(A.context===s[q]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function $r(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;lt(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===Ae.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Jl):e=[Jl])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function jo(e){return i_(lr,e)}function Gc(e,s){return lr===null&&cr(e),i_(e,s)}function i_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ha===null){if(e===null)throw Error(a(308));ha=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ha=ha.next=s;return o}var h2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},m2=t.unstable_scheduleCallback,p2=t.unstable_NormalPriority,Ks={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new h2,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&m2(p2,function(){e.controller.abort()})}var Tl=null,cf=0,Ir=0,Pr=null;function _2(e,s){if(Tl===null){var o=Tl=[];cf=0,Ir=fh(),Pr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(a_,a_),s}function a_(){if(--cf===0&&Tl!==null){Pr!==null&&(Pr.status="fulfilled");var e=Tl;Tl=null,Ir=0,Pr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function g2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var r_=I.S;I.S=function(e,s){Yg=st(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&_2(e,s),r_!==null&&r_(e,s)};var ur=B(null);function uf(){var e=ur.current;return e!==null?e:as.pooledCache}function qc(e,s){s===null?re(ur,ur.current):re(ur,s.pool)}function l_(){var e=uf();return e===null?null:{parent:Ks._currentValue,pool:e}}var Hr=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function c_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function u_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(oo,oo),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,f_(e),e;default:if(typeof s.status=="string")s.then(oo,oo);else{if(e=as,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,f_(e),e}throw fr=s,Hr}}function dr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(fr=o,Hr):o}}var fr=null;function d_(){if(fr===null)throw Error(a(459));var e=fr;return fr=null,e}function f_(e){if(e===Hr||e===Kc)throw Error(a(483))}var Ur=null,El=0;function Zc(e){var s=El;return El+=1,Ur===null&&(Ur=[]),u_(Ur,e,s)}function Al(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function h_(e){function s(ce,ee){if(e){var he=ce.deletions;he===null?(ce.deletions=[ee],ce.flags|=16):he.push(ee)}}function o(ce,ee){if(!e)return null;for(;ee!==null;)s(ce,ee),ee=ee.sibling;return null}function r(ce){for(var ee=new Map;ce!==null;)ce.key!==null?ee.set(ce.key,ce):ee.set(ce.index,ce),ce=ce.sibling;return ee}function f(ce,ee){return ce=da(ce,ee),ce.index=0,ce.sibling=null,ce}function m(ce,ee,he){return ce.index=he,e?(he=ce.alternate,he!==null?(he=he.index,he<ee?(ce.flags|=67108866,ee):he):(ce.flags|=67108866,ee)):(ce.flags|=1048576,ee)}function v(ce){return e&&ce.alternate===null&&(ce.flags|=67108866),ce}function A(ce,ee,he,Be){return ee===null||ee.tag!==6?(ee=Zd(he,ce.mode,Be),ee.return=ce,ee):(ee=f(ee,he),ee.return=ce,ee)}function q(ce,ee,he,Be){var Pt=he.type;return Pt===j?Me(ce,ee,he.props.children,Be,he.key):ee!==null&&(ee.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===V&&dr(Pt)===ee.type)?(ee=f(ee,he.props),Al(ee,he),ee.return=ce,ee):(ee=Wc(he.type,he.key,he.props,null,ce.mode,Be),Al(ee,he),ee.return=ce,ee)}function pe(ce,ee,he,Be){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==he.containerInfo||ee.stateNode.implementation!==he.implementation?(ee=Jd(he,ce.mode,Be),ee.return=ce,ee):(ee=f(ee,he.children||[]),ee.return=ce,ee)}function Me(ce,ee,he,Be,Pt){return ee===null||ee.tag!==7?(ee=ar(he,ce.mode,Be,Pt),ee.return=ce,ee):(ee=f(ee,he),ee.return=ce,ee)}function ze(ce,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return ee=Zd(""+ee,ce.mode,he),ee.return=ce,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return he=Wc(ee.type,ee.key,ee.props,null,ce.mode,he),Al(he,ee),he.return=ce,he;case S:return ee=Jd(ee,ce.mode,he),ee.return=ce,ee;case V:return ee=dr(ee),ze(ce,ee,he)}if(ue(ee)||ke(ee))return ee=ar(ee,ce.mode,he,null),ee.return=ce,ee;if(typeof ee.then=="function")return ze(ce,Zc(ee),he);if(ee.$$typeof===L)return ze(ce,Gc(ce,ee),he);Jc(ce,ee)}return null}function ye(ce,ee,he,Be){var Pt=ee!==null?ee.key:null;if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return Pt!==null?null:A(ce,ee,""+he,Be);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case w:return he.key===Pt?q(ce,ee,he,Be):null;case S:return he.key===Pt?pe(ce,ee,he,Be):null;case V:return he=dr(he),ye(ce,ee,he,Be)}if(ue(he)||ke(he))return Pt!==null?null:Me(ce,ee,he,Be,null);if(typeof he.then=="function")return ye(ce,ee,Zc(he),Be);if(he.$$typeof===L)return ye(ce,ee,Gc(ce,he),Be);Jc(ce,he)}return null}function we(ce,ee,he,Be,Pt){if(typeof Be=="string"&&Be!==""||typeof Be=="number"||typeof Be=="bigint")return ce=ce.get(he)||null,A(ee,ce,""+Be,Pt);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case w:return ce=ce.get(Be.key===null?he:Be.key)||null,q(ee,ce,Be,Pt);case S:return ce=ce.get(Be.key===null?he:Be.key)||null,pe(ee,ce,Be,Pt);case V:return Be=dr(Be),we(ce,ee,he,Be,Pt)}if(ue(Be)||ke(Be))return ce=ce.get(he)||null,Me(ee,ce,Be,Pt,null);if(typeof Be.then=="function")return we(ce,ee,he,Zc(Be),Pt);if(Be.$$typeof===L)return we(ce,ee,he,Gc(ee,Be),Pt);Jc(ee,Be)}return null}function kt(ce,ee,he,Be){for(var Pt=null,Dn=null,Rt=ee,on=ee=0,gn=null;Rt!==null&&on<he.length;on++){Rt.index>on?(gn=Rt,Rt=null):gn=Rt.sibling;var Nn=ye(ce,Rt,he[on],Be);if(Nn===null){Rt===null&&(Rt=gn);break}e&&Rt&&Nn.alternate===null&&s(ce,Rt),ee=m(Nn,ee,on),Dn===null?Pt=Nn:Dn.sibling=Nn,Dn=Nn,Rt=gn}if(on===he.length)return o(ce,Rt),yn&&fa(ce,on),Pt;if(Rt===null){for(;on<he.length;on++)Rt=ze(ce,he[on],Be),Rt!==null&&(ee=m(Rt,ee,on),Dn===null?Pt=Rt:Dn.sibling=Rt,Dn=Rt);return yn&&fa(ce,on),Pt}for(Rt=r(Rt);on<he.length;on++)gn=we(Rt,ce,on,he[on],Be),gn!==null&&(e&&gn.alternate!==null&&Rt.delete(gn.key===null?on:gn.key),ee=m(gn,ee,on),Dn===null?Pt=gn:Dn.sibling=gn,Dn=gn);return e&&Rt.forEach(function(qa){return s(ce,qa)}),yn&&fa(ce,on),Pt}function Wt(ce,ee,he,Be){if(he==null)throw Error(a(151));for(var Pt=null,Dn=null,Rt=ee,on=ee=0,gn=null,Nn=he.next();Rt!==null&&!Nn.done;on++,Nn=he.next()){Rt.index>on?(gn=Rt,Rt=null):gn=Rt.sibling;var qa=ye(ce,Rt,Nn.value,Be);if(qa===null){Rt===null&&(Rt=gn);break}e&&Rt&&qa.alternate===null&&s(ce,Rt),ee=m(qa,ee,on),Dn===null?Pt=qa:Dn.sibling=qa,Dn=qa,Rt=gn}if(Nn.done)return o(ce,Rt),yn&&fa(ce,on),Pt;if(Rt===null){for(;!Nn.done;on++,Nn=he.next())Nn=ze(ce,Nn.value,Be),Nn!==null&&(ee=m(Nn,ee,on),Dn===null?Pt=Nn:Dn.sibling=Nn,Dn=Nn);return yn&&fa(ce,on),Pt}for(Rt=r(Rt);!Nn.done;on++,Nn=he.next())Nn=we(Rt,ce,on,Nn.value,Be),Nn!==null&&(e&&Nn.alternate!==null&&Rt.delete(Nn.key===null?on:Nn.key),ee=m(Nn,ee,on),Dn===null?Pt=Nn:Dn.sibling=Nn,Dn=Nn);return e&&Rt.forEach(function(Tv){return s(ce,Tv)}),yn&&fa(ce,on),Pt}function ts(ce,ee,he,Be){if(typeof he=="object"&&he!==null&&he.type===j&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case w:e:{for(var Pt=he.key;ee!==null;){if(ee.key===Pt){if(Pt=he.type,Pt===j){if(ee.tag===7){o(ce,ee.sibling),Be=f(ee,he.props.children),Be.return=ce,ce=Be;break e}}else if(ee.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===V&&dr(Pt)===ee.type){o(ce,ee.sibling),Be=f(ee,he.props),Al(Be,he),Be.return=ce,ce=Be;break e}o(ce,ee);break}else s(ce,ee);ee=ee.sibling}he.type===j?(Be=ar(he.props.children,ce.mode,Be,he.key),Be.return=ce,ce=Be):(Be=Wc(he.type,he.key,he.props,null,ce.mode,Be),Al(Be,he),Be.return=ce,ce=Be)}return v(ce);case S:e:{for(Pt=he.key;ee!==null;){if(ee.key===Pt)if(ee.tag===4&&ee.stateNode.containerInfo===he.containerInfo&&ee.stateNode.implementation===he.implementation){o(ce,ee.sibling),Be=f(ee,he.children||[]),Be.return=ce,ce=Be;break e}else{o(ce,ee);break}else s(ce,ee);ee=ee.sibling}Be=Jd(he,ce.mode,Be),Be.return=ce,ce=Be}return v(ce);case V:return he=dr(he),ts(ce,ee,he,Be)}if(ue(he))return kt(ce,ee,he,Be);if(ke(he)){if(Pt=ke(he),typeof Pt!="function")throw Error(a(150));return he=Pt.call(he),Wt(ce,ee,he,Be)}if(typeof he.then=="function")return ts(ce,ee,Zc(he),Be);if(he.$$typeof===L)return ts(ce,ee,Gc(ce,he),Be);Jc(ce,he)}return typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint"?(he=""+he,ee!==null&&ee.tag===6?(o(ce,ee.sibling),Be=f(ee,he),Be.return=ce,ce=Be):(o(ce,ee),Be=Zd(he,ce.mode,Be),Be.return=ce,ce=Be),v(ce)):o(ce,ee)}return function(ce,ee,he,Be){try{El=0;var Pt=ts(ce,ee,he,Be);return Ur=null,Pt}catch(Rt){if(Rt===Hr||Rt===Kc)throw Rt;var Dn=pi(29,Rt,null,ce.mode);return Dn.lanes=Be,Dn.return=ce,Dn}finally{}}}var hr=h_(!0),m_=h_(!1),Na=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(On&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Qp(e,null,o),s}return Vc(e,r,s,o),Yc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Bn(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Nl(){if(pf){var e=Pr;if(e!==null)throw e}}function Rl(e,s,o,r){pf=!1;var f=e.updateQueue;Na=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var q=A,pe=q.next;q.next=null,v===null?m=pe:v.next=pe,v=q;var Me=e.alternate;Me!==null&&(Me=Me.updateQueue,A=Me.lastBaseUpdate,A!==v&&(A===null?Me.firstBaseUpdate=pe:A.next=pe,Me.lastBaseUpdate=q))}if(m!==null){var ze=f.baseState;v=0,Me=pe=q=null,A=m;do{var ye=A.lane&-536870913,we=ye!==A.lane;if(we?(_n&ye)===ye:(r&ye)===ye){ye!==0&&ye===Ir&&(pf=!0),Me!==null&&(Me=Me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var kt=e,Wt=A;ye=s;var ts=o;switch(Wt.tag){case 1:if(kt=Wt.payload,typeof kt=="function"){ze=kt.call(ts,ze,ye);break e}ze=kt;break e;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=Wt.payload,ye=typeof kt=="function"?kt.call(ts,ze,ye):kt,ye==null)break e;ze=x({},ze,ye);break e;case 2:Na=!0}}ye=A.callback,ye!==null&&(e.flags|=64,we&&(e.flags|=8192),we=f.callbacks,we===null?f.callbacks=[ye]:we.push(ye))}else we={lane:ye,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Me===null?(pe=Me=we,q=ze):Me=Me.next=we,v|=ye;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;we=A,A=we.next,we.next=null,f.lastBaseUpdate=we,f.shared.pending=null}}while(!0);Me===null&&(q=ze),f.baseState=q,f.firstBaseUpdate=pe,f.lastBaseUpdate=Me,m===null&&(f.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=ze}}function p_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function __(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)p_(o[e],s)}var Vr=B(null),eu=B(0);function g_(e,s){e=Sa,re(eu,e),re(Vr,s),Sa=e|s.baseLanes}function _f(){re(eu,Sa),re(Vr,Vr.current)}function gf(){Sa=eu.current,ae(Vr),ae(eu)}var _i=B(null),Ai=null;function La(e){var s=e.alternate;re(Ys,Ys.current&1),re(_i,e),Ai===null&&(s===null||Vr.current!==null||s.memoizedState!==null)&&(Ai=e)}function yf(e){re(Ys,Ys.current),re(_i,e),Ai===null&&(Ai=e)}function y_(e){e.tag===22?(re(Ys,Ys.current),re(_i,e),Ai===null&&(Ai=e)):Oa()}function Oa(){re(Ys,Ys.current),re(_i,_i.current)}function gi(e){ae(_i),Ai===e&&(Ai=null),ae(Ys)}var Ys=B(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var pa=0,nn=null,Jn=null,Qs=null,nu=!1,Yr=!1,mr=!1,su=0,Bl=0,Wr=null,y2=0;function Ls(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!lt(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return pa=m,nn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,I.H=e===null||e.memoizedState===null?tg:Lf,mr=!1,m=o(r,f),mr=!1,Yr&&(m=b_(s,o,r,f)),x_(e),m}function x_(e){I.H=zl;var s=Jn!==null&&Jn.next!==null;if(pa=0,Qs=Jn=nn=null,nu=!1,Bl=0,Wr=null,s)throw Error(a(300));e===null||Zs||(e=e.dependencies,e!==null&&Xc(e)&&(Zs=!0))}function b_(e,s,o,r){nn=e;var f=0;do{if(Yr&&(Wr=null),Bl=0,Yr=!1,25<=f)throw Error(a(301));if(f+=1,Qs=Jn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=ng,m=s(o,r)}while(Yr);return m}function x2(){var e=I.H,s=e.useState()[0];return s=typeof s.then=="function"?Ll(s):s,e=e.useState()[0],(Jn!==null?Jn.memoizedState:null)!==e&&(nn.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}pa=0,Qs=Jn=nn=null,Yr=!1,Bl=su=0,Wr=null}function Go(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qs===null?nn.memoizedState=Qs=e:Qs=Qs.next=e,Qs}function Ws(){if(Jn===null){var e=nn.alternate;e=e!==null?e.memoizedState:null}else e=Jn.next;var s=Qs===null?nn.memoizedState:Qs.next;if(s!==null)Qs=s,Jn=e;else{if(e===null)throw nn.alternate===null?Error(a(467)):Error(a(310));Jn=e,e={memoizedState:Jn.memoizedState,baseState:Jn.baseState,baseQueue:Jn.baseQueue,queue:Jn.queue,next:null},Qs===null?nn.memoizedState=Qs=e:Qs=Qs.next=e}return Qs}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(e){var s=Bl;return Bl+=1,Wr===null&&(Wr=[]),e=u_(Wr,e,s),s=nn,(Qs===null?s.memoizedState:Qs.next)===null&&(s=s.alternate,I.H=s===null||s.memoizedState===null?tg:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ll(e);if(e.$$typeof===L)return jo(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=nn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=nn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),nn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=le;return s.index++,o}function _a(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Ws();return kf(s,Jn,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,q=null,pe=s,Me=!1;do{var ze=pe.lane&-536870913;if(ze!==pe.lane?(_n&ze)===ze:(pa&ze)===ze){var ye=pe.revertLane;if(ye===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),ze===Ir&&(Me=!0);else if((pa&ye)===ye){pe=pe.next,ye===Ir&&(Me=!0);continue}else ze={lane:0,revertLane:pe.revertLane,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},q===null?(A=q=ze,v=m):q=q.next=ze,nn.lanes|=ye,Ia|=ye;ze=pe.action,mr&&o(m,ze),m=pe.hasEagerState?pe.eagerState:o(m,ze)}else ye={lane:ze,revertLane:pe.revertLane,gesture:pe.gesture,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},q===null?(A=q=ye,v=m):q=q.next=ye,nn.lanes|=ze,Ia|=ze;pe=pe.next}while(pe!==null&&pe!==s);if(q===null?v=m:q.next=A,!lt(m,e.memoizedState)&&(Zs=!0,Me&&(o=Pr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=Ws(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);lt(m,s.memoizedState)||(Zs=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function v_(e,s,o){var r=nn,f=Ws(),m=yn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!lt((Jn||f).memoizedState,o);if(v&&(f.memoizedState=o,Zs=!0),f=f.queue,Ef(C_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||Qs!==null&&Qs.memoizedState.tag&1){if(r.flags|=2048,Fr(9,{destroy:void 0},S_.bind(null,r,f,o,s),null),as===null)throw Error(a(349));m||(pa&127)!==0||w_(r,s,o)}return o}function w_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=nn.updateQueue,s===null?(s=ou(),nn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function S_(e,s,o,r){s.value=o,s.getSnapshot=r,k_(s)&&j_(e)}function C_(e,s,o){return o(function(){k_(s)&&j_(e)})}function k_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!lt(e,o)}catch{return!0}}function j_(e){var s=ir(e,2);s!==null&&li(s,e,2)}function Mf(e){var s=Go();if(typeof e=="function"){var o=e;if(e=o(),mr){Re(!0);try{o()}finally{Re(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},s}function M_(e,s,o,r){return e.baseState=o,kf(e,Jn,typeof r=="function"?r:_a)}function b2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};I.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,T_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function T_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=I.T,v={};I.T=v;try{var A=o(f,r),q=I.S;q!==null&&q(v,A),E_(e,s,A)}catch(pe){Tf(e,s,pe)}finally{m!==null&&v.types!==null&&(m.types=v.types),I.T=m}}else try{m=o(f,r),E_(e,s,m)}catch(pe){Tf(e,s,pe)}}function E_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){A_(e,s,r)},function(r){return Tf(e,s,r)}):A_(e,s,o)}function A_(e,s,o){s.status="fulfilled",s.value=o,D_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,T_(e,o)))}function Tf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,D_(s),s=s.next;while(s!==r)}e.action=null}function D_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function N_(e,s){return s}function R_(e,s){if(yn){var o=as.formState;if(o!==null){e:{var r=nn;if(yn){if(ws){t:{for(var f=ws,m=Ei;f.nodeType!==8;){if(!m){f=null;break t}if(f=Di(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ws=Di(f.nextSibling),r=f.data==="F!";break e}}Aa(r)}r=!1}r&&(s=o[0])}}return o=Go(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N_,lastRenderedState:s},o.queue=r,o=Z_.bind(null,nn,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,nn,!1,r.queue),r=Go(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=b2.bind(null,nn,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function B_(e){var s=Ws();return L_(s,Jn,e)}function L_(e,s,o){if(s=kf(e,s,N_)[0],e=au(_a)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Ll(s)}catch(v){throw v===Hr?Kc:v}else r=s;s=Ws();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(nn.flags|=2048,Fr(9,{destroy:void 0},v2.bind(null,f,o),null)),[r,m,e]}function v2(e,s){e.action=s}function O_(e){var s=Ws(),o=Jn;if(o!==null)return L_(s,o,e);Ws(),s=s.memoizedState,o=Ws();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Fr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=nn.updateQueue,s===null&&(s=ou(),nn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function z_(){return Ws().memoizedState}function ru(e,s,o,r){var f=Go();nn.flags|=e,f.memoizedState=Fr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=Ws();r=r===void 0?null:r;var m=f.memoizedState.inst;Jn!==null&&r!==null&&xf(r,Jn.memoizedState.deps)?f.memoizedState=Fr(s,m,o,r):(nn.flags|=e,f.memoizedState=Fr(1|s,m,o,r))}function $_(e,s){ru(8390656,8,e,s)}function Ef(e,s){lu(2048,8,e,s)}function w2(e){nn.flags|=4;var s=nn.updateQueue;if(s===null)s=ou(),nn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function I_(e){var s=Ws().memoizedState;return w2({ref:s,nextImpl:e}),function(){if((On&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function P_(e,s){return lu(4,2,e,s)}function H_(e,s){return lu(4,4,e,s)}function U_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function V_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,U_.bind(null,s,e),o)}function Af(){}function Y_(e,s){var o=Ws();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function W_(e,s){var o=Ws();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),mr){Re(!0);try{e()}finally{Re(!1)}}return o.memoizedState=[r,s],r}function Df(e,s,o){return o===void 0||(pa&1073741824)!==0&&(_n&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Fg(),nn.lanes|=e,Ia|=e,o)}function F_(e,s,o,r){return lt(o,s)?o:Vr.current!==null?(e=Df(e,o,r),lt(e,s)||(Zs=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(_n&261930)===0?(Zs=!0,e.memoizedState=o):(e=Fg(),nn.lanes|=e,Ia|=e,s)}function X_(e,s,o,r,f){var m=ne.p;ne.p=m!==0&&8>m?m:8;var v=I.T,A={};I.T=A,Bf(e,!1,s,o);try{var q=f(),pe=I.S;if(pe!==null&&pe(A,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var Me=g2(q,r);Ol(e,s,Me,bi(e))}else Ol(e,s,r,bi(e))}catch(ze){Ol(e,s,{then:function(){},status:"rejected",reason:ze},bi())}finally{ne.p=m,v!==null&&A.types!==null&&(v.types=A.types),I.T=v}}function S2(){}function Nf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=G_(e).queue;X_(e,f,s,F,o===null?S2:function(){return q_(e),o(r)})}function G_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:F},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function q_(e){var s=G_(e);s.next===null&&(s=e.alternate.memoizedState),Ol(e,s.next.queue,{},bi())}function Rf(){return jo(Jl)}function K_(){return Ws().memoizedState}function Q_(){return Ws().memoizedState}function C2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=bi();e=Ra(o);var r=Ba(s,e,o);r!==null&&(li(r,s,o),Dl(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function k2(e,s,o){var r=bi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?J_(s,o):(o=Kd(e,s,o,r),o!==null&&(li(o,e,r),eg(o,s,r)))}function Z_(e,s,o){var r=bi();Ol(e,s,o,r)}function Ol(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))J_(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,lt(A,v))return Vc(e,s,f,0),as===null&&Uc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return li(o,e,r),eg(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&li(s,e,2)}function cu(e){var s=e.alternate;return e===nn||s!==null&&s===nn}function J_(e,s){Yr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function eg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Bn(e,o)}}var zl={readContext:jo,use:iu,useCallback:Ls,useContext:Ls,useEffect:Ls,useImperativeHandle:Ls,useLayoutEffect:Ls,useInsertionEffect:Ls,useMemo:Ls,useReducer:Ls,useRef:Ls,useState:Ls,useDebugValue:Ls,useDeferredValue:Ls,useTransition:Ls,useSyncExternalStore:Ls,useId:Ls,useHostTransitionStatus:Ls,useFormState:Ls,useActionState:Ls,useOptimistic:Ls,useMemoCache:Ls,useCacheRefresh:Ls};zl.useEffectEvent=Ls;var tg={readContext:jo,use:iu,useCallback:function(e,s){return Go().memoizedState=[e,s===void 0?null:s],e},useContext:jo,useEffect:$_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,U_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=Go();s=s===void 0?null:s;var r=e();if(mr){Re(!0);try{e()}finally{Re(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Go();if(o!==void 0){var f=o(s);if(mr){Re(!0);try{o(s)}finally{Re(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=k2.bind(null,nn,e),[r.memoizedState,e]},useRef:function(e){var s=Go();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=Z_.bind(null,nn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=Go();return Df(o,e,s)},useTransition:function(){var e=Mf(!1);return e=X_.bind(null,nn,e.queue,!0,!1),Go().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=nn,f=Go();if(yn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),as===null)throw Error(a(349));(_n&127)!==0||w_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,$_(C_.bind(null,r,m,e),[e]),r.flags|=2048,Fr(9,{destroy:void 0},S_.bind(null,r,m,o,s),null),o},useId:function(){var e=Go(),s=as.identifierPrefix;if(yn){var o=ta,r=ea;o=(r&~(1<<32-vt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=y2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:R_,useActionState:R_,useOptimistic:function(e){var s=Go();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,nn,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return Go().memoizedState=C2.bind(null,nn)},useEffectEvent:function(e){var s=Go(),o={impl:e};return s.memoizedState=o,function(){if((On&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:jo,use:iu,useCallback:Y_,useContext:jo,useEffect:Ef,useImperativeHandle:V_,useInsertionEffect:P_,useLayoutEffect:H_,useMemo:W_,useReducer:au,useRef:z_,useState:function(){return au(_a)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ws();return F_(o,Jn.memoizedState,e,s)},useTransition:function(){var e=au(_a)[0],s=Ws().memoizedState;return[typeof e=="boolean"?e:Ll(e),s]},useSyncExternalStore:v_,useId:K_,useHostTransitionStatus:Rf,useFormState:B_,useActionState:B_,useOptimistic:function(e,s){var o=Ws();return M_(o,Jn,e,s)},useMemoCache:Cf,useCacheRefresh:Q_};Lf.useEffectEvent=I_;var ng={readContext:jo,use:iu,useCallback:Y_,useContext:jo,useEffect:Ef,useImperativeHandle:V_,useInsertionEffect:P_,useLayoutEffect:H_,useMemo:W_,useReducer:jf,useRef:z_,useState:function(){return jf(_a)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ws();return Jn===null?Df(o,e,s):F_(o,Jn.memoizedState,e,s)},useTransition:function(){var e=jf(_a)[0],s=Ws().memoizedState;return[typeof e=="boolean"?e:Ll(e),s]},useSyncExternalStore:v_,useId:K_,useHostTransitionStatus:Rf,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=Ws();return Jn!==null?M_(o,Jn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:Q_};ng.useEffectEvent=I_;function Of(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var zf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=bi(),f=Ra(r);f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(li(s,e,r),Dl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=bi(),f=Ra(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(li(s,e,r),Dl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=bi(),r=Ra(o);r.tag=2,s!=null&&(r.callback=s),s=Ba(e,r,o),s!==null&&(li(s,e,o),Dl(s,e,o))}};function sg(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!ht(o,r)||!ht(f,m):!0}function og(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&zf.enqueueReplaceState(s,s.state,null)}function pr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ig(e){Hc(e)}function ag(e){console.error(e)}function rg(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function lg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=Ra(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function cg(e){return e=Ra(e),e.tag=3,e}function ug(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){lg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){lg(s,o,r),typeof f!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function j2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&$r(s,o,f,!0),o=_i.current,o!==null){switch(o.tag){case 31:case 13:return Ai===null?wu():o.alternate===null&&Os===0&&(Os=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),wu(),!1}if(yn)return s=_i.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),jl(ji(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),jl(ji(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=ji(r,o),f=$f(e.stateNode,r,f),mf(e,f),Os!==4&&(Os=2)),!1;var m=Error(a(520),{cause:r});if(m=ji(m,o),Wl===null?Wl=[m]:Wl.push(m),Os!==4&&(Os=2),s===null)return!0;r=ji(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pa===null||!Pa.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=cg(f),ug(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),Zs=!1;function Mo(e,s,o,r){s.child=e===null?m_(s,null,o,r):hr(s,e.child,o,r)}function dg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return cr(s),r=bf(e,s,o,v,m,f),A=vf(),e!==null&&!Zs?(wf(e,s,f),ga(e,s,f)):(yn&&A&&ef(s),s.flags|=1,Mo(e,s,r,f),s.child)}function fg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,hg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:ht,o(v,r)&&e.ref===s.ref)return ga(e,s,f)}return s.flags|=1,e=da(m,r),e.ref=s.ref,e.return=s,s.child=e}function hg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(ht(m,r)&&e.ref===s.ref)if(Zs=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(Zs=!0);else return s.lanes=e.lanes,ga(e,s,f)}return Pf(e,s,o,r,f)}function mg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return pg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?g_(s,m):_f(),y_(s);else return r=s.lanes=536870912,pg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),g_(s,m),Oa(),s.memoizedState=null):(e!==null&&qc(s,null),_f(),Oa());return Mo(e,s,f,o),s.child}function $l(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function pg(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:Ks._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),_f(),y_(s),e!==null&&$r(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function _g(e,s,o){return hr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,gi(s),s.memoizedState=null,e}function M2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(yn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,$l(null,e);if(yf(s),(e=ws)?(e=T0(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},o=Jp(e),o.return=s,s.child=o,ko=s,ws=null)):e=null,e===null)throw Aa(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=_g(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Zs||$r(e,s,o,!1),f=(o&e.childLanes)!==0,Zs||f){if(r=as,r!==null&&(v=Sn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,ir(e,v),li(r,e,v),If;wu(),s=_g(e,s,o)}else e=m.treeContext,ws=Di(v.nextSibling),ko=s,yn=!0,Ea=null,Ei=!1,e!==null&&n_(s,e),s=du(s,r),s.flags|=4096;return s}return e=da(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return cr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!Zs?(wf(e,s,f),ga(e,s,f)):(yn&&r&&ef(s),s.flags|=1,Mo(e,s,o,f),s.child)}function gg(e,s,o,r,f,m){return cr(s),s.updateQueue=null,o=b_(s,r,o,f),x_(e),r=vf(),e!==null&&!Zs?(wf(e,s,m),ga(e,s,m)):(yn&&r&&ef(s),s.flags|=1,Mo(e,s,o,m),s.child)}function yg(e,s,o,r,f){if(cr(s),s.stateNode===null){var m=Br,v=o.contextType;typeof v=="object"&&v!==null&&(m=jo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?jo(v):Br,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Of(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&zf.enqueueReplaceState(m,m.state,null),Rl(s,r,m,f),Nl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,q=pr(o,A);m.props=q;var pe=m.context,Me=o.contextType;v=Br,typeof Me=="object"&&Me!==null&&(v=jo(Me));var ze=o.getDerivedStateFromProps;Me=typeof ze=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,Me||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||pe!==v)&&og(s,m,r,v),Na=!1;var ye=s.memoizedState;m.state=ye,Rl(s,r,m,f),Nl(),pe=s.memoizedState,A||ye!==pe||Na?(typeof ze=="function"&&(Of(s,o,ze,r),pe=s.memoizedState),(q=Na||sg(s,o,q,r,ye,pe,v))?(Me||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=pe),m.props=r,m.state=pe,m.context=v,r=q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,Me=pr(o,v),m.props=Me,ze=s.pendingProps,ye=m.context,pe=o.contextType,q=Br,typeof pe=="object"&&pe!==null&&(q=jo(pe)),A=o.getDerivedStateFromProps,(pe=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ze||ye!==q)&&og(s,m,r,q),Na=!1,ye=s.memoizedState,m.state=ye,Rl(s,r,m,f),Nl();var we=s.memoizedState;v!==ze||ye!==we||Na||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&(Of(s,o,A,r),we=s.memoizedState),(Me=Na||sg(s,o,Me,r,ye,we,q)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(pe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,we,q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,we,q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=we),m.props=r,m.state=we,m.context=q,r=Me):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=hr(s,e.child,null,f),s.child=hr(s,null,o,f)):Mo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ga(e,s,f),e}function xg(e,s,o,r){return rr(),s.flags|=256,Mo(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:l_()}}function Vf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=xi),e}function bg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Ys.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(yn){if(f?La(s):Oa(),(e=ws)?(e=T0(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},o=Jp(e),o.return=s,s.child=o,ko=s,ws=null)):e=null,e===null)throw Aa(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Oa(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=ar(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,$l(null,r)):(La(s),Yf(s,A))}var q=e.memoizedState;if(q!==null&&(A=q.dehydrated,A!==null)){if(m)s.flags&256?(La(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(Oa(),s.child=e.child,s.flags|=128,s=null):(Oa(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=ar(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,hr(s,e.child,null,o),r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,s=$l(null,r));else if(La(s),kh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var pe=v.dgst;v=pe,r=Error(a(419)),r.stack="",r.digest=v,jl({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(Zs||$r(e,s,o,!1),v=(o&e.childLanes)!==0,Zs||v){if(v=as,v!==null&&(r=Sn(v,o),r!==0&&r!==q.retryLane))throw q.retryLane=r,ir(e,r),li(v,e,r),If;Ch(A)||wu(),s=Wf(e,s,o)}else Ch(A)?(s.flags|=192,s.child=e.child,s=null):(e=q.treeContext,ws=Di(A.nextSibling),ko=s,yn=!0,Ea=null,Ei=!1,e!==null&&n_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(Oa(),A=r.fallback,f=s.mode,q=e.child,pe=q.sibling,r=da(q,{mode:"hidden",children:r.children}),r.subtreeFlags=q.subtreeFlags&65011712,pe!==null?A=da(pe,A):(A=ar(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,$l(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Uf(o):(f=A.cachePool,f!==null?(q=Ks._currentValue,f=f.parent!==q?{parent:q,pool:q}:f):f=l_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Vf(e,v,o),s.memoizedState=Hf,$l(e.child,r)):(La(s),o=e.child,e=o.sibling,o=da(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=pi(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return hr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function vg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function wg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Ys.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,re(Ys,v),Mo(e,s,r,o),r=yn?kl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vg(e,o,s);else if(e.tag===19)vg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ga(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ia|=s.lanes,(o&s.childLanes)===0)if(e!==null){if($r(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=da(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=da(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function T2(e,s,o){switch(s.tag){case 3:et(s,s.stateNode.containerInfo),Da(s,Ks,e.memoizedState.cache),rr();break;case 27:case 5:zt(s);break;case 4:et(s,s.stateNode.containerInfo);break;case 10:Da(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(La(s),s.flags|=128,null):(o&s.child.childLanes)!==0?bg(e,s,o):(La(s),e=ga(e,s,o),e!==null?e.sibling:null);La(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||($r(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return wg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),re(Ys,Ys.current),r)break;return null;case 22:return s.lanes=0,mg(e,s,o,s.pendingProps);case 24:Da(s,Ks,e.memoizedState.cache)}return ga(e,s,o)}function Sg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Zs=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return Zs=!1,T2(e,s,o);Zs=(e.flags&131072)!==0}else Zs=!1,yn&&(s.flags&1048576)!==0&&t_(s,kl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=dr(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=pr(e,r),s.tag=1,s=yg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===D){s.tag=11,s=dg(null,s,e,r,o);break e}else if(f===X){s.tag=14,s=fg(null,s,e,r,o);break e}}throw s=Z(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=pr(r,s.pendingProps),yg(e,s,r,f,o);case 3:e:{if(et(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Rl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Da(s,Ks,r),r!==m.cache&&rf(s,[Ks],o,!0),Nl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=xg(e,s,r,o);break e}else if(r!==f){f=ji(Error(a(424)),s),jl(f),s=xg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ws=Di(e.firstChild),ko=s,yn=!0,Ea=null,Ei=!0,o=m_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(rr(),r===f){s=ga(e,s,o);break e}Mo(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=B0(s.type,null,s.pendingProps,null))?s.memoizedState=o:yn||(o=s.type,e=s.pendingProps,r=Eu(Oe.current).createElement(o),r[rn]=s,r[En]=e,To(r,o,e),kn(r),s.stateNode=r):s.memoizedState=B0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return zt(s),e===null&&yn&&(r=s.stateNode=D0(s.type,s.pendingProps,Oe.current),ko=s,Ei=!0,f=ws,Ya(s.type)?(jh=f,ws=Di(r.firstChild)):ws=f),Mo(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&yn&&((f=r=ws)&&(r=ov(r,s.type,s.pendingProps,Ei),r!==null?(s.stateNode=r,ko=s,ws=Di(r.firstChild),Ei=!1,f=!0):f=!1),f||Aa(s)),zt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,x2,null,null,o),Jl._currentValue=f),fu(e,s),Mo(e,s,r,o),s.child;case 6:return e===null&&yn&&((e=o=ws)&&(o=iv(o,s.pendingProps,Ei),o!==null?(s.stateNode=o,ko=s,ws=null,e=!0):e=!1),e||Aa(s)),null;case 13:return bg(e,s,o);case 4:return et(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=hr(s,null,r,o):Mo(e,s,r,o),s.child;case 11:return dg(e,s,s.type,s.pendingProps,o);case 7:return Mo(e,s,s.pendingProps,o),s.child;case 8:return Mo(e,s,s.pendingProps.children,o),s.child;case 12:return Mo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Da(s,s.type,r.value),Mo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,cr(s),f=jo(f),r=r(f),s.flags|=1,Mo(e,s,r,o),s.child;case 14:return fg(e,s,s.type,s.pendingProps,o);case 15:return hg(e,s,s.type,s.pendingProps,o);case 19:return wg(e,s,o);case 31:return M2(e,s,o);case 22:return mg(e,s,o,s.pendingProps);case 24:return cr(s),r=jo(Ks),e===null?(f=uf(),f===null&&(f=as,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),Da(s,Ks,f)):((e.lanes&o)!==0&&(hf(e,s),Rl(s,null,null,o),Nl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Da(s,Ks,r)):(r=m.cache,Da(s,Ks,r),r!==f.cache&&rf(s,[Ks],o,!0))),Mo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ya(e){e.flags|=4}function Gf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw fr=Qc,df}else e.flags&=-16777217}function Cg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I0(s))if(Kg())e.flags|=8192;else throw fr=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?_t():536870912,e.lanes|=s,Kr|=s)}function Il(e,s){if(!yn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ss(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function E2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ss(s),null;case 1:return Ss(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ma(Ks),ft(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(zr(s)?ya(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),Ss(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ya(s),m!==null?(Ss(s),Cg(s,m)):(Ss(s),Gf(s,f,null,r,o))):m?m!==e.memoizedState?(ya(s),Ss(s),Cg(s,m)):(Ss(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ya(s),Ss(s),Gf(s,f,e,r,o)),null;case 27:if(gt(s),o=Oe.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ss(s),null}e=de.current,zr(s)?s_(s):(e=D0(f,r,o),s.stateNode=e,ya(s))}return Ss(s),null;case 5:if(gt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ss(s),null}if(m=de.current,zr(s))s_(s);else{var v=Eu(Oe.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[rn]=s,m[En]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(To(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ya(s)}}return Ss(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Oe.current,zr(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=ko,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[rn]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||b0(e.nodeValue,o)),e||Aa(s,!0)}else e=Eu(e).createTextNode(r),e[rn]=s,s.stateNode=e}return Ss(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=zr(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[rn]=s}else rr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ss(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(gi(s),s):(gi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return Ss(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=zr(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[rn]=s}else rr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ss(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(gi(s),s):(gi(s),null)}return gi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),Ss(s),null);case 4:return ft(),e===null&&_h(s.stateNode.containerInfo),Ss(s),null;case 10:return ma(s.type),Ss(s),null;case 19:if(ae(Ys),r=s.memoizedState,r===null)return Ss(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Il(r,!1);else{if(Os!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Il(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Zp(o,e),o=o.sibling;return re(Ys,Ys.current&1|2),yn&&fa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&st()>xu&&(s.flags|=128,f=!0,Il(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Il(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!yn)return Ss(s),null}else 2*st()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Il(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=st(),e.sibling=null,o=Ys.current,re(Ys,f?o&1|2:o&1),yn&&fa(s,r.treeForkCount),e):(Ss(s),null);case 22:case 23:return gi(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(Ss(s),s.subtreeFlags&6&&(s.flags|=8192)):Ss(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ae(ur),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ma(Ks),Ss(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function A2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ma(Ks),ft(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return gt(s),null;case 31:if(s.memoizedState!==null){if(gi(s),s.alternate===null)throw Error(a(340));rr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(gi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));rr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ae(Ys),null;case 4:return ft(),null;case 10:return ma(s.type),null;case 22:case 23:return gi(s),gf(),e!==null&&ae(ur),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ma(Ks),null;case 25:return null;default:return null}}function kg(e,s){switch(tf(s),s.tag){case 3:ma(Ks),ft();break;case 26:case 27:case 5:gt(s);break;case 4:ft();break;case 31:s.memoizedState!==null&&gi(s);break;case 13:gi(s);break;case 19:ae(Ys);break;case 10:ma(s.type);break;case 22:case 23:gi(s),gf(),e!==null&&ae(ur);break;case 24:ma(Ks)}}function Pl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Xn(s,s.return,A)}}function za(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var q=o,pe=A;try{pe()}catch(Me){Xn(f,q,Me)}}}r=r.next}while(r!==m)}}catch(Me){Xn(s,s.return,Me)}}function jg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{__(s,o)}catch(r){Xn(e,e.return,r)}}}function Mg(e,s,o){o.props=pr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Xn(e,s,r)}}function Hl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Xn(e,s,f)}}function na(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Xn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Xn(e,s,f)}else o.current=null}function Tg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Xn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;Z2(r,e.type,o,s),r[En]=s}catch(f){Xn(e,e.return,f)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=oo));else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Ag(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);To(s,r,o),s[rn]=e,s[En]=o}catch(m){Xn(e,e.return,m)}}var xa=!1,Js=!1,Zf=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,vo=null;function D2(e,s){if(e=e.containerInfo,xh=Ou,e=wn(e),Vn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,q=-1,pe=0,Me=0,ze=e,ye=null;t:for(;;){for(var we;ze!==o||f!==0&&ze.nodeType!==3||(A=v+f),ze!==m||r!==0&&ze.nodeType!==3||(q=v+r),ze.nodeType===3&&(v+=ze.nodeValue.length),(we=ze.firstChild)!==null;)ye=ze,ze=we;for(;;){if(ze===e)break t;if(ye===o&&++pe===f&&(A=v),ye===m&&++Me===r&&(q=v),(we=ze.nextSibling)!==null)break;ze=ye,ye=ze.parentNode}ze=we}o=A===-1||q===-1?null:{start:A,end:q}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},Ou=!1,vo=s;vo!==null;)if(s=vo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,vo=e;else for(;vo!==null;){switch(s=vo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var kt=pr(o.type,f);e=r.getSnapshotBeforeUpdate(kt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Wt){Xn(o,o.return,Wt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,vo=e;break}vo=s.return}}function Ng(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:va(e,o),r&4&&Pl(5,o);break;case 1:if(va(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Xn(o,o.return,v)}else{var f=pr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xn(o,o.return,v)}}r&64&&jg(o),r&512&&Hl(o,o.return);break;case 3:if(va(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{__(e,s)}catch(v){Xn(o,o.return,v)}}break;case 27:s===null&&r&4&&Ag(o);case 26:case 5:va(e,o),s===null&&r&4&&Tg(o),r&512&&Hl(o,o.return);break;case 12:va(e,o);break;case 31:va(e,o),r&4&&Lg(e,o);break;case 13:va(e,o),r&4&&Og(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=P2.bind(null,o),av(e,o))));break;case 22:if(r=o.memoizedState!==null||xa,!r){s=s!==null&&s.memoizedState!==null||Js,f=xa;var m=Js;xa=r,(Js=s)&&!m?wa(e,o,(o.subtreeFlags&8772)!==0):va(e,o),xa=f,Js=m}break;case 30:break;default:va(e,o)}}function Rg(e){var s=e.alternate;s!==null&&(e.alternate=null,Rg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ei(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ts=null,oi=!1;function ba(e,s,o){for(o=o.child;o!==null;)Bg(e,s,o),o=o.sibling}function Bg(e,s,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Qe,o)}catch{}switch(o.tag){case 26:Js||na(o,s),ba(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Js||na(o,s);var r=Ts,f=oi;Ya(o.type)&&(Ts=o.stateNode,oi=!1),ba(e,s,o),Kl(o.stateNode),Ts=r,oi=f;break;case 5:Js||na(o,s);case 6:if(r=Ts,f=oi,Ts=null,ba(e,s,o),Ts=r,oi=f,Ts!==null)if(oi)try{(Ts.nodeType===9?Ts.body:Ts.nodeName==="HTML"?Ts.ownerDocument.body:Ts).removeChild(o.stateNode)}catch(m){Xn(o,s,m)}else try{Ts.removeChild(o.stateNode)}catch(m){Xn(o,s,m)}break;case 18:Ts!==null&&(oi?(e=Ts,j0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),ol(e)):j0(Ts,o.stateNode));break;case 4:r=Ts,f=oi,Ts=o.stateNode.containerInfo,oi=!0,ba(e,s,o),Ts=r,oi=f;break;case 0:case 11:case 14:case 15:za(2,o,s),Js||za(4,o,s),ba(e,s,o);break;case 1:Js||(na(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Mg(o,s,r)),ba(e,s,o);break;case 21:ba(e,s,o);break;case 22:Js=(r=Js)||o.memoizedState!==null,ba(e,s,o),Js=r;break;default:ba(e,s,o)}}function Lg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ol(e)}catch(o){Xn(s,s.return,o)}}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ol(e)}catch(o){Xn(s,s.return,o)}}function N2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Dg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Dg),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=N2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=H2.bind(null,e,r);r.then(f,f)}})}function ii(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){Ts=A.stateNode,oi=!1;break e}break;case 5:Ts=A.stateNode,oi=!1;break e;case 3:case 4:Ts=A.stateNode.containerInfo,oi=!0;break e}A=A.return}if(Ts===null)throw Error(a(160));Bg(m,v,f),Ts=null,oi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)zg(s,e),s=s.sibling}var Yi=null;function zg(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(s,e),ai(e),r&4&&(za(3,e,e.return),Pl(3,e),za(5,e,e.return));break;case 1:ii(s,e),ai(e),r&512&&(Js||o===null||na(o,o.return)),r&64&&xa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Yi;if(ii(s,e),ai(e),r&512&&(Js||o===null||na(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Es]||m[rn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),To(m,r,o),m[rn]=e,kn(m),r=m;break e;case"link":var v=z0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),To(m,r,o),f.head.appendChild(m);break;case"meta":if(v=z0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),To(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[rn]=e,kn(m),r=m}e.stateNode=r}else $0(f,e.type,e.stateNode);else e.stateNode=O0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?$0(f,e.type,e.stateNode):O0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ii(s,e),ai(e),r&512&&(Js||o===null||na(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ii(s,e),ai(e),r&512&&(Js||o===null||na(o,o.return)),e.flags&32){f=e.stateNode;try{Uo(f,"")}catch(kt){Xn(e,e.return,kt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(ii(s,e),ai(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(kt){Xn(e,e.return,kt)}}break;case 3:if(Nu=null,f=Yi,Yi=Au(s.containerInfo),ii(s,e),Yi=f,ai(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{ol(s.containerInfo)}catch(kt){Xn(e,e.return,kt)}Zf&&(Zf=!1,$g(e));break;case 4:r=Yi,Yi=Au(e.stateNode.containerInfo),ii(s,e),ai(e),Yi=r;break;case 12:ii(s,e),ai(e);break;case 31:ii(s,e),ai(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ii(s,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=st()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var q=o!==null&&o.memoizedState!==null,pe=xa,Me=Js;if(xa=pe||f,Js=Me||q,ii(s,e),Js=Me,xa=pe,ai(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||q||xa||Js||_r(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){q=o=s;try{if(m=q.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=q.stateNode;var ze=q.memoizedProps.style,ye=ze!=null&&ze.hasOwnProperty("display")?ze.display:null;A.style.display=ye==null||typeof ye=="boolean"?"":(""+ye).trim()}}catch(kt){Xn(q,q.return,kt)}}}else if(s.tag===6){if(o===null){q=s;try{q.stateNode.nodeValue=f?"":q.memoizedProps}catch(kt){Xn(q,q.return,kt)}}}else if(s.tag===18){if(o===null){q=s;try{var we=q.stateNode;f?M0(we,!0):M0(q.stateNode,!1)}catch(kt){Xn(q,q.return,kt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ii(s,e),ai(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ii(s,e),ai(e)}}function ai(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Eg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Uo(v,""),o.flags&=-33);var A=Kf(e);pu(e,A,v);break;case 3:case 4:var q=o.stateNode.containerInfo,pe=Kf(e);Qf(e,pe,q);break;default:throw Error(a(161))}}catch(Me){Xn(e,e.return,Me)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function $g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;$g(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function va(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Ng(e,s.alternate,s),s=s.sibling}function _r(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:za(4,s,s.return),_r(s);break;case 1:na(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Mg(s,s.return,o),_r(s);break;case 27:Kl(s.stateNode);case 26:case 5:na(s,s.return),_r(s);break;case 22:s.memoizedState===null&&_r(s);break;case 30:_r(s);break;default:_r(s)}e=e.sibling}}function wa(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:wa(f,m,o),Pl(4,m);break;case 1:if(wa(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(pe){Xn(r,r.return,pe)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var q=f.shared.hiddenCallbacks;if(q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<q.length;f++)p_(q[f],A)}catch(pe){Xn(r,r.return,pe)}}o&&v&64&&jg(m),Hl(m,m.return);break;case 27:Ag(m);case 26:case 5:wa(f,m,o),o&&r===null&&v&4&&Tg(m),Hl(m,m.return);break;case 12:wa(f,m,o);break;case 31:wa(f,m,o),o&&v&4&&Lg(f,m);break;case 13:wa(f,m,o),o&&v&4&&Og(f,m);break;case 22:m.memoizedState===null&&wa(f,m,o),Hl(m,m.return);break;case 30:break;default:wa(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Ml(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Ml(e))}function Wi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Ig(e,s,o,r),s=s.sibling}function Ig(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Wi(e,s,o,r),f&2048&&Pl(9,s);break;case 1:Wi(e,s,o,r);break;case 3:Wi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Ml(e)));break;case 12:if(f&2048){Wi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(q){Xn(s,s.return,q)}}else Wi(e,s,o,r);break;case 31:Wi(e,s,o,r);break;case 13:Wi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Wi(e,s,o,r):Ul(e,s):m._visibility&2?Wi(e,s,o,r):(m._visibility|=2,Xr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Wi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Wi(e,s,o,r)}}function Xr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,q=r,pe=v.flags;switch(v.tag){case 0:case 11:case 15:Xr(m,v,A,q,f),Pl(8,v);break;case 23:break;case 22:var Me=v.stateNode;v.memoizedState!==null?Me._visibility&2?Xr(m,v,A,q,f):Ul(m,v):(Me._visibility|=2,Xr(m,v,A,q,f)),f&&pe&2048&&Jf(v.alternate,v);break;case 24:Xr(m,v,A,q,f),f&&pe&2048&&eh(v.alternate,v);break;default:Xr(m,v,A,q,f)}s=s.sibling}}function Ul(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Ul(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Ul(o,r),f&2048&&eh(r.alternate,r);break;default:Ul(o,r)}s=s.sibling}}var Vl=8192;function Gr(e,s,o){if(e.subtreeFlags&Vl)for(e=e.child;e!==null;)Pg(e,s,o),e=e.sibling}function Pg(e,s,o){switch(e.tag){case 26:Gr(e,s,o),e.flags&Vl&&e.memoizedState!==null&&yv(o,Yi,e.memoizedState,e.memoizedProps);break;case 5:Gr(e,s,o);break;case 3:case 4:var r=Yi;Yi=Au(e.stateNode.containerInfo),Gr(e,s,o),Yi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Vl,Vl=16777216,Gr(e,s,o),Vl=r):Gr(e,s,o));break;default:Gr(e,s,o)}}function Hg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Yl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];vo=r,Vg(r,e)}Hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:Yl(e),e.flags&2048&&za(9,e,e.return);break;case 3:Yl(e);break;case 12:Yl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Yl(e);break;default:Yl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];vo=r,Vg(r,e)}Hg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:za(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Vg(e,s){for(;vo!==null;){var o=vo;switch(o.tag){case 0:case 11:case 15:za(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ml(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,vo=r;else e:for(o=e;vo!==null;){r=vo;var f=r.sibling,m=r.return;if(Rg(r),r===o){vo=null;break e}if(f!==null){f.return=m,vo=f;break e}vo=m}}}var R2={getCacheForType:function(e){var s=jo(Ks),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return jo(Ks).controller.signal}},B2=typeof WeakMap=="function"?WeakMap:Map,On=0,as=null,hn=null,_n=0,Fn=0,yi=null,$a=!1,qr=!1,th=!1,Sa=0,Os=0,Ia=0,gr=0,nh=0,xi=0,Kr=0,Wl=null,ri=null,sh=!1,yu=0,Yg=0,xu=1/0,bu=null,Pa=null,lo=0,Ha=null,Qr=null,Ca=0,oh=0,ih=null,Wg=null,Fl=0,ah=null;function bi(){return(On&2)!==0&&_n!==0?_n&-_n:I.T!==null?fh():Tn()}function Fg(){if(xi===0)if((_n&536870912)===0||yn){var e=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),xi=e}else xi=536870912;return e=_i.current,e!==null&&(e.flags|=32),xi}function li(e,s,o){(e===as&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)&&(Zr(e,0),Ua(e,_n,xi,!1)),ct(e,o),((On&2)===0||e!==as)&&(e===as&&((On&2)===0&&(gr|=o),Os===4&&Ua(e,_n,xi,!1)),sa(e))}function Xg(e,s,o){if((On&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||jt(e,s),f=r?z2(e,s):lh(e,s,!0),m=r;do{if(f===0){qr&&!r&&Ua(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!L2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Wl;var q=A.current.memoizedState.isDehydrated;if(q&&(Zr(A,v).flags|=256),v=lh(A,v,!1),v!==2){if(th&&!q){A.errorRecoveryDisabledLanes|=m,gr|=m,f=4;break e}m=ri,ri=f,m!==null&&(ri===null?ri=m:ri.push.apply(ri,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Zr(e,0),Ua(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ua(r,s,xi,!$a);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-st(),10<f)){if(Ua(r,s,xi,!$a),Pe(r,0,!0)!==0)break e;Ca=s,r.timeoutHandle=C0(Gg.bind(null,r,o,ri,bu,sh,s,xi,gr,Kr,$a,m,"Throttled",-0,0),f);break e}Gg(r,o,ri,bu,sh,s,xi,gr,Kr,$a,m,null,-0,0)}}break}while(!0);sa(e)}function Gg(e,s,o,r,f,m,v,A,q,pe,Me,ze,ye,we){if(e.timeoutHandle=-1,ze=s.subtreeFlags,ze&8192||(ze&16785408)===16785408){ze={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oo},Pg(s,m,ze);var kt=(m&62914560)===m?yu-st():(m&4194048)===m?Yg-st():0;if(kt=xv(ze,kt),kt!==null){Ca=m,e.cancelPendingCommit=kt(n0.bind(null,e,s,m,o,r,f,v,A,q,Me,ze,null,ye,we)),Ua(e,m,v,!pe);return}}n0(e,s,m,o,r,f,v,A,q)}function L2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!lt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ua(e,s,o,r){s&=~nh,s&=~gr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-vt(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&xn(e,o,s)}function vu(){return(On&6)===0?(Xl(0),!1):!0}function rh(){if(hn!==null){if(Fn===0)var e=hn.return;else e=hn,ha=lr=null,Sf(e),Ur=null,El=0,e=hn;for(;e!==null;)kg(e.alternate,e),e=e.return;hn=null}}function Zr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,tv(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Ca=0,rh(),as=e,hn=o=da(e.current,null),_n=s,Fn=0,yi=null,$a=!1,qr=jt(e,s),th=!1,Kr=xi=nh=gr=Ia=Os=0,ri=Wl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-vt(r),m=1<<f;s|=e[f],r&=~m}return Sa=s,Uc(),o}function qg(e,s){nn=null,I.H=zl,s===Hr||s===Kc?(s=d_(),Fn=3):s===df?(s=d_(),Fn=4):Fn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,yi=s,hn===null&&(Os=1,uu(e,ji(s,e.current)))}function Kg(){var e=_i.current;return e===null?!0:(_n&4194048)===_n?Ai===null:(_n&62914560)===_n||(_n&536870912)!==0?e===Ai:!1}function Qg(){var e=I.H;return I.H=zl,e===null?zl:e}function Zg(){var e=I.A;return I.A=R2,e}function wu(){Os=4,$a||(_n&4194048)!==_n&&_i.current!==null||(qr=!0),(Ia&134217727)===0&&(gr&134217727)===0||as===null||Ua(as,_n,xi,!1)}function lh(e,s,o){var r=On;On|=2;var f=Qg(),m=Zg();(as!==e||_n!==s)&&(bu=null,Zr(e,s)),s=!1;var v=Os;e:do try{if(Fn!==0&&hn!==null){var A=hn,q=yi;switch(Fn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:_i.current===null&&(s=!0);var pe=Fn;if(Fn=0,yi=null,Jr(e,A,q,pe),o&&qr){v=0;break e}break;default:pe=Fn,Fn=0,yi=null,Jr(e,A,q,pe)}}O2(),v=Os;break}catch(Me){qg(e,Me)}while(!0);return s&&e.shellSuspendCounter++,ha=lr=null,On=r,I.H=f,I.A=m,hn===null&&(as=null,_n=0,Uc()),v}function O2(){for(;hn!==null;)Jg(hn)}function z2(e,s){var o=On;On|=2;var r=Qg(),f=Zg();as!==e||_n!==s?(bu=null,xu=st()+500,Zr(e,s)):qr=jt(e,s);e:do try{if(Fn!==0&&hn!==null){s=hn;var m=yi;t:switch(Fn){case 1:Fn=0,yi=null,Jr(e,s,m,1);break;case 2:case 9:if(c_(m)){Fn=0,yi=null,e0(s);break}s=function(){Fn!==2&&Fn!==9||as!==e||(Fn=7),sa(e)},m.then(s,s);break e;case 3:Fn=7;break e;case 4:Fn=5;break e;case 7:c_(m)?(Fn=0,yi=null,e0(s)):(Fn=0,yi=null,Jr(e,s,m,7));break;case 5:var v=null;switch(hn.tag){case 26:v=hn.memoizedState;case 5:case 27:var A=hn;if(v?I0(v):A.stateNode.complete){Fn=0,yi=null;var q=A.sibling;if(q!==null)hn=q;else{var pe=A.return;pe!==null?(hn=pe,Su(pe)):hn=null}break t}}Fn=0,yi=null,Jr(e,s,m,5);break;case 6:Fn=0,yi=null,Jr(e,s,m,6);break;case 8:rh(),Os=6;break e;default:throw Error(a(462))}}$2();break}catch(Me){qg(e,Me)}while(!0);return ha=lr=null,I.H=r,I.A=f,On=o,hn!==null?0:(as=null,_n=0,Uc(),Os)}function $2(){for(;hn!==null&&!it();)Jg(hn)}function Jg(e){var s=Sg(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,s===null?Su(e):hn=s}function e0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=gg(o,s,s.pendingProps,s.type,void 0,_n);break;case 11:s=gg(o,s,s.pendingProps,s.type.render,s.ref,_n);break;case 5:Sf(s);default:kg(o,s),s=hn=Zp(s,Sa),s=Sg(o,s,Sa)}e.memoizedProps=e.pendingProps,s===null?Su(e):hn=s}function Jr(e,s,o,r){ha=lr=null,Sf(s),Ur=null,El=0;var f=s.return;try{if(j2(e,f,s,o,_n)){Os=1,uu(e,ji(o,e.current)),hn=null;return}}catch(m){if(f!==null)throw hn=f,m;Os=1,uu(e,ji(o,e.current)),hn=null;return}s.flags&32768?(yn||r===1?e=!0:qr||(_n&536870912)!==0?e=!1:($a=e=!0,(r===2||r===9||r===3||r===6)&&(r=_i.current,r!==null&&r.tag===13&&(r.flags|=16384))),t0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){t0(s,$a);return}e=s.return;var o=E2(s.alternate,s,Sa);if(o!==null){hn=o;return}if(s=s.sibling,s!==null){hn=s;return}hn=s=e}while(s!==null);Os===0&&(Os=5)}function t0(e,s){do{var o=A2(e.alternate,e);if(o!==null){o.flags&=32767,hn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){hn=e;return}hn=e=o}while(e!==null);Os=6,hn=null}function n0(e,s,o,r,f,m,v,A,q){e.cancelPendingCommit=null;do Cu();while(lo!==0);if((On&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Bt(e,o,m,v,A,q),e===as&&(hn=as=null,_n=0),Qr=s,Ha=e,Ca=o,oh=m,ih=f,Wg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,U2(ot,function(){return r0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,f=ne.p,ne.p=2,v=On,On|=4;try{D2(e,s,o)}finally{On=v,ne.p=f,I.T=r}}lo=1,s0(),o0(),i0()}}function s0(){if(lo===1){lo=0;var e=Ha,s=Qr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=I.T,I.T=null;var r=ne.p;ne.p=2;var f=On;On|=4;try{zg(s,e);var m=bh,v=wn(e.containerInfo),A=m.focusedElem,q=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&bs(A.ownerDocument.documentElement,A)){if(q!==null&&Vn(A)){var pe=q.start,Me=q.end;if(Me===void 0&&(Me=pe),"selectionStart"in A)A.selectionStart=pe,A.selectionEnd=Math.min(Me,A.value.length);else{var ze=A.ownerDocument||document,ye=ze&&ze.defaultView||window;if(ye.getSelection){var we=ye.getSelection(),kt=A.textContent.length,Wt=Math.min(q.start,kt),ts=q.end===void 0?Wt:Math.min(q.end,kt);!we.extend&&Wt>ts&&(v=ts,ts=Wt,Wt=v);var ce=Qn(A,Wt),ee=Qn(A,ts);if(ce&&ee&&(we.rangeCount!==1||we.anchorNode!==ce.node||we.anchorOffset!==ce.offset||we.focusNode!==ee.node||we.focusOffset!==ee.offset)){var he=ze.createRange();he.setStart(ce.node,ce.offset),we.removeAllRanges(),Wt>ts?(we.addRange(he),we.extend(ee.node,ee.offset)):(he.setEnd(ee.node,ee.offset),we.addRange(he))}}}}for(ze=[],we=A;we=we.parentNode;)we.nodeType===1&&ze.push({element:we,left:we.scrollLeft,top:we.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ze.length;A++){var Be=ze[A];Be.element.scrollLeft=Be.left,Be.element.scrollTop=Be.top}}Ou=!!xh,bh=xh=null}finally{On=f,ne.p=r,I.T=o}}e.current=s,lo=2}}function o0(){if(lo===2){lo=0;var e=Ha,s=Qr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=I.T,I.T=null;var r=ne.p;ne.p=2;var f=On;On|=4;try{Ng(e,s.alternate,s)}finally{On=f,ne.p=r,I.T=o}}lo=3}}function i0(){if(lo===4||lo===3){lo=0,Ne();var e=Ha,s=Qr,o=Ca,r=Wg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?lo=5:(lo=0,Qr=Ha=null,a0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Pa=null),Yn(o),s=s.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Qe,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=I.T,f=ne.p,ne.p=2,I.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{I.T=s,ne.p=f}}(Ca&3)!==0&&Cu(),sa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Fl++:(Fl=0,ah=e):Fl=0,Xl(0)}}function a0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Ml(s)))}function Cu(){return s0(),o0(),i0(),r0()}function r0(){if(lo!==5)return!1;var e=Ha,s=oh;oh=0;var o=Yn(Ca),r=I.T,f=ne.p;try{ne.p=32>o?32:o,I.T=null,o=ih,ih=null;var m=Ha,v=Ca;if(lo=0,Qr=Ha=null,Ca=0,(On&6)!==0)throw Error(a(331));var A=On;if(On|=4,Ug(m.current),Ig(m,m.current,v,o),On=A,Xl(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Qe,m)}catch{}return!0}finally{ne.p=f,I.T=r,a0(e,s)}}function l0(e,s,o){s=ji(o,s),s=$f(e.stateNode,s,2),e=Ba(e,s,2),e!==null&&(ct(e,2),sa(e))}function Xn(e,s,o){if(e.tag===3)l0(e,e,o);else for(;s!==null;){if(s.tag===3){l0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pa===null||!Pa.has(r))){e=ji(o,e),o=cg(2),r=Ba(s,o,2),r!==null&&(ug(o,r,s,e),ct(r,2),sa(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new B2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=I2.bind(null,e,s,o),s.then(e,e))}function I2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,as===e&&(_n&o)===o&&(Os===4||Os===3&&(_n&62914560)===_n&&300>st()-yu?(On&2)===0&&Zr(e,0):nh|=o,Kr===_n&&(Kr=0)),sa(e)}function c0(e,s){s===0&&(s=_t()),e=ir(e,s),e!==null&&(ct(e,s),sa(e))}function P2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),c0(e,o)}function H2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),c0(e,o)}function U2(e,s){return We(e,s)}var ku=null,el=null,uh=!1,ju=!1,dh=!1,Va=0;function sa(e){e!==el&&e.next===null&&(el===null?ku=el=e:el=el.next=e),ju=!0,uh||(uh=!0,Y2())}function Xl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-vt(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,h0(r,m))}else m=_n,m=Pe(r,r===as?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||jt(r,m)||(o=!0,h0(r,m));r=r.next}while(o);dh=!1}}function V2(){u0()}function u0(){ju=uh=!1;var e=0;Va!==0&&ev()&&(e=Va);for(var s=st(),o=null,r=ku;r!==null;){var f=r.next,m=d0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(el=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}lo!==0&&lo!==5||Xl(e),Va!==0&&(Va=0)}function d0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-vt(m),A=1<<v,q=f[v];q===-1?((A&o)===0||(A&r)!==0)&&(f[v]=Mt(A,s)):q<=s&&(e.expiredLanes|=A),m&=~A}if(s=as,o=_n,o=Pe(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ue(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||jt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Ue(r),Yn(o)){case 2:case 8:o=xt;break;case 32:o=ot;break;case 268435456:o=te;break;default:o=ot}return r=f0.bind(null,e),o=We(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Ue(r),e.callbackPriority=2,e.callbackNode=null,2}function f0(e,s){if(lo!==0&&lo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=_n;return r=Pe(e,e===as?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Xg(e,r,s),d0(e,st()),e.callbackNode!=null&&e.callbackNode===o?f0.bind(null,e):null)}function h0(e,s){if(Cu())return null;Xg(e,s,!0)}function Y2(){nv(function(){(On&6)!==0?We(yt,V2):u0()})}function fh(){if(Va===0){var e=Ir;e===0&&(e=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Va=e}return Va}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pn(""+e)}function p0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function W2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=m0((f[En]||null).action),v=r.submitter;v&&(s=(s=v[En]||null)?m0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new Fo("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var q=v?p0(f,v):new FormData(f);Nf(o,{pending:!0,data:q,method:f.method,action:m},null,q)}}else typeof m=="function"&&(A.preventDefault(),q=v?p0(f,v):new FormData(f),Nf(o,{pending:!0,data:q,method:f.method,action:m},m,q))},currentTarget:f}]})}}for(var hh=0;hh<Gd.length;hh++){var mh=Gd[hh],F2=mh.toLowerCase(),X2=mh[0].toUpperCase()+mh.slice(1);Vi(F2,"on"+X2)}Vi(Ui,"onAnimationEnd"),Vi(Ji,"onAnimationIteration"),Vi(Pc,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(Wd,"onTransitionRun"),Vi(Fd,"onTransitionStart"),Vi(Xd,"onTransitionCancel"),Vi(qp,"onTransitionEnd"),us("onMouseEnter",["mouseout","mouseover"]),us("onMouseLeave",["mouseout","mouseover"]),us("onPointerEnter",["pointerout","pointerover"]),us("onPointerLeave",["pointerout","pointerover"]),As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),As("onBeforeInput",["compositionend","keypress","textInput","paste"]),As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function _0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],q=A.instance,pe=A.currentTarget;if(A=A.listener,q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=pe;try{m(f)}catch(Me){Hc(Me)}f.currentTarget=null,m=q}else for(v=0;v<r.length;v++){if(A=r[v],q=A.instance,pe=A.currentTarget,A=A.listener,q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=pe;try{m(f)}catch(Me){Hc(Me)}f.currentTarget=null,m=q}}}}function mn(e,s){var o=s[ln];o===void 0&&(o=s[ln]=new Set);var r=e+"__bubble";o.has(r)||(g0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),g0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,ti.forEach(function(o){o!=="selectionchange"&&(G2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function g0(e,s,o,r){switch(F0(s)){case 2:var f=wv;break;case 8:f=Sv;break;default:f=Dh}o=f.bind(null,s,o,e),f=void 0,!io||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var q=v.tag;if((q===3||q===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=Cs(A),v===null)return;if(q=v.tag,q===5||q===6||q===26||q===27){r=m=v;continue e}A=A.parentNode}}r=r.return}Gs(function(){var pe=m,Me=mo(o),ze=[];e:{var ye=Kp.get(e);if(ye!==void 0){var we=Fo,kt=e;switch(e){case"keypress":if(Hs(o)===0)break e;case"keydown":case"keyup":we=yo;break;case"focusin":kt="focus",we=be;break;case"focusout":kt="blur",we=be;break;case"beforeblur":case"afterblur":we=be;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":we=Oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":we=G;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":we=ua;break;case Ui:case Ji:case Pc:we=Ke;break;case qp:we=$;break;case"scroll":case"scrollend":we=Rs;break;case"wheel":we=se;break;case"copy":case"cut":case"paste":we=Vt;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":we=Xo;break;case"toggle":case"beforetoggle":we=Je}var Wt=(s&4)!==0,ts=!Wt&&(e==="scroll"||e==="scrollend"),ce=Wt?ye!==null?ye+"Capture":null:ye;Wt=[];for(var ee=pe,he;ee!==null;){var Be=ee;if(he=Be.stateNode,Be=Be.tag,Be!==5&&Be!==26&&Be!==27||he===null||ce===null||(Be=sn(ee,ce),Be!=null&&Wt.push(ql(ee,Be,he))),ts)break;ee=ee.return}0<Wt.length&&(ye=new we(ye,kt,null,o,Me),ze.push({event:ye,listeners:Wt}))}}if((s&7)===0){e:{if(ye=e==="mouseover"||e==="pointerover",we=e==="mouseout"||e==="pointerout",ye&&o!==Vo&&(kt=o.relatedTarget||o.fromElement)&&(Cs(kt)||kt[nt]))break e;if((we||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,we?(kt=o.relatedTarget||o.toElement,we=pe,kt=kt?Cs(kt):null,kt!==null&&(ts=u(kt),Wt=kt.tag,kt!==ts||Wt!==5&&Wt!==27&&Wt!==6)&&(kt=null)):(we=null,kt=pe),we!==kt)){if(Wt=Oo,Be="onMouseLeave",ce="onMouseEnter",ee="mouse",(e==="pointerout"||e==="pointerover")&&(Wt=Xo,Be="onPointerLeave",ce="onPointerEnter",ee="pointer"),ts=we==null?ye:so(we),he=kt==null?ye:so(kt),ye=new Wt(Be,ee+"leave",we,o,Me),ye.target=ts,ye.relatedTarget=he,Be=null,Cs(Me)===pe&&(Wt=new Wt(ce,ee+"enter",kt,o,Me),Wt.target=he,Wt.relatedTarget=ts,Be=Wt),ts=Be,we&&kt)t:{for(Wt=q2,ce=we,ee=kt,he=0,Be=ce;Be;Be=Wt(Be))he++;Be=0;for(var Pt=ee;Pt;Pt=Wt(Pt))Be++;for(;0<he-Be;)ce=Wt(ce),he--;for(;0<Be-he;)ee=Wt(ee),Be--;for(;he--;){if(ce===ee||ee!==null&&ce===ee.alternate){Wt=ce;break t}ce=Wt(ce),ee=Wt(ee)}Wt=null}else Wt=null;we!==null&&y0(ze,ye,we,Wt,!1),kt!==null&&ts!==null&&y0(ze,ts,kt,Wt,!0)}}e:{if(ye=pe?so(pe):window,we=ye.nodeName&&ye.nodeName.toLowerCase(),we==="select"||we==="input"&&ye.type==="file")var Dn=E;else if(Bs(ye))if(N)Dn=Tt;else{Dn=ut;var Rt=Xe}else we=ye.nodeName,!we||we.toLowerCase()!=="input"||ye.type!=="checkbox"&&ye.type!=="radio"?pe&&Ln(pe.elementType)&&(Dn=E):Dn=St;if(Dn&&(Dn=Dn(e,pe))){qs(ze,Dn,o,Me);break e}Rt&&Rt(e,ye,pe),e==="focusout"&&pe&&ye.type==="number"&&pe.memoizedProps.value!=null&&Xs(ye,"number",ye.value)}switch(Rt=pe?so(pe):window,e){case"focusin":(Bs(Rt)||Rt.contentEditable==="true")&&(Gt=Rt,vs=pe,Mn=null);break;case"focusout":Mn=vs=Gt=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,$o(ze,o,Me);break;case"selectionchange":if(Xt)break;case"keydown":case"keyup":$o(ze,o,Me)}var on;if(mt)e:{switch(e){case"compositionstart":var gn="onCompositionStart";break e;case"compositionend":gn="onCompositionEnd";break e;case"compositionupdate":gn="onCompositionUpdate";break e}gn=void 0}else cn?Ft(e,o)&&(gn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(gn="onCompositionStart");gn&&(Us&&o.locale!=="ko"&&(cn||gn!=="onCompositionStart"?gn==="onCompositionEnd"&&cn&&(on=Wo()):(ms=Me,po="value"in ms?ms.value:ms.textContent,cn=!0)),Rt=Tu(pe,gn),0<Rt.length&&(gn=new Fe(gn,e,null,o,Me),ze.push({event:gn,listeners:Rt}),on?gn.data=on:(on=an(o),on!==null&&(gn.data=on)))),(on=ps?Ms(e,o):Co(e,o))&&(gn=Tu(pe,"onBeforeInput"),0<gn.length&&(Rt=new Fe("onBeforeInput","beforeinput",null,o,Me),ze.push({event:Rt,listeners:gn}),Rt.data=on)),W2(ze,e,pe,o,Me)}_0(ze,s)})}function ql(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Tu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=sn(e,o),f!=null&&r.unshift(ql(e,f,m)),f=sn(e,s),f!=null&&r.push(ql(e,f,m))),e.tag===3)return r;e=e.return}return[]}function q2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,q=A.alternate,pe=A.stateNode;if(A=A.tag,q!==null&&q===r)break;A!==5&&A!==26&&A!==27||pe===null||(q=pe,f?(pe=sn(o,m),pe!=null&&v.unshift(ql(o,pe,q))):f||(pe=sn(o,m),pe!=null&&v.push(ql(o,pe,q)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var K2=/\r\n?/g,Q2=/\u0000|\uFFFD/g;function x0(e){return(typeof e=="string"?e:""+e).replace(K2,`
`).replace(Q2,"")}function b0(e,s){return s=x0(s),x0(e)===s}function es(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Uo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Uo(e,""+r);break;case"className":os(e,"class",r);break;case"tabIndex":os(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":os(e,o,r);break;case"style":$i(e,r,m);break;case"data":if(s!=="object"){os(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Pn(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&es(e,s,"name",f.name,f,null),es(e,s,"formEncType",f.formEncType,f,null),es(e,s,"formMethod",f.formMethod,f,null),es(e,s,"formTarget",f.formTarget,f,null)):(es(e,s,"encType",f.encType,f,null),es(e,s,"method",f.method,f,null),es(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Pn(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=oo);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Pn(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":mn("beforetoggle",e),mn("toggle",e),An(e,"popover",r);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":An(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Si.get(o)||o,An(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":$i(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Uo(e,r):(typeof r=="number"||typeof r=="bigint")&&Uo(e,""+r);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=oo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Is.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[En]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):An(e,o,r)}}}function To(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mn("error",e),mn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:es(e,s,m,v,o,null)}}f&&es(e,s,"srcSet",o.srcSet,o,null),r&&es(e,s,"src",o.src,o,null);return;case"input":mn("invalid",e);var A=m=v=f=null,q=null,pe=null;for(r in o)if(o.hasOwnProperty(r)){var Me=o[r];if(Me!=null)switch(r){case"name":f=Me;break;case"type":v=Me;break;case"checked":q=Me;break;case"defaultChecked":pe=Me;break;case"value":m=Me;break;case"defaultValue":A=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(a(137,s));break;default:es(e,s,r,Me,o,null)}}In(e,m,A,q,pe,v,f,!1);return;case"select":mn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:es(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?fs(e,!!r,s,!1):o!=null&&fs(e,!!r,o,!0);return;case"textarea":mn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:es(e,s,v,A,o,null)}zi(e,r,f,m);return;case"option":for(q in o)if(o.hasOwnProperty(q)&&(r=o[q],r!=null))switch(q){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:es(e,s,q,r,o,null)}return;case"dialog":mn("beforetoggle",e),mn("toggle",e),mn("cancel",e),mn("close",e);break;case"iframe":case"object":mn("load",e);break;case"video":case"audio":for(r=0;r<Gl.length;r++)mn(Gl[r],e);break;case"image":mn("error",e),mn("load",e);break;case"details":mn("toggle",e);break;case"embed":case"source":case"link":mn("error",e),mn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(pe in o)if(o.hasOwnProperty(pe)&&(r=o[pe],r!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:es(e,s,pe,r,o,null)}return;default:if(Ln(s)){for(Me in o)o.hasOwnProperty(Me)&&(r=o[Me],r!==void 0&&yh(e,s,Me,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&es(e,s,A,r,o,null))}function Z2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,q=null,pe=null,Me=null;for(we in o){var ze=o[we];if(o.hasOwnProperty(we)&&ze!=null)switch(we){case"checked":break;case"value":break;case"defaultValue":q=ze;default:r.hasOwnProperty(we)||es(e,s,we,null,r,ze)}}for(var ye in r){var we=r[ye];if(ze=o[ye],r.hasOwnProperty(ye)&&(we!=null||ze!=null))switch(ye){case"type":m=we;break;case"name":f=we;break;case"checked":pe=we;break;case"defaultChecked":Me=we;break;case"value":v=we;break;case"defaultValue":A=we;break;case"children":case"dangerouslySetInnerHTML":if(we!=null)throw Error(a(137,s));break;default:we!==ze&&es(e,s,ye,we,r,ze)}}wo(e,v,A,q,pe,Me,m,f);return;case"select":we=v=A=ye=null;for(m in o)if(q=o[m],o.hasOwnProperty(m)&&q!=null)switch(m){case"value":break;case"multiple":we=q;default:r.hasOwnProperty(m)||es(e,s,m,null,r,q)}for(f in r)if(m=r[f],q=o[f],r.hasOwnProperty(f)&&(m!=null||q!=null))switch(f){case"value":ye=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==q&&es(e,s,f,m,r,q)}s=A,o=v,r=we,ye!=null?fs(e,!!o,ye,!1):!!r!=!!o&&(s!=null?fs(e,!!o,s,!0):fs(e,!!o,o?[]:"",!1));return;case"textarea":we=ye=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:es(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ye=f;break;case"defaultValue":we=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&es(e,s,v,f,r,m)}hs(e,ye,we);return;case"option":for(var kt in o)if(ye=o[kt],o.hasOwnProperty(kt)&&ye!=null&&!r.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:es(e,s,kt,null,r,ye)}for(q in r)if(ye=r[q],we=o[q],r.hasOwnProperty(q)&&ye!==we&&(ye!=null||we!=null))switch(q){case"selected":e.selected=ye&&typeof ye!="function"&&typeof ye!="symbol";break;default:es(e,s,q,ye,r,we)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in o)ye=o[Wt],o.hasOwnProperty(Wt)&&ye!=null&&!r.hasOwnProperty(Wt)&&es(e,s,Wt,null,r,ye);for(pe in r)if(ye=r[pe],we=o[pe],r.hasOwnProperty(pe)&&ye!==we&&(ye!=null||we!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(a(137,s));break;default:es(e,s,pe,ye,r,we)}return;default:if(Ln(s)){for(var ts in o)ye=o[ts],o.hasOwnProperty(ts)&&ye!==void 0&&!r.hasOwnProperty(ts)&&yh(e,s,ts,void 0,r,ye);for(Me in r)ye=r[Me],we=o[Me],!r.hasOwnProperty(Me)||ye===we||ye===void 0&&we===void 0||yh(e,s,Me,ye,r,we);return}}for(var ce in o)ye=o[ce],o.hasOwnProperty(ce)&&ye!=null&&!r.hasOwnProperty(ce)&&es(e,s,ce,null,r,ye);for(ze in r)ye=r[ze],we=o[ze],!r.hasOwnProperty(ze)||ye===we||ye==null&&we==null||es(e,s,ze,ye,r,we)}function v0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&v0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var q=o[r],pe=q.startTime;if(pe>A)break;var Me=q.transferSize,ze=q.initiatorType;Me&&v0(ze)&&(q=q.responseEnd,v+=Me*(q<A?1:(A-pe)/(q-pe)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Eu(e){return e.nodeType===9?e:e.ownerDocument}function w0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function ev(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(e){return k0.resolve(null).then(e).catch(sv)}:C0;function sv(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function j0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),ol(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Kl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Kl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[Es]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Kl(e.ownerDocument.body);o=f}while(o);ol(s)}function M0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),ei(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function ov(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Es])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function iv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Di(e.nextSibling),e===null))return null;return e}function T0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Di(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function av(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Di(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function E0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Di(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function A0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function D0(e,s,o){switch(s=Eu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Kl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ei(e)}var Ni=new Map,N0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=ne.d;ne.d={f:rv,r:lv,D:cv,C:uv,L:dv,m:fv,X:mv,S:hv,M:pv};function rv(){var e=ka.f(),s=vu();return e||s}function lv(e){var s=uo(e);s!==null&&s.tag===5&&s.type==="form"?q_(s):ka.r(e)}var tl=typeof document>"u"?null:document;function R0(e,s,o){var r=tl;if(r&&typeof s=="string"&&s){var f=ys(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),N0.has(f)||(N0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),To(s,"link",e),kn(s),r.head.appendChild(s)))}}function cv(e){ka.D(e),R0("dns-prefetch",e,null)}function uv(e,s){ka.C(e,s),R0("preconnect",e,s)}function dv(e,s,o){ka.L(e,s,o);var r=tl;if(r&&e&&s){var f='link[rel="preload"][as="'+ys(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+ys(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+ys(o.imageSizes)+'"]')):f+='[href="'+ys(e)+'"]';var m=f;switch(s){case"style":m=nl(e);break;case"script":m=sl(e)}Ni.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Ni.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Ql(m))||s==="script"&&r.querySelector(Zl(m))||(s=r.createElement("link"),To(s,"link",e),kn(s),r.head.appendChild(s)))}}function fv(e,s){ka.m(e,s);var o=tl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+ys(r)+'"][href="'+ys(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=sl(e)}if(!Ni.has(m)&&(e=x({rel:"modulepreload",href:e},s),Ni.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zl(m)))return}r=o.createElement("link"),To(r,"link",e),kn(r),o.head.appendChild(r)}}}function hv(e,s,o){ka.S(e,s,o);var r=tl;if(r&&e){var f=fo(r).hoistableStyles,m=nl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Ql(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Ni.get(m))&&Mh(e,o);var q=v=r.createElement("link");kn(q),To(q,"link",e),q._p=new Promise(function(pe,Me){q.onload=pe,q.onerror=Me}),q.addEventListener("load",function(){A.loading|=1}),q.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Du(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function mv(e,s){ka.X(e,s);var o=tl;if(o&&e){var r=fo(o).hoistableScripts,f=sl(e),m=r.get(f);m||(m=o.querySelector(Zl(f)),m||(e=x({src:e,async:!0},s),(s=Ni.get(f))&&Th(e,s),m=o.createElement("script"),kn(m),To(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function pv(e,s){ka.M(e,s);var o=tl;if(o&&e){var r=fo(o).hoistableScripts,f=sl(e),m=r.get(f);m||(m=o.querySelector(Zl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Ni.get(f))&&Th(e,s),m=o.createElement("script"),kn(m),To(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function B0(e,s,o,r){var f=(f=Oe.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=nl(o.href),o=fo(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=nl(o.href);var m=fo(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Ql(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Ni.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ni.set(e,o),m||_v(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=sl(o),o=fo(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function nl(e){return'href="'+ys(e)+'"'}function Ql(e){return'link[rel="stylesheet"]['+e+"]"}function L0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function _v(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),To(s,"link",o),kn(s),e.head.appendChild(s))}function sl(e){return'[src="'+ys(e)+'"]'}function Zl(e){return"script[async]"+e}function O0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+ys(o.href)+'"]');if(r)return s.instance=r,kn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),kn(r),To(r,"style",f),Du(r,o.precedence,e),s.instance=r;case"stylesheet":f=nl(o.href);var m=e.querySelector(Ql(f));if(m)return s.state.loading|=4,s.instance=m,kn(m),m;r=L0(o),(f=Ni.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),kn(m);var v=m;return v._p=new Promise(function(A,q){v.onload=A,v.onerror=q}),To(m,"link",r),s.state.loading|=4,Du(m,o.precedence,e),s.instance=m;case"script":return m=sl(o.src),(f=e.querySelector(Zl(m)))?(s.instance=f,kn(f),f):(r=o,(f=Ni.get(m))&&(r=x({},o),Th(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),kn(f),To(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Du(r,o.precedence,e));return s.instance}function Du(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Th(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Nu=null;function z0(e,s,o){if(Nu===null){var r=new Map,f=Nu=new Map;f.set(o,r)}else f=Nu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Es]||m[rn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function $0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function gv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function I0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=nl(r.href),m=s.querySelector(Ql(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,kn(m);return}m=s.ownerDocument||s,r=L0(r),(f=Ni.get(f))&&Mh(r,f),m=m.createElement("link"),kn(m);var v=m;v._p=new Promise(function(A,q){v.onload=A,v.onerror=q}),To(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Eh=0;function xv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Eh===0&&(Eh=62500*J2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Eh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(bv,e),Bu=null,Ru.call(e))}function bv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Jl={$$typeof:L,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function vv(e,s,o,r,f,m,v,A,q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=en(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=en(0),this.hiddenUpdates=en(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function P0(e,s,o,r,f,m,v,A,q,pe,Me,ze){return e=new vv(e,s,o,v,q,pe,Me,ze,A),s=1,m===!0&&(s|=24),m=pi(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function H0(e){return e?(e=Br,e):Br}function U0(e,s,o,r,f,m){f=H0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ra(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ba(e,r,s),o!==null&&(li(o,e,s),Dl(o,e,s))}function V0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){V0(e,s),(e=e.alternate)&&V0(e,s)}function Y0(e){if(e.tag===13||e.tag===31){var s=ir(e,67108864);s!==null&&li(s,e,67108864),Ah(e,67108864)}}function W0(e){if(e.tag===13||e.tag===31){var s=bi();s=ls(s);var o=ir(e,s);o!==null&&li(o,e,s),Ah(e,s)}}var Ou=!0;function wv(e,s,o,r){var f=I.T;I.T=null;var m=ne.p;try{ne.p=2,Dh(e,s,o,r)}finally{ne.p=m,I.T=f}}function Sv(e,s,o,r){var f=I.T;I.T=null;var m=ne.p;try{ne.p=8,Dh(e,s,o,r)}finally{ne.p=m,I.T=f}}function Dh(e,s,o,r){if(Ou){var f=Nh(r);if(f===null)gh(e,s,r,zu,o),X0(e,r);else if(kv(f,e,s,o,r))r.stopPropagation();else if(X0(e,r),s&4&&-1<Cv.indexOf(e)){for(;f!==null;){var m=uo(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=dt(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var q=1<<31-vt(v);A.entanglements[1]|=q,v&=~q}sa(m),(On&6)===0&&(xu=st()+500,Xl(0))}}break;case 31:case 13:A=ir(m,2),A!==null&&li(A,m,2),vu(),Ah(m,2)}if(m=Nh(r),m===null&&gh(e,s,r,zu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Nh(e){return e=mo(e),Rh(e)}var zu=null;function Rh(e){if(zu=null,e=Cs(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function F0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case yt:return 2;case xt:return 8;case ot:case H:return 32;case te:return 268435456;default:return 32}default:return 32}}var Bh=!1,Wa=null,Fa=null,Xa=null,ec=new Map,tc=new Map,Ga=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(e,s){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":ec.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":tc.delete(s.pointerId)}}function nc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=uo(s),s!==null&&Y0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function kv(e,s,o,r,f){switch(s){case"focusin":return Wa=nc(Wa,e,s,o,r,f),!0;case"dragenter":return Fa=nc(Fa,e,s,o,r,f),!0;case"mouseover":return Xa=nc(Xa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return ec.set(m,nc(ec.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,tc.set(m,nc(tc.get(m)||null,e,s,o,r,f)),!0}return!1}function G0(e){var s=Cs(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,Cn(e.priority,function(){W0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,Cn(e.priority,function(){W0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Nh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Vo=r,o.target.dispatchEvent(r),Vo=null}else return s=uo(o),s!==null&&Y0(s),e.blockedOn=o,!1;s.shift()}return!0}function q0(e,s,o){$u(e)&&o.delete(s)}function jv(){Bh=!1,Wa!==null&&$u(Wa)&&(Wa=null),Fa!==null&&$u(Fa)&&(Fa=null),Xa!==null&&$u(Xa)&&(Xa=null),ec.forEach(q0),tc.forEach(q0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jv)))}var Pu=null;function K0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=uo(o);m!==null&&(e.splice(s,3),s-=3,Nf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function ol(e){function s(q){return Iu(q,e)}Wa!==null&&Iu(Wa,e),Fa!==null&&Iu(Fa,e),Xa!==null&&Iu(Xa,e),ec.forEach(s),tc.forEach(s);for(var o=0;o<Ga.length;o++){var r=Ga[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ga.length&&(o=Ga[0],o.blockedOn===null);)G0(o),o.blockedOn===null&&Ga.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[En]||null;if(typeof m=="function")v||K0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[En]||null)A=v.formAction;else if(Rh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),K0(o)}}}function Q0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=bi();U0(o,r,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;U0(e.current,2,null,e,null,null),vu(),s[nt]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=Tn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Ga.length&&s!==0&&s<Ga[o].priority;o++);Ga.splice(o,0,e),o===0&&G0(e)}};var Z0=n.version;if(Z0!=="19.2.4")throw Error(a(527,Z0,"19.2.4"));ne.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=_(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Mv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Qe=Uu.inject(Mv),Ge=Uu}catch{}}return oc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ig,m=ag,v=rg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=P0(e,1,!1,null,null,o,r,null,f,m,v,Q0),e[nt]=s.current,_h(e),new Lh(s)},oc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ig,v=ag,A=rg,q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(q=o.formState)),s=P0(e,1,!0,s,o!=null?o:null,r,f,q,m,v,A,Q0),s.context=H0(null),o=s.current,r=bi(),r=ls(r),f=Ra(r),f.callback=null,Ba(o,f,r),o=r,s.current.lanes=o,ct(s,o),sa(s),e[nt]=s.current,_h(e),new Hu(s)},oc.version="19.2.4",oc}var ly;function Ov(){if(ly)return zh.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=Lv(),zh.exports}var zv=Ov();const $v=Rx(zv);var y=cp();const Iv=Rx(y);function Pv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Hv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const Oi="__TAURI_TO_IPC_KEY__";function Uv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function Se(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Vv{get rid(){return Pv(this,hd,"f")}constructor(n){hd.set(this,void 0),Hv(this,hd,n)}async close(){return Se("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var vi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(vi||(vi={}));async function Lx(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await Se("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Se("plugin:event|listen",{event:t,target:c,handler:Uv(n)}).then(u=>async()=>Lx(t,u))}async function Yv(t,n,i){return yc(t,a=>{Lx(t,a.id),n(a)},i)}async function Wv(t,n){await Se("plugin:event|emit",{event:t,payload:n})}async function Fv(t,n,i){await Se("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Ox{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[Oi](){return{width:this.width,height:this.height}}toJSON(){return this[Oi]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Ox(this.width/n,this.height/n)}[Oi](){return{width:this.width,height:this.height}}toJSON(){return this[Oi]()}}class il{constructor(n){this.size=n}toLogical(n){return this.size instanceof Ox?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[Oi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Oi]()}}class zx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new er(this.x*n,this.y*n)}[Oi](){return{x:this.x,y:this.y}}toJSON(){return this[Oi]()}}class er{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new zx(this.x/n,this.y/n)}[Oi](){return{x:this.x,y:this.y}}toJSON(){return this[Oi]()}}class Vu{constructor(n){this.position=n}toLogical(n){return this.position instanceof zx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof er?this.position:this.position.toPhysical(n)}[Oi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Oi]()}}class bc extends Vv{constructor(n){super(n)}static async new(n,i,a){return Se("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return Se("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new bc(i))}static async fromPath(n){return Se("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return Se("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Se("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Mm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Mm||(Mm={}));class Xv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var cy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(cy||(cy={}));function $x(){return new Ix(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Uh(){return Se("plugin:window|get_all_windows").then(t=>t.map(n=>new Ix(n,{skip:!0})))}const Vh=["tauri://created","tauri://error"];class Ix{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Se("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Uh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return $x()}static async getAll(){return Uh()}static async getFocusedWindow(){for(const n of await Uh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Yv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Vh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Wv(n,i)}async emitTo(n,i,a){if(Vh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Fv(n,i,a)}_handleTauriEvent(n,i){return Vh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Se("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Se("plugin:window|inner_position",{label:this.label}).then(n=>new er(n))}async outerPosition(){return Se("plugin:window|outer_position",{label:this.label}).then(n=>new er(n))}async innerSize(){return Se("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return Se("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return Se("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Se("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Se("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Se("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Se("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Se("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Se("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Se("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Se("plugin:window|is_closable",{label:this.label})}async isVisible(){return Se("plugin:window|is_visible",{label:this.label})}async title(){return Se("plugin:window|title",{label:this.label})}async theme(){return Se("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Se("plugin:window|is_always_on_top",{label:this.label})}async center(){return Se("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Mm.Critical?i={type:"Critical"}:i={type:"Informational"}),Se("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Se("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Se("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Se("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Se("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Se("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Se("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Se("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Se("plugin:window|maximize",{label:this.label})}async unmaximize(){return Se("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Se("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Se("plugin:window|minimize",{label:this.label})}async unminimize(){return Se("plugin:window|unminimize",{label:this.label})}async show(){return Se("plugin:window|show",{label:this.label})}async hide(){return Se("plugin:window|hide",{label:this.label})}async close(){return Se("plugin:window|close",{label:this.label})}async destroy(){return Se("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Se("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Se("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Se("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Se("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Se("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Se("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Se("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Se("plugin:window|set_size",{label:this.label,value:n instanceof il?n:new il(n)})}async setMinSize(n){return Se("plugin:window|set_min_size",{label:this.label,value:n instanceof il?n:n?new il(n):null})}async setMaxSize(n){return Se("plugin:window|set_max_size",{label:this.label,value:n instanceof il?n:n?new il(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Se("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Se("plugin:window|set_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setFullscreen(n){return Se("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Se("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Se("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Se("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Se("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return Se("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Se("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Se("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Se("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Se("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Se("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setIgnoreCursorEvents(n){return Se("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Se("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Se("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Se("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Se("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Se("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return Se("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Se("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Se("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Se("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(vi.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(vi.WINDOW_MOVED,i=>{i.payload=new er(i.payload),n(i)})}async onCloseRequested(n){return this.listen(vi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Xv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(vi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new er(d.payload.position)}})}),a=await this.listen(vi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new er(d.payload.position)}})}),c=await this.listen(vi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new er(d.payload.position)}})}),u=await this.listen(vi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(vi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(vi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(vi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(vi.WINDOW_THEME_CHANGED,n)}}var uy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(uy||(uy={}));var dy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(dy||(dy={}));var fy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(fy||(fy={}));var hy;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(hy||(hy={}));async function Gv(t={}){return typeof t=="object"&&Object.freeze(t),await Se("plugin:dialog|open",{options:t})}/**
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
 */const my=t=>{const n=Kv(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
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
 */const Jv=y.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>y.createElement("svg",{ref:p,...Qv,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Px("lucide",c),...!u&&!Zv(h)&&{"aria-hidden":"true"},...h},[...d.map(([_,g])=>y.createElement(_,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=(t,n)=>{const i=y.forwardRef(({className:a,...c},u)=>y.createElement(Jv,{ref:u,iconNode:n,className:Px(`lucide-${qv(my(t))}`,`lucide-${t}`,a),...c}));return i.displayName=my(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Hx=xl("chevron-down",ew);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],nw=xl("chevron-up",tw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],ow=xl("ellipsis",sw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],aw=xl("panel-left-close",iw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],lw=xl("panel-left-open",rw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],uw=xl("search",cw),dw=3.7,Yu=200,Tm=240,_s=540,zs=176,Yh=32,bl=20,fw=Tm/2,ic=_s+fw,yr=18,xr=18,Wh="#E6E6E6";function py(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function jr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ja(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ja(t).localeCompare(ja(n))}function Ux(t){return[...t].sort(_c)}function hw(t){var h,p,_,g,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ja(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ja(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=ja(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const j=(_=a.get(w))!=null?_:[];j.push(b),a.set(w,j)}for(const b of a.values())b.sort(_c);const c=t.filter(b=>{var w;return((w=i.get(ja(b)))!=null?w:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=ja(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(g=a.get(w))!=null?g:[]){const j=ja(S),k=((x=i.get(j))!=null?x:0)-1;i.set(j,k),k===0&&c.push(S)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ja(b))).sort(_c)]}function Vx(t,n){var i;return Ux(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Yx(t,n,i){return Vx(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function mw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const _=i-p;(!a||_<a.delta)&&(a={delta:_,commit:h})}else{const _=p-i;(!c||_<c.delta)&&(c={delta:_,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function pw(t,n,i){var g,x,b,w,S,j,k;const a=Yx(t,i,n);if(a.length===0)return null;const c=a.map(M=>jr(t,M)),u=new Set(c.map(M=>M.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(w=(b=c.find(M=>M.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,_=c.find(M=>h&&M.id===h||d&&M.id===d?!0:!M.parentSha||!u.has(M.parentSha));return _||((k=(j=mw(c,p!=null?p:void 0))!=null?j:c[0])!=null?k:null)}function _w(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Vx(t.name,i);if(a.length>0){const _=a.map(b=>jr(t.name,b)),g=new Set(_.map(b=>b.id)),x=(u=(c=_.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:_[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function up(t,n,i={},a={}){var le,ie,ke,$e;const u=new Map(t.map(Z=>[Z.name,Z])),d=new Map,h=new Map;for(const Z of t){const I=((le=i[Z.name])!=null?le:[]).filter(ne=>ne.kind!=="branch-created").map(ne=>new Date(ne.date).getTime()).filter(ne=>Number.isFinite(ne)).sort((ne,F)=>ne-F)[0];I!=null&&h.set(Z.name,I)}const p=Z=>{const ue=h.get(Z.name);return ue!=null?ue:py(Z).start},_=Z=>{var I;const ue=(I=a[Z.name])!=null?I:null;return ue&&ue!==Z.name&&(ue===n||u.has(ue))?ue:Z.name===n?null:Z.parentBranch&&Z.parentBranch!==Z.name&&(Z.parentBranch===n||u.has(Z.parentBranch))?Z.parentBranch:null};for(const Z of t){if(Z.name===n)continue;const ue=(ie=_(Z))!=null?ie:n,I=(ke=d.get(ue))!=null?ke:[];I.push(Z),d.set(ue,I)}for(const Z of d.values())Z.sort((ue,I)=>p(ue)-p(I)||ue.name.localeCompare(I.name));const g=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const Z of Object.values(i))for(const ue of Z){const I=new Date(ue.date).getTime();Number.isFinite(I)&&(ue.fullSha&&S.set(ue.fullSha,I),ue.sha&&S.set(ue.sha,I))}const j=(Z,ue)=>({start:Math.min(Z,ue),end:Math.max(Z,ue)}),k=Z=>{var re,de;const ue=j(p(Z),py(Z).end),I=[ue],ne=ue.start,F=_w(Z,n,i),K=F?S.get(F):void 0,ge=new Date((de=(re=Z.divergedFromDate)!=null?re:Z.createdDate)!=null?de:Z.lastCommitDate).getTime(),B=Number.isFinite(K!=null?K:NaN)?K:Number.isFinite(ge)?ge:null;if(B==null)return I;const ae=j(B,ne);return ae.start!==ae.end&&I.push(ae),I},M=Math.max(1,360*60*1e3*dw),z=(Z,ue)=>!(Z.start-ue.end>=M||ue.start-Z.end>=M),L=(Z,ue)=>ue.some(I=>{var ne;return((ne=w.get(Z))!=null?ne:[]).some(F=>z(I,F))}),D=(Z,ue=new Set)=>{const I=b.get(Z);if(I!=null)return I;if(ue.has(Z))return 1;ue.add(Z);const ne=u.get(Z);if(!ne||Z===n)return ue.delete(Z),b.set(Z,0),0;const F=_(ne),K=F?D(F,ue)+1:1;return ue.delete(Z),b.set(Z,K),K},W=(Z,ue=new Set)=>{var Oe,Ae;const I=g.get(Z);if(I)return I.column;if(ue.has(Z))return 0;ue.add(Z);const ne=u.get(Z);if(!ne)return ue.delete(Z),0;if(Z===n){const et={name:Z,column:0,parentName:null};g.set(Z,et),x.push(et);const ft=k(ne);return w.set(0,[...(Oe=w.get(0))!=null?Oe:[],...ft]),ue.delete(Z),0}const F=_(ne),K=F&&!ue.has(F)?F:null,ge=K?W(K,ue):0,B=Math.max(1,D(Z)),ae=Math.max(K?ge+1:1,B),re=k(ne);let de=ae;for(;L(de,re);)de+=1;const Ee={name:Z,column:de,parentName:K};return g.set(Z,Ee),x.push(Ee),w.set(de,[...(Ae=w.get(de))!=null?Ae:[],...re]),ue.delete(Z),de};W(n);const U=t.filter(Z=>!g.has(Z.name)).sort((Z,ue)=>p(Z)-p(ue)||Z.name.localeCompare(ue.name)),X=U.filter(Z=>_(Z)!=null),V=U.filter(Z=>_(Z)==null);for(const Z of X)W(Z.name);let J=Math.max(0,...x.map(Z=>Z.column))+1+1;for(const Z of V){const ue=k(Z);let I=J;for(;L(I,ue);)I+=1;const ne={name:Z.name,column:I,parentName:null};g.set(Z.name,ne),x.push(ne),w.set(I,[...($e=w.get(I))!=null?$e:[],...ue]),J=I+1}return x.sort((Z,ue)=>Z.column-ue.column||Z.name.localeCompare(ue.name))}function gw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var _;const p=(_=i[h.name])!=null?_:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Fi=0,Xh=0,yw=1800*1e3,xw=1440*60*1e3,Ri=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Ko=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function _y(t,n,i=new Map){var X,V,J,le,ie,ke,$e,Z,ue,I,ne,F;if(t.length===0)return new Map;const a=[...t].sort((K,ge)=>{const B=Ri(K.date)-Ri(ge.date);return B!==0?B:K.id!==ge.id?K.id.localeCompare(ge.id):K.visualId.localeCompare(ge.visualId)}),c=new Map;for(const K of t){const ge=(X=K.parentSha)!=null?X:null;if(ge){const B=(V=c.get(ge))!=null?V:new Set;B.add(K.id),c.set(ge,B)}for(const B of(J=i.get(K.id))!=null?J:[]){if(!B)continue;const ae=(le=c.get(B))!=null?le:new Set;ae.add(K.id),c.set(B,ae)}}const u=new Map,d=new Map,h=new Map,p=new Set,_=new Map,g=new Map,x=new Map,b=new Map;for(const K of t){const ge=(ie=_.get(K.branchName))!=null?ie:new Set;ge.add(K.id),_.set(K.branchName,ge);const B=($e=(ke=n.get(K.branchName))==null?void 0:ke.column)!=null?$e:0,ae=(Z=g.get(K.id))!=null?Z:new Set;ae.add(B),g.set(K.id,ae);const re=new Set;K.parentSha&&re.add(K.parentSha),x.set(K.visualId,re);const de=new Set(re);for(const Ee of(ue=i.get(K.id))!=null?ue:[])Ee&&de.add(Ee);b.set(K.visualId,de)}const w=new Set(Array.from(g.keys())),S=Array.from(w),j=new Map,k=K=>{const ge=[];for(const B of S)Ko(B,K)&&ge.push(B);return ge},M=new Map;for(const K of S)M.set(K,new Set);for(const K of t){const ge=k(K.id);if(ge.length===0)continue;const B=(I=b.get(K.visualId))!=null?I:new Set,ae=new Set;for(const re of B)for(const de of k(re))ae.add(de);for(const re of ge){const de=(ne=M.get(re))!=null?ne:new Set;for(const Ee of ae)de.add(Ee);M.set(re,de)}}const z=new Map,L=(K,ge=new Set)=>{var de;const B=z.get(K);if(B)return B;if(ge.has(K))return new Set;ge.add(K);const ae=(de=M.get(K))!=null?de:new Set,re=new Set;for(const Ee of ae){re.add(Ee);for(const Oe of L(Ee,ge))re.add(Oe)}return ge.delete(K),z.set(K,re),re},D=(K,ge)=>{if(Ko(K,ge))return!0;const B=k(K),ae=k(ge);for(const re of B){const de=L(re);for(const Ee of ae)if(de.has(Ee))return!0}for(const re of ae){const de=L(re);for(const Ee of B)if(de.has(Ee))return!0}return!1};let W=1;const U=(K,ge)=>{var Ze,At,Y,je,We,Ue,it,Ne,st;const B=(At=(Ze=n.get(K.branchName))==null?void 0:Ze.column)!=null?At:0,ae=(Y=_.get(K.branchName))!=null?Y:new Set,de=!(!!K.parentSha&&ae.has(K.parentSha))&&K.parentSha?K.parentSha:null,Ee=Array.from(ge).flatMap(at=>k(at).flatMap(yt=>{var xt;return(xt=j.get(yt))!=null?xt:[]})),Oe=(K.kind==="branch-created"||K.kind==="stash")&&Ee.length>0?Math.max(...Ee)+1:null,Ae=Ee.length>0?Math.max(...Ee)+1:1,et=(je=c.get(K.id))!=null?je:new Set,zt=Array.from(et).flatMap(at=>{var yt;return Array.from((yt=g.get(at))!=null?yt:[])}).some(at=>at!==B),gt=new Date(K.date).getTime(),pt=Math.max(Ae,1);let qe=null;for(let at=pt;at<W;at+=1){const yt=(We=d.get(at))!=null?We:[];if(yt.length===0||zt||p.has(at))continue;const xt=(Ue=b.get(K.visualId))!=null?Ue:new Set;if(!(yt.some(me=>D(K.id,me.sha)?!0:Array.from(xt).some(Qe=>Ko(Qe,me.sha)))||yt.some(me=>me.column===B)||!Number.isFinite(gt)||!yt.every(me=>{if(!Number.isFinite(me.time))return!1;const Qe=!!de&&!!me.branchEntryParentSha&&de===me.branchEntryParentSha?xw:yw;return Math.abs(me.time-gt)<=Qe}))){qe=at;break}}Oe!=null&&(qe=Oe),qe==null&&(qe=Math.max(Ae,W)),u.set(K.visualId,qe),qe>=W&&(W=qe+1);const Yt=(it=d.get(qe))!=null?it:[];Yt.push({visualId:K.visualId,sha:K.id,column:B,time:gt,branchEntryParentSha:de}),d.set(qe,Yt),zt&&p.add(qe);for(const at of ge){const yt=(Ne=h.get(at))!=null?Ne:[];yt.push(qe),h.set(at,yt)}const Kt=(st=j.get(K.id))!=null?st:[];Kt.push(qe),j.set(K.id,Kt)};for(const K of a){const ge=(F=x.get(K.visualId))!=null?F:new Set;U(K,ge)}return u}function Mc(t){var tn,Do,ds,di,fi,No,ni,ys,wo,In,Xs,fs,hs,zi,Uo,Qi,qt,$i,Ln,Si,Ro,Pn,oo,Vo,mo,bn,So,Yo,xs,Gs,sn,Ns,io,Bo,ms,po,Lo,Wo,Hs,_o,si,qn,dn,Fo,Wn,Rs,hi,ao,ks,go,Oo;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:_,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:j,orientation:k="horizontal",nodePositionOverrides:M={}}=t,z=k==="horizontal",L=new Map(i.map(T=>[T.name,T])),D=new Map(n.map(T=>[T.name,T])),W=hw([...a.map(T=>{var G,fe,be;return{id:T.fullSha,branchName:d,message:(G=T.prTitle)!=null?G:T.sha,author:"",date:T.date,parentSha:(be=(fe=T.parentShas)==null?void 0:fe[0])!=null?be:null}}),...((tn=h[d])!=null?tn:[]).map(T=>jr(d,T)),...c.map(T=>jr(T.branch||"",T)),...u.map(T=>jr(T.branch||"",T))]),U=new Map,X=new Map;for(const T of i){if(T.name===d)continue;const G=Yx(T.name,_,h);X.set(T.name,G);const fe=Ux(G.map(Vt=>jr(T.name,Vt)));if(fe.length>0){U.set(T.name,fe);continue}const be=(di=(ds=(Do=T.presidesFromSha)!=null?Do:T.divergedFromSha)!=null?ds:T.createdFromSha)!=null?di:null;if(!be)continue;const He=(fi=c.find(Vt=>Ko(Vt.fullSha,be)||Ko(Vt.sha,be)))==null?void 0:fi.date,Ke=He?null:(No=Object.values(h).flat().find(Vt=>Ko(Vt.fullSha,be)||Ko(Vt.sha,be)))==null?void 0:No.date,It={id:`BRANCH_HEAD:${T.name}:${be}`,branchName:T.name,message:`Branch ${T.name}`,author:T.lastCommitAuthor,date:(wo=(ys=(ni=He!=null?He:Ke)!=null?ni:T.createdDate)!=null?ys:T.divergedFromDate)!=null?wo:T.lastCommitDate,parentSha:be,kind:"branch-created"};U.set(T.name,[It])}const V=new Set(W.map(T=>T.id)),J=(In=[...W].sort((T,G)=>Ri(T.date)-Ri(G.date)||T.id.localeCompare(G.id))[0])!=null?In:null,le=new Map(Array.from(U.entries()).map(([T,G])=>[T,new Set(G.map(fe=>fe.id))])),ie=new Map;for(const T of i){if(T.name===d)continue;const G=pw(T.name,h,_);if(G){ie.set(T.name,G);continue}const fe=(Xs=U.get(T.name))==null?void 0:Xs[0];if(fe){const be=(zi=(hs=(fs=T.presidesFromSha)!=null?fs:T.divergedFromSha)!=null?hs:T.createdFromSha)!=null?zi:null;ie.set(T.name,{...fe,parentSha:be})}}const ke=new Map;for(const[T,G]of U.entries()){const fe=G.find(be=>be.kind!=="branch-created");fe&&ke.set(T,fe)}const $e=new Map;for(const[T,G]of U.entries()){const fe=G.filter(Ke=>Ke.kind!=="branch-created"),He=(Uo=(fe.length>0?fe:G)[0])!=null?Uo:null;He&&$e.set(T,He)}const Z=new Map;for(const T of i){if(T.name===d)continue;const G=(Qi=$e.get(T.name))!=null?Qi:null,fe=($i=(qt=ie.get(T.name))==null?void 0:qt.parentSha)!=null?$i:null,be=(Ro=(Si=(Ln=T.presidesFromSha)!=null?Ln:T.divergedFromSha)!=null?Si:T.createdFromSha)!=null?Ro:null,He=(Pn=G==null?void 0:G.parentSha)!=null?Pn:null,Ke=(oo=He!=null?He:fe)!=null?oo:be;Ke&&Z.set(T.name,Ke)}const ue=T=>{var Ke,It,Vt,Dt,Fe,Qt,fn,Hn;const G=(Ke=p[T.name])!=null?Ke:null;if(!(G&&G!==d&&G!==T.name&&L.has(G)))return G!=null?G:"";const be=(Dt=(Vt=(It=Z.get(T.name))!=null?It:T.presidesFromSha)!=null?Vt:T.divergedFromSha)!=null?Dt:T.createdFromSha;if(be&&((Fe=le.get(G))!=null?Fe:new Set).has(be))return G;const He=(fn=(Qt=ie.get(T.name))==null?void 0:Qt.parentSha)!=null?fn:null;return He&&((Hn=le.get(G))!=null?Hn:new Set).has(He),G},I=T=>{var He,Ke,It,Vt,Dt,Fe,Qt,fn;const G=ie.get(T.name),fe=(Dt=(Vt=(It=(Ke=(He=Z.get(T.name))!=null?He:G==null?void 0:G.parentSha)!=null?Ke:T.presidesFromSha)!=null?It:T.divergedFromSha)!=null?Vt:T.createdFromSha)!=null?Dt:null;if(!T.parentBranch&&!fe||!fe)return null;if(ue(T)===d){if(V.has(fe))return fe;const Hn=(Fe=G==null?void 0:G.parentSha)!=null?Fe:null;return Hn&&V.has(Hn)?Hn:(fn=(Qt=J==null?void 0:J.id)!=null?Qt:Hn)!=null?fn:fe}return V.has(fe),fe},ne=T=>I(T),F=new Map;for(const T of[...c,...u]){const G={...jr(T.branch||"",T),visualId:`${T.branch||""}:${T.fullSha}`};F.set(T.fullSha,G)}const K=new Map(F),ge=T=>{K.has(T.id)||K.set(T.id,T)},B=new Map(Array.from(U.entries()).map(([T,G])=>[T,new Set(G.map(fe=>fe.id))])),ae=new Set;for(const T of B.values())for(const G of T)ae.add(G);for(const T of W)ae.has(T.id)||ge({...T,visualId:`${T.branchName}:${T.id}`});for(const[T,G]of U.entries())for(const fe of G)ge({...fe,visualId:`${T}:${fe.id}`});const de=[...Array.from(K.values()).map(T=>({...T,visualId:`${T.branchName}:${T.id}`}))].sort((T,G)=>Ri(T.date)-Ri(G.date)||T.id.localeCompare(G.id)),Ee=new Map;for(const T of de){const G=(Vo=Ee.get(T.branchName))!=null?Vo:new Set;G.add(T.id),Ee.set(T.branchName,G)}const Oe=(T,G)=>{const fe=Ee.get(T);if(!fe||fe.size===0)return!1;for(const be of fe)if(Ko(be,G))return!0;return!1},Ae=(T,G)=>{const fe=Array.from(Ee.entries()).filter(([be])=>be!==G).filter(([,be])=>Array.from(be).some(He=>Ko(He,T))).map(([be])=>be);return fe.length>0?fe.sort()[0]:T.slice(0,7)},et=[],ft=new Map,zt=new Map;for(const T of a){const G=T.fullSha,fe=T.targetBranch,be=T.targetCommitSha;if(!G||!fe||!be||!Oe(fe,be))continue;const He=((mo=T.parentShas)!=null?mo:[]).slice(1).filter(It=>!!It&&!Ko(It,G));if(He.length===0)continue;const Ke=(bn=zt.get(G))!=null?bn:new Set;for(const It of He){Ke.add(It);const Vt=Ae(It,fe);et.push({sourceCommitSha:It,sourceBranchName:Vt,mergeCommitSha:G,targetCommitSha:be,targetBranchName:fe});const Dt=(So=ft.get(Vt))!=null?So:new Map,Fe=(Yo=Dt.get(It))!=null?Yo:new Set;Fe.add(fe),Dt.set(It,Fe),ft.set(Vt,Dt)}zt.set(G,Ke)}const gt=new Map;for(const T of i){if(T.name===d)continue;const G=I(T);G&&gt.set(T.name,G)}const pt=new Map;for(const T of de){const G=zt.get(T.id);if(G&&G.size>0){const He=(xs=pt.get(T.id))!=null?xs:new Set;for(const Ke of G)He.add(Ke);pt.set(T.id,He)}if(T.branchName===d)continue;const fe=gt.get(T.branchName);if(!fe||fe===T.id)continue;const be=(Gs=pt.get(T.id))!=null?Gs:new Set;be.add(fe),pt.set(T.id,be)}const qe=_y(de,D,pt),Yt=new Map;for(const T of de){const G=(sn=Yt.get(T.branchName))!=null?sn:[];G.push(T),Yt.set(T.branchName,G)}const Kt=new Map,Ze=new Map,At=new Map,Y=new Map,je=new Map,We=(T,G)=>{var Ke,It,Vt;if(G.length===0)return[];const fe=[...G].sort((Dt,Fe)=>{var Hn,Un;const Qt=(Hn=qe.get(Dt.visualId))!=null?Hn:Number.MAX_SAFE_INTEGER,fn=(Un=qe.get(Fe.visualId))!=null?Un:Number.MAX_SAFE_INTEGER;return Qt!==fn?Qt-fn:Ri(Dt.date)-Ri(Fe.date)||Dt.id.localeCompare(Fe.id)}),be=new Map;for(const Dt of fe){const Fe=((Ke=Dt.clusterKey)==null?void 0:Ke.trim())||`cluster:${T}:${Dt.id}`,Qt=(It=be.get(Fe))!=null?It:[];Qt.push(Dt),be.set(Fe,Qt)}const He=[];for(const[Dt,Fe]of be.entries()){if(Fe.length===0)continue;const fn=[...Fe].sort((Un,pn)=>{var mi,Xo;const js=(mi=qe.get(Un.visualId))!=null?mi:Number.MIN_SAFE_INTEGER,yo=(Xo=qe.get(pn.visualId))!=null?Xo:Number.MIN_SAFE_INTEGER;return js!==yo?yo-js:Ri(pn.date)-Ri(Un.date)||pn.id.localeCompare(Un.id)})[0].visualId,Hn={branchName:T,key:Dt,commitIds:Fe.map(Un=>Un.visualId),leadId:fn,count:Fe.length};He.push(Hn),Y.set(Dt,fn),je.set(Dt,Fe.length);for(const Un of Hn.commitIds){Ze.set(Un,Dt);const pn=Un.split(":").slice(1).join(":"),js=(Vt=At.get(pn))!=null?Vt:[];js.includes(Dt)||js.push(Dt),At.set(pn,js)}}return He};for(const[T,G]of Yt.entries())Kt.set(T,We(T,G));const Ue=new Map;for(const T of de)Ue.set(T.id,T);const it=T=>{if(!T)return"none";const G=Array.from(Ue.values()).find(fe=>Ko(fe.id,T)||Ko(fe.id.slice(0,7),T)||Ko(T,fe.id));return G?`${G.id.slice(0,7)} ${G.branchName}`:T.slice(0,7)},Ne=b?["Lane rows (expected):",...[...n].sort((T,G)=>T.column-G.column||T.name.localeCompare(G.name)).map(T=>{var G;return`  row=${T.column} branch=${T.name} parent=${(G=T.parentName)!=null?G:"none"}`}),"",...i.flatMap(T=>{var It,Vt,Dt,Fe,Qt,fn,Hn,Un;const G=(It=h[T.name])!=null?It:[],fe=[...(Vt=X.get(T.name))!=null?Vt:[]].reverse(),be=new Set(((Dt=U.get(T.name))!=null?Dt:[]).map(pn=>pn.id)),He=(Qt=(Fe=fe.find(pn=>!pn.parentSha||!fe.some(js=>{var yo;return Ko(js.fullSha,(yo=pn.parentSha)!=null?yo:"")})))!=null?Fe:fe[0])!=null?Qt:null,Ke=(Hn=(fn=He==null?void 0:He.parentSha)!=null?fn:Z.get(T.name))!=null?Hn:null;return[`Branch ${T.name}`,`  ahead=${(Un=_[T.name])!=null?Un:0} previews=${fe.length} rendered=${be.size}`,`  db parent commit=${it(Ke)}`,`  db child commit=${He?`${He.fullSha.slice(0,7)} ${T.name}`:"none"}`,...fe.map(pn=>{const js=be.has(pn.fullSha)?"visible":"hidden",yo=be.has(pn.fullSha)?"kept by render set":"dropped by render set";return`  ${js} ${pn.fullSha.slice(0,7)} ${pn.message} [${yo}]`}),G.length===0?"  no preview data":null].filter(pn=>pn!=null)})]:[],st=b?Array.from(U.entries()).map(([T,G])=>[`Branch debug ${T}`,...G.map(fe=>`  ${fe.id.slice(0,7)} ${fe.message}`)].join(`
`)):[],at=qe,yt=Tm/Fu,xt=20/Fu,ot=z?_s+yt+xt:Yu+yt+xt,H=z?Yu+yt+xt:ic,te=Math.max(0,...de.map(T=>{var G;return(G=at.get(T.visualId))!=null?G:1})),me=de.map(T=>{var He,Ke;const G=D.get(T.branchName),fe=(He=at.get(T.visualId))!=null?He:1,be=(Ke=G==null?void 0:G.column)!=null?Ke:0;return z?{commit:T,row:fe,column:be,x:xr+(fe-1)*ot,y:yr+be*H}:{commit:T,row:fe,column:be,x:xr+be*ic,y:yr+(te-fe)*ot}}),ve=T=>{var fe;const G=(fe=M[T.commit.visualId])!=null?fe:M[T.commit.id];return G?{...T,x:G.x,y:G.y}:T},Qe=me.map(ve),Ge=w.trim().toLowerCase(),Re=Ge?Qe.filter(T=>{const G=T.commit.id.toLowerCase(),fe=T.commit.id.slice(0,7).toLowerCase(),be=T.commit.message.toLowerCase(),He=T.commit.branchName.toLowerCase();return G.includes(Ge)||fe.includes(Ge)||be.includes(Ge)||He.includes(Ge)}):Qe,vt=S&&(Ns=Qe.find(T=>T.commit.id===S))!=null?Ns:null,Ve=new Set(Re.map(T=>T.commit.id)),$t=(io=j==null?void 0:j.headSha)!=null?io:null,bt=(()=>{var G,fe;const T=(G=j==null?void 0:j.branchName)!=null?G:null;return!$t||!T?null:(fe=Ze.get(`${T}:${$t}`))!=null?fe:null})(),tt=new Set;for(const T of Kt.values())for(const G of T)G.count>1&&G.key!==bt&&tt.add(G.key);const Lt=[...de].filter(T=>{var Ke;const G=Ze.get(T.visualId);if(!G)return!0;const fe=Y.get(G),be=(Ke=je.get(G))!=null?Ke:1,He=g.has(G)||!tt.has(G)&&!x.has(G);return be<=1||He||fe===T.visualId}),Ht=_y(Lt,D,pt),dt=Tm/Fu,Pe=20/Fu,jt=z?_s+dt+Pe:Yu+dt+Pe,Mt=z?Yu+dt+Pe:ic,_t=Math.max(0,...Lt.map(T=>{var G;return(G=Ht.get(T.visualId))!=null?G:1})),en=Lt.map(T=>{var He,Ke;const G=D.get(T.branchName),fe=(He=Ht.get(T.visualId))!=null?He:1,be=(Ke=G==null?void 0:G.column)!=null?Ke:0;return ve(z?{commit:T,row:fe,column:be,x:xr+(fe-1)*jt,y:yr+be*Mt}:{commit:T,row:fe,column:be,x:xr+be*ic,y:yr+(_t-fe)*jt})}),ct=new Map;for(const T of en){const G=(Bo=ct.get(T.commit.id))!=null?Bo:[];G.push(T),ct.set(T.commit.id,G)}const Bt=new Map;for(const T of en){const G=Ze.get(T.commit.visualId);if(!G)continue;const fe=Bt.get(G);(!fe||(z?T.x>fe.x:T.y<fe.y))&&Bt.set(G,T)}const xn=(T,G)=>`${T.toFixed(1)} ${G.toFixed(1)}`,Bn=Math.max(0,...en.map(T=>T.row)),Sn=Math.max(0,...n.map(T=>T.column)),ls=Math.max(0,...en.map(T=>T.x+_s)),Yn=Math.max(0,...en.map(T=>T.y+bl+zs)),Tn=Math.max(z?xr*2+Math.max(0,Bn-1)*jt+_s+Yh+Pe:xr*2+(Sn+1)*ic,ls+xr),Cn=Math.max(z?yr*2+Sn*Mt+zs+Yh+Pe:yr*2+Math.max(0,Bn-1)*jt+zs+Yh+Pe,Yn+yr),$n=[],rn=new Map(i.map(T=>{var fe,be;const G=new Date((be=(fe=T.createdDate)!=null?fe:T.divergedFromDate)!=null?be:T.lastCommitDate).getTime();return[T.name,Number.isFinite(G)?G:0]})),En=T=>{var G;return(G=rn.get(T))!=null?G:0},nt=[],ln=T=>{b&&nt.push(T)},no=new Set,Ao=new Map,cs=(T,G)=>{var be;const fe=(be=Ao.get(T))!=null?be:[];fe.includes(G)||fe.push(G),Ao.set(T,fe)},Es=new Set,ei=new Set,Cs=new Set,uo=(T,G)=>{var He,Ke;if(!T)return null;const fe=Wu(ct,T,G);if(fe)return fe;const be=(He=Ze.get(`${G!=null?G:d}:${T}`))!=null?He:Ze.get(T);return be&&(Ke=Bt.get(be))!=null?Ke:null},so=new Set;for(const T of i){const G=ne(T);G&&ei.add(G);const fe=(ms=Z.get(T.name))!=null?ms:null;fe&&Cs.add(fe)}const fo=T=>{var He;const G=uo(T.id,T.branchName);if(G)return G;const fe=Ze.get(T.visualId);if(!fe)return null;const be=Y.get(fe);return be&&(He=en.find(Ke=>Ke.commit.id===be))!=null?He:null},kn=(T,G)=>T?Wu(ct,T,G):null,ti=(T,G)=>z?{x:T.x-Fi,y:T.y+zs/2,face:"left"}:{x:T.x+_s/2,y:T.y+zs+Fi,face:"bottom"},Is=T=>z?{x:T.x-Fi,y:T.y+zs/2,face:"left"}:{x:T.x+_s/2,y:T.y+zs+Fi,face:"bottom"},As=(T,G)=>T.column!==G.column?!0:z?T.commit.branchName!==G.commit.branchName:!1,us=(T,G,fe)=>{if(!z)return{x:G?T.x+_s:T.x+_s/2,y:G?T.y+zs/2:T.y,face:G?"right":"top"};if(!G)return{x:T.x+_s+Fi,y:T.y+zs/2,face:"right"};if(fe&&fe.column===T.column&&fe.commit.branchName!==T.commit.branchName){if(fe.x>T.x)return{x:T.x+_s/2,y:T.y+zs+Fi,face:"bottom"};if(fe.x<T.x)return{x:T.x+_s/2,y:T.y-Fi,face:"top"}}return!fe||fe.column===T.column?{x:T.x+_s+Fi,y:T.y+zs/2,face:"right"}:fe.column>T.column?{x:T.x+_s/2,y:T.y+zs+Fi,face:"bottom"}:{x:T.x+_s/2,y:T.y-Fi,face:"top"}},Ho=T=>z?{x:T.x+_s/2,y:T.y+zs+Fi,face:"bottom"}:{x:T.x+_s,y:T.y+zs/2,face:"right"},ho=(T,G)=>Wu(ct,T,G),Ds=(T,G)=>kn(T,G),Ps=[],An=new Set;for(const T of et){const G=(po=uo(T.targetCommitSha,T.targetBranchName))!=null?po:null;if(!G){ln({id:`merge:${T.mergeCommitSha}:${T.sourceCommitSha}:target`,kind:"merge",parent:T.sourceCommitSha,child:T.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const fe=T.sourceCommitSha,be=`merge:${T.mergeCommitSha}:${fe!=null?fe:"unknown"}`;if(!fe||Ko(fe,T.targetCommitSha)){ln({id:be,kind:"merge",parent:fe!=null?fe:"unknown",child:T.targetCommitSha,rendered:!1,reason:fe?"merged parent equals merge target sha":"missing merged parent sha"});continue}const He=(Lo=Wu(ct,fe))!=null?Lo:null;if(!He){ln({id:be,kind:"merge",parent:fe,child:T.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(He.commit.id===G.commit.id){ln({id:be,kind:"merge",parent:He.commit.id,child:G.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let Ke,It,Vt;const Dt=z?G.x+_s/2:G.x+_s-Xh,Fe=z?G.y+zs+Xh:G.y+zs/2,Qt=z?"bottom":"right";z?(Ke=He.x+_s+Xh,It=He.y+zs/2,Vt="right"):(Ke=He.x+_s/2,It=He.y,Vt="top");const fn=`${Ke.toFixed(2)}:${It.toFixed(2)}:${Dt.toFixed(2)}:${Fe.toFixed(2)}`;if(An.has(fn)){ln({id:be,kind:"merge",parent:He.commit.id,child:G.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}An.add(fn),Ps.push({id:be,fromX:Ke,fromY:It,toX:Dt,toY:Fe,fromFace:Vt,toFace:Qt,zIndex:En(He.commit.branchName)}),ln({id:be,kind:"merge",parent:He.commit.id,child:G.commit.id,rendered:!0,reason:`merge connector rendered to ${T.targetBranchName}`})}const os=new Set;for(const T of i){if(T.name===d)continue;const G=ie.get(T.name);if(!G)continue;const fe=ue(T),be=ho((Wo=Z.get(T.name))!=null?Wo:"",fe),He=(Hs=ke.get(T.name))!=null?Hs:G,Ke=(_o=Ds(He.id,T.name))!=null?_o:fo(He);if(!be||!Ke||be.commit.id===Ke.commit.id){const Qt=Ze.get(`${T.name}:${G.id}`),fn=Ze.get(`${T.name}:${He.id}`),Hn=!!Qt&&!tt.has(Qt),Un=!!fn&&!tt.has(fn),pn=!!Qt&&!g.has(Qt)&&(Hn?x.has(Qt):!0),js=!!fn&&!g.has(fn)&&(Un?x.has(fn):!0);!be&&!pn&&cs((si=Ke==null?void 0:Ke.commit.id)!=null?si:G.id,"Missing parent node"),!Ke&&!js&&cs(G.id,"Missing child node"),ln({id:`branch:${(qn=be==null?void 0:be.commit.id)!=null?qn:"null"}->${(dn=Ke==null?void 0:Ke.commit.id)!=null?dn:"null"}`,kind:"branch",parent:(Fo=be==null?void 0:be.commit.id)!=null?Fo:"null",child:(Wn=Ke==null?void 0:Ke.commit.id)!=null?Wn:"null",rendered:!1,reason:be?Ke?"parent and child are the same node":"missing child node":"missing parent node"});continue}const It=`branch:${be.commit.id}->${Ke.commit.id}`;if(so.has(It)){ln({id:It,kind:"branch",parent:be.commit.id,child:Ke.commit.id,rendered:!1,reason:"duplicate connector key"});continue}so.add(It),Es.add(be.commit.id);const Vt=As(be,Ke);be.commit.branchName!==Ke.commit.branchName&&os.add(be.commit.id);const Dt=Ho(be),Fe=Is(Ke);$n.push({id:It,fromX:Dt.x,fromY:Dt.y,toX:Fe.x,toY:Fe.y,fromFace:Dt.face,toFace:Fe.face,zIndex:En(Ke.commit.branchName)}),ln({id:It,kind:"branch",parent:be.commit.id,child:Ke.commit.id,rendered:!0,reason:Vt?"branch connector rendered":z?"horizontal connector rendered":"vertical connector rendered"})}for(const T of de){const G=fo(T);if(!G)continue;const fe=(Rs=T.parentSha)!=null?Rs:null;if(!fe)continue;const be=(hi=uo(fe,T.branchName))!=null?hi:ho(fe,T.branchName);if(!be){const Dt=(ao=Ze.get(`${T.branchName}:${fe}`))!=null?ao:Ze.get(fe),Fe=!!Dt&&!tt.has(Dt);!!Dt&&!g.has(Dt)&&(Fe?x.has(Dt):!0)||cs(T.id,"Missing parent node"),ln({id:`${T.visualId}->${fe}`,kind:"ancestry",parent:fe,child:T.id,rendered:!1,reason:"missing parent node"});continue}if(G.commit.id===be.commit.id){cs(G.commit.id,"Parent and child resolve to the same node"),ln({id:`${be.commit.id}->${G.commit.id}`,kind:"ancestry",parent:be.commit.id,child:G.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const He=`${T.branchName}:${(ks=be.commit.visualId)!=null?ks:be.commit.id}->${G.commit.visualId}`;if(so.has(He)){cs(be.commit.id,"Duplicate connector key"),cs(G.commit.id,"Duplicate connector key"),ln({id:He,kind:"ancestry",parent:be.commit.id,child:G.commit.id,rendered:!1,reason:"duplicate connector key"});continue}so.add(He),Es.add(be.commit.id);const Ke=As(be,G),It=us(be,Ke,G),Vt=ti(G);$n.push({id:He,fromX:It.x,fromY:It.y,toX:Vt.x,toY:Vt.y,fromFace:It.face,toFace:Vt.face,zIndex:En(G.commit.branchName)}),ln({id:He,kind:"ancestry",parent:be.commit.id,child:G.commit.id,rendered:!0,reason:Ke?"ancestry connector rendered":z?"horizontal ancestry rendered":"vertical ancestry rendered"}),no.add(be.commit.id),no.add(G.commit.id)}const jn=new Map;for(const T of en){const G=(go=jn.get(T.commit.branchName))!=null?go:[];G.push(T),jn.set(T.commit.branchName,G)}for(const[T,G]of jn.entries()){if(G.length<2)continue;const fe=[...G].sort((be,He)=>{var Ke,It,Vt,Dt,Fe,Qt,fn,Hn;return be.row!==He.row?be.row-He.row:Ri((It=(Ke=be==null?void 0:be.commit)==null?void 0:Ke.date)!=null?It:null)-Ri((Dt=(Vt=He==null?void 0:He.commit)==null?void 0:Vt.date)!=null?Dt:null)||((Qt=(Fe=be==null?void 0:be.commit)==null?void 0:Fe.id)!=null?Qt:"").localeCompare((Hn=(fn=He==null?void 0:He.commit)==null?void 0:fn.id)!=null?Hn:"")});for(let be=1;be<fe.length;be+=1){const He=fe[be-1],Ke=fe[be];if(He.commit.id===Ke.commit.id)continue;const It=(Oo=Ke.commit.parentSha)!=null?Oo:null;if(It&&ho(It,Ke.commit.branchName))continue;const Vt=`chain:${T}:${He.commit.id}->${Ke.commit.id}`;if(so.has(Vt)){cs(He.commit.id,"Duplicate branch chain connector"),cs(Ke.commit.id,"Duplicate branch chain connector"),ln({id:Vt,kind:"ancestry",parent:He.commit.id,child:Ke.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}so.add(Vt);const Dt=As(He,Ke),Fe=us(He,Dt,Ke),Qt=ti(Ke);$n.push({id:Vt,fromX:Fe.x,fromY:Fe.y,toX:Qt.x,toY:Qt.y,fromFace:Fe.face,toFace:Qt.face,zIndex:En(Ke.commit.branchName)}),ln({id:Vt,kind:"ancestry",parent:He.commit.id,child:Ke.commit.id,rendered:!0,reason:"branch chain rendered"}),no.add(He.commit.id),no.add(Ke.commit.id)}}return{branchByName:L,laneByName:D,mainCommits:W,branchCommitsByLane:U,branchPreviewSets:X,allCommits:de,clustersByBranch:Kt,clusterKeyByCommitId:Ze,clusterKeyBySha:At,leadByClusterKey:Y,clusterCounts:je,debugRows:Ne,branchDebugRows:st,nodes:me,normalizedSearchQuery:Ge,matchingNodes:Re,matchingNodeIds:Ve,focusedNode:vt,checkedOutClusterKey:bt,defaultCollapsedClumps:tt,visibleCommitsList:Lt,renderNodes:en,visibleNodesBySha:ct,visibleNodeByClusterKey:Bt,pointFormatter:xn,contentWidth:Tn,contentHeight:Cn,connectors:$n,mergeConnectors:Ps,connectorDecisions:nt,nodeWarnings:Ao,connectorParentShas:Es,branchStartShas:ei,branchOffNodeShas:Cs,crossBranchOutgoingShas:os,commitIdsWithRenderedAncestry:no,branchBaseCommitByName:ie,firstBranchCommitByName:$e,mergeDestinations:et,mergeTargetBranchesBySourceBranchAndCommitSha:ft}}const bw=8,vw=44,gy=120,yy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Wx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),_=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,_)<bw){const U=d/g,X=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+U*V,c1y:n+X*V,c2x:i-U*V,c2y:a-X*V}}if(Math.min(p,_)<vw){const U=d/g,X=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+U*V,c1y:n+X*V,c2x:i-U*V,c2y:a-X*V}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),j=Math.min(120,_*.32),k=Math.min(160,_*.42),M=yy(c),z=yy(u);if(!(M==="v"&&z==="h"||M==="v"&&z==null&&_>=p||M==null&&z==="h"&&_>=p||M==="v"&&z==="v"||M==null&&z==null&&_>p)){const U=i,X=n;return{kind:"elbowH",cx:U,cy:X,s1c1x:t+x*w,s1c1y:n,s1c2x:U-x*S,s1c2y:X,s2c1x:U,s2c1y:X+b*j,s2c2x:i,s2c2y:a-b*k}}const D=t,W=a;return{kind:"elbowV",cx:D,cy:W,s1c1x:t,s1c1y:n+b*k,s1c2x:D,s1c2y:W-b*j,s2c1x:D+x*w,s2c1y:W,s2c2x:i-x*S,s2c2y:a}}function ww(t,n,i,a,c,u){const d=Wx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function xy(t,n,i,a,c,u,d){const h=Wx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(gy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,j=a>=n?1:-1,k=h.cx-S*w,M=h.cy+j*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(k-S*w*.5,h.cy)} ${c(k,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,M)}`,`C ${c(h.cx,M+j*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(gy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),_=i>=t?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+_*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+_*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const dp=2.25,ac=dp/2,Sw=.45,Cw=.01,ra=dp,kd=10,kw=-100,by=0,vy=.9,jw=.9,wy=.001,Gh=.001,Mw=12,Tw=_s+48;function Rn(...t){return t.filter(Boolean).join(" ")}function Ew(t){return Math.max(Sw,Math.min(dp,t))}function Aw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Fx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Dw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const _ of t)n=Math.min(n,_.x),i=Math.min(i,_.y),a=Math.max(a,_.x),c=Math.max(c,_.y);return{left:n,top:i,right:a,bottom:c}}function Nw(t,n,i,a,c,u,d){const h=ww(t,n,i,a,u,d),p=Dw(h);return Fx(c,p)}function Xx(t,n){return{left:t.x,top:t.y+n,right:t.x+_s,bottom:t.y+bl+zs+4}}function Rw(t,n){const i=Tw,a=Math.max(120,Math.ceil(bl+zs+4-n+24)),c=new Map;for(const u of t){const d=Xx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),_=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=_;w<=g;w++){const S=`${b},${w}`;let j=c.get(S);j||(j=new Set,c.set(S,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Bw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),_=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=_;S<=g;S++){const j=d.get(`${w},${S}`);if(j)for(const k of j)x.add(k)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const j=Xx(S,a);Fx(n,j)&&b.add(w)}return b}function Sy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ra;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Lw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function Cy(t,n,i){const a=n/ra;return!Number.isFinite(a)||a<=0?t:Lw(t,100/a)}function ky(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function wi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Em(t,n){if(n){const i=ky(n),a=ky(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Em(t,n)}function Ow(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function zw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:_,onPushCurrentBranch:g,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:w,selectedPushTargets:S,selectedPushLabel:j,canPushCurrentBranch:k,pushCurrentBranchLabel:M,pushableRemoteBranchCount:z,selectedCommitTargetOption:L,mergeInProgress:D,setMergeTargetCommitSha:W,worktrees:U,currentRepoPath:X,worktreeMenuOpen:V,setWorktreeMenuOpen:J,onSwitchToWorktree:le,onRemoveWorktree:ie,removeWorktreeInProgress:ke,setCommitDialogOpen:$e,setNewBranchDialogOpen:Z}){var zt;const ue=t.length>0,I=t.length>0&&t.every(gt=>gt==="WORKING_TREE"),[ne,F]=y.useState(!1),K=y.useRef(null),ge=y.useRef(null),B="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",ae=!!p&&d&&!i&&!n&&(!ue||I),re=!!g&&k&&!ue&&!u,de=!!b&&S.length>0&&!u,Ee=!!x&&z>=2&&!ue&&!u,Oe=!!_&&!c&&!ue&&!a,Ae="Push Selected...",et=ae?{label:n?"Committing...":"Commit",run:()=>$e(!0),disabled:!ae}:re?{label:u?"Pushing...":M,run:()=>void(g==null?void 0:g()),disabled:!re}:de?{label:Ae,run:()=>void(b==null?void 0:b(S.map(gt=>({branchName:gt.branchName,targetSha:gt.targetSha})))),disabled:!de}:null;return y.useEffect(()=>{const gt=pt=>{var Yt,Kt;const qe=pt.target;qe&&((Yt=K.current)!=null&&Yt.contains(qe)||(Kt=ge.current)!=null&&Kt.contains(qe)||(F(!1),J(!1)))};return window.addEventListener("pointerdown",gt),()=>window.removeEventListener("pointerdown",gt)},[J]),l.jsx("div",{className:"pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:K,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{et&&et.run()},disabled:!et||et.disabled,className:Rn(B,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:(zt=et==null?void 0:et.label)!=null?zt:"Commit"}),l.jsx("button",{type:"button",onClick:()=>F(gt=>!gt),disabled:!et,"aria-haspopup":"menu","aria-expanded":ne,className:Rn(B,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Hx,{className:"h-3.5 w-3.5 shrink-0"})}),ne&&et?l.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsx("button",{type:"button",onClick:()=>{F(!1),$e(!0)},disabled:!ae,className:Rn(B,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!ae&&"text-muted-foreground opacity-50"),children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>{F(!1),g==null||g()},disabled:!re,className:Rn(B,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!re&&"text-muted-foreground opacity-50"),children:u?"Pushing...":M}),l.jsx("button",{type:"button",onClick:()=>{F(!1),b==null||b(S.map(gt=>({branchName:gt.branchName,targetSha:gt.targetSha})))},disabled:!de,className:Rn(B,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!de&&"text-muted-foreground opacity-50"),title:j,children:Ae}),l.jsx("button",{type:"button",onClick:()=>{F(!1),x==null||x()},disabled:!Ee,className:Rn(B,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Ee&&"text-muted-foreground opacity-50"),children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>{F(!1),_==null||_()},disabled:!Oe,className:Rn(B,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Oe&&"text-muted-foreground opacity-50"),children:a?"Stashing...":"Stash"})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsx("button",{type:"button",onClick:()=>Z(!0),disabled:h,className:Rn(B,"pointer-events-auto relative z-10 bg-background"),children:h?"Creating...":"New Branch"})}),t.length>1&&L.options.length>0&&L.targetBranch&&w?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),L.options.map(gt=>{const pt=gt.targetBranch===L.targetBranch;return l.jsx("button",{type:"button",onClick:()=>W(gt.targetSha),className:Rn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",pt?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:gt.targetBranch},`merge-${gt.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void w(L.sources,L.targetBranch),disabled:L.sources.length===0||D,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:D?"Merging...":"Confirm"})]}):null,U.length>0&&(le||ie)?l.jsxs("div",{ref:ge,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>J(gt=>!gt),className:B,children:[U.length," ",U.length===1?"Worktree":"Worktrees"]}),V?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:U.map(gt=>{var pt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:gt.path,children:Em(gt,X)?Ow(gt.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(pt=gt.branchName)!=null?pt:"detached"," • ",gt.headSha.slice(0,7)]})]}),Em(gt,X)?l.jsxs("div",{className:"flex items-center gap-1",children:[le?l.jsx("button",{type:"button",onClick:()=>{J(!1),le(gt.path)},disabled:ke||gt.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,ie?l.jsx("button",{type:"button",onClick:()=>void ie(gt.path,gt.isPrunable),disabled:ke,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:ke?"...":"Remove"}):null]}):null]},gt.path)})}):null]}):null]})})}function $w({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let _=null;const g=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),_!=null&&cancelAnimationFrame(_)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Iw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:_,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,iconScaleStyle:S,normalizedSearchQuery:j,matchingNodeIds:k,focusedNode:M,renderNodes:z,shouldRenderNode:L,manuallyOpenedClumps:D,manuallyClosedClumps:W,defaultCollapsedClumps:U,leadByClusterKey:X,clusterKeyByCommitId:V,clusterCounts:J,commitIdsWithRenderedAncestry:le,nodeWarnings:ie,connectorParentShas:ke,branchStartShas:$e,branchOffNodeShas:Z,crossBranchOutgoingShas:ue,branchBaseCommitByName:I,branchStartAccentClass:ne,connectorParentAccentClass:F,commitCornerRadiusPx:K,lineStrokeWidth:ge,pointFormatter:B,connectors:ae,mergeConnectors:re,cullConnectorPath:de,flushCameraReactTick:Ee,setManuallyOpenedClumps:Oe,setManuallyClosedClumps:Ae,onCommitCardClick:et,unpushedCommitShasSetByBranch:ft,checkedOutHeadSha:zt}){const[gt,pt]=y.useState(new Set),qe=y.useRef(null);y.useEffect(()=>{const Y=new Set;J.forEach((Ue,it)=>{(D.has(it)||!U.has(it)&&!W.has(it))&&Y.add(it)});const je=qe.current;if(je==null){qe.current=Y;return}const We=[];if(Y.forEach(Ue=>{je.has(Ue)||We.push(Ue)}),We.length>0){pt(it=>{const Ne=new Set(it);return We.forEach(st=>Ne.add(st)),Ne});const Ue=window.setTimeout(()=>{pt(it=>{const Ne=new Set(it);return We.forEach(st=>Ne.delete(st)),Ne})},260);return qe.current=Y,()=>{window.clearTimeout(Ue)}}qe.current=Y},[J,U,W,D]);const Yt=(Y,je)=>{const We=je.zIndex-Y.zIndex;if(We!==0)return We;const Ue=Math.min(Y.fromY,Y.toY),it=Math.min(je.fromY,je.toY),Ne=Ue-it;return Ne!==0?Ne:Y.id.localeCompare(je.id)},Kt=re.filter(Y=>de(Y)).sort(Yt),Ze=ae.filter(Y=>de(Y)).sort(Yt),At=z.filter(Y=>L(Y));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[At.map(Y=>{var bt,tt,Lt,Ht,dt;const je=V.get(Y.commit.visualId),We=je?D.has(je)||!U.has(je)&&!W.has(je):!1,Ue=je?X.get(je)===Y.commit.visualId:!1,it=je!=null&&We&&!Ue&&gt.has(je),Ne=je&&(bt=J.get(je))!=null?bt:1,st=le.has(Y.commit.id),at=(tt=ie.get(Y.commit.id))!=null?tt:[],yt=at.length>0&&!st,xt=w.includes(Y.commit.id),ot=Y.commit.id==="WORKING_TREE"||Y.commit.kind==="uncommitted",H=Y.commit.kind==="stash"||Y.commit.id.startsWith("STASH:"),te=/^STASH:(\d+)$/.exec(Y.commit.id),me=te?`Stash:${te[1]}`:null,ve=H?Y.commit.message.trim()&&Y.commit.message.trim()!=="git-visualizer"?Y.commit.message:"Stashed changes":Y.commit.message,Qe=Y.commit.kind==="branch-created"&&Y.commit.id.startsWith("BRANCH_HEAD:"),Ge=ot||((Ht=(Lt=ft.get(Y.commit.branchName))==null?void 0:Lt.has(Y.commit.id))!=null?Ht:!1),vt=(ot||zt!=null&&Y.commit.id===zt)&&!xt,Ve=vt?"text-[#38BDF2]":xt?"text-[#158EFC]":"text-muted-foreground",$t=vt?{color:"#38BDF2"}:xt?{color:"#158EFC"}:void 0;return l.jsxs($w,{fadeIn:it,dataCommitCard:"true",className:Rn("group absolute z-20 cursor-grab active:cursor-grabbing",j&&!k.has(Y.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",j&&k.has(Y.commit.id)?"scale-[1.01]":"",(M==null?void 0:M.commit.id)===Y.commit.id?"z-30 scale-[1.015]":""),style:{left:Y.x,top:Y.y,width:_s,height:bl+zs+4,overflow:"visible"},onClick:Pe=>et(Pe,Y),onPointerDown:Pe=>_(Pe,Y),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Rn("min-w-0 h-4 flex-1 text-sm font-medium leading-none",Ve,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:$t,children:H&&me?me:Y.commit.branchName?`${Y.commit.branchName}/${Y.commit.id.slice(0,7)}`:Y.commit.id.slice(0,7)}),Ue&&Ne>1?l.jsx("button",{type:"button",onMouseDown:Pe=>{Pe.stopPropagation()},onClick:Pe=>{if(Pe.stopPropagation(),Pe.preventDefault(),!je)return;!U.has(je)?(Oe(Mt=>{if(!Mt.has(je))return Mt;const _t=new Set(Mt);return _t.delete(je),_t}),Ae(Mt=>{const _t=new Set(Mt);return _t.has(je)?_t.delete(je):_t.add(je),_t})):(Ae(Mt=>{if(!Mt.has(je))return Mt;const _t=new Set(Mt);return _t.delete(je),_t}),Oe(Mt=>{const _t=new Set(Mt);return _t.has(je)?_t.delete(je):_t.add(je),_t})),Ee()},className:Rn("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",Ve),style:$t,children:We?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Ne}`}):null]})}),l.jsx("div",{className:Rn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",vt&&!Ge&&!H&&!Qe?"bg-[#EBF7FE]":xt&&!Ge&&!H&&!Qe?"bg-[#E5F0FF]":Ge||H||Qe?"bg-transparent":"bg-[#F5F5F5]",H||ot||Qe?"border-dashed":"",Z.has(Y.commit.id)||$e.has(Y.commit.id)||ue.has(Y.commit.id)?ne:ke.has(Y.commit.id)?F:((dt=I.get(Y.commit.branchName))==null?void 0:dt.id)===Y.commit.id?"border-amber-500":yt?"border-red-500":"",(j&&k.has(Y.commit.id)&&!d,"")),style:{top:0,borderWidth:`${H||ot||Qe?ge*(2/1.5):ge}px`,borderColor:vt?"#38BDF2":xt?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${K}px`,borderBottomRightRadius:`${K}px`,borderBottomLeftRadius:`${K}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Rn("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",Ve,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:$t,children:Ue&&We?ve:Ue&&Ne>1?`${ve} +${Ne-1}`:ve}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:yt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:at.join(`
`),children:"Broken ancestry"}):null})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Rn("select-text text-sm font-medium",Ve),"data-selectable-text":"true",style:$t,children:["@",Y.commit.author]}),l.jsx("div",{className:Rn("select-text text-sm font-medium",Ve),"data-selectable-text":"true",style:$t,children:new Date(Y.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(M==null?void 0:M.commit.id)===Y.commit.id&&j?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:S,children:"Search result"}):null]})})]},Y.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Kt.map(Y=>{const{fromX:je,fromY:We,toX:Ue,toY:it}=Y,Ne=xy(je,We,Ue,it,B,Y.fromFace,Y.toFace);return l.jsx("path",{d:Ne,fill:"none",stroke:Wh,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"},Y.id)}),Ze.map(Y=>{const{fromX:je,fromY:We,toX:Ue,toY:it}=Y,Ne=xy(je,We,Ue,it,B,Y.fromFace,Y.toFace);return l.jsx("path",{d:Ne,fill:"none",stroke:Wh,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"},Y.id)})]})]})})})}function Pw({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:_,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function Hw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:_,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:j,onNewBranchCreateModeChange:k,onNewBranchDialogClose:M,onNewBranchConfirm:z,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:D,createBranchFromNodeInProgress:W}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:U=>U.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:U=>i(U.target.value),onKeyDown:U=>{(U.metaKey||U.ctrlKey)&&U.key==="Enter"&&(U.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:U=>U.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(U=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:U},U))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:_,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:M,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:U=>U.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:Rn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>k("new-root"),className:Rn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:U=>j(U.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:M,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:z,disabled:!w.trim()||W||S==="from-selected-node"&&!L&&!D,className:Rn("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:W?"Creating...":"Create"})]})]})}):null]})}const jy="/icon-GitOrientation.svg";function Uw({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>n(i),className:Rn("inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:Rn("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${jy})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${jy})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function Vw({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){return l.jsxs("div",{className:"window-no-drag flex h-7 w-full min-w-[10rem] max-w-[20rem] items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(uw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{value:t,onChange:u=>n(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),c(1))},placeholder:"Search",className:"w-full bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(nw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Hx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function Yw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(ac),c=y.useRef({panX:0,panY:0,zoom:ac}),u=y.useRef(null),d=y.useRef(ac),h=y.useRef(null),[p,_]=y.useState(!1),[g,x]=y.useState(ac),[b,w]=y.useState(0),S=y.useRef(null),j=y.useRef(0),k=y.useCallback(()=>{const J=t.current;if(!J)return null;const le=J.getBoundingClientRect(),ie=getComputedStyle(J),ke=Number.parseFloat(ie.borderLeftWidth)||0,$e=Number.parseFloat(ie.borderTopWidth)||0,Z=Number.parseFloat(ie.paddingLeft)||kd,ue=Number.parseFloat(ie.paddingTop)||kd;return{x:le.left+ke+Z,y:le.top+$e+ue}},[t]),M=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(J=>J+1)}),j.current=performance.now()},[]),z=y.useCallback((J,le,ie)=>{const ke=c.current;c.current={panX:J,panY:le,zoom:ie};const $e=n.current;if($e&&($e.style.transform=`translate3d(${J}px, ${le}px, 0) scale(${ie/ra})`),Math.abs(d.current-ie)>Gh&&(d.current=ie,x(ie)),Math.abs(ie-ke.zoom)>Gh){M();return}const I=performance.now()-j.current;if(I>=by){M();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,M()},by-I)},[M,n]),L=y.useRef(null),D=y.useCallback(()=>{u.current!=null||!L.current||(u.current=window.requestAnimationFrame(L.current))},[]),W=y.useCallback(()=>{_(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,_(!1)},90)},[]),U=y.useCallback((J,le,ie)=>{i.current={x:J,y:le},a.current=ie,W(),D()},[W,D]);L.current=()=>{u.current=null;const J=c.current,le=i.current.x,ie=i.current.y,ke=a.current,$e=Math.abs(le-J.panX)<=wy?le:J.panX+(le-J.panX)*vy,Z=Math.abs(ie-J.panY)<=wy?ie:J.panY+(ie-J.panY)*vy,ue=Math.abs(ke-J.zoom)<=Gh?ke:J.zoom+(ke-J.zoom)*jw;z($e,Z,ue),$e!==le||Z!==ie||ue!==ke?L.current&&(u.current=window.requestAnimationFrame(L.current)):M()};const X=y.useCallback((J,le,ie)=>{const ke=Ew(ie),$e=c.current,Z=k();if(!Z){U(i.current.x,i.current.y,ke);return}const ue=J-Z.x,I=le-Z.y,ne=$e.zoom/ra,F=ke/ra,K=(ue-$e.panX)/ne,ge=(I-$e.panY)/ne;U(ue-K*F,I-ge*F,ke)},[k,U]),V=y.useCallback(J=>{if(J.preventDefault(),J.ctrlKey||J.metaKey){const le=Math.exp(-J.deltaY*Cw);X(J.clientX,J.clientY,a.current*le);return}U(i.current.x-J.deltaX,i.current.y-J.deltaY,a.current)},[U,X]);return y.useLayoutEffect(()=>(z(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[z]),y.useLayoutEffect(()=>{const J=n.current;if(!J)return;const le=c.current;J.style.transform=`translate3d(${le.panX}px, ${le.panY}px, 0) scale(${le.zoom/ra})`}),{isCameraMoving:p,renderedZoom:g,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:k,flushCameraReactTick:M,syncCamera:U,handleWheel:V}}function Ww(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function Fw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[_,g]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[j,k]=y.useState(null),M=y.useCallback(L=>{const D=t.current,W=i();if(!D||!W)return[];const U=D.getBoundingClientRect(),X=n.current.zoom/ra;if(X<=0)return[];const V=[],J=L.left,le=L.left+L.width,ie=L.top,ke=L.top+L.height;for(const $e of a){if(!c($e))continue;const Z=W.x+n.current.panX+$e.x*X-U.left,ue=W.y+n.current.panY+$e.y*X-U.top,I=Z+_s*X,ne=ue+(bl+zs)*X;!(I<J||Z>le||ne<ie||ue>ke)&&V.push($e.commit.id)}return V},[i,a,n,t,c]),z=y.useCallback(L=>{if(L.button!==0)return;const D=L.target;if(D!=null&&D.closest("[data-commit-card]")||D!=null&&D.closest("button, a, input, textarea, select"))return;const W=t.current;if(!W)return;L.preventDefault();const U=W.getBoundingClientRect(),X=L.clientX-U.left,V=L.clientY-U.top;d.current={startX:X,startY:V,currentX:X,currentY:V,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?w:[],g(!0),b({left:X,top:V,width:0,height:0})},[t,w]);return y.useEffect(()=>{const L=W=>{var ie;const U=d.current;if(!U)return;const X=t.current;if(!X)return;const V=X.getBoundingClientRect();U.currentX=W.clientX-V.left,U.currentY=W.clientY-V.top,!h.current&&(Math.abs(U.currentX-U.startX)>2||Math.abs(U.currentY-U.startY)>2)&&(h.current=!0);const J=Ww(U);b(J);const le=M(J);S(U.additive?Array.from(new Set([...p.current,...le])):Array.from(new Set(le))),U.additive||k((ie=le[le.length-1])!=null?ie:null)},D=()=>{if(d.current){const W=h.current;d.current=null,h.current=!1,g(!1),b(null),W||(S([]),k(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",D),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",D)}},[M,u,t]),{isMarqueeSelecting:_,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:j,setMergeTargetCommitSha:k,startMarqueeDrag:z}}function My({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:_,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:j,mergeInProgress:k=!1,onPushAllBranches:M,onPushCurrentBranch:z,onPushCommitTargets:L,pushInProgress:D=!1,onDeleteSelection:W,deleteInProgress:U=!1,worktrees:X=[],currentRepoPath:V,onRemoveWorktree:J,removeWorktreeInProgress:le=!1,onSwitchToWorktree:ie,onStashLocalChanges:ke,stashInProgress:$e=!1,stashDisabled:Z=!1,onCommitLocalChanges:ue,commitInProgress:I=!1,commitDisabled:ne=!1,onStageAllChanges:F,stageInProgress:K=!1,onCreateBranchFromNode:ge,onCreateRootBranch:B,createBranchFromNodeInProgress:ae=!1,isDebugOpen:re=!1,onDebugClose:de,orientation:Ee="horizontal",branchCommitPreviews:Oe={},branchParentByName:Ae={},branchUniqueAheadCounts:et={},gridSearchQuery:ft="",gridSearchJumpToken:zt=0,gridSearchJumpDirection:gt=1,gridFocusSha:pt=null,checkedOutRef:qe=null,onGridSearchResultCountChange:Yt,onGridSearchResultIndexChange:Kt,onGridSearchFocusChange:Ze,onInteractionChange:At,manuallyOpenedClumps:Y,manuallyClosedClumps:je,setManuallyOpenedClumps:We,setManuallyClosedClumps:Ue,layoutModel:it,gridHudProps:Ne}){var ps,Us,xo,vn,Ft,an,cn,Ms,Co,Vs,Bs,qs,zo,bo;const st=y.useRef(null),at=y.useRef(null),yt=y.useRef(null),xt=y.useRef(null),ot=y.useRef(void 0),H=y.useRef(void 0),te=y.useRef(void 0),me=y.useRef(0),[ve,Qe]=y.useState(!1),[Ge,Re]=y.useState(!1),[vt,Ve]=y.useState(""),[$t,bt]=y.useState(!1),[tt,Lt]=y.useState(!1),[Ht,dt]=y.useState(""),[Pe,jt]=y.useState("from-selected-node"),[Mt,_t]=y.useState(()=>new Set),[en,ct]=y.useState(()=>new Set),[Bt,xn]=y.useState({}),Bn=y.useRef(!1),Sn=y.useRef(null),ls=y.useRef(null),Yn=Y!=null?Y:Mt,Tn=je!=null?je:en,Cn=We!=null?We:_t,$n=Ue!=null?Ue:ct,[rn,En]=y.useState(null),[nt,ln]=y.useState(null),{isCameraMoving:no,renderedZoom:Ao,cameraRenderTick:cs,renderedCameraRef:Es,interactionIdleTimeoutRef:ei,getTransformLayerOriginScreen:Cs,flushCameraReactTick:uo,syncCamera:so,handleWheel:fo}=Yw({mapPadHostRef:at,transformLayerRef:yt}),kn=y.useMemo(()=>up(t,d,Oe,Ae),[t,d,Oe,Ae]),ti=y.useMemo(()=>Mc({lanes:kn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Oe,branchParentByName:Ae,branchUniqueAheadCounts:et,manuallyOpenedClumps:Yn,manuallyClosedClumps:Tn,isDebugOpen:re,gridSearchQuery:ft,gridFocusSha:pt,checkedOutRef:qe!=null?qe:null,orientation:Ee,nodePositionOverrides:Bt}),[kn,t,n,i,a,d,Oe,Ae,et,Yn,Tn,re,ft,pt,(ps=qe==null?void 0:qe.headSha)!=null?ps:null,(Us=qe==null?void 0:qe.branchName)!=null?Us:null,Ee,Bt]),As=Object.keys(Bt).length>0?ti:it!=null?it:ti,us=y.useMemo(()=>Mc({lanes:kn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Oe,branchParentByName:Ae,branchUniqueAheadCounts:et,manuallyOpenedClumps:Yn,manuallyClosedClumps:Tn,isDebugOpen:re,gridSearchQuery:ft,gridFocusSha:pt,checkedOutRef:qe!=null?qe:null,orientation:Ee,nodePositionOverrides:Bt}),[kn,t,n,i,a,d,Oe,Ae,et,Yn,Tn,re,ft,pt,(xo=qe==null?void 0:qe.headSha)!=null?xo:null,(vn=qe==null?void 0:qe.branchName)!=null?vn:null,Ee,Bt]),{allCommits:Ho,clusterKeyByCommitId:ho,leadByClusterKey:Ds,clusterCounts:Ps,matchingNodes:An,matchingNodeIds:os,normalizedSearchQuery:jn,focusedNode:tn,defaultCollapsedClumps:Do,renderNodes:ds,visibleNodesBySha:di,contentWidth:fi,contentHeight:No,connectors:ni,mergeConnectors:ys,connectorDecisions:wo,nodeWarnings:In,commitIdsWithRenderedAncestry:Xs,connectorParentShas:fs,branchStartShas:hs,branchOffNodeShas:zi,crossBranchOutgoingShas:Uo,branchBaseCommitByName:Qi,pointFormatter:qt}=As,$i=!!jn,Ln=Ao/ra,Si=y.useMemo(()=>({transform:`scale(${1/Ln})`,transformOrigin:"top left",width:`${100*Ln}%`,height:`${100*Ln}%`}),[Ln]),Ro=-(20/Ln),Pn=y.useMemo(()=>{const xe=new Map;for(const C of ds)xe.set(C.commit.visualId,C);return xe},[ds]),oo=y.useMemo(()=>Rw(ds,Ro),[ds,Ro]),Vo=xe=>{var R;const C=xe.commit.id,E=xe.commit.visualId;if($i&&os.has(C)||(tn==null?void 0:tn.commit.id)===C||rn===null)return!0;if(!rn.has(E))return!1;const N=ho.get(E);return N&&((R=Ps.get(N))!=null?R:1)>1&&(Yn.has(N)||!Do.has(N)&&!Tn.has(N)),!0},mo=1.5/Ln,bn=Mw/Ln,So=y.useMemo(()=>({transform:`scale(${1/Ln})`,transformOrigin:"center"}),[Ln]),Yo="border-slate-400/70",xs="border-blue-500",Gs=y.useMemo(()=>new Map(t.map(xe=>[xe.name,xe])),[t]),sn=(Ft=qe==null?void 0:qe.hasUncommittedChanges)!=null?Ft:!1;y.useMemo(()=>new Set(t.filter(xe=>xe.commitsAhead===0&&!xe.name.startsWith("*")).map(xe=>xe.name)),[t]);const Ns=y.useMemo(()=>{var C,E;const xe=new Map;for(const N of ds){const R=(C=xe.get(N.commit.id))!=null?C:new Set;R.add(N.commit.branchName),xe.set(N.commit.id,R)}for(const N of i){const R=(E=xe.get(N.fullSha))!=null?E:new Set;N.branch&&R.add(N.branch),xe.set(N.fullSha,R)}return xe},[ds,i,d]),io=y.useMemo(()=>new Map(Object.entries(c).map(([xe,C])=>[xe,new Set(C)])),[c]),Bo=y.useCallback(()=>{ei.current,uo()},[uo,ei]),{isMarqueeSelecting:ms,marqueeRect:po,selectedCommitShas:Lo,setSelectedCommitShas:Wo,mergeTargetCommitSha:Hs,setMergeTargetCommitSha:_o,startMarqueeDrag:si}=Fw({scrollContainerRef:st,renderedCameraRef:Es,getTransformLayerOriginScreen:Cs,renderNodes:ds,shouldRenderNode:Vo,onPointerReleaseNoMarquee:Bo}),qn=y.useMemo(()=>new Set(ds.map(xe=>xe.commit.id)),[ds]),dn=y.useMemo(()=>Lo.filter(xe=>qn.has(xe)),[Lo,qn]),Fo=y.useCallback((xe,C)=>{var R;if(!C)return!1;if(((R=Oe[xe])!=null?R:[]).some(P=>wi(P.fullSha,C)||wi(P.sha,C)))return!0;const N=Gs.get(xe);return!!(N!=null&&N.headSha&&wi(N.headSha,C))},[Oe,Gs]),Wn=(an=qe==null?void 0:qe.branchName)!=null?an:null,Rs=(cn=qe==null?void 0:qe.headSha)!=null?cn:null,hi=Wn==null,ao=y.useMemo(()=>{if(!pt)return null;const xe=ds.filter(C=>C.commit.id===pt);return xe.length===0?null:xe.length===1||!tn?xe[0]:xe.reduce((C,E)=>{const N=(C.x-tn.x)**2+(C.y-tn.y)**2;return(E.x-tn.x)**2+(E.y-tn.y)**2<N?E:C})},[pt,ds,tn]),ks=y.useCallback((xe,C,E)=>{for(const N of X){if(!qh(N,V))continue;if(N.branchName){if(N.branchName===xe&&wi(N.headSha,C))return N;continue}if(!wi(N.headSha,C)&&!wi(N.headSha,E))continue;if(N.parentSha&&Fo(xe,N.parentSha)||Fo(xe,N.headSha))return N;const R=Gs.get(xe);if(R&&wi(R.headSha,N.headSha)||xe===d&&i.some(P=>wi(P.fullSha,N.headSha)))return N}return null},[X,V,Fo,Gs,d,i]),go=y.useCallback(xe=>{for(const C of X)if(qh(C,V)&&C.branchName===xe)return C;return null},[X,V]),Oo=y.useCallback((xe,C)=>{for(const E of X)if(qh(E,V)&&(wi(E.headSha,xe)||wi(E.headSha,C)))return E;return null},[X,V]),T=y.useCallback(xe=>{var C;return Array.from((C=Ns.get(xe))!=null?C:[])},[Ns]),G=y.useMemo(()=>{var R,P,oe,Ce;const xe=new Map;for(const Le of dn){const Xe=T(Le);if(Xe.length===0)continue;const ut=(R=Xe.find(Tt=>Tt!==d))!=null?R:Xe[0],St=dn.filter(Tt=>Tt!==Le).filter(Tt=>!new Set(T(Tt)).has(ut));xe.set(ut,{targetSha:Le,targetBranch:ut,sourceRefs:St})}const C=Array.from(xe.values()),E=Hs?C.find(Le=>{var Xe;return Le.targetSha===Hs||Le.targetBranch===((Xe=T(Hs)[0])!=null?Xe:"")}):null,N=(P=E!=null?E:C[C.length-1])!=null?P:null;return{options:C,selected:N,targetBranch:(oe=N==null?void 0:N.targetBranch)!=null?oe:null,sources:(Ce=N==null?void 0:N.sourceRefs)!=null?Ce:[]}},[dn,T,d,Hs]),fe=y.useMemo(()=>{const xe=[...Wn===d?[{name:d,headSha:Rs!=null?Rs:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(C=>!C.name.startsWith("*")&&C.unpushedCommits>0&&C.remoteSyncStatus!=="on-github").map(C=>[C.name,C]);return new Map(xe)},[t,Wn,Rs,d,a.length]),be=y.useMemo(()=>{const xe=N=>{var P;const R=T(N).filter(oe=>fe.has(oe));return R.length===0?null:R.length===1?R[0]:Wn&&R.includes(Wn)?Wn:(P=R.find(oe=>oe!==d))!=null?P:R[0]},C=N=>{var R;return N===d?a.map(P=>{var oe,Ce;return{fullSha:P.fullSha,sha:P.sha,parentSha:(oe=P.parentSha)!=null?oe:null,message:P.message,author:P.author,date:P.date,kind:(Ce=P.kind)!=null?Ce:"commit"}}):(R=Oe[N])!=null?R:[]},E=new Map;for(const N of dn){const R=xe(N);if(!R)continue;const P=fe.get(R);if(!P)continue;const oe=C(R).slice(0,P.unpushedCommits),Ce=oe.findIndex(Xe=>Xe.fullSha===N);if(Ce===-1)continue;const Le=E.get(R);(!Le||Ce<Le.targetIndex)&&E.set(R,{branchName:R,targetSha:N,targetIndex:Ce,commitCount:oe.length-Ce})}return Array.from(E.values())},[dn,T,fe,Wn,d,a,Oe]),He=y.useMemo(()=>Array.from(new Set(dn.map(xe=>/^STASH:(\d+)$/.exec(xe)).filter(xe=>!!xe).map(xe=>parseInt(xe[1],10)))).sort((xe,C)=>xe-C),[dn]),Ke=dn.includes("WORKING_TREE"),It=(Ke?1:0)+He.length,Vt=[...Ke?["Uncommitted changes"]:[],...He.map(xe=>`Stash ${xe+1}`)],Dt=fe.size,Fe=!hi&&!!Wn&&fe.has(Wn),Qt=Wn?`Push ${Wn}`:"Push current branch",fn=be.length===1?be[0].commitCount>1?`Push ${be[0].commitCount} commits on ${be[0].branchName}`:`Push ${be[0].targetSha.slice(0,7)} on ${be[0].branchName}`:`Push ${be.length} selected ranges`;y.useEffect(()=>{const xe=no||ms;xt.current!==xe&&(xt.current=xe,At==null||At(xe))},[no,ms,At]),y.useEffect(()=>{const xe=jn?An.length:null;ot.current!==xe&&(ot.current=xe,Yt==null||Yt(xe))},[An.length,jn,Yt]),y.useEffect(()=>{const xe=jn&&pt?(()=>{const C=An.findIndex(E=>E.commit.id===pt);return C>=0?C:null})():null;H.current!==xe&&(H.current=xe,Kt==null||Kt(xe))},[pt,An,jn,Kt]);const Hn=y.useMemo(()=>{var Le,Xe,ut,St,Tt,Nt;if(!jn)return null;const xe=jn,C=t.map(lt=>lt.name),E=C.find(lt=>lt.toLowerCase()===xe),N=E!=null?E:C.find(lt=>lt.toLowerCase().startsWith(xe)),P=N!=null?N:C.find(lt=>lt.toLowerCase().includes(xe));if(!P)return null;const oe=(Le=t.find(lt=>lt.name===P))!=null?Le:null;if(oe!=null&&oe.headSha)return oe.headSha;const Ce=(Xe=Oe[P])!=null?Xe:[];return Ce.length>0?(St=(ut=Ce[0])==null?void 0:ut.fullSha)!=null?St:null:P===d&&(Nt=(Tt=i[0])==null?void 0:Tt.fullSha)!=null?Nt:null},[jn,t,Oe,d,i]);y.useEffect(()=>{var N,R,P;if(!jn){if(me.current=zt,te.current===null)return;te.current=null,Ze==null||Ze(null);return}if(zt<=0||me.current===zt)return;me.current=zt;let xe;const C=pt?An.findIndex(oe=>oe.commit.id===pt):-1,E=An.length>0?C<0?0:(C+gt+An.length)%An.length:-1;xe=(P=(R=(N=An[E])==null?void 0:N.commit.id)!=null?R:Hn)!=null?P:null,te.current!==xe&&(te.current=xe,Ze==null||Ze(xe))},[An,jn,Ze,Hn,zt,gt]),y.useLayoutEffect(()=>{if(!pt)return;const xe=st.current,C=ao;if(!xe||!C)return;const E=Cs();if(!E)return;const N=xe.getBoundingClientRect(),R=Es.current.zoom,P=R/ra,oe=C.x+_s/2,Ce=C.y+bl+zs/2,Le=N.left+N.width/2,Xe=N.top+N.height/2;so(Le-E.x-oe*P,Xe-E.y-Ce*P,R)},[pt,zt,ao,Cs,so,Es]);const Un=(Vs=(Co=nt==null?void 0:nt.width)!=null?Co:(Ms=st.current)==null?void 0:Ms.clientWidth)!=null?Vs:0,pn=(zo=(qs=nt==null?void 0:nt.height)!=null?qs:(Bs=st.current)==null?void 0:Bs.clientHeight)!=null?zo:0,js=Un>0&&pn>0?Sy(Un,pn,Es.current,{innerPaddingPx:kd}):null,yo=js!=null?Cy(js,Es.current.zoom):null,mi=xe=>{if(!yo)return!0;const{fromX:C,fromY:E,toX:N,toY:R}=xe;return Nw(C,E,N,R,yo,xe.fromFace,xe.toFace)};y.useLayoutEffect(()=>{var oe;const xe=st.current;if(!xe||xe.clientWidth<=0||xe.clientHeight<=0)return;const C=xe.clientWidth,E=xe.clientHeight;ln(Ce=>(Ce==null?void 0:Ce.width)===C&&(Ce==null?void 0:Ce.height)===E?Ce:{width:C,height:E});const N=Sy(C,E,Es.current,{innerPaddingPx:kd});if(!N){En(Ce=>Ce===null?Ce:null);return}const R=Cy(N,Es.current.zoom),P=Bw(oo,R,Pn,Ro);for(const Ce of ds){const Le=ho.get(Ce.commit.visualId);if(!Le||((oe=Ps.get(Le))!=null?oe:1)<=1)continue;(Yn.has(Le)||!Do.has(Le)&&!Tn.has(Le))&&P.add(Ce.commit.visualId)}En(Ce=>Aw(Ce,P)?Ce:P)},[Ao,zt,pt,no,cs,Yn,Tn,Do,ho,Ps,ds,nt,oo,Pn,Ro]),y.useLayoutEffect(()=>{const xe=st.current;if(!xe)return;const C=()=>{const N=xe.clientWidth,R=xe.clientHeight;N<=0||R<=0||ln(P=>(P==null?void 0:P.width)===N&&(P==null?void 0:P.height)===R?P:{width:N,height:R})};C();const E=new ResizeObserver(C);return E.observe(xe),()=>E.disconnect()},[Ho.length]);const Xo=ds.filter(xe=>Vo(xe)).length,Zi=ys.filter(xe=>mi(xe)).length,ua=ni.filter(xe=>mi(xe)).length,Ii=y.useCallback((xe,C)=>{if(Bn.current){xe.preventDefault(),xe.stopPropagation();return}xe.stopPropagation();const E=C.commit.id;if(xe.shiftKey?(Wo(oe=>oe.includes(E)?oe.filter(Ce=>Ce!==E):[...oe,E]),_o(E)):(Wo(oe=>oe.includes(E)?[]:[E]),_o(oe=>oe===E?null:E)),!(xe.metaKey||xe.ctrlKey||xe.detail>=2)||E==="WORKING_TREE")return;const R=E.length>=40?E.slice(0,7):E;let P=null;if(C.commit.branchName?(P=ks(C.commit.branchName,E,R),P||(P=go(C.commit.branchName))):P=Oo(E,R),P&&ie){ie(P.path);return}h==null||h({commitSha:E})},[Oo,ks,go,h,ie]),$=y.useCallback((xe,C)=>{var Ce,Le,Xe,ut,St;if(xe.button!==0)return;const E=xe.target;if(E!=null&&E.closest('[data-selectable-text="true"]')||E!=null&&E.closest("button, a, input, textarea, select"))return;xe.stopPropagation(),xe.preventDefault(),Bn.current=!1,xe.currentTarget.setPointerCapture(xe.pointerId);const N=(Ce=Bt[C.commit.visualId])!=null?Ce:Bt[C.commit.id];Sn.current={nodeId:C.commit.visualId,startX:xe.clientX,startY:xe.clientY,baseX:(Le=N==null?void 0:N.x)!=null?Le:C.x,baseY:(Xe=N==null?void 0:N.y)!=null?Xe:C.y,moved:!1,pendingX:(ut=N==null?void 0:N.x)!=null?ut:C.x,pendingY:(St=N==null?void 0:N.y)!=null?St:C.y};const R=()=>{ls.current=null;const Tt=Sn.current;Tt&&xn(Nt=>({...Nt,[Tt.nodeId]:{x:Tt.pendingX,y:Tt.pendingY}}))},P=Tt=>{const Nt=Sn.current;if(!Nt)return;const lt=Es.current.zoom/ra,ht=lt>0?1/lt:1,Kn=(Tt.clientX-Nt.startX)*ht,Qn=(Tt.clientY-Nt.startY)*ht;(Math.abs(Kn)>2||Math.abs(Qn)>2)&&(Nt.moved=!0),Nt.moved&&(Bn.current=!0),Nt.pendingX=Nt.baseX+Kn,Nt.pendingY=Nt.baseY+Qn,ls.current==null&&(ls.current=window.requestAnimationFrame(R))},oe=()=>{window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",oe),window.removeEventListener("pointercancel",oe),ls.current!=null&&(window.cancelAnimationFrame(ls.current),ls.current=null,R());try{xe.currentTarget.releasePointerCapture(xe.pointerId)}catch{}const Tt=Sn.current;Sn.current=null,Tt&&window.setTimeout(()=>{Bn.current=!1},0)};window.addEventListener("pointermove",P),window.addEventListener("pointerup",oe),window.addEventListener("pointercancel",oe)},[Bt]),Q=y.useCallback(async()=>{if(!ue)return;await ue(vt)&&(Re(!1),Ve(""))},[ue,vt]),se=y.useCallback(async()=>{W&&(await W({branchNames:[],discardUncommittedChanges:Ke,stashIndices:He}),bt(!1),Wo([]),_o(null))},[W,Ke,He]),_e=y.useCallback(async()=>{var C;const xe=Ht.trim();if(xe){if(Pe==="new-root"){if(!B)return;await B(xe)}else{if(!ge)return;const E=dn.length===1?dn[0]:(C=qe==null?void 0:qe.headSha)!=null?C:null;if(!E||!(E==="WORKING_TREE"||E.startsWith("STASH:")||E===(qe==null?void 0:qe.headSha)))return;await ge(E,xe)}Lt(!1),dt(""),jt("from-selected-node"),Wo([]),_o(null)}},[qe==null?void 0:qe.headSha,Pe,Ht,ge,B,dn]),Je=!!(qe!=null&&qe.headSha),rt=dn.length===0&&Je,mt=dn.length===1&&(dn[0]==="WORKING_TREE"||dn[0].startsWith("STASH:"))||rt,Ot=!!B;return y.useEffect(()=>{if(tt){if(!mt&&!rt&&Ot){jt("new-root");return}(mt||rt)&&jt("from-selected-node")}},[Ot,rt,tt,mt]),y.useEffect(()=>{const xe=C=>{if(!W||$t||dn.length===0)return;const E=C.target;E!=null&&E.closest('input, textarea, select, button, [contenteditable="true"]')||C.key!=="Delete"&&C.key!=="Backspace"||(C.preventDefault(),bt(!0))};return window.addEventListener("keydown",xe),()=>window.removeEventListener("keydown",xe)},[$t,W,dn.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx(Pw,{isOpen:re,onClose:()=>de==null?void 0:de(),visibleBounds:yo,renderedNodeCount:Xo,totalNodeCount:ds.length,renderedMergeConnectorCount:Zi,totalMergeConnectorCount:ys.length,renderedConnectorCount:ua,totalConnectorCount:ni.length,mapGridCullViewportInsetScreenPx:kw,debugRows:us.debugRows,branchDebugRows:us.branchDebugRows,connectorDecisions:wo}),Ne?l.jsxs("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-[70] flex justify-between",children:[l.jsxs("div",{className:"window-no-drag pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] flex-nowrap items-center justify-between gap-3 overflow-visible p-2.25",children:[l.jsx("div",{className:"flex min-w-0 shrink-0 items-center",children:l.jsx(zw,{selectedVisibleCommitShas:dn,commitInProgress:I,commitDisabled:ne,stageInProgress:K,stashInProgress:$e,stashDisabled:Z,pushInProgress:D,hasUncommittedChanges:sn,createBranchFromNodeInProgress:ae,onCommitLocalChanges:ue,onStageAllChanges:F?()=>void F():void 0,onStashLocalChanges:ke,onPushCurrentBranch:z,onPushAllBranches:M,onPushCommitTargets:L,onMergeRefsIntoBranch:j,selectedPushTargets:be,selectedPushLabel:fn,canPushCurrentBranch:Fe,pushCurrentBranchLabel:Qt,pushableRemoteBranchCount:Dt,selectedCommitTargetOption:G,mergeInProgress:k,mergeTargetCommitSha:Hs,setMergeTargetCommitSha:_o,worktrees:X,currentRepoPath:V,worktreeMenuOpen:ve,setWorktreeMenuOpen:Qe,onSwitchToWorktree:ie,onRemoveWorktree:J,removeWorktreeInProgress:le,setCommitDialogOpen:Re,setNewBranchDialogOpen:Lt})}),l.jsxs("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:[l.jsx(Vw,{query:Ne.gridSearchQuery,onQueryChange:Ne.setGridSearchQuery,resultCount:Ne.gridSearchResultCount,resultIndex:Ne.gridSearchResultIndex,onJump:xe=>{Ne.setGridSearchJumpDirection(xe),Ne.setGridSearchJumpToken(C=>C+1)}}),l.jsx(Uw,{orientation:Ne.mapGridOrientation,onOrientationChange:Ne.setMapGridOrientation})]})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(bo=Ne.githubAuthStatus)!=null&&bo.ghAvailable&&!Ne.githubAuthStatus.authenticated?l.jsx("button",{onClick:Ne.onGitHubAuthSetup,disabled:Ne.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ne.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Ne.githubAuthStatus&&!Ne.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Ne.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Ne.githubAuthMessage,children:Ne.githubAuthMessage})]}):null,Ne.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Ne.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Ne.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Ne.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Ne.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Ne.commitSwitchFeedback.message})]}):null]})]}):null,Ho.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(Iw,{scrollContainerRef:st,mapPadHostRef:at,transformLayerRef:yt,isMarqueeSelecting:ms,contentWidth:fi,contentHeight:No,isCameraMoving:no,onWheel:fo,onMouseDown:si,onNodePointerDown:$,labelTopPx:Ro,inverseZoomStyle:Si,displayZoom:Ln,iconScaleStyle:So,selectedVisibleCommitShas:dn,normalizedSearchQuery:jn,matchingNodeIds:os,focusedNode:ao,renderNodes:ds,shouldRenderNode:Vo,manuallyOpenedClumps:Yn,manuallyClosedClumps:Tn,defaultCollapsedClumps:Do,leadByClusterKey:Ds,clusterKeyByCommitId:ho,clusterCounts:Ps,commitIdsWithRenderedAncestry:Xs,nodeWarnings:In,connectorParentShas:fs,branchStartShas:hs,branchOffNodeShas:zi,crossBranchOutgoingShas:Uo,branchBaseCommitByName:Qi,branchStartAccentClass:xs,connectorParentAccentClass:Yo,commitCornerRadiusPx:bn,lineStrokeWidth:mo,pointFormatter:qt,connectors:ni,mergeConnectors:ys,cullConnectorPath:mi,flushCameraReactTick:uo,setManuallyOpenedClumps:Cn,setManuallyClosedClumps:$n,onCommitCardClick:Ii,unpushedCommitShasSetByBranch:io,checkedOutHeadSha:Rs}),po&&ms?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:po.left,top:po.top,width:po.width,height:po.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Hw,{commitDialogOpen:Ge,commitMessageDraft:vt,onCommitMessageDraftChange:Ve,onCommitDialogClose:()=>Re(!1),onCommitConfirm:()=>void Q(),commitInProgress:I,deleteConfirmOpen:$t,deleteSelectionItems:Vt,onDeleteConfirmClose:()=>bt(!1),onDeleteConfirm:()=>void se(),deleteInProgress:U,deletableSelectionCount:It,newBranchDialogOpen:tt,newBranchName:Ht,newBranchCreateMode:Pe,onNewBranchNameChange:dt,onNewBranchCreateModeChange:jt,onNewBranchDialogClose:()=>Lt(!1),onNewBranchConfirm:()=>void _e(),selectedCommitCanCreateBranch:mt,currentCheckedOutCommitCanCreateBranch:rt,createBranchFromNodeInProgress:ae})]})}function Xw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:_={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:j=1,gridFocusSha:k=null,onGridSearchResultCountChange:M,onGridSearchResultIndexChange:z,onGridSearchFocusChange:L,view:D="time",isLoading:W=!1,scrollRequest:U,focusedErrorBranch:X,checkedOutRef:V=null,mapTopInsetPx:J=0,onMergeRefsIntoBranch:le,mergeInProgress:ie=!1,onPushAllBranches:ke,onPushCurrentBranch:$e,onPushCommitTargets:Z,pushInProgress:ue=!1,onDeleteSelection:I,worktrees:ne=[],currentRepoPath:F,onRemoveWorktree:K,removeWorktreeInProgress:ge=!1,onSwitchToWorktree:B,onStashLocalChanges:ae,stashInProgress:re=!1,stashDisabled:de=!1,onCommitLocalChanges:Ee,commitInProgress:Oe=!1,commitDisabled:Ae=!1,onStageAllChanges:et,stageInProgress:ft=!1,onCreateBranchFromNode:zt,onCreateRootBranch:gt,createBranchFromNodeInProgress:pt=!1,onMoveNodeBackToBranch:qe,isDebugOpen:Yt=!1,onDebugClose:Kt,orientation:Ze="horizontal",onInteractionChange:At,manuallyOpenedClumps:Y,manuallyClosedClumps:je,setManuallyOpenedClumps:We,setManuallyClosedClumps:Ue,layoutModel:it,gridHudProps:Ne}){const st=new Set(u.map(H=>H.branchName)),at=14*864e5,yt=Date.now();function xt(H){return st.has(H.name)||yt-new Date(H.lastCommitDate).getTime()<=at}const ot=t.filter(H=>H.status==="stale"&&xt(H)).sort((H,te)=>new Date(te.lastCommitDate).getTime()-new Date(H.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:D==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(My,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:_,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,onGridSearchResultCountChange:M,onGridSearchResultIndexChange:z,onGridSearchFocusChange:L,staleBranches:ot,isLoading:W,scrollRequest:U,focusedErrorBranch:X,checkedOutRef:V,mapTopInsetPx:J,onMergeRefsIntoBranch:le,mergeInProgress:ie,onPushAllBranches:ke,onPushCurrentBranch:$e,onPushCommitTargets:Z,pushInProgress:ue,onDeleteSelection:I,worktrees:ne,currentRepoPath:F,onRemoveWorktree:K,removeWorktreeInProgress:ge,onSwitchToWorktree:B,onStashLocalChanges:ae,stashInProgress:re,stashDisabled:de,onCommitLocalChanges:Ee,commitInProgress:Oe,commitDisabled:Ae,onStageAllChanges:et,stageInProgress:ft,onCreateBranchFromNode:zt,onCreateRootBranch:gt,createBranchFromNodeInProgress:pt,onMoveNodeBackToBranch:qe,isDebugOpen:Yt,onDebugClose:Kt,orientation:Ze,onInteractionChange:At,manuallyOpenedClumps:Y,manuallyClosedClumps:je,setManuallyOpenedClumps:We,setManuallyClosedClumps:Ue,layoutModel:it,gridHudProps:Ne})}):D==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(My,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,checkedOutRef:V,onGridSearchResultCountChange:M,onGridSearchResultIndexChange:z,onGridSearchFocusChange:L,onInteractionChange:At,manuallyOpenedClumps:Y,manuallyClosedClumps:je,setManuallyOpenedClumps:We,setManuallyClosedClumps:Ue,layoutModel:it,isDebugOpen:Yt,onDebugClose:Kt,orientation:Ze,gridHudProps:Ne})}):null})}const Cr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Gw(t,n,i,a){if(!t)return null;const c=d=>Cr(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(_=>c(_.fullSha)||c(_.sha)))return d;return null}function qw(t,n,i,a,c,u){var ie,ke,$e,Z,ue,I;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,_=(ke=(ie=i[0])==null?void 0:ie.fullSha)!=null?ke:null,g=[{name:u,headSha:_!=null?_:"",isDefault:!0},...n.map(ne=>({name:ne.name,headSha:ne.headSha,isDefault:!1}))],x=d?g.filter(ne=>Cr(ne.headSha,d)):[],b=Gw(d,i,a,u),w=b?g.find(ne=>ne.name===b):void 0,S=(Z=($e=x.find(ne=>ne.isDefault))!=null?$e:x[0])!=null?Z:w,j=!!(S&&d&&Cr(S.headSha,d)),k=S&&!S.isDefault?n.find(ne=>ne.name===S.name):void 0,M=(()=>{var F;if(!d)return null;const ne=i.find(K=>Cr(K.fullSha,d)||Cr(K.sha,d));if(ne!=null&&ne.date)return ne.date;if(k){const K=((F=a[k.name])!=null?F:[]).find(ge=>Cr(ge.fullSha,d)||Cr(ge.sha,d));if(K!=null&&K.date)return K.date}return null})(),z=M?new Date(M).getTime():Number.NaN,L=Date.now(),D=Number.isFinite(z)?Math.max(L,z+1+t.index):L+t.index,W=new Date(D).toISOString(),U=t.message.trim(),X={fullSha:h,sha:p,parentSha:d,message:U||p,author:"You",date:W,kind:"stash"},V={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(ue=k==null?void 0:k.name)!=null?ue:u,message:U||p,author:"You",date:W,kind:"stash"};if(j&&(S!=null&&S.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,V]};if(j&&k)return{branches:n.map(F=>F.name===k.name?{...F,commitsAhead:F.commitsAhead+1,unpushedCommits:F.unpushedCommits+1,lastCommitDate:W,headSha:h}:F),directCommits:i,branchCommitPreviews:{...a,[k.name]:[X,...a[k.name]||[]]},branchUniqueAheadCounts:{...c,[k.name]:Math.max(0,(I=Object.prototype.hasOwnProperty.call(c,k.name)?c[k.name]:k.commitsAhead)!=null?I:0)+1}};const J=`*Stash:${t.index}`;return{branches:[{name:J,commitsAhead:1,commitsBehind:0,lastCommitDate:W,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(S==null?void 0:S.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[J]:[X]},branchUniqueAheadCounts:{...c,[J]:1}}}function Gx(t,n,i,a,c,u){const d=[...t].sort((p,_)=>p.index-_.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=qw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function Kw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:_,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var X,V,J,le;const j=Gx(_,t,i,u,h,c);let k=j.branches,M=j.directCommits,z=j.branchCommitPreviews,L=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ie=p.headSha||p.parentSha||null,ke=(V=(X=M[0])==null?void 0:X.fullSha)!=null?V:null,$e=(Ae,et)=>!Ae||!et?!1:Ae===et||Ae.startsWith(et)||et.startsWith(Ae),Z=[{name:c,headSha:ke!=null?ke:"",isDefault:!0},...k.map(Ae=>({name:Ae.name,headSha:Ae.headSha,isDefault:!1}))],ue=p.branchName?Z.find(Ae=>Ae.name===p.branchName):void 0,I=ie?Z.filter(Ae=>$e(Ae.headSha,ie)):[],ne=(J=ue!=null?ue:I.find(Ae=>Ae.isDefault))!=null?J:I[0],F=!!(ne&&ie&&$e(ne.headSha,ie)),K=ne&&!ne.isDefault?k.find(Ae=>Ae.name===ne.name):void 0,ge=(()=>{var et;if(!ie)return null;const Ae=M.find(ft=>$e(ft.fullSha,ie)||$e(ft.sha,ie));if(Ae!=null&&Ae.date)return Ae.date;if(K){const ft=((et=z[K.name])!=null?et:[]).find(zt=>$e(zt.fullSha,ie)||$e(zt.sha,ie));if(ft!=null&&ft.date)return ft.date}return null})(),B=ge?new Date(ge).getTime():Number.NaN,ae=Date.now(),re=Number.isFinite(B)?Math.max(ae,B+1):ae,de=new Date(re).toISOString(),Ee={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,message:"Local uncommitted changes",author:"You",date:de,kind:"uncommitted"},Oe={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:de,kind:"uncommitted"};if(F&&(ne!=null&&ne.isDefault))M=[...M,Oe];else if(F&&K)k=k.map(Ae=>Ae.name===K.name?{...Ae,commitsAhead:Ae.commitsAhead+1,unpushedCommits:Ae.unpushedCommits+1,lastCommitDate:de,headSha:"WORKING_TREE"}:Ae),z={...z,[K.name]:[Ee,...z[K.name]||[]]},L={...L,[K.name]:Math.max(0,(le=Object.prototype.hasOwnProperty.call(L,K.name)?L[K.name]:K.commitsAhead)!=null?le:0)+1};else{const Ae={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:de,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:ie!=null?ie:void 0,parentBranch:(ne==null?void 0:ne.name)||p.branchName||c};k=[Ae,...k],z={...z,[Ae.name]:[Ee]},L={...L,[Ae.name]:1}}}const D={...d};D[c]=null;const W=up(k,c,z,D),U=Mc({lanes:W,branches:k,mergeNodes:n,directCommits:M,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:z,branchParentByName:D,branchUniqueAheadCounts:L,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:k,enrichedBranchCommitPreviews:z,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:M,sharedGridLayoutModel:U}}function Ty(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const _=(u=a.get(h))!=null?u:[];_.push(d.name),a.set(h,_)}const c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),_=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-_};for(const[d,h]of a.entries())h.sort(c);return a}function Ey(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),_=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-_},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ay(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const _ of d){const g=[...h,_];if(_===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(_))!=null?p:[],g))return!0}return!1};return u(t,[]),c}function Am({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:_,ancestors:g,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z}){var B,ae;if(g.has(t)||!a.get(t))return null;const D=(B=u.get(t))!=null?B:[],W=D.length>0,U=y.useMemo(()=>{var re;return[...(re=c[t])!=null?re:[]]},[c,t]),X=x&&U.length>0,V=x,J=W||X,le=h.has(t),ie=V?U:[],ke=le&&ie.length>0,$e=_===t,Z=new Set(g);Z.add(t);const ue="top-[-0.2rem] h-4.5 w-[10px]",I="rounded-bl-[7px]",ne="left-[0.65rem]",F=new Map,K=[];for(const re of D){const de=d.get(re);if(de){const Ee=ie.findIndex(Oe=>wi(Oe.fullSha,de)||wi(Oe.sha,de));if(Ee>=0){const Oe=(ae=F.get(Ee))!=null?ae:[];Oe.push(re),F.set(Ee,Oe);continue}}K.push(re)}const ge=y.useMemo(()=>{if(!x||ie.length===0)return[];const re=[];let de=[],Ee=null;const Oe=()=>{if(de.length===0)return;const Ae=de[de.length-1],et=`sidebar-single-${t}-${Ae.fullSha}`;re.push({key:Ee!=null?Ee:et,commits:de,count:de.length,lead:Ae}),de=[],Ee=null};return ie.forEach(Ae=>{var ft;const et=(ft=S.get(`${t}:${Ae.fullSha}`))!=null?ft:null;if(de.length===0){de=[Ae],Ee=et;return}if(et===Ee){de.push(Ae);return}Oe(),de=[Ae],Ee=et}),Oe(),re},[t,x,ie,S]);return l.jsxs("li",{className:Rn("relative",n>0?"pl-4":"pl-0",n===0&&!i?le?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Rn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",I,ne,ue)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Rn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ne)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{z==null||z(t)},className:Rn("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-7 text-left text-sm font-normal transition-colors hover:bg-accent",$e?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[J?l.jsx("button",{type:"button","aria-label":`${le?"Collapse":"Expand"} ${t}`,onPointerDown:re=>{re.preventDefault()},onClick:re=>{re.preventDefault(),re.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:l.jsx("span",{"aria-hidden":"true",className:Rn("inline-block transition-transform",le?"rotate-90":""),children:"▶"})}):null,l.jsx("span",{className:"min-w-0 break-words",children:t})]})}),ke?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ge.map(re=>{const de=re.count>1&&!j(re.key);return(de?[re.lead]:re.commits).map(Oe=>{var ft;const Ae=ie.findIndex(zt=>zt.fullSha===Oe.fullSha),et=b(Oe.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>M==null?void 0:M(Oe.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Oe.message,children:[l.jsx("span",{className:"block truncate",children:Oe.message}),et.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:et.map(zt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:zt})]},`${Oe.fullSha}:${zt}`))}):null]}),re.count>1&&Oe.fullSha===re.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${re.lead.fullSha}`,onClick:()=>k(re.key,`${t}:${re.lead.fullSha}`),className:Rn("shrink-0 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",de?"":"min-w-[2ch] text-center"),children:de?`+${Math.max(1,re.count-1)}`:"−"}):null]}),(ft=F.get(Ae))!=null&&ft.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:F.get(Ae).map((zt,gt,pt)=>l.jsx(Am,{branchName:zt,depth:n+1,isLast:gt===pt.length-1&&K.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:_,ancestors:Z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:zt,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z},zt))}):null]},`${t}:${Oe.fullSha}`)})})}):null,W&&le&&K.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:K.map((re,de)=>l.jsx(Am,{branchName:re,depth:n+1,isLast:de===K.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:_,ancestors:Z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:re,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z},re))}):null]})}function Qw({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function Zw({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,projectLoading:d=!1,projectError:h=null,branches:p,defaultBranch:_,checkedOutRef:g,manuallyOpenedClumps:x,manuallyClosedClumps:b,setManuallyOpenedClumps:w,setManuallyClosedClumps:S,gridLayoutModel:j,onSelectCommit:k,onSelectBranch:M,showCommits:z,onToggleShowCommits:L,className:D,style:W,collapsed:U=!1}){var Kt;const X=y.useRef(null),V=y.useRef(null),[J,le]=y.useState(()=>new Set),[ie,ke]=y.useState(()=>new Set),[$e,Z]=y.useState(()=>new Set),[ue,I]=y.useState(null),ne=x!=null?x:ie,F=b!=null?b:$e,K=w!=null?w:ke,ge=S!=null?S:Z,[B,ae]=y.useState(null),[re,de]=y.useState(null),Ee=y.useMemo(()=>p.some(At=>At.name===_)?p:[{name:_,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...p],[p,_]),Oe=y.useMemo(()=>Ty(Ee,_),[Ee,_]),Ae=y.useMemo(()=>Ey(Ee,_,Oe),[Ee,_,Oe]),[et,ft]=y.useState(()=>Ay(Ae,Oe,g,_));y.useEffect(()=>{ft(Ze=>{const At=Ay(Ae,Oe,g,_),Y=new Set(Ze);for(const je of At)Y.add(je);return Y})},[Ae,Oe,g,_]),y.useEffect(()=>{le(Ze=>{const At=new Set(Ze);for(const Y of t)At.add(Y.path);return At})},[t]);const zt=(Kt=j==null?void 0:j.defaultCollapsedClumps)!=null?Kt:new Set,gt=Ze=>ne.has(Ze)||!zt.has(Ze)&&!F.has(Ze),pt=(Ze,At)=>{const Y=X.current,je=V.current;if(Y&&je){const We=`[data-clump-toggle-id="${At}"]`,Ue=Y.querySelector(We);if(Ue){const it=Ue.getBoundingClientRect().top-je.getBoundingClientRect().top;de({id:At,topWithinScrollBody:it})}else de(null)}else de(null);ae(At),K(We=>{const Ue=new Set(We),it=gt(Ze);return ge(Ne=>{const st=new Set(Ne);return it?(Ue.delete(Ze),st.add(Ze)):(st.delete(Ze),Ue.add(Ze)),st}),Ue})};y.useLayoutEffect(()=>{if(!B)return;const Ze=X.current,At=V.current;if(!Ze||!At)return;const Y=`[data-clump-toggle-id="${B}"]`,je=Ze.querySelector(Y);if(je){if((re==null?void 0:re.id)===B){const Ue=je.getBoundingClientRect().top-At.getBoundingClientRect().top-re.topWithinScrollBody;Number.isFinite(Ue)&&Ue!==0&&(At.scrollTop+=Ue)}je.focus({preventScroll:!0}),ae(null),de(null)}},[ne,F,B,re]);const qe=Ze=>{ft(At=>{const Y=new Set(At);return Y.has(Ze)?Y.delete(Ze):Y.add(Ze),Y})};y.useEffect(()=>{if(ue==null)return;const Ze=()=>I(null);return window.addEventListener("pointerdown",Ze),()=>window.removeEventListener("pointerdown",Ze)},[ue]);const Yt=y.useMemo(()=>{var At,Y,je,We,Ue,it,Ne,st,at,yt;const Ze=new Map;for(const xt of t){const ot=xt.path===n,H=Kw({branches:xt.branches,mergeNodes:xt.mergeNodes,directCommits:xt.directCommits,unpushedDirectCommits:xt.unpushedDirectCommits,defaultBranch:xt.defaultBranch,branchCommitPreviews:xt.branchCommitPreviews,branchUniqueAheadCounts:xt.branchUniqueAheadCounts,checkedOutRef:xt.checkedOutRef,stashes:xt.stashes,manuallyOpenedClumps:ot?ne:new Set,manuallyClosedClumps:ot?F:new Set}),te=H.enrichedBranches.some(dt=>dt.name===xt.defaultBranch)?H.enrichedBranches:[{name:xt.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...H.enrichedBranches],me=new Map(H.sharedGridLayoutModel.nodes.map(dt=>[dt.commit.visualId,dt.row])),ve={};for(const dt of H.sharedGridLayoutModel.allCommits){const Pe=(At=ve[dt.branchName])!=null?At:[];Pe.push({fullSha:dt.id,sha:dt.id.slice(0,7),parentSha:(Y=dt.parentSha)!=null?Y:null,message:dt.message,author:dt.author,date:dt.date,kind:(je=dt.kind)!=null?je:"commit"}),ve[dt.branchName]=Pe}for(const dt of Object.keys(ve))ve[dt]=ve[dt].sort((Pe,jt)=>{var Bt,xn;const Mt=new Date(Pe.date).getTime(),_t=new Date(jt.date).getTime();if(Mt!==_t)return Mt-_t;const en=(Bt=me.get(`${dt}:${Pe.fullSha}`))!=null?Bt:Number.MAX_SAFE_INTEGER,ct=(xn=me.get(`${dt}:${jt.fullSha}`))!=null?xn:Number.MAX_SAFE_INTEGER;return en!==ct?en-ct:Pe.fullSha.localeCompare(jt.fullSha)});const Qe=(We=H.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?We:new Map,Ge=(dt,Pe)=>{const jt=Qe.get(Pe);if(!jt)return[];for(const[Mt,_t]of jt.entries())if(wi(dt,Mt))return Array.from(_t).sort();return[]},Re=Ty(te,xt.defaultBranch),vt=Ey(te,xt.defaultBranch,Re),Ve=new Map(te.map(dt=>[dt.name,dt])),$t=new Map;for(const dt of te){const Pe=(it=(Ue=H.sharedGridLayoutModel.firstBranchCommitByName.get(dt.name))==null?void 0:Ue.parentSha)!=null?it:null,jt=Pe!=null?Pe:null;$t.set(dt.name,jt)}const bt=(Ne=H.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Ne:new Set,tt=ot?ne:new Set,Lt=ot?F:new Set,Ht=dt=>tt.has(dt)||!bt.has(dt)&&!Lt.has(dt);Ze.set(xt.path,{rootBranchNames:vt,branchByName:Ve,branchCommitPreviewsFromLayout:ve,childNamesByParent:Re,branchAnchorShaByName:$t,checkedOutBranchName:(at=(st=xt.checkedOutRef)==null?void 0:st.branchName)!=null?at:null,clusterKeyByCommitId:(yt=H.sharedGridLayoutModel.clusterKeyByCommitId)!=null?yt:new Map,getMergeTargetLabels:Ge,isGridClusterOpen:Ht})}return Ze},[n,F,ne,t]);return l.jsxs("aside",{ref:X,"aria-label":"Dense branch sidebar",className:Rn("pointer-events-auto relative h-full select-none overflow-hidden",D),style:W,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:l.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:d,"aria-label":"Add Repo",className:"window-no-drag flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:l.jsx("img",{src:"/icon-projectNew.svg",alt:"","aria-hidden":"true",className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:L,className:"window-no-drag shrink-0 rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent",children:z?"Hide Commits":"Show Commits"})]})}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[h&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:h})}),l.jsx("div",{ref:V,className:Rn("min-h-0 flex-1 space-y-6 overflow-y-auto px-2.5 pr-4",U?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(Ze=>{var it;const At=Ze.path===n,Y=J.has(Ze.path),je=(it=Ze.treeLoaded)!=null?it:Ze.branches.length>0,We=Yt.get(Ze.path),Ue=At?et:new Set(We?Array.from(We.branchByName.keys()):[]);return l.jsx("div",{className:Rn("relative z-0",Y&&We?"mb-5":"mb-1"),children:l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:Rn("sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 py-1 transition-colors hover:bg-accent",At?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[l.jsx("button",{type:"button",onClick:()=>{le(Ne=>{const st=new Set(Ne);return st.has(Ze.path)?st.delete(Ze.path):st.add(Ze.path),st})},"aria-expanded":Y,"aria-label":`${Y?"Collapse":"Expand"} ${Ze.name}`,className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(Qw,{open:Y})}),l.jsx("button",{type:"button",onClick:()=>{i(Ze.path)},className:Rn("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal",At?"text-primary":"text-muted-foreground"),children:Ze.name}),l.jsxs("div",{className:"relative shrink-0",children:[l.jsx("button",{type:"button","aria-label":`Project actions for ${Ze.name}`,"aria-expanded":ue===Ze.path,onClick:Ne=>{Ne.stopPropagation(),I(st=>st===Ze.path?null:Ze.path)},className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(ow,{className:"h-4 w-4 shrink-0"})}),ue===Ze.path?l.jsxs("div",{role:"menu",className:"absolute right-0 top-full z-30 mt-1 w-40 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-lg",onClick:Ne=>Ne.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{I(null),u(Ze.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{I(null),c(Ze.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",children:"Remove"})]}):null]})]}),Y?je&&We?l.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:We.rootBranchNames.map((Ne,st)=>l.jsx(Am,{branchName:Ne,depth:0,isLast:st===We.rootBranchNames.length-1,branchByName:We.branchByName,branchCommitPreviews:We.branchCommitPreviewsFromLayout,childNamesByParent:We.childNamesByParent,branchAnchorShaByName:We.branchAnchorShaByName,expandedBranchNames:Ue,onToggleBranch:qe,checkedOutBranchName:We.checkedOutBranchName,ancestors:new Set,showCommits:z,getMergeTargetLabels:We.getMergeTargetLabels,sourceBranchName:Ne,clusterKeyByCommitId:We.clusterKeyByCommitId,isGridClusterOpen:We.isGridClusterOpen,onToggleGridCluster:pt,onSelectCommit:async at=>{At||await i(Ze.path),k==null||k(at)},onSelectBranch:async at=>{At||await i(Ze.path),M==null||M(at)}},`${Ze.path}:${Ne}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},Ze.path)})})]})]})}const Jw="git-visualizer",Kh="git-visualizer:projects",Dy=12,Ny=1400,eS=180,Ry="git-visualizer:sidebar-width",By="git-visualizer:sidebar-collapsed",Ly=432,Oy=280,zy=640;function Ka(t){return t==="/"?t:t.replace(/\/+$/,"")}function tS(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function nS(t){return md(t)===Jw}function sS(){var Xo,Zi,ua,Ii;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,_]=y.useState(!1),[g,x]=y.useState([]),[b,w]=y.useState([]),[S,j]=y.useState([]),[k,M]=y.useState([]),[z,L]=y.useState({}),[D,W]=y.useState([]),[U,X]=y.useState("main"),[V,J]=y.useState(null),[le,ie]=y.useState([]),[ke,$e]=y.useState(!1),[Z,ue]=y.useState(""),[I,ne]=y.useState(0),[F,K]=y.useState(1),[ge,B]=y.useState(()=>new Set),[ae,re]=y.useState(()=>new Set),[de,Ee]=y.useState(null),[Oe,Ae]=y.useState(null),[et,ft]=y.useState(null),[zt,gt]=y.useState(!1),[pt,qe]=y.useState(!1),[Yt,Kt]=y.useState(!1),[Ze,At]=y.useState(null),[Y,je]=y.useState(!1),[We,Ue]=y.useState(!1),[it,Ne]=y.useState("active"),[st,at]=y.useState(null),[yt,xt]=y.useState(null),[ot,H]=y.useState(!1),[te,me]=y.useState(null),[ve,Qe]=y.useState(!1),[Ge,Re]=y.useState(null),[vt,Ve]=y.useState(null),[$t,bt]=y.useState(!1),[tt,Lt]=y.useState(!1),[Ht,dt]=y.useState(!1),[Pe,jt]=y.useState(!1),[Mt,_t]=y.useState({}),[en,ct]=y.useState({}),[Bt,xn]=y.useState({}),[Bn,Sn]=y.useState({}),[ls,Yn]=y.useState({}),[Tn,Cn]=y.useState([]),[$n,rn]=y.useState(!1),[En,nt]=y.useState(!1),[ln,no]=y.useState(!1),[Ao,cs]=y.useState(!1),[Es,ei]=y.useState(!1),[Cs,uo]=y.useState("horizontal"),[so,fo]=y.useState(!1),[kn,ti]=y.useState(Ly),[Is,As]=y.useState(!1),[us,Ho]=y.useState({dragging:!1,lastEvent:"idle"}),ho=y.useRef(null),Ds=y.useRef(0),Ps=y.useRef(0),An=y.useRef(null),os=y.useRef(Ly),jn=y.useRef(null),tn=y.useRef(null),Do=nS(t)||!0,ds=y.useRef(!1),di=y.useRef(!1),fi=y.useRef(new Set),No=y.useRef([]),ni=y.useRef([]),ys=y.useRef(null),wo=y.useMemo(()=>c.map($=>{var Q,se,_e,Je,rt,mt,Ot,ps,Us,xo,vn,Ft,an,cn,Ms,Co,Vs,Bs,qs,zo,bo,xe,C,E,N,R,P,oe;return{...$,...(Q=d[$.path])!=null?Q:{},branches:(_e=(se=d[$.path])==null?void 0:se.branches)!=null?_e:[],mergeNodes:(rt=(Je=d[$.path])==null?void 0:Je.mergeNodes)!=null?rt:[],directCommits:(Ot=(mt=d[$.path])==null?void 0:mt.directCommits)!=null?Ot:[],unpushedDirectCommits:(Us=(ps=d[$.path])==null?void 0:ps.unpushedDirectCommits)!=null?Us:[],unpushedCommitShasByBranch:(vn=(xo=d[$.path])==null?void 0:xo.unpushedCommitShasByBranch)!=null?vn:{},checkedOutRef:(an=(Ft=d[$.path])==null?void 0:Ft.checkedOutRef)!=null?an:null,worktrees:(Ms=(cn=d[$.path])==null?void 0:cn.worktrees)!=null?Ms:[],stashes:(Vs=(Co=d[$.path])==null?void 0:Co.stashes)!=null?Vs:[],branchCommitPreviews:(qs=(Bs=d[$.path])==null?void 0:Bs.branchCommitPreviews)!=null?qs:{},laneByBranch:(bo=(zo=d[$.path])==null?void 0:zo.laneByBranch)!=null?bo:{},branchUniqueAheadCounts:(C=(xe=d[$.path])==null?void 0:xe.branchUniqueAheadCounts)!=null?C:{},defaultBranch:(R=(N=(E=d[$.path])==null?void 0:E.defaultBranch)!=null?N:$.branchName)!=null?R:"main",treeLoaded:(oe=(P=d[$.path])==null?void 0:P.loaded)!=null?oe:!1}}),[c,d]);y.useEffect(()=>{try{const $=localStorage.getItem(Kh);if(!$)return;const Q=JSON.parse($);if(!Array.isArray(Q))return;const se=Q.filter(_e=>typeof _e=="object"&&_e!==null&&typeof _e.path=="string"&&typeof _e.name=="string"&&typeof _e.lastOpenedAt=="number");u(se.slice(0,Dy))}catch{u([])}},[]),y.useEffect(()=>{di.current||t||c.length!==0&&(di.current=!0,Yo(c[0].path))},[c,t]);const In=y.useMemo(()=>b.reduce(($,Q)=>($[Q.targetCommitSha]=Q.targetBranch,$),{}),[b]);y.useEffect(()=>{t&&h($=>{var Q,se;return{...$,[t]:{path:t,name:i||md(t),branches:g,mergeNodes:b,directCommits:S,unpushedDirectCommits:k,mergeTargetBranchByCommitSha:b.reduce((_e,Je)=>(_e[Je.targetCommitSha]=Je.targetBranch,_e),{}),unpushedCommitShasByBranch:z,checkedOutRef:V,worktrees:le,stashes:Tn,branchCommitPreviews:en,branchParentByName:Bt,laneByBranch:Bn,branchUniqueAheadCounts:ls,defaultBranch:U,loaded:!0,cacheSchemaVersion:(se=(Q=$[t])==null?void 0:Q.cacheSchemaVersion)!=null?se:1,updatedAtMs:Date.now()}}})},[t,i,g,b,S,k,In,z,V,le,Tn,en,Bt,Bn,ls,U]);async function Xs($,Q=!1){var _e;const se=Ka($);if(se&&!fi.current.has(se)&&!(!Q&&((_e=d[se])!=null&&_e.loaded))){fi.current.add(se),_(!0);try{const Je=await Se("get_repo_visual_snapshot",{repoPath:se,forceRefresh:Q});h(rt=>({...rt,[se]:Je}))}finally{fi.current.delete(se),fi.current.size===0&&_(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach($=>{Xs($.path),Se("watch_repo",{repoPath:$.path}).catch(console.error)})},[c]),y.useEffect(()=>{let $=!1,Q=null;return yc("git-activity",se=>{if($)return;const _e=Ka(se.payload.repoPath);!_e||_e===t||Xs(_e,!0)}).then(se=>{$?se():Q=se}).catch(console.error),()=>{$=!0,Q&&Q()}},[t]);function fs($){u(Q=>{const se=Ka($.path);if(!se)return Q;const _e={...$,path:se},rt=(Q.some(mt=>mt.path===se)?Q.map(mt=>mt.path===se?_e:mt):[...Q,_e]).slice(-Dy);try{localStorage.setItem(Kh,JSON.stringify(rt))}catch{}return rt})}async function hs($){const Q=Ka($);if(Q){At(null);try{const[se,_e]=await Promise.all([Se("get_repo_info",{repoPath:Q}),Se("get_default_branch",{repoPath:Q}).catch(()=>"main")]);fs({path:Q,name:se.name,lastOpenedAt:Date.now(),branchName:_e}),await Xs(Q,!0)}catch(se){At(se instanceof Error?se.message:String(se))}}}function zi($){var se,_e;const Q=Ka($);if(Q&&(u(Je=>{const rt=Je.filter(mt=>mt.path!==Q);try{localStorage.setItem(Kh,JSON.stringify(rt))}catch{}return rt}),h(Je=>{if(!(Q in Je))return Je;const rt={...Je};return delete rt[Q],rt}),t===Q)){const Je=(_e=(se=c.find(rt=>rt.path!==Q))==null?void 0:se.path)!=null?_e:null;Je?Yo(Je):(n(null),a(""),x([]),w([]),j([]),M([]),L({}),J(null),ie([]),Cn([]),ct({}),xn({}),Sn({}),Yn({}))}}async function Uo($){const Q=Ka($);if(Q)try{await Se("reveal_in_finder",{path:Q})}catch(se){At(se instanceof Error?se.message:String(se))}}const Qi=()=>{(async()=>{var $,Q;try{const se=await Gv({directory:!0,multiple:!1,defaultPath:(Q=($=c[0])==null?void 0:$.path)!=null?Q:void 0});typeof se=="string"&&se&&await hs(se)}catch(se){At(se instanceof Error?se.message:String(se))}})()};async function qt($,Q){const _e=[];let Je=0;for(;;){const rt=await Se("get_merge_nodes",{repoPath:$,branch:Q,page:Je,perPage:100});if(_e.push(...rt.nodes),!rt.hasMore||rt.nodes.length===0)break;Je+=1}return _e}async function $i($,Q,se){const _e=Array.from(new Set([se,...Q.map(mt=>mt.name)].filter(mt=>!!mt)));if(_e.length===0)return[];const Je=await Promise.all(_e.map(mt=>qt($,mt).catch(()=>[]))),rt=new Map;for(const mt of Je)for(const Ot of mt){const ps=`${Ot.targetCommitSha}:${Ot.targetBranch}`;rt.has(ps)||rt.set(ps,Ot)}return Array.from(rt.values())}const Ln=$=>$.map(Q=>`${Q.name}|${Q.headSha}|${Q.commitsAhead}|${Q.commitsBehind}|${Q.unpushedCommits}|${Q.remoteSyncStatus}`).join("||"),Si=$=>$.map(Q=>Q.fullSha).join("|"),Ro=$=>{var Q,se;return $?`${(Q=$.branchName)!=null?Q:""}|${$.headSha}|${(se=$.parentSha)!=null?se:""}|${$.hasUncommittedChanges?1:0}`:"__none__"};async function Pn($,Q){const se=Q!=null?Q:U,[_e,Je,rt,mt,Ot,ps]=await Promise.all([Se("get_branches",{repoPath:$}),Se("get_all_repo_commits",{repoPath:$}),Se("get_unpushed_direct_commits",{repoPath:$,branch:se}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:$}).catch(()=>null),Se("list_worktrees",{repoPath:$}).catch(()=>[]),Se("list_stashes",{repoPath:$}).catch(()=>[])]),Us=await $i($,_e,se),xo=await Promise.all([se,..._e.map(vn=>vn.name)].map(async vn=>{const Ft=await Se("get_branch_unpushed_commit_shas",{repoPath:$,branch:vn}).catch(()=>[]);return[vn,Ft]}));x(_e),w(Us),j(Je),M(rt),L(Object.fromEntries(xo)),J(mt),ie(Ot),Cn(ps)}async function oo($){const[Q,se,_e]=await Promise.all([Se("get_branches",{repoPath:$}).catch(()=>[]),Se("get_all_repo_commits",{repoPath:$}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:$}).catch(()=>null)]);return Ln(Q)!==Ln(No.current)||Si(se)!==Si(ni.current)||Ro(_e)!==Ro(ys.current)}async function Vo($){Ve(null),Kt(!0);try{const[Q,se]=await Promise.all([Se("get_repo_info",{repoPath:$}),Se("get_default_branch",{repoPath:$})]);a(Q.name),X(se),n($),await Pn($,se),xs($),Ve({kind:"success",message:`Now targeting worktree at ${$}`})}catch(Q){const se=Q instanceof Error?Q.message:String(Q);Ve({kind:"error",message:se}),console.error("Failed to switch worktree:",se)}finally{Kt(!1)}}async function mo($,Q){if(!(!t||ke)){$e(!0),Ve(null);try{await Se("remove_worktree",{repoPath:t,worktreePath:$,force:Q}),await Pn(t),Ve({kind:"success",message:`Removed worktree at ${$}`})}catch(se){const _e=se instanceof Error?se.message:String(se);Ve({kind:"error",message:_e}),console.error("Failed to remove worktree:",_e)}finally{$e(!1)}}}function bn($,Q){var se,_e;a(Q.name||md($)),X(Q.defaultBranch||"main"),x(Q.branches),w(Q.mergeNodes),j(Q.directCommits),M(Q.unpushedDirectCommits),L(Q.unpushedCommitShasByBranch),J(Q.checkedOutRef),ie(Q.worktrees),Cn(Q.stashes),ct(Q.branchCommitPreviews),xn((se=Q.branchParentByName)!=null?se:{}),Sn((_e=Q.laneByBranch)!=null?_e:{}),Yn(Q.branchUniqueAheadCounts),n($)}async function So($,Q,se){const _e=se==null?void 0:se.forceRefresh,Je=se==null?void 0:se.applyToActiveState;try{const[rt,mt]=await Promise.all([Se("get_repo_info",{repoPath:$}),Se("get_default_branch",{repoPath:$})]);if(Q!==Ds.current)return;const Ot=await Se("get_repo_visual_snapshot",{repoPath:$,forceRefresh:_e});if(Q!==Ds.current)return;h(ps=>({...ps,[$]:Ot})),Je&&(t===$||Ds.current),xs($)}catch(rt){if(Q!==Ds.current)return;console.error("Background snapshot refresh failed:",rt)}}async function Yo($){const Q=++Ds.current,se=Ka($);if(!se)return;const _e=d[se];if(_e!=null&&_e.loaded){At(null),bn(se,_e),fs({path:se,name:_e.name||md(se),lastOpenedAt:Date.now(),branchName:_e.defaultBranch}),Kt(!1),qe(!1),So(se,Q,{forceRefresh:!1,applyToActiveState:!1});return}if(qe(!0),Kt(!0),At(null),await new Promise(Je=>setTimeout(Je,15)),Q===Ds.current)try{const[Je,rt]=await Promise.all([Se("get_repo_info",{repoPath:se}),Se("get_default_branch",{repoPath:se})]);if(Q!==Ds.current)return;a(Je.name),X(rt);const mt=await Se("get_repo_visual_snapshot",{repoPath:se,forceRefresh:!0});if(Q!==Ds.current)return;h(Ot=>({...Ot,[se]:mt})),bn(se,mt),fs({path:se,name:Je.name,lastOpenedAt:Date.now(),branchName:rt}),Kt(!1),qe(!1),xs(se)}catch(Je){if(Q!==Ds.current)return;console.error("Failed to load repo:",Je),At(Je instanceof Error?Je.message:String(Je)),n(null),qe(!1),Kt(!1)}}async function xs($){const Q=++Ps.current;try{if(Q!==Ps.current)return;H(!1),Re(null);const se=await Se("get_github_info",{repoPath:$}),_e=await Se("get_github_auth_status");if(Q!==Ps.current||(me(_e),!_e.ghAvailable||!_e.authenticated))return;const Je=await Se("get_open_prs",{owner:se.owner,repo:se.repo});if(Q!==Ps.current)return;W(Je),H(!0)}catch(se){if(Q!==Ps.current)return;console.log("GitHub data not available:",se),Re(se instanceof Error?se.message:String(se)),H(!1)}}y.useEffect(()=>{let $=null,Q=!1;const se=(()=>{try{return $x().label}catch{return null}})(),_e=async rt=>{var Ot;const mt=(Ot=rt==null?void 0:rt.path)==null?void 0:Ot.trim();!mt||Q||t!==mt&&await Yo(mt)};return(async()=>{se==="main"&&($=await yc("gitviz://open-repo",async mt=>{await _e(mt.payload)}));const rt=await Se("take_pending_open_repo");await _e(rt)})(),()=>{Q=!0,$&&$()}},[t]),y.useEffect(()=>{No.current=g},[g]),y.useEffect(()=>{ni.current=S},[S]),y.useEffect(()=>{ys.current=V},[V]),y.useEffect(()=>{ds.current=Es},[Es]),y.useEffect(()=>{},[t,U,Do]),y.useEffect(()=>{if(!t||!U||!Do)return;Se("watch_repo",{repoPath:t}).catch(console.error);let $=!1,Q=!1,se=!1,_e=null;const Je=async()=>{if(!$){if(ds.current){Q=!0;return}if(se){Q=!0;return}se=!0;try{if(!await oo(t)||$)return;await Pn(t,U)}catch(mt){console.warn("Frozen git-activity refresh failed:",mt)}finally{se=!1,Q&&!$&&(Q=!1,window.setTimeout(()=>{Je()},0))}}},rt=()=>{Q=!0,Je()};return yc("git-activity",mt=>{Ka(mt.payload.repoPath)===t&&(Xs(t,!0),rt())}).then(mt=>{$?mt():_e=mt}).catch(console.error),()=>{$=!0,_e&&_e()}},[t,U,Do]);async function Gs(){if(t){Qe(!0),Re(null);try{await Se("authenticate_github");const $=await Se("get_github_auth_status");me($),$.authenticated?await xs(t):$.message&&Re($.message)}catch($){Re($ instanceof Error?$.message:String($))}finally{Qe(!1)}}}const sn=new Set(D.map($=>$.branchName)),Ns=14*864e5,io=Date.now(),Bo=g.filter($=>$.status==="stale"),ms=Bo.filter($=>sn.has($.name)||io-new Date($.lastCommitDate).getTime()<=Ns),po=Bo.filter($=>!sn.has($.name)&&io-new Date($.lastCommitDate).getTime()>Ns),Lo=$=>{var Q;return Object.prototype.hasOwnProperty.call(ls,$.name)?Math.max(0,(Q=ls[$.name])!=null?Q:0):Math.max(0,$.commitsAhead)};y.useEffect(()=>{_t({}),tn.current=null,Qe(!1),me(null),Re(null),W([]),Ve(null)},[t]),y.useEffect(()=>{var ps,Us,xo,vn;if(!t||!U){_t({}),ct({}),xn({}),Sn({}),Yn({}),tn.current=null;return}const $=g.map(Ft=>{var an;return`${Ft.name}:${Ft.headSha}:${(an=Ft.parentBranch)!=null?an:""}:${Ft.commitsAhead}`}).join("|"),Q=b.map(Ft=>{var an,cn;return`${Ft.fullSha}:${(cn=(an=Ft.parentShas)==null?void 0:an[1])!=null?cn:""}`}).join("|"),se=`${t}|${U}|${$}|${Q}`;if(tn.current===se)return;tn.current=se;const _e={},Je={};for(const Ft of g){if(Ft.name===U)continue;const an=S.filter(cn=>cn.branch===Ft.name).map(cn=>{var Ms;return{fullSha:cn.fullSha,sha:cn.sha,parentSha:(Ms=cn.parentSha)!=null?Ms:null,message:cn.message,author:cn.author,date:cn.date,kind:"commit"}});_e[Ft.name]=an,Je[Ft.name]=an.length}const rt=new Map;for(const Ft of S)rt.set(Ft.fullSha,Ft.branch);const mt=Ft=>{if(!Ft)return null;const an=rt.get(Ft);if(an)return an;for(const[cn,Ms]of rt.entries())if(cn.startsWith(Ft)||Ft.startsWith(cn))return Ms;return null},Ot={[U]:null};for(const Ft of g){if(Ft.name===U){Ot[Ft.name]=null;continue}const an=S.filter(Vs=>Vs.branch===Ft.name),cn=new Set(an.map(Vs=>Vs.fullSha)),Ms=(Us=(ps=an.filter(Vs=>{var qs;const Bs=(qs=Vs.parentSha)!=null?qs:null;return!Bs||!cn.has(Bs)}).sort((Vs,Bs)=>{const qs=new Date(Vs.date).getTime()-new Date(Bs.date).getTime();return qs!==0?qs:Vs.fullSha.localeCompare(Bs.fullSha)})[0])==null?void 0:ps.parentSha)!=null?Us:null,Co=mt(Ms);Ot[Ft.name]=(vn=(xo=Co!=null?Co:Bt[Ft.name])!=null?xo:Ft.parentBranch)!=null?vn:null}_t({}),ct(_e),xn(Ot),Sn(Ft=>{const an={};for(const cn of g){const Ms=Ft[cn.name];Ms!=null&&Number.isFinite(Ms)&&(an[cn.name]=Ms)}return an}),Yn(Je)},[t,U,g,b,S,Bt]),y.useEffect(()=>{if(!vt){bt(!1);return}bt(!0);const $=window.setTimeout(()=>{bt(!1)},Ny),Q=window.setTimeout(()=>{Ve(null)},Ny+eS);return()=>{window.clearTimeout($),window.clearTimeout(Q)}},[vt]),y.useEffect(()=>{if(!t||g.length===0)return;const $=_e=>new Promise(Je=>setTimeout(Je,_e));async function Q(){const Je=`${await Se("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Je}`),await $(800),await Se("screenshot",{path:`${Je}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Je}`)}const se=_e=>{if((_e.metaKey||_e.ctrlKey)&&!_e.shiftKey&&!_e.altKey&&_e.key.toLowerCase()==="b"){_e.preventDefault(),As(Je=>!Je);return}(_e.metaKey||_e.ctrlKey)&&_e.shiftKey&&_e.key==="S"&&(_e.preventDefault(),Q())};return window.addEventListener("keydown",se),()=>window.removeEventListener("keydown",se)},[t,i,g]);function Wo(){Ue(!0),setTimeout(()=>{je(!1),Ue(!1),Ne("active"),xt(null)},100)}async function Hs($){if(!t)return;Ve(null);const Q=/^STASH:(\d+)$/.exec($.commitSha);if(Q){try{const se=parseInt(Q[1],10),_e=await Se("apply_stash_restore",{repoPath:t,stashIndex:se});J(_e),await Pn(t);const Je=`Stash ${se+1}`,rt=_e.branchName?` on branch ${_e.branchName}`:" at the stash base (detached HEAD)";Ve({kind:"success",message:`Restored ${Je}${rt}; stash applied and dropped (uncommitted changes).`})}catch(se){const _e=se instanceof Error?se.message:String(se);Ve({kind:"error",message:_e}),console.error("Failed to apply stash:",_e)}return}if($.branchName){const se=(Je,rt)=>{const mt=Je.replace(/\\/g,"/").replace(/\/+$/,""),Ot=rt.replace(/\\/g,"/").replace(/\/+$/,"");return mt===Ot||mt.toLowerCase()===Ot.toLowerCase()},_e=le.find(Je=>Je.pathExists===!1||Je.isCurrent||t&&se(Je.path,t)?!1:Je.branchName===$.branchName);if(_e){await Vo(_e.path);return}}try{let se="";(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await Se("stash_push",{repoPath:t,includeUntracked:!0}),se="Stashed local changes (including untracked), then ",await Pn(t));const Je=$.branchName?await Se("checkout_branch",{repoPath:t,branchName:$.branchName}):await Se("checkout_ref",{repoPath:t,refName:$.commitSha}),rt=await Se("get_checked_out_ref",{repoPath:t}).catch(()=>Je);J(rt),await Pn(t);const mt=rt.branchName?rt.branchName:`${rt.headSha.slice(0,7)} (detached)`;Ve({kind:"success",message:`${se}Checked out ${mt}`})}catch(se){const _e=se instanceof Error?se.message:String(se);Ve({kind:"error",message:_e}),console.error("Failed to checkout commit:",_e)}}async function _o(){if(!(!t||$n)){Ve(null),rn(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Ve({kind:"error",message:"No local changes to stash."});return}await Se("stash_push",{repoPath:t,includeUntracked:!0}),await Pn(t),Ve({kind:"success",message:"Stashed local changes (including untracked files)."})}catch($){const Q=$ instanceof Error?$.message:String($);Ve({kind:"error",message:Q}),console.error("Failed to stash:",Q)}finally{rn(!1)}}}async function si($){if(!t||En)return!1;const Q=$.trim();if(!Q)return Ve({kind:"error",message:"Enter a commit message."}),!1;Ve(null),nt(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ve({kind:"error",message:"No local changes to commit."}),!1;const _e=await Se("commit_working_tree",{repoPath:t,message:Q});return J(_e),await Pn(t),Ve({kind:"success",message:"Committed local changes."}),!0}catch(se){const _e=se instanceof Error?se.message:String(se);return Ve({kind:"error",message:_e}),console.error("Failed to commit:",_e),!1}finally{nt(!1)}}async function qn(){if(!t||ln)return!1;Ve(null),no(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ve({kind:"error",message:"No local changes to stage."}),!1;const Q=await Se("stage_working_tree",{repoPath:t});return J(Q),await Pn(t),Ve({kind:"success",message:"Staged all changes."}),!0}catch($){const Q=$ instanceof Error?$.message:String($);return Ve({kind:"error",message:Q}),console.error("Failed to stage:",Q),!1}finally{no(!1)}}async function dn($,Q){if(!(!t||Ao)){cs(!0),Ve(null);try{const se=/^STASH:(\d+)$/.exec($);let _e;if(se){const Je=parseInt(se[1],10);_e=await Se("move_stash_to_new_branch",{repoPath:t,stashIndex:Je,branchName:Q})}else _e=await Se("create_branch_from_uncommitted",{repoPath:t,branchName:Q});J(_e),await Pn(t),Ve({kind:"success",message:`Moved to new branch "${Q}"`})}catch(se){const _e=se instanceof Error?se.message:String(se);Ve({kind:"error",message:_e}),console.error("Failed to create branch from node:",_e)}finally{cs(!1)}}}async function Fo($){if(!(!t||Ao)){cs(!0),Ve(null);try{const Q=await Se("create_root_branch",{repoPath:t,branchName:$});J(Q),await Pn(t),Ve({kind:"success",message:`Created new root branch "${$}"`})}catch(Q){const se=Q instanceof Error?Q.message:String(Q);Ve({kind:"error",message:se}),console.error("Failed to create root branch:",se)}finally{cs(!1)}}}async function Wn($,Q){if(!t)return;const se=Array.from(new Set($.filter(_e=>!!_e&&_e!==Q)));if(se.length!==0){Ve(null),Lt(!0);try{let _e=null;for(const Je of se)_e=await Se("merge_ref_into_branch",{repoPath:t,sourceRef:Je,targetBranch:Q});await Pn(t),_e&&J(_e),Ve({kind:"success",message:se.length===1?`Merged ${se[0].slice(0,7)} into ${Q}`:`Merged ${se.length} commits into ${Q}`})}catch(_e){const Je=_e instanceof Error?_e.message:String(_e);Ve({kind:"error",message:Je}),console.error("Failed to merge refs into branch:",Je)}finally{Lt(!1)}}}async function Rs(){if(!(!t||Ht)){Ve(null),dt(!0);try{const $=await Se("push_all_unpushed_branches",{repoPath:t});await Pn(t),Ve({kind:"success",message:$.length>0?$.length===1?`Pushed ${$[0].branchName}`:`Pushed ${$.length} branches`:"Everything local is already pushed."})}catch($){const Q=$ instanceof Error?$.message:String($);Ve({kind:"error",message:Q}),console.error("Failed to push all branches:",Q)}finally{dt(!1)}}}async function hi(){if(!(!t||Ht)){Ve(null),dt(!0);try{const $=await Se("push_current_branch",{repoPath:t});await Pn(t),Ve({kind:"success",message:`Pushed ${$.branchName}`})}catch($){const Q=$ instanceof Error?$.message:String($);Ve({kind:"error",message:Q}),console.error("Failed to push current branch:",Q)}finally{dt(!1)}}}async function ao($){var se;if(!t||Ht)return;const Q=Array.from(new Map($.filter(_e=>_e.branchName&&_e.targetSha).map(_e=>[_e.branchName,_e])).values());if(Q.length!==0){Ve(null),dt(!0);try{for(const _e of Q)await Se("push_branch",{repoPath:t,branchName:_e.branchName,targetSha:_e.targetSha});await Pn(t),Ve({kind:"success",message:Q.length===1?`Pushed ${Q[0].branchName} through ${(se=Q[0].targetSha)==null?void 0:se.slice(0,7)}`:`Pushed ${Q.length} selected commit ranges`})}catch(_e){const Je=_e instanceof Error?_e.message:String(_e);Ve({kind:"error",message:Je}),console.error("Failed to push selected commits:",Je)}finally{dt(!1)}}}async function ks($){var rt;if(!t||Pe)return;const Q=Array.from(new Set($.branchNames.filter(mt=>mt&&mt!==U))),se=!!$.discardUncommittedChanges,_e=(rt=$.stashIndices)!=null?rt:[],Je=Array.from(new Set(_e)).sort((mt,Ot)=>Ot-mt);if(!(Q.length===0&&!se&&Je.length===0)){Ve(null),jt(!0);try{for(const ps of Je)await Se("stash_drop",{repoPath:t,stashIndex:ps});const mt=Q.length>0||se?await Se("delete_selected_elements",{repoPath:t,branchNames:Q,discardUncommittedChanges:se}):{deletedBranches:[],discardedUncommittedChanges:!1};await Pn(t);const Ot=[];Je.length>0&&Ot.push(Je.length===1?`removed stash ${Je[0]+1}`:`removed ${Je.length} stashes`),mt.discardedUncommittedChanges&&Ot.push("discarded local uncommitted changes"),mt.deletedBranches.length>0&&Ot.push(mt.deletedBranches.length===1?`deleted ${mt.deletedBranches[0]}`:`deleted ${mt.deletedBranches.length} branches`),Ve({kind:"success",message:Ot.length>0?Ot.join(" and "):"Nothing to delete."})}catch(mt){const Ot=mt instanceof Error?mt.message:String(mt);Ve({kind:"error",message:Ot}),console.error("Failed to delete selected elements:",Ot)}finally{jt(!1)}}}function go($){xt($),at(Q=>{var se;return{branch:$,seq:((se=Q==null?void 0:Q.seq)!=null?se:0)+1}})}function Oo($){$&&(ft($),ne(Q=>Q+1))}function T($){$&&(ue($),ne(Q=>Q+1))}y.useEffect(()=>{var se;const $=V!=null&&V.hasUncommittedChanges?"WORKING_TREE":(se=V==null?void 0:V.headSha)!=null?se:null;if(!$)return;const Q=`${t!=null?t:"__no-repo__"}|${Cs}|${$}`;ho.current!==Q&&(ho.current=Q,ft($),ne(_e=>_e+1))},[V==null?void 0:V.hasUncommittedChanges,V==null?void 0:V.headSha,Cs,t]),y.useEffect(()=>{ho.current=null},[t]);const{enrichedBranches:G,enrichedBranchCommitPreviews:fe,enrichedBranchUniqueAheadCounts:be,enrichedDirectCommits:He}=y.useMemo(()=>{var xe,C,E,N;const $=Gx(Tn,g,S,en,ls,U);let Q=$.branches,se=$.directCommits,_e=$.branchCommitPreviews,Je=$.branchUniqueAheadCounts;if(!(V!=null&&V.hasUncommittedChanges))return{enrichedBranches:Q,enrichedDirectCommits:se,enrichedBranchCommitPreviews:_e,enrichedBranchUniqueAheadCounts:Je};const rt=V.headSha||V.parentSha||null,mt=(C=(xe=se[0])==null?void 0:xe.fullSha)!=null?C:null,Ot=(R,P)=>!R||!P?!1:R===P||R.startsWith(P)||P.startsWith(R),ps=[{name:U,headSha:mt!=null?mt:"",isDefault:!0},...Q.map(R=>({name:R.name,headSha:R.headSha,isDefault:!1}))],Us=V.branchName?ps.find(R=>R.name===V.branchName):void 0,xo=rt?ps.filter(R=>Ot(R.headSha,rt)):[],vn=(E=Us!=null?Us:xo.find(R=>R.isDefault))!=null?E:xo[0],Ft=!!(vn&&rt&&Ot(vn.headSha,rt)),an=vn&&!vn.isDefault?Q.find(R=>R.name===vn.name):void 0,cn=(()=>{var P;if(!rt)return null;const R=se.find(oe=>Ot(oe.fullSha,rt)||Ot(oe.sha,rt));if(R!=null&&R.date)return R.date;if(an){const oe=((P=_e[an.name])!=null?P:[]).find(Ce=>Ot(Ce.fullSha,rt)||Ot(Ce.sha,rt));if(oe!=null&&oe.date)return oe.date}return null})(),Ms=cn?new Date(cn).getTime():Number.NaN,Co=Date.now(),Vs=Number.isFinite(Ms)?Math.max(Co,Ms+1):Co,Bs=new Date(Vs).toISOString(),qs={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:rt,message:"Local uncommitted changes",author:"You",date:Bs,kind:"uncommitted"},zo={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:rt,childShas:[],branch:U,message:"Local uncommitted changes",author:"You",date:Bs,kind:"uncommitted"};if(Ft&&(vn!=null&&vn.isDefault))return{enrichedBranches:Q,enrichedBranchCommitPreviews:_e,enrichedBranchUniqueAheadCounts:Je,enrichedDirectCommits:[...se,zo]};if(Ft&&an)return{enrichedBranches:Q.map(P=>P.name===an.name?{...P,commitsAhead:P.commitsAhead+1,unpushedCommits:P.unpushedCommits+1,lastCommitDate:Bs,headSha:"WORKING_TREE"}:P),enrichedDirectCommits:se,enrichedBranchCommitPreviews:{..._e,[an.name]:[qs,..._e[an.name]||[]]},enrichedBranchUniqueAheadCounts:{...Je,[an.name]:Math.max(0,(N=Object.prototype.hasOwnProperty.call(Je,an.name)?Je[an.name]:an.commitsAhead)!=null?N:0)+1}};const bo={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:Bs,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:rt!=null?rt:void 0,parentBranch:(vn==null?void 0:vn.name)||V.branchName||U};return{enrichedBranches:[bo,...Q],enrichedBranchCommitPreviews:{..._e,[bo.name]:[qs]},enrichedBranchUniqueAheadCounts:{...Je,[bo.name]:1},enrichedDirectCommits:se}},[g,en,ls,V,U,S,Tn]),Ke=y.useMemo(()=>{const $={...Bt};return $[U]=null,$},[Bt,U,G]),It=y.useMemo(()=>{var $;return($=gw(G,U,Ke,Bn))!=null?$:up(G,U,fe,Ke)},[G,U,fe,Ke,Bn]),Vt=y.useMemo(()=>Mc({lanes:It,branches:G,mergeNodes:b,directCommits:He,unpushedDirectCommits:k,defaultBranch:U,branchCommitPreviews:fe,branchParentByName:Ke,branchUniqueAheadCounts:be,manuallyOpenedClumps:ge,manuallyClosedClumps:ae,isDebugOpen:!1,gridSearchQuery:Z,gridFocusSha:et,checkedOutRef:V!=null?V:null,orientation:Cs}),[It,G,b,He,k,U,fe,Ke,be,ge,ae,Z,et,(Xo=V==null?void 0:V.headSha)!=null?Xo:null,(Zi=V==null?void 0:V.branchName)!=null?Zi:null,Cs]),Dt=y.useMemo(()=>{var $;return et&&($=Vt.clusterKeyByCommitId.get(et))!=null?$:null},[Vt.clusterKeyByCommitId,et]),Fe=y.useMemo(()=>{if(!Dt||ae.has(Dt))return ge;const $=new Set(ge);return $.add(Dt),$},[ae,ge,Dt]),Qt=y.useMemo(()=>{if(!Dt)return ae;const $=new Set(ae);return $.delete(Dt),$},[ae,Dt]),fn=y.useMemo(()=>Mc({lanes:It,branches:G,mergeNodes:b,directCommits:He,unpushedDirectCommits:k,defaultBranch:U,branchCommitPreviews:fe,branchParentByName:Ke,branchUniqueAheadCounts:be,manuallyOpenedClumps:Fe,manuallyClosedClumps:Qt,isDebugOpen:!1,gridSearchQuery:Z,gridFocusSha:et,checkedOutRef:V!=null?V:null,orientation:Cs}),[It,G,b,He,k,U,fe,Ke,be,Fe,Qt,Z,et,(ua=V==null?void 0:V.headSha)!=null?ua:null,(Ii=V==null?void 0:V.branchName)!=null?Ii:null,Cs]);y.useEffect(()=>{try{const $=window.localStorage.getItem(Ry);if($){const se=Number($);Number.isFinite(se)&&ti(Math.min(zy,Math.max(Oy,se)))}const Q=window.localStorage.getItem(By);Q!=null&&As(Q==="true")}catch{}},[]),y.useEffect(()=>{os.current=kn},[kn]),y.useEffect(()=>{const $=jn.current;$&&($.style.width=Is?"0px":`${kn}px`)},[kn,Is]),y.useEffect(()=>{try{window.localStorage.setItem(By,String(Is))}catch{}},[Is]);const Hn=$=>{const Q=An.current;if(!Q)return;const se=Q.startWidth+($-Q.startX);Q.pendingWidth=Math.min(zy,Math.max(Oy,se));const _e=jn.current;_e&&(_e.style.width=`${Q.pendingWidth}px`)},Un=($,Q)=>{const se=An.current;if(se&&!(Q!=null&&se.pointerId!==Q)){An.current=null,Ho({dragging:!1,lastEvent:$}),document.body.style.cursor="",document.body.style.userSelect="",ti(se.pendingWidth);try{window.localStorage.setItem(Ry,String(se.pendingWidth))}catch{}}},pn=$=>{$.button===0&&($.preventDefault(),Ho({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:$.pointerId,clientX:$.clientX,width:os.current}),An.current={startX:$.clientX,startWidth:os.current,pendingWidth:os.current,pointerId:$.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",$.currentTarget.setPointerCapture($.pointerId))},js=$=>{const Q=An.current;!Q||Q.pointerId!==$.pointerId||(us.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:$.clientX}),Ho(se=>se.dragging?{dragging:!0,lastEvent:"move"}:se),Hn($.clientX))},yo=$=>{if(An.current){console.debug("[sidebar-resize] pointerup",{pointerId:$.pointerId});try{$.currentTarget.releasePointerCapture($.pointerId)}catch{}Un("pointerup",$.pointerId)}},mi=$=>{if(An.current){console.debug("[sidebar-resize] pointercancel",{pointerId:$.pointerId});try{$.currentTarget.releasePointerCapture($.pointerId)}catch{}Un("pointercancel",$.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:jn,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:Is?64:kn},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[90] inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":Is?"Open sidebar":"Collapse sidebar",onClick:()=>As($=>!$),children:Is?l.jsx(lw,{className:"h-4 w-4 shrink-0"}):l.jsx(aw,{className:"h-4 w-4 shrink-0"})}),l.jsx(Zw,{className:tS("min-h-0 shrink-0 overflow-hidden pt-16 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:Is,projects:wo,activeProjectPath:t,onSelectProject:Yo,onAddProject:Qi,onRemoveProject:zi,onRevealProjectInFinder:Uo,projectLoading:pt||p,projectError:Ze,branches:G,defaultBranch:U,checkedOutRef:V,showCommits:zt,onToggleShowCommits:()=>gt($=>!$),manuallyOpenedClumps:Fe,manuallyClosedClumps:Qt,setManuallyOpenedClumps:B,setManuallyClosedClumps:re,gridLayoutModel:fn,onSelectCommit:Oo,onSelectBranch:T}),Is?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:pn,onPointerMove:js,onPointerUp:yo,onPointerCancel:mi,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(Xw,{branches:G,mergeNodes:b,directCommits:He,unpushedDirectCommits:k,unpushedCommitShasByBranch:z,defaultBranch:U,branchCommitPreviews:fe,branchParentByName:Ke,branchUniqueAheadCounts:be,gridSearchQuery:Z,gridSearchJumpToken:I,gridSearchJumpDirection:F,gridFocusSha:et,onGridSearchResultCountChange:Ee,onGridSearchResultIndexChange:Ae,onGridSearchFocusChange:ft,checkedOutRef:V,onCommitClick:Hs,onMergeRefsIntoBranch:Wn,mergeInProgress:tt,onPushAllBranches:Rs,onPushCurrentBranch:hi,onPushCommitTargets:ao,pushInProgress:Ht,onDeleteSelection:ks,deleteInProgress:Pe,worktrees:le,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:mo,removeWorktreeInProgress:ke,onSwitchToWorktree:Vo,onStashLocalChanges:_o,stashInProgress:$n,stashDisabled:!1,onCommitLocalChanges:si,commitInProgress:En,commitDisabled:!1,onStageAllChanges:qn,stageInProgress:ln,onCreateBranchFromNode:dn,onCreateRootBranch:Fo,createBranchFromNodeInProgress:Ao,isDebugOpen:so,onDebugClose:()=>fo(!1),onInteractionChange:ei,manuallyOpenedClumps:Fe,manuallyClosedClumps:Qt,setManuallyOpenedClumps:B,setManuallyClosedClumps:re,layoutModel:fn,orientation:Cs,gridHudProps:{githubAuthStatus:te,githubAuthLoading:ve,onGitHubAuthSetup:Gs,gridSearchQuery:Z,setGridSearchQuery:ue,gridSearchResultCount:de,gridSearchResultIndex:Oe,setGridSearchJumpDirection:K,setGridSearchJumpToken:ne,mapGridOrientation:Cs,setMapGridOrientation:uo,setIsGridDebugOpen:fo,githubAuthMessage:Ge,commitSwitchFeedback:vt,isCommitSwitchFeedbackVisible:$t}})]}),Y&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${We?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Wo,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Ne("active"),className:`text-xs font-medium transition-colors ${it==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[ms.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Ne("inactive"),className:`text-xs font-medium transition-colors ${it==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[po.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(it==="active"?ms:po).map($=>{const Q=(yt==null?void 0:yt.name)===$.name,se=Lo($);return l.jsxs("button",{onClick:()=>go($),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${Q?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:$.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[se>0&&`${se} ahead`,se>0&&$.commitsBehind>0&&", ",$.commitsBehind>0&&`${$.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},$.name)})})]})]})})})}var Bc=Bx(),oS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,iS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=oS}var rs=iS,aS=`.icon-transitions-module__iconState___uqK9J {
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
}`,rS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=aS}var ns=rS,lS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),cS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),uS=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),dS=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ns.iconState} ${n?ns.hiddenScaled:ns.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ns.iconState} ${n?ns.visibleScaled:ns.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),fS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ns.iconStateFast} ${i?ns.visibleScaled:u?ns.sending:ns.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ns.iconStateFast} ${a?ns.visibleScaled:ns.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ns.iconStateFast} ${c?ns.visibleScaled:ns.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},hS=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ns.iconFade} ${n?ns.visible:ns.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ns.iconFade} ${n?ns.hidden:ns.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),mS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ns.iconFadeFast} ${n?ns.hidden:ns.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ns.iconFadeFast} ${n?ns.visible:ns.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),pS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),_S=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),qx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),gS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),yS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),xS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),bS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),vS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),wS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),SS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Kx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Qh=Kx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Zh="__agentation_freeze";function CS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Zh]||(t[Zh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Zh]}var un=CS();typeof window<"u"&&!un.installed&&(un.origSetTimeout=window.setTimeout.bind(window),un.origSetInterval=window.setInterval.bind(window),un.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?un.origSetTimeout(t,n):un.origSetTimeout((...a)=>{un.frozen?un.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?un.origSetInterval(t,n):un.origSetInterval((...a)=>{un.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>un.origRAF(n=>{un.frozen?un.frozenRAFQueue.push(t):t(n)}),un.installed=!0);var Ut=un.origSetTimeout,kS=un.origSetInterval,ul=un.origRAF;function jS(t){return t?Kx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function MS(){if(typeof document>"u"||un.frozen)return;un.frozen=!0,un.frozenTimeoutQueue=[],un.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Qh},
    *${Qh}::before,
    *${Qh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),un.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;jS(i)||(n.pause(),un.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function $y(){var i;if(typeof document>"u"||!un.frozen)return;un.frozen=!1;const t=un.frozenTimeoutQueue;un.frozenTimeoutQueue=[];for(const a of t)un.origSetTimeout(()=>{if(un.frozen){un.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=un.frozenRAFQueue;un.frozenRAFQueue=[];for(const a of n)un.origRAF(c=>{if(un.frozen){un.frozenRAFQueue.push(a);return}a(c)});for(const a of un.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}un.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Jh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:_,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},j){const[k,M]=y.useState(u),[z,L]=y.useState(!1),[D,W]=y.useState("initial"),[U,X]=y.useState(!1),[V,J]=y.useState(!1),le=y.useRef(null),ie=y.useRef(null),ke=y.useRef(null),$e=y.useRef(null);y.useEffect(()=>{b&&D!=="exit"&&W("exit")},[b,D]),y.useEffect(()=>{Ut(()=>{W("enter")},0);const K=Ut(()=>{W("entered")},200),ge=Ut(()=>{const B=le.current;B&&(Jh(B),B.selectionStart=B.selectionEnd=B.value.length,B.scrollTop=B.scrollHeight)},50);return()=>{clearTimeout(K),clearTimeout(ge),ke.current&&clearTimeout(ke.current),$e.current&&clearTimeout($e.current)}},[]);const Z=y.useCallback(()=>{$e.current&&clearTimeout($e.current),L(!0),$e.current=Ut(()=>{L(!1),Jh(le.current)},250)},[]);y.useImperativeHandle(j,()=>({shake:Z}),[Z]);const ue=y.useCallback(()=>{W("exit"),ke.current=Ut(()=>{p()},150)},[p]),I=y.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),ne=y.useCallback(K=>{K.stopPropagation(),!K.nativeEvent.isComposing&&(K.key==="Enter"&&!K.shiftKey&&(K.preventDefault(),I()),K.key==="Escape"&&ue())},[I,ue]),F=[rs.popup,w?rs.light:"",D==="enter"?rs.enter:"",D==="entered"?rs.entered:"",D==="exit"?rs.exit:"",z?rs.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:ie,className:F,"data-annotation-popup":!0,style:g,onClick:K=>K.stopPropagation(),children:[l.jsxs("div",{className:rs.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:rs.headerToggle,onClick:()=>{const K=V;J(!V),K&&Ut(()=>Jh(le.current),0)},type:"button",children:[l.jsx("svg",{className:`${rs.chevron} ${V?rs.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:rs.element,children:n})]}):l.jsx("span",{className:rs.element,children:n}),i&&l.jsx("span",{className:rs.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${rs.stylesWrapper} ${V?rs.expanded:""}`,children:l.jsx("div",{className:rs.stylesInner,children:l.jsx("div",{className:rs.stylesBlock,children:Object.entries(S).map(([K,ge])=>l.jsxs("div",{className:rs.styleLine,children:[l.jsx("span",{className:rs.styleProperty,children:K.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:rs.styleValue,children:ge}),";"]},K))})})}),a&&l.jsxs("div",{className:rs.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:le,className:rs.textarea,style:{borderColor:U?x:void 0},placeholder:c,value:k,onChange:K=>M(K.target.value),onFocus:()=>X(!0),onBlur:()=>X(!1),rows:2,onKeyDown:ne}),l.jsxs("div",{className:rs.actions,children:[_&&l.jsx("div",{className:rs.deleteWrapper,children:l.jsx("button",{className:rs.deleteButton,onClick:_,type:"button",children:l.jsx(vS,{size:22})})}),l.jsx("button",{className:rs.cancel,onClick:ue,children:"Cancel"}),l.jsx("button",{className:rs.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:I,disabled:!k.trim(),children:d})]})]})}),TS=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),_=y.useRef(null),g=y.useRef(null),x=y.useRef(null),b=()=>{if(_.current){const j=_.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Ut(()=>{c(!0)},500)},S=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Ut(()=>{d(!1)},150)};return y.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:_,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Bc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},ES=`.styles-module__tooltip___mcXL2 {
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
}`,AS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=ES}var Iy=AS,Mr=({content:t})=>l.jsx(TS,{className:Iy.tooltip,content:t,children:l.jsx(uS,{className:Iy.tooltipIcon})}),wt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Qx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...wt.navigation},{type:"header",label:"Header",...wt.header},{type:"hero",label:"Hero",...wt.hero},{type:"section",label:"Section",...wt.section},{type:"sidebar",label:"Sidebar",...wt.sidebar},{type:"footer",label:"Footer",...wt.footer},{type:"modal",label:"Modal",...wt.modal},{type:"banner",label:"Banner",...wt.banner},{type:"drawer",label:"Drawer",...wt.drawer},{type:"popover",label:"Popover",...wt.popover},{type:"divider",label:"Divider",...wt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...wt.card},{type:"text",label:"Text",...wt.text},{type:"image",label:"Image",...wt.image},{type:"video",label:"Video",...wt.video},{type:"table",label:"Table",...wt.table},{type:"grid",label:"Grid",...wt.grid},{type:"list",label:"List",...wt.list},{type:"chart",label:"Chart",...wt.chart},{type:"codeBlock",label:"Code Block",...wt.codeBlock},{type:"map",label:"Map",...wt.map},{type:"timeline",label:"Timeline",...wt.timeline},{type:"calendar",label:"Calendar",...wt.calendar},{type:"accordion",label:"Accordion",...wt.accordion},{type:"carousel",label:"Carousel",...wt.carousel},{type:"logo",label:"Logo",...wt.logo},{type:"faq",label:"FAQ",...wt.faq},{type:"gallery",label:"Gallery",...wt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...wt.button},{type:"input",label:"Input",...wt.input},{type:"search",label:"Search",...wt.search},{type:"form",label:"Form",...wt.form},{type:"tabs",label:"Tabs",...wt.tabs},{type:"dropdown",label:"Dropdown",...wt.dropdown},{type:"toggle",label:"Toggle",...wt.toggle},{type:"stepper",label:"Stepper",...wt.stepper},{type:"rating",label:"Rating",...wt.rating},{type:"fileUpload",label:"File Upload",...wt.fileUpload},{type:"checkbox",label:"Checkbox",...wt.checkbox},{type:"radio",label:"Radio",...wt.radio},{type:"slider",label:"Slider",...wt.slider},{type:"datePicker",label:"Date Picker",...wt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...wt.avatar},{type:"badge",label:"Badge",...wt.badge},{type:"tag",label:"Tag",...wt.tag},{type:"breadcrumb",label:"Breadcrumb",...wt.breadcrumb},{type:"pagination",label:"Pagination",...wt.pagination},{type:"progress",label:"Progress",...wt.progress},{type:"alert",label:"Alert",...wt.alert},{type:"toast",label:"Toast",...wt.toast},{type:"notification",label:"Notification",...wt.notification},{type:"tooltip",label:"Tooltip",...wt.tooltip},{type:"stat",label:"Stat",...wt.stat},{type:"skeleton",label:"Skeleton",...wt.skeleton},{type:"chip",label:"Chip",...wt.chip},{type:"icon",label:"Icon",...wt.icon},{type:"spinner",label:"Spinner",...wt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...wt.pricing},{type:"testimonial",label:"Testimonial",...wt.testimonial},{type:"cta",label:"CTA",...wt.cta},{type:"productCard",label:"Product Card",...wt.productCard},{type:"profile",label:"Profile",...wt.profile},{type:"feature",label:"Feature",...wt.feature},{type:"team",label:"Team",...wt.team},{type:"login",label:"Login",...wt.login},{type:"contact",label:"Contact",...wt.contact}]}],qi={};for(const t of Qx)for(const n of t.items)qi[n.type]=n;function Ie({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Gn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Jo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function DS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Gn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Ie,{w:t*.06}),l.jsx(Ie,{w:t*.07}),l.jsx(Ie,{w:t*.05}),l.jsx(Ie,{w:t*.06})]}),l.jsx(Gn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function NS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ie,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ie,{w:t*.6}),l.jsx(Ie,{w:t*.4}),l.jsx(Gn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function RS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ie,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Gn,{w:10,h:10,radius:2}),l.jsx(Ie,{w:t*(.4+c*17%30/100)})]},c))]})}function BS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"70%",h:2}),l.jsx(Ie,{w:"60%",h:2})]},c))})}function LS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"90%"}),l.jsx(Ie,{w:"70%"}),l.jsx(Ie,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Gn,{w:70,h:26,radius:4}),l.jsx(Gn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function OS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:4,strong:!0}),l.jsx(Ie,{w:"95%",h:2}),l.jsx(Ie,{w:"85%",h:2}),l.jsx(Ie,{w:"50%",h:2})]})]})}function zS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ie,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ie,{w:`${70+u*13%25}%`,h:2},u))]})}function $S({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function IS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function PS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Jo,{size:8}),l.jsx(Ie,{w:`${55+c*17%35}%`,h:2})]},c))})}function HS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ie,{w:Math.max(20,t*.5),h:3,strong:!0})})}function US({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ie,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ie,{w:"40%",h:2})})]})}function VS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:60+c*17%30,h:2}),l.jsx(Gn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Gn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function YS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ie,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"65%",h:2}),l.jsx(Ie,{w:"75%",h:2})]})]})}function WS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function FS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0})})}function XS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ie,{w:t*.35})]})}function GS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx(Ie,{w:t*.7}),l.jsx(Ie,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4})]})]})}function qS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Gn,{w:"100%",h:"100%",radius:4},u))})}function KS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ie,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ie,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function QS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function ZS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Jo,{size:Math.min(14,n*.4)}),l.jsx(Ie,{w:"50%",h:2})]})}function JS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Jo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function e4({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function t4({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Gn,{w:a,h:`${d}%`,radius:2},u)})})}function n4({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function s4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function o4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ie,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function i4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Gn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function a4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function r4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ie,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function l4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Jo,{size:5}),l.jsx(Jo,{size:5}),l.jsx(Jo,{size:5})]})]})}function c4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(Ie,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Jo,{size:5}),l.jsx(Ie,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Gn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function u4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"75%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Jo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ie,{w:60,h:3,strong:!0}),l.jsx(Ie,{w:40,h:2})]})]})]})}function d4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ie,{w:t*.35}),l.jsx(Gn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function f4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"40%",h:3,strong:!0}),l.jsx(Ie,{w:"70%",h:2})]})]})}function h4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(Gn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function m4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ie,{w:t*.5,h:2}),l.jsx(Ie,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ie,{w:t*.3,h:2})]})}function p4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function _4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function g4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function y4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function x4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Jo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function b4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ie,{w:t*.4,h:2}),l.jsx(Ie,{w:t*.25,h:2})]})}function v4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Jo,{size:6}),l.jsx(Jo,{size:6}),l.jsx(Jo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ie,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function w4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ie,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function S4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Jo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"50%",h:3,strong:!0}),l.jsx(Ie,{w:"75%",h:2})]}),l.jsx(Ie,{w:30,h:2})]})}function C4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"65%",h:4,strong:!0}),l.jsx(Ie,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"30%",h:5,strong:!0}),l.jsx(Gn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function k4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Jo,{size:i}),l.jsx(Ie,{w:t*.45,h:4,strong:!0}),l.jsx(Ie,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]})]})]})}function j4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ie,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ie,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function M4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:3,strong:!0}),l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function T4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsx(Ie,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function E4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ie,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function A4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function D4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function N4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function R4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function B4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function L4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function O4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ie,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function z4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function $4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function I4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function P4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Jo,{size:a}),l.jsx(Ie,{w:t*.12,h:3,strong:!0}),l.jsx(Ie,{w:t*.08,h:2})]},u))})]})}function H4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ie,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:Math.min(60,t*.2),h:2}),l.jsx(Gn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Gn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ie,{w:t*.4,h:2})]})}function U4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Ie,{w:t*.4,h:4,strong:!0}),l.jsx(Ie,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:40,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ie,{w:60,h:2}),l.jsx(Gn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Gn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var V4={navigation:DS,hero:NS,sidebar:RS,footer:BS,modal:LS,card:OS,text:zS,image:$S,table:IS,list:PS,button:HS,input:US,form:VS,tabs:YS,avatar:WS,badge:FS,header:XS,section:GS,grid:qS,dropdown:KS,toggle:QS,search:ZS,toast:JS,progress:e4,chart:t4,video:n4,tooltip:s4,breadcrumb:o4,pagination:i4,divider:a4,accordion:r4,carousel:l4,pricing:c4,testimonial:u4,cta:d4,alert:f4,banner:h4,stat:m4,stepper:p4,tag:_4,rating:g4,map:y4,timeline:x4,fileUpload:b4,codeBlock:v4,calendar:w4,notification:S4,productCard:C4,profile:k4,drawer:j4,popover:M4,logo:T4,faq:E4,gallery:A4,checkbox:D4,radio:N4,slider:R4,datePicker:B4,skeleton:L4,chip:O4,icon:z4,spinner:$4,feature:I4,team:P4,login:H4,contact:U4};function Y4({type:t,width:n,height:i,text:a}){const c=V4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var W4=`svg[fill=none] {
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
}`,F4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=W4}var De=F4,al=24,Xu=5;function Py(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,_=t.x+t.width/2,g=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,_]:[...a.left?[h]:[],...a.right?[p]:[]],j=w?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],k=[];for(const ie of n)i.has(ie.id)||k.push(ie);c&&k.push(...c);for(const ie of k){const ke=ie.x,$e=ie.x+ie.width,Z=ie.x+ie.width/2,ue=ie.y,I=ie.y+ie.height,ne=ie.y+ie.height/2;for(const F of S)for(const K of[ke,$e,Z]){const ge=K-F;Math.abs(ge)<Xu&&Math.abs(ge)<Math.abs(u)&&(u=ge)}for(const F of j)for(const K of[ue,I,ne]){const ge=K-F;Math.abs(ge)<Xu&&Math.abs(ge)<Math.abs(d)&&(d=ge)}}const M=Math.abs(u)<Xu?u:0,z=Math.abs(d)<Xu?d:0,L=[],D=new Set,W=h+M,U=p+M,X=_+M,V=g+z,J=x+z,le=b+z;for(const ie of k){const ke=ie.x,$e=ie.x+ie.width,Z=ie.x+ie.width/2,ue=ie.y,I=ie.y+ie.height,ne=ie.y+ie.height/2;for(const F of[ke,Z,$e])for(const K of[W,X,U])if(Math.abs(K-F)<.5){const ge=`x:${Math.round(F)}`;D.has(ge)||(D.add(ge),L.push({axis:"x",pos:F}))}for(const F of[ue,ne,I])for(const K of[V,le,J])if(Math.abs(K-F)<.5){const ge=`y:${Math.round(F)}`;D.has(ge)||(D.add(ge),L.push({axis:"y",pos:F}))}}return{dx:M,dy:z,guides:L}}function Hy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function X4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:_,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:j}){const[k,M]=y.useState(new Set),[z,L]=y.useState(null),[D,W]=y.useState(null),[U,X]=y.useState(null),[V,J]=y.useState([]),[le,ie]=y.useState(null),[ke,$e]=y.useState(!1),Z=y.useRef(!1),[ue,I]=y.useState(new Set),ne=y.useRef(new Map),F=y.useRef(null),K=y.useRef(null),ge=y.useRef(t);ge.current=t;const B=y.useRef(g);B.current=g;const ae=y.useRef(b);ae.current=b;const re=y.useRef(w);re.current=w;const de=y.useRef(x);y.useEffect(()=>{x!==de.current&&(de.current=x,M(new Set))},[x]);const Ee=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==Ee.current){Ee.current=S;const Y=new Set(ge.current.map(je=>je.id));Y.size>0&&(I(Y),M(new Set),K.current=null,Ut(()=>{n([]),I(new Set)},180))}},[S,n]),y.useEffect(()=>{const Y=je=>{const We=je.target;if(!(We.tagName==="INPUT"||We.tagName==="TEXTAREA"||We.isContentEditable)){if((je.key==="Backspace"||je.key==="Delete")&&k.size>0){je.preventDefault();const it=new Set(k);I(it),M(new Set),Ut(()=>{n(ge.current.filter(Ne=>!it.has(Ne.id))),I(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(je.key)&&k.size>0){je.preventDefault();const it=je.shiftKey?20:1,Ne=je.key==="ArrowLeft"?-it:je.key==="ArrowRight"?it:0,st=je.key==="ArrowUp"?-it:je.key==="ArrowDown"?it:0;n(t.map(at=>k.has(at.id)?{...at,x:Math.max(0,at.x+Ne),y:Math.max(0,at.y+st)}:at));return}if(je.key==="Escape"){i?a(null):k.size>0&&M(new Set);return}}};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[k,i,t,n,a]);const Oe=y.useCallback(Y=>{if(Y.button!==0||p||Y.target.closest(`.${De.placement}`))return;Y.preventDefault(),Y.stopPropagation();const We=window.scrollY,Ue=Y.clientX,it=Y.clientY;if(i){K.current="place",d==null||d(!0);let Ne=!1,st=Ue,at=it;const yt=ot=>{st=ot.clientX,at=ot.clientY;const H=Math.abs(st-Ue),te=Math.abs(at-it);if((H>5||te>5)&&(Ne=!0),Ne){const me=Math.min(Ue,st),ve=Math.min(it,at),Qe=Math.abs(st-Ue),Ge=Math.abs(at-it);L({x:me,y:ve,w:Qe,h:Ge}),X({x:ot.clientX+12,y:ot.clientY+12,text:`${Math.round(Qe)} × ${Math.round(Ge)}`})}},xt=ot=>{window.removeEventListener("mousemove",yt),window.removeEventListener("mouseup",xt),L(null),X(null),K.current=null,d==null||d(!1);const H=wt[i];let te,me,ve,Qe;Ne?(te=Math.min(Ue,st),me=Math.min(it,at)+We,ve=Math.max(al,Math.abs(st-Ue)),Qe=Math.max(al,Math.abs(at-it))):(ve=H.width,Qe=H.height,te=Ue-ve/2,me=it+We-Qe/2),te=Math.max(0,te),me=Math.max(0,me);const Ge={id:Hy(),type:i,x:te,y:me,width:ve,height:Qe,scrollY:We,timestamp:Date.now()},Re=[...t,Ge];n(Re),M(new Set([Ge.id])),a(null)};window.addEventListener("mousemove",yt),window.addEventListener("mouseup",xt)}else{Y.shiftKey||M(new Set),K.current="select";let Ne=!1;const st=yt=>{const xt=Math.abs(yt.clientX-Ue),ot=Math.abs(yt.clientY-it);if((xt>4||ot>4)&&(Ne=!0),Ne){const H=Math.min(Ue,yt.clientX),te=Math.min(it,yt.clientY);W({x:H,y:te,w:Math.abs(yt.clientX-Ue),h:Math.abs(yt.clientY-it)})}},at=yt=>{if(window.removeEventListener("mousemove",st),window.removeEventListener("mouseup",at),K.current=null,Ne){const xt=Math.min(Ue,yt.clientX),ot=Math.min(it,yt.clientY)+We,H=Math.abs(yt.clientX-Ue),te=Math.abs(yt.clientY-it),me=new Set(Y.shiftKey?k:new Set);for(const ve of t)ve.y-We,ve.x+ve.width>xt&&ve.x<xt+H&&ve.y+ve.height>ot&&ve.y<ot+te&&me.add(ve.id);M(me)}W(null)};window.addEventListener("mousemove",st),window.addEventListener("mouseup",at)}},[i,p,t,n,k]),Ae=y.useCallback((Y,je)=>{var Ge;if(Y.button!==0)return;const We=Y.target;if(We.closest(`.${De.handle}`)||We.closest(`.${De.deleteButton}`))return;Y.preventDefault(),Y.stopPropagation();let Ue;Y.shiftKey?(Ue=new Set(k),Ue.has(je)?Ue.delete(je):Ue.add(je)):k.has(je)?Ue=new Set(k):Ue=new Set([je]),M(Ue),(Ue.size!==k.size||[...Ue].some(Re=>!k.has(Re)))&&((Ge=B.current)==null||Ge.call(B,Ue,Y.shiftKey));const Ne=Y.clientX,st=Y.clientY,at=new Map;for(const Re of t)Ue.has(Re.id)&&at.set(Re.id,{x:Re.x,y:Re.y});K.current="move",d==null||d(!0);let yt=!1,xt=!1,ot=t,H=0,te=0;const me=new Map;for(const Re of t)at.has(Re.id)&&me.set(Re.id,{w:Re.width,h:Re.height});const ve=Re=>{var en;const vt=Re.clientX-Ne,Ve=Re.clientY-st;if((Math.abs(vt)>2||Math.abs(Ve)>2)&&(yt=!0),!yt)return;if(Re.altKey&&!xt){xt=!0;const ct=[];for(const Bt of t)at.has(Bt.id)&&ct.push({...Bt,id:Hy(),timestamp:Date.now()});ot=[...t,...ct]}let $t=1/0,bt=1/0,tt=-1/0,Lt=-1/0;for(const[ct,Bt]of at){const xn=me.get(ct);xn&&($t=Math.min($t,Bt.x+vt),bt=Math.min(bt,Bt.y+Ve),tt=Math.max(tt,Bt.x+vt+xn.w),Lt=Math.max(Lt,Bt.y+Ve+xn.h))}const Ht={x:$t,y:bt,width:tt-$t,height:Lt-bt},{dx:dt,dy:Pe,guides:jt}=Py(Ht,ot,new Set(at.keys()),void 0,_);J(jt);const Mt=vt+dt,_t=Ve+Pe;H=Mt,te=_t,n(ot.map(ct=>{const Bt=at.get(ct.id);return Bt?{...ct,x:Math.max(0,Bt.x+Mt),y:Math.max(0,Bt.y+_t)}:ct})),(en=ae.current)==null||en.call(ae,Mt,_t)},Qe=()=>{var Re;window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",Qe),K.current=null,d==null||d(!1),J([]),(Re=re.current)==null||Re.call(re,H,te,yt)};window.addEventListener("mousemove",ve),window.addEventListener("mouseup",Qe)},[k,t,n,d]),et=y.useCallback((Y,je,We)=>{Y.preventDefault(),Y.stopPropagation();const Ue=t.find(me=>me.id===je);if(!Ue)return;M(new Set([je])),K.current="resize",d==null||d(!0);const it=Y.clientX,Ne=Y.clientY,st=Ue.width,at=Ue.height,yt=Ue.x,xt=Ue.y,ot={left:We.includes("w"),right:We.includes("e"),top:We.includes("n"),bottom:We.includes("s")},H=me=>{const ve=me.clientX-it,Qe=me.clientY-Ne;let Ge=st,Re=at,vt=yt,Ve=xt;We.includes("e")&&(Ge=Math.max(al,st+ve)),We.includes("w")&&(Ge=Math.max(al,st-ve),vt=yt+st-Ge),We.includes("s")&&(Re=Math.max(al,at+Qe)),We.includes("n")&&(Re=Math.max(al,at-Qe),Ve=xt+at-Re);const $t={x:vt,y:Ve,width:Ge,height:Re},{dx:bt,dy:tt,guides:Lt}=Py($t,ge.current,new Set([je]),ot,_);J(Lt),bt!==0&&(ot.right?Ge+=bt:ot.left&&(vt+=bt,Ge-=bt)),tt!==0&&(ot.bottom?Re+=tt:ot.top&&(Ve+=tt,Re-=tt)),n(ge.current.map(Ht=>Ht.id===je?{...Ht,x:vt,y:Ve,width:Ge,height:Re}:Ht)),X({x:me.clientX+12,y:me.clientY+12,text:`${Math.round(Ge)} × ${Math.round(Re)}`})},te=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",te),X(null),K.current=null,d==null||d(!1),J([])};window.addEventListener("mousemove",H),window.addEventListener("mouseup",te)},[t,n,d]),ft=y.useCallback(Y=>{K.current=null,I(je=>{const We=new Set(je);return We.add(Y),We}),M(je=>{const We=new Set(je);return We.delete(Y),We}),Ut(()=>{n(ge.current.filter(je=>je.id!==Y)),I(je=>{const We=new Set(je);return We.delete(Y),We})},180)},[n]),zt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},gt=y.useCallback(Y=>{const je=t.find(We=>We.id===Y);je&&(Z.current=!!je.text,ie(Y),$e(!1))},[t]),pt=y.useCallback(()=>{le&&($e(!0),Ut(()=>{ie(null),$e(!1)},150))},[le]);y.useEffect(()=>{u&&le&&pt()},[u]);const qe=y.useCallback(Y=>{le&&(n(t.map(je=>je.id===le?{...je,text:Y.trim()||void 0}:je)),pt())},[le,t,n,pt]),Yt=typeof window<"u"?window.scrollY:0,Kt=["nw","ne","se","sw"],Ze=j?"#f97316":"#3c82f7",At=[{dir:"n",cls:De.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Ze})})},{dir:"e",cls:De.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Ze})})},{dir:"s",cls:De.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Ze})})},{dir:"w",cls:De.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Ze})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:F,className:`${De.overlay} ${c?"":De.light} ${i?De.placing:""} ${p?De.passthrough:""} ${u?De.overlayExiting:""} ${j?De.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Oe,children:t.map(Y=>{var it;const je=k.has(Y.id),We=((it=qi[Y.type])==null?void 0:it.label)||Y.type,Ue=Y.y-Yt;return l.jsxs("div",{"data-design-placement":Y.id,className:`${De.placement} ${je?De.selected:""} ${ue.has(Y.id)?De.exiting:""}`,style:{left:Y.x,top:Ue,width:Y.width,height:Y.height,position:"fixed"},onMouseDown:Ne=>Ae(Ne,Y.id),onDoubleClick:()=>gt(Y.id),children:[l.jsx("span",{className:De.placementLabel,children:We}),l.jsx("span",{className:`${De.placementAnnotation} ${Y.text?De.annotationVisible:""}`,children:(Y.text&&ne.current.set(Y.id,Y.text),Y.text||ne.current.get(Y.id)||"")}),l.jsx("div",{className:De.placementContent,children:l.jsx(Y4,{type:Y.type,width:Y.width,height:Y.height,text:Y.text})}),l.jsx("div",{className:De.deleteButton,onMouseDown:Ne=>Ne.stopPropagation(),onClick:()=>ft(Y.id),children:"✕"}),Kt.map(Ne=>l.jsx("div",{className:`${De.handle} ${De[`handle${Ne.charAt(0).toUpperCase()}${Ne.slice(1)}`]}`,onMouseDown:st=>et(st,Y.id,Ne)},Ne)),At.map(({dir:Ne,cls:st,arrow:at})=>l.jsx("div",{className:`${De.edgeHandle} ${st}`,onMouseDown:yt=>et(yt,Y.id,Ne),children:at},Ne))]},Y.id)})}),le&&(()=>{var xt,ot;const Y=t.find(H=>H.id===le);if(!Y)return null;const je=Y.y-Yt,We=Y.x+Y.width/2,Ue=je-8,it=je+Y.height+8,Ne=Ue>200,st=it<window.innerHeight-100,at=Math.max(160,Math.min(window.innerWidth-160,We));let yt;return Ne?yt={left:at,bottom:window.innerHeight-Ue}:st?yt={left:at,top:it}:yt={left:at,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:((xt=qi[Y.type])==null?void 0:xt.label)||Y.type,placeholder:zt[Y.type]||"Label or content text",initialValue:(ot=Y.text)!=null?ot:"",submitLabel:Z.current?"Save":"Set",onSubmit:qe,onCancel:pt,onDelete:Z.current?()=>{qe("")}:void 0,isExiting:ke,lightMode:!c,style:yt})})(),z&&l.jsx("div",{className:De.drawBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),D&&l.jsx("div",{className:De.selectBox,style:{left:D.x,top:D.y,width:D.w,height:D.h},"data-feedback-toolbar":!0}),U&&l.jsx("div",{className:De.sizeIndicator,style:{left:U.x,top:U.y},"data-feedback-toolbar":!0,children:U.text}),V.map((Y,je)=>l.jsx("div",{className:De.guideLine,style:Y.axis==="x"?{position:"fixed",left:Y.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:Y.pos-Yt,right:0,height:1},"data-feedback-toolbar":!0},`${Y.axis}-${Y.pos}-${je}`))]})}function G4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?De.fadeTop:""} ${i?De.fadeBottom:""}`}var O="currentColor",Te="0.5";function q4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:O,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:O,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:O,strokeWidth:Te})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:O,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:O,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:O,strokeWidth:Te})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:O,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:O,strokeWidth:Te,fill:O,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Te})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:O,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:Te})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:O,strokeWidth:Te,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:O,strokeWidth:Te,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:O,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:O,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:O,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:O,strokeWidth:Te})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:Te})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:O,strokeWidth:Te,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:O,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:O,strokeWidth:Te})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:O,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:O,opacity:".15",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:Te})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:O,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:O,strokeWidth:Te})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:O,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:O,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:O,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:O,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:O,strokeWidth:Te})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:O,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:O,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:O,strokeWidth:Te})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:O,opacity:".2",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:O,strokeWidth:Te})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:O,strokeWidth:Te,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:O,strokeWidth:Te,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:O,opacity:".15",stroke:O,strokeWidth:Te})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:O,opacity:".2",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:O,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:Te,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:O,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:O,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:O,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:O,strokeWidth:Te})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:Te,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:O,strokeWidth:Te})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:O,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:O,strokeWidth:Te,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:O,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:O,strokeWidth:Te})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:O,strokeWidth:Te,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:O,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:O,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:O,opacity:".08",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:O,strokeWidth:Te,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:O,strokeWidth:Te,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:O,strokeWidth:Te,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:O,strokeWidth:Te,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:O,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:O,strokeWidth:Te,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:O,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:O,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:O,opacity:".2"})]});default:return null}}function K4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${De.placeScroll} ${c||""}`,children:Qx.map(d=>l.jsxs("div",{className:De.paletteSection,children:[l.jsx("div",{className:De.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${De.paletteItem} ${t===h.type?De.active:""} ${u?De.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:De.paletteItemIcon,children:l.jsx(q4,{type:h.type})}),l.jsx("span",{className:De.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function Q4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),_=y.useRef(n),g=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,_.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(_.current),p.current=t,_.current=n,clearTimeout(g.current),g.current=Ut(()=>a(null),250)}else _.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:De.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${De.rollingNum} ${d==="up"?De.exitUp:De.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${De.rollingNum} ${d==="up"?De.enterUp:De.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:De.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${De.rollingNum} ${d==="up"?De.exitUp:De.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${De.rollingNum} ${d==="up"?De.enterUp:De.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function Z4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:_,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[j,k]=y.useState(!1),[M,z]=y.useState("exit"),[L,D]=y.useState(!1),[W,U]=y.useState(!0),X=y.useRef(0),V=y.useRef(""),J=y.useRef(0),le=y.useRef(),ie=y.useRef(null),[ke,$e]=y.useState("");y.useEffect(()=>(u?(k(!0),clearTimeout(le.current),cancelAnimationFrame(J.current),J.current=ul(()=>{J.current=ul(()=>{z("enter")})})):(cancelAnimationFrame(J.current),z("exit"),clearTimeout(le.current),le.current=Ut(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(J.current)),[u]);const Z=h>0||a>0,ue=h+a;return ue>0&&(X.current=ue,V.current=g?ue===1?"Component":"Components":ue===1?"Change":"Changes"),y.useEffect(()=>{if(Z)L?U(!1):(U(!0),D(!0),ul(()=>{ul(()=>{U(!1)})}));else{U(!0);const I=Ut(()=>D(!1),300);return()=>clearTimeout(I)}},[Z]),y.useEffect(()=>{if(!j)return;const I=ie.current;if(!I)return;const ne=()=>$e(G4(I));ne(),I.addEventListener("scroll",ne,{passive:!0});const F=new ResizeObserver(ne);return F.observe(I),()=>{I.removeEventListener("scroll",ne),F.disconnect()}},[j]),j?l.jsxs("div",{className:`${De.palette} ${De[M]} ${i?"":De.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation(),onTransitionEnd:I=>{I.target===I.currentTarget&&(u||(clearTimeout(le.current),k(!1),z("exit"),d==null||d()))},children:[l.jsxs("div",{className:De.paletteHeader,children:[l.jsx("div",{className:De.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:De.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${De.canvasToggle} ${g?De.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:De.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:De.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${De.wireframePurposeWrap} ${g?"":De.collapsed}`,children:l.jsx("div",{className:De.wireframePurposeInner,children:l.jsx("textarea",{className:De.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:I=>w(I.target.value),rows:2})})}),l.jsx(K4,{activeType:t,onSelect:n,onDragStart:_,scrollRef:ie,fadeClass:ke,blankCanvas:g}),L&&l.jsx("div",{className:`${De.paletteFooterWrap} ${W?De.footerHidden:""}`,children:l.jsx("div",{className:De.paletteFooterInner,children:l.jsx("div",{className:De.paletteFooterInnerContent,children:l.jsxs("div",{className:De.paletteFooter,children:[l.jsx("span",{className:De.paletteFooterCount,children:l.jsx(Q4,{value:X.current,suffix:V.current})}),l.jsx("button",{className:De.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function pl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function qo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=pl(i)}return null}function J4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(_=>_.length>2&&!_.match(/^[a-z]{1,2}$/)&&!_.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=pl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ml(t){var a,c,u,d,h,p,_,g;const n=J4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=qo(t,"svg");if(x){const b=pl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ml(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=pl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function rc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Gu(t){const n=pl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var S;const x=g.tagName.toLowerCase(),b=g.className;let w="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));j&&(w=`.${j}`)}if(x==="button"||x==="a"){const j=(S=g.textContent)==null?void 0:S.trim().slice(0,15);if(j)return`${x}${w} "${j}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,_=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+_}function lc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Zx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),e6=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),t6=new Set(["input","textarea","select"]),n6=new Set(["img","video","canvas","svg"]),s6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;e6.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:t6.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:n6.has(a)?c=["width","height","objectFit","borderRadius"]:s6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Zx.has(h)&&(i[u]=h)}return i}var o6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of o6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Zx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function i6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=pl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var a6=new Set(["nav","header","main","section","article","footer","aside"]),Nm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Uy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},r6=new Set(["script","style","noscript","link","meta"]),l6=40;function Jx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Nr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Nr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Nm[a])return Nm[a];if(Uy[n])return Uy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ml(t);return u.charAt(0).toUpperCase()+u.slice(1)}function eb(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function tb(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function c6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(r6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<l6)return;const _=a6.has(d),g=c.getAttribute("role")&&Nm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!_&&!g&&!x)return;const b=window.scrollY,w=Jx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Nr(c),role:c.getAttribute("role"),className:eb(c),textSnippet:tb(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function u6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Jx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Nr(t),role:t.getAttribute("role"),className:eb(t),textSnippet:tb(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Vy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Yy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Wy=16,ed=5;function Fy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,_=t.y,g=t.y+t.height,x=t.y+t.height/2,b=[];for(const X of n)i.has(X.id)||b.push(X.currentRect);a&&b.push(...a);for(const X of b){const V=X.x,J=X.x+X.width,le=X.x+X.width/2,ie=X.y,ke=X.y+X.height,$e=X.y+X.height/2;for(const Z of[d,h,p])for(const ue of[V,J,le]){const I=ue-Z;Math.abs(I)<ed&&Math.abs(I)<Math.abs(c)&&(c=I)}for(const Z of[_,g,x])for(const ue of[ie,ke,$e]){const I=ue-Z;Math.abs(I)<ed&&Math.abs(I)<Math.abs(u)&&(u=I)}}const w=Math.abs(c)<ed?c:0,S=Math.abs(u)<ed?u:0,j=[],k=new Set,M=d+w,z=h+w,L=p+w,D=_+S,W=g+S,U=x+S;for(const X of b){const V=X.x,J=X.x+X.width,le=X.x+X.width/2,ie=X.y,ke=X.y+X.height,$e=X.y+X.height/2;for(const Z of[V,le,J])for(const ue of[M,L,z])if(Math.abs(ue-Z)<.5){const I=`x:${Math.round(Z)}`;k.has(I)||(k.add(I),j.push({axis:"x",pos:Z}))}for(const Z of[ie,$e,ke])for(const ue of[D,U,W])if(Math.abs(ue-Z)<.5){const I=`y:${Math.round(Z)}`;k.has(I)||(k.add(I),j.push({axis:"y",pos:Z}))}}return{dx:w,dy:S,guides:j}}var d6=new Set(["script","style","noscript","link","meta","br","hr"]);function Xy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(d6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Wy&&i.height>=Wy)return n;n=n.parentElement}return null}function f6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:_,onDragEnd:g,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,j]=y.useState(new Set),[k,M]=y.useState(!1),z=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==z.current&&(z.current=x,b.length>0&&M(!0))},[x,b.length]);const L=y.useRef(p);y.useEffect(()=>{p!==L.current&&(L.current=p,j(new Set))},[p]);const[D,W]=y.useState(null),[U,X]=y.useState(!1),V=y.useRef(!1),J=y.useCallback(H=>{const te=b.find(me=>me.id===H);te&&(V.current=!!te.note,W(H),X(!1))},[b]),le=y.useCallback(()=>{D&&(X(!0),Ut(()=>{W(null),X(!1)},150))},[D]),ie=y.useCallback(H=>{D&&(n({...t,sections:b.map(te=>te.id===D?{...te,note:H.trim()||void 0}:te)}),le())},[D,b,t,n,le]);y.useEffect(()=>{a&&D&&le()},[a]);const[ke,$e]=y.useState(new Set),Z=y.useRef(new Map),[ue,I]=y.useState(null),[ne,F]=y.useState(null),[K,ge]=y.useState([]),[B,ae]=y.useState(0),re=y.useRef(null),de=y.useRef(new Set),Ee=y.useRef(new Map),[Oe,Ae]=y.useState(new Map),[et,ft]=y.useState(new Map),zt=y.useRef(new Set),gt=y.useRef(new Map),pt=y.useRef(h);pt.current=h;const qe=y.useRef(_);qe.current=_;const Yt=y.useRef(g);Yt.current=g,y.useEffect(()=>{u&&j(new Set)},[u]);const[Kt,Ze]=y.useState(()=>!t.sections.some(H=>{const te=H.originalRect,me=H.currentRect;return Math.abs(te.x-me.x)>1||Math.abs(te.y-me.y)>1||Math.abs(te.width-me.width)>1||Math.abs(te.height-me.height)>1}));y.useEffect(()=>{if(!Kt){const H=Ut(()=>Ze(!0),380);return()=>clearTimeout(H)}},[]);const At=y.useRef(new Set);y.useEffect(()=>{At.current=new Set(b.map(H=>H.selector))},[b]),y.useEffect(()=>{const H=()=>ae(window.scrollY);return H(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H)}},[]),y.useEffect(()=>{const H=te=>{if(re.current){I(null);return}const me=document.elementFromPoint(te.clientX,te.clientY);if(!me){I(null);return}if(me.closest("[data-feedback-toolbar]")){I(null);return}if(me.closest("[data-design-placement]")){I(null);return}if(me.closest("[data-annotation-popup]")){I(null);return}const ve=Xy(me);if(!ve){I(null);return}for(const Ge of At.current)try{const Re=document.querySelector(Ge);if(Re&&(Re===ve||ve.contains(Re))){I(null);return}}catch{}const Qe=ve.getBoundingClientRect();I({x:Qe.x,y:Qe.y,w:Qe.width,h:Qe.height})};return document.addEventListener("mousemove",H,{passive:!0}),()=>document.removeEventListener("mousemove",H)},[b]),y.useEffect(()=>{const H=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=H}},[]),y.useEffect(()=>{const H=te=>{var Re,vt,Ve,$t;if(re.current||te.button!==0)return;const me=te.target;if(!me||me.closest("[data-feedback-toolbar]")||me.closest("[data-design-placement]")||me.closest("[data-annotation-popup]"))return;const ve=Xy(me);let Qe=!1;if(ve)for(const bt of At.current)try{const tt=document.querySelector(bt);if(tt&&(tt===ve||ve.contains(tt))){Qe=!0;break}}catch{}const Ge=!!(te.shiftKey||te.metaKey||te.ctrlKey);if(ve&&!Qe){te.preventDefault(),te.stopPropagation();const bt=u6(ve),tt=[...b,bt],Lt=[...t.originalOrder,bt.id];n({...t,sections:tt,originalOrder:Lt});const Ht=new Set([bt.id]);j(Ht),(Re=pt.current)==null||Re.call(pt,Ht,Ge),I(null);const dt=te.clientX,Pe=te.clientY,jt={x:bt.currentRect.x,y:bt.currentRect.y};bt.originalRect;let Mt=!1,_t=0,en=0;re.current="move";const ct=xn=>{var rn;const Bn=xn.clientX-dt,Sn=xn.clientY-Pe;if(!Mt&&(Math.abs(Bn)>2||Math.abs(Sn)>2)&&(Mt=!0),!Mt)return;const ls={x:jt.x+Bn,y:jt.y+Sn,width:bt.currentRect.width,height:bt.currentRect.height},Yn=Fy(ls,tt,new Set([bt.id]),d);ge(Yn.guides);const Tn=Bn+Yn.dx,Cn=Sn+Yn.dy;_t=Tn,en=Cn;const $n=document.querySelector(`[data-rearrange-section="${bt.id}"]`);$n&&($n.style.transform=`translate(${Tn}px, ${Cn}px)`),Ae(new Map([[bt.id,{x:jt.x+Tn,y:jt.y+Cn,width:bt.currentRect.width,height:bt.currentRect.height}]])),(rn=qe.current)==null||rn.call(qe,Tn,Cn)},Bt=()=>{var Bn;window.removeEventListener("mousemove",ct),window.removeEventListener("mouseup",Bt),re.current=null,ge([]),Ae(new Map);const xn=document.querySelector(`[data-rearrange-section="${bt.id}"]`);xn&&(xn.style.transform=""),Mt&&n({...t,sections:tt.map(Sn=>Sn.id===bt.id?{...Sn,currentRect:{...Sn.currentRect,x:Math.max(0,jt.x+_t),y:Math.max(0,jt.y+en)}}:Sn),originalOrder:Lt}),(Bn=Yt.current)==null||Bn.call(Yt,_t,en,Mt)};window.addEventListener("mousemove",ct),window.addEventListener("mouseup",Bt)}else if(Qe&&ve){te.preventDefault();for(const bt of b)try{const tt=document.querySelector(bt.selector);if(tt&&tt===ve){const Lt=new Set([bt.id]);j(Lt),(vt=pt.current)==null||vt.call(pt,Lt,Ge);return}}catch{}Ge||(j(new Set),(Ve=pt.current)==null||Ve.call(pt,new Set,!1))}else Ge||(j(new Set),($t=pt.current)==null||$t.call(pt,new Set,!1))};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[b,t,n]),y.useEffect(()=>{const H=te=>{const me=te.target;if(!(me.tagName==="INPUT"||me.tagName==="TEXTAREA"||me.isContentEditable)){if((te.key==="Backspace"||te.key==="Delete")&&S.size>0){te.preventDefault();const ve=new Set(S);$e(Qe=>{const Ge=new Set(Qe);for(const Re of ve)Ge.add(Re);return Ge}),j(new Set),Ut(()=>{const Qe=w.current;n({...Qe,sections:Qe.sections.filter(Ge=>!ve.has(Ge.id)),originalOrder:Qe.originalOrder.filter(Ge=>!ve.has(Ge))}),$e(Ge=>{const Re=new Set(Ge);for(const vt of ve)Re.delete(vt);return Re})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(te.key)&&S.size>0){te.preventDefault();const ve=te.shiftKey?20:1,Qe=te.key==="ArrowLeft"?-ve:te.key==="ArrowRight"?ve:0,Ge=te.key==="ArrowUp"?-ve:te.key==="ArrowDown"?ve:0;n({...t,sections:b.map(Re=>S.has(Re.id)?{...Re,currentRect:{...Re.currentRect,x:Math.max(0,Re.currentRect.x+Qe),y:Math.max(0,Re.currentRect.y+Ge)}}:Re)});return}te.key==="Escape"&&S.size>0&&j(new Set)}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[S,b,t,n]);const Y=y.useCallback((H,te)=>{var dt;if(H.button!==0)return;const me=H.target;if(me.closest(`.${De.handle}`)||me.closest(`.${De.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let ve;H.shiftKey||H.metaKey||H.ctrlKey?(ve=new Set(S),ve.has(te)?ve.delete(te):ve.add(te)):S.has(te)?ve=new Set(S):ve=new Set([te]),j(ve),(ve.size!==S.size||[...ve].some(Pe=>!S.has(Pe)))&&((dt=pt.current)==null||dt.call(pt,ve,!!(H.shiftKey||H.metaKey||H.ctrlKey)));const Ge=H.clientX,Re=H.clientY,vt=new Map;for(const Pe of b)ve.has(Pe.id)&&vt.set(Pe.id,{x:Pe.currentRect.x,y:Pe.currentRect.y});re.current="move";let Ve=!1,$t=0,bt=0;const tt=new Map;for(const Pe of b)if(ve.has(Pe.id)){const jt=document.querySelector(`[data-rearrange-section="${Pe.id}"]`);tt.set(Pe.id,{outlineEl:jt,curW:Pe.currentRect.width,curH:Pe.currentRect.height})}const Lt=Pe=>{var Yn;const jt=Pe.clientX-Ge,Mt=Pe.clientY-Re;if(jt===0&&Mt===0)return;Ve=!0;let _t=1/0,en=1/0,ct=-1/0,Bt=-1/0;for(const[Tn,{curW:Cn,curH:$n}]of tt){const rn=vt.get(Tn);if(!rn)continue;const En=rn.x+jt,nt=rn.y+Mt;_t=Math.min(_t,En),en=Math.min(en,nt),ct=Math.max(ct,En+Cn),Bt=Math.max(Bt,nt+$n)}const xn=Fy({x:_t,y:en,width:ct-_t,height:Bt-en},b,ve,d),Bn=jt+xn.dx,Sn=Mt+xn.dy;$t=Bn,bt=Sn,ge(xn.guides);for(const[,{outlineEl:Tn}]of tt)Tn&&(Tn.style.transform=`translate(${Bn}px, ${Sn}px)`);const ls=new Map;for(const[Tn,{curW:Cn,curH:$n}]of tt){const rn=vt.get(Tn);if(rn){const En={x:Math.max(0,rn.x+Bn),y:Math.max(0,rn.y+Sn),width:Cn,height:$n};ls.set(Tn,En)}}Ae(ls),(Yn=qe.current)==null||Yn.call(qe,Bn,Sn)},Ht=Pe=>{var jt,Mt;window.removeEventListener("mousemove",Lt),window.removeEventListener("mouseup",Ht),re.current=null,ge([]),Ae(new Map);for(const[,{outlineEl:_t}]of tt)_t&&(_t.style.transform="");if(Ve){const _t=Pe.clientX-Ge,en=Pe.clientY-Re;if(Math.abs(_t)<5&&Math.abs(en)<5)n({...t,sections:b.map(ct=>{const Bt=vt.get(ct.id);return Bt?{...ct,currentRect:{...ct.currentRect,x:Bt.x,y:Bt.y}}:ct})});else{n({...t,sections:b.map(ct=>{const Bt=vt.get(ct.id);return Bt?{...ct,currentRect:{...ct.currentRect,x:Math.max(0,Bt.x+$t),y:Math.max(0,Bt.y+bt)}}:ct})}),(jt=Yt.current)==null||jt.call(Yt,$t,bt,!0);return}}(Mt=Yt.current)==null||Mt.call(Yt,0,0,!1)};window.addEventListener("mousemove",Lt),window.addEventListener("mouseup",Ht)},[S,b,t,n]),je=y.useCallback((H,te,me)=>{H.preventDefault(),H.stopPropagation();const ve=b.find(Lt=>Lt.id===te);if(!ve)return;j(new Set([te])),re.current="resize";const Qe=H.clientX,Ge=H.clientY,Re={...ve.currentRect};ve.originalRect;const vt=Re.width/Re.height;let Ve={...Re};const $t=document.querySelector(`[data-rearrange-section="${te}"]`),bt=Lt=>{const Ht=Lt.clientX-Qe,dt=Lt.clientY-Ge;let Pe=Re.x,jt=Re.y,Mt=Re.width,_t=Re.height;if(me.includes("e")&&(Mt=Math.max(Ju,Re.width+Ht)),me.includes("w")&&(Mt=Math.max(Ju,Re.width-Ht),Pe=Re.x+Re.width-Mt),me.includes("s")&&(_t=Math.max(Ju,Re.height+dt)),me.includes("n")&&(_t=Math.max(Ju,Re.height-dt),jt=Re.y+Re.height-_t),Lt.shiftKey)if(me.length===2){const ct=Math.abs(Mt-Re.width),Bt=Math.abs(_t-Re.height);ct>Bt?_t=Mt/vt:Mt=_t*vt,me.includes("w")&&(Pe=Re.x+Re.width-Mt),me.includes("n")&&(jt=Re.y+Re.height-_t)}else me==="e"||me==="w"?_t=Mt/vt:Mt=_t*vt,me==="w"&&(Pe=Re.x+Re.width-Mt),me==="n"&&(jt=Re.y+Re.height-_t);Ve={x:Pe,y:jt,width:Mt,height:_t},$t&&($t.style.left=`${Pe}px`,$t.style.top=`${jt-B}px`,$t.style.width=`${Mt}px`,$t.style.height=`${_t}px`),F({x:Lt.clientX+12,y:Lt.clientY+12,text:`${Math.round(Mt)} × ${Math.round(_t)}`}),Ae(new Map([[te,Ve]]))},tt=()=>{window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",tt),F(null),re.current=null,Ae(new Map),n({...t,sections:b.map(Lt=>Lt.id===te?{...Lt,currentRect:Ve}:Lt)})};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",tt)},[b,t,n,B]),We=y.useCallback(H=>{$e(te=>{const me=new Set(te);return me.add(H),me}),j(te=>{const me=new Set(te);return me.delete(H),me}),Ut(()=>{const te=w.current;n({...te,sections:te.sections.filter(me=>me.id!==H),originalOrder:te.originalOrder.filter(me=>me!==H)}),$e(me=>{const ve=new Set(me);return ve.delete(H),ve})},180)},[n]),Ue=H=>{const te=H.originalRect,me=H.currentRect;return Math.abs(te.x-me.x)>1||Math.abs(te.y-me.y)>1||Math.abs(te.width-me.width)>1||Math.abs(te.height-me.height)>1},it=H=>{const te=H.originalRect,me=H.currentRect;return Math.abs(te.x-me.x)>1||Math.abs(te.y-me.y)>1},Ne=H=>{const te=H.originalRect,me=H.currentRect;return Math.abs(te.width-me.width)>1||Math.abs(te.height-me.height)>1};for(const H of b)Ee.current.has(H.id)||(it(H)?Ee.current.set(H.id,"move"):Ne(H)&&Ee.current.set(H.id,"resize"));for(const H of Ee.current.keys())b.some(te=>te.id===H)||Ee.current.delete(H);const st=b.filter(H=>{try{if(ke.has(H.id)||S.has(H.id))return!0;const te=document.querySelector(H.selector);if(!te)return!1;const me=te.getBoundingClientRect(),ve=H.originalRect;return Math.abs(me.width-ve.width)+Math.abs(me.height-ve.height)<200}catch{return!1}}),at=st.filter(H=>Ue(H)),yt=st.filter(H=>!Ue(H)),xt=new Set(at.map(H=>H.id));for(const H of de.current)xt.has(H)||de.current.delete(H);const ot=[...xt].sort().join(",");for(const H of at)gt.current.set(H.id,{currentRect:H.currentRect,originalRect:H.originalRect,isFixed:H.isFixed});return y.useEffect(()=>{const H=zt.current;zt.current=xt;const te=new Map;for(const me of H)if(!xt.has(me)){if(!b.some(Qe=>Qe.id===me))continue;const ve=gt.current.get(me);ve&&(te.set(me,{orig:ve.originalRect,target:ve.currentRect,isFixed:ve.isFixed}),gt.current.delete(me))}if(te.size>0){ft(ve=>{const Qe=new Map(ve);for(const[Ge,Re]of te)Qe.set(Ge,Re);return Qe});const me=Ut(()=>{ft(ve=>{const Qe=new Map(ve);for(const Ge of te.keys())Qe.delete(Ge);return Qe})},250);return()=>clearTimeout(me)}},[ot,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${De.rearrangeOverlay} ${i?"":De.light} ${a?De.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ue&&l.jsx("div",{className:De.hoverHighlight,style:{left:ue.x,top:ue.y,width:ue.w,height:ue.h}}),yt.map(H=>{const te=H.currentRect,me=H.isFixed?te.y:te.y-B,ve=Vy,Qe=S.has(H.id);return l.jsxs("div",{"data-rearrange-section":H.id,className:`${De.sectionOutline} ${Qe?De.selected:""} ${k||a||ke.has(H.id)?De.exiting:""}`,style:{left:te.x,top:me,width:te.width,height:te.height,borderColor:ve.border,backgroundColor:ve.bg,...Kt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ge=>Y(Ge,H.id),onDoubleClick:()=>J(H.id),children:[l.jsx("span",{className:De.sectionLabel,style:{backgroundColor:ve.pill},children:H.label}),l.jsx("span",{className:`${De.sectionAnnotation} ${H.note?De.annotationVisible:""}`,children:(H.note&&Z.current.set(H.id,H.note),H.note||Z.current.get(H.id)||"")}),l.jsxs("span",{className:De.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:De.deleteButton,onMouseDown:Ge=>Ge.stopPropagation(),onClick:()=>We(H.id),children:"✕"}),Yy.map(Ge=>l.jsx("div",{className:`${De.handle} ${De[`handle${Ge.charAt(0).toUpperCase()}${Ge.slice(1)}`]}`,onMouseDown:Re=>je(Re,H.id,Ge)},Ge))]},H.id)}),at.map(H=>{const te=H.currentRect,me=H.isFixed?te.y:te.y-B,ve=S.has(H.id),Qe=it(H),Ge=Ne(H);if(u&&!ve)return null;const vt=!de.current.has(H.id);return vt&&de.current.add(H.id),l.jsxs("div",{"data-rearrange-section":H.id,className:`${De.ghostOutline} ${ve?De.selected:""} ${k||a||ke.has(H.id)?De.exiting:""}`,style:{left:te.x,top:me,width:te.width,height:te.height,...Kt?{}:{opacity:0,animation:"none",transition:"none"},...vt?{}:{animation:"none"}},onMouseDown:Ve=>Y(Ve,H.id),onDoubleClick:()=>J(H.id),children:[l.jsx("span",{className:De.sectionLabel,style:{backgroundColor:Vy.pill},children:H.label}),l.jsx("span",{className:`${De.sectionAnnotation} ${H.note?De.annotationVisible:""}`,children:(H.note&&Z.current.set(H.id,H.note),H.note||Z.current.get(H.id)||"")}),l.jsxs("span",{className:De.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:De.deleteButton,onMouseDown:Ve=>Ve.stopPropagation(),onClick:()=>We(H.id),children:"✕"}),Yy.map(Ve=>l.jsx("div",{className:`${De.handle} ${De[`handle${Ve.charAt(0).toUpperCase()}${Ve.slice(1)}`]}`,onMouseDown:$t=>je($t,H.id,Ve)},Ve)),l.jsx("span",{className:De.ghostBadge,children:(()=>{const Ve=Ee.current.get(H.id);if(Qe&&Ge){const[$t,bt]=Ve==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",$t," ",l.jsxs("span",{className:De.ghostBadgeExtra,children:["& ",bt]})]})}return`Suggested ${Ge?"Resize":"Move"}`})()})]},H.id)})]}),!u&&(()=>{const H=[];for(const te of at){const me=Oe.get(te.id);H.push({id:te.id,orig:te.originalRect,target:me||te.currentRect,isFixed:te.isFixed,isSelected:S.has(te.id),isExiting:ke.has(te.id)})}for(const[te,me]of Oe)if(!H.some(ve=>ve.id===te)){const ve=b.find(Qe=>Qe.id===te);ve&&H.push({id:te,orig:ve.originalRect,target:me,isFixed:ve.isFixed,isSelected:S.has(te)})}for(const[te,me]of et)H.some(ve=>ve.id===te)||H.push({id:te,orig:me.orig,target:me.target,isFixed:me.isFixed,isSelected:!1,isExiting:!0});return H.length===0?null:l.jsxs("svg",{className:`${De.connectorSvg} ${k||a?De.connectorExiting:""}`,children:[H.map(({id:te,orig:me,target:ve,isFixed:Qe,isSelected:Ge,isExiting:Re})=>{const vt=me.x+me.width/2,Ve=(Qe?me.y:me.y-B)+me.height/2,$t=ve.x+ve.width/2,bt=(Qe?ve.y:ve.y-B)+ve.height/2,tt=$t-vt,Lt=bt-Ve,Ht=Math.sqrt(tt*tt+Lt*Lt);if(Ht<2)return null;const dt=Math.min(1,Ht/40),Pe=Math.min(Ht*.3,60),jt=Ht>0?-Lt/Ht:0,Mt=Ht>0?tt/Ht:0,_t=(vt+$t)/2+jt*Pe,en=(Ve+bt)/2+Mt*Pe,ct=Oe.has(te),Bt=ct||Ge?1:.4,xn=ct||Ge?1:.5;return l.jsxs("g",{className:Re?De.connectorExiting:"",children:[l.jsx("path",{className:De.connectorLine,d:`M ${vt} ${Ve} Q ${_t} ${en} ${$t} ${bt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Bt*dt}),l.jsx("circle",{className:De.connectorDot,cx:vt,cy:Ve,r:4*dt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:xn*dt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:De.connectorDot,cx:$t,cy:bt,r:4*dt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:xn*dt,filter:"url(#connDotShadow)"})]},`conn-${te}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),D&&(()=>{var bt;const H=b.find(tt=>tt.id===D);if(!H)return null;const te=H.currentRect,me=H.isFixed?te.y:te.y-B,ve=te.x+te.width/2,Qe=me-8,Ge=me+te.height+8,Re=Qe>200,vt=Ge<window.innerHeight-100,Ve=Math.max(160,Math.min(window.innerWidth-160,ve));let $t;return Re?$t={left:Ve,bottom:window.innerHeight-Qe}:vt?$t={left:Ve,top:Ge}:$t={left:Ve,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:H.label,placeholder:"Add a note about this section",initialValue:(bt=H.note)!=null?bt:"",submitLabel:V.current?"Save":"Set",onSubmit:ie,onCancel:le,onDelete:V.current?()=>{ie("")}:void 0,isExiting:U,lightMode:!i,style:$t})})(),ne&&l.jsx("div",{className:De.sizeIndicator,style:{left:ne.x,top:ne.y},"data-feedback-toolbar":!0,children:ne.text}),K.map((H,te)=>l.jsx("div",{className:De.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:H.pos-B,width:"100vw",height:1}},`${H.axis}-${H.pos}-${te}`))]})}var Rm=new Set(["script","style","noscript","link","meta","br","hr"]);function h6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Rm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Nr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Rm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const _=h.getBoundingClientRect();_.height<10||_.width<10||n.push({label:Md(h),selector:Nr(h),top:_.top,bottom:_.bottom,left:_.left,right:_.right,area:_.width*_.height})}}}return n}function m6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function p6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Bm(t,n){const i=n?m6(n):h6(),a=p6(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const j=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(j&&S.bottom<=a.top+5){const M=Math.round(a.top-S.bottom);(!c||M<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(j&&S.top>=a.bottom-5){const M=Math.round(S.top-a.bottom);(!u||M<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.right<=a.left+5){const M=Math.round(a.left-S.right);(!d||M<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.left>=a.right-5){const M=Math.round(S.left-a.right);(!h||M<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}}const _=window.innerWidth,g=window.innerHeight,x=g6(t,_),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=_6(a,t,_,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function _6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const _=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(_){const g=[];t.left<_.left-2&&g.push("left"),t.right>_.right+2&&g.push("right"),t.top<_.top-2&&g.push("top"),t.bottom>_.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function g6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function nb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function sb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=nb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function y6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(nb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Gy=15;function qy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Gy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,_)=>p.rect.x-_.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,_)=>p+_.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,_)=>p+_,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Gy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,_)=>p.rect.y-_.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,_)=>p+_.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,_)=>p+_,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function x6(t){var d;if(t.length<2)return[];const n=qy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=qy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let _=null,g=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>g&&(_=x,g=b)}if(_){const x=_.labels.filter(w=>p.has(w)),b=x.join(", ");if(_.type!==h.type){const w=h.type==="row"?"y":"x",S=_.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${_.type} (${S}≈${_.sharedEdge}, ${_.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-_.sharedEdge)>20||Math.abs(h.avgGap-_.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-_.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${_.sharedEdge}`:"",j=Math.abs(h.avgGap-_.avgGap)>5?` gaps: ${h.avgGap}px → ${_.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${j}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const _=Math.round(p.currentRect.x/5)*5;((d=h[_])!=null?d:h[_]=[]).push(p.label)}for(const[p,_]of Object.entries(h))_.length>=2&&a.push(`**${_.join(", ")}**: shared left edge at x≈${p}`)}return a}function ob(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Rm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const _ of Array.from(p.children))a(_)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const _=getComputedStyle(h);if(_.maxWidth&&_.maxWidth!=="none"&&_.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Nr(h)}}}return{viewport:t,contentArea:null}}function b6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Nr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ib(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),_=t.x+t.width/2,g=Math.abs(_-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function ab(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function v6(t){const n=b6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Ky(t,n,i,a="standard"){var k,M,z,L;if(t.length===0)return"";const c=[...t].sort((D,W)=>Math.abs(D.y-W.y)<20?D.x-W.x:D.y-W.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((D,W)=>{var X;const U=((X=qi[D.type])==null?void 0:X.label)||D.type;u+=`${W+1}. **${U}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}),u;const d=ob(n);u+=ab(d),u+=`### Components
`,c.forEach((D,W)=>{var ke;const U=((ke=qi[D.type])==null?void 0:ke.label)||D.type,X={x:D.x,y:D.y,width:D.width,height:D.height};u+=`${W+1}. **${U}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`;const V=Bm(X),le=sb(V,{includeLeftRight:a==="detailed"||a==="forensic"});for(const $e of le)u+=`   - ${$e}
`;const ie=ib(X,d);ie&&(u+=`   - CSS: ${ie}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const D of c){const W=h.find(U=>Math.abs(U.y-D.y)<30);W?W.items.push(D):h.push({y:D.y,items:[D]})}if(h.sort((D,W)=>D.y-W.y),h.forEach((D,W)=>{D.items.sort((X,V)=>X.x-V.x);const U=D.items.map(X=>{var V;return((V=qi[X.type])==null?void 0:V.label)||X.type});if(D.items.length===1){const V=D.items[0].width>n.width*.8;u+=`- Row ${W+1} (y≈${Math.round(D.y)}): ${U[0]}${V?" — full width":""}
`}else u+=`- Row ${W+1} (y≈${Math.round(D.y)}): ${U.join(" | ")} — ${D.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let D=0;D<c.length-1;D++){const W=c[D],U=c[D+1],X=((k=qi[W.type])==null?void 0:k.label)||W.type,V=((M=qi[U.type])==null?void 0:M.label)||U.type,J=Math.round(U.y-(W.y+W.height)),le=Math.round(U.x-(W.x+W.width));Math.abs(W.y-U.y)<30?u+=`- ${X} → ${V}: \`${le}px\` horizontal gap
`:u+=`- ${X} → ${V}: \`${J}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let D=0;D<c.length;D++)for(let W=D+1;W<c.length;W++){const U=c[D],X=c[W],V=((z=qi[U.type])==null?void 0:z.label)||U.type,J=((L=qi[X.type])==null?void 0:L.label)||X.type,le=Math.round(X.y-(U.y+U.height)),ie=Math.round(X.x-(U.x+U.width));u+=`- ${V} ↔ ${J}: h=\`${ie}px\` v=\`${le}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((D,W)=>{var X;const U=((X=qi[D.type])==null?void 0:X.label)||D.type;u+=`${W}. ${U} at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(D=>D.type==="navigation"),_=c.some(D=>D.type==="hero"),g=c.some(D=>D.type==="sidebar"),x=c.some(D=>D.type==="footer"),b=c.filter(D=>D.type==="card"),w=c.filter(D=>D.type==="form"),S=c.filter(D=>D.type==="table"),j=c.filter(D=>D.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),_&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const D=c.find(W=>W.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(D.width)}px 1fr;\`
`}if(b.length>1){const D=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${D}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Qy(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=ob({width:d,height:h});n!=="compact"&&(u+=ab(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const _=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const w=g.originalRect,S=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const k=Bm(w,_("original")),M=Bm(S,_("current")),z=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${y6(k,{x:w.x,y:w.y},z)}
`;const L=b?{width:S.width,height:S.height}:void 0,D=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,W=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",X=sb(M,{includeLeftRight:n==="detailed"||n==="forensic"});if(X.length>0){u+=`  - Suggested position ${D}${W}: ${X[0]}
`;for(let J=1;J<X.length;J++)u+=`    ${X[J]}
`}else u+=`  - Suggested position ${D}${W}
`;const V=ib(S,p);V&&(u+=`  - CSS: ${V}
`)}const j=v6(g.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const k=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;k!==g.selector&&(u+=`  - Element: \`${k}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=x6(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Lm="feedback-annotations-",rb=7;function Td(t){return`${Lm}${t}`}function em(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Td(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-rb*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function lb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Td(t),JSON.stringify(n))}catch{}}function w6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-rb*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Lm)){const c=a.slice(Lm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));lb(t,a)}var fp="agentation-design-";function S6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${fp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function C6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${fp}${t}`,JSON.stringify(n))}catch{}}function k6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${fp}${t}`)}catch{}}var hp="agentation-rearrange-";function j6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):null}catch{return null}}function M6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function T6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-wireframe-";function E6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Zy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var cb="agentation-session-";function pp(t){return`${cb}${t}`}function A6(t){if(typeof window>"u")return null;try{return localStorage.getItem(pp(t))}catch{return null}}function tm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(pp(t),n)}catch{}}function D6(t){if(!(typeof window>"u"))try{localStorage.removeItem(pp(t))}catch{}}var ub=`${cb}toolbar-hidden`;function N6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(ub)==="1"}catch{return!1}}function R6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(ub,"1")}catch{}}async function nm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Jy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function rl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function e1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Qa(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var zn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},t1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),n1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],B6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function L6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=t1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...t1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...n1,...t.skipPatterns]:n1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:B6,filter:t==null?void 0:t.filter}}function O6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function z6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function $6(t,n){const i=O6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function I6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&$6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ll=null,P6=new WeakMap;function sm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function H6(){if(ll!==null)return ll;if(typeof document>"u")return!1;if(document.body&&sm(document.body))return ll=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&sm(i))return ll=!0,!0}if(document.body){for(const n of document.body.children)if(sm(n))return ll=!0,!0}return ll=!1,!1}var uc={map:P6};function U6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function V6(t){const n=U6(t);return n?t[n]:null}function br(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function Y6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===zn.HostComponent||n===zn.HostText||n===zn.HostHoistable||n===zn.HostSingleton||n===zn.Fragment||n===zn.Mode||n===zn.Profiler||n===zn.DehydratedFragment||n===zn.HostRoot||n===zn.HostPortal||n===zn.ScopeComponent||n===zn.OffscreenComponent||n===zn.LegacyHiddenComponent||n===zn.CacheComponent||n===zn.TracingMarkerComponent||n===zn.Throw||n===zn.ViewTransitionComponent||n===zn.ActivityComponent)return null;if(n===zn.ForwardRef){const u=a;if(u!=null&&u.render){const d=br(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:br(i)}if(n===zn.MemoComponent||n===zn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=br(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:br(i)}if(n===zn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===zn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===zn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?br(u._result):null}return n===zn.SuspenseComponent||n===zn.SuspenseListComponent?null:n===zn.IncompleteClassComponent||n===zn.IncompleteFunctionComponent||n===zn.FunctionComponent||n===zn.ClassComponent||n===zn.IndeterminateComponent?br(i):null}function W6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function F6(t,n){const i=L6(n),a=i.mode==="all";if(a){const p=uc.map.get(t);if(p!==void 0)return p}if(!H6()){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const c=i.mode==="smart"?z6(t):void 0,u=[];try{let p=V6(t),_=0;for(;p&&_<i.maxDepth&&u.length<i.maxComponents;){const g=Y6(p);g&&!W6(g)&&I6(g,_,i,c)&&u.push(g),p=p.return,_++}}catch{const p={path:null,components:[]};return a&&uc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&uc.map.set(t,h),h}var dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function X6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Tc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function G6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Tc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Tc(i._debugOwner)};i=i.return,a++}return null}function q6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Tc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Tc(n)}}}n=n.return,i++}return null}var nd=new Map;function K6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===dc.FunctionComponent||n===dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===dc.MemoComponent||n===dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function Q6(){const t=Iv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function Z6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function J6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function eC(t){const n=K6(t);if(!n)return null;if(nd.has(n))return nd.get(n);const i=Q6();if(!i)return nd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=Z6(d.stack);h&&(c={fileName:J6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Tc(t)||void 0})}}}finally{i.set(a)}return nd.set(n,c),c}function tC(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=eC(i);if(c)return c;i=i.return,a++}return null}function Om(t){const n=X6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=G6(n);if(i||(i=q6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=tC(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function nC(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function sC(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Om(i);if(c.found)return c;i=i.parentElement,a++}return Om(t)}var oC=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,iC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=oC}var Ye=iC,fc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function s1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var aC=`@keyframes styles-module__markerIn___x4G8D {
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
}`,rC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=aC}var Fs=rC;function o1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:_,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:j,onContextMenu:k}){const M=(h||p)&&!_,z=M&&x==="delete",L=t.isMultiSelect,D=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",W=c?Fs.exit:u?Fs.clearing:d?"":Fs.enter,U=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Fs.marker} ${L?Fs.multiSelect:""} ${W} ${z?Fs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:z?void 0:D,animationDelay:U},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:X=>{X.stopPropagation(),c||j(t)},onContextMenu:k?X=>{x==="delete"&&(X.preventDefault(),X.stopPropagation(),c||k(t))}:void 0,children:[M?z?l.jsx(qx,{size:L?18:16}):l.jsx(bS,{size:16}):l.jsx("span",{className:g!==null&&n>=g?Fs.renumber:void 0,children:n+1}),h&&!_&&l.jsxs("div",{className:`${Fs.markerTooltip} ${Fs.enter}`,style:b,children:[l.jsxs("span",{className:Fs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Fs.markerNote,children:t.comment})]})]})}function lC({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Fs.marker} ${Fs.pending} ${i?Fs.multiSelect:""} ${a?Fs.exit:Fs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(lS,{size:12})})}function i1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Fs.marker} ${n?Fs.fixed:""} ${Fs.hovered} ${i?Fs.multiSelect:""} ${Fs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(qx,{size:i?12:10})})}var cC=`.styles-module__switchContainer___Ka-AB {
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
}`,uC={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=cC}var om=uC,im=({className:t="",...n})=>l.jsxs("div",{className:`${om.switchContainer} ${t}`,children:[l.jsx("input",{className:om.switchInput,type:"checkbox",...n}),l.jsx("div",{className:om.switchThumb})]}),dC=`.styles-module__checkboxContainer___joqZk {
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
}`,fC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=dC}var sd=fC,hC=({className:t="",...n})=>l.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),mC=`.styles-module__container___w8eAF {
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
}`,pC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=mC}var a1=pC,r1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${a1.container} ${t}`,...u,children:[l.jsx(hC,{id:d,onChange:c,checked:a}),l.jsx("label",{className:a1.label,htmlFor:d,children:n}),i&&l.jsx(Mr,{content:i})]})},_C=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,gC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=_C}var Ct=gC;function yC({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:_,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Ct.settingsPanel} ${h?Ct.enter:Ct.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Ct.settingsPanelContainer,children:[l.jsxs("div",{className:`${Ct.settingsPage} ${_==="automations"?Ct.slideLeft:""}`,children:[l.jsxs("div",{className:Ct.settingsHeader,children:[l.jsx("a",{className:Ct.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Ct.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Ct.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Ct.themeIconWrapper,children:l.jsx("span",{className:Ct.themeIcon,children:i?l.jsx(yS,{size:20}):l.jsx(xS,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Output Detail",l.jsx(Mr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Ct.cycleButton,onClick:()=>{const S=(fc.findIndex(j=>j.value===t.outputDetail)+1)%fc.length;n({outputDetail:fc[S].value})},children:[l.jsx("span",{className:Ct.cycleButtonText,children:(b=fc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:Ct.cycleDots,children:fc.map(w=>l.jsx("span",{className:`${Ct.cycleDot} ${t.outputDetail===w.value?Ct.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop} ${c?"":Ct.settingsRowDisabled}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["React Components",l.jsx(Mr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(im,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Hide Until Restart",l.jsx(Mr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(im,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx("div",{className:`${Ct.settingsLabel} ${Ct.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Ct.colorOptions,children:vc.map(w=>l.jsx("button",{className:`${Ct.colorOption} ${t.annotationColorId===w.id?Ct.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx(r1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(r1,{className:Ct.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("button",{className:Ct.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Ct.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Ct.mcpNavIndicator} ${Ct[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Ct.settingsPage} ${Ct.automationsPage} ${_==="automations"?Ct.slideIn:""}`,children:[l.jsxs("button",{className:Ct.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(wS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["MCP Connection",l.jsx(Mr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Ct.mcpStatusDot} ${Ct[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Ct.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ct.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:`${Ct.settingsSection} ${Ct.settingsSectionGrow}`,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["Webhooks",l.jsx(Mr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Ct.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Ct.autoSendLabel} ${t.webhooksEnabled?Ct.active:""} ${t.webhookUrl?"":Ct.disabled}`,children:"Auto-Send"}),l.jsx(im,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Ct.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Ct.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function am(t,n="filtered"){const{name:i,path:a}=ml(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=F6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var l1=!1,rm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},oa=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],xC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...vc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${vc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${vc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};xC();function vr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function lm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function wr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=Om(t),i=n.found?n:sC(t);if(i.found&&i.source)return nC(i.source,"path")}function bC({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:_=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var Co,Vs,Bs,qs,zo,bo,xe;const[j,k]=y.useState(!1),[M,z]=y.useState([]),[L,D]=y.useState(!0),[W,U]=y.useState(()=>N6()),[X,V]=y.useState(!1),J=y.useRef(null);y.useEffect(()=>{const C=N=>{const R=J.current;R&&R.contains(N.target)&&N.stopPropagation()},E=["mousedown","click","pointerdown"];return E.forEach(N=>document.body.addEventListener(N,C)),()=>{E.forEach(N=>document.body.removeEventListener(N,C))}},[]);const[le,ie]=y.useState(!1),[ke,$e]=y.useState(!1),[Z,ue]=y.useState(null),[I,ne]=y.useState({x:0,y:0}),[F,K]=y.useState(null),[ge,B]=y.useState(!1),[ae,re]=y.useState("idle"),[de,Ee]=y.useState(!1),[Oe,Ae]=y.useState(!1),[et,ft]=y.useState(null),[zt,gt]=y.useState(null),[pt,qe]=y.useState([]),[Yt,Kt]=y.useState(null),[Ze,At]=y.useState(null),[Y,je]=y.useState(null),[We,Ue]=y.useState(null),[it,Ne]=y.useState([]),[st,at]=y.useState(0),[yt,xt]=y.useState(!1),[ot,H]=y.useState(!1),[te,me]=y.useState(!1),[ve,Qe]=y.useState(!1),[Ge,Re]=y.useState(!1),[vt,Ve]=y.useState("main"),[$t,bt]=y.useState(!1),[tt,Lt]=y.useState(!1),[Ht,dt]=y.useState(!1),[Pe,jt]=y.useState([]),[Mt,_t]=y.useState(null),en=y.useRef(!1),[ct,Bt]=y.useState(!1),[xn,Bn]=y.useState(!1),[Sn,ls]=y.useState(1),[Yn,Tn]=y.useState("new-page"),[Cn,$n]=y.useState(""),[rn,En]=y.useState(!1),[nt,ln]=y.useState(null),no=y.useRef(!1),Ao=y.useRef({rearrange:null,placements:[]}),cs=y.useRef({rearrange:null,placements:[]}),[Es,ei]=y.useState(0),[Cs,uo]=y.useState(0),[so,fo]=y.useState(0),[kn,ti]=y.useState(0),Is=y.useRef(new Set),As=y.useRef(new Set),us=y.useRef(null),Ho=y.useRef(),ho=tt&&j&&!Ht&&ct;y.useEffect(()=>{if(ho){Bn(!1);const C=ul(()=>{Bn(!0)});return()=>cancelAnimationFrame(C)}else Bn(!1)},[ho]);const Ds=y.useRef(new Map),Ps=y.useRef(new Map),An=y.useRef(),[os,jn]=y.useState(!1),[tn,Do]=y.useState([]),ds=y.useRef(tn);ds.current=tn;const[di,fi]=y.useState(null),No=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[ni,ys]=y.useState(!1),wo=y.useRef(null),[In,Xs]=y.useState([]),fs=y.useRef({cmd:!1,shift:!1}),hs=()=>{bt(!0)},zi=()=>{bt(!1)},Uo=()=>{ni||(wo.current=Ut(()=>ys(!0),850))},Qi=()=>{wo.current&&(clearTimeout(wo.current),wo.current=null),ys(!1),zi()};y.useEffect(()=>()=>{wo.current&&clearTimeout(wo.current)},[]);const[qt,$i]=y.useState(()=>{var C;try{const E=JSON.parse((C=localStorage.getItem("feedback-toolbar-settings"))!=null?C:"");return{...rm,...E,annotationColorId:vc.find(N=>N.id===E.annotationColorId)?E.annotationColorId:rm.annotationColorId}}catch{return rm}}),[Ln,Si]=y.useState(!0),[Ro,Pn]=y.useState(!1),oo=()=>{var C;(C=J.current)==null||C.classList.add(Ye.disableTransitions),Si(E=>!E),ul(()=>{var E;(E=J.current)==null||E.classList.remove(Ye.disableTransitions)})},Vo=!1,mo="off",[bn,So]=y.useState(x!=null?x:null),Yo=y.useRef(!1),[xs,Gs]=y.useState(g?"connecting":"disconnected"),[sn,Ns]=y.useState(null),[io,Bo]=y.useState(!1),[ms,po]=y.useState(null),Lo=y.useRef(!1),[Wo,Hs]=y.useState(new Set),[_o,si]=y.useState(new Set),[qn,dn]=y.useState(!1),[Fo,Wn]=y.useState(!1),[Rs,hi]=y.useState(!1),ao=y.useRef(null),ks=y.useRef(null),go=y.useRef(null),Oo=y.useRef(null),T=y.useRef(!1),G=y.useRef(0),fe=y.useRef(null),be=y.useRef(null),He=8,Ke=50,It=y.useRef(null),Vt=y.useRef(null),Dt=y.useRef(null),Fe=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(ve)Re(!0);else{bt(!1),Ve("main");const C=Ut(()=>Re(!1),0);return()=>clearTimeout(C)}},[ve]);const Qt=j&&L&&!tt;y.useEffect(()=>{if(Qt){$e(!1),ie(!0),Hs(new Set);const C=Ut(()=>{Hs(E=>{const N=new Set(E);return M.forEach(R=>N.add(R.id)),N})},350);return()=>clearTimeout(C)}else if(le){$e(!0);const C=Ut(()=>{ie(!1),$e(!1)},250);return()=>clearTimeout(C)}},[Qt]),y.useEffect(()=>{H(!0),at(window.scrollY);const C=em(Fe);z(C.filter(wr)),l1||(Pn(!0),l1=!0,Ut(()=>Pn(!1),750));try{const E=localStorage.getItem("feedback-toolbar-theme");E!==null&&Si(E==="dark")}catch{}try{const E=localStorage.getItem("feedback-toolbar-position");if(E){const N=JSON.parse(E);typeof N.x=="number"&&typeof N.y=="number"&&Ns(N)}}catch{}},[Fe]),y.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(qt))},[qt,ot]),y.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-theme",Ln?"dark":"light")},[Ln,ot]);const fn=y.useRef(!1);y.useEffect(()=>{const C=fn.current;fn.current=io,C&&!io&&sn&&ot&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(sn))},[io,sn,ot]),y.useEffect(()=>{if(!g||!ot||Yo.current)return;Yo.current=!0,Gs("connecting"),(async()=>{try{const E=A6(Fe),N=x||E;let R=!1;if(N)try{const P=await Jy(g,N);So(P.id),Gs("connected"),tm(Fe,P.id),R=!0;const oe=em(Fe),Ce=new Set(P.annotations.map(Xe=>Xe.id)),Le=oe.filter(Xe=>!Ce.has(Xe.id));if(Le.length>0){const ut=`${typeof window<"u"?window.location.origin:""}${Fe}`,Tt=(await Promise.allSettled(Le.map(lt=>rl(g,P.id,{...lt,sessionId:P.id,url:ut})))).map((lt,ht)=>lt.status==="fulfilled"?lt.value:(console.warn("[Agentation] Failed to sync annotation:",lt.reason),Le[ht])),Nt=[...P.annotations,...Tt];z(Nt.filter(wr)),cc(Fe,Nt.filter(wr),P.id)}else z(P.annotations.filter(wr)),cc(Fe,P.annotations.filter(wr),P.id)}catch(P){console.warn("[Agentation] Could not join session, creating new:",P),D6(Fe)}if(!R){const P=typeof window<"u"?window.location.href:"/",oe=await nm(g,P);So(oe.id),Gs("connected"),tm(Fe,oe.id),b==null||b(oe.id);const Ce=w6(),Le=typeof window<"u"?window.location.origin:"",Xe=[];for(const[ut,St]of Ce){const Tt=St.filter(ht=>!ht._syncedTo);if(Tt.length===0)continue;const Nt=`${Le}${ut}`,lt=ut===Fe;Xe.push((async()=>{try{const ht=lt?oe:await nm(g,Nt),bs=(await Promise.allSettled(Tt.map(wn=>rl(g,ht.id,{...wn,sessionId:ht.id,url:Nt})))).map((wn,Vn)=>wn.status==="fulfilled"?wn.value:(console.warn("[Agentation] Failed to sync annotation:",wn.reason),Tt[Vn])).filter(wr);if(cc(ut,bs,ht.id),lt){const wn=new Set(Tt.map(Vn=>Vn.id));z(Vn=>{const Xt=Vn.filter(Gt=>!wn.has(Gt.id));return[...bs,...Xt]})}}catch(ht){console.warn(`[Agentation] Failed to sync annotations for ${ut}:`,ht)}})())}await Promise.allSettled(Xe)}}catch(E){Gs("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",E)}})()},[g,x,ot,b,Fe]),y.useEffect(()=>{if(!g||!ot)return;const C=async()=>{try{(await fetch(`${g}/health`)).ok?Gs("connected"):Gs("disconnected")}catch{Gs("disconnected")}};C();const E=kS(C,1e4);return()=>clearInterval(E)},[g,ot]),y.useEffect(()=>{if(!g||!ot||!bn)return;const C=new EventSource(`${g}/sessions/${bn}/events`),E=["resolved","dismissed"],N=R=>{var P;try{const oe=JSON.parse(R.data);if(E.includes((P=oe.payload)==null?void 0:P.status)){const Ce=oe.payload.id,Le=oe.payload.kind;if(Le==="placement"){for(const[Xe,ut]of Ds.current)if(ut===Ce){Ds.current.delete(Xe),jt(St=>St.filter(Tt=>Tt.id!==Xe));break}}else if(Le==="rearrange"){for(const[Xe,ut]of Ps.current)if(ut===Ce){Ps.current.delete(Xe),ln(St=>{if(!St)return null;const Tt=St.sections.filter(Nt=>Nt.id!==Xe);return Tt.length===0?null:{...St,sections:Tt}});break}}else si(Xe=>new Set(Xe).add(Ce)),Ut(()=>{z(Xe=>Xe.filter(ut=>ut.id!==Ce)),si(Xe=>{const ut=new Set(Xe);return ut.delete(Ce),ut})},150)}}catch{}};return C.addEventListener("annotation.updated",N),()=>{C.removeEventListener("annotation.updated",N),C.close()}},[g,ot,bn]),y.useEffect(()=>{if(!g||!ot)return;const C=be.current==="disconnected",E=xs==="connected";be.current=xs,C&&E&&(async()=>{try{const R=em(Fe);if(R.length===0)return;const oe=`${typeof window<"u"?window.location.origin:""}${Fe}`;let Ce=bn,Le=[];if(Ce)try{Le=(await Jy(g,Ce)).annotations}catch{Ce=null}Ce||(Ce=(await nm(g,oe)).id,So(Ce),tm(Fe,Ce));const Xe=new Set(Le.map(St=>St.id)),ut=R.filter(St=>!Xe.has(St.id));if(ut.length>0){const Tt=(await Promise.allSettled(ut.map(ht=>rl(g,Ce,{...ht,sessionId:Ce,url:oe})))).map((ht,Kn)=>ht.status==="fulfilled"?ht.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ht.reason),ut[Kn])),lt=[...Le,...Tt].filter(wr);z(lt),cc(Fe,lt,Ce)}}catch(R){console.warn("[Agentation] Failed to sync on reconnect:",R)}})()},[xs,g,ot,bn,Fe]);const Hn=y.useCallback(()=>{X||(V(!0),Qe(!1),k(!1),Ut(()=>{R6(!0),U(!0),V(!1)},400))},[X]);y.useEffect(()=>{if(!i||!ot||!t||t.length===0||M.length>0)return;const C=[];return C.push(Ut(()=>{k(!0)},n-200)),t.forEach((E,N)=>{const R=n+N*300;C.push(Ut(()=>{const P=document.querySelector(E.selector);if(!P)return;const oe=P.getBoundingClientRect(),{name:Ce,path:Le}=ml(P),Xe={id:`demo-${Date.now()}-${N}`,x:(oe.left+oe.width/2)/window.innerWidth*100,y:oe.top+oe.height/2+window.scrollY,comment:E.comment,element:Ce,elementPath:Le,timestamp:Date.now(),selectedText:E.selectedText,boundingBox:{x:oe.left,y:oe.top+window.scrollY,width:oe.width,height:oe.height},nearbyText:rc(P),cssClasses:lc(P)};z(ut=>[...ut,Xe])},R))}),()=>{C.forEach(clearTimeout)}},[i,ot,t,n]),y.useEffect(()=>{const C=()=>{at(window.scrollY),xt(!0),Dt.current&&clearTimeout(Dt.current),Dt.current=Ut(()=>{xt(!1)},150)};return window.addEventListener("scroll",C,{passive:!0}),()=>{window.removeEventListener("scroll",C),Dt.current&&clearTimeout(Dt.current)}},[]),y.useEffect(()=>{ot&&M.length>0?bn?cc(Fe,M,bn):lb(Fe,M):ot&&M.length===0&&localStorage.removeItem(Td(Fe))},[M,Fe,ot,bn]),y.useEffect(()=>{if(ot&&!en.current){en.current=!0;const C=S6(Fe);C.length>0&&jt(C)}},[ot,Fe]),y.useEffect(()=>{ot&&en.current&&!ct&&(Pe.length>0?C6(Fe,Pe):k6(Fe))},[Pe,Fe,ot,ct]),y.useEffect(()=>{if(ot&&!no.current){no.current=!0;const C=j6(Fe);if(C){const E={...C,sections:C.sections.map(N=>{var R;return{...N,currentRect:(R=N.currentRect)!=null?R:{...N.originalRect}}})};ln(E)}}},[ot,Fe]),y.useEffect(()=>{ot&&no.current&&!ct&&(nt?M6(Fe,nt):T6(Fe))},[nt,Fe,ot,ct]);const Un=y.useRef(!1);y.useEffect(()=>{if(ot&&!Un.current){Un.current=!0;const C=E6(Fe);C&&(cs.current={rearrange:C.rearrange,placements:C.placements||[]},C.purpose&&$n(C.purpose))}},[ot,Fe]),y.useEffect(()=>{var E,N,R,P,oe;if(!ot||!Un.current)return;const C=cs.current;ct?((N=(E=nt==null?void 0:nt.sections)==null?void 0:E.length)!=null?N:0)>0||Pe.length>0||Cn?Zy(Fe,{rearrange:nt,placements:Pe,purpose:Cn}):td(Fe):((oe=(P=(R=C.rearrange)==null?void 0:R.sections)==null?void 0:P.length)!=null?oe:0)>0||C.placements.length>0||Cn?Zy(Fe,{rearrange:C.rearrange,placements:C.placements,purpose:Cn}):td(Fe)},[nt,Pe,Cn,ct,Fe,ot]),y.useEffect(()=>{tt&&!nt&&ln({sections:[],originalOrder:[],detectedAt:Date.now()})},[tt,nt]),y.useEffect(()=>{if(!g||!bn)return;const C=Ds.current,E=new Set(Pe.map(N=>N.id));for(const N of Pe){if(C.has(N.id))continue;C.set(N.id,"");const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Fe;rl(g,bn,{id:N.id,x:N.x/window.innerWidth*100,y:N.y,comment:`Place ${N.type} at (${Math.round(N.x)}, ${Math.round(N.y)}), ${N.width}×${N.height}px${N.text?` — "${N.text}"`:""}`,element:`[design:${N.type}]`,elementPath:"[placement]",timestamp:N.timestamp,url:R,intent:"change",severity:"important",kind:"placement",placement:{componentType:N.type,width:N.width,height:N.height,scrollY:N.scrollY,text:N.text}}).then(P=>{C.has(N.id)&&C.set(N.id,P.id)}).catch(P=>{console.warn("[Agentation] Failed to sync placement annotation:",P),C.delete(N.id)})}for(const[N,R]of C)E.has(N)||(C.delete(N),R&&Qa(g,R).catch(()=>{}))},[Pe,g,bn,Fe]),y.useEffect(()=>{if(!(!g||!bn))return An.current&&clearTimeout(An.current),An.current=Ut(()=>{const C=Ps.current;if(!nt||nt.sections.length===0){for(const[,R]of C)R&&Qa(g,R).catch(()=>{});C.clear();return}const E=new Set(nt.sections.map(R=>R.id)),N=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Fe;for(const R of nt.sections){const P=R.originalRect,oe=R.currentRect;if(!(Math.abs(P.x-oe.x)>1||Math.abs(P.y-oe.y)>1||Math.abs(P.width-oe.width)>1||Math.abs(P.height-oe.height)>1)){const Xe=C.get(R.id);Xe&&(C.delete(R.id),Qa(g,Xe).catch(()=>{}));continue}const Le=C.get(R.id);Le?e1(g,Le,{comment:`Move ${R.label} section (${R.tagName}) — from (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)} to (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)}`}).catch(Xe=>{console.warn("[Agentation] Failed to update rearrange annotation:",Xe)}):(C.set(R.id,""),rl(g,bn,{id:R.id,x:oe.x/window.innerWidth*100,y:oe.y,comment:`Move ${R.label} section (${R.tagName}) — from (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)} to (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)}`,element:R.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:N,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:R.selector,label:R.label,tagName:R.tagName,originalRect:P,currentRect:oe}}).then(Xe=>{C.has(R.id)&&C.set(R.id,Xe.id)}).catch(Xe=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Xe),C.delete(R.id)}))}for(const[R,P]of C)E.has(R)||(C.delete(R),P&&Qa(g,P).catch(()=>{}))},300),()=>{An.current&&clearTimeout(An.current)}},[nt,g,bn,Fe]);const pn=y.useRef(new Map);y.useLayoutEffect(()=>{var N;const C=(N=nt==null?void 0:nt.sections)!=null?N:[],E=new Set;if((tt||Ht)&&j)for(const R of C){E.add(R.id);try{const P=document.querySelector(R.selector);if(!P)continue;if(!pn.current.has(R.id)){const oe={transform:P.style.transform,transformOrigin:P.style.transformOrigin,opacity:P.style.opacity,position:P.style.position,zIndex:P.style.zIndex,display:P.style.display},Ce=[];let Le=P.parentElement;for(;Le&&Le!==document.body;){const ut=getComputedStyle(Le);(ut.overflow!=="visible"||ut.overflowX!=="visible"||ut.overflowY!=="visible")&&(Ce.push({el:Le,overflow:Le.style.overflow}),Le.style.overflow="visible"),Le=Le.parentElement}getComputedStyle(P).display==="inline"&&(P.style.display="inline-block"),pn.current.set(R.id,{el:P,origStyles:oe,ancestors:Ce}),P.style.transformOrigin="top left",P.style.zIndex="9999"}}catch{}}for(const[R,P]of pn.current)if(!E.has(R)){const{el:oe,origStyles:Ce,ancestors:Le}=P;oe.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",oe.style.transform=Ce.transform,oe.style.transformOrigin=Ce.transformOrigin,oe.style.opacity=Ce.opacity,oe.style.position=Ce.position,oe.style.zIndex=Ce.zIndex,pn.current.delete(R),Ut(()=>{oe.style.transition="",oe.style.display=Ce.display;for(const Xe of Le)Xe.el.style.overflow=Xe.overflow},450)}},[nt,tt,Ht,j]),y.useEffect(()=>()=>{for(const[,C]of pn.current){const{el:E,origStyles:N,ancestors:R}=C;E.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",E.style.transform=N.transform,E.style.transformOrigin=N.transformOrigin,E.style.opacity=N.opacity,E.style.position=N.position,E.style.zIndex=N.zIndex,Ut(()=>{E.style.transition="",E.style.display=N.display;for(const P of R)P.el.style.overflow=P.overflow},450)}pn.current.clear()},[]);const js=y.useCallback(()=>{dt(!0),Lt(!1),_t(null),clearTimeout(Ho.current),Ho.current=Ut(()=>{dt(!1)},300)},[]),yo=y.useCallback(()=>{tt&&(dt(!0),Lt(!1),_t(null),clearTimeout(Ho.current),Ho.current=Ut(()=>{dt(!1)},300)),k(!1)},[tt]),mi=y.useCallback(()=>{te||(MS(),me(!0))},[te]),Xo=y.useCallback(()=>{te&&($y(),me(!1))},[te]),Zi=y.useCallback(()=>{te?Xo():mi()},[te,mi,Xo]),ua=y.useCallback(()=>{if(In.length===0)return;const C=In[0],E=C.element,N=In.length>1,R=In.map(P=>P.element.getBoundingClientRect());if(N){const P={left:Math.min(...R.map(ht=>ht.left)),top:Math.min(...R.map(ht=>ht.top)),right:Math.max(...R.map(ht=>ht.right)),bottom:Math.max(...R.map(ht=>ht.bottom))},oe=In.slice(0,5).map(ht=>ht.name).join(", "),Ce=In.length>5?` +${In.length-5} more`:"",Le=R.map(ht=>({x:ht.left,y:ht.top+window.scrollY,width:ht.width,height:ht.height})),ut=In[In.length-1].element,St=R[R.length-1],Tt=St.left+St.width/2,Nt=St.top+St.height/2,lt=lm(ut);K({x:Tt/window.innerWidth*100,y:lt?Nt:Nt+window.scrollY,clientY:Nt,element:`${In.length} elements: ${oe}${Ce}`,elementPath:"multi-select",boundingBox:{x:P.left,y:P.top+window.scrollY,width:P.right-P.left,height:P.bottom-P.top},isMultiSelect:!0,isFixed:lt,elementBoundingBoxes:Le,multiSelectElements:In.map(ht=>ht.element),targetElement:ut,fullPath:Zu(E),accessibility:Qu(E),computedStyles:Ku(E),computedStylesObj:qu(E),nearbyElements:Gu(E),cssClasses:lc(E),nearbyText:rc(E),sourceFile:od(E)})}else{const P=R[0],oe=lm(E);K({x:P.left/window.innerWidth*100,y:oe?P.top:P.top+window.scrollY,clientY:P.top,element:C.name,elementPath:C.path,boundingBox:{x:P.left,y:oe?P.top:P.top+window.scrollY,width:P.width,height:P.height},isFixed:oe,fullPath:Zu(E),accessibility:Qu(E),computedStyles:Ku(E),computedStylesObj:qu(E),nearbyElements:Gu(E),cssClasses:lc(E),nearbyText:rc(E),reactComponents:C.reactComponents,sourceFile:od(E)})}Xs([]),ue(null)},[In]);y.useEffect(()=>{j||(K(null),je(null),Ue(null),Ne([]),ue(null),Qe(!1),Xs([]),fs.current={cmd:!1,shift:!1},te&&Xo())},[j,te,Xo]),y.useEffect(()=>()=>{$y()},[]),y.useEffect(()=>{if(!j)return;const C=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),E=":not([data-agentation-root]):not([data-agentation-root] *)",N=document.createElement("style");return N.id="feedback-cursor-styles",N.textContent=`
      body ${E} {
        cursor: crosshair !important;
      }

      body :is(${C})${E} {
        cursor: text !important;
      }
    `,document.head.appendChild(N),()=>{const R=document.getElementById("feedback-cursor-styles");R&&R.remove()}},[j]),y.useEffect(()=>{if(di!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[di,j]),y.useEffect(()=>{if(!j||F||os||tt)return;const C=E=>{const N=E.composedPath()[0]||E.target;if(qo(N,"[data-feedback-toolbar]")){ue(null);return}const R=vr(E.clientX,E.clientY);if(!R||qo(R,"[data-feedback-toolbar]")){ue(null);return}const{name:P,elementName:oe,path:Ce,reactComponents:Le}=am(R,mo),Xe=R.getBoundingClientRect();ue({element:P,elementName:oe,elementPath:Ce,rect:Xe,reactComponents:Le}),ne({x:E.clientX,y:E.clientY})};return document.addEventListener("mousemove",C),()=>document.removeEventListener("mousemove",C)},[j,F,os,tt,mo,tn]);const Ii=y.useCallback(C=>{var E;if(je(C),ft(null),gt(null),qe([]),(E=C.elementBoundingBoxes)!=null&&E.length){const N=[];for(const R of C.elementBoundingBoxes){const P=R.x+R.width/2,oe=R.y+R.height/2-window.scrollY,Ce=vr(P,oe);Ce&&N.push(Ce)}Ne(N),Ue(null)}else if(C.boundingBox){const N=C.boundingBox,R=N.x+N.width/2,P=C.isFixed?N.y+N.height/2:N.y+N.height/2-window.scrollY,oe=vr(R,P);if(oe){const Ce=oe.getBoundingClientRect(),Le=Ce.width/N.width,Xe=Ce.height/N.height;Le<.5||Xe<.5?Ue(null):Ue(oe)}else Ue(null);Ne([])}else Ue(null),Ne([])},[]);y.useEffect(()=>{if(!j||os||tt)return;const C=E=>{var Qn,bs;if(T.current){T.current=!1;return}const N=E.composedPath()[0]||E.target;if(qo(N,"[data-feedback-toolbar]")||qo(N,"[data-annotation-popup]")||qo(N,"[data-annotation-marker]"))return;if(E.metaKey&&E.shiftKey&&!F&&!Y){E.preventDefault(),E.stopPropagation();const wn=vr(E.clientX,E.clientY);if(!wn)return;const Vn=wn.getBoundingClientRect(),{name:Xt,path:Gt,reactComponents:vs}=am(wn,mo),Mn=In.findIndex(ro=>ro.element===wn);Mn>=0?Xs(ro=>ro.filter(($o,is)=>is!==Mn)):Xs(ro=>[...ro,{element:wn,rect:Vn,name:Xt,path:Gt,reactComponents:vs!=null?vs:void 0}]);return}const R=qo(N,"button, a, input, select, textarea, [role='button'], [onclick]");if(qt.blockInteractions&&R&&(E.preventDefault(),E.stopPropagation()),F){if(R&&!qt.blockInteractions)return;E.preventDefault(),(Qn=It.current)==null||Qn.shake();return}if(Y){if(R&&!qt.blockInteractions)return;E.preventDefault(),(bs=Vt.current)==null||bs.shake();return}E.preventDefault();const P=vr(E.clientX,E.clientY);if(!P)return;const{name:oe,path:Ce,reactComponents:Le}=am(P,mo),Xe=P.getBoundingClientRect(),ut=E.clientX/window.innerWidth*100,St=lm(P),Tt=St?E.clientY:E.clientY+window.scrollY,Nt=window.getSelection();let lt;Nt&&Nt.toString().trim().length>0&&(lt=Nt.toString().trim().slice(0,500));const ht=qu(P),Kn=Ku(P);K({x:ut,y:Tt,clientY:E.clientY,element:oe,elementPath:Ce,selectedText:lt,boundingBox:{x:Xe.left,y:St?Xe.top:Xe.top+window.scrollY,width:Xe.width,height:Xe.height},nearbyText:rc(P),cssClasses:lc(P),isFixed:St,fullPath:Zu(P),accessibility:Qu(P),computedStyles:Kn,computedStylesObj:ht,nearbyElements:Gu(P),reactComponents:Le!=null?Le:void 0,sourceFile:od(P),targetElement:P}),ue(null)};return document.addEventListener("click",C,!0),()=>document.removeEventListener("click",C,!0)},[j,os,tt,F,Y,qt.blockInteractions,mo,In]),y.useEffect(()=>{if(!j)return;const C=R=>{R.key==="Meta"&&(fs.current.cmd=!0),R.key==="Shift"&&(fs.current.shift=!0)},E=R=>{const P=fs.current.cmd&&fs.current.shift;R.key==="Meta"&&(fs.current.cmd=!1),R.key==="Shift"&&(fs.current.shift=!1);const oe=fs.current.cmd&&fs.current.shift;P&&!oe&&In.length>0&&ua()},N=()=>{fs.current={cmd:!1,shift:!1},Xs([])};return document.addEventListener("keydown",C),document.addEventListener("keyup",E),window.addEventListener("blur",N),()=>{document.removeEventListener("keydown",C),document.removeEventListener("keyup",E),window.removeEventListener("blur",N)}},[j,In,ua]),y.useEffect(()=>{if(!j||F||os||tt)return;const C=E=>{const N=E.composedPath()[0]||E.target;qo(N,"[data-feedback-toolbar]")||qo(N,"[data-annotation-marker]")||qo(N,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(N.tagName)||N.isContentEditable||(E.preventDefault(),ao.current={x:E.clientX,y:E.clientY})};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[j,F,os,tt]),y.useEffect(()=>{if(!j||F)return;const C=E=>{if(!ao.current)return;const N=E.clientX-ao.current.x,R=E.clientY-ao.current.y,P=N*N+R*R,oe=He*He;if(!Rs&&P>=oe&&(ks.current=ao.current,hi(!0),E.preventDefault()),(Rs||P>=oe)&&ks.current){if(go.current){const Xt=Math.min(ks.current.x,E.clientX),Gt=Math.min(ks.current.y,E.clientY),vs=Math.abs(E.clientX-ks.current.x),Mn=Math.abs(E.clientY-ks.current.y);go.current.style.transform=`translate(${Xt}px, ${Gt}px)`,go.current.style.width=`${vs}px`,go.current.style.height=`${Mn}px`}const Ce=Date.now();if(Ce-G.current<Ke)return;G.current=Ce;const Le=ks.current.x,Xe=ks.current.y,ut=Math.min(Le,E.clientX),St=Math.min(Xe,E.clientY),Tt=Math.max(Le,E.clientX),Nt=Math.max(Xe,E.clientY),lt=(ut+Tt)/2,ht=(St+Nt)/2,Kn=new Set,Qn=[[ut,St],[Tt,St],[ut,Nt],[Tt,Nt],[lt,ht],[lt,St],[lt,Nt],[ut,ht],[Tt,ht]];for(const[Xt,Gt]of Qn){const vs=document.elementsFromPoint(Xt,Gt);for(const Mn of vs)Mn instanceof HTMLElement&&Kn.add(Mn)}const bs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Xt of bs)if(Xt instanceof HTMLElement){const Gt=Xt.getBoundingClientRect(),vs=Gt.left+Gt.width/2,Mn=Gt.top+Gt.height/2,ro=vs>=ut&&vs<=Tt&&Mn>=St&&Mn<=Nt,$o=Math.min(Gt.right,Tt)-Math.max(Gt.left,ut),is=Math.min(Gt.bottom,Nt)-Math.max(Gt.top,St),Ci=$o>0&&is>0?$o*is:0,Pi=Gt.width*Gt.height,Hi=Pi>0?Ci/Pi:0;(ro||Hi>.5)&&Kn.add(Xt)}const wn=[],Vn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Xt of Kn){if(qo(Xt,"[data-feedback-toolbar]")||qo(Xt,"[data-annotation-marker]"))continue;const Gt=Xt.getBoundingClientRect();if(!(Gt.width>window.innerWidth*.8&&Gt.height>window.innerHeight*.5)&&!(Gt.width<10||Gt.height<10)&&Gt.left<Tt&&Gt.right>ut&&Gt.top<Nt&&Gt.bottom>St){const vs=Xt.tagName;let Mn=Vn.has(vs);if(!Mn&&(vs==="DIV"||vs==="SPAN")){const ro=Xt.textContent&&Xt.textContent.trim().length>0,$o=Xt.onclick!==null||Xt.getAttribute("role")==="button"||Xt.getAttribute("role")==="link"||Xt.classList.contains("clickable")||Xt.hasAttribute("data-clickable");(ro||$o)&&!Xt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Mn=!0)}if(Mn){let ro=!1;for(const $o of wn)if($o.left<=Gt.left&&$o.right>=Gt.right&&$o.top<=Gt.top&&$o.bottom>=Gt.bottom){ro=!0;break}ro||wn.push(Gt)}}}if(Oo.current){const Xt=Oo.current;for(;Xt.children.length>wn.length;)Xt.removeChild(Xt.lastChild);wn.forEach((Gt,vs)=>{let Mn=Xt.children[vs];Mn||(Mn=document.createElement("div"),Mn.className=Ye.selectedElementHighlight,Xt.appendChild(Mn)),Mn.style.transform=`translate(${Gt.left}px, ${Gt.top}px)`,Mn.style.width=`${Gt.width}px`,Mn.style.height=`${Gt.height}px`})}}};return document.addEventListener("mousemove",C,{passive:!0}),()=>document.removeEventListener("mousemove",C)},[j,F,Rs,He]),y.useEffect(()=>{if(!j)return;const C=E=>{const N=Rs,R=ks.current;if(Rs&&R){T.current=!0;const P=Math.min(R.x,E.clientX),oe=Math.min(R.y,E.clientY),Ce=Math.max(R.x,E.clientX),Le=Math.max(R.y,E.clientY),Xe=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(lt=>{if(!(lt instanceof HTMLElement)||qo(lt,"[data-feedback-toolbar]")||qo(lt,"[data-annotation-marker]"))return;const ht=lt.getBoundingClientRect();ht.width>window.innerWidth*.8&&ht.height>window.innerHeight*.5||ht.width<10||ht.height<10||ht.left<Ce&&ht.right>P&&ht.top<Le&&ht.bottom>oe&&Xe.push({element:lt,rect:ht})});const St=Xe.filter(({element:lt})=>!Xe.some(({element:ht})=>ht!==lt&&lt.contains(ht))),Tt=E.clientX/window.innerWidth*100,Nt=E.clientY+window.scrollY;if(St.length>0){const lt=St.reduce((Vn,{rect:Xt})=>({left:Math.min(Vn.left,Xt.left),top:Math.min(Vn.top,Xt.top),right:Math.max(Vn.right,Xt.right),bottom:Math.max(Vn.bottom,Xt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ht=St.slice(0,5).map(({element:Vn})=>ml(Vn).name).join(", "),Kn=St.length>5?` +${St.length-5} more`:"",Qn=St[0].element,bs=qu(Qn),wn=Ku(Qn);K({x:Tt,y:Nt,clientY:E.clientY,element:`${St.length} elements: ${ht}${Kn}`,elementPath:"multi-select",boundingBox:{x:lt.left,y:lt.top+window.scrollY,width:lt.right-lt.left,height:lt.bottom-lt.top},isMultiSelect:!0,fullPath:Zu(Qn),accessibility:Qu(Qn),computedStyles:wn,computedStylesObj:bs,nearbyElements:Gu(Qn),cssClasses:lc(Qn),nearbyText:rc(Qn),sourceFile:od(Qn)})}else{const lt=Math.abs(Ce-P),ht=Math.abs(Le-oe);lt>20&&ht>20&&K({x:Tt,y:Nt,clientY:E.clientY,element:"Area selection",elementPath:`region at (${Math.round(P)}, ${Math.round(oe)})`,boundingBox:{x:P,y:oe+window.scrollY,width:lt,height:ht},isMultiSelect:!0})}ue(null)}else N&&(T.current=!0);ao.current=null,ks.current=null,hi(!1),Oo.current&&(Oo.current.innerHTML="")};return document.addEventListener("mouseup",C),()=>document.removeEventListener("mouseup",C)},[j,Rs]);const $=y.useCallback(async(C,E,N)=>{const R=qt.webhookUrl||w;if(!R||!qt.webhooksEnabled&&!N)return!1;try{return(await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:C,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...E})})).ok}catch(P){return console.warn("[Agentation] Webhook failed:",P),!1}},[w,qt.webhookUrl,qt.webhooksEnabled]),Q=y.useCallback(C=>{var N;if(!F)return;const E={id:Date.now().toString(),x:F.x,y:F.y,comment:C,element:F.element,elementPath:F.elementPath,timestamp:Date.now(),selectedText:F.selectedText,boundingBox:F.boundingBox,nearbyText:F.nearbyText,cssClasses:F.cssClasses,isMultiSelect:F.isMultiSelect,isFixed:F.isFixed,fullPath:F.fullPath,accessibility:F.accessibility,computedStyles:F.computedStyles,nearbyElements:F.nearbyElements,reactComponents:F.reactComponents,sourceFile:F.sourceFile,elementBoundingBoxes:F.elementBoundingBoxes,...g&&bn?{sessionId:bn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};z(R=>[...R,E]),fe.current=E.id,Ut(()=>{fe.current=null},300),Ut(()=>{Hs(R=>new Set(R).add(E.id))},250),a==null||a(E),$("annotation.add",{annotation:E}),dn(!0),Ut(()=>{K(null),dn(!1)},150),(N=window.getSelection())==null||N.removeAllRanges(),g&&bn&&rl(g,bn,E).then(R=>{R.id!==E.id&&(z(P=>P.map(oe=>oe.id===E.id?{...oe,id:R.id}:oe)),Hs(P=>{const oe=new Set(P);return oe.delete(E.id),oe.add(R.id),oe}))}).catch(R=>{console.warn("[Agentation] Failed to sync annotation:",R)})},[F,a,$,g,bn]),se=y.useCallback(()=>{dn(!0),Ut(()=>{K(null),dn(!1)},150)},[]),_e=y.useCallback(C=>{const E=M.findIndex(R=>R.id===C),N=M[E];(Y==null?void 0:Y.id)===C&&(Wn(!0),Ut(()=>{je(null),Ue(null),Ne([]),Wn(!1)},150)),Kt(C),si(R=>new Set(R).add(C)),N&&(c==null||c(N),$("annotation.delete",{annotation:N})),g&&Qa(g,C).catch(R=>{console.warn("[Agentation] Failed to delete annotation from server:",R)}),Ut(()=>{z(R=>R.filter(P=>P.id!==C)),si(R=>{const P=new Set(R);return P.delete(C),P}),Kt(null),E<M.length-1&&(At(E),Ut(()=>At(null),200))},150)},[M,Y,c,$,g]),Je=y.useCallback(C=>{var E;if(!C){ft(null),gt(null),qe([]);return}if(ft(C.id),(E=C.elementBoundingBoxes)!=null&&E.length){const N=[];for(const R of C.elementBoundingBoxes){const P=R.x+R.width/2,oe=R.y+R.height/2-window.scrollY,Le=document.elementsFromPoint(P,oe).find(Xe=>!Xe.closest("[data-annotation-marker]")&&!Xe.closest("[data-agentation-root]"));Le&&N.push(Le)}qe(N),gt(null)}else if(C.boundingBox){const N=C.boundingBox,R=N.x+N.width/2,P=C.isFixed?N.y+N.height/2:N.y+N.height/2-window.scrollY,oe=vr(R,P);if(oe){const Ce=oe.getBoundingClientRect(),Le=Ce.width/N.width,Xe=Ce.height/N.height;Le<.5||Xe<.5?gt(null):gt(oe)}else gt(null);qe([])}else gt(null),qe([])},[]),rt=y.useCallback(C=>{if(!Y)return;const E={...Y,comment:C};z(N=>N.map(R=>R.id===Y.id?E:R)),u==null||u(E),$("annotation.update",{annotation:E}),g&&e1(g,Y.id,{comment:C}).catch(N=>{console.warn("[Agentation] Failed to update annotation on server:",N)}),Wn(!0),Ut(()=>{je(null),Ue(null),Ne([]),Wn(!1)},150)},[Y,u,$,g]),mt=y.useCallback(()=>{Wn(!0),Ut(()=>{je(null),Ue(null),Ne([]),Wn(!1)},150)},[]),Ot=y.useCallback(()=>{const C=M.length,E=Pe.length>0||!!nt;if(C===0&&tn.length===0&&!E)return;if(d==null||d(M),$("annotations.clear",{annotations:M}),g){Promise.all(M.map(P=>Qa(g,P.id).catch(oe=>{console.warn("[Agentation] Failed to delete annotation from server:",oe)})));for(const[,P]of Ds.current)P&&Qa(g,P).catch(()=>{});Ds.current.clear();for(const[,P]of Ps.current)P&&Qa(g,P).catch(()=>{});Ps.current.clear()}Ae(!0),Ee(!0),Do([]);const N=No.current;if(N){const P=N.getContext("2d");P&&P.clearRect(0,0,N.width,N.height)}(Pe.length>0||nt)&&(fo(P=>P+1),ti(P=>P+1),Ut(()=>{jt([]),ln(null)},200)),ct&&Bt(!1),Cn&&$n(""),cs.current={rearrange:null,placements:[]},td(Fe);const R=C*30+200;Ut(()=>{z([]),Hs(new Set),localStorage.removeItem(Td(Fe)),Ae(!1)},R),Ut(()=>Ee(!1),1500)},[Fe,M,tn,Pe,nt,ct,Cn,d,$,g]),ps=y.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Fe,E=tt&&ct;let N;if(E){if(Pe.length===0&&!nt&&!Cn)return;N=""}else{if(N=s1(M,C,qt.outputDetail),!N&&tn.length===0&&Pe.length===0&&!nt)return;N||(N=`## Page Feedback: ${C}
`)}if(!E&&tn.length>0){const R=new Set;for(const Le of M)Le.drawingIndex!=null&&R.add(Le.drawingIndex);const P=No.current;P&&(P.style.visibility="hidden");const oe=[],Ce=window.scrollY;for(let Le=0;Le<tn.length;Le++){if(R.has(Le))continue;const Xe=tn[Le];if(Xe.points.length<2)continue;const ut=Xe.fixed?Xe.points:Xe.points.map(Zn=>({x:Zn.x,y:Zn.y-Ce}));let St=1/0,Tt=1/0,Nt=-1/0,lt=-1/0;for(const Zn of ut)St=Math.min(St,Zn.x),Tt=Math.min(Tt,Zn.y),Nt=Math.max(Nt,Zn.x),lt=Math.max(lt,Zn.y);const ht=Nt-St,Kn=lt-Tt,Qn=Math.hypot(ht,Kn),bs=ut[0],wn=ut[ut.length-1],Vn=Math.hypot(wn.x-bs.x,wn.y-bs.y);let Xt;const Gt=Vn<Qn*.35,vs=ht/Math.max(Kn,1);if(Gt&&Qn>20){const Zn=Math.max(ht,Kn)*.15;let Ui=0;for(const Ji of ut){const Pc=Ji.x-St<Zn,Wd=Nt-Ji.x<Zn,Fd=Ji.y-Tt<Zn,Xd=lt-Ji.y<Zn;(Pc||Wd)&&(Fd||Xd)&&Ui++}Xt=Ui>ut.length*.15?"box":"circle"}else vs>3&&Kn<40?Xt="underline":Vn>Qn*.5?Xt="arrow":Xt="drawing";const Mn=Math.min(10,ut.length),ro=Math.max(1,Math.floor(ut.length/Mn)),$o=new Set,is=[],Ci=[bs];for(let Zn=ro;Zn<ut.length-1;Zn+=ro)Ci.push(ut[Zn]);Ci.push(wn);for(const Zn of Ci){const Ui=vr(Zn.x,Zn.y);if(!Ui||$o.has(Ui)||qo(Ui,"[data-feedback-toolbar]"))continue;$o.add(Ui);const{name:Ji}=ml(Ui);is.includes(Ji)||is.push(Ji)}const Pi=`${Math.round(St)},${Math.round(Tt)} → ${Math.round(Nt)},${Math.round(lt)}`;let Hi;(Xt==="circle"||Xt==="box")&&is.length>0?Hi=`${Xt==="box"?"Boxed":"Circled"} **${is[0]}**${is.length>1?` (and ${is.slice(1).join(", ")})`:""} (region: ${Pi})`:Xt==="underline"&&is.length>0?Hi=`Underlined **${is[0]}** (${Pi})`:Xt==="arrow"&&is.length>=2?Hi=`Arrow from **${is[0]}** to **${is[is.length-1]}** (${Math.round(bs.x)},${Math.round(bs.y)} → ${Math.round(wn.x)},${Math.round(wn.y)})`:is.length>0?Hi=`${Xt==="arrow"?"Arrow":"Drawing"} near **${is.join("**, **")}** (region: ${Pi})`:Hi=`Drawing at ${Pi}`,oe.push(Hi)}P&&(P.style.visibility=""),oe.length>0&&(N+=`
**Drawings:**
`,oe.forEach((Le,Xe)=>{N+=`${Xe+1}. ${Le}
`}))}if((Pe.length>0||E&&Cn)&&(N+=`
`+Ky(Pe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ct,wireframePurpose:Cn||void 0},qt.outputDetail)),nt){const R=Qy(nt,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});R&&(N+=`
`+R)}if(_)try{await navigator.clipboard.writeText(N)}catch{}h==null||h(N),B(!0),Ut(()=>B(!1),2e3),qt.autoClearAfterCopy&&Ut(()=>Ot(),500)},[M,tn,Pe,nt,ct,tt,Yn,Cn,Fe,qt.outputDetail,mo,qt.autoClearAfterCopy,Ot,_,h]),Us=y.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Fe;let E=s1(M,C,qt.outputDetail);if(!E&&Pe.length===0&&!nt)return;if(E||(E=`## Page Feedback: ${C}
`),Pe.length>0&&(E+=`
`+Ky(Pe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ct,wireframePurpose:Cn||void 0},qt.outputDetail)),nt){const R=Qy(nt,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});R&&(E+=`
`+R)}p&&p(E,M),re("sending"),await new Promise(R=>Ut(R,150));const N=await $("submit",{output:E,annotations:M},!0);re(N?"sent":"failed"),Ut(()=>re("idle"),2500),N&&qt.autoClearAfterCopy&&Ut(()=>Ot(),500)},[p,$,M,Pe,nt,ct,Yn,Fe,qt.outputDetail,mo,qt.autoClearAfterCopy,Ot]);y.useEffect(()=>{if(!ms)return;const C=10,E=R=>{const P=R.clientX-ms.x,oe=R.clientY-ms.y,Ce=Math.sqrt(P*P+oe*oe);if(!io&&Ce>C&&Bo(!0),io||Ce>C){let Le=ms.toolbarX+P,Xe=ms.toolbarY+oe;const ut=20,St=337,Tt=44,lt=St-(j?xs==="connected"?297:257:44),ht=ut-lt,Kn=window.innerWidth-ut-St;Le=Math.max(ht,Math.min(Kn,Le)),Xe=Math.max(ut,Math.min(window.innerHeight-Tt-ut,Xe)),Ns({x:Le,y:Xe})}},N=()=>{io&&(Lo.current=!0),Bo(!1),po(null)};return document.addEventListener("mousemove",E),document.addEventListener("mouseup",N),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",N)}},[ms,io,j,xs]);const xo=y.useCallback(C=>{var oe,Ce;if(C.target.closest("button")||C.target.closest("[data-agentation-settings-panel]"))return;const E=C.currentTarget.parentElement;if(!E)return;const N=E.getBoundingClientRect(),R=(oe=sn==null?void 0:sn.x)!=null?oe:N.left,P=(Ce=sn==null?void 0:sn.y)!=null?Ce:N.top;po({x:C.clientX,y:C.clientY,toolbarX:R,toolbarY:P})},[sn]);if(y.useEffect(()=>{if(!sn)return;const C=()=>{let P=sn.x,oe=sn.y;const Xe=20-(337-(j?xs==="connected"?297:257:44)),ut=window.innerWidth-20-337;P=Math.max(Xe,Math.min(ut,P)),oe=Math.max(20,Math.min(window.innerHeight-44-20,oe)),(P!==sn.x||oe!==sn.y)&&Ns({x:P,y:oe})};return C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[sn,j,xs]),y.useEffect(()=>{const C=E=>{const N=E.target,R=N.tagName==="INPUT"||N.tagName==="TEXTAREA"||N.isContentEditable;if(E.key==="Escape"){if(tt){Mt?_t(null):js();return}if(os){jn(!1);return}if(In.length>0){Xs([]);return}F||j&&(hs(),k(!1))}if((E.metaKey||E.ctrlKey)&&E.shiftKey&&(E.key==="f"||E.key==="F")){E.preventDefault(),hs(),j?yo():k(!0);return}if(!(R||E.metaKey||E.ctrlKey)&&((E.key==="p"||E.key==="P")&&(E.preventDefault(),hs(),Zi()),(E.key==="l"||E.key==="L")&&(E.preventDefault(),hs(),os&&jn(!1),ve&&Qe(!1),F&&se(),tt?js():Lt(!0)),(E.key==="h"||E.key==="H")&&M.length>0&&(E.preventDefault(),hs(),D(P=>!P)),(E.key==="c"||E.key==="C")&&(M.length>0||Pe.length>0||nt)&&(E.preventDefault(),hs(),ps()),(E.key==="x"||E.key==="X")&&(M.length>0||Pe.length>0||nt)&&(E.preventDefault(),hs(),Ot(),Pe.length>0&&jt([]),nt&&ln(null)),E.key==="s"||E.key==="S")){const P=oa(qt.webhookUrl)||oa(w||"");M.length>0&&P&&ae==="idle"&&(E.preventDefault(),hs(),Us())}};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[j,os,tt,Mt,Pe,nt,F,M.length,qt.webhookUrl,w,ae,Us,Zi,ps,Ot,In]),!ot||W)return null;const vn=M.length>0,Ft=M.filter(C=>!_o.has(C.id)&&C.kind!=="placement"&&C.kind!=="rearrange"),an=Ft.length>0,cn=M.filter(C=>_o.has(C.id)),Ms=C=>{const oe=C.x/100*window.innerWidth,Ce=typeof C.y=="string"?parseFloat(C.y):C.y,Le={};window.innerHeight-Ce-22-10<80&&(Le.top="auto",Le.bottom="calc(100% + 10px)");const ut=oe-200/2,St=10;if(ut<St){const Tt=St-ut;Le.left=`calc(50% + ${Tt}px)`}else if(ut+200>window.innerWidth-St){const Tt=ut+200-(window.innerWidth-St);Le.left=`calc(50% - ${Tt}px)`}return Le};return Bc.createPortal(l.jsxs("div",{ref:J,style:{display:"contents"},"data-agentation-theme":Ln?"dark":"light","data-agentation-accent":qt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ye.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:sn?{left:sn.x,top:sn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ye.toolbarContainer} ${j?Ye.expanded:Ye.collapsed} ${Ro?Ye.entrance:""} ${X?Ye.hiding:""} ${!qt.webhooksEnabled&&(oa(qt.webhookUrl)||oa(w||""))?Ye.serverConnected:""}`,onClick:j?void 0:C=>{if(Lo.current){Lo.current=!1,C.preventDefault();return}k(!0)},onMouseDown:xo,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ye.toggleContent} ${j?Ye.hidden:Ye.visible}`,children:[l.jsx(cS,{size:24}),an&&l.jsx("span",{className:`${Ye.badge} ${j?Ye.fadeOut:""} ${Ro?Ye.entrance:""}`,children:Ft.length})]}),l.jsxs("div",{className:`${Ye.controlsContent} ${j?Ye.visible:Ye.hidden} ${sn&&sn.y<100?Ye.tooltipBelow:""} ${$t||ve?Ye.tooltipsHidden:""} ${ni?Ye.tooltipsInSession:""}`,onMouseEnter:Uo,onMouseLeave:Qi,children:[l.jsxs("div",{className:`${Ye.buttonWrapper} ${sn&&sn.x<120?Ye.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),hs(),Zi()},"data-active":te,children:l.jsx(mS,{size:24,isPaused:te})}),l.jsxs("span",{className:Ye.buttonTooltip,children:[te?"Resume animations":"Pause animations",l.jsx("span",{className:Ye.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:`${Ye.controlButton} ${Ln?"":Ye.light}`,onClick:C=>{C.stopPropagation(),hs(),os&&jn(!1),ve&&Qe(!1),F&&se(),tt?js():Lt(!0)},"data-active":tt,style:tt&&ct?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(SS,{size:21})}),l.jsxs("span",{className:Ye.buttonTooltip,children:[tt?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ye.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),hs(),D(!L)},disabled:!vn||tt,children:l.jsx(hS,{size:24,isOpen:L})}),l.jsxs("span",{className:Ye.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:Ye.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:`${Ye.controlButton} ${ge?Ye.statusShowing:""}`,onClick:C=>{C.stopPropagation(),hs(),ps()},disabled:tt&&ct?Pe.length===0&&!((Co=nt==null?void 0:nt.sections)!=null&&Co.length):!vn&&tn.length===0&&Pe.length===0&&!((Vs=nt==null?void 0:nt.sections)!=null&&Vs.length),"data-active":ge,children:l.jsx(dS,{size:24,copied:ge,tint:tt&&ct&&(Pe.length>0||(Bs=nt==null?void 0:nt.sections)!=null&&Bs.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ye.buttonTooltip,children:[tt&&ct?"Copy layout":"Copy feedback",l.jsx("span",{className:Ye.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ye.buttonWrapper} ${Ye.sendButtonWrapper} ${j&&!qt.webhooksEnabled&&(oa(qt.webhookUrl)||oa(w||""))?Ye.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ye.controlButton} ${ae==="sent"||ae==="failed"?Ye.statusShowing:""}`,onClick:C=>{C.stopPropagation(),hs(),Us()},disabled:!vn||!oa(qt.webhookUrl)&&!oa(w||"")||ae==="sending","data-no-hover":ae==="sent"||ae==="failed",tabIndex:oa(qt.webhookUrl)||oa(w||"")?0:-1,children:[l.jsx(fS,{size:24,state:ae}),vn&&ae==="idle"&&l.jsx("span",{className:Ye.buttonBadge,children:M.length})]}),l.jsxs("span",{className:Ye.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ye.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),hs(),Ot()},disabled:!vn&&tn.length===0&&Pe.length===0&&!((qs=nt==null?void 0:nt.sections)!=null&&qs.length),"data-danger":!0,children:l.jsx(_S,{size:24})}),l.jsxs("span",{className:Ye.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ye.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),hs(),tt&&js(),Qe(!ve)},children:l.jsx(pS,{size:24})}),g&&xs!=="disconnected"&&l.jsx("span",{className:`${Ye.mcpIndicator} ${Ye[xs]} ${ve?Ye.hidden:""}`,title:xs==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ye.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ye.divider}),l.jsxs("div",{className:`${Ye.buttonWrapper} ${sn&&typeof window<"u"&&sn.x>window.innerWidth-120?Ye.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),hs(),yo()},children:l.jsx(gS,{size:24})}),l.jsxs("span",{className:Ye.buttonTooltip,children:["Exit",l.jsx("span",{className:Ye.shortcut,children:"Esc"})]})]})]}),l.jsx(Z4,{visible:tt&&j,activeType:Mt,onSelect:C=>{_t(Mt===C?null:C)},isDarkMode:Ln,sectionCount:(zo=nt==null?void 0:nt.sections.length)!=null?zo:0,onDetectSections:()=>{var Ce,Le;const C=c6(),E=(Ce=nt==null?void 0:nt.sections)!=null?Ce:[],N=new Set(E.map(Xe=>Xe.selector)),R=C.filter(Xe=>!N.has(Xe.selector)),P=[...E,...R],oe=[...(Le=nt==null?void 0:nt.originalOrder)!=null?Le:[],...R.map(Xe=>Xe.id)];ln({sections:P,originalOrder:oe,detectedAt:Date.now()})},placementCount:Pe.length,onClearPlacements:()=>{fo(C=>C+1),ti(C=>C+1),Ut(()=>{ln({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ct,onBlankCanvasChange:C=>{const E={sections:[],originalOrder:[],detectedAt:Date.now()};C?(Ao.current={rearrange:nt,placements:Pe},ln(cs.current.rearrange||E),jt(cs.current.placements),_t(null)):(cs.current={rearrange:nt,placements:Pe},ln(Ao.current.rearrange||E),jt(Ao.current.placements)),Bt(C)},wireframePurpose:Cn,onWireframePurposeChange:$n,Tooltip:Mr,onDragStart:(C,E)=>{var Tt;E.preventDefault();const N=wt[C];let R=null,P=!1;const oe=E.clientX,Ce=E.clientY,Le=E.target.closest("[data-feedback-toolbar]"),Xe=(Tt=Le==null?void 0:Le.getBoundingClientRect().top)!=null?Tt:window.innerHeight,ut=Nt=>{const lt=Nt.clientX-oe,ht=Nt.clientY-Ce;if(!P&&(Math.abs(lt)>4||Math.abs(ht)>4)&&(P=!0,R=document.createElement("div"),R.className=`${De.dragPreview}${ct?` ${De.dragPreviewWireframe}`:""}`,document.body.appendChild(R)),!R)return;const Kn=Math.max(0,Xe-Nt.clientY),Qn=Math.min(1,Kn/180),bs=1-Math.pow(1-Qn,2),wn=28,Vn=20,Xt=Math.min(140,N.width*.18),Gt=Math.min(90,N.height*.18),vs=wn+(Xt-wn)*bs,Mn=Vn+(Gt-Vn)*bs;R.style.width=`${vs}px`,R.style.height=`${Mn}px`,R.style.left=`${Nt.clientX-vs/2}px`,R.style.top=`${Nt.clientY-Mn/2}px`,R.style.opacity=`${.5+.5*bs}`,R.textContent=bs>.25?C:""},St=Nt=>{if(window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",St),R&&document.body.removeChild(R),P){const lt=N.width,ht=N.height,Kn=window.scrollY,Qn=Math.max(0,Nt.clientX-lt/2),bs=Math.max(0,Nt.clientY+Kn-ht/2),wn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:C,x:Qn,y:bs,width:lt,height:ht,scrollY:Kn,timestamp:Date.now()};jt(Vn=>[...Vn,wn]),_t(null),Is.current=new Set,ei(Vn=>Vn+1)}};window.addEventListener("mousemove",ut),window.addEventListener("mouseup",St)}}),l.jsx(yC,{settings:qt,onSettingsChange:C=>$i(E=>({...E,...C})),isDarkMode:Ln,onToggleTheme:oo,isDevMode:Vo,connectionStatus:xs,endpoint:g,isVisible:Ge,toolbarNearBottom:!!sn&&sn.y<230,settingsPage:vt,onSettingsPageChange:Ve,onHideToolbar:Hn})]})}),(tt||Ht)&&l.jsx("div",{className:`${De.blankCanvas} ${xn?De.visible:""} ${rn?De.gridActive:""}`,style:{"--canvas-opacity":Sn},"data-feedback-toolbar":!0}),tt&&ct&&xn&&l.jsxs("div",{className:De.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:De.wireframeOpacityRow,children:[l.jsx("span",{className:De.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:De.wireframeOpacitySlider,min:0,max:1,step:.01,value:Sn,onChange:C=>ls(Number(C.target.value))})]}),l.jsxs("div",{className:De.wireframeNoticeTitleRow,children:[l.jsx("span",{className:De.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:De.wireframeNoticeDivider}),l.jsx("button",{className:De.wireframeStartOver,onClick:()=>{fo(C=>C+1),ln({sections:[],originalOrder:[],detectedAt:Date.now()}),cs.current={rearrange:null,placements:[]},$n(""),td(Fe)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(tt||Ht)&&l.jsx(X4,{placements:Pe,onChange:jt,activeComponent:Ht?null:Mt,onActiveComponentChange:_t,isDarkMode:Ln,exiting:Ht,onInteractionChange:En,passthrough:!Mt,extraSnapRects:nt==null?void 0:nt.sections.map(C=>C.currentRect),deselectSignal:Es,clearSignal:so,wireframe:ct,onSelectionChange:(C,E)=>{Is.current=C,E||(As.current=new Set,uo(N=>N+1))},onDragMove:(C,E)=>{const N=As.current;if(!(!N.size||!nt)){if(!us.current){us.current=new Map;for(const R of nt.sections)N.has(R.id)&&us.current.set(R.id,{x:R.currentRect.x,y:R.currentRect.y})}for(const R of nt.sections){if(!N.has(R.id)||!us.current.get(R.id))continue;const oe=document.querySelector(`[data-rearrange-section="${R.id}"]`);oe&&(oe.style.transform=`translate(${C}px, ${E}px)`)}}},onDragEnd:(C,E,N)=>{const R=As.current,P=us.current;if(us.current=null,!(!R.size||!nt||!P)){for(const oe of R){const Ce=document.querySelector(`[data-rearrange-section="${oe}"]`);Ce&&(Ce.style.transform="")}N&&ln(oe=>oe&&{...oe,sections:oe.sections.map(Ce=>{const Le=P.get(Ce.id);return Le?{...Ce,currentRect:{...Ce.currentRect,x:Math.max(0,Le.x+C),y:Math.max(0,Le.y+E)}}:Ce})})}}}),(tt||Ht)&&nt&&l.jsx(f6,{rearrangeState:nt,onChange:ln,isDarkMode:Ln,exiting:Ht,blankCanvas:ct,extraSnapRects:Pe.map(C=>({x:C.x,y:C.y,width:C.width,height:C.height})),clearSignal:kn,deselectSignal:Cs,onSelectionChange:(C,E)=>{As.current=C,E||(Is.current=new Set,ei(N=>N+1))},onDragMove:(C,E)=>{const N=Is.current;if(N.size){if(!us.current){us.current=new Map;for(const R of Pe)N.has(R.id)&&us.current.set(R.id,{x:R.x,y:R.y})}for(const R of N){const P=document.querySelector(`[data-design-placement="${R}"]`);P&&(P.style.transform=`translate(${C}px, ${E}px)`)}}},onDragEnd:(C,E,N)=>{const R=Is.current,P=us.current;if(us.current=null,!(!R.size||!P)){for(const oe of R){const Ce=document.querySelector(`[data-design-placement="${oe}"]`);Ce&&(Ce.style.transform="")}N&&jt(oe=>oe.map(Ce=>{const Le=P.get(Ce.id);return Le?{...Ce,x:Math.max(0,Le.x+C),y:Math.max(0,Le.y+E)}:Ce}))}}}),l.jsx("canvas",{ref:No,className:`${Ye.drawCanvas} ${os?Ye.active:""}`,style:{opacity:Qt?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ye.markersLayer,"data-feedback-toolbar":!0,children:[le&&Ft.filter(C=>!C.isFixed).map((C,E,N)=>l.jsx(o1,{annotation:C,globalIndex:Ft.findIndex(R=>R.id===C.id),layerIndex:E,layerSize:N.length,isExiting:ke,isClearing:Oe,isAnimated:Wo.has(C.id),isHovered:!ke&&et===C.id,isDeleting:Yt===C.id,isEditingAny:!!Y,renumberFrom:Ze,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:Ms(C),onHoverEnter:R=>!ke&&R.id!==fe.current&&Je(R),onHoverLeave:()=>Je(null),onClick:R=>qt.markerClickBehavior==="delete"?_e(R.id):Ii(R),onContextMenu:Ii},C.id)),le&&!ke&&cn.filter(C=>!C.isFixed).map(C=>l.jsx(i1,{annotation:C},C.id))]}),l.jsxs("div",{className:Ye.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[le&&Ft.filter(C=>C.isFixed).map((C,E,N)=>l.jsx(o1,{annotation:C,globalIndex:Ft.findIndex(R=>R.id===C.id),layerIndex:E,layerSize:N.length,isExiting:ke,isClearing:Oe,isAnimated:Wo.has(C.id),isHovered:!ke&&et===C.id,isDeleting:Yt===C.id,isEditingAny:!!Y,renumberFrom:Ze,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:Ms(C),onHoverEnter:R=>!ke&&R.id!==fe.current&&Je(R),onHoverLeave:()=>Je(null),onClick:R=>qt.markerClickBehavior==="delete"?_e(R.id):Ii(R),onContextMenu:Ii},C.id)),le&&!ke&&cn.filter(C=>C.isFixed).map(C=>l.jsx(i1,{annotation:C,fixed:!0},C.id))]}),j&&l.jsxs("div",{className:Ye.overlay,"data-feedback-toolbar":!0,style:F||Y?{zIndex:99999}:void 0,children:[(Z==null?void 0:Z.rect)&&!F&&!yt&&!Rs&&l.jsx("div",{className:`${Ye.hoverHighlight} ${Ye.enter}`,style:{left:Z.rect.left,top:Z.rect.top,width:Z.rect.width,height:Z.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),In.filter(C=>document.contains(C.element)).map((C,E)=>{const N=C.element.getBoundingClientRect(),R=In.length>1;return l.jsx("div",{className:R?Ye.multiSelectOutline:Ye.singleSelectOutline,style:{position:"fixed",left:N.left,top:N.top,width:N.width,height:N.height,...R?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},E)}),et&&!F&&(()=>{var P;const C=M.find(oe=>oe.id===et);if(!(C!=null&&C.boundingBox))return null;if((P=C.elementBoundingBoxes)!=null&&P.length)return pt.length>0?pt.filter(oe=>document.contains(oe)).map((oe,Ce)=>{const Le=oe.getBoundingClientRect();return l.jsx("div",{className:`${Ye.multiSelectOutline} ${Ye.enter}`,style:{left:Le.left,top:Le.top,width:Le.width,height:Le.height}},`hover-outline-live-${Ce}`)}):C.elementBoundingBoxes.map((oe,Ce)=>l.jsx("div",{className:`${Ye.multiSelectOutline} ${Ye.enter}`,style:{left:oe.x,top:oe.y-st,width:oe.width,height:oe.height}},`hover-outline-${Ce}`));const E=zt&&document.contains(zt)?zt.getBoundingClientRect():null,N=E?{x:E.left,y:E.top,width:E.width,height:E.height}:{x:C.boundingBox.x,y:C.isFixed?C.boundingBox.y:C.boundingBox.y-st,width:C.boundingBox.width,height:C.boundingBox.height},R=C.isMultiSelect;return l.jsx("div",{className:`${R?Ye.multiSelectOutline:Ye.singleSelectOutline} ${Ye.enter}`,style:{left:N.x,top:N.y,width:N.width,height:N.height,...R?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Z&&!F&&!yt&&!Rs&&l.jsxs("div",{className:`${Ye.hoverTooltip} ${Ye.enter}`,style:{left:Math.max(8,Math.min(I.x,window.innerWidth-100)),top:Math.max(I.y-(Z.reactComponents?48:32),8)},children:[Z.reactComponents&&l.jsx("div",{className:Ye.hoverReactPath,children:Z.reactComponents}),l.jsx("div",{className:Ye.hoverElementName,children:Z.elementName})]}),F&&l.jsxs(l.Fragment,{children:[(bo=F.multiSelectElements)!=null&&bo.length?F.multiSelectElements.filter(C=>document.contains(C)).map((C,E)=>{const N=C.getBoundingClientRect();return l.jsx("div",{className:`${Ye.multiSelectOutline} ${qn?Ye.exit:Ye.enter}`,style:{left:N.left,top:N.top,width:N.width,height:N.height}},`pending-multi-${E}`)}):F.targetElement&&document.contains(F.targetElement)?(()=>{const C=F.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ye.singleSelectOutline} ${qn?Ye.exit:Ye.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():F.boundingBox&&l.jsx("div",{className:`${F.isMultiSelect?Ye.multiSelectOutline:Ye.singleSelectOutline} ${qn?Ye.exit:Ye.enter}`,style:{left:F.boundingBox.x,top:F.boundingBox.y-st,width:F.boundingBox.width,height:F.boundingBox.height,...F.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const C=F.x,E=F.isFixed?F.y:F.y-st;return l.jsxs(l.Fragment,{children:[l.jsx(lC,{x:C,y:E,isMultiSelect:F.isMultiSelect,isExiting:qn}),l.jsx(jd,{ref:It,element:F.element,selectedText:F.selectedText,computedStyles:F.computedStylesObj,placeholder:F.element==="Area selection"?"What should change in this area?":F.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Q,onCancel:se,isExiting:qn,lightMode:!Ln,accentColor:F.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,C/100*window.innerWidth)),...E>window.innerHeight-290?{bottom:window.innerHeight-E+20}:{top:E+20}}})]})})()]}),Y&&l.jsxs(l.Fragment,{children:[(xe=Y.elementBoundingBoxes)!=null&&xe.length?it.length>0?it.filter(C=>document.contains(C)).map((C,E)=>{const N=C.getBoundingClientRect();return l.jsx("div",{className:`${Ye.multiSelectOutline} ${Ye.enter}`,style:{left:N.left,top:N.top,width:N.width,height:N.height}},`edit-multi-live-${E}`)}):Y.elementBoundingBoxes.map((C,E)=>l.jsx("div",{className:`${Ye.multiSelectOutline} ${Ye.enter}`,style:{left:C.x,top:C.y-st,width:C.width,height:C.height}},`edit-multi-${E}`)):(()=>{const C=We&&document.contains(We)?We.getBoundingClientRect():null,E=C?{x:C.left,y:C.top,width:C.width,height:C.height}:Y.boundingBox?{x:Y.boundingBox.x,y:Y.isFixed?Y.boundingBox.y:Y.boundingBox.y-st,width:Y.boundingBox.width,height:Y.boundingBox.height}:null;return E?l.jsx("div",{className:`${Y.isMultiSelect?Ye.multiSelectOutline:Ye.singleSelectOutline} ${Ye.enter}`,style:{left:E.x,top:E.y,width:E.width,height:E.height,...Y.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:Vt,element:Y.element,selectedText:Y.selectedText,computedStyles:i6(Y.computedStyles),placeholder:"Edit your feedback...",initialValue:Y.comment,submitLabel:"Save",onSubmit:rt,onCancel:mt,onDelete:()=>_e(Y.id),isExiting:Fo,lightMode:!Ln,accentColor:Y.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const C=Y.isFixed?Y.y:Y.y-st;return{left:Math.max(160,Math.min(window.innerWidth-160,Y.x/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})()})]}),Rs&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:go,className:Ye.dragSelection}),l.jsx("div",{ref:Oo,className:Ye.highlightsContainer})]})]})]}),document.body)}const _p=y.createContext({});function Lc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const vC=typeof window<"u",gp=vC?y.useLayoutEffect:y.useEffect,zd=y.createContext(null);function yp(t,n){t.indexOf(n)===-1&&t.push(n)}function _l(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ca=(t,n,i)=>i>n?n:i<t?t:i;let xp=()=>{};const nr={},db=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function fb(t){return typeof t=="object"&&t!==null}const hb=t=>/^0[^.\s]+$/u.test(t);function mb(t){let n;return()=>(n===void 0&&(n=t()),n)}const Li=t=>t,wC=(t,n)=>i=>n(t(i)),Oc=(...t)=>t.reduce(wC),gl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class bp{constructor(){this.subscriptions=[]}add(n){return yp(this.subscriptions,n),()=>_l(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ui=t=>t*1e3,Bi=t=>t/1e3;function pb(t,n){return n?t*(1e3/n):0}const SC=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},_b=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,CC=1e-7,kC=12;function jC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=_b(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>CC&&++h<kC);return d}function zc(t,n,i,a){if(t===n&&i===a)return Li;const c=u=>jC(u,0,1,t,i);return u=>u===0||u===1?u:_b(c(u),n,a)}const gb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,yb=t=>n=>1-t(1-n),xb=zc(.33,1.53,.69,.99),vp=yb(xb),bb=gb(vp),vb=t=>t>=1?1:(t*=2)<1?.5*vp(t):.5*(2-Math.pow(2,-10*(t-1))),wp=t=>1-Math.sin(Math.acos(t)),wb=yb(wp),Sb=gb(wp),MC=zc(.42,0,1,1),TC=zc(0,0,.58,1),Cb=zc(.42,0,.58,1),kb=t=>Array.isArray(t)&&typeof t[0]!="number";function jb(t,n){return kb(t)?t[SC(0,t.length,n)]:t}const Mb=t=>Array.isArray(t)&&typeof t[0]=="number",EC={linear:Li,easeIn:MC,easeInOut:Cb,easeOut:TC,circIn:wp,circInOut:Sb,circOut:wb,backIn:vp,backInOut:bb,backOut:xb,anticipate:vb},AC=t=>typeof t=="string",c1=t=>{if(Mb(t)){xp(t.length===4);const[n,i,a,c]=t;return zc(n,i,a,c)}else if(AC(t))return EC[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function DC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(_.schedule(g),t()),g(h)}const _={schedule:(g,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(g),S.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,_.process(g))}};return _}const NC=40;function Tb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((L,D)=>(L[D]=DC(u),L),{}),{setup:h,read:p,resolveKeyframes:_,preUpdate:g,update:x,preRender:b,render:w,postRender:S}=d,j=()=>{const L=nr.useManualTiming,D=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(D-c.timestamp,NC),1)),c.timestamp=D,c.isProcessing=!0,h.process(c),p.process(c),_.process(c),g.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},k=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:id.reduce((L,D)=>{const W=d[D];return L[D]=(U,X=!1,V=!1)=>(i||k(),W.schedule(U,X,V)),L},{}),cancel:L=>{for(let D=0;D<id.length;D++)d[id[D]].cancel(L)},state:c,steps:d}}const{schedule:ss,cancel:Ma,state:Eo,steps:cm}=Tb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Li,!0);let pd;function RC(){pd=void 0}const Qo={now:()=>(pd===void 0&&Qo.set(Eo.isProcessing||nr.useManualTiming?Eo.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(RC)}},Eb=t=>n=>typeof n=="string"&&n.startsWith(t),Ab=Eb("--"),BC=Eb("var(--"),Sp=t=>BC(t)?LC.test(t.split("/*")[0].trim()):!1,LC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function u1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const vl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ec={...vl,transform:t=>ca(0,1,t)},ad={...vl,default:1},wc=t=>Math.round(t*1e5)/1e5,Cp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function OC(t){return t==null}const zC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kp=(t,n)=>i=>!!(typeof i=="string"&&zC.test(i)&&i.startsWith(t)||n&&!OC(i)&&Object.prototype.hasOwnProperty.call(i,n)),Db=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Cp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},$C=t=>ca(0,255,t),um={...vl,transform:t=>Math.round($C(t))},Tr={test:kp("rgb","red"),parse:Db("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+um.transform(t)+", "+um.transform(n)+", "+um.transform(i)+", "+wc(Ec.transform(a))+")"};function IC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const zm={test:kp("#"),parse:IC,transform:Tr.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Za=$c("deg"),la=$c("%"),Et=$c("px"),PC=$c("vh"),HC=$c("vw"),d1={...la,parse:t=>la.parse(t)/100,transform:t=>la.transform(t*100)},dl={test:kp("hsl","hue"),parse:Db("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+la.transform(wc(n))+", "+la.transform(wc(i))+", "+wc(Ec.transform(a))+")"},to={test:t=>Tr.test(t)||zm.test(t)||dl.test(t),parse:t=>Tr.test(t)?Tr.parse(t):dl.test(t)?dl.parse(t):zm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Tr.transform(t):dl.transform(t),getAnimatableNone:t=>{const n=to.parse(t);return n.alpha=0,to.transform(n)}},UC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function VC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Cp))==null?void 0:n.length)||0)+(((i=t.match(UC))==null?void 0:i.length)||0)>0}const Nb="number",Rb="color",YC="var",WC="var(",f1="${}",FC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(FC,p=>(to.test(p)?(a.color.push(u),c.push(Rb),i.push(to.parse(p))):p.startsWith(WC)?(a.var.push(u),c.push(YC),i.push(p)):(a.number.push(u),c.push(Nb),i.push(parseFloat(p))),++u,f1)).split(f1);return{values:i,split:h,indexes:a,types:c}}function XC(t){return yl(t).values}function Bb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Nb?c+=wc(a[u]):d===Rb?c+=to.transform(a[u]):c+=a[u]}return c}}function GC(t){return Bb(yl(t))}const qC=t=>typeof t=="number"?0:to.test(t)?to.getAnimatableNone(t):t,KC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:qC(t);function QC(t){const n=yl(t);return Bb(n)(n.values.map((a,c)=>KC(a,n.split[c])))}const Ki={test:VC,parse:XC,createTransformer:GC,getAnimatableNone:QC};function dm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function ZC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=dm(p,h,t+1/3),u=dm(p,h,t),d=dm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Ed(t,n){return i=>i>0?n:t}const gs=(t,n,i)=>t+(n-t)*i,fm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},JC=[zm,Tr,dl],e3=t=>JC.find(n=>n.test(t));function h1(t){const n=e3(t);if(!n)return!1;let i=n.parse(t);return n===dl&&(i=ZC(i)),i}const m1=(t,n)=>{const i=h1(t),a=h1(n);if(!i||!a)return Ed(t,n);const c={...i};return u=>(c.red=fm(i.red,a.red,u),c.green=fm(i.green,a.green,u),c.blue=fm(i.blue,a.blue,u),c.alpha=gs(i.alpha,a.alpha,u),Tr.transform(c))},$m=new Set(["none","hidden"]);function t3(t,n){return $m.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function n3(t,n){return i=>gs(t,n,i)}function jp(t){return typeof t=="number"?n3:typeof t=="string"?Sp(t)?Ed:to.test(t)?m1:i3:Array.isArray(t)?Lb:typeof t=="object"?to.test(t)?m1:s3:Ed}function Lb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>jp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function s3(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=jp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function o3(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const i3=(t,n)=>{const i=Ki.createTransformer(n),a=yl(t),c=yl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?$m.has(t)&&!c.values.length||$m.has(n)&&!a.values.length?t3(t,n):Oc(Lb(o3(a,c),c.values),i):Ed(t,n)};function Ob(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?gs(t,n,i):jp(t)(t,n)}const a3=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>ss.update(n,i),stop:()=>Ma(n),now:()=>Eo.isProcessing?Eo.timestamp:Qo.now()}},zb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function Mp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function $b(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Mp(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Bi(c)}}const $s={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Im(t,n){return t*Math.sqrt(1-n*n)}const r3=12;function l3(t,n,i){let a=i;for(let c=1;c<r3;c++)a=a-t(a)/n(a);return a}const hm=.001;function c3({duration:t=$s.duration,bounce:n=$s.bounce,velocity:i=$s.velocity,mass:a=$s.mass}){let c,u,d=1-n;d=ca($s.minDamping,$s.maxDamping,d),t=ca($s.minDuration,$s.maxDuration,Bi(t)),d<1?(c=_=>{const g=_*d,x=g*t,b=g-i,w=Im(_,d),S=Math.exp(-x);return hm-b/w*S},u=_=>{const x=_*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(_,2)*t,S=Math.exp(-x),j=Im(Math.pow(_,2),d);return(-c(_)+hm>0?-1:1)*((b-w)*S)/j}):(c=_=>{const g=Math.exp(-_*t),x=(_-i)*t+1;return-hm+g*x},u=_=>{const g=Math.exp(-_*t),x=(i-_)*(t*t);return g*x});const h=5/t,p=l3(c,u,h);if(t=ui(t),isNaN(p))return{stiffness:$s.stiffness,damping:$s.damping,duration:t};{const _=Math.pow(p,2)*a;return{stiffness:_,damping:d*2*Math.sqrt(a*_),duration:t}}}const u3=["duration","bounce"],d3=["stiffness","damping","mass"];function p1(t,n){return n.some(i=>t[i]!==void 0)}function f3(t){let n={velocity:$s.velocity,stiffness:$s.stiffness,damping:$s.damping,mass:$s.mass,isResolvedFromDuration:!1,...t};if(!p1(t,d3)&&p1(t,u3))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ca(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:$s.mass,stiffness:c,damping:u}}else{const i=c3({...t,velocity:0});n={...n,...i,mass:$s.mass},n.isResolvedFromDuration=!0}return n}function Ac(t=$s.visualDuration,n=$s.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:_,mass:g,duration:x,velocity:b,isResolvedFromDuration:w}=f3({...i,velocity:-Bi(i.velocity||0)}),S=b||0,j=_/(2*Math.sqrt(p*g)),k=d-u,M=Bi(Math.sqrt(p/g)),z=Math.abs(k)<5;a||(a=z?$s.restSpeed.granular:$s.restSpeed.default),c||(c=z?$s.restDelta.granular:$s.restDelta.default);let L,D,W,U,X,V;if(j<1)W=Im(M,j),U=(S+j*M*k)/W,L=le=>{const ie=Math.exp(-j*M*le);return d-ie*(U*Math.sin(W*le)+k*Math.cos(W*le))},X=j*M*U+k*W,V=j*M*k-U*W,D=le=>Math.exp(-j*M*le)*(X*Math.sin(W*le)+V*Math.cos(W*le));else if(j===1){L=ie=>d-Math.exp(-M*ie)*(k+(S+M*k)*ie);const le=S+M*k;D=ie=>Math.exp(-M*ie)*(M*le*ie-S)}else{const le=M*Math.sqrt(j*j-1);L=Z=>{const ue=Math.exp(-j*M*Z),I=Math.min(le*Z,300);return d-ue*((S+j*M*k)*Math.sinh(I)+le*k*Math.cosh(I))/le};const ie=(S+j*M*k)/le,ke=j*M*ie-k*le,$e=j*M*k-ie*le;D=Z=>{const ue=Math.exp(-j*M*Z),I=Math.min(le*Z,300);return ue*(ke*Math.sinh(I)+$e*Math.cosh(I))}}const J={calculatedDuration:w&&x||null,velocity:le=>ui(D(le)),next:le=>{if(!w&&j<1){const ke=Math.exp(-j*M*le),$e=Math.sin(W*le),Z=Math.cos(W*le),ue=d-ke*(U*$e+k*Z),I=ui(ke*(X*$e+V*Z));return h.done=Math.abs(I)<=a&&Math.abs(d-ue)<=c,h.value=h.done?d:ue,h}const ie=L(le);if(w)h.done=le>=x;else{const ke=ui(D(le));h.done=Math.abs(ke)<=a&&Math.abs(d-ie)<=c}return h.value=h.done?d:ie,h},toString:()=>{const le=Math.min(Mp(J),Ad),ie=zb(ke=>J.next(le*ke).value,le,30);return le+"ms "+ie},toTransition:()=>{}};return J}Ac.applyToOptions=t=>{const n=$b(t,100,Ac);return t.ease=n.ease,t.duration=ui(n.duration),t.type="keyframes",t};const h3=5;function Ib(t,n,i){const a=Math.max(n-h3,0);return pb(i-t(a),n-a)}function Pm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:_=.5,restSpeed:g}){const x=t[0],b={done:!1,value:x},w=V=>h!==void 0&&V<h||p!==void 0&&V>p,S=V=>h===void 0?p:p===void 0||Math.abs(h-V)<Math.abs(p-V)?h:p;let j=i*n;const k=x+j,M=d===void 0?k:d(k);M!==k&&(j=M-x);const z=V=>-j*Math.exp(-V/a),L=V=>M+z(V),D=V=>{const J=z(V),le=L(V);b.done=Math.abs(J)<=_,b.value=b.done?M:le};let W,U;const X=V=>{w(b.value)&&(W=V,U=Ac({keyframes:[b.value,S(b.value)],velocity:Ib(L,V,b.value),damping:c,stiffness:u,restDelta:_,restSpeed:g}))};return X(0),{calculatedDuration:null,next:V=>{let J=!1;return!U&&W===void 0&&(J=!0,D(V),X(V)),W!==void 0&&V>=W?U.next(V-W):(!J&&D(V),b)}}}function m3(t,n,i){const a=[],c=i||nr.mix||Ob,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Li:n;h=Oc(p,h)}a.push(h)}return a}function Pb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(xp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=m3(n,a,c),p=h.length,_=g=>{if(d&&g<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const b=gl(t[x],t[x+1],g);return h[x](b)};return i?g=>_(ca(t[0],t[u-1],g)):_}function Hb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=gl(0,n,a);t.push(gs(i,1,c))}}function Ub(t){const n=[0];return Hb(n,t.length-1),n}function p3(t,n){return t.map(i=>i*n)}function _3(t,n){return t.map(()=>n||Cb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=kb(a)?a.map(c1):c1(a),u={done:!1,value:n[0]},d=p3(i&&i.length===n.length?i:Ub(n),t),h=Pb(d,n,{ease:Array.isArray(c)?c:_3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const g3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(g3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const y3={decay:Pm,inertia:Pm,tween:Sc,keyframes:Sc,spring:Ac};function Vb(t){typeof t.type=="string"&&(t.type=y3[t.type])}class Tp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const x3=t=>t/100;class Dd extends Tp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Qo.now()&&this.tick(Qo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Vb(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=Oc(x3,Ob(h[0],h[1])),h=[0,100]);const _=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),_.calculatedDuration===null&&(_.calculatedDuration=Mp(_));const{calculatedDuration:g}=_;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=_}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:_=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:j,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-_*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,D=a;if(x){const V=Math.min(this.currentTime,c)/h;let J=Math.floor(V),le=V%1;!le&&V>=1&&(le=1),le===1&&J--,J=Math.min(J,x+1),!!(J%2)&&(b==="reverse"?(le=1-le,w&&(le-=w/h)):b==="mirror"&&(D=d)),L=ca(0,1,le)*h}let W;z?(this.delayState.value=g[0],W=this.delayState):W=D.next(L),u&&!z&&(W.value=u(W.value));let{done:U}=W;!z&&p!==null&&(U=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&U);return X&&S!==Pm&&(W.value=$d(g,this.options,k,this.speed)),j&&j(W.value),X&&this.finish(),W}then(n,i){return this.finished.then(n,i)}get duration(){return Bi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Bi(n)}get time(){return Bi(this.currentTime)}set time(n){n=ui(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ib(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Qo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Bi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=a3,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Qo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function b3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Er=t=>t*180/Math.PI,Hm=t=>{const n=Er(Math.atan2(t[1],t[0]));return Um(n)},v3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hm,rotateZ:Hm,skewX:t=>Er(Math.atan(t[1])),skewY:t=>Er(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Um=t=>(t=t%360,t<0&&(t+=360),t),_1=Hm,g1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),y1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),w3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:g1,scaleY:y1,scale:t=>(g1(t)+y1(t))/2,rotateX:t=>Um(Er(Math.atan2(t[6],t[5]))),rotateY:t=>Um(Er(Math.atan2(-t[2],t[0]))),rotateZ:_1,rotate:_1,skewX:t=>Er(Math.atan(t[4])),skewY:t=>Er(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Vm(t){return t.includes("scale")?1:0}function Ym(t,n){if(!t||t==="none")return Vm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=w3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=v3,c=h}if(!c)return Vm(n);const u=a[n],d=c[1].split(",").map(C3);return typeof u=="function"?u(d):d[u]}const S3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Ym(i,n)};function C3(t){return parseFloat(t.trim())}const wl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sl=new Set(wl),x1=t=>t===vl||t===Et,k3=new Set(["x","y","z"]),j3=wl.filter(t=>!k3.has(t));function M3(t){const n=[];return j3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const tr={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Ym(n,"x"),y:(t,{transform:n})=>Ym(n,"y")};tr.translateX=tr.x;tr.translateY=tr.y;const Ar=new Set;let Wm=!1,Fm=!1,Xm=!1;function Yb(){if(Fm){const t=Array.from(Ar).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=M3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Fm=!1,Wm=!1,Ar.forEach(t=>t.complete(Xm)),Ar.clear()}function Wb(){Ar.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fm=!0)})}function T3(){Xm=!0,Wb(),Yb(),Xm=!1}class Ep{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ar.add(this),Wm||(Wm=!0,ss.read(Wb),ss.resolveKeyframes(Yb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}b3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Ar.delete(this)}cancel(){this.state==="scheduled"&&(Ar.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const E3=t=>t.startsWith("--");function Fb(t,n,i){E3(n)?t.style.setProperty(n,i):t.style[n]=i}const A3={};function Xb(t,n){const i=mb(t);return()=>{var a;return(a=A3[n])!=null?a:i()}}const D3=Xb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Gb=Xb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,b1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function qb(t,n){if(t)return typeof t=="function"?Gb()?zb(t,n):"ease-out":Mb(t)?gc(t):Array.isArray(t)?t.map(i=>qb(i,n)||b1.easeOut):b1[t]}function N3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},_=void 0){const g={[n]:i};p&&(g.offset=p);const x=qb(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return _&&(b.pseudoElement=_),t.animate(g,b)}function Ap(t){return typeof t=="function"&&"applyToOptions"in t}function R3({type:t,...n}){var i,a;return Ap(t)&&Gb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Kb extends Tp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,xp(typeof n.type!="string");const _=R3(n);this.animation=N3(i,a,c,_,u),_.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Fb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Bi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Bi(n)}get time(){return Bi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ui(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&D3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Li):c(this)}}const Qb={anticipate:vb,backInOut:bb,circInOut:Sb};function B3(t){return t in Qb}function L3(t){typeof t.ease=="string"&&B3(t.ease)&&(t.ease=Qb[t.ease])}const mm=10;class O3 extends Kb{constructor(n){L3(n),Vb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Dd({...d,autoplay:!1}),p=Math.max(mm,Qo.now()-this.startTime),_=ca(0,mm,p-mm),g=h.sample(p).value,{name:x}=this.options;u&&x&&Fb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-_)).value,g,_),h.stop()}}const v1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ki.test(t)||t==="0")&&!t.startsWith("url("));function z3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function $3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=v1(c,n),h=v1(u,n);return!d||!h?!1:z3(t)||(i==="spring"||Ap(i))&&a}function Gm(t){t.duration=0,t.type="keyframes"}const Zb=new Set(["opacity","clipPath","filter","transform"]),I3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function P3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&I3.test(t[n]))return!0;return!1}const H3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),U3=mb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function V3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:_,transformTemplate:g}=n.owner.getProps();return U3()&&i&&(Zb.has(i)||H3.has(i)&&P3(h))&&(i!=="transform"||!g)&&!_&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const Y3=40;class W3 extends Tp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:_,element:g,...x}){var S;super(),this.stop=()=>{var j,k;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Qo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:_,element:g,...x},w=(g==null?void 0:g.KeyframeResolver)||Ep;this.keyframeResolver=new w(h,(j,k,M)=>this.onKeyframesResolved(j,k,b,!M),p,_,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var M,z;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:_,onUpdate:g}=a;this.resolvedAt=Qo.now();let x=!0;$3(n,u,d,h)||(x=!1,(nr.instantAnimations||!p)&&(g==null||g($d(n,a,i))),n[0]=n[n.length-1],Gm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>Y3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!_&&V3(w),j=(z=(M=w.motionValue)==null?void 0:M.owner)==null?void 0:z.current;let k;if(S)try{k=new O3({...w,element:j})}catch{k=new Dd(w)}else k=new Dd(w);k.finished.then(()=>{this.notifyFinished()}).catch(Li),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),T3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class F3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return w1(this.animations,"duration")}get iterationDuration(){return w1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function w1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class X3 extends F3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Jb(t,n,i,a=0,c=1){const u=Array.from(t).sort((_,g)=>_.sortNodePosition(g)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const G3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function q3(t){const n=G3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function e5(t,n,i=1){const[a,c]=q3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return db(d)?parseFloat(d):d}return Sp(c)?e5(c,n,i+1):c}const K3={type:"spring",stiffness:500,damping:25,restSpeed:10},Q3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Z3={type:"keyframes",duration:.8},J3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ek=(t,{keyframes:n})=>n.length>2?Z3:Sl.has(t)?t.startsWith("scale")?Q3(n[1]):K3:J3;function t5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Dp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?t5(i,t):i}const tk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function nk(t){for(const n in t)if(!tk.has(n))return!0;return!1}const Np=(t,n,i,a={},c,u)=>d=>{const h=Dp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:_=0}=a;_=_-ui(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-_,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};nk(h)||Object.assign(g,ek(t,g)),g.duration&&(g.duration=ui(g.duration)),g.repeatDelay&&(g.repeatDelay=ui(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Gm(g),g.delay===0&&(x=!0)),(nr.instantAnimations||nr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Gm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(g.keyframes,h);if(b!==void 0){ss.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Dd(g):new W3(g)};function S1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Rp(t,n,i,a){if(typeof n=="function"){const[c,u]=S1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=S1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Dr(t,n,i){const a=t.getProps();return Rp(a,n,i!==void 0?i:a.custom,t)}const n5=new Set(["width","height","top","left","right","bottom",...wl]),C1=30,sk=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class ok{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Qo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Qo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=sk(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new bp);const a=this.events[n].add(i);return n==="change"?()=>{a(),ss.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Qo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>C1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,C1);return pb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function sr(t,n){return new ok(t,n)}const qm=t=>Array.isArray(t);function ik(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,sr(i))}function ak(t){return qm(t)?t[t.length-1]||0:t}function rk(t,n){const i=Dr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=ak(u[d]);ik(t,d,h)}}const co=t=>!!(t&&t.getVelocity);function lk(t){return!!(co(t)&&t.add)}function Km(t,n){const i=t.getValue("willChange");if(lk(i))return i.add(n);if(!i&&nr.WillChange){const a=new nr.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Bp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const ck="framerAppearId",s5="data-"+Bp(ck);function o5(t){return t.props[s5]}function uk({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Lp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?t5(u,p):p;const _=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),j=h[w];if(j===void 0||x&&uk(x,w))continue;const k={delay:i,...Dp(u||{},w)},M=S.get();if(M!==void 0&&!S.isAnimating()&&!Array.isArray(j)&&j===M&&!k.velocity){ss.update(()=>S.set(j));continue}let z=!1;if(window.MotionHandoffAnimation){const W=o5(t);if(W){const U=window.MotionHandoffAnimation(W,w,ss);U!==null&&(k.startTime=U,z=!0)}}Km(t,w);const L=_!=null?_:t.shouldReduceMotion;S.start(Np(w,S,j,L&&n5.has(w)?{type:!1}:k,t,z));const D=S.animation;D&&g.push(D)}if(d){const w=()=>ss.update(()=>{d&&rk(t,d)});g.length?Promise.all(g).then(w):w()}return g}function Qm(t,n,i={}){var p;const a=Dr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Lp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(_=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return dk(t,n,_,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[_,g]=h==="beforeChildren"?[u,d]:[d,u];return _().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function dk(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Qm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Jb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function fk(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Qm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Qm(t,n,i);else{const c=typeof n=="function"?Dr(t,n,i.custom):n;a=Promise.all(Lp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const hk={test:t=>t==="auto",parse:t=>t},i5=t=>n=>n.test(t),a5=[vl,Et,la,Za,HC,PC,hk],k1=t=>a5.find(i5(t));function mk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||hb(t):!0}const pk=new Set(["brightness","contrast","saturate","opacity"]);function _k(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(Cp)||[];if(!a)return t;const c=i.replace(a,"");let u=pk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const gk=/\b([a-z-]*)\(.*?\)/gu,Zm={...Ki,getAnimatableNone:t=>{const n=t.match(gk);return n?n.map(_k).join(" "):t}},Jm={...Ki,getAnimatableNone:t=>{const n=Ki.parse(t);return Ki.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},j1={...vl,transform:Math.round},yk={rotate:Za,rotateX:Za,rotateY:Za,rotateZ:Za,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:Za,skewX:Za,skewY:Za,distance:Et,translateX:Et,translateY:Et,translateZ:Et,x:Et,y:Et,z:Et,perspective:Et,transformPerspective:Et,opacity:Ec,originX:d1,originY:d1,originZ:Et},Op={borderWidth:Et,borderTopWidth:Et,borderRightWidth:Et,borderBottomWidth:Et,borderLeftWidth:Et,borderRadius:Et,borderTopLeftRadius:Et,borderTopRightRadius:Et,borderBottomRightRadius:Et,borderBottomLeftRadius:Et,width:Et,maxWidth:Et,height:Et,maxHeight:Et,top:Et,right:Et,bottom:Et,left:Et,inset:Et,insetBlock:Et,insetBlockStart:Et,insetBlockEnd:Et,insetInline:Et,insetInlineStart:Et,insetInlineEnd:Et,padding:Et,paddingTop:Et,paddingRight:Et,paddingBottom:Et,paddingLeft:Et,paddingBlock:Et,paddingBlockStart:Et,paddingBlockEnd:Et,paddingInline:Et,paddingInlineStart:Et,paddingInlineEnd:Et,margin:Et,marginTop:Et,marginRight:Et,marginBottom:Et,marginLeft:Et,marginBlock:Et,marginBlockStart:Et,marginBlockEnd:Et,marginInline:Et,marginInlineStart:Et,marginInlineEnd:Et,fontSize:Et,backgroundPositionX:Et,backgroundPositionY:Et,...yk,zIndex:j1,fillOpacity:Ec,strokeOpacity:Ec,numOctaves:j1},xk={...Op,color:to,backgroundColor:to,outlineColor:to,fill:to,stroke:to,borderColor:to,borderTopColor:to,borderRightColor:to,borderBottomColor:to,borderLeftColor:to,filter:Zm,WebkitFilter:Zm,mask:Jm,WebkitMask:Jm},r5=t=>xk[t],bk=new Set([Zm,Jm]);function l5(t,n){let i=r5(t);return bk.has(i)||(i=Ki),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const vk=new Set(["auto","none","0"]);function wk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!vk.has(u)&&yl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=l5(i,c)}class Sk extends Ep{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),Sp(x))){const b=e5(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!n5.has(a)||n.length!==2)return;const[c,u]=n,d=k1(c),h=k1(u),p=u1(c),_=u1(u);if(p!==_&&tr[a]){this.needsMeasurement=!0;return}if(d!==h)if(x1(d)&&x1(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else tr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||mk(n[c]))&&a.push(c);a.length&&wk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=tr[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=tr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,_])=>{n.getValue(p).set(_)}),this.resolveNoneKeyframes()}}function zp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const c5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return fb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:$p}=Tb(queueMicrotask,!1),Gi={x:!1,y:!1};function u5(){return Gi.x||Gi.y}function Ck(t){return t==="x"||t==="y"?Gi[t]?null:(Gi[t]=!0,()=>{Gi[t]=!1}):Gi.x||Gi.y?null:(Gi.x=Gi.y=!0,()=>{Gi.x=Gi.y=!1})}function d5(t,n){const i=zp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function kk(t){return!(t.pointerType==="touch"||u5())}function jk(t,n,i={}){const[a,c,u]=d5(t,i);return a.forEach(d=>{let h=!1,p=!1,_;const g=()=>{d.removeEventListener("pointerleave",S)},x=k=>{_&&(_(k),_=void 0),g()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},j=k=>{if(!kk(k))return;p=!1;const M=n(d,k);typeof M=="function"&&(_=M,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",w,c)}),u}const f5=(t,n)=>n?t===n?!0:f5(t,n.parentElement):!1,Ip=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Mk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Tk(t){return Mk.has(t.tagName)||t.isContentEditable===!0}const Ek=new Set(["INPUT","SELECT","TEXTAREA"]);function Ak(t){return Ek.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function M1(t){return n=>{n.key==="Enter"&&t(n)}}function pm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Dk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=M1(()=>{if(gd.has(i))return;pm(i,"down");const c=M1(()=>{pm(i,"up")}),u=()=>pm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function T1(t){return Ip(t)&&!u5()}const E1=new WeakSet;function Nk(t,n,i={}){const[a,c,u]=d5(t,i),d=h=>{const p=h.currentTarget;if(!T1(h)||E1.has(h))return;gd.add(p),i.stopPropagation&&E1.add(h);const _=n(p,h),g=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),T1(w)&&typeof _=="function"&&_(w,{success:S})},x=w=>{g(w,p===window||p===document||i.useGlobalTarget||f5(p,w.target))},b=w=>{g(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",_=>Dk(_,c)),!Tk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return fb(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let Ja;const h5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Rk=h5("inline","width","offsetWidth"),Bk=h5("block","height","offsetHeight");function Lk({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Rk(t,n)},get height(){return Bk(t,n)}})})}function Ok(t){t.forEach(Lk)}function zk(){typeof ResizeObserver>"u"||(Ja=new ResizeObserver(Ok))}function $k(t,n){Ja||zk();const i=zp(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),Ja==null||Ja.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||Ja==null||Ja.unobserve(a)})}}const xd=new Set;let fl;function Ik(){fl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",fl)}function Pk(t){return xd.add(t),fl||Ik(),()=>{xd.delete(t),!xd.size&&typeof fl=="function"&&(window.removeEventListener("resize",fl),fl=void 0)}}function A1(t,n){return typeof t=="function"?Pk(t):$k(t,n)}function m5(t){return Id(t)&&t.tagName==="svg"}function Hk(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Pb(c,u,d);return n?h(a):h}const Uk=[...a5,to,Ki],Vk=t=>Uk.find(i5(t)),D1=()=>({translate:0,scale:1,origin:0,originPoint:0}),hl=()=>({x:D1(),y:D1()}),N1=()=>({min:0,max:0}),eo=()=>({x:N1(),y:N1()}),Dc=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Nc(t){return typeof t=="string"||Array.isArray(t)}const Pp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hp=["initial",...Pp];function Hd(t){return Pd(t.animate)||Hp.some(n=>Nc(t[n]))}function p5(t){return!!(Hd(t)||t.variants)}function Yk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(co(c))t.addValue(a,c);else if(co(u))t.addValue(a,sr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,sr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const ep={current:null},_5={current:!1},Wk=typeof window<"u";function Fk(){if(_5.current=!0,!!Wk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>ep.current=t.matches;t.addEventListener("change",n),n()}else ep.current=!1}const R1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Nd={};function g5(t){Nd=t}function Xk(){return Nd}class y5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ep,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Qo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,ss.render(this.render,!1,!0))};const{latestValues:_,renderState:g}=h;this.latestValues=_,this.baseTarget={..._},this.initialValues=i.initial?{..._}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=p5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];_[w]!==void 0&&co(S)&&S.set(_[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Dc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(_5.current||Fk(),this.shouldReduceMotion=ep.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Ma(this.notifyUpdate),Ma(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Zb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:_,duration:g}=i.accelerate,x=new Kb({element:this.current,name:n,keyframes:h,times:p,ease:_,duration:ui(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Sl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&ss.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Nd){const i=Nd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):eo()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<R1.length;a++){const c=R1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Yk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=sr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(db(a)||hb(a))?a=parseFloat(a):!Vk(a)&&Ki.test(i)&&(a=l5(n,i)),this.setBaseTarget(n,co(a)?a.get():a)),co(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Rp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!co(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new bp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){$p.render(this.render)}}class x5 extends y5{constructor(){super(...arguments),this.KeyframeResolver=Sk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;co(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class or{constructor(n){this.isMounted=!1,this.node=n}update(){}}function b5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function Gk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function qk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function _m(t){return t===void 0||t===1}function tp({scale:t,scaleX:n,scaleY:i}){return!_m(t)||!_m(n)||!_m(i)}function kr(t){return tp(t)||v5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function v5(t){return B1(t.x)||B1(t.y)}function B1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function L1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function np(t,n=0,i=1,a,c){t.min=L1(t.min,n,i,a,c),t.max=L1(t.max,n,i,a,c)}function w5(t,{x:n,y:i}){np(t.x,n.translate,n.scale,n.originPoint),np(t.y,i.translate,i.scale,i.originPoint)}const O1=.999999999999,z1=1.0000000000001;function Kk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:_}=u.options;_&&_.props.style&&_.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(aa(t.x,-u.scroll.offset.x),aa(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,w5(t,d)),a&&kr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<z1&&n.x>O1&&(n.x=1),n.y<z1&&n.y>O1&&(n.y=1)}function aa(t,n){t.min+=n,t.max+=n}function $1(t,n,i,a,c=.5){const u=gs(t.min,t.max,c);np(t,n,i,u,a)}function I1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;$1(t.x,I1(n.x,a.x),n.scaleX,n.scale,n.originX),$1(t.y,I1(n.y,a.y),n.scaleY,n.scale,n.originY)}function S5(t,n){return b5(qk(t.getBoundingClientRect(),n))}function Qk(t,n,i){const a=S5(t,i),{scroll:c}=n;return c&&(aa(a.x,c.offset.x),aa(a.y,c.offset.y)),a}const Zk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Jk=wl.length;function e8(t,n,i){let a="",c=!0;for(let u=0;u<Jk;u++){const d=wl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const _=parseFloat(h);p=d.startsWith("scale")?_===1:_===0}if(!p||i){const _=c5(h,Op[d]);if(!p){c=!1;const g=Zk[d]||d;a+=`${g}(${_}) `}i&&(n[d]=_)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Up(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const _=n[p];if(Sl.has(p)){d=!0;continue}else if(Ab(p)){c[p]=_;continue}else{const g=c5(_,Op[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=e8(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:_="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${_} ${g}`}}function C5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function P1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const hc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Et.test(t))t=parseFloat(t);else return t;const i=P1(t,n.target.x),a=P1(t,n.target.y);return`${i}% ${a}%`}},t8={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ki.parse(t);if(c.length>5)return a;const u=Ki.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const _=gs(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=_),typeof c[3+d]=="number"&&(c[3+d]/=_),u(c)}},sp={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:t8};function k5(t,{layout:n,layoutId:i}){return Sl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!sp[t]||t==="opacity")}function Vp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(co(a[h])||c&&co(c[h])||k5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function n8(t){return window.getComputedStyle(t)}class j5 extends x5{constructor(){super(...arguments),this.type="html",this.renderInstance=C5}readValueFromInstance(n,i){var a;if(Sl.has(i))return(a=this.projection)!=null&&a.isProjecting?Vm(i):S3(n,i);{const c=n8(n),u=(Ab(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return S5(n,i)}build(n,i,a){Up(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Vp(n,i,a)}}function s8(t,n){return t in n}class o8 extends y5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(s8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return eo()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const i8={offset:"stroke-dashoffset",array:"stroke-dasharray"},a8={offset:"strokeDashoffset",array:"strokeDasharray"};function r8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?i8:a8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const l8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function M5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,_,g){var w,S;if(Up(t,h,_),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=g==null?void 0:g.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const j of l8)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&r8(x,c,u,d,!1)}const T5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),E5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function c8(t,n,i,a){C5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(T5.has(c)?c:Bp(c),n.attrs[c])}function A5(t,n,i){const a=Vp(t,n,i);for(const c in t)if(co(t[c])||co(n[c])){const u=wl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class D5 extends x5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=eo}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Sl.has(i)){const a=r5(i);return a&&a.default||0}return i=T5.has(i)?i:Bp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return A5(n,i,a)}build(n,i,a){M5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){c8(n,i,a,c)}mount(n){this.isSVGTag=E5(n.tagName),super.mount(n)}}const u8=Hp.length;function N5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?N5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<u8;i++){const a=Hp[i],c=t.props[a];(Nc(c)||c===!1)&&(n[a]=c)}return n}function R5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const d8=[...Pp].reverse(),f8=Pp.length;function h8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>fk(t,i,a)))}function m8(t){let n=h8(t),i=H1(),a=!0,c=!1;const u=_=>(g,x)=>{var w;const b=Dr(t,x,_==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:j,...k}=b;g={...g,...k,...j}}return g};function d(_){n=_(t)}function h(_){const{props:g}=t,x=N5(t.parent)||{},b=[],w=new Set;let S={},j=1/0;for(let M=0;M<f8;M++){const z=d8[M],L=i[z],D=g[z]!==void 0?g[z]:x[z],W=Nc(D),U=z===_?L.isActive:null;U===!1&&(j=M);let X=D===x[z]&&D!==g[z]&&W;if(X&&(a||c)&&t.manuallyAnimateOnMount&&(X=!1),L.protectedKeys={...S},!L.isActive&&U===null||!D&&!L.prevProp||Pd(D)||typeof D=="boolean")continue;if(z==="exit"&&L.isActive&&U!==!0){L.prevResolvedValues&&(S={...S,...L.prevResolvedValues});continue}const V=p8(L.prevProp,D);let J=V||z===_&&L.isActive&&!X&&W||M>j&&W,le=!1;const ie=Array.isArray(D)?D:[D];let ke=ie.reduce(u(z),{});U===!1&&(ke={});const{prevResolvedValues:$e={}}=L,Z={...$e,...ke},ue=F=>{J=!0,w.has(F)&&(le=!0,w.delete(F)),L.needsAnimating[F]=!0;const K=t.getValue(F);K&&(K.liveStyle=!1)};for(const F in Z){const K=ke[F],ge=$e[F];if(S.hasOwnProperty(F))continue;let B=!1;qm(K)&&qm(ge)?B=!R5(K,ge):B=K!==ge,B?K!=null?ue(F):w.add(F):K!==void 0&&w.has(F)?ue(F):L.protectedKeys[F]=!0}L.prevProp=D,L.prevResolvedValues=ke,L.isActive&&(S={...S,...ke}),(a||c)&&t.blockInitialAnimation&&(J=!1);const I=X&&V;J&&(!I||le)&&b.push(...ie.map(F=>{const K={type:z};if(typeof F=="string"&&(a||c)&&!I&&t.manuallyAnimateOnMount&&t.parent){const{parent:ge}=t,B=Dr(ge,F);if(ge.enteringChildren&&B){const{delayChildren:ae}=B.transition||{};K.delay=Jb(ge.enteringChildren,t,ae)}}return{animation:F,options:K}}))}if(w.size){const M={};if(typeof g.initial!="boolean"){const z=Dr(t,Array.isArray(g.initial)?g.initial[0]:g.initial);z&&z.transition&&(M.transition=z.transition)}w.forEach(z=>{const L=t.getBaseTarget(z),D=t.getValue(z);D&&(D.liveStyle=!0),M[z]=L!=null?L:null}),b.push({animation:M})}let k=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(_,g){var b;if(i[_].isActive===g)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(_,g)}),i[_].isActive=g;const x=h(_);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=H1(),c=!0}}}function p8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!R5(n,t):!1}function Sr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function H1(){return{animate:Sr(!0),whileInView:Sr(),whileHover:Sr(),whileTap:Sr(),whileDrag:Sr(),whileFocus:Sr(),exit:Sr()}}function op(t,n){t.min=n.min,t.max=n.max}function Xi(t,n){op(t.x,n.x),op(t.y,n.y)}function U1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const B5=1e-4,_8=1-B5,g8=1+B5,L5=.01,y8=0-L5,x8=0+L5;function Zo(t){return t.max-t.min}function b8(t,n,i){return Math.abs(t-n)<=i}function V1(t,n,i,a=.5){t.origin=a,t.originPoint=gs(n.min,n.max,t.origin),t.scale=Zo(i)/Zo(n),t.translate=gs(i.min,i.max,t.origin)-t.originPoint,(t.scale>=_8&&t.scale<=g8||isNaN(t.scale))&&(t.scale=1),(t.translate>=y8&&t.translate<=x8||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){V1(t.x,n.x,i.x,a?a.originX:void 0),V1(t.y,n.y,i.y,a?a.originY:void 0)}function Y1(t,n,i,a=0){const c=a?gs(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Zo(n)}function v8(t,n,i,a){Y1(t.x,n.x,i.x,a==null?void 0:a.x),Y1(t.y,n.y,i.y,a==null?void 0:a.y)}function W1(t,n,i,a=0){const c=a?gs(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Zo(n)}function Bd(t,n,i,a){W1(t.x,n.x,i.x,a==null?void 0:a.x),W1(t.y,n.y,i.y,a==null?void 0:a.y)}function F1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function w8(t,n=0,i=1,a=.5,c,u=t,d=t){if(la.test(n)&&(n=parseFloat(n),n=gs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=gs(u.min,u.max,a);t===u&&(h-=n),t.min=F1(t.min,n,i,h,c),t.max=F1(t.max,n,i,h,c)}function X1(t,n,[i,a,c],u,d){w8(t,n[i],n[a],n[c],n.scale,u,d)}const S8=["x","scaleX","originX"],C8=["y","scaleY","originY"];function G1(t,n,i,a){X1(t.x,n,S8,i?i.x:void 0,a?a.x:void 0),X1(t.y,n,C8,i?i.y:void 0,a?a.y:void 0)}function q1(t){return t.translate===0&&t.scale===1}function O5(t){return q1(t.x)&&q1(t.y)}function K1(t,n){return t.min===n.min&&t.max===n.max}function k8(t,n){return K1(t.x,n.x)&&K1(t.y,n.y)}function Q1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function z5(t,n){return Q1(t.x,n.x)&&Q1(t.y,n.y)}function Z1(t){return Zo(t.x)/Zo(t.y)}function J1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function ia(t){return[t("x"),t("y")]}function j8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:_,rotate:g,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;_&&(a=`perspective(${_}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const $5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],M8=$5.length,ex=t=>typeof t=="string"?parseFloat(t):t,tx=t=>typeof t=="number"||Et.test(t);function T8(t,n,i,a,c,u){var d,h,p,_;c?(t.opacity=gs(0,(d=i.opacity)!=null?d:1,E8(a)),t.opacityExit=gs((h=n.opacity)!=null?h:1,0,A8(a))):u&&(t.opacity=gs((p=n.opacity)!=null?p:1,(_=i.opacity)!=null?_:1,a));for(let g=0;g<M8;g++){const x=$5[g];let b=nx(n,x),w=nx(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||tx(b)===tx(w)?(t[x]=Math.max(gs(ex(b),ex(w),a),0),(la.test(w)||la.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=gs(n.rotate||0,i.rotate||0,a))}function nx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const E8=I5(0,.5,wb),A8=I5(.5,.95,Li);function I5(t,n,i){return a=>a<t?0:a>n?1:i(gl(t,n,a))}function P5(t,n,i){const a=co(t)?t:sr(t);return a.start(Np("",a,n,i)),a.animation}function Rc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const D8=(t,n)=>t.depth-n.depth;class N8{constructor(){this.children=[],this.isDirty=!1}add(n){yp(this.children,n),this.isDirty=!0}remove(n){_l(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(D8),this.isDirty=!1,this.children.forEach(n)}}function R8(t,n){const i=Qo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Ma(a),t(u-n))};return ss.setup(a,!0),()=>Ma(a)}function vd(t){return co(t)?t.get():t}class B8{constructor(){this.members=[]}add(n){yp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(_l(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(_l(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gm=["","X","Y","Z"],L8=1e3;let O8=0;function ym(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function H5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=o5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ss,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&H5(a)}function U5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=O8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(I8),this.nodes.forEach(W8),this.nodes.forEach(F8),this.nodes.forEach(P8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new N8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new bp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!m5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:_}=this.options;if(_&&!_.current&&_.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;ss.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,g&&g(),g=R8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(ix)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&_&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||_.getDefaultTransition()||Q8,{onLayoutAnimationStart:j,onLayoutAnimationComplete:k}=_.getProps(),M=!this.targetLayout||!z5(this.targetLayout,w),z=!x&&b;if(this.options.layoutRoot||this.resumeFrom||z||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Dp(S,"layout"),onPlay:j,onComplete:k};(_.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(g,z)}else x||ix(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ma(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(X8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&H5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const _=this.getTransformTemplate();this.prevTransformTemplateValue=_?_(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(U8),this.nodes.forEach(sx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ox);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(V8),this.nodes.forEach(Y8),this.nodes.forEach(z8),this.nodes.forEach($8)):this.nodes.forEach(ox),this.clearAllSnapshots();const h=Qo.now();Eo.delta=ca(0,1e3/60,h-Eo.timestamp),Eo.timestamp=h,Eo.isProcessing=!0,cm.update.process(Eo),cm.preRender.process(Eo),cm.render.process(Eo),Eo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(H8),this.sharedNodes.forEach(G8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ss.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ss.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Zo(this.snapshot.measuredBox.x)&&!Zo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=eo()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!O5(this.projectionDelta),p=this.getTransformTemplate(),_=p?p(this.latestValues,""):void 0,g=_!==this.prevTransformTemplateValue;d&&this.instance&&(h||kr(this.latestValues)||g)&&(c(this.instance,_),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),Z8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var _;const{visualElement:d}=this.options;if(!d)return eo();const h=d.measureViewportBox();if(!(((_=this.scroll)==null?void 0:_.wasRoot)||this.path.some(J8))){const{scroll:g}=this.root;g&&(aa(h.x,g.offset.x),aa(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=eo();if(Xi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let _=0;_<this.path.length;_++){const g=this.path[_],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Xi(h,d),aa(h.x,x.offset.x),aa(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const _=p||eo();Xi(_,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(aa(_.x,-w.scroll.offset.x),aa(_.y,-w.scroll.offset.y)),kr(w.latestValues)&&bd(_,w.latestValues,(g=w.layout)==null?void 0:g.layoutBox)}return kr(this.latestValues)&&bd(_,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),_}removeTransform(d){var p;const h=eo();Xi(h,d);for(let _=0;_<this.path.length;_++){const g=this.path[_];if(!kr(g.latestValues))continue;let x;g.instance&&(tp(g.latestValues)&&g.updateSnapshot(),x=eo(),Xi(x,g.measurePageBox())),G1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return kr(this.latestValues)&&G1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Eo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Eo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=eo(),this.targetWithTransforms=eo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),v8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Xi(this.target,this.layout.layoutBox),w5(this.target,this.targetDelta)):Xi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||tp(this.parent.latestValues)||v5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=eo(),this.relativeTargetOrigin=eo(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Xi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Eo.timestamp&&(p=!1),p)return;const{layout:_,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(_||g))return;Xi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;Kk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=eo());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U1(this.prevProjectionDelta.x,this.projectionDelta.x),U1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!J1(this.projectionDelta.x,this.prevProjectionDelta.x)||!J1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hl(),this.projectionDelta=hl(),this.projectionDeltaWithTransform=hl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,_=p?p.latestValues:{},g={...this.latestValues},x=hl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=eo(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=w!==S,k=this.getStack(),M=!k||k.members.length<=1,z=!!(j&&!M&&this.options.crossfade===!0&&!this.path.some(K8));this.animationProgress=0;let L;this.mixTargetDelta=D=>{const W=D/1e3;ax(x.x,d.x,W),ax(x.y,d.y,W),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),q8(this.relativeTarget,this.relativeTargetOrigin,b,W),L&&k8(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=eo()),Xi(L,this.relativeTarget)),j&&(this.animationValues=g,T8(g,_,this.latestValues,W,z,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=W},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,_;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(_=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||_.stop(),this.pendingAnimation&&(Ma(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ss.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=sr(0)),this.motionValue.jump(0,!1),this.currentAnimation=P5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(L8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:_,latestValues:g}=d;if(!(!h||!p||!_)){if(this!==d&&this.layout&&_&&V5(this.options.animationType,this.layout.layoutBox,_.layoutBox)){p=this.target||eo();const x=Zo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Zo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Xi(h,p),bd(h,g),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new B8),this.sharedNodes.get(d).add(h);const _=h.options.initialPromotionConfig;h.promote({transition:_?_.transition:void 0,preserveFollowOpacity:_&&_.shouldPreserveFollowOpacity?_.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const _=this.getStack();_&&_.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const _={};p.z&&ym("z",d,_,this.animationValues);for(let g=0;g<gm.length;g++)ym(`rotate${gm[g]}`,d,_,this.animationValues),ym(`skew${gm[g]}`,d,_,this.animationValues);d.render();for(const g in _)d.setStaticValue(g,_[g]),this.animationValues&&(this.animationValues[g]=_[g]);d.scheduleRender()}applyProjectionStyles(d,h){var S,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const _=this.getLead();if(!this.projectionDelta||!this.layout||!_.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!kr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=_.animationValues||_.latestValues;this.applyTransformsToTarget();let x=j8(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,_.animationValues?d.opacity=_===this?(j=(S=g.opacity)!=null?S:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=_===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const k in sp){if(g[k]===void 0)continue;const{correct:M,applyTo:z,isCSSVariable:L}=sp[k],D=x==="none"?g[k]:M(g[k],_);if(z){const W=z.length;for(let U=0;U<W;U++)d[z[U]]=D}else L?this.options.visualElement.renderState.vars[k]=D:d[k]=D}this.options.layoutId&&(d.pointerEvents=_===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(sx),this.root.sharedNodes.clear()}}}function z8(t){t.updateLayout()}function $8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")ia(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Zo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";op(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else V5(u,n.layoutBox,a)&&ia(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Zo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=hl();kc(h,a,n.layoutBox);const p=hl();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const _=!O5(h);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,j=eo();Bd(j,n.layoutBox,b.layoutBox,S);const k=eo();Bd(k,a,w.layoutBox,S),z5(j,k)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:_,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function I8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function P8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function H8(t){t.clearSnapshot()}function sx(t){t.clearMeasurements()}function U8(t){t.isLayoutDirty=!0,t.updateLayout()}function ox(t){t.isLayoutDirty=!1}function V8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function Y8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ix(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function W8(t){t.resolveTargetDelta()}function F8(t){t.calcProjection()}function X8(t){t.resetSkewAndRotation()}function G8(t){t.removeLeadSnapshot()}function ax(t,n,i){t.translate=gs(n.translate,0,i),t.scale=gs(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function rx(t,n,i,a){t.min=gs(n.min,i.min,a),t.max=gs(n.max,i.max,a)}function q8(t,n,i,a){rx(t.x,n.x,i.x,a),rx(t.y,n.y,i.y,a)}function K8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Q8={duration:.45,ease:[.4,0,.1,1]},lx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),cx=lx("applewebkit/")&&!lx("chrome/")?Math.round:Li;function ux(t){t.min=cx(t.min),t.max=cx(t.max)}function Z8(t){ux(t.x),ux(t.y)}function V5(t,n,i){return t==="position"||t==="preserve-aspect"&&!b8(Z1(n),Z1(i),.2)}function J8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const ej=U5({attachResizeListener:(t,n)=>Rc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xm={current:void 0},Y5=U5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!xm.current){const t=new ej({});t.mount(window),t.setOptions({layoutScroll:!0}),xm.current=t}return xm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ud=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function dx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function tj(...t){return n=>{let i=!1;const a=t.map(c=>{const u=dx(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():dx(t[c],null)}}}}function nj(...t){return y.useCallback(tj(...t),t)}class sj extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function oj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:_}=y.useContext(Ud),g=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=nj(h,g);return y.useInsertionEffect(()=>{const{width:S,height:j,top:k,left:M,right:z,bottom:L}=p.current;if(n||u===!1||!h.current||!S||!j)return;const D=i==="left"?`left: ${M}`:`right: ${z}`,W=a==="bottom"?`bottom: ${L}`:`top: ${k}`;h.current.dataset.motionPopId=d;const U=document.createElement("style");_&&(U.nonce=_);const X=c!=null?c:document.head;return X.appendChild(U),U.sheet&&U.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${j}px !important;
            ${D}px !important;
            ${W}px !important;
          }
        `),()=>{var V;(V=h.current)==null||V.removeAttribute("data-motion-pop-id"),X.contains(U)&&X.removeChild(U)}},[n]),l.jsx(sj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const ij=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:_})=>{const g=Lc(aj),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{g.set(S,!0);for(const j of g.values())if(!j)return;a&&a()},register:S=>(g.set(S,!1),()=>g.delete(S))}),[i,g,a]);return u&&b&&(w={...w}),y.useMemo(()=>{g.forEach((S,j)=>g.set(j,!1))},[i]),y.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=l.jsx(oj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:_,children:t}),l.jsx(zd.Provider,{value:w,children:t})};function aj(){return new Map}function W5(t=!0){const n=y.useContext(zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function fx(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Vd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:_})=>{const[g,x]=W5(d),b=y.useMemo(()=>fx(t),[t]),w=d&&!g?[]:b.map(rd),S=y.useRef(!0),j=y.useRef(b),k=Lc(()=>new Map),M=y.useRef(new Set),[z,L]=y.useState(b),[D,W]=y.useState(b);gp(()=>{S.current=!1,j.current=b;for(let V=0;V<D.length;V++){const J=rd(D[V]);w.includes(J)?(k.delete(J),M.current.delete(J)):k.get(J)!==!0&&k.set(J,!1)}},[D,w.length,w.join("-")]);const U=[];if(b!==z){let V=[...b];for(let J=0;J<D.length;J++){const le=D[J],ie=rd(le);w.includes(ie)||(V.splice(J,0,le),U.push(le))}return u==="wait"&&U.length&&(V=U),W(fx(V)),L(b),null}const{forceRender:X}=y.useContext(_p);return l.jsx(l.Fragment,{children:D.map(V=>{const J=rd(V),le=d&&!g?!1:b===D||w.includes(J),ie=()=>{if(M.current.has(J))return;if(k.has(J))M.current.add(J),k.set(J,!0);else return;let ke=!0;k.forEach($e=>{$e||(ke=!1)}),ke&&(X==null||X(),W(j.current),d&&(x==null||x()),a&&a())};return l.jsx(ij,{isPresent:le,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:_,onExitComplete:le?void 0:ie,anchorX:h,anchorY:p,children:V},J)})})},F5=y.createContext({strict:!1}),hx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let mx=!1;function rj(){if(mx)return;const t={};for(const n in hx)t[n]={isEnabled:i=>hx[n].some(a=>!!i[a])};g5(t),mx=!0}function X5(){return rj(),Xk()}function lj(t){const n=X5();for(const i in t)n[i]={...n[i],...t[i]};g5(n)}const cj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||cj.has(t)}let G5=t=>!Ld(t);function uj(t){typeof t=="function"&&(G5=n=>n.startsWith("on")?!Ld(n):t(n))}try{uj(require("@emotion/is-prop-valid").default)}catch{}function dj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||co(t[c])||(G5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=y.createContext({});function fj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Nc(i)?i:void 0,animate:Nc(a)?a:void 0}}return t.inherit!==!1?n:{}}function hj(t){const{initial:n,animate:i}=fj(t,y.useContext(Yd));return y.useMemo(()=>({initial:n,animate:i}),[px(n),px(i)])}function px(t){return Array.isArray(t)?t.join(" "):t}const Yp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function q5(t,n,i){for(const a in n)!co(n[a])&&!k5(a,i)&&(t[a]=n[a])}function mj({transformTemplate:t},n){return y.useMemo(()=>{const i=Yp();return Up(i,n,t),Object.assign({},i.vars,i.style)},[n])}function pj(t,n){const i=t.style||{},a={};return q5(a,i,t),Object.assign(a,mj(t,n)),a}function _j(t,n){const i={},a=pj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const K5=()=>({...Yp(),attrs:{}});function gj(t,n,i,a){const c=y.useMemo(()=>{const u=K5();return M5(u,n,E5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};q5(u,t.style,t),c.style={...u,...c.style}}return c}const yj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wp(t){return typeof t!="string"||t.includes("-")?!1:!!(yj.indexOf(t)>-1||/[A-Z]/u.test(t))}function xj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Wp(t))?gj:_j)(n,a,c,t),_=dj(n,typeof t=="string",u),g=t!==y.Fragment?{..._,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>co(x)?x.get():x,[x]);return y.createElement(t,{...g,children:b})}function bj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:vj(i,a,c,t),renderState:n()}}function vj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),_=p5(t);n&&_&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Rp(t,b[w]);if(S){const{transitionEnd:j,transition:k,...M}=S;for(const z in M){let L=M[z];if(Array.isArray(L)){const D=g?L.length-1:0;L=L[D]}L!==null&&(c[z]=L)}for(const z in j)c[z]=j[z]}}}return c}const Q5=t=>(n,i)=>{const a=y.useContext(Yd),c=y.useContext(zd),u=()=>bj(t,n,a,c);return i?u():Lc(u)},wj=Q5({scrapeMotionValuesFromProps:Vp,createRenderState:Yp}),Sj=Q5({scrapeMotionValuesFromProps:A5,createRenderState:K5}),Cj=Symbol.for("motionComponentSymbol");function kj(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const Z5=y.createContext({});function cl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function jj(t,n,i,a,c,u){var L,D;const{visualElement:d}=y.useContext(Yd),h=y.useContext(F5),p=y.useContext(zd),_=y.useContext(Ud),g=_.reducedMotion,x=_.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,j=y.useContext(Z5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Mj(b.current,i,c,j);const k=y.useRef(!1);y.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const M=i[s5],z=y.useRef(!!M&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,M))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,M)));return gp(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),z.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!z.current&&S.animationState&&S.animationState.animateChanges(),z.current&&(queueMicrotask(()=>{var W;(W=window.MotionHandoffMarkAsComplete)==null||W.call(window,M)}),z.current=!1),S.enteringChildren=void 0)}),S}function Mj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:_,layoutAnchor:g,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:J5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&cl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:_,layoutAnchor:g})}function J5(t){if(t)return t.options.allowProjection!==!1?t.projection:J5(t.parent)}function bm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var _,g;a&&lj(a);const u=i?i==="svg":Wp(t),d=u?Sj:wj;function h(x,b){let w;const S={...y.useContext(Ud),...x,layoutId:Tj(x)},{isStatic:j}=S,k=hj(x),M=d(x,j);if(!j&&typeof window<"u"){Ej();const z=Aj(S);w=z.MeasureLayout,k.visualElement=jj(t,M,S,c,z.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:k,children:[w&&k.visualElement?l.jsx(w,{visualElement:k.visualElement,...S}):null,xj(t,x,kj(M,k.visualElement,b),M,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(g=(_=t.displayName)!=null?_:t.name)!=null?g:""})`}`;const p=y.forwardRef(h);return p[Cj]=t,p}function Tj({layoutId:t}){const n=y.useContext(_p).id;return n&&t!==void 0?n+"-"+t:t}function Ej(t,n){y.useContext(F5).strict}function Aj(t){const n=X5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Dj(t,n){if(typeof Proxy>"u")return bm;const i=new Map,a=(u,d)=>bm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,bm(d,void 0,t,n)),i.get(d))})}const Nj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Wp(t))?new D5(n):new j5(n,{allowProjection:t!==y.Fragment})};class Rj extends or{constructor(n){super(n),n.animationState||(n.animationState=m8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Bj=0;class Lj extends or{constructor(){super(...arguments),this.id=Bj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Dr(this.node,d,h);if(p){const{transition:_,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Oj={animation:{Feature:Rj},exit:{Feature:Lj}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const zj=t=>n=>Ip(n)&&t(n,Ic(n));function jc(t,n,i,a){return Rc(t,n,zj(i),a)}const e2=({current:t})=>t?t.ownerDocument.defaultView:null,_x=(t,n)=>Math.abs(t-n);function $j(t,n){const i=_x(t.x,n.x),a=_x(t.y,n.y);return Math.sqrt(i**2+a**2)}const gx=new Set(["auto","scroll"]);class t2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const w=vm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,j=$j(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!j)return;const{point:k}=w,{timestamp:M}=Eo;this.history.push({...k,timestamp:M});const{onStart:z,onMove:L}=this.handlers;S||(z&&z(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ld(S,this.transformPagePoint),ss.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:j,onSessionEnd:k,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=vm(w.type==="pointercancel"?this.lastMoveEventInfo:ld(S,this.transformPagePoint),this.history);this.startEvent&&j&&j(w,z),k&&k(w,z)},!Ip(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),_=ld(p,this.transformPagePoint),{point:g}=_,{timestamp:x}=Eo;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,vm(_,this.history)),this.removeListeners=Oc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(gx.has(a.overflowX)||gx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),ss.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ma(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function yx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function vm({point:t},n){return{point:t,delta:yx(t,n2(n)),offset:yx(t,Ij(n)),velocity:Pj(n,.1)}}function Ij(t){return t[0]}function n2(t){return t[t.length-1]}function Pj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=n2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ui(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ui(n)*2&&(a=t[1]);const u=Bi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Hj(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?gs(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?gs(i,t,a.max):Math.min(t,i)),t}function xx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function Uj(t,{top:n,left:i,bottom:a,right:c}){return{x:xx(t.x,i,c),y:xx(t.y,n,a)}}function bx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function Vj(t,n){return{x:bx(t.x,n.x),y:bx(t.y,n.y)}}function Yj(t,n){let i=.5;const a=Zo(t),c=Zo(n);return c>a?i=gl(n.min,n.max-a,t.min):a>c&&(i=gl(t.min,t.max-c,n.min)),ca(0,1,i)}function Wj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ip=.35;function Fj(t=ip){return t===!1?t=0:t===!0&&(t=ip),{x:vx(t,"left","right"),y:vx(t,"top","bottom")}}function vx(t,n,i){return{min:wx(t,n),max:wx(t,i)}}function wx(t,n){return typeof t=="number"?t:t[n]||0}const Xj=new WeakMap;class Gj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=eo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:j}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ck(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ia(M=>{let z=this.getAxisMotionValue(M).get()||0;if(la.test(z)){const{projection:L}=this.visualElement;if(L&&L.layout){const D=L.layout.layoutBox[M];D&&(z=Zo(D)*(parseFloat(z)/100))}}this.originPoint[M]=z}),j&&ss.update(()=>j(x,b),!1,!0),Km(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:j,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:M}=b;if(S&&this.currentDirection===null){this.currentDirection=Kj(M),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),k&&ss.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},_=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new t2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:_},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:e2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&ss.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Hj(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&cl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Uj(a.layoutBox,n):this.constraints=!1,this.elastic=Fj(i),c!==this.constraints&&!cl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&ia(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Wj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!cl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=Qk(a,c.root,this.visualElement.getTransformPagePoint());let d=Vj(c.layout.layoutBox,u);if(i){const h=i(Gk(d));this.hasMutatedConstraints=!!h,h&&(d=b5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},_=ia(g=>{if(!cd(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,S)});return Promise.all(_).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Km(this.visualElement,n),a.start(Np(n,a,0,i,this.visualElement,!1))}stopAnimation(){ia(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){ia(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-gs(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!cl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};ia(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Yj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),ia(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:_}=this.constraints[d];h.set(gs(p,_,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Xj.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",_=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=_.target,w=b!==n&&Ak(b);g&&x&&!w&&this.start(_)});let a;const c=()=>{const{dragConstraints:_}=this.getProps();cl(_)&&_.current&&(this.constraints=this.resolveRefConstraints(),a||(a=qj(n,_.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ss.read(c);const h=Rc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:_,hasLayoutChanged:g})=>{this.isDragging&&g&&(ia(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=_[x].translate,b.set(b.get()+_[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ip,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Sx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function qj(t,n,i){const a=A1(t,Sx(i)),c=A1(n,Sx(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function Kj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class Qj extends or{constructor(n){super(n),this.removeGroupControls=Li,this.removeListeners=Li,this.controls=new Gj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Li}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const wm=t=>(n,i)=>{t&&ss.update(()=>t(n,i),!1,!0)};class Zj extends or{constructor(){super(...arguments),this.removePointerDownListener=Li}onPointerDown(n){this.session=new t2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:e2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:wm(n),onStart:wm(i),onMove:wm(a),onEnd:(u,d)=>{delete this.session,c&&ss.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Sm=!1;class Jj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Sm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Sm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||ss.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),$p.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Sm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function s2(t){const[n,i]=W5(),a=y.useContext(_p);return l.jsx(Jj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(Z5),isPresent:n,safeToRemove:i})}const e7={pan:{Feature:Zj},drag:{Feature:Qj,ProjectionNode:Y5,MeasureLayout:s2}};function Cx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&ss.postRender(()=>u(n,Ic(n)))}class t7 extends or{mount(){const{current:n}=this.node;n&&(this.unmount=jk(n,(i,a)=>(Cx(this.node,a,"Start"),c=>Cx(this.node,c,"End"))))}unmount(){}}class n7 extends or{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(Rc(this.node.current,"focus",()=>this.onFocus()),Rc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function kx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&ss.postRender(()=>u(n,Ic(n)))}class s7 extends or{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Nk(n,(c,u)=>(kx(this.node,u,"Start"),(d,{success:h})=>kx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ap=new WeakMap,Cm=new WeakMap,o7=t=>{const n=ap.get(t.target);n&&n(t)},i7=t=>{t.forEach(o7)};function a7({root:t,...n}){const i=t||document;Cm.has(i)||Cm.set(i,{});const a=Cm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(i7,{root:t,...n})),a[c]}function r7(t,n,i){const a=a7(n);return ap.set(t,i),a.observe(t),()=>{ap.delete(t),a.unobserve(t)}}const l7={some:0,all:1};class c7 extends or{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:l7[c]},h=_=>{const{isIntersecting:g}=_;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=g?x:b;w&&w(_)};this.stopObserver=r7(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(u7(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function u7({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const d7={inView:{Feature:c7},tap:{Feature:s7},focus:{Feature:n7},hover:{Feature:t7}},f7={layout:{ProjectionNode:Y5,MeasureLayout:s2}},h7={...Oj,...d7,...e7,...f7},ci=Dj(h7,Nj);function rp(t){const n=Lc(()=>sr(t)),{isStatic:i}=y.useContext(Ud);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function o2(t,n){const i=rp(n()),a=()=>i.set(n());return a(),gp(()=>{const c=()=>ss.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Ma(a)}}),i}function m7(t){Cc.current=[],t();const n=o2(Cc.current,t);return Cc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return m7(t);const u=typeof n=="function"?n:Hk(n,i,a),d=Array.isArray(t)?jx(t,u):jx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function jx(t,n){const i=Lc(()=>[]);return o2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Fp(t){return typeof t=="object"&&!Array.isArray(t)}function i2(t,n,i,a){return t==null?[]:typeof t=="string"&&Fp(n)?zp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function p7(t,n,i){return t*(n+1)}function Mx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function _7(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(_l(t,c),a--)}}function g7(t,n,i,a,c,u){_7(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:gs(c,u,a[d]),easing:jb(i,d)})}function y7(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function x7(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const b7="easeInOut";function v7(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},_=new Map;let g=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){_.set(S,x);continue}else if(!Array.isArray(S)){_.set(S.name,Mx(x,S.at,g,_));continue}let[j,k,M={}]=S;M.at!==void 0&&(x=Mx(x,M.at,g,_));let z=0;const L=(D,W,U,X=0,V=0)=>{const J=w7(D),{delay:le=0,times:ie=Ub(J),type:ke=n.type||"keyframes",repeat:$e,repeatType:Z,repeatDelay:ue=0,...I}=W;let{ease:ne=n.ease||"easeOut",duration:F}=W;const K=typeof le=="function"?le(X,V):le,ge=J.length,B=Ap(ke)?ke:c==null?void 0:c[ke||"keyframes"];if(ge<=2&&B){let Ee=100;if(ge===2&&k7(J)){const et=J[1]-J[0];Ee=Math.abs(et)}const Oe={...n,...I};F!==void 0&&(Oe.duration=ui(F));const Ae=$b(Oe,Ee,B);ne=Ae.ease,F=Ae.duration}F!=null||(F=u);const ae=x+K;ie.length===1&&ie[0]===0&&(ie[1]=1);const re=ie.length-J.length;if(re>0&&Hb(ie,re),J.length===1&&J.unshift(null),$e){F=p7(F,$e);const Ee=[...J],Oe=[...ie];ne=Array.isArray(ne)?[...ne]:[ne];const Ae=[...ne];for(let et=0;et<$e;et++){J.push(...Ee);for(let ft=0;ft<Ee.length;ft++)ie.push(Oe[ft]+(et+1)),ne.push(ft===0?"linear":jb(Ae,ft-1))}y7(ie,$e)}const de=ae+F;g7(U,J,ne,ie,ae,de),z=Math.max(K+F,z),b=Math.max(de,b)};if(co(j)){const D=Tx(j,h);L(k,M,Ex("default",D))}else{const D=i2(j,k,a,p),W=D.length;for(let U=0;U<W;U++){k=k,M=M;const X=D[U],V=Tx(X,h);for(const J in k)L(k[J],S7(M,J),Ex(J,V),U,W)}}g=x,x+=z}return h.forEach((w,S)=>{for(const j in w){const k=w[j];k.sort(x7);const M=[],z=[],L=[];for(let X=0;X<k.length;X++){const{at:V,value:J,easing:le}=k[X];M.push(J),z.push(gl(0,b,V)),L.push(le||"easeOut")}z[0]!==0&&(z.unshift(0),M.unshift(M[0]),L.unshift(b7)),z[z.length-1]!==1&&(z.push(1),M.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const D=d.get(S);D.keyframes[j]=M;const{type:W,...U}=n;D.transition[j]={...U,duration:b,ease:L,times:z,...i}}}),d}function Tx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Ex(t,n){return n[t]||(n[t]=[]),n[t]}function w7(t){return Array.isArray(t)?t:[t]}function S7(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const C7=t=>typeof t=="number",k7=t=>t.every(C7);function j7(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!m5(t)?new D5(n):new j5(n);i.mount(t),Dc.set(t,i)}function M7(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new o8(n);i.mount(t),Dc.set(t,i)}function T7(t,n){return co(t)||typeof t=="number"||typeof t=="string"&&!Fp(n)}function a2(t,n,i,a){const c=[];if(T7(t,n))c.push(P5(t,Fp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=i2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],_=p instanceof Element?j7:M7;Dc.has(p)||_(p);const g=Dc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Lp(g,{...n,transition:x},{}))}}return c}function E7(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=sr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return v7(c,n,i,{spring:Ac}).forEach(({keyframes:d,transition:h},p)=>{a.push(...a2(p,d,h))}),a}function A7(t){return Array.isArray(t)&&t.some(Array.isArray)}function D7(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(A7(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=E7(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=a2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const _=new X3(h);return p&&_.finished.then(p),n&&(n.animations.push(_),_.finished.then(()=>{_l(n.animations,_)})),_}return a}const Ax=D7();var N7=Object.freeze({}),R7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const j=w.slice(0,-7),k=d.get(j);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const _={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,_),this.snapshots.set(t,{...p});const g=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(g[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:N7}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),_=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:_});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:_})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:_});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const _=h.options[0],g=typeof _=="string"?_:_.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},Jt=new R7;function B7(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const _=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(Jt.registerPanel(c,t,u.current,p.current),()=>Jt.unregisterPanel(c)),[c,t]);const g=y.useRef(!1);y.useEffect(()=>{if(!g.current){g.current=!0;return}Jt.updatePanel(c,t,u.current,p.current)},[c,t,d,_]),y.useEffect(()=>Jt.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>Jt.subscribe(c,b),()=>Jt.getValues(c),()=>Jt.getValues(c));return r2(n,x,"")}function r2(t,n,i){var c,u,d,h,p,_,g,x,b,w;const a={};for(const[S,j]of Object.entries(t)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[S]=(c=n[k])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[S]=(u=n[k])!=null?u:j;else if(L7(j)||O7(j))a[S]=(d=n[k])!=null?d:j;else if(z7(j))a[S]=(h=n[k])!=null?h:j;else if($7(j)){const M=(p=j.default)!=null?p:H7(j.options);a[S]=(_=n[k])!=null?_:M}else I7(j)?a[S]=(x=(g=n[k])!=null?g:j.default)!=null?x:"#000000":P7(j)?a[S]=(w=(b=n[k])!=null?b:j.default)!=null?w:"":typeof j=="object"&&j!==null&&(a[S]=r2(j,n,k))}return a}function Cl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function L7(t){return Cl(t,"spring")}function O7(t){return Cl(t,"easing")}function z7(t){return Cl(t,"action")}function $7(t){return Cl(t,"select")&&"options"in t&&Array.isArray(t.options)}function I7(t){return Cl(t,"color")}function P7(t){return Cl(t,"text")}function H7(t){const n=t[0];return typeof n=="string"?n:n.value}function lp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(lp(n)))}function mc(t,n){var d,h,p,_;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(_=t.step)!=null?_:1}function pc(t,n,i,a,c){var _,g;const u=Jt.getValue(t,n),d=(_=i.min)!=null?_:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));Jt.updateValue(t,n,Sd(p,a))}function U7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function km(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function l2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=l2(i.children,n);if(a)return a}}return null}var fd=4;function V7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function Y7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=V7(n);return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function W7(t){return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function c2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var u2=y.createContext({activePanelId:null,activePath:null});function F7({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var _;for(const g of a.current){const x=Jt.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==g||((_=S.interaction)!=null?_:"scroll")!==p)continue;const j=l2(b.controls,w);if(j&&j.type==="slider")return{panelId:b.id,path:w,control:j,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=j=>{if(dd())return;const k=j.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const D=h("scroll")||h("drag")||h("move");if(D&&D.control.type==="slider"){j.preventDefault();const W=k==="arrowright"||k==="arrowup"?1:-1,U=mc(D.control,D.shortcut);pc(D.panelId,D.path,D.control,U,W);return}}const M=a.current.has(k);a.current.add(k);const z=km(j),L=Jt.resolveShortcutTarget(k,z);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!M&&L.control.type==="toggle")){const D=Jt.getValue(L.panelId,L.path);Jt.updateValue(L.panelId,L.path,!D)}M||(u.current=null,d.current=0)},_=j=>{const k=j.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let M=!1;for(const z of a.current){const L=km(j),D=Jt.resolveShortcutTarget(z,L);if(D){i({activePanelId:D.panelId,activePath:D.path}),M=!0;break}}M||i({activePanelId:null,activePath:null})}},g=j=>{var z,L;if(dd())return;const k=km(j);if(a.current.size>0)for(const D of a.current){const W=Jt.resolveShortcutTarget(D,k);if(!W)continue;const{panelId:U,path:X,control:V}=W;if(((L=(z=V.shortcut)==null?void 0:z.interaction)!=null?L:"scroll")!=="scroll"||V.type!=="slider")continue;j.preventDefault();const le=mc(V,V.shortcut),ie=j.deltaY>0?-1:1;pc(U,X,V,le,ie);return}const M=Jt.resolveScrollOnlyTargets();for(const{panelId:D,path:W,control:U,shortcut:X}of M){if(U.type!=="slider")continue;j.preventDefault();const V=mc(U,X),J=j.deltaY>0?-1:1;pc(D,W,U,V,J);return}},x=j=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=j=>{if(dd()||a.current.size===0)return;if(c.current){const M=h("drag");if(M&&u.current!==null){const z=j.clientX-u.current;u.current=j.clientX,d.current+=z;const L=mc(M.control,M.shortcut),D=Math.trunc(d.current/fd);D!==0&&(d.current-=D*fd,pc(M.panelId,M.path,M.control,L,D))}return}const k=h("move");if(k){if(u.current===null){u.current=j.clientX;return}const M=j.clientX-u.current;u.current=j.clientX,d.current+=M;const z=mc(k.control,k.shortcut),L=Math.trunc(d.current/fd);L!==0&&(d.current-=L*fd,pc(k.panelId,k.path,k.control,z,L))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",_),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",_),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(u2.Provider,{value:n,children:t})}var Xp="M6 9.5L12 15.5L18 9.5",X7="M5 12.75L10 19L19 5",jm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},G7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],q7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Dx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Od({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[_,g]=y.useState(!i),x=y.useRef(null),[b,w]=y.useState(void 0),[S,j]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const z=()=>j(window.innerHeight);return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[a]),y.useEffect(()=>{const z=x.current;if(!z)return;const L=new ResizeObserver(()=>{if(h){const D=z.offsetHeight;w(W=>W===D?W:D)}});return L.observe(z),()=>L.disconnect()},[h]);const k=()=>{if(c&&a)return;const z=!h;p(z),g(!z),u==null||u(z)},M=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Dx.path,fill:"currentColor"}),Dx.circles.map((z,L)=>l.jsx("circle",{cx:z.cx,cy:z.cy,r:z.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(ci.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Xp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:z=>z.stopPropagation(),children:d})]}),l.jsx(Vd,{initial:!1,children:h&&l.jsx(ci.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:M});const z=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ci.div,{className:"dialkit-panel-inner",style:z,onClick:h?void 0:k,"data-collapsed":_,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:M})}return M}var K7=3,Q7=32,Z7=200,J7=8;function Po({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var ot;const _=y.useRef(null),g=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,j]=y.useState(!1),[k,M]=y.useState(!1),[z,L]=y.useState(!1),[D,W]=y.useState(!1),[U,X]=y.useState(!1),[V,J]=y.useState(!1),[le,ie]=y.useState(""),ke=y.useRef(null),$e=y.useRef(null),Z=y.useRef(!0),ue=y.useRef(null),I=y.useRef(null),ne=y.useRef(1),F=(n-a)/(c-a)*100,K=S||z,ge=rp(F),B=ud(ge,H=>`${H}%`),ae=ud(ge,H=>`max(5px, calc(${H}% - 9px))`),re=rp(0),de=ud(re,H=>`calc(100% + ${Math.abs(H)}px)`),Ee=ud(re,H=>H<0?H:0);y.useEffect(()=>{!S&&!ue.current&&ge.jump(F)},[F,S,ge]);const Oe=y.useCallback(H=>{const te=I.current;if(!te)return n;const ve=(H-te.left)/ne.current,Qe=_.current?_.current.offsetWidth:te.width,Ge=Math.max(0,Math.min(1,ve/Qe)),Re=a+Ge*(c-a);return Math.max(a,Math.min(c,Re))},[a,c,n]),Ae=y.useCallback(H=>(H-a)/(c-a)*100,[a,c]),et=y.useCallback((H,te)=>{const me=I.current;if(!me)return 0;const ve=te<0?me.left-H:H-me.right,Qe=Math.max(0,ve-Q7);return te*J7*Math.sqrt(Math.min(Qe/Z7,1))},[]),ft=y.useCallback(H=>{if(!V&&(H.preventDefault(),H.target.setPointerCapture(H.pointerId),$e.current={x:H.clientX,y:H.clientY},Z.current=!0,j(!0),_.current)){I.current=_.current.getBoundingClientRect();const te=_.current.offsetWidth;ne.current=I.current.width/te}},[V]),zt=y.useCallback(H=>{if(!S||!$e.current)return;const te=H.clientX-$e.current.x,me=H.clientY-$e.current.y,ve=Math.sqrt(te*te+me*me);if(Z.current&&ve>K7&&(Z.current=!1,M(!0)),!Z.current){const Qe=I.current;Qe&&(H.clientX<Qe.left?re.jump(et(H.clientX,-1)):H.clientX>Qe.right?re.jump(et(H.clientX,1)):re.jump(0));const Ge=Oe(H.clientX),Re=Ae(Ge);ue.current&&(ue.current.stop(),ue.current=null),ge.jump(Re),i(Sd(Ge,u))}},[S,Oe,Ae,i,ge,re,et]),gt=y.useCallback(H=>{if(S){if(Z.current){const te=Oe(H.clientX),ve=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((te-a)/u)*u)):U7(te,a,c),Qe=Ae(ve);ue.current&&ue.current.stop(),ue.current=Ax(ge,Qe,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{ue.current=null}}),i(Sd(ve,u))}re.get()!==0&&Ax(re,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),M(!1),$e.current=null}},[S,Oe,Ae,i,a,c,ge,re]);y.useEffect(()=>(D&&!V&&!U?ke.current=setTimeout(()=>{X(!0)},800):!D&&!V&&(ke.current&&(clearTimeout(ke.current),ke.current=null),X(!1)),()=>{ke.current&&clearTimeout(ke.current)}),[D,V,U]),y.useEffect(()=>{V&&x.current&&(x.current.focus(),x.current.select())},[V]);const pt=H=>{ie(H.target.value)},qe=()=>{const H=parseFloat(le);if(!isNaN(H)){const te=Math.max(a,Math.min(c,H));i(Sd(te,u))}J(!1),W(!1),X(!1)},Yt=H=>{U&&(H.stopPropagation(),H.preventDefault(),J(!0),ie(n.toFixed(lp(u))))},Kt=H=>{H.key==="Enter"?qe():H.key==="Escape"&&(J(!1),W(!1))},Ze=()=>{qe()},At=n.toFixed(lp(u)),Y=8,je=10,We=10;let Ue=30,it=78;const Ne=(ot=_.current)==null?void 0:ot.offsetWidth;Ne&&Ne>0&&(b.current&&(Ue=(je+b.current.offsetWidth+Y)/Ne*100),w.current&&(it=(Ne-We-w.current.offsetWidth-Y)/Ne*100));const st=F<Ue||F>it,at=K?st?.1:k?.9:.5:0,yt=(c-a)/u,xt=yt<=10?Array.from({length:yt-1},(H,te)=>{const me=(te+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${me}%`}},te)}):Array.from({length:9},(H,te)=>{const me=(te+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${me}%`}},te)});return l.jsx("div",{ref:_,className:"dialkit-slider-wrapper",children:l.jsxs(ci.div,{ref:g,className:`dialkit-slider ${K?"dialkit-slider-active":""}`,onPointerDown:ft,onPointerMove:zt,onPointerUp:gt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:de,x:Ee},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:xt}),l.jsx(ci.div,{className:"dialkit-slider-fill",style:{width:B}}),l.jsx(ci.div,{className:"dialkit-slider-handle",style:{left:ae,y:"-50%"},animate:{opacity:at,scaleX:K?1:.25,scaleY:K&&st?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:Y7(h)})]}),V?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:le,onChange:pt,onKeyDown:Kt,onBlur:Ze,onClick:H=>H.stopPropagation(),onMouseDown:H=>H.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${U?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>W(!0),onMouseLeave:()=>W(!1),onClick:Yt,onMouseDown:H=>U&&H.stopPropagation(),style:{cursor:U?"text":"default"},children:At})]})})}function Gp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const _=a.current;if(!_)return;const g=_.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(_=>{const g=n===_.value;return l.jsx("button",{onClick:()=>i(_.value),className:"dialkit-segmented-button","data-active":String(g),children:_.label},_.value)})]})}function eM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:W7(a)})]}),l.jsx(Gp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function tM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const _=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-t*(h-_),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function d2({spring:t,isSimpleMode:n}){var j,k,M,z,L;let c,u,d;if(n){const D=(j=t.visualDuration)!=null?j:.3,W=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/D,c=Math.pow(c,2),u=2*(1-W)*Math.sqrt(c*d)}else c=(M=t.stiffness)!=null?M:400,u=(z=t.damping)!=null?z:17,d=(L=t.mass)!=null?L:1;const h=2,p=tM(c,u,d,h),_=p.map(([,D])=>D),g=Math.min(..._),b=Math.max(..._)-g,w=p.map(([D,W],U)=>{const X=D/h*256,J=140-((W-g)/(b||1)*140*.6+140*.2);return`${U===0?"M":"L"} ${X} ${J}`}).join(" "),S=[];for(let D=1;D<4;D++){const W=64*D,U=140/4*D;S.push(l.jsx("line",{x1:W,y1:0,x2:W,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${D}`),l.jsx("line",{x1:0,y1:U,x2:256,y2:U,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${D}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function nM({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,x,b,w,S;const u=y.useSyncExternalStore(j=>Jt.subscribe(t,j),()=>Jt.getSpringMode(t,n),()=>Jt.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{Jt.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},_=(j,k)=>{if(d){const{stiffness:M,damping:z,mass:L,...D}=a;c({...D,[j]:k})}else{const{visualDuration:M,bounce:z,...L}=a;c({...L,[j]:k})}};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(d2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Gp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:j=>_("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>_("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>_("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:j=>_("damping",j),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:j=>_("mass",j),min:.1,max:10,step:.1})]})]})})}function sM({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),_=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${_.x} ${_.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function oM({panelId:t,path:n,label:i,value:a,onChange:c}){var S,j,k,M,z;const u=y.useSyncExternalStore(L=>Jt.subscribe(t,L),()=>Jt.getTransitionMode(t,n),()=>Jt.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const _=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=L=>{Jt.updateTransitionMode(t,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,D)=>{if(h){const{stiffness:W,damping:U,mass:X,...V}=_;c({...V,[L]:D})}else{const{visualDuration:W,bounce:U,...X}=_;c({...X,[L]:D})}},w=(L,D)=>{const W=[...g.ease];W[L]=D,c({...g,ease:W})};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(sM,{easing:g}):l.jsx(d2,{spring:_,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Gp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"x1",value:g.ease[0],onChange:L=>w(0,L),min:0,max:1,step:.01}),l.jsx(Po,{label:"y1",value:g.ease[1],onChange:L=>w(1,L),min:-1,max:2,step:.01}),l.jsx(Po,{label:"x2",value:g.ease[2],onChange:L=>w(2,L),min:0,max:1,step:.01}),l.jsx(Po,{label:"y2",value:g.ease[3],onChange:L=>w(3,L),min:-1,max:2,step:.01}),l.jsx(Po,{label:"Duration",value:g.duration,onChange:L=>c({...g,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(aM,{ease:g.ease,onChange:L=>c({...g,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(S=_.visualDuration)!=null?S:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(j=_.bounce)!=null?j:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(k=_.stiffness)!=null?k:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(M=_.damping)!=null?M:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(z=_.mass)!=null?z:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Nx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function iM(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function aM({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(Nx(t)),a(!0)},h=()=>{const _=iM(c);_&&n(_),a(!1)},p=_=>{_.key==="Enter"&&_.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Nx(t),onChange:_=>u(_.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function rM({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function lM(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function cM(t){return t.map(n=>typeof n=="string"?{value:n,label:lM(n)}:n)}function uM({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,_]=y.useState(null),[g,x]=y.useState(null),b=cM(i),w=b.find(k=>k.value===n),S=y.useCallback(()=>{const k=d.current;if(!k)return;const M=k.getBoundingClientRect(),z=8+b.length*36,L=window.innerHeight-M.bottom-4,D=L<z&&M.top>L;x({top:D?M.top-4:M.bottom+4,left:M.left,width:M.width,above:D})},[b.length]);return y.useEffect(()=>{var M;const k=(M=d.current)==null?void 0:M.closest(".dialkit-root");_(k!=null?k:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const k=M=>{const z=M.target;d.current&&!d.current.contains(z)&&h.current&&!h.current.contains(z)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=w==null?void 0:w.label)!=null?j:n}),l.jsx(ci.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Xp})})]})]}),p&&Bc.createPortal(l.jsx(Vd,{children:c&&g&&l.jsx(ci.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(k=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var dM=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function fM({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),dM.test(u)?i(u):d(n)}function _(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:_,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?hM(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function hM(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function mM({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,_]=y.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(M=>M.id===i),b=y.useCallback(()=>{var z;if(!g)return;const M=(z=d.current)==null?void 0:z.getBoundingClientRect();M&&_({top:M.bottom+4,left:M.left,width:M.width}),u(!0)},[g]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const M=z=>{var D,W;const L=z.target;(D=d.current)!=null&&D.contains(L)||(W=h.current)!=null&&W.contains(L)||w()};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c,w]);const j=M=>{M?Jt.loadPreset(t,M):Jt.clearActivePreset(t),w()},k=(M,z)=>{M.stopPropagation(),Jt.deletePreset(t,z)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ci.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Xp})})]}),Bc.createPortal(l.jsx(Vd,{children:c&&l.jsxs(ci.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(M=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(M.id===i),onClick:()=>j(M.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:M.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:z=>k(z,M.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:q7.map((z,L)=>l.jsx("path",{d:z},L))})})]},M.id))]})}),document.body)]})}function pM({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(u2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(k=>Jt.subscribe(t.id,k),()=>Jt.getValues(t.id),()=>Jt.getValues(t.id)),_=Jt.getPresets(t.id),g=Jt.getActivePresetId(t.id),x=()=>{const k=_.length+2;Jt.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),M=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(M),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var z,L,D;const M=p[k.path];switch(k.type){case"slider":return l.jsx(Po,{label:k.label,value:M,onChange:W=>Jt.updateValue(t.id,k.path,W),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return l.jsx(eM,{label:k.label,checked:M,onChange:W=>Jt.updateValue(t.id,k.path,W),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return l.jsx(nM,{panelId:t.id,path:k.path,label:k.label,spring:M,onChange:W=>Jt.updateValue(t.id,k.path,W)},k.path);case"transition":return l.jsx(oM,{panelId:t.id,path:k.path,label:k.label,value:M,onChange:W=>Jt.updateValue(t.id,k.path,W)},k.path);case"folder":return l.jsx(Od,{title:k.label,defaultOpen:(z=k.defaultOpen)!=null?z:!0,children:(L=k.children)==null?void 0:L.map(w)},k.path);case"text":return l.jsx(rM,{label:k.label,value:M,onChange:W=>Jt.updateValue(t.id,k.path,W),placeholder:k.placeholder},k.path);case"select":return l.jsx(uM,{label:k.label,value:M,options:(D=k.options)!=null?D:[],onChange:W=>Jt.updateValue(t.id,k.path,W)},k.path);case"color":return l.jsx(fM,{label:k.label,value:M,onChange:W=>Jt.updateValue(t.id,k.path,W)},k.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>Jt.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),j=l.jsxs(l.Fragment,{children:[l.jsx(ci.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:G7.map((k,M)=>l.jsx("path",{d:k},M))})}),l.jsx(mM,{panelId:t.id,presets:_,activePresetId:g,onAdd:x}),l.jsx(ci.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Vd,{initial:!1,mode:"wait",children:a?l.jsx(ci.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:X7})},"check"):l.jsxs(ci.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:jm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:jm.sparkle,fill:"currentColor"}),l.jsx("path",{d:jm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Od,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:S()})})}var _M=typeof process<"u"?!1:!(typeof import.meta<"u");function gM({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=_M}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),_=i==="inline",g=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),j=y.useRef(null),k=y.useRef(!1),M=y.useRef(null),z=y.useRef(!1);y.useEffect(()=>(p(!0),d(Jt.getPanels()),Jt.subscribeGlobal(()=>{d(Jt.getPanels())})),[]),y.useEffect(()=>{if(!g.current||_)return;const V=new MutationObserver(()=>{var ie;const J=(ie=g.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!J)return;if(J.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const ke=x.x+21,$e=window.innerWidth/2;S(ke<$e?"top-left":"top-right")}else S(t);b(null)}});return V.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>V.disconnect()},[_,x,t]);const L=y.useCallback(V=>{var ie;const J=(ie=g.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!J||J.getAttribute("data-collapsed")!=="true")return;const le=g.current.getBoundingClientRect();M.current={pointerX:V.clientX,pointerY:V.clientY,elX:le.left,elY:le.top},z.current=!1,k.current=!0,V.target.setPointerCapture(V.pointerId)},[]),D=y.useCallback(V=>{if(!k.current||!M.current)return;const J=V.clientX-M.current.pointerX,le=V.clientY-M.current.pointerY;!z.current&&Math.abs(J)+Math.abs(le)<4||(z.current=!0,b({x:M.current.elX+J,y:M.current.elY+le}))},[]),W=y.useCallback(V=>{var J;if(k.current&&(k.current=!1,M.current=null,z.current)){V.stopPropagation();const le=(J=g.current)==null?void 0:J.querySelector(".dialkit-panel-inner");if(le){const ie=ke=>{ke.stopPropagation()};le.addEventListener("click",ie,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const U=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,X=l.jsx(F7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":_||x?void 0:w,"data-mode":i,style:U,onPointerDown:_?void 0:L,onPointerMove:_?void 0:D,onPointerUp:_?void 0:W,children:u.map(V=>l.jsx(pM,{panel:V,defaultOpen:_||n,inline:_},V.id))})})});return _?X:Bc.createPortal(X,document.body)}const yM=()=>(B7("Git Visualizer",{preview:[1,0,1]}),null),xM=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(yM,{}),l.jsx(gM,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(bC,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});$v.createRoot(document.getElementById("root")).render(l.jsx(xM,{children:l.jsx(sS,{})}));

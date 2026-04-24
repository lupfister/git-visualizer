(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oh={exports:{}},nc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function Tv(){if(J0)return nc;J0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return nc.Fragment=n,nc.jsx=i,nc.jsxs=i,nc}var ey;function Ev(){return ey||(ey=1,Oh.exports=Tv()),Oh.exports}var l=Ev(),zh={exports:{}},sc={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function Av(){return ty||(ty=1,(function(t){function n(O,oe){var F=O.length;O.push(oe);e:for(;0<F;){var Q=F-1>>>1,pe=O[Q];if(0<c(pe,oe))O[Q]=oe,O[F]=pe,F=Q;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var oe=O[0],F=O.pop();if(F!==oe){O[0]=F;e:for(var Q=0,pe=O.length,N=pe>>>1;Q<N;){var re=2*(Q+1)-1,ie=O[re],de=re+1,Te=O[de];if(0>c(ie,F))de<pe&&0>c(Te,ie)?(O[Q]=Te,O[de]=F,Q=de):(O[Q]=ie,O[re]=F,Q=re);else if(de<pe&&0>c(Te,F))O[Q]=Te,O[de]=F,Q=de;else break e}}return oe}function c(O,oe){var F=O.sortIndex-oe.sortIndex;return F!==0?F:O.id-oe.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,w=!1,S=!1,k=!1,C=!1,j=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function A(O){for(var oe=i(g);oe!==null;){if(oe.callback===null)a(g);else if(oe.startTime<=O)a(g),oe.sortIndex=oe.expirationTime,n(p,oe);else break;oe=i(g)}}function P(O){if(k=!1,A(O),!S)if(i(p)!==null)S=!0,V||(V=!0,Ce());else{var oe=i(g);oe!==null&&fe(P,oe.startTime-O)}}var V=!1,q=-1,U=5,J=-1;function ce(){return C?!0:!(t.unstable_now()-J<U)}function le(){if(C=!1,V){var O=t.unstable_now();J=O;var oe=!0;try{e:{S=!1,k&&(k=!1,R(q),q=-1),w=!0;var F=b;try{t:{for(A(O),x=i(p);x!==null&&!(x.expirationTime>O&&ce());){var Q=x.callback;if(typeof Q=="function"){x.callback=null,b=x.priorityLevel;var pe=Q(x.expirationTime<=O);if(O=t.unstable_now(),typeof pe=="function"){x.callback=pe,A(O),oe=!0;break t}x===i(p)&&a(p),A(O)}else a(p);x=i(p)}if(x!==null)oe=!0;else{var N=i(g);N!==null&&fe(P,N.startTime-O),oe=!1}}break e}finally{x=null,b=F,w=!1}oe=void 0}}finally{oe?Ce():V=!1}}}var Ce;if(typeof B=="function")Ce=function(){B(le)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,ee=Ae.port2;Ae.port1.onmessage=le,Ce=function(){ee.postMessage(null)}}else Ce=function(){j(le,0)};function fe(O,oe){q=j(function(){O(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(O){switch(b){case 1:case 2:case 3:var oe=3;break;default:oe=b}var F=b;b=oe;try{return O()}finally{b=F}},t.unstable_requestPaint=function(){C=!0},t.unstable_runWithPriority=function(O,oe){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var F=b;b=O;try{return oe()}finally{b=F}},t.unstable_scheduleCallback=function(O,oe,F){var Q=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,O){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=F+pe,O={id:_++,callback:oe,priorityLevel:O,startTime:F,expirationTime:pe,sortIndex:-1},F>Q?(O.sortIndex=F,n(g,O),i(p)===null&&O===i(g)&&(k?(R(q),q=-1):k=!0,fe(P,F-Q))):(O.sortIndex=pe,n(p,O),S||w||(S=!0,V||(V=!0,Ce()))),O},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(O){var oe=b;return function(){var F=b;b=oe;try{return O.apply(this,arguments)}finally{b=F}}}})(Ih)),Ih}var ny;function Dv(){return ny||(ny=1,$h.exports=Av()),$h.exports}var Ph={exports:{}},tn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function Nv(){if(sy)return tn;sy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,C={};function j(N,re,ie){this.props=N,this.context=re,this.refs=C,this.updater=ie||S}j.prototype.isReactComponent={},j.prototype.setState=function(N,re){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,re,"setState")},j.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function R(){}R.prototype=j.prototype;function B(N,re,ie){this.props=N,this.context=re,this.refs=C,this.updater=ie||S}var A=B.prototype=new R;A.constructor=B,k(A,j.prototype),A.isPureReactComponent=!0;var P=Array.isArray;function V(){}var q={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function J(N,re,ie){var de=ie.ref;return{$$typeof:t,type:N,key:re,ref:de!==void 0?de:null,props:ie}}function ce(N,re){return J(N.type,re,N.props)}function le(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function Ce(N){var re={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ie){return re[ie]})}var Ae=/\/+/g;function ee(N,re){return typeof N=="object"&&N!==null&&N.key!=null?Ce(""+N.key):re.toString(36)}function fe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(V,V):(N.status="pending",N.then(function(re){N.status==="pending"&&(N.status="fulfilled",N.value=re)},function(re){N.status==="pending"&&(N.status="rejected",N.reason=re)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,re,ie,de,Te){var Ye=typeof N;(Ye==="undefined"||Ye==="boolean")&&(N=null);var De=!1;if(N===null)De=!0;else switch(Ye){case"bigint":case"string":case"number":De=!0;break;case"object":switch(N.$$typeof){case t:case n:De=!0;break;case _:return De=N._init,O(De(N._payload),re,ie,de,Te)}}if(De)return Te=Te(N),De=de===""?"."+ee(N,0):de,P(Te)?(ie="",De!=null&&(ie=De.replace(Ae,"$&/")+"/"),O(Te,re,ie,"",function(gt){return gt})):Te!=null&&(le(Te)&&(Te=ce(Te,ie+(Te.key==null||N&&N.key===Te.key?"":(""+Te.key).replace(Ae,"$&/")+"/")+De)),re.push(Te)),1;De=0;var ft=de===""?".":de+":";if(P(N))for(var rt=0;rt<N.length;rt++)de=N[rt],Ye=ft+ee(de,rt),De+=O(de,re,ie,Ye,Te);else if(rt=w(N),typeof rt=="function")for(N=rt.call(N),rt=0;!(de=N.next()).done;)de=de.value,Ye=ft+ee(de,rt++),De+=O(de,re,ie,Ye,Te);else if(Ye==="object"){if(typeof N.then=="function")return O(fe(N),re,ie,de,Te);throw re=String(N),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return De}function oe(N,re,ie){if(N==null)return N;var de=[],Te=0;return O(N,de,"","",function(Ye){return re.call(ie,Ye,Te++)}),de}function F(N){if(N._status===-1){var re=N._result;re=re(),re.then(function(ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=ie)},function(ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=ie)}),N._status===-1&&(N._status=0,N._result=re)}if(N._status===1)return N._result.default;throw N._result}var Q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},pe={map:oe,forEach:function(N,re,ie){oe(N,function(){re.apply(this,arguments)},ie)},count:function(N){var re=0;return oe(N,function(){re++}),re},toArray:function(N){return oe(N,function(re){return re})||[]},only:function(N){if(!le(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return tn.Activity=x,tn.Children=pe,tn.Component=j,tn.Fragment=i,tn.Profiler=c,tn.PureComponent=B,tn.StrictMode=a,tn.Suspense=p,tn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,tn.__COMPILER_RUNTIME={__proto__:null,c:function(N){return q.H.useMemoCache(N)}},tn.cache=function(N){return function(){return N.apply(null,arguments)}},tn.cacheSignal=function(){return null},tn.cloneElement=function(N,re,ie){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var de=k({},N.props),Te=N.key;if(re!=null)for(Ye in re.key!==void 0&&(Te=""+re.key),re)!U.call(re,Ye)||Ye==="key"||Ye==="__self"||Ye==="__source"||Ye==="ref"&&re.ref===void 0||(de[Ye]=re[Ye]);var Ye=arguments.length-2;if(Ye===1)de.children=ie;else if(1<Ye){for(var De=Array(Ye),ft=0;ft<Ye;ft++)De[ft]=arguments[ft+2];de.children=De}return J(N.type,Te,de)},tn.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},tn.createElement=function(N,re,ie){var de,Te={},Ye=null;if(re!=null)for(de in re.key!==void 0&&(Ye=""+re.key),re)U.call(re,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(Te[de]=re[de]);var De=arguments.length-2;if(De===1)Te.children=ie;else if(1<De){for(var ft=Array(De),rt=0;rt<De;rt++)ft[rt]=arguments[rt+2];Te.children=ft}if(N&&N.defaultProps)for(de in De=N.defaultProps,De)Te[de]===void 0&&(Te[de]=De[de]);return J(N,Ye,Te)},tn.createRef=function(){return{current:null}},tn.forwardRef=function(N){return{$$typeof:h,render:N}},tn.isValidElement=le,tn.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:F}},tn.memo=function(N,re){return{$$typeof:g,type:N,compare:re===void 0?null:re}},tn.startTransition=function(N){var re=q.T,ie={};q.T=ie;try{var de=N(),Te=q.S;Te!==null&&Te(ie,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(V,Q)}catch(Ye){Q(Ye)}finally{re!==null&&ie.types!==null&&(re.types=ie.types),q.T=re}},tn.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},tn.use=function(N){return q.H.use(N)},tn.useActionState=function(N,re,ie){return q.H.useActionState(N,re,ie)},tn.useCallback=function(N,re){return q.H.useCallback(N,re)},tn.useContext=function(N){return q.H.useContext(N)},tn.useDebugValue=function(){},tn.useDeferredValue=function(N,re){return q.H.useDeferredValue(N,re)},tn.useEffect=function(N,re){return q.H.useEffect(N,re)},tn.useEffectEvent=function(N){return q.H.useEffectEvent(N)},tn.useId=function(){return q.H.useId()},tn.useImperativeHandle=function(N,re,ie){return q.H.useImperativeHandle(N,re,ie)},tn.useInsertionEffect=function(N,re){return q.H.useInsertionEffect(N,re)},tn.useLayoutEffect=function(N,re){return q.H.useLayoutEffect(N,re)},tn.useMemo=function(N,re){return q.H.useMemo(N,re)},tn.useOptimistic=function(N,re){return q.H.useOptimistic(N,re)},tn.useReducer=function(N,re,ie){return q.H.useReducer(N,re,ie)},tn.useRef=function(N){return q.H.useRef(N)},tn.useState=function(N){return q.H.useState(N)},tn.useSyncExternalStore=function(N,re,ie){return q.H.useSyncExternalStore(N,re,ie)},tn.useTransition=function(){return q.H.useTransition()},tn.version="19.2.4",tn}var oy;function cp(){return oy||(oy=1,Ph.exports=Nv()),Ph.exports}var Hh={exports:{}},Io={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function Rv(){if(iy)return Io;iy=1;var t=cp();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Io.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Io.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},Io.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},Io.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Io.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Io.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Io.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Io.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Io.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Io.requestFormReset=function(p){a.d.r(p)},Io.unstable_batchedUpdates=function(p,g){return p(g)},Io.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},Io.useFormStatus=function(){return d.H.useHostTransitionStatus()},Io.version="19.2.4",Io}var ay;function Bx(){if(ay)return Hh.exports;ay=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=Rv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function Bv(){if(ry)return sc;ry=1;var t=Dv(),n=cp(),i=Bx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,T=f.child;T;){if(T===o){v=!0,o=f,r=m;break}if(T===r){v=!0,r=f,o=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===o){v=!0,o=m,r=f;break}if(T===r){v=!0,r=m,o=f;break}T=T.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),B=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case j:return"Profiler";case C:return"StrictMode";case P:return"Suspense";case V:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case B:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case A:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return s=e.displayName||null,s!==null?s:ee(e.type)||"Memo";case U:s=e._payload,e=e._init;try{return ee(e(s))}catch{}}return null}var fe=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},Q=[],pe=-1;function N(e){return{current:e}}function re(e){0>pe||(e.current=Q[pe],Q[pe]=null,pe--)}function ie(e,s){pe++,Q[pe]=e.current,e.current=s}var de=N(null),Te=N(null),Ye=N(null),De=N(null);function ft(e,s){switch(ie(Ye,s),ie(Te,e),ie(de,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?w0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=w0(s),e=S0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}re(de),ie(de,e)}function rt(){re(de),re(Te),re(Ye)}function gt(e){e.memoizedState!==null&&ie(De,e);var s=de.current,o=S0(s,e.type);s!==o&&(ie(Te,e),ie(de,o))}function Wt(e){Te.current===e&&(re(de),re(Te)),De.current===e&&(re(De),Zl._currentValue=F)}var We,at;function St(e){if(We===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);We=s&&s[1]||"",at=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+e+at}var Gt=!1;function Ct(e,s){if(!e||Gt)return"";Gt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Oe=function(){throw Error()};if(Object.defineProperty(Oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Oe,[])}catch(xe){var _e=xe}Reflect.construct(e,[],Oe)}else{try{Oe.call()}catch(xe){_e=xe}e.call(Oe.prototype)}}else{try{throw Error()}catch(xe){_e=xe}(Oe=e())&&typeof Oe.catch=="function"&&Oe.catch(function(){})}}catch(xe){if(xe&&_e&&typeof xe.stack=="string")return[xe.stack,_e.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],T=m[1];if(v&&T){var X=v.split(`
`),me=T.split(`
`);for(f=r=0;r<X.length&&!X[r].includes("DetermineComponentFrameRoot");)r++;for(;f<me.length&&!me[f].includes("DetermineComponentFrameRoot");)f++;if(r===X.length||f===me.length)for(r=X.length-1,f=me.length-1;1<=r&&0<=f&&X[r]!==me[f];)f--;for(;1<=r&&0<=f;r--,f--)if(X[r]!==me[f]){if(r!==1||f!==1)do if(r--,f--,0>f||X[r]!==me[f]){var je=`
`+X[r].replace(" at new "," at ");return e.displayName&&je.includes("<anonymous>")&&(je=je.replace("<anonymous>",e.displayName)),je}while(1<=r&&0<=f);break}}}finally{Gt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?St(o):""}function Ft(e,s){switch(e.tag){case 26:case 27:case 5:return St(e.type);case 16:return St("Lazy");case 13:return e.child!==s&&s!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return Ct(e.type,!1);case 11:return Ct(e.type.render,!1);case 1:return Ct(e.type,!0);case 31:return St("Activity");default:return""}}function G(e){try{var s="",o=null;do s+=Ft(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ke=Object.prototype.hasOwnProperty,nt=t.unstable_scheduleCallback,Je=t.unstable_cancelCallback,dt=t.unstable_shouldYield,Xe=t.unstable_requestPaint,ct=t.unstable_now,Qe=t.unstable_getCurrentPriorityLevel,ht=t.unstable_ImmediatePriority,zt=t.unstable_UserBlockingPriority,ot=t.unstable_NormalPriority,I=t.unstable_LowPriority,se=t.unstable_IdlePriority,te=t.log,be=t.unstable_setDisableYieldValue,Fe=null,Ue=null;function Be(e){if(typeof te=="function"&&be(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(Fe,e)}catch{}}var xt=Math.clz32?Math.clz32:Ge,Tt=Math.log,$t=Math.LN2;function Ge(e){return e>>>=0,e===0?32:31-(Tt(e)/$t|0)|0}var Ie=256,Et=262144,Lt=4194304;function Vt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pe(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~m,r!==0?f=Vt(r):(v&=T,v!==0?f=Vt(v):o||(o=T&~e,o!==0&&(f=Vt(o))))):(T=r&~m,T!==0?f=Vt(T):v!==0?f=Vt(v):o||(o=r&~e,o!==0&&(f=Vt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function At(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function mt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function sn(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function ut(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var T=e.entanglements,X=e.expirationTimes,me=e.hiddenUpdates;for(o=v&~o;0<o;){var je=31-xt(o),Oe=1<<je;T[je]=0,X[je]=-1;var _e=me[je];if(_e!==null)for(me[je]=null,je=0;je<_e.length;je++){var xe=_e[je];xe!==null&&(xe.lane&=-536870913)}o&=~Oe}r!==0&&zn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function zn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-xt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function es(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-xt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function Sn(e,s){var o=s&-s;return o=(o&42)!==0?1:go(o),(o&(e.suspendedLanes|s))!==0?0:o}function go(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cs(){var e=oe.p;return e!==0?e:(e=window.event,e===void 0?32:F0(e.type))}function En(e,s){var o=oe.p;try{return oe.p=e,s()}finally{oe.p=o}}var fn=Math.random().toString(36).slice(2),cn="__reactFiber$"+fn,Cn="__reactProps$"+fn,it="__reactContainer$"+fn,Qt="__reactEvents$"+fn,yo="__reactListeners$"+fn,Ks="__reactHandles$"+fn,ds="__reactResources$"+fn,As="__reactMarker$"+fn;function Qo(e){delete e[cn],delete e[Cn],delete e[Qt],delete e[yo],delete e[Ks]}function xo(e){var s=e[cn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[it]||o[cn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=A0(e);e!==null;){if(o=e[cn])return o;e=A0(e)}return s}e=o,o=e.parentNode}return null}function lo(e){if(e=e[cn]||e[it]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Ds(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function fs(e){var s=e[ds];return s||(s=e[ds]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function kn(e){e[As]=!0}var Us=new Set,bo={};function $n(e,s){gn(e,s),gn(e+"Capture",s)}function gn(e,s){for(bo[e]=s,e=0;e<s.length;e++)Us.add(s[e])}var ko=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Un={},Zo={};function jo(e){return ke.call(Zo,e)?!0:ke.call(Un,e)?!1:ko.test(e)?Zo[e]=!0:(Un[e]=!0,!1)}function vo(e,s,o){if(jo(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function rs(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function ks(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function An(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ii(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ci(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Ho(e){if(!e._valueTracker){var s=Ii(e)?"checked":"value";e._valueTracker=ci(e,s,""+e[s])}}function Ji(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Ii(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pi=/[\n"\\]/g;function Ls(e){return e.replace(Pi,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function wo(e,s,o,r,f,m,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+An(s)):e.value!==""+An(s)&&(e.value=""+An(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?ts(e,v,An(s)):o!=null?ts(e,v,An(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+An(T):e.removeAttribute("name")}function Rn(e,s,o,r,f,m,v,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Ho(e);return}o=o!=null?""+An(o):"",s=s!=null?""+An(s):o,T||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ho(e)}function ts(e,s,o){s==="number"&&Uo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function dn(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+An(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function In(e,s,o){if(s!=null&&(s=""+An(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+An(o):""}function ui(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(fe(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=An(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Ho(e)}function Bo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var di=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||di.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function fi(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Kt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Kt(e,m,s[m])}function js(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ci=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function So(e){return Ci.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qs(){}var hi=null;function co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mn=null,Vs=null;function mi(e){var s=lo(e);if(s&&(e=s.stateNode)){var o=e[Cn]||null;e:switch(e=s.stateNode,s.type){case"input":if(wo(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ls(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[Cn]||null;if(!f)throw Error(a(90));wo(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&Ji(r)}break e;case"textarea":In(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&dn(e,!!o.multiple,s,!1)}}}var hs=!1;function Ys(e,s,o){if(hs)return e(s,o);hs=!0;try{var r=e(s);return r}finally{if(hs=!1,(mn!==null||Vs!==null)&&(xu(),mn&&(s=mn,e=Vs,Vs=mn=null,mi(s),e)))for(s=0;s<e.length;s++)mi(e[s])}}function en(e,s){var o=e.stateNode;if(o===null)return null;var r=o[Cn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Zs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uo=!1;if(Zs)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){uo=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{uo=!1}var Ms=null,Ns=null,fo=null;function ki(){if(fo)return fo;var e,s=Ns,o=s.length,r,f="value"in Ms?Ms.value:Ms.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return fo=f.slice(e,1<r?1-r:void 0)}function ho(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function Yo(){return!1}function Fn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(o=e[T],this[T]=o?o(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vo:Yo,this.isPropagationStopped=Yo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),s}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mo=Fn(Bn),ms=x({},Bn,{view:0,detail:0}),ns=Fn(ms),Ws,Fs,ps,To=x({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ht,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ps&&(ps&&e.type==="mousemove"?(Ws=e.screenX-ps.screenX,Fs=e.screenY-ps.screenY):Fs=Ws=0,ps=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Fs}}),Lo=Fn(To),M=x({},To,{dataTransfer:0}),Z=Fn(M),ge=x({},ms,{relatedTarget:0}),ve=Fn(ge),Ve=x({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),et=Fn(Ve),D=x({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$=Fn(D),H=x({},Bn,{data:0}),Y=Fn(H),Re={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qe={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},st={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bt(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=st[e])?!!s[e]:!1}function Ht(){return bt}var jn=x({},ms,{key:function(e){if(e.key){var s=Re[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qe[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ht,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_s=Fn(jn),bn=x({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pt=Fn(bn),un=x({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ht}),Mn=Fn(un),ls=x({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gs=Fn(ls),Js=x({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Os=Fn(Js),eo=x({},Bn,{newState:0,oldState:0}),Jo=Fn(eo),pi=[9,13,27,32],ei=Zs&&"CompositionEvent"in window,zs=null;Zs&&"documentMode"in document&&(zs=document.documentMode);var ti=Zs&&"TextEvent"in window&&!zs,Se=Zs&&(!ei||zs&&8<zs&&11>=zs),Le=" ",tt=!1;function $e(e,s){switch(e){case"keyup":return pi.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dt=!1;function rn(e,s){switch(e){case"compositionend":return Nt(s);case"keypress":return s.which!==32?null:(tt=!0,Le);case"textInput":return e=s.data,e===Le&&tt?null:e;default:return null}}function on(e,s){if(Dt)return e==="compositionend"||!ei&&$e(e,s)?(e=ki(),fo=Ns=Ms=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Se&&s.locale!=="ko"?null:s.data;default:return null}}var Xn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rs(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Xn[e.type]:s==="textarea"}function Oo(e,s,o,r){mn?Vs?Vs.push(r):Vs=[r]:mn=r,s=ju(s,"onChange"),0<s.length&&(o=new Mo("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var zo=null,ss=null;function to(e){_0(e,0)}function E(e){var s=Ds(e);if(Ji(s))return e}function z(e,s){if(e==="change")return s}var K=!1;if(Zs){var W;if(Zs){var ae="oninput"in document;if(!ae){var ye=document.createElement("div");ye.setAttribute("oninput","return;"),ae=typeof ye.oninput=="function"}W=ae}else W=!1;K=W&&(!document.documentMode||9<document.documentMode)}function Ke(){zo&&(zo.detachEvent("onpropertychange",Ze),ss=zo=null)}function Ze(e){if(e.propertyName==="value"&&E(ss)){var s=[];Oo(s,ss,e,co(e)),Ys(to,s)}}function lt(e,s,o){e==="focusin"?(Ke(),zo=s,ss=o,zo.attachEvent("onpropertychange",Ze)):e==="focusout"&&Ke()}function vt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return E(ss)}function Bt(e,s){if(e==="click")return E(s)}function Zt(e,s){if(e==="input"||e==="change")return E(s)}function Jt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var wt=typeof Object.is=="function"?Object.is:Jt;function pt(e,s){if(wt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!ke.call(s,f)||!wt(e[f],s[f]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,s){var o=ys(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ys(o)}}function bs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?bs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function wn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Uo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Uo(e.document)}return s}function Hn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Yt=Zs&&"documentMode"in document&&11>=document.documentMode,qt=null,vs=null,Tn=null,mo=!1;function $o(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;mo||qt==null||qt!==Uo(r)||(r=qt,"selectionStart"in r&&Hn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&pt(Tn,r)||(Tn=r,r=ju(vs,"onSelect"),0<r.length&&(s=new Mo("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=qt)))}function os(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ji={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},Ui={},Vi={};Zs&&(Vi=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function qn(e){if(Ui[e])return Ui[e];if(!ji[e])return e;var s=ji[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Vi)return Ui[e]=s[o];return e}var Yi=qn("animationend"),ea=qn("animationiteration"),$c=qn("animationstart"),Wd=qn("transitionrun"),Fd=qn("transitionstart"),Xd=qn("transitioncancel"),Gp=qn("transitionend"),Kp=new Map,qd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qd.push("scrollEnd");function Wi(e,s){Kp.set(e,s),$n(s,[e])}var Ic=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],Nr=0,Gd=0;function Pc(){for(var e=Nr,s=Gd=Nr=0;s<e;){var o=Mi[s];Mi[s++]=null;var r=Mi[s];Mi[s++]=null;var f=Mi[s];Mi[s++]=null;var m=Mi[s];if(Mi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Qp(o,f,m)}}function Hc(e,s,o,r){Mi[Nr++]=e,Mi[Nr++]=s,Mi[Nr++]=o,Mi[Nr++]=r,Gd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Hc(e,s,o,r),Uc(e)}function or(e,s){return Hc(e,null,null,s),Uc(e)}function Qp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-xt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Uc(e){if(50<Wl)throw Wl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Rr={};function d2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,s,o,r){return new d2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,s){var o=e.alternate;return o===null?(o=_i(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Zp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Vc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=_v(e,o,de.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=_i(31,o,s,f),e.elementType=J,e.lanes=m,e;case k:return ir(o.children,f,m,s);case C:v=8,f|=24;break;case j:return e=_i(12,o,s,f|2),e.elementType=j,e.lanes=m,e;case P:return e=_i(13,o,s,f),e.elementType=P,e.lanes=m,e;case V:return e=_i(19,o,s,f),e.elementType=V,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:v=10;break e;case R:v=9;break e;case A:v=11;break e;case q:v=14;break e;case U:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=_i(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ir(e,s,o,r){return e=_i(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=_i(6,e,null,s),e.lanes=o,e}function Jp(e){var s=_i(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=_i(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var e_=new WeakMap;function Ti(e,s){if(typeof e=="object"&&e!==null){var o=e_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:G(s)},e_.set(e,s),s)}return{value:e,source:s,stack:G(s)}}var Br=[],Lr=0,Yc=null,Cl=0,Ei=[],Ai=0,Ta=null,ta=1,na="";function fa(e,s){Br[Lr++]=Cl,Br[Lr++]=Yc,Yc=e,Cl=s}function t_(e,s,o){Ei[Ai++]=ta,Ei[Ai++]=na,Ei[Ai++]=Ta,Ta=e;var r=ta;e=na;var f=32-xt(r)-1;r&=~(1<<f),o+=1;var m=32-xt(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ta=1<<32-xt(s)+f|o<<f|r,na=m+e}else ta=1<<m|o<<f|r,na=e}function ef(e){e.return!==null&&(fa(e,1),t_(e,1,0))}function tf(e){for(;e===Yc;)Yc=Br[--Lr],Br[Lr]=null,Cl=Br[--Lr],Br[Lr]=null;for(;e===Ta;)Ta=Ei[--Ai],Ei[Ai]=null,na=Ei[--Ai],Ei[Ai]=null,ta=Ei[--Ai],Ei[Ai]=null}function n_(e,s){Ei[Ai++]=ta,Ei[Ai++]=na,Ei[Ai++]=Ta,ta=s.id,na=s.overflow,Ta=e}var Eo=null,ws=null,vn=!1,Ea=null,Di=!1,nf=Error(a(519));function Aa(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kl(Ti(s,e)),nf}function s_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[cn]=e,s[Cn]=r,o){case"dialog":_n("cancel",s),_n("close",s);break;case"iframe":case"object":case"embed":_n("load",s);break;case"video":case"audio":for(o=0;o<Xl.length;o++)_n(Xl[o],s);break;case"source":_n("error",s);break;case"img":case"image":case"link":_n("error",s),_n("load",s);break;case"details":_n("toggle",s);break;case"input":_n("invalid",s),Rn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_n("invalid",s);break;case"textarea":_n("invalid",s),ui(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||b0(s.textContent,o)?(r.popover!=null&&(_n("beforetoggle",s),_n("toggle",s)),r.onScroll!=null&&_n("scroll",s),r.onScrollEnd!=null&&_n("scrollend",s),r.onClick!=null&&(s.onclick=Qs),s=!0):s=!1,s||Aa(e,!0)}function o_(e){for(Eo=e.return;Eo;)switch(Eo.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Eo=Eo.return}}function Or(e){if(e!==Eo)return!1;if(!vn)return o_(e),vn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&ws&&Aa(e),o_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ws=E0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ws=E0(e)}else s===27?(s=ws,Ya(e.type)?(e=jh,jh=null,ws=e):ws=s):ws=Eo?Ri(e.stateNode.nextSibling):null;return!0}function ar(){ws=Eo=null,vn=!1}function sf(){var e=Ea;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),Ea=null),e}function kl(e){Ea===null?Ea=[e]:Ea.push(e)}var of=N(null),rr=null,ha=null;function Da(e,s,o){ie(of,s._currentValue),s._currentValue=o}function ma(e){e._currentValue=of.current,re(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=f;for(var X=0;X<s.length;X++)if(T.context===s[X]){m.lanes|=o,T=m.alternate,T!==null&&(T.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function zr(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var T=f.type;wt(f.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(f===De.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Zl):e=[Zl])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Wc(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){rr=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ao(e){return i_(rr,e)}function Fc(e,s){return rr===null&&lr(e),i_(e,s)}function i_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ha===null){if(e===null)throw Error(a(308));ha=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ha=ha.next=s;return o}var f2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},h2=t.unstable_scheduleCallback,m2=t.unstable_NormalPriority,no={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new f2,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&h2(m2,function(){e.controller.abort()})}var Ml=null,cf=0,$r=0,Ir=null;function p2(e,s){if(Ml===null){var o=Ml=[];cf=0,$r=fh(),Ir={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(a_,a_),s}function a_(){if(--cf===0&&Ml!==null){Ir!==null&&(Ir.status="fulfilled");var e=Ml;Ml=null,$r=0,Ir=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function _2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var r_=O.S;O.S=function(e,s){Yg=ct(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&p2(e,s),r_!==null&&r_(e,s)};var cr=N(null);function uf(){var e=cr.current;return e!==null?e:is.pooledCache}function Xc(e,s){s===null?ie(cr,cr.current):ie(cr,s.pool)}function l_(){var e=uf();return e===null?null:{parent:no._currentValue,pool:e}}var Pr=Error(a(460)),df=Error(a(474)),qc=Error(a(542)),Gc={then:function(){}};function c_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function u_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Qs,Qs),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,f_(e),e;default:if(typeof s.status=="string")s.then(Qs,Qs);else{if(e=is,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,f_(e),e}throw dr=s,Pr}}function ur(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(dr=o,Pr):o}}var dr=null;function d_(){if(dr===null)throw Error(a(459));var e=dr;return dr=null,e}function f_(e){if(e===Pr||e===qc)throw Error(a(483))}var Hr=null,Tl=0;function Kc(e){var s=Tl;return Tl+=1,Hr===null&&(Hr=[]),u_(Hr,e,s)}function El(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Qc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function h_(e){function s(ue,ne){if(e){var he=ue.deletions;he===null?(ue.deletions=[ne],ue.flags|=16):he.push(ne)}}function o(ue,ne){if(!e)return null;for(;ne!==null;)s(ue,ne),ne=ne.sibling;return null}function r(ue){for(var ne=new Map;ue!==null;)ue.key!==null?ne.set(ue.key,ue):ne.set(ue.index,ue),ue=ue.sibling;return ne}function f(ue,ne){return ue=da(ue,ne),ue.index=0,ue.sibling=null,ue}function m(ue,ne,he){return ue.index=he,e?(he=ue.alternate,he!==null?(he=he.index,he<ne?(ue.flags|=67108866,ne):he):(ue.flags|=67108866,ne)):(ue.flags|=1048576,ne)}function v(ue){return e&&ue.alternate===null&&(ue.flags|=67108866),ue}function T(ue,ne,he,Ne){return ne===null||ne.tag!==6?(ne=Zd(he,ue.mode,Ne),ne.return=ue,ne):(ne=f(ne,he),ne.return=ue,ne)}function X(ue,ne,he,Ne){var Ot=he.type;return Ot===k?je(ue,ne,he.props.children,Ne,he.key):ne!==null&&(ne.elementType===Ot||typeof Ot=="object"&&Ot!==null&&Ot.$$typeof===U&&ur(Ot)===ne.type)?(ne=f(ne,he.props),El(ne,he),ne.return=ue,ne):(ne=Vc(he.type,he.key,he.props,null,ue.mode,Ne),El(ne,he),ne.return=ue,ne)}function me(ue,ne,he,Ne){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==he.containerInfo||ne.stateNode.implementation!==he.implementation?(ne=Jd(he,ue.mode,Ne),ne.return=ue,ne):(ne=f(ne,he.children||[]),ne.return=ue,ne)}function je(ue,ne,he,Ne,Ot){return ne===null||ne.tag!==7?(ne=ir(he,ue.mode,Ne,Ot),ne.return=ue,ne):(ne=f(ne,he),ne.return=ue,ne)}function Oe(ue,ne,he){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ne=Zd(""+ne,ue.mode,he),ne.return=ue,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case w:return he=Vc(ne.type,ne.key,ne.props,null,ue.mode,he),El(he,ne),he.return=ue,he;case S:return ne=Jd(ne,ue.mode,he),ne.return=ue,ne;case U:return ne=ur(ne),Oe(ue,ne,he)}if(fe(ne)||Ce(ne))return ne=ir(ne,ue.mode,he,null),ne.return=ue,ne;if(typeof ne.then=="function")return Oe(ue,Kc(ne),he);if(ne.$$typeof===B)return Oe(ue,Fc(ue,ne),he);Qc(ue,ne)}return null}function _e(ue,ne,he,Ne){var Ot=ne!==null?ne.key:null;if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return Ot!==null?null:T(ue,ne,""+he,Ne);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case w:return he.key===Ot?X(ue,ne,he,Ne):null;case S:return he.key===Ot?me(ue,ne,he,Ne):null;case U:return he=ur(he),_e(ue,ne,he,Ne)}if(fe(he)||Ce(he))return Ot!==null?null:je(ue,ne,he,Ne,null);if(typeof he.then=="function")return _e(ue,ne,Kc(he),Ne);if(he.$$typeof===B)return _e(ue,ne,Fc(ue,he),Ne);Qc(ue,he)}return null}function xe(ue,ne,he,Ne,Ot){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number"||typeof Ne=="bigint")return ue=ue.get(he)||null,T(ne,ue,""+Ne,Ot);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case w:return ue=ue.get(Ne.key===null?he:Ne.key)||null,X(ne,ue,Ne,Ot);case S:return ue=ue.get(Ne.key===null?he:Ne.key)||null,me(ne,ue,Ne,Ot);case U:return Ne=ur(Ne),xe(ue,ne,he,Ne,Ot)}if(fe(Ne)||Ce(Ne))return ue=ue.get(he)||null,je(ne,ue,Ne,Ot,null);if(typeof Ne.then=="function")return xe(ue,ne,he,Kc(Ne),Ot);if(Ne.$$typeof===B)return xe(ue,ne,he,Fc(ne,Ne),Ot);Qc(ne,Ne)}return null}function jt(ue,ne,he,Ne){for(var Ot=null,Dn=null,Rt=ne,ln=ne=0,xn=null;Rt!==null&&ln<he.length;ln++){Rt.index>ln?(xn=Rt,Rt=null):xn=Rt.sibling;var Nn=_e(ue,Rt,he[ln],Ne);if(Nn===null){Rt===null&&(Rt=xn);break}e&&Rt&&Nn.alternate===null&&s(ue,Rt),ne=m(Nn,ne,ln),Dn===null?Ot=Nn:Dn.sibling=Nn,Dn=Nn,Rt=xn}if(ln===he.length)return o(ue,Rt),vn&&fa(ue,ln),Ot;if(Rt===null){for(;ln<he.length;ln++)Rt=Oe(ue,he[ln],Ne),Rt!==null&&(ne=m(Rt,ne,ln),Dn===null?Ot=Rt:Dn.sibling=Rt,Dn=Rt);return vn&&fa(ue,ln),Ot}for(Rt=r(Rt);ln<he.length;ln++)xn=xe(Rt,ue,ln,he[ln],Ne),xn!==null&&(e&&xn.alternate!==null&&Rt.delete(xn.key===null?ln:xn.key),ne=m(xn,ne,ln),Dn===null?Ot=xn:Dn.sibling=xn,Dn=xn);return e&&Rt.forEach(function(Ga){return s(ue,Ga)}),vn&&fa(ue,ln),Ot}function Ut(ue,ne,he,Ne){if(he==null)throw Error(a(151));for(var Ot=null,Dn=null,Rt=ne,ln=ne=0,xn=null,Nn=he.next();Rt!==null&&!Nn.done;ln++,Nn=he.next()){Rt.index>ln?(xn=Rt,Rt=null):xn=Rt.sibling;var Ga=_e(ue,Rt,Nn.value,Ne);if(Ga===null){Rt===null&&(Rt=xn);break}e&&Rt&&Ga.alternate===null&&s(ue,Rt),ne=m(Ga,ne,ln),Dn===null?Ot=Ga:Dn.sibling=Ga,Dn=Ga,Rt=xn}if(Nn.done)return o(ue,Rt),vn&&fa(ue,ln),Ot;if(Rt===null){for(;!Nn.done;ln++,Nn=he.next())Nn=Oe(ue,Nn.value,Ne),Nn!==null&&(ne=m(Nn,ne,ln),Dn===null?Ot=Nn:Dn.sibling=Nn,Dn=Nn);return vn&&fa(ue,ln),Ot}for(Rt=r(Rt);!Nn.done;ln++,Nn=he.next())Nn=xe(Rt,ue,ln,Nn.value,Ne),Nn!==null&&(e&&Nn.alternate!==null&&Rt.delete(Nn.key===null?ln:Nn.key),ne=m(Nn,ne,ln),Dn===null?Ot=Nn:Dn.sibling=Nn,Dn=Nn);return e&&Rt.forEach(function(Mv){return s(ue,Mv)}),vn&&fa(ue,ln),Ot}function Qn(ue,ne,he,Ne){if(typeof he=="object"&&he!==null&&he.type===k&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case w:e:{for(var Ot=he.key;ne!==null;){if(ne.key===Ot){if(Ot=he.type,Ot===k){if(ne.tag===7){o(ue,ne.sibling),Ne=f(ne,he.props.children),Ne.return=ue,ue=Ne;break e}}else if(ne.elementType===Ot||typeof Ot=="object"&&Ot!==null&&Ot.$$typeof===U&&ur(Ot)===ne.type){o(ue,ne.sibling),Ne=f(ne,he.props),El(Ne,he),Ne.return=ue,ue=Ne;break e}o(ue,ne);break}else s(ue,ne);ne=ne.sibling}he.type===k?(Ne=ir(he.props.children,ue.mode,Ne,he.key),Ne.return=ue,ue=Ne):(Ne=Vc(he.type,he.key,he.props,null,ue.mode,Ne),El(Ne,he),Ne.return=ue,ue=Ne)}return v(ue);case S:e:{for(Ot=he.key;ne!==null;){if(ne.key===Ot)if(ne.tag===4&&ne.stateNode.containerInfo===he.containerInfo&&ne.stateNode.implementation===he.implementation){o(ue,ne.sibling),Ne=f(ne,he.children||[]),Ne.return=ue,ue=Ne;break e}else{o(ue,ne);break}else s(ue,ne);ne=ne.sibling}Ne=Jd(he,ue.mode,Ne),Ne.return=ue,ue=Ne}return v(ue);case U:return he=ur(he),Qn(ue,ne,he,Ne)}if(fe(he))return jt(ue,ne,he,Ne);if(Ce(he)){if(Ot=Ce(he),typeof Ot!="function")throw Error(a(150));return he=Ot.call(he),Ut(ue,ne,he,Ne)}if(typeof he.then=="function")return Qn(ue,ne,Kc(he),Ne);if(he.$$typeof===B)return Qn(ue,ne,Fc(ue,he),Ne);Qc(ue,he)}return typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint"?(he=""+he,ne!==null&&ne.tag===6?(o(ue,ne.sibling),Ne=f(ne,he),Ne.return=ue,ue=Ne):(o(ue,ne),Ne=Zd(he,ue.mode,Ne),Ne.return=ue,ue=Ne),v(ue)):o(ue,ne)}return function(ue,ne,he,Ne){try{Tl=0;var Ot=Qn(ue,ne,he,Ne);return Hr=null,Ot}catch(Rt){if(Rt===Pr||Rt===qc)throw Rt;var Dn=_i(29,Rt,null,ue.mode);return Dn.lanes=Ne,Dn.return=ue,Dn}finally{}}}var fr=h_(!0),m_=h_(!1),Na=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ln&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Uc(e),Qp(e,null,o),s}return Hc(e,r,s,o),Uc(e)}function Al(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,es(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Dl(){if(pf){var e=Ir;if(e!==null)throw e}}function Nl(e,s,o,r){pf=!1;var f=e.updateQueue;Na=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var X=T,me=X.next;X.next=null,v===null?m=me:v.next=me,v=X;var je=e.alternate;je!==null&&(je=je.updateQueue,T=je.lastBaseUpdate,T!==v&&(T===null?je.firstBaseUpdate=me:T.next=me,je.lastBaseUpdate=X))}if(m!==null){var Oe=f.baseState;v=0,je=me=X=null,T=m;do{var _e=T.lane&-536870913,xe=_e!==T.lane;if(xe?(yn&_e)===_e:(r&_e)===_e){_e!==0&&_e===$r&&(pf=!0),je!==null&&(je=je.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var jt=e,Ut=T;_e=s;var Qn=o;switch(Ut.tag){case 1:if(jt=Ut.payload,typeof jt=="function"){Oe=jt.call(Qn,Oe,_e);break e}Oe=jt;break e;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=Ut.payload,_e=typeof jt=="function"?jt.call(Qn,Oe,_e):jt,_e==null)break e;Oe=x({},Oe,_e);break e;case 2:Na=!0}}_e=T.callback,_e!==null&&(e.flags|=64,xe&&(e.flags|=8192),xe=f.callbacks,xe===null?f.callbacks=[_e]:xe.push(_e))}else xe={lane:_e,tag:T.tag,payload:T.payload,callback:T.callback,next:null},je===null?(me=je=xe,X=Oe):je=je.next=xe,v|=_e;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;xe=T,T=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);je===null&&(X=Oe),f.baseState=X,f.firstBaseUpdate=me,f.lastBaseUpdate=je,m===null&&(f.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=Oe}}function p_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function __(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)p_(o[e],s)}var Ur=N(null),Zc=N(0);function g_(e,s){e=Sa,ie(Zc,e),ie(Ur,s),Sa=e|s.baseLanes}function _f(){ie(Zc,Sa),ie(Ur,Ur.current)}function gf(){Sa=Zc.current,re(Ur),re(Zc)}var gi=N(null),Ni=null;function La(e){var s=e.alternate;ie(Xs,Xs.current&1),ie(gi,e),Ni===null&&(s===null||Ur.current!==null||s.memoizedState!==null)&&(Ni=e)}function yf(e){ie(Xs,Xs.current),ie(gi,e),Ni===null&&(Ni=e)}function y_(e){e.tag===22?(ie(Xs,Xs.current),ie(gi,e),Ni===null&&(Ni=e)):Oa()}function Oa(){ie(Xs,Xs.current),ie(gi,gi.current)}function yi(e){re(gi),Ni===e&&(Ni=null),re(Xs)}var Xs=N(0);function Jc(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var pa=0,an=null,Gn=null,so=null,eu=!1,Vr=!1,hr=!1,tu=0,Rl=0,Yr=null,g2=0;function $s(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!wt(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return pa=m,an=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,O.H=e===null||e.memoizedState===null?tg:Lf,hr=!1,m=o(r,f),hr=!1,Vr&&(m=b_(s,o,r,f)),x_(e),m}function x_(e){O.H=Ol;var s=Gn!==null&&Gn.next!==null;if(pa=0,so=Gn=an=null,eu=!1,Rl=0,Yr=null,s)throw Error(a(300));e===null||oo||(e=e.dependencies,e!==null&&Wc(e)&&(oo=!0))}function b_(e,s,o,r){an=e;var f=0;do{if(Vr&&(Yr=null),Rl=0,Vr=!1,25<=f)throw Error(a(301));if(f+=1,so=Gn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=ng,m=s(o,r)}while(Vr);return m}function y2(){var e=O.H,s=e.useState()[0];return s=typeof s.then=="function"?Bl(s):s,e=e.useState()[0],(Gn!==null?Gn.memoizedState:null)!==e&&(an.flags|=1024),s}function vf(){var e=tu!==0;return tu=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(eu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}eu=!1}pa=0,so=Gn=an=null,Vr=!1,Rl=tu=0,Yr=null}function Wo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return so===null?an.memoizedState=so=e:so=so.next=e,so}function qs(){if(Gn===null){var e=an.alternate;e=e!==null?e.memoizedState:null}else e=Gn.next;var s=so===null?an.memoizedState:so.next;if(s!==null)so=s,Gn=e;else{if(e===null)throw an.alternate===null?Error(a(467)):Error(a(310));Gn=e,e={memoizedState:Gn.memoizedState,baseState:Gn.baseState,baseQueue:Gn.baseQueue,queue:Gn.queue,next:null},so===null?an.memoizedState=so=e:so=so.next=e}return so}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(e){var s=Rl;return Rl+=1,Yr===null&&(Yr=[]),e=u_(Yr,e,s),s=an,(so===null?s.memoizedState:so.next)===null&&(s=s.alternate,O.H=s===null||s.memoizedState===null?tg:Lf),e}function su(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bl(e);if(e.$$typeof===B)return Ao(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=an.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=an.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=nu(),an.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=ce;return s.index++,o}function _a(e,s){return typeof s=="function"?s(e):s}function ou(e){var s=qs();return kf(s,Gn,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var T=v=null,X=null,me=s,je=!1;do{var Oe=me.lane&-536870913;if(Oe!==me.lane?(yn&Oe)===Oe:(pa&Oe)===Oe){var _e=me.revertLane;if(_e===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),Oe===$r&&(je=!0);else if((pa&_e)===_e){me=me.next,_e===$r&&(je=!0);continue}else Oe={lane:0,revertLane:me.revertLane,gesture:null,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null},X===null?(T=X=Oe,v=m):X=X.next=Oe,an.lanes|=_e,Ia|=_e;Oe=me.action,hr&&o(m,Oe),m=me.hasEagerState?me.eagerState:o(m,Oe)}else _e={lane:Oe,revertLane:me.revertLane,gesture:me.gesture,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null},X===null?(T=X=_e,v=m):X=X.next=_e,an.lanes|=Oe,Ia|=Oe;me=me.next}while(me!==null&&me!==s);if(X===null?v=m:X.next=T,!wt(m,e.memoizedState)&&(oo=!0,je&&(o=Ir,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=X,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=qs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);wt(m,s.memoizedState)||(oo=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function v_(e,s,o){var r=an,f=qs(),m=vn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!wt((Gn||f).memoizedState,o);if(v&&(f.memoizedState=o,oo=!0),f=f.queue,Ef(C_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||so!==null&&so.memoizedState.tag&1){if(r.flags|=2048,Wr(9,{destroy:void 0},S_.bind(null,r,f,o,s),null),is===null)throw Error(a(349));m||(pa&127)!==0||w_(r,s,o)}return o}function w_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=an.updateQueue,s===null?(s=nu(),an.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function S_(e,s,o,r){s.value=o,s.getSnapshot=r,k_(s)&&j_(e)}function C_(e,s,o){return o(function(){k_(s)&&j_(e)})}function k_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!wt(e,o)}catch{return!0}}function j_(e){var s=or(e,2);s!==null&&ai(s,e,2)}function Mf(e){var s=Wo();if(typeof e=="function"){var o=e;if(e=o(),hr){Be(!0);try{o()}finally{Be(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},s}function M_(e,s,o,r){return e.baseState=o,kf(e,Gn,typeof r=="function"?r:_a)}function x2(e,s,o,r,f){if(ru(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};O.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,T_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function T_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=O.T,v={};O.T=v;try{var T=o(f,r),X=O.S;X!==null&&X(v,T),E_(e,s,T)}catch(me){Tf(e,s,me)}finally{m!==null&&v.types!==null&&(m.types=v.types),O.T=m}}else try{m=o(f,r),E_(e,s,m)}catch(me){Tf(e,s,me)}}function E_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){A_(e,s,r)},function(r){return Tf(e,s,r)}):A_(e,s,o)}function A_(e,s,o){s.status="fulfilled",s.value=o,D_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,T_(e,o)))}function Tf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,D_(s),s=s.next;while(s!==r)}e.action=null}function D_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function N_(e,s){return s}function R_(e,s){if(vn){var o=is.formState;if(o!==null){e:{var r=an;if(vn){if(ws){t:{for(var f=ws,m=Di;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ws=Ri(f.nextSibling),r=f.data==="F!";break e}}Aa(r)}r=!1}r&&(s=o[0])}}return o=Wo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N_,lastRenderedState:s},o.queue=r,o=Z_.bind(null,an,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,an,!1,r.queue),r=Wo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=x2.bind(null,an,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function B_(e){var s=qs();return L_(s,Gn,e)}function L_(e,s,o){if(s=kf(e,s,N_)[0],e=ou(_a)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Bl(s)}catch(v){throw v===Pr?qc:v}else r=s;s=qs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(an.flags|=2048,Wr(9,{destroy:void 0},b2.bind(null,f,o),null)),[r,m,e]}function b2(e,s){e.action=s}function O_(e){var s=qs(),o=Gn;if(o!==null)return L_(s,o,e);qs(),s=s.memoizedState,o=qs();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Wr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=an.updateQueue,s===null&&(s=nu(),an.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function z_(){return qs().memoizedState}function iu(e,s,o,r){var f=Wo();an.flags|=e,f.memoizedState=Wr(1|s,{destroy:void 0},o,r===void 0?null:r)}function au(e,s,o,r){var f=qs();r=r===void 0?null:r;var m=f.memoizedState.inst;Gn!==null&&r!==null&&xf(r,Gn.memoizedState.deps)?f.memoizedState=Wr(s,m,o,r):(an.flags|=e,f.memoizedState=Wr(1|s,m,o,r))}function $_(e,s){iu(8390656,8,e,s)}function Ef(e,s){au(2048,8,e,s)}function v2(e){an.flags|=4;var s=an.updateQueue;if(s===null)s=nu(),an.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function I_(e){var s=qs().memoizedState;return v2({ref:s,nextImpl:e}),function(){if((Ln&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function P_(e,s){return au(4,2,e,s)}function H_(e,s){return au(4,4,e,s)}function U_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function V_(e,s,o){o=o!=null?o.concat([e]):null,au(4,4,U_.bind(null,s,e),o)}function Af(){}function Y_(e,s){var o=qs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function W_(e,s){var o=qs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),hr){Be(!0);try{e()}finally{Be(!1)}}return o.memoizedState=[r,s],r}function Df(e,s,o){return o===void 0||(pa&1073741824)!==0&&(yn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Fg(),an.lanes|=e,Ia|=e,o)}function F_(e,s,o,r){return wt(o,s)?o:Ur.current!==null?(e=Df(e,o,r),wt(e,s)||(oo=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(yn&261930)===0?(oo=!0,e.memoizedState=o):(e=Fg(),an.lanes|=e,Ia|=e,s)}function X_(e,s,o,r,f){var m=oe.p;oe.p=m!==0&&8>m?m:8;var v=O.T,T={};O.T=T,Bf(e,!1,s,o);try{var X=f(),me=O.S;if(me!==null&&me(T,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var je=_2(X,r);Ll(e,s,je,vi(e))}else Ll(e,s,r,vi(e))}catch(Oe){Ll(e,s,{then:function(){},status:"rejected",reason:Oe},vi())}finally{oe.p=m,v!==null&&T.types!==null&&(v.types=T.types),O.T=v}}function w2(){}function Nf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=q_(e).queue;X_(e,f,s,F,o===null?w2:function(){return G_(e),o(r)})}function q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:F},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function G_(e){var s=q_(e);s.next===null&&(s=e.alternate.memoizedState),Ll(e,s.next.queue,{},vi())}function Rf(){return Ao(Zl)}function K_(){return qs().memoizedState}function Q_(){return qs().memoizedState}function S2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=vi();e=Ra(o);var r=Ba(s,e,o);r!==null&&(ai(r,s,o),Al(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function C2(e,s,o){var r=vi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ru(e)?J_(s,o):(o=Kd(e,s,o,r),o!==null&&(ai(o,e,r),eg(o,s,r)))}function Z_(e,s,o){var r=vi();Ll(e,s,o,r)}function Ll(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(ru(e))J_(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,T=m(v,o);if(f.hasEagerState=!0,f.eagerState=T,wt(T,v))return Hc(e,s,f,0),is===null&&Pc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return ai(o,e,r),eg(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ru(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&ai(s,e,2)}function ru(e){var s=e.alternate;return e===an||s!==null&&s===an}function J_(e,s){Vr=eu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function eg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,es(e,o)}}var Ol={readContext:Ao,use:su,useCallback:$s,useContext:$s,useEffect:$s,useImperativeHandle:$s,useLayoutEffect:$s,useInsertionEffect:$s,useMemo:$s,useReducer:$s,useRef:$s,useState:$s,useDebugValue:$s,useDeferredValue:$s,useTransition:$s,useSyncExternalStore:$s,useId:$s,useHostTransitionStatus:$s,useFormState:$s,useActionState:$s,useOptimistic:$s,useMemoCache:$s,useCacheRefresh:$s};Ol.useEffectEvent=$s;var tg={readContext:Ao,use:su,useCallback:function(e,s){return Wo().memoizedState=[e,s===void 0?null:s],e},useContext:Ao,useEffect:$_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,iu(4194308,4,U_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return iu(4194308,4,e,s)},useInsertionEffect:function(e,s){iu(4,2,e,s)},useMemo:function(e,s){var o=Wo();s=s===void 0?null:s;var r=e();if(hr){Be(!0);try{e()}finally{Be(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Wo();if(o!==void 0){var f=o(s);if(hr){Be(!0);try{o(s)}finally{Be(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=C2.bind(null,an,e),[r.memoizedState,e]},useRef:function(e){var s=Wo();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=Z_.bind(null,an,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=Wo();return Df(o,e,s)},useTransition:function(){var e=Mf(!1);return e=X_.bind(null,an,e.queue,!0,!1),Wo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=an,f=Wo();if(vn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),is===null)throw Error(a(349));(yn&127)!==0||w_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,$_(C_.bind(null,r,m,e),[e]),r.flags|=2048,Wr(9,{destroy:void 0},S_.bind(null,r,m,o,s),null),o},useId:function(){var e=Wo(),s=is.identifierPrefix;if(vn){var o=na,r=ta;o=(r&~(1<<32-xt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=tu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=g2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:R_,useActionState:R_,useOptimistic:function(e){var s=Wo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,an,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return Wo().memoizedState=S2.bind(null,an)},useEffectEvent:function(e){var s=Wo(),o={impl:e};return s.memoizedState=o,function(){if((Ln&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:Ao,use:su,useCallback:Y_,useContext:Ao,useEffect:Ef,useImperativeHandle:V_,useInsertionEffect:P_,useLayoutEffect:H_,useMemo:W_,useReducer:ou,useRef:z_,useState:function(){return ou(_a)},useDebugValue:Af,useDeferredValue:function(e,s){var o=qs();return F_(o,Gn.memoizedState,e,s)},useTransition:function(){var e=ou(_a)[0],s=qs().memoizedState;return[typeof e=="boolean"?e:Bl(e),s]},useSyncExternalStore:v_,useId:K_,useHostTransitionStatus:Rf,useFormState:B_,useActionState:B_,useOptimistic:function(e,s){var o=qs();return M_(o,Gn,e,s)},useMemoCache:Cf,useCacheRefresh:Q_};Lf.useEffectEvent=I_;var ng={readContext:Ao,use:su,useCallback:Y_,useContext:Ao,useEffect:Ef,useImperativeHandle:V_,useInsertionEffect:P_,useLayoutEffect:H_,useMemo:W_,useReducer:jf,useRef:z_,useState:function(){return jf(_a)},useDebugValue:Af,useDeferredValue:function(e,s){var o=qs();return Gn===null?Df(o,e,s):F_(o,Gn.memoizedState,e,s)},useTransition:function(){var e=jf(_a)[0],s=qs().memoizedState;return[typeof e=="boolean"?e:Bl(e),s]},useSyncExternalStore:v_,useId:K_,useHostTransitionStatus:Rf,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=qs();return Gn!==null?M_(o,Gn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:Q_};ng.useEffectEvent=I_;function Of(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var zf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=vi(),f=Ra(r);f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(ai(s,e,r),Al(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=vi(),f=Ra(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(ai(s,e,r),Al(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=vi(),r=Ra(o);r.tag=2,s!=null&&(r.callback=s),s=Ba(e,r,o),s!==null&&(ai(s,e,o),Al(s,e,o))}};function sg(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!pt(o,r)||!pt(f,m):!0}function og(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&zf.enqueueReplaceState(s,s.state,null)}function mr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ig(e){Ic(e)}function ag(e){console.error(e)}function rg(e){Ic(e)}function lu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function lg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=Ra(o),o.tag=3,o.payload={element:null},o.callback=function(){lu(e,s)},o}function cg(e){return e=Ra(e),e.tag=3,e}function ug(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){lg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){lg(s,o,r),typeof f!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function k2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&zr(s,o,f,!0),o=gi.current,o!==null){switch(o.tag){case 31:case 13:return Ni===null?bu():o.alternate===null&&Is===0&&(Is=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Gc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Gc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),bu(),!1}if(vn)return s=gi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),kl(Ti(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),kl(Ti(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ti(r,o),f=$f(e.stateNode,r,f),mf(e,f),Is!==4&&(Is=2)),!1;var m=Error(a(520),{cause:r});if(m=Ti(m,o),Yl===null?Yl=[m]:Yl.push(m),Is!==4&&(Is=2),s===null)return!0;r=Ti(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pa===null||!Pa.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=cg(f),ug(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),oo=!1;function Do(e,s,o,r){s.child=e===null?m_(s,null,o,r):fr(s,e.child,o,r)}function dg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return lr(s),r=bf(e,s,o,v,m,f),T=vf(),e!==null&&!oo?(wf(e,s,f),ga(e,s,f)):(vn&&T&&ef(s),s.flags|=1,Do(e,s,r,f),s.child)}function fg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,hg(e,s,m,r,f)):(e=Vc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:pt,o(v,r)&&e.ref===s.ref)return ga(e,s,f)}return s.flags|=1,e=da(m,r),e.ref=s.ref,e.return=s,s.child=e}function hg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(pt(m,r)&&e.ref===s.ref)if(oo=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(oo=!0);else return s.lanes=e.lanes,ga(e,s,f)}return Pf(e,s,o,r,f)}function mg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return pg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xc(s,m!==null?m.cachePool:null),m!==null?g_(s,m):_f(),y_(s);else return r=s.lanes=536870912,pg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(Xc(s,m.cachePool),g_(s,m),Oa(),s.memoizedState=null):(e!==null&&Xc(s,null),_f(),Oa());return Do(e,s,f,o),s.child}function zl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function pg(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:no._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&Xc(s,null),_f(),y_(s),e!==null&&zr(e,s,r,!0),s.childLanes=f,null}function cu(e,s){return s=du({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function _g(e,s,o){return fr(s,e.child,null,o),e=cu(s,s.pendingProps),e.flags|=2,yi(s),s.memoizedState=null,e}function j2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(vn){if(r.mode==="hidden")return e=cu(s,r),s.lanes=536870912,zl(null,e);if(yf(s),(e=ws)?(e=T0(e,Di),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=Jp(e),o.return=s,s.child=o,Eo=s,ws=null)):e=null,e===null)throw Aa(s);return s.lanes=536870912,null}return cu(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=_g(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(oo||zr(e,s,o,!1),f=(o&e.childLanes)!==0,oo||f){if(r=is,r!==null&&(v=Sn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,or(e,v),ai(r,e,v),If;bu(),s=_g(e,s,o)}else e=m.treeContext,ws=Ri(v.nextSibling),Eo=s,vn=!0,Ea=null,Di=!1,e!==null&&n_(s,e),s=cu(s,r),s.flags|=4096;return s}return e=da(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function uu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return lr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!oo?(wf(e,s,f),ga(e,s,f)):(vn&&r&&ef(s),s.flags|=1,Do(e,s,o,f),s.child)}function gg(e,s,o,r,f,m){return lr(s),s.updateQueue=null,o=b_(s,r,o,f),x_(e),r=vf(),e!==null&&!oo?(wf(e,s,m),ga(e,s,m)):(vn&&r&&ef(s),s.flags|=1,Do(e,s,o,m),s.child)}function yg(e,s,o,r,f){if(lr(s),s.stateNode===null){var m=Rr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Ao(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Ao(v):Rr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Of(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&zf.enqueueReplaceState(m,m.state,null),Nl(s,r,m,f),Dl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var T=s.memoizedProps,X=mr(o,T);m.props=X;var me=m.context,je=o.contextType;v=Rr,typeof je=="object"&&je!==null&&(v=Ao(je));var Oe=o.getDerivedStateFromProps;je=typeof Oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,je||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||me!==v)&&og(s,m,r,v),Na=!1;var _e=s.memoizedState;m.state=_e,Nl(s,r,m,f),Dl(),me=s.memoizedState,T||_e!==me||Na?(typeof Oe=="function"&&(Of(s,o,Oe,r),me=s.memoizedState),(X=Na||sg(s,o,X,r,_e,me,v))?(je||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=me),m.props=r,m.state=me,m.context=v,r=X):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,je=mr(o,v),m.props=je,Oe=s.pendingProps,_e=m.context,me=o.contextType,X=Rr,typeof me=="object"&&me!==null&&(X=Ao(me)),T=o.getDerivedStateFromProps,(me=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Oe||_e!==X)&&og(s,m,r,X),Na=!1,_e=s.memoizedState,m.state=_e,Nl(s,r,m,f),Dl();var xe=s.memoizedState;v!==Oe||_e!==xe||Na||e!==null&&e.dependencies!==null&&Wc(e.dependencies)?(typeof T=="function"&&(Of(s,o,T,r),xe=s.memoizedState),(je=Na||sg(s,o,je,r,_e,xe,X)||e!==null&&e.dependencies!==null&&Wc(e.dependencies))?(me||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,xe,X),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,xe,X)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&_e===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&_e===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=xe),m.props=r,m.state=xe,m.context=X,r=je):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&_e===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&_e===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,uu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=fr(s,e.child,null,f),s.child=fr(s,null,o,f)):Do(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ga(e,s,f),e}function xg(e,s,o,r){return ar(),s.flags|=256,Do(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:l_()}}function Vf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=bi),e}function bg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Xs.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(vn){if(f?La(s):Oa(),(e=ws)?(e=T0(e,Di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=Jp(e),o.return=s,s.child=o,Eo=s,ws=null)):e=null,e===null)throw Aa(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var T=r.children;return r=r.fallback,f?(Oa(),f=s.mode,T=du({mode:"hidden",children:T},f),r=ir(r,f,o,null),T.return=s,r.return=s,T.sibling=r,s.child=T,r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,zl(null,r)):(La(s),Yf(s,T))}var X=e.memoizedState;if(X!==null&&(T=X.dehydrated,T!==null)){if(m)s.flags&256?(La(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(Oa(),s.child=e.child,s.flags|=128,s=null):(Oa(),T=r.fallback,f=s.mode,r=du({mode:"visible",children:r.children},f),T=ir(T,f,o,null),T.flags|=2,r.return=s,T.return=s,r.sibling=T,s.child=r,fr(s,e.child,null,o),r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,s=zl(null,r));else if(La(s),kh(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var me=v.dgst;v=me,r=Error(a(419)),r.stack="",r.digest=v,kl({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(oo||zr(e,s,o,!1),v=(o&e.childLanes)!==0,oo||v){if(v=is,v!==null&&(r=Sn(v,o),r!==0&&r!==X.retryLane))throw X.retryLane=r,or(e,r),ai(v,e,r),If;Ch(T)||bu(),s=Wf(e,s,o)}else Ch(T)?(s.flags|=192,s.child=e.child,s=null):(e=X.treeContext,ws=Ri(T.nextSibling),Eo=s,vn=!0,Ea=null,Di=!1,e!==null&&n_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(Oa(),T=r.fallback,f=s.mode,X=e.child,me=X.sibling,r=da(X,{mode:"hidden",children:r.children}),r.subtreeFlags=X.subtreeFlags&65011712,me!==null?T=da(me,T):(T=ir(T,f,o,null),T.flags|=2),T.return=s,r.return=s,r.sibling=T,s.child=r,zl(null,r),r=s.child,T=e.child.memoizedState,T===null?T=Uf(o):(f=T.cachePool,f!==null?(X=no._currentValue,f=f.parent!==X?{parent:X,pool:X}:f):f=l_(),T={baseLanes:T.baseLanes|o,cachePool:f}),r.memoizedState=T,r.childLanes=Vf(e,v,o),s.memoizedState=Hf,zl(e.child,r)):(La(s),o=e.child,e=o.sibling,o=da(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=du({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function du(e,s){return e=_i(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return fr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function vg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function wg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Xs.current,T=(v&2)!==0;if(T?(v=v&1|2,s.flags|=128):v&=1,ie(Xs,v),Do(e,s,r,o),r=vn?Cl:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vg(e,o,s);else if(e.tag===19)vg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&Jc(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Jc(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ga(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ia|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(zr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=da(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=da(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Wc(e)))}function M2(e,s,o){switch(s.tag){case 3:ft(s,s.stateNode.containerInfo),Da(s,no,e.memoizedState.cache),ar();break;case 27:case 5:gt(s);break;case 4:ft(s,s.stateNode.containerInfo);break;case 10:Da(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(La(s),s.flags|=128,null):(o&s.child.childLanes)!==0?bg(e,s,o):(La(s),e=ga(e,s,o),e!==null?e.sibling:null);La(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(zr(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return wg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Xs,Xs.current),r)break;return null;case 22:return s.lanes=0,mg(e,s,o,s.pendingProps);case 24:Da(s,no,e.memoizedState.cache)}return ga(e,s,o)}function Sg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)oo=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return oo=!1,M2(e,s,o);oo=(e.flags&131072)!==0}else oo=!1,vn&&(s.flags&1048576)!==0&&t_(s,Cl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=ur(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=mr(e,r),s.tag=1,s=yg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===A){s.tag=11,s=dg(null,s,e,r,o);break e}else if(f===q){s.tag=14,s=fg(null,s,e,r,o);break e}}throw s=ee(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=mr(r,s.pendingProps),yg(e,s,r,f,o);case 3:e:{if(ft(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Nl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Da(s,no,r),r!==m.cache&&rf(s,[no],o,!0),Dl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=xg(e,s,r,o);break e}else if(r!==f){f=Ti(Error(a(424)),s),kl(f),s=xg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ws=Ri(e.firstChild),Eo=s,vn=!0,Ea=null,Di=!0,o=m_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ar(),r===f){s=ga(e,s,o);break e}Do(e,s,r,o)}s=s.child}return s;case 26:return uu(e,s),e===null?(o=B0(s.type,null,s.pendingProps,null))?s.memoizedState=o:vn||(o=s.type,e=s.pendingProps,r=Mu(Ye.current).createElement(o),r[cn]=s,r[Cn]=e,No(r,o,e),kn(r),s.stateNode=r):s.memoizedState=B0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return gt(s),e===null&&vn&&(r=s.stateNode=D0(s.type,s.pendingProps,Ye.current),Eo=s,Di=!0,f=ws,Ya(s.type)?(jh=f,ws=Ri(r.firstChild)):ws=f),Do(e,s,s.pendingProps.children,o),uu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&vn&&((f=r=ws)&&(r=sv(r,s.type,s.pendingProps,Di),r!==null?(s.stateNode=r,Eo=s,ws=Ri(r.firstChild),Di=!1,f=!0):f=!1),f||Aa(s)),gt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,y2,null,null,o),Zl._currentValue=f),uu(e,s),Do(e,s,r,o),s.child;case 6:return e===null&&vn&&((e=o=ws)&&(o=ov(o,s.pendingProps,Di),o!==null?(s.stateNode=o,Eo=s,ws=null,e=!0):e=!1),e||Aa(s)),null;case 13:return bg(e,s,o);case 4:return ft(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=fr(s,null,r,o):Do(e,s,r,o),s.child;case 11:return dg(e,s,s.type,s.pendingProps,o);case 7:return Do(e,s,s.pendingProps,o),s.child;case 8:return Do(e,s,s.pendingProps.children,o),s.child;case 12:return Do(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Da(s,s.type,r.value),Do(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,lr(s),f=Ao(f),r=r(f),s.flags|=1,Do(e,s,r,o),s.child;case 14:return fg(e,s,s.type,s.pendingProps,o);case 15:return hg(e,s,s.type,s.pendingProps,o);case 19:return wg(e,s,o);case 31:return j2(e,s,o);case 22:return mg(e,s,o,s.pendingProps);case 24:return lr(s),r=Ao(no),e===null?(f=uf(),f===null&&(f=is,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),Da(s,no,f)):((e.lanes&o)!==0&&(hf(e,s),Nl(s,null,null,o),Dl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Da(s,no,r)):(r=m.cache,Da(s,no,r),r!==f.cache&&rf(s,[no],o,!0))),Do(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ya(e){e.flags|=4}function qf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw dr=Gc,df}else e.flags&=-16777217}function Cg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I0(s))if(Kg())e.flags|=8192;else throw dr=Gc,df}function fu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?_t():536870912,e.lanes|=s,Gr|=s)}function $l(e,s){if(!vn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ss(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function T2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ss(s),null;case 1:return Ss(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ma(no),rt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Or(s)?ya(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),Ss(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ya(s),m!==null?(Ss(s),Cg(s,m)):(Ss(s),qf(s,f,null,r,o))):m?m!==e.memoizedState?(ya(s),Ss(s),Cg(s,m)):(Ss(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ya(s),Ss(s),qf(s,f,e,r,o)),null;case 27:if(Wt(s),o=Ye.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ss(s),null}e=de.current,Or(s)?s_(s):(e=D0(f,r,o),s.stateNode=e,ya(s))}return Ss(s),null;case 5:if(Wt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ss(s),null}if(m=de.current,Or(s))s_(s);else{var v=Mu(Ye.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[cn]=s,m[Cn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(No(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ya(s)}}return Ss(s),qf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ye.current,Or(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=Eo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[cn]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||b0(e.nodeValue,o)),e||Aa(s,!0)}else e=Mu(e).createTextNode(r),e[cn]=s,s.stateNode=e}return Ss(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=Or(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[cn]=s}else ar(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ss(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(yi(s),s):(yi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return Ss(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Or(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[cn]=s}else ar(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ss(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(yi(s),s):(yi(s),null)}return yi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),fu(s,s.updateQueue),Ss(s),null);case 4:return rt(),e===null&&_h(s.stateNode.containerInfo),Ss(s),null;case 10:return ma(s.type),Ss(s),null;case 19:if(re(Xs),r=s.memoizedState,r===null)return Ss(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)$l(r,!1);else{if(Is!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=Jc(e),m!==null){for(s.flags|=128,$l(r,!1),e=m.updateQueue,s.updateQueue=e,fu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Zp(o,e),o=o.sibling;return ie(Xs,Xs.current&1|2),vn&&fa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&ct()>gu&&(s.flags|=128,f=!0,$l(r,!1),s.lanes=4194304)}else{if(!f)if(e=Jc(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,fu(s,e),$l(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!vn)return Ss(s),null}else 2*ct()-r.renderingStartTime>gu&&o!==536870912&&(s.flags|=128,f=!0,$l(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ct(),e.sibling=null,o=Xs.current,ie(Xs,f?o&1|2:o&1),vn&&fa(s,r.treeForkCount),e):(Ss(s),null);case 22:case 23:return yi(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(Ss(s),s.subtreeFlags&6&&(s.flags|=8192)):Ss(s),o=s.updateQueue,o!==null&&fu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&re(cr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ma(no),Ss(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function E2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ma(no),rt(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Wt(s),null;case 31:if(s.memoizedState!==null){if(yi(s),s.alternate===null)throw Error(a(340));ar()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(yi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));ar()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return re(Xs),null;case 4:return rt(),null;case 10:return ma(s.type),null;case 22:case 23:return yi(s),gf(),e!==null&&re(cr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ma(no),null;case 25:return null;default:return null}}function kg(e,s){switch(tf(s),s.tag){case 3:ma(no),rt();break;case 26:case 27:case 5:Wt(s);break;case 4:rt();break;case 31:s.memoizedState!==null&&yi(s);break;case 13:yi(s);break;case 19:re(Xs);break;case 10:ma(s.type);break;case 22:case 23:yi(s),gf(),e!==null&&re(cr);break;case 24:ma(no)}}function Il(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(T){Yn(s,s.return,T)}}function za(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=s;var X=o,me=T;try{me()}catch(je){Yn(f,X,je)}}}r=r.next}while(r!==m)}}catch(je){Yn(s,s.return,je)}}function jg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{__(s,o)}catch(r){Yn(e,e.return,r)}}}function Mg(e,s,o){o.props=mr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Yn(e,s,r)}}function Pl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Yn(e,s,f)}}function sa(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Yn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Yn(e,s,f)}else o.current=null}function Tg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Yn(e,e.return,f)}}function Gf(e,s,o){try{var r=e.stateNode;Q2(r,e.type,o,s),r[Cn]=s}catch(f){Yn(e,e.return,f)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Qs));else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function hu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(hu(e,s,o),e=e.sibling;e!==null;)hu(e,s,o),e=e.sibling}function Ag(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);No(s,r,o),s[cn]=e,s[Cn]=o}catch(m){Yn(e,e.return,m)}}var xa=!1,io=!1,Zf=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,Co=null;function A2(e,s){if(e=e.containerInfo,xh=Bu,e=wn(e),Hn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,T=-1,X=-1,me=0,je=0,Oe=e,_e=null;t:for(;;){for(var xe;Oe!==o||f!==0&&Oe.nodeType!==3||(T=v+f),Oe!==m||r!==0&&Oe.nodeType!==3||(X=v+r),Oe.nodeType===3&&(v+=Oe.nodeValue.length),(xe=Oe.firstChild)!==null;)_e=Oe,Oe=xe;for(;;){if(Oe===e)break t;if(_e===o&&++me===f&&(T=v),_e===m&&++je===r&&(X=v),(xe=Oe.nextSibling)!==null)break;Oe=_e,_e=Oe.parentNode}Oe=xe}o=T===-1||X===-1?null:{start:T,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},Bu=!1,Co=s;Co!==null;)if(s=Co,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,Co=e;else for(;Co!==null;){switch(s=Co,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var jt=mr(o.type,f);e=r.getSnapshotBeforeUpdate(jt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Ut){Yn(o,o.return,Ut)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,Co=e;break}Co=s.return}}function Ng(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:va(e,o),r&4&&Il(5,o);break;case 1:if(va(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Yn(o,o.return,v)}else{var f=mr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Yn(o,o.return,v)}}r&64&&jg(o),r&512&&Pl(o,o.return);break;case 3:if(va(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{__(e,s)}catch(v){Yn(o,o.return,v)}}break;case 27:s===null&&r&4&&Ag(o);case 26:case 5:va(e,o),s===null&&r&4&&Tg(o),r&512&&Pl(o,o.return);break;case 12:va(e,o);break;case 31:va(e,o),r&4&&Lg(e,o);break;case 13:va(e,o),r&4&&Og(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=I2.bind(null,o),iv(e,o))));break;case 22:if(r=o.memoizedState!==null||xa,!r){s=s!==null&&s.memoizedState!==null||io,f=xa;var m=io;xa=r,(io=s)&&!m?wa(e,o,(o.subtreeFlags&8772)!==0):va(e,o),xa=f,io=m}break;case 30:break;default:va(e,o)}}function Rg(e){var s=e.alternate;s!==null&&(e.alternate=null,Rg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&Qo(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ts=null,ni=!1;function ba(e,s,o){for(o=o.child;o!==null;)Bg(e,s,o),o=o.sibling}function Bg(e,s,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Fe,o)}catch{}switch(o.tag){case 26:io||sa(o,s),ba(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:io||sa(o,s);var r=Ts,f=ni;Ya(o.type)&&(Ts=o.stateNode,ni=!1),ba(e,s,o),Gl(o.stateNode),Ts=r,ni=f;break;case 5:io||sa(o,s);case 6:if(r=Ts,f=ni,Ts=null,ba(e,s,o),Ts=r,ni=f,Ts!==null)if(ni)try{(Ts.nodeType===9?Ts.body:Ts.nodeName==="HTML"?Ts.ownerDocument.body:Ts).removeChild(o.stateNode)}catch(m){Yn(o,s,m)}else try{Ts.removeChild(o.stateNode)}catch(m){Yn(o,s,m)}break;case 18:Ts!==null&&(ni?(e=Ts,j0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),sl(e)):j0(Ts,o.stateNode));break;case 4:r=Ts,f=ni,Ts=o.stateNode.containerInfo,ni=!0,ba(e,s,o),Ts=r,ni=f;break;case 0:case 11:case 14:case 15:za(2,o,s),io||za(4,o,s),ba(e,s,o);break;case 1:io||(sa(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Mg(o,s,r)),ba(e,s,o);break;case 21:ba(e,s,o);break;case 22:io=(r=io)||o.memoizedState!==null,ba(e,s,o),io=r;break;default:ba(e,s,o)}}function Lg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sl(e)}catch(o){Yn(s,s.return,o)}}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sl(e)}catch(o){Yn(s,s.return,o)}}function D2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Dg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Dg),s;default:throw Error(a(435,e.tag))}}function mu(e,s){var o=D2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=P2.bind(null,e,r);r.then(f,f)}})}function si(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ya(T.type)){Ts=T.stateNode,ni=!1;break e}break;case 5:Ts=T.stateNode,ni=!1;break e;case 3:case 4:Ts=T.stateNode.containerInfo,ni=!0;break e}T=T.return}if(Ts===null)throw Error(a(160));Bg(m,v,f),Ts=null,ni=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)zg(s,e),s=s.sibling}var Fi=null;function zg(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:si(s,e),oi(e),r&4&&(za(3,e,e.return),Il(3,e),za(5,e,e.return));break;case 1:si(s,e),oi(e),r&512&&(io||o===null||sa(o,o.return)),r&64&&xa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Fi;if(si(s,e),oi(e),r&512&&(io||o===null||sa(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[As]||m[cn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),No(m,r,o),m[cn]=e,kn(m),r=m;break e;case"link":var v=z0("link","href",f).get(r+(o.href||""));if(v){for(var T=0;T<v.length;T++)if(m=v[T],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(T,1);break t}}m=f.createElement(r),No(m,r,o),f.head.appendChild(m);break;case"meta":if(v=z0("meta","content",f).get(r+(o.content||""))){for(T=0;T<v.length;T++)if(m=v[T],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(T,1);break t}}m=f.createElement(r),No(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[cn]=e,kn(m),r=m}e.stateNode=r}else $0(f,e.type,e.stateNode);else e.stateNode=O0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?$0(f,e.type,e.stateNode):O0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Gf(e,e.memoizedProps,o.memoizedProps)}break;case 27:si(s,e),oi(e),r&512&&(io||o===null||sa(o,o.return)),o!==null&&r&4&&Gf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(si(s,e),oi(e),r&512&&(io||o===null||sa(o,o.return)),e.flags&32){f=e.stateNode;try{Bo(f,"")}catch(jt){Yn(e,e.return,jt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,Gf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(si(s,e),oi(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(jt){Yn(e,e.return,jt)}}break;case 3:if(Au=null,f=Fi,Fi=Tu(s.containerInfo),si(s,e),Fi=f,oi(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{sl(s.containerInfo)}catch(jt){Yn(e,e.return,jt)}Zf&&(Zf=!1,$g(e));break;case 4:r=Fi,Fi=Tu(e.stateNode.containerInfo),si(s,e),oi(e),Fi=r;break;case 12:si(s,e),oi(e);break;case 31:si(s,e),oi(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,mu(e,r)));break;case 13:si(s,e),oi(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(_u=ct()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,mu(e,r)));break;case 22:f=e.memoizedState!==null;var X=o!==null&&o.memoizedState!==null,me=xa,je=io;if(xa=me||f,io=je||X,si(s,e),io=je,xa=me,oi(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||X||xa||io||pr(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){X=o=s;try{if(m=X.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=X.stateNode;var Oe=X.memoizedProps.style,_e=Oe!=null&&Oe.hasOwnProperty("display")?Oe.display:null;T.style.display=_e==null||typeof _e=="boolean"?"":(""+_e).trim()}}catch(jt){Yn(X,X.return,jt)}}}else if(s.tag===6){if(o===null){X=s;try{X.stateNode.nodeValue=f?"":X.memoizedProps}catch(jt){Yn(X,X.return,jt)}}}else if(s.tag===18){if(o===null){X=s;try{var xe=X.stateNode;f?M0(xe,!0):M0(X.stateNode,!1)}catch(jt){Yn(X,X.return,jt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,mu(e,o))));break;case 19:si(s,e),oi(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,mu(e,r)));break;case 30:break;case 21:break;default:si(s,e),oi(e)}}function oi(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Eg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);hu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Bo(v,""),o.flags&=-33);var T=Kf(e);hu(e,T,v);break;case 3:case 4:var X=o.stateNode.containerInfo,me=Kf(e);Qf(e,me,X);break;default:throw Error(a(161))}}catch(je){Yn(e,e.return,je)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function $g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;$g(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function va(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Ng(e,s.alternate,s),s=s.sibling}function pr(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:za(4,s,s.return),pr(s);break;case 1:sa(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Mg(s,s.return,o),pr(s);break;case 27:Gl(s.stateNode);case 26:case 5:sa(s,s.return),pr(s);break;case 22:s.memoizedState===null&&pr(s);break;case 30:pr(s);break;default:pr(s)}e=e.sibling}}function wa(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:wa(f,m,o),Il(4,m);break;case 1:if(wa(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(me){Yn(r,r.return,me)}if(r=m,f=r.updateQueue,f!==null){var T=r.stateNode;try{var X=f.shared.hiddenCallbacks;if(X!==null)for(f.shared.hiddenCallbacks=null,f=0;f<X.length;f++)p_(X[f],T)}catch(me){Yn(r,r.return,me)}}o&&v&64&&jg(m),Pl(m,m.return);break;case 27:Ag(m);case 26:case 5:wa(f,m,o),o&&r===null&&v&4&&Tg(m),Pl(m,m.return);break;case 12:wa(f,m,o);break;case 31:wa(f,m,o),o&&v&4&&Lg(f,m);break;case 13:wa(f,m,o),o&&v&4&&Og(f,m);break;case 22:m.memoizedState===null&&wa(f,m,o),Pl(m,m.return);break;case 30:break;default:wa(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&jl(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&jl(e))}function Xi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Ig(e,s,o,r),s=s.sibling}function Ig(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Xi(e,s,o,r),f&2048&&Il(9,s);break;case 1:Xi(e,s,o,r);break;case 3:Xi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&jl(e)));break;case 12:if(f&2048){Xi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,T=m.onPostCommit;typeof T=="function"&&T(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){Yn(s,s.return,X)}}else Xi(e,s,o,r);break;case 31:Xi(e,s,o,r);break;case 13:Xi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Xi(e,s,o,r):Hl(e,s):m._visibility&2?Xi(e,s,o,r):(m._visibility|=2,Fr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Xi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Xi(e,s,o,r)}}function Fr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,T=o,X=r,me=v.flags;switch(v.tag){case 0:case 11:case 15:Fr(m,v,T,X,f),Il(8,v);break;case 23:break;case 22:var je=v.stateNode;v.memoizedState!==null?je._visibility&2?Fr(m,v,T,X,f):Hl(m,v):(je._visibility|=2,Fr(m,v,T,X,f)),f&&me&2048&&Jf(v.alternate,v);break;case 24:Fr(m,v,T,X,f),f&&me&2048&&eh(v.alternate,v);break;default:Fr(m,v,T,X,f)}s=s.sibling}}function Hl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Hl(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Hl(o,r),f&2048&&eh(r.alternate,r);break;default:Hl(o,r)}s=s.sibling}}var Ul=8192;function Xr(e,s,o){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)Pg(e,s,o),e=e.sibling}function Pg(e,s,o){switch(e.tag){case 26:Xr(e,s,o),e.flags&Ul&&e.memoizedState!==null&&gv(o,Fi,e.memoizedState,e.memoizedProps);break;case 5:Xr(e,s,o);break;case 3:case 4:var r=Fi;Fi=Tu(e.stateNode.containerInfo),Xr(e,s,o),Fi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ul,Ul=16777216,Xr(e,s,o),Ul=r):Xr(e,s,o));break;default:Xr(e,s,o)}}function Hg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Vl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Co=r,Vg(r,e)}Hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:Vl(e),e.flags&2048&&za(9,e,e.return);break;case 3:Vl(e);break;case 12:Vl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,pu(e)):Vl(e);break;default:Vl(e)}}function pu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Co=r,Vg(r,e)}Hg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:za(8,s,s.return),pu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,pu(s));break;default:pu(s)}e=e.sibling}}function Vg(e,s){for(;Co!==null;){var o=Co;switch(o.tag){case 0:case 11:case 15:za(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:jl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,Co=r;else e:for(o=e;Co!==null;){r=Co;var f=r.sibling,m=r.return;if(Rg(r),r===o){Co=null;break e}if(f!==null){f.return=m,Co=f;break e}Co=m}}}var N2={getCacheForType:function(e){var s=Ao(no),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Ao(no).controller.signal}},R2=typeof WeakMap=="function"?WeakMap:Map,Ln=0,is=null,pn=null,yn=0,Vn=0,xi=null,$a=!1,qr=!1,th=!1,Sa=0,Is=0,Ia=0,_r=0,nh=0,bi=0,Gr=0,Yl=null,ii=null,sh=!1,_u=0,Yg=0,gu=1/0,yu=null,Pa=null,po=0,Ha=null,Kr=null,Ca=0,oh=0,ih=null,Wg=null,Wl=0,ah=null;function vi(){return(Ln&2)!==0&&yn!==0?yn&-yn:O.T!==null?fh():Cs()}function Fg(){if(bi===0)if((yn&536870912)===0||vn){var e=Et;Et<<=1,(Et&3932160)===0&&(Et=262144),bi=e}else bi=536870912;return e=gi.current,e!==null&&(e.flags|=32),bi}function ai(e,s,o){(e===is&&(Vn===2||Vn===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Ua(e,yn,bi,!1)),ut(e,o),((Ln&2)===0||e!==is)&&(e===is&&((Ln&2)===0&&(_r|=o),Is===4&&Ua(e,yn,bi,!1)),oa(e))}function Xg(e,s,o){if((Ln&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||At(e,s),f=r?O2(e,s):lh(e,s,!0),m=r;do{if(f===0){qr&&!r&&Ua(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!B2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var T=e;f=Yl;var X=T.current.memoizedState.isDehydrated;if(X&&(Qr(T,v).flags|=256),v=lh(T,v,!1),v!==2){if(th&&!X){T.errorRecoveryDisabledLanes|=m,_r|=m,f=4;break e}m=ii,ii=f,m!==null&&(ii===null?ii=m:ii.push.apply(ii,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Qr(e,0),Ua(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ua(r,s,bi,!$a);break e;case 2:ii=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=_u+300-ct(),10<f)){if(Ua(r,s,bi,!$a),Pe(r,0,!0)!==0)break e;Ca=s,r.timeoutHandle=C0(qg.bind(null,r,o,ii,yu,sh,s,bi,_r,Gr,$a,m,"Throttled",-0,0),f);break e}qg(r,o,ii,yu,sh,s,bi,_r,Gr,$a,m,null,-0,0)}}break}while(!0);oa(e)}function qg(e,s,o,r,f,m,v,T,X,me,je,Oe,_e,xe){if(e.timeoutHandle=-1,Oe=s.subtreeFlags,Oe&8192||(Oe&16785408)===16785408){Oe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qs},Pg(s,m,Oe);var jt=(m&62914560)===m?_u-ct():(m&4194048)===m?Yg-ct():0;if(jt=yv(Oe,jt),jt!==null){Ca=m,e.cancelPendingCommit=jt(n0.bind(null,e,s,m,o,r,f,v,T,X,je,Oe,null,_e,xe)),Ua(e,m,v,!me);return}}n0(e,s,m,o,r,f,v,T,X)}function B2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!wt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ua(e,s,o,r){s&=~nh,s&=~_r,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-xt(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&zn(e,o,s)}function xu(){return(Ln&6)===0?(Fl(0),!1):!0}function rh(){if(pn!==null){if(Vn===0)var e=pn.return;else e=pn,ha=rr=null,Sf(e),Hr=null,Tl=0,e=pn;for(;e!==null;)kg(e.alternate,e),e=e.return;pn=null}}function Qr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,ev(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Ca=0,rh(),is=e,pn=o=da(e.current,null),yn=s,Vn=0,xi=null,$a=!1,qr=At(e,s),th=!1,Gr=bi=nh=_r=Ia=Is=0,ii=Yl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-xt(r),m=1<<f;s|=e[f],r&=~m}return Sa=s,Pc(),o}function Gg(e,s){an=null,O.H=Ol,s===Pr||s===qc?(s=d_(),Vn=3):s===df?(s=d_(),Vn=4):Vn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,xi=s,pn===null&&(Is=1,lu(e,Ti(s,e.current)))}function Kg(){var e=gi.current;return e===null?!0:(yn&4194048)===yn?Ni===null:(yn&62914560)===yn||(yn&536870912)!==0?e===Ni:!1}function Qg(){var e=O.H;return O.H=Ol,e===null?Ol:e}function Zg(){var e=O.A;return O.A=N2,e}function bu(){Is=4,$a||(yn&4194048)!==yn&&gi.current!==null||(qr=!0),(Ia&134217727)===0&&(_r&134217727)===0||is===null||Ua(is,yn,bi,!1)}function lh(e,s,o){var r=Ln;Ln|=2;var f=Qg(),m=Zg();(is!==e||yn!==s)&&(yu=null,Qr(e,s)),s=!1;var v=Is;e:do try{if(Vn!==0&&pn!==null){var T=pn,X=xi;switch(Vn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:gi.current===null&&(s=!0);var me=Vn;if(Vn=0,xi=null,Zr(e,T,X,me),o&&qr){v=0;break e}break;default:me=Vn,Vn=0,xi=null,Zr(e,T,X,me)}}L2(),v=Is;break}catch(je){Gg(e,je)}while(!0);return s&&e.shellSuspendCounter++,ha=rr=null,Ln=r,O.H=f,O.A=m,pn===null&&(is=null,yn=0,Pc()),v}function L2(){for(;pn!==null;)Jg(pn)}function O2(e,s){var o=Ln;Ln|=2;var r=Qg(),f=Zg();is!==e||yn!==s?(yu=null,gu=ct()+500,Qr(e,s)):qr=At(e,s);e:do try{if(Vn!==0&&pn!==null){s=pn;var m=xi;t:switch(Vn){case 1:Vn=0,xi=null,Zr(e,s,m,1);break;case 2:case 9:if(c_(m)){Vn=0,xi=null,e0(s);break}s=function(){Vn!==2&&Vn!==9||is!==e||(Vn=7),oa(e)},m.then(s,s);break e;case 3:Vn=7;break e;case 4:Vn=5;break e;case 7:c_(m)?(Vn=0,xi=null,e0(s)):(Vn=0,xi=null,Zr(e,s,m,7));break;case 5:var v=null;switch(pn.tag){case 26:v=pn.memoizedState;case 5:case 27:var T=pn;if(v?I0(v):T.stateNode.complete){Vn=0,xi=null;var X=T.sibling;if(X!==null)pn=X;else{var me=T.return;me!==null?(pn=me,vu(me)):pn=null}break t}}Vn=0,xi=null,Zr(e,s,m,5);break;case 6:Vn=0,xi=null,Zr(e,s,m,6);break;case 8:rh(),Is=6;break e;default:throw Error(a(462))}}z2();break}catch(je){Gg(e,je)}while(!0);return ha=rr=null,O.H=r,O.A=f,Ln=o,pn!==null?0:(is=null,yn=0,Pc(),Is)}function z2(){for(;pn!==null&&!dt();)Jg(pn)}function Jg(e){var s=Sg(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,s===null?vu(e):pn=s}function e0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=gg(o,s,s.pendingProps,s.type,void 0,yn);break;case 11:s=gg(o,s,s.pendingProps,s.type.render,s.ref,yn);break;case 5:Sf(s);default:kg(o,s),s=pn=Zp(s,Sa),s=Sg(o,s,Sa)}e.memoizedProps=e.pendingProps,s===null?vu(e):pn=s}function Zr(e,s,o,r){ha=rr=null,Sf(s),Hr=null,Tl=0;var f=s.return;try{if(k2(e,f,s,o,yn)){Is=1,lu(e,Ti(o,e.current)),pn=null;return}}catch(m){if(f!==null)throw pn=f,m;Is=1,lu(e,Ti(o,e.current)),pn=null;return}s.flags&32768?(vn||r===1?e=!0:qr||(yn&536870912)!==0?e=!1:($a=e=!0,(r===2||r===9||r===3||r===6)&&(r=gi.current,r!==null&&r.tag===13&&(r.flags|=16384))),t0(s,e)):vu(s)}function vu(e){var s=e;do{if((s.flags&32768)!==0){t0(s,$a);return}e=s.return;var o=T2(s.alternate,s,Sa);if(o!==null){pn=o;return}if(s=s.sibling,s!==null){pn=s;return}pn=s=e}while(s!==null);Is===0&&(Is=5)}function t0(e,s){do{var o=E2(e.alternate,e);if(o!==null){o.flags&=32767,pn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){pn=e;return}pn=e=o}while(e!==null);Is=6,pn=null}function n0(e,s,o,r,f,m,v,T,X){e.cancelPendingCommit=null;do wu();while(po!==0);if((Ln&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=Gd,Xt(e,o,m,v,T,X),e===is&&(pn=is=null,yn=0),Kr=s,Ha=e,Ca=o,oh=m,ih=f,Wg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,H2(ot,function(){return r0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,f=oe.p,oe.p=2,v=Ln,Ln|=4;try{A2(e,s,o)}finally{Ln=v,oe.p=f,O.T=r}}po=1,s0(),o0(),i0()}}function s0(){if(po===1){po=0;var e=Ha,s=Kr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=O.T,O.T=null;var r=oe.p;oe.p=2;var f=Ln;Ln|=4;try{zg(s,e);var m=bh,v=wn(e.containerInfo),T=m.focusedElem,X=m.selectionRange;if(v!==T&&T&&T.ownerDocument&&bs(T.ownerDocument.documentElement,T)){if(X!==null&&Hn(T)){var me=X.start,je=X.end;if(je===void 0&&(je=me),"selectionStart"in T)T.selectionStart=me,T.selectionEnd=Math.min(je,T.value.length);else{var Oe=T.ownerDocument||document,_e=Oe&&Oe.defaultView||window;if(_e.getSelection){var xe=_e.getSelection(),jt=T.textContent.length,Ut=Math.min(X.start,jt),Qn=X.end===void 0?Ut:Math.min(X.end,jt);!xe.extend&&Ut>Qn&&(v=Qn,Qn=Ut,Ut=v);var ue=xs(T,Ut),ne=xs(T,Qn);if(ue&&ne&&(xe.rangeCount!==1||xe.anchorNode!==ue.node||xe.anchorOffset!==ue.offset||xe.focusNode!==ne.node||xe.focusOffset!==ne.offset)){var he=Oe.createRange();he.setStart(ue.node,ue.offset),xe.removeAllRanges(),Ut>Qn?(xe.addRange(he),xe.extend(ne.node,ne.offset)):(he.setEnd(ne.node,ne.offset),xe.addRange(he))}}}}for(Oe=[],xe=T;xe=xe.parentNode;)xe.nodeType===1&&Oe.push({element:xe,left:xe.scrollLeft,top:xe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Oe.length;T++){var Ne=Oe[T];Ne.element.scrollLeft=Ne.left,Ne.element.scrollTop=Ne.top}}Bu=!!xh,bh=xh=null}finally{Ln=f,oe.p=r,O.T=o}}e.current=s,po=2}}function o0(){if(po===2){po=0;var e=Ha,s=Kr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=O.T,O.T=null;var r=oe.p;oe.p=2;var f=Ln;Ln|=4;try{Ng(e,s.alternate,s)}finally{Ln=f,oe.p=r,O.T=o}}po=3}}function i0(){if(po===4||po===3){po=0,Xe();var e=Ha,s=Kr,o=Ca,r=Wg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?po=5:(po=0,Kr=Ha=null,a0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Pa=null),Es(o),s=s.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Fe,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=O.T,f=oe.p,oe.p=2,O.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var T=r[v];m(T.value,{componentStack:T.stack})}}finally{O.T=s,oe.p=f}}(Ca&3)!==0&&wu(),oa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Wl++:(Wl=0,ah=e):Wl=0,Fl(0)}}function a0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,jl(s)))}function wu(){return s0(),o0(),i0(),r0()}function r0(){if(po!==5)return!1;var e=Ha,s=oh;oh=0;var o=Es(Ca),r=O.T,f=oe.p;try{oe.p=32>o?32:o,O.T=null,o=ih,ih=null;var m=Ha,v=Ca;if(po=0,Kr=Ha=null,Ca=0,(Ln&6)!==0)throw Error(a(331));var T=Ln;if(Ln|=4,Ug(m.current),Ig(m,m.current,v,o),Ln=T,Fl(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Fe,m)}catch{}return!0}finally{oe.p=f,O.T=r,a0(e,s)}}function l0(e,s,o){s=Ti(o,s),s=$f(e.stateNode,s,2),e=Ba(e,s,2),e!==null&&(ut(e,2),oa(e))}function Yn(e,s,o){if(e.tag===3)l0(e,e,o);else for(;s!==null;){if(s.tag===3){l0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pa===null||!Pa.has(r))){e=Ti(o,e),o=cg(2),r=Ba(s,o,2),r!==null&&(ug(o,r,s,e),ut(r,2),oa(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new R2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=$2.bind(null,e,s,o),s.then(e,e))}function $2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,is===e&&(yn&o)===o&&(Is===4||Is===3&&(yn&62914560)===yn&&300>ct()-_u?(Ln&2)===0&&Qr(e,0):nh|=o,Gr===yn&&(Gr=0)),oa(e)}function c0(e,s){s===0&&(s=_t()),e=or(e,s),e!==null&&(ut(e,s),oa(e))}function I2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),c0(e,o)}function P2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),c0(e,o)}function H2(e,s){return nt(e,s)}var Su=null,Jr=null,uh=!1,Cu=!1,dh=!1,Va=0;function oa(e){e!==Jr&&e.next===null&&(Jr===null?Su=Jr=e:Jr=Jr.next=e),Cu=!0,uh||(uh=!0,V2())}function Fl(e,s){if(!dh&&Cu){dh=!0;do for(var o=!1,r=Su;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,T=r.pingedLanes;m=(1<<31-xt(42|e)+1)-1,m&=f&~(v&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,h0(r,m))}else m=yn,m=Pe(r,r===is?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||At(r,m)||(o=!0,h0(r,m));r=r.next}while(o);dh=!1}}function U2(){u0()}function u0(){Cu=uh=!1;var e=0;Va!==0&&J2()&&(e=Va);for(var s=ct(),o=null,r=Su;r!==null;){var f=r.next,m=d0(r,s);m===0?(r.next=null,o===null?Su=f:o.next=f,f===null&&(Jr=o)):(o=r,(e!==0||(m&3)!==0)&&(Cu=!0)),r=f}po!==0&&po!==5||Fl(e),Va!==0&&(Va=0)}function d0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-xt(m),T=1<<v,X=f[v];X===-1?((T&o)===0||(T&r)!==0)&&(f[v]=mt(T,s)):X<=s&&(e.expiredLanes|=T),m&=~T}if(s=is,o=yn,o=Pe(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Vn===2||Vn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Je(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||At(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Je(r),Es(o)){case 2:case 8:o=zt;break;case 32:o=ot;break;case 268435456:o=se;break;default:o=ot}return r=f0.bind(null,e),o=nt(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Je(r),e.callbackPriority=2,e.callbackNode=null,2}function f0(e,s){if(po!==0&&po!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(wu()&&e.callbackNode!==o)return null;var r=yn;return r=Pe(e,e===is?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Xg(e,r,s),d0(e,ct()),e.callbackNode!=null&&e.callbackNode===o?f0.bind(null,e):null)}function h0(e,s){if(wu())return null;Xg(e,s,!0)}function V2(){tv(function(){(Ln&6)!==0?nt(ht,U2):u0()})}function fh(){if(Va===0){var e=$r;e===0&&(e=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),Va=e}return Va}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:So(""+e)}function p0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function Y2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=m0((f[Cn]||null).action),v=r.submitter;v&&(s=(s=v[Cn]||null)?m0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var T=new Mo("action","action",null,r,f);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var X=v?p0(f,v):new FormData(f);Nf(o,{pending:!0,data:X,method:f.method,action:m},null,X)}}else typeof m=="function"&&(T.preventDefault(),X=v?p0(f,v):new FormData(f),Nf(o,{pending:!0,data:X,method:f.method,action:m},m,X))},currentTarget:f}]})}}for(var hh=0;hh<qd.length;hh++){var mh=qd[hh],W2=mh.toLowerCase(),F2=mh[0].toUpperCase()+mh.slice(1);Wi(W2,"on"+F2)}Wi(Yi,"onAnimationEnd"),Wi(ea,"onAnimationIteration"),Wi($c,"onAnimationStart"),Wi("dblclick","onDoubleClick"),Wi("focusin","onFocus"),Wi("focusout","onBlur"),Wi(Wd,"onTransitionRun"),Wi(Fd,"onTransitionStart"),Wi(Xd,"onTransitionCancel"),Wi(Gp,"onTransitionEnd"),gn("onMouseEnter",["mouseout","mouseover"]),gn("onMouseLeave",["mouseout","mouseover"]),gn("onPointerEnter",["pointerout","pointerover"]),gn("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function _0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var T=r[v],X=T.instance,me=T.currentTarget;if(T=T.listener,X!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=me;try{m(f)}catch(je){Ic(je)}f.currentTarget=null,m=X}else for(v=0;v<r.length;v++){if(T=r[v],X=T.instance,me=T.currentTarget,T=T.listener,X!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=me;try{m(f)}catch(je){Ic(je)}f.currentTarget=null,m=X}}}}function _n(e,s){var o=s[Qt];o===void 0&&(o=s[Qt]=new Set);var r=e+"__bubble";o.has(r)||(g0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),g0(o,e,r,s)}var ku="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[ku]){e[ku]=!0,Us.forEach(function(o){o!=="selectionchange"&&(X2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[ku]||(s[ku]=!0,ph("selectionchange",!1,s))}}function g0(e,s,o,r){switch(F0(s)){case 2:var f=vv;break;case 8:f=wv;break;default:f=Dh}o=f.bind(null,s,o,e),f=void 0,!uo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=r.return;v!==null;){var X=v.tag;if((X===3||X===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=xo(T),v===null)return;if(X=v.tag,X===5||X===6||X===26||X===27){r=m=v;continue e}T=T.parentNode}}r=r.return}Ys(function(){var me=m,je=co(o),Oe=[];e:{var _e=Kp.get(e);if(_e!==void 0){var xe=Mo,jt=e;switch(e){case"keypress":if(ho(o)===0)break e;case"keydown":case"keyup":xe=_s;break;case"focusin":jt="focus",xe=ve;break;case"focusout":jt="blur",xe=ve;break;case"beforeblur":case"afterblur":xe=ve;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=Lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=Z;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=Mn;break;case Yi:case ea:case $c:xe=et;break;case Gp:xe=gs;break;case"scroll":case"scrollend":xe=ns;break;case"wheel":xe=Os;break;case"copy":case"cut":case"paste":xe=$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=Pt;break;case"toggle":case"beforetoggle":xe=Jo}var Ut=(s&4)!==0,Qn=!Ut&&(e==="scroll"||e==="scrollend"),ue=Ut?_e!==null?_e+"Capture":null:_e;Ut=[];for(var ne=me,he;ne!==null;){var Ne=ne;if(he=Ne.stateNode,Ne=Ne.tag,Ne!==5&&Ne!==26&&Ne!==27||he===null||ue===null||(Ne=en(ne,ue),Ne!=null&&Ut.push(ql(ne,Ne,he))),Qn)break;ne=ne.return}0<Ut.length&&(_e=new xe(_e,jt,null,o,je),Oe.push({event:_e,listeners:Ut}))}}if((s&7)===0){e:{if(_e=e==="mouseover"||e==="pointerover",xe=e==="mouseout"||e==="pointerout",_e&&o!==hi&&(jt=o.relatedTarget||o.fromElement)&&(xo(jt)||jt[it]))break e;if((xe||_e)&&(_e=je.window===je?je:(_e=je.ownerDocument)?_e.defaultView||_e.parentWindow:window,xe?(jt=o.relatedTarget||o.toElement,xe=me,jt=jt?xo(jt):null,jt!==null&&(Qn=u(jt),Ut=jt.tag,jt!==Qn||Ut!==5&&Ut!==27&&Ut!==6)&&(jt=null)):(xe=null,jt=me),xe!==jt)){if(Ut=Lo,Ne="onMouseLeave",ue="onMouseEnter",ne="mouse",(e==="pointerout"||e==="pointerover")&&(Ut=Pt,Ne="onPointerLeave",ue="onPointerEnter",ne="pointer"),Qn=xe==null?_e:Ds(xe),he=jt==null?_e:Ds(jt),_e=new Ut(Ne,ne+"leave",xe,o,je),_e.target=Qn,_e.relatedTarget=he,Ne=null,xo(je)===me&&(Ut=new Ut(ue,ne+"enter",jt,o,je),Ut.target=he,Ut.relatedTarget=Qn,Ne=Ut),Qn=Ne,xe&&jt)t:{for(Ut=q2,ue=xe,ne=jt,he=0,Ne=ue;Ne;Ne=Ut(Ne))he++;Ne=0;for(var Ot=ne;Ot;Ot=Ut(Ot))Ne++;for(;0<he-Ne;)ue=Ut(ue),he--;for(;0<Ne-he;)ne=Ut(ne),Ne--;for(;he--;){if(ue===ne||ne!==null&&ue===ne.alternate){Ut=ue;break t}ue=Ut(ue),ne=Ut(ne)}Ut=null}else Ut=null;xe!==null&&y0(Oe,_e,xe,Ut,!1),jt!==null&&Qn!==null&&y0(Oe,Qn,jt,Ut,!0)}}e:{if(_e=me?Ds(me):window,xe=_e.nodeName&&_e.nodeName.toLowerCase(),xe==="select"||xe==="input"&&_e.type==="file")var Dn=z;else if(Rs(_e))if(K)Dn=Zt;else{Dn=vt;var Rt=lt}else xe=_e.nodeName,!xe||xe.toLowerCase()!=="input"||_e.type!=="checkbox"&&_e.type!=="radio"?me&&js(me.elementType)&&(Dn=z):Dn=Bt;if(Dn&&(Dn=Dn(e,me))){Oo(Oe,Dn,o,je);break e}Rt&&Rt(e,_e,me),e==="focusout"&&me&&_e.type==="number"&&me.memoizedProps.value!=null&&ts(_e,"number",_e.value)}switch(Rt=me?Ds(me):window,e){case"focusin":(Rs(Rt)||Rt.contentEditable==="true")&&(qt=Rt,vs=me,Tn=null);break;case"focusout":Tn=vs=qt=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,$o(Oe,o,je);break;case"selectionchange":if(Yt)break;case"keydown":case"keyup":$o(Oe,o,je)}var ln;if(ei)e:{switch(e){case"compositionstart":var xn="onCompositionStart";break e;case"compositionend":xn="onCompositionEnd";break e;case"compositionupdate":xn="onCompositionUpdate";break e}xn=void 0}else Dt?$e(e,o)&&(xn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(xn="onCompositionStart");xn&&(Se&&o.locale!=="ko"&&(Dt||xn!=="onCompositionStart"?xn==="onCompositionEnd"&&Dt&&(ln=ki()):(Ms=je,Ns="value"in Ms?Ms.value:Ms.textContent,Dt=!0)),Rt=ju(me,xn),0<Rt.length&&(xn=new Y(xn,e,null,o,je),Oe.push({event:xn,listeners:Rt}),ln?xn.data=ln:(ln=Nt(o),ln!==null&&(xn.data=ln)))),(ln=ti?rn(e,o):on(e,o))&&(xn=ju(me,"onBeforeInput"),0<xn.length&&(Rt=new Y("onBeforeInput","beforeinput",null,o,je),Oe.push({event:Rt,listeners:xn}),Rt.data=ln)),Y2(Oe,e,me,o,je)}_0(Oe,s)})}function ql(e,s,o){return{instance:e,listener:s,currentTarget:o}}function ju(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=en(e,o),f!=null&&r.unshift(ql(e,f,m)),f=en(e,s),f!=null&&r.push(ql(e,f,m))),e.tag===3)return r;e=e.return}return[]}function q2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var T=o,X=T.alternate,me=T.stateNode;if(T=T.tag,X!==null&&X===r)break;T!==5&&T!==26&&T!==27||me===null||(X=me,f?(me=en(o,m),me!=null&&v.unshift(ql(o,me,X))):f||(me=en(o,m),me!=null&&v.push(ql(o,me,X)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var G2=/\r\n?/g,K2=/\u0000|\uFFFD/g;function x0(e){return(typeof e=="string"?e:""+e).replace(G2,`
`).replace(K2,"")}function b0(e,s){return s=x0(s),x0(e)===s}function Kn(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Bo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Bo(e,""+r);break;case"className":rs(e,"class",r);break;case"tabIndex":rs(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":rs(e,o,r);break;case"style":fi(e,r,m);break;case"data":if(s!=="object"){rs(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=So(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Kn(e,s,"name",f.name,f,null),Kn(e,s,"formEncType",f.formEncType,f,null),Kn(e,s,"formMethod",f.formMethod,f,null),Kn(e,s,"formTarget",f.formTarget,f,null)):(Kn(e,s,"encType",f.encType,f,null),Kn(e,s,"method",f.method,f,null),Kn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=So(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Qs);break;case"onScroll":r!=null&&_n("scroll",e);break;case"onScrollEnd":r!=null&&_n("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=So(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":_n("beforetoggle",e),_n("toggle",e),vo(e,"popover",r);break;case"xlinkActuate":ks(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ks(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ks(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ks(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ks(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ks(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ks(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ks(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ks(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":vo(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Hi.get(o)||o,vo(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":fi(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Bo(e,r):(typeof r=="number"||typeof r=="bigint")&&Bo(e,""+r);break;case"onScroll":r!=null&&_n("scroll",e);break;case"onScrollEnd":r!=null&&_n("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Qs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[Cn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):vo(e,o,r)}}}function No(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_n("error",e),_n("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Kn(e,s,m,v,o,null)}}f&&Kn(e,s,"srcSet",o.srcSet,o,null),r&&Kn(e,s,"src",o.src,o,null);return;case"input":_n("invalid",e);var T=m=v=f=null,X=null,me=null;for(r in o)if(o.hasOwnProperty(r)){var je=o[r];if(je!=null)switch(r){case"name":f=je;break;case"type":v=je;break;case"checked":X=je;break;case"defaultChecked":me=je;break;case"value":m=je;break;case"defaultValue":T=je;break;case"children":case"dangerouslySetInnerHTML":if(je!=null)throw Error(a(137,s));break;default:Kn(e,s,r,je,o,null)}}Rn(e,m,T,X,me,v,f,!1);return;case"select":_n("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Kn(e,s,f,T,o,null)}s=m,o=v,e.multiple=!!r,s!=null?dn(e,!!r,s,!1):o!=null&&dn(e,!!r,o,!0);return;case"textarea":_n("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(T=o[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Kn(e,s,v,T,o,null)}ui(e,r,f,m);return;case"option":for(X in o)if(o.hasOwnProperty(X)&&(r=o[X],r!=null))switch(X){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Kn(e,s,X,r,o,null)}return;case"dialog":_n("beforetoggle",e),_n("toggle",e),_n("cancel",e),_n("close",e);break;case"iframe":case"object":_n("load",e);break;case"video":case"audio":for(r=0;r<Xl.length;r++)_n(Xl[r],e);break;case"image":_n("error",e),_n("load",e);break;case"details":_n("toggle",e);break;case"embed":case"source":case"link":_n("error",e),_n("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(me in o)if(o.hasOwnProperty(me)&&(r=o[me],r!=null))switch(me){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Kn(e,s,me,r,o,null)}return;default:if(js(s)){for(je in o)o.hasOwnProperty(je)&&(r=o[je],r!==void 0&&yh(e,s,je,r,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(r=o[T],r!=null&&Kn(e,s,T,r,o,null))}function Q2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,T=null,X=null,me=null,je=null;for(xe in o){var Oe=o[xe];if(o.hasOwnProperty(xe)&&Oe!=null)switch(xe){case"checked":break;case"value":break;case"defaultValue":X=Oe;default:r.hasOwnProperty(xe)||Kn(e,s,xe,null,r,Oe)}}for(var _e in r){var xe=r[_e];if(Oe=o[_e],r.hasOwnProperty(_e)&&(xe!=null||Oe!=null))switch(_e){case"type":m=xe;break;case"name":f=xe;break;case"checked":me=xe;break;case"defaultChecked":je=xe;break;case"value":v=xe;break;case"defaultValue":T=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,s));break;default:xe!==Oe&&Kn(e,s,_e,xe,r,Oe)}}wo(e,v,T,X,me,je,m,f);return;case"select":xe=v=T=_e=null;for(m in o)if(X=o[m],o.hasOwnProperty(m)&&X!=null)switch(m){case"value":break;case"multiple":xe=X;default:r.hasOwnProperty(m)||Kn(e,s,m,null,r,X)}for(f in r)if(m=r[f],X=o[f],r.hasOwnProperty(f)&&(m!=null||X!=null))switch(f){case"value":_e=m;break;case"defaultValue":T=m;break;case"multiple":v=m;default:m!==X&&Kn(e,s,f,m,r,X)}s=T,o=v,r=xe,_e!=null?dn(e,!!o,_e,!1):!!r!=!!o&&(s!=null?dn(e,!!o,s,!0):dn(e,!!o,o?[]:"",!1));return;case"textarea":xe=_e=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Kn(e,s,T,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":_e=f;break;case"defaultValue":xe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Kn(e,s,v,f,r,m)}In(e,_e,xe);return;case"option":for(var jt in o)if(_e=o[jt],o.hasOwnProperty(jt)&&_e!=null&&!r.hasOwnProperty(jt))switch(jt){case"selected":e.selected=!1;break;default:Kn(e,s,jt,null,r,_e)}for(X in r)if(_e=r[X],xe=o[X],r.hasOwnProperty(X)&&_e!==xe&&(_e!=null||xe!=null))switch(X){case"selected":e.selected=_e&&typeof _e!="function"&&typeof _e!="symbol";break;default:Kn(e,s,X,_e,r,xe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ut in o)_e=o[Ut],o.hasOwnProperty(Ut)&&_e!=null&&!r.hasOwnProperty(Ut)&&Kn(e,s,Ut,null,r,_e);for(me in r)if(_e=r[me],xe=o[me],r.hasOwnProperty(me)&&_e!==xe&&(_e!=null||xe!=null))switch(me){case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,s));break;default:Kn(e,s,me,_e,r,xe)}return;default:if(js(s)){for(var Qn in o)_e=o[Qn],o.hasOwnProperty(Qn)&&_e!==void 0&&!r.hasOwnProperty(Qn)&&yh(e,s,Qn,void 0,r,_e);for(je in r)_e=r[je],xe=o[je],!r.hasOwnProperty(je)||_e===xe||_e===void 0&&xe===void 0||yh(e,s,je,_e,r,xe);return}}for(var ue in o)_e=o[ue],o.hasOwnProperty(ue)&&_e!=null&&!r.hasOwnProperty(ue)&&Kn(e,s,ue,null,r,_e);for(Oe in r)_e=r[Oe],xe=o[Oe],!r.hasOwnProperty(Oe)||_e===xe||_e==null&&xe==null||Kn(e,s,Oe,_e,r,xe)}function v0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,T=f.duration;if(m&&T&&v0(v)){for(v=0,T=f.responseEnd,r+=1;r<o.length;r++){var X=o[r],me=X.startTime;if(me>T)break;var je=X.transferSize,Oe=X.initiatorType;je&&v0(Oe)&&(X=X.responseEnd,v+=je*(X<T?1:(T-me)/(X-me)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Mu(e){return e.nodeType===9?e:e.ownerDocument}function w0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function J2(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(e){return k0.resolve(null).then(e).catch(nv)}:C0;function nv(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function j0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),sl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Gl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Gl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,T=m.nodeName;m[As]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Gl(e.ownerDocument.body);o=f}while(o);sl(s)}function M0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),Qo(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function sv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[As])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function ov(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ri(e.nextSibling),e===null))return null;return e}function T0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ri(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function E0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ri(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function A0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function D0(e,s,o){switch(s=Mu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Gl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Qo(e)}var Bi=new Map,N0=new Set;function Tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=oe.d;oe.d={f:av,r:rv,D:lv,C:cv,L:uv,m:dv,X:hv,S:fv,M:mv};function av(){var e=ka.f(),s=xu();return e||s}function rv(e){var s=lo(e);s!==null&&s.tag===5&&s.type==="form"?G_(s):ka.r(e)}var el=typeof document>"u"?null:document;function R0(e,s,o){var r=el;if(r&&typeof s=="string"&&s){var f=Ls(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),N0.has(f)||(N0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),No(s,"link",e),kn(s),r.head.appendChild(s)))}}function lv(e){ka.D(e),R0("dns-prefetch",e,null)}function cv(e,s){ka.C(e,s),R0("preconnect",e,s)}function uv(e,s,o){ka.L(e,s,o);var r=el;if(r&&e&&s){var f='link[rel="preload"][as="'+Ls(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ls(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ls(o.imageSizes)+'"]')):f+='[href="'+Ls(e)+'"]';var m=f;switch(s){case"style":m=tl(e);break;case"script":m=nl(e)}Bi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Bi.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Kl(m))||s==="script"&&r.querySelector(Ql(m))||(s=r.createElement("link"),No(s,"link",e),kn(s),r.head.appendChild(s)))}}function dv(e,s){ka.m(e,s);var o=el;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ls(r)+'"][href="'+Ls(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=nl(e)}if(!Bi.has(m)&&(e=x({rel:"modulepreload",href:e},s),Bi.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ql(m)))return}r=o.createElement("link"),No(r,"link",e),kn(r),o.head.appendChild(r)}}}function fv(e,s,o){ka.S(e,s,o);var r=el;if(r&&e){var f=fs(r).hoistableStyles,m=tl(e);s=s||"default";var v=f.get(m);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(Kl(m)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Bi.get(m))&&Mh(e,o);var X=v=r.createElement("link");kn(X),No(X,"link",e),X._p=new Promise(function(me,je){X.onload=me,X.onerror=je}),X.addEventListener("load",function(){T.loading|=1}),X.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Eu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(m,v)}}}function hv(e,s){ka.X(e,s);var o=el;if(o&&e){var r=fs(o).hoistableScripts,f=nl(e),m=r.get(f);m||(m=o.querySelector(Ql(f)),m||(e=x({src:e,async:!0},s),(s=Bi.get(f))&&Th(e,s),m=o.createElement("script"),kn(m),No(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function mv(e,s){ka.M(e,s);var o=el;if(o&&e){var r=fs(o).hoistableScripts,f=nl(e),m=r.get(f);m||(m=o.querySelector(Ql(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Bi.get(f))&&Th(e,s),m=o.createElement("script"),kn(m),No(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function B0(e,s,o,r){var f=(f=Ye.current)?Tu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=tl(o.href),o=fs(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=tl(o.href);var m=fs(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Kl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Bi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(e,o),m||pv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=nl(o),o=fs(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function tl(e){return'href="'+Ls(e)+'"'}function Kl(e){return'link[rel="stylesheet"]['+e+"]"}function L0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function pv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),No(s,"link",o),kn(s),e.head.appendChild(s))}function nl(e){return'[src="'+Ls(e)+'"]'}function Ql(e){return"script[async]"+e}function O0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+Ls(o.href)+'"]');if(r)return s.instance=r,kn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),kn(r),No(r,"style",f),Eu(r,o.precedence,e),s.instance=r;case"stylesheet":f=tl(o.href);var m=e.querySelector(Kl(f));if(m)return s.state.loading|=4,s.instance=m,kn(m),m;r=L0(o),(f=Bi.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),kn(m);var v=m;return v._p=new Promise(function(T,X){v.onload=T,v.onerror=X}),No(m,"link",r),s.state.loading|=4,Eu(m,o.precedence,e),s.instance=m;case"script":return m=nl(o.src),(f=e.querySelector(Ql(m)))?(s.instance=f,kn(f),f):(r=o,(f=Bi.get(m))&&(r=x({},o),Th(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),kn(f),No(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Eu(r,o.precedence,e));return s.instance}function Eu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===s)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Th(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Au=null;function z0(e,s,o){if(Au===null){var r=new Map,f=Au=new Map;f.set(o,r)}else f=Au,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[As]||m[cn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var T=r.get(v);T?T.push(m):r.set(v,[m])}}return r}function $0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function _v(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function I0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=tl(r.href),m=s.querySelector(Kl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Du.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,kn(m);return}m=s.ownerDocument||s,r=L0(r),(f=Bi.get(f))&&Mh(r,f),m=m.createElement("link"),kn(m);var v=m;v._p=new Promise(function(T,X){v.onload=T,v.onerror=X}),No(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Du.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Eh=0;function yv(e,s){return e.stylesheets&&e.count===0&&Ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Eh===0&&(Eh=62500*Z2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Eh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Du(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nu=null;function Ru(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nu=new Map,s.forEach(xv,e),Nu=null,Du.call(e))}function xv(e,s){if(!(s.state.loading&4)){var o=Nu.get(e);if(o)var r=o.get(null);else{o=new Map,Nu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Du.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Zl={$$typeof:B,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function bv(e,s,o,r,f,m,v,T,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sn(0),this.hiddenUpdates=sn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function P0(e,s,o,r,f,m,v,T,X,me,je,Oe){return e=new bv(e,s,o,v,X,me,je,Oe,T),s=1,m===!0&&(s|=24),m=_i(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function H0(e){return e?(e=Rr,e):Rr}function U0(e,s,o,r,f,m){f=H0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ra(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ba(e,r,s),o!==null&&(ai(o,e,s),Al(o,e,s))}function V0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){V0(e,s),(e=e.alternate)&&V0(e,s)}function Y0(e){if(e.tag===13||e.tag===31){var s=or(e,67108864);s!==null&&ai(s,e,67108864),Ah(e,67108864)}}function W0(e){if(e.tag===13||e.tag===31){var s=vi();s=go(s);var o=or(e,s);o!==null&&ai(o,e,s),Ah(e,s)}}var Bu=!0;function vv(e,s,o,r){var f=O.T;O.T=null;var m=oe.p;try{oe.p=2,Dh(e,s,o,r)}finally{oe.p=m,O.T=f}}function wv(e,s,o,r){var f=O.T;O.T=null;var m=oe.p;try{oe.p=8,Dh(e,s,o,r)}finally{oe.p=m,O.T=f}}function Dh(e,s,o,r){if(Bu){var f=Nh(r);if(f===null)gh(e,s,r,Lu,o),X0(e,r);else if(Cv(f,e,s,o,r))r.stopPropagation();else if(X0(e,r),s&4&&-1<Sv.indexOf(e)){for(;f!==null;){var m=lo(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Vt(m.pendingLanes);if(v!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var X=1<<31-xt(v);T.entanglements[1]|=X,v&=~X}oa(m),(Ln&6)===0&&(gu=ct()+500,Fl(0))}}break;case 31:case 13:T=or(m,2),T!==null&&ai(T,m,2),xu(),Ah(m,2)}if(m=Nh(r),m===null&&gh(e,s,r,Lu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Nh(e){return e=co(e),Rh(e)}var Lu=null;function Rh(e){if(Lu=null,e=xo(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Lu=e,null}function F0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case ht:return 2;case zt:return 8;case ot:case I:return 32;case se:return 268435456;default:return 32}default:return 32}}var Bh=!1,Wa=null,Fa=null,Xa=null,Jl=new Map,ec=new Map,qa=[],Sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(e,s){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Jl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ec.delete(s.pointerId)}}function tc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=lo(s),s!==null&&Y0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Cv(e,s,o,r,f){switch(s){case"focusin":return Wa=tc(Wa,e,s,o,r,f),!0;case"dragenter":return Fa=tc(Fa,e,s,o,r,f),!0;case"mouseover":return Xa=tc(Xa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return Jl.set(m,tc(Jl.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,ec.set(m,tc(ec.get(m)||null,e,s,o,r,f)),!0}return!1}function q0(e){var s=xo(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,En(e.priority,function(){W0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,En(e.priority,function(){W0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ou(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Nh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);hi=r,o.target.dispatchEvent(r),hi=null}else return s=lo(o),s!==null&&Y0(s),e.blockedOn=o,!1;s.shift()}return!0}function G0(e,s,o){Ou(e)&&o.delete(s)}function kv(){Bh=!1,Wa!==null&&Ou(Wa)&&(Wa=null),Fa!==null&&Ou(Fa)&&(Fa=null),Xa!==null&&Ou(Xa)&&(Xa=null),Jl.forEach(G0),ec.forEach(G0)}function zu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kv)))}var $u=null;function K0(e){$u!==e&&($u=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){$u===e&&($u=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=lo(o);m!==null&&(e.splice(s,3),s-=3,Nf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function sl(e){function s(X){return zu(X,e)}Wa!==null&&zu(Wa,e),Fa!==null&&zu(Fa,e),Xa!==null&&zu(Xa,e),Jl.forEach(s),ec.forEach(s);for(var o=0;o<qa.length;o++){var r=qa[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<qa.length&&(o=qa[0],o.blockedOn===null);)q0(o),o.blockedOn===null&&qa.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[Cn]||null;if(typeof m=="function")v||K0(o);else if(v){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[Cn]||null)T=v.formAction;else if(Rh(f)!==null)continue}else T=v.action;typeof T=="function"?o[r+1]=T:(o.splice(r,3),r-=3),K0(o)}}}function Q0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Iu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=vi();U0(o,r,e,s,null,null)},Iu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;U0(e.current,2,null,e,null,null),xu(),s[it]=null}};function Iu(e){this._internalRoot=e}Iu.prototype.unstable_scheduleHydration=function(e){if(e){var s=Cs();e={blockedOn:null,target:e,priority:s};for(var o=0;o<qa.length&&s!==0&&s<qa[o].priority;o++);qa.splice(o,0,e),o===0&&q0(e)}};var Z0=n.version;if(Z0!=="19.2.4")throw Error(a(527,Z0,"19.2.4"));oe.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var jv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Fe=Pu.inject(jv),Ue=Pu}catch{}}return sc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ig,m=ag,v=rg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=P0(e,1,!1,null,null,o,r,null,f,m,v,Q0),e[it]=s.current,_h(e),new Lh(s)},sc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ig,v=ag,T=rg,X=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.formState!==void 0&&(X=o.formState)),s=P0(e,1,!0,s,o!=null?o:null,r,f,X,m,v,T,Q0),s.context=H0(null),o=s.current,r=vi(),r=go(r),f=Ra(r),f.callback=null,Ba(o,f,r),o=r,s.current.lanes=o,ut(s,o),oa(s),e[it]=s.current,_h(e),new Iu(s)},sc.version="19.2.4",sc}var ly;function Lv(){if(ly)return zh.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=Bv(),zh.exports}var Ov=Lv();const zv=Rx(Ov);var y=cp();const $v=Rx(y);function Iv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Pv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var fd;const $i="__TAURI_TO_IPC_KEY__";function Hv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function we(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Uv{get rid(){return Iv(this,fd,"f")}constructor(n){fd.set(this,void 0),Pv(this,fd,n)}async close(){return we("plugin:resources|close",{rid:this.rid})}}fd=new WeakMap;var wi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(wi||(wi={}));async function Lx(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await we("plugin:event|unlisten",{event:t,eventId:n})}async function gc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return we("plugin:event|listen",{event:t,target:c,handler:Hv(n)}).then(u=>async()=>Lx(t,u))}async function Vv(t,n,i){return gc(t,a=>{Lx(t,a.id),n(a)},i)}async function Yv(t,n){await we("plugin:event|emit",{event:t,payload:n})}async function Wv(t,n,i){await we("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Ox{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new yc(this.width*n,this.height*n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class yc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Ox(this.width/n,this.height/n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class ol{constructor(n){this.size=n}toLogical(n){return this.size instanceof Ox?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof yc?this.size:this.size.toPhysical(n)}[$i](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[$i]()}}class zx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ja(this.x*n,this.y*n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class Ja{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new zx(this.x/n,this.y/n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class Hu{constructor(n){this.position=n}toLogical(n){return this.position instanceof zx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ja?this.position:this.position.toPhysical(n)}[$i](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[$i]()}}class xc extends Uv{constructor(n){super(n)}static async new(n,i,a){return we("plugin:image|new",{rgba:Sd(n),width:i,height:a}).then(c=>new xc(c))}static async fromBytes(n){return we("plugin:image|from_bytes",{bytes:Sd(n)}).then(i=>new xc(i))}static async fromPath(n){return we("plugin:image|from_path",{path:n}).then(i=>new xc(i))}async rgba(){return we("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return we("plugin:image|size",{rid:this.rid})}}function Sd(t){return t==null?null:typeof t=="string"?t:t instanceof xc?t.rid:t}var jm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(jm||(jm={}));class Fv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var cy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(cy||(cy={}));function Mm(){return new $x(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Uh(){return we("plugin:window|get_all_windows").then(t=>t.map(n=>new $x(n,{skip:!0})))}const Vh=["tauri://created","tauri://error"];class $x{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||we("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Uh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Mm()}static async getAll(){return Uh()}static async getFocusedWindow(){for(const n of await Uh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:gc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Vv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Vh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Yv(n,i)}async emitTo(n,i,a){if(Vh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Wv(n,i,a)}_handleTauriEvent(n,i){return Vh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return we("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return we("plugin:window|inner_position",{label:this.label}).then(n=>new Ja(n))}async outerPosition(){return we("plugin:window|outer_position",{label:this.label}).then(n=>new Ja(n))}async innerSize(){return we("plugin:window|inner_size",{label:this.label}).then(n=>new yc(n))}async outerSize(){return we("plugin:window|outer_size",{label:this.label}).then(n=>new yc(n))}async isFullscreen(){return we("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return we("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return we("plugin:window|is_maximized",{label:this.label})}async isFocused(){return we("plugin:window|is_focused",{label:this.label})}async isDecorated(){return we("plugin:window|is_decorated",{label:this.label})}async isResizable(){return we("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return we("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return we("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return we("plugin:window|is_closable",{label:this.label})}async isVisible(){return we("plugin:window|is_visible",{label:this.label})}async title(){return we("plugin:window|title",{label:this.label})}async theme(){return we("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return we("plugin:window|is_always_on_top",{label:this.label})}async center(){return we("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===jm.Critical?i={type:"Critical"}:i={type:"Informational"}),we("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return we("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return we("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return we("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return we("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return we("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return we("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return we("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return we("plugin:window|maximize",{label:this.label})}async unmaximize(){return we("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return we("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return we("plugin:window|minimize",{label:this.label})}async unminimize(){return we("plugin:window|unminimize",{label:this.label})}async show(){return we("plugin:window|show",{label:this.label})}async hide(){return we("plugin:window|hide",{label:this.label})}async close(){return we("plugin:window|close",{label:this.label})}async destroy(){return we("plugin:window|destroy",{label:this.label})}async setDecorations(n){return we("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return we("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return we("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return we("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return we("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return we("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return we("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return we("plugin:window|set_size",{label:this.label,value:n instanceof ol?n:new ol(n)})}async setMinSize(n){return we("plugin:window|set_min_size",{label:this.label,value:n instanceof ol?n:n?new ol(n):null})}async setMaxSize(n){return we("plugin:window|set_max_size",{label:this.label,value:n instanceof ol?n:n?new ol(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return we("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return we("plugin:window|set_position",{label:this.label,value:n instanceof Hu?n:new Hu(n)})}async setFullscreen(n){return we("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return we("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return we("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return we("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return we("plugin:window|set_icon",{label:this.label,value:Sd(n)})}async setSkipTaskbar(n){return we("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return we("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return we("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return we("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return we("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return we("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Hu?n:new Hu(n)})}async setIgnoreCursorEvents(n){return we("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return we("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return we("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return we("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return we("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return we("plugin:window|set_overlay_icon",{label:this.label,value:n?Sd(n):void 0})}async setProgressBar(n){return we("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return we("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return we("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return we("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(wi.WINDOW_RESIZED,i=>{i.payload=new yc(i.payload),n(i)})}async onMoved(n){return this.listen(wi.WINDOW_MOVED,i=>{i.payload=new Ja(i.payload),n(i)})}async onCloseRequested(n){return this.listen(wi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Fv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(wi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),a=await this.listen(wi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ja(d.payload.position)}})}),c=await this.listen(wi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),u=await this.listen(wi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(wi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(wi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(wi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(wi.WINDOW_THEME_CHANGED,n)}}var uy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(uy||(uy={}));var dy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(dy||(dy={}));var fy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(fy||(fy={}));var hy;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(hy||(hy={}));async function Xv(t={}){return typeof t=="object"&&Object.freeze(t),await we("plugin:dialog|open",{options:t})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=(...t)=>t.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=t=>{const n=Gv(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=y.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>y.createElement("svg",{ref:p,...Kv,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Ix("lucide",c),...!u&&!Qv(h)&&{"aria-hidden":"true"},...h},[...d.map(([g,_])=>y.createElement(g,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=(t,n)=>{const i=y.forwardRef(({className:a,...c},u)=>y.createElement(Zv,{ref:u,iconNode:n,className:Ix(`lucide-${qv(my(t))}`,`lucide-${t}`,a),...c}));return i.displayName=my(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],ew=Px("panel-left-close",Jv);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],nw=Px("panel-left-open",tw),sw=3.7,Uu=200,Tm=240,cs=540,Ps=176,Yh=32,xl=20,ow=Tm/2,oc=cs+ow,gr=18,yr=18,Wh="#E6E6E6";function py(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function kr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ja(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function pc(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ja(t).localeCompare(ja(n))}function Hx(t){return[...t].sort(pc)}function iw(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ja(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ja(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=ja(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const k=(g=a.get(w))!=null?g:[];k.push(b),a.set(w,k)}for(const b of a.values())b.sort(pc);const c=t.filter(b=>{var w;return((w=i.get(ja(b)))!=null?w:0)===0}).sort(pc),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=ja(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const k=ja(S),C=((x=i.get(k))!=null?x:0)-1;i.set(k,C),C===0&&c.push(S)}c.sort(pc)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ja(b))).sort(pc)]}function Ux(t,n){var i;return Hx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Vx(t,n,i){return Ux(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function aw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Vu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function rw(t,n,i){var _,x,b,w,S,k,C;const a=Vx(t,i,n);if(a.length===0)return null;const c=a.map(j=>kr(t,j)),u=new Set(c.map(j=>j.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(j=>j.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,g=c.find(j=>h&&j.id===h||d&&j.id===d?!0:!j.parentSha||!u.has(j.parentSha));return g||((C=(k=aw(c,p!=null?p:void 0))!=null?k:c[0])!=null?C:null)}function lw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Ux(t.name,i);if(a.length>0){const g=a.map(b=>kr(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function up(t,n,i={},a={}){var ce,le,Ce,Ae;const u=new Map(t.map(ee=>[ee.name,ee])),d=new Map,h=new Map;for(const ee of t){const O=((ce=i[ee.name])!=null?ce:[]).filter(oe=>oe.kind!=="branch-created").map(oe=>new Date(oe.date).getTime()).filter(oe=>Number.isFinite(oe)).sort((oe,F)=>oe-F)[0];O!=null&&h.set(ee.name,O)}const p=ee=>{const fe=h.get(ee.name);return fe!=null?fe:py(ee).start},g=ee=>{var O;const fe=(O=a[ee.name])!=null?O:null;return fe&&fe!==ee.name&&(fe===n||u.has(fe))?fe:ee.name===n?null:ee.parentBranch&&ee.parentBranch!==ee.name&&(ee.parentBranch===n||u.has(ee.parentBranch))?ee.parentBranch:null};for(const ee of t){if(ee.name===n)continue;const fe=(le=g(ee))!=null?le:n,O=(Ce=d.get(fe))!=null?Ce:[];O.push(ee),d.set(fe,O)}for(const ee of d.values())ee.sort((fe,O)=>p(fe)-p(O)||fe.name.localeCompare(O.name));const _=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const ee of Object.values(i))for(const fe of ee){const O=new Date(fe.date).getTime();Number.isFinite(O)&&(fe.fullSha&&S.set(fe.fullSha,O),fe.sha&&S.set(fe.sha,O))}const k=(ee,fe)=>({start:Math.min(ee,fe),end:Math.max(ee,fe)}),C=ee=>{var ie,de;const fe=k(p(ee),py(ee).end),O=[fe],oe=fe.start,F=lw(ee,n,i),Q=F?S.get(F):void 0,pe=new Date((de=(ie=ee.divergedFromDate)!=null?ie:ee.createdDate)!=null?de:ee.lastCommitDate).getTime(),N=Number.isFinite(Q!=null?Q:NaN)?Q:Number.isFinite(pe)?pe:null;if(N==null)return O;const re=k(N,oe);return re.start!==re.end&&O.push(re),O},j=Math.max(1,360*60*1e3*sw),R=(ee,fe)=>!(ee.start-fe.end>=j||fe.start-ee.end>=j),B=(ee,fe)=>fe.some(O=>{var oe;return((oe=w.get(ee))!=null?oe:[]).some(F=>R(O,F))}),A=(ee,fe=new Set)=>{const O=b.get(ee);if(O!=null)return O;if(fe.has(ee))return 1;fe.add(ee);const oe=u.get(ee);if(!oe||ee===n)return fe.delete(ee),b.set(ee,0),0;const F=g(oe),Q=F?A(F,fe)+1:1;return fe.delete(ee),b.set(ee,Q),Q},P=(ee,fe=new Set)=>{var Ye,De;const O=_.get(ee);if(O)return O.column;if(fe.has(ee))return 0;fe.add(ee);const oe=u.get(ee);if(!oe)return fe.delete(ee),0;if(ee===n){const ft={name:ee,column:0,parentName:null};_.set(ee,ft),x.push(ft);const rt=C(oe);return w.set(0,[...(Ye=w.get(0))!=null?Ye:[],...rt]),fe.delete(ee),0}const F=g(oe),Q=F&&!fe.has(F)?F:null,pe=Q?P(Q,fe):0,N=Math.max(1,A(ee)),re=Math.max(Q?pe+1:1,N),ie=C(oe);let de=re;for(;B(de,ie);)de+=1;const Te={name:ee,column:de,parentName:Q};return _.set(ee,Te),x.push(Te),w.set(de,[...(De=w.get(de))!=null?De:[],...ie]),fe.delete(ee),de};P(n);const V=t.filter(ee=>!_.has(ee.name)).sort((ee,fe)=>p(ee)-p(fe)||ee.name.localeCompare(fe.name)),q=V.filter(ee=>g(ee)!=null),U=V.filter(ee=>g(ee)==null);for(const ee of q)P(ee.name);let J=Math.max(0,...x.map(ee=>ee.column))+1+1;for(const ee of U){const fe=C(ee);let O=J;for(;B(O,fe);)O+=1;const oe={name:ee.name,column:O,parentName:null};_.set(ee.name,oe),x.push(oe),w.set(O,[...(Ae=w.get(O))!=null?Ae:[],...fe]),J=O+1}return x.sort((ee,fe)=>ee.column-fe.column||ee.name.localeCompare(fe.name))}function cw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var g;const p=(g=i[h.name])!=null?g:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Yu=2.25,qi=0,Xh=0,uw=1800*1e3,dw=1440*60*1e3,Li=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Xo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function _y(t,n,i=new Map){var q,U,J,ce,le,Ce,Ae,ee,fe,O,oe,F;if(t.length===0)return new Map;const a=[...t].sort((Q,pe)=>{const N=Li(Q.date)-Li(pe.date);return N!==0?N:Q.id!==pe.id?Q.id.localeCompare(pe.id):Q.visualId.localeCompare(pe.visualId)}),c=new Map;for(const Q of t){const pe=(q=Q.parentSha)!=null?q:null;if(pe){const N=(U=c.get(pe))!=null?U:new Set;N.add(Q.id),c.set(pe,N)}for(const N of(J=i.get(Q.id))!=null?J:[]){if(!N)continue;const re=(ce=c.get(N))!=null?ce:new Set;re.add(Q.id),c.set(N,re)}}const u=new Map,d=new Map,h=new Map,p=new Set,g=new Map,_=new Map,x=new Map,b=new Map;for(const Q of t){const pe=(le=g.get(Q.branchName))!=null?le:new Set;pe.add(Q.id),g.set(Q.branchName,pe);const N=(Ae=(Ce=n.get(Q.branchName))==null?void 0:Ce.column)!=null?Ae:0,re=(ee=_.get(Q.id))!=null?ee:new Set;re.add(N),_.set(Q.id,re);const ie=new Set;Q.parentSha&&ie.add(Q.parentSha),x.set(Q.visualId,ie);const de=new Set(ie);for(const Te of(fe=i.get(Q.id))!=null?fe:[])Te&&de.add(Te);b.set(Q.visualId,de)}const w=new Set(Array.from(_.keys())),S=Array.from(w),k=new Map,C=Q=>{const pe=[];for(const N of S)Xo(N,Q)&&pe.push(N);return pe},j=new Map;for(const Q of S)j.set(Q,new Set);for(const Q of t){const pe=C(Q.id);if(pe.length===0)continue;const N=(O=b.get(Q.visualId))!=null?O:new Set,re=new Set;for(const ie of N)for(const de of C(ie))re.add(de);for(const ie of pe){const de=(oe=j.get(ie))!=null?oe:new Set;for(const Te of re)de.add(Te);j.set(ie,de)}}const R=new Map,B=(Q,pe=new Set)=>{var de;const N=R.get(Q);if(N)return N;if(pe.has(Q))return new Set;pe.add(Q);const re=(de=j.get(Q))!=null?de:new Set,ie=new Set;for(const Te of re){ie.add(Te);for(const Ye of B(Te,pe))ie.add(Ye)}return pe.delete(Q),R.set(Q,ie),ie},A=(Q,pe)=>{if(Xo(Q,pe))return!0;const N=C(Q),re=C(pe);for(const ie of N){const de=B(ie);for(const Te of re)if(de.has(Te))return!0}for(const ie of re){const de=B(ie);for(const Te of N)if(de.has(Te))return!0}return!1};let P=1;const V=(Q,pe)=>{var Ct,Ft,G,ke,nt,Je,dt,Xe,ct;const N=(Ft=(Ct=n.get(Q.branchName))==null?void 0:Ct.column)!=null?Ft:0,re=(G=g.get(Q.branchName))!=null?G:new Set,de=!(!!Q.parentSha&&re.has(Q.parentSha))&&Q.parentSha?Q.parentSha:null,Te=Array.from(pe).flatMap(Qe=>C(Qe).flatMap(ht=>{var zt;return(zt=k.get(ht))!=null?zt:[]})),Ye=(Q.kind==="branch-created"||Q.kind==="stash")&&Te.length>0?Math.max(...Te)+1:null,De=Te.length>0?Math.max(...Te)+1:1,ft=(ke=c.get(Q.id))!=null?ke:new Set,gt=Array.from(ft).flatMap(Qe=>{var ht;return Array.from((ht=_.get(Qe))!=null?ht:[])}).some(Qe=>Qe!==N),Wt=new Date(Q.date).getTime(),We=Math.max(De,1);let at=null;for(let Qe=We;Qe<P;Qe+=1){const ht=(nt=d.get(Qe))!=null?nt:[];if(ht.length===0||gt||p.has(Qe))continue;const zt=(Je=b.get(Q.visualId))!=null?Je:new Set;if(!(ht.some(te=>A(Q.id,te.sha)?!0:Array.from(zt).some(Fe=>Xo(Fe,te.sha)))||ht.some(te=>te.column===N)||!Number.isFinite(Wt)||!ht.every(te=>{if(!Number.isFinite(te.time))return!1;const Fe=!!de&&!!te.branchEntryParentSha&&de===te.branchEntryParentSha?dw:uw;return Math.abs(te.time-Wt)<=Fe}))){at=Qe;break}}Ye!=null&&(at=Ye),at==null&&(at=Math.max(De,P)),u.set(Q.visualId,at),at>=P&&(P=at+1);const St=(dt=d.get(at))!=null?dt:[];St.push({visualId:Q.visualId,sha:Q.id,column:N,time:Wt,branchEntryParentSha:de}),d.set(at,St),gt&&p.add(at);for(const Qe of pe){const ht=(Xe=h.get(Qe))!=null?Xe:[];ht.push(at),h.set(Qe,ht)}const Gt=(ct=k.get(Q.id))!=null?ct:[];Gt.push(at),k.set(Q.id,Gt)};for(const Q of a){const pe=(F=x.get(Q.visualId))!=null?F:new Set;V(Q,pe)}return u}function Cd(t){var An,Ii,ci,Ho,Ji,Uo,Pi,Ls,wo,Rn,ts,dn,In,ui,Bo,di,Kt,fi,js,Hi,Ci,So,Qs,hi,co,mn,Vs,mi,hs,Ys,en,Zs,uo,Pn,Ms,Ns,fo,ki,ho,Vo,Yo,Fn,Bn,Mo,ms,ns,Ws,Fs,ps,To,Lo;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:g,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:k,orientation:C="horizontal",nodePositionOverrides:j={}}=t,R=C==="horizontal",B=new Map(i.map(M=>[M.name,M])),A=new Map(n.map(M=>[M.name,M])),P=iw([...a.map(M=>{var Z,ge,ve;return{id:M.fullSha,branchName:d,message:(Z=M.prTitle)!=null?Z:M.sha,author:"",date:M.date,parentSha:(ve=(ge=M.parentShas)==null?void 0:ge[0])!=null?ve:null}}),...((An=h[d])!=null?An:[]).map(M=>kr(d,M)),...c.map(M=>kr(M.branch||"",M)),...u.map(M=>kr(M.branch||"",M))]),V=new Map,q=new Map;for(const M of i){if(M.name===d)continue;const Z=Vx(M.name,g,h);q.set(M.name,Z);const ge=Hx(Z.map($=>kr(M.name,$)));if(ge.length>0){V.set(M.name,ge);continue}const ve=(Ho=(ci=(Ii=M.presidesFromSha)!=null?Ii:M.divergedFromSha)!=null?ci:M.createdFromSha)!=null?Ho:null;if(!ve)continue;const Ve=(Ji=c.find($=>Xo($.fullSha,ve)||Xo($.sha,ve)))==null?void 0:Ji.date,et=Ve?null:(Uo=Object.values(h).flat().find($=>Xo($.fullSha,ve)||Xo($.sha,ve)))==null?void 0:Uo.date,D={id:`BRANCH_HEAD:${M.name}:${ve}`,branchName:M.name,message:`Branch ${M.name}`,author:M.lastCommitAuthor,date:(wo=(Ls=(Pi=Ve!=null?Ve:et)!=null?Pi:M.createdDate)!=null?Ls:M.divergedFromDate)!=null?wo:M.lastCommitDate,parentSha:ve,kind:"branch-created"};V.set(M.name,[D])}const U=new Set(P.map(M=>M.id)),J=(Rn=[...P].sort((M,Z)=>Li(M.date)-Li(Z.date)||M.id.localeCompare(Z.id))[0])!=null?Rn:null,ce=new Map(Array.from(V.entries()).map(([M,Z])=>[M,new Set(Z.map(ge=>ge.id))])),le=new Map;for(const M of i){if(M.name===d)continue;const Z=rw(M.name,h,g);if(Z){le.set(M.name,Z);continue}const ge=(ts=V.get(M.name))==null?void 0:ts[0];if(ge){const ve=(ui=(In=(dn=M.presidesFromSha)!=null?dn:M.divergedFromSha)!=null?In:M.createdFromSha)!=null?ui:null;le.set(M.name,{...ge,parentSha:ve})}}const Ce=new Map;for(const[M,Z]of V.entries()){const ge=Z.find(ve=>ve.kind!=="branch-created");ge&&Ce.set(M,ge)}const Ae=new Map;for(const[M,Z]of V.entries()){const ge=Z.filter(et=>et.kind!=="branch-created"),Ve=(Bo=(ge.length>0?ge:Z)[0])!=null?Bo:null;Ve&&Ae.set(M,Ve)}const ee=new Map;for(const M of i){if(M.name===d)continue;const Z=(di=Ae.get(M.name))!=null?di:null,ge=(fi=(Kt=le.get(M.name))==null?void 0:Kt.parentSha)!=null?fi:null,ve=(Ci=(Hi=(js=M.presidesFromSha)!=null?js:M.divergedFromSha)!=null?Hi:M.createdFromSha)!=null?Ci:null,Ve=(So=Z==null?void 0:Z.parentSha)!=null?So:null,et=(Qs=Ve!=null?Ve:ge)!=null?Qs:ve;et&&ee.set(M.name,et)}const fe=M=>{var et,D,$,H,Y,Re,qe,st;const Z=(et=p[M.name])!=null?et:null;if(!(Z&&Z!==d&&Z!==M.name&&B.has(Z)))return Z!=null?Z:"";const ve=(H=($=(D=ee.get(M.name))!=null?D:M.presidesFromSha)!=null?$:M.divergedFromSha)!=null?H:M.createdFromSha;if(ve&&((Y=ce.get(Z))!=null?Y:new Set).has(ve))return Z;const Ve=(qe=(Re=le.get(M.name))==null?void 0:Re.parentSha)!=null?qe:null;return Ve&&((st=ce.get(Z))!=null?st:new Set).has(Ve),Z},O=M=>{var Ve,et,D,$,H,Y,Re,qe;const Z=le.get(M.name),ge=(H=($=(D=(et=(Ve=ee.get(M.name))!=null?Ve:Z==null?void 0:Z.parentSha)!=null?et:M.presidesFromSha)!=null?D:M.divergedFromSha)!=null?$:M.createdFromSha)!=null?H:null;if(!M.parentBranch&&!ge||!ge)return null;if(fe(M)===d){if(U.has(ge))return ge;const st=(Y=Z==null?void 0:Z.parentSha)!=null?Y:null;return st&&U.has(st)?st:(qe=(Re=J==null?void 0:J.id)!=null?Re:st)!=null?qe:ge}return U.has(ge),ge},oe=M=>O(M),F=new Map;for(const M of[...c,...u]){const Z={...kr(M.branch||"",M),visualId:`${M.branch||""}:${M.fullSha}`};F.set(M.fullSha,Z)}const Q=new Map(F),pe=M=>{Q.has(M.id)||Q.set(M.id,M)},N=new Map(Array.from(V.entries()).map(([M,Z])=>[M,new Set(Z.map(ge=>ge.id))])),re=new Set;for(const M of N.values())for(const Z of M)re.add(Z);for(const M of P)re.has(M.id)||pe({...M,visualId:`${M.branchName}:${M.id}`});for(const[M,Z]of V.entries())for(const ge of Z)pe({...ge,visualId:`${M}:${ge.id}`});const de=[...Array.from(Q.values()).map(M=>({...M,visualId:`${M.branchName}:${M.id}`}))].sort((M,Z)=>Li(M.date)-Li(Z.date)||M.id.localeCompare(Z.id)),Te=new Map;for(const M of de){const Z=(hi=Te.get(M.branchName))!=null?hi:new Set;Z.add(M.id),Te.set(M.branchName,Z)}const Ye=(M,Z)=>{const ge=Te.get(M);if(!ge||ge.size===0)return!1;for(const ve of ge)if(Xo(ve,Z))return!0;return!1},De=(M,Z)=>{const ge=Array.from(Te.entries()).filter(([ve])=>ve!==Z).filter(([,ve])=>Array.from(ve).some(Ve=>Xo(Ve,M))).map(([ve])=>ve);return ge.length>0?ge.sort()[0]:M.slice(0,7)},ft=[],rt=new Map,gt=new Map;for(const M of a){const Z=M.fullSha,ge=M.targetBranch,ve=M.targetCommitSha;if(!Z||!ge||!ve||!Ye(ge,ve))continue;const Ve=((co=M.parentShas)!=null?co:[]).slice(1).filter(D=>!!D&&!Xo(D,Z));if(Ve.length===0)continue;const et=(mn=gt.get(Z))!=null?mn:new Set;for(const D of Ve){et.add(D);const $=De(D,ge);ft.push({sourceCommitSha:D,sourceBranchName:$,mergeCommitSha:Z,targetCommitSha:ve,targetBranchName:ge});const H=(Vs=rt.get($))!=null?Vs:new Map,Y=(mi=H.get(D))!=null?mi:new Set;Y.add(ge),H.set(D,Y),rt.set($,H)}gt.set(Z,et)}const Wt=new Map;for(const M of i){if(M.name===d)continue;const Z=O(M);Z&&Wt.set(M.name,Z)}const We=new Map;for(const M of de){const Z=gt.get(M.id);if(Z&&Z.size>0){const Ve=(hs=We.get(M.id))!=null?hs:new Set;for(const et of Z)Ve.add(et);We.set(M.id,Ve)}if(M.branchName===d)continue;const ge=Wt.get(M.branchName);if(!ge||ge===M.id)continue;const ve=(Ys=We.get(M.id))!=null?Ys:new Set;ve.add(ge),We.set(M.id,ve)}const at=_y(de,A,We),St=new Map;for(const M of de){const Z=(en=St.get(M.branchName))!=null?en:[];Z.push(M),St.set(M.branchName,Z)}const Gt=new Map,Ct=new Map,Ft=new Map,G=new Map,ke=new Map,nt=(M,Z)=>{var et,D,$;if(Z.length===0)return[];const ge=[...Z].sort((H,Y)=>{var st,bt;const Re=(st=at.get(H.visualId))!=null?st:Number.MAX_SAFE_INTEGER,qe=(bt=at.get(Y.visualId))!=null?bt:Number.MAX_SAFE_INTEGER;return Re!==qe?Re-qe:Li(H.date)-Li(Y.date)||H.id.localeCompare(Y.id)}),ve=new Map;for(const H of ge){const Y=((et=H.clusterKey)==null?void 0:et.trim())||`cluster:${M}:${H.id}`,Re=(D=ve.get(Y))!=null?D:[];Re.push(H),ve.set(Y,Re)}const Ve=[];for(const[H,Y]of ve.entries()){if(Y.length===0)continue;const qe=[...Y].sort((bt,Ht)=>{var bn,Pt;const jn=(bn=at.get(bt.visualId))!=null?bn:Number.MIN_SAFE_INTEGER,_s=(Pt=at.get(Ht.visualId))!=null?Pt:Number.MIN_SAFE_INTEGER;return jn!==_s?_s-jn:Li(Ht.date)-Li(bt.date)||Ht.id.localeCompare(bt.id)})[0].visualId,st={branchName:M,key:H,commitIds:Y.map(bt=>bt.visualId),leadId:qe,count:Y.length};Ve.push(st),G.set(H,qe),ke.set(H,Y.length);for(const bt of st.commitIds){Ct.set(bt,H);const Ht=bt.split(":").slice(1).join(":"),jn=($=Ft.get(Ht))!=null?$:[];jn.includes(H)||jn.push(H),Ft.set(Ht,jn)}}return Ve};for(const[M,Z]of St.entries())Gt.set(M,nt(M,Z));const Je=new Map;for(const M of de)Je.set(M.id,M);const dt=M=>{if(!M)return"none";const Z=Array.from(Je.values()).find(ge=>Xo(ge.id,M)||Xo(ge.id.slice(0,7),M)||Xo(M,ge.id));return Z?`${Z.id.slice(0,7)} ${Z.branchName}`:M.slice(0,7)},Xe=b?["Lane rows (expected):",...[...n].sort((M,Z)=>M.column-Z.column||M.name.localeCompare(Z.name)).map(M=>{var Z;return`  row=${M.column} branch=${M.name} parent=${(Z=M.parentName)!=null?Z:"none"}`}),"",...i.flatMap(M=>{var D,$,H,Y,Re,qe,st,bt;const Z=(D=h[M.name])!=null?D:[],ge=[...($=q.get(M.name))!=null?$:[]].reverse(),ve=new Set(((H=V.get(M.name))!=null?H:[]).map(Ht=>Ht.id)),Ve=(Re=(Y=ge.find(Ht=>!Ht.parentSha||!ge.some(jn=>{var _s;return Xo(jn.fullSha,(_s=Ht.parentSha)!=null?_s:"")})))!=null?Y:ge[0])!=null?Re:null,et=(st=(qe=Ve==null?void 0:Ve.parentSha)!=null?qe:ee.get(M.name))!=null?st:null;return[`Branch ${M.name}`,`  ahead=${(bt=g[M.name])!=null?bt:0} previews=${ge.length} rendered=${ve.size}`,`  db parent commit=${dt(et)}`,`  db child commit=${Ve?`${Ve.fullSha.slice(0,7)} ${M.name}`:"none"}`,...ge.map(Ht=>{const jn=ve.has(Ht.fullSha)?"visible":"hidden",_s=ve.has(Ht.fullSha)?"kept by render set":"dropped by render set";return`  ${jn} ${Ht.fullSha.slice(0,7)} ${Ht.message} [${_s}]`}),Z.length===0?"  no preview data":null].filter(Ht=>Ht!=null)})]:[],ct=b?Array.from(V.entries()).map(([M,Z])=>[`Branch debug ${M}`,...Z.map(ge=>`  ${ge.id.slice(0,7)} ${ge.message}`)].join(`
`)):[],Qe=at,ht=Tm/Yu,zt=20/Yu,ot=R?cs+ht+zt:Uu+ht+zt,I=R?Uu+ht+zt:oc,se=Math.max(0,...de.map(M=>{var Z;return(Z=Qe.get(M.visualId))!=null?Z:1})),te=de.map(M=>{var Ve,et;const Z=A.get(M.branchName),ge=(Ve=Qe.get(M.visualId))!=null?Ve:1,ve=(et=Z==null?void 0:Z.column)!=null?et:0;return R?{commit:M,row:ge,column:ve,x:yr+(ge-1)*ot,y:gr+ve*I}:{commit:M,row:ge,column:ve,x:yr+ve*oc,y:gr+(se-ge)*ot}}),be=M=>{var ge;const Z=(ge=j[M.commit.visualId])!=null?ge:j[M.commit.id];return Z?{...M,x:Z.x,y:Z.y}:M},Fe=te.map(be),Ue=w.trim().toLowerCase(),Be=Ue?Fe.filter(M=>{const Z=M.commit.id.toLowerCase(),ge=M.commit.id.slice(0,7).toLowerCase(),ve=M.commit.message.toLowerCase(),Ve=M.commit.branchName.toLowerCase();return Z.includes(Ue)||ge.includes(Ue)||ve.includes(Ue)||Ve.includes(Ue)}):Fe,xt=S&&(Zs=Fe.find(M=>M.commit.id===S))!=null?Zs:null,Tt=new Set(Be.map(M=>M.commit.id)),$t=(uo=k==null?void 0:k.headSha)!=null?uo:null,Ge=(()=>{var Z,ge;const M=(Z=k==null?void 0:k.branchName)!=null?Z:null;return!$t||!M?null:(ge=Ct.get(`${M}:${$t}`))!=null?ge:null})(),Ie=new Set;for(const M of Gt.values())for(const Z of M)Z.count>1&&Z.key!==Ge&&Ie.add(Z.key);const Et=[...de].filter(M=>{var et;const Z=Ct.get(M.visualId);if(!Z)return!0;const ge=G.get(Z),ve=(et=ke.get(Z))!=null?et:1,Ve=_.has(Z)||!Ie.has(Z)&&!x.has(Z);return ve<=1||Ve||ge===M.visualId}),Lt=_y(Et,A,We),Vt=Tm/Yu,Pe=20/Yu,At=R?cs+Vt+Pe:Uu+Vt+Pe,mt=R?Uu+Vt+Pe:oc,_t=Math.max(0,...Et.map(M=>{var Z;return(Z=Lt.get(M.visualId))!=null?Z:1})),sn=Et.map(M=>{var Ve,et;const Z=A.get(M.branchName),ge=(Ve=Lt.get(M.visualId))!=null?Ve:1,ve=(et=Z==null?void 0:Z.column)!=null?et:0;return be(R?{commit:M,row:ge,column:ve,x:yr+(ge-1)*At,y:gr+ve*mt}:{commit:M,row:ge,column:ve,x:yr+ve*oc,y:gr+(_t-ge)*At})}),ut=new Map;for(const M of sn){const Z=(Pn=ut.get(M.commit.id))!=null?Pn:[];Z.push(M),ut.set(M.commit.id,Z)}const Xt=new Map;for(const M of sn){const Z=Ct.get(M.commit.visualId);if(!Z)continue;const ge=Xt.get(Z);(!ge||(R?M.x>ge.x:M.y<ge.y))&&Xt.set(Z,M)}const zn=(M,Z)=>`${M.toFixed(1)} ${Z.toFixed(1)}`,es=Math.max(0,...sn.map(M=>M.row)),Sn=Math.max(0,...n.map(M=>M.column)),go=Math.max(0,...sn.map(M=>M.x+cs)),Es=Math.max(0,...sn.map(M=>M.y+xl+Ps)),Cs=Math.max(R?yr*2+Math.max(0,es-1)*At+cs+Yh+Pe:yr*2+(Sn+1)*oc,go+yr),En=Math.max(R?gr*2+Sn*mt+Ps+Yh+Pe:gr*2+Math.max(0,es-1)*At+Ps+Yh+Pe,Es+gr),fn=[],cn=new Map(i.map(M=>{var ge,ve;const Z=new Date((ve=(ge=M.createdDate)!=null?ge:M.divergedFromDate)!=null?ve:M.lastCommitDate).getTime();return[M.name,Number.isFinite(Z)?Z:0]})),Cn=M=>{var Z;return(Z=cn.get(M))!=null?Z:0},it=[],Qt=M=>{b&&it.push(M)},yo=new Set,Ks=new Map,ds=(M,Z)=>{var ve;const ge=(ve=Ks.get(M))!=null?ve:[];ge.includes(Z)||ge.push(Z),Ks.set(M,ge)},As=new Set,Qo=new Set,xo=new Set,lo=(M,Z)=>{var Ve,et;if(!M)return null;const ge=Vu(ut,M,Z);if(ge)return ge;const ve=(Ve=Ct.get(`${Z!=null?Z:d}:${M}`))!=null?Ve:Ct.get(M);return ve&&(et=Xt.get(ve))!=null?et:null},Ds=new Set;for(const M of i){const Z=oe(M);Z&&Qo.add(Z);const ge=(Ms=ee.get(M.name))!=null?Ms:null;ge&&xo.add(ge)}const fs=M=>{var Ve;const Z=lo(M.id,M.branchName);if(Z)return Z;const ge=Ct.get(M.visualId);if(!ge)return null;const ve=G.get(ge);return ve&&(Ve=sn.find(et=>et.commit.id===ve))!=null?Ve:null},kn=(M,Z)=>M?Vu(ut,M,Z):null,Us=(M,Z)=>R?{x:M.x-qi,y:M.y+Ps/2,face:"left"}:{x:M.x+cs/2,y:M.y+Ps+qi,face:"bottom"},bo=M=>R?{x:M.x-qi,y:M.y+Ps/2,face:"left"}:{x:M.x+cs/2,y:M.y+Ps+qi,face:"bottom"},$n=(M,Z)=>M.column!==Z.column?!0:R?M.commit.branchName!==Z.commit.branchName:!1,gn=(M,Z,ge)=>{if(!R)return{x:Z?M.x+cs:M.x+cs/2,y:Z?M.y+Ps/2:M.y,face:Z?"right":"top"};if(!Z)return{x:M.x+cs+qi,y:M.y+Ps/2,face:"right"};if(ge&&ge.column===M.column&&ge.commit.branchName!==M.commit.branchName){if(ge.x>M.x)return{x:M.x+cs/2,y:M.y+Ps+qi,face:"bottom"};if(ge.x<M.x)return{x:M.x+cs/2,y:M.y-qi,face:"top"}}return!ge||ge.column===M.column?{x:M.x+cs+qi,y:M.y+Ps/2,face:"right"}:ge.column>M.column?{x:M.x+cs/2,y:M.y+Ps+qi,face:"bottom"}:{x:M.x+cs/2,y:M.y-qi,face:"top"}},ko=M=>R?{x:M.x+cs/2,y:M.y+Ps+qi,face:"bottom"}:{x:M.x+cs,y:M.y+Ps/2,face:"right"},Un=(M,Z)=>Vu(ut,M,Z),Zo=(M,Z)=>kn(M,Z),jo=[],vo=new Set;for(const M of ft){const Z=(Ns=lo(M.targetCommitSha,M.targetBranchName))!=null?Ns:null;if(!Z){Qt({id:`merge:${M.mergeCommitSha}:${M.sourceCommitSha}:target`,kind:"merge",parent:M.sourceCommitSha,child:M.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const ge=M.sourceCommitSha,ve=`merge:${M.mergeCommitSha}:${ge!=null?ge:"unknown"}`;if(!ge||Xo(ge,M.targetCommitSha)){Qt({id:ve,kind:"merge",parent:ge!=null?ge:"unknown",child:M.targetCommitSha,rendered:!1,reason:ge?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ve=(fo=Vu(ut,ge))!=null?fo:null;if(!Ve){Qt({id:ve,kind:"merge",parent:ge,child:M.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ve.commit.id===Z.commit.id){Qt({id:ve,kind:"merge",parent:Ve.commit.id,child:Z.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let et,D,$;const H=R?Z.x+cs/2:Z.x+cs-Xh,Y=R?Z.y+Ps+Xh:Z.y+Ps/2,Re=R?"bottom":"right";R?(et=Ve.x+cs+Xh,D=Ve.y+Ps/2,$="right"):(et=Ve.x+cs/2,D=Ve.y,$="top");const qe=`${et.toFixed(2)}:${D.toFixed(2)}:${H.toFixed(2)}:${Y.toFixed(2)}`;if(vo.has(qe)){Qt({id:ve,kind:"merge",parent:Ve.commit.id,child:Z.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}vo.add(qe),jo.push({id:ve,fromX:et,fromY:D,toX:H,toY:Y,fromFace:$,toFace:Re,zIndex:Cn(Ve.commit.branchName)}),Qt({id:ve,kind:"merge",parent:Ve.commit.id,child:Z.commit.id,rendered:!0,reason:`merge connector rendered to ${M.targetBranchName}`})}const rs=new Set;for(const M of i){if(M.name===d)continue;const Z=le.get(M.name);if(!Z)continue;const ge=fe(M),ve=Un((ki=ee.get(M.name))!=null?ki:"",ge),Ve=(ho=Ce.get(M.name))!=null?ho:Z,et=(Vo=Zo(Ve.id,M.name))!=null?Vo:fs(Ve);if(!ve||!et||ve.commit.id===et.commit.id){const Re=Ct.get(`${M.name}:${Z.id}`),qe=Ct.get(`${M.name}:${Ve.id}`),st=!!Re&&!Ie.has(Re),bt=!!qe&&!Ie.has(qe),Ht=!!Re&&!_.has(Re)&&(st?x.has(Re):!0),jn=!!qe&&!_.has(qe)&&(bt?x.has(qe):!0);!ve&&!Ht&&ds((Yo=et==null?void 0:et.commit.id)!=null?Yo:Z.id,"Missing parent node"),!et&&!jn&&ds(Z.id,"Missing child node"),Qt({id:`branch:${(Fn=ve==null?void 0:ve.commit.id)!=null?Fn:"null"}->${(Bn=et==null?void 0:et.commit.id)!=null?Bn:"null"}`,kind:"branch",parent:(Mo=ve==null?void 0:ve.commit.id)!=null?Mo:"null",child:(ms=et==null?void 0:et.commit.id)!=null?ms:"null",rendered:!1,reason:ve?et?"parent and child are the same node":"missing child node":"missing parent node"});continue}const D=`branch:${ve.commit.id}->${et.commit.id}`;if(Ds.has(D)){Qt({id:D,kind:"branch",parent:ve.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Ds.add(D),As.add(ve.commit.id);const $=$n(ve,et);ve.commit.branchName!==et.commit.branchName&&rs.add(ve.commit.id);const H=ko(ve),Y=bo(et);fn.push({id:D,fromX:H.x,fromY:H.y,toX:Y.x,toY:Y.y,fromFace:H.face,toFace:Y.face,zIndex:Cn(et.commit.branchName)}),Qt({id:D,kind:"branch",parent:ve.commit.id,child:et.commit.id,rendered:!0,reason:$?"branch connector rendered":R?"horizontal connector rendered":"vertical connector rendered"})}for(const M of de){const Z=fs(M);if(!Z)continue;const ge=(ns=M.parentSha)!=null?ns:null;if(!ge)continue;const ve=(Ws=lo(ge,M.branchName))!=null?Ws:Un(ge,M.branchName);if(!ve){const H=(Fs=Ct.get(`${M.branchName}:${ge}`))!=null?Fs:Ct.get(ge),Y=!!H&&!Ie.has(H);!!H&&!_.has(H)&&(Y?x.has(H):!0)||ds(M.id,"Missing parent node"),Qt({id:`${M.visualId}->${ge}`,kind:"ancestry",parent:ge,child:M.id,rendered:!1,reason:"missing parent node"});continue}if(Z.commit.id===ve.commit.id){ds(Z.commit.id,"Parent and child resolve to the same node"),Qt({id:`${ve.commit.id}->${Z.commit.id}`,kind:"ancestry",parent:ve.commit.id,child:Z.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ve=`${M.branchName}:${(ps=ve.commit.visualId)!=null?ps:ve.commit.id}->${Z.commit.visualId}`;if(Ds.has(Ve)){ds(ve.commit.id,"Duplicate connector key"),ds(Z.commit.id,"Duplicate connector key"),Qt({id:Ve,kind:"ancestry",parent:ve.commit.id,child:Z.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Ds.add(Ve),As.add(ve.commit.id);const et=$n(ve,Z),D=gn(ve,et,Z),$=Us(Z);fn.push({id:Ve,fromX:D.x,fromY:D.y,toX:$.x,toY:$.y,fromFace:D.face,toFace:$.face,zIndex:Cn(Z.commit.branchName)}),Qt({id:Ve,kind:"ancestry",parent:ve.commit.id,child:Z.commit.id,rendered:!0,reason:et?"ancestry connector rendered":R?"horizontal ancestry rendered":"vertical ancestry rendered"}),yo.add(ve.commit.id),yo.add(Z.commit.id)}const ks=new Map;for(const M of sn){const Z=(To=ks.get(M.commit.branchName))!=null?To:[];Z.push(M),ks.set(M.commit.branchName,Z)}for(const[M,Z]of ks.entries()){if(Z.length<2)continue;const ge=[...Z].sort((ve,Ve)=>{var et,D,$,H,Y,Re,qe,st;return ve.row!==Ve.row?ve.row-Ve.row:Li((D=(et=ve==null?void 0:ve.commit)==null?void 0:et.date)!=null?D:null)-Li((H=($=Ve==null?void 0:Ve.commit)==null?void 0:$.date)!=null?H:null)||((Re=(Y=ve==null?void 0:ve.commit)==null?void 0:Y.id)!=null?Re:"").localeCompare((st=(qe=Ve==null?void 0:Ve.commit)==null?void 0:qe.id)!=null?st:"")});for(let ve=1;ve<ge.length;ve+=1){const Ve=ge[ve-1],et=ge[ve];if(Ve.commit.id===et.commit.id)continue;const D=(Lo=et.commit.parentSha)!=null?Lo:null;if(D&&Un(D,et.commit.branchName))continue;const $=`chain:${M}:${Ve.commit.id}->${et.commit.id}`;if(Ds.has($)){ds(Ve.commit.id,"Duplicate branch chain connector"),ds(et.commit.id,"Duplicate branch chain connector"),Qt({id:$,kind:"ancestry",parent:Ve.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}Ds.add($);const H=$n(Ve,et),Y=gn(Ve,H,et),Re=Us(et);fn.push({id:$,fromX:Y.x,fromY:Y.y,toX:Re.x,toY:Re.y,fromFace:Y.face,toFace:Re.face,zIndex:Cn(et.commit.branchName)}),Qt({id:$,kind:"ancestry",parent:Ve.commit.id,child:et.commit.id,rendered:!0,reason:"branch chain rendered"}),yo.add(Ve.commit.id),yo.add(et.commit.id)}}return{branchByName:B,laneByName:A,mainCommits:P,branchCommitsByLane:V,branchPreviewSets:q,allCommits:de,clustersByBranch:Gt,clusterKeyByCommitId:Ct,clusterKeyBySha:Ft,leadByClusterKey:G,clusterCounts:ke,debugRows:Xe,branchDebugRows:ct,nodes:te,normalizedSearchQuery:Ue,matchingNodes:Be,matchingNodeIds:Tt,focusedNode:xt,checkedOutClusterKey:Ge,defaultCollapsedClumps:Ie,visibleCommitsList:Et,renderNodes:sn,visibleNodesBySha:ut,visibleNodeByClusterKey:Xt,pointFormatter:zn,contentWidth:Cs,contentHeight:En,connectors:fn,mergeConnectors:jo,connectorDecisions:it,nodeWarnings:Ks,connectorParentShas:As,branchStartShas:Qo,branchOffNodeShas:xo,crossBranchOutgoingShas:rs,commitIdsWithRenderedAncestry:yo,branchBaseCommitByName:le,firstBranchCommitByName:Ae,mergeDestinations:ft,mergeTargetBranchesBySourceBranchAndCommitSha:rt}}const fw=8,hw=44,gy=120,yy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Yx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<fw){const V=d/_,q=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+V*U,c1y:n+q*U,c2x:i-V*U,c2y:a-q*U}}if(Math.min(p,g)<hw){const V=d/_,q=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+V*U,c1y:n+q*U,c2x:i-V*U,c2y:a-q*U}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),k=Math.min(120,g*.32),C=Math.min(160,g*.42),j=yy(c),R=yy(u);if(!(j==="v"&&R==="h"||j==="v"&&R==null&&g>=p||j==null&&R==="h"&&g>=p||j==="v"&&R==="v"||j==null&&R==null&&g>p)){const V=i,q=n;return{kind:"elbowH",cx:V,cy:q,s1c1x:t+x*w,s1c1y:n,s1c2x:V-x*S,s1c2y:q,s2c1x:V,s2c1y:q+b*k,s2c2x:i,s2c2y:a-b*C}}const A=t,P=a;return{kind:"elbowV",cx:A,cy:P,s1c1x:t,s1c1y:n+b*C,s1c2x:A,s1c2y:P-b*k,s2c1x:A+x*w,s2c1y:P,s2c2x:i-x*S,s2c2y:a}}function mw(t,n,i,a,c,u){const d=Yx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function xy(t,n,i,a,c,u,d){const h=Yx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(gy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,k=a>=n?1:-1,C=h.cx-S*w,j=h.cy+k*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(C-S*w*.5,h.cy)} ${c(C,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,j)}`,`C ${c(h.cx,j+k*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(gy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const dp=2.25,ic=dp/2,pw=.45,_w=.01,la=dp,kd=10,gw=-100,by=0,vy=.9,yw=.9,wy=.001,qh=.001,xw=12,bw=cs+48;function Bs(...t){return t.filter(Boolean).join(" ")}function vw(t){return Math.max(pw,Math.min(dp,t))}function ww(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Wx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Sw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function Cw(t,n,i,a,c,u,d){const h=mw(t,n,i,a,u,d),p=Sw(h);return Wx(c,p)}function Fx(t,n){return{left:t.x,top:t.y+n,right:t.x+cs,bottom:t.y+xl+Ps+4}}function kw(t,n){const i=bw,a=Math.max(120,Math.ceil(xl+Ps+4-n+24)),c=new Map;for(const u of t){const d=Fx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=g;w<=_;w++){const S=`${b},${w}`;let k=c.get(S);k||(k=new Set,c.set(S,k)),k.add(x)}}return{cellW:i,cellH:a,buckets:c}}function jw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=g;S<=_;S++){const k=d.get(`${w},${S}`);if(k)for(const C of k)x.add(C)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const k=Fx(S,a);Wx(n,k)&&b.add(w)}return b}function Sy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/la;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Mw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function Cy(t,n,i){const a=n/la;return!Number.isFinite(a)||a<=0?t:Mw(t,100/a)}function ky(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function Si(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Em(t,n){if(n){const i=ky(n),a=ky(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Gh(t,n){return t.pathExists===!1?!1:Em(t,n)}function Tw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Ew({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let g=null;const _=requestAnimationFrame(()=>{g=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(_),g!=null&&cancelAnimationFrame(g)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Aw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:g,labelTopPx:_,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,iconScaleStyle:S,normalizedSearchQuery:k,matchingNodeIds:C,focusedNode:j,renderNodes:R,shouldRenderNode:B,manuallyOpenedClumps:A,manuallyClosedClumps:P,defaultCollapsedClumps:V,leadByClusterKey:q,clusterKeyByCommitId:U,clusterCounts:J,commitIdsWithRenderedAncestry:ce,nodeWarnings:le,connectorParentShas:Ce,branchStartShas:Ae,branchOffNodeShas:ee,crossBranchOutgoingShas:fe,branchBaseCommitByName:O,branchStartAccentClass:oe,connectorParentAccentClass:F,commitCornerRadiusPx:Q,lineStrokeWidth:pe,pointFormatter:N,connectors:re,mergeConnectors:ie,cullConnectorPath:de,flushCameraReactTick:Te,setManuallyOpenedClumps:Ye,setManuallyClosedClumps:De,onCommitCardClick:ft,unpushedCommitShasSetByBranch:rt,checkedOutHeadSha:gt}){const[Wt,We]=y.useState(new Set),at=y.useRef(null);y.useEffect(()=>{const G=new Set;J.forEach((Je,dt)=>{(A.has(dt)||!V.has(dt)&&!P.has(dt))&&G.add(dt)});const ke=at.current;if(ke==null){at.current=G;return}const nt=[];if(G.forEach(Je=>{ke.has(Je)||nt.push(Je)}),nt.length>0){We(dt=>{const Xe=new Set(dt);return nt.forEach(ct=>Xe.add(ct)),Xe});const Je=window.setTimeout(()=>{We(dt=>{const Xe=new Set(dt);return nt.forEach(ct=>Xe.delete(ct)),Xe})},260);return at.current=G,()=>{window.clearTimeout(Je)}}at.current=G},[J,V,P,A]);const St=(G,ke)=>{const nt=ke.zIndex-G.zIndex;if(nt!==0)return nt;const Je=Math.min(G.fromY,G.toY),dt=Math.min(ke.fromY,ke.toY),Xe=Je-dt;return Xe!==0?Xe:G.id.localeCompare(ke.id)},Gt=ie.filter(G=>de(G)).sort(St),Ct=re.filter(G=>de(G)).sort(St),Ft=R.filter(G=>B(G));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Ft.map(G=>{var Ge,Ie,Et,Lt,Vt;const ke=U.get(G.commit.visualId),nt=ke?A.has(ke)||!V.has(ke)&&!P.has(ke):!1,Je=ke?q.get(ke)===G.commit.visualId:!1,dt=ke!=null&&nt&&!Je&&Wt.has(ke),Xe=ke&&(Ge=J.get(ke))!=null?Ge:1,ct=ce.has(G.commit.id),Qe=(Ie=le.get(G.commit.id))!=null?Ie:[],ht=Qe.length>0&&!ct,zt=w.includes(G.commit.id),ot=G.commit.id==="WORKING_TREE"||G.commit.kind==="uncommitted",I=G.commit.kind==="stash"||G.commit.id.startsWith("STASH:"),se=/^STASH:(\d+)$/.exec(G.commit.id),te=se?`Stash:${se[1]}`:null,be=I?G.commit.message.trim()&&G.commit.message.trim()!=="git-visualizer"?G.commit.message:"Stashed changes":G.commit.message,Fe=G.commit.kind==="branch-created"&&G.commit.id.startsWith("BRANCH_HEAD:"),Ue=ot||((Lt=(Et=rt.get(G.commit.branchName))==null?void 0:Et.has(G.commit.id))!=null?Lt:!1),xt=(ot||gt!=null&&G.commit.id===gt)&&!zt,Tt=xt?"text-[#38BDF2]":zt?"text-[#158EFC]":"text-muted-foreground",$t=xt?{color:"#38BDF2"}:zt?{color:"#158EFC"}:void 0;return l.jsxs(Ew,{fadeIn:dt,dataCommitCard:"true",className:Bs("group absolute z-20 cursor-grab active:cursor-grabbing",k&&!C.has(G.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",k&&C.has(G.commit.id)?"scale-[1.01]":"",(j==null?void 0:j.commit.id)===G.commit.id?"z-30 scale-[1.015]":""),style:{left:G.x,top:G.y,width:cs,height:xl+Ps+4,overflow:"visible"},onClick:Pe=>ft(Pe,G),onPointerDown:Pe=>g(Pe,G),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${_}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Bs("min-w-0 h-4 flex-1 text-sm font-medium leading-none",Tt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:$t,children:I&&te?te:G.commit.branchName?`${G.commit.branchName}/${G.commit.id.slice(0,7)}`:G.commit.id.slice(0,7)}),Je&&Xe>1?l.jsx("button",{type:"button",onMouseDown:Pe=>{Pe.stopPropagation()},onClick:Pe=>{if(Pe.stopPropagation(),Pe.preventDefault(),!ke)return;!V.has(ke)?(Ye(mt=>{if(!mt.has(ke))return mt;const _t=new Set(mt);return _t.delete(ke),_t}),De(mt=>{const _t=new Set(mt);return _t.has(ke)?_t.delete(ke):_t.add(ke),_t})):(De(mt=>{if(!mt.has(ke))return mt;const _t=new Set(mt);return _t.delete(ke),_t}),Ye(mt=>{const _t=new Set(mt);return _t.has(ke)?_t.delete(ke):_t.add(ke),_t})),Te()},className:Bs("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",Tt),style:$t,children:nt?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Xe}`}):null]})}),l.jsx("div",{className:Bs("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",xt&&!Ue&&!I&&!Fe?"bg-[#EBF7FE]":zt&&!Ue&&!I&&!Fe?"bg-[#E5F0FF]":Ue||I||Fe?"bg-transparent":"bg-[#F5F5F5]",I||ot||Fe?"border-dashed":"",ee.has(G.commit.id)||Ae.has(G.commit.id)||fe.has(G.commit.id)?oe:Ce.has(G.commit.id)?F:((Vt=O.get(G.commit.branchName))==null?void 0:Vt.id)===G.commit.id?"border-amber-500":ht?"border-red-500":"",(k&&C.has(G.commit.id)&&!d,"")),style:{top:0,borderWidth:`${I||ot||Fe?pe*(2/1.5):pe}px`,borderColor:xt?"#38BDF2":zt?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${Q}px`,borderBottomRightRadius:`${Q}px`,borderBottomLeftRadius:`${Q}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Bs("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",Tt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:$t,children:Je&&nt?be:Je&&Xe>1?`${be} +${Xe-1}`:be}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:ht?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:Qe.join(`
`),children:"Broken ancestry"}):null})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Bs("text-sm font-medium",Tt),style:$t,children:["@",G.commit.author]}),l.jsx("div",{className:Bs("text-sm font-medium",Tt),style:$t,children:new Date(G.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(j==null?void 0:j.commit.id)===G.commit.id&&k?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:S,children:"Search result"}):null]})})]},G.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Gt.map(G=>{const{fromX:ke,fromY:nt,toX:Je,toY:dt}=G,Xe=xy(ke,nt,Je,dt,N,G.fromFace,G.toFace);return l.jsx("path",{d:Xe,fill:"none",stroke:Wh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},G.id)}),Ct.map(G=>{const{fromX:ke,fromY:nt,toX:Je,toY:dt}=G,Xe=xy(ke,nt,Je,dt,N,G.fromFace,G.toFace);return l.jsx("path",{d:Xe,fill:"none",stroke:Wh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},G.id)})]})]})})})}function Dw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:x,onPushCurrentBranch:b,onPushAllBranches:w,onPushCommitTargets:S,onDeleteSelection:k,onCreateBranchFromNode:C,onMergeRefsIntoBranch:j,selectedPushTargets:R,selectedPushLabel:B,canPushCurrentBranch:A,pushCurrentBranchLabel:P,pushableRemoteBranchCount:V,deletableSelectionCount:q,canCreateRootBranch:U,selectedCommitTargetOption:J,mergeInProgress:ce,setMergeTargetCommitSha:le,worktrees:Ce,currentRepoPath:Ae,worktreeMenuOpen:ee,setWorktreeMenuOpen:fe,onSwitchToWorktree:O,onRemoveWorktree:oe,removeWorktreeInProgress:F,setCommitDialogOpen:Q,setDeleteConfirmOpen:pe,setNewBranchDialogOpen:N}){const re=t.length>0;return l.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("button",{type:"button",onClick:()=>Q(!0),disabled:!g||i||re||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||i||re||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),l.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||re||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),l.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||!A||re||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":P}),l.jsx("button",{type:"button",onClick:()=>void(w==null?void 0:w()),disabled:!w||V<2||re||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S(R.map(ie=>({branchName:ie.branchName,targetSha:ie.targetSha})))),disabled:!S||R.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:R.length>0?B:"Select commits to push",children:R.length>0?B:"Push selected"}),l.jsx("button",{type:"button",onClick:()=>pe(!0),disabled:!k||q===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"}),l.jsx("button",{type:"button",onClick:()=>N(!0),disabled:!C&&!U||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&J.options.length>0&&J.targetBranch&&j?l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),J.options.map(ie=>{const de=ie.targetBranch===J.targetBranch;return l.jsx("button",{type:"button",onClick:()=>le(ie.targetSha),className:Bs("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",de?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:ie.targetBranch},`merge-${ie.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void j(J.sources,J.targetBranch),disabled:J.sources.length===0||ce,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:ce?"Merging...":"Confirm"})]}):null,Ce.length>0&&(O||oe)?l.jsxs("div",{className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>fe(ie=>!ie),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[Ce.length," ",Ce.length===1?"Worktree":"Worktrees"]}),ee?l.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:Ce.map(ie=>{var de;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:ie.path,children:Em(ie,Ae)?Tw(ie.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(de=ie.branchName)!=null?de:"detached"," • ",ie.headSha.slice(0,7)]})]}),Em(ie,Ae)?l.jsxs("div",{className:"flex items-center gap-1",children:[O?l.jsx("button",{type:"button",onClick:()=>{fe(!1),O(ie.path)},disabled:F||ie.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,oe?l.jsx("button",{type:"button",onClick:()=>void oe(ie.path,ie.isPrunable),disabled:F,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:F?"...":"Remove"}):null]}):null]},ie.path)})}):null]}):null]})}function Nw({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:h,renderedConnectorCount:p,totalConnectorCount:g,mapGridCullViewportInsetScreenPx:_,debugRows:x,branchDebugRows:b,connectorDecisions:w}){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:l.jsx("button",{type:"button",onClick:n,className:Bs("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?l.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${h}`,`Rendered connectors: ${p} / ${g}`,"",...x,...b,"",...w.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null]})}function Rw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:k,onNewBranchCreateModeChange:C,onNewBranchDialogClose:j,onNewBranchConfirm:R,selectedCommitCanCreateBranch:B,createBranchFromNodeInProgress:A}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:P=>i(P.target.value),onKeyDown:P=>{(P.metaKey||P.ctrlKey)&&P.key==="Enter"&&(P.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(P=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:P},P))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>C("from-selected-node"),className:Bs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>C("new-root"),className:Bs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:P=>k(P.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:j,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:R,disabled:!w.trim()||A||S==="from-selected-node"&&!B,className:Bs("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:A?"Creating...":"Create"})]})]})}):null]})}function Bw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(ic),c=y.useRef({panX:0,panY:0,zoom:ic}),u=y.useRef(null),d=y.useRef(ic),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(ic),[b,w]=y.useState(0),S=y.useRef(null),k=y.useRef(0),C=y.useCallback(()=>{const J=t.current;if(!J)return null;const ce=J.getBoundingClientRect(),le=getComputedStyle(J),Ce=Number.parseFloat(le.borderLeftWidth)||0,Ae=Number.parseFloat(le.borderTopWidth)||0,ee=Number.parseFloat(le.paddingLeft)||kd,fe=Number.parseFloat(le.paddingTop)||kd;return{x:ce.left+Ce+ee,y:ce.top+Ae+fe}},[t]),j=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(J=>J+1)}),k.current=performance.now()},[]),R=y.useCallback((J,ce,le)=>{const Ce=c.current;c.current={panX:J,panY:ce,zoom:le};const Ae=n.current;if(Ae&&(Ae.style.transform=`translate3d(${J}px, ${ce}px, 0) scale(${le/la})`),Math.abs(d.current-le)>qh&&(d.current=le,x(le)),Math.abs(le-Ce.zoom)>qh){j();return}const O=performance.now()-k.current;if(O>=by){j();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,j()},by-O)},[j,n]),B=y.useRef(null),A=y.useCallback(()=>{u.current!=null||!B.current||(u.current=window.requestAnimationFrame(B.current))},[]),P=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),V=y.useCallback((J,ce,le)=>{i.current={x:J,y:ce},a.current=le,P(),A()},[P,A]);B.current=()=>{u.current=null;const J=c.current,ce=i.current.x,le=i.current.y,Ce=a.current,Ae=Math.abs(ce-J.panX)<=wy?ce:J.panX+(ce-J.panX)*vy,ee=Math.abs(le-J.panY)<=wy?le:J.panY+(le-J.panY)*vy,fe=Math.abs(Ce-J.zoom)<=qh?Ce:J.zoom+(Ce-J.zoom)*yw;R(Ae,ee,fe),Ae!==ce||ee!==le||fe!==Ce?B.current&&(u.current=window.requestAnimationFrame(B.current)):j()};const q=y.useCallback((J,ce,le)=>{const Ce=vw(le),Ae=c.current,ee=C();if(!ee){V(i.current.x,i.current.y,Ce);return}const fe=J-ee.x,O=ce-ee.y,oe=Ae.zoom/la,F=Ce/la,Q=(fe-Ae.panX)/oe,pe=(O-Ae.panY)/oe;V(fe-Q*F,O-pe*F,Ce)},[C,V]),U=y.useCallback(J=>{if(J.preventDefault(),J.ctrlKey||J.metaKey){const ce=Math.exp(-J.deltaY*_w);q(J.clientX,J.clientY,a.current*ce);return}V(i.current.x-J.deltaX,i.current.y-J.deltaY,a.current)},[V,q]);return y.useLayoutEffect(()=>(R(0,0,ic),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[R]),y.useLayoutEffect(()=>{const J=n.current;if(!J)return;const ce=c.current;J.style.transform=`translate3d(${ce.panX}px, ${ce.panY}px, 0) scale(${ce.zoom/la})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:C,flushCameraReactTick:j,syncCamera:V,handleWheel:U}}function Lw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function Ow({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[k,C]=y.useState(null),j=y.useCallback(B=>{const A=t.current,P=i();if(!A||!P)return[];const V=A.getBoundingClientRect(),q=n.current.zoom/la;if(q<=0)return[];const U=[],J=B.left,ce=B.left+B.width,le=B.top,Ce=B.top+B.height;for(const Ae of a){if(!c(Ae))continue;const ee=P.x+n.current.panX+Ae.x*q-V.left,fe=P.y+n.current.panY+Ae.y*q-V.top,O=ee+cs*q,oe=fe+(xl+Ps)*q;!(O<J||ee>ce||oe<le||fe>Ce)&&U.push(Ae.commit.id)}return U},[i,a,n,t,c]),R=y.useCallback(B=>{if(B.button!==0)return;const A=B.target;if(A!=null&&A.closest("[data-commit-card]")||A!=null&&A.closest("button, a, input, textarea, select"))return;const P=t.current;if(!P)return;B.preventDefault();const V=P.getBoundingClientRect(),q=B.clientX-V.left,U=B.clientY-V.top;d.current={startX:q,startY:U,currentX:q,currentY:U,additive:B.metaKey||B.ctrlKey},h.current=!1,p.current=B.metaKey||B.ctrlKey?w:[],_(!0),b({left:q,top:U,width:0,height:0})},[t,w]);return y.useEffect(()=>{const B=P=>{var le;const V=d.current;if(!V)return;const q=t.current;if(!q)return;const U=q.getBoundingClientRect();V.currentX=P.clientX-U.left,V.currentY=P.clientY-U.top,!h.current&&(Math.abs(V.currentX-V.startX)>2||Math.abs(V.currentY-V.startY)>2)&&(h.current=!0);const J=Lw(V);b(J);const ce=j(J);S(V.additive?Array.from(new Set([...p.current,...ce])):Array.from(new Set(ce))),V.additive||C((le=ce[ce.length-1])!=null?le:null)},A=()=>{if(d.current){const P=h.current;d.current=null,h.current=!1,_(!1),b(null),P||(S([]),C(null));return}u()};return window.addEventListener("mousemove",B),window.addEventListener("mouseup",A),()=>{window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",A)}},[j,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:k,setMergeTargetCommitSha:C,startMarqueeDrag:R}}function jy({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:k,mergeInProgress:C=!1,onPushAllBranches:j,onPushCurrentBranch:R,onPushCommitTargets:B,pushInProgress:A=!1,onDeleteSelection:P,deleteInProgress:V=!1,worktrees:q=[],currentRepoPath:U,onRemoveWorktree:J,removeWorktreeInProgress:ce=!1,onSwitchToWorktree:le,onStashLocalChanges:Ce,stashInProgress:Ae=!1,stashDisabled:ee=!1,onCommitLocalChanges:fe,commitInProgress:O=!1,commitDisabled:oe=!1,onStageAllChanges:F,stageInProgress:Q=!1,onCreateBranchFromNode:pe,onCreateRootBranch:N,createBranchFromNodeInProgress:re=!1,orientation:ie="horizontal",branchCommitPreviews:de={},branchParentByName:Te={},branchUniqueAheadCounts:Ye={},gridSearchQuery:De="",gridSearchJumpToken:ft=0,gridFocusSha:rt=null,checkedOutRef:gt=null,onGridSearchResultCountChange:Wt,onGridSearchFocusChange:We,onInteractionChange:at,manuallyOpenedClumps:St,manuallyClosedClumps:Gt,setManuallyOpenedClumps:Ct,setManuallyClosedClumps:Ft,layoutModel:G}){var un,Mn,ls,gs,Js,Os,eo,Jo,pi,ei,zs,ti;const ke=y.useRef(null),nt=y.useRef(null),Je=y.useRef(null),[dt,Xe]=y.useState(!1),[ct,Qe]=y.useState(!1),[ht,zt]=y.useState(""),[ot,I]=y.useState(!1),[se,te]=y.useState(!1),[be,Fe]=y.useState(""),[Ue,Be]=y.useState("from-selected-node"),[xt,Tt]=y.useState(()=>new Set),[$t,Ge]=y.useState(()=>new Set),[Ie,Et]=y.useState({}),Lt=y.useRef(!1),Vt=y.useRef(null),Pe=y.useRef(null),At=St!=null?St:xt,mt=Gt!=null?Gt:$t,_t=Ct!=null?Ct:Tt,sn=Ft!=null?Ft:Ge,[ut,Xt]=y.useState(!1),[zn,es]=y.useState(null),[Sn,go]=y.useState(null),{isCameraMoving:Es,renderedZoom:Cs,cameraRenderTick:En,renderedCameraRef:fn,interactionIdleTimeoutRef:cn,getTransformLayerOriginScreen:Cn,flushCameraReactTick:it,syncCamera:Qt,handleWheel:yo}=Bw({mapPadHostRef:nt,transformLayerRef:Je}),Ks=y.useMemo(()=>up(t,d,de,Te),[t,d,de,Te]),ds=y.useMemo(()=>Cd({lanes:Ks,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:de,branchParentByName:Te,branchUniqueAheadCounts:Ye,manuallyOpenedClumps:At,manuallyClosedClumps:mt,isDebugOpen:ut,gridSearchQuery:De,gridFocusSha:rt,checkedOutRef:gt!=null?gt:null,orientation:ie,nodePositionOverrides:Ie}),[Ks,t,n,i,a,d,de,Te,Ye,At,mt,ut,De,rt,(un=gt==null?void 0:gt.headSha)!=null?un:null,(Mn=gt==null?void 0:gt.branchName)!=null?Mn:null,ie,Ie]),Qo=Object.keys(Ie).length>0?ds:G!=null?G:ds,xo=y.useMemo(()=>Cd({lanes:Ks,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:de,branchParentByName:Te,branchUniqueAheadCounts:Ye,manuallyOpenedClumps:At,manuallyClosedClumps:mt,isDebugOpen:ut,gridSearchQuery:De,gridFocusSha:rt,checkedOutRef:gt!=null?gt:null,orientation:ie,nodePositionOverrides:Ie}),[Ks,t,n,i,a,d,de,Te,Ye,At,mt,ut,De,rt,(ls=gt==null?void 0:gt.headSha)!=null?ls:null,(gs=gt==null?void 0:gt.branchName)!=null?gs:null,ie,Ie]),{allCommits:lo,clusterKeyByCommitId:Ds,leadByClusterKey:fs,clusterCounts:kn,matchingNodes:Us,matchingNodeIds:bo,normalizedSearchQuery:$n,focusedNode:gn,defaultCollapsedClumps:ko,renderNodes:Un,visibleNodesBySha:Zo,contentWidth:jo,contentHeight:vo,connectors:rs,mergeConnectors:ks,connectorDecisions:An,nodeWarnings:Ii,commitIdsWithRenderedAncestry:ci,connectorParentShas:Ho,branchStartShas:Ji,branchOffNodeShas:Uo,crossBranchOutgoingShas:Pi,branchBaseCommitByName:Ls,pointFormatter:wo}=Qo,Rn=!!$n,ts=Cs/la,dn=y.useMemo(()=>({transform:`scale(${1/ts})`,transformOrigin:"top left",width:`${100*ts}%`,height:`${100*ts}%`}),[ts]),In=-(20/ts),ui=y.useMemo(()=>{const Se=new Map;for(const Le of Un)Se.set(Le.commit.visualId,Le);return Se},[Un]),Bo=y.useMemo(()=>kw(Un,In),[Un,In]),di=Se=>{var Nt;const Le=Se.commit.id,tt=Se.commit.visualId;if(Rn&&bo.has(Le)||(gn==null?void 0:gn.commit.id)===Le||zn===null)return!0;if(!zn.has(tt))return!1;const $e=Ds.get(tt);return $e&&((Nt=kn.get($e))!=null?Nt:1)>1&&(At.has($e)||!ko.has($e)&&!mt.has($e)),!0},Kt=1.5/ts,fi=xw/ts,js=y.useMemo(()=>({transform:`scale(${1/ts})`,transformOrigin:"center"}),[ts]),Hi="border-slate-400/70",Ci="border-blue-500",So=y.useMemo(()=>new Map(t.map(Se=>[Se.name,Se])),[t]);y.useMemo(()=>new Set(t.filter(Se=>Se.commitsAhead===0&&!Se.name.startsWith("*")).map(Se=>Se.name)),[t]);const Qs=y.useMemo(()=>{var Le,tt;const Se=new Map;for(const $e of Un){const Nt=(Le=Se.get($e.commit.id))!=null?Le:new Set;Nt.add($e.commit.branchName),Se.set($e.commit.id,Nt)}for(const $e of i){const Nt=(tt=Se.get($e.fullSha))!=null?tt:new Set;$e.branch&&Nt.add($e.branch),Se.set($e.fullSha,Nt)}return Se},[Un,i,d]),hi=y.useMemo(()=>new Map(Object.entries(c).map(([Se,Le])=>[Se,new Set(Le)])),[c]),co=y.useCallback(()=>{cn.current,it()},[it,cn]),{isMarqueeSelecting:mn,marqueeRect:Vs,selectedCommitShas:mi,setSelectedCommitShas:hs,mergeTargetCommitSha:Ys,setMergeTargetCommitSha:en,startMarqueeDrag:Zs}=Ow({scrollContainerRef:ke,renderedCameraRef:fn,getTransformLayerOriginScreen:Cn,renderNodes:Un,shouldRenderNode:di,onPointerReleaseNoMarquee:co}),uo=y.useMemo(()=>new Set(Un.map(Se=>Se.commit.id)),[Un]),Pn=y.useMemo(()=>mi.filter(Se=>uo.has(Se)),[mi,uo]),Ms=y.useCallback((Se,Le)=>{var Nt;if(!Le)return!1;if(((Nt=de[Se])!=null?Nt:[]).some(Dt=>Si(Dt.fullSha,Le)||Si(Dt.sha,Le)))return!0;const $e=So.get(Se);return!!($e!=null&&$e.headSha&&Si($e.headSha,Le))},[de,So]),Ns=(Js=gt==null?void 0:gt.branchName)!=null?Js:null,fo=(Os=gt==null?void 0:gt.headSha)!=null?Os:null,ki=Ns==null,ho=y.useMemo(()=>{if(!rt)return null;const Se=Un.filter(Le=>Le.commit.id===rt);return Se.length===0?null:Se.length===1||!gn?Se[0]:Se.reduce((Le,tt)=>{const $e=(Le.x-gn.x)**2+(Le.y-gn.y)**2;return(tt.x-gn.x)**2+(tt.y-gn.y)**2<$e?tt:Le})},[rt,Un,gn]),Vo=y.useCallback((Se,Le,tt)=>{for(const $e of q){if(!Gh($e,U))continue;if($e.branchName){if($e.branchName===Se&&Si($e.headSha,Le))return $e;continue}if(!Si($e.headSha,Le)&&!Si($e.headSha,tt))continue;if($e.parentSha&&Ms(Se,$e.parentSha)||Ms(Se,$e.headSha))return $e;const Nt=So.get(Se);if(Nt&&Si(Nt.headSha,$e.headSha)||Se===d&&i.some(Dt=>Si(Dt.fullSha,$e.headSha)))return $e}return null},[q,U,Ms,So,d,i]),Yo=y.useCallback(Se=>{for(const Le of q)if(Gh(Le,U)&&Le.branchName===Se)return Le;return null},[q,U]),Fn=y.useCallback((Se,Le)=>{for(const tt of q)if(Gh(tt,U)&&(Si(tt.headSha,Se)||Si(tt.headSha,Le)))return tt;return null},[q,U]),Bn=y.useCallback(Se=>{var Le;return Array.from((Le=Qs.get(Se))!=null?Le:[])},[Qs]),Mo=y.useMemo(()=>{var Nt,Dt,rn,on;const Se=new Map;for(const Xn of Pn){const Rs=Bn(Xn);if(Rs.length===0)continue;const Oo=(Nt=Rs.find(ss=>ss!==d))!=null?Nt:Rs[0],zo=Pn.filter(ss=>ss!==Xn).filter(ss=>!new Set(Bn(ss)).has(Oo));Se.set(Oo,{targetSha:Xn,targetBranch:Oo,sourceRefs:zo})}const Le=Array.from(Se.values()),tt=Ys?Le.find(Xn=>{var Rs;return Xn.targetSha===Ys||Xn.targetBranch===((Rs=Bn(Ys)[0])!=null?Rs:"")}):null,$e=(Dt=tt!=null?tt:Le[Le.length-1])!=null?Dt:null;return{options:Le,selected:$e,targetBranch:(rn=$e==null?void 0:$e.targetBranch)!=null?rn:null,sources:(on=$e==null?void 0:$e.sourceRefs)!=null?on:[]}},[Pn,Bn,d,Ys]),ms=y.useMemo(()=>{const Se=[...Ns===d?[{name:d,headSha:fo!=null?fo:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(Le=>!Le.name.startsWith("*")&&Le.unpushedCommits>0&&Le.remoteSyncStatus!=="on-github").map(Le=>[Le.name,Le]);return new Map(Se)},[t,Ns,fo,d,a.length]),ns=y.useMemo(()=>{const Se=$e=>{var Dt;const Nt=Bn($e).filter(rn=>ms.has(rn));return Nt.length===0?null:Nt.length===1?Nt[0]:Ns&&Nt.includes(Ns)?Ns:(Dt=Nt.find(rn=>rn!==d))!=null?Dt:Nt[0]},Le=$e=>{var Nt;return $e===d?a.map(Dt=>{var rn,on;return{fullSha:Dt.fullSha,sha:Dt.sha,parentSha:(rn=Dt.parentSha)!=null?rn:null,message:Dt.message,author:Dt.author,date:Dt.date,kind:(on=Dt.kind)!=null?on:"commit"}}):(Nt=de[$e])!=null?Nt:[]},tt=new Map;for(const $e of Pn){const Nt=Se($e);if(!Nt)continue;const Dt=ms.get(Nt);if(!Dt)continue;const rn=Le(Nt).slice(0,Dt.unpushedCommits),on=rn.findIndex(Rs=>Rs.fullSha===$e);if(on===-1)continue;const Xn=tt.get(Nt);(!Xn||on<Xn.targetIndex)&&tt.set(Nt,{branchName:Nt,targetSha:$e,targetIndex:on,commitCount:rn.length-on})}return Array.from(tt.values())},[Pn,Bn,ms,Ns,d,a,de]),Ws=y.useMemo(()=>Array.from(new Set(Pn.map(Se=>/^STASH:(\d+)$/.exec(Se)).filter(Se=>!!Se).map(Se=>parseInt(Se[1],10)))).sort((Se,Le)=>Se-Le),[Pn]),Fs=Pn.includes("WORKING_TREE"),ps=(Fs?1:0)+Ws.length,To=[...Fs?["Uncommitted changes"]:[],...Ws.map(Se=>`Stash ${Se+1}`)],Lo=ms.size,M=!ki&&!!Ns&&ms.has(Ns),Z=Ns?`Push ${Ns}`:"Push current branch",ge=ns.length===1?ns[0].commitCount>1?`Push ${ns[0].commitCount} commits on ${ns[0].branchName}`:`Push ${ns[0].targetSha.slice(0,7)} on ${ns[0].branchName}`:`Push ${ns.length} selected ranges`;y.useEffect(()=>{at==null||at(Es||mn)},[Es,mn,at]),y.useEffect(()=>{Wt==null||Wt($n?Us.length:null)},[Us.length,$n,Wt]);const ve=y.useMemo(()=>{var Xn,Rs,Oo,zo,ss,to;if(!$n)return null;const Se=$n,Le=t.map(E=>E.name),tt=Le.find(E=>E.toLowerCase()===Se),$e=tt!=null?tt:Le.find(E=>E.toLowerCase().startsWith(Se)),Dt=$e!=null?$e:Le.find(E=>E.toLowerCase().includes(Se));if(!Dt)return null;const rn=(Xn=t.find(E=>E.name===Dt))!=null?Xn:null;if(rn!=null&&rn.headSha)return rn.headSha;const on=(Rs=de[Dt])!=null?Rs:[];return on.length>0?(zo=(Oo=on[0])==null?void 0:Oo.fullSha)!=null?zo:null:Dt===d&&(to=(ss=i[0])==null?void 0:ss.fullSha)!=null?to:null},[$n,t,de,d,i]);y.useEffect(()=>{var Le,tt;if(!$n){We==null||We(null);return}if(ft<=0)return;if(ve){We==null||We(ve);return}const Se=(tt=(Le=Us[0])==null?void 0:Le.commit.id)!=null?tt:null;We==null||We(Se)},[Us,$n,We,ve,ft]),y.useLayoutEffect(()=>{if(!rt)return;const Se=ke.current,Le=ho;if(!Se||!Le)return;const tt=Cn();if(!tt)return;const $e=Se.getBoundingClientRect(),Nt=fn.current.zoom,Dt=Nt/la,rn=Le.x+cs/2,on=Le.y+xl+Ps/2,Xn=$e.left+$e.width/2,Rs=$e.top+$e.height/2;Qt(Xn-tt.x-rn*Dt,Rs-tt.y-on*Dt,Nt)},[rt,ft,ho,Cn,Qt,fn]);const Ve=(pi=(Jo=Sn==null?void 0:Sn.width)!=null?Jo:(eo=ke.current)==null?void 0:eo.clientWidth)!=null?pi:0,et=(ti=(zs=Sn==null?void 0:Sn.height)!=null?zs:(ei=ke.current)==null?void 0:ei.clientHeight)!=null?ti:0,D=Ve>0&&et>0?Sy(Ve,et,fn.current,{innerPaddingPx:kd}):null,$=D!=null?Cy(D,fn.current.zoom):null,H=Se=>{if(!$)return!0;const{fromX:Le,fromY:tt,toX:$e,toY:Nt}=Se;return Cw(Le,tt,$e,Nt,$,Se.fromFace,Se.toFace)};y.useLayoutEffect(()=>{var rn;const Se=ke.current;if(!Se||Se.clientWidth<=0||Se.clientHeight<=0)return;const Le=Se.clientWidth,tt=Se.clientHeight;go(on=>(on==null?void 0:on.width)===Le&&(on==null?void 0:on.height)===tt?on:{width:Le,height:tt});const $e=Sy(Le,tt,fn.current,{innerPaddingPx:kd});if(!$e){es(on=>on===null?on:null);return}const Nt=Cy($e,fn.current.zoom),Dt=jw(Bo,Nt,ui,In);for(const on of Un){const Xn=Ds.get(on.commit.visualId);if(!Xn||((rn=kn.get(Xn))!=null?rn:1)<=1)continue;(At.has(Xn)||!ko.has(Xn)&&!mt.has(Xn))&&Dt.add(on.commit.visualId)}es(on=>ww(on,Dt)?on:Dt)},[Cs,ft,rt,Es,En,At,mt,ko,Ds,kn,Un,Sn,Bo,ui,In]),y.useLayoutEffect(()=>{const Se=ke.current;if(!Se)return;const Le=()=>{const $e=Se.clientWidth,Nt=Se.clientHeight;$e<=0||Nt<=0||go(Dt=>(Dt==null?void 0:Dt.width)===$e&&(Dt==null?void 0:Dt.height)===Nt?Dt:{width:$e,height:Nt})};Le();const tt=new ResizeObserver(Le);return tt.observe(Se),()=>tt.disconnect()},[lo.length]);const Y=Un.filter(Se=>di(Se)).length,Re=ks.filter(Se=>H(Se)).length,qe=rs.filter(Se=>H(Se)).length,st=y.useCallback((Se,Le)=>{if(Lt.current){Se.preventDefault(),Se.stopPropagation();return}Se.stopPropagation();const tt=Le.commit.id;if(Se.shiftKey?(hs(rn=>rn.includes(tt)?rn.filter(on=>on!==tt):[...rn,tt]),en(tt)):(hs(rn=>rn.includes(tt)?[]:[tt]),en(rn=>rn===tt?null:tt)),!(Se.metaKey||Se.ctrlKey||Se.detail>=2)||tt==="WORKING_TREE")return;const Nt=tt.length>=40?tt.slice(0,7):tt;let Dt=null;if(Le.commit.branchName?(Dt=Vo(Le.commit.branchName,tt,Nt),Dt||(Dt=Yo(Le.commit.branchName))):Dt=Fn(tt,Nt),Dt&&le){le(Dt.path);return}h==null||h({commitSha:tt})},[Fn,Vo,Yo,h,le]),bt=y.useCallback((Se,Le)=>{var on,Xn,Rs,Oo,zo;if(Se.button!==0)return;const tt=Se.target;if(tt!=null&&tt.closest("button, a, input, textarea, select"))return;Se.stopPropagation(),Se.preventDefault(),Lt.current=!1,Se.currentTarget.setPointerCapture(Se.pointerId);const $e=(on=Ie[Le.commit.visualId])!=null?on:Ie[Le.commit.id];Vt.current={nodeId:Le.commit.visualId,startX:Se.clientX,startY:Se.clientY,baseX:(Xn=$e==null?void 0:$e.x)!=null?Xn:Le.x,baseY:(Rs=$e==null?void 0:$e.y)!=null?Rs:Le.y,moved:!1,pendingX:(Oo=$e==null?void 0:$e.x)!=null?Oo:Le.x,pendingY:(zo=$e==null?void 0:$e.y)!=null?zo:Le.y};const Nt=()=>{Pe.current=null;const ss=Vt.current;ss&&Et(to=>({...to,[ss.nodeId]:{x:ss.pendingX,y:ss.pendingY}}))},Dt=ss=>{const to=Vt.current;if(!to)return;const E=fn.current.zoom/la,z=E>0?1/E:1,K=(ss.clientX-to.startX)*z,W=(ss.clientY-to.startY)*z;(Math.abs(K)>2||Math.abs(W)>2)&&(to.moved=!0),to.moved&&(Lt.current=!0),to.pendingX=to.baseX+K,to.pendingY=to.baseY+W,Pe.current==null&&(Pe.current=window.requestAnimationFrame(Nt))},rn=()=>{window.removeEventListener("pointermove",Dt),window.removeEventListener("pointerup",rn),window.removeEventListener("pointercancel",rn),Pe.current!=null&&(window.cancelAnimationFrame(Pe.current),Pe.current=null,Nt());try{Se.currentTarget.releasePointerCapture(Se.pointerId)}catch{}const ss=Vt.current;Vt.current=null,ss&&window.setTimeout(()=>{Lt.current=!1},0)};window.addEventListener("pointermove",Dt),window.addEventListener("pointerup",rn),window.addEventListener("pointercancel",rn)},[Ie]),Ht=y.useCallback(async()=>{if(!fe)return;await fe(ht)&&(Qe(!1),zt(""))},[fe,ht]),jn=y.useCallback(async()=>{P&&(await P({branchNames:[],discardUncommittedChanges:Fs,stashIndices:Ws}),I(!1),hs([]),en(null))},[P,Fs,Ws]),_s=y.useCallback(async()=>{const Se=be.trim();if(Se){if(Ue==="new-root"){if(!N)return;await N(Se)}else{if(!pe||Pn.length!==1)return;const Le=Pn[0];if(!(Le==="WORKING_TREE"||Le.startsWith("STASH:")))return;await pe(Le,Se)}te(!1),Fe(""),Be("from-selected-node"),hs([]),en(null)}},[Ue,be,pe,N,Pn]),bn=Pn.length===1&&(Pn[0]==="WORKING_TREE"||Pn[0].startsWith("STASH:")),Pt=!!N;return y.useEffect(()=>{if(se){if(!bn&&Pt){Be("new-root");return}bn&&Be("from-selected-node")}},[Pt,se,bn]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[l.jsx(Nw,{isOpen:ut,onToggle:()=>Xt(Se=>!Se),onClose:()=>Xt(!1),visibleBounds:$,renderedNodeCount:Y,totalNodeCount:Un.length,renderedMergeConnectorCount:Re,totalMergeConnectorCount:ks.length,renderedConnectorCount:qe,totalConnectorCount:rs.length,mapGridCullViewportInsetScreenPx:gw,debugRows:xo.debugRows,branchDebugRows:xo.branchDebugRows,connectorDecisions:An}),lo.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(Aw,{scrollContainerRef:ke,mapPadHostRef:nt,transformLayerRef:Je,isMarqueeSelecting:mn,contentWidth:jo,contentHeight:vo,isCameraMoving:Es,onWheel:yo,onMouseDown:Zs,onNodePointerDown:bt,labelTopPx:In,inverseZoomStyle:dn,displayZoom:ts,iconScaleStyle:js,selectedVisibleCommitShas:Pn,normalizedSearchQuery:$n,matchingNodeIds:bo,focusedNode:ho,renderNodes:Un,shouldRenderNode:di,manuallyOpenedClumps:At,manuallyClosedClumps:mt,defaultCollapsedClumps:ko,leadByClusterKey:fs,clusterKeyByCommitId:Ds,clusterCounts:kn,commitIdsWithRenderedAncestry:ci,nodeWarnings:Ii,connectorParentShas:Ho,branchStartShas:Ji,branchOffNodeShas:Uo,crossBranchOutgoingShas:Pi,branchBaseCommitByName:Ls,branchStartAccentClass:Ci,connectorParentAccentClass:Hi,commitCornerRadiusPx:fi,lineStrokeWidth:Kt,pointFormatter:wo,connectors:rs,mergeConnectors:ks,cullConnectorPath:H,flushCameraReactTick:it,setManuallyOpenedClumps:_t,setManuallyClosedClumps:sn,onCommitCardClick:st,unpushedCommitShasSetByBranch:hi,checkedOutHeadSha:fo}),Vs&&mn?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Vs.left,top:Vs.top,width:Vs.width,height:Vs.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Dw,{selectedVisibleCommitShas:Pn,commitInProgress:O,commitDisabled:oe,stageInProgress:Q,stashInProgress:Ae,stashDisabled:ee,pushInProgress:A,deleteInProgress:V,createBranchFromNodeInProgress:re,onCommitLocalChanges:fe,onStageAllChanges:F?()=>void F():void 0,onStashLocalChanges:Ce,onPushCurrentBranch:R,onPushAllBranches:j,onPushCommitTargets:B,onDeleteSelection:P,onCreateBranchFromNode:pe,onMergeRefsIntoBranch:k,selectedPushTargets:ns,selectedPushLabel:ge,canPushCurrentBranch:M,pushCurrentBranchLabel:Z,pushableRemoteBranchCount:Lo,deletableSelectionCount:ps,canCreateRootBranch:Pt,selectedCommitTargetOption:Mo,mergeInProgress:C,mergeTargetCommitSha:Ys,setMergeTargetCommitSha:en,worktrees:q,currentRepoPath:U,worktreeMenuOpen:dt,setWorktreeMenuOpen:Xe,onSwitchToWorktree:le,onRemoveWorktree:J,removeWorktreeInProgress:ce,setCommitDialogOpen:Qe,setDeleteConfirmOpen:I,setNewBranchDialogOpen:te}),l.jsx(Rw,{commitDialogOpen:ct,commitMessageDraft:ht,onCommitMessageDraftChange:zt,onCommitDialogClose:()=>Qe(!1),onCommitConfirm:()=>void Ht(),commitInProgress:O,deleteConfirmOpen:ot,deleteSelectionItems:To,onDeleteConfirmClose:()=>I(!1),onDeleteConfirm:()=>void jn(),deleteInProgress:V,deletableSelectionCount:ps,newBranchDialogOpen:se,newBranchName:be,newBranchCreateMode:Ue,onNewBranchNameChange:Fe,onNewBranchCreateModeChange:Be,onNewBranchDialogClose:()=>te(!1),onNewBranchConfirm:()=>void _s(),selectedCommitCanCreateBranch:bn,createBranchFromNodeInProgress:re})]})}function zw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridFocusSha:k=null,onGridSearchResultCountChange:C,onGridSearchFocusChange:j,view:R="time",isLoading:B=!1,scrollRequest:A,focusedErrorBranch:P,checkedOutRef:V=null,mapTopInsetPx:q=0,onMergeRefsIntoBranch:U,mergeInProgress:J=!1,onPushAllBranches:ce,onPushCurrentBranch:le,onPushCommitTargets:Ce,pushInProgress:Ae=!1,onDeleteSelection:ee,deleteInProgress:fe=!1,worktrees:O=[],currentRepoPath:oe,onRemoveWorktree:F,removeWorktreeInProgress:Q=!1,onSwitchToWorktree:pe,onStashLocalChanges:N,stashInProgress:re=!1,stashDisabled:ie=!1,onCommitLocalChanges:de,commitInProgress:Te=!1,commitDisabled:Ye=!1,onStageAllChanges:De,stageInProgress:ft=!1,onCreateBranchFromNode:rt,onCreateRootBranch:gt,createBranchFromNodeInProgress:Wt=!1,onMoveNodeBackToBranch:We,orientation:at="horizontal",onInteractionChange:St,manuallyOpenedClumps:Gt,manuallyClosedClumps:Ct,setManuallyOpenedClumps:Ft,setManuallyClosedClumps:G,layoutModel:ke}){const nt=new Set(u.map(Qe=>Qe.branchName)),Je=14*864e5,dt=Date.now();function Xe(Qe){return nt.has(Qe.name)||dt-new Date(Qe.lastCommitDate).getTime()<=Je}const ct=t.filter(Qe=>Qe.status==="stale"&&Xe(Qe)).sort((Qe,ht)=>new Date(ht.lastCommitDate).getTime()-new Date(Qe.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:R==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(jy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridFocusSha:k,onGridSearchResultCountChange:C,onGridSearchFocusChange:j,staleBranches:ct,isLoading:B,scrollRequest:A,focusedErrorBranch:P,checkedOutRef:V,mapTopInsetPx:q,onMergeRefsIntoBranch:U,mergeInProgress:J,onPushAllBranches:ce,onPushCurrentBranch:le,onPushCommitTargets:Ce,pushInProgress:Ae,onDeleteSelection:ee,deleteInProgress:fe,worktrees:O,currentRepoPath:oe,onRemoveWorktree:F,removeWorktreeInProgress:Q,onSwitchToWorktree:pe,onStashLocalChanges:N,stashInProgress:re,stashDisabled:ie,onCommitLocalChanges:de,commitInProgress:Te,commitDisabled:Ye,onStageAllChanges:De,stageInProgress:ft,onCreateBranchFromNode:rt,onCreateRootBranch:gt,createBranchFromNodeInProgress:Wt,onMoveNodeBackToBranch:We,orientation:at,onInteractionChange:St,manuallyOpenedClumps:Gt,manuallyClosedClumps:Ct,setManuallyOpenedClumps:Ft,setManuallyClosedClumps:G,layoutModel:ke})}):R==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(jy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridFocusSha:k,checkedOutRef:V,onGridSearchResultCountChange:C,onGridSearchFocusChange:j,onInteractionChange:St,manuallyOpenedClumps:Gt,manuallyClosedClumps:Ct,setManuallyOpenedClumps:Ft,setManuallyClosedClumps:G,layoutModel:ke,orientation:at})}):null})}const Sr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function $w(t,n,i,a){if(!t)return null;const c=d=>Sr(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(g=>c(g.fullSha)||c(g.sha)))return d;return null}function Iw(t,n,i,a,c,u){var le,Ce,Ae,ee,fe,O;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(Ce=(le=i[0])==null?void 0:le.fullSha)!=null?Ce:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(oe=>({name:oe.name,headSha:oe.headSha,isDefault:!1}))],x=d?_.filter(oe=>Sr(oe.headSha,d)):[],b=$w(d,i,a,u),w=b?_.find(oe=>oe.name===b):void 0,S=(ee=(Ae=x.find(oe=>oe.isDefault))!=null?Ae:x[0])!=null?ee:w,k=!!(S&&d&&Sr(S.headSha,d)),C=S&&!S.isDefault?n.find(oe=>oe.name===S.name):void 0,j=(()=>{var F;if(!d)return null;const oe=i.find(Q=>Sr(Q.fullSha,d)||Sr(Q.sha,d));if(oe!=null&&oe.date)return oe.date;if(C){const Q=((F=a[C.name])!=null?F:[]).find(pe=>Sr(pe.fullSha,d)||Sr(pe.sha,d));if(Q!=null&&Q.date)return Q.date}return null})(),R=j?new Date(j).getTime():Number.NaN,B=Date.now(),A=Number.isFinite(R)?Math.max(B,R+1+t.index):B+t.index,P=new Date(A).toISOString(),V=t.message.trim(),q={fullSha:h,sha:p,parentSha:d,message:V||p,author:"You",date:P,kind:"stash"},U={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(fe=C==null?void 0:C.name)!=null?fe:u,message:V||p,author:"You",date:P,kind:"stash"};if(k&&(S!=null&&S.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,U]};if(k&&C)return{branches:n.map(F=>F.name===C.name?{...F,commitsAhead:F.commitsAhead+1,unpushedCommits:F.unpushedCommits+1,lastCommitDate:P,headSha:h}:F),directCommits:i,branchCommitPreviews:{...a,[C.name]:[q,...a[C.name]||[]]},branchUniqueAheadCounts:{...c,[C.name]:Math.max(0,(O=Object.prototype.hasOwnProperty.call(c,C.name)?c[C.name]:C.commitsAhead)!=null?O:0)+1}};const J=`*Stash:${t.index}`;return{branches:[{name:J,commitsAhead:1,commitsBehind:0,lastCommitDate:P,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(S==null?void 0:S.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[J]:[q]},branchUniqueAheadCounts:{...c,[J]:1}}}function Xx(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=Iw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function Pw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:g,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var q,U,J,ce;const k=Xx(g,t,i,u,h,c);let C=k.branches,j=k.directCommits,R=k.branchCommitPreviews,B=k.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const le=p.headSha||p.parentSha||null,Ce=(U=(q=j[0])==null?void 0:q.fullSha)!=null?U:null,Ae=(De,ft)=>!De||!ft?!1:De===ft||De.startsWith(ft)||ft.startsWith(De),ee=[{name:c,headSha:Ce!=null?Ce:"",isDefault:!0},...C.map(De=>({name:De.name,headSha:De.headSha,isDefault:!1}))],fe=p.branchName?ee.find(De=>De.name===p.branchName):void 0,O=le?ee.filter(De=>Ae(De.headSha,le)):[],oe=(J=fe!=null?fe:O.find(De=>De.isDefault))!=null?J:O[0],F=!!(oe&&le&&Ae(oe.headSha,le)),Q=oe&&!oe.isDefault?C.find(De=>De.name===oe.name):void 0,pe=(()=>{var ft;if(!le)return null;const De=j.find(rt=>Ae(rt.fullSha,le)||Ae(rt.sha,le));if(De!=null&&De.date)return De.date;if(Q){const rt=((ft=R[Q.name])!=null?ft:[]).find(gt=>Ae(gt.fullSha,le)||Ae(gt.sha,le));if(rt!=null&&rt.date)return rt.date}return null})(),N=pe?new Date(pe).getTime():Number.NaN,re=Date.now(),ie=Number.isFinite(N)?Math.max(re,N+1):re,de=new Date(ie).toISOString(),Te={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:le,message:"Local uncommitted changes",author:"You",date:de,kind:"uncommitted"},Ye={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:le,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:de,kind:"uncommitted"};if(F&&(oe!=null&&oe.isDefault))j=[...j,Ye];else if(F&&Q)C=C.map(De=>De.name===Q.name?{...De,commitsAhead:De.commitsAhead+1,unpushedCommits:De.unpushedCommits+1,lastCommitDate:de,headSha:"WORKING_TREE"}:De),R={...R,[Q.name]:[Te,...R[Q.name]||[]]},B={...B,[Q.name]:Math.max(0,(ce=Object.prototype.hasOwnProperty.call(B,Q.name)?B[Q.name]:Q.commitsAhead)!=null?ce:0)+1};else{const De={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:de,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:le!=null?le:void 0,parentBranch:(oe==null?void 0:oe.name)||p.branchName||c};C=[De,...C],R={...R,[De.name]:[Te]},B={...B,[De.name]:1}}}const A={...d};A[c]=null;const P=up(C,c,R,A),V=Cd({lanes:P,branches:C,mergeNodes:n,directCommits:j,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:R,branchParentByName:A,branchUniqueAheadCounts:B,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:C,enrichedBranchCommitPreviews:R,enrichedBranchUniqueAheadCounts:B,enrichedDirectCommits:j,sharedGridLayoutModel:V}}function My(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function Ty(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ey(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Am({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:C,onSelectCommit:j,onSelectBranch:R}){var N,re;if(_.has(t)||!a.get(t))return null;const A=(N=u.get(t))!=null?N:[],P=A.length>0,V=y.useMemo(()=>{var ie;return[...(ie=c[t])!=null?ie:[]]},[c,t]),q=x&&V.length>0,U=x,J=P||q,ce=h.has(t),le=U?V:[],Ce=ce&&le.length>0,Ae=g===t,ee=new Set(_);ee.add(t);const fe="top-[-0.2rem] h-4.5 w-[10px]",O="rounded-bl-[7px]",oe="left-[0.65rem]",F=new Map,Q=[];for(const ie of A){const de=d.get(ie);if(de){const Te=le.findIndex(Ye=>Si(Ye.fullSha,de)||Si(Ye.sha,de));if(Te>=0){const Ye=(re=F.get(Te))!=null?re:[];Ye.push(ie),F.set(Te,Ye);continue}}Q.push(ie)}const pe=y.useMemo(()=>{if(!x||le.length===0)return[];const ie=[];let de=[],Te=null;const Ye=()=>{if(de.length===0)return;const De=de[de.length-1],ft=`sidebar-single-${t}-${De.fullSha}`;ie.push({key:Te!=null?Te:ft,commits:de,count:de.length,lead:De}),de=[],Te=null};return le.forEach(De=>{var rt;const ft=(rt=S.get(`${t}:${De.fullSha}`))!=null?rt:null;if(de.length===0){de=[De],Te=ft;return}if(ft===Te){de.push(De);return}Ye(),de=[De],Te=ft}),Ye(),ie},[t,x,le,S]);return l.jsxs("li",{className:Bs("relative",n>0?"pl-4":"pl-0",n===0&&!i?ce?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Bs("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",O,oe,fe)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Bs("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",oe)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{J&&p(t),R==null||R(t)},className:Bs("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",Ae?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[J?l.jsx("span",{className:Bs("inline-block text-[10px] text-muted-foreground transition-transform",ce?"rotate-90":""),children:"▶"}):null,l.jsx("span",{className:"min-w-0 break-words",children:l.jsx("span",{className:Bs(Ae?"font-medium text-foreground":"font-normal"),children:t})})]})}),Ce?l.jsx("ul",{className:"relative space-y-1 pl-4",children:pe.map(ie=>{const de=ie.count>1&&!k(ie.key);return(de?[ie.lead]:ie.commits).map(Ye=>{var rt;const De=le.findIndex(gt=>gt.fullSha===Ye.fullSha),ft=b(Ye.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>j==null?void 0:j(Ye.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Ye.message,children:[l.jsx("span",{className:"block truncate",children:Ye.message}),ft.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:ft.map(gt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:gt})]},`${Ye.fullSha}:${gt}`))}):null]}),ie.count>1&&Ye.fullSha===ie.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${ie.lead.fullSha}`,onClick:()=>C(ie.key,`${t}:${ie.lead.fullSha}`),className:Bs("shrink-0 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",de?"":"min-w-[2ch] text-center"),children:de?`+${Math.max(1,ie.count-1)}`:"−"}):null]}),(rt=F.get(De))!=null&&rt.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:F.get(De).map((gt,Wt,We)=>l.jsx(Am,{branchName:gt,depth:n+1,isLast:Wt===We.length-1&&Q.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:ee,showCommits:x,getMergeTargetLabels:b,sourceBranchName:gt,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:C,onSelectCommit:j,onSelectBranch:R},gt))}):null]},`${t}:${Ye.fullSha}`)})})}):null,P&&ce&&Q.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:Q.map((ie,de)=>l.jsx(Am,{branchName:ie,depth:n+1,isLast:de===Q.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:ee,showCommits:x,getMergeTargetLabels:b,sourceBranchName:ie,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:C,onSelectCommit:j,onSelectBranch:R},ie))}):null]})}function Hw({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,projectLoading:c=!1,projectError:u=null,branches:d,defaultBranch:h,checkedOutRef:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,setManuallyOpenedClumps:x,setManuallyClosedClumps:b,gridLayoutModel:w,onSelectCommit:S,onSelectBranch:k,className:C,style:j,collapsed:R=!1}){var Wt;const B=y.useRef(null),A=y.useRef(null),[P,V]=y.useState(!1),[q,U]=y.useState(()=>new Set),[J,ce]=y.useState(()=>new Set),[le,Ce]=y.useState(()=>new Set),Ae=g!=null?g:J,ee=_!=null?_:le,fe=x!=null?x:ce,O=b!=null?b:Ce,[oe,F]=y.useState(null),[Q,pe]=y.useState(null),N=y.useMemo(()=>d.some(at=>at.name===h)?d:[{name:h,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...d],[d,h]),re=y.useMemo(()=>My(N,h),[N,h]),ie=y.useMemo(()=>Ty(N,h,re),[N,h,re]),[de,Te]=y.useState(()=>Ey(ie,re,p,h));y.useEffect(()=>{Te(We=>{const at=Ey(ie,re,p,h),St=new Set(We);for(const Gt of at)St.add(Gt);return St})},[ie,re,p,h]);const Ye=(Wt=w==null?void 0:w.defaultCollapsedClumps)!=null?Wt:new Set,De=We=>Ae.has(We)||!Ye.has(We)&&!ee.has(We),ft=(We,at)=>{const St=B.current,Gt=A.current;if(St&&Gt){const Ct=`[data-clump-toggle-id="${at}"]`,Ft=St.querySelector(Ct);if(Ft){const G=Ft.getBoundingClientRect().top-Gt.getBoundingClientRect().top;pe({id:at,topWithinScrollBody:G})}else pe(null)}else pe(null);F(at),fe(Ct=>{const Ft=new Set(Ct),G=De(We);return O(ke=>{const nt=new Set(ke);return G?(Ft.delete(We),nt.add(We)):(nt.delete(We),Ft.add(We)),nt}),Ft})};y.useLayoutEffect(()=>{if(!oe)return;const We=B.current,at=A.current;if(!We||!at)return;const St=`[data-clump-toggle-id="${oe}"]`,Gt=We.querySelector(St);if(Gt){if((Q==null?void 0:Q.id)===oe){const Ft=Gt.getBoundingClientRect().top-at.getBoundingClientRect().top-Q.topWithinScrollBody;Number.isFinite(Ft)&&Ft!==0&&(at.scrollTop+=Ft)}Gt.focus({preventScroll:!0}),F(null),pe(null)}},[Ae,ee,oe,Q]);const rt=We=>{Te(at=>{const St=new Set(at);return St.has(We)?St.delete(We):St.add(We),St})};y.useEffect(()=>{U(We=>{const at=new Set(We);for(const St of t)at.add(St.path);return n&&at.add(n),at})},[n,t]);const gt=y.useMemo(()=>{var at,St,Gt,Ct,Ft,G,ke,nt,Je,dt;const We=new Map;for(const Xe of t){const ct=Xe.path===n,Qe=Pw({branches:Xe.branches,mergeNodes:Xe.mergeNodes,directCommits:Xe.directCommits,unpushedDirectCommits:Xe.unpushedDirectCommits,defaultBranch:Xe.defaultBranch,branchCommitPreviews:Xe.branchCommitPreviews,branchUniqueAheadCounts:Xe.branchUniqueAheadCounts,checkedOutRef:Xe.checkedOutRef,stashes:Xe.stashes,manuallyOpenedClumps:ct?Ae:new Set,manuallyClosedClumps:ct?ee:new Set}),ht=Qe.enrichedBranches.some(Ge=>Ge.name===Xe.defaultBranch)?Qe.enrichedBranches:[{name:Xe.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...Qe.enrichedBranches],zt=new Map(Qe.sharedGridLayoutModel.nodes.map(Ge=>[Ge.commit.visualId,Ge.row])),ot={};for(const Ge of Qe.sharedGridLayoutModel.allCommits){const Ie=(at=ot[Ge.branchName])!=null?at:[];Ie.push({fullSha:Ge.id,sha:Ge.id.slice(0,7),parentSha:(St=Ge.parentSha)!=null?St:null,message:Ge.message,author:Ge.author,date:Ge.date,kind:(Gt=Ge.kind)!=null?Gt:"commit"}),ot[Ge.branchName]=Ie}for(const Ge of Object.keys(ot))ot[Ge]=ot[Ge].sort((Ie,Et)=>{var mt,_t;const Lt=new Date(Ie.date).getTime(),Vt=new Date(Et.date).getTime();if(Lt!==Vt)return Lt-Vt;const Pe=(mt=zt.get(`${Ge}:${Ie.fullSha}`))!=null?mt:Number.MAX_SAFE_INTEGER,At=(_t=zt.get(`${Ge}:${Et.fullSha}`))!=null?_t:Number.MAX_SAFE_INTEGER;return Pe!==At?Pe-At:Ie.fullSha.localeCompare(Et.fullSha)});const I=(Ct=Qe.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?Ct:new Map,se=(Ge,Ie)=>{const Et=I.get(Ie);if(!Et)return[];for(const[Lt,Vt]of Et.entries())if(Si(Ge,Lt))return Array.from(Vt).sort();return[]},te=My(ht,Xe.defaultBranch),be=Ty(ht,Xe.defaultBranch,te),Fe=new Map(ht.map(Ge=>[Ge.name,Ge])),Ue=new Map;for(const Ge of ht){const Ie=(G=(Ft=Qe.sharedGridLayoutModel.firstBranchCommitByName.get(Ge.name))==null?void 0:Ft.parentSha)!=null?G:null,Et=Ie!=null?Ie:null;Ue.set(Ge.name,Et)}const Be=(ke=Qe.sharedGridLayoutModel.defaultCollapsedClumps)!=null?ke:new Set,xt=ct?Ae:new Set,Tt=ct?ee:new Set,$t=Ge=>xt.has(Ge)||!Be.has(Ge)&&!Tt.has(Ge);We.set(Xe.path,{rootBranchNames:be,branchByName:Fe,branchCommitPreviewsFromLayout:ot,childNamesByParent:te,branchAnchorShaByName:Ue,checkedOutBranchName:(Je=(nt=Xe.checkedOutRef)==null?void 0:nt.branchName)!=null?Je:null,clusterKeyByCommitId:(dt=Qe.sharedGridLayoutModel.clusterKeyByCommitId)!=null?dt:new Map,getMergeTargetLabels:se,isGridClusterOpen:$t})}return We},[n,ee,Ae,t]);return l.jsx("aside",{ref:B,"aria-label":"Dense branch sidebar",className:Bs("pointer-events-auto relative h-full overflow-hidden",C),style:j,children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3 px-2.5",children:[R?l.jsx("span",{className:"sr-only",children:"Projects"}):l.jsx("h2",{className:"text-sm font-medium text-foreground",children:"Projects"}),l.jsx("div",{className:"flex items-center gap-2",children:R?null:l.jsxs(l.Fragment,{children:[l.jsx("button",{type:"button",onClick:a,disabled:c,className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Add repo"}),l.jsx("button",{type:"button",onClick:()=>V(We=>!We),className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground",children:P?"Hide commits":"Show commits"})]})})]}),u&&l.jsx("div",{className:"px-2.5 pb-3",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:u})}),l.jsx("div",{ref:A,className:Bs("min-h-0 flex-1 space-y-2 overflow-y-auto px-2.5",R?"opacity-0 pointer-events-none":""),children:t.map(We=>{var G,ke;const at=We.path===n,St=q.has(We.path)||at,Gt=(G=We.treeLoaded)!=null?G:We.branches.length>0,Ct=gt.get(We.path),Ft=at?de:new Set(Ct?Array.from(Ct.branchByName.keys()):[]);return l.jsxs("div",{children:[l.jsxs("button",{type:"button",onClick:()=>{i(We.path)},className:Bs("flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-colors",at?"bg-primary/10 text-foreground":"text-muted-foreground hover:text-foreground"),children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:Bs("truncate text-sm",at?"font-semibold text-foreground":"font-medium text-muted-foreground"),children:We.name}),l.jsx("p",{className:"truncate text-xs text-muted-foreground",children:We.path})]}),l.jsx("span",{className:"shrink-0 text-xs text-muted-foreground",children:(ke=We.branchName)!=null?ke:"branch"})]}),St&&l.jsx("div",{className:"px-2.5",children:Gt&&Ct?l.jsx("ul",{className:"space-y-1",children:Ct.rootBranchNames.map((nt,Je)=>l.jsx(Am,{branchName:nt,depth:0,isLast:Je===Ct.rootBranchNames.length-1,branchByName:Ct.branchByName,branchCommitPreviews:Ct.branchCommitPreviewsFromLayout,childNamesByParent:Ct.childNamesByParent,branchAnchorShaByName:Ct.branchAnchorShaByName,expandedBranchNames:Ft,onToggleBranch:rt,checkedOutBranchName:Ct.checkedOutBranchName,ancestors:new Set,showCommits:P,getMergeTargetLabels:Ct.getMergeTargetLabels,sourceBranchName:nt,clusterKeyByCommitId:Ct.clusterKeyByCommitId,isGridClusterOpen:Ct.isGridClusterOpen,onToggleGridCluster:ft,onSelectCommit:async dt=>{at||await i(We.path),S==null||S(dt)},onSelectBranch:async dt=>{at||await i(We.path),k==null||k(dt)}},`${We.path}:${nt}`))}):l.jsx("p",{className:"px-2 py-1 text-xs text-muted-foreground",children:"Loading branch tree..."})})]},We.path)})})]})})}const Uw="git-visualizer",Ay="git-visualizer:projects",Dy=12,Ny=1400,Vw=180,Ry="git-visualizer:sidebar-width",By="git-visualizer:sidebar-collapsed",Ly=432,Oy=280,zy=640;function il(t){return t==="/"?t:t.replace(/\/+$/,"")}function Wu(...t){return t.filter(Boolean).join(" ")}function hd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Yw(t){return hd(t)===Uw}function Ww(){var Ve,et;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,g]=y.useState(!1),[_,x]=y.useState([]),[b,w]=y.useState([]),[S,k]=y.useState([]),[C,j]=y.useState([]),[R,B]=y.useState({}),[A,P]=y.useState([]),[V,q]=y.useState("main"),[U,J]=y.useState(null),[ce,le]=y.useState([]),[Ce,Ae]=y.useState(!1),[ee,fe]=y.useState(""),[O,oe]=y.useState(0),[F,Q]=y.useState(()=>new Set),[pe,N]=y.useState(()=>new Set),[re,ie]=y.useState(null),[de,Te]=y.useState(null),[Ye,De]=y.useState(!1),[ft,rt]=y.useState(!1),[gt,Wt]=y.useState(null),[We,at]=y.useState(!1),[St,Gt]=y.useState(!1),[Ct,Ft]=y.useState("active"),[G,ke]=y.useState(null),[nt,Je]=y.useState(null),[dt,Xe]=y.useState(!1),[ct,Qe]=y.useState(null),[ht,zt]=y.useState(!1),[ot,I]=y.useState(null),[se,te]=y.useState(null),[be,Fe]=y.useState(!1),[Ue,Be]=y.useState(!1),[xt,Tt]=y.useState(!1),[$t,Ge]=y.useState(!1),[Ie,Et]=y.useState({}),[Lt,Vt]=y.useState({}),[Pe,At]=y.useState({}),[mt,_t]=y.useState({}),[sn,ut]=y.useState({}),[Xt,zn]=y.useState([]),[es,Sn]=y.useState(!1),[go,Es]=y.useState(!1),[Cs,En]=y.useState(!1),[fn,cn]=y.useState(!1),[Cn,it]=y.useState(!1),[Qt,yo]=y.useState("horizontal"),[Ks,ds]=y.useState(Ly),[As,Qo]=y.useState(!1),[xo,lo]=y.useState({dragging:!1,lastEvent:"idle"}),Ds=y.useRef(null),fs=y.useRef(0),kn=y.useRef(0),Us=y.useRef(null),bo=y.useRef(Ly),$n=y.useRef(null),gn=y.useRef(null),ko=Yw(t)||!0,Un=y.useRef(!1),Zo=y.useRef(!1),jo=y.useRef(new Set),vo=y.useRef([]),rs=y.useRef([]),ks=y.useRef(null),An=y.useMemo(()=>c.map(D=>{var $,H,Y,Re,qe,st,bt,Ht,jn,_s,bn,Pt,un,Mn,ls,gs,Js,Os,eo,Jo,pi,ei,zs,ti,Se,Le,tt,$e;return{...D,...($=d[D.path])!=null?$:{},branches:(Y=(H=d[D.path])==null?void 0:H.branches)!=null?Y:[],mergeNodes:(qe=(Re=d[D.path])==null?void 0:Re.mergeNodes)!=null?qe:[],directCommits:(bt=(st=d[D.path])==null?void 0:st.directCommits)!=null?bt:[],unpushedDirectCommits:(jn=(Ht=d[D.path])==null?void 0:Ht.unpushedDirectCommits)!=null?jn:[],unpushedCommitShasByBranch:(bn=(_s=d[D.path])==null?void 0:_s.unpushedCommitShasByBranch)!=null?bn:{},checkedOutRef:(un=(Pt=d[D.path])==null?void 0:Pt.checkedOutRef)!=null?un:null,worktrees:(ls=(Mn=d[D.path])==null?void 0:Mn.worktrees)!=null?ls:[],stashes:(Js=(gs=d[D.path])==null?void 0:gs.stashes)!=null?Js:[],branchCommitPreviews:(eo=(Os=d[D.path])==null?void 0:Os.branchCommitPreviews)!=null?eo:{},laneByBranch:(pi=(Jo=d[D.path])==null?void 0:Jo.laneByBranch)!=null?pi:{},branchUniqueAheadCounts:(zs=(ei=d[D.path])==null?void 0:ei.branchUniqueAheadCounts)!=null?zs:{},defaultBranch:(Le=(Se=(ti=d[D.path])==null?void 0:ti.defaultBranch)!=null?Se:D.branchName)!=null?Le:"main",treeLoaded:($e=(tt=d[D.path])==null?void 0:tt.loaded)!=null?$e:!1}}),[c,d]);y.useEffect(()=>{try{const D=localStorage.getItem(Ay);if(!D)return;const $=JSON.parse(D);if(!Array.isArray($))return;const H=$.filter(Y=>typeof Y=="object"&&Y!==null&&typeof Y.path=="string"&&typeof Y.name=="string"&&typeof Y.lastOpenedAt=="number");u(H.slice(0,Dy))}catch{u([])}},[]),y.useEffect(()=>{Zo.current||t||c.length!==0&&(Zo.current=!0,fi(c[0].path))},[c,t]);const Ii=y.useMemo(()=>b.reduce((D,$)=>(D[$.targetCommitSha]=$.targetBranch,D),{}),[b]);y.useEffect(()=>{t&&h(D=>{var $,H;return{...D,[t]:{path:t,name:i||hd(t),branches:_,mergeNodes:b,directCommits:S,unpushedDirectCommits:C,mergeTargetBranchByCommitSha:b.reduce((Y,Re)=>(Y[Re.targetCommitSha]=Re.targetBranch,Y),{}),unpushedCommitShasByBranch:R,checkedOutRef:U,worktrees:ce,stashes:Xt,branchCommitPreviews:Lt,branchParentByName:Pe,laneByBranch:mt,branchUniqueAheadCounts:sn,defaultBranch:V,loaded:!0,cacheSchemaVersion:(H=($=D[t])==null?void 0:$.cacheSchemaVersion)!=null?H:1,updatedAtMs:Date.now()}}})},[t,i,_,b,S,C,Ii,R,U,ce,Xt,Lt,Pe,mt,sn,V]);async function ci(D,$=!1){var Y;const H=il(D);if(H&&!jo.current.has(H)&&!(!$&&((Y=d[H])!=null&&Y.loaded))){jo.current.add(H),g(!0);try{const Re=await we("get_repo_visual_snapshot",{repoPath:H,forceRefresh:$});h(qe=>({...qe,[H]:Re}))}finally{jo.current.delete(H),jo.current.size===0&&g(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach(D=>{ci(D.path),we("watch_repo",{repoPath:D.path}).catch(console.error)})},[c]),y.useEffect(()=>{let D=!1,$=null;return gc("git-activity",H=>{if(D)return;const Y=il(H.payload.repoPath);!Y||Y===t||ci(Y,!0)}).then(H=>{D?H():$=H}).catch(console.error),()=>{D=!0,$&&$()}},[t]);function Ho(D){u($=>{const H=il(D.path);if(!H)return $;const Y={...D,path:H},qe=($.some(st=>st.path===H)?$.map(st=>st.path===H?Y:st):[...$,Y]).slice(-Dy);try{localStorage.setItem(Ay,JSON.stringify(qe))}catch{}return qe})}async function Ji(D){const $=il(D);if($){Wt(null);try{const[H,Y]=await Promise.all([we("get_repo_info",{repoPath:$}),we("get_default_branch",{repoPath:$}).catch(()=>"main")]);Ho({path:$,name:H.name,lastOpenedAt:Date.now(),branchName:Y}),await ci($,!0)}catch(H){Wt(H instanceof Error?H.message:String(H))}}}function Uo(D){if(D.button!==0)return;const $=D.target;if($!=null&&$.closest(".window-no-drag"))return;const H=Mm();we("start_window_drag").catch(()=>H.startDragging()).catch(Y=>{console.warn("Failed to start window drag:",Y)})}async function Pi(D,$){const Y=[];let Re=0;for(;;){const qe=await we("get_merge_nodes",{repoPath:D,branch:$,page:Re,perPage:100});if(Y.push(...qe.nodes),!qe.hasMore||qe.nodes.length===0)break;Re+=1}return Y}async function Ls(D,$,H){const Y=Array.from(new Set([H,...$.map(st=>st.name)].filter(st=>!!st)));if(Y.length===0)return[];const Re=await Promise.all(Y.map(st=>Pi(D,st).catch(()=>[]))),qe=new Map;for(const st of Re)for(const bt of st){const Ht=`${bt.targetCommitSha}:${bt.targetBranch}`;qe.has(Ht)||qe.set(Ht,bt)}return Array.from(qe.values())}const wo=D=>D.map($=>`${$.name}|${$.headSha}|${$.commitsAhead}|${$.commitsBehind}|${$.unpushedCommits}|${$.remoteSyncStatus}`).join("||"),Rn=D=>D.map($=>$.fullSha).join("|"),ts=D=>{var $,H;return D?`${($=D.branchName)!=null?$:""}|${D.headSha}|${(H=D.parentSha)!=null?H:""}|${D.hasUncommittedChanges?1:0}`:"__none__"};async function dn(D,$){const H=$!=null?$:V,[Y,Re,qe,st,bt,Ht]=await Promise.all([we("get_branches",{repoPath:D}),we("get_all_repo_commits",{repoPath:D}),we("get_unpushed_direct_commits",{repoPath:D,branch:H}).catch(()=>[]),we("get_checked_out_ref",{repoPath:D}).catch(()=>null),we("list_worktrees",{repoPath:D}).catch(()=>[]),we("list_stashes",{repoPath:D}).catch(()=>[])]),jn=await Ls(D,Y,H),_s=await Promise.all([H,...Y.map(bn=>bn.name)].map(async bn=>{const Pt=await we("get_branch_unpushed_commit_shas",{repoPath:D,branch:bn}).catch(()=>[]);return[bn,Pt]}));x(Y),w(jn),k(Re),j(qe),B(Object.fromEntries(_s)),J(st),le(bt),zn(Ht)}async function In(D){const[$,H,Y]=await Promise.all([we("get_branches",{repoPath:D}).catch(()=>[]),we("get_all_repo_commits",{repoPath:D}).catch(()=>[]),we("get_checked_out_ref",{repoPath:D}).catch(()=>null)]);return wo($)!==wo(vo.current)||Rn(H)!==Rn(rs.current)||ts(Y)!==ts(ks.current)}async function ui(D){te(null),rt(!0);try{const[$,H]=await Promise.all([we("get_repo_info",{repoPath:D}),we("get_default_branch",{repoPath:D})]);a($.name),q(H),n(D),await dn(D,H),js(D),te({kind:"success",message:`Now targeting worktree at ${D}`})}catch($){const H=$ instanceof Error?$.message:String($);te({kind:"error",message:H}),console.error("Failed to switch worktree:",H)}finally{rt(!1)}}async function Bo(D,$){if(!(!t||Ce)){Ae(!0),te(null);try{await we("remove_worktree",{repoPath:t,worktreePath:D,force:$}),await dn(t),te({kind:"success",message:`Removed worktree at ${D}`})}catch(H){const Y=H instanceof Error?H.message:String(H);te({kind:"error",message:Y}),console.error("Failed to remove worktree:",Y)}finally{Ae(!1)}}}function di(D,$){var H,Y;a($.name||hd(D)),q($.defaultBranch||"main"),x($.branches),w($.mergeNodes),k($.directCommits),j($.unpushedDirectCommits),B($.unpushedCommitShasByBranch),J($.checkedOutRef),le($.worktrees),zn($.stashes),Vt($.branchCommitPreviews),At((H=$.branchParentByName)!=null?H:{}),_t((Y=$.laneByBranch)!=null?Y:{}),ut($.branchUniqueAheadCounts),n(D)}async function Kt(D,$,H){const Y=H==null?void 0:H.forceRefresh,Re=H==null?void 0:H.applyToActiveState;try{const[qe,st]=await Promise.all([we("get_repo_info",{repoPath:D}),we("get_default_branch",{repoPath:D})]);if($!==fs.current)return;const bt=await we("get_repo_visual_snapshot",{repoPath:D,forceRefresh:Y});if($!==fs.current)return;h(Ht=>({...Ht,[D]:bt})),Re&&(t===D||fs.current),js(D)}catch(qe){if($!==fs.current)return;console.error("Background snapshot refresh failed:",qe)}}async function fi(D){const $=++fs.current,H=il(D);if(!H)return;const Y=d[H];if(Y!=null&&Y.loaded){Wt(null),di(H,Y),Ho({path:H,name:Y.name||hd(H),lastOpenedAt:Date.now(),branchName:Y.defaultBranch}),rt(!1),De(!1),Kt(H,$,{forceRefresh:!1,applyToActiveState:!1});return}if(De(!0),rt(!0),Wt(null),await new Promise(Re=>setTimeout(Re,15)),$===fs.current)try{const[Re,qe]=await Promise.all([we("get_repo_info",{repoPath:H}),we("get_default_branch",{repoPath:H})]);if($!==fs.current)return;a(Re.name),q(qe);const st=await we("get_repo_visual_snapshot",{repoPath:H,forceRefresh:!0});if($!==fs.current)return;h(bt=>({...bt,[H]:st})),di(H,st),Ho({path:H,name:Re.name,lastOpenedAt:Date.now(),branchName:qe}),rt(!1),De(!1),js(H)}catch(Re){if($!==fs.current)return;console.error("Failed to load repo:",Re),Wt(Re instanceof Error?Re.message:String(Re)),n(null),De(!1),rt(!1)}}async function js(D){const $=++kn.current;try{if($!==kn.current)return;Xe(!1),I(null);const H=await we("get_github_info",{repoPath:D}),Y=await we("get_github_auth_status");if($!==kn.current||(Qe(Y),!Y.ghAvailable||!Y.authenticated))return;const Re=await we("get_open_prs",{owner:H.owner,repo:H.repo});if($!==kn.current)return;P(Re),Xe(!0)}catch(H){if($!==kn.current)return;console.log("GitHub data not available:",H),I(H instanceof Error?H.message:String(H)),Xe(!1)}}y.useEffect(()=>{let D=null,$=!1;const H=(()=>{try{return Mm().label}catch{return null}})(),Y=async qe=>{var bt;const st=(bt=qe==null?void 0:qe.path)==null?void 0:bt.trim();!st||$||t!==st&&await fi(st)};return(async()=>{H==="main"&&(D=await gc("gitviz://open-repo",async st=>{await Y(st.payload)}));const qe=await we("take_pending_open_repo");await Y(qe)})(),()=>{$=!0,D&&D()}},[t]),y.useEffect(()=>{vo.current=_},[_]),y.useEffect(()=>{rs.current=S},[S]),y.useEffect(()=>{ks.current=U},[U]),y.useEffect(()=>{Un.current=Cn},[Cn]),y.useEffect(()=>{},[t,V,ko]),y.useEffect(()=>{if(!t||!V||!ko)return;we("watch_repo",{repoPath:t}).catch(console.error);let D=!1,$=!1,H=!1,Y=null;const Re=async()=>{if(!D){if(Un.current){$=!0;return}if(H){$=!0;return}H=!0;try{if(!await In(t)||D)return;await dn(t,V)}catch(st){console.warn("Frozen git-activity refresh failed:",st)}finally{H=!1,$&&!D&&($=!1,window.setTimeout(()=>{Re()},0))}}},qe=()=>{$=!0,Re()};return gc("git-activity",st=>{il(st.payload.repoPath)===t&&(ci(t,!0),qe())}).then(st=>{D?st():Y=st}).catch(console.error),()=>{D=!0,Y&&Y()}},[t,V,ko]);async function Hi(){if(t){zt(!0),I(null);try{await we("authenticate_github");const D=await we("get_github_auth_status");Qe(D),D.authenticated?await js(t):D.message&&I(D.message)}catch(D){I(D instanceof Error?D.message:String(D))}finally{zt(!1)}}}const Ci=new Set(A.map(D=>D.branchName)),So=14*864e5,Qs=Date.now(),hi=_.filter(D=>D.status==="stale"),co=hi.filter(D=>Ci.has(D.name)||Qs-new Date(D.lastCommitDate).getTime()<=So),mn=hi.filter(D=>!Ci.has(D.name)&&Qs-new Date(D.lastCommitDate).getTime()>So),Vs=D=>{var $;return Object.prototype.hasOwnProperty.call(sn,D.name)?Math.max(0,($=sn[D.name])!=null?$:0):Math.max(0,D.commitsAhead)};y.useEffect(()=>{Et({}),gn.current=null,zt(!1),Qe(null),I(null),P([]),te(null)},[t]),y.useEffect(()=>{var Ht,jn,_s,bn;if(!t||!V){Et({}),Vt({}),At({}),_t({}),ut({}),gn.current=null;return}const D=_.map(Pt=>{var un;return`${Pt.name}:${Pt.headSha}:${(un=Pt.parentBranch)!=null?un:""}:${Pt.commitsAhead}`}).join("|"),$=b.map(Pt=>{var un,Mn;return`${Pt.fullSha}:${(Mn=(un=Pt.parentShas)==null?void 0:un[1])!=null?Mn:""}`}).join("|"),H=`${t}|${V}|${D}|${$}`;if(gn.current===H)return;gn.current=H;const Y={},Re={};for(const Pt of _){if(Pt.name===V)continue;const un=S.filter(Mn=>Mn.branch===Pt.name).map(Mn=>{var ls;return{fullSha:Mn.fullSha,sha:Mn.sha,parentSha:(ls=Mn.parentSha)!=null?ls:null,message:Mn.message,author:Mn.author,date:Mn.date,kind:"commit"}});Y[Pt.name]=un,Re[Pt.name]=un.length}const qe=new Map;for(const Pt of S)qe.set(Pt.fullSha,Pt.branch);const st=Pt=>{if(!Pt)return null;const un=qe.get(Pt);if(un)return un;for(const[Mn,ls]of qe.entries())if(Mn.startsWith(Pt)||Pt.startsWith(Mn))return ls;return null},bt={[V]:null};for(const Pt of _){if(Pt.name===V){bt[Pt.name]=null;continue}const un=S.filter(Js=>Js.branch===Pt.name),Mn=new Set(un.map(Js=>Js.fullSha)),ls=(jn=(Ht=un.filter(Js=>{var eo;const Os=(eo=Js.parentSha)!=null?eo:null;return!Os||!Mn.has(Os)}).sort((Js,Os)=>{const eo=new Date(Js.date).getTime()-new Date(Os.date).getTime();return eo!==0?eo:Js.fullSha.localeCompare(Os.fullSha)})[0])==null?void 0:Ht.parentSha)!=null?jn:null,gs=st(ls);bt[Pt.name]=(bn=(_s=gs!=null?gs:Pe[Pt.name])!=null?_s:Pt.parentBranch)!=null?bn:null}Et({}),Vt(Y),At(bt),_t(Pt=>{const un={};for(const Mn of _){const ls=Pt[Mn.name];ls!=null&&Number.isFinite(ls)&&(un[Mn.name]=ls)}return un}),ut(Re)},[t,V,_,b,S,Pe]),y.useEffect(()=>{if(!se){Fe(!1);return}Fe(!0);const D=window.setTimeout(()=>{Fe(!1)},Ny),$=window.setTimeout(()=>{te(null)},Ny+Vw);return()=>{window.clearTimeout(D),window.clearTimeout($)}},[se]),y.useEffect(()=>{if(!t||_.length===0)return;const D=Y=>new Promise(Re=>setTimeout(Re,Y));async function $(){const Re=`${await we("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Re}`),await D(800),await we("screenshot",{path:`${Re}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Re}`)}const H=Y=>{(Y.metaKey||Y.ctrlKey)&&Y.shiftKey&&Y.key==="S"&&(Y.preventDefault(),$())};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[t,i,_]);function mi(){Gt(!0),setTimeout(()=>{at(!1),Gt(!1),Ft("active"),Je(null)},100)}async function hs(D){if(!t)return;te(null);const $=/^STASH:(\d+)$/.exec(D.commitSha);if($){try{const H=parseInt($[1],10),Y=await we("apply_stash_restore",{repoPath:t,stashIndex:H});J(Y),await dn(t);const Re=`Stash ${H+1}`,qe=Y.branchName?` on branch ${Y.branchName}`:" at the stash base (detached HEAD)";te({kind:"success",message:`Restored ${Re}${qe}; stash applied and dropped (uncommitted changes).`})}catch(H){const Y=H instanceof Error?H.message:String(H);te({kind:"error",message:Y}),console.error("Failed to apply stash:",Y)}return}if(D.branchName){const H=(Re,qe)=>{const st=Re.replace(/\\/g,"/").replace(/\/+$/,""),bt=qe.replace(/\\/g,"/").replace(/\/+$/,"");return st===bt||st.toLowerCase()===bt.toLowerCase()},Y=ce.find(Re=>Re.pathExists===!1||Re.isCurrent||t&&H(Re.path,t)?!1:Re.branchName===D.branchName);if(Y){await ui(Y.path);return}}try{let H="";(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await we("stash_push",{repoPath:t,includeUntracked:!0}),H="Stashed local changes (including untracked), then ",await dn(t));const Re=D.branchName?await we("checkout_branch",{repoPath:t,branchName:D.branchName}):await we("checkout_ref",{repoPath:t,refName:D.commitSha}),qe=await we("get_checked_out_ref",{repoPath:t}).catch(()=>Re);J(qe),await dn(t);const st=qe.branchName?qe.branchName:`${qe.headSha.slice(0,7)} (detached)`;te({kind:"success",message:`${H}Checked out ${st}`})}catch(H){const Y=H instanceof Error?H.message:String(H);te({kind:"error",message:Y}),console.error("Failed to checkout commit:",Y)}}async function Ys(){if(!(!t||es)){te(null),Sn(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){te({kind:"error",message:"No local changes to stash."});return}await we("stash_push",{repoPath:t,includeUntracked:!0}),await dn(t),te({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(D){const $=D instanceof Error?D.message:String(D);te({kind:"error",message:$}),console.error("Failed to stash:",$)}finally{Sn(!1)}}}async function en(D){if(!t||go)return!1;const $=D.trim();if(!$)return te({kind:"error",message:"Enter a commit message."}),!1;te(null),Es(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return te({kind:"error",message:"No local changes to commit."}),!1;const Y=await we("commit_working_tree",{repoPath:t,message:$});return J(Y),await dn(t),te({kind:"success",message:"Committed local changes."}),!0}catch(H){const Y=H instanceof Error?H.message:String(H);return te({kind:"error",message:Y}),console.error("Failed to commit:",Y),!1}finally{Es(!1)}}async function Zs(){if(!t||Cs)return!1;te(null),En(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return te({kind:"error",message:"No local changes to stage."}),!1;const $=await we("stage_working_tree",{repoPath:t});return J($),await dn(t),te({kind:"success",message:"Staged all changes."}),!0}catch(D){const $=D instanceof Error?D.message:String(D);return te({kind:"error",message:$}),console.error("Failed to stage:",$),!1}finally{En(!1)}}async function uo(D,$){if(!(!t||fn)){cn(!0),te(null);try{const H=/^STASH:(\d+)$/.exec(D);let Y;if(H){const Re=parseInt(H[1],10);Y=await we("move_stash_to_new_branch",{repoPath:t,stashIndex:Re,branchName:$})}else Y=await we("create_branch_from_uncommitted",{repoPath:t,branchName:$});J(Y),await dn(t),te({kind:"success",message:`Moved to new branch "${$}"`})}catch(H){const Y=H instanceof Error?H.message:String(H);te({kind:"error",message:Y}),console.error("Failed to create branch from node:",Y)}finally{cn(!1)}}}async function Pn(D){if(!(!t||fn)){cn(!0),te(null);try{const $=await we("create_root_branch",{repoPath:t,branchName:D});J($),await dn(t),te({kind:"success",message:`Created new root branch "${D}"`})}catch($){const H=$ instanceof Error?$.message:String($);te({kind:"error",message:H}),console.error("Failed to create root branch:",H)}finally{cn(!1)}}}async function Ms(D,$){if(!t)return;const H=Array.from(new Set(D.filter(Y=>!!Y&&Y!==$)));if(H.length!==0){te(null),Be(!0);try{let Y=null;for(const Re of H)Y=await we("merge_ref_into_branch",{repoPath:t,sourceRef:Re,targetBranch:$});await dn(t),Y&&J(Y),te({kind:"success",message:H.length===1?`Merged ${H[0].slice(0,7)} into ${$}`:`Merged ${H.length} commits into ${$}`})}catch(Y){const Re=Y instanceof Error?Y.message:String(Y);te({kind:"error",message:Re}),console.error("Failed to merge refs into branch:",Re)}finally{Be(!1)}}}async function Ns(){if(!(!t||xt)){te(null),Tt(!0);try{const D=await we("push_all_unpushed_branches",{repoPath:t});await dn(t),te({kind:"success",message:D.length>0?D.length===1?`Pushed ${D[0].branchName}`:`Pushed ${D.length} branches`:"Everything local is already pushed."})}catch(D){const $=D instanceof Error?D.message:String(D);te({kind:"error",message:$}),console.error("Failed to push all branches:",$)}finally{Tt(!1)}}}async function fo(){if(!(!t||xt)){te(null),Tt(!0);try{const D=await we("push_current_branch",{repoPath:t});await dn(t),te({kind:"success",message:`Pushed ${D.branchName}`})}catch(D){const $=D instanceof Error?D.message:String(D);te({kind:"error",message:$}),console.error("Failed to push current branch:",$)}finally{Tt(!1)}}}async function ki(D){var H;if(!t||xt)return;const $=Array.from(new Map(D.filter(Y=>Y.branchName&&Y.targetSha).map(Y=>[Y.branchName,Y])).values());if($.length!==0){te(null),Tt(!0);try{for(const Y of $)await we("push_branch",{repoPath:t,branchName:Y.branchName,targetSha:Y.targetSha});await dn(t),te({kind:"success",message:$.length===1?`Pushed ${$[0].branchName} through ${(H=$[0].targetSha)==null?void 0:H.slice(0,7)}`:`Pushed ${$.length} selected commit ranges`})}catch(Y){const Re=Y instanceof Error?Y.message:String(Y);te({kind:"error",message:Re}),console.error("Failed to push selected commits:",Re)}finally{Tt(!1)}}}async function ho(D){var qe;if(!t||$t)return;const $=Array.from(new Set(D.branchNames.filter(st=>st&&st!==V))),H=!!D.discardUncommittedChanges,Y=(qe=D.stashIndices)!=null?qe:[],Re=Array.from(new Set(Y)).sort((st,bt)=>bt-st);if(!($.length===0&&!H&&Re.length===0)){te(null),Ge(!0);try{for(const Ht of Re)await we("stash_drop",{repoPath:t,stashIndex:Ht});const st=$.length>0||H?await we("delete_selected_elements",{repoPath:t,branchNames:$,discardUncommittedChanges:H}):{deletedBranches:[],discardedUncommittedChanges:!1};await dn(t);const bt=[];Re.length>0&&bt.push(Re.length===1?`removed stash ${Re[0]+1}`:`removed ${Re.length} stashes`),st.discardedUncommittedChanges&&bt.push("discarded local uncommitted changes"),st.deletedBranches.length>0&&bt.push(st.deletedBranches.length===1?`deleted ${st.deletedBranches[0]}`:`deleted ${st.deletedBranches.length} branches`),te({kind:"success",message:bt.length>0?bt.join(" and "):"Nothing to delete."})}catch(st){const bt=st instanceof Error?st.message:String(st);te({kind:"error",message:bt}),console.error("Failed to delete selected elements:",bt)}finally{Ge(!1)}}}function Vo(D){Je(D),ke($=>{var H;return{branch:D,seq:((H=$==null?void 0:$.seq)!=null?H:0)+1}})}function Yo(D){D&&(Te(D),oe($=>$+1))}function Fn(D){D&&(fe(D),oe($=>$+1))}y.useEffect(()=>{var H;const D=U!=null&&U.hasUncommittedChanges?"WORKING_TREE":(H=U==null?void 0:U.headSha)!=null?H:null;if(!D)return;const $=`${t!=null?t:"__no-repo__"}|${Qt}|${D}`;Ds.current!==$&&(Ds.current=$,Te(D),oe(Y=>Y+1))},[U==null?void 0:U.hasUncommittedChanges,U==null?void 0:U.headSha,Qt,t]),y.useEffect(()=>{Ds.current=null},[t]);const{enrichedBranches:Bn,enrichedBranchCommitPreviews:Mo,enrichedBranchUniqueAheadCounts:ms,enrichedDirectCommits:ns}=y.useMemo(()=>{var ei,zs,ti,Se;const D=Xx(Xt,_,S,Lt,sn,V);let $=D.branches,H=D.directCommits,Y=D.branchCommitPreviews,Re=D.branchUniqueAheadCounts;if(!(U!=null&&U.hasUncommittedChanges))return{enrichedBranches:$,enrichedDirectCommits:H,enrichedBranchCommitPreviews:Y,enrichedBranchUniqueAheadCounts:Re};const qe=U.headSha||U.parentSha||null,st=(zs=(ei=H[0])==null?void 0:ei.fullSha)!=null?zs:null,bt=(Le,tt)=>!Le||!tt?!1:Le===tt||Le.startsWith(tt)||tt.startsWith(Le),Ht=[{name:V,headSha:st!=null?st:"",isDefault:!0},...$.map(Le=>({name:Le.name,headSha:Le.headSha,isDefault:!1}))],jn=U.branchName?Ht.find(Le=>Le.name===U.branchName):void 0,_s=qe?Ht.filter(Le=>bt(Le.headSha,qe)):[],bn=(ti=jn!=null?jn:_s.find(Le=>Le.isDefault))!=null?ti:_s[0],Pt=!!(bn&&qe&&bt(bn.headSha,qe)),un=bn&&!bn.isDefault?$.find(Le=>Le.name===bn.name):void 0,Mn=(()=>{var tt;if(!qe)return null;const Le=H.find($e=>bt($e.fullSha,qe)||bt($e.sha,qe));if(Le!=null&&Le.date)return Le.date;if(un){const $e=((tt=Y[un.name])!=null?tt:[]).find(Nt=>bt(Nt.fullSha,qe)||bt(Nt.sha,qe));if($e!=null&&$e.date)return $e.date}return null})(),ls=Mn?new Date(Mn).getTime():Number.NaN,gs=Date.now(),Js=Number.isFinite(ls)?Math.max(gs,ls+1):gs,Os=new Date(Js).toISOString(),eo={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:qe,message:"Local uncommitted changes",author:"You",date:Os,kind:"uncommitted"},Jo={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:qe,childShas:[],branch:V,message:"Local uncommitted changes",author:"You",date:Os,kind:"uncommitted"};if(Pt&&(bn!=null&&bn.isDefault))return{enrichedBranches:$,enrichedBranchCommitPreviews:Y,enrichedBranchUniqueAheadCounts:Re,enrichedDirectCommits:[...H,Jo]};if(Pt&&un)return{enrichedBranches:$.map(tt=>tt.name===un.name?{...tt,commitsAhead:tt.commitsAhead+1,unpushedCommits:tt.unpushedCommits+1,lastCommitDate:Os,headSha:"WORKING_TREE"}:tt),enrichedDirectCommits:H,enrichedBranchCommitPreviews:{...Y,[un.name]:[eo,...Y[un.name]||[]]},enrichedBranchUniqueAheadCounts:{...Re,[un.name]:Math.max(0,(Se=Object.prototype.hasOwnProperty.call(Re,un.name)?Re[un.name]:un.commitsAhead)!=null?Se:0)+1}};const pi={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:Os,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:qe!=null?qe:void 0,parentBranch:(bn==null?void 0:bn.name)||U.branchName||V};return{enrichedBranches:[pi,...$],enrichedBranchCommitPreviews:{...Y,[pi.name]:[eo]},enrichedBranchUniqueAheadCounts:{...Re,[pi.name]:1},enrichedDirectCommits:H}},[_,Lt,sn,U,V,S,Xt]),Ws=y.useMemo(()=>{const D={...Pe};return D[V]=null,D},[Pe,V,Bn]),Fs=y.useMemo(()=>{var D;return(D=cw(Bn,V,Ws,mt))!=null?D:up(Bn,V,Mo,Ws)},[Bn,V,Mo,Ws,mt]),ps=y.useMemo(()=>Cd({lanes:Fs,branches:Bn,mergeNodes:b,directCommits:ns,unpushedDirectCommits:C,defaultBranch:V,branchCommitPreviews:Mo,branchParentByName:Ws,branchUniqueAheadCounts:ms,manuallyOpenedClumps:F,manuallyClosedClumps:pe,isDebugOpen:!1,gridSearchQuery:ee,gridFocusSha:de,checkedOutRef:U!=null?U:null,orientation:Qt}),[Fs,Bn,b,ns,C,V,Mo,Ws,ms,F,pe,ee,de,(Ve=U==null?void 0:U.headSha)!=null?Ve:null,(et=U==null?void 0:U.branchName)!=null?et:null,Qt]);y.useEffect(()=>{try{const D=window.localStorage.getItem(Ry);if(D){const H=Number(D);Number.isFinite(H)&&ds(Math.min(zy,Math.max(Oy,H)))}const $=window.localStorage.getItem(By);$!=null&&Qo($==="true")}catch{}},[]),y.useEffect(()=>{bo.current=Ks},[Ks]),y.useEffect(()=>{const D=$n.current;D&&(D.style.width=As?"0px":`${Ks}px`)},[Ks,As]),y.useEffect(()=>{try{window.localStorage.setItem(By,String(As))}catch{}},[As]);const To=D=>{const $=Us.current;if(!$)return;const H=$.startWidth+(D-$.startX);$.pendingWidth=Math.min(zy,Math.max(Oy,H));const Y=$n.current;Y&&(Y.style.width=`${$.pendingWidth}px`)},Lo=(D,$)=>{const H=Us.current;if(H&&!($!=null&&H.pointerId!==$)){Us.current=null,lo({dragging:!1,lastEvent:D}),document.body.style.cursor="",document.body.style.userSelect="",ds(H.pendingWidth);try{window.localStorage.setItem(Ry,String(H.pendingWidth))}catch{}}},M=D=>{D.button===0&&(D.preventDefault(),lo({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:D.pointerId,clientX:D.clientX,width:bo.current}),Us.current={startX:D.clientX,startWidth:bo.current,pendingWidth:bo.current,pointerId:D.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",D.currentTarget.setPointerCapture(D.pointerId))},Z=D=>{const $=Us.current;!$||$.pointerId!==D.pointerId||(xo.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:D.clientX}),lo(H=>H.dragging?{dragging:!0,lastEvent:"move"}:H),To(D.clientX))},ge=D=>{if(Us.current){console.debug("[sidebar-resize] pointerup",{pointerId:D.pointerId});try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}Lo("pointerup",D.pointerId)}},ve=D=>{if(Us.current){console.debug("[sidebar-resize] pointercancel",{pointerId:D.pointerId});try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}Lo("pointercancel",D.pointerId)}};return l.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:Uo,children:l.jsx("div",{className:"flex h-full items-start gap-2 pt-2",children:l.jsx("button",{type:"button",className:"window-no-drag ml-16 inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-card text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground","aria-label":As?"Open sidebar":"Collapse sidebar",onClick:()=>Qo(D=>!D),children:As?l.jsx(nw,{className:"h-4 w-4 shrink-0"}):l.jsx(ew,{className:"h-4 w-4 shrink-0"})})})}),l.jsx("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:$n,className:"relative flex h-full min-h-0 flex-none overflow-visible",style:{width:As?0:Ks},children:[l.jsx(Hw,{className:Wu("min-h-0 shrink-0 overflow-hidden pb-4 pt-16 transition-[width,opacity] duration-300 ease-in-out",As?"pointer-events-none opacity-0":"opacity-100"),style:{width:"100%"},collapsed:As,projects:An,activeProjectPath:t,onSelectProject:fi,onAddProject:()=>{(async()=>{var D,$;try{const H=await Xv({directory:!0,multiple:!1,defaultPath:($=(D=c[0])==null?void 0:D.path)!=null?$:void 0});typeof H=="string"&&H&&await Ji(H)}catch(H){Wt(H instanceof Error?H.message:String(H))}})()},projectLoading:Ye||p,projectError:gt,branches:Bn,defaultBranch:V,checkedOutRef:U,manuallyOpenedClumps:F,manuallyClosedClumps:pe,setManuallyOpenedClumps:Q,setManuallyClosedClumps:N,gridLayoutModel:ps,onSelectCommit:Yo,onSelectBranch:Fn}),As?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:M,onPointerMove:Z,onPointerUp:ge,onPointerCancel:ve,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"}),xo.dragging?l.jsx("div",{className:"pointer-events-none absolute bottom-2 right-2 z-50 rounded-md border border-border/50 bg-card/90 px-2 py-1 text-[10px] text-muted-foreground shadow-sm",children:xo.lastEvent}):null]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx(zw,{branches:Bn,mergeNodes:b,directCommits:ns,unpushedDirectCommits:C,unpushedCommitShasByBranch:R,defaultBranch:V,branchCommitPreviews:Mo,branchParentByName:Ws,branchUniqueAheadCounts:ms,gridSearchQuery:ee,gridSearchJumpToken:O,gridFocusSha:de,onGridSearchResultCountChange:ie,onGridSearchFocusChange:Te,checkedOutRef:U,onCommitClick:hs,onMergeRefsIntoBranch:Ms,mergeInProgress:Ue,onPushAllBranches:Ns,onPushCurrentBranch:fo,onPushCommitTargets:ki,pushInProgress:xt,onDeleteSelection:ho,deleteInProgress:$t,worktrees:ce,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Bo,removeWorktreeInProgress:Ce,onSwitchToWorktree:ui,onStashLocalChanges:Ys,stashInProgress:es,stashDisabled:!1,onCommitLocalChanges:en,commitInProgress:go,commitDisabled:!1,onStageAllChanges:Zs,stageInProgress:Cs,onCreateBranchFromNode:uo,onCreateRootBranch:Pn,createBranchFromNodeInProgress:fn,onInteractionChange:it,manuallyOpenedClumps:F,manuallyClosedClumps:pe,setManuallyOpenedClumps:Q,setManuallyClosedClumps:N,layoutModel:ps,orientation:Qt}),l.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"flex shrink-0 rounded-full border border-border bg-muted/20 p-0.5 shadow-sm",role:"radiogroup","aria-label":"Commit map layout",children:[l.jsx("button",{type:"button",role:"radio","aria-checked":Qt==="horizontal",tabIndex:0,onClick:()=>yo("horizontal"),onKeyDown:D=>{(D.key==="ArrowRight"||D.key==="ArrowDown")&&(D.preventDefault(),yo("vertical"))},className:Wu("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Qt==="horizontal"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),l.jsx("button",{type:"button",role:"radio","aria-checked":Qt==="vertical",tabIndex:0,onClick:()=>yo("vertical"),onKeyDown:D=>{(D.key==="ArrowLeft"||D.key==="ArrowUp")&&(D.preventDefault(),yo("horizontal"))},className:Wu("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Qt==="vertical"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]}),(ct==null?void 0:ct.ghAvailable)&&!ct.authenticated&&l.jsx("button",{onClick:Hi,disabled:ht,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:ht?"Connecting GitHub...":"Connect GitHub"}),ct&&!ct.ghAvailable&&l.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),ot&&l.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:ot,children:ot}),l.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[l.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),l.jsx("input",{value:ee,onChange:D=>fe(D.target.value),onKeyDown:D=>{D.key==="Enter"&&(D.preventDefault(),oe($=>$+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),l.jsx("button",{type:"button",onClick:()=>oe(D=>D+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),re!=null&&l.jsxs("span",{className:"text-xs text-muted-foreground",children:[re," match",re===1?"":"es"]}),de&&l.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",de.slice(0,7)]}),se&&l.jsx("span",{className:Wu("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",be?"opacity-100":"opacity-0",se.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:se.message,children:se.message})]})})]}),We&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${St?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:mi,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Ft("active"),className:`text-xs font-medium transition-colors ${Ct==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[co.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Ft("inactive"),className:`text-xs font-medium transition-colors ${Ct==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[mn.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Ct==="active"?co:mn).map(D=>{const $=(nt==null?void 0:nt.name)===D.name,H=Vs(D);return l.jsxs("button",{onClick:()=>Vo(D),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${$?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:D.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[H>0&&`${H} ahead`,H>0&&D.commitsBehind>0&&", ",D.commitsBehind>0&&`${D.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},D.name)})})]})]})})]})}var Nc=Bx(),Fw=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Xw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Fw}var as=Xw,qw=`.icon-transitions-module__iconState___uqK9J {
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
}`,Gw={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=qw}var Zn=Gw,Kw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Qw=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Zw=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Jw=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${Zn.iconState} ${n?Zn.hiddenScaled:Zn.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${Zn.iconState} ${n?Zn.visibleScaled:Zn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),eS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${Zn.iconStateFast} ${i?Zn.visibleScaled:u?Zn.sending:Zn.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${Zn.iconStateFast} ${a?Zn.visibleScaled:Zn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Zn.iconStateFast} ${c?Zn.visibleScaled:Zn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},tS=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Zn.iconFade} ${n?Zn.visible:Zn.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Zn.iconFade} ${n?Zn.hidden:Zn.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),nS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Zn.iconFadeFast} ${n?Zn.hidden:Zn.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${Zn.iconFadeFast} ${n?Zn.visible:Zn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),sS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),oS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),qx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),iS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),aS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),rS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),lS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),cS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),uS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),dS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Gx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Kh=Gx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Qh="__agentation_freeze";function fS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Qh]||(t[Qh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Qh]}var hn=fS();typeof window<"u"&&!hn.installed&&(hn.origSetTimeout=window.setTimeout.bind(window),hn.origSetInterval=window.setInterval.bind(window),hn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?hn.origSetTimeout(t,n):hn.origSetTimeout((...a)=>{hn.frozen?hn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?hn.origSetInterval(t,n):hn.origSetInterval((...a)=>{hn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>hn.origRAF(n=>{hn.frozen?hn.frozenRAFQueue.push(t):t(n)}),hn.installed=!0);var It=hn.origSetTimeout,hS=hn.origSetInterval,ul=hn.origRAF;function mS(t){return t?Gx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function pS(){if(typeof document>"u"||hn.frozen)return;hn.frozen=!0,hn.frozenTimeoutQueue=[],hn.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Kh},
    *${Kh}::before,
    *${Kh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),hn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;mS(i)||(n.pause(),hn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function $y(){var i;if(typeof document>"u"||!hn.frozen)return;hn.frozen=!1;const t=hn.frozenTimeoutQueue;hn.frozenTimeoutQueue=[];for(const a of t)hn.origSetTimeout(()=>{if(hn.frozen){hn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=hn.frozenRAFQueue;hn.frozenRAFQueue=[];for(const a of n)hn.origRAF(c=>{if(hn.frozen){hn.frozenRAFQueue.push(a);return}a(c)});for(const a of hn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}hn.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Zh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},k){const[C,j]=y.useState(u),[R,B]=y.useState(!1),[A,P]=y.useState("initial"),[V,q]=y.useState(!1),[U,J]=y.useState(!1),ce=y.useRef(null),le=y.useRef(null),Ce=y.useRef(null),Ae=y.useRef(null);y.useEffect(()=>{b&&A!=="exit"&&P("exit")},[b,A]),y.useEffect(()=>{It(()=>{P("enter")},0);const Q=It(()=>{P("entered")},200),pe=It(()=>{const N=ce.current;N&&(Zh(N),N.selectionStart=N.selectionEnd=N.value.length,N.scrollTop=N.scrollHeight)},50);return()=>{clearTimeout(Q),clearTimeout(pe),Ce.current&&clearTimeout(Ce.current),Ae.current&&clearTimeout(Ae.current)}},[]);const ee=y.useCallback(()=>{Ae.current&&clearTimeout(Ae.current),B(!0),Ae.current=It(()=>{B(!1),Zh(ce.current)},250)},[]);y.useImperativeHandle(k,()=>({shake:ee}),[ee]);const fe=y.useCallback(()=>{P("exit"),Ce.current=It(()=>{p()},150)},[p]),O=y.useCallback(()=>{C.trim()&&h(C.trim())},[C,h]),oe=y.useCallback(Q=>{Q.stopPropagation(),!Q.nativeEvent.isComposing&&(Q.key==="Enter"&&!Q.shiftKey&&(Q.preventDefault(),O()),Q.key==="Escape"&&fe())},[O,fe]),F=[as.popup,w?as.light:"",A==="enter"?as.enter:"",A==="entered"?as.entered:"",A==="exit"?as.exit:"",R?as.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:le,className:F,"data-annotation-popup":!0,style:_,onClick:Q=>Q.stopPropagation(),children:[l.jsxs("div",{className:as.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:as.headerToggle,onClick:()=>{const Q=U;J(!U),Q&&It(()=>Zh(ce.current),0)},type:"button",children:[l.jsx("svg",{className:`${as.chevron} ${U?as.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:as.element,children:n})]}):l.jsx("span",{className:as.element,children:n}),i&&l.jsx("span",{className:as.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${as.stylesWrapper} ${U?as.expanded:""}`,children:l.jsx("div",{className:as.stylesInner,children:l.jsx("div",{className:as.stylesBlock,children:Object.entries(S).map(([Q,pe])=>l.jsxs("div",{className:as.styleLine,children:[l.jsx("span",{className:as.styleProperty,children:Q.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:as.styleValue,children:pe}),";"]},Q))})})}),a&&l.jsxs("div",{className:as.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:ce,className:as.textarea,style:{borderColor:V?x:void 0},placeholder:c,value:C,onChange:Q=>j(Q.target.value),onFocus:()=>q(!0),onBlur:()=>q(!1),rows:2,onKeyDown:oe}),l.jsxs("div",{className:as.actions,children:[g&&l.jsx("div",{className:as.deleteWrapper,children:l.jsx("button",{className:as.deleteButton,onClick:g,type:"button",children:l.jsx(cS,{size:22})})}),l.jsx("button",{className:as.cancel,onClick:fe,children:"Cancel"}),l.jsx("button",{className:as.submit,style:{backgroundColor:x,opacity:C.trim()?1:.4},onClick:O,disabled:!C.trim(),children:d})]})]})}),_S=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const k=g.current.getBoundingClientRect();p({top:k.top+k.height/2,right:window.innerWidth-k.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=It(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=It(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Nc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},gS=`.styles-module__tooltip___mcXL2 {
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
}`,yS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=gS}var Iy=yS,jr=({content:t})=>l.jsx(_S,{className:Iy.tooltip,content:t,children:l.jsx(Zw,{className:Iy.tooltipIcon})}),yt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Kx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...yt.navigation},{type:"header",label:"Header",...yt.header},{type:"hero",label:"Hero",...yt.hero},{type:"section",label:"Section",...yt.section},{type:"sidebar",label:"Sidebar",...yt.sidebar},{type:"footer",label:"Footer",...yt.footer},{type:"modal",label:"Modal",...yt.modal},{type:"banner",label:"Banner",...yt.banner},{type:"drawer",label:"Drawer",...yt.drawer},{type:"popover",label:"Popover",...yt.popover},{type:"divider",label:"Divider",...yt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...yt.card},{type:"text",label:"Text",...yt.text},{type:"image",label:"Image",...yt.image},{type:"video",label:"Video",...yt.video},{type:"table",label:"Table",...yt.table},{type:"grid",label:"Grid",...yt.grid},{type:"list",label:"List",...yt.list},{type:"chart",label:"Chart",...yt.chart},{type:"codeBlock",label:"Code Block",...yt.codeBlock},{type:"map",label:"Map",...yt.map},{type:"timeline",label:"Timeline",...yt.timeline},{type:"calendar",label:"Calendar",...yt.calendar},{type:"accordion",label:"Accordion",...yt.accordion},{type:"carousel",label:"Carousel",...yt.carousel},{type:"logo",label:"Logo",...yt.logo},{type:"faq",label:"FAQ",...yt.faq},{type:"gallery",label:"Gallery",...yt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...yt.button},{type:"input",label:"Input",...yt.input},{type:"search",label:"Search",...yt.search},{type:"form",label:"Form",...yt.form},{type:"tabs",label:"Tabs",...yt.tabs},{type:"dropdown",label:"Dropdown",...yt.dropdown},{type:"toggle",label:"Toggle",...yt.toggle},{type:"stepper",label:"Stepper",...yt.stepper},{type:"rating",label:"Rating",...yt.rating},{type:"fileUpload",label:"File Upload",...yt.fileUpload},{type:"checkbox",label:"Checkbox",...yt.checkbox},{type:"radio",label:"Radio",...yt.radio},{type:"slider",label:"Slider",...yt.slider},{type:"datePicker",label:"Date Picker",...yt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...yt.avatar},{type:"badge",label:"Badge",...yt.badge},{type:"tag",label:"Tag",...yt.tag},{type:"breadcrumb",label:"Breadcrumb",...yt.breadcrumb},{type:"pagination",label:"Pagination",...yt.pagination},{type:"progress",label:"Progress",...yt.progress},{type:"alert",label:"Alert",...yt.alert},{type:"toast",label:"Toast",...yt.toast},{type:"notification",label:"Notification",...yt.notification},{type:"tooltip",label:"Tooltip",...yt.tooltip},{type:"stat",label:"Stat",...yt.stat},{type:"skeleton",label:"Skeleton",...yt.skeleton},{type:"chip",label:"Chip",...yt.chip},{type:"icon",label:"Icon",...yt.icon},{type:"spinner",label:"Spinner",...yt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...yt.pricing},{type:"testimonial",label:"Testimonial",...yt.testimonial},{type:"cta",label:"CTA",...yt.cta},{type:"productCard",label:"Product Card",...yt.productCard},{type:"profile",label:"Profile",...yt.profile},{type:"feature",label:"Feature",...yt.feature},{type:"team",label:"Team",...yt.team},{type:"login",label:"Login",...yt.login},{type:"contact",label:"Contact",...yt.contact}]}],Qi={};for(const t of Kx)for(const n of t.items)Qi[n.type]=n;function ze({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Wn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Ko({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function xS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Wn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(ze,{w:t*.06}),l.jsx(ze,{w:t*.07}),l.jsx(ze,{w:t*.05}),l.jsx(ze,{w:t*.06})]}),l.jsx(Wn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function bS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(ze,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(ze,{w:t*.6}),l.jsx(ze,{w:t*.4}),l.jsx(Wn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function vS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(ze,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Wn,{w:10,h:10,radius:2}),l.jsx(ze,{w:t*(.4+c*17%30/100)})]},c))]})}function wS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(ze,{w:"60%",h:3,strong:!0}),l.jsx(ze,{w:"80%",h:2}),l.jsx(ze,{w:"70%",h:2}),l.jsx(ze,{w:"60%",h:2})]},c))})}function SS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(ze,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(ze,{w:"90%"}),l.jsx(ze,{w:"70%"}),l.jsx(ze,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Wn,{w:70,h:26,radius:4}),l.jsx(Wn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function CS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(ze,{w:"70%",h:4,strong:!0}),l.jsx(ze,{w:"95%",h:2}),l.jsx(ze,{w:"85%",h:2}),l.jsx(ze,{w:"50%",h:2})]})]})}function kS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(ze,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(ze,{w:`${70+u*13%25}%`,h:2},u))]})}function jS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function MS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(ze,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(ze,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function TS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Ko,{size:8}),l.jsx(ze,{w:`${55+c*17%35}%`,h:2})]},c))})}function ES({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(ze,{w:Math.max(20,t*.5),h:3,strong:!0})})}function AS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(ze,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(ze,{w:"40%",h:2})})]})}function DS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(ze,{w:60+c*17%30,h:2}),l.jsx(Wn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Wn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function NS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(ze,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(ze,{w:"80%",h:2}),l.jsx(ze,{w:"65%",h:2}),l.jsx(ze,{w:"75%",h:2})]})]})}function RS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function BS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(ze,{w:Math.max(16,t*.5),h:2,strong:!0})})}function LS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(ze,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(ze,{w:t*.35})]})}function OS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(ze,{w:t*.3,h:4,strong:!0}),l.jsx(ze,{w:t*.7}),l.jsx(ze,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Wn,{w:"33%",h:"100%",radius:4}),l.jsx(Wn,{w:"33%",h:"100%",radius:4}),l.jsx(Wn,{w:"33%",h:"100%",radius:4})]})]})}function zS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Wn,{w:"100%",h:"100%",radius:4},u))})}function $S({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(ze,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(ze,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function IS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function PS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Ko,{size:Math.min(14,n*.4)}),l.jsx(ze,{w:"50%",h:2})]})}function HS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Ko,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:"60%",h:3,strong:!0}),l.jsx(ze,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function US({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function VS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Wn,{w:a,h:`${d}%`,radius:2},u)})})}function YS({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Wn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function WS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(ze,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function FS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(ze,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function XS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Wn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function qS({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function GS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(ze,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function KS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Wn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Ko,{size:5}),l.jsx(Ko,{size:5}),l.jsx(Ko,{size:5})]})]})}function QS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(ze,{w:t*.4,h:3,strong:!0}),l.jsx(ze,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Ko,{size:5}),l.jsx(ze,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Wn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function ZS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(ze,{w:"90%",h:2}),l.jsx(ze,{w:"75%",h:2}),l.jsx(ze,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Ko,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(ze,{w:60,h:3,strong:!0}),l.jsx(ze,{w:40,h:2})]})]})]})}function JS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(ze,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(ze,{w:t*.35}),l.jsx(Wn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function e4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:"40%",h:3,strong:!0}),l.jsx(ze,{w:"70%",h:2})]})]})}function t4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(ze,{w:t*.4,h:3,strong:!0}),l.jsx(Wn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function n4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(ze,{w:t*.5,h:2}),l.jsx(ze,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(ze,{w:t*.3,h:2})]})}function s4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function o4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(ze,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function i4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function a4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function r4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Ko,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(ze,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function l4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(ze,{w:t*.4,h:2}),l.jsx(ze,{w:t*.25,h:2})]})}function c4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Ko,{size:6}),l.jsx(Ko,{size:6}),l.jsx(Ko,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(ze,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function u4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(ze,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(ze,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function d4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Ko,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:"50%",h:3,strong:!0}),l.jsx(ze,{w:"75%",h:2})]}),l.jsx(ze,{w:30,h:2})]})}function f4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(ze,{w:"65%",h:4,strong:!0}),l.jsx(ze,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(ze,{w:"30%",h:5,strong:!0}),l.jsx(Wn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function h4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ko,{size:i}),l.jsx(ze,{w:t*.45,h:4,strong:!0}),l.jsx(ze,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(ze,{w:20,h:3,strong:!0}),l.jsx(ze,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(ze,{w:20,h:3,strong:!0}),l.jsx(ze,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(ze,{w:20,h:3,strong:!0}),l.jsx(ze,{w:28,h:2})]})]})]})}function m4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(ze,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(ze,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function p4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(ze,{w:"70%",h:3,strong:!0}),l.jsx(ze,{w:"90%",h:2}),l.jsx(ze,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function _4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Wn,{w:i,h:i,radius:i*.25}),l.jsx(ze,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function g4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(ze,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function y4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function x4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function b4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function v4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function w4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(ze,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(ze,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function S4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function C4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(ze,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function k4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function j4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function M4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Wn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(ze,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(ze,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function T4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(ze,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Ko,{size:a}),l.jsx(ze,{w:t*.12,h:3,strong:!0}),l.jsx(ze,{w:t*.08,h:2})]},u))})]})}function E4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(ze,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(ze,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:Math.min(60,t*.2),h:2}),l.jsx(Wn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Wn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(ze,{w:t*.4,h:2})]})}function A4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(ze,{w:t*.4,h:4,strong:!0}),l.jsx(ze,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:50,h:2}),l.jsx(Wn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:40,h:2}),l.jsx(Wn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:50,h:2}),l.jsx(Wn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(ze,{w:60,h:2}),l.jsx(Wn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Wn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var D4={navigation:xS,hero:bS,sidebar:vS,footer:wS,modal:SS,card:CS,text:kS,image:jS,table:MS,list:TS,button:ES,input:AS,form:DS,tabs:NS,avatar:RS,badge:BS,header:LS,section:OS,grid:zS,dropdown:$S,toggle:IS,search:PS,toast:HS,progress:US,chart:VS,video:YS,tooltip:WS,breadcrumb:FS,pagination:XS,divider:qS,accordion:GS,carousel:KS,pricing:QS,testimonial:ZS,cta:JS,alert:e4,banner:t4,stat:n4,stepper:s4,tag:o4,rating:i4,map:a4,timeline:r4,fileUpload:l4,codeBlock:c4,calendar:u4,notification:d4,productCard:f4,profile:h4,drawer:m4,popover:p4,logo:_4,faq:g4,gallery:y4,checkbox:x4,radio:b4,slider:v4,datePicker:w4,skeleton:S4,chip:C4,icon:k4,spinner:j4,feature:M4,team:T4,login:E4,contact:A4};function N4({type:t,width:n,height:i,text:a}){const c=D4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var R4=`svg[fill=none] {
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
}`,B4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=R4}var Ee=B4,al=24,Fu=5;function Py(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],k=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],C=[];for(const le of n)i.has(le.id)||C.push(le);c&&C.push(...c);for(const le of C){const Ce=le.x,Ae=le.x+le.width,ee=le.x+le.width/2,fe=le.y,O=le.y+le.height,oe=le.y+le.height/2;for(const F of S)for(const Q of[Ce,Ae,ee]){const pe=Q-F;Math.abs(pe)<Fu&&Math.abs(pe)<Math.abs(u)&&(u=pe)}for(const F of k)for(const Q of[fe,O,oe]){const pe=Q-F;Math.abs(pe)<Fu&&Math.abs(pe)<Math.abs(d)&&(d=pe)}}const j=Math.abs(u)<Fu?u:0,R=Math.abs(d)<Fu?d:0,B=[],A=new Set,P=h+j,V=p+j,q=g+j,U=_+R,J=x+R,ce=b+R;for(const le of C){const Ce=le.x,Ae=le.x+le.width,ee=le.x+le.width/2,fe=le.y,O=le.y+le.height,oe=le.y+le.height/2;for(const F of[Ce,ee,Ae])for(const Q of[P,q,V])if(Math.abs(Q-F)<.5){const pe=`x:${Math.round(F)}`;A.has(pe)||(A.add(pe),B.push({axis:"x",pos:F}))}for(const F of[fe,oe,O])for(const Q of[U,ce,J])if(Math.abs(Q-F)<.5){const pe=`y:${Math.round(F)}`;A.has(pe)||(A.add(pe),B.push({axis:"y",pos:F}))}}return{dx:j,dy:R,guides:B}}function Hy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function L4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:k}){const[C,j]=y.useState(new Set),[R,B]=y.useState(null),[A,P]=y.useState(null),[V,q]=y.useState(null),[U,J]=y.useState([]),[ce,le]=y.useState(null),[Ce,Ae]=y.useState(!1),ee=y.useRef(!1),[fe,O]=y.useState(new Set),oe=y.useRef(new Map),F=y.useRef(null),Q=y.useRef(null),pe=y.useRef(t);pe.current=t;const N=y.useRef(_);N.current=_;const re=y.useRef(b);re.current=b;const ie=y.useRef(w);ie.current=w;const de=y.useRef(x);y.useEffect(()=>{x!==de.current&&(de.current=x,j(new Set))},[x]);const Te=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==Te.current){Te.current=S;const G=new Set(pe.current.map(ke=>ke.id));G.size>0&&(O(G),j(new Set),Q.current=null,It(()=>{n([]),O(new Set)},180))}},[S,n]),y.useEffect(()=>{const G=ke=>{const nt=ke.target;if(!(nt.tagName==="INPUT"||nt.tagName==="TEXTAREA"||nt.isContentEditable)){if((ke.key==="Backspace"||ke.key==="Delete")&&C.size>0){ke.preventDefault();const dt=new Set(C);O(dt),j(new Set),It(()=>{n(pe.current.filter(Xe=>!dt.has(Xe.id))),O(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ke.key)&&C.size>0){ke.preventDefault();const dt=ke.shiftKey?20:1,Xe=ke.key==="ArrowLeft"?-dt:ke.key==="ArrowRight"?dt:0,ct=ke.key==="ArrowUp"?-dt:ke.key==="ArrowDown"?dt:0;n(t.map(Qe=>C.has(Qe.id)?{...Qe,x:Math.max(0,Qe.x+Xe),y:Math.max(0,Qe.y+ct)}:Qe));return}if(ke.key==="Escape"){i?a(null):C.size>0&&j(new Set);return}}};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[C,i,t,n,a]);const Ye=y.useCallback(G=>{if(G.button!==0||p||G.target.closest(`.${Ee.placement}`))return;G.preventDefault(),G.stopPropagation();const nt=window.scrollY,Je=G.clientX,dt=G.clientY;if(i){Q.current="place",d==null||d(!0);let Xe=!1,ct=Je,Qe=dt;const ht=ot=>{ct=ot.clientX,Qe=ot.clientY;const I=Math.abs(ct-Je),se=Math.abs(Qe-dt);if((I>5||se>5)&&(Xe=!0),Xe){const te=Math.min(Je,ct),be=Math.min(dt,Qe),Fe=Math.abs(ct-Je),Ue=Math.abs(Qe-dt);B({x:te,y:be,w:Fe,h:Ue}),q({x:ot.clientX+12,y:ot.clientY+12,text:`${Math.round(Fe)} × ${Math.round(Ue)}`})}},zt=ot=>{window.removeEventListener("mousemove",ht),window.removeEventListener("mouseup",zt),B(null),q(null),Q.current=null,d==null||d(!1);const I=yt[i];let se,te,be,Fe;Xe?(se=Math.min(Je,ct),te=Math.min(dt,Qe)+nt,be=Math.max(al,Math.abs(ct-Je)),Fe=Math.max(al,Math.abs(Qe-dt))):(be=I.width,Fe=I.height,se=Je-be/2,te=dt+nt-Fe/2),se=Math.max(0,se),te=Math.max(0,te);const Ue={id:Hy(),type:i,x:se,y:te,width:be,height:Fe,scrollY:nt,timestamp:Date.now()},Be=[...t,Ue];n(Be),j(new Set([Ue.id])),a(null)};window.addEventListener("mousemove",ht),window.addEventListener("mouseup",zt)}else{G.shiftKey||j(new Set),Q.current="select";let Xe=!1;const ct=ht=>{const zt=Math.abs(ht.clientX-Je),ot=Math.abs(ht.clientY-dt);if((zt>4||ot>4)&&(Xe=!0),Xe){const I=Math.min(Je,ht.clientX),se=Math.min(dt,ht.clientY);P({x:I,y:se,w:Math.abs(ht.clientX-Je),h:Math.abs(ht.clientY-dt)})}},Qe=ht=>{if(window.removeEventListener("mousemove",ct),window.removeEventListener("mouseup",Qe),Q.current=null,Xe){const zt=Math.min(Je,ht.clientX),ot=Math.min(dt,ht.clientY)+nt,I=Math.abs(ht.clientX-Je),se=Math.abs(ht.clientY-dt),te=new Set(G.shiftKey?C:new Set);for(const be of t)be.y-nt,be.x+be.width>zt&&be.x<zt+I&&be.y+be.height>ot&&be.y<ot+se&&te.add(be.id);j(te)}P(null)};window.addEventListener("mousemove",ct),window.addEventListener("mouseup",Qe)}},[i,p,t,n,C]),De=y.useCallback((G,ke)=>{var Ue;if(G.button!==0)return;const nt=G.target;if(nt.closest(`.${Ee.handle}`)||nt.closest(`.${Ee.deleteButton}`))return;G.preventDefault(),G.stopPropagation();let Je;G.shiftKey?(Je=new Set(C),Je.has(ke)?Je.delete(ke):Je.add(ke)):C.has(ke)?Je=new Set(C):Je=new Set([ke]),j(Je),(Je.size!==C.size||[...Je].some(Be=>!C.has(Be)))&&((Ue=N.current)==null||Ue.call(N,Je,G.shiftKey));const Xe=G.clientX,ct=G.clientY,Qe=new Map;for(const Be of t)Je.has(Be.id)&&Qe.set(Be.id,{x:Be.x,y:Be.y});Q.current="move",d==null||d(!0);let ht=!1,zt=!1,ot=t,I=0,se=0;const te=new Map;for(const Be of t)Qe.has(Be.id)&&te.set(Be.id,{w:Be.width,h:Be.height});const be=Be=>{var sn;const xt=Be.clientX-Xe,Tt=Be.clientY-ct;if((Math.abs(xt)>2||Math.abs(Tt)>2)&&(ht=!0),!ht)return;if(Be.altKey&&!zt){zt=!0;const ut=[];for(const Xt of t)Qe.has(Xt.id)&&ut.push({...Xt,id:Hy(),timestamp:Date.now()});ot=[...t,...ut]}let $t=1/0,Ge=1/0,Ie=-1/0,Et=-1/0;for(const[ut,Xt]of Qe){const zn=te.get(ut);zn&&($t=Math.min($t,Xt.x+xt),Ge=Math.min(Ge,Xt.y+Tt),Ie=Math.max(Ie,Xt.x+xt+zn.w),Et=Math.max(Et,Xt.y+Tt+zn.h))}const Lt={x:$t,y:Ge,width:Ie-$t,height:Et-Ge},{dx:Vt,dy:Pe,guides:At}=Py(Lt,ot,new Set(Qe.keys()),void 0,g);J(At);const mt=xt+Vt,_t=Tt+Pe;I=mt,se=_t,n(ot.map(ut=>{const Xt=Qe.get(ut.id);return Xt?{...ut,x:Math.max(0,Xt.x+mt),y:Math.max(0,Xt.y+_t)}:ut})),(sn=re.current)==null||sn.call(re,mt,_t)},Fe=()=>{var Be;window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",Fe),Q.current=null,d==null||d(!1),J([]),(Be=ie.current)==null||Be.call(ie,I,se,ht)};window.addEventListener("mousemove",be),window.addEventListener("mouseup",Fe)},[C,t,n,d]),ft=y.useCallback((G,ke,nt)=>{G.preventDefault(),G.stopPropagation();const Je=t.find(te=>te.id===ke);if(!Je)return;j(new Set([ke])),Q.current="resize",d==null||d(!0);const dt=G.clientX,Xe=G.clientY,ct=Je.width,Qe=Je.height,ht=Je.x,zt=Je.y,ot={left:nt.includes("w"),right:nt.includes("e"),top:nt.includes("n"),bottom:nt.includes("s")},I=te=>{const be=te.clientX-dt,Fe=te.clientY-Xe;let Ue=ct,Be=Qe,xt=ht,Tt=zt;nt.includes("e")&&(Ue=Math.max(al,ct+be)),nt.includes("w")&&(Ue=Math.max(al,ct-be),xt=ht+ct-Ue),nt.includes("s")&&(Be=Math.max(al,Qe+Fe)),nt.includes("n")&&(Be=Math.max(al,Qe-Fe),Tt=zt+Qe-Be);const $t={x:xt,y:Tt,width:Ue,height:Be},{dx:Ge,dy:Ie,guides:Et}=Py($t,pe.current,new Set([ke]),ot,g);J(Et),Ge!==0&&(ot.right?Ue+=Ge:ot.left&&(xt+=Ge,Ue-=Ge)),Ie!==0&&(ot.bottom?Be+=Ie:ot.top&&(Tt+=Ie,Be-=Ie)),n(pe.current.map(Lt=>Lt.id===ke?{...Lt,x:xt,y:Tt,width:Ue,height:Be}:Lt)),q({x:te.clientX+12,y:te.clientY+12,text:`${Math.round(Ue)} × ${Math.round(Be)}`})},se=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",se),q(null),Q.current=null,d==null||d(!1),J([])};window.addEventListener("mousemove",I),window.addEventListener("mouseup",se)},[t,n,d]),rt=y.useCallback(G=>{Q.current=null,O(ke=>{const nt=new Set(ke);return nt.add(G),nt}),j(ke=>{const nt=new Set(ke);return nt.delete(G),nt}),It(()=>{n(pe.current.filter(ke=>ke.id!==G)),O(ke=>{const nt=new Set(ke);return nt.delete(G),nt})},180)},[n]),gt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Wt=y.useCallback(G=>{const ke=t.find(nt=>nt.id===G);ke&&(ee.current=!!ke.text,le(G),Ae(!1))},[t]),We=y.useCallback(()=>{ce&&(Ae(!0),It(()=>{le(null),Ae(!1)},150))},[ce]);y.useEffect(()=>{u&&ce&&We()},[u]);const at=y.useCallback(G=>{ce&&(n(t.map(ke=>ke.id===ce?{...ke,text:G.trim()||void 0}:ke)),We())},[ce,t,n,We]),St=typeof window<"u"?window.scrollY:0,Gt=["nw","ne","se","sw"],Ct=k?"#f97316":"#3c82f7",Ft=[{dir:"n",cls:Ee.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Ct})})},{dir:"e",cls:Ee.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Ct})})},{dir:"s",cls:Ee.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Ct})})},{dir:"w",cls:Ee.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Ct})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:F,className:`${Ee.overlay} ${c?"":Ee.light} ${i?Ee.placing:""} ${p?Ee.passthrough:""} ${u?Ee.overlayExiting:""} ${k?Ee.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ye,children:t.map(G=>{var dt;const ke=C.has(G.id),nt=((dt=Qi[G.type])==null?void 0:dt.label)||G.type,Je=G.y-St;return l.jsxs("div",{"data-design-placement":G.id,className:`${Ee.placement} ${ke?Ee.selected:""} ${fe.has(G.id)?Ee.exiting:""}`,style:{left:G.x,top:Je,width:G.width,height:G.height,position:"fixed"},onMouseDown:Xe=>De(Xe,G.id),onDoubleClick:()=>Wt(G.id),children:[l.jsx("span",{className:Ee.placementLabel,children:nt}),l.jsx("span",{className:`${Ee.placementAnnotation} ${G.text?Ee.annotationVisible:""}`,children:(G.text&&oe.current.set(G.id,G.text),G.text||oe.current.get(G.id)||"")}),l.jsx("div",{className:Ee.placementContent,children:l.jsx(N4,{type:G.type,width:G.width,height:G.height,text:G.text})}),l.jsx("div",{className:Ee.deleteButton,onMouseDown:Xe=>Xe.stopPropagation(),onClick:()=>rt(G.id),children:"✕"}),Gt.map(Xe=>l.jsx("div",{className:`${Ee.handle} ${Ee[`handle${Xe.charAt(0).toUpperCase()}${Xe.slice(1)}`]}`,onMouseDown:ct=>ft(ct,G.id,Xe)},Xe)),Ft.map(({dir:Xe,cls:ct,arrow:Qe})=>l.jsx("div",{className:`${Ee.edgeHandle} ${ct}`,onMouseDown:ht=>ft(ht,G.id,Xe),children:Qe},Xe))]},G.id)})}),ce&&(()=>{var zt,ot;const G=t.find(I=>I.id===ce);if(!G)return null;const ke=G.y-St,nt=G.x+G.width/2,Je=ke-8,dt=ke+G.height+8,Xe=Je>200,ct=dt<window.innerHeight-100,Qe=Math.max(160,Math.min(window.innerWidth-160,nt));let ht;return Xe?ht={left:Qe,bottom:window.innerHeight-Je}:ct?ht={left:Qe,top:dt}:ht={left:Qe,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:((zt=Qi[G.type])==null?void 0:zt.label)||G.type,placeholder:gt[G.type]||"Label or content text",initialValue:(ot=G.text)!=null?ot:"",submitLabel:ee.current?"Save":"Set",onSubmit:at,onCancel:We,onDelete:ee.current?()=>{at("")}:void 0,isExiting:Ce,lightMode:!c,style:ht})})(),R&&l.jsx("div",{className:Ee.drawBox,style:{left:R.x,top:R.y,width:R.w,height:R.h},"data-feedback-toolbar":!0}),A&&l.jsx("div",{className:Ee.selectBox,style:{left:A.x,top:A.y,width:A.w,height:A.h},"data-feedback-toolbar":!0}),V&&l.jsx("div",{className:Ee.sizeIndicator,style:{left:V.x,top:V.y},"data-feedback-toolbar":!0,children:V.text}),U.map((G,ke)=>l.jsx("div",{className:Ee.guideLine,style:G.axis==="x"?{position:"fixed",left:G.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:G.pos-St,right:0,height:1},"data-feedback-toolbar":!0},`${G.axis}-${G.pos}-${ke}`))]})}function O4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Ee.fadeTop:""} ${i?Ee.fadeBottom:""}`}var L="currentColor",Me="0.5";function z4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:L,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:L,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:L,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:L,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:L,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:L,strokeWidth:Me})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:L,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:L,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:L,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:L,strokeWidth:Me})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:L,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:L,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:L,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:L,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:L,strokeWidth:Me,fill:L,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Me})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:L,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:L,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:L,strokeWidth:Me})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:L,strokeWidth:Me,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:L,strokeWidth:Me,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:L,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:L,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:L,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:L,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:L,strokeWidth:Me})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:L,strokeWidth:Me})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:L,strokeWidth:Me,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:L,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:L,strokeWidth:Me})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:L,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:L,opacity:".15",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:Me})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:L,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:L,strokeWidth:Me})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:L,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:L,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:L,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:L,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:L,strokeWidth:Me,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:L,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:L,strokeWidth:Me})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:L,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:L,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:L,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:L,strokeWidth:Me})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:L,opacity:".2",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:L,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:L,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:L,strokeWidth:Me})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:L,strokeWidth:Me,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:L,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:L,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:L,strokeWidth:Me,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:L,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:L,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:L,opacity:".15",stroke:L,strokeWidth:Me})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:L,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:L,opacity:".2",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:L,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:Me,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:L,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:L,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:L,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:L,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:L,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:L,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:L,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:L,strokeWidth:Me,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:L,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:L,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:L,strokeWidth:Me})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:L,strokeWidth:Me,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:L,strokeWidth:Me})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:L,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:L,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:L,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:L,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:L,strokeWidth:Me,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:L,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:L,strokeWidth:Me})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:L,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:L,strokeWidth:Me,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:L,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:L,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:L,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:L,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:L,opacity:".08",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:L,strokeWidth:Me,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:L,strokeWidth:Me,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:L,strokeWidth:Me,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:L,strokeWidth:Me,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:L,strokeWidth:Me,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:L,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:L,strokeWidth:Me,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:L,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:L,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:L,opacity:".2"})]});default:return null}}function $4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Ee.placeScroll} ${c||""}`,children:Kx.map(d=>l.jsxs("div",{className:Ee.paletteSection,children:[l.jsx("div",{className:Ee.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Ee.paletteItem} ${t===h.type?Ee.active:""} ${u?Ee.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Ee.paletteItemIcon,children:l.jsx(z4,{type:h.type})}),l.jsx("span",{className:Ee.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function I4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=It(()=>a(null),250)}else g.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Ee.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.exitUp:Ee.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.enterUp:Ee.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Ee.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.exitUp:Ee.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.enterUp:Ee.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function P4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[k,C]=y.useState(!1),[j,R]=y.useState("exit"),[B,A]=y.useState(!1),[P,V]=y.useState(!0),q=y.useRef(0),U=y.useRef(""),J=y.useRef(0),ce=y.useRef(),le=y.useRef(null),[Ce,Ae]=y.useState("");y.useEffect(()=>(u?(C(!0),clearTimeout(ce.current),cancelAnimationFrame(J.current),J.current=ul(()=>{J.current=ul(()=>{R("enter")})})):(cancelAnimationFrame(J.current),R("exit"),clearTimeout(ce.current),ce.current=It(()=>{C(!1),d==null||d()},200)),()=>cancelAnimationFrame(J.current)),[u]);const ee=h>0||a>0,fe=h+a;return fe>0&&(q.current=fe,U.current=_?fe===1?"Component":"Components":fe===1?"Change":"Changes"),y.useEffect(()=>{if(ee)B?V(!1):(V(!0),A(!0),ul(()=>{ul(()=>{V(!1)})}));else{V(!0);const O=It(()=>A(!1),300);return()=>clearTimeout(O)}},[ee]),y.useEffect(()=>{if(!k)return;const O=le.current;if(!O)return;const oe=()=>Ae(O4(O));oe(),O.addEventListener("scroll",oe,{passive:!0});const F=new ResizeObserver(oe);return F.observe(O),()=>{O.removeEventListener("scroll",oe),F.disconnect()}},[k]),k?l.jsxs("div",{className:`${Ee.palette} ${Ee[j]} ${i?"":Ee.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:O=>O.stopPropagation(),onMouseDown:O=>O.stopPropagation(),onTransitionEnd:O=>{O.target===O.currentTarget&&(u||(clearTimeout(ce.current),C(!1),R("exit"),d==null||d()))},children:[l.jsxs("div",{className:Ee.paletteHeader,children:[l.jsx("div",{className:Ee.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Ee.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Ee.canvasToggle} ${_?Ee.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:Ee.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Ee.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Ee.wireframePurposeWrap} ${_?"":Ee.collapsed}`,children:l.jsx("div",{className:Ee.wireframePurposeInner,children:l.jsx("textarea",{className:Ee.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:O=>w(O.target.value),rows:2})})}),l.jsx($4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:le,fadeClass:Ce,blankCanvas:_}),B&&l.jsx("div",{className:`${Ee.paletteFooterWrap} ${P?Ee.footerHidden:""}`,children:l.jsx("div",{className:Ee.paletteFooterInner,children:l.jsx("div",{className:Ee.paletteFooterInnerContent,children:l.jsxs("div",{className:Ee.paletteFooter,children:[l.jsx("span",{className:Ee.paletteFooterCount,children:l.jsx(I4,{value:q.current,suffix:U.current})}),l.jsx("button",{className:Ee.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function pl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Fo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=pl(i)}return null}function H4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=pl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ml(t){var a,c,u,d,h,p,g,_;const n=H4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Fo(t,"svg");if(x){const b=pl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ml(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=pl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(k=>k.replace(/[A-Z0-9]{5,}.*$/,"")).filter(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function ac(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Xu(t){const n=pl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const k=b.split(/\s+/).map(C=>C.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(C=>C.length>2&&!/^[a-z]{1,2}$/.test(C));k&&(w=`.${k}`)}if(x==="button"||x==="a"){const k=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(k)return`${x}${w} "${k}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function rc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Qx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),U4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),V4=new Set(["input","textarea","select"]),Y4=new Set(["img","video","canvas","svg"]),W4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;U4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:V4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Y4.has(a)?c=["width","height","objectFit","borderRadius"]:W4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Qx.has(h)&&(i[u]=h)}return i}var F4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Gu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of F4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Qx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function X4(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Ku(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Qu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=pl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var q4=new Set(["nav","header","main","section","article","footer","aside"]),Nm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Uy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},G4=new Set(["script","style","noscript","link","meta"]),K4=40;function Zx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Dr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Dr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Nm[a])return Nm[a];if(Uy[n])return Uy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ml(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Jx(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function eb(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function Q4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(G4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<K4)return;const g=q4.has(d),_=c.getAttribute("role")&&Nm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,w=Zx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Dr(c),role:c.getAttribute("role"),className:Jx(c),textSnippet:eb(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function Z4(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Zx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Dr(t),role:t.getAttribute("role"),className:Jx(t),textSnippet:eb(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Vy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Yy=["nw","n","ne","e","se","s","sw","w"],Zu=24,Wy=16,Ju=5;function Fy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const q of n)i.has(q.id)||b.push(q.currentRect);a&&b.push(...a);for(const q of b){const U=q.x,J=q.x+q.width,ce=q.x+q.width/2,le=q.y,Ce=q.y+q.height,Ae=q.y+q.height/2;for(const ee of[d,h,p])for(const fe of[U,J,ce]){const O=fe-ee;Math.abs(O)<Ju&&Math.abs(O)<Math.abs(c)&&(c=O)}for(const ee of[g,_,x])for(const fe of[le,Ce,Ae]){const O=fe-ee;Math.abs(O)<Ju&&Math.abs(O)<Math.abs(u)&&(u=O)}}const w=Math.abs(c)<Ju?c:0,S=Math.abs(u)<Ju?u:0,k=[],C=new Set,j=d+w,R=h+w,B=p+w,A=g+S,P=_+S,V=x+S;for(const q of b){const U=q.x,J=q.x+q.width,ce=q.x+q.width/2,le=q.y,Ce=q.y+q.height,Ae=q.y+q.height/2;for(const ee of[U,ce,J])for(const fe of[j,B,R])if(Math.abs(fe-ee)<.5){const O=`x:${Math.round(ee)}`;C.has(O)||(C.add(O),k.push({axis:"x",pos:ee}))}for(const ee of[le,Ae,Ce])for(const fe of[A,V,P])if(Math.abs(fe-ee)<.5){const O=`y:${Math.round(ee)}`;C.has(O)||(C.add(O),k.push({axis:"y",pos:ee}))}}return{dx:w,dy:S,guides:k}}var J4=new Set(["script","style","noscript","link","meta","br","hr"]);function Xy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(J4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Wy&&i.height>=Wy)return n;n=n.parentElement}return null}function e6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,k]=y.useState(new Set),[C,j]=y.useState(!1),R=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==R.current&&(R.current=x,b.length>0&&j(!0))},[x,b.length]);const B=y.useRef(p);y.useEffect(()=>{p!==B.current&&(B.current=p,k(new Set))},[p]);const[A,P]=y.useState(null),[V,q]=y.useState(!1),U=y.useRef(!1),J=y.useCallback(I=>{const se=b.find(te=>te.id===I);se&&(U.current=!!se.note,P(I),q(!1))},[b]),ce=y.useCallback(()=>{A&&(q(!0),It(()=>{P(null),q(!1)},150))},[A]),le=y.useCallback(I=>{A&&(n({...t,sections:b.map(se=>se.id===A?{...se,note:I.trim()||void 0}:se)}),ce())},[A,b,t,n,ce]);y.useEffect(()=>{a&&A&&ce()},[a]);const[Ce,Ae]=y.useState(new Set),ee=y.useRef(new Map),[fe,O]=y.useState(null),[oe,F]=y.useState(null),[Q,pe]=y.useState([]),[N,re]=y.useState(0),ie=y.useRef(null),de=y.useRef(new Set),Te=y.useRef(new Map),[Ye,De]=y.useState(new Map),[ft,rt]=y.useState(new Map),gt=y.useRef(new Set),Wt=y.useRef(new Map),We=y.useRef(h);We.current=h;const at=y.useRef(g);at.current=g;const St=y.useRef(_);St.current=_,y.useEffect(()=>{u&&k(new Set)},[u]);const[Gt,Ct]=y.useState(()=>!t.sections.some(I=>{const se=I.originalRect,te=I.currentRect;return Math.abs(se.x-te.x)>1||Math.abs(se.y-te.y)>1||Math.abs(se.width-te.width)>1||Math.abs(se.height-te.height)>1}));y.useEffect(()=>{if(!Gt){const I=It(()=>Ct(!0),380);return()=>clearTimeout(I)}},[]);const Ft=y.useRef(new Set);y.useEffect(()=>{Ft.current=new Set(b.map(I=>I.selector))},[b]),y.useEffect(()=>{const I=()=>re(window.scrollY);return I(),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}},[]),y.useEffect(()=>{const I=se=>{if(ie.current){O(null);return}const te=document.elementFromPoint(se.clientX,se.clientY);if(!te){O(null);return}if(te.closest("[data-feedback-toolbar]")){O(null);return}if(te.closest("[data-design-placement]")){O(null);return}if(te.closest("[data-annotation-popup]")){O(null);return}const be=Xy(te);if(!be){O(null);return}for(const Ue of Ft.current)try{const Be=document.querySelector(Ue);if(Be&&(Be===be||be.contains(Be))){O(null);return}}catch{}const Fe=be.getBoundingClientRect();O({x:Fe.x,y:Fe.y,w:Fe.width,h:Fe.height})};return document.addEventListener("mousemove",I,{passive:!0}),()=>document.removeEventListener("mousemove",I)},[b]),y.useEffect(()=>{const I=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=I}},[]),y.useEffect(()=>{const I=se=>{var Be,xt,Tt,$t;if(ie.current||se.button!==0)return;const te=se.target;if(!te||te.closest("[data-feedback-toolbar]")||te.closest("[data-design-placement]")||te.closest("[data-annotation-popup]"))return;const be=Xy(te);let Fe=!1;if(be)for(const Ge of Ft.current)try{const Ie=document.querySelector(Ge);if(Ie&&(Ie===be||be.contains(Ie))){Fe=!0;break}}catch{}const Ue=!!(se.shiftKey||se.metaKey||se.ctrlKey);if(be&&!Fe){se.preventDefault(),se.stopPropagation();const Ge=Z4(be),Ie=[...b,Ge],Et=[...t.originalOrder,Ge.id];n({...t,sections:Ie,originalOrder:Et});const Lt=new Set([Ge.id]);k(Lt),(Be=We.current)==null||Be.call(We,Lt,Ue),O(null);const Vt=se.clientX,Pe=se.clientY,At={x:Ge.currentRect.x,y:Ge.currentRect.y};Ge.originalRect;let mt=!1,_t=0,sn=0;ie.current="move";const ut=zn=>{var cn;const es=zn.clientX-Vt,Sn=zn.clientY-Pe;if(!mt&&(Math.abs(es)>2||Math.abs(Sn)>2)&&(mt=!0),!mt)return;const go={x:At.x+es,y:At.y+Sn,width:Ge.currentRect.width,height:Ge.currentRect.height},Es=Fy(go,Ie,new Set([Ge.id]),d);pe(Es.guides);const Cs=es+Es.dx,En=Sn+Es.dy;_t=Cs,sn=En;const fn=document.querySelector(`[data-rearrange-section="${Ge.id}"]`);fn&&(fn.style.transform=`translate(${Cs}px, ${En}px)`),De(new Map([[Ge.id,{x:At.x+Cs,y:At.y+En,width:Ge.currentRect.width,height:Ge.currentRect.height}]])),(cn=at.current)==null||cn.call(at,Cs,En)},Xt=()=>{var es;window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",Xt),ie.current=null,pe([]),De(new Map);const zn=document.querySelector(`[data-rearrange-section="${Ge.id}"]`);zn&&(zn.style.transform=""),mt&&n({...t,sections:Ie.map(Sn=>Sn.id===Ge.id?{...Sn,currentRect:{...Sn.currentRect,x:Math.max(0,At.x+_t),y:Math.max(0,At.y+sn)}}:Sn),originalOrder:Et}),(es=St.current)==null||es.call(St,_t,sn,mt)};window.addEventListener("mousemove",ut),window.addEventListener("mouseup",Xt)}else if(Fe&&be){se.preventDefault();for(const Ge of b)try{const Ie=document.querySelector(Ge.selector);if(Ie&&Ie===be){const Et=new Set([Ge.id]);k(Et),(xt=We.current)==null||xt.call(We,Et,Ue);return}}catch{}Ue||(k(new Set),(Tt=We.current)==null||Tt.call(We,new Set,!1))}else Ue||(k(new Set),($t=We.current)==null||$t.call(We,new Set,!1))};return document.addEventListener("mousedown",I,!0),()=>document.removeEventListener("mousedown",I,!0)},[b,t,n]),y.useEffect(()=>{const I=se=>{const te=se.target;if(!(te.tagName==="INPUT"||te.tagName==="TEXTAREA"||te.isContentEditable)){if((se.key==="Backspace"||se.key==="Delete")&&S.size>0){se.preventDefault();const be=new Set(S);Ae(Fe=>{const Ue=new Set(Fe);for(const Be of be)Ue.add(Be);return Ue}),k(new Set),It(()=>{const Fe=w.current;n({...Fe,sections:Fe.sections.filter(Ue=>!be.has(Ue.id)),originalOrder:Fe.originalOrder.filter(Ue=>!be.has(Ue))}),Ae(Ue=>{const Be=new Set(Ue);for(const xt of be)Be.delete(xt);return Be})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(se.key)&&S.size>0){se.preventDefault();const be=se.shiftKey?20:1,Fe=se.key==="ArrowLeft"?-be:se.key==="ArrowRight"?be:0,Ue=se.key==="ArrowUp"?-be:se.key==="ArrowDown"?be:0;n({...t,sections:b.map(Be=>S.has(Be.id)?{...Be,currentRect:{...Be.currentRect,x:Math.max(0,Be.currentRect.x+Fe),y:Math.max(0,Be.currentRect.y+Ue)}}:Be)});return}se.key==="Escape"&&S.size>0&&k(new Set)}};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[S,b,t,n]);const G=y.useCallback((I,se)=>{var Vt;if(I.button!==0)return;const te=I.target;if(te.closest(`.${Ee.handle}`)||te.closest(`.${Ee.deleteButton}`))return;I.preventDefault(),I.stopPropagation();let be;I.shiftKey||I.metaKey||I.ctrlKey?(be=new Set(S),be.has(se)?be.delete(se):be.add(se)):S.has(se)?be=new Set(S):be=new Set([se]),k(be),(be.size!==S.size||[...be].some(Pe=>!S.has(Pe)))&&((Vt=We.current)==null||Vt.call(We,be,!!(I.shiftKey||I.metaKey||I.ctrlKey)));const Ue=I.clientX,Be=I.clientY,xt=new Map;for(const Pe of b)be.has(Pe.id)&&xt.set(Pe.id,{x:Pe.currentRect.x,y:Pe.currentRect.y});ie.current="move";let Tt=!1,$t=0,Ge=0;const Ie=new Map;for(const Pe of b)if(be.has(Pe.id)){const At=document.querySelector(`[data-rearrange-section="${Pe.id}"]`);Ie.set(Pe.id,{outlineEl:At,curW:Pe.currentRect.width,curH:Pe.currentRect.height})}const Et=Pe=>{var Es;const At=Pe.clientX-Ue,mt=Pe.clientY-Be;if(At===0&&mt===0)return;Tt=!0;let _t=1/0,sn=1/0,ut=-1/0,Xt=-1/0;for(const[Cs,{curW:En,curH:fn}]of Ie){const cn=xt.get(Cs);if(!cn)continue;const Cn=cn.x+At,it=cn.y+mt;_t=Math.min(_t,Cn),sn=Math.min(sn,it),ut=Math.max(ut,Cn+En),Xt=Math.max(Xt,it+fn)}const zn=Fy({x:_t,y:sn,width:ut-_t,height:Xt-sn},b,be,d),es=At+zn.dx,Sn=mt+zn.dy;$t=es,Ge=Sn,pe(zn.guides);for(const[,{outlineEl:Cs}]of Ie)Cs&&(Cs.style.transform=`translate(${es}px, ${Sn}px)`);const go=new Map;for(const[Cs,{curW:En,curH:fn}]of Ie){const cn=xt.get(Cs);if(cn){const Cn={x:Math.max(0,cn.x+es),y:Math.max(0,cn.y+Sn),width:En,height:fn};go.set(Cs,Cn)}}De(go),(Es=at.current)==null||Es.call(at,es,Sn)},Lt=Pe=>{var At,mt;window.removeEventListener("mousemove",Et),window.removeEventListener("mouseup",Lt),ie.current=null,pe([]),De(new Map);for(const[,{outlineEl:_t}]of Ie)_t&&(_t.style.transform="");if(Tt){const _t=Pe.clientX-Ue,sn=Pe.clientY-Be;if(Math.abs(_t)<5&&Math.abs(sn)<5)n({...t,sections:b.map(ut=>{const Xt=xt.get(ut.id);return Xt?{...ut,currentRect:{...ut.currentRect,x:Xt.x,y:Xt.y}}:ut})});else{n({...t,sections:b.map(ut=>{const Xt=xt.get(ut.id);return Xt?{...ut,currentRect:{...ut.currentRect,x:Math.max(0,Xt.x+$t),y:Math.max(0,Xt.y+Ge)}}:ut})}),(At=St.current)==null||At.call(St,$t,Ge,!0);return}}(mt=St.current)==null||mt.call(St,0,0,!1)};window.addEventListener("mousemove",Et),window.addEventListener("mouseup",Lt)},[S,b,t,n]),ke=y.useCallback((I,se,te)=>{I.preventDefault(),I.stopPropagation();const be=b.find(Et=>Et.id===se);if(!be)return;k(new Set([se])),ie.current="resize";const Fe=I.clientX,Ue=I.clientY,Be={...be.currentRect};be.originalRect;const xt=Be.width/Be.height;let Tt={...Be};const $t=document.querySelector(`[data-rearrange-section="${se}"]`),Ge=Et=>{const Lt=Et.clientX-Fe,Vt=Et.clientY-Ue;let Pe=Be.x,At=Be.y,mt=Be.width,_t=Be.height;if(te.includes("e")&&(mt=Math.max(Zu,Be.width+Lt)),te.includes("w")&&(mt=Math.max(Zu,Be.width-Lt),Pe=Be.x+Be.width-mt),te.includes("s")&&(_t=Math.max(Zu,Be.height+Vt)),te.includes("n")&&(_t=Math.max(Zu,Be.height-Vt),At=Be.y+Be.height-_t),Et.shiftKey)if(te.length===2){const ut=Math.abs(mt-Be.width),Xt=Math.abs(_t-Be.height);ut>Xt?_t=mt/xt:mt=_t*xt,te.includes("w")&&(Pe=Be.x+Be.width-mt),te.includes("n")&&(At=Be.y+Be.height-_t)}else te==="e"||te==="w"?_t=mt/xt:mt=_t*xt,te==="w"&&(Pe=Be.x+Be.width-mt),te==="n"&&(At=Be.y+Be.height-_t);Tt={x:Pe,y:At,width:mt,height:_t},$t&&($t.style.left=`${Pe}px`,$t.style.top=`${At-N}px`,$t.style.width=`${mt}px`,$t.style.height=`${_t}px`),F({x:Et.clientX+12,y:Et.clientY+12,text:`${Math.round(mt)} × ${Math.round(_t)}`}),De(new Map([[se,Tt]]))},Ie=()=>{window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Ie),F(null),ie.current=null,De(new Map),n({...t,sections:b.map(Et=>Et.id===se?{...Et,currentRect:Tt}:Et)})};window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Ie)},[b,t,n,N]),nt=y.useCallback(I=>{Ae(se=>{const te=new Set(se);return te.add(I),te}),k(se=>{const te=new Set(se);return te.delete(I),te}),It(()=>{const se=w.current;n({...se,sections:se.sections.filter(te=>te.id!==I),originalOrder:se.originalOrder.filter(te=>te!==I)}),Ae(te=>{const be=new Set(te);return be.delete(I),be})},180)},[n]),Je=I=>{const se=I.originalRect,te=I.currentRect;return Math.abs(se.x-te.x)>1||Math.abs(se.y-te.y)>1||Math.abs(se.width-te.width)>1||Math.abs(se.height-te.height)>1},dt=I=>{const se=I.originalRect,te=I.currentRect;return Math.abs(se.x-te.x)>1||Math.abs(se.y-te.y)>1},Xe=I=>{const se=I.originalRect,te=I.currentRect;return Math.abs(se.width-te.width)>1||Math.abs(se.height-te.height)>1};for(const I of b)Te.current.has(I.id)||(dt(I)?Te.current.set(I.id,"move"):Xe(I)&&Te.current.set(I.id,"resize"));for(const I of Te.current.keys())b.some(se=>se.id===I)||Te.current.delete(I);const ct=b.filter(I=>{try{if(Ce.has(I.id)||S.has(I.id))return!0;const se=document.querySelector(I.selector);if(!se)return!1;const te=se.getBoundingClientRect(),be=I.originalRect;return Math.abs(te.width-be.width)+Math.abs(te.height-be.height)<200}catch{return!1}}),Qe=ct.filter(I=>Je(I)),ht=ct.filter(I=>!Je(I)),zt=new Set(Qe.map(I=>I.id));for(const I of de.current)zt.has(I)||de.current.delete(I);const ot=[...zt].sort().join(",");for(const I of Qe)Wt.current.set(I.id,{currentRect:I.currentRect,originalRect:I.originalRect,isFixed:I.isFixed});return y.useEffect(()=>{const I=gt.current;gt.current=zt;const se=new Map;for(const te of I)if(!zt.has(te)){if(!b.some(Fe=>Fe.id===te))continue;const be=Wt.current.get(te);be&&(se.set(te,{orig:be.originalRect,target:be.currentRect,isFixed:be.isFixed}),Wt.current.delete(te))}if(se.size>0){rt(be=>{const Fe=new Map(be);for(const[Ue,Be]of se)Fe.set(Ue,Be);return Fe});const te=It(()=>{rt(be=>{const Fe=new Map(be);for(const Ue of se.keys())Fe.delete(Ue);return Fe})},250);return()=>clearTimeout(te)}},[ot,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Ee.rearrangeOverlay} ${i?"":Ee.light} ${a?Ee.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[fe&&l.jsx("div",{className:Ee.hoverHighlight,style:{left:fe.x,top:fe.y,width:fe.w,height:fe.h}}),ht.map(I=>{const se=I.currentRect,te=I.isFixed?se.y:se.y-N,be=Vy,Fe=S.has(I.id);return l.jsxs("div",{"data-rearrange-section":I.id,className:`${Ee.sectionOutline} ${Fe?Ee.selected:""} ${C||a||Ce.has(I.id)?Ee.exiting:""}`,style:{left:se.x,top:te,width:se.width,height:se.height,borderColor:be.border,backgroundColor:be.bg,...Gt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ue=>G(Ue,I.id),onDoubleClick:()=>J(I.id),children:[l.jsx("span",{className:Ee.sectionLabel,style:{backgroundColor:be.pill},children:I.label}),l.jsx("span",{className:`${Ee.sectionAnnotation} ${I.note?Ee.annotationVisible:""}`,children:(I.note&&ee.current.set(I.id,I.note),I.note||ee.current.get(I.id)||"")}),l.jsxs("span",{className:Ee.sectionDimensions,children:[Math.round(se.width)," × ",Math.round(se.height)]}),l.jsx("div",{className:Ee.deleteButton,onMouseDown:Ue=>Ue.stopPropagation(),onClick:()=>nt(I.id),children:"✕"}),Yy.map(Ue=>l.jsx("div",{className:`${Ee.handle} ${Ee[`handle${Ue.charAt(0).toUpperCase()}${Ue.slice(1)}`]}`,onMouseDown:Be=>ke(Be,I.id,Ue)},Ue))]},I.id)}),Qe.map(I=>{const se=I.currentRect,te=I.isFixed?se.y:se.y-N,be=S.has(I.id),Fe=dt(I),Ue=Xe(I);if(u&&!be)return null;const xt=!de.current.has(I.id);return xt&&de.current.add(I.id),l.jsxs("div",{"data-rearrange-section":I.id,className:`${Ee.ghostOutline} ${be?Ee.selected:""} ${C||a||Ce.has(I.id)?Ee.exiting:""}`,style:{left:se.x,top:te,width:se.width,height:se.height,...Gt?{}:{opacity:0,animation:"none",transition:"none"},...xt?{}:{animation:"none"}},onMouseDown:Tt=>G(Tt,I.id),onDoubleClick:()=>J(I.id),children:[l.jsx("span",{className:Ee.sectionLabel,style:{backgroundColor:Vy.pill},children:I.label}),l.jsx("span",{className:`${Ee.sectionAnnotation} ${I.note?Ee.annotationVisible:""}`,children:(I.note&&ee.current.set(I.id,I.note),I.note||ee.current.get(I.id)||"")}),l.jsxs("span",{className:Ee.sectionDimensions,children:[Math.round(se.width)," × ",Math.round(se.height)]}),l.jsx("div",{className:Ee.deleteButton,onMouseDown:Tt=>Tt.stopPropagation(),onClick:()=>nt(I.id),children:"✕"}),Yy.map(Tt=>l.jsx("div",{className:`${Ee.handle} ${Ee[`handle${Tt.charAt(0).toUpperCase()}${Tt.slice(1)}`]}`,onMouseDown:$t=>ke($t,I.id,Tt)},Tt)),l.jsx("span",{className:Ee.ghostBadge,children:(()=>{const Tt=Te.current.get(I.id);if(Fe&&Ue){const[$t,Ge]=Tt==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",$t," ",l.jsxs("span",{className:Ee.ghostBadgeExtra,children:["& ",Ge]})]})}return`Suggested ${Ue?"Resize":"Move"}`})()})]},I.id)})]}),!u&&(()=>{const I=[];for(const se of Qe){const te=Ye.get(se.id);I.push({id:se.id,orig:se.originalRect,target:te||se.currentRect,isFixed:se.isFixed,isSelected:S.has(se.id),isExiting:Ce.has(se.id)})}for(const[se,te]of Ye)if(!I.some(be=>be.id===se)){const be=b.find(Fe=>Fe.id===se);be&&I.push({id:se,orig:be.originalRect,target:te,isFixed:be.isFixed,isSelected:S.has(se)})}for(const[se,te]of ft)I.some(be=>be.id===se)||I.push({id:se,orig:te.orig,target:te.target,isFixed:te.isFixed,isSelected:!1,isExiting:!0});return I.length===0?null:l.jsxs("svg",{className:`${Ee.connectorSvg} ${C||a?Ee.connectorExiting:""}`,children:[I.map(({id:se,orig:te,target:be,isFixed:Fe,isSelected:Ue,isExiting:Be})=>{const xt=te.x+te.width/2,Tt=(Fe?te.y:te.y-N)+te.height/2,$t=be.x+be.width/2,Ge=(Fe?be.y:be.y-N)+be.height/2,Ie=$t-xt,Et=Ge-Tt,Lt=Math.sqrt(Ie*Ie+Et*Et);if(Lt<2)return null;const Vt=Math.min(1,Lt/40),Pe=Math.min(Lt*.3,60),At=Lt>0?-Et/Lt:0,mt=Lt>0?Ie/Lt:0,_t=(xt+$t)/2+At*Pe,sn=(Tt+Ge)/2+mt*Pe,ut=Ye.has(se),Xt=ut||Ue?1:.4,zn=ut||Ue?1:.5;return l.jsxs("g",{className:Be?Ee.connectorExiting:"",children:[l.jsx("path",{className:Ee.connectorLine,d:`M ${xt} ${Tt} Q ${_t} ${sn} ${$t} ${Ge}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Xt*Vt}),l.jsx("circle",{className:Ee.connectorDot,cx:xt,cy:Tt,r:4*Vt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:zn*Vt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Ee.connectorDot,cx:$t,cy:Ge,r:4*Vt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:zn*Vt,filter:"url(#connDotShadow)"})]},`conn-${se}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),A&&(()=>{var Ge;const I=b.find(Ie=>Ie.id===A);if(!I)return null;const se=I.currentRect,te=I.isFixed?se.y:se.y-N,be=se.x+se.width/2,Fe=te-8,Ue=te+se.height+8,Be=Fe>200,xt=Ue<window.innerHeight-100,Tt=Math.max(160,Math.min(window.innerWidth-160,be));let $t;return Be?$t={left:Tt,bottom:window.innerHeight-Fe}:xt?$t={left:Tt,top:Ue}:$t={left:Tt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:I.label,placeholder:"Add a note about this section",initialValue:(Ge=I.note)!=null?Ge:"",submitLabel:U.current?"Save":"Set",onSubmit:le,onCancel:ce,onDelete:U.current?()=>{le("")}:void 0,isExiting:V,lightMode:!i,style:$t})})(),oe&&l.jsx("div",{className:Ee.sizeIndicator,style:{left:oe.x,top:oe.y},"data-feedback-toolbar":!0,children:oe.text}),Q.map((I,se)=>l.jsx("div",{className:Ee.guideLine,style:I.axis==="x"?{position:"fixed",left:I.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:I.pos-N,width:"100vw",height:1}},`${I.axis}-${I.pos}-${se}`))]})}var Rm=new Set(["script","style","noscript","link","meta","br","hr"]);function t6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Rm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Dr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Rm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:Md(h),selector:Dr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function n6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function s6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Bm(t,n){const i=n?n6(n):t6(),a=s6(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const k=a.right>S.left+5&&a.left<S.right-5,C=a.bottom>S.top+5&&a.top<S.bottom-5;if(k&&S.bottom<=a.top+5){const j=Math.round(a.top-S.bottom);(!c||j<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(k&&S.top>=a.bottom-5){const j=Math.round(S.top-a.bottom);(!u||j<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(C&&S.right<=a.left+5){const j=Math.round(a.left-S.right);(!d||j<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(C&&S.left>=a.right-5){const j=Math.round(S.left-a.right);(!h||j<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}}const g=window.innerWidth,_=window.innerHeight,x=i6(t,g),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=o6(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function o6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function i6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function tb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function nb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=tb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function a6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(tb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var qy=15;function Gy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function r6(t){var d;if(t.length<2)return[];const n=Gy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Gy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(w=>p.has(w)),b=x.join(", ");if(g.type!==h.type){const w=h.type==="row"?"y":"x",S=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${S}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${g.sharedEdge}`:"",k=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${k}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function sb(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Rm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Dr(h)}}}return{viewport:t,contentArea:null}}function l6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Dr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ob(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function ib(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function c6(t){const n=l6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Ky(t,n,i,a="standard"){var C,j,R,B;if(t.length===0)return"";const c=[...t].sort((A,P)=>Math.abs(A.y-P.y)<20?A.x-P.x:A.y-P.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((A,P)=>{var q;const V=((q=Qi[A.type])==null?void 0:q.label)||A.type;u+=`${P+1}. **${V}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}),u;const d=sb(n);u+=ib(d),u+=`### Components
`,c.forEach((A,P)=>{var Ce;const V=((Ce=Qi[A.type])==null?void 0:Ce.label)||A.type,q={x:A.x,y:A.y,width:A.width,height:A.height};u+=`${P+1}. **${V}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`;const U=Bm(q),ce=nb(U,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ae of ce)u+=`   - ${Ae}
`;const le=ob(q,d);le&&(u+=`   - CSS: ${le}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const A of c){const P=h.find(V=>Math.abs(V.y-A.y)<30);P?P.items.push(A):h.push({y:A.y,items:[A]})}if(h.sort((A,P)=>A.y-P.y),h.forEach((A,P)=>{A.items.sort((q,U)=>q.x-U.x);const V=A.items.map(q=>{var U;return((U=Qi[q.type])==null?void 0:U.label)||q.type});if(A.items.length===1){const U=A.items[0].width>n.width*.8;u+=`- Row ${P+1} (y≈${Math.round(A.y)}): ${V[0]}${U?" — full width":""}
`}else u+=`- Row ${P+1} (y≈${Math.round(A.y)}): ${V.join(" | ")} — ${A.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let A=0;A<c.length-1;A++){const P=c[A],V=c[A+1],q=((C=Qi[P.type])==null?void 0:C.label)||P.type,U=((j=Qi[V.type])==null?void 0:j.label)||V.type,J=Math.round(V.y-(P.y+P.height)),ce=Math.round(V.x-(P.x+P.width));Math.abs(P.y-V.y)<30?u+=`- ${q} → ${U}: \`${ce}px\` horizontal gap
`:u+=`- ${q} → ${U}: \`${J}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let A=0;A<c.length;A++)for(let P=A+1;P<c.length;P++){const V=c[A],q=c[P],U=((R=Qi[V.type])==null?void 0:R.label)||V.type,J=((B=Qi[q.type])==null?void 0:B.label)||q.type,ce=Math.round(q.y-(V.y+V.height)),le=Math.round(q.x-(V.x+V.width));u+=`- ${U} ↔ ${J}: h=\`${le}px\` v=\`${ce}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((A,P)=>{var q;const V=((q=Qi[A.type])==null?void 0:q.label)||A.type;u+=`${P}. ${V} at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
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
`,_){const A=c.find(P=>P.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(A.width)}px 1fr;\`
`}if(b.length>1){const A=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${A}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Qy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=sb({width:d,height:h});n!=="compact"&&(u+=ib(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const g=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const w=_.originalRect,S=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const C=Bm(w,g("original")),j=Bm(S,g("current")),R=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${a6(C,{x:w.x,y:w.y},R)}
`;const B=b?{width:S.width,height:S.height}:void 0,A=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,P=B?`, ${Math.round(B.width)}×${Math.round(B.height)}px`:"",q=nb(j,{includeLeftRight:n==="detailed"||n==="forensic"});if(q.length>0){u+=`  - Suggested position ${A}${P}: ${q[0]}
`;for(let J=1;J<q.length;J++)u+=`    ${q[J]}
`}else u+=`  - Suggested position ${A}${P}
`;const U=ob(S,p);U&&(u+=`  - CSS: ${U}
`)}const k=c6(_.selector);if(k&&(u+=`  - ${k}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const C=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;C!==_.selector&&(u+=`  - Element: \`${C}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=r6(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Lm="feedback-annotations-",ab=7;function Td(t){return`${Lm}${t}`}function Jh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Td(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-ab*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function rb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Td(t),JSON.stringify(n))}catch{}}function u6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-ab*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Lm)){const c=a.slice(Lm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function lc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));rb(t,a)}var fp="agentation-design-";function d6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${fp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function f6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${fp}${t}`,JSON.stringify(n))}catch{}}function h6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${fp}${t}`)}catch{}}var hp="agentation-rearrange-";function m6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):null}catch{return null}}function p6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function _6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-wireframe-";function g6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Zy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function ed(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var lb="agentation-session-";function pp(t){return`${lb}${t}`}function y6(t){if(typeof window>"u")return null;try{return localStorage.getItem(pp(t))}catch{return null}}function em(t,n){if(!(typeof window>"u"))try{localStorage.setItem(pp(t),n)}catch{}}function x6(t){if(!(typeof window>"u"))try{localStorage.removeItem(pp(t))}catch{}}var cb=`${lb}toolbar-hidden`;function b6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(cb)==="1"}catch{return!1}}function v6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(cb,"1")}catch{}}async function tm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Jy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function rl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function e1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Ka(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var On={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},t1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),n1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],w6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function S6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=t1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...t1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...n1,...t.skipPatterns]:n1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:w6,filter:t==null?void 0:t.filter}}function C6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function k6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function j6(t,n){const i=C6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function M6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&j6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ll=null,T6=new WeakMap;function nm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function E6(){if(ll!==null)return ll;if(typeof document>"u")return!1;if(document.body&&nm(document.body))return ll=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&nm(i))return ll=!0,!0}if(document.body){for(const n of document.body.children)if(nm(n))return ll=!0,!0}return ll=!1,!1}var cc={map:T6};function A6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function D6(t){const n=A6(t);return n?t[n]:null}function xr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function N6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===On.HostComponent||n===On.HostText||n===On.HostHoistable||n===On.HostSingleton||n===On.Fragment||n===On.Mode||n===On.Profiler||n===On.DehydratedFragment||n===On.HostRoot||n===On.HostPortal||n===On.ScopeComponent||n===On.OffscreenComponent||n===On.LegacyHiddenComponent||n===On.CacheComponent||n===On.TracingMarkerComponent||n===On.Throw||n===On.ViewTransitionComponent||n===On.ActivityComponent)return null;if(n===On.ForwardRef){const u=a;if(u!=null&&u.render){const d=xr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:xr(i)}if(n===On.MemoComponent||n===On.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=xr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:xr(i)}if(n===On.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===On.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===On.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?xr(u._result):null}return n===On.SuspenseComponent||n===On.SuspenseListComponent?null:n===On.IncompleteClassComponent||n===On.IncompleteFunctionComponent||n===On.FunctionComponent||n===On.ClassComponent||n===On.IndeterminateComponent?xr(i):null}function R6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function B6(t,n){const i=S6(n),a=i.mode==="all";if(a){const p=cc.map.get(t);if(p!==void 0)return p}if(!E6()){const p={path:null,components:[]};return a&&cc.map.set(t,p),p}const c=i.mode==="smart"?k6(t):void 0,u=[];try{let p=D6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=N6(p);_&&!R6(_)&&M6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&cc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&cc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&cc.map.set(t,h),h}var uc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function L6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function jc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function O6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:jc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:jc(i._debugOwner)};i=i.return,a++}return null}function z6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:jc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:jc(n)}}}n=n.return,i++}return null}var td=new Map;function $6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===uc.FunctionComponent||n===uc.IndeterminateComponent)&&typeof i=="function")return i;if(n===uc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===uc.MemoComponent||n===uc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function I6(){const t=$v,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function P6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function H6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function U6(t){const n=$6(t);if(!n)return null;if(td.has(n))return td.get(n);const i=I6();if(!i)return td.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=P6(d.stack);h&&(c={fileName:H6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:jc(t)||void 0})}}}finally{i.set(a)}return td.set(n,c),c}function V6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=U6(i);if(c)return c;i=i.return,a++}return null}function Om(t){const n=L6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=O6(n);if(i||(i=z6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=V6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Y6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function W6(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Om(i);if(c.found)return c;i=i.parentElement,a++}return Om(t)}var F6=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,X6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=F6}var He=X6,dc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function s1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var q6=`@keyframes styles-module__markerIn___x4G8D {
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
}`,G6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=q6}var Gs=G6;function o1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:k,onContextMenu:C}){const j=(h||p)&&!g,R=j&&x==="delete",B=t.isMultiSelect,A=B?"var(--agentation-color-green)":"var(--agentation-color-accent)",P=c?Gs.exit:u?Gs.clearing:d?"":Gs.enter,V=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Gs.marker} ${B?Gs.multiSelect:""} ${P} ${R?Gs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:R?void 0:A,animationDelay:V},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:q=>{q.stopPropagation(),c||k(t)},onContextMenu:C?q=>{x==="delete"&&(q.preventDefault(),q.stopPropagation(),c||C(t))}:void 0,children:[j?R?l.jsx(qx,{size:B?18:16}):l.jsx(lS,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Gs.renumber:void 0,children:n+1}),h&&!g&&l.jsxs("div",{className:`${Gs.markerTooltip} ${Gs.enter}`,style:b,children:[l.jsxs("span",{className:Gs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Gs.markerNote,children:t.comment})]})]})}function K6({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Gs.marker} ${Gs.pending} ${i?Gs.multiSelect:""} ${a?Gs.exit:Gs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(Kw,{size:12})})}function i1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Gs.marker} ${n?Gs.fixed:""} ${Gs.hovered} ${i?Gs.multiSelect:""} ${Gs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(qx,{size:i?12:10})})}var Q6=`.styles-module__switchContainer___Ka-AB {
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
}`,Z6={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=Q6}var sm=Z6,om=({className:t="",...n})=>l.jsxs("div",{className:`${sm.switchContainer} ${t}`,children:[l.jsx("input",{className:sm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:sm.switchThumb})]}),J6=`.styles-module__checkboxContainer___joqZk {
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
}`,eC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=J6}var nd=eC,tC=({className:t="",...n})=>l.jsxs("div",{className:`${nd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:nd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:nd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:nd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),nC=`.styles-module__container___w8eAF {
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
}`,sC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=nC}var a1=sC,r1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${a1.container} ${t}`,...u,children:[l.jsx(tC,{id:d,onChange:c,checked:a}),l.jsx("label",{className:a1.label,htmlFor:d,children:n}),i&&l.jsx(jr,{content:i})]})},oC=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,iC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=oC}var kt=iC;function aC({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${kt.settingsPanel} ${h?kt.enter:kt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:kt.settingsPanelContainer,children:[l.jsxs("div",{className:`${kt.settingsPage} ${g==="automations"?kt.slideLeft:""}`,children:[l.jsxs("div",{className:kt.settingsHeader,children:[l.jsx("a",{className:kt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:kt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:kt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:kt.themeIconWrapper,children:l.jsx("span",{className:kt.themeIcon,children:i?l.jsx(aS,{size:20}):l.jsx(rS,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:kt.divider}),l.jsxs("div",{className:kt.settingsSection,children:[l.jsxs("div",{className:kt.settingsRow,children:[l.jsxs("div",{className:kt.settingsLabel,children:["Output Detail",l.jsx(jr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:kt.cycleButton,onClick:()=>{const S=(dc.findIndex(k=>k.value===t.outputDetail)+1)%dc.length;n({outputDetail:dc[S].value})},children:[l.jsx("span",{className:kt.cycleButtonText,children:(b=dc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:kt.cycleDots,children:dc.map(w=>l.jsx("span",{className:`${kt.cycleDot} ${t.outputDetail===w.value?kt.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${kt.settingsRow} ${kt.settingsRowMarginTop} ${c?"":kt.settingsRowDisabled}`,children:[l.jsxs("div",{className:kt.settingsLabel,children:["React Components",l.jsx(jr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(om,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${kt.settingsRow} ${kt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:kt.settingsLabel,children:["Hide Until Restart",l.jsx(jr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(om,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:kt.divider}),l.jsxs("div",{className:kt.settingsSection,children:[l.jsx("div",{className:`${kt.settingsLabel} ${kt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:kt.colorOptions,children:bc.map(w=>l.jsx("button",{className:`${kt.colorOption} ${t.annotationColorId===w.id?kt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:kt.divider}),l.jsxs("div",{className:kt.settingsSection,children:[l.jsx(r1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(r1,{className:kt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:kt.divider}),l.jsxs("button",{className:kt.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:kt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${kt.mcpNavIndicator} ${kt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${kt.settingsPage} ${kt.automationsPage} ${g==="automations"?kt.slideIn:""}`,children:[l.jsxs("button",{className:kt.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(uS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:kt.divider}),l.jsxs("div",{className:kt.settingsSection,children:[l.jsxs("div",{className:kt.settingsRow,children:[l.jsxs("span",{className:kt.automationHeader,children:["MCP Connection",l.jsx(jr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${kt.mcpStatusDot} ${kt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:kt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:kt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:kt.divider}),l.jsxs("div",{className:`${kt.settingsSection} ${kt.settingsSectionGrow}`,children:[l.jsxs("div",{className:kt.settingsRow,children:[l.jsxs("span",{className:kt.automationHeader,children:["Webhooks",l.jsx(jr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:kt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${kt.autoSendLabel} ${t.webhooksEnabled?kt.active:""} ${t.webhookUrl?"":kt.disabled}`,children:"Auto-Send"}),l.jsx(om,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:kt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:kt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function im(t,n="filtered"){const{name:i,path:a}=ml(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=B6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var l1=!1,am={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ia=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},bc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],rC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...bc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};rC();function br(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function rm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function vr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function sd(t){const n=Om(t),i=n.found?n:W6(t);if(i.found&&i.source)return Y6(i.source,"path")}function lC({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var on,Xn,Rs,Oo,zo,ss,to;const[k,C]=y.useState(!1),[j,R]=y.useState([]),[B,A]=y.useState(!0),[P,V]=y.useState(()=>b6()),[q,U]=y.useState(!1),J=y.useRef(null);y.useEffect(()=>{const E=K=>{const W=J.current;W&&W.contains(K.target)&&K.stopPropagation()},z=["mousedown","click","pointerdown"];return z.forEach(K=>document.body.addEventListener(K,E)),()=>{z.forEach(K=>document.body.removeEventListener(K,E))}},[]);const[ce,le]=y.useState(!1),[Ce,Ae]=y.useState(!1),[ee,fe]=y.useState(null),[O,oe]=y.useState({x:0,y:0}),[F,Q]=y.useState(null),[pe,N]=y.useState(!1),[re,ie]=y.useState("idle"),[de,Te]=y.useState(!1),[Ye,De]=y.useState(!1),[ft,rt]=y.useState(null),[gt,Wt]=y.useState(null),[We,at]=y.useState([]),[St,Gt]=y.useState(null),[Ct,Ft]=y.useState(null),[G,ke]=y.useState(null),[nt,Je]=y.useState(null),[dt,Xe]=y.useState([]),[ct,Qe]=y.useState(0),[ht,zt]=y.useState(!1),[ot,I]=y.useState(!1),[se,te]=y.useState(!1),[be,Fe]=y.useState(!1),[Ue,Be]=y.useState(!1),[xt,Tt]=y.useState("main"),[$t,Ge]=y.useState(!1),[Ie,Et]=y.useState(!1),[Lt,Vt]=y.useState(!1),[Pe,At]=y.useState([]),[mt,_t]=y.useState(null),sn=y.useRef(!1),[ut,Xt]=y.useState(!1),[zn,es]=y.useState(!1),[Sn,go]=y.useState(1),[Es,Cs]=y.useState("new-page"),[En,fn]=y.useState(""),[cn,Cn]=y.useState(!1),[it,Qt]=y.useState(null),yo=y.useRef(!1),Ks=y.useRef({rearrange:null,placements:[]}),ds=y.useRef({rearrange:null,placements:[]}),[As,Qo]=y.useState(0),[xo,lo]=y.useState(0),[Ds,fs]=y.useState(0),[kn,Us]=y.useState(0),bo=y.useRef(new Set),$n=y.useRef(new Set),gn=y.useRef(null),ko=y.useRef(),Un=Ie&&k&&!Lt&&ut;y.useEffect(()=>{if(Un){es(!1);const E=ul(()=>{es(!0)});return()=>cancelAnimationFrame(E)}else es(!1)},[Un]);const Zo=y.useRef(new Map),jo=y.useRef(new Map),vo=y.useRef(),[rs,ks]=y.useState(!1),[An,Ii]=y.useState([]),ci=y.useRef(An);ci.current=An;const[Ho,Ji]=y.useState(null),Uo=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[Pi,Ls]=y.useState(!1),wo=y.useRef(null),[Rn,ts]=y.useState([]),dn=y.useRef({cmd:!1,shift:!1}),In=()=>{Ge(!0)},ui=()=>{Ge(!1)},Bo=()=>{Pi||(wo.current=It(()=>Ls(!0),850))},di=()=>{wo.current&&(clearTimeout(wo.current),wo.current=null),Ls(!1),ui()};y.useEffect(()=>()=>{wo.current&&clearTimeout(wo.current)},[]);const[Kt,fi]=y.useState(()=>{var E;try{const z=JSON.parse((E=localStorage.getItem("feedback-toolbar-settings"))!=null?E:"");return{...am,...z,annotationColorId:bc.find(K=>K.id===z.annotationColorId)?z.annotationColorId:am.annotationColorId}}catch{return am}}),[js,Hi]=y.useState(!0),[Ci,So]=y.useState(!1),Qs=()=>{var E;(E=J.current)==null||E.classList.add(He.disableTransitions),Hi(z=>!z),ul(()=>{var z;(z=J.current)==null||z.classList.remove(He.disableTransitions)})},hi=!1,co="off",[mn,Vs]=y.useState(x!=null?x:null),mi=y.useRef(!1),[hs,Ys]=y.useState(_?"connecting":"disconnected"),[en,Zs]=y.useState(null),[uo,Pn]=y.useState(!1),[Ms,Ns]=y.useState(null),fo=y.useRef(!1),[ki,ho]=y.useState(new Set),[Vo,Yo]=y.useState(new Set),[Fn,Bn]=y.useState(!1),[Mo,ms]=y.useState(!1),[ns,Ws]=y.useState(!1),Fs=y.useRef(null),ps=y.useRef(null),To=y.useRef(null),Lo=y.useRef(null),M=y.useRef(!1),Z=y.useRef(0),ge=y.useRef(null),ve=y.useRef(null),Ve=8,et=50,D=y.useRef(null),$=y.useRef(null),H=y.useRef(null),Y=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(be)Be(!0);else{Ge(!1),Tt("main");const E=It(()=>Be(!1),0);return()=>clearTimeout(E)}},[be]);const Re=k&&B&&!Ie;y.useEffect(()=>{if(Re){Ae(!1),le(!0),ho(new Set);const E=It(()=>{ho(z=>{const K=new Set(z);return j.forEach(W=>K.add(W.id)),K})},350);return()=>clearTimeout(E)}else if(ce){Ae(!0);const E=It(()=>{le(!1),Ae(!1)},250);return()=>clearTimeout(E)}},[Re]),y.useEffect(()=>{I(!0),Qe(window.scrollY);const E=Jh(Y);R(E.filter(vr)),l1||(So(!0),l1=!0,It(()=>So(!1),750));try{const z=localStorage.getItem("feedback-toolbar-theme");z!==null&&Hi(z==="dark")}catch{}try{const z=localStorage.getItem("feedback-toolbar-position");if(z){const K=JSON.parse(z);typeof K.x=="number"&&typeof K.y=="number"&&Zs(K)}}catch{}},[Y]),y.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Kt))},[Kt,ot]),y.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-theme",js?"dark":"light")},[js,ot]);const qe=y.useRef(!1);y.useEffect(()=>{const E=qe.current;qe.current=uo,E&&!uo&&en&&ot&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(en))},[uo,en,ot]),y.useEffect(()=>{if(!_||!ot||mi.current)return;mi.current=!0,Ys("connecting"),(async()=>{try{const z=y6(Y),K=x||z;let W=!1;if(K)try{const ae=await Jy(_,K);Vs(ae.id),Ys("connected"),em(Y,ae.id),W=!0;const ye=Jh(Y),Ke=new Set(ae.annotations.map(lt=>lt.id)),Ze=ye.filter(lt=>!Ke.has(lt.id));if(Ze.length>0){const vt=`${typeof window<"u"?window.location.origin:""}${Y}`,Zt=(await Promise.allSettled(Ze.map(wt=>rl(_,ae.id,{...wt,sessionId:ae.id,url:vt})))).map((wt,pt)=>wt.status==="fulfilled"?wt.value:(console.warn("[Agentation] Failed to sync annotation:",wt.reason),Ze[pt])),Jt=[...ae.annotations,...Zt];R(Jt.filter(vr)),lc(Y,Jt.filter(vr),ae.id)}else R(ae.annotations.filter(vr)),lc(Y,ae.annotations.filter(vr),ae.id)}catch(ae){console.warn("[Agentation] Could not join session, creating new:",ae),x6(Y)}if(!W){const ae=typeof window<"u"?window.location.href:"/",ye=await tm(_,ae);Vs(ye.id),Ys("connected"),em(Y,ye.id),b==null||b(ye.id);const Ke=u6(),Ze=typeof window<"u"?window.location.origin:"",lt=[];for(const[vt,Bt]of Ke){const Zt=Bt.filter(pt=>!pt._syncedTo);if(Zt.length===0)continue;const Jt=`${Ze}${vt}`,wt=vt===Y;lt.push((async()=>{try{const pt=wt?ye:await tm(_,Jt),bs=(await Promise.allSettled(Zt.map(wn=>rl(_,pt.id,{...wn,sessionId:pt.id,url:Jt})))).map((wn,Hn)=>wn.status==="fulfilled"?wn.value:(console.warn("[Agentation] Failed to sync annotation:",wn.reason),Zt[Hn])).filter(vr);if(lc(vt,bs,pt.id),wt){const wn=new Set(Zt.map(Hn=>Hn.id));R(Hn=>{const Yt=Hn.filter(qt=>!wn.has(qt.id));return[...bs,...Yt]})}}catch(pt){console.warn(`[Agentation] Failed to sync annotations for ${vt}:`,pt)}})())}await Promise.allSettled(lt)}}catch(z){Ys("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",z)}})()},[_,x,ot,b,Y]),y.useEffect(()=>{if(!_||!ot)return;const E=async()=>{try{(await fetch(`${_}/health`)).ok?Ys("connected"):Ys("disconnected")}catch{Ys("disconnected")}};E();const z=hS(E,1e4);return()=>clearInterval(z)},[_,ot]),y.useEffect(()=>{if(!_||!ot||!mn)return;const E=new EventSource(`${_}/sessions/${mn}/events`),z=["resolved","dismissed"],K=W=>{var ae;try{const ye=JSON.parse(W.data);if(z.includes((ae=ye.payload)==null?void 0:ae.status)){const Ke=ye.payload.id,Ze=ye.payload.kind;if(Ze==="placement"){for(const[lt,vt]of Zo.current)if(vt===Ke){Zo.current.delete(lt),At(Bt=>Bt.filter(Zt=>Zt.id!==lt));break}}else if(Ze==="rearrange"){for(const[lt,vt]of jo.current)if(vt===Ke){jo.current.delete(lt),Qt(Bt=>{if(!Bt)return null;const Zt=Bt.sections.filter(Jt=>Jt.id!==lt);return Zt.length===0?null:{...Bt,sections:Zt}});break}}else Yo(lt=>new Set(lt).add(Ke)),It(()=>{R(lt=>lt.filter(vt=>vt.id!==Ke)),Yo(lt=>{const vt=new Set(lt);return vt.delete(Ke),vt})},150)}}catch{}};return E.addEventListener("annotation.updated",K),()=>{E.removeEventListener("annotation.updated",K),E.close()}},[_,ot,mn]),y.useEffect(()=>{if(!_||!ot)return;const E=ve.current==="disconnected",z=hs==="connected";ve.current=hs,E&&z&&(async()=>{try{const W=Jh(Y);if(W.length===0)return;const ye=`${typeof window<"u"?window.location.origin:""}${Y}`;let Ke=mn,Ze=[];if(Ke)try{Ze=(await Jy(_,Ke)).annotations}catch{Ke=null}Ke||(Ke=(await tm(_,ye)).id,Vs(Ke),em(Y,Ke));const lt=new Set(Ze.map(Bt=>Bt.id)),vt=W.filter(Bt=>!lt.has(Bt.id));if(vt.length>0){const Zt=(await Promise.allSettled(vt.map(pt=>rl(_,Ke,{...pt,sessionId:Ke,url:ye})))).map((pt,ys)=>pt.status==="fulfilled"?pt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",pt.reason),vt[ys])),wt=[...Ze,...Zt].filter(vr);R(wt),lc(Y,wt,Ke)}}catch(W){console.warn("[Agentation] Failed to sync on reconnect:",W)}})()},[hs,_,ot,mn,Y]);const st=y.useCallback(()=>{q||(U(!0),Fe(!1),C(!1),It(()=>{v6(!0),V(!0),U(!1)},400))},[q]);y.useEffect(()=>{if(!i||!ot||!t||t.length===0||j.length>0)return;const E=[];return E.push(It(()=>{C(!0)},n-200)),t.forEach((z,K)=>{const W=n+K*300;E.push(It(()=>{const ae=document.querySelector(z.selector);if(!ae)return;const ye=ae.getBoundingClientRect(),{name:Ke,path:Ze}=ml(ae),lt={id:`demo-${Date.now()}-${K}`,x:(ye.left+ye.width/2)/window.innerWidth*100,y:ye.top+ye.height/2+window.scrollY,comment:z.comment,element:Ke,elementPath:Ze,timestamp:Date.now(),selectedText:z.selectedText,boundingBox:{x:ye.left,y:ye.top+window.scrollY,width:ye.width,height:ye.height},nearbyText:ac(ae),cssClasses:rc(ae)};R(vt=>[...vt,lt])},W))}),()=>{E.forEach(clearTimeout)}},[i,ot,t,n]),y.useEffect(()=>{const E=()=>{Qe(window.scrollY),zt(!0),H.current&&clearTimeout(H.current),H.current=It(()=>{zt(!1)},150)};return window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),H.current&&clearTimeout(H.current)}},[]),y.useEffect(()=>{ot&&j.length>0?mn?lc(Y,j,mn):rb(Y,j):ot&&j.length===0&&localStorage.removeItem(Td(Y))},[j,Y,ot,mn]),y.useEffect(()=>{if(ot&&!sn.current){sn.current=!0;const E=d6(Y);E.length>0&&At(E)}},[ot,Y]),y.useEffect(()=>{ot&&sn.current&&!ut&&(Pe.length>0?f6(Y,Pe):h6(Y))},[Pe,Y,ot,ut]),y.useEffect(()=>{if(ot&&!yo.current){yo.current=!0;const E=m6(Y);if(E){const z={...E,sections:E.sections.map(K=>{var W;return{...K,currentRect:(W=K.currentRect)!=null?W:{...K.originalRect}}})};Qt(z)}}},[ot,Y]),y.useEffect(()=>{ot&&yo.current&&!ut&&(it?p6(Y,it):_6(Y))},[it,Y,ot,ut]);const bt=y.useRef(!1);y.useEffect(()=>{if(ot&&!bt.current){bt.current=!0;const E=g6(Y);E&&(ds.current={rearrange:E.rearrange,placements:E.placements||[]},E.purpose&&fn(E.purpose))}},[ot,Y]),y.useEffect(()=>{var z,K,W,ae,ye;if(!ot||!bt.current)return;const E=ds.current;ut?((K=(z=it==null?void 0:it.sections)==null?void 0:z.length)!=null?K:0)>0||Pe.length>0||En?Zy(Y,{rearrange:it,placements:Pe,purpose:En}):ed(Y):((ye=(ae=(W=E.rearrange)==null?void 0:W.sections)==null?void 0:ae.length)!=null?ye:0)>0||E.placements.length>0||En?Zy(Y,{rearrange:E.rearrange,placements:E.placements,purpose:En}):ed(Y)},[it,Pe,En,ut,Y,ot]),y.useEffect(()=>{Ie&&!it&&Qt({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ie,it]),y.useEffect(()=>{if(!_||!mn)return;const E=Zo.current,z=new Set(Pe.map(K=>K.id));for(const K of Pe){if(E.has(K.id))continue;E.set(K.id,"");const W=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Y;rl(_,mn,{id:K.id,x:K.x/window.innerWidth*100,y:K.y,comment:`Place ${K.type} at (${Math.round(K.x)}, ${Math.round(K.y)}), ${K.width}×${K.height}px${K.text?` — "${K.text}"`:""}`,element:`[design:${K.type}]`,elementPath:"[placement]",timestamp:K.timestamp,url:W,intent:"change",severity:"important",kind:"placement",placement:{componentType:K.type,width:K.width,height:K.height,scrollY:K.scrollY,text:K.text}}).then(ae=>{E.has(K.id)&&E.set(K.id,ae.id)}).catch(ae=>{console.warn("[Agentation] Failed to sync placement annotation:",ae),E.delete(K.id)})}for(const[K,W]of E)z.has(K)||(E.delete(K),W&&Ka(_,W).catch(()=>{}))},[Pe,_,mn,Y]),y.useEffect(()=>{if(!(!_||!mn))return vo.current&&clearTimeout(vo.current),vo.current=It(()=>{const E=jo.current;if(!it||it.sections.length===0){for(const[,W]of E)W&&Ka(_,W).catch(()=>{});E.clear();return}const z=new Set(it.sections.map(W=>W.id)),K=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Y;for(const W of it.sections){const ae=W.originalRect,ye=W.currentRect;if(!(Math.abs(ae.x-ye.x)>1||Math.abs(ae.y-ye.y)>1||Math.abs(ae.width-ye.width)>1||Math.abs(ae.height-ye.height)>1)){const lt=E.get(W.id);lt&&(E.delete(W.id),Ka(_,lt).catch(()=>{}));continue}const Ze=E.get(W.id);Ze?e1(_,Ze,{comment:`Move ${W.label} section (${W.tagName}) — from (${Math.round(ae.x)},${Math.round(ae.y)}) ${Math.round(ae.width)}×${Math.round(ae.height)} to (${Math.round(ye.x)},${Math.round(ye.y)}) ${Math.round(ye.width)}×${Math.round(ye.height)}`}).catch(lt=>{console.warn("[Agentation] Failed to update rearrange annotation:",lt)}):(E.set(W.id,""),rl(_,mn,{id:W.id,x:ye.x/window.innerWidth*100,y:ye.y,comment:`Move ${W.label} section (${W.tagName}) — from (${Math.round(ae.x)},${Math.round(ae.y)}) ${Math.round(ae.width)}×${Math.round(ae.height)} to (${Math.round(ye.x)},${Math.round(ye.y)}) ${Math.round(ye.width)}×${Math.round(ye.height)}`,element:W.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:K,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:W.selector,label:W.label,tagName:W.tagName,originalRect:ae,currentRect:ye}}).then(lt=>{E.has(W.id)&&E.set(W.id,lt.id)}).catch(lt=>{console.warn("[Agentation] Failed to sync rearrange annotation:",lt),E.delete(W.id)}))}for(const[W,ae]of E)z.has(W)||(E.delete(W),ae&&Ka(_,ae).catch(()=>{}))},300),()=>{vo.current&&clearTimeout(vo.current)}},[it,_,mn,Y]);const Ht=y.useRef(new Map);y.useLayoutEffect(()=>{var K;const E=(K=it==null?void 0:it.sections)!=null?K:[],z=new Set;if((Ie||Lt)&&k)for(const W of E){z.add(W.id);try{const ae=document.querySelector(W.selector);if(!ae)continue;if(!Ht.current.has(W.id)){const ye={transform:ae.style.transform,transformOrigin:ae.style.transformOrigin,opacity:ae.style.opacity,position:ae.style.position,zIndex:ae.style.zIndex,display:ae.style.display},Ke=[];let Ze=ae.parentElement;for(;Ze&&Ze!==document.body;){const vt=getComputedStyle(Ze);(vt.overflow!=="visible"||vt.overflowX!=="visible"||vt.overflowY!=="visible")&&(Ke.push({el:Ze,overflow:Ze.style.overflow}),Ze.style.overflow="visible"),Ze=Ze.parentElement}getComputedStyle(ae).display==="inline"&&(ae.style.display="inline-block"),Ht.current.set(W.id,{el:ae,origStyles:ye,ancestors:Ke}),ae.style.transformOrigin="top left",ae.style.zIndex="9999"}}catch{}}for(const[W,ae]of Ht.current)if(!z.has(W)){const{el:ye,origStyles:Ke,ancestors:Ze}=ae;ye.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ye.style.transform=Ke.transform,ye.style.transformOrigin=Ke.transformOrigin,ye.style.opacity=Ke.opacity,ye.style.position=Ke.position,ye.style.zIndex=Ke.zIndex,Ht.current.delete(W),It(()=>{ye.style.transition="",ye.style.display=Ke.display;for(const lt of Ze)lt.el.style.overflow=lt.overflow},450)}},[it,Ie,Lt,k]),y.useEffect(()=>()=>{for(const[,E]of Ht.current){const{el:z,origStyles:K,ancestors:W}=E;z.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",z.style.transform=K.transform,z.style.transformOrigin=K.transformOrigin,z.style.opacity=K.opacity,z.style.position=K.position,z.style.zIndex=K.zIndex,It(()=>{z.style.transition="",z.style.display=K.display;for(const ae of W)ae.el.style.overflow=ae.overflow},450)}Ht.current.clear()},[]);const jn=y.useCallback(()=>{Vt(!0),Et(!1),_t(null),clearTimeout(ko.current),ko.current=It(()=>{Vt(!1)},300)},[]),_s=y.useCallback(()=>{Ie&&(Vt(!0),Et(!1),_t(null),clearTimeout(ko.current),ko.current=It(()=>{Vt(!1)},300)),C(!1)},[Ie]),bn=y.useCallback(()=>{se||(pS(),te(!0))},[se]),Pt=y.useCallback(()=>{se&&($y(),te(!1))},[se]),un=y.useCallback(()=>{se?Pt():bn()},[se,bn,Pt]),Mn=y.useCallback(()=>{if(Rn.length===0)return;const E=Rn[0],z=E.element,K=Rn.length>1,W=Rn.map(ae=>ae.element.getBoundingClientRect());if(K){const ae={left:Math.min(...W.map(pt=>pt.left)),top:Math.min(...W.map(pt=>pt.top)),right:Math.max(...W.map(pt=>pt.right)),bottom:Math.max(...W.map(pt=>pt.bottom))},ye=Rn.slice(0,5).map(pt=>pt.name).join(", "),Ke=Rn.length>5?` +${Rn.length-5} more`:"",Ze=W.map(pt=>({x:pt.left,y:pt.top+window.scrollY,width:pt.width,height:pt.height})),vt=Rn[Rn.length-1].element,Bt=W[W.length-1],Zt=Bt.left+Bt.width/2,Jt=Bt.top+Bt.height/2,wt=rm(vt);Q({x:Zt/window.innerWidth*100,y:wt?Jt:Jt+window.scrollY,clientY:Jt,element:`${Rn.length} elements: ${ye}${Ke}`,elementPath:"multi-select",boundingBox:{x:ae.left,y:ae.top+window.scrollY,width:ae.right-ae.left,height:ae.bottom-ae.top},isMultiSelect:!0,isFixed:wt,elementBoundingBoxes:Ze,multiSelectElements:Rn.map(pt=>pt.element),targetElement:vt,fullPath:Qu(z),accessibility:Ku(z),computedStyles:Gu(z),computedStylesObj:qu(z),nearbyElements:Xu(z),cssClasses:rc(z),nearbyText:ac(z),sourceFile:sd(z)})}else{const ae=W[0],ye=rm(z);Q({x:ae.left/window.innerWidth*100,y:ye?ae.top:ae.top+window.scrollY,clientY:ae.top,element:E.name,elementPath:E.path,boundingBox:{x:ae.left,y:ye?ae.top:ae.top+window.scrollY,width:ae.width,height:ae.height},isFixed:ye,fullPath:Qu(z),accessibility:Ku(z),computedStyles:Gu(z),computedStylesObj:qu(z),nearbyElements:Xu(z),cssClasses:rc(z),nearbyText:ac(z),reactComponents:E.reactComponents,sourceFile:sd(z)})}ts([]),fe(null)},[Rn]);y.useEffect(()=>{k||(Q(null),ke(null),Je(null),Xe([]),fe(null),Fe(!1),ts([]),dn.current={cmd:!1,shift:!1},se&&Pt())},[k,se,Pt]),y.useEffect(()=>()=>{$y()},[]),y.useEffect(()=>{if(!k)return;const E=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),z=":not([data-agentation-root]):not([data-agentation-root] *)",K=document.createElement("style");return K.id="feedback-cursor-styles",K.textContent=`
      body ${z} {
        cursor: crosshair !important;
      }

      body :is(${E})${z} {
        cursor: text !important;
      }
    `,document.head.appendChild(K),()=>{const W=document.getElementById("feedback-cursor-styles");W&&W.remove()}},[k]),y.useEffect(()=>{if(Ho!==null&&k)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ho,k]),y.useEffect(()=>{if(!k||F||rs||Ie)return;const E=z=>{const K=z.composedPath()[0]||z.target;if(Fo(K,"[data-feedback-toolbar]")){fe(null);return}const W=br(z.clientX,z.clientY);if(!W||Fo(W,"[data-feedback-toolbar]")){fe(null);return}const{name:ae,elementName:ye,path:Ke,reactComponents:Ze}=im(W,co),lt=W.getBoundingClientRect();fe({element:ae,elementName:ye,elementPath:Ke,rect:lt,reactComponents:Ze}),oe({x:z.clientX,y:z.clientY})};return document.addEventListener("mousemove",E),()=>document.removeEventListener("mousemove",E)},[k,F,rs,Ie,co,An]);const ls=y.useCallback(E=>{var z;if(ke(E),rt(null),Wt(null),at([]),(z=E.elementBoundingBoxes)!=null&&z.length){const K=[];for(const W of E.elementBoundingBoxes){const ae=W.x+W.width/2,ye=W.y+W.height/2-window.scrollY,Ke=br(ae,ye);Ke&&K.push(Ke)}Xe(K),Je(null)}else if(E.boundingBox){const K=E.boundingBox,W=K.x+K.width/2,ae=E.isFixed?K.y+K.height/2:K.y+K.height/2-window.scrollY,ye=br(W,ae);if(ye){const Ke=ye.getBoundingClientRect(),Ze=Ke.width/K.width,lt=Ke.height/K.height;Ze<.5||lt<.5?Je(null):Je(ye)}else Je(null);Xe([])}else Je(null),Xe([])},[]);y.useEffect(()=>{if(!k||rs||Ie)return;const E=z=>{var xs,bs;if(M.current){M.current=!1;return}const K=z.composedPath()[0]||z.target;if(Fo(K,"[data-feedback-toolbar]")||Fo(K,"[data-annotation-popup]")||Fo(K,"[data-annotation-marker]"))return;if(z.metaKey&&z.shiftKey&&!F&&!G){z.preventDefault(),z.stopPropagation();const wn=br(z.clientX,z.clientY);if(!wn)return;const Hn=wn.getBoundingClientRect(),{name:Yt,path:qt,reactComponents:vs}=im(wn,co),Tn=Rn.findIndex(mo=>mo.element===wn);Tn>=0?ts(mo=>mo.filter(($o,os)=>os!==Tn)):ts(mo=>[...mo,{element:wn,rect:Hn,name:Yt,path:qt,reactComponents:vs!=null?vs:void 0}]);return}const W=Fo(K,"button, a, input, select, textarea, [role='button'], [onclick]");if(Kt.blockInteractions&&W&&(z.preventDefault(),z.stopPropagation()),F){if(W&&!Kt.blockInteractions)return;z.preventDefault(),(xs=D.current)==null||xs.shake();return}if(G){if(W&&!Kt.blockInteractions)return;z.preventDefault(),(bs=$.current)==null||bs.shake();return}z.preventDefault();const ae=br(z.clientX,z.clientY);if(!ae)return;const{name:ye,path:Ke,reactComponents:Ze}=im(ae,co),lt=ae.getBoundingClientRect(),vt=z.clientX/window.innerWidth*100,Bt=rm(ae),Zt=Bt?z.clientY:z.clientY+window.scrollY,Jt=window.getSelection();let wt;Jt&&Jt.toString().trim().length>0&&(wt=Jt.toString().trim().slice(0,500));const pt=qu(ae),ys=Gu(ae);Q({x:vt,y:Zt,clientY:z.clientY,element:ye,elementPath:Ke,selectedText:wt,boundingBox:{x:lt.left,y:Bt?lt.top:lt.top+window.scrollY,width:lt.width,height:lt.height},nearbyText:ac(ae),cssClasses:rc(ae),isFixed:Bt,fullPath:Qu(ae),accessibility:Ku(ae),computedStyles:ys,computedStylesObj:pt,nearbyElements:Xu(ae),reactComponents:Ze!=null?Ze:void 0,sourceFile:sd(ae),targetElement:ae}),fe(null)};return document.addEventListener("click",E,!0),()=>document.removeEventListener("click",E,!0)},[k,rs,Ie,F,G,Kt.blockInteractions,co,Rn]),y.useEffect(()=>{if(!k)return;const E=W=>{W.key==="Meta"&&(dn.current.cmd=!0),W.key==="Shift"&&(dn.current.shift=!0)},z=W=>{const ae=dn.current.cmd&&dn.current.shift;W.key==="Meta"&&(dn.current.cmd=!1),W.key==="Shift"&&(dn.current.shift=!1);const ye=dn.current.cmd&&dn.current.shift;ae&&!ye&&Rn.length>0&&Mn()},K=()=>{dn.current={cmd:!1,shift:!1},ts([])};return document.addEventListener("keydown",E),document.addEventListener("keyup",z),window.addEventListener("blur",K),()=>{document.removeEventListener("keydown",E),document.removeEventListener("keyup",z),window.removeEventListener("blur",K)}},[k,Rn,Mn]),y.useEffect(()=>{if(!k||F||rs||Ie)return;const E=z=>{const K=z.composedPath()[0]||z.target;Fo(K,"[data-feedback-toolbar]")||Fo(K,"[data-annotation-marker]")||Fo(K,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(K.tagName)||K.isContentEditable||(z.preventDefault(),Fs.current={x:z.clientX,y:z.clientY})};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[k,F,rs,Ie]),y.useEffect(()=>{if(!k||F)return;const E=z=>{if(!Fs.current)return;const K=z.clientX-Fs.current.x,W=z.clientY-Fs.current.y,ae=K*K+W*W,ye=Ve*Ve;if(!ns&&ae>=ye&&(ps.current=Fs.current,Ws(!0),z.preventDefault()),(ns||ae>=ye)&&ps.current){if(To.current){const Yt=Math.min(ps.current.x,z.clientX),qt=Math.min(ps.current.y,z.clientY),vs=Math.abs(z.clientX-ps.current.x),Tn=Math.abs(z.clientY-ps.current.y);To.current.style.transform=`translate(${Yt}px, ${qt}px)`,To.current.style.width=`${vs}px`,To.current.style.height=`${Tn}px`}const Ke=Date.now();if(Ke-Z.current<et)return;Z.current=Ke;const Ze=ps.current.x,lt=ps.current.y,vt=Math.min(Ze,z.clientX),Bt=Math.min(lt,z.clientY),Zt=Math.max(Ze,z.clientX),Jt=Math.max(lt,z.clientY),wt=(vt+Zt)/2,pt=(Bt+Jt)/2,ys=new Set,xs=[[vt,Bt],[Zt,Bt],[vt,Jt],[Zt,Jt],[wt,pt],[wt,Bt],[wt,Jt],[vt,pt],[Zt,pt]];for(const[Yt,qt]of xs){const vs=document.elementsFromPoint(Yt,qt);for(const Tn of vs)Tn instanceof HTMLElement&&ys.add(Tn)}const bs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Yt of bs)if(Yt instanceof HTMLElement){const qt=Yt.getBoundingClientRect(),vs=qt.left+qt.width/2,Tn=qt.top+qt.height/2,mo=vs>=vt&&vs<=Zt&&Tn>=Bt&&Tn<=Jt,$o=Math.min(qt.right,Zt)-Math.max(qt.left,vt),os=Math.min(qt.bottom,Jt)-Math.max(qt.top,Bt),ji=$o>0&&os>0?$o*os:0,Ui=qt.width*qt.height,Vi=Ui>0?ji/Ui:0;(mo||Vi>.5)&&ys.add(Yt)}const wn=[],Hn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Yt of ys){if(Fo(Yt,"[data-feedback-toolbar]")||Fo(Yt,"[data-annotation-marker]"))continue;const qt=Yt.getBoundingClientRect();if(!(qt.width>window.innerWidth*.8&&qt.height>window.innerHeight*.5)&&!(qt.width<10||qt.height<10)&&qt.left<Zt&&qt.right>vt&&qt.top<Jt&&qt.bottom>Bt){const vs=Yt.tagName;let Tn=Hn.has(vs);if(!Tn&&(vs==="DIV"||vs==="SPAN")){const mo=Yt.textContent&&Yt.textContent.trim().length>0,$o=Yt.onclick!==null||Yt.getAttribute("role")==="button"||Yt.getAttribute("role")==="link"||Yt.classList.contains("clickable")||Yt.hasAttribute("data-clickable");(mo||$o)&&!Yt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Tn=!0)}if(Tn){let mo=!1;for(const $o of wn)if($o.left<=qt.left&&$o.right>=qt.right&&$o.top<=qt.top&&$o.bottom>=qt.bottom){mo=!0;break}mo||wn.push(qt)}}}if(Lo.current){const Yt=Lo.current;for(;Yt.children.length>wn.length;)Yt.removeChild(Yt.lastChild);wn.forEach((qt,vs)=>{let Tn=Yt.children[vs];Tn||(Tn=document.createElement("div"),Tn.className=He.selectedElementHighlight,Yt.appendChild(Tn)),Tn.style.transform=`translate(${qt.left}px, ${qt.top}px)`,Tn.style.width=`${qt.width}px`,Tn.style.height=`${qt.height}px`})}}};return document.addEventListener("mousemove",E,{passive:!0}),()=>document.removeEventListener("mousemove",E)},[k,F,ns,Ve]),y.useEffect(()=>{if(!k)return;const E=z=>{const K=ns,W=ps.current;if(ns&&W){M.current=!0;const ae=Math.min(W.x,z.clientX),ye=Math.min(W.y,z.clientY),Ke=Math.max(W.x,z.clientX),Ze=Math.max(W.y,z.clientY),lt=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(wt=>{if(!(wt instanceof HTMLElement)||Fo(wt,"[data-feedback-toolbar]")||Fo(wt,"[data-annotation-marker]"))return;const pt=wt.getBoundingClientRect();pt.width>window.innerWidth*.8&&pt.height>window.innerHeight*.5||pt.width<10||pt.height<10||pt.left<Ke&&pt.right>ae&&pt.top<Ze&&pt.bottom>ye&&lt.push({element:wt,rect:pt})});const Bt=lt.filter(({element:wt})=>!lt.some(({element:pt})=>pt!==wt&&wt.contains(pt))),Zt=z.clientX/window.innerWidth*100,Jt=z.clientY+window.scrollY;if(Bt.length>0){const wt=Bt.reduce((Hn,{rect:Yt})=>({left:Math.min(Hn.left,Yt.left),top:Math.min(Hn.top,Yt.top),right:Math.max(Hn.right,Yt.right),bottom:Math.max(Hn.bottom,Yt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),pt=Bt.slice(0,5).map(({element:Hn})=>ml(Hn).name).join(", "),ys=Bt.length>5?` +${Bt.length-5} more`:"",xs=Bt[0].element,bs=qu(xs),wn=Gu(xs);Q({x:Zt,y:Jt,clientY:z.clientY,element:`${Bt.length} elements: ${pt}${ys}`,elementPath:"multi-select",boundingBox:{x:wt.left,y:wt.top+window.scrollY,width:wt.right-wt.left,height:wt.bottom-wt.top},isMultiSelect:!0,fullPath:Qu(xs),accessibility:Ku(xs),computedStyles:wn,computedStylesObj:bs,nearbyElements:Xu(xs),cssClasses:rc(xs),nearbyText:ac(xs),sourceFile:sd(xs)})}else{const wt=Math.abs(Ke-ae),pt=Math.abs(Ze-ye);wt>20&&pt>20&&Q({x:Zt,y:Jt,clientY:z.clientY,element:"Area selection",elementPath:`region at (${Math.round(ae)}, ${Math.round(ye)})`,boundingBox:{x:ae,y:ye+window.scrollY,width:wt,height:pt},isMultiSelect:!0})}fe(null)}else K&&(M.current=!0);Fs.current=null,ps.current=null,Ws(!1),Lo.current&&(Lo.current.innerHTML="")};return document.addEventListener("mouseup",E),()=>document.removeEventListener("mouseup",E)},[k,ns]);const gs=y.useCallback(async(E,z,K)=>{const W=Kt.webhookUrl||w;if(!W||!Kt.webhooksEnabled&&!K)return!1;try{return(await fetch(W,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:E,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...z})})).ok}catch(ae){return console.warn("[Agentation] Webhook failed:",ae),!1}},[w,Kt.webhookUrl,Kt.webhooksEnabled]),Js=y.useCallback(E=>{var K;if(!F)return;const z={id:Date.now().toString(),x:F.x,y:F.y,comment:E,element:F.element,elementPath:F.elementPath,timestamp:Date.now(),selectedText:F.selectedText,boundingBox:F.boundingBox,nearbyText:F.nearbyText,cssClasses:F.cssClasses,isMultiSelect:F.isMultiSelect,isFixed:F.isFixed,fullPath:F.fullPath,accessibility:F.accessibility,computedStyles:F.computedStyles,nearbyElements:F.nearbyElements,reactComponents:F.reactComponents,sourceFile:F.sourceFile,elementBoundingBoxes:F.elementBoundingBoxes,..._&&mn?{sessionId:mn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};R(W=>[...W,z]),ge.current=z.id,It(()=>{ge.current=null},300),It(()=>{ho(W=>new Set(W).add(z.id))},250),a==null||a(z),gs("annotation.add",{annotation:z}),Bn(!0),It(()=>{Q(null),Bn(!1)},150),(K=window.getSelection())==null||K.removeAllRanges(),_&&mn&&rl(_,mn,z).then(W=>{W.id!==z.id&&(R(ae=>ae.map(ye=>ye.id===z.id?{...ye,id:W.id}:ye)),ho(ae=>{const ye=new Set(ae);return ye.delete(z.id),ye.add(W.id),ye}))}).catch(W=>{console.warn("[Agentation] Failed to sync annotation:",W)})},[F,a,gs,_,mn]),Os=y.useCallback(()=>{Bn(!0),It(()=>{Q(null),Bn(!1)},150)},[]),eo=y.useCallback(E=>{const z=j.findIndex(W=>W.id===E),K=j[z];(G==null?void 0:G.id)===E&&(ms(!0),It(()=>{ke(null),Je(null),Xe([]),ms(!1)},150)),Gt(E),Yo(W=>new Set(W).add(E)),K&&(c==null||c(K),gs("annotation.delete",{annotation:K})),_&&Ka(_,E).catch(W=>{console.warn("[Agentation] Failed to delete annotation from server:",W)}),It(()=>{R(W=>W.filter(ae=>ae.id!==E)),Yo(W=>{const ae=new Set(W);return ae.delete(E),ae}),Gt(null),z<j.length-1&&(Ft(z),It(()=>Ft(null),200))},150)},[j,G,c,gs,_]),Jo=y.useCallback(E=>{var z;if(!E){rt(null),Wt(null),at([]);return}if(rt(E.id),(z=E.elementBoundingBoxes)!=null&&z.length){const K=[];for(const W of E.elementBoundingBoxes){const ae=W.x+W.width/2,ye=W.y+W.height/2-window.scrollY,Ze=document.elementsFromPoint(ae,ye).find(lt=>!lt.closest("[data-annotation-marker]")&&!lt.closest("[data-agentation-root]"));Ze&&K.push(Ze)}at(K),Wt(null)}else if(E.boundingBox){const K=E.boundingBox,W=K.x+K.width/2,ae=E.isFixed?K.y+K.height/2:K.y+K.height/2-window.scrollY,ye=br(W,ae);if(ye){const Ke=ye.getBoundingClientRect(),Ze=Ke.width/K.width,lt=Ke.height/K.height;Ze<.5||lt<.5?Wt(null):Wt(ye)}else Wt(null);at([])}else Wt(null),at([])},[]),pi=y.useCallback(E=>{if(!G)return;const z={...G,comment:E};R(K=>K.map(W=>W.id===G.id?z:W)),u==null||u(z),gs("annotation.update",{annotation:z}),_&&e1(_,G.id,{comment:E}).catch(K=>{console.warn("[Agentation] Failed to update annotation on server:",K)}),ms(!0),It(()=>{ke(null),Je(null),Xe([]),ms(!1)},150)},[G,u,gs,_]),ei=y.useCallback(()=>{ms(!0),It(()=>{ke(null),Je(null),Xe([]),ms(!1)},150)},[]),zs=y.useCallback(()=>{const E=j.length,z=Pe.length>0||!!it;if(E===0&&An.length===0&&!z)return;if(d==null||d(j),gs("annotations.clear",{annotations:j}),_){Promise.all(j.map(ae=>Ka(_,ae.id).catch(ye=>{console.warn("[Agentation] Failed to delete annotation from server:",ye)})));for(const[,ae]of Zo.current)ae&&Ka(_,ae).catch(()=>{});Zo.current.clear();for(const[,ae]of jo.current)ae&&Ka(_,ae).catch(()=>{});jo.current.clear()}De(!0),Te(!0),Ii([]);const K=Uo.current;if(K){const ae=K.getContext("2d");ae&&ae.clearRect(0,0,K.width,K.height)}(Pe.length>0||it)&&(fs(ae=>ae+1),Us(ae=>ae+1),It(()=>{At([]),Qt(null)},200)),ut&&Xt(!1),En&&fn(""),ds.current={rearrange:null,placements:[]},ed(Y);const W=E*30+200;It(()=>{R([]),ho(new Set),localStorage.removeItem(Td(Y)),De(!1)},W),It(()=>Te(!1),1500)},[Y,j,An,Pe,it,ut,En,d,gs,_]),ti=y.useCallback(async()=>{const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Y,z=Ie&&ut;let K;if(z){if(Pe.length===0&&!it&&!En)return;K=""}else{if(K=s1(j,E,Kt.outputDetail),!K&&An.length===0&&Pe.length===0&&!it)return;K||(K=`## Page Feedback: ${E}
`)}if(!z&&An.length>0){const W=new Set;for(const Ze of j)Ze.drawingIndex!=null&&W.add(Ze.drawingIndex);const ae=Uo.current;ae&&(ae.style.visibility="hidden");const ye=[],Ke=window.scrollY;for(let Ze=0;Ze<An.length;Ze++){if(W.has(Ze))continue;const lt=An[Ze];if(lt.points.length<2)continue;const vt=lt.fixed?lt.points:lt.points.map(qn=>({x:qn.x,y:qn.y-Ke}));let Bt=1/0,Zt=1/0,Jt=-1/0,wt=-1/0;for(const qn of vt)Bt=Math.min(Bt,qn.x),Zt=Math.min(Zt,qn.y),Jt=Math.max(Jt,qn.x),wt=Math.max(wt,qn.y);const pt=Jt-Bt,ys=wt-Zt,xs=Math.hypot(pt,ys),bs=vt[0],wn=vt[vt.length-1],Hn=Math.hypot(wn.x-bs.x,wn.y-bs.y);let Yt;const qt=Hn<xs*.35,vs=pt/Math.max(ys,1);if(qt&&xs>20){const qn=Math.max(pt,ys)*.15;let Yi=0;for(const ea of vt){const $c=ea.x-Bt<qn,Wd=Jt-ea.x<qn,Fd=ea.y-Zt<qn,Xd=wt-ea.y<qn;($c||Wd)&&(Fd||Xd)&&Yi++}Yt=Yi>vt.length*.15?"box":"circle"}else vs>3&&ys<40?Yt="underline":Hn>xs*.5?Yt="arrow":Yt="drawing";const Tn=Math.min(10,vt.length),mo=Math.max(1,Math.floor(vt.length/Tn)),$o=new Set,os=[],ji=[bs];for(let qn=mo;qn<vt.length-1;qn+=mo)ji.push(vt[qn]);ji.push(wn);for(const qn of ji){const Yi=br(qn.x,qn.y);if(!Yi||$o.has(Yi)||Fo(Yi,"[data-feedback-toolbar]"))continue;$o.add(Yi);const{name:ea}=ml(Yi);os.includes(ea)||os.push(ea)}const Ui=`${Math.round(Bt)},${Math.round(Zt)} → ${Math.round(Jt)},${Math.round(wt)}`;let Vi;(Yt==="circle"||Yt==="box")&&os.length>0?Vi=`${Yt==="box"?"Boxed":"Circled"} **${os[0]}**${os.length>1?` (and ${os.slice(1).join(", ")})`:""} (region: ${Ui})`:Yt==="underline"&&os.length>0?Vi=`Underlined **${os[0]}** (${Ui})`:Yt==="arrow"&&os.length>=2?Vi=`Arrow from **${os[0]}** to **${os[os.length-1]}** (${Math.round(bs.x)},${Math.round(bs.y)} → ${Math.round(wn.x)},${Math.round(wn.y)})`:os.length>0?Vi=`${Yt==="arrow"?"Arrow":"Drawing"} near **${os.join("**, **")}** (region: ${Ui})`:Vi=`Drawing at ${Ui}`,ye.push(Vi)}ae&&(ae.style.visibility=""),ye.length>0&&(K+=`
**Drawings:**
`,ye.forEach((Ze,lt)=>{K+=`${lt+1}. ${Ze}
`}))}if((Pe.length>0||z&&En)&&(K+=`
`+Ky(Pe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ut,wireframePurpose:En||void 0},Kt.outputDetail)),it){const W=Qy(it,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});W&&(K+=`
`+W)}if(g)try{await navigator.clipboard.writeText(K)}catch{}h==null||h(K),N(!0),It(()=>N(!1),2e3),Kt.autoClearAfterCopy&&It(()=>zs(),500)},[j,An,Pe,it,ut,Ie,Es,En,Y,Kt.outputDetail,co,Kt.autoClearAfterCopy,zs,g,h]),Se=y.useCallback(async()=>{const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Y;let z=s1(j,E,Kt.outputDetail);if(!z&&Pe.length===0&&!it)return;if(z||(z=`## Page Feedback: ${E}
`),Pe.length>0&&(z+=`
`+Ky(Pe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ut,wireframePurpose:En||void 0},Kt.outputDetail)),it){const W=Qy(it,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});W&&(z+=`
`+W)}p&&p(z,j),ie("sending"),await new Promise(W=>It(W,150));const K=await gs("submit",{output:z,annotations:j},!0);ie(K?"sent":"failed"),It(()=>ie("idle"),2500),K&&Kt.autoClearAfterCopy&&It(()=>zs(),500)},[p,gs,j,Pe,it,ut,Es,Y,Kt.outputDetail,co,Kt.autoClearAfterCopy,zs]);y.useEffect(()=>{if(!Ms)return;const E=10,z=W=>{const ae=W.clientX-Ms.x,ye=W.clientY-Ms.y,Ke=Math.sqrt(ae*ae+ye*ye);if(!uo&&Ke>E&&Pn(!0),uo||Ke>E){let Ze=Ms.toolbarX+ae,lt=Ms.toolbarY+ye;const vt=20,Bt=337,Zt=44,wt=Bt-(k?hs==="connected"?297:257:44),pt=vt-wt,ys=window.innerWidth-vt-Bt;Ze=Math.max(pt,Math.min(ys,Ze)),lt=Math.max(vt,Math.min(window.innerHeight-Zt-vt,lt)),Zs({x:Ze,y:lt})}},K=()=>{uo&&(fo.current=!0),Pn(!1),Ns(null)};return document.addEventListener("mousemove",z),document.addEventListener("mouseup",K),()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",K)}},[Ms,uo,k,hs]);const Le=y.useCallback(E=>{var ye,Ke;if(E.target.closest("button")||E.target.closest("[data-agentation-settings-panel]"))return;const z=E.currentTarget.parentElement;if(!z)return;const K=z.getBoundingClientRect(),W=(ye=en==null?void 0:en.x)!=null?ye:K.left,ae=(Ke=en==null?void 0:en.y)!=null?Ke:K.top;Ns({x:E.clientX,y:E.clientY,toolbarX:W,toolbarY:ae})},[en]);if(y.useEffect(()=>{if(!en)return;const E=()=>{let ae=en.x,ye=en.y;const lt=20-(337-(k?hs==="connected"?297:257:44)),vt=window.innerWidth-20-337;ae=Math.max(lt,Math.min(vt,ae)),ye=Math.max(20,Math.min(window.innerHeight-44-20,ye)),(ae!==en.x||ye!==en.y)&&Zs({x:ae,y:ye})};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[en,k,hs]),y.useEffect(()=>{const E=z=>{const K=z.target,W=K.tagName==="INPUT"||K.tagName==="TEXTAREA"||K.isContentEditable;if(z.key==="Escape"){if(Ie){mt?_t(null):jn();return}if(rs){ks(!1);return}if(Rn.length>0){ts([]);return}F||k&&(In(),C(!1))}if((z.metaKey||z.ctrlKey)&&z.shiftKey&&(z.key==="f"||z.key==="F")){z.preventDefault(),In(),k?_s():C(!0);return}if(!(W||z.metaKey||z.ctrlKey)&&((z.key==="p"||z.key==="P")&&(z.preventDefault(),In(),un()),(z.key==="l"||z.key==="L")&&(z.preventDefault(),In(),rs&&ks(!1),be&&Fe(!1),F&&Os(),Ie?jn():Et(!0)),(z.key==="h"||z.key==="H")&&j.length>0&&(z.preventDefault(),In(),A(ae=>!ae)),(z.key==="c"||z.key==="C")&&(j.length>0||Pe.length>0||it)&&(z.preventDefault(),In(),ti()),(z.key==="x"||z.key==="X")&&(j.length>0||Pe.length>0||it)&&(z.preventDefault(),In(),zs(),Pe.length>0&&At([]),it&&Qt(null)),z.key==="s"||z.key==="S")){const ae=ia(Kt.webhookUrl)||ia(w||"");j.length>0&&ae&&re==="idle"&&(z.preventDefault(),In(),Se())}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[k,rs,Ie,mt,Pe,it,F,j.length,Kt.webhookUrl,w,re,Se,un,ti,zs,Rn]),!ot||P)return null;const tt=j.length>0,$e=j.filter(E=>!Vo.has(E.id)&&E.kind!=="placement"&&E.kind!=="rearrange"),Nt=$e.length>0,Dt=j.filter(E=>Vo.has(E.id)),rn=E=>{const ye=E.x/100*window.innerWidth,Ke=typeof E.y=="string"?parseFloat(E.y):E.y,Ze={};window.innerHeight-Ke-22-10<80&&(Ze.top="auto",Ze.bottom="calc(100% + 10px)");const vt=ye-200/2,Bt=10;if(vt<Bt){const Zt=Bt-vt;Ze.left=`calc(50% + ${Zt}px)`}else if(vt+200>window.innerWidth-Bt){const Zt=vt+200-(window.innerWidth-Bt);Ze.left=`calc(50% - ${Zt}px)`}return Ze};return Nc.createPortal(l.jsxs("div",{ref:J,style:{display:"contents"},"data-agentation-theme":js?"dark":"light","data-agentation-accent":Kt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${He.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:en?{left:en.x,top:en.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${He.toolbarContainer} ${k?He.expanded:He.collapsed} ${Ci?He.entrance:""} ${q?He.hiding:""} ${!Kt.webhooksEnabled&&(ia(Kt.webhookUrl)||ia(w||""))?He.serverConnected:""}`,onClick:k?void 0:E=>{if(fo.current){fo.current=!1,E.preventDefault();return}C(!0)},onMouseDown:Le,role:k?void 0:"button",tabIndex:k?-1:0,title:k?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${He.toggleContent} ${k?He.hidden:He.visible}`,children:[l.jsx(Qw,{size:24}),Nt&&l.jsx("span",{className:`${He.badge} ${k?He.fadeOut:""} ${Ci?He.entrance:""}`,children:$e.length})]}),l.jsxs("div",{className:`${He.controlsContent} ${k?He.visible:He.hidden} ${en&&en.y<100?He.tooltipBelow:""} ${$t||be?He.tooltipsHidden:""} ${Pi?He.tooltipsInSession:""}`,onMouseEnter:Bo,onMouseLeave:di,children:[l.jsxs("div",{className:`${He.buttonWrapper} ${en&&en.x<120?He.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),In(),un()},"data-active":se,children:l.jsx(nS,{size:24,isPaused:se})}),l.jsxs("span",{className:He.buttonTooltip,children:[se?"Resume animations":"Pause animations",l.jsx("span",{className:He.shortcut,children:"P"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:`${He.controlButton} ${js?"":He.light}`,onClick:E=>{E.stopPropagation(),In(),rs&&ks(!1),be&&Fe(!1),F&&Os(),Ie?jn():Et(!0)},"data-active":Ie,style:Ie&&ut?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(dS,{size:21})}),l.jsxs("span",{className:He.buttonTooltip,children:[Ie?"Exit layout mode":"Layout mode",l.jsx("span",{className:He.shortcut,children:"L"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),In(),A(!B)},disabled:!tt||Ie,children:l.jsx(tS,{size:24,isOpen:B})}),l.jsxs("span",{className:He.buttonTooltip,children:[B?"Hide markers":"Show markers",l.jsx("span",{className:He.shortcut,children:"H"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:`${He.controlButton} ${pe?He.statusShowing:""}`,onClick:E=>{E.stopPropagation(),In(),ti()},disabled:Ie&&ut?Pe.length===0&&!((on=it==null?void 0:it.sections)!=null&&on.length):!tt&&An.length===0&&Pe.length===0&&!((Xn=it==null?void 0:it.sections)!=null&&Xn.length),"data-active":pe,children:l.jsx(Jw,{size:24,copied:pe,tint:Ie&&ut&&(Pe.length>0||(Rs=it==null?void 0:it.sections)!=null&&Rs.length)?"#f97316":void 0})}),l.jsxs("span",{className:He.buttonTooltip,children:[Ie&&ut?"Copy layout":"Copy feedback",l.jsx("span",{className:He.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${He.buttonWrapper} ${He.sendButtonWrapper} ${k&&!Kt.webhooksEnabled&&(ia(Kt.webhookUrl)||ia(w||""))?He.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${He.controlButton} ${re==="sent"||re==="failed"?He.statusShowing:""}`,onClick:E=>{E.stopPropagation(),In(),Se()},disabled:!tt||!ia(Kt.webhookUrl)&&!ia(w||"")||re==="sending","data-no-hover":re==="sent"||re==="failed",tabIndex:ia(Kt.webhookUrl)||ia(w||"")?0:-1,children:[l.jsx(eS,{size:24,state:re}),tt&&re==="idle"&&l.jsx("span",{className:He.buttonBadge,children:j.length})]}),l.jsxs("span",{className:He.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:He.shortcut,children:"S"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),In(),zs()},disabled:!tt&&An.length===0&&Pe.length===0&&!((Oo=it==null?void 0:it.sections)!=null&&Oo.length),"data-danger":!0,children:l.jsx(oS,{size:24})}),l.jsxs("span",{className:He.buttonTooltip,children:["Clear all",l.jsx("span",{className:He.shortcut,children:"X"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),In(),Ie&&jn(),Fe(!be)},children:l.jsx(sS,{size:24})}),_&&hs!=="disconnected"&&l.jsx("span",{className:`${He.mcpIndicator} ${He[hs]} ${be?He.hidden:""}`,title:hs==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:He.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:He.divider}),l.jsxs("div",{className:`${He.buttonWrapper} ${en&&typeof window<"u"&&en.x>window.innerWidth-120?He.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),In(),_s()},children:l.jsx(iS,{size:24})}),l.jsxs("span",{className:He.buttonTooltip,children:["Exit",l.jsx("span",{className:He.shortcut,children:"Esc"})]})]})]}),l.jsx(P4,{visible:Ie&&k,activeType:mt,onSelect:E=>{_t(mt===E?null:E)},isDarkMode:js,sectionCount:(zo=it==null?void 0:it.sections.length)!=null?zo:0,onDetectSections:()=>{var Ke,Ze;const E=Q4(),z=(Ke=it==null?void 0:it.sections)!=null?Ke:[],K=new Set(z.map(lt=>lt.selector)),W=E.filter(lt=>!K.has(lt.selector)),ae=[...z,...W],ye=[...(Ze=it==null?void 0:it.originalOrder)!=null?Ze:[],...W.map(lt=>lt.id)];Qt({sections:ae,originalOrder:ye,detectedAt:Date.now()})},placementCount:Pe.length,onClearPlacements:()=>{fs(E=>E+1),Us(E=>E+1),It(()=>{Qt({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ut,onBlankCanvasChange:E=>{const z={sections:[],originalOrder:[],detectedAt:Date.now()};E?(Ks.current={rearrange:it,placements:Pe},Qt(ds.current.rearrange||z),At(ds.current.placements),_t(null)):(ds.current={rearrange:it,placements:Pe},Qt(Ks.current.rearrange||z),At(Ks.current.placements)),Xt(E)},wireframePurpose:En,onWireframePurposeChange:fn,Tooltip:jr,onDragStart:(E,z)=>{var Zt;z.preventDefault();const K=yt[E];let W=null,ae=!1;const ye=z.clientX,Ke=z.clientY,Ze=z.target.closest("[data-feedback-toolbar]"),lt=(Zt=Ze==null?void 0:Ze.getBoundingClientRect().top)!=null?Zt:window.innerHeight,vt=Jt=>{const wt=Jt.clientX-ye,pt=Jt.clientY-Ke;if(!ae&&(Math.abs(wt)>4||Math.abs(pt)>4)&&(ae=!0,W=document.createElement("div"),W.className=`${Ee.dragPreview}${ut?` ${Ee.dragPreviewWireframe}`:""}`,document.body.appendChild(W)),!W)return;const ys=Math.max(0,lt-Jt.clientY),xs=Math.min(1,ys/180),bs=1-Math.pow(1-xs,2),wn=28,Hn=20,Yt=Math.min(140,K.width*.18),qt=Math.min(90,K.height*.18),vs=wn+(Yt-wn)*bs,Tn=Hn+(qt-Hn)*bs;W.style.width=`${vs}px`,W.style.height=`${Tn}px`,W.style.left=`${Jt.clientX-vs/2}px`,W.style.top=`${Jt.clientY-Tn/2}px`,W.style.opacity=`${.5+.5*bs}`,W.textContent=bs>.25?E:""},Bt=Jt=>{if(window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",Bt),W&&document.body.removeChild(W),ae){const wt=K.width,pt=K.height,ys=window.scrollY,xs=Math.max(0,Jt.clientX-wt/2),bs=Math.max(0,Jt.clientY+ys-pt/2),wn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:E,x:xs,y:bs,width:wt,height:pt,scrollY:ys,timestamp:Date.now()};At(Hn=>[...Hn,wn]),_t(null),bo.current=new Set,Qo(Hn=>Hn+1)}};window.addEventListener("mousemove",vt),window.addEventListener("mouseup",Bt)}}),l.jsx(aC,{settings:Kt,onSettingsChange:E=>fi(z=>({...z,...E})),isDarkMode:js,onToggleTheme:Qs,isDevMode:hi,connectionStatus:hs,endpoint:_,isVisible:Ue,toolbarNearBottom:!!en&&en.y<230,settingsPage:xt,onSettingsPageChange:Tt,onHideToolbar:st})]})}),(Ie||Lt)&&l.jsx("div",{className:`${Ee.blankCanvas} ${zn?Ee.visible:""} ${cn?Ee.gridActive:""}`,style:{"--canvas-opacity":Sn},"data-feedback-toolbar":!0}),Ie&&ut&&zn&&l.jsxs("div",{className:Ee.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Ee.wireframeOpacityRow,children:[l.jsx("span",{className:Ee.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Ee.wireframeOpacitySlider,min:0,max:1,step:.01,value:Sn,onChange:E=>go(Number(E.target.value))})]}),l.jsxs("div",{className:Ee.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Ee.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Ee.wireframeNoticeDivider}),l.jsx("button",{className:Ee.wireframeStartOver,onClick:()=>{fs(E=>E+1),Qt({sections:[],originalOrder:[],detectedAt:Date.now()}),ds.current={rearrange:null,placements:[]},fn(""),ed(Y)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ie||Lt)&&l.jsx(L4,{placements:Pe,onChange:At,activeComponent:Lt?null:mt,onActiveComponentChange:_t,isDarkMode:js,exiting:Lt,onInteractionChange:Cn,passthrough:!mt,extraSnapRects:it==null?void 0:it.sections.map(E=>E.currentRect),deselectSignal:As,clearSignal:Ds,wireframe:ut,onSelectionChange:(E,z)=>{bo.current=E,z||($n.current=new Set,lo(K=>K+1))},onDragMove:(E,z)=>{const K=$n.current;if(!(!K.size||!it)){if(!gn.current){gn.current=new Map;for(const W of it.sections)K.has(W.id)&&gn.current.set(W.id,{x:W.currentRect.x,y:W.currentRect.y})}for(const W of it.sections){if(!K.has(W.id)||!gn.current.get(W.id))continue;const ye=document.querySelector(`[data-rearrange-section="${W.id}"]`);ye&&(ye.style.transform=`translate(${E}px, ${z}px)`)}}},onDragEnd:(E,z,K)=>{const W=$n.current,ae=gn.current;if(gn.current=null,!(!W.size||!it||!ae)){for(const ye of W){const Ke=document.querySelector(`[data-rearrange-section="${ye}"]`);Ke&&(Ke.style.transform="")}K&&Qt(ye=>ye&&{...ye,sections:ye.sections.map(Ke=>{const Ze=ae.get(Ke.id);return Ze?{...Ke,currentRect:{...Ke.currentRect,x:Math.max(0,Ze.x+E),y:Math.max(0,Ze.y+z)}}:Ke})})}}}),(Ie||Lt)&&it&&l.jsx(e6,{rearrangeState:it,onChange:Qt,isDarkMode:js,exiting:Lt,blankCanvas:ut,extraSnapRects:Pe.map(E=>({x:E.x,y:E.y,width:E.width,height:E.height})),clearSignal:kn,deselectSignal:xo,onSelectionChange:(E,z)=>{$n.current=E,z||(bo.current=new Set,Qo(K=>K+1))},onDragMove:(E,z)=>{const K=bo.current;if(K.size){if(!gn.current){gn.current=new Map;for(const W of Pe)K.has(W.id)&&gn.current.set(W.id,{x:W.x,y:W.y})}for(const W of K){const ae=document.querySelector(`[data-design-placement="${W}"]`);ae&&(ae.style.transform=`translate(${E}px, ${z}px)`)}}},onDragEnd:(E,z,K)=>{const W=bo.current,ae=gn.current;if(gn.current=null,!(!W.size||!ae)){for(const ye of W){const Ke=document.querySelector(`[data-design-placement="${ye}"]`);Ke&&(Ke.style.transform="")}K&&At(ye=>ye.map(Ke=>{const Ze=ae.get(Ke.id);return Ze?{...Ke,x:Math.max(0,Ze.x+E),y:Math.max(0,Ze.y+z)}:Ke}))}}}),l.jsx("canvas",{ref:Uo,className:`${He.drawCanvas} ${rs?He.active:""}`,style:{opacity:Re?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:He.markersLayer,"data-feedback-toolbar":!0,children:[ce&&$e.filter(E=>!E.isFixed).map((E,z,K)=>l.jsx(o1,{annotation:E,globalIndex:$e.findIndex(W=>W.id===E.id),layerIndex:z,layerSize:K.length,isExiting:Ce,isClearing:Ye,isAnimated:ki.has(E.id),isHovered:!Ce&&ft===E.id,isDeleting:St===E.id,isEditingAny:!!G,renumberFrom:Ct,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:rn(E),onHoverEnter:W=>!Ce&&W.id!==ge.current&&Jo(W),onHoverLeave:()=>Jo(null),onClick:W=>Kt.markerClickBehavior==="delete"?eo(W.id):ls(W),onContextMenu:ls},E.id)),ce&&!Ce&&Dt.filter(E=>!E.isFixed).map(E=>l.jsx(i1,{annotation:E},E.id))]}),l.jsxs("div",{className:He.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ce&&$e.filter(E=>E.isFixed).map((E,z,K)=>l.jsx(o1,{annotation:E,globalIndex:$e.findIndex(W=>W.id===E.id),layerIndex:z,layerSize:K.length,isExiting:Ce,isClearing:Ye,isAnimated:ki.has(E.id),isHovered:!Ce&&ft===E.id,isDeleting:St===E.id,isEditingAny:!!G,renumberFrom:Ct,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:rn(E),onHoverEnter:W=>!Ce&&W.id!==ge.current&&Jo(W),onHoverLeave:()=>Jo(null),onClick:W=>Kt.markerClickBehavior==="delete"?eo(W.id):ls(W),onContextMenu:ls},E.id)),ce&&!Ce&&Dt.filter(E=>E.isFixed).map(E=>l.jsx(i1,{annotation:E,fixed:!0},E.id))]}),k&&l.jsxs("div",{className:He.overlay,"data-feedback-toolbar":!0,style:F||G?{zIndex:99999}:void 0,children:[(ee==null?void 0:ee.rect)&&!F&&!ht&&!ns&&l.jsx("div",{className:`${He.hoverHighlight} ${He.enter}`,style:{left:ee.rect.left,top:ee.rect.top,width:ee.rect.width,height:ee.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Rn.filter(E=>document.contains(E.element)).map((E,z)=>{const K=E.element.getBoundingClientRect(),W=Rn.length>1;return l.jsx("div",{className:W?He.multiSelectOutline:He.singleSelectOutline,style:{position:"fixed",left:K.left,top:K.top,width:K.width,height:K.height,...W?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},z)}),ft&&!F&&(()=>{var ae;const E=j.find(ye=>ye.id===ft);if(!(E!=null&&E.boundingBox))return null;if((ae=E.elementBoundingBoxes)!=null&&ae.length)return We.length>0?We.filter(ye=>document.contains(ye)).map((ye,Ke)=>{const Ze=ye.getBoundingClientRect();return l.jsx("div",{className:`${He.multiSelectOutline} ${He.enter}`,style:{left:Ze.left,top:Ze.top,width:Ze.width,height:Ze.height}},`hover-outline-live-${Ke}`)}):E.elementBoundingBoxes.map((ye,Ke)=>l.jsx("div",{className:`${He.multiSelectOutline} ${He.enter}`,style:{left:ye.x,top:ye.y-ct,width:ye.width,height:ye.height}},`hover-outline-${Ke}`));const z=gt&&document.contains(gt)?gt.getBoundingClientRect():null,K=z?{x:z.left,y:z.top,width:z.width,height:z.height}:{x:E.boundingBox.x,y:E.isFixed?E.boundingBox.y:E.boundingBox.y-ct,width:E.boundingBox.width,height:E.boundingBox.height},W=E.isMultiSelect;return l.jsx("div",{className:`${W?He.multiSelectOutline:He.singleSelectOutline} ${He.enter}`,style:{left:K.x,top:K.y,width:K.width,height:K.height,...W?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ee&&!F&&!ht&&!ns&&l.jsxs("div",{className:`${He.hoverTooltip} ${He.enter}`,style:{left:Math.max(8,Math.min(O.x,window.innerWidth-100)),top:Math.max(O.y-(ee.reactComponents?48:32),8)},children:[ee.reactComponents&&l.jsx("div",{className:He.hoverReactPath,children:ee.reactComponents}),l.jsx("div",{className:He.hoverElementName,children:ee.elementName})]}),F&&l.jsxs(l.Fragment,{children:[(ss=F.multiSelectElements)!=null&&ss.length?F.multiSelectElements.filter(E=>document.contains(E)).map((E,z)=>{const K=E.getBoundingClientRect();return l.jsx("div",{className:`${He.multiSelectOutline} ${Fn?He.exit:He.enter}`,style:{left:K.left,top:K.top,width:K.width,height:K.height}},`pending-multi-${z}`)}):F.targetElement&&document.contains(F.targetElement)?(()=>{const E=F.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${He.singleSelectOutline} ${Fn?He.exit:He.enter}`,style:{left:E.left,top:E.top,width:E.width,height:E.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():F.boundingBox&&l.jsx("div",{className:`${F.isMultiSelect?He.multiSelectOutline:He.singleSelectOutline} ${Fn?He.exit:He.enter}`,style:{left:F.boundingBox.x,top:F.boundingBox.y-ct,width:F.boundingBox.width,height:F.boundingBox.height,...F.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const E=F.x,z=F.isFixed?F.y:F.y-ct;return l.jsxs(l.Fragment,{children:[l.jsx(K6,{x:E,y:z,isMultiSelect:F.isMultiSelect,isExiting:Fn}),l.jsx(jd,{ref:D,element:F.element,selectedText:F.selectedText,computedStyles:F.computedStylesObj,placeholder:F.element==="Area selection"?"What should change in this area?":F.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Js,onCancel:Os,isExiting:Fn,lightMode:!js,accentColor:F.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,E/100*window.innerWidth)),...z>window.innerHeight-290?{bottom:window.innerHeight-z+20}:{top:z+20}}})]})})()]}),G&&l.jsxs(l.Fragment,{children:[(to=G.elementBoundingBoxes)!=null&&to.length?dt.length>0?dt.filter(E=>document.contains(E)).map((E,z)=>{const K=E.getBoundingClientRect();return l.jsx("div",{className:`${He.multiSelectOutline} ${He.enter}`,style:{left:K.left,top:K.top,width:K.width,height:K.height}},`edit-multi-live-${z}`)}):G.elementBoundingBoxes.map((E,z)=>l.jsx("div",{className:`${He.multiSelectOutline} ${He.enter}`,style:{left:E.x,top:E.y-ct,width:E.width,height:E.height}},`edit-multi-${z}`)):(()=>{const E=nt&&document.contains(nt)?nt.getBoundingClientRect():null,z=E?{x:E.left,y:E.top,width:E.width,height:E.height}:G.boundingBox?{x:G.boundingBox.x,y:G.isFixed?G.boundingBox.y:G.boundingBox.y-ct,width:G.boundingBox.width,height:G.boundingBox.height}:null;return z?l.jsx("div",{className:`${G.isMultiSelect?He.multiSelectOutline:He.singleSelectOutline} ${He.enter}`,style:{left:z.x,top:z.y,width:z.width,height:z.height,...G.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:$,element:G.element,selectedText:G.selectedText,computedStyles:X4(G.computedStyles),placeholder:"Edit your feedback...",initialValue:G.comment,submitLabel:"Save",onSubmit:pi,onCancel:ei,onDelete:()=>eo(G.id),isExiting:Mo,lightMode:!js,accentColor:G.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const E=G.isFixed?G.y:G.y-ct;return{left:Math.max(160,Math.min(window.innerWidth-160,G.x/100*window.innerWidth)),...E>window.innerHeight-290?{bottom:window.innerHeight-E+20}:{top:E+20}}})()})]}),ns&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:To,className:He.dragSelection}),l.jsx("div",{ref:Lo,className:He.highlightsContainer})]})]})]}),document.body)}const _p=y.createContext({});function Rc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const cC=typeof window<"u",gp=cC?y.useLayoutEffect:y.useEffect,zd=y.createContext(null);function yp(t,n){t.indexOf(n)===-1&&t.push(n)}function _l(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ua=(t,n,i)=>i>n?n:i<t?t:i;let xp=()=>{};const tr={},ub=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function db(t){return typeof t=="object"&&t!==null}const fb=t=>/^0[^.\s]+$/u.test(t);function hb(t){let n;return()=>(n===void 0&&(n=t()),n)}const zi=t=>t,uC=(t,n)=>i=>n(t(i)),Bc=(...t)=>t.reduce(uC),gl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class bp{constructor(){this.subscriptions=[]}add(n){return yp(this.subscriptions,n),()=>_l(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const li=t=>t*1e3,Oi=t=>t/1e3;function mb(t,n){return n?t*(1e3/n):0}const dC=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},pb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,fC=1e-7,hC=12;function mC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=pb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>fC&&++h<hC);return d}function Lc(t,n,i,a){if(t===n&&i===a)return zi;const c=u=>mC(u,0,1,t,i);return u=>u===0||u===1?u:pb(c(u),n,a)}const _b=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,gb=t=>n=>1-t(1-n),yb=Lc(.33,1.53,.69,.99),vp=gb(yb),xb=_b(vp),bb=t=>t>=1?1:(t*=2)<1?.5*vp(t):.5*(2-Math.pow(2,-10*(t-1))),wp=t=>1-Math.sin(Math.acos(t)),vb=gb(wp),wb=_b(wp),pC=Lc(.42,0,1,1),_C=Lc(0,0,.58,1),Sb=Lc(.42,0,.58,1),Cb=t=>Array.isArray(t)&&typeof t[0]!="number";function kb(t,n){return Cb(t)?t[dC(0,t.length,n)]:t}const jb=t=>Array.isArray(t)&&typeof t[0]=="number",gC={linear:zi,easeIn:pC,easeInOut:Sb,easeOut:_C,circIn:wp,circInOut:wb,circOut:vb,backIn:vp,backInOut:xb,backOut:yb,anticipate:bb},yC=t=>typeof t=="string",c1=t=>{if(jb(t)){xp(t.length===4);const[n,i,a,c]=t;return Lc(n,i,a,c)}else if(yC(t))return gC[t];return t},od=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function xC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const bC=40;function Mb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=od.reduce((B,A)=>(B[A]=xC(u),B),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,k=()=>{const B=tr.useManualTiming,A=B?c.timestamp:performance.now();i=!1,B||(c.delta=a?1e3/60:Math.max(Math.min(A-c.timestamp,bC),1)),c.timestamp=A,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(k))},C=()=>{i=!0,a=!0,c.isProcessing||t(k)};return{schedule:od.reduce((B,A)=>{const P=d[A];return B[A]=(V,q=!1,U=!1)=>(i||C(),P.schedule(V,q,U)),B},{}),cancel:B=>{for(let A=0;A<od.length;A++)d[od[A]].cancel(B)},state:c,steps:d}}const{schedule:Jn,cancel:Ma,state:Ro,steps:lm}=Mb(typeof requestAnimationFrame<"u"?requestAnimationFrame:zi,!0);let md;function vC(){md=void 0}const qo={now:()=>(md===void 0&&qo.set(Ro.isProcessing||tr.useManualTiming?Ro.timestamp:performance.now()),md),set:t=>{md=t,queueMicrotask(vC)}},Tb=t=>n=>typeof n=="string"&&n.startsWith(t),Eb=Tb("--"),wC=Tb("var(--"),Sp=t=>wC(t)?SC.test(t.split("/*")[0].trim()):!1,SC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function u1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const bl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Mc={...bl,transform:t=>ua(0,1,t)},id={...bl,default:1},vc=t=>Math.round(t*1e5)/1e5,Cp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function CC(t){return t==null}const kC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kp=(t,n)=>i=>!!(typeof i=="string"&&kC.test(i)&&i.startsWith(t)||n&&!CC(i)&&Object.prototype.hasOwnProperty.call(i,n)),Ab=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Cp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},jC=t=>ua(0,255,t),cm={...bl,transform:t=>Math.round(jC(t))},Mr={test:kp("rgb","red"),parse:Ab("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+cm.transform(t)+", "+cm.transform(n)+", "+cm.transform(i)+", "+vc(Mc.transform(a))+")"};function MC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const zm={test:kp("#"),parse:MC,transform:Mr.transform},Oc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Qa=Oc("deg"),ca=Oc("%"),Mt=Oc("px"),TC=Oc("vh"),EC=Oc("vw"),d1={...ca,parse:t=>ca.parse(t)/100,transform:t=>ca.transform(t*100)},dl={test:kp("hsl","hue"),parse:Ab("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+ca.transform(vc(n))+", "+ca.transform(vc(i))+", "+vc(Mc.transform(a))+")"},ro={test:t=>Mr.test(t)||zm.test(t)||dl.test(t),parse:t=>Mr.test(t)?Mr.parse(t):dl.test(t)?dl.parse(t):zm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Mr.transform(t):dl.transform(t),getAnimatableNone:t=>{const n=ro.parse(t);return n.alpha=0,ro.transform(n)}},AC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function DC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Cp))==null?void 0:n.length)||0)+(((i=t.match(AC))==null?void 0:i.length)||0)>0}const Db="number",Nb="color",NC="var",RC="var(",f1="${}",BC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(BC,p=>(ro.test(p)?(a.color.push(u),c.push(Nb),i.push(ro.parse(p))):p.startsWith(RC)?(a.var.push(u),c.push(NC),i.push(p)):(a.number.push(u),c.push(Db),i.push(parseFloat(p))),++u,f1)).split(f1);return{values:i,split:h,indexes:a,types:c}}function LC(t){return yl(t).values}function Rb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Db?c+=vc(a[u]):d===Nb?c+=ro.transform(a[u]):c+=a[u]}return c}}function OC(t){return Rb(yl(t))}const zC=t=>typeof t=="number"?0:ro.test(t)?ro.getAnimatableNone(t):t,$C=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:zC(t);function IC(t){const n=yl(t);return Rb(n)(n.values.map((a,c)=>$C(a,n.split[c])))}const Zi={test:DC,parse:LC,createTransformer:OC,getAnimatableNone:IC};function um(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function PC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=um(p,h,t+1/3),u=um(p,h,t),d=um(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Ed(t,n){return i=>i>0?n:t}const us=(t,n,i)=>t+(n-t)*i,dm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},HC=[zm,Mr,dl],UC=t=>HC.find(n=>n.test(t));function h1(t){const n=UC(t);if(!n)return!1;let i=n.parse(t);return n===dl&&(i=PC(i)),i}const m1=(t,n)=>{const i=h1(t),a=h1(n);if(!i||!a)return Ed(t,n);const c={...i};return u=>(c.red=dm(i.red,a.red,u),c.green=dm(i.green,a.green,u),c.blue=dm(i.blue,a.blue,u),c.alpha=us(i.alpha,a.alpha,u),Mr.transform(c))},$m=new Set(["none","hidden"]);function VC(t,n){return $m.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function YC(t,n){return i=>us(t,n,i)}function jp(t){return typeof t=="number"?YC:typeof t=="string"?Sp(t)?Ed:ro.test(t)?m1:XC:Array.isArray(t)?Bb:typeof t=="object"?ro.test(t)?m1:WC:Ed}function Bb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>jp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function WC(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=jp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function FC(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const XC=(t,n)=>{const i=Zi.createTransformer(n),a=yl(t),c=yl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?$m.has(t)&&!c.values.length||$m.has(n)&&!a.values.length?VC(t,n):Bc(Bb(FC(a,c),c.values),i):Ed(t,n)};function Lb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?us(t,n,i):jp(t)(t,n)}const qC=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>Jn.update(n,i),stop:()=>Ma(n),now:()=>Ro.isProcessing?Ro.timestamp:qo.now()}},Ob=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function Mp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function zb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Mp(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Oi(c)}}const Hs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Im(t,n){return t*Math.sqrt(1-n*n)}const GC=12;function KC(t,n,i){let a=i;for(let c=1;c<GC;c++)a=a-t(a)/n(a);return a}const fm=.001;function QC({duration:t=Hs.duration,bounce:n=Hs.bounce,velocity:i=Hs.velocity,mass:a=Hs.mass}){let c,u,d=1-n;d=ua(Hs.minDamping,Hs.maxDamping,d),t=ua(Hs.minDuration,Hs.maxDuration,Oi(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,w=Im(g,d),S=Math.exp(-x);return fm-b/w*S},u=g=>{const x=g*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-x),k=Im(Math.pow(g,2),d);return(-c(g)+fm>0?-1:1)*((b-w)*S)/k}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-fm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=KC(c,u,h);if(t=li(t),isNaN(p))return{stiffness:Hs.stiffness,damping:Hs.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const ZC=["duration","bounce"],JC=["stiffness","damping","mass"];function p1(t,n){return n.some(i=>t[i]!==void 0)}function e3(t){let n={velocity:Hs.velocity,stiffness:Hs.stiffness,damping:Hs.damping,mass:Hs.mass,isResolvedFromDuration:!1,...t};if(!p1(t,JC)&&p1(t,ZC))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ua(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Hs.mass,stiffness:c,damping:u}}else{const i=QC({...t,velocity:0});n={...n,...i,mass:Hs.mass},n.isResolvedFromDuration=!0}return n}function Tc(t=Hs.visualDuration,n=Hs.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=e3({...i,velocity:-Oi(i.velocity||0)}),S=b||0,k=g/(2*Math.sqrt(p*_)),C=d-u,j=Oi(Math.sqrt(p/_)),R=Math.abs(C)<5;a||(a=R?Hs.restSpeed.granular:Hs.restSpeed.default),c||(c=R?Hs.restDelta.granular:Hs.restDelta.default);let B,A,P,V,q,U;if(k<1)P=Im(j,k),V=(S+k*j*C)/P,B=ce=>{const le=Math.exp(-k*j*ce);return d-le*(V*Math.sin(P*ce)+C*Math.cos(P*ce))},q=k*j*V+C*P,U=k*j*C-V*P,A=ce=>Math.exp(-k*j*ce)*(q*Math.sin(P*ce)+U*Math.cos(P*ce));else if(k===1){B=le=>d-Math.exp(-j*le)*(C+(S+j*C)*le);const ce=S+j*C;A=le=>Math.exp(-j*le)*(j*ce*le-S)}else{const ce=j*Math.sqrt(k*k-1);B=ee=>{const fe=Math.exp(-k*j*ee),O=Math.min(ce*ee,300);return d-fe*((S+k*j*C)*Math.sinh(O)+ce*C*Math.cosh(O))/ce};const le=(S+k*j*C)/ce,Ce=k*j*le-C*ce,Ae=k*j*C-le*ce;A=ee=>{const fe=Math.exp(-k*j*ee),O=Math.min(ce*ee,300);return fe*(Ce*Math.sinh(O)+Ae*Math.cosh(O))}}const J={calculatedDuration:w&&x||null,velocity:ce=>li(A(ce)),next:ce=>{if(!w&&k<1){const Ce=Math.exp(-k*j*ce),Ae=Math.sin(P*ce),ee=Math.cos(P*ce),fe=d-Ce*(V*Ae+C*ee),O=li(Ce*(q*Ae+U*ee));return h.done=Math.abs(O)<=a&&Math.abs(d-fe)<=c,h.value=h.done?d:fe,h}const le=B(ce);if(w)h.done=ce>=x;else{const Ce=li(A(ce));h.done=Math.abs(Ce)<=a&&Math.abs(d-le)<=c}return h.value=h.done?d:le,h},toString:()=>{const ce=Math.min(Mp(J),Ad),le=Ob(Ce=>J.next(ce*Ce).value,ce,30);return ce+"ms "+le},toTransition:()=>{}};return J}Tc.applyToOptions=t=>{const n=zb(t,100,Tc);return t.ease=n.ease,t.duration=li(n.duration),t.type="keyframes",t};const t3=5;function $b(t,n,i){const a=Math.max(n-t3,0);return mb(i-t(a),n-a)}function Pm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=U=>h!==void 0&&U<h||p!==void 0&&U>p,S=U=>h===void 0?p:p===void 0||Math.abs(h-U)<Math.abs(p-U)?h:p;let k=i*n;const C=x+k,j=d===void 0?C:d(C);j!==C&&(k=j-x);const R=U=>-k*Math.exp(-U/a),B=U=>j+R(U),A=U=>{const J=R(U),ce=B(U);b.done=Math.abs(J)<=g,b.value=b.done?j:ce};let P,V;const q=U=>{w(b.value)&&(P=U,V=Tc({keyframes:[b.value,S(b.value)],velocity:$b(B,U,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return q(0),{calculatedDuration:null,next:U=>{let J=!1;return!V&&P===void 0&&(J=!0,A(U),q(U)),P!==void 0&&U>=P?V.next(U-P):(!J&&A(U),b)}}}function n3(t,n,i){const a=[],c=i||tr.mix||Lb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||zi:n;h=Bc(p,h)}a.push(h)}return a}function Ib(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(xp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=n3(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=gl(t[x],t[x+1],_);return h[x](b)};return i?_=>g(ua(t[0],t[u-1],_)):g}function Pb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=gl(0,n,a);t.push(us(i,1,c))}}function Hb(t){const n=[0];return Pb(n,t.length-1),n}function s3(t,n){return t.map(i=>i*n)}function o3(t,n){return t.map(()=>n||Sb).splice(0,t.length-1)}function wc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=Cb(a)?a.map(c1):c1(a),u={done:!1,value:n[0]},d=s3(i&&i.length===n.length?i:Hb(n),t),h=Ib(d,n,{ease:Array.isArray(c)?c:o3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const i3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(i3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const a3={decay:Pm,inertia:Pm,tween:wc,keyframes:wc,spring:Tc};function Ub(t){typeof t.type=="string"&&(t.type=a3[t.type])}class Tp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const r3=t=>t/100;class Dd extends Tp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==qo.now()&&this.tick(qo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Ub(n);const{type:i=wc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||wc;p!==wc&&typeof h[0]!="number"&&(this.mixKeyframes=Bc(r3,Lb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Mp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:k,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const j=this.currentTime-g*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?j<0:j>c;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let B=this.currentTime,A=a;if(x){const U=Math.min(this.currentTime,c)/h;let J=Math.floor(U),ce=U%1;!ce&&U>=1&&(ce=1),ce===1&&J--,J=Math.min(J,x+1),!!(J%2)&&(b==="reverse"?(ce=1-ce,w&&(ce-=w/h)):b==="mirror"&&(A=d)),B=ua(0,1,ce)*h}let P;R?(this.delayState.value=_[0],P=this.delayState):P=A.next(B),u&&!R&&(P.value=u(P.value));let{done:V}=P;!R&&p!==null&&(V=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return q&&S!==Pm&&(P.value=$d(_,this.options,C,this.speed)),k&&k(P.value),q&&this.finish(),P}then(n,i){return this.finished.then(n,i)}get duration(){return Oi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(this.currentTime)}set time(n){n=li(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return $b(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(qo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Oi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=qC,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function l3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Tr=t=>t*180/Math.PI,Hm=t=>{const n=Tr(Math.atan2(t[1],t[0]));return Um(n)},c3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hm,rotateZ:Hm,skewX:t=>Tr(Math.atan(t[1])),skewY:t=>Tr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Um=t=>(t=t%360,t<0&&(t+=360),t),_1=Hm,g1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),y1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),u3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:g1,scaleY:y1,scale:t=>(g1(t)+y1(t))/2,rotateX:t=>Um(Tr(Math.atan2(t[6],t[5]))),rotateY:t=>Um(Tr(Math.atan2(-t[2],t[0]))),rotateZ:_1,rotate:_1,skewX:t=>Tr(Math.atan(t[4])),skewY:t=>Tr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Vm(t){return t.includes("scale")?1:0}function Ym(t,n){if(!t||t==="none")return Vm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=u3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=c3,c=h}if(!c)return Vm(n);const u=a[n],d=c[1].split(",").map(f3);return typeof u=="function"?u(d):d[u]}const d3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Ym(i,n)};function f3(t){return parseFloat(t.trim())}const vl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wl=new Set(vl),x1=t=>t===bl||t===Mt,h3=new Set(["x","y","z"]),m3=vl.filter(t=>!h3.has(t));function p3(t){const n=[];return m3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const er={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Ym(n,"x"),y:(t,{transform:n})=>Ym(n,"y")};er.translateX=er.x;er.translateY=er.y;const Er=new Set;let Wm=!1,Fm=!1,Xm=!1;function Vb(){if(Fm){const t=Array.from(Er).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=p3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Fm=!1,Wm=!1,Er.forEach(t=>t.complete(Xm)),Er.clear()}function Yb(){Er.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fm=!0)})}function _3(){Xm=!0,Yb(),Vb(),Xm=!1}class Ep{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Er.add(this),Wm||(Wm=!0,Jn.read(Yb),Jn.resolveKeyframes(Vb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}l3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Er.delete(this)}cancel(){this.state==="scheduled"&&(Er.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const g3=t=>t.startsWith("--");function Wb(t,n,i){g3(n)?t.style.setProperty(n,i):t.style[n]=i}const y3={};function Fb(t,n){const i=hb(t);return()=>{var a;return(a=y3[n])!=null?a:i()}}const x3=Fb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Xb=Fb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_c=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,b1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_c([0,.65,.55,1]),circOut:_c([.55,0,1,.45]),backIn:_c([.31,.01,.66,-.59]),backOut:_c([.33,1.53,.69,.99])};function qb(t,n){if(t)return typeof t=="function"?Xb()?Ob(t,n):"ease-out":jb(t)?_c(t):Array.isArray(t)?t.map(i=>qb(i,n)||b1.easeOut):b1[t]}function b3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=qb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Ap(t){return typeof t=="function"&&"applyToOptions"in t}function v3({type:t,...n}){var i,a;return Ap(t)&&Xb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Gb extends Tp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,xp(typeof n.type!="string");const g=v3(n);this.animation=b3(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),Wb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Oi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=li(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&x3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),zi):c(this)}}const Kb={anticipate:bb,backInOut:xb,circInOut:wb};function w3(t){return t in Kb}function S3(t){typeof t.ease=="string"&&w3(t.ease)&&(t.ease=Kb[t.ease])}const hm=10;class C3 extends Gb{constructor(n){S3(n),Ub(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Dd({...d,autoplay:!1}),p=Math.max(hm,qo.now()-this.startTime),g=ua(0,hm,p-hm),_=h.sample(p).value,{name:x}=this.options;u&&x&&Wb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const v1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Zi.test(t)||t==="0")&&!t.startsWith("url("));function k3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function j3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=v1(c,n),h=v1(u,n);return!d||!h?!1:k3(t)||(i==="spring"||Ap(i))&&a}function qm(t){t.duration=0,t.type="keyframes"}const Qb=new Set(["opacity","clipPath","filter","transform"]),M3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function T3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&M3.test(t[n]))return!0;return!1}const E3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),A3=hb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function D3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return A3()&&i&&(Qb.has(i)||E3.has(i)&&T3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const N3=40;class R3 extends Tp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var S;super(),this.stop=()=>{var k,C;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(C=this.keyframeResolver)==null||C.cancel()},this.createdAt=qo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Ep;this.keyframeResolver=new w(h,(k,C,j)=>this.onKeyframesResolved(k,C,b,!j),p,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var j,R;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=qo.now();let x=!0;j3(n,u,d,h)||(x=!1,(tr.instantAnimations||!p)&&(_==null||_($d(n,a,i))),n[0]=n[n.length-1],qm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>N3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!g&&D3(w),k=(R=(j=w.motionValue)==null?void 0:j.owner)==null?void 0:R.current;let C;if(S)try{C=new C3({...w,element:k})}catch{C=new Dd(w)}else C=new Dd(w);C.finished.then(()=>{this.notifyFinished()}).catch(zi),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),_3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class B3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return w1(this.animations,"duration")}get iterationDuration(){return w1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function w1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class L3 extends B3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Zb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const O3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function z3(t){const n=O3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Jb(t,n,i=1){const[a,c]=z3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return ub(d)?parseFloat(d):d}return Sp(c)?Jb(c,n,i+1):c}const $3={type:"spring",stiffness:500,damping:25,restSpeed:10},I3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),P3={type:"keyframes",duration:.8},H3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},U3=(t,{keyframes:n})=>n.length>2?P3:wl.has(t)?t.startsWith("scale")?I3(n[1]):$3:H3;function e5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Dp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?e5(i,t):i}const V3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Y3(t){for(const n in t)if(!V3.has(n))return!0;return!1}const Np=(t,n,i,a={},c,u)=>d=>{const h=Dp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-li(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};Y3(h)||Object.assign(_,U3(t,_)),_.duration&&(_.duration=li(_.duration)),_.repeatDelay&&(_.repeatDelay=li(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(qm(_),_.delay===0&&(x=!0)),(tr.instantAnimations||tr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,qm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(_.keyframes,h);if(b!==void 0){Jn.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Dd(_):new R3(_)};function S1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Rp(t,n,i,a){if(typeof n=="function"){const[c,u]=S1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=S1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Ar(t,n,i){const a=t.getProps();return Rp(a,n,i!==void 0?i:a.custom,t)}const t5=new Set(["width","height","top","left","right","bottom",...vl]),C1=30,W3=t=>!isNaN(parseFloat(t)),Sc={current:void 0};class F3{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=qo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=qo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=W3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new bp);const a=this.events[n].add(i);return n==="change"?()=>{a(),Jn.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Sc.current&&Sc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=qo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>C1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,C1);return mb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nr(t,n){return new F3(t,n)}const Gm=t=>Array.isArray(t);function X3(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,nr(i))}function q3(t){return Gm(t)?t[t.length-1]||0:t}function G3(t,n){const i=Ar(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=q3(u[d]);X3(t,d,h)}}const _o=t=>!!(t&&t.getVelocity);function K3(t){return!!(_o(t)&&t.add)}function Km(t,n){const i=t.getValue("willChange");if(K3(i))return i.add(n);if(!i&&tr.WillChange){const a=new tr.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Bp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Q3="framerAppearId",n5="data-"+Bp(Q3);function s5(t){return t.props[n5]}function Z3({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Lp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?e5(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),k=h[w];if(k===void 0||x&&Z3(x,w))continue;const C={delay:i,...Dp(u||{},w)},j=S.get();if(j!==void 0&&!S.isAnimating()&&!Array.isArray(k)&&k===j&&!C.velocity){Jn.update(()=>S.set(k));continue}let R=!1;if(window.MotionHandoffAnimation){const P=s5(t);if(P){const V=window.MotionHandoffAnimation(P,w,Jn);V!==null&&(C.startTime=V,R=!0)}}Km(t,w);const B=g!=null?g:t.shouldReduceMotion;S.start(Np(w,S,k,B&&t5.has(w)?{type:!1}:C,t,R));const A=S.animation;A&&_.push(A)}if(d){const w=()=>Jn.update(()=>{d&&G3(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Qm(t,n,i={}){var p;const a=Ar(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Lp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return J3(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function J3(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Qm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Zb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function ek(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Qm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Qm(t,n,i);else{const c=typeof n=="function"?Ar(t,n,i.custom):n;a=Promise.all(Lp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const tk={test:t=>t==="auto",parse:t=>t},o5=t=>n=>n.test(t),i5=[bl,Mt,ca,Qa,EC,TC,tk],k1=t=>i5.find(o5(t));function nk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||fb(t):!0}const sk=new Set(["brightness","contrast","saturate","opacity"]);function ok(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(Cp)||[];if(!a)return t;const c=i.replace(a,"");let u=sk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const ik=/\b([a-z-]*)\(.*?\)/gu,Zm={...Zi,getAnimatableNone:t=>{const n=t.match(ik);return n?n.map(ok).join(" "):t}},Jm={...Zi,getAnimatableNone:t=>{const n=Zi.parse(t);return Zi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},j1={...bl,transform:Math.round},ak={rotate:Qa,rotateX:Qa,rotateY:Qa,rotateZ:Qa,scale:id,scaleX:id,scaleY:id,scaleZ:id,skew:Qa,skewX:Qa,skewY:Qa,distance:Mt,translateX:Mt,translateY:Mt,translateZ:Mt,x:Mt,y:Mt,z:Mt,perspective:Mt,transformPerspective:Mt,opacity:Mc,originX:d1,originY:d1,originZ:Mt},Op={borderWidth:Mt,borderTopWidth:Mt,borderRightWidth:Mt,borderBottomWidth:Mt,borderLeftWidth:Mt,borderRadius:Mt,borderTopLeftRadius:Mt,borderTopRightRadius:Mt,borderBottomRightRadius:Mt,borderBottomLeftRadius:Mt,width:Mt,maxWidth:Mt,height:Mt,maxHeight:Mt,top:Mt,right:Mt,bottom:Mt,left:Mt,inset:Mt,insetBlock:Mt,insetBlockStart:Mt,insetBlockEnd:Mt,insetInline:Mt,insetInlineStart:Mt,insetInlineEnd:Mt,padding:Mt,paddingTop:Mt,paddingRight:Mt,paddingBottom:Mt,paddingLeft:Mt,paddingBlock:Mt,paddingBlockStart:Mt,paddingBlockEnd:Mt,paddingInline:Mt,paddingInlineStart:Mt,paddingInlineEnd:Mt,margin:Mt,marginTop:Mt,marginRight:Mt,marginBottom:Mt,marginLeft:Mt,marginBlock:Mt,marginBlockStart:Mt,marginBlockEnd:Mt,marginInline:Mt,marginInlineStart:Mt,marginInlineEnd:Mt,fontSize:Mt,backgroundPositionX:Mt,backgroundPositionY:Mt,...ak,zIndex:j1,fillOpacity:Mc,strokeOpacity:Mc,numOctaves:j1},rk={...Op,color:ro,backgroundColor:ro,outlineColor:ro,fill:ro,stroke:ro,borderColor:ro,borderTopColor:ro,borderRightColor:ro,borderBottomColor:ro,borderLeftColor:ro,filter:Zm,WebkitFilter:Zm,mask:Jm,WebkitMask:Jm},a5=t=>rk[t],lk=new Set([Zm,Jm]);function r5(t,n){let i=a5(t);return lk.has(i)||(i=Zi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const ck=new Set(["auto","none","0"]);function uk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!ck.has(u)&&yl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=r5(i,c)}class dk extends Ep{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),Sp(x))){const b=Jb(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!t5.has(a)||n.length!==2)return;const[c,u]=n,d=k1(c),h=k1(u),p=u1(c),g=u1(u);if(p!==g&&er[a]){this.needsMeasurement=!0;return}if(d!==h)if(x1(d)&&x1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else er[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||nk(n[c]))&&a.push(c);a.length&&uk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=er[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=er[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function zp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const l5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function pd(t){return db(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:$p}=Mb(queueMicrotask,!1),Ki={x:!1,y:!1};function c5(){return Ki.x||Ki.y}function fk(t){return t==="x"||t==="y"?Ki[t]?null:(Ki[t]=!0,()=>{Ki[t]=!1}):Ki.x||Ki.y?null:(Ki.x=Ki.y=!0,()=>{Ki.x=Ki.y=!1})}function u5(t,n){const i=zp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function hk(t){return!(t.pointerType==="touch"||c5())}function mk(t,n,i={}){const[a,c,u]=u5(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",S)},x=C=>{g&&(g(C),g=void 0),_()},b=C=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(C))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=C=>{if(C.pointerType!=="touch"){if(h){p=!0;return}x(C)}},k=C=>{if(!hk(C))return;p=!1;const j=n(d,C);typeof j=="function"&&(g=j,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",k,c),d.addEventListener("pointerdown",w,c)}),u}const d5=(t,n)=>n?t===n?!0:d5(t,n.parentElement):!1,Ip=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,pk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function _k(t){return pk.has(t.tagName)||t.isContentEditable===!0}const gk=new Set(["INPUT","SELECT","TEXTAREA"]);function yk(t){return gk.has(t.tagName)||t.isContentEditable===!0}const _d=new WeakSet;function M1(t){return n=>{n.key==="Enter"&&t(n)}}function mm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const xk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=M1(()=>{if(_d.has(i))return;mm(i,"down");const c=M1(()=>{mm(i,"up")}),u=()=>mm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function T1(t){return Ip(t)&&!c5()}const E1=new WeakSet;function bk(t,n,i={}){const[a,c,u]=u5(t,i),d=h=>{const p=h.currentTarget;if(!T1(h)||E1.has(h))return;_d.add(p),i.stopPropagation&&E1.add(h);const g=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),_d.has(p)&&_d.delete(p),T1(w)&&typeof g=="function"&&g(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||d5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),pd(h)&&(h.addEventListener("focus",g=>xk(g,c)),!_k(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return db(t)&&"ownerSVGElement"in t}const gd=new WeakMap;let Za;const f5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],vk=f5("inline","width","offsetWidth"),wk=f5("block","height","offsetHeight");function Sk({target:t,borderBoxSize:n}){var i;(i=gd.get(t))==null||i.forEach(a=>{a(t,{get width(){return vk(t,n)},get height(){return wk(t,n)}})})}function Ck(t){t.forEach(Sk)}function kk(){typeof ResizeObserver>"u"||(Za=new ResizeObserver(Ck))}function jk(t,n){Za||kk();const i=zp(t);return i.forEach(a=>{let c=gd.get(a);c||(c=new Set,gd.set(a,c)),c.add(n),Za==null||Za.observe(a)}),()=>{i.forEach(a=>{const c=gd.get(a);c==null||c.delete(n),c!=null&&c.size||Za==null||Za.unobserve(a)})}}const yd=new Set;let fl;function Mk(){fl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};yd.forEach(n=>n(t))},window.addEventListener("resize",fl)}function Tk(t){return yd.add(t),fl||Mk(),()=>{yd.delete(t),!yd.size&&typeof fl=="function"&&(window.removeEventListener("resize",fl),fl=void 0)}}function A1(t,n){return typeof t=="function"?Tk(t):jk(t,n)}function h5(t){return Id(t)&&t.tagName==="svg"}function Ek(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Ib(c,u,d);return n?h(a):h}const Ak=[...i5,ro,Zi],Dk=t=>Ak.find(o5(t)),D1=()=>({translate:0,scale:1,origin:0,originPoint:0}),hl=()=>({x:D1(),y:D1()}),N1=()=>({min:0,max:0}),ao=()=>({x:N1(),y:N1()}),Ec=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ac(t){return typeof t=="string"||Array.isArray(t)}const Pp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hp=["initial",...Pp];function Hd(t){return Pd(t.animate)||Hp.some(n=>Ac(t[n]))}function m5(t){return!!(Hd(t)||t.variants)}function Nk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(_o(c))t.addValue(a,c);else if(_o(u))t.addValue(a,nr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,nr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const ep={current:null},p5={current:!1},Rk=typeof window<"u";function Bk(){if(p5.current=!0,!!Rk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>ep.current=t.matches;t.addEventListener("change",n),n()}else ep.current=!1}const R1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Nd={};function _5(t){Nd=t}function Lk(){return Nd}class g5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ep,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=qo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Jn.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=m5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&_o(S)&&S.set(g[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Ec.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(p5.current||Bk(),this.shouldReduceMotion=ep.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Ma(this.notifyUpdate),Ma(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Qb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Gb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:li(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=wl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&Jn.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Nd){const i=Nd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ao()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<R1.length;a++){const c=R1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Nk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=nr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(ub(a)||fb(a))?a=parseFloat(a):!Dk(a)&&Zi.test(i)&&(a=r5(n,i)),this.setBaseTarget(n,_o(a)?a.get():a)),_o(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Rp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!_o(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new bp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){$p.render(this.render)}}class y5 extends g5{constructor(){super(...arguments),this.KeyframeResolver=dk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;_o(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class sr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function x5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function Ok({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function zk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function pm(t){return t===void 0||t===1}function tp({scale:t,scaleX:n,scaleY:i}){return!pm(t)||!pm(n)||!pm(i)}function Cr(t){return tp(t)||b5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function b5(t){return B1(t.x)||B1(t.y)}function B1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function L1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function np(t,n=0,i=1,a,c){t.min=L1(t.min,n,i,a,c),t.max=L1(t.max,n,i,a,c)}function v5(t,{x:n,y:i}){np(t.x,n.translate,n.scale,n.originPoint),np(t.y,i.translate,i.scale,i.originPoint)}const O1=.999999999999,z1=1.0000000000001;function $k(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ra(t.x,-u.scroll.offset.x),ra(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,v5(t,d)),a&&Cr(u.latestValues)&&xd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<z1&&n.x>O1&&(n.x=1),n.y<z1&&n.y>O1&&(n.y=1)}function ra(t,n){t.min+=n,t.max+=n}function $1(t,n,i,a,c=.5){const u=us(t.min,t.max,c);np(t,n,i,u,a)}function I1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function xd(t,n,i){const a=i!=null?i:t;$1(t.x,I1(n.x,a.x),n.scaleX,n.scale,n.originX),$1(t.y,I1(n.y,a.y),n.scaleY,n.scale,n.originY)}function w5(t,n){return x5(zk(t.getBoundingClientRect(),n))}function Ik(t,n,i){const a=w5(t,i),{scroll:c}=n;return c&&(ra(a.x,c.offset.x),ra(a.y,c.offset.y)),a}const Pk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Hk=vl.length;function Uk(t,n,i){let a="",c=!0;for(let u=0;u<Hk;u++){const d=vl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=l5(h,Op[d]);if(!p){c=!1;const _=Pk[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Up(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(wl.has(p)){d=!0;continue}else if(Eb(p)){c[p]=g;continue}else{const _=l5(g,Op[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=Uk(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function S5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function P1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const fc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Mt.test(t))t=parseFloat(t);else return t;const i=P1(t,n.target.x),a=P1(t,n.target.y);return`${i}% ${a}%`}},Vk={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Zi.parse(t);if(c.length>5)return a;const u=Zi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=us(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},sp={borderRadius:{...fc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fc,borderTopRightRadius:fc,borderBottomLeftRadius:fc,borderBottomRightRadius:fc,boxShadow:Vk};function C5(t,{layout:n,layoutId:i}){return wl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!sp[t]||t==="opacity")}function Vp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(_o(a[h])||c&&_o(c[h])||C5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function Yk(t){return window.getComputedStyle(t)}class k5 extends y5{constructor(){super(...arguments),this.type="html",this.renderInstance=S5}readValueFromInstance(n,i){var a;if(wl.has(i))return(a=this.projection)!=null&&a.isProjecting?Vm(i):d3(n,i);{const c=Yk(n),u=(Eb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return w5(n,i)}build(n,i,a){Up(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Vp(n,i,a)}}function Wk(t,n){return t in n}class Fk extends g5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(Wk(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return ao()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const Xk={offset:"stroke-dashoffset",array:"stroke-dasharray"},qk={offset:"strokeDashoffset",array:"strokeDasharray"};function Gk(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?Xk:qk;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const Kk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function j5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var w,S;if(Up(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const k of Kk)x[k]!==void 0&&(b[k]=x[k],delete x[k]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&Gk(x,c,u,d,!1)}const M5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),T5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Qk(t,n,i,a){S5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(M5.has(c)?c:Bp(c),n.attrs[c])}function E5(t,n,i){const a=Vp(t,n,i);for(const c in t)if(_o(t[c])||_o(n[c])){const u=vl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class A5 extends y5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ao}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(wl.has(i)){const a=a5(i);return a&&a.default||0}return i=M5.has(i)?i:Bp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return E5(n,i,a)}build(n,i,a){j5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){Qk(n,i,a,c)}mount(n){this.isSVGTag=T5(n.tagName),super.mount(n)}}const Zk=Hp.length;function D5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?D5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<Zk;i++){const a=Hp[i],c=t.props[a];(Ac(c)||c===!1)&&(n[a]=c)}return n}function N5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const Jk=[...Pp].reverse(),e8=Pp.length;function t8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>ek(t,i,a)))}function n8(t){let n=t8(t),i=H1(),a=!0,c=!1;const u=g=>(_,x)=>{var w;const b=Ar(t,x,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:k,...C}=b;_={..._,...C,...k}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=D5(t.parent)||{},b=[],w=new Set;let S={},k=1/0;for(let j=0;j<e8;j++){const R=Jk[j],B=i[R],A=_[R]!==void 0?_[R]:x[R],P=Ac(A),V=R===g?B.isActive:null;V===!1&&(k=j);let q=A===x[R]&&A!==_[R]&&P;if(q&&(a||c)&&t.manuallyAnimateOnMount&&(q=!1),B.protectedKeys={...S},!B.isActive&&V===null||!A&&!B.prevProp||Pd(A)||typeof A=="boolean")continue;if(R==="exit"&&B.isActive&&V!==!0){B.prevResolvedValues&&(S={...S,...B.prevResolvedValues});continue}const U=s8(B.prevProp,A);let J=U||R===g&&B.isActive&&!q&&P||j>k&&P,ce=!1;const le=Array.isArray(A)?A:[A];let Ce=le.reduce(u(R),{});V===!1&&(Ce={});const{prevResolvedValues:Ae={}}=B,ee={...Ae,...Ce},fe=F=>{J=!0,w.has(F)&&(ce=!0,w.delete(F)),B.needsAnimating[F]=!0;const Q=t.getValue(F);Q&&(Q.liveStyle=!1)};for(const F in ee){const Q=Ce[F],pe=Ae[F];if(S.hasOwnProperty(F))continue;let N=!1;Gm(Q)&&Gm(pe)?N=!N5(Q,pe):N=Q!==pe,N?Q!=null?fe(F):w.add(F):Q!==void 0&&w.has(F)?fe(F):B.protectedKeys[F]=!0}B.prevProp=A,B.prevResolvedValues=Ce,B.isActive&&(S={...S,...Ce}),(a||c)&&t.blockInitialAnimation&&(J=!1);const O=q&&U;J&&(!O||ce)&&b.push(...le.map(F=>{const Q={type:R};if(typeof F=="string"&&(a||c)&&!O&&t.manuallyAnimateOnMount&&t.parent){const{parent:pe}=t,N=Ar(pe,F);if(pe.enteringChildren&&N){const{delayChildren:re}=N.transition||{};Q.delay=Zb(pe.enteringChildren,t,re)}}return{animation:F,options:Q}}))}if(w.size){const j={};if(typeof _.initial!="boolean"){const R=Ar(t,Array.isArray(_.initial)?_.initial[0]:_.initial);R&&R.transition&&(j.transition=R.transition)}w.forEach(R=>{const B=t.getBaseTarget(R),A=t.getValue(R);A&&(A.liveStyle=!0),j[R]=B!=null?B:null}),b.push({animation:j})}let C=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(C=!1),a=!1,c=!1,C?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=H1(),c=!0}}}function s8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!N5(n,t):!1}function wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function H1(){return{animate:wr(!0),whileInView:wr(),whileHover:wr(),whileTap:wr(),whileDrag:wr(),whileFocus:wr(),exit:wr()}}function op(t,n){t.min=n.min,t.max=n.max}function Gi(t,n){op(t.x,n.x),op(t.y,n.y)}function U1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const R5=1e-4,o8=1-R5,i8=1+R5,B5=.01,a8=0-B5,r8=0+B5;function Go(t){return t.max-t.min}function l8(t,n,i){return Math.abs(t-n)<=i}function V1(t,n,i,a=.5){t.origin=a,t.originPoint=us(n.min,n.max,t.origin),t.scale=Go(i)/Go(n),t.translate=us(i.min,i.max,t.origin)-t.originPoint,(t.scale>=o8&&t.scale<=i8||isNaN(t.scale))&&(t.scale=1),(t.translate>=a8&&t.translate<=r8||isNaN(t.translate))&&(t.translate=0)}function Cc(t,n,i,a){V1(t.x,n.x,i.x,a?a.originX:void 0),V1(t.y,n.y,i.y,a?a.originY:void 0)}function Y1(t,n,i,a=0){const c=a?us(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Go(n)}function c8(t,n,i,a){Y1(t.x,n.x,i.x,a==null?void 0:a.x),Y1(t.y,n.y,i.y,a==null?void 0:a.y)}function W1(t,n,i,a=0){const c=a?us(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Go(n)}function Bd(t,n,i,a){W1(t.x,n.x,i.x,a==null?void 0:a.x),W1(t.y,n.y,i.y,a==null?void 0:a.y)}function F1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function u8(t,n=0,i=1,a=.5,c,u=t,d=t){if(ca.test(n)&&(n=parseFloat(n),n=us(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=us(u.min,u.max,a);t===u&&(h-=n),t.min=F1(t.min,n,i,h,c),t.max=F1(t.max,n,i,h,c)}function X1(t,n,[i,a,c],u,d){u8(t,n[i],n[a],n[c],n.scale,u,d)}const d8=["x","scaleX","originX"],f8=["y","scaleY","originY"];function q1(t,n,i,a){X1(t.x,n,d8,i?i.x:void 0,a?a.x:void 0),X1(t.y,n,f8,i?i.y:void 0,a?a.y:void 0)}function G1(t){return t.translate===0&&t.scale===1}function L5(t){return G1(t.x)&&G1(t.y)}function K1(t,n){return t.min===n.min&&t.max===n.max}function h8(t,n){return K1(t.x,n.x)&&K1(t.y,n.y)}function Q1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function O5(t,n){return Q1(t.x,n.x)&&Q1(t.y,n.y)}function Z1(t){return Go(t.x)/Go(t.y)}function J1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function aa(t){return[t("x"),t("y")]}function m8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const z5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],p8=z5.length,ex=t=>typeof t=="string"?parseFloat(t):t,tx=t=>typeof t=="number"||Mt.test(t);function _8(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=us(0,(d=i.opacity)!=null?d:1,g8(a)),t.opacityExit=us((h=n.opacity)!=null?h:1,0,y8(a))):u&&(t.opacity=us((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<p8;_++){const x=z5[_];let b=nx(n,x),w=nx(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||tx(b)===tx(w)?(t[x]=Math.max(us(ex(b),ex(w),a),0),(ca.test(w)||ca.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=us(n.rotate||0,i.rotate||0,a))}function nx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const g8=$5(0,.5,vb),y8=$5(.5,.95,zi);function $5(t,n,i){return a=>a<t?0:a>n?1:i(gl(t,n,a))}function I5(t,n,i){const a=_o(t)?t:nr(t);return a.start(Np("",a,n,i)),a.animation}function Dc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const x8=(t,n)=>t.depth-n.depth;class b8{constructor(){this.children=[],this.isDirty=!1}add(n){yp(this.children,n),this.isDirty=!0}remove(n){_l(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(x8),this.isDirty=!1,this.children.forEach(n)}}function v8(t,n){const i=qo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Ma(a),t(u-n))};return Jn.setup(a,!0),()=>Ma(a)}function bd(t){return _o(t)?t.get():t}class w8{constructor(){this.members=[]}add(n){yp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(_l(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(_l(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const vd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_m=["","X","Y","Z"],S8=1e3;let C8=0;function gm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function P5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=s5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Jn,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&P5(a)}function H5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=C8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(M8),this.nodes.forEach(R8),this.nodes.forEach(B8),this.nodes.forEach(T8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new b8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new bp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!h5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;Jn.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=v8(b,250),vd.hasAnimatedSinceResize&&(vd.hasAnimatedSinceResize=!1,this.nodes.forEach(ix)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||I8,{onLayoutAnimationStart:k,onLayoutAnimationComplete:C}=g.getProps(),j=!this.targetLayout||!O5(this.targetLayout,w),R=!x&&b;if(this.options.layoutRoot||this.resumeFrom||R||x&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const B={...Dp(S,"layout"),onPlay:k,onComplete:C};(g.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B),this.setAnimationOrigin(_,R)}else x||ix(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ma(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(L8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&P5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(A8),this.nodes.forEach(sx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ox);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(D8),this.nodes.forEach(N8),this.nodes.forEach(k8),this.nodes.forEach(j8)):this.nodes.forEach(ox),this.clearAllSnapshots();const h=qo.now();Ro.delta=ua(0,1e3/60,h-Ro.timestamp),Ro.timestamp=h,Ro.isProcessing=!0,lm.update.process(Ro),lm.preRender.process(Ro),lm.render.process(Ro),Ro.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(E8),this.sharedNodes.forEach(O8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Jn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Jn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Go(this.snapshot.measuredBox.x)&&!Go(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ao()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!L5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||Cr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),P8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return ao();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(H8))){const{scroll:_}=this.root;_&&(ra(h.x,_.offset.x),ra(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=ao();if(Gi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Gi(h,d),ra(h.x,x.offset.x),ra(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||ao();Gi(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(ra(g.x,-w.scroll.offset.x),ra(g.y,-w.scroll.offset.y)),Cr(w.latestValues)&&xd(g,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return Cr(this.latestValues)&&xd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=ao();Gi(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!Cr(_.latestValues))continue;let x;_.instance&&(tp(_.latestValues)&&_.updateSnapshot(),x=ao(),Gi(x,_.measurePageBox())),q1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return Cr(this.latestValues)&&q1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ro.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=Ro.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ao(),this.targetWithTransforms=ao()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),c8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Gi(this.target,this.layout.layoutBox),v5(this.target,this.targetDelta)):Gi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||tp(this.parent.latestValues)||b5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ao(),this.relativeTargetOrigin=ao(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Gi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ro.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Gi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;$k(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ao());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U1(this.prevProjectionDelta.x,this.projectionDelta.x),U1(this.prevProjectionDelta.y,this.projectionDelta.y)),Cc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!J1(this.projectionDelta.x,this.prevProjectionDelta.x)||!J1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hl(),this.projectionDelta=hl(),this.projectionDeltaWithTransform=hl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=hl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=ao(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,k=w!==S,C=this.getStack(),j=!C||C.members.length<=1,R=!!(k&&!j&&this.options.crossfade===!0&&!this.path.some($8));this.animationProgress=0;let B;this.mixTargetDelta=A=>{const P=A/1e3;ax(x.x,d.x,P),ax(x.y,d.y,P),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),z8(this.relativeTarget,this.relativeTargetOrigin,b,P),B&&h8(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=ao()),Gi(B,this.relativeTarget)),k&&(this.animationValues=_,_8(_,g,this.latestValues,P,R,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(Ma(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Jn.update(()=>{vd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=nr(0)),this.motionValue.jump(0,!1),this.currentAnimation=I5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(S8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&U5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||ao();const x=Go(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Go(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Gi(h,p),xd(h,_),Cc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new w8),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&gm("z",d,g,this.animationValues);for(let _=0;_<_m.length;_++)gm(`rotate${_m[_]}`,d,g,this.animationValues),gm(`skew${_m[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,k;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=bd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=bd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Cr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=m8(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?(k=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?k:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const C in sp){if(_[C]===void 0)continue;const{correct:j,applyTo:R,isCSSVariable:B}=sp[C],A=x==="none"?_[C]:j(_[C],g);if(R){const P=R.length;for(let V=0;V<P;V++)d[R[V]]=A}else B?this.options.visualElement.renderState.vars[C]=A:d[C]=A}this.options.layoutId&&(d.pointerEvents=g===this?bd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(sx),this.root.sharedNodes.clear()}}}function k8(t){t.updateLayout()}function j8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Go(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";op(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else U5(u,n.layoutBox,a)&&aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Go(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=hl();Cc(h,a,n.layoutBox);const p=hl();d?Cc(p,t.applyTransform(c,!0),n.measuredBox):Cc(p,a,n.layoutBox);const g=!L5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,k=ao();Bd(k,n.layoutBox,b.layoutBox,S);const C=ao();Bd(C,a,w.layoutBox,S),O5(k,C)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=C,t.relativeTargetOrigin=k,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function M8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function T8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function E8(t){t.clearSnapshot()}function sx(t){t.clearMeasurements()}function A8(t){t.isLayoutDirty=!0,t.updateLayout()}function ox(t){t.isLayoutDirty=!1}function D8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function N8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ix(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function R8(t){t.resolveTargetDelta()}function B8(t){t.calcProjection()}function L8(t){t.resetSkewAndRotation()}function O8(t){t.removeLeadSnapshot()}function ax(t,n,i){t.translate=us(n.translate,0,i),t.scale=us(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function rx(t,n,i,a){t.min=us(n.min,i.min,a),t.max=us(n.max,i.max,a)}function z8(t,n,i,a){rx(t.x,n.x,i.x,a),rx(t.y,n.y,i.y,a)}function $8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const I8={duration:.45,ease:[.4,0,.1,1]},lx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),cx=lx("applewebkit/")&&!lx("chrome/")?Math.round:zi;function ux(t){t.min=cx(t.min),t.max=cx(t.max)}function P8(t){ux(t.x),ux(t.y)}function U5(t,n,i){return t==="position"||t==="preserve-aspect"&&!l8(Z1(n),Z1(i),.2)}function H8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const U8=H5({attachResizeListener:(t,n)=>Dc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ym={current:void 0},V5=H5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ym.current){const t=new U8({});t.mount(window),t.setOptions({layoutScroll:!0}),ym.current=t}return ym.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ud=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function dx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function V8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=dx(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():dx(t[c],null)}}}}function Y8(...t){return y.useCallback(V8(...t),t)}class W8 extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(pd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=pd(a)&&a.offsetWidth||0,u=pd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function F8({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Ud),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=Y8(h,_);return y.useInsertionEffect(()=>{const{width:S,height:k,top:C,left:j,right:R,bottom:B}=p.current;if(n||u===!1||!h.current||!S||!k)return;const A=i==="left"?`left: ${j}`:`right: ${R}`,P=a==="bottom"?`bottom: ${B}`:`top: ${C}`;h.current.dataset.motionPopId=d;const V=document.createElement("style");g&&(V.nonce=g);const q=c!=null?c:document.head;return q.appendChild(V),V.sheet&&V.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${k}px !important;
            ${A}px !important;
            ${P}px !important;
          }
        `),()=>{var U;(U=h.current)==null||U.removeAttribute("data-motion-pop-id"),q.contains(V)&&q.removeChild(V)}},[n]),l.jsx(W8,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const X8=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Rc(q8),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const k of _.values())if(!k)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),y.useMemo(()=>{_.forEach((S,k)=>_.set(k,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(F8,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),l.jsx(zd.Provider,{value:w,children:t})};function q8(){return new Map}function Y5(t=!0){const n=y.useContext(zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const ad=t=>t.key||"";function fx(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Vd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=Y5(d),b=y.useMemo(()=>fx(t),[t]),w=d&&!_?[]:b.map(ad),S=y.useRef(!0),k=y.useRef(b),C=Rc(()=>new Map),j=y.useRef(new Set),[R,B]=y.useState(b),[A,P]=y.useState(b);gp(()=>{S.current=!1,k.current=b;for(let U=0;U<A.length;U++){const J=ad(A[U]);w.includes(J)?(C.delete(J),j.current.delete(J)):C.get(J)!==!0&&C.set(J,!1)}},[A,w.length,w.join("-")]);const V=[];if(b!==R){let U=[...b];for(let J=0;J<A.length;J++){const ce=A[J],le=ad(ce);w.includes(le)||(U.splice(J,0,ce),V.push(ce))}return u==="wait"&&V.length&&(U=V),P(fx(U)),B(b),null}const{forceRender:q}=y.useContext(_p);return l.jsx(l.Fragment,{children:A.map(U=>{const J=ad(U),ce=d&&!_?!1:b===A||w.includes(J),le=()=>{if(j.current.has(J))return;if(C.has(J))j.current.add(J),C.set(J,!0);else return;let Ce=!0;C.forEach(Ae=>{Ae||(Ce=!1)}),Ce&&(q==null||q(),P(k.current),d&&(x==null||x()),a&&a())};return l.jsx(X8,{isPresent:ce,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:ce?void 0:le,anchorX:h,anchorY:p,children:U},J)})})},W5=y.createContext({strict:!1}),hx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let mx=!1;function G8(){if(mx)return;const t={};for(const n in hx)t[n]={isEnabled:i=>hx[n].some(a=>!!i[a])};_5(t),mx=!0}function F5(){return G8(),Lk()}function K8(t){const n=F5();for(const i in t)n[i]={...n[i],...t[i]};_5(n)}const Q8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Q8.has(t)}let X5=t=>!Ld(t);function Z8(t){typeof t=="function"&&(X5=n=>n.startsWith("on")?!Ld(n):t(n))}try{Z8(require("@emotion/is-prop-valid").default)}catch{}function J8(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||_o(t[c])||(X5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=y.createContext({});function ej(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Ac(i)?i:void 0,animate:Ac(a)?a:void 0}}return t.inherit!==!1?n:{}}function tj(t){const{initial:n,animate:i}=ej(t,y.useContext(Yd));return y.useMemo(()=>({initial:n,animate:i}),[px(n),px(i)])}function px(t){return Array.isArray(t)?t.join(" "):t}const Yp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function q5(t,n,i){for(const a in n)!_o(n[a])&&!C5(a,i)&&(t[a]=n[a])}function nj({transformTemplate:t},n){return y.useMemo(()=>{const i=Yp();return Up(i,n,t),Object.assign({},i.vars,i.style)},[n])}function sj(t,n){const i=t.style||{},a={};return q5(a,i,t),Object.assign(a,nj(t,n)),a}function oj(t,n){const i={},a=sj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const G5=()=>({...Yp(),attrs:{}});function ij(t,n,i,a){const c=y.useMemo(()=>{const u=G5();return j5(u,n,T5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};q5(u,t.style,t),c.style={...u,...c.style}}return c}const aj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wp(t){return typeof t!="string"||t.includes("-")?!1:!!(aj.indexOf(t)>-1||/[A-Z]/u.test(t))}function rj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Wp(t))?ij:oj)(n,a,c,t),g=J8(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>_o(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function lj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:cj(i,a,c,t),renderState:n()}}function cj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=bd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),g=m5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Rp(t,b[w]);if(S){const{transitionEnd:k,transition:C,...j}=S;for(const R in j){let B=j[R];if(Array.isArray(B)){const A=_?B.length-1:0;B=B[A]}B!==null&&(c[R]=B)}for(const R in k)c[R]=k[R]}}}return c}const K5=t=>(n,i)=>{const a=y.useContext(Yd),c=y.useContext(zd),u=()=>lj(t,n,a,c);return i?u():Rc(u)},uj=K5({scrapeMotionValuesFromProps:Vp,createRenderState:Yp}),dj=K5({scrapeMotionValuesFromProps:E5,createRenderState:G5}),fj=Symbol.for("motionComponentSymbol");function hj(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const Q5=y.createContext({});function cl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function mj(t,n,i,a,c,u){var B,A;const{visualElement:d}=y.useContext(Yd),h=y.useContext(W5),p=y.useContext(zd),g=y.useContext(Ud),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,k=y.useContext(Q5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&pj(b.current,i,c,k);const C=y.useRef(!1);y.useInsertionEffect(()=>{S&&C.current&&S.update(i,p)});const j=i[n5],R=y.useRef(!!j&&typeof window<"u"&&!((B=window.MotionHandoffIsComplete)!=null&&B.call(window,j))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,j)));return gp(()=>{w.current=!0,S&&(C.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),R.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!R.current&&S.animationState&&S.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)==null||P.call(window,j)}),R.current=!1),S.enteringChildren=void 0)}),S}function pj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:Z5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&cl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function Z5(t){if(t)return t.options.allowProjection!==!1?t.projection:Z5(t.parent)}function xm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&K8(a);const u=i?i==="svg":Wp(t),d=u?dj:uj;function h(x,b){let w;const S={...y.useContext(Ud),...x,layoutId:_j(x)},{isStatic:k}=S,C=tj(x),j=d(x,k);if(!k&&typeof window<"u"){gj();const R=yj(S);w=R.MeasureLayout,C.visualElement=mj(t,j,S,c,R.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:C,children:[w&&C.visualElement?l.jsx(w,{visualElement:C.visualElement,...S}):null,rj(t,x,hj(j,C.visualElement,b),j,k,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[fj]=t,p}function _j({layoutId:t}){const n=y.useContext(_p).id;return n&&t!==void 0?n+"-"+t:t}function gj(t,n){y.useContext(W5).strict}function yj(t){const n=F5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function xj(t,n){if(typeof Proxy>"u")return xm;const i=new Map,a=(u,d)=>xm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,xm(d,void 0,t,n)),i.get(d))})}const bj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Wp(t))?new A5(n):new k5(n,{allowProjection:t!==y.Fragment})};class vj extends sr{constructor(n){super(n),n.animationState||(n.animationState=n8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let wj=0;class Sj extends sr{constructor(){super(...arguments),this.id=wj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Ar(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Cj={animation:{Feature:vj},exit:{Feature:Sj}};function zc(t){return{point:{x:t.pageX,y:t.pageY}}}const kj=t=>n=>Ip(n)&&t(n,zc(n));function kc(t,n,i,a){return Dc(t,n,kj(i),a)}const J5=({current:t})=>t?t.ownerDocument.defaultView:null,_x=(t,n)=>Math.abs(t-n);function jj(t,n){const i=_x(t.x,n.x),a=_x(t.y,n.y);return Math.sqrt(i**2+a**2)}const gx=new Set(["auto","scroll"]);class e2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=rd(this.lastRawMoveEventInfo,this.transformPagePoint));const w=bm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,k=jj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!k)return;const{point:C}=w,{timestamp:j}=Ro;this.history.push({...C,timestamp:j});const{onStart:R,onMove:B}=this.handlers;S||(R&&R(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),B&&B(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=rd(S,this.transformPagePoint),Jn.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:k,onSessionEnd:C,resumeAnimation:j}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=bm(w.type==="pointercancel"?this.lastMoveEventInfo:rd(S,this.transformPagePoint),this.history);this.startEvent&&k&&k(w,R),C&&C(w,R)},!Ip(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=zc(n),g=rd(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=Ro;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,bm(g,this.history)),this.removeListeners=Bc(kc(this.contextWindow,"pointermove",this.handlePointerMove),kc(this.contextWindow,"pointerup",this.handlePointerUp),kc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(gx.has(a.overflowX)||gx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),Jn.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ma(this.updatePoint)}}function rd(t,n){return n?{point:n(t.point)}:t}function yx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function bm({point:t},n){return{point:t,delta:yx(t,t2(n)),offset:yx(t,Mj(n)),velocity:Tj(n,.1)}}function Mj(t){return t[0]}function t2(t){return t[t.length-1]}function Tj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=t2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>li(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>li(n)*2&&(a=t[1]);const u=Oi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Ej(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?us(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?us(i,t,a.max):Math.min(t,i)),t}function xx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function Aj(t,{top:n,left:i,bottom:a,right:c}){return{x:xx(t.x,i,c),y:xx(t.y,n,a)}}function bx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function Dj(t,n){return{x:bx(t.x,n.x),y:bx(t.y,n.y)}}function Nj(t,n){let i=.5;const a=Go(t),c=Go(n);return c>a?i=gl(n.min,n.max-a,t.min):a>c&&(i=gl(t.min,t.max-c,n.min)),ua(0,1,i)}function Rj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ip=.35;function Bj(t=ip){return t===!1?t=0:t===!0&&(t=ip),{x:vx(t,"left","right"),y:vx(t,"top","bottom")}}function vx(t,n,i){return{min:wx(t,n),max:wx(t,i)}}function wx(t,n){return typeof t=="number"?t:t[n]||0}const Lj=new WeakMap;class Oj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ao(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(zc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:k}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=fk(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),aa(j=>{let R=this.getAxisMotionValue(j).get()||0;if(ca.test(R)){const{projection:B}=this.visualElement;if(B&&B.layout){const A=B.layout.layoutBox[j];A&&(R=Go(A)*(parseFloat(R)/100))}}this.originPoint[j]=R}),k&&Jn.update(()=>k(x,b),!1,!0),Km(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:k,onDrag:C}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:j}=b;if(S&&this.currentDirection===null){this.currentDirection=$j(j),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",b.point,j),this.updateAxis("y",b.point,j),this.visualElement.render(),C&&Jn.update(()=>C(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new e2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:J5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Jn.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!ld(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Ej(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&cl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Aj(a.layoutBox,n):this.constraints=!1,this.elastic=Bj(i),c!==this.constraints&&!cl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&aa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Rj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!cl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=Ik(a,c.root,this.visualElement.getTransformPagePoint());let d=Dj(c.layout.layoutBox,u);if(i){const h=i(Ok(d));this.hasMutatedConstraints=!!h,h&&(d=x5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=aa(_=>{if(!ld(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Km(this.visualElement,n),a.start(Np(n,a,0,i,this.visualElement,!1))}stopAnimation(){aa(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){aa(i=>{const{drag:a}=this.getProps();if(!ld(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-us(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!cl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};aa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Nj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),aa(d=>{if(!ld(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(us(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Lj.set(this.visualElement,this);const n=this.visualElement.current,i=kc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,w=b!==n&&yk(b);_&&x&&!w&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();cl(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=zj(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Jn.read(c);const h=Dc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(aa(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ip,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Sx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function zj(t,n,i){const a=A1(t,Sx(i)),c=A1(n,Sx(i));return()=>{a(),c()}}function ld(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function $j(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class Ij extends sr{constructor(n){super(n),this.removeGroupControls=zi,this.removeListeners=zi,this.controls=new Oj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const vm=t=>(n,i)=>{t&&Jn.update(()=>t(n,i),!1,!0)};class Pj extends sr{constructor(){super(...arguments),this.removePointerDownListener=zi}onPointerDown(n){this.session=new e2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:J5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:vm(n),onStart:vm(i),onMove:vm(a),onEnd:(u,d)=>{delete this.session,c&&Jn.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=kc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let wm=!1;class Hj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),wm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),vd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),wm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||Jn.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),$p.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;wm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function n2(t){const[n,i]=Y5(),a=y.useContext(_p);return l.jsx(Hj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(Q5),isPresent:n,safeToRemove:i})}const Uj={pan:{Feature:Pj},drag:{Feature:Ij,ProjectionNode:V5,MeasureLayout:n2}};function Cx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&Jn.postRender(()=>u(n,zc(n)))}class Vj extends sr{mount(){const{current:n}=this.node;n&&(this.unmount=mk(n,(i,a)=>(Cx(this.node,a,"Start"),c=>Cx(this.node,c,"End"))))}unmount(){}}class Yj extends sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Bc(Dc(this.node.current,"focus",()=>this.onFocus()),Dc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function kx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&Jn.postRender(()=>u(n,zc(n)))}class Wj extends sr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=bk(n,(c,u)=>(kx(this.node,u,"Start"),(d,{success:h})=>kx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ap=new WeakMap,Sm=new WeakMap,Fj=t=>{const n=ap.get(t.target);n&&n(t)},Xj=t=>{t.forEach(Fj)};function qj({root:t,...n}){const i=t||document;Sm.has(i)||Sm.set(i,{});const a=Sm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(Xj,{root:t,...n})),a[c]}function Gj(t,n,i){const a=qj(n);return ap.set(t,i),a.observe(t),()=>{ap.delete(t),a.unobserve(t)}}const Kj={some:0,all:1};class Qj extends sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:Kj[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(g)};this.stopObserver=Gj(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Zj(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Zj({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const Jj={inView:{Feature:Qj},tap:{Feature:Wj},focus:{Feature:Yj},hover:{Feature:Vj}},eM={layout:{ProjectionNode:V5,MeasureLayout:n2}},tM={...Cj,...Jj,...Uj,...eM},ri=xj(tM,bj);function rp(t){const n=Rc(()=>nr(t)),{isStatic:i}=y.useContext(Ud);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function s2(t,n){const i=rp(n()),a=()=>i.set(n());return a(),gp(()=>{const c=()=>Jn.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Ma(a)}}),i}function nM(t){Sc.current=[],t();const n=s2(Sc.current,t);return Sc.current=void 0,n}function cd(t,n,i,a){if(typeof t=="function")return nM(t);const u=typeof n=="function"?n:Ek(n,i,a),d=Array.isArray(t)?jx(t,u):jx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function jx(t,n){const i=Rc(()=>[]);return s2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Fp(t){return typeof t=="object"&&!Array.isArray(t)}function o2(t,n,i,a){return t==null?[]:typeof t=="string"&&Fp(n)?zp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function sM(t,n,i){return t*(n+1)}function Mx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function oM(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(_l(t,c),a--)}}function iM(t,n,i,a,c,u){oM(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:us(c,u,a[d]),easing:kb(i,d)})}function aM(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function rM(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const lM="easeInOut";function cM(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){g.set(S,x);continue}else if(!Array.isArray(S)){g.set(S.name,Mx(x,S.at,_,g));continue}let[k,C,j={}]=S;j.at!==void 0&&(x=Mx(x,j.at,_,g));let R=0;const B=(A,P,V,q=0,U=0)=>{const J=uM(A),{delay:ce=0,times:le=Hb(J),type:Ce=n.type||"keyframes",repeat:Ae,repeatType:ee,repeatDelay:fe=0,...O}=P;let{ease:oe=n.ease||"easeOut",duration:F}=P;const Q=typeof ce=="function"?ce(q,U):ce,pe=J.length,N=Ap(Ce)?Ce:c==null?void 0:c[Ce||"keyframes"];if(pe<=2&&N){let Te=100;if(pe===2&&hM(J)){const ft=J[1]-J[0];Te=Math.abs(ft)}const Ye={...n,...O};F!==void 0&&(Ye.duration=li(F));const De=zb(Ye,Te,N);oe=De.ease,F=De.duration}F!=null||(F=u);const re=x+Q;le.length===1&&le[0]===0&&(le[1]=1);const ie=le.length-J.length;if(ie>0&&Pb(le,ie),J.length===1&&J.unshift(null),Ae){F=sM(F,Ae);const Te=[...J],Ye=[...le];oe=Array.isArray(oe)?[...oe]:[oe];const De=[...oe];for(let ft=0;ft<Ae;ft++){J.push(...Te);for(let rt=0;rt<Te.length;rt++)le.push(Ye[rt]+(ft+1)),oe.push(rt===0?"linear":kb(De,rt-1))}aM(le,Ae)}const de=re+F;iM(V,J,oe,le,re,de),R=Math.max(Q+F,R),b=Math.max(de,b)};if(_o(k)){const A=Tx(k,h);B(C,j,Ex("default",A))}else{const A=o2(k,C,a,p),P=A.length;for(let V=0;V<P;V++){C=C,j=j;const q=A[V],U=Tx(q,h);for(const J in C)B(C[J],dM(j,J),Ex(J,U),V,P)}}_=x,x+=R}return h.forEach((w,S)=>{for(const k in w){const C=w[k];C.sort(rM);const j=[],R=[],B=[];for(let q=0;q<C.length;q++){const{at:U,value:J,easing:ce}=C[q];j.push(J),R.push(gl(0,b,U)),B.push(ce||"easeOut")}R[0]!==0&&(R.unshift(0),j.unshift(j[0]),B.unshift(lM)),R[R.length-1]!==1&&(R.push(1),j.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const A=d.get(S);A.keyframes[k]=j;const{type:P,...V}=n;A.transition[k]={...V,duration:b,ease:B,times:R,...i}}}),d}function Tx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Ex(t,n){return n[t]||(n[t]=[]),n[t]}function uM(t){return Array.isArray(t)?t:[t]}function dM(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const fM=t=>typeof t=="number",hM=t=>t.every(fM);function mM(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!h5(t)?new A5(n):new k5(n);i.mount(t),Ec.set(t,i)}function pM(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new Fk(n);i.mount(t),Ec.set(t,i)}function _M(t,n){return _o(t)||typeof t=="number"||typeof t=="string"&&!Fp(n)}function i2(t,n,i,a){const c=[];if(_M(t,n))c.push(I5(t,Fp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=o2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?mM:pM;Ec.has(p)||g(p);const _=Ec.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Lp(_,{...n,transition:x},{}))}}return c}function gM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=nr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return cM(c,n,i,{spring:Tc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...i2(p,d,h))}),a}function yM(t){return Array.isArray(t)&&t.some(Array.isArray)}function xM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(yM(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=gM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=i2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new L3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{_l(n.animations,g)})),g}return a}const Ax=xM();var bM=Object.freeze({}),vM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const k=w.slice(0,-7),C=d.get(k);(C==null?void 0:C.type)==="transition"&&(p[w]=S)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:bM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},nn=new vM;function wM(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(nn.registerPanel(c,t,u.current,p.current),()=>nn.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}nn.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>nn.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>nn.subscribe(c,b),()=>nn.getValues(c),()=>nn.getValues(c));return a2(n,x,"")}function a2(t,n,i){var c,u,d,h,p,g,_,x,b,w;const a={};for(const[S,k]of Object.entries(t)){if(S==="_collapsed")continue;const C=i?`${i}.${S}`:S;if(Array.isArray(k)&&k.length<=4&&typeof k[0]=="number")a[S]=(c=n[C])!=null?c:k[0];else if(typeof k=="number"||typeof k=="boolean"||typeof k=="string")a[S]=(u=n[C])!=null?u:k;else if(SM(k)||CM(k))a[S]=(d=n[C])!=null?d:k;else if(kM(k))a[S]=(h=n[C])!=null?h:k;else if(jM(k)){const j=(p=k.default)!=null?p:EM(k.options);a[S]=(g=n[C])!=null?g:j}else MM(k)?a[S]=(x=(_=n[C])!=null?_:k.default)!=null?x:"#000000":TM(k)?a[S]=(w=(b=n[C])!=null?b:k.default)!=null?w:"":typeof k=="object"&&k!==null&&(a[S]=a2(k,n,C))}return a}function Sl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function SM(t){return Sl(t,"spring")}function CM(t){return Sl(t,"easing")}function kM(t){return Sl(t,"action")}function jM(t){return Sl(t,"select")&&"options"in t&&Array.isArray(t.options)}function MM(t){return Sl(t,"color")}function TM(t){return Sl(t,"text")}function EM(t){const n=t[0];return typeof n=="string"?n:n.value}function lp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function wd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(lp(n)))}function hc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function mc(t,n,i,a,c){var g,_;const u=nn.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));nn.updateValue(t,n,wd(p,a))}function AM(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function ud(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Cm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function r2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=r2(i.children,n);if(a)return a}}return null}var dd=4;function DM(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function NM(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=DM(n);return t.key?`${l2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function RM(t){return t.key?`${l2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function l2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var c2=y.createContext({activePanelId:null,activePath:null});function BM({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=nn.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((g=S.interaction)!=null?g:"scroll")!==p)continue;const k=r2(b.controls,w);if(k&&k.type==="slider")return{panelId:b.id,path:w,control:k,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=k=>{if(ud())return;const C=k.key.toLowerCase();if((C==="arrowleft"||C==="arrowright"||C==="arrowup"||C==="arrowdown")&&a.current.size>0){const A=h("scroll")||h("drag")||h("move");if(A&&A.control.type==="slider"){k.preventDefault();const P=C==="arrowright"||C==="arrowup"?1:-1,V=hc(A.control,A.shortcut);mc(A.panelId,A.path,A.control,V,P);return}}const j=a.current.has(C);a.current.add(C);const R=Cm(k),B=nn.resolveShortcutTarget(C,R);if(B&&(i({activePanelId:B.panelId,activePath:B.path}),!j&&B.control.type==="toggle")){const A=nn.getValue(B.panelId,B.path);nn.updateValue(B.panelId,B.path,!A)}j||(u.current=null,d.current=0)},g=k=>{const C=k.key.toLowerCase();if(a.current.delete(C),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let j=!1;for(const R of a.current){const B=Cm(k),A=nn.resolveShortcutTarget(R,B);if(A){i({activePanelId:A.panelId,activePath:A.path}),j=!0;break}}j||i({activePanelId:null,activePath:null})}},_=k=>{var R,B;if(ud())return;const C=Cm(k);if(a.current.size>0)for(const A of a.current){const P=nn.resolveShortcutTarget(A,C);if(!P)continue;const{panelId:V,path:q,control:U}=P;if(((B=(R=U.shortcut)==null?void 0:R.interaction)!=null?B:"scroll")!=="scroll"||U.type!=="slider")continue;k.preventDefault();const ce=hc(U,U.shortcut),le=k.deltaY>0?-1:1;mc(V,q,U,ce,le);return}const j=nn.resolveScrollOnlyTargets();for(const{panelId:A,path:P,control:V,shortcut:q}of j){if(V.type!=="slider")continue;k.preventDefault();const U=hc(V,q),J=k.deltaY>0?-1:1;mc(A,P,V,U,J);return}},x=k=>{if(ud()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=k.clientX,d.current=0,k.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=k=>{if(ud()||a.current.size===0)return;if(c.current){const j=h("drag");if(j&&u.current!==null){const R=k.clientX-u.current;u.current=k.clientX,d.current+=R;const B=hc(j.control,j.shortcut),A=Math.trunc(d.current/dd);A!==0&&(d.current-=A*dd,mc(j.panelId,j.path,j.control,B,A))}return}const C=h("move");if(C){if(u.current===null){u.current=k.clientX;return}const j=k.clientX-u.current;u.current=k.clientX,d.current+=j;const R=hc(C.control,C.shortcut),B=Math.trunc(d.current/dd);B!==0&&(d.current-=B*dd,mc(C.panelId,C.path,C.control,R,B))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(c2.Provider,{value:n,children:t})}var Xp="M6 9.5L12 15.5L18 9.5",LM="M5 12.75L10 19L19 5",km={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},OM=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],zM=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Dx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Od({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,w]=y.useState(void 0),[S,k]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const R=()=>k(window.innerHeight);return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[a]),y.useEffect(()=>{const R=x.current;if(!R)return;const B=new ResizeObserver(()=>{if(h){const A=R.offsetHeight;w(P=>P===A?P:A)}});return B.observe(R),()=>B.disconnect()},[h]);const C=()=>{if(c&&a)return;const R=!h;p(R),_(!R),u==null||u(R)},j=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:C,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Dx.path,fill:"currentColor"}),Dx.circles.map((R,B)=>l.jsx("circle",{cx:R.cx,cy:R.cy,r:R.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},B))]}),!a&&l.jsx(ri.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Xp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:R=>R.stopPropagation(),children:d})]}),l.jsx(Vd,{initial:!1,children:h&&l.jsx(ri.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:j});const R=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ri.div,{className:"dialkit-panel-inner",style:R,onClick:h?void 0:C,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:j})}return j}var $M=3,IM=32,PM=200,HM=8;function Po({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var ot;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,k]=y.useState(!1),[C,j]=y.useState(!1),[R,B]=y.useState(!1),[A,P]=y.useState(!1),[V,q]=y.useState(!1),[U,J]=y.useState(!1),[ce,le]=y.useState(""),Ce=y.useRef(null),Ae=y.useRef(null),ee=y.useRef(!0),fe=y.useRef(null),O=y.useRef(null),oe=y.useRef(1),F=(n-a)/(c-a)*100,Q=S||R,pe=rp(F),N=cd(pe,I=>`${I}%`),re=cd(pe,I=>`max(5px, calc(${I}% - 9px))`),ie=rp(0),de=cd(ie,I=>`calc(100% + ${Math.abs(I)}px)`),Te=cd(ie,I=>I<0?I:0);y.useEffect(()=>{!S&&!fe.current&&pe.jump(F)},[F,S,pe]);const Ye=y.useCallback(I=>{const se=O.current;if(!se)return n;const be=(I-se.left)/oe.current,Fe=g.current?g.current.offsetWidth:se.width,Ue=Math.max(0,Math.min(1,be/Fe)),Be=a+Ue*(c-a);return Math.max(a,Math.min(c,Be))},[a,c,n]),De=y.useCallback(I=>(I-a)/(c-a)*100,[a,c]),ft=y.useCallback((I,se)=>{const te=O.current;if(!te)return 0;const be=se<0?te.left-I:I-te.right,Fe=Math.max(0,be-IM);return se*HM*Math.sqrt(Math.min(Fe/PM,1))},[]),rt=y.useCallback(I=>{if(!U&&(I.preventDefault(),I.target.setPointerCapture(I.pointerId),Ae.current={x:I.clientX,y:I.clientY},ee.current=!0,k(!0),g.current)){O.current=g.current.getBoundingClientRect();const se=g.current.offsetWidth;oe.current=O.current.width/se}},[U]),gt=y.useCallback(I=>{if(!S||!Ae.current)return;const se=I.clientX-Ae.current.x,te=I.clientY-Ae.current.y,be=Math.sqrt(se*se+te*te);if(ee.current&&be>$M&&(ee.current=!1,j(!0)),!ee.current){const Fe=O.current;Fe&&(I.clientX<Fe.left?ie.jump(ft(I.clientX,-1)):I.clientX>Fe.right?ie.jump(ft(I.clientX,1)):ie.jump(0));const Ue=Ye(I.clientX),Be=De(Ue);fe.current&&(fe.current.stop(),fe.current=null),pe.jump(Be),i(wd(Ue,u))}},[S,Ye,De,i,pe,ie,ft]),Wt=y.useCallback(I=>{if(S){if(ee.current){const se=Ye(I.clientX),be=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((se-a)/u)*u)):AM(se,a,c),Fe=De(be);fe.current&&fe.current.stop(),fe.current=Ax(pe,Fe,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{fe.current=null}}),i(wd(be,u))}ie.get()!==0&&Ax(ie,0,{type:"spring",visualDuration:.35,bounce:.15}),k(!1),j(!1),Ae.current=null}},[S,Ye,De,i,a,c,pe,ie]);y.useEffect(()=>(A&&!U&&!V?Ce.current=setTimeout(()=>{q(!0)},800):!A&&!U&&(Ce.current&&(clearTimeout(Ce.current),Ce.current=null),q(!1)),()=>{Ce.current&&clearTimeout(Ce.current)}),[A,U,V]),y.useEffect(()=>{U&&x.current&&(x.current.focus(),x.current.select())},[U]);const We=I=>{le(I.target.value)},at=()=>{const I=parseFloat(ce);if(!isNaN(I)){const se=Math.max(a,Math.min(c,I));i(wd(se,u))}J(!1),P(!1),q(!1)},St=I=>{V&&(I.stopPropagation(),I.preventDefault(),J(!0),le(n.toFixed(lp(u))))},Gt=I=>{I.key==="Enter"?at():I.key==="Escape"&&(J(!1),P(!1))},Ct=()=>{at()},Ft=n.toFixed(lp(u)),G=8,ke=10,nt=10;let Je=30,dt=78;const Xe=(ot=g.current)==null?void 0:ot.offsetWidth;Xe&&Xe>0&&(b.current&&(Je=(ke+b.current.offsetWidth+G)/Xe*100),w.current&&(dt=(Xe-nt-w.current.offsetWidth-G)/Xe*100));const ct=F<Je||F>dt,Qe=Q?ct?.1:C?.9:.5:0,ht=(c-a)/u,zt=ht<=10?Array.from({length:ht-1},(I,se)=>{const te=(se+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${te}%`}},se)}):Array.from({length:9},(I,se)=>{const te=(se+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${te}%`}},se)});return l.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:l.jsxs(ri.div,{ref:_,className:`dialkit-slider ${Q?"dialkit-slider-active":""}`,onPointerDown:rt,onPointerMove:gt,onPointerUp:Wt,onMouseEnter:()=>B(!0),onMouseLeave:()=>B(!1),style:{width:de,x:Te},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:zt}),l.jsx(ri.div,{className:"dialkit-slider-fill",style:{width:N}}),l.jsx(ri.div,{className:"dialkit-slider-handle",style:{left:re,y:"-50%"},animate:{opacity:Qe,scaleX:Q?1:.25,scaleY:Q&&ct?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:NM(h)})]}),U?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ce,onChange:We,onKeyDown:Gt,onBlur:Ct,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${V?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),onClick:St,onMouseDown:I=>V&&I.stopPropagation(),style:{cursor:V?"text":"default"},children:Ft})]})})}function qp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return l.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function UM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:RM(a)})]}),l.jsx(qp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function VM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function u2({spring:t,isSimpleMode:n}){var k,C,j,R,B;let c,u,d;if(n){const A=(k=t.visualDuration)!=null?k:.3,P=(C=t.bounce)!=null?C:.2;d=1,c=2*Math.PI/A,c=Math.pow(c,2),u=2*(1-P)*Math.sqrt(c*d)}else c=(j=t.stiffness)!=null?j:400,u=(R=t.damping)!=null?R:17,d=(B=t.mass)!=null?B:1;const h=2,p=VM(c,u,d,h),g=p.map(([,A])=>A),_=Math.min(...g),b=Math.max(...g)-_,w=p.map(([A,P],V)=>{const q=A/h*256,J=140-((P-_)/(b||1)*140*.6+140*.2);return`${V===0?"M":"L"} ${q} ${J}`}).join(" "),S=[];for(let A=1;A<4;A++){const P=64*A,V=140/4*A;S.push(l.jsx("line",{x1:P,y1:0,x2:P,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${A}`),l.jsx("line",{x1:0,y1:V,x2:256,y2:V,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${A}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function YM({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=y.useSyncExternalStore(k=>nn.subscribe(t,k),()=>nn.getSpringMode(t,n),()=>nn.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=k=>{nn.updateSpringMode(t,n,k),c(k==="simple"?h.current.simple:h.current.advanced)},g=(k,C)=>{if(d){const{stiffness:j,damping:R,mass:B,...A}=a;c({...A,[k]:C})}else{const{visualDuration:j,bounce:R,...B}=a;c({...B,[k]:C})}};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(u2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:k=>g("visualDuration",k),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:k=>g("bounce",k),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:k=>g("stiffness",k),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:k=>g("damping",k),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:k=>g("mass",k),min:.1,max:10,step:.1})]})]})})}function WM({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function FM({panelId:t,path:n,label:i,value:a,onChange:c}){var S,k,C,j,R;const u=y.useSyncExternalStore(B=>nn.subscribe(t,B),()=>nn.getTransitionMode(t,n),()=>nn.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=B=>{nn.updateTransitionMode(t,n,B),c(B==="easing"?p.current.easing:B==="simple"?p.current.simple:p.current.advanced)},b=(B,A)=>{if(h){const{stiffness:P,damping:V,mass:q,...U}=g;c({...U,[B]:A})}else{const{visualDuration:P,bounce:V,...q}=g;c({...q,[B]:A})}},w=(B,A)=>{const P=[..._.ease];P[B]=A,c({..._,ease:P})};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(WM,{easing:_}):l.jsx(u2,{spring:g,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"x1",value:_.ease[0],onChange:B=>w(0,B),min:0,max:1,step:.01}),l.jsx(Po,{label:"y1",value:_.ease[1],onChange:B=>w(1,B),min:-1,max:2,step:.01}),l.jsx(Po,{label:"x2",value:_.ease[2],onChange:B=>w(2,B),min:0,max:1,step:.01}),l.jsx(Po,{label:"y2",value:_.ease[3],onChange:B=>w(3,B),min:-1,max:2,step:.01}),l.jsx(Po,{label:"Duration",value:_.duration,onChange:B=>c({..._,duration:B}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(qM,{ease:_.ease,onChange:B=>c({..._,ease:B})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(S=g.visualDuration)!=null?S:.3,onChange:B=>b("visualDuration",B),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(k=g.bounce)!=null?k:.2,onChange:B=>b("bounce",B),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(C=g.stiffness)!=null?C:400,onChange:B=>b("stiffness",B),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(j=g.damping)!=null?j:17,onChange:B=>b("damping",B),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(R=g.mass)!=null?R:1,onChange:B=>b("mass",B),min:.1,max:10,step:.1})]})]})})}function Nx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function XM(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function qM({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(Nx(t)),a(!0)},h=()=>{const g=XM(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Nx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function GM({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function KM(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function QM(t){return t.map(n=>typeof n=="string"?{value:n,label:KM(n)}:n)}function ZM({label:t,value:n,options:i,onChange:a}){var k;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=QM(i),w=b.find(C=>C.value===n),S=y.useCallback(()=>{const C=d.current;if(!C)return;const j=C.getBoundingClientRect(),R=8+b.length*36,B=window.innerHeight-j.bottom-4,A=B<R&&j.top>B;x({top:A?j.top-4:j.bottom+4,left:j.left,width:j.width,above:A})},[b.length]);return y.useEffect(()=>{var j;const C=(j=d.current)==null?void 0:j.closest(".dialkit-root");g(C!=null?C:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const C=j=>{const R=j.target;d.current&&!d.current.contains(R)&&h.current&&!h.current.contains(R)&&u(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(k=w==null?void 0:w.label)!=null?k:n}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Xp})})]})]}),p&&Nc.createPortal(l.jsx(Vd,{children:c&&_&&l.jsx(ri.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(C=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(C.value===n),onClick:()=>{a(C.value),u(!1)},children:C.label},C.value))})}),p)]})}var JM=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function e7({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),JM.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?t7(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function t7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function n7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(j=>j.id===i),b=y.useCallback(()=>{var R;if(!_)return;const j=(R=d.current)==null?void 0:R.getBoundingClientRect();j&&g({top:j.bottom+4,left:j.left,width:j.width}),u(!0)},[_]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const j=R=>{var A,P;const B=R.target;(A=d.current)!=null&&A.contains(B)||(P=h.current)!=null&&P.contains(B)||w()};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[c,w]);const k=j=>{j?nn.loadPreset(t,j):nn.clearActivePreset(t),w()},C=(j,R)=>{j.stopPropagation(),nn.deletePreset(t,R)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Xp})})]}),Nc.createPortal(l.jsx(Vd,{children:c&&l.jsxs(ri.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>k(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(j=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(j.id===i),onClick:()=>k(j.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:j.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:R=>C(R,j.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:zM.map((R,B)=>l.jsx("path",{d:R},B))})})]},j.id))]})}),document.body)]})}function s7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(c2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(C=>nn.subscribe(t.id,C),()=>nn.getValues(t.id),()=>nn.getValues(t.id)),g=nn.getPresets(t.id),_=nn.getActivePresetId(t.id),x=()=>{const C=g.length+2;nn.savePreset(t.id,`Version ${C}`)},b=()=>{const C=JSON.stringify(p,null,2),j=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${C}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(j),c(!0),setTimeout(()=>c(!1),1500)},w=C=>{var R,B,A;const j=p[C.path];switch(C.type){case"slider":return l.jsx(Po,{label:C.label,value:j,onChange:P=>nn.updateValue(t.id,C.path,P),min:C.min,max:C.max,step:C.step,shortcut:C.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===C.path},C.path);case"toggle":return l.jsx(UM,{label:C.label,checked:j,onChange:P=>nn.updateValue(t.id,C.path,P),shortcut:C.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===C.path},C.path);case"spring":return l.jsx(YM,{panelId:t.id,path:C.path,label:C.label,spring:j,onChange:P=>nn.updateValue(t.id,C.path,P)},C.path);case"transition":return l.jsx(FM,{panelId:t.id,path:C.path,label:C.label,value:j,onChange:P=>nn.updateValue(t.id,C.path,P)},C.path);case"folder":return l.jsx(Od,{title:C.label,defaultOpen:(R=C.defaultOpen)!=null?R:!0,children:(B=C.children)==null?void 0:B.map(w)},C.path);case"text":return l.jsx(GM,{label:C.label,value:j,onChange:P=>nn.updateValue(t.id,C.path,P),placeholder:C.placeholder},C.path);case"select":return l.jsx(ZM,{label:C.label,value:j,options:(A=C.options)!=null?A:[],onChange:P=>nn.updateValue(t.id,C.path,P)},C.path);case"color":return l.jsx(e7,{label:C.label,value:j,onChange:P=>nn.updateValue(t.id,C.path,P)},C.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>nn.triggerAction(t.id,C.path),children:C.label},C.path);default:return null}},S=()=>t.controls.map(w),k=l.jsxs(l.Fragment,{children:[l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:OM.map((C,j)=>l.jsx("path",{d:C},j))})}),l.jsx(n7,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Vd,{initial:!1,mode:"wait",children:a?l.jsx(ri.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:LM})},"check"):l.jsxs(ri.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:km.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:km.sparkle,fill:"currentColor"}),l.jsx("path",{d:km.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Od,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:k,children:S()})})}var o7=typeof process<"u"?!1:!(typeof import.meta<"u");function i7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=o7}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),k=y.useRef(null),C=y.useRef(!1),j=y.useRef(null),R=y.useRef(!1);y.useEffect(()=>(p(!0),d(nn.getPanels()),nn.subscribeGlobal(()=>{d(nn.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const U=new MutationObserver(()=>{var le;const J=(le=_.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(!J)return;if(J.getAttribute("data-collapsed")==="true")k.current&&b(k.current);else{if(x){k.current=x;const Ce=x.x+21,Ae=window.innerWidth/2;S(Ce<Ae?"top-left":"top-right")}else S(t);b(null)}});return U.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>U.disconnect()},[g,x,t]);const B=y.useCallback(U=>{var le;const J=(le=_.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(!J||J.getAttribute("data-collapsed")!=="true")return;const ce=_.current.getBoundingClientRect();j.current={pointerX:U.clientX,pointerY:U.clientY,elX:ce.left,elY:ce.top},R.current=!1,C.current=!0,U.target.setPointerCapture(U.pointerId)},[]),A=y.useCallback(U=>{if(!C.current||!j.current)return;const J=U.clientX-j.current.pointerX,ce=U.clientY-j.current.pointerY;!R.current&&Math.abs(J)+Math.abs(ce)<4||(R.current=!0,b({x:j.current.elX+J,y:j.current.elY+ce}))},[]),P=y.useCallback(U=>{var J;if(C.current&&(C.current=!1,j.current=null,R.current)){U.stopPropagation();const ce=(J=_.current)==null?void 0:J.querySelector(".dialkit-panel-inner");if(ce){const le=Ce=>{Ce.stopPropagation()};ce.addEventListener("click",le,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const V=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,q=l.jsx(BM,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:w,"data-mode":i,style:V,onPointerDown:g?void 0:B,onPointerMove:g?void 0:A,onPointerUp:g?void 0:P,children:u.map(U=>l.jsx(s7,{panel:U,defaultOpen:g||n,inline:g},U.id))})})});return g?q:Nc.createPortal(q,document.body)}const a7=()=>(wM("Git Visualizer",{preview:[1,0,1]}),null),r7=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(a7,{}),l.jsx(i7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(lC,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});zv.createRoot(document.getElementById("root")).render(l.jsx(r7,{children:l.jsx(Ww,{})}));

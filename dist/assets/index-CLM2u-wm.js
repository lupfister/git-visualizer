(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zh={exports:{}},nc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function Ev(){if(Z0)return nc;Z0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return nc.Fragment=n,nc.jsx=i,nc.jsxs=i,nc}var J0;function Av(){return J0||(J0=1,zh.exports=Ev()),zh.exports}var l=Av(),Oh={exports:{}},sc={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function Dv(){return ey||(ey=1,(function(t){function n($,oe){var G=$.length;$.push(oe);e:for(;0<G;){var K=G-1>>>1,pe=$[K];if(0<c(pe,oe))$[K]=oe,$[G]=pe,G=K;else break e}}function i($){return $.length===0?null:$[0]}function a($){if($.length===0)return null;var oe=$[0],G=$.pop();if(G!==oe){$[0]=G;e:for(var K=0,pe=$.length,N=pe>>>1;K<N;){var ne=2*(K+1)-1,re=$[ne],fe=ne+1,Ae=$[fe];if(0>c(re,G))fe<pe&&0>c(Ae,re)?($[K]=Ae,$[fe]=G,K=fe):($[K]=re,$[ne]=G,K=ne);else if(fe<pe&&0>c(Ae,G))$[K]=Ae,$[fe]=G,K=fe;else break e}}return oe}function c($,oe){var G=$.sortIndex-oe.sortIndex;return G!==0?G:$.id-oe.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,w=!1,S=!1,j=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D($){for(var oe=i(g);oe!==null;){if(oe.callback===null)a(g);else if(oe.startTime<=$)a(g),oe.sortIndex=oe.expirationTime,n(p,oe);else break;oe=i(g)}}function V($){if(j=!1,D($),!S)if(i(p)!==null)S=!0,P||(P=!0,ke());else{var oe=i(g);oe!==null&&ce(V,oe.startTime-$)}}var P=!1,W=-1,U=5,Z=-1;function ae(){return k?!0:!(t.unstable_now()-Z<U)}function ie(){if(k=!1,P){var $=t.unstable_now();Z=$;var oe=!0;try{e:{S=!1,j&&(j=!1,z(W),W=-1),w=!0;var G=b;try{t:{for(D($),x=i(p);x!==null&&!(x.expirationTime>$&&ae());){var K=x.callback;if(typeof K=="function"){x.callback=null,b=x.priorityLevel;var pe=K(x.expirationTime<=$);if($=t.unstable_now(),typeof pe=="function"){x.callback=pe,D($),oe=!0;break t}x===i(p)&&a(p),D($)}else a(p);x=i(p)}if(x!==null)oe=!0;else{var N=i(g);N!==null&&ce(V,N.startTime-$),oe=!1}}break e}finally{x=null,b=G,w=!1}oe=void 0}}finally{oe?ke():P=!1}}}var ke;if(typeof L=="function")ke=function(){L(ie)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Q=Re.port2;Re.port1.onmessage=ie,ke=function(){Q.postMessage(null)}}else ke=function(){M(ie,0)};function ce($,oe){W=M(function(){$(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function($){switch(b){case 1:case 2:case 3:var oe=3;break;default:oe=b}var G=b;b=oe;try{return $()}finally{b=G}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function($,oe){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var G=b;b=$;try{return oe()}finally{b=G}},t.unstable_scheduleCallback=function($,oe,G){var K=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?K+G:K):G=K,$){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=G+pe,$={id:_++,callback:oe,priorityLevel:$,startTime:G,expirationTime:pe,sortIndex:-1},G>K?($.sortIndex=G,n(g,$),i(p)===null&&$===i(g)&&(j?(z(W),W=-1):j=!0,ce(V,G-K))):($.sortIndex=pe,n(p,$),S||w||(S=!0,P||(P=!0,ke()))),$},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function($){var oe=b;return function(){var G=b;b=oe;try{return $.apply(this,arguments)}finally{b=G}}}})(Ih)),Ih}var ty;function Nv(){return ty||(ty=1,$h.exports=Dv()),$h.exports}var Ph={exports:{}},Jt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Rv(){if(ny)return Jt;ny=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function M(N,ne,re){this.props=N,this.context=ne,this.refs=k,this.updater=re||S}M.prototype.isReactComponent={},M.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=M.prototype;function L(N,ne,re){this.props=N,this.context=ne,this.refs=k,this.updater=re||S}var D=L.prototype=new z;D.constructor=L,j(D,M.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function P(){}var W={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function Z(N,ne,re){var fe=re.ref;return{$$typeof:t,type:N,key:ne,ref:fe!==void 0?fe:null,props:re}}function ae(N,ne){return Z(N.type,ne,N.props)}function ie(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function ke(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(re){return ne[re]})}var Re=/\/+/g;function Q(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?ke(""+N.key):ne.toString(36)}function ce(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(P,P):(N.status="pending",N.then(function(ne){N.status==="pending"&&(N.status="fulfilled",N.value=ne)},function(ne){N.status==="pending"&&(N.status="rejected",N.reason=ne)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function $(N,ne,re,fe,Ae){var $e=typeof N;($e==="undefined"||$e==="boolean")&&(N=null);var Ne=!1;if(N===null)Ne=!0;else switch($e){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(N.$$typeof){case t:case n:Ne=!0;break;case _:return Ne=N._init,$(Ne(N._payload),ne,re,fe,Ae)}}if(Ne)return Ae=Ae(N),Ne=fe===""?"."+Q(N,0):fe,V(Ae)?(re="",Ne!=null&&(re=Ne.replace(Re,"$&/")+"/"),$(Ae,ne,re,"",function(It){return It})):Ae!=null&&(ie(Ae)&&(Ae=ae(Ae,re+(Ae.key==null||N&&N.key===Ae.key?"":(""+Ae.key).replace(Re,"$&/")+"/")+Ne)),ne.push(Ae)),1;Ne=0;var at=fe===""?".":fe+":";if(V(N))for(var rt=0;rt<N.length;rt++)fe=N[rt],$e=at+Q(fe,rt),Ne+=$(fe,ne,re,$e,Ae);else if(rt=w(N),typeof rt=="function")for(N=rt.call(N),rt=0;!(fe=N.next()).done;)fe=fe.value,$e=at+Q(fe,rt++),Ne+=$(fe,ne,re,$e,Ae);else if($e==="object"){if(typeof N.then=="function")return $(ce(N),ne,re,fe,Ae);throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function oe(N,ne,re){if(N==null)return N;var fe=[],Ae=0;return $(N,fe,"","",function($e){return ne.call(re,$e,Ae++)}),fe}function G(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(re){(N._status===0||N._status===-1)&&(N._status=1,N._result=re)},function(re){(N._status===0||N._status===-1)&&(N._status=2,N._result=re)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var K=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},pe={map:oe,forEach:function(N,ne,re){oe(N,function(){ne.apply(this,arguments)},re)},count:function(N){var ne=0;return oe(N,function(){ne++}),ne},toArray:function(N){return oe(N,function(ne){return ne})||[]},only:function(N){if(!ie(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Jt.Activity=x,Jt.Children=pe,Jt.Component=M,Jt.Fragment=i,Jt.Profiler=c,Jt.PureComponent=L,Jt.StrictMode=a,Jt.Suspense=p,Jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Jt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return W.H.useMemoCache(N)}},Jt.cache=function(N){return function(){return N.apply(null,arguments)}},Jt.cacheSignal=function(){return null},Jt.cloneElement=function(N,ne,re){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var fe=j({},N.props),Ae=N.key;if(ne!=null)for($e in ne.key!==void 0&&(Ae=""+ne.key),ne)!U.call(ne,$e)||$e==="key"||$e==="__self"||$e==="__source"||$e==="ref"&&ne.ref===void 0||(fe[$e]=ne[$e]);var $e=arguments.length-2;if($e===1)fe.children=re;else if(1<$e){for(var Ne=Array($e),at=0;at<$e;at++)Ne[at]=arguments[at+2];fe.children=Ne}return Z(N.type,Ae,fe)},Jt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},Jt.createElement=function(N,ne,re){var fe,Ae={},$e=null;if(ne!=null)for(fe in ne.key!==void 0&&($e=""+ne.key),ne)U.call(ne,fe)&&fe!=="key"&&fe!=="__self"&&fe!=="__source"&&(Ae[fe]=ne[fe]);var Ne=arguments.length-2;if(Ne===1)Ae.children=re;else if(1<Ne){for(var at=Array(Ne),rt=0;rt<Ne;rt++)at[rt]=arguments[rt+2];Ae.children=at}if(N&&N.defaultProps)for(fe in Ne=N.defaultProps,Ne)Ae[fe]===void 0&&(Ae[fe]=Ne[fe]);return Z(N,$e,Ae)},Jt.createRef=function(){return{current:null}},Jt.forwardRef=function(N){return{$$typeof:h,render:N}},Jt.isValidElement=ie,Jt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:G}},Jt.memo=function(N,ne){return{$$typeof:g,type:N,compare:ne===void 0?null:ne}},Jt.startTransition=function(N){var ne=W.T,re={};W.T=re;try{var fe=N(),Ae=W.S;Ae!==null&&Ae(re,fe),typeof fe=="object"&&fe!==null&&typeof fe.then=="function"&&fe.then(P,K)}catch($e){K($e)}finally{ne!==null&&re.types!==null&&(ne.types=re.types),W.T=ne}},Jt.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Jt.use=function(N){return W.H.use(N)},Jt.useActionState=function(N,ne,re){return W.H.useActionState(N,ne,re)},Jt.useCallback=function(N,ne){return W.H.useCallback(N,ne)},Jt.useContext=function(N){return W.H.useContext(N)},Jt.useDebugValue=function(){},Jt.useDeferredValue=function(N,ne){return W.H.useDeferredValue(N,ne)},Jt.useEffect=function(N,ne){return W.H.useEffect(N,ne)},Jt.useEffectEvent=function(N){return W.H.useEffectEvent(N)},Jt.useId=function(){return W.H.useId()},Jt.useImperativeHandle=function(N,ne,re){return W.H.useImperativeHandle(N,ne,re)},Jt.useInsertionEffect=function(N,ne){return W.H.useInsertionEffect(N,ne)},Jt.useLayoutEffect=function(N,ne){return W.H.useLayoutEffect(N,ne)},Jt.useMemo=function(N,ne){return W.H.useMemo(N,ne)},Jt.useOptimistic=function(N,ne){return W.H.useOptimistic(N,ne)},Jt.useReducer=function(N,ne,re){return W.H.useReducer(N,ne,re)},Jt.useRef=function(N){return W.H.useRef(N)},Jt.useState=function(N){return W.H.useState(N)},Jt.useSyncExternalStore=function(N,ne,re){return W.H.useSyncExternalStore(N,ne,re)},Jt.useTransition=function(){return W.H.useTransition()},Jt.version="19.2.4",Jt}var sy;function lp(){return sy||(sy=1,Ph.exports=Rv()),Ph.exports}var Hh={exports:{}},$o={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Bv(){if(oy)return $o;oy=1;var t=lp();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return $o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,$o.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},$o.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},$o.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},$o.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},$o.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},$o.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},$o.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},$o.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},$o.requestFormReset=function(p){a.d.r(p)},$o.unstable_batchedUpdates=function(p,g){return p(g)},$o.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},$o.useFormStatus=function(){return d.H.useHostTransitionStatus()},$o.version="19.2.4",$o}var iy;function Bx(){if(iy)return Hh.exports;iy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=Bv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function Lv(){if(ay)return sc;ay=1;var t=Nv(),n=lp(),i=Bx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case V:return"Suspense";case P:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case D:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return s=e.displayName||null,s!==null?s:Q(e.type)||"Memo";case U:s=e._payload,e=e._init;try{return Q(e(s))}catch{}}return null}var ce=Array.isArray,$=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},K=[],pe=-1;function N(e){return{current:e}}function ne(e){0>pe||(e.current=K[pe],K[pe]=null,pe--)}function re(e,s){pe++,K[pe]=e.current,e.current=s}var fe=N(null),Ae=N(null),$e=N(null),Ne=N(null);function at(e,s){switch(re($e,s),re(Ae,e),re(fe,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?v0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=v0(s),e=w0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(fe),re(fe,e)}function rt(){ne(fe),ne(Ae),ne($e)}function It(e){e.memoizedState!==null&&re(Ne,e);var s=fe.current,o=w0(s,e.type);s!==o&&(re(Ae,e),re(fe,o))}function Zt(e){Ae.current===e&&(ne(fe),ne(Ae)),Ne.current===e&&(ne(Ne),Zl._currentValue=G)}var Ce,Ee;function vt(e){if(Ce===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ce=s&&s[1]||"",Ee=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ce+e+Ee}var Ht=!1;function wt(e,s){if(!e||Ht)return"";Ht=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var ze=function(){throw Error()};if(Object.defineProperty(ze.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ze,[])}catch(ve){var ge=ve}Reflect.construct(e,[],ze)}else{try{ze.call()}catch(ve){ge=ve}e.call(ze.prototype)}}else{try{throw Error()}catch(ve){ge=ve}(ze=e())&&typeof ze.catch=="function"&&ze.catch(function(){})}}catch(ve){if(ve&&ge&&typeof ve.stack=="string")return[ve.stack,ge.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var X=v.split(`
`),me=A.split(`
`);for(f=r=0;r<X.length&&!X[r].includes("DetermineComponentFrameRoot");)r++;for(;f<me.length&&!me[f].includes("DetermineComponentFrameRoot");)f++;if(r===X.length||f===me.length)for(r=X.length-1,f=me.length-1;1<=r&&0<=f&&X[r]!==me[f];)f--;for(;1<=r&&0<=f;r--,f--)if(X[r]!==me[f]){if(r!==1||f!==1)do if(r--,f--,0>f||X[r]!==me[f]){var je=`
`+X[r].replace(" at new "," at ");return e.displayName&&je.includes("<anonymous>")&&(je=je.replace("<anonymous>",e.displayName)),je}while(1<=r&&0<=f);break}}}finally{Ht=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?vt(o):""}function Ut(e,s){switch(e.tag){case 26:case 27:case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return e.child!==s&&s!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return wt(e.type,!1);case 11:return wt(e.type.render,!1);case 1:return wt(e.type,!0);case 31:return vt("Activity");default:return""}}function q(e){try{var s="",o=null;do s+=Ut(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Me=Object.prototype.hasOwnProperty,Je=t.unstable_scheduleCallback,Ze=t.unstable_cancelCallback,dt=t.unstable_shouldYield,Ue=t.unstable_requestPaint,mt=t.unstable_now,lt=t.unstable_getCurrentPriorityLevel,_t=t.unstable_ImmediatePriority,Bt=t.unstable_UserBlockingPriority,nt=t.unstable_NormalPriority,H=t.unstable_LowPriority,te=t.unstable_IdlePriority,_e=t.log,we=t.unstable_setDisableYieldValue,Qe=null,Pe=null;function Be(e){if(typeof _e=="function"&&we(e),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(Qe,e)}catch{}}var gt=Math.clz32?Math.clz32:qe,Ve=Math.log,Ot=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ve(e)/Ot|0)|0}var Xe=256,jt=262144,Rt=4194304;function Vt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ge(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=Vt(r):(v&=A,v!==0?f=Vt(v):o||(o=A&~e,o!==0&&(f=Vt(o))))):(A=r&~m,A!==0?f=Vt(A):v!==0?f=Vt(v):o||(o=r&~e,o!==0&&(f=Vt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Lt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Tt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),e}function ln(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function ut(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ft(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,X=e.expirationTimes,me=e.hiddenUpdates;for(o=v&~o;0<o;){var je=31-gt(o),ze=1<<je;A[je]=0,X[je]=-1;var ge=me[je];if(ge!==null)for(me[je]=null,je=0;je<ge.length;je++){var ve=ge[je];ve!==null&&(ve.lane&=-536870913)}o&=~ze}r!==0&&jn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function jn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-gt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function An(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-gt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function Mn(e,s){var o=s&-s;return o=(o&42)!==0?1:Gn(o),(o&(e.suspendedLanes|s))!==0?0:o}function Gn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gs(){var e=oe.p;return e!==0?e:(e=window.event,e===void 0?32:W0(e.type))}function Dn(e,s){var o=oe.p;try{return oe.p=e,s()}finally{oe.p=o}}var Ln=Math.random().toString(36).slice(2),un="__reactFiber$"+Ln,pn="__reactProps$"+Ln,ot="__reactContainer$"+Ln,cn="__reactEvents$"+Ln,ko="__reactListeners$"+Ln,Po="__reactHandles$"+Ln,Tn="__reactResources$"+Ln,jo="__reactMarker$"+Ln;function Ho(e){delete e[un],delete e[pn],delete e[cn],delete e[ko],delete e[Po]}function js(e){var s=e[un];if(s)return s;for(var o=e.parentNode;o;){if(s=o[ot]||o[un]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=E0(e);e!==null;){if(o=e[un])return o;e=E0(e)}return s}e=o,o=e.parentNode}return null}function Mo(e){if(e=e[un]||e[ot]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function _o(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Us(e){var s=e[Tn];return s||(s=e[Tn]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function zn(e){e[jo]=!0}var wi=new Set,Ls={};function Ds(e,s){cs(e,s),cs(e+"Capture",s)}function cs(e,s){for(Ls[e]=s,e=0;e<s.length;e++)wi.add(s[e])}var To=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uo={},ys={};function is(e){return Me.call(ys,e)?!0:Me.call(Uo,e)?!1:To.test(e)?ys[e]=!0:(Uo[e]=!0,!1)}function Ms(e,s,o){if(is(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function yn(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function On(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function dn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qn(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qi(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function ei(e){if(!e._valueTracker){var s=Qn(e)?"checked":"value";e._valueTracker=Qi(e,s,""+e[s])}}function di(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Qn(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ti=/[\n"\\]/g;function Ns(e){return e.replace(ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Eo(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+dn(s)):e.value!==""+dn(s)&&(e.value=""+dn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Zs(e,v,dn(s)):o!=null?Zs(e,v,dn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+dn(A):e.removeAttribute("name")}function Pn(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){ei(e);return}o=o!=null?""+dn(o):"",s=s!=null?""+dn(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),ei(e)}function Zs(e,s,o){s==="number"&&go(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function us(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+dn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function ds(e,s,o){if(s!=null&&(s=""+dn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+dn(o):""}function Ii(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(ce(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=dn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),ei(e)}function Vo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Zi.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Vs(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Kt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Kt(e,m,s[m])}function zs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Si=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lo(e){return Si.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Js(){}var fi=null;function yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wn=null,eo=null;function Ci(e){var s=Mo(e);if(s&&(e=s.stateNode)){var o=e[pn]||null;e:switch(e=s.stateNode,s.type){case"input":if(Eo(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ns(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[pn]||null;if(!f)throw Error(a(90));Eo(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&di(r)}break e;case"textarea":ds(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&us(e,!!o.multiple,s,!1)}}}var fs=!1;function xo(e,s,o){if(fs)return e(s,o);fs=!0;try{var r=e(s);return r}finally{if(fs=!1,(wn!==null||eo!==null)&&(vu(),wn&&(s=wn,e=eo,eo=wn=null,Ci(s),e)))for(s=0;s<e.length;s++)Ci(e[s])}}function sn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[pn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Ys=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=!1;if(Ys)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){ro=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{ro=!1}var hs=null,ni=null,bo=null;function zo(){if(bo)return bo;var e,s=ni,o=s.length,r,f="value"in hs?hs.value:hs.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return bo=f.slice(e,1<r?1-r:void 0)}function Ws(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function Yo(){return!1}function tn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?si:Yo,this.isPropagationStopped=Yo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),s}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=tn(Fs),Bs=x({},Fs,{view:0,detail:0}),vo=tn(Bs),Wo,wo,Ts,So=x({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ts&&(Ts&&e.type==="mousemove"?(Wo=e.screenX-Ts.screenX,wo=e.screenY-Ts.screenY):wo=Wo=0,Ts=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),Yn=tn(So),T=x({},So,{dataTransfer:0}),F=tn(T),de=x({},Bs,{relatedTarget:0}),be=tn(de),He=x({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),et=tn(He),Dt=x({},Fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$t=tn(Dt),At=x({},Fs,{data:0}),Ke=tn(At),an={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Un={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wn(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Un[e])?!!s[e]:!1}function xn(){return Wn}var xs=x({},Bs,{key:function(e){if(e.key){var s=an[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xn,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),co=tn(xs),ki=x({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fo=tn(ki),Ji=x({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xn}),I=tn(Ji),J=x({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),se=tn(J),ye=x({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),st=tn(ye),xt=x({},Fs,{newState:0,oldState:0}),pt=tn(xt),Xt=[9,13,27,32],ms=Ys&&"CompositionEvent"in window,Zn=null;Ys&&"documentMode"in document&&(Zn=document.documentMode);var uo=Ys&&"TextEvent"in window&&!Zn,Nn=Ys&&(!ms||Zn&&8<Zn&&11>=Zn),Qt=" ",nn=!1;function hn(e,s){switch(e){case"keyup":return Xt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Es(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function Xs(e,s){switch(e){case"compositionend":return Es(s);case"keypress":return s.which!==32?null:(nn=!0,Qt);case"textInput":return e=s.data,e===Qt&&nn?null:e;default:return null}}function qs(e,s){if(Os)return e==="compositionend"||!ms&&hn(e,s)?(e=zo(),bo=ni=hs=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Nn&&s.locale!=="ko"?null:s.data;default:return null}}var fo={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hi(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!fo[e.type]:s==="textarea"}function Xo(e,s,o,r){wn?eo?eo.push(r):eo=[r]:wn=r,s=Tu(s,"onChange"),0<s.length&&(o=new Rs("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var xe=null,Fe=null;function ct(e){p0(e,0)}function C(e){var s=_o(e);if(di(s))return e}function E(e,s){if(e==="change")return s}var R=!1;if(Ys){var O;if(Ys){var Y="oninput"in document;if(!Y){var ue=document.createElement("div");ue.setAttribute("oninput","return;"),Y=typeof ue.oninput=="function"}O=Y}else O=!1;R=O&&(!document.documentMode||9<document.documentMode)}function Oe(){xe&&(xe.detachEvent("onpropertychange",Ye),Fe=xe=null)}function Ye(e){if(e.propertyName==="value"&&C(Fe)){var s=[];Xo(s,Fe,e,yo(e)),xo(ct,s)}}function tt(e,s,o){e==="focusin"?(Oe(),xe=s,Fe=o,xe.attachEvent("onpropertychange",Ye)):e==="focusout"&&Oe()}function it(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return C(Fe)}function ht(e,s){if(e==="click")return C(s)}function Nt(e,s){if(e==="input"||e==="change")return C(s)}function qt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var bt=typeof Object.is=="function"?Object.is:qt;function ft(e,s){if(bt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Me.call(s,f)||!bt(e[f],s[f]))return!1}return!0}function bs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vs(e,s){var o=bs(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=bs(o)}}function ws(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?ws(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Cn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=go(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=go(e.document)}return s}function Vn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Wt=Ys&&"documentMode"in document&&11>=document.documentMode,Gt=null,Ss=null,En=null,ho=!1;function Oo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ho||Gt==null||Gt!==go(r)||(r=Gt,"selectionStart"in r&&Vn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),En&&ft(En,r)||(En=r,r=Tu(Ss,"onSelect"),0<r.length&&(s=new Rs("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Gt)))}function as(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ji={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Pi={},Hi={};Ys&&(Hi=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Jn(e){if(Pi[e])return Pi[e];if(!ji[e])return e;var s=ji[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Hi)return Pi[e]=s[o];return e}var Ui=Jn("animationend"),ea=Jn("animationiteration"),Pc=Jn("animationstart"),Wd=Jn("transitionrun"),Fd=Jn("transitionstart"),Xd=Jn("transitioncancel"),qp=Jn("transitionend"),Gp=new Map,qd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qd.push("scrollEnd");function Vi(e,s){Gp.set(e,s),Ds(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],Nr=0,Gd=0;function Uc(){for(var e=Nr,s=Gd=Nr=0;s<e;){var o=Mi[s];Mi[s++]=null;var r=Mi[s];Mi[s++]=null;var f=Mi[s];Mi[s++]=null;var m=Mi[s];if(Mi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Kp(o,f,m)}}function Vc(e,s,o,r){Mi[Nr++]=e,Mi[Nr++]=s,Mi[Nr++]=o,Mi[Nr++]=r,Gd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Vc(e,s,o,r),Yc(e)}function or(e,s){return Vc(e,null,null,s),Yc(e)}function Kp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-gt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Wl)throw Wl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Rr={};function f2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,s,o,r){return new f2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,s){var o=e.alternate;return o===null?(o=mi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Qp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=gv(e,o,fe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=mi(31,o,s,f),e.elementType=Z,e.lanes=m,e;case j:return ir(o.children,f,m,s);case k:v=8,f|=24;break;case M:return e=mi(12,o,s,f|2),e.elementType=M,e.lanes=m,e;case V:return e=mi(13,o,s,f),e.elementType=V,e.lanes=m,e;case P:return e=mi(19,o,s,f),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case z:v=9;break e;case D:v=11;break e;case W:v=14;break e;case U:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=mi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ir(e,s,o,r){return e=mi(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=mi(6,e,null,s),e.lanes=o,e}function Zp(e){var s=mi(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=mi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var Jp=new WeakMap;function Ti(e,s){if(typeof e=="object"&&e!==null){var o=Jp.get(e);return o!==void 0?o:(s={value:e,source:s,stack:q(s)},Jp.set(e,s),s)}return{value:e,source:s,stack:q(s)}}var Br=[],Lr=0,Fc=null,Cl=0,Ei=[],Ai=0,Ta=null,ta=1,na="";function fa(e,s){Br[Lr++]=Cl,Br[Lr++]=Fc,Fc=e,Cl=s}function e_(e,s,o){Ei[Ai++]=ta,Ei[Ai++]=na,Ei[Ai++]=Ta,Ta=e;var r=ta;e=na;var f=32-gt(r)-1;r&=~(1<<f),o+=1;var m=32-gt(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ta=1<<32-gt(s)+f|o<<f|r,na=m+e}else ta=1<<m|o<<f|r,na=e}function ef(e){e.return!==null&&(fa(e,1),e_(e,1,0))}function tf(e){for(;e===Fc;)Fc=Br[--Lr],Br[Lr]=null,Cl=Br[--Lr],Br[Lr]=null;for(;e===Ta;)Ta=Ei[--Ai],Ei[Ai]=null,na=Ei[--Ai],Ei[Ai]=null,ta=Ei[--Ai],Ei[Ai]=null}function t_(e,s){Ei[Ai++]=ta,Ei[Ai++]=na,Ei[Ai++]=Ta,ta=s.id,na=s.overflow,Ta=e}var Ao=null,Cs=null,Sn=!1,Ea=null,Di=!1,nf=Error(a(519));function Aa(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kl(Ti(s,e)),nf}function n_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[un]=e,s[pn]=r,o){case"dialog":gn("cancel",s),gn("close",s);break;case"iframe":case"object":case"embed":gn("load",s);break;case"video":case"audio":for(o=0;o<Xl.length;o++)gn(Xl[o],s);break;case"source":gn("error",s);break;case"img":case"image":case"link":gn("error",s),gn("load",s);break;case"details":gn("toggle",s);break;case"input":gn("invalid",s),Pn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gn("invalid",s);break;case"textarea":gn("invalid",s),Ii(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||x0(s.textContent,o)?(r.popover!=null&&(gn("beforetoggle",s),gn("toggle",s)),r.onScroll!=null&&gn("scroll",s),r.onScrollEnd!=null&&gn("scrollend",s),r.onClick!=null&&(s.onclick=Js),s=!0):s=!1,s||Aa(e,!0)}function s_(e){for(Ao=e.return;Ao;)switch(Ao.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Ao=Ao.return}}function zr(e){if(e!==Ao)return!1;if(!Sn)return s_(e),Sn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&Cs&&Aa(e),s_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Cs=T0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Cs=T0(e)}else s===27?(s=Cs,Ya(e.type)?(e=jh,jh=null,Cs=e):Cs=s):Cs=Ao?Ri(e.stateNode.nextSibling):null;return!0}function ar(){Cs=Ao=null,Sn=!1}function sf(){var e=Ea;return e!==null&&(ri===null?ri=e:ri.push.apply(ri,e),Ea=null),e}function kl(e){Ea===null?Ea=[e]:Ea.push(e)}var of=N(null),rr=null,ha=null;function Da(e,s,o){re(of,s._currentValue),s._currentValue=o}function ma(e){e._currentValue=of.current,ne(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var X=0;X<s.length;X++)if(A.context===s[X]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Or(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;bt(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===Ne.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Zl):e=[Zl])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){rr=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Do(e){return o_(rr,e)}function qc(e,s){return rr===null&&lr(e),o_(e,s)}function o_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ha===null){if(e===null)throw Error(a(308));ha=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ha=ha.next=s;return o}var h2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},m2=t.unstable_scheduleCallback,p2=t.unstable_NormalPriority,to={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new h2,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&m2(p2,function(){e.controller.abort()})}var Ml=null,cf=0,$r=0,Ir=null;function _2(e,s){if(Ml===null){var o=Ml=[];cf=0,$r=fh(),Ir={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(i_,i_),s}function i_(){if(--cf===0&&Ml!==null){Ir!==null&&(Ir.status="fulfilled");var e=Ml;Ml=null,$r=0,Ir=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function g2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var a_=$.S;$.S=function(e,s){Vg=mt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&_2(e,s),a_!==null&&a_(e,s)};var cr=N(null);function uf(){var e=cr.current;return e!==null?e:rs.pooledCache}function Gc(e,s){s===null?re(cr,cr.current):re(cr,s.pool)}function r_(){var e=uf();return e===null?null:{parent:to._currentValue,pool:e}}var Pr=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function l_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function c_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Js,Js),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,d_(e),e;default:if(typeof s.status=="string")s.then(Js,Js);else{if(e=rs,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,d_(e),e}throw dr=s,Pr}}function ur(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(dr=o,Pr):o}}var dr=null;function u_(){if(dr===null)throw Error(a(459));var e=dr;return dr=null,e}function d_(e){if(e===Pr||e===Kc)throw Error(a(483))}var Hr=null,Tl=0;function Zc(e){var s=Tl;return Tl+=1,Hr===null&&(Hr=[]),c_(Hr,e,s)}function El(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function f_(e){function s(le,ee){if(e){var he=le.deletions;he===null?(le.deletions=[ee],le.flags|=16):he.push(ee)}}function o(le,ee){if(!e)return null;for(;ee!==null;)s(le,ee),ee=ee.sibling;return null}function r(le){for(var ee=new Map;le!==null;)le.key!==null?ee.set(le.key,le):ee.set(le.index,le),le=le.sibling;return ee}function f(le,ee){return le=da(le,ee),le.index=0,le.sibling=null,le}function m(le,ee,he){return le.index=he,e?(he=le.alternate,he!==null?(he=he.index,he<ee?(le.flags|=67108866,ee):he):(le.flags|=67108866,ee)):(le.flags|=1048576,ee)}function v(le){return e&&le.alternate===null&&(le.flags|=67108866),le}function A(le,ee,he,Le){return ee===null||ee.tag!==6?(ee=Zd(he,le.mode,Le),ee.return=le,ee):(ee=f(ee,he),ee.return=le,ee)}function X(le,ee,he,Le){var zt=he.type;return zt===j?je(le,ee,he.props.children,Le,he.key):ee!==null&&(ee.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===U&&ur(zt)===ee.type)?(ee=f(ee,he.props),El(ee,he),ee.return=le,ee):(ee=Wc(he.type,he.key,he.props,null,le.mode,Le),El(ee,he),ee.return=le,ee)}function me(le,ee,he,Le){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==he.containerInfo||ee.stateNode.implementation!==he.implementation?(ee=Jd(he,le.mode,Le),ee.return=le,ee):(ee=f(ee,he.children||[]),ee.return=le,ee)}function je(le,ee,he,Le,zt){return ee===null||ee.tag!==7?(ee=ir(he,le.mode,Le,zt),ee.return=le,ee):(ee=f(ee,he),ee.return=le,ee)}function ze(le,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return ee=Zd(""+ee,le.mode,he),ee.return=le,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return he=Wc(ee.type,ee.key,ee.props,null,le.mode,he),El(he,ee),he.return=le,he;case S:return ee=Jd(ee,le.mode,he),ee.return=le,ee;case U:return ee=ur(ee),ze(le,ee,he)}if(ce(ee)||ke(ee))return ee=ir(ee,le.mode,he,null),ee.return=le,ee;if(typeof ee.then=="function")return ze(le,Zc(ee),he);if(ee.$$typeof===L)return ze(le,qc(le,ee),he);Jc(le,ee)}return null}function ge(le,ee,he,Le){var zt=ee!==null?ee.key:null;if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return zt!==null?null:A(le,ee,""+he,Le);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case w:return he.key===zt?X(le,ee,he,Le):null;case S:return he.key===zt?me(le,ee,he,Le):null;case U:return he=ur(he),ge(le,ee,he,Le)}if(ce(he)||ke(he))return zt!==null?null:je(le,ee,he,Le,null);if(typeof he.then=="function")return ge(le,ee,Zc(he),Le);if(he.$$typeof===L)return ge(le,ee,qc(le,he),Le);Jc(le,he)}return null}function ve(le,ee,he,Le,zt){if(typeof Le=="string"&&Le!==""||typeof Le=="number"||typeof Le=="bigint")return le=le.get(he)||null,A(ee,le,""+Le,zt);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case w:return le=le.get(Le.key===null?he:Le.key)||null,X(ee,le,Le,zt);case S:return le=le.get(Le.key===null?he:Le.key)||null,me(ee,le,Le,zt);case U:return Le=ur(Le),ve(le,ee,he,Le,zt)}if(ce(Le)||ke(Le))return le=le.get(he)||null,je(ee,le,Le,zt,null);if(typeof Le.then=="function")return ve(le,ee,he,Zc(Le),zt);if(Le.$$typeof===L)return ve(le,ee,he,qc(ee,Le),zt);Jc(ee,Le)}return null}function kt(le,ee,he,Le){for(var zt=null,Rn=null,Et=ee,rn=ee=0,vn=null;Et!==null&&rn<he.length;rn++){Et.index>rn?(vn=Et,Et=null):vn=Et.sibling;var Bn=ge(le,Et,he[rn],Le);if(Bn===null){Et===null&&(Et=vn);break}e&&Et&&Bn.alternate===null&&s(le,Et),ee=m(Bn,ee,rn),Rn===null?zt=Bn:Rn.sibling=Bn,Rn=Bn,Et=vn}if(rn===he.length)return o(le,Et),Sn&&fa(le,rn),zt;if(Et===null){for(;rn<he.length;rn++)Et=ze(le,he[rn],Le),Et!==null&&(ee=m(Et,ee,rn),Rn===null?zt=Et:Rn.sibling=Et,Rn=Et);return Sn&&fa(le,rn),zt}for(Et=r(Et);rn<he.length;rn++)vn=ve(Et,le,rn,he[rn],Le),vn!==null&&(e&&vn.alternate!==null&&Et.delete(vn.key===null?rn:vn.key),ee=m(vn,ee,rn),Rn===null?zt=vn:Rn.sibling=vn,Rn=vn);return e&&Et.forEach(function(Ga){return s(le,Ga)}),Sn&&fa(le,rn),zt}function Yt(le,ee,he,Le){if(he==null)throw Error(a(151));for(var zt=null,Rn=null,Et=ee,rn=ee=0,vn=null,Bn=he.next();Et!==null&&!Bn.done;rn++,Bn=he.next()){Et.index>rn?(vn=Et,Et=null):vn=Et.sibling;var Ga=ge(le,Et,Bn.value,Le);if(Ga===null){Et===null&&(Et=vn);break}e&&Et&&Ga.alternate===null&&s(le,Et),ee=m(Ga,ee,rn),Rn===null?zt=Ga:Rn.sibling=Ga,Rn=Ga,Et=vn}if(Bn.done)return o(le,Et),Sn&&fa(le,rn),zt;if(Et===null){for(;!Bn.done;rn++,Bn=he.next())Bn=ze(le,Bn.value,Le),Bn!==null&&(ee=m(Bn,ee,rn),Rn===null?zt=Bn:Rn.sibling=Bn,Rn=Bn);return Sn&&fa(le,rn),zt}for(Et=r(Et);!Bn.done;rn++,Bn=he.next())Bn=ve(Et,le,rn,Bn.value,Le),Bn!==null&&(e&&Bn.alternate!==null&&Et.delete(Bn.key===null?rn:Bn.key),ee=m(Bn,ee,rn),Rn===null?zt=Bn:Rn.sibling=Bn,Rn=Bn);return e&&Et.forEach(function(Tv){return s(le,Tv)}),Sn&&fa(le,rn),zt}function ns(le,ee,he,Le){if(typeof he=="object"&&he!==null&&he.type===j&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case w:e:{for(var zt=he.key;ee!==null;){if(ee.key===zt){if(zt=he.type,zt===j){if(ee.tag===7){o(le,ee.sibling),Le=f(ee,he.props.children),Le.return=le,le=Le;break e}}else if(ee.elementType===zt||typeof zt=="object"&&zt!==null&&zt.$$typeof===U&&ur(zt)===ee.type){o(le,ee.sibling),Le=f(ee,he.props),El(Le,he),Le.return=le,le=Le;break e}o(le,ee);break}else s(le,ee);ee=ee.sibling}he.type===j?(Le=ir(he.props.children,le.mode,Le,he.key),Le.return=le,le=Le):(Le=Wc(he.type,he.key,he.props,null,le.mode,Le),El(Le,he),Le.return=le,le=Le)}return v(le);case S:e:{for(zt=he.key;ee!==null;){if(ee.key===zt)if(ee.tag===4&&ee.stateNode.containerInfo===he.containerInfo&&ee.stateNode.implementation===he.implementation){o(le,ee.sibling),Le=f(ee,he.children||[]),Le.return=le,le=Le;break e}else{o(le,ee);break}else s(le,ee);ee=ee.sibling}Le=Jd(he,le.mode,Le),Le.return=le,le=Le}return v(le);case U:return he=ur(he),ns(le,ee,he,Le)}if(ce(he))return kt(le,ee,he,Le);if(ke(he)){if(zt=ke(he),typeof zt!="function")throw Error(a(150));return he=zt.call(he),Yt(le,ee,he,Le)}if(typeof he.then=="function")return ns(le,ee,Zc(he),Le);if(he.$$typeof===L)return ns(le,ee,qc(le,he),Le);Jc(le,he)}return typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint"?(he=""+he,ee!==null&&ee.tag===6?(o(le,ee.sibling),Le=f(ee,he),Le.return=le,le=Le):(o(le,ee),Le=Zd(he,le.mode,Le),Le.return=le,le=Le),v(le)):o(le,ee)}return function(le,ee,he,Le){try{Tl=0;var zt=ns(le,ee,he,Le);return Hr=null,zt}catch(Et){if(Et===Pr||Et===Kc)throw Et;var Rn=mi(29,Et,null,le.mode);return Rn.lanes=Le,Rn.return=le,Rn}finally{}}}var fr=f_(!0),h_=f_(!1),Na=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($n&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Kp(e,null,o),s}return Vc(e,r,s,o),Yc(e)}function Al(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,An(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Dl(){if(pf){var e=Ir;if(e!==null)throw e}}function Nl(e,s,o,r){pf=!1;var f=e.updateQueue;Na=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var X=A,me=X.next;X.next=null,v===null?m=me:v.next=me,v=X;var je=e.alternate;je!==null&&(je=je.updateQueue,A=je.lastBaseUpdate,A!==v&&(A===null?je.firstBaseUpdate=me:A.next=me,je.lastBaseUpdate=X))}if(m!==null){var ze=f.baseState;v=0,je=me=X=null,A=m;do{var ge=A.lane&-536870913,ve=ge!==A.lane;if(ve?(bn&ge)===ge:(r&ge)===ge){ge!==0&&ge===$r&&(pf=!0),je!==null&&(je=je.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var kt=e,Yt=A;ge=s;var ns=o;switch(Yt.tag){case 1:if(kt=Yt.payload,typeof kt=="function"){ze=kt.call(ns,ze,ge);break e}ze=kt;break e;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=Yt.payload,ge=typeof kt=="function"?kt.call(ns,ze,ge):kt,ge==null)break e;ze=x({},ze,ge);break e;case 2:Na=!0}}ge=A.callback,ge!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[ge]:ve.push(ge))}else ve={lane:ge,tag:A.tag,payload:A.payload,callback:A.callback,next:null},je===null?(me=je=ve,X=ze):je=je.next=ve,v|=ge;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ve=A,A=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);je===null&&(X=ze),f.baseState=X,f.firstBaseUpdate=me,f.lastBaseUpdate=je,m===null&&(f.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=ze}}function m_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function p_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)m_(o[e],s)}var Ur=N(null),eu=N(0);function __(e,s){e=Sa,re(eu,e),re(Ur,s),Sa=e|s.baseLanes}function _f(){re(eu,Sa),re(Ur,Ur.current)}function gf(){Sa=eu.current,ne(Ur),ne(eu)}var pi=N(null),Ni=null;function La(e){var s=e.alternate;re(Gs,Gs.current&1),re(pi,e),Ni===null&&(s===null||Ur.current!==null||s.memoizedState!==null)&&(Ni=e)}function yf(e){re(Gs,Gs.current),re(pi,e),Ni===null&&(Ni=e)}function g_(e){e.tag===22?(re(Gs,Gs.current),re(pi,e),Ni===null&&(Ni=e)):za()}function za(){re(Gs,Gs.current),re(pi,pi.current)}function _i(e){ne(pi),Ni===e&&(Ni=null),ne(Gs)}var Gs=N(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var pa=0,on=null,es=null,no=null,nu=!1,Vr=!1,hr=!1,su=0,Rl=0,Yr=null,y2=0;function $s(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!bt(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return pa=m,on=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$.H=e===null||e.memoizedState===null?eg:Lf,hr=!1,m=o(r,f),hr=!1,Vr&&(m=x_(s,o,r,f)),y_(e),m}function y_(e){$.H=zl;var s=es!==null&&es.next!==null;if(pa=0,no=es=on=null,nu=!1,Rl=0,Yr=null,s)throw Error(a(300));e===null||so||(e=e.dependencies,e!==null&&Xc(e)&&(so=!0))}function x_(e,s,o,r){on=e;var f=0;do{if(Vr&&(Yr=null),Rl=0,Vr=!1,25<=f)throw Error(a(301));if(f+=1,no=es=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}$.H=tg,m=s(o,r)}while(Vr);return m}function x2(){var e=$.H,s=e.useState()[0];return s=typeof s.then=="function"?Bl(s):s,e=e.useState()[0],(es!==null?es.memoizedState:null)!==e&&(on.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}pa=0,no=es=on=null,Vr=!1,Rl=su=0,Yr=null}function qo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return no===null?on.memoizedState=no=e:no=no.next=e,no}function Ks(){if(es===null){var e=on.alternate;e=e!==null?e.memoizedState:null}else e=es.next;var s=no===null?on.memoizedState:no.next;if(s!==null)no=s,es=e;else{if(e===null)throw on.alternate===null?Error(a(467)):Error(a(310));es=e,e={memoizedState:es.memoizedState,baseState:es.baseState,baseQueue:es.baseQueue,queue:es.queue,next:null},no===null?on.memoizedState=no=e:no=no.next=e}return no}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(e){var s=Rl;return Rl+=1,Yr===null&&(Yr=[]),e=c_(Yr,e,s),s=on,(no===null?s.memoizedState:no.next)===null&&(s=s.alternate,$.H=s===null||s.memoizedState===null?eg:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bl(e);if(e.$$typeof===L)return Do(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=on.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=on.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),on.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=ae;return s.index++,o}function _a(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Ks();return kf(s,es,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,X=null,me=s,je=!1;do{var ze=me.lane&-536870913;if(ze!==me.lane?(bn&ze)===ze:(pa&ze)===ze){var ge=me.revertLane;if(ge===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),ze===$r&&(je=!0);else if((pa&ge)===ge){me=me.next,ge===$r&&(je=!0);continue}else ze={lane:0,revertLane:me.revertLane,gesture:null,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null},X===null?(A=X=ze,v=m):X=X.next=ze,on.lanes|=ge,Ia|=ge;ze=me.action,hr&&o(m,ze),m=me.hasEagerState?me.eagerState:o(m,ze)}else ge={lane:ze,revertLane:me.revertLane,gesture:me.gesture,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null},X===null?(A=X=ge,v=m):X=X.next=ge,on.lanes|=ze,Ia|=ze;me=me.next}while(me!==null&&me!==s);if(X===null?v=m:X.next=A,!bt(m,e.memoizedState)&&(so=!0,je&&(o=Ir,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=X,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=Ks(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);bt(m,s.memoizedState)||(so=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function b_(e,s,o){var r=on,f=Ks(),m=Sn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!bt((es||f).memoizedState,o);if(v&&(f.memoizedState=o,so=!0),f=f.queue,Ef(S_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||no!==null&&no.memoizedState.tag&1){if(r.flags|=2048,Wr(9,{destroy:void 0},w_.bind(null,r,f,o,s),null),rs===null)throw Error(a(349));m||(pa&127)!==0||v_(r,s,o)}return o}function v_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=on.updateQueue,s===null?(s=ou(),on.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function w_(e,s,o,r){s.value=o,s.getSnapshot=r,C_(s)&&k_(e)}function S_(e,s,o){return o(function(){C_(s)&&k_(e)})}function C_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!bt(e,o)}catch{return!0}}function k_(e){var s=or(e,2);s!==null&&li(s,e,2)}function Mf(e){var s=qo();if(typeof e=="function"){var o=e;if(e=o(),hr){Be(!0);try{o()}finally{Be(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},s}function j_(e,s,o,r){return e.baseState=o,kf(e,es,typeof r=="function"?r:_a)}function b2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};$.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,M_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function M_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=$.T,v={};$.T=v;try{var A=o(f,r),X=$.S;X!==null&&X(v,A),T_(e,s,A)}catch(me){Tf(e,s,me)}finally{m!==null&&v.types!==null&&(m.types=v.types),$.T=m}}else try{m=o(f,r),T_(e,s,m)}catch(me){Tf(e,s,me)}}function T_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){E_(e,s,r)},function(r){return Tf(e,s,r)}):E_(e,s,o)}function E_(e,s,o){s.status="fulfilled",s.value=o,A_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,M_(e,o)))}function Tf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,A_(s),s=s.next;while(s!==r)}e.action=null}function A_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function D_(e,s){return s}function N_(e,s){if(Sn){var o=rs.formState;if(o!==null){e:{var r=on;if(Sn){if(Cs){t:{for(var f=Cs,m=Di;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Cs=Ri(f.nextSibling),r=f.data==="F!";break e}}Aa(r)}r=!1}r&&(s=o[0])}}return o=qo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:D_,lastRenderedState:s},o.queue=r,o=Q_.bind(null,on,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,on,!1,r.queue),r=qo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=b2.bind(null,on,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function R_(e){var s=Ks();return B_(s,es,e)}function B_(e,s,o){if(s=kf(e,s,D_)[0],e=au(_a)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Bl(s)}catch(v){throw v===Pr?Kc:v}else r=s;s=Ks();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(on.flags|=2048,Wr(9,{destroy:void 0},v2.bind(null,f,o),null)),[r,m,e]}function v2(e,s){e.action=s}function L_(e){var s=Ks(),o=es;if(o!==null)return B_(s,o,e);Ks(),s=s.memoizedState,o=Ks();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Wr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=on.updateQueue,s===null&&(s=ou(),on.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function z_(){return Ks().memoizedState}function ru(e,s,o,r){var f=qo();on.flags|=e,f.memoizedState=Wr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=Ks();r=r===void 0?null:r;var m=f.memoizedState.inst;es!==null&&r!==null&&xf(r,es.memoizedState.deps)?f.memoizedState=Wr(s,m,o,r):(on.flags|=e,f.memoizedState=Wr(1|s,m,o,r))}function O_(e,s){ru(8390656,8,e,s)}function Ef(e,s){lu(2048,8,e,s)}function w2(e){on.flags|=4;var s=on.updateQueue;if(s===null)s=ou(),on.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function $_(e){var s=Ks().memoizedState;return w2({ref:s,nextImpl:e}),function(){if(($n&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function I_(e,s){return lu(4,2,e,s)}function P_(e,s){return lu(4,4,e,s)}function H_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function U_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,H_.bind(null,s,e),o)}function Af(){}function V_(e,s){var o=Ks();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function Y_(e,s){var o=Ks();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),hr){Be(!0);try{e()}finally{Be(!1)}}return o.memoizedState=[r,s],r}function Df(e,s,o){return o===void 0||(pa&1073741824)!==0&&(bn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Wg(),on.lanes|=e,Ia|=e,o)}function W_(e,s,o,r){return bt(o,s)?o:Ur.current!==null?(e=Df(e,o,r),bt(e,s)||(so=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(bn&261930)===0?(so=!0,e.memoizedState=o):(e=Wg(),on.lanes|=e,Ia|=e,s)}function F_(e,s,o,r,f){var m=oe.p;oe.p=m!==0&&8>m?m:8;var v=$.T,A={};$.T=A,Bf(e,!1,s,o);try{var X=f(),me=$.S;if(me!==null&&me(A,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var je=g2(X,r);Ll(e,s,je,xi(e))}else Ll(e,s,r,xi(e))}catch(ze){Ll(e,s,{then:function(){},status:"rejected",reason:ze},xi())}finally{oe.p=m,v!==null&&A.types!==null&&(v.types=A.types),$.T=v}}function S2(){}function Nf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=X_(e).queue;F_(e,f,s,G,o===null?S2:function(){return q_(e),o(r)})}function X_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:G},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function q_(e){var s=X_(e);s.next===null&&(s=e.alternate.memoizedState),Ll(e,s.next.queue,{},xi())}function Rf(){return Do(Zl)}function G_(){return Ks().memoizedState}function K_(){return Ks().memoizedState}function C2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=xi();e=Ra(o);var r=Ba(s,e,o);r!==null&&(li(r,s,o),Al(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function k2(e,s,o){var r=xi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?Z_(s,o):(o=Kd(e,s,o,r),o!==null&&(li(o,e,r),J_(o,s,r)))}function Q_(e,s,o){var r=xi();Ll(e,s,o,r)}function Ll(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))Z_(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,bt(A,v))return Vc(e,s,f,0),rs===null&&Uc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return li(o,e,r),J_(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&li(s,e,2)}function cu(e){var s=e.alternate;return e===on||s!==null&&s===on}function Z_(e,s){Vr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function J_(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,An(e,o)}}var zl={readContext:Do,use:iu,useCallback:$s,useContext:$s,useEffect:$s,useImperativeHandle:$s,useLayoutEffect:$s,useInsertionEffect:$s,useMemo:$s,useReducer:$s,useRef:$s,useState:$s,useDebugValue:$s,useDeferredValue:$s,useTransition:$s,useSyncExternalStore:$s,useId:$s,useHostTransitionStatus:$s,useFormState:$s,useActionState:$s,useOptimistic:$s,useMemoCache:$s,useCacheRefresh:$s};zl.useEffectEvent=$s;var eg={readContext:Do,use:iu,useCallback:function(e,s){return qo().memoizedState=[e,s===void 0?null:s],e},useContext:Do,useEffect:O_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,H_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=qo();s=s===void 0?null:s;var r=e();if(hr){Be(!0);try{e()}finally{Be(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=qo();if(o!==void 0){var f=o(s);if(hr){Be(!0);try{o(s)}finally{Be(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=k2.bind(null,on,e),[r.memoizedState,e]},useRef:function(e){var s=qo();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=Q_.bind(null,on,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=qo();return Df(o,e,s)},useTransition:function(){var e=Mf(!1);return e=F_.bind(null,on,e.queue,!0,!1),qo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=on,f=qo();if(Sn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),rs===null)throw Error(a(349));(bn&127)!==0||v_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,O_(S_.bind(null,r,m,e),[e]),r.flags|=2048,Wr(9,{destroy:void 0},w_.bind(null,r,m,o,s),null),o},useId:function(){var e=qo(),s=rs.identifierPrefix;if(Sn){var o=na,r=ta;o=(r&~(1<<32-gt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=y2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:N_,useActionState:N_,useOptimistic:function(e){var s=qo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,on,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return qo().memoizedState=C2.bind(null,on)},useEffectEvent:function(e){var s=qo(),o={impl:e};return s.memoizedState=o,function(){if(($n&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:Do,use:iu,useCallback:V_,useContext:Do,useEffect:Ef,useImperativeHandle:U_,useInsertionEffect:I_,useLayoutEffect:P_,useMemo:Y_,useReducer:au,useRef:z_,useState:function(){return au(_a)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ks();return W_(o,es.memoizedState,e,s)},useTransition:function(){var e=au(_a)[0],s=Ks().memoizedState;return[typeof e=="boolean"?e:Bl(e),s]},useSyncExternalStore:b_,useId:G_,useHostTransitionStatus:Rf,useFormState:R_,useActionState:R_,useOptimistic:function(e,s){var o=Ks();return j_(o,es,e,s)},useMemoCache:Cf,useCacheRefresh:K_};Lf.useEffectEvent=$_;var tg={readContext:Do,use:iu,useCallback:V_,useContext:Do,useEffect:Ef,useImperativeHandle:U_,useInsertionEffect:I_,useLayoutEffect:P_,useMemo:Y_,useReducer:jf,useRef:z_,useState:function(){return jf(_a)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Ks();return es===null?Df(o,e,s):W_(o,es.memoizedState,e,s)},useTransition:function(){var e=jf(_a)[0],s=Ks().memoizedState;return[typeof e=="boolean"?e:Bl(e),s]},useSyncExternalStore:b_,useId:G_,useHostTransitionStatus:Rf,useFormState:L_,useActionState:L_,useOptimistic:function(e,s){var o=Ks();return es!==null?j_(o,es,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:K_};tg.useEffectEvent=$_;function zf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Of={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=xi(),f=Ra(r);f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(li(s,e,r),Al(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=xi(),f=Ra(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(li(s,e,r),Al(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=xi(),r=Ra(o);r.tag=2,s!=null&&(r.callback=s),s=Ba(e,r,o),s!==null&&(li(s,e,o),Al(s,e,o))}};function ng(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!ft(o,r)||!ft(f,m):!0}function sg(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Of.enqueueReplaceState(s,s.state,null)}function mr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function og(e){Hc(e)}function ig(e){console.error(e)}function ag(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function rg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=Ra(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function lg(e){return e=Ra(e),e.tag=3,e}function cg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){rg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){rg(s,o,r),typeof f!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function j2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Or(s,o,f,!0),o=pi.current,o!==null){switch(o.tag){case 31:case 13:return Ni===null?wu():o.alternate===null&&Is===0&&(Is=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),wu(),!1}if(Sn)return s=pi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),kl(Ti(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),kl(Ti(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ti(r,o),f=$f(e.stateNode,r,f),mf(e,f),Is!==4&&(Is=2)),!1;var m=Error(a(520),{cause:r});if(m=Ti(m,o),Yl===null?Yl=[m]:Yl.push(m),Is!==4&&(Is=2),s===null)return!0;r=Ti(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pa===null||!Pa.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=lg(f),cg(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),so=!1;function No(e,s,o,r){s.child=e===null?h_(s,null,o,r):fr(s,e.child,o,r)}function ug(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return lr(s),r=bf(e,s,o,v,m,f),A=vf(),e!==null&&!so?(wf(e,s,f),ga(e,s,f)):(Sn&&A&&ef(s),s.flags|=1,No(e,s,r,f),s.child)}function dg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,fg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:ft,o(v,r)&&e.ref===s.ref)return ga(e,s,f)}return s.flags|=1,e=da(m,r),e.ref=s.ref,e.return=s,s.child=e}function fg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(ft(m,r)&&e.ref===s.ref)if(so=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(so=!0);else return s.lanes=e.lanes,ga(e,s,f)}return Pf(e,s,o,r,f)}function hg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return mg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gc(s,m!==null?m.cachePool:null),m!==null?__(s,m):_f(),g_(s);else return r=s.lanes=536870912,mg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(Gc(s,m.cachePool),__(s,m),za(),s.memoizedState=null):(e!==null&&Gc(s,null),_f(),za());return No(e,s,f,o),s.child}function Ol(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function mg(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:to._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&Gc(s,null),_f(),g_(s),e!==null&&Or(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function pg(e,s,o){return fr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,_i(s),s.memoizedState=null,e}function M2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Sn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,Ol(null,e);if(yf(s),(e=Cs)?(e=M0(e,Di),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=Zp(e),o.return=s,s.child=o,Ao=s,Cs=null)):e=null,e===null)throw Aa(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=pg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(so||Or(e,s,o,!1),f=(o&e.childLanes)!==0,so||f){if(r=rs,r!==null&&(v=Mn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,or(e,v),li(r,e,v),If;wu(),s=pg(e,s,o)}else e=m.treeContext,Cs=Ri(v.nextSibling),Ao=s,Sn=!0,Ea=null,Di=!1,e!==null&&t_(s,e),s=du(s,r),s.flags|=4096;return s}return e=da(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return lr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!so?(wf(e,s,f),ga(e,s,f)):(Sn&&r&&ef(s),s.flags|=1,No(e,s,o,f),s.child)}function _g(e,s,o,r,f,m){return lr(s),s.updateQueue=null,o=x_(s,r,o,f),y_(e),r=vf(),e!==null&&!so?(wf(e,s,m),ga(e,s,m)):(Sn&&r&&ef(s),s.flags|=1,No(e,s,o,m),s.child)}function gg(e,s,o,r,f){if(lr(s),s.stateNode===null){var m=Rr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Do(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Of,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Do(v):Rr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(zf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Of.enqueueReplaceState(m,m.state,null),Nl(s,r,m,f),Dl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,X=mr(o,A);m.props=X;var me=m.context,je=o.contextType;v=Rr,typeof je=="object"&&je!==null&&(v=Do(je));var ze=o.getDerivedStateFromProps;je=typeof ze=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,je||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||me!==v)&&sg(s,m,r,v),Na=!1;var ge=s.memoizedState;m.state=ge,Nl(s,r,m,f),Dl(),me=s.memoizedState,A||ge!==me||Na?(typeof ze=="function"&&(zf(s,o,ze,r),me=s.memoizedState),(X=Na||ng(s,o,X,r,ge,me,v))?(je||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=me),m.props=r,m.state=me,m.context=v,r=X):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,je=mr(o,v),m.props=je,ze=s.pendingProps,ge=m.context,me=o.contextType,X=Rr,typeof me=="object"&&me!==null&&(X=Do(me)),A=o.getDerivedStateFromProps,(me=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ze||ge!==X)&&sg(s,m,r,X),Na=!1,ge=s.memoizedState,m.state=ge,Nl(s,r,m,f),Dl();var ve=s.memoizedState;v!==ze||ge!==ve||Na||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&(zf(s,o,A,r),ve=s.memoizedState),(je=Na||ng(s,o,je,r,ge,ve,X)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(me||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ve,X),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ve,X)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ve),m.props=r,m.state=ve,m.context=X,r=je):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=fr(s,e.child,null,f),s.child=fr(s,null,o,f)):No(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ga(e,s,f),e}function yg(e,s,o,r){return ar(),s.flags|=256,No(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:r_()}}function Vf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=yi),e}function xg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Gs.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(Sn){if(f?La(s):za(),(e=Cs)?(e=M0(e,Di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=Zp(e),o.return=s,s.child=o,Ao=s,Cs=null)):e=null,e===null)throw Aa(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(za(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=ir(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,Ol(null,r)):(La(s),Yf(s,A))}var X=e.memoizedState;if(X!==null&&(A=X.dehydrated,A!==null)){if(m)s.flags&256?(La(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(za(),s.child=e.child,s.flags|=128,s=null):(za(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=ir(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,fr(s,e.child,null,o),r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,s=Ol(null,r));else if(La(s),kh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var me=v.dgst;v=me,r=Error(a(419)),r.stack="",r.digest=v,kl({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(so||Or(e,s,o,!1),v=(o&e.childLanes)!==0,so||v){if(v=rs,v!==null&&(r=Mn(v,o),r!==0&&r!==X.retryLane))throw X.retryLane=r,or(e,r),li(v,e,r),If;Ch(A)||wu(),s=Wf(e,s,o)}else Ch(A)?(s.flags|=192,s.child=e.child,s=null):(e=X.treeContext,Cs=Ri(A.nextSibling),Ao=s,Sn=!0,Ea=null,Di=!1,e!==null&&t_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(za(),A=r.fallback,f=s.mode,X=e.child,me=X.sibling,r=da(X,{mode:"hidden",children:r.children}),r.subtreeFlags=X.subtreeFlags&65011712,me!==null?A=da(me,A):(A=ir(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,Ol(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Uf(o):(f=A.cachePool,f!==null?(X=to._currentValue,f=f.parent!==X?{parent:X,pool:X}:f):f=r_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Vf(e,v,o),s.memoizedState=Hf,Ol(e.child,r)):(La(s),o=e.child,e=o.sibling,o=da(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=mi(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return fr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function bg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function vg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Gs.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,re(Gs,v),No(e,s,r,o),r=Sn?Cl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bg(e,o,s);else if(e.tag===19)bg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ga(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ia|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Or(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=da(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=da(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function T2(e,s,o){switch(s.tag){case 3:at(s,s.stateNode.containerInfo),Da(s,to,e.memoizedState.cache),ar();break;case 27:case 5:It(s);break;case 4:at(s,s.stateNode.containerInfo);break;case 10:Da(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(La(s),s.flags|=128,null):(o&s.child.childLanes)!==0?xg(e,s,o):(La(s),e=ga(e,s,o),e!==null?e.sibling:null);La(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Or(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return vg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),re(Gs,Gs.current),r)break;return null;case 22:return s.lanes=0,hg(e,s,o,s.pendingProps);case 24:Da(s,to,e.memoizedState.cache)}return ga(e,s,o)}function wg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)so=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return so=!1,T2(e,s,o);so=(e.flags&131072)!==0}else so=!1,Sn&&(s.flags&1048576)!==0&&e_(s,Cl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=ur(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=mr(e,r),s.tag=1,s=gg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===D){s.tag=11,s=ug(null,s,e,r,o);break e}else if(f===W){s.tag=14,s=dg(null,s,e,r,o);break e}}throw s=Q(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=mr(r,s.pendingProps),gg(e,s,r,f,o);case 3:e:{if(at(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Nl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Da(s,to,r),r!==m.cache&&rf(s,[to],o,!0),Dl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=yg(e,s,r,o);break e}else if(r!==f){f=Ti(Error(a(424)),s),kl(f),s=yg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Cs=Ri(e.firstChild),Ao=s,Sn=!0,Ea=null,Di=!0,o=h_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ar(),r===f){s=ga(e,s,o);break e}No(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=R0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Sn||(o=s.type,e=s.pendingProps,r=Eu($e.current).createElement(o),r[un]=s,r[pn]=e,Ro(r,o,e),zn(r),s.stateNode=r):s.memoizedState=R0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return It(s),e===null&&Sn&&(r=s.stateNode=A0(s.type,s.pendingProps,$e.current),Ao=s,Di=!0,f=Cs,Ya(s.type)?(jh=f,Cs=Ri(r.firstChild)):Cs=f),No(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Sn&&((f=r=Cs)&&(r=ov(r,s.type,s.pendingProps,Di),r!==null?(s.stateNode=r,Ao=s,Cs=Ri(r.firstChild),Di=!1,f=!0):f=!1),f||Aa(s)),It(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,x2,null,null,o),Zl._currentValue=f),fu(e,s),No(e,s,r,o),s.child;case 6:return e===null&&Sn&&((e=o=Cs)&&(o=iv(o,s.pendingProps,Di),o!==null?(s.stateNode=o,Ao=s,Cs=null,e=!0):e=!1),e||Aa(s)),null;case 13:return xg(e,s,o);case 4:return at(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=fr(s,null,r,o):No(e,s,r,o),s.child;case 11:return ug(e,s,s.type,s.pendingProps,o);case 7:return No(e,s,s.pendingProps,o),s.child;case 8:return No(e,s,s.pendingProps.children,o),s.child;case 12:return No(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Da(s,s.type,r.value),No(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,lr(s),f=Do(f),r=r(f),s.flags|=1,No(e,s,r,o),s.child;case 14:return dg(e,s,s.type,s.pendingProps,o);case 15:return fg(e,s,s.type,s.pendingProps,o);case 19:return vg(e,s,o);case 31:return M2(e,s,o);case 22:return hg(e,s,o,s.pendingProps);case 24:return lr(s),r=Do(to),e===null?(f=uf(),f===null&&(f=rs,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),Da(s,to,f)):((e.lanes&o)!==0&&(hf(e,s),Nl(s,null,null,o),Dl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Da(s,to,r)):(r=m.cache,Da(s,to,r),r!==f.cache&&rf(s,[to],o,!0))),No(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ya(e){e.flags|=4}function qf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Gg())e.flags|=8192;else throw dr=Qc,df}else e.flags&=-16777217}function Sg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$0(s))if(Gg())e.flags|=8192;else throw dr=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?yt():536870912,e.lanes|=s,Gr|=s)}function $l(e,s){if(!Sn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ks(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function E2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ks(s),null;case 1:return ks(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ma(to),rt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(zr(s)?ya(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),ks(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ya(s),m!==null?(ks(s),Sg(s,m)):(ks(s),qf(s,f,null,r,o))):m?m!==e.memoizedState?(ya(s),ks(s),Sg(s,m)):(ks(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ya(s),ks(s),qf(s,f,e,r,o)),null;case 27:if(Zt(s),o=$e.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ks(s),null}e=fe.current,zr(s)?n_(s):(e=A0(f,r,o),s.stateNode=e,ya(s))}return ks(s),null;case 5:if(Zt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ks(s),null}if(m=fe.current,zr(s))n_(s);else{var v=Eu($e.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[un]=s,m[pn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Ro(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ya(s)}}return ks(s),qf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=$e.current,zr(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=Ao,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[un]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||x0(e.nodeValue,o)),e||Aa(s,!0)}else e=Eu(e).createTextNode(r),e[un]=s,s.stateNode=e}return ks(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=zr(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[un]=s}else ar(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ks(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(_i(s),s):(_i(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ks(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=zr(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[un]=s}else ar(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ks(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(_i(s),s):(_i(s),null)}return _i(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),ks(s),null);case 4:return rt(),e===null&&_h(s.stateNode.containerInfo),ks(s),null;case 10:return ma(s.type),ks(s),null;case 19:if(ne(Gs),r=s.memoizedState,r===null)return ks(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)$l(r,!1);else{if(Is!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,$l(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Qp(o,e),o=o.sibling;return re(Gs,Gs.current&1|2),Sn&&fa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&mt()>xu&&(s.flags|=128,f=!0,$l(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),$l(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Sn)return ks(s),null}else 2*mt()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,$l(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=mt(),e.sibling=null,o=Gs.current,re(Gs,f?o&1|2:o&1),Sn&&fa(s,r.treeForkCount),e):(ks(s),null);case 22:case 23:return _i(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(ks(s),s.subtreeFlags&6&&(s.flags|=8192)):ks(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ne(cr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ma(to),ks(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function A2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ma(to),rt(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Zt(s),null;case 31:if(s.memoizedState!==null){if(_i(s),s.alternate===null)throw Error(a(340));ar()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(_i(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));ar()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ne(Gs),null;case 4:return rt(),null;case 10:return ma(s.type),null;case 22:case 23:return _i(s),gf(),e!==null&&ne(cr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ma(to),null;case 25:return null;default:return null}}function Cg(e,s){switch(tf(s),s.tag){case 3:ma(to),rt();break;case 26:case 27:case 5:Zt(s);break;case 4:rt();break;case 31:s.memoizedState!==null&&_i(s);break;case 13:_i(s);break;case 19:ne(Gs);break;case 10:ma(s.type);break;case 22:case 23:_i(s),gf(),e!==null&&ne(cr);break;case 24:ma(to)}}function Il(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Xn(s,s.return,A)}}function Oa(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var X=o,me=A;try{me()}catch(je){Xn(f,X,je)}}}r=r.next}while(r!==m)}}catch(je){Xn(s,s.return,je)}}function kg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{p_(s,o)}catch(r){Xn(e,e.return,r)}}}function jg(e,s,o){o.props=mr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Xn(e,s,r)}}function Pl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Xn(e,s,f)}}function sa(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Xn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Xn(e,s,f)}else o.current=null}function Mg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Xn(e,e.return,f)}}function Gf(e,s,o){try{var r=e.stateNode;Z2(r,e.type,o,s),r[pn]=s}catch(f){Xn(e,e.return,f)}}function Tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Js));else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Eg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Ro(s,r,o),s[un]=e,s[pn]=o}catch(m){Xn(e,e.return,m)}}var xa=!1,oo=!1,Zf=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,Co=null;function D2(e,s){if(e=e.containerInfo,xh=zu,e=Cn(e),Vn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,X=-1,me=0,je=0,ze=e,ge=null;t:for(;;){for(var ve;ze!==o||f!==0&&ze.nodeType!==3||(A=v+f),ze!==m||r!==0&&ze.nodeType!==3||(X=v+r),ze.nodeType===3&&(v+=ze.nodeValue.length),(ve=ze.firstChild)!==null;)ge=ze,ze=ve;for(;;){if(ze===e)break t;if(ge===o&&++me===f&&(A=v),ge===m&&++je===r&&(X=v),(ve=ze.nextSibling)!==null)break;ze=ge,ge=ze.parentNode}ze=ve}o=A===-1||X===-1?null:{start:A,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},zu=!1,Co=s;Co!==null;)if(s=Co,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,Co=e;else for(;Co!==null;){switch(s=Co,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var kt=mr(o.type,f);e=r.getSnapshotBeforeUpdate(kt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){Xn(o,o.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,Co=e;break}Co=s.return}}function Dg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:va(e,o),r&4&&Il(5,o);break;case 1:if(va(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Xn(o,o.return,v)}else{var f=mr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xn(o,o.return,v)}}r&64&&kg(o),r&512&&Pl(o,o.return);break;case 3:if(va(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{p_(e,s)}catch(v){Xn(o,o.return,v)}}break;case 27:s===null&&r&4&&Eg(o);case 26:case 5:va(e,o),s===null&&r&4&&Mg(o),r&512&&Pl(o,o.return);break;case 12:va(e,o);break;case 31:va(e,o),r&4&&Bg(e,o);break;case 13:va(e,o),r&4&&Lg(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=P2.bind(null,o),av(e,o))));break;case 22:if(r=o.memoizedState!==null||xa,!r){s=s!==null&&s.memoizedState!==null||oo,f=xa;var m=oo;xa=r,(oo=s)&&!m?wa(e,o,(o.subtreeFlags&8772)!==0):va(e,o),xa=f,oo=m}break;case 30:break;default:va(e,o)}}function Ng(e){var s=e.alternate;s!==null&&(e.alternate=null,Ng(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&Ho(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var As=null,oi=!1;function ba(e,s,o){for(o=o.child;o!==null;)Rg(e,s,o),o=o.sibling}function Rg(e,s,o){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(Qe,o)}catch{}switch(o.tag){case 26:oo||sa(o,s),ba(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:oo||sa(o,s);var r=As,f=oi;Ya(o.type)&&(As=o.stateNode,oi=!1),ba(e,s,o),Gl(o.stateNode),As=r,oi=f;break;case 5:oo||sa(o,s);case 6:if(r=As,f=oi,As=null,ba(e,s,o),As=r,oi=f,As!==null)if(oi)try{(As.nodeType===9?As.body:As.nodeName==="HTML"?As.ownerDocument.body:As).removeChild(o.stateNode)}catch(m){Xn(o,s,m)}else try{As.removeChild(o.stateNode)}catch(m){Xn(o,s,m)}break;case 18:As!==null&&(oi?(e=As,k0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),sl(e)):k0(As,o.stateNode));break;case 4:r=As,f=oi,As=o.stateNode.containerInfo,oi=!0,ba(e,s,o),As=r,oi=f;break;case 0:case 11:case 14:case 15:Oa(2,o,s),oo||Oa(4,o,s),ba(e,s,o);break;case 1:oo||(sa(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&jg(o,s,r)),ba(e,s,o);break;case 21:ba(e,s,o);break;case 22:oo=(r=oo)||o.memoizedState!==null,ba(e,s,o),oo=r;break;default:ba(e,s,o)}}function Bg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sl(e)}catch(o){Xn(s,s.return,o)}}}function Lg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sl(e)}catch(o){Xn(s,s.return,o)}}function N2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Ag),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Ag),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=N2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=H2.bind(null,e,r);r.then(f,f)}})}function ii(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){As=A.stateNode,oi=!1;break e}break;case 5:As=A.stateNode,oi=!1;break e;case 3:case 4:As=A.stateNode.containerInfo,oi=!0;break e}A=A.return}if(As===null)throw Error(a(160));Rg(m,v,f),As=null,oi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)zg(s,e),s=s.sibling}var Yi=null;function zg(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(s,e),ai(e),r&4&&(Oa(3,e,e.return),Il(3,e),Oa(5,e,e.return));break;case 1:ii(s,e),ai(e),r&512&&(oo||o===null||sa(o,o.return)),r&64&&xa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Yi;if(ii(s,e),ai(e),r&512&&(oo||o===null||sa(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[jo]||m[un]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Ro(m,r,o),m[un]=e,zn(m),r=m;break e;case"link":var v=z0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),Ro(m,r,o),f.head.appendChild(m);break;case"meta":if(v=z0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),Ro(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[un]=e,zn(m),r=m}e.stateNode=r}else O0(f,e.type,e.stateNode);else e.stateNode=L0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?O0(f,e.type,e.stateNode):L0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Gf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ii(s,e),ai(e),r&512&&(oo||o===null||sa(o,o.return)),o!==null&&r&4&&Gf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ii(s,e),ai(e),r&512&&(oo||o===null||sa(o,o.return)),e.flags&32){f=e.stateNode;try{Vo(f,"")}catch(kt){Xn(e,e.return,kt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,Gf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(ii(s,e),ai(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(kt){Xn(e,e.return,kt)}}break;case 3:if(Nu=null,f=Yi,Yi=Au(s.containerInfo),ii(s,e),Yi=f,ai(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{sl(s.containerInfo)}catch(kt){Xn(e,e.return,kt)}Zf&&(Zf=!1,Og(e));break;case 4:r=Yi,Yi=Au(e.stateNode.containerInfo),ii(s,e),ai(e),Yi=r;break;case 12:ii(s,e),ai(e);break;case 31:ii(s,e),ai(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ii(s,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=mt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var X=o!==null&&o.memoizedState!==null,me=xa,je=oo;if(xa=me||f,oo=je||X,ii(s,e),oo=je,xa=me,ai(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||X||xa||oo||pr(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){X=o=s;try{if(m=X.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=X.stateNode;var ze=X.memoizedProps.style,ge=ze!=null&&ze.hasOwnProperty("display")?ze.display:null;A.style.display=ge==null||typeof ge=="boolean"?"":(""+ge).trim()}}catch(kt){Xn(X,X.return,kt)}}}else if(s.tag===6){if(o===null){X=s;try{X.stateNode.nodeValue=f?"":X.memoizedProps}catch(kt){Xn(X,X.return,kt)}}}else if(s.tag===18){if(o===null){X=s;try{var ve=X.stateNode;f?j0(ve,!0):j0(X.stateNode,!1)}catch(kt){Xn(X,X.return,kt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ii(s,e),ai(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ii(s,e),ai(e)}}function ai(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Tg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Vo(v,""),o.flags&=-33);var A=Kf(e);pu(e,A,v);break;case 3:case 4:var X=o.stateNode.containerInfo,me=Kf(e);Qf(e,me,X);break;default:throw Error(a(161))}}catch(je){Xn(e,e.return,je)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Og(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function va(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Dg(e,s.alternate,s),s=s.sibling}function pr(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Oa(4,s,s.return),pr(s);break;case 1:sa(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&jg(s,s.return,o),pr(s);break;case 27:Gl(s.stateNode);case 26:case 5:sa(s,s.return),pr(s);break;case 22:s.memoizedState===null&&pr(s);break;case 30:pr(s);break;default:pr(s)}e=e.sibling}}function wa(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:wa(f,m,o),Il(4,m);break;case 1:if(wa(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(me){Xn(r,r.return,me)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var X=f.shared.hiddenCallbacks;if(X!==null)for(f.shared.hiddenCallbacks=null,f=0;f<X.length;f++)m_(X[f],A)}catch(me){Xn(r,r.return,me)}}o&&v&64&&kg(m),Pl(m,m.return);break;case 27:Eg(m);case 26:case 5:wa(f,m,o),o&&r===null&&v&4&&Mg(m),Pl(m,m.return);break;case 12:wa(f,m,o);break;case 31:wa(f,m,o),o&&v&4&&Bg(f,m);break;case 13:wa(f,m,o),o&&v&4&&Lg(f,m);break;case 22:m.memoizedState===null&&wa(f,m,o),Pl(m,m.return);break;case 30:break;default:wa(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&jl(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&jl(e))}function Wi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)$g(e,s,o,r),s=s.sibling}function $g(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Wi(e,s,o,r),f&2048&&Il(9,s);break;case 1:Wi(e,s,o,r);break;case 3:Wi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&jl(e)));break;case 12:if(f&2048){Wi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){Xn(s,s.return,X)}}else Wi(e,s,o,r);break;case 31:Wi(e,s,o,r);break;case 13:Wi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Wi(e,s,o,r):Hl(e,s):m._visibility&2?Wi(e,s,o,r):(m._visibility|=2,Fr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Wi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Wi(e,s,o,r)}}function Fr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,X=r,me=v.flags;switch(v.tag){case 0:case 11:case 15:Fr(m,v,A,X,f),Il(8,v);break;case 23:break;case 22:var je=v.stateNode;v.memoizedState!==null?je._visibility&2?Fr(m,v,A,X,f):Hl(m,v):(je._visibility|=2,Fr(m,v,A,X,f)),f&&me&2048&&Jf(v.alternate,v);break;case 24:Fr(m,v,A,X,f),f&&me&2048&&eh(v.alternate,v);break;default:Fr(m,v,A,X,f)}s=s.sibling}}function Hl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Hl(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Hl(o,r),f&2048&&eh(r.alternate,r);break;default:Hl(o,r)}s=s.sibling}}var Ul=8192;function Xr(e,s,o){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)Ig(e,s,o),e=e.sibling}function Ig(e,s,o){switch(e.tag){case 26:Xr(e,s,o),e.flags&Ul&&e.memoizedState!==null&&yv(o,Yi,e.memoizedState,e.memoizedProps);break;case 5:Xr(e,s,o);break;case 3:case 4:var r=Yi;Yi=Au(e.stateNode.containerInfo),Xr(e,s,o),Yi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ul,Ul=16777216,Xr(e,s,o),Ul=r):Xr(e,s,o));break;default:Xr(e,s,o)}}function Pg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Vl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Co=r,Ug(r,e)}Pg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:Vl(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Vl(e);break;case 12:Vl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Vl(e);break;default:Vl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];Co=r,Ug(r,e)}Pg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Oa(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Ug(e,s){for(;Co!==null;){var o=Co;switch(o.tag){case 0:case 11:case 15:Oa(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:jl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,Co=r;else e:for(o=e;Co!==null;){r=Co;var f=r.sibling,m=r.return;if(Ng(r),r===o){Co=null;break e}if(f!==null){f.return=m,Co=f;break e}Co=m}}}var R2={getCacheForType:function(e){var s=Do(to),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Do(to).controller.signal}},B2=typeof WeakMap=="function"?WeakMap:Map,$n=0,rs=null,_n=null,bn=0,Fn=0,gi=null,$a=!1,qr=!1,th=!1,Sa=0,Is=0,Ia=0,_r=0,nh=0,yi=0,Gr=0,Yl=null,ri=null,sh=!1,yu=0,Vg=0,xu=1/0,bu=null,Pa=null,mo=0,Ha=null,Kr=null,Ca=0,oh=0,ih=null,Yg=null,Wl=0,ah=null;function xi(){return($n&2)!==0&&bn!==0?bn&-bn:$.T!==null?fh():gs()}function Wg(){if(yi===0)if((bn&536870912)===0||Sn){var e=jt;jt<<=1,(jt&3932160)===0&&(jt=262144),yi=e}else yi=536870912;return e=pi.current,e!==null&&(e.flags|=32),yi}function li(e,s,o){(e===rs&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Ua(e,bn,yi,!1)),ut(e,o),(($n&2)===0||e!==rs)&&(e===rs&&(($n&2)===0&&(_r|=o),Is===4&&Ua(e,bn,yi,!1)),oa(e))}function Fg(e,s,o){if(($n&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Lt(e,s),f=r?O2(e,s):lh(e,s,!0),m=r;do{if(f===0){qr&&!r&&Ua(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!L2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Yl;var X=A.current.memoizedState.isDehydrated;if(X&&(Qr(A,v).flags|=256),v=lh(A,v,!1),v!==2){if(th&&!X){A.errorRecoveryDisabledLanes|=m,_r|=m,f=4;break e}m=ri,ri=f,m!==null&&(ri===null?ri=m:ri.push.apply(ri,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Qr(e,0),Ua(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ua(r,s,yi,!$a);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-mt(),10<f)){if(Ua(r,s,yi,!$a),Ge(r,0,!0)!==0)break e;Ca=s,r.timeoutHandle=S0(Xg.bind(null,r,o,ri,bu,sh,s,yi,_r,Gr,$a,m,"Throttled",-0,0),f);break e}Xg(r,o,ri,bu,sh,s,yi,_r,Gr,$a,m,null,-0,0)}}break}while(!0);oa(e)}function Xg(e,s,o,r,f,m,v,A,X,me,je,ze,ge,ve){if(e.timeoutHandle=-1,ze=s.subtreeFlags,ze&8192||(ze&16785408)===16785408){ze={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Js},Ig(s,m,ze);var kt=(m&62914560)===m?yu-mt():(m&4194048)===m?Vg-mt():0;if(kt=xv(ze,kt),kt!==null){Ca=m,e.cancelPendingCommit=kt(t0.bind(null,e,s,m,o,r,f,v,A,X,je,ze,null,ge,ve)),Ua(e,m,v,!me);return}}t0(e,s,m,o,r,f,v,A,X)}function L2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!bt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ua(e,s,o,r){s&=~nh,s&=~_r,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-gt(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&jn(e,o,s)}function vu(){return($n&6)===0?(Fl(0),!1):!0}function rh(){if(_n!==null){if(Fn===0)var e=_n.return;else e=_n,ha=rr=null,Sf(e),Hr=null,Tl=0,e=_n;for(;e!==null;)Cg(e.alternate,e),e=e.return;_n=null}}function Qr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,tv(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Ca=0,rh(),rs=e,_n=o=da(e.current,null),bn=s,Fn=0,gi=null,$a=!1,qr=Lt(e,s),th=!1,Gr=yi=nh=_r=Ia=Is=0,ri=Yl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-gt(r),m=1<<f;s|=e[f],r&=~m}return Sa=s,Uc(),o}function qg(e,s){on=null,$.H=zl,s===Pr||s===Kc?(s=u_(),Fn=3):s===df?(s=u_(),Fn=4):Fn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,gi=s,_n===null&&(Is=1,uu(e,Ti(s,e.current)))}function Gg(){var e=pi.current;return e===null?!0:(bn&4194048)===bn?Ni===null:(bn&62914560)===bn||(bn&536870912)!==0?e===Ni:!1}function Kg(){var e=$.H;return $.H=zl,e===null?zl:e}function Qg(){var e=$.A;return $.A=R2,e}function wu(){Is=4,$a||(bn&4194048)!==bn&&pi.current!==null||(qr=!0),(Ia&134217727)===0&&(_r&134217727)===0||rs===null||Ua(rs,bn,yi,!1)}function lh(e,s,o){var r=$n;$n|=2;var f=Kg(),m=Qg();(rs!==e||bn!==s)&&(bu=null,Qr(e,s)),s=!1;var v=Is;e:do try{if(Fn!==0&&_n!==null){var A=_n,X=gi;switch(Fn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:pi.current===null&&(s=!0);var me=Fn;if(Fn=0,gi=null,Zr(e,A,X,me),o&&qr){v=0;break e}break;default:me=Fn,Fn=0,gi=null,Zr(e,A,X,me)}}z2(),v=Is;break}catch(je){qg(e,je)}while(!0);return s&&e.shellSuspendCounter++,ha=rr=null,$n=r,$.H=f,$.A=m,_n===null&&(rs=null,bn=0,Uc()),v}function z2(){for(;_n!==null;)Zg(_n)}function O2(e,s){var o=$n;$n|=2;var r=Kg(),f=Qg();rs!==e||bn!==s?(bu=null,xu=mt()+500,Qr(e,s)):qr=Lt(e,s);e:do try{if(Fn!==0&&_n!==null){s=_n;var m=gi;t:switch(Fn){case 1:Fn=0,gi=null,Zr(e,s,m,1);break;case 2:case 9:if(l_(m)){Fn=0,gi=null,Jg(s);break}s=function(){Fn!==2&&Fn!==9||rs!==e||(Fn=7),oa(e)},m.then(s,s);break e;case 3:Fn=7;break e;case 4:Fn=5;break e;case 7:l_(m)?(Fn=0,gi=null,Jg(s)):(Fn=0,gi=null,Zr(e,s,m,7));break;case 5:var v=null;switch(_n.tag){case 26:v=_n.memoizedState;case 5:case 27:var A=_n;if(v?$0(v):A.stateNode.complete){Fn=0,gi=null;var X=A.sibling;if(X!==null)_n=X;else{var me=A.return;me!==null?(_n=me,Su(me)):_n=null}break t}}Fn=0,gi=null,Zr(e,s,m,5);break;case 6:Fn=0,gi=null,Zr(e,s,m,6);break;case 8:rh(),Is=6;break e;default:throw Error(a(462))}}$2();break}catch(je){qg(e,je)}while(!0);return ha=rr=null,$.H=r,$.A=f,$n=o,_n!==null?0:(rs=null,bn=0,Uc(),Is)}function $2(){for(;_n!==null&&!dt();)Zg(_n)}function Zg(e){var s=wg(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,s===null?Su(e):_n=s}function Jg(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=_g(o,s,s.pendingProps,s.type,void 0,bn);break;case 11:s=_g(o,s,s.pendingProps,s.type.render,s.ref,bn);break;case 5:Sf(s);default:Cg(o,s),s=_n=Qp(s,Sa),s=wg(o,s,Sa)}e.memoizedProps=e.pendingProps,s===null?Su(e):_n=s}function Zr(e,s,o,r){ha=rr=null,Sf(s),Hr=null,Tl=0;var f=s.return;try{if(j2(e,f,s,o,bn)){Is=1,uu(e,Ti(o,e.current)),_n=null;return}}catch(m){if(f!==null)throw _n=f,m;Is=1,uu(e,Ti(o,e.current)),_n=null;return}s.flags&32768?(Sn||r===1?e=!0:qr||(bn&536870912)!==0?e=!1:($a=e=!0,(r===2||r===9||r===3||r===6)&&(r=pi.current,r!==null&&r.tag===13&&(r.flags|=16384))),e0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){e0(s,$a);return}e=s.return;var o=E2(s.alternate,s,Sa);if(o!==null){_n=o;return}if(s=s.sibling,s!==null){_n=s;return}_n=s=e}while(s!==null);Is===0&&(Is=5)}function e0(e,s){do{var o=A2(e.alternate,e);if(o!==null){o.flags&=32767,_n=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){_n=e;return}_n=e=o}while(e!==null);Is=6,_n=null}function t0(e,s,o,r,f,m,v,A,X){e.cancelPendingCommit=null;do Cu();while(mo!==0);if(($n&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=Gd,Ft(e,o,m,v,A,X),e===rs&&(_n=rs=null,bn=0),Kr=s,Ha=e,Ca=o,oh=m,ih=f,Yg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,U2(nt,function(){return a0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=$.T,$.T=null,f=oe.p,oe.p=2,v=$n,$n|=4;try{D2(e,s,o)}finally{$n=v,oe.p=f,$.T=r}}mo=1,n0(),s0(),o0()}}function n0(){if(mo===1){mo=0;var e=Ha,s=Kr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var r=oe.p;oe.p=2;var f=$n;$n|=4;try{zg(s,e);var m=bh,v=Cn(e.containerInfo),A=m.focusedElem,X=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&ws(A.ownerDocument.documentElement,A)){if(X!==null&&Vn(A)){var me=X.start,je=X.end;if(je===void 0&&(je=me),"selectionStart"in A)A.selectionStart=me,A.selectionEnd=Math.min(je,A.value.length);else{var ze=A.ownerDocument||document,ge=ze&&ze.defaultView||window;if(ge.getSelection){var ve=ge.getSelection(),kt=A.textContent.length,Yt=Math.min(X.start,kt),ns=X.end===void 0?Yt:Math.min(X.end,kt);!ve.extend&&Yt>ns&&(v=ns,ns=Yt,Yt=v);var le=vs(A,Yt),ee=vs(A,ns);if(le&&ee&&(ve.rangeCount!==1||ve.anchorNode!==le.node||ve.anchorOffset!==le.offset||ve.focusNode!==ee.node||ve.focusOffset!==ee.offset)){var he=ze.createRange();he.setStart(le.node,le.offset),ve.removeAllRanges(),Yt>ns?(ve.addRange(he),ve.extend(ee.node,ee.offset)):(he.setEnd(ee.node,ee.offset),ve.addRange(he))}}}}for(ze=[],ve=A;ve=ve.parentNode;)ve.nodeType===1&&ze.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ze.length;A++){var Le=ze[A];Le.element.scrollLeft=Le.left,Le.element.scrollTop=Le.top}}zu=!!xh,bh=xh=null}finally{$n=f,oe.p=r,$.T=o}}e.current=s,mo=2}}function s0(){if(mo===2){mo=0;var e=Ha,s=Kr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var r=oe.p;oe.p=2;var f=$n;$n|=4;try{Dg(e,s.alternate,s)}finally{$n=f,oe.p=r,$.T=o}}mo=3}}function o0(){if(mo===4||mo===3){mo=0,Ue();var e=Ha,s=Kr,o=Ca,r=Yg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?mo=5:(mo=0,Kr=Ha=null,i0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Pa=null),Kn(o),s=s.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(Qe,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=$.T,f=oe.p,oe.p=2,$.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{$.T=s,oe.p=f}}(Ca&3)!==0&&Cu(),oa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Wl++:(Wl=0,ah=e):Wl=0,Fl(0)}}function i0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,jl(s)))}function Cu(){return n0(),s0(),o0(),a0()}function a0(){if(mo!==5)return!1;var e=Ha,s=oh;oh=0;var o=Kn(Ca),r=$.T,f=oe.p;try{oe.p=32>o?32:o,$.T=null,o=ih,ih=null;var m=Ha,v=Ca;if(mo=0,Kr=Ha=null,Ca=0,($n&6)!==0)throw Error(a(331));var A=$n;if($n|=4,Hg(m.current),$g(m,m.current,v,o),$n=A,Fl(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(Qe,m)}catch{}return!0}finally{oe.p=f,$.T=r,i0(e,s)}}function r0(e,s,o){s=Ti(o,s),s=$f(e.stateNode,s,2),e=Ba(e,s,2),e!==null&&(ut(e,2),oa(e))}function Xn(e,s,o){if(e.tag===3)r0(e,e,o);else for(;s!==null;){if(s.tag===3){r0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pa===null||!Pa.has(r))){e=Ti(o,e),o=lg(2),r=Ba(s,o,2),r!==null&&(cg(o,r,s,e),ut(r,2),oa(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new B2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=I2.bind(null,e,s,o),s.then(e,e))}function I2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,rs===e&&(bn&o)===o&&(Is===4||Is===3&&(bn&62914560)===bn&&300>mt()-yu?($n&2)===0&&Qr(e,0):nh|=o,Gr===bn&&(Gr=0)),oa(e)}function l0(e,s){s===0&&(s=yt()),e=or(e,s),e!==null&&(ut(e,s),oa(e))}function P2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),l0(e,o)}function H2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),l0(e,o)}function U2(e,s){return Je(e,s)}var ku=null,Jr=null,uh=!1,ju=!1,dh=!1,Va=0;function oa(e){e!==Jr&&e.next===null&&(Jr===null?ku=Jr=e:Jr=Jr.next=e),ju=!0,uh||(uh=!0,Y2())}function Fl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-gt(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,f0(r,m))}else m=bn,m=Ge(r,r===rs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Lt(r,m)||(o=!0,f0(r,m));r=r.next}while(o);dh=!1}}function V2(){c0()}function c0(){ju=uh=!1;var e=0;Va!==0&&ev()&&(e=Va);for(var s=mt(),o=null,r=ku;r!==null;){var f=r.next,m=u0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(Jr=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}mo!==0&&mo!==5||Fl(e),Va!==0&&(Va=0)}function u0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-gt(m),A=1<<v,X=f[v];X===-1?((A&o)===0||(A&r)!==0)&&(f[v]=Tt(A,s)):X<=s&&(e.expiredLanes|=A),m&=~A}if(s=rs,o=bn,o=Ge(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ze(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Lt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Ze(r),Kn(o)){case 2:case 8:o=Bt;break;case 32:o=nt;break;case 268435456:o=te;break;default:o=nt}return r=d0.bind(null,e),o=Je(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Ze(r),e.callbackPriority=2,e.callbackNode=null,2}function d0(e,s){if(mo!==0&&mo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=bn;return r=Ge(e,e===rs?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fg(e,r,s),u0(e,mt()),e.callbackNode!=null&&e.callbackNode===o?d0.bind(null,e):null)}function f0(e,s){if(Cu())return null;Fg(e,s,!0)}function Y2(){nv(function(){($n&6)!==0?Je(_t,V2):c0()})}function fh(){if(Va===0){var e=$r;e===0&&(e=Xe,Xe<<=1,(Xe&261888)===0&&(Xe=256)),Va=e}return Va}function h0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lo(""+e)}function m0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function W2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=h0((f[pn]||null).action),v=r.submitter;v&&(s=(s=v[pn]||null)?h0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new Rs("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var X=v?m0(f,v):new FormData(f);Nf(o,{pending:!0,data:X,method:f.method,action:m},null,X)}}else typeof m=="function"&&(A.preventDefault(),X=v?m0(f,v):new FormData(f),Nf(o,{pending:!0,data:X,method:f.method,action:m},m,X))},currentTarget:f}]})}}for(var hh=0;hh<qd.length;hh++){var mh=qd[hh],F2=mh.toLowerCase(),X2=mh[0].toUpperCase()+mh.slice(1);Vi(F2,"on"+X2)}Vi(Ui,"onAnimationEnd"),Vi(ea,"onAnimationIteration"),Vi(Pc,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(Wd,"onTransitionRun"),Vi(Fd,"onTransitionStart"),Vi(Xd,"onTransitionCancel"),Vi(qp,"onTransitionEnd"),cs("onMouseEnter",["mouseout","mouseover"]),cs("onMouseLeave",["mouseout","mouseover"]),cs("onPointerEnter",["pointerout","pointerover"]),cs("onPointerLeave",["pointerout","pointerover"]),Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function p0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],X=A.instance,me=A.currentTarget;if(A=A.listener,X!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=me;try{m(f)}catch(je){Hc(je)}f.currentTarget=null,m=X}else for(v=0;v<r.length;v++){if(A=r[v],X=A.instance,me=A.currentTarget,A=A.listener,X!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=me;try{m(f)}catch(je){Hc(je)}f.currentTarget=null,m=X}}}}function gn(e,s){var o=s[cn];o===void 0&&(o=s[cn]=new Set);var r=e+"__bubble";o.has(r)||(_0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),_0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,wi.forEach(function(o){o!=="selectionchange"&&(q2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function _0(e,s,o,r){switch(W0(s)){case 2:var f=wv;break;case 8:f=Sv;break;default:f=Dh}o=f.bind(null,s,o,e),f=void 0,!ro||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var X=v.tag;if((X===3||X===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=js(A),v===null)return;if(X=v.tag,X===5||X===6||X===26||X===27){r=m=v;continue e}A=A.parentNode}}r=r.return}xo(function(){var me=m,je=yo(o),ze=[];e:{var ge=Gp.get(e);if(ge!==void 0){var ve=Rs,kt=e;switch(e){case"keypress":if(Ws(o)===0)break e;case"keydown":case"keyup":ve=co;break;case"focusin":kt="focus",ve=be;break;case"focusout":kt="blur",ve=be;break;case"beforeblur":case"afterblur":ve=be;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Yn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=F;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=I;break;case Ui:case ea:case Pc:ve=et;break;case qp:ve=se;break;case"scroll":case"scrollend":ve=vo;break;case"wheel":ve=st;break;case"copy":case"cut":case"paste":ve=$t;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=Fo;break;case"toggle":case"beforetoggle":ve=pt}var Yt=(s&4)!==0,ns=!Yt&&(e==="scroll"||e==="scrollend"),le=Yt?ge!==null?ge+"Capture":null:ge;Yt=[];for(var ee=me,he;ee!==null;){var Le=ee;if(he=Le.stateNode,Le=Le.tag,Le!==5&&Le!==26&&Le!==27||he===null||le===null||(Le=sn(ee,le),Le!=null&&Yt.push(ql(ee,Le,he))),ns)break;ee=ee.return}0<Yt.length&&(ge=new ve(ge,kt,null,o,je),ze.push({event:ge,listeners:Yt}))}}if((s&7)===0){e:{if(ge=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",ge&&o!==fi&&(kt=o.relatedTarget||o.fromElement)&&(js(kt)||kt[ot]))break e;if((ve||ge)&&(ge=je.window===je?je:(ge=je.ownerDocument)?ge.defaultView||ge.parentWindow:window,ve?(kt=o.relatedTarget||o.toElement,ve=me,kt=kt?js(kt):null,kt!==null&&(ns=u(kt),Yt=kt.tag,kt!==ns||Yt!==5&&Yt!==27&&Yt!==6)&&(kt=null)):(ve=null,kt=me),ve!==kt)){if(Yt=Yn,Le="onMouseLeave",le="onMouseEnter",ee="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=Fo,Le="onPointerLeave",le="onPointerEnter",ee="pointer"),ns=ve==null?ge:_o(ve),he=kt==null?ge:_o(kt),ge=new Yt(Le,ee+"leave",ve,o,je),ge.target=ns,ge.relatedTarget=he,Le=null,js(je)===me&&(Yt=new Yt(le,ee+"enter",kt,o,je),Yt.target=he,Yt.relatedTarget=ns,Le=Yt),ns=Le,ve&&kt)t:{for(Yt=G2,le=ve,ee=kt,he=0,Le=le;Le;Le=Yt(Le))he++;Le=0;for(var zt=ee;zt;zt=Yt(zt))Le++;for(;0<he-Le;)le=Yt(le),he--;for(;0<Le-he;)ee=Yt(ee),Le--;for(;he--;){if(le===ee||ee!==null&&le===ee.alternate){Yt=le;break t}le=Yt(le),ee=Yt(ee)}Yt=null}else Yt=null;ve!==null&&g0(ze,ge,ve,Yt,!1),kt!==null&&ns!==null&&g0(ze,ns,kt,Yt,!0)}}e:{if(ge=me?_o(me):window,ve=ge.nodeName&&ge.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ge.type==="file")var Rn=E;else if(hi(ge))if(R)Rn=Nt;else{Rn=it;var Et=tt}else ve=ge.nodeName,!ve||ve.toLowerCase()!=="input"||ge.type!=="checkbox"&&ge.type!=="radio"?me&&zs(me.elementType)&&(Rn=E):Rn=ht;if(Rn&&(Rn=Rn(e,me))){Xo(ze,Rn,o,je);break e}Et&&Et(e,ge,me),e==="focusout"&&me&&ge.type==="number"&&me.memoizedProps.value!=null&&Zs(ge,"number",ge.value)}switch(Et=me?_o(me):window,e){case"focusin":(hi(Et)||Et.contentEditable==="true")&&(Gt=Et,Ss=me,En=null);break;case"focusout":En=Ss=Gt=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,Oo(ze,o,je);break;case"selectionchange":if(Wt)break;case"keydown":case"keyup":Oo(ze,o,je)}var rn;if(ms)e:{switch(e){case"compositionstart":var vn="onCompositionStart";break e;case"compositionend":vn="onCompositionEnd";break e;case"compositionupdate":vn="onCompositionUpdate";break e}vn=void 0}else Os?hn(e,o)&&(vn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(vn="onCompositionStart");vn&&(Nn&&o.locale!=="ko"&&(Os||vn!=="onCompositionStart"?vn==="onCompositionEnd"&&Os&&(rn=zo()):(hs=je,ni="value"in hs?hs.value:hs.textContent,Os=!0)),Et=Tu(me,vn),0<Et.length&&(vn=new Ke(vn,e,null,o,je),ze.push({event:vn,listeners:Et}),rn?vn.data=rn:(rn=Es(o),rn!==null&&(vn.data=rn)))),(rn=uo?Xs(e,o):qs(e,o))&&(vn=Tu(me,"onBeforeInput"),0<vn.length&&(Et=new Ke("onBeforeInput","beforeinput",null,o,je),ze.push({event:Et,listeners:vn}),Et.data=rn)),W2(ze,e,me,o,je)}p0(ze,s)})}function ql(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Tu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=sn(e,o),f!=null&&r.unshift(ql(e,f,m)),f=sn(e,s),f!=null&&r.push(ql(e,f,m))),e.tag===3)return r;e=e.return}return[]}function G2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function g0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,X=A.alternate,me=A.stateNode;if(A=A.tag,X!==null&&X===r)break;A!==5&&A!==26&&A!==27||me===null||(X=me,f?(me=sn(o,m),me!=null&&v.unshift(ql(o,me,X))):f||(me=sn(o,m),me!=null&&v.push(ql(o,me,X)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var K2=/\r\n?/g,Q2=/\u0000|\uFFFD/g;function y0(e){return(typeof e=="string"?e:""+e).replace(K2,`
`).replace(Q2,"")}function x0(e,s){return s=y0(s),y0(e)===s}function ts(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Vo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Vo(e,""+r);break;case"className":yn(e,"class",r);break;case"tabIndex":yn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":yn(e,o,r);break;case"style":Vs(e,r,m);break;case"data":if(s!=="object"){yn(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Lo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ts(e,s,"name",f.name,f,null),ts(e,s,"formEncType",f.formEncType,f,null),ts(e,s,"formMethod",f.formMethod,f,null),ts(e,s,"formTarget",f.formTarget,f,null)):(ts(e,s,"encType",f.encType,f,null),ts(e,s,"method",f.method,f,null),ts(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Lo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Js);break;case"onScroll":r!=null&&gn("scroll",e);break;case"onScrollEnd":r!=null&&gn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Lo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":gn("beforetoggle",e),gn("toggle",e),Ms(e,"popover",r);break;case"xlinkActuate":On(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":On(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":On(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":On(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":On(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":On(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":On(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":On(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":On(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ms(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Hn.get(o)||o,Ms(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":Vs(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Vo(e,r):(typeof r=="number"||typeof r=="bigint")&&Vo(e,""+r);break;case"onScroll":r!=null&&gn("scroll",e);break;case"onScrollEnd":r!=null&&gn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Js);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ls.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[pn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):Ms(e,o,r)}}}function Ro(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gn("error",e),gn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(e,s,m,v,o,null)}}f&&ts(e,s,"srcSet",o.srcSet,o,null),r&&ts(e,s,"src",o.src,o,null);return;case"input":gn("invalid",e);var A=m=v=f=null,X=null,me=null;for(r in o)if(o.hasOwnProperty(r)){var je=o[r];if(je!=null)switch(r){case"name":f=je;break;case"type":v=je;break;case"checked":X=je;break;case"defaultChecked":me=je;break;case"value":m=je;break;case"defaultValue":A=je;break;case"children":case"dangerouslySetInnerHTML":if(je!=null)throw Error(a(137,s));break;default:ts(e,s,r,je,o,null)}}Pn(e,m,A,X,me,v,f,!1);return;case"select":gn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:ts(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?us(e,!!r,s,!1):o!=null&&us(e,!!r,o,!0);return;case"textarea":gn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ts(e,s,v,A,o,null)}Ii(e,r,f,m);return;case"option":for(X in o)if(o.hasOwnProperty(X)&&(r=o[X],r!=null))switch(X){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ts(e,s,X,r,o,null)}return;case"dialog":gn("beforetoggle",e),gn("toggle",e),gn("cancel",e),gn("close",e);break;case"iframe":case"object":gn("load",e);break;case"video":case"audio":for(r=0;r<Xl.length;r++)gn(Xl[r],e);break;case"image":gn("error",e),gn("load",e);break;case"details":gn("toggle",e);break;case"embed":case"source":case"link":gn("error",e),gn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(me in o)if(o.hasOwnProperty(me)&&(r=o[me],r!=null))switch(me){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(e,s,me,r,o,null)}return;default:if(zs(s)){for(je in o)o.hasOwnProperty(je)&&(r=o[je],r!==void 0&&yh(e,s,je,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&ts(e,s,A,r,o,null))}function Z2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,X=null,me=null,je=null;for(ve in o){var ze=o[ve];if(o.hasOwnProperty(ve)&&ze!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":X=ze;default:r.hasOwnProperty(ve)||ts(e,s,ve,null,r,ze)}}for(var ge in r){var ve=r[ge];if(ze=o[ge],r.hasOwnProperty(ge)&&(ve!=null||ze!=null))switch(ge){case"type":m=ve;break;case"name":f=ve;break;case"checked":me=ve;break;case"defaultChecked":je=ve;break;case"value":v=ve;break;case"defaultValue":A=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ve!==ze&&ts(e,s,ge,ve,r,ze)}}Eo(e,v,A,X,me,je,m,f);return;case"select":ve=v=A=ge=null;for(m in o)if(X=o[m],o.hasOwnProperty(m)&&X!=null)switch(m){case"value":break;case"multiple":ve=X;default:r.hasOwnProperty(m)||ts(e,s,m,null,r,X)}for(f in r)if(m=r[f],X=o[f],r.hasOwnProperty(f)&&(m!=null||X!=null))switch(f){case"value":ge=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==X&&ts(e,s,f,m,r,X)}s=A,o=v,r=ve,ge!=null?us(e,!!o,ge,!1):!!r!=!!o&&(s!=null?us(e,!!o,s,!0):us(e,!!o,o?[]:"",!1));return;case"textarea":ve=ge=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ts(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ge=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ts(e,s,v,f,r,m)}ds(e,ge,ve);return;case"option":for(var kt in o)if(ge=o[kt],o.hasOwnProperty(kt)&&ge!=null&&!r.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:ts(e,s,kt,null,r,ge)}for(X in r)if(ge=r[X],ve=o[X],r.hasOwnProperty(X)&&ge!==ve&&(ge!=null||ve!=null))switch(X){case"selected":e.selected=ge&&typeof ge!="function"&&typeof ge!="symbol";break;default:ts(e,s,X,ge,r,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in o)ge=o[Yt],o.hasOwnProperty(Yt)&&ge!=null&&!r.hasOwnProperty(Yt)&&ts(e,s,Yt,null,r,ge);for(me in r)if(ge=r[me],ve=o[me],r.hasOwnProperty(me)&&ge!==ve&&(ge!=null||ve!=null))switch(me){case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,s));break;default:ts(e,s,me,ge,r,ve)}return;default:if(zs(s)){for(var ns in o)ge=o[ns],o.hasOwnProperty(ns)&&ge!==void 0&&!r.hasOwnProperty(ns)&&yh(e,s,ns,void 0,r,ge);for(je in r)ge=r[je],ve=o[je],!r.hasOwnProperty(je)||ge===ve||ge===void 0&&ve===void 0||yh(e,s,je,ge,r,ve);return}}for(var le in o)ge=o[le],o.hasOwnProperty(le)&&ge!=null&&!r.hasOwnProperty(le)&&ts(e,s,le,null,r,ge);for(ze in r)ge=r[ze],ve=o[ze],!r.hasOwnProperty(ze)||ge===ve||ge==null&&ve==null||ts(e,s,ze,ge,r,ve)}function b0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&b0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var X=o[r],me=X.startTime;if(me>A)break;var je=X.transferSize,ze=X.initiatorType;je&&b0(ze)&&(X=X.responseEnd,v+=je*(X<A?1:(A-me)/(X-me)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Eu(e){return e.nodeType===9?e:e.ownerDocument}function v0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function ev(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var S0=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(e){return C0.resolve(null).then(e).catch(sv)}:S0;function sv(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function k0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),sl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Gl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Gl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[jo]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Gl(e.ownerDocument.body);o=f}while(o);sl(s)}function j0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),Ho(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function ov(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[jo])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function iv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ri(e.nextSibling),e===null))return null;return e}function M0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ri(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function av(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function T0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ri(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function E0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function A0(e,s,o){switch(s=Eu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Gl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Ho(e)}var Bi=new Map,D0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=oe.d;oe.d={f:rv,r:lv,D:cv,C:uv,L:dv,m:fv,X:mv,S:hv,M:pv};function rv(){var e=ka.f(),s=vu();return e||s}function lv(e){var s=Mo(e);s!==null&&s.tag===5&&s.type==="form"?q_(s):ka.r(e)}var el=typeof document>"u"?null:document;function N0(e,s,o){var r=el;if(r&&typeof s=="string"&&s){var f=Ns(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),D0.has(f)||(D0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Ro(s,"link",e),zn(s),r.head.appendChild(s)))}}function cv(e){ka.D(e),N0("dns-prefetch",e,null)}function uv(e,s){ka.C(e,s),N0("preconnect",e,s)}function dv(e,s,o){ka.L(e,s,o);var r=el;if(r&&e&&s){var f='link[rel="preload"][as="'+Ns(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ns(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ns(o.imageSizes)+'"]')):f+='[href="'+Ns(e)+'"]';var m=f;switch(s){case"style":m=tl(e);break;case"script":m=nl(e)}Bi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Bi.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Kl(m))||s==="script"&&r.querySelector(Ql(m))||(s=r.createElement("link"),Ro(s,"link",e),zn(s),r.head.appendChild(s)))}}function fv(e,s){ka.m(e,s);var o=el;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ns(r)+'"][href="'+Ns(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=nl(e)}if(!Bi.has(m)&&(e=x({rel:"modulepreload",href:e},s),Bi.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ql(m)))return}r=o.createElement("link"),Ro(r,"link",e),zn(r),o.head.appendChild(r)}}}function hv(e,s,o){ka.S(e,s,o);var r=el;if(r&&e){var f=Us(r).hoistableStyles,m=tl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Kl(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Bi.get(m))&&Mh(e,o);var X=v=r.createElement("link");zn(X),Ro(X,"link",e),X._p=new Promise(function(me,je){X.onload=me,X.onerror=je}),X.addEventListener("load",function(){A.loading|=1}),X.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Du(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function mv(e,s){ka.X(e,s);var o=el;if(o&&e){var r=Us(o).hoistableScripts,f=nl(e),m=r.get(f);m||(m=o.querySelector(Ql(f)),m||(e=x({src:e,async:!0},s),(s=Bi.get(f))&&Th(e,s),m=o.createElement("script"),zn(m),Ro(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function pv(e,s){ka.M(e,s);var o=el;if(o&&e){var r=Us(o).hoistableScripts,f=nl(e),m=r.get(f);m||(m=o.querySelector(Ql(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Bi.get(f))&&Th(e,s),m=o.createElement("script"),zn(m),Ro(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function R0(e,s,o,r){var f=(f=$e.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=tl(o.href),o=Us(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=tl(o.href);var m=Us(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Kl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Bi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(e,o),m||_v(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=nl(o),o=Us(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function tl(e){return'href="'+Ns(e)+'"'}function Kl(e){return'link[rel="stylesheet"]['+e+"]"}function B0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function _v(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Ro(s,"link",o),zn(s),e.head.appendChild(s))}function nl(e){return'[src="'+Ns(e)+'"]'}function Ql(e){return"script[async]"+e}function L0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+Ns(o.href)+'"]');if(r)return s.instance=r,zn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),zn(r),Ro(r,"style",f),Du(r,o.precedence,e),s.instance=r;case"stylesheet":f=tl(o.href);var m=e.querySelector(Kl(f));if(m)return s.state.loading|=4,s.instance=m,zn(m),m;r=B0(o),(f=Bi.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),zn(m);var v=m;return v._p=new Promise(function(A,X){v.onload=A,v.onerror=X}),Ro(m,"link",r),s.state.loading|=4,Du(m,o.precedence,e),s.instance=m;case"script":return m=nl(o.src),(f=e.querySelector(Ql(m)))?(s.instance=f,zn(f),f):(r=o,(f=Bi.get(m))&&(r=x({},o),Th(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),zn(f),Ro(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Du(r,o.precedence,e));return s.instance}function Du(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Th(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Nu=null;function z0(e,s,o){if(Nu===null){var r=new Map,f=Nu=new Map;f.set(o,r)}else f=Nu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[jo]||m[un]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function O0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function gv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function $0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=tl(r.href),m=s.querySelector(Kl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,zn(m);return}m=s.ownerDocument||s,r=B0(r),(f=Bi.get(f))&&Mh(r,f),m=m.createElement("link"),zn(m);var v=m;v._p=new Promise(function(A,X){v.onload=A,v.onerror=X}),Ro(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Eh=0;function xv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Eh===0&&(Eh=62500*J2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Eh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(bv,e),Bu=null,Ru.call(e))}function bv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Zl={$$typeof:L,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function vv(e,s,o,r,f,m,v,A,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ln(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ln(0),this.hiddenUpdates=ln(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function I0(e,s,o,r,f,m,v,A,X,me,je,ze){return e=new vv(e,s,o,v,X,me,je,ze,A),s=1,m===!0&&(s|=24),m=mi(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function P0(e){return e?(e=Rr,e):Rr}function H0(e,s,o,r,f,m){f=P0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ra(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ba(e,r,s),o!==null&&(li(o,e,s),Al(o,e,s))}function U0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){U0(e,s),(e=e.alternate)&&U0(e,s)}function V0(e){if(e.tag===13||e.tag===31){var s=or(e,67108864);s!==null&&li(s,e,67108864),Ah(e,67108864)}}function Y0(e){if(e.tag===13||e.tag===31){var s=xi();s=Gn(s);var o=or(e,s);o!==null&&li(o,e,s),Ah(e,s)}}var zu=!0;function wv(e,s,o,r){var f=$.T;$.T=null;var m=oe.p;try{oe.p=2,Dh(e,s,o,r)}finally{oe.p=m,$.T=f}}function Sv(e,s,o,r){var f=$.T;$.T=null;var m=oe.p;try{oe.p=8,Dh(e,s,o,r)}finally{oe.p=m,$.T=f}}function Dh(e,s,o,r){if(zu){var f=Nh(r);if(f===null)gh(e,s,r,Ou,o),F0(e,r);else if(kv(f,e,s,o,r))r.stopPropagation();else if(F0(e,r),s&4&&-1<Cv.indexOf(e)){for(;f!==null;){var m=Mo(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Vt(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var X=1<<31-gt(v);A.entanglements[1]|=X,v&=~X}oa(m),($n&6)===0&&(xu=mt()+500,Fl(0))}}break;case 31:case 13:A=or(m,2),A!==null&&li(A,m,2),vu(),Ah(m,2)}if(m=Nh(r),m===null&&gh(e,s,r,Ou,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Nh(e){return e=yo(e),Rh(e)}var Ou=null;function Rh(e){if(Ou=null,e=js(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Ou=e,null}function W0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lt()){case _t:return 2;case Bt:return 8;case nt:case H:return 32;case te:return 268435456;default:return 32}default:return 32}}var Bh=!1,Wa=null,Fa=null,Xa=null,Jl=new Map,ec=new Map,qa=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F0(e,s){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Jl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ec.delete(s.pointerId)}}function tc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Mo(s),s!==null&&V0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function kv(e,s,o,r,f){switch(s){case"focusin":return Wa=tc(Wa,e,s,o,r,f),!0;case"dragenter":return Fa=tc(Fa,e,s,o,r,f),!0;case"mouseover":return Xa=tc(Xa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return Jl.set(m,tc(Jl.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,ec.set(m,tc(ec.get(m)||null,e,s,o,r,f)),!0}return!1}function X0(e){var s=js(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,Dn(e.priority,function(){Y0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,Dn(e.priority,function(){Y0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Nh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);fi=r,o.target.dispatchEvent(r),fi=null}else return s=Mo(o),s!==null&&V0(s),e.blockedOn=o,!1;s.shift()}return!0}function q0(e,s,o){$u(e)&&o.delete(s)}function jv(){Bh=!1,Wa!==null&&$u(Wa)&&(Wa=null),Fa!==null&&$u(Fa)&&(Fa=null),Xa!==null&&$u(Xa)&&(Xa=null),Jl.forEach(q0),ec.forEach(q0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jv)))}var Pu=null;function G0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=Mo(o);m!==null&&(e.splice(s,3),s-=3,Nf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function sl(e){function s(X){return Iu(X,e)}Wa!==null&&Iu(Wa,e),Fa!==null&&Iu(Fa,e),Xa!==null&&Iu(Xa,e),Jl.forEach(s),ec.forEach(s);for(var o=0;o<qa.length;o++){var r=qa[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<qa.length&&(o=qa[0],o.blockedOn===null);)X0(o),o.blockedOn===null&&qa.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[pn]||null;if(typeof m=="function")v||G0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[pn]||null)A=v.formAction;else if(Rh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),G0(o)}}}function K0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=xi();H0(o,r,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;H0(e.current,2,null,e,null,null),vu(),s[ot]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=gs();e={blockedOn:null,target:e,priority:s};for(var o=0;o<qa.length&&s!==0&&s<qa[o].priority;o++);qa.splice(o,0,e),o===0&&X0(e)}};var Q0=n.version;if(Q0!=="19.2.4")throw Error(a(527,Q0,"19.2.4"));oe.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Mv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Qe=Uu.inject(Mv),Pe=Uu}catch{}}return sc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=og,m=ig,v=ag;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=I0(e,1,!1,null,null,o,r,null,f,m,v,K0),e[ot]=s.current,_h(e),new Lh(s)},sc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=og,v=ig,A=ag,X=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(X=o.formState)),s=I0(e,1,!0,s,o!=null?o:null,r,f,X,m,v,A,K0),s.context=P0(null),o=s.current,r=xi(),r=Gn(r),f=Ra(r),f.callback=null,Ba(o,f,r),o=r,s.current.lanes=o,ut(s,o),oa(s),e[ot]=s.current,_h(e),new Hu(s)},sc.version="19.2.4",sc}var ry;function zv(){if(ry)return Oh.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Oh.exports=Lv(),Oh.exports}var Ov=zv();const $v=Rx(Ov);var y=lp();const Iv=Rx(y);function Pv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Hv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const $i="__TAURI_TO_IPC_KEY__";function Uv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function Se(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Vv{get rid(){return Pv(this,hd,"f")}constructor(n){hd.set(this,void 0),Hv(this,hd,n)}async close(){return Se("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var bi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(bi||(bi={}));async function Lx(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await Se("plugin:event|unlisten",{event:t,eventId:n})}async function gc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Se("plugin:event|listen",{event:t,target:c,handler:Uv(n)}).then(u=>async()=>Lx(t,u))}async function Yv(t,n,i){return gc(t,a=>{Lx(t,a.id),n(a)},i)}async function Wv(t,n){await Se("plugin:event|emit",{event:t,payload:n})}async function Fv(t,n,i){await Se("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class zx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new yc(this.width*n,this.height*n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class yc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new zx(this.width/n,this.height/n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class ol{constructor(n){this.size=n}toLogical(n){return this.size instanceof zx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof yc?this.size:this.size.toPhysical(n)}[$i](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[$i]()}}class Ox{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ja(this.x*n,this.y*n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class Ja{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Ox(this.x/n,this.y/n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class Vu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Ox?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ja?this.position:this.position.toPhysical(n)}[$i](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[$i]()}}class xc extends Vv{constructor(n){super(n)}static async new(n,i,a){return Se("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new xc(c))}static async fromBytes(n){return Se("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new xc(i))}static async fromPath(n){return Se("plugin:image|from_path",{path:n}).then(i=>new xc(i))}async rgba(){return Se("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Se("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof xc?t.rid:t}var jm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(jm||(jm={}));class Xv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var ly;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(ly||(ly={}));function $x(){return new Ix(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Uh(){return Se("plugin:window|get_all_windows").then(t=>t.map(n=>new Ix(n,{skip:!0})))}const Vh=["tauri://created","tauri://error"];class Ix{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Se("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Uh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return $x()}static async getAll(){return Uh()}static async getFocusedWindow(){for(const n of await Uh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:gc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Yv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Vh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Wv(n,i)}async emitTo(n,i,a){if(Vh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Fv(n,i,a)}_handleTauriEvent(n,i){return Vh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Se("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Se("plugin:window|inner_position",{label:this.label}).then(n=>new Ja(n))}async outerPosition(){return Se("plugin:window|outer_position",{label:this.label}).then(n=>new Ja(n))}async innerSize(){return Se("plugin:window|inner_size",{label:this.label}).then(n=>new yc(n))}async outerSize(){return Se("plugin:window|outer_size",{label:this.label}).then(n=>new yc(n))}async isFullscreen(){return Se("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Se("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Se("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Se("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Se("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Se("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Se("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Se("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Se("plugin:window|is_closable",{label:this.label})}async isVisible(){return Se("plugin:window|is_visible",{label:this.label})}async title(){return Se("plugin:window|title",{label:this.label})}async theme(){return Se("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Se("plugin:window|is_always_on_top",{label:this.label})}async center(){return Se("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===jm.Critical?i={type:"Critical"}:i={type:"Informational"}),Se("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Se("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Se("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Se("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Se("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Se("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Se("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Se("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Se("plugin:window|maximize",{label:this.label})}async unmaximize(){return Se("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Se("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Se("plugin:window|minimize",{label:this.label})}async unminimize(){return Se("plugin:window|unminimize",{label:this.label})}async show(){return Se("plugin:window|show",{label:this.label})}async hide(){return Se("plugin:window|hide",{label:this.label})}async close(){return Se("plugin:window|close",{label:this.label})}async destroy(){return Se("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Se("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Se("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Se("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Se("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Se("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Se("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Se("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Se("plugin:window|set_size",{label:this.label,value:n instanceof ol?n:new ol(n)})}async setMinSize(n){return Se("plugin:window|set_min_size",{label:this.label,value:n instanceof ol?n:n?new ol(n):null})}async setMaxSize(n){return Se("plugin:window|set_max_size",{label:this.label,value:n instanceof ol?n:n?new ol(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Se("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Se("plugin:window|set_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setFullscreen(n){return Se("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Se("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Se("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Se("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Se("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return Se("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Se("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Se("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Se("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Se("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Se("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setIgnoreCursorEvents(n){return Se("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Se("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Se("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Se("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Se("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Se("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return Se("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Se("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Se("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Se("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(bi.WINDOW_RESIZED,i=>{i.payload=new yc(i.payload),n(i)})}async onMoved(n){return this.listen(bi.WINDOW_MOVED,i=>{i.payload=new Ja(i.payload),n(i)})}async onCloseRequested(n){return this.listen(bi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Xv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(bi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),a=await this.listen(bi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ja(d.payload.position)}})}),c=await this.listen(bi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),u=await this.listen(bi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(bi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(bi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(bi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(bi.WINDOW_THEME_CHANGED,n)}}var cy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(cy||(cy={}));var uy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(uy||(uy={}));var dy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(dy||(dy={}));var fy;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(fy||(fy={}));async function qv(t={}){return typeof t=="object"&&Object.freeze(t),await Se("plugin:dialog|open",{options:t})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=(...t)=>t.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
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
 */const Rc=(t,n)=>{const i=y.forwardRef(({className:a,...c},u)=>y.createElement(Jv,{ref:u,iconNode:n,className:Px(`lucide-${Gv(hy(t))}`,`lucide-${t}`,a),...c}));return i.displayName=hy(t),i};/**
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
 */const rw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],lw=Rc("search",rw),cw=3.7,Yu=200,Mm=240,ps=540,Ps=176,Yh=32,xl=20,uw=Mm/2,oc=ps+uw,gr=18,yr=18,Wh="#E6E6E6";function my(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function kr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ja(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function pc(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ja(t).localeCompare(ja(n))}function Ux(t){return[...t].sort(pc)}function dw(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ja(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ja(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=ja(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const j=(g=a.get(w))!=null?g:[];j.push(b),a.set(w,j)}for(const b of a.values())b.sort(pc);const c=t.filter(b=>{var w;return((w=i.get(ja(b)))!=null?w:0)===0}).sort(pc),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=ja(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const j=ja(S),k=((x=i.get(j))!=null?x:0)-1;i.set(j,k),k===0&&c.push(S)}c.sort(pc)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ja(b))).sort(pc)]}function Vx(t,n){var i;return Ux(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Yx(t,n,i){return Vx(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function fw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function hw(t,n,i){var _,x,b,w,S,j,k;const a=Yx(t,i,n);if(a.length===0)return null;const c=a.map(M=>kr(t,M)),u=new Set(c.map(M=>M.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(M=>M.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,g=c.find(M=>h&&M.id===h||d&&M.id===d?!0:!M.parentSha||!u.has(M.parentSha));return g||((k=(j=fw(c,p!=null?p:void 0))!=null?j:c[0])!=null?k:null)}function mw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Vx(t.name,i);if(a.length>0){const g=a.map(b=>kr(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function cp(t,n,i={},a={}){var ae,ie,ke,Re;const u=new Map(t.map(Q=>[Q.name,Q])),d=new Map,h=new Map;for(const Q of t){const $=((ae=i[Q.name])!=null?ae:[]).filter(oe=>oe.kind!=="branch-created").map(oe=>new Date(oe.date).getTime()).filter(oe=>Number.isFinite(oe)).sort((oe,G)=>oe-G)[0];$!=null&&h.set(Q.name,$)}const p=Q=>{const ce=h.get(Q.name);return ce!=null?ce:my(Q).start},g=Q=>{var $;const ce=($=a[Q.name])!=null?$:null;return ce&&ce!==Q.name&&(ce===n||u.has(ce))?ce:Q.name===n?null:Q.parentBranch&&Q.parentBranch!==Q.name&&(Q.parentBranch===n||u.has(Q.parentBranch))?Q.parentBranch:null};for(const Q of t){if(Q.name===n)continue;const ce=(ie=g(Q))!=null?ie:n,$=(ke=d.get(ce))!=null?ke:[];$.push(Q),d.set(ce,$)}for(const Q of d.values())Q.sort((ce,$)=>p(ce)-p($)||ce.name.localeCompare($.name));const _=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const Q of Object.values(i))for(const ce of Q){const $=new Date(ce.date).getTime();Number.isFinite($)&&(ce.fullSha&&S.set(ce.fullSha,$),ce.sha&&S.set(ce.sha,$))}const j=(Q,ce)=>({start:Math.min(Q,ce),end:Math.max(Q,ce)}),k=Q=>{var re,fe;const ce=j(p(Q),my(Q).end),$=[ce],oe=ce.start,G=mw(Q,n,i),K=G?S.get(G):void 0,pe=new Date((fe=(re=Q.divergedFromDate)!=null?re:Q.createdDate)!=null?fe:Q.lastCommitDate).getTime(),N=Number.isFinite(K!=null?K:NaN)?K:Number.isFinite(pe)?pe:null;if(N==null)return $;const ne=j(N,oe);return ne.start!==ne.end&&$.push(ne),$},M=Math.max(1,360*60*1e3*cw),z=(Q,ce)=>!(Q.start-ce.end>=M||ce.start-Q.end>=M),L=(Q,ce)=>ce.some($=>{var oe;return((oe=w.get(Q))!=null?oe:[]).some(G=>z($,G))}),D=(Q,ce=new Set)=>{const $=b.get(Q);if($!=null)return $;if(ce.has(Q))return 1;ce.add(Q);const oe=u.get(Q);if(!oe||Q===n)return ce.delete(Q),b.set(Q,0),0;const G=g(oe),K=G?D(G,ce)+1:1;return ce.delete(Q),b.set(Q,K),K},V=(Q,ce=new Set)=>{var $e,Ne;const $=_.get(Q);if($)return $.column;if(ce.has(Q))return 0;ce.add(Q);const oe=u.get(Q);if(!oe)return ce.delete(Q),0;if(Q===n){const at={name:Q,column:0,parentName:null};_.set(Q,at),x.push(at);const rt=k(oe);return w.set(0,[...($e=w.get(0))!=null?$e:[],...rt]),ce.delete(Q),0}const G=g(oe),K=G&&!ce.has(G)?G:null,pe=K?V(K,ce):0,N=Math.max(1,D(Q)),ne=Math.max(K?pe+1:1,N),re=k(oe);let fe=ne;for(;L(fe,re);)fe+=1;const Ae={name:Q,column:fe,parentName:K};return _.set(Q,Ae),x.push(Ae),w.set(fe,[...(Ne=w.get(fe))!=null?Ne:[],...re]),ce.delete(Q),fe};V(n);const P=t.filter(Q=>!_.has(Q.name)).sort((Q,ce)=>p(Q)-p(ce)||Q.name.localeCompare(ce.name)),W=P.filter(Q=>g(Q)!=null),U=P.filter(Q=>g(Q)==null);for(const Q of W)V(Q.name);let Z=Math.max(0,...x.map(Q=>Q.column))+1+1;for(const Q of U){const ce=k(Q);let $=Z;for(;L($,ce);)$+=1;const oe={name:Q.name,column:$,parentName:null};_.set(Q.name,oe),x.push(oe),w.set($,[...(Re=w.get($))!=null?Re:[],...ce]),Z=$+1}return x.sort((Q,ce)=>Q.column-ce.column||Q.name.localeCompare(ce.name))}function pw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var g;const p=(g=i[h.name])!=null?g:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Fi=0,Xh=0,_w=1800*1e3,gw=1440*60*1e3,Li=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Ko=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function py(t,n,i=new Map){var W,U,Z,ae,ie,ke,Re,Q,ce,$,oe,G;if(t.length===0)return new Map;const a=[...t].sort((K,pe)=>{const N=Li(K.date)-Li(pe.date);return N!==0?N:K.id!==pe.id?K.id.localeCompare(pe.id):K.visualId.localeCompare(pe.visualId)}),c=new Map;for(const K of t){const pe=(W=K.parentSha)!=null?W:null;if(pe){const N=(U=c.get(pe))!=null?U:new Set;N.add(K.id),c.set(pe,N)}for(const N of(Z=i.get(K.id))!=null?Z:[]){if(!N)continue;const ne=(ae=c.get(N))!=null?ae:new Set;ne.add(K.id),c.set(N,ne)}}const u=new Map,d=new Map,h=new Map,p=new Set,g=new Map,_=new Map,x=new Map,b=new Map;for(const K of t){const pe=(ie=g.get(K.branchName))!=null?ie:new Set;pe.add(K.id),g.set(K.branchName,pe);const N=(Re=(ke=n.get(K.branchName))==null?void 0:ke.column)!=null?Re:0,ne=(Q=_.get(K.id))!=null?Q:new Set;ne.add(N),_.set(K.id,ne);const re=new Set;K.parentSha&&re.add(K.parentSha),x.set(K.visualId,re);const fe=new Set(re);for(const Ae of(ce=i.get(K.id))!=null?ce:[])Ae&&fe.add(Ae);b.set(K.visualId,fe)}const w=new Set(Array.from(_.keys())),S=Array.from(w),j=new Map,k=K=>{const pe=[];for(const N of S)Ko(N,K)&&pe.push(N);return pe},M=new Map;for(const K of S)M.set(K,new Set);for(const K of t){const pe=k(K.id);if(pe.length===0)continue;const N=($=b.get(K.visualId))!=null?$:new Set,ne=new Set;for(const re of N)for(const fe of k(re))ne.add(fe);for(const re of pe){const fe=(oe=M.get(re))!=null?oe:new Set;for(const Ae of ne)fe.add(Ae);M.set(re,fe)}}const z=new Map,L=(K,pe=new Set)=>{var fe;const N=z.get(K);if(N)return N;if(pe.has(K))return new Set;pe.add(K);const ne=(fe=M.get(K))!=null?fe:new Set,re=new Set;for(const Ae of ne){re.add(Ae);for(const $e of L(Ae,pe))re.add($e)}return pe.delete(K),z.set(K,re),re},D=(K,pe)=>{if(Ko(K,pe))return!0;const N=k(K),ne=k(pe);for(const re of N){const fe=L(re);for(const Ae of ne)if(fe.has(Ae))return!0}for(const re of ne){const fe=L(re);for(const Ae of N)if(fe.has(Ae))return!0}return!1};let V=1;const P=(K,pe)=>{var wt,Ut,q,Me,Je,Ze,dt,Ue,mt;const N=(Ut=(wt=n.get(K.branchName))==null?void 0:wt.column)!=null?Ut:0,ne=(q=g.get(K.branchName))!=null?q:new Set,fe=!(!!K.parentSha&&ne.has(K.parentSha))&&K.parentSha?K.parentSha:null,Ae=Array.from(pe).flatMap(lt=>k(lt).flatMap(_t=>{var Bt;return(Bt=j.get(_t))!=null?Bt:[]})),$e=(K.kind==="branch-created"||K.kind==="stash")&&Ae.length>0?Math.max(...Ae)+1:null,Ne=Ae.length>0?Math.max(...Ae)+1:1,at=(Me=c.get(K.id))!=null?Me:new Set,It=Array.from(at).flatMap(lt=>{var _t;return Array.from((_t=_.get(lt))!=null?_t:[])}).some(lt=>lt!==N),Zt=new Date(K.date).getTime(),Ce=Math.max(Ne,1);let Ee=null;for(let lt=Ce;lt<V;lt+=1){const _t=(Je=d.get(lt))!=null?Je:[];if(_t.length===0||It||p.has(lt))continue;const Bt=(Ze=b.get(K.visualId))!=null?Ze:new Set;if(!(_t.some(_e=>D(K.id,_e.sha)?!0:Array.from(Bt).some(Qe=>Ko(Qe,_e.sha)))||_t.some(_e=>_e.column===N)||!Number.isFinite(Zt)||!_t.every(_e=>{if(!Number.isFinite(_e.time))return!1;const Qe=!!fe&&!!_e.branchEntryParentSha&&fe===_e.branchEntryParentSha?gw:_w;return Math.abs(_e.time-Zt)<=Qe}))){Ee=lt;break}}$e!=null&&(Ee=$e),Ee==null&&(Ee=Math.max(Ne,V)),u.set(K.visualId,Ee),Ee>=V&&(V=Ee+1);const vt=(dt=d.get(Ee))!=null?dt:[];vt.push({visualId:K.visualId,sha:K.id,column:N,time:Zt,branchEntryParentSha:fe}),d.set(Ee,vt),It&&p.add(Ee);for(const lt of pe){const _t=(Ue=h.get(lt))!=null?Ue:[];_t.push(Ee),h.set(lt,_t)}const Ht=(mt=j.get(K.id))!=null?mt:[];Ht.push(Ee),j.set(K.id,Ht)};for(const K of a){const pe=(G=x.get(K.visualId))!=null?G:new Set;P(K,pe)}return u}function jc(t){var dn,Qn,Qi,ei,di,go,ti,Ns,Eo,Pn,Zs,us,ds,Ii,Vo,Zi,Kt,Vs,zs,Hn,Si,Lo,Js,fi,yo,wn,eo,Ci,fs,xo,sn,Ys,ro,lo,hs,ni,bo,zo,Ws,si,Yo,tn,Fs,Rs,Bs,vo,Wo,wo,Ts,So,Yn;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:g,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:j,orientation:k="horizontal",nodePositionOverrides:M={}}=t,z=k==="horizontal",L=new Map(i.map(T=>[T.name,T])),D=new Map(n.map(T=>[T.name,T])),V=dw([...a.map(T=>{var F,de,be;return{id:T.fullSha,branchName:d,message:(F=T.prTitle)!=null?F:T.sha,author:"",date:T.date,parentSha:(be=(de=T.parentShas)==null?void 0:de[0])!=null?be:null}}),...((dn=h[d])!=null?dn:[]).map(T=>kr(d,T)),...c.map(T=>kr(T.branch||"",T)),...u.map(T=>kr(T.branch||"",T))]),P=new Map,W=new Map;for(const T of i){if(T.name===d)continue;const F=Yx(T.name,g,h);W.set(T.name,F);const de=Ux(F.map($t=>kr(T.name,$t)));if(de.length>0){P.set(T.name,de);continue}const be=(ei=(Qi=(Qn=T.presidesFromSha)!=null?Qn:T.divergedFromSha)!=null?Qi:T.createdFromSha)!=null?ei:null;if(!be)continue;const He=(di=c.find($t=>Ko($t.fullSha,be)||Ko($t.sha,be)))==null?void 0:di.date,et=He?null:(go=Object.values(h).flat().find($t=>Ko($t.fullSha,be)||Ko($t.sha,be)))==null?void 0:go.date,Dt={id:`BRANCH_HEAD:${T.name}:${be}`,branchName:T.name,message:`Branch ${T.name}`,author:T.lastCommitAuthor,date:(Eo=(Ns=(ti=He!=null?He:et)!=null?ti:T.createdDate)!=null?Ns:T.divergedFromDate)!=null?Eo:T.lastCommitDate,parentSha:be,kind:"branch-created"};P.set(T.name,[Dt])}const U=new Set(V.map(T=>T.id)),Z=(Pn=[...V].sort((T,F)=>Li(T.date)-Li(F.date)||T.id.localeCompare(F.id))[0])!=null?Pn:null,ae=new Map(Array.from(P.entries()).map(([T,F])=>[T,new Set(F.map(de=>de.id))])),ie=new Map;for(const T of i){if(T.name===d)continue;const F=hw(T.name,h,g);if(F){ie.set(T.name,F);continue}const de=(Zs=P.get(T.name))==null?void 0:Zs[0];if(de){const be=(Ii=(ds=(us=T.presidesFromSha)!=null?us:T.divergedFromSha)!=null?ds:T.createdFromSha)!=null?Ii:null;ie.set(T.name,{...de,parentSha:be})}}const ke=new Map;for(const[T,F]of P.entries()){const de=F.find(be=>be.kind!=="branch-created");de&&ke.set(T,de)}const Re=new Map;for(const[T,F]of P.entries()){const de=F.filter(et=>et.kind!=="branch-created"),He=(Vo=(de.length>0?de:F)[0])!=null?Vo:null;He&&Re.set(T,He)}const Q=new Map;for(const T of i){if(T.name===d)continue;const F=(Zi=Re.get(T.name))!=null?Zi:null,de=(Vs=(Kt=ie.get(T.name))==null?void 0:Kt.parentSha)!=null?Vs:null,be=(Si=(Hn=(zs=T.presidesFromSha)!=null?zs:T.divergedFromSha)!=null?Hn:T.createdFromSha)!=null?Si:null,He=(Lo=F==null?void 0:F.parentSha)!=null?Lo:null,et=(Js=He!=null?He:de)!=null?Js:be;et&&Q.set(T.name,et)}const ce=T=>{var et,Dt,$t,At,Ke,an,fn,Un;const F=(et=p[T.name])!=null?et:null;if(!(F&&F!==d&&F!==T.name&&L.has(F)))return F!=null?F:"";const be=(At=($t=(Dt=Q.get(T.name))!=null?Dt:T.presidesFromSha)!=null?$t:T.divergedFromSha)!=null?At:T.createdFromSha;if(be&&((Ke=ae.get(F))!=null?Ke:new Set).has(be))return F;const He=(fn=(an=ie.get(T.name))==null?void 0:an.parentSha)!=null?fn:null;return He&&((Un=ae.get(F))!=null?Un:new Set).has(He),F},$=T=>{var He,et,Dt,$t,At,Ke,an,fn;const F=ie.get(T.name),de=(At=($t=(Dt=(et=(He=Q.get(T.name))!=null?He:F==null?void 0:F.parentSha)!=null?et:T.presidesFromSha)!=null?Dt:T.divergedFromSha)!=null?$t:T.createdFromSha)!=null?At:null;if(!T.parentBranch&&!de||!de)return null;if(ce(T)===d){if(U.has(de))return de;const Un=(Ke=F==null?void 0:F.parentSha)!=null?Ke:null;return Un&&U.has(Un)?Un:(fn=(an=Z==null?void 0:Z.id)!=null?an:Un)!=null?fn:de}return U.has(de),de},oe=T=>$(T),G=new Map;for(const T of[...c,...u]){const F={...kr(T.branch||"",T),visualId:`${T.branch||""}:${T.fullSha}`};G.set(T.fullSha,F)}const K=new Map(G),pe=T=>{K.has(T.id)||K.set(T.id,T)},N=new Map(Array.from(P.entries()).map(([T,F])=>[T,new Set(F.map(de=>de.id))])),ne=new Set;for(const T of N.values())for(const F of T)ne.add(F);for(const T of V)ne.has(T.id)||pe({...T,visualId:`${T.branchName}:${T.id}`});for(const[T,F]of P.entries())for(const de of F)pe({...de,visualId:`${T}:${de.id}`});const fe=[...Array.from(K.values()).map(T=>({...T,visualId:`${T.branchName}:${T.id}`}))].sort((T,F)=>Li(T.date)-Li(F.date)||T.id.localeCompare(F.id)),Ae=new Map;for(const T of fe){const F=(fi=Ae.get(T.branchName))!=null?fi:new Set;F.add(T.id),Ae.set(T.branchName,F)}const $e=(T,F)=>{const de=Ae.get(T);if(!de||de.size===0)return!1;for(const be of de)if(Ko(be,F))return!0;return!1},Ne=(T,F)=>{const de=Array.from(Ae.entries()).filter(([be])=>be!==F).filter(([,be])=>Array.from(be).some(He=>Ko(He,T))).map(([be])=>be);return de.length>0?de.sort()[0]:T.slice(0,7)},at=[],rt=new Map,It=new Map;for(const T of a){const F=T.fullSha,de=T.targetBranch,be=T.targetCommitSha;if(!F||!de||!be||!$e(de,be))continue;const He=((yo=T.parentShas)!=null?yo:[]).slice(1).filter(Dt=>!!Dt&&!Ko(Dt,F));if(He.length===0)continue;const et=(wn=It.get(F))!=null?wn:new Set;for(const Dt of He){et.add(Dt);const $t=Ne(Dt,de);at.push({sourceCommitSha:Dt,sourceBranchName:$t,mergeCommitSha:F,targetCommitSha:be,targetBranchName:de});const At=(eo=rt.get($t))!=null?eo:new Map,Ke=(Ci=At.get(Dt))!=null?Ci:new Set;Ke.add(de),At.set(Dt,Ke),rt.set($t,At)}It.set(F,et)}const Zt=new Map;for(const T of i){if(T.name===d)continue;const F=$(T);F&&Zt.set(T.name,F)}const Ce=new Map;for(const T of fe){const F=It.get(T.id);if(F&&F.size>0){const He=(fs=Ce.get(T.id))!=null?fs:new Set;for(const et of F)He.add(et);Ce.set(T.id,He)}if(T.branchName===d)continue;const de=Zt.get(T.branchName);if(!de||de===T.id)continue;const be=(xo=Ce.get(T.id))!=null?xo:new Set;be.add(de),Ce.set(T.id,be)}const Ee=py(fe,D,Ce),vt=new Map;for(const T of fe){const F=(sn=vt.get(T.branchName))!=null?sn:[];F.push(T),vt.set(T.branchName,F)}const Ht=new Map,wt=new Map,Ut=new Map,q=new Map,Me=new Map,Je=(T,F)=>{var et,Dt,$t;if(F.length===0)return[];const de=[...F].sort((At,Ke)=>{var Un,Wn;const an=(Un=Ee.get(At.visualId))!=null?Un:Number.MAX_SAFE_INTEGER,fn=(Wn=Ee.get(Ke.visualId))!=null?Wn:Number.MAX_SAFE_INTEGER;return an!==fn?an-fn:Li(At.date)-Li(Ke.date)||At.id.localeCompare(Ke.id)}),be=new Map;for(const At of de){const Ke=((et=At.clusterKey)==null?void 0:et.trim())||`cluster:${T}:${At.id}`,an=(Dt=be.get(Ke))!=null?Dt:[];an.push(At),be.set(Ke,an)}const He=[];for(const[At,Ke]of be.entries()){if(Ke.length===0)continue;const fn=[...Ke].sort((Wn,xn)=>{var ki,Fo;const xs=(ki=Ee.get(Wn.visualId))!=null?ki:Number.MIN_SAFE_INTEGER,co=(Fo=Ee.get(xn.visualId))!=null?Fo:Number.MIN_SAFE_INTEGER;return xs!==co?co-xs:Li(xn.date)-Li(Wn.date)||xn.id.localeCompare(Wn.id)})[0].visualId,Un={branchName:T,key:At,commitIds:Ke.map(Wn=>Wn.visualId),leadId:fn,count:Ke.length};He.push(Un),q.set(At,fn),Me.set(At,Ke.length);for(const Wn of Un.commitIds){wt.set(Wn,At);const xn=Wn.split(":").slice(1).join(":"),xs=($t=Ut.get(xn))!=null?$t:[];xs.includes(At)||xs.push(At),Ut.set(xn,xs)}}return He};for(const[T,F]of vt.entries())Ht.set(T,Je(T,F));const Ze=new Map;for(const T of fe)Ze.set(T.id,T);const dt=T=>{if(!T)return"none";const F=Array.from(Ze.values()).find(de=>Ko(de.id,T)||Ko(de.id.slice(0,7),T)||Ko(T,de.id));return F?`${F.id.slice(0,7)} ${F.branchName}`:T.slice(0,7)},Ue=b?["Lane rows (expected):",...[...n].sort((T,F)=>T.column-F.column||T.name.localeCompare(F.name)).map(T=>{var F;return`  row=${T.column} branch=${T.name} parent=${(F=T.parentName)!=null?F:"none"}`}),"",...i.flatMap(T=>{var Dt,$t,At,Ke,an,fn,Un,Wn;const F=(Dt=h[T.name])!=null?Dt:[],de=[...($t=W.get(T.name))!=null?$t:[]].reverse(),be=new Set(((At=P.get(T.name))!=null?At:[]).map(xn=>xn.id)),He=(an=(Ke=de.find(xn=>!xn.parentSha||!de.some(xs=>{var co;return Ko(xs.fullSha,(co=xn.parentSha)!=null?co:"")})))!=null?Ke:de[0])!=null?an:null,et=(Un=(fn=He==null?void 0:He.parentSha)!=null?fn:Q.get(T.name))!=null?Un:null;return[`Branch ${T.name}`,`  ahead=${(Wn=g[T.name])!=null?Wn:0} previews=${de.length} rendered=${be.size}`,`  db parent commit=${dt(et)}`,`  db child commit=${He?`${He.fullSha.slice(0,7)} ${T.name}`:"none"}`,...de.map(xn=>{const xs=be.has(xn.fullSha)?"visible":"hidden",co=be.has(xn.fullSha)?"kept by render set":"dropped by render set";return`  ${xs} ${xn.fullSha.slice(0,7)} ${xn.message} [${co}]`}),F.length===0?"  no preview data":null].filter(xn=>xn!=null)})]:[],mt=b?Array.from(P.entries()).map(([T,F])=>[`Branch debug ${T}`,...F.map(de=>`  ${de.id.slice(0,7)} ${de.message}`)].join(`
`)):[],lt=Ee,_t=Mm/Fu,Bt=20/Fu,nt=z?ps+_t+Bt:Yu+_t+Bt,H=z?Yu+_t+Bt:oc,te=Math.max(0,...fe.map(T=>{var F;return(F=lt.get(T.visualId))!=null?F:1})),_e=fe.map(T=>{var He,et;const F=D.get(T.branchName),de=(He=lt.get(T.visualId))!=null?He:1,be=(et=F==null?void 0:F.column)!=null?et:0;return z?{commit:T,row:de,column:be,x:yr+(de-1)*nt,y:gr+be*H}:{commit:T,row:de,column:be,x:yr+be*oc,y:gr+(te-de)*nt}}),we=T=>{var de;const F=(de=M[T.commit.visualId])!=null?de:M[T.commit.id];return F?{...T,x:F.x,y:F.y}:T},Qe=_e.map(we),Pe=w.trim().toLowerCase(),Be=Pe?Qe.filter(T=>{const F=T.commit.id.toLowerCase(),de=T.commit.id.slice(0,7).toLowerCase(),be=T.commit.message.toLowerCase(),He=T.commit.branchName.toLowerCase();return F.includes(Pe)||de.includes(Pe)||be.includes(Pe)||He.includes(Pe)}):Qe,gt=S&&(Ys=Qe.find(T=>T.commit.id===S))!=null?Ys:null,Ve=new Set(Be.map(T=>T.commit.id)),Ot=(ro=j==null?void 0:j.headSha)!=null?ro:null,qe=(()=>{var F,de;const T=(F=j==null?void 0:j.branchName)!=null?F:null;return!Ot||!T?null:(de=wt.get(`${T}:${Ot}`))!=null?de:null})(),Xe=new Set;for(const T of Ht.values())for(const F of T)F.count>1&&F.key!==qe&&Xe.add(F.key);const jt=[...fe].filter(T=>{var et;const F=wt.get(T.visualId);if(!F)return!0;const de=q.get(F),be=(et=Me.get(F))!=null?et:1,He=_.has(F)||!Xe.has(F)&&!x.has(F);return be<=1||He||de===T.visualId}),Rt=py(jt,D,Ce),Vt=Mm/Fu,Ge=20/Fu,Lt=z?ps+Vt+Ge:Yu+Vt+Ge,Tt=z?Yu+Vt+Ge:oc,yt=Math.max(0,...jt.map(T=>{var F;return(F=Rt.get(T.visualId))!=null?F:1})),ln=jt.map(T=>{var He,et;const F=D.get(T.branchName),de=(He=Rt.get(T.visualId))!=null?He:1,be=(et=F==null?void 0:F.column)!=null?et:0;return we(z?{commit:T,row:de,column:be,x:yr+(de-1)*Lt,y:gr+be*Tt}:{commit:T,row:de,column:be,x:yr+be*oc,y:gr+(yt-de)*Lt})}),ut=new Map;for(const T of ln){const F=(lo=ut.get(T.commit.id))!=null?lo:[];F.push(T),ut.set(T.commit.id,F)}const Ft=new Map;for(const T of ln){const F=wt.get(T.commit.visualId);if(!F)continue;const de=Ft.get(F);(!de||(z?T.x>de.x:T.y<de.y))&&Ft.set(F,T)}const jn=(T,F)=>`${T.toFixed(1)} ${F.toFixed(1)}`,An=Math.max(0,...ln.map(T=>T.row)),Mn=Math.max(0,...n.map(T=>T.column)),Gn=Math.max(0,...ln.map(T=>T.x+ps)),Kn=Math.max(0,...ln.map(T=>T.y+xl+Ps)),gs=Math.max(z?yr*2+Math.max(0,An-1)*Lt+ps+Yh+Ge:yr*2+(Mn+1)*oc,Gn+yr),Dn=Math.max(z?gr*2+Mn*Tt+Ps+Yh+Ge:gr*2+Math.max(0,An-1)*Lt+Ps+Yh+Ge,Kn+gr),Ln=[],un=new Map(i.map(T=>{var de,be;const F=new Date((be=(de=T.createdDate)!=null?de:T.divergedFromDate)!=null?be:T.lastCommitDate).getTime();return[T.name,Number.isFinite(F)?F:0]})),pn=T=>{var F;return(F=un.get(T))!=null?F:0},ot=[],cn=T=>{b&&ot.push(T)},ko=new Set,Po=new Map,Tn=(T,F)=>{var be;const de=(be=Po.get(T))!=null?be:[];de.includes(F)||de.push(F),Po.set(T,de)},jo=new Set,Ho=new Set,js=new Set,Mo=(T,F)=>{var He,et;if(!T)return null;const de=Wu(ut,T,F);if(de)return de;const be=(He=wt.get(`${F!=null?F:d}:${T}`))!=null?He:wt.get(T);return be&&(et=Ft.get(be))!=null?et:null},_o=new Set;for(const T of i){const F=oe(T);F&&Ho.add(F);const de=(hs=Q.get(T.name))!=null?hs:null;de&&js.add(de)}const Us=T=>{var He;const F=Mo(T.id,T.branchName);if(F)return F;const de=wt.get(T.visualId);if(!de)return null;const be=q.get(de);return be&&(He=ln.find(et=>et.commit.id===be))!=null?He:null},zn=(T,F)=>T?Wu(ut,T,F):null,wi=(T,F)=>z?{x:T.x-Fi,y:T.y+Ps/2,face:"left"}:{x:T.x+ps/2,y:T.y+Ps+Fi,face:"bottom"},Ls=T=>z?{x:T.x-Fi,y:T.y+Ps/2,face:"left"}:{x:T.x+ps/2,y:T.y+Ps+Fi,face:"bottom"},Ds=(T,F)=>T.column!==F.column?!0:z?T.commit.branchName!==F.commit.branchName:!1,cs=(T,F,de)=>{if(!z)return{x:F?T.x+ps:T.x+ps/2,y:F?T.y+Ps/2:T.y,face:F?"right":"top"};if(!F)return{x:T.x+ps+Fi,y:T.y+Ps/2,face:"right"};if(de&&de.column===T.column&&de.commit.branchName!==T.commit.branchName){if(de.x>T.x)return{x:T.x+ps/2,y:T.y+Ps+Fi,face:"bottom"};if(de.x<T.x)return{x:T.x+ps/2,y:T.y-Fi,face:"top"}}return!de||de.column===T.column?{x:T.x+ps+Fi,y:T.y+Ps/2,face:"right"}:de.column>T.column?{x:T.x+ps/2,y:T.y+Ps+Fi,face:"bottom"}:{x:T.x+ps/2,y:T.y-Fi,face:"top"}},To=T=>z?{x:T.x+ps/2,y:T.y+Ps+Fi,face:"bottom"}:{x:T.x+ps,y:T.y+Ps/2,face:"right"},Uo=(T,F)=>Wu(ut,T,F),ys=(T,F)=>zn(T,F),is=[],Ms=new Set;for(const T of at){const F=(ni=Mo(T.targetCommitSha,T.targetBranchName))!=null?ni:null;if(!F){cn({id:`merge:${T.mergeCommitSha}:${T.sourceCommitSha}:target`,kind:"merge",parent:T.sourceCommitSha,child:T.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const de=T.sourceCommitSha,be=`merge:${T.mergeCommitSha}:${de!=null?de:"unknown"}`;if(!de||Ko(de,T.targetCommitSha)){cn({id:be,kind:"merge",parent:de!=null?de:"unknown",child:T.targetCommitSha,rendered:!1,reason:de?"merged parent equals merge target sha":"missing merged parent sha"});continue}const He=(bo=Wu(ut,de))!=null?bo:null;if(!He){cn({id:be,kind:"merge",parent:de,child:T.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(He.commit.id===F.commit.id){cn({id:be,kind:"merge",parent:He.commit.id,child:F.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let et,Dt,$t;const At=z?F.x+ps/2:F.x+ps-Xh,Ke=z?F.y+Ps+Xh:F.y+Ps/2,an=z?"bottom":"right";z?(et=He.x+ps+Xh,Dt=He.y+Ps/2,$t="right"):(et=He.x+ps/2,Dt=He.y,$t="top");const fn=`${et.toFixed(2)}:${Dt.toFixed(2)}:${At.toFixed(2)}:${Ke.toFixed(2)}`;if(Ms.has(fn)){cn({id:be,kind:"merge",parent:He.commit.id,child:F.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Ms.add(fn),is.push({id:be,fromX:et,fromY:Dt,toX:At,toY:Ke,fromFace:$t,toFace:an,zIndex:pn(He.commit.branchName)}),cn({id:be,kind:"merge",parent:He.commit.id,child:F.commit.id,rendered:!0,reason:`merge connector rendered to ${T.targetBranchName}`})}const yn=new Set;for(const T of i){if(T.name===d)continue;const F=ie.get(T.name);if(!F)continue;const de=ce(T),be=Uo((zo=Q.get(T.name))!=null?zo:"",de),He=(Ws=ke.get(T.name))!=null?Ws:F,et=(si=ys(He.id,T.name))!=null?si:Us(He);if(!be||!et||be.commit.id===et.commit.id){const an=wt.get(`${T.name}:${F.id}`),fn=wt.get(`${T.name}:${He.id}`),Un=!!an&&!Xe.has(an),Wn=!!fn&&!Xe.has(fn),xn=!!an&&!_.has(an)&&(Un?x.has(an):!0),xs=!!fn&&!_.has(fn)&&(Wn?x.has(fn):!0);!be&&!xn&&Tn((Yo=et==null?void 0:et.commit.id)!=null?Yo:F.id,"Missing parent node"),!et&&!xs&&Tn(F.id,"Missing child node"),cn({id:`branch:${(tn=be==null?void 0:be.commit.id)!=null?tn:"null"}->${(Fs=et==null?void 0:et.commit.id)!=null?Fs:"null"}`,kind:"branch",parent:(Rs=be==null?void 0:be.commit.id)!=null?Rs:"null",child:(Bs=et==null?void 0:et.commit.id)!=null?Bs:"null",rendered:!1,reason:be?et?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Dt=`branch:${be.commit.id}->${et.commit.id}`;if(_o.has(Dt)){cn({id:Dt,kind:"branch",parent:be.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate connector key"});continue}_o.add(Dt),jo.add(be.commit.id);const $t=Ds(be,et);be.commit.branchName!==et.commit.branchName&&yn.add(be.commit.id);const At=To(be),Ke=Ls(et);Ln.push({id:Dt,fromX:At.x,fromY:At.y,toX:Ke.x,toY:Ke.y,fromFace:At.face,toFace:Ke.face,zIndex:pn(et.commit.branchName)}),cn({id:Dt,kind:"branch",parent:be.commit.id,child:et.commit.id,rendered:!0,reason:$t?"branch connector rendered":z?"horizontal connector rendered":"vertical connector rendered"})}for(const T of fe){const F=Us(T);if(!F)continue;const de=(vo=T.parentSha)!=null?vo:null;if(!de)continue;const be=(Wo=Mo(de,T.branchName))!=null?Wo:Uo(de,T.branchName);if(!be){const At=(wo=wt.get(`${T.branchName}:${de}`))!=null?wo:wt.get(de),Ke=!!At&&!Xe.has(At);!!At&&!_.has(At)&&(Ke?x.has(At):!0)||Tn(T.id,"Missing parent node"),cn({id:`${T.visualId}->${de}`,kind:"ancestry",parent:de,child:T.id,rendered:!1,reason:"missing parent node"});continue}if(F.commit.id===be.commit.id){Tn(F.commit.id,"Parent and child resolve to the same node"),cn({id:`${be.commit.id}->${F.commit.id}`,kind:"ancestry",parent:be.commit.id,child:F.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const He=`${T.branchName}:${(Ts=be.commit.visualId)!=null?Ts:be.commit.id}->${F.commit.visualId}`;if(_o.has(He)){Tn(be.commit.id,"Duplicate connector key"),Tn(F.commit.id,"Duplicate connector key"),cn({id:He,kind:"ancestry",parent:be.commit.id,child:F.commit.id,rendered:!1,reason:"duplicate connector key"});continue}_o.add(He),jo.add(be.commit.id);const et=Ds(be,F),Dt=cs(be,et,F),$t=wi(F);Ln.push({id:He,fromX:Dt.x,fromY:Dt.y,toX:$t.x,toY:$t.y,fromFace:Dt.face,toFace:$t.face,zIndex:pn(F.commit.branchName)}),cn({id:He,kind:"ancestry",parent:be.commit.id,child:F.commit.id,rendered:!0,reason:et?"ancestry connector rendered":z?"horizontal ancestry rendered":"vertical ancestry rendered"}),ko.add(be.commit.id),ko.add(F.commit.id)}const On=new Map;for(const T of ln){const F=(So=On.get(T.commit.branchName))!=null?So:[];F.push(T),On.set(T.commit.branchName,F)}for(const[T,F]of On.entries()){if(F.length<2)continue;const de=[...F].sort((be,He)=>{var et,Dt,$t,At,Ke,an,fn,Un;return be.row!==He.row?be.row-He.row:Li((Dt=(et=be==null?void 0:be.commit)==null?void 0:et.date)!=null?Dt:null)-Li((At=($t=He==null?void 0:He.commit)==null?void 0:$t.date)!=null?At:null)||((an=(Ke=be==null?void 0:be.commit)==null?void 0:Ke.id)!=null?an:"").localeCompare((Un=(fn=He==null?void 0:He.commit)==null?void 0:fn.id)!=null?Un:"")});for(let be=1;be<de.length;be+=1){const He=de[be-1],et=de[be];if(He.commit.id===et.commit.id)continue;const Dt=(Yn=et.commit.parentSha)!=null?Yn:null;if(Dt&&Uo(Dt,et.commit.branchName))continue;const $t=`chain:${T}:${He.commit.id}->${et.commit.id}`;if(_o.has($t)){Tn(He.commit.id,"Duplicate branch chain connector"),Tn(et.commit.id,"Duplicate branch chain connector"),cn({id:$t,kind:"ancestry",parent:He.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}_o.add($t);const At=Ds(He,et),Ke=cs(He,At,et),an=wi(et);Ln.push({id:$t,fromX:Ke.x,fromY:Ke.y,toX:an.x,toY:an.y,fromFace:Ke.face,toFace:an.face,zIndex:pn(et.commit.branchName)}),cn({id:$t,kind:"ancestry",parent:He.commit.id,child:et.commit.id,rendered:!0,reason:"branch chain rendered"}),ko.add(He.commit.id),ko.add(et.commit.id)}}return{branchByName:L,laneByName:D,mainCommits:V,branchCommitsByLane:P,branchPreviewSets:W,allCommits:fe,clustersByBranch:Ht,clusterKeyByCommitId:wt,clusterKeyBySha:Ut,leadByClusterKey:q,clusterCounts:Me,debugRows:Ue,branchDebugRows:mt,nodes:_e,normalizedSearchQuery:Pe,matchingNodes:Be,matchingNodeIds:Ve,focusedNode:gt,checkedOutClusterKey:qe,defaultCollapsedClumps:Xe,visibleCommitsList:jt,renderNodes:ln,visibleNodesBySha:ut,visibleNodeByClusterKey:Ft,pointFormatter:jn,contentWidth:gs,contentHeight:Dn,connectors:Ln,mergeConnectors:is,connectorDecisions:ot,nodeWarnings:Po,connectorParentShas:jo,branchStartShas:Ho,branchOffNodeShas:js,crossBranchOutgoingShas:yn,commitIdsWithRenderedAncestry:ko,branchBaseCommitByName:ie,firstBranchCommitByName:Re,mergeDestinations:at,mergeTargetBranchesBySourceBranchAndCommitSha:rt}}const yw=8,xw=44,_y=120,gy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Wx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<yw){const P=d/_,W=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+P*U,c1y:n+W*U,c2x:i-P*U,c2y:a-W*U}}if(Math.min(p,g)<xw){const P=d/_,W=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+P*U,c1y:n+W*U,c2x:i-P*U,c2y:a-W*U}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),j=Math.min(120,g*.32),k=Math.min(160,g*.42),M=gy(c),z=gy(u);if(!(M==="v"&&z==="h"||M==="v"&&z==null&&g>=p||M==null&&z==="h"&&g>=p||M==="v"&&z==="v"||M==null&&z==null&&g>p)){const P=i,W=n;return{kind:"elbowH",cx:P,cy:W,s1c1x:t+x*w,s1c1y:n,s1c2x:P-x*S,s1c2y:W,s2c1x:P,s2c1y:W+b*j,s2c2x:i,s2c2y:a-b*k}}const D=t,V=a;return{kind:"elbowV",cx:D,cy:V,s1c1x:t,s1c1y:n+b*k,s1c2x:D,s1c2y:V-b*j,s2c1x:D+x*w,s2c1y:V,s2c2x:i-x*S,s2c2y:a}}function bw(t,n,i,a,c,u){const d=Wx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function yy(t,n,i,a,c,u,d){const h=Wx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(_y,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,j=a>=n?1:-1,k=h.cx-S*w,M=h.cy+j*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(k-S*w*.5,h.cy)} ${c(k,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,M)}`,`C ${c(h.cx,M+j*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(_y,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const up=2.25,ic=up/2,vw=.45,ww=.01,la=up,kd=10,Sw=-100,xy=0,by=.9,Cw=.9,vy=.001,qh=.001,kw=12,jw=ps+48;function kn(...t){return t.filter(Boolean).join(" ")}function Mw(t){return Math.max(vw,Math.min(up,t))}function Tw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Fx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Ew(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function Aw(t,n,i,a,c,u,d){const h=bw(t,n,i,a,u,d),p=Ew(h);return Fx(c,p)}function Xx(t,n){return{left:t.x,top:t.y+n,right:t.x+ps,bottom:t.y+xl+Ps+4}}function Dw(t,n){const i=jw,a=Math.max(120,Math.ceil(xl+Ps+4-n+24)),c=new Map;for(const u of t){const d=Xx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=g;w<=_;w++){const S=`${b},${w}`;let j=c.get(S);j||(j=new Set,c.set(S,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Nw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=g;S<=_;S++){const j=d.get(`${w},${S}`);if(j)for(const k of j)x.add(k)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const j=Xx(S,a);Fx(n,j)&&b.add(w)}return b}function wy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/la;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Rw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function Sy(t,n,i){const a=n/la;return!Number.isFinite(a)||a<=0?t:Rw(t,100/a)}function Cy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function vi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Tm(t,n){if(n){const i=Cy(n),a=Cy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Gh(t,n){return t.pathExists===!1?!1:Tm(t,n)}function Bw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Lw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let g=null;const _=requestAnimationFrame(()=>{g=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(_),g!=null&&cancelAnimationFrame(g)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function zw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:g,labelTopPx:_,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,iconScaleStyle:S,normalizedSearchQuery:j,matchingNodeIds:k,focusedNode:M,renderNodes:z,shouldRenderNode:L,manuallyOpenedClumps:D,manuallyClosedClumps:V,defaultCollapsedClumps:P,leadByClusterKey:W,clusterKeyByCommitId:U,clusterCounts:Z,commitIdsWithRenderedAncestry:ae,nodeWarnings:ie,connectorParentShas:ke,branchStartShas:Re,branchOffNodeShas:Q,crossBranchOutgoingShas:ce,branchBaseCommitByName:$,branchStartAccentClass:oe,connectorParentAccentClass:G,commitCornerRadiusPx:K,lineStrokeWidth:pe,pointFormatter:N,connectors:ne,mergeConnectors:re,cullConnectorPath:fe,flushCameraReactTick:Ae,setManuallyOpenedClumps:$e,setManuallyClosedClumps:Ne,onCommitCardClick:at,unpushedCommitShasSetByBranch:rt,checkedOutHeadSha:It}){const[Zt,Ce]=y.useState(new Set),Ee=y.useRef(null);y.useEffect(()=>{const q=new Set;Z.forEach((Ze,dt)=>{(D.has(dt)||!P.has(dt)&&!V.has(dt))&&q.add(dt)});const Me=Ee.current;if(Me==null){Ee.current=q;return}const Je=[];if(q.forEach(Ze=>{Me.has(Ze)||Je.push(Ze)}),Je.length>0){Ce(dt=>{const Ue=new Set(dt);return Je.forEach(mt=>Ue.add(mt)),Ue});const Ze=window.setTimeout(()=>{Ce(dt=>{const Ue=new Set(dt);return Je.forEach(mt=>Ue.delete(mt)),Ue})},260);return Ee.current=q,()=>{window.clearTimeout(Ze)}}Ee.current=q},[Z,P,V,D]);const vt=(q,Me)=>{const Je=Me.zIndex-q.zIndex;if(Je!==0)return Je;const Ze=Math.min(q.fromY,q.toY),dt=Math.min(Me.fromY,Me.toY),Ue=Ze-dt;return Ue!==0?Ue:q.id.localeCompare(Me.id)},Ht=re.filter(q=>fe(q)).sort(vt),wt=ne.filter(q=>fe(q)).sort(vt),Ut=z.filter(q=>L(q));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Ut.map(q=>{var qe,Xe,jt,Rt,Vt;const Me=U.get(q.commit.visualId),Je=Me?D.has(Me)||!P.has(Me)&&!V.has(Me):!1,Ze=Me?W.get(Me)===q.commit.visualId:!1,dt=Me!=null&&Je&&!Ze&&Zt.has(Me),Ue=Me&&(qe=Z.get(Me))!=null?qe:1,mt=ae.has(q.commit.id),lt=(Xe=ie.get(q.commit.id))!=null?Xe:[],_t=lt.length>0&&!mt,Bt=w.includes(q.commit.id),nt=q.commit.id==="WORKING_TREE"||q.commit.kind==="uncommitted",H=q.commit.kind==="stash"||q.commit.id.startsWith("STASH:"),te=/^STASH:(\d+)$/.exec(q.commit.id),_e=te?`Stash:${te[1]}`:null,we=H?q.commit.message.trim()&&q.commit.message.trim()!=="git-visualizer"?q.commit.message:"Stashed changes":q.commit.message,Qe=q.commit.kind==="branch-created"&&q.commit.id.startsWith("BRANCH_HEAD:"),Pe=nt||((Rt=(jt=rt.get(q.commit.branchName))==null?void 0:jt.has(q.commit.id))!=null?Rt:!1),gt=(nt||It!=null&&q.commit.id===It)&&!Bt,Ve=gt?"text-[#38BDF2]":Bt?"text-[#158EFC]":"text-muted-foreground",Ot=gt?{color:"#38BDF2"}:Bt?{color:"#158EFC"}:void 0;return l.jsxs(Lw,{fadeIn:dt,dataCommitCard:"true",className:kn("group absolute z-20 cursor-grab active:cursor-grabbing",j&&!k.has(q.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",j&&k.has(q.commit.id)?"scale-[1.01]":"",(M==null?void 0:M.commit.id)===q.commit.id?"z-30 scale-[1.015]":""),style:{left:q.x,top:q.y,width:ps,height:xl+Ps+4,overflow:"visible"},onClick:Ge=>at(Ge,q),onPointerDown:Ge=>g(Ge,q),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${_}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:kn("min-w-0 h-4 flex-1 text-sm font-medium leading-none",Ve,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ot,children:H&&_e?_e:q.commit.branchName?`${q.commit.branchName}/${q.commit.id.slice(0,7)}`:q.commit.id.slice(0,7)}),Ze&&Ue>1?l.jsx("button",{type:"button",onMouseDown:Ge=>{Ge.stopPropagation()},onClick:Ge=>{if(Ge.stopPropagation(),Ge.preventDefault(),!Me)return;!P.has(Me)?($e(Tt=>{if(!Tt.has(Me))return Tt;const yt=new Set(Tt);return yt.delete(Me),yt}),Ne(Tt=>{const yt=new Set(Tt);return yt.has(Me)?yt.delete(Me):yt.add(Me),yt})):(Ne(Tt=>{if(!Tt.has(Me))return Tt;const yt=new Set(Tt);return yt.delete(Me),yt}),$e(Tt=>{const yt=new Set(Tt);return yt.has(Me)?yt.delete(Me):yt.add(Me),yt})),Ae()},className:kn("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",Ve),style:Ot,children:Je?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Ue}`}):null]})}),l.jsx("div",{className:kn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",gt&&!Pe&&!H&&!Qe?"bg-[#EBF7FE]":Bt&&!Pe&&!H&&!Qe?"bg-[#E5F0FF]":Pe||H||Qe?"bg-transparent":"bg-[#F5F5F5]",H||nt||Qe?"border-dashed":"",Q.has(q.commit.id)||Re.has(q.commit.id)||ce.has(q.commit.id)?oe:ke.has(q.commit.id)?G:((Vt=$.get(q.commit.branchName))==null?void 0:Vt.id)===q.commit.id?"border-amber-500":_t?"border-red-500":"",(j&&k.has(q.commit.id)&&!d,"")),style:{top:0,borderWidth:`${H||nt||Qe?pe*(2/1.5):pe}px`,borderColor:gt?"#38BDF2":Bt?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${K}px`,borderBottomRightRadius:`${K}px`,borderBottomLeftRadius:`${K}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:kn("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",Ve,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ot,children:Ze&&Je?we:Ze&&Ue>1?`${we} +${Ue-1}`:we}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:_t?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:lt.join(`
`),children:"Broken ancestry"}):null})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:kn("select-text text-sm font-medium",Ve),style:Ot,children:["@",q.commit.author]}),l.jsx("div",{className:kn("select-text text-sm font-medium",Ve),style:Ot,children:new Date(q.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(M==null?void 0:M.commit.id)===q.commit.id&&j?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:S,children:"Search result"}):null]})})]},q.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Ht.map(q=>{const{fromX:Me,fromY:Je,toX:Ze,toY:dt}=q,Ue=yy(Me,Je,Ze,dt,N,q.fromFace,q.toFace);return l.jsx("path",{d:Ue,fill:"none",stroke:Wh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},q.id)}),wt.map(q=>{const{fromX:Me,fromY:Je,toX:Ze,toY:dt}=q,Ue=yy(Me,Je,Ze,dt,N,q.fromFace,q.toFace);return l.jsx("path",{d:Ue,fill:"none",stroke:Wh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},q.id)})]})]})})})}function Ow({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStashLocalChanges:_,onPushCurrentBranch:x,onPushAllBranches:b,onPushCommitTargets:w,onDeleteSelection:S,onMergeRefsIntoBranch:j,selectedPushTargets:k,selectedPushLabel:M,canPushCurrentBranch:z,pushCurrentBranchLabel:L,pushableRemoteBranchCount:D,deletableSelectionCount:V,selectedCommitTargetOption:P,mergeInProgress:W,setMergeTargetCommitSha:U,worktrees:Z,currentRepoPath:ae,worktreeMenuOpen:ie,setWorktreeMenuOpen:ke,onSwitchToWorktree:Re,onRemoveWorktree:Q,removeWorktreeInProgress:ce,setCommitDialogOpen:$,setDeleteConfirmOpen:oe,setNewBranchDialogOpen:G}){var Zt;const K=t.length>0,[pe,N]=y.useState(!1),ne="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",re=!!g&&d&&!i&&!K&&!n,fe=!!x&&z&&!K&&!u,Ae=!!w&&k.length>0&&!u,$e=!!b&&D>=2&&!K&&!u,Ne=!!_&&!c&&!K&&!a,at="Push Selected...",rt=re?{label:n?"Committing...":"Commit",run:()=>$(!0),disabled:!re}:fe?{label:u?"Pushing...":L,run:()=>void(x==null?void 0:x()),disabled:!fe}:Ae?{label:at,run:()=>void(w==null?void 0:w(k.map(Ce=>({branchName:Ce.branchName,targetSha:Ce.targetSha})))),disabled:!Ae}:null;return l.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-[60] px-2.5 pt-2.25",children:l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit max-w-full flex-wrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{rt&&rt.run()},disabled:!rt||rt.disabled,className:kn(ne,"h-full rounded-r-none border-0 bg-transparent hover:bg-accent"),children:(Zt=rt==null?void 0:rt.label)!=null?Zt:"No action"}),l.jsx("button",{type:"button",onClick:()=>N(Ce=>!Ce),disabled:!rt,"aria-haspopup":"menu","aria-expanded":pe,className:kn(ne,"h-full rounded-l-none border-0 bg-transparent hover:bg-accent"),title:"More actions",children:l.jsx(Hx,{className:"h-3.5 w-3.5 shrink-0"})}),pe&&rt?l.jsxs("div",{className:"absolute bottom-full left-0 mb-2 min-w-56 overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsx("button",{type:"button",onClick:()=>{N(!1),$(!0)},disabled:!re,className:kn(ne,"w-full justify-start rounded-md border-0 bg-transparent px-2",!re&&"text-muted-foreground opacity-50"),children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>{N(!1),x==null||x()},disabled:!fe,className:kn(ne,"w-full justify-start rounded-md border-0 bg-transparent px-2",!fe&&"text-muted-foreground opacity-50"),children:u?"Pushing...":L}),l.jsx("button",{type:"button",onClick:()=>{N(!1),w==null||w(k.map(Ce=>({branchName:Ce.branchName,targetSha:Ce.targetSha})))},disabled:!Ae,className:kn(ne,"w-full justify-start rounded-md border-0 bg-transparent px-2",!Ae&&"text-muted-foreground opacity-50"),title:M,children:at}),l.jsx("button",{type:"button",onClick:()=>{N(!1),b==null||b()},disabled:!$e,className:kn(ne,"w-full justify-start rounded-md border-0 bg-transparent px-2",!$e&&"text-muted-foreground opacity-50"),children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>{N(!1),_==null||_()},disabled:!Ne,className:kn(ne,"w-full justify-start rounded-md border-0 bg-transparent px-2",!Ne&&"text-muted-foreground opacity-50"),children:a?"Stashing...":"Stash"})]}):null]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-[9px]",children:[V>0?l.jsx("button",{type:"button",onClick:()=>oe(!0),disabled:!S||h,className:kn(ne,"bg-background text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"),children:h?"Deleting...":"Delete selection"}):null,l.jsx("button",{type:"button",onClick:()=>G(!0),disabled:p,className:kn(ne,"pointer-events-auto relative z-10 bg-background"),children:p?"Creating...":"Create Branch"})]}),t.length>1&&P.options.length>0&&P.targetBranch&&j?l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-[9px] rounded-full border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"merge to"}),P.options.map(Ce=>{const Ee=Ce.targetBranch===P.targetBranch;return l.jsx("button",{type:"button",onClick:()=>U(Ce.targetSha),className:kn("rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium transition-colors",Ee?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:Ce.targetBranch},`merge-${Ce.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void j(P.sources,P.targetBranch),disabled:P.sources.length===0||W,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:W?"Merging...":"Confirm"})]}):null,Z.length>0&&(Re||Q)?l.jsxs("div",{className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>ke(Ce=>!Ce),className:ne,children:[Z.length," ",Z.length===1?"Worktree":"Worktrees"]}),ie?l.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:Z.map(Ce=>{var Ee;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:Ce.path,children:Tm(Ce,ae)?Bw(Ce.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(Ee=Ce.branchName)!=null?Ee:"detached"," • ",Ce.headSha.slice(0,7)]})]}),Tm(Ce,ae)?l.jsxs("div",{className:"flex items-center gap-1",children:[Re?l.jsx("button",{type:"button",onClick:()=>{ke(!1),Re(Ce.path)},disabled:ce||Ce.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,Q?l.jsx("button",{type:"button",onClick:()=>void Q(Ce.path,Ce.isPrunable),disabled:ce,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:ce?"...":"Remove"}):null]}):null]},Ce.path)})}):null]}):null]})})}function $w({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:g,debugRows:_,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${g}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",..._,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function Iw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:j,onNewBranchCreateModeChange:k,onNewBranchDialogClose:M,onNewBranchConfirm:z,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:D,createBranchFromNodeInProgress:V}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:P=>i(P.target.value),onKeyDown:P=>{(P.metaKey||P.ctrlKey)&&P.key==="Enter"&&(P.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(P=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:P},P))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:kn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>k("new-root"),className:kn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:P=>j(P.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:M,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:z,disabled:!w.trim()||V||S==="from-selected-node"&&!L&&!D,className:kn("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:V?"Creating...":"Create"})]})]})}):null]})}function Pw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(ic),c=y.useRef({panX:0,panY:0,zoom:ic}),u=y.useRef(null),d=y.useRef(ic),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(ic),[b,w]=y.useState(0),S=y.useRef(null),j=y.useRef(0),k=y.useCallback(()=>{const Z=t.current;if(!Z)return null;const ae=Z.getBoundingClientRect(),ie=getComputedStyle(Z),ke=Number.parseFloat(ie.borderLeftWidth)||0,Re=Number.parseFloat(ie.borderTopWidth)||0,Q=Number.parseFloat(ie.paddingLeft)||kd,ce=Number.parseFloat(ie.paddingTop)||kd;return{x:ae.left+ke+Q,y:ae.top+Re+ce}},[t]),M=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(Z=>Z+1)}),j.current=performance.now()},[]),z=y.useCallback((Z,ae,ie)=>{const ke=c.current;c.current={panX:Z,panY:ae,zoom:ie};const Re=n.current;if(Re&&(Re.style.transform=`translate3d(${Z}px, ${ae}px, 0) scale(${ie/la})`),Math.abs(d.current-ie)>qh&&(d.current=ie,x(ie)),Math.abs(ie-ke.zoom)>qh){M();return}const $=performance.now()-j.current;if($>=xy){M();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,M()},xy-$)},[M,n]),L=y.useRef(null),D=y.useCallback(()=>{u.current!=null||!L.current||(u.current=window.requestAnimationFrame(L.current))},[]),V=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),P=y.useCallback((Z,ae,ie)=>{i.current={x:Z,y:ae},a.current=ie,V(),D()},[V,D]);L.current=()=>{u.current=null;const Z=c.current,ae=i.current.x,ie=i.current.y,ke=a.current,Re=Math.abs(ae-Z.panX)<=vy?ae:Z.panX+(ae-Z.panX)*by,Q=Math.abs(ie-Z.panY)<=vy?ie:Z.panY+(ie-Z.panY)*by,ce=Math.abs(ke-Z.zoom)<=qh?ke:Z.zoom+(ke-Z.zoom)*Cw;z(Re,Q,ce),Re!==ae||Q!==ie||ce!==ke?L.current&&(u.current=window.requestAnimationFrame(L.current)):M()};const W=y.useCallback((Z,ae,ie)=>{const ke=Mw(ie),Re=c.current,Q=k();if(!Q){P(i.current.x,i.current.y,ke);return}const ce=Z-Q.x,$=ae-Q.y,oe=Re.zoom/la,G=ke/la,K=(ce-Re.panX)/oe,pe=($-Re.panY)/oe;P(ce-K*G,$-pe*G,ke)},[k,P]),U=y.useCallback(Z=>{if(Z.preventDefault(),Z.ctrlKey||Z.metaKey){const ae=Math.exp(-Z.deltaY*ww);W(Z.clientX,Z.clientY,a.current*ae);return}P(i.current.x-Z.deltaX,i.current.y-Z.deltaY,a.current)},[P,W]);return y.useLayoutEffect(()=>(z(0,0,ic),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[z]),y.useLayoutEffect(()=>{const Z=n.current;if(!Z)return;const ae=c.current;Z.style.transform=`translate3d(${ae.panX}px, ${ae.panY}px, 0) scale(${ae.zoom/la})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:k,flushCameraReactTick:M,syncCamera:P,handleWheel:U}}function Hw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function Uw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[j,k]=y.useState(null),M=y.useCallback(L=>{const D=t.current,V=i();if(!D||!V)return[];const P=D.getBoundingClientRect(),W=n.current.zoom/la;if(W<=0)return[];const U=[],Z=L.left,ae=L.left+L.width,ie=L.top,ke=L.top+L.height;for(const Re of a){if(!c(Re))continue;const Q=V.x+n.current.panX+Re.x*W-P.left,ce=V.y+n.current.panY+Re.y*W-P.top,$=Q+ps*W,oe=ce+(xl+Ps)*W;!($<Z||Q>ae||oe<ie||ce>ke)&&U.push(Re.commit.id)}return U},[i,a,n,t,c]),z=y.useCallback(L=>{if(L.button!==0)return;const D=L.target;if(D!=null&&D.closest("[data-commit-card]")||D!=null&&D.closest("button, a, input, textarea, select"))return;const V=t.current;if(!V)return;L.preventDefault();const P=V.getBoundingClientRect(),W=L.clientX-P.left,U=L.clientY-P.top;d.current={startX:W,startY:U,currentX:W,currentY:U,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?w:[],_(!0),b({left:W,top:U,width:0,height:0})},[t,w]);return y.useEffect(()=>{const L=V=>{var ie;const P=d.current;if(!P)return;const W=t.current;if(!W)return;const U=W.getBoundingClientRect();P.currentX=V.clientX-U.left,P.currentY=V.clientY-U.top,!h.current&&(Math.abs(P.currentX-P.startX)>2||Math.abs(P.currentY-P.startY)>2)&&(h.current=!0);const Z=Hw(P);b(Z);const ae=M(Z);S(P.additive?Array.from(new Set([...p.current,...ae])):Array.from(new Set(ae))),P.additive||k((ie=ae[ae.length-1])!=null?ie:null)},D=()=>{if(d.current){const V=h.current;d.current=null,h.current=!1,_(!1),b(null),V||(S([]),k(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",D),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",D)}},[M,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:j,setMergeTargetCommitSha:k,startMarqueeDrag:z}}function ky({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:j,mergeInProgress:k=!1,onPushAllBranches:M,onPushCurrentBranch:z,onPushCommitTargets:L,pushInProgress:D=!1,onDeleteSelection:V,deleteInProgress:P=!1,worktrees:W=[],currentRepoPath:U,onRemoveWorktree:Z,removeWorktreeInProgress:ae=!1,onSwitchToWorktree:ie,onStashLocalChanges:ke,stashInProgress:Re=!1,stashDisabled:Q=!1,onCommitLocalChanges:ce,commitInProgress:$=!1,commitDisabled:oe=!1,onStageAllChanges:G,stageInProgress:K=!1,onCreateBranchFromNode:pe,onCreateRootBranch:N,createBranchFromNodeInProgress:ne=!1,isDebugOpen:re=!1,onDebugClose:fe,orientation:Ae="horizontal",branchCommitPreviews:$e={},branchParentByName:Ne={},branchUniqueAheadCounts:at={},gridSearchQuery:rt="",gridSearchJumpToken:It=0,gridSearchJumpDirection:Zt=1,gridFocusSha:Ce=null,checkedOutRef:Ee=null,onGridSearchResultCountChange:vt,onGridSearchResultIndexChange:Ht,onGridSearchFocusChange:wt,onInteractionChange:Ut,manuallyOpenedClumps:q,manuallyClosedClumps:Me,setManuallyOpenedClumps:Je,setManuallyClosedClumps:Ze,layoutModel:dt}){var Zn,uo,Nn,Qt,nn,hn,Es,Os,Xs,qs,fo,hi,Xo;const Ue=y.useRef(null),mt=y.useRef(null),lt=y.useRef(null),_t=y.useRef(null),Bt=y.useRef(void 0),nt=y.useRef(void 0),H=y.useRef(void 0),te=y.useRef(0),[_e,we]=y.useState(!1),[Qe,Pe]=y.useState(!1),[Be,gt]=y.useState(""),[Ve,Ot]=y.useState(!1),[qe,Xe]=y.useState(!1),[jt,Rt]=y.useState(""),[Vt,Ge]=y.useState("from-selected-node"),[Lt,Tt]=y.useState(()=>new Set),[yt,ln]=y.useState(()=>new Set),[ut,Ft]=y.useState({}),jn=y.useRef(!1),An=y.useRef(null),Mn=y.useRef(null),Gn=q!=null?q:Lt,Kn=Me!=null?Me:yt,gs=Je!=null?Je:Tt,Dn=Ze!=null?Ze:ln,[Ln,un]=y.useState(null),[pn,ot]=y.useState(null),{isCameraMoving:cn,renderedZoom:ko,cameraRenderTick:Po,renderedCameraRef:Tn,interactionIdleTimeoutRef:jo,getTransformLayerOriginScreen:Ho,flushCameraReactTick:js,syncCamera:Mo,handleWheel:_o}=Pw({mapPadHostRef:mt,transformLayerRef:lt}),Us=y.useMemo(()=>cp(t,d,$e,Ne),[t,d,$e,Ne]),zn=y.useMemo(()=>jc({lanes:Us,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:$e,branchParentByName:Ne,branchUniqueAheadCounts:at,manuallyOpenedClumps:Gn,manuallyClosedClumps:Kn,isDebugOpen:re,gridSearchQuery:rt,gridFocusSha:Ce,checkedOutRef:Ee!=null?Ee:null,orientation:Ae,nodePositionOverrides:ut}),[Us,t,n,i,a,d,$e,Ne,at,Gn,Kn,re,rt,Ce,(Zn=Ee==null?void 0:Ee.headSha)!=null?Zn:null,(uo=Ee==null?void 0:Ee.branchName)!=null?uo:null,Ae,ut]),Ls=Object.keys(ut).length>0?zn:dt!=null?dt:zn,Ds=y.useMemo(()=>jc({lanes:Us,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:$e,branchParentByName:Ne,branchUniqueAheadCounts:at,manuallyOpenedClumps:Gn,manuallyClosedClumps:Kn,isDebugOpen:re,gridSearchQuery:rt,gridFocusSha:Ce,checkedOutRef:Ee!=null?Ee:null,orientation:Ae,nodePositionOverrides:ut}),[Us,t,n,i,a,d,$e,Ne,at,Gn,Kn,re,rt,Ce,(Nn=Ee==null?void 0:Ee.headSha)!=null?Nn:null,(Qt=Ee==null?void 0:Ee.branchName)!=null?Qt:null,Ae,ut]),{allCommits:cs,clusterKeyByCommitId:To,leadByClusterKey:Uo,clusterCounts:ys,matchingNodes:is,matchingNodeIds:Ms,normalizedSearchQuery:yn,focusedNode:On,defaultCollapsedClumps:dn,renderNodes:Qn,visibleNodesBySha:Qi,contentWidth:ei,contentHeight:di,connectors:go,mergeConnectors:ti,connectorDecisions:Ns,nodeWarnings:Eo,commitIdsWithRenderedAncestry:Pn,connectorParentShas:Zs,branchStartShas:us,branchOffNodeShas:ds,crossBranchOutgoingShas:Ii,branchBaseCommitByName:Vo,pointFormatter:Zi}=Ls,Kt=!!yn,Vs=ko/la,zs=y.useMemo(()=>({transform:`scale(${1/Vs})`,transformOrigin:"top left",width:`${100*Vs}%`,height:`${100*Vs}%`}),[Vs]),Hn=-(20/Vs),Si=y.useMemo(()=>{const xe=new Map;for(const Fe of Qn)xe.set(Fe.commit.visualId,Fe);return xe},[Qn]),Lo=y.useMemo(()=>Dw(Qn,Hn),[Qn,Hn]),Js=xe=>{var E;const Fe=xe.commit.id,ct=xe.commit.visualId;if(Kt&&Ms.has(Fe)||(On==null?void 0:On.commit.id)===Fe||Ln===null)return!0;if(!Ln.has(ct))return!1;const C=To.get(ct);return C&&((E=ys.get(C))!=null?E:1)>1&&(Gn.has(C)||!dn.has(C)&&!Kn.has(C)),!0},fi=1.5/Vs,yo=kw/Vs,wn=y.useMemo(()=>({transform:`scale(${1/Vs})`,transformOrigin:"center"}),[Vs]),eo="border-slate-400/70",Ci="border-blue-500",fs=y.useMemo(()=>new Map(t.map(xe=>[xe.name,xe])),[t]),xo=(nn=Ee==null?void 0:Ee.hasUncommittedChanges)!=null?nn:!1;y.useMemo(()=>new Set(t.filter(xe=>xe.commitsAhead===0&&!xe.name.startsWith("*")).map(xe=>xe.name)),[t]);const sn=y.useMemo(()=>{var Fe,ct;const xe=new Map;for(const C of Qn){const E=(Fe=xe.get(C.commit.id))!=null?Fe:new Set;E.add(C.commit.branchName),xe.set(C.commit.id,E)}for(const C of i){const E=(ct=xe.get(C.fullSha))!=null?ct:new Set;C.branch&&E.add(C.branch),xe.set(C.fullSha,E)}return xe},[Qn,i,d]),Ys=y.useMemo(()=>new Map(Object.entries(c).map(([xe,Fe])=>[xe,new Set(Fe)])),[c]),ro=y.useCallback(()=>{jo.current,js()},[js,jo]),{isMarqueeSelecting:lo,marqueeRect:hs,selectedCommitShas:ni,setSelectedCommitShas:bo,mergeTargetCommitSha:zo,setMergeTargetCommitSha:Ws,startMarqueeDrag:si}=Uw({scrollContainerRef:Ue,renderedCameraRef:Tn,getTransformLayerOriginScreen:Ho,renderNodes:Qn,shouldRenderNode:Js,onPointerReleaseNoMarquee:ro}),Yo=y.useMemo(()=>new Set(Qn.map(xe=>xe.commit.id)),[Qn]),tn=y.useMemo(()=>ni.filter(xe=>Yo.has(xe)),[ni,Yo]),Fs=y.useCallback((xe,Fe)=>{var E;if(!Fe)return!1;if(((E=$e[xe])!=null?E:[]).some(R=>vi(R.fullSha,Fe)||vi(R.sha,Fe)))return!0;const C=fs.get(xe);return!!(C!=null&&C.headSha&&vi(C.headSha,Fe))},[$e,fs]),Rs=(hn=Ee==null?void 0:Ee.branchName)!=null?hn:null,Bs=(Es=Ee==null?void 0:Ee.headSha)!=null?Es:null,vo=Rs==null,Wo=y.useMemo(()=>{if(!Ce)return null;const xe=Qn.filter(Fe=>Fe.commit.id===Ce);return xe.length===0?null:xe.length===1||!On?xe[0]:xe.reduce((Fe,ct)=>{const C=(Fe.x-On.x)**2+(Fe.y-On.y)**2;return(ct.x-On.x)**2+(ct.y-On.y)**2<C?ct:Fe})},[Ce,Qn,On]),wo=y.useCallback((xe,Fe,ct)=>{for(const C of W){if(!Gh(C,U))continue;if(C.branchName){if(C.branchName===xe&&vi(C.headSha,Fe))return C;continue}if(!vi(C.headSha,Fe)&&!vi(C.headSha,ct))continue;if(C.parentSha&&Fs(xe,C.parentSha)||Fs(xe,C.headSha))return C;const E=fs.get(xe);if(E&&vi(E.headSha,C.headSha)||xe===d&&i.some(R=>vi(R.fullSha,C.headSha)))return C}return null},[W,U,Fs,fs,d,i]),Ts=y.useCallback(xe=>{for(const Fe of W)if(Gh(Fe,U)&&Fe.branchName===xe)return Fe;return null},[W,U]),So=y.useCallback((xe,Fe)=>{for(const ct of W)if(Gh(ct,U)&&(vi(ct.headSha,xe)||vi(ct.headSha,Fe)))return ct;return null},[W,U]),Yn=y.useCallback(xe=>{var Fe;return Array.from((Fe=sn.get(xe))!=null?Fe:[])},[sn]),T=y.useMemo(()=>{var E,R,O,Y;const xe=new Map;for(const ue of tn){const Oe=Yn(ue);if(Oe.length===0)continue;const Ye=(E=Oe.find(it=>it!==d))!=null?E:Oe[0],tt=tn.filter(it=>it!==ue).filter(it=>!new Set(Yn(it)).has(Ye));xe.set(Ye,{targetSha:ue,targetBranch:Ye,sourceRefs:tt})}const Fe=Array.from(xe.values()),ct=zo?Fe.find(ue=>{var Oe;return ue.targetSha===zo||ue.targetBranch===((Oe=Yn(zo)[0])!=null?Oe:"")}):null,C=(R=ct!=null?ct:Fe[Fe.length-1])!=null?R:null;return{options:Fe,selected:C,targetBranch:(O=C==null?void 0:C.targetBranch)!=null?O:null,sources:(Y=C==null?void 0:C.sourceRefs)!=null?Y:[]}},[tn,Yn,d,zo]),F=y.useMemo(()=>{const xe=[...Rs===d?[{name:d,headSha:Bs!=null?Bs:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(Fe=>!Fe.name.startsWith("*")&&Fe.unpushedCommits>0&&Fe.remoteSyncStatus!=="on-github").map(Fe=>[Fe.name,Fe]);return new Map(xe)},[t,Rs,Bs,d,a.length]),de=y.useMemo(()=>{const xe=C=>{var R;const E=Yn(C).filter(O=>F.has(O));return E.length===0?null:E.length===1?E[0]:Rs&&E.includes(Rs)?Rs:(R=E.find(O=>O!==d))!=null?R:E[0]},Fe=C=>{var E;return C===d?a.map(R=>{var O,Y;return{fullSha:R.fullSha,sha:R.sha,parentSha:(O=R.parentSha)!=null?O:null,message:R.message,author:R.author,date:R.date,kind:(Y=R.kind)!=null?Y:"commit"}}):(E=$e[C])!=null?E:[]},ct=new Map;for(const C of tn){const E=xe(C);if(!E)continue;const R=F.get(E);if(!R)continue;const O=Fe(E).slice(0,R.unpushedCommits),Y=O.findIndex(Oe=>Oe.fullSha===C);if(Y===-1)continue;const ue=ct.get(E);(!ue||Y<ue.targetIndex)&&ct.set(E,{branchName:E,targetSha:C,targetIndex:Y,commitCount:O.length-Y})}return Array.from(ct.values())},[tn,Yn,F,Rs,d,a,$e]),be=y.useMemo(()=>Array.from(new Set(tn.map(xe=>/^STASH:(\d+)$/.exec(xe)).filter(xe=>!!xe).map(xe=>parseInt(xe[1],10)))).sort((xe,Fe)=>xe-Fe),[tn]),He=tn.includes("WORKING_TREE"),et=(He?1:0)+be.length,Dt=[...He?["Uncommitted changes"]:[],...be.map(xe=>`Stash ${xe+1}`)],$t=F.size,At=!vo&&!!Rs&&F.has(Rs),Ke=Rs?`Push ${Rs}`:"Push current branch",an=de.length===1?de[0].commitCount>1?`Push ${de[0].commitCount} commits on ${de[0].branchName}`:`Push ${de[0].targetSha.slice(0,7)} on ${de[0].branchName}`:`Push ${de.length} selected ranges`;y.useEffect(()=>{const xe=cn||lo;_t.current!==xe&&(_t.current=xe,Ut==null||Ut(xe))},[cn,lo,Ut]),y.useEffect(()=>{const xe=yn?is.length:null;Bt.current!==xe&&(Bt.current=xe,vt==null||vt(xe))},[is.length,yn,vt]),y.useEffect(()=>{const xe=yn&&Ce?(()=>{const Fe=is.findIndex(ct=>ct.commit.id===Ce);return Fe>=0?Fe:null})():null;nt.current!==xe&&(nt.current=xe,Ht==null||Ht(xe))},[Ce,is,yn,Ht]);const fn=y.useMemo(()=>{var ue,Oe,Ye,tt,it,ht;if(!yn)return null;const xe=yn,Fe=t.map(Nt=>Nt.name),ct=Fe.find(Nt=>Nt.toLowerCase()===xe),C=ct!=null?ct:Fe.find(Nt=>Nt.toLowerCase().startsWith(xe)),R=C!=null?C:Fe.find(Nt=>Nt.toLowerCase().includes(xe));if(!R)return null;const O=(ue=t.find(Nt=>Nt.name===R))!=null?ue:null;if(O!=null&&O.headSha)return O.headSha;const Y=(Oe=$e[R])!=null?Oe:[];return Y.length>0?(tt=(Ye=Y[0])==null?void 0:Ye.fullSha)!=null?tt:null:R===d&&(ht=(it=i[0])==null?void 0:it.fullSha)!=null?ht:null},[yn,t,$e,d,i]);y.useEffect(()=>{var C,E,R;if(!yn){if(te.current=It,H.current===null)return;H.current=null,wt==null||wt(null);return}if(It<=0||te.current===It)return;te.current=It;let xe;const Fe=Ce?is.findIndex(O=>O.commit.id===Ce):-1,ct=is.length>0?Fe<0?0:(Fe+Zt+is.length)%is.length:-1;xe=(R=(E=(C=is[ct])==null?void 0:C.commit.id)!=null?E:fn)!=null?R:null,H.current!==xe&&(H.current=xe,wt==null||wt(xe))},[is,yn,wt,fn,It,Zt]),y.useLayoutEffect(()=>{if(!Ce)return;const xe=Ue.current,Fe=Wo;if(!xe||!Fe)return;const ct=Ho();if(!ct)return;const C=xe.getBoundingClientRect(),E=Tn.current.zoom,R=E/la,O=Fe.x+ps/2,Y=Fe.y+xl+Ps/2,ue=C.left+C.width/2,Oe=C.top+C.height/2;Mo(ue-ct.x-O*R,Oe-ct.y-Y*R,E)},[Ce,It,Wo,Ho,Mo,Tn]);const Un=(qs=(Xs=pn==null?void 0:pn.width)!=null?Xs:(Os=Ue.current)==null?void 0:Os.clientWidth)!=null?qs:0,Wn=(Xo=(hi=pn==null?void 0:pn.height)!=null?hi:(fo=Ue.current)==null?void 0:fo.clientHeight)!=null?Xo:0,xn=Un>0&&Wn>0?wy(Un,Wn,Tn.current,{innerPaddingPx:kd}):null,xs=xn!=null?Sy(xn,Tn.current.zoom):null,co=xe=>{if(!xs)return!0;const{fromX:Fe,fromY:ct,toX:C,toY:E}=xe;return Aw(Fe,ct,C,E,xs,xe.fromFace,xe.toFace)};y.useLayoutEffect(()=>{var O;const xe=Ue.current;if(!xe||xe.clientWidth<=0||xe.clientHeight<=0)return;const Fe=xe.clientWidth,ct=xe.clientHeight;ot(Y=>(Y==null?void 0:Y.width)===Fe&&(Y==null?void 0:Y.height)===ct?Y:{width:Fe,height:ct});const C=wy(Fe,ct,Tn.current,{innerPaddingPx:kd});if(!C){un(Y=>Y===null?Y:null);return}const E=Sy(C,Tn.current.zoom),R=Nw(Lo,E,Si,Hn);for(const Y of Qn){const ue=To.get(Y.commit.visualId);if(!ue||((O=ys.get(ue))!=null?O:1)<=1)continue;(Gn.has(ue)||!dn.has(ue)&&!Kn.has(ue))&&R.add(Y.commit.visualId)}un(Y=>Tw(Y,R)?Y:R)},[ko,It,Ce,cn,Po,Gn,Kn,dn,To,ys,Qn,pn,Lo,Si,Hn]),y.useLayoutEffect(()=>{const xe=Ue.current;if(!xe)return;const Fe=()=>{const C=xe.clientWidth,E=xe.clientHeight;C<=0||E<=0||ot(R=>(R==null?void 0:R.width)===C&&(R==null?void 0:R.height)===E?R:{width:C,height:E})};Fe();const ct=new ResizeObserver(Fe);return ct.observe(xe),()=>ct.disconnect()},[cs.length]);const ki=Qn.filter(xe=>Js(xe)).length,Fo=ti.filter(xe=>co(xe)).length,Ji=go.filter(xe=>co(xe)).length,I=y.useCallback((xe,Fe)=>{if(jn.current){xe.preventDefault(),xe.stopPropagation();return}xe.stopPropagation();const ct=Fe.commit.id;if(xe.shiftKey?(bo(O=>O.includes(ct)?O.filter(Y=>Y!==ct):[...O,ct]),Ws(ct)):(bo(O=>O.includes(ct)?[]:[ct]),Ws(O=>O===ct?null:ct)),!(xe.metaKey||xe.ctrlKey||xe.detail>=2)||ct==="WORKING_TREE")return;const E=ct.length>=40?ct.slice(0,7):ct;let R=null;if(Fe.commit.branchName?(R=wo(Fe.commit.branchName,ct,E),R||(R=Ts(Fe.commit.branchName))):R=So(ct,E),R&&ie){ie(R.path);return}h==null||h({commitSha:ct})},[So,wo,Ts,h,ie]),J=y.useCallback((xe,Fe)=>{var Y,ue,Oe,Ye,tt;if(xe.button!==0)return;const ct=xe.target;if(ct!=null&&ct.closest("button, a, input, textarea, select"))return;xe.stopPropagation(),xe.preventDefault(),jn.current=!1,xe.currentTarget.setPointerCapture(xe.pointerId);const C=(Y=ut[Fe.commit.visualId])!=null?Y:ut[Fe.commit.id];An.current={nodeId:Fe.commit.visualId,startX:xe.clientX,startY:xe.clientY,baseX:(ue=C==null?void 0:C.x)!=null?ue:Fe.x,baseY:(Oe=C==null?void 0:C.y)!=null?Oe:Fe.y,moved:!1,pendingX:(Ye=C==null?void 0:C.x)!=null?Ye:Fe.x,pendingY:(tt=C==null?void 0:C.y)!=null?tt:Fe.y};const E=()=>{Mn.current=null;const it=An.current;it&&Ft(ht=>({...ht,[it.nodeId]:{x:it.pendingX,y:it.pendingY}}))},R=it=>{const ht=An.current;if(!ht)return;const Nt=Tn.current.zoom/la,qt=Nt>0?1/Nt:1,bt=(it.clientX-ht.startX)*qt,ft=(it.clientY-ht.startY)*qt;(Math.abs(bt)>2||Math.abs(ft)>2)&&(ht.moved=!0),ht.moved&&(jn.current=!0),ht.pendingX=ht.baseX+bt,ht.pendingY=ht.baseY+ft,Mn.current==null&&(Mn.current=window.requestAnimationFrame(E))},O=()=>{window.removeEventListener("pointermove",R),window.removeEventListener("pointerup",O),window.removeEventListener("pointercancel",O),Mn.current!=null&&(window.cancelAnimationFrame(Mn.current),Mn.current=null,E());try{xe.currentTarget.releasePointerCapture(xe.pointerId)}catch{}const it=An.current;An.current=null,it&&window.setTimeout(()=>{jn.current=!1},0)};window.addEventListener("pointermove",R),window.addEventListener("pointerup",O),window.addEventListener("pointercancel",O)},[ut]),se=y.useCallback(async()=>{if(!ce)return;await ce(Be)&&(Pe(!1),gt(""))},[ce,Be]),ye=y.useCallback(async()=>{V&&(await V({branchNames:[],discardUncommittedChanges:He,stashIndices:be}),Ot(!1),bo([]),Ws(null))},[V,He,be]),st=y.useCallback(async()=>{var Fe;const xe=jt.trim();if(xe){if(Vt==="new-root"){if(!N)return;await N(xe)}else{if(!pe)return;const ct=tn.length===1?tn[0]:(Fe=Ee==null?void 0:Ee.headSha)!=null?Fe:null;if(!ct||!(ct==="WORKING_TREE"||ct.startsWith("STASH:")||ct===(Ee==null?void 0:Ee.headSha)))return;await pe(ct,xe)}Xe(!1),Rt(""),Ge("from-selected-node"),bo([]),Ws(null)}},[Ee==null?void 0:Ee.headSha,Vt,jt,pe,N,tn]),xt=!!(Ee!=null&&Ee.headSha),pt=tn.length===0&&xt,Xt=tn.length===1&&(tn[0]==="WORKING_TREE"||tn[0].startsWith("STASH:"))||pt,ms=!!N;return y.useEffect(()=>{if(qe){if(!Xt&&!pt&&ms){Ge("new-root");return}(Xt||pt)&&Ge("from-selected-node")}},[ms,pt,qe,Xt]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[l.jsx($w,{isOpen:re,onClose:()=>fe==null?void 0:fe(),visibleBounds:xs,renderedNodeCount:ki,totalNodeCount:Qn.length,renderedMergeConnectorCount:Fo,totalMergeConnectorCount:ti.length,renderedConnectorCount:Ji,totalConnectorCount:go.length,mapGridCullViewportInsetScreenPx:Sw,debugRows:Ds.debugRows,branchDebugRows:Ds.branchDebugRows,connectorDecisions:Ns}),cs.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(zw,{scrollContainerRef:Ue,mapPadHostRef:mt,transformLayerRef:lt,isMarqueeSelecting:lo,contentWidth:ei,contentHeight:di,isCameraMoving:cn,onWheel:_o,onMouseDown:si,onNodePointerDown:J,labelTopPx:Hn,inverseZoomStyle:zs,displayZoom:Vs,iconScaleStyle:wn,selectedVisibleCommitShas:tn,normalizedSearchQuery:yn,matchingNodeIds:Ms,focusedNode:Wo,renderNodes:Qn,shouldRenderNode:Js,manuallyOpenedClumps:Gn,manuallyClosedClumps:Kn,defaultCollapsedClumps:dn,leadByClusterKey:Uo,clusterKeyByCommitId:To,clusterCounts:ys,commitIdsWithRenderedAncestry:Pn,nodeWarnings:Eo,connectorParentShas:Zs,branchStartShas:us,branchOffNodeShas:ds,crossBranchOutgoingShas:Ii,branchBaseCommitByName:Vo,branchStartAccentClass:Ci,connectorParentAccentClass:eo,commitCornerRadiusPx:yo,lineStrokeWidth:fi,pointFormatter:Zi,connectors:go,mergeConnectors:ti,cullConnectorPath:co,flushCameraReactTick:js,setManuallyOpenedClumps:gs,setManuallyClosedClumps:Dn,onCommitCardClick:I,unpushedCommitShasSetByBranch:Ys,checkedOutHeadSha:Bs}),hs&&lo?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:hs.left,top:hs.top,width:hs.width,height:hs.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Ow,{selectedVisibleCommitShas:tn,commitInProgress:$,commitDisabled:oe,stageInProgress:K,stashInProgress:Re,stashDisabled:Q,pushInProgress:D,hasUncommittedChanges:xo,deleteInProgress:P,createBranchFromNodeInProgress:ne,onCommitLocalChanges:ce,onStageAllChanges:G?()=>void G():void 0,onStashLocalChanges:ke,onPushCurrentBranch:z,onPushAllBranches:M,onPushCommitTargets:L,onDeleteSelection:V,onMergeRefsIntoBranch:j,selectedPushTargets:de,selectedPushLabel:an,canPushCurrentBranch:At,pushCurrentBranchLabel:Ke,pushableRemoteBranchCount:$t,deletableSelectionCount:et,selectedCommitTargetOption:T,mergeInProgress:k,mergeTargetCommitSha:zo,setMergeTargetCommitSha:Ws,worktrees:W,currentRepoPath:U,worktreeMenuOpen:_e,setWorktreeMenuOpen:we,onSwitchToWorktree:ie,onRemoveWorktree:Z,removeWorktreeInProgress:ae,setCommitDialogOpen:Pe,setDeleteConfirmOpen:Ot,setNewBranchDialogOpen:Xe}),l.jsx(Iw,{commitDialogOpen:Qe,commitMessageDraft:Be,onCommitMessageDraftChange:gt,onCommitDialogClose:()=>Pe(!1),onCommitConfirm:()=>void se(),commitInProgress:$,deleteConfirmOpen:Ve,deleteSelectionItems:Dt,onDeleteConfirmClose:()=>Ot(!1),onDeleteConfirm:()=>void ye(),deleteInProgress:P,deletableSelectionCount:et,newBranchDialogOpen:qe,newBranchName:jt,newBranchCreateMode:Vt,onNewBranchNameChange:Rt,onNewBranchCreateModeChange:Ge,onNewBranchDialogClose:()=>Xe(!1),onNewBranchConfirm:()=>void st(),selectedCommitCanCreateBranch:Xt,currentCheckedOutCommitCanCreateBranch:pt,createBranchFromNodeInProgress:ne})]})}function Vw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:j=1,gridFocusSha:k=null,onGridSearchResultCountChange:M,onGridSearchResultIndexChange:z,onGridSearchFocusChange:L,view:D="time",isLoading:V=!1,scrollRequest:P,focusedErrorBranch:W,checkedOutRef:U=null,mapTopInsetPx:Z=0,onMergeRefsIntoBranch:ae,mergeInProgress:ie=!1,onPushAllBranches:ke,onPushCurrentBranch:Re,onPushCommitTargets:Q,pushInProgress:ce=!1,onDeleteSelection:$,deleteInProgress:oe=!1,worktrees:G=[],currentRepoPath:K,onRemoveWorktree:pe,removeWorktreeInProgress:N=!1,onSwitchToWorktree:ne,onStashLocalChanges:re,stashInProgress:fe=!1,stashDisabled:Ae=!1,onCommitLocalChanges:$e,commitInProgress:Ne=!1,commitDisabled:at=!1,onStageAllChanges:rt,stageInProgress:It=!1,onCreateBranchFromNode:Zt,onCreateRootBranch:Ce,createBranchFromNodeInProgress:Ee=!1,onMoveNodeBackToBranch:vt,isDebugOpen:Ht=!1,onDebugClose:wt,orientation:Ut="horizontal",onInteractionChange:q,manuallyOpenedClumps:Me,manuallyClosedClumps:Je,setManuallyOpenedClumps:Ze,setManuallyClosedClumps:dt,layoutModel:Ue}){const mt=new Set(u.map(H=>H.branchName)),lt=14*864e5,_t=Date.now();function Bt(H){return mt.has(H.name)||_t-new Date(H.lastCommitDate).getTime()<=lt}const nt=t.filter(H=>H.status==="stale"&&Bt(H)).sort((H,te)=>new Date(te.lastCommitDate).getTime()-new Date(H.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:D==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(ky,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,onGridSearchResultCountChange:M,onGridSearchResultIndexChange:z,onGridSearchFocusChange:L,staleBranches:nt,isLoading:V,scrollRequest:P,focusedErrorBranch:W,checkedOutRef:U,mapTopInsetPx:Z,onMergeRefsIntoBranch:ae,mergeInProgress:ie,onPushAllBranches:ke,onPushCurrentBranch:Re,onPushCommitTargets:Q,pushInProgress:ce,onDeleteSelection:$,deleteInProgress:oe,worktrees:G,currentRepoPath:K,onRemoveWorktree:pe,removeWorktreeInProgress:N,onSwitchToWorktree:ne,onStashLocalChanges:re,stashInProgress:fe,stashDisabled:Ae,onCommitLocalChanges:$e,commitInProgress:Ne,commitDisabled:at,onStageAllChanges:rt,stageInProgress:It,onCreateBranchFromNode:Zt,onCreateRootBranch:Ce,createBranchFromNodeInProgress:Ee,onMoveNodeBackToBranch:vt,isDebugOpen:Ht,onDebugClose:wt,orientation:Ut,onInteractionChange:q,manuallyOpenedClumps:Me,manuallyClosedClumps:Je,setManuallyOpenedClumps:Ze,setManuallyClosedClumps:dt,layoutModel:Ue})}):D==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(ky,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,checkedOutRef:U,onGridSearchResultCountChange:M,onGridSearchResultIndexChange:z,onGridSearchFocusChange:L,onInteractionChange:q,manuallyOpenedClumps:Me,manuallyClosedClumps:Je,setManuallyOpenedClumps:Ze,setManuallyClosedClumps:dt,layoutModel:Ue,isDebugOpen:Ht,onDebugClose:wt,orientation:Ut})}):null})}const Sr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Yw(t,n,i,a){if(!t)return null;const c=d=>Sr(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(g=>c(g.fullSha)||c(g.sha)))return d;return null}function Ww(t,n,i,a,c,u){var ie,ke,Re,Q,ce,$;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(ke=(ie=i[0])==null?void 0:ie.fullSha)!=null?ke:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(oe=>({name:oe.name,headSha:oe.headSha,isDefault:!1}))],x=d?_.filter(oe=>Sr(oe.headSha,d)):[],b=Yw(d,i,a,u),w=b?_.find(oe=>oe.name===b):void 0,S=(Q=(Re=x.find(oe=>oe.isDefault))!=null?Re:x[0])!=null?Q:w,j=!!(S&&d&&Sr(S.headSha,d)),k=S&&!S.isDefault?n.find(oe=>oe.name===S.name):void 0,M=(()=>{var G;if(!d)return null;const oe=i.find(K=>Sr(K.fullSha,d)||Sr(K.sha,d));if(oe!=null&&oe.date)return oe.date;if(k){const K=((G=a[k.name])!=null?G:[]).find(pe=>Sr(pe.fullSha,d)||Sr(pe.sha,d));if(K!=null&&K.date)return K.date}return null})(),z=M?new Date(M).getTime():Number.NaN,L=Date.now(),D=Number.isFinite(z)?Math.max(L,z+1+t.index):L+t.index,V=new Date(D).toISOString(),P=t.message.trim(),W={fullSha:h,sha:p,parentSha:d,message:P||p,author:"You",date:V,kind:"stash"},U={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(ce=k==null?void 0:k.name)!=null?ce:u,message:P||p,author:"You",date:V,kind:"stash"};if(j&&(S!=null&&S.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,U]};if(j&&k)return{branches:n.map(G=>G.name===k.name?{...G,commitsAhead:G.commitsAhead+1,unpushedCommits:G.unpushedCommits+1,lastCommitDate:V,headSha:h}:G),directCommits:i,branchCommitPreviews:{...a,[k.name]:[W,...a[k.name]||[]]},branchUniqueAheadCounts:{...c,[k.name]:Math.max(0,($=Object.prototype.hasOwnProperty.call(c,k.name)?c[k.name]:k.commitsAhead)!=null?$:0)+1}};const Z=`*Stash:${t.index}`;return{branches:[{name:Z,commitsAhead:1,commitsBehind:0,lastCommitDate:V,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(S==null?void 0:S.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[Z]:[W]},branchUniqueAheadCounts:{...c,[Z]:1}}}function qx(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=Ww(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function Fw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:g,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var W,U,Z,ae;const j=qx(g,t,i,u,h,c);let k=j.branches,M=j.directCommits,z=j.branchCommitPreviews,L=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ie=p.headSha||p.parentSha||null,ke=(U=(W=M[0])==null?void 0:W.fullSha)!=null?U:null,Re=(Ne,at)=>!Ne||!at?!1:Ne===at||Ne.startsWith(at)||at.startsWith(Ne),Q=[{name:c,headSha:ke!=null?ke:"",isDefault:!0},...k.map(Ne=>({name:Ne.name,headSha:Ne.headSha,isDefault:!1}))],ce=p.branchName?Q.find(Ne=>Ne.name===p.branchName):void 0,$=ie?Q.filter(Ne=>Re(Ne.headSha,ie)):[],oe=(Z=ce!=null?ce:$.find(Ne=>Ne.isDefault))!=null?Z:$[0],G=!!(oe&&ie&&Re(oe.headSha,ie)),K=oe&&!oe.isDefault?k.find(Ne=>Ne.name===oe.name):void 0,pe=(()=>{var at;if(!ie)return null;const Ne=M.find(rt=>Re(rt.fullSha,ie)||Re(rt.sha,ie));if(Ne!=null&&Ne.date)return Ne.date;if(K){const rt=((at=z[K.name])!=null?at:[]).find(It=>Re(It.fullSha,ie)||Re(It.sha,ie));if(rt!=null&&rt.date)return rt.date}return null})(),N=pe?new Date(pe).getTime():Number.NaN,ne=Date.now(),re=Number.isFinite(N)?Math.max(ne,N+1):ne,fe=new Date(re).toISOString(),Ae={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,message:"Local uncommitted changes",author:"You",date:fe,kind:"uncommitted"},$e={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:fe,kind:"uncommitted"};if(G&&(oe!=null&&oe.isDefault))M=[...M,$e];else if(G&&K)k=k.map(Ne=>Ne.name===K.name?{...Ne,commitsAhead:Ne.commitsAhead+1,unpushedCommits:Ne.unpushedCommits+1,lastCommitDate:fe,headSha:"WORKING_TREE"}:Ne),z={...z,[K.name]:[Ae,...z[K.name]||[]]},L={...L,[K.name]:Math.max(0,(ae=Object.prototype.hasOwnProperty.call(L,K.name)?L[K.name]:K.commitsAhead)!=null?ae:0)+1};else{const Ne={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:fe,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:ie!=null?ie:void 0,parentBranch:(oe==null?void 0:oe.name)||p.branchName||c};k=[Ne,...k],z={...z,[Ne.name]:[Ae]},L={...L,[Ne.name]:1}}}const D={...d};D[c]=null;const V=cp(k,c,z,D),P=jc({lanes:V,branches:k,mergeNodes:n,directCommits:M,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:z,branchParentByName:D,branchUniqueAheadCounts:L,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:k,enrichedBranchCommitPreviews:z,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:M,sharedGridLayoutModel:P}}function jy(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function My(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ty(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Em({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z}){var N,ne;if(_.has(t)||!a.get(t))return null;const D=(N=u.get(t))!=null?N:[],V=D.length>0,P=y.useMemo(()=>{var re;return[...(re=c[t])!=null?re:[]]},[c,t]),W=x&&P.length>0,U=x,Z=V||W,ae=h.has(t),ie=U?P:[],ke=ae&&ie.length>0,Re=g===t,Q=new Set(_);Q.add(t);const ce="top-[-0.2rem] h-4.5 w-[10px]",$="rounded-bl-[7px]",oe="left-[0.65rem]",G=new Map,K=[];for(const re of D){const fe=d.get(re);if(fe){const Ae=ie.findIndex($e=>vi($e.fullSha,fe)||vi($e.sha,fe));if(Ae>=0){const $e=(ne=G.get(Ae))!=null?ne:[];$e.push(re),G.set(Ae,$e);continue}}K.push(re)}const pe=y.useMemo(()=>{if(!x||ie.length===0)return[];const re=[];let fe=[],Ae=null;const $e=()=>{if(fe.length===0)return;const Ne=fe[fe.length-1],at=`sidebar-single-${t}-${Ne.fullSha}`;re.push({key:Ae!=null?Ae:at,commits:fe,count:fe.length,lead:Ne}),fe=[],Ae=null};return ie.forEach(Ne=>{var rt;const at=(rt=S.get(`${t}:${Ne.fullSha}`))!=null?rt:null;if(fe.length===0){fe=[Ne],Ae=at;return}if(at===Ae){fe.push(Ne);return}$e(),fe=[Ne],Ae=at}),$e(),re},[t,x,ie,S]);return l.jsxs("li",{className:kn("relative",n>0?"pl-4":"pl-0",n===0&&!i?ae?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:kn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",$,oe,ce)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:kn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",oe)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{Z&&p(t),z==null||z(t)},className:kn("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",Re?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[Z?l.jsx("span",{className:kn("inline-block text-[10px] text-muted-foreground transition-transform",ae?"rotate-90":""),children:"▶"}):null,l.jsx("span",{className:"min-w-0 break-words",children:l.jsx("span",{className:kn(Re?"font-medium text-foreground":"font-normal"),children:t})})]})}),ke?l.jsx("ul",{className:"relative space-y-1 pl-4",children:pe.map(re=>{const fe=re.count>1&&!j(re.key);return(fe?[re.lead]:re.commits).map($e=>{var rt;const Ne=ie.findIndex(It=>It.fullSha===$e.fullSha),at=b($e.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>M==null?void 0:M($e.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:$e.message,children:[l.jsx("span",{className:"block truncate",children:$e.message}),at.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:at.map(It=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:It})]},`${$e.fullSha}:${It}`))}):null]}),re.count>1&&$e.fullSha===re.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${re.lead.fullSha}`,onClick:()=>k(re.key,`${t}:${re.lead.fullSha}`),className:kn("shrink-0 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",fe?"":"min-w-[2ch] text-center"),children:fe?`+${Math.max(1,re.count-1)}`:"−"}):null]}),(rt=G.get(Ne))!=null&&rt.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:G.get(Ne).map((It,Zt,Ce)=>l.jsx(Em,{branchName:It,depth:n+1,isLast:Zt===Ce.length-1&&K.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Q,showCommits:x,getMergeTargetLabels:b,sourceBranchName:It,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z},It))}):null]},`${t}:${$e.fullSha}`)})})}):null,V&&ae&&K.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:K.map((re,fe)=>l.jsx(Em,{branchName:re,depth:n+1,isLast:fe===K.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Q,showCommits:x,getMergeTargetLabels:b,sourceBranchName:re,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z},re))}):null]})}function Xw({open:t}){return t?l.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-4 w-4 shrink-0 text-muted-foreground transition-colors",children:[l.jsx("path",{d:"M2.5 7a2 2 0 0 1 2-2h3.1c.44 0 .86.18 1.18.49l.84.81h5.88a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7Z",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),l.jsx("path",{d:"M4.25 6H8l.84.81",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]}):l.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-4 w-4 shrink-0 text-muted-foreground transition-colors",children:[l.jsx("path",{d:"M2.5 7a2 2 0 0 1 2-2h3.1c.44 0 .86.18 1.18.49l.84.81h5.88a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7Z",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),l.jsx("path",{d:"M6.1 5H8l.84.81",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function qw({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,projectLoading:c=!1,projectError:u=null,branches:d,defaultBranch:h,checkedOutRef:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,setManuallyOpenedClumps:x,setManuallyClosedClumps:b,gridLayoutModel:w,onSelectCommit:S,onSelectBranch:j,showCommits:k,onToggleShowCommits:M,className:z,style:L,collapsed:D=!1}){var Zt;const V=y.useRef(null),P=y.useRef(null),[W,U]=y.useState(()=>new Set),[Z,ae]=y.useState(()=>new Set),[ie,ke]=y.useState(()=>new Set),Re=g!=null?g:Z,Q=_!=null?_:ie,ce=x!=null?x:ae,$=b!=null?b:ke,[oe,G]=y.useState(null),[K,pe]=y.useState(null),N=y.useMemo(()=>d.some(Ee=>Ee.name===h)?d:[{name:h,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...d],[d,h]),ne=y.useMemo(()=>jy(N,h),[N,h]),re=y.useMemo(()=>My(N,h,ne),[N,h,ne]),[fe,Ae]=y.useState(()=>Ty(re,ne,p,h));y.useEffect(()=>{Ae(Ce=>{const Ee=Ty(re,ne,p,h),vt=new Set(Ce);for(const Ht of Ee)vt.add(Ht);return vt})},[re,ne,p,h]),y.useEffect(()=>{U(Ce=>{const Ee=new Set(Ce);for(const vt of t)Ee.add(vt.path);return Ee})},[t]);const $e=(Zt=w==null?void 0:w.defaultCollapsedClumps)!=null?Zt:new Set,Ne=Ce=>Re.has(Ce)||!$e.has(Ce)&&!Q.has(Ce),at=(Ce,Ee)=>{const vt=V.current,Ht=P.current;if(vt&&Ht){const wt=`[data-clump-toggle-id="${Ee}"]`,Ut=vt.querySelector(wt);if(Ut){const q=Ut.getBoundingClientRect().top-Ht.getBoundingClientRect().top;pe({id:Ee,topWithinScrollBody:q})}else pe(null)}else pe(null);G(Ee),ce(wt=>{const Ut=new Set(wt),q=Ne(Ce);return $(Me=>{const Je=new Set(Me);return q?(Ut.delete(Ce),Je.add(Ce)):(Je.delete(Ce),Ut.add(Ce)),Je}),Ut})};y.useLayoutEffect(()=>{if(!oe)return;const Ce=V.current,Ee=P.current;if(!Ce||!Ee)return;const vt=`[data-clump-toggle-id="${oe}"]`,Ht=Ce.querySelector(vt);if(Ht){if((K==null?void 0:K.id)===oe){const Ut=Ht.getBoundingClientRect().top-Ee.getBoundingClientRect().top-K.topWithinScrollBody;Number.isFinite(Ut)&&Ut!==0&&(Ee.scrollTop+=Ut)}Ht.focus({preventScroll:!0}),G(null),pe(null)}},[Re,Q,oe,K]);const rt=Ce=>{Ae(Ee=>{const vt=new Set(Ee);return vt.has(Ce)?vt.delete(Ce):vt.add(Ce),vt})},It=y.useMemo(()=>{var Ee,vt,Ht,wt,Ut,q,Me,Je,Ze,dt;const Ce=new Map;for(const Ue of t){const mt=Ue.path===n,lt=Fw({branches:Ue.branches,mergeNodes:Ue.mergeNodes,directCommits:Ue.directCommits,unpushedDirectCommits:Ue.unpushedDirectCommits,defaultBranch:Ue.defaultBranch,branchCommitPreviews:Ue.branchCommitPreviews,branchUniqueAheadCounts:Ue.branchUniqueAheadCounts,checkedOutRef:Ue.checkedOutRef,stashes:Ue.stashes,manuallyOpenedClumps:mt?Re:new Set,manuallyClosedClumps:mt?Q:new Set}),_t=lt.enrichedBranches.some(qe=>qe.name===Ue.defaultBranch)?lt.enrichedBranches:[{name:Ue.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...lt.enrichedBranches],Bt=new Map(lt.sharedGridLayoutModel.nodes.map(qe=>[qe.commit.visualId,qe.row])),nt={};for(const qe of lt.sharedGridLayoutModel.allCommits){const Xe=(Ee=nt[qe.branchName])!=null?Ee:[];Xe.push({fullSha:qe.id,sha:qe.id.slice(0,7),parentSha:(vt=qe.parentSha)!=null?vt:null,message:qe.message,author:qe.author,date:qe.date,kind:(Ht=qe.kind)!=null?Ht:"commit"}),nt[qe.branchName]=Xe}for(const qe of Object.keys(nt))nt[qe]=nt[qe].sort((Xe,jt)=>{var Tt,yt;const Rt=new Date(Xe.date).getTime(),Vt=new Date(jt.date).getTime();if(Rt!==Vt)return Rt-Vt;const Ge=(Tt=Bt.get(`${qe}:${Xe.fullSha}`))!=null?Tt:Number.MAX_SAFE_INTEGER,Lt=(yt=Bt.get(`${qe}:${jt.fullSha}`))!=null?yt:Number.MAX_SAFE_INTEGER;return Ge!==Lt?Ge-Lt:Xe.fullSha.localeCompare(jt.fullSha)});const H=(wt=lt.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?wt:new Map,te=(qe,Xe)=>{const jt=H.get(Xe);if(!jt)return[];for(const[Rt,Vt]of jt.entries())if(vi(qe,Rt))return Array.from(Vt).sort();return[]},_e=jy(_t,Ue.defaultBranch),we=My(_t,Ue.defaultBranch,_e),Qe=new Map(_t.map(qe=>[qe.name,qe])),Pe=new Map;for(const qe of _t){const Xe=(q=(Ut=lt.sharedGridLayoutModel.firstBranchCommitByName.get(qe.name))==null?void 0:Ut.parentSha)!=null?q:null,jt=Xe!=null?Xe:null;Pe.set(qe.name,jt)}const Be=(Me=lt.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Me:new Set,gt=mt?Re:new Set,Ve=mt?Q:new Set,Ot=qe=>gt.has(qe)||!Be.has(qe)&&!Ve.has(qe);Ce.set(Ue.path,{rootBranchNames:we,branchByName:Qe,branchCommitPreviewsFromLayout:nt,childNamesByParent:_e,branchAnchorShaByName:Pe,checkedOutBranchName:(Ze=(Je=Ue.checkedOutRef)==null?void 0:Je.branchName)!=null?Ze:null,clusterKeyByCommitId:(dt=lt.sharedGridLayoutModel.clusterKeyByCommitId)!=null?dt:new Map,getMergeTargetLabels:te,isGridClusterOpen:Ot})}return Ce},[n,Q,Re,t]);return l.jsxs("aside",{ref:V,"aria-label":"Dense branch sidebar",className:kn("pointer-events-auto relative h-full overflow-hidden",z),style:L,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:l.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:c,className:"window-no-drag shrink-0 rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Add Repo"}),l.jsx("button",{type:"button",onClick:M,className:"window-no-drag shrink-0 rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent",children:k?"Hide Commits":"Show Commits"})]})}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[u&&l.jsx("div",{className:"px-2.5 pb-3",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:u})}),l.jsx("div",{ref:P,className:kn("min-h-0 flex-1 space-y-8 overflow-y-auto px-2.5 pr-4",D?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(Ce=>{var q;const Ee=Ce.path===n,vt=W.has(Ce.path),Ht=(q=Ce.treeLoaded)!=null?q:Ce.branches.length>0,wt=It.get(Ce.path),Ut=Ee?fe:new Set(wt?Array.from(wt.branchByName.keys()):[]);return l.jsx("div",{className:kn("relative z-0",vt&&wt?"mb-5":"mb-1"),children:l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:kn("sticky top-0 z-20 flex w-full items-center gap-2 rounded-lg bg-[#FAFAF9] px-0 py-1 transition-colors hover:bg-accent",Ee?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[l.jsx("button",{type:"button",onClick:()=>{U(Me=>{const Je=new Set(Me);return Je.has(Ce.path)?Je.delete(Ce.path):Je.add(Ce.path),Je})},"aria-expanded":vt,"aria-label":`${vt?"Collapse":"Expand"} ${Ce.name}`,className:"flex h-4 w-4 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(Xw,{open:vt})}),l.jsx("button",{type:"button",onClick:()=>{i(Ce.path)},className:kn("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors",Ee?"font-semibold text-primary":"font-medium text-muted-foreground"),children:Ce.name})]}),vt?Ht&&wt?l.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:wt.rootBranchNames.map((Me,Je)=>l.jsx(Em,{branchName:Me,depth:0,isLast:Je===wt.rootBranchNames.length-1,branchByName:wt.branchByName,branchCommitPreviews:wt.branchCommitPreviewsFromLayout,childNamesByParent:wt.childNamesByParent,branchAnchorShaByName:wt.branchAnchorShaByName,expandedBranchNames:Ut,onToggleBranch:rt,checkedOutBranchName:wt.checkedOutBranchName,ancestors:new Set,showCommits:k,getMergeTargetLabels:wt.getMergeTargetLabels,sourceBranchName:Me,clusterKeyByCommitId:wt.clusterKeyByCommitId,isGridClusterOpen:wt.isGridClusterOpen,onToggleGridCluster:at,onSelectCommit:async Ze=>{Ee||await i(Ce.path),S==null||S(Ze)},onSelectBranch:async Ze=>{Ee||await i(Ce.path),j==null||j(Ze)}},`${Ce.path}:${Me}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},Ce.path)})})]})]})}function Gw({orientation:t,onOrientationChange:n}){return l.jsxs("div",{className:"flex shrink-0 rounded-full border border-border/60 bg-muted/20 p-0.5",role:"radiogroup","aria-label":"Commit map layout",children:[l.jsx("button",{type:"button",role:"radio","aria-checked":t==="horizontal",tabIndex:0,onClick:()=>n("horizontal"),onKeyDown:i=>{(i.key==="ArrowRight"||i.key==="ArrowDown")&&(i.preventDefault(),n("vertical"))},className:kn("rounded-full px-2.5 h-7 text-[11px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",t==="horizontal"?"border border-border/60 bg-card text-foreground":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),l.jsx("button",{type:"button",role:"radio","aria-checked":t==="vertical",tabIndex:0,onClick:()=>n("vertical"),onKeyDown:i=>{(i.key==="ArrowLeft"||i.key==="ArrowUp")&&(i.preventDefault(),n("horizontal"))},className:kn("rounded-full px-2.5 h-7 text-[11px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",t==="vertical"?"border border-border/60 bg-card text-foreground":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]})}function Kw({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){return l.jsxs("div",{className:"window-no-drag flex h-7 min-w-64 flex-1 max-w-[42rem] items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(lw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{value:t,onChange:u=>n(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),c(1))},placeholder:"Search",className:"w-full bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(nw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Hx,{className:"h-4 w-4 shrink-0"})})]}):null]})}const Qw="git-visualizer",Ey="git-visualizer:projects",Ay=12,Dy=1400,Zw=180,Ny="git-visualizer:sidebar-width",Ry="git-visualizer:sidebar-collapsed",By=432,Ly=280,zy=640;function il(t){return t==="/"?t:t.replace(/\/+$/,"")}function Oy(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Jw(t){return md(t)===Qw}function eS(){var co,ki,Fo,Ji;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,g]=y.useState(!1),[_,x]=y.useState([]),[b,w]=y.useState([]),[S,j]=y.useState([]),[k,M]=y.useState([]),[z,L]=y.useState({}),[D,V]=y.useState([]),[P,W]=y.useState("main"),[U,Z]=y.useState(null),[ae,ie]=y.useState([]),[ke,Re]=y.useState(!1),[Q,ce]=y.useState(""),[$,oe]=y.useState(0),[G,K]=y.useState(1),[pe,N]=y.useState(()=>new Set),[ne,re]=y.useState(()=>new Set),[fe,Ae]=y.useState(null),[$e,Ne]=y.useState(null),[at,rt]=y.useState(null),[It,Zt]=y.useState(!1),[Ce,Ee]=y.useState(!1),[vt,Ht]=y.useState(!1),[wt,Ut]=y.useState(null),[q,Me]=y.useState(!1),[Je,Ze]=y.useState(!1),[dt,Ue]=y.useState("active"),[mt,lt]=y.useState(null),[_t,Bt]=y.useState(null),[nt,H]=y.useState(!1),[te,_e]=y.useState(null),[we,Qe]=y.useState(!1),[Pe,Be]=y.useState(null),[gt,Ve]=y.useState(null),[Ot,qe]=y.useState(!1),[Xe,jt]=y.useState(!1),[Rt,Vt]=y.useState(!1),[Ge,Lt]=y.useState(!1),[Tt,yt]=y.useState({}),[ln,ut]=y.useState({}),[Ft,jn]=y.useState({}),[An,Mn]=y.useState({}),[Gn,Kn]=y.useState({}),[gs,Dn]=y.useState([]),[Ln,un]=y.useState(!1),[pn,ot]=y.useState(!1),[cn,ko]=y.useState(!1),[Po,Tn]=y.useState(!1),[jo,Ho]=y.useState(!1),[js,Mo]=y.useState("horizontal"),[_o,Us]=y.useState(!1),[zn,wi]=y.useState(By),[Ls,Ds]=y.useState(!1),[cs,To]=y.useState({dragging:!1,lastEvent:"idle"}),Uo=y.useRef(null),ys=y.useRef(0),is=y.useRef(0),Ms=y.useRef(null),yn=y.useRef(By),On=y.useRef(null),dn=y.useRef(null),Qn=Jw(t)||!0,Qi=y.useRef(!1),ei=y.useRef(!1),di=y.useRef(new Set),go=y.useRef([]),ti=y.useRef([]),Ns=y.useRef(null),Eo=y.useMemo(()=>c.map(I=>{var J,se,ye,st,xt,pt,Xt,ms,Zn,uo,Nn,Qt,nn,hn,Es,Os,Xs,qs,fo,hi,Xo,xe,Fe,ct,C,E,R,O;return{...I,...(J=d[I.path])!=null?J:{},branches:(ye=(se=d[I.path])==null?void 0:se.branches)!=null?ye:[],mergeNodes:(xt=(st=d[I.path])==null?void 0:st.mergeNodes)!=null?xt:[],directCommits:(Xt=(pt=d[I.path])==null?void 0:pt.directCommits)!=null?Xt:[],unpushedDirectCommits:(Zn=(ms=d[I.path])==null?void 0:ms.unpushedDirectCommits)!=null?Zn:[],unpushedCommitShasByBranch:(Nn=(uo=d[I.path])==null?void 0:uo.unpushedCommitShasByBranch)!=null?Nn:{},checkedOutRef:(nn=(Qt=d[I.path])==null?void 0:Qt.checkedOutRef)!=null?nn:null,worktrees:(Es=(hn=d[I.path])==null?void 0:hn.worktrees)!=null?Es:[],stashes:(Xs=(Os=d[I.path])==null?void 0:Os.stashes)!=null?Xs:[],branchCommitPreviews:(fo=(qs=d[I.path])==null?void 0:qs.branchCommitPreviews)!=null?fo:{},laneByBranch:(Xo=(hi=d[I.path])==null?void 0:hi.laneByBranch)!=null?Xo:{},branchUniqueAheadCounts:(Fe=(xe=d[I.path])==null?void 0:xe.branchUniqueAheadCounts)!=null?Fe:{},defaultBranch:(E=(C=(ct=d[I.path])==null?void 0:ct.defaultBranch)!=null?C:I.branchName)!=null?E:"main",treeLoaded:(O=(R=d[I.path])==null?void 0:R.loaded)!=null?O:!1}}),[c,d]);y.useEffect(()=>{try{const I=localStorage.getItem(Ey);if(!I)return;const J=JSON.parse(I);if(!Array.isArray(J))return;const se=J.filter(ye=>typeof ye=="object"&&ye!==null&&typeof ye.path=="string"&&typeof ye.name=="string"&&typeof ye.lastOpenedAt=="number");u(se.slice(0,Ay))}catch{u([])}},[]),y.useEffect(()=>{ei.current||t||c.length!==0&&(ei.current=!0,wn(c[0].path))},[c,t]);const Pn=y.useMemo(()=>b.reduce((I,J)=>(I[J.targetCommitSha]=J.targetBranch,I),{}),[b]);y.useEffect(()=>{t&&h(I=>{var J,se;return{...I,[t]:{path:t,name:i||md(t),branches:_,mergeNodes:b,directCommits:S,unpushedDirectCommits:k,mergeTargetBranchByCommitSha:b.reduce((ye,st)=>(ye[st.targetCommitSha]=st.targetBranch,ye),{}),unpushedCommitShasByBranch:z,checkedOutRef:U,worktrees:ae,stashes:gs,branchCommitPreviews:ln,branchParentByName:Ft,laneByBranch:An,branchUniqueAheadCounts:Gn,defaultBranch:P,loaded:!0,cacheSchemaVersion:(se=(J=I[t])==null?void 0:J.cacheSchemaVersion)!=null?se:1,updatedAtMs:Date.now()}}})},[t,i,_,b,S,k,Pn,z,U,ae,gs,ln,Ft,An,Gn,P]);async function Zs(I,J=!1){var ye;const se=il(I);if(se&&!di.current.has(se)&&!(!J&&((ye=d[se])!=null&&ye.loaded))){di.current.add(se),g(!0);try{const st=await Se("get_repo_visual_snapshot",{repoPath:se,forceRefresh:J});h(xt=>({...xt,[se]:st}))}finally{di.current.delete(se),di.current.size===0&&g(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach(I=>{Zs(I.path),Se("watch_repo",{repoPath:I.path}).catch(console.error)})},[c]),y.useEffect(()=>{let I=!1,J=null;return gc("git-activity",se=>{if(I)return;const ye=il(se.payload.repoPath);!ye||ye===t||Zs(ye,!0)}).then(se=>{I?se():J=se}).catch(console.error),()=>{I=!0,J&&J()}},[t]);function us(I){u(J=>{const se=il(I.path);if(!se)return J;const ye={...I,path:se},xt=(J.some(pt=>pt.path===se)?J.map(pt=>pt.path===se?ye:pt):[...J,ye]).slice(-Ay);try{localStorage.setItem(Ey,JSON.stringify(xt))}catch{}return xt})}async function ds(I){const J=il(I);if(J){Ut(null);try{const[se,ye]=await Promise.all([Se("get_repo_info",{repoPath:J}),Se("get_default_branch",{repoPath:J}).catch(()=>"main")]);us({path:J,name:se.name,lastOpenedAt:Date.now(),branchName:ye}),await Zs(J,!0)}catch(se){Ut(se instanceof Error?se.message:String(se))}}}const Ii=()=>{(async()=>{var I,J;try{const se=await qv({directory:!0,multiple:!1,defaultPath:(J=(I=c[0])==null?void 0:I.path)!=null?J:void 0});typeof se=="string"&&se&&await ds(se)}catch(se){Ut(se instanceof Error?se.message:String(se))}})()};async function Vo(I,J){const ye=[];let st=0;for(;;){const xt=await Se("get_merge_nodes",{repoPath:I,branch:J,page:st,perPage:100});if(ye.push(...xt.nodes),!xt.hasMore||xt.nodes.length===0)break;st+=1}return ye}async function Zi(I,J,se){const ye=Array.from(new Set([se,...J.map(pt=>pt.name)].filter(pt=>!!pt)));if(ye.length===0)return[];const st=await Promise.all(ye.map(pt=>Vo(I,pt).catch(()=>[]))),xt=new Map;for(const pt of st)for(const Xt of pt){const ms=`${Xt.targetCommitSha}:${Xt.targetBranch}`;xt.has(ms)||xt.set(ms,Xt)}return Array.from(xt.values())}const Kt=I=>I.map(J=>`${J.name}|${J.headSha}|${J.commitsAhead}|${J.commitsBehind}|${J.unpushedCommits}|${J.remoteSyncStatus}`).join("||"),Vs=I=>I.map(J=>J.fullSha).join("|"),zs=I=>{var J,se;return I?`${(J=I.branchName)!=null?J:""}|${I.headSha}|${(se=I.parentSha)!=null?se:""}|${I.hasUncommittedChanges?1:0}`:"__none__"};async function Hn(I,J){const se=J!=null?J:P,[ye,st,xt,pt,Xt,ms]=await Promise.all([Se("get_branches",{repoPath:I}),Se("get_all_repo_commits",{repoPath:I}),Se("get_unpushed_direct_commits",{repoPath:I,branch:se}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:I}).catch(()=>null),Se("list_worktrees",{repoPath:I}).catch(()=>[]),Se("list_stashes",{repoPath:I}).catch(()=>[])]),Zn=await Zi(I,ye,se),uo=await Promise.all([se,...ye.map(Nn=>Nn.name)].map(async Nn=>{const Qt=await Se("get_branch_unpushed_commit_shas",{repoPath:I,branch:Nn}).catch(()=>[]);return[Nn,Qt]}));x(ye),w(Zn),j(st),M(xt),L(Object.fromEntries(uo)),Z(pt),ie(Xt),Dn(ms)}async function Si(I){const[J,se,ye]=await Promise.all([Se("get_branches",{repoPath:I}).catch(()=>[]),Se("get_all_repo_commits",{repoPath:I}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:I}).catch(()=>null)]);return Kt(J)!==Kt(go.current)||Vs(se)!==Vs(ti.current)||zs(ye)!==zs(Ns.current)}async function Lo(I){Ve(null),Ht(!0);try{const[J,se]=await Promise.all([Se("get_repo_info",{repoPath:I}),Se("get_default_branch",{repoPath:I})]);a(J.name),W(se),n(I),await Hn(I,se),eo(I),Ve({kind:"success",message:`Now targeting worktree at ${I}`})}catch(J){const se=J instanceof Error?J.message:String(J);Ve({kind:"error",message:se}),console.error("Failed to switch worktree:",se)}finally{Ht(!1)}}async function Js(I,J){if(!(!t||ke)){Re(!0),Ve(null);try{await Se("remove_worktree",{repoPath:t,worktreePath:I,force:J}),await Hn(t),Ve({kind:"success",message:`Removed worktree at ${I}`})}catch(se){const ye=se instanceof Error?se.message:String(se);Ve({kind:"error",message:ye}),console.error("Failed to remove worktree:",ye)}finally{Re(!1)}}}function fi(I,J){var se,ye;a(J.name||md(I)),W(J.defaultBranch||"main"),x(J.branches),w(J.mergeNodes),j(J.directCommits),M(J.unpushedDirectCommits),L(J.unpushedCommitShasByBranch),Z(J.checkedOutRef),ie(J.worktrees),Dn(J.stashes),ut(J.branchCommitPreviews),jn((se=J.branchParentByName)!=null?se:{}),Mn((ye=J.laneByBranch)!=null?ye:{}),Kn(J.branchUniqueAheadCounts),n(I)}async function yo(I,J,se){const ye=se==null?void 0:se.forceRefresh,st=se==null?void 0:se.applyToActiveState;try{const[xt,pt]=await Promise.all([Se("get_repo_info",{repoPath:I}),Se("get_default_branch",{repoPath:I})]);if(J!==ys.current)return;const Xt=await Se("get_repo_visual_snapshot",{repoPath:I,forceRefresh:ye});if(J!==ys.current)return;h(ms=>({...ms,[I]:Xt})),st&&(t===I||ys.current),eo(I)}catch(xt){if(J!==ys.current)return;console.error("Background snapshot refresh failed:",xt)}}async function wn(I){const J=++ys.current,se=il(I);if(!se)return;const ye=d[se];if(ye!=null&&ye.loaded){Ut(null),fi(se,ye),us({path:se,name:ye.name||md(se),lastOpenedAt:Date.now(),branchName:ye.defaultBranch}),Ht(!1),Ee(!1),yo(se,J,{forceRefresh:!1,applyToActiveState:!1});return}if(Ee(!0),Ht(!0),Ut(null),await new Promise(st=>setTimeout(st,15)),J===ys.current)try{const[st,xt]=await Promise.all([Se("get_repo_info",{repoPath:se}),Se("get_default_branch",{repoPath:se})]);if(J!==ys.current)return;a(st.name),W(xt);const pt=await Se("get_repo_visual_snapshot",{repoPath:se,forceRefresh:!0});if(J!==ys.current)return;h(Xt=>({...Xt,[se]:pt})),fi(se,pt),us({path:se,name:st.name,lastOpenedAt:Date.now(),branchName:xt}),Ht(!1),Ee(!1),eo(se)}catch(st){if(J!==ys.current)return;console.error("Failed to load repo:",st),Ut(st instanceof Error?st.message:String(st)),n(null),Ee(!1),Ht(!1)}}async function eo(I){const J=++is.current;try{if(J!==is.current)return;H(!1),Be(null);const se=await Se("get_github_info",{repoPath:I}),ye=await Se("get_github_auth_status");if(J!==is.current||(_e(ye),!ye.ghAvailable||!ye.authenticated))return;const st=await Se("get_open_prs",{owner:se.owner,repo:se.repo});if(J!==is.current)return;V(st),H(!0)}catch(se){if(J!==is.current)return;console.log("GitHub data not available:",se),Be(se instanceof Error?se.message:String(se)),H(!1)}}y.useEffect(()=>{let I=null,J=!1;const se=(()=>{try{return $x().label}catch{return null}})(),ye=async xt=>{var Xt;const pt=(Xt=xt==null?void 0:xt.path)==null?void 0:Xt.trim();!pt||J||t!==pt&&await wn(pt)};return(async()=>{se==="main"&&(I=await gc("gitviz://open-repo",async pt=>{await ye(pt.payload)}));const xt=await Se("take_pending_open_repo");await ye(xt)})(),()=>{J=!0,I&&I()}},[t]),y.useEffect(()=>{go.current=_},[_]),y.useEffect(()=>{ti.current=S},[S]),y.useEffect(()=>{Ns.current=U},[U]),y.useEffect(()=>{Qi.current=jo},[jo]),y.useEffect(()=>{},[t,P,Qn]),y.useEffect(()=>{if(!t||!P||!Qn)return;Se("watch_repo",{repoPath:t}).catch(console.error);let I=!1,J=!1,se=!1,ye=null;const st=async()=>{if(!I){if(Qi.current){J=!0;return}if(se){J=!0;return}se=!0;try{if(!await Si(t)||I)return;await Hn(t,P)}catch(pt){console.warn("Frozen git-activity refresh failed:",pt)}finally{se=!1,J&&!I&&(J=!1,window.setTimeout(()=>{st()},0))}}},xt=()=>{J=!0,st()};return gc("git-activity",pt=>{il(pt.payload.repoPath)===t&&(Zs(t,!0),xt())}).then(pt=>{I?pt():ye=pt}).catch(console.error),()=>{I=!0,ye&&ye()}},[t,P,Qn]);async function Ci(){if(t){Qe(!0),Be(null);try{await Se("authenticate_github");const I=await Se("get_github_auth_status");_e(I),I.authenticated?await eo(t):I.message&&Be(I.message)}catch(I){Be(I instanceof Error?I.message:String(I))}finally{Qe(!1)}}}const fs=new Set(D.map(I=>I.branchName)),xo=14*864e5,sn=Date.now(),Ys=_.filter(I=>I.status==="stale"),ro=Ys.filter(I=>fs.has(I.name)||sn-new Date(I.lastCommitDate).getTime()<=xo),lo=Ys.filter(I=>!fs.has(I.name)&&sn-new Date(I.lastCommitDate).getTime()>xo),hs=I=>{var J;return Object.prototype.hasOwnProperty.call(Gn,I.name)?Math.max(0,(J=Gn[I.name])!=null?J:0):Math.max(0,I.commitsAhead)};y.useEffect(()=>{yt({}),dn.current=null,Qe(!1),_e(null),Be(null),V([]),Ve(null)},[t]),y.useEffect(()=>{var ms,Zn,uo,Nn;if(!t||!P){yt({}),ut({}),jn({}),Mn({}),Kn({}),dn.current=null;return}const I=_.map(Qt=>{var nn;return`${Qt.name}:${Qt.headSha}:${(nn=Qt.parentBranch)!=null?nn:""}:${Qt.commitsAhead}`}).join("|"),J=b.map(Qt=>{var nn,hn;return`${Qt.fullSha}:${(hn=(nn=Qt.parentShas)==null?void 0:nn[1])!=null?hn:""}`}).join("|"),se=`${t}|${P}|${I}|${J}`;if(dn.current===se)return;dn.current=se;const ye={},st={};for(const Qt of _){if(Qt.name===P)continue;const nn=S.filter(hn=>hn.branch===Qt.name).map(hn=>{var Es;return{fullSha:hn.fullSha,sha:hn.sha,parentSha:(Es=hn.parentSha)!=null?Es:null,message:hn.message,author:hn.author,date:hn.date,kind:"commit"}});ye[Qt.name]=nn,st[Qt.name]=nn.length}const xt=new Map;for(const Qt of S)xt.set(Qt.fullSha,Qt.branch);const pt=Qt=>{if(!Qt)return null;const nn=xt.get(Qt);if(nn)return nn;for(const[hn,Es]of xt.entries())if(hn.startsWith(Qt)||Qt.startsWith(hn))return Es;return null},Xt={[P]:null};for(const Qt of _){if(Qt.name===P){Xt[Qt.name]=null;continue}const nn=S.filter(Xs=>Xs.branch===Qt.name),hn=new Set(nn.map(Xs=>Xs.fullSha)),Es=(Zn=(ms=nn.filter(Xs=>{var fo;const qs=(fo=Xs.parentSha)!=null?fo:null;return!qs||!hn.has(qs)}).sort((Xs,qs)=>{const fo=new Date(Xs.date).getTime()-new Date(qs.date).getTime();return fo!==0?fo:Xs.fullSha.localeCompare(qs.fullSha)})[0])==null?void 0:ms.parentSha)!=null?Zn:null,Os=pt(Es);Xt[Qt.name]=(Nn=(uo=Os!=null?Os:Ft[Qt.name])!=null?uo:Qt.parentBranch)!=null?Nn:null}yt({}),ut(ye),jn(Xt),Mn(Qt=>{const nn={};for(const hn of _){const Es=Qt[hn.name];Es!=null&&Number.isFinite(Es)&&(nn[hn.name]=Es)}return nn}),Kn(st)},[t,P,_,b,S,Ft]),y.useEffect(()=>{if(!gt){qe(!1);return}qe(!0);const I=window.setTimeout(()=>{qe(!1)},Dy),J=window.setTimeout(()=>{Ve(null)},Dy+Zw);return()=>{window.clearTimeout(I),window.clearTimeout(J)}},[gt]),y.useEffect(()=>{if(!t||_.length===0)return;const I=ye=>new Promise(st=>setTimeout(st,ye));async function J(){const st=`${await Se("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${st}`),await I(800),await Se("screenshot",{path:`${st}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${st}`)}const se=ye=>{if((ye.metaKey||ye.ctrlKey)&&!ye.shiftKey&&!ye.altKey&&ye.key.toLowerCase()==="b"){ye.preventDefault(),Ds(st=>!st);return}(ye.metaKey||ye.ctrlKey)&&ye.shiftKey&&ye.key==="S"&&(ye.preventDefault(),J())};return window.addEventListener("keydown",se),()=>window.removeEventListener("keydown",se)},[t,i,_]);function ni(){Ze(!0),setTimeout(()=>{Me(!1),Ze(!1),Ue("active"),Bt(null)},100)}async function bo(I){if(!t)return;Ve(null);const J=/^STASH:(\d+)$/.exec(I.commitSha);if(J){try{const se=parseInt(J[1],10),ye=await Se("apply_stash_restore",{repoPath:t,stashIndex:se});Z(ye),await Hn(t);const st=`Stash ${se+1}`,xt=ye.branchName?` on branch ${ye.branchName}`:" at the stash base (detached HEAD)";Ve({kind:"success",message:`Restored ${st}${xt}; stash applied and dropped (uncommitted changes).`})}catch(se){const ye=se instanceof Error?se.message:String(se);Ve({kind:"error",message:ye}),console.error("Failed to apply stash:",ye)}return}if(I.branchName){const se=(st,xt)=>{const pt=st.replace(/\\/g,"/").replace(/\/+$/,""),Xt=xt.replace(/\\/g,"/").replace(/\/+$/,"");return pt===Xt||pt.toLowerCase()===Xt.toLowerCase()},ye=ae.find(st=>st.pathExists===!1||st.isCurrent||t&&se(st.path,t)?!1:st.branchName===I.branchName);if(ye){await Lo(ye.path);return}}try{let se="";(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await Se("stash_push",{repoPath:t,includeUntracked:!0}),se="Stashed local changes (including untracked), then ",await Hn(t));const st=I.branchName?await Se("checkout_branch",{repoPath:t,branchName:I.branchName}):await Se("checkout_ref",{repoPath:t,refName:I.commitSha}),xt=await Se("get_checked_out_ref",{repoPath:t}).catch(()=>st);Z(xt),await Hn(t);const pt=xt.branchName?xt.branchName:`${xt.headSha.slice(0,7)} (detached)`;Ve({kind:"success",message:`${se}Checked out ${pt}`})}catch(se){const ye=se instanceof Error?se.message:String(se);Ve({kind:"error",message:ye}),console.error("Failed to checkout commit:",ye)}}async function zo(){if(!(!t||Ln)){Ve(null),un(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Ve({kind:"error",message:"No local changes to stash."});return}await Se("stash_push",{repoPath:t,includeUntracked:!0}),await Hn(t),Ve({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(I){const J=I instanceof Error?I.message:String(I);Ve({kind:"error",message:J}),console.error("Failed to stash:",J)}finally{un(!1)}}}async function Ws(I){if(!t||pn)return!1;const J=I.trim();if(!J)return Ve({kind:"error",message:"Enter a commit message."}),!1;Ve(null),ot(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ve({kind:"error",message:"No local changes to commit."}),!1;const ye=await Se("commit_working_tree",{repoPath:t,message:J});return Z(ye),await Hn(t),Ve({kind:"success",message:"Committed local changes."}),!0}catch(se){const ye=se instanceof Error?se.message:String(se);return Ve({kind:"error",message:ye}),console.error("Failed to commit:",ye),!1}finally{ot(!1)}}async function si(){if(!t||cn)return!1;Ve(null),ko(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ve({kind:"error",message:"No local changes to stage."}),!1;const J=await Se("stage_working_tree",{repoPath:t});return Z(J),await Hn(t),Ve({kind:"success",message:"Staged all changes."}),!0}catch(I){const J=I instanceof Error?I.message:String(I);return Ve({kind:"error",message:J}),console.error("Failed to stage:",J),!1}finally{ko(!1)}}async function Yo(I,J){if(!(!t||Po)){Tn(!0),Ve(null);try{const se=/^STASH:(\d+)$/.exec(I);let ye;if(se){const st=parseInt(se[1],10);ye=await Se("move_stash_to_new_branch",{repoPath:t,stashIndex:st,branchName:J})}else ye=await Se("create_branch_from_uncommitted",{repoPath:t,branchName:J});Z(ye),await Hn(t),Ve({kind:"success",message:`Moved to new branch "${J}"`})}catch(se){const ye=se instanceof Error?se.message:String(se);Ve({kind:"error",message:ye}),console.error("Failed to create branch from node:",ye)}finally{Tn(!1)}}}async function tn(I){if(!(!t||Po)){Tn(!0),Ve(null);try{const J=await Se("create_root_branch",{repoPath:t,branchName:I});Z(J),await Hn(t),Ve({kind:"success",message:`Created new root branch "${I}"`})}catch(J){const se=J instanceof Error?J.message:String(J);Ve({kind:"error",message:se}),console.error("Failed to create root branch:",se)}finally{Tn(!1)}}}async function Fs(I,J){if(!t)return;const se=Array.from(new Set(I.filter(ye=>!!ye&&ye!==J)));if(se.length!==0){Ve(null),jt(!0);try{let ye=null;for(const st of se)ye=await Se("merge_ref_into_branch",{repoPath:t,sourceRef:st,targetBranch:J});await Hn(t),ye&&Z(ye),Ve({kind:"success",message:se.length===1?`Merged ${se[0].slice(0,7)} into ${J}`:`Merged ${se.length} commits into ${J}`})}catch(ye){const st=ye instanceof Error?ye.message:String(ye);Ve({kind:"error",message:st}),console.error("Failed to merge refs into branch:",st)}finally{jt(!1)}}}async function Rs(){if(!(!t||Rt)){Ve(null),Vt(!0);try{const I=await Se("push_all_unpushed_branches",{repoPath:t});await Hn(t),Ve({kind:"success",message:I.length>0?I.length===1?`Pushed ${I[0].branchName}`:`Pushed ${I.length} branches`:"Everything local is already pushed."})}catch(I){const J=I instanceof Error?I.message:String(I);Ve({kind:"error",message:J}),console.error("Failed to push all branches:",J)}finally{Vt(!1)}}}async function Bs(){if(!(!t||Rt)){Ve(null),Vt(!0);try{const I=await Se("push_current_branch",{repoPath:t});await Hn(t),Ve({kind:"success",message:`Pushed ${I.branchName}`})}catch(I){const J=I instanceof Error?I.message:String(I);Ve({kind:"error",message:J}),console.error("Failed to push current branch:",J)}finally{Vt(!1)}}}async function vo(I){var se;if(!t||Rt)return;const J=Array.from(new Map(I.filter(ye=>ye.branchName&&ye.targetSha).map(ye=>[ye.branchName,ye])).values());if(J.length!==0){Ve(null),Vt(!0);try{for(const ye of J)await Se("push_branch",{repoPath:t,branchName:ye.branchName,targetSha:ye.targetSha});await Hn(t),Ve({kind:"success",message:J.length===1?`Pushed ${J[0].branchName} through ${(se=J[0].targetSha)==null?void 0:se.slice(0,7)}`:`Pushed ${J.length} selected commit ranges`})}catch(ye){const st=ye instanceof Error?ye.message:String(ye);Ve({kind:"error",message:st}),console.error("Failed to push selected commits:",st)}finally{Vt(!1)}}}async function Wo(I){var xt;if(!t||Ge)return;const J=Array.from(new Set(I.branchNames.filter(pt=>pt&&pt!==P))),se=!!I.discardUncommittedChanges,ye=(xt=I.stashIndices)!=null?xt:[],st=Array.from(new Set(ye)).sort((pt,Xt)=>Xt-pt);if(!(J.length===0&&!se&&st.length===0)){Ve(null),Lt(!0);try{for(const ms of st)await Se("stash_drop",{repoPath:t,stashIndex:ms});const pt=J.length>0||se?await Se("delete_selected_elements",{repoPath:t,branchNames:J,discardUncommittedChanges:se}):{deletedBranches:[],discardedUncommittedChanges:!1};await Hn(t);const Xt=[];st.length>0&&Xt.push(st.length===1?`removed stash ${st[0]+1}`:`removed ${st.length} stashes`),pt.discardedUncommittedChanges&&Xt.push("discarded local uncommitted changes"),pt.deletedBranches.length>0&&Xt.push(pt.deletedBranches.length===1?`deleted ${pt.deletedBranches[0]}`:`deleted ${pt.deletedBranches.length} branches`),Ve({kind:"success",message:Xt.length>0?Xt.join(" and "):"Nothing to delete."})}catch(pt){const Xt=pt instanceof Error?pt.message:String(pt);Ve({kind:"error",message:Xt}),console.error("Failed to delete selected elements:",Xt)}finally{Lt(!1)}}}function wo(I){Bt(I),lt(J=>{var se;return{branch:I,seq:((se=J==null?void 0:J.seq)!=null?se:0)+1}})}function Ts(I){I&&(rt(I),oe(J=>J+1))}function So(I){I&&(ce(I),oe(J=>J+1))}y.useEffect(()=>{var se;const I=U!=null&&U.hasUncommittedChanges?"WORKING_TREE":(se=U==null?void 0:U.headSha)!=null?se:null;if(!I)return;const J=`${t!=null?t:"__no-repo__"}|${js}|${I}`;Uo.current!==J&&(Uo.current=J,rt(I),oe(ye=>ye+1))},[U==null?void 0:U.hasUncommittedChanges,U==null?void 0:U.headSha,js,t]),y.useEffect(()=>{Uo.current=null},[t]);const{enrichedBranches:Yn,enrichedBranchCommitPreviews:T,enrichedBranchUniqueAheadCounts:F,enrichedDirectCommits:de}=y.useMemo(()=>{var xe,Fe,ct,C;const I=qx(gs,_,S,ln,Gn,P);let J=I.branches,se=I.directCommits,ye=I.branchCommitPreviews,st=I.branchUniqueAheadCounts;if(!(U!=null&&U.hasUncommittedChanges))return{enrichedBranches:J,enrichedDirectCommits:se,enrichedBranchCommitPreviews:ye,enrichedBranchUniqueAheadCounts:st};const xt=U.headSha||U.parentSha||null,pt=(Fe=(xe=se[0])==null?void 0:xe.fullSha)!=null?Fe:null,Xt=(E,R)=>!E||!R?!1:E===R||E.startsWith(R)||R.startsWith(E),ms=[{name:P,headSha:pt!=null?pt:"",isDefault:!0},...J.map(E=>({name:E.name,headSha:E.headSha,isDefault:!1}))],Zn=U.branchName?ms.find(E=>E.name===U.branchName):void 0,uo=xt?ms.filter(E=>Xt(E.headSha,xt)):[],Nn=(ct=Zn!=null?Zn:uo.find(E=>E.isDefault))!=null?ct:uo[0],Qt=!!(Nn&&xt&&Xt(Nn.headSha,xt)),nn=Nn&&!Nn.isDefault?J.find(E=>E.name===Nn.name):void 0,hn=(()=>{var R;if(!xt)return null;const E=se.find(O=>Xt(O.fullSha,xt)||Xt(O.sha,xt));if(E!=null&&E.date)return E.date;if(nn){const O=((R=ye[nn.name])!=null?R:[]).find(Y=>Xt(Y.fullSha,xt)||Xt(Y.sha,xt));if(O!=null&&O.date)return O.date}return null})(),Es=hn?new Date(hn).getTime():Number.NaN,Os=Date.now(),Xs=Number.isFinite(Es)?Math.max(Os,Es+1):Os,qs=new Date(Xs).toISOString(),fo={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:xt,message:"Local uncommitted changes",author:"You",date:qs,kind:"uncommitted"},hi={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:xt,childShas:[],branch:P,message:"Local uncommitted changes",author:"You",date:qs,kind:"uncommitted"};if(Qt&&(Nn!=null&&Nn.isDefault))return{enrichedBranches:J,enrichedBranchCommitPreviews:ye,enrichedBranchUniqueAheadCounts:st,enrichedDirectCommits:[...se,hi]};if(Qt&&nn)return{enrichedBranches:J.map(R=>R.name===nn.name?{...R,commitsAhead:R.commitsAhead+1,unpushedCommits:R.unpushedCommits+1,lastCommitDate:qs,headSha:"WORKING_TREE"}:R),enrichedDirectCommits:se,enrichedBranchCommitPreviews:{...ye,[nn.name]:[fo,...ye[nn.name]||[]]},enrichedBranchUniqueAheadCounts:{...st,[nn.name]:Math.max(0,(C=Object.prototype.hasOwnProperty.call(st,nn.name)?st[nn.name]:nn.commitsAhead)!=null?C:0)+1}};const Xo={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:qs,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:xt!=null?xt:void 0,parentBranch:(Nn==null?void 0:Nn.name)||U.branchName||P};return{enrichedBranches:[Xo,...J],enrichedBranchCommitPreviews:{...ye,[Xo.name]:[fo]},enrichedBranchUniqueAheadCounts:{...st,[Xo.name]:1},enrichedDirectCommits:se}},[_,ln,Gn,U,P,S,gs]),be=y.useMemo(()=>{const I={...Ft};return I[P]=null,I},[Ft,P,Yn]),He=y.useMemo(()=>{var I;return(I=pw(Yn,P,be,An))!=null?I:cp(Yn,P,T,be)},[Yn,P,T,be,An]),et=y.useMemo(()=>jc({lanes:He,branches:Yn,mergeNodes:b,directCommits:de,unpushedDirectCommits:k,defaultBranch:P,branchCommitPreviews:T,branchParentByName:be,branchUniqueAheadCounts:F,manuallyOpenedClumps:pe,manuallyClosedClumps:ne,isDebugOpen:!1,gridSearchQuery:Q,gridFocusSha:at,checkedOutRef:U!=null?U:null,orientation:js}),[He,Yn,b,de,k,P,T,be,F,pe,ne,Q,at,(co=U==null?void 0:U.headSha)!=null?co:null,(ki=U==null?void 0:U.branchName)!=null?ki:null,js]),Dt=y.useMemo(()=>{var I;return at&&(I=et.clusterKeyByCommitId.get(at))!=null?I:null},[et.clusterKeyByCommitId,at]),$t=y.useMemo(()=>{if(!Dt||ne.has(Dt))return pe;const I=new Set(pe);return I.add(Dt),I},[ne,pe,Dt]),At=y.useMemo(()=>{if(!Dt)return ne;const I=new Set(ne);return I.delete(Dt),I},[ne,Dt]),Ke=y.useMemo(()=>jc({lanes:He,branches:Yn,mergeNodes:b,directCommits:de,unpushedDirectCommits:k,defaultBranch:P,branchCommitPreviews:T,branchParentByName:be,branchUniqueAheadCounts:F,manuallyOpenedClumps:$t,manuallyClosedClumps:At,isDebugOpen:!1,gridSearchQuery:Q,gridFocusSha:at,checkedOutRef:U!=null?U:null,orientation:js}),[He,Yn,b,de,k,P,T,be,F,$t,At,Q,at,(Fo=U==null?void 0:U.headSha)!=null?Fo:null,(Ji=U==null?void 0:U.branchName)!=null?Ji:null,js]);y.useEffect(()=>{try{const I=window.localStorage.getItem(Ny);if(I){const se=Number(I);Number.isFinite(se)&&wi(Math.min(zy,Math.max(Ly,se)))}const J=window.localStorage.getItem(Ry);J!=null&&Ds(J==="true")}catch{}},[]),y.useEffect(()=>{yn.current=zn},[zn]),y.useEffect(()=>{const I=On.current;I&&(I.style.width=Ls?"0px":`${zn}px`)},[zn,Ls]),y.useEffect(()=>{try{window.localStorage.setItem(Ry,String(Ls))}catch{}},[Ls]);const an=I=>{const J=Ms.current;if(!J)return;const se=J.startWidth+(I-J.startX);J.pendingWidth=Math.min(zy,Math.max(Ly,se));const ye=On.current;ye&&(ye.style.width=`${J.pendingWidth}px`)},fn=(I,J)=>{const se=Ms.current;if(se&&!(J!=null&&se.pointerId!==J)){Ms.current=null,To({dragging:!1,lastEvent:I}),document.body.style.cursor="",document.body.style.userSelect="",wi(se.pendingWidth);try{window.localStorage.setItem(Ny,String(se.pendingWidth))}catch{}}},Un=I=>{I.button===0&&(I.preventDefault(),To({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:I.pointerId,clientX:I.clientX,width:yn.current}),Ms.current={startX:I.clientX,startWidth:yn.current,pendingWidth:yn.current,pointerId:I.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",I.currentTarget.setPointerCapture(I.pointerId))},Wn=I=>{const J=Ms.current;!J||J.pointerId!==I.pointerId||(cs.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:I.clientX}),To(se=>se.dragging?{dragging:!0,lastEvent:"move"}:se),an(I.clientX))},xn=I=>{if(Ms.current){console.debug("[sidebar-resize] pointerup",{pointerId:I.pointerId});try{I.currentTarget.releasePointerCapture(I.pointerId)}catch{}fn("pointerup",I.pointerId)}},xs=I=>{if(Ms.current){console.debug("[sidebar-resize] pointercancel",{pointerId:I.pointerId});try{I.currentTarget.releasePointerCapture(I.pointerId)}catch{}fn("pointercancel",I.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:On,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:Ls?64:zn},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[90] inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":Ls?"Open sidebar":"Collapse sidebar",onClick:()=>Ds(I=>!I),children:Ls?l.jsx(aw,{className:"h-4 w-4 shrink-0"}):l.jsx(ow,{className:"h-4 w-4 shrink-0"})}),l.jsx(qw,{className:Oy("min-h-0 shrink-0 overflow-hidden pt-16 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:Ls,projects:Eo,activeProjectPath:t,onSelectProject:wn,onAddProject:Ii,projectLoading:Ce||p,projectError:wt,branches:Yn,defaultBranch:P,checkedOutRef:U,showCommits:It,onToggleShowCommits:()=>Zt(I=>!I),manuallyOpenedClumps:$t,manuallyClosedClumps:At,setManuallyOpenedClumps:N,setManuallyClosedClumps:re,gridLayoutModel:Ke,onSelectCommit:Ts,onSelectBranch:So}),Ls?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Un,onPointerMove:Wn,onPointerUp:xn,onPointerCancel:xs,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(Vw,{branches:Yn,mergeNodes:b,directCommits:de,unpushedDirectCommits:k,unpushedCommitShasByBranch:z,defaultBranch:P,branchCommitPreviews:T,branchParentByName:be,branchUniqueAheadCounts:F,gridSearchQuery:Q,gridSearchJumpToken:$,gridSearchJumpDirection:G,gridFocusSha:at,onGridSearchResultCountChange:Ae,onGridSearchResultIndexChange:Ne,onGridSearchFocusChange:rt,checkedOutRef:U,onCommitClick:bo,onMergeRefsIntoBranch:Fs,mergeInProgress:Xe,onPushAllBranches:Rs,onPushCurrentBranch:Bs,onPushCommitTargets:vo,pushInProgress:Rt,onDeleteSelection:Wo,deleteInProgress:Ge,worktrees:ae,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Js,removeWorktreeInProgress:ke,onSwitchToWorktree:Lo,onStashLocalChanges:zo,stashInProgress:Ln,stashDisabled:!1,onCommitLocalChanges:Ws,commitInProgress:pn,commitDisabled:!1,onStageAllChanges:si,stageInProgress:cn,onCreateBranchFromNode:Yo,onCreateRootBranch:tn,createBranchFromNodeInProgress:Po,isDebugOpen:_o,onDebugClose:()=>Us(!1),onInteractionChange:Ho,manuallyOpenedClumps:$t,manuallyClosedClumps:At,setManuallyOpenedClumps:N,setManuallyClosedClumps:re,layoutModel:Ke,orientation:js}),l.jsx("header",{"data-tauri-drag-region":!0,"data-map-ui":!0,className:"absolute inset-x-0 top-0 z-40 px-2.5",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 flex min-h-12 w-full items-center justify-between gap-2 py-2.25",children:[l.jsxs("div",{className:"flex flex-wrap items-start gap-2",children:[(te==null?void 0:te.ghAvailable)&&!te.authenticated&&l.jsx("button",{onClick:Ci,disabled:we,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:we?"Connecting GitHub...":"Connect GitHub"}),te&&!te.ghAvailable&&l.jsx("span",{className:"inline-flex h-7 items-center rounded-md border border-border/60 px-2 text-[11px] font-medium text-muted-foreground",children:"Install `gh` for private PR data"})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(Kw,{query:Q,onQueryChange:ce,resultCount:fe,resultIndex:$e,onJump:I=>{K(I),oe(J=>J+1)}}),l.jsx(Gw,{orientation:js,onOrientationChange:Mo}),l.jsx("button",{type:"button",onClick:()=>Us(I=>!I),className:"hidden","aria-hidden":"true",tabIndex:-1,children:"Debug"})]})]})}),l.jsxs("div",{className:"pointer-events-none fixed right-4 top-4 z-50 flex w-[min(16rem,calc(100vw-2rem))] flex-col gap-1.5",children:[Pe&&l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Pe,children:Pe})]}),gt&&l.jsxs("div",{className:Oy("window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200",Ot?"opacity-100":"opacity-0",gt.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"),title:gt.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:gt.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:gt.message})]})]})]}),q&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${Je?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:ni,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Ue("active"),className:`text-xs font-medium transition-colors ${dt==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[ro.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Ue("inactive"),className:`text-xs font-medium transition-colors ${dt==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[lo.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(dt==="active"?ro:lo).map(I=>{const J=(_t==null?void 0:_t.name)===I.name,se=hs(I);return l.jsxs("button",{onClick:()=>wo(I),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${J?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:I.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[se>0&&`${se} ahead`,se>0&&I.commitsBehind>0&&", ",I.commitsBehind>0&&`${I.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},I.name)})})]})]})})})}var Bc=Bx(),tS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,nS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=tS}var ls=nS,sS=`.icon-transitions-module__iconState___uqK9J {
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
}`,oS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=sS}var ss=oS,iS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),aS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),rS=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),lS=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ss.iconState} ${n?ss.hiddenScaled:ss.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ss.iconState} ${n?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),cS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ss.iconStateFast} ${i?ss.visibleScaled:u?ss.sending:ss.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ss.iconStateFast} ${a?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconStateFast} ${c?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},uS=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFade} ${n?ss.visible:ss.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconFade} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),dS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFadeFast} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ss.iconFadeFast} ${n?ss.visible:ss.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),fS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),hS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Gx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),mS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),pS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),_S=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),gS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),yS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),xS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),bS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Kx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Kh=Kx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Am="feedback-freeze-styles",Qh="__agentation_freeze";function vS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Qh]||(t[Qh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Qh]}var mn=vS();typeof window<"u"&&!mn.installed&&(mn.origSetTimeout=window.setTimeout.bind(window),mn.origSetInterval=window.setInterval.bind(window),mn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?mn.origSetTimeout(t,n):mn.origSetTimeout((...a)=>{mn.frozen?mn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?mn.origSetInterval(t,n):mn.origSetInterval((...a)=>{mn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>mn.origRAF(n=>{mn.frozen?mn.frozenRAFQueue.push(t):t(n)}),mn.installed=!0);var Pt=mn.origSetTimeout,wS=mn.origSetInterval,ul=mn.origRAF;function SS(t){return t?Kx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function CS(){if(typeof document>"u"||mn.frozen)return;mn.frozen=!0,mn.frozenTimeoutQueue=[],mn.frozenRAFQueue=[];let t=document.getElementById(Am);t||(t=document.createElement("style"),t.id=Am),t.textContent=`
    *${Kh},
    *${Kh}::before,
    *${Kh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),mn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;SS(i)||(n.pause(),mn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function $y(){var i;if(typeof document>"u"||!mn.frozen)return;mn.frozen=!1;const t=mn.frozenTimeoutQueue;mn.frozenTimeoutQueue=[];for(const a of t)mn.origSetTimeout(()=>{if(mn.frozen){mn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=mn.frozenRAFQueue;mn.frozenRAFQueue=[];for(const a of n)mn.origRAF(c=>{if(mn.frozen){mn.frozenRAFQueue.push(a);return}a(c)});for(const a of mn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}mn.pausedAnimations=[],(i=document.getElementById(Am))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Zh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},j){const[k,M]=y.useState(u),[z,L]=y.useState(!1),[D,V]=y.useState("initial"),[P,W]=y.useState(!1),[U,Z]=y.useState(!1),ae=y.useRef(null),ie=y.useRef(null),ke=y.useRef(null),Re=y.useRef(null);y.useEffect(()=>{b&&D!=="exit"&&V("exit")},[b,D]),y.useEffect(()=>{Pt(()=>{V("enter")},0);const K=Pt(()=>{V("entered")},200),pe=Pt(()=>{const N=ae.current;N&&(Zh(N),N.selectionStart=N.selectionEnd=N.value.length,N.scrollTop=N.scrollHeight)},50);return()=>{clearTimeout(K),clearTimeout(pe),ke.current&&clearTimeout(ke.current),Re.current&&clearTimeout(Re.current)}},[]);const Q=y.useCallback(()=>{Re.current&&clearTimeout(Re.current),L(!0),Re.current=Pt(()=>{L(!1),Zh(ae.current)},250)},[]);y.useImperativeHandle(j,()=>({shake:Q}),[Q]);const ce=y.useCallback(()=>{V("exit"),ke.current=Pt(()=>{p()},150)},[p]),$=y.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),oe=y.useCallback(K=>{K.stopPropagation(),!K.nativeEvent.isComposing&&(K.key==="Enter"&&!K.shiftKey&&(K.preventDefault(),$()),K.key==="Escape"&&ce())},[$,ce]),G=[ls.popup,w?ls.light:"",D==="enter"?ls.enter:"",D==="entered"?ls.entered:"",D==="exit"?ls.exit:"",z?ls.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:ie,className:G,"data-annotation-popup":!0,style:_,onClick:K=>K.stopPropagation(),children:[l.jsxs("div",{className:ls.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:ls.headerToggle,onClick:()=>{const K=U;Z(!U),K&&Pt(()=>Zh(ae.current),0)},type:"button",children:[l.jsx("svg",{className:`${ls.chevron} ${U?ls.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ls.element,children:n})]}):l.jsx("span",{className:ls.element,children:n}),i&&l.jsx("span",{className:ls.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${ls.stylesWrapper} ${U?ls.expanded:""}`,children:l.jsx("div",{className:ls.stylesInner,children:l.jsx("div",{className:ls.stylesBlock,children:Object.entries(S).map(([K,pe])=>l.jsxs("div",{className:ls.styleLine,children:[l.jsx("span",{className:ls.styleProperty,children:K.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ls.styleValue,children:pe}),";"]},K))})})}),a&&l.jsxs("div",{className:ls.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:ae,className:ls.textarea,style:{borderColor:P?x:void 0},placeholder:c,value:k,onChange:K=>M(K.target.value),onFocus:()=>W(!0),onBlur:()=>W(!1),rows:2,onKeyDown:oe}),l.jsxs("div",{className:ls.actions,children:[g&&l.jsx("div",{className:ls.deleteWrapper,children:l.jsx("button",{className:ls.deleteButton,onClick:g,type:"button",children:l.jsx(yS,{size:22})})}),l.jsx("button",{className:ls.cancel,onClick:ce,children:"Cancel"}),l.jsx("button",{className:ls.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:$,disabled:!k.trim(),children:d})]})]})}),kS=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const j=g.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Pt(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Pt(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Bc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},jS=`.styles-module__tooltip___mcXL2 {
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
}`,MS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=jS}var Iy=MS,jr=({content:t})=>l.jsx(kS,{className:Iy.tooltip,content:t,children:l.jsx(rS,{className:Iy.tooltipIcon})}),St={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Qx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...St.navigation},{type:"header",label:"Header",...St.header},{type:"hero",label:"Hero",...St.hero},{type:"section",label:"Section",...St.section},{type:"sidebar",label:"Sidebar",...St.sidebar},{type:"footer",label:"Footer",...St.footer},{type:"modal",label:"Modal",...St.modal},{type:"banner",label:"Banner",...St.banner},{type:"drawer",label:"Drawer",...St.drawer},{type:"popover",label:"Popover",...St.popover},{type:"divider",label:"Divider",...St.divider}]},{section:"Content",items:[{type:"card",label:"Card",...St.card},{type:"text",label:"Text",...St.text},{type:"image",label:"Image",...St.image},{type:"video",label:"Video",...St.video},{type:"table",label:"Table",...St.table},{type:"grid",label:"Grid",...St.grid},{type:"list",label:"List",...St.list},{type:"chart",label:"Chart",...St.chart},{type:"codeBlock",label:"Code Block",...St.codeBlock},{type:"map",label:"Map",...St.map},{type:"timeline",label:"Timeline",...St.timeline},{type:"calendar",label:"Calendar",...St.calendar},{type:"accordion",label:"Accordion",...St.accordion},{type:"carousel",label:"Carousel",...St.carousel},{type:"logo",label:"Logo",...St.logo},{type:"faq",label:"FAQ",...St.faq},{type:"gallery",label:"Gallery",...St.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...St.button},{type:"input",label:"Input",...St.input},{type:"search",label:"Search",...St.search},{type:"form",label:"Form",...St.form},{type:"tabs",label:"Tabs",...St.tabs},{type:"dropdown",label:"Dropdown",...St.dropdown},{type:"toggle",label:"Toggle",...St.toggle},{type:"stepper",label:"Stepper",...St.stepper},{type:"rating",label:"Rating",...St.rating},{type:"fileUpload",label:"File Upload",...St.fileUpload},{type:"checkbox",label:"Checkbox",...St.checkbox},{type:"radio",label:"Radio",...St.radio},{type:"slider",label:"Slider",...St.slider},{type:"datePicker",label:"Date Picker",...St.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...St.avatar},{type:"badge",label:"Badge",...St.badge},{type:"tag",label:"Tag",...St.tag},{type:"breadcrumb",label:"Breadcrumb",...St.breadcrumb},{type:"pagination",label:"Pagination",...St.pagination},{type:"progress",label:"Progress",...St.progress},{type:"alert",label:"Alert",...St.alert},{type:"toast",label:"Toast",...St.toast},{type:"notification",label:"Notification",...St.notification},{type:"tooltip",label:"Tooltip",...St.tooltip},{type:"stat",label:"Stat",...St.stat},{type:"skeleton",label:"Skeleton",...St.skeleton},{type:"chip",label:"Chip",...St.chip},{type:"icon",label:"Icon",...St.icon},{type:"spinner",label:"Spinner",...St.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...St.pricing},{type:"testimonial",label:"Testimonial",...St.testimonial},{type:"cta",label:"CTA",...St.cta},{type:"productCard",label:"Product Card",...St.productCard},{type:"profile",label:"Profile",...St.profile},{type:"feature",label:"Feature",...St.feature},{type:"team",label:"Team",...St.team},{type:"login",label:"Login",...St.login},{type:"contact",label:"Contact",...St.contact}]}],Gi={};for(const t of Qx)for(const n of t.items)Gi[n.type]=n;function Ie({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function qn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Jo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function TS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(qn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Ie,{w:t*.06}),l.jsx(Ie,{w:t*.07}),l.jsx(Ie,{w:t*.05}),l.jsx(Ie,{w:t*.06})]}),l.jsx(qn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function ES({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ie,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ie,{w:t*.6}),l.jsx(Ie,{w:t*.4}),l.jsx(qn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function AS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ie,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(qn,{w:10,h:10,radius:2}),l.jsx(Ie,{w:t*(.4+c*17%30/100)})]},c))]})}function DS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"70%",h:2}),l.jsx(Ie,{w:"60%",h:2})]},c))})}function NS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"90%"}),l.jsx(Ie,{w:"70%"}),l.jsx(Ie,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(qn,{w:70,h:26,radius:4}),l.jsx(qn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function RS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:4,strong:!0}),l.jsx(Ie,{w:"95%",h:2}),l.jsx(Ie,{w:"85%",h:2}),l.jsx(Ie,{w:"50%",h:2})]})]})}function BS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ie,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ie,{w:`${70+u*13%25}%`,h:2},u))]})}function LS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function zS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function OS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Jo,{size:8}),l.jsx(Ie,{w:`${55+c*17%35}%`,h:2})]},c))})}function $S({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ie,{w:Math.max(20,t*.5),h:3,strong:!0})})}function IS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ie,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ie,{w:"40%",h:2})})]})}function PS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:60+c*17%30,h:2}),l.jsx(qn,{w:"100%",h:28,radius:4})]},c)),l.jsx(qn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function HS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ie,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"65%",h:2}),l.jsx(Ie,{w:"75%",h:2})]})]})}function US({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function VS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0})})}function YS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ie,{w:t*.35})]})}function WS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx(Ie,{w:t*.7}),l.jsx(Ie,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(qn,{w:"33%",h:"100%",radius:4}),l.jsx(qn,{w:"33%",h:"100%",radius:4}),l.jsx(qn,{w:"33%",h:"100%",radius:4})]})]})}function FS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(qn,{w:"100%",h:"100%",radius:4},u))})}function XS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ie,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ie,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function qS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function GS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Jo,{size:Math.min(14,n*.4)}),l.jsx(Ie,{w:"50%",h:2})]})}function KS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Jo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function QS({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function ZS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(qn,{w:a,h:`${d}%`,radius:2},u)})})}function JS({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(qn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function e4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function t4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ie,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function n4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(qn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function s4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function o4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ie,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function i4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(qn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Jo,{size:5}),l.jsx(Jo,{size:5}),l.jsx(Jo,{size:5})]})]})}function a4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(Ie,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Jo,{size:5}),l.jsx(Ie,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(qn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function r4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"75%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Jo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ie,{w:60,h:3,strong:!0}),l.jsx(Ie,{w:40,h:2})]})]})]})}function l4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ie,{w:t*.35}),l.jsx(qn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function c4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"40%",h:3,strong:!0}),l.jsx(Ie,{w:"70%",h:2})]})]})}function u4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(qn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function d4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ie,{w:t*.5,h:2}),l.jsx(Ie,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ie,{w:t*.3,h:2})]})}function f4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function h4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function m4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function p4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function _4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Jo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function g4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ie,{w:t*.4,h:2}),l.jsx(Ie,{w:t*.25,h:2})]})}function y4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Jo,{size:6}),l.jsx(Jo,{size:6}),l.jsx(Jo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ie,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function x4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ie,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function b4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Jo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"50%",h:3,strong:!0}),l.jsx(Ie,{w:"75%",h:2})]}),l.jsx(Ie,{w:30,h:2})]})}function v4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"65%",h:4,strong:!0}),l.jsx(Ie,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"30%",h:5,strong:!0}),l.jsx(qn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function w4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Jo,{size:i}),l.jsx(Ie,{w:t*.45,h:4,strong:!0}),l.jsx(Ie,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]})]})]})}function S4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ie,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ie,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function C4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:3,strong:!0}),l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function k4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(qn,{w:i,h:i,radius:i*.25}),l.jsx(Ie,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function j4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ie,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function M4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function T4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function E4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function A4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function D4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function N4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function R4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ie,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function B4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function L4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function z4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(qn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function O4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Jo,{size:a}),l.jsx(Ie,{w:t*.12,h:3,strong:!0}),l.jsx(Ie,{w:t*.08,h:2})]},u))})]})}function $4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ie,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:Math.min(60,t*.2),h:2}),l.jsx(qn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(qn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ie,{w:t*.4,h:2})]})}function I4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Ie,{w:t*.4,h:4,strong:!0}),l.jsx(Ie,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:40,h:2}),l.jsx(qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ie,{w:60,h:2}),l.jsx(qn,{w:"100%",h:"100%",radius:4})]}),l.jsx(qn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var P4={navigation:TS,hero:ES,sidebar:AS,footer:DS,modal:NS,card:RS,text:BS,image:LS,table:zS,list:OS,button:$S,input:IS,form:PS,tabs:HS,avatar:US,badge:VS,header:YS,section:WS,grid:FS,dropdown:XS,toggle:qS,search:GS,toast:KS,progress:QS,chart:ZS,video:JS,tooltip:e4,breadcrumb:t4,pagination:n4,divider:s4,accordion:o4,carousel:i4,pricing:a4,testimonial:r4,cta:l4,alert:c4,banner:u4,stat:d4,stepper:f4,tag:h4,rating:m4,map:p4,timeline:_4,fileUpload:g4,codeBlock:y4,calendar:x4,notification:b4,productCard:v4,profile:w4,drawer:S4,popover:C4,logo:k4,faq:j4,gallery:M4,checkbox:T4,radio:E4,slider:A4,datePicker:D4,skeleton:N4,chip:R4,icon:B4,spinner:L4,feature:z4,team:O4,login:$4,contact:I4};function H4({type:t,width:n,height:i,text:a}){const c=P4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var U4=`svg[fill=none] {
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
}`,V4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=U4}var De=V4,al=24,Xu=5;function Py(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],j=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],k=[];for(const ie of n)i.has(ie.id)||k.push(ie);c&&k.push(...c);for(const ie of k){const ke=ie.x,Re=ie.x+ie.width,Q=ie.x+ie.width/2,ce=ie.y,$=ie.y+ie.height,oe=ie.y+ie.height/2;for(const G of S)for(const K of[ke,Re,Q]){const pe=K-G;Math.abs(pe)<Xu&&Math.abs(pe)<Math.abs(u)&&(u=pe)}for(const G of j)for(const K of[ce,$,oe]){const pe=K-G;Math.abs(pe)<Xu&&Math.abs(pe)<Math.abs(d)&&(d=pe)}}const M=Math.abs(u)<Xu?u:0,z=Math.abs(d)<Xu?d:0,L=[],D=new Set,V=h+M,P=p+M,W=g+M,U=_+z,Z=x+z,ae=b+z;for(const ie of k){const ke=ie.x,Re=ie.x+ie.width,Q=ie.x+ie.width/2,ce=ie.y,$=ie.y+ie.height,oe=ie.y+ie.height/2;for(const G of[ke,Q,Re])for(const K of[V,W,P])if(Math.abs(K-G)<.5){const pe=`x:${Math.round(G)}`;D.has(pe)||(D.add(pe),L.push({axis:"x",pos:G}))}for(const G of[ce,oe,$])for(const K of[U,ae,Z])if(Math.abs(K-G)<.5){const pe=`y:${Math.round(G)}`;D.has(pe)||(D.add(pe),L.push({axis:"y",pos:G}))}}return{dx:M,dy:z,guides:L}}function Hy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Y4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:j}){const[k,M]=y.useState(new Set),[z,L]=y.useState(null),[D,V]=y.useState(null),[P,W]=y.useState(null),[U,Z]=y.useState([]),[ae,ie]=y.useState(null),[ke,Re]=y.useState(!1),Q=y.useRef(!1),[ce,$]=y.useState(new Set),oe=y.useRef(new Map),G=y.useRef(null),K=y.useRef(null),pe=y.useRef(t);pe.current=t;const N=y.useRef(_);N.current=_;const ne=y.useRef(b);ne.current=b;const re=y.useRef(w);re.current=w;const fe=y.useRef(x);y.useEffect(()=>{x!==fe.current&&(fe.current=x,M(new Set))},[x]);const Ae=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==Ae.current){Ae.current=S;const q=new Set(pe.current.map(Me=>Me.id));q.size>0&&($(q),M(new Set),K.current=null,Pt(()=>{n([]),$(new Set)},180))}},[S,n]),y.useEffect(()=>{const q=Me=>{const Je=Me.target;if(!(Je.tagName==="INPUT"||Je.tagName==="TEXTAREA"||Je.isContentEditable)){if((Me.key==="Backspace"||Me.key==="Delete")&&k.size>0){Me.preventDefault();const dt=new Set(k);$(dt),M(new Set),Pt(()=>{n(pe.current.filter(Ue=>!dt.has(Ue.id))),$(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Me.key)&&k.size>0){Me.preventDefault();const dt=Me.shiftKey?20:1,Ue=Me.key==="ArrowLeft"?-dt:Me.key==="ArrowRight"?dt:0,mt=Me.key==="ArrowUp"?-dt:Me.key==="ArrowDown"?dt:0;n(t.map(lt=>k.has(lt.id)?{...lt,x:Math.max(0,lt.x+Ue),y:Math.max(0,lt.y+mt)}:lt));return}if(Me.key==="Escape"){i?a(null):k.size>0&&M(new Set);return}}};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[k,i,t,n,a]);const $e=y.useCallback(q=>{if(q.button!==0||p||q.target.closest(`.${De.placement}`))return;q.preventDefault(),q.stopPropagation();const Je=window.scrollY,Ze=q.clientX,dt=q.clientY;if(i){K.current="place",d==null||d(!0);let Ue=!1,mt=Ze,lt=dt;const _t=nt=>{mt=nt.clientX,lt=nt.clientY;const H=Math.abs(mt-Ze),te=Math.abs(lt-dt);if((H>5||te>5)&&(Ue=!0),Ue){const _e=Math.min(Ze,mt),we=Math.min(dt,lt),Qe=Math.abs(mt-Ze),Pe=Math.abs(lt-dt);L({x:_e,y:we,w:Qe,h:Pe}),W({x:nt.clientX+12,y:nt.clientY+12,text:`${Math.round(Qe)} × ${Math.round(Pe)}`})}},Bt=nt=>{window.removeEventListener("mousemove",_t),window.removeEventListener("mouseup",Bt),L(null),W(null),K.current=null,d==null||d(!1);const H=St[i];let te,_e,we,Qe;Ue?(te=Math.min(Ze,mt),_e=Math.min(dt,lt)+Je,we=Math.max(al,Math.abs(mt-Ze)),Qe=Math.max(al,Math.abs(lt-dt))):(we=H.width,Qe=H.height,te=Ze-we/2,_e=dt+Je-Qe/2),te=Math.max(0,te),_e=Math.max(0,_e);const Pe={id:Hy(),type:i,x:te,y:_e,width:we,height:Qe,scrollY:Je,timestamp:Date.now()},Be=[...t,Pe];n(Be),M(new Set([Pe.id])),a(null)};window.addEventListener("mousemove",_t),window.addEventListener("mouseup",Bt)}else{q.shiftKey||M(new Set),K.current="select";let Ue=!1;const mt=_t=>{const Bt=Math.abs(_t.clientX-Ze),nt=Math.abs(_t.clientY-dt);if((Bt>4||nt>4)&&(Ue=!0),Ue){const H=Math.min(Ze,_t.clientX),te=Math.min(dt,_t.clientY);V({x:H,y:te,w:Math.abs(_t.clientX-Ze),h:Math.abs(_t.clientY-dt)})}},lt=_t=>{if(window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",lt),K.current=null,Ue){const Bt=Math.min(Ze,_t.clientX),nt=Math.min(dt,_t.clientY)+Je,H=Math.abs(_t.clientX-Ze),te=Math.abs(_t.clientY-dt),_e=new Set(q.shiftKey?k:new Set);for(const we of t)we.y-Je,we.x+we.width>Bt&&we.x<Bt+H&&we.y+we.height>nt&&we.y<nt+te&&_e.add(we.id);M(_e)}V(null)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",lt)}},[i,p,t,n,k]),Ne=y.useCallback((q,Me)=>{var Pe;if(q.button!==0)return;const Je=q.target;if(Je.closest(`.${De.handle}`)||Je.closest(`.${De.deleteButton}`))return;q.preventDefault(),q.stopPropagation();let Ze;q.shiftKey?(Ze=new Set(k),Ze.has(Me)?Ze.delete(Me):Ze.add(Me)):k.has(Me)?Ze=new Set(k):Ze=new Set([Me]),M(Ze),(Ze.size!==k.size||[...Ze].some(Be=>!k.has(Be)))&&((Pe=N.current)==null||Pe.call(N,Ze,q.shiftKey));const Ue=q.clientX,mt=q.clientY,lt=new Map;for(const Be of t)Ze.has(Be.id)&&lt.set(Be.id,{x:Be.x,y:Be.y});K.current="move",d==null||d(!0);let _t=!1,Bt=!1,nt=t,H=0,te=0;const _e=new Map;for(const Be of t)lt.has(Be.id)&&_e.set(Be.id,{w:Be.width,h:Be.height});const we=Be=>{var ln;const gt=Be.clientX-Ue,Ve=Be.clientY-mt;if((Math.abs(gt)>2||Math.abs(Ve)>2)&&(_t=!0),!_t)return;if(Be.altKey&&!Bt){Bt=!0;const ut=[];for(const Ft of t)lt.has(Ft.id)&&ut.push({...Ft,id:Hy(),timestamp:Date.now()});nt=[...t,...ut]}let Ot=1/0,qe=1/0,Xe=-1/0,jt=-1/0;for(const[ut,Ft]of lt){const jn=_e.get(ut);jn&&(Ot=Math.min(Ot,Ft.x+gt),qe=Math.min(qe,Ft.y+Ve),Xe=Math.max(Xe,Ft.x+gt+jn.w),jt=Math.max(jt,Ft.y+Ve+jn.h))}const Rt={x:Ot,y:qe,width:Xe-Ot,height:jt-qe},{dx:Vt,dy:Ge,guides:Lt}=Py(Rt,nt,new Set(lt.keys()),void 0,g);Z(Lt);const Tt=gt+Vt,yt=Ve+Ge;H=Tt,te=yt,n(nt.map(ut=>{const Ft=lt.get(ut.id);return Ft?{...ut,x:Math.max(0,Ft.x+Tt),y:Math.max(0,Ft.y+yt)}:ut})),(ln=ne.current)==null||ln.call(ne,Tt,yt)},Qe=()=>{var Be;window.removeEventListener("mousemove",we),window.removeEventListener("mouseup",Qe),K.current=null,d==null||d(!1),Z([]),(Be=re.current)==null||Be.call(re,H,te,_t)};window.addEventListener("mousemove",we),window.addEventListener("mouseup",Qe)},[k,t,n,d]),at=y.useCallback((q,Me,Je)=>{q.preventDefault(),q.stopPropagation();const Ze=t.find(_e=>_e.id===Me);if(!Ze)return;M(new Set([Me])),K.current="resize",d==null||d(!0);const dt=q.clientX,Ue=q.clientY,mt=Ze.width,lt=Ze.height,_t=Ze.x,Bt=Ze.y,nt={left:Je.includes("w"),right:Je.includes("e"),top:Je.includes("n"),bottom:Je.includes("s")},H=_e=>{const we=_e.clientX-dt,Qe=_e.clientY-Ue;let Pe=mt,Be=lt,gt=_t,Ve=Bt;Je.includes("e")&&(Pe=Math.max(al,mt+we)),Je.includes("w")&&(Pe=Math.max(al,mt-we),gt=_t+mt-Pe),Je.includes("s")&&(Be=Math.max(al,lt+Qe)),Je.includes("n")&&(Be=Math.max(al,lt-Qe),Ve=Bt+lt-Be);const Ot={x:gt,y:Ve,width:Pe,height:Be},{dx:qe,dy:Xe,guides:jt}=Py(Ot,pe.current,new Set([Me]),nt,g);Z(jt),qe!==0&&(nt.right?Pe+=qe:nt.left&&(gt+=qe,Pe-=qe)),Xe!==0&&(nt.bottom?Be+=Xe:nt.top&&(Ve+=Xe,Be-=Xe)),n(pe.current.map(Rt=>Rt.id===Me?{...Rt,x:gt,y:Ve,width:Pe,height:Be}:Rt)),W({x:_e.clientX+12,y:_e.clientY+12,text:`${Math.round(Pe)} × ${Math.round(Be)}`})},te=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",te),W(null),K.current=null,d==null||d(!1),Z([])};window.addEventListener("mousemove",H),window.addEventListener("mouseup",te)},[t,n,d]),rt=y.useCallback(q=>{K.current=null,$(Me=>{const Je=new Set(Me);return Je.add(q),Je}),M(Me=>{const Je=new Set(Me);return Je.delete(q),Je}),Pt(()=>{n(pe.current.filter(Me=>Me.id!==q)),$(Me=>{const Je=new Set(Me);return Je.delete(q),Je})},180)},[n]),It={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Zt=y.useCallback(q=>{const Me=t.find(Je=>Je.id===q);Me&&(Q.current=!!Me.text,ie(q),Re(!1))},[t]),Ce=y.useCallback(()=>{ae&&(Re(!0),Pt(()=>{ie(null),Re(!1)},150))},[ae]);y.useEffect(()=>{u&&ae&&Ce()},[u]);const Ee=y.useCallback(q=>{ae&&(n(t.map(Me=>Me.id===ae?{...Me,text:q.trim()||void 0}:Me)),Ce())},[ae,t,n,Ce]),vt=typeof window<"u"?window.scrollY:0,Ht=["nw","ne","se","sw"],wt=j?"#f97316":"#3c82f7",Ut=[{dir:"n",cls:De.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:wt})})},{dir:"e",cls:De.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:wt})})},{dir:"s",cls:De.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:wt})})},{dir:"w",cls:De.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:wt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:G,className:`${De.overlay} ${c?"":De.light} ${i?De.placing:""} ${p?De.passthrough:""} ${u?De.overlayExiting:""} ${j?De.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:$e,children:t.map(q=>{var dt;const Me=k.has(q.id),Je=((dt=Gi[q.type])==null?void 0:dt.label)||q.type,Ze=q.y-vt;return l.jsxs("div",{"data-design-placement":q.id,className:`${De.placement} ${Me?De.selected:""} ${ce.has(q.id)?De.exiting:""}`,style:{left:q.x,top:Ze,width:q.width,height:q.height,position:"fixed"},onMouseDown:Ue=>Ne(Ue,q.id),onDoubleClick:()=>Zt(q.id),children:[l.jsx("span",{className:De.placementLabel,children:Je}),l.jsx("span",{className:`${De.placementAnnotation} ${q.text?De.annotationVisible:""}`,children:(q.text&&oe.current.set(q.id,q.text),q.text||oe.current.get(q.id)||"")}),l.jsx("div",{className:De.placementContent,children:l.jsx(H4,{type:q.type,width:q.width,height:q.height,text:q.text})}),l.jsx("div",{className:De.deleteButton,onMouseDown:Ue=>Ue.stopPropagation(),onClick:()=>rt(q.id),children:"✕"}),Ht.map(Ue=>l.jsx("div",{className:`${De.handle} ${De[`handle${Ue.charAt(0).toUpperCase()}${Ue.slice(1)}`]}`,onMouseDown:mt=>at(mt,q.id,Ue)},Ue)),Ut.map(({dir:Ue,cls:mt,arrow:lt})=>l.jsx("div",{className:`${De.edgeHandle} ${mt}`,onMouseDown:_t=>at(_t,q.id,Ue),children:lt},Ue))]},q.id)})}),ae&&(()=>{var Bt,nt;const q=t.find(H=>H.id===ae);if(!q)return null;const Me=q.y-vt,Je=q.x+q.width/2,Ze=Me-8,dt=Me+q.height+8,Ue=Ze>200,mt=dt<window.innerHeight-100,lt=Math.max(160,Math.min(window.innerWidth-160,Je));let _t;return Ue?_t={left:lt,bottom:window.innerHeight-Ze}:mt?_t={left:lt,top:dt}:_t={left:lt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:((Bt=Gi[q.type])==null?void 0:Bt.label)||q.type,placeholder:It[q.type]||"Label or content text",initialValue:(nt=q.text)!=null?nt:"",submitLabel:Q.current?"Save":"Set",onSubmit:Ee,onCancel:Ce,onDelete:Q.current?()=>{Ee("")}:void 0,isExiting:ke,lightMode:!c,style:_t})})(),z&&l.jsx("div",{className:De.drawBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),D&&l.jsx("div",{className:De.selectBox,style:{left:D.x,top:D.y,width:D.w,height:D.h},"data-feedback-toolbar":!0}),P&&l.jsx("div",{className:De.sizeIndicator,style:{left:P.x,top:P.y},"data-feedback-toolbar":!0,children:P.text}),U.map((q,Me)=>l.jsx("div",{className:De.guideLine,style:q.axis==="x"?{position:"fixed",left:q.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:q.pos-vt,right:0,height:1},"data-feedback-toolbar":!0},`${q.axis}-${q.pos}-${Me}`))]})}function W4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?De.fadeTop:""} ${i?De.fadeBottom:""}`}var B="currentColor",Te="0.5";function F4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:B,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:B,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:B,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:B,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:B,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:B,strokeWidth:Te})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:B,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:B,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:B,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:B,strokeWidth:Te})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:B,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:B,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:B,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:B,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:B,strokeWidth:Te,fill:B,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:Te})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:B,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:B,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:B,strokeWidth:Te})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:B,strokeWidth:Te,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:B,strokeWidth:Te,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:B,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:B,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:B,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:B,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:B,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:B,strokeWidth:Te}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:B,strokeWidth:Te,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:B,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:B,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:B,strokeWidth:Te})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:B,strokeWidth:Te})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:B,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:B,strokeWidth:Te,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:B,strokeWidth:Te}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:B,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:B,strokeWidth:Te}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:B,strokeWidth:Te}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:B,strokeWidth:Te})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:B,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:B,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:B,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:B,opacity:".15",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:B,strokeWidth:Te})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:B,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:B,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:B,strokeWidth:Te})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:B,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:B,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:B,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:B,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:B,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:B,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:B,strokeWidth:Te})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:B,strokeWidth:Te,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:B,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:B,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:B,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:B,strokeWidth:Te})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:B,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:B,opacity:".2",stroke:B,strokeWidth:Te}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:B,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:B,strokeWidth:Te}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:B,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:B,strokeWidth:Te})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:B,strokeWidth:Te,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:B,strokeWidth:Te,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:B,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:B,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:B,strokeWidth:Te,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:B,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:B,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:B,opacity:".15",stroke:B,strokeWidth:Te})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:B,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:B,opacity:".2",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:B,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:B,strokeWidth:Te,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:B,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:B,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:B,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:B,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:B,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:B,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:B,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:B,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:B,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:B,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:B,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:B,strokeWidth:Te})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:B,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:B,strokeWidth:Te,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:B,strokeWidth:Te})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:B,strokeWidth:Te}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:B,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:B,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:B,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:B,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:B,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:Te})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:B,strokeWidth:Te,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:B,strokeWidth:Te}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:B,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:B,strokeWidth:Te})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:B,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:B,strokeWidth:Te,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:B,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:B,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:B,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:B,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:B,opacity:".08",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:B,strokeWidth:Te,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:B,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:B,strokeWidth:Te,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:B,strokeWidth:Te,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:B,strokeWidth:Te,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:B,strokeWidth:Te,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:B,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:B,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:B,strokeWidth:Te,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:B,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:B,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:B,strokeWidth:Te}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:B,opacity:".2"})]});default:return null}}function X4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${De.placeScroll} ${c||""}`,children:Qx.map(d=>l.jsxs("div",{className:De.paletteSection,children:[l.jsx("div",{className:De.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${De.paletteItem} ${t===h.type?De.active:""} ${u?De.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:De.paletteItemIcon,children:l.jsx(F4,{type:h.type})}),l.jsx("span",{className:De.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function q4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Pt(()=>a(null),250)}else g.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:De.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${De.rollingNum} ${d==="up"?De.exitUp:De.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${De.rollingNum} ${d==="up"?De.enterUp:De.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:De.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${De.rollingNum} ${d==="up"?De.exitUp:De.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${De.rollingNum} ${d==="up"?De.enterUp:De.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function G4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[j,k]=y.useState(!1),[M,z]=y.useState("exit"),[L,D]=y.useState(!1),[V,P]=y.useState(!0),W=y.useRef(0),U=y.useRef(""),Z=y.useRef(0),ae=y.useRef(),ie=y.useRef(null),[ke,Re]=y.useState("");y.useEffect(()=>(u?(k(!0),clearTimeout(ae.current),cancelAnimationFrame(Z.current),Z.current=ul(()=>{Z.current=ul(()=>{z("enter")})})):(cancelAnimationFrame(Z.current),z("exit"),clearTimeout(ae.current),ae.current=Pt(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(Z.current)),[u]);const Q=h>0||a>0,ce=h+a;return ce>0&&(W.current=ce,U.current=_?ce===1?"Component":"Components":ce===1?"Change":"Changes"),y.useEffect(()=>{if(Q)L?P(!1):(P(!0),D(!0),ul(()=>{ul(()=>{P(!1)})}));else{P(!0);const $=Pt(()=>D(!1),300);return()=>clearTimeout($)}},[Q]),y.useEffect(()=>{if(!j)return;const $=ie.current;if(!$)return;const oe=()=>Re(W4($));oe(),$.addEventListener("scroll",oe,{passive:!0});const G=new ResizeObserver(oe);return G.observe($),()=>{$.removeEventListener("scroll",oe),G.disconnect()}},[j]),j?l.jsxs("div",{className:`${De.palette} ${De[M]} ${i?"":De.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:$=>$.stopPropagation(),onMouseDown:$=>$.stopPropagation(),onTransitionEnd:$=>{$.target===$.currentTarget&&(u||(clearTimeout(ae.current),k(!1),z("exit"),d==null||d()))},children:[l.jsxs("div",{className:De.paletteHeader,children:[l.jsx("div",{className:De.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:De.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${De.canvasToggle} ${_?De.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:De.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:De.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${De.wireframePurposeWrap} ${_?"":De.collapsed}`,children:l.jsx("div",{className:De.wireframePurposeInner,children:l.jsx("textarea",{className:De.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:$=>w($.target.value),rows:2})})}),l.jsx(X4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:ie,fadeClass:ke,blankCanvas:_}),L&&l.jsx("div",{className:`${De.paletteFooterWrap} ${V?De.footerHidden:""}`,children:l.jsx("div",{className:De.paletteFooterInner,children:l.jsx("div",{className:De.paletteFooterInnerContent,children:l.jsxs("div",{className:De.paletteFooter,children:[l.jsx("span",{className:De.paletteFooterCount,children:l.jsx(q4,{value:W.current,suffix:U.current})}),l.jsx("button",{className:De.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function pl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Go(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=pl(i)}return null}function K4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=pl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ml(t){var a,c,u,d,h,p,g,_;const n=K4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Go(t,"svg");if(x){const b=pl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ml(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=pl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function ac(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function qu(t){const n=pl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));j&&(w=`.${j}`)}if(x==="button"||x==="a"){const j=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(j)return`${x}${w} "${j}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function rc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Zx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Q4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Z4=new Set(["input","textarea","select"]),J4=new Set(["img","video","canvas","svg"]),e6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Gu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;Q4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Z4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:J4.has(a)?c=["width","height","objectFit","borderRadius"]:e6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Zx.has(h)&&(i[u]=h)}return i}var t6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of t6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Zx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function n6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=pl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var s6=new Set(["nav","header","main","section","article","footer","aside"]),Dm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Uy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},o6=new Set(["script","style","noscript","link","meta"]),i6=40;function Jx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Dr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Dr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Dm[a])return Dm[a];if(Uy[n])return Uy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ml(t);return u.charAt(0).toUpperCase()+u.slice(1)}function eb(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function tb(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function a6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(o6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<i6)return;const g=s6.has(d),_=c.getAttribute("role")&&Dm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,w=Jx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Dr(c),role:c.getAttribute("role"),className:eb(c),textSnippet:tb(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function r6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Jx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Dr(t),role:t.getAttribute("role"),className:eb(t),textSnippet:tb(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Vy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Yy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Wy=16,ed=5;function Fy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const W of n)i.has(W.id)||b.push(W.currentRect);a&&b.push(...a);for(const W of b){const U=W.x,Z=W.x+W.width,ae=W.x+W.width/2,ie=W.y,ke=W.y+W.height,Re=W.y+W.height/2;for(const Q of[d,h,p])for(const ce of[U,Z,ae]){const $=ce-Q;Math.abs($)<ed&&Math.abs($)<Math.abs(c)&&(c=$)}for(const Q of[g,_,x])for(const ce of[ie,ke,Re]){const $=ce-Q;Math.abs($)<ed&&Math.abs($)<Math.abs(u)&&(u=$)}}const w=Math.abs(c)<ed?c:0,S=Math.abs(u)<ed?u:0,j=[],k=new Set,M=d+w,z=h+w,L=p+w,D=g+S,V=_+S,P=x+S;for(const W of b){const U=W.x,Z=W.x+W.width,ae=W.x+W.width/2,ie=W.y,ke=W.y+W.height,Re=W.y+W.height/2;for(const Q of[U,ae,Z])for(const ce of[M,L,z])if(Math.abs(ce-Q)<.5){const $=`x:${Math.round(Q)}`;k.has($)||(k.add($),j.push({axis:"x",pos:Q}))}for(const Q of[ie,Re,ke])for(const ce of[D,P,V])if(Math.abs(ce-Q)<.5){const $=`y:${Math.round(Q)}`;k.has($)||(k.add($),j.push({axis:"y",pos:Q}))}}return{dx:w,dy:S,guides:j}}var l6=new Set(["script","style","noscript","link","meta","br","hr"]);function Xy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(l6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Wy&&i.height>=Wy)return n;n=n.parentElement}return null}function c6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,j]=y.useState(new Set),[k,M]=y.useState(!1),z=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==z.current&&(z.current=x,b.length>0&&M(!0))},[x,b.length]);const L=y.useRef(p);y.useEffect(()=>{p!==L.current&&(L.current=p,j(new Set))},[p]);const[D,V]=y.useState(null),[P,W]=y.useState(!1),U=y.useRef(!1),Z=y.useCallback(H=>{const te=b.find(_e=>_e.id===H);te&&(U.current=!!te.note,V(H),W(!1))},[b]),ae=y.useCallback(()=>{D&&(W(!0),Pt(()=>{V(null),W(!1)},150))},[D]),ie=y.useCallback(H=>{D&&(n({...t,sections:b.map(te=>te.id===D?{...te,note:H.trim()||void 0}:te)}),ae())},[D,b,t,n,ae]);y.useEffect(()=>{a&&D&&ae()},[a]);const[ke,Re]=y.useState(new Set),Q=y.useRef(new Map),[ce,$]=y.useState(null),[oe,G]=y.useState(null),[K,pe]=y.useState([]),[N,ne]=y.useState(0),re=y.useRef(null),fe=y.useRef(new Set),Ae=y.useRef(new Map),[$e,Ne]=y.useState(new Map),[at,rt]=y.useState(new Map),It=y.useRef(new Set),Zt=y.useRef(new Map),Ce=y.useRef(h);Ce.current=h;const Ee=y.useRef(g);Ee.current=g;const vt=y.useRef(_);vt.current=_,y.useEffect(()=>{u&&j(new Set)},[u]);const[Ht,wt]=y.useState(()=>!t.sections.some(H=>{const te=H.originalRect,_e=H.currentRect;return Math.abs(te.x-_e.x)>1||Math.abs(te.y-_e.y)>1||Math.abs(te.width-_e.width)>1||Math.abs(te.height-_e.height)>1}));y.useEffect(()=>{if(!Ht){const H=Pt(()=>wt(!0),380);return()=>clearTimeout(H)}},[]);const Ut=y.useRef(new Set);y.useEffect(()=>{Ut.current=new Set(b.map(H=>H.selector))},[b]),y.useEffect(()=>{const H=()=>ne(window.scrollY);return H(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H)}},[]),y.useEffect(()=>{const H=te=>{if(re.current){$(null);return}const _e=document.elementFromPoint(te.clientX,te.clientY);if(!_e){$(null);return}if(_e.closest("[data-feedback-toolbar]")){$(null);return}if(_e.closest("[data-design-placement]")){$(null);return}if(_e.closest("[data-annotation-popup]")){$(null);return}const we=Xy(_e);if(!we){$(null);return}for(const Pe of Ut.current)try{const Be=document.querySelector(Pe);if(Be&&(Be===we||we.contains(Be))){$(null);return}}catch{}const Qe=we.getBoundingClientRect();$({x:Qe.x,y:Qe.y,w:Qe.width,h:Qe.height})};return document.addEventListener("mousemove",H,{passive:!0}),()=>document.removeEventListener("mousemove",H)},[b]),y.useEffect(()=>{const H=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=H}},[]),y.useEffect(()=>{const H=te=>{var Be,gt,Ve,Ot;if(re.current||te.button!==0)return;const _e=te.target;if(!_e||_e.closest("[data-feedback-toolbar]")||_e.closest("[data-design-placement]")||_e.closest("[data-annotation-popup]"))return;const we=Xy(_e);let Qe=!1;if(we)for(const qe of Ut.current)try{const Xe=document.querySelector(qe);if(Xe&&(Xe===we||we.contains(Xe))){Qe=!0;break}}catch{}const Pe=!!(te.shiftKey||te.metaKey||te.ctrlKey);if(we&&!Qe){te.preventDefault(),te.stopPropagation();const qe=r6(we),Xe=[...b,qe],jt=[...t.originalOrder,qe.id];n({...t,sections:Xe,originalOrder:jt});const Rt=new Set([qe.id]);j(Rt),(Be=Ce.current)==null||Be.call(Ce,Rt,Pe),$(null);const Vt=te.clientX,Ge=te.clientY,Lt={x:qe.currentRect.x,y:qe.currentRect.y};qe.originalRect;let Tt=!1,yt=0,ln=0;re.current="move";const ut=jn=>{var un;const An=jn.clientX-Vt,Mn=jn.clientY-Ge;if(!Tt&&(Math.abs(An)>2||Math.abs(Mn)>2)&&(Tt=!0),!Tt)return;const Gn={x:Lt.x+An,y:Lt.y+Mn,width:qe.currentRect.width,height:qe.currentRect.height},Kn=Fy(Gn,Xe,new Set([qe.id]),d);pe(Kn.guides);const gs=An+Kn.dx,Dn=Mn+Kn.dy;yt=gs,ln=Dn;const Ln=document.querySelector(`[data-rearrange-section="${qe.id}"]`);Ln&&(Ln.style.transform=`translate(${gs}px, ${Dn}px)`),Ne(new Map([[qe.id,{x:Lt.x+gs,y:Lt.y+Dn,width:qe.currentRect.width,height:qe.currentRect.height}]])),(un=Ee.current)==null||un.call(Ee,gs,Dn)},Ft=()=>{var An;window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",Ft),re.current=null,pe([]),Ne(new Map);const jn=document.querySelector(`[data-rearrange-section="${qe.id}"]`);jn&&(jn.style.transform=""),Tt&&n({...t,sections:Xe.map(Mn=>Mn.id===qe.id?{...Mn,currentRect:{...Mn.currentRect,x:Math.max(0,Lt.x+yt),y:Math.max(0,Lt.y+ln)}}:Mn),originalOrder:jt}),(An=vt.current)==null||An.call(vt,yt,ln,Tt)};window.addEventListener("mousemove",ut),window.addEventListener("mouseup",Ft)}else if(Qe&&we){te.preventDefault();for(const qe of b)try{const Xe=document.querySelector(qe.selector);if(Xe&&Xe===we){const jt=new Set([qe.id]);j(jt),(gt=Ce.current)==null||gt.call(Ce,jt,Pe);return}}catch{}Pe||(j(new Set),(Ve=Ce.current)==null||Ve.call(Ce,new Set,!1))}else Pe||(j(new Set),(Ot=Ce.current)==null||Ot.call(Ce,new Set,!1))};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[b,t,n]),y.useEffect(()=>{const H=te=>{const _e=te.target;if(!(_e.tagName==="INPUT"||_e.tagName==="TEXTAREA"||_e.isContentEditable)){if((te.key==="Backspace"||te.key==="Delete")&&S.size>0){te.preventDefault();const we=new Set(S);Re(Qe=>{const Pe=new Set(Qe);for(const Be of we)Pe.add(Be);return Pe}),j(new Set),Pt(()=>{const Qe=w.current;n({...Qe,sections:Qe.sections.filter(Pe=>!we.has(Pe.id)),originalOrder:Qe.originalOrder.filter(Pe=>!we.has(Pe))}),Re(Pe=>{const Be=new Set(Pe);for(const gt of we)Be.delete(gt);return Be})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(te.key)&&S.size>0){te.preventDefault();const we=te.shiftKey?20:1,Qe=te.key==="ArrowLeft"?-we:te.key==="ArrowRight"?we:0,Pe=te.key==="ArrowUp"?-we:te.key==="ArrowDown"?we:0;n({...t,sections:b.map(Be=>S.has(Be.id)?{...Be,currentRect:{...Be.currentRect,x:Math.max(0,Be.currentRect.x+Qe),y:Math.max(0,Be.currentRect.y+Pe)}}:Be)});return}te.key==="Escape"&&S.size>0&&j(new Set)}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[S,b,t,n]);const q=y.useCallback((H,te)=>{var Vt;if(H.button!==0)return;const _e=H.target;if(_e.closest(`.${De.handle}`)||_e.closest(`.${De.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let we;H.shiftKey||H.metaKey||H.ctrlKey?(we=new Set(S),we.has(te)?we.delete(te):we.add(te)):S.has(te)?we=new Set(S):we=new Set([te]),j(we),(we.size!==S.size||[...we].some(Ge=>!S.has(Ge)))&&((Vt=Ce.current)==null||Vt.call(Ce,we,!!(H.shiftKey||H.metaKey||H.ctrlKey)));const Pe=H.clientX,Be=H.clientY,gt=new Map;for(const Ge of b)we.has(Ge.id)&&gt.set(Ge.id,{x:Ge.currentRect.x,y:Ge.currentRect.y});re.current="move";let Ve=!1,Ot=0,qe=0;const Xe=new Map;for(const Ge of b)if(we.has(Ge.id)){const Lt=document.querySelector(`[data-rearrange-section="${Ge.id}"]`);Xe.set(Ge.id,{outlineEl:Lt,curW:Ge.currentRect.width,curH:Ge.currentRect.height})}const jt=Ge=>{var Kn;const Lt=Ge.clientX-Pe,Tt=Ge.clientY-Be;if(Lt===0&&Tt===0)return;Ve=!0;let yt=1/0,ln=1/0,ut=-1/0,Ft=-1/0;for(const[gs,{curW:Dn,curH:Ln}]of Xe){const un=gt.get(gs);if(!un)continue;const pn=un.x+Lt,ot=un.y+Tt;yt=Math.min(yt,pn),ln=Math.min(ln,ot),ut=Math.max(ut,pn+Dn),Ft=Math.max(Ft,ot+Ln)}const jn=Fy({x:yt,y:ln,width:ut-yt,height:Ft-ln},b,we,d),An=Lt+jn.dx,Mn=Tt+jn.dy;Ot=An,qe=Mn,pe(jn.guides);for(const[,{outlineEl:gs}]of Xe)gs&&(gs.style.transform=`translate(${An}px, ${Mn}px)`);const Gn=new Map;for(const[gs,{curW:Dn,curH:Ln}]of Xe){const un=gt.get(gs);if(un){const pn={x:Math.max(0,un.x+An),y:Math.max(0,un.y+Mn),width:Dn,height:Ln};Gn.set(gs,pn)}}Ne(Gn),(Kn=Ee.current)==null||Kn.call(Ee,An,Mn)},Rt=Ge=>{var Lt,Tt;window.removeEventListener("mousemove",jt),window.removeEventListener("mouseup",Rt),re.current=null,pe([]),Ne(new Map);for(const[,{outlineEl:yt}]of Xe)yt&&(yt.style.transform="");if(Ve){const yt=Ge.clientX-Pe,ln=Ge.clientY-Be;if(Math.abs(yt)<5&&Math.abs(ln)<5)n({...t,sections:b.map(ut=>{const Ft=gt.get(ut.id);return Ft?{...ut,currentRect:{...ut.currentRect,x:Ft.x,y:Ft.y}}:ut})});else{n({...t,sections:b.map(ut=>{const Ft=gt.get(ut.id);return Ft?{...ut,currentRect:{...ut.currentRect,x:Math.max(0,Ft.x+Ot),y:Math.max(0,Ft.y+qe)}}:ut})}),(Lt=vt.current)==null||Lt.call(vt,Ot,qe,!0);return}}(Tt=vt.current)==null||Tt.call(vt,0,0,!1)};window.addEventListener("mousemove",jt),window.addEventListener("mouseup",Rt)},[S,b,t,n]),Me=y.useCallback((H,te,_e)=>{H.preventDefault(),H.stopPropagation();const we=b.find(jt=>jt.id===te);if(!we)return;j(new Set([te])),re.current="resize";const Qe=H.clientX,Pe=H.clientY,Be={...we.currentRect};we.originalRect;const gt=Be.width/Be.height;let Ve={...Be};const Ot=document.querySelector(`[data-rearrange-section="${te}"]`),qe=jt=>{const Rt=jt.clientX-Qe,Vt=jt.clientY-Pe;let Ge=Be.x,Lt=Be.y,Tt=Be.width,yt=Be.height;if(_e.includes("e")&&(Tt=Math.max(Ju,Be.width+Rt)),_e.includes("w")&&(Tt=Math.max(Ju,Be.width-Rt),Ge=Be.x+Be.width-Tt),_e.includes("s")&&(yt=Math.max(Ju,Be.height+Vt)),_e.includes("n")&&(yt=Math.max(Ju,Be.height-Vt),Lt=Be.y+Be.height-yt),jt.shiftKey)if(_e.length===2){const ut=Math.abs(Tt-Be.width),Ft=Math.abs(yt-Be.height);ut>Ft?yt=Tt/gt:Tt=yt*gt,_e.includes("w")&&(Ge=Be.x+Be.width-Tt),_e.includes("n")&&(Lt=Be.y+Be.height-yt)}else _e==="e"||_e==="w"?yt=Tt/gt:Tt=yt*gt,_e==="w"&&(Ge=Be.x+Be.width-Tt),_e==="n"&&(Lt=Be.y+Be.height-yt);Ve={x:Ge,y:Lt,width:Tt,height:yt},Ot&&(Ot.style.left=`${Ge}px`,Ot.style.top=`${Lt-N}px`,Ot.style.width=`${Tt}px`,Ot.style.height=`${yt}px`),G({x:jt.clientX+12,y:jt.clientY+12,text:`${Math.round(Tt)} × ${Math.round(yt)}`}),Ne(new Map([[te,Ve]]))},Xe=()=>{window.removeEventListener("mousemove",qe),window.removeEventListener("mouseup",Xe),G(null),re.current=null,Ne(new Map),n({...t,sections:b.map(jt=>jt.id===te?{...jt,currentRect:Ve}:jt)})};window.addEventListener("mousemove",qe),window.addEventListener("mouseup",Xe)},[b,t,n,N]),Je=y.useCallback(H=>{Re(te=>{const _e=new Set(te);return _e.add(H),_e}),j(te=>{const _e=new Set(te);return _e.delete(H),_e}),Pt(()=>{const te=w.current;n({...te,sections:te.sections.filter(_e=>_e.id!==H),originalOrder:te.originalOrder.filter(_e=>_e!==H)}),Re(_e=>{const we=new Set(_e);return we.delete(H),we})},180)},[n]),Ze=H=>{const te=H.originalRect,_e=H.currentRect;return Math.abs(te.x-_e.x)>1||Math.abs(te.y-_e.y)>1||Math.abs(te.width-_e.width)>1||Math.abs(te.height-_e.height)>1},dt=H=>{const te=H.originalRect,_e=H.currentRect;return Math.abs(te.x-_e.x)>1||Math.abs(te.y-_e.y)>1},Ue=H=>{const te=H.originalRect,_e=H.currentRect;return Math.abs(te.width-_e.width)>1||Math.abs(te.height-_e.height)>1};for(const H of b)Ae.current.has(H.id)||(dt(H)?Ae.current.set(H.id,"move"):Ue(H)&&Ae.current.set(H.id,"resize"));for(const H of Ae.current.keys())b.some(te=>te.id===H)||Ae.current.delete(H);const mt=b.filter(H=>{try{if(ke.has(H.id)||S.has(H.id))return!0;const te=document.querySelector(H.selector);if(!te)return!1;const _e=te.getBoundingClientRect(),we=H.originalRect;return Math.abs(_e.width-we.width)+Math.abs(_e.height-we.height)<200}catch{return!1}}),lt=mt.filter(H=>Ze(H)),_t=mt.filter(H=>!Ze(H)),Bt=new Set(lt.map(H=>H.id));for(const H of fe.current)Bt.has(H)||fe.current.delete(H);const nt=[...Bt].sort().join(",");for(const H of lt)Zt.current.set(H.id,{currentRect:H.currentRect,originalRect:H.originalRect,isFixed:H.isFixed});return y.useEffect(()=>{const H=It.current;It.current=Bt;const te=new Map;for(const _e of H)if(!Bt.has(_e)){if(!b.some(Qe=>Qe.id===_e))continue;const we=Zt.current.get(_e);we&&(te.set(_e,{orig:we.originalRect,target:we.currentRect,isFixed:we.isFixed}),Zt.current.delete(_e))}if(te.size>0){rt(we=>{const Qe=new Map(we);for(const[Pe,Be]of te)Qe.set(Pe,Be);return Qe});const _e=Pt(()=>{rt(we=>{const Qe=new Map(we);for(const Pe of te.keys())Qe.delete(Pe);return Qe})},250);return()=>clearTimeout(_e)}},[nt,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${De.rearrangeOverlay} ${i?"":De.light} ${a?De.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ce&&l.jsx("div",{className:De.hoverHighlight,style:{left:ce.x,top:ce.y,width:ce.w,height:ce.h}}),_t.map(H=>{const te=H.currentRect,_e=H.isFixed?te.y:te.y-N,we=Vy,Qe=S.has(H.id);return l.jsxs("div",{"data-rearrange-section":H.id,className:`${De.sectionOutline} ${Qe?De.selected:""} ${k||a||ke.has(H.id)?De.exiting:""}`,style:{left:te.x,top:_e,width:te.width,height:te.height,borderColor:we.border,backgroundColor:we.bg,...Ht?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Pe=>q(Pe,H.id),onDoubleClick:()=>Z(H.id),children:[l.jsx("span",{className:De.sectionLabel,style:{backgroundColor:we.pill},children:H.label}),l.jsx("span",{className:`${De.sectionAnnotation} ${H.note?De.annotationVisible:""}`,children:(H.note&&Q.current.set(H.id,H.note),H.note||Q.current.get(H.id)||"")}),l.jsxs("span",{className:De.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:De.deleteButton,onMouseDown:Pe=>Pe.stopPropagation(),onClick:()=>Je(H.id),children:"✕"}),Yy.map(Pe=>l.jsx("div",{className:`${De.handle} ${De[`handle${Pe.charAt(0).toUpperCase()}${Pe.slice(1)}`]}`,onMouseDown:Be=>Me(Be,H.id,Pe)},Pe))]},H.id)}),lt.map(H=>{const te=H.currentRect,_e=H.isFixed?te.y:te.y-N,we=S.has(H.id),Qe=dt(H),Pe=Ue(H);if(u&&!we)return null;const gt=!fe.current.has(H.id);return gt&&fe.current.add(H.id),l.jsxs("div",{"data-rearrange-section":H.id,className:`${De.ghostOutline} ${we?De.selected:""} ${k||a||ke.has(H.id)?De.exiting:""}`,style:{left:te.x,top:_e,width:te.width,height:te.height,...Ht?{}:{opacity:0,animation:"none",transition:"none"},...gt?{}:{animation:"none"}},onMouseDown:Ve=>q(Ve,H.id),onDoubleClick:()=>Z(H.id),children:[l.jsx("span",{className:De.sectionLabel,style:{backgroundColor:Vy.pill},children:H.label}),l.jsx("span",{className:`${De.sectionAnnotation} ${H.note?De.annotationVisible:""}`,children:(H.note&&Q.current.set(H.id,H.note),H.note||Q.current.get(H.id)||"")}),l.jsxs("span",{className:De.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:De.deleteButton,onMouseDown:Ve=>Ve.stopPropagation(),onClick:()=>Je(H.id),children:"✕"}),Yy.map(Ve=>l.jsx("div",{className:`${De.handle} ${De[`handle${Ve.charAt(0).toUpperCase()}${Ve.slice(1)}`]}`,onMouseDown:Ot=>Me(Ot,H.id,Ve)},Ve)),l.jsx("span",{className:De.ghostBadge,children:(()=>{const Ve=Ae.current.get(H.id);if(Qe&&Pe){const[Ot,qe]=Ve==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Ot," ",l.jsxs("span",{className:De.ghostBadgeExtra,children:["& ",qe]})]})}return`Suggested ${Pe?"Resize":"Move"}`})()})]},H.id)})]}),!u&&(()=>{const H=[];for(const te of lt){const _e=$e.get(te.id);H.push({id:te.id,orig:te.originalRect,target:_e||te.currentRect,isFixed:te.isFixed,isSelected:S.has(te.id),isExiting:ke.has(te.id)})}for(const[te,_e]of $e)if(!H.some(we=>we.id===te)){const we=b.find(Qe=>Qe.id===te);we&&H.push({id:te,orig:we.originalRect,target:_e,isFixed:we.isFixed,isSelected:S.has(te)})}for(const[te,_e]of at)H.some(we=>we.id===te)||H.push({id:te,orig:_e.orig,target:_e.target,isFixed:_e.isFixed,isSelected:!1,isExiting:!0});return H.length===0?null:l.jsxs("svg",{className:`${De.connectorSvg} ${k||a?De.connectorExiting:""}`,children:[H.map(({id:te,orig:_e,target:we,isFixed:Qe,isSelected:Pe,isExiting:Be})=>{const gt=_e.x+_e.width/2,Ve=(Qe?_e.y:_e.y-N)+_e.height/2,Ot=we.x+we.width/2,qe=(Qe?we.y:we.y-N)+we.height/2,Xe=Ot-gt,jt=qe-Ve,Rt=Math.sqrt(Xe*Xe+jt*jt);if(Rt<2)return null;const Vt=Math.min(1,Rt/40),Ge=Math.min(Rt*.3,60),Lt=Rt>0?-jt/Rt:0,Tt=Rt>0?Xe/Rt:0,yt=(gt+Ot)/2+Lt*Ge,ln=(Ve+qe)/2+Tt*Ge,ut=$e.has(te),Ft=ut||Pe?1:.4,jn=ut||Pe?1:.5;return l.jsxs("g",{className:Be?De.connectorExiting:"",children:[l.jsx("path",{className:De.connectorLine,d:`M ${gt} ${Ve} Q ${yt} ${ln} ${Ot} ${qe}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ft*Vt}),l.jsx("circle",{className:De.connectorDot,cx:gt,cy:Ve,r:4*Vt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:jn*Vt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:De.connectorDot,cx:Ot,cy:qe,r:4*Vt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:jn*Vt,filter:"url(#connDotShadow)"})]},`conn-${te}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),D&&(()=>{var qe;const H=b.find(Xe=>Xe.id===D);if(!H)return null;const te=H.currentRect,_e=H.isFixed?te.y:te.y-N,we=te.x+te.width/2,Qe=_e-8,Pe=_e+te.height+8,Be=Qe>200,gt=Pe<window.innerHeight-100,Ve=Math.max(160,Math.min(window.innerWidth-160,we));let Ot;return Be?Ot={left:Ve,bottom:window.innerHeight-Qe}:gt?Ot={left:Ve,top:Pe}:Ot={left:Ve,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:H.label,placeholder:"Add a note about this section",initialValue:(qe=H.note)!=null?qe:"",submitLabel:U.current?"Save":"Set",onSubmit:ie,onCancel:ae,onDelete:U.current?()=>{ie("")}:void 0,isExiting:P,lightMode:!i,style:Ot})})(),oe&&l.jsx("div",{className:De.sizeIndicator,style:{left:oe.x,top:oe.y},"data-feedback-toolbar":!0,children:oe.text}),K.map((H,te)=>l.jsx("div",{className:De.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:H.pos-N,width:"100vw",height:1}},`${H.axis}-${H.pos}-${te}`))]})}var Nm=new Set(["script","style","noscript","link","meta","br","hr"]);function u6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Nm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Dr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Nm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:Md(h),selector:Dr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function d6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function f6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Rm(t,n){const i=n?d6(n):u6(),a=f6(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const j=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(j&&S.bottom<=a.top+5){const M=Math.round(a.top-S.bottom);(!c||M<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(j&&S.top>=a.bottom-5){const M=Math.round(S.top-a.bottom);(!u||M<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.right<=a.left+5){const M=Math.round(a.left-S.right);(!d||M<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.left>=a.right-5){const M=Math.round(S.left-a.right);(!h||M<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}}const g=window.innerWidth,_=window.innerHeight,x=m6(t,g),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=h6(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function h6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function m6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function nb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function sb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=nb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function p6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(nb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var qy=15;function Gy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function _6(t){var d;if(t.length<2)return[];const n=Gy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Gy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(w=>p.has(w)),b=x.join(", ");if(g.type!==h.type){const w=h.type==="row"?"y":"x",S=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${S}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${g.sharedEdge}`:"",j=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${j}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function ob(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Nm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Dr(h)}}}return{viewport:t,contentArea:null}}function g6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Dr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ib(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function ab(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function y6(t){const n=g6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Ky(t,n,i,a="standard"){var k,M,z,L;if(t.length===0)return"";const c=[...t].sort((D,V)=>Math.abs(D.y-V.y)<20?D.x-V.x:D.y-V.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((D,V)=>{var W;const P=((W=Gi[D.type])==null?void 0:W.label)||D.type;u+=`${V+1}. **${P}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}),u;const d=ob(n);u+=ab(d),u+=`### Components
`,c.forEach((D,V)=>{var ke;const P=((ke=Gi[D.type])==null?void 0:ke.label)||D.type,W={x:D.x,y:D.y,width:D.width,height:D.height};u+=`${V+1}. **${P}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`;const U=Rm(W),ae=sb(U,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Re of ae)u+=`   - ${Re}
`;const ie=ib(W,d);ie&&(u+=`   - CSS: ${ie}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const D of c){const V=h.find(P=>Math.abs(P.y-D.y)<30);V?V.items.push(D):h.push({y:D.y,items:[D]})}if(h.sort((D,V)=>D.y-V.y),h.forEach((D,V)=>{D.items.sort((W,U)=>W.x-U.x);const P=D.items.map(W=>{var U;return((U=Gi[W.type])==null?void 0:U.label)||W.type});if(D.items.length===1){const U=D.items[0].width>n.width*.8;u+=`- Row ${V+1} (y≈${Math.round(D.y)}): ${P[0]}${U?" — full width":""}
`}else u+=`- Row ${V+1} (y≈${Math.round(D.y)}): ${P.join(" | ")} — ${D.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let D=0;D<c.length-1;D++){const V=c[D],P=c[D+1],W=((k=Gi[V.type])==null?void 0:k.label)||V.type,U=((M=Gi[P.type])==null?void 0:M.label)||P.type,Z=Math.round(P.y-(V.y+V.height)),ae=Math.round(P.x-(V.x+V.width));Math.abs(V.y-P.y)<30?u+=`- ${W} → ${U}: \`${ae}px\` horizontal gap
`:u+=`- ${W} → ${U}: \`${Z}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let D=0;D<c.length;D++)for(let V=D+1;V<c.length;V++){const P=c[D],W=c[V],U=((z=Gi[P.type])==null?void 0:z.label)||P.type,Z=((L=Gi[W.type])==null?void 0:L.label)||W.type,ae=Math.round(W.y-(P.y+P.height)),ie=Math.round(W.x-(P.x+P.width));u+=`- ${U} ↔ ${Z}: h=\`${ie}px\` v=\`${ae}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((D,V)=>{var W;const P=((W=Gi[D.type])==null?void 0:W.label)||D.type;u+=`${V}. ${P} at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(D=>D.type==="navigation"),g=c.some(D=>D.type==="hero"),_=c.some(D=>D.type==="sidebar"),x=c.some(D=>D.type==="footer"),b=c.filter(D=>D.type==="card"),w=c.filter(D=>D.type==="form"),S=c.filter(D=>D.type==="table"),j=c.filter(D=>D.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
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
`,_){const D=c.find(V=>V.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(D.width)}px 1fr;\`
`}if(b.length>1){const D=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${D}px); gap: 16px;\`
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
`,x){const k=Rm(w,g("original")),M=Rm(S,g("current")),z=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${p6(k,{x:w.x,y:w.y},z)}
`;const L=b?{width:S.width,height:S.height}:void 0,D=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,V=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",W=sb(M,{includeLeftRight:n==="detailed"||n==="forensic"});if(W.length>0){u+=`  - Suggested position ${D}${V}: ${W[0]}
`;for(let Z=1;Z<W.length;Z++)u+=`    ${W[Z]}
`}else u+=`  - Suggested position ${D}${V}
`;const U=ib(S,p);U&&(u+=`  - CSS: ${U}
`)}const j=y6(_.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const k=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;k!==_.selector&&(u+=`  - Element: \`${k}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=_6(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Bm="feedback-annotations-",rb=7;function Td(t){return`${Bm}${t}`}function Jh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Td(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-rb*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function lb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Td(t),JSON.stringify(n))}catch{}}function x6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-rb*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Bm)){const c=a.slice(Bm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function lc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));lb(t,a)}var dp="agentation-design-";function b6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${dp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function v6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${dp}${t}`,JSON.stringify(n))}catch{}}function w6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${dp}${t}`)}catch{}}var fp="agentation-rearrange-";function S6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${fp}${t}`);return n?JSON.parse(n):null}catch{return null}}function C6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${fp}${t}`,JSON.stringify(n))}catch{}}function k6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${fp}${t}`)}catch{}}var hp="agentation-wireframe-";function j6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Zy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var cb="agentation-session-";function mp(t){return`${cb}${t}`}function M6(t){if(typeof window>"u")return null;try{return localStorage.getItem(mp(t))}catch{return null}}function em(t,n){if(!(typeof window>"u"))try{localStorage.setItem(mp(t),n)}catch{}}function T6(t){if(!(typeof window>"u"))try{localStorage.removeItem(mp(t))}catch{}}var ub=`${cb}toolbar-hidden`;function E6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(ub)==="1"}catch{return!1}}function A6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(ub,"1")}catch{}}async function tm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Jy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function rl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function e1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Ka(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var In={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},t1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),n1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],D6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function N6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=t1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...t1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...n1,...t.skipPatterns]:n1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:D6,filter:t==null?void 0:t.filter}}function R6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function B6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function L6(t,n){const i=R6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function z6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&L6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ll=null,O6=new WeakMap;function nm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function $6(){if(ll!==null)return ll;if(typeof document>"u")return!1;if(document.body&&nm(document.body))return ll=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&nm(i))return ll=!0,!0}if(document.body){for(const n of document.body.children)if(nm(n))return ll=!0,!0}return ll=!1,!1}var cc={map:O6};function I6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function P6(t){const n=I6(t);return n?t[n]:null}function xr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function H6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===In.HostComponent||n===In.HostText||n===In.HostHoistable||n===In.HostSingleton||n===In.Fragment||n===In.Mode||n===In.Profiler||n===In.DehydratedFragment||n===In.HostRoot||n===In.HostPortal||n===In.ScopeComponent||n===In.OffscreenComponent||n===In.LegacyHiddenComponent||n===In.CacheComponent||n===In.TracingMarkerComponent||n===In.Throw||n===In.ViewTransitionComponent||n===In.ActivityComponent)return null;if(n===In.ForwardRef){const u=a;if(u!=null&&u.render){const d=xr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:xr(i)}if(n===In.MemoComponent||n===In.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=xr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:xr(i)}if(n===In.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===In.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===In.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?xr(u._result):null}return n===In.SuspenseComponent||n===In.SuspenseListComponent?null:n===In.IncompleteClassComponent||n===In.IncompleteFunctionComponent||n===In.FunctionComponent||n===In.ClassComponent||n===In.IndeterminateComponent?xr(i):null}function U6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function V6(t,n){const i=N6(n),a=i.mode==="all";if(a){const p=cc.map.get(t);if(p!==void 0)return p}if(!$6()){const p={path:null,components:[]};return a&&cc.map.set(t,p),p}const c=i.mode==="smart"?B6(t):void 0,u=[];try{let p=P6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=H6(p);_&&!U6(_)&&z6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&cc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&cc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&cc.map.set(t,h),h}var uc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function Y6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Mc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function W6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Mc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Mc(i._debugOwner)};i=i.return,a++}return null}function F6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Mc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Mc(n)}}}n=n.return,i++}return null}var nd=new Map;function X6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===uc.FunctionComponent||n===uc.IndeterminateComponent)&&typeof i=="function")return i;if(n===uc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===uc.MemoComponent||n===uc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function q6(){const t=Iv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function G6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function K6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Q6(t){const n=X6(t);if(!n)return null;if(nd.has(n))return nd.get(n);const i=q6();if(!i)return nd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=G6(d.stack);h&&(c={fileName:K6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Mc(t)||void 0})}}}finally{i.set(a)}return nd.set(n,c),c}function Z6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=Q6(i);if(c)return c;i=i.return,a++}return null}function Lm(t){const n=Y6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=W6(n);if(i||(i=F6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=Z6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function J6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function eC(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Lm(i);if(c.found)return c;i=i.parentElement,a++}return Lm(t)}var tC=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,nC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=tC}var We=nC,dc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function s1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var sC=`@keyframes styles-module__markerIn___x4G8D {
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
}`,oC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=sC}var Qs=oC;function o1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:j,onContextMenu:k}){const M=(h||p)&&!g,z=M&&x==="delete",L=t.isMultiSelect,D=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",V=c?Qs.exit:u?Qs.clearing:d?"":Qs.enter,P=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Qs.marker} ${L?Qs.multiSelect:""} ${V} ${z?Qs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:z?void 0:D,animationDelay:P},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:W=>{W.stopPropagation(),c||j(t)},onContextMenu:k?W=>{x==="delete"&&(W.preventDefault(),W.stopPropagation(),c||k(t))}:void 0,children:[M?z?l.jsx(Gx,{size:L?18:16}):l.jsx(gS,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Qs.renumber:void 0,children:n+1}),h&&!g&&l.jsxs("div",{className:`${Qs.markerTooltip} ${Qs.enter}`,style:b,children:[l.jsxs("span",{className:Qs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Qs.markerNote,children:t.comment})]})]})}function iC({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Qs.marker} ${Qs.pending} ${i?Qs.multiSelect:""} ${a?Qs.exit:Qs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(iS,{size:12})})}function i1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Qs.marker} ${n?Qs.fixed:""} ${Qs.hovered} ${i?Qs.multiSelect:""} ${Qs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Gx,{size:i?12:10})})}var aC=`.styles-module__switchContainer___Ka-AB {
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
}`,rC={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=aC}var sm=rC,om=({className:t="",...n})=>l.jsxs("div",{className:`${sm.switchContainer} ${t}`,children:[l.jsx("input",{className:sm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:sm.switchThumb})]}),lC=`.styles-module__checkboxContainer___joqZk {
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
}`,cC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=lC}var sd=cC,uC=({className:t="",...n})=>l.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),dC=`.styles-module__container___w8eAF {
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
}`,fC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=dC}var a1=fC,r1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${a1.container} ${t}`,...u,children:[l.jsx(uC,{id:d,onChange:c,checked:a}),l.jsx("label",{className:a1.label,htmlFor:d,children:n}),i&&l.jsx(jr,{content:i})]})},hC=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,mC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=hC}var Ct=mC;function pC({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Ct.settingsPanel} ${h?Ct.enter:Ct.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Ct.settingsPanelContainer,children:[l.jsxs("div",{className:`${Ct.settingsPage} ${g==="automations"?Ct.slideLeft:""}`,children:[l.jsxs("div",{className:Ct.settingsHeader,children:[l.jsx("a",{className:Ct.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Ct.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Ct.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Ct.themeIconWrapper,children:l.jsx("span",{className:Ct.themeIcon,children:i?l.jsx(pS,{size:20}):l.jsx(_S,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Output Detail",l.jsx(jr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Ct.cycleButton,onClick:()=>{const S=(dc.findIndex(j=>j.value===t.outputDetail)+1)%dc.length;n({outputDetail:dc[S].value})},children:[l.jsx("span",{className:Ct.cycleButtonText,children:(b=dc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:Ct.cycleDots,children:dc.map(w=>l.jsx("span",{className:`${Ct.cycleDot} ${t.outputDetail===w.value?Ct.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop} ${c?"":Ct.settingsRowDisabled}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["React Components",l.jsx(jr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(om,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Ct.settingsRow} ${Ct.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Ct.settingsLabel,children:["Hide Until Restart",l.jsx(jr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(om,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx("div",{className:`${Ct.settingsLabel} ${Ct.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Ct.colorOptions,children:bc.map(w=>l.jsx("button",{className:`${Ct.colorOption} ${t.annotationColorId===w.id?Ct.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsx(r1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(r1,{className:Ct.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("button",{className:Ct.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Ct.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Ct.mcpNavIndicator} ${Ct[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Ct.settingsPage} ${Ct.automationsPage} ${g==="automations"?Ct.slideIn:""}`,children:[l.jsxs("button",{className:Ct.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(xS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:Ct.settingsSection,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["MCP Connection",l.jsx(jr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Ct.mcpStatusDot} ${Ct[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Ct.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ct.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Ct.divider}),l.jsxs("div",{className:`${Ct.settingsSection} ${Ct.settingsSectionGrow}`,children:[l.jsxs("div",{className:Ct.settingsRow,children:[l.jsxs("span",{className:Ct.automationHeader,children:["Webhooks",l.jsx(jr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Ct.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Ct.autoSendLabel} ${t.webhooksEnabled?Ct.active:""} ${t.webhookUrl?"":Ct.disabled}`,children:"Auto-Send"}),l.jsx(om,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Ct.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Ct.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function im(t,n="filtered"){const{name:i,path:a}=ml(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=V6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var l1=!1,am={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ia=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},bc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],_C=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...bc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};_C();function br(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function rm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function vr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=Lm(t),i=n.found?n:eC(t);if(i.found&&i.source)return J6(i.source,"path")}function gC({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var qs,fo,hi,Xo,xe,Fe,ct;const[j,k]=y.useState(!1),[M,z]=y.useState([]),[L,D]=y.useState(!0),[V,P]=y.useState(()=>E6()),[W,U]=y.useState(!1),Z=y.useRef(null);y.useEffect(()=>{const C=R=>{const O=Z.current;O&&O.contains(R.target)&&R.stopPropagation()},E=["mousedown","click","pointerdown"];return E.forEach(R=>document.body.addEventListener(R,C)),()=>{E.forEach(R=>document.body.removeEventListener(R,C))}},[]);const[ae,ie]=y.useState(!1),[ke,Re]=y.useState(!1),[Q,ce]=y.useState(null),[$,oe]=y.useState({x:0,y:0}),[G,K]=y.useState(null),[pe,N]=y.useState(!1),[ne,re]=y.useState("idle"),[fe,Ae]=y.useState(!1),[$e,Ne]=y.useState(!1),[at,rt]=y.useState(null),[It,Zt]=y.useState(null),[Ce,Ee]=y.useState([]),[vt,Ht]=y.useState(null),[wt,Ut]=y.useState(null),[q,Me]=y.useState(null),[Je,Ze]=y.useState(null),[dt,Ue]=y.useState([]),[mt,lt]=y.useState(0),[_t,Bt]=y.useState(!1),[nt,H]=y.useState(!1),[te,_e]=y.useState(!1),[we,Qe]=y.useState(!1),[Pe,Be]=y.useState(!1),[gt,Ve]=y.useState("main"),[Ot,qe]=y.useState(!1),[Xe,jt]=y.useState(!1),[Rt,Vt]=y.useState(!1),[Ge,Lt]=y.useState([]),[Tt,yt]=y.useState(null),ln=y.useRef(!1),[ut,Ft]=y.useState(!1),[jn,An]=y.useState(!1),[Mn,Gn]=y.useState(1),[Kn,gs]=y.useState("new-page"),[Dn,Ln]=y.useState(""),[un,pn]=y.useState(!1),[ot,cn]=y.useState(null),ko=y.useRef(!1),Po=y.useRef({rearrange:null,placements:[]}),Tn=y.useRef({rearrange:null,placements:[]}),[jo,Ho]=y.useState(0),[js,Mo]=y.useState(0),[_o,Us]=y.useState(0),[zn,wi]=y.useState(0),Ls=y.useRef(new Set),Ds=y.useRef(new Set),cs=y.useRef(null),To=y.useRef(),Uo=Xe&&j&&!Rt&&ut;y.useEffect(()=>{if(Uo){An(!1);const C=ul(()=>{An(!0)});return()=>cancelAnimationFrame(C)}else An(!1)},[Uo]);const ys=y.useRef(new Map),is=y.useRef(new Map),Ms=y.useRef(),[yn,On]=y.useState(!1),[dn,Qn]=y.useState([]),Qi=y.useRef(dn);Qi.current=dn;const[ei,di]=y.useState(null),go=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[ti,Ns]=y.useState(!1),Eo=y.useRef(null),[Pn,Zs]=y.useState([]),us=y.useRef({cmd:!1,shift:!1}),ds=()=>{qe(!0)},Ii=()=>{qe(!1)},Vo=()=>{ti||(Eo.current=Pt(()=>Ns(!0),850))},Zi=()=>{Eo.current&&(clearTimeout(Eo.current),Eo.current=null),Ns(!1),Ii()};y.useEffect(()=>()=>{Eo.current&&clearTimeout(Eo.current)},[]);const[Kt,Vs]=y.useState(()=>{var C;try{const E=JSON.parse((C=localStorage.getItem("feedback-toolbar-settings"))!=null?C:"");return{...am,...E,annotationColorId:bc.find(R=>R.id===E.annotationColorId)?E.annotationColorId:am.annotationColorId}}catch{return am}}),[zs,Hn]=y.useState(!0),[Si,Lo]=y.useState(!1),Js=()=>{var C;(C=Z.current)==null||C.classList.add(We.disableTransitions),Hn(E=>!E),ul(()=>{var E;(E=Z.current)==null||E.classList.remove(We.disableTransitions)})},fi=!1,yo="off",[wn,eo]=y.useState(x!=null?x:null),Ci=y.useRef(!1),[fs,xo]=y.useState(_?"connecting":"disconnected"),[sn,Ys]=y.useState(null),[ro,lo]=y.useState(!1),[hs,ni]=y.useState(null),bo=y.useRef(!1),[zo,Ws]=y.useState(new Set),[si,Yo]=y.useState(new Set),[tn,Fs]=y.useState(!1),[Rs,Bs]=y.useState(!1),[vo,Wo]=y.useState(!1),wo=y.useRef(null),Ts=y.useRef(null),So=y.useRef(null),Yn=y.useRef(null),T=y.useRef(!1),F=y.useRef(0),de=y.useRef(null),be=y.useRef(null),He=8,et=50,Dt=y.useRef(null),$t=y.useRef(null),At=y.useRef(null),Ke=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(we)Be(!0);else{qe(!1),Ve("main");const C=Pt(()=>Be(!1),0);return()=>clearTimeout(C)}},[we]);const an=j&&L&&!Xe;y.useEffect(()=>{if(an){Re(!1),ie(!0),Ws(new Set);const C=Pt(()=>{Ws(E=>{const R=new Set(E);return M.forEach(O=>R.add(O.id)),R})},350);return()=>clearTimeout(C)}else if(ae){Re(!0);const C=Pt(()=>{ie(!1),Re(!1)},250);return()=>clearTimeout(C)}},[an]),y.useEffect(()=>{H(!0),lt(window.scrollY);const C=Jh(Ke);z(C.filter(vr)),l1||(Lo(!0),l1=!0,Pt(()=>Lo(!1),750));try{const E=localStorage.getItem("feedback-toolbar-theme");E!==null&&Hn(E==="dark")}catch{}try{const E=localStorage.getItem("feedback-toolbar-position");if(E){const R=JSON.parse(E);typeof R.x=="number"&&typeof R.y=="number"&&Ys(R)}}catch{}},[Ke]),y.useEffect(()=>{nt&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Kt))},[Kt,nt]),y.useEffect(()=>{nt&&localStorage.setItem("feedback-toolbar-theme",zs?"dark":"light")},[zs,nt]);const fn=y.useRef(!1);y.useEffect(()=>{const C=fn.current;fn.current=ro,C&&!ro&&sn&&nt&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(sn))},[ro,sn,nt]),y.useEffect(()=>{if(!_||!nt||Ci.current)return;Ci.current=!0,xo("connecting"),(async()=>{try{const E=M6(Ke),R=x||E;let O=!1;if(R)try{const Y=await Jy(_,R);eo(Y.id),xo("connected"),em(Ke,Y.id),O=!0;const ue=Jh(Ke),Oe=new Set(Y.annotations.map(tt=>tt.id)),Ye=ue.filter(tt=>!Oe.has(tt.id));if(Ye.length>0){const it=`${typeof window<"u"?window.location.origin:""}${Ke}`,Nt=(await Promise.allSettled(Ye.map(bt=>rl(_,Y.id,{...bt,sessionId:Y.id,url:it})))).map((bt,ft)=>bt.status==="fulfilled"?bt.value:(console.warn("[Agentation] Failed to sync annotation:",bt.reason),Ye[ft])),qt=[...Y.annotations,...Nt];z(qt.filter(vr)),lc(Ke,qt.filter(vr),Y.id)}else z(Y.annotations.filter(vr)),lc(Ke,Y.annotations.filter(vr),Y.id)}catch(Y){console.warn("[Agentation] Could not join session, creating new:",Y),T6(Ke)}if(!O){const Y=typeof window<"u"?window.location.href:"/",ue=await tm(_,Y);eo(ue.id),xo("connected"),em(Ke,ue.id),b==null||b(ue.id);const Oe=x6(),Ye=typeof window<"u"?window.location.origin:"",tt=[];for(const[it,ht]of Oe){const Nt=ht.filter(ft=>!ft._syncedTo);if(Nt.length===0)continue;const qt=`${Ye}${it}`,bt=it===Ke;tt.push((async()=>{try{const ft=bt?ue:await tm(_,qt),ws=(await Promise.allSettled(Nt.map(Cn=>rl(_,ft.id,{...Cn,sessionId:ft.id,url:qt})))).map((Cn,Vn)=>Cn.status==="fulfilled"?Cn.value:(console.warn("[Agentation] Failed to sync annotation:",Cn.reason),Nt[Vn])).filter(vr);if(lc(it,ws,ft.id),bt){const Cn=new Set(Nt.map(Vn=>Vn.id));z(Vn=>{const Wt=Vn.filter(Gt=>!Cn.has(Gt.id));return[...ws,...Wt]})}}catch(ft){console.warn(`[Agentation] Failed to sync annotations for ${it}:`,ft)}})())}await Promise.allSettled(tt)}}catch(E){xo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",E)}})()},[_,x,nt,b,Ke]),y.useEffect(()=>{if(!_||!nt)return;const C=async()=>{try{(await fetch(`${_}/health`)).ok?xo("connected"):xo("disconnected")}catch{xo("disconnected")}};C();const E=wS(C,1e4);return()=>clearInterval(E)},[_,nt]),y.useEffect(()=>{if(!_||!nt||!wn)return;const C=new EventSource(`${_}/sessions/${wn}/events`),E=["resolved","dismissed"],R=O=>{var Y;try{const ue=JSON.parse(O.data);if(E.includes((Y=ue.payload)==null?void 0:Y.status)){const Oe=ue.payload.id,Ye=ue.payload.kind;if(Ye==="placement"){for(const[tt,it]of ys.current)if(it===Oe){ys.current.delete(tt),Lt(ht=>ht.filter(Nt=>Nt.id!==tt));break}}else if(Ye==="rearrange"){for(const[tt,it]of is.current)if(it===Oe){is.current.delete(tt),cn(ht=>{if(!ht)return null;const Nt=ht.sections.filter(qt=>qt.id!==tt);return Nt.length===0?null:{...ht,sections:Nt}});break}}else Yo(tt=>new Set(tt).add(Oe)),Pt(()=>{z(tt=>tt.filter(it=>it.id!==Oe)),Yo(tt=>{const it=new Set(tt);return it.delete(Oe),it})},150)}}catch{}};return C.addEventListener("annotation.updated",R),()=>{C.removeEventListener("annotation.updated",R),C.close()}},[_,nt,wn]),y.useEffect(()=>{if(!_||!nt)return;const C=be.current==="disconnected",E=fs==="connected";be.current=fs,C&&E&&(async()=>{try{const O=Jh(Ke);if(O.length===0)return;const ue=`${typeof window<"u"?window.location.origin:""}${Ke}`;let Oe=wn,Ye=[];if(Oe)try{Ye=(await Jy(_,Oe)).annotations}catch{Oe=null}Oe||(Oe=(await tm(_,ue)).id,eo(Oe),em(Ke,Oe));const tt=new Set(Ye.map(ht=>ht.id)),it=O.filter(ht=>!tt.has(ht.id));if(it.length>0){const Nt=(await Promise.allSettled(it.map(ft=>rl(_,Oe,{...ft,sessionId:Oe,url:ue})))).map((ft,bs)=>ft.status==="fulfilled"?ft.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ft.reason),it[bs])),bt=[...Ye,...Nt].filter(vr);z(bt),lc(Ke,bt,Oe)}}catch(O){console.warn("[Agentation] Failed to sync on reconnect:",O)}})()},[fs,_,nt,wn,Ke]);const Un=y.useCallback(()=>{W||(U(!0),Qe(!1),k(!1),Pt(()=>{A6(!0),P(!0),U(!1)},400))},[W]);y.useEffect(()=>{if(!i||!nt||!t||t.length===0||M.length>0)return;const C=[];return C.push(Pt(()=>{k(!0)},n-200)),t.forEach((E,R)=>{const O=n+R*300;C.push(Pt(()=>{const Y=document.querySelector(E.selector);if(!Y)return;const ue=Y.getBoundingClientRect(),{name:Oe,path:Ye}=ml(Y),tt={id:`demo-${Date.now()}-${R}`,x:(ue.left+ue.width/2)/window.innerWidth*100,y:ue.top+ue.height/2+window.scrollY,comment:E.comment,element:Oe,elementPath:Ye,timestamp:Date.now(),selectedText:E.selectedText,boundingBox:{x:ue.left,y:ue.top+window.scrollY,width:ue.width,height:ue.height},nearbyText:ac(Y),cssClasses:rc(Y)};z(it=>[...it,tt])},O))}),()=>{C.forEach(clearTimeout)}},[i,nt,t,n]),y.useEffect(()=>{const C=()=>{lt(window.scrollY),Bt(!0),At.current&&clearTimeout(At.current),At.current=Pt(()=>{Bt(!1)},150)};return window.addEventListener("scroll",C,{passive:!0}),()=>{window.removeEventListener("scroll",C),At.current&&clearTimeout(At.current)}},[]),y.useEffect(()=>{nt&&M.length>0?wn?lc(Ke,M,wn):lb(Ke,M):nt&&M.length===0&&localStorage.removeItem(Td(Ke))},[M,Ke,nt,wn]),y.useEffect(()=>{if(nt&&!ln.current){ln.current=!0;const C=b6(Ke);C.length>0&&Lt(C)}},[nt,Ke]),y.useEffect(()=>{nt&&ln.current&&!ut&&(Ge.length>0?v6(Ke,Ge):w6(Ke))},[Ge,Ke,nt,ut]),y.useEffect(()=>{if(nt&&!ko.current){ko.current=!0;const C=S6(Ke);if(C){const E={...C,sections:C.sections.map(R=>{var O;return{...R,currentRect:(O=R.currentRect)!=null?O:{...R.originalRect}}})};cn(E)}}},[nt,Ke]),y.useEffect(()=>{nt&&ko.current&&!ut&&(ot?C6(Ke,ot):k6(Ke))},[ot,Ke,nt,ut]);const Wn=y.useRef(!1);y.useEffect(()=>{if(nt&&!Wn.current){Wn.current=!0;const C=j6(Ke);C&&(Tn.current={rearrange:C.rearrange,placements:C.placements||[]},C.purpose&&Ln(C.purpose))}},[nt,Ke]),y.useEffect(()=>{var E,R,O,Y,ue;if(!nt||!Wn.current)return;const C=Tn.current;ut?((R=(E=ot==null?void 0:ot.sections)==null?void 0:E.length)!=null?R:0)>0||Ge.length>0||Dn?Zy(Ke,{rearrange:ot,placements:Ge,purpose:Dn}):td(Ke):((ue=(Y=(O=C.rearrange)==null?void 0:O.sections)==null?void 0:Y.length)!=null?ue:0)>0||C.placements.length>0||Dn?Zy(Ke,{rearrange:C.rearrange,placements:C.placements,purpose:Dn}):td(Ke)},[ot,Ge,Dn,ut,Ke,nt]),y.useEffect(()=>{Xe&&!ot&&cn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Xe,ot]),y.useEffect(()=>{if(!_||!wn)return;const C=ys.current,E=new Set(Ge.map(R=>R.id));for(const R of Ge){if(C.has(R.id))continue;C.set(R.id,"");const O=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;rl(_,wn,{id:R.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Place ${R.type} at (${Math.round(R.x)}, ${Math.round(R.y)}), ${R.width}×${R.height}px${R.text?` — "${R.text}"`:""}`,element:`[design:${R.type}]`,elementPath:"[placement]",timestamp:R.timestamp,url:O,intent:"change",severity:"important",kind:"placement",placement:{componentType:R.type,width:R.width,height:R.height,scrollY:R.scrollY,text:R.text}}).then(Y=>{C.has(R.id)&&C.set(R.id,Y.id)}).catch(Y=>{console.warn("[Agentation] Failed to sync placement annotation:",Y),C.delete(R.id)})}for(const[R,O]of C)E.has(R)||(C.delete(R),O&&Ka(_,O).catch(()=>{}))},[Ge,_,wn,Ke]),y.useEffect(()=>{if(!(!_||!wn))return Ms.current&&clearTimeout(Ms.current),Ms.current=Pt(()=>{const C=is.current;if(!ot||ot.sections.length===0){for(const[,O]of C)O&&Ka(_,O).catch(()=>{});C.clear();return}const E=new Set(ot.sections.map(O=>O.id)),R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;for(const O of ot.sections){const Y=O.originalRect,ue=O.currentRect;if(!(Math.abs(Y.x-ue.x)>1||Math.abs(Y.y-ue.y)>1||Math.abs(Y.width-ue.width)>1||Math.abs(Y.height-ue.height)>1)){const tt=C.get(O.id);tt&&(C.delete(O.id),Ka(_,tt).catch(()=>{}));continue}const Ye=C.get(O.id);Ye?e1(_,Ye,{comment:`Move ${O.label} section (${O.tagName}) — from (${Math.round(Y.x)},${Math.round(Y.y)}) ${Math.round(Y.width)}×${Math.round(Y.height)} to (${Math.round(ue.x)},${Math.round(ue.y)}) ${Math.round(ue.width)}×${Math.round(ue.height)}`}).catch(tt=>{console.warn("[Agentation] Failed to update rearrange annotation:",tt)}):(C.set(O.id,""),rl(_,wn,{id:O.id,x:ue.x/window.innerWidth*100,y:ue.y,comment:`Move ${O.label} section (${O.tagName}) — from (${Math.round(Y.x)},${Math.round(Y.y)}) ${Math.round(Y.width)}×${Math.round(Y.height)} to (${Math.round(ue.x)},${Math.round(ue.y)}) ${Math.round(ue.width)}×${Math.round(ue.height)}`,element:O.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:R,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:O.selector,label:O.label,tagName:O.tagName,originalRect:Y,currentRect:ue}}).then(tt=>{C.has(O.id)&&C.set(O.id,tt.id)}).catch(tt=>{console.warn("[Agentation] Failed to sync rearrange annotation:",tt),C.delete(O.id)}))}for(const[O,Y]of C)E.has(O)||(C.delete(O),Y&&Ka(_,Y).catch(()=>{}))},300),()=>{Ms.current&&clearTimeout(Ms.current)}},[ot,_,wn,Ke]);const xn=y.useRef(new Map);y.useLayoutEffect(()=>{var R;const C=(R=ot==null?void 0:ot.sections)!=null?R:[],E=new Set;if((Xe||Rt)&&j)for(const O of C){E.add(O.id);try{const Y=document.querySelector(O.selector);if(!Y)continue;if(!xn.current.has(O.id)){const ue={transform:Y.style.transform,transformOrigin:Y.style.transformOrigin,opacity:Y.style.opacity,position:Y.style.position,zIndex:Y.style.zIndex,display:Y.style.display},Oe=[];let Ye=Y.parentElement;for(;Ye&&Ye!==document.body;){const it=getComputedStyle(Ye);(it.overflow!=="visible"||it.overflowX!=="visible"||it.overflowY!=="visible")&&(Oe.push({el:Ye,overflow:Ye.style.overflow}),Ye.style.overflow="visible"),Ye=Ye.parentElement}getComputedStyle(Y).display==="inline"&&(Y.style.display="inline-block"),xn.current.set(O.id,{el:Y,origStyles:ue,ancestors:Oe}),Y.style.transformOrigin="top left",Y.style.zIndex="9999"}}catch{}}for(const[O,Y]of xn.current)if(!E.has(O)){const{el:ue,origStyles:Oe,ancestors:Ye}=Y;ue.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ue.style.transform=Oe.transform,ue.style.transformOrigin=Oe.transformOrigin,ue.style.opacity=Oe.opacity,ue.style.position=Oe.position,ue.style.zIndex=Oe.zIndex,xn.current.delete(O),Pt(()=>{ue.style.transition="",ue.style.display=Oe.display;for(const tt of Ye)tt.el.style.overflow=tt.overflow},450)}},[ot,Xe,Rt,j]),y.useEffect(()=>()=>{for(const[,C]of xn.current){const{el:E,origStyles:R,ancestors:O}=C;E.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",E.style.transform=R.transform,E.style.transformOrigin=R.transformOrigin,E.style.opacity=R.opacity,E.style.position=R.position,E.style.zIndex=R.zIndex,Pt(()=>{E.style.transition="",E.style.display=R.display;for(const Y of O)Y.el.style.overflow=Y.overflow},450)}xn.current.clear()},[]);const xs=y.useCallback(()=>{Vt(!0),jt(!1),yt(null),clearTimeout(To.current),To.current=Pt(()=>{Vt(!1)},300)},[]),co=y.useCallback(()=>{Xe&&(Vt(!0),jt(!1),yt(null),clearTimeout(To.current),To.current=Pt(()=>{Vt(!1)},300)),k(!1)},[Xe]),ki=y.useCallback(()=>{te||(CS(),_e(!0))},[te]),Fo=y.useCallback(()=>{te&&($y(),_e(!1))},[te]),Ji=y.useCallback(()=>{te?Fo():ki()},[te,ki,Fo]),I=y.useCallback(()=>{if(Pn.length===0)return;const C=Pn[0],E=C.element,R=Pn.length>1,O=Pn.map(Y=>Y.element.getBoundingClientRect());if(R){const Y={left:Math.min(...O.map(ft=>ft.left)),top:Math.min(...O.map(ft=>ft.top)),right:Math.max(...O.map(ft=>ft.right)),bottom:Math.max(...O.map(ft=>ft.bottom))},ue=Pn.slice(0,5).map(ft=>ft.name).join(", "),Oe=Pn.length>5?` +${Pn.length-5} more`:"",Ye=O.map(ft=>({x:ft.left,y:ft.top+window.scrollY,width:ft.width,height:ft.height})),it=Pn[Pn.length-1].element,ht=O[O.length-1],Nt=ht.left+ht.width/2,qt=ht.top+ht.height/2,bt=rm(it);K({x:Nt/window.innerWidth*100,y:bt?qt:qt+window.scrollY,clientY:qt,element:`${Pn.length} elements: ${ue}${Oe}`,elementPath:"multi-select",boundingBox:{x:Y.left,y:Y.top+window.scrollY,width:Y.right-Y.left,height:Y.bottom-Y.top},isMultiSelect:!0,isFixed:bt,elementBoundingBoxes:Ye,multiSelectElements:Pn.map(ft=>ft.element),targetElement:it,fullPath:Zu(E),accessibility:Qu(E),computedStyles:Ku(E),computedStylesObj:Gu(E),nearbyElements:qu(E),cssClasses:rc(E),nearbyText:ac(E),sourceFile:od(E)})}else{const Y=O[0],ue=rm(E);K({x:Y.left/window.innerWidth*100,y:ue?Y.top:Y.top+window.scrollY,clientY:Y.top,element:C.name,elementPath:C.path,boundingBox:{x:Y.left,y:ue?Y.top:Y.top+window.scrollY,width:Y.width,height:Y.height},isFixed:ue,fullPath:Zu(E),accessibility:Qu(E),computedStyles:Ku(E),computedStylesObj:Gu(E),nearbyElements:qu(E),cssClasses:rc(E),nearbyText:ac(E),reactComponents:C.reactComponents,sourceFile:od(E)})}Zs([]),ce(null)},[Pn]);y.useEffect(()=>{j||(K(null),Me(null),Ze(null),Ue([]),ce(null),Qe(!1),Zs([]),us.current={cmd:!1,shift:!1},te&&Fo())},[j,te,Fo]),y.useEffect(()=>()=>{$y()},[]),y.useEffect(()=>{if(!j)return;const C=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),E=":not([data-agentation-root]):not([data-agentation-root] *)",R=document.createElement("style");return R.id="feedback-cursor-styles",R.textContent=`
      body ${E} {
        cursor: crosshair !important;
      }

      body :is(${C})${E} {
        cursor: text !important;
      }
    `,document.head.appendChild(R),()=>{const O=document.getElementById("feedback-cursor-styles");O&&O.remove()}},[j]),y.useEffect(()=>{if(ei!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[ei,j]),y.useEffect(()=>{if(!j||G||yn||Xe)return;const C=E=>{const R=E.composedPath()[0]||E.target;if(Go(R,"[data-feedback-toolbar]")){ce(null);return}const O=br(E.clientX,E.clientY);if(!O||Go(O,"[data-feedback-toolbar]")){ce(null);return}const{name:Y,elementName:ue,path:Oe,reactComponents:Ye}=im(O,yo),tt=O.getBoundingClientRect();ce({element:Y,elementName:ue,elementPath:Oe,rect:tt,reactComponents:Ye}),oe({x:E.clientX,y:E.clientY})};return document.addEventListener("mousemove",C),()=>document.removeEventListener("mousemove",C)},[j,G,yn,Xe,yo,dn]);const J=y.useCallback(C=>{var E;if(Me(C),rt(null),Zt(null),Ee([]),(E=C.elementBoundingBoxes)!=null&&E.length){const R=[];for(const O of C.elementBoundingBoxes){const Y=O.x+O.width/2,ue=O.y+O.height/2-window.scrollY,Oe=br(Y,ue);Oe&&R.push(Oe)}Ue(R),Ze(null)}else if(C.boundingBox){const R=C.boundingBox,O=R.x+R.width/2,Y=C.isFixed?R.y+R.height/2:R.y+R.height/2-window.scrollY,ue=br(O,Y);if(ue){const Oe=ue.getBoundingClientRect(),Ye=Oe.width/R.width,tt=Oe.height/R.height;Ye<.5||tt<.5?Ze(null):Ze(ue)}else Ze(null);Ue([])}else Ze(null),Ue([])},[]);y.useEffect(()=>{if(!j||yn||Xe)return;const C=E=>{var vs,ws;if(T.current){T.current=!1;return}const R=E.composedPath()[0]||E.target;if(Go(R,"[data-feedback-toolbar]")||Go(R,"[data-annotation-popup]")||Go(R,"[data-annotation-marker]"))return;if(E.metaKey&&E.shiftKey&&!G&&!q){E.preventDefault(),E.stopPropagation();const Cn=br(E.clientX,E.clientY);if(!Cn)return;const Vn=Cn.getBoundingClientRect(),{name:Wt,path:Gt,reactComponents:Ss}=im(Cn,yo),En=Pn.findIndex(ho=>ho.element===Cn);En>=0?Zs(ho=>ho.filter((Oo,as)=>as!==En)):Zs(ho=>[...ho,{element:Cn,rect:Vn,name:Wt,path:Gt,reactComponents:Ss!=null?Ss:void 0}]);return}const O=Go(R,"button, a, input, select, textarea, [role='button'], [onclick]");if(Kt.blockInteractions&&O&&(E.preventDefault(),E.stopPropagation()),G){if(O&&!Kt.blockInteractions)return;E.preventDefault(),(vs=Dt.current)==null||vs.shake();return}if(q){if(O&&!Kt.blockInteractions)return;E.preventDefault(),(ws=$t.current)==null||ws.shake();return}E.preventDefault();const Y=br(E.clientX,E.clientY);if(!Y)return;const{name:ue,path:Oe,reactComponents:Ye}=im(Y,yo),tt=Y.getBoundingClientRect(),it=E.clientX/window.innerWidth*100,ht=rm(Y),Nt=ht?E.clientY:E.clientY+window.scrollY,qt=window.getSelection();let bt;qt&&qt.toString().trim().length>0&&(bt=qt.toString().trim().slice(0,500));const ft=Gu(Y),bs=Ku(Y);K({x:it,y:Nt,clientY:E.clientY,element:ue,elementPath:Oe,selectedText:bt,boundingBox:{x:tt.left,y:ht?tt.top:tt.top+window.scrollY,width:tt.width,height:tt.height},nearbyText:ac(Y),cssClasses:rc(Y),isFixed:ht,fullPath:Zu(Y),accessibility:Qu(Y),computedStyles:bs,computedStylesObj:ft,nearbyElements:qu(Y),reactComponents:Ye!=null?Ye:void 0,sourceFile:od(Y),targetElement:Y}),ce(null)};return document.addEventListener("click",C,!0),()=>document.removeEventListener("click",C,!0)},[j,yn,Xe,G,q,Kt.blockInteractions,yo,Pn]),y.useEffect(()=>{if(!j)return;const C=O=>{O.key==="Meta"&&(us.current.cmd=!0),O.key==="Shift"&&(us.current.shift=!0)},E=O=>{const Y=us.current.cmd&&us.current.shift;O.key==="Meta"&&(us.current.cmd=!1),O.key==="Shift"&&(us.current.shift=!1);const ue=us.current.cmd&&us.current.shift;Y&&!ue&&Pn.length>0&&I()},R=()=>{us.current={cmd:!1,shift:!1},Zs([])};return document.addEventListener("keydown",C),document.addEventListener("keyup",E),window.addEventListener("blur",R),()=>{document.removeEventListener("keydown",C),document.removeEventListener("keyup",E),window.removeEventListener("blur",R)}},[j,Pn,I]),y.useEffect(()=>{if(!j||G||yn||Xe)return;const C=E=>{const R=E.composedPath()[0]||E.target;Go(R,"[data-feedback-toolbar]")||Go(R,"[data-annotation-marker]")||Go(R,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(R.tagName)||R.isContentEditable||(E.preventDefault(),wo.current={x:E.clientX,y:E.clientY})};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[j,G,yn,Xe]),y.useEffect(()=>{if(!j||G)return;const C=E=>{if(!wo.current)return;const R=E.clientX-wo.current.x,O=E.clientY-wo.current.y,Y=R*R+O*O,ue=He*He;if(!vo&&Y>=ue&&(Ts.current=wo.current,Wo(!0),E.preventDefault()),(vo||Y>=ue)&&Ts.current){if(So.current){const Wt=Math.min(Ts.current.x,E.clientX),Gt=Math.min(Ts.current.y,E.clientY),Ss=Math.abs(E.clientX-Ts.current.x),En=Math.abs(E.clientY-Ts.current.y);So.current.style.transform=`translate(${Wt}px, ${Gt}px)`,So.current.style.width=`${Ss}px`,So.current.style.height=`${En}px`}const Oe=Date.now();if(Oe-F.current<et)return;F.current=Oe;const Ye=Ts.current.x,tt=Ts.current.y,it=Math.min(Ye,E.clientX),ht=Math.min(tt,E.clientY),Nt=Math.max(Ye,E.clientX),qt=Math.max(tt,E.clientY),bt=(it+Nt)/2,ft=(ht+qt)/2,bs=new Set,vs=[[it,ht],[Nt,ht],[it,qt],[Nt,qt],[bt,ft],[bt,ht],[bt,qt],[it,ft],[Nt,ft]];for(const[Wt,Gt]of vs){const Ss=document.elementsFromPoint(Wt,Gt);for(const En of Ss)En instanceof HTMLElement&&bs.add(En)}const ws=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Wt of ws)if(Wt instanceof HTMLElement){const Gt=Wt.getBoundingClientRect(),Ss=Gt.left+Gt.width/2,En=Gt.top+Gt.height/2,ho=Ss>=it&&Ss<=Nt&&En>=ht&&En<=qt,Oo=Math.min(Gt.right,Nt)-Math.max(Gt.left,it),as=Math.min(Gt.bottom,qt)-Math.max(Gt.top,ht),ji=Oo>0&&as>0?Oo*as:0,Pi=Gt.width*Gt.height,Hi=Pi>0?ji/Pi:0;(ho||Hi>.5)&&bs.add(Wt)}const Cn=[],Vn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Wt of bs){if(Go(Wt,"[data-feedback-toolbar]")||Go(Wt,"[data-annotation-marker]"))continue;const Gt=Wt.getBoundingClientRect();if(!(Gt.width>window.innerWidth*.8&&Gt.height>window.innerHeight*.5)&&!(Gt.width<10||Gt.height<10)&&Gt.left<Nt&&Gt.right>it&&Gt.top<qt&&Gt.bottom>ht){const Ss=Wt.tagName;let En=Vn.has(Ss);if(!En&&(Ss==="DIV"||Ss==="SPAN")){const ho=Wt.textContent&&Wt.textContent.trim().length>0,Oo=Wt.onclick!==null||Wt.getAttribute("role")==="button"||Wt.getAttribute("role")==="link"||Wt.classList.contains("clickable")||Wt.hasAttribute("data-clickable");(ho||Oo)&&!Wt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(En=!0)}if(En){let ho=!1;for(const Oo of Cn)if(Oo.left<=Gt.left&&Oo.right>=Gt.right&&Oo.top<=Gt.top&&Oo.bottom>=Gt.bottom){ho=!0;break}ho||Cn.push(Gt)}}}if(Yn.current){const Wt=Yn.current;for(;Wt.children.length>Cn.length;)Wt.removeChild(Wt.lastChild);Cn.forEach((Gt,Ss)=>{let En=Wt.children[Ss];En||(En=document.createElement("div"),En.className=We.selectedElementHighlight,Wt.appendChild(En)),En.style.transform=`translate(${Gt.left}px, ${Gt.top}px)`,En.style.width=`${Gt.width}px`,En.style.height=`${Gt.height}px`})}}};return document.addEventListener("mousemove",C,{passive:!0}),()=>document.removeEventListener("mousemove",C)},[j,G,vo,He]),y.useEffect(()=>{if(!j)return;const C=E=>{const R=vo,O=Ts.current;if(vo&&O){T.current=!0;const Y=Math.min(O.x,E.clientX),ue=Math.min(O.y,E.clientY),Oe=Math.max(O.x,E.clientX),Ye=Math.max(O.y,E.clientY),tt=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(bt=>{if(!(bt instanceof HTMLElement)||Go(bt,"[data-feedback-toolbar]")||Go(bt,"[data-annotation-marker]"))return;const ft=bt.getBoundingClientRect();ft.width>window.innerWidth*.8&&ft.height>window.innerHeight*.5||ft.width<10||ft.height<10||ft.left<Oe&&ft.right>Y&&ft.top<Ye&&ft.bottom>ue&&tt.push({element:bt,rect:ft})});const ht=tt.filter(({element:bt})=>!tt.some(({element:ft})=>ft!==bt&&bt.contains(ft))),Nt=E.clientX/window.innerWidth*100,qt=E.clientY+window.scrollY;if(ht.length>0){const bt=ht.reduce((Vn,{rect:Wt})=>({left:Math.min(Vn.left,Wt.left),top:Math.min(Vn.top,Wt.top),right:Math.max(Vn.right,Wt.right),bottom:Math.max(Vn.bottom,Wt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ft=ht.slice(0,5).map(({element:Vn})=>ml(Vn).name).join(", "),bs=ht.length>5?` +${ht.length-5} more`:"",vs=ht[0].element,ws=Gu(vs),Cn=Ku(vs);K({x:Nt,y:qt,clientY:E.clientY,element:`${ht.length} elements: ${ft}${bs}`,elementPath:"multi-select",boundingBox:{x:bt.left,y:bt.top+window.scrollY,width:bt.right-bt.left,height:bt.bottom-bt.top},isMultiSelect:!0,fullPath:Zu(vs),accessibility:Qu(vs),computedStyles:Cn,computedStylesObj:ws,nearbyElements:qu(vs),cssClasses:rc(vs),nearbyText:ac(vs),sourceFile:od(vs)})}else{const bt=Math.abs(Oe-Y),ft=Math.abs(Ye-ue);bt>20&&ft>20&&K({x:Nt,y:qt,clientY:E.clientY,element:"Area selection",elementPath:`region at (${Math.round(Y)}, ${Math.round(ue)})`,boundingBox:{x:Y,y:ue+window.scrollY,width:bt,height:ft},isMultiSelect:!0})}ce(null)}else R&&(T.current=!0);wo.current=null,Ts.current=null,Wo(!1),Yn.current&&(Yn.current.innerHTML="")};return document.addEventListener("mouseup",C),()=>document.removeEventListener("mouseup",C)},[j,vo]);const se=y.useCallback(async(C,E,R)=>{const O=Kt.webhookUrl||w;if(!O||!Kt.webhooksEnabled&&!R)return!1;try{return(await fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:C,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...E})})).ok}catch(Y){return console.warn("[Agentation] Webhook failed:",Y),!1}},[w,Kt.webhookUrl,Kt.webhooksEnabled]),ye=y.useCallback(C=>{var R;if(!G)return;const E={id:Date.now().toString(),x:G.x,y:G.y,comment:C,element:G.element,elementPath:G.elementPath,timestamp:Date.now(),selectedText:G.selectedText,boundingBox:G.boundingBox,nearbyText:G.nearbyText,cssClasses:G.cssClasses,isMultiSelect:G.isMultiSelect,isFixed:G.isFixed,fullPath:G.fullPath,accessibility:G.accessibility,computedStyles:G.computedStyles,nearbyElements:G.nearbyElements,reactComponents:G.reactComponents,sourceFile:G.sourceFile,elementBoundingBoxes:G.elementBoundingBoxes,..._&&wn?{sessionId:wn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};z(O=>[...O,E]),de.current=E.id,Pt(()=>{de.current=null},300),Pt(()=>{Ws(O=>new Set(O).add(E.id))},250),a==null||a(E),se("annotation.add",{annotation:E}),Fs(!0),Pt(()=>{K(null),Fs(!1)},150),(R=window.getSelection())==null||R.removeAllRanges(),_&&wn&&rl(_,wn,E).then(O=>{O.id!==E.id&&(z(Y=>Y.map(ue=>ue.id===E.id?{...ue,id:O.id}:ue)),Ws(Y=>{const ue=new Set(Y);return ue.delete(E.id),ue.add(O.id),ue}))}).catch(O=>{console.warn("[Agentation] Failed to sync annotation:",O)})},[G,a,se,_,wn]),st=y.useCallback(()=>{Fs(!0),Pt(()=>{K(null),Fs(!1)},150)},[]),xt=y.useCallback(C=>{const E=M.findIndex(O=>O.id===C),R=M[E];(q==null?void 0:q.id)===C&&(Bs(!0),Pt(()=>{Me(null),Ze(null),Ue([]),Bs(!1)},150)),Ht(C),Yo(O=>new Set(O).add(C)),R&&(c==null||c(R),se("annotation.delete",{annotation:R})),_&&Ka(_,C).catch(O=>{console.warn("[Agentation] Failed to delete annotation from server:",O)}),Pt(()=>{z(O=>O.filter(Y=>Y.id!==C)),Yo(O=>{const Y=new Set(O);return Y.delete(C),Y}),Ht(null),E<M.length-1&&(Ut(E),Pt(()=>Ut(null),200))},150)},[M,q,c,se,_]),pt=y.useCallback(C=>{var E;if(!C){rt(null),Zt(null),Ee([]);return}if(rt(C.id),(E=C.elementBoundingBoxes)!=null&&E.length){const R=[];for(const O of C.elementBoundingBoxes){const Y=O.x+O.width/2,ue=O.y+O.height/2-window.scrollY,Ye=document.elementsFromPoint(Y,ue).find(tt=>!tt.closest("[data-annotation-marker]")&&!tt.closest("[data-agentation-root]"));Ye&&R.push(Ye)}Ee(R),Zt(null)}else if(C.boundingBox){const R=C.boundingBox,O=R.x+R.width/2,Y=C.isFixed?R.y+R.height/2:R.y+R.height/2-window.scrollY,ue=br(O,Y);if(ue){const Oe=ue.getBoundingClientRect(),Ye=Oe.width/R.width,tt=Oe.height/R.height;Ye<.5||tt<.5?Zt(null):Zt(ue)}else Zt(null);Ee([])}else Zt(null),Ee([])},[]),Xt=y.useCallback(C=>{if(!q)return;const E={...q,comment:C};z(R=>R.map(O=>O.id===q.id?E:O)),u==null||u(E),se("annotation.update",{annotation:E}),_&&e1(_,q.id,{comment:C}).catch(R=>{console.warn("[Agentation] Failed to update annotation on server:",R)}),Bs(!0),Pt(()=>{Me(null),Ze(null),Ue([]),Bs(!1)},150)},[q,u,se,_]),ms=y.useCallback(()=>{Bs(!0),Pt(()=>{Me(null),Ze(null),Ue([]),Bs(!1)},150)},[]),Zn=y.useCallback(()=>{const C=M.length,E=Ge.length>0||!!ot;if(C===0&&dn.length===0&&!E)return;if(d==null||d(M),se("annotations.clear",{annotations:M}),_){Promise.all(M.map(Y=>Ka(_,Y.id).catch(ue=>{console.warn("[Agentation] Failed to delete annotation from server:",ue)})));for(const[,Y]of ys.current)Y&&Ka(_,Y).catch(()=>{});ys.current.clear();for(const[,Y]of is.current)Y&&Ka(_,Y).catch(()=>{});is.current.clear()}Ne(!0),Ae(!0),Qn([]);const R=go.current;if(R){const Y=R.getContext("2d");Y&&Y.clearRect(0,0,R.width,R.height)}(Ge.length>0||ot)&&(Us(Y=>Y+1),wi(Y=>Y+1),Pt(()=>{Lt([]),cn(null)},200)),ut&&Ft(!1),Dn&&Ln(""),Tn.current={rearrange:null,placements:[]},td(Ke);const O=C*30+200;Pt(()=>{z([]),Ws(new Set),localStorage.removeItem(Td(Ke)),Ne(!1)},O),Pt(()=>Ae(!1),1500)},[Ke,M,dn,Ge,ot,ut,Dn,d,se,_]),uo=y.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke,E=Xe&&ut;let R;if(E){if(Ge.length===0&&!ot&&!Dn)return;R=""}else{if(R=s1(M,C,Kt.outputDetail),!R&&dn.length===0&&Ge.length===0&&!ot)return;R||(R=`## Page Feedback: ${C}
`)}if(!E&&dn.length>0){const O=new Set;for(const Ye of M)Ye.drawingIndex!=null&&O.add(Ye.drawingIndex);const Y=go.current;Y&&(Y.style.visibility="hidden");const ue=[],Oe=window.scrollY;for(let Ye=0;Ye<dn.length;Ye++){if(O.has(Ye))continue;const tt=dn[Ye];if(tt.points.length<2)continue;const it=tt.fixed?tt.points:tt.points.map(Jn=>({x:Jn.x,y:Jn.y-Oe}));let ht=1/0,Nt=1/0,qt=-1/0,bt=-1/0;for(const Jn of it)ht=Math.min(ht,Jn.x),Nt=Math.min(Nt,Jn.y),qt=Math.max(qt,Jn.x),bt=Math.max(bt,Jn.y);const ft=qt-ht,bs=bt-Nt,vs=Math.hypot(ft,bs),ws=it[0],Cn=it[it.length-1],Vn=Math.hypot(Cn.x-ws.x,Cn.y-ws.y);let Wt;const Gt=Vn<vs*.35,Ss=ft/Math.max(bs,1);if(Gt&&vs>20){const Jn=Math.max(ft,bs)*.15;let Ui=0;for(const ea of it){const Pc=ea.x-ht<Jn,Wd=qt-ea.x<Jn,Fd=ea.y-Nt<Jn,Xd=bt-ea.y<Jn;(Pc||Wd)&&(Fd||Xd)&&Ui++}Wt=Ui>it.length*.15?"box":"circle"}else Ss>3&&bs<40?Wt="underline":Vn>vs*.5?Wt="arrow":Wt="drawing";const En=Math.min(10,it.length),ho=Math.max(1,Math.floor(it.length/En)),Oo=new Set,as=[],ji=[ws];for(let Jn=ho;Jn<it.length-1;Jn+=ho)ji.push(it[Jn]);ji.push(Cn);for(const Jn of ji){const Ui=br(Jn.x,Jn.y);if(!Ui||Oo.has(Ui)||Go(Ui,"[data-feedback-toolbar]"))continue;Oo.add(Ui);const{name:ea}=ml(Ui);as.includes(ea)||as.push(ea)}const Pi=`${Math.round(ht)},${Math.round(Nt)} → ${Math.round(qt)},${Math.round(bt)}`;let Hi;(Wt==="circle"||Wt==="box")&&as.length>0?Hi=`${Wt==="box"?"Boxed":"Circled"} **${as[0]}**${as.length>1?` (and ${as.slice(1).join(", ")})`:""} (region: ${Pi})`:Wt==="underline"&&as.length>0?Hi=`Underlined **${as[0]}** (${Pi})`:Wt==="arrow"&&as.length>=2?Hi=`Arrow from **${as[0]}** to **${as[as.length-1]}** (${Math.round(ws.x)},${Math.round(ws.y)} → ${Math.round(Cn.x)},${Math.round(Cn.y)})`:as.length>0?Hi=`${Wt==="arrow"?"Arrow":"Drawing"} near **${as.join("**, **")}** (region: ${Pi})`:Hi=`Drawing at ${Pi}`,ue.push(Hi)}Y&&(Y.style.visibility=""),ue.length>0&&(R+=`
**Drawings:**
`,ue.forEach((Ye,tt)=>{R+=`${tt+1}. ${Ye}
`}))}if((Ge.length>0||E&&Dn)&&(R+=`
`+Ky(Ge,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ut,wireframePurpose:Dn||void 0},Kt.outputDetail)),ot){const O=Qy(ot,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});O&&(R+=`
`+O)}if(g)try{await navigator.clipboard.writeText(R)}catch{}h==null||h(R),N(!0),Pt(()=>N(!1),2e3),Kt.autoClearAfterCopy&&Pt(()=>Zn(),500)},[M,dn,Ge,ot,ut,Xe,Kn,Dn,Ke,Kt.outputDetail,yo,Kt.autoClearAfterCopy,Zn,g,h]),Nn=y.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;let E=s1(M,C,Kt.outputDetail);if(!E&&Ge.length===0&&!ot)return;if(E||(E=`## Page Feedback: ${C}
`),Ge.length>0&&(E+=`
`+Ky(Ge,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ut,wireframePurpose:Dn||void 0},Kt.outputDetail)),ot){const O=Qy(ot,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});O&&(E+=`
`+O)}p&&p(E,M),re("sending"),await new Promise(O=>Pt(O,150));const R=await se("submit",{output:E,annotations:M},!0);re(R?"sent":"failed"),Pt(()=>re("idle"),2500),R&&Kt.autoClearAfterCopy&&Pt(()=>Zn(),500)},[p,se,M,Ge,ot,ut,Kn,Ke,Kt.outputDetail,yo,Kt.autoClearAfterCopy,Zn]);y.useEffect(()=>{if(!hs)return;const C=10,E=O=>{const Y=O.clientX-hs.x,ue=O.clientY-hs.y,Oe=Math.sqrt(Y*Y+ue*ue);if(!ro&&Oe>C&&lo(!0),ro||Oe>C){let Ye=hs.toolbarX+Y,tt=hs.toolbarY+ue;const it=20,ht=337,Nt=44,bt=ht-(j?fs==="connected"?297:257:44),ft=it-bt,bs=window.innerWidth-it-ht;Ye=Math.max(ft,Math.min(bs,Ye)),tt=Math.max(it,Math.min(window.innerHeight-Nt-it,tt)),Ys({x:Ye,y:tt})}},R=()=>{ro&&(bo.current=!0),lo(!1),ni(null)};return document.addEventListener("mousemove",E),document.addEventListener("mouseup",R),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",R)}},[hs,ro,j,fs]);const Qt=y.useCallback(C=>{var ue,Oe;if(C.target.closest("button")||C.target.closest("[data-agentation-settings-panel]"))return;const E=C.currentTarget.parentElement;if(!E)return;const R=E.getBoundingClientRect(),O=(ue=sn==null?void 0:sn.x)!=null?ue:R.left,Y=(Oe=sn==null?void 0:sn.y)!=null?Oe:R.top;ni({x:C.clientX,y:C.clientY,toolbarX:O,toolbarY:Y})},[sn]);if(y.useEffect(()=>{if(!sn)return;const C=()=>{let Y=sn.x,ue=sn.y;const tt=20-(337-(j?fs==="connected"?297:257:44)),it=window.innerWidth-20-337;Y=Math.max(tt,Math.min(it,Y)),ue=Math.max(20,Math.min(window.innerHeight-44-20,ue)),(Y!==sn.x||ue!==sn.y)&&Ys({x:Y,y:ue})};return C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[sn,j,fs]),y.useEffect(()=>{const C=E=>{const R=E.target,O=R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable;if(E.key==="Escape"){if(Xe){Tt?yt(null):xs();return}if(yn){On(!1);return}if(Pn.length>0){Zs([]);return}G||j&&(ds(),k(!1))}if((E.metaKey||E.ctrlKey)&&E.shiftKey&&(E.key==="f"||E.key==="F")){E.preventDefault(),ds(),j?co():k(!0);return}if(!(O||E.metaKey||E.ctrlKey)&&((E.key==="p"||E.key==="P")&&(E.preventDefault(),ds(),Ji()),(E.key==="l"||E.key==="L")&&(E.preventDefault(),ds(),yn&&On(!1),we&&Qe(!1),G&&st(),Xe?xs():jt(!0)),(E.key==="h"||E.key==="H")&&M.length>0&&(E.preventDefault(),ds(),D(Y=>!Y)),(E.key==="c"||E.key==="C")&&(M.length>0||Ge.length>0||ot)&&(E.preventDefault(),ds(),uo()),(E.key==="x"||E.key==="X")&&(M.length>0||Ge.length>0||ot)&&(E.preventDefault(),ds(),Zn(),Ge.length>0&&Lt([]),ot&&cn(null)),E.key==="s"||E.key==="S")){const Y=ia(Kt.webhookUrl)||ia(w||"");M.length>0&&Y&&ne==="idle"&&(E.preventDefault(),ds(),Nn())}};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[j,yn,Xe,Tt,Ge,ot,G,M.length,Kt.webhookUrl,w,ne,Nn,Ji,uo,Zn,Pn]),!nt||V)return null;const nn=M.length>0,hn=M.filter(C=>!si.has(C.id)&&C.kind!=="placement"&&C.kind!=="rearrange"),Es=hn.length>0,Os=M.filter(C=>si.has(C.id)),Xs=C=>{const ue=C.x/100*window.innerWidth,Oe=typeof C.y=="string"?parseFloat(C.y):C.y,Ye={};window.innerHeight-Oe-22-10<80&&(Ye.top="auto",Ye.bottom="calc(100% + 10px)");const it=ue-200/2,ht=10;if(it<ht){const Nt=ht-it;Ye.left=`calc(50% + ${Nt}px)`}else if(it+200>window.innerWidth-ht){const Nt=it+200-(window.innerWidth-ht);Ye.left=`calc(50% - ${Nt}px)`}return Ye};return Bc.createPortal(l.jsxs("div",{ref:Z,style:{display:"contents"},"data-agentation-theme":zs?"dark":"light","data-agentation-accent":Kt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${We.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:sn?{left:sn.x,top:sn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${We.toolbarContainer} ${j?We.expanded:We.collapsed} ${Si?We.entrance:""} ${W?We.hiding:""} ${!Kt.webhooksEnabled&&(ia(Kt.webhookUrl)||ia(w||""))?We.serverConnected:""}`,onClick:j?void 0:C=>{if(bo.current){bo.current=!1,C.preventDefault();return}k(!0)},onMouseDown:Qt,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${We.toggleContent} ${j?We.hidden:We.visible}`,children:[l.jsx(aS,{size:24}),Es&&l.jsx("span",{className:`${We.badge} ${j?We.fadeOut:""} ${Si?We.entrance:""}`,children:hn.length})]}),l.jsxs("div",{className:`${We.controlsContent} ${j?We.visible:We.hidden} ${sn&&sn.y<100?We.tooltipBelow:""} ${Ot||we?We.tooltipsHidden:""} ${ti?We.tooltipsInSession:""}`,onMouseEnter:Vo,onMouseLeave:Zi,children:[l.jsxs("div",{className:`${We.buttonWrapper} ${sn&&sn.x<120?We.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),ds(),Ji()},"data-active":te,children:l.jsx(dS,{size:24,isPaused:te})}),l.jsxs("span",{className:We.buttonTooltip,children:[te?"Resume animations":"Pause animations",l.jsx("span",{className:We.shortcut,children:"P"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:`${We.controlButton} ${zs?"":We.light}`,onClick:C=>{C.stopPropagation(),ds(),yn&&On(!1),we&&Qe(!1),G&&st(),Xe?xs():jt(!0)},"data-active":Xe,style:Xe&&ut?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(bS,{size:21})}),l.jsxs("span",{className:We.buttonTooltip,children:[Xe?"Exit layout mode":"Layout mode",l.jsx("span",{className:We.shortcut,children:"L"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),ds(),D(!L)},disabled:!nn||Xe,children:l.jsx(uS,{size:24,isOpen:L})}),l.jsxs("span",{className:We.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:We.shortcut,children:"H"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:`${We.controlButton} ${pe?We.statusShowing:""}`,onClick:C=>{C.stopPropagation(),ds(),uo()},disabled:Xe&&ut?Ge.length===0&&!((qs=ot==null?void 0:ot.sections)!=null&&qs.length):!nn&&dn.length===0&&Ge.length===0&&!((fo=ot==null?void 0:ot.sections)!=null&&fo.length),"data-active":pe,children:l.jsx(lS,{size:24,copied:pe,tint:Xe&&ut&&(Ge.length>0||(hi=ot==null?void 0:ot.sections)!=null&&hi.length)?"#f97316":void 0})}),l.jsxs("span",{className:We.buttonTooltip,children:[Xe&&ut?"Copy layout":"Copy feedback",l.jsx("span",{className:We.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${We.buttonWrapper} ${We.sendButtonWrapper} ${j&&!Kt.webhooksEnabled&&(ia(Kt.webhookUrl)||ia(w||""))?We.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${We.controlButton} ${ne==="sent"||ne==="failed"?We.statusShowing:""}`,onClick:C=>{C.stopPropagation(),ds(),Nn()},disabled:!nn||!ia(Kt.webhookUrl)&&!ia(w||"")||ne==="sending","data-no-hover":ne==="sent"||ne==="failed",tabIndex:ia(Kt.webhookUrl)||ia(w||"")?0:-1,children:[l.jsx(cS,{size:24,state:ne}),nn&&ne==="idle"&&l.jsx("span",{className:We.buttonBadge,children:M.length})]}),l.jsxs("span",{className:We.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:We.shortcut,children:"S"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),ds(),Zn()},disabled:!nn&&dn.length===0&&Ge.length===0&&!((Xo=ot==null?void 0:ot.sections)!=null&&Xo.length),"data-danger":!0,children:l.jsx(hS,{size:24})}),l.jsxs("span",{className:We.buttonTooltip,children:["Clear all",l.jsx("span",{className:We.shortcut,children:"X"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),ds(),Xe&&xs(),Qe(!we)},children:l.jsx(fS,{size:24})}),_&&fs!=="disconnected"&&l.jsx("span",{className:`${We.mcpIndicator} ${We[fs]} ${we?We.hidden:""}`,title:fs==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:We.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:We.divider}),l.jsxs("div",{className:`${We.buttonWrapper} ${sn&&typeof window<"u"&&sn.x>window.innerWidth-120?We.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),ds(),co()},children:l.jsx(mS,{size:24})}),l.jsxs("span",{className:We.buttonTooltip,children:["Exit",l.jsx("span",{className:We.shortcut,children:"Esc"})]})]})]}),l.jsx(G4,{visible:Xe&&j,activeType:Tt,onSelect:C=>{yt(Tt===C?null:C)},isDarkMode:zs,sectionCount:(xe=ot==null?void 0:ot.sections.length)!=null?xe:0,onDetectSections:()=>{var Oe,Ye;const C=a6(),E=(Oe=ot==null?void 0:ot.sections)!=null?Oe:[],R=new Set(E.map(tt=>tt.selector)),O=C.filter(tt=>!R.has(tt.selector)),Y=[...E,...O],ue=[...(Ye=ot==null?void 0:ot.originalOrder)!=null?Ye:[],...O.map(tt=>tt.id)];cn({sections:Y,originalOrder:ue,detectedAt:Date.now()})},placementCount:Ge.length,onClearPlacements:()=>{Us(C=>C+1),wi(C=>C+1),Pt(()=>{cn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ut,onBlankCanvasChange:C=>{const E={sections:[],originalOrder:[],detectedAt:Date.now()};C?(Po.current={rearrange:ot,placements:Ge},cn(Tn.current.rearrange||E),Lt(Tn.current.placements),yt(null)):(Tn.current={rearrange:ot,placements:Ge},cn(Po.current.rearrange||E),Lt(Po.current.placements)),Ft(C)},wireframePurpose:Dn,onWireframePurposeChange:Ln,Tooltip:jr,onDragStart:(C,E)=>{var Nt;E.preventDefault();const R=St[C];let O=null,Y=!1;const ue=E.clientX,Oe=E.clientY,Ye=E.target.closest("[data-feedback-toolbar]"),tt=(Nt=Ye==null?void 0:Ye.getBoundingClientRect().top)!=null?Nt:window.innerHeight,it=qt=>{const bt=qt.clientX-ue,ft=qt.clientY-Oe;if(!Y&&(Math.abs(bt)>4||Math.abs(ft)>4)&&(Y=!0,O=document.createElement("div"),O.className=`${De.dragPreview}${ut?` ${De.dragPreviewWireframe}`:""}`,document.body.appendChild(O)),!O)return;const bs=Math.max(0,tt-qt.clientY),vs=Math.min(1,bs/180),ws=1-Math.pow(1-vs,2),Cn=28,Vn=20,Wt=Math.min(140,R.width*.18),Gt=Math.min(90,R.height*.18),Ss=Cn+(Wt-Cn)*ws,En=Vn+(Gt-Vn)*ws;O.style.width=`${Ss}px`,O.style.height=`${En}px`,O.style.left=`${qt.clientX-Ss/2}px`,O.style.top=`${qt.clientY-En/2}px`,O.style.opacity=`${.5+.5*ws}`,O.textContent=ws>.25?C:""},ht=qt=>{if(window.removeEventListener("mousemove",it),window.removeEventListener("mouseup",ht),O&&document.body.removeChild(O),Y){const bt=R.width,ft=R.height,bs=window.scrollY,vs=Math.max(0,qt.clientX-bt/2),ws=Math.max(0,qt.clientY+bs-ft/2),Cn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:C,x:vs,y:ws,width:bt,height:ft,scrollY:bs,timestamp:Date.now()};Lt(Vn=>[...Vn,Cn]),yt(null),Ls.current=new Set,Ho(Vn=>Vn+1)}};window.addEventListener("mousemove",it),window.addEventListener("mouseup",ht)}}),l.jsx(pC,{settings:Kt,onSettingsChange:C=>Vs(E=>({...E,...C})),isDarkMode:zs,onToggleTheme:Js,isDevMode:fi,connectionStatus:fs,endpoint:_,isVisible:Pe,toolbarNearBottom:!!sn&&sn.y<230,settingsPage:gt,onSettingsPageChange:Ve,onHideToolbar:Un})]})}),(Xe||Rt)&&l.jsx("div",{className:`${De.blankCanvas} ${jn?De.visible:""} ${un?De.gridActive:""}`,style:{"--canvas-opacity":Mn},"data-feedback-toolbar":!0}),Xe&&ut&&jn&&l.jsxs("div",{className:De.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:De.wireframeOpacityRow,children:[l.jsx("span",{className:De.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:De.wireframeOpacitySlider,min:0,max:1,step:.01,value:Mn,onChange:C=>Gn(Number(C.target.value))})]}),l.jsxs("div",{className:De.wireframeNoticeTitleRow,children:[l.jsx("span",{className:De.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:De.wireframeNoticeDivider}),l.jsx("button",{className:De.wireframeStartOver,onClick:()=>{Us(C=>C+1),cn({sections:[],originalOrder:[],detectedAt:Date.now()}),Tn.current={rearrange:null,placements:[]},Ln(""),td(Ke)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Xe||Rt)&&l.jsx(Y4,{placements:Ge,onChange:Lt,activeComponent:Rt?null:Tt,onActiveComponentChange:yt,isDarkMode:zs,exiting:Rt,onInteractionChange:pn,passthrough:!Tt,extraSnapRects:ot==null?void 0:ot.sections.map(C=>C.currentRect),deselectSignal:jo,clearSignal:_o,wireframe:ut,onSelectionChange:(C,E)=>{Ls.current=C,E||(Ds.current=new Set,Mo(R=>R+1))},onDragMove:(C,E)=>{const R=Ds.current;if(!(!R.size||!ot)){if(!cs.current){cs.current=new Map;for(const O of ot.sections)R.has(O.id)&&cs.current.set(O.id,{x:O.currentRect.x,y:O.currentRect.y})}for(const O of ot.sections){if(!R.has(O.id)||!cs.current.get(O.id))continue;const ue=document.querySelector(`[data-rearrange-section="${O.id}"]`);ue&&(ue.style.transform=`translate(${C}px, ${E}px)`)}}},onDragEnd:(C,E,R)=>{const O=Ds.current,Y=cs.current;if(cs.current=null,!(!O.size||!ot||!Y)){for(const ue of O){const Oe=document.querySelector(`[data-rearrange-section="${ue}"]`);Oe&&(Oe.style.transform="")}R&&cn(ue=>ue&&{...ue,sections:ue.sections.map(Oe=>{const Ye=Y.get(Oe.id);return Ye?{...Oe,currentRect:{...Oe.currentRect,x:Math.max(0,Ye.x+C),y:Math.max(0,Ye.y+E)}}:Oe})})}}}),(Xe||Rt)&&ot&&l.jsx(c6,{rearrangeState:ot,onChange:cn,isDarkMode:zs,exiting:Rt,blankCanvas:ut,extraSnapRects:Ge.map(C=>({x:C.x,y:C.y,width:C.width,height:C.height})),clearSignal:zn,deselectSignal:js,onSelectionChange:(C,E)=>{Ds.current=C,E||(Ls.current=new Set,Ho(R=>R+1))},onDragMove:(C,E)=>{const R=Ls.current;if(R.size){if(!cs.current){cs.current=new Map;for(const O of Ge)R.has(O.id)&&cs.current.set(O.id,{x:O.x,y:O.y})}for(const O of R){const Y=document.querySelector(`[data-design-placement="${O}"]`);Y&&(Y.style.transform=`translate(${C}px, ${E}px)`)}}},onDragEnd:(C,E,R)=>{const O=Ls.current,Y=cs.current;if(cs.current=null,!(!O.size||!Y)){for(const ue of O){const Oe=document.querySelector(`[data-design-placement="${ue}"]`);Oe&&(Oe.style.transform="")}R&&Lt(ue=>ue.map(Oe=>{const Ye=Y.get(Oe.id);return Ye?{...Oe,x:Math.max(0,Ye.x+C),y:Math.max(0,Ye.y+E)}:Oe}))}}}),l.jsx("canvas",{ref:go,className:`${We.drawCanvas} ${yn?We.active:""}`,style:{opacity:an?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:We.markersLayer,"data-feedback-toolbar":!0,children:[ae&&hn.filter(C=>!C.isFixed).map((C,E,R)=>l.jsx(o1,{annotation:C,globalIndex:hn.findIndex(O=>O.id===C.id),layerIndex:E,layerSize:R.length,isExiting:ke,isClearing:$e,isAnimated:zo.has(C.id),isHovered:!ke&&at===C.id,isDeleting:vt===C.id,isEditingAny:!!q,renumberFrom:wt,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:Xs(C),onHoverEnter:O=>!ke&&O.id!==de.current&&pt(O),onHoverLeave:()=>pt(null),onClick:O=>Kt.markerClickBehavior==="delete"?xt(O.id):J(O),onContextMenu:J},C.id)),ae&&!ke&&Os.filter(C=>!C.isFixed).map(C=>l.jsx(i1,{annotation:C},C.id))]}),l.jsxs("div",{className:We.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ae&&hn.filter(C=>C.isFixed).map((C,E,R)=>l.jsx(o1,{annotation:C,globalIndex:hn.findIndex(O=>O.id===C.id),layerIndex:E,layerSize:R.length,isExiting:ke,isClearing:$e,isAnimated:zo.has(C.id),isHovered:!ke&&at===C.id,isDeleting:vt===C.id,isEditingAny:!!q,renumberFrom:wt,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:Xs(C),onHoverEnter:O=>!ke&&O.id!==de.current&&pt(O),onHoverLeave:()=>pt(null),onClick:O=>Kt.markerClickBehavior==="delete"?xt(O.id):J(O),onContextMenu:J},C.id)),ae&&!ke&&Os.filter(C=>C.isFixed).map(C=>l.jsx(i1,{annotation:C,fixed:!0},C.id))]}),j&&l.jsxs("div",{className:We.overlay,"data-feedback-toolbar":!0,style:G||q?{zIndex:99999}:void 0,children:[(Q==null?void 0:Q.rect)&&!G&&!_t&&!vo&&l.jsx("div",{className:`${We.hoverHighlight} ${We.enter}`,style:{left:Q.rect.left,top:Q.rect.top,width:Q.rect.width,height:Q.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Pn.filter(C=>document.contains(C.element)).map((C,E)=>{const R=C.element.getBoundingClientRect(),O=Pn.length>1;return l.jsx("div",{className:O?We.multiSelectOutline:We.singleSelectOutline,style:{position:"fixed",left:R.left,top:R.top,width:R.width,height:R.height,...O?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},E)}),at&&!G&&(()=>{var Y;const C=M.find(ue=>ue.id===at);if(!(C!=null&&C.boundingBox))return null;if((Y=C.elementBoundingBoxes)!=null&&Y.length)return Ce.length>0?Ce.filter(ue=>document.contains(ue)).map((ue,Oe)=>{const Ye=ue.getBoundingClientRect();return l.jsx("div",{className:`${We.multiSelectOutline} ${We.enter}`,style:{left:Ye.left,top:Ye.top,width:Ye.width,height:Ye.height}},`hover-outline-live-${Oe}`)}):C.elementBoundingBoxes.map((ue,Oe)=>l.jsx("div",{className:`${We.multiSelectOutline} ${We.enter}`,style:{left:ue.x,top:ue.y-mt,width:ue.width,height:ue.height}},`hover-outline-${Oe}`));const E=It&&document.contains(It)?It.getBoundingClientRect():null,R=E?{x:E.left,y:E.top,width:E.width,height:E.height}:{x:C.boundingBox.x,y:C.isFixed?C.boundingBox.y:C.boundingBox.y-mt,width:C.boundingBox.width,height:C.boundingBox.height},O=C.isMultiSelect;return l.jsx("div",{className:`${O?We.multiSelectOutline:We.singleSelectOutline} ${We.enter}`,style:{left:R.x,top:R.y,width:R.width,height:R.height,...O?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Q&&!G&&!_t&&!vo&&l.jsxs("div",{className:`${We.hoverTooltip} ${We.enter}`,style:{left:Math.max(8,Math.min($.x,window.innerWidth-100)),top:Math.max($.y-(Q.reactComponents?48:32),8)},children:[Q.reactComponents&&l.jsx("div",{className:We.hoverReactPath,children:Q.reactComponents}),l.jsx("div",{className:We.hoverElementName,children:Q.elementName})]}),G&&l.jsxs(l.Fragment,{children:[(Fe=G.multiSelectElements)!=null&&Fe.length?G.multiSelectElements.filter(C=>document.contains(C)).map((C,E)=>{const R=C.getBoundingClientRect();return l.jsx("div",{className:`${We.multiSelectOutline} ${tn?We.exit:We.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`pending-multi-${E}`)}):G.targetElement&&document.contains(G.targetElement)?(()=>{const C=G.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${We.singleSelectOutline} ${tn?We.exit:We.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():G.boundingBox&&l.jsx("div",{className:`${G.isMultiSelect?We.multiSelectOutline:We.singleSelectOutline} ${tn?We.exit:We.enter}`,style:{left:G.boundingBox.x,top:G.boundingBox.y-mt,width:G.boundingBox.width,height:G.boundingBox.height,...G.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const C=G.x,E=G.isFixed?G.y:G.y-mt;return l.jsxs(l.Fragment,{children:[l.jsx(iC,{x:C,y:E,isMultiSelect:G.isMultiSelect,isExiting:tn}),l.jsx(jd,{ref:Dt,element:G.element,selectedText:G.selectedText,computedStyles:G.computedStylesObj,placeholder:G.element==="Area selection"?"What should change in this area?":G.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:ye,onCancel:st,isExiting:tn,lightMode:!zs,accentColor:G.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,C/100*window.innerWidth)),...E>window.innerHeight-290?{bottom:window.innerHeight-E+20}:{top:E+20}}})]})})()]}),q&&l.jsxs(l.Fragment,{children:[(ct=q.elementBoundingBoxes)!=null&&ct.length?dt.length>0?dt.filter(C=>document.contains(C)).map((C,E)=>{const R=C.getBoundingClientRect();return l.jsx("div",{className:`${We.multiSelectOutline} ${We.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`edit-multi-live-${E}`)}):q.elementBoundingBoxes.map((C,E)=>l.jsx("div",{className:`${We.multiSelectOutline} ${We.enter}`,style:{left:C.x,top:C.y-mt,width:C.width,height:C.height}},`edit-multi-${E}`)):(()=>{const C=Je&&document.contains(Je)?Je.getBoundingClientRect():null,E=C?{x:C.left,y:C.top,width:C.width,height:C.height}:q.boundingBox?{x:q.boundingBox.x,y:q.isFixed?q.boundingBox.y:q.boundingBox.y-mt,width:q.boundingBox.width,height:q.boundingBox.height}:null;return E?l.jsx("div",{className:`${q.isMultiSelect?We.multiSelectOutline:We.singleSelectOutline} ${We.enter}`,style:{left:E.x,top:E.y,width:E.width,height:E.height,...q.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:$t,element:q.element,selectedText:q.selectedText,computedStyles:n6(q.computedStyles),placeholder:"Edit your feedback...",initialValue:q.comment,submitLabel:"Save",onSubmit:Xt,onCancel:ms,onDelete:()=>xt(q.id),isExiting:Rs,lightMode:!zs,accentColor:q.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const C=q.isFixed?q.y:q.y-mt;return{left:Math.max(160,Math.min(window.innerWidth-160,q.x/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})()})]}),vo&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:So,className:We.dragSelection}),l.jsx("div",{ref:Yn,className:We.highlightsContainer})]})]})]}),document.body)}const pp=y.createContext({});function Lc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const yC=typeof window<"u",_p=yC?y.useLayoutEffect:y.useEffect,Od=y.createContext(null);function gp(t,n){t.indexOf(n)===-1&&t.push(n)}function _l(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ua=(t,n,i)=>i>n?n:i<t?t:i;let yp=()=>{};const tr={},db=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function fb(t){return typeof t=="object"&&t!==null}const hb=t=>/^0[^.\s]+$/u.test(t);function mb(t){let n;return()=>(n===void 0&&(n=t()),n)}const Oi=t=>t,xC=(t,n)=>i=>n(t(i)),zc=(...t)=>t.reduce(xC),gl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class xp{constructor(){this.subscriptions=[]}add(n){return gp(this.subscriptions,n),()=>_l(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ui=t=>t*1e3,zi=t=>t/1e3;function pb(t,n){return n?t*(1e3/n):0}const bC=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},_b=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,vC=1e-7,wC=12;function SC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=_b(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>vC&&++h<wC);return d}function Oc(t,n,i,a){if(t===n&&i===a)return Oi;const c=u=>SC(u,0,1,t,i);return u=>u===0||u===1?u:_b(c(u),n,a)}const gb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,yb=t=>n=>1-t(1-n),xb=Oc(.33,1.53,.69,.99),bp=yb(xb),bb=gb(bp),vb=t=>t>=1?1:(t*=2)<1?.5*bp(t):.5*(2-Math.pow(2,-10*(t-1))),vp=t=>1-Math.sin(Math.acos(t)),wb=yb(vp),Sb=gb(vp),CC=Oc(.42,0,1,1),kC=Oc(0,0,.58,1),Cb=Oc(.42,0,.58,1),kb=t=>Array.isArray(t)&&typeof t[0]!="number";function jb(t,n){return kb(t)?t[bC(0,t.length,n)]:t}const Mb=t=>Array.isArray(t)&&typeof t[0]=="number",jC={linear:Oi,easeIn:CC,easeInOut:Cb,easeOut:kC,circIn:vp,circInOut:Sb,circOut:wb,backIn:bp,backInOut:bb,backOut:xb,anticipate:vb},MC=t=>typeof t=="string",c1=t=>{if(Mb(t)){yp(t.length===4);const[n,i,a,c]=t;return Oc(n,i,a,c)}else if(MC(t))return jC[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function TC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const EC=40;function Tb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((L,D)=>(L[D]=TC(u),L),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,j=()=>{const L=tr.useManualTiming,D=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(D-c.timestamp,EC),1)),c.timestamp=D,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},k=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:id.reduce((L,D)=>{const V=d[D];return L[D]=(P,W=!1,U=!1)=>(i||k(),V.schedule(P,W,U)),L},{}),cancel:L=>{for(let D=0;D<id.length;D++)d[id[D]].cancel(L)},state:c,steps:d}}const{schedule:os,cancel:Ma,state:Bo,steps:lm}=Tb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Oi,!0);let pd;function AC(){pd=void 0}const Qo={now:()=>(pd===void 0&&Qo.set(Bo.isProcessing||tr.useManualTiming?Bo.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(AC)}},Eb=t=>n=>typeof n=="string"&&n.startsWith(t),Ab=Eb("--"),DC=Eb("var(--"),wp=t=>DC(t)?NC.test(t.split("/*")[0].trim()):!1,NC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function u1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const bl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...bl,transform:t=>ua(0,1,t)},ad={...bl,default:1},vc=t=>Math.round(t*1e5)/1e5,Sp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function RC(t){return t==null}const BC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cp=(t,n)=>i=>!!(typeof i=="string"&&BC.test(i)&&i.startsWith(t)||n&&!RC(i)&&Object.prototype.hasOwnProperty.call(i,n)),Db=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Sp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},LC=t=>ua(0,255,t),cm={...bl,transform:t=>Math.round(LC(t))},Mr={test:Cp("rgb","red"),parse:Db("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+cm.transform(t)+", "+cm.transform(n)+", "+cm.transform(i)+", "+vc(Tc.transform(a))+")"};function zC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const zm={test:Cp("#"),parse:zC,transform:Mr.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Qa=$c("deg"),ca=$c("%"),Mt=$c("px"),OC=$c("vh"),$C=$c("vw"),d1={...ca,parse:t=>ca.parse(t)/100,transform:t=>ca.transform(t*100)},dl={test:Cp("hsl","hue"),parse:Db("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+ca.transform(vc(n))+", "+ca.transform(vc(i))+", "+vc(Tc.transform(a))+")"},ao={test:t=>Mr.test(t)||zm.test(t)||dl.test(t),parse:t=>Mr.test(t)?Mr.parse(t):dl.test(t)?dl.parse(t):zm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Mr.transform(t):dl.transform(t),getAnimatableNone:t=>{const n=ao.parse(t);return n.alpha=0,ao.transform(n)}},IC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function PC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Sp))==null?void 0:n.length)||0)+(((i=t.match(IC))==null?void 0:i.length)||0)>0}const Nb="number",Rb="color",HC="var",UC="var(",f1="${}",VC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(VC,p=>(ao.test(p)?(a.color.push(u),c.push(Rb),i.push(ao.parse(p))):p.startsWith(UC)?(a.var.push(u),c.push(HC),i.push(p)):(a.number.push(u),c.push(Nb),i.push(parseFloat(p))),++u,f1)).split(f1);return{values:i,split:h,indexes:a,types:c}}function YC(t){return yl(t).values}function Bb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Nb?c+=vc(a[u]):d===Rb?c+=ao.transform(a[u]):c+=a[u]}return c}}function WC(t){return Bb(yl(t))}const FC=t=>typeof t=="number"?0:ao.test(t)?ao.getAnimatableNone(t):t,XC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:FC(t);function qC(t){const n=yl(t);return Bb(n)(n.values.map((a,c)=>XC(a,n.split[c])))}const Ki={test:PC,parse:YC,createTransformer:WC,getAnimatableNone:qC};function um(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function GC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=um(p,h,t+1/3),u=um(p,h,t),d=um(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Ed(t,n){return i=>i>0?n:t}const _s=(t,n,i)=>t+(n-t)*i,dm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},KC=[zm,Mr,dl],QC=t=>KC.find(n=>n.test(t));function h1(t){const n=QC(t);if(!n)return!1;let i=n.parse(t);return n===dl&&(i=GC(i)),i}const m1=(t,n)=>{const i=h1(t),a=h1(n);if(!i||!a)return Ed(t,n);const c={...i};return u=>(c.red=dm(i.red,a.red,u),c.green=dm(i.green,a.green,u),c.blue=dm(i.blue,a.blue,u),c.alpha=_s(i.alpha,a.alpha,u),Mr.transform(c))},Om=new Set(["none","hidden"]);function ZC(t,n){return Om.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function JC(t,n){return i=>_s(t,n,i)}function kp(t){return typeof t=="number"?JC:typeof t=="string"?wp(t)?Ed:ao.test(t)?m1:n3:Array.isArray(t)?Lb:typeof t=="object"?ao.test(t)?m1:e3:Ed}function Lb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>kp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function e3(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=kp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function t3(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const n3=(t,n)=>{const i=Ki.createTransformer(n),a=yl(t),c=yl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Om.has(t)&&!c.values.length||Om.has(n)&&!a.values.length?ZC(t,n):zc(Lb(t3(a,c),c.values),i):Ed(t,n)};function zb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?_s(t,n,i):kp(t)(t,n)}const s3=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>os.update(n,i),stop:()=>Ma(n),now:()=>Bo.isProcessing?Bo.timestamp:Qo.now()}},Ob=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function jp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function $b(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(jp(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:zi(c)}}const Hs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function $m(t,n){return t*Math.sqrt(1-n*n)}const o3=12;function i3(t,n,i){let a=i;for(let c=1;c<o3;c++)a=a-t(a)/n(a);return a}const fm=.001;function a3({duration:t=Hs.duration,bounce:n=Hs.bounce,velocity:i=Hs.velocity,mass:a=Hs.mass}){let c,u,d=1-n;d=ua(Hs.minDamping,Hs.maxDamping,d),t=ua(Hs.minDuration,Hs.maxDuration,zi(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,w=$m(g,d),S=Math.exp(-x);return fm-b/w*S},u=g=>{const x=g*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-x),j=$m(Math.pow(g,2),d);return(-c(g)+fm>0?-1:1)*((b-w)*S)/j}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-fm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=i3(c,u,h);if(t=ui(t),isNaN(p))return{stiffness:Hs.stiffness,damping:Hs.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const r3=["duration","bounce"],l3=["stiffness","damping","mass"];function p1(t,n){return n.some(i=>t[i]!==void 0)}function c3(t){let n={velocity:Hs.velocity,stiffness:Hs.stiffness,damping:Hs.damping,mass:Hs.mass,isResolvedFromDuration:!1,...t};if(!p1(t,l3)&&p1(t,r3))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ua(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Hs.mass,stiffness:c,damping:u}}else{const i=a3({...t,velocity:0});n={...n,...i,mass:Hs.mass},n.isResolvedFromDuration=!0}return n}function Ec(t=Hs.visualDuration,n=Hs.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=c3({...i,velocity:-zi(i.velocity||0)}),S=b||0,j=g/(2*Math.sqrt(p*_)),k=d-u,M=zi(Math.sqrt(p/_)),z=Math.abs(k)<5;a||(a=z?Hs.restSpeed.granular:Hs.restSpeed.default),c||(c=z?Hs.restDelta.granular:Hs.restDelta.default);let L,D,V,P,W,U;if(j<1)V=$m(M,j),P=(S+j*M*k)/V,L=ae=>{const ie=Math.exp(-j*M*ae);return d-ie*(P*Math.sin(V*ae)+k*Math.cos(V*ae))},W=j*M*P+k*V,U=j*M*k-P*V,D=ae=>Math.exp(-j*M*ae)*(W*Math.sin(V*ae)+U*Math.cos(V*ae));else if(j===1){L=ie=>d-Math.exp(-M*ie)*(k+(S+M*k)*ie);const ae=S+M*k;D=ie=>Math.exp(-M*ie)*(M*ae*ie-S)}else{const ae=M*Math.sqrt(j*j-1);L=Q=>{const ce=Math.exp(-j*M*Q),$=Math.min(ae*Q,300);return d-ce*((S+j*M*k)*Math.sinh($)+ae*k*Math.cosh($))/ae};const ie=(S+j*M*k)/ae,ke=j*M*ie-k*ae,Re=j*M*k-ie*ae;D=Q=>{const ce=Math.exp(-j*M*Q),$=Math.min(ae*Q,300);return ce*(ke*Math.sinh($)+Re*Math.cosh($))}}const Z={calculatedDuration:w&&x||null,velocity:ae=>ui(D(ae)),next:ae=>{if(!w&&j<1){const ke=Math.exp(-j*M*ae),Re=Math.sin(V*ae),Q=Math.cos(V*ae),ce=d-ke*(P*Re+k*Q),$=ui(ke*(W*Re+U*Q));return h.done=Math.abs($)<=a&&Math.abs(d-ce)<=c,h.value=h.done?d:ce,h}const ie=L(ae);if(w)h.done=ae>=x;else{const ke=ui(D(ae));h.done=Math.abs(ke)<=a&&Math.abs(d-ie)<=c}return h.value=h.done?d:ie,h},toString:()=>{const ae=Math.min(jp(Z),Ad),ie=Ob(ke=>Z.next(ae*ke).value,ae,30);return ae+"ms "+ie},toTransition:()=>{}};return Z}Ec.applyToOptions=t=>{const n=$b(t,100,Ec);return t.ease=n.ease,t.duration=ui(n.duration),t.type="keyframes",t};const u3=5;function Ib(t,n,i){const a=Math.max(n-u3,0);return pb(i-t(a),n-a)}function Im({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=U=>h!==void 0&&U<h||p!==void 0&&U>p,S=U=>h===void 0?p:p===void 0||Math.abs(h-U)<Math.abs(p-U)?h:p;let j=i*n;const k=x+j,M=d===void 0?k:d(k);M!==k&&(j=M-x);const z=U=>-j*Math.exp(-U/a),L=U=>M+z(U),D=U=>{const Z=z(U),ae=L(U);b.done=Math.abs(Z)<=g,b.value=b.done?M:ae};let V,P;const W=U=>{w(b.value)&&(V=U,P=Ec({keyframes:[b.value,S(b.value)],velocity:Ib(L,U,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return W(0),{calculatedDuration:null,next:U=>{let Z=!1;return!P&&V===void 0&&(Z=!0,D(U),W(U)),V!==void 0&&U>=V?P.next(U-V):(!Z&&D(U),b)}}}function d3(t,n,i){const a=[],c=i||tr.mix||zb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Oi:n;h=zc(p,h)}a.push(h)}return a}function Pb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(yp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=d3(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=gl(t[x],t[x+1],_);return h[x](b)};return i?_=>g(ua(t[0],t[u-1],_)):g}function Hb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=gl(0,n,a);t.push(_s(i,1,c))}}function Ub(t){const n=[0];return Hb(n,t.length-1),n}function f3(t,n){return t.map(i=>i*n)}function h3(t,n){return t.map(()=>n||Cb).splice(0,t.length-1)}function wc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=kb(a)?a.map(c1):c1(a),u={done:!1,value:n[0]},d=f3(i&&i.length===n.length?i:Ub(n),t),h=Pb(d,n,{ease:Array.isArray(c)?c:h3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const m3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(m3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const p3={decay:Im,inertia:Im,tween:wc,keyframes:wc,spring:Ec};function Vb(t){typeof t.type=="string"&&(t.type=p3[t.type])}class Mp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const _3=t=>t/100;class Dd extends Mp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Qo.now()&&this.tick(Qo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Vb(n);const{type:i=wc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||wc;p!==wc&&typeof h[0]!="number"&&(this.mixKeyframes=zc(_3,zb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=jp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:j,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,D=a;if(x){const U=Math.min(this.currentTime,c)/h;let Z=Math.floor(U),ae=U%1;!ae&&U>=1&&(ae=1),ae===1&&Z--,Z=Math.min(Z,x+1),!!(Z%2)&&(b==="reverse"?(ae=1-ae,w&&(ae-=w/h)):b==="mirror"&&(D=d)),L=ua(0,1,ae)*h}let V;z?(this.delayState.value=_[0],V=this.delayState):V=D.next(L),u&&!z&&(V.value=u(V.value));let{done:P}=V;!z&&p!==null&&(P=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return W&&S!==Im&&(V.value=$d(_,this.options,k,this.speed)),j&&j(V.value),W&&this.finish(),V}then(n,i){return this.finished.then(n,i)}get duration(){return zi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+zi(n)}get time(){return zi(this.currentTime)}set time(n){n=ui(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ib(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Qo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=zi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=s3,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Qo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function g3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Tr=t=>t*180/Math.PI,Pm=t=>{const n=Tr(Math.atan2(t[1],t[0]));return Hm(n)},y3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Pm,rotateZ:Pm,skewX:t=>Tr(Math.atan(t[1])),skewY:t=>Tr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Hm=t=>(t=t%360,t<0&&(t+=360),t),_1=Pm,g1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),y1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),x3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:g1,scaleY:y1,scale:t=>(g1(t)+y1(t))/2,rotateX:t=>Hm(Tr(Math.atan2(t[6],t[5]))),rotateY:t=>Hm(Tr(Math.atan2(-t[2],t[0]))),rotateZ:_1,rotate:_1,skewX:t=>Tr(Math.atan(t[4])),skewY:t=>Tr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Um(t){return t.includes("scale")?1:0}function Vm(t,n){if(!t||t==="none")return Um(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=x3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=y3,c=h}if(!c)return Um(n);const u=a[n],d=c[1].split(",").map(v3);return typeof u=="function"?u(d):d[u]}const b3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Vm(i,n)};function v3(t){return parseFloat(t.trim())}const vl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wl=new Set(vl),x1=t=>t===bl||t===Mt,w3=new Set(["x","y","z"]),S3=vl.filter(t=>!w3.has(t));function C3(t){const n=[];return S3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const er={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Vm(n,"x"),y:(t,{transform:n})=>Vm(n,"y")};er.translateX=er.x;er.translateY=er.y;const Er=new Set;let Ym=!1,Wm=!1,Fm=!1;function Yb(){if(Wm){const t=Array.from(Er).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=C3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Wm=!1,Ym=!1,Er.forEach(t=>t.complete(Fm)),Er.clear()}function Wb(){Er.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Wm=!0)})}function k3(){Fm=!0,Wb(),Yb(),Fm=!1}class Tp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Er.add(this),Ym||(Ym=!0,os.read(Wb),os.resolveKeyframes(Yb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}g3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Er.delete(this)}cancel(){this.state==="scheduled"&&(Er.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const j3=t=>t.startsWith("--");function Fb(t,n,i){j3(n)?t.style.setProperty(n,i):t.style[n]=i}const M3={};function Xb(t,n){const i=mb(t);return()=>{var a;return(a=M3[n])!=null?a:i()}}const T3=Xb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),qb=Xb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_c=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,b1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_c([0,.65,.55,1]),circOut:_c([.55,0,1,.45]),backIn:_c([.31,.01,.66,-.59]),backOut:_c([.33,1.53,.69,.99])};function Gb(t,n){if(t)return typeof t=="function"?qb()?Ob(t,n):"ease-out":Mb(t)?_c(t):Array.isArray(t)?t.map(i=>Gb(i,n)||b1.easeOut):b1[t]}function E3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=Gb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Ep(t){return typeof t=="function"&&"applyToOptions"in t}function A3({type:t,...n}){var i,a;return Ep(t)&&qb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Kb extends Mp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,yp(typeof n.type!="string");const g=A3(n);this.animation=E3(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),Fb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return zi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+zi(n)}get time(){return zi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ui(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&T3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Oi):c(this)}}const Qb={anticipate:vb,backInOut:bb,circInOut:Sb};function D3(t){return t in Qb}function N3(t){typeof t.ease=="string"&&D3(t.ease)&&(t.ease=Qb[t.ease])}const hm=10;class R3 extends Kb{constructor(n){N3(n),Vb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Dd({...d,autoplay:!1}),p=Math.max(hm,Qo.now()-this.startTime),g=ua(0,hm,p-hm),_=h.sample(p).value,{name:x}=this.options;u&&x&&Fb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const v1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ki.test(t)||t==="0")&&!t.startsWith("url("));function B3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function L3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=v1(c,n),h=v1(u,n);return!d||!h?!1:B3(t)||(i==="spring"||Ep(i))&&a}function Xm(t){t.duration=0,t.type="keyframes"}const Zb=new Set(["opacity","clipPath","filter","transform"]),z3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function O3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&z3.test(t[n]))return!0;return!1}const $3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),I3=mb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function P3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return I3()&&i&&(Zb.has(i)||$3.has(i)&&O3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const H3=40;class U3 extends Mp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var S;super(),this.stop=()=>{var j,k;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Qo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Tp;this.keyframeResolver=new w(h,(j,k,M)=>this.onKeyframesResolved(j,k,b,!M),p,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var M,z;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Qo.now();let x=!0;L3(n,u,d,h)||(x=!1,(tr.instantAnimations||!p)&&(_==null||_($d(n,a,i))),n[0]=n[n.length-1],Xm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>H3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!g&&P3(w),j=(z=(M=w.motionValue)==null?void 0:M.owner)==null?void 0:z.current;let k;if(S)try{k=new R3({...w,element:j})}catch{k=new Dd(w)}else k=new Dd(w);k.finished.then(()=>{this.notifyFinished()}).catch(Oi),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),k3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class V3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return w1(this.animations,"duration")}get iterationDuration(){return w1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function w1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class Y3 extends V3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Jb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const W3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function F3(t){const n=W3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function e5(t,n,i=1){const[a,c]=F3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return db(d)?parseFloat(d):d}return wp(c)?e5(c,n,i+1):c}const X3={type:"spring",stiffness:500,damping:25,restSpeed:10},q3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),G3={type:"keyframes",duration:.8},K3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Q3=(t,{keyframes:n})=>n.length>2?G3:wl.has(t)?t.startsWith("scale")?q3(n[1]):X3:K3;function t5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Ap(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?t5(i,t):i}const Z3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function J3(t){for(const n in t)if(!Z3.has(n))return!0;return!1}const Dp=(t,n,i,a={},c,u)=>d=>{const h=Ap(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-ui(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};J3(h)||Object.assign(_,Q3(t,_)),_.duration&&(_.duration=ui(_.duration)),_.repeatDelay&&(_.repeatDelay=ui(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Xm(_),_.delay===0&&(x=!0)),(tr.instantAnimations||tr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Xm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(_.keyframes,h);if(b!==void 0){os.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Dd(_):new U3(_)};function S1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Np(t,n,i,a){if(typeof n=="function"){const[c,u]=S1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=S1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Ar(t,n,i){const a=t.getProps();return Np(a,n,i!==void 0?i:a.custom,t)}const n5=new Set(["width","height","top","left","right","bottom",...vl]),C1=30,ek=t=>!isNaN(parseFloat(t)),Sc={current:void 0};class tk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Qo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Qo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=ek(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new xp);const a=this.events[n].add(i);return n==="change"?()=>{a(),os.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Sc.current&&Sc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Qo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>C1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,C1);return pb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nr(t,n){return new tk(t,n)}const qm=t=>Array.isArray(t);function nk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,nr(i))}function sk(t){return qm(t)?t[t.length-1]||0:t}function ok(t,n){const i=Ar(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=sk(u[d]);nk(t,d,h)}}const po=t=>!!(t&&t.getVelocity);function ik(t){return!!(po(t)&&t.add)}function Gm(t,n){const i=t.getValue("willChange");if(ik(i))return i.add(n);if(!i&&tr.WillChange){const a=new tr.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Rp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const ak="framerAppearId",s5="data-"+Rp(ak);function o5(t){return t.props[s5]}function rk({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Bp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?t5(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),j=h[w];if(j===void 0||x&&rk(x,w))continue;const k={delay:i,...Ap(u||{},w)},M=S.get();if(M!==void 0&&!S.isAnimating()&&!Array.isArray(j)&&j===M&&!k.velocity){os.update(()=>S.set(j));continue}let z=!1;if(window.MotionHandoffAnimation){const V=o5(t);if(V){const P=window.MotionHandoffAnimation(V,w,os);P!==null&&(k.startTime=P,z=!0)}}Gm(t,w);const L=g!=null?g:t.shouldReduceMotion;S.start(Dp(w,S,j,L&&n5.has(w)?{type:!1}:k,t,z));const D=S.animation;D&&_.push(D)}if(d){const w=()=>os.update(()=>{d&&ok(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Km(t,n,i={}){var p;const a=Ar(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Bp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return lk(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function lk(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Km(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Jb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function ck(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Km(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Km(t,n,i);else{const c=typeof n=="function"?Ar(t,n,i.custom):n;a=Promise.all(Bp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const uk={test:t=>t==="auto",parse:t=>t},i5=t=>n=>n.test(t),a5=[bl,Mt,ca,Qa,$C,OC,uk],k1=t=>a5.find(i5(t));function dk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||hb(t):!0}const fk=new Set(["brightness","contrast","saturate","opacity"]);function hk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(Sp)||[];if(!a)return t;const c=i.replace(a,"");let u=fk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const mk=/\b([a-z-]*)\(.*?\)/gu,Qm={...Ki,getAnimatableNone:t=>{const n=t.match(mk);return n?n.map(hk).join(" "):t}},Zm={...Ki,getAnimatableNone:t=>{const n=Ki.parse(t);return Ki.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},j1={...bl,transform:Math.round},pk={rotate:Qa,rotateX:Qa,rotateY:Qa,rotateZ:Qa,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:Qa,skewX:Qa,skewY:Qa,distance:Mt,translateX:Mt,translateY:Mt,translateZ:Mt,x:Mt,y:Mt,z:Mt,perspective:Mt,transformPerspective:Mt,opacity:Tc,originX:d1,originY:d1,originZ:Mt},Lp={borderWidth:Mt,borderTopWidth:Mt,borderRightWidth:Mt,borderBottomWidth:Mt,borderLeftWidth:Mt,borderRadius:Mt,borderTopLeftRadius:Mt,borderTopRightRadius:Mt,borderBottomRightRadius:Mt,borderBottomLeftRadius:Mt,width:Mt,maxWidth:Mt,height:Mt,maxHeight:Mt,top:Mt,right:Mt,bottom:Mt,left:Mt,inset:Mt,insetBlock:Mt,insetBlockStart:Mt,insetBlockEnd:Mt,insetInline:Mt,insetInlineStart:Mt,insetInlineEnd:Mt,padding:Mt,paddingTop:Mt,paddingRight:Mt,paddingBottom:Mt,paddingLeft:Mt,paddingBlock:Mt,paddingBlockStart:Mt,paddingBlockEnd:Mt,paddingInline:Mt,paddingInlineStart:Mt,paddingInlineEnd:Mt,margin:Mt,marginTop:Mt,marginRight:Mt,marginBottom:Mt,marginLeft:Mt,marginBlock:Mt,marginBlockStart:Mt,marginBlockEnd:Mt,marginInline:Mt,marginInlineStart:Mt,marginInlineEnd:Mt,fontSize:Mt,backgroundPositionX:Mt,backgroundPositionY:Mt,...pk,zIndex:j1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:j1},_k={...Lp,color:ao,backgroundColor:ao,outlineColor:ao,fill:ao,stroke:ao,borderColor:ao,borderTopColor:ao,borderRightColor:ao,borderBottomColor:ao,borderLeftColor:ao,filter:Qm,WebkitFilter:Qm,mask:Zm,WebkitMask:Zm},r5=t=>_k[t],gk=new Set([Qm,Zm]);function l5(t,n){let i=r5(t);return gk.has(i)||(i=Ki),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const yk=new Set(["auto","none","0"]);function xk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!yk.has(u)&&yl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=l5(i,c)}class bk extends Tp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),wp(x))){const b=e5(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!n5.has(a)||n.length!==2)return;const[c,u]=n,d=k1(c),h=k1(u),p=u1(c),g=u1(u);if(p!==g&&er[a]){this.needsMeasurement=!0;return}if(d!==h)if(x1(d)&&x1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else er[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||dk(n[c]))&&a.push(c);a.length&&xk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=er[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=er[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function zp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const c5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return fb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Op}=Tb(queueMicrotask,!1),qi={x:!1,y:!1};function u5(){return qi.x||qi.y}function vk(t){return t==="x"||t==="y"?qi[t]?null:(qi[t]=!0,()=>{qi[t]=!1}):qi.x||qi.y?null:(qi.x=qi.y=!0,()=>{qi.x=qi.y=!1})}function d5(t,n){const i=zp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function wk(t){return!(t.pointerType==="touch"||u5())}function Sk(t,n,i={}){const[a,c,u]=d5(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",S)},x=k=>{g&&(g(k),g=void 0),_()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},j=k=>{if(!wk(k))return;p=!1;const M=n(d,k);typeof M=="function"&&(g=M,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",w,c)}),u}const f5=(t,n)=>n?t===n?!0:f5(t,n.parentElement):!1,$p=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Ck=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kk(t){return Ck.has(t.tagName)||t.isContentEditable===!0}const jk=new Set(["INPUT","SELECT","TEXTAREA"]);function Mk(t){return jk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function M1(t){return n=>{n.key==="Enter"&&t(n)}}function mm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Tk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=M1(()=>{if(gd.has(i))return;mm(i,"down");const c=M1(()=>{mm(i,"up")}),u=()=>mm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function T1(t){return $p(t)&&!u5()}const E1=new WeakSet;function Ek(t,n,i={}){const[a,c,u]=d5(t,i),d=h=>{const p=h.currentTarget;if(!T1(h)||E1.has(h))return;gd.add(p),i.stopPropagation&&E1.add(h);const g=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),T1(w)&&typeof g=="function"&&g(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||f5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",g=>Tk(g,c)),!kk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return fb(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let Za;const h5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Ak=h5("inline","width","offsetWidth"),Dk=h5("block","height","offsetHeight");function Nk({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Ak(t,n)},get height(){return Dk(t,n)}})})}function Rk(t){t.forEach(Nk)}function Bk(){typeof ResizeObserver>"u"||(Za=new ResizeObserver(Rk))}function Lk(t,n){Za||Bk();const i=zp(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),Za==null||Za.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||Za==null||Za.unobserve(a)})}}const xd=new Set;let fl;function zk(){fl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",fl)}function Ok(t){return xd.add(t),fl||zk(),()=>{xd.delete(t),!xd.size&&typeof fl=="function"&&(window.removeEventListener("resize",fl),fl=void 0)}}function A1(t,n){return typeof t=="function"?Ok(t):Lk(t,n)}function m5(t){return Id(t)&&t.tagName==="svg"}function $k(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Pb(c,u,d);return n?h(a):h}const Ik=[...a5,ao,Ki],Pk=t=>Ik.find(i5(t)),D1=()=>({translate:0,scale:1,origin:0,originPoint:0}),hl=()=>({x:D1(),y:D1()}),N1=()=>({min:0,max:0}),io=()=>({x:N1(),y:N1()}),Ac=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Dc(t){return typeof t=="string"||Array.isArray(t)}const Ip=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pp=["initial",...Ip];function Hd(t){return Pd(t.animate)||Pp.some(n=>Dc(t[n]))}function p5(t){return!!(Hd(t)||t.variants)}function Hk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(po(c))t.addValue(a,c);else if(po(u))t.addValue(a,nr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,nr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const Jm={current:null},_5={current:!1},Uk=typeof window<"u";function Vk(){if(_5.current=!0,!!Uk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>Jm.current=t.matches;t.addEventListener("change",n),n()}else Jm.current=!1}const R1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Nd={};function g5(t){Nd=t}function Yk(){return Nd}class y5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Tp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Qo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,os.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=p5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&po(S)&&S.set(g[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Ac.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(_5.current||Vk(),this.shouldReduceMotion=Jm.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Ma(this.notifyUpdate),Ma(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Zb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Kb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:ui(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=wl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&os.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Nd){const i=Nd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):io()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<R1.length;a++){const c=R1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Hk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=nr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(db(a)||hb(a))?a=parseFloat(a):!Pk(a)&&Ki.test(i)&&(a=l5(n,i)),this.setBaseTarget(n,po(a)?a.get():a)),po(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Np(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!po(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new xp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Op.render(this.render)}}class x5 extends y5{constructor(){super(...arguments),this.KeyframeResolver=bk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;po(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class sr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function b5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function Wk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function Fk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function pm(t){return t===void 0||t===1}function ep({scale:t,scaleX:n,scaleY:i}){return!pm(t)||!pm(n)||!pm(i)}function Cr(t){return ep(t)||v5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function v5(t){return B1(t.x)||B1(t.y)}function B1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function L1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function tp(t,n=0,i=1,a,c){t.min=L1(t.min,n,i,a,c),t.max=L1(t.max,n,i,a,c)}function w5(t,{x:n,y:i}){tp(t.x,n.translate,n.scale,n.originPoint),tp(t.y,i.translate,i.scale,i.originPoint)}const z1=.999999999999,O1=1.0000000000001;function Xk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ra(t.x,-u.scroll.offset.x),ra(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,w5(t,d)),a&&Cr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<O1&&n.x>z1&&(n.x=1),n.y<O1&&n.y>z1&&(n.y=1)}function ra(t,n){t.min+=n,t.max+=n}function $1(t,n,i,a,c=.5){const u=_s(t.min,t.max,c);tp(t,n,i,u,a)}function I1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;$1(t.x,I1(n.x,a.x),n.scaleX,n.scale,n.originX),$1(t.y,I1(n.y,a.y),n.scaleY,n.scale,n.originY)}function S5(t,n){return b5(Fk(t.getBoundingClientRect(),n))}function qk(t,n,i){const a=S5(t,i),{scroll:c}=n;return c&&(ra(a.x,c.offset.x),ra(a.y,c.offset.y)),a}const Gk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Kk=vl.length;function Qk(t,n,i){let a="",c=!0;for(let u=0;u<Kk;u++){const d=vl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=c5(h,Lp[d]);if(!p){c=!1;const _=Gk[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Hp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(wl.has(p)){d=!0;continue}else if(Ab(p)){c[p]=g;continue}else{const _=c5(g,Lp[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=Qk(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function C5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function P1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const fc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Mt.test(t))t=parseFloat(t);else return t;const i=P1(t,n.target.x),a=P1(t,n.target.y);return`${i}% ${a}%`}},Zk={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ki.parse(t);if(c.length>5)return a;const u=Ki.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=_s(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},np={borderRadius:{...fc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fc,borderTopRightRadius:fc,borderBottomLeftRadius:fc,borderBottomRightRadius:fc,boxShadow:Zk};function k5(t,{layout:n,layoutId:i}){return wl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!np[t]||t==="opacity")}function Up(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(po(a[h])||c&&po(c[h])||k5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function Jk(t){return window.getComputedStyle(t)}class j5 extends x5{constructor(){super(...arguments),this.type="html",this.renderInstance=C5}readValueFromInstance(n,i){var a;if(wl.has(i))return(a=this.projection)!=null&&a.isProjecting?Um(i):b3(n,i);{const c=Jk(n),u=(Ab(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return S5(n,i)}build(n,i,a){Hp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Up(n,i,a)}}function e8(t,n){return t in n}class t8 extends y5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(e8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return io()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const n8={offset:"stroke-dashoffset",array:"stroke-dasharray"},s8={offset:"strokeDashoffset",array:"strokeDasharray"};function o8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?n8:s8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const i8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function M5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var w,S;if(Hp(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const j of i8)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&o8(x,c,u,d,!1)}const T5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),E5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function a8(t,n,i,a){C5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(T5.has(c)?c:Rp(c),n.attrs[c])}function A5(t,n,i){const a=Up(t,n,i);for(const c in t)if(po(t[c])||po(n[c])){const u=vl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class D5 extends x5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=io}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(wl.has(i)){const a=r5(i);return a&&a.default||0}return i=T5.has(i)?i:Rp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return A5(n,i,a)}build(n,i,a){M5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){a8(n,i,a,c)}mount(n){this.isSVGTag=E5(n.tagName),super.mount(n)}}const r8=Pp.length;function N5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?N5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<r8;i++){const a=Pp[i],c=t.props[a];(Dc(c)||c===!1)&&(n[a]=c)}return n}function R5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const l8=[...Ip].reverse(),c8=Ip.length;function u8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>ck(t,i,a)))}function d8(t){let n=u8(t),i=H1(),a=!0,c=!1;const u=g=>(_,x)=>{var w;const b=Ar(t,x,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:j,...k}=b;_={..._,...k,...j}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=N5(t.parent)||{},b=[],w=new Set;let S={},j=1/0;for(let M=0;M<c8;M++){const z=l8[M],L=i[z],D=_[z]!==void 0?_[z]:x[z],V=Dc(D),P=z===g?L.isActive:null;P===!1&&(j=M);let W=D===x[z]&&D!==_[z]&&V;if(W&&(a||c)&&t.manuallyAnimateOnMount&&(W=!1),L.protectedKeys={...S},!L.isActive&&P===null||!D&&!L.prevProp||Pd(D)||typeof D=="boolean")continue;if(z==="exit"&&L.isActive&&P!==!0){L.prevResolvedValues&&(S={...S,...L.prevResolvedValues});continue}const U=f8(L.prevProp,D);let Z=U||z===g&&L.isActive&&!W&&V||M>j&&V,ae=!1;const ie=Array.isArray(D)?D:[D];let ke=ie.reduce(u(z),{});P===!1&&(ke={});const{prevResolvedValues:Re={}}=L,Q={...Re,...ke},ce=G=>{Z=!0,w.has(G)&&(ae=!0,w.delete(G)),L.needsAnimating[G]=!0;const K=t.getValue(G);K&&(K.liveStyle=!1)};for(const G in Q){const K=ke[G],pe=Re[G];if(S.hasOwnProperty(G))continue;let N=!1;qm(K)&&qm(pe)?N=!R5(K,pe):N=K!==pe,N?K!=null?ce(G):w.add(G):K!==void 0&&w.has(G)?ce(G):L.protectedKeys[G]=!0}L.prevProp=D,L.prevResolvedValues=ke,L.isActive&&(S={...S,...ke}),(a||c)&&t.blockInitialAnimation&&(Z=!1);const $=W&&U;Z&&(!$||ae)&&b.push(...ie.map(G=>{const K={type:z};if(typeof G=="string"&&(a||c)&&!$&&t.manuallyAnimateOnMount&&t.parent){const{parent:pe}=t,N=Ar(pe,G);if(pe.enteringChildren&&N){const{delayChildren:ne}=N.transition||{};K.delay=Jb(pe.enteringChildren,t,ne)}}return{animation:G,options:K}}))}if(w.size){const M={};if(typeof _.initial!="boolean"){const z=Ar(t,Array.isArray(_.initial)?_.initial[0]:_.initial);z&&z.transition&&(M.transition=z.transition)}w.forEach(z=>{const L=t.getBaseTarget(z),D=t.getValue(z);D&&(D.liveStyle=!0),M[z]=L!=null?L:null}),b.push({animation:M})}let k=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=H1(),c=!0}}}function f8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!R5(n,t):!1}function wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function H1(){return{animate:wr(!0),whileInView:wr(),whileHover:wr(),whileTap:wr(),whileDrag:wr(),whileFocus:wr(),exit:wr()}}function sp(t,n){t.min=n.min,t.max=n.max}function Xi(t,n){sp(t.x,n.x),sp(t.y,n.y)}function U1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const B5=1e-4,h8=1-B5,m8=1+B5,L5=.01,p8=0-L5,_8=0+L5;function Zo(t){return t.max-t.min}function g8(t,n,i){return Math.abs(t-n)<=i}function V1(t,n,i,a=.5){t.origin=a,t.originPoint=_s(n.min,n.max,t.origin),t.scale=Zo(i)/Zo(n),t.translate=_s(i.min,i.max,t.origin)-t.originPoint,(t.scale>=h8&&t.scale<=m8||isNaN(t.scale))&&(t.scale=1),(t.translate>=p8&&t.translate<=_8||isNaN(t.translate))&&(t.translate=0)}function Cc(t,n,i,a){V1(t.x,n.x,i.x,a?a.originX:void 0),V1(t.y,n.y,i.y,a?a.originY:void 0)}function Y1(t,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Zo(n)}function y8(t,n,i,a){Y1(t.x,n.x,i.x,a==null?void 0:a.x),Y1(t.y,n.y,i.y,a==null?void 0:a.y)}function W1(t,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Zo(n)}function Bd(t,n,i,a){W1(t.x,n.x,i.x,a==null?void 0:a.x),W1(t.y,n.y,i.y,a==null?void 0:a.y)}function F1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function x8(t,n=0,i=1,a=.5,c,u=t,d=t){if(ca.test(n)&&(n=parseFloat(n),n=_s(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=_s(u.min,u.max,a);t===u&&(h-=n),t.min=F1(t.min,n,i,h,c),t.max=F1(t.max,n,i,h,c)}function X1(t,n,[i,a,c],u,d){x8(t,n[i],n[a],n[c],n.scale,u,d)}const b8=["x","scaleX","originX"],v8=["y","scaleY","originY"];function q1(t,n,i,a){X1(t.x,n,b8,i?i.x:void 0,a?a.x:void 0),X1(t.y,n,v8,i?i.y:void 0,a?a.y:void 0)}function G1(t){return t.translate===0&&t.scale===1}function z5(t){return G1(t.x)&&G1(t.y)}function K1(t,n){return t.min===n.min&&t.max===n.max}function w8(t,n){return K1(t.x,n.x)&&K1(t.y,n.y)}function Q1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function O5(t,n){return Q1(t.x,n.x)&&Q1(t.y,n.y)}function Z1(t){return Zo(t.x)/Zo(t.y)}function J1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function aa(t){return[t("x"),t("y")]}function S8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const $5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],C8=$5.length,ex=t=>typeof t=="string"?parseFloat(t):t,tx=t=>typeof t=="number"||Mt.test(t);function k8(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=_s(0,(d=i.opacity)!=null?d:1,j8(a)),t.opacityExit=_s((h=n.opacity)!=null?h:1,0,M8(a))):u&&(t.opacity=_s((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<C8;_++){const x=$5[_];let b=nx(n,x),w=nx(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||tx(b)===tx(w)?(t[x]=Math.max(_s(ex(b),ex(w),a),0),(ca.test(w)||ca.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=_s(n.rotate||0,i.rotate||0,a))}function nx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const j8=I5(0,.5,wb),M8=I5(.5,.95,Oi);function I5(t,n,i){return a=>a<t?0:a>n?1:i(gl(t,n,a))}function P5(t,n,i){const a=po(t)?t:nr(t);return a.start(Dp("",a,n,i)),a.animation}function Nc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const T8=(t,n)=>t.depth-n.depth;class E8{constructor(){this.children=[],this.isDirty=!1}add(n){gp(this.children,n),this.isDirty=!0}remove(n){_l(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(T8),this.isDirty=!1,this.children.forEach(n)}}function A8(t,n){const i=Qo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Ma(a),t(u-n))};return os.setup(a,!0),()=>Ma(a)}function vd(t){return po(t)?t.get():t}class D8{constructor(){this.members=[]}add(n){gp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(_l(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(_l(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_m=["","X","Y","Z"],N8=1e3;let R8=0;function gm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function H5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=o5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",os,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&H5(a)}function U5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=R8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(z8),this.nodes.forEach(U8),this.nodes.forEach(V8),this.nodes.forEach(O8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new E8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new xp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!m5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;os.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=A8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(ix)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||q8,{onLayoutAnimationStart:j,onLayoutAnimationComplete:k}=g.getProps(),M=!this.targetLayout||!O5(this.targetLayout,w),z=!x&&b;if(this.options.layoutRoot||this.resumeFrom||z||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Ap(S,"layout"),onPlay:j,onComplete:k};(g.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(_,z)}else x||ix(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ma(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Y8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&H5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(I8),this.nodes.forEach(sx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ox);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(P8),this.nodes.forEach(H8),this.nodes.forEach(B8),this.nodes.forEach(L8)):this.nodes.forEach(ox),this.clearAllSnapshots();const h=Qo.now();Bo.delta=ua(0,1e3/60,h-Bo.timestamp),Bo.timestamp=h,Bo.isProcessing=!0,lm.update.process(Bo),lm.preRender.process(Bo),lm.render.process(Bo),Bo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Op.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($8),this.sharedNodes.forEach(W8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,os.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){os.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Zo(this.snapshot.measuredBox.x)&&!Zo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=io()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!z5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||Cr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),G8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return io();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(K8))){const{scroll:_}=this.root;_&&(ra(h.x,_.offset.x),ra(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=io();if(Xi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Xi(h,d),ra(h.x,x.offset.x),ra(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||io();Xi(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(ra(g.x,-w.scroll.offset.x),ra(g.y,-w.scroll.offset.y)),Cr(w.latestValues)&&bd(g,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return Cr(this.latestValues)&&bd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=io();Xi(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!Cr(_.latestValues))continue;let x;_.instance&&(ep(_.latestValues)&&_.updateSnapshot(),x=io(),Xi(x,_.measurePageBox())),q1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return Cr(this.latestValues)&&q1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Bo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=Bo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=io(),this.targetWithTransforms=io()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Xi(this.target,this.layout.layoutBox),w5(this.target,this.targetDelta)):Xi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ep(this.parent.latestValues)||v5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=io(),this.relativeTargetOrigin=io(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Xi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Bo.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Xi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;Xk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=io());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U1(this.prevProjectionDelta.x,this.projectionDelta.x),U1(this.prevProjectionDelta.y,this.projectionDelta.y)),Cc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!J1(this.projectionDelta.x,this.prevProjectionDelta.x)||!J1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hl(),this.projectionDelta=hl(),this.projectionDeltaWithTransform=hl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=hl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=io(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=w!==S,k=this.getStack(),M=!k||k.members.length<=1,z=!!(j&&!M&&this.options.crossfade===!0&&!this.path.some(X8));this.animationProgress=0;let L;this.mixTargetDelta=D=>{const V=D/1e3;ax(x.x,d.x,V),ax(x.y,d.y,V),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),F8(this.relativeTarget,this.relativeTargetOrigin,b,V),L&&w8(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=io()),Xi(L,this.relativeTarget)),j&&(this.animationValues=_,k8(_,g,this.latestValues,V,z,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=V},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(Ma(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=os.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=nr(0)),this.motionValue.jump(0,!1),this.currentAnimation=P5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(N8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&V5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||io();const x=Zo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Zo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Xi(h,p),bd(h,_),Cc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new D8),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&gm("z",d,g,this.animationValues);for(let _=0;_<_m.length;_++)gm(`rotate${_m[_]}`,d,g,this.animationValues),gm(`skew${_m[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Cr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=S8(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?(j=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const k in np){if(_[k]===void 0)continue;const{correct:M,applyTo:z,isCSSVariable:L}=np[k],D=x==="none"?_[k]:M(_[k],g);if(z){const V=z.length;for(let P=0;P<V;P++)d[z[P]]=D}else L?this.options.visualElement.renderState.vars[k]=D:d[k]=D}this.options.layoutId&&(d.pointerEvents=g===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(sx),this.root.sharedNodes.clear()}}}function B8(t){t.updateLayout()}function L8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Zo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";sp(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else V5(u,n.layoutBox,a)&&aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Zo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=hl();Cc(h,a,n.layoutBox);const p=hl();d?Cc(p,t.applyTransform(c,!0),n.measuredBox):Cc(p,a,n.layoutBox);const g=!z5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,j=io();Bd(j,n.layoutBox,b.layoutBox,S);const k=io();Bd(k,a,w.layoutBox,S),O5(j,k)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function z8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function O8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function $8(t){t.clearSnapshot()}function sx(t){t.clearMeasurements()}function I8(t){t.isLayoutDirty=!0,t.updateLayout()}function ox(t){t.isLayoutDirty=!1}function P8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function H8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ix(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function U8(t){t.resolveTargetDelta()}function V8(t){t.calcProjection()}function Y8(t){t.resetSkewAndRotation()}function W8(t){t.removeLeadSnapshot()}function ax(t,n,i){t.translate=_s(n.translate,0,i),t.scale=_s(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function rx(t,n,i,a){t.min=_s(n.min,i.min,a),t.max=_s(n.max,i.max,a)}function F8(t,n,i,a){rx(t.x,n.x,i.x,a),rx(t.y,n.y,i.y,a)}function X8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const q8={duration:.45,ease:[.4,0,.1,1]},lx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),cx=lx("applewebkit/")&&!lx("chrome/")?Math.round:Oi;function ux(t){t.min=cx(t.min),t.max=cx(t.max)}function G8(t){ux(t.x),ux(t.y)}function V5(t,n,i){return t==="position"||t==="preserve-aspect"&&!g8(Z1(n),Z1(i),.2)}function K8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const Q8=U5({attachResizeListener:(t,n)=>Nc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ym={current:void 0},Y5=U5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ym.current){const t=new Q8({});t.mount(window),t.setOptions({layoutScroll:!0}),ym.current=t}return ym.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ud=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function dx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function Z8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=dx(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():dx(t[c],null)}}}}function J8(...t){return y.useCallback(Z8(...t),t)}class ej extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function tj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Ud),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=J8(h,_);return y.useInsertionEffect(()=>{const{width:S,height:j,top:k,left:M,right:z,bottom:L}=p.current;if(n||u===!1||!h.current||!S||!j)return;const D=i==="left"?`left: ${M}`:`right: ${z}`,V=a==="bottom"?`bottom: ${L}`:`top: ${k}`;h.current.dataset.motionPopId=d;const P=document.createElement("style");g&&(P.nonce=g);const W=c!=null?c:document.head;return W.appendChild(P),P.sheet&&P.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${j}px !important;
            ${D}px !important;
            ${V}px !important;
          }
        `),()=>{var U;(U=h.current)==null||U.removeAttribute("data-motion-pop-id"),W.contains(P)&&W.removeChild(P)}},[n]),l.jsx(ej,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const nj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Lc(sj),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const j of _.values())if(!j)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),y.useMemo(()=>{_.forEach((S,j)=>_.set(j,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(tj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),l.jsx(Od.Provider,{value:w,children:t})};function sj(){return new Map}function W5(t=!0){const n=y.useContext(Od);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function fx(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Vd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=W5(d),b=y.useMemo(()=>fx(t),[t]),w=d&&!_?[]:b.map(rd),S=y.useRef(!0),j=y.useRef(b),k=Lc(()=>new Map),M=y.useRef(new Set),[z,L]=y.useState(b),[D,V]=y.useState(b);_p(()=>{S.current=!1,j.current=b;for(let U=0;U<D.length;U++){const Z=rd(D[U]);w.includes(Z)?(k.delete(Z),M.current.delete(Z)):k.get(Z)!==!0&&k.set(Z,!1)}},[D,w.length,w.join("-")]);const P=[];if(b!==z){let U=[...b];for(let Z=0;Z<D.length;Z++){const ae=D[Z],ie=rd(ae);w.includes(ie)||(U.splice(Z,0,ae),P.push(ae))}return u==="wait"&&P.length&&(U=P),V(fx(U)),L(b),null}const{forceRender:W}=y.useContext(pp);return l.jsx(l.Fragment,{children:D.map(U=>{const Z=rd(U),ae=d&&!_?!1:b===D||w.includes(Z),ie=()=>{if(M.current.has(Z))return;if(k.has(Z))M.current.add(Z),k.set(Z,!0);else return;let ke=!0;k.forEach(Re=>{Re||(ke=!1)}),ke&&(W==null||W(),V(j.current),d&&(x==null||x()),a&&a())};return l.jsx(nj,{isPresent:ae,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:ae?void 0:ie,anchorX:h,anchorY:p,children:U},Z)})})},F5=y.createContext({strict:!1}),hx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let mx=!1;function oj(){if(mx)return;const t={};for(const n in hx)t[n]={isEnabled:i=>hx[n].some(a=>!!i[a])};g5(t),mx=!0}function X5(){return oj(),Yk()}function ij(t){const n=X5();for(const i in t)n[i]={...n[i],...t[i]};g5(n)}const aj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||aj.has(t)}let q5=t=>!Ld(t);function rj(t){typeof t=="function"&&(q5=n=>n.startsWith("on")?!Ld(n):t(n))}try{rj(require("@emotion/is-prop-valid").default)}catch{}function lj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||po(t[c])||(q5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=y.createContext({});function cj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Dc(i)?i:void 0,animate:Dc(a)?a:void 0}}return t.inherit!==!1?n:{}}function uj(t){const{initial:n,animate:i}=cj(t,y.useContext(Yd));return y.useMemo(()=>({initial:n,animate:i}),[px(n),px(i)])}function px(t){return Array.isArray(t)?t.join(" "):t}const Vp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function G5(t,n,i){for(const a in n)!po(n[a])&&!k5(a,i)&&(t[a]=n[a])}function dj({transformTemplate:t},n){return y.useMemo(()=>{const i=Vp();return Hp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function fj(t,n){const i=t.style||{},a={};return G5(a,i,t),Object.assign(a,dj(t,n)),a}function hj(t,n){const i={},a=fj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const K5=()=>({...Vp(),attrs:{}});function mj(t,n,i,a){const c=y.useMemo(()=>{const u=K5();return M5(u,n,E5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};G5(u,t.style,t),c.style={...u,...c.style}}return c}const pj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yp(t){return typeof t!="string"||t.includes("-")?!1:!!(pj.indexOf(t)>-1||/[A-Z]/u.test(t))}function _j(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Yp(t))?mj:hj)(n,a,c,t),g=lj(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>po(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function gj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:yj(i,a,c,t),renderState:n()}}function yj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),g=p5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Np(t,b[w]);if(S){const{transitionEnd:j,transition:k,...M}=S;for(const z in M){let L=M[z];if(Array.isArray(L)){const D=_?L.length-1:0;L=L[D]}L!==null&&(c[z]=L)}for(const z in j)c[z]=j[z]}}}return c}const Q5=t=>(n,i)=>{const a=y.useContext(Yd),c=y.useContext(Od),u=()=>gj(t,n,a,c);return i?u():Lc(u)},xj=Q5({scrapeMotionValuesFromProps:Up,createRenderState:Vp}),bj=Q5({scrapeMotionValuesFromProps:A5,createRenderState:K5}),vj=Symbol.for("motionComponentSymbol");function wj(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const Z5=y.createContext({});function cl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Sj(t,n,i,a,c,u){var L,D;const{visualElement:d}=y.useContext(Yd),h=y.useContext(F5),p=y.useContext(Od),g=y.useContext(Ud),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,j=y.useContext(Z5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Cj(b.current,i,c,j);const k=y.useRef(!1);y.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const M=i[s5],z=y.useRef(!!M&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,M))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,M)));return _p(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),z.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!z.current&&S.animationState&&S.animationState.animateChanges(),z.current&&(queueMicrotask(()=>{var V;(V=window.MotionHandoffMarkAsComplete)==null||V.call(window,M)}),z.current=!1),S.enteringChildren=void 0)}),S}function Cj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:J5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&cl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function J5(t){if(t)return t.options.allowProjection!==!1?t.projection:J5(t.parent)}function xm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&ij(a);const u=i?i==="svg":Yp(t),d=u?bj:xj;function h(x,b){let w;const S={...y.useContext(Ud),...x,layoutId:kj(x)},{isStatic:j}=S,k=uj(x),M=d(x,j);if(!j&&typeof window<"u"){jj();const z=Mj(S);w=z.MeasureLayout,k.visualElement=Sj(t,M,S,c,z.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:k,children:[w&&k.visualElement?l.jsx(w,{visualElement:k.visualElement,...S}):null,_j(t,x,wj(M,k.visualElement,b),M,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[vj]=t,p}function kj({layoutId:t}){const n=y.useContext(pp).id;return n&&t!==void 0?n+"-"+t:t}function jj(t,n){y.useContext(F5).strict}function Mj(t){const n=X5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Tj(t,n){if(typeof Proxy>"u")return xm;const i=new Map,a=(u,d)=>xm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,xm(d,void 0,t,n)),i.get(d))})}const Ej=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Yp(t))?new D5(n):new j5(n,{allowProjection:t!==y.Fragment})};class Aj extends sr{constructor(n){super(n),n.animationState||(n.animationState=d8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Dj=0;class Nj extends sr{constructor(){super(...arguments),this.id=Dj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Ar(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Rj={animation:{Feature:Aj},exit:{Feature:Nj}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const Bj=t=>n=>$p(n)&&t(n,Ic(n));function kc(t,n,i,a){return Nc(t,n,Bj(i),a)}const e2=({current:t})=>t?t.ownerDocument.defaultView:null,_x=(t,n)=>Math.abs(t-n);function Lj(t,n){const i=_x(t.x,n.x),a=_x(t.y,n.y);return Math.sqrt(i**2+a**2)}const gx=new Set(["auto","scroll"]);class t2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const w=bm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,j=Lj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!j)return;const{point:k}=w,{timestamp:M}=Bo;this.history.push({...k,timestamp:M});const{onStart:z,onMove:L}=this.handlers;S||(z&&z(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ld(S,this.transformPagePoint),os.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:j,onSessionEnd:k,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=bm(w.type==="pointercancel"?this.lastMoveEventInfo:ld(S,this.transformPagePoint),this.history);this.startEvent&&j&&j(w,z),k&&k(w,z)},!$p(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),g=ld(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=Bo;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,bm(g,this.history)),this.removeListeners=zc(kc(this.contextWindow,"pointermove",this.handlePointerMove),kc(this.contextWindow,"pointerup",this.handlePointerUp),kc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(gx.has(a.overflowX)||gx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),os.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ma(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function yx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function bm({point:t},n){return{point:t,delta:yx(t,n2(n)),offset:yx(t,zj(n)),velocity:Oj(n,.1)}}function zj(t){return t[0]}function n2(t){return t[t.length-1]}function Oj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=n2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ui(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ui(n)*2&&(a=t[1]);const u=zi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function $j(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?_s(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?_s(i,t,a.max):Math.min(t,i)),t}function xx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function Ij(t,{top:n,left:i,bottom:a,right:c}){return{x:xx(t.x,i,c),y:xx(t.y,n,a)}}function bx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function Pj(t,n){return{x:bx(t.x,n.x),y:bx(t.y,n.y)}}function Hj(t,n){let i=.5;const a=Zo(t),c=Zo(n);return c>a?i=gl(n.min,n.max-a,t.min):a>c&&(i=gl(t.min,t.max-c,n.min)),ua(0,1,i)}function Uj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const op=.35;function Vj(t=op){return t===!1?t=0:t===!0&&(t=op),{x:vx(t,"left","right"),y:vx(t,"top","bottom")}}function vx(t,n,i){return{min:wx(t,n),max:wx(t,i)}}function wx(t,n){return typeof t=="number"?t:t[n]||0}const Yj=new WeakMap;class Wj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=io(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:j}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vk(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),aa(M=>{let z=this.getAxisMotionValue(M).get()||0;if(ca.test(z)){const{projection:L}=this.visualElement;if(L&&L.layout){const D=L.layout.layoutBox[M];D&&(z=Zo(D)*(parseFloat(z)/100))}}this.originPoint[M]=z}),j&&os.update(()=>j(x,b),!1,!0),Gm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:j,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:M}=b;if(S&&this.currentDirection===null){this.currentDirection=Xj(M),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),k&&os.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new t2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:e2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&os.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=$j(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&cl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Ij(a.layoutBox,n):this.constraints=!1,this.elastic=Vj(i),c!==this.constraints&&!cl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&aa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Uj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!cl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=qk(a,c.root,this.visualElement.getTransformPagePoint());let d=Pj(c.layout.layoutBox,u);if(i){const h=i(Wk(d));this.hasMutatedConstraints=!!h,h&&(d=b5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=aa(_=>{if(!cd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Gm(this.visualElement,n),a.start(Dp(n,a,0,i,this.visualElement,!1))}stopAnimation(){aa(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){aa(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-_s(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!cl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};aa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Hj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),aa(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(_s(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Yj.set(this.visualElement,this);const n=this.visualElement.current,i=kc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,w=b!==n&&Mk(b);_&&x&&!w&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();cl(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Fj(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),os.read(c);const h=Nc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(aa(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=op,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Sx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function Fj(t,n,i){const a=A1(t,Sx(i)),c=A1(n,Sx(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function Xj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class qj extends sr{constructor(n){super(n),this.removeGroupControls=Oi,this.removeListeners=Oi,this.controls=new Wj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Oi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const vm=t=>(n,i)=>{t&&os.update(()=>t(n,i),!1,!0)};class Gj extends sr{constructor(){super(...arguments),this.removePointerDownListener=Oi}onPointerDown(n){this.session=new t2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:e2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:vm(n),onStart:vm(i),onMove:vm(a),onEnd:(u,d)=>{delete this.session,c&&os.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=kc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let wm=!1;class Kj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),wm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),wm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||os.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Op.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;wm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function s2(t){const[n,i]=W5(),a=y.useContext(pp);return l.jsx(Kj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(Z5),isPresent:n,safeToRemove:i})}const Qj={pan:{Feature:Gj},drag:{Feature:qj,ProjectionNode:Y5,MeasureLayout:s2}};function Cx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&os.postRender(()=>u(n,Ic(n)))}class Zj extends sr{mount(){const{current:n}=this.node;n&&(this.unmount=Sk(n,(i,a)=>(Cx(this.node,a,"Start"),c=>Cx(this.node,c,"End"))))}unmount(){}}class Jj extends sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zc(Nc(this.node.current,"focus",()=>this.onFocus()),Nc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function kx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&os.postRender(()=>u(n,Ic(n)))}class eM extends sr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Ek(n,(c,u)=>(kx(this.node,u,"Start"),(d,{success:h})=>kx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ip=new WeakMap,Sm=new WeakMap,tM=t=>{const n=ip.get(t.target);n&&n(t)},nM=t=>{t.forEach(tM)};function sM({root:t,...n}){const i=t||document;Sm.has(i)||Sm.set(i,{});const a=Sm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(nM,{root:t,...n})),a[c]}function oM(t,n,i){const a=sM(n);return ip.set(t,i),a.observe(t),()=>{ip.delete(t),a.unobserve(t)}}const iM={some:0,all:1};class aM extends sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:iM[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(g)};this.stopObserver=oM(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(rM(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function rM({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const lM={inView:{Feature:aM},tap:{Feature:eM},focus:{Feature:Jj},hover:{Feature:Zj}},cM={layout:{ProjectionNode:Y5,MeasureLayout:s2}},uM={...Rj,...lM,...Qj,...cM},ci=Tj(uM,Ej);function ap(t){const n=Lc(()=>nr(t)),{isStatic:i}=y.useContext(Ud);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function o2(t,n){const i=ap(n()),a=()=>i.set(n());return a(),_p(()=>{const c=()=>os.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Ma(a)}}),i}function dM(t){Sc.current=[],t();const n=o2(Sc.current,t);return Sc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return dM(t);const u=typeof n=="function"?n:$k(n,i,a),d=Array.isArray(t)?jx(t,u):jx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function jx(t,n){const i=Lc(()=>[]);return o2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Wp(t){return typeof t=="object"&&!Array.isArray(t)}function i2(t,n,i,a){return t==null?[]:typeof t=="string"&&Wp(n)?zp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function fM(t,n,i){return t*(n+1)}function Mx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function hM(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(_l(t,c),a--)}}function mM(t,n,i,a,c,u){hM(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:_s(c,u,a[d]),easing:jb(i,d)})}function pM(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function _M(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const gM="easeInOut";function yM(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){g.set(S,x);continue}else if(!Array.isArray(S)){g.set(S.name,Mx(x,S.at,_,g));continue}let[j,k,M={}]=S;M.at!==void 0&&(x=Mx(x,M.at,_,g));let z=0;const L=(D,V,P,W=0,U=0)=>{const Z=xM(D),{delay:ae=0,times:ie=Ub(Z),type:ke=n.type||"keyframes",repeat:Re,repeatType:Q,repeatDelay:ce=0,...$}=V;let{ease:oe=n.ease||"easeOut",duration:G}=V;const K=typeof ae=="function"?ae(W,U):ae,pe=Z.length,N=Ep(ke)?ke:c==null?void 0:c[ke||"keyframes"];if(pe<=2&&N){let Ae=100;if(pe===2&&wM(Z)){const at=Z[1]-Z[0];Ae=Math.abs(at)}const $e={...n,...$};G!==void 0&&($e.duration=ui(G));const Ne=$b($e,Ae,N);oe=Ne.ease,G=Ne.duration}G!=null||(G=u);const ne=x+K;ie.length===1&&ie[0]===0&&(ie[1]=1);const re=ie.length-Z.length;if(re>0&&Hb(ie,re),Z.length===1&&Z.unshift(null),Re){G=fM(G,Re);const Ae=[...Z],$e=[...ie];oe=Array.isArray(oe)?[...oe]:[oe];const Ne=[...oe];for(let at=0;at<Re;at++){Z.push(...Ae);for(let rt=0;rt<Ae.length;rt++)ie.push($e[rt]+(at+1)),oe.push(rt===0?"linear":jb(Ne,rt-1))}pM(ie,Re)}const fe=ne+G;mM(P,Z,oe,ie,ne,fe),z=Math.max(K+G,z),b=Math.max(fe,b)};if(po(j)){const D=Tx(j,h);L(k,M,Ex("default",D))}else{const D=i2(j,k,a,p),V=D.length;for(let P=0;P<V;P++){k=k,M=M;const W=D[P],U=Tx(W,h);for(const Z in k)L(k[Z],bM(M,Z),Ex(Z,U),P,V)}}_=x,x+=z}return h.forEach((w,S)=>{for(const j in w){const k=w[j];k.sort(_M);const M=[],z=[],L=[];for(let W=0;W<k.length;W++){const{at:U,value:Z,easing:ae}=k[W];M.push(Z),z.push(gl(0,b,U)),L.push(ae||"easeOut")}z[0]!==0&&(z.unshift(0),M.unshift(M[0]),L.unshift(gM)),z[z.length-1]!==1&&(z.push(1),M.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const D=d.get(S);D.keyframes[j]=M;const{type:V,...P}=n;D.transition[j]={...P,duration:b,ease:L,times:z,...i}}}),d}function Tx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Ex(t,n){return n[t]||(n[t]=[]),n[t]}function xM(t){return Array.isArray(t)?t:[t]}function bM(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const vM=t=>typeof t=="number",wM=t=>t.every(vM);function SM(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!m5(t)?new D5(n):new j5(n);i.mount(t),Ac.set(t,i)}function CM(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new t8(n);i.mount(t),Ac.set(t,i)}function kM(t,n){return po(t)||typeof t=="number"||typeof t=="string"&&!Wp(n)}function a2(t,n,i,a){const c=[];if(kM(t,n))c.push(P5(t,Wp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=i2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?SM:CM;Ac.has(p)||g(p);const _=Ac.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Bp(_,{...n,transition:x},{}))}}return c}function jM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=nr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return yM(c,n,i,{spring:Ec}).forEach(({keyframes:d,transition:h},p)=>{a.push(...a2(p,d,h))}),a}function MM(t){return Array.isArray(t)&&t.some(Array.isArray)}function TM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(MM(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=jM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=a2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new Y3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{_l(n.animations,g)})),g}return a}const Ax=TM();var EM=Object.freeze({}),AM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const j=w.slice(0,-7),k=d.get(j);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:EM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},en=new AM;function DM(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(en.registerPanel(c,t,u.current,p.current),()=>en.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}en.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>en.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>en.subscribe(c,b),()=>en.getValues(c),()=>en.getValues(c));return r2(n,x,"")}function r2(t,n,i){var c,u,d,h,p,g,_,x,b,w;const a={};for(const[S,j]of Object.entries(t)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[S]=(c=n[k])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[S]=(u=n[k])!=null?u:j;else if(NM(j)||RM(j))a[S]=(d=n[k])!=null?d:j;else if(BM(j))a[S]=(h=n[k])!=null?h:j;else if(LM(j)){const M=(p=j.default)!=null?p:$M(j.options);a[S]=(g=n[k])!=null?g:M}else zM(j)?a[S]=(x=(_=n[k])!=null?_:j.default)!=null?x:"#000000":OM(j)?a[S]=(w=(b=n[k])!=null?b:j.default)!=null?w:"":typeof j=="object"&&j!==null&&(a[S]=r2(j,n,k))}return a}function Sl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function NM(t){return Sl(t,"spring")}function RM(t){return Sl(t,"easing")}function BM(t){return Sl(t,"action")}function LM(t){return Sl(t,"select")&&"options"in t&&Array.isArray(t.options)}function zM(t){return Sl(t,"color")}function OM(t){return Sl(t,"text")}function $M(t){const n=t[0];return typeof n=="string"?n:n.value}function rp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(rp(n)))}function hc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function mc(t,n,i,a,c){var g,_;const u=en.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));en.updateValue(t,n,Sd(p,a))}function IM(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Cm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function l2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=l2(i.children,n);if(a)return a}}return null}var fd=4;function PM(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function HM(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=PM(n);return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function UM(t){return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function c2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var u2=y.createContext({activePanelId:null,activePath:null});function VM({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=en.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((g=S.interaction)!=null?g:"scroll")!==p)continue;const j=l2(b.controls,w);if(j&&j.type==="slider")return{panelId:b.id,path:w,control:j,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=j=>{if(dd())return;const k=j.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const D=h("scroll")||h("drag")||h("move");if(D&&D.control.type==="slider"){j.preventDefault();const V=k==="arrowright"||k==="arrowup"?1:-1,P=hc(D.control,D.shortcut);mc(D.panelId,D.path,D.control,P,V);return}}const M=a.current.has(k);a.current.add(k);const z=Cm(j),L=en.resolveShortcutTarget(k,z);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!M&&L.control.type==="toggle")){const D=en.getValue(L.panelId,L.path);en.updateValue(L.panelId,L.path,!D)}M||(u.current=null,d.current=0)},g=j=>{const k=j.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let M=!1;for(const z of a.current){const L=Cm(j),D=en.resolveShortcutTarget(z,L);if(D){i({activePanelId:D.panelId,activePath:D.path}),M=!0;break}}M||i({activePanelId:null,activePath:null})}},_=j=>{var z,L;if(dd())return;const k=Cm(j);if(a.current.size>0)for(const D of a.current){const V=en.resolveShortcutTarget(D,k);if(!V)continue;const{panelId:P,path:W,control:U}=V;if(((L=(z=U.shortcut)==null?void 0:z.interaction)!=null?L:"scroll")!=="scroll"||U.type!=="slider")continue;j.preventDefault();const ae=hc(U,U.shortcut),ie=j.deltaY>0?-1:1;mc(P,W,U,ae,ie);return}const M=en.resolveScrollOnlyTargets();for(const{panelId:D,path:V,control:P,shortcut:W}of M){if(P.type!=="slider")continue;j.preventDefault();const U=hc(P,W),Z=j.deltaY>0?-1:1;mc(D,V,P,U,Z);return}},x=j=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=j=>{if(dd()||a.current.size===0)return;if(c.current){const M=h("drag");if(M&&u.current!==null){const z=j.clientX-u.current;u.current=j.clientX,d.current+=z;const L=hc(M.control,M.shortcut),D=Math.trunc(d.current/fd);D!==0&&(d.current-=D*fd,mc(M.panelId,M.path,M.control,L,D))}return}const k=h("move");if(k){if(u.current===null){u.current=j.clientX;return}const M=j.clientX-u.current;u.current=j.clientX,d.current+=M;const z=hc(k.control,k.shortcut),L=Math.trunc(d.current/fd);L!==0&&(d.current-=L*fd,mc(k.panelId,k.path,k.control,z,L))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(u2.Provider,{value:n,children:t})}var Fp="M6 9.5L12 15.5L18 9.5",YM="M5 12.75L10 19L19 5",km={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},WM=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],FM=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Dx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function zd({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,w]=y.useState(void 0),[S,j]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const z=()=>j(window.innerHeight);return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[a]),y.useEffect(()=>{const z=x.current;if(!z)return;const L=new ResizeObserver(()=>{if(h){const D=z.offsetHeight;w(V=>V===D?V:D)}});return L.observe(z),()=>L.disconnect()},[h]);const k=()=>{if(c&&a)return;const z=!h;p(z),_(!z),u==null||u(z)},M=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Dx.path,fill:"currentColor"}),Dx.circles.map((z,L)=>l.jsx("circle",{cx:z.cx,cy:z.cy,r:z.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(ci.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Fp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:z=>z.stopPropagation(),children:d})]}),l.jsx(Vd,{initial:!1,children:h&&l.jsx(ci.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:M});const z=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ci.div,{className:"dialkit-panel-inner",style:z,onClick:h?void 0:k,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:M})}return M}var XM=3,qM=32,GM=200,KM=8;function Io({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var nt;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,j]=y.useState(!1),[k,M]=y.useState(!1),[z,L]=y.useState(!1),[D,V]=y.useState(!1),[P,W]=y.useState(!1),[U,Z]=y.useState(!1),[ae,ie]=y.useState(""),ke=y.useRef(null),Re=y.useRef(null),Q=y.useRef(!0),ce=y.useRef(null),$=y.useRef(null),oe=y.useRef(1),G=(n-a)/(c-a)*100,K=S||z,pe=ap(G),N=ud(pe,H=>`${H}%`),ne=ud(pe,H=>`max(5px, calc(${H}% - 9px))`),re=ap(0),fe=ud(re,H=>`calc(100% + ${Math.abs(H)}px)`),Ae=ud(re,H=>H<0?H:0);y.useEffect(()=>{!S&&!ce.current&&pe.jump(G)},[G,S,pe]);const $e=y.useCallback(H=>{const te=$.current;if(!te)return n;const we=(H-te.left)/oe.current,Qe=g.current?g.current.offsetWidth:te.width,Pe=Math.max(0,Math.min(1,we/Qe)),Be=a+Pe*(c-a);return Math.max(a,Math.min(c,Be))},[a,c,n]),Ne=y.useCallback(H=>(H-a)/(c-a)*100,[a,c]),at=y.useCallback((H,te)=>{const _e=$.current;if(!_e)return 0;const we=te<0?_e.left-H:H-_e.right,Qe=Math.max(0,we-qM);return te*KM*Math.sqrt(Math.min(Qe/GM,1))},[]),rt=y.useCallback(H=>{if(!U&&(H.preventDefault(),H.target.setPointerCapture(H.pointerId),Re.current={x:H.clientX,y:H.clientY},Q.current=!0,j(!0),g.current)){$.current=g.current.getBoundingClientRect();const te=g.current.offsetWidth;oe.current=$.current.width/te}},[U]),It=y.useCallback(H=>{if(!S||!Re.current)return;const te=H.clientX-Re.current.x,_e=H.clientY-Re.current.y,we=Math.sqrt(te*te+_e*_e);if(Q.current&&we>XM&&(Q.current=!1,M(!0)),!Q.current){const Qe=$.current;Qe&&(H.clientX<Qe.left?re.jump(at(H.clientX,-1)):H.clientX>Qe.right?re.jump(at(H.clientX,1)):re.jump(0));const Pe=$e(H.clientX),Be=Ne(Pe);ce.current&&(ce.current.stop(),ce.current=null),pe.jump(Be),i(Sd(Pe,u))}},[S,$e,Ne,i,pe,re,at]),Zt=y.useCallback(H=>{if(S){if(Q.current){const te=$e(H.clientX),we=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((te-a)/u)*u)):IM(te,a,c),Qe=Ne(we);ce.current&&ce.current.stop(),ce.current=Ax(pe,Qe,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{ce.current=null}}),i(Sd(we,u))}re.get()!==0&&Ax(re,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),M(!1),Re.current=null}},[S,$e,Ne,i,a,c,pe,re]);y.useEffect(()=>(D&&!U&&!P?ke.current=setTimeout(()=>{W(!0)},800):!D&&!U&&(ke.current&&(clearTimeout(ke.current),ke.current=null),W(!1)),()=>{ke.current&&clearTimeout(ke.current)}),[D,U,P]),y.useEffect(()=>{U&&x.current&&(x.current.focus(),x.current.select())},[U]);const Ce=H=>{ie(H.target.value)},Ee=()=>{const H=parseFloat(ae);if(!isNaN(H)){const te=Math.max(a,Math.min(c,H));i(Sd(te,u))}Z(!1),V(!1),W(!1)},vt=H=>{P&&(H.stopPropagation(),H.preventDefault(),Z(!0),ie(n.toFixed(rp(u))))},Ht=H=>{H.key==="Enter"?Ee():H.key==="Escape"&&(Z(!1),V(!1))},wt=()=>{Ee()},Ut=n.toFixed(rp(u)),q=8,Me=10,Je=10;let Ze=30,dt=78;const Ue=(nt=g.current)==null?void 0:nt.offsetWidth;Ue&&Ue>0&&(b.current&&(Ze=(Me+b.current.offsetWidth+q)/Ue*100),w.current&&(dt=(Ue-Je-w.current.offsetWidth-q)/Ue*100));const mt=G<Ze||G>dt,lt=K?mt?.1:k?.9:.5:0,_t=(c-a)/u,Bt=_t<=10?Array.from({length:_t-1},(H,te)=>{const _e=(te+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${_e}%`}},te)}):Array.from({length:9},(H,te)=>{const _e=(te+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${_e}%`}},te)});return l.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:l.jsxs(ci.div,{ref:_,className:`dialkit-slider ${K?"dialkit-slider-active":""}`,onPointerDown:rt,onPointerMove:It,onPointerUp:Zt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:fe,x:Ae},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Bt}),l.jsx(ci.div,{className:"dialkit-slider-fill",style:{width:N}}),l.jsx(ci.div,{className:"dialkit-slider-handle",style:{left:ne,y:"-50%"},animate:{opacity:lt,scaleX:K?1:.25,scaleY:K&&mt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:HM(h)})]}),U?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ae,onChange:Ce,onKeyDown:Ht,onBlur:wt,onClick:H=>H.stopPropagation(),onMouseDown:H=>H.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${P?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>V(!0),onMouseLeave:()=>V(!1),onClick:vt,onMouseDown:H=>P&&H.stopPropagation(),style:{cursor:P?"text":"default"},children:Ut})]})})}function Xp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return l.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function QM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:UM(a)})]}),l.jsx(Xp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function ZM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function d2({spring:t,isSimpleMode:n}){var j,k,M,z,L;let c,u,d;if(n){const D=(j=t.visualDuration)!=null?j:.3,V=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/D,c=Math.pow(c,2),u=2*(1-V)*Math.sqrt(c*d)}else c=(M=t.stiffness)!=null?M:400,u=(z=t.damping)!=null?z:17,d=(L=t.mass)!=null?L:1;const h=2,p=ZM(c,u,d,h),g=p.map(([,D])=>D),_=Math.min(...g),b=Math.max(...g)-_,w=p.map(([D,V],P)=>{const W=D/h*256,Z=140-((V-_)/(b||1)*140*.6+140*.2);return`${P===0?"M":"L"} ${W} ${Z}`}).join(" "),S=[];for(let D=1;D<4;D++){const V=64*D,P=140/4*D;S.push(l.jsx("line",{x1:V,y1:0,x2:V,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${D}`),l.jsx("line",{x1:0,y1:P,x2:256,y2:P,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${D}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function JM({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=y.useSyncExternalStore(j=>en.subscribe(t,j),()=>en.getSpringMode(t,n),()=>en.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{en.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},g=(j,k)=>{if(d){const{stiffness:M,damping:z,mass:L,...D}=a;c({...D,[j]:k})}else{const{visualDuration:M,bounce:z,...L}=a;c({...L,[j]:k})}};return l.jsx(zd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(d2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Xp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:j=>g("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Io,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>g("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>g("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Io,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:j=>g("damping",j),min:1,max:100,step:1}),l.jsx(Io,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:j=>g("mass",j),min:.1,max:10,step:.1})]})]})})}function e7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function t7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,j,k,M,z;const u=y.useSyncExternalStore(L=>en.subscribe(t,L),()=>en.getTransitionMode(t,n),()=>en.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=L=>{en.updateTransitionMode(t,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,D)=>{if(h){const{stiffness:V,damping:P,mass:W,...U}=g;c({...U,[L]:D})}else{const{visualDuration:V,bounce:P,...W}=g;c({...W,[L]:D})}},w=(L,D)=>{const V=[..._.ease];V[L]=D,c({..._,ease:V})};return l.jsx(zd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(e7,{easing:_}):l.jsx(d2,{spring:g,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Xp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"x1",value:_.ease[0],onChange:L=>w(0,L),min:0,max:1,step:.01}),l.jsx(Io,{label:"y1",value:_.ease[1],onChange:L=>w(1,L),min:-1,max:2,step:.01}),l.jsx(Io,{label:"x2",value:_.ease[2],onChange:L=>w(2,L),min:0,max:1,step:.01}),l.jsx(Io,{label:"y2",value:_.ease[3],onChange:L=>w(3,L),min:-1,max:2,step:.01}),l.jsx(Io,{label:"Duration",value:_.duration,onChange:L=>c({..._,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(s7,{ease:_.ease,onChange:L=>c({..._,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"Duration",value:(S=g.visualDuration)!=null?S:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Io,{label:"Bounce",value:(j=g.bounce)!=null?j:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Io,{label:"Stiffness",value:(k=g.stiffness)!=null?k:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx(Io,{label:"Damping",value:(M=g.damping)!=null?M:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx(Io,{label:"Mass",value:(z=g.mass)!=null?z:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Nx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function n7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function s7({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(Nx(t)),a(!0)},h=()=>{const g=n7(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Nx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function o7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function i7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function a7(t){return t.map(n=>typeof n=="string"?{value:n,label:i7(n)}:n)}function r7({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=a7(i),w=b.find(k=>k.value===n),S=y.useCallback(()=>{const k=d.current;if(!k)return;const M=k.getBoundingClientRect(),z=8+b.length*36,L=window.innerHeight-M.bottom-4,D=L<z&&M.top>L;x({top:D?M.top-4:M.bottom+4,left:M.left,width:M.width,above:D})},[b.length]);return y.useEffect(()=>{var M;const k=(M=d.current)==null?void 0:M.closest(".dialkit-root");g(k!=null?k:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const k=M=>{const z=M.target;d.current&&!d.current.contains(z)&&h.current&&!h.current.contains(z)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=w==null?void 0:w.label)!=null?j:n}),l.jsx(ci.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Fp})})]})]}),p&&Bc.createPortal(l.jsx(Vd,{children:c&&_&&l.jsx(ci.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(k=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var l7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function c7({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),l7.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?u7(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function u7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function d7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(M=>M.id===i),b=y.useCallback(()=>{var z;if(!_)return;const M=(z=d.current)==null?void 0:z.getBoundingClientRect();M&&g({top:M.bottom+4,left:M.left,width:M.width}),u(!0)},[_]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const M=z=>{var D,V;const L=z.target;(D=d.current)!=null&&D.contains(L)||(V=h.current)!=null&&V.contains(L)||w()};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c,w]);const j=M=>{M?en.loadPreset(t,M):en.clearActivePreset(t),w()},k=(M,z)=>{M.stopPropagation(),en.deletePreset(t,z)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ci.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Fp})})]}),Bc.createPortal(l.jsx(Vd,{children:c&&l.jsxs(ci.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(M=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(M.id===i),onClick:()=>j(M.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:M.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:z=>k(z,M.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:FM.map((z,L)=>l.jsx("path",{d:z},L))})})]},M.id))]})}),document.body)]})}function f7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(u2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(k=>en.subscribe(t.id,k),()=>en.getValues(t.id),()=>en.getValues(t.id)),g=en.getPresets(t.id),_=en.getActivePresetId(t.id),x=()=>{const k=g.length+2;en.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),M=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(M),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var z,L,D;const M=p[k.path];switch(k.type){case"slider":return l.jsx(Io,{label:k.label,value:M,onChange:V=>en.updateValue(t.id,k.path,V),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return l.jsx(QM,{label:k.label,checked:M,onChange:V=>en.updateValue(t.id,k.path,V),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return l.jsx(JM,{panelId:t.id,path:k.path,label:k.label,spring:M,onChange:V=>en.updateValue(t.id,k.path,V)},k.path);case"transition":return l.jsx(t7,{panelId:t.id,path:k.path,label:k.label,value:M,onChange:V=>en.updateValue(t.id,k.path,V)},k.path);case"folder":return l.jsx(zd,{title:k.label,defaultOpen:(z=k.defaultOpen)!=null?z:!0,children:(L=k.children)==null?void 0:L.map(w)},k.path);case"text":return l.jsx(o7,{label:k.label,value:M,onChange:V=>en.updateValue(t.id,k.path,V),placeholder:k.placeholder},k.path);case"select":return l.jsx(r7,{label:k.label,value:M,options:(D=k.options)!=null?D:[],onChange:V=>en.updateValue(t.id,k.path,V)},k.path);case"color":return l.jsx(c7,{label:k.label,value:M,onChange:V=>en.updateValue(t.id,k.path,V)},k.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>en.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),j=l.jsxs(l.Fragment,{children:[l.jsx(ci.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:WM.map((k,M)=>l.jsx("path",{d:k},M))})}),l.jsx(d7,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),l.jsx(ci.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Vd,{initial:!1,mode:"wait",children:a?l.jsx(ci.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:YM})},"check"):l.jsxs(ci.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:km.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:km.sparkle,fill:"currentColor"}),l.jsx("path",{d:km.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(zd,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:S()})})}var h7=typeof process<"u"?!1:!(typeof import.meta<"u");function m7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=h7}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),j=y.useRef(null),k=y.useRef(!1),M=y.useRef(null),z=y.useRef(!1);y.useEffect(()=>(p(!0),d(en.getPanels()),en.subscribeGlobal(()=>{d(en.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const U=new MutationObserver(()=>{var ie;const Z=(ie=_.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!Z)return;if(Z.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const ke=x.x+21,Re=window.innerWidth/2;S(ke<Re?"top-left":"top-right")}else S(t);b(null)}});return U.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>U.disconnect()},[g,x,t]);const L=y.useCallback(U=>{var ie;const Z=(ie=_.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!Z||Z.getAttribute("data-collapsed")!=="true")return;const ae=_.current.getBoundingClientRect();M.current={pointerX:U.clientX,pointerY:U.clientY,elX:ae.left,elY:ae.top},z.current=!1,k.current=!0,U.target.setPointerCapture(U.pointerId)},[]),D=y.useCallback(U=>{if(!k.current||!M.current)return;const Z=U.clientX-M.current.pointerX,ae=U.clientY-M.current.pointerY;!z.current&&Math.abs(Z)+Math.abs(ae)<4||(z.current=!0,b({x:M.current.elX+Z,y:M.current.elY+ae}))},[]),V=y.useCallback(U=>{var Z;if(k.current&&(k.current=!1,M.current=null,z.current)){U.stopPropagation();const ae=(Z=_.current)==null?void 0:Z.querySelector(".dialkit-panel-inner");if(ae){const ie=ke=>{ke.stopPropagation()};ae.addEventListener("click",ie,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const P=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,W=l.jsx(VM,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:w,"data-mode":i,style:P,onPointerDown:g?void 0:L,onPointerMove:g?void 0:D,onPointerUp:g?void 0:V,children:u.map(U=>l.jsx(f7,{panel:U,defaultOpen:g||n,inline:g},U.id))})})});return g?W:Bc.createPortal(W,document.body)}const p7=()=>(DM("Git Visualizer",{preview:[1,0,1]}),null),_7=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(p7,{}),l.jsx(m7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(gC,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});$v.createRoot(document.getElementById("root")).render(l.jsx(_7,{children:l.jsx(eS,{})}));

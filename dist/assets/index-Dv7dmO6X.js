(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Bx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zh={exports:{}},sc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function Tv(){if(ey)return sc;ey=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return sc.Fragment=n,sc.jsx=i,sc.jsxs=i,sc}var ty;function Ev(){return ty||(ty=1,zh.exports=Tv()),zh.exports}var l=Ev(),$h={exports:{}},oc={},Ih={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Av(){return ny||(ny=1,(function(t){function n(z,te){var W=z.length;z.push(te);e:for(;0<W;){var K=W-1>>>1,pe=z[K];if(0<c(pe,te))z[K]=te,z[W]=pe,W=K;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var te=z[0],W=z.pop();if(W!==te){z[0]=W;e:for(var K=0,pe=z.length,N=pe>>>1;K<N;){var ae=2*(K+1)-1,oe=z[ae],ce=ae+1,Ee=z[ce];if(0>c(oe,W))ce<pe&&0>c(Ee,oe)?(z[K]=Ee,z[ce]=W,K=ce):(z[K]=oe,z[ae]=W,K=ae);else if(ce<pe&&0>c(Ee,W))z[K]=Ee,z[ce]=W,K=ce;else break e}}return te}function c(z,te){var W=z.sortIndex-te.sortIndex;return W!==0?W:z.id-te.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,w=!1,S=!1,k=!1,C=!1,j=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function A(z){for(var te=i(g);te!==null;){if(te.callback===null)a(g);else if(te.startTime<=z)a(g),te.sortIndex=te.expirationTime,n(p,te);else break;te=i(g)}}function $(z){if(k=!1,A(z),!S)if(i(p)!==null)S=!0,H||(H=!0,Ce());else{var te=i(g);te!==null&&ue($,te.startTime-z)}}var H=!1,V=-1,P=5,J=-1;function re(){return C?!0:!(t.unstable_now()-J<P)}function ie(){if(C=!1,H){var z=t.unstable_now();J=z;var te=!0;try{e:{S=!1,k&&(k=!1,B(V),V=-1),w=!0;var W=b;try{t:{for(A(z),x=i(p);x!==null&&!(x.expirationTime>z&&re());){var K=x.callback;if(typeof K=="function"){x.callback=null,b=x.priorityLevel;var pe=K(x.expirationTime<=z);if(z=t.unstable_now(),typeof pe=="function"){x.callback=pe,A(z),te=!0;break t}x===i(p)&&a(p),A(z)}else a(p);x=i(p)}if(x!==null)te=!0;else{var N=i(g);N!==null&&ue($,N.startTime-z),te=!1}}break e}finally{x=null,b=W,w=!1}te=void 0}}finally{te?Ce():H=!1}}}var Ce;if(typeof R=="function")Ce=function(){R(ie)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Z=Be.port2;Be.port1.onmessage=ie,Ce=function(){Z.postMessage(null)}}else Ce=function(){j(ie,0)};function ue(z,te){V=j(function(){z(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(z){switch(b){case 1:case 2:case 3:var te=3;break;default:te=b}var W=b;b=te;try{return z()}finally{b=W}},t.unstable_requestPaint=function(){C=!0},t.unstable_runWithPriority=function(z,te){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=b;b=z;try{return te()}finally{b=W}},t.unstable_scheduleCallback=function(z,te,W){var K=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?K+W:K):W=K,z){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=W+pe,z={id:_++,callback:te,priorityLevel:z,startTime:W,expirationTime:pe,sortIndex:-1},W>K?(z.sortIndex=W,n(g,z),i(p)===null&&z===i(g)&&(k?(B(V),V=-1):k=!0,ue($,W-K))):(z.sortIndex=pe,n(p,z),S||w||(S=!0,H||(H=!0,Ce()))),z},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(z){var te=b;return function(){var W=b;b=te;try{return z.apply(this,arguments)}finally{b=W}}}})(Ph)),Ph}var sy;function Dv(){return sy||(sy=1,Ih.exports=Av()),Ih.exports}var Hh={exports:{}},an={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Nv(){if(oy)return an;oy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,C={};function j(N,ae,oe){this.props=N,this.context=ae,this.refs=C,this.updater=oe||S}j.prototype.isReactComponent={},j.prototype.setState=function(N,ae){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ae,"setState")},j.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function B(){}B.prototype=j.prototype;function R(N,ae,oe){this.props=N,this.context=ae,this.refs=C,this.updater=oe||S}var A=R.prototype=new B;A.constructor=R,k(A,j.prototype),A.isPureReactComponent=!0;var $=Array.isArray;function H(){}var V={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function J(N,ae,oe){var ce=oe.ref;return{$$typeof:t,type:N,key:ae,ref:ce!==void 0?ce:null,props:oe}}function re(N,ae){return J(N.type,ae,N.props)}function ie(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function Ce(N){var ae={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(oe){return ae[oe]})}var Be=/\/+/g;function Z(N,ae){return typeof N=="object"&&N!==null&&N.key!=null?Ce(""+N.key):ae.toString(36)}function ue(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function(ae){N.status==="pending"&&(N.status="fulfilled",N.value=ae)},function(ae){N.status==="pending"&&(N.status="rejected",N.reason=ae)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,ae,oe,ce,Ee){var $e=typeof N;($e==="undefined"||$e==="boolean")&&(N=null);var Ne=!1;if(N===null)Ne=!0;else switch($e){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(N.$$typeof){case t:case n:Ne=!0;break;case _:return Ne=N._init,z(Ne(N._payload),ae,oe,ce,Ee)}}if(Ne)return Ee=Ee(N),Ne=ce===""?"."+Z(N,0):ce,$(Ee)?(oe="",Ne!=null&&(oe=Ne.replace(Be,"$&/")+"/"),z(Ee,ae,oe,"",function(at){return at})):Ee!=null&&(ie(Ee)&&(Ee=re(Ee,oe+(Ee.key==null||N&&N.key===Ee.key?"":(""+Ee.key).replace(Be,"$&/")+"/")+Ne)),ae.push(Ee)),1;Ne=0;var ft=ce===""?".":ce+":";if($(N))for(var Oe=0;Oe<N.length;Oe++)ce=N[Oe],$e=ft+Z(ce,Oe),Ne+=z(ce,ae,oe,$e,Ee);else if(Oe=w(N),typeof Oe=="function")for(N=Oe.call(N),Oe=0;!(ce=N.next()).done;)ce=ce.value,$e=ft+Z(ce,Oe++),Ne+=z(ce,ae,oe,$e,Ee);else if($e==="object"){if(typeof N.then=="function")return z(ue(N),ae,oe,ce,Ee);throw ae=String(N),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function te(N,ae,oe){if(N==null)return N;var ce=[],Ee=0;return z(N,ce,"","",function($e){return ae.call(oe,$e,Ee++)}),ce}function W(N){if(N._status===-1){var ae=N._result;ae=ae(),ae.then(function(oe){(N._status===0||N._status===-1)&&(N._status=1,N._result=oe)},function(oe){(N._status===0||N._status===-1)&&(N._status=2,N._result=oe)}),N._status===-1&&(N._status=0,N._result=ae)}if(N._status===1)return N._result.default;throw N._result}var K=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},pe={map:te,forEach:function(N,ae,oe){te(N,function(){ae.apply(this,arguments)},oe)},count:function(N){var ae=0;return te(N,function(){ae++}),ae},toArray:function(N){return te(N,function(ae){return ae})||[]},only:function(N){if(!ie(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return an.Activity=x,an.Children=pe,an.Component=j,an.Fragment=i,an.Profiler=c,an.PureComponent=R,an.StrictMode=a,an.Suspense=p,an.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,an.__COMPILER_RUNTIME={__proto__:null,c:function(N){return V.H.useMemoCache(N)}},an.cache=function(N){return function(){return N.apply(null,arguments)}},an.cacheSignal=function(){return null},an.cloneElement=function(N,ae,oe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ce=k({},N.props),Ee=N.key;if(ae!=null)for($e in ae.key!==void 0&&(Ee=""+ae.key),ae)!P.call(ae,$e)||$e==="key"||$e==="__self"||$e==="__source"||$e==="ref"&&ae.ref===void 0||(ce[$e]=ae[$e]);var $e=arguments.length-2;if($e===1)ce.children=oe;else if(1<$e){for(var Ne=Array($e),ft=0;ft<$e;ft++)Ne[ft]=arguments[ft+2];ce.children=Ne}return J(N.type,Ee,ce)},an.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},an.createElement=function(N,ae,oe){var ce,Ee={},$e=null;if(ae!=null)for(ce in ae.key!==void 0&&($e=""+ae.key),ae)P.call(ae,ce)&&ce!=="key"&&ce!=="__self"&&ce!=="__source"&&(Ee[ce]=ae[ce]);var Ne=arguments.length-2;if(Ne===1)Ee.children=oe;else if(1<Ne){for(var ft=Array(Ne),Oe=0;Oe<Ne;Oe++)ft[Oe]=arguments[Oe+2];Ee.children=ft}if(N&&N.defaultProps)for(ce in Ne=N.defaultProps,Ne)Ee[ce]===void 0&&(Ee[ce]=Ne[ce]);return J(N,$e,Ee)},an.createRef=function(){return{current:null}},an.forwardRef=function(N){return{$$typeof:h,render:N}},an.isValidElement=ie,an.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:W}},an.memo=function(N,ae){return{$$typeof:g,type:N,compare:ae===void 0?null:ae}},an.startTransition=function(N){var ae=V.T,oe={};V.T=oe;try{var ce=N(),Ee=V.S;Ee!==null&&Ee(oe,ce),typeof ce=="object"&&ce!==null&&typeof ce.then=="function"&&ce.then(H,K)}catch($e){K($e)}finally{ae!==null&&oe.types!==null&&(ae.types=oe.types),V.T=ae}},an.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},an.use=function(N){return V.H.use(N)},an.useActionState=function(N,ae,oe){return V.H.useActionState(N,ae,oe)},an.useCallback=function(N,ae){return V.H.useCallback(N,ae)},an.useContext=function(N){return V.H.useContext(N)},an.useDebugValue=function(){},an.useDeferredValue=function(N,ae){return V.H.useDeferredValue(N,ae)},an.useEffect=function(N,ae){return V.H.useEffect(N,ae)},an.useEffectEvent=function(N){return V.H.useEffectEvent(N)},an.useId=function(){return V.H.useId()},an.useImperativeHandle=function(N,ae,oe){return V.H.useImperativeHandle(N,ae,oe)},an.useInsertionEffect=function(N,ae){return V.H.useInsertionEffect(N,ae)},an.useLayoutEffect=function(N,ae){return V.H.useLayoutEffect(N,ae)},an.useMemo=function(N,ae){return V.H.useMemo(N,ae)},an.useOptimistic=function(N,ae){return V.H.useOptimistic(N,ae)},an.useReducer=function(N,ae,oe){return V.H.useReducer(N,ae,oe)},an.useRef=function(N){return V.H.useRef(N)},an.useState=function(N){return V.H.useState(N)},an.useSyncExternalStore=function(N,ae,oe){return V.H.useSyncExternalStore(N,ae,oe)},an.useTransition=function(){return V.H.useTransition()},an.version="19.2.4",an}var iy;function up(){return iy||(iy=1,Hh.exports=Nv()),Hh.exports}var Uh={exports:{}},qo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function Rv(){if(ay)return qo;ay=1;var t=up();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return qo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qo.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},qo.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},qo.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},qo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},qo.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},qo.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},qo.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},qo.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},qo.requestFormReset=function(p){a.d.r(p)},qo.unstable_batchedUpdates=function(p,g){return p(g)},qo.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},qo.useFormStatus=function(){return d.H.useHostTransitionStatus()},qo.version="19.2.4",qo}var ry;function Lx(){if(ry)return Uh.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Uh.exports=Rv(),Uh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Bv(){if(ly)return oc;ly=1;var t=Dv(),n=up(),i=Lx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,T=f.child;T;){if(T===o){v=!0,o=f,r=m;break}if(T===r){v=!0,r=f,o=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===o){v=!0,o=m,r=f;break}if(T===r){v=!0,r=m,o=f;break}T=T.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),R=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var Be=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case j:return"Profiler";case C:return"StrictMode";case $:return"Suspense";case H:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case R:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case A:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return s=e.displayName||null,s!==null?s:Z(e.type)||"Memo";case P:s=e._payload,e=e._init;try{return Z(e(s))}catch{}}return null}var ue=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},K=[],pe=-1;function N(e){return{current:e}}function ae(e){0>pe||(e.current=K[pe],K[pe]=null,pe--)}function oe(e,s){pe++,K[pe]=e.current,e.current=s}var ce=N(null),Ee=N(null),$e=N(null),Ne=N(null);function ft(e,s){switch(oe($e,s),oe(Ee,e),oe(ce,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?S0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=S0(s),e=C0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(ce),oe(ce,e)}function Oe(){ae(ce),ae(Ee),ae($e)}function at(e){e.memoizedState!==null&&oe(Ne,e);var s=ce.current,o=C0(s,e.type);s!==o&&(oe(Ee,e),oe(ce,o))}function tt(e){Ee.current===e&&(ae(ce),ae(Ee)),Ne.current===e&&(ae(Ne),Jl._currentValue=W)}var St,Qe;function Dt(e){if(St===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);St=s&&s[1]||"",Qe=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+e+Qe}var ln=!1;function Ht(e,s){if(!e||ln)return"";ln=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Le=function(){throw Error()};if(Object.defineProperty(Le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Le,[])}catch(ve){var ge=ve}Reflect.construct(e,[],Le)}else{try{Le.call()}catch(ve){ge=ve}e.call(Le.prototype)}}else{try{throw Error()}catch(ve){ge=ve}(Le=e())&&typeof Le.catch=="function"&&Le.catch(function(){})}}catch(ve){if(ve&&ge&&typeof ve.stack=="string")return[ve.stack,ge.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],T=m[1];if(v&&T){var Y=v.split(`
`),me=T.split(`
`);for(f=r=0;r<Y.length&&!Y[r].includes("DetermineComponentFrameRoot");)r++;for(;f<me.length&&!me[f].includes("DetermineComponentFrameRoot");)f++;if(r===Y.length||f===me.length)for(r=Y.length-1,f=me.length-1;1<=r&&0<=f&&Y[r]!==me[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Y[r]!==me[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Y[r]!==me[f]){var je=`
`+Y[r].replace(" at new "," at ");return e.displayName&&je.includes("<anonymous>")&&(je=je.replace("<anonymous>",e.displayName)),je}while(1<=r&&0<=f);break}}}finally{ln=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Dt(o):""}function en(e,s){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return e.child!==s&&s!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return Ht(e.type,!1);case 11:return Ht(e.type.render,!1);case 1:return Ht(e.type,!0);case 31:return Dt("Activity");default:return""}}function q(e){try{var s="",o=null;do s+=en(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ae=Object.prototype.hasOwnProperty,Fe=t.unstable_scheduleCallback,Je=t.unstable_cancelCallback,lt=t.unstable_shouldYield,st=t.unstable_requestPaint,bt=t.unstable_now,ct=t.unstable_getCurrentPriorityLevel,rt=t.unstable_ImmediatePriority,It=t.unstable_UserBlockingPriority,ot=t.unstable_NormalPriority,I=t.unstable_LowPriority,ne=t.unstable_IdlePriority,de=t.log,be=t.unstable_setDisableYieldValue,ye=null,He=null;function Re(e){if(typeof de=="function"&&be(e),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(ye,e)}catch{}}var Xe=Math.clz32?Math.clz32:pt,vt=Math.log,Rt=Math.LN2;function pt(e){return e>>>=0,e===0?32:31-(vt(e)/Rt|0)|0}var Ge=256,Nt=262144,Gt=4194304;function Zt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pe(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~m,r!==0?f=Zt(r):(v&=T,v!==0?f=Zt(v):o||(o=T&~e,o!==0&&(f=Zt(o))))):(T=r&~m,T!==0?f=Zt(T):v!==0?f=Zt(v):o||(o=r&~e,o!==0&&(f=Zt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function $t(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function gt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(){var e=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),e}function fn(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function mt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ut(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var T=e.entanglements,Y=e.expirationTimes,me=e.hiddenUpdates;for(o=v&~o;0<o;){var je=31-Xe(o),Le=1<<je;T[je]=0,Y[je]=-1;var ge=me[je];if(ge!==null)for(me[je]=null,je=0;je<ge.length;je++){var ve=ge[je];ve!==null&&(ve.lane&=-536870913)}o&=~Le}r!==0&&On(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function On(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-Xe(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function Yn(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-Xe(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function Qn(e,s){var o=s&-s;return o=(o&42)!==0?1:Ls(o),(o&(e.suspendedLanes|s))!==0?0:o}function Ls(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function us(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:X0(e.type))}function En(e,s){var o=te.p;try{return te.p=e,s()}finally{te.p=o}}var Pn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Pn,An="__reactProps$"+Pn,nt="__reactContainer$"+Pn,pn="__reactEvents$"+Pn,Io="__reactListeners$"+Pn,Xs="__reactHandles$"+Pn,Wn="__reactResources$"+Pn,qs="__reactMarker$"+Pn;function pi(e){delete e[sn],delete e[An],delete e[pn],delete e[Io],delete e[Xs]}function gs(e){var s=e[sn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[nt]||o[sn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=D0(e);e!==null;){if(o=e[sn])return o;e=D0(e)}return s}e=o,o=e.parentNode}return null}function wo(e){if(e=e[sn]||e[nt]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function so(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function oo(e){var s=e[Wn];return s||(s=e[Wn]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Zn(e){e[qs]=!0}var Mo=new Set,js={};function Fn(e,s){gn(e,s),gn(e+"Capture",s)}function gn(e,s){for(js[e]=s,e=0;e<s.length;e++)Mo.add(s[e])}var ds=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mo={},zn={};function Po(e){return Ae.call(zn,e)?!0:Ae.call(mo,e)?!1:ds.test(e)?zn[e]=!0:(mo[e]=!0,!1)}function po(e,s,o){if(Po(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function Ms(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Ts(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ci(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Pi(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function ii(e){if(!e._valueTracker){var s=Ci(e)?"checked":"value";e._valueTracker=Pi(e,s,""+e[s])}}function Ji(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Ci(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ai=/[\n"\\]/g;function Es(e){return e.replace(ai,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function To(e,s,o,r,f,m,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+yn(s)):e.value!==""+yn(s)&&(e.value=""+yn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Eo(e,v,yn(s)):o!=null?Eo(e,v,yn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+yn(T):e.removeAttribute("name")}function Hn(e,s,o,r,f,m,v,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){ii(e);return}o=o!=null?""+yn(o):"",s=s!=null?""+yn(s):o,T||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),ii(e)}function Eo(e,s,o){s==="number"&&Ko(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function Dn(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+yn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function as(e,s,o){if(s!=null&&(s=""+yn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+yn(o):""}function Ho(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(ue(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=yn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),ii(e)}function Ao(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var fs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||fs.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function ki(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Kt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Kt(e,m,s[m])}function Gs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uo(e){return Hi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function As(){}var _i=null;function _o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mn=null,Ks=null;function Do(e){var s=wo(e);if(s&&(e=s.stateNode)){var o=e[An]||null;e:switch(e=s.stateNode,s.type){case"input":if(To(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Es(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[An]||null;if(!f)throw Error(a(90));To(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&Ji(r)}break e;case"textarea":as(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Dn(e,!!o.multiple,s,!1)}}}var Ds=!1;function Qs(e,s,o){if(Ds)return e(s,o);Ds=!0;try{var r=e(s);return r}finally{if(Ds=!1,(Mn!==null||Ks!==null)&&(bu(),Mn&&(s=Mn,e=Ks,Ks=Mn=null,Do(s),e)))for(s=0;s<e.length;s++)Do(e[s])}}function on(e,s){var o=e.stateNode;if(o===null)return null;var r=o[An]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Ns=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=!1;if(Ns)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){So=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{So=!1}var xn=null,Qo=null,ys=null;function Yo(){if(ys)return ys;var e,s=Qo,o=s.length,r,f="value"in xn?xn.value:xn.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return ys=f.slice(e,1<r?1-r:void 0)}function No(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function Zo(){return!1}function Jn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(o=e[T],this[T]=o?o(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Wo:Zo,this.isPropagationStopped=Zo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),s}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Co=Jn(io),go=x({},io,{view:0,detail:0}),$s=Jn(go),Is,ao,Nn,Ps=x({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Q,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Is=e.screenX-Nn.screenX,ao=e.screenY-Nn.screenY):ao=Is=0,Nn=e),Is)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),Ro=Jn(Ps),M=x({},Ps,{dataTransfer:0}),X=Jn(M),_e=x({},go,{relatedTarget:0}),Se=Jn(_e),Ue=x({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),et=Jn(Ue),Vt=x({},io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wt=Jn(Vt),Lt=x({},io,{data:0}),Ye=Jn(Lt),cn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=D[e])?!!s[e]:!1}function Q(){return F}var fe=x({},go,{key:function(e){if(e.key){var s=cn[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Q,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ze=Jn(fe),yt=x({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dt=Jn(yt),Xt=x({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Q}),xs=Jn(Xt),Zs=x({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),hs=Jn(Zs),Xn=x({},Ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jt=Jn(Xn),hn=x({},io,{newState:0,oldState:0}),kn=Jn(hn),Os=[9,13,27,32],ko=Ns&&"CompositionEvent"in window,Un=null;Ns&&"documentMode"in document&&(Un=document.documentMode);var Hs=Ns&&"TextEvent"in window&&!Un,Js=Ns&&(!ko||Un&&8<Un&&11>=Un),ke=" ",We=!1;function ut(e,s){switch(e){case"keyup":return Os.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ve(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xt=!1;function Tt(e,s){switch(e){case"compositionend":return Ve(s);case"keypress":return s.which!==32?null:(We=!0,ke);case"textInput":return e=s.data,e===ke&&We?null:e;default:return null}}function jt(e,s){if(xt)return e==="compositionend"||!ko&&ut(e,s)?(e=Yo(),ys=Qo=xn=null,xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Js&&s.locale!=="ko"?null:s.data;default:return null}}var Ot={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Ot[e.type]:s==="textarea"}function ms(e,s,o,r){Mn?Ks?Ks.push(r):Ks=[r]:Mn=r,s=Mu(s,"onChange"),0<s.length&&(o=new Co("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var yo=null,Fo=null;function zs(e){g0(e,0)}function E(e){var s=so(e);if(Ji(s))return e}function O(e,s){if(e==="change")return s}var G=!1;if(Ns){var U;if(Ns){var se="oninput"in document;if(!se){var xe=document.createElement("div");xe.setAttribute("oninput","return;"),se=typeof xe.oninput=="function"}U=se}else U=!1;G=U&&(!document.documentMode||9<document.documentMode)}function qe(){yo&&(yo.detachEvent("onpropertychange",Ke),Fo=yo=null)}function Ke(e){if(e.propertyName==="value"&&E(Fo)){var s=[];ms(s,Fo,e,_o(e)),Qs(zs,s)}}function it(e,s,o){e==="focusin"?(qe(),yo=s,Fo=o,yo.attachEvent("onpropertychange",Ke)):e==="focusout"&&qe()}function Ct(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return E(Fo)}function zt(e,s){if(e==="click")return E(s)}function tn(e,s){if(e==="input"||e==="change")return E(s)}function nn(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var kt=typeof Object.is=="function"?Object.is:nn;function _t(e,s){if(kt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Ae.call(s,f)||!kt(e[f],s[f]))return!1}return!0}function bs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vs(e,s){var o=bs(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=bs(o)}}function ws(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?ws(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Tn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Ko(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Ko(e.document)}return s}function Vn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var qt=Ns&&"documentMode"in document&&11>=document.documentMode,Qt=null,Ss=null,Rn=null,xo=!1;function Xo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xo||Qt==null||Qt!==Ko(r)||(r=Qt,"selectionStart"in r&&Vn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&_t(Rn,r)||(Rn=r,r=Mu(Ss,"onSelect"),0<r.length&&(s=new Co("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Qt)))}function rs(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var Mi={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},Ui={},Vi={};Ns&&(Vi=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function es(e){if(Ui[e])return Ui[e];if(!Mi[e])return e;var s=Mi[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Vi)return Ui[e]=s[o];return e}var Yi=es("animationend"),ea=es("animationiteration"),Ic=es("animationstart"),Fd=es("transitionrun"),Xd=es("transitionstart"),qd=es("transitioncancel"),Kp=es("transitionend"),Qp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Wi(e,s){Qp.set(e,s),Fn(s,[e])}var Pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],Nr=0,Kd=0;function Hc(){for(var e=Nr,s=Kd=Nr=0;s<e;){var o=Ti[s];Ti[s++]=null;var r=Ti[s];Ti[s++]=null;var f=Ti[s];Ti[s++]=null;var m=Ti[s];if(Ti[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Zp(o,f,m)}}function Uc(e,s,o,r){Ti[Nr++]=e,Ti[Nr++]=s,Ti[Nr++]=o,Ti[Nr++]=r,Kd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Qd(e,s,o,r){return Uc(e,s,o,r),Vc(e)}function or(e,s){return Uc(e,null,null,s),Vc(e)}function Zp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-Xe(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Vc(e){if(50<Fl)throw Fl=0,rh=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Rr={};function d2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,s,o,r){return new d2(e,s,o,r)}function Zd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,s){var o=e.alternate;return o===null?(o=gi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Jp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Yc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Zd(e)&&(v=1);else if(typeof e=="string")v=_v(e,o,ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=gi(31,o,s,f),e.elementType=J,e.lanes=m,e;case k:return ir(o.children,f,m,s);case C:v=8,f|=24;break;case j:return e=gi(12,o,s,f|2),e.elementType=j,e.lanes=m,e;case $:return e=gi(13,o,s,f),e.elementType=$,e.lanes=m,e;case H:return e=gi(19,o,s,f),e.elementType=H,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:v=10;break e;case B:v=9;break e;case A:v=11;break e;case V:v=14;break e;case P:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=gi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ir(e,s,o,r){return e=gi(7,e,r,s),e.lanes=o,e}function Jd(e,s,o){return e=gi(6,e,null,s),e.lanes=o,e}function e_(e){var s=gi(18,null,null,0);return s.stateNode=e,s}function ef(e,s,o){return s=gi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var t_=new WeakMap;function Ei(e,s){if(typeof e=="object"&&e!==null){var o=t_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:q(s)},t_.set(e,s),s)}return{value:e,source:s,stack:q(s)}}var Br=[],Lr=0,Wc=null,kl=0,Ai=[],Di=0,Ta=null,ta=1,na="";function fa(e,s){Br[Lr++]=kl,Br[Lr++]=Wc,Wc=e,kl=s}function n_(e,s,o){Ai[Di++]=ta,Ai[Di++]=na,Ai[Di++]=Ta,Ta=e;var r=ta;e=na;var f=32-Xe(r)-1;r&=~(1<<f),o+=1;var m=32-Xe(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ta=1<<32-Xe(s)+f|o<<f|r,na=m+e}else ta=1<<m|o<<f|r,na=e}function tf(e){e.return!==null&&(fa(e,1),n_(e,1,0))}function nf(e){for(;e===Wc;)Wc=Br[--Lr],Br[Lr]=null,kl=Br[--Lr],Br[Lr]=null;for(;e===Ta;)Ta=Ai[--Di],Ai[Di]=null,na=Ai[--Di],Ai[Di]=null,ta=Ai[--Di],Ai[Di]=null}function s_(e,s){Ai[Di++]=ta,Ai[Di++]=na,Ai[Di++]=Ta,ta=s.id,na=s.overflow,Ta=e}var Bo=null,Cs=null,jn=!1,Ea=null,Ni=!1,sf=Error(a(519));function Aa(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jl(Ei(s,e)),sf}function o_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[sn]=e,s[An]=r,o){case"dialog":wn("cancel",s),wn("close",s);break;case"iframe":case"object":case"embed":wn("load",s);break;case"video":case"audio":for(o=0;o<ql.length;o++)wn(ql[o],s);break;case"source":wn("error",s);break;case"img":case"image":case"link":wn("error",s),wn("load",s);break;case"details":wn("toggle",s);break;case"input":wn("invalid",s),Hn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":wn("invalid",s);break;case"textarea":wn("invalid",s),Ho(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||v0(s.textContent,o)?(r.popover!=null&&(wn("beforetoggle",s),wn("toggle",s)),r.onScroll!=null&&wn("scroll",s),r.onScrollEnd!=null&&wn("scrollend",s),r.onClick!=null&&(s.onclick=As),s=!0):s=!1,s||Aa(e,!0)}function i_(e){for(Bo=e.return;Bo;)switch(Bo.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Bo=Bo.return}}function Or(e){if(e!==Bo)return!1;if(!jn)return i_(e),jn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||wh(e.type,e.memoizedProps)),o=!o),o&&Cs&&Aa(e),i_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Cs=A0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Cs=A0(e)}else s===27?(s=Cs,Ya(e.type)?(e=Mh,Mh=null,Cs=e):Cs=s):Cs=Bo?Bi(e.stateNode.nextSibling):null;return!0}function ar(){Cs=Bo=null,jn=!1}function of(){var e=Ea;return e!==null&&(ui===null?ui=e:ui.push.apply(ui,e),Ea=null),e}function jl(e){Ea===null?Ea=[e]:Ea.push(e)}var af=N(null),rr=null,ha=null;function Da(e,s,o){oe(af,s._currentValue),s._currentValue=o}function ma(e){e._currentValue=af.current,ae(af)}function rf(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function lf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=f;for(var Y=0;Y<s.length;Y++)if(T.context===s[Y]){m.lanes|=o,T=m.alternate,T!==null&&(T.lanes|=o),rf(m.return,o,e),r||(v=null);break e}m=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),rf(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function zr(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var T=f.type;kt(f.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(f===Ne.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Jl):e=[Jl])}f=f.return}e!==null&&lf(s,e,o,r),s.flags|=262144}function Fc(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){rr=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Lo(e){return a_(rr,e)}function Xc(e,s){return rr===null&&lr(e),a_(e,s)}function a_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ha===null){if(e===null)throw Error(a(308));ha=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ha=ha.next=s;return o}var f2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},h2=t.unstable_scheduleCallback,m2=t.unstable_NormalPriority,ro={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new f2,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&h2(m2,function(){e.controller.abort()})}var Tl=null,uf=0,$r=0,Ir=null;function p2(e,s){if(Tl===null){var o=Tl=[];uf=0,$r=hh(),Ir={status:"pending",value:void 0,then:function(r){o.push(r)}}}return uf++,s.then(r_,r_),s}function r_(){if(--uf===0&&Tl!==null){Ir!==null&&(Ir.status="fulfilled");var e=Tl;Tl=null,$r=0,Ir=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function _2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var l_=z.S;z.S=function(e,s){Wg=bt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&p2(e,s),l_!==null&&l_(e,s)};var cr=N(null);function df(){var e=cr.current;return e!==null?e:ls.pooledCache}function qc(e,s){s===null?oe(cr,cr.current):oe(cr,s.pool)}function c_(){var e=df();return e===null?null:{parent:ro._currentValue,pool:e}}var Pr=Error(a(460)),ff=Error(a(474)),Gc=Error(a(542)),Kc={then:function(){}};function u_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(As,As),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e;default:if(typeof s.status=="string")s.then(As,As);else{if(e=ls,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e}throw dr=s,Pr}}function ur(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(dr=o,Pr):o}}var dr=null;function f_(){if(dr===null)throw Error(a(459));var e=dr;return dr=null,e}function h_(e){if(e===Pr||e===Gc)throw Error(a(483))}var Hr=null,El=0;function Qc(e){var s=El;return El+=1,Hr===null&&(Hr=[]),d_(Hr,e,s)}function Al(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Zc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function m_(e){function s(le,ee){if(e){var he=le.deletions;he===null?(le.deletions=[ee],le.flags|=16):he.push(ee)}}function o(le,ee){if(!e)return null;for(;ee!==null;)s(le,ee),ee=ee.sibling;return null}function r(le){for(var ee=new Map;le!==null;)le.key!==null?ee.set(le.key,le):ee.set(le.index,le),le=le.sibling;return ee}function f(le,ee){return le=da(le,ee),le.index=0,le.sibling=null,le}function m(le,ee,he){return le.index=he,e?(he=le.alternate,he!==null?(he=he.index,he<ee?(le.flags|=67108866,ee):he):(le.flags|=67108866,ee)):(le.flags|=1048576,ee)}function v(le){return e&&le.alternate===null&&(le.flags|=67108866),le}function T(le,ee,he,De){return ee===null||ee.tag!==6?(ee=Jd(he,le.mode,De),ee.return=le,ee):(ee=f(ee,he),ee.return=le,ee)}function Y(le,ee,he,De){var Pt=he.type;return Pt===k?je(le,ee,he.props.children,De,he.key):ee!==null&&(ee.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===P&&ur(Pt)===ee.type)?(ee=f(ee,he.props),Al(ee,he),ee.return=le,ee):(ee=Yc(he.type,he.key,he.props,null,le.mode,De),Al(ee,he),ee.return=le,ee)}function me(le,ee,he,De){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==he.containerInfo||ee.stateNode.implementation!==he.implementation?(ee=ef(he,le.mode,De),ee.return=le,ee):(ee=f(ee,he.children||[]),ee.return=le,ee)}function je(le,ee,he,De,Pt){return ee===null||ee.tag!==7?(ee=ir(he,le.mode,De,Pt),ee.return=le,ee):(ee=f(ee,he),ee.return=le,ee)}function Le(le,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return ee=Jd(""+ee,le.mode,he),ee.return=le,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return he=Yc(ee.type,ee.key,ee.props,null,le.mode,he),Al(he,ee),he.return=le,he;case S:return ee=ef(ee,le.mode,he),ee.return=le,ee;case P:return ee=ur(ee),Le(le,ee,he)}if(ue(ee)||Ce(ee))return ee=ir(ee,le.mode,he,null),ee.return=le,ee;if(typeof ee.then=="function")return Le(le,Qc(ee),he);if(ee.$$typeof===R)return Le(le,Xc(le,ee),he);Zc(le,ee)}return null}function ge(le,ee,he,De){var Pt=ee!==null?ee.key:null;if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return Pt!==null?null:T(le,ee,""+he,De);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case w:return he.key===Pt?Y(le,ee,he,De):null;case S:return he.key===Pt?me(le,ee,he,De):null;case P:return he=ur(he),ge(le,ee,he,De)}if(ue(he)||Ce(he))return Pt!==null?null:je(le,ee,he,De,null);if(typeof he.then=="function")return ge(le,ee,Qc(he),De);if(he.$$typeof===R)return ge(le,ee,Xc(le,he),De);Zc(le,he)}return null}function ve(le,ee,he,De,Pt){if(typeof De=="string"&&De!==""||typeof De=="number"||typeof De=="bigint")return le=le.get(he)||null,T(ee,le,""+De,Pt);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case w:return le=le.get(De.key===null?he:De.key)||null,Y(ee,le,De,Pt);case S:return le=le.get(De.key===null?he:De.key)||null,me(ee,le,De,Pt);case P:return De=ur(De),ve(le,ee,he,De,Pt)}if(ue(De)||Ce(De))return le=le.get(he)||null,je(ee,le,De,Pt,null);if(typeof De.then=="function")return ve(le,ee,he,Qc(De),Pt);if(De.$$typeof===R)return ve(le,ee,he,Xc(ee,De),Pt);Zc(ee,De)}return null}function Et(le,ee,he,De){for(var Pt=null,Bn=null,Bt=ee,dn=ee=0,Cn=null;Bt!==null&&dn<he.length;dn++){Bt.index>dn?(Cn=Bt,Bt=null):Cn=Bt.sibling;var Ln=ge(le,Bt,he[dn],De);if(Ln===null){Bt===null&&(Bt=Cn);break}e&&Bt&&Ln.alternate===null&&s(le,Bt),ee=m(Ln,ee,dn),Bn===null?Pt=Ln:Bn.sibling=Ln,Bn=Ln,Bt=Cn}if(dn===he.length)return o(le,Bt),jn&&fa(le,dn),Pt;if(Bt===null){for(;dn<he.length;dn++)Bt=Le(le,he[dn],De),Bt!==null&&(ee=m(Bt,ee,dn),Bn===null?Pt=Bt:Bn.sibling=Bt,Bn=Bt);return jn&&fa(le,dn),Pt}for(Bt=r(Bt);dn<he.length;dn++)Cn=ve(Bt,le,dn,he[dn],De),Cn!==null&&(e&&Cn.alternate!==null&&Bt.delete(Cn.key===null?dn:Cn.key),ee=m(Cn,ee,dn),Bn===null?Pt=Cn:Bn.sibling=Cn,Bn=Cn);return e&&Bt.forEach(function(Ga){return s(le,Ga)}),jn&&fa(le,dn),Pt}function Ft(le,ee,he,De){if(he==null)throw Error(a(151));for(var Pt=null,Bn=null,Bt=ee,dn=ee=0,Cn=null,Ln=he.next();Bt!==null&&!Ln.done;dn++,Ln=he.next()){Bt.index>dn?(Cn=Bt,Bt=null):Cn=Bt.sibling;var Ga=ge(le,Bt,Ln.value,De);if(Ga===null){Bt===null&&(Bt=Cn);break}e&&Bt&&Ga.alternate===null&&s(le,Bt),ee=m(Ga,ee,dn),Bn===null?Pt=Ga:Bn.sibling=Ga,Bn=Ga,Bt=Cn}if(Ln.done)return o(le,Bt),jn&&fa(le,dn),Pt;if(Bt===null){for(;!Ln.done;dn++,Ln=he.next())Ln=Le(le,Ln.value,De),Ln!==null&&(ee=m(Ln,ee,dn),Bn===null?Pt=Ln:Bn.sibling=Ln,Bn=Ln);return jn&&fa(le,dn),Pt}for(Bt=r(Bt);!Ln.done;dn++,Ln=he.next())Ln=ve(Bt,le,dn,Ln.value,De),Ln!==null&&(e&&Ln.alternate!==null&&Bt.delete(Ln.key===null?dn:Ln.key),ee=m(Ln,ee,dn),Bn===null?Pt=Ln:Bn.sibling=Ln,Bn=Ln);return e&&Bt.forEach(function(Mv){return s(le,Mv)}),jn&&fa(le,dn),Pt}function ss(le,ee,he,De){if(typeof he=="object"&&he!==null&&he.type===k&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case w:e:{for(var Pt=he.key;ee!==null;){if(ee.key===Pt){if(Pt=he.type,Pt===k){if(ee.tag===7){o(le,ee.sibling),De=f(ee,he.props.children),De.return=le,le=De;break e}}else if(ee.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===P&&ur(Pt)===ee.type){o(le,ee.sibling),De=f(ee,he.props),Al(De,he),De.return=le,le=De;break e}o(le,ee);break}else s(le,ee);ee=ee.sibling}he.type===k?(De=ir(he.props.children,le.mode,De,he.key),De.return=le,le=De):(De=Yc(he.type,he.key,he.props,null,le.mode,De),Al(De,he),De.return=le,le=De)}return v(le);case S:e:{for(Pt=he.key;ee!==null;){if(ee.key===Pt)if(ee.tag===4&&ee.stateNode.containerInfo===he.containerInfo&&ee.stateNode.implementation===he.implementation){o(le,ee.sibling),De=f(ee,he.children||[]),De.return=le,le=De;break e}else{o(le,ee);break}else s(le,ee);ee=ee.sibling}De=ef(he,le.mode,De),De.return=le,le=De}return v(le);case P:return he=ur(he),ss(le,ee,he,De)}if(ue(he))return Et(le,ee,he,De);if(Ce(he)){if(Pt=Ce(he),typeof Pt!="function")throw Error(a(150));return he=Pt.call(he),Ft(le,ee,he,De)}if(typeof he.then=="function")return ss(le,ee,Qc(he),De);if(he.$$typeof===R)return ss(le,ee,Xc(le,he),De);Zc(le,he)}return typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint"?(he=""+he,ee!==null&&ee.tag===6?(o(le,ee.sibling),De=f(ee,he),De.return=le,le=De):(o(le,ee),De=Jd(he,le.mode,De),De.return=le,le=De),v(le)):o(le,ee)}return function(le,ee,he,De){try{El=0;var Pt=ss(le,ee,he,De);return Hr=null,Pt}catch(Bt){if(Bt===Pr||Bt===Gc)throw Bt;var Bn=gi(29,Bt,null,le.mode);return Bn.lanes=De,Bn.return=le,Bn}finally{}}}var fr=m_(!0),p_=m_(!1),Na=!1;function hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($n&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Vc(e),Zp(e,null,o),s}return Uc(e,r,s,o),Vc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Yn(e,o)}}function pf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var _f=!1;function Nl(){if(_f){var e=Ir;if(e!==null)throw e}}function Rl(e,s,o,r){_f=!1;var f=e.updateQueue;Na=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var Y=T,me=Y.next;Y.next=null,v===null?m=me:v.next=me,v=Y;var je=e.alternate;je!==null&&(je=je.updateQueue,T=je.lastBaseUpdate,T!==v&&(T===null?je.firstBaseUpdate=me:T.next=me,je.lastBaseUpdate=Y))}if(m!==null){var Le=f.baseState;v=0,je=me=Y=null,T=m;do{var ge=T.lane&-536870913,ve=ge!==T.lane;if(ve?(Sn&ge)===ge:(r&ge)===ge){ge!==0&&ge===$r&&(_f=!0),je!==null&&(je=je.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Et=e,Ft=T;ge=s;var ss=o;switch(Ft.tag){case 1:if(Et=Ft.payload,typeof Et=="function"){Le=Et.call(ss,Le,ge);break e}Le=Et;break e;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=Ft.payload,ge=typeof Et=="function"?Et.call(ss,Le,ge):Et,ge==null)break e;Le=x({},Le,ge);break e;case 2:Na=!0}}ge=T.callback,ge!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[ge]:ve.push(ge))}else ve={lane:ge,tag:T.tag,payload:T.payload,callback:T.callback,next:null},je===null?(me=je=ve,Y=Le):je=je.next=ve,v|=ge;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;ve=T,T=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);je===null&&(Y=Le),f.baseState=Y,f.firstBaseUpdate=me,f.lastBaseUpdate=je,m===null&&(f.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=Le}}function __(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function g_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)__(o[e],s)}var Ur=N(null),Jc=N(0);function y_(e,s){e=Sa,oe(Jc,e),oe(Ur,s),Sa=e|s.baseLanes}function gf(){oe(Jc,Sa),oe(Ur,Ur.current)}function yf(){Sa=Jc.current,ae(Ur),ae(Jc)}var yi=N(null),Ri=null;function La(e){var s=e.alternate;oe(eo,eo.current&1),oe(yi,e),Ri===null&&(s===null||Ur.current!==null||s.memoizedState!==null)&&(Ri=e)}function xf(e){oe(eo,eo.current),oe(yi,e),Ri===null&&(Ri=e)}function x_(e){e.tag===22?(oe(eo,eo.current),oe(yi,e),Ri===null&&(Ri=e)):Oa()}function Oa(){oe(eo,eo.current),oe(yi,yi.current)}function xi(e){ae(yi),Ri===e&&(Ri=null),ae(eo)}var eo=N(0);function eu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||kh(o)||jh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var pa=0,un=null,ts=null,lo=null,tu=!1,Vr=!1,hr=!1,nu=0,Bl=0,Yr=null,g2=0;function Us(){throw Error(a(321))}function bf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!kt(e[o],s[o]))return!1;return!0}function vf(e,s,o,r,f,m){return pa=m,un=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=e===null||e.memoizedState===null?ng:Of,hr=!1,m=o(r,f),hr=!1,Vr&&(m=v_(s,o,r,f)),b_(e),m}function b_(e){z.H=zl;var s=ts!==null&&ts.next!==null;if(pa=0,lo=ts=un=null,tu=!1,Bl=0,Yr=null,s)throw Error(a(300));e===null||co||(e=e.dependencies,e!==null&&Fc(e)&&(co=!0))}function v_(e,s,o,r){un=e;var f=0;do{if(Vr&&(Yr=null),Bl=0,Vr=!1,25<=f)throw Error(a(301));if(f+=1,lo=ts=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=sg,m=s(o,r)}while(Vr);return m}function y2(){var e=z.H,s=e.useState()[0];return s=typeof s.then=="function"?Ll(s):s,e=e.useState()[0],(ts!==null?ts.memoizedState:null)!==e&&(un.flags|=1024),s}function wf(){var e=nu!==0;return nu=0,e}function Sf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Cf(e){if(tu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}tu=!1}pa=0,lo=ts=un=null,Vr=!1,Bl=nu=0,Yr=null}function Jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?un.memoizedState=lo=e:lo=lo.next=e,lo}function to(){if(ts===null){var e=un.alternate;e=e!==null?e.memoizedState:null}else e=ts.next;var s=lo===null?un.memoizedState:lo.next;if(s!==null)lo=s,ts=e;else{if(e===null)throw un.alternate===null?Error(a(467)):Error(a(310));ts=e,e={memoizedState:ts.memoizedState,baseState:ts.baseState,baseQueue:ts.baseQueue,queue:ts.queue,next:null},lo===null?un.memoizedState=lo=e:lo=lo.next=e}return lo}function su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(e){var s=Bl;return Bl+=1,Yr===null&&(Yr=[]),e=d_(Yr,e,s),s=un,(lo===null?s.memoizedState:lo.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?ng:Of),e}function ou(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ll(e);if(e.$$typeof===R)return Lo(e)}throw Error(a(438,String(e)))}function kf(e){var s=null,o=un.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=un.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=su(),un.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=re;return s.index++,o}function _a(e,s){return typeof s=="function"?s(e):s}function iu(e){var s=to();return jf(s,ts,e)}function jf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var T=v=null,Y=null,me=s,je=!1;do{var Le=me.lane&-536870913;if(Le!==me.lane?(Sn&Le)===Le:(pa&Le)===Le){var ge=me.revertLane;if(ge===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),Le===$r&&(je=!0);else if((pa&ge)===ge){me=me.next,ge===$r&&(je=!0);continue}else Le={lane:0,revertLane:me.revertLane,gesture:null,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null},Y===null?(T=Y=Le,v=m):Y=Y.next=Le,un.lanes|=ge,Ia|=ge;Le=me.action,hr&&o(m,Le),m=me.hasEagerState?me.eagerState:o(m,Le)}else ge={lane:Le,revertLane:me.revertLane,gesture:me.gesture,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null},Y===null?(T=Y=ge,v=m):Y=Y.next=ge,un.lanes|=Le,Ia|=Le;me=me.next}while(me!==null&&me!==s);if(Y===null?v=m:Y.next=T,!kt(m,e.memoizedState)&&(co=!0,je&&(o=Ir,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=Y,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Mf(e){var s=to(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);kt(m,s.memoizedState)||(co=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function w_(e,s,o){var r=un,f=to(),m=jn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!kt((ts||f).memoizedState,o);if(v&&(f.memoizedState=o,co=!0),f=f.queue,Af(k_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,Wr(9,{destroy:void 0},C_.bind(null,r,f,o,s),null),ls===null)throw Error(a(349));m||(pa&127)!==0||S_(r,s,o)}return o}function S_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=un.updateQueue,s===null?(s=su(),un.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function C_(e,s,o,r){s.value=o,s.getSnapshot=r,j_(s)&&M_(e)}function k_(e,s,o){return o(function(){j_(s)&&M_(e)})}function j_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!kt(e,o)}catch{return!0}}function M_(e){var s=or(e,2);s!==null&&di(s,e,2)}function Tf(e){var s=Jo();if(typeof e=="function"){var o=e;if(e=o(),hr){Re(!0);try{o()}finally{Re(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},s}function T_(e,s,o,r){return e.baseState=o,jf(e,ts,typeof r=="function"?r:_a)}function x2(e,s,o,r,f){if(lu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};z.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,E_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function E_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=z.T,v={};z.T=v;try{var T=o(f,r),Y=z.S;Y!==null&&Y(v,T),A_(e,s,T)}catch(me){Ef(e,s,me)}finally{m!==null&&v.types!==null&&(m.types=v.types),z.T=m}}else try{m=o(f,r),A_(e,s,m)}catch(me){Ef(e,s,me)}}function A_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){D_(e,s,r)},function(r){return Ef(e,s,r)}):D_(e,s,o)}function D_(e,s,o){s.status="fulfilled",s.value=o,N_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,E_(e,o)))}function Ef(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,N_(s),s=s.next;while(s!==r)}e.action=null}function N_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function R_(e,s){return s}function B_(e,s){if(jn){var o=ls.formState;if(o!==null){e:{var r=un;if(jn){if(Cs){t:{for(var f=Cs,m=Ni;f.nodeType!==8;){if(!m){f=null;break t}if(f=Bi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Cs=Bi(f.nextSibling),r=f.data==="F!";break e}}Aa(r)}r=!1}r&&(s=o[0])}}return o=Jo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R_,lastRenderedState:s},o.queue=r,o=J_.bind(null,un,r),r.dispatch=o,r=Tf(!1),m=Lf.bind(null,un,!1,r.queue),r=Jo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=x2.bind(null,un,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function L_(e){var s=to();return O_(s,ts,e)}function O_(e,s,o){if(s=jf(e,s,R_)[0],e=iu(_a)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Ll(s)}catch(v){throw v===Pr?Gc:v}else r=s;s=to();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(un.flags|=2048,Wr(9,{destroy:void 0},b2.bind(null,f,o),null)),[r,m,e]}function b2(e,s){e.action=s}function z_(e){var s=to(),o=ts;if(o!==null)return O_(s,o,e);to(),s=s.memoizedState,o=to();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Wr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=un.updateQueue,s===null&&(s=su(),un.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function $_(){return to().memoizedState}function au(e,s,o,r){var f=Jo();un.flags|=e,f.memoizedState=Wr(1|s,{destroy:void 0},o,r===void 0?null:r)}function ru(e,s,o,r){var f=to();r=r===void 0?null:r;var m=f.memoizedState.inst;ts!==null&&r!==null&&bf(r,ts.memoizedState.deps)?f.memoizedState=Wr(s,m,o,r):(un.flags|=e,f.memoizedState=Wr(1|s,m,o,r))}function I_(e,s){au(8390656,8,e,s)}function Af(e,s){ru(2048,8,e,s)}function v2(e){un.flags|=4;var s=un.updateQueue;if(s===null)s=su(),un.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function P_(e){var s=to().memoizedState;return v2({ref:s,nextImpl:e}),function(){if(($n&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function H_(e,s){return ru(4,2,e,s)}function U_(e,s){return ru(4,4,e,s)}function V_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function Y_(e,s,o){o=o!=null?o.concat([e]):null,ru(4,4,V_.bind(null,s,e),o)}function Df(){}function W_(e,s){var o=to();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&bf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function F_(e,s){var o=to();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&bf(s,r[1]))return r[0];if(r=e(),hr){Re(!0);try{e()}finally{Re(!1)}}return o.memoizedState=[r,s],r}function Nf(e,s,o){return o===void 0||(pa&1073741824)!==0&&(Sn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Xg(),un.lanes|=e,Ia|=e,o)}function X_(e,s,o,r){return kt(o,s)?o:Ur.current!==null?(e=Nf(e,o,r),kt(e,s)||(co=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(Sn&261930)===0?(co=!0,e.memoizedState=o):(e=Xg(),un.lanes|=e,Ia|=e,s)}function q_(e,s,o,r,f){var m=te.p;te.p=m!==0&&8>m?m:8;var v=z.T,T={};z.T=T,Lf(e,!1,s,o);try{var Y=f(),me=z.S;if(me!==null&&me(T,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var je=_2(Y,r);Ol(e,s,je,wi(e))}else Ol(e,s,r,wi(e))}catch(Le){Ol(e,s,{then:function(){},status:"rejected",reason:Le},wi())}finally{te.p=m,v!==null&&T.types!==null&&(v.types=T.types),z.T=v}}function w2(){}function Rf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=G_(e).queue;q_(e,f,s,W,o===null?w2:function(){return K_(e),o(r)})}function G_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:W},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function K_(e){var s=G_(e);s.next===null&&(s=e.alternate.memoizedState),Ol(e,s.next.queue,{},wi())}function Bf(){return Lo(Jl)}function Q_(){return to().memoizedState}function Z_(){return to().memoizedState}function S2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=wi();e=Ra(o);var r=Ba(s,e,o);r!==null&&(di(r,s,o),Dl(r,s,o)),s={cache:cf()},e.payload=s;return}s=s.return}}function C2(e,s,o){var r=wi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},lu(e)?eg(s,o):(o=Qd(e,s,o,r),o!==null&&(di(o,e,r),tg(o,s,r)))}function J_(e,s,o){var r=wi();Ol(e,s,o,r)}function Ol(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(lu(e))eg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,T=m(v,o);if(f.hasEagerState=!0,f.eagerState=T,kt(T,v))return Uc(e,s,f,0),ls===null&&Hc(),!1}catch{}finally{}if(o=Qd(e,s,f,r),o!==null)return di(o,e,r),tg(o,s,r),!0}return!1}function Lf(e,s,o,r){if(r={lane:2,revertLane:hh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},lu(e)){if(s)throw Error(a(479))}else s=Qd(e,o,r,2),s!==null&&di(s,e,2)}function lu(e){var s=e.alternate;return e===un||s!==null&&s===un}function eg(e,s){Vr=tu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function tg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Yn(e,o)}}var zl={readContext:Lo,use:ou,useCallback:Us,useContext:Us,useEffect:Us,useImperativeHandle:Us,useLayoutEffect:Us,useInsertionEffect:Us,useMemo:Us,useReducer:Us,useRef:Us,useState:Us,useDebugValue:Us,useDeferredValue:Us,useTransition:Us,useSyncExternalStore:Us,useId:Us,useHostTransitionStatus:Us,useFormState:Us,useActionState:Us,useOptimistic:Us,useMemoCache:Us,useCacheRefresh:Us};zl.useEffectEvent=Us;var ng={readContext:Lo,use:ou,useCallback:function(e,s){return Jo().memoizedState=[e,s===void 0?null:s],e},useContext:Lo,useEffect:I_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,au(4194308,4,V_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return au(4194308,4,e,s)},useInsertionEffect:function(e,s){au(4,2,e,s)},useMemo:function(e,s){var o=Jo();s=s===void 0?null:s;var r=e();if(hr){Re(!0);try{e()}finally{Re(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Jo();if(o!==void 0){var f=o(s);if(hr){Re(!0);try{o(s)}finally{Re(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=C2.bind(null,un,e),[r.memoizedState,e]},useRef:function(e){var s=Jo();return e={current:e},s.memoizedState=e},useState:function(e){e=Tf(e);var s=e.queue,o=J_.bind(null,un,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Df,useDeferredValue:function(e,s){var o=Jo();return Nf(o,e,s)},useTransition:function(){var e=Tf(!1);return e=q_.bind(null,un,e.queue,!0,!1),Jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=un,f=Jo();if(jn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),ls===null)throw Error(a(349));(Sn&127)!==0||S_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,I_(k_.bind(null,r,m,e),[e]),r.flags|=2048,Wr(9,{destroy:void 0},C_.bind(null,r,m,o,s),null),o},useId:function(){var e=Jo(),s=ls.identifierPrefix;if(jn){var o=na,r=ta;o=(r&~(1<<32-Xe(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=nu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=g2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Bf,useFormState:B_,useActionState:B_,useOptimistic:function(e){var s=Jo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Lf.bind(null,un,!0,o),o.dispatch=s,[e,s]},useMemoCache:kf,useCacheRefresh:function(){return Jo().memoizedState=S2.bind(null,un)},useEffectEvent:function(e){var s=Jo(),o={impl:e};return s.memoizedState=o,function(){if(($n&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Of={readContext:Lo,use:ou,useCallback:W_,useContext:Lo,useEffect:Af,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:U_,useMemo:F_,useReducer:iu,useRef:$_,useState:function(){return iu(_a)},useDebugValue:Df,useDeferredValue:function(e,s){var o=to();return X_(o,ts.memoizedState,e,s)},useTransition:function(){var e=iu(_a)[0],s=to().memoizedState;return[typeof e=="boolean"?e:Ll(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Bf,useFormState:L_,useActionState:L_,useOptimistic:function(e,s){var o=to();return T_(o,ts,e,s)},useMemoCache:kf,useCacheRefresh:Z_};Of.useEffectEvent=P_;var sg={readContext:Lo,use:ou,useCallback:W_,useContext:Lo,useEffect:Af,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:U_,useMemo:F_,useReducer:Mf,useRef:$_,useState:function(){return Mf(_a)},useDebugValue:Df,useDeferredValue:function(e,s){var o=to();return ts===null?Nf(o,e,s):X_(o,ts.memoizedState,e,s)},useTransition:function(){var e=Mf(_a)[0],s=to().memoizedState;return[typeof e=="boolean"?e:Ll(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Bf,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var o=to();return ts!==null?T_(o,ts,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:kf,useCacheRefresh:Z_};sg.useEffectEvent=P_;function zf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var $f={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=wi(),f=Ra(r);f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(di(s,e,r),Dl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=wi(),f=Ra(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(di(s,e,r),Dl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=wi(),r=Ra(o);r.tag=2,s!=null&&(r.callback=s),s=Ba(e,r,o),s!==null&&(di(s,e,o),Dl(s,e,o))}};function og(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!_t(o,r)||!_t(f,m):!0}function ig(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&$f.enqueueReplaceState(s,s.state,null)}function mr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ag(e){Pc(e)}function rg(e){console.error(e)}function lg(e){Pc(e)}function cu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function cg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function If(e,s,o){return o=Ra(o),o.tag=3,o.payload={element:null},o.callback=function(){cu(e,s)},o}function ug(e){return e=Ra(e),e.tag=3,e}function dg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){cg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){cg(s,o,r),typeof f!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function k2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&zr(s,o,f,!0),o=yi.current,o!==null){switch(o.tag){case 31:case 13:return Ri===null?vu():o.alternate===null&&Vs===0&&(Vs=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Kc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),uh(e,r,f)),!1;case 22:return o.flags|=65536,r===Kc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),uh(e,r,f)),!1}throw Error(a(435,o.tag))}return uh(e,r,f),vu(),!1}if(jn)return s=yi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==sf&&(e=Error(a(422),{cause:r}),jl(Ei(e,o)))):(r!==sf&&(s=Error(a(423),{cause:r}),jl(Ei(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ei(r,o),f=If(e.stateNode,r,f),pf(e,f),Vs!==4&&(Vs=2)),!1;var m=Error(a(520),{cause:r});if(m=Ei(m,o),Wl===null?Wl=[m]:Wl.push(m),Vs!==4&&(Vs=2),s===null)return!0;r=Ei(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=If(o.stateNode,r,e),pf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pa===null||!Pa.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=ug(f),dg(f,e,o,r),pf(o,f),!1}o=o.return}while(o!==null);return!1}var Pf=Error(a(461)),co=!1;function Oo(e,s,o,r){s.child=e===null?p_(s,null,o,r):fr(s,e.child,o,r)}function fg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return lr(s),r=vf(e,s,o,v,m,f),T=wf(),e!==null&&!co?(Sf(e,s,f),ga(e,s,f)):(jn&&T&&tf(s),s.flags|=1,Oo(e,s,r,f),s.child)}function hg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Zd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,mg(e,s,m,r,f)):(e=Yc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!qf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:_t,o(v,r)&&e.ref===s.ref)return ga(e,s,f)}return s.flags|=1,e=da(m,r),e.ref=s.ref,e.return=s,s.child=e}function mg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(_t(m,r)&&e.ref===s.ref)if(co=!1,s.pendingProps=r=m,qf(e,f))(e.flags&131072)!==0&&(co=!0);else return s.lanes=e.lanes,ga(e,s,f)}return Hf(e,s,o,r,f)}function pg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return _g(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?y_(s,m):gf(),x_(s);else return r=s.lanes=536870912,_g(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),y_(s,m),Oa(),s.memoizedState=null):(e!==null&&qc(s,null),gf(),Oa());return Oo(e,s,f,o),s.child}function $l(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function _g(e,s,o,r,f){var m=df();return m=m===null?null:{parent:ro._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),gf(),x_(s),e!==null&&zr(e,s,r,!0),s.childLanes=f,null}function uu(e,s){return s=fu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function gg(e,s,o){return fr(s,e.child,null,o),e=uu(s,s.pendingProps),e.flags|=2,xi(s),s.memoizedState=null,e}function j2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(jn){if(r.mode==="hidden")return e=uu(s,r),s.lanes=536870912,$l(null,e);if(xf(s),(e=Cs)?(e=E0(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,Bo=s,Cs=null)):e=null,e===null)throw Aa(s);return s.lanes=536870912,null}return uu(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(xf(s),f)if(s.flags&256)s.flags&=-257,s=gg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(co||zr(e,s,o,!1),f=(o&e.childLanes)!==0,co||f){if(r=ls,r!==null&&(v=Qn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,or(e,v),di(r,e,v),Pf;vu(),s=gg(e,s,o)}else e=m.treeContext,Cs=Bi(v.nextSibling),Bo=s,jn=!0,Ea=null,Ni=!1,e!==null&&s_(s,e),s=uu(s,r),s.flags|=4096;return s}return e=da(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function du(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Hf(e,s,o,r,f){return lr(s),o=vf(e,s,o,r,void 0,f),r=wf(),e!==null&&!co?(Sf(e,s,f),ga(e,s,f)):(jn&&r&&tf(s),s.flags|=1,Oo(e,s,o,f),s.child)}function yg(e,s,o,r,f,m){return lr(s),s.updateQueue=null,o=v_(s,r,o,f),b_(e),r=wf(),e!==null&&!co?(Sf(e,s,m),ga(e,s,m)):(jn&&r&&tf(s),s.flags|=1,Oo(e,s,o,m),s.child)}function xg(e,s,o,r,f){if(lr(s),s.stateNode===null){var m=Rr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Lo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=$f,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},hf(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Lo(v):Rr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(zf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&$f.enqueueReplaceState(m,m.state,null),Rl(s,r,m,f),Nl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var T=s.memoizedProps,Y=mr(o,T);m.props=Y;var me=m.context,je=o.contextType;v=Rr,typeof je=="object"&&je!==null&&(v=Lo(je));var Le=o.getDerivedStateFromProps;je=typeof Le=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,je||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||me!==v)&&ig(s,m,r,v),Na=!1;var ge=s.memoizedState;m.state=ge,Rl(s,r,m,f),Nl(),me=s.memoizedState,T||ge!==me||Na?(typeof Le=="function"&&(zf(s,o,Le,r),me=s.memoizedState),(Y=Na||og(s,o,Y,r,ge,me,v))?(je||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=me),m.props=r,m.state=me,m.context=v,r=Y):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,mf(e,s),v=s.memoizedProps,je=mr(o,v),m.props=je,Le=s.pendingProps,ge=m.context,me=o.contextType,Y=Rr,typeof me=="object"&&me!==null&&(Y=Lo(me)),T=o.getDerivedStateFromProps,(me=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Le||ge!==Y)&&ig(s,m,r,Y),Na=!1,ge=s.memoizedState,m.state=ge,Rl(s,r,m,f),Nl();var ve=s.memoizedState;v!==Le||ge!==ve||Na||e!==null&&e.dependencies!==null&&Fc(e.dependencies)?(typeof T=="function"&&(zf(s,o,T,r),ve=s.memoizedState),(je=Na||og(s,o,je,r,ge,ve,Y)||e!==null&&e.dependencies!==null&&Fc(e.dependencies))?(me||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ve,Y),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ve,Y)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ve),m.props=r,m.state=ve,m.context=Y,r=je):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,du(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=fr(s,e.child,null,f),s.child=fr(s,null,o,f)):Oo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ga(e,s,f),e}function bg(e,s,o,r){return ar(),s.flags|=256,Oo(e,s,o,r),s.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:c_()}}function Yf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=vi),e}function vg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(eo.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(jn){if(f?La(s):Oa(),(e=Cs)?(e=E0(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,Bo=s,Cs=null)):e=null,e===null)throw Aa(s);return jh(e)?s.lanes=32:s.lanes=536870912,null}var T=r.children;return r=r.fallback,f?(Oa(),f=s.mode,T=fu({mode:"hidden",children:T},f),r=ir(r,f,o,null),T.return=s,r.return=s,T.sibling=r,s.child=T,r=s.child,r.memoizedState=Vf(o),r.childLanes=Yf(e,v,o),s.memoizedState=Uf,$l(null,r)):(La(s),Wf(s,T))}var Y=e.memoizedState;if(Y!==null&&(T=Y.dehydrated,T!==null)){if(m)s.flags&256?(La(s),s.flags&=-257,s=Ff(e,s,o)):s.memoizedState!==null?(Oa(),s.child=e.child,s.flags|=128,s=null):(Oa(),T=r.fallback,f=s.mode,r=fu({mode:"visible",children:r.children},f),T=ir(T,f,o,null),T.flags|=2,r.return=s,T.return=s,r.sibling=T,s.child=r,fr(s,e.child,null,o),r=s.child,r.memoizedState=Vf(o),r.childLanes=Yf(e,v,o),s.memoizedState=Uf,s=$l(null,r));else if(La(s),jh(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var me=v.dgst;v=me,r=Error(a(419)),r.stack="",r.digest=v,jl({value:r,source:null,stack:null}),s=Ff(e,s,o)}else if(co||zr(e,s,o,!1),v=(o&e.childLanes)!==0,co||v){if(v=ls,v!==null&&(r=Qn(v,o),r!==0&&r!==Y.retryLane))throw Y.retryLane=r,or(e,r),di(v,e,r),Pf;kh(T)||vu(),s=Ff(e,s,o)}else kh(T)?(s.flags|=192,s.child=e.child,s=null):(e=Y.treeContext,Cs=Bi(T.nextSibling),Bo=s,jn=!0,Ea=null,Ni=!1,e!==null&&s_(s,e),s=Wf(s,r.children),s.flags|=4096);return s}return f?(Oa(),T=r.fallback,f=s.mode,Y=e.child,me=Y.sibling,r=da(Y,{mode:"hidden",children:r.children}),r.subtreeFlags=Y.subtreeFlags&65011712,me!==null?T=da(me,T):(T=ir(T,f,o,null),T.flags|=2),T.return=s,r.return=s,r.sibling=T,s.child=r,$l(null,r),r=s.child,T=e.child.memoizedState,T===null?T=Vf(o):(f=T.cachePool,f!==null?(Y=ro._currentValue,f=f.parent!==Y?{parent:Y,pool:Y}:f):f=c_(),T={baseLanes:T.baseLanes|o,cachePool:f}),r.memoizedState=T,r.childLanes=Yf(e,v,o),s.memoizedState=Uf,$l(e.child,r)):(La(s),o=e.child,e=o.sibling,o=da(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Wf(e,s){return s=fu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function fu(e,s){return e=gi(22,e,null,s),e.lanes=0,e}function Ff(e,s,o){return fr(s,e.child,null,o),e=Wf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function wg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),rf(e.return,s,o)}function Xf(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Sg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=eo.current,T=(v&2)!==0;if(T?(v=v&1|2,s.flags|=128):v&=1,oe(eo,v),Oo(e,s,r,o),r=jn?kl:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,o,s);else if(e.tag===19)wg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&eu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Xf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&eu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Xf(s,!0,o,null,m,r);break;case"together":Xf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ga(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ia|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(zr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=da(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=da(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function qf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Fc(e)))}function M2(e,s,o){switch(s.tag){case 3:ft(s,s.stateNode.containerInfo),Da(s,ro,e.memoizedState.cache),ar();break;case 27:case 5:at(s);break;case 4:ft(s,s.stateNode.containerInfo);break;case 10:Da(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,xf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(La(s),s.flags|=128,null):(o&s.child.childLanes)!==0?vg(e,s,o):(La(s),e=ga(e,s,o),e!==null?e.sibling:null);La(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(zr(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Sg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),oe(eo,eo.current),r)break;return null;case 22:return s.lanes=0,pg(e,s,o,s.pendingProps);case 24:Da(s,ro,e.memoizedState.cache)}return ga(e,s,o)}function Cg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)co=!0;else{if(!qf(e,o)&&(s.flags&128)===0)return co=!1,M2(e,s,o);co=(e.flags&131072)!==0}else co=!1,jn&&(s.flags&1048576)!==0&&n_(s,kl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=ur(s.elementType),s.type=e,typeof e=="function")Zd(e)?(r=mr(e,r),s.tag=1,s=xg(null,s,e,r,o)):(s.tag=0,s=Hf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===A){s.tag=11,s=fg(null,s,e,r,o);break e}else if(f===V){s.tag=14,s=hg(null,s,e,r,o);break e}}throw s=Z(e)||e,Error(a(306,s,""))}}return s;case 0:return Hf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=mr(r,s.pendingProps),xg(e,s,r,f,o);case 3:e:{if(ft(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,mf(e,s),Rl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Da(s,ro,r),r!==m.cache&&lf(s,[ro],o,!0),Nl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=bg(e,s,r,o);break e}else if(r!==f){f=Ei(Error(a(424)),s),jl(f),s=bg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Cs=Bi(e.firstChild),Bo=s,jn=!0,Ea=null,Ni=!0,o=p_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ar(),r===f){s=ga(e,s,o);break e}Oo(e,s,r,o)}s=s.child}return s;case 26:return du(e,s),e===null?(o=L0(s.type,null,s.pendingProps,null))?s.memoizedState=o:jn||(o=s.type,e=s.pendingProps,r=Tu($e.current).createElement(o),r[sn]=s,r[An]=e,zo(r,o,e),Zn(r),s.stateNode=r):s.memoizedState=L0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return at(s),e===null&&jn&&(r=s.stateNode=N0(s.type,s.pendingProps,$e.current),Bo=s,Ni=!0,f=Cs,Ya(s.type)?(Mh=f,Cs=Bi(r.firstChild)):Cs=f),Oo(e,s,s.pendingProps.children,o),du(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&jn&&((f=r=Cs)&&(r=sv(r,s.type,s.pendingProps,Ni),r!==null?(s.stateNode=r,Bo=s,Cs=Bi(r.firstChild),Ni=!1,f=!0):f=!1),f||Aa(s)),at(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,wh(f,m)?r=null:v!==null&&wh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=vf(e,s,y2,null,null,o),Jl._currentValue=f),du(e,s),Oo(e,s,r,o),s.child;case 6:return e===null&&jn&&((e=o=Cs)&&(o=ov(o,s.pendingProps,Ni),o!==null?(s.stateNode=o,Bo=s,Cs=null,e=!0):e=!1),e||Aa(s)),null;case 13:return vg(e,s,o);case 4:return ft(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=fr(s,null,r,o):Oo(e,s,r,o),s.child;case 11:return fg(e,s,s.type,s.pendingProps,o);case 7:return Oo(e,s,s.pendingProps,o),s.child;case 8:return Oo(e,s,s.pendingProps.children,o),s.child;case 12:return Oo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Da(s,s.type,r.value),Oo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,lr(s),f=Lo(f),r=r(f),s.flags|=1,Oo(e,s,r,o),s.child;case 14:return hg(e,s,s.type,s.pendingProps,o);case 15:return mg(e,s,s.type,s.pendingProps,o);case 19:return Sg(e,s,o);case 31:return j2(e,s,o);case 22:return pg(e,s,o,s.pendingProps);case 24:return lr(s),r=Lo(ro),e===null?(f=df(),f===null&&(f=ls,m=cf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},hf(s),Da(s,ro,f)):((e.lanes&o)!==0&&(mf(e,s),Rl(s,null,null,o),Nl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Da(s,ro,r)):(r=m.cache,Da(s,ro,r),r!==f.cache&&lf(s,[ro],o,!0))),Oo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ya(e){e.flags|=4}function Gf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw dr=Kc,ff}else e.flags&=-16777217}function kg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P0(s))if(Qg())e.flags|=8192;else throw dr=Kc,ff}function hu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?ht():536870912,e.lanes|=s,Gr|=s)}function Il(e,s){if(!jn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ks(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function T2(e,s,o){var r=s.pendingProps;switch(nf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ks(s),null;case 1:return ks(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ma(ro),Oe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Or(s)?ya(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,of())),ks(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ya(s),m!==null?(ks(s),kg(s,m)):(ks(s),Gf(s,f,null,r,o))):m?m!==e.memoizedState?(ya(s),ks(s),kg(s,m)):(ks(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ya(s),ks(s),Gf(s,f,e,r,o)),null;case 27:if(tt(s),o=$e.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ks(s),null}e=ce.current,Or(s)?o_(s):(e=N0(f,r,o),s.stateNode=e,ya(s))}return ks(s),null;case 5:if(tt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ks(s),null}if(m=ce.current,Or(s))o_(s);else{var v=Tu($e.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[sn]=s,m[An]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(zo(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ya(s)}}return ks(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=$e.current,Or(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=Bo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[sn]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||v0(e.nodeValue,o)),e||Aa(s,!0)}else e=Tu(e).createTextNode(r),e[sn]=s,s.stateNode=e}return ks(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=Or(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[sn]=s}else ar(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ks(s),e=!1}else o=of(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(xi(s),s):(xi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ks(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Or(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[sn]=s}else ar(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ks(s),f=!1}else f=of(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(xi(s),s):(xi(s),null)}return xi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),hu(s,s.updateQueue),ks(s),null);case 4:return Oe(),e===null&&gh(s.stateNode.containerInfo),ks(s),null;case 10:return ma(s.type),ks(s),null;case 19:if(ae(eo),r=s.memoizedState,r===null)return ks(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Il(r,!1);else{if(Vs!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=eu(e),m!==null){for(s.flags|=128,Il(r,!1),e=m.updateQueue,s.updateQueue=e,hu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Jp(o,e),o=o.sibling;return oe(eo,eo.current&1|2),jn&&fa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&bt()>yu&&(s.flags|=128,f=!0,Il(r,!1),s.lanes=4194304)}else{if(!f)if(e=eu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,hu(s,e),Il(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!jn)return ks(s),null}else 2*bt()-r.renderingStartTime>yu&&o!==536870912&&(s.flags|=128,f=!0,Il(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=bt(),e.sibling=null,o=eo.current,oe(eo,f?o&1|2:o&1),jn&&fa(s,r.treeForkCount),e):(ks(s),null);case 22:case 23:return xi(s),yf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(ks(s),s.subtreeFlags&6&&(s.flags|=8192)):ks(s),o=s.updateQueue,o!==null&&hu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ae(cr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ma(ro),ks(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function E2(e,s){switch(nf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ma(ro),Oe(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return tt(s),null;case 31:if(s.memoizedState!==null){if(xi(s),s.alternate===null)throw Error(a(340));ar()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(xi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));ar()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ae(eo),null;case 4:return Oe(),null;case 10:return ma(s.type),null;case 22:case 23:return xi(s),yf(),e!==null&&ae(cr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ma(ro),null;case 25:return null;default:return null}}function jg(e,s){switch(nf(s),s.tag){case 3:ma(ro),Oe();break;case 26:case 27:case 5:tt(s);break;case 4:Oe();break;case 31:s.memoizedState!==null&&xi(s);break;case 13:xi(s);break;case 19:ae(eo);break;case 10:ma(s.type);break;case 22:case 23:xi(s),yf(),e!==null&&ae(cr);break;case 24:ma(ro)}}function Pl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(T){Gn(s,s.return,T)}}function za(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=s;var Y=o,me=T;try{me()}catch(je){Gn(f,Y,je)}}}r=r.next}while(r!==m)}}catch(je){Gn(s,s.return,je)}}function Mg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{g_(s,o)}catch(r){Gn(e,e.return,r)}}}function Tg(e,s,o){o.props=mr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Gn(e,s,r)}}function Hl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Gn(e,s,f)}}function sa(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Gn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Gn(e,s,f)}else o.current=null}function Eg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Gn(e,e.return,f)}}function Kf(e,s,o){try{var r=e.stateNode;Q2(r,e.type,o,s),r[An]=s}catch(f){Gn(e,e.return,f)}}function Ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Qf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=As));else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Zf(e,s,o),e=e.sibling;e!==null;)Zf(e,s,o),e=e.sibling}function mu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(mu(e,s,o),e=e.sibling;e!==null;)mu(e,s,o),e=e.sibling}function Dg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);zo(s,r,o),s[sn]=e,s[An]=o}catch(m){Gn(e,e.return,m)}}var xa=!1,uo=!1,Jf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,jo=null;function A2(e,s){if(e=e.containerInfo,bh=Lu,e=Tn(e),Vn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,T=-1,Y=-1,me=0,je=0,Le=e,ge=null;t:for(;;){for(var ve;Le!==o||f!==0&&Le.nodeType!==3||(T=v+f),Le!==m||r!==0&&Le.nodeType!==3||(Y=v+r),Le.nodeType===3&&(v+=Le.nodeValue.length),(ve=Le.firstChild)!==null;)ge=Le,Le=ve;for(;;){if(Le===e)break t;if(ge===o&&++me===f&&(T=v),ge===m&&++je===r&&(Y=v),(ve=Le.nextSibling)!==null)break;Le=ge,ge=Le.parentNode}Le=ve}o=T===-1||Y===-1?null:{start:T,end:Y}}else o=null}o=o||{start:0,end:0}}else o=null;for(vh={focusedElem:e,selectionRange:o},Lu=!1,jo=s;jo!==null;)if(s=jo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,jo=e;else for(;jo!==null;){switch(s=jo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Et=mr(o.type,f);e=r.getSnapshotBeforeUpdate(Et,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Ft){Gn(o,o.return,Ft)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Ch(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,jo=e;break}jo=s.return}}function Rg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:va(e,o),r&4&&Pl(5,o);break;case 1:if(va(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Gn(o,o.return,v)}else{var f=mr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Gn(o,o.return,v)}}r&64&&Mg(o),r&512&&Hl(o,o.return);break;case 3:if(va(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{g_(e,s)}catch(v){Gn(o,o.return,v)}}break;case 27:s===null&&r&4&&Dg(o);case 26:case 5:va(e,o),s===null&&r&4&&Eg(o),r&512&&Hl(o,o.return);break;case 12:va(e,o);break;case 31:va(e,o),r&4&&Og(e,o);break;case 13:va(e,o),r&4&&zg(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=I2.bind(null,o),iv(e,o))));break;case 22:if(r=o.memoizedState!==null||xa,!r){s=s!==null&&s.memoizedState!==null||uo,f=xa;var m=uo;xa=r,(uo=s)&&!m?wa(e,o,(o.subtreeFlags&8772)!==0):va(e,o),xa=f,uo=m}break;case 30:break;default:va(e,o)}}function Bg(e){var s=e.alternate;s!==null&&(e.alternate=null,Bg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&pi(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Rs=null,ri=!1;function ba(e,s,o){for(o=o.child;o!==null;)Lg(e,s,o),o=o.sibling}function Lg(e,s,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(ye,o)}catch{}switch(o.tag){case 26:uo||sa(o,s),ba(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:uo||sa(o,s);var r=Rs,f=ri;Ya(o.type)&&(Rs=o.stateNode,ri=!1),ba(e,s,o),Kl(o.stateNode),Rs=r,ri=f;break;case 5:uo||sa(o,s);case 6:if(r=Rs,f=ri,Rs=null,ba(e,s,o),Rs=r,ri=f,Rs!==null)if(ri)try{(Rs.nodeType===9?Rs.body:Rs.nodeName==="HTML"?Rs.ownerDocument.body:Rs).removeChild(o.stateNode)}catch(m){Gn(o,s,m)}else try{Rs.removeChild(o.stateNode)}catch(m){Gn(o,s,m)}break;case 18:Rs!==null&&(ri?(e=Rs,M0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),sl(e)):M0(Rs,o.stateNode));break;case 4:r=Rs,f=ri,Rs=o.stateNode.containerInfo,ri=!0,ba(e,s,o),Rs=r,ri=f;break;case 0:case 11:case 14:case 15:za(2,o,s),uo||za(4,o,s),ba(e,s,o);break;case 1:uo||(sa(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Tg(o,s,r)),ba(e,s,o);break;case 21:ba(e,s,o);break;case 22:uo=(r=uo)||o.memoizedState!==null,ba(e,s,o),uo=r;break;default:ba(e,s,o)}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sl(e)}catch(o){Gn(s,s.return,o)}}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sl(e)}catch(o){Gn(s,s.return,o)}}function D2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Ng),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Ng),s;default:throw Error(a(435,e.tag))}}function pu(e,s){var o=D2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=P2.bind(null,e,r);r.then(f,f)}})}function li(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ya(T.type)){Rs=T.stateNode,ri=!1;break e}break;case 5:Rs=T.stateNode,ri=!1;break e;case 3:case 4:Rs=T.stateNode.containerInfo,ri=!0;break e}T=T.return}if(Rs===null)throw Error(a(160));Lg(m,v,f),Rs=null,ri=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)$g(s,e),s=s.sibling}var Fi=null;function $g(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:li(s,e),ci(e),r&4&&(za(3,e,e.return),Pl(3,e),za(5,e,e.return));break;case 1:li(s,e),ci(e),r&512&&(uo||o===null||sa(o,o.return)),r&64&&xa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Fi;if(li(s,e),ci(e),r&512&&(uo||o===null||sa(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[qs]||m[sn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),zo(m,r,o),m[sn]=e,Zn(m),r=m;break e;case"link":var v=$0("link","href",f).get(r+(o.href||""));if(v){for(var T=0;T<v.length;T++)if(m=v[T],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(T,1);break t}}m=f.createElement(r),zo(m,r,o),f.head.appendChild(m);break;case"meta":if(v=$0("meta","content",f).get(r+(o.content||""))){for(T=0;T<v.length;T++)if(m=v[T],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(T,1);break t}}m=f.createElement(r),zo(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[sn]=e,Zn(m),r=m}e.stateNode=r}else I0(f,e.type,e.stateNode);else e.stateNode=z0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?I0(f,e.type,e.stateNode):z0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Kf(e,e.memoizedProps,o.memoizedProps)}break;case 27:li(s,e),ci(e),r&512&&(uo||o===null||sa(o,o.return)),o!==null&&r&4&&Kf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(li(s,e),ci(e),r&512&&(uo||o===null||sa(o,o.return)),e.flags&32){f=e.stateNode;try{Ao(f,"")}catch(Et){Gn(e,e.return,Et)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,Kf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Jf=!0);break;case 6:if(li(s,e),ci(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Et){Gn(e,e.return,Et)}}break;case 3:if(Du=null,f=Fi,Fi=Eu(s.containerInfo),li(s,e),Fi=f,ci(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{sl(s.containerInfo)}catch(Et){Gn(e,e.return,Et)}Jf&&(Jf=!1,Ig(e));break;case 4:r=Fi,Fi=Eu(e.stateNode.containerInfo),li(s,e),ci(e),Fi=r;break;case 12:li(s,e),ci(e);break;case 31:li(s,e),ci(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pu(e,r)));break;case 13:li(s,e),ci(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(gu=bt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pu(e,r)));break;case 22:f=e.memoizedState!==null;var Y=o!==null&&o.memoizedState!==null,me=xa,je=uo;if(xa=me||f,uo=je||Y,li(s,e),uo=je,xa=me,ci(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Y||xa||uo||pr(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Y=o=s;try{if(m=Y.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=Y.stateNode;var Le=Y.memoizedProps.style,ge=Le!=null&&Le.hasOwnProperty("display")?Le.display:null;T.style.display=ge==null||typeof ge=="boolean"?"":(""+ge).trim()}}catch(Et){Gn(Y,Y.return,Et)}}}else if(s.tag===6){if(o===null){Y=s;try{Y.stateNode.nodeValue=f?"":Y.memoizedProps}catch(Et){Gn(Y,Y.return,Et)}}}else if(s.tag===18){if(o===null){Y=s;try{var ve=Y.stateNode;f?T0(ve,!0):T0(Y.stateNode,!1)}catch(Et){Gn(Y,Y.return,Et)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,pu(e,o))));break;case 19:li(s,e),ci(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pu(e,r)));break;case 30:break;case 21:break;default:li(s,e),ci(e)}}function ci(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ag(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Qf(e);mu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Ao(v,""),o.flags&=-33);var T=Qf(e);mu(e,T,v);break;case 3:case 4:var Y=o.stateNode.containerInfo,me=Qf(e);Zf(e,me,Y);break;default:throw Error(a(161))}}catch(je){Gn(e,e.return,je)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Ig(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function va(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Rg(e,s.alternate,s),s=s.sibling}function pr(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:za(4,s,s.return),pr(s);break;case 1:sa(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Tg(s,s.return,o),pr(s);break;case 27:Kl(s.stateNode);case 26:case 5:sa(s,s.return),pr(s);break;case 22:s.memoizedState===null&&pr(s);break;case 30:pr(s);break;default:pr(s)}e=e.sibling}}function wa(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:wa(f,m,o),Pl(4,m);break;case 1:if(wa(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(me){Gn(r,r.return,me)}if(r=m,f=r.updateQueue,f!==null){var T=r.stateNode;try{var Y=f.shared.hiddenCallbacks;if(Y!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Y.length;f++)__(Y[f],T)}catch(me){Gn(r,r.return,me)}}o&&v&64&&Mg(m),Hl(m,m.return);break;case 27:Dg(m);case 26:case 5:wa(f,m,o),o&&r===null&&v&4&&Eg(m),Hl(m,m.return);break;case 12:wa(f,m,o);break;case 31:wa(f,m,o),o&&v&4&&Og(f,m);break;case 13:wa(f,m,o),o&&v&4&&zg(f,m);break;case 22:m.memoizedState===null&&wa(f,m,o),Hl(m,m.return);break;case 30:break;default:wa(f,m,o)}s=s.sibling}}function eh(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Ml(o))}function th(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Ml(e))}function Xi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Pg(e,s,o,r),s=s.sibling}function Pg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Xi(e,s,o,r),f&2048&&Pl(9,s);break;case 1:Xi(e,s,o,r);break;case 3:Xi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Ml(e)));break;case 12:if(f&2048){Xi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,T=m.onPostCommit;typeof T=="function"&&T(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Y){Gn(s,s.return,Y)}}else Xi(e,s,o,r);break;case 31:Xi(e,s,o,r);break;case 13:Xi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Xi(e,s,o,r):Ul(e,s):m._visibility&2?Xi(e,s,o,r):(m._visibility|=2,Fr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&eh(v,s);break;case 24:Xi(e,s,o,r),f&2048&&th(s.alternate,s);break;default:Xi(e,s,o,r)}}function Fr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,T=o,Y=r,me=v.flags;switch(v.tag){case 0:case 11:case 15:Fr(m,v,T,Y,f),Pl(8,v);break;case 23:break;case 22:var je=v.stateNode;v.memoizedState!==null?je._visibility&2?Fr(m,v,T,Y,f):Ul(m,v):(je._visibility|=2,Fr(m,v,T,Y,f)),f&&me&2048&&eh(v.alternate,v);break;case 24:Fr(m,v,T,Y,f),f&&me&2048&&th(v.alternate,v);break;default:Fr(m,v,T,Y,f)}s=s.sibling}}function Ul(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Ul(o,r),f&2048&&eh(r.alternate,r);break;case 24:Ul(o,r),f&2048&&th(r.alternate,r);break;default:Ul(o,r)}s=s.sibling}}var Vl=8192;function Xr(e,s,o){if(e.subtreeFlags&Vl)for(e=e.child;e!==null;)Hg(e,s,o),e=e.sibling}function Hg(e,s,o){switch(e.tag){case 26:Xr(e,s,o),e.flags&Vl&&e.memoizedState!==null&&gv(o,Fi,e.memoizedState,e.memoizedProps);break;case 5:Xr(e,s,o);break;case 3:case 4:var r=Fi;Fi=Eu(e.stateNode.containerInfo),Xr(e,s,o),Fi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Vl,Vl=16777216,Xr(e,s,o),Vl=r):Xr(e,s,o));break;default:Xr(e,s,o)}}function Ug(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Yl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];jo=r,Yg(r,e)}Ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:Yl(e),e.flags&2048&&za(9,e,e.return);break;case 3:Yl(e);break;case 12:Yl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,_u(e)):Yl(e);break;default:Yl(e)}}function _u(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];jo=r,Yg(r,e)}Ug(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:za(8,s,s.return),_u(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,_u(s));break;default:_u(s)}e=e.sibling}}function Yg(e,s){for(;jo!==null;){var o=jo;switch(o.tag){case 0:case 11:case 15:za(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ml(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,jo=r;else e:for(o=e;jo!==null;){r=jo;var f=r.sibling,m=r.return;if(Bg(r),r===o){jo=null;break e}if(f!==null){f.return=m,jo=f;break e}jo=m}}}var N2={getCacheForType:function(e){var s=Lo(ro),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Lo(ro).controller.signal}},R2=typeof WeakMap=="function"?WeakMap:Map,$n=0,ls=null,vn=null,Sn=0,qn=0,bi=null,$a=!1,qr=!1,nh=!1,Sa=0,Vs=0,Ia=0,_r=0,sh=0,vi=0,Gr=0,Wl=null,ui=null,oh=!1,gu=0,Wg=0,yu=1/0,xu=null,Pa=null,bo=0,Ha=null,Kr=null,Ca=0,ih=0,ah=null,Fg=null,Fl=0,rh=null;function wi(){return($n&2)!==0&&Sn!==0?Sn&-Sn:z.T!==null?hh():us()}function Xg(){if(vi===0)if((Sn&536870912)===0||jn){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),vi=e}else vi=536870912;return e=yi.current,e!==null&&(e.flags|=32),vi}function di(e,s,o){(e===ls&&(qn===2||qn===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Ua(e,Sn,vi,!1)),mt(e,o),(($n&2)===0||e!==ls)&&(e===ls&&(($n&2)===0&&(_r|=o),Vs===4&&Ua(e,Sn,vi,!1)),oa(e))}function qg(e,s,o){if(($n&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||$t(e,s),f=r?O2(e,s):ch(e,s,!0),m=r;do{if(f===0){qr&&!r&&Ua(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!B2(o)){f=ch(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var T=e;f=Wl;var Y=T.current.memoizedState.isDehydrated;if(Y&&(Qr(T,v).flags|=256),v=ch(T,v,!1),v!==2){if(nh&&!Y){T.errorRecoveryDisabledLanes|=m,_r|=m,f=4;break e}m=ui,ui=f,m!==null&&(ui===null?ui=m:ui.push.apply(ui,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Qr(e,0),Ua(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ua(r,s,vi,!$a);break e;case 2:ui=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=gu+300-bt(),10<f)){if(Ua(r,s,vi,!$a),Pe(r,0,!0)!==0)break e;Ca=s,r.timeoutHandle=k0(Gg.bind(null,r,o,ui,xu,oh,s,vi,_r,Gr,$a,m,"Throttled",-0,0),f);break e}Gg(r,o,ui,xu,oh,s,vi,_r,Gr,$a,m,null,-0,0)}}break}while(!0);oa(e)}function Gg(e,s,o,r,f,m,v,T,Y,me,je,Le,ge,ve){if(e.timeoutHandle=-1,Le=s.subtreeFlags,Le&8192||(Le&16785408)===16785408){Le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:As},Hg(s,m,Le);var Et=(m&62914560)===m?gu-bt():(m&4194048)===m?Wg-bt():0;if(Et=yv(Le,Et),Et!==null){Ca=m,e.cancelPendingCommit=Et(s0.bind(null,e,s,m,o,r,f,v,T,Y,je,Le,null,ge,ve)),Ua(e,m,v,!me);return}}s0(e,s,m,o,r,f,v,T,Y)}function B2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!kt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ua(e,s,o,r){s&=~sh,s&=~_r,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-Xe(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&On(e,o,s)}function bu(){return($n&6)===0?(Xl(0),!1):!0}function lh(){if(vn!==null){if(qn===0)var e=vn.return;else e=vn,ha=rr=null,Cf(e),Hr=null,El=0,e=vn;for(;e!==null;)jg(e.alternate,e),e=e.return;vn=null}}function Qr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,ev(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Ca=0,lh(),ls=e,vn=o=da(e.current,null),Sn=s,qn=0,bi=null,$a=!1,qr=$t(e,s),nh=!1,Gr=vi=sh=_r=Ia=Vs=0,ui=Wl=null,oh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-Xe(r),m=1<<f;s|=e[f],r&=~m}return Sa=s,Hc(),o}function Kg(e,s){un=null,z.H=zl,s===Pr||s===Gc?(s=f_(),qn=3):s===ff?(s=f_(),qn=4):qn=s===Pf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,bi=s,vn===null&&(Vs=1,cu(e,Ei(s,e.current)))}function Qg(){var e=yi.current;return e===null?!0:(Sn&4194048)===Sn?Ri===null:(Sn&62914560)===Sn||(Sn&536870912)!==0?e===Ri:!1}function Zg(){var e=z.H;return z.H=zl,e===null?zl:e}function Jg(){var e=z.A;return z.A=N2,e}function vu(){Vs=4,$a||(Sn&4194048)!==Sn&&yi.current!==null||(qr=!0),(Ia&134217727)===0&&(_r&134217727)===0||ls===null||Ua(ls,Sn,vi,!1)}function ch(e,s,o){var r=$n;$n|=2;var f=Zg(),m=Jg();(ls!==e||Sn!==s)&&(xu=null,Qr(e,s)),s=!1;var v=Vs;e:do try{if(qn!==0&&vn!==null){var T=vn,Y=bi;switch(qn){case 8:lh(),v=6;break e;case 3:case 2:case 9:case 6:yi.current===null&&(s=!0);var me=qn;if(qn=0,bi=null,Zr(e,T,Y,me),o&&qr){v=0;break e}break;default:me=qn,qn=0,bi=null,Zr(e,T,Y,me)}}L2(),v=Vs;break}catch(je){Kg(e,je)}while(!0);return s&&e.shellSuspendCounter++,ha=rr=null,$n=r,z.H=f,z.A=m,vn===null&&(ls=null,Sn=0,Hc()),v}function L2(){for(;vn!==null;)e0(vn)}function O2(e,s){var o=$n;$n|=2;var r=Zg(),f=Jg();ls!==e||Sn!==s?(xu=null,yu=bt()+500,Qr(e,s)):qr=$t(e,s);e:do try{if(qn!==0&&vn!==null){s=vn;var m=bi;t:switch(qn){case 1:qn=0,bi=null,Zr(e,s,m,1);break;case 2:case 9:if(u_(m)){qn=0,bi=null,t0(s);break}s=function(){qn!==2&&qn!==9||ls!==e||(qn=7),oa(e)},m.then(s,s);break e;case 3:qn=7;break e;case 4:qn=5;break e;case 7:u_(m)?(qn=0,bi=null,t0(s)):(qn=0,bi=null,Zr(e,s,m,7));break;case 5:var v=null;switch(vn.tag){case 26:v=vn.memoizedState;case 5:case 27:var T=vn;if(v?P0(v):T.stateNode.complete){qn=0,bi=null;var Y=T.sibling;if(Y!==null)vn=Y;else{var me=T.return;me!==null?(vn=me,wu(me)):vn=null}break t}}qn=0,bi=null,Zr(e,s,m,5);break;case 6:qn=0,bi=null,Zr(e,s,m,6);break;case 8:lh(),Vs=6;break e;default:throw Error(a(462))}}z2();break}catch(je){Kg(e,je)}while(!0);return ha=rr=null,z.H=r,z.A=f,$n=o,vn!==null?0:(ls=null,Sn=0,Hc(),Vs)}function z2(){for(;vn!==null&&!lt();)e0(vn)}function e0(e){var s=Cg(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,s===null?wu(e):vn=s}function t0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=yg(o,s,s.pendingProps,s.type,void 0,Sn);break;case 11:s=yg(o,s,s.pendingProps,s.type.render,s.ref,Sn);break;case 5:Cf(s);default:jg(o,s),s=vn=Jp(s,Sa),s=Cg(o,s,Sa)}e.memoizedProps=e.pendingProps,s===null?wu(e):vn=s}function Zr(e,s,o,r){ha=rr=null,Cf(s),Hr=null,El=0;var f=s.return;try{if(k2(e,f,s,o,Sn)){Vs=1,cu(e,Ei(o,e.current)),vn=null;return}}catch(m){if(f!==null)throw vn=f,m;Vs=1,cu(e,Ei(o,e.current)),vn=null;return}s.flags&32768?(jn||r===1?e=!0:qr||(Sn&536870912)!==0?e=!1:($a=e=!0,(r===2||r===9||r===3||r===6)&&(r=yi.current,r!==null&&r.tag===13&&(r.flags|=16384))),n0(s,e)):wu(s)}function wu(e){var s=e;do{if((s.flags&32768)!==0){n0(s,$a);return}e=s.return;var o=T2(s.alternate,s,Sa);if(o!==null){vn=o;return}if(s=s.sibling,s!==null){vn=s;return}vn=s=e}while(s!==null);Vs===0&&(Vs=5)}function n0(e,s){do{var o=E2(e.alternate,e);if(o!==null){o.flags&=32767,vn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){vn=e;return}vn=e=o}while(e!==null);Vs=6,vn=null}function s0(e,s,o,r,f,m,v,T,Y){e.cancelPendingCommit=null;do Su();while(bo!==0);if(($n&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=Kd,Ut(e,o,m,v,T,Y),e===ls&&(vn=ls=null,Sn=0),Kr=s,Ha=e,Ca=o,ih=m,ah=f,Fg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,H2(ot,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,f=te.p,te.p=2,v=$n,$n|=4;try{A2(e,s,o)}finally{$n=v,te.p=f,z.T=r}}bo=1,o0(),i0(),a0()}}function o0(){if(bo===1){bo=0;var e=Ha,s=Kr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var r=te.p;te.p=2;var f=$n;$n|=4;try{$g(s,e);var m=vh,v=Tn(e.containerInfo),T=m.focusedElem,Y=m.selectionRange;if(v!==T&&T&&T.ownerDocument&&ws(T.ownerDocument.documentElement,T)){if(Y!==null&&Vn(T)){var me=Y.start,je=Y.end;if(je===void 0&&(je=me),"selectionStart"in T)T.selectionStart=me,T.selectionEnd=Math.min(je,T.value.length);else{var Le=T.ownerDocument||document,ge=Le&&Le.defaultView||window;if(ge.getSelection){var ve=ge.getSelection(),Et=T.textContent.length,Ft=Math.min(Y.start,Et),ss=Y.end===void 0?Ft:Math.min(Y.end,Et);!ve.extend&&Ft>ss&&(v=ss,ss=Ft,Ft=v);var le=vs(T,Ft),ee=vs(T,ss);if(le&&ee&&(ve.rangeCount!==1||ve.anchorNode!==le.node||ve.anchorOffset!==le.offset||ve.focusNode!==ee.node||ve.focusOffset!==ee.offset)){var he=Le.createRange();he.setStart(le.node,le.offset),ve.removeAllRanges(),Ft>ss?(ve.addRange(he),ve.extend(ee.node,ee.offset)):(he.setEnd(ee.node,ee.offset),ve.addRange(he))}}}}for(Le=[],ve=T;ve=ve.parentNode;)ve.nodeType===1&&Le.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Le.length;T++){var De=Le[T];De.element.scrollLeft=De.left,De.element.scrollTop=De.top}}Lu=!!bh,vh=bh=null}finally{$n=f,te.p=r,z.T=o}}e.current=s,bo=2}}function i0(){if(bo===2){bo=0;var e=Ha,s=Kr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var r=te.p;te.p=2;var f=$n;$n|=4;try{Rg(e,s.alternate,s)}finally{$n=f,te.p=r,z.T=o}}bo=3}}function a0(){if(bo===4||bo===3){bo=0,st();var e=Ha,s=Kr,o=Ca,r=Fg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?bo=5:(bo=0,Kr=Ha=null,r0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Pa=null),Fs(o),s=s.stateNode,He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(ye,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=z.T,f=te.p,te.p=2,z.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var T=r[v];m(T.value,{componentStack:T.stack})}}finally{z.T=s,te.p=f}}(Ca&3)!==0&&Su(),oa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===rh?Fl++:(Fl=0,rh=e):Fl=0,Xl(0)}}function r0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Ml(s)))}function Su(){return o0(),i0(),a0(),l0()}function l0(){if(bo!==5)return!1;var e=Ha,s=ih;ih=0;var o=Fs(Ca),r=z.T,f=te.p;try{te.p=32>o?32:o,z.T=null,o=ah,ah=null;var m=Ha,v=Ca;if(bo=0,Kr=Ha=null,Ca=0,($n&6)!==0)throw Error(a(331));var T=$n;if($n|=4,Vg(m.current),Pg(m,m.current,v,o),$n=T,Xl(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(ye,m)}catch{}return!0}finally{te.p=f,z.T=r,r0(e,s)}}function c0(e,s,o){s=Ei(o,s),s=If(e.stateNode,s,2),e=Ba(e,s,2),e!==null&&(mt(e,2),oa(e))}function Gn(e,s,o){if(e.tag===3)c0(e,e,o);else for(;s!==null;){if(s.tag===3){c0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pa===null||!Pa.has(r))){e=Ei(o,e),o=ug(2),r=Ba(s,o,2),r!==null&&(dg(o,r,s,e),mt(r,2),oa(r));break}}s=s.return}}function uh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new R2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(nh=!0,f.add(o),e=$2.bind(null,e,s,o),s.then(e,e))}function $2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,ls===e&&(Sn&o)===o&&(Vs===4||Vs===3&&(Sn&62914560)===Sn&&300>bt()-gu?($n&2)===0&&Qr(e,0):sh|=o,Gr===Sn&&(Gr=0)),oa(e)}function u0(e,s){s===0&&(s=ht()),e=or(e,s),e!==null&&(mt(e,s),oa(e))}function I2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),u0(e,o)}function P2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),u0(e,o)}function H2(e,s){return Fe(e,s)}var Cu=null,Jr=null,dh=!1,ku=!1,fh=!1,Va=0;function oa(e){e!==Jr&&e.next===null&&(Jr===null?Cu=Jr=e:Jr=Jr.next=e),ku=!0,dh||(dh=!0,V2())}function Xl(e,s){if(!fh&&ku){fh=!0;do for(var o=!1,r=Cu;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,T=r.pingedLanes;m=(1<<31-Xe(42|e)+1)-1,m&=f&~(v&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,m0(r,m))}else m=Sn,m=Pe(r,r===ls?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||$t(r,m)||(o=!0,m0(r,m));r=r.next}while(o);fh=!1}}function U2(){d0()}function d0(){ku=dh=!1;var e=0;Va!==0&&J2()&&(e=Va);for(var s=bt(),o=null,r=Cu;r!==null;){var f=r.next,m=f0(r,s);m===0?(r.next=null,o===null?Cu=f:o.next=f,f===null&&(Jr=o)):(o=r,(e!==0||(m&3)!==0)&&(ku=!0)),r=f}bo!==0&&bo!==5||Xl(e),Va!==0&&(Va=0)}function f0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-Xe(m),T=1<<v,Y=f[v];Y===-1?((T&o)===0||(T&r)!==0)&&(f[v]=gt(T,s)):Y<=s&&(e.expiredLanes|=T),m&=~T}if(s=ls,o=Sn,o=Pe(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(qn===2||qn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Je(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||$t(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Je(r),Fs(o)){case 2:case 8:o=It;break;case 32:o=ot;break;case 268435456:o=ne;break;default:o=ot}return r=h0.bind(null,e),o=Fe(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Je(r),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,s){if(bo!==0&&bo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Su()&&e.callbackNode!==o)return null;var r=Sn;return r=Pe(e,e===ls?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qg(e,r,s),f0(e,bt()),e.callbackNode!=null&&e.callbackNode===o?h0.bind(null,e):null)}function m0(e,s){if(Su())return null;qg(e,s,!0)}function V2(){tv(function(){($n&6)!==0?Fe(rt,U2):d0()})}function hh(){if(Va===0){var e=$r;e===0&&(e=Ge,Ge<<=1,(Ge&261888)===0&&(Ge=256)),Va=e}return Va}function p0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Uo(""+e)}function _0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function Y2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=p0((f[An]||null).action),v=r.submitter;v&&(s=(s=v[An]||null)?p0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var T=new Co("action","action",null,r,f);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var Y=v?_0(f,v):new FormData(f);Rf(o,{pending:!0,data:Y,method:f.method,action:m},null,Y)}}else typeof m=="function"&&(T.preventDefault(),Y=v?_0(f,v):new FormData(f),Rf(o,{pending:!0,data:Y,method:f.method,action:m},m,Y))},currentTarget:f}]})}}for(var mh=0;mh<Gd.length;mh++){var ph=Gd[mh],W2=ph.toLowerCase(),F2=ph[0].toUpperCase()+ph.slice(1);Wi(W2,"on"+F2)}Wi(Yi,"onAnimationEnd"),Wi(ea,"onAnimationIteration"),Wi(Ic,"onAnimationStart"),Wi("dblclick","onDoubleClick"),Wi("focusin","onFocus"),Wi("focusout","onBlur"),Wi(Fd,"onTransitionRun"),Wi(Xd,"onTransitionStart"),Wi(qd,"onTransitionCancel"),Wi(Kp,"onTransitionEnd"),gn("onMouseEnter",["mouseout","mouseover"]),gn("onMouseLeave",["mouseout","mouseover"]),gn("onPointerEnter",["pointerout","pointerover"]),gn("onPointerLeave",["pointerout","pointerover"]),Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function g0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var T=r[v],Y=T.instance,me=T.currentTarget;if(T=T.listener,Y!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=me;try{m(f)}catch(je){Pc(je)}f.currentTarget=null,m=Y}else for(v=0;v<r.length;v++){if(T=r[v],Y=T.instance,me=T.currentTarget,T=T.listener,Y!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=me;try{m(f)}catch(je){Pc(je)}f.currentTarget=null,m=Y}}}}function wn(e,s){var o=s[pn];o===void 0&&(o=s[pn]=new Set);var r=e+"__bubble";o.has(r)||(y0(s,e,2,!1),o.add(r))}function _h(e,s,o){var r=0;s&&(r|=4),y0(o,e,r,s)}var ju="_reactListening"+Math.random().toString(36).slice(2);function gh(e){if(!e[ju]){e[ju]=!0,Mo.forEach(function(o){o!=="selectionchange"&&(X2.has(o)||_h(o,!1,e),_h(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[ju]||(s[ju]=!0,_h("selectionchange",!1,s))}}function y0(e,s,o,r){switch(X0(s)){case 2:var f=vv;break;case 8:f=wv;break;default:f=Nh}o=f.bind(null,s,o,e),f=void 0,!So||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function yh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=r.return;v!==null;){var Y=v.tag;if((Y===3||Y===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=gs(T),v===null)return;if(Y=v.tag,Y===5||Y===6||Y===26||Y===27){r=m=v;continue e}T=T.parentNode}}r=r.return}Qs(function(){var me=m,je=_o(o),Le=[];e:{var ge=Qp.get(e);if(ge!==void 0){var ve=Co,Et=e;switch(e){case"keypress":if(No(o)===0)break e;case"keydown":case"keyup":ve=Ze;break;case"focusin":Et="focus",ve=Se;break;case"focusout":Et="blur",ve=Se;break;case"beforeblur":case"afterblur":ve=Se;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=X;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=xs;break;case Yi:case ea:case Ic:ve=et;break;case Kp:ve=hs;break;case"scroll":case"scrollend":ve=$s;break;case"wheel":ve=Jt;break;case"copy":case"cut":case"paste":ve=Wt;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=dt;break;case"toggle":case"beforetoggle":ve=kn}var Ft=(s&4)!==0,ss=!Ft&&(e==="scroll"||e==="scrollend"),le=Ft?ge!==null?ge+"Capture":null:ge;Ft=[];for(var ee=me,he;ee!==null;){var De=ee;if(he=De.stateNode,De=De.tag,De!==5&&De!==26&&De!==27||he===null||le===null||(De=on(ee,le),De!=null&&Ft.push(Gl(ee,De,he))),ss)break;ee=ee.return}0<Ft.length&&(ge=new ve(ge,Et,null,o,je),Le.push({event:ge,listeners:Ft}))}}if((s&7)===0){e:{if(ge=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",ge&&o!==_i&&(Et=o.relatedTarget||o.fromElement)&&(gs(Et)||Et[nt]))break e;if((ve||ge)&&(ge=je.window===je?je:(ge=je.ownerDocument)?ge.defaultView||ge.parentWindow:window,ve?(Et=o.relatedTarget||o.toElement,ve=me,Et=Et?gs(Et):null,Et!==null&&(ss=u(Et),Ft=Et.tag,Et!==ss||Ft!==5&&Ft!==27&&Ft!==6)&&(Et=null)):(ve=null,Et=me),ve!==Et)){if(Ft=Ro,De="onMouseLeave",le="onMouseEnter",ee="mouse",(e==="pointerout"||e==="pointerover")&&(Ft=dt,De="onPointerLeave",le="onPointerEnter",ee="pointer"),ss=ve==null?ge:so(ve),he=Et==null?ge:so(Et),ge=new Ft(De,ee+"leave",ve,o,je),ge.target=ss,ge.relatedTarget=he,De=null,gs(je)===me&&(Ft=new Ft(le,ee+"enter",Et,o,je),Ft.target=he,Ft.relatedTarget=ss,De=Ft),ss=De,ve&&Et)t:{for(Ft=q2,le=ve,ee=Et,he=0,De=le;De;De=Ft(De))he++;De=0;for(var Pt=ee;Pt;Pt=Ft(Pt))De++;for(;0<he-De;)le=Ft(le),he--;for(;0<De-he;)ee=Ft(ee),De--;for(;he--;){if(le===ee||ee!==null&&le===ee.alternate){Ft=le;break t}le=Ft(le),ee=Ft(ee)}Ft=null}else Ft=null;ve!==null&&x0(Le,ge,ve,Ft,!1),Et!==null&&ss!==null&&x0(Le,ss,Et,Ft,!0)}}e:{if(ge=me?so(me):window,ve=ge.nodeName&&ge.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ge.type==="file")var Bn=O;else if(mn(ge))if(G)Bn=tn;else{Bn=Ct;var Bt=it}else ve=ge.nodeName,!ve||ve.toLowerCase()!=="input"||ge.type!=="checkbox"&&ge.type!=="radio"?me&&Gs(me.elementType)&&(Bn=O):Bn=zt;if(Bn&&(Bn=Bn(e,me))){ms(Le,Bn,o,je);break e}Bt&&Bt(e,ge,me),e==="focusout"&&me&&ge.type==="number"&&me.memoizedProps.value!=null&&Eo(ge,"number",ge.value)}switch(Bt=me?so(me):window,e){case"focusin":(mn(Bt)||Bt.contentEditable==="true")&&(Qt=Bt,Ss=me,Rn=null);break;case"focusout":Rn=Ss=Qt=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,Xo(Le,o,je);break;case"selectionchange":if(qt)break;case"keydown":case"keyup":Xo(Le,o,je)}var dn;if(ko)e:{switch(e){case"compositionstart":var Cn="onCompositionStart";break e;case"compositionend":Cn="onCompositionEnd";break e;case"compositionupdate":Cn="onCompositionUpdate";break e}Cn=void 0}else xt?ut(e,o)&&(Cn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Cn="onCompositionStart");Cn&&(Js&&o.locale!=="ko"&&(xt||Cn!=="onCompositionStart"?Cn==="onCompositionEnd"&&xt&&(dn=Yo()):(xn=je,Qo="value"in xn?xn.value:xn.textContent,xt=!0)),Bt=Mu(me,Cn),0<Bt.length&&(Cn=new Ye(Cn,e,null,o,je),Le.push({event:Cn,listeners:Bt}),dn?Cn.data=dn:(dn=Ve(o),dn!==null&&(Cn.data=dn)))),(dn=Hs?Tt(e,o):jt(e,o))&&(Cn=Mu(me,"onBeforeInput"),0<Cn.length&&(Bt=new Ye("onBeforeInput","beforeinput",null,o,je),Le.push({event:Bt,listeners:Cn}),Bt.data=dn)),Y2(Le,e,me,o,je)}g0(Le,s)})}function Gl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Mu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=on(e,o),f!=null&&r.unshift(Gl(e,f,m)),f=on(e,s),f!=null&&r.push(Gl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function q2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var T=o,Y=T.alternate,me=T.stateNode;if(T=T.tag,Y!==null&&Y===r)break;T!==5&&T!==26&&T!==27||me===null||(Y=me,f?(me=on(o,m),me!=null&&v.unshift(Gl(o,me,Y))):f||(me=on(o,m),me!=null&&v.push(Gl(o,me,Y)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var G2=/\r\n?/g,K2=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(G2,`
`).replace(K2,"")}function v0(e,s){return s=b0(s),b0(e)===s}function ns(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Ao(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Ao(e,""+r);break;case"className":Ms(e,"class",r);break;case"tabIndex":Ms(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ms(e,o,r);break;case"style":ki(e,r,m);break;case"data":if(s!=="object"){Ms(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Uo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ns(e,s,"name",f.name,f,null),ns(e,s,"formEncType",f.formEncType,f,null),ns(e,s,"formMethod",f.formMethod,f,null),ns(e,s,"formTarget",f.formTarget,f,null)):(ns(e,s,"encType",f.encType,f,null),ns(e,s,"method",f.method,f,null),ns(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Uo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=As);break;case"onScroll":r!=null&&wn("scroll",e);break;case"onScrollEnd":r!=null&&wn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Uo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":wn("beforetoggle",e),wn("toggle",e),po(e,"popover",r);break;case"xlinkActuate":Ts(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ts(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ts(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ts(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ts(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ts(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ts(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ts(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ts(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":po(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ji.get(o)||o,po(e,o,r))}}function xh(e,s,o,r,f,m){switch(o){case"style":ki(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Ao(e,r):(typeof r=="number"||typeof r=="bigint")&&Ao(e,""+r);break;case"onScroll":r!=null&&wn("scroll",e);break;case"onScrollEnd":r!=null&&wn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=As);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!js.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[An]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):po(e,o,r)}}}function zo(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wn("error",e),wn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ns(e,s,m,v,o,null)}}f&&ns(e,s,"srcSet",o.srcSet,o,null),r&&ns(e,s,"src",o.src,o,null);return;case"input":wn("invalid",e);var T=m=v=f=null,Y=null,me=null;for(r in o)if(o.hasOwnProperty(r)){var je=o[r];if(je!=null)switch(r){case"name":f=je;break;case"type":v=je;break;case"checked":Y=je;break;case"defaultChecked":me=je;break;case"value":m=je;break;case"defaultValue":T=je;break;case"children":case"dangerouslySetInnerHTML":if(je!=null)throw Error(a(137,s));break;default:ns(e,s,r,je,o,null)}}Hn(e,m,T,Y,me,v,f,!1);return;case"select":wn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:ns(e,s,f,T,o,null)}s=m,o=v,e.multiple=!!r,s!=null?Dn(e,!!r,s,!1):o!=null&&Dn(e,!!r,o,!0);return;case"textarea":wn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(T=o[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:ns(e,s,v,T,o,null)}Ho(e,r,f,m);return;case"option":for(Y in o)if(o.hasOwnProperty(Y)&&(r=o[Y],r!=null))switch(Y){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ns(e,s,Y,r,o,null)}return;case"dialog":wn("beforetoggle",e),wn("toggle",e),wn("cancel",e),wn("close",e);break;case"iframe":case"object":wn("load",e);break;case"video":case"audio":for(r=0;r<ql.length;r++)wn(ql[r],e);break;case"image":wn("error",e),wn("load",e);break;case"details":wn("toggle",e);break;case"embed":case"source":case"link":wn("error",e),wn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(me in o)if(o.hasOwnProperty(me)&&(r=o[me],r!=null))switch(me){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ns(e,s,me,r,o,null)}return;default:if(Gs(s)){for(je in o)o.hasOwnProperty(je)&&(r=o[je],r!==void 0&&xh(e,s,je,r,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(r=o[T],r!=null&&ns(e,s,T,r,o,null))}function Q2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,T=null,Y=null,me=null,je=null;for(ve in o){var Le=o[ve];if(o.hasOwnProperty(ve)&&Le!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":Y=Le;default:r.hasOwnProperty(ve)||ns(e,s,ve,null,r,Le)}}for(var ge in r){var ve=r[ge];if(Le=o[ge],r.hasOwnProperty(ge)&&(ve!=null||Le!=null))switch(ge){case"type":m=ve;break;case"name":f=ve;break;case"checked":me=ve;break;case"defaultChecked":je=ve;break;case"value":v=ve;break;case"defaultValue":T=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ve!==Le&&ns(e,s,ge,ve,r,Le)}}To(e,v,T,Y,me,je,m,f);return;case"select":ve=v=T=ge=null;for(m in o)if(Y=o[m],o.hasOwnProperty(m)&&Y!=null)switch(m){case"value":break;case"multiple":ve=Y;default:r.hasOwnProperty(m)||ns(e,s,m,null,r,Y)}for(f in r)if(m=r[f],Y=o[f],r.hasOwnProperty(f)&&(m!=null||Y!=null))switch(f){case"value":ge=m;break;case"defaultValue":T=m;break;case"multiple":v=m;default:m!==Y&&ns(e,s,f,m,r,Y)}s=T,o=v,r=ve,ge!=null?Dn(e,!!o,ge,!1):!!r!=!!o&&(s!=null?Dn(e,!!o,s,!0):Dn(e,!!o,o?[]:"",!1));return;case"textarea":ve=ge=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ns(e,s,T,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ge=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ns(e,s,v,f,r,m)}as(e,ge,ve);return;case"option":for(var Et in o)if(ge=o[Et],o.hasOwnProperty(Et)&&ge!=null&&!r.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:ns(e,s,Et,null,r,ge)}for(Y in r)if(ge=r[Y],ve=o[Y],r.hasOwnProperty(Y)&&ge!==ve&&(ge!=null||ve!=null))switch(Y){case"selected":e.selected=ge&&typeof ge!="function"&&typeof ge!="symbol";break;default:ns(e,s,Y,ge,r,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ft in o)ge=o[Ft],o.hasOwnProperty(Ft)&&ge!=null&&!r.hasOwnProperty(Ft)&&ns(e,s,Ft,null,r,ge);for(me in r)if(ge=r[me],ve=o[me],r.hasOwnProperty(me)&&ge!==ve&&(ge!=null||ve!=null))switch(me){case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,s));break;default:ns(e,s,me,ge,r,ve)}return;default:if(Gs(s)){for(var ss in o)ge=o[ss],o.hasOwnProperty(ss)&&ge!==void 0&&!r.hasOwnProperty(ss)&&xh(e,s,ss,void 0,r,ge);for(je in r)ge=r[je],ve=o[je],!r.hasOwnProperty(je)||ge===ve||ge===void 0&&ve===void 0||xh(e,s,je,ge,r,ve);return}}for(var le in o)ge=o[le],o.hasOwnProperty(le)&&ge!=null&&!r.hasOwnProperty(le)&&ns(e,s,le,null,r,ge);for(Le in r)ge=r[Le],ve=o[Le],!r.hasOwnProperty(Le)||ge===ve||ge==null&&ve==null||ns(e,s,Le,ge,r,ve)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,T=f.duration;if(m&&T&&w0(v)){for(v=0,T=f.responseEnd,r+=1;r<o.length;r++){var Y=o[r],me=Y.startTime;if(me>T)break;var je=Y.transferSize,Le=Y.initiatorType;je&&w0(Le)&&(Y=Y.responseEnd,v+=je*(Y<T?1:(T-me)/(Y-me)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bh=null,vh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function S0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function wh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Sh=null;function J2(){var e=window.event;return e&&e.type==="popstate"?e===Sh?!1:(Sh=e,!0):(Sh=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(nv)}:k0;function nv(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function M0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),sl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Kl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Kl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,T=m.nodeName;m[qs]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Kl(e.ownerDocument.body);o=f}while(o);sl(s)}function T0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Ch(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Ch(o),pi(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function sv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[qs])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function ov(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Bi(e.nextSibling),e===null))return null;return e}function E0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Bi(e.nextSibling),e===null))return null;return e}function kh(e){return e.data==="$?"||e.data==="$~"}function jh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Bi(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var Mh=null;function A0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Bi(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function N0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Kl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);pi(e)}var Li=new Map,R0=new Set;function Eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=te.d;te.d={f:av,r:rv,D:lv,C:cv,L:uv,m:dv,X:hv,S:fv,M:mv};function av(){var e=ka.f(),s=bu();return e||s}function rv(e){var s=wo(e);s!==null&&s.tag===5&&s.type==="form"?K_(s):ka.r(e)}var el=typeof document>"u"?null:document;function B0(e,s,o){var r=el;if(r&&typeof s=="string"&&s){var f=Es(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),R0.has(f)||(R0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),zo(s,"link",e),Zn(s),r.head.appendChild(s)))}}function lv(e){ka.D(e),B0("dns-prefetch",e,null)}function cv(e,s){ka.C(e,s),B0("preconnect",e,s)}function uv(e,s,o){ka.L(e,s,o);var r=el;if(r&&e&&s){var f='link[rel="preload"][as="'+Es(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Es(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Es(o.imageSizes)+'"]')):f+='[href="'+Es(e)+'"]';var m=f;switch(s){case"style":m=tl(e);break;case"script":m=nl(e)}Li.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Li.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Ql(m))||s==="script"&&r.querySelector(Zl(m))||(s=r.createElement("link"),zo(s,"link",e),Zn(s),r.head.appendChild(s)))}}function dv(e,s){ka.m(e,s);var o=el;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Es(r)+'"][href="'+Es(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=nl(e)}if(!Li.has(m)&&(e=x({rel:"modulepreload",href:e},s),Li.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zl(m)))return}r=o.createElement("link"),zo(r,"link",e),Zn(r),o.head.appendChild(r)}}}function fv(e,s,o){ka.S(e,s,o);var r=el;if(r&&e){var f=oo(r).hoistableStyles,m=tl(e);s=s||"default";var v=f.get(m);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(Ql(m)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Li.get(m))&&Th(e,o);var Y=v=r.createElement("link");Zn(Y),zo(Y,"link",e),Y._p=new Promise(function(me,je){Y.onload=me,Y.onerror=je}),Y.addEventListener("load",function(){T.loading|=1}),Y.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Au(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(m,v)}}}function hv(e,s){ka.X(e,s);var o=el;if(o&&e){var r=oo(o).hoistableScripts,f=nl(e),m=r.get(f);m||(m=o.querySelector(Zl(f)),m||(e=x({src:e,async:!0},s),(s=Li.get(f))&&Eh(e,s),m=o.createElement("script"),Zn(m),zo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function mv(e,s){ka.M(e,s);var o=el;if(o&&e){var r=oo(o).hoistableScripts,f=nl(e),m=r.get(f);m||(m=o.querySelector(Zl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Li.get(f))&&Eh(e,s),m=o.createElement("script"),Zn(m),zo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function L0(e,s,o,r){var f=(f=$e.current)?Eu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=tl(o.href),o=oo(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=tl(o.href);var m=oo(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Ql(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Li.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Li.set(e,o),m||pv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=nl(o),o=oo(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function tl(e){return'href="'+Es(e)+'"'}function Ql(e){return'link[rel="stylesheet"]['+e+"]"}function O0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function pv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),zo(s,"link",o),Zn(s),e.head.appendChild(s))}function nl(e){return'[src="'+Es(e)+'"]'}function Zl(e){return"script[async]"+e}function z0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+Es(o.href)+'"]');if(r)return s.instance=r,Zn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Zn(r),zo(r,"style",f),Au(r,o.precedence,e),s.instance=r;case"stylesheet":f=tl(o.href);var m=e.querySelector(Ql(f));if(m)return s.state.loading|=4,s.instance=m,Zn(m),m;r=O0(o),(f=Li.get(f))&&Th(r,f),m=(e.ownerDocument||e).createElement("link"),Zn(m);var v=m;return v._p=new Promise(function(T,Y){v.onload=T,v.onerror=Y}),zo(m,"link",r),s.state.loading|=4,Au(m,o.precedence,e),s.instance=m;case"script":return m=nl(o.src),(f=e.querySelector(Zl(m)))?(s.instance=f,Zn(f),f):(r=o,(f=Li.get(m))&&(r=x({},o),Eh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),Zn(f),zo(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Au(r,o.precedence,e));return s.instance}function Au(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===s)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Th(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Eh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Du=null;function $0(e,s,o){if(Du===null){var r=new Map,f=Du=new Map;f.set(o,r)}else f=Du,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[qs]||m[sn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var T=r.get(v);T?T.push(m):r.set(v,[m])}}return r}function I0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function _v(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function P0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=tl(r.href),m=s.querySelector(Ql(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Nu.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,Zn(m);return}m=s.ownerDocument||s,r=O0(r),(f=Li.get(f))&&Th(r,f),m=m.createElement("link"),Zn(m);var v=m;v._p=new Promise(function(T,Y){v.onload=T,v.onerror=Y}),zo(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Nu.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Ah=0;function yv(e,s){return e.stylesheets&&e.count===0&&Bu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Bu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Ah===0&&(Ah=62500*Z2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Ah?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Nu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ru=null;function Bu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ru=new Map,s.forEach(xv,e),Ru=null,Nu.call(e))}function xv(e,s){if(!(s.state.loading&4)){var o=Ru.get(e);if(o)var r=o.get(null);else{o=new Map,Ru.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Nu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Jl={$$typeof:R,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function bv(e,s,o,r,f,m,v,T,Y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.hiddenUpdates=fn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function H0(e,s,o,r,f,m,v,T,Y,me,je,Le){return e=new bv(e,s,o,v,Y,me,je,Le,T),s=1,m===!0&&(s|=24),m=gi(3,null,null,s),e.current=m,m.stateNode=e,s=cf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},hf(m),e}function U0(e){return e?(e=Rr,e):Rr}function V0(e,s,o,r,f,m){f=U0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ra(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ba(e,r,s),o!==null&&(di(o,e,s),Dl(o,e,s))}function Y0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Dh(e,s){Y0(e,s),(e=e.alternate)&&Y0(e,s)}function W0(e){if(e.tag===13||e.tag===31){var s=or(e,67108864);s!==null&&di(s,e,67108864),Dh(e,67108864)}}function F0(e){if(e.tag===13||e.tag===31){var s=wi();s=Ls(s);var o=or(e,s);o!==null&&di(o,e,s),Dh(e,s)}}var Lu=!0;function vv(e,s,o,r){var f=z.T;z.T=null;var m=te.p;try{te.p=2,Nh(e,s,o,r)}finally{te.p=m,z.T=f}}function wv(e,s,o,r){var f=z.T;z.T=null;var m=te.p;try{te.p=8,Nh(e,s,o,r)}finally{te.p=m,z.T=f}}function Nh(e,s,o,r){if(Lu){var f=Rh(r);if(f===null)yh(e,s,r,Ou,o),q0(e,r);else if(Cv(f,e,s,o,r))r.stopPropagation();else if(q0(e,r),s&4&&-1<Sv.indexOf(e)){for(;f!==null;){var m=wo(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Zt(m.pendingLanes);if(v!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var Y=1<<31-Xe(v);T.entanglements[1]|=Y,v&=~Y}oa(m),($n&6)===0&&(yu=bt()+500,Xl(0))}}break;case 31:case 13:T=or(m,2),T!==null&&di(T,m,2),bu(),Dh(m,2)}if(m=Rh(r),m===null&&yh(e,s,r,Ou,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else yh(e,s,r,null,o)}}function Rh(e){return e=_o(e),Bh(e)}var Ou=null;function Bh(e){if(Ou=null,e=gs(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Ou=e,null}function X0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ct()){case rt:return 2;case It:return 8;case ot:case I:return 32;case ne:return 268435456;default:return 32}default:return 32}}var Lh=!1,Wa=null,Fa=null,Xa=null,ec=new Map,tc=new Map,qa=[],Sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,s){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":ec.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":tc.delete(s.pointerId)}}function nc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=wo(s),s!==null&&W0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Cv(e,s,o,r,f){switch(s){case"focusin":return Wa=nc(Wa,e,s,o,r,f),!0;case"dragenter":return Fa=nc(Fa,e,s,o,r,f),!0;case"mouseover":return Xa=nc(Xa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return ec.set(m,nc(ec.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,tc.set(m,nc(tc.get(m)||null,e,s,o,r,f)),!0}return!1}function G0(e){var s=gs(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,En(e.priority,function(){F0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,En(e.priority,function(){F0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zu(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Rh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);_i=r,o.target.dispatchEvent(r),_i=null}else return s=wo(o),s!==null&&W0(s),e.blockedOn=o,!1;s.shift()}return!0}function K0(e,s,o){zu(e)&&o.delete(s)}function kv(){Lh=!1,Wa!==null&&zu(Wa)&&(Wa=null),Fa!==null&&zu(Fa)&&(Fa=null),Xa!==null&&zu(Xa)&&(Xa=null),ec.forEach(K0),tc.forEach(K0)}function $u(e,s){e.blockedOn===s&&(e.blockedOn=null,Lh||(Lh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kv)))}var Iu=null;function Q0(e){Iu!==e&&(Iu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Iu===e&&(Iu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Bh(r||o)===null)continue;break}var m=wo(o);m!==null&&(e.splice(s,3),s-=3,Rf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function sl(e){function s(Y){return $u(Y,e)}Wa!==null&&$u(Wa,e),Fa!==null&&$u(Fa,e),Xa!==null&&$u(Xa,e),ec.forEach(s),tc.forEach(s);for(var o=0;o<qa.length;o++){var r=qa[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<qa.length&&(o=qa[0],o.blockedOn===null);)G0(o),o.blockedOn===null&&qa.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[An]||null;if(typeof m=="function")v||Q0(o);else if(v){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[An]||null)T=v.formAction;else if(Bh(f)!==null)continue}else T=v.action;typeof T=="function"?o[r+1]=T:(o.splice(r,3),r-=3),Q0(o)}}}function Z0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Oh(e){this._internalRoot=e}Pu.prototype.render=Oh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=wi();V0(o,r,e,s,null,null)},Pu.prototype.unmount=Oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;V0(e.current,2,null,e,null,null),bu(),s[nt]=null}};function Pu(e){this._internalRoot=e}Pu.prototype.unstable_scheduleHydration=function(e){if(e){var s=us();e={blockedOn:null,target:e,priority:s};for(var o=0;o<qa.length&&s!==0&&s<qa[o].priority;o++);qa.splice(o,0,e),o===0&&G0(e)}};var J0=n.version;if(J0!=="19.2.4")throw Error(a(527,J0,"19.2.4"));te.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var jv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{ye=Hu.inject(jv),He=Hu}catch{}}return oc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ag,m=rg,v=lg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=H0(e,1,!1,null,null,o,r,null,f,m,v,Z0),e[nt]=s.current,gh(e),new Oh(s)},oc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ag,v=rg,T=lg,Y=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.formState!==void 0&&(Y=o.formState)),s=H0(e,1,!0,s,o!=null?o:null,r,f,Y,m,v,T,Z0),s.context=U0(null),o=s.current,r=wi(),r=Ls(r),f=Ra(r),f.callback=null,Ba(o,f,r),o=r,s.current.lanes=o,mt(s,o),oa(s),e[nt]=s.current,gh(e),new Pu(s)},oc.version="19.2.4",oc}var cy;function Lv(){if(cy)return $h.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),$h.exports=Bv(),$h.exports}var Ov=Lv();const zv=Bx(Ov);var y=up();const $v=Bx(y);function Iv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Pv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const Ii="__TAURI_TO_IPC_KEY__";function Hv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function we(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Uv{get rid(){return Iv(this,hd,"f")}constructor(n){hd.set(this,void 0),Pv(this,hd,n)}async close(){return we("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var Si;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(Si||(Si={}));async function Ox(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await we("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return we("plugin:event|listen",{event:t,target:c,handler:Hv(n)}).then(u=>async()=>Ox(t,u))}async function Vv(t,n,i){return yc(t,a=>{Ox(t,a.id),n(a)},i)}async function Yv(t,n){await we("plugin:event|emit",{event:t,payload:n})}async function Wv(t,n,i){await we("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class zx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[Ii](){return{width:this.width,height:this.height}}toJSON(){return this[Ii]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new zx(this.width/n,this.height/n)}[Ii](){return{width:this.width,height:this.height}}toJSON(){return this[Ii]()}}class ol{constructor(n){this.size=n}toLogical(n){return this.size instanceof zx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[Ii](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ii]()}}class $x{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ja(this.x*n,this.y*n)}[Ii](){return{x:this.x,y:this.y}}toJSON(){return this[Ii]()}}class Ja{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new $x(this.x/n,this.y/n)}[Ii](){return{x:this.x,y:this.y}}toJSON(){return this[Ii]()}}class Uu{constructor(n){this.position=n}toLogical(n){return this.position instanceof $x?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ja?this.position:this.position.toPhysical(n)}[Ii](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ii]()}}class bc extends Uv{constructor(n){super(n)}static async new(n,i,a){return we("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return we("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new bc(i))}static async fromPath(n){return we("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return we("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return we("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Mm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Mm||(Mm={}));class Fv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var uy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(uy||(uy={}));function Tm(){return new Ix(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Vh(){return we("plugin:window|get_all_windows").then(t=>t.map(n=>new Ix(n,{skip:!0})))}const Yh=["tauri://created","tauri://error"];class Ix{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||we("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Vh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Tm()}static async getAll(){return Vh()}static async getFocusedWindow(){for(const n of await Vh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Vv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Yh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Yv(n,i)}async emitTo(n,i,a){if(Yh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Wv(n,i,a)}_handleTauriEvent(n,i){return Yh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return we("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return we("plugin:window|inner_position",{label:this.label}).then(n=>new Ja(n))}async outerPosition(){return we("plugin:window|outer_position",{label:this.label}).then(n=>new Ja(n))}async innerSize(){return we("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return we("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return we("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return we("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return we("plugin:window|is_maximized",{label:this.label})}async isFocused(){return we("plugin:window|is_focused",{label:this.label})}async isDecorated(){return we("plugin:window|is_decorated",{label:this.label})}async isResizable(){return we("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return we("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return we("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return we("plugin:window|is_closable",{label:this.label})}async isVisible(){return we("plugin:window|is_visible",{label:this.label})}async title(){return we("plugin:window|title",{label:this.label})}async theme(){return we("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return we("plugin:window|is_always_on_top",{label:this.label})}async center(){return we("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Mm.Critical?i={type:"Critical"}:i={type:"Informational"}),we("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return we("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return we("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return we("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return we("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return we("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return we("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return we("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return we("plugin:window|maximize",{label:this.label})}async unmaximize(){return we("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return we("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return we("plugin:window|minimize",{label:this.label})}async unminimize(){return we("plugin:window|unminimize",{label:this.label})}async show(){return we("plugin:window|show",{label:this.label})}async hide(){return we("plugin:window|hide",{label:this.label})}async close(){return we("plugin:window|close",{label:this.label})}async destroy(){return we("plugin:window|destroy",{label:this.label})}async setDecorations(n){return we("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return we("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return we("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return we("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return we("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return we("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return we("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return we("plugin:window|set_size",{label:this.label,value:n instanceof ol?n:new ol(n)})}async setMinSize(n){return we("plugin:window|set_min_size",{label:this.label,value:n instanceof ol?n:n?new ol(n):null})}async setMaxSize(n){return we("plugin:window|set_max_size",{label:this.label,value:n instanceof ol?n:n?new ol(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return we("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return we("plugin:window|set_position",{label:this.label,value:n instanceof Uu?n:new Uu(n)})}async setFullscreen(n){return we("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return we("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return we("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return we("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return we("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return we("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return we("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return we("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return we("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return we("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return we("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Uu?n:new Uu(n)})}async setIgnoreCursorEvents(n){return we("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return we("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return we("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return we("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return we("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return we("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return we("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return we("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return we("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return we("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Si.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(Si.WINDOW_MOVED,i=>{i.payload=new Ja(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Si.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Fv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Si.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),a=await this.listen(Si.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ja(d.payload.position)}})}),c=await this.listen(Si.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),u=await this.listen(Si.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Si.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Si.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Si.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Si.WINDOW_THEME_CHANGED,n)}}var dy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(dy||(dy={}));var fy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(fy||(fy={}));var hy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(hy||(hy={}));var my;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(my||(my={}));async function Xv(t={}){return typeof t=="object"&&Object.freeze(t),await we("plugin:dialog|open",{options:t})}/**
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
 */const Gv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=t=>{const n=Gv(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
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
 */const Zv=y.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>y.createElement("svg",{ref:p,...Kv,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Px("lucide",c),...!u&&!Qv(h)&&{"aria-hidden":"true"},...h},[...d.map(([g,_])=>y.createElement(g,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=(t,n)=>{const i=y.forwardRef(({className:a,...c},u)=>y.createElement(Zv,{ref:u,iconNode:n,className:Px(`lucide-${qv(py(t))}`,`lucide-${t}`,a),...c}));return i.displayName=py(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ew=xl("chevron-down",Jv);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],nw=xl("chevron-up",tw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ow=xl("folder-plus",sw);/**
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
 */const cw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],uw=xl("search",cw),dw=3.7,Vu=200,Em=240,ps=540,Ys=176,Wh=32,bl=20,fw=Em/2,ic=ps+fw,gr=18,yr=18,Fh="#E6E6E6";function _y(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function kr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ja(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ja(t).localeCompare(ja(n))}function Hx(t){return[...t].sort(_c)}function hw(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ja(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ja(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=ja(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const k=(g=a.get(w))!=null?g:[];k.push(b),a.set(w,k)}for(const b of a.values())b.sort(_c);const c=t.filter(b=>{var w;return((w=i.get(ja(b)))!=null?w:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=ja(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const k=ja(S),C=((x=i.get(k))!=null?x:0)-1;i.set(k,C),C===0&&c.push(S)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ja(b))).sort(_c)]}function Ux(t,n){var i;return Hx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Vx(t,n,i){return Ux(t,i)}function Xh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function mw(t,n){var u,d;if(!n||t.length===0)return Xh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Xh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Xh(t)}function Yu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function pw(t,n,i){var _,x,b,w,S,k,C;const a=Vx(t,i,n);if(a.length===0)return null;const c=a.map(j=>kr(t,j)),u=new Set(c.map(j=>j.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(j=>j.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,g=c.find(j=>h&&j.id===h||d&&j.id===d?!0:!j.parentSha||!u.has(j.parentSha));return g||((C=(k=mw(c,p!=null?p:void 0))!=null?k:c[0])!=null?C:null)}function _w(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Ux(t.name,i);if(a.length>0){const g=a.map(b=>kr(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function dp(t,n,i={},a={}){var re,ie,Ce,Be;const u=new Map(t.map(Z=>[Z.name,Z])),d=new Map,h=new Map;for(const Z of t){const z=((re=i[Z.name])!=null?re:[]).filter(te=>te.kind!=="branch-created").map(te=>new Date(te.date).getTime()).filter(te=>Number.isFinite(te)).sort((te,W)=>te-W)[0];z!=null&&h.set(Z.name,z)}const p=Z=>{const ue=h.get(Z.name);return ue!=null?ue:_y(Z).start},g=Z=>{var z;const ue=(z=a[Z.name])!=null?z:null;return ue&&ue!==Z.name&&(ue===n||u.has(ue))?ue:Z.name===n?null:Z.parentBranch&&Z.parentBranch!==Z.name&&(Z.parentBranch===n||u.has(Z.parentBranch))?Z.parentBranch:null};for(const Z of t){if(Z.name===n)continue;const ue=(ie=g(Z))!=null?ie:n,z=(Ce=d.get(ue))!=null?Ce:[];z.push(Z),d.set(ue,z)}for(const Z of d.values())Z.sort((ue,z)=>p(ue)-p(z)||ue.name.localeCompare(z.name));const _=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const Z of Object.values(i))for(const ue of Z){const z=new Date(ue.date).getTime();Number.isFinite(z)&&(ue.fullSha&&S.set(ue.fullSha,z),ue.sha&&S.set(ue.sha,z))}const k=(Z,ue)=>({start:Math.min(Z,ue),end:Math.max(Z,ue)}),C=Z=>{var oe,ce;const ue=k(p(Z),_y(Z).end),z=[ue],te=ue.start,W=_w(Z,n,i),K=W?S.get(W):void 0,pe=new Date((ce=(oe=Z.divergedFromDate)!=null?oe:Z.createdDate)!=null?ce:Z.lastCommitDate).getTime(),N=Number.isFinite(K!=null?K:NaN)?K:Number.isFinite(pe)?pe:null;if(N==null)return z;const ae=k(N,te);return ae.start!==ae.end&&z.push(ae),z},j=Math.max(1,360*60*1e3*dw),B=(Z,ue)=>!(Z.start-ue.end>=j||ue.start-Z.end>=j),R=(Z,ue)=>ue.some(z=>{var te;return((te=w.get(Z))!=null?te:[]).some(W=>B(z,W))}),A=(Z,ue=new Set)=>{const z=b.get(Z);if(z!=null)return z;if(ue.has(Z))return 1;ue.add(Z);const te=u.get(Z);if(!te||Z===n)return ue.delete(Z),b.set(Z,0),0;const W=g(te),K=W?A(W,ue)+1:1;return ue.delete(Z),b.set(Z,K),K},$=(Z,ue=new Set)=>{var $e,Ne;const z=_.get(Z);if(z)return z.column;if(ue.has(Z))return 0;ue.add(Z);const te=u.get(Z);if(!te)return ue.delete(Z),0;if(Z===n){const ft={name:Z,column:0,parentName:null};_.set(Z,ft),x.push(ft);const Oe=C(te);return w.set(0,[...($e=w.get(0))!=null?$e:[],...Oe]),ue.delete(Z),0}const W=g(te),K=W&&!ue.has(W)?W:null,pe=K?$(K,ue):0,N=Math.max(1,A(Z)),ae=Math.max(K?pe+1:1,N),oe=C(te);let ce=ae;for(;R(ce,oe);)ce+=1;const Ee={name:Z,column:ce,parentName:K};return _.set(Z,Ee),x.push(Ee),w.set(ce,[...(Ne=w.get(ce))!=null?Ne:[],...oe]),ue.delete(Z),ce};$(n);const H=t.filter(Z=>!_.has(Z.name)).sort((Z,ue)=>p(Z)-p(ue)||Z.name.localeCompare(ue.name)),V=H.filter(Z=>g(Z)!=null),P=H.filter(Z=>g(Z)==null);for(const Z of V)$(Z.name);let J=Math.max(0,...x.map(Z=>Z.column))+1+1;for(const Z of P){const ue=C(Z);let z=J;for(;R(z,ue);)z+=1;const te={name:Z.name,column:z,parentName:null};_.set(Z.name,te),x.push(te),w.set(z,[...(Be=w.get(z))!=null?Be:[],...ue]),J=z+1}return x.sort((Z,ue)=>Z.column-ue.column||Z.name.localeCompare(ue.name))}function gw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var g;const p=(g=i[h.name])!=null?g:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Wu=2.25,qi=0,qh=0,yw=1800*1e3,xw=1440*60*1e3,Oi=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},ti=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function gy(t,n,i=new Map){var V,P,J,re,ie,Ce,Be,Z,ue,z,te,W;if(t.length===0)return new Map;const a=[...t].sort((K,pe)=>{const N=Oi(K.date)-Oi(pe.date);return N!==0?N:K.id!==pe.id?K.id.localeCompare(pe.id):K.visualId.localeCompare(pe.visualId)}),c=new Map;for(const K of t){const pe=(V=K.parentSha)!=null?V:null;if(pe){const N=(P=c.get(pe))!=null?P:new Set;N.add(K.id),c.set(pe,N)}for(const N of(J=i.get(K.id))!=null?J:[]){if(!N)continue;const ae=(re=c.get(N))!=null?re:new Set;ae.add(K.id),c.set(N,ae)}}const u=new Map,d=new Map,h=new Map,p=new Set,g=new Map,_=new Map,x=new Map,b=new Map;for(const K of t){const pe=(ie=g.get(K.branchName))!=null?ie:new Set;pe.add(K.id),g.set(K.branchName,pe);const N=(Be=(Ce=n.get(K.branchName))==null?void 0:Ce.column)!=null?Be:0,ae=(Z=_.get(K.id))!=null?Z:new Set;ae.add(N),_.set(K.id,ae);const oe=new Set;K.parentSha&&oe.add(K.parentSha),x.set(K.visualId,oe);const ce=new Set(oe);for(const Ee of(ue=i.get(K.id))!=null?ue:[])Ee&&ce.add(Ee);b.set(K.visualId,ce)}const w=new Set(Array.from(_.keys())),S=Array.from(w),k=new Map,C=K=>{const pe=[];for(const N of S)ti(N,K)&&pe.push(N);return pe},j=new Map;for(const K of S)j.set(K,new Set);for(const K of t){const pe=C(K.id);if(pe.length===0)continue;const N=(z=b.get(K.visualId))!=null?z:new Set,ae=new Set;for(const oe of N)for(const ce of C(oe))ae.add(ce);for(const oe of pe){const ce=(te=j.get(oe))!=null?te:new Set;for(const Ee of ae)ce.add(Ee);j.set(oe,ce)}}const B=new Map,R=(K,pe=new Set)=>{var ce;const N=B.get(K);if(N)return N;if(pe.has(K))return new Set;pe.add(K);const ae=(ce=j.get(K))!=null?ce:new Set,oe=new Set;for(const Ee of ae){oe.add(Ee);for(const $e of R(Ee,pe))oe.add($e)}return pe.delete(K),B.set(K,oe),oe},A=(K,pe)=>{if(ti(K,pe))return!0;const N=C(K),ae=C(pe);for(const oe of N){const ce=R(oe);for(const Ee of ae)if(ce.has(Ee))return!0}for(const oe of ae){const ce=R(oe);for(const Ee of N)if(ce.has(Ee))return!0}return!1};let $=1;const H=(K,pe)=>{var Ht,en,q,Ae,Fe,Je,lt,st,bt;const N=(en=(Ht=n.get(K.branchName))==null?void 0:Ht.column)!=null?en:0,ae=(q=g.get(K.branchName))!=null?q:new Set,ce=!(!!K.parentSha&&ae.has(K.parentSha))&&K.parentSha?K.parentSha:null,Ee=Array.from(pe).flatMap(ct=>C(ct).flatMap(rt=>{var It;return(It=k.get(rt))!=null?It:[]})),$e=(K.kind==="branch-created"||K.kind==="stash")&&Ee.length>0?Math.max(...Ee)+1:null,Ne=Ee.length>0?Math.max(...Ee)+1:1,ft=(Ae=c.get(K.id))!=null?Ae:new Set,at=Array.from(ft).flatMap(ct=>{var rt;return Array.from((rt=_.get(ct))!=null?rt:[])}).some(ct=>ct!==N),tt=new Date(K.date).getTime(),St=Math.max(Ne,1);let Qe=null;for(let ct=St;ct<$;ct+=1){const rt=(Fe=d.get(ct))!=null?Fe:[];if(rt.length===0||at||p.has(ct))continue;const It=(Je=b.get(K.visualId))!=null?Je:new Set;if(!(rt.some(de=>A(K.id,de.sha)?!0:Array.from(It).some(ye=>ti(ye,de.sha)))||rt.some(de=>de.column===N)||!Number.isFinite(tt)||!rt.every(de=>{if(!Number.isFinite(de.time))return!1;const ye=!!ce&&!!de.branchEntryParentSha&&ce===de.branchEntryParentSha?xw:yw;return Math.abs(de.time-tt)<=ye}))){Qe=ct;break}}$e!=null&&(Qe=$e),Qe==null&&(Qe=Math.max(Ne,$)),u.set(K.visualId,Qe),Qe>=$&&($=Qe+1);const Dt=(lt=d.get(Qe))!=null?lt:[];Dt.push({visualId:K.visualId,sha:K.id,column:N,time:tt,branchEntryParentSha:ce}),d.set(Qe,Dt),at&&p.add(Qe);for(const ct of pe){const rt=(st=h.get(ct))!=null?st:[];rt.push(Qe),h.set(ct,rt)}const ln=(bt=k.get(K.id))!=null?bt:[];ln.push(Qe),k.set(K.id,ln)};for(const K of a){const pe=(W=x.get(K.visualId))!=null?W:new Set;H(K,pe)}return u}function kd(t){var yn,Ci,Pi,ii,Ji,Ko,ai,Es,To,Hn,Eo,Dn,as,Ho,Ao,fs,Kt,ki,Gs,ji,Hi,Uo,As,_i,_o,Mn,Ks,Do,Ds,Qs,on,Ns,So,Vo,xn,Qo,ys,Yo,No,Wo,Zo,Jn,io,Co,go,$s,Is,ao,Nn,Ps,Ro;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:g,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:k,orientation:C="horizontal",nodePositionOverrides:j={}}=t,B=C==="horizontal",R=new Map(i.map(M=>[M.name,M])),A=new Map(n.map(M=>[M.name,M])),$=hw([...a.map(M=>{var X,_e,Se;return{id:M.fullSha,branchName:d,message:(X=M.prTitle)!=null?X:M.sha,author:"",date:M.date,parentSha:(Se=(_e=M.parentShas)==null?void 0:_e[0])!=null?Se:null}}),...((yn=h[d])!=null?yn:[]).map(M=>kr(d,M)),...c.map(M=>kr(M.branch||"",M)),...u.map(M=>kr(M.branch||"",M))]),H=new Map,V=new Map;for(const M of i){if(M.name===d)continue;const X=Vx(M.name,g,h);V.set(M.name,X);const _e=Hx(X.map(Wt=>kr(M.name,Wt)));if(_e.length>0){H.set(M.name,_e);continue}const Se=(ii=(Pi=(Ci=M.presidesFromSha)!=null?Ci:M.divergedFromSha)!=null?Pi:M.createdFromSha)!=null?ii:null;if(!Se)continue;const Ue=(Ji=c.find(Wt=>ti(Wt.fullSha,Se)||ti(Wt.sha,Se)))==null?void 0:Ji.date,et=Ue?null:(Ko=Object.values(h).flat().find(Wt=>ti(Wt.fullSha,Se)||ti(Wt.sha,Se)))==null?void 0:Ko.date,Vt={id:`BRANCH_HEAD:${M.name}:${Se}`,branchName:M.name,message:`Branch ${M.name}`,author:M.lastCommitAuthor,date:(To=(Es=(ai=Ue!=null?Ue:et)!=null?ai:M.createdDate)!=null?Es:M.divergedFromDate)!=null?To:M.lastCommitDate,parentSha:Se,kind:"branch-created"};H.set(M.name,[Vt])}const P=new Set($.map(M=>M.id)),J=(Hn=[...$].sort((M,X)=>Oi(M.date)-Oi(X.date)||M.id.localeCompare(X.id))[0])!=null?Hn:null,re=new Map(Array.from(H.entries()).map(([M,X])=>[M,new Set(X.map(_e=>_e.id))])),ie=new Map;for(const M of i){if(M.name===d)continue;const X=pw(M.name,h,g);if(X){ie.set(M.name,X);continue}const _e=(Eo=H.get(M.name))==null?void 0:Eo[0];if(_e){const Se=(Ho=(as=(Dn=M.presidesFromSha)!=null?Dn:M.divergedFromSha)!=null?as:M.createdFromSha)!=null?Ho:null;ie.set(M.name,{..._e,parentSha:Se})}}const Ce=new Map;for(const[M,X]of H.entries()){const _e=X.find(Se=>Se.kind!=="branch-created");_e&&Ce.set(M,_e)}const Be=new Map;for(const[M,X]of H.entries()){const _e=X.filter(et=>et.kind!=="branch-created"),Ue=(Ao=(_e.length>0?_e:X)[0])!=null?Ao:null;Ue&&Be.set(M,Ue)}const Z=new Map;for(const M of i){if(M.name===d)continue;const X=(fs=Be.get(M.name))!=null?fs:null,_e=(ki=(Kt=ie.get(M.name))==null?void 0:Kt.parentSha)!=null?ki:null,Se=(Hi=(ji=(Gs=M.presidesFromSha)!=null?Gs:M.divergedFromSha)!=null?ji:M.createdFromSha)!=null?Hi:null,Ue=(Uo=X==null?void 0:X.parentSha)!=null?Uo:null,et=(As=Ue!=null?Ue:_e)!=null?As:Se;et&&Z.set(M.name,et)}const ue=M=>{var et,Vt,Wt,Lt,Ye,cn,bn,D;const X=(et=p[M.name])!=null?et:null;if(!(X&&X!==d&&X!==M.name&&R.has(X)))return X!=null?X:"";const Se=(Lt=(Wt=(Vt=Z.get(M.name))!=null?Vt:M.presidesFromSha)!=null?Wt:M.divergedFromSha)!=null?Lt:M.createdFromSha;if(Se&&((Ye=re.get(X))!=null?Ye:new Set).has(Se))return X;const Ue=(bn=(cn=ie.get(M.name))==null?void 0:cn.parentSha)!=null?bn:null;return Ue&&((D=re.get(X))!=null?D:new Set).has(Ue),X},z=M=>{var Ue,et,Vt,Wt,Lt,Ye,cn,bn;const X=ie.get(M.name),_e=(Lt=(Wt=(Vt=(et=(Ue=Z.get(M.name))!=null?Ue:X==null?void 0:X.parentSha)!=null?et:M.presidesFromSha)!=null?Vt:M.divergedFromSha)!=null?Wt:M.createdFromSha)!=null?Lt:null;if(!M.parentBranch&&!_e||!_e)return null;if(ue(M)===d){if(P.has(_e))return _e;const D=(Ye=X==null?void 0:X.parentSha)!=null?Ye:null;return D&&P.has(D)?D:(bn=(cn=J==null?void 0:J.id)!=null?cn:D)!=null?bn:_e}return P.has(_e),_e},te=M=>z(M),W=new Map;for(const M of[...c,...u]){const X={...kr(M.branch||"",M),visualId:`${M.branch||""}:${M.fullSha}`};W.set(M.fullSha,X)}const K=new Map(W),pe=M=>{K.has(M.id)||K.set(M.id,M)},N=new Map(Array.from(H.entries()).map(([M,X])=>[M,new Set(X.map(_e=>_e.id))])),ae=new Set;for(const M of N.values())for(const X of M)ae.add(X);for(const M of $)ae.has(M.id)||pe({...M,visualId:`${M.branchName}:${M.id}`});for(const[M,X]of H.entries())for(const _e of X)pe({..._e,visualId:`${M}:${_e.id}`});const ce=[...Array.from(K.values()).map(M=>({...M,visualId:`${M.branchName}:${M.id}`}))].sort((M,X)=>Oi(M.date)-Oi(X.date)||M.id.localeCompare(X.id)),Ee=new Map;for(const M of ce){const X=(_i=Ee.get(M.branchName))!=null?_i:new Set;X.add(M.id),Ee.set(M.branchName,X)}const $e=(M,X)=>{const _e=Ee.get(M);if(!_e||_e.size===0)return!1;for(const Se of _e)if(ti(Se,X))return!0;return!1},Ne=(M,X)=>{const _e=Array.from(Ee.entries()).filter(([Se])=>Se!==X).filter(([,Se])=>Array.from(Se).some(Ue=>ti(Ue,M))).map(([Se])=>Se);return _e.length>0?_e.sort()[0]:M.slice(0,7)},ft=[],Oe=new Map,at=new Map;for(const M of a){const X=M.fullSha,_e=M.targetBranch,Se=M.targetCommitSha;if(!X||!_e||!Se||!$e(_e,Se))continue;const Ue=((_o=M.parentShas)!=null?_o:[]).slice(1).filter(Vt=>!!Vt&&!ti(Vt,X));if(Ue.length===0)continue;const et=(Mn=at.get(X))!=null?Mn:new Set;for(const Vt of Ue){et.add(Vt);const Wt=Ne(Vt,_e);ft.push({sourceCommitSha:Vt,sourceBranchName:Wt,mergeCommitSha:X,targetCommitSha:Se,targetBranchName:_e});const Lt=(Ks=Oe.get(Wt))!=null?Ks:new Map,Ye=(Do=Lt.get(Vt))!=null?Do:new Set;Ye.add(_e),Lt.set(Vt,Ye),Oe.set(Wt,Lt)}at.set(X,et)}const tt=new Map;for(const M of i){if(M.name===d)continue;const X=z(M);X&&tt.set(M.name,X)}const St=new Map;for(const M of ce){const X=at.get(M.id);if(X&&X.size>0){const Ue=(Ds=St.get(M.id))!=null?Ds:new Set;for(const et of X)Ue.add(et);St.set(M.id,Ue)}if(M.branchName===d)continue;const _e=tt.get(M.branchName);if(!_e||_e===M.id)continue;const Se=(Qs=St.get(M.id))!=null?Qs:new Set;Se.add(_e),St.set(M.id,Se)}const Qe=gy(ce,A,St),Dt=new Map;for(const M of ce){const X=(on=Dt.get(M.branchName))!=null?on:[];X.push(M),Dt.set(M.branchName,X)}const ln=new Map,Ht=new Map,en=new Map,q=new Map,Ae=new Map,Fe=(M,X)=>{var et,Vt,Wt;if(X.length===0)return[];const _e=[...X].sort((Lt,Ye)=>{var D,F;const cn=(D=Qe.get(Lt.visualId))!=null?D:Number.MAX_SAFE_INTEGER,bn=(F=Qe.get(Ye.visualId))!=null?F:Number.MAX_SAFE_INTEGER;return cn!==bn?cn-bn:Oi(Lt.date)-Oi(Ye.date)||Lt.id.localeCompare(Ye.id)}),Se=new Map;for(const Lt of _e){const Ye=((et=Lt.clusterKey)==null?void 0:et.trim())||`cluster:${M}:${Lt.id}`,cn=(Vt=Se.get(Ye))!=null?Vt:[];cn.push(Lt),Se.set(Ye,cn)}const Ue=[];for(const[Lt,Ye]of Se.entries()){if(Ye.length===0)continue;const bn=[...Ye].sort((F,Q)=>{var yt,dt;const fe=(yt=Qe.get(F.visualId))!=null?yt:Number.MIN_SAFE_INTEGER,Ze=(dt=Qe.get(Q.visualId))!=null?dt:Number.MIN_SAFE_INTEGER;return fe!==Ze?Ze-fe:Oi(Q.date)-Oi(F.date)||Q.id.localeCompare(F.id)})[0].visualId,D={branchName:M,key:Lt,commitIds:Ye.map(F=>F.visualId),leadId:bn,count:Ye.length};Ue.push(D),q.set(Lt,bn),Ae.set(Lt,Ye.length);for(const F of D.commitIds){Ht.set(F,Lt);const Q=F.split(":").slice(1).join(":"),fe=(Wt=en.get(Q))!=null?Wt:[];fe.includes(Lt)||fe.push(Lt),en.set(Q,fe)}}return Ue};for(const[M,X]of Dt.entries())ln.set(M,Fe(M,X));const Je=new Map;for(const M of ce)Je.set(M.id,M);const lt=M=>{if(!M)return"none";const X=Array.from(Je.values()).find(_e=>ti(_e.id,M)||ti(_e.id.slice(0,7),M)||ti(M,_e.id));return X?`${X.id.slice(0,7)} ${X.branchName}`:M.slice(0,7)},st=b?["Lane rows (expected):",...[...n].sort((M,X)=>M.column-X.column||M.name.localeCompare(X.name)).map(M=>{var X;return`  row=${M.column} branch=${M.name} parent=${(X=M.parentName)!=null?X:"none"}`}),"",...i.flatMap(M=>{var Vt,Wt,Lt,Ye,cn,bn,D,F;const X=(Vt=h[M.name])!=null?Vt:[],_e=[...(Wt=V.get(M.name))!=null?Wt:[]].reverse(),Se=new Set(((Lt=H.get(M.name))!=null?Lt:[]).map(Q=>Q.id)),Ue=(cn=(Ye=_e.find(Q=>!Q.parentSha||!_e.some(fe=>{var Ze;return ti(fe.fullSha,(Ze=Q.parentSha)!=null?Ze:"")})))!=null?Ye:_e[0])!=null?cn:null,et=(D=(bn=Ue==null?void 0:Ue.parentSha)!=null?bn:Z.get(M.name))!=null?D:null;return[`Branch ${M.name}`,`  ahead=${(F=g[M.name])!=null?F:0} previews=${_e.length} rendered=${Se.size}`,`  db parent commit=${lt(et)}`,`  db child commit=${Ue?`${Ue.fullSha.slice(0,7)} ${M.name}`:"none"}`,..._e.map(Q=>{const fe=Se.has(Q.fullSha)?"visible":"hidden",Ze=Se.has(Q.fullSha)?"kept by render set":"dropped by render set";return`  ${fe} ${Q.fullSha.slice(0,7)} ${Q.message} [${Ze}]`}),X.length===0?"  no preview data":null].filter(Q=>Q!=null)})]:[],bt=b?Array.from(H.entries()).map(([M,X])=>[`Branch debug ${M}`,...X.map(_e=>`  ${_e.id.slice(0,7)} ${_e.message}`)].join(`
`)):[],ct=Qe,rt=Em/Wu,It=20/Wu,ot=B?ps+rt+It:Vu+rt+It,I=B?Vu+rt+It:ic,ne=Math.max(0,...ce.map(M=>{var X;return(X=ct.get(M.visualId))!=null?X:1})),de=ce.map(M=>{var Ue,et;const X=A.get(M.branchName),_e=(Ue=ct.get(M.visualId))!=null?Ue:1,Se=(et=X==null?void 0:X.column)!=null?et:0;return B?{commit:M,row:_e,column:Se,x:yr+(_e-1)*ot,y:gr+Se*I}:{commit:M,row:_e,column:Se,x:yr+Se*ic,y:gr+(ne-_e)*ot}}),be=M=>{var _e;const X=(_e=j[M.commit.visualId])!=null?_e:j[M.commit.id];return X?{...M,x:X.x,y:X.y}:M},ye=de.map(be),He=w.trim().toLowerCase(),Re=He?ye.filter(M=>{const X=M.commit.id.toLowerCase(),_e=M.commit.id.slice(0,7).toLowerCase(),Se=M.commit.message.toLowerCase(),Ue=M.commit.branchName.toLowerCase();return X.includes(He)||_e.includes(He)||Se.includes(He)||Ue.includes(He)}):ye,Xe=S&&(Ns=ye.find(M=>M.commit.id===S))!=null?Ns:null,vt=new Set(Re.map(M=>M.commit.id)),Rt=(So=k==null?void 0:k.headSha)!=null?So:null,pt=(()=>{var X,_e;const M=(X=k==null?void 0:k.branchName)!=null?X:null;return!Rt||!M?null:(_e=Ht.get(`${M}:${Rt}`))!=null?_e:null})(),Ge=new Set;for(const M of ln.values())for(const X of M)X.count>1&&X.key!==pt&&Ge.add(X.key);const Nt=[...ce].filter(M=>{var et;const X=Ht.get(M.visualId);if(!X)return!0;const _e=q.get(X),Se=(et=Ae.get(X))!=null?et:1,Ue=_.has(X)||!Ge.has(X)&&!x.has(X);return Se<=1||Ue||_e===M.visualId}),Gt=gy(Nt,A,St),Zt=Em/Wu,Pe=20/Wu,$t=B?ps+Zt+Pe:Vu+Zt+Pe,gt=B?Vu+Zt+Pe:ic,ht=Math.max(0,...Nt.map(M=>{var X;return(X=Gt.get(M.visualId))!=null?X:1})),fn=Nt.map(M=>{var Ue,et;const X=A.get(M.branchName),_e=(Ue=Gt.get(M.visualId))!=null?Ue:1,Se=(et=X==null?void 0:X.column)!=null?et:0;return be(B?{commit:M,row:_e,column:Se,x:yr+(_e-1)*$t,y:gr+Se*gt}:{commit:M,row:_e,column:Se,x:yr+Se*ic,y:gr+(ht-_e)*$t})}),mt=new Map;for(const M of fn){const X=(Vo=mt.get(M.commit.id))!=null?Vo:[];X.push(M),mt.set(M.commit.id,X)}const Ut=new Map;for(const M of fn){const X=Ht.get(M.commit.visualId);if(!X)continue;const _e=Ut.get(X);(!_e||(B?M.x>_e.x:M.y<_e.y))&&Ut.set(X,M)}const On=(M,X)=>`${M.toFixed(1)} ${X.toFixed(1)}`,Yn=Math.max(0,...fn.map(M=>M.row)),Qn=Math.max(0,...n.map(M=>M.column)),Ls=Math.max(0,...fn.map(M=>M.x+ps)),Fs=Math.max(0,...fn.map(M=>M.y+bl+Ys)),us=Math.max(B?yr*2+Math.max(0,Yn-1)*$t+ps+Wh+Pe:yr*2+(Qn+1)*ic,Ls+yr),En=Math.max(B?gr*2+Qn*gt+Ys+Wh+Pe:gr*2+Math.max(0,Yn-1)*$t+Ys+Wh+Pe,Fs+gr),Pn=[],sn=new Map(i.map(M=>{var _e,Se;const X=new Date((Se=(_e=M.createdDate)!=null?_e:M.divergedFromDate)!=null?Se:M.lastCommitDate).getTime();return[M.name,Number.isFinite(X)?X:0]})),An=M=>{var X;return(X=sn.get(M))!=null?X:0},nt=[],pn=M=>{b&&nt.push(M)},Io=new Set,Xs=new Map,Wn=(M,X)=>{var Se;const _e=(Se=Xs.get(M))!=null?Se:[];_e.includes(X)||_e.push(X),Xs.set(M,_e)},qs=new Set,pi=new Set,gs=new Set,wo=(M,X)=>{var Ue,et;if(!M)return null;const _e=Yu(mt,M,X);if(_e)return _e;const Se=(Ue=Ht.get(`${X!=null?X:d}:${M}`))!=null?Ue:Ht.get(M);return Se&&(et=Ut.get(Se))!=null?et:null},so=new Set;for(const M of i){const X=te(M);X&&pi.add(X);const _e=(xn=Z.get(M.name))!=null?xn:null;_e&&gs.add(_e)}const oo=M=>{var Ue;const X=wo(M.id,M.branchName);if(X)return X;const _e=Ht.get(M.visualId);if(!_e)return null;const Se=q.get(_e);return Se&&(Ue=fn.find(et=>et.commit.id===Se))!=null?Ue:null},Zn=(M,X)=>M?Yu(mt,M,X):null,Mo=(M,X)=>B?{x:M.x-qi,y:M.y+Ys/2,face:"left"}:{x:M.x+ps/2,y:M.y+Ys+qi,face:"bottom"},js=M=>B?{x:M.x-qi,y:M.y+Ys/2,face:"left"}:{x:M.x+ps/2,y:M.y+Ys+qi,face:"bottom"},Fn=(M,X)=>M.column!==X.column?!0:B?M.commit.branchName!==X.commit.branchName:!1,gn=(M,X,_e)=>{if(!B)return{x:X?M.x+ps:M.x+ps/2,y:X?M.y+Ys/2:M.y,face:X?"right":"top"};if(!X)return{x:M.x+ps+qi,y:M.y+Ys/2,face:"right"};if(_e&&_e.column===M.column&&_e.commit.branchName!==M.commit.branchName){if(_e.x>M.x)return{x:M.x+ps/2,y:M.y+Ys+qi,face:"bottom"};if(_e.x<M.x)return{x:M.x+ps/2,y:M.y-qi,face:"top"}}return!_e||_e.column===M.column?{x:M.x+ps+qi,y:M.y+Ys/2,face:"right"}:_e.column>M.column?{x:M.x+ps/2,y:M.y+Ys+qi,face:"bottom"}:{x:M.x+ps/2,y:M.y-qi,face:"top"}},ds=M=>B?{x:M.x+ps/2,y:M.y+Ys+qi,face:"bottom"}:{x:M.x+ps,y:M.y+Ys/2,face:"right"},mo=(M,X)=>Yu(mt,M,X),zn=(M,X)=>Zn(M,X),Po=[],po=new Set;for(const M of ft){const X=(Qo=wo(M.targetCommitSha,M.targetBranchName))!=null?Qo:null;if(!X){pn({id:`merge:${M.mergeCommitSha}:${M.sourceCommitSha}:target`,kind:"merge",parent:M.sourceCommitSha,child:M.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const _e=M.sourceCommitSha,Se=`merge:${M.mergeCommitSha}:${_e!=null?_e:"unknown"}`;if(!_e||ti(_e,M.targetCommitSha)){pn({id:Se,kind:"merge",parent:_e!=null?_e:"unknown",child:M.targetCommitSha,rendered:!1,reason:_e?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ue=(ys=Yu(mt,_e))!=null?ys:null;if(!Ue){pn({id:Se,kind:"merge",parent:_e,child:M.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ue.commit.id===X.commit.id){pn({id:Se,kind:"merge",parent:Ue.commit.id,child:X.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let et,Vt,Wt;const Lt=B?X.x+ps/2:X.x+ps-qh,Ye=B?X.y+Ys+qh:X.y+Ys/2,cn=B?"bottom":"right";B?(et=Ue.x+ps+qh,Vt=Ue.y+Ys/2,Wt="right"):(et=Ue.x+ps/2,Vt=Ue.y,Wt="top");const bn=`${et.toFixed(2)}:${Vt.toFixed(2)}:${Lt.toFixed(2)}:${Ye.toFixed(2)}`;if(po.has(bn)){pn({id:Se,kind:"merge",parent:Ue.commit.id,child:X.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}po.add(bn),Po.push({id:Se,fromX:et,fromY:Vt,toX:Lt,toY:Ye,fromFace:Wt,toFace:cn,zIndex:An(Ue.commit.branchName)}),pn({id:Se,kind:"merge",parent:Ue.commit.id,child:X.commit.id,rendered:!0,reason:`merge connector rendered to ${M.targetBranchName}`})}const Ms=new Set;for(const M of i){if(M.name===d)continue;const X=ie.get(M.name);if(!X)continue;const _e=ue(M),Se=mo((Yo=Z.get(M.name))!=null?Yo:"",_e),Ue=(No=Ce.get(M.name))!=null?No:X,et=(Wo=zn(Ue.id,M.name))!=null?Wo:oo(Ue);if(!Se||!et||Se.commit.id===et.commit.id){const cn=Ht.get(`${M.name}:${X.id}`),bn=Ht.get(`${M.name}:${Ue.id}`),D=!!cn&&!Ge.has(cn),F=!!bn&&!Ge.has(bn),Q=!!cn&&!_.has(cn)&&(D?x.has(cn):!0),fe=!!bn&&!_.has(bn)&&(F?x.has(bn):!0);!Se&&!Q&&Wn((Zo=et==null?void 0:et.commit.id)!=null?Zo:X.id,"Missing parent node"),!et&&!fe&&Wn(X.id,"Missing child node"),pn({id:`branch:${(Jn=Se==null?void 0:Se.commit.id)!=null?Jn:"null"}->${(io=et==null?void 0:et.commit.id)!=null?io:"null"}`,kind:"branch",parent:(Co=Se==null?void 0:Se.commit.id)!=null?Co:"null",child:(go=et==null?void 0:et.commit.id)!=null?go:"null",rendered:!1,reason:Se?et?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Vt=`branch:${Se.commit.id}->${et.commit.id}`;if(so.has(Vt)){pn({id:Vt,kind:"branch",parent:Se.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate connector key"});continue}so.add(Vt),qs.add(Se.commit.id);const Wt=Fn(Se,et);Se.commit.branchName!==et.commit.branchName&&Ms.add(Se.commit.id);const Lt=ds(Se),Ye=js(et);Pn.push({id:Vt,fromX:Lt.x,fromY:Lt.y,toX:Ye.x,toY:Ye.y,fromFace:Lt.face,toFace:Ye.face,zIndex:An(et.commit.branchName)}),pn({id:Vt,kind:"branch",parent:Se.commit.id,child:et.commit.id,rendered:!0,reason:Wt?"branch connector rendered":B?"horizontal connector rendered":"vertical connector rendered"})}for(const M of ce){const X=oo(M);if(!X)continue;const _e=($s=M.parentSha)!=null?$s:null;if(!_e)continue;const Se=(Is=wo(_e,M.branchName))!=null?Is:mo(_e,M.branchName);if(!Se){const Lt=(ao=Ht.get(`${M.branchName}:${_e}`))!=null?ao:Ht.get(_e),Ye=!!Lt&&!Ge.has(Lt);!!Lt&&!_.has(Lt)&&(Ye?x.has(Lt):!0)||Wn(M.id,"Missing parent node"),pn({id:`${M.visualId}->${_e}`,kind:"ancestry",parent:_e,child:M.id,rendered:!1,reason:"missing parent node"});continue}if(X.commit.id===Se.commit.id){Wn(X.commit.id,"Parent and child resolve to the same node"),pn({id:`${Se.commit.id}->${X.commit.id}`,kind:"ancestry",parent:Se.commit.id,child:X.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ue=`${M.branchName}:${(Nn=Se.commit.visualId)!=null?Nn:Se.commit.id}->${X.commit.visualId}`;if(so.has(Ue)){Wn(Se.commit.id,"Duplicate connector key"),Wn(X.commit.id,"Duplicate connector key"),pn({id:Ue,kind:"ancestry",parent:Se.commit.id,child:X.commit.id,rendered:!1,reason:"duplicate connector key"});continue}so.add(Ue),qs.add(Se.commit.id);const et=Fn(Se,X),Vt=gn(Se,et,X),Wt=Mo(X);Pn.push({id:Ue,fromX:Vt.x,fromY:Vt.y,toX:Wt.x,toY:Wt.y,fromFace:Vt.face,toFace:Wt.face,zIndex:An(X.commit.branchName)}),pn({id:Ue,kind:"ancestry",parent:Se.commit.id,child:X.commit.id,rendered:!0,reason:et?"ancestry connector rendered":B?"horizontal ancestry rendered":"vertical ancestry rendered"}),Io.add(Se.commit.id),Io.add(X.commit.id)}const Ts=new Map;for(const M of fn){const X=(Ps=Ts.get(M.commit.branchName))!=null?Ps:[];X.push(M),Ts.set(M.commit.branchName,X)}for(const[M,X]of Ts.entries()){if(X.length<2)continue;const _e=[...X].sort((Se,Ue)=>{var et,Vt,Wt,Lt,Ye,cn,bn,D;return Se.row!==Ue.row?Se.row-Ue.row:Oi((Vt=(et=Se==null?void 0:Se.commit)==null?void 0:et.date)!=null?Vt:null)-Oi((Lt=(Wt=Ue==null?void 0:Ue.commit)==null?void 0:Wt.date)!=null?Lt:null)||((cn=(Ye=Se==null?void 0:Se.commit)==null?void 0:Ye.id)!=null?cn:"").localeCompare((D=(bn=Ue==null?void 0:Ue.commit)==null?void 0:bn.id)!=null?D:"")});for(let Se=1;Se<_e.length;Se+=1){const Ue=_e[Se-1],et=_e[Se];if(Ue.commit.id===et.commit.id)continue;const Vt=(Ro=et.commit.parentSha)!=null?Ro:null;if(Vt&&mo(Vt,et.commit.branchName))continue;const Wt=`chain:${M}:${Ue.commit.id}->${et.commit.id}`;if(so.has(Wt)){Wn(Ue.commit.id,"Duplicate branch chain connector"),Wn(et.commit.id,"Duplicate branch chain connector"),pn({id:Wt,kind:"ancestry",parent:Ue.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}so.add(Wt);const Lt=Fn(Ue,et),Ye=gn(Ue,Lt,et),cn=Mo(et);Pn.push({id:Wt,fromX:Ye.x,fromY:Ye.y,toX:cn.x,toY:cn.y,fromFace:Ye.face,toFace:cn.face,zIndex:An(et.commit.branchName)}),pn({id:Wt,kind:"ancestry",parent:Ue.commit.id,child:et.commit.id,rendered:!0,reason:"branch chain rendered"}),Io.add(Ue.commit.id),Io.add(et.commit.id)}}return{branchByName:R,laneByName:A,mainCommits:$,branchCommitsByLane:H,branchPreviewSets:V,allCommits:ce,clustersByBranch:ln,clusterKeyByCommitId:Ht,clusterKeyBySha:en,leadByClusterKey:q,clusterCounts:Ae,debugRows:st,branchDebugRows:bt,nodes:de,normalizedSearchQuery:He,matchingNodes:Re,matchingNodeIds:vt,focusedNode:Xe,checkedOutClusterKey:pt,defaultCollapsedClumps:Ge,visibleCommitsList:Nt,renderNodes:fn,visibleNodesBySha:mt,visibleNodeByClusterKey:Ut,pointFormatter:On,contentWidth:us,contentHeight:En,connectors:Pn,mergeConnectors:Po,connectorDecisions:nt,nodeWarnings:Xs,connectorParentShas:qs,branchStartShas:pi,branchOffNodeShas:gs,crossBranchOutgoingShas:Ms,commitIdsWithRenderedAncestry:Io,branchBaseCommitByName:ie,firstBranchCommitByName:Be,mergeDestinations:ft,mergeTargetBranchesBySourceBranchAndCommitSha:Oe}}const bw=8,vw=44,yy=120,xy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Yx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<bw){const H=d/_,V=h/_,P=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+H*P,c1y:n+V*P,c2x:i-H*P,c2y:a-V*P}}if(Math.min(p,g)<vw){const H=d/_,V=h/_,P=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+H*P,c1y:n+V*P,c2x:i-H*P,c2y:a-V*P}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),k=Math.min(120,g*.32),C=Math.min(160,g*.42),j=xy(c),B=xy(u);if(!(j==="v"&&B==="h"||j==="v"&&B==null&&g>=p||j==null&&B==="h"&&g>=p||j==="v"&&B==="v"||j==null&&B==null&&g>p)){const H=i,V=n;return{kind:"elbowH",cx:H,cy:V,s1c1x:t+x*w,s1c1y:n,s1c2x:H-x*S,s1c2y:V,s2c1x:H,s2c1y:V+b*k,s2c2x:i,s2c2y:a-b*C}}const A=t,$=a;return{kind:"elbowV",cx:A,cy:$,s1c1x:t,s1c1y:n+b*C,s1c2x:A,s1c2y:$-b*k,s2c1x:A+x*w,s2c1y:$,s2c2x:i-x*S,s2c2y:a}}function ww(t,n,i,a,c,u){const d=Yx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function by(t,n,i,a,c,u,d){const h=Yx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,k=a>=n?1:-1,C=h.cx-S*w,j=h.cy+k*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(C-S*w*.5,h.cy)} ${c(C,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,j)}`,`C ${c(h.cx,j+k*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const fp=2.25,ac=fp/2,Sw=.45,Cw=.01,la=fp,jd=10,kw=-100,vy=0,wy=.9,jw=.9,Sy=.001,Gh=.001,Mw=12,Tw=ps+48;function Bs(...t){return t.filter(Boolean).join(" ")}function Ew(t){return Math.max(Sw,Math.min(fp,t))}function Aw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Wx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Dw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function Nw(t,n,i,a,c,u,d){const h=ww(t,n,i,a,u,d),p=Dw(h);return Wx(c,p)}function Fx(t,n){return{left:t.x,top:t.y+n,right:t.x+ps,bottom:t.y+bl+Ys+4}}function Rw(t,n){const i=Tw,a=Math.max(120,Math.ceil(bl+Ys+4-n+24)),c=new Map;for(const u of t){const d=Fx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=g;w<=_;w++){const S=`${b},${w}`;let k=c.get(S);k||(k=new Set,c.set(S,k)),k.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Bw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=g;S<=_;S++){const k=d.get(`${w},${S}`);if(k)for(const C of k)x.add(C)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const k=Fx(S,a);Wx(n,k)&&b.add(w)}return b}function Cy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/la;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Lw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function ky(t,n,i){const a=n/la;return!Number.isFinite(a)||a<=0?t:Lw(t,100/a)}function jy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function fi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Am(t,n){if(n){const i=jy(n),a=jy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Kh(t,n){return t.pathExists===!1?!1:Am(t,n)}function Ow(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function zw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let g=null;const _=requestAnimationFrame(()=>{g=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(_),g!=null&&cancelAnimationFrame(g)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function $w({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:g,labelTopPx:_,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,iconScaleStyle:S,normalizedSearchQuery:k,matchingNodeIds:C,focusedNode:j,renderNodes:B,shouldRenderNode:R,manuallyOpenedClumps:A,manuallyClosedClumps:$,defaultCollapsedClumps:H,leadByClusterKey:V,clusterKeyByCommitId:P,clusterCounts:J,commitIdsWithRenderedAncestry:re,nodeWarnings:ie,connectorParentShas:Ce,branchStartShas:Be,branchOffNodeShas:Z,crossBranchOutgoingShas:ue,branchBaseCommitByName:z,branchStartAccentClass:te,connectorParentAccentClass:W,commitCornerRadiusPx:K,lineStrokeWidth:pe,pointFormatter:N,connectors:ae,mergeConnectors:oe,cullConnectorPath:ce,flushCameraReactTick:Ee,setManuallyOpenedClumps:$e,setManuallyClosedClumps:Ne,onCommitCardClick:ft,unpushedCommitShasSetByBranch:Oe,checkedOutHeadSha:at}){const[tt,St]=y.useState(new Set),Qe=y.useRef(null);y.useEffect(()=>{const q=new Set;J.forEach((Je,lt)=>{(A.has(lt)||!H.has(lt)&&!$.has(lt))&&q.add(lt)});const Ae=Qe.current;if(Ae==null){Qe.current=q;return}const Fe=[];if(q.forEach(Je=>{Ae.has(Je)||Fe.push(Je)}),Fe.length>0){St(lt=>{const st=new Set(lt);return Fe.forEach(bt=>st.add(bt)),st});const Je=window.setTimeout(()=>{St(lt=>{const st=new Set(lt);return Fe.forEach(bt=>st.delete(bt)),st})},260);return Qe.current=q,()=>{window.clearTimeout(Je)}}Qe.current=q},[J,H,$,A]);const Dt=(q,Ae)=>{const Fe=Ae.zIndex-q.zIndex;if(Fe!==0)return Fe;const Je=Math.min(q.fromY,q.toY),lt=Math.min(Ae.fromY,Ae.toY),st=Je-lt;return st!==0?st:q.id.localeCompare(Ae.id)},ln=oe.filter(q=>ce(q)).sort(Dt),Ht=ae.filter(q=>ce(q)).sort(Dt),en=B.filter(q=>R(q));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[en.map(q=>{var pt,Ge,Nt,Gt,Zt;const Ae=P.get(q.commit.visualId),Fe=Ae?A.has(Ae)||!H.has(Ae)&&!$.has(Ae):!1,Je=Ae?V.get(Ae)===q.commit.visualId:!1,lt=Ae!=null&&Fe&&!Je&&tt.has(Ae),st=Ae&&(pt=J.get(Ae))!=null?pt:1,bt=re.has(q.commit.id),ct=(Ge=ie.get(q.commit.id))!=null?Ge:[],rt=ct.length>0&&!bt,It=w.includes(q.commit.id),ot=q.commit.id==="WORKING_TREE"||q.commit.kind==="uncommitted",I=q.commit.kind==="stash"||q.commit.id.startsWith("STASH:"),ne=/^STASH:(\d+)$/.exec(q.commit.id),de=ne?`Stash:${ne[1]}`:null,be=I?q.commit.message.trim()&&q.commit.message.trim()!=="git-visualizer"?q.commit.message:"Stashed changes":q.commit.message,ye=q.commit.kind==="branch-created"&&q.commit.id.startsWith("BRANCH_HEAD:"),He=ot||((Gt=(Nt=Oe.get(q.commit.branchName))==null?void 0:Nt.has(q.commit.id))!=null?Gt:!1),Xe=(ot||at!=null&&q.commit.id===at)&&!It,vt=Xe?"text-[#38BDF2]":It?"text-[#158EFC]":"text-muted-foreground",Rt=Xe?{color:"#38BDF2"}:It?{color:"#158EFC"}:void 0;return l.jsxs(zw,{fadeIn:lt,dataCommitCard:"true",className:Bs("group absolute z-20 cursor-grab active:cursor-grabbing",k&&!C.has(q.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",k&&C.has(q.commit.id)?"scale-[1.01]":"",(j==null?void 0:j.commit.id)===q.commit.id?"z-30 scale-[1.015]":""),style:{left:q.x,top:q.y,width:ps,height:bl+Ys+4,overflow:"visible"},onClick:Pe=>ft(Pe,q),onPointerDown:Pe=>g(Pe,q),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${_}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Bs("min-w-0 h-4 flex-1 text-sm font-medium leading-none",vt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Rt,children:I&&de?de:q.commit.branchName?`${q.commit.branchName}/${q.commit.id.slice(0,7)}`:q.commit.id.slice(0,7)}),Je&&st>1?l.jsx("button",{type:"button",onMouseDown:Pe=>{Pe.stopPropagation()},onClick:Pe=>{if(Pe.stopPropagation(),Pe.preventDefault(),!Ae)return;!H.has(Ae)?($e(gt=>{if(!gt.has(Ae))return gt;const ht=new Set(gt);return ht.delete(Ae),ht}),Ne(gt=>{const ht=new Set(gt);return ht.has(Ae)?ht.delete(Ae):ht.add(Ae),ht})):(Ne(gt=>{if(!gt.has(Ae))return gt;const ht=new Set(gt);return ht.delete(Ae),ht}),$e(gt=>{const ht=new Set(gt);return ht.has(Ae)?ht.delete(Ae):ht.add(Ae),ht})),Ee()},className:Bs("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",vt),style:Rt,children:Fe?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${st}`}):null]})}),l.jsx("div",{className:Bs("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Xe&&!He&&!I&&!ye?"bg-[#EBF7FE]":It&&!He&&!I&&!ye?"bg-[#E5F0FF]":He||I||ye?"bg-transparent":"bg-[#F5F5F5]",I||ot||ye?"border-dashed":"",Z.has(q.commit.id)||Be.has(q.commit.id)||ue.has(q.commit.id)?te:Ce.has(q.commit.id)?W:((Zt=z.get(q.commit.branchName))==null?void 0:Zt.id)===q.commit.id?"border-amber-500":rt?"border-red-500":"",(k&&C.has(q.commit.id)&&!d,"")),style:{top:0,borderWidth:`${I||ot||ye?pe*(2/1.5):pe}px`,borderColor:Xe?"#38BDF2":It?"#158EFC":Fh,borderTopLeftRadius:0,borderTopRightRadius:`${K}px`,borderBottomRightRadius:`${K}px`,borderBottomLeftRadius:`${K}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Bs("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",vt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Rt,children:Je&&Fe?be:Je&&st>1?`${be} +${st-1}`:be}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:rt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:ct.join(`
`),children:"Broken ancestry"}):null})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Bs("text-sm font-medium",vt),style:Rt,children:["@",q.commit.author]}),l.jsx("div",{className:Bs("text-sm font-medium",vt),style:Rt,children:new Date(q.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(j==null?void 0:j.commit.id)===q.commit.id&&k?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:S,children:"Search result"}):null]})})]},q.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[ln.map(q=>{const{fromX:Ae,fromY:Fe,toX:Je,toY:lt}=q,st=by(Ae,Fe,Je,lt,N,q.fromFace,q.toFace);return l.jsx("path",{d:st,fill:"none",stroke:Fh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},q.id)}),Ht.map(q=>{const{fromX:Ae,fromY:Fe,toX:Je,toY:lt}=q,st=by(Ae,Fe,Je,lt,N,q.fromFace,q.toFace);return l.jsx("path",{d:st,fill:"none",stroke:Fh,strokeWidth:pe,strokeLinecap:"round",strokeLinejoin:"round"},q.id)})]})]})})})}function Iw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:x,onPushCurrentBranch:b,onPushAllBranches:w,onPushCommitTargets:S,onDeleteSelection:k,onCreateBranchFromNode:C,onMergeRefsIntoBranch:j,selectedPushTargets:B,selectedPushLabel:R,canPushCurrentBranch:A,pushCurrentBranchLabel:$,pushableRemoteBranchCount:H,deletableSelectionCount:V,canCreateRootBranch:P,selectedCommitTargetOption:J,mergeInProgress:re,setMergeTargetCommitSha:ie,worktrees:Ce,currentRepoPath:Be,worktreeMenuOpen:Z,setWorktreeMenuOpen:ue,onSwitchToWorktree:z,onRemoveWorktree:te,removeWorktreeInProgress:W,setCommitDialogOpen:K,setDeleteConfirmOpen:pe,setNewBranchDialogOpen:N}){const ae=t.length>0;return l.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("button",{type:"button",onClick:()=>K(!0),disabled:!g||i||ae||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||i||ae||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),l.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||ae||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),l.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||!A||ae||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":$}),l.jsx("button",{type:"button",onClick:()=>void(w==null?void 0:w()),disabled:!w||H<2||ae||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S(B.map(oe=>({branchName:oe.branchName,targetSha:oe.targetSha})))),disabled:!S||B.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:B.length>0?R:"Select commits to push",children:B.length>0?R:"Push selected"})]}),l.jsx("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:l.jsx("button",{type:"button",onClick:()=>pe(!0),disabled:!k||V===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"})}),l.jsx("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:l.jsx("button",{type:"button",onClick:()=>N(!0),disabled:!C&&!P||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})}),t.length>1&&J.options.length>0&&J.targetBranch&&j?l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),J.options.map(oe=>{const ce=oe.targetBranch===J.targetBranch;return l.jsx("button",{type:"button",onClick:()=>ie(oe.targetSha),className:Bs("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",ce?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:oe.targetBranch},`merge-${oe.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void j(J.sources,J.targetBranch),disabled:J.sources.length===0||re,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:re?"Merging...":"Confirm"})]}):null,Ce.length>0&&(z||te)?l.jsxs("div",{className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>ue(oe=>!oe),className:"rounded-lg border border-border bg-card/95 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[Ce.length," ",Ce.length===1?"Worktree":"Worktrees"]}),Z?l.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:Ce.map(oe=>{var ce;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:oe.path,children:Am(oe,Be)?Ow(oe.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(ce=oe.branchName)!=null?ce:"detached"," • ",oe.headSha.slice(0,7)]})]}),Am(oe,Be)?l.jsxs("div",{className:"flex items-center gap-1",children:[z?l.jsx("button",{type:"button",onClick:()=>{ue(!1),z(oe.path)},disabled:W||oe.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,te?l.jsx("button",{type:"button",onClick:()=>void te(oe.path,oe.isPrunable),disabled:W,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:W?"...":"Remove"}):null]}):null]},oe.path)})}):null]}):null]})}function Pw({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:h,renderedConnectorCount:p,totalConnectorCount:g,mapGridCullViewportInsetScreenPx:_,debugRows:x,branchDebugRows:b,connectorDecisions:w}){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:l.jsx("button",{type:"button",onClick:n,className:Bs("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?l.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${h}`,`Rendered connectors: ${p} / ${g}`,"",...x,...b,"",...w.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null]})}function Hw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:k,onNewBranchCreateModeChange:C,onNewBranchDialogClose:j,onNewBranchConfirm:B,selectedCommitCanCreateBranch:R,createBranchFromNodeInProgress:A}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:$=>i($.target.value),onKeyDown:$=>{($.metaKey||$.ctrlKey)&&$.key==="Enter"&&($.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map($=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:$},$))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>C("from-selected-node"),className:Bs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>C("new-root"),className:Bs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:$=>k($.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:j,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:B,disabled:!w.trim()||A||S==="from-selected-node"&&!R,className:Bs("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:A?"Creating...":"Create"})]})]})}):null]})}function Uw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(ac),c=y.useRef({panX:0,panY:0,zoom:ac}),u=y.useRef(null),d=y.useRef(ac),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(ac),[b,w]=y.useState(0),S=y.useRef(null),k=y.useRef(0),C=y.useCallback(()=>{const J=t.current;if(!J)return null;const re=J.getBoundingClientRect(),ie=getComputedStyle(J),Ce=Number.parseFloat(ie.borderLeftWidth)||0,Be=Number.parseFloat(ie.borderTopWidth)||0,Z=Number.parseFloat(ie.paddingLeft)||jd,ue=Number.parseFloat(ie.paddingTop)||jd;return{x:re.left+Ce+Z,y:re.top+Be+ue}},[t]),j=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(J=>J+1)}),k.current=performance.now()},[]),B=y.useCallback((J,re,ie)=>{const Ce=c.current;c.current={panX:J,panY:re,zoom:ie};const Be=n.current;if(Be&&(Be.style.transform=`translate3d(${J}px, ${re}px, 0) scale(${ie/la})`),Math.abs(d.current-ie)>Gh&&(d.current=ie,x(ie)),Math.abs(ie-Ce.zoom)>Gh){j();return}const z=performance.now()-k.current;if(z>=vy){j();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,j()},vy-z)},[j,n]),R=y.useRef(null),A=y.useCallback(()=>{u.current!=null||!R.current||(u.current=window.requestAnimationFrame(R.current))},[]),$=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),H=y.useCallback((J,re,ie)=>{i.current={x:J,y:re},a.current=ie,$(),A()},[$,A]);R.current=()=>{u.current=null;const J=c.current,re=i.current.x,ie=i.current.y,Ce=a.current,Be=Math.abs(re-J.panX)<=Sy?re:J.panX+(re-J.panX)*wy,Z=Math.abs(ie-J.panY)<=Sy?ie:J.panY+(ie-J.panY)*wy,ue=Math.abs(Ce-J.zoom)<=Gh?Ce:J.zoom+(Ce-J.zoom)*jw;B(Be,Z,ue),Be!==re||Z!==ie||ue!==Ce?R.current&&(u.current=window.requestAnimationFrame(R.current)):j()};const V=y.useCallback((J,re,ie)=>{const Ce=Ew(ie),Be=c.current,Z=C();if(!Z){H(i.current.x,i.current.y,Ce);return}const ue=J-Z.x,z=re-Z.y,te=Be.zoom/la,W=Ce/la,K=(ue-Be.panX)/te,pe=(z-Be.panY)/te;H(ue-K*W,z-pe*W,Ce)},[C,H]),P=y.useCallback(J=>{if(J.preventDefault(),J.ctrlKey||J.metaKey){const re=Math.exp(-J.deltaY*Cw);V(J.clientX,J.clientY,a.current*re);return}H(i.current.x-J.deltaX,i.current.y-J.deltaY,a.current)},[H,V]);return y.useLayoutEffect(()=>(B(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[B]),y.useLayoutEffect(()=>{const J=n.current;if(!J)return;const re=c.current;J.style.transform=`translate3d(${re.panX}px, ${re.panY}px, 0) scale(${re.zoom/la})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:C,flushCameraReactTick:j,syncCamera:H,handleWheel:P}}function Vw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function Yw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[k,C]=y.useState(null),j=y.useCallback(R=>{const A=t.current,$=i();if(!A||!$)return[];const H=A.getBoundingClientRect(),V=n.current.zoom/la;if(V<=0)return[];const P=[],J=R.left,re=R.left+R.width,ie=R.top,Ce=R.top+R.height;for(const Be of a){if(!c(Be))continue;const Z=$.x+n.current.panX+Be.x*V-H.left,ue=$.y+n.current.panY+Be.y*V-H.top,z=Z+ps*V,te=ue+(bl+Ys)*V;!(z<J||Z>re||te<ie||ue>Ce)&&P.push(Be.commit.id)}return P},[i,a,n,t,c]),B=y.useCallback(R=>{if(R.button!==0)return;const A=R.target;if(A!=null&&A.closest("[data-commit-card]")||A!=null&&A.closest("button, a, input, textarea, select"))return;const $=t.current;if(!$)return;R.preventDefault();const H=$.getBoundingClientRect(),V=R.clientX-H.left,P=R.clientY-H.top;d.current={startX:V,startY:P,currentX:V,currentY:P,additive:R.metaKey||R.ctrlKey},h.current=!1,p.current=R.metaKey||R.ctrlKey?w:[],_(!0),b({left:V,top:P,width:0,height:0})},[t,w]);return y.useEffect(()=>{const R=$=>{var ie;const H=d.current;if(!H)return;const V=t.current;if(!V)return;const P=V.getBoundingClientRect();H.currentX=$.clientX-P.left,H.currentY=$.clientY-P.top,!h.current&&(Math.abs(H.currentX-H.startX)>2||Math.abs(H.currentY-H.startY)>2)&&(h.current=!0);const J=Vw(H);b(J);const re=j(J);S(H.additive?Array.from(new Set([...p.current,...re])):Array.from(new Set(re))),H.additive||C((ie=re[re.length-1])!=null?ie:null)},A=()=>{if(d.current){const $=h.current;d.current=null,h.current=!1,_(!1),b(null),$||(S([]),C(null));return}u()};return window.addEventListener("mousemove",R),window.addEventListener("mouseup",A),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",A)}},[j,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:k,setMergeTargetCommitSha:C,startMarqueeDrag:B}}function My({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:k,mergeInProgress:C=!1,onPushAllBranches:j,onPushCurrentBranch:B,onPushCommitTargets:R,pushInProgress:A=!1,onDeleteSelection:$,deleteInProgress:H=!1,worktrees:V=[],currentRepoPath:P,onRemoveWorktree:J,removeWorktreeInProgress:re=!1,onSwitchToWorktree:ie,onStashLocalChanges:Ce,stashInProgress:Be=!1,stashDisabled:Z=!1,onCommitLocalChanges:ue,commitInProgress:z=!1,commitDisabled:te=!1,onStageAllChanges:W,stageInProgress:K=!1,onCreateBranchFromNode:pe,onCreateRootBranch:N,createBranchFromNodeInProgress:ae=!1,orientation:oe="horizontal",branchCommitPreviews:ce={},branchParentByName:Ee={},branchUniqueAheadCounts:$e={},gridSearchQuery:Ne="",gridSearchJumpToken:ft=0,gridSearchDirection:Oe="next",gridFocusSha:at=null,checkedOutRef:tt=null,onGridSearchResultCountChange:St,onGridSearchFocusChange:Qe,onInteractionChange:Dt,manuallyOpenedClumps:ln,manuallyClosedClumps:Ht,setManuallyOpenedClumps:en,setManuallyClosedClumps:q,layoutModel:Ae}){var xs,Zs,hs,Xn,Jt,hn,kn,Os,ko,Un,Hs,Js;const Fe=y.useRef(null),Je=y.useRef(null),lt=y.useRef(null),[st,bt]=y.useState(!1),[ct,rt]=y.useState(!1),[It,ot]=y.useState(""),[I,ne]=y.useState(!1),[de,be]=y.useState(!1),[ye,He]=y.useState(""),[Re,Xe]=y.useState("from-selected-node"),[vt,Rt]=y.useState(()=>new Set),[pt,Ge]=y.useState(()=>new Set),[Nt,Gt]=y.useState({}),Zt=y.useRef(!1),Pe=y.useRef(null),$t=y.useRef(null),gt=ln!=null?ln:vt,ht=Ht!=null?Ht:pt,fn=en!=null?en:Rt,mt=q!=null?q:Ge,[Ut,On]=y.useState(!1),[Yn,Qn]=y.useState(null),[Ls,Fs]=y.useState(null),{isCameraMoving:us,renderedZoom:En,cameraRenderTick:Pn,renderedCameraRef:sn,interactionIdleTimeoutRef:An,getTransformLayerOriginScreen:nt,flushCameraReactTick:pn,syncCamera:Io,handleWheel:Xs}=Uw({mapPadHostRef:Je,transformLayerRef:lt}),Wn=y.useMemo(()=>dp(t,d,ce,Ee),[t,d,ce,Ee]),qs=y.useMemo(()=>kd({lanes:Wn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:ce,branchParentByName:Ee,branchUniqueAheadCounts:$e,manuallyOpenedClumps:gt,manuallyClosedClumps:ht,isDebugOpen:Ut,gridSearchQuery:Ne,gridFocusSha:at,checkedOutRef:tt!=null?tt:null,orientation:oe,nodePositionOverrides:Nt}),[Wn,t,n,i,a,d,ce,Ee,$e,gt,ht,Ut,Ne,at,(xs=tt==null?void 0:tt.headSha)!=null?xs:null,(Zs=tt==null?void 0:tt.branchName)!=null?Zs:null,oe,Nt]),gs=Object.keys(Nt).length>0?qs:Ae!=null?Ae:qs,wo=y.useMemo(()=>kd({lanes:Wn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:ce,branchParentByName:Ee,branchUniqueAheadCounts:$e,manuallyOpenedClumps:gt,manuallyClosedClumps:ht,isDebugOpen:Ut,gridSearchQuery:Ne,gridFocusSha:at,checkedOutRef:tt!=null?tt:null,orientation:oe,nodePositionOverrides:Nt}),[Wn,t,n,i,a,d,ce,Ee,$e,gt,ht,Ut,Ne,at,(hs=tt==null?void 0:tt.headSha)!=null?hs:null,(Xn=tt==null?void 0:tt.branchName)!=null?Xn:null,oe,Nt]),{allCommits:so,clusterKeyByCommitId:oo,leadByClusterKey:Zn,clusterCounts:Mo,matchingNodes:js,matchingNodeIds:Fn,normalizedSearchQuery:gn,focusedNode:ds,defaultCollapsedClumps:mo,renderNodes:zn,visibleNodesBySha:Po,contentWidth:po,contentHeight:Ms,connectors:Ts,mergeConnectors:yn,connectorDecisions:Ci,nodeWarnings:Pi,commitIdsWithRenderedAncestry:ii,connectorParentShas:Ji,branchStartShas:Ko,branchOffNodeShas:ai,crossBranchOutgoingShas:Es,branchBaseCommitByName:To,pointFormatter:Hn}=gs,Eo=!!gn,Dn=En/la,as=y.useMemo(()=>({transform:`scale(${1/Dn})`,transformOrigin:"top left",width:`${100*Dn}%`,height:`${100*Dn}%`}),[Dn]),Ho=-(20/Dn),Ao=y.useMemo(()=>{const ke=new Map;for(const We of zn)ke.set(We.commit.visualId,We);return ke},[zn]),fs=y.useMemo(()=>Rw(zn,Ho),[zn,Ho]),Kt=ke=>{var xt;const We=ke.commit.id,ut=ke.commit.visualId;if(Eo&&Fn.has(We)||(ds==null?void 0:ds.commit.id)===We||Yn===null)return!0;if(!Yn.has(ut))return!1;const Ve=oo.get(ut);return Ve&&((xt=Mo.get(Ve))!=null?xt:1)>1&&(gt.has(Ve)||!mo.has(Ve)&&!ht.has(Ve)),!0},ki=1.5/Dn,Gs=Mw/Dn,ji=y.useMemo(()=>({transform:`scale(${1/Dn})`,transformOrigin:"center"}),[Dn]),Hi="border-slate-400/70",Uo="border-blue-500",As=y.useMemo(()=>new Map(t.map(ke=>[ke.name,ke])),[t]);y.useMemo(()=>new Set(t.filter(ke=>ke.commitsAhead===0&&!ke.name.startsWith("*")).map(ke=>ke.name)),[t]);const _i=y.useMemo(()=>{var We,ut;const ke=new Map;for(const Ve of zn){const xt=(We=ke.get(Ve.commit.id))!=null?We:new Set;xt.add(Ve.commit.branchName),ke.set(Ve.commit.id,xt)}for(const Ve of i){const xt=(ut=ke.get(Ve.fullSha))!=null?ut:new Set;Ve.branch&&xt.add(Ve.branch),ke.set(Ve.fullSha,xt)}return ke},[zn,i,d]),_o=y.useMemo(()=>new Map(Object.entries(c).map(([ke,We])=>[ke,new Set(We)])),[c]),Mn=y.useCallback(()=>{An.current,pn()},[pn,An]),{isMarqueeSelecting:Ks,marqueeRect:Do,selectedCommitShas:Ds,setSelectedCommitShas:Qs,mergeTargetCommitSha:on,setMergeTargetCommitSha:Ns,startMarqueeDrag:So}=Yw({scrollContainerRef:Fe,renderedCameraRef:sn,getTransformLayerOriginScreen:nt,renderNodes:zn,shouldRenderNode:Kt,onPointerReleaseNoMarquee:Mn}),Vo=y.useMemo(()=>new Set(zn.map(ke=>ke.commit.id)),[zn]),xn=y.useMemo(()=>Ds.filter(ke=>Vo.has(ke)),[Ds,Vo]),Qo=y.useCallback((ke,We)=>{var xt;if(!We)return!1;if(((xt=ce[ke])!=null?xt:[]).some(Tt=>fi(Tt.fullSha,We)||fi(Tt.sha,We)))return!0;const Ve=As.get(ke);return!!(Ve!=null&&Ve.headSha&&fi(Ve.headSha,We))},[ce,As]),ys=(Jt=tt==null?void 0:tt.branchName)!=null?Jt:null,Yo=(hn=tt==null?void 0:tt.headSha)!=null?hn:null,No=ys==null,Wo=y.useMemo(()=>{if(!at)return null;const ke=zn.filter(We=>We.commit.id===at);return ke.length===0?null:ke.length===1||!ds?ke[0]:ke.reduce((We,ut)=>{const Ve=(We.x-ds.x)**2+(We.y-ds.y)**2;return(ut.x-ds.x)**2+(ut.y-ds.y)**2<Ve?ut:We})},[at,zn,ds]),Zo=y.useCallback((ke,We,ut)=>{for(const Ve of V){if(!Kh(Ve,P))continue;if(Ve.branchName){if(Ve.branchName===ke&&fi(Ve.headSha,We))return Ve;continue}if(!fi(Ve.headSha,We)&&!fi(Ve.headSha,ut))continue;if(Ve.parentSha&&Qo(ke,Ve.parentSha)||Qo(ke,Ve.headSha))return Ve;const xt=As.get(ke);if(xt&&fi(xt.headSha,Ve.headSha)||ke===d&&i.some(Tt=>fi(Tt.fullSha,Ve.headSha)))return Ve}return null},[V,P,Qo,As,d,i]),Jn=y.useCallback(ke=>{for(const We of V)if(Kh(We,P)&&We.branchName===ke)return We;return null},[V,P]),io=y.useCallback((ke,We)=>{for(const ut of V)if(Kh(ut,P)&&(fi(ut.headSha,ke)||fi(ut.headSha,We)))return ut;return null},[V,P]),Co=y.useCallback(ke=>{var We;return Array.from((We=_i.get(ke))!=null?We:[])},[_i]),go=y.useMemo(()=>{var xt,Tt,jt,Ot;const ke=new Map;for(const mn of xn){const ms=Co(mn);if(ms.length===0)continue;const yo=(xt=ms.find(zs=>zs!==d))!=null?xt:ms[0],Fo=xn.filter(zs=>zs!==mn).filter(zs=>!new Set(Co(zs)).has(yo));ke.set(yo,{targetSha:mn,targetBranch:yo,sourceRefs:Fo})}const We=Array.from(ke.values()),ut=on?We.find(mn=>{var ms;return mn.targetSha===on||mn.targetBranch===((ms=Co(on)[0])!=null?ms:"")}):null,Ve=(Tt=ut!=null?ut:We[We.length-1])!=null?Tt:null;return{options:We,selected:Ve,targetBranch:(jt=Ve==null?void 0:Ve.targetBranch)!=null?jt:null,sources:(Ot=Ve==null?void 0:Ve.sourceRefs)!=null?Ot:[]}},[xn,Co,d,on]),$s=y.useMemo(()=>{const ke=[...ys===d?[{name:d,headSha:Yo!=null?Yo:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(We=>!We.name.startsWith("*")&&We.unpushedCommits>0&&We.remoteSyncStatus!=="on-github").map(We=>[We.name,We]);return new Map(ke)},[t,ys,Yo,d,a.length]),Is=y.useMemo(()=>{const ke=Ve=>{var Tt;const xt=Co(Ve).filter(jt=>$s.has(jt));return xt.length===0?null:xt.length===1?xt[0]:ys&&xt.includes(ys)?ys:(Tt=xt.find(jt=>jt!==d))!=null?Tt:xt[0]},We=Ve=>{var xt;return Ve===d?a.map(Tt=>{var jt,Ot;return{fullSha:Tt.fullSha,sha:Tt.sha,parentSha:(jt=Tt.parentSha)!=null?jt:null,message:Tt.message,author:Tt.author,date:Tt.date,kind:(Ot=Tt.kind)!=null?Ot:"commit"}}):(xt=ce[Ve])!=null?xt:[]},ut=new Map;for(const Ve of xn){const xt=ke(Ve);if(!xt)continue;const Tt=$s.get(xt);if(!Tt)continue;const jt=We(xt).slice(0,Tt.unpushedCommits),Ot=jt.findIndex(ms=>ms.fullSha===Ve);if(Ot===-1)continue;const mn=ut.get(xt);(!mn||Ot<mn.targetIndex)&&ut.set(xt,{branchName:xt,targetSha:Ve,targetIndex:Ot,commitCount:jt.length-Ot})}return Array.from(ut.values())},[xn,Co,$s,ys,d,a,ce]),ao=y.useMemo(()=>Array.from(new Set(xn.map(ke=>/^STASH:(\d+)$/.exec(ke)).filter(ke=>!!ke).map(ke=>parseInt(ke[1],10)))).sort((ke,We)=>ke-We),[xn]),Nn=xn.includes("WORKING_TREE"),Ps=(Nn?1:0)+ao.length,Ro=[...Nn?["Uncommitted changes"]:[],...ao.map(ke=>`Stash ${ke+1}`)],M=$s.size,X=!No&&!!ys&&$s.has(ys),_e=ys?`Push ${ys}`:"Push current branch",Se=Is.length===1?Is[0].commitCount>1?`Push ${Is[0].commitCount} commits on ${Is[0].branchName}`:`Push ${Is[0].targetSha.slice(0,7)} on ${Is[0].branchName}`:`Push ${Is.length} selected ranges`;y.useEffect(()=>{Dt==null||Dt(us||Ks)},[us,Ks,Dt]),y.useEffect(()=>{St==null||St(gn?js.length:null)},[js.length,gn,St]);const Ue=y.useMemo(()=>{var mn,ms,yo,Fo,zs,E;if(!gn)return null;const ke=gn,We=t.map(O=>O.name),ut=We.find(O=>O.toLowerCase()===ke),Ve=ut!=null?ut:We.find(O=>O.toLowerCase().startsWith(ke)),Tt=Ve!=null?Ve:We.find(O=>O.toLowerCase().includes(ke));if(!Tt)return null;const jt=(mn=t.find(O=>O.name===Tt))!=null?mn:null;if(jt!=null&&jt.headSha)return jt.headSha;const Ot=(ms=ce[Tt])!=null?ms:[];return Ot.length>0?(Fo=(yo=Ot[0])==null?void 0:yo.fullSha)!=null?Fo:null:Tt===d&&(E=(zs=i[0])==null?void 0:zs.fullSha)!=null?E:null},[gn,t,ce,d,i]);y.useEffect(()=>{var Ve,xt;if(!gn){Qe==null||Qe(null);return}if(ft<=0)return;if(Ue){Qe==null||Qe(Ue);return}if(js.length===0){Qe==null||Qe(null);return}const ke=at?js.findIndex(Tt=>fi(Tt.commit.id,at)):-1,ut=ke===-1?Oe==="prev"?js.length-1:0:(ke+(Oe==="prev"?-1:1)+js.length)%js.length;Qe==null||Qe((xt=(Ve=js[ut])==null?void 0:Ve.commit.id)!=null?xt:null)},[js,gn,Qe,Ue,ft,Oe,at]),y.useLayoutEffect(()=>{if(!at)return;const ke=Fe.current,We=Wo;if(!ke||!We)return;const ut=nt();if(!ut)return;const Ve=ke.getBoundingClientRect(),xt=sn.current.zoom,Tt=xt/la,jt=We.x+ps/2,Ot=We.y+bl+Ys/2,mn=Ve.left+Ve.width/2,ms=Ve.top+Ve.height/2;Io(mn-ut.x-jt*Tt,ms-ut.y-Ot*Tt,xt)},[at,ft,Wo,nt,Io,sn]);const et=(ko=(Os=Ls==null?void 0:Ls.width)!=null?Os:(kn=Fe.current)==null?void 0:kn.clientWidth)!=null?ko:0,Vt=(Js=(Hs=Ls==null?void 0:Ls.height)!=null?Hs:(Un=Fe.current)==null?void 0:Un.clientHeight)!=null?Js:0,Wt=et>0&&Vt>0?Cy(et,Vt,sn.current,{innerPaddingPx:jd}):null,Lt=Wt!=null?ky(Wt,sn.current.zoom):null,Ye=ke=>{if(!Lt)return!0;const{fromX:We,fromY:ut,toX:Ve,toY:xt}=ke;return Nw(We,ut,Ve,xt,Lt,ke.fromFace,ke.toFace)};y.useLayoutEffect(()=>{var jt;const ke=Fe.current;if(!ke||ke.clientWidth<=0||ke.clientHeight<=0)return;const We=ke.clientWidth,ut=ke.clientHeight;Fs(Ot=>(Ot==null?void 0:Ot.width)===We&&(Ot==null?void 0:Ot.height)===ut?Ot:{width:We,height:ut});const Ve=Cy(We,ut,sn.current,{innerPaddingPx:jd});if(!Ve){Qn(Ot=>Ot===null?Ot:null);return}const xt=ky(Ve,sn.current.zoom),Tt=Bw(fs,xt,Ao,Ho);for(const Ot of zn){const mn=oo.get(Ot.commit.visualId);if(!mn||((jt=Mo.get(mn))!=null?jt:1)<=1)continue;(gt.has(mn)||!mo.has(mn)&&!ht.has(mn))&&Tt.add(Ot.commit.visualId)}Qn(Ot=>Aw(Ot,Tt)?Ot:Tt)},[En,ft,at,us,Pn,gt,ht,mo,oo,Mo,zn,Ls,fs,Ao,Ho]),y.useLayoutEffect(()=>{const ke=Fe.current;if(!ke)return;const We=()=>{const Ve=ke.clientWidth,xt=ke.clientHeight;Ve<=0||xt<=0||Fs(Tt=>(Tt==null?void 0:Tt.width)===Ve&&(Tt==null?void 0:Tt.height)===xt?Tt:{width:Ve,height:xt})};We();const ut=new ResizeObserver(We);return ut.observe(ke),()=>ut.disconnect()},[so.length]);const cn=zn.filter(ke=>Kt(ke)).length,bn=yn.filter(ke=>Ye(ke)).length,D=Ts.filter(ke=>Ye(ke)).length,F=y.useCallback((ke,We)=>{if(Zt.current){ke.preventDefault(),ke.stopPropagation();return}ke.stopPropagation();const ut=We.commit.id;if(ke.shiftKey?(Qs(jt=>jt.includes(ut)?jt.filter(Ot=>Ot!==ut):[...jt,ut]),Ns(ut)):(Qs(jt=>jt.includes(ut)?[]:[ut]),Ns(jt=>jt===ut?null:ut)),!(ke.metaKey||ke.ctrlKey||ke.detail>=2)||ut==="WORKING_TREE")return;const xt=ut.length>=40?ut.slice(0,7):ut;let Tt=null;if(We.commit.branchName?(Tt=Zo(We.commit.branchName,ut,xt),Tt||(Tt=Jn(We.commit.branchName))):Tt=io(ut,xt),Tt&&ie){ie(Tt.path);return}h==null||h({commitSha:ut})},[io,Zo,Jn,h,ie]),Q=y.useCallback((ke,We)=>{var Ot,mn,ms,yo,Fo;if(ke.button!==0)return;const ut=ke.target;if(ut!=null&&ut.closest("button, a, input, textarea, select"))return;ke.stopPropagation(),ke.preventDefault(),Zt.current=!1,ke.currentTarget.setPointerCapture(ke.pointerId);const Ve=(Ot=Nt[We.commit.visualId])!=null?Ot:Nt[We.commit.id];Pe.current={nodeId:We.commit.visualId,startX:ke.clientX,startY:ke.clientY,baseX:(mn=Ve==null?void 0:Ve.x)!=null?mn:We.x,baseY:(ms=Ve==null?void 0:Ve.y)!=null?ms:We.y,moved:!1,pendingX:(yo=Ve==null?void 0:Ve.x)!=null?yo:We.x,pendingY:(Fo=Ve==null?void 0:Ve.y)!=null?Fo:We.y};const xt=()=>{$t.current=null;const zs=Pe.current;zs&&Gt(E=>({...E,[zs.nodeId]:{x:zs.pendingX,y:zs.pendingY}}))},Tt=zs=>{const E=Pe.current;if(!E)return;const O=sn.current.zoom/la,G=O>0?1/O:1,U=(zs.clientX-E.startX)*G,se=(zs.clientY-E.startY)*G;(Math.abs(U)>2||Math.abs(se)>2)&&(E.moved=!0),E.moved&&(Zt.current=!0),E.pendingX=E.baseX+U,E.pendingY=E.baseY+se,$t.current==null&&($t.current=window.requestAnimationFrame(xt))},jt=()=>{window.removeEventListener("pointermove",Tt),window.removeEventListener("pointerup",jt),window.removeEventListener("pointercancel",jt),$t.current!=null&&(window.cancelAnimationFrame($t.current),$t.current=null,xt());try{ke.currentTarget.releasePointerCapture(ke.pointerId)}catch{}const zs=Pe.current;Pe.current=null,zs&&window.setTimeout(()=>{Zt.current=!1},0)};window.addEventListener("pointermove",Tt),window.addEventListener("pointerup",jt),window.addEventListener("pointercancel",jt)},[Nt]),fe=y.useCallback(async()=>{if(!ue)return;await ue(It)&&(rt(!1),ot(""))},[ue,It]),Ze=y.useCallback(async()=>{$&&(await $({branchNames:[],discardUncommittedChanges:Nn,stashIndices:ao}),ne(!1),Qs([]),Ns(null))},[$,Nn,ao]),yt=y.useCallback(async()=>{const ke=ye.trim();if(ke){if(Re==="new-root"){if(!N)return;await N(ke)}else{if(!pe||xn.length!==1)return;const We=xn[0];if(!(We==="WORKING_TREE"||We.startsWith("STASH:")))return;await pe(We,ke)}be(!1),He(""),Xe("from-selected-node"),Qs([]),Ns(null)}},[Re,ye,pe,N,xn]),dt=xn.length===1&&(xn[0]==="WORKING_TREE"||xn[0].startsWith("STASH:")),Xt=!!N;return y.useEffect(()=>{if(de){if(!dt&&Xt){Xe("new-root");return}dt&&Xe("from-selected-node")}},[Xt,de,dt]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[l.jsx(Pw,{isOpen:Ut,onToggle:()=>On(ke=>!ke),onClose:()=>On(!1),visibleBounds:Lt,renderedNodeCount:cn,totalNodeCount:zn.length,renderedMergeConnectorCount:bn,totalMergeConnectorCount:yn.length,renderedConnectorCount:D,totalConnectorCount:Ts.length,mapGridCullViewportInsetScreenPx:kw,debugRows:wo.debugRows,branchDebugRows:wo.branchDebugRows,connectorDecisions:Ci}),so.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx($w,{scrollContainerRef:Fe,mapPadHostRef:Je,transformLayerRef:lt,isMarqueeSelecting:Ks,contentWidth:po,contentHeight:Ms,isCameraMoving:us,onWheel:Xs,onMouseDown:So,onNodePointerDown:Q,labelTopPx:Ho,inverseZoomStyle:as,displayZoom:Dn,iconScaleStyle:ji,selectedVisibleCommitShas:xn,normalizedSearchQuery:gn,matchingNodeIds:Fn,focusedNode:Wo,renderNodes:zn,shouldRenderNode:Kt,manuallyOpenedClumps:gt,manuallyClosedClumps:ht,defaultCollapsedClumps:mo,leadByClusterKey:Zn,clusterKeyByCommitId:oo,clusterCounts:Mo,commitIdsWithRenderedAncestry:ii,nodeWarnings:Pi,connectorParentShas:Ji,branchStartShas:Ko,branchOffNodeShas:ai,crossBranchOutgoingShas:Es,branchBaseCommitByName:To,branchStartAccentClass:Uo,connectorParentAccentClass:Hi,commitCornerRadiusPx:Gs,lineStrokeWidth:ki,pointFormatter:Hn,connectors:Ts,mergeConnectors:yn,cullConnectorPath:Ye,flushCameraReactTick:pn,setManuallyOpenedClumps:fn,setManuallyClosedClumps:mt,onCommitCardClick:F,unpushedCommitShasSetByBranch:_o,checkedOutHeadSha:Yo}),Do&&Ks?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Do.left,top:Do.top,width:Do.width,height:Do.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Iw,{selectedVisibleCommitShas:xn,commitInProgress:z,commitDisabled:te,stageInProgress:K,stashInProgress:Be,stashDisabled:Z,pushInProgress:A,deleteInProgress:H,createBranchFromNodeInProgress:ae,onCommitLocalChanges:ue,onStageAllChanges:W?()=>void W():void 0,onStashLocalChanges:Ce,onPushCurrentBranch:B,onPushAllBranches:j,onPushCommitTargets:R,onDeleteSelection:$,onCreateBranchFromNode:pe,onMergeRefsIntoBranch:k,selectedPushTargets:Is,selectedPushLabel:Se,canPushCurrentBranch:X,pushCurrentBranchLabel:_e,pushableRemoteBranchCount:M,deletableSelectionCount:Ps,canCreateRootBranch:Xt,selectedCommitTargetOption:go,mergeInProgress:C,mergeTargetCommitSha:on,setMergeTargetCommitSha:Ns,worktrees:V,currentRepoPath:P,worktreeMenuOpen:st,setWorktreeMenuOpen:bt,onSwitchToWorktree:ie,onRemoveWorktree:J,removeWorktreeInProgress:re,setCommitDialogOpen:rt,setDeleteConfirmOpen:ne,setNewBranchDialogOpen:be}),l.jsx(Hw,{commitDialogOpen:ct,commitMessageDraft:It,onCommitMessageDraftChange:ot,onCommitDialogClose:()=>rt(!1),onCommitConfirm:()=>void fe(),commitInProgress:z,deleteConfirmOpen:I,deleteSelectionItems:Ro,onDeleteConfirmClose:()=>ne(!1),onDeleteConfirm:()=>void Ze(),deleteInProgress:H,deletableSelectionCount:Ps,newBranchDialogOpen:de,newBranchName:ye,newBranchCreateMode:Re,onNewBranchNameChange:He,onNewBranchCreateModeChange:Xe,onNewBranchDialogClose:()=>be(!1),onNewBranchConfirm:()=>void yt(),selectedCommitCanCreateBranch:dt,createBranchFromNodeInProgress:ae})]})}function Ww({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchDirection:k="next",gridFocusSha:C=null,onGridSearchResultCountChange:j,onGridSearchFocusChange:B,view:R="time",isLoading:A=!1,scrollRequest:$,focusedErrorBranch:H,checkedOutRef:V=null,mapTopInsetPx:P=0,onMergeRefsIntoBranch:J,mergeInProgress:re=!1,onPushAllBranches:ie,onPushCurrentBranch:Ce,onPushCommitTargets:Be,pushInProgress:Z=!1,onDeleteSelection:ue,deleteInProgress:z=!1,worktrees:te=[],currentRepoPath:W,onRemoveWorktree:K,removeWorktreeInProgress:pe=!1,onSwitchToWorktree:N,onStashLocalChanges:ae,stashInProgress:oe=!1,stashDisabled:ce=!1,onCommitLocalChanges:Ee,commitInProgress:$e=!1,commitDisabled:Ne=!1,onStageAllChanges:ft,stageInProgress:Oe=!1,onCreateBranchFromNode:at,onCreateRootBranch:tt,createBranchFromNodeInProgress:St=!1,onMoveNodeBackToBranch:Qe,orientation:Dt="horizontal",onInteractionChange:ln,manuallyOpenedClumps:Ht,manuallyClosedClumps:en,setManuallyOpenedClumps:q,setManuallyClosedClumps:Ae,layoutModel:Fe}){const Je=new Set(u.map(rt=>rt.branchName)),lt=14*864e5,st=Date.now();function bt(rt){return Je.has(rt.name)||st-new Date(rt.lastCommitDate).getTime()<=lt}const ct=t.filter(rt=>rt.status==="stale"&&bt(rt)).sort((rt,It)=>new Date(It.lastCommitDate).getTime()-new Date(rt.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:R==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(My,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchDirection:k,gridFocusSha:C,onGridSearchResultCountChange:j,onGridSearchFocusChange:B,staleBranches:ct,isLoading:A,scrollRequest:$,focusedErrorBranch:H,checkedOutRef:V,mapTopInsetPx:P,onMergeRefsIntoBranch:J,mergeInProgress:re,onPushAllBranches:ie,onPushCurrentBranch:Ce,onPushCommitTargets:Be,pushInProgress:Z,onDeleteSelection:ue,deleteInProgress:z,worktrees:te,currentRepoPath:W,onRemoveWorktree:K,removeWorktreeInProgress:pe,onSwitchToWorktree:N,onStashLocalChanges:ae,stashInProgress:oe,stashDisabled:ce,onCommitLocalChanges:Ee,commitInProgress:$e,commitDisabled:Ne,onStageAllChanges:ft,stageInProgress:Oe,onCreateBranchFromNode:at,onCreateRootBranch:tt,createBranchFromNodeInProgress:St,onMoveNodeBackToBranch:Qe,orientation:Dt,onInteractionChange:ln,manuallyOpenedClumps:Ht,manuallyClosedClumps:en,setManuallyOpenedClumps:q,setManuallyClosedClumps:Ae,layoutModel:Fe})}):R==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(My,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchDirection:k,gridFocusSha:C,checkedOutRef:V,onGridSearchResultCountChange:j,onGridSearchFocusChange:B,onInteractionChange:ln,manuallyOpenedClumps:Ht,manuallyClosedClumps:en,setManuallyOpenedClumps:q,setManuallyClosedClumps:Ae,layoutModel:Fe,orientation:Dt})}):null})}const Sr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Fw(t,n,i,a){if(!t)return null;const c=d=>Sr(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(g=>c(g.fullSha)||c(g.sha)))return d;return null}function Xw(t,n,i,a,c,u){var ie,Ce,Be,Z,ue,z;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(Ce=(ie=i[0])==null?void 0:ie.fullSha)!=null?Ce:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(te=>({name:te.name,headSha:te.headSha,isDefault:!1}))],x=d?_.filter(te=>Sr(te.headSha,d)):[],b=Fw(d,i,a,u),w=b?_.find(te=>te.name===b):void 0,S=(Z=(Be=x.find(te=>te.isDefault))!=null?Be:x[0])!=null?Z:w,k=!!(S&&d&&Sr(S.headSha,d)),C=S&&!S.isDefault?n.find(te=>te.name===S.name):void 0,j=(()=>{var W;if(!d)return null;const te=i.find(K=>Sr(K.fullSha,d)||Sr(K.sha,d));if(te!=null&&te.date)return te.date;if(C){const K=((W=a[C.name])!=null?W:[]).find(pe=>Sr(pe.fullSha,d)||Sr(pe.sha,d));if(K!=null&&K.date)return K.date}return null})(),B=j?new Date(j).getTime():Number.NaN,R=Date.now(),A=Number.isFinite(B)?Math.max(R,B+1+t.index):R+t.index,$=new Date(A).toISOString(),H=t.message.trim(),V={fullSha:h,sha:p,parentSha:d,message:H||p,author:"You",date:$,kind:"stash"},P={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(ue=C==null?void 0:C.name)!=null?ue:u,message:H||p,author:"You",date:$,kind:"stash"};if(k&&(S!=null&&S.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,P]};if(k&&C)return{branches:n.map(W=>W.name===C.name?{...W,commitsAhead:W.commitsAhead+1,unpushedCommits:W.unpushedCommits+1,lastCommitDate:$,headSha:h}:W),directCommits:i,branchCommitPreviews:{...a,[C.name]:[V,...a[C.name]||[]]},branchUniqueAheadCounts:{...c,[C.name]:Math.max(0,(z=Object.prototype.hasOwnProperty.call(c,C.name)?c[C.name]:C.commitsAhead)!=null?z:0)+1}};const J=`*Stash:${t.index}`;return{branches:[{name:J,commitsAhead:1,commitsBehind:0,lastCommitDate:$,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(S==null?void 0:S.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[J]:[V]},branchUniqueAheadCounts:{...c,[J]:1}}}function Xx(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=Xw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function qw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:g,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var V,P,J,re;const k=Xx(g,t,i,u,h,c);let C=k.branches,j=k.directCommits,B=k.branchCommitPreviews,R=k.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ie=p.headSha||p.parentSha||null,Ce=(P=(V=j[0])==null?void 0:V.fullSha)!=null?P:null,Be=(Ne,ft)=>!Ne||!ft?!1:Ne===ft||Ne.startsWith(ft)||ft.startsWith(Ne),Z=[{name:c,headSha:Ce!=null?Ce:"",isDefault:!0},...C.map(Ne=>({name:Ne.name,headSha:Ne.headSha,isDefault:!1}))],ue=p.branchName?Z.find(Ne=>Ne.name===p.branchName):void 0,z=ie?Z.filter(Ne=>Be(Ne.headSha,ie)):[],te=(J=ue!=null?ue:z.find(Ne=>Ne.isDefault))!=null?J:z[0],W=!!(te&&ie&&Be(te.headSha,ie)),K=te&&!te.isDefault?C.find(Ne=>Ne.name===te.name):void 0,pe=(()=>{var ft;if(!ie)return null;const Ne=j.find(Oe=>Be(Oe.fullSha,ie)||Be(Oe.sha,ie));if(Ne!=null&&Ne.date)return Ne.date;if(K){const Oe=((ft=B[K.name])!=null?ft:[]).find(at=>Be(at.fullSha,ie)||Be(at.sha,ie));if(Oe!=null&&Oe.date)return Oe.date}return null})(),N=pe?new Date(pe).getTime():Number.NaN,ae=Date.now(),oe=Number.isFinite(N)?Math.max(ae,N+1):ae,ce=new Date(oe).toISOString(),Ee={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,message:"Local uncommitted changes",author:"You",date:ce,kind:"uncommitted"},$e={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:ce,kind:"uncommitted"};if(W&&(te!=null&&te.isDefault))j=[...j,$e];else if(W&&K)C=C.map(Ne=>Ne.name===K.name?{...Ne,commitsAhead:Ne.commitsAhead+1,unpushedCommits:Ne.unpushedCommits+1,lastCommitDate:ce,headSha:"WORKING_TREE"}:Ne),B={...B,[K.name]:[Ee,...B[K.name]||[]]},R={...R,[K.name]:Math.max(0,(re=Object.prototype.hasOwnProperty.call(R,K.name)?R[K.name]:K.commitsAhead)!=null?re:0)+1};else{const Ne={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:ce,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:ie!=null?ie:void 0,parentBranch:(te==null?void 0:te.name)||p.branchName||c};C=[Ne,...C],B={...B,[Ne.name]:[Ee]},R={...R,[Ne.name]:1}}}const A={...d};A[c]=null;const $=dp(C,c,B,A),H=kd({lanes:$,branches:C,mergeNodes:n,directCommits:j,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:B,branchParentByName:A,branchUniqueAheadCounts:R,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:C,enrichedBranchCommitPreviews:B,enrichedBranchUniqueAheadCounts:R,enrichedDirectCommits:j,sharedGridLayoutModel:H}}function Ty(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function Ey(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ay(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Dm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:C,onSelectCommit:j,onSelectBranch:B}){var N,ae;if(_.has(t)||!a.get(t))return null;const A=(N=u.get(t))!=null?N:[],$=A.length>0,H=y.useMemo(()=>{var oe;return[...(oe=c[t])!=null?oe:[]]},[c,t]),V=x&&H.length>0,P=x,J=$||V,re=h.has(t),ie=P?H:[],Ce=re&&ie.length>0,Be=g===t,Z=new Set(_);Z.add(t);const ue="top-[-0.2rem] h-4.5 w-[10px]",z="rounded-bl-[7px]",te="left-[0.65rem]",W=new Map,K=[];for(const oe of A){const ce=d.get(oe);if(ce){const Ee=ie.findIndex($e=>fi($e.fullSha,ce)||fi($e.sha,ce));if(Ee>=0){const $e=(ae=W.get(Ee))!=null?ae:[];$e.push(oe),W.set(Ee,$e);continue}}K.push(oe)}const pe=y.useMemo(()=>{if(!x||ie.length===0)return[];const oe=[];let ce=[],Ee=null;const $e=()=>{if(ce.length===0)return;const Ne=ce[ce.length-1],ft=`sidebar-single-${t}-${Ne.fullSha}`;oe.push({key:Ee!=null?Ee:ft,commits:ce,count:ce.length,lead:Ne}),ce=[],Ee=null};return ie.forEach(Ne=>{var Oe;const ft=(Oe=S.get(`${t}:${Ne.fullSha}`))!=null?Oe:null;if(ce.length===0){ce=[Ne],Ee=ft;return}if(ft===Ee){ce.push(Ne);return}$e(),ce=[Ne],Ee=ft}),$e(),oe},[t,x,ie,S]);return l.jsxs("li",{className:Bs("relative",n>0?"pl-4":"pl-0",n===0&&!i?re?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Bs("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",z,te,ue)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Bs("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",te)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{J&&p(t),B==null||B(t)},className:Bs("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",Be?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[J?l.jsx("span",{className:Bs("inline-block text-[10px] text-muted-foreground transition-transform",re?"rotate-90":""),children:"▶"}):null,l.jsx("span",{className:"min-w-0 break-words",children:l.jsx("span",{className:Bs(Be?"font-medium text-foreground":"font-normal"),children:t})})]})}),Ce?l.jsx("ul",{className:"relative space-y-1 pl-4",children:pe.map(oe=>{const ce=oe.count>1&&!k(oe.key);return(ce?[oe.lead]:oe.commits).map($e=>{var Oe;const Ne=ie.findIndex(at=>at.fullSha===$e.fullSha),ft=b($e.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>j==null?void 0:j($e.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:$e.message,children:[l.jsx("span",{className:"block truncate",children:$e.message}),ft.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:ft.map(at=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:at})]},`${$e.fullSha}:${at}`))}):null]}),oe.count>1&&$e.fullSha===oe.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${oe.lead.fullSha}`,onClick:()=>C(oe.key,`${t}:${oe.lead.fullSha}`),className:Bs("shrink-0 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",ce?"":"min-w-[2ch] text-center"),children:ce?`+${Math.max(1,oe.count-1)}`:"−"}):null]}),(Oe=W.get(Ne))!=null&&Oe.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:W.get(Ne).map((at,tt,St)=>l.jsx(Dm,{branchName:at,depth:n+1,isLast:tt===St.length-1&&K.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:at,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:C,onSelectCommit:j,onSelectBranch:B},at))}):null]},`${t}:${$e.fullSha}`)})})}):null,$&&re&&K.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:K.map((oe,ce)=>l.jsx(Dm,{branchName:oe,depth:n+1,isLast:ce===K.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:oe,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:C,onSelectCommit:j,onSelectBranch:B},oe))}):null]})}function Gw({open:t}){return t?l.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-4 w-4 shrink-0 text-muted-foreground transition-colors",children:[l.jsx("path",{d:"M2.5 7a2 2 0 0 1 2-2h3.1c.44 0 .86.18 1.18.49l.84.81h5.88a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7Z",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),l.jsx("path",{d:"M4.25 6H8l.84.81",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]}):l.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-4 w-4 shrink-0 text-muted-foreground transition-colors",children:[l.jsx("path",{d:"M2.5 7a2 2 0 0 1 2-2h3.1c.44 0 .86.18 1.18.49l.84.81h5.88a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7Z",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),l.jsx("path",{d:"M6.1 5H8l.84.81",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Kw({projects:t,activeProjectPath:n,onSelectProject:i,projectError:a=null,branches:c,defaultBranch:u,checkedOutRef:d,manuallyOpenedClumps:h,manuallyClosedClumps:p,setManuallyOpenedClumps:g,setManuallyClosedClumps:_,gridLayoutModel:x,onSelectCommit:b,onSelectBranch:w,showCommits:S,className:k,style:C,collapsed:j=!1}){var ft;const B=y.useRef(null),R=y.useRef(null),[A,$]=y.useState(()=>new Set),[H,V]=y.useState(()=>new Set),[P,J]=y.useState(()=>new Set),re=h!=null?h:H,ie=p!=null?p:P,Ce=g!=null?g:V,Be=_!=null?_:J,[Z,ue]=y.useState(null),[z,te]=y.useState(null),W=y.useMemo(()=>c.some(at=>at.name===u)?c:[{name:u,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...c],[c,u]),K=y.useMemo(()=>Ty(W,u),[W,u]),pe=y.useMemo(()=>Ey(W,u,K),[W,u,K]),[N,ae]=y.useState(()=>Ay(pe,K,d,u));y.useEffect(()=>{ae(Oe=>{const at=Ay(pe,K,d,u),tt=new Set(Oe);for(const St of at)tt.add(St);return tt})},[pe,K,d,u]),y.useEffect(()=>{$(Oe=>{const at=new Set(Oe);for(const tt of t)at.add(tt.path);return n&&at.add(n),at})},[n,t]);const oe=(ft=x==null?void 0:x.defaultCollapsedClumps)!=null?ft:new Set,ce=Oe=>re.has(Oe)||!oe.has(Oe)&&!ie.has(Oe),Ee=(Oe,at)=>{const tt=B.current,St=R.current;if(tt&&St){const Qe=`[data-clump-toggle-id="${at}"]`,Dt=tt.querySelector(Qe);if(Dt){const ln=Dt.getBoundingClientRect().top-St.getBoundingClientRect().top;te({id:at,topWithinScrollBody:ln})}else te(null)}else te(null);ue(at),Ce(Qe=>{const Dt=new Set(Qe),ln=ce(Oe);return Be(Ht=>{const en=new Set(Ht);return ln?(Dt.delete(Oe),en.add(Oe)):(en.delete(Oe),Dt.add(Oe)),en}),Dt})};y.useLayoutEffect(()=>{if(!Z)return;const Oe=B.current,at=R.current;if(!Oe||!at)return;const tt=`[data-clump-toggle-id="${Z}"]`,St=Oe.querySelector(tt);if(St){if((z==null?void 0:z.id)===Z){const Dt=St.getBoundingClientRect().top-at.getBoundingClientRect().top-z.topWithinScrollBody;Number.isFinite(Dt)&&Dt!==0&&(at.scrollTop+=Dt)}St.focus({preventScroll:!0}),ue(null),te(null)}},[re,ie,Z,z]);const $e=Oe=>{ae(at=>{const tt=new Set(at);return tt.has(Oe)?tt.delete(Oe):tt.add(Oe),tt})},Ne=y.useMemo(()=>{var at,tt,St,Qe,Dt,ln,Ht,en,q,Ae;const Oe=new Map;for(const Fe of t){const Je=Fe.path===n,lt=qw({branches:Fe.branches,mergeNodes:Fe.mergeNodes,directCommits:Fe.directCommits,unpushedDirectCommits:Fe.unpushedDirectCommits,defaultBranch:Fe.defaultBranch,branchCommitPreviews:Fe.branchCommitPreviews,branchUniqueAheadCounts:Fe.branchUniqueAheadCounts,checkedOutRef:Fe.checkedOutRef,stashes:Fe.stashes,manuallyOpenedClumps:Je?re:new Set,manuallyClosedClumps:Je?ie:new Set}),st=lt.enrichedBranches.some(Xe=>Xe.name===Fe.defaultBranch)?lt.enrichedBranches:[{name:Fe.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...lt.enrichedBranches],bt=new Map(lt.sharedGridLayoutModel.nodes.map(Xe=>[Xe.commit.visualId,Xe.row])),ct={};for(const Xe of lt.sharedGridLayoutModel.allCommits){const vt=(at=ct[Xe.branchName])!=null?at:[];vt.push({fullSha:Xe.id,sha:Xe.id.slice(0,7),parentSha:(tt=Xe.parentSha)!=null?tt:null,message:Xe.message,author:Xe.author,date:Xe.date,kind:(St=Xe.kind)!=null?St:"commit"}),ct[Xe.branchName]=vt}for(const Xe of Object.keys(ct))ct[Xe]=ct[Xe].sort((vt,Rt)=>{var Zt,Pe;const pt=new Date(vt.date).getTime(),Ge=new Date(Rt.date).getTime();if(pt!==Ge)return pt-Ge;const Nt=(Zt=bt.get(`${Xe}:${vt.fullSha}`))!=null?Zt:Number.MAX_SAFE_INTEGER,Gt=(Pe=bt.get(`${Xe}:${Rt.fullSha}`))!=null?Pe:Number.MAX_SAFE_INTEGER;return Nt!==Gt?Nt-Gt:vt.fullSha.localeCompare(Rt.fullSha)});const rt=(Qe=lt.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?Qe:new Map,It=(Xe,vt)=>{const Rt=rt.get(vt);if(!Rt)return[];for(const[pt,Ge]of Rt.entries())if(fi(Xe,pt))return Array.from(Ge).sort();return[]},ot=Ty(st,Fe.defaultBranch),I=Ey(st,Fe.defaultBranch,ot),ne=new Map(st.map(Xe=>[Xe.name,Xe])),de=new Map;for(const Xe of st){const vt=(ln=(Dt=lt.sharedGridLayoutModel.firstBranchCommitByName.get(Xe.name))==null?void 0:Dt.parentSha)!=null?ln:null,Rt=vt!=null?vt:null;de.set(Xe.name,Rt)}const be=(Ht=lt.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Ht:new Set,ye=Je?re:new Set,He=Je?ie:new Set,Re=Xe=>ye.has(Xe)||!be.has(Xe)&&!He.has(Xe);Oe.set(Fe.path,{rootBranchNames:I,branchByName:ne,branchCommitPreviewsFromLayout:ct,childNamesByParent:ot,branchAnchorShaByName:de,checkedOutBranchName:(q=(en=Fe.checkedOutRef)==null?void 0:en.branchName)!=null?q:null,clusterKeyByCommitId:(Ae=lt.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Ae:new Map,getMergeTargetLabels:It,isGridClusterOpen:Re})}return Oe},[n,ie,re,t]);return l.jsx("aside",{ref:B,"aria-label":"Dense branch sidebar",className:Bs("pointer-events-auto relative h-full overflow-hidden",k),style:C,children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[j?l.jsx("span",{className:"sr-only",children:"Projects"}):l.jsx("h2",{className:"px-2.5 text-sm font-medium text-foreground",children:"Projects"}),a&&l.jsx("div",{className:"px-2.5 pb-3",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:a})}),l.jsx("div",{ref:R,className:Bs("min-h-0 flex-1 overflow-y-auto px-2.5 pr-4",j?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(Oe=>{var ln;const at=Oe.path===n,tt=A.has(Oe.path),St=(ln=Oe.treeLoaded)!=null?ln:Oe.branches.length>0,Qe=Ne.get(Oe.path),Dt=at?N:new Set(Qe?Array.from(Qe.branchByName.keys()):[]);return l.jsx("div",{className:Bs("relative z-0",tt&&Qe?"mb-5":"mb-1"),children:l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:Bs("sticky top-0 z-20 flex w-full items-center gap-2 rounded-lg bg-card/90 px-0 py-1 transition-colors hover:bg-accent",at?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[l.jsx("button",{type:"button",onClick:()=>{$(Ht=>{const en=new Set(Ht);return en.has(Oe.path)?en.delete(Oe.path):en.add(Oe.path),en})},"aria-expanded":tt,"aria-label":`${tt?"Collapse":"Expand"} ${Oe.name}`,className:"flex h-4 w-4 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(Gw,{open:tt})}),l.jsx("button",{type:"button",onClick:()=>{i(Oe.path)},className:Bs("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors",at?"font-semibold text-primary":"font-medium text-muted-foreground"),children:Oe.name})]}),tt?St&&Qe?l.jsx("ul",{className:"relative z-0 space-y-1 pt-2",children:Qe.rootBranchNames.map((Ht,en)=>l.jsx(Dm,{branchName:Ht,depth:0,isLast:en===Qe.rootBranchNames.length-1,branchByName:Qe.branchByName,branchCommitPreviews:Qe.branchCommitPreviewsFromLayout,childNamesByParent:Qe.childNamesByParent,branchAnchorShaByName:Qe.branchAnchorShaByName,expandedBranchNames:Dt,onToggleBranch:$e,checkedOutBranchName:Qe.checkedOutBranchName,ancestors:new Set,showCommits:S,getMergeTargetLabels:Qe.getMergeTargetLabels,sourceBranchName:Ht,clusterKeyByCommitId:Qe.clusterKeyByCommitId,isGridClusterOpen:Qe.isGridClusterOpen,onToggleGridCluster:Ee,onSelectCommit:async q=>{at||await i(Oe.path),b==null||b(q)},onSelectBranch:async q=>{at||await i(Oe.path),w==null||w(q)}},`${Oe.path}:${Ht}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},Oe.path)})})]})})}const Qw="git-visualizer",Dy="git-visualizer:projects",Ny=12,Ry=1400,Zw=180,By="git-visualizer:sidebar-width",Ly="git-visualizer:sidebar-collapsed",Oy=432,zy=280,$y=640;function il(t){return t==="/"?t:t.replace(/\/+$/,"")}function Fu(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Jw(t){return md(t)===Qw}function eS(){var cn,bn;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,g]=y.useState(!1),[_,x]=y.useState([]),[b,w]=y.useState([]),[S,k]=y.useState([]),[C,j]=y.useState([]),[B,R]=y.useState({}),[A,$]=y.useState([]),[H,V]=y.useState("main"),[P,J]=y.useState(null),[re,ie]=y.useState([]),[Ce,Be]=y.useState(!1),[Z,ue]=y.useState(""),[z,te]=y.useState(0),[W,K]=y.useState("next"),[pe,N]=y.useState(()=>new Set),[ae,oe]=y.useState(()=>new Set),[ce,Ee]=y.useState(null),[$e,Ne]=y.useState(null),[ft,Oe]=y.useState(!1),[at,tt]=y.useState(!1),[St,Qe]=y.useState(null),[Dt,ln]=y.useState(!1),[Ht,en]=y.useState(!1),[q,Ae]=y.useState("active"),[Fe,Je]=y.useState(null),[lt,st]=y.useState(null),[bt,ct]=y.useState(!1),[rt,It]=y.useState(null),[ot,I]=y.useState(!1),[ne,de]=y.useState(null),[be,ye]=y.useState(null),[He,Re]=y.useState(!1),[Xe,vt]=y.useState(!1),[Rt,pt]=y.useState(!1),[Ge,Nt]=y.useState(!1),[Gt,Zt]=y.useState({}),[Pe,$t]=y.useState({}),[gt,ht]=y.useState({}),[fn,mt]=y.useState({}),[Ut,On]=y.useState({}),[Yn,Qn]=y.useState([]),[Ls,Fs]=y.useState(!1),[us,En]=y.useState(!1),[Pn,sn]=y.useState(!1),[An,nt]=y.useState(!1),[pn,Io]=y.useState(!1),[Xs,Wn]=y.useState("horizontal"),[qs,pi]=y.useState(Oy),[gs,wo]=y.useState(!1),[so,oo]=y.useState(!1),[Zn,Mo]=y.useState({dragging:!1,lastEvent:"idle"}),js=y.useRef(null),Fn=y.useRef(0),gn=y.useRef(0),ds=y.useRef(null),mo=y.useRef(Oy),zn=y.useRef(null),Po=y.useRef(null),po=Jw(t)||!0,Ms=y.useRef(!1),Ts=y.useRef(!1),yn=y.useRef(new Set),Ci=y.useRef([]),Pi=y.useRef([]),ii=y.useRef(null),Ji=y.useMemo(()=>c.map(D=>{var F,Q,fe,Ze,yt,dt,Xt,xs,Zs,hs,Xn,Jt,hn,kn,Os,ko,Un,Hs,Js,ke,We,ut,Ve,xt,Tt,jt,Ot,mn;return{...D,...(F=d[D.path])!=null?F:{},branches:(fe=(Q=d[D.path])==null?void 0:Q.branches)!=null?fe:[],mergeNodes:(yt=(Ze=d[D.path])==null?void 0:Ze.mergeNodes)!=null?yt:[],directCommits:(Xt=(dt=d[D.path])==null?void 0:dt.directCommits)!=null?Xt:[],unpushedDirectCommits:(Zs=(xs=d[D.path])==null?void 0:xs.unpushedDirectCommits)!=null?Zs:[],unpushedCommitShasByBranch:(Xn=(hs=d[D.path])==null?void 0:hs.unpushedCommitShasByBranch)!=null?Xn:{},checkedOutRef:(hn=(Jt=d[D.path])==null?void 0:Jt.checkedOutRef)!=null?hn:null,worktrees:(Os=(kn=d[D.path])==null?void 0:kn.worktrees)!=null?Os:[],stashes:(Un=(ko=d[D.path])==null?void 0:ko.stashes)!=null?Un:[],branchCommitPreviews:(Js=(Hs=d[D.path])==null?void 0:Hs.branchCommitPreviews)!=null?Js:{},laneByBranch:(We=(ke=d[D.path])==null?void 0:ke.laneByBranch)!=null?We:{},branchUniqueAheadCounts:(Ve=(ut=d[D.path])==null?void 0:ut.branchUniqueAheadCounts)!=null?Ve:{},defaultBranch:(jt=(Tt=(xt=d[D.path])==null?void 0:xt.defaultBranch)!=null?Tt:D.branchName)!=null?jt:"main",treeLoaded:(mn=(Ot=d[D.path])==null?void 0:Ot.loaded)!=null?mn:!1}}),[c,d]);y.useEffect(()=>{try{const D=localStorage.getItem(Dy);if(!D)return;const F=JSON.parse(D);if(!Array.isArray(F))return;const Q=F.filter(fe=>typeof fe=="object"&&fe!==null&&typeof fe.path=="string"&&typeof fe.name=="string"&&typeof fe.lastOpenedAt=="number");u(Q.slice(0,Ny))}catch{u([])}},[]),y.useEffect(()=>{Ts.current||t||c.length!==0&&(Ts.current=!0,Uo(c[0].path))},[c,t]);const Ko=y.useMemo(()=>b.reduce((D,F)=>(D[F.targetCommitSha]=F.targetBranch,D),{}),[b]);y.useEffect(()=>{t&&h(D=>{var F,Q;return{...D,[t]:{path:t,name:i||md(t),branches:_,mergeNodes:b,directCommits:S,unpushedDirectCommits:C,mergeTargetBranchByCommitSha:b.reduce((fe,Ze)=>(fe[Ze.targetCommitSha]=Ze.targetBranch,fe),{}),unpushedCommitShasByBranch:B,checkedOutRef:P,worktrees:re,stashes:Yn,branchCommitPreviews:Pe,branchParentByName:gt,laneByBranch:fn,branchUniqueAheadCounts:Ut,defaultBranch:H,loaded:!0,cacheSchemaVersion:(Q=(F=D[t])==null?void 0:F.cacheSchemaVersion)!=null?Q:1,updatedAtMs:Date.now()}}})},[t,i,_,b,S,C,Ko,B,P,re,Yn,Pe,gt,fn,Ut,H]);async function ai(D,F=!1){var fe;const Q=il(D);if(Q&&!yn.current.has(Q)&&!(!F&&((fe=d[Q])!=null&&fe.loaded))){yn.current.add(Q),g(!0);try{const Ze=await we("get_repo_visual_snapshot",{repoPath:Q,forceRefresh:F});h(yt=>({...yt,[Q]:Ze}))}finally{yn.current.delete(Q),yn.current.size===0&&g(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach(D=>{ai(D.path),we("watch_repo",{repoPath:D.path}).catch(console.error)})},[c]),y.useEffect(()=>{let D=!1,F=null;return yc("git-activity",Q=>{if(D)return;const fe=il(Q.payload.repoPath);!fe||fe===t||ai(fe,!0)}).then(Q=>{D?Q():F=Q}).catch(console.error),()=>{D=!0,F&&F()}},[t]);function Es(D){u(F=>{const Q=il(D.path);if(!Q)return F;const fe={...D,path:Q},yt=(F.some(dt=>dt.path===Q)?F.map(dt=>dt.path===Q?fe:dt):[...F,fe]).slice(-Ny);try{localStorage.setItem(Dy,JSON.stringify(yt))}catch{}return yt})}async function To(D){const F=il(D);if(F){Qe(null);try{const[Q,fe]=await Promise.all([we("get_repo_info",{repoPath:F}),we("get_default_branch",{repoPath:F}).catch(()=>"main")]);Es({path:F,name:Q.name,lastOpenedAt:Date.now(),branchName:fe}),await ai(F,!0)}catch(Q){Qe(Q instanceof Error?Q.message:String(Q))}}}function Hn(D){if(D.button!==0)return;const F=D.target;if(F!=null&&F.closest(".window-no-drag"))return;const Q=Tm();we("start_window_drag").catch(()=>Q.startDragging()).catch(fe=>{console.warn("Failed to start window drag:",fe)})}async function Eo(D,F){const fe=[];let Ze=0;for(;;){const yt=await we("get_merge_nodes",{repoPath:D,branch:F,page:Ze,perPage:100});if(fe.push(...yt.nodes),!yt.hasMore||yt.nodes.length===0)break;Ze+=1}return fe}async function Dn(D,F,Q){const fe=Array.from(new Set([Q,...F.map(dt=>dt.name)].filter(dt=>!!dt)));if(fe.length===0)return[];const Ze=await Promise.all(fe.map(dt=>Eo(D,dt).catch(()=>[]))),yt=new Map;for(const dt of Ze)for(const Xt of dt){const xs=`${Xt.targetCommitSha}:${Xt.targetBranch}`;yt.has(xs)||yt.set(xs,Xt)}return Array.from(yt.values())}const as=D=>D.map(F=>`${F.name}|${F.headSha}|${F.commitsAhead}|${F.commitsBehind}|${F.unpushedCommits}|${F.remoteSyncStatus}`).join("||"),Ho=D=>D.map(F=>F.fullSha).join("|"),Ao=D=>{var F,Q;return D?`${(F=D.branchName)!=null?F:""}|${D.headSha}|${(Q=D.parentSha)!=null?Q:""}|${D.hasUncommittedChanges?1:0}`:"__none__"};async function fs(D,F){const Q=F!=null?F:H,[fe,Ze,yt,dt,Xt,xs]=await Promise.all([we("get_branches",{repoPath:D}),we("get_all_repo_commits",{repoPath:D}),we("get_unpushed_direct_commits",{repoPath:D,branch:Q}).catch(()=>[]),we("get_checked_out_ref",{repoPath:D}).catch(()=>null),we("list_worktrees",{repoPath:D}).catch(()=>[]),we("list_stashes",{repoPath:D}).catch(()=>[])]),Zs=await Dn(D,fe,Q),hs=await Promise.all([Q,...fe.map(Xn=>Xn.name)].map(async Xn=>{const Jt=await we("get_branch_unpushed_commit_shas",{repoPath:D,branch:Xn}).catch(()=>[]);return[Xn,Jt]}));x(fe),w(Zs),k(Ze),j(yt),R(Object.fromEntries(hs)),J(dt),ie(Xt),Qn(xs)}async function Kt(D){const[F,Q,fe]=await Promise.all([we("get_branches",{repoPath:D}).catch(()=>[]),we("get_all_repo_commits",{repoPath:D}).catch(()=>[]),we("get_checked_out_ref",{repoPath:D}).catch(()=>null)]);return as(F)!==as(Ci.current)||Ho(Q)!==Ho(Pi.current)||Ao(fe)!==Ao(ii.current)}async function ki(D){ye(null),tt(!0);try{const[F,Q]=await Promise.all([we("get_repo_info",{repoPath:D}),we("get_default_branch",{repoPath:D})]);a(F.name),V(Q),n(D),await fs(D,Q),As(D),ye({kind:"success",message:`Now targeting worktree at ${D}`})}catch(F){const Q=F instanceof Error?F.message:String(F);ye({kind:"error",message:Q}),console.error("Failed to switch worktree:",Q)}finally{tt(!1)}}async function Gs(D,F){if(!(!t||Ce)){Be(!0),ye(null);try{await we("remove_worktree",{repoPath:t,worktreePath:D,force:F}),await fs(t),ye({kind:"success",message:`Removed worktree at ${D}`})}catch(Q){const fe=Q instanceof Error?Q.message:String(Q);ye({kind:"error",message:fe}),console.error("Failed to remove worktree:",fe)}finally{Be(!1)}}}function ji(D,F){var Q,fe;a(F.name||md(D)),V(F.defaultBranch||"main"),x(F.branches),w(F.mergeNodes),k(F.directCommits),j(F.unpushedDirectCommits),R(F.unpushedCommitShasByBranch),J(F.checkedOutRef),ie(F.worktrees),Qn(F.stashes),$t(F.branchCommitPreviews),ht((Q=F.branchParentByName)!=null?Q:{}),mt((fe=F.laneByBranch)!=null?fe:{}),On(F.branchUniqueAheadCounts),n(D)}async function Hi(D,F,Q){const fe=Q==null?void 0:Q.forceRefresh,Ze=Q==null?void 0:Q.applyToActiveState;try{const[yt,dt]=await Promise.all([we("get_repo_info",{repoPath:D}),we("get_default_branch",{repoPath:D})]);if(F!==Fn.current)return;const Xt=await we("get_repo_visual_snapshot",{repoPath:D,forceRefresh:fe});if(F!==Fn.current)return;h(xs=>({...xs,[D]:Xt})),Ze&&(t===D||Fn.current),As(D)}catch(yt){if(F!==Fn.current)return;console.error("Background snapshot refresh failed:",yt)}}async function Uo(D){const F=++Fn.current,Q=il(D);if(!Q)return;const fe=d[Q];if(fe!=null&&fe.loaded){Qe(null),ji(Q,fe),Es({path:Q,name:fe.name||md(Q),lastOpenedAt:Date.now(),branchName:fe.defaultBranch}),tt(!1),Oe(!1),Hi(Q,F,{forceRefresh:!1,applyToActiveState:!1});return}if(Oe(!0),tt(!0),Qe(null),await new Promise(Ze=>setTimeout(Ze,15)),F===Fn.current)try{const[Ze,yt]=await Promise.all([we("get_repo_info",{repoPath:Q}),we("get_default_branch",{repoPath:Q})]);if(F!==Fn.current)return;a(Ze.name),V(yt);const dt=await we("get_repo_visual_snapshot",{repoPath:Q,forceRefresh:!0});if(F!==Fn.current)return;h(Xt=>({...Xt,[Q]:dt})),ji(Q,dt),Es({path:Q,name:Ze.name,lastOpenedAt:Date.now(),branchName:yt}),tt(!1),Oe(!1),As(Q)}catch(Ze){if(F!==Fn.current)return;console.error("Failed to load repo:",Ze),Qe(Ze instanceof Error?Ze.message:String(Ze)),n(null),Oe(!1),tt(!1)}}async function As(D){const F=++gn.current;try{if(F!==gn.current)return;ct(!1),de(null);const Q=await we("get_github_info",{repoPath:D}),fe=await we("get_github_auth_status");if(F!==gn.current||(It(fe),!fe.ghAvailable||!fe.authenticated))return;const Ze=await we("get_open_prs",{owner:Q.owner,repo:Q.repo});if(F!==gn.current)return;$(Ze),ct(!0)}catch(Q){if(F!==gn.current)return;console.log("GitHub data not available:",Q),de(Q instanceof Error?Q.message:String(Q)),ct(!1)}}y.useEffect(()=>{let D=null,F=!1;const Q=(()=>{try{return Tm().label}catch{return null}})(),fe=async yt=>{var Xt;const dt=(Xt=yt==null?void 0:yt.path)==null?void 0:Xt.trim();!dt||F||t!==dt&&await Uo(dt)};return(async()=>{Q==="main"&&(D=await yc("gitviz://open-repo",async dt=>{await fe(dt.payload)}));const yt=await we("take_pending_open_repo");await fe(yt)})(),()=>{F=!0,D&&D()}},[t]),y.useEffect(()=>{Ci.current=_},[_]),y.useEffect(()=>{Pi.current=S},[S]),y.useEffect(()=>{ii.current=P},[P]),y.useEffect(()=>{Ms.current=pn},[pn]),y.useEffect(()=>{},[t,H,po]),y.useEffect(()=>{if(!t||!H||!po)return;we("watch_repo",{repoPath:t}).catch(console.error);let D=!1,F=!1,Q=!1,fe=null;const Ze=async()=>{if(!D){if(Ms.current){F=!0;return}if(Q){F=!0;return}Q=!0;try{if(!await Kt(t)||D)return;await fs(t,H)}catch(dt){console.warn("Frozen git-activity refresh failed:",dt)}finally{Q=!1,F&&!D&&(F=!1,window.setTimeout(()=>{Ze()},0))}}},yt=()=>{F=!0,Ze()};return yc("git-activity",dt=>{il(dt.payload.repoPath)===t&&(ai(t,!0),yt())}).then(dt=>{D?dt():fe=dt}).catch(console.error),()=>{D=!0,fe&&fe()}},[t,H,po]);async function _i(){if(t){I(!0),de(null);try{await we("authenticate_github");const D=await we("get_github_auth_status");It(D),D.authenticated?await As(t):D.message&&de(D.message)}catch(D){de(D instanceof Error?D.message:String(D))}finally{I(!1)}}}const _o=new Set(A.map(D=>D.branchName)),Mn=14*864e5,Ks=Date.now(),Do=_.filter(D=>D.status==="stale"),Ds=Do.filter(D=>_o.has(D.name)||Ks-new Date(D.lastCommitDate).getTime()<=Mn),Qs=Do.filter(D=>!_o.has(D.name)&&Ks-new Date(D.lastCommitDate).getTime()>Mn),on=D=>{var F;return Object.prototype.hasOwnProperty.call(Ut,D.name)?Math.max(0,(F=Ut[D.name])!=null?F:0):Math.max(0,D.commitsAhead)};y.useEffect(()=>{Zt({}),Po.current=null,I(!1),It(null),de(null),$([]),ye(null)},[t]),y.useEffect(()=>{var xs,Zs,hs,Xn;if(!t||!H){Zt({}),$t({}),ht({}),mt({}),On({}),Po.current=null;return}const D=_.map(Jt=>{var hn;return`${Jt.name}:${Jt.headSha}:${(hn=Jt.parentBranch)!=null?hn:""}:${Jt.commitsAhead}`}).join("|"),F=b.map(Jt=>{var hn,kn;return`${Jt.fullSha}:${(kn=(hn=Jt.parentShas)==null?void 0:hn[1])!=null?kn:""}`}).join("|"),Q=`${t}|${H}|${D}|${F}`;if(Po.current===Q)return;Po.current=Q;const fe={},Ze={};for(const Jt of _){if(Jt.name===H)continue;const hn=S.filter(kn=>kn.branch===Jt.name).map(kn=>{var Os;return{fullSha:kn.fullSha,sha:kn.sha,parentSha:(Os=kn.parentSha)!=null?Os:null,message:kn.message,author:kn.author,date:kn.date,kind:"commit"}});fe[Jt.name]=hn,Ze[Jt.name]=hn.length}const yt=new Map;for(const Jt of S)yt.set(Jt.fullSha,Jt.branch);const dt=Jt=>{if(!Jt)return null;const hn=yt.get(Jt);if(hn)return hn;for(const[kn,Os]of yt.entries())if(kn.startsWith(Jt)||Jt.startsWith(kn))return Os;return null},Xt={[H]:null};for(const Jt of _){if(Jt.name===H){Xt[Jt.name]=null;continue}const hn=S.filter(Un=>Un.branch===Jt.name),kn=new Set(hn.map(Un=>Un.fullSha)),Os=(Zs=(xs=hn.filter(Un=>{var Js;const Hs=(Js=Un.parentSha)!=null?Js:null;return!Hs||!kn.has(Hs)}).sort((Un,Hs)=>{const Js=new Date(Un.date).getTime()-new Date(Hs.date).getTime();return Js!==0?Js:Un.fullSha.localeCompare(Hs.fullSha)})[0])==null?void 0:xs.parentSha)!=null?Zs:null,ko=dt(Os);Xt[Jt.name]=(Xn=(hs=ko!=null?ko:gt[Jt.name])!=null?hs:Jt.parentBranch)!=null?Xn:null}Zt({}),$t(fe),ht(Xt),mt(Jt=>{const hn={};for(const kn of _){const Os=Jt[kn.name];Os!=null&&Number.isFinite(Os)&&(hn[kn.name]=Os)}return hn}),On(Ze)},[t,H,_,b,S,gt]),y.useEffect(()=>{if(!be){Re(!1);return}Re(!0);const D=window.setTimeout(()=>{Re(!1)},Ry),F=window.setTimeout(()=>{ye(null)},Ry+Zw);return()=>{window.clearTimeout(D),window.clearTimeout(F)}},[be]),y.useEffect(()=>{if(!t||_.length===0)return;const D=fe=>new Promise(Ze=>setTimeout(Ze,fe));async function F(){const Ze=`${await we("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Ze}`),await D(800),await we("screenshot",{path:`${Ze}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Ze}`)}const Q=fe=>{(fe.metaKey||fe.ctrlKey)&&fe.shiftKey&&fe.key==="S"&&(fe.preventDefault(),F())};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[t,i,_]);function Ns(){en(!0),setTimeout(()=>{ln(!1),en(!1),Ae("active"),st(null)},100)}async function So(D){if(!t)return;ye(null);const F=/^STASH:(\d+)$/.exec(D.commitSha);if(F){try{const Q=parseInt(F[1],10),fe=await we("apply_stash_restore",{repoPath:t,stashIndex:Q});J(fe),await fs(t);const Ze=`Stash ${Q+1}`,yt=fe.branchName?` on branch ${fe.branchName}`:" at the stash base (detached HEAD)";ye({kind:"success",message:`Restored ${Ze}${yt}; stash applied and dropped (uncommitted changes).`})}catch(Q){const fe=Q instanceof Error?Q.message:String(Q);ye({kind:"error",message:fe}),console.error("Failed to apply stash:",fe)}return}if(D.branchName){const Q=(Ze,yt)=>{const dt=Ze.replace(/\\/g,"/").replace(/\/+$/,""),Xt=yt.replace(/\\/g,"/").replace(/\/+$/,"");return dt===Xt||dt.toLowerCase()===Xt.toLowerCase()},fe=re.find(Ze=>Ze.pathExists===!1||Ze.isCurrent||t&&Q(Ze.path,t)?!1:Ze.branchName===D.branchName);if(fe){await ki(fe.path);return}}try{let Q="";(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await we("stash_push",{repoPath:t,includeUntracked:!0}),Q="Stashed local changes (including untracked), then ",await fs(t));const Ze=D.branchName?await we("checkout_branch",{repoPath:t,branchName:D.branchName}):await we("checkout_ref",{repoPath:t,refName:D.commitSha}),yt=await we("get_checked_out_ref",{repoPath:t}).catch(()=>Ze);J(yt),await fs(t);const dt=yt.branchName?yt.branchName:`${yt.headSha.slice(0,7)} (detached)`;ye({kind:"success",message:`${Q}Checked out ${dt}`})}catch(Q){const fe=Q instanceof Error?Q.message:String(Q);ye({kind:"error",message:fe}),console.error("Failed to checkout commit:",fe)}}async function Vo(){if(!(!t||Ls)){ye(null),Fs(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){ye({kind:"error",message:"No local changes to stash."});return}await we("stash_push",{repoPath:t,includeUntracked:!0}),await fs(t),ye({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(D){const F=D instanceof Error?D.message:String(D);ye({kind:"error",message:F}),console.error("Failed to stash:",F)}finally{Fs(!1)}}}async function xn(D){if(!t||us)return!1;const F=D.trim();if(!F)return ye({kind:"error",message:"Enter a commit message."}),!1;ye(null),En(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return ye({kind:"error",message:"No local changes to commit."}),!1;const fe=await we("commit_working_tree",{repoPath:t,message:F});return J(fe),await fs(t),ye({kind:"success",message:"Committed local changes."}),!0}catch(Q){const fe=Q instanceof Error?Q.message:String(Q);return ye({kind:"error",message:fe}),console.error("Failed to commit:",fe),!1}finally{En(!1)}}async function Qo(){if(!t||Pn)return!1;ye(null),sn(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return ye({kind:"error",message:"No local changes to stage."}),!1;const F=await we("stage_working_tree",{repoPath:t});return J(F),await fs(t),ye({kind:"success",message:"Staged all changes."}),!0}catch(D){const F=D instanceof Error?D.message:String(D);return ye({kind:"error",message:F}),console.error("Failed to stage:",F),!1}finally{sn(!1)}}async function ys(D,F){if(!(!t||An)){nt(!0),ye(null);try{const Q=/^STASH:(\d+)$/.exec(D);let fe;if(Q){const Ze=parseInt(Q[1],10);fe=await we("move_stash_to_new_branch",{repoPath:t,stashIndex:Ze,branchName:F})}else fe=await we("create_branch_from_uncommitted",{repoPath:t,branchName:F});J(fe),await fs(t),ye({kind:"success",message:`Moved to new branch "${F}"`})}catch(Q){const fe=Q instanceof Error?Q.message:String(Q);ye({kind:"error",message:fe}),console.error("Failed to create branch from node:",fe)}finally{nt(!1)}}}async function Yo(D){if(!(!t||An)){nt(!0),ye(null);try{const F=await we("create_root_branch",{repoPath:t,branchName:D});J(F),await fs(t),ye({kind:"success",message:`Created new root branch "${D}"`})}catch(F){const Q=F instanceof Error?F.message:String(F);ye({kind:"error",message:Q}),console.error("Failed to create root branch:",Q)}finally{nt(!1)}}}async function No(D,F){if(!t)return;const Q=Array.from(new Set(D.filter(fe=>!!fe&&fe!==F)));if(Q.length!==0){ye(null),vt(!0);try{let fe=null;for(const Ze of Q)fe=await we("merge_ref_into_branch",{repoPath:t,sourceRef:Ze,targetBranch:F});await fs(t),fe&&J(fe),ye({kind:"success",message:Q.length===1?`Merged ${Q[0].slice(0,7)} into ${F}`:`Merged ${Q.length} commits into ${F}`})}catch(fe){const Ze=fe instanceof Error?fe.message:String(fe);ye({kind:"error",message:Ze}),console.error("Failed to merge refs into branch:",Ze)}finally{vt(!1)}}}async function Wo(){if(!(!t||Rt)){ye(null),pt(!0);try{const D=await we("push_all_unpushed_branches",{repoPath:t});await fs(t),ye({kind:"success",message:D.length>0?D.length===1?`Pushed ${D[0].branchName}`:`Pushed ${D.length} branches`:"Everything local is already pushed."})}catch(D){const F=D instanceof Error?D.message:String(D);ye({kind:"error",message:F}),console.error("Failed to push all branches:",F)}finally{pt(!1)}}}async function Zo(){if(!(!t||Rt)){ye(null),pt(!0);try{const D=await we("push_current_branch",{repoPath:t});await fs(t),ye({kind:"success",message:`Pushed ${D.branchName}`})}catch(D){const F=D instanceof Error?D.message:String(D);ye({kind:"error",message:F}),console.error("Failed to push current branch:",F)}finally{pt(!1)}}}async function Jn(D){var Q;if(!t||Rt)return;const F=Array.from(new Map(D.filter(fe=>fe.branchName&&fe.targetSha).map(fe=>[fe.branchName,fe])).values());if(F.length!==0){ye(null),pt(!0);try{for(const fe of F)await we("push_branch",{repoPath:t,branchName:fe.branchName,targetSha:fe.targetSha});await fs(t),ye({kind:"success",message:F.length===1?`Pushed ${F[0].branchName} through ${(Q=F[0].targetSha)==null?void 0:Q.slice(0,7)}`:`Pushed ${F.length} selected commit ranges`})}catch(fe){const Ze=fe instanceof Error?fe.message:String(fe);ye({kind:"error",message:Ze}),console.error("Failed to push selected commits:",Ze)}finally{pt(!1)}}}async function io(D){var yt;if(!t||Ge)return;const F=Array.from(new Set(D.branchNames.filter(dt=>dt&&dt!==H))),Q=!!D.discardUncommittedChanges,fe=(yt=D.stashIndices)!=null?yt:[],Ze=Array.from(new Set(fe)).sort((dt,Xt)=>Xt-dt);if(!(F.length===0&&!Q&&Ze.length===0)){ye(null),Nt(!0);try{for(const xs of Ze)await we("stash_drop",{repoPath:t,stashIndex:xs});const dt=F.length>0||Q?await we("delete_selected_elements",{repoPath:t,branchNames:F,discardUncommittedChanges:Q}):{deletedBranches:[],discardedUncommittedChanges:!1};await fs(t);const Xt=[];Ze.length>0&&Xt.push(Ze.length===1?`removed stash ${Ze[0]+1}`:`removed ${Ze.length} stashes`),dt.discardedUncommittedChanges&&Xt.push("discarded local uncommitted changes"),dt.deletedBranches.length>0&&Xt.push(dt.deletedBranches.length===1?`deleted ${dt.deletedBranches[0]}`:`deleted ${dt.deletedBranches.length} branches`),ye({kind:"success",message:Xt.length>0?Xt.join(" and "):"Nothing to delete."})}catch(dt){const Xt=dt instanceof Error?dt.message:String(dt);ye({kind:"error",message:Xt}),console.error("Failed to delete selected elements:",Xt)}finally{Nt(!1)}}}function Co(D){st(D),Je(F=>{var Q;return{branch:D,seq:((Q=F==null?void 0:F.seq)!=null?Q:0)+1}})}function go(D){D&&(Ne(D),te(F=>F+1))}function $s(D){D&&(ue(D),te(F=>F+1))}function Is(D){K(D),te(F=>F+1)}async function ao(){var D,F;try{const Q=await Xv({directory:!0,multiple:!1,defaultPath:(F=(D=c[0])==null?void 0:D.path)!=null?F:void 0});typeof Q=="string"&&Q&&await To(Q)}catch(Q){Qe(Q instanceof Error?Q.message:String(Q))}}y.useEffect(()=>{var Q;const D=P!=null&&P.hasUncommittedChanges?"WORKING_TREE":(Q=P==null?void 0:P.headSha)!=null?Q:null;if(!D)return;const F=`${t!=null?t:"__no-repo__"}|${Xs}|${D}`;js.current!==F&&(js.current=F,Ne(D),te(fe=>fe+1))},[P==null?void 0:P.hasUncommittedChanges,P==null?void 0:P.headSha,Xs,t]),y.useEffect(()=>{js.current=null},[t]);const{enrichedBranches:Nn,enrichedBranchCommitPreviews:Ps,enrichedBranchUniqueAheadCounts:Ro,enrichedDirectCommits:M}=y.useMemo(()=>{var ut,Ve,xt,Tt;const D=Xx(Yn,_,S,Pe,Ut,H);let F=D.branches,Q=D.directCommits,fe=D.branchCommitPreviews,Ze=D.branchUniqueAheadCounts;if(!(P!=null&&P.hasUncommittedChanges))return{enrichedBranches:F,enrichedDirectCommits:Q,enrichedBranchCommitPreviews:fe,enrichedBranchUniqueAheadCounts:Ze};const yt=P.headSha||P.parentSha||null,dt=(Ve=(ut=Q[0])==null?void 0:ut.fullSha)!=null?Ve:null,Xt=(jt,Ot)=>!jt||!Ot?!1:jt===Ot||jt.startsWith(Ot)||Ot.startsWith(jt),xs=[{name:H,headSha:dt!=null?dt:"",isDefault:!0},...F.map(jt=>({name:jt.name,headSha:jt.headSha,isDefault:!1}))],Zs=P.branchName?xs.find(jt=>jt.name===P.branchName):void 0,hs=yt?xs.filter(jt=>Xt(jt.headSha,yt)):[],Xn=(xt=Zs!=null?Zs:hs.find(jt=>jt.isDefault))!=null?xt:hs[0],Jt=!!(Xn&&yt&&Xt(Xn.headSha,yt)),hn=Xn&&!Xn.isDefault?F.find(jt=>jt.name===Xn.name):void 0,kn=(()=>{var Ot;if(!yt)return null;const jt=Q.find(mn=>Xt(mn.fullSha,yt)||Xt(mn.sha,yt));if(jt!=null&&jt.date)return jt.date;if(hn){const mn=((Ot=fe[hn.name])!=null?Ot:[]).find(ms=>Xt(ms.fullSha,yt)||Xt(ms.sha,yt));if(mn!=null&&mn.date)return mn.date}return null})(),Os=kn?new Date(kn).getTime():Number.NaN,ko=Date.now(),Un=Number.isFinite(Os)?Math.max(ko,Os+1):ko,Hs=new Date(Un).toISOString(),Js={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:yt,message:"Local uncommitted changes",author:"You",date:Hs,kind:"uncommitted"},ke={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:yt,childShas:[],branch:H,message:"Local uncommitted changes",author:"You",date:Hs,kind:"uncommitted"};if(Jt&&(Xn!=null&&Xn.isDefault))return{enrichedBranches:F,enrichedBranchCommitPreviews:fe,enrichedBranchUniqueAheadCounts:Ze,enrichedDirectCommits:[...Q,ke]};if(Jt&&hn)return{enrichedBranches:F.map(Ot=>Ot.name===hn.name?{...Ot,commitsAhead:Ot.commitsAhead+1,unpushedCommits:Ot.unpushedCommits+1,lastCommitDate:Hs,headSha:"WORKING_TREE"}:Ot),enrichedDirectCommits:Q,enrichedBranchCommitPreviews:{...fe,[hn.name]:[Js,...fe[hn.name]||[]]},enrichedBranchUniqueAheadCounts:{...Ze,[hn.name]:Math.max(0,(Tt=Object.prototype.hasOwnProperty.call(Ze,hn.name)?Ze[hn.name]:hn.commitsAhead)!=null?Tt:0)+1}};const We={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:Hs,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:yt!=null?yt:void 0,parentBranch:(Xn==null?void 0:Xn.name)||P.branchName||H};return{enrichedBranches:[We,...F],enrichedBranchCommitPreviews:{...fe,[We.name]:[Js]},enrichedBranchUniqueAheadCounts:{...Ze,[We.name]:1},enrichedDirectCommits:Q}},[_,Pe,Ut,P,H,S,Yn]),X=y.useMemo(()=>{const D={...gt};return D[H]=null,D},[gt,H,Nn]),_e=y.useMemo(()=>{var D;return(D=gw(Nn,H,X,fn))!=null?D:dp(Nn,H,Ps,X)},[Nn,H,Ps,X,fn]),Se=y.useMemo(()=>kd({lanes:_e,branches:Nn,mergeNodes:b,directCommits:M,unpushedDirectCommits:C,defaultBranch:H,branchCommitPreviews:Ps,branchParentByName:X,branchUniqueAheadCounts:Ro,manuallyOpenedClumps:pe,manuallyClosedClumps:ae,isDebugOpen:!1,gridSearchQuery:Z,gridFocusSha:$e,checkedOutRef:P!=null?P:null,orientation:Xs}),[_e,Nn,b,M,C,H,Ps,X,Ro,pe,ae,Z,$e,(cn=P==null?void 0:P.headSha)!=null?cn:null,(bn=P==null?void 0:P.branchName)!=null?bn:null,Xs]);y.useEffect(()=>{try{const D=window.localStorage.getItem(By);if(D){const Q=Number(D);Number.isFinite(Q)&&pi(Math.min($y,Math.max(zy,Q)))}const F=window.localStorage.getItem(Ly);F!=null&&wo(F==="true")}catch{}},[]),y.useEffect(()=>{mo.current=qs},[qs]),y.useEffect(()=>{const D=zn.current;D&&(D.style.width=gs?"0px":`${qs}px`)},[qs,gs]),y.useEffect(()=>{try{window.localStorage.setItem(Ly,String(gs))}catch{}},[gs]);const Ue=D=>{const F=ds.current;if(!F)return;const Q=F.startWidth+(D-F.startX);F.pendingWidth=Math.min($y,Math.max(zy,Q));const fe=zn.current;fe&&(fe.style.width=`${F.pendingWidth}px`)},et=(D,F)=>{const Q=ds.current;if(Q&&!(F!=null&&Q.pointerId!==F)){ds.current=null,Mo({dragging:!1,lastEvent:D}),document.body.style.cursor="",document.body.style.userSelect="",pi(Q.pendingWidth);try{window.localStorage.setItem(By,String(Q.pendingWidth))}catch{}}},Vt=D=>{D.button===0&&(D.preventDefault(),Mo({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:D.pointerId,clientX:D.clientX,width:mo.current}),ds.current={startX:D.clientX,startWidth:mo.current,pendingWidth:mo.current,pointerId:D.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",D.currentTarget.setPointerCapture(D.pointerId))},Wt=D=>{const F=ds.current;!F||F.pointerId!==D.pointerId||(Zn.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:D.clientX}),Mo(Q=>Q.dragging?{dragging:!0,lastEvent:"move"}:Q),Ue(D.clientX))},Lt=D=>{if(ds.current){console.debug("[sidebar-resize] pointerup",{pointerId:D.pointerId});try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}et("pointerup",D.pointerId)}},Ye=D=>{if(ds.current){console.debug("[sidebar-resize] pointercancel",{pointerId:D.pointerId});try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}et("pointercancel",D.pointerId)}};return l.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:Hn,children:l.jsxs("div",{className:"window-no-drag pointer-events-auto absolute top-2 z-20 flex items-center gap-2 rounded-2xl border border-border bg-card/80 px-2 py-1.5 shadow-sm backdrop-blur-sm transition-all duration-300 ease-in-out",style:{left:gs?16:Math.max(16,qs+8)},children:[l.jsx("button",{type:"button",className:"inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":gs?"Open sidebar":"Collapse sidebar",onClick:()=>wo(D=>!D),children:gs?l.jsx(lw,{className:"h-4 w-4 shrink-0"}):l.jsx(aw,{className:"h-4 w-4 shrink-0"})}),l.jsxs("button",{type:"button",onClick:()=>void ao(),disabled:ft||p,className:"inline-flex h-7 items-center gap-1.5 rounded-lg border border-border/50 px-2.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(ow,{className:"h-3.5 w-3.5 shrink-0"}),"Add repo"]}),l.jsx("button",{type:"button",onClick:()=>oo(D=>!D),className:"inline-flex h-7 items-center rounded-lg border border-border/50 px-2.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:so?"Hide commits":"Show commits"})]})}),l.jsx("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:zn,className:"relative flex h-full min-h-0 flex-none overflow-visible",style:{width:gs?0:qs},children:[l.jsx(Kw,{className:Fu("min-h-0 shrink-0 overflow-hidden pt-16 transition-[width,opacity] duration-300 ease-in-out",gs?"pointer-events-none opacity-0":"opacity-100"),style:{width:"100%"},collapsed:gs,projects:Ji,activeProjectPath:t,onSelectProject:Uo,projectError:St,branches:Nn,defaultBranch:H,checkedOutRef:P,manuallyOpenedClumps:pe,manuallyClosedClumps:ae,setManuallyOpenedClumps:N,setManuallyClosedClumps:oe,gridLayoutModel:Se,onSelectCommit:go,onSelectBranch:$s,showCommits:so}),gs?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Vt,onPointerMove:Wt,onPointerUp:Lt,onPointerCancel:Ye,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"}),Zn.dragging?l.jsx("div",{className:"pointer-events-none absolute bottom-2 right-2 z-50 rounded-md border border-border/50 bg-card/90 px-2 py-1 text-[10px] text-muted-foreground shadow-sm",children:Zn.lastEvent}):null]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx(Ww,{branches:Nn,mergeNodes:b,directCommits:M,unpushedDirectCommits:C,unpushedCommitShasByBranch:B,defaultBranch:H,branchCommitPreviews:Ps,branchParentByName:X,branchUniqueAheadCounts:Ro,gridSearchQuery:Z,gridSearchJumpToken:z,gridSearchDirection:W,gridFocusSha:$e,onGridSearchResultCountChange:Ee,onGridSearchFocusChange:Ne,checkedOutRef:P,onCommitClick:So,onMergeRefsIntoBranch:No,mergeInProgress:Xe,onPushAllBranches:Wo,onPushCurrentBranch:Zo,onPushCommitTargets:Jn,pushInProgress:Rt,onDeleteSelection:io,deleteInProgress:Ge,worktrees:re,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Gs,removeWorktreeInProgress:Ce,onSwitchToWorktree:ki,onStashLocalChanges:Vo,stashInProgress:Ls,stashDisabled:!1,onCommitLocalChanges:xn,commitInProgress:us,commitDisabled:!1,onStageAllChanges:Qo,stageInProgress:Pn,onCreateBranchFromNode:ys,onCreateRootBranch:Yo,createBranchFromNodeInProgress:An,onInteractionChange:Io,manuallyOpenedClumps:pe,manuallyClosedClumps:ae,setManuallyOpenedClumps:N,setManuallyClosedClumps:oe,layoutModel:Se,orientation:Xs}),l.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"flex shrink-0 items-center rounded-2xl border border-border bg-card/80 p-1 shadow-sm backdrop-blur-sm",role:"radiogroup","aria-label":"Commit map layout",children:[l.jsx("button",{type:"button",role:"radio","aria-checked":Xs==="horizontal",tabIndex:0,onClick:()=>Wn("horizontal"),onKeyDown:D=>{(D.key==="ArrowRight"||D.key==="ArrowDown")&&(D.preventDefault(),Wn("vertical"))},className:Fu("rounded-lg px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Xs==="horizontal"?"border border-border/50 bg-muted/30 text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),l.jsx("button",{type:"button",role:"radio","aria-checked":Xs==="vertical",tabIndex:0,onClick:()=>Wn("vertical"),onKeyDown:D=>{(D.key==="ArrowLeft"||D.key==="ArrowUp")&&(D.preventDefault(),Wn("horizontal"))},className:Fu("rounded-lg px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Xs==="vertical"?"border border-border/50 bg-muted/30 text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]}),(rt==null?void 0:rt.ghAvailable)&&!rt.authenticated&&l.jsx("button",{onClick:_i,disabled:ot,className:"rounded-lg border border-border bg-card/80 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:ot?"Connecting GitHub...":"Connect GitHub"}),rt&&!rt.ghAvailable&&l.jsx("span",{className:"rounded-lg border border-border/50 bg-muted/30 px-3 py-1 text-xs text-muted-foreground",children:"Install `gh` for private PR data"}),ne&&l.jsx("span",{className:"max-w-64 truncate rounded-lg border border-blue-200/60 bg-blue-50 px-3 py-1 text-xs text-blue-600 dark:border-blue-900/20 dark:bg-blue-900/20 dark:text-blue-400",title:ne,children:ne}),l.jsxs("div",{className:"window-no-drag flex min-w-64 flex-1 max-w-md items-center gap-2 rounded-2xl border border-border bg-card/90 px-3 py-1.5 shadow-sm backdrop-blur-sm",children:[l.jsx(uw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{value:Z,onChange:D=>ue(D.target.value),onKeyDown:D=>{D.key==="Enter"&&(D.preventDefault(),Is(D.shiftKey?"prev":"next"))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),ce!=null?l.jsxs("span",{className:"shrink-0 rounded-lg border border-border/50 bg-muted/30 px-2 py-1 text-[10px] font-medium text-muted-foreground",children:[ce," match",ce===1?"":"es"]}):null,l.jsx("button",{type:"button",onClick:()=>Is("prev"),disabled:!Z.trim()||(ce!=null?ce:0)===0,className:"inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted/30 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50","aria-label":"Previous search result",title:"Previous (Shift+Enter)",children:l.jsx(nw,{className:"h-3.5 w-3.5 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>Is("next"),disabled:!Z.trim()||(ce!=null?ce:0)===0,className:"inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted/30 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50","aria-label":"Next search result",title:"Next (Enter)",children:l.jsx(ew,{className:"h-3.5 w-3.5 shrink-0"})})]}),$e&&l.jsxs("span",{className:"rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",children:["Focused ",$e.slice(0,7)]}),be&&l.jsx("span",{className:Fu("max-w-[26rem] truncate rounded-lg border px-3 py-1 text-xs font-medium transition-opacity duration-200",He?"opacity-100":"opacity-0",be.kind==="error"?"border-red-200/60 bg-red-50 text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400":"border-blue-200/60 bg-blue-50 text-blue-600 dark:border-blue-900/20 dark:bg-blue-900/20 dark:text-blue-400"),title:be.message,children:be.message})]})})]}),Dt&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${Ht?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Ns,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Ae("active"),className:`text-xs font-medium transition-colors ${q==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[Ds.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Ae("inactive"),className:`text-xs font-medium transition-colors ${q==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Qs.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(q==="active"?Ds:Qs).map(D=>{const F=(lt==null?void 0:lt.name)===D.name,Q=on(D);return l.jsxs("button",{onClick:()=>Co(D),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${F?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:D.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[Q>0&&`${Q} ahead`,Q>0&&D.commitsBehind>0&&", ",D.commitsBehind>0&&`${D.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},D.name)})})]})]})})]})}var Rc=Lx(),tS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,nS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=tS}var cs=nS,sS=`.icon-transitions-module__iconState___uqK9J {
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
}`,oS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=sS}var os=oS,iS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),aS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),rS=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),lS=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${os.iconState} ${n?os.hiddenScaled:os.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${os.iconState} ${n?os.visibleScaled:os.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),cS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${os.iconStateFast} ${i?os.visibleScaled:u?os.sending:os.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${os.iconStateFast} ${a?os.visibleScaled:os.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${os.iconStateFast} ${c?os.visibleScaled:os.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},uS=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${os.iconFade} ${n?os.visible:os.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${os.iconFade} ${n?os.hidden:os.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),dS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${os.iconFadeFast} ${n?os.hidden:os.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${os.iconFadeFast} ${n?os.visible:os.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),fS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),hS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),qx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),mS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),pS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),_S=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),gS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),yS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),xS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),bS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Gx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Qh=Gx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Nm="feedback-freeze-styles",Zh="__agentation_freeze";function vS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Zh]||(t[Zh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Zh]}var _n=vS();typeof window<"u"&&!_n.installed&&(_n.origSetTimeout=window.setTimeout.bind(window),_n.origSetInterval=window.setInterval.bind(window),_n.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?_n.origSetTimeout(t,n):_n.origSetTimeout((...a)=>{_n.frozen?_n.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?_n.origSetInterval(t,n):_n.origSetInterval((...a)=>{_n.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>_n.origRAF(n=>{_n.frozen?_n.frozenRAFQueue.push(t):t(n)}),_n.installed=!0);var Yt=_n.origSetTimeout,wS=_n.origSetInterval,ul=_n.origRAF;function SS(t){return t?Gx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function CS(){if(typeof document>"u"||_n.frozen)return;_n.frozen=!0,_n.frozenTimeoutQueue=[],_n.frozenRAFQueue=[];let t=document.getElementById(Nm);t||(t=document.createElement("style"),t.id=Nm),t.textContent=`
    *${Qh},
    *${Qh}::before,
    *${Qh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),_n.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;SS(i)||(n.pause(),_n.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Iy(){var i;if(typeof document>"u"||!_n.frozen)return;_n.frozen=!1;const t=_n.frozenTimeoutQueue;_n.frozenTimeoutQueue=[];for(const a of t)_n.origSetTimeout(()=>{if(_n.frozen){_n.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=_n.frozenRAFQueue;_n.frozenRAFQueue=[];for(const a of n)_n.origRAF(c=>{if(_n.frozen){_n.frozenRAFQueue.push(a);return}a(c)});for(const a of _n.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}_n.pausedAnimations=[],(i=document.getElementById(Nm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Jh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Md=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},k){const[C,j]=y.useState(u),[B,R]=y.useState(!1),[A,$]=y.useState("initial"),[H,V]=y.useState(!1),[P,J]=y.useState(!1),re=y.useRef(null),ie=y.useRef(null),Ce=y.useRef(null),Be=y.useRef(null);y.useEffect(()=>{b&&A!=="exit"&&$("exit")},[b,A]),y.useEffect(()=>{Yt(()=>{$("enter")},0);const K=Yt(()=>{$("entered")},200),pe=Yt(()=>{const N=re.current;N&&(Jh(N),N.selectionStart=N.selectionEnd=N.value.length,N.scrollTop=N.scrollHeight)},50);return()=>{clearTimeout(K),clearTimeout(pe),Ce.current&&clearTimeout(Ce.current),Be.current&&clearTimeout(Be.current)}},[]);const Z=y.useCallback(()=>{Be.current&&clearTimeout(Be.current),R(!0),Be.current=Yt(()=>{R(!1),Jh(re.current)},250)},[]);y.useImperativeHandle(k,()=>({shake:Z}),[Z]);const ue=y.useCallback(()=>{$("exit"),Ce.current=Yt(()=>{p()},150)},[p]),z=y.useCallback(()=>{C.trim()&&h(C.trim())},[C,h]),te=y.useCallback(K=>{K.stopPropagation(),!K.nativeEvent.isComposing&&(K.key==="Enter"&&!K.shiftKey&&(K.preventDefault(),z()),K.key==="Escape"&&ue())},[z,ue]),W=[cs.popup,w?cs.light:"",A==="enter"?cs.enter:"",A==="entered"?cs.entered:"",A==="exit"?cs.exit:"",B?cs.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:ie,className:W,"data-annotation-popup":!0,style:_,onClick:K=>K.stopPropagation(),children:[l.jsxs("div",{className:cs.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:cs.headerToggle,onClick:()=>{const K=P;J(!P),K&&Yt(()=>Jh(re.current),0)},type:"button",children:[l.jsx("svg",{className:`${cs.chevron} ${P?cs.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:cs.element,children:n})]}):l.jsx("span",{className:cs.element,children:n}),i&&l.jsx("span",{className:cs.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${cs.stylesWrapper} ${P?cs.expanded:""}`,children:l.jsx("div",{className:cs.stylesInner,children:l.jsx("div",{className:cs.stylesBlock,children:Object.entries(S).map(([K,pe])=>l.jsxs("div",{className:cs.styleLine,children:[l.jsx("span",{className:cs.styleProperty,children:K.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:cs.styleValue,children:pe}),";"]},K))})})}),a&&l.jsxs("div",{className:cs.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:re,className:cs.textarea,style:{borderColor:H?x:void 0},placeholder:c,value:C,onChange:K=>j(K.target.value),onFocus:()=>V(!0),onBlur:()=>V(!1),rows:2,onKeyDown:te}),l.jsxs("div",{className:cs.actions,children:[g&&l.jsx("div",{className:cs.deleteWrapper,children:l.jsx("button",{className:cs.deleteButton,onClick:g,type:"button",children:l.jsx(yS,{size:22})})}),l.jsx("button",{className:cs.cancel,onClick:ue,children:"Cancel"}),l.jsx("button",{className:cs.submit,style:{backgroundColor:x,opacity:C.trim()?1:.4},onClick:z,disabled:!C.trim(),children:d})]})]})}),kS=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const k=g.current.getBoundingClientRect();p({top:k.top+k.height/2,right:window.innerWidth-k.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Yt(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Yt(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Rc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},jS=`.styles-module__tooltip___mcXL2 {
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
}`,MS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=jS}var Py=MS,jr=({content:t})=>l.jsx(kS,{className:Py.tooltip,content:t,children:l.jsx(rS,{className:Py.tooltipIcon})}),wt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Kx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...wt.navigation},{type:"header",label:"Header",...wt.header},{type:"hero",label:"Hero",...wt.hero},{type:"section",label:"Section",...wt.section},{type:"sidebar",label:"Sidebar",...wt.sidebar},{type:"footer",label:"Footer",...wt.footer},{type:"modal",label:"Modal",...wt.modal},{type:"banner",label:"Banner",...wt.banner},{type:"drawer",label:"Drawer",...wt.drawer},{type:"popover",label:"Popover",...wt.popover},{type:"divider",label:"Divider",...wt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...wt.card},{type:"text",label:"Text",...wt.text},{type:"image",label:"Image",...wt.image},{type:"video",label:"Video",...wt.video},{type:"table",label:"Table",...wt.table},{type:"grid",label:"Grid",...wt.grid},{type:"list",label:"List",...wt.list},{type:"chart",label:"Chart",...wt.chart},{type:"codeBlock",label:"Code Block",...wt.codeBlock},{type:"map",label:"Map",...wt.map},{type:"timeline",label:"Timeline",...wt.timeline},{type:"calendar",label:"Calendar",...wt.calendar},{type:"accordion",label:"Accordion",...wt.accordion},{type:"carousel",label:"Carousel",...wt.carousel},{type:"logo",label:"Logo",...wt.logo},{type:"faq",label:"FAQ",...wt.faq},{type:"gallery",label:"Gallery",...wt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...wt.button},{type:"input",label:"Input",...wt.input},{type:"search",label:"Search",...wt.search},{type:"form",label:"Form",...wt.form},{type:"tabs",label:"Tabs",...wt.tabs},{type:"dropdown",label:"Dropdown",...wt.dropdown},{type:"toggle",label:"Toggle",...wt.toggle},{type:"stepper",label:"Stepper",...wt.stepper},{type:"rating",label:"Rating",...wt.rating},{type:"fileUpload",label:"File Upload",...wt.fileUpload},{type:"checkbox",label:"Checkbox",...wt.checkbox},{type:"radio",label:"Radio",...wt.radio},{type:"slider",label:"Slider",...wt.slider},{type:"datePicker",label:"Date Picker",...wt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...wt.avatar},{type:"badge",label:"Badge",...wt.badge},{type:"tag",label:"Tag",...wt.tag},{type:"breadcrumb",label:"Breadcrumb",...wt.breadcrumb},{type:"pagination",label:"Pagination",...wt.pagination},{type:"progress",label:"Progress",...wt.progress},{type:"alert",label:"Alert",...wt.alert},{type:"toast",label:"Toast",...wt.toast},{type:"notification",label:"Notification",...wt.notification},{type:"tooltip",label:"Tooltip",...wt.tooltip},{type:"stat",label:"Stat",...wt.stat},{type:"skeleton",label:"Skeleton",...wt.skeleton},{type:"chip",label:"Chip",...wt.chip},{type:"icon",label:"Icon",...wt.icon},{type:"spinner",label:"Spinner",...wt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...wt.pricing},{type:"testimonial",label:"Testimonial",...wt.testimonial},{type:"cta",label:"CTA",...wt.cta},{type:"productCard",label:"Product Card",...wt.productCard},{type:"profile",label:"Profile",...wt.profile},{type:"feature",label:"Feature",...wt.feature},{type:"team",label:"Team",...wt.team},{type:"login",label:"Login",...wt.login},{type:"contact",label:"Contact",...wt.contact}]}],Qi={};for(const t of Kx)for(const n of t.items)Qi[n.type]=n;function ze({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Kn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function oi({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function TS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Kn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(ze,{w:t*.06}),l.jsx(ze,{w:t*.07}),l.jsx(ze,{w:t*.05}),l.jsx(ze,{w:t*.06})]}),l.jsx(Kn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function ES({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(ze,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(ze,{w:t*.6}),l.jsx(ze,{w:t*.4}),l.jsx(Kn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function AS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(ze,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Kn,{w:10,h:10,radius:2}),l.jsx(ze,{w:t*(.4+c*17%30/100)})]},c))]})}function DS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(ze,{w:"60%",h:3,strong:!0}),l.jsx(ze,{w:"80%",h:2}),l.jsx(ze,{w:"70%",h:2}),l.jsx(ze,{w:"60%",h:2})]},c))})}function NS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(ze,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(ze,{w:"90%"}),l.jsx(ze,{w:"70%"}),l.jsx(ze,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Kn,{w:70,h:26,radius:4}),l.jsx(Kn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function RS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(ze,{w:"70%",h:4,strong:!0}),l.jsx(ze,{w:"95%",h:2}),l.jsx(ze,{w:"85%",h:2}),l.jsx(ze,{w:"50%",h:2})]})]})}function BS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(ze,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(ze,{w:`${70+u*13%25}%`,h:2},u))]})}function LS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function OS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(ze,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(ze,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function zS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(oi,{size:8}),l.jsx(ze,{w:`${55+c*17%35}%`,h:2})]},c))})}function $S({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(ze,{w:Math.max(20,t*.5),h:3,strong:!0})})}function IS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(ze,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(ze,{w:"40%",h:2})})]})}function PS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(ze,{w:60+c*17%30,h:2}),l.jsx(Kn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Kn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function HS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(ze,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(ze,{w:"80%",h:2}),l.jsx(ze,{w:"65%",h:2}),l.jsx(ze,{w:"75%",h:2})]})]})}function US({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function VS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(ze,{w:Math.max(16,t*.5),h:2,strong:!0})})}function YS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(ze,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(ze,{w:t*.35})]})}function WS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(ze,{w:t*.3,h:4,strong:!0}),l.jsx(ze,{w:t*.7}),l.jsx(ze,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Kn,{w:"33%",h:"100%",radius:4}),l.jsx(Kn,{w:"33%",h:"100%",radius:4}),l.jsx(Kn,{w:"33%",h:"100%",radius:4})]})]})}function FS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Kn,{w:"100%",h:"100%",radius:4},u))})}function XS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(ze,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(ze,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function qS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function GS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(oi,{size:Math.min(14,n*.4)}),l.jsx(ze,{w:"50%",h:2})]})}function KS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(oi,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:"60%",h:3,strong:!0}),l.jsx(ze,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function QS({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function ZS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Kn,{w:a,h:`${d}%`,radius:2},u)})})}function JS({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Kn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function e4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(ze,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function t4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(ze,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function n4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Kn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function s4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function o4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(ze,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function i4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Kn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(oi,{size:5}),l.jsx(oi,{size:5}),l.jsx(oi,{size:5})]})]})}function a4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(ze,{w:t*.4,h:3,strong:!0}),l.jsx(ze,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(oi,{size:5}),l.jsx(ze,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Kn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function r4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(ze,{w:"90%",h:2}),l.jsx(ze,{w:"75%",h:2}),l.jsx(ze,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(oi,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(ze,{w:60,h:3,strong:!0}),l.jsx(ze,{w:40,h:2})]})]})]})}function l4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(ze,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(ze,{w:t*.35}),l.jsx(Kn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function c4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:"40%",h:3,strong:!0}),l.jsx(ze,{w:"70%",h:2})]})]})}function u4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(ze,{w:t*.4,h:3,strong:!0}),l.jsx(Kn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function d4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(ze,{w:t*.5,h:2}),l.jsx(ze,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(ze,{w:t*.3,h:2})]})}function f4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function h4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(ze,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function m4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function p4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function _4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(oi,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(ze,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function g4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(ze,{w:t*.4,h:2}),l.jsx(ze,{w:t*.25,h:2})]})}function y4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(oi,{size:6}),l.jsx(oi,{size:6}),l.jsx(oi,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(ze,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function x4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(ze,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(ze,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function b4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(oi,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:"50%",h:3,strong:!0}),l.jsx(ze,{w:"75%",h:2})]}),l.jsx(ze,{w:30,h:2})]})}function v4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(ze,{w:"65%",h:4,strong:!0}),l.jsx(ze,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(ze,{w:"30%",h:5,strong:!0}),l.jsx(Kn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function w4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(oi,{size:i}),l.jsx(ze,{w:t*.45,h:4,strong:!0}),l.jsx(ze,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(ze,{w:20,h:3,strong:!0}),l.jsx(ze,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(ze,{w:20,h:3,strong:!0}),l.jsx(ze,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(ze,{w:20,h:3,strong:!0}),l.jsx(ze,{w:28,h:2})]})]})]})}function S4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(ze,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(ze,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function C4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(ze,{w:"70%",h:3,strong:!0}),l.jsx(ze,{w:"90%",h:2}),l.jsx(ze,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function k4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Kn,{w:i,h:i,radius:i*.25}),l.jsx(ze,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function j4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(ze,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function M4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function T4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function E4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function A4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function D4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(ze,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(ze,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function N4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function R4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(ze,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function B4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function L4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function O4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Kn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(ze,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(ze,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function z4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(ze,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(oi,{size:a}),l.jsx(ze,{w:t*.12,h:3,strong:!0}),l.jsx(ze,{w:t*.08,h:2})]},u))})]})}function $4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(ze,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(ze,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:Math.min(60,t*.2),h:2}),l.jsx(Kn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Kn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(ze,{w:t*.4,h:2})]})}function I4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(ze,{w:t*.4,h:4,strong:!0}),l.jsx(ze,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:50,h:2}),l.jsx(Kn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:40,h:2}),l.jsx(Kn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(ze,{w:50,h:2}),l.jsx(Kn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(ze,{w:60,h:2}),l.jsx(Kn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Kn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var P4={navigation:TS,hero:ES,sidebar:AS,footer:DS,modal:NS,card:RS,text:BS,image:LS,table:OS,list:zS,button:$S,input:IS,form:PS,tabs:HS,avatar:US,badge:VS,header:YS,section:WS,grid:FS,dropdown:XS,toggle:qS,search:GS,toast:KS,progress:QS,chart:ZS,video:JS,tooltip:e4,breadcrumb:t4,pagination:n4,divider:s4,accordion:o4,carousel:i4,pricing:a4,testimonial:r4,cta:l4,alert:c4,banner:u4,stat:d4,stepper:f4,tag:h4,rating:m4,map:p4,timeline:_4,fileUpload:g4,codeBlock:y4,calendar:x4,notification:b4,productCard:v4,profile:w4,drawer:S4,popover:C4,logo:k4,faq:j4,gallery:M4,checkbox:T4,radio:E4,slider:A4,datePicker:D4,skeleton:N4,chip:R4,icon:B4,spinner:L4,feature:O4,team:z4,login:$4,contact:I4};function H4({type:t,width:n,height:i,text:a}){const c=P4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var U4=`svg[fill=none] {
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
}`,V4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=U4}var Te=V4,al=24,Xu=5;function Hy(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],k=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],C=[];for(const ie of n)i.has(ie.id)||C.push(ie);c&&C.push(...c);for(const ie of C){const Ce=ie.x,Be=ie.x+ie.width,Z=ie.x+ie.width/2,ue=ie.y,z=ie.y+ie.height,te=ie.y+ie.height/2;for(const W of S)for(const K of[Ce,Be,Z]){const pe=K-W;Math.abs(pe)<Xu&&Math.abs(pe)<Math.abs(u)&&(u=pe)}for(const W of k)for(const K of[ue,z,te]){const pe=K-W;Math.abs(pe)<Xu&&Math.abs(pe)<Math.abs(d)&&(d=pe)}}const j=Math.abs(u)<Xu?u:0,B=Math.abs(d)<Xu?d:0,R=[],A=new Set,$=h+j,H=p+j,V=g+j,P=_+B,J=x+B,re=b+B;for(const ie of C){const Ce=ie.x,Be=ie.x+ie.width,Z=ie.x+ie.width/2,ue=ie.y,z=ie.y+ie.height,te=ie.y+ie.height/2;for(const W of[Ce,Z,Be])for(const K of[$,V,H])if(Math.abs(K-W)<.5){const pe=`x:${Math.round(W)}`;A.has(pe)||(A.add(pe),R.push({axis:"x",pos:W}))}for(const W of[ue,te,z])for(const K of[P,re,J])if(Math.abs(K-W)<.5){const pe=`y:${Math.round(W)}`;A.has(pe)||(A.add(pe),R.push({axis:"y",pos:W}))}}return{dx:j,dy:B,guides:R}}function Uy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Y4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:k}){const[C,j]=y.useState(new Set),[B,R]=y.useState(null),[A,$]=y.useState(null),[H,V]=y.useState(null),[P,J]=y.useState([]),[re,ie]=y.useState(null),[Ce,Be]=y.useState(!1),Z=y.useRef(!1),[ue,z]=y.useState(new Set),te=y.useRef(new Map),W=y.useRef(null),K=y.useRef(null),pe=y.useRef(t);pe.current=t;const N=y.useRef(_);N.current=_;const ae=y.useRef(b);ae.current=b;const oe=y.useRef(w);oe.current=w;const ce=y.useRef(x);y.useEffect(()=>{x!==ce.current&&(ce.current=x,j(new Set))},[x]);const Ee=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==Ee.current){Ee.current=S;const q=new Set(pe.current.map(Ae=>Ae.id));q.size>0&&(z(q),j(new Set),K.current=null,Yt(()=>{n([]),z(new Set)},180))}},[S,n]),y.useEffect(()=>{const q=Ae=>{const Fe=Ae.target;if(!(Fe.tagName==="INPUT"||Fe.tagName==="TEXTAREA"||Fe.isContentEditable)){if((Ae.key==="Backspace"||Ae.key==="Delete")&&C.size>0){Ae.preventDefault();const lt=new Set(C);z(lt),j(new Set),Yt(()=>{n(pe.current.filter(st=>!lt.has(st.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Ae.key)&&C.size>0){Ae.preventDefault();const lt=Ae.shiftKey?20:1,st=Ae.key==="ArrowLeft"?-lt:Ae.key==="ArrowRight"?lt:0,bt=Ae.key==="ArrowUp"?-lt:Ae.key==="ArrowDown"?lt:0;n(t.map(ct=>C.has(ct.id)?{...ct,x:Math.max(0,ct.x+st),y:Math.max(0,ct.y+bt)}:ct));return}if(Ae.key==="Escape"){i?a(null):C.size>0&&j(new Set);return}}};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[C,i,t,n,a]);const $e=y.useCallback(q=>{if(q.button!==0||p||q.target.closest(`.${Te.placement}`))return;q.preventDefault(),q.stopPropagation();const Fe=window.scrollY,Je=q.clientX,lt=q.clientY;if(i){K.current="place",d==null||d(!0);let st=!1,bt=Je,ct=lt;const rt=ot=>{bt=ot.clientX,ct=ot.clientY;const I=Math.abs(bt-Je),ne=Math.abs(ct-lt);if((I>5||ne>5)&&(st=!0),st){const de=Math.min(Je,bt),be=Math.min(lt,ct),ye=Math.abs(bt-Je),He=Math.abs(ct-lt);R({x:de,y:be,w:ye,h:He}),V({x:ot.clientX+12,y:ot.clientY+12,text:`${Math.round(ye)} × ${Math.round(He)}`})}},It=ot=>{window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",It),R(null),V(null),K.current=null,d==null||d(!1);const I=wt[i];let ne,de,be,ye;st?(ne=Math.min(Je,bt),de=Math.min(lt,ct)+Fe,be=Math.max(al,Math.abs(bt-Je)),ye=Math.max(al,Math.abs(ct-lt))):(be=I.width,ye=I.height,ne=Je-be/2,de=lt+Fe-ye/2),ne=Math.max(0,ne),de=Math.max(0,de);const He={id:Uy(),type:i,x:ne,y:de,width:be,height:ye,scrollY:Fe,timestamp:Date.now()},Re=[...t,He];n(Re),j(new Set([He.id])),a(null)};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",It)}else{q.shiftKey||j(new Set),K.current="select";let st=!1;const bt=rt=>{const It=Math.abs(rt.clientX-Je),ot=Math.abs(rt.clientY-lt);if((It>4||ot>4)&&(st=!0),st){const I=Math.min(Je,rt.clientX),ne=Math.min(lt,rt.clientY);$({x:I,y:ne,w:Math.abs(rt.clientX-Je),h:Math.abs(rt.clientY-lt)})}},ct=rt=>{if(window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",ct),K.current=null,st){const It=Math.min(Je,rt.clientX),ot=Math.min(lt,rt.clientY)+Fe,I=Math.abs(rt.clientX-Je),ne=Math.abs(rt.clientY-lt),de=new Set(q.shiftKey?C:new Set);for(const be of t)be.y-Fe,be.x+be.width>It&&be.x<It+I&&be.y+be.height>ot&&be.y<ot+ne&&de.add(be.id);j(de)}$(null)};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",ct)}},[i,p,t,n,C]),Ne=y.useCallback((q,Ae)=>{var He;if(q.button!==0)return;const Fe=q.target;if(Fe.closest(`.${Te.handle}`)||Fe.closest(`.${Te.deleteButton}`))return;q.preventDefault(),q.stopPropagation();let Je;q.shiftKey?(Je=new Set(C),Je.has(Ae)?Je.delete(Ae):Je.add(Ae)):C.has(Ae)?Je=new Set(C):Je=new Set([Ae]),j(Je),(Je.size!==C.size||[...Je].some(Re=>!C.has(Re)))&&((He=N.current)==null||He.call(N,Je,q.shiftKey));const st=q.clientX,bt=q.clientY,ct=new Map;for(const Re of t)Je.has(Re.id)&&ct.set(Re.id,{x:Re.x,y:Re.y});K.current="move",d==null||d(!0);let rt=!1,It=!1,ot=t,I=0,ne=0;const de=new Map;for(const Re of t)ct.has(Re.id)&&de.set(Re.id,{w:Re.width,h:Re.height});const be=Re=>{var fn;const Xe=Re.clientX-st,vt=Re.clientY-bt;if((Math.abs(Xe)>2||Math.abs(vt)>2)&&(rt=!0),!rt)return;if(Re.altKey&&!It){It=!0;const mt=[];for(const Ut of t)ct.has(Ut.id)&&mt.push({...Ut,id:Uy(),timestamp:Date.now()});ot=[...t,...mt]}let Rt=1/0,pt=1/0,Ge=-1/0,Nt=-1/0;for(const[mt,Ut]of ct){const On=de.get(mt);On&&(Rt=Math.min(Rt,Ut.x+Xe),pt=Math.min(pt,Ut.y+vt),Ge=Math.max(Ge,Ut.x+Xe+On.w),Nt=Math.max(Nt,Ut.y+vt+On.h))}const Gt={x:Rt,y:pt,width:Ge-Rt,height:Nt-pt},{dx:Zt,dy:Pe,guides:$t}=Hy(Gt,ot,new Set(ct.keys()),void 0,g);J($t);const gt=Xe+Zt,ht=vt+Pe;I=gt,ne=ht,n(ot.map(mt=>{const Ut=ct.get(mt.id);return Ut?{...mt,x:Math.max(0,Ut.x+gt),y:Math.max(0,Ut.y+ht)}:mt})),(fn=ae.current)==null||fn.call(ae,gt,ht)},ye=()=>{var Re;window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",ye),K.current=null,d==null||d(!1),J([]),(Re=oe.current)==null||Re.call(oe,I,ne,rt)};window.addEventListener("mousemove",be),window.addEventListener("mouseup",ye)},[C,t,n,d]),ft=y.useCallback((q,Ae,Fe)=>{q.preventDefault(),q.stopPropagation();const Je=t.find(de=>de.id===Ae);if(!Je)return;j(new Set([Ae])),K.current="resize",d==null||d(!0);const lt=q.clientX,st=q.clientY,bt=Je.width,ct=Je.height,rt=Je.x,It=Je.y,ot={left:Fe.includes("w"),right:Fe.includes("e"),top:Fe.includes("n"),bottom:Fe.includes("s")},I=de=>{const be=de.clientX-lt,ye=de.clientY-st;let He=bt,Re=ct,Xe=rt,vt=It;Fe.includes("e")&&(He=Math.max(al,bt+be)),Fe.includes("w")&&(He=Math.max(al,bt-be),Xe=rt+bt-He),Fe.includes("s")&&(Re=Math.max(al,ct+ye)),Fe.includes("n")&&(Re=Math.max(al,ct-ye),vt=It+ct-Re);const Rt={x:Xe,y:vt,width:He,height:Re},{dx:pt,dy:Ge,guides:Nt}=Hy(Rt,pe.current,new Set([Ae]),ot,g);J(Nt),pt!==0&&(ot.right?He+=pt:ot.left&&(Xe+=pt,He-=pt)),Ge!==0&&(ot.bottom?Re+=Ge:ot.top&&(vt+=Ge,Re-=Ge)),n(pe.current.map(Gt=>Gt.id===Ae?{...Gt,x:Xe,y:vt,width:He,height:Re}:Gt)),V({x:de.clientX+12,y:de.clientY+12,text:`${Math.round(He)} × ${Math.round(Re)}`})},ne=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",ne),V(null),K.current=null,d==null||d(!1),J([])};window.addEventListener("mousemove",I),window.addEventListener("mouseup",ne)},[t,n,d]),Oe=y.useCallback(q=>{K.current=null,z(Ae=>{const Fe=new Set(Ae);return Fe.add(q),Fe}),j(Ae=>{const Fe=new Set(Ae);return Fe.delete(q),Fe}),Yt(()=>{n(pe.current.filter(Ae=>Ae.id!==q)),z(Ae=>{const Fe=new Set(Ae);return Fe.delete(q),Fe})},180)},[n]),at={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},tt=y.useCallback(q=>{const Ae=t.find(Fe=>Fe.id===q);Ae&&(Z.current=!!Ae.text,ie(q),Be(!1))},[t]),St=y.useCallback(()=>{re&&(Be(!0),Yt(()=>{ie(null),Be(!1)},150))},[re]);y.useEffect(()=>{u&&re&&St()},[u]);const Qe=y.useCallback(q=>{re&&(n(t.map(Ae=>Ae.id===re?{...Ae,text:q.trim()||void 0}:Ae)),St())},[re,t,n,St]),Dt=typeof window<"u"?window.scrollY:0,ln=["nw","ne","se","sw"],Ht=k?"#f97316":"#3c82f7",en=[{dir:"n",cls:Te.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Ht})})},{dir:"e",cls:Te.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Ht})})},{dir:"s",cls:Te.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Ht})})},{dir:"w",cls:Te.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Ht})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:W,className:`${Te.overlay} ${c?"":Te.light} ${i?Te.placing:""} ${p?Te.passthrough:""} ${u?Te.overlayExiting:""} ${k?Te.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:$e,children:t.map(q=>{var lt;const Ae=C.has(q.id),Fe=((lt=Qi[q.type])==null?void 0:lt.label)||q.type,Je=q.y-Dt;return l.jsxs("div",{"data-design-placement":q.id,className:`${Te.placement} ${Ae?Te.selected:""} ${ue.has(q.id)?Te.exiting:""}`,style:{left:q.x,top:Je,width:q.width,height:q.height,position:"fixed"},onMouseDown:st=>Ne(st,q.id),onDoubleClick:()=>tt(q.id),children:[l.jsx("span",{className:Te.placementLabel,children:Fe}),l.jsx("span",{className:`${Te.placementAnnotation} ${q.text?Te.annotationVisible:""}`,children:(q.text&&te.current.set(q.id,q.text),q.text||te.current.get(q.id)||"")}),l.jsx("div",{className:Te.placementContent,children:l.jsx(H4,{type:q.type,width:q.width,height:q.height,text:q.text})}),l.jsx("div",{className:Te.deleteButton,onMouseDown:st=>st.stopPropagation(),onClick:()=>Oe(q.id),children:"✕"}),ln.map(st=>l.jsx("div",{className:`${Te.handle} ${Te[`handle${st.charAt(0).toUpperCase()}${st.slice(1)}`]}`,onMouseDown:bt=>ft(bt,q.id,st)},st)),en.map(({dir:st,cls:bt,arrow:ct})=>l.jsx("div",{className:`${Te.edgeHandle} ${bt}`,onMouseDown:rt=>ft(rt,q.id,st),children:ct},st))]},q.id)})}),re&&(()=>{var It,ot;const q=t.find(I=>I.id===re);if(!q)return null;const Ae=q.y-Dt,Fe=q.x+q.width/2,Je=Ae-8,lt=Ae+q.height+8,st=Je>200,bt=lt<window.innerHeight-100,ct=Math.max(160,Math.min(window.innerWidth-160,Fe));let rt;return st?rt={left:ct,bottom:window.innerHeight-Je}:bt?rt={left:ct,top:lt}:rt={left:ct,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Md,{element:((It=Qi[q.type])==null?void 0:It.label)||q.type,placeholder:at[q.type]||"Label or content text",initialValue:(ot=q.text)!=null?ot:"",submitLabel:Z.current?"Save":"Set",onSubmit:Qe,onCancel:St,onDelete:Z.current?()=>{Qe("")}:void 0,isExiting:Ce,lightMode:!c,style:rt})})(),B&&l.jsx("div",{className:Te.drawBox,style:{left:B.x,top:B.y,width:B.w,height:B.h},"data-feedback-toolbar":!0}),A&&l.jsx("div",{className:Te.selectBox,style:{left:A.x,top:A.y,width:A.w,height:A.h},"data-feedback-toolbar":!0}),H&&l.jsx("div",{className:Te.sizeIndicator,style:{left:H.x,top:H.y},"data-feedback-toolbar":!0,children:H.text}),P.map((q,Ae)=>l.jsx("div",{className:Te.guideLine,style:q.axis==="x"?{position:"fixed",left:q.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:q.pos-Dt,right:0,height:1},"data-feedback-toolbar":!0},`${q.axis}-${q.pos}-${Ae}`))]})}function W4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Te.fadeTop:""} ${i?Te.fadeBottom:""}`}var L="currentColor",Me="0.5";function F4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:L,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:L,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:L,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:L,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:L,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:L,strokeWidth:Me})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:L,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:L,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:L,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:L,strokeWidth:Me})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:L,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:L,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:L,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:L,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:L,strokeWidth:Me,fill:L,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:L,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:L,strokeWidth:Me})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:L,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:L,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:L,strokeWidth:Me})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:L,strokeWidth:Me,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:L,strokeWidth:Me,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:L,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:L,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:L,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:L,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:L,strokeWidth:Me})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:L,strokeWidth:Me})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:L,strokeWidth:Me,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:L,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:L,strokeWidth:Me})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:L,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:L,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:L,opacity:".15",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:L,strokeWidth:Me})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:L,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:L,strokeWidth:Me})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:L,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:L,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:L,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:L,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:L,strokeWidth:Me,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:L,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:L,strokeWidth:Me})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:L,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:L,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:L,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:L,strokeWidth:Me})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:L,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:L,opacity:".2",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:L,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:L,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:L,strokeWidth:Me})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:L,strokeWidth:Me,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:L,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:L,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:L,strokeWidth:Me,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:L,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:L,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:L,opacity:".15",stroke:L,strokeWidth:Me})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:L,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:L,opacity:".2",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:L,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:L,strokeWidth:Me,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:L,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:L,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:L,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:L,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:L,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:L,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:L,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:L,strokeWidth:Me,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:L,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:L,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:L,strokeWidth:Me})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:L,strokeWidth:Me,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:L,strokeWidth:Me})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:L,strokeWidth:Me,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:L,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:L,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:L,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:L,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:L,strokeWidth:Me})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:L,strokeWidth:Me,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:L,strokeWidth:Me}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:L,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:L,strokeWidth:Me})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:L,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:L,strokeWidth:Me,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:L,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:L,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:L,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:L,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:L,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:L,opacity:".08",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:L,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:L,strokeWidth:Me,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:L,strokeWidth:Me,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:L,strokeWidth:Me,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:L,strokeWidth:Me,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:L,strokeWidth:Me,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:L,strokeWidth:Me,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:L,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:L,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:L,strokeWidth:Me,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:L,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:L,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:L,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:L,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:L,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:L,strokeWidth:Me}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:L,opacity:".2"})]});default:return null}}function X4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Te.placeScroll} ${c||""}`,children:Kx.map(d=>l.jsxs("div",{className:Te.paletteSection,children:[l.jsx("div",{className:Te.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Te.paletteItem} ${t===h.type?Te.active:""} ${u?Te.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Te.paletteItemIcon,children:l.jsx(F4,{type:h.type})}),l.jsx("span",{className:Te.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function q4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Yt(()=>a(null),250)}else g.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Te.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Te.rollingNum} ${d==="up"?Te.exitUp:Te.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Te.rollingNum} ${d==="up"?Te.enterUp:Te.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Te.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Te.rollingNum} ${d==="up"?Te.exitUp:Te.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Te.rollingNum} ${d==="up"?Te.enterUp:Te.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function G4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[k,C]=y.useState(!1),[j,B]=y.useState("exit"),[R,A]=y.useState(!1),[$,H]=y.useState(!0),V=y.useRef(0),P=y.useRef(""),J=y.useRef(0),re=y.useRef(),ie=y.useRef(null),[Ce,Be]=y.useState("");y.useEffect(()=>(u?(C(!0),clearTimeout(re.current),cancelAnimationFrame(J.current),J.current=ul(()=>{J.current=ul(()=>{B("enter")})})):(cancelAnimationFrame(J.current),B("exit"),clearTimeout(re.current),re.current=Yt(()=>{C(!1),d==null||d()},200)),()=>cancelAnimationFrame(J.current)),[u]);const Z=h>0||a>0,ue=h+a;return ue>0&&(V.current=ue,P.current=_?ue===1?"Component":"Components":ue===1?"Change":"Changes"),y.useEffect(()=>{if(Z)R?H(!1):(H(!0),A(!0),ul(()=>{ul(()=>{H(!1)})}));else{H(!0);const z=Yt(()=>A(!1),300);return()=>clearTimeout(z)}},[Z]),y.useEffect(()=>{if(!k)return;const z=ie.current;if(!z)return;const te=()=>Be(W4(z));te(),z.addEventListener("scroll",te,{passive:!0});const W=new ResizeObserver(te);return W.observe(z),()=>{z.removeEventListener("scroll",te),W.disconnect()}},[k]),k?l.jsxs("div",{className:`${Te.palette} ${Te[j]} ${i?"":Te.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(re.current),C(!1),B("exit"),d==null||d()))},children:[l.jsxs("div",{className:Te.paletteHeader,children:[l.jsx("div",{className:Te.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Te.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Te.canvasToggle} ${_?Te.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:Te.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Te.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Te.wireframePurposeWrap} ${_?"":Te.collapsed}`,children:l.jsx("div",{className:Te.wireframePurposeInner,children:l.jsx("textarea",{className:Te.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:z=>w(z.target.value),rows:2})})}),l.jsx(X4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:ie,fadeClass:Ce,blankCanvas:_}),R&&l.jsx("div",{className:`${Te.paletteFooterWrap} ${$?Te.footerHidden:""}`,children:l.jsx("div",{className:Te.paletteFooterInner,children:l.jsx("div",{className:Te.paletteFooterInnerContent,children:l.jsxs("div",{className:Te.paletteFooter,children:[l.jsx("span",{className:Te.paletteFooterCount,children:l.jsx(q4,{value:V.current,suffix:P.current})}),l.jsx("button",{className:Te.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function pl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function ei(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=pl(i)}return null}function K4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=pl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ml(t){var a,c,u,d,h,p,g,_;const n=K4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=ei(t,"svg");if(x){const b=pl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ml(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=pl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(k=>k.replace(/[A-Z0-9]{5,}.*$/,"")).filter(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function rc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function qu(t){const n=pl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const k=b.split(/\s+/).map(C=>C.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(C=>C.length>2&&!/^[a-z]{1,2}$/.test(C));k&&(w=`.${k}`)}if(x==="button"||x==="a"){const k=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(k)return`${x}${w} "${k}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function lc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Qx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Q4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Z4=new Set(["input","textarea","select"]),J4=new Set(["img","video","canvas","svg"]),e6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Gu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;Q4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Z4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:J4.has(a)?c=["width","height","objectFit","borderRadius"]:e6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Qx.has(h)&&(i[u]=h)}return i}var t6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of t6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Qx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function n6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=pl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var s6=new Set(["nav","header","main","section","article","footer","aside"]),Rm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Vy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},o6=new Set(["script","style","noscript","link","meta"]),i6=40;function Zx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Dr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Dr(i)} > ${n}:nth-child(${c})`}return n}function Td(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Rm[a])return Rm[a];if(Vy[n])return Vy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ml(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Jx(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function eb(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function a6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(o6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<i6)return;const g=s6.has(d),_=c.getAttribute("role")&&Rm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,w=Zx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Td(c),tagName:d,selector:Dr(c),role:c.getAttribute("role"),className:Jx(c),textSnippet:eb(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function r6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Zx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Td(t),tagName:t.tagName.toLowerCase(),selector:Dr(t),role:t.getAttribute("role"),className:Jx(t),textSnippet:eb(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Yy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Wy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Fy=16,ed=5;function Xy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const V of n)i.has(V.id)||b.push(V.currentRect);a&&b.push(...a);for(const V of b){const P=V.x,J=V.x+V.width,re=V.x+V.width/2,ie=V.y,Ce=V.y+V.height,Be=V.y+V.height/2;for(const Z of[d,h,p])for(const ue of[P,J,re]){const z=ue-Z;Math.abs(z)<ed&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const Z of[g,_,x])for(const ue of[ie,Ce,Be]){const z=ue-Z;Math.abs(z)<ed&&Math.abs(z)<Math.abs(u)&&(u=z)}}const w=Math.abs(c)<ed?c:0,S=Math.abs(u)<ed?u:0,k=[],C=new Set,j=d+w,B=h+w,R=p+w,A=g+S,$=_+S,H=x+S;for(const V of b){const P=V.x,J=V.x+V.width,re=V.x+V.width/2,ie=V.y,Ce=V.y+V.height,Be=V.y+V.height/2;for(const Z of[P,re,J])for(const ue of[j,R,B])if(Math.abs(ue-Z)<.5){const z=`x:${Math.round(Z)}`;C.has(z)||(C.add(z),k.push({axis:"x",pos:Z}))}for(const Z of[ie,Be,Ce])for(const ue of[A,H,$])if(Math.abs(ue-Z)<.5){const z=`y:${Math.round(Z)}`;C.has(z)||(C.add(z),k.push({axis:"y",pos:Z}))}}return{dx:w,dy:S,guides:k}}var l6=new Set(["script","style","noscript","link","meta","br","hr"]);function qy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(l6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Fy&&i.height>=Fy)return n;n=n.parentElement}return null}function c6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,k]=y.useState(new Set),[C,j]=y.useState(!1),B=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==B.current&&(B.current=x,b.length>0&&j(!0))},[x,b.length]);const R=y.useRef(p);y.useEffect(()=>{p!==R.current&&(R.current=p,k(new Set))},[p]);const[A,$]=y.useState(null),[H,V]=y.useState(!1),P=y.useRef(!1),J=y.useCallback(I=>{const ne=b.find(de=>de.id===I);ne&&(P.current=!!ne.note,$(I),V(!1))},[b]),re=y.useCallback(()=>{A&&(V(!0),Yt(()=>{$(null),V(!1)},150))},[A]),ie=y.useCallback(I=>{A&&(n({...t,sections:b.map(ne=>ne.id===A?{...ne,note:I.trim()||void 0}:ne)}),re())},[A,b,t,n,re]);y.useEffect(()=>{a&&A&&re()},[a]);const[Ce,Be]=y.useState(new Set),Z=y.useRef(new Map),[ue,z]=y.useState(null),[te,W]=y.useState(null),[K,pe]=y.useState([]),[N,ae]=y.useState(0),oe=y.useRef(null),ce=y.useRef(new Set),Ee=y.useRef(new Map),[$e,Ne]=y.useState(new Map),[ft,Oe]=y.useState(new Map),at=y.useRef(new Set),tt=y.useRef(new Map),St=y.useRef(h);St.current=h;const Qe=y.useRef(g);Qe.current=g;const Dt=y.useRef(_);Dt.current=_,y.useEffect(()=>{u&&k(new Set)},[u]);const[ln,Ht]=y.useState(()=>!t.sections.some(I=>{const ne=I.originalRect,de=I.currentRect;return Math.abs(ne.x-de.x)>1||Math.abs(ne.y-de.y)>1||Math.abs(ne.width-de.width)>1||Math.abs(ne.height-de.height)>1}));y.useEffect(()=>{if(!ln){const I=Yt(()=>Ht(!0),380);return()=>clearTimeout(I)}},[]);const en=y.useRef(new Set);y.useEffect(()=>{en.current=new Set(b.map(I=>I.selector))},[b]),y.useEffect(()=>{const I=()=>ae(window.scrollY);return I(),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}},[]),y.useEffect(()=>{const I=ne=>{if(oe.current){z(null);return}const de=document.elementFromPoint(ne.clientX,ne.clientY);if(!de){z(null);return}if(de.closest("[data-feedback-toolbar]")){z(null);return}if(de.closest("[data-design-placement]")){z(null);return}if(de.closest("[data-annotation-popup]")){z(null);return}const be=qy(de);if(!be){z(null);return}for(const He of en.current)try{const Re=document.querySelector(He);if(Re&&(Re===be||be.contains(Re))){z(null);return}}catch{}const ye=be.getBoundingClientRect();z({x:ye.x,y:ye.y,w:ye.width,h:ye.height})};return document.addEventListener("mousemove",I,{passive:!0}),()=>document.removeEventListener("mousemove",I)},[b]),y.useEffect(()=>{const I=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=I}},[]),y.useEffect(()=>{const I=ne=>{var Re,Xe,vt,Rt;if(oe.current||ne.button!==0)return;const de=ne.target;if(!de||de.closest("[data-feedback-toolbar]")||de.closest("[data-design-placement]")||de.closest("[data-annotation-popup]"))return;const be=qy(de);let ye=!1;if(be)for(const pt of en.current)try{const Ge=document.querySelector(pt);if(Ge&&(Ge===be||be.contains(Ge))){ye=!0;break}}catch{}const He=!!(ne.shiftKey||ne.metaKey||ne.ctrlKey);if(be&&!ye){ne.preventDefault(),ne.stopPropagation();const pt=r6(be),Ge=[...b,pt],Nt=[...t.originalOrder,pt.id];n({...t,sections:Ge,originalOrder:Nt});const Gt=new Set([pt.id]);k(Gt),(Re=St.current)==null||Re.call(St,Gt,He),z(null);const Zt=ne.clientX,Pe=ne.clientY,$t={x:pt.currentRect.x,y:pt.currentRect.y};pt.originalRect;let gt=!1,ht=0,fn=0;oe.current="move";const mt=On=>{var sn;const Yn=On.clientX-Zt,Qn=On.clientY-Pe;if(!gt&&(Math.abs(Yn)>2||Math.abs(Qn)>2)&&(gt=!0),!gt)return;const Ls={x:$t.x+Yn,y:$t.y+Qn,width:pt.currentRect.width,height:pt.currentRect.height},Fs=Xy(Ls,Ge,new Set([pt.id]),d);pe(Fs.guides);const us=Yn+Fs.dx,En=Qn+Fs.dy;ht=us,fn=En;const Pn=document.querySelector(`[data-rearrange-section="${pt.id}"]`);Pn&&(Pn.style.transform=`translate(${us}px, ${En}px)`),Ne(new Map([[pt.id,{x:$t.x+us,y:$t.y+En,width:pt.currentRect.width,height:pt.currentRect.height}]])),(sn=Qe.current)==null||sn.call(Qe,us,En)},Ut=()=>{var Yn;window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",Ut),oe.current=null,pe([]),Ne(new Map);const On=document.querySelector(`[data-rearrange-section="${pt.id}"]`);On&&(On.style.transform=""),gt&&n({...t,sections:Ge.map(Qn=>Qn.id===pt.id?{...Qn,currentRect:{...Qn.currentRect,x:Math.max(0,$t.x+ht),y:Math.max(0,$t.y+fn)}}:Qn),originalOrder:Nt}),(Yn=Dt.current)==null||Yn.call(Dt,ht,fn,gt)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",Ut)}else if(ye&&be){ne.preventDefault();for(const pt of b)try{const Ge=document.querySelector(pt.selector);if(Ge&&Ge===be){const Nt=new Set([pt.id]);k(Nt),(Xe=St.current)==null||Xe.call(St,Nt,He);return}}catch{}He||(k(new Set),(vt=St.current)==null||vt.call(St,new Set,!1))}else He||(k(new Set),(Rt=St.current)==null||Rt.call(St,new Set,!1))};return document.addEventListener("mousedown",I,!0),()=>document.removeEventListener("mousedown",I,!0)},[b,t,n]),y.useEffect(()=>{const I=ne=>{const de=ne.target;if(!(de.tagName==="INPUT"||de.tagName==="TEXTAREA"||de.isContentEditable)){if((ne.key==="Backspace"||ne.key==="Delete")&&S.size>0){ne.preventDefault();const be=new Set(S);Be(ye=>{const He=new Set(ye);for(const Re of be)He.add(Re);return He}),k(new Set),Yt(()=>{const ye=w.current;n({...ye,sections:ye.sections.filter(He=>!be.has(He.id)),originalOrder:ye.originalOrder.filter(He=>!be.has(He))}),Be(He=>{const Re=new Set(He);for(const Xe of be)Re.delete(Xe);return Re})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ne.key)&&S.size>0){ne.preventDefault();const be=ne.shiftKey?20:1,ye=ne.key==="ArrowLeft"?-be:ne.key==="ArrowRight"?be:0,He=ne.key==="ArrowUp"?-be:ne.key==="ArrowDown"?be:0;n({...t,sections:b.map(Re=>S.has(Re.id)?{...Re,currentRect:{...Re.currentRect,x:Math.max(0,Re.currentRect.x+ye),y:Math.max(0,Re.currentRect.y+He)}}:Re)});return}ne.key==="Escape"&&S.size>0&&k(new Set)}};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[S,b,t,n]);const q=y.useCallback((I,ne)=>{var Zt;if(I.button!==0)return;const de=I.target;if(de.closest(`.${Te.handle}`)||de.closest(`.${Te.deleteButton}`))return;I.preventDefault(),I.stopPropagation();let be;I.shiftKey||I.metaKey||I.ctrlKey?(be=new Set(S),be.has(ne)?be.delete(ne):be.add(ne)):S.has(ne)?be=new Set(S):be=new Set([ne]),k(be),(be.size!==S.size||[...be].some(Pe=>!S.has(Pe)))&&((Zt=St.current)==null||Zt.call(St,be,!!(I.shiftKey||I.metaKey||I.ctrlKey)));const He=I.clientX,Re=I.clientY,Xe=new Map;for(const Pe of b)be.has(Pe.id)&&Xe.set(Pe.id,{x:Pe.currentRect.x,y:Pe.currentRect.y});oe.current="move";let vt=!1,Rt=0,pt=0;const Ge=new Map;for(const Pe of b)if(be.has(Pe.id)){const $t=document.querySelector(`[data-rearrange-section="${Pe.id}"]`);Ge.set(Pe.id,{outlineEl:$t,curW:Pe.currentRect.width,curH:Pe.currentRect.height})}const Nt=Pe=>{var Fs;const $t=Pe.clientX-He,gt=Pe.clientY-Re;if($t===0&&gt===0)return;vt=!0;let ht=1/0,fn=1/0,mt=-1/0,Ut=-1/0;for(const[us,{curW:En,curH:Pn}]of Ge){const sn=Xe.get(us);if(!sn)continue;const An=sn.x+$t,nt=sn.y+gt;ht=Math.min(ht,An),fn=Math.min(fn,nt),mt=Math.max(mt,An+En),Ut=Math.max(Ut,nt+Pn)}const On=Xy({x:ht,y:fn,width:mt-ht,height:Ut-fn},b,be,d),Yn=$t+On.dx,Qn=gt+On.dy;Rt=Yn,pt=Qn,pe(On.guides);for(const[,{outlineEl:us}]of Ge)us&&(us.style.transform=`translate(${Yn}px, ${Qn}px)`);const Ls=new Map;for(const[us,{curW:En,curH:Pn}]of Ge){const sn=Xe.get(us);if(sn){const An={x:Math.max(0,sn.x+Yn),y:Math.max(0,sn.y+Qn),width:En,height:Pn};Ls.set(us,An)}}Ne(Ls),(Fs=Qe.current)==null||Fs.call(Qe,Yn,Qn)},Gt=Pe=>{var $t,gt;window.removeEventListener("mousemove",Nt),window.removeEventListener("mouseup",Gt),oe.current=null,pe([]),Ne(new Map);for(const[,{outlineEl:ht}]of Ge)ht&&(ht.style.transform="");if(vt){const ht=Pe.clientX-He,fn=Pe.clientY-Re;if(Math.abs(ht)<5&&Math.abs(fn)<5)n({...t,sections:b.map(mt=>{const Ut=Xe.get(mt.id);return Ut?{...mt,currentRect:{...mt.currentRect,x:Ut.x,y:Ut.y}}:mt})});else{n({...t,sections:b.map(mt=>{const Ut=Xe.get(mt.id);return Ut?{...mt,currentRect:{...mt.currentRect,x:Math.max(0,Ut.x+Rt),y:Math.max(0,Ut.y+pt)}}:mt})}),($t=Dt.current)==null||$t.call(Dt,Rt,pt,!0);return}}(gt=Dt.current)==null||gt.call(Dt,0,0,!1)};window.addEventListener("mousemove",Nt),window.addEventListener("mouseup",Gt)},[S,b,t,n]),Ae=y.useCallback((I,ne,de)=>{I.preventDefault(),I.stopPropagation();const be=b.find(Nt=>Nt.id===ne);if(!be)return;k(new Set([ne])),oe.current="resize";const ye=I.clientX,He=I.clientY,Re={...be.currentRect};be.originalRect;const Xe=Re.width/Re.height;let vt={...Re};const Rt=document.querySelector(`[data-rearrange-section="${ne}"]`),pt=Nt=>{const Gt=Nt.clientX-ye,Zt=Nt.clientY-He;let Pe=Re.x,$t=Re.y,gt=Re.width,ht=Re.height;if(de.includes("e")&&(gt=Math.max(Ju,Re.width+Gt)),de.includes("w")&&(gt=Math.max(Ju,Re.width-Gt),Pe=Re.x+Re.width-gt),de.includes("s")&&(ht=Math.max(Ju,Re.height+Zt)),de.includes("n")&&(ht=Math.max(Ju,Re.height-Zt),$t=Re.y+Re.height-ht),Nt.shiftKey)if(de.length===2){const mt=Math.abs(gt-Re.width),Ut=Math.abs(ht-Re.height);mt>Ut?ht=gt/Xe:gt=ht*Xe,de.includes("w")&&(Pe=Re.x+Re.width-gt),de.includes("n")&&($t=Re.y+Re.height-ht)}else de==="e"||de==="w"?ht=gt/Xe:gt=ht*Xe,de==="w"&&(Pe=Re.x+Re.width-gt),de==="n"&&($t=Re.y+Re.height-ht);vt={x:Pe,y:$t,width:gt,height:ht},Rt&&(Rt.style.left=`${Pe}px`,Rt.style.top=`${$t-N}px`,Rt.style.width=`${gt}px`,Rt.style.height=`${ht}px`),W({x:Nt.clientX+12,y:Nt.clientY+12,text:`${Math.round(gt)} × ${Math.round(ht)}`}),Ne(new Map([[ne,vt]]))},Ge=()=>{window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",Ge),W(null),oe.current=null,Ne(new Map),n({...t,sections:b.map(Nt=>Nt.id===ne?{...Nt,currentRect:vt}:Nt)})};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",Ge)},[b,t,n,N]),Fe=y.useCallback(I=>{Be(ne=>{const de=new Set(ne);return de.add(I),de}),k(ne=>{const de=new Set(ne);return de.delete(I),de}),Yt(()=>{const ne=w.current;n({...ne,sections:ne.sections.filter(de=>de.id!==I),originalOrder:ne.originalOrder.filter(de=>de!==I)}),Be(de=>{const be=new Set(de);return be.delete(I),be})},180)},[n]),Je=I=>{const ne=I.originalRect,de=I.currentRect;return Math.abs(ne.x-de.x)>1||Math.abs(ne.y-de.y)>1||Math.abs(ne.width-de.width)>1||Math.abs(ne.height-de.height)>1},lt=I=>{const ne=I.originalRect,de=I.currentRect;return Math.abs(ne.x-de.x)>1||Math.abs(ne.y-de.y)>1},st=I=>{const ne=I.originalRect,de=I.currentRect;return Math.abs(ne.width-de.width)>1||Math.abs(ne.height-de.height)>1};for(const I of b)Ee.current.has(I.id)||(lt(I)?Ee.current.set(I.id,"move"):st(I)&&Ee.current.set(I.id,"resize"));for(const I of Ee.current.keys())b.some(ne=>ne.id===I)||Ee.current.delete(I);const bt=b.filter(I=>{try{if(Ce.has(I.id)||S.has(I.id))return!0;const ne=document.querySelector(I.selector);if(!ne)return!1;const de=ne.getBoundingClientRect(),be=I.originalRect;return Math.abs(de.width-be.width)+Math.abs(de.height-be.height)<200}catch{return!1}}),ct=bt.filter(I=>Je(I)),rt=bt.filter(I=>!Je(I)),It=new Set(ct.map(I=>I.id));for(const I of ce.current)It.has(I)||ce.current.delete(I);const ot=[...It].sort().join(",");for(const I of ct)tt.current.set(I.id,{currentRect:I.currentRect,originalRect:I.originalRect,isFixed:I.isFixed});return y.useEffect(()=>{const I=at.current;at.current=It;const ne=new Map;for(const de of I)if(!It.has(de)){if(!b.some(ye=>ye.id===de))continue;const be=tt.current.get(de);be&&(ne.set(de,{orig:be.originalRect,target:be.currentRect,isFixed:be.isFixed}),tt.current.delete(de))}if(ne.size>0){Oe(be=>{const ye=new Map(be);for(const[He,Re]of ne)ye.set(He,Re);return ye});const de=Yt(()=>{Oe(be=>{const ye=new Map(be);for(const He of ne.keys())ye.delete(He);return ye})},250);return()=>clearTimeout(de)}},[ot,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Te.rearrangeOverlay} ${i?"":Te.light} ${a?Te.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ue&&l.jsx("div",{className:Te.hoverHighlight,style:{left:ue.x,top:ue.y,width:ue.w,height:ue.h}}),rt.map(I=>{const ne=I.currentRect,de=I.isFixed?ne.y:ne.y-N,be=Yy,ye=S.has(I.id);return l.jsxs("div",{"data-rearrange-section":I.id,className:`${Te.sectionOutline} ${ye?Te.selected:""} ${C||a||Ce.has(I.id)?Te.exiting:""}`,style:{left:ne.x,top:de,width:ne.width,height:ne.height,borderColor:be.border,backgroundColor:be.bg,...ln?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:He=>q(He,I.id),onDoubleClick:()=>J(I.id),children:[l.jsx("span",{className:Te.sectionLabel,style:{backgroundColor:be.pill},children:I.label}),l.jsx("span",{className:`${Te.sectionAnnotation} ${I.note?Te.annotationVisible:""}`,children:(I.note&&Z.current.set(I.id,I.note),I.note||Z.current.get(I.id)||"")}),l.jsxs("span",{className:Te.sectionDimensions,children:[Math.round(ne.width)," × ",Math.round(ne.height)]}),l.jsx("div",{className:Te.deleteButton,onMouseDown:He=>He.stopPropagation(),onClick:()=>Fe(I.id),children:"✕"}),Wy.map(He=>l.jsx("div",{className:`${Te.handle} ${Te[`handle${He.charAt(0).toUpperCase()}${He.slice(1)}`]}`,onMouseDown:Re=>Ae(Re,I.id,He)},He))]},I.id)}),ct.map(I=>{const ne=I.currentRect,de=I.isFixed?ne.y:ne.y-N,be=S.has(I.id),ye=lt(I),He=st(I);if(u&&!be)return null;const Xe=!ce.current.has(I.id);return Xe&&ce.current.add(I.id),l.jsxs("div",{"data-rearrange-section":I.id,className:`${Te.ghostOutline} ${be?Te.selected:""} ${C||a||Ce.has(I.id)?Te.exiting:""}`,style:{left:ne.x,top:de,width:ne.width,height:ne.height,...ln?{}:{opacity:0,animation:"none",transition:"none"},...Xe?{}:{animation:"none"}},onMouseDown:vt=>q(vt,I.id),onDoubleClick:()=>J(I.id),children:[l.jsx("span",{className:Te.sectionLabel,style:{backgroundColor:Yy.pill},children:I.label}),l.jsx("span",{className:`${Te.sectionAnnotation} ${I.note?Te.annotationVisible:""}`,children:(I.note&&Z.current.set(I.id,I.note),I.note||Z.current.get(I.id)||"")}),l.jsxs("span",{className:Te.sectionDimensions,children:[Math.round(ne.width)," × ",Math.round(ne.height)]}),l.jsx("div",{className:Te.deleteButton,onMouseDown:vt=>vt.stopPropagation(),onClick:()=>Fe(I.id),children:"✕"}),Wy.map(vt=>l.jsx("div",{className:`${Te.handle} ${Te[`handle${vt.charAt(0).toUpperCase()}${vt.slice(1)}`]}`,onMouseDown:Rt=>Ae(Rt,I.id,vt)},vt)),l.jsx("span",{className:Te.ghostBadge,children:(()=>{const vt=Ee.current.get(I.id);if(ye&&He){const[Rt,pt]=vt==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Rt," ",l.jsxs("span",{className:Te.ghostBadgeExtra,children:["& ",pt]})]})}return`Suggested ${He?"Resize":"Move"}`})()})]},I.id)})]}),!u&&(()=>{const I=[];for(const ne of ct){const de=$e.get(ne.id);I.push({id:ne.id,orig:ne.originalRect,target:de||ne.currentRect,isFixed:ne.isFixed,isSelected:S.has(ne.id),isExiting:Ce.has(ne.id)})}for(const[ne,de]of $e)if(!I.some(be=>be.id===ne)){const be=b.find(ye=>ye.id===ne);be&&I.push({id:ne,orig:be.originalRect,target:de,isFixed:be.isFixed,isSelected:S.has(ne)})}for(const[ne,de]of ft)I.some(be=>be.id===ne)||I.push({id:ne,orig:de.orig,target:de.target,isFixed:de.isFixed,isSelected:!1,isExiting:!0});return I.length===0?null:l.jsxs("svg",{className:`${Te.connectorSvg} ${C||a?Te.connectorExiting:""}`,children:[I.map(({id:ne,orig:de,target:be,isFixed:ye,isSelected:He,isExiting:Re})=>{const Xe=de.x+de.width/2,vt=(ye?de.y:de.y-N)+de.height/2,Rt=be.x+be.width/2,pt=(ye?be.y:be.y-N)+be.height/2,Ge=Rt-Xe,Nt=pt-vt,Gt=Math.sqrt(Ge*Ge+Nt*Nt);if(Gt<2)return null;const Zt=Math.min(1,Gt/40),Pe=Math.min(Gt*.3,60),$t=Gt>0?-Nt/Gt:0,gt=Gt>0?Ge/Gt:0,ht=(Xe+Rt)/2+$t*Pe,fn=(vt+pt)/2+gt*Pe,mt=$e.has(ne),Ut=mt||He?1:.4,On=mt||He?1:.5;return l.jsxs("g",{className:Re?Te.connectorExiting:"",children:[l.jsx("path",{className:Te.connectorLine,d:`M ${Xe} ${vt} Q ${ht} ${fn} ${Rt} ${pt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ut*Zt}),l.jsx("circle",{className:Te.connectorDot,cx:Xe,cy:vt,r:4*Zt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:On*Zt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Te.connectorDot,cx:Rt,cy:pt,r:4*Zt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:On*Zt,filter:"url(#connDotShadow)"})]},`conn-${ne}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),A&&(()=>{var pt;const I=b.find(Ge=>Ge.id===A);if(!I)return null;const ne=I.currentRect,de=I.isFixed?ne.y:ne.y-N,be=ne.x+ne.width/2,ye=de-8,He=de+ne.height+8,Re=ye>200,Xe=He<window.innerHeight-100,vt=Math.max(160,Math.min(window.innerWidth-160,be));let Rt;return Re?Rt={left:vt,bottom:window.innerHeight-ye}:Xe?Rt={left:vt,top:He}:Rt={left:vt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(Md,{element:I.label,placeholder:"Add a note about this section",initialValue:(pt=I.note)!=null?pt:"",submitLabel:P.current?"Save":"Set",onSubmit:ie,onCancel:re,onDelete:P.current?()=>{ie("")}:void 0,isExiting:H,lightMode:!i,style:Rt})})(),te&&l.jsx("div",{className:Te.sizeIndicator,style:{left:te.x,top:te.y},"data-feedback-toolbar":!0,children:te.text}),K.map((I,ne)=>l.jsx("div",{className:Te.guideLine,style:I.axis==="x"?{position:"fixed",left:I.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:I.pos-N,width:"100vw",height:1}},`${I.axis}-${I.pos}-${ne}`))]})}var Bm=new Set(["script","style","noscript","link","meta","br","hr"]);function u6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Bm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Td(c),selector:Dr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Bm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:Td(h),selector:Dr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function d6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function f6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Lm(t,n){const i=n?d6(n):u6(),a=f6(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const k=a.right>S.left+5&&a.left<S.right-5,C=a.bottom>S.top+5&&a.top<S.bottom-5;if(k&&S.bottom<=a.top+5){const j=Math.round(a.top-S.bottom);(!c||j<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(k&&S.top>=a.bottom-5){const j=Math.round(S.top-a.bottom);(!u||j<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(C&&S.right<=a.left+5){const j=Math.round(a.left-S.right);(!d||j<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(C&&S.left>=a.right-5){const j=Math.round(S.left-a.right);(!h||j<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}}const g=window.innerWidth,_=window.innerHeight,x=m6(t,g),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=h6(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function h6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function m6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function tb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function nb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=tb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function p6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(tb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Gy=15;function Ky(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Gy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Gy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function _6(t){var d;if(t.length<2)return[];const n=Ky(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Ky(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(w=>p.has(w)),b=x.join(", ");if(g.type!==h.type){const w=h.type==="row"?"y":"x",S=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${S}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${g.sharedEdge}`:"",k=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${k}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function sb(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Bm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Dr(h)}}}return{viewport:t,contentArea:null}}function g6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Dr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ob(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function ib(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function y6(t){const n=g6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Qy(t,n,i,a="standard"){var C,j,B,R;if(t.length===0)return"";const c=[...t].sort((A,$)=>Math.abs(A.y-$.y)<20?A.x-$.x:A.y-$.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((A,$)=>{var V;const H=((V=Qi[A.type])==null?void 0:V.label)||A.type;u+=`${$+1}. **${H}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}),u;const d=sb(n);u+=ib(d),u+=`### Components
`,c.forEach((A,$)=>{var Ce;const H=((Ce=Qi[A.type])==null?void 0:Ce.label)||A.type,V={x:A.x,y:A.y,width:A.width,height:A.height};u+=`${$+1}. **${H}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`;const P=Lm(V),re=nb(P,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Be of re)u+=`   - ${Be}
`;const ie=ob(V,d);ie&&(u+=`   - CSS: ${ie}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const A of c){const $=h.find(H=>Math.abs(H.y-A.y)<30);$?$.items.push(A):h.push({y:A.y,items:[A]})}if(h.sort((A,$)=>A.y-$.y),h.forEach((A,$)=>{A.items.sort((V,P)=>V.x-P.x);const H=A.items.map(V=>{var P;return((P=Qi[V.type])==null?void 0:P.label)||V.type});if(A.items.length===1){const P=A.items[0].width>n.width*.8;u+=`- Row ${$+1} (y≈${Math.round(A.y)}): ${H[0]}${P?" — full width":""}
`}else u+=`- Row ${$+1} (y≈${Math.round(A.y)}): ${H.join(" | ")} — ${A.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let A=0;A<c.length-1;A++){const $=c[A],H=c[A+1],V=((C=Qi[$.type])==null?void 0:C.label)||$.type,P=((j=Qi[H.type])==null?void 0:j.label)||H.type,J=Math.round(H.y-($.y+$.height)),re=Math.round(H.x-($.x+$.width));Math.abs($.y-H.y)<30?u+=`- ${V} → ${P}: \`${re}px\` horizontal gap
`:u+=`- ${V} → ${P}: \`${J}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let A=0;A<c.length;A++)for(let $=A+1;$<c.length;$++){const H=c[A],V=c[$],P=((B=Qi[H.type])==null?void 0:B.label)||H.type,J=((R=Qi[V.type])==null?void 0:R.label)||V.type,re=Math.round(V.y-(H.y+H.height)),ie=Math.round(V.x-(H.x+H.width));u+=`- ${P} ↔ ${J}: h=\`${ie}px\` v=\`${re}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((A,$)=>{var V;const H=((V=Qi[A.type])==null?void 0:V.label)||A.type;u+=`${$}. ${H} at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
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
`,_){const A=c.find($=>$.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(A.width)}px 1fr;\`
`}if(b.length>1){const A=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${A}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Zy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

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
`,x){const C=Lm(w,g("original")),j=Lm(S,g("current")),B=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${p6(C,{x:w.x,y:w.y},B)}
`;const R=b?{width:S.width,height:S.height}:void 0,A=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,$=R?`, ${Math.round(R.width)}×${Math.round(R.height)}px`:"",V=nb(j,{includeLeftRight:n==="detailed"||n==="forensic"});if(V.length>0){u+=`  - Suggested position ${A}${$}: ${V[0]}
`;for(let J=1;J<V.length;J++)u+=`    ${V[J]}
`}else u+=`  - Suggested position ${A}${$}
`;const P=ob(S,p);P&&(u+=`  - CSS: ${P}
`)}const k=y6(_.selector);if(k&&(u+=`  - ${k}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const C=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;C!==_.selector&&(u+=`  - Element: \`${C}\`
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
`}}return u}var Om="feedback-annotations-",ab=7;function Ed(t){return`${Om}${t}`}function em(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Ed(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-ab*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function rb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Ed(t),JSON.stringify(n))}catch{}}function x6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-ab*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Om)){const c=a.slice(Om.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));rb(t,a)}var hp="agentation-design-";function b6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function v6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function w6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-rearrange-";function S6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function C6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function k6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-wireframe-";function j6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Jy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var lb="agentation-session-";function _p(t){return`${lb}${t}`}function M6(t){if(typeof window>"u")return null;try{return localStorage.getItem(_p(t))}catch{return null}}function tm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(_p(t),n)}catch{}}function T6(t){if(!(typeof window>"u"))try{localStorage.removeItem(_p(t))}catch{}}var cb=`${lb}toolbar-hidden`;function E6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(cb)==="1"}catch{return!1}}function A6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(cb,"1")}catch{}}async function nm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function e1(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function rl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function t1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Ka(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var In={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},n1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),s1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],D6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function N6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=n1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...n1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...s1,...t.skipPatterns]:s1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:D6,filter:t==null?void 0:t.filter}}function R6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function B6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function L6(t,n){const i=R6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function O6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&L6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ll=null,z6=new WeakMap;function sm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function $6(){if(ll!==null)return ll;if(typeof document>"u")return!1;if(document.body&&sm(document.body))return ll=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&sm(i))return ll=!0,!0}if(document.body){for(const n of document.body.children)if(sm(n))return ll=!0,!0}return ll=!1,!1}var uc={map:z6};function I6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function P6(t){const n=I6(t);return n?t[n]:null}function xr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function H6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===In.HostComponent||n===In.HostText||n===In.HostHoistable||n===In.HostSingleton||n===In.Fragment||n===In.Mode||n===In.Profiler||n===In.DehydratedFragment||n===In.HostRoot||n===In.HostPortal||n===In.ScopeComponent||n===In.OffscreenComponent||n===In.LegacyHiddenComponent||n===In.CacheComponent||n===In.TracingMarkerComponent||n===In.Throw||n===In.ViewTransitionComponent||n===In.ActivityComponent)return null;if(n===In.ForwardRef){const u=a;if(u!=null&&u.render){const d=xr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:xr(i)}if(n===In.MemoComponent||n===In.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=xr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:xr(i)}if(n===In.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===In.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===In.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?xr(u._result):null}return n===In.SuspenseComponent||n===In.SuspenseListComponent?null:n===In.IncompleteClassComponent||n===In.IncompleteFunctionComponent||n===In.FunctionComponent||n===In.ClassComponent||n===In.IndeterminateComponent?xr(i):null}function U6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function V6(t,n){const i=N6(n),a=i.mode==="all";if(a){const p=uc.map.get(t);if(p!==void 0)return p}if(!$6()){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const c=i.mode==="smart"?B6(t):void 0,u=[];try{let p=P6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=H6(p);_&&!U6(_)&&O6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&uc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&uc.map.set(t,h),h}var dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function Y6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Mc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function W6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Mc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Mc(i._debugOwner)};i=i.return,a++}return null}function F6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Mc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Mc(n)}}}n=n.return,i++}return null}var nd=new Map;function X6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===dc.FunctionComponent||n===dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===dc.MemoComponent||n===dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function q6(){const t=$v,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function G6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function K6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Q6(t){const n=X6(t);if(!n)return null;if(nd.has(n))return nd.get(n);const i=q6();if(!i)return nd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=G6(d.stack);h&&(c={fileName:K6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Mc(t)||void 0})}}}finally{i.set(a)}return nd.set(n,c),c}function Z6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=Q6(i);if(c)return c;i=i.return,a++}return null}function zm(t){const n=Y6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=W6(n);if(i||(i=F6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=Z6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function J6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function e3(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=zm(i);if(c.found)return c;i=i.parentElement,a++}return zm(t)}var t3=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,n3={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=t3}var Ie=n3,fc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function o1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var s3=`@keyframes styles-module__markerIn___x4G8D {
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
}`,o3={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=s3}var no=o3;function i1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:k,onContextMenu:C}){const j=(h||p)&&!g,B=j&&x==="delete",R=t.isMultiSelect,A=R?"var(--agentation-color-green)":"var(--agentation-color-accent)",$=c?no.exit:u?no.clearing:d?"":no.enter,H=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${no.marker} ${R?no.multiSelect:""} ${$} ${B?no.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:B?void 0:A,animationDelay:H},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:V=>{V.stopPropagation(),c||k(t)},onContextMenu:C?V=>{x==="delete"&&(V.preventDefault(),V.stopPropagation(),c||C(t))}:void 0,children:[j?B?l.jsx(qx,{size:R?18:16}):l.jsx(gS,{size:16}):l.jsx("span",{className:_!==null&&n>=_?no.renumber:void 0,children:n+1}),h&&!g&&l.jsxs("div",{className:`${no.markerTooltip} ${no.enter}`,style:b,children:[l.jsxs("span",{className:no.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:no.markerNote,children:t.comment})]})]})}function i3({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${no.marker} ${no.pending} ${i?no.multiSelect:""} ${a?no.exit:no.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(iS,{size:12})})}function a1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${no.marker} ${n?no.fixed:""} ${no.hovered} ${i?no.multiSelect:""} ${no.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(qx,{size:i?12:10})})}var a3=`.styles-module__switchContainer___Ka-AB {
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
}`,r3={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=a3}var om=r3,im=({className:t="",...n})=>l.jsxs("div",{className:`${om.switchContainer} ${t}`,children:[l.jsx("input",{className:om.switchInput,type:"checkbox",...n}),l.jsx("div",{className:om.switchThumb})]}),l3=`.styles-module__checkboxContainer___joqZk {
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
}`,c3={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=l3}var sd=c3,u3=({className:t="",...n})=>l.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),d3=`.styles-module__container___w8eAF {
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
}`,f3={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=d3}var r1=f3,l1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${r1.container} ${t}`,...u,children:[l.jsx(u3,{id:d,onChange:c,checked:a}),l.jsx("label",{className:r1.label,htmlFor:d,children:n}),i&&l.jsx(jr,{content:i})]})},h3=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,m3={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=h3}var Mt=m3;function p3({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Mt.settingsPanel} ${h?Mt.enter:Mt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Mt.settingsPanelContainer,children:[l.jsxs("div",{className:`${Mt.settingsPage} ${g==="automations"?Mt.slideLeft:""}`,children:[l.jsxs("div",{className:Mt.settingsHeader,children:[l.jsx("a",{className:Mt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Mt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Mt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Mt.themeIconWrapper,children:l.jsx("span",{className:Mt.themeIcon,children:i?l.jsx(pS,{size:20}):l.jsx(_S,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsxs("div",{className:Mt.settingsRow,children:[l.jsxs("div",{className:Mt.settingsLabel,children:["Output Detail",l.jsx(jr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Mt.cycleButton,onClick:()=>{const S=(fc.findIndex(k=>k.value===t.outputDetail)+1)%fc.length;n({outputDetail:fc[S].value})},children:[l.jsx("span",{className:Mt.cycleButtonText,children:(b=fc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:Mt.cycleDots,children:fc.map(w=>l.jsx("span",{className:`${Mt.cycleDot} ${t.outputDetail===w.value?Mt.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${Mt.settingsRow} ${Mt.settingsRowMarginTop} ${c?"":Mt.settingsRowDisabled}`,children:[l.jsxs("div",{className:Mt.settingsLabel,children:["React Components",l.jsx(jr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(im,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Mt.settingsRow} ${Mt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Mt.settingsLabel,children:["Hide Until Restart",l.jsx(jr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(im,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsx("div",{className:`${Mt.settingsLabel} ${Mt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Mt.colorOptions,children:vc.map(w=>l.jsx("button",{className:`${Mt.colorOption} ${t.annotationColorId===w.id?Mt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsx(l1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(l1,{className:Mt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("button",{className:Mt.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Mt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Mt.mcpNavIndicator} ${Mt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Mt.settingsPage} ${Mt.automationsPage} ${g==="automations"?Mt.slideIn:""}`,children:[l.jsxs("button",{className:Mt.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(xS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:Mt.settingsSection,children:[l.jsxs("div",{className:Mt.settingsRow,children:[l.jsxs("span",{className:Mt.automationHeader,children:["MCP Connection",l.jsx(jr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Mt.mcpStatusDot} ${Mt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Mt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Mt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Mt.divider}),l.jsxs("div",{className:`${Mt.settingsSection} ${Mt.settingsSectionGrow}`,children:[l.jsxs("div",{className:Mt.settingsRow,children:[l.jsxs("span",{className:Mt.automationHeader,children:["Webhooks",l.jsx(jr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Mt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Mt.autoSendLabel} ${t.webhooksEnabled?Mt.active:""} ${t.webhookUrl?"":Mt.disabled}`,children:"Auto-Send"}),l.jsx(im,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Mt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Mt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function am(t,n="filtered"){const{name:i,path:a}=ml(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=V6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var c1=!1,rm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ia=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],_3=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...vc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};_3();function br(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function lm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function vr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=zm(t),i=n.found?n:e3(t);if(i.found&&i.source)return J6(i.source,"path")}function g3({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var jt,Ot,mn,ms,yo,Fo,zs;const[k,C]=y.useState(!1),[j,B]=y.useState([]),[R,A]=y.useState(!0),[$,H]=y.useState(()=>E6()),[V,P]=y.useState(!1),J=y.useRef(null);y.useEffect(()=>{const E=G=>{const U=J.current;U&&U.contains(G.target)&&G.stopPropagation()},O=["mousedown","click","pointerdown"];return O.forEach(G=>document.body.addEventListener(G,E)),()=>{O.forEach(G=>document.body.removeEventListener(G,E))}},[]);const[re,ie]=y.useState(!1),[Ce,Be]=y.useState(!1),[Z,ue]=y.useState(null),[z,te]=y.useState({x:0,y:0}),[W,K]=y.useState(null),[pe,N]=y.useState(!1),[ae,oe]=y.useState("idle"),[ce,Ee]=y.useState(!1),[$e,Ne]=y.useState(!1),[ft,Oe]=y.useState(null),[at,tt]=y.useState(null),[St,Qe]=y.useState([]),[Dt,ln]=y.useState(null),[Ht,en]=y.useState(null),[q,Ae]=y.useState(null),[Fe,Je]=y.useState(null),[lt,st]=y.useState([]),[bt,ct]=y.useState(0),[rt,It]=y.useState(!1),[ot,I]=y.useState(!1),[ne,de]=y.useState(!1),[be,ye]=y.useState(!1),[He,Re]=y.useState(!1),[Xe,vt]=y.useState("main"),[Rt,pt]=y.useState(!1),[Ge,Nt]=y.useState(!1),[Gt,Zt]=y.useState(!1),[Pe,$t]=y.useState([]),[gt,ht]=y.useState(null),fn=y.useRef(!1),[mt,Ut]=y.useState(!1),[On,Yn]=y.useState(!1),[Qn,Ls]=y.useState(1),[Fs,us]=y.useState("new-page"),[En,Pn]=y.useState(""),[sn,An]=y.useState(!1),[nt,pn]=y.useState(null),Io=y.useRef(!1),Xs=y.useRef({rearrange:null,placements:[]}),Wn=y.useRef({rearrange:null,placements:[]}),[qs,pi]=y.useState(0),[gs,wo]=y.useState(0),[so,oo]=y.useState(0),[Zn,Mo]=y.useState(0),js=y.useRef(new Set),Fn=y.useRef(new Set),gn=y.useRef(null),ds=y.useRef(),mo=Ge&&k&&!Gt&&mt;y.useEffect(()=>{if(mo){Yn(!1);const E=ul(()=>{Yn(!0)});return()=>cancelAnimationFrame(E)}else Yn(!1)},[mo]);const zn=y.useRef(new Map),Po=y.useRef(new Map),po=y.useRef(),[Ms,Ts]=y.useState(!1),[yn,Ci]=y.useState([]),Pi=y.useRef(yn);Pi.current=yn;const[ii,Ji]=y.useState(null),Ko=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[ai,Es]=y.useState(!1),To=y.useRef(null),[Hn,Eo]=y.useState([]),Dn=y.useRef({cmd:!1,shift:!1}),as=()=>{pt(!0)},Ho=()=>{pt(!1)},Ao=()=>{ai||(To.current=Yt(()=>Es(!0),850))},fs=()=>{To.current&&(clearTimeout(To.current),To.current=null),Es(!1),Ho()};y.useEffect(()=>()=>{To.current&&clearTimeout(To.current)},[]);const[Kt,ki]=y.useState(()=>{var E;try{const O=JSON.parse((E=localStorage.getItem("feedback-toolbar-settings"))!=null?E:"");return{...rm,...O,annotationColorId:vc.find(G=>G.id===O.annotationColorId)?O.annotationColorId:rm.annotationColorId}}catch{return rm}}),[Gs,ji]=y.useState(!0),[Hi,Uo]=y.useState(!1),As=()=>{var E;(E=J.current)==null||E.classList.add(Ie.disableTransitions),ji(O=>!O),ul(()=>{var O;(O=J.current)==null||O.classList.remove(Ie.disableTransitions)})},_i=!1,_o="off",[Mn,Ks]=y.useState(x!=null?x:null),Do=y.useRef(!1),[Ds,Qs]=y.useState(_?"connecting":"disconnected"),[on,Ns]=y.useState(null),[So,Vo]=y.useState(!1),[xn,Qo]=y.useState(null),ys=y.useRef(!1),[Yo,No]=y.useState(new Set),[Wo,Zo]=y.useState(new Set),[Jn,io]=y.useState(!1),[Co,go]=y.useState(!1),[$s,Is]=y.useState(!1),ao=y.useRef(null),Nn=y.useRef(null),Ps=y.useRef(null),Ro=y.useRef(null),M=y.useRef(!1),X=y.useRef(0),_e=y.useRef(null),Se=y.useRef(null),Ue=8,et=50,Vt=y.useRef(null),Wt=y.useRef(null),Lt=y.useRef(null),Ye=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(be)Re(!0);else{pt(!1),vt("main");const E=Yt(()=>Re(!1),0);return()=>clearTimeout(E)}},[be]);const cn=k&&R&&!Ge;y.useEffect(()=>{if(cn){Be(!1),ie(!0),No(new Set);const E=Yt(()=>{No(O=>{const G=new Set(O);return j.forEach(U=>G.add(U.id)),G})},350);return()=>clearTimeout(E)}else if(re){Be(!0);const E=Yt(()=>{ie(!1),Be(!1)},250);return()=>clearTimeout(E)}},[cn]),y.useEffect(()=>{I(!0),ct(window.scrollY);const E=em(Ye);B(E.filter(vr)),c1||(Uo(!0),c1=!0,Yt(()=>Uo(!1),750));try{const O=localStorage.getItem("feedback-toolbar-theme");O!==null&&ji(O==="dark")}catch{}try{const O=localStorage.getItem("feedback-toolbar-position");if(O){const G=JSON.parse(O);typeof G.x=="number"&&typeof G.y=="number"&&Ns(G)}}catch{}},[Ye]),y.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Kt))},[Kt,ot]),y.useEffect(()=>{ot&&localStorage.setItem("feedback-toolbar-theme",Gs?"dark":"light")},[Gs,ot]);const bn=y.useRef(!1);y.useEffect(()=>{const E=bn.current;bn.current=So,E&&!So&&on&&ot&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(on))},[So,on,ot]),y.useEffect(()=>{if(!_||!ot||Do.current)return;Do.current=!0,Qs("connecting"),(async()=>{try{const O=M6(Ye),G=x||O;let U=!1;if(G)try{const se=await e1(_,G);Ks(se.id),Qs("connected"),tm(Ye,se.id),U=!0;const xe=em(Ye),qe=new Set(se.annotations.map(it=>it.id)),Ke=xe.filter(it=>!qe.has(it.id));if(Ke.length>0){const Ct=`${typeof window<"u"?window.location.origin:""}${Ye}`,tn=(await Promise.allSettled(Ke.map(kt=>rl(_,se.id,{...kt,sessionId:se.id,url:Ct})))).map((kt,_t)=>kt.status==="fulfilled"?kt.value:(console.warn("[Agentation] Failed to sync annotation:",kt.reason),Ke[_t])),nn=[...se.annotations,...tn];B(nn.filter(vr)),cc(Ye,nn.filter(vr),se.id)}else B(se.annotations.filter(vr)),cc(Ye,se.annotations.filter(vr),se.id)}catch(se){console.warn("[Agentation] Could not join session, creating new:",se),T6(Ye)}if(!U){const se=typeof window<"u"?window.location.href:"/",xe=await nm(_,se);Ks(xe.id),Qs("connected"),tm(Ye,xe.id),b==null||b(xe.id);const qe=x6(),Ke=typeof window<"u"?window.location.origin:"",it=[];for(const[Ct,zt]of qe){const tn=zt.filter(_t=>!_t._syncedTo);if(tn.length===0)continue;const nn=`${Ke}${Ct}`,kt=Ct===Ye;it.push((async()=>{try{const _t=kt?xe:await nm(_,nn),ws=(await Promise.allSettled(tn.map(Tn=>rl(_,_t.id,{...Tn,sessionId:_t.id,url:nn})))).map((Tn,Vn)=>Tn.status==="fulfilled"?Tn.value:(console.warn("[Agentation] Failed to sync annotation:",Tn.reason),tn[Vn])).filter(vr);if(cc(Ct,ws,_t.id),kt){const Tn=new Set(tn.map(Vn=>Vn.id));B(Vn=>{const qt=Vn.filter(Qt=>!Tn.has(Qt.id));return[...ws,...qt]})}}catch(_t){console.warn(`[Agentation] Failed to sync annotations for ${Ct}:`,_t)}})())}await Promise.allSettled(it)}}catch(O){Qs("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",O)}})()},[_,x,ot,b,Ye]),y.useEffect(()=>{if(!_||!ot)return;const E=async()=>{try{(await fetch(`${_}/health`)).ok?Qs("connected"):Qs("disconnected")}catch{Qs("disconnected")}};E();const O=wS(E,1e4);return()=>clearInterval(O)},[_,ot]),y.useEffect(()=>{if(!_||!ot||!Mn)return;const E=new EventSource(`${_}/sessions/${Mn}/events`),O=["resolved","dismissed"],G=U=>{var se;try{const xe=JSON.parse(U.data);if(O.includes((se=xe.payload)==null?void 0:se.status)){const qe=xe.payload.id,Ke=xe.payload.kind;if(Ke==="placement"){for(const[it,Ct]of zn.current)if(Ct===qe){zn.current.delete(it),$t(zt=>zt.filter(tn=>tn.id!==it));break}}else if(Ke==="rearrange"){for(const[it,Ct]of Po.current)if(Ct===qe){Po.current.delete(it),pn(zt=>{if(!zt)return null;const tn=zt.sections.filter(nn=>nn.id!==it);return tn.length===0?null:{...zt,sections:tn}});break}}else Zo(it=>new Set(it).add(qe)),Yt(()=>{B(it=>it.filter(Ct=>Ct.id!==qe)),Zo(it=>{const Ct=new Set(it);return Ct.delete(qe),Ct})},150)}}catch{}};return E.addEventListener("annotation.updated",G),()=>{E.removeEventListener("annotation.updated",G),E.close()}},[_,ot,Mn]),y.useEffect(()=>{if(!_||!ot)return;const E=Se.current==="disconnected",O=Ds==="connected";Se.current=Ds,E&&O&&(async()=>{try{const U=em(Ye);if(U.length===0)return;const xe=`${typeof window<"u"?window.location.origin:""}${Ye}`;let qe=Mn,Ke=[];if(qe)try{Ke=(await e1(_,qe)).annotations}catch{qe=null}qe||(qe=(await nm(_,xe)).id,Ks(qe),tm(Ye,qe));const it=new Set(Ke.map(zt=>zt.id)),Ct=U.filter(zt=>!it.has(zt.id));if(Ct.length>0){const tn=(await Promise.allSettled(Ct.map(_t=>rl(_,qe,{..._t,sessionId:qe,url:xe})))).map((_t,bs)=>_t.status==="fulfilled"?_t.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",_t.reason),Ct[bs])),kt=[...Ke,...tn].filter(vr);B(kt),cc(Ye,kt,qe)}}catch(U){console.warn("[Agentation] Failed to sync on reconnect:",U)}})()},[Ds,_,ot,Mn,Ye]);const D=y.useCallback(()=>{V||(P(!0),ye(!1),C(!1),Yt(()=>{A6(!0),H(!0),P(!1)},400))},[V]);y.useEffect(()=>{if(!i||!ot||!t||t.length===0||j.length>0)return;const E=[];return E.push(Yt(()=>{C(!0)},n-200)),t.forEach((O,G)=>{const U=n+G*300;E.push(Yt(()=>{const se=document.querySelector(O.selector);if(!se)return;const xe=se.getBoundingClientRect(),{name:qe,path:Ke}=ml(se),it={id:`demo-${Date.now()}-${G}`,x:(xe.left+xe.width/2)/window.innerWidth*100,y:xe.top+xe.height/2+window.scrollY,comment:O.comment,element:qe,elementPath:Ke,timestamp:Date.now(),selectedText:O.selectedText,boundingBox:{x:xe.left,y:xe.top+window.scrollY,width:xe.width,height:xe.height},nearbyText:rc(se),cssClasses:lc(se)};B(Ct=>[...Ct,it])},U))}),()=>{E.forEach(clearTimeout)}},[i,ot,t,n]),y.useEffect(()=>{const E=()=>{ct(window.scrollY),It(!0),Lt.current&&clearTimeout(Lt.current),Lt.current=Yt(()=>{It(!1)},150)};return window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),Lt.current&&clearTimeout(Lt.current)}},[]),y.useEffect(()=>{ot&&j.length>0?Mn?cc(Ye,j,Mn):rb(Ye,j):ot&&j.length===0&&localStorage.removeItem(Ed(Ye))},[j,Ye,ot,Mn]),y.useEffect(()=>{if(ot&&!fn.current){fn.current=!0;const E=b6(Ye);E.length>0&&$t(E)}},[ot,Ye]),y.useEffect(()=>{ot&&fn.current&&!mt&&(Pe.length>0?v6(Ye,Pe):w6(Ye))},[Pe,Ye,ot,mt]),y.useEffect(()=>{if(ot&&!Io.current){Io.current=!0;const E=S6(Ye);if(E){const O={...E,sections:E.sections.map(G=>{var U;return{...G,currentRect:(U=G.currentRect)!=null?U:{...G.originalRect}}})};pn(O)}}},[ot,Ye]),y.useEffect(()=>{ot&&Io.current&&!mt&&(nt?C6(Ye,nt):k6(Ye))},[nt,Ye,ot,mt]);const F=y.useRef(!1);y.useEffect(()=>{if(ot&&!F.current){F.current=!0;const E=j6(Ye);E&&(Wn.current={rearrange:E.rearrange,placements:E.placements||[]},E.purpose&&Pn(E.purpose))}},[ot,Ye]),y.useEffect(()=>{var O,G,U,se,xe;if(!ot||!F.current)return;const E=Wn.current;mt?((G=(O=nt==null?void 0:nt.sections)==null?void 0:O.length)!=null?G:0)>0||Pe.length>0||En?Jy(Ye,{rearrange:nt,placements:Pe,purpose:En}):td(Ye):((xe=(se=(U=E.rearrange)==null?void 0:U.sections)==null?void 0:se.length)!=null?xe:0)>0||E.placements.length>0||En?Jy(Ye,{rearrange:E.rearrange,placements:E.placements,purpose:En}):td(Ye)},[nt,Pe,En,mt,Ye,ot]),y.useEffect(()=>{Ge&&!nt&&pn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ge,nt]),y.useEffect(()=>{if(!_||!Mn)return;const E=zn.current,O=new Set(Pe.map(G=>G.id));for(const G of Pe){if(E.has(G.id))continue;E.set(G.id,"");const U=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ye;rl(_,Mn,{id:G.id,x:G.x/window.innerWidth*100,y:G.y,comment:`Place ${G.type} at (${Math.round(G.x)}, ${Math.round(G.y)}), ${G.width}×${G.height}px${G.text?` — "${G.text}"`:""}`,element:`[design:${G.type}]`,elementPath:"[placement]",timestamp:G.timestamp,url:U,intent:"change",severity:"important",kind:"placement",placement:{componentType:G.type,width:G.width,height:G.height,scrollY:G.scrollY,text:G.text}}).then(se=>{E.has(G.id)&&E.set(G.id,se.id)}).catch(se=>{console.warn("[Agentation] Failed to sync placement annotation:",se),E.delete(G.id)})}for(const[G,U]of E)O.has(G)||(E.delete(G),U&&Ka(_,U).catch(()=>{}))},[Pe,_,Mn,Ye]),y.useEffect(()=>{if(!(!_||!Mn))return po.current&&clearTimeout(po.current),po.current=Yt(()=>{const E=Po.current;if(!nt||nt.sections.length===0){for(const[,U]of E)U&&Ka(_,U).catch(()=>{});E.clear();return}const O=new Set(nt.sections.map(U=>U.id)),G=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ye;for(const U of nt.sections){const se=U.originalRect,xe=U.currentRect;if(!(Math.abs(se.x-xe.x)>1||Math.abs(se.y-xe.y)>1||Math.abs(se.width-xe.width)>1||Math.abs(se.height-xe.height)>1)){const it=E.get(U.id);it&&(E.delete(U.id),Ka(_,it).catch(()=>{}));continue}const Ke=E.get(U.id);Ke?t1(_,Ke,{comment:`Move ${U.label} section (${U.tagName}) — from (${Math.round(se.x)},${Math.round(se.y)}) ${Math.round(se.width)}×${Math.round(se.height)} to (${Math.round(xe.x)},${Math.round(xe.y)}) ${Math.round(xe.width)}×${Math.round(xe.height)}`}).catch(it=>{console.warn("[Agentation] Failed to update rearrange annotation:",it)}):(E.set(U.id,""),rl(_,Mn,{id:U.id,x:xe.x/window.innerWidth*100,y:xe.y,comment:`Move ${U.label} section (${U.tagName}) — from (${Math.round(se.x)},${Math.round(se.y)}) ${Math.round(se.width)}×${Math.round(se.height)} to (${Math.round(xe.x)},${Math.round(xe.y)}) ${Math.round(xe.width)}×${Math.round(xe.height)}`,element:U.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:G,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:U.selector,label:U.label,tagName:U.tagName,originalRect:se,currentRect:xe}}).then(it=>{E.has(U.id)&&E.set(U.id,it.id)}).catch(it=>{console.warn("[Agentation] Failed to sync rearrange annotation:",it),E.delete(U.id)}))}for(const[U,se]of E)O.has(U)||(E.delete(U),se&&Ka(_,se).catch(()=>{}))},300),()=>{po.current&&clearTimeout(po.current)}},[nt,_,Mn,Ye]);const Q=y.useRef(new Map);y.useLayoutEffect(()=>{var G;const E=(G=nt==null?void 0:nt.sections)!=null?G:[],O=new Set;if((Ge||Gt)&&k)for(const U of E){O.add(U.id);try{const se=document.querySelector(U.selector);if(!se)continue;if(!Q.current.has(U.id)){const xe={transform:se.style.transform,transformOrigin:se.style.transformOrigin,opacity:se.style.opacity,position:se.style.position,zIndex:se.style.zIndex,display:se.style.display},qe=[];let Ke=se.parentElement;for(;Ke&&Ke!==document.body;){const Ct=getComputedStyle(Ke);(Ct.overflow!=="visible"||Ct.overflowX!=="visible"||Ct.overflowY!=="visible")&&(qe.push({el:Ke,overflow:Ke.style.overflow}),Ke.style.overflow="visible"),Ke=Ke.parentElement}getComputedStyle(se).display==="inline"&&(se.style.display="inline-block"),Q.current.set(U.id,{el:se,origStyles:xe,ancestors:qe}),se.style.transformOrigin="top left",se.style.zIndex="9999"}}catch{}}for(const[U,se]of Q.current)if(!O.has(U)){const{el:xe,origStyles:qe,ancestors:Ke}=se;xe.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",xe.style.transform=qe.transform,xe.style.transformOrigin=qe.transformOrigin,xe.style.opacity=qe.opacity,xe.style.position=qe.position,xe.style.zIndex=qe.zIndex,Q.current.delete(U),Yt(()=>{xe.style.transition="",xe.style.display=qe.display;for(const it of Ke)it.el.style.overflow=it.overflow},450)}},[nt,Ge,Gt,k]),y.useEffect(()=>()=>{for(const[,E]of Q.current){const{el:O,origStyles:G,ancestors:U}=E;O.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",O.style.transform=G.transform,O.style.transformOrigin=G.transformOrigin,O.style.opacity=G.opacity,O.style.position=G.position,O.style.zIndex=G.zIndex,Yt(()=>{O.style.transition="",O.style.display=G.display;for(const se of U)se.el.style.overflow=se.overflow},450)}Q.current.clear()},[]);const fe=y.useCallback(()=>{Zt(!0),Nt(!1),ht(null),clearTimeout(ds.current),ds.current=Yt(()=>{Zt(!1)},300)},[]),Ze=y.useCallback(()=>{Ge&&(Zt(!0),Nt(!1),ht(null),clearTimeout(ds.current),ds.current=Yt(()=>{Zt(!1)},300)),C(!1)},[Ge]),yt=y.useCallback(()=>{ne||(CS(),de(!0))},[ne]),dt=y.useCallback(()=>{ne&&(Iy(),de(!1))},[ne]),Xt=y.useCallback(()=>{ne?dt():yt()},[ne,yt,dt]),xs=y.useCallback(()=>{if(Hn.length===0)return;const E=Hn[0],O=E.element,G=Hn.length>1,U=Hn.map(se=>se.element.getBoundingClientRect());if(G){const se={left:Math.min(...U.map(_t=>_t.left)),top:Math.min(...U.map(_t=>_t.top)),right:Math.max(...U.map(_t=>_t.right)),bottom:Math.max(...U.map(_t=>_t.bottom))},xe=Hn.slice(0,5).map(_t=>_t.name).join(", "),qe=Hn.length>5?` +${Hn.length-5} more`:"",Ke=U.map(_t=>({x:_t.left,y:_t.top+window.scrollY,width:_t.width,height:_t.height})),Ct=Hn[Hn.length-1].element,zt=U[U.length-1],tn=zt.left+zt.width/2,nn=zt.top+zt.height/2,kt=lm(Ct);K({x:tn/window.innerWidth*100,y:kt?nn:nn+window.scrollY,clientY:nn,element:`${Hn.length} elements: ${xe}${qe}`,elementPath:"multi-select",boundingBox:{x:se.left,y:se.top+window.scrollY,width:se.right-se.left,height:se.bottom-se.top},isMultiSelect:!0,isFixed:kt,elementBoundingBoxes:Ke,multiSelectElements:Hn.map(_t=>_t.element),targetElement:Ct,fullPath:Zu(O),accessibility:Qu(O),computedStyles:Ku(O),computedStylesObj:Gu(O),nearbyElements:qu(O),cssClasses:lc(O),nearbyText:rc(O),sourceFile:od(O)})}else{const se=U[0],xe=lm(O);K({x:se.left/window.innerWidth*100,y:xe?se.top:se.top+window.scrollY,clientY:se.top,element:E.name,elementPath:E.path,boundingBox:{x:se.left,y:xe?se.top:se.top+window.scrollY,width:se.width,height:se.height},isFixed:xe,fullPath:Zu(O),accessibility:Qu(O),computedStyles:Ku(O),computedStylesObj:Gu(O),nearbyElements:qu(O),cssClasses:lc(O),nearbyText:rc(O),reactComponents:E.reactComponents,sourceFile:od(O)})}Eo([]),ue(null)},[Hn]);y.useEffect(()=>{k||(K(null),Ae(null),Je(null),st([]),ue(null),ye(!1),Eo([]),Dn.current={cmd:!1,shift:!1},ne&&dt())},[k,ne,dt]),y.useEffect(()=>()=>{Iy()},[]),y.useEffect(()=>{if(!k)return;const E=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),O=":not([data-agentation-root]):not([data-agentation-root] *)",G=document.createElement("style");return G.id="feedback-cursor-styles",G.textContent=`
      body ${O} {
        cursor: crosshair !important;
      }

      body :is(${E})${O} {
        cursor: text !important;
      }
    `,document.head.appendChild(G),()=>{const U=document.getElementById("feedback-cursor-styles");U&&U.remove()}},[k]),y.useEffect(()=>{if(ii!==null&&k)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[ii,k]),y.useEffect(()=>{if(!k||W||Ms||Ge)return;const E=O=>{const G=O.composedPath()[0]||O.target;if(ei(G,"[data-feedback-toolbar]")){ue(null);return}const U=br(O.clientX,O.clientY);if(!U||ei(U,"[data-feedback-toolbar]")){ue(null);return}const{name:se,elementName:xe,path:qe,reactComponents:Ke}=am(U,_o),it=U.getBoundingClientRect();ue({element:se,elementName:xe,elementPath:qe,rect:it,reactComponents:Ke}),te({x:O.clientX,y:O.clientY})};return document.addEventListener("mousemove",E),()=>document.removeEventListener("mousemove",E)},[k,W,Ms,Ge,_o,yn]);const Zs=y.useCallback(E=>{var O;if(Ae(E),Oe(null),tt(null),Qe([]),(O=E.elementBoundingBoxes)!=null&&O.length){const G=[];for(const U of E.elementBoundingBoxes){const se=U.x+U.width/2,xe=U.y+U.height/2-window.scrollY,qe=br(se,xe);qe&&G.push(qe)}st(G),Je(null)}else if(E.boundingBox){const G=E.boundingBox,U=G.x+G.width/2,se=E.isFixed?G.y+G.height/2:G.y+G.height/2-window.scrollY,xe=br(U,se);if(xe){const qe=xe.getBoundingClientRect(),Ke=qe.width/G.width,it=qe.height/G.height;Ke<.5||it<.5?Je(null):Je(xe)}else Je(null);st([])}else Je(null),st([])},[]);y.useEffect(()=>{if(!k||Ms||Ge)return;const E=O=>{var vs,ws;if(M.current){M.current=!1;return}const G=O.composedPath()[0]||O.target;if(ei(G,"[data-feedback-toolbar]")||ei(G,"[data-annotation-popup]")||ei(G,"[data-annotation-marker]"))return;if(O.metaKey&&O.shiftKey&&!W&&!q){O.preventDefault(),O.stopPropagation();const Tn=br(O.clientX,O.clientY);if(!Tn)return;const Vn=Tn.getBoundingClientRect(),{name:qt,path:Qt,reactComponents:Ss}=am(Tn,_o),Rn=Hn.findIndex(xo=>xo.element===Tn);Rn>=0?Eo(xo=>xo.filter((Xo,rs)=>rs!==Rn)):Eo(xo=>[...xo,{element:Tn,rect:Vn,name:qt,path:Qt,reactComponents:Ss!=null?Ss:void 0}]);return}const U=ei(G,"button, a, input, select, textarea, [role='button'], [onclick]");if(Kt.blockInteractions&&U&&(O.preventDefault(),O.stopPropagation()),W){if(U&&!Kt.blockInteractions)return;O.preventDefault(),(vs=Vt.current)==null||vs.shake();return}if(q){if(U&&!Kt.blockInteractions)return;O.preventDefault(),(ws=Wt.current)==null||ws.shake();return}O.preventDefault();const se=br(O.clientX,O.clientY);if(!se)return;const{name:xe,path:qe,reactComponents:Ke}=am(se,_o),it=se.getBoundingClientRect(),Ct=O.clientX/window.innerWidth*100,zt=lm(se),tn=zt?O.clientY:O.clientY+window.scrollY,nn=window.getSelection();let kt;nn&&nn.toString().trim().length>0&&(kt=nn.toString().trim().slice(0,500));const _t=Gu(se),bs=Ku(se);K({x:Ct,y:tn,clientY:O.clientY,element:xe,elementPath:qe,selectedText:kt,boundingBox:{x:it.left,y:zt?it.top:it.top+window.scrollY,width:it.width,height:it.height},nearbyText:rc(se),cssClasses:lc(se),isFixed:zt,fullPath:Zu(se),accessibility:Qu(se),computedStyles:bs,computedStylesObj:_t,nearbyElements:qu(se),reactComponents:Ke!=null?Ke:void 0,sourceFile:od(se),targetElement:se}),ue(null)};return document.addEventListener("click",E,!0),()=>document.removeEventListener("click",E,!0)},[k,Ms,Ge,W,q,Kt.blockInteractions,_o,Hn]),y.useEffect(()=>{if(!k)return;const E=U=>{U.key==="Meta"&&(Dn.current.cmd=!0),U.key==="Shift"&&(Dn.current.shift=!0)},O=U=>{const se=Dn.current.cmd&&Dn.current.shift;U.key==="Meta"&&(Dn.current.cmd=!1),U.key==="Shift"&&(Dn.current.shift=!1);const xe=Dn.current.cmd&&Dn.current.shift;se&&!xe&&Hn.length>0&&xs()},G=()=>{Dn.current={cmd:!1,shift:!1},Eo([])};return document.addEventListener("keydown",E),document.addEventListener("keyup",O),window.addEventListener("blur",G),()=>{document.removeEventListener("keydown",E),document.removeEventListener("keyup",O),window.removeEventListener("blur",G)}},[k,Hn,xs]),y.useEffect(()=>{if(!k||W||Ms||Ge)return;const E=O=>{const G=O.composedPath()[0]||O.target;ei(G,"[data-feedback-toolbar]")||ei(G,"[data-annotation-marker]")||ei(G,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(G.tagName)||G.isContentEditable||(O.preventDefault(),ao.current={x:O.clientX,y:O.clientY})};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[k,W,Ms,Ge]),y.useEffect(()=>{if(!k||W)return;const E=O=>{if(!ao.current)return;const G=O.clientX-ao.current.x,U=O.clientY-ao.current.y,se=G*G+U*U,xe=Ue*Ue;if(!$s&&se>=xe&&(Nn.current=ao.current,Is(!0),O.preventDefault()),($s||se>=xe)&&Nn.current){if(Ps.current){const qt=Math.min(Nn.current.x,O.clientX),Qt=Math.min(Nn.current.y,O.clientY),Ss=Math.abs(O.clientX-Nn.current.x),Rn=Math.abs(O.clientY-Nn.current.y);Ps.current.style.transform=`translate(${qt}px, ${Qt}px)`,Ps.current.style.width=`${Ss}px`,Ps.current.style.height=`${Rn}px`}const qe=Date.now();if(qe-X.current<et)return;X.current=qe;const Ke=Nn.current.x,it=Nn.current.y,Ct=Math.min(Ke,O.clientX),zt=Math.min(it,O.clientY),tn=Math.max(Ke,O.clientX),nn=Math.max(it,O.clientY),kt=(Ct+tn)/2,_t=(zt+nn)/2,bs=new Set,vs=[[Ct,zt],[tn,zt],[Ct,nn],[tn,nn],[kt,_t],[kt,zt],[kt,nn],[Ct,_t],[tn,_t]];for(const[qt,Qt]of vs){const Ss=document.elementsFromPoint(qt,Qt);for(const Rn of Ss)Rn instanceof HTMLElement&&bs.add(Rn)}const ws=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const qt of ws)if(qt instanceof HTMLElement){const Qt=qt.getBoundingClientRect(),Ss=Qt.left+Qt.width/2,Rn=Qt.top+Qt.height/2,xo=Ss>=Ct&&Ss<=tn&&Rn>=zt&&Rn<=nn,Xo=Math.min(Qt.right,tn)-Math.max(Qt.left,Ct),rs=Math.min(Qt.bottom,nn)-Math.max(Qt.top,zt),Mi=Xo>0&&rs>0?Xo*rs:0,Ui=Qt.width*Qt.height,Vi=Ui>0?Mi/Ui:0;(xo||Vi>.5)&&bs.add(qt)}const Tn=[],Vn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const qt of bs){if(ei(qt,"[data-feedback-toolbar]")||ei(qt,"[data-annotation-marker]"))continue;const Qt=qt.getBoundingClientRect();if(!(Qt.width>window.innerWidth*.8&&Qt.height>window.innerHeight*.5)&&!(Qt.width<10||Qt.height<10)&&Qt.left<tn&&Qt.right>Ct&&Qt.top<nn&&Qt.bottom>zt){const Ss=qt.tagName;let Rn=Vn.has(Ss);if(!Rn&&(Ss==="DIV"||Ss==="SPAN")){const xo=qt.textContent&&qt.textContent.trim().length>0,Xo=qt.onclick!==null||qt.getAttribute("role")==="button"||qt.getAttribute("role")==="link"||qt.classList.contains("clickable")||qt.hasAttribute("data-clickable");(xo||Xo)&&!qt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Rn=!0)}if(Rn){let xo=!1;for(const Xo of Tn)if(Xo.left<=Qt.left&&Xo.right>=Qt.right&&Xo.top<=Qt.top&&Xo.bottom>=Qt.bottom){xo=!0;break}xo||Tn.push(Qt)}}}if(Ro.current){const qt=Ro.current;for(;qt.children.length>Tn.length;)qt.removeChild(qt.lastChild);Tn.forEach((Qt,Ss)=>{let Rn=qt.children[Ss];Rn||(Rn=document.createElement("div"),Rn.className=Ie.selectedElementHighlight,qt.appendChild(Rn)),Rn.style.transform=`translate(${Qt.left}px, ${Qt.top}px)`,Rn.style.width=`${Qt.width}px`,Rn.style.height=`${Qt.height}px`})}}};return document.addEventListener("mousemove",E,{passive:!0}),()=>document.removeEventListener("mousemove",E)},[k,W,$s,Ue]),y.useEffect(()=>{if(!k)return;const E=O=>{const G=$s,U=Nn.current;if($s&&U){M.current=!0;const se=Math.min(U.x,O.clientX),xe=Math.min(U.y,O.clientY),qe=Math.max(U.x,O.clientX),Ke=Math.max(U.y,O.clientY),it=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(kt=>{if(!(kt instanceof HTMLElement)||ei(kt,"[data-feedback-toolbar]")||ei(kt,"[data-annotation-marker]"))return;const _t=kt.getBoundingClientRect();_t.width>window.innerWidth*.8&&_t.height>window.innerHeight*.5||_t.width<10||_t.height<10||_t.left<qe&&_t.right>se&&_t.top<Ke&&_t.bottom>xe&&it.push({element:kt,rect:_t})});const zt=it.filter(({element:kt})=>!it.some(({element:_t})=>_t!==kt&&kt.contains(_t))),tn=O.clientX/window.innerWidth*100,nn=O.clientY+window.scrollY;if(zt.length>0){const kt=zt.reduce((Vn,{rect:qt})=>({left:Math.min(Vn.left,qt.left),top:Math.min(Vn.top,qt.top),right:Math.max(Vn.right,qt.right),bottom:Math.max(Vn.bottom,qt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),_t=zt.slice(0,5).map(({element:Vn})=>ml(Vn).name).join(", "),bs=zt.length>5?` +${zt.length-5} more`:"",vs=zt[0].element,ws=Gu(vs),Tn=Ku(vs);K({x:tn,y:nn,clientY:O.clientY,element:`${zt.length} elements: ${_t}${bs}`,elementPath:"multi-select",boundingBox:{x:kt.left,y:kt.top+window.scrollY,width:kt.right-kt.left,height:kt.bottom-kt.top},isMultiSelect:!0,fullPath:Zu(vs),accessibility:Qu(vs),computedStyles:Tn,computedStylesObj:ws,nearbyElements:qu(vs),cssClasses:lc(vs),nearbyText:rc(vs),sourceFile:od(vs)})}else{const kt=Math.abs(qe-se),_t=Math.abs(Ke-xe);kt>20&&_t>20&&K({x:tn,y:nn,clientY:O.clientY,element:"Area selection",elementPath:`region at (${Math.round(se)}, ${Math.round(xe)})`,boundingBox:{x:se,y:xe+window.scrollY,width:kt,height:_t},isMultiSelect:!0})}ue(null)}else G&&(M.current=!0);ao.current=null,Nn.current=null,Is(!1),Ro.current&&(Ro.current.innerHTML="")};return document.addEventListener("mouseup",E),()=>document.removeEventListener("mouseup",E)},[k,$s]);const hs=y.useCallback(async(E,O,G)=>{const U=Kt.webhookUrl||w;if(!U||!Kt.webhooksEnabled&&!G)return!1;try{return(await fetch(U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:E,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...O})})).ok}catch(se){return console.warn("[Agentation] Webhook failed:",se),!1}},[w,Kt.webhookUrl,Kt.webhooksEnabled]),Xn=y.useCallback(E=>{var G;if(!W)return;const O={id:Date.now().toString(),x:W.x,y:W.y,comment:E,element:W.element,elementPath:W.elementPath,timestamp:Date.now(),selectedText:W.selectedText,boundingBox:W.boundingBox,nearbyText:W.nearbyText,cssClasses:W.cssClasses,isMultiSelect:W.isMultiSelect,isFixed:W.isFixed,fullPath:W.fullPath,accessibility:W.accessibility,computedStyles:W.computedStyles,nearbyElements:W.nearbyElements,reactComponents:W.reactComponents,sourceFile:W.sourceFile,elementBoundingBoxes:W.elementBoundingBoxes,..._&&Mn?{sessionId:Mn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};B(U=>[...U,O]),_e.current=O.id,Yt(()=>{_e.current=null},300),Yt(()=>{No(U=>new Set(U).add(O.id))},250),a==null||a(O),hs("annotation.add",{annotation:O}),io(!0),Yt(()=>{K(null),io(!1)},150),(G=window.getSelection())==null||G.removeAllRanges(),_&&Mn&&rl(_,Mn,O).then(U=>{U.id!==O.id&&(B(se=>se.map(xe=>xe.id===O.id?{...xe,id:U.id}:xe)),No(se=>{const xe=new Set(se);return xe.delete(O.id),xe.add(U.id),xe}))}).catch(U=>{console.warn("[Agentation] Failed to sync annotation:",U)})},[W,a,hs,_,Mn]),Jt=y.useCallback(()=>{io(!0),Yt(()=>{K(null),io(!1)},150)},[]),hn=y.useCallback(E=>{const O=j.findIndex(U=>U.id===E),G=j[O];(q==null?void 0:q.id)===E&&(go(!0),Yt(()=>{Ae(null),Je(null),st([]),go(!1)},150)),ln(E),Zo(U=>new Set(U).add(E)),G&&(c==null||c(G),hs("annotation.delete",{annotation:G})),_&&Ka(_,E).catch(U=>{console.warn("[Agentation] Failed to delete annotation from server:",U)}),Yt(()=>{B(U=>U.filter(se=>se.id!==E)),Zo(U=>{const se=new Set(U);return se.delete(E),se}),ln(null),O<j.length-1&&(en(O),Yt(()=>en(null),200))},150)},[j,q,c,hs,_]),kn=y.useCallback(E=>{var O;if(!E){Oe(null),tt(null),Qe([]);return}if(Oe(E.id),(O=E.elementBoundingBoxes)!=null&&O.length){const G=[];for(const U of E.elementBoundingBoxes){const se=U.x+U.width/2,xe=U.y+U.height/2-window.scrollY,Ke=document.elementsFromPoint(se,xe).find(it=>!it.closest("[data-annotation-marker]")&&!it.closest("[data-agentation-root]"));Ke&&G.push(Ke)}Qe(G),tt(null)}else if(E.boundingBox){const G=E.boundingBox,U=G.x+G.width/2,se=E.isFixed?G.y+G.height/2:G.y+G.height/2-window.scrollY,xe=br(U,se);if(xe){const qe=xe.getBoundingClientRect(),Ke=qe.width/G.width,it=qe.height/G.height;Ke<.5||it<.5?tt(null):tt(xe)}else tt(null);Qe([])}else tt(null),Qe([])},[]),Os=y.useCallback(E=>{if(!q)return;const O={...q,comment:E};B(G=>G.map(U=>U.id===q.id?O:U)),u==null||u(O),hs("annotation.update",{annotation:O}),_&&t1(_,q.id,{comment:E}).catch(G=>{console.warn("[Agentation] Failed to update annotation on server:",G)}),go(!0),Yt(()=>{Ae(null),Je(null),st([]),go(!1)},150)},[q,u,hs,_]),ko=y.useCallback(()=>{go(!0),Yt(()=>{Ae(null),Je(null),st([]),go(!1)},150)},[]),Un=y.useCallback(()=>{const E=j.length,O=Pe.length>0||!!nt;if(E===0&&yn.length===0&&!O)return;if(d==null||d(j),hs("annotations.clear",{annotations:j}),_){Promise.all(j.map(se=>Ka(_,se.id).catch(xe=>{console.warn("[Agentation] Failed to delete annotation from server:",xe)})));for(const[,se]of zn.current)se&&Ka(_,se).catch(()=>{});zn.current.clear();for(const[,se]of Po.current)se&&Ka(_,se).catch(()=>{});Po.current.clear()}Ne(!0),Ee(!0),Ci([]);const G=Ko.current;if(G){const se=G.getContext("2d");se&&se.clearRect(0,0,G.width,G.height)}(Pe.length>0||nt)&&(oo(se=>se+1),Mo(se=>se+1),Yt(()=>{$t([]),pn(null)},200)),mt&&Ut(!1),En&&Pn(""),Wn.current={rearrange:null,placements:[]},td(Ye);const U=E*30+200;Yt(()=>{B([]),No(new Set),localStorage.removeItem(Ed(Ye)),Ne(!1)},U),Yt(()=>Ee(!1),1500)},[Ye,j,yn,Pe,nt,mt,En,d,hs,_]),Hs=y.useCallback(async()=>{const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ye,O=Ge&&mt;let G;if(O){if(Pe.length===0&&!nt&&!En)return;G=""}else{if(G=o1(j,E,Kt.outputDetail),!G&&yn.length===0&&Pe.length===0&&!nt)return;G||(G=`## Page Feedback: ${E}
`)}if(!O&&yn.length>0){const U=new Set;for(const Ke of j)Ke.drawingIndex!=null&&U.add(Ke.drawingIndex);const se=Ko.current;se&&(se.style.visibility="hidden");const xe=[],qe=window.scrollY;for(let Ke=0;Ke<yn.length;Ke++){if(U.has(Ke))continue;const it=yn[Ke];if(it.points.length<2)continue;const Ct=it.fixed?it.points:it.points.map(es=>({x:es.x,y:es.y-qe}));let zt=1/0,tn=1/0,nn=-1/0,kt=-1/0;for(const es of Ct)zt=Math.min(zt,es.x),tn=Math.min(tn,es.y),nn=Math.max(nn,es.x),kt=Math.max(kt,es.y);const _t=nn-zt,bs=kt-tn,vs=Math.hypot(_t,bs),ws=Ct[0],Tn=Ct[Ct.length-1],Vn=Math.hypot(Tn.x-ws.x,Tn.y-ws.y);let qt;const Qt=Vn<vs*.35,Ss=_t/Math.max(bs,1);if(Qt&&vs>20){const es=Math.max(_t,bs)*.15;let Yi=0;for(const ea of Ct){const Ic=ea.x-zt<es,Fd=nn-ea.x<es,Xd=ea.y-tn<es,qd=kt-ea.y<es;(Ic||Fd)&&(Xd||qd)&&Yi++}qt=Yi>Ct.length*.15?"box":"circle"}else Ss>3&&bs<40?qt="underline":Vn>vs*.5?qt="arrow":qt="drawing";const Rn=Math.min(10,Ct.length),xo=Math.max(1,Math.floor(Ct.length/Rn)),Xo=new Set,rs=[],Mi=[ws];for(let es=xo;es<Ct.length-1;es+=xo)Mi.push(Ct[es]);Mi.push(Tn);for(const es of Mi){const Yi=br(es.x,es.y);if(!Yi||Xo.has(Yi)||ei(Yi,"[data-feedback-toolbar]"))continue;Xo.add(Yi);const{name:ea}=ml(Yi);rs.includes(ea)||rs.push(ea)}const Ui=`${Math.round(zt)},${Math.round(tn)} → ${Math.round(nn)},${Math.round(kt)}`;let Vi;(qt==="circle"||qt==="box")&&rs.length>0?Vi=`${qt==="box"?"Boxed":"Circled"} **${rs[0]}**${rs.length>1?` (and ${rs.slice(1).join(", ")})`:""} (region: ${Ui})`:qt==="underline"&&rs.length>0?Vi=`Underlined **${rs[0]}** (${Ui})`:qt==="arrow"&&rs.length>=2?Vi=`Arrow from **${rs[0]}** to **${rs[rs.length-1]}** (${Math.round(ws.x)},${Math.round(ws.y)} → ${Math.round(Tn.x)},${Math.round(Tn.y)})`:rs.length>0?Vi=`${qt==="arrow"?"Arrow":"Drawing"} near **${rs.join("**, **")}** (region: ${Ui})`:Vi=`Drawing at ${Ui}`,xe.push(Vi)}se&&(se.style.visibility=""),xe.length>0&&(G+=`
**Drawings:**
`,xe.forEach((Ke,it)=>{G+=`${it+1}. ${Ke}
`}))}if((Pe.length>0||O&&En)&&(G+=`
`+Qy(Pe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:En||void 0},Kt.outputDetail)),nt){const U=Zy(nt,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});U&&(G+=`
`+U)}if(g)try{await navigator.clipboard.writeText(G)}catch{}h==null||h(G),N(!0),Yt(()=>N(!1),2e3),Kt.autoClearAfterCopy&&Yt(()=>Un(),500)},[j,yn,Pe,nt,mt,Ge,Fs,En,Ye,Kt.outputDetail,_o,Kt.autoClearAfterCopy,Un,g,h]),Js=y.useCallback(async()=>{const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ye;let O=o1(j,E,Kt.outputDetail);if(!O&&Pe.length===0&&!nt)return;if(O||(O=`## Page Feedback: ${E}
`),Pe.length>0&&(O+=`
`+Qy(Pe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:En||void 0},Kt.outputDetail)),nt){const U=Zy(nt,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});U&&(O+=`
`+U)}p&&p(O,j),oe("sending"),await new Promise(U=>Yt(U,150));const G=await hs("submit",{output:O,annotations:j},!0);oe(G?"sent":"failed"),Yt(()=>oe("idle"),2500),G&&Kt.autoClearAfterCopy&&Yt(()=>Un(),500)},[p,hs,j,Pe,nt,mt,Fs,Ye,Kt.outputDetail,_o,Kt.autoClearAfterCopy,Un]);y.useEffect(()=>{if(!xn)return;const E=10,O=U=>{const se=U.clientX-xn.x,xe=U.clientY-xn.y,qe=Math.sqrt(se*se+xe*xe);if(!So&&qe>E&&Vo(!0),So||qe>E){let Ke=xn.toolbarX+se,it=xn.toolbarY+xe;const Ct=20,zt=337,tn=44,kt=zt-(k?Ds==="connected"?297:257:44),_t=Ct-kt,bs=window.innerWidth-Ct-zt;Ke=Math.max(_t,Math.min(bs,Ke)),it=Math.max(Ct,Math.min(window.innerHeight-tn-Ct,it)),Ns({x:Ke,y:it})}},G=()=>{So&&(ys.current=!0),Vo(!1),Qo(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",G),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",G)}},[xn,So,k,Ds]);const ke=y.useCallback(E=>{var xe,qe;if(E.target.closest("button")||E.target.closest("[data-agentation-settings-panel]"))return;const O=E.currentTarget.parentElement;if(!O)return;const G=O.getBoundingClientRect(),U=(xe=on==null?void 0:on.x)!=null?xe:G.left,se=(qe=on==null?void 0:on.y)!=null?qe:G.top;Qo({x:E.clientX,y:E.clientY,toolbarX:U,toolbarY:se})},[on]);if(y.useEffect(()=>{if(!on)return;const E=()=>{let se=on.x,xe=on.y;const it=20-(337-(k?Ds==="connected"?297:257:44)),Ct=window.innerWidth-20-337;se=Math.max(it,Math.min(Ct,se)),xe=Math.max(20,Math.min(window.innerHeight-44-20,xe)),(se!==on.x||xe!==on.y)&&Ns({x:se,y:xe})};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[on,k,Ds]),y.useEffect(()=>{const E=O=>{const G=O.target,U=G.tagName==="INPUT"||G.tagName==="TEXTAREA"||G.isContentEditable;if(O.key==="Escape"){if(Ge){gt?ht(null):fe();return}if(Ms){Ts(!1);return}if(Hn.length>0){Eo([]);return}W||k&&(as(),C(!1))}if((O.metaKey||O.ctrlKey)&&O.shiftKey&&(O.key==="f"||O.key==="F")){O.preventDefault(),as(),k?Ze():C(!0);return}if(!(U||O.metaKey||O.ctrlKey)&&((O.key==="p"||O.key==="P")&&(O.preventDefault(),as(),Xt()),(O.key==="l"||O.key==="L")&&(O.preventDefault(),as(),Ms&&Ts(!1),be&&ye(!1),W&&Jt(),Ge?fe():Nt(!0)),(O.key==="h"||O.key==="H")&&j.length>0&&(O.preventDefault(),as(),A(se=>!se)),(O.key==="c"||O.key==="C")&&(j.length>0||Pe.length>0||nt)&&(O.preventDefault(),as(),Hs()),(O.key==="x"||O.key==="X")&&(j.length>0||Pe.length>0||nt)&&(O.preventDefault(),as(),Un(),Pe.length>0&&$t([]),nt&&pn(null)),O.key==="s"||O.key==="S")){const se=ia(Kt.webhookUrl)||ia(w||"");j.length>0&&se&&ae==="idle"&&(O.preventDefault(),as(),Js())}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[k,Ms,Ge,gt,Pe,nt,W,j.length,Kt.webhookUrl,w,ae,Js,Xt,Hs,Un,Hn]),!ot||$)return null;const We=j.length>0,ut=j.filter(E=>!Wo.has(E.id)&&E.kind!=="placement"&&E.kind!=="rearrange"),Ve=ut.length>0,xt=j.filter(E=>Wo.has(E.id)),Tt=E=>{const xe=E.x/100*window.innerWidth,qe=typeof E.y=="string"?parseFloat(E.y):E.y,Ke={};window.innerHeight-qe-22-10<80&&(Ke.top="auto",Ke.bottom="calc(100% + 10px)");const Ct=xe-200/2,zt=10;if(Ct<zt){const tn=zt-Ct;Ke.left=`calc(50% + ${tn}px)`}else if(Ct+200>window.innerWidth-zt){const tn=Ct+200-(window.innerWidth-zt);Ke.left=`calc(50% - ${tn}px)`}return Ke};return Rc.createPortal(l.jsxs("div",{ref:J,style:{display:"contents"},"data-agentation-theme":Gs?"dark":"light","data-agentation-accent":Kt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ie.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:on?{left:on.x,top:on.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ie.toolbarContainer} ${k?Ie.expanded:Ie.collapsed} ${Hi?Ie.entrance:""} ${V?Ie.hiding:""} ${!Kt.webhooksEnabled&&(ia(Kt.webhookUrl)||ia(w||""))?Ie.serverConnected:""}`,onClick:k?void 0:E=>{if(ys.current){ys.current=!1,E.preventDefault();return}C(!0)},onMouseDown:ke,role:k?void 0:"button",tabIndex:k?-1:0,title:k?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ie.toggleContent} ${k?Ie.hidden:Ie.visible}`,children:[l.jsx(aS,{size:24}),Ve&&l.jsx("span",{className:`${Ie.badge} ${k?Ie.fadeOut:""} ${Hi?Ie.entrance:""}`,children:ut.length})]}),l.jsxs("div",{className:`${Ie.controlsContent} ${k?Ie.visible:Ie.hidden} ${on&&on.y<100?Ie.tooltipBelow:""} ${Rt||be?Ie.tooltipsHidden:""} ${ai?Ie.tooltipsInSession:""}`,onMouseEnter:Ao,onMouseLeave:fs,children:[l.jsxs("div",{className:`${Ie.buttonWrapper} ${on&&on.x<120?Ie.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ie.controlButton,onClick:E=>{E.stopPropagation(),as(),Xt()},"data-active":ne,children:l.jsx(dS,{size:24,isPaused:ne})}),l.jsxs("span",{className:Ie.buttonTooltip,children:[ne?"Resume animations":"Pause animations",l.jsx("span",{className:Ie.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:`${Ie.controlButton} ${Gs?"":Ie.light}`,onClick:E=>{E.stopPropagation(),as(),Ms&&Ts(!1),be&&ye(!1),W&&Jt(),Ge?fe():Nt(!0)},"data-active":Ge,style:Ge&&mt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(bS,{size:21})}),l.jsxs("span",{className:Ie.buttonTooltip,children:[Ge?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ie.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:Ie.controlButton,onClick:E=>{E.stopPropagation(),as(),A(!R)},disabled:!We||Ge,children:l.jsx(uS,{size:24,isOpen:R})}),l.jsxs("span",{className:Ie.buttonTooltip,children:[R?"Hide markers":"Show markers",l.jsx("span",{className:Ie.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:`${Ie.controlButton} ${pe?Ie.statusShowing:""}`,onClick:E=>{E.stopPropagation(),as(),Hs()},disabled:Ge&&mt?Pe.length===0&&!((jt=nt==null?void 0:nt.sections)!=null&&jt.length):!We&&yn.length===0&&Pe.length===0&&!((Ot=nt==null?void 0:nt.sections)!=null&&Ot.length),"data-active":pe,children:l.jsx(lS,{size:24,copied:pe,tint:Ge&&mt&&(Pe.length>0||(mn=nt==null?void 0:nt.sections)!=null&&mn.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ie.buttonTooltip,children:[Ge&&mt?"Copy layout":"Copy feedback",l.jsx("span",{className:Ie.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ie.buttonWrapper} ${Ie.sendButtonWrapper} ${k&&!Kt.webhooksEnabled&&(ia(Kt.webhookUrl)||ia(w||""))?Ie.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ie.controlButton} ${ae==="sent"||ae==="failed"?Ie.statusShowing:""}`,onClick:E=>{E.stopPropagation(),as(),Js()},disabled:!We||!ia(Kt.webhookUrl)&&!ia(w||"")||ae==="sending","data-no-hover":ae==="sent"||ae==="failed",tabIndex:ia(Kt.webhookUrl)||ia(w||"")?0:-1,children:[l.jsx(cS,{size:24,state:ae}),We&&ae==="idle"&&l.jsx("span",{className:Ie.buttonBadge,children:j.length})]}),l.jsxs("span",{className:Ie.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ie.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:Ie.controlButton,onClick:E=>{E.stopPropagation(),as(),Un()},disabled:!We&&yn.length===0&&Pe.length===0&&!((ms=nt==null?void 0:nt.sections)!=null&&ms.length),"data-danger":!0,children:l.jsx(hS,{size:24})}),l.jsxs("span",{className:Ie.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ie.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ie.buttonWrapper,children:[l.jsx("button",{className:Ie.controlButton,onClick:E=>{E.stopPropagation(),as(),Ge&&fe(),ye(!be)},children:l.jsx(fS,{size:24})}),_&&Ds!=="disconnected"&&l.jsx("span",{className:`${Ie.mcpIndicator} ${Ie[Ds]} ${be?Ie.hidden:""}`,title:Ds==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ie.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ie.divider}),l.jsxs("div",{className:`${Ie.buttonWrapper} ${on&&typeof window<"u"&&on.x>window.innerWidth-120?Ie.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ie.controlButton,onClick:E=>{E.stopPropagation(),as(),Ze()},children:l.jsx(mS,{size:24})}),l.jsxs("span",{className:Ie.buttonTooltip,children:["Exit",l.jsx("span",{className:Ie.shortcut,children:"Esc"})]})]})]}),l.jsx(G4,{visible:Ge&&k,activeType:gt,onSelect:E=>{ht(gt===E?null:E)},isDarkMode:Gs,sectionCount:(yo=nt==null?void 0:nt.sections.length)!=null?yo:0,onDetectSections:()=>{var qe,Ke;const E=a6(),O=(qe=nt==null?void 0:nt.sections)!=null?qe:[],G=new Set(O.map(it=>it.selector)),U=E.filter(it=>!G.has(it.selector)),se=[...O,...U],xe=[...(Ke=nt==null?void 0:nt.originalOrder)!=null?Ke:[],...U.map(it=>it.id)];pn({sections:se,originalOrder:xe,detectedAt:Date.now()})},placementCount:Pe.length,onClearPlacements:()=>{oo(E=>E+1),Mo(E=>E+1),Yt(()=>{pn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:mt,onBlankCanvasChange:E=>{const O={sections:[],originalOrder:[],detectedAt:Date.now()};E?(Xs.current={rearrange:nt,placements:Pe},pn(Wn.current.rearrange||O),$t(Wn.current.placements),ht(null)):(Wn.current={rearrange:nt,placements:Pe},pn(Xs.current.rearrange||O),$t(Xs.current.placements)),Ut(E)},wireframePurpose:En,onWireframePurposeChange:Pn,Tooltip:jr,onDragStart:(E,O)=>{var tn;O.preventDefault();const G=wt[E];let U=null,se=!1;const xe=O.clientX,qe=O.clientY,Ke=O.target.closest("[data-feedback-toolbar]"),it=(tn=Ke==null?void 0:Ke.getBoundingClientRect().top)!=null?tn:window.innerHeight,Ct=nn=>{const kt=nn.clientX-xe,_t=nn.clientY-qe;if(!se&&(Math.abs(kt)>4||Math.abs(_t)>4)&&(se=!0,U=document.createElement("div"),U.className=`${Te.dragPreview}${mt?` ${Te.dragPreviewWireframe}`:""}`,document.body.appendChild(U)),!U)return;const bs=Math.max(0,it-nn.clientY),vs=Math.min(1,bs/180),ws=1-Math.pow(1-vs,2),Tn=28,Vn=20,qt=Math.min(140,G.width*.18),Qt=Math.min(90,G.height*.18),Ss=Tn+(qt-Tn)*ws,Rn=Vn+(Qt-Vn)*ws;U.style.width=`${Ss}px`,U.style.height=`${Rn}px`,U.style.left=`${nn.clientX-Ss/2}px`,U.style.top=`${nn.clientY-Rn/2}px`,U.style.opacity=`${.5+.5*ws}`,U.textContent=ws>.25?E:""},zt=nn=>{if(window.removeEventListener("mousemove",Ct),window.removeEventListener("mouseup",zt),U&&document.body.removeChild(U),se){const kt=G.width,_t=G.height,bs=window.scrollY,vs=Math.max(0,nn.clientX-kt/2),ws=Math.max(0,nn.clientY+bs-_t/2),Tn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:E,x:vs,y:ws,width:kt,height:_t,scrollY:bs,timestamp:Date.now()};$t(Vn=>[...Vn,Tn]),ht(null),js.current=new Set,pi(Vn=>Vn+1)}};window.addEventListener("mousemove",Ct),window.addEventListener("mouseup",zt)}}),l.jsx(p3,{settings:Kt,onSettingsChange:E=>ki(O=>({...O,...E})),isDarkMode:Gs,onToggleTheme:As,isDevMode:_i,connectionStatus:Ds,endpoint:_,isVisible:He,toolbarNearBottom:!!on&&on.y<230,settingsPage:Xe,onSettingsPageChange:vt,onHideToolbar:D})]})}),(Ge||Gt)&&l.jsx("div",{className:`${Te.blankCanvas} ${On?Te.visible:""} ${sn?Te.gridActive:""}`,style:{"--canvas-opacity":Qn},"data-feedback-toolbar":!0}),Ge&&mt&&On&&l.jsxs("div",{className:Te.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Te.wireframeOpacityRow,children:[l.jsx("span",{className:Te.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Te.wireframeOpacitySlider,min:0,max:1,step:.01,value:Qn,onChange:E=>Ls(Number(E.target.value))})]}),l.jsxs("div",{className:Te.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Te.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Te.wireframeNoticeDivider}),l.jsx("button",{className:Te.wireframeStartOver,onClick:()=>{oo(E=>E+1),pn({sections:[],originalOrder:[],detectedAt:Date.now()}),Wn.current={rearrange:null,placements:[]},Pn(""),td(Ye)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ge||Gt)&&l.jsx(Y4,{placements:Pe,onChange:$t,activeComponent:Gt?null:gt,onActiveComponentChange:ht,isDarkMode:Gs,exiting:Gt,onInteractionChange:An,passthrough:!gt,extraSnapRects:nt==null?void 0:nt.sections.map(E=>E.currentRect),deselectSignal:qs,clearSignal:so,wireframe:mt,onSelectionChange:(E,O)=>{js.current=E,O||(Fn.current=new Set,wo(G=>G+1))},onDragMove:(E,O)=>{const G=Fn.current;if(!(!G.size||!nt)){if(!gn.current){gn.current=new Map;for(const U of nt.sections)G.has(U.id)&&gn.current.set(U.id,{x:U.currentRect.x,y:U.currentRect.y})}for(const U of nt.sections){if(!G.has(U.id)||!gn.current.get(U.id))continue;const xe=document.querySelector(`[data-rearrange-section="${U.id}"]`);xe&&(xe.style.transform=`translate(${E}px, ${O}px)`)}}},onDragEnd:(E,O,G)=>{const U=Fn.current,se=gn.current;if(gn.current=null,!(!U.size||!nt||!se)){for(const xe of U){const qe=document.querySelector(`[data-rearrange-section="${xe}"]`);qe&&(qe.style.transform="")}G&&pn(xe=>xe&&{...xe,sections:xe.sections.map(qe=>{const Ke=se.get(qe.id);return Ke?{...qe,currentRect:{...qe.currentRect,x:Math.max(0,Ke.x+E),y:Math.max(0,Ke.y+O)}}:qe})})}}}),(Ge||Gt)&&nt&&l.jsx(c6,{rearrangeState:nt,onChange:pn,isDarkMode:Gs,exiting:Gt,blankCanvas:mt,extraSnapRects:Pe.map(E=>({x:E.x,y:E.y,width:E.width,height:E.height})),clearSignal:Zn,deselectSignal:gs,onSelectionChange:(E,O)=>{Fn.current=E,O||(js.current=new Set,pi(G=>G+1))},onDragMove:(E,O)=>{const G=js.current;if(G.size){if(!gn.current){gn.current=new Map;for(const U of Pe)G.has(U.id)&&gn.current.set(U.id,{x:U.x,y:U.y})}for(const U of G){const se=document.querySelector(`[data-design-placement="${U}"]`);se&&(se.style.transform=`translate(${E}px, ${O}px)`)}}},onDragEnd:(E,O,G)=>{const U=js.current,se=gn.current;if(gn.current=null,!(!U.size||!se)){for(const xe of U){const qe=document.querySelector(`[data-design-placement="${xe}"]`);qe&&(qe.style.transform="")}G&&$t(xe=>xe.map(qe=>{const Ke=se.get(qe.id);return Ke?{...qe,x:Math.max(0,Ke.x+E),y:Math.max(0,Ke.y+O)}:qe}))}}}),l.jsx("canvas",{ref:Ko,className:`${Ie.drawCanvas} ${Ms?Ie.active:""}`,style:{opacity:cn?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ie.markersLayer,"data-feedback-toolbar":!0,children:[re&&ut.filter(E=>!E.isFixed).map((E,O,G)=>l.jsx(i1,{annotation:E,globalIndex:ut.findIndex(U=>U.id===E.id),layerIndex:O,layerSize:G.length,isExiting:Ce,isClearing:$e,isAnimated:Yo.has(E.id),isHovered:!Ce&&ft===E.id,isDeleting:Dt===E.id,isEditingAny:!!q,renumberFrom:Ht,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:Tt(E),onHoverEnter:U=>!Ce&&U.id!==_e.current&&kn(U),onHoverLeave:()=>kn(null),onClick:U=>Kt.markerClickBehavior==="delete"?hn(U.id):Zs(U),onContextMenu:Zs},E.id)),re&&!Ce&&xt.filter(E=>!E.isFixed).map(E=>l.jsx(a1,{annotation:E},E.id))]}),l.jsxs("div",{className:Ie.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[re&&ut.filter(E=>E.isFixed).map((E,O,G)=>l.jsx(i1,{annotation:E,globalIndex:ut.findIndex(U=>U.id===E.id),layerIndex:O,layerSize:G.length,isExiting:Ce,isClearing:$e,isAnimated:Yo.has(E.id),isHovered:!Ce&&ft===E.id,isDeleting:Dt===E.id,isEditingAny:!!q,renumberFrom:Ht,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:Tt(E),onHoverEnter:U=>!Ce&&U.id!==_e.current&&kn(U),onHoverLeave:()=>kn(null),onClick:U=>Kt.markerClickBehavior==="delete"?hn(U.id):Zs(U),onContextMenu:Zs},E.id)),re&&!Ce&&xt.filter(E=>E.isFixed).map(E=>l.jsx(a1,{annotation:E,fixed:!0},E.id))]}),k&&l.jsxs("div",{className:Ie.overlay,"data-feedback-toolbar":!0,style:W||q?{zIndex:99999}:void 0,children:[(Z==null?void 0:Z.rect)&&!W&&!rt&&!$s&&l.jsx("div",{className:`${Ie.hoverHighlight} ${Ie.enter}`,style:{left:Z.rect.left,top:Z.rect.top,width:Z.rect.width,height:Z.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Hn.filter(E=>document.contains(E.element)).map((E,O)=>{const G=E.element.getBoundingClientRect(),U=Hn.length>1;return l.jsx("div",{className:U?Ie.multiSelectOutline:Ie.singleSelectOutline,style:{position:"fixed",left:G.left,top:G.top,width:G.width,height:G.height,...U?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},O)}),ft&&!W&&(()=>{var se;const E=j.find(xe=>xe.id===ft);if(!(E!=null&&E.boundingBox))return null;if((se=E.elementBoundingBoxes)!=null&&se.length)return St.length>0?St.filter(xe=>document.contains(xe)).map((xe,qe)=>{const Ke=xe.getBoundingClientRect();return l.jsx("div",{className:`${Ie.multiSelectOutline} ${Ie.enter}`,style:{left:Ke.left,top:Ke.top,width:Ke.width,height:Ke.height}},`hover-outline-live-${qe}`)}):E.elementBoundingBoxes.map((xe,qe)=>l.jsx("div",{className:`${Ie.multiSelectOutline} ${Ie.enter}`,style:{left:xe.x,top:xe.y-bt,width:xe.width,height:xe.height}},`hover-outline-${qe}`));const O=at&&document.contains(at)?at.getBoundingClientRect():null,G=O?{x:O.left,y:O.top,width:O.width,height:O.height}:{x:E.boundingBox.x,y:E.isFixed?E.boundingBox.y:E.boundingBox.y-bt,width:E.boundingBox.width,height:E.boundingBox.height},U=E.isMultiSelect;return l.jsx("div",{className:`${U?Ie.multiSelectOutline:Ie.singleSelectOutline} ${Ie.enter}`,style:{left:G.x,top:G.y,width:G.width,height:G.height,...U?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Z&&!W&&!rt&&!$s&&l.jsxs("div",{className:`${Ie.hoverTooltip} ${Ie.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(Z.reactComponents?48:32),8)},children:[Z.reactComponents&&l.jsx("div",{className:Ie.hoverReactPath,children:Z.reactComponents}),l.jsx("div",{className:Ie.hoverElementName,children:Z.elementName})]}),W&&l.jsxs(l.Fragment,{children:[(Fo=W.multiSelectElements)!=null&&Fo.length?W.multiSelectElements.filter(E=>document.contains(E)).map((E,O)=>{const G=E.getBoundingClientRect();return l.jsx("div",{className:`${Ie.multiSelectOutline} ${Jn?Ie.exit:Ie.enter}`,style:{left:G.left,top:G.top,width:G.width,height:G.height}},`pending-multi-${O}`)}):W.targetElement&&document.contains(W.targetElement)?(()=>{const E=W.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ie.singleSelectOutline} ${Jn?Ie.exit:Ie.enter}`,style:{left:E.left,top:E.top,width:E.width,height:E.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():W.boundingBox&&l.jsx("div",{className:`${W.isMultiSelect?Ie.multiSelectOutline:Ie.singleSelectOutline} ${Jn?Ie.exit:Ie.enter}`,style:{left:W.boundingBox.x,top:W.boundingBox.y-bt,width:W.boundingBox.width,height:W.boundingBox.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const E=W.x,O=W.isFixed?W.y:W.y-bt;return l.jsxs(l.Fragment,{children:[l.jsx(i3,{x:E,y:O,isMultiSelect:W.isMultiSelect,isExiting:Jn}),l.jsx(Md,{ref:Vt,element:W.element,selectedText:W.selectedText,computedStyles:W.computedStylesObj,placeholder:W.element==="Area selection"?"What should change in this area?":W.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Xn,onCancel:Jt,isExiting:Jn,lightMode:!Gs,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,E/100*window.innerWidth)),...O>window.innerHeight-290?{bottom:window.innerHeight-O+20}:{top:O+20}}})]})})()]}),q&&l.jsxs(l.Fragment,{children:[(zs=q.elementBoundingBoxes)!=null&&zs.length?lt.length>0?lt.filter(E=>document.contains(E)).map((E,O)=>{const G=E.getBoundingClientRect();return l.jsx("div",{className:`${Ie.multiSelectOutline} ${Ie.enter}`,style:{left:G.left,top:G.top,width:G.width,height:G.height}},`edit-multi-live-${O}`)}):q.elementBoundingBoxes.map((E,O)=>l.jsx("div",{className:`${Ie.multiSelectOutline} ${Ie.enter}`,style:{left:E.x,top:E.y-bt,width:E.width,height:E.height}},`edit-multi-${O}`)):(()=>{const E=Fe&&document.contains(Fe)?Fe.getBoundingClientRect():null,O=E?{x:E.left,y:E.top,width:E.width,height:E.height}:q.boundingBox?{x:q.boundingBox.x,y:q.isFixed?q.boundingBox.y:q.boundingBox.y-bt,width:q.boundingBox.width,height:q.boundingBox.height}:null;return O?l.jsx("div",{className:`${q.isMultiSelect?Ie.multiSelectOutline:Ie.singleSelectOutline} ${Ie.enter}`,style:{left:O.x,top:O.y,width:O.width,height:O.height,...q.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(Md,{ref:Wt,element:q.element,selectedText:q.selectedText,computedStyles:n6(q.computedStyles),placeholder:"Edit your feedback...",initialValue:q.comment,submitLabel:"Save",onSubmit:Os,onCancel:ko,onDelete:()=>hn(q.id),isExiting:Co,lightMode:!Gs,accentColor:q.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const E=q.isFixed?q.y:q.y-bt;return{left:Math.max(160,Math.min(window.innerWidth-160,q.x/100*window.innerWidth)),...E>window.innerHeight-290?{bottom:window.innerHeight-E+20}:{top:E+20}}})()})]}),$s&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Ps,className:Ie.dragSelection}),l.jsx("div",{ref:Ro,className:Ie.highlightsContainer})]})]})]}),document.body)}const gp=y.createContext({});function Bc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const y3=typeof window<"u",yp=y3?y.useLayoutEffect:y.useEffect,$d=y.createContext(null);function xp(t,n){t.indexOf(n)===-1&&t.push(n)}function _l(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ua=(t,n,i)=>i>n?n:i<t?t:i;let bp=()=>{};const tr={},ub=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function db(t){return typeof t=="object"&&t!==null}const fb=t=>/^0[^.\s]+$/u.test(t);function hb(t){let n;return()=>(n===void 0&&(n=t()),n)}const $i=t=>t,x3=(t,n)=>i=>n(t(i)),Lc=(...t)=>t.reduce(x3),gl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class vp{constructor(){this.subscriptions=[]}add(n){return xp(this.subscriptions,n),()=>_l(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mi=t=>t*1e3,zi=t=>t/1e3;function mb(t,n){return n?t*(1e3/n):0}const b3=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},pb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,v3=1e-7,w3=12;function S3(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=pb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>v3&&++h<w3);return d}function Oc(t,n,i,a){if(t===n&&i===a)return $i;const c=u=>S3(u,0,1,t,i);return u=>u===0||u===1?u:pb(c(u),n,a)}const _b=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,gb=t=>n=>1-t(1-n),yb=Oc(.33,1.53,.69,.99),wp=gb(yb),xb=_b(wp),bb=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),vb=gb(Sp),wb=_b(Sp),C3=Oc(.42,0,1,1),k3=Oc(0,0,.58,1),Sb=Oc(.42,0,.58,1),Cb=t=>Array.isArray(t)&&typeof t[0]!="number";function kb(t,n){return Cb(t)?t[b3(0,t.length,n)]:t}const jb=t=>Array.isArray(t)&&typeof t[0]=="number",j3={linear:$i,easeIn:C3,easeInOut:Sb,easeOut:k3,circIn:Sp,circInOut:wb,circOut:vb,backIn:wp,backInOut:xb,backOut:yb,anticipate:bb},M3=t=>typeof t=="string",u1=t=>{if(jb(t)){bp(t.length===4);const[n,i,a,c]=t;return Oc(n,i,a,c)}else if(M3(t))return j3[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function T3(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const E3=40;function Mb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((R,A)=>(R[A]=T3(u),R),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,k=()=>{const R=tr.useManualTiming,A=R?c.timestamp:performance.now();i=!1,R||(c.delta=a?1e3/60:Math.max(Math.min(A-c.timestamp,E3),1)),c.timestamp=A,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(k))},C=()=>{i=!0,a=!0,c.isProcessing||t(k)};return{schedule:id.reduce((R,A)=>{const $=d[A];return R[A]=(H,V=!1,P=!1)=>(i||C(),$.schedule(H,V,P)),R},{}),cancel:R=>{for(let A=0;A<id.length;A++)d[id[A]].cancel(R)},state:c,steps:d}}const{schedule:is,cancel:Ma,state:$o,steps:cm}=Mb(typeof requestAnimationFrame<"u"?requestAnimationFrame:$i,!0);let pd;function A3(){pd=void 0}const ni={now:()=>(pd===void 0&&ni.set($o.isProcessing||tr.useManualTiming?$o.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(A3)}},Tb=t=>n=>typeof n=="string"&&n.startsWith(t),Eb=Tb("--"),D3=Tb("var(--"),Cp=t=>D3(t)?N3.test(t.split("/*")[0].trim()):!1,N3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function d1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const vl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...vl,transform:t=>ua(0,1,t)},ad={...vl,default:1},wc=t=>Math.round(t*1e5)/1e5,kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function R3(t){return t==null}const B3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jp=(t,n)=>i=>!!(typeof i=="string"&&B3.test(i)&&i.startsWith(t)||n&&!R3(i)&&Object.prototype.hasOwnProperty.call(i,n)),Ab=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(kp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},L3=t=>ua(0,255,t),um={...vl,transform:t=>Math.round(L3(t))},Mr={test:jp("rgb","red"),parse:Ab("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+um.transform(t)+", "+um.transform(n)+", "+um.transform(i)+", "+wc(Tc.transform(a))+")"};function O3(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const $m={test:jp("#"),parse:O3,transform:Mr.transform},zc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Qa=zc("deg"),ca=zc("%"),At=zc("px"),z3=zc("vh"),$3=zc("vw"),f1={...ca,parse:t=>ca.parse(t)/100,transform:t=>ca.transform(t*100)},dl={test:jp("hsl","hue"),parse:Ab("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+ca.transform(wc(n))+", "+ca.transform(wc(i))+", "+wc(Tc.transform(a))+")"},ho={test:t=>Mr.test(t)||$m.test(t)||dl.test(t),parse:t=>Mr.test(t)?Mr.parse(t):dl.test(t)?dl.parse(t):$m.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Mr.transform(t):dl.transform(t),getAnimatableNone:t=>{const n=ho.parse(t);return n.alpha=0,ho.transform(n)}},I3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function P3(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(kp))==null?void 0:n.length)||0)+(((i=t.match(I3))==null?void 0:i.length)||0)>0}const Db="number",Nb="color",H3="var",U3="var(",h1="${}",V3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(V3,p=>(ho.test(p)?(a.color.push(u),c.push(Nb),i.push(ho.parse(p))):p.startsWith(U3)?(a.var.push(u),c.push(H3),i.push(p)):(a.number.push(u),c.push(Db),i.push(parseFloat(p))),++u,h1)).split(h1);return{values:i,split:h,indexes:a,types:c}}function Y3(t){return yl(t).values}function Rb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Db?c+=wc(a[u]):d===Nb?c+=ho.transform(a[u]):c+=a[u]}return c}}function W3(t){return Rb(yl(t))}const F3=t=>typeof t=="number"?0:ho.test(t)?ho.getAnimatableNone(t):t,X3=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:F3(t);function q3(t){const n=yl(t);return Rb(n)(n.values.map((a,c)=>X3(a,n.split[c])))}const Zi={test:P3,parse:Y3,createTransformer:W3,getAnimatableNone:q3};function dm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function G3({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=dm(p,h,t+1/3),u=dm(p,h,t),d=dm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Ad(t,n){return i=>i>0?n:t}const _s=(t,n,i)=>t+(n-t)*i,fm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},K3=[$m,Mr,dl],Q3=t=>K3.find(n=>n.test(t));function m1(t){const n=Q3(t);if(!n)return!1;let i=n.parse(t);return n===dl&&(i=G3(i)),i}const p1=(t,n)=>{const i=m1(t),a=m1(n);if(!i||!a)return Ad(t,n);const c={...i};return u=>(c.red=fm(i.red,a.red,u),c.green=fm(i.green,a.green,u),c.blue=fm(i.blue,a.blue,u),c.alpha=_s(i.alpha,a.alpha,u),Mr.transform(c))},Im=new Set(["none","hidden"]);function Z3(t,n){return Im.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function J3(t,n){return i=>_s(t,n,i)}function Mp(t){return typeof t=="number"?J3:typeof t=="string"?Cp(t)?Ad:ho.test(t)?p1:nC:Array.isArray(t)?Bb:typeof t=="object"?ho.test(t)?p1:eC:Ad}function Bb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Mp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function eC(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Mp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function tC(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const nC=(t,n)=>{const i=Zi.createTransformer(n),a=yl(t),c=yl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Im.has(t)&&!c.values.length||Im.has(n)&&!a.values.length?Z3(t,n):Lc(Bb(tC(a,c),c.values),i):Ad(t,n)};function Lb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?_s(t,n,i):Mp(t)(t,n)}const sC=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>is.update(n,i),stop:()=>Ma(n),now:()=>$o.isProcessing?$o.timestamp:ni.now()}},Ob=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Dd=2e4;function Tp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Dd;)n+=i,a=t.next(n);return n>=Dd?1/0:n}function zb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Tp(a),Dd);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:zi(c)}}const Ws={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Pm(t,n){return t*Math.sqrt(1-n*n)}const oC=12;function iC(t,n,i){let a=i;for(let c=1;c<oC;c++)a=a-t(a)/n(a);return a}const hm=.001;function aC({duration:t=Ws.duration,bounce:n=Ws.bounce,velocity:i=Ws.velocity,mass:a=Ws.mass}){let c,u,d=1-n;d=ua(Ws.minDamping,Ws.maxDamping,d),t=ua(Ws.minDuration,Ws.maxDuration,zi(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,w=Pm(g,d),S=Math.exp(-x);return hm-b/w*S},u=g=>{const x=g*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-x),k=Pm(Math.pow(g,2),d);return(-c(g)+hm>0?-1:1)*((b-w)*S)/k}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-hm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=iC(c,u,h);if(t=mi(t),isNaN(p))return{stiffness:Ws.stiffness,damping:Ws.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const rC=["duration","bounce"],lC=["stiffness","damping","mass"];function _1(t,n){return n.some(i=>t[i]!==void 0)}function cC(t){let n={velocity:Ws.velocity,stiffness:Ws.stiffness,damping:Ws.damping,mass:Ws.mass,isResolvedFromDuration:!1,...t};if(!_1(t,lC)&&_1(t,rC))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ua(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ws.mass,stiffness:c,damping:u}}else{const i=aC({...t,velocity:0});n={...n,...i,mass:Ws.mass},n.isResolvedFromDuration=!0}return n}function Ec(t=Ws.visualDuration,n=Ws.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=cC({...i,velocity:-zi(i.velocity||0)}),S=b||0,k=g/(2*Math.sqrt(p*_)),C=d-u,j=zi(Math.sqrt(p/_)),B=Math.abs(C)<5;a||(a=B?Ws.restSpeed.granular:Ws.restSpeed.default),c||(c=B?Ws.restDelta.granular:Ws.restDelta.default);let R,A,$,H,V,P;if(k<1)$=Pm(j,k),H=(S+k*j*C)/$,R=re=>{const ie=Math.exp(-k*j*re);return d-ie*(H*Math.sin($*re)+C*Math.cos($*re))},V=k*j*H+C*$,P=k*j*C-H*$,A=re=>Math.exp(-k*j*re)*(V*Math.sin($*re)+P*Math.cos($*re));else if(k===1){R=ie=>d-Math.exp(-j*ie)*(C+(S+j*C)*ie);const re=S+j*C;A=ie=>Math.exp(-j*ie)*(j*re*ie-S)}else{const re=j*Math.sqrt(k*k-1);R=Z=>{const ue=Math.exp(-k*j*Z),z=Math.min(re*Z,300);return d-ue*((S+k*j*C)*Math.sinh(z)+re*C*Math.cosh(z))/re};const ie=(S+k*j*C)/re,Ce=k*j*ie-C*re,Be=k*j*C-ie*re;A=Z=>{const ue=Math.exp(-k*j*Z),z=Math.min(re*Z,300);return ue*(Ce*Math.sinh(z)+Be*Math.cosh(z))}}const J={calculatedDuration:w&&x||null,velocity:re=>mi(A(re)),next:re=>{if(!w&&k<1){const Ce=Math.exp(-k*j*re),Be=Math.sin($*re),Z=Math.cos($*re),ue=d-Ce*(H*Be+C*Z),z=mi(Ce*(V*Be+P*Z));return h.done=Math.abs(z)<=a&&Math.abs(d-ue)<=c,h.value=h.done?d:ue,h}const ie=R(re);if(w)h.done=re>=x;else{const Ce=mi(A(re));h.done=Math.abs(Ce)<=a&&Math.abs(d-ie)<=c}return h.value=h.done?d:ie,h},toString:()=>{const re=Math.min(Tp(J),Dd),ie=Ob(Ce=>J.next(re*Ce).value,re,30);return re+"ms "+ie},toTransition:()=>{}};return J}Ec.applyToOptions=t=>{const n=zb(t,100,Ec);return t.ease=n.ease,t.duration=mi(n.duration),t.type="keyframes",t};const uC=5;function $b(t,n,i){const a=Math.max(n-uC,0);return mb(i-t(a),n-a)}function Hm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=P=>h!==void 0&&P<h||p!==void 0&&P>p,S=P=>h===void 0?p:p===void 0||Math.abs(h-P)<Math.abs(p-P)?h:p;let k=i*n;const C=x+k,j=d===void 0?C:d(C);j!==C&&(k=j-x);const B=P=>-k*Math.exp(-P/a),R=P=>j+B(P),A=P=>{const J=B(P),re=R(P);b.done=Math.abs(J)<=g,b.value=b.done?j:re};let $,H;const V=P=>{w(b.value)&&($=P,H=Ec({keyframes:[b.value,S(b.value)],velocity:$b(R,P,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return V(0),{calculatedDuration:null,next:P=>{let J=!1;return!H&&$===void 0&&(J=!0,A(P),V(P)),$!==void 0&&P>=$?H.next(P-$):(!J&&A(P),b)}}}function dC(t,n,i){const a=[],c=i||tr.mix||Lb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||$i:n;h=Lc(p,h)}a.push(h)}return a}function Ib(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(bp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=dC(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=gl(t[x],t[x+1],_);return h[x](b)};return i?_=>g(ua(t[0],t[u-1],_)):g}function Pb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=gl(0,n,a);t.push(_s(i,1,c))}}function Hb(t){const n=[0];return Pb(n,t.length-1),n}function fC(t,n){return t.map(i=>i*n)}function hC(t,n){return t.map(()=>n||Sb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=Cb(a)?a.map(u1):u1(a),u={done:!1,value:n[0]},d=fC(i&&i.length===n.length?i:Hb(n),t),h=Ib(d,n,{ease:Array.isArray(c)?c:hC(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const mC=t=>t!==null;function Id(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(mC),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const pC={decay:Hm,inertia:Hm,tween:Sc,keyframes:Sc,spring:Ec};function Ub(t){typeof t.type=="string"&&(t.type=pC[t.type])}class Ep{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const _C=t=>t/100;class Nd extends Ep{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==ni.now()&&this.tick(ni.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Ub(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=Lc(_C,Lb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Tp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:k,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const j=this.currentTime-g*(this.playbackSpeed>=0?1:-1),B=this.playbackSpeed>=0?j<0:j>c;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let R=this.currentTime,A=a;if(x){const P=Math.min(this.currentTime,c)/h;let J=Math.floor(P),re=P%1;!re&&P>=1&&(re=1),re===1&&J--,J=Math.min(J,x+1),!!(J%2)&&(b==="reverse"?(re=1-re,w&&(re-=w/h)):b==="mirror"&&(A=d)),R=ua(0,1,re)*h}let $;B?(this.delayState.value=_[0],$=this.delayState):$=A.next(R),u&&!B&&($.value=u($.value));let{done:H}=$;!B&&p!==null&&(H=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&H);return V&&S!==Hm&&($.value=Id(_,this.options,C,this.speed)),k&&k($.value),V&&this.finish(),$}then(n,i){return this.finished.then(n,i)}get duration(){return zi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+zi(n)}get time(){return zi(this.currentTime)}set time(n){n=mi(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return $b(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(ni.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=zi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=sC,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ni.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function gC(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Tr=t=>t*180/Math.PI,Um=t=>{const n=Tr(Math.atan2(t[1],t[0]));return Vm(n)},yC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Um,rotateZ:Um,skewX:t=>Tr(Math.atan(t[1])),skewY:t=>Tr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Vm=t=>(t=t%360,t<0&&(t+=360),t),g1=Um,y1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),x1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),xC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:y1,scaleY:x1,scale:t=>(y1(t)+x1(t))/2,rotateX:t=>Vm(Tr(Math.atan2(t[6],t[5]))),rotateY:t=>Vm(Tr(Math.atan2(-t[2],t[0]))),rotateZ:g1,rotate:g1,skewX:t=>Tr(Math.atan(t[4])),skewY:t=>Tr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ym(t){return t.includes("scale")?1:0}function Wm(t,n){if(!t||t==="none")return Ym(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=xC,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=yC,c=h}if(!c)return Ym(n);const u=a[n],d=c[1].split(",").map(vC);return typeof u=="function"?u(d):d[u]}const bC=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Wm(i,n)};function vC(t){return parseFloat(t.trim())}const wl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sl=new Set(wl),b1=t=>t===vl||t===At,wC=new Set(["x","y","z"]),SC=wl.filter(t=>!wC.has(t));function CC(t){const n=[];return SC.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const er={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Wm(n,"x"),y:(t,{transform:n})=>Wm(n,"y")};er.translateX=er.x;er.translateY=er.y;const Er=new Set;let Fm=!1,Xm=!1,qm=!1;function Vb(){if(Xm){const t=Array.from(Er).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=CC(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Xm=!1,Fm=!1,Er.forEach(t=>t.complete(qm)),Er.clear()}function Yb(){Er.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Xm=!0)})}function kC(){qm=!0,Yb(),Vb(),qm=!1}class Ap{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Er.add(this),Fm||(Fm=!0,is.read(Yb),is.resolveKeyframes(Vb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}gC(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Er.delete(this)}cancel(){this.state==="scheduled"&&(Er.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const jC=t=>t.startsWith("--");function Wb(t,n,i){jC(n)?t.style.setProperty(n,i):t.style[n]=i}const MC={};function Fb(t,n){const i=hb(t);return()=>{var a;return(a=MC[n])!=null?a:i()}}const TC=Fb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Xb=Fb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,v1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function qb(t,n){if(t)return typeof t=="function"?Xb()?Ob(t,n):"ease-out":jb(t)?gc(t):Array.isArray(t)?t.map(i=>qb(i,n)||v1.easeOut):v1[t]}function EC(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=qb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function AC({type:t,...n}){var i,a;return Dp(t)&&Xb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Gb extends Ep{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,bp(typeof n.type!="string");const g=AC(n);this.animation=EC(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=Id(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),Wb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return zi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+zi(n)}get time(){return zi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=mi(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&TC()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),$i):c(this)}}const Kb={anticipate:bb,backInOut:xb,circInOut:wb};function DC(t){return t in Kb}function NC(t){typeof t.ease=="string"&&DC(t.ease)&&(t.ease=Kb[t.ease])}const mm=10;class RC extends Gb{constructor(n){NC(n),Ub(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Nd({...d,autoplay:!1}),p=Math.max(mm,ni.now()-this.startTime),g=ua(0,mm,p-mm),_=h.sample(p).value,{name:x}=this.options;u&&x&&Wb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const w1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Zi.test(t)||t==="0")&&!t.startsWith("url("));function BC(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function LC(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=w1(c,n),h=w1(u,n);return!d||!h?!1:BC(t)||(i==="spring"||Dp(i))&&a}function Gm(t){t.duration=0,t.type="keyframes"}const Qb=new Set(["opacity","clipPath","filter","transform"]),OC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function zC(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&OC.test(t[n]))return!0;return!1}const $C=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),IC=hb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function PC(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return IC()&&i&&(Qb.has(i)||$C.has(i)&&zC(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const HC=40;class UC extends Ep{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var S;super(),this.stop=()=>{var k,C;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(C=this.keyframeResolver)==null||C.cancel()},this.createdAt=ni.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Ap;this.keyframeResolver=new w(h,(k,C,j)=>this.onKeyframesResolved(k,C,b,!j),p,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var j,B;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=ni.now();let x=!0;LC(n,u,d,h)||(x=!1,(tr.instantAnimations||!p)&&(_==null||_(Id(n,a,i))),n[0]=n[n.length-1],Gm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>HC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!g&&PC(w),k=(B=(j=w.motionValue)==null?void 0:j.owner)==null?void 0:B.current;let C;if(S)try{C=new RC({...w,element:k})}catch{C=new Nd(w)}else C=new Nd(w);C.finished.then(()=>{this.notifyFinished()}).catch($i),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),kC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class VC{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return S1(this.animations,"duration")}get iterationDuration(){return S1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function S1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class YC extends VC{then(n,i){return this.finished.finally(n).then(()=>{})}}function Zb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const WC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function FC(t){const n=WC.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Jb(t,n,i=1){const[a,c]=FC(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return ub(d)?parseFloat(d):d}return Cp(c)?Jb(c,n,i+1):c}const XC={type:"spring",stiffness:500,damping:25,restSpeed:10},qC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),GC={type:"keyframes",duration:.8},KC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},QC=(t,{keyframes:n})=>n.length>2?GC:Sl.has(t)?t.startsWith("scale")?qC(n[1]):XC:KC;function e5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Np(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?e5(i,t):i}const ZC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function JC(t){for(const n in t)if(!ZC.has(n))return!0;return!1}const Rp=(t,n,i,a={},c,u)=>d=>{const h=Np(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-mi(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};JC(h)||Object.assign(_,QC(t,_)),_.duration&&(_.duration=mi(_.duration)),_.repeatDelay&&(_.repeatDelay=mi(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Gm(_),_.delay===0&&(x=!0)),(tr.instantAnimations||tr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Gm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=Id(_.keyframes,h);if(b!==void 0){is.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Nd(_):new UC(_)};function C1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Bp(t,n,i,a){if(typeof n=="function"){const[c,u]=C1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=C1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Ar(t,n,i){const a=t.getProps();return Bp(a,n,i!==void 0?i:a.custom,t)}const t5=new Set(["width","height","top","left","right","bottom",...wl]),k1=30,ek=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class tk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=ni.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=ni.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=ek(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new vp);const a=this.events[n].add(i);return n==="change"?()=>{a(),is.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=ni.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>k1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,k1);return mb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nr(t,n){return new tk(t,n)}const Km=t=>Array.isArray(t);function nk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,nr(i))}function sk(t){return Km(t)?t[t.length-1]||0:t}function ok(t,n){const i=Ar(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=sk(u[d]);nk(t,d,h)}}const vo=t=>!!(t&&t.getVelocity);function ik(t){return!!(vo(t)&&t.add)}function Qm(t,n){const i=t.getValue("willChange");if(ik(i))return i.add(n);if(!i&&tr.WillChange){const a=new tr.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Lp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const ak="framerAppearId",n5="data-"+Lp(ak);function s5(t){return t.props[n5]}function rk({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Op(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?e5(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),k=h[w];if(k===void 0||x&&rk(x,w))continue;const C={delay:i,...Np(u||{},w)},j=S.get();if(j!==void 0&&!S.isAnimating()&&!Array.isArray(k)&&k===j&&!C.velocity){is.update(()=>S.set(k));continue}let B=!1;if(window.MotionHandoffAnimation){const $=s5(t);if($){const H=window.MotionHandoffAnimation($,w,is);H!==null&&(C.startTime=H,B=!0)}}Qm(t,w);const R=g!=null?g:t.shouldReduceMotion;S.start(Rp(w,S,k,R&&t5.has(w)?{type:!1}:C,t,B));const A=S.animation;A&&_.push(A)}if(d){const w=()=>is.update(()=>{d&&ok(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Zm(t,n,i={}){var p;const a=Ar(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Op(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return lk(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function lk(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Zm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Zb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function ck(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Zm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Zm(t,n,i);else{const c=typeof n=="function"?Ar(t,n,i.custom):n;a=Promise.all(Op(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const uk={test:t=>t==="auto",parse:t=>t},o5=t=>n=>n.test(t),i5=[vl,At,ca,Qa,$3,z3,uk],j1=t=>i5.find(o5(t));function dk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||fb(t):!0}const fk=new Set(["brightness","contrast","saturate","opacity"]);function hk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(kp)||[];if(!a)return t;const c=i.replace(a,"");let u=fk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const mk=/\b([a-z-]*)\(.*?\)/gu,Jm={...Zi,getAnimatableNone:t=>{const n=t.match(mk);return n?n.map(hk).join(" "):t}},ep={...Zi,getAnimatableNone:t=>{const n=Zi.parse(t);return Zi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},M1={...vl,transform:Math.round},pk={rotate:Qa,rotateX:Qa,rotateY:Qa,rotateZ:Qa,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:Qa,skewX:Qa,skewY:Qa,distance:At,translateX:At,translateY:At,translateZ:At,x:At,y:At,z:At,perspective:At,transformPerspective:At,opacity:Tc,originX:f1,originY:f1,originZ:At},zp={borderWidth:At,borderTopWidth:At,borderRightWidth:At,borderBottomWidth:At,borderLeftWidth:At,borderRadius:At,borderTopLeftRadius:At,borderTopRightRadius:At,borderBottomRightRadius:At,borderBottomLeftRadius:At,width:At,maxWidth:At,height:At,maxHeight:At,top:At,right:At,bottom:At,left:At,inset:At,insetBlock:At,insetBlockStart:At,insetBlockEnd:At,insetInline:At,insetInlineStart:At,insetInlineEnd:At,padding:At,paddingTop:At,paddingRight:At,paddingBottom:At,paddingLeft:At,paddingBlock:At,paddingBlockStart:At,paddingBlockEnd:At,paddingInline:At,paddingInlineStart:At,paddingInlineEnd:At,margin:At,marginTop:At,marginRight:At,marginBottom:At,marginLeft:At,marginBlock:At,marginBlockStart:At,marginBlockEnd:At,marginInline:At,marginInlineStart:At,marginInlineEnd:At,fontSize:At,backgroundPositionX:At,backgroundPositionY:At,...pk,zIndex:M1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:M1},_k={...zp,color:ho,backgroundColor:ho,outlineColor:ho,fill:ho,stroke:ho,borderColor:ho,borderTopColor:ho,borderRightColor:ho,borderBottomColor:ho,borderLeftColor:ho,filter:Jm,WebkitFilter:Jm,mask:ep,WebkitMask:ep},a5=t=>_k[t],gk=new Set([Jm,ep]);function r5(t,n){let i=a5(t);return gk.has(i)||(i=Zi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const yk=new Set(["auto","none","0"]);function xk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!yk.has(u)&&yl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=r5(i,c)}class bk extends Ap{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),Cp(x))){const b=Jb(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!t5.has(a)||n.length!==2)return;const[c,u]=n,d=j1(c),h=j1(u),p=d1(c),g=d1(u);if(p!==g&&er[a]){this.needsMeasurement=!0;return}if(d!==h)if(b1(d)&&b1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else er[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||dk(n[c]))&&a.push(c);a.length&&xk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=er[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=er[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function $p(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const l5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return db(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ip}=Mb(queueMicrotask,!1),Ki={x:!1,y:!1};function c5(){return Ki.x||Ki.y}function vk(t){return t==="x"||t==="y"?Ki[t]?null:(Ki[t]=!0,()=>{Ki[t]=!1}):Ki.x||Ki.y?null:(Ki.x=Ki.y=!0,()=>{Ki.x=Ki.y=!1})}function u5(t,n){const i=$p(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function wk(t){return!(t.pointerType==="touch"||c5())}function Sk(t,n,i={}){const[a,c,u]=u5(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",S)},x=C=>{g&&(g(C),g=void 0),_()},b=C=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(C))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=C=>{if(C.pointerType!=="touch"){if(h){p=!0;return}x(C)}},k=C=>{if(!wk(C))return;p=!1;const j=n(d,C);typeof j=="function"&&(g=j,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",k,c),d.addEventListener("pointerdown",w,c)}),u}const d5=(t,n)=>n?t===n?!0:d5(t,n.parentElement):!1,Pp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Ck=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kk(t){return Ck.has(t.tagName)||t.isContentEditable===!0}const jk=new Set(["INPUT","SELECT","TEXTAREA"]);function Mk(t){return jk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function T1(t){return n=>{n.key==="Enter"&&t(n)}}function pm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Tk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=T1(()=>{if(gd.has(i))return;pm(i,"down");const c=T1(()=>{pm(i,"up")}),u=()=>pm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function E1(t){return Pp(t)&&!c5()}const A1=new WeakSet;function Ek(t,n,i={}){const[a,c,u]=u5(t,i),d=h=>{const p=h.currentTarget;if(!E1(h)||A1.has(h))return;gd.add(p),i.stopPropagation&&A1.add(h);const g=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),E1(w)&&typeof g=="function"&&g(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||d5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",g=>Tk(g,c)),!kk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Pd(t){return db(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let Za;const f5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Pd(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Ak=f5("inline","width","offsetWidth"),Dk=f5("block","height","offsetHeight");function Nk({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Ak(t,n)},get height(){return Dk(t,n)}})})}function Rk(t){t.forEach(Nk)}function Bk(){typeof ResizeObserver>"u"||(Za=new ResizeObserver(Rk))}function Lk(t,n){Za||Bk();const i=$p(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),Za==null||Za.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||Za==null||Za.unobserve(a)})}}const xd=new Set;let fl;function Ok(){fl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",fl)}function zk(t){return xd.add(t),fl||Ok(),()=>{xd.delete(t),!xd.size&&typeof fl=="function"&&(window.removeEventListener("resize",fl),fl=void 0)}}function D1(t,n){return typeof t=="function"?zk(t):Lk(t,n)}function h5(t){return Pd(t)&&t.tagName==="svg"}function $k(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Ib(c,u,d);return n?h(a):h}const Ik=[...i5,ho,Zi],Pk=t=>Ik.find(o5(t)),N1=()=>({translate:0,scale:1,origin:0,originPoint:0}),hl=()=>({x:N1(),y:N1()}),R1=()=>({min:0,max:0}),fo=()=>({x:R1(),y:R1()}),Ac=new WeakMap;function Hd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Dc(t){return typeof t=="string"||Array.isArray(t)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Up=["initial",...Hp];function Ud(t){return Hd(t.animate)||Up.some(n=>Dc(t[n]))}function m5(t){return!!(Ud(t)||t.variants)}function Hk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(vo(c))t.addValue(a,c);else if(vo(u))t.addValue(a,nr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,nr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const tp={current:null},p5={current:!1},Uk=typeof window<"u";function Vk(){if(p5.current=!0,!!Uk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>tp.current=t.matches;t.addEventListener("change",n),n()}else tp.current=!1}const B1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Rd={};function _5(t){Rd=t}function Yk(){return Rd}class g5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ap,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=ni.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,is.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Ud(i),this.isVariantNode=m5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&vo(S)&&S.set(g[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Ac.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(p5.current||Vk(),this.shouldReduceMotion=tp.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Ma(this.notifyUpdate),Ma(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Qb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Gb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:mi(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Sl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&is.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Rd){const i=Rd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fo()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<B1.length;a++){const c=B1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Hk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=nr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(ub(a)||fb(a))?a=parseFloat(a):!Pk(a)&&Zi.test(i)&&(a=r5(n,i)),this.setBaseTarget(n,vo(a)?a.get():a)),vo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Bp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!vo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new vp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ip.render(this.render)}}class y5 extends g5{constructor(){super(...arguments),this.KeyframeResolver=bk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;vo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class sr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function x5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function Wk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function Fk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function _m(t){return t===void 0||t===1}function np({scale:t,scaleX:n,scaleY:i}){return!_m(t)||!_m(n)||!_m(i)}function Cr(t){return np(t)||b5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function b5(t){return L1(t.x)||L1(t.y)}function L1(t){return t&&t!=="0%"}function Bd(t,n,i){const a=t-i,c=n*a;return i+c}function O1(t,n,i,a,c){return c!==void 0&&(t=Bd(t,c,a)),Bd(t,i,a)+n}function sp(t,n=0,i=1,a,c){t.min=O1(t.min,n,i,a,c),t.max=O1(t.max,n,i,a,c)}function v5(t,{x:n,y:i}){sp(t.x,n.translate,n.scale,n.originPoint),sp(t.y,i.translate,i.scale,i.originPoint)}const z1=.999999999999,$1=1.0000000000001;function Xk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ra(t.x,-u.scroll.offset.x),ra(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,v5(t,d)),a&&Cr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<$1&&n.x>z1&&(n.x=1),n.y<$1&&n.y>z1&&(n.y=1)}function ra(t,n){t.min+=n,t.max+=n}function I1(t,n,i,a,c=.5){const u=_s(t.min,t.max,c);sp(t,n,i,u,a)}function P1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;I1(t.x,P1(n.x,a.x),n.scaleX,n.scale,n.originX),I1(t.y,P1(n.y,a.y),n.scaleY,n.scale,n.originY)}function w5(t,n){return x5(Fk(t.getBoundingClientRect(),n))}function qk(t,n,i){const a=w5(t,i),{scroll:c}=n;return c&&(ra(a.x,c.offset.x),ra(a.y,c.offset.y)),a}const Gk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Kk=wl.length;function Qk(t,n,i){let a="",c=!0;for(let u=0;u<Kk;u++){const d=wl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=l5(h,zp[d]);if(!p){c=!1;const _=Gk[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Vp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(Sl.has(p)){d=!0;continue}else if(Eb(p)){c[p]=g;continue}else{const _=l5(g,zp[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=Qk(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function S5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function H1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const hc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(At.test(t))t=parseFloat(t);else return t;const i=H1(t,n.target.x),a=H1(t,n.target.y);return`${i}% ${a}%`}},Zk={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Zi.parse(t);if(c.length>5)return a;const u=Zi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=_s(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},op={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:Zk};function C5(t,{layout:n,layoutId:i}){return Sl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!op[t]||t==="opacity")}function Yp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(vo(a[h])||c&&vo(c[h])||C5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function Jk(t){return window.getComputedStyle(t)}class k5 extends y5{constructor(){super(...arguments),this.type="html",this.renderInstance=S5}readValueFromInstance(n,i){var a;if(Sl.has(i))return(a=this.projection)!=null&&a.isProjecting?Ym(i):bC(n,i);{const c=Jk(n),u=(Eb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return w5(n,i)}build(n,i,a){Vp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Yp(n,i,a)}}function e8(t,n){return t in n}class t8 extends g5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(e8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return fo()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const n8={offset:"stroke-dashoffset",array:"stroke-dasharray"},s8={offset:"strokeDashoffset",array:"strokeDasharray"};function o8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?n8:s8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const i8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function j5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var w,S;if(Vp(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const k of i8)x[k]!==void 0&&(b[k]=x[k],delete x[k]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&o8(x,c,u,d,!1)}const M5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),T5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function a8(t,n,i,a){S5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(M5.has(c)?c:Lp(c),n.attrs[c])}function E5(t,n,i){const a=Yp(t,n,i);for(const c in t)if(vo(t[c])||vo(n[c])){const u=wl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class A5 extends y5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=fo}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Sl.has(i)){const a=a5(i);return a&&a.default||0}return i=M5.has(i)?i:Lp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return E5(n,i,a)}build(n,i,a){j5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){a8(n,i,a,c)}mount(n){this.isSVGTag=T5(n.tagName),super.mount(n)}}const r8=Up.length;function D5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?D5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<r8;i++){const a=Up[i],c=t.props[a];(Dc(c)||c===!1)&&(n[a]=c)}return n}function N5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const l8=[...Hp].reverse(),c8=Hp.length;function u8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>ck(t,i,a)))}function d8(t){let n=u8(t),i=U1(),a=!0,c=!1;const u=g=>(_,x)=>{var w;const b=Ar(t,x,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:k,...C}=b;_={..._,...C,...k}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=D5(t.parent)||{},b=[],w=new Set;let S={},k=1/0;for(let j=0;j<c8;j++){const B=l8[j],R=i[B],A=_[B]!==void 0?_[B]:x[B],$=Dc(A),H=B===g?R.isActive:null;H===!1&&(k=j);let V=A===x[B]&&A!==_[B]&&$;if(V&&(a||c)&&t.manuallyAnimateOnMount&&(V=!1),R.protectedKeys={...S},!R.isActive&&H===null||!A&&!R.prevProp||Hd(A)||typeof A=="boolean")continue;if(B==="exit"&&R.isActive&&H!==!0){R.prevResolvedValues&&(S={...S,...R.prevResolvedValues});continue}const P=f8(R.prevProp,A);let J=P||B===g&&R.isActive&&!V&&$||j>k&&$,re=!1;const ie=Array.isArray(A)?A:[A];let Ce=ie.reduce(u(B),{});H===!1&&(Ce={});const{prevResolvedValues:Be={}}=R,Z={...Be,...Ce},ue=W=>{J=!0,w.has(W)&&(re=!0,w.delete(W)),R.needsAnimating[W]=!0;const K=t.getValue(W);K&&(K.liveStyle=!1)};for(const W in Z){const K=Ce[W],pe=Be[W];if(S.hasOwnProperty(W))continue;let N=!1;Km(K)&&Km(pe)?N=!N5(K,pe):N=K!==pe,N?K!=null?ue(W):w.add(W):K!==void 0&&w.has(W)?ue(W):R.protectedKeys[W]=!0}R.prevProp=A,R.prevResolvedValues=Ce,R.isActive&&(S={...S,...Ce}),(a||c)&&t.blockInitialAnimation&&(J=!1);const z=V&&P;J&&(!z||re)&&b.push(...ie.map(W=>{const K={type:B};if(typeof W=="string"&&(a||c)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:pe}=t,N=Ar(pe,W);if(pe.enteringChildren&&N){const{delayChildren:ae}=N.transition||{};K.delay=Zb(pe.enteringChildren,t,ae)}}return{animation:W,options:K}}))}if(w.size){const j={};if(typeof _.initial!="boolean"){const B=Ar(t,Array.isArray(_.initial)?_.initial[0]:_.initial);B&&B.transition&&(j.transition=B.transition)}w.forEach(B=>{const R=t.getBaseTarget(B),A=t.getValue(B);A&&(A.liveStyle=!0),j[B]=R!=null?R:null}),b.push({animation:j})}let C=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(C=!1),a=!1,c=!1,C?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=U1(),c=!0}}}function f8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!N5(n,t):!1}function wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function U1(){return{animate:wr(!0),whileInView:wr(),whileHover:wr(),whileTap:wr(),whileDrag:wr(),whileFocus:wr(),exit:wr()}}function ip(t,n){t.min=n.min,t.max=n.max}function Gi(t,n){ip(t.x,n.x),ip(t.y,n.y)}function V1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const R5=1e-4,h8=1-R5,m8=1+R5,B5=.01,p8=0-B5,_8=0+B5;function si(t){return t.max-t.min}function g8(t,n,i){return Math.abs(t-n)<=i}function Y1(t,n,i,a=.5){t.origin=a,t.originPoint=_s(n.min,n.max,t.origin),t.scale=si(i)/si(n),t.translate=_s(i.min,i.max,t.origin)-t.originPoint,(t.scale>=h8&&t.scale<=m8||isNaN(t.scale))&&(t.scale=1),(t.translate>=p8&&t.translate<=_8||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){Y1(t.x,n.x,i.x,a?a.originX:void 0),Y1(t.y,n.y,i.y,a?a.originY:void 0)}function W1(t,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+si(n)}function y8(t,n,i,a){W1(t.x,n.x,i.x,a==null?void 0:a.x),W1(t.y,n.y,i.y,a==null?void 0:a.y)}function F1(t,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+si(n)}function Ld(t,n,i,a){F1(t.x,n.x,i.x,a==null?void 0:a.x),F1(t.y,n.y,i.y,a==null?void 0:a.y)}function X1(t,n,i,a,c){return t-=n,t=Bd(t,1/i,a),c!==void 0&&(t=Bd(t,1/c,a)),t}function x8(t,n=0,i=1,a=.5,c,u=t,d=t){if(ca.test(n)&&(n=parseFloat(n),n=_s(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=_s(u.min,u.max,a);t===u&&(h-=n),t.min=X1(t.min,n,i,h,c),t.max=X1(t.max,n,i,h,c)}function q1(t,n,[i,a,c],u,d){x8(t,n[i],n[a],n[c],n.scale,u,d)}const b8=["x","scaleX","originX"],v8=["y","scaleY","originY"];function G1(t,n,i,a){q1(t.x,n,b8,i?i.x:void 0,a?a.x:void 0),q1(t.y,n,v8,i?i.y:void 0,a?a.y:void 0)}function K1(t){return t.translate===0&&t.scale===1}function L5(t){return K1(t.x)&&K1(t.y)}function Q1(t,n){return t.min===n.min&&t.max===n.max}function w8(t,n){return Q1(t.x,n.x)&&Q1(t.y,n.y)}function Z1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function O5(t,n){return Z1(t.x,n.x)&&Z1(t.y,n.y)}function J1(t){return si(t.x)/si(t.y)}function ex(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function aa(t){return[t("x"),t("y")]}function S8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const z5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],C8=z5.length,tx=t=>typeof t=="string"?parseFloat(t):t,nx=t=>typeof t=="number"||At.test(t);function k8(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=_s(0,(d=i.opacity)!=null?d:1,j8(a)),t.opacityExit=_s((h=n.opacity)!=null?h:1,0,M8(a))):u&&(t.opacity=_s((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<C8;_++){const x=z5[_];let b=sx(n,x),w=sx(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||nx(b)===nx(w)?(t[x]=Math.max(_s(tx(b),tx(w),a),0),(ca.test(w)||ca.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=_s(n.rotate||0,i.rotate||0,a))}function sx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const j8=$5(0,.5,vb),M8=$5(.5,.95,$i);function $5(t,n,i){return a=>a<t?0:a>n?1:i(gl(t,n,a))}function I5(t,n,i){const a=vo(t)?t:nr(t);return a.start(Rp("",a,n,i)),a.animation}function Nc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const T8=(t,n)=>t.depth-n.depth;class E8{constructor(){this.children=[],this.isDirty=!1}add(n){xp(this.children,n),this.isDirty=!0}remove(n){_l(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(T8),this.isDirty=!1,this.children.forEach(n)}}function A8(t,n){const i=ni.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Ma(a),t(u-n))};return is.setup(a,!0),()=>Ma(a)}function vd(t){return vo(t)?t.get():t}class D8{constructor(){this.members=[]}add(n){xp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(_l(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(_l(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gm=["","X","Y","Z"],N8=1e3;let R8=0;function ym(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function P5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=s5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",is,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&P5(a)}function H5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=R8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(O8),this.nodes.forEach(U8),this.nodes.forEach(V8),this.nodes.forEach(z8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new E8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new vp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Pd(d)&&!h5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;is.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=A8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(ax)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||q8,{onLayoutAnimationStart:k,onLayoutAnimationComplete:C}=g.getProps(),j=!this.targetLayout||!O5(this.targetLayout,w),B=!x&&b;if(this.options.layoutRoot||this.resumeFrom||B||x&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...Np(S,"layout"),onPlay:k,onComplete:C};(g.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(_,B)}else x||ax(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ma(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Y8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&P5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(I8),this.nodes.forEach(ox);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ix);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(P8),this.nodes.forEach(H8),this.nodes.forEach(B8),this.nodes.forEach(L8)):this.nodes.forEach(ix),this.clearAllSnapshots();const h=ni.now();$o.delta=ua(0,1e3/60,h-$o.timestamp),$o.timestamp=h,$o.isProcessing=!0,cm.update.process($o),cm.preRender.process($o),cm.render.process($o),$o.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($8),this.sharedNodes.forEach(W8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,is.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){is.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!si(this.snapshot.measuredBox.x)&&!si(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=fo()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!L5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||Cr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),G8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return fo();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(K8))){const{scroll:_}=this.root;_&&(ra(h.x,_.offset.x),ra(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=fo();if(Gi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Gi(h,d),ra(h.x,x.offset.x),ra(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||fo();Gi(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(ra(g.x,-w.scroll.offset.x),ra(g.y,-w.scroll.offset.y)),Cr(w.latestValues)&&bd(g,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return Cr(this.latestValues)&&bd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=fo();Gi(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!Cr(_.latestValues))continue;let x;_.instance&&(np(_.latestValues)&&_.updateSnapshot(),x=fo(),Gi(x,_.measurePageBox())),G1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return Cr(this.latestValues)&&G1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$o.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=$o.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=fo(),this.targetWithTransforms=fo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Gi(this.target,this.layout.layoutBox),v5(this.target,this.targetDelta)):Gi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||np(this.parent.latestValues)||b5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fo(),this.relativeTargetOrigin=fo(),Ld(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Gi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===$o.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Gi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;Xk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=fo());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(V1(this.prevProjectionDelta.x,this.projectionDelta.x),V1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!ex(this.projectionDelta.x,this.prevProjectionDelta.x)||!ex(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hl(),this.projectionDelta=hl(),this.projectionDeltaWithTransform=hl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=hl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=fo(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,k=w!==S,C=this.getStack(),j=!C||C.members.length<=1,B=!!(k&&!j&&this.options.crossfade===!0&&!this.path.some(X8));this.animationProgress=0;let R;this.mixTargetDelta=A=>{const $=A/1e3;rx(x.x,d.x,$),rx(x.y,d.y,$),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ld(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),F8(this.relativeTarget,this.relativeTargetOrigin,b,$),R&&w8(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=fo()),Gi(R,this.relativeTarget)),k&&(this.animationValues=_,k8(_,g,this.latestValues,$,B,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(Ma(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=is.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=nr(0)),this.motionValue.jump(0,!1),this.currentAnimation=I5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(N8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&U5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||fo();const x=si(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=si(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Gi(h,p),bd(h,_),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new D8),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&ym("z",d,g,this.animationValues);for(let _=0;_<gm.length;_++)ym(`rotate${gm[_]}`,d,g,this.animationValues),ym(`skew${gm[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,k;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Cr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=S8(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?(k=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?k:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const C in op){if(_[C]===void 0)continue;const{correct:j,applyTo:B,isCSSVariable:R}=op[C],A=x==="none"?_[C]:j(_[C],g);if(B){const $=B.length;for(let H=0;H<$;H++)d[B[H]]=A}else R?this.options.visualElement.renderState.vars[C]=A:d[C]=A}this.options.layoutId&&(d.pointerEvents=g===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(ox),this.root.sharedNodes.clear()}}}function B8(t){t.updateLayout()}function L8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=si(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";ip(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else U5(u,n.layoutBox,a)&&aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=si(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=hl();kc(h,a,n.layoutBox);const p=hl();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const g=!L5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,k=fo();Ld(k,n.layoutBox,b.layoutBox,S);const C=fo();Ld(C,a,w.layoutBox,S),O5(k,C)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=C,t.relativeTargetOrigin=k,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function O8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function z8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function $8(t){t.clearSnapshot()}function ox(t){t.clearMeasurements()}function I8(t){t.isLayoutDirty=!0,t.updateLayout()}function ix(t){t.isLayoutDirty=!1}function P8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function H8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ax(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function U8(t){t.resolveTargetDelta()}function V8(t){t.calcProjection()}function Y8(t){t.resetSkewAndRotation()}function W8(t){t.removeLeadSnapshot()}function rx(t,n,i){t.translate=_s(n.translate,0,i),t.scale=_s(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function lx(t,n,i,a){t.min=_s(n.min,i.min,a),t.max=_s(n.max,i.max,a)}function F8(t,n,i,a){lx(t.x,n.x,i.x,a),lx(t.y,n.y,i.y,a)}function X8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const q8={duration:.45,ease:[.4,0,.1,1]},cx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ux=cx("applewebkit/")&&!cx("chrome/")?Math.round:$i;function dx(t){t.min=ux(t.min),t.max=ux(t.max)}function G8(t){dx(t.x),dx(t.y)}function U5(t,n,i){return t==="position"||t==="preserve-aspect"&&!g8(J1(n),J1(i),.2)}function K8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const Q8=H5({attachResizeListener:(t,n)=>Nc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xm={current:void 0},V5=H5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!xm.current){const t=new Q8({});t.mount(window),t.setOptions({layoutScroll:!0}),xm.current=t}return xm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Vd=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function fx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function Z8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=fx(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():fx(t[c],null)}}}}function J8(...t){return y.useCallback(Z8(...t),t)}class ej extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function tj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Vd),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=J8(h,_);return y.useInsertionEffect(()=>{const{width:S,height:k,top:C,left:j,right:B,bottom:R}=p.current;if(n||u===!1||!h.current||!S||!k)return;const A=i==="left"?`left: ${j}`:`right: ${B}`,$=a==="bottom"?`bottom: ${R}`:`top: ${C}`;h.current.dataset.motionPopId=d;const H=document.createElement("style");g&&(H.nonce=g);const V=c!=null?c:document.head;return V.appendChild(H),H.sheet&&H.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${k}px !important;
            ${A}px !important;
            ${$}px !important;
          }
        `),()=>{var P;(P=h.current)==null||P.removeAttribute("data-motion-pop-id"),V.contains(H)&&V.removeChild(H)}},[n]),l.jsx(ej,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const nj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Bc(sj),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const k of _.values())if(!k)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),y.useMemo(()=>{_.forEach((S,k)=>_.set(k,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(tj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),l.jsx($d.Provider,{value:w,children:t})};function sj(){return new Map}function Y5(t=!0){const n=y.useContext($d);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function hx(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Yd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=Y5(d),b=y.useMemo(()=>hx(t),[t]),w=d&&!_?[]:b.map(rd),S=y.useRef(!0),k=y.useRef(b),C=Bc(()=>new Map),j=y.useRef(new Set),[B,R]=y.useState(b),[A,$]=y.useState(b);yp(()=>{S.current=!1,k.current=b;for(let P=0;P<A.length;P++){const J=rd(A[P]);w.includes(J)?(C.delete(J),j.current.delete(J)):C.get(J)!==!0&&C.set(J,!1)}},[A,w.length,w.join("-")]);const H=[];if(b!==B){let P=[...b];for(let J=0;J<A.length;J++){const re=A[J],ie=rd(re);w.includes(ie)||(P.splice(J,0,re),H.push(re))}return u==="wait"&&H.length&&(P=H),$(hx(P)),R(b),null}const{forceRender:V}=y.useContext(gp);return l.jsx(l.Fragment,{children:A.map(P=>{const J=rd(P),re=d&&!_?!1:b===A||w.includes(J),ie=()=>{if(j.current.has(J))return;if(C.has(J))j.current.add(J),C.set(J,!0);else return;let Ce=!0;C.forEach(Be=>{Be||(Ce=!1)}),Ce&&(V==null||V(),$(k.current),d&&(x==null||x()),a&&a())};return l.jsx(nj,{isPresent:re,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:re?void 0:ie,anchorX:h,anchorY:p,children:P},J)})})},W5=y.createContext({strict:!1}),mx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let px=!1;function oj(){if(px)return;const t={};for(const n in mx)t[n]={isEnabled:i=>mx[n].some(a=>!!i[a])};_5(t),px=!0}function F5(){return oj(),Yk()}function ij(t){const n=F5();for(const i in t)n[i]={...n[i],...t[i]};_5(n)}const aj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Od(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||aj.has(t)}let X5=t=>!Od(t);function rj(t){typeof t=="function"&&(X5=n=>n.startsWith("on")?!Od(n):t(n))}try{rj(require("@emotion/is-prop-valid").default)}catch{}function lj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||vo(t[c])||(X5(c)||i===!0&&Od(c)||!n&&!Od(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Wd=y.createContext({});function cj(t,n){if(Ud(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Dc(i)?i:void 0,animate:Dc(a)?a:void 0}}return t.inherit!==!1?n:{}}function uj(t){const{initial:n,animate:i}=cj(t,y.useContext(Wd));return y.useMemo(()=>({initial:n,animate:i}),[_x(n),_x(i)])}function _x(t){return Array.isArray(t)?t.join(" "):t}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function q5(t,n,i){for(const a in n)!vo(n[a])&&!C5(a,i)&&(t[a]=n[a])}function dj({transformTemplate:t},n){return y.useMemo(()=>{const i=Wp();return Vp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function fj(t,n){const i=t.style||{},a={};return q5(a,i,t),Object.assign(a,dj(t,n)),a}function hj(t,n){const i={},a=fj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const G5=()=>({...Wp(),attrs:{}});function mj(t,n,i,a){const c=y.useMemo(()=>{const u=G5();return j5(u,n,T5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};q5(u,t.style,t),c.style={...u,...c.style}}return c}const pj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(t){return typeof t!="string"||t.includes("-")?!1:!!(pj.indexOf(t)>-1||/[A-Z]/u.test(t))}function _j(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Fp(t))?mj:hj)(n,a,c,t),g=lj(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>vo(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function gj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:yj(i,a,c,t),renderState:n()}}function yj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Ud(t),g=m5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Hd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Bp(t,b[w]);if(S){const{transitionEnd:k,transition:C,...j}=S;for(const B in j){let R=j[B];if(Array.isArray(R)){const A=_?R.length-1:0;R=R[A]}R!==null&&(c[B]=R)}for(const B in k)c[B]=k[B]}}}return c}const K5=t=>(n,i)=>{const a=y.useContext(Wd),c=y.useContext($d),u=()=>gj(t,n,a,c);return i?u():Bc(u)},xj=K5({scrapeMotionValuesFromProps:Yp,createRenderState:Wp}),bj=K5({scrapeMotionValuesFromProps:E5,createRenderState:G5}),vj=Symbol.for("motionComponentSymbol");function wj(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const Q5=y.createContext({});function cl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Sj(t,n,i,a,c,u){var R,A;const{visualElement:d}=y.useContext(Wd),h=y.useContext(W5),p=y.useContext($d),g=y.useContext(Vd),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,k=y.useContext(Q5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Cj(b.current,i,c,k);const C=y.useRef(!1);y.useInsertionEffect(()=>{S&&C.current&&S.update(i,p)});const j=i[n5],B=y.useRef(!!j&&typeof window<"u"&&!((R=window.MotionHandoffIsComplete)!=null&&R.call(window,j))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,j)));return yp(()=>{w.current=!0,S&&(C.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),B.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!B.current&&S.animationState&&S.animationState.animateChanges(),B.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,j)}),B.current=!1),S.enteringChildren=void 0)}),S}function Cj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:Z5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&cl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function Z5(t){if(t)return t.options.allowProjection!==!1?t.projection:Z5(t.parent)}function bm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&ij(a);const u=i?i==="svg":Fp(t),d=u?bj:xj;function h(x,b){let w;const S={...y.useContext(Vd),...x,layoutId:kj(x)},{isStatic:k}=S,C=uj(x),j=d(x,k);if(!k&&typeof window<"u"){jj();const B=Mj(S);w=B.MeasureLayout,C.visualElement=Sj(t,j,S,c,B.ProjectionNode,u)}return l.jsxs(Wd.Provider,{value:C,children:[w&&C.visualElement?l.jsx(w,{visualElement:C.visualElement,...S}):null,_j(t,x,wj(j,C.visualElement,b),j,k,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[vj]=t,p}function kj({layoutId:t}){const n=y.useContext(gp).id;return n&&t!==void 0?n+"-"+t:t}function jj(t,n){y.useContext(W5).strict}function Mj(t){const n=F5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Tj(t,n){if(typeof Proxy>"u")return bm;const i=new Map,a=(u,d)=>bm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,bm(d,void 0,t,n)),i.get(d))})}const Ej=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Fp(t))?new A5(n):new k5(n,{allowProjection:t!==y.Fragment})};class Aj extends sr{constructor(n){super(n),n.animationState||(n.animationState=d8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Hd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Dj=0;class Nj extends sr{constructor(){super(...arguments),this.id=Dj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Ar(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Rj={animation:{Feature:Aj},exit:{Feature:Nj}};function $c(t){return{point:{x:t.pageX,y:t.pageY}}}const Bj=t=>n=>Pp(n)&&t(n,$c(n));function jc(t,n,i,a){return Nc(t,n,Bj(i),a)}const J5=({current:t})=>t?t.ownerDocument.defaultView:null,gx=(t,n)=>Math.abs(t-n);function Lj(t,n){const i=gx(t.x,n.x),a=gx(t.y,n.y);return Math.sqrt(i**2+a**2)}const yx=new Set(["auto","scroll"]);class e2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const w=vm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,k=Lj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!k)return;const{point:C}=w,{timestamp:j}=$o;this.history.push({...C,timestamp:j});const{onStart:B,onMove:R}=this.handlers;S||(B&&B(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ld(S,this.transformPagePoint),is.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:k,onSessionEnd:C,resumeAnimation:j}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const B=vm(w.type==="pointercancel"?this.lastMoveEventInfo:ld(S,this.transformPagePoint),this.history);this.startEvent&&k&&k(w,B),C&&C(w,B)},!Pp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=$c(n),g=ld(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=$o;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,vm(g,this.history)),this.removeListeners=Lc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(yx.has(a.overflowX)||yx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),is.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ma(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function xx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function vm({point:t},n){return{point:t,delta:xx(t,t2(n)),offset:xx(t,Oj(n)),velocity:zj(n,.1)}}function Oj(t){return t[0]}function t2(t){return t[t.length-1]}function zj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=t2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>mi(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>mi(n)*2&&(a=t[1]);const u=zi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function $j(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?_s(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?_s(i,t,a.max):Math.min(t,i)),t}function bx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function Ij(t,{top:n,left:i,bottom:a,right:c}){return{x:bx(t.x,i,c),y:bx(t.y,n,a)}}function vx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function Pj(t,n){return{x:vx(t.x,n.x),y:vx(t.y,n.y)}}function Hj(t,n){let i=.5;const a=si(t),c=si(n);return c>a?i=gl(n.min,n.max-a,t.min):a>c&&(i=gl(t.min,t.max-c,n.min)),ua(0,1,i)}function Uj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ap=.35;function Vj(t=ap){return t===!1?t=0:t===!0&&(t=ap),{x:wx(t,"left","right"),y:wx(t,"top","bottom")}}function wx(t,n,i){return{min:Sx(t,n),max:Sx(t,i)}}function Sx(t,n){return typeof t=="number"?t:t[n]||0}const Yj=new WeakMap;class Wj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=fo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor($c(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:k}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vk(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),aa(j=>{let B=this.getAxisMotionValue(j).get()||0;if(ca.test(B)){const{projection:R}=this.visualElement;if(R&&R.layout){const A=R.layout.layoutBox[j];A&&(B=si(A)*(parseFloat(B)/100))}}this.originPoint[j]=B}),k&&is.update(()=>k(x,b),!1,!0),Qm(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:k,onDrag:C}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:j}=b;if(S&&this.currentDirection===null){this.currentDirection=Xj(j),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",b.point,j),this.updateAxis("y",b.point,j),this.visualElement.render(),C&&is.update(()=>C(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new e2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:J5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&is.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=$j(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&cl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Ij(a.layoutBox,n):this.constraints=!1,this.elastic=Vj(i),c!==this.constraints&&!cl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&aa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Uj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!cl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=qk(a,c.root,this.visualElement.getTransformPagePoint());let d=Pj(c.layout.layoutBox,u);if(i){const h=i(Wk(d));this.hasMutatedConstraints=!!h,h&&(d=x5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=aa(_=>{if(!cd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Qm(this.visualElement,n),a.start(Rp(n,a,0,i,this.visualElement,!1))}stopAnimation(){aa(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){aa(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-_s(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!cl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};aa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Hj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),aa(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(_s(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Yj.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,w=b!==n&&Mk(b);_&&x&&!w&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();cl(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Fj(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),is.read(c);const h=Nc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(aa(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ap,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Cx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function Fj(t,n,i){const a=D1(t,Cx(i)),c=D1(n,Cx(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function Xj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class qj extends sr{constructor(n){super(n),this.removeGroupControls=$i,this.removeListeners=$i,this.controls=new Wj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$i}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const wm=t=>(n,i)=>{t&&is.update(()=>t(n,i),!1,!0)};class Gj extends sr{constructor(){super(...arguments),this.removePointerDownListener=$i}onPointerDown(n){this.session=new e2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:J5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:wm(n),onStart:wm(i),onMove:wm(a),onEnd:(u,d)=>{delete this.session,c&&is.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Sm=!1;class Kj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Sm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Sm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||is.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ip.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Sm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function n2(t){const[n,i]=Y5(),a=y.useContext(gp);return l.jsx(Kj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(Q5),isPresent:n,safeToRemove:i})}const Qj={pan:{Feature:Gj},drag:{Feature:qj,ProjectionNode:V5,MeasureLayout:n2}};function kx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&is.postRender(()=>u(n,$c(n)))}class Zj extends sr{mount(){const{current:n}=this.node;n&&(this.unmount=Sk(n,(i,a)=>(kx(this.node,a,"Start"),c=>kx(this.node,c,"End"))))}unmount(){}}class Jj extends sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Lc(Nc(this.node.current,"focus",()=>this.onFocus()),Nc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function jx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&is.postRender(()=>u(n,$c(n)))}class eM extends sr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Ek(n,(c,u)=>(jx(this.node,u,"Start"),(d,{success:h})=>jx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const rp=new WeakMap,Cm=new WeakMap,tM=t=>{const n=rp.get(t.target);n&&n(t)},nM=t=>{t.forEach(tM)};function sM({root:t,...n}){const i=t||document;Cm.has(i)||Cm.set(i,{});const a=Cm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(nM,{root:t,...n})),a[c]}function oM(t,n,i){const a=sM(n);return rp.set(t,i),a.observe(t),()=>{rp.delete(t),a.unobserve(t)}}const iM={some:0,all:1};class aM extends sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:iM[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(g)};this.stopObserver=oM(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(rM(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function rM({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const lM={inView:{Feature:aM},tap:{Feature:eM},focus:{Feature:Jj},hover:{Feature:Zj}},cM={layout:{ProjectionNode:V5,MeasureLayout:n2}},uM={...Rj,...lM,...Qj,...cM},hi=Tj(uM,Ej);function lp(t){const n=Bc(()=>nr(t)),{isStatic:i}=y.useContext(Vd);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function s2(t,n){const i=lp(n()),a=()=>i.set(n());return a(),yp(()=>{const c=()=>is.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Ma(a)}}),i}function dM(t){Cc.current=[],t();const n=s2(Cc.current,t);return Cc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return dM(t);const u=typeof n=="function"?n:$k(n,i,a),d=Array.isArray(t)?Mx(t,u):Mx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function Mx(t,n){const i=Bc(()=>[]);return s2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Xp(t){return typeof t=="object"&&!Array.isArray(t)}function o2(t,n,i,a){return t==null?[]:typeof t=="string"&&Xp(n)?$p(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function fM(t,n,i){return t*(n+1)}function Tx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function hM(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(_l(t,c),a--)}}function mM(t,n,i,a,c,u){hM(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:_s(c,u,a[d]),easing:kb(i,d)})}function pM(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function _M(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const gM="easeInOut";function yM(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){g.set(S,x);continue}else if(!Array.isArray(S)){g.set(S.name,Tx(x,S.at,_,g));continue}let[k,C,j={}]=S;j.at!==void 0&&(x=Tx(x,j.at,_,g));let B=0;const R=(A,$,H,V=0,P=0)=>{const J=xM(A),{delay:re=0,times:ie=Hb(J),type:Ce=n.type||"keyframes",repeat:Be,repeatType:Z,repeatDelay:ue=0,...z}=$;let{ease:te=n.ease||"easeOut",duration:W}=$;const K=typeof re=="function"?re(V,P):re,pe=J.length,N=Dp(Ce)?Ce:c==null?void 0:c[Ce||"keyframes"];if(pe<=2&&N){let Ee=100;if(pe===2&&wM(J)){const ft=J[1]-J[0];Ee=Math.abs(ft)}const $e={...n,...z};W!==void 0&&($e.duration=mi(W));const Ne=zb($e,Ee,N);te=Ne.ease,W=Ne.duration}W!=null||(W=u);const ae=x+K;ie.length===1&&ie[0]===0&&(ie[1]=1);const oe=ie.length-J.length;if(oe>0&&Pb(ie,oe),J.length===1&&J.unshift(null),Be){W=fM(W,Be);const Ee=[...J],$e=[...ie];te=Array.isArray(te)?[...te]:[te];const Ne=[...te];for(let ft=0;ft<Be;ft++){J.push(...Ee);for(let Oe=0;Oe<Ee.length;Oe++)ie.push($e[Oe]+(ft+1)),te.push(Oe===0?"linear":kb(Ne,Oe-1))}pM(ie,Be)}const ce=ae+W;mM(H,J,te,ie,ae,ce),B=Math.max(K+W,B),b=Math.max(ce,b)};if(vo(k)){const A=Ex(k,h);R(C,j,Ax("default",A))}else{const A=o2(k,C,a,p),$=A.length;for(let H=0;H<$;H++){C=C,j=j;const V=A[H],P=Ex(V,h);for(const J in C)R(C[J],bM(j,J),Ax(J,P),H,$)}}_=x,x+=B}return h.forEach((w,S)=>{for(const k in w){const C=w[k];C.sort(_M);const j=[],B=[],R=[];for(let V=0;V<C.length;V++){const{at:P,value:J,easing:re}=C[V];j.push(J),B.push(gl(0,b,P)),R.push(re||"easeOut")}B[0]!==0&&(B.unshift(0),j.unshift(j[0]),R.unshift(gM)),B[B.length-1]!==1&&(B.push(1),j.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const A=d.get(S);A.keyframes[k]=j;const{type:$,...H}=n;A.transition[k]={...H,duration:b,ease:R,times:B,...i}}}),d}function Ex(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Ax(t,n){return n[t]||(n[t]=[]),n[t]}function xM(t){return Array.isArray(t)?t:[t]}function bM(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const vM=t=>typeof t=="number",wM=t=>t.every(vM);function SM(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Pd(t)&&!h5(t)?new A5(n):new k5(n);i.mount(t),Ac.set(t,i)}function CM(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new t8(n);i.mount(t),Ac.set(t,i)}function kM(t,n){return vo(t)||typeof t=="number"||typeof t=="string"&&!Xp(n)}function i2(t,n,i,a){const c=[];if(kM(t,n))c.push(I5(t,Xp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=o2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?SM:CM;Ac.has(p)||g(p);const _=Ac.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Op(_,{...n,transition:x},{}))}}return c}function jM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=nr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return yM(c,n,i,{spring:Ec}).forEach(({keyframes:d,transition:h},p)=>{a.push(...i2(p,d,h))}),a}function MM(t){return Array.isArray(t)&&t.some(Array.isArray)}function TM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(MM(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=jM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=i2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new YC(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{_l(n.animations,g)})),g}return a}const Dx=TM();var EM=Object.freeze({}),AM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const k=w.slice(0,-7),C=d.get(k);(C==null?void 0:C.type)==="transition"&&(p[w]=S)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:EM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},rn=new AM;function DM(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(rn.registerPanel(c,t,u.current,p.current),()=>rn.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}rn.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>rn.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>rn.subscribe(c,b),()=>rn.getValues(c),()=>rn.getValues(c));return a2(n,x,"")}function a2(t,n,i){var c,u,d,h,p,g,_,x,b,w;const a={};for(const[S,k]of Object.entries(t)){if(S==="_collapsed")continue;const C=i?`${i}.${S}`:S;if(Array.isArray(k)&&k.length<=4&&typeof k[0]=="number")a[S]=(c=n[C])!=null?c:k[0];else if(typeof k=="number"||typeof k=="boolean"||typeof k=="string")a[S]=(u=n[C])!=null?u:k;else if(NM(k)||RM(k))a[S]=(d=n[C])!=null?d:k;else if(BM(k))a[S]=(h=n[C])!=null?h:k;else if(LM(k)){const j=(p=k.default)!=null?p:$M(k.options);a[S]=(g=n[C])!=null?g:j}else OM(k)?a[S]=(x=(_=n[C])!=null?_:k.default)!=null?x:"#000000":zM(k)?a[S]=(w=(b=n[C])!=null?b:k.default)!=null?w:"":typeof k=="object"&&k!==null&&(a[S]=a2(k,n,C))}return a}function Cl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function NM(t){return Cl(t,"spring")}function RM(t){return Cl(t,"easing")}function BM(t){return Cl(t,"action")}function LM(t){return Cl(t,"select")&&"options"in t&&Array.isArray(t.options)}function OM(t){return Cl(t,"color")}function zM(t){return Cl(t,"text")}function $M(t){const n=t[0];return typeof n=="string"?n:n.value}function cp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(cp(n)))}function mc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function pc(t,n,i,a,c){var g,_;const u=rn.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));rn.updateValue(t,n,Sd(p,a))}function IM(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function km(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function r2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=r2(i.children,n);if(a)return a}}return null}var fd=4;function PM(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function HM(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=PM(n);return t.key?`${l2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function UM(t){return t.key?`${l2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function l2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var c2=y.createContext({activePanelId:null,activePath:null});function VM({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=rn.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((g=S.interaction)!=null?g:"scroll")!==p)continue;const k=r2(b.controls,w);if(k&&k.type==="slider")return{panelId:b.id,path:w,control:k,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=k=>{if(dd())return;const C=k.key.toLowerCase();if((C==="arrowleft"||C==="arrowright"||C==="arrowup"||C==="arrowdown")&&a.current.size>0){const A=h("scroll")||h("drag")||h("move");if(A&&A.control.type==="slider"){k.preventDefault();const $=C==="arrowright"||C==="arrowup"?1:-1,H=mc(A.control,A.shortcut);pc(A.panelId,A.path,A.control,H,$);return}}const j=a.current.has(C);a.current.add(C);const B=km(k),R=rn.resolveShortcutTarget(C,B);if(R&&(i({activePanelId:R.panelId,activePath:R.path}),!j&&R.control.type==="toggle")){const A=rn.getValue(R.panelId,R.path);rn.updateValue(R.panelId,R.path,!A)}j||(u.current=null,d.current=0)},g=k=>{const C=k.key.toLowerCase();if(a.current.delete(C),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let j=!1;for(const B of a.current){const R=km(k),A=rn.resolveShortcutTarget(B,R);if(A){i({activePanelId:A.panelId,activePath:A.path}),j=!0;break}}j||i({activePanelId:null,activePath:null})}},_=k=>{var B,R;if(dd())return;const C=km(k);if(a.current.size>0)for(const A of a.current){const $=rn.resolveShortcutTarget(A,C);if(!$)continue;const{panelId:H,path:V,control:P}=$;if(((R=(B=P.shortcut)==null?void 0:B.interaction)!=null?R:"scroll")!=="scroll"||P.type!=="slider")continue;k.preventDefault();const re=mc(P,P.shortcut),ie=k.deltaY>0?-1:1;pc(H,V,P,re,ie);return}const j=rn.resolveScrollOnlyTargets();for(const{panelId:A,path:$,control:H,shortcut:V}of j){if(H.type!=="slider")continue;k.preventDefault();const P=mc(H,V),J=k.deltaY>0?-1:1;pc(A,$,H,P,J);return}},x=k=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=k.clientX,d.current=0,k.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=k=>{if(dd()||a.current.size===0)return;if(c.current){const j=h("drag");if(j&&u.current!==null){const B=k.clientX-u.current;u.current=k.clientX,d.current+=B;const R=mc(j.control,j.shortcut),A=Math.trunc(d.current/fd);A!==0&&(d.current-=A*fd,pc(j.panelId,j.path,j.control,R,A))}return}const C=h("move");if(C){if(u.current===null){u.current=k.clientX;return}const j=k.clientX-u.current;u.current=k.clientX,d.current+=j;const B=mc(C.control,C.shortcut),R=Math.trunc(d.current/fd);R!==0&&(d.current-=R*fd,pc(C.panelId,C.path,C.control,B,R))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(c2.Provider,{value:n,children:t})}var qp="M6 9.5L12 15.5L18 9.5",YM="M5 12.75L10 19L19 5",jm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},WM=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],FM=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Nx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function zd({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,w]=y.useState(void 0),[S,k]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const B=()=>k(window.innerHeight);return window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[a]),y.useEffect(()=>{const B=x.current;if(!B)return;const R=new ResizeObserver(()=>{if(h){const A=B.offsetHeight;w($=>$===A?$:A)}});return R.observe(B),()=>R.disconnect()},[h]);const C=()=>{if(c&&a)return;const B=!h;p(B),_(!B),u==null||u(B)},j=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:C,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Nx.path,fill:"currentColor"}),Nx.circles.map((B,R)=>l.jsx("circle",{cx:B.cx,cy:B.cy,r:B.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},R))]}),!a&&l.jsx(hi.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:qp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:B=>B.stopPropagation(),children:d})]}),l.jsx(Yd,{initial:!1,children:h&&l.jsx(hi.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:j});const B=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(hi.div,{className:"dialkit-panel-inner",style:B,onClick:h?void 0:C,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:j})}return j}var XM=3,qM=32,GM=200,KM=8;function Go({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var ot;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,k]=y.useState(!1),[C,j]=y.useState(!1),[B,R]=y.useState(!1),[A,$]=y.useState(!1),[H,V]=y.useState(!1),[P,J]=y.useState(!1),[re,ie]=y.useState(""),Ce=y.useRef(null),Be=y.useRef(null),Z=y.useRef(!0),ue=y.useRef(null),z=y.useRef(null),te=y.useRef(1),W=(n-a)/(c-a)*100,K=S||B,pe=lp(W),N=ud(pe,I=>`${I}%`),ae=ud(pe,I=>`max(5px, calc(${I}% - 9px))`),oe=lp(0),ce=ud(oe,I=>`calc(100% + ${Math.abs(I)}px)`),Ee=ud(oe,I=>I<0?I:0);y.useEffect(()=>{!S&&!ue.current&&pe.jump(W)},[W,S,pe]);const $e=y.useCallback(I=>{const ne=z.current;if(!ne)return n;const be=(I-ne.left)/te.current,ye=g.current?g.current.offsetWidth:ne.width,He=Math.max(0,Math.min(1,be/ye)),Re=a+He*(c-a);return Math.max(a,Math.min(c,Re))},[a,c,n]),Ne=y.useCallback(I=>(I-a)/(c-a)*100,[a,c]),ft=y.useCallback((I,ne)=>{const de=z.current;if(!de)return 0;const be=ne<0?de.left-I:I-de.right,ye=Math.max(0,be-qM);return ne*KM*Math.sqrt(Math.min(ye/GM,1))},[]),Oe=y.useCallback(I=>{if(!P&&(I.preventDefault(),I.target.setPointerCapture(I.pointerId),Be.current={x:I.clientX,y:I.clientY},Z.current=!0,k(!0),g.current)){z.current=g.current.getBoundingClientRect();const ne=g.current.offsetWidth;te.current=z.current.width/ne}},[P]),at=y.useCallback(I=>{if(!S||!Be.current)return;const ne=I.clientX-Be.current.x,de=I.clientY-Be.current.y,be=Math.sqrt(ne*ne+de*de);if(Z.current&&be>XM&&(Z.current=!1,j(!0)),!Z.current){const ye=z.current;ye&&(I.clientX<ye.left?oe.jump(ft(I.clientX,-1)):I.clientX>ye.right?oe.jump(ft(I.clientX,1)):oe.jump(0));const He=$e(I.clientX),Re=Ne(He);ue.current&&(ue.current.stop(),ue.current=null),pe.jump(Re),i(Sd(He,u))}},[S,$e,Ne,i,pe,oe,ft]),tt=y.useCallback(I=>{if(S){if(Z.current){const ne=$e(I.clientX),be=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((ne-a)/u)*u)):IM(ne,a,c),ye=Ne(be);ue.current&&ue.current.stop(),ue.current=Dx(pe,ye,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{ue.current=null}}),i(Sd(be,u))}oe.get()!==0&&Dx(oe,0,{type:"spring",visualDuration:.35,bounce:.15}),k(!1),j(!1),Be.current=null}},[S,$e,Ne,i,a,c,pe,oe]);y.useEffect(()=>(A&&!P&&!H?Ce.current=setTimeout(()=>{V(!0)},800):!A&&!P&&(Ce.current&&(clearTimeout(Ce.current),Ce.current=null),V(!1)),()=>{Ce.current&&clearTimeout(Ce.current)}),[A,P,H]),y.useEffect(()=>{P&&x.current&&(x.current.focus(),x.current.select())},[P]);const St=I=>{ie(I.target.value)},Qe=()=>{const I=parseFloat(re);if(!isNaN(I)){const ne=Math.max(a,Math.min(c,I));i(Sd(ne,u))}J(!1),$(!1),V(!1)},Dt=I=>{H&&(I.stopPropagation(),I.preventDefault(),J(!0),ie(n.toFixed(cp(u))))},ln=I=>{I.key==="Enter"?Qe():I.key==="Escape"&&(J(!1),$(!1))},Ht=()=>{Qe()},en=n.toFixed(cp(u)),q=8,Ae=10,Fe=10;let Je=30,lt=78;const st=(ot=g.current)==null?void 0:ot.offsetWidth;st&&st>0&&(b.current&&(Je=(Ae+b.current.offsetWidth+q)/st*100),w.current&&(lt=(st-Fe-w.current.offsetWidth-q)/st*100));const bt=W<Je||W>lt,ct=K?bt?.1:C?.9:.5:0,rt=(c-a)/u,It=rt<=10?Array.from({length:rt-1},(I,ne)=>{const de=(ne+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${de}%`}},ne)}):Array.from({length:9},(I,ne)=>{const de=(ne+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${de}%`}},ne)});return l.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:l.jsxs(hi.div,{ref:_,className:`dialkit-slider ${K?"dialkit-slider-active":""}`,onPointerDown:Oe,onPointerMove:at,onPointerUp:tt,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),style:{width:ce,x:Ee},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:It}),l.jsx(hi.div,{className:"dialkit-slider-fill",style:{width:N}}),l.jsx(hi.div,{className:"dialkit-slider-handle",style:{left:ae,y:"-50%"},animate:{opacity:ct,scaleX:K?1:.25,scaleY:K&&bt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:HM(h)})]}),P?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:re,onChange:St,onKeyDown:ln,onBlur:Ht,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${H?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),onClick:Dt,onMouseDown:I=>H&&I.stopPropagation(),style:{cursor:H?"text":"default"},children:en})]})})}function Gp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return l.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function QM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:UM(a)})]}),l.jsx(Gp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function ZM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function u2({spring:t,isSimpleMode:n}){var k,C,j,B,R;let c,u,d;if(n){const A=(k=t.visualDuration)!=null?k:.3,$=(C=t.bounce)!=null?C:.2;d=1,c=2*Math.PI/A,c=Math.pow(c,2),u=2*(1-$)*Math.sqrt(c*d)}else c=(j=t.stiffness)!=null?j:400,u=(B=t.damping)!=null?B:17,d=(R=t.mass)!=null?R:1;const h=2,p=ZM(c,u,d,h),g=p.map(([,A])=>A),_=Math.min(...g),b=Math.max(...g)-_,w=p.map(([A,$],H)=>{const V=A/h*256,J=140-(($-_)/(b||1)*140*.6+140*.2);return`${H===0?"M":"L"} ${V} ${J}`}).join(" "),S=[];for(let A=1;A<4;A++){const $=64*A,H=140/4*A;S.push(l.jsx("line",{x1:$,y1:0,x2:$,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${A}`),l.jsx("line",{x1:0,y1:H,x2:256,y2:H,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${A}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function JM({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=y.useSyncExternalStore(k=>rn.subscribe(t,k),()=>rn.getSpringMode(t,n),()=>rn.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=k=>{rn.updateSpringMode(t,n,k),c(k==="simple"?h.current.simple:h.current.advanced)},g=(k,C)=>{if(d){const{stiffness:j,damping:B,mass:R,...A}=a;c({...A,[k]:C})}else{const{visualDuration:j,bounce:B,...R}=a;c({...R,[k]:C})}};return l.jsx(zd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(u2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Gp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:k=>g("visualDuration",k),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Go,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:k=>g("bounce",k),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:k=>g("stiffness",k),min:1,max:1e3,step:10}),l.jsx(Go,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:k=>g("damping",k),min:1,max:100,step:1}),l.jsx(Go,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:k=>g("mass",k),min:.1,max:10,step:.1})]})]})})}function e7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function t7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,k,C,j,B;const u=y.useSyncExternalStore(R=>rn.subscribe(t,R),()=>rn.getTransitionMode(t,n),()=>rn.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=R=>{rn.updateTransitionMode(t,n,R),c(R==="easing"?p.current.easing:R==="simple"?p.current.simple:p.current.advanced)},b=(R,A)=>{if(h){const{stiffness:$,damping:H,mass:V,...P}=g;c({...P,[R]:A})}else{const{visualDuration:$,bounce:H,...V}=g;c({...V,[R]:A})}},w=(R,A)=>{const $=[..._.ease];$[R]=A,c({..._,ease:$})};return l.jsx(zd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(e7,{easing:_}):l.jsx(u2,{spring:g,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Gp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"x1",value:_.ease[0],onChange:R=>w(0,R),min:0,max:1,step:.01}),l.jsx(Go,{label:"y1",value:_.ease[1],onChange:R=>w(1,R),min:-1,max:2,step:.01}),l.jsx(Go,{label:"x2",value:_.ease[2],onChange:R=>w(2,R),min:0,max:1,step:.01}),l.jsx(Go,{label:"y2",value:_.ease[3],onChange:R=>w(3,R),min:-1,max:2,step:.01}),l.jsx(Go,{label:"Duration",value:_.duration,onChange:R=>c({..._,duration:R}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(s7,{ease:_.ease,onChange:R=>c({..._,ease:R})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"Duration",value:(S=g.visualDuration)!=null?S:.3,onChange:R=>b("visualDuration",R),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Go,{label:"Bounce",value:(k=g.bounce)!=null?k:.2,onChange:R=>b("bounce",R),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Go,{label:"Stiffness",value:(C=g.stiffness)!=null?C:400,onChange:R=>b("stiffness",R),min:1,max:1e3,step:10}),l.jsx(Go,{label:"Damping",value:(j=g.damping)!=null?j:17,onChange:R=>b("damping",R),min:1,max:100,step:1}),l.jsx(Go,{label:"Mass",value:(B=g.mass)!=null?B:1,onChange:R=>b("mass",R),min:.1,max:10,step:.1})]})]})})}function Rx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function n7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function s7({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(Rx(t)),a(!0)},h=()=>{const g=n7(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Rx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function o7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function i7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function a7(t){return t.map(n=>typeof n=="string"?{value:n,label:i7(n)}:n)}function r7({label:t,value:n,options:i,onChange:a}){var k;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=a7(i),w=b.find(C=>C.value===n),S=y.useCallback(()=>{const C=d.current;if(!C)return;const j=C.getBoundingClientRect(),B=8+b.length*36,R=window.innerHeight-j.bottom-4,A=R<B&&j.top>R;x({top:A?j.top-4:j.bottom+4,left:j.left,width:j.width,above:A})},[b.length]);return y.useEffect(()=>{var j;const C=(j=d.current)==null?void 0:j.closest(".dialkit-root");g(C!=null?C:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const C=j=>{const B=j.target;d.current&&!d.current.contains(B)&&h.current&&!h.current.contains(B)&&u(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(k=w==null?void 0:w.label)!=null?k:n}),l.jsx(hi.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]})]}),p&&Rc.createPortal(l.jsx(Yd,{children:c&&_&&l.jsx(hi.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(C=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(C.value===n),onClick:()=>{a(C.value),u(!1)},children:C.label},C.value))})}),p)]})}var l7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function c7({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),l7.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?u7(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function u7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function d7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(j=>j.id===i),b=y.useCallback(()=>{var B;if(!_)return;const j=(B=d.current)==null?void 0:B.getBoundingClientRect();j&&g({top:j.bottom+4,left:j.left,width:j.width}),u(!0)},[_]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const j=B=>{var A,$;const R=B.target;(A=d.current)!=null&&A.contains(R)||($=h.current)!=null&&$.contains(R)||w()};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[c,w]);const k=j=>{j?rn.loadPreset(t,j):rn.clearActivePreset(t),w()},C=(j,B)=>{j.stopPropagation(),rn.deletePreset(t,B)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(hi.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]}),Rc.createPortal(l.jsx(Yd,{children:c&&l.jsxs(hi.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>k(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(j=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(j.id===i),onClick:()=>k(j.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:j.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:B=>C(B,j.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:FM.map((B,R)=>l.jsx("path",{d:B},R))})})]},j.id))]})}),document.body)]})}function f7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(c2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(C=>rn.subscribe(t.id,C),()=>rn.getValues(t.id),()=>rn.getValues(t.id)),g=rn.getPresets(t.id),_=rn.getActivePresetId(t.id),x=()=>{const C=g.length+2;rn.savePreset(t.id,`Version ${C}`)},b=()=>{const C=JSON.stringify(p,null,2),j=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${C}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(j),c(!0),setTimeout(()=>c(!1),1500)},w=C=>{var B,R,A;const j=p[C.path];switch(C.type){case"slider":return l.jsx(Go,{label:C.label,value:j,onChange:$=>rn.updateValue(t.id,C.path,$),min:C.min,max:C.max,step:C.step,shortcut:C.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===C.path},C.path);case"toggle":return l.jsx(QM,{label:C.label,checked:j,onChange:$=>rn.updateValue(t.id,C.path,$),shortcut:C.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===C.path},C.path);case"spring":return l.jsx(JM,{panelId:t.id,path:C.path,label:C.label,spring:j,onChange:$=>rn.updateValue(t.id,C.path,$)},C.path);case"transition":return l.jsx(t7,{panelId:t.id,path:C.path,label:C.label,value:j,onChange:$=>rn.updateValue(t.id,C.path,$)},C.path);case"folder":return l.jsx(zd,{title:C.label,defaultOpen:(B=C.defaultOpen)!=null?B:!0,children:(R=C.children)==null?void 0:R.map(w)},C.path);case"text":return l.jsx(o7,{label:C.label,value:j,onChange:$=>rn.updateValue(t.id,C.path,$),placeholder:C.placeholder},C.path);case"select":return l.jsx(r7,{label:C.label,value:j,options:(A=C.options)!=null?A:[],onChange:$=>rn.updateValue(t.id,C.path,$)},C.path);case"color":return l.jsx(c7,{label:C.label,value:j,onChange:$=>rn.updateValue(t.id,C.path,$)},C.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>rn.triggerAction(t.id,C.path),children:C.label},C.path);default:return null}},S=()=>t.controls.map(w),k=l.jsxs(l.Fragment,{children:[l.jsx(hi.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:WM.map((C,j)=>l.jsx("path",{d:C},j))})}),l.jsx(d7,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),l.jsx(hi.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Yd,{initial:!1,mode:"wait",children:a?l.jsx(hi.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:YM})},"check"):l.jsxs(hi.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:jm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:jm.sparkle,fill:"currentColor"}),l.jsx("path",{d:jm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(zd,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:k,children:S()})})}var h7=typeof process<"u"?!1:!(typeof import.meta<"u");function m7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=h7}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),k=y.useRef(null),C=y.useRef(!1),j=y.useRef(null),B=y.useRef(!1);y.useEffect(()=>(p(!0),d(rn.getPanels()),rn.subscribeGlobal(()=>{d(rn.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const P=new MutationObserver(()=>{var ie;const J=(ie=_.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!J)return;if(J.getAttribute("data-collapsed")==="true")k.current&&b(k.current);else{if(x){k.current=x;const Ce=x.x+21,Be=window.innerWidth/2;S(Ce<Be?"top-left":"top-right")}else S(t);b(null)}});return P.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>P.disconnect()},[g,x,t]);const R=y.useCallback(P=>{var ie;const J=(ie=_.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!J||J.getAttribute("data-collapsed")!=="true")return;const re=_.current.getBoundingClientRect();j.current={pointerX:P.clientX,pointerY:P.clientY,elX:re.left,elY:re.top},B.current=!1,C.current=!0,P.target.setPointerCapture(P.pointerId)},[]),A=y.useCallback(P=>{if(!C.current||!j.current)return;const J=P.clientX-j.current.pointerX,re=P.clientY-j.current.pointerY;!B.current&&Math.abs(J)+Math.abs(re)<4||(B.current=!0,b({x:j.current.elX+J,y:j.current.elY+re}))},[]),$=y.useCallback(P=>{var J;if(C.current&&(C.current=!1,j.current=null,B.current)){P.stopPropagation();const re=(J=_.current)==null?void 0:J.querySelector(".dialkit-panel-inner");if(re){const ie=Ce=>{Ce.stopPropagation()};re.addEventListener("click",ie,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const H=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,V=l.jsx(VM,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:w,"data-mode":i,style:H,onPointerDown:g?void 0:R,onPointerMove:g?void 0:A,onPointerUp:g?void 0:$,children:u.map(P=>l.jsx(f7,{panel:P,defaultOpen:g||n,inline:g},P.id))})})});return g?V:Rc.createPortal(V,document.body)}const p7=()=>(DM("Git Visualizer",{preview:[1,0,1]}),null),_7=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(p7,{}),l.jsx(m7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(g3,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});zv.createRoot(document.getElementById("root")).render(l.jsx(_7,{children:l.jsx(eS,{})}));

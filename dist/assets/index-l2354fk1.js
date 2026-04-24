(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Mx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lh={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function bv(){if(J0)return Jl;J0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return Jl.Fragment=n,Jl.jsx=i,Jl.jsxs=i,Jl}var ey;function vv(){return ey||(ey=1,Lh.exports=bv()),Lh.exports}var l=vv(),Oh={exports:{}},ec={},zh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function wv(){return ty||(ty=1,(function(t){function n(L,ne){var U=L.length;L.push(ne);e:for(;0<U;){var q=U-1>>>1,ge=L[q];if(0<c(ge,ne))L[q]=ne,L[U]=ge,U=q;else break e}}function i(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var ne=L[0],U=L.pop();if(U!==ne){L[0]=U;e:for(var q=0,ge=L.length,D=ge>>>1;q<D;){var ce=2*(q+1)-1,Z=L[ce],he=ce+1,Ee=L[he];if(0>c(Z,U))he<ge&&0>c(Ee,Z)?(L[q]=Ee,L[he]=U,q=he):(L[q]=Z,L[ce]=U,q=ce);else if(he<ge&&0>c(Ee,U))L[q]=Ee,L[he]=U,q=he;else break e}}return ne}function c(L,ne){var U=L.sortIndex-ne.sortIndex;return U!==0?U:L.id-ne.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,w=!1,S=!1,j=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function E(L){for(var ne=i(g);ne!==null;){if(ne.callback===null)a(g);else if(ne.startTime<=L)a(g),ne.sortIndex=ne.expirationTime,n(p,ne);else break;ne=i(g)}}function $(L){if(j=!1,E(L),!S)if(i(p)!==null)S=!0,F||(F=!0,Se());else{var ne=i(g);ne!==null&&fe($,ne.startTime-L)}}var F=!1,W=-1,H=5,K=-1;function ae(){return k?!0:!(t.unstable_now()-K<H)}function re(){if(k=!1,F){var L=t.unstable_now();K=L;var ne=!0;try{e:{S=!1,j&&(j=!1,z(W),W=-1),w=!0;var U=b;try{t:{for(E(L),x=i(p);x!==null&&!(x.expirationTime>L&&ae());){var q=x.callback;if(typeof q=="function"){x.callback=null,b=x.priorityLevel;var ge=q(x.expirationTime<=L);if(L=t.unstable_now(),typeof ge=="function"){x.callback=ge,E(L),ne=!0;break t}x===i(p)&&a(p),E(L)}else a(p);x=i(p)}if(x!==null)ne=!0;else{var D=i(g);D!==null&&fe($,D.startTime-L),ne=!1}}break e}finally{x=null,b=U,w=!1}ne=void 0}}finally{ne?Se():F=!1}}}var Se;if(typeof N=="function")Se=function(){N(re)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,ee=Ne.port2;Ne.port1.onmessage=re,Se=function(){ee.postMessage(null)}}else Se=function(){M(re,0)};function fe(L,ne){W=M(function(){L(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(L){switch(b){case 1:case 2:case 3:var ne=3;break;default:ne=b}var U=b;b=ne;try{return L()}finally{b=U}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(L,ne){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=b;b=L;try{return ne()}finally{b=U}},t.unstable_scheduleCallback=function(L,ne,U){var q=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?q+U:q):U=q,L){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=U+ge,L={id:_++,callback:ne,priorityLevel:L,startTime:U,expirationTime:ge,sortIndex:-1},U>q?(L.sortIndex=U,n(g,L),i(p)===null&&L===i(g)&&(j?(z(W),W=-1):j=!0,fe($,U-q))):(L.sortIndex=ge,n(p,L),S||w||(S=!0,F||(F=!0,Se()))),L},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(L){var ne=b;return function(){var U=b;b=ne;try{return L.apply(this,arguments)}finally{b=U}}}})($h)),$h}var ny;function Sv(){return ny||(ny=1,zh.exports=wv()),zh.exports}var Ih={exports:{}},sn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function Cv(){if(sy)return sn;sy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function M(D,ce,Z){this.props=D,this.context=ce,this.refs=k,this.updater=Z||S}M.prototype.isReactComponent={},M.prototype.setState=function(D,ce){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ce,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function z(){}z.prototype=M.prototype;function N(D,ce,Z){this.props=D,this.context=ce,this.refs=k,this.updater=Z||S}var E=N.prototype=new z;E.constructor=N,j(E,M.prototype),E.isPureReactComponent=!0;var $=Array.isArray;function F(){}var W={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function K(D,ce,Z){var he=Z.ref;return{$$typeof:t,type:D,key:ce,ref:he!==void 0?he:null,props:Z}}function ae(D,ce){return K(D.type,ce,D.props)}function re(D){return typeof D=="object"&&D!==null&&D.$$typeof===t}function Se(D){var ce={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Z){return ce[Z]})}var Ne=/\/+/g;function ee(D,ce){return typeof D=="object"&&D!==null&&D.key!=null?Se(""+D.key):ce.toString(36)}function fe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(F,F):(D.status="pending",D.then(function(ce){D.status==="pending"&&(D.status="fulfilled",D.value=ce)},function(ce){D.status==="pending"&&(D.status="rejected",D.reason=ce)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function L(D,ce,Z,he,Ee){var Ue=typeof D;(Ue==="undefined"||Ue==="boolean")&&(D=null);var Me=!1;if(D===null)Me=!0;else switch(Ue){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(D.$$typeof){case t:case n:Me=!0;break;case _:return Me=D._init,L(Me(D._payload),ce,Z,he,Ee)}}if(Me)return Ee=Ee(D),Me=he===""?"."+ee(D,0):he,$(Ee)?(Z="",Me!=null&&(Z=Me.replace(Ne,"$&/")+"/"),L(Ee,ce,Z,"",function(ze){return ze})):Ee!=null&&(re(Ee)&&(Ee=ae(Ee,Z+(Ee.key==null||D&&D.key===Ee.key?"":(""+Ee.key).replace(Ne,"$&/")+"/")+Me)),ce.push(Ee)),1;Me=0;var mt=he===""?".":he+":";if($(D))for(var et=0;et<D.length;et++)he=D[et],Ue=mt+ee(he,et),Me+=L(he,ce,Z,Ue,Ee);else if(et=w(D),typeof et=="function")for(D=et.call(D),et=0;!(he=D.next()).done;)he=he.value,Ue=mt+ee(he,et++),Me+=L(he,ce,Z,Ue,Ee);else if(Ue==="object"){if(typeof D.then=="function")return L(fe(D),ce,Z,he,Ee);throw ce=String(D),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.")}return Me}function ne(D,ce,Z){if(D==null)return D;var he=[],Ee=0;return L(D,he,"","",function(Ue){return ce.call(Z,Ue,Ee++)}),he}function U(D){if(D._status===-1){var ce=D._result;ce=ce(),ce.then(function(Z){(D._status===0||D._status===-1)&&(D._status=1,D._result=Z)},function(Z){(D._status===0||D._status===-1)&&(D._status=2,D._result=Z)}),D._status===-1&&(D._status=0,D._result=ce)}if(D._status===1)return D._result.default;throw D._result}var q=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ce=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ce))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},ge={map:ne,forEach:function(D,ce,Z){ne(D,function(){ce.apply(this,arguments)},Z)},count:function(D){var ce=0;return ne(D,function(){ce++}),ce},toArray:function(D){return ne(D,function(ce){return ce})||[]},only:function(D){if(!re(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return sn.Activity=x,sn.Children=ge,sn.Component=M,sn.Fragment=i,sn.Profiler=c,sn.PureComponent=N,sn.StrictMode=a,sn.Suspense=p,sn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,sn.__COMPILER_RUNTIME={__proto__:null,c:function(D){return W.H.useMemoCache(D)}},sn.cache=function(D){return function(){return D.apply(null,arguments)}},sn.cacheSignal=function(){return null},sn.cloneElement=function(D,ce,Z){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var he=j({},D.props),Ee=D.key;if(ce!=null)for(Ue in ce.key!==void 0&&(Ee=""+ce.key),ce)!H.call(ce,Ue)||Ue==="key"||Ue==="__self"||Ue==="__source"||Ue==="ref"&&ce.ref===void 0||(he[Ue]=ce[Ue]);var Ue=arguments.length-2;if(Ue===1)he.children=Z;else if(1<Ue){for(var Me=Array(Ue),mt=0;mt<Ue;mt++)Me[mt]=arguments[mt+2];he.children=Me}return K(D.type,Ee,he)},sn.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},sn.createElement=function(D,ce,Z){var he,Ee={},Ue=null;if(ce!=null)for(he in ce.key!==void 0&&(Ue=""+ce.key),ce)H.call(ce,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(Ee[he]=ce[he]);var Me=arguments.length-2;if(Me===1)Ee.children=Z;else if(1<Me){for(var mt=Array(Me),et=0;et<Me;et++)mt[et]=arguments[et+2];Ee.children=mt}if(D&&D.defaultProps)for(he in Me=D.defaultProps,Me)Ee[he]===void 0&&(Ee[he]=Me[he]);return K(D,Ue,Ee)},sn.createRef=function(){return{current:null}},sn.forwardRef=function(D){return{$$typeof:h,render:D}},sn.isValidElement=re,sn.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:U}},sn.memo=function(D,ce){return{$$typeof:g,type:D,compare:ce===void 0?null:ce}},sn.startTransition=function(D){var ce=W.T,Z={};W.T=Z;try{var he=D(),Ee=W.S;Ee!==null&&Ee(Z,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(F,q)}catch(Ue){q(Ue)}finally{ce!==null&&Z.types!==null&&(ce.types=Z.types),W.T=ce}},sn.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},sn.use=function(D){return W.H.use(D)},sn.useActionState=function(D,ce,Z){return W.H.useActionState(D,ce,Z)},sn.useCallback=function(D,ce){return W.H.useCallback(D,ce)},sn.useContext=function(D){return W.H.useContext(D)},sn.useDebugValue=function(){},sn.useDeferredValue=function(D,ce){return W.H.useDeferredValue(D,ce)},sn.useEffect=function(D,ce){return W.H.useEffect(D,ce)},sn.useEffectEvent=function(D){return W.H.useEffectEvent(D)},sn.useId=function(){return W.H.useId()},sn.useImperativeHandle=function(D,ce,Z){return W.H.useImperativeHandle(D,ce,Z)},sn.useInsertionEffect=function(D,ce){return W.H.useInsertionEffect(D,ce)},sn.useLayoutEffect=function(D,ce){return W.H.useLayoutEffect(D,ce)},sn.useMemo=function(D,ce){return W.H.useMemo(D,ce)},sn.useOptimistic=function(D,ce){return W.H.useOptimistic(D,ce)},sn.useReducer=function(D,ce,Z){return W.H.useReducer(D,ce,Z)},sn.useRef=function(D){return W.H.useRef(D)},sn.useState=function(D){return W.H.useState(D)},sn.useSyncExternalStore=function(D,ce,Z){return W.H.useSyncExternalStore(D,ce,Z)},sn.useTransition=function(){return W.H.useTransition()},sn.version="19.2.4",sn}var oy;function cp(){return oy||(oy=1,Ih.exports=Cv()),Ih.exports}var Ph={exports:{}},No={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function kv(){if(iy)return No;iy=1;var t=cp();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return No.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,No.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},No.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},No.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},No.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},No.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},No.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},No.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},No.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},No.requestFormReset=function(p){a.d.r(p)},No.unstable_batchedUpdates=function(p,g){return p(g)},No.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},No.useFormStatus=function(){return d.H.useHostTransitionStatus()},No.version="19.2.4",No}var ay;function Tx(){if(ay)return Ph.exports;ay=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Ph.exports=kv(),Ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function jv(){if(ry)return ec;ry=1;var t=Sv(),n=cp(),i=Tx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,T=f.child;T;){if(T===o){v=!0,o=f,r=m;break}if(T===r){v=!0,r=f,o=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===o){v=!0,o=m,r=f;break}if(T===r){v=!0,r=m,o=f;break}T=T.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function Se(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case $:return"Suspense";case F:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case N:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case E:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return s=e.displayName||null,s!==null?s:ee(e.type)||"Memo";case H:s=e._payload,e=e._init;try{return ee(e(s))}catch{}}return null}var fe=Array.isArray,L=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},q=[],ge=-1;function D(e){return{current:e}}function ce(e){0>ge||(e.current=q[ge],q[ge]=null,ge--)}function Z(e,s){ge++,q[ge]=e.current,e.current=s}var he=D(null),Ee=D(null),Ue=D(null),Me=D(null);function mt(e,s){switch(Z(Ue,s),Z(Ee,e),Z(he,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?w0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=w0(s),e=S0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ce(he),Z(he,e)}function et(){ce(he),ce(Ee),ce(Ue)}function ze(e){e.memoizedState!==null&&Z(Me,e);var s=he.current,o=S0(s,e.type);s!==o&&(Z(Ee,e),Z(he,o))}function ct(e){Ee.current===e&&(ce(he),ce(Ee)),Me.current===e&&(ce(Me),Gl._currentValue=U)}var it,Mt;function Ct(e){if(it===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);it=s&&s[1]||"",Mt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+it+e+Mt}var zt=!1;function Zt(e,s){if(!e||zt)return"";zt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(be){var ye=be}Reflect.construct(e,[],Re)}else{try{Re.call()}catch(be){ye=be}e.call(Re.prototype)}}else{try{throw Error()}catch(be){ye=be}(Re=e())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(be){if(be&&ye&&typeof be.stack=="string")return[be.stack,ye.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],T=m[1];if(v&&T){var Y=v.split(`
`),pe=T.split(`
`);for(f=r=0;r<Y.length&&!Y[r].includes("DetermineComponentFrameRoot");)r++;for(;f<pe.length&&!pe[f].includes("DetermineComponentFrameRoot");)f++;if(r===Y.length||f===pe.length)for(r=Y.length-1,f=pe.length-1;1<=r&&0<=f&&Y[r]!==pe[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Y[r]!==pe[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Y[r]!==pe[f]){var Ce=`
`+Y[r].replace(" at new "," at ");return e.displayName&&Ce.includes("<anonymous>")&&(Ce=Ce.replace("<anonymous>",e.displayName)),Ce}while(1<=r&&0<=f);break}}}finally{zt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Ct(o):""}function Oe(e,s){switch(e.tag){case 26:case 27:case 5:return Ct(e.type);case 16:return Ct("Lazy");case 13:return e.child!==s&&s!==null?Ct("Suspense Fallback"):Ct("Suspense");case 19:return Ct("SuspenseList");case 0:case 15:return Zt(e.type,!1);case 11:return Zt(e.type.render,!1);case 1:return Zt(e.type,!0);case 31:return Ct("Activity");default:return""}}function ie(e){try{var s="",o=null;do s+=Oe(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var He=Object.prototype.hasOwnProperty,Ze=t.unstable_scheduleCallback,Ie=t.unstable_cancelCallback,ht=t.unstable_shouldYield,ut=t.unstable_requestPaint,dt=t.unstable_now,Je=t.unstable_getCurrentPriorityLevel,rt=t.unstable_ImmediatePriority,Vt=t.unstable_UserBlockingPriority,tt=t.unstable_NormalPriority,P=t.unstable_LowPriority,te=t.unstable_IdlePriority,Q=t.log,ve=t.unstable_setDisableYieldValue,Ye=null,Xe=null;function Te(e){if(typeof Q=="function"&&ve(e),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(Ye,e)}catch{}}var bt=Math.clz32?Math.clz32:pt,Ve=Math.log,Dt=Math.LN2;function pt(e){return e>>>=0,e===0?32:31-(Ve(e)/Dt|0)|0}var We=256,vt=262144,Pt=4194304;function Kt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~m,r!==0?f=Kt(r):(v&=T,v!==0?f=Kt(v):o||(o=T&~e,o!==0&&(f=Kt(o))))):(T=r&~m,T!==0?f=Kt(T):v!==0?f=Kt(v):o||(o=r&~e,o!==0&&(f=Kt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function yt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function _t(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $t(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function cn(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function xt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var T=e.entanglements,Y=e.expirationTimes,pe=e.hiddenUpdates;for(o=v&~o;0<o;){var Ce=31-bt(o),Re=1<<Ce;T[Ce]=0,Y[Ce]=-1;var ye=pe[Ce];if(ye!==null)for(pe[Ce]=null,Ce=0;Ce<ye.length;Ce++){var be=ye[Ce];be!==null&&(be.lane&=-536870913)}o&=~Re}r!==0&&On(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function On(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-bt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function is(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-bt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function xn(e,s){var o=s&-s;return o=(o&42)!==0?1:io(o),(o&(e.suspendedLanes|s))!==0?0:o}function io(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function as(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ss(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:F0(e.type))}function Qt(e,s){var o=ne.p;try{return ne.p=e,s()}finally{ne.p=o}}var Tn=Math.random().toString(36).slice(2),tn="__reactFiber$"+Tn,bn="__reactProps$"+Tn,nt="__reactContainer$"+Tn,En="__reactEvents$"+Tn,ko="__reactListeners$"+Tn,ao="__reactHandles$"+Tn,$n="__reactResources$"+Tn,Rs="__reactMarker$"+Tn;function ro(e){delete e[tn],delete e[bn],delete e[En],delete e[ko],delete e[ao]}function lo(e){var s=e[tn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[nt]||o[tn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=A0(e);e!==null;){if(o=e[tn])return o;e=A0(e)}return s}e=o,o=e.parentNode}return null}function bs(e){if(e=e[tn]||e[nt]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function gs(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function vs(e){var s=e[$n];return s||(s=e[$n]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function an(e){e[Rs]=!0}var ii=new Set,Bo={};function Js(e,s){qn(e,s),qn(e+"Capture",s)}function qn(e,s){for(Bo[e]=s,e=0;e<s.length;e++)ii.add(s[e])}var co=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lo={},Oo={};function qo(e){return He.call(Oo,e)?!0:He.call(Lo,e)?!1:co.test(e)?Oo[e]=!0:(Lo[e]=!0,!1)}function po(e,s,o){if(qo(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function ws(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Bs(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _i(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function rs(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function ai(e){if(!e._valueTracker){var s=_i(e)?"checked":"value";e._valueTracker=rs(e,s,""+e[s])}}function Vs(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=_i(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jo=/[\n"\\]/g;function Ss(e){return e.replace(jo,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Ys(e,s,o,r,f,m,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+kn(s)):e.value!==""+kn(s)&&(e.value=""+kn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?_o(e,v,kn(s)):o!=null?_o(e,v,kn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+kn(T):e.removeAttribute("name")}function vn(e,s,o,r,f,m,v,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){ai(e);return}o=o!=null?""+kn(o):"",s=s!=null?""+kn(s):o,T||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),ai(e)}function _o(e,s,o){s==="number"&&zo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function ls(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+kn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function Gn(e,s,o){if(s!=null&&(s=""+kn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+kn(o):""}function gi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(fe(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=kn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),ai(e)}function Mo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Go=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Go.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Di(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&qt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&qt(e,m,s[m])}function Ls(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ko=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$o=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(e){return $o.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Os(){}var To=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jn=null,uo=null;function Kn(e){var s=bs(e);if(s&&(e=s.stateNode)){var o=e[bn]||null;e:switch(e=s.stateNode,s.type){case"input":if(Ys(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ss(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[bn]||null;if(!f)throw Error(a(90));Ys(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&Vs(r)}break e;case"textarea":Gn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ls(e,!!o.multiple,s,!1)}}}var ys=!1;function Qn(e,s,o){if(ys)return e(s,o);ys=!0;try{var r=e(s);return r}finally{if(ys=!1,(jn!==null||uo!==null)&&(xu(),jn&&(s=jn,e=uo,uo=jn=null,Kn(s),e)))for(s=0;s<e.length;s++)Kn(e[s])}}function nn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[bn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Ws=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fs=!1;if(Ws)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Fs=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Fs=!1}var Zn=null,Eo=null,Ms=null;function go(){if(Ms)return Ms;var e,s=Eo,o=s.length,r,f="value"in Zn?Zn.value:Zn.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Ms=f.slice(e,1<r?1-r:void 0)}function Ts(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Es(){return!0}function fo(){return!1}function Rn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(o=e[T],this[T]=o?o(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Es:fo,this.isPropagationStopped=fo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Es)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Es)},persist:function(){},isPersistent:Es}),s}var I={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},se=Rn(I),le=x({},I,{view:0,detail:0}),_e=Rn(le),C,R,X,ue=x({},le,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==X&&(X&&e.type==="mousemove"?(C=e.screenX-X.screenX,R=e.screenY-X.screenY):R=C=0,X=e),C)},movementY:function(e){return"movementY"in e?e.movementY:R}}),Ae=Rn(ue),Pe=x({},ue,{dataTransfer:0}),Nt=Rn(Pe),ft=x({},le,{relatedTarget:0}),Ge=Rn(ft),at=x({},I,{animationName:0,elapsedTime:0,pseudoElement:0}),Rt=Rn(at),Yt=x({},I,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fn=Rn(Yt),rn=x({},I,{data:0}),Qe=Rn(rn),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zs={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ao={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yo(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Ao[e])?!!s[e]:!1}function eo(){return yo}var Po=x({},le,{key:function(e){if(e.key){var s=wn[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zs[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(e){return e.type==="keypress"?Ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ri=Rn(Po),An=x({},ue,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jn=Rn(An),to=x({},le,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),Vi=Rn(to),ea=x({},I,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ho=Rn(ea),kr=x({},ue,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Be=Rn(kr),st=x({},I,{newState:0,oldState:0}),wt=Rn(st),lt=[9,13,27,32],It=Ws&&"CompositionEvent"in window,Bt=null;Ws&&"documentMode"in document&&(Bt=document.documentMode);var mn=Ws&&"TextEvent"in window&&!Bt,un=Ws&&(!It||Bt&&8<Bt&&11>=Bt),cs=" ",ks=!1;function xo(e,s){switch(e){case"keyup":return lt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ho=!1;function ba(e,s){switch(e){case"compositionend":return ta(s);case"keypress":return s.which!==32?null:(ks=!0,cs);case"textInput":return e=s.data,e===cs&&ks?null:e;default:return null}}function Qo(e,s){if(ho)return e==="compositionend"||!It&&xo(e,s)?(e=go(),Ms=Eo=Zn=null,ho=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return un&&s.locale!=="ko"?null:s.data;default:return null}}var Oc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xl(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Oc[e.type]:s==="textarea"}function bl(e,s,o,r){jn?uo?uo.push(r):uo=[r]:jn=r,s=ju(s,"onChange"),0<s.length&&(o=new se("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var va=null,wa=null;function zc(e){_0(e,0)}function A(e){var s=gs(e);if(Vs(s))return e}function O(e,s){if(e==="change")return s}var G=!1;if(Ws){var V;if(Ws){var oe="oninput"in document;if(!oe){var xe=document.createElement("div");xe.setAttribute("oninput","return;"),oe=typeof xe.oninput=="function"}V=oe}else V=!1;G=V&&(!document.documentMode||9<document.documentMode)}function Fe(){va&&(va.detachEvent("onpropertychange",qe),wa=va=null)}function qe(e){if(e.propertyName==="value"&&A(wa)){var s=[];bl(s,wa,e,js(e)),Qn(zc,s)}}function ot(e,s,o){e==="focusin"?(Fe(),va=s,wa=o,va.attachEvent("onpropertychange",qe)):e==="focusout"&&Fe()}function kt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return A(wa)}function Ot(e,s){if(e==="click")return A(s)}function Jt(e,s){if(e==="input"||e==="change")return A(s)}function en(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var jt=typeof Object.is=="function"?Object.is:en;function gt(e,s){if(jt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!He.call(s,f)||!jt(e[f],s[f]))return!1}return!0}function us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ds(e,s){var o=us(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=us(o)}}function fs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?fs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Cn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=zo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=zo(e.document)}return s}function zn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Ft=Ws&&"documentMode"in document&&11>=document.documentMode,Gt=null,hs=null,Mn=null,no=!1;function Do(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;no||Gt==null||Gt!==zo(r)||(r=Gt,"selectionStart"in r&&zn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&gt(Mn,r)||(Mn=r,r=ju(hs,"onSelect"),0<r.length&&(s=new se("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Gt)))}function es(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var yi={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionrun:es("Transition","TransitionRun"),transitionstart:es("Transition","TransitionStart"),transitioncancel:es("Transition","TransitionCancel"),transitionend:es("Transition","TransitionEnd")},Ni={},Ri={};Ws&&(Ri=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Un(e){if(Ni[e])return Ni[e];if(!yi[e])return e;var s=yi[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Ri)return Ni[e]=s[o];return e}var Bi=Un("animationend"),Yi=Un("animationiteration"),$c=Un("animationstart"),Yd=Un("transitionrun"),Wd=Un("transitionstart"),Fd=Un("transitioncancel"),Gp=Un("transitionend"),Kp=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xd.push("scrollEnd");function Li(e,s){Kp.set(e,s),Js(s,[e])}var Ic=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],jr=0,qd=0;function Pc(){for(var e=jr,s=qd=jr=0;s<e;){var o=xi[s];xi[s++]=null;var r=xi[s];xi[s++]=null;var f=xi[s];xi[s++]=null;var m=xi[s];if(xi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Qp(o,f,m)}}function Hc(e,s,o,r){xi[jr++]=e,xi[jr++]=s,xi[jr++]=o,xi[jr++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Gd(e,s,o,r){return Hc(e,s,o,r),Uc(e)}function Ja(e,s){return Hc(e,null,null,s),Uc(e)}function Qp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-bt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Uc(e){if(50<Ul)throw Ul=0,ih=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Mr={};function s2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,s,o,r){return new s2(e,s,o,r)}function Kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,s){var o=e.alternate;return o===null?(o=li(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Zp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Vc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Kd(e)&&(v=1);else if(typeof e=="string")v=lv(e,o,he.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=li(31,o,s,f),e.elementType=K,e.lanes=m,e;case j:return er(o.children,f,m,s);case k:v=8,f|=24;break;case M:return e=li(12,o,s,f|2),e.elementType=M,e.lanes=m,e;case $:return e=li(13,o,s,f),e.elementType=$,e.lanes=m,e;case F:return e=li(19,o,s,f),e.elementType=F,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break e;case z:v=9;break e;case E:v=11;break e;case W:v=14;break e;case H:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=li(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function er(e,s,o,r){return e=li(7,e,r,s),e.lanes=o,e}function Qd(e,s,o){return e=li(6,e,null,s),e.lanes=o,e}function Jp(e){var s=li(18,null,null,0);return s.stateNode=e,s}function Zd(e,s,o){return s=li(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var e_=new WeakMap;function bi(e,s){if(typeof e=="object"&&e!==null){var o=e_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ie(s)},e_.set(e,s),s)}return{value:e,source:s,stack:ie(s)}}var Tr=[],Er=0,Yc=null,vl=0,vi=[],wi=0,Sa=null,Wi=1,Fi="";function sa(e,s){Tr[Er++]=vl,Tr[Er++]=Yc,Yc=e,vl=s}function t_(e,s,o){vi[wi++]=Wi,vi[wi++]=Fi,vi[wi++]=Sa,Sa=e;var r=Wi;e=Fi;var f=32-bt(r)-1;r&=~(1<<f),o+=1;var m=32-bt(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,Wi=1<<32-bt(s)+f|o<<f|r,Fi=m+e}else Wi=1<<m|o<<f|r,Fi=e}function Jd(e){e.return!==null&&(sa(e,1),t_(e,1,0))}function ef(e){for(;e===Yc;)Yc=Tr[--Er],Tr[Er]=null,vl=Tr[--Er],Tr[Er]=null;for(;e===Sa;)Sa=vi[--wi],vi[wi]=null,Fi=vi[--wi],vi[wi]=null,Wi=vi[--wi],vi[wi]=null}function n_(e,s){vi[wi++]=Wi,vi[wi++]=Fi,vi[wi++]=Sa,Wi=s.id,Fi=s.overflow,Sa=e}var bo=null,ms=null,Sn=!1,Ca=null,Si=!1,tf=Error(a(519));function ka(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wl(bi(s,e)),tf}function s_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[tn]=e,s[bn]=r,o){case"dialog":_n("cancel",s),_n("close",s);break;case"iframe":case"object":case"embed":_n("load",s);break;case"video":case"audio":for(o=0;o<Yl.length;o++)_n(Yl[o],s);break;case"source":_n("error",s);break;case"img":case"image":case"link":_n("error",s),_n("load",s);break;case"details":_n("toggle",s);break;case"input":_n("invalid",s),vn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_n("invalid",s);break;case"textarea":_n("invalid",s),gi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||b0(s.textContent,o)?(r.popover!=null&&(_n("beforetoggle",s),_n("toggle",s)),r.onScroll!=null&&_n("scroll",s),r.onScrollEnd!=null&&_n("scrollend",s),r.onClick!=null&&(s.onclick=Os),s=!0):s=!1,s||ka(e,!0)}function o_(e){for(bo=e.return;bo;)switch(bo.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:bo=bo.return}}function Ar(e){if(e!==bo)return!1;if(!Sn)return o_(e),Sn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||bh(e.type,e.memoizedProps)),o=!o),o&&ms&&ka(e),o_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ms=E0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ms=E0(e)}else s===27?(s=ms,Ia(e.type)?(e=kh,kh=null,ms=e):ms=s):ms=bo?ki(e.stateNode.nextSibling):null;return!0}function tr(){ms=bo=null,Sn=!1}function nf(){var e=Ca;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),Ca=null),e}function wl(e){Ca===null?Ca=[e]:Ca.push(e)}var sf=D(null),nr=null,oa=null;function ja(e,s,o){Z(sf,s._currentValue),s._currentValue=o}function ia(e){e._currentValue=sf.current,ce(sf)}function of(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function af(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=f;for(var Y=0;Y<s.length;Y++)if(T.context===s[Y]){m.lanes|=o,T=m.alternate,T!==null&&(T.lanes|=o),of(m.return,o,e),r||(v=null);break e}m=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),of(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Dr(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var T=f.type;jt(f.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(f===Me.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Gl):e=[Gl])}f=f.return}e!==null&&af(s,e,o,r),s.flags|=262144}function Wc(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){nr=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vo(e){return i_(nr,e)}function Fc(e,s){return nr===null&&sr(e),i_(e,s)}function i_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},oa===null){if(e===null)throw Error(a(308));oa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else oa=oa.next=s;return o}var o2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},i2=t.unstable_scheduleCallback,a2=t.unstable_NormalPriority,Xs={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new o2,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&i2(a2,function(){e.controller.abort()})}var Cl=null,lf=0,Nr=0,Rr=null;function r2(e,s){if(Cl===null){var o=Cl=[];lf=0,Nr=dh(),Rr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return lf++,s.then(a_,a_),s}function a_(){if(--lf===0&&Cl!==null){Rr!==null&&(Rr.status="fulfilled");var e=Cl;Cl=null,Nr=0,Rr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function l2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var r_=L.S;L.S=function(e,s){Yg=dt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&r2(e,s),r_!==null&&r_(e,s)};var or=D(null);function cf(){var e=or.current;return e!==null?e:ts.pooledCache}function Xc(e,s){s===null?Z(or,or.current):Z(or,s.pool)}function l_(){var e=cf();return e===null?null:{parent:Xs._currentValue,pool:e}}var Br=Error(a(460)),uf=Error(a(474)),qc=Error(a(542)),Gc={then:function(){}};function c_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function u_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Os,Os),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,f_(e),e;default:if(typeof s.status=="string")s.then(Os,Os);else{if(e=ts,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,f_(e),e}throw ar=s,Br}}function ir(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(ar=o,Br):o}}var ar=null;function d_(){if(ar===null)throw Error(a(459));var e=ar;return ar=null,e}function f_(e){if(e===Br||e===qc)throw Error(a(483))}var Lr=null,kl=0;function Kc(e){var s=kl;return kl+=1,Lr===null&&(Lr=[]),u_(Lr,e,s)}function jl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Qc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function h_(e){function s(de,J){if(e){var me=de.deletions;me===null?(de.deletions=[J],de.flags|=16):me.push(J)}}function o(de,J){if(!e)return null;for(;J!==null;)s(de,J),J=J.sibling;return null}function r(de){for(var J=new Map;de!==null;)de.key!==null?J.set(de.key,de):J.set(de.index,de),de=de.sibling;return J}function f(de,J){return de=na(de,J),de.index=0,de.sibling=null,de}function m(de,J,me){return de.index=me,e?(me=de.alternate,me!==null?(me=me.index,me<J?(de.flags|=67108866,J):me):(de.flags|=67108866,J)):(de.flags|=1048576,J)}function v(de){return e&&de.alternate===null&&(de.flags|=67108866),de}function T(de,J,me,De){return J===null||J.tag!==6?(J=Qd(me,de.mode,De),J.return=de,J):(J=f(J,me),J.return=de,J)}function Y(de,J,me,De){var Ht=me.type;return Ht===j?Ce(de,J,me.props.children,De,me.key):J!==null&&(J.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===H&&ir(Ht)===J.type)?(J=f(J,me.props),jl(J,me),J.return=de,J):(J=Vc(me.type,me.key,me.props,null,de.mode,De),jl(J,me),J.return=de,J)}function pe(de,J,me,De){return J===null||J.tag!==4||J.stateNode.containerInfo!==me.containerInfo||J.stateNode.implementation!==me.implementation?(J=Zd(me,de.mode,De),J.return=de,J):(J=f(J,me.children||[]),J.return=de,J)}function Ce(de,J,me,De,Ht){return J===null||J.tag!==7?(J=er(me,de.mode,De,Ht),J.return=de,J):(J=f(J,me),J.return=de,J)}function Re(de,J,me){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return J=Qd(""+J,de.mode,me),J.return=de,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case w:return me=Vc(J.type,J.key,J.props,null,de.mode,me),jl(me,J),me.return=de,me;case S:return J=Zd(J,de.mode,me),J.return=de,J;case H:return J=ir(J),Re(de,J,me)}if(fe(J)||Se(J))return J=er(J,de.mode,me,null),J.return=de,J;if(typeof J.then=="function")return Re(de,Kc(J),me);if(J.$$typeof===N)return Re(de,Fc(de,J),me);Qc(de,J)}return null}function ye(de,J,me,De){var Ht=J!==null?J.key:null;if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Ht!==null?null:T(de,J,""+me,De);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case w:return me.key===Ht?Y(de,J,me,De):null;case S:return me.key===Ht?pe(de,J,me,De):null;case H:return me=ir(me),ye(de,J,me,De)}if(fe(me)||Se(me))return Ht!==null?null:Ce(de,J,me,De,null);if(typeof me.then=="function")return ye(de,J,Kc(me),De);if(me.$$typeof===N)return ye(de,J,Fc(de,me),De);Qc(de,me)}return null}function be(de,J,me,De,Ht){if(typeof De=="string"&&De!==""||typeof De=="number"||typeof De=="bigint")return de=de.get(me)||null,T(J,de,""+De,Ht);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case w:return de=de.get(De.key===null?me:De.key)||null,Y(J,de,De,Ht);case S:return de=de.get(De.key===null?me:De.key)||null,pe(J,de,De,Ht);case H:return De=ir(De),be(de,J,me,De,Ht)}if(fe(De)||Se(De))return de=de.get(me)||null,Ce(J,de,De,Ht,null);if(typeof De.then=="function")return be(de,J,me,Kc(De),Ht);if(De.$$typeof===N)return be(de,J,me,Fc(J,De),Ht);Qc(J,De)}return null}function Et(de,J,me,De){for(var Ht=null,Dn=null,Lt=J,dn=J=0,yn=null;Lt!==null&&dn<me.length;dn++){Lt.index>dn?(yn=Lt,Lt=null):yn=Lt.sibling;var Nn=ye(de,Lt,me[dn],De);if(Nn===null){Lt===null&&(Lt=yn);break}e&&Lt&&Nn.alternate===null&&s(de,Lt),J=m(Nn,J,dn),Dn===null?Ht=Nn:Dn.sibling=Nn,Dn=Nn,Lt=yn}if(dn===me.length)return o(de,Lt),Sn&&sa(de,dn),Ht;if(Lt===null){for(;dn<me.length;dn++)Lt=Re(de,me[dn],De),Lt!==null&&(J=m(Lt,J,dn),Dn===null?Ht=Lt:Dn.sibling=Lt,Dn=Lt);return Sn&&sa(de,dn),Ht}for(Lt=r(Lt);dn<me.length;dn++)yn=be(Lt,de,dn,me[dn],De),yn!==null&&(e&&yn.alternate!==null&&Lt.delete(yn.key===null?dn:yn.key),J=m(yn,J,dn),Dn===null?Ht=yn:Dn.sibling=yn,Dn=yn);return e&&Lt.forEach(function(Ya){return s(de,Ya)}),Sn&&sa(de,dn),Ht}function Wt(de,J,me,De){if(me==null)throw Error(a(151));for(var Ht=null,Dn=null,Lt=J,dn=J=0,yn=null,Nn=me.next();Lt!==null&&!Nn.done;dn++,Nn=me.next()){Lt.index>dn?(yn=Lt,Lt=null):yn=Lt.sibling;var Ya=ye(de,Lt,Nn.value,De);if(Ya===null){Lt===null&&(Lt=yn);break}e&&Lt&&Ya.alternate===null&&s(de,Lt),J=m(Ya,J,dn),Dn===null?Ht=Ya:Dn.sibling=Ya,Dn=Ya,Lt=yn}if(Nn.done)return o(de,Lt),Sn&&sa(de,dn),Ht;if(Lt===null){for(;!Nn.done;dn++,Nn=me.next())Nn=Re(de,Nn.value,De),Nn!==null&&(J=m(Nn,J,dn),Dn===null?Ht=Nn:Dn.sibling=Nn,Dn=Nn);return Sn&&sa(de,dn),Ht}for(Lt=r(Lt);!Nn.done;dn++,Nn=me.next())Nn=be(Lt,de,dn,Nn.value,De),Nn!==null&&(e&&Nn.alternate!==null&&Lt.delete(Nn.key===null?dn:Nn.key),J=m(Nn,J,dn),Dn===null?Ht=Nn:Dn.sibling=Nn,Dn=Nn);return e&&Lt.forEach(function(xv){return s(de,xv)}),Sn&&sa(de,dn),Ht}function Wn(de,J,me,De){if(typeof me=="object"&&me!==null&&me.type===j&&me.key===null&&(me=me.props.children),typeof me=="object"&&me!==null){switch(me.$$typeof){case w:e:{for(var Ht=me.key;J!==null;){if(J.key===Ht){if(Ht=me.type,Ht===j){if(J.tag===7){o(de,J.sibling),De=f(J,me.props.children),De.return=de,de=De;break e}}else if(J.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===H&&ir(Ht)===J.type){o(de,J.sibling),De=f(J,me.props),jl(De,me),De.return=de,de=De;break e}o(de,J);break}else s(de,J);J=J.sibling}me.type===j?(De=er(me.props.children,de.mode,De,me.key),De.return=de,de=De):(De=Vc(me.type,me.key,me.props,null,de.mode,De),jl(De,me),De.return=de,de=De)}return v(de);case S:e:{for(Ht=me.key;J!==null;){if(J.key===Ht)if(J.tag===4&&J.stateNode.containerInfo===me.containerInfo&&J.stateNode.implementation===me.implementation){o(de,J.sibling),De=f(J,me.children||[]),De.return=de,de=De;break e}else{o(de,J);break}else s(de,J);J=J.sibling}De=Zd(me,de.mode,De),De.return=de,de=De}return v(de);case H:return me=ir(me),Wn(de,J,me,De)}if(fe(me))return Et(de,J,me,De);if(Se(me)){if(Ht=Se(me),typeof Ht!="function")throw Error(a(150));return me=Ht.call(me),Wt(de,J,me,De)}if(typeof me.then=="function")return Wn(de,J,Kc(me),De);if(me.$$typeof===N)return Wn(de,J,Fc(de,me),De);Qc(de,me)}return typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint"?(me=""+me,J!==null&&J.tag===6?(o(de,J.sibling),De=f(J,me),De.return=de,de=De):(o(de,J),De=Qd(me,de.mode,De),De.return=de,de=De),v(de)):o(de,J)}return function(de,J,me,De){try{kl=0;var Ht=Wn(de,J,me,De);return Lr=null,Ht}catch(Lt){if(Lt===Br||Lt===qc)throw Lt;var Dn=li(29,Lt,null,de.mode);return Dn.lanes=De,Dn.return=de,Dn}finally{}}}var rr=h_(!0),m_=h_(!1),Ma=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Bn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Uc(e),Qp(e,null,o),s}return Hc(e,r,s,o),Uc(e)}function Ml(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,is(e,o)}}function hf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var mf=!1;function Tl(){if(mf){var e=Rr;if(e!==null)throw e}}function El(e,s,o,r){mf=!1;var f=e.updateQueue;Ma=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var Y=T,pe=Y.next;Y.next=null,v===null?m=pe:v.next=pe,v=Y;var Ce=e.alternate;Ce!==null&&(Ce=Ce.updateQueue,T=Ce.lastBaseUpdate,T!==v&&(T===null?Ce.firstBaseUpdate=pe:T.next=pe,Ce.lastBaseUpdate=Y))}if(m!==null){var Re=f.baseState;v=0,Ce=pe=Y=null,T=m;do{var ye=T.lane&-536870913,be=ye!==T.lane;if(be?(gn&ye)===ye:(r&ye)===ye){ye!==0&&ye===Nr&&(mf=!0),Ce!==null&&(Ce=Ce.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Et=e,Wt=T;ye=s;var Wn=o;switch(Wt.tag){case 1:if(Et=Wt.payload,typeof Et=="function"){Re=Et.call(Wn,Re,ye);break e}Re=Et;break e;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=Wt.payload,ye=typeof Et=="function"?Et.call(Wn,Re,ye):Et,ye==null)break e;Re=x({},Re,ye);break e;case 2:Ma=!0}}ye=T.callback,ye!==null&&(e.flags|=64,be&&(e.flags|=8192),be=f.callbacks,be===null?f.callbacks=[ye]:be.push(ye))}else be={lane:ye,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Ce===null?(pe=Ce=be,Y=Re):Ce=Ce.next=be,v|=ye;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;be=T,T=be.next,be.next=null,f.lastBaseUpdate=be,f.shared.pending=null}}while(!0);Ce===null&&(Y=Re),f.baseState=Y,f.firstBaseUpdate=pe,f.lastBaseUpdate=Ce,m===null&&(f.shared.lanes=0),Ba|=v,e.lanes=v,e.memoizedState=Re}}function p_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function __(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)p_(o[e],s)}var Or=D(null),Zc=D(0);function g_(e,s){e=ma,Z(Zc,e),Z(Or,s),ma=e|s.baseLanes}function pf(){Z(Zc,ma),Z(Or,Or.current)}function _f(){ma=Zc.current,ce(Or),ce(Zc)}var ci=D(null),Ci=null;function Aa(e){var s=e.alternate;Z($s,$s.current&1),Z(ci,e),Ci===null&&(s===null||Or.current!==null||s.memoizedState!==null)&&(Ci=e)}function gf(e){Z($s,$s.current),Z(ci,e),Ci===null&&(Ci=e)}function y_(e){e.tag===22?(Z($s,$s.current),Z(ci,e),Ci===null&&(Ci=e)):Da()}function Da(){Z($s,$s.current),Z(ci,ci.current)}function ui(e){ce(ci),Ci===e&&(Ci=null),ce($s)}var $s=D(0);function Jc(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Sh(o)||Ch(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var aa=0,ln=null,Vn=null,qs=null,eu=!1,zr=!1,lr=!1,tu=0,Al=0,$r=null,c2=0;function As(){throw Error(a(321))}function yf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!jt(e[o],s[o]))return!1;return!0}function xf(e,s,o,r,f,m){return aa=m,ln=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,L.H=e===null||e.memoizedState===null?tg:Bf,lr=!1,m=o(r,f),lr=!1,zr&&(m=b_(s,o,r,f)),x_(e),m}function x_(e){L.H=Rl;var s=Vn!==null&&Vn.next!==null;if(aa=0,qs=Vn=ln=null,eu=!1,Al=0,$r=null,s)throw Error(a(300));e===null||Gs||(e=e.dependencies,e!==null&&Wc(e)&&(Gs=!0))}function b_(e,s,o,r){ln=e;var f=0;do{if(zr&&($r=null),Al=0,zr=!1,25<=f)throw Error(a(301));if(f+=1,qs=Vn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}L.H=ng,m=s(o,r)}while(zr);return m}function u2(){var e=L.H,s=e.useState()[0];return s=typeof s.then=="function"?Dl(s):s,e=e.useState()[0],(Vn!==null?Vn.memoizedState:null)!==e&&(ln.flags|=1024),s}function bf(){var e=tu!==0;return tu=0,e}function vf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function wf(e){if(eu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}eu=!1}aa=0,qs=Vn=ln=null,zr=!1,Al=tu=0,$r=null}function Uo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qs===null?ln.memoizedState=qs=e:qs=qs.next=e,qs}function Is(){if(Vn===null){var e=ln.alternate;e=e!==null?e.memoizedState:null}else e=Vn.next;var s=qs===null?ln.memoizedState:qs.next;if(s!==null)qs=s,Vn=e;else{if(e===null)throw ln.alternate===null?Error(a(467)):Error(a(310));Vn=e,e={memoizedState:Vn.memoizedState,baseState:Vn.baseState,baseQueue:Vn.baseQueue,queue:Vn.queue,next:null},qs===null?ln.memoizedState=qs=e:qs=qs.next=e}return qs}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(e){var s=Al;return Al+=1,$r===null&&($r=[]),e=u_($r,e,s),s=ln,(qs===null?s.memoizedState:qs.next)===null&&(s=s.alternate,L.H=s===null||s.memoizedState===null?tg:Bf),e}function su(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dl(e);if(e.$$typeof===N)return vo(e)}throw Error(a(438,String(e)))}function Sf(e){var s=null,o=ln.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=ln.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=nu(),ln.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=ae;return s.index++,o}function ra(e,s){return typeof s=="function"?s(e):s}function ou(e){var s=Is();return Cf(s,Vn,e)}function Cf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var T=v=null,Y=null,pe=s,Ce=!1;do{var Re=pe.lane&-536870913;if(Re!==pe.lane?(gn&Re)===Re:(aa&Re)===Re){var ye=pe.revertLane;if(ye===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),Re===Nr&&(Ce=!0);else if((aa&ye)===ye){pe=pe.next,ye===Nr&&(Ce=!0);continue}else Re={lane:0,revertLane:pe.revertLane,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},Y===null?(T=Y=Re,v=m):Y=Y.next=Re,ln.lanes|=ye,Ba|=ye;Re=pe.action,lr&&o(m,Re),m=pe.hasEagerState?pe.eagerState:o(m,Re)}else ye={lane:Re,revertLane:pe.revertLane,gesture:pe.gesture,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},Y===null?(T=Y=ye,v=m):Y=Y.next=ye,ln.lanes|=Re,Ba|=Re;pe=pe.next}while(pe!==null&&pe!==s);if(Y===null?v=m:Y.next=T,!jt(m,e.memoizedState)&&(Gs=!0,Ce&&(o=Rr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=Y,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function kf(e){var s=Is(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);jt(m,s.memoizedState)||(Gs=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function v_(e,s,o){var r=ln,f=Is(),m=Sn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!jt((Vn||f).memoizedState,o);if(v&&(f.memoizedState=o,Gs=!0),f=f.queue,Tf(C_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||qs!==null&&qs.memoizedState.tag&1){if(r.flags|=2048,Ir(9,{destroy:void 0},S_.bind(null,r,f,o,s),null),ts===null)throw Error(a(349));m||(aa&127)!==0||w_(r,s,o)}return o}function w_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=ln.updateQueue,s===null?(s=nu(),ln.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function S_(e,s,o,r){s.value=o,s.getSnapshot=r,k_(s)&&j_(e)}function C_(e,s,o){return o(function(){k_(s)&&j_(e)})}function k_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!jt(e,o)}catch{return!0}}function j_(e){var s=Ja(e,2);s!==null&&ni(s,e,2)}function jf(e){var s=Uo();if(typeof e=="function"){var o=e;if(e=o(),lr){Te(!0);try{o()}finally{Te(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},s}function M_(e,s,o,r){return e.baseState=o,Cf(e,Vn,typeof r=="function"?r:ra)}function d2(e,s,o,r,f){if(ru(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};L.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,T_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function T_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=L.T,v={};L.T=v;try{var T=o(f,r),Y=L.S;Y!==null&&Y(v,T),E_(e,s,T)}catch(pe){Mf(e,s,pe)}finally{m!==null&&v.types!==null&&(m.types=v.types),L.T=m}}else try{m=o(f,r),E_(e,s,m)}catch(pe){Mf(e,s,pe)}}function E_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){A_(e,s,r)},function(r){return Mf(e,s,r)}):A_(e,s,o)}function A_(e,s,o){s.status="fulfilled",s.value=o,D_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,T_(e,o)))}function Mf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,D_(s),s=s.next;while(s!==r)}e.action=null}function D_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function N_(e,s){return s}function R_(e,s){if(Sn){var o=ts.formState;if(o!==null){e:{var r=ln;if(Sn){if(ms){t:{for(var f=ms,m=Si;f.nodeType!==8;){if(!m){f=null;break t}if(f=ki(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ms=ki(f.nextSibling),r=f.data==="F!";break e}}ka(r)}r=!1}r&&(s=o[0])}}return o=Uo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N_,lastRenderedState:s},o.queue=r,o=Z_.bind(null,ln,r),r.dispatch=o,r=jf(!1),m=Rf.bind(null,ln,!1,r.queue),r=Uo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=d2.bind(null,ln,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function B_(e){var s=Is();return L_(s,Vn,e)}function L_(e,s,o){if(s=Cf(e,s,N_)[0],e=ou(ra)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Dl(s)}catch(v){throw v===Br?qc:v}else r=s;s=Is();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(ln.flags|=2048,Ir(9,{destroy:void 0},f2.bind(null,f,o),null)),[r,m,e]}function f2(e,s){e.action=s}function O_(e){var s=Is(),o=Vn;if(o!==null)return L_(s,o,e);Is(),s=s.memoizedState,o=Is();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Ir(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=ln.updateQueue,s===null&&(s=nu(),ln.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function z_(){return Is().memoizedState}function iu(e,s,o,r){var f=Uo();ln.flags|=e,f.memoizedState=Ir(1|s,{destroy:void 0},o,r===void 0?null:r)}function au(e,s,o,r){var f=Is();r=r===void 0?null:r;var m=f.memoizedState.inst;Vn!==null&&r!==null&&yf(r,Vn.memoizedState.deps)?f.memoizedState=Ir(s,m,o,r):(ln.flags|=e,f.memoizedState=Ir(1|s,m,o,r))}function $_(e,s){iu(8390656,8,e,s)}function Tf(e,s){au(2048,8,e,s)}function h2(e){ln.flags|=4;var s=ln.updateQueue;if(s===null)s=nu(),ln.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function I_(e){var s=Is().memoizedState;return h2({ref:s,nextImpl:e}),function(){if((Bn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function P_(e,s){return au(4,2,e,s)}function H_(e,s){return au(4,4,e,s)}function U_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function V_(e,s,o){o=o!=null?o.concat([e]):null,au(4,4,U_.bind(null,s,e),o)}function Ef(){}function Y_(e,s){var o=Is();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&yf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function W_(e,s){var o=Is();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&yf(s,r[1]))return r[0];if(r=e(),lr){Te(!0);try{e()}finally{Te(!1)}}return o.memoizedState=[r,s],r}function Af(e,s,o){return o===void 0||(aa&1073741824)!==0&&(gn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Fg(),ln.lanes|=e,Ba|=e,o)}function F_(e,s,o,r){return jt(o,s)?o:Or.current!==null?(e=Af(e,o,r),jt(e,s)||(Gs=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(gn&261930)===0?(Gs=!0,e.memoizedState=o):(e=Fg(),ln.lanes|=e,Ba|=e,s)}function X_(e,s,o,r,f){var m=ne.p;ne.p=m!==0&&8>m?m:8;var v=L.T,T={};L.T=T,Rf(e,!1,s,o);try{var Y=f(),pe=L.S;if(pe!==null&&pe(T,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var Ce=l2(Y,r);Nl(e,s,Ce,hi(e))}else Nl(e,s,r,hi(e))}catch(Re){Nl(e,s,{then:function(){},status:"rejected",reason:Re},hi())}finally{ne.p=m,v!==null&&T.types!==null&&(v.types=T.types),L.T=v}}function m2(){}function Df(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=q_(e).queue;X_(e,f,s,U,o===null?m2:function(){return G_(e),o(r)})}function q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:U},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function G_(e){var s=q_(e);s.next===null&&(s=e.alternate.memoizedState),Nl(e,s.next.queue,{},hi())}function Nf(){return vo(Gl)}function K_(){return Is().memoizedState}function Q_(){return Is().memoizedState}function p2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=hi();e=Ta(o);var r=Ea(s,e,o);r!==null&&(ni(r,s,o),Ml(r,s,o)),s={cache:rf()},e.payload=s;return}s=s.return}}function _2(e,s,o){var r=hi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ru(e)?J_(s,o):(o=Gd(e,s,o,r),o!==null&&(ni(o,e,r),eg(o,s,r)))}function Z_(e,s,o){var r=hi();Nl(e,s,o,r)}function Nl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(ru(e))J_(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,T=m(v,o);if(f.hasEagerState=!0,f.eagerState=T,jt(T,v))return Hc(e,s,f,0),ts===null&&Pc(),!1}catch{}finally{}if(o=Gd(e,s,f,r),o!==null)return ni(o,e,r),eg(o,s,r),!0}return!1}function Rf(e,s,o,r){if(r={lane:2,revertLane:dh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ru(e)){if(s)throw Error(a(479))}else s=Gd(e,o,r,2),s!==null&&ni(s,e,2)}function ru(e){var s=e.alternate;return e===ln||s!==null&&s===ln}function J_(e,s){zr=eu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function eg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,is(e,o)}}var Rl={readContext:vo,use:su,useCallback:As,useContext:As,useEffect:As,useImperativeHandle:As,useLayoutEffect:As,useInsertionEffect:As,useMemo:As,useReducer:As,useRef:As,useState:As,useDebugValue:As,useDeferredValue:As,useTransition:As,useSyncExternalStore:As,useId:As,useHostTransitionStatus:As,useFormState:As,useActionState:As,useOptimistic:As,useMemoCache:As,useCacheRefresh:As};Rl.useEffectEvent=As;var tg={readContext:vo,use:su,useCallback:function(e,s){return Uo().memoizedState=[e,s===void 0?null:s],e},useContext:vo,useEffect:$_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,iu(4194308,4,U_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return iu(4194308,4,e,s)},useInsertionEffect:function(e,s){iu(4,2,e,s)},useMemo:function(e,s){var o=Uo();s=s===void 0?null:s;var r=e();if(lr){Te(!0);try{e()}finally{Te(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Uo();if(o!==void 0){var f=o(s);if(lr){Te(!0);try{o(s)}finally{Te(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=_2.bind(null,ln,e),[r.memoizedState,e]},useRef:function(e){var s=Uo();return e={current:e},s.memoizedState=e},useState:function(e){e=jf(e);var s=e.queue,o=Z_.bind(null,ln,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Uo();return Af(o,e,s)},useTransition:function(){var e=jf(!1);return e=X_.bind(null,ln,e.queue,!0,!1),Uo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=ln,f=Uo();if(Sn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),ts===null)throw Error(a(349));(gn&127)!==0||w_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,$_(C_.bind(null,r,m,e),[e]),r.flags|=2048,Ir(9,{destroy:void 0},S_.bind(null,r,m,o,s),null),o},useId:function(){var e=Uo(),s=ts.identifierPrefix;if(Sn){var o=Fi,r=Wi;o=(r&~(1<<32-bt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=tu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=c2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Nf,useFormState:R_,useActionState:R_,useOptimistic:function(e){var s=Uo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Rf.bind(null,ln,!0,o),o.dispatch=s,[e,s]},useMemoCache:Sf,useCacheRefresh:function(){return Uo().memoizedState=p2.bind(null,ln)},useEffectEvent:function(e){var s=Uo(),o={impl:e};return s.memoizedState=o,function(){if((Bn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Bf={readContext:vo,use:su,useCallback:Y_,useContext:vo,useEffect:Tf,useImperativeHandle:V_,useInsertionEffect:P_,useLayoutEffect:H_,useMemo:W_,useReducer:ou,useRef:z_,useState:function(){return ou(ra)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Is();return F_(o,Vn.memoizedState,e,s)},useTransition:function(){var e=ou(ra)[0],s=Is().memoizedState;return[typeof e=="boolean"?e:Dl(e),s]},useSyncExternalStore:v_,useId:K_,useHostTransitionStatus:Nf,useFormState:B_,useActionState:B_,useOptimistic:function(e,s){var o=Is();return M_(o,Vn,e,s)},useMemoCache:Sf,useCacheRefresh:Q_};Bf.useEffectEvent=I_;var ng={readContext:vo,use:su,useCallback:Y_,useContext:vo,useEffect:Tf,useImperativeHandle:V_,useInsertionEffect:P_,useLayoutEffect:H_,useMemo:W_,useReducer:kf,useRef:z_,useState:function(){return kf(ra)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Is();return Vn===null?Af(o,e,s):F_(o,Vn.memoizedState,e,s)},useTransition:function(){var e=kf(ra)[0],s=Is().memoizedState;return[typeof e=="boolean"?e:Dl(e),s]},useSyncExternalStore:v_,useId:K_,useHostTransitionStatus:Nf,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=Is();return Vn!==null?M_(o,Vn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:Q_};ng.useEffectEvent=I_;function Lf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Of={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=hi(),f=Ta(r);f.payload=s,o!=null&&(f.callback=o),s=Ea(e,f,r),s!==null&&(ni(s,e,r),Ml(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=hi(),f=Ta(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ea(e,f,r),s!==null&&(ni(s,e,r),Ml(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=hi(),r=Ta(o);r.tag=2,s!=null&&(r.callback=s),s=Ea(e,r,o),s!==null&&(ni(s,e,o),Ml(s,e,o))}};function sg(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!gt(o,r)||!gt(f,m):!0}function og(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Of.enqueueReplaceState(s,s.state,null)}function cr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ig(e){Ic(e)}function ag(e){console.error(e)}function rg(e){Ic(e)}function lu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function lg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function zf(e,s,o){return o=Ta(o),o.tag=3,o.payload={element:null},o.callback=function(){lu(e,s)},o}function cg(e){return e=Ta(e),e.tag=3,e}function ug(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){lg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){lg(s,o,r),typeof f!="function"&&(La===null?La=new Set([this]):La.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function g2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Dr(s,o,f,!0),o=ci.current,o!==null){switch(o.tag){case 31:case 13:return Ci===null?bu():o.alternate===null&&Ds===0&&(Ds=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Gc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),lh(e,r,f)),!1;case 22:return o.flags|=65536,r===Gc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),lh(e,r,f)),!1}throw Error(a(435,o.tag))}return lh(e,r,f),bu(),!1}if(Sn)return s=ci.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==tf&&(e=Error(a(422),{cause:r}),wl(bi(e,o)))):(r!==tf&&(s=Error(a(423),{cause:r}),wl(bi(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=bi(r,o),f=zf(e.stateNode,r,f),hf(e,f),Ds!==4&&(Ds=2)),!1;var m=Error(a(520),{cause:r});if(m=bi(m,o),Hl===null?Hl=[m]:Hl.push(m),Ds!==4&&(Ds=2),s===null)return!0;r=bi(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=zf(o.stateNode,r,e),hf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(La===null||!La.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=cg(f),ug(f,e,o,r),hf(o,f),!1}o=o.return}while(o!==null);return!1}var $f=Error(a(461)),Gs=!1;function wo(e,s,o,r){s.child=e===null?m_(s,null,o,r):rr(s,e.child,o,r)}function dg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return sr(s),r=xf(e,s,o,v,m,f),T=bf(),e!==null&&!Gs?(vf(e,s,f),la(e,s,f)):(Sn&&T&&Jd(s),s.flags|=1,wo(e,s,r,f),s.child)}function fg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Kd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,hg(e,s,m,r,f)):(e=Vc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Ff(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:gt,o(v,r)&&e.ref===s.ref)return la(e,s,f)}return s.flags|=1,e=na(m,r),e.ref=s.ref,e.return=s,s.child=e}function hg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(gt(m,r)&&e.ref===s.ref)if(Gs=!1,s.pendingProps=r=m,Ff(e,f))(e.flags&131072)!==0&&(Gs=!0);else return s.lanes=e.lanes,la(e,s,f)}return If(e,s,o,r,f)}function mg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return pg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xc(s,m!==null?m.cachePool:null),m!==null?g_(s,m):pf(),y_(s);else return r=s.lanes=536870912,pg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(Xc(s,m.cachePool),g_(s,m),Da(),s.memoizedState=null):(e!==null&&Xc(s,null),pf(),Da());return wo(e,s,f,o),s.child}function Bl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function pg(e,s,o,r,f){var m=cf();return m=m===null?null:{parent:Xs._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&Xc(s,null),pf(),y_(s),e!==null&&Dr(e,s,r,!0),s.childLanes=f,null}function cu(e,s){return s=du({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function _g(e,s,o){return rr(s,e.child,null,o),e=cu(s,s.pendingProps),e.flags|=2,ui(s),s.memoizedState=null,e}function y2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Sn){if(r.mode==="hidden")return e=cu(s,r),s.lanes=536870912,Bl(null,e);if(gf(s),(e=ms)?(e=T0(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Wi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},o=Jp(e),o.return=s,s.child=o,bo=s,ms=null)):e=null,e===null)throw ka(s);return s.lanes=536870912,null}return cu(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(gf(s),f)if(s.flags&256)s.flags&=-257,s=_g(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Gs||Dr(e,s,o,!1),f=(o&e.childLanes)!==0,Gs||f){if(r=ts,r!==null&&(v=xn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,Ja(e,v),ni(r,e,v),$f;bu(),s=_g(e,s,o)}else e=m.treeContext,ms=ki(v.nextSibling),bo=s,Sn=!0,Ca=null,Si=!1,e!==null&&n_(s,e),s=cu(s,r),s.flags|=4096;return s}return e=na(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function uu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function If(e,s,o,r,f){return sr(s),o=xf(e,s,o,r,void 0,f),r=bf(),e!==null&&!Gs?(vf(e,s,f),la(e,s,f)):(Sn&&r&&Jd(s),s.flags|=1,wo(e,s,o,f),s.child)}function gg(e,s,o,r,f,m){return sr(s),s.updateQueue=null,o=b_(s,r,o,f),x_(e),r=bf(),e!==null&&!Gs?(vf(e,s,m),la(e,s,m)):(Sn&&r&&Jd(s),s.flags|=1,wo(e,s,o,m),s.child)}function yg(e,s,o,r,f){if(sr(s),s.stateNode===null){var m=Mr,v=o.contextType;typeof v=="object"&&v!==null&&(m=vo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Of,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},df(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?vo(v):Mr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Lf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Of.enqueueReplaceState(m,m.state,null),El(s,r,m,f),Tl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var T=s.memoizedProps,Y=cr(o,T);m.props=Y;var pe=m.context,Ce=o.contextType;v=Mr,typeof Ce=="object"&&Ce!==null&&(v=vo(Ce));var Re=o.getDerivedStateFromProps;Ce=typeof Re=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,Ce||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||pe!==v)&&og(s,m,r,v),Ma=!1;var ye=s.memoizedState;m.state=ye,El(s,r,m,f),Tl(),pe=s.memoizedState,T||ye!==pe||Ma?(typeof Re=="function"&&(Lf(s,o,Re,r),pe=s.memoizedState),(Y=Ma||sg(s,o,Y,r,ye,pe,v))?(Ce||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=pe),m.props=r,m.state=pe,m.context=v,r=Y):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,ff(e,s),v=s.memoizedProps,Ce=cr(o,v),m.props=Ce,Re=s.pendingProps,ye=m.context,pe=o.contextType,Y=Mr,typeof pe=="object"&&pe!==null&&(Y=vo(pe)),T=o.getDerivedStateFromProps,(pe=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Re||ye!==Y)&&og(s,m,r,Y),Ma=!1,ye=s.memoizedState,m.state=ye,El(s,r,m,f),Tl();var be=s.memoizedState;v!==Re||ye!==be||Ma||e!==null&&e.dependencies!==null&&Wc(e.dependencies)?(typeof T=="function"&&(Lf(s,o,T,r),be=s.memoizedState),(Ce=Ma||sg(s,o,Ce,r,ye,be,Y)||e!==null&&e.dependencies!==null&&Wc(e.dependencies))?(pe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,be,Y),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,be,Y)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=be),m.props=r,m.state=be,m.context=Y,r=Ce):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,uu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=rr(s,e.child,null,f),s.child=rr(s,null,o,f)):wo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=la(e,s,f),e}function xg(e,s,o,r){return tr(),s.flags|=256,wo(e,s,o,r),s.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:l_()}}function Uf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=fi),e}function bg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:($s.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(Sn){if(f?Aa(s):Da(),(e=ms)?(e=T0(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Wi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},o=Jp(e),o.return=s,s.child=o,bo=s,ms=null)):e=null,e===null)throw ka(s);return Ch(e)?s.lanes=32:s.lanes=536870912,null}var T=r.children;return r=r.fallback,f?(Da(),f=s.mode,T=du({mode:"hidden",children:T},f),r=er(r,f,o,null),T.return=s,r.return=s,T.sibling=r,s.child=T,r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Pf,Bl(null,r)):(Aa(s),Vf(s,T))}var Y=e.memoizedState;if(Y!==null&&(T=Y.dehydrated,T!==null)){if(m)s.flags&256?(Aa(s),s.flags&=-257,s=Yf(e,s,o)):s.memoizedState!==null?(Da(),s.child=e.child,s.flags|=128,s=null):(Da(),T=r.fallback,f=s.mode,r=du({mode:"visible",children:r.children},f),T=er(T,f,o,null),T.flags|=2,r.return=s,T.return=s,r.sibling=T,s.child=r,rr(s,e.child,null,o),r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Pf,s=Bl(null,r));else if(Aa(s),Ch(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var pe=v.dgst;v=pe,r=Error(a(419)),r.stack="",r.digest=v,wl({value:r,source:null,stack:null}),s=Yf(e,s,o)}else if(Gs||Dr(e,s,o,!1),v=(o&e.childLanes)!==0,Gs||v){if(v=ts,v!==null&&(r=xn(v,o),r!==0&&r!==Y.retryLane))throw Y.retryLane=r,Ja(e,r),ni(v,e,r),$f;Sh(T)||bu(),s=Yf(e,s,o)}else Sh(T)?(s.flags|=192,s.child=e.child,s=null):(e=Y.treeContext,ms=ki(T.nextSibling),bo=s,Sn=!0,Ca=null,Si=!1,e!==null&&n_(s,e),s=Vf(s,r.children),s.flags|=4096);return s}return f?(Da(),T=r.fallback,f=s.mode,Y=e.child,pe=Y.sibling,r=na(Y,{mode:"hidden",children:r.children}),r.subtreeFlags=Y.subtreeFlags&65011712,pe!==null?T=na(pe,T):(T=er(T,f,o,null),T.flags|=2),T.return=s,r.return=s,r.sibling=T,s.child=r,Bl(null,r),r=s.child,T=e.child.memoizedState,T===null?T=Hf(o):(f=T.cachePool,f!==null?(Y=Xs._currentValue,f=f.parent!==Y?{parent:Y,pool:Y}:f):f=l_(),T={baseLanes:T.baseLanes|o,cachePool:f}),r.memoizedState=T,r.childLanes=Uf(e,v,o),s.memoizedState=Pf,Bl(e.child,r)):(Aa(s),o=e.child,e=o.sibling,o=na(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Vf(e,s){return s=du({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function du(e,s){return e=li(22,e,null,s),e.lanes=0,e}function Yf(e,s,o){return rr(s,e.child,null,o),e=Vf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function vg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),of(e.return,s,o)}function Wf(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function wg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=$s.current,T=(v&2)!==0;if(T?(v=v&1|2,s.flags|=128):v&=1,Z($s,v),wo(e,s,r,o),r=Sn?vl:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vg(e,o,s);else if(e.tag===19)vg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&Jc(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Wf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Jc(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Wf(s,!0,o,null,m,r);break;case"together":Wf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function la(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ba|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Dr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=na(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=na(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Ff(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Wc(e)))}function x2(e,s,o){switch(s.tag){case 3:mt(s,s.stateNode.containerInfo),ja(s,Xs,e.memoizedState.cache),tr();break;case 27:case 5:ze(s);break;case 4:mt(s,s.stateNode.containerInfo);break;case 10:ja(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,gf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Aa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?bg(e,s,o):(Aa(s),e=la(e,s,o),e!==null?e.sibling:null);Aa(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Dr(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return wg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Z($s,$s.current),r)break;return null;case 22:return s.lanes=0,mg(e,s,o,s.pendingProps);case 24:ja(s,Xs,e.memoizedState.cache)}return la(e,s,o)}function Sg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Gs=!0;else{if(!Ff(e,o)&&(s.flags&128)===0)return Gs=!1,x2(e,s,o);Gs=(e.flags&131072)!==0}else Gs=!1,Sn&&(s.flags&1048576)!==0&&t_(s,vl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=ir(s.elementType),s.type=e,typeof e=="function")Kd(e)?(r=cr(e,r),s.tag=1,s=yg(null,s,e,r,o)):(s.tag=0,s=If(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===E){s.tag=11,s=dg(null,s,e,r,o);break e}else if(f===W){s.tag=14,s=fg(null,s,e,r,o);break e}}throw s=ee(e)||e,Error(a(306,s,""))}}return s;case 0:return If(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=cr(r,s.pendingProps),yg(e,s,r,f,o);case 3:e:{if(mt(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,ff(e,s),El(s,r,null,o);var v=s.memoizedState;if(r=v.cache,ja(s,Xs,r),r!==m.cache&&af(s,[Xs],o,!0),Tl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=xg(e,s,r,o);break e}else if(r!==f){f=bi(Error(a(424)),s),wl(f),s=xg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ms=ki(e.firstChild),bo=s,Sn=!0,Ca=null,Si=!0,o=m_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(tr(),r===f){s=la(e,s,o);break e}wo(e,s,r,o)}s=s.child}return s;case 26:return uu(e,s),e===null?(o=B0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Sn||(o=s.type,e=s.pendingProps,r=Mu(Ue.current).createElement(o),r[tn]=s,r[bn]=e,So(r,o,e),an(r),s.stateNode=r):s.memoizedState=B0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return ze(s),e===null&&Sn&&(r=s.stateNode=D0(s.type,s.pendingProps,Ue.current),bo=s,Si=!0,f=ms,Ia(s.type)?(kh=f,ms=ki(r.firstChild)):ms=f),wo(e,s,s.pendingProps.children,o),uu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Sn&&((f=r=ms)&&(r=G2(r,s.type,s.pendingProps,Si),r!==null?(s.stateNode=r,bo=s,ms=ki(r.firstChild),Si=!1,f=!0):f=!1),f||ka(s)),ze(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,bh(f,m)?r=null:v!==null&&bh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=xf(e,s,u2,null,null,o),Gl._currentValue=f),uu(e,s),wo(e,s,r,o),s.child;case 6:return e===null&&Sn&&((e=o=ms)&&(o=K2(o,s.pendingProps,Si),o!==null?(s.stateNode=o,bo=s,ms=null,e=!0):e=!1),e||ka(s)),null;case 13:return bg(e,s,o);case 4:return mt(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=rr(s,null,r,o):wo(e,s,r,o),s.child;case 11:return dg(e,s,s.type,s.pendingProps,o);case 7:return wo(e,s,s.pendingProps,o),s.child;case 8:return wo(e,s,s.pendingProps.children,o),s.child;case 12:return wo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,ja(s,s.type,r.value),wo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,sr(s),f=vo(f),r=r(f),s.flags|=1,wo(e,s,r,o),s.child;case 14:return fg(e,s,s.type,s.pendingProps,o);case 15:return hg(e,s,s.type,s.pendingProps,o);case 19:return wg(e,s,o);case 31:return y2(e,s,o);case 22:return mg(e,s,o,s.pendingProps);case 24:return sr(s),r=vo(Xs),e===null?(f=cf(),f===null&&(f=ts,m=rf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},df(s),ja(s,Xs,f)):((e.lanes&o)!==0&&(ff(e,s),El(s,null,null,o),Tl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ja(s,Xs,r)):(r=m.cache,ja(s,Xs,r),r!==f.cache&&af(s,[Xs],o,!0))),wo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ca(e){e.flags|=4}function Xf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw ar=Gc,uf}else e.flags&=-16777217}function Cg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I0(s))if(Kg())e.flags|=8192;else throw ar=Gc,uf}function fu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?$t():536870912,e.lanes|=s,Vr|=s)}function Ll(e,s){if(!Sn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ps(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function b2(e,s,o){var r=s.pendingProps;switch(ef(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ps(s),null;case 1:return ps(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ia(Xs),et(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ar(s)?ca(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,nf())),ps(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ca(s),m!==null?(ps(s),Cg(s,m)):(ps(s),Xf(s,f,null,r,o))):m?m!==e.memoizedState?(ca(s),ps(s),Cg(s,m)):(ps(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ca(s),ps(s),Xf(s,f,e,r,o)),null;case 27:if(ct(s),o=Ue.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ca(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ps(s),null}e=he.current,Ar(s)?s_(s):(e=D0(f,r,o),s.stateNode=e,ca(s))}return ps(s),null;case 5:if(ct(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ca(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ps(s),null}if(m=he.current,Ar(s))s_(s);else{var v=Mu(Ue.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[tn]=s,m[bn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(So(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ca(s)}}return ps(s),Xf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ca(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ue.current,Ar(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=bo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[tn]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||b0(e.nodeValue,o)),e||ka(s,!0)}else e=Mu(e).createTextNode(r),e[tn]=s,s.stateNode=e}return ps(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=Ar(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[tn]=s}else tr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ps(s),e=!1}else o=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(ui(s),s):(ui(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ps(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Ar(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[tn]=s}else tr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ps(s),f=!1}else f=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(ui(s),s):(ui(s),null)}return ui(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),fu(s,s.updateQueue),ps(s),null);case 4:return et(),e===null&&ph(s.stateNode.containerInfo),ps(s),null;case 10:return ia(s.type),ps(s),null;case 19:if(ce($s),r=s.memoizedState,r===null)return ps(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Ll(r,!1);else{if(Ds!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=Jc(e),m!==null){for(s.flags|=128,Ll(r,!1),e=m.updateQueue,s.updateQueue=e,fu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Zp(o,e),o=o.sibling;return Z($s,$s.current&1|2),Sn&&sa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&dt()>gu&&(s.flags|=128,f=!0,Ll(r,!1),s.lanes=4194304)}else{if(!f)if(e=Jc(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,fu(s,e),Ll(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Sn)return ps(s),null}else 2*dt()-r.renderingStartTime>gu&&o!==536870912&&(s.flags|=128,f=!0,Ll(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=dt(),e.sibling=null,o=$s.current,Z($s,f?o&1|2:o&1),Sn&&sa(s,r.treeForkCount),e):(ps(s),null);case 22:case 23:return ui(s),_f(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(ps(s),s.subtreeFlags&6&&(s.flags|=8192)):ps(s),o=s.updateQueue,o!==null&&fu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ce(or),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ia(Xs),ps(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function v2(e,s){switch(ef(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ia(Xs),et(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return ct(s),null;case 31:if(s.memoizedState!==null){if(ui(s),s.alternate===null)throw Error(a(340));tr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(ui(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));tr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ce($s),null;case 4:return et(),null;case 10:return ia(s.type),null;case 22:case 23:return ui(s),_f(),e!==null&&ce(or),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ia(Xs),null;case 25:return null;default:return null}}function kg(e,s){switch(ef(s),s.tag){case 3:ia(Xs),et();break;case 26:case 27:case 5:ct(s);break;case 4:et();break;case 31:s.memoizedState!==null&&ui(s);break;case 13:ui(s);break;case 19:ce($s);break;case 10:ia(s.type);break;case 22:case 23:ui(s),_f(),e!==null&&ce(or);break;case 24:ia(Xs)}}function Ol(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(T){Pn(s,s.return,T)}}function Na(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=s;var Y=o,pe=T;try{pe()}catch(Ce){Pn(f,Y,Ce)}}}r=r.next}while(r!==m)}}catch(Ce){Pn(s,s.return,Ce)}}function jg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{__(s,o)}catch(r){Pn(e,e.return,r)}}}function Mg(e,s,o){o.props=cr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Pn(e,s,r)}}function zl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Pn(e,s,f)}}function Xi(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Pn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Pn(e,s,f)}else o.current=null}function Tg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Pn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;V2(r,e.type,o,s),r[bn]=s}catch(f){Pn(e,e.return,f)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Os));else if(r!==4&&(r===27&&Ia(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Kf(e,s,o),e=e.sibling;e!==null;)Kf(e,s,o),e=e.sibling}function hu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ia(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(hu(e,s,o),e=e.sibling;e!==null;)hu(e,s,o),e=e.sibling}function Ag(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);So(s,r,o),s[tn]=e,s[bn]=o}catch(m){Pn(e,e.return,m)}}var ua=!1,Ks=!1,Qf=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,mo=null;function w2(e,s){if(e=e.containerInfo,yh=Bu,e=Cn(e),zn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,T=-1,Y=-1,pe=0,Ce=0,Re=e,ye=null;t:for(;;){for(var be;Re!==o||f!==0&&Re.nodeType!==3||(T=v+f),Re!==m||r!==0&&Re.nodeType!==3||(Y=v+r),Re.nodeType===3&&(v+=Re.nodeValue.length),(be=Re.firstChild)!==null;)ye=Re,Re=be;for(;;){if(Re===e)break t;if(ye===o&&++pe===f&&(T=v),ye===m&&++Ce===r&&(Y=v),(be=Re.nextSibling)!==null)break;Re=ye,ye=Re.parentNode}Re=be}o=T===-1||Y===-1?null:{start:T,end:Y}}else o=null}o=o||{start:0,end:0}}else o=null;for(xh={focusedElem:e,selectionRange:o},Bu=!1,mo=s;mo!==null;)if(s=mo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,mo=e;else for(;mo!==null;){switch(s=mo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Et=cr(o.type,f);e=r.getSnapshotBeforeUpdate(Et,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Wt){Pn(o,o.return,Wt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)wh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,mo=e;break}mo=s.return}}function Ng(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:fa(e,o),r&4&&Ol(5,o);break;case 1:if(fa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Pn(o,o.return,v)}else{var f=cr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Pn(o,o.return,v)}}r&64&&jg(o),r&512&&zl(o,o.return);break;case 3:if(fa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{__(e,s)}catch(v){Pn(o,o.return,v)}}break;case 27:s===null&&r&4&&Ag(o);case 26:case 5:fa(e,o),s===null&&r&4&&Tg(o),r&512&&zl(o,o.return);break;case 12:fa(e,o);break;case 31:fa(e,o),r&4&&Lg(e,o);break;case 13:fa(e,o),r&4&&Og(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=D2.bind(null,o),Q2(e,o))));break;case 22:if(r=o.memoizedState!==null||ua,!r){s=s!==null&&s.memoizedState!==null||Ks,f=ua;var m=Ks;ua=r,(Ks=s)&&!m?ha(e,o,(o.subtreeFlags&8772)!==0):fa(e,o),ua=f,Ks=m}break;case 30:break;default:fa(e,o)}}function Rg(e){var s=e.alternate;s!==null&&(e.alternate=null,Rg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ro(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xs=null,Zo=!1;function da(e,s,o){for(o=o.child;o!==null;)Bg(e,s,o),o=o.sibling}function Bg(e,s,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Ye,o)}catch{}switch(o.tag){case 26:Ks||Xi(o,s),da(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ks||Xi(o,s);var r=xs,f=Zo;Ia(o.type)&&(xs=o.stateNode,Zo=!1),da(e,s,o),Fl(o.stateNode),xs=r,Zo=f;break;case 5:Ks||Xi(o,s);case 6:if(r=xs,f=Zo,xs=null,da(e,s,o),xs=r,Zo=f,xs!==null)if(Zo)try{(xs.nodeType===9?xs.body:xs.nodeName==="HTML"?xs.ownerDocument.body:xs).removeChild(o.stateNode)}catch(m){Pn(o,s,m)}else try{xs.removeChild(o.stateNode)}catch(m){Pn(o,s,m)}break;case 18:xs!==null&&(Zo?(e=xs,j0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),Qr(e)):j0(xs,o.stateNode));break;case 4:r=xs,f=Zo,xs=o.stateNode.containerInfo,Zo=!0,da(e,s,o),xs=r,Zo=f;break;case 0:case 11:case 14:case 15:Na(2,o,s),Ks||Na(4,o,s),da(e,s,o);break;case 1:Ks||(Xi(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Mg(o,s,r)),da(e,s,o);break;case 21:da(e,s,o);break;case 22:Ks=(r=Ks)||o.memoizedState!==null,da(e,s,o),Ks=r;break;default:da(e,s,o)}}function Lg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(o){Pn(s,s.return,o)}}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(o){Pn(s,s.return,o)}}function S2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Dg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Dg),s;default:throw Error(a(435,e.tag))}}function mu(e,s){var o=S2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=N2.bind(null,e,r);r.then(f,f)}})}function Jo(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ia(T.type)){xs=T.stateNode,Zo=!1;break e}break;case 5:xs=T.stateNode,Zo=!1;break e;case 3:case 4:xs=T.stateNode.containerInfo,Zo=!0;break e}T=T.return}if(xs===null)throw Error(a(160));Bg(m,v,f),xs=null,Zo=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)zg(s,e),s=s.sibling}var Oi=null;function zg(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jo(s,e),ei(e),r&4&&(Na(3,e,e.return),Ol(3,e),Na(5,e,e.return));break;case 1:Jo(s,e),ei(e),r&512&&(Ks||o===null||Xi(o,o.return)),r&64&&ua&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Oi;if(Jo(s,e),ei(e),r&512&&(Ks||o===null||Xi(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Rs]||m[tn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),So(m,r,o),m[tn]=e,an(m),r=m;break e;case"link":var v=z0("link","href",f).get(r+(o.href||""));if(v){for(var T=0;T<v.length;T++)if(m=v[T],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(T,1);break t}}m=f.createElement(r),So(m,r,o),f.head.appendChild(m);break;case"meta":if(v=z0("meta","content",f).get(r+(o.content||""))){for(T=0;T<v.length;T++)if(m=v[T],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(T,1);break t}}m=f.createElement(r),So(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[tn]=e,an(m),r=m}e.stateNode=r}else $0(f,e.type,e.stateNode);else e.stateNode=O0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?$0(f,e.type,e.stateNode):O0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:Jo(s,e),ei(e),r&512&&(Ks||o===null||Xi(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(Jo(s,e),ei(e),r&512&&(Ks||o===null||Xi(o,o.return)),e.flags&32){f=e.stateNode;try{Mo(f,"")}catch(Et){Pn(e,e.return,Et)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Qf=!0);break;case 6:if(Jo(s,e),ei(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Et){Pn(e,e.return,Et)}}break;case 3:if(Au=null,f=Oi,Oi=Tu(s.containerInfo),Jo(s,e),Oi=f,ei(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{Qr(s.containerInfo)}catch(Et){Pn(e,e.return,Et)}Qf&&(Qf=!1,$g(e));break;case 4:r=Oi,Oi=Tu(e.stateNode.containerInfo),Jo(s,e),ei(e),Oi=r;break;case 12:Jo(s,e),ei(e);break;case 31:Jo(s,e),ei(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,mu(e,r)));break;case 13:Jo(s,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(_u=dt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,mu(e,r)));break;case 22:f=e.memoizedState!==null;var Y=o!==null&&o.memoizedState!==null,pe=ua,Ce=Ks;if(ua=pe||f,Ks=Ce||Y,Jo(s,e),Ks=Ce,ua=pe,ei(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Y||ua||Ks||ur(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Y=o=s;try{if(m=Y.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=Y.stateNode;var Re=Y.memoizedProps.style,ye=Re!=null&&Re.hasOwnProperty("display")?Re.display:null;T.style.display=ye==null||typeof ye=="boolean"?"":(""+ye).trim()}}catch(Et){Pn(Y,Y.return,Et)}}}else if(s.tag===6){if(o===null){Y=s;try{Y.stateNode.nodeValue=f?"":Y.memoizedProps}catch(Et){Pn(Y,Y.return,Et)}}}else if(s.tag===18){if(o===null){Y=s;try{var be=Y.stateNode;f?M0(be,!0):M0(Y.stateNode,!1)}catch(Et){Pn(Y,Y.return,Et)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,mu(e,o))));break;case 19:Jo(s,e),ei(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,mu(e,r)));break;case 30:break;case 21:break;default:Jo(s,e),ei(e)}}function ei(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Eg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Gf(e);hu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Mo(v,""),o.flags&=-33);var T=Gf(e);hu(e,T,v);break;case 3:case 4:var Y=o.stateNode.containerInfo,pe=Gf(e);Kf(e,pe,Y);break;default:throw Error(a(161))}}catch(Ce){Pn(e,e.return,Ce)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function $g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;$g(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function fa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Ng(e,s.alternate,s),s=s.sibling}function ur(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Na(4,s,s.return),ur(s);break;case 1:Xi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Mg(s,s.return,o),ur(s);break;case 27:Fl(s.stateNode);case 26:case 5:Xi(s,s.return),ur(s);break;case 22:s.memoizedState===null&&ur(s);break;case 30:ur(s);break;default:ur(s)}e=e.sibling}}function ha(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:ha(f,m,o),Ol(4,m);break;case 1:if(ha(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(pe){Pn(r,r.return,pe)}if(r=m,f=r.updateQueue,f!==null){var T=r.stateNode;try{var Y=f.shared.hiddenCallbacks;if(Y!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Y.length;f++)p_(Y[f],T)}catch(pe){Pn(r,r.return,pe)}}o&&v&64&&jg(m),zl(m,m.return);break;case 27:Ag(m);case 26:case 5:ha(f,m,o),o&&r===null&&v&4&&Tg(m),zl(m,m.return);break;case 12:ha(f,m,o);break;case 31:ha(f,m,o),o&&v&4&&Lg(f,m);break;case 13:ha(f,m,o),o&&v&4&&Og(f,m);break;case 22:m.memoizedState===null&&ha(f,m,o),zl(m,m.return);break;case 30:break;default:ha(f,m,o)}s=s.sibling}}function Zf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Sl(o))}function Jf(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Sl(e))}function zi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Ig(e,s,o,r),s=s.sibling}function Ig(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:zi(e,s,o,r),f&2048&&Ol(9,s);break;case 1:zi(e,s,o,r);break;case 3:zi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Sl(e)));break;case 12:if(f&2048){zi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,T=m.onPostCommit;typeof T=="function"&&T(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Y){Pn(s,s.return,Y)}}else zi(e,s,o,r);break;case 31:zi(e,s,o,r);break;case 13:zi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?zi(e,s,o,r):$l(e,s):m._visibility&2?zi(e,s,o,r):(m._visibility|=2,Pr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Zf(v,s);break;case 24:zi(e,s,o,r),f&2048&&Jf(s.alternate,s);break;default:zi(e,s,o,r)}}function Pr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,T=o,Y=r,pe=v.flags;switch(v.tag){case 0:case 11:case 15:Pr(m,v,T,Y,f),Ol(8,v);break;case 23:break;case 22:var Ce=v.stateNode;v.memoizedState!==null?Ce._visibility&2?Pr(m,v,T,Y,f):$l(m,v):(Ce._visibility|=2,Pr(m,v,T,Y,f)),f&&pe&2048&&Zf(v.alternate,v);break;case 24:Pr(m,v,T,Y,f),f&&pe&2048&&Jf(v.alternate,v);break;default:Pr(m,v,T,Y,f)}s=s.sibling}}function $l(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:$l(o,r),f&2048&&Zf(r.alternate,r);break;case 24:$l(o,r),f&2048&&Jf(r.alternate,r);break;default:$l(o,r)}s=s.sibling}}var Il=8192;function Hr(e,s,o){if(e.subtreeFlags&Il)for(e=e.child;e!==null;)Pg(e,s,o),e=e.sibling}function Pg(e,s,o){switch(e.tag){case 26:Hr(e,s,o),e.flags&Il&&e.memoizedState!==null&&cv(o,Oi,e.memoizedState,e.memoizedProps);break;case 5:Hr(e,s,o);break;case 3:case 4:var r=Oi;Oi=Tu(e.stateNode.containerInfo),Hr(e,s,o),Oi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Il,Il=16777216,Hr(e,s,o),Il=r):Hr(e,s,o));break;default:Hr(e,s,o)}}function Hg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Pl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];mo=r,Vg(r,e)}Hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,pu(e)):Pl(e);break;default:Pl(e)}}function pu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];mo=r,Vg(r,e)}Hg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Na(8,s,s.return),pu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,pu(s));break;default:pu(s)}e=e.sibling}}function Vg(e,s){for(;mo!==null;){var o=mo;switch(o.tag){case 0:case 11:case 15:Na(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Sl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,mo=r;else e:for(o=e;mo!==null;){r=mo;var f=r.sibling,m=r.return;if(Rg(r),r===o){mo=null;break e}if(f!==null){f.return=m,mo=f;break e}mo=m}}}var C2={getCacheForType:function(e){var s=vo(Xs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return vo(Xs).controller.signal}},k2=typeof WeakMap=="function"?WeakMap:Map,Bn=0,ts=null,pn=null,gn=0,In=0,di=null,Ra=!1,Ur=!1,eh=!1,ma=0,Ds=0,Ba=0,dr=0,th=0,fi=0,Vr=0,Hl=null,ti=null,nh=!1,_u=0,Yg=0,gu=1/0,yu=null,La=null,so=0,Oa=null,Yr=null,pa=0,sh=0,oh=null,Wg=null,Ul=0,ih=null;function hi(){return(Bn&2)!==0&&gn!==0?gn&-gn:L.T!==null?dh():ss()}function Fg(){if(fi===0)if((gn&536870912)===0||Sn){var e=vt;vt<<=1,(vt&3932160)===0&&(vt=262144),fi=e}else fi=536870912;return e=ci.current,e!==null&&(e.flags|=32),fi}function ni(e,s,o){(e===ts&&(In===2||In===9)||e.cancelPendingCommit!==null)&&(Wr(e,0),za(e,gn,fi,!1)),xt(e,o),((Bn&2)===0||e!==ts)&&(e===ts&&((Bn&2)===0&&(dr|=o),Ds===4&&za(e,gn,fi,!1)),qi(e))}function Xg(e,s,o){if((Bn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||yt(e,s),f=r?T2(e,s):rh(e,s,!0),m=r;do{if(f===0){Ur&&!r&&za(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!j2(o)){f=rh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var T=e;f=Hl;var Y=T.current.memoizedState.isDehydrated;if(Y&&(Wr(T,v).flags|=256),v=rh(T,v,!1),v!==2){if(eh&&!Y){T.errorRecoveryDisabledLanes|=m,dr|=m,f=4;break e}m=ti,ti=f,m!==null&&(ti===null?ti=m:ti.push.apply(ti,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Wr(e,0),za(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:za(r,s,fi,!Ra);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=_u+300-dt(),10<f)){if(za(r,s,fi,!Ra),Ke(r,0,!0)!==0)break e;pa=s,r.timeoutHandle=C0(qg.bind(null,r,o,ti,yu,nh,s,fi,dr,Vr,Ra,m,"Throttled",-0,0),f);break e}qg(r,o,ti,yu,nh,s,fi,dr,Vr,Ra,m,null,-0,0)}}break}while(!0);qi(e)}function qg(e,s,o,r,f,m,v,T,Y,pe,Ce,Re,ye,be){if(e.timeoutHandle=-1,Re=s.subtreeFlags,Re&8192||(Re&16785408)===16785408){Re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Os},Pg(s,m,Re);var Et=(m&62914560)===m?_u-dt():(m&4194048)===m?Yg-dt():0;if(Et=uv(Re,Et),Et!==null){pa=m,e.cancelPendingCommit=Et(n0.bind(null,e,s,m,o,r,f,v,T,Y,Ce,Re,null,ye,be)),za(e,m,v,!pe);return}}n0(e,s,m,o,r,f,v,T,Y)}function j2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!jt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function za(e,s,o,r){s&=~th,s&=~dr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-bt(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&On(e,o,s)}function xu(){return(Bn&6)===0?(Vl(0),!1):!0}function ah(){if(pn!==null){if(In===0)var e=pn.return;else e=pn,oa=nr=null,wf(e),Lr=null,kl=0,e=pn;for(;e!==null;)kg(e.alternate,e),e=e.return;pn=null}}function Wr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,F2(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),pa=0,ah(),ts=e,pn=o=na(e.current,null),gn=s,In=0,di=null,Ra=!1,Ur=yt(e,s),eh=!1,Vr=fi=th=dr=Ba=Ds=0,ti=Hl=null,nh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-bt(r),m=1<<f;s|=e[f],r&=~m}return ma=s,Pc(),o}function Gg(e,s){ln=null,L.H=Rl,s===Br||s===qc?(s=d_(),In=3):s===uf?(s=d_(),In=4):In=s===$f?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,di=s,pn===null&&(Ds=1,lu(e,bi(s,e.current)))}function Kg(){var e=ci.current;return e===null?!0:(gn&4194048)===gn?Ci===null:(gn&62914560)===gn||(gn&536870912)!==0?e===Ci:!1}function Qg(){var e=L.H;return L.H=Rl,e===null?Rl:e}function Zg(){var e=L.A;return L.A=C2,e}function bu(){Ds=4,Ra||(gn&4194048)!==gn&&ci.current!==null||(Ur=!0),(Ba&134217727)===0&&(dr&134217727)===0||ts===null||za(ts,gn,fi,!1)}function rh(e,s,o){var r=Bn;Bn|=2;var f=Qg(),m=Zg();(ts!==e||gn!==s)&&(yu=null,Wr(e,s)),s=!1;var v=Ds;e:do try{if(In!==0&&pn!==null){var T=pn,Y=di;switch(In){case 8:ah(),v=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(s=!0);var pe=In;if(In=0,di=null,Fr(e,T,Y,pe),o&&Ur){v=0;break e}break;default:pe=In,In=0,di=null,Fr(e,T,Y,pe)}}M2(),v=Ds;break}catch(Ce){Gg(e,Ce)}while(!0);return s&&e.shellSuspendCounter++,oa=nr=null,Bn=r,L.H=f,L.A=m,pn===null&&(ts=null,gn=0,Pc()),v}function M2(){for(;pn!==null;)Jg(pn)}function T2(e,s){var o=Bn;Bn|=2;var r=Qg(),f=Zg();ts!==e||gn!==s?(yu=null,gu=dt()+500,Wr(e,s)):Ur=yt(e,s);e:do try{if(In!==0&&pn!==null){s=pn;var m=di;t:switch(In){case 1:In=0,di=null,Fr(e,s,m,1);break;case 2:case 9:if(c_(m)){In=0,di=null,e0(s);break}s=function(){In!==2&&In!==9||ts!==e||(In=7),qi(e)},m.then(s,s);break e;case 3:In=7;break e;case 4:In=5;break e;case 7:c_(m)?(In=0,di=null,e0(s)):(In=0,di=null,Fr(e,s,m,7));break;case 5:var v=null;switch(pn.tag){case 26:v=pn.memoizedState;case 5:case 27:var T=pn;if(v?I0(v):T.stateNode.complete){In=0,di=null;var Y=T.sibling;if(Y!==null)pn=Y;else{var pe=T.return;pe!==null?(pn=pe,vu(pe)):pn=null}break t}}In=0,di=null,Fr(e,s,m,5);break;case 6:In=0,di=null,Fr(e,s,m,6);break;case 8:ah(),Ds=6;break e;default:throw Error(a(462))}}E2();break}catch(Ce){Gg(e,Ce)}while(!0);return oa=nr=null,L.H=r,L.A=f,Bn=o,pn!==null?0:(ts=null,gn=0,Pc(),Ds)}function E2(){for(;pn!==null&&!ht();)Jg(pn)}function Jg(e){var s=Sg(e.alternate,e,ma);e.memoizedProps=e.pendingProps,s===null?vu(e):pn=s}function e0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=gg(o,s,s.pendingProps,s.type,void 0,gn);break;case 11:s=gg(o,s,s.pendingProps,s.type.render,s.ref,gn);break;case 5:wf(s);default:kg(o,s),s=pn=Zp(s,ma),s=Sg(o,s,ma)}e.memoizedProps=e.pendingProps,s===null?vu(e):pn=s}function Fr(e,s,o,r){oa=nr=null,wf(s),Lr=null,kl=0;var f=s.return;try{if(g2(e,f,s,o,gn)){Ds=1,lu(e,bi(o,e.current)),pn=null;return}}catch(m){if(f!==null)throw pn=f,m;Ds=1,lu(e,bi(o,e.current)),pn=null;return}s.flags&32768?(Sn||r===1?e=!0:Ur||(gn&536870912)!==0?e=!1:(Ra=e=!0,(r===2||r===9||r===3||r===6)&&(r=ci.current,r!==null&&r.tag===13&&(r.flags|=16384))),t0(s,e)):vu(s)}function vu(e){var s=e;do{if((s.flags&32768)!==0){t0(s,Ra);return}e=s.return;var o=b2(s.alternate,s,ma);if(o!==null){pn=o;return}if(s=s.sibling,s!==null){pn=s;return}pn=s=e}while(s!==null);Ds===0&&(Ds=5)}function t0(e,s){do{var o=v2(e.alternate,e);if(o!==null){o.flags&=32767,pn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){pn=e;return}pn=e=o}while(e!==null);Ds=6,pn=null}function n0(e,s,o,r,f,m,v,T,Y){e.cancelPendingCommit=null;do wu();while(so!==0);if((Bn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Xt(e,o,m,v,T,Y),e===ts&&(pn=ts=null,gn=0),Yr=s,Oa=e,pa=o,sh=m,oh=f,Wg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R2(tt,function(){return r0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,f=ne.p,ne.p=2,v=Bn,Bn|=4;try{w2(e,s,o)}finally{Bn=v,ne.p=f,L.T=r}}so=1,s0(),o0(),i0()}}function s0(){if(so===1){so=0;var e=Oa,s=Yr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=L.T,L.T=null;var r=ne.p;ne.p=2;var f=Bn;Bn|=4;try{zg(s,e);var m=xh,v=Cn(e.containerInfo),T=m.focusedElem,Y=m.selectionRange;if(v!==T&&T&&T.ownerDocument&&fs(T.ownerDocument.documentElement,T)){if(Y!==null&&zn(T)){var pe=Y.start,Ce=Y.end;if(Ce===void 0&&(Ce=pe),"selectionStart"in T)T.selectionStart=pe,T.selectionEnd=Math.min(Ce,T.value.length);else{var Re=T.ownerDocument||document,ye=Re&&Re.defaultView||window;if(ye.getSelection){var be=ye.getSelection(),Et=T.textContent.length,Wt=Math.min(Y.start,Et),Wn=Y.end===void 0?Wt:Math.min(Y.end,Et);!be.extend&&Wt>Wn&&(v=Wn,Wn=Wt,Wt=v);var de=ds(T,Wt),J=ds(T,Wn);if(de&&J&&(be.rangeCount!==1||be.anchorNode!==de.node||be.anchorOffset!==de.offset||be.focusNode!==J.node||be.focusOffset!==J.offset)){var me=Re.createRange();me.setStart(de.node,de.offset),be.removeAllRanges(),Wt>Wn?(be.addRange(me),be.extend(J.node,J.offset)):(me.setEnd(J.node,J.offset),be.addRange(me))}}}}for(Re=[],be=T;be=be.parentNode;)be.nodeType===1&&Re.push({element:be,left:be.scrollLeft,top:be.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Re.length;T++){var De=Re[T];De.element.scrollLeft=De.left,De.element.scrollTop=De.top}}Bu=!!yh,xh=yh=null}finally{Bn=f,ne.p=r,L.T=o}}e.current=s,so=2}}function o0(){if(so===2){so=0;var e=Oa,s=Yr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=L.T,L.T=null;var r=ne.p;ne.p=2;var f=Bn;Bn|=4;try{Ng(e,s.alternate,s)}finally{Bn=f,ne.p=r,L.T=o}}so=3}}function i0(){if(so===4||so===3){so=0,ut();var e=Oa,s=Yr,o=pa,r=Wg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?so=5:(so=0,Yr=Oa=null,a0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(La=null),as(o),s=s.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Ye,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=L.T,f=ne.p,ne.p=2,L.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var T=r[v];m(T.value,{componentStack:T.stack})}}finally{L.T=s,ne.p=f}}(pa&3)!==0&&wu(),qi(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ih?Ul++:(Ul=0,ih=e):Ul=0,Vl(0)}}function a0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Sl(s)))}function wu(){return s0(),o0(),i0(),r0()}function r0(){if(so!==5)return!1;var e=Oa,s=sh;sh=0;var o=as(pa),r=L.T,f=ne.p;try{ne.p=32>o?32:o,L.T=null,o=oh,oh=null;var m=Oa,v=pa;if(so=0,Yr=Oa=null,pa=0,(Bn&6)!==0)throw Error(a(331));var T=Bn;if(Bn|=4,Ug(m.current),Ig(m,m.current,v,o),Bn=T,Vl(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Ye,m)}catch{}return!0}finally{ne.p=f,L.T=r,a0(e,s)}}function l0(e,s,o){s=bi(o,s),s=zf(e.stateNode,s,2),e=Ea(e,s,2),e!==null&&(xt(e,2),qi(e))}function Pn(e,s,o){if(e.tag===3)l0(e,e,o);else for(;s!==null;){if(s.tag===3){l0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(La===null||!La.has(r))){e=bi(o,e),o=cg(2),r=Ea(s,o,2),r!==null&&(ug(o,r,s,e),xt(r,2),qi(r));break}}s=s.return}}function lh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new k2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(eh=!0,f.add(o),e=A2.bind(null,e,s,o),s.then(e,e))}function A2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,ts===e&&(gn&o)===o&&(Ds===4||Ds===3&&(gn&62914560)===gn&&300>dt()-_u?(Bn&2)===0&&Wr(e,0):th|=o,Vr===gn&&(Vr=0)),qi(e)}function c0(e,s){s===0&&(s=$t()),e=Ja(e,s),e!==null&&(xt(e,s),qi(e))}function D2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),c0(e,o)}function N2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),c0(e,o)}function R2(e,s){return Ze(e,s)}var Su=null,Xr=null,ch=!1,Cu=!1,uh=!1,$a=0;function qi(e){e!==Xr&&e.next===null&&(Xr===null?Su=Xr=e:Xr=Xr.next=e),Cu=!0,ch||(ch=!0,L2())}function Vl(e,s){if(!uh&&Cu){uh=!0;do for(var o=!1,r=Su;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,T=r.pingedLanes;m=(1<<31-bt(42|e)+1)-1,m&=f&~(v&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,h0(r,m))}else m=gn,m=Ke(r,r===ts?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||yt(r,m)||(o=!0,h0(r,m));r=r.next}while(o);uh=!1}}function B2(){u0()}function u0(){Cu=ch=!1;var e=0;$a!==0&&W2()&&(e=$a);for(var s=dt(),o=null,r=Su;r!==null;){var f=r.next,m=d0(r,s);m===0?(r.next=null,o===null?Su=f:o.next=f,f===null&&(Xr=o)):(o=r,(e!==0||(m&3)!==0)&&(Cu=!0)),r=f}so!==0&&so!==5||Vl(e),$a!==0&&($a=0)}function d0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-bt(m),T=1<<v,Y=f[v];Y===-1?((T&o)===0||(T&r)!==0)&&(f[v]=_t(T,s)):Y<=s&&(e.expiredLanes|=T),m&=~T}if(s=ts,o=gn,o=Ke(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(In===2||In===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ie(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||yt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Ie(r),as(o)){case 2:case 8:o=Vt;break;case 32:o=tt;break;case 268435456:o=te;break;default:o=tt}return r=f0.bind(null,e),o=Ze(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Ie(r),e.callbackPriority=2,e.callbackNode=null,2}function f0(e,s){if(so!==0&&so!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(wu()&&e.callbackNode!==o)return null;var r=gn;return r=Ke(e,e===ts?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Xg(e,r,s),d0(e,dt()),e.callbackNode!=null&&e.callbackNode===o?f0.bind(null,e):null)}function h0(e,s){if(wu())return null;Xg(e,s,!0)}function L2(){X2(function(){(Bn&6)!==0?Ze(rt,B2):u0()})}function dh(){if($a===0){var e=Nr;e===0&&(e=We,We<<=1,(We&261888)===0&&(We=256)),$a=e}return $a}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Io(""+e)}function p0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function O2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=m0((f[bn]||null).action),v=r.submitter;v&&(s=(s=v[bn]||null)?m0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var T=new se("action","action",null,r,f);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if($a!==0){var Y=v?p0(f,v):new FormData(f);Df(o,{pending:!0,data:Y,method:f.method,action:m},null,Y)}}else typeof m=="function"&&(T.preventDefault(),Y=v?p0(f,v):new FormData(f),Df(o,{pending:!0,data:Y,method:f.method,action:m},m,Y))},currentTarget:f}]})}}for(var fh=0;fh<Xd.length;fh++){var hh=Xd[fh],z2=hh.toLowerCase(),$2=hh[0].toUpperCase()+hh.slice(1);Li(z2,"on"+$2)}Li(Bi,"onAnimationEnd"),Li(Yi,"onAnimationIteration"),Li($c,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(Yd,"onTransitionRun"),Li(Wd,"onTransitionStart"),Li(Fd,"onTransitionCancel"),Li(Gp,"onTransitionEnd"),qn("onMouseEnter",["mouseout","mouseover"]),qn("onMouseLeave",["mouseout","mouseover"]),qn("onPointerEnter",["pointerout","pointerover"]),qn("onPointerLeave",["pointerout","pointerover"]),Js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Js("onBeforeInput",["compositionend","keypress","textInput","paste"]),Js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function _0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var T=r[v],Y=T.instance,pe=T.currentTarget;if(T=T.listener,Y!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=pe;try{m(f)}catch(Ce){Ic(Ce)}f.currentTarget=null,m=Y}else for(v=0;v<r.length;v++){if(T=r[v],Y=T.instance,pe=T.currentTarget,T=T.listener,Y!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=pe;try{m(f)}catch(Ce){Ic(Ce)}f.currentTarget=null,m=Y}}}}function _n(e,s){var o=s[En];o===void 0&&(o=s[En]=new Set);var r=e+"__bubble";o.has(r)||(g0(s,e,2,!1),o.add(r))}function mh(e,s,o){var r=0;s&&(r|=4),g0(o,e,r,s)}var ku="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[ku]){e[ku]=!0,ii.forEach(function(o){o!=="selectionchange"&&(I2.has(o)||mh(o,!1,e),mh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[ku]||(s[ku]=!0,mh("selectionchange",!1,s))}}function g0(e,s,o,r){switch(F0(s)){case 2:var f=hv;break;case 8:f=mv;break;default:f=Ah}o=f.bind(null,s,o,e),f=void 0,!Fs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function _h(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=r.return;v!==null;){var Y=v.tag;if((Y===3||Y===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=lo(T),v===null)return;if(Y=v.tag,Y===5||Y===6||Y===26||Y===27){r=m=v;continue e}T=T.parentNode}}r=r.return}Qn(function(){var pe=m,Ce=js(o),Re=[];e:{var ye=Kp.get(e);if(ye!==void 0){var be=se,Et=e;switch(e){case"keypress":if(Ts(o)===0)break e;case"keydown":case"keyup":be=ri;break;case"focusin":Et="focus",be=Ge;break;case"focusout":Et="blur",be=Ge;break;case"beforeblur":case"afterblur":be=Ge;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Ae;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=Nt;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=Vi;break;case Bi:case Yi:case $c:be=Rt;break;case Gp:be=Ho;break;case"scroll":case"scrollend":be=_e;break;case"wheel":be=Be;break;case"copy":case"cut":case"paste":be=fn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=Jn;break;case"toggle":case"beforetoggle":be=wt}var Wt=(s&4)!==0,Wn=!Wt&&(e==="scroll"||e==="scrollend"),de=Wt?ye!==null?ye+"Capture":null:ye;Wt=[];for(var J=pe,me;J!==null;){var De=J;if(me=De.stateNode,De=De.tag,De!==5&&De!==26&&De!==27||me===null||de===null||(De=nn(J,de),De!=null&&Wt.push(Wl(J,De,me))),Wn)break;J=J.return}0<Wt.length&&(ye=new be(ye,Et,null,o,Ce),Re.push({event:ye,listeners:Wt}))}}if((s&7)===0){e:{if(ye=e==="mouseover"||e==="pointerover",be=e==="mouseout"||e==="pointerout",ye&&o!==To&&(Et=o.relatedTarget||o.fromElement)&&(lo(Et)||Et[nt]))break e;if((be||ye)&&(ye=Ce.window===Ce?Ce:(ye=Ce.ownerDocument)?ye.defaultView||ye.parentWindow:window,be?(Et=o.relatedTarget||o.toElement,be=pe,Et=Et?lo(Et):null,Et!==null&&(Wn=u(Et),Wt=Et.tag,Et!==Wn||Wt!==5&&Wt!==27&&Wt!==6)&&(Et=null)):(be=null,Et=pe),be!==Et)){if(Wt=Ae,De="onMouseLeave",de="onMouseEnter",J="mouse",(e==="pointerout"||e==="pointerover")&&(Wt=Jn,De="onPointerLeave",de="onPointerEnter",J="pointer"),Wn=be==null?ye:gs(be),me=Et==null?ye:gs(Et),ye=new Wt(De,J+"leave",be,o,Ce),ye.target=Wn,ye.relatedTarget=me,De=null,lo(Ce)===pe&&(Wt=new Wt(de,J+"enter",Et,o,Ce),Wt.target=me,Wt.relatedTarget=Wn,De=Wt),Wn=De,be&&Et)t:{for(Wt=P2,de=be,J=Et,me=0,De=de;De;De=Wt(De))me++;De=0;for(var Ht=J;Ht;Ht=Wt(Ht))De++;for(;0<me-De;)de=Wt(de),me--;for(;0<De-me;)J=Wt(J),De--;for(;me--;){if(de===J||J!==null&&de===J.alternate){Wt=de;break t}de=Wt(de),J=Wt(J)}Wt=null}else Wt=null;be!==null&&y0(Re,ye,be,Wt,!1),Et!==null&&Wn!==null&&y0(Re,Wn,Et,Wt,!0)}}e:{if(ye=pe?gs(pe):window,be=ye.nodeName&&ye.nodeName.toLowerCase(),be==="select"||be==="input"&&ye.type==="file")var Dn=O;else if(xl(ye))if(G)Dn=Jt;else{Dn=kt;var Lt=ot}else be=ye.nodeName,!be||be.toLowerCase()!=="input"||ye.type!=="checkbox"&&ye.type!=="radio"?pe&&Ls(pe.elementType)&&(Dn=O):Dn=Ot;if(Dn&&(Dn=Dn(e,pe))){bl(Re,Dn,o,Ce);break e}Lt&&Lt(e,ye,pe),e==="focusout"&&pe&&ye.type==="number"&&pe.memoizedProps.value!=null&&_o(ye,"number",ye.value)}switch(Lt=pe?gs(pe):window,e){case"focusin":(xl(Lt)||Lt.contentEditable==="true")&&(Gt=Lt,hs=pe,Mn=null);break;case"focusout":Mn=hs=Gt=null;break;case"mousedown":no=!0;break;case"contextmenu":case"mouseup":case"dragend":no=!1,Do(Re,o,Ce);break;case"selectionchange":if(Ft)break;case"keydown":case"keyup":Do(Re,o,Ce)}var dn;if(It)e:{switch(e){case"compositionstart":var yn="onCompositionStart";break e;case"compositionend":yn="onCompositionEnd";break e;case"compositionupdate":yn="onCompositionUpdate";break e}yn=void 0}else ho?xo(e,o)&&(yn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(yn="onCompositionStart");yn&&(un&&o.locale!=="ko"&&(ho||yn!=="onCompositionStart"?yn==="onCompositionEnd"&&ho&&(dn=go()):(Zn=Ce,Eo="value"in Zn?Zn.value:Zn.textContent,ho=!0)),Lt=ju(pe,yn),0<Lt.length&&(yn=new Qe(yn,e,null,o,Ce),Re.push({event:yn,listeners:Lt}),dn?yn.data=dn:(dn=ta(o),dn!==null&&(yn.data=dn)))),(dn=mn?ba(e,o):Qo(e,o))&&(yn=ju(pe,"onBeforeInput"),0<yn.length&&(Lt=new Qe("onBeforeInput","beforeinput",null,o,Ce),Re.push({event:Lt,listeners:yn}),Lt.data=dn)),O2(Re,e,pe,o,Ce)}_0(Re,s)})}function Wl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function ju(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=nn(e,o),f!=null&&r.unshift(Wl(e,f,m)),f=nn(e,s),f!=null&&r.push(Wl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function P2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var T=o,Y=T.alternate,pe=T.stateNode;if(T=T.tag,Y!==null&&Y===r)break;T!==5&&T!==26&&T!==27||pe===null||(Y=pe,f?(pe=nn(o,m),pe!=null&&v.unshift(Wl(o,pe,Y))):f||(pe=nn(o,m),pe!=null&&v.push(Wl(o,pe,Y)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var H2=/\r\n?/g,U2=/\u0000|\uFFFD/g;function x0(e){return(typeof e=="string"?e:""+e).replace(H2,`
`).replace(U2,"")}function b0(e,s){return s=x0(s),x0(e)===s}function Yn(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Mo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Mo(e,""+r);break;case"className":ws(e,"class",r);break;case"tabIndex":ws(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ws(e,o,r);break;case"style":Di(e,r,m);break;case"data":if(s!=="object"){ws(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Io(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Yn(e,s,"name",f.name,f,null),Yn(e,s,"formEncType",f.formEncType,f,null),Yn(e,s,"formMethod",f.formMethod,f,null),Yn(e,s,"formTarget",f.formTarget,f,null)):(Yn(e,s,"encType",f.encType,f,null),Yn(e,s,"method",f.method,f,null),Yn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Io(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Os);break;case"onScroll":r!=null&&_n("scroll",e);break;case"onScrollEnd":r!=null&&_n("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Io(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":_n("beforetoggle",e),_n("toggle",e),po(e,"popover",r);break;case"xlinkActuate":Bs(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Bs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Bs(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Bs(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Bs(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Bs(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Bs(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Bs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Bs(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":po(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Ko.get(o)||o,po(e,o,r))}}function gh(e,s,o,r,f,m){switch(o){case"style":Di(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Mo(e,r):(typeof r=="number"||typeof r=="bigint")&&Mo(e,""+r);break;case"onScroll":r!=null&&_n("scroll",e);break;case"onScrollEnd":r!=null&&_n("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Os);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[bn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):po(e,o,r)}}}function So(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_n("error",e),_n("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Yn(e,s,m,v,o,null)}}f&&Yn(e,s,"srcSet",o.srcSet,o,null),r&&Yn(e,s,"src",o.src,o,null);return;case"input":_n("invalid",e);var T=m=v=f=null,Y=null,pe=null;for(r in o)if(o.hasOwnProperty(r)){var Ce=o[r];if(Ce!=null)switch(r){case"name":f=Ce;break;case"type":v=Ce;break;case"checked":Y=Ce;break;case"defaultChecked":pe=Ce;break;case"value":m=Ce;break;case"defaultValue":T=Ce;break;case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(a(137,s));break;default:Yn(e,s,r,Ce,o,null)}}vn(e,m,T,Y,pe,v,f,!1);return;case"select":_n("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Yn(e,s,f,T,o,null)}s=m,o=v,e.multiple=!!r,s!=null?ls(e,!!r,s,!1):o!=null&&ls(e,!!r,o,!0);return;case"textarea":_n("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(T=o[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Yn(e,s,v,T,o,null)}gi(e,r,f,m);return;case"option":for(Y in o)if(o.hasOwnProperty(Y)&&(r=o[Y],r!=null))switch(Y){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Yn(e,s,Y,r,o,null)}return;case"dialog":_n("beforetoggle",e),_n("toggle",e),_n("cancel",e),_n("close",e);break;case"iframe":case"object":_n("load",e);break;case"video":case"audio":for(r=0;r<Yl.length;r++)_n(Yl[r],e);break;case"image":_n("error",e),_n("load",e);break;case"details":_n("toggle",e);break;case"embed":case"source":case"link":_n("error",e),_n("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(pe in o)if(o.hasOwnProperty(pe)&&(r=o[pe],r!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Yn(e,s,pe,r,o,null)}return;default:if(Ls(s)){for(Ce in o)o.hasOwnProperty(Ce)&&(r=o[Ce],r!==void 0&&gh(e,s,Ce,r,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(r=o[T],r!=null&&Yn(e,s,T,r,o,null))}function V2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,T=null,Y=null,pe=null,Ce=null;for(be in o){var Re=o[be];if(o.hasOwnProperty(be)&&Re!=null)switch(be){case"checked":break;case"value":break;case"defaultValue":Y=Re;default:r.hasOwnProperty(be)||Yn(e,s,be,null,r,Re)}}for(var ye in r){var be=r[ye];if(Re=o[ye],r.hasOwnProperty(ye)&&(be!=null||Re!=null))switch(ye){case"type":m=be;break;case"name":f=be;break;case"checked":pe=be;break;case"defaultChecked":Ce=be;break;case"value":v=be;break;case"defaultValue":T=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(a(137,s));break;default:be!==Re&&Yn(e,s,ye,be,r,Re)}}Ys(e,v,T,Y,pe,Ce,m,f);return;case"select":be=v=T=ye=null;for(m in o)if(Y=o[m],o.hasOwnProperty(m)&&Y!=null)switch(m){case"value":break;case"multiple":be=Y;default:r.hasOwnProperty(m)||Yn(e,s,m,null,r,Y)}for(f in r)if(m=r[f],Y=o[f],r.hasOwnProperty(f)&&(m!=null||Y!=null))switch(f){case"value":ye=m;break;case"defaultValue":T=m;break;case"multiple":v=m;default:m!==Y&&Yn(e,s,f,m,r,Y)}s=T,o=v,r=be,ye!=null?ls(e,!!o,ye,!1):!!r!=!!o&&(s!=null?ls(e,!!o,s,!0):ls(e,!!o,o?[]:"",!1));return;case"textarea":be=ye=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Yn(e,s,T,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ye=f;break;case"defaultValue":be=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Yn(e,s,v,f,r,m)}Gn(e,ye,be);return;case"option":for(var Et in o)if(ye=o[Et],o.hasOwnProperty(Et)&&ye!=null&&!r.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Yn(e,s,Et,null,r,ye)}for(Y in r)if(ye=r[Y],be=o[Y],r.hasOwnProperty(Y)&&ye!==be&&(ye!=null||be!=null))switch(Y){case"selected":e.selected=ye&&typeof ye!="function"&&typeof ye!="symbol";break;default:Yn(e,s,Y,ye,r,be)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in o)ye=o[Wt],o.hasOwnProperty(Wt)&&ye!=null&&!r.hasOwnProperty(Wt)&&Yn(e,s,Wt,null,r,ye);for(pe in r)if(ye=r[pe],be=o[pe],r.hasOwnProperty(pe)&&ye!==be&&(ye!=null||be!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(a(137,s));break;default:Yn(e,s,pe,ye,r,be)}return;default:if(Ls(s)){for(var Wn in o)ye=o[Wn],o.hasOwnProperty(Wn)&&ye!==void 0&&!r.hasOwnProperty(Wn)&&gh(e,s,Wn,void 0,r,ye);for(Ce in r)ye=r[Ce],be=o[Ce],!r.hasOwnProperty(Ce)||ye===be||ye===void 0&&be===void 0||gh(e,s,Ce,ye,r,be);return}}for(var de in o)ye=o[de],o.hasOwnProperty(de)&&ye!=null&&!r.hasOwnProperty(de)&&Yn(e,s,de,null,r,ye);for(Re in r)ye=r[Re],be=o[Re],!r.hasOwnProperty(Re)||ye===be||ye==null&&be==null||Yn(e,s,Re,ye,r,be)}function v0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,T=f.duration;if(m&&T&&v0(v)){for(v=0,T=f.responseEnd,r+=1;r<o.length;r++){var Y=o[r],pe=Y.startTime;if(pe>T)break;var Ce=Y.transferSize,Re=Y.initiatorType;Ce&&v0(Re)&&(Y=Y.responseEnd,v+=Ce*(Y<T?1:(T-pe)/(Y-pe)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yh=null,xh=null;function Mu(e){return e.nodeType===9?e:e.ownerDocument}function w0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function bh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vh=null;function W2(){var e=window.event;return e&&e.type==="popstate"?e===vh?!1:(vh=e,!0):(vh=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,F2=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,X2=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(e){return k0.resolve(null).then(e).catch(q2)}:C0;function q2(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function j0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),Qr(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Fl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Fl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,T=m.nodeName;m[Rs]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Fl(e.ownerDocument.body);o=f}while(o);Qr(s)}function M0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function wh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":wh(o),ro(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function G2(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Rs])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=ki(e.nextSibling),e===null)break}return null}function K2(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=ki(e.nextSibling),e===null))return null;return e}function T0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ki(e.nextSibling),e===null))return null;return e}function Sh(e){return e.data==="$?"||e.data==="$~"}function Ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Q2(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ki(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var kh=null;function E0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return ki(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function A0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function D0(e,s,o){switch(s=Mu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Fl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ro(e)}var ji=new Map,N0=new Set;function Tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=ne.d;ne.d={f:Z2,r:J2,D:ev,C:tv,L:nv,m:sv,X:iv,S:ov,M:av};function Z2(){var e=_a.f(),s=xu();return e||s}function J2(e){var s=bs(e);s!==null&&s.tag===5&&s.type==="form"?G_(s):_a.r(e)}var qr=typeof document>"u"?null:document;function R0(e,s,o){var r=qr;if(r&&typeof s=="string"&&s){var f=Ss(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),N0.has(f)||(N0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),So(s,"link",e),an(s),r.head.appendChild(s)))}}function ev(e){_a.D(e),R0("dns-prefetch",e,null)}function tv(e,s){_a.C(e,s),R0("preconnect",e,s)}function nv(e,s,o){_a.L(e,s,o);var r=qr;if(r&&e&&s){var f='link[rel="preload"][as="'+Ss(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ss(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ss(o.imageSizes)+'"]')):f+='[href="'+Ss(e)+'"]';var m=f;switch(s){case"style":m=Gr(e);break;case"script":m=Kr(e)}ji.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),ji.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Xl(m))||s==="script"&&r.querySelector(ql(m))||(s=r.createElement("link"),So(s,"link",e),an(s),r.head.appendChild(s)))}}function sv(e,s){_a.m(e,s);var o=qr;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ss(r)+'"][href="'+Ss(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Kr(e)}if(!ji.has(m)&&(e=x({rel:"modulepreload",href:e},s),ji.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ql(m)))return}r=o.createElement("link"),So(r,"link",e),an(r),o.head.appendChild(r)}}}function ov(e,s,o){_a.S(e,s,o);var r=qr;if(r&&e){var f=vs(r).hoistableStyles,m=Gr(e);s=s||"default";var v=f.get(m);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(Xl(m)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=ji.get(m))&&jh(e,o);var Y=v=r.createElement("link");an(Y),So(Y,"link",e),Y._p=new Promise(function(pe,Ce){Y.onload=pe,Y.onerror=Ce}),Y.addEventListener("load",function(){T.loading|=1}),Y.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Eu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(m,v)}}}function iv(e,s){_a.X(e,s);var o=qr;if(o&&e){var r=vs(o).hoistableScripts,f=Kr(e),m=r.get(f);m||(m=o.querySelector(ql(f)),m||(e=x({src:e,async:!0},s),(s=ji.get(f))&&Mh(e,s),m=o.createElement("script"),an(m),So(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function av(e,s){_a.M(e,s);var o=qr;if(o&&e){var r=vs(o).hoistableScripts,f=Kr(e),m=r.get(f);m||(m=o.querySelector(ql(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=ji.get(f))&&Mh(e,s),m=o.createElement("script"),an(m),So(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function B0(e,s,o,r){var f=(f=Ue.current)?Tu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Gr(o.href),o=vs(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=Gr(o.href);var m=vs(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Xl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),ji.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ji.set(e,o),m||rv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Kr(o),o=vs(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Gr(e){return'href="'+Ss(e)+'"'}function Xl(e){return'link[rel="stylesheet"]['+e+"]"}function L0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function rv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),So(s,"link",o),an(s),e.head.appendChild(s))}function Kr(e){return'[src="'+Ss(e)+'"]'}function ql(e){return"script[async]"+e}function O0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+Ss(o.href)+'"]');if(r)return s.instance=r,an(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),an(r),So(r,"style",f),Eu(r,o.precedence,e),s.instance=r;case"stylesheet":f=Gr(o.href);var m=e.querySelector(Xl(f));if(m)return s.state.loading|=4,s.instance=m,an(m),m;r=L0(o),(f=ji.get(f))&&jh(r,f),m=(e.ownerDocument||e).createElement("link"),an(m);var v=m;return v._p=new Promise(function(T,Y){v.onload=T,v.onerror=Y}),So(m,"link",r),s.state.loading|=4,Eu(m,o.precedence,e),s.instance=m;case"script":return m=Kr(o.src),(f=e.querySelector(ql(m)))?(s.instance=f,an(f),f):(r=o,(f=ji.get(m))&&(r=x({},o),Mh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),an(f),So(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Eu(r,o.precedence,e));return s.instance}function Eu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===s)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function jh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Au=null;function z0(e,s,o){if(Au===null){var r=new Map,f=Au=new Map;f.set(o,r)}else f=Au,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Rs]||m[tn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var T=r.get(v);T?T.push(m):r.set(v,[m])}}return r}function $0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function lv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function I0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=Gr(r.href),m=s.querySelector(Xl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Du.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,an(m);return}m=s.ownerDocument||s,r=L0(r),(f=ji.get(f))&&jh(r,f),m=m.createElement("link"),an(m);var v=m;v._p=new Promise(function(T,Y){v.onload=T,v.onerror=Y}),So(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Du.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function uv(e,s){return e.stylesheets&&e.count===0&&Ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*Y2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Du(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nu=null;function Ru(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nu=new Map,s.forEach(dv,e),Nu=null,Du.call(e))}function dv(e,s){if(!(s.state.loading&4)){var o=Nu.get(e);if(o)var r=o.get(null);else{o=new Map,Nu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Du.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Gl={$$typeof:N,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function fv(e,s,o,r,f,m,v,T,Y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.hiddenUpdates=cn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function P0(e,s,o,r,f,m,v,T,Y,pe,Ce,Re){return e=new fv(e,s,o,v,Y,pe,Ce,Re,T),s=1,m===!0&&(s|=24),m=li(3,null,null,s),e.current=m,m.stateNode=e,s=rf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},df(m),e}function H0(e){return e?(e=Mr,e):Mr}function U0(e,s,o,r,f,m){f=H0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ta(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ea(e,r,s),o!==null&&(ni(o,e,s),Ml(o,e,s))}function V0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Eh(e,s){V0(e,s),(e=e.alternate)&&V0(e,s)}function Y0(e){if(e.tag===13||e.tag===31){var s=Ja(e,67108864);s!==null&&ni(s,e,67108864),Eh(e,67108864)}}function W0(e){if(e.tag===13||e.tag===31){var s=hi();s=io(s);var o=Ja(e,s);o!==null&&ni(o,e,s),Eh(e,s)}}var Bu=!0;function hv(e,s,o,r){var f=L.T;L.T=null;var m=ne.p;try{ne.p=2,Ah(e,s,o,r)}finally{ne.p=m,L.T=f}}function mv(e,s,o,r){var f=L.T;L.T=null;var m=ne.p;try{ne.p=8,Ah(e,s,o,r)}finally{ne.p=m,L.T=f}}function Ah(e,s,o,r){if(Bu){var f=Dh(r);if(f===null)_h(e,s,r,Lu,o),X0(e,r);else if(_v(f,e,s,o,r))r.stopPropagation();else if(X0(e,r),s&4&&-1<pv.indexOf(e)){for(;f!==null;){var m=bs(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Kt(m.pendingLanes);if(v!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var Y=1<<31-bt(v);T.entanglements[1]|=Y,v&=~Y}qi(m),(Bn&6)===0&&(gu=dt()+500,Vl(0))}}break;case 31:case 13:T=Ja(m,2),T!==null&&ni(T,m,2),xu(),Eh(m,2)}if(m=Dh(r),m===null&&_h(e,s,r,Lu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else _h(e,s,r,null,o)}}function Dh(e){return e=js(e),Nh(e)}var Lu=null;function Nh(e){if(Lu=null,e=lo(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Lu=e,null}function F0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Je()){case rt:return 2;case Vt:return 8;case tt:case P:return 32;case te:return 268435456;default:return 32}default:return 32}}var Rh=!1,Pa=null,Ha=null,Ua=null,Kl=new Map,Ql=new Map,Va=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(e,s){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Kl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(s.pointerId)}}function Zl(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=bs(s),s!==null&&Y0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function _v(e,s,o,r,f){switch(s){case"focusin":return Pa=Zl(Pa,e,s,o,r,f),!0;case"dragenter":return Ha=Zl(Ha,e,s,o,r,f),!0;case"mouseover":return Ua=Zl(Ua,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return Kl.set(m,Zl(Kl.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,Ql.set(m,Zl(Ql.get(m)||null,e,s,o,r,f)),!0}return!1}function q0(e){var s=lo(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,Qt(e.priority,function(){W0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,Qt(e.priority,function(){W0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ou(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);To=r,o.target.dispatchEvent(r),To=null}else return s=bs(o),s!==null&&Y0(s),e.blockedOn=o,!1;s.shift()}return!0}function G0(e,s,o){Ou(e)&&o.delete(s)}function gv(){Rh=!1,Pa!==null&&Ou(Pa)&&(Pa=null),Ha!==null&&Ou(Ha)&&(Ha=null),Ua!==null&&Ou(Ua)&&(Ua=null),Kl.forEach(G0),Ql.forEach(G0)}function zu(e,s){e.blockedOn===s&&(e.blockedOn=null,Rh||(Rh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,gv)))}var $u=null;function K0(e){$u!==e&&($u=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){$u===e&&($u=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Nh(r||o)===null)continue;break}var m=bs(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function Qr(e){function s(Y){return zu(Y,e)}Pa!==null&&zu(Pa,e),Ha!==null&&zu(Ha,e),Ua!==null&&zu(Ua,e),Kl.forEach(s),Ql.forEach(s);for(var o=0;o<Va.length;o++){var r=Va[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Va.length&&(o=Va[0],o.blockedOn===null);)q0(o),o.blockedOn===null&&Va.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[bn]||null;if(typeof m=="function")v||K0(o);else if(v){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[bn]||null)T=v.formAction;else if(Nh(f)!==null)continue}else T=v.action;typeof T=="function"?o[r+1]=T:(o.splice(r,3),r-=3),K0(o)}}}function Q0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Bh(e){this._internalRoot=e}Iu.prototype.render=Bh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=hi();U0(o,r,e,s,null,null)},Iu.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;U0(e.current,2,null,e,null,null),xu(),s[nt]=null}};function Iu(e){this._internalRoot=e}Iu.prototype.unstable_scheduleHydration=function(e){if(e){var s=ss();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Va.length&&s!==0&&s<Va[o].priority;o++);Va.splice(o,0,e),o===0&&q0(e)}};var Z0=n.version;if(Z0!=="19.2.4")throw Error(a(527,Z0,"19.2.4"));ne.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var yv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Ye=Pu.inject(yv),Xe=Pu}catch{}}return ec.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ig,m=ag,v=rg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=P0(e,1,!1,null,null,o,r,null,f,m,v,Q0),e[nt]=s.current,ph(e),new Bh(s)},ec.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ig,v=ag,T=rg,Y=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.formState!==void 0&&(Y=o.formState)),s=P0(e,1,!0,s,o!=null?o:null,r,f,Y,m,v,T,Q0),s.context=H0(null),o=s.current,r=hi(),r=io(r),f=Ta(r),f.callback=null,Ea(o,f,r),o=r,s.current.lanes=o,xt(s,o),qi(s),e[nt]=s.current,ph(e),new Iu(s)},ec.version="19.2.4",ec}var ly;function Mv(){if(ly)return Oh.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Oh.exports=jv(),Oh.exports}var Tv=Mv();const Ev=Mx(Tv);var y=cp();const Av=Mx(y);function Dv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Nv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var dd;const Ai="__TAURI_TO_IPC_KEY__";function Rv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function we(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Bv{get rid(){return Dv(this,dd,"f")}constructor(n){dd.set(this,void 0),Nv(this,dd,n)}async close(){return we("plugin:resources|close",{rid:this.rid})}}dd=new WeakMap;var mi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(mi||(mi={}));async function Ex(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await we("plugin:event|unlisten",{event:t,eventId:n})}async function mc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return we("plugin:event|listen",{event:t,target:c,handler:Rv(n)}).then(u=>async()=>Ex(t,u))}async function Lv(t,n,i){return mc(t,a=>{Ex(t,a.id),n(a)},i)}async function Ov(t,n){await we("plugin:event|emit",{event:t,payload:n})}async function zv(t,n,i){await we("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Ax{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new pc(this.width*n,this.height*n)}[Ai](){return{width:this.width,height:this.height}}toJSON(){return this[Ai]()}}class pc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Ax(this.width/n,this.height/n)}[Ai](){return{width:this.width,height:this.height}}toJSON(){return this[Ai]()}}class Zr{constructor(n){this.size=n}toLogical(n){return this.size instanceof Ax?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof pc?this.size:this.size.toPhysical(n)}[Ai](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ai]()}}class Dx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new qa(this.x*n,this.y*n)}[Ai](){return{x:this.x,y:this.y}}toJSON(){return this[Ai]()}}class qa{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Dx(this.x/n,this.y/n)}[Ai](){return{x:this.x,y:this.y}}toJSON(){return this[Ai]()}}class Hu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Dx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof qa?this.position:this.position.toPhysical(n)}[Ai](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ai]()}}class _c extends Bv{constructor(n){super(n)}static async new(n,i,a){return we("plugin:image|new",{rgba:wd(n),width:i,height:a}).then(c=>new _c(c))}static async fromBytes(n){return we("plugin:image|from_bytes",{bytes:wd(n)}).then(i=>new _c(i))}static async fromPath(n){return we("plugin:image|from_path",{path:n}).then(i=>new _c(i))}async rgba(){return we("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return we("plugin:image|size",{rid:this.rid})}}function wd(t){return t==null?null:typeof t=="string"?t:t instanceof _c?t.rid:t}var jm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(jm||(jm={}));class $v{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var cy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(cy||(cy={}));function Mm(){return new Nx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Hh(){return we("plugin:window|get_all_windows").then(t=>t.map(n=>new Nx(n,{skip:!0})))}const Uh=["tauri://created","tauri://error"];class Nx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||we("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Hh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Mm()}static async getAll(){return Hh()}static async getFocusedWindow(){for(const n of await Hh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:mc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Lv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Uh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Ov(n,i)}async emitTo(n,i,a){if(Uh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return zv(n,i,a)}_handleTauriEvent(n,i){return Uh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return we("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return we("plugin:window|inner_position",{label:this.label}).then(n=>new qa(n))}async outerPosition(){return we("plugin:window|outer_position",{label:this.label}).then(n=>new qa(n))}async innerSize(){return we("plugin:window|inner_size",{label:this.label}).then(n=>new pc(n))}async outerSize(){return we("plugin:window|outer_size",{label:this.label}).then(n=>new pc(n))}async isFullscreen(){return we("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return we("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return we("plugin:window|is_maximized",{label:this.label})}async isFocused(){return we("plugin:window|is_focused",{label:this.label})}async isDecorated(){return we("plugin:window|is_decorated",{label:this.label})}async isResizable(){return we("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return we("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return we("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return we("plugin:window|is_closable",{label:this.label})}async isVisible(){return we("plugin:window|is_visible",{label:this.label})}async title(){return we("plugin:window|title",{label:this.label})}async theme(){return we("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return we("plugin:window|is_always_on_top",{label:this.label})}async center(){return we("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===jm.Critical?i={type:"Critical"}:i={type:"Informational"}),we("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return we("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return we("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return we("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return we("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return we("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return we("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return we("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return we("plugin:window|maximize",{label:this.label})}async unmaximize(){return we("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return we("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return we("plugin:window|minimize",{label:this.label})}async unminimize(){return we("plugin:window|unminimize",{label:this.label})}async show(){return we("plugin:window|show",{label:this.label})}async hide(){return we("plugin:window|hide",{label:this.label})}async close(){return we("plugin:window|close",{label:this.label})}async destroy(){return we("plugin:window|destroy",{label:this.label})}async setDecorations(n){return we("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return we("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return we("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return we("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return we("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return we("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return we("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return we("plugin:window|set_size",{label:this.label,value:n instanceof Zr?n:new Zr(n)})}async setMinSize(n){return we("plugin:window|set_min_size",{label:this.label,value:n instanceof Zr?n:n?new Zr(n):null})}async setMaxSize(n){return we("plugin:window|set_max_size",{label:this.label,value:n instanceof Zr?n:n?new Zr(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return we("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return we("plugin:window|set_position",{label:this.label,value:n instanceof Hu?n:new Hu(n)})}async setFullscreen(n){return we("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return we("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return we("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return we("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return we("plugin:window|set_icon",{label:this.label,value:wd(n)})}async setSkipTaskbar(n){return we("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return we("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return we("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return we("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return we("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return we("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Hu?n:new Hu(n)})}async setIgnoreCursorEvents(n){return we("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return we("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return we("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return we("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return we("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return we("plugin:window|set_overlay_icon",{label:this.label,value:n?wd(n):void 0})}async setProgressBar(n){return we("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return we("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return we("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return we("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(mi.WINDOW_RESIZED,i=>{i.payload=new pc(i.payload),n(i)})}async onMoved(n){return this.listen(mi.WINDOW_MOVED,i=>{i.payload=new qa(i.payload),n(i)})}async onCloseRequested(n){return this.listen(mi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new $v(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(mi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new qa(d.payload.position)}})}),a=await this.listen(mi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new qa(d.payload.position)}})}),c=await this.listen(mi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new qa(d.payload.position)}})}),u=await this.listen(mi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(mi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(mi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(mi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(mi.WINDOW_THEME_CHANGED,n)}}var uy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(uy||(uy={}));var dy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(dy||(dy={}));var fy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(fy||(fy={}));var hy;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(hy||(hy={}));async function Iv(t={}){return typeof t=="object"&&Object.freeze(t),await we("plugin:dialog|open",{options:t})}const Pv=3.7,Uu=200,Tm=240,_s=540,Ps=176,Vh=32,Ec=20,Hv=Tm/2,tc=_s+Hv,Jr=18,el=18,Yh="#E6E6E6";function my(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function yr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ga(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function fc(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ga(t).localeCompare(ga(n))}function Rx(t){return[...t].sort(fc)}function Uv(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ga(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ga(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=ga(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const j=(g=a.get(w))!=null?g:[];j.push(b),a.set(w,j)}for(const b of a.values())b.sort(fc);const c=t.filter(b=>{var w;return((w=i.get(ga(b)))!=null?w:0)===0}).sort(fc),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=ga(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const j=ga(S),k=((x=i.get(j))!=null?x:0)-1;i.set(j,k),k===0&&c.push(S)}c.sort(fc)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ga(b))).sort(fc)]}function Bx(t,n){var i;return Rx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Lx(t,n,i){return Bx(t,i)}function Wh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Vv(t,n){var u,d;if(!n||t.length===0)return Wh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Wh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Wh(t)}function Vu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Yv(t,n,i){var _,x,b,w,S,j,k;const a=Lx(t,i,n);if(a.length===0)return null;const c=a.map(M=>yr(t,M)),u=new Set(c.map(M=>M.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(M=>M.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,g=c.find(M=>h&&M.id===h||d&&M.id===d?!0:!M.parentSha||!u.has(M.parentSha));return g||((k=(j=Vv(c,p!=null?p:void 0))!=null?j:c[0])!=null?k:null)}function Wv(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Bx(t.name,i);if(a.length>0){const g=a.map(b=>yr(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function up(t,n,i={},a={}){var ae,re,Se,Ne;const u=new Map(t.map(ee=>[ee.name,ee])),d=new Map,h=new Map;for(const ee of t){const L=((ae=i[ee.name])!=null?ae:[]).filter(ne=>ne.kind!=="branch-created").map(ne=>new Date(ne.date).getTime()).filter(ne=>Number.isFinite(ne)).sort((ne,U)=>ne-U)[0];L!=null&&h.set(ee.name,L)}const p=ee=>{const fe=h.get(ee.name);return fe!=null?fe:my(ee).start},g=ee=>{var L;const fe=(L=a[ee.name])!=null?L:null;return fe&&fe!==ee.name&&(fe===n||u.has(fe))?fe:ee.name===n?null:ee.parentBranch&&ee.parentBranch!==ee.name&&(ee.parentBranch===n||u.has(ee.parentBranch))?ee.parentBranch:null};for(const ee of t){if(ee.name===n)continue;const fe=(re=g(ee))!=null?re:n,L=(Se=d.get(fe))!=null?Se:[];L.push(ee),d.set(fe,L)}for(const ee of d.values())ee.sort((fe,L)=>p(fe)-p(L)||fe.name.localeCompare(L.name));const _=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const ee of Object.values(i))for(const fe of ee){const L=new Date(fe.date).getTime();Number.isFinite(L)&&(fe.fullSha&&S.set(fe.fullSha,L),fe.sha&&S.set(fe.sha,L))}const j=(ee,fe)=>({start:Math.min(ee,fe),end:Math.max(ee,fe)}),k=ee=>{var Z,he;const fe=j(p(ee),my(ee).end),L=[fe],ne=fe.start,U=Wv(ee,n,i),q=U?S.get(U):void 0,ge=new Date((he=(Z=ee.divergedFromDate)!=null?Z:ee.createdDate)!=null?he:ee.lastCommitDate).getTime(),D=Number.isFinite(q!=null?q:NaN)?q:Number.isFinite(ge)?ge:null;if(D==null)return L;const ce=j(D,ne);return ce.start!==ce.end&&L.push(ce),L},M=Math.max(1,360*60*1e3*Pv),z=(ee,fe)=>!(ee.start-fe.end>=M||fe.start-ee.end>=M),N=(ee,fe)=>fe.some(L=>{var ne;return((ne=w.get(ee))!=null?ne:[]).some(U=>z(L,U))}),E=(ee,fe=new Set)=>{const L=b.get(ee);if(L!=null)return L;if(fe.has(ee))return 1;fe.add(ee);const ne=u.get(ee);if(!ne||ee===n)return fe.delete(ee),b.set(ee,0),0;const U=g(ne),q=U?E(U,fe)+1:1;return fe.delete(ee),b.set(ee,q),q},$=(ee,fe=new Set)=>{var Ue,Me;const L=_.get(ee);if(L)return L.column;if(fe.has(ee))return 0;fe.add(ee);const ne=u.get(ee);if(!ne)return fe.delete(ee),0;if(ee===n){const mt={name:ee,column:0,parentName:null};_.set(ee,mt),x.push(mt);const et=k(ne);return w.set(0,[...(Ue=w.get(0))!=null?Ue:[],...et]),fe.delete(ee),0}const U=g(ne),q=U&&!fe.has(U)?U:null,ge=q?$(q,fe):0,D=Math.max(1,E(ee)),ce=Math.max(q?ge+1:1,D),Z=k(ne);let he=ce;for(;N(he,Z);)he+=1;const Ee={name:ee,column:he,parentName:q};return _.set(ee,Ee),x.push(Ee),w.set(he,[...(Me=w.get(he))!=null?Me:[],...Z]),fe.delete(ee),he};$(n);const F=t.filter(ee=>!_.has(ee.name)).sort((ee,fe)=>p(ee)-p(fe)||ee.name.localeCompare(fe.name)),W=F.filter(ee=>g(ee)!=null),H=F.filter(ee=>g(ee)==null);for(const ee of W)$(ee.name);let K=Math.max(0,...x.map(ee=>ee.column))+1+1;for(const ee of H){const fe=k(ee);let L=K;for(;N(L,fe);)L+=1;const ne={name:ee.name,column:L,parentName:null};_.set(ee.name,ne),x.push(ne),w.set(L,[...(Ne=w.get(L))!=null?Ne:[],...fe]),K=L+1}return x.sort((ee,fe)=>ee.column-fe.column||ee.name.localeCompare(fe.name))}function Fv(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var g;const p=(g=i[h.name])!=null?g:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Yu=2.25,$i=0,Fh=0,Xv=1800*1e3,qv=1440*60*1e3,Mi=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Yo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function py(t,n,i=new Map){var W,H,K,ae,re,Se,Ne,ee,fe,L,ne,U;if(t.length===0)return new Map;const a=[...t].sort((q,ge)=>{const D=Mi(q.date)-Mi(ge.date);return D!==0?D:q.id!==ge.id?q.id.localeCompare(ge.id):q.visualId.localeCompare(ge.visualId)}),c=new Map;for(const q of t){const ge=(W=q.parentSha)!=null?W:null;if(ge){const D=(H=c.get(ge))!=null?H:new Set;D.add(q.id),c.set(ge,D)}for(const D of(K=i.get(q.id))!=null?K:[]){if(!D)continue;const ce=(ae=c.get(D))!=null?ae:new Set;ce.add(q.id),c.set(D,ce)}}const u=new Map,d=new Map,h=new Map,p=new Set,g=new Map,_=new Map,x=new Map,b=new Map;for(const q of t){const ge=(re=g.get(q.branchName))!=null?re:new Set;ge.add(q.id),g.set(q.branchName,ge);const D=(Ne=(Se=n.get(q.branchName))==null?void 0:Se.column)!=null?Ne:0,ce=(ee=_.get(q.id))!=null?ee:new Set;ce.add(D),_.set(q.id,ce);const Z=new Set;q.parentSha&&Z.add(q.parentSha),x.set(q.visualId,Z);const he=new Set(Z);for(const Ee of(fe=i.get(q.id))!=null?fe:[])Ee&&he.add(Ee);b.set(q.visualId,he)}const w=new Set(Array.from(_.keys())),S=Array.from(w),j=new Map,k=q=>{const ge=[];for(const D of S)Yo(D,q)&&ge.push(D);return ge},M=new Map;for(const q of S)M.set(q,new Set);for(const q of t){const ge=k(q.id);if(ge.length===0)continue;const D=(L=b.get(q.visualId))!=null?L:new Set,ce=new Set;for(const Z of D)for(const he of k(Z))ce.add(he);for(const Z of ge){const he=(ne=M.get(Z))!=null?ne:new Set;for(const Ee of ce)he.add(Ee);M.set(Z,he)}}const z=new Map,N=(q,ge=new Set)=>{var he;const D=z.get(q);if(D)return D;if(ge.has(q))return new Set;ge.add(q);const ce=(he=M.get(q))!=null?he:new Set,Z=new Set;for(const Ee of ce){Z.add(Ee);for(const Ue of N(Ee,ge))Z.add(Ue)}return ge.delete(q),z.set(q,Z),Z},E=(q,ge)=>{if(Yo(q,ge))return!0;const D=k(q),ce=k(ge);for(const Z of D){const he=N(Z);for(const Ee of ce)if(he.has(Ee))return!0}for(const Z of ce){const he=N(Z);for(const Ee of D)if(he.has(Ee))return!0}return!1};let $=1;const F=(q,ge)=>{var Zt,Oe,ie,He,Ze,Ie,ht,ut,dt;const D=(Oe=(Zt=n.get(q.branchName))==null?void 0:Zt.column)!=null?Oe:0,ce=(ie=g.get(q.branchName))!=null?ie:new Set,he=!(!!q.parentSha&&ce.has(q.parentSha))&&q.parentSha?q.parentSha:null,Ee=Array.from(ge).flatMap(Je=>k(Je).flatMap(rt=>{var Vt;return(Vt=j.get(rt))!=null?Vt:[]})),Ue=(q.kind==="branch-created"||q.kind==="stash")&&Ee.length>0?Math.max(...Ee)+1:null,Me=Ee.length>0?Math.max(...Ee)+1:1,mt=(He=c.get(q.id))!=null?He:new Set,ze=Array.from(mt).flatMap(Je=>{var rt;return Array.from((rt=_.get(Je))!=null?rt:[])}).some(Je=>Je!==D),ct=new Date(q.date).getTime(),it=Math.max(Me,1);let Mt=null;for(let Je=it;Je<$;Je+=1){const rt=(Ze=d.get(Je))!=null?Ze:[];if(rt.length===0||ze||p.has(Je))continue;const Vt=(Ie=b.get(q.visualId))!=null?Ie:new Set;if(!(rt.some(Q=>E(q.id,Q.sha)?!0:Array.from(Vt).some(Ye=>Yo(Ye,Q.sha)))||rt.some(Q=>Q.column===D)||!Number.isFinite(ct)||!rt.every(Q=>{if(!Number.isFinite(Q.time))return!1;const Ye=!!he&&!!Q.branchEntryParentSha&&he===Q.branchEntryParentSha?qv:Xv;return Math.abs(Q.time-ct)<=Ye}))){Mt=Je;break}}Ue!=null&&(Mt=Ue),Mt==null&&(Mt=Math.max(Me,$)),u.set(q.visualId,Mt),Mt>=$&&($=Mt+1);const Ct=(ht=d.get(Mt))!=null?ht:[];Ct.push({visualId:q.visualId,sha:q.id,column:D,time:ct,branchEntryParentSha:he}),d.set(Mt,Ct),ze&&p.add(Mt);for(const Je of ge){const rt=(ut=h.get(Je))!=null?ut:[];rt.push(Mt),h.set(Je,rt)}const zt=(dt=j.get(q.id))!=null?dt:[];zt.push(Mt),j.set(q.id,zt)};for(const q of a){const ge=(U=x.get(q.visualId))!=null?U:new Set;F(q,ge)}return u}function Sd(t){var Oo,qo,po,ws,Bs,kn,_i,rs,ai,Vs,zo,jo,Ss,Ys,vn,_o,ls,Gn,gi,Mo,Go,qt,Di,Ls,Ko,$o,Io,Os,To,js,jn,uo,Kn,ys,Qn,nn,Ws,Fs,Cs,Zn,Eo,Ms,go,Ts,Es,fo,Rn,I,se,le,_e;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:g,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:j,orientation:k="horizontal"}=t,M=k==="horizontal",z=new Map(i.map(C=>[C.name,C])),N=new Map(n.map(C=>[C.name,C])),E=Uv([...a.map(C=>{var R,X,ue;return{id:C.fullSha,branchName:d,message:(R=C.prTitle)!=null?R:C.sha,author:"",date:C.date,parentSha:(ue=(X=C.parentShas)==null?void 0:X[0])!=null?ue:null}}),...((Oo=h[d])!=null?Oo:[]).map(C=>yr(d,C)),...c.map(C=>yr(C.branch||"",C)),...u.map(C=>yr(C.branch||"",C))]),$=new Map,F=new Map;for(const C of i){if(C.name===d)continue;const R=Lx(C.name,g,h);F.set(C.name,R);const X=Rx(R.map(ft=>yr(C.name,ft)));if(X.length>0){$.set(C.name,X);continue}const ue=(ws=(po=(qo=C.presidesFromSha)!=null?qo:C.divergedFromSha)!=null?po:C.createdFromSha)!=null?ws:null;if(!ue)continue;const Ae=(Bs=c.find(ft=>Yo(ft.fullSha,ue)||Yo(ft.sha,ue)))==null?void 0:Bs.date,Pe=Ae?null:(kn=Object.values(h).flat().find(ft=>Yo(ft.fullSha,ue)||Yo(ft.sha,ue)))==null?void 0:kn.date,Nt={id:`BRANCH_HEAD:${C.name}:${ue}`,branchName:C.name,message:`Branch ${C.name}`,author:C.lastCommitAuthor,date:(ai=(rs=(_i=Ae!=null?Ae:Pe)!=null?_i:C.createdDate)!=null?rs:C.divergedFromDate)!=null?ai:C.lastCommitDate,parentSha:ue,kind:"branch-created"};$.set(C.name,[Nt])}const W=new Set(E.map(C=>C.id)),H=(Vs=[...E].sort((C,R)=>Mi(C.date)-Mi(R.date)||C.id.localeCompare(R.id))[0])!=null?Vs:null,K=new Map(Array.from($.entries()).map(([C,R])=>[C,new Set(R.map(X=>X.id))])),ae=new Map;for(const C of i){if(C.name===d)continue;const R=Yv(C.name,h,g);if(R){ae.set(C.name,R);continue}const X=(zo=$.get(C.name))==null?void 0:zo[0];if(X){const ue=(Ys=(Ss=(jo=C.presidesFromSha)!=null?jo:C.divergedFromSha)!=null?Ss:C.createdFromSha)!=null?Ys:null;ae.set(C.name,{...X,parentSha:ue})}}const re=new Map;for(const[C,R]of $.entries()){const X=R.find(ue=>ue.kind!=="branch-created");X&&re.set(C,X)}const Se=new Map;for(const[C,R]of $.entries()){const X=R.filter(Pe=>Pe.kind!=="branch-created"),Ae=(vn=(X.length>0?X:R)[0])!=null?vn:null;Ae&&Se.set(C,Ae)}const Ne=new Map;for(const C of i){if(C.name===d)continue;const R=(_o=Se.get(C.name))!=null?_o:null,X=(Gn=(ls=ae.get(C.name))==null?void 0:ls.parentSha)!=null?Gn:null,ue=(Go=(Mo=(gi=C.presidesFromSha)!=null?gi:C.divergedFromSha)!=null?Mo:C.createdFromSha)!=null?Go:null,Ae=(qt=R==null?void 0:R.parentSha)!=null?qt:null,Pe=(Di=Ae!=null?Ae:X)!=null?Di:ue;Pe&&Ne.set(C.name,Pe)}const ee=C=>{var Pe,Nt,ft,Ge,at,Rt,Yt,fn;const R=(Pe=p[C.name])!=null?Pe:null;if(!(R&&R!==d&&R!==C.name&&z.has(R)))return R!=null?R:"";const ue=(Ge=(ft=(Nt=Ne.get(C.name))!=null?Nt:C.presidesFromSha)!=null?ft:C.divergedFromSha)!=null?Ge:C.createdFromSha;if(ue&&((at=K.get(R))!=null?at:new Set).has(ue))return R;const Ae=(Yt=(Rt=ae.get(C.name))==null?void 0:Rt.parentSha)!=null?Yt:null;return Ae&&((fn=K.get(R))!=null?fn:new Set).has(Ae),R},fe=C=>{var Ae,Pe,Nt,ft,Ge,at,Rt,Yt;const R=ae.get(C.name),X=(Ge=(ft=(Nt=(Pe=(Ae=Ne.get(C.name))!=null?Ae:R==null?void 0:R.parentSha)!=null?Pe:C.presidesFromSha)!=null?Nt:C.divergedFromSha)!=null?ft:C.createdFromSha)!=null?Ge:null;if(!C.parentBranch&&!X||!X)return null;if(ee(C)===d){if(W.has(X))return X;const fn=(at=R==null?void 0:R.parentSha)!=null?at:null;return fn&&W.has(fn)?fn:(Yt=(Rt=H==null?void 0:H.id)!=null?Rt:fn)!=null?Yt:X}return W.has(X),X},L=C=>fe(C),ne=new Map;for(const C of[...c,...u]){const R={...yr(C.branch||"",C),visualId:`${C.branch||""}:${C.fullSha}`};ne.set(C.fullSha,R)}const U=new Map(ne),q=C=>{U.has(C.id)||U.set(C.id,C)},ge=new Map(Array.from($.entries()).map(([C,R])=>[C,new Set(R.map(X=>X.id))])),D=new Set;for(const C of ge.values())for(const R of C)D.add(R);for(const C of E)D.has(C.id)||q({...C,visualId:`${C.branchName}:${C.id}`});for(const[C,R]of $.entries())for(const X of R)q({...X,visualId:`${C}:${X.id}`});const Z=[...Array.from(U.values()).map(C=>({...C,visualId:`${C.branchName}:${C.id}`}))].sort((C,R)=>Mi(C.date)-Mi(R.date)||C.id.localeCompare(R.id)),he=new Map;for(const C of Z){const R=(Ls=he.get(C.branchName))!=null?Ls:new Set;R.add(C.id),he.set(C.branchName,R)}const Ee=(C,R)=>{const X=he.get(C);if(!X||X.size===0)return!1;for(const ue of X)if(Yo(ue,R))return!0;return!1},Ue=(C,R)=>{const X=Array.from(he.entries()).filter(([ue])=>ue!==R).filter(([,ue])=>Array.from(ue).some(Ae=>Yo(Ae,C))).map(([ue])=>ue);return X.length>0?X.sort()[0]:C.slice(0,7)},Me=[],mt=new Map,et=new Map;for(const C of a){const R=C.fullSha,X=C.targetBranch,ue=C.targetCommitSha;if(!R||!X||!ue||!Ee(X,ue))continue;const Ae=((Ko=C.parentShas)!=null?Ko:[]).slice(1).filter(Nt=>!!Nt&&!Yo(Nt,R));if(Ae.length===0)continue;const Pe=($o=et.get(R))!=null?$o:new Set;for(const Nt of Ae){Pe.add(Nt);const ft=Ue(Nt,X);Me.push({sourceCommitSha:Nt,sourceBranchName:ft,mergeCommitSha:R,targetCommitSha:ue,targetBranchName:X});const Ge=(Io=mt.get(ft))!=null?Io:new Map,at=(Os=Ge.get(Nt))!=null?Os:new Set;at.add(X),Ge.set(Nt,at),mt.set(ft,Ge)}et.set(R,Pe)}const ze=new Map;for(const C of i){if(C.name===d)continue;const R=fe(C);R&&ze.set(C.name,R)}const ct=new Map;for(const C of Z){const R=et.get(C.id);if(R&&R.size>0){const Ae=(To=ct.get(C.id))!=null?To:new Set;for(const Pe of R)Ae.add(Pe);ct.set(C.id,Ae)}if(C.branchName===d)continue;const X=ze.get(C.branchName);if(!X||X===C.id)continue;const ue=(js=ct.get(C.id))!=null?js:new Set;ue.add(X),ct.set(C.id,ue)}const it=py(Z,N,ct),Mt=new Map;for(const C of Z){const R=(jn=Mt.get(C.branchName))!=null?jn:[];R.push(C),Mt.set(C.branchName,R)}const Ct=new Map,zt=new Map,Zt=new Map,Oe=new Map,ie=new Map,He=(C,R)=>{var Pe,Nt,ft;if(R.length===0)return[];const X=[...R].sort((Ge,at)=>{var fn,rn;const Rt=(fn=it.get(Ge.visualId))!=null?fn:Number.MAX_SAFE_INTEGER,Yt=(rn=it.get(at.visualId))!=null?rn:Number.MAX_SAFE_INTEGER;return Rt!==Yt?Rt-Yt:Mi(Ge.date)-Mi(at.date)||Ge.id.localeCompare(at.id)}),ue=new Map;for(const Ge of X){const at=((Pe=Ge.clusterKey)==null?void 0:Pe.trim())||`cluster:${C}:${Ge.id}`,Rt=(Nt=ue.get(at))!=null?Nt:[];Rt.push(Ge),ue.set(at,Rt)}const Ae=[];for(const[Ge,at]of ue.entries()){if(at.length===0)continue;const Yt=[...at].sort((rn,Qe)=>{var Ao,yo;const wn=(Ao=it.get(rn.visualId))!=null?Ao:Number.MIN_SAFE_INTEGER,zs=(yo=it.get(Qe.visualId))!=null?yo:Number.MIN_SAFE_INTEGER;return wn!==zs?zs-wn:Mi(Qe.date)-Mi(rn.date)||Qe.id.localeCompare(rn.id)})[0].visualId,fn={branchName:C,key:Ge,commitIds:at.map(rn=>rn.visualId),leadId:Yt,count:at.length};Ae.push(fn),Oe.set(Ge,Yt),ie.set(Ge,at.length);for(const rn of fn.commitIds){zt.set(rn,Ge);const Qe=rn.split(":").slice(1).join(":"),wn=(ft=Zt.get(Qe))!=null?ft:[];wn.includes(Ge)||wn.push(Ge),Zt.set(Qe,wn)}}return Ae};for(const[C,R]of Mt.entries())Ct.set(C,He(C,R));const Ze=new Map;for(const C of Z)Ze.set(C.id,C);const Ie=C=>{if(!C)return"none";const R=Array.from(Ze.values()).find(X=>Yo(X.id,C)||Yo(X.id.slice(0,7),C)||Yo(C,X.id));return R?`${R.id.slice(0,7)} ${R.branchName}`:C.slice(0,7)},ht=b?["Lane rows (expected):",...[...n].sort((C,R)=>C.column-R.column||C.name.localeCompare(R.name)).map(C=>{var R;return`  row=${C.column} branch=${C.name} parent=${(R=C.parentName)!=null?R:"none"}`}),"",...i.flatMap(C=>{var Nt,ft,Ge,at,Rt,Yt,fn,rn;const R=(Nt=h[C.name])!=null?Nt:[],X=[...(ft=F.get(C.name))!=null?ft:[]].reverse(),ue=new Set(((Ge=$.get(C.name))!=null?Ge:[]).map(Qe=>Qe.id)),Ae=(Rt=(at=X.find(Qe=>!Qe.parentSha||!X.some(wn=>{var zs;return Yo(wn.fullSha,(zs=Qe.parentSha)!=null?zs:"")})))!=null?at:X[0])!=null?Rt:null,Pe=(fn=(Yt=Ae==null?void 0:Ae.parentSha)!=null?Yt:Ne.get(C.name))!=null?fn:null;return[`Branch ${C.name}`,`  ahead=${(rn=g[C.name])!=null?rn:0} previews=${X.length} rendered=${ue.size}`,`  db parent commit=${Ie(Pe)}`,`  db child commit=${Ae?`${Ae.fullSha.slice(0,7)} ${C.name}`:"none"}`,...X.map(Qe=>{const wn=ue.has(Qe.fullSha)?"visible":"hidden",zs=ue.has(Qe.fullSha)?"kept by render set":"dropped by render set";return`  ${wn} ${Qe.fullSha.slice(0,7)} ${Qe.message} [${zs}]`}),R.length===0?"  no preview data":null].filter(Qe=>Qe!=null)})]:[],ut=b?Array.from($.entries()).map(([C,R])=>[`Branch debug ${C}`,...R.map(X=>`  ${X.id.slice(0,7)} ${X.message}`)].join(`
`)):[],dt=it,Je=Tm/Yu,rt=20/Yu,Vt=M?_s+Je+rt:Uu+Je+rt,tt=M?Uu+Je+rt:tc,P=Math.max(0,...Z.map(C=>{var R;return(R=dt.get(C.visualId))!=null?R:1})),te=Z.map(C=>{var Ae,Pe;const R=N.get(C.branchName),X=(Ae=dt.get(C.visualId))!=null?Ae:1,ue=(Pe=R==null?void 0:R.column)!=null?Pe:0;return M?{commit:C,row:X,column:ue,x:el+(X-1)*Vt,y:Jr+ue*tt}:{commit:C,row:X,column:ue,x:el+ue*tc,y:Jr+(P-X)*Vt}}),Q=w.trim().toLowerCase(),ve=Q?te.filter(C=>{const R=C.commit.id.toLowerCase(),X=C.commit.id.slice(0,7).toLowerCase(),ue=C.commit.message.toLowerCase(),Ae=C.commit.branchName.toLowerCase();return R.includes(Q)||X.includes(Q)||ue.includes(Q)||Ae.includes(Q)}):te,Ye=S&&(uo=te.find(C=>C.commit.id===S))!=null?uo:null,Xe=new Set(ve.map(C=>C.commit.id)),Te=(Kn=j==null?void 0:j.headSha)!=null?Kn:null,bt=(()=>{var R,X;const C=(R=j==null?void 0:j.branchName)!=null?R:null;return!Te||!C?null:(X=zt.get(`${C}:${Te}`))!=null?X:null})(),Ve=new Set;for(const C of Ct.values())for(const R of C)R.count>1&&R.key!==bt&&Ve.add(R.key);const Dt=[...Z].filter(C=>{var Pe;const R=zt.get(C.visualId);if(!R)return!0;const X=Oe.get(R),ue=(Pe=ie.get(R))!=null?Pe:1,Ae=_.has(R)||!Ve.has(R)&&!x.has(R);return ue<=1||Ae||X===C.visualId}),pt=py(Dt,N,ct),We=Tm/Yu,vt=20/Yu,Pt=M?_s+We+vt:Uu+We+vt,Kt=M?Uu+We+vt:tc,Ke=Math.max(0,...Dt.map(C=>{var R;return(R=pt.get(C.visualId))!=null?R:1})),yt=Dt.map(C=>{var Ae,Pe;const R=N.get(C.branchName),X=(Ae=pt.get(C.visualId))!=null?Ae:1,ue=(Pe=R==null?void 0:R.column)!=null?Pe:0;return M?{commit:C,row:X,column:ue,x:el+(X-1)*Pt,y:Jr+ue*Kt}:{commit:C,row:X,column:ue,x:el+ue*tc,y:Jr+(Ke-X)*Pt}}),_t=new Map;for(const C of yt){const R=(ys=_t.get(C.commit.id))!=null?ys:[];R.push(C),_t.set(C.commit.id,R)}const $t=new Map;for(const C of yt){const R=zt.get(C.commit.visualId);if(!R)continue;const X=$t.get(R);(!X||(M?C.x>X.x:C.y<X.y))&&$t.set(R,C)}const cn=(C,R)=>`${C.toFixed(1)} ${R.toFixed(1)}`,xt=Math.max(0,...yt.map(C=>C.row)),Xt=Math.max(0,...n.map(C=>C.column)),On=M?el*2+Math.max(0,xt-1)*Pt+_s+Vh+vt:el*2+(Xt+1)*tc,is=M?Jr*2+Xt*Kt+Ps+Vh+vt:Jr*2+Math.max(0,xt-1)*Pt+Ps+Vh+vt,xn=[],io=new Map(i.map(C=>{var X,ue;const R=new Date((ue=(X=C.createdDate)!=null?X:C.divergedFromDate)!=null?ue:C.lastCommitDate).getTime();return[C.name,Number.isFinite(R)?R:0]})),as=C=>{var R;return(R=io.get(C))!=null?R:0},ss=[],Qt=C=>{b&&ss.push(C)},Tn=new Set,tn=new Map,bn=(C,R)=>{var ue;const X=(ue=tn.get(C))!=null?ue:[];X.includes(R)||X.push(R),tn.set(C,X)},nt=new Set,En=new Set,ko=new Set,ao=(C,R)=>{var Ae,Pe;if(!C)return null;const X=Vu(_t,C,R);if(X)return X;const ue=(Ae=zt.get(`${R!=null?R:d}:${C}`))!=null?Ae:zt.get(C);return ue&&(Pe=$t.get(ue))!=null?Pe:null},$n=new Set;for(const C of i){const R=L(C);R&&En.add(R);const X=(Qn=Ne.get(C.name))!=null?Qn:null;X&&ko.add(X)}const Rs=C=>{var Ae;const R=ao(C.id,C.branchName);if(R)return R;const X=zt.get(C.visualId);if(!X)return null;const ue=Oe.get(X);return ue&&(Ae=yt.find(Pe=>Pe.commit.id===ue))!=null?Ae:null},ro=(C,R)=>C?Vu(_t,C,R):null,lo=(C,R)=>M?{x:C.x-$i,y:C.y+Ps/2,face:"left"}:{x:C.x+_s/2,y:C.y+Ps+$i,face:"bottom"},bs=C=>M?{x:C.x-$i,y:C.y+Ps/2,face:"left"}:{x:C.x+_s/2,y:C.y+Ps+$i,face:"bottom"},gs=(C,R)=>C.column!==R.column?!0:M?C.commit.branchName!==R.commit.branchName:!1,vs=(C,R,X)=>{if(!M)return{x:R?C.x+_s:C.x+_s/2,y:R?C.y+Ps/2:C.y,face:R?"right":"top"};if(!R)return{x:C.x+_s+$i,y:C.y+Ps/2,face:"right"};if(X&&X.column===C.column&&X.commit.branchName!==C.commit.branchName){if(X.x>C.x)return{x:C.x+_s/2,y:C.y+Ps+$i,face:"bottom"};if(X.x<C.x)return{x:C.x+_s/2,y:C.y-$i,face:"top"}}return!X||X.column===C.column?{x:C.x+_s+$i,y:C.y+Ps/2,face:"right"}:X.column>C.column?{x:C.x+_s/2,y:C.y+Ps+$i,face:"bottom"}:{x:C.x+_s/2,y:C.y-$i,face:"top"}},an=C=>M?{x:C.x+_s/2,y:C.y+Ps+$i,face:"bottom"}:{x:C.x+_s,y:C.y+Ps/2,face:"right"},ii=(C,R)=>Vu(_t,C,R),Bo=(C,R)=>ro(C,R),Js=[],qn=new Set;for(const C of Me){const R=(nn=ao(C.targetCommitSha,C.targetBranchName))!=null?nn:null;if(!R){Qt({id:`merge:${C.mergeCommitSha}:${C.sourceCommitSha}:target`,kind:"merge",parent:C.sourceCommitSha,child:C.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const X=C.sourceCommitSha,ue=`merge:${C.mergeCommitSha}:${X!=null?X:"unknown"}`;if(!X||Yo(X,C.targetCommitSha)){Qt({id:ue,kind:"merge",parent:X!=null?X:"unknown",child:C.targetCommitSha,rendered:!1,reason:X?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ae=(Ws=Vu(_t,X))!=null?Ws:null;if(!Ae){Qt({id:ue,kind:"merge",parent:X,child:C.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ae.commit.id===R.commit.id){Qt({id:ue,kind:"merge",parent:Ae.commit.id,child:R.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let Pe,Nt,ft;const Ge=M?R.x+_s/2:R.x+_s-Fh,at=M?R.y+Ps+Fh:R.y+Ps/2,Rt=M?"bottom":"right";M?(Pe=Ae.x+_s+Fh,Nt=Ae.y+Ps/2,ft="right"):(Pe=Ae.x+_s/2,Nt=Ae.y,ft="top");const Yt=`${Pe.toFixed(2)}:${Nt.toFixed(2)}:${Ge.toFixed(2)}:${at.toFixed(2)}`;if(qn.has(Yt)){Qt({id:ue,kind:"merge",parent:Ae.commit.id,child:R.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}qn.add(Yt),Js.push({id:ue,fromX:Pe,fromY:Nt,toX:Ge,toY:at,fromFace:ft,toFace:Rt,zIndex:as(Ae.commit.branchName)}),Qt({id:ue,kind:"merge",parent:Ae.commit.id,child:R.commit.id,rendered:!0,reason:`merge connector rendered to ${C.targetBranchName}`})}const co=new Set;for(const C of i){if(C.name===d)continue;const R=ae.get(C.name);if(!R)continue;const X=ee(C),ue=ii((Fs=Ne.get(C.name))!=null?Fs:"",X),Ae=(Cs=re.get(C.name))!=null?Cs:R,Pe=(Zn=Bo(Ae.id,C.name))!=null?Zn:Rs(Ae);if(!ue||!Pe||ue.commit.id===Pe.commit.id){const Rt=zt.get(`${C.name}:${R.id}`),Yt=zt.get(`${C.name}:${Ae.id}`),fn=!!Rt&&!Ve.has(Rt),rn=!!Yt&&!Ve.has(Yt),Qe=!!Rt&&!_.has(Rt)&&(fn?x.has(Rt):!0),wn=!!Yt&&!_.has(Yt)&&(rn?x.has(Yt):!0);!ue&&!Qe&&bn((Eo=Pe==null?void 0:Pe.commit.id)!=null?Eo:R.id,"Missing parent node"),!Pe&&!wn&&bn(R.id,"Missing child node"),Qt({id:`branch:${(Ms=ue==null?void 0:ue.commit.id)!=null?Ms:"null"}->${(go=Pe==null?void 0:Pe.commit.id)!=null?go:"null"}`,kind:"branch",parent:(Ts=ue==null?void 0:ue.commit.id)!=null?Ts:"null",child:(Es=Pe==null?void 0:Pe.commit.id)!=null?Es:"null",rendered:!1,reason:ue?Pe?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Nt=`branch:${ue.commit.id}->${Pe.commit.id}`;if($n.has(Nt)){Qt({id:Nt,kind:"branch",parent:ue.commit.id,child:Pe.commit.id,rendered:!1,reason:"duplicate connector key"});continue}$n.add(Nt),nt.add(ue.commit.id);const ft=gs(ue,Pe);ue.commit.branchName!==Pe.commit.branchName&&co.add(ue.commit.id);const Ge=an(ue),at=bs(Pe);xn.push({id:Nt,fromX:Ge.x,fromY:Ge.y,toX:at.x,toY:at.y,fromFace:Ge.face,toFace:at.face,zIndex:as(Pe.commit.branchName)}),Qt({id:Nt,kind:"branch",parent:ue.commit.id,child:Pe.commit.id,rendered:!0,reason:ft?"branch connector rendered":M?"horizontal connector rendered":"vertical connector rendered"})}for(const C of Z){const R=Rs(C);if(!R)continue;const X=(fo=C.parentSha)!=null?fo:null;if(!X)continue;const ue=(Rn=ao(X,C.branchName))!=null?Rn:ii(X,C.branchName);if(!ue){const Ge=(I=zt.get(`${C.branchName}:${X}`))!=null?I:zt.get(X),at=!!Ge&&!Ve.has(Ge);!!Ge&&!_.has(Ge)&&(at?x.has(Ge):!0)||bn(C.id,"Missing parent node"),Qt({id:`${C.visualId}->${X}`,kind:"ancestry",parent:X,child:C.id,rendered:!1,reason:"missing parent node"});continue}if(R.commit.id===ue.commit.id){bn(R.commit.id,"Parent and child resolve to the same node"),Qt({id:`${ue.commit.id}->${R.commit.id}`,kind:"ancestry",parent:ue.commit.id,child:R.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ae=`${C.branchName}:${(se=ue.commit.visualId)!=null?se:ue.commit.id}->${R.commit.visualId}`;if($n.has(Ae)){bn(ue.commit.id,"Duplicate connector key"),bn(R.commit.id,"Duplicate connector key"),Qt({id:Ae,kind:"ancestry",parent:ue.commit.id,child:R.commit.id,rendered:!1,reason:"duplicate connector key"});continue}$n.add(Ae),nt.add(ue.commit.id);const Pe=gs(ue,R),Nt=vs(ue,Pe,R),ft=lo(R);xn.push({id:Ae,fromX:Nt.x,fromY:Nt.y,toX:ft.x,toY:ft.y,fromFace:Nt.face,toFace:ft.face,zIndex:as(R.commit.branchName)}),Qt({id:Ae,kind:"ancestry",parent:ue.commit.id,child:R.commit.id,rendered:!0,reason:Pe?"ancestry connector rendered":M?"horizontal ancestry rendered":"vertical ancestry rendered"}),Tn.add(ue.commit.id),Tn.add(R.commit.id)}const Lo=new Map;for(const C of yt){const R=(le=Lo.get(C.commit.branchName))!=null?le:[];R.push(C),Lo.set(C.commit.branchName,R)}for(const[C,R]of Lo.entries()){if(R.length<2)continue;const X=[...R].sort((ue,Ae)=>{var Pe,Nt,ft,Ge,at,Rt,Yt,fn;return ue.row!==Ae.row?ue.row-Ae.row:Mi((Nt=(Pe=ue==null?void 0:ue.commit)==null?void 0:Pe.date)!=null?Nt:null)-Mi((Ge=(ft=Ae==null?void 0:Ae.commit)==null?void 0:ft.date)!=null?Ge:null)||((Rt=(at=ue==null?void 0:ue.commit)==null?void 0:at.id)!=null?Rt:"").localeCompare((fn=(Yt=Ae==null?void 0:Ae.commit)==null?void 0:Yt.id)!=null?fn:"")});for(let ue=1;ue<X.length;ue+=1){const Ae=X[ue-1],Pe=X[ue];if(Ae.commit.id===Pe.commit.id)continue;const Nt=(_e=Pe.commit.parentSha)!=null?_e:null;if(Nt&&ii(Nt,Pe.commit.branchName))continue;const ft=`chain:${C}:${Ae.commit.id}->${Pe.commit.id}`;if($n.has(ft)){bn(Ae.commit.id,"Duplicate branch chain connector"),bn(Pe.commit.id,"Duplicate branch chain connector"),Qt({id:ft,kind:"ancestry",parent:Ae.commit.id,child:Pe.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}$n.add(ft);const Ge=gs(Ae,Pe),at=vs(Ae,Ge,Pe),Rt=lo(Pe);xn.push({id:ft,fromX:at.x,fromY:at.y,toX:Rt.x,toY:Rt.y,fromFace:at.face,toFace:Rt.face,zIndex:as(Pe.commit.branchName)}),Qt({id:ft,kind:"ancestry",parent:Ae.commit.id,child:Pe.commit.id,rendered:!0,reason:"branch chain rendered"}),Tn.add(Ae.commit.id),Tn.add(Pe.commit.id)}}return{branchByName:z,laneByName:N,mainCommits:E,branchCommitsByLane:$,branchPreviewSets:F,allCommits:Z,clustersByBranch:Ct,clusterKeyByCommitId:zt,clusterKeyBySha:Zt,leadByClusterKey:Oe,clusterCounts:ie,debugRows:ht,branchDebugRows:ut,nodes:te,normalizedSearchQuery:Q,matchingNodes:ve,matchingNodeIds:Xe,focusedNode:Ye,checkedOutClusterKey:bt,defaultCollapsedClumps:Ve,visibleCommitsList:Dt,renderNodes:yt,visibleNodesBySha:_t,visibleNodeByClusterKey:$t,pointFormatter:cn,contentWidth:On,contentHeight:is,connectors:xn,mergeConnectors:Js,connectorDecisions:ss,nodeWarnings:tn,connectorParentShas:nt,branchStartShas:En,branchOffNodeShas:ko,crossBranchOutgoingShas:co,commitIdsWithRenderedAncestry:Tn,branchBaseCommitByName:ae,firstBranchCommitByName:Se,mergeDestinations:Me,mergeTargetBranchesBySourceBranchAndCommitSha:mt}}const Gv=8,Kv=44,_y=120,gy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Ox(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<Gv){const F=d/_,W=h/_,H=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+F*H,c1y:n+W*H,c2x:i-F*H,c2y:a-W*H}}if(Math.min(p,g)<Kv){const F=d/_,W=h/_,H=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+F*H,c1y:n+W*H,c2x:i-F*H,c2y:a-W*H}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),j=Math.min(120,g*.32),k=Math.min(160,g*.42),M=gy(c),z=gy(u);if(!(M==="v"&&z==="h"||M==="v"&&z==null&&g>=p||M==null&&z==="h"&&g>=p||M==="v"&&z==="v"||M==null&&z==null&&g>p)){const F=i,W=n;return{kind:"elbowH",cx:F,cy:W,s1c1x:t+x*w,s1c1y:n,s1c2x:F-x*S,s1c2y:W,s2c1x:F,s2c1y:W+b*j,s2c2x:i,s2c2y:a-b*k}}const E=t,$=a;return{kind:"elbowV",cx:E,cy:$,s1c1x:t,s1c1y:n+b*k,s1c2x:E,s1c2y:$-b*j,s2c1x:E+x*w,s2c1y:$,s2c2x:i-x*S,s2c2y:a}}function Qv(t,n,i,a,c,u){const d=Ox(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function yy(t,n,i,a,c,u,d){const h=Ox(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(_y,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,j=a>=n?1:-1,k=h.cx-S*w,M=h.cy+j*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(k-S*w*.5,h.cy)} ${c(k,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,M)}`,`C ${c(h.cx,M+j*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(_y,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const dp=2.25,nc=dp/2,Zv=.45,Jv=.01,ya=dp,Cd=10,ew=-100,xy=0,by=.9,tw=.9,vy=.001,Xh=.001,nw=12,sw=_s+48;function Us(...t){return t.filter(Boolean).join(" ")}function ow(t){return Math.max(Zv,Math.min(dp,t))}function iw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function zx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function aw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function rw(t,n,i,a,c,u,d){const h=Qv(t,n,i,a,u,d),p=aw(h);return zx(c,p)}function $x(t,n){return{left:t.x,top:t.y+n,right:t.x+_s,bottom:t.y+Ec+Ps+4}}function lw(t,n){const i=sw,a=Math.max(120,Math.ceil(Ec+Ps+4-n+24)),c=new Map;for(const u of t){const d=$x(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=g;w<=_;w++){const S=`${b},${w}`;let j=c.get(S);j||(j=new Set,c.set(S,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function cw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=g;S<=_;S++){const j=d.get(`${w},${S}`);if(j)for(const k of j)x.add(k)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const j=$x(S,a);zx(n,j)&&b.add(w)}return b}function wy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ya;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function uw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function Sy(t,n,i){const a=n/ya;return!Number.isFinite(a)||a<=0?t:uw(t,100/a)}function Cy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function pi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Em(t,n){if(n){const i=Cy(n),a=Cy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Em(t,n)}function dw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function fw({fadeIn:t,className:n,style:i,onClick:a,dataCommitCard:c,children:u}){const[d,h]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){h(!0);return}h(!1);let p=null;const g=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>h(!0))});return()=>{cancelAnimationFrame(g),p!=null&&cancelAnimationFrame(p)}},[t]),l.jsx("div",{className:n,"data-commit-card":c,onClick:a,style:{...i,opacity:d?1:0,transition:t?"opacity 240ms ease-out":void 0},children:u})}function hw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,labelTopPx:g,inverseZoomStyle:_,displayZoom:x,selectedVisibleCommitShas:b,iconScaleStyle:w,normalizedSearchQuery:S,matchingNodeIds:j,focusedNode:k,renderNodes:M,shouldRenderNode:z,manuallyOpenedClumps:N,manuallyClosedClumps:E,defaultCollapsedClumps:$,leadByClusterKey:F,clusterKeyByCommitId:W,clusterCounts:H,commitIdsWithRenderedAncestry:K,nodeWarnings:ae,connectorParentShas:re,branchStartShas:Se,branchOffNodeShas:Ne,crossBranchOutgoingShas:ee,branchBaseCommitByName:fe,branchStartAccentClass:L,connectorParentAccentClass:ne,commitCornerRadiusPx:U,lineStrokeWidth:q,pointFormatter:ge,connectors:D,mergeConnectors:ce,cullConnectorPath:Z,flushCameraReactTick:he,setManuallyOpenedClumps:Ee,setManuallyClosedClumps:Ue,onCommitCardClick:Me,unpushedCommitShasSetByBranch:mt,checkedOutHeadSha:et}){const[ze,ct]=y.useState(new Set),it=y.useRef(null);y.useEffect(()=>{const Oe=new Set;H.forEach((Ze,Ie)=>{(N.has(Ie)||!$.has(Ie)&&!E.has(Ie))&&Oe.add(Ie)});const ie=it.current;if(ie==null){it.current=Oe;return}const He=[];if(Oe.forEach(Ze=>{ie.has(Ze)||He.push(Ze)}),He.length>0){ct(Ie=>{const ht=new Set(Ie);return He.forEach(ut=>ht.add(ut)),ht});const Ze=window.setTimeout(()=>{ct(Ie=>{const ht=new Set(Ie);return He.forEach(ut=>ht.delete(ut)),ht})},260);return it.current=Oe,()=>{window.clearTimeout(Ze)}}it.current=Oe},[H,$,E,N]);const Mt=(Oe,ie)=>{const He=ie.zIndex-Oe.zIndex;if(He!==0)return He;const Ze=Math.min(Oe.fromY,Oe.toY),Ie=Math.min(ie.fromY,ie.toY),ht=Ze-Ie;return ht!==0?ht:Oe.id.localeCompare(ie.id)},Ct=ce.filter(Oe=>Z(Oe)).sort(Mt),zt=D.filter(Oe=>Z(Oe)).sort(Mt),Zt=M.filter(Oe=>z(Oe));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Zt.map(Oe=>{var Dt,pt,We,vt,Pt;const ie=W.get(Oe.commit.visualId),He=ie?N.has(ie)||!$.has(ie)&&!E.has(ie):!1,Ze=ie?F.get(ie)===Oe.commit.visualId:!1,Ie=ie!=null&&He&&!Ze&&ze.has(ie),ht=ie&&(Dt=H.get(ie))!=null?Dt:1,ut=K.has(Oe.commit.id),dt=(pt=ae.get(Oe.commit.id))!=null?pt:[],Je=dt.length>0&&!ut,rt=b.includes(Oe.commit.id),Vt=Oe.commit.id==="WORKING_TREE"||Oe.commit.kind==="uncommitted",tt=Oe.commit.kind==="stash"||Oe.commit.id.startsWith("STASH:"),P=/^STASH:(\d+)$/.exec(Oe.commit.id),te=P?`Stash:${P[1]}`:null,Q=tt?Oe.commit.message.trim()&&Oe.commit.message.trim()!=="git-visualizer"?Oe.commit.message:"Stashed changes":Oe.commit.message,ve=Oe.commit.kind==="branch-created"&&Oe.commit.id.startsWith("BRANCH_HEAD:"),Ye=Vt||((vt=(We=mt.get(Oe.commit.branchName))==null?void 0:We.has(Oe.commit.id))!=null?vt:!1),Te=(Vt||et!=null&&Oe.commit.id===et)&&!rt,bt=Te?"text-[#38BDF2]":rt?"text-[#158EFC]":"text-muted-foreground",Ve=Te?{color:"#38BDF2"}:rt?{color:"#158EFC"}:void 0;return l.jsxs(fw,{fadeIn:Ie,dataCommitCard:"true",className:Us("group absolute z-20 cursor-pointer",S&&!j.has(Oe.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&j.has(Oe.commit.id)?"scale-[1.01]":"",(k==null?void 0:k.commit.id)===Oe.commit.id?"z-30 scale-[1.015]":""),style:{left:Oe.x,top:Oe.y,width:_s,height:Ec+Ps+4,overflow:"visible"},onClick:Kt=>Me(Kt,Oe),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{..._,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Us("min-w-0 h-4 flex-1 text-sm font-medium leading-none",bt,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ve,children:tt&&te?te:Oe.commit.branchName?`${Oe.commit.branchName}/${Oe.commit.id.slice(0,7)}`:Oe.commit.id.slice(0,7)}),Ze&&ht>1?l.jsx("button",{type:"button",onMouseDown:Kt=>{Kt.stopPropagation()},onClick:Kt=>{if(Kt.stopPropagation(),Kt.preventDefault(),!ie)return;!$.has(ie)?(Ee(yt=>{if(!yt.has(ie))return yt;const _t=new Set(yt);return _t.delete(ie),_t}),Ue(yt=>{const _t=new Set(yt);return _t.has(ie)?_t.delete(ie):_t.add(ie),_t})):(Ue(yt=>{if(!yt.has(ie))return yt;const _t=new Set(yt);return _t.delete(ie),_t}),Ee(yt=>{const _t=new Set(yt);return _t.has(ie)?_t.delete(ie):_t.add(ie),_t})),he()},className:Us("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",bt),style:Ve,children:He?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${ht}`}):null]})}),l.jsx("div",{className:Us("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Te&&!Ye&&!tt&&!ve?"bg-[#EBF7FE]":rt&&!Ye&&!tt&&!ve?"bg-[#E5F0FF]":Ye||tt||ve?"bg-transparent":"bg-[#F5F5F5]",tt||Vt||ve?"border-dashed":"",Ne.has(Oe.commit.id)||Se.has(Oe.commit.id)||ee.has(Oe.commit.id)?L:re.has(Oe.commit.id)?ne:((Pt=fe.get(Oe.commit.branchName))==null?void 0:Pt.id)===Oe.commit.id?"border-amber-500":Je?"border-red-500":"",(S&&j.has(Oe.commit.id)&&!d,"")),style:{top:0,borderWidth:`${tt||Vt||ve?q*(2/1.5):q}px`,borderColor:Te?"#38BDF2":rt?"#158EFC":Yh,borderTopLeftRadius:0,borderTopRightRadius:`${U}px`,borderBottomRightRadius:`${U}px`,borderBottomLeftRadius:`${U}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:_,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Us("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",bt,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ve,children:Ze&&He?Q:Ze&&ht>1?`${Q} +${ht-1}`:Q}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:Je?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:dt.join(`
`),children:"Broken ancestry"}):null})]}),x>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Us("text-sm font-medium",bt),style:Ve,children:["@",Oe.commit.author]}),l.jsx("div",{className:Us("text-sm font-medium",bt),style:Ve,children:new Date(Oe.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(k==null?void 0:k.commit.id)===Oe.commit.id&&S?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:w,children:"Search result"}):null]})})]},Oe.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Ct.map(Oe=>{const{fromX:ie,fromY:He,toX:Ze,toY:Ie}=Oe,ht=yy(ie,He,Ze,Ie,ge,Oe.fromFace,Oe.toFace);return l.jsx("path",{d:ht,fill:"none",stroke:Yh,strokeWidth:q,strokeLinecap:"round",strokeLinejoin:"round"},Oe.id)}),zt.map(Oe=>{const{fromX:ie,fromY:He,toX:Ze,toY:Ie}=Oe,ht=yy(ie,He,Ze,Ie,ge,Oe.fromFace,Oe.toFace);return l.jsx("path",{d:ht,fill:"none",stroke:Yh,strokeWidth:q,strokeLinecap:"round",strokeLinejoin:"round"},Oe.id)})]})]})})})}function mw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:x,onPushCurrentBranch:b,onPushAllBranches:w,onPushCommitTargets:S,onDeleteSelection:j,onCreateBranchFromNode:k,onMergeRefsIntoBranch:M,selectedPushTargets:z,selectedPushLabel:N,canPushCurrentBranch:E,pushCurrentBranchLabel:$,pushableRemoteBranchCount:F,deletableSelectionCount:W,canCreateRootBranch:H,selectedCommitTargetOption:K,mergeInProgress:ae,setMergeTargetCommitSha:re,worktrees:Se,currentRepoPath:Ne,worktreeMenuOpen:ee,setWorktreeMenuOpen:fe,onSwitchToWorktree:L,onRemoveWorktree:ne,removeWorktreeInProgress:U,setCommitDialogOpen:q,setDeleteConfirmOpen:ge,setNewBranchDialogOpen:D}){const ce=t.length>0;return l.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("button",{type:"button",onClick:()=>q(!0),disabled:!g||i||ce||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||i||ce||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),l.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||ce||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),l.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||!E||ce||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":$}),l.jsx("button",{type:"button",onClick:()=>void(w==null?void 0:w()),disabled:!w||F<2||ce||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S(z.map(Z=>({branchName:Z.branchName,targetSha:Z.targetSha})))),disabled:!S||z.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:z.length>0?N:"Select commits to push",children:z.length>0?N:"Push selected"}),l.jsx("button",{type:"button",onClick:()=>ge(!0),disabled:!j||W===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"}),l.jsx("button",{type:"button",onClick:()=>D(!0),disabled:!k&&!H||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&K.options.length>0&&K.targetBranch&&M?l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),K.options.map(Z=>{const he=Z.targetBranch===K.targetBranch;return l.jsx("button",{type:"button",onClick:()=>re(Z.targetSha),className:Us("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",he?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:Z.targetBranch},`merge-${Z.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void M(K.sources,K.targetBranch),disabled:K.sources.length===0||ae,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:ae?"Merging...":"Confirm"})]}):null,Se.length>0&&(L||ne)?l.jsxs("div",{className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>fe(Z=>!Z),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[Se.length," ",Se.length===1?"Worktree":"Worktrees"]}),ee?l.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:Se.map(Z=>{var he;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:Z.path,children:Em(Z,Ne)?dw(Z.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(he=Z.branchName)!=null?he:"detached"," • ",Z.headSha.slice(0,7)]})]}),Em(Z,Ne)?l.jsxs("div",{className:"flex items-center gap-1",children:[L?l.jsx("button",{type:"button",onClick:()=>{fe(!1),L(Z.path)},disabled:U||Z.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,ne?l.jsx("button",{type:"button",onClick:()=>void ne(Z.path,Z.isPrunable),disabled:U,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:U?"...":"Remove"}):null]}):null]},Z.path)})}):null]}):null]})}function pw({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:h,renderedConnectorCount:p,totalConnectorCount:g,mapGridCullViewportInsetScreenPx:_,debugRows:x,branchDebugRows:b,connectorDecisions:w}){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:l.jsx("button",{type:"button",onClick:n,className:Us("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?l.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${h}`,`Rendered connectors: ${p} / ${g}`,"",...x,...b,"",...w.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null]})}function _w({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:j,onNewBranchCreateModeChange:k,onNewBranchDialogClose:M,onNewBranchConfirm:z,selectedCommitCanCreateBranch:N,createBranchFromNodeInProgress:E}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:$=>i($.target.value),onKeyDown:$=>{($.metaKey||$.ctrlKey)&&$.key==="Enter"&&($.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map($=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:$},$))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:Us("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>k("new-root"),className:Us("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:$=>j($.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:M,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:z,disabled:!w.trim()||E||S==="from-selected-node"&&!N,className:Us("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:E?"Creating...":"Create"})]})]})}):null]})}function gw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(nc),c=y.useRef({panX:0,panY:0,zoom:nc}),u=y.useRef(null),d=y.useRef(nc),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(nc),[b,w]=y.useState(0),S=y.useRef(null),j=y.useRef(0),k=y.useCallback(()=>{const K=t.current;if(!K)return null;const ae=K.getBoundingClientRect(),re=getComputedStyle(K),Se=Number.parseFloat(re.borderLeftWidth)||0,Ne=Number.parseFloat(re.borderTopWidth)||0,ee=Number.parseFloat(re.paddingLeft)||Cd,fe=Number.parseFloat(re.paddingTop)||Cd;return{x:ae.left+Se+ee,y:ae.top+Ne+fe}},[t]),M=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(K=>K+1)}),j.current=performance.now()},[]),z=y.useCallback((K,ae,re)=>{const Se=c.current;c.current={panX:K,panY:ae,zoom:re};const Ne=n.current;if(Ne&&(Ne.style.transform=`translate3d(${K}px, ${ae}px, 0) scale(${re/ya})`),Math.abs(d.current-re)>Xh&&(d.current=re,x(re)),Math.abs(re-Se.zoom)>Xh){M();return}const L=performance.now()-j.current;if(L>=xy){M();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,M()},xy-L)},[M,n]),N=y.useRef(null),E=y.useCallback(()=>{u.current!=null||!N.current||(u.current=window.requestAnimationFrame(N.current))},[]),$=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),F=y.useCallback((K,ae,re)=>{i.current={x:K,y:ae},a.current=re,$(),E()},[$,E]);N.current=()=>{u.current=null;const K=c.current,ae=i.current.x,re=i.current.y,Se=a.current,Ne=Math.abs(ae-K.panX)<=vy?ae:K.panX+(ae-K.panX)*by,ee=Math.abs(re-K.panY)<=vy?re:K.panY+(re-K.panY)*by,fe=Math.abs(Se-K.zoom)<=Xh?Se:K.zoom+(Se-K.zoom)*tw;z(Ne,ee,fe),Ne!==ae||ee!==re||fe!==Se?N.current&&(u.current=window.requestAnimationFrame(N.current)):M()};const W=y.useCallback((K,ae,re)=>{const Se=ow(re),Ne=c.current,ee=k();if(!ee){F(i.current.x,i.current.y,Se);return}const fe=K-ee.x,L=ae-ee.y,ne=Ne.zoom/ya,U=Se/ya,q=(fe-Ne.panX)/ne,ge=(L-Ne.panY)/ne;F(fe-q*U,L-ge*U,Se)},[k,F]),H=y.useCallback(K=>{if(K.preventDefault(),K.ctrlKey||K.metaKey){const ae=Math.exp(-K.deltaY*Jv);W(K.clientX,K.clientY,a.current*ae);return}F(i.current.x-K.deltaX,i.current.y-K.deltaY,a.current)},[F,W]);return y.useLayoutEffect(()=>(z(0,0,nc),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[z]),y.useLayoutEffect(()=>{const K=n.current;if(!K)return;const ae=c.current;K.style.transform=`translate3d(${ae.panX}px, ${ae.panY}px, 0) scale(${ae.zoom/ya})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:k,flushCameraReactTick:M,syncCamera:F,handleWheel:H}}function yw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function xw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[j,k]=y.useState(null),M=y.useCallback(N=>{const E=t.current,$=i();if(!E||!$)return[];const F=E.getBoundingClientRect(),W=n.current.zoom/ya;if(W<=0)return[];const H=[],K=N.left,ae=N.left+N.width,re=N.top,Se=N.top+N.height;for(const Ne of a){if(!c(Ne))continue;const ee=$.x+n.current.panX+Ne.x*W-F.left,fe=$.y+n.current.panY+Ne.y*W-F.top,L=ee+_s*W,ne=fe+(Ec+Ps)*W;!(L<K||ee>ae||ne<re||fe>Se)&&H.push(Ne.commit.id)}return H},[i,a,n,t,c]),z=y.useCallback(N=>{if(N.button!==0)return;const E=N.target;if(E!=null&&E.closest("[data-commit-card]")||E!=null&&E.closest("button, a, input, textarea, select"))return;const $=t.current;if(!$)return;N.preventDefault();const F=$.getBoundingClientRect(),W=N.clientX-F.left,H=N.clientY-F.top;d.current={startX:W,startY:H,currentX:W,currentY:H,additive:N.metaKey||N.ctrlKey},h.current=!1,p.current=N.metaKey||N.ctrlKey?w:[],_(!0),b({left:W,top:H,width:0,height:0})},[t,w]);return y.useEffect(()=>{const N=$=>{var re;const F=d.current;if(!F)return;const W=t.current;if(!W)return;const H=W.getBoundingClientRect();F.currentX=$.clientX-H.left,F.currentY=$.clientY-H.top,!h.current&&(Math.abs(F.currentX-F.startX)>2||Math.abs(F.currentY-F.startY)>2)&&(h.current=!0);const K=yw(F);b(K);const ae=M(K);S(F.additive?Array.from(new Set([...p.current,...ae])):Array.from(new Set(ae))),F.additive||k((re=ae[ae.length-1])!=null?re:null)},E=()=>{if(d.current){const $=h.current;d.current=null,h.current=!1,_(!1),b(null),$||(S([]),k(null));return}u()};return window.addEventListener("mousemove",N),window.addEventListener("mouseup",E),()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",E)}},[M,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:j,setMergeTargetCommitSha:k,startMarqueeDrag:z}}function ky({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:j,mergeInProgress:k=!1,onPushAllBranches:M,onPushCurrentBranch:z,onPushCommitTargets:N,pushInProgress:E=!1,onDeleteSelection:$,deleteInProgress:F=!1,worktrees:W=[],currentRepoPath:H,onRemoveWorktree:K,removeWorktreeInProgress:ae=!1,onSwitchToWorktree:re,onStashLocalChanges:Se,stashInProgress:Ne=!1,stashDisabled:ee=!1,onCommitLocalChanges:fe,commitInProgress:L=!1,commitDisabled:ne=!1,onStageAllChanges:U,stageInProgress:q=!1,onCreateBranchFromNode:ge,onCreateRootBranch:D,createBranchFromNodeInProgress:ce=!1,orientation:Z="horizontal",branchCommitPreviews:he={},branchParentByName:Ee={},branchUniqueAheadCounts:Ue={},gridSearchQuery:Me="",gridSearchJumpToken:mt=0,gridFocusSha:et=null,checkedOutRef:ze=null,onGridSearchResultCountChange:ct,onGridSearchFocusChange:it,onInteractionChange:Mt,manuallyOpenedClumps:Ct,manuallyClosedClumps:zt,setManuallyOpenedClumps:Zt,setManuallyClosedClumps:Oe,layoutModel:ie}){var Ao,yo,eo,Po,ri,An,Jn,to,Vi,ea,Ho,kr;const He=y.useRef(null),Ze=y.useRef(null),Ie=y.useRef(null),[ht,ut]=y.useState(!1),[dt,Je]=y.useState(!1),[rt,Vt]=y.useState(""),[tt,P]=y.useState(!1),[te,Q]=y.useState(!1),[ve,Ye]=y.useState(""),[Xe,Te]=y.useState("from-selected-node"),[bt,Ve]=y.useState(()=>new Set),[Dt,pt]=y.useState(()=>new Set),We=Ct!=null?Ct:bt,vt=zt!=null?zt:Dt,Pt=Zt!=null?Zt:Ve,Kt=Oe!=null?Oe:pt,[Ke,yt]=y.useState(!1),[_t,$t]=y.useState(null),[cn,xt]=y.useState(null),{isCameraMoving:Xt,renderedZoom:On,cameraRenderTick:is,renderedCameraRef:xn,interactionIdleTimeoutRef:io,getTransformLayerOriginScreen:as,flushCameraReactTick:ss,syncCamera:Qt,handleWheel:Tn}=gw({mapPadHostRef:Ze,transformLayerRef:Ie}),tn=y.useMemo(()=>up(t,d,he,Ee),[t,d,he,Ee]),bn=y.useMemo(()=>Sd({lanes:tn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:he,branchParentByName:Ee,branchUniqueAheadCounts:Ue,manuallyOpenedClumps:We,manuallyClosedClumps:vt,isDebugOpen:Ke,gridSearchQuery:Me,gridFocusSha:et,checkedOutRef:ze!=null?ze:null,orientation:Z}),[tn,t,n,i,a,d,he,Ee,Ue,We,vt,Ke,Me,et,(Ao=ze==null?void 0:ze.headSha)!=null?Ao:null,(yo=ze==null?void 0:ze.branchName)!=null?yo:null,Z]),nt=ie!=null?ie:bn,En=y.useMemo(()=>Sd({lanes:tn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:he,branchParentByName:Ee,branchUniqueAheadCounts:Ue,manuallyOpenedClumps:We,manuallyClosedClumps:vt,isDebugOpen:Ke,gridSearchQuery:Me,gridFocusSha:et,checkedOutRef:ze!=null?ze:null,orientation:Z}),[tn,t,n,i,a,d,he,Ee,Ue,We,vt,Ke,Me,et,(eo=ze==null?void 0:ze.headSha)!=null?eo:null,(Po=ze==null?void 0:ze.branchName)!=null?Po:null,Z]),{allCommits:ko,clusterKeyByCommitId:ao,leadByClusterKey:$n,clusterCounts:Rs,matchingNodes:ro,matchingNodeIds:lo,normalizedSearchQuery:bs,focusedNode:gs,defaultCollapsedClumps:vs,renderNodes:an,visibleNodesBySha:ii,contentWidth:Bo,contentHeight:Js,connectors:qn,mergeConnectors:co,connectorDecisions:Lo,nodeWarnings:Oo,commitIdsWithRenderedAncestry:qo,connectorParentShas:po,branchStartShas:ws,branchOffNodeShas:Bs,crossBranchOutgoingShas:kn,branchBaseCommitByName:_i,pointFormatter:rs}=nt,ai=!!bs,Vs=On/ya,zo=y.useMemo(()=>({transform:`scale(${1/Vs})`,transformOrigin:"top left",width:`${100*Vs}%`,height:`${100*Vs}%`}),[Vs]),jo=-(20/Vs),Ss=y.useMemo(()=>{const Be=new Map;for(const st of an)Be.set(st.commit.visualId,st);return Be},[an]),Ys=y.useMemo(()=>lw(an,jo),[an,jo]),vn=Be=>{var It;const st=Be.commit.id,wt=Be.commit.visualId;if(ai&&lo.has(st)||(gs==null?void 0:gs.commit.id)===st||_t===null)return!0;if(!_t.has(wt))return!1;const lt=ao.get(wt);return lt&&((It=Rs.get(lt))!=null?It:1)>1&&(We.has(lt)||!vs.has(lt)&&!vt.has(lt)),!0},_o=1.5/Vs,ls=nw/Vs,Gn=y.useMemo(()=>({transform:`scale(${1/Vs})`,transformOrigin:"center"}),[Vs]),gi="border-slate-400/70",Mo="border-blue-500",Go=y.useMemo(()=>new Map(t.map(Be=>[Be.name,Be])),[t]);y.useMemo(()=>new Set(t.filter(Be=>Be.commitsAhead===0&&!Be.name.startsWith("*")).map(Be=>Be.name)),[t]);const qt=y.useMemo(()=>{var st,wt;const Be=new Map;for(const lt of an){const It=(st=Be.get(lt.commit.id))!=null?st:new Set;It.add(lt.commit.branchName),Be.set(lt.commit.id,It)}for(const lt of i){const It=(wt=Be.get(lt.fullSha))!=null?wt:new Set;lt.branch&&It.add(lt.branch),Be.set(lt.fullSha,It)}return Be},[an,i,d]),Di=y.useMemo(()=>new Map(Object.entries(c).map(([Be,st])=>[Be,new Set(st)])),[c]),Ls=y.useCallback(()=>{io.current,ss()},[ss,io]),{isMarqueeSelecting:Ko,marqueeRect:$o,selectedCommitShas:Io,setSelectedCommitShas:Os,mergeTargetCommitSha:To,setMergeTargetCommitSha:js,startMarqueeDrag:jn}=xw({scrollContainerRef:He,renderedCameraRef:xn,getTransformLayerOriginScreen:as,renderNodes:an,shouldRenderNode:vn,onPointerReleaseNoMarquee:Ls}),uo=y.useMemo(()=>new Set(an.map(Be=>Be.commit.id)),[an]),Kn=y.useMemo(()=>Io.filter(Be=>uo.has(Be)),[Io,uo]),ys=y.useCallback((Be,st)=>{var It;if(!st)return!1;if(((It=he[Be])!=null?It:[]).some(Bt=>pi(Bt.fullSha,st)||pi(Bt.sha,st)))return!0;const lt=Go.get(Be);return!!(lt!=null&&lt.headSha&&pi(lt.headSha,st))},[he,Go]),Qn=(ri=ze==null?void 0:ze.branchName)!=null?ri:null,nn=(An=ze==null?void 0:ze.headSha)!=null?An:null,Ws=Qn==null,Fs=y.useMemo(()=>{if(!et)return null;const Be=an.filter(st=>st.commit.id===et);return Be.length===0?null:Be.length===1||!gs?Be[0]:Be.reduce((st,wt)=>{const lt=(st.x-gs.x)**2+(st.y-gs.y)**2;return(wt.x-gs.x)**2+(wt.y-gs.y)**2<lt?wt:st})},[et,an,gs]),Cs=y.useCallback((Be,st,wt)=>{for(const lt of W){if(!qh(lt,H))continue;if(lt.branchName){if(lt.branchName===Be&&pi(lt.headSha,st))return lt;continue}if(!pi(lt.headSha,st)&&!pi(lt.headSha,wt))continue;if(lt.parentSha&&ys(Be,lt.parentSha)||ys(Be,lt.headSha))return lt;const It=Go.get(Be);if(It&&pi(It.headSha,lt.headSha)||Be===d&&i.some(Bt=>pi(Bt.fullSha,lt.headSha)))return lt}return null},[W,H,ys,Go,d,i]),Zn=y.useCallback(Be=>{for(const st of W)if(qh(st,H)&&st.branchName===Be)return st;return null},[W,H]),Eo=y.useCallback((Be,st)=>{for(const wt of W)if(qh(wt,H)&&(pi(wt.headSha,Be)||pi(wt.headSha,st)))return wt;return null},[W,H]),Ms=y.useCallback(Be=>{var st;return Array.from((st=qt.get(Be))!=null?st:[])},[qt]),go=y.useMemo(()=>{var It,Bt,mn,un;const Be=new Map;for(const cs of Kn){const ks=Ms(cs);if(ks.length===0)continue;const xo=(It=ks.find(ho=>ho!==d))!=null?It:ks[0],ta=Kn.filter(ho=>ho!==cs).filter(ho=>!new Set(Ms(ho)).has(xo));Be.set(xo,{targetSha:cs,targetBranch:xo,sourceRefs:ta})}const st=Array.from(Be.values()),wt=To?st.find(cs=>{var ks;return cs.targetSha===To||cs.targetBranch===((ks=Ms(To)[0])!=null?ks:"")}):null,lt=(Bt=wt!=null?wt:st[st.length-1])!=null?Bt:null;return{options:st,selected:lt,targetBranch:(mn=lt==null?void 0:lt.targetBranch)!=null?mn:null,sources:(un=lt==null?void 0:lt.sourceRefs)!=null?un:[]}},[Kn,Ms,d,To]),Ts=y.useMemo(()=>{const Be=[...Qn===d?[{name:d,headSha:nn!=null?nn:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(st=>!st.name.startsWith("*")&&st.unpushedCommits>0&&st.remoteSyncStatus!=="on-github").map(st=>[st.name,st]);return new Map(Be)},[t,Qn,nn,d,a.length]),Es=y.useMemo(()=>{const Be=lt=>{var Bt;const It=Ms(lt).filter(mn=>Ts.has(mn));return It.length===0?null:It.length===1?It[0]:Qn&&It.includes(Qn)?Qn:(Bt=It.find(mn=>mn!==d))!=null?Bt:It[0]},st=lt=>{var It;return lt===d?a.map(Bt=>{var mn,un;return{fullSha:Bt.fullSha,sha:Bt.sha,parentSha:(mn=Bt.parentSha)!=null?mn:null,message:Bt.message,author:Bt.author,date:Bt.date,kind:(un=Bt.kind)!=null?un:"commit"}}):(It=he[lt])!=null?It:[]},wt=new Map;for(const lt of Kn){const It=Be(lt);if(!It)continue;const Bt=Ts.get(It);if(!Bt)continue;const mn=st(It).slice(0,Bt.unpushedCommits),un=mn.findIndex(ks=>ks.fullSha===lt);if(un===-1)continue;const cs=wt.get(It);(!cs||un<cs.targetIndex)&&wt.set(It,{branchName:It,targetSha:lt,targetIndex:un,commitCount:mn.length-un})}return Array.from(wt.values())},[Kn,Ms,Ts,Qn,d,a,he]),fo=y.useMemo(()=>Array.from(new Set(Kn.map(Be=>/^STASH:(\d+)$/.exec(Be)).filter(Be=>!!Be).map(Be=>parseInt(Be[1],10)))).sort((Be,st)=>Be-st),[Kn]),Rn=Kn.includes("WORKING_TREE"),I=(Rn?1:0)+fo.length,se=[...Rn?["Uncommitted changes"]:[],...fo.map(Be=>`Stash ${Be+1}`)],le=Ts.size,_e=!Ws&&!!Qn&&Ts.has(Qn),C=Qn?`Push ${Qn}`:"Push current branch",R=Es.length===1?Es[0].commitCount>1?`Push ${Es[0].commitCount} commits on ${Es[0].branchName}`:`Push ${Es[0].targetSha.slice(0,7)} on ${Es[0].branchName}`:`Push ${Es.length} selected ranges`;y.useEffect(()=>{Mt==null||Mt(Xt||Ko)},[Xt,Ko,Mt]),y.useEffect(()=>{ct==null||ct(bs?ro.length:null)},[ro.length,bs,ct]);const X=y.useMemo(()=>{var cs,ks,xo,ta,ho,ba;if(!bs)return null;const Be=bs,st=t.map(Qo=>Qo.name),wt=st.find(Qo=>Qo.toLowerCase()===Be),lt=wt!=null?wt:st.find(Qo=>Qo.toLowerCase().startsWith(Be)),Bt=lt!=null?lt:st.find(Qo=>Qo.toLowerCase().includes(Be));if(!Bt)return null;const mn=(cs=t.find(Qo=>Qo.name===Bt))!=null?cs:null;if(mn!=null&&mn.headSha)return mn.headSha;const un=(ks=he[Bt])!=null?ks:[];return un.length>0?(ta=(xo=un[0])==null?void 0:xo.fullSha)!=null?ta:null:Bt===d&&(ba=(ho=i[0])==null?void 0:ho.fullSha)!=null?ba:null},[bs,t,he,d,i]);y.useEffect(()=>{var st,wt;if(!bs){it==null||it(null);return}if(mt<=0)return;if(X){it==null||it(X);return}const Be=(wt=(st=ro[0])==null?void 0:st.commit.id)!=null?wt:null;it==null||it(Be)},[ro,bs,it,X,mt]),y.useLayoutEffect(()=>{if(!et)return;const Be=He.current,st=Fs;if(!Be||!st)return;const wt=as();if(!wt)return;const lt=Be.getBoundingClientRect(),It=xn.current.zoom,Bt=It/ya,mn=st.x+_s/2,un=st.y+Ec+Ps/2,cs=lt.left+lt.width/2,ks=lt.top+lt.height/2;Qt(cs-wt.x-mn*Bt,ks-wt.y-un*Bt,It)},[et,mt,Fs,as,Qt,xn]);const ue=(Vi=(to=cn==null?void 0:cn.width)!=null?to:(Jn=He.current)==null?void 0:Jn.clientWidth)!=null?Vi:0,Ae=(kr=(Ho=cn==null?void 0:cn.height)!=null?Ho:(ea=He.current)==null?void 0:ea.clientHeight)!=null?kr:0,Pe=ue>0&&Ae>0?wy(ue,Ae,xn.current,{innerPaddingPx:Cd}):null,Nt=Pe!=null?Sy(Pe,xn.current.zoom):null,ft=Be=>{if(!Nt)return!0;const{fromX:st,fromY:wt,toX:lt,toY:It}=Be;return rw(st,wt,lt,It,Nt,Be.fromFace,Be.toFace)};y.useLayoutEffect(()=>{var mn;const Be=He.current;if(!Be||Be.clientWidth<=0||Be.clientHeight<=0)return;const st=Be.clientWidth,wt=Be.clientHeight;xt(un=>(un==null?void 0:un.width)===st&&(un==null?void 0:un.height)===wt?un:{width:st,height:wt});const lt=wy(st,wt,xn.current,{innerPaddingPx:Cd});if(!lt){$t(un=>un===null?un:null);return}const It=Sy(lt,xn.current.zoom),Bt=cw(Ys,It,Ss,jo);for(const un of an){const cs=ao.get(un.commit.visualId);if(!cs||((mn=Rs.get(cs))!=null?mn:1)<=1)continue;(We.has(cs)||!vs.has(cs)&&!vt.has(cs))&&Bt.add(un.commit.visualId)}$t(un=>iw(un,Bt)?un:Bt)},[On,mt,et,Xt,is,We,vt,vs,ao,Rs,an,cn,Ys,Ss,jo]),y.useLayoutEffect(()=>{const Be=He.current;if(!Be)return;const st=()=>{const lt=Be.clientWidth,It=Be.clientHeight;lt<=0||It<=0||xt(Bt=>(Bt==null?void 0:Bt.width)===lt&&(Bt==null?void 0:Bt.height)===It?Bt:{width:lt,height:It})};st();const wt=new ResizeObserver(st);return wt.observe(Be),()=>wt.disconnect()},[ko.length]);const Ge=an.filter(Be=>vn(Be)).length,at=co.filter(Be=>ft(Be)).length,Rt=qn.filter(Be=>ft(Be)).length,Yt=y.useCallback((Be,st)=>{Be.stopPropagation();const wt=st.commit.id;if(Be.shiftKey?(Os(mn=>mn.includes(wt)?mn.filter(un=>un!==wt):[...mn,wt]),js(wt)):(Os(mn=>mn.includes(wt)?[]:[wt]),js(mn=>mn===wt?null:wt)),!(Be.metaKey||Be.ctrlKey||Be.detail>=2)||wt==="WORKING_TREE")return;const It=wt.length>=40?wt.slice(0,7):wt;let Bt=null;if(st.commit.branchName?(Bt=Cs(st.commit.branchName,wt,It),Bt||(Bt=Zn(st.commit.branchName))):Bt=Eo(wt,It),Bt&&re){re(Bt.path);return}h==null||h({commitSha:wt})},[Eo,Cs,Zn,h,re]),fn=y.useCallback(async()=>{if(!fe)return;await fe(rt)&&(Je(!1),Vt(""))},[fe,rt]),rn=y.useCallback(async()=>{$&&(await $({branchNames:[],discardUncommittedChanges:Rn,stashIndices:fo}),P(!1),Os([]),js(null))},[$,Rn,fo]),Qe=y.useCallback(async()=>{const Be=ve.trim();if(Be){if(Xe==="new-root"){if(!D)return;await D(Be)}else{if(!ge||Kn.length!==1)return;const st=Kn[0];if(!(st==="WORKING_TREE"||st.startsWith("STASH:")))return;await ge(st,Be)}Q(!1),Ye(""),Te("from-selected-node"),Os([]),js(null)}},[Xe,ve,ge,D,Kn]),wn=Kn.length===1&&(Kn[0]==="WORKING_TREE"||Kn[0].startsWith("STASH:")),zs=!!D;return y.useEffect(()=>{if(te){if(!wn&&zs){Te("new-root");return}wn&&Te("from-selected-node")}},[zs,te,wn]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[l.jsx(pw,{isOpen:Ke,onToggle:()=>yt(Be=>!Be),onClose:()=>yt(!1),visibleBounds:Nt,renderedNodeCount:Ge,totalNodeCount:an.length,renderedMergeConnectorCount:at,totalMergeConnectorCount:co.length,renderedConnectorCount:Rt,totalConnectorCount:qn.length,mapGridCullViewportInsetScreenPx:ew,debugRows:En.debugRows,branchDebugRows:En.branchDebugRows,connectorDecisions:Lo}),ko.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(hw,{scrollContainerRef:He,mapPadHostRef:Ze,transformLayerRef:Ie,isMarqueeSelecting:Ko,contentWidth:Bo,contentHeight:Js,isCameraMoving:Xt,onWheel:Tn,onMouseDown:jn,labelTopPx:jo,inverseZoomStyle:zo,displayZoom:Vs,iconScaleStyle:Gn,selectedVisibleCommitShas:Kn,normalizedSearchQuery:bs,matchingNodeIds:lo,focusedNode:Fs,renderNodes:an,shouldRenderNode:vn,manuallyOpenedClumps:We,manuallyClosedClumps:vt,defaultCollapsedClumps:vs,leadByClusterKey:$n,clusterKeyByCommitId:ao,clusterCounts:Rs,commitIdsWithRenderedAncestry:qo,nodeWarnings:Oo,connectorParentShas:po,branchStartShas:ws,branchOffNodeShas:Bs,crossBranchOutgoingShas:kn,branchBaseCommitByName:_i,branchStartAccentClass:Mo,connectorParentAccentClass:gi,commitCornerRadiusPx:ls,lineStrokeWidth:_o,pointFormatter:rs,connectors:qn,mergeConnectors:co,cullConnectorPath:ft,flushCameraReactTick:ss,setManuallyOpenedClumps:Pt,setManuallyClosedClumps:Kt,onCommitCardClick:Yt,unpushedCommitShasSetByBranch:Di,checkedOutHeadSha:nn}),$o&&Ko?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:$o.left,top:$o.top,width:$o.width,height:$o.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(mw,{selectedVisibleCommitShas:Kn,commitInProgress:L,commitDisabled:ne,stageInProgress:q,stashInProgress:Ne,stashDisabled:ee,pushInProgress:E,deleteInProgress:F,createBranchFromNodeInProgress:ce,onCommitLocalChanges:fe,onStageAllChanges:U?()=>void U():void 0,onStashLocalChanges:Se,onPushCurrentBranch:z,onPushAllBranches:M,onPushCommitTargets:N,onDeleteSelection:$,onCreateBranchFromNode:ge,onMergeRefsIntoBranch:j,selectedPushTargets:Es,selectedPushLabel:R,canPushCurrentBranch:_e,pushCurrentBranchLabel:C,pushableRemoteBranchCount:le,deletableSelectionCount:I,canCreateRootBranch:zs,selectedCommitTargetOption:go,mergeInProgress:k,mergeTargetCommitSha:To,setMergeTargetCommitSha:js,worktrees:W,currentRepoPath:H,worktreeMenuOpen:ht,setWorktreeMenuOpen:ut,onSwitchToWorktree:re,onRemoveWorktree:K,removeWorktreeInProgress:ae,setCommitDialogOpen:Je,setDeleteConfirmOpen:P,setNewBranchDialogOpen:Q}),l.jsx(_w,{commitDialogOpen:dt,commitMessageDraft:rt,onCommitMessageDraftChange:Vt,onCommitDialogClose:()=>Je(!1),onCommitConfirm:()=>void fn(),commitInProgress:L,deleteConfirmOpen:tt,deleteSelectionItems:se,onDeleteConfirmClose:()=>P(!1),onDeleteConfirm:()=>void rn(),deleteInProgress:F,deletableSelectionCount:I,newBranchDialogOpen:te,newBranchName:ve,newBranchCreateMode:Xe,onNewBranchNameChange:Ye,onNewBranchCreateModeChange:Te,onNewBranchDialogClose:()=>Q(!1),onNewBranchConfirm:()=>void Qe(),selectedCommitCanCreateBranch:wn,createBranchFromNodeInProgress:ce})]})}function bw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridFocusSha:j=null,onGridSearchResultCountChange:k,onGridSearchFocusChange:M,view:z="time",isLoading:N=!1,scrollRequest:E,focusedErrorBranch:$,checkedOutRef:F=null,mapTopInsetPx:W=0,onMergeRefsIntoBranch:H,mergeInProgress:K=!1,onPushAllBranches:ae,onPushCurrentBranch:re,onPushCommitTargets:Se,pushInProgress:Ne=!1,onDeleteSelection:ee,deleteInProgress:fe=!1,worktrees:L=[],currentRepoPath:ne,onRemoveWorktree:U,removeWorktreeInProgress:q=!1,onSwitchToWorktree:ge,onStashLocalChanges:D,stashInProgress:ce=!1,stashDisabled:Z=!1,onCommitLocalChanges:he,commitInProgress:Ee=!1,commitDisabled:Ue=!1,onStageAllChanges:Me,stageInProgress:mt=!1,onCreateBranchFromNode:et,onCreateRootBranch:ze,createBranchFromNodeInProgress:ct=!1,onMoveNodeBackToBranch:it,orientation:Mt="horizontal",onInteractionChange:Ct,manuallyOpenedClumps:zt,manuallyClosedClumps:Zt,setManuallyOpenedClumps:Oe,setManuallyClosedClumps:ie,layoutModel:He}){const Ze=new Set(u.map(Je=>Je.branchName)),Ie=14*864e5,ht=Date.now();function ut(Je){return Ze.has(Je.name)||ht-new Date(Je.lastCommitDate).getTime()<=Ie}const dt=t.filter(Je=>Je.status==="stale"&&ut(Je)).sort((Je,rt)=>new Date(rt.lastCommitDate).getTime()-new Date(Je.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:z==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(ky,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridFocusSha:j,onGridSearchResultCountChange:k,onGridSearchFocusChange:M,staleBranches:dt,isLoading:N,scrollRequest:E,focusedErrorBranch:$,checkedOutRef:F,mapTopInsetPx:W,onMergeRefsIntoBranch:H,mergeInProgress:K,onPushAllBranches:ae,onPushCurrentBranch:re,onPushCommitTargets:Se,pushInProgress:Ne,onDeleteSelection:ee,deleteInProgress:fe,worktrees:L,currentRepoPath:ne,onRemoveWorktree:U,removeWorktreeInProgress:q,onSwitchToWorktree:ge,onStashLocalChanges:D,stashInProgress:ce,stashDisabled:Z,onCommitLocalChanges:he,commitInProgress:Ee,commitDisabled:Ue,onStageAllChanges:Me,stageInProgress:mt,onCreateBranchFromNode:et,onCreateRootBranch:ze,createBranchFromNodeInProgress:ct,onMoveNodeBackToBranch:it,orientation:Mt,onInteractionChange:Ct,manuallyOpenedClumps:zt,manuallyClosedClumps:Zt,setManuallyOpenedClumps:Oe,setManuallyClosedClumps:ie,layoutModel:He})}):z==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(ky,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridFocusSha:j,checkedOutRef:F,onGridSearchResultCountChange:k,onGridSearchFocusChange:M,onInteractionChange:Ct,manuallyOpenedClumps:zt,manuallyClosedClumps:Zt,setManuallyOpenedClumps:Oe,setManuallyClosedClumps:ie,layoutModel:He,orientation:Mt})}):null})}const _r=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function vw(t,n,i,a){if(!t)return null;const c=d=>_r(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(g=>c(g.fullSha)||c(g.sha)))return d;return null}function ww(t,n,i,a,c,u){var re,Se,Ne,ee,fe,L;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(Se=(re=i[0])==null?void 0:re.fullSha)!=null?Se:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(ne=>({name:ne.name,headSha:ne.headSha,isDefault:!1}))],x=d?_.filter(ne=>_r(ne.headSha,d)):[],b=vw(d,i,a,u),w=b?_.find(ne=>ne.name===b):void 0,S=(ee=(Ne=x.find(ne=>ne.isDefault))!=null?Ne:x[0])!=null?ee:w,j=!!(S&&d&&_r(S.headSha,d)),k=S&&!S.isDefault?n.find(ne=>ne.name===S.name):void 0,M=(()=>{var U;if(!d)return null;const ne=i.find(q=>_r(q.fullSha,d)||_r(q.sha,d));if(ne!=null&&ne.date)return ne.date;if(k){const q=((U=a[k.name])!=null?U:[]).find(ge=>_r(ge.fullSha,d)||_r(ge.sha,d));if(q!=null&&q.date)return q.date}return null})(),z=M?new Date(M).getTime():Number.NaN,N=Date.now(),E=Number.isFinite(z)?Math.max(N,z+1+t.index):N+t.index,$=new Date(E).toISOString(),F=t.message.trim(),W={fullSha:h,sha:p,parentSha:d,message:F||p,author:"You",date:$,kind:"stash"},H={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(fe=k==null?void 0:k.name)!=null?fe:u,message:F||p,author:"You",date:$,kind:"stash"};if(j&&(S!=null&&S.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,H]};if(j&&k)return{branches:n.map(U=>U.name===k.name?{...U,commitsAhead:U.commitsAhead+1,unpushedCommits:U.unpushedCommits+1,lastCommitDate:$,headSha:h}:U),directCommits:i,branchCommitPreviews:{...a,[k.name]:[W,...a[k.name]||[]]},branchUniqueAheadCounts:{...c,[k.name]:Math.max(0,(L=Object.prototype.hasOwnProperty.call(c,k.name)?c[k.name]:k.commitsAhead)!=null?L:0)+1}};const K=`*Stash:${t.index}`;return{branches:[{name:K,commitsAhead:1,commitsBehind:0,lastCommitDate:$,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(S==null?void 0:S.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[K]:[W]},branchUniqueAheadCounts:{...c,[K]:1}}}function Ix(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=ww(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function Sw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:g,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var W,H,K,ae;const j=Ix(g,t,i,u,h,c);let k=j.branches,M=j.directCommits,z=j.branchCommitPreviews,N=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const re=p.headSha||p.parentSha||null,Se=(H=(W=M[0])==null?void 0:W.fullSha)!=null?H:null,Ne=(Me,mt)=>!Me||!mt?!1:Me===mt||Me.startsWith(mt)||mt.startsWith(Me),ee=[{name:c,headSha:Se!=null?Se:"",isDefault:!0},...k.map(Me=>({name:Me.name,headSha:Me.headSha,isDefault:!1}))],fe=p.branchName?ee.find(Me=>Me.name===p.branchName):void 0,L=re?ee.filter(Me=>Ne(Me.headSha,re)):[],ne=(K=fe!=null?fe:L.find(Me=>Me.isDefault))!=null?K:L[0],U=!!(ne&&re&&Ne(ne.headSha,re)),q=ne&&!ne.isDefault?k.find(Me=>Me.name===ne.name):void 0,ge=(()=>{var mt;if(!re)return null;const Me=M.find(et=>Ne(et.fullSha,re)||Ne(et.sha,re));if(Me!=null&&Me.date)return Me.date;if(q){const et=((mt=z[q.name])!=null?mt:[]).find(ze=>Ne(ze.fullSha,re)||Ne(ze.sha,re));if(et!=null&&et.date)return et.date}return null})(),D=ge?new Date(ge).getTime():Number.NaN,ce=Date.now(),Z=Number.isFinite(D)?Math.max(ce,D+1):ce,he=new Date(Z).toISOString(),Ee={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:re,message:"Local uncommitted changes",author:"You",date:he,kind:"uncommitted"},Ue={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:re,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:he,kind:"uncommitted"};if(U&&(ne!=null&&ne.isDefault))M=[...M,Ue];else if(U&&q)k=k.map(Me=>Me.name===q.name?{...Me,commitsAhead:Me.commitsAhead+1,unpushedCommits:Me.unpushedCommits+1,lastCommitDate:he,headSha:"WORKING_TREE"}:Me),z={...z,[q.name]:[Ee,...z[q.name]||[]]},N={...N,[q.name]:Math.max(0,(ae=Object.prototype.hasOwnProperty.call(N,q.name)?N[q.name]:q.commitsAhead)!=null?ae:0)+1};else{const Me={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:he,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:re!=null?re:void 0,parentBranch:(ne==null?void 0:ne.name)||p.branchName||c};k=[Me,...k],z={...z,[Me.name]:[Ee]},N={...N,[Me.name]:1}}}const E={...d};E[c]=null;const $=up(k,c,z,E),F=Sd({lanes:$,branches:k,mergeNodes:n,directCommits:M,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:z,branchParentByName:E,branchUniqueAheadCounts:N,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:k,enrichedBranchCommitPreviews:z,enrichedBranchUniqueAheadCounts:N,enrichedDirectCommits:M,sharedGridLayoutModel:F}}function jy(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function My(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ty(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Am({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z}){var D,ce;if(_.has(t)||!a.get(t))return null;const E=(D=u.get(t))!=null?D:[],$=E.length>0,F=y.useMemo(()=>{var Z;return[...(Z=c[t])!=null?Z:[]]},[c,t]),W=x&&F.length>0,H=x,K=$||W,ae=h.has(t),re=H?F:[],Se=ae&&re.length>0,Ne=g===t,ee=new Set(_);ee.add(t);const fe="top-[-0.2rem] h-4.5 w-[10px]",L="rounded-bl-[7px]",ne="left-[0.65rem]",U=new Map,q=[];for(const Z of E){const he=d.get(Z);if(he){const Ee=re.findIndex(Ue=>pi(Ue.fullSha,he)||pi(Ue.sha,he));if(Ee>=0){const Ue=(ce=U.get(Ee))!=null?ce:[];Ue.push(Z),U.set(Ee,Ue);continue}}q.push(Z)}const ge=y.useMemo(()=>{if(!x||re.length===0)return[];const Z=[];let he=[],Ee=null;const Ue=()=>{if(he.length===0)return;const Me=he[he.length-1],mt=`sidebar-single-${t}-${Me.fullSha}`;Z.push({key:Ee!=null?Ee:mt,commits:he,count:he.length,lead:Me}),he=[],Ee=null};return re.forEach(Me=>{var et;const mt=(et=S.get(`${t}:${Me.fullSha}`))!=null?et:null;if(he.length===0){he=[Me],Ee=mt;return}if(mt===Ee){he.push(Me);return}Ue(),he=[Me],Ee=mt}),Ue(),Z},[t,x,re,S]);return l.jsxs("li",{className:Us("relative",n>0?"pl-4":"pl-0",n===0&&!i?ae?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Us("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",L,ne,fe)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Us("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ne)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{K&&p(t),z==null||z(t)},className:Us("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",Ne?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[K?l.jsx("span",{className:Us("inline-block text-[10px] text-muted-foreground transition-transform",ae?"rotate-90":""),children:"▶"}):null,l.jsx("span",{className:"min-w-0 break-words",children:l.jsx("span",{className:Us(Ne?"font-medium text-foreground":"font-normal"),children:t})})]})}),Se?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ge.map(Z=>{const he=Z.count>1&&!j(Z.key);return(he?[Z.lead]:Z.commits).map(Ue=>{var et;const Me=re.findIndex(ze=>ze.fullSha===Ue.fullSha),mt=b(Ue.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>M==null?void 0:M(Ue.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Ue.message,children:[l.jsx("span",{className:"block truncate",children:Ue.message}),mt.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:mt.map(ze=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:ze})]},`${Ue.fullSha}:${ze}`))}):null]}),Z.count>1&&Ue.fullSha===Z.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${Z.lead.fullSha}`,onClick:()=>k(Z.key,`${t}:${Z.lead.fullSha}`),className:Us("shrink-0 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",he?"":"min-w-[2ch] text-center"),children:he?`+${Math.max(1,Z.count-1)}`:"−"}):null]}),(et=U.get(Me))!=null&&et.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:U.get(Me).map((ze,ct,it)=>l.jsx(Am,{branchName:ze,depth:n+1,isLast:ct===it.length-1&&q.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:ee,showCommits:x,getMergeTargetLabels:b,sourceBranchName:ze,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z},ze))}):null]},`${t}:${Ue.fullSha}`)})})}):null,$&&ae&&q.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:q.map((Z,he)=>l.jsx(Am,{branchName:Z,depth:n+1,isLast:he===q.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:ee,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Z,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:z},Z))}):null]})}function Cw({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,projectLoading:c=!1,projectError:u=null,branches:d,defaultBranch:h,checkedOutRef:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,setManuallyOpenedClumps:x,setManuallyClosedClumps:b,gridLayoutModel:w,onSelectCommit:S,onSelectBranch:j,className:k}){var et;const M=y.useRef(null),z=y.useRef(null),[N,E]=y.useState(!1),[$,F]=y.useState(()=>new Set),[W,H]=y.useState(()=>new Set),[K,ae]=y.useState(()=>new Set),re=g!=null?g:W,Se=_!=null?_:K,Ne=x!=null?x:H,ee=b!=null?b:ae,[fe,L]=y.useState(null),[ne,U]=y.useState(null),q=y.useMemo(()=>d.some(ct=>ct.name===h)?d:[{name:h,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...d],[d,h]),ge=y.useMemo(()=>jy(q,h),[q,h]),D=y.useMemo(()=>My(q,h,ge),[q,h,ge]),[ce,Z]=y.useState(()=>Ty(D,ge,p,h));y.useEffect(()=>{Z(ze=>{const ct=Ty(D,ge,p,h),it=new Set(ze);for(const Mt of ct)it.add(Mt);return it})},[D,ge,p,h]);const he=(et=w==null?void 0:w.defaultCollapsedClumps)!=null?et:new Set,Ee=ze=>re.has(ze)||!he.has(ze)&&!Se.has(ze),Ue=(ze,ct)=>{const it=M.current,Mt=z.current;if(it&&Mt){const Ct=`[data-clump-toggle-id="${ct}"]`,zt=it.querySelector(Ct);if(zt){const Zt=zt.getBoundingClientRect().top-Mt.getBoundingClientRect().top;U({id:ct,topWithinScrollBody:Zt})}else U(null)}else U(null);L(ct),Ne(Ct=>{const zt=new Set(Ct),Zt=Ee(ze);return ee(Oe=>{const ie=new Set(Oe);return Zt?(zt.delete(ze),ie.add(ze)):(ie.delete(ze),zt.add(ze)),ie}),zt})};y.useLayoutEffect(()=>{if(!fe)return;const ze=M.current,ct=z.current;if(!ze||!ct)return;const it=`[data-clump-toggle-id="${fe}"]`,Mt=ze.querySelector(it);if(Mt){if((ne==null?void 0:ne.id)===fe){const zt=Mt.getBoundingClientRect().top-ct.getBoundingClientRect().top-ne.topWithinScrollBody;Number.isFinite(zt)&&zt!==0&&(ct.scrollTop+=zt)}Mt.focus({preventScroll:!0}),L(null),U(null)}},[re,Se,fe,ne]);const Me=ze=>{Z(ct=>{const it=new Set(ct);return it.has(ze)?it.delete(ze):it.add(ze),it})};y.useEffect(()=>{F(ze=>{const ct=new Set(ze);for(const it of t)ct.add(it.path);return n&&ct.add(n),ct})},[n,t]);const mt=y.useMemo(()=>{var ct,it,Mt,Ct,zt,Zt,Oe,ie,He,Ze;const ze=new Map;for(const Ie of t){const ht=Ie.path===n,ut=Sw({branches:Ie.branches,mergeNodes:Ie.mergeNodes,directCommits:Ie.directCommits,unpushedDirectCommits:Ie.unpushedDirectCommits,defaultBranch:Ie.defaultBranch,branchCommitPreviews:Ie.branchCommitPreviews,branchUniqueAheadCounts:Ie.branchUniqueAheadCounts,checkedOutRef:Ie.checkedOutRef,stashes:Ie.stashes,manuallyOpenedClumps:ht?re:new Set,manuallyClosedClumps:ht?Se:new Set}),dt=ut.enrichedBranches.some(Ve=>Ve.name===Ie.defaultBranch)?ut.enrichedBranches:[{name:Ie.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...ut.enrichedBranches],Je=new Map(ut.sharedGridLayoutModel.nodes.map(Ve=>[Ve.commit.visualId,Ve.row])),rt={};for(const Ve of ut.sharedGridLayoutModel.allCommits){const Dt=(ct=rt[Ve.branchName])!=null?ct:[];Dt.push({fullSha:Ve.id,sha:Ve.id.slice(0,7),parentSha:(it=Ve.parentSha)!=null?it:null,message:Ve.message,author:Ve.author,date:Ve.date,kind:(Mt=Ve.kind)!=null?Mt:"commit"}),rt[Ve.branchName]=Dt}for(const Ve of Object.keys(rt))rt[Ve]=rt[Ve].sort((Dt,pt)=>{var Ke,yt;const We=new Date(Dt.date).getTime(),vt=new Date(pt.date).getTime();if(We!==vt)return We-vt;const Pt=(Ke=Je.get(`${Ve}:${Dt.fullSha}`))!=null?Ke:Number.MAX_SAFE_INTEGER,Kt=(yt=Je.get(`${Ve}:${pt.fullSha}`))!=null?yt:Number.MAX_SAFE_INTEGER;return Pt!==Kt?Pt-Kt:Dt.fullSha.localeCompare(pt.fullSha)});const Vt=(Ct=ut.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?Ct:new Map,tt=(Ve,Dt)=>{const pt=Vt.get(Dt);if(!pt)return[];for(const[We,vt]of pt.entries())if(pi(Ve,We))return Array.from(vt).sort();return[]},P=jy(dt,Ie.defaultBranch),te=My(dt,Ie.defaultBranch,P),Q=new Map(dt.map(Ve=>[Ve.name,Ve])),ve=new Map;for(const Ve of dt){const Dt=(Zt=(zt=ut.sharedGridLayoutModel.firstBranchCommitByName.get(Ve.name))==null?void 0:zt.parentSha)!=null?Zt:null,pt=Dt!=null?Dt:null;ve.set(Ve.name,pt)}const Ye=(Oe=ut.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Oe:new Set,Xe=ht?re:new Set,Te=ht?Se:new Set,bt=Ve=>Xe.has(Ve)||!Ye.has(Ve)&&!Te.has(Ve);ze.set(Ie.path,{rootBranchNames:te,branchByName:Q,branchCommitPreviewsFromLayout:rt,childNamesByParent:P,branchAnchorShaByName:ve,checkedOutBranchName:(He=(ie=Ie.checkedOutRef)==null?void 0:ie.branchName)!=null?He:null,clusterKeyByCommitId:(Ze=ut.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Ze:new Map,getMergeTargetLabels:tt,isGridClusterOpen:bt})}return ze},[n,Se,re,t]);return l.jsx("aside",{ref:M,"aria-label":"Dense branch sidebar",className:Us("pointer-events-auto h-full",k),children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3 px-5",children:[l.jsx("h2",{className:"text-sm font-medium text-foreground",children:"Projects"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:c,className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Add repo"}),l.jsx("button",{type:"button",onClick:()=>E(ze=>!ze),className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:N?"Hide commits":"Show commits"})]})]}),u&&l.jsx("div",{className:"px-5 pb-3",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:u})}),l.jsx("div",{ref:z,className:"mb-3 min-h-0 flex-1 space-y-2 overflow-y-auto px-5",children:t.map(ze=>{var Zt,Oe;const ct=ze.path===n,it=$.has(ze.path)||ct,Mt=(Zt=ze.treeLoaded)!=null?Zt:ze.branches.length>0,Ct=mt.get(ze.path),zt=ct?ce:new Set(Ct?Array.from(Ct.branchByName.keys()):[]);return l.jsxs("div",{className:"rounded-xl border border-border/50 bg-card",children:[l.jsxs("button",{type:"button",onClick:()=>{i(ze.path)},className:Us("flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors",ct?"bg-primary/10 text-foreground":"hover:bg-accent"),children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"truncate text-sm font-medium",children:ze.name}),l.jsx("p",{className:"truncate text-xs text-muted-foreground",children:ze.path})]}),l.jsx("span",{className:"shrink-0 text-xs text-muted-foreground",children:(Oe=ze.branchName)!=null?Oe:"branch"})]}),it&&l.jsx("div",{className:"border-t border-border/50 px-3 py-3",children:Mt&&Ct?l.jsx("ul",{className:"space-y-1",children:Ct.rootBranchNames.map((ie,He)=>l.jsx(Am,{branchName:ie,depth:0,isLast:He===Ct.rootBranchNames.length-1,branchByName:Ct.branchByName,branchCommitPreviews:Ct.branchCommitPreviewsFromLayout,childNamesByParent:Ct.childNamesByParent,branchAnchorShaByName:Ct.branchAnchorShaByName,expandedBranchNames:zt,onToggleBranch:Me,checkedOutBranchName:Ct.checkedOutBranchName,ancestors:new Set,showCommits:N,getMergeTargetLabels:Ct.getMergeTargetLabels,sourceBranchName:ie,clusterKeyByCommitId:Ct.clusterKeyByCommitId,isGridClusterOpen:Ct.isGridClusterOpen,onToggleGridCluster:Ue,onSelectCommit:async Ze=>{ct||await i(ze.path),S==null||S(Ze)},onSelectBranch:async Ze=>{ct||await i(ze.path),j==null||j(Ze)}},`${ze.path}:${ie}`))}):l.jsx("p",{className:"px-2 py-1 text-xs text-muted-foreground",children:"Loading branch tree..."})})]},ze.path)})})]})})}const kw="git-visualizer",Ey="git-visualizer:projects",Ay=12,Dy=1400,jw=180;function tl(t){return t==="/"?t:t.replace(/\/+$/,"")}function Gh(...t){return t.filter(Boolean).join(" ")}function fd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Mw(t){return fd(t)===kw}function Tw(){var fo,Rn;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,g]=y.useState(!1),[_,x]=y.useState([]),[b,w]=y.useState([]),[S,j]=y.useState([]),[k,M]=y.useState([]),[z,N]=y.useState({}),[E,$]=y.useState([]),[F,W]=y.useState("main"),[H,K]=y.useState(null),[ae,re]=y.useState([]),[Se,Ne]=y.useState(!1),[ee,fe]=y.useState(""),[L,ne]=y.useState(0),[U,q]=y.useState(()=>new Set),[ge,D]=y.useState(()=>new Set),[ce,Z]=y.useState(null),[he,Ee]=y.useState(null),[Ue,Me]=y.useState(!1),[mt,et]=y.useState(!1),[ze,ct]=y.useState(null),[it,Mt]=y.useState(!1),[Ct,zt]=y.useState(!1),[Zt,Oe]=y.useState("active"),[ie,He]=y.useState(null),[Ze,Ie]=y.useState(null),[ht,ut]=y.useState(!1),[dt,Je]=y.useState(null),[rt,Vt]=y.useState(!1),[tt,P]=y.useState(null),[te,Q]=y.useState(null),[ve,Ye]=y.useState(!1),[Xe,Te]=y.useState(!1),[bt,Ve]=y.useState(!1),[Dt,pt]=y.useState(!1),[We,vt]=y.useState({}),[Pt,Kt]=y.useState({}),[Ke,yt]=y.useState({}),[_t,$t]=y.useState({}),[cn,xt]=y.useState({}),[Xt,On]=y.useState([]),[is,xn]=y.useState(!1),[io,as]=y.useState(!1),[ss,Qt]=y.useState(!1),[Tn,tn]=y.useState(!1),[bn,nt]=y.useState(!1),[En,ko]=y.useState("horizontal"),ao=y.useRef(null),$n=y.useRef(0),Rs=y.useRef(0),ro=y.useRef(null),lo=Mw(t)||!0,bs=y.useRef(!1),gs=y.useRef(!1),vs=y.useRef(new Set),an=y.useRef([]),ii=y.useRef([]),Bo=y.useRef(null),Js=y.useMemo(()=>c.map(I=>{var se,le,_e,C,R,X,ue,Ae,Pe,Nt,ft,Ge,at,Rt,Yt,fn,rn,Qe,wn,zs,Ao,yo,eo,Po,ri,An,Jn,to;return{...I,...(se=d[I.path])!=null?se:{},branches:(_e=(le=d[I.path])==null?void 0:le.branches)!=null?_e:[],mergeNodes:(R=(C=d[I.path])==null?void 0:C.mergeNodes)!=null?R:[],directCommits:(ue=(X=d[I.path])==null?void 0:X.directCommits)!=null?ue:[],unpushedDirectCommits:(Pe=(Ae=d[I.path])==null?void 0:Ae.unpushedDirectCommits)!=null?Pe:[],unpushedCommitShasByBranch:(ft=(Nt=d[I.path])==null?void 0:Nt.unpushedCommitShasByBranch)!=null?ft:{},checkedOutRef:(at=(Ge=d[I.path])==null?void 0:Ge.checkedOutRef)!=null?at:null,worktrees:(Yt=(Rt=d[I.path])==null?void 0:Rt.worktrees)!=null?Yt:[],stashes:(rn=(fn=d[I.path])==null?void 0:fn.stashes)!=null?rn:[],branchCommitPreviews:(wn=(Qe=d[I.path])==null?void 0:Qe.branchCommitPreviews)!=null?wn:{},laneByBranch:(Ao=(zs=d[I.path])==null?void 0:zs.laneByBranch)!=null?Ao:{},branchUniqueAheadCounts:(eo=(yo=d[I.path])==null?void 0:yo.branchUniqueAheadCounts)!=null?eo:{},defaultBranch:(An=(ri=(Po=d[I.path])==null?void 0:Po.defaultBranch)!=null?ri:I.branchName)!=null?An:"main",treeLoaded:(to=(Jn=d[I.path])==null?void 0:Jn.loaded)!=null?to:!1}}),[c,d]);y.useEffect(()=>{try{const I=localStorage.getItem(Ey);if(!I)return;const se=JSON.parse(I);if(!Array.isArray(se))return;const le=se.filter(_e=>typeof _e=="object"&&_e!==null&&typeof _e.path=="string"&&typeof _e.name=="string"&&typeof _e.lastOpenedAt=="number");u(le.slice(0,Ay))}catch{u([])}},[]),y.useEffect(()=>{gs.current||t||c.length!==0&&(gs.current=!0,Ys(c[0].path))},[c,t]);const qn=y.useMemo(()=>b.reduce((I,se)=>(I[se.targetCommitSha]=se.targetBranch,I),{}),[b]);y.useEffect(()=>{t&&h(I=>{var se,le;return{...I,[t]:{path:t,name:i||fd(t),branches:_,mergeNodes:b,directCommits:S,unpushedDirectCommits:k,mergeTargetBranchByCommitSha:b.reduce((_e,C)=>(_e[C.targetCommitSha]=C.targetBranch,_e),{}),unpushedCommitShasByBranch:z,checkedOutRef:H,worktrees:ae,stashes:Xt,branchCommitPreviews:Pt,branchParentByName:Ke,laneByBranch:_t,branchUniqueAheadCounts:cn,defaultBranch:F,loaded:!0,cacheSchemaVersion:(le=(se=I[t])==null?void 0:se.cacheSchemaVersion)!=null?le:1,updatedAtMs:Date.now()}}})},[t,i,_,b,S,k,qn,z,H,ae,Xt,Pt,Ke,_t,cn,F]);async function co(I,se=!1){var _e;const le=tl(I);if(le&&!vs.current.has(le)&&!(!se&&((_e=d[le])!=null&&_e.loaded))){vs.current.add(le),g(!0);try{const C=await we("get_repo_visual_snapshot",{repoPath:le,forceRefresh:se});h(R=>({...R,[le]:C}))}finally{vs.current.delete(le),vs.current.size===0&&g(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach(I=>{co(I.path),we("watch_repo",{repoPath:I.path}).catch(console.error)})},[c]),y.useEffect(()=>{let I=!1,se=null;return mc("git-activity",le=>{if(I)return;const _e=tl(le.payload.repoPath);!_e||_e===t||co(_e,!0)}).then(le=>{I?le():se=le}).catch(console.error),()=>{I=!0,se&&se()}},[t]);function Lo(I){u(se=>{const le=tl(I.path);if(!le)return se;const _e={...I,path:le},R=(se.some(X=>X.path===le)?se.map(X=>X.path===le?_e:X):[...se,_e]).slice(-Ay);try{localStorage.setItem(Ey,JSON.stringify(R))}catch{}return R})}async function Oo(I){const se=tl(I);if(se){ct(null);try{const[le,_e]=await Promise.all([we("get_repo_info",{repoPath:se}),we("get_default_branch",{repoPath:se}).catch(()=>"main")]);Lo({path:se,name:le.name,lastOpenedAt:Date.now(),branchName:_e}),await co(se,!0)}catch(le){ct(le instanceof Error?le.message:String(le))}}}function qo(I){if(I.button!==0)return;const se=I.target;if(se!=null&&se.closest(".window-no-drag"))return;const le=Mm();we("start_window_drag").catch(()=>le.startDragging()).catch(_e=>{console.warn("Failed to start window drag:",_e)})}async function po(I,se){const _e=[];let C=0;for(;;){const R=await we("get_merge_nodes",{repoPath:I,branch:se,page:C,perPage:100});if(_e.push(...R.nodes),!R.hasMore||R.nodes.length===0)break;C+=1}return _e}async function ws(I,se,le){const _e=Array.from(new Set([le,...se.map(X=>X.name)].filter(X=>!!X)));if(_e.length===0)return[];const C=await Promise.all(_e.map(X=>po(I,X).catch(()=>[]))),R=new Map;for(const X of C)for(const ue of X){const Ae=`${ue.targetCommitSha}:${ue.targetBranch}`;R.has(Ae)||R.set(Ae,ue)}return Array.from(R.values())}const Bs=I=>I.map(se=>`${se.name}|${se.headSha}|${se.commitsAhead}|${se.commitsBehind}|${se.unpushedCommits}|${se.remoteSyncStatus}`).join("||"),kn=I=>I.map(se=>se.fullSha).join("|"),_i=I=>{var se,le;return I?`${(se=I.branchName)!=null?se:""}|${I.headSha}|${(le=I.parentSha)!=null?le:""}|${I.hasUncommittedChanges?1:0}`:"__none__"};async function rs(I,se){const le=se!=null?se:F,[_e,C,R,X,ue,Ae]=await Promise.all([we("get_branches",{repoPath:I}),we("get_all_repo_commits",{repoPath:I}),we("get_unpushed_direct_commits",{repoPath:I,branch:le}).catch(()=>[]),we("get_checked_out_ref",{repoPath:I}).catch(()=>null),we("list_worktrees",{repoPath:I}).catch(()=>[]),we("list_stashes",{repoPath:I}).catch(()=>[])]),Pe=await ws(I,_e,le),Nt=await Promise.all([le,..._e.map(ft=>ft.name)].map(async ft=>{const Ge=await we("get_branch_unpushed_commit_shas",{repoPath:I,branch:ft}).catch(()=>[]);return[ft,Ge]}));x(_e),w(Pe),j(C),M(R),N(Object.fromEntries(Nt)),K(X),re(ue),On(Ae)}async function ai(I){const[se,le,_e]=await Promise.all([we("get_branches",{repoPath:I}).catch(()=>[]),we("get_all_repo_commits",{repoPath:I}).catch(()=>[]),we("get_checked_out_ref",{repoPath:I}).catch(()=>null)]);return Bs(se)!==Bs(an.current)||kn(le)!==kn(ii.current)||_i(_e)!==_i(Bo.current)}async function Vs(I){Q(null),et(!0);try{const[se,le]=await Promise.all([we("get_repo_info",{repoPath:I}),we("get_default_branch",{repoPath:I})]);a(se.name),W(le),n(I),await rs(I,le),vn(I),Q({kind:"success",message:`Now targeting worktree at ${I}`})}catch(se){const le=se instanceof Error?se.message:String(se);Q({kind:"error",message:le}),console.error("Failed to switch worktree:",le)}finally{et(!1)}}async function zo(I,se){if(!(!t||Se)){Ne(!0),Q(null);try{await we("remove_worktree",{repoPath:t,worktreePath:I,force:se}),await rs(t),Q({kind:"success",message:`Removed worktree at ${I}`})}catch(le){const _e=le instanceof Error?le.message:String(le);Q({kind:"error",message:_e}),console.error("Failed to remove worktree:",_e)}finally{Ne(!1)}}}function jo(I,se){var le,_e;a(se.name||fd(I)),W(se.defaultBranch||"main"),x(se.branches),w(se.mergeNodes),j(se.directCommits),M(se.unpushedDirectCommits),N(se.unpushedCommitShasByBranch),K(se.checkedOutRef),re(se.worktrees),On(se.stashes),Kt(se.branchCommitPreviews),yt((le=se.branchParentByName)!=null?le:{}),$t((_e=se.laneByBranch)!=null?_e:{}),xt(se.branchUniqueAheadCounts),n(I)}async function Ss(I,se,le){const _e=le==null?void 0:le.forceRefresh,C=le==null?void 0:le.applyToActiveState;try{const[R,X]=await Promise.all([we("get_repo_info",{repoPath:I}),we("get_default_branch",{repoPath:I})]);if(se!==$n.current)return;const ue=await we("get_repo_visual_snapshot",{repoPath:I,forceRefresh:_e});if(se!==$n.current)return;h(Ae=>({...Ae,[I]:ue})),C&&(t===I||$n.current),vn(I)}catch(R){if(se!==$n.current)return;console.error("Background snapshot refresh failed:",R)}}async function Ys(I){const se=++$n.current,le=tl(I);if(!le)return;const _e=d[le];if(_e!=null&&_e.loaded){ct(null),jo(le,_e),Lo({path:le,name:_e.name||fd(le),lastOpenedAt:Date.now(),branchName:_e.defaultBranch}),et(!1),Me(!1),Ss(le,se,{forceRefresh:!1,applyToActiveState:!1});return}if(Me(!0),et(!0),ct(null),await new Promise(C=>setTimeout(C,15)),se===$n.current)try{const[C,R]=await Promise.all([we("get_repo_info",{repoPath:le}),we("get_default_branch",{repoPath:le})]);if(se!==$n.current)return;a(C.name),W(R);const X=await we("get_repo_visual_snapshot",{repoPath:le,forceRefresh:!0});if(se!==$n.current)return;h(ue=>({...ue,[le]:X})),jo(le,X),Lo({path:le,name:C.name,lastOpenedAt:Date.now(),branchName:R}),et(!1),Me(!1),vn(le)}catch(C){if(se!==$n.current)return;console.error("Failed to load repo:",C),ct(C instanceof Error?C.message:String(C)),n(null),Me(!1),et(!1)}}async function vn(I){const se=++Rs.current;try{if(se!==Rs.current)return;ut(!1),P(null);const le=await we("get_github_info",{repoPath:I}),_e=await we("get_github_auth_status");if(se!==Rs.current||(Je(_e),!_e.ghAvailable||!_e.authenticated))return;const C=await we("get_open_prs",{owner:le.owner,repo:le.repo});if(se!==Rs.current)return;$(C),ut(!0)}catch(le){if(se!==Rs.current)return;console.log("GitHub data not available:",le),P(le instanceof Error?le.message:String(le)),ut(!1)}}y.useEffect(()=>{let I=null,se=!1;const le=(()=>{try{return Mm().label}catch{return null}})(),_e=async R=>{var ue;const X=(ue=R==null?void 0:R.path)==null?void 0:ue.trim();!X||se||t!==X&&await Ys(X)};return(async()=>{le==="main"&&(I=await mc("gitviz://open-repo",async X=>{await _e(X.payload)}));const R=await we("take_pending_open_repo");await _e(R)})(),()=>{se=!0,I&&I()}},[t]),y.useEffect(()=>{an.current=_},[_]),y.useEffect(()=>{ii.current=S},[S]),y.useEffect(()=>{Bo.current=H},[H]),y.useEffect(()=>{bs.current=bn},[bn]),y.useEffect(()=>{},[t,F,lo]),y.useEffect(()=>{if(!t||!F||!lo)return;we("watch_repo",{repoPath:t}).catch(console.error);let I=!1,se=!1,le=!1,_e=null;const C=async()=>{if(!I){if(bs.current){se=!0;return}if(le){se=!0;return}le=!0;try{if(!await ai(t)||I)return;await rs(t,F)}catch(X){console.warn("Frozen git-activity refresh failed:",X)}finally{le=!1,se&&!I&&(se=!1,window.setTimeout(()=>{C()},0))}}},R=()=>{se=!0,C()};return mc("git-activity",X=>{tl(X.payload.repoPath)===t&&(co(t,!0),R())}).then(X=>{I?X():_e=X}).catch(console.error),()=>{I=!0,_e&&_e()}},[t,F,lo]);async function _o(){if(t){Vt(!0),P(null);try{await we("authenticate_github");const I=await we("get_github_auth_status");Je(I),I.authenticated?await vn(t):I.message&&P(I.message)}catch(I){P(I instanceof Error?I.message:String(I))}finally{Vt(!1)}}}const ls=new Set(E.map(I=>I.branchName)),Gn=14*864e5,gi=Date.now(),Mo=_.filter(I=>I.status==="stale"),Go=Mo.filter(I=>ls.has(I.name)||gi-new Date(I.lastCommitDate).getTime()<=Gn),qt=Mo.filter(I=>!ls.has(I.name)&&gi-new Date(I.lastCommitDate).getTime()>Gn),Di=I=>{var se;return Object.prototype.hasOwnProperty.call(cn,I.name)?Math.max(0,(se=cn[I.name])!=null?se:0):Math.max(0,I.commitsAhead)};y.useEffect(()=>{vt({}),ro.current=null,Vt(!1),Je(null),P(null),$([]),Q(null)},[t]),y.useEffect(()=>{var Ae,Pe,Nt,ft;if(!t||!F){vt({}),Kt({}),yt({}),$t({}),xt({}),ro.current=null;return}const I=_.map(Ge=>{var at;return`${Ge.name}:${Ge.headSha}:${(at=Ge.parentBranch)!=null?at:""}:${Ge.commitsAhead}`}).join("|"),se=b.map(Ge=>{var at,Rt;return`${Ge.fullSha}:${(Rt=(at=Ge.parentShas)==null?void 0:at[1])!=null?Rt:""}`}).join("|"),le=`${t}|${F}|${I}|${se}`;if(ro.current===le)return;ro.current=le;const _e={},C={};for(const Ge of _){if(Ge.name===F)continue;const at=S.filter(Rt=>Rt.branch===Ge.name).map(Rt=>{var Yt;return{fullSha:Rt.fullSha,sha:Rt.sha,parentSha:(Yt=Rt.parentSha)!=null?Yt:null,message:Rt.message,author:Rt.author,date:Rt.date,kind:"commit"}});_e[Ge.name]=at,C[Ge.name]=at.length}const R=new Map;for(const Ge of S)R.set(Ge.fullSha,Ge.branch);const X=Ge=>{if(!Ge)return null;const at=R.get(Ge);if(at)return at;for(const[Rt,Yt]of R.entries())if(Rt.startsWith(Ge)||Ge.startsWith(Rt))return Yt;return null},ue={[F]:null};for(const Ge of _){if(Ge.name===F){ue[Ge.name]=null;continue}const at=S.filter(rn=>rn.branch===Ge.name),Rt=new Set(at.map(rn=>rn.fullSha)),Yt=(Pe=(Ae=at.filter(rn=>{var wn;const Qe=(wn=rn.parentSha)!=null?wn:null;return!Qe||!Rt.has(Qe)}).sort((rn,Qe)=>{const wn=new Date(rn.date).getTime()-new Date(Qe.date).getTime();return wn!==0?wn:rn.fullSha.localeCompare(Qe.fullSha)})[0])==null?void 0:Ae.parentSha)!=null?Pe:null,fn=X(Yt);ue[Ge.name]=(ft=(Nt=fn!=null?fn:Ke[Ge.name])!=null?Nt:Ge.parentBranch)!=null?ft:null}vt({}),Kt(_e),yt(ue),$t(Ge=>{const at={};for(const Rt of _){const Yt=Ge[Rt.name];Yt!=null&&Number.isFinite(Yt)&&(at[Rt.name]=Yt)}return at}),xt(C)},[t,F,_,b,S,Ke]),y.useEffect(()=>{if(!te){Ye(!1);return}Ye(!0);const I=window.setTimeout(()=>{Ye(!1)},Dy),se=window.setTimeout(()=>{Q(null)},Dy+jw);return()=>{window.clearTimeout(I),window.clearTimeout(se)}},[te]),y.useEffect(()=>{if(!t||_.length===0)return;const I=_e=>new Promise(C=>setTimeout(C,_e));async function se(){const C=`${await we("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${C}`),await I(800),await we("screenshot",{path:`${C}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${C}`)}const le=_e=>{(_e.metaKey||_e.ctrlKey)&&_e.shiftKey&&_e.key==="S"&&(_e.preventDefault(),se())};return window.addEventListener("keydown",le),()=>window.removeEventListener("keydown",le)},[t,i,_]);function Ls(){zt(!0),setTimeout(()=>{Mt(!1),zt(!1),Oe("active"),Ie(null)},100)}async function Ko(I){if(!t)return;Q(null);const se=/^STASH:(\d+)$/.exec(I.commitSha);if(se){try{const le=parseInt(se[1],10),_e=await we("apply_stash_restore",{repoPath:t,stashIndex:le});K(_e),await rs(t);const C=`Stash ${le+1}`,R=_e.branchName?` on branch ${_e.branchName}`:" at the stash base (detached HEAD)";Q({kind:"success",message:`Restored ${C}${R}; stash applied and dropped (uncommitted changes).`})}catch(le){const _e=le instanceof Error?le.message:String(le);Q({kind:"error",message:_e}),console.error("Failed to apply stash:",_e)}return}if(I.branchName){const le=(C,R)=>{const X=C.replace(/\\/g,"/").replace(/\/+$/,""),ue=R.replace(/\\/g,"/").replace(/\/+$/,"");return X===ue||X.toLowerCase()===ue.toLowerCase()},_e=ae.find(C=>C.pathExists===!1||C.isCurrent||t&&le(C.path,t)?!1:C.branchName===I.branchName);if(_e){await Vs(_e.path);return}}try{let le="";(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await we("stash_push",{repoPath:t,includeUntracked:!0}),le="Stashed local changes (including untracked), then ",await rs(t));const C=I.branchName?await we("checkout_branch",{repoPath:t,branchName:I.branchName}):await we("checkout_ref",{repoPath:t,refName:I.commitSha}),R=await we("get_checked_out_ref",{repoPath:t}).catch(()=>C);K(R),await rs(t);const X=R.branchName?R.branchName:`${R.headSha.slice(0,7)} (detached)`;Q({kind:"success",message:`${le}Checked out ${X}`})}catch(le){const _e=le instanceof Error?le.message:String(le);Q({kind:"error",message:_e}),console.error("Failed to checkout commit:",_e)}}async function $o(){if(!(!t||is)){Q(null),xn(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Q({kind:"error",message:"No local changes to stash."});return}await we("stash_push",{repoPath:t,includeUntracked:!0}),await rs(t),Q({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(I){const se=I instanceof Error?I.message:String(I);Q({kind:"error",message:se}),console.error("Failed to stash:",se)}finally{xn(!1)}}}async function Io(I){if(!t||io)return!1;const se=I.trim();if(!se)return Q({kind:"error",message:"Enter a commit message."}),!1;Q(null),as(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Q({kind:"error",message:"No local changes to commit."}),!1;const _e=await we("commit_working_tree",{repoPath:t,message:se});return K(_e),await rs(t),Q({kind:"success",message:"Committed local changes."}),!0}catch(le){const _e=le instanceof Error?le.message:String(le);return Q({kind:"error",message:_e}),console.error("Failed to commit:",_e),!1}finally{as(!1)}}async function Os(){if(!t||ss)return!1;Q(null),Qt(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Q({kind:"error",message:"No local changes to stage."}),!1;const se=await we("stage_working_tree",{repoPath:t});return K(se),await rs(t),Q({kind:"success",message:"Staged all changes."}),!0}catch(I){const se=I instanceof Error?I.message:String(I);return Q({kind:"error",message:se}),console.error("Failed to stage:",se),!1}finally{Qt(!1)}}async function To(I,se){if(!(!t||Tn)){tn(!0),Q(null);try{const le=/^STASH:(\d+)$/.exec(I);let _e;if(le){const C=parseInt(le[1],10);_e=await we("move_stash_to_new_branch",{repoPath:t,stashIndex:C,branchName:se})}else _e=await we("create_branch_from_uncommitted",{repoPath:t,branchName:se});K(_e),await rs(t),Q({kind:"success",message:`Moved to new branch "${se}"`})}catch(le){const _e=le instanceof Error?le.message:String(le);Q({kind:"error",message:_e}),console.error("Failed to create branch from node:",_e)}finally{tn(!1)}}}async function js(I){if(!(!t||Tn)){tn(!0),Q(null);try{const se=await we("create_root_branch",{repoPath:t,branchName:I});K(se),await rs(t),Q({kind:"success",message:`Created new root branch "${I}"`})}catch(se){const le=se instanceof Error?se.message:String(se);Q({kind:"error",message:le}),console.error("Failed to create root branch:",le)}finally{tn(!1)}}}async function jn(I,se){if(!t)return;const le=Array.from(new Set(I.filter(_e=>!!_e&&_e!==se)));if(le.length!==0){Q(null),Te(!0);try{let _e=null;for(const C of le)_e=await we("merge_ref_into_branch",{repoPath:t,sourceRef:C,targetBranch:se});await rs(t),_e&&K(_e),Q({kind:"success",message:le.length===1?`Merged ${le[0].slice(0,7)} into ${se}`:`Merged ${le.length} commits into ${se}`})}catch(_e){const C=_e instanceof Error?_e.message:String(_e);Q({kind:"error",message:C}),console.error("Failed to merge refs into branch:",C)}finally{Te(!1)}}}async function uo(){if(!(!t||bt)){Q(null),Ve(!0);try{const I=await we("push_all_unpushed_branches",{repoPath:t});await rs(t),Q({kind:"success",message:I.length>0?I.length===1?`Pushed ${I[0].branchName}`:`Pushed ${I.length} branches`:"Everything local is already pushed."})}catch(I){const se=I instanceof Error?I.message:String(I);Q({kind:"error",message:se}),console.error("Failed to push all branches:",se)}finally{Ve(!1)}}}async function Kn(){if(!(!t||bt)){Q(null),Ve(!0);try{const I=await we("push_current_branch",{repoPath:t});await rs(t),Q({kind:"success",message:`Pushed ${I.branchName}`})}catch(I){const se=I instanceof Error?I.message:String(I);Q({kind:"error",message:se}),console.error("Failed to push current branch:",se)}finally{Ve(!1)}}}async function ys(I){var le;if(!t||bt)return;const se=Array.from(new Map(I.filter(_e=>_e.branchName&&_e.targetSha).map(_e=>[_e.branchName,_e])).values());if(se.length!==0){Q(null),Ve(!0);try{for(const _e of se)await we("push_branch",{repoPath:t,branchName:_e.branchName,targetSha:_e.targetSha});await rs(t),Q({kind:"success",message:se.length===1?`Pushed ${se[0].branchName} through ${(le=se[0].targetSha)==null?void 0:le.slice(0,7)}`:`Pushed ${se.length} selected commit ranges`})}catch(_e){const C=_e instanceof Error?_e.message:String(_e);Q({kind:"error",message:C}),console.error("Failed to push selected commits:",C)}finally{Ve(!1)}}}async function Qn(I){var R;if(!t||Dt)return;const se=Array.from(new Set(I.branchNames.filter(X=>X&&X!==F))),le=!!I.discardUncommittedChanges,_e=(R=I.stashIndices)!=null?R:[],C=Array.from(new Set(_e)).sort((X,ue)=>ue-X);if(!(se.length===0&&!le&&C.length===0)){Q(null),pt(!0);try{for(const Ae of C)await we("stash_drop",{repoPath:t,stashIndex:Ae});const X=se.length>0||le?await we("delete_selected_elements",{repoPath:t,branchNames:se,discardUncommittedChanges:le}):{deletedBranches:[],discardedUncommittedChanges:!1};await rs(t);const ue=[];C.length>0&&ue.push(C.length===1?`removed stash ${C[0]+1}`:`removed ${C.length} stashes`),X.discardedUncommittedChanges&&ue.push("discarded local uncommitted changes"),X.deletedBranches.length>0&&ue.push(X.deletedBranches.length===1?`deleted ${X.deletedBranches[0]}`:`deleted ${X.deletedBranches.length} branches`),Q({kind:"success",message:ue.length>0?ue.join(" and "):"Nothing to delete."})}catch(X){const ue=X instanceof Error?X.message:String(X);Q({kind:"error",message:ue}),console.error("Failed to delete selected elements:",ue)}finally{pt(!1)}}}function nn(I){Ie(I),He(se=>{var le;return{branch:I,seq:((le=se==null?void 0:se.seq)!=null?le:0)+1}})}function Ws(I){I&&(Ee(I),ne(se=>se+1))}function Fs(I){I&&(fe(I),ne(se=>se+1))}y.useEffect(()=>{var le;const I=H!=null&&H.hasUncommittedChanges?"WORKING_TREE":(le=H==null?void 0:H.headSha)!=null?le:null;if(!I)return;const se=`${t!=null?t:"__no-repo__"}|${En}|${I}`;ao.current!==se&&(ao.current=se,Ee(I),ne(_e=>_e+1))},[H==null?void 0:H.hasUncommittedChanges,H==null?void 0:H.headSha,En,t]),y.useEffect(()=>{ao.current=null},[t]);const{enrichedBranches:Cs,enrichedBranchCommitPreviews:Zn,enrichedBranchUniqueAheadCounts:Eo,enrichedDirectCommits:Ms}=y.useMemo(()=>{var yo,eo,Po,ri;const I=Ix(Xt,_,S,Pt,cn,F);let se=I.branches,le=I.directCommits,_e=I.branchCommitPreviews,C=I.branchUniqueAheadCounts;if(!(H!=null&&H.hasUncommittedChanges))return{enrichedBranches:se,enrichedDirectCommits:le,enrichedBranchCommitPreviews:_e,enrichedBranchUniqueAheadCounts:C};const R=H.headSha||H.parentSha||null,X=(eo=(yo=le[0])==null?void 0:yo.fullSha)!=null?eo:null,ue=(An,Jn)=>!An||!Jn?!1:An===Jn||An.startsWith(Jn)||Jn.startsWith(An),Ae=[{name:F,headSha:X!=null?X:"",isDefault:!0},...se.map(An=>({name:An.name,headSha:An.headSha,isDefault:!1}))],Pe=H.branchName?Ae.find(An=>An.name===H.branchName):void 0,Nt=R?Ae.filter(An=>ue(An.headSha,R)):[],ft=(Po=Pe!=null?Pe:Nt.find(An=>An.isDefault))!=null?Po:Nt[0],Ge=!!(ft&&R&&ue(ft.headSha,R)),at=ft&&!ft.isDefault?se.find(An=>An.name===ft.name):void 0,Rt=(()=>{var Jn;if(!R)return null;const An=le.find(to=>ue(to.fullSha,R)||ue(to.sha,R));if(An!=null&&An.date)return An.date;if(at){const to=((Jn=_e[at.name])!=null?Jn:[]).find(Vi=>ue(Vi.fullSha,R)||ue(Vi.sha,R));if(to!=null&&to.date)return to.date}return null})(),Yt=Rt?new Date(Rt).getTime():Number.NaN,fn=Date.now(),rn=Number.isFinite(Yt)?Math.max(fn,Yt+1):fn,Qe=new Date(rn).toISOString(),wn={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:R,message:"Local uncommitted changes",author:"You",date:Qe,kind:"uncommitted"},zs={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:R,childShas:[],branch:F,message:"Local uncommitted changes",author:"You",date:Qe,kind:"uncommitted"};if(Ge&&(ft!=null&&ft.isDefault))return{enrichedBranches:se,enrichedBranchCommitPreviews:_e,enrichedBranchUniqueAheadCounts:C,enrichedDirectCommits:[...le,zs]};if(Ge&&at)return{enrichedBranches:se.map(Jn=>Jn.name===at.name?{...Jn,commitsAhead:Jn.commitsAhead+1,unpushedCommits:Jn.unpushedCommits+1,lastCommitDate:Qe,headSha:"WORKING_TREE"}:Jn),enrichedDirectCommits:le,enrichedBranchCommitPreviews:{..._e,[at.name]:[wn,..._e[at.name]||[]]},enrichedBranchUniqueAheadCounts:{...C,[at.name]:Math.max(0,(ri=Object.prototype.hasOwnProperty.call(C,at.name)?C[at.name]:at.commitsAhead)!=null?ri:0)+1}};const Ao={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:Qe,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:R!=null?R:void 0,parentBranch:(ft==null?void 0:ft.name)||H.branchName||F};return{enrichedBranches:[Ao,...se],enrichedBranchCommitPreviews:{..._e,[Ao.name]:[wn]},enrichedBranchUniqueAheadCounts:{...C,[Ao.name]:1},enrichedDirectCommits:le}},[_,Pt,cn,H,F,S,Xt]),go=y.useMemo(()=>{const I={...Ke};return I[F]=null,I},[Ke,F,Cs]),Ts=y.useMemo(()=>{var I;return(I=Fv(Cs,F,go,_t))!=null?I:up(Cs,F,Zn,go)},[Cs,F,Zn,go,_t]),Es=y.useMemo(()=>Sd({lanes:Ts,branches:Cs,mergeNodes:b,directCommits:Ms,unpushedDirectCommits:k,defaultBranch:F,branchCommitPreviews:Zn,branchParentByName:go,branchUniqueAheadCounts:Eo,manuallyOpenedClumps:U,manuallyClosedClumps:ge,isDebugOpen:!1,gridSearchQuery:ee,gridFocusSha:he,checkedOutRef:H!=null?H:null,orientation:En}),[Ts,Cs,b,Ms,k,F,Zn,go,Eo,U,ge,ee,he,(fo=H==null?void 0:H.headSha)!=null?fo:null,(Rn=H==null?void 0:H.branchName)!=null?Rn:null,En]);return l.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:qo}),l.jsx("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsx(Cw,{className:"min-h-0 w-[27rem] shrink-0 border-r border-border/50 pb-4 pt-16",projects:Js,activeProjectPath:t,onSelectProject:Ys,onAddProject:()=>{(async()=>{var I,se;try{const le=await Iv({directory:!0,multiple:!1,defaultPath:(se=(I=c[0])==null?void 0:I.path)!=null?se:void 0});typeof le=="string"&&le&&await Oo(le)}catch(le){ct(le instanceof Error?le.message:String(le))}})()},projectLoading:Ue||p,projectError:ze,branches:Cs,defaultBranch:F,checkedOutRef:H,manuallyOpenedClumps:U,manuallyClosedClumps:ge,setManuallyOpenedClumps:q,setManuallyClosedClumps:D,gridLayoutModel:Es,onSelectCommit:Ws,onSelectBranch:Fs}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx(bw,{branches:Cs,mergeNodes:b,directCommits:Ms,unpushedDirectCommits:k,unpushedCommitShasByBranch:z,defaultBranch:F,branchCommitPreviews:Zn,branchParentByName:go,branchUniqueAheadCounts:Eo,gridSearchQuery:ee,gridSearchJumpToken:L,gridFocusSha:he,onGridSearchResultCountChange:Z,onGridSearchFocusChange:Ee,checkedOutRef:H,onCommitClick:Ko,onMergeRefsIntoBranch:jn,mergeInProgress:Xe,onPushAllBranches:uo,onPushCurrentBranch:Kn,onPushCommitTargets:ys,pushInProgress:bt,onDeleteSelection:Qn,deleteInProgress:Dt,worktrees:ae,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:zo,removeWorktreeInProgress:Se,onSwitchToWorktree:Vs,onStashLocalChanges:$o,stashInProgress:is,stashDisabled:!1,onCommitLocalChanges:Io,commitInProgress:io,commitDisabled:!1,onStageAllChanges:Os,stageInProgress:ss,onCreateBranchFromNode:To,onCreateRootBranch:js,createBranchFromNodeInProgress:Tn,onInteractionChange:nt,manuallyOpenedClumps:U,manuallyClosedClumps:ge,setManuallyOpenedClumps:q,setManuallyClosedClumps:D,layoutModel:Es,orientation:En}),l.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"flex shrink-0 rounded-full border border-border bg-muted/20 p-0.5 shadow-sm",role:"radiogroup","aria-label":"Commit map layout",children:[l.jsx("button",{type:"button",role:"radio","aria-checked":En==="horizontal",tabIndex:0,onClick:()=>ko("horizontal"),onKeyDown:I=>{(I.key==="ArrowRight"||I.key==="ArrowDown")&&(I.preventDefault(),ko("vertical"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",En==="horizontal"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),l.jsx("button",{type:"button",role:"radio","aria-checked":En==="vertical",tabIndex:0,onClick:()=>ko("vertical"),onKeyDown:I=>{(I.key==="ArrowLeft"||I.key==="ArrowUp")&&(I.preventDefault(),ko("horizontal"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",En==="vertical"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]}),(dt==null?void 0:dt.ghAvailable)&&!dt.authenticated&&l.jsx("button",{onClick:_o,disabled:rt,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:rt?"Connecting GitHub...":"Connect GitHub"}),dt&&!dt.ghAvailable&&l.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),tt&&l.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:tt,children:tt}),l.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[l.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),l.jsx("input",{value:ee,onChange:I=>fe(I.target.value),onKeyDown:I=>{I.key==="Enter"&&(I.preventDefault(),ne(se=>se+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),l.jsx("button",{type:"button",onClick:()=>ne(I=>I+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),ce!=null&&l.jsxs("span",{className:"text-xs text-muted-foreground",children:[ce," match",ce===1?"":"es"]}),he&&l.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",he.slice(0,7)]}),te&&l.jsx("span",{className:Gh("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",ve?"opacity-100":"opacity-0",te.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:te.message,children:te.message})]})})]}),it&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${Ct?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Ls,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Oe("active"),className:`text-xs font-medium transition-colors ${Zt==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[Go.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Oe("inactive"),className:`text-xs font-medium transition-colors ${Zt==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[qt.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Zt==="active"?Go:qt).map(I=>{const se=(Ze==null?void 0:Ze.name)===I.name,le=Di(I);return l.jsxs("button",{onClick:()=>nn(I),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${se?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:I.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[le>0&&`${le} ahead`,le>0&&I.commitsBehind>0&&", ",I.commitsBehind>0&&`${I.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},I.name)})})]})]})})]})}var Ac=Tx(),Ew=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Aw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Ew}var ns=Aw,Dw=`.icon-transitions-module__iconState___uqK9J {
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
}`,Nw={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Dw}var Fn=Nw,Rw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Bw=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Lw=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Ow=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${Fn.iconState} ${n?Fn.hiddenScaled:Fn.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${Fn.iconState} ${n?Fn.visibleScaled:Fn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),zw=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${Fn.iconStateFast} ${i?Fn.visibleScaled:u?Fn.sending:Fn.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${Fn.iconStateFast} ${a?Fn.visibleScaled:Fn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Fn.iconStateFast} ${c?Fn.visibleScaled:Fn.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},$w=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Fn.iconFade} ${n?Fn.visible:Fn.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${Fn.iconFade} ${n?Fn.hidden:Fn.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Iw=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${Fn.iconFadeFast} ${n?Fn.hidden:Fn.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${Fn.iconFadeFast} ${n?Fn.visible:Fn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Pw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Hw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Px=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Uw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Vw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Yw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Ww=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Fw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Xw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),qw=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Hx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Kh=Hx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Qh="__agentation_freeze";function Gw(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Qh]||(t[Qh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Qh]}var hn=Gw();typeof window<"u"&&!hn.installed&&(hn.origSetTimeout=window.setTimeout.bind(window),hn.origSetInterval=window.setInterval.bind(window),hn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?hn.origSetTimeout(t,n):hn.origSetTimeout((...a)=>{hn.frozen?hn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?hn.origSetInterval(t,n):hn.origSetInterval((...a)=>{hn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>hn.origRAF(n=>{hn.frozen?hn.frozenRAFQueue.push(t):t(n)}),hn.installed=!0);var Ut=hn.origSetTimeout,Kw=hn.origSetInterval,al=hn.origRAF;function Qw(t){return t?Hx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function Zw(){if(typeof document>"u"||hn.frozen)return;hn.frozen=!0,hn.frozenTimeoutQueue=[],hn.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Kh},
    *${Kh}::before,
    *${Kh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),hn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;Qw(i)||(n.pause(),hn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Ny(){var i;if(typeof document>"u"||!hn.frozen)return;hn.frozen=!1;const t=hn.frozenTimeoutQueue;hn.frozenTimeoutQueue=[];for(const a of t)hn.origSetTimeout(()=>{if(hn.frozen){hn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=hn.frozenRAFQueue;hn.frozenRAFQueue=[];for(const a of n)hn.origRAF(c=>{if(hn.frozen){hn.frozenRAFQueue.push(a);return}a(c)});for(const a of hn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}hn.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Zh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var kd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},j){const[k,M]=y.useState(u),[z,N]=y.useState(!1),[E,$]=y.useState("initial"),[F,W]=y.useState(!1),[H,K]=y.useState(!1),ae=y.useRef(null),re=y.useRef(null),Se=y.useRef(null),Ne=y.useRef(null);y.useEffect(()=>{b&&E!=="exit"&&$("exit")},[b,E]),y.useEffect(()=>{Ut(()=>{$("enter")},0);const q=Ut(()=>{$("entered")},200),ge=Ut(()=>{const D=ae.current;D&&(Zh(D),D.selectionStart=D.selectionEnd=D.value.length,D.scrollTop=D.scrollHeight)},50);return()=>{clearTimeout(q),clearTimeout(ge),Se.current&&clearTimeout(Se.current),Ne.current&&clearTimeout(Ne.current)}},[]);const ee=y.useCallback(()=>{Ne.current&&clearTimeout(Ne.current),N(!0),Ne.current=Ut(()=>{N(!1),Zh(ae.current)},250)},[]);y.useImperativeHandle(j,()=>({shake:ee}),[ee]);const fe=y.useCallback(()=>{$("exit"),Se.current=Ut(()=>{p()},150)},[p]),L=y.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),ne=y.useCallback(q=>{q.stopPropagation(),!q.nativeEvent.isComposing&&(q.key==="Enter"&&!q.shiftKey&&(q.preventDefault(),L()),q.key==="Escape"&&fe())},[L,fe]),U=[ns.popup,w?ns.light:"",E==="enter"?ns.enter:"",E==="entered"?ns.entered:"",E==="exit"?ns.exit:"",z?ns.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:re,className:U,"data-annotation-popup":!0,style:_,onClick:q=>q.stopPropagation(),children:[l.jsxs("div",{className:ns.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:ns.headerToggle,onClick:()=>{const q=H;K(!H),q&&Ut(()=>Zh(ae.current),0)},type:"button",children:[l.jsx("svg",{className:`${ns.chevron} ${H?ns.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ns.element,children:n})]}):l.jsx("span",{className:ns.element,children:n}),i&&l.jsx("span",{className:ns.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${ns.stylesWrapper} ${H?ns.expanded:""}`,children:l.jsx("div",{className:ns.stylesInner,children:l.jsx("div",{className:ns.stylesBlock,children:Object.entries(S).map(([q,ge])=>l.jsxs("div",{className:ns.styleLine,children:[l.jsx("span",{className:ns.styleProperty,children:q.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ns.styleValue,children:ge}),";"]},q))})})}),a&&l.jsxs("div",{className:ns.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:ae,className:ns.textarea,style:{borderColor:F?x:void 0},placeholder:c,value:k,onChange:q=>M(q.target.value),onFocus:()=>W(!0),onBlur:()=>W(!1),rows:2,onKeyDown:ne}),l.jsxs("div",{className:ns.actions,children:[g&&l.jsx("div",{className:ns.deleteWrapper,children:l.jsx("button",{className:ns.deleteButton,onClick:g,type:"button",children:l.jsx(Fw,{size:22})})}),l.jsx("button",{className:ns.cancel,onClick:fe,children:"Cancel"}),l.jsx("button",{className:ns.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:L,disabled:!k.trim(),children:d})]})]})}),Jw=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const j=g.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Ut(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Ut(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Ac.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},eS=`.styles-module__tooltip___mcXL2 {
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
}`,tS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=eS}var Ry=tS,xr=({content:t})=>l.jsx(Jw,{className:Ry.tooltip,content:t,children:l.jsx(Lw,{className:Ry.tooltipIcon})}),St={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Ux=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...St.navigation},{type:"header",label:"Header",...St.header},{type:"hero",label:"Hero",...St.hero},{type:"section",label:"Section",...St.section},{type:"sidebar",label:"Sidebar",...St.sidebar},{type:"footer",label:"Footer",...St.footer},{type:"modal",label:"Modal",...St.modal},{type:"banner",label:"Banner",...St.banner},{type:"drawer",label:"Drawer",...St.drawer},{type:"popover",label:"Popover",...St.popover},{type:"divider",label:"Divider",...St.divider}]},{section:"Content",items:[{type:"card",label:"Card",...St.card},{type:"text",label:"Text",...St.text},{type:"image",label:"Image",...St.image},{type:"video",label:"Video",...St.video},{type:"table",label:"Table",...St.table},{type:"grid",label:"Grid",...St.grid},{type:"list",label:"List",...St.list},{type:"chart",label:"Chart",...St.chart},{type:"codeBlock",label:"Code Block",...St.codeBlock},{type:"map",label:"Map",...St.map},{type:"timeline",label:"Timeline",...St.timeline},{type:"calendar",label:"Calendar",...St.calendar},{type:"accordion",label:"Accordion",...St.accordion},{type:"carousel",label:"Carousel",...St.carousel},{type:"logo",label:"Logo",...St.logo},{type:"faq",label:"FAQ",...St.faq},{type:"gallery",label:"Gallery",...St.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...St.button},{type:"input",label:"Input",...St.input},{type:"search",label:"Search",...St.search},{type:"form",label:"Form",...St.form},{type:"tabs",label:"Tabs",...St.tabs},{type:"dropdown",label:"Dropdown",...St.dropdown},{type:"toggle",label:"Toggle",...St.toggle},{type:"stepper",label:"Stepper",...St.stepper},{type:"rating",label:"Rating",...St.rating},{type:"fileUpload",label:"File Upload",...St.fileUpload},{type:"checkbox",label:"Checkbox",...St.checkbox},{type:"radio",label:"Radio",...St.radio},{type:"slider",label:"Slider",...St.slider},{type:"datePicker",label:"Date Picker",...St.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...St.avatar},{type:"badge",label:"Badge",...St.badge},{type:"tag",label:"Tag",...St.tag},{type:"breadcrumb",label:"Breadcrumb",...St.breadcrumb},{type:"pagination",label:"Pagination",...St.pagination},{type:"progress",label:"Progress",...St.progress},{type:"alert",label:"Alert",...St.alert},{type:"toast",label:"Toast",...St.toast},{type:"notification",label:"Notification",...St.notification},{type:"tooltip",label:"Tooltip",...St.tooltip},{type:"stat",label:"Stat",...St.stat},{type:"skeleton",label:"Skeleton",...St.skeleton},{type:"chip",label:"Chip",...St.chip},{type:"icon",label:"Icon",...St.icon},{type:"spinner",label:"Spinner",...St.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...St.pricing},{type:"testimonial",label:"Testimonial",...St.testimonial},{type:"cta",label:"CTA",...St.cta},{type:"productCard",label:"Product Card",...St.productCard},{type:"profile",label:"Profile",...St.profile},{type:"feature",label:"Feature",...St.feature},{type:"team",label:"Team",...St.team},{type:"login",label:"Login",...St.login},{type:"contact",label:"Contact",...St.contact}]}],Hi={};for(const t of Ux)for(const n of t.items)Hi[n.type]=n;function Le({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Hn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Xo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function nS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Hn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Le,{w:t*.06}),l.jsx(Le,{w:t*.07}),l.jsx(Le,{w:t*.05}),l.jsx(Le,{w:t*.06})]}),l.jsx(Hn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function sS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Le,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Le,{w:t*.6}),l.jsx(Le,{w:t*.4}),l.jsx(Hn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function oS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Le,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Hn,{w:10,h:10,radius:2}),l.jsx(Le,{w:t*(.4+c*17%30/100)})]},c))]})}function iS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"70%",h:2}),l.jsx(Le,{w:"60%",h:2})]},c))})}function aS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"90%"}),l.jsx(Le,{w:"70%"}),l.jsx(Le,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Hn,{w:70,h:26,radius:4}),l.jsx(Hn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function rS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:4,strong:!0}),l.jsx(Le,{w:"95%",h:2}),l.jsx(Le,{w:"85%",h:2}),l.jsx(Le,{w:"50%",h:2})]})]})}function lS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Le,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Le,{w:`${70+u*13%25}%`,h:2},u))]})}function cS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function uS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Le,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function dS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Xo,{size:8}),l.jsx(Le,{w:`${55+c*17%35}%`,h:2})]},c))})}function fS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Le,{w:Math.max(20,t*.5),h:3,strong:!0})})}function hS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Le,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Le,{w:"40%",h:2})})]})}function mS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:60+c*17%30,h:2}),l.jsx(Hn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Hn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function pS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Le,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Le,{w:"80%",h:2}),l.jsx(Le,{w:"65%",h:2}),l.jsx(Le,{w:"75%",h:2})]})]})}function _S({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function gS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0})})}function yS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Le,{w:t*.35})]})}function xS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx(Le,{w:t*.7}),l.jsx(Le,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Hn,{w:"33%",h:"100%",radius:4}),l.jsx(Hn,{w:"33%",h:"100%",radius:4}),l.jsx(Hn,{w:"33%",h:"100%",radius:4})]})]})}function bS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Hn,{w:"100%",h:"100%",radius:4},u))})}function vS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Le,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Le,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function wS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function SS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Xo,{size:Math.min(14,n*.4)}),l.jsx(Le,{w:"50%",h:2})]})}function CS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Xo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"60%",h:3,strong:!0}),l.jsx(Le,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function kS({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function jS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Hn,{w:a,h:`${d}%`,radius:2},u)})})}function MS({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Hn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function TS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Le,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function ES({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Le,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function AS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Hn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function DS({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function NS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Le,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function RS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Hn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Xo,{size:5}),l.jsx(Xo,{size:5}),l.jsx(Xo,{size:5})]})]})}function BS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx(Le,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Xo,{size:5}),l.jsx(Le,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Hn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function LS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"75%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Xo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Le,{w:60,h:3,strong:!0}),l.jsx(Le,{w:40,h:2})]})]})]})}function OS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Le,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Le,{w:t*.35}),l.jsx(Hn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function zS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"40%",h:3,strong:!0}),l.jsx(Le,{w:"70%",h:2})]})]})}function $S({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Le,{w:t*.4,h:3,strong:!0}),l.jsx(Hn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function IS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Le,{w:t*.5,h:2}),l.jsx(Le,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Le,{w:t*.3,h:2})]})}function PS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function HS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Le,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function US({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function VS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function YS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Xo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Le,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function WS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Le,{w:t*.4,h:2}),l.jsx(Le,{w:t*.25,h:2})]})}function FS({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Xo,{size:6}),l.jsx(Xo,{size:6}),l.jsx(Xo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Le,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function XS({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Le,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function qS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Xo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:"50%",h:3,strong:!0}),l.jsx(Le,{w:"75%",h:2})]}),l.jsx(Le,{w:30,h:2})]})}function GS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"65%",h:4,strong:!0}),l.jsx(Le,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Le,{w:"30%",h:5,strong:!0}),l.jsx(Hn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function KS({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Xo,{size:i}),l.jsx(Le,{w:t*.45,h:4,strong:!0}),l.jsx(Le,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Le,{w:20,h:3,strong:!0}),l.jsx(Le,{w:28,h:2})]})]})]})}function QS({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Le,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Le,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function ZS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Le,{w:"70%",h:3,strong:!0}),l.jsx(Le,{w:"90%",h:2}),l.jsx(Le,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function JS({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Hn,{w:i,h:i,radius:i*.25}),l.jsx(Le,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function e4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Le,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function t4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function n4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function s4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function o4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function i4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Le,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Le,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function a4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function r4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Le,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function l4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function c4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function u4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Hn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Le,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Le,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function d4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Le,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Xo,{size:a}),l.jsx(Le,{w:t*.12,h:3,strong:!0}),l.jsx(Le,{w:t*.08,h:2})]},u))})]})}function f4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Le,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Le,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:Math.min(60,t*.2),h:2}),l.jsx(Hn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Hn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Le,{w:t*.4,h:2})]})}function h4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Le,{w:t*.4,h:4,strong:!0}),l.jsx(Le,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx(Hn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:40,h:2}),l.jsx(Hn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Le,{w:50,h:2}),l.jsx(Hn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Le,{w:60,h:2}),l.jsx(Hn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Hn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var m4={navigation:nS,hero:sS,sidebar:oS,footer:iS,modal:aS,card:rS,text:lS,image:cS,table:uS,list:dS,button:fS,input:hS,form:mS,tabs:pS,avatar:_S,badge:gS,header:yS,section:xS,grid:bS,dropdown:vS,toggle:wS,search:SS,toast:CS,progress:kS,chart:jS,video:MS,tooltip:TS,breadcrumb:ES,pagination:AS,divider:DS,accordion:NS,carousel:RS,pricing:BS,testimonial:LS,cta:OS,alert:zS,banner:$S,stat:IS,stepper:PS,tag:HS,rating:US,map:VS,timeline:YS,fileUpload:WS,codeBlock:FS,calendar:XS,notification:qS,productCard:GS,profile:KS,drawer:QS,popover:ZS,logo:JS,faq:e4,gallery:t4,checkbox:n4,radio:s4,slider:o4,datePicker:i4,skeleton:a4,chip:r4,icon:l4,spinner:c4,feature:u4,team:d4,login:f4,contact:h4};function p4({type:t,width:n,height:i,text:a}){const c=m4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var _4=`svg[fill=none] {
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
}`,g4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=_4}var je=g4,nl=24,Wu=5;function By(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],j=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],k=[];for(const re of n)i.has(re.id)||k.push(re);c&&k.push(...c);for(const re of k){const Se=re.x,Ne=re.x+re.width,ee=re.x+re.width/2,fe=re.y,L=re.y+re.height,ne=re.y+re.height/2;for(const U of S)for(const q of[Se,Ne,ee]){const ge=q-U;Math.abs(ge)<Wu&&Math.abs(ge)<Math.abs(u)&&(u=ge)}for(const U of j)for(const q of[fe,L,ne]){const ge=q-U;Math.abs(ge)<Wu&&Math.abs(ge)<Math.abs(d)&&(d=ge)}}const M=Math.abs(u)<Wu?u:0,z=Math.abs(d)<Wu?d:0,N=[],E=new Set,$=h+M,F=p+M,W=g+M,H=_+z,K=x+z,ae=b+z;for(const re of k){const Se=re.x,Ne=re.x+re.width,ee=re.x+re.width/2,fe=re.y,L=re.y+re.height,ne=re.y+re.height/2;for(const U of[Se,ee,Ne])for(const q of[$,W,F])if(Math.abs(q-U)<.5){const ge=`x:${Math.round(U)}`;E.has(ge)||(E.add(ge),N.push({axis:"x",pos:U}))}for(const U of[fe,ne,L])for(const q of[H,ae,K])if(Math.abs(q-U)<.5){const ge=`y:${Math.round(U)}`;E.has(ge)||(E.add(ge),N.push({axis:"y",pos:U}))}}return{dx:M,dy:z,guides:N}}function Ly(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function y4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:j}){const[k,M]=y.useState(new Set),[z,N]=y.useState(null),[E,$]=y.useState(null),[F,W]=y.useState(null),[H,K]=y.useState([]),[ae,re]=y.useState(null),[Se,Ne]=y.useState(!1),ee=y.useRef(!1),[fe,L]=y.useState(new Set),ne=y.useRef(new Map),U=y.useRef(null),q=y.useRef(null),ge=y.useRef(t);ge.current=t;const D=y.useRef(_);D.current=_;const ce=y.useRef(b);ce.current=b;const Z=y.useRef(w);Z.current=w;const he=y.useRef(x);y.useEffect(()=>{x!==he.current&&(he.current=x,M(new Set))},[x]);const Ee=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==Ee.current){Ee.current=S;const ie=new Set(ge.current.map(He=>He.id));ie.size>0&&(L(ie),M(new Set),q.current=null,Ut(()=>{n([]),L(new Set)},180))}},[S,n]),y.useEffect(()=>{const ie=He=>{const Ze=He.target;if(!(Ze.tagName==="INPUT"||Ze.tagName==="TEXTAREA"||Ze.isContentEditable)){if((He.key==="Backspace"||He.key==="Delete")&&k.size>0){He.preventDefault();const ht=new Set(k);L(ht),M(new Set),Ut(()=>{n(ge.current.filter(ut=>!ht.has(ut.id))),L(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(He.key)&&k.size>0){He.preventDefault();const ht=He.shiftKey?20:1,ut=He.key==="ArrowLeft"?-ht:He.key==="ArrowRight"?ht:0,dt=He.key==="ArrowUp"?-ht:He.key==="ArrowDown"?ht:0;n(t.map(Je=>k.has(Je.id)?{...Je,x:Math.max(0,Je.x+ut),y:Math.max(0,Je.y+dt)}:Je));return}if(He.key==="Escape"){i?a(null):k.size>0&&M(new Set);return}}};return document.addEventListener("keydown",ie),()=>document.removeEventListener("keydown",ie)},[k,i,t,n,a]);const Ue=y.useCallback(ie=>{if(ie.button!==0||p||ie.target.closest(`.${je.placement}`))return;ie.preventDefault(),ie.stopPropagation();const Ze=window.scrollY,Ie=ie.clientX,ht=ie.clientY;if(i){q.current="place",d==null||d(!0);let ut=!1,dt=Ie,Je=ht;const rt=tt=>{dt=tt.clientX,Je=tt.clientY;const P=Math.abs(dt-Ie),te=Math.abs(Je-ht);if((P>5||te>5)&&(ut=!0),ut){const Q=Math.min(Ie,dt),ve=Math.min(ht,Je),Ye=Math.abs(dt-Ie),Xe=Math.abs(Je-ht);N({x:Q,y:ve,w:Ye,h:Xe}),W({x:tt.clientX+12,y:tt.clientY+12,text:`${Math.round(Ye)} × ${Math.round(Xe)}`})}},Vt=tt=>{window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",Vt),N(null),W(null),q.current=null,d==null||d(!1);const P=St[i];let te,Q,ve,Ye;ut?(te=Math.min(Ie,dt),Q=Math.min(ht,Je)+Ze,ve=Math.max(nl,Math.abs(dt-Ie)),Ye=Math.max(nl,Math.abs(Je-ht))):(ve=P.width,Ye=P.height,te=Ie-ve/2,Q=ht+Ze-Ye/2),te=Math.max(0,te),Q=Math.max(0,Q);const Xe={id:Ly(),type:i,x:te,y:Q,width:ve,height:Ye,scrollY:Ze,timestamp:Date.now()},Te=[...t,Xe];n(Te),M(new Set([Xe.id])),a(null)};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",Vt)}else{ie.shiftKey||M(new Set),q.current="select";let ut=!1;const dt=rt=>{const Vt=Math.abs(rt.clientX-Ie),tt=Math.abs(rt.clientY-ht);if((Vt>4||tt>4)&&(ut=!0),ut){const P=Math.min(Ie,rt.clientX),te=Math.min(ht,rt.clientY);$({x:P,y:te,w:Math.abs(rt.clientX-Ie),h:Math.abs(rt.clientY-ht)})}},Je=rt=>{if(window.removeEventListener("mousemove",dt),window.removeEventListener("mouseup",Je),q.current=null,ut){const Vt=Math.min(Ie,rt.clientX),tt=Math.min(ht,rt.clientY)+Ze,P=Math.abs(rt.clientX-Ie),te=Math.abs(rt.clientY-ht),Q=new Set(ie.shiftKey?k:new Set);for(const ve of t)ve.y-Ze,ve.x+ve.width>Vt&&ve.x<Vt+P&&ve.y+ve.height>tt&&ve.y<tt+te&&Q.add(ve.id);M(Q)}$(null)};window.addEventListener("mousemove",dt),window.addEventListener("mouseup",Je)}},[i,p,t,n,k]),Me=y.useCallback((ie,He)=>{var Xe;if(ie.button!==0)return;const Ze=ie.target;if(Ze.closest(`.${je.handle}`)||Ze.closest(`.${je.deleteButton}`))return;ie.preventDefault(),ie.stopPropagation();let Ie;ie.shiftKey?(Ie=new Set(k),Ie.has(He)?Ie.delete(He):Ie.add(He)):k.has(He)?Ie=new Set(k):Ie=new Set([He]),M(Ie),(Ie.size!==k.size||[...Ie].some(Te=>!k.has(Te)))&&((Xe=D.current)==null||Xe.call(D,Ie,ie.shiftKey));const ut=ie.clientX,dt=ie.clientY,Je=new Map;for(const Te of t)Ie.has(Te.id)&&Je.set(Te.id,{x:Te.x,y:Te.y});q.current="move",d==null||d(!0);let rt=!1,Vt=!1,tt=t,P=0,te=0;const Q=new Map;for(const Te of t)Je.has(Te.id)&&Q.set(Te.id,{w:Te.width,h:Te.height});const ve=Te=>{var cn;const bt=Te.clientX-ut,Ve=Te.clientY-dt;if((Math.abs(bt)>2||Math.abs(Ve)>2)&&(rt=!0),!rt)return;if(Te.altKey&&!Vt){Vt=!0;const xt=[];for(const Xt of t)Je.has(Xt.id)&&xt.push({...Xt,id:Ly(),timestamp:Date.now()});tt=[...t,...xt]}let Dt=1/0,pt=1/0,We=-1/0,vt=-1/0;for(const[xt,Xt]of Je){const On=Q.get(xt);On&&(Dt=Math.min(Dt,Xt.x+bt),pt=Math.min(pt,Xt.y+Ve),We=Math.max(We,Xt.x+bt+On.w),vt=Math.max(vt,Xt.y+Ve+On.h))}const Pt={x:Dt,y:pt,width:We-Dt,height:vt-pt},{dx:Kt,dy:Ke,guides:yt}=By(Pt,tt,new Set(Je.keys()),void 0,g);K(yt);const _t=bt+Kt,$t=Ve+Ke;P=_t,te=$t,n(tt.map(xt=>{const Xt=Je.get(xt.id);return Xt?{...xt,x:Math.max(0,Xt.x+_t),y:Math.max(0,Xt.y+$t)}:xt})),(cn=ce.current)==null||cn.call(ce,_t,$t)},Ye=()=>{var Te;window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",Ye),q.current=null,d==null||d(!1),K([]),(Te=Z.current)==null||Te.call(Z,P,te,rt)};window.addEventListener("mousemove",ve),window.addEventListener("mouseup",Ye)},[k,t,n,d]),mt=y.useCallback((ie,He,Ze)=>{ie.preventDefault(),ie.stopPropagation();const Ie=t.find(Q=>Q.id===He);if(!Ie)return;M(new Set([He])),q.current="resize",d==null||d(!0);const ht=ie.clientX,ut=ie.clientY,dt=Ie.width,Je=Ie.height,rt=Ie.x,Vt=Ie.y,tt={left:Ze.includes("w"),right:Ze.includes("e"),top:Ze.includes("n"),bottom:Ze.includes("s")},P=Q=>{const ve=Q.clientX-ht,Ye=Q.clientY-ut;let Xe=dt,Te=Je,bt=rt,Ve=Vt;Ze.includes("e")&&(Xe=Math.max(nl,dt+ve)),Ze.includes("w")&&(Xe=Math.max(nl,dt-ve),bt=rt+dt-Xe),Ze.includes("s")&&(Te=Math.max(nl,Je+Ye)),Ze.includes("n")&&(Te=Math.max(nl,Je-Ye),Ve=Vt+Je-Te);const Dt={x:bt,y:Ve,width:Xe,height:Te},{dx:pt,dy:We,guides:vt}=By(Dt,ge.current,new Set([He]),tt,g);K(vt),pt!==0&&(tt.right?Xe+=pt:tt.left&&(bt+=pt,Xe-=pt)),We!==0&&(tt.bottom?Te+=We:tt.top&&(Ve+=We,Te-=We)),n(ge.current.map(Pt=>Pt.id===He?{...Pt,x:bt,y:Ve,width:Xe,height:Te}:Pt)),W({x:Q.clientX+12,y:Q.clientY+12,text:`${Math.round(Xe)} × ${Math.round(Te)}`})},te=()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",te),W(null),q.current=null,d==null||d(!1),K([])};window.addEventListener("mousemove",P),window.addEventListener("mouseup",te)},[t,n,d]),et=y.useCallback(ie=>{q.current=null,L(He=>{const Ze=new Set(He);return Ze.add(ie),Ze}),M(He=>{const Ze=new Set(He);return Ze.delete(ie),Ze}),Ut(()=>{n(ge.current.filter(He=>He.id!==ie)),L(He=>{const Ze=new Set(He);return Ze.delete(ie),Ze})},180)},[n]),ze={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},ct=y.useCallback(ie=>{const He=t.find(Ze=>Ze.id===ie);He&&(ee.current=!!He.text,re(ie),Ne(!1))},[t]),it=y.useCallback(()=>{ae&&(Ne(!0),Ut(()=>{re(null),Ne(!1)},150))},[ae]);y.useEffect(()=>{u&&ae&&it()},[u]);const Mt=y.useCallback(ie=>{ae&&(n(t.map(He=>He.id===ae?{...He,text:ie.trim()||void 0}:He)),it())},[ae,t,n,it]),Ct=typeof window<"u"?window.scrollY:0,zt=["nw","ne","se","sw"],Zt=j?"#f97316":"#3c82f7",Oe=[{dir:"n",cls:je.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Zt})})},{dir:"e",cls:je.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Zt})})},{dir:"s",cls:je.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Zt})})},{dir:"w",cls:je.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Zt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:U,className:`${je.overlay} ${c?"":je.light} ${i?je.placing:""} ${p?je.passthrough:""} ${u?je.overlayExiting:""} ${j?je.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ue,children:t.map(ie=>{var ht;const He=k.has(ie.id),Ze=((ht=Hi[ie.type])==null?void 0:ht.label)||ie.type,Ie=ie.y-Ct;return l.jsxs("div",{"data-design-placement":ie.id,className:`${je.placement} ${He?je.selected:""} ${fe.has(ie.id)?je.exiting:""}`,style:{left:ie.x,top:Ie,width:ie.width,height:ie.height,position:"fixed"},onMouseDown:ut=>Me(ut,ie.id),onDoubleClick:()=>ct(ie.id),children:[l.jsx("span",{className:je.placementLabel,children:Ze}),l.jsx("span",{className:`${je.placementAnnotation} ${ie.text?je.annotationVisible:""}`,children:(ie.text&&ne.current.set(ie.id,ie.text),ie.text||ne.current.get(ie.id)||"")}),l.jsx("div",{className:je.placementContent,children:l.jsx(p4,{type:ie.type,width:ie.width,height:ie.height,text:ie.text})}),l.jsx("div",{className:je.deleteButton,onMouseDown:ut=>ut.stopPropagation(),onClick:()=>et(ie.id),children:"✕"}),zt.map(ut=>l.jsx("div",{className:`${je.handle} ${je[`handle${ut.charAt(0).toUpperCase()}${ut.slice(1)}`]}`,onMouseDown:dt=>mt(dt,ie.id,ut)},ut)),Oe.map(({dir:ut,cls:dt,arrow:Je})=>l.jsx("div",{className:`${je.edgeHandle} ${dt}`,onMouseDown:rt=>mt(rt,ie.id,ut),children:Je},ut))]},ie.id)})}),ae&&(()=>{var Vt,tt;const ie=t.find(P=>P.id===ae);if(!ie)return null;const He=ie.y-Ct,Ze=ie.x+ie.width/2,Ie=He-8,ht=He+ie.height+8,ut=Ie>200,dt=ht<window.innerHeight-100,Je=Math.max(160,Math.min(window.innerWidth-160,Ze));let rt;return ut?rt={left:Je,bottom:window.innerHeight-Ie}:dt?rt={left:Je,top:ht}:rt={left:Je,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:((Vt=Hi[ie.type])==null?void 0:Vt.label)||ie.type,placeholder:ze[ie.type]||"Label or content text",initialValue:(tt=ie.text)!=null?tt:"",submitLabel:ee.current?"Save":"Set",onSubmit:Mt,onCancel:it,onDelete:ee.current?()=>{Mt("")}:void 0,isExiting:Se,lightMode:!c,style:rt})})(),z&&l.jsx("div",{className:je.drawBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),E&&l.jsx("div",{className:je.selectBox,style:{left:E.x,top:E.y,width:E.w,height:E.h},"data-feedback-toolbar":!0}),F&&l.jsx("div",{className:je.sizeIndicator,style:{left:F.x,top:F.y},"data-feedback-toolbar":!0,children:F.text}),H.map((ie,He)=>l.jsx("div",{className:je.guideLine,style:ie.axis==="x"?{position:"fixed",left:ie.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ie.pos-Ct,right:0,height:1},"data-feedback-toolbar":!0},`${ie.axis}-${ie.pos}-${He}`))]})}function x4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?je.fadeTop:""} ${i?je.fadeBottom:""}`}var B="currentColor",ke="0.5";function b4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:B,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:B,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:B,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:B,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:B,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:B,strokeWidth:ke})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:B,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:B,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:B,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:B,strokeWidth:ke})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:B,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:B,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:B,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:B,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:B,strokeWidth:ke,fill:B,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:B,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:B,strokeWidth:ke})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:B,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:B,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:B,strokeWidth:ke})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:B,strokeWidth:ke,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:B,strokeWidth:ke,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:B,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:B,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:B,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:B,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:B,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:B,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:B,strokeWidth:ke})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:B,strokeWidth:ke})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:B,strokeWidth:ke,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:B,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:B,strokeWidth:ke})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:B,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:B,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:B,opacity:".15",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:B,strokeWidth:ke})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:B,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:B,strokeWidth:ke})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:B,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:B,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:B,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:B,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:B,strokeWidth:ke,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:B,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:B,strokeWidth:ke})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:B,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:B,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:B,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:B,strokeWidth:ke})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:B,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:B,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:B,opacity:".2",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:B,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:B,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:B,strokeWidth:ke})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:B,strokeWidth:ke,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:B,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:B,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:B,strokeWidth:ke,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:B,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:B,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:B,opacity:".15",stroke:B,strokeWidth:ke})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:B,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:B,opacity:".2",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:B,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:B,strokeWidth:ke,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:B,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:B,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:B,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:B,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:B,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:B,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:B,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:B,strokeWidth:ke,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:B,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:B,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:B,strokeWidth:ke})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:B,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:B,strokeWidth:ke,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:B,strokeWidth:ke})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:B,strokeWidth:ke,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:B,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:B,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:B,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:B,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:B,strokeWidth:ke})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:B,strokeWidth:ke,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:B,strokeWidth:ke}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:B,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:B,strokeWidth:ke})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:B,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:B,strokeWidth:ke,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:B,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:B,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:B,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:B,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:B,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:B,opacity:".08",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:B,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:B,strokeWidth:ke,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:B,strokeWidth:ke,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:B,strokeWidth:ke,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:B,strokeWidth:ke,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:B,strokeWidth:ke,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:B,strokeWidth:ke,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:B,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:B,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:B,strokeWidth:ke,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:B,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:B,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:B,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:B,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:B,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:B,strokeWidth:ke}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:B,opacity:".2"})]});default:return null}}function v4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${je.placeScroll} ${c||""}`,children:Ux.map(d=>l.jsxs("div",{className:je.paletteSection,children:[l.jsx("div",{className:je.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${je.paletteItem} ${t===h.type?je.active:""} ${u?je.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:je.paletteItemIcon,children:l.jsx(b4,{type:h.type})}),l.jsx("span",{className:je.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function w4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Ut(()=>a(null),250)}else g.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:je.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${je.rollingNum} ${d==="up"?je.exitUp:je.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${je.rollingNum} ${d==="up"?je.enterUp:je.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:je.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${je.rollingNum} ${d==="up"?je.exitUp:je.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${je.rollingNum} ${d==="up"?je.enterUp:je.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function S4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[j,k]=y.useState(!1),[M,z]=y.useState("exit"),[N,E]=y.useState(!1),[$,F]=y.useState(!0),W=y.useRef(0),H=y.useRef(""),K=y.useRef(0),ae=y.useRef(),re=y.useRef(null),[Se,Ne]=y.useState("");y.useEffect(()=>(u?(k(!0),clearTimeout(ae.current),cancelAnimationFrame(K.current),K.current=al(()=>{K.current=al(()=>{z("enter")})})):(cancelAnimationFrame(K.current),z("exit"),clearTimeout(ae.current),ae.current=Ut(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(K.current)),[u]);const ee=h>0||a>0,fe=h+a;return fe>0&&(W.current=fe,H.current=_?fe===1?"Component":"Components":fe===1?"Change":"Changes"),y.useEffect(()=>{if(ee)N?F(!1):(F(!0),E(!0),al(()=>{al(()=>{F(!1)})}));else{F(!0);const L=Ut(()=>E(!1),300);return()=>clearTimeout(L)}},[ee]),y.useEffect(()=>{if(!j)return;const L=re.current;if(!L)return;const ne=()=>Ne(x4(L));ne(),L.addEventListener("scroll",ne,{passive:!0});const U=new ResizeObserver(ne);return U.observe(L),()=>{L.removeEventListener("scroll",ne),U.disconnect()}},[j]),j?l.jsxs("div",{className:`${je.palette} ${je[M]} ${i?"":je.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:L=>L.stopPropagation(),onMouseDown:L=>L.stopPropagation(),onTransitionEnd:L=>{L.target===L.currentTarget&&(u||(clearTimeout(ae.current),k(!1),z("exit"),d==null||d()))},children:[l.jsxs("div",{className:je.paletteHeader,children:[l.jsx("div",{className:je.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:je.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${je.canvasToggle} ${_?je.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:je.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:je.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${je.wireframePurposeWrap} ${_?"":je.collapsed}`,children:l.jsx("div",{className:je.wireframePurposeInner,children:l.jsx("textarea",{className:je.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:L=>w(L.target.value),rows:2})})}),l.jsx(v4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:re,fadeClass:Se,blankCanvas:_}),N&&l.jsx("div",{className:`${je.paletteFooterWrap} ${$?je.footerHidden:""}`,children:l.jsx("div",{className:je.paletteFooterInner,children:l.jsx("div",{className:je.paletteFooterInnerContent,children:l.jsxs("div",{className:je.paletteFooter,children:[l.jsx("span",{className:je.paletteFooterCount,children:l.jsx(w4,{value:W.current,suffix:H.current})}),l.jsx("button",{className:je.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function dl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Vo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=dl(i)}return null}function C4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=dl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ul(t){var a,c,u,d,h,p,g,_;const n=C4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Vo(t,"svg");if(x){const b=dl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ul(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=dl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function sc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Fu(t){const n=dl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));j&&(w=`.${j}`)}if(x==="button"||x==="a"){const j=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(j)return`${x}${w} "${j}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function oc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Vx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),k4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),j4=new Set(["input","textarea","select"]),M4=new Set(["img","video","canvas","svg"]),T4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Xu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;k4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:j4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:M4.has(a)?c=["width","height","objectFit","borderRadius"]:T4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Vx.has(h)&&(i[u]=h)}return i}var E4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function qu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of E4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Vx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function A4(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Gu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Ku(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=dl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var D4=new Set(["nav","header","main","section","article","footer","aside"]),Nm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Oy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},N4=new Set(["script","style","noscript","link","meta"]),R4=40;function Yx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Cr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Cr(i)} > ${n}:nth-child(${c})`}return n}function jd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Nm[a])return Nm[a];if(Oy[n])return Oy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ul(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Wx(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function Fx(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function B4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(N4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<R4)return;const g=D4.has(d),_=c.getAttribute("role")&&Nm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,w=Yx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(c),tagName:d,selector:Cr(c),role:c.getAttribute("role"),className:Wx(c),textSnippet:Fx(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function L4(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Yx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(t),tagName:t.tagName.toLowerCase(),selector:Cr(t),role:t.getAttribute("role"),className:Wx(t),textSnippet:Fx(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var zy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},$y=["nw","n","ne","e","se","s","sw","w"],Qu=24,Iy=16,Zu=5;function Py(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const W of n)i.has(W.id)||b.push(W.currentRect);a&&b.push(...a);for(const W of b){const H=W.x,K=W.x+W.width,ae=W.x+W.width/2,re=W.y,Se=W.y+W.height,Ne=W.y+W.height/2;for(const ee of[d,h,p])for(const fe of[H,K,ae]){const L=fe-ee;Math.abs(L)<Zu&&Math.abs(L)<Math.abs(c)&&(c=L)}for(const ee of[g,_,x])for(const fe of[re,Se,Ne]){const L=fe-ee;Math.abs(L)<Zu&&Math.abs(L)<Math.abs(u)&&(u=L)}}const w=Math.abs(c)<Zu?c:0,S=Math.abs(u)<Zu?u:0,j=[],k=new Set,M=d+w,z=h+w,N=p+w,E=g+S,$=_+S,F=x+S;for(const W of b){const H=W.x,K=W.x+W.width,ae=W.x+W.width/2,re=W.y,Se=W.y+W.height,Ne=W.y+W.height/2;for(const ee of[H,ae,K])for(const fe of[M,N,z])if(Math.abs(fe-ee)<.5){const L=`x:${Math.round(ee)}`;k.has(L)||(k.add(L),j.push({axis:"x",pos:ee}))}for(const ee of[re,Ne,Se])for(const fe of[E,F,$])if(Math.abs(fe-ee)<.5){const L=`y:${Math.round(ee)}`;k.has(L)||(k.add(L),j.push({axis:"y",pos:ee}))}}return{dx:w,dy:S,guides:j}}var O4=new Set(["script","style","noscript","link","meta","br","hr"]);function Hy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(O4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Iy&&i.height>=Iy)return n;n=n.parentElement}return null}function z4({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,j]=y.useState(new Set),[k,M]=y.useState(!1),z=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==z.current&&(z.current=x,b.length>0&&M(!0))},[x,b.length]);const N=y.useRef(p);y.useEffect(()=>{p!==N.current&&(N.current=p,j(new Set))},[p]);const[E,$]=y.useState(null),[F,W]=y.useState(!1),H=y.useRef(!1),K=y.useCallback(P=>{const te=b.find(Q=>Q.id===P);te&&(H.current=!!te.note,$(P),W(!1))},[b]),ae=y.useCallback(()=>{E&&(W(!0),Ut(()=>{$(null),W(!1)},150))},[E]),re=y.useCallback(P=>{E&&(n({...t,sections:b.map(te=>te.id===E?{...te,note:P.trim()||void 0}:te)}),ae())},[E,b,t,n,ae]);y.useEffect(()=>{a&&E&&ae()},[a]);const[Se,Ne]=y.useState(new Set),ee=y.useRef(new Map),[fe,L]=y.useState(null),[ne,U]=y.useState(null),[q,ge]=y.useState([]),[D,ce]=y.useState(0),Z=y.useRef(null),he=y.useRef(new Set),Ee=y.useRef(new Map),[Ue,Me]=y.useState(new Map),[mt,et]=y.useState(new Map),ze=y.useRef(new Set),ct=y.useRef(new Map),it=y.useRef(h);it.current=h;const Mt=y.useRef(g);Mt.current=g;const Ct=y.useRef(_);Ct.current=_,y.useEffect(()=>{u&&j(new Set)},[u]);const[zt,Zt]=y.useState(()=>!t.sections.some(P=>{const te=P.originalRect,Q=P.currentRect;return Math.abs(te.x-Q.x)>1||Math.abs(te.y-Q.y)>1||Math.abs(te.width-Q.width)>1||Math.abs(te.height-Q.height)>1}));y.useEffect(()=>{if(!zt){const P=Ut(()=>Zt(!0),380);return()=>clearTimeout(P)}},[]);const Oe=y.useRef(new Set);y.useEffect(()=>{Oe.current=new Set(b.map(P=>P.selector))},[b]),y.useEffect(()=>{const P=()=>ce(window.scrollY);return P(),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),()=>{window.removeEventListener("scroll",P),window.removeEventListener("resize",P)}},[]),y.useEffect(()=>{const P=te=>{if(Z.current){L(null);return}const Q=document.elementFromPoint(te.clientX,te.clientY);if(!Q){L(null);return}if(Q.closest("[data-feedback-toolbar]")){L(null);return}if(Q.closest("[data-design-placement]")){L(null);return}if(Q.closest("[data-annotation-popup]")){L(null);return}const ve=Hy(Q);if(!ve){L(null);return}for(const Xe of Oe.current)try{const Te=document.querySelector(Xe);if(Te&&(Te===ve||ve.contains(Te))){L(null);return}}catch{}const Ye=ve.getBoundingClientRect();L({x:Ye.x,y:Ye.y,w:Ye.width,h:Ye.height})};return document.addEventListener("mousemove",P,{passive:!0}),()=>document.removeEventListener("mousemove",P)},[b]),y.useEffect(()=>{const P=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=P}},[]),y.useEffect(()=>{const P=te=>{var Te,bt,Ve,Dt;if(Z.current||te.button!==0)return;const Q=te.target;if(!Q||Q.closest("[data-feedback-toolbar]")||Q.closest("[data-design-placement]")||Q.closest("[data-annotation-popup]"))return;const ve=Hy(Q);let Ye=!1;if(ve)for(const pt of Oe.current)try{const We=document.querySelector(pt);if(We&&(We===ve||ve.contains(We))){Ye=!0;break}}catch{}const Xe=!!(te.shiftKey||te.metaKey||te.ctrlKey);if(ve&&!Ye){te.preventDefault(),te.stopPropagation();const pt=L4(ve),We=[...b,pt],vt=[...t.originalOrder,pt.id];n({...t,sections:We,originalOrder:vt});const Pt=new Set([pt.id]);j(Pt),(Te=it.current)==null||Te.call(it,Pt,Xe),L(null);const Kt=te.clientX,Ke=te.clientY,yt={x:pt.currentRect.x,y:pt.currentRect.y};pt.originalRect;let _t=!1,$t=0,cn=0;Z.current="move";const xt=On=>{var tn;const is=On.clientX-Kt,xn=On.clientY-Ke;if(!_t&&(Math.abs(is)>2||Math.abs(xn)>2)&&(_t=!0),!_t)return;const io={x:yt.x+is,y:yt.y+xn,width:pt.currentRect.width,height:pt.currentRect.height},as=Py(io,We,new Set([pt.id]),d);ge(as.guides);const ss=is+as.dx,Qt=xn+as.dy;$t=ss,cn=Qt;const Tn=document.querySelector(`[data-rearrange-section="${pt.id}"]`);Tn&&(Tn.style.transform=`translate(${ss}px, ${Qt}px)`),Me(new Map([[pt.id,{x:yt.x+ss,y:yt.y+Qt,width:pt.currentRect.width,height:pt.currentRect.height}]])),(tn=Mt.current)==null||tn.call(Mt,ss,Qt)},Xt=()=>{var is;window.removeEventListener("mousemove",xt),window.removeEventListener("mouseup",Xt),Z.current=null,ge([]),Me(new Map);const On=document.querySelector(`[data-rearrange-section="${pt.id}"]`);On&&(On.style.transform=""),_t&&n({...t,sections:We.map(xn=>xn.id===pt.id?{...xn,currentRect:{...xn.currentRect,x:Math.max(0,yt.x+$t),y:Math.max(0,yt.y+cn)}}:xn),originalOrder:vt}),(is=Ct.current)==null||is.call(Ct,$t,cn,_t)};window.addEventListener("mousemove",xt),window.addEventListener("mouseup",Xt)}else if(Ye&&ve){te.preventDefault();for(const pt of b)try{const We=document.querySelector(pt.selector);if(We&&We===ve){const vt=new Set([pt.id]);j(vt),(bt=it.current)==null||bt.call(it,vt,Xe);return}}catch{}Xe||(j(new Set),(Ve=it.current)==null||Ve.call(it,new Set,!1))}else Xe||(j(new Set),(Dt=it.current)==null||Dt.call(it,new Set,!1))};return document.addEventListener("mousedown",P,!0),()=>document.removeEventListener("mousedown",P,!0)},[b,t,n]),y.useEffect(()=>{const P=te=>{const Q=te.target;if(!(Q.tagName==="INPUT"||Q.tagName==="TEXTAREA"||Q.isContentEditable)){if((te.key==="Backspace"||te.key==="Delete")&&S.size>0){te.preventDefault();const ve=new Set(S);Ne(Ye=>{const Xe=new Set(Ye);for(const Te of ve)Xe.add(Te);return Xe}),j(new Set),Ut(()=>{const Ye=w.current;n({...Ye,sections:Ye.sections.filter(Xe=>!ve.has(Xe.id)),originalOrder:Ye.originalOrder.filter(Xe=>!ve.has(Xe))}),Ne(Xe=>{const Te=new Set(Xe);for(const bt of ve)Te.delete(bt);return Te})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(te.key)&&S.size>0){te.preventDefault();const ve=te.shiftKey?20:1,Ye=te.key==="ArrowLeft"?-ve:te.key==="ArrowRight"?ve:0,Xe=te.key==="ArrowUp"?-ve:te.key==="ArrowDown"?ve:0;n({...t,sections:b.map(Te=>S.has(Te.id)?{...Te,currentRect:{...Te.currentRect,x:Math.max(0,Te.currentRect.x+Ye),y:Math.max(0,Te.currentRect.y+Xe)}}:Te)});return}te.key==="Escape"&&S.size>0&&j(new Set)}};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[S,b,t,n]);const ie=y.useCallback((P,te)=>{var Kt;if(P.button!==0)return;const Q=P.target;if(Q.closest(`.${je.handle}`)||Q.closest(`.${je.deleteButton}`))return;P.preventDefault(),P.stopPropagation();let ve;P.shiftKey||P.metaKey||P.ctrlKey?(ve=new Set(S),ve.has(te)?ve.delete(te):ve.add(te)):S.has(te)?ve=new Set(S):ve=new Set([te]),j(ve),(ve.size!==S.size||[...ve].some(Ke=>!S.has(Ke)))&&((Kt=it.current)==null||Kt.call(it,ve,!!(P.shiftKey||P.metaKey||P.ctrlKey)));const Xe=P.clientX,Te=P.clientY,bt=new Map;for(const Ke of b)ve.has(Ke.id)&&bt.set(Ke.id,{x:Ke.currentRect.x,y:Ke.currentRect.y});Z.current="move";let Ve=!1,Dt=0,pt=0;const We=new Map;for(const Ke of b)if(ve.has(Ke.id)){const yt=document.querySelector(`[data-rearrange-section="${Ke.id}"]`);We.set(Ke.id,{outlineEl:yt,curW:Ke.currentRect.width,curH:Ke.currentRect.height})}const vt=Ke=>{var as;const yt=Ke.clientX-Xe,_t=Ke.clientY-Te;if(yt===0&&_t===0)return;Ve=!0;let $t=1/0,cn=1/0,xt=-1/0,Xt=-1/0;for(const[ss,{curW:Qt,curH:Tn}]of We){const tn=bt.get(ss);if(!tn)continue;const bn=tn.x+yt,nt=tn.y+_t;$t=Math.min($t,bn),cn=Math.min(cn,nt),xt=Math.max(xt,bn+Qt),Xt=Math.max(Xt,nt+Tn)}const On=Py({x:$t,y:cn,width:xt-$t,height:Xt-cn},b,ve,d),is=yt+On.dx,xn=_t+On.dy;Dt=is,pt=xn,ge(On.guides);for(const[,{outlineEl:ss}]of We)ss&&(ss.style.transform=`translate(${is}px, ${xn}px)`);const io=new Map;for(const[ss,{curW:Qt,curH:Tn}]of We){const tn=bt.get(ss);if(tn){const bn={x:Math.max(0,tn.x+is),y:Math.max(0,tn.y+xn),width:Qt,height:Tn};io.set(ss,bn)}}Me(io),(as=Mt.current)==null||as.call(Mt,is,xn)},Pt=Ke=>{var yt,_t;window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",Pt),Z.current=null,ge([]),Me(new Map);for(const[,{outlineEl:$t}]of We)$t&&($t.style.transform="");if(Ve){const $t=Ke.clientX-Xe,cn=Ke.clientY-Te;if(Math.abs($t)<5&&Math.abs(cn)<5)n({...t,sections:b.map(xt=>{const Xt=bt.get(xt.id);return Xt?{...xt,currentRect:{...xt.currentRect,x:Xt.x,y:Xt.y}}:xt})});else{n({...t,sections:b.map(xt=>{const Xt=bt.get(xt.id);return Xt?{...xt,currentRect:{...xt.currentRect,x:Math.max(0,Xt.x+Dt),y:Math.max(0,Xt.y+pt)}}:xt})}),(yt=Ct.current)==null||yt.call(Ct,Dt,pt,!0);return}}(_t=Ct.current)==null||_t.call(Ct,0,0,!1)};window.addEventListener("mousemove",vt),window.addEventListener("mouseup",Pt)},[S,b,t,n]),He=y.useCallback((P,te,Q)=>{P.preventDefault(),P.stopPropagation();const ve=b.find(vt=>vt.id===te);if(!ve)return;j(new Set([te])),Z.current="resize";const Ye=P.clientX,Xe=P.clientY,Te={...ve.currentRect};ve.originalRect;const bt=Te.width/Te.height;let Ve={...Te};const Dt=document.querySelector(`[data-rearrange-section="${te}"]`),pt=vt=>{const Pt=vt.clientX-Ye,Kt=vt.clientY-Xe;let Ke=Te.x,yt=Te.y,_t=Te.width,$t=Te.height;if(Q.includes("e")&&(_t=Math.max(Qu,Te.width+Pt)),Q.includes("w")&&(_t=Math.max(Qu,Te.width-Pt),Ke=Te.x+Te.width-_t),Q.includes("s")&&($t=Math.max(Qu,Te.height+Kt)),Q.includes("n")&&($t=Math.max(Qu,Te.height-Kt),yt=Te.y+Te.height-$t),vt.shiftKey)if(Q.length===2){const xt=Math.abs(_t-Te.width),Xt=Math.abs($t-Te.height);xt>Xt?$t=_t/bt:_t=$t*bt,Q.includes("w")&&(Ke=Te.x+Te.width-_t),Q.includes("n")&&(yt=Te.y+Te.height-$t)}else Q==="e"||Q==="w"?$t=_t/bt:_t=$t*bt,Q==="w"&&(Ke=Te.x+Te.width-_t),Q==="n"&&(yt=Te.y+Te.height-$t);Ve={x:Ke,y:yt,width:_t,height:$t},Dt&&(Dt.style.left=`${Ke}px`,Dt.style.top=`${yt-D}px`,Dt.style.width=`${_t}px`,Dt.style.height=`${$t}px`),U({x:vt.clientX+12,y:vt.clientY+12,text:`${Math.round(_t)} × ${Math.round($t)}`}),Me(new Map([[te,Ve]]))},We=()=>{window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",We),U(null),Z.current=null,Me(new Map),n({...t,sections:b.map(vt=>vt.id===te?{...vt,currentRect:Ve}:vt)})};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",We)},[b,t,n,D]),Ze=y.useCallback(P=>{Ne(te=>{const Q=new Set(te);return Q.add(P),Q}),j(te=>{const Q=new Set(te);return Q.delete(P),Q}),Ut(()=>{const te=w.current;n({...te,sections:te.sections.filter(Q=>Q.id!==P),originalOrder:te.originalOrder.filter(Q=>Q!==P)}),Ne(Q=>{const ve=new Set(Q);return ve.delete(P),ve})},180)},[n]),Ie=P=>{const te=P.originalRect,Q=P.currentRect;return Math.abs(te.x-Q.x)>1||Math.abs(te.y-Q.y)>1||Math.abs(te.width-Q.width)>1||Math.abs(te.height-Q.height)>1},ht=P=>{const te=P.originalRect,Q=P.currentRect;return Math.abs(te.x-Q.x)>1||Math.abs(te.y-Q.y)>1},ut=P=>{const te=P.originalRect,Q=P.currentRect;return Math.abs(te.width-Q.width)>1||Math.abs(te.height-Q.height)>1};for(const P of b)Ee.current.has(P.id)||(ht(P)?Ee.current.set(P.id,"move"):ut(P)&&Ee.current.set(P.id,"resize"));for(const P of Ee.current.keys())b.some(te=>te.id===P)||Ee.current.delete(P);const dt=b.filter(P=>{try{if(Se.has(P.id)||S.has(P.id))return!0;const te=document.querySelector(P.selector);if(!te)return!1;const Q=te.getBoundingClientRect(),ve=P.originalRect;return Math.abs(Q.width-ve.width)+Math.abs(Q.height-ve.height)<200}catch{return!1}}),Je=dt.filter(P=>Ie(P)),rt=dt.filter(P=>!Ie(P)),Vt=new Set(Je.map(P=>P.id));for(const P of he.current)Vt.has(P)||he.current.delete(P);const tt=[...Vt].sort().join(",");for(const P of Je)ct.current.set(P.id,{currentRect:P.currentRect,originalRect:P.originalRect,isFixed:P.isFixed});return y.useEffect(()=>{const P=ze.current;ze.current=Vt;const te=new Map;for(const Q of P)if(!Vt.has(Q)){if(!b.some(Ye=>Ye.id===Q))continue;const ve=ct.current.get(Q);ve&&(te.set(Q,{orig:ve.originalRect,target:ve.currentRect,isFixed:ve.isFixed}),ct.current.delete(Q))}if(te.size>0){et(ve=>{const Ye=new Map(ve);for(const[Xe,Te]of te)Ye.set(Xe,Te);return Ye});const Q=Ut(()=>{et(ve=>{const Ye=new Map(ve);for(const Xe of te.keys())Ye.delete(Xe);return Ye})},250);return()=>clearTimeout(Q)}},[tt,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${je.rearrangeOverlay} ${i?"":je.light} ${a?je.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[fe&&l.jsx("div",{className:je.hoverHighlight,style:{left:fe.x,top:fe.y,width:fe.w,height:fe.h}}),rt.map(P=>{const te=P.currentRect,Q=P.isFixed?te.y:te.y-D,ve=zy,Ye=S.has(P.id);return l.jsxs("div",{"data-rearrange-section":P.id,className:`${je.sectionOutline} ${Ye?je.selected:""} ${k||a||Se.has(P.id)?je.exiting:""}`,style:{left:te.x,top:Q,width:te.width,height:te.height,borderColor:ve.border,backgroundColor:ve.bg,...zt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Xe=>ie(Xe,P.id),onDoubleClick:()=>K(P.id),children:[l.jsx("span",{className:je.sectionLabel,style:{backgroundColor:ve.pill},children:P.label}),l.jsx("span",{className:`${je.sectionAnnotation} ${P.note?je.annotationVisible:""}`,children:(P.note&&ee.current.set(P.id,P.note),P.note||ee.current.get(P.id)||"")}),l.jsxs("span",{className:je.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:je.deleteButton,onMouseDown:Xe=>Xe.stopPropagation(),onClick:()=>Ze(P.id),children:"✕"}),$y.map(Xe=>l.jsx("div",{className:`${je.handle} ${je[`handle${Xe.charAt(0).toUpperCase()}${Xe.slice(1)}`]}`,onMouseDown:Te=>He(Te,P.id,Xe)},Xe))]},P.id)}),Je.map(P=>{const te=P.currentRect,Q=P.isFixed?te.y:te.y-D,ve=S.has(P.id),Ye=ht(P),Xe=ut(P);if(u&&!ve)return null;const bt=!he.current.has(P.id);return bt&&he.current.add(P.id),l.jsxs("div",{"data-rearrange-section":P.id,className:`${je.ghostOutline} ${ve?je.selected:""} ${k||a||Se.has(P.id)?je.exiting:""}`,style:{left:te.x,top:Q,width:te.width,height:te.height,...zt?{}:{opacity:0,animation:"none",transition:"none"},...bt?{}:{animation:"none"}},onMouseDown:Ve=>ie(Ve,P.id),onDoubleClick:()=>K(P.id),children:[l.jsx("span",{className:je.sectionLabel,style:{backgroundColor:zy.pill},children:P.label}),l.jsx("span",{className:`${je.sectionAnnotation} ${P.note?je.annotationVisible:""}`,children:(P.note&&ee.current.set(P.id,P.note),P.note||ee.current.get(P.id)||"")}),l.jsxs("span",{className:je.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:je.deleteButton,onMouseDown:Ve=>Ve.stopPropagation(),onClick:()=>Ze(P.id),children:"✕"}),$y.map(Ve=>l.jsx("div",{className:`${je.handle} ${je[`handle${Ve.charAt(0).toUpperCase()}${Ve.slice(1)}`]}`,onMouseDown:Dt=>He(Dt,P.id,Ve)},Ve)),l.jsx("span",{className:je.ghostBadge,children:(()=>{const Ve=Ee.current.get(P.id);if(Ye&&Xe){const[Dt,pt]=Ve==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Dt," ",l.jsxs("span",{className:je.ghostBadgeExtra,children:["& ",pt]})]})}return`Suggested ${Xe?"Resize":"Move"}`})()})]},P.id)})]}),!u&&(()=>{const P=[];for(const te of Je){const Q=Ue.get(te.id);P.push({id:te.id,orig:te.originalRect,target:Q||te.currentRect,isFixed:te.isFixed,isSelected:S.has(te.id),isExiting:Se.has(te.id)})}for(const[te,Q]of Ue)if(!P.some(ve=>ve.id===te)){const ve=b.find(Ye=>Ye.id===te);ve&&P.push({id:te,orig:ve.originalRect,target:Q,isFixed:ve.isFixed,isSelected:S.has(te)})}for(const[te,Q]of mt)P.some(ve=>ve.id===te)||P.push({id:te,orig:Q.orig,target:Q.target,isFixed:Q.isFixed,isSelected:!1,isExiting:!0});return P.length===0?null:l.jsxs("svg",{className:`${je.connectorSvg} ${k||a?je.connectorExiting:""}`,children:[P.map(({id:te,orig:Q,target:ve,isFixed:Ye,isSelected:Xe,isExiting:Te})=>{const bt=Q.x+Q.width/2,Ve=(Ye?Q.y:Q.y-D)+Q.height/2,Dt=ve.x+ve.width/2,pt=(Ye?ve.y:ve.y-D)+ve.height/2,We=Dt-bt,vt=pt-Ve,Pt=Math.sqrt(We*We+vt*vt);if(Pt<2)return null;const Kt=Math.min(1,Pt/40),Ke=Math.min(Pt*.3,60),yt=Pt>0?-vt/Pt:0,_t=Pt>0?We/Pt:0,$t=(bt+Dt)/2+yt*Ke,cn=(Ve+pt)/2+_t*Ke,xt=Ue.has(te),Xt=xt||Xe?1:.4,On=xt||Xe?1:.5;return l.jsxs("g",{className:Te?je.connectorExiting:"",children:[l.jsx("path",{className:je.connectorLine,d:`M ${bt} ${Ve} Q ${$t} ${cn} ${Dt} ${pt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Xt*Kt}),l.jsx("circle",{className:je.connectorDot,cx:bt,cy:Ve,r:4*Kt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:On*Kt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:je.connectorDot,cx:Dt,cy:pt,r:4*Kt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:On*Kt,filter:"url(#connDotShadow)"})]},`conn-${te}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),E&&(()=>{var pt;const P=b.find(We=>We.id===E);if(!P)return null;const te=P.currentRect,Q=P.isFixed?te.y:te.y-D,ve=te.x+te.width/2,Ye=Q-8,Xe=Q+te.height+8,Te=Ye>200,bt=Xe<window.innerHeight-100,Ve=Math.max(160,Math.min(window.innerWidth-160,ve));let Dt;return Te?Dt={left:Ve,bottom:window.innerHeight-Ye}:bt?Dt={left:Ve,top:Xe}:Dt={left:Ve,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:P.label,placeholder:"Add a note about this section",initialValue:(pt=P.note)!=null?pt:"",submitLabel:H.current?"Save":"Set",onSubmit:re,onCancel:ae,onDelete:H.current?()=>{re("")}:void 0,isExiting:F,lightMode:!i,style:Dt})})(),ne&&l.jsx("div",{className:je.sizeIndicator,style:{left:ne.x,top:ne.y},"data-feedback-toolbar":!0,children:ne.text}),q.map((P,te)=>l.jsx("div",{className:je.guideLine,style:P.axis==="x"?{position:"fixed",left:P.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:P.pos-D,width:"100vw",height:1}},`${P.axis}-${P.pos}-${te}`))]})}var Rm=new Set(["script","style","noscript","link","meta","br","hr"]);function $4(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Rm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:jd(c),selector:Cr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Rm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:jd(h),selector:Cr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function I4(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function P4(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Bm(t,n){const i=n?I4(n):$4(),a=P4(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const j=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(j&&S.bottom<=a.top+5){const M=Math.round(a.top-S.bottom);(!c||M<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(j&&S.top>=a.bottom-5){const M=Math.round(S.top-a.bottom);(!u||M<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.right<=a.left+5){const M=Math.round(a.left-S.right);(!d||M<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.left>=a.right-5){const M=Math.round(S.left-a.right);(!h||M<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}}const g=window.innerWidth,_=window.innerHeight,x=U4(t,g),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=H4(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function H4(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function U4(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function Xx(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function qx(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=Xx(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function V4(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(Xx(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Uy=15;function Vy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Uy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Uy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function Y4(t){var d;if(t.length<2)return[];const n=Vy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Vy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(w=>p.has(w)),b=x.join(", ");if(g.type!==h.type){const w=h.type==="row"?"y":"x",S=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${S}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${g.sharedEdge}`:"",j=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${j}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function Gx(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Rm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Cr(h)}}}return{viewport:t,contentArea:null}}function W4(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Cr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function Kx(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function Qx(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function F4(t){const n=W4(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Yy(t,n,i,a="standard"){var k,M,z,N;if(t.length===0)return"";const c=[...t].sort((E,$)=>Math.abs(E.y-$.y)<20?E.x-$.x:E.y-$.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((E,$)=>{var W;const F=((W=Hi[E.type])==null?void 0:W.label)||E.type;u+=`${$+1}. **${F}** — \`${Math.round(E.width)}×${Math.round(E.height)}px\` at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`}),u;const d=Gx(n);u+=Qx(d),u+=`### Components
`,c.forEach((E,$)=>{var Se;const F=((Se=Hi[E.type])==null?void 0:Se.label)||E.type,W={x:E.x,y:E.y,width:E.width,height:E.height};u+=`${$+1}. **${F}** — \`${Math.round(E.width)}×${Math.round(E.height)}px\` at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`;const H=Bm(W),ae=qx(H,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ne of ae)u+=`   - ${Ne}
`;const re=Kx(W,d);re&&(u+=`   - CSS: ${re}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const E of c){const $=h.find(F=>Math.abs(F.y-E.y)<30);$?$.items.push(E):h.push({y:E.y,items:[E]})}if(h.sort((E,$)=>E.y-$.y),h.forEach((E,$)=>{E.items.sort((W,H)=>W.x-H.x);const F=E.items.map(W=>{var H;return((H=Hi[W.type])==null?void 0:H.label)||W.type});if(E.items.length===1){const H=E.items[0].width>n.width*.8;u+=`- Row ${$+1} (y≈${Math.round(E.y)}): ${F[0]}${H?" — full width":""}
`}else u+=`- Row ${$+1} (y≈${Math.round(E.y)}): ${F.join(" | ")} — ${E.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let E=0;E<c.length-1;E++){const $=c[E],F=c[E+1],W=((k=Hi[$.type])==null?void 0:k.label)||$.type,H=((M=Hi[F.type])==null?void 0:M.label)||F.type,K=Math.round(F.y-($.y+$.height)),ae=Math.round(F.x-($.x+$.width));Math.abs($.y-F.y)<30?u+=`- ${W} → ${H}: \`${ae}px\` horizontal gap
`:u+=`- ${W} → ${H}: \`${K}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let E=0;E<c.length;E++)for(let $=E+1;$<c.length;$++){const F=c[E],W=c[$],H=((z=Hi[F.type])==null?void 0:z.label)||F.type,K=((N=Hi[W.type])==null?void 0:N.label)||W.type,ae=Math.round(W.y-(F.y+F.height)),re=Math.round(W.x-(F.x+F.width));u+=`- ${H} ↔ ${K}: h=\`${re}px\` v=\`${ae}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((E,$)=>{var W;const F=((W=Hi[E.type])==null?void 0:W.label)||E.type;u+=`${$}. ${F} at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(E=>E.type==="navigation"),g=c.some(E=>E.type==="hero"),_=c.some(E=>E.type==="sidebar"),x=c.some(E=>E.type==="footer"),b=c.filter(E=>E.type==="card"),w=c.filter(E=>E.type==="form"),S=c.filter(E=>E.type==="table"),j=c.filter(E=>E.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
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
`,_){const E=c.find($=>$.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(E.width)}px 1fr;\`
`}if(b.length>1){const E=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${E}px); gap: 16px;\`
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
`,x){const k=Bm(w,g("original")),M=Bm(S,g("current")),z=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${V4(k,{x:w.x,y:w.y},z)}
`;const N=b?{width:S.width,height:S.height}:void 0,E=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,$=N?`, ${Math.round(N.width)}×${Math.round(N.height)}px`:"",W=qx(M,{includeLeftRight:n==="detailed"||n==="forensic"});if(W.length>0){u+=`  - Suggested position ${E}${$}: ${W[0]}
`;for(let K=1;K<W.length;K++)u+=`    ${W[K]}
`}else u+=`  - Suggested position ${E}${$}
`;const H=Kx(S,p);H&&(u+=`  - CSS: ${H}
`)}const j=F4(_.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const k=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;k!==_.selector&&(u+=`  - Element: \`${k}\`
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
`}}return u}var Lm="feedback-annotations-",Zx=7;function Md(t){return`${Lm}${t}`}function Jh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Md(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-Zx*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function Jx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Md(t),JSON.stringify(n))}catch{}}function X4(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Zx*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Lm)){const c=a.slice(Lm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function ic(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));Jx(t,a)}var fp="agentation-design-";function q4(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${fp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function G4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${fp}${t}`,JSON.stringify(n))}catch{}}function K4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${fp}${t}`)}catch{}}var hp="agentation-rearrange-";function Q4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Z4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function J4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-wireframe-";function e6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Fy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function Ju(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var eb="agentation-session-";function pp(t){return`${eb}${t}`}function t6(t){if(typeof window>"u")return null;try{return localStorage.getItem(pp(t))}catch{return null}}function em(t,n){if(!(typeof window>"u"))try{localStorage.setItem(pp(t),n)}catch{}}function n6(t){if(!(typeof window>"u"))try{localStorage.removeItem(pp(t))}catch{}}var tb=`${eb}toolbar-hidden`;function s6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(tb)==="1"}catch{return!1}}function o6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(tb,"1")}catch{}}async function tm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Xy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function sl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function qy(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Wa(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Ln={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Gy=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Ky=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],i6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function a6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Gy;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Gy,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Ky,...t.skipPatterns]:Ky,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:i6,filter:t==null?void 0:t.filter}}function r6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function l6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function c6(t,n){const i=r6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function u6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&c6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ol=null,d6=new WeakMap;function nm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function f6(){if(ol!==null)return ol;if(typeof document>"u")return!1;if(document.body&&nm(document.body))return ol=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&nm(i))return ol=!0,!0}if(document.body){for(const n of document.body.children)if(nm(n))return ol=!0,!0}return ol=!1,!1}var ac={map:d6};function h6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function m6(t){const n=h6(t);return n?t[n]:null}function fr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function p6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===Ln.HostComponent||n===Ln.HostText||n===Ln.HostHoistable||n===Ln.HostSingleton||n===Ln.Fragment||n===Ln.Mode||n===Ln.Profiler||n===Ln.DehydratedFragment||n===Ln.HostRoot||n===Ln.HostPortal||n===Ln.ScopeComponent||n===Ln.OffscreenComponent||n===Ln.LegacyHiddenComponent||n===Ln.CacheComponent||n===Ln.TracingMarkerComponent||n===Ln.Throw||n===Ln.ViewTransitionComponent||n===Ln.ActivityComponent)return null;if(n===Ln.ForwardRef){const u=a;if(u!=null&&u.render){const d=fr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:fr(i)}if(n===Ln.MemoComponent||n===Ln.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=fr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:fr(i)}if(n===Ln.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Ln.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Ln.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?fr(u._result):null}return n===Ln.SuspenseComponent||n===Ln.SuspenseListComponent?null:n===Ln.IncompleteClassComponent||n===Ln.IncompleteFunctionComponent||n===Ln.FunctionComponent||n===Ln.ClassComponent||n===Ln.IndeterminateComponent?fr(i):null}function _6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function g6(t,n){const i=a6(n),a=i.mode==="all";if(a){const p=ac.map.get(t);if(p!==void 0)return p}if(!f6()){const p={path:null,components:[]};return a&&ac.map.set(t,p),p}const c=i.mode==="smart"?l6(t):void 0,u=[];try{let p=m6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=p6(p);_&&!_6(_)&&u6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&ac.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&ac.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&ac.map.set(t,h),h}var rc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function y6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Sc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function x6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Sc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Sc(i._debugOwner)};i=i.return,a++}return null}function b6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Sc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Sc(n)}}}n=n.return,i++}return null}var ed=new Map;function v6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===rc.FunctionComponent||n===rc.IndeterminateComponent)&&typeof i=="function")return i;if(n===rc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===rc.MemoComponent||n===rc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function w6(){const t=Av,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function S6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function C6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function k6(t){const n=v6(t);if(!n)return null;if(ed.has(n))return ed.get(n);const i=w6();if(!i)return ed.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=S6(d.stack);h&&(c={fileName:C6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Sc(t)||void 0})}}}finally{i.set(a)}return ed.set(n,c),c}function j6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=k6(i);if(c)return c;i=i.return,a++}return null}function Om(t){const n=y6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=x6(n);if(i||(i=b6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=j6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function M6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function T6(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Om(i);if(c.found)return c;i=i.parentElement,a++}return Om(t)}var E6=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,A6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=E6}var $e=A6,lc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Qy(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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
}`,N6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=D6}var Hs=N6;function Zy({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:j,onContextMenu:k}){const M=(h||p)&&!g,z=M&&x==="delete",N=t.isMultiSelect,E=N?"var(--agentation-color-green)":"var(--agentation-color-accent)",$=c?Hs.exit:u?Hs.clearing:d?"":Hs.enter,F=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Hs.marker} ${N?Hs.multiSelect:""} ${$} ${z?Hs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:z?void 0:E,animationDelay:F},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:W=>{W.stopPropagation(),c||j(t)},onContextMenu:k?W=>{x==="delete"&&(W.preventDefault(),W.stopPropagation(),c||k(t))}:void 0,children:[M?z?l.jsx(Px,{size:N?18:16}):l.jsx(Ww,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Hs.renumber:void 0,children:n+1}),h&&!g&&l.jsxs("div",{className:`${Hs.markerTooltip} ${Hs.enter}`,style:b,children:[l.jsxs("span",{className:Hs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Hs.markerNote,children:t.comment})]})]})}function R6({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Hs.marker} ${Hs.pending} ${i?Hs.multiSelect:""} ${a?Hs.exit:Hs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(Rw,{size:12})})}function Jy({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Hs.marker} ${n?Hs.fixed:""} ${Hs.hovered} ${i?Hs.multiSelect:""} ${Hs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Px,{size:i?12:10})})}var B6=`.styles-module__switchContainer___Ka-AB {
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
}`,P6={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=I6}var e1=P6,t1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${e1.container} ${t}`,...u,children:[l.jsx($6,{id:d,onChange:c,checked:a}),l.jsx("label",{className:e1.label,htmlFor:d,children:n}),i&&l.jsx(xr,{content:i})]})},H6=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,U6={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=H6}var Tt=U6;function V6({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Tt.settingsPanel} ${h?Tt.enter:Tt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Tt.settingsPanelContainer,children:[l.jsxs("div",{className:`${Tt.settingsPage} ${g==="automations"?Tt.slideLeft:""}`,children:[l.jsxs("div",{className:Tt.settingsHeader,children:[l.jsx("a",{className:Tt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Tt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Tt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Tt.themeIconWrapper,children:l.jsx("span",{className:Tt.themeIcon,children:i?l.jsx(Vw,{size:20}):l.jsx(Yw,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsxs("div",{className:Tt.settingsRow,children:[l.jsxs("div",{className:Tt.settingsLabel,children:["Output Detail",l.jsx(xr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Tt.cycleButton,onClick:()=>{const S=(lc.findIndex(j=>j.value===t.outputDetail)+1)%lc.length;n({outputDetail:lc[S].value})},children:[l.jsx("span",{className:Tt.cycleButtonText,children:(b=lc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:Tt.cycleDots,children:lc.map(w=>l.jsx("span",{className:`${Tt.cycleDot} ${t.outputDetail===w.value?Tt.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${Tt.settingsRow} ${Tt.settingsRowMarginTop} ${c?"":Tt.settingsRowDisabled}`,children:[l.jsxs("div",{className:Tt.settingsLabel,children:["React Components",l.jsx(xr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(om,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Tt.settingsRow} ${Tt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Tt.settingsLabel,children:["Hide Until Restart",l.jsx(xr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(om,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsx("div",{className:`${Tt.settingsLabel} ${Tt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Tt.colorOptions,children:gc.map(w=>l.jsx("button",{className:`${Tt.colorOption} ${t.annotationColorId===w.id?Tt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsx(t1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(t1,{className:Tt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("button",{className:Tt.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Tt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Tt.mcpNavIndicator} ${Tt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Tt.settingsPage} ${Tt.automationsPage} ${g==="automations"?Tt.slideIn:""}`,children:[l.jsxs("button",{className:Tt.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(Xw,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:Tt.settingsSection,children:[l.jsxs("div",{className:Tt.settingsRow,children:[l.jsxs("span",{className:Tt.automationHeader,children:["MCP Connection",l.jsx(xr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Tt.mcpStatusDot} ${Tt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Tt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Tt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Tt.divider}),l.jsxs("div",{className:`${Tt.settingsSection} ${Tt.settingsSectionGrow}`,children:[l.jsxs("div",{className:Tt.settingsRow,children:[l.jsxs("span",{className:Tt.automationHeader,children:["Webhooks",l.jsx(xr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Tt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Tt.autoSendLabel} ${t.webhooksEnabled?Tt.active:""} ${t.webhookUrl?"":Tt.disabled}`,children:"Auto-Send"}),l.jsx(om,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:Tt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Tt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function im(t,n="filtered"){const{name:i,path:a}=ul(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=g6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var n1=!1,am={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Gi=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},gc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],Y6=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...gc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${gc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${gc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};Y6();function hr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function rm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function mr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function nd(t){const n=Om(t),i=n.found?n:T6(t);if(i.found&&i.source)return M6(i.source,"path")}function W6({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var Qo,Oc,xl,bl,va,wa,zc;const[j,k]=y.useState(!1),[M,z]=y.useState([]),[N,E]=y.useState(!0),[$,F]=y.useState(()=>s6()),[W,H]=y.useState(!1),K=y.useRef(null);y.useEffect(()=>{const A=G=>{const V=K.current;V&&V.contains(G.target)&&G.stopPropagation()},O=["mousedown","click","pointerdown"];return O.forEach(G=>document.body.addEventListener(G,A)),()=>{O.forEach(G=>document.body.removeEventListener(G,A))}},[]);const[ae,re]=y.useState(!1),[Se,Ne]=y.useState(!1),[ee,fe]=y.useState(null),[L,ne]=y.useState({x:0,y:0}),[U,q]=y.useState(null),[ge,D]=y.useState(!1),[ce,Z]=y.useState("idle"),[he,Ee]=y.useState(!1),[Ue,Me]=y.useState(!1),[mt,et]=y.useState(null),[ze,ct]=y.useState(null),[it,Mt]=y.useState([]),[Ct,zt]=y.useState(null),[Zt,Oe]=y.useState(null),[ie,He]=y.useState(null),[Ze,Ie]=y.useState(null),[ht,ut]=y.useState([]),[dt,Je]=y.useState(0),[rt,Vt]=y.useState(!1),[tt,P]=y.useState(!1),[te,Q]=y.useState(!1),[ve,Ye]=y.useState(!1),[Xe,Te]=y.useState(!1),[bt,Ve]=y.useState("main"),[Dt,pt]=y.useState(!1),[We,vt]=y.useState(!1),[Pt,Kt]=y.useState(!1),[Ke,yt]=y.useState([]),[_t,$t]=y.useState(null),cn=y.useRef(!1),[xt,Xt]=y.useState(!1),[On,is]=y.useState(!1),[xn,io]=y.useState(1),[as,ss]=y.useState("new-page"),[Qt,Tn]=y.useState(""),[tn,bn]=y.useState(!1),[nt,En]=y.useState(null),ko=y.useRef(!1),ao=y.useRef({rearrange:null,placements:[]}),$n=y.useRef({rearrange:null,placements:[]}),[Rs,ro]=y.useState(0),[lo,bs]=y.useState(0),[gs,vs]=y.useState(0),[an,ii]=y.useState(0),Bo=y.useRef(new Set),Js=y.useRef(new Set),qn=y.useRef(null),co=y.useRef(),Lo=We&&j&&!Pt&&xt;y.useEffect(()=>{if(Lo){is(!1);const A=al(()=>{is(!0)});return()=>cancelAnimationFrame(A)}else is(!1)},[Lo]);const Oo=y.useRef(new Map),qo=y.useRef(new Map),po=y.useRef(),[ws,Bs]=y.useState(!1),[kn,_i]=y.useState([]),rs=y.useRef(kn);rs.current=kn;const[ai,Vs]=y.useState(null),zo=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[jo,Ss]=y.useState(!1),Ys=y.useRef(null),[vn,_o]=y.useState([]),ls=y.useRef({cmd:!1,shift:!1}),Gn=()=>{pt(!0)},gi=()=>{pt(!1)},Mo=()=>{jo||(Ys.current=Ut(()=>Ss(!0),850))},Go=()=>{Ys.current&&(clearTimeout(Ys.current),Ys.current=null),Ss(!1),gi()};y.useEffect(()=>()=>{Ys.current&&clearTimeout(Ys.current)},[]);const[qt,Di]=y.useState(()=>{var A;try{const O=JSON.parse((A=localStorage.getItem("feedback-toolbar-settings"))!=null?A:"");return{...am,...O,annotationColorId:gc.find(G=>G.id===O.annotationColorId)?O.annotationColorId:am.annotationColorId}}catch{return am}}),[Ls,Ko]=y.useState(!0),[$o,Io]=y.useState(!1),Os=()=>{var A;(A=K.current)==null||A.classList.add($e.disableTransitions),Ko(O=>!O),al(()=>{var O;(O=K.current)==null||O.classList.remove($e.disableTransitions)})},To=!1,js="off",[jn,uo]=y.useState(x!=null?x:null),Kn=y.useRef(!1),[ys,Qn]=y.useState(_?"connecting":"disconnected"),[nn,Ws]=y.useState(null),[Fs,Cs]=y.useState(!1),[Zn,Eo]=y.useState(null),Ms=y.useRef(!1),[go,Ts]=y.useState(new Set),[Es,fo]=y.useState(new Set),[Rn,I]=y.useState(!1),[se,le]=y.useState(!1),[_e,C]=y.useState(!1),R=y.useRef(null),X=y.useRef(null),ue=y.useRef(null),Ae=y.useRef(null),Pe=y.useRef(!1),Nt=y.useRef(0),ft=y.useRef(null),Ge=y.useRef(null),at=8,Rt=50,Yt=y.useRef(null),fn=y.useRef(null),rn=y.useRef(null),Qe=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(ve)Te(!0);else{pt(!1),Ve("main");const A=Ut(()=>Te(!1),0);return()=>clearTimeout(A)}},[ve]);const wn=j&&N&&!We;y.useEffect(()=>{if(wn){Ne(!1),re(!0),Ts(new Set);const A=Ut(()=>{Ts(O=>{const G=new Set(O);return M.forEach(V=>G.add(V.id)),G})},350);return()=>clearTimeout(A)}else if(ae){Ne(!0);const A=Ut(()=>{re(!1),Ne(!1)},250);return()=>clearTimeout(A)}},[wn]),y.useEffect(()=>{P(!0),Je(window.scrollY);const A=Jh(Qe);z(A.filter(mr)),n1||(Io(!0),n1=!0,Ut(()=>Io(!1),750));try{const O=localStorage.getItem("feedback-toolbar-theme");O!==null&&Ko(O==="dark")}catch{}try{const O=localStorage.getItem("feedback-toolbar-position");if(O){const G=JSON.parse(O);typeof G.x=="number"&&typeof G.y=="number"&&Ws(G)}}catch{}},[Qe]),y.useEffect(()=>{tt&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(qt))},[qt,tt]),y.useEffect(()=>{tt&&localStorage.setItem("feedback-toolbar-theme",Ls?"dark":"light")},[Ls,tt]);const zs=y.useRef(!1);y.useEffect(()=>{const A=zs.current;zs.current=Fs,A&&!Fs&&nn&&tt&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(nn))},[Fs,nn,tt]),y.useEffect(()=>{if(!_||!tt||Kn.current)return;Kn.current=!0,Qn("connecting"),(async()=>{try{const O=t6(Qe),G=x||O;let V=!1;if(G)try{const oe=await Xy(_,G);uo(oe.id),Qn("connected"),em(Qe,oe.id),V=!0;const xe=Jh(Qe),Fe=new Set(oe.annotations.map(ot=>ot.id)),qe=xe.filter(ot=>!Fe.has(ot.id));if(qe.length>0){const kt=`${typeof window<"u"?window.location.origin:""}${Qe}`,Jt=(await Promise.allSettled(qe.map(jt=>sl(_,oe.id,{...jt,sessionId:oe.id,url:kt})))).map((jt,gt)=>jt.status==="fulfilled"?jt.value:(console.warn("[Agentation] Failed to sync annotation:",jt.reason),qe[gt])),en=[...oe.annotations,...Jt];z(en.filter(mr)),ic(Qe,en.filter(mr),oe.id)}else z(oe.annotations.filter(mr)),ic(Qe,oe.annotations.filter(mr),oe.id)}catch(oe){console.warn("[Agentation] Could not join session, creating new:",oe),n6(Qe)}if(!V){const oe=typeof window<"u"?window.location.href:"/",xe=await tm(_,oe);uo(xe.id),Qn("connected"),em(Qe,xe.id),b==null||b(xe.id);const Fe=X4(),qe=typeof window<"u"?window.location.origin:"",ot=[];for(const[kt,Ot]of Fe){const Jt=Ot.filter(gt=>!gt._syncedTo);if(Jt.length===0)continue;const en=`${qe}${kt}`,jt=kt===Qe;ot.push((async()=>{try{const gt=jt?xe:await tm(_,en),fs=(await Promise.allSettled(Jt.map(Cn=>sl(_,gt.id,{...Cn,sessionId:gt.id,url:en})))).map((Cn,zn)=>Cn.status==="fulfilled"?Cn.value:(console.warn("[Agentation] Failed to sync annotation:",Cn.reason),Jt[zn])).filter(mr);if(ic(kt,fs,gt.id),jt){const Cn=new Set(Jt.map(zn=>zn.id));z(zn=>{const Ft=zn.filter(Gt=>!Cn.has(Gt.id));return[...fs,...Ft]})}}catch(gt){console.warn(`[Agentation] Failed to sync annotations for ${kt}:`,gt)}})())}await Promise.allSettled(ot)}}catch(O){Qn("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",O)}})()},[_,x,tt,b,Qe]),y.useEffect(()=>{if(!_||!tt)return;const A=async()=>{try{(await fetch(`${_}/health`)).ok?Qn("connected"):Qn("disconnected")}catch{Qn("disconnected")}};A();const O=Kw(A,1e4);return()=>clearInterval(O)},[_,tt]),y.useEffect(()=>{if(!_||!tt||!jn)return;const A=new EventSource(`${_}/sessions/${jn}/events`),O=["resolved","dismissed"],G=V=>{var oe;try{const xe=JSON.parse(V.data);if(O.includes((oe=xe.payload)==null?void 0:oe.status)){const Fe=xe.payload.id,qe=xe.payload.kind;if(qe==="placement"){for(const[ot,kt]of Oo.current)if(kt===Fe){Oo.current.delete(ot),yt(Ot=>Ot.filter(Jt=>Jt.id!==ot));break}}else if(qe==="rearrange"){for(const[ot,kt]of qo.current)if(kt===Fe){qo.current.delete(ot),En(Ot=>{if(!Ot)return null;const Jt=Ot.sections.filter(en=>en.id!==ot);return Jt.length===0?null:{...Ot,sections:Jt}});break}}else fo(ot=>new Set(ot).add(Fe)),Ut(()=>{z(ot=>ot.filter(kt=>kt.id!==Fe)),fo(ot=>{const kt=new Set(ot);return kt.delete(Fe),kt})},150)}}catch{}};return A.addEventListener("annotation.updated",G),()=>{A.removeEventListener("annotation.updated",G),A.close()}},[_,tt,jn]),y.useEffect(()=>{if(!_||!tt)return;const A=Ge.current==="disconnected",O=ys==="connected";Ge.current=ys,A&&O&&(async()=>{try{const V=Jh(Qe);if(V.length===0)return;const xe=`${typeof window<"u"?window.location.origin:""}${Qe}`;let Fe=jn,qe=[];if(Fe)try{qe=(await Xy(_,Fe)).annotations}catch{Fe=null}Fe||(Fe=(await tm(_,xe)).id,uo(Fe),em(Qe,Fe));const ot=new Set(qe.map(Ot=>Ot.id)),kt=V.filter(Ot=>!ot.has(Ot.id));if(kt.length>0){const Jt=(await Promise.allSettled(kt.map(gt=>sl(_,Fe,{...gt,sessionId:Fe,url:xe})))).map((gt,us)=>gt.status==="fulfilled"?gt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",gt.reason),kt[us])),jt=[...qe,...Jt].filter(mr);z(jt),ic(Qe,jt,Fe)}}catch(V){console.warn("[Agentation] Failed to sync on reconnect:",V)}})()},[ys,_,tt,jn,Qe]);const Ao=y.useCallback(()=>{W||(H(!0),Ye(!1),k(!1),Ut(()=>{o6(!0),F(!0),H(!1)},400))},[W]);y.useEffect(()=>{if(!i||!tt||!t||t.length===0||M.length>0)return;const A=[];return A.push(Ut(()=>{k(!0)},n-200)),t.forEach((O,G)=>{const V=n+G*300;A.push(Ut(()=>{const oe=document.querySelector(O.selector);if(!oe)return;const xe=oe.getBoundingClientRect(),{name:Fe,path:qe}=ul(oe),ot={id:`demo-${Date.now()}-${G}`,x:(xe.left+xe.width/2)/window.innerWidth*100,y:xe.top+xe.height/2+window.scrollY,comment:O.comment,element:Fe,elementPath:qe,timestamp:Date.now(),selectedText:O.selectedText,boundingBox:{x:xe.left,y:xe.top+window.scrollY,width:xe.width,height:xe.height},nearbyText:sc(oe),cssClasses:oc(oe)};z(kt=>[...kt,ot])},V))}),()=>{A.forEach(clearTimeout)}},[i,tt,t,n]),y.useEffect(()=>{const A=()=>{Je(window.scrollY),Vt(!0),rn.current&&clearTimeout(rn.current),rn.current=Ut(()=>{Vt(!1)},150)};return window.addEventListener("scroll",A,{passive:!0}),()=>{window.removeEventListener("scroll",A),rn.current&&clearTimeout(rn.current)}},[]),y.useEffect(()=>{tt&&M.length>0?jn?ic(Qe,M,jn):Jx(Qe,M):tt&&M.length===0&&localStorage.removeItem(Md(Qe))},[M,Qe,tt,jn]),y.useEffect(()=>{if(tt&&!cn.current){cn.current=!0;const A=q4(Qe);A.length>0&&yt(A)}},[tt,Qe]),y.useEffect(()=>{tt&&cn.current&&!xt&&(Ke.length>0?G4(Qe,Ke):K4(Qe))},[Ke,Qe,tt,xt]),y.useEffect(()=>{if(tt&&!ko.current){ko.current=!0;const A=Q4(Qe);if(A){const O={...A,sections:A.sections.map(G=>{var V;return{...G,currentRect:(V=G.currentRect)!=null?V:{...G.originalRect}}})};En(O)}}},[tt,Qe]),y.useEffect(()=>{tt&&ko.current&&!xt&&(nt?Z4(Qe,nt):J4(Qe))},[nt,Qe,tt,xt]);const yo=y.useRef(!1);y.useEffect(()=>{if(tt&&!yo.current){yo.current=!0;const A=e6(Qe);A&&($n.current={rearrange:A.rearrange,placements:A.placements||[]},A.purpose&&Tn(A.purpose))}},[tt,Qe]),y.useEffect(()=>{var O,G,V,oe,xe;if(!tt||!yo.current)return;const A=$n.current;xt?((G=(O=nt==null?void 0:nt.sections)==null?void 0:O.length)!=null?G:0)>0||Ke.length>0||Qt?Fy(Qe,{rearrange:nt,placements:Ke,purpose:Qt}):Ju(Qe):((xe=(oe=(V=A.rearrange)==null?void 0:V.sections)==null?void 0:oe.length)!=null?xe:0)>0||A.placements.length>0||Qt?Fy(Qe,{rearrange:A.rearrange,placements:A.placements,purpose:Qt}):Ju(Qe)},[nt,Ke,Qt,xt,Qe,tt]),y.useEffect(()=>{We&&!nt&&En({sections:[],originalOrder:[],detectedAt:Date.now()})},[We,nt]),y.useEffect(()=>{if(!_||!jn)return;const A=Oo.current,O=new Set(Ke.map(G=>G.id));for(const G of Ke){if(A.has(G.id))continue;A.set(G.id,"");const V=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Qe;sl(_,jn,{id:G.id,x:G.x/window.innerWidth*100,y:G.y,comment:`Place ${G.type} at (${Math.round(G.x)}, ${Math.round(G.y)}), ${G.width}×${G.height}px${G.text?` — "${G.text}"`:""}`,element:`[design:${G.type}]`,elementPath:"[placement]",timestamp:G.timestamp,url:V,intent:"change",severity:"important",kind:"placement",placement:{componentType:G.type,width:G.width,height:G.height,scrollY:G.scrollY,text:G.text}}).then(oe=>{A.has(G.id)&&A.set(G.id,oe.id)}).catch(oe=>{console.warn("[Agentation] Failed to sync placement annotation:",oe),A.delete(G.id)})}for(const[G,V]of A)O.has(G)||(A.delete(G),V&&Wa(_,V).catch(()=>{}))},[Ke,_,jn,Qe]),y.useEffect(()=>{if(!(!_||!jn))return po.current&&clearTimeout(po.current),po.current=Ut(()=>{const A=qo.current;if(!nt||nt.sections.length===0){for(const[,V]of A)V&&Wa(_,V).catch(()=>{});A.clear();return}const O=new Set(nt.sections.map(V=>V.id)),G=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Qe;for(const V of nt.sections){const oe=V.originalRect,xe=V.currentRect;if(!(Math.abs(oe.x-xe.x)>1||Math.abs(oe.y-xe.y)>1||Math.abs(oe.width-xe.width)>1||Math.abs(oe.height-xe.height)>1)){const ot=A.get(V.id);ot&&(A.delete(V.id),Wa(_,ot).catch(()=>{}));continue}const qe=A.get(V.id);qe?qy(_,qe,{comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)} to (${Math.round(xe.x)},${Math.round(xe.y)}) ${Math.round(xe.width)}×${Math.round(xe.height)}`}).catch(ot=>{console.warn("[Agentation] Failed to update rearrange annotation:",ot)}):(A.set(V.id,""),sl(_,jn,{id:V.id,x:xe.x/window.innerWidth*100,y:xe.y,comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)} to (${Math.round(xe.x)},${Math.round(xe.y)}) ${Math.round(xe.width)}×${Math.round(xe.height)}`,element:V.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:G,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:V.selector,label:V.label,tagName:V.tagName,originalRect:oe,currentRect:xe}}).then(ot=>{A.has(V.id)&&A.set(V.id,ot.id)}).catch(ot=>{console.warn("[Agentation] Failed to sync rearrange annotation:",ot),A.delete(V.id)}))}for(const[V,oe]of A)O.has(V)||(A.delete(V),oe&&Wa(_,oe).catch(()=>{}))},300),()=>{po.current&&clearTimeout(po.current)}},[nt,_,jn,Qe]);const eo=y.useRef(new Map);y.useLayoutEffect(()=>{var G;const A=(G=nt==null?void 0:nt.sections)!=null?G:[],O=new Set;if((We||Pt)&&j)for(const V of A){O.add(V.id);try{const oe=document.querySelector(V.selector);if(!oe)continue;if(!eo.current.has(V.id)){const xe={transform:oe.style.transform,transformOrigin:oe.style.transformOrigin,opacity:oe.style.opacity,position:oe.style.position,zIndex:oe.style.zIndex,display:oe.style.display},Fe=[];let qe=oe.parentElement;for(;qe&&qe!==document.body;){const kt=getComputedStyle(qe);(kt.overflow!=="visible"||kt.overflowX!=="visible"||kt.overflowY!=="visible")&&(Fe.push({el:qe,overflow:qe.style.overflow}),qe.style.overflow="visible"),qe=qe.parentElement}getComputedStyle(oe).display==="inline"&&(oe.style.display="inline-block"),eo.current.set(V.id,{el:oe,origStyles:xe,ancestors:Fe}),oe.style.transformOrigin="top left",oe.style.zIndex="9999"}}catch{}}for(const[V,oe]of eo.current)if(!O.has(V)){const{el:xe,origStyles:Fe,ancestors:qe}=oe;xe.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",xe.style.transform=Fe.transform,xe.style.transformOrigin=Fe.transformOrigin,xe.style.opacity=Fe.opacity,xe.style.position=Fe.position,xe.style.zIndex=Fe.zIndex,eo.current.delete(V),Ut(()=>{xe.style.transition="",xe.style.display=Fe.display;for(const ot of qe)ot.el.style.overflow=ot.overflow},450)}},[nt,We,Pt,j]),y.useEffect(()=>()=>{for(const[,A]of eo.current){const{el:O,origStyles:G,ancestors:V}=A;O.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",O.style.transform=G.transform,O.style.transformOrigin=G.transformOrigin,O.style.opacity=G.opacity,O.style.position=G.position,O.style.zIndex=G.zIndex,Ut(()=>{O.style.transition="",O.style.display=G.display;for(const oe of V)oe.el.style.overflow=oe.overflow},450)}eo.current.clear()},[]);const Po=y.useCallback(()=>{Kt(!0),vt(!1),$t(null),clearTimeout(co.current),co.current=Ut(()=>{Kt(!1)},300)},[]),ri=y.useCallback(()=>{We&&(Kt(!0),vt(!1),$t(null),clearTimeout(co.current),co.current=Ut(()=>{Kt(!1)},300)),k(!1)},[We]),An=y.useCallback(()=>{te||(Zw(),Q(!0))},[te]),Jn=y.useCallback(()=>{te&&(Ny(),Q(!1))},[te]),to=y.useCallback(()=>{te?Jn():An()},[te,An,Jn]),Vi=y.useCallback(()=>{if(vn.length===0)return;const A=vn[0],O=A.element,G=vn.length>1,V=vn.map(oe=>oe.element.getBoundingClientRect());if(G){const oe={left:Math.min(...V.map(gt=>gt.left)),top:Math.min(...V.map(gt=>gt.top)),right:Math.max(...V.map(gt=>gt.right)),bottom:Math.max(...V.map(gt=>gt.bottom))},xe=vn.slice(0,5).map(gt=>gt.name).join(", "),Fe=vn.length>5?` +${vn.length-5} more`:"",qe=V.map(gt=>({x:gt.left,y:gt.top+window.scrollY,width:gt.width,height:gt.height})),kt=vn[vn.length-1].element,Ot=V[V.length-1],Jt=Ot.left+Ot.width/2,en=Ot.top+Ot.height/2,jt=rm(kt);q({x:Jt/window.innerWidth*100,y:jt?en:en+window.scrollY,clientY:en,element:`${vn.length} elements: ${xe}${Fe}`,elementPath:"multi-select",boundingBox:{x:oe.left,y:oe.top+window.scrollY,width:oe.right-oe.left,height:oe.bottom-oe.top},isMultiSelect:!0,isFixed:jt,elementBoundingBoxes:qe,multiSelectElements:vn.map(gt=>gt.element),targetElement:kt,fullPath:Ku(O),accessibility:Gu(O),computedStyles:qu(O),computedStylesObj:Xu(O),nearbyElements:Fu(O),cssClasses:oc(O),nearbyText:sc(O),sourceFile:nd(O)})}else{const oe=V[0],xe=rm(O);q({x:oe.left/window.innerWidth*100,y:xe?oe.top:oe.top+window.scrollY,clientY:oe.top,element:A.name,elementPath:A.path,boundingBox:{x:oe.left,y:xe?oe.top:oe.top+window.scrollY,width:oe.width,height:oe.height},isFixed:xe,fullPath:Ku(O),accessibility:Gu(O),computedStyles:qu(O),computedStylesObj:Xu(O),nearbyElements:Fu(O),cssClasses:oc(O),nearbyText:sc(O),reactComponents:A.reactComponents,sourceFile:nd(O)})}_o([]),fe(null)},[vn]);y.useEffect(()=>{j||(q(null),He(null),Ie(null),ut([]),fe(null),Ye(!1),_o([]),ls.current={cmd:!1,shift:!1},te&&Jn())},[j,te,Jn]),y.useEffect(()=>()=>{Ny()},[]),y.useEffect(()=>{if(!j)return;const A=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),O=":not([data-agentation-root]):not([data-agentation-root] *)",G=document.createElement("style");return G.id="feedback-cursor-styles",G.textContent=`
      body ${O} {
        cursor: crosshair !important;
      }

      body :is(${A})${O} {
        cursor: text !important;
      }
    `,document.head.appendChild(G),()=>{const V=document.getElementById("feedback-cursor-styles");V&&V.remove()}},[j]),y.useEffect(()=>{if(ai!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[ai,j]),y.useEffect(()=>{if(!j||U||ws||We)return;const A=O=>{const G=O.composedPath()[0]||O.target;if(Vo(G,"[data-feedback-toolbar]")){fe(null);return}const V=hr(O.clientX,O.clientY);if(!V||Vo(V,"[data-feedback-toolbar]")){fe(null);return}const{name:oe,elementName:xe,path:Fe,reactComponents:qe}=im(V,js),ot=V.getBoundingClientRect();fe({element:oe,elementName:xe,elementPath:Fe,rect:ot,reactComponents:qe}),ne({x:O.clientX,y:O.clientY})};return document.addEventListener("mousemove",A),()=>document.removeEventListener("mousemove",A)},[j,U,ws,We,js,kn]);const ea=y.useCallback(A=>{var O;if(He(A),et(null),ct(null),Mt([]),(O=A.elementBoundingBoxes)!=null&&O.length){const G=[];for(const V of A.elementBoundingBoxes){const oe=V.x+V.width/2,xe=V.y+V.height/2-window.scrollY,Fe=hr(oe,xe);Fe&&G.push(Fe)}ut(G),Ie(null)}else if(A.boundingBox){const G=A.boundingBox,V=G.x+G.width/2,oe=A.isFixed?G.y+G.height/2:G.y+G.height/2-window.scrollY,xe=hr(V,oe);if(xe){const Fe=xe.getBoundingClientRect(),qe=Fe.width/G.width,ot=Fe.height/G.height;qe<.5||ot<.5?Ie(null):Ie(xe)}else Ie(null);ut([])}else Ie(null),ut([])},[]);y.useEffect(()=>{if(!j||ws||We)return;const A=O=>{var ds,fs;if(Pe.current){Pe.current=!1;return}const G=O.composedPath()[0]||O.target;if(Vo(G,"[data-feedback-toolbar]")||Vo(G,"[data-annotation-popup]")||Vo(G,"[data-annotation-marker]"))return;if(O.metaKey&&O.shiftKey&&!U&&!ie){O.preventDefault(),O.stopPropagation();const Cn=hr(O.clientX,O.clientY);if(!Cn)return;const zn=Cn.getBoundingClientRect(),{name:Ft,path:Gt,reactComponents:hs}=im(Cn,js),Mn=vn.findIndex(no=>no.element===Cn);Mn>=0?_o(no=>no.filter((Do,es)=>es!==Mn)):_o(no=>[...no,{element:Cn,rect:zn,name:Ft,path:Gt,reactComponents:hs!=null?hs:void 0}]);return}const V=Vo(G,"button, a, input, select, textarea, [role='button'], [onclick]");if(qt.blockInteractions&&V&&(O.preventDefault(),O.stopPropagation()),U){if(V&&!qt.blockInteractions)return;O.preventDefault(),(ds=Yt.current)==null||ds.shake();return}if(ie){if(V&&!qt.blockInteractions)return;O.preventDefault(),(fs=fn.current)==null||fs.shake();return}O.preventDefault();const oe=hr(O.clientX,O.clientY);if(!oe)return;const{name:xe,path:Fe,reactComponents:qe}=im(oe,js),ot=oe.getBoundingClientRect(),kt=O.clientX/window.innerWidth*100,Ot=rm(oe),Jt=Ot?O.clientY:O.clientY+window.scrollY,en=window.getSelection();let jt;en&&en.toString().trim().length>0&&(jt=en.toString().trim().slice(0,500));const gt=Xu(oe),us=qu(oe);q({x:kt,y:Jt,clientY:O.clientY,element:xe,elementPath:Fe,selectedText:jt,boundingBox:{x:ot.left,y:Ot?ot.top:ot.top+window.scrollY,width:ot.width,height:ot.height},nearbyText:sc(oe),cssClasses:oc(oe),isFixed:Ot,fullPath:Ku(oe),accessibility:Gu(oe),computedStyles:us,computedStylesObj:gt,nearbyElements:Fu(oe),reactComponents:qe!=null?qe:void 0,sourceFile:nd(oe),targetElement:oe}),fe(null)};return document.addEventListener("click",A,!0),()=>document.removeEventListener("click",A,!0)},[j,ws,We,U,ie,qt.blockInteractions,js,vn]),y.useEffect(()=>{if(!j)return;const A=V=>{V.key==="Meta"&&(ls.current.cmd=!0),V.key==="Shift"&&(ls.current.shift=!0)},O=V=>{const oe=ls.current.cmd&&ls.current.shift;V.key==="Meta"&&(ls.current.cmd=!1),V.key==="Shift"&&(ls.current.shift=!1);const xe=ls.current.cmd&&ls.current.shift;oe&&!xe&&vn.length>0&&Vi()},G=()=>{ls.current={cmd:!1,shift:!1},_o([])};return document.addEventListener("keydown",A),document.addEventListener("keyup",O),window.addEventListener("blur",G),()=>{document.removeEventListener("keydown",A),document.removeEventListener("keyup",O),window.removeEventListener("blur",G)}},[j,vn,Vi]),y.useEffect(()=>{if(!j||U||ws||We)return;const A=O=>{const G=O.composedPath()[0]||O.target;Vo(G,"[data-feedback-toolbar]")||Vo(G,"[data-annotation-marker]")||Vo(G,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(G.tagName)||G.isContentEditable||(O.preventDefault(),R.current={x:O.clientX,y:O.clientY})};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[j,U,ws,We]),y.useEffect(()=>{if(!j||U)return;const A=O=>{if(!R.current)return;const G=O.clientX-R.current.x,V=O.clientY-R.current.y,oe=G*G+V*V,xe=at*at;if(!_e&&oe>=xe&&(X.current=R.current,C(!0),O.preventDefault()),(_e||oe>=xe)&&X.current){if(ue.current){const Ft=Math.min(X.current.x,O.clientX),Gt=Math.min(X.current.y,O.clientY),hs=Math.abs(O.clientX-X.current.x),Mn=Math.abs(O.clientY-X.current.y);ue.current.style.transform=`translate(${Ft}px, ${Gt}px)`,ue.current.style.width=`${hs}px`,ue.current.style.height=`${Mn}px`}const Fe=Date.now();if(Fe-Nt.current<Rt)return;Nt.current=Fe;const qe=X.current.x,ot=X.current.y,kt=Math.min(qe,O.clientX),Ot=Math.min(ot,O.clientY),Jt=Math.max(qe,O.clientX),en=Math.max(ot,O.clientY),jt=(kt+Jt)/2,gt=(Ot+en)/2,us=new Set,ds=[[kt,Ot],[Jt,Ot],[kt,en],[Jt,en],[jt,gt],[jt,Ot],[jt,en],[kt,gt],[Jt,gt]];for(const[Ft,Gt]of ds){const hs=document.elementsFromPoint(Ft,Gt);for(const Mn of hs)Mn instanceof HTMLElement&&us.add(Mn)}const fs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Ft of fs)if(Ft instanceof HTMLElement){const Gt=Ft.getBoundingClientRect(),hs=Gt.left+Gt.width/2,Mn=Gt.top+Gt.height/2,no=hs>=kt&&hs<=Jt&&Mn>=Ot&&Mn<=en,Do=Math.min(Gt.right,Jt)-Math.max(Gt.left,kt),es=Math.min(Gt.bottom,en)-Math.max(Gt.top,Ot),yi=Do>0&&es>0?Do*es:0,Ni=Gt.width*Gt.height,Ri=Ni>0?yi/Ni:0;(no||Ri>.5)&&us.add(Ft)}const Cn=[],zn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Ft of us){if(Vo(Ft,"[data-feedback-toolbar]")||Vo(Ft,"[data-annotation-marker]"))continue;const Gt=Ft.getBoundingClientRect();if(!(Gt.width>window.innerWidth*.8&&Gt.height>window.innerHeight*.5)&&!(Gt.width<10||Gt.height<10)&&Gt.left<Jt&&Gt.right>kt&&Gt.top<en&&Gt.bottom>Ot){const hs=Ft.tagName;let Mn=zn.has(hs);if(!Mn&&(hs==="DIV"||hs==="SPAN")){const no=Ft.textContent&&Ft.textContent.trim().length>0,Do=Ft.onclick!==null||Ft.getAttribute("role")==="button"||Ft.getAttribute("role")==="link"||Ft.classList.contains("clickable")||Ft.hasAttribute("data-clickable");(no||Do)&&!Ft.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Mn=!0)}if(Mn){let no=!1;for(const Do of Cn)if(Do.left<=Gt.left&&Do.right>=Gt.right&&Do.top<=Gt.top&&Do.bottom>=Gt.bottom){no=!0;break}no||Cn.push(Gt)}}}if(Ae.current){const Ft=Ae.current;for(;Ft.children.length>Cn.length;)Ft.removeChild(Ft.lastChild);Cn.forEach((Gt,hs)=>{let Mn=Ft.children[hs];Mn||(Mn=document.createElement("div"),Mn.className=$e.selectedElementHighlight,Ft.appendChild(Mn)),Mn.style.transform=`translate(${Gt.left}px, ${Gt.top}px)`,Mn.style.width=`${Gt.width}px`,Mn.style.height=`${Gt.height}px`})}}};return document.addEventListener("mousemove",A,{passive:!0}),()=>document.removeEventListener("mousemove",A)},[j,U,_e,at]),y.useEffect(()=>{if(!j)return;const A=O=>{const G=_e,V=X.current;if(_e&&V){Pe.current=!0;const oe=Math.min(V.x,O.clientX),xe=Math.min(V.y,O.clientY),Fe=Math.max(V.x,O.clientX),qe=Math.max(V.y,O.clientY),ot=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(jt=>{if(!(jt instanceof HTMLElement)||Vo(jt,"[data-feedback-toolbar]")||Vo(jt,"[data-annotation-marker]"))return;const gt=jt.getBoundingClientRect();gt.width>window.innerWidth*.8&&gt.height>window.innerHeight*.5||gt.width<10||gt.height<10||gt.left<Fe&&gt.right>oe&&gt.top<qe&&gt.bottom>xe&&ot.push({element:jt,rect:gt})});const Ot=ot.filter(({element:jt})=>!ot.some(({element:gt})=>gt!==jt&&jt.contains(gt))),Jt=O.clientX/window.innerWidth*100,en=O.clientY+window.scrollY;if(Ot.length>0){const jt=Ot.reduce((zn,{rect:Ft})=>({left:Math.min(zn.left,Ft.left),top:Math.min(zn.top,Ft.top),right:Math.max(zn.right,Ft.right),bottom:Math.max(zn.bottom,Ft.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),gt=Ot.slice(0,5).map(({element:zn})=>ul(zn).name).join(", "),us=Ot.length>5?` +${Ot.length-5} more`:"",ds=Ot[0].element,fs=Xu(ds),Cn=qu(ds);q({x:Jt,y:en,clientY:O.clientY,element:`${Ot.length} elements: ${gt}${us}`,elementPath:"multi-select",boundingBox:{x:jt.left,y:jt.top+window.scrollY,width:jt.right-jt.left,height:jt.bottom-jt.top},isMultiSelect:!0,fullPath:Ku(ds),accessibility:Gu(ds),computedStyles:Cn,computedStylesObj:fs,nearbyElements:Fu(ds),cssClasses:oc(ds),nearbyText:sc(ds),sourceFile:nd(ds)})}else{const jt=Math.abs(Fe-oe),gt=Math.abs(qe-xe);jt>20&&gt>20&&q({x:Jt,y:en,clientY:O.clientY,element:"Area selection",elementPath:`region at (${Math.round(oe)}, ${Math.round(xe)})`,boundingBox:{x:oe,y:xe+window.scrollY,width:jt,height:gt},isMultiSelect:!0})}fe(null)}else G&&(Pe.current=!0);R.current=null,X.current=null,C(!1),Ae.current&&(Ae.current.innerHTML="")};return document.addEventListener("mouseup",A),()=>document.removeEventListener("mouseup",A)},[j,_e]);const Ho=y.useCallback(async(A,O,G)=>{const V=qt.webhookUrl||w;if(!V||!qt.webhooksEnabled&&!G)return!1;try{return(await fetch(V,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:A,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...O})})).ok}catch(oe){return console.warn("[Agentation] Webhook failed:",oe),!1}},[w,qt.webhookUrl,qt.webhooksEnabled]),kr=y.useCallback(A=>{var G;if(!U)return;const O={id:Date.now().toString(),x:U.x,y:U.y,comment:A,element:U.element,elementPath:U.elementPath,timestamp:Date.now(),selectedText:U.selectedText,boundingBox:U.boundingBox,nearbyText:U.nearbyText,cssClasses:U.cssClasses,isMultiSelect:U.isMultiSelect,isFixed:U.isFixed,fullPath:U.fullPath,accessibility:U.accessibility,computedStyles:U.computedStyles,nearbyElements:U.nearbyElements,reactComponents:U.reactComponents,sourceFile:U.sourceFile,elementBoundingBoxes:U.elementBoundingBoxes,..._&&jn?{sessionId:jn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};z(V=>[...V,O]),ft.current=O.id,Ut(()=>{ft.current=null},300),Ut(()=>{Ts(V=>new Set(V).add(O.id))},250),a==null||a(O),Ho("annotation.add",{annotation:O}),I(!0),Ut(()=>{q(null),I(!1)},150),(G=window.getSelection())==null||G.removeAllRanges(),_&&jn&&sl(_,jn,O).then(V=>{V.id!==O.id&&(z(oe=>oe.map(xe=>xe.id===O.id?{...xe,id:V.id}:xe)),Ts(oe=>{const xe=new Set(oe);return xe.delete(O.id),xe.add(V.id),xe}))}).catch(V=>{console.warn("[Agentation] Failed to sync annotation:",V)})},[U,a,Ho,_,jn]),Be=y.useCallback(()=>{I(!0),Ut(()=>{q(null),I(!1)},150)},[]),st=y.useCallback(A=>{const O=M.findIndex(V=>V.id===A),G=M[O];(ie==null?void 0:ie.id)===A&&(le(!0),Ut(()=>{He(null),Ie(null),ut([]),le(!1)},150)),zt(A),fo(V=>new Set(V).add(A)),G&&(c==null||c(G),Ho("annotation.delete",{annotation:G})),_&&Wa(_,A).catch(V=>{console.warn("[Agentation] Failed to delete annotation from server:",V)}),Ut(()=>{z(V=>V.filter(oe=>oe.id!==A)),fo(V=>{const oe=new Set(V);return oe.delete(A),oe}),zt(null),O<M.length-1&&(Oe(O),Ut(()=>Oe(null),200))},150)},[M,ie,c,Ho,_]),wt=y.useCallback(A=>{var O;if(!A){et(null),ct(null),Mt([]);return}if(et(A.id),(O=A.elementBoundingBoxes)!=null&&O.length){const G=[];for(const V of A.elementBoundingBoxes){const oe=V.x+V.width/2,xe=V.y+V.height/2-window.scrollY,qe=document.elementsFromPoint(oe,xe).find(ot=>!ot.closest("[data-annotation-marker]")&&!ot.closest("[data-agentation-root]"));qe&&G.push(qe)}Mt(G),ct(null)}else if(A.boundingBox){const G=A.boundingBox,V=G.x+G.width/2,oe=A.isFixed?G.y+G.height/2:G.y+G.height/2-window.scrollY,xe=hr(V,oe);if(xe){const Fe=xe.getBoundingClientRect(),qe=Fe.width/G.width,ot=Fe.height/G.height;qe<.5||ot<.5?ct(null):ct(xe)}else ct(null);Mt([])}else ct(null),Mt([])},[]),lt=y.useCallback(A=>{if(!ie)return;const O={...ie,comment:A};z(G=>G.map(V=>V.id===ie.id?O:V)),u==null||u(O),Ho("annotation.update",{annotation:O}),_&&qy(_,ie.id,{comment:A}).catch(G=>{console.warn("[Agentation] Failed to update annotation on server:",G)}),le(!0),Ut(()=>{He(null),Ie(null),ut([]),le(!1)},150)},[ie,u,Ho,_]),It=y.useCallback(()=>{le(!0),Ut(()=>{He(null),Ie(null),ut([]),le(!1)},150)},[]),Bt=y.useCallback(()=>{const A=M.length,O=Ke.length>0||!!nt;if(A===0&&kn.length===0&&!O)return;if(d==null||d(M),Ho("annotations.clear",{annotations:M}),_){Promise.all(M.map(oe=>Wa(_,oe.id).catch(xe=>{console.warn("[Agentation] Failed to delete annotation from server:",xe)})));for(const[,oe]of Oo.current)oe&&Wa(_,oe).catch(()=>{});Oo.current.clear();for(const[,oe]of qo.current)oe&&Wa(_,oe).catch(()=>{});qo.current.clear()}Me(!0),Ee(!0),_i([]);const G=zo.current;if(G){const oe=G.getContext("2d");oe&&oe.clearRect(0,0,G.width,G.height)}(Ke.length>0||nt)&&(vs(oe=>oe+1),ii(oe=>oe+1),Ut(()=>{yt([]),En(null)},200)),xt&&Xt(!1),Qt&&Tn(""),$n.current={rearrange:null,placements:[]},Ju(Qe);const V=A*30+200;Ut(()=>{z([]),Ts(new Set),localStorage.removeItem(Md(Qe)),Me(!1)},V),Ut(()=>Ee(!1),1500)},[Qe,M,kn,Ke,nt,xt,Qt,d,Ho,_]),mn=y.useCallback(async()=>{const A=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Qe,O=We&&xt;let G;if(O){if(Ke.length===0&&!nt&&!Qt)return;G=""}else{if(G=Qy(M,A,qt.outputDetail),!G&&kn.length===0&&Ke.length===0&&!nt)return;G||(G=`## Page Feedback: ${A}
`)}if(!O&&kn.length>0){const V=new Set;for(const qe of M)qe.drawingIndex!=null&&V.add(qe.drawingIndex);const oe=zo.current;oe&&(oe.style.visibility="hidden");const xe=[],Fe=window.scrollY;for(let qe=0;qe<kn.length;qe++){if(V.has(qe))continue;const ot=kn[qe];if(ot.points.length<2)continue;const kt=ot.fixed?ot.points:ot.points.map(Un=>({x:Un.x,y:Un.y-Fe}));let Ot=1/0,Jt=1/0,en=-1/0,jt=-1/0;for(const Un of kt)Ot=Math.min(Ot,Un.x),Jt=Math.min(Jt,Un.y),en=Math.max(en,Un.x),jt=Math.max(jt,Un.y);const gt=en-Ot,us=jt-Jt,ds=Math.hypot(gt,us),fs=kt[0],Cn=kt[kt.length-1],zn=Math.hypot(Cn.x-fs.x,Cn.y-fs.y);let Ft;const Gt=zn<ds*.35,hs=gt/Math.max(us,1);if(Gt&&ds>20){const Un=Math.max(gt,us)*.15;let Bi=0;for(const Yi of kt){const $c=Yi.x-Ot<Un,Yd=en-Yi.x<Un,Wd=Yi.y-Jt<Un,Fd=jt-Yi.y<Un;($c||Yd)&&(Wd||Fd)&&Bi++}Ft=Bi>kt.length*.15?"box":"circle"}else hs>3&&us<40?Ft="underline":zn>ds*.5?Ft="arrow":Ft="drawing";const Mn=Math.min(10,kt.length),no=Math.max(1,Math.floor(kt.length/Mn)),Do=new Set,es=[],yi=[fs];for(let Un=no;Un<kt.length-1;Un+=no)yi.push(kt[Un]);yi.push(Cn);for(const Un of yi){const Bi=hr(Un.x,Un.y);if(!Bi||Do.has(Bi)||Vo(Bi,"[data-feedback-toolbar]"))continue;Do.add(Bi);const{name:Yi}=ul(Bi);es.includes(Yi)||es.push(Yi)}const Ni=`${Math.round(Ot)},${Math.round(Jt)} → ${Math.round(en)},${Math.round(jt)}`;let Ri;(Ft==="circle"||Ft==="box")&&es.length>0?Ri=`${Ft==="box"?"Boxed":"Circled"} **${es[0]}**${es.length>1?` (and ${es.slice(1).join(", ")})`:""} (region: ${Ni})`:Ft==="underline"&&es.length>0?Ri=`Underlined **${es[0]}** (${Ni})`:Ft==="arrow"&&es.length>=2?Ri=`Arrow from **${es[0]}** to **${es[es.length-1]}** (${Math.round(fs.x)},${Math.round(fs.y)} → ${Math.round(Cn.x)},${Math.round(Cn.y)})`:es.length>0?Ri=`${Ft==="arrow"?"Arrow":"Drawing"} near **${es.join("**, **")}** (region: ${Ni})`:Ri=`Drawing at ${Ni}`,xe.push(Ri)}oe&&(oe.style.visibility=""),xe.length>0&&(G+=`
**Drawings:**
`,xe.forEach((qe,ot)=>{G+=`${ot+1}. ${qe}
`}))}if((Ke.length>0||O&&Qt)&&(G+=`
`+Yy(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:xt,wireframePurpose:Qt||void 0},qt.outputDetail)),nt){const V=Wy(nt,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});V&&(G+=`
`+V)}if(g)try{await navigator.clipboard.writeText(G)}catch{}h==null||h(G),D(!0),Ut(()=>D(!1),2e3),qt.autoClearAfterCopy&&Ut(()=>Bt(),500)},[M,kn,Ke,nt,xt,We,as,Qt,Qe,qt.outputDetail,js,qt.autoClearAfterCopy,Bt,g,h]),un=y.useCallback(async()=>{const A=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Qe;let O=Qy(M,A,qt.outputDetail);if(!O&&Ke.length===0&&!nt)return;if(O||(O=`## Page Feedback: ${A}
`),Ke.length>0&&(O+=`
`+Yy(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:xt,wireframePurpose:Qt||void 0},qt.outputDetail)),nt){const V=Wy(nt,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});V&&(O+=`
`+V)}p&&p(O,M),Z("sending"),await new Promise(V=>Ut(V,150));const G=await Ho("submit",{output:O,annotations:M},!0);Z(G?"sent":"failed"),Ut(()=>Z("idle"),2500),G&&qt.autoClearAfterCopy&&Ut(()=>Bt(),500)},[p,Ho,M,Ke,nt,xt,as,Qe,qt.outputDetail,js,qt.autoClearAfterCopy,Bt]);y.useEffect(()=>{if(!Zn)return;const A=10,O=V=>{const oe=V.clientX-Zn.x,xe=V.clientY-Zn.y,Fe=Math.sqrt(oe*oe+xe*xe);if(!Fs&&Fe>A&&Cs(!0),Fs||Fe>A){let qe=Zn.toolbarX+oe,ot=Zn.toolbarY+xe;const kt=20,Ot=337,Jt=44,jt=Ot-(j?ys==="connected"?297:257:44),gt=kt-jt,us=window.innerWidth-kt-Ot;qe=Math.max(gt,Math.min(us,qe)),ot=Math.max(kt,Math.min(window.innerHeight-Jt-kt,ot)),Ws({x:qe,y:ot})}},G=()=>{Fs&&(Ms.current=!0),Cs(!1),Eo(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",G),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",G)}},[Zn,Fs,j,ys]);const cs=y.useCallback(A=>{var xe,Fe;if(A.target.closest("button")||A.target.closest("[data-agentation-settings-panel]"))return;const O=A.currentTarget.parentElement;if(!O)return;const G=O.getBoundingClientRect(),V=(xe=nn==null?void 0:nn.x)!=null?xe:G.left,oe=(Fe=nn==null?void 0:nn.y)!=null?Fe:G.top;Eo({x:A.clientX,y:A.clientY,toolbarX:V,toolbarY:oe})},[nn]);if(y.useEffect(()=>{if(!nn)return;const A=()=>{let oe=nn.x,xe=nn.y;const ot=20-(337-(j?ys==="connected"?297:257:44)),kt=window.innerWidth-20-337;oe=Math.max(ot,Math.min(kt,oe)),xe=Math.max(20,Math.min(window.innerHeight-44-20,xe)),(oe!==nn.x||xe!==nn.y)&&Ws({x:oe,y:xe})};return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[nn,j,ys]),y.useEffect(()=>{const A=O=>{const G=O.target,V=G.tagName==="INPUT"||G.tagName==="TEXTAREA"||G.isContentEditable;if(O.key==="Escape"){if(We){_t?$t(null):Po();return}if(ws){Bs(!1);return}if(vn.length>0){_o([]);return}U||j&&(Gn(),k(!1))}if((O.metaKey||O.ctrlKey)&&O.shiftKey&&(O.key==="f"||O.key==="F")){O.preventDefault(),Gn(),j?ri():k(!0);return}if(!(V||O.metaKey||O.ctrlKey)&&((O.key==="p"||O.key==="P")&&(O.preventDefault(),Gn(),to()),(O.key==="l"||O.key==="L")&&(O.preventDefault(),Gn(),ws&&Bs(!1),ve&&Ye(!1),U&&Be(),We?Po():vt(!0)),(O.key==="h"||O.key==="H")&&M.length>0&&(O.preventDefault(),Gn(),E(oe=>!oe)),(O.key==="c"||O.key==="C")&&(M.length>0||Ke.length>0||nt)&&(O.preventDefault(),Gn(),mn()),(O.key==="x"||O.key==="X")&&(M.length>0||Ke.length>0||nt)&&(O.preventDefault(),Gn(),Bt(),Ke.length>0&&yt([]),nt&&En(null)),O.key==="s"||O.key==="S")){const oe=Gi(qt.webhookUrl)||Gi(w||"");M.length>0&&oe&&ce==="idle"&&(O.preventDefault(),Gn(),un())}};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[j,ws,We,_t,Ke,nt,U,M.length,qt.webhookUrl,w,ce,un,to,mn,Bt,vn]),!tt||$)return null;const ks=M.length>0,xo=M.filter(A=>!Es.has(A.id)&&A.kind!=="placement"&&A.kind!=="rearrange"),ta=xo.length>0,ho=M.filter(A=>Es.has(A.id)),ba=A=>{const xe=A.x/100*window.innerWidth,Fe=typeof A.y=="string"?parseFloat(A.y):A.y,qe={};window.innerHeight-Fe-22-10<80&&(qe.top="auto",qe.bottom="calc(100% + 10px)");const kt=xe-200/2,Ot=10;if(kt<Ot){const Jt=Ot-kt;qe.left=`calc(50% + ${Jt}px)`}else if(kt+200>window.innerWidth-Ot){const Jt=kt+200-(window.innerWidth-Ot);qe.left=`calc(50% - ${Jt}px)`}return qe};return Ac.createPortal(l.jsxs("div",{ref:K,style:{display:"contents"},"data-agentation-theme":Ls?"dark":"light","data-agentation-accent":qt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${$e.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:nn?{left:nn.x,top:nn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${$e.toolbarContainer} ${j?$e.expanded:$e.collapsed} ${$o?$e.entrance:""} ${W?$e.hiding:""} ${!qt.webhooksEnabled&&(Gi(qt.webhookUrl)||Gi(w||""))?$e.serverConnected:""}`,onClick:j?void 0:A=>{if(Ms.current){Ms.current=!1,A.preventDefault();return}k(!0)},onMouseDown:cs,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${$e.toggleContent} ${j?$e.hidden:$e.visible}`,children:[l.jsx(Bw,{size:24}),ta&&l.jsx("span",{className:`${$e.badge} ${j?$e.fadeOut:""} ${$o?$e.entrance:""}`,children:xo.length})]}),l.jsxs("div",{className:`${$e.controlsContent} ${j?$e.visible:$e.hidden} ${nn&&nn.y<100?$e.tooltipBelow:""} ${Dt||ve?$e.tooltipsHidden:""} ${jo?$e.tooltipsInSession:""}`,onMouseEnter:Mo,onMouseLeave:Go,children:[l.jsxs("div",{className:`${$e.buttonWrapper} ${nn&&nn.x<120?$e.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:$e.controlButton,onClick:A=>{A.stopPropagation(),Gn(),to()},"data-active":te,children:l.jsx(Iw,{size:24,isPaused:te})}),l.jsxs("span",{className:$e.buttonTooltip,children:[te?"Resume animations":"Pause animations",l.jsx("span",{className:$e.shortcut,children:"P"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:`${$e.controlButton} ${Ls?"":$e.light}`,onClick:A=>{A.stopPropagation(),Gn(),ws&&Bs(!1),ve&&Ye(!1),U&&Be(),We?Po():vt(!0)},"data-active":We,style:We&&xt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(qw,{size:21})}),l.jsxs("span",{className:$e.buttonTooltip,children:[We?"Exit layout mode":"Layout mode",l.jsx("span",{className:$e.shortcut,children:"L"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:$e.controlButton,onClick:A=>{A.stopPropagation(),Gn(),E(!N)},disabled:!ks||We,children:l.jsx($w,{size:24,isOpen:N})}),l.jsxs("span",{className:$e.buttonTooltip,children:[N?"Hide markers":"Show markers",l.jsx("span",{className:$e.shortcut,children:"H"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:`${$e.controlButton} ${ge?$e.statusShowing:""}`,onClick:A=>{A.stopPropagation(),Gn(),mn()},disabled:We&&xt?Ke.length===0&&!((Qo=nt==null?void 0:nt.sections)!=null&&Qo.length):!ks&&kn.length===0&&Ke.length===0&&!((Oc=nt==null?void 0:nt.sections)!=null&&Oc.length),"data-active":ge,children:l.jsx(Ow,{size:24,copied:ge,tint:We&&xt&&(Ke.length>0||(xl=nt==null?void 0:nt.sections)!=null&&xl.length)?"#f97316":void 0})}),l.jsxs("span",{className:$e.buttonTooltip,children:[We&&xt?"Copy layout":"Copy feedback",l.jsx("span",{className:$e.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${$e.buttonWrapper} ${$e.sendButtonWrapper} ${j&&!qt.webhooksEnabled&&(Gi(qt.webhookUrl)||Gi(w||""))?$e.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${$e.controlButton} ${ce==="sent"||ce==="failed"?$e.statusShowing:""}`,onClick:A=>{A.stopPropagation(),Gn(),un()},disabled:!ks||!Gi(qt.webhookUrl)&&!Gi(w||"")||ce==="sending","data-no-hover":ce==="sent"||ce==="failed",tabIndex:Gi(qt.webhookUrl)||Gi(w||"")?0:-1,children:[l.jsx(zw,{size:24,state:ce}),ks&&ce==="idle"&&l.jsx("span",{className:$e.buttonBadge,children:M.length})]}),l.jsxs("span",{className:$e.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:$e.shortcut,children:"S"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:$e.controlButton,onClick:A=>{A.stopPropagation(),Gn(),Bt()},disabled:!ks&&kn.length===0&&Ke.length===0&&!((bl=nt==null?void 0:nt.sections)!=null&&bl.length),"data-danger":!0,children:l.jsx(Hw,{size:24})}),l.jsxs("span",{className:$e.buttonTooltip,children:["Clear all",l.jsx("span",{className:$e.shortcut,children:"X"})]})]}),l.jsxs("div",{className:$e.buttonWrapper,children:[l.jsx("button",{className:$e.controlButton,onClick:A=>{A.stopPropagation(),Gn(),We&&Po(),Ye(!ve)},children:l.jsx(Pw,{size:24})}),_&&ys!=="disconnected"&&l.jsx("span",{className:`${$e.mcpIndicator} ${$e[ys]} ${ve?$e.hidden:""}`,title:ys==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:$e.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:$e.divider}),l.jsxs("div",{className:`${$e.buttonWrapper} ${nn&&typeof window<"u"&&nn.x>window.innerWidth-120?$e.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:$e.controlButton,onClick:A=>{A.stopPropagation(),Gn(),ri()},children:l.jsx(Uw,{size:24})}),l.jsxs("span",{className:$e.buttonTooltip,children:["Exit",l.jsx("span",{className:$e.shortcut,children:"Esc"})]})]})]}),l.jsx(S4,{visible:We&&j,activeType:_t,onSelect:A=>{$t(_t===A?null:A)},isDarkMode:Ls,sectionCount:(va=nt==null?void 0:nt.sections.length)!=null?va:0,onDetectSections:()=>{var Fe,qe;const A=B4(),O=(Fe=nt==null?void 0:nt.sections)!=null?Fe:[],G=new Set(O.map(ot=>ot.selector)),V=A.filter(ot=>!G.has(ot.selector)),oe=[...O,...V],xe=[...(qe=nt==null?void 0:nt.originalOrder)!=null?qe:[],...V.map(ot=>ot.id)];En({sections:oe,originalOrder:xe,detectedAt:Date.now()})},placementCount:Ke.length,onClearPlacements:()=>{vs(A=>A+1),ii(A=>A+1),Ut(()=>{En({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:xt,onBlankCanvasChange:A=>{const O={sections:[],originalOrder:[],detectedAt:Date.now()};A?(ao.current={rearrange:nt,placements:Ke},En($n.current.rearrange||O),yt($n.current.placements),$t(null)):($n.current={rearrange:nt,placements:Ke},En(ao.current.rearrange||O),yt(ao.current.placements)),Xt(A)},wireframePurpose:Qt,onWireframePurposeChange:Tn,Tooltip:xr,onDragStart:(A,O)=>{var Jt;O.preventDefault();const G=St[A];let V=null,oe=!1;const xe=O.clientX,Fe=O.clientY,qe=O.target.closest("[data-feedback-toolbar]"),ot=(Jt=qe==null?void 0:qe.getBoundingClientRect().top)!=null?Jt:window.innerHeight,kt=en=>{const jt=en.clientX-xe,gt=en.clientY-Fe;if(!oe&&(Math.abs(jt)>4||Math.abs(gt)>4)&&(oe=!0,V=document.createElement("div"),V.className=`${je.dragPreview}${xt?` ${je.dragPreviewWireframe}`:""}`,document.body.appendChild(V)),!V)return;const us=Math.max(0,ot-en.clientY),ds=Math.min(1,us/180),fs=1-Math.pow(1-ds,2),Cn=28,zn=20,Ft=Math.min(140,G.width*.18),Gt=Math.min(90,G.height*.18),hs=Cn+(Ft-Cn)*fs,Mn=zn+(Gt-zn)*fs;V.style.width=`${hs}px`,V.style.height=`${Mn}px`,V.style.left=`${en.clientX-hs/2}px`,V.style.top=`${en.clientY-Mn/2}px`,V.style.opacity=`${.5+.5*fs}`,V.textContent=fs>.25?A:""},Ot=en=>{if(window.removeEventListener("mousemove",kt),window.removeEventListener("mouseup",Ot),V&&document.body.removeChild(V),oe){const jt=G.width,gt=G.height,us=window.scrollY,ds=Math.max(0,en.clientX-jt/2),fs=Math.max(0,en.clientY+us-gt/2),Cn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:A,x:ds,y:fs,width:jt,height:gt,scrollY:us,timestamp:Date.now()};yt(zn=>[...zn,Cn]),$t(null),Bo.current=new Set,ro(zn=>zn+1)}};window.addEventListener("mousemove",kt),window.addEventListener("mouseup",Ot)}}),l.jsx(V6,{settings:qt,onSettingsChange:A=>Di(O=>({...O,...A})),isDarkMode:Ls,onToggleTheme:Os,isDevMode:To,connectionStatus:ys,endpoint:_,isVisible:Xe,toolbarNearBottom:!!nn&&nn.y<230,settingsPage:bt,onSettingsPageChange:Ve,onHideToolbar:Ao})]})}),(We||Pt)&&l.jsx("div",{className:`${je.blankCanvas} ${On?je.visible:""} ${tn?je.gridActive:""}`,style:{"--canvas-opacity":xn},"data-feedback-toolbar":!0}),We&&xt&&On&&l.jsxs("div",{className:je.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:je.wireframeOpacityRow,children:[l.jsx("span",{className:je.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:je.wireframeOpacitySlider,min:0,max:1,step:.01,value:xn,onChange:A=>io(Number(A.target.value))})]}),l.jsxs("div",{className:je.wireframeNoticeTitleRow,children:[l.jsx("span",{className:je.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:je.wireframeNoticeDivider}),l.jsx("button",{className:je.wireframeStartOver,onClick:()=>{vs(A=>A+1),En({sections:[],originalOrder:[],detectedAt:Date.now()}),$n.current={rearrange:null,placements:[]},Tn(""),Ju(Qe)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(We||Pt)&&l.jsx(y4,{placements:Ke,onChange:yt,activeComponent:Pt?null:_t,onActiveComponentChange:$t,isDarkMode:Ls,exiting:Pt,onInteractionChange:bn,passthrough:!_t,extraSnapRects:nt==null?void 0:nt.sections.map(A=>A.currentRect),deselectSignal:Rs,clearSignal:gs,wireframe:xt,onSelectionChange:(A,O)=>{Bo.current=A,O||(Js.current=new Set,bs(G=>G+1))},onDragMove:(A,O)=>{const G=Js.current;if(!(!G.size||!nt)){if(!qn.current){qn.current=new Map;for(const V of nt.sections)G.has(V.id)&&qn.current.set(V.id,{x:V.currentRect.x,y:V.currentRect.y})}for(const V of nt.sections){if(!G.has(V.id)||!qn.current.get(V.id))continue;const xe=document.querySelector(`[data-rearrange-section="${V.id}"]`);xe&&(xe.style.transform=`translate(${A}px, ${O}px)`)}}},onDragEnd:(A,O,G)=>{const V=Js.current,oe=qn.current;if(qn.current=null,!(!V.size||!nt||!oe)){for(const xe of V){const Fe=document.querySelector(`[data-rearrange-section="${xe}"]`);Fe&&(Fe.style.transform="")}G&&En(xe=>xe&&{...xe,sections:xe.sections.map(Fe=>{const qe=oe.get(Fe.id);return qe?{...Fe,currentRect:{...Fe.currentRect,x:Math.max(0,qe.x+A),y:Math.max(0,qe.y+O)}}:Fe})})}}}),(We||Pt)&&nt&&l.jsx(z4,{rearrangeState:nt,onChange:En,isDarkMode:Ls,exiting:Pt,blankCanvas:xt,extraSnapRects:Ke.map(A=>({x:A.x,y:A.y,width:A.width,height:A.height})),clearSignal:an,deselectSignal:lo,onSelectionChange:(A,O)=>{Js.current=A,O||(Bo.current=new Set,ro(G=>G+1))},onDragMove:(A,O)=>{const G=Bo.current;if(G.size){if(!qn.current){qn.current=new Map;for(const V of Ke)G.has(V.id)&&qn.current.set(V.id,{x:V.x,y:V.y})}for(const V of G){const oe=document.querySelector(`[data-design-placement="${V}"]`);oe&&(oe.style.transform=`translate(${A}px, ${O}px)`)}}},onDragEnd:(A,O,G)=>{const V=Bo.current,oe=qn.current;if(qn.current=null,!(!V.size||!oe)){for(const xe of V){const Fe=document.querySelector(`[data-design-placement="${xe}"]`);Fe&&(Fe.style.transform="")}G&&yt(xe=>xe.map(Fe=>{const qe=oe.get(Fe.id);return qe?{...Fe,x:Math.max(0,qe.x+A),y:Math.max(0,qe.y+O)}:Fe}))}}}),l.jsx("canvas",{ref:zo,className:`${$e.drawCanvas} ${ws?$e.active:""}`,style:{opacity:wn?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:$e.markersLayer,"data-feedback-toolbar":!0,children:[ae&&xo.filter(A=>!A.isFixed).map((A,O,G)=>l.jsx(Zy,{annotation:A,globalIndex:xo.findIndex(V=>V.id===A.id),layerIndex:O,layerSize:G.length,isExiting:Se,isClearing:Ue,isAnimated:go.has(A.id),isHovered:!Se&&mt===A.id,isDeleting:Ct===A.id,isEditingAny:!!ie,renumberFrom:Zt,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:ba(A),onHoverEnter:V=>!Se&&V.id!==ft.current&&wt(V),onHoverLeave:()=>wt(null),onClick:V=>qt.markerClickBehavior==="delete"?st(V.id):ea(V),onContextMenu:ea},A.id)),ae&&!Se&&ho.filter(A=>!A.isFixed).map(A=>l.jsx(Jy,{annotation:A},A.id))]}),l.jsxs("div",{className:$e.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ae&&xo.filter(A=>A.isFixed).map((A,O,G)=>l.jsx(Zy,{annotation:A,globalIndex:xo.findIndex(V=>V.id===A.id),layerIndex:O,layerSize:G.length,isExiting:Se,isClearing:Ue,isAnimated:go.has(A.id),isHovered:!Se&&mt===A.id,isDeleting:Ct===A.id,isEditingAny:!!ie,renumberFrom:Zt,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:ba(A),onHoverEnter:V=>!Se&&V.id!==ft.current&&wt(V),onHoverLeave:()=>wt(null),onClick:V=>qt.markerClickBehavior==="delete"?st(V.id):ea(V),onContextMenu:ea},A.id)),ae&&!Se&&ho.filter(A=>A.isFixed).map(A=>l.jsx(Jy,{annotation:A,fixed:!0},A.id))]}),j&&l.jsxs("div",{className:$e.overlay,"data-feedback-toolbar":!0,style:U||ie?{zIndex:99999}:void 0,children:[(ee==null?void 0:ee.rect)&&!U&&!rt&&!_e&&l.jsx("div",{className:`${$e.hoverHighlight} ${$e.enter}`,style:{left:ee.rect.left,top:ee.rect.top,width:ee.rect.width,height:ee.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),vn.filter(A=>document.contains(A.element)).map((A,O)=>{const G=A.element.getBoundingClientRect(),V=vn.length>1;return l.jsx("div",{className:V?$e.multiSelectOutline:$e.singleSelectOutline,style:{position:"fixed",left:G.left,top:G.top,width:G.width,height:G.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},O)}),mt&&!U&&(()=>{var oe;const A=M.find(xe=>xe.id===mt);if(!(A!=null&&A.boundingBox))return null;if((oe=A.elementBoundingBoxes)!=null&&oe.length)return it.length>0?it.filter(xe=>document.contains(xe)).map((xe,Fe)=>{const qe=xe.getBoundingClientRect();return l.jsx("div",{className:`${$e.multiSelectOutline} ${$e.enter}`,style:{left:qe.left,top:qe.top,width:qe.width,height:qe.height}},`hover-outline-live-${Fe}`)}):A.elementBoundingBoxes.map((xe,Fe)=>l.jsx("div",{className:`${$e.multiSelectOutline} ${$e.enter}`,style:{left:xe.x,top:xe.y-dt,width:xe.width,height:xe.height}},`hover-outline-${Fe}`));const O=ze&&document.contains(ze)?ze.getBoundingClientRect():null,G=O?{x:O.left,y:O.top,width:O.width,height:O.height}:{x:A.boundingBox.x,y:A.isFixed?A.boundingBox.y:A.boundingBox.y-dt,width:A.boundingBox.width,height:A.boundingBox.height},V=A.isMultiSelect;return l.jsx("div",{className:`${V?$e.multiSelectOutline:$e.singleSelectOutline} ${$e.enter}`,style:{left:G.x,top:G.y,width:G.width,height:G.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ee&&!U&&!rt&&!_e&&l.jsxs("div",{className:`${$e.hoverTooltip} ${$e.enter}`,style:{left:Math.max(8,Math.min(L.x,window.innerWidth-100)),top:Math.max(L.y-(ee.reactComponents?48:32),8)},children:[ee.reactComponents&&l.jsx("div",{className:$e.hoverReactPath,children:ee.reactComponents}),l.jsx("div",{className:$e.hoverElementName,children:ee.elementName})]}),U&&l.jsxs(l.Fragment,{children:[(wa=U.multiSelectElements)!=null&&wa.length?U.multiSelectElements.filter(A=>document.contains(A)).map((A,O)=>{const G=A.getBoundingClientRect();return l.jsx("div",{className:`${$e.multiSelectOutline} ${Rn?$e.exit:$e.enter}`,style:{left:G.left,top:G.top,width:G.width,height:G.height}},`pending-multi-${O}`)}):U.targetElement&&document.contains(U.targetElement)?(()=>{const A=U.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${$e.singleSelectOutline} ${Rn?$e.exit:$e.enter}`,style:{left:A.left,top:A.top,width:A.width,height:A.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():U.boundingBox&&l.jsx("div",{className:`${U.isMultiSelect?$e.multiSelectOutline:$e.singleSelectOutline} ${Rn?$e.exit:$e.enter}`,style:{left:U.boundingBox.x,top:U.boundingBox.y-dt,width:U.boundingBox.width,height:U.boundingBox.height,...U.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const A=U.x,O=U.isFixed?U.y:U.y-dt;return l.jsxs(l.Fragment,{children:[l.jsx(R6,{x:A,y:O,isMultiSelect:U.isMultiSelect,isExiting:Rn}),l.jsx(kd,{ref:Yt,element:U.element,selectedText:U.selectedText,computedStyles:U.computedStylesObj,placeholder:U.element==="Area selection"?"What should change in this area?":U.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:kr,onCancel:Be,isExiting:Rn,lightMode:!Ls,accentColor:U.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,A/100*window.innerWidth)),...O>window.innerHeight-290?{bottom:window.innerHeight-O+20}:{top:O+20}}})]})})()]}),ie&&l.jsxs(l.Fragment,{children:[(zc=ie.elementBoundingBoxes)!=null&&zc.length?ht.length>0?ht.filter(A=>document.contains(A)).map((A,O)=>{const G=A.getBoundingClientRect();return l.jsx("div",{className:`${$e.multiSelectOutline} ${$e.enter}`,style:{left:G.left,top:G.top,width:G.width,height:G.height}},`edit-multi-live-${O}`)}):ie.elementBoundingBoxes.map((A,O)=>l.jsx("div",{className:`${$e.multiSelectOutline} ${$e.enter}`,style:{left:A.x,top:A.y-dt,width:A.width,height:A.height}},`edit-multi-${O}`)):(()=>{const A=Ze&&document.contains(Ze)?Ze.getBoundingClientRect():null,O=A?{x:A.left,y:A.top,width:A.width,height:A.height}:ie.boundingBox?{x:ie.boundingBox.x,y:ie.isFixed?ie.boundingBox.y:ie.boundingBox.y-dt,width:ie.boundingBox.width,height:ie.boundingBox.height}:null;return O?l.jsx("div",{className:`${ie.isMultiSelect?$e.multiSelectOutline:$e.singleSelectOutline} ${$e.enter}`,style:{left:O.x,top:O.y,width:O.width,height:O.height,...ie.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(kd,{ref:fn,element:ie.element,selectedText:ie.selectedText,computedStyles:A4(ie.computedStyles),placeholder:"Edit your feedback...",initialValue:ie.comment,submitLabel:"Save",onSubmit:lt,onCancel:It,onDelete:()=>st(ie.id),isExiting:se,lightMode:!Ls,accentColor:ie.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const A=ie.isFixed?ie.y:ie.y-dt;return{left:Math.max(160,Math.min(window.innerWidth-160,ie.x/100*window.innerWidth)),...A>window.innerHeight-290?{bottom:window.innerHeight-A+20}:{top:A+20}}})()})]}),_e&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:ue,className:$e.dragSelection}),l.jsx("div",{ref:Ae,className:$e.highlightsContainer})]})]})]}),document.body)}const _p=y.createContext({});function Dc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const F6=typeof window<"u",gp=F6?y.useLayoutEffect:y.useEffect,Od=y.createContext(null);function yp(t,n){t.indexOf(n)===-1&&t.push(n)}function fl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const Ji=(t,n,i)=>i>n?n:i<t?t:i;let xp=()=>{};const Ka={},nb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function sb(t){return typeof t=="object"&&t!==null}const ob=t=>/^0[^.\s]+$/u.test(t);function ib(t){let n;return()=>(n===void 0&&(n=t()),n)}const Ei=t=>t,X6=(t,n)=>i=>n(t(i)),Nc=(...t)=>t.reduce(X6),hl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class bp{constructor(){this.subscriptions=[]}add(n){return yp(this.subscriptions,n),()=>fl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const oi=t=>t*1e3,Ti=t=>t/1e3;function ab(t,n){return n?t*(1e3/n):0}const q6=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},rb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,G6=1e-7,K6=12;function Q6(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=rb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>G6&&++h<K6);return d}function Rc(t,n,i,a){if(t===n&&i===a)return Ei;const c=u=>Q6(u,0,1,t,i);return u=>u===0||u===1?u:rb(c(u),n,a)}const lb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,cb=t=>n=>1-t(1-n),ub=Rc(.33,1.53,.69,.99),vp=cb(ub),db=lb(vp),fb=t=>t>=1?1:(t*=2)<1?.5*vp(t):.5*(2-Math.pow(2,-10*(t-1))),wp=t=>1-Math.sin(Math.acos(t)),hb=cb(wp),mb=lb(wp),Z6=Rc(.42,0,1,1),J6=Rc(0,0,.58,1),pb=Rc(.42,0,.58,1),_b=t=>Array.isArray(t)&&typeof t[0]!="number";function gb(t,n){return _b(t)?t[q6(0,t.length,n)]:t}const yb=t=>Array.isArray(t)&&typeof t[0]=="number",eC={linear:Ei,easeIn:Z6,easeInOut:pb,easeOut:J6,circIn:wp,circInOut:mb,circOut:hb,backIn:vp,backInOut:db,backOut:ub,anticipate:fb},tC=t=>typeof t=="string",s1=t=>{if(yb(t)){xp(t.length===4);const[n,i,a,c]=t;return Rc(n,i,a,c)}else if(tC(t))return eC[t];return t},sd=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function nC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const sC=40;function xb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=sd.reduce((N,E)=>(N[E]=nC(u),N),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,j=()=>{const N=Ka.useManualTiming,E=N?c.timestamp:performance.now();i=!1,N||(c.delta=a?1e3/60:Math.max(Math.min(E-c.timestamp,sC),1)),c.timestamp=E,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},k=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:sd.reduce((N,E)=>{const $=d[E];return N[E]=(F,W=!1,H=!1)=>(i||k(),$.schedule(F,W,H)),N},{}),cancel:N=>{for(let E=0;E<sd.length;E++)d[sd[E]].cancel(N)},state:c,steps:d}}const{schedule:Xn,cancel:xa,state:Co,steps:lm}=xb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ei,!0);let hd;function oC(){hd=void 0}const Wo={now:()=>(hd===void 0&&Wo.set(Co.isProcessing||Ka.useManualTiming?Co.timestamp:performance.now()),hd),set:t=>{hd=t,queueMicrotask(oC)}},bb=t=>n=>typeof n=="string"&&n.startsWith(t),vb=bb("--"),iC=bb("var(--"),Sp=t=>iC(t)?aC.test(t.split("/*")[0].trim()):!1,aC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function o1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const pl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Cc={...pl,transform:t=>Ji(0,1,t)},od={...pl,default:1},yc=t=>Math.round(t*1e5)/1e5,Cp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rC(t){return t==null}const lC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kp=(t,n)=>i=>!!(typeof i=="string"&&lC.test(i)&&i.startsWith(t)||n&&!rC(i)&&Object.prototype.hasOwnProperty.call(i,n)),wb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Cp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},cC=t=>Ji(0,255,t),cm={...pl,transform:t=>Math.round(cC(t))},br={test:kp("rgb","red"),parse:wb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+cm.transform(t)+", "+cm.transform(n)+", "+cm.transform(i)+", "+yc(Cc.transform(a))+")"};function uC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const zm={test:kp("#"),parse:uC,transform:br.transform},Bc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Fa=Bc("deg"),Zi=Bc("%"),At=Bc("px"),dC=Bc("vh"),fC=Bc("vw"),i1={...Zi,parse:t=>Zi.parse(t)/100,transform:t=>Zi.transform(t*100)},rl={test:kp("hsl","hue"),parse:wb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+Zi.transform(yc(n))+", "+Zi.transform(yc(i))+", "+yc(Cc.transform(a))+")"},Zs={test:t=>br.test(t)||zm.test(t)||rl.test(t),parse:t=>br.test(t)?br.parse(t):rl.test(t)?rl.parse(t):zm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?br.transform(t):rl.transform(t),getAnimatableNone:t=>{const n=Zs.parse(t);return n.alpha=0,Zs.transform(n)}},hC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Cp))==null?void 0:n.length)||0)+(((i=t.match(hC))==null?void 0:i.length)||0)>0}const Sb="number",Cb="color",pC="var",_C="var(",a1="${}",gC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ml(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(gC,p=>(Zs.test(p)?(a.color.push(u),c.push(Cb),i.push(Zs.parse(p))):p.startsWith(_C)?(a.var.push(u),c.push(pC),i.push(p)):(a.number.push(u),c.push(Sb),i.push(parseFloat(p))),++u,a1)).split(a1);return{values:i,split:h,indexes:a,types:c}}function yC(t){return ml(t).values}function kb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Sb?c+=yc(a[u]):d===Cb?c+=Zs.transform(a[u]):c+=a[u]}return c}}function xC(t){return kb(ml(t))}const bC=t=>typeof t=="number"?0:Zs.test(t)?Zs.getAnimatableNone(t):t,vC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:bC(t);function wC(t){const n=ml(t);return kb(n)(n.values.map((a,c)=>vC(a,n.split[c])))}const Ui={test:mC,parse:yC,createTransformer:xC,getAnimatableNone:wC};function um(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function SC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=um(p,h,t+1/3),u=um(p,h,t),d=um(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const os=(t,n,i)=>t+(n-t)*i,dm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},CC=[zm,br,rl],kC=t=>CC.find(n=>n.test(t));function r1(t){const n=kC(t);if(!n)return!1;let i=n.parse(t);return n===rl&&(i=SC(i)),i}const l1=(t,n)=>{const i=r1(t),a=r1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=dm(i.red,a.red,u),c.green=dm(i.green,a.green,u),c.blue=dm(i.blue,a.blue,u),c.alpha=os(i.alpha,a.alpha,u),br.transform(c))},$m=new Set(["none","hidden"]);function jC(t,n){return $m.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function MC(t,n){return i=>os(t,n,i)}function jp(t){return typeof t=="number"?MC:typeof t=="string"?Sp(t)?Td:Zs.test(t)?l1:AC:Array.isArray(t)?jb:typeof t=="object"?Zs.test(t)?l1:TC:Td}function jb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>jp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function TC(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=jp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function EC(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const AC=(t,n)=>{const i=Ui.createTransformer(n),a=ml(t),c=ml(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?$m.has(t)&&!c.values.length||$m.has(n)&&!a.values.length?jC(t,n):Nc(jb(EC(a,c),c.values),i):Td(t,n)};function Mb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?os(t,n,i):jp(t)(t,n)}const DC=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>Xn.update(n,i),stop:()=>xa(n),now:()=>Co.isProcessing?Co.timestamp:Wo.now()}},Tb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ed=2e4;function Mp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ed;)n+=i,a=t.next(n);return n>=Ed?1/0:n}function Eb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Mp(a),Ed);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Ti(c)}}const Ns={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Im(t,n){return t*Math.sqrt(1-n*n)}const NC=12;function RC(t,n,i){let a=i;for(let c=1;c<NC;c++)a=a-t(a)/n(a);return a}const fm=.001;function BC({duration:t=Ns.duration,bounce:n=Ns.bounce,velocity:i=Ns.velocity,mass:a=Ns.mass}){let c,u,d=1-n;d=Ji(Ns.minDamping,Ns.maxDamping,d),t=Ji(Ns.minDuration,Ns.maxDuration,Ti(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,w=Im(g,d),S=Math.exp(-x);return fm-b/w*S},u=g=>{const x=g*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-x),j=Im(Math.pow(g,2),d);return(-c(g)+fm>0?-1:1)*((b-w)*S)/j}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-fm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=RC(c,u,h);if(t=oi(t),isNaN(p))return{stiffness:Ns.stiffness,damping:Ns.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const LC=["duration","bounce"],OC=["stiffness","damping","mass"];function c1(t,n){return n.some(i=>t[i]!==void 0)}function zC(t){let n={velocity:Ns.velocity,stiffness:Ns.stiffness,damping:Ns.damping,mass:Ns.mass,isResolvedFromDuration:!1,...t};if(!c1(t,OC)&&c1(t,LC))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*Ji(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ns.mass,stiffness:c,damping:u}}else{const i=BC({...t,velocity:0});n={...n,...i,mass:Ns.mass},n.isResolvedFromDuration=!0}return n}function kc(t=Ns.visualDuration,n=Ns.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=zC({...i,velocity:-Ti(i.velocity||0)}),S=b||0,j=g/(2*Math.sqrt(p*_)),k=d-u,M=Ti(Math.sqrt(p/_)),z=Math.abs(k)<5;a||(a=z?Ns.restSpeed.granular:Ns.restSpeed.default),c||(c=z?Ns.restDelta.granular:Ns.restDelta.default);let N,E,$,F,W,H;if(j<1)$=Im(M,j),F=(S+j*M*k)/$,N=ae=>{const re=Math.exp(-j*M*ae);return d-re*(F*Math.sin($*ae)+k*Math.cos($*ae))},W=j*M*F+k*$,H=j*M*k-F*$,E=ae=>Math.exp(-j*M*ae)*(W*Math.sin($*ae)+H*Math.cos($*ae));else if(j===1){N=re=>d-Math.exp(-M*re)*(k+(S+M*k)*re);const ae=S+M*k;E=re=>Math.exp(-M*re)*(M*ae*re-S)}else{const ae=M*Math.sqrt(j*j-1);N=ee=>{const fe=Math.exp(-j*M*ee),L=Math.min(ae*ee,300);return d-fe*((S+j*M*k)*Math.sinh(L)+ae*k*Math.cosh(L))/ae};const re=(S+j*M*k)/ae,Se=j*M*re-k*ae,Ne=j*M*k-re*ae;E=ee=>{const fe=Math.exp(-j*M*ee),L=Math.min(ae*ee,300);return fe*(Se*Math.sinh(L)+Ne*Math.cosh(L))}}const K={calculatedDuration:w&&x||null,velocity:ae=>oi(E(ae)),next:ae=>{if(!w&&j<1){const Se=Math.exp(-j*M*ae),Ne=Math.sin($*ae),ee=Math.cos($*ae),fe=d-Se*(F*Ne+k*ee),L=oi(Se*(W*Ne+H*ee));return h.done=Math.abs(L)<=a&&Math.abs(d-fe)<=c,h.value=h.done?d:fe,h}const re=N(ae);if(w)h.done=ae>=x;else{const Se=oi(E(ae));h.done=Math.abs(Se)<=a&&Math.abs(d-re)<=c}return h.value=h.done?d:re,h},toString:()=>{const ae=Math.min(Mp(K),Ed),re=Tb(Se=>K.next(ae*Se).value,ae,30);return ae+"ms "+re},toTransition:()=>{}};return K}kc.applyToOptions=t=>{const n=Eb(t,100,kc);return t.ease=n.ease,t.duration=oi(n.duration),t.type="keyframes",t};const $C=5;function Ab(t,n,i){const a=Math.max(n-$C,0);return ab(i-t(a),n-a)}function Pm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=H=>h!==void 0&&H<h||p!==void 0&&H>p,S=H=>h===void 0?p:p===void 0||Math.abs(h-H)<Math.abs(p-H)?h:p;let j=i*n;const k=x+j,M=d===void 0?k:d(k);M!==k&&(j=M-x);const z=H=>-j*Math.exp(-H/a),N=H=>M+z(H),E=H=>{const K=z(H),ae=N(H);b.done=Math.abs(K)<=g,b.value=b.done?M:ae};let $,F;const W=H=>{w(b.value)&&($=H,F=kc({keyframes:[b.value,S(b.value)],velocity:Ab(N,H,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return W(0),{calculatedDuration:null,next:H=>{let K=!1;return!F&&$===void 0&&(K=!0,E(H),W(H)),$!==void 0&&H>=$?F.next(H-$):(!K&&E(H),b)}}}function IC(t,n,i){const a=[],c=i||Ka.mix||Mb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Ei:n;h=Nc(p,h)}a.push(h)}return a}function Db(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(xp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=IC(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=hl(t[x],t[x+1],_);return h[x](b)};return i?_=>g(Ji(t[0],t[u-1],_)):g}function Nb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=hl(0,n,a);t.push(os(i,1,c))}}function Rb(t){const n=[0];return Nb(n,t.length-1),n}function PC(t,n){return t.map(i=>i*n)}function HC(t,n){return t.map(()=>n||pb).splice(0,t.length-1)}function xc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=_b(a)?a.map(s1):s1(a),u={done:!1,value:n[0]},d=PC(i&&i.length===n.length?i:Rb(n),t),h=Db(d,n,{ease:Array.isArray(c)?c:HC(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const UC=t=>t!==null;function zd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(UC),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const VC={decay:Pm,inertia:Pm,tween:xc,keyframes:xc,spring:kc};function Bb(t){typeof t.type=="string"&&(t.type=VC[t.type])}class Tp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const YC=t=>t/100;class Ad extends Tp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Wo.now()&&this.tick(Wo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Bb(n);const{type:i=xc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||xc;p!==xc&&typeof h[0]!="number"&&(this.mixKeyframes=Nc(YC,Mb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Mp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:j,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let N=this.currentTime,E=a;if(x){const H=Math.min(this.currentTime,c)/h;let K=Math.floor(H),ae=H%1;!ae&&H>=1&&(ae=1),ae===1&&K--,K=Math.min(K,x+1),!!(K%2)&&(b==="reverse"?(ae=1-ae,w&&(ae-=w/h)):b==="mirror"&&(E=d)),N=Ji(0,1,ae)*h}let $;z?(this.delayState.value=_[0],$=this.delayState):$=E.next(N),u&&!z&&($.value=u($.value));let{done:F}=$;!z&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return W&&S!==Pm&&($.value=zd(_,this.options,k,this.speed)),j&&j($.value),W&&this.finish(),$}then(n,i){return this.finished.then(n,i)}get duration(){return Ti(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ti(n)}get time(){return Ti(this.currentTime)}set time(n){n=oi(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ab(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Wo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Ti(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=DC,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Wo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function WC(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const vr=t=>t*180/Math.PI,Hm=t=>{const n=vr(Math.atan2(t[1],t[0]));return Um(n)},FC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hm,rotateZ:Hm,skewX:t=>vr(Math.atan(t[1])),skewY:t=>vr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Um=t=>(t=t%360,t<0&&(t+=360),t),u1=Hm,d1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),f1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),XC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:d1,scaleY:f1,scale:t=>(d1(t)+f1(t))/2,rotateX:t=>Um(vr(Math.atan2(t[6],t[5]))),rotateY:t=>Um(vr(Math.atan2(-t[2],t[0]))),rotateZ:u1,rotate:u1,skewX:t=>vr(Math.atan(t[4])),skewY:t=>vr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Vm(t){return t.includes("scale")?1:0}function Ym(t,n){if(!t||t==="none")return Vm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=XC,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=FC,c=h}if(!c)return Vm(n);const u=a[n],d=c[1].split(",").map(GC);return typeof u=="function"?u(d):d[u]}const qC=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Ym(i,n)};function GC(t){return parseFloat(t.trim())}const _l=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gl=new Set(_l),h1=t=>t===pl||t===At,KC=new Set(["x","y","z"]),QC=_l.filter(t=>!KC.has(t));function ZC(t){const n=[];return QC.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Ga={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Ym(n,"x"),y:(t,{transform:n})=>Ym(n,"y")};Ga.translateX=Ga.x;Ga.translateY=Ga.y;const wr=new Set;let Wm=!1,Fm=!1,Xm=!1;function Lb(){if(Fm){const t=Array.from(wr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=ZC(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Fm=!1,Wm=!1,wr.forEach(t=>t.complete(Xm)),wr.clear()}function Ob(){wr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fm=!0)})}function JC(){Xm=!0,Ob(),Lb(),Xm=!1}class Ep{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(wr.add(this),Wm||(Wm=!0,Xn.read(Ob),Xn.resolveKeyframes(Lb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}WC(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),wr.delete(this)}cancel(){this.state==="scheduled"&&(wr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const e3=t=>t.startsWith("--");function zb(t,n,i){e3(n)?t.style.setProperty(n,i):t.style[n]=i}const t3={};function $b(t,n){const i=ib(t);return()=>{var a;return(a=t3[n])!=null?a:i()}}const n3=$b(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ib=$b(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),hc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,m1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hc([0,.65,.55,1]),circOut:hc([.55,0,1,.45]),backIn:hc([.31,.01,.66,-.59]),backOut:hc([.33,1.53,.69,.99])};function Pb(t,n){if(t)return typeof t=="function"?Ib()?Tb(t,n):"ease-out":yb(t)?hc(t):Array.isArray(t)?t.map(i=>Pb(i,n)||m1.easeOut):m1[t]}function s3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=Pb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Ap(t){return typeof t=="function"&&"applyToOptions"in t}function o3({type:t,...n}){var i,a;return Ap(t)&&Ib()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Hb extends Tp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,xp(typeof n.type!="string");const g=o3(n);this.animation=s3(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=zd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),zb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Ti(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ti(n)}get time(){return Ti(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=oi(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&n3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Ei):c(this)}}const Ub={anticipate:fb,backInOut:db,circInOut:mb};function i3(t){return t in Ub}function a3(t){typeof t.ease=="string"&&i3(t.ease)&&(t.ease=Ub[t.ease])}const hm=10;class r3 extends Hb{constructor(n){a3(n),Bb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Ad({...d,autoplay:!1}),p=Math.max(hm,Wo.now()-this.startTime),g=Ji(0,hm,p-hm),_=h.sample(p).value,{name:x}=this.options;u&&x&&zb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const p1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ui.test(t)||t==="0")&&!t.startsWith("url("));function l3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function c3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=p1(c,n),h=p1(u,n);return!d||!h?!1:l3(t)||(i==="spring"||Ap(i))&&a}function qm(t){t.duration=0,t.type="keyframes"}const Vb=new Set(["opacity","clipPath","filter","transform"]),u3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function d3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&u3.test(t[n]))return!0;return!1}const f3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),h3=ib(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function m3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return h3()&&i&&(Vb.has(i)||f3.has(i)&&d3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const p3=40;class _3 extends Tp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var S;super(),this.stop=()=>{var j,k;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Wo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Ep;this.keyframeResolver=new w(h,(j,k,M)=>this.onKeyframesResolved(j,k,b,!M),p,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var M,z;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Wo.now();let x=!0;c3(n,u,d,h)||(x=!1,(Ka.instantAnimations||!p)&&(_==null||_(zd(n,a,i))),n[0]=n[n.length-1],qm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>p3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!g&&m3(w),j=(z=(M=w.motionValue)==null?void 0:M.owner)==null?void 0:z.current;let k;if(S)try{k=new r3({...w,element:j})}catch{k=new Ad(w)}else k=new Ad(w);k.finished.then(()=>{this.notifyFinished()}).catch(Ei),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),JC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class g3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return _1(this.animations,"duration")}get iterationDuration(){return _1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function _1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class y3 extends g3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Yb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const x3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function b3(t){const n=x3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Wb(t,n,i=1){const[a,c]=b3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return nb(d)?parseFloat(d):d}return Sp(c)?Wb(c,n,i+1):c}const v3={type:"spring",stiffness:500,damping:25,restSpeed:10},w3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),S3={type:"keyframes",duration:.8},C3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},k3=(t,{keyframes:n})=>n.length>2?S3:gl.has(t)?t.startsWith("scale")?w3(n[1]):v3:C3;function Fb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Dp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Fb(i,t):i}const j3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function M3(t){for(const n in t)if(!j3.has(n))return!0;return!1}const Np=(t,n,i,a={},c,u)=>d=>{const h=Dp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-oi(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};M3(h)||Object.assign(_,k3(t,_)),_.duration&&(_.duration=oi(_.duration)),_.repeatDelay&&(_.repeatDelay=oi(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(qm(_),_.delay===0&&(x=!0)),(Ka.instantAnimations||Ka.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,qm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=zd(_.keyframes,h);if(b!==void 0){Xn.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Ad(_):new _3(_)};function g1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Rp(t,n,i,a){if(typeof n=="function"){const[c,u]=g1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=g1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Sr(t,n,i){const a=t.getProps();return Rp(a,n,i!==void 0?i:a.custom,t)}const Xb=new Set(["width","height","top","left","right","bottom",..._l]),y1=30,T3=t=>!isNaN(parseFloat(t)),bc={current:void 0};class E3{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Wo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Wo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=T3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new bp);const a=this.events[n].add(i);return n==="change"?()=>{a(),Xn.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return bc.current&&bc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Wo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>y1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,y1);return ab(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qa(t,n){return new E3(t,n)}const Gm=t=>Array.isArray(t);function A3(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,Qa(i))}function D3(t){return Gm(t)?t[t.length-1]||0:t}function N3(t,n){const i=Sr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=D3(u[d]);A3(t,d,h)}}const oo=t=>!!(t&&t.getVelocity);function R3(t){return!!(oo(t)&&t.add)}function Km(t,n){const i=t.getValue("willChange");if(R3(i))return i.add(n);if(!i&&Ka.WillChange){const a=new Ka.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Bp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const B3="framerAppearId",qb="data-"+Bp(B3);function Gb(t){return t.props[qb]}function L3({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Lp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Fb(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),j=h[w];if(j===void 0||x&&L3(x,w))continue;const k={delay:i,...Dp(u||{},w)},M=S.get();if(M!==void 0&&!S.isAnimating()&&!Array.isArray(j)&&j===M&&!k.velocity){Xn.update(()=>S.set(j));continue}let z=!1;if(window.MotionHandoffAnimation){const $=Gb(t);if($){const F=window.MotionHandoffAnimation($,w,Xn);F!==null&&(k.startTime=F,z=!0)}}Km(t,w);const N=g!=null?g:t.shouldReduceMotion;S.start(Np(w,S,j,N&&Xb.has(w)?{type:!1}:k,t,z));const E=S.animation;E&&_.push(E)}if(d){const w=()=>Xn.update(()=>{d&&N3(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Qm(t,n,i={}){var p;const a=Sr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Lp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return O3(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function O3(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Qm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Yb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function z3(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Qm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Qm(t,n,i);else{const c=typeof n=="function"?Sr(t,n,i.custom):n;a=Promise.all(Lp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const $3={test:t=>t==="auto",parse:t=>t},Kb=t=>n=>n.test(t),Qb=[pl,At,Zi,Fa,fC,dC,$3],x1=t=>Qb.find(Kb(t));function I3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ob(t):!0}const P3=new Set(["brightness","contrast","saturate","opacity"]);function H3(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(Cp)||[];if(!a)return t;const c=i.replace(a,"");let u=P3.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const U3=/\b([a-z-]*)\(.*?\)/gu,Zm={...Ui,getAnimatableNone:t=>{const n=t.match(U3);return n?n.map(H3).join(" "):t}},Jm={...Ui,getAnimatableNone:t=>{const n=Ui.parse(t);return Ui.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},b1={...pl,transform:Math.round},V3={rotate:Fa,rotateX:Fa,rotateY:Fa,rotateZ:Fa,scale:od,scaleX:od,scaleY:od,scaleZ:od,skew:Fa,skewX:Fa,skewY:Fa,distance:At,translateX:At,translateY:At,translateZ:At,x:At,y:At,z:At,perspective:At,transformPerspective:At,opacity:Cc,originX:i1,originY:i1,originZ:At},Op={borderWidth:At,borderTopWidth:At,borderRightWidth:At,borderBottomWidth:At,borderLeftWidth:At,borderRadius:At,borderTopLeftRadius:At,borderTopRightRadius:At,borderBottomRightRadius:At,borderBottomLeftRadius:At,width:At,maxWidth:At,height:At,maxHeight:At,top:At,right:At,bottom:At,left:At,inset:At,insetBlock:At,insetBlockStart:At,insetBlockEnd:At,insetInline:At,insetInlineStart:At,insetInlineEnd:At,padding:At,paddingTop:At,paddingRight:At,paddingBottom:At,paddingLeft:At,paddingBlock:At,paddingBlockStart:At,paddingBlockEnd:At,paddingInline:At,paddingInlineStart:At,paddingInlineEnd:At,margin:At,marginTop:At,marginRight:At,marginBottom:At,marginLeft:At,marginBlock:At,marginBlockStart:At,marginBlockEnd:At,marginInline:At,marginInlineStart:At,marginInlineEnd:At,fontSize:At,backgroundPositionX:At,backgroundPositionY:At,...V3,zIndex:b1,fillOpacity:Cc,strokeOpacity:Cc,numOctaves:b1},Y3={...Op,color:Zs,backgroundColor:Zs,outlineColor:Zs,fill:Zs,stroke:Zs,borderColor:Zs,borderTopColor:Zs,borderRightColor:Zs,borderBottomColor:Zs,borderLeftColor:Zs,filter:Zm,WebkitFilter:Zm,mask:Jm,WebkitMask:Jm},Zb=t=>Y3[t],W3=new Set([Zm,Jm]);function Jb(t,n){let i=Zb(t);return W3.has(i)||(i=Ui),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const F3=new Set(["auto","none","0"]);function X3(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!F3.has(u)&&ml(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Jb(i,c)}class q3 extends Ep{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),Sp(x))){const b=Wb(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Xb.has(a)||n.length!==2)return;const[c,u]=n,d=x1(c),h=x1(u),p=o1(c),g=o1(u);if(p!==g&&Ga[a]){this.needsMeasurement=!0;return}if(d!==h)if(h1(d)&&h1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else Ga[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||I3(n[c]))&&a.push(c);a.length&&X3(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ga[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=Ga[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function zp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const e5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function md(t){return sb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:$p}=xb(queueMicrotask,!1),Pi={x:!1,y:!1};function t5(){return Pi.x||Pi.y}function G3(t){return t==="x"||t==="y"?Pi[t]?null:(Pi[t]=!0,()=>{Pi[t]=!1}):Pi.x||Pi.y?null:(Pi.x=Pi.y=!0,()=>{Pi.x=Pi.y=!1})}function n5(t,n){const i=zp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function K3(t){return!(t.pointerType==="touch"||t5())}function Q3(t,n,i={}){const[a,c,u]=n5(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",S)},x=k=>{g&&(g(k),g=void 0),_()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},j=k=>{if(!K3(k))return;p=!1;const M=n(d,k);typeof M=="function"&&(g=M,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",w,c)}),u}const s5=(t,n)=>n?t===n?!0:s5(t,n.parentElement):!1,Ip=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Z3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function J3(t){return Z3.has(t.tagName)||t.isContentEditable===!0}const ek=new Set(["INPUT","SELECT","TEXTAREA"]);function tk(t){return ek.has(t.tagName)||t.isContentEditable===!0}const pd=new WeakSet;function v1(t){return n=>{n.key==="Enter"&&t(n)}}function mm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const nk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=v1(()=>{if(pd.has(i))return;mm(i,"down");const c=v1(()=>{mm(i,"up")}),u=()=>mm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function w1(t){return Ip(t)&&!t5()}const S1=new WeakSet;function sk(t,n,i={}){const[a,c,u]=n5(t,i),d=h=>{const p=h.currentTarget;if(!w1(h)||S1.has(h))return;pd.add(p),i.stopPropagation&&S1.add(h);const g=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),pd.has(p)&&pd.delete(p),w1(w)&&typeof g=="function"&&g(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||s5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),md(h)&&(h.addEventListener("focus",g=>nk(g,c)),!J3(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function $d(t){return sb(t)&&"ownerSVGElement"in t}const _d=new WeakMap;let Xa;const o5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:$d(a)&&"getBBox"in a?a.getBBox()[n]:a[i],ok=o5("inline","width","offsetWidth"),ik=o5("block","height","offsetHeight");function ak({target:t,borderBoxSize:n}){var i;(i=_d.get(t))==null||i.forEach(a=>{a(t,{get width(){return ok(t,n)},get height(){return ik(t,n)}})})}function rk(t){t.forEach(ak)}function lk(){typeof ResizeObserver>"u"||(Xa=new ResizeObserver(rk))}function ck(t,n){Xa||lk();const i=zp(t);return i.forEach(a=>{let c=_d.get(a);c||(c=new Set,_d.set(a,c)),c.add(n),Xa==null||Xa.observe(a)}),()=>{i.forEach(a=>{const c=_d.get(a);c==null||c.delete(n),c!=null&&c.size||Xa==null||Xa.unobserve(a)})}}const gd=new Set;let ll;function uk(){ll=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};gd.forEach(n=>n(t))},window.addEventListener("resize",ll)}function dk(t){return gd.add(t),ll||uk(),()=>{gd.delete(t),!gd.size&&typeof ll=="function"&&(window.removeEventListener("resize",ll),ll=void 0)}}function C1(t,n){return typeof t=="function"?dk(t):ck(t,n)}function i5(t){return $d(t)&&t.tagName==="svg"}function fk(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Db(c,u,d);return n?h(a):h}const hk=[...Qb,Zs,Ui],mk=t=>hk.find(Kb(t)),k1=()=>({translate:0,scale:1,origin:0,originPoint:0}),cl=()=>({x:k1(),y:k1()}),j1=()=>({min:0,max:0}),Qs=()=>({x:j1(),y:j1()}),jc=new WeakMap;function Id(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Mc(t){return typeof t=="string"||Array.isArray(t)}const Pp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hp=["initial",...Pp];function Pd(t){return Id(t.animate)||Hp.some(n=>Mc(t[n]))}function a5(t){return!!(Pd(t)||t.variants)}function pk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(oo(c))t.addValue(a,c);else if(oo(u))t.addValue(a,Qa(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,Qa(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const ep={current:null},r5={current:!1},_k=typeof window<"u";function gk(){if(r5.current=!0,!!_k)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>ep.current=t.matches;t.addEventListener("change",n),n()}else ep.current=!1}const M1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function l5(t){Dd=t}function yk(){return Dd}class c5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ep,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Wo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Xn.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Pd(i),this.isVariantNode=a5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&oo(S)&&S.set(g[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,jc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(r5.current||gk(),this.shouldReduceMotion=ep.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),xa(this.notifyUpdate),xa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Vb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Hb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:oi(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=gl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&Xn.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qs()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<M1.length;a++){const c=M1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=pk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=Qa(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(nb(a)||ob(a))?a=parseFloat(a):!mk(a)&&Ui.test(i)&&(a=Jb(n,i)),this.setBaseTarget(n,oo(a)?a.get():a)),oo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Rp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!oo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new bp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){$p.render(this.render)}}class u5 extends c5{constructor(){super(...arguments),this.KeyframeResolver=q3}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;oo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Za{constructor(n){this.isMounted=!1,this.node=n}update(){}}function d5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function xk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function bk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function pm(t){return t===void 0||t===1}function tp({scale:t,scaleX:n,scaleY:i}){return!pm(t)||!pm(n)||!pm(i)}function gr(t){return tp(t)||f5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function f5(t){return T1(t.x)||T1(t.y)}function T1(t){return t&&t!=="0%"}function Nd(t,n,i){const a=t-i,c=n*a;return i+c}function E1(t,n,i,a,c){return c!==void 0&&(t=Nd(t,c,a)),Nd(t,i,a)+n}function np(t,n=0,i=1,a,c){t.min=E1(t.min,n,i,a,c),t.max=E1(t.max,n,i,a,c)}function h5(t,{x:n,y:i}){np(t.x,n.translate,n.scale,n.originPoint),np(t.y,i.translate,i.scale,i.originPoint)}const A1=.999999999999,D1=1.0000000000001;function vk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Qi(t.x,-u.scroll.offset.x),Qi(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,h5(t,d)),a&&gr(u.latestValues)&&yd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<D1&&n.x>A1&&(n.x=1),n.y<D1&&n.y>A1&&(n.y=1)}function Qi(t,n){t.min+=n,t.max+=n}function N1(t,n,i,a,c=.5){const u=os(t.min,t.max,c);np(t,n,i,u,a)}function R1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function yd(t,n,i){const a=i!=null?i:t;N1(t.x,R1(n.x,a.x),n.scaleX,n.scale,n.originX),N1(t.y,R1(n.y,a.y),n.scaleY,n.scale,n.originY)}function m5(t,n){return d5(bk(t.getBoundingClientRect(),n))}function wk(t,n,i){const a=m5(t,i),{scroll:c}=n;return c&&(Qi(a.x,c.offset.x),Qi(a.y,c.offset.y)),a}const Sk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ck=_l.length;function kk(t,n,i){let a="",c=!0;for(let u=0;u<Ck;u++){const d=_l[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=e5(h,Op[d]);if(!p){c=!1;const _=Sk[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Up(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(gl.has(p)){d=!0;continue}else if(vb(p)){c[p]=g;continue}else{const _=e5(g,Op[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=kk(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function p5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function B1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const cc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(At.test(t))t=parseFloat(t);else return t;const i=B1(t,n.target.x),a=B1(t,n.target.y);return`${i}% ${a}%`}},jk={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ui.parse(t);if(c.length>5)return a;const u=Ui.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=os(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},sp={borderRadius:{...cc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:cc,borderTopRightRadius:cc,borderBottomLeftRadius:cc,borderBottomRightRadius:cc,boxShadow:jk};function _5(t,{layout:n,layoutId:i}){return gl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!sp[t]||t==="opacity")}function Vp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(oo(a[h])||c&&oo(c[h])||_5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function Mk(t){return window.getComputedStyle(t)}class g5 extends u5{constructor(){super(...arguments),this.type="html",this.renderInstance=p5}readValueFromInstance(n,i){var a;if(gl.has(i))return(a=this.projection)!=null&&a.isProjecting?Vm(i):qC(n,i);{const c=Mk(n),u=(vb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return m5(n,i)}build(n,i,a){Up(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Vp(n,i,a)}}function Tk(t,n){return t in n}class Ek extends c5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(Tk(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return Qs()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const Ak={offset:"stroke-dashoffset",array:"stroke-dasharray"},Dk={offset:"strokeDashoffset",array:"strokeDasharray"};function Nk(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?Ak:Dk;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const Rk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function y5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var w,S;if(Up(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const j of Rk)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&Nk(x,c,u,d,!1)}const x5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),b5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Bk(t,n,i,a){p5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(x5.has(c)?c:Bp(c),n.attrs[c])}function v5(t,n,i){const a=Vp(t,n,i);for(const c in t)if(oo(t[c])||oo(n[c])){const u=_l.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class w5 extends u5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qs}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(gl.has(i)){const a=Zb(i);return a&&a.default||0}return i=x5.has(i)?i:Bp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return v5(n,i,a)}build(n,i,a){y5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){Bk(n,i,a,c)}mount(n){this.isSVGTag=b5(n.tagName),super.mount(n)}}const Lk=Hp.length;function S5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?S5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<Lk;i++){const a=Hp[i],c=t.props[a];(Mc(c)||c===!1)&&(n[a]=c)}return n}function C5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const Ok=[...Pp].reverse(),zk=Pp.length;function $k(t){return n=>Promise.all(n.map(({animation:i,options:a})=>z3(t,i,a)))}function Ik(t){let n=$k(t),i=L1(),a=!0,c=!1;const u=g=>(_,x)=>{var w;const b=Sr(t,x,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:j,...k}=b;_={..._,...k,...j}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=S5(t.parent)||{},b=[],w=new Set;let S={},j=1/0;for(let M=0;M<zk;M++){const z=Ok[M],N=i[z],E=_[z]!==void 0?_[z]:x[z],$=Mc(E),F=z===g?N.isActive:null;F===!1&&(j=M);let W=E===x[z]&&E!==_[z]&&$;if(W&&(a||c)&&t.manuallyAnimateOnMount&&(W=!1),N.protectedKeys={...S},!N.isActive&&F===null||!E&&!N.prevProp||Id(E)||typeof E=="boolean")continue;if(z==="exit"&&N.isActive&&F!==!0){N.prevResolvedValues&&(S={...S,...N.prevResolvedValues});continue}const H=Pk(N.prevProp,E);let K=H||z===g&&N.isActive&&!W&&$||M>j&&$,ae=!1;const re=Array.isArray(E)?E:[E];let Se=re.reduce(u(z),{});F===!1&&(Se={});const{prevResolvedValues:Ne={}}=N,ee={...Ne,...Se},fe=U=>{K=!0,w.has(U)&&(ae=!0,w.delete(U)),N.needsAnimating[U]=!0;const q=t.getValue(U);q&&(q.liveStyle=!1)};for(const U in ee){const q=Se[U],ge=Ne[U];if(S.hasOwnProperty(U))continue;let D=!1;Gm(q)&&Gm(ge)?D=!C5(q,ge):D=q!==ge,D?q!=null?fe(U):w.add(U):q!==void 0&&w.has(U)?fe(U):N.protectedKeys[U]=!0}N.prevProp=E,N.prevResolvedValues=Se,N.isActive&&(S={...S,...Se}),(a||c)&&t.blockInitialAnimation&&(K=!1);const L=W&&H;K&&(!L||ae)&&b.push(...re.map(U=>{const q={type:z};if(typeof U=="string"&&(a||c)&&!L&&t.manuallyAnimateOnMount&&t.parent){const{parent:ge}=t,D=Sr(ge,U);if(ge.enteringChildren&&D){const{delayChildren:ce}=D.transition||{};q.delay=Yb(ge.enteringChildren,t,ce)}}return{animation:U,options:q}}))}if(w.size){const M={};if(typeof _.initial!="boolean"){const z=Sr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);z&&z.transition&&(M.transition=z.transition)}w.forEach(z=>{const N=t.getBaseTarget(z),E=t.getValue(z);E&&(E.liveStyle=!0),M[z]=N!=null?N:null}),b.push({animation:M})}let k=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=L1(),c=!0}}}function Pk(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!C5(n,t):!1}function pr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function L1(){return{animate:pr(!0),whileInView:pr(),whileHover:pr(),whileTap:pr(),whileDrag:pr(),whileFocus:pr(),exit:pr()}}function op(t,n){t.min=n.min,t.max=n.max}function Ii(t,n){op(t.x,n.x),op(t.y,n.y)}function O1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const k5=1e-4,Hk=1-k5,Uk=1+k5,j5=.01,Vk=0-j5,Yk=0+j5;function Fo(t){return t.max-t.min}function Wk(t,n,i){return Math.abs(t-n)<=i}function z1(t,n,i,a=.5){t.origin=a,t.originPoint=os(n.min,n.max,t.origin),t.scale=Fo(i)/Fo(n),t.translate=os(i.min,i.max,t.origin)-t.originPoint,(t.scale>=Hk&&t.scale<=Uk||isNaN(t.scale))&&(t.scale=1),(t.translate>=Vk&&t.translate<=Yk||isNaN(t.translate))&&(t.translate=0)}function vc(t,n,i,a){z1(t.x,n.x,i.x,a?a.originX:void 0),z1(t.y,n.y,i.y,a?a.originY:void 0)}function $1(t,n,i,a=0){const c=a?os(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Fo(n)}function Fk(t,n,i,a){$1(t.x,n.x,i.x,a==null?void 0:a.x),$1(t.y,n.y,i.y,a==null?void 0:a.y)}function I1(t,n,i,a=0){const c=a?os(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Fo(n)}function Rd(t,n,i,a){I1(t.x,n.x,i.x,a==null?void 0:a.x),I1(t.y,n.y,i.y,a==null?void 0:a.y)}function P1(t,n,i,a,c){return t-=n,t=Nd(t,1/i,a),c!==void 0&&(t=Nd(t,1/c,a)),t}function Xk(t,n=0,i=1,a=.5,c,u=t,d=t){if(Zi.test(n)&&(n=parseFloat(n),n=os(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=os(u.min,u.max,a);t===u&&(h-=n),t.min=P1(t.min,n,i,h,c),t.max=P1(t.max,n,i,h,c)}function H1(t,n,[i,a,c],u,d){Xk(t,n[i],n[a],n[c],n.scale,u,d)}const qk=["x","scaleX","originX"],Gk=["y","scaleY","originY"];function U1(t,n,i,a){H1(t.x,n,qk,i?i.x:void 0,a?a.x:void 0),H1(t.y,n,Gk,i?i.y:void 0,a?a.y:void 0)}function V1(t){return t.translate===0&&t.scale===1}function M5(t){return V1(t.x)&&V1(t.y)}function Y1(t,n){return t.min===n.min&&t.max===n.max}function Kk(t,n){return Y1(t.x,n.x)&&Y1(t.y,n.y)}function W1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function T5(t,n){return W1(t.x,n.x)&&W1(t.y,n.y)}function F1(t){return Fo(t.x)/Fo(t.y)}function X1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function Ki(t){return[t("x"),t("y")]}function Qk(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const E5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Zk=E5.length,q1=t=>typeof t=="string"?parseFloat(t):t,G1=t=>typeof t=="number"||At.test(t);function Jk(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=os(0,(d=i.opacity)!=null?d:1,e8(a)),t.opacityExit=os((h=n.opacity)!=null?h:1,0,t8(a))):u&&(t.opacity=os((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<Zk;_++){const x=E5[_];let b=K1(n,x),w=K1(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||G1(b)===G1(w)?(t[x]=Math.max(os(q1(b),q1(w),a),0),(Zi.test(w)||Zi.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=os(n.rotate||0,i.rotate||0,a))}function K1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const e8=A5(0,.5,hb),t8=A5(.5,.95,Ei);function A5(t,n,i){return a=>a<t?0:a>n?1:i(hl(t,n,a))}function D5(t,n,i){const a=oo(t)?t:Qa(t);return a.start(Np("",a,n,i)),a.animation}function Tc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const n8=(t,n)=>t.depth-n.depth;class s8{constructor(){this.children=[],this.isDirty=!1}add(n){yp(this.children,n),this.isDirty=!0}remove(n){fl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(n8),this.isDirty=!1,this.children.forEach(n)}}function o8(t,n){const i=Wo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(xa(a),t(u-n))};return Xn.setup(a,!0),()=>xa(a)}function xd(t){return oo(t)?t.get():t}class i8{constructor(){this.members=[]}add(n){yp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(fl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(fl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const bd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_m=["","X","Y","Z"],a8=1e3;let r8=0;function gm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function N5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Gb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Xn,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&N5(a)}function R5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=r8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(u8),this.nodes.forEach(_8),this.nodes.forEach(g8),this.nodes.forEach(d8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new s8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new bp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=$d(d)&&!i5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;Xn.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=o8(b,250),bd.hasAnimatedSinceResize&&(bd.hasAnimatedSinceResize=!1,this.nodes.forEach(J1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||w8,{onLayoutAnimationStart:j,onLayoutAnimationComplete:k}=g.getProps(),M=!this.targetLayout||!T5(this.targetLayout,w),z=!x&&b;if(this.options.layoutRoot||this.resumeFrom||z||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...Dp(S,"layout"),onPlay:j,onComplete:k};(g.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(_,z)}else x||J1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),xa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(y8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&N5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(h8),this.nodes.forEach(Q1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Z1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(m8),this.nodes.forEach(p8),this.nodes.forEach(l8),this.nodes.forEach(c8)):this.nodes.forEach(Z1),this.clearAllSnapshots();const h=Wo.now();Co.delta=Ji(0,1e3/60,h-Co.timestamp),Co.timestamp=h,Co.isProcessing=!0,lm.update.process(Co),lm.preRender.process(Co),lm.render.process(Co),Co.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(f8),this.sharedNodes.forEach(x8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Xn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Xn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Fo(this.snapshot.measuredBox.x)&&!Fo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Qs()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!M5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||gr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),S8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return Qs();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(C8))){const{scroll:_}=this.root;_&&(Qi(h.x,_.offset.x),Qi(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=Qs();if(Ii(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Ii(h,d),Qi(h.x,x.offset.x),Qi(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||Qs();Ii(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Qi(g.x,-w.scroll.offset.x),Qi(g.y,-w.scroll.offset.y)),gr(w.latestValues)&&yd(g,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return gr(this.latestValues)&&yd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=Qs();Ii(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!gr(_.latestValues))continue;let x;_.instance&&(tp(_.latestValues)&&_.updateSnapshot(),x=Qs(),Ii(x,_.measurePageBox())),U1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return gr(this.latestValues)&&U1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Co.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=Co.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qs(),this.targetWithTransforms=Qs()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Fk(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ii(this.target,this.layout.layoutBox),h5(this.target,this.targetDelta)):Ii(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||tp(this.parent.latestValues)||f5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qs(),this.relativeTargetOrigin=Qs(),Rd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Ii(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Co.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Ii(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;vk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Qs());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(O1(this.prevProjectionDelta.x,this.projectionDelta.x),O1(this.prevProjectionDelta.y,this.projectionDelta.y)),vc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!X1(this.projectionDelta.x,this.prevProjectionDelta.x)||!X1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=cl(),this.projectionDelta=cl(),this.projectionDeltaWithTransform=cl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=cl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=Qs(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=w!==S,k=this.getStack(),M=!k||k.members.length<=1,z=!!(j&&!M&&this.options.crossfade===!0&&!this.path.some(v8));this.animationProgress=0;let N;this.mixTargetDelta=E=>{const $=E/1e3;ex(x.x,d.x,$),ex(x.y,d.y,$),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Rd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),b8(this.relativeTarget,this.relativeTargetOrigin,b,$),N&&Kk(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=Qs()),Ii(N,this.relativeTarget)),j&&(this.animationValues=_,Jk(_,g,this.latestValues,$,z,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(xa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Xn.update(()=>{bd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Qa(0)),this.motionValue.jump(0,!1),this.currentAnimation=D5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(a8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&B5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Qs();const x=Fo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Fo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Ii(h,p),yd(h,_),vc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new i8),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&gm("z",d,g,this.animationValues);for(let _=0;_<_m.length;_++)gm(`rotate${_m[_]}`,d,g,this.animationValues),gm(`skew${_m[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!gr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=Qk(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?(j=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const k in sp){if(_[k]===void 0)continue;const{correct:M,applyTo:z,isCSSVariable:N}=sp[k],E=x==="none"?_[k]:M(_[k],g);if(z){const $=z.length;for(let F=0;F<$;F++)d[z[F]]=E}else N?this.options.visualElement.renderState.vars[k]=E:d[k]=E}this.options.layoutId&&(d.pointerEvents=g===this?xd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Q1),this.root.sharedNodes.clear()}}}function l8(t){t.updateLayout()}function c8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")Ki(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Fo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";op(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else B5(u,n.layoutBox,a)&&Ki(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Fo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=cl();vc(h,a,n.layoutBox);const p=cl();d?vc(p,t.applyTransform(c,!0),n.measuredBox):vc(p,a,n.layoutBox);const g=!M5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,j=Qs();Rd(j,n.layoutBox,b.layoutBox,S);const k=Qs();Rd(k,a,w.layoutBox,S),T5(j,k)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function u8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function d8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function f8(t){t.clearSnapshot()}function Q1(t){t.clearMeasurements()}function h8(t){t.isLayoutDirty=!0,t.updateLayout()}function Z1(t){t.isLayoutDirty=!1}function m8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function p8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function J1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function _8(t){t.resolveTargetDelta()}function g8(t){t.calcProjection()}function y8(t){t.resetSkewAndRotation()}function x8(t){t.removeLeadSnapshot()}function ex(t,n,i){t.translate=os(n.translate,0,i),t.scale=os(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function tx(t,n,i,a){t.min=os(n.min,i.min,a),t.max=os(n.max,i.max,a)}function b8(t,n,i,a){tx(t.x,n.x,i.x,a),tx(t.y,n.y,i.y,a)}function v8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const w8={duration:.45,ease:[.4,0,.1,1]},nx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),sx=nx("applewebkit/")&&!nx("chrome/")?Math.round:Ei;function ox(t){t.min=sx(t.min),t.max=sx(t.max)}function S8(t){ox(t.x),ox(t.y)}function B5(t,n,i){return t==="position"||t==="preserve-aspect"&&!Wk(F1(n),F1(i),.2)}function C8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const k8=R5({attachResizeListener:(t,n)=>Tc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ym={current:void 0},L5=R5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ym.current){const t=new k8({});t.mount(window),t.setOptions({layoutScroll:!0}),ym.current=t}return ym.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Hd=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function ix(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function j8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=ix(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():ix(t[c],null)}}}}function M8(...t){return y.useCallback(j8(...t),t)}class T8 extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(md(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=md(a)&&a.offsetWidth||0,u=md(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function E8({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Hd),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=M8(h,_);return y.useInsertionEffect(()=>{const{width:S,height:j,top:k,left:M,right:z,bottom:N}=p.current;if(n||u===!1||!h.current||!S||!j)return;const E=i==="left"?`left: ${M}`:`right: ${z}`,$=a==="bottom"?`bottom: ${N}`:`top: ${k}`;h.current.dataset.motionPopId=d;const F=document.createElement("style");g&&(F.nonce=g);const W=c!=null?c:document.head;return W.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${j}px !important;
            ${E}px !important;
            ${$}px !important;
          }
        `),()=>{var H;(H=h.current)==null||H.removeAttribute("data-motion-pop-id"),W.contains(F)&&W.removeChild(F)}},[n]),l.jsx(T8,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const A8=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Dc(D8),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const j of _.values())if(!j)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),y.useMemo(()=>{_.forEach((S,j)=>_.set(j,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(E8,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),l.jsx(Od.Provider,{value:w,children:t})};function D8(){return new Map}function O5(t=!0){const n=y.useContext(Od);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const id=t=>t.key||"";function ax(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Ud=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=O5(d),b=y.useMemo(()=>ax(t),[t]),w=d&&!_?[]:b.map(id),S=y.useRef(!0),j=y.useRef(b),k=Dc(()=>new Map),M=y.useRef(new Set),[z,N]=y.useState(b),[E,$]=y.useState(b);gp(()=>{S.current=!1,j.current=b;for(let H=0;H<E.length;H++){const K=id(E[H]);w.includes(K)?(k.delete(K),M.current.delete(K)):k.get(K)!==!0&&k.set(K,!1)}},[E,w.length,w.join("-")]);const F=[];if(b!==z){let H=[...b];for(let K=0;K<E.length;K++){const ae=E[K],re=id(ae);w.includes(re)||(H.splice(K,0,ae),F.push(ae))}return u==="wait"&&F.length&&(H=F),$(ax(H)),N(b),null}const{forceRender:W}=y.useContext(_p);return l.jsx(l.Fragment,{children:E.map(H=>{const K=id(H),ae=d&&!_?!1:b===E||w.includes(K),re=()=>{if(M.current.has(K))return;if(k.has(K))M.current.add(K),k.set(K,!0);else return;let Se=!0;k.forEach(Ne=>{Ne||(Se=!1)}),Se&&(W==null||W(),$(j.current),d&&(x==null||x()),a&&a())};return l.jsx(A8,{isPresent:ae,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:ae?void 0:re,anchorX:h,anchorY:p,children:H},K)})})},z5=y.createContext({strict:!1}),rx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let lx=!1;function N8(){if(lx)return;const t={};for(const n in rx)t[n]={isEnabled:i=>rx[n].some(a=>!!i[a])};l5(t),lx=!0}function $5(){return N8(),yk()}function R8(t){const n=$5();for(const i in t)n[i]={...n[i],...t[i]};l5(n)}const B8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Bd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||B8.has(t)}let I5=t=>!Bd(t);function L8(t){typeof t=="function"&&(I5=n=>n.startsWith("on")?!Bd(n):t(n))}try{L8(require("@emotion/is-prop-valid").default)}catch{}function O8(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||oo(t[c])||(I5(c)||i===!0&&Bd(c)||!n&&!Bd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Vd=y.createContext({});function z8(t,n){if(Pd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Mc(i)?i:void 0,animate:Mc(a)?a:void 0}}return t.inherit!==!1?n:{}}function $8(t){const{initial:n,animate:i}=z8(t,y.useContext(Vd));return y.useMemo(()=>({initial:n,animate:i}),[cx(n),cx(i)])}function cx(t){return Array.isArray(t)?t.join(" "):t}const Yp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function P5(t,n,i){for(const a in n)!oo(n[a])&&!_5(a,i)&&(t[a]=n[a])}function I8({transformTemplate:t},n){return y.useMemo(()=>{const i=Yp();return Up(i,n,t),Object.assign({},i.vars,i.style)},[n])}function P8(t,n){const i=t.style||{},a={};return P5(a,i,t),Object.assign(a,I8(t,n)),a}function H8(t,n){const i={},a=P8(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const H5=()=>({...Yp(),attrs:{}});function U8(t,n,i,a){const c=y.useMemo(()=>{const u=H5();return y5(u,n,b5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};P5(u,t.style,t),c.style={...u,...c.style}}return c}const V8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wp(t){return typeof t!="string"||t.includes("-")?!1:!!(V8.indexOf(t)>-1||/[A-Z]/u.test(t))}function Y8(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Wp(t))?U8:H8)(n,a,c,t),g=O8(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>oo(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function W8({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:F8(i,a,c,t),renderState:n()}}function F8(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=xd(u[b]);let{initial:d,animate:h}=t;const p=Pd(t),g=a5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Id(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Rp(t,b[w]);if(S){const{transitionEnd:j,transition:k,...M}=S;for(const z in M){let N=M[z];if(Array.isArray(N)){const E=_?N.length-1:0;N=N[E]}N!==null&&(c[z]=N)}for(const z in j)c[z]=j[z]}}}return c}const U5=t=>(n,i)=>{const a=y.useContext(Vd),c=y.useContext(Od),u=()=>W8(t,n,a,c);return i?u():Dc(u)},X8=U5({scrapeMotionValuesFromProps:Vp,createRenderState:Yp}),q8=U5({scrapeMotionValuesFromProps:v5,createRenderState:H5}),G8=Symbol.for("motionComponentSymbol");function K8(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const V5=y.createContext({});function il(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Q8(t,n,i,a,c,u){var N,E;const{visualElement:d}=y.useContext(Vd),h=y.useContext(z5),p=y.useContext(Od),g=y.useContext(Hd),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,j=y.useContext(V5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Z8(b.current,i,c,j);const k=y.useRef(!1);y.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const M=i[qb],z=y.useRef(!!M&&typeof window<"u"&&!((N=window.MotionHandoffIsComplete)!=null&&N.call(window,M))&&((E=window.MotionHasOptimisedAnimation)==null?void 0:E.call(window,M)));return gp(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),z.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!z.current&&S.animationState&&S.animationState.animateChanges(),z.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,M)}),z.current=!1),S.enteringChildren=void 0)}),S}function Z8(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:Y5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&il(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function Y5(t){if(t)return t.options.allowProjection!==!1?t.projection:Y5(t.parent)}function xm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&R8(a);const u=i?i==="svg":Wp(t),d=u?q8:X8;function h(x,b){let w;const S={...y.useContext(Hd),...x,layoutId:J8(x)},{isStatic:j}=S,k=$8(x),M=d(x,j);if(!j&&typeof window<"u"){ej();const z=tj(S);w=z.MeasureLayout,k.visualElement=Q8(t,M,S,c,z.ProjectionNode,u)}return l.jsxs(Vd.Provider,{value:k,children:[w&&k.visualElement?l.jsx(w,{visualElement:k.visualElement,...S}):null,Y8(t,x,K8(M,k.visualElement,b),M,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[G8]=t,p}function J8({layoutId:t}){const n=y.useContext(_p).id;return n&&t!==void 0?n+"-"+t:t}function ej(t,n){y.useContext(z5).strict}function tj(t){const n=$5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function nj(t,n){if(typeof Proxy>"u")return xm;const i=new Map,a=(u,d)=>xm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,xm(d,void 0,t,n)),i.get(d))})}const sj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Wp(t))?new w5(n):new g5(n,{allowProjection:t!==y.Fragment})};class oj extends Za{constructor(n){super(n),n.animationState||(n.animationState=Ik(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Id(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let ij=0;class aj extends Za{constructor(){super(...arguments),this.id=ij++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Sr(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const rj={animation:{Feature:oj},exit:{Feature:aj}};function Lc(t){return{point:{x:t.pageX,y:t.pageY}}}const lj=t=>n=>Ip(n)&&t(n,Lc(n));function wc(t,n,i,a){return Tc(t,n,lj(i),a)}const W5=({current:t})=>t?t.ownerDocument.defaultView:null,ux=(t,n)=>Math.abs(t-n);function cj(t,n){const i=ux(t.x,n.x),a=ux(t.y,n.y);return Math.sqrt(i**2+a**2)}const dx=new Set(["auto","scroll"]);class F5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ad(this.lastRawMoveEventInfo,this.transformPagePoint));const w=bm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,j=cj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!j)return;const{point:k}=w,{timestamp:M}=Co;this.history.push({...k,timestamp:M});const{onStart:z,onMove:N}=this.handlers;S||(z&&z(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ad(S,this.transformPagePoint),Xn.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:j,onSessionEnd:k,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=bm(w.type==="pointercancel"?this.lastMoveEventInfo:ad(S,this.transformPagePoint),this.history);this.startEvent&&j&&j(w,z),k&&k(w,z)},!Ip(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Lc(n),g=ad(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=Co;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,bm(g,this.history)),this.removeListeners=Nc(wc(this.contextWindow,"pointermove",this.handlePointerMove),wc(this.contextWindow,"pointerup",this.handlePointerUp),wc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(dx.has(a.overflowX)||dx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),Xn.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),xa(this.updatePoint)}}function ad(t,n){return n?{point:n(t.point)}:t}function fx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function bm({point:t},n){return{point:t,delta:fx(t,X5(n)),offset:fx(t,uj(n)),velocity:dj(n,.1)}}function uj(t){return t[0]}function X5(t){return t[t.length-1]}function dj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=X5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>oi(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>oi(n)*2&&(a=t[1]);const u=Ti(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function fj(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?os(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?os(i,t,a.max):Math.min(t,i)),t}function hx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function hj(t,{top:n,left:i,bottom:a,right:c}){return{x:hx(t.x,i,c),y:hx(t.y,n,a)}}function mx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function mj(t,n){return{x:mx(t.x,n.x),y:mx(t.y,n.y)}}function pj(t,n){let i=.5;const a=Fo(t),c=Fo(n);return c>a?i=hl(n.min,n.max-a,t.min):a>c&&(i=hl(t.min,t.max-c,n.min)),Ji(0,1,i)}function _j(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ip=.35;function gj(t=ip){return t===!1?t=0:t===!0&&(t=ip),{x:px(t,"left","right"),y:px(t,"top","bottom")}}function px(t,n,i){return{min:_x(t,n),max:_x(t,i)}}function _x(t,n){return typeof t=="number"?t:t[n]||0}const yj=new WeakMap;class xj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qs(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Lc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:j}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=G3(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ki(M=>{let z=this.getAxisMotionValue(M).get()||0;if(Zi.test(z)){const{projection:N}=this.visualElement;if(N&&N.layout){const E=N.layout.layoutBox[M];E&&(z=Fo(E)*(parseFloat(z)/100))}}this.originPoint[M]=z}),j&&Xn.update(()=>j(x,b),!1,!0),Km(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:j,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:M}=b;if(S&&this.currentDirection===null){this.currentDirection=vj(M),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),k&&Xn.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new F5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:W5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Xn.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!rd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=fj(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&il(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=hj(a.layoutBox,n):this.constraints=!1,this.elastic=gj(i),c!==this.constraints&&!il(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Ki(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=_j(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!il(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=wk(a,c.root,this.visualElement.getTransformPagePoint());let d=mj(c.layout.layoutBox,u);if(i){const h=i(xk(d));this.hasMutatedConstraints=!!h,h&&(d=d5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Ki(_=>{if(!rd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Km(this.visualElement,n),a.start(Np(n,a,0,i,this.visualElement,!1))}stopAnimation(){Ki(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Ki(i=>{const{drag:a}=this.getProps();if(!rd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-os(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!il(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Ki(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=pj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ki(d=>{if(!rd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(os(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;yj.set(this.visualElement,this);const n=this.visualElement.current,i=wc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,w=b!==n&&tk(b);_&&x&&!w&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();il(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=bj(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Xn.read(c);const h=Tc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(Ki(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ip,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function gx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function bj(t,n,i){const a=C1(t,gx(i)),c=C1(n,gx(i));return()=>{a(),c()}}function rd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function vj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class wj extends Za{constructor(n){super(n),this.removeGroupControls=Ei,this.removeListeners=Ei,this.controls=new xj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ei}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const vm=t=>(n,i)=>{t&&Xn.update(()=>t(n,i),!1,!0)};class Sj extends Za{constructor(){super(...arguments),this.removePointerDownListener=Ei}onPointerDown(n){this.session=new F5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:W5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:vm(n),onStart:vm(i),onMove:vm(a),onEnd:(u,d)=>{delete this.session,c&&Xn.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=wc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let wm=!1;class Cj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),wm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),bd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),wm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||Xn.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),$p.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;wm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function q5(t){const[n,i]=O5(),a=y.useContext(_p);return l.jsx(Cj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(V5),isPresent:n,safeToRemove:i})}const kj={pan:{Feature:Sj},drag:{Feature:wj,ProjectionNode:L5,MeasureLayout:q5}};function yx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&Xn.postRender(()=>u(n,Lc(n)))}class jj extends Za{mount(){const{current:n}=this.node;n&&(this.unmount=Q3(n,(i,a)=>(yx(this.node,a,"Start"),c=>yx(this.node,c,"End"))))}unmount(){}}class Mj extends Za{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Nc(Tc(this.node.current,"focus",()=>this.onFocus()),Tc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function xx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&Xn.postRender(()=>u(n,Lc(n)))}class Tj extends Za{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=sk(n,(c,u)=>(xx(this.node,u,"Start"),(d,{success:h})=>xx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ap=new WeakMap,Sm=new WeakMap,Ej=t=>{const n=ap.get(t.target);n&&n(t)},Aj=t=>{t.forEach(Ej)};function Dj({root:t,...n}){const i=t||document;Sm.has(i)||Sm.set(i,{});const a=Sm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(Aj,{root:t,...n})),a[c]}function Nj(t,n,i){const a=Dj(n);return ap.set(t,i),a.observe(t),()=>{ap.delete(t),a.unobserve(t)}}const Rj={some:0,all:1};class Bj extends Za{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:Rj[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(g)};this.stopObserver=Nj(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Lj(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Lj({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const Oj={inView:{Feature:Bj},tap:{Feature:Tj},focus:{Feature:Mj},hover:{Feature:jj}},zj={layout:{ProjectionNode:L5,MeasureLayout:q5}},$j={...rj,...Oj,...kj,...zj},si=nj($j,sj);function rp(t){const n=Dc(()=>Qa(t)),{isStatic:i}=y.useContext(Hd);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function G5(t,n){const i=rp(n()),a=()=>i.set(n());return a(),gp(()=>{const c=()=>Xn.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),xa(a)}}),i}function Ij(t){bc.current=[],t();const n=G5(bc.current,t);return bc.current=void 0,n}function ld(t,n,i,a){if(typeof t=="function")return Ij(t);const u=typeof n=="function"?n:fk(n,i,a),d=Array.isArray(t)?bx(t,u):bx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function bx(t,n){const i=Dc(()=>[]);return G5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Fp(t){return typeof t=="object"&&!Array.isArray(t)}function K5(t,n,i,a){return t==null?[]:typeof t=="string"&&Fp(n)?zp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function Pj(t,n,i){return t*(n+1)}function vx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function Hj(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(fl(t,c),a--)}}function Uj(t,n,i,a,c,u){Hj(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:os(c,u,a[d]),easing:gb(i,d)})}function Vj(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function Yj(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const Wj="easeInOut";function Fj(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){g.set(S,x);continue}else if(!Array.isArray(S)){g.set(S.name,vx(x,S.at,_,g));continue}let[j,k,M={}]=S;M.at!==void 0&&(x=vx(x,M.at,_,g));let z=0;const N=(E,$,F,W=0,H=0)=>{const K=Xj(E),{delay:ae=0,times:re=Rb(K),type:Se=n.type||"keyframes",repeat:Ne,repeatType:ee,repeatDelay:fe=0,...L}=$;let{ease:ne=n.ease||"easeOut",duration:U}=$;const q=typeof ae=="function"?ae(W,H):ae,ge=K.length,D=Ap(Se)?Se:c==null?void 0:c[Se||"keyframes"];if(ge<=2&&D){let Ee=100;if(ge===2&&Kj(K)){const mt=K[1]-K[0];Ee=Math.abs(mt)}const Ue={...n,...L};U!==void 0&&(Ue.duration=oi(U));const Me=Eb(Ue,Ee,D);ne=Me.ease,U=Me.duration}U!=null||(U=u);const ce=x+q;re.length===1&&re[0]===0&&(re[1]=1);const Z=re.length-K.length;if(Z>0&&Nb(re,Z),K.length===1&&K.unshift(null),Ne){U=Pj(U,Ne);const Ee=[...K],Ue=[...re];ne=Array.isArray(ne)?[...ne]:[ne];const Me=[...ne];for(let mt=0;mt<Ne;mt++){K.push(...Ee);for(let et=0;et<Ee.length;et++)re.push(Ue[et]+(mt+1)),ne.push(et===0?"linear":gb(Me,et-1))}Vj(re,Ne)}const he=ce+U;Uj(F,K,ne,re,ce,he),z=Math.max(q+U,z),b=Math.max(he,b)};if(oo(j)){const E=wx(j,h);N(k,M,Sx("default",E))}else{const E=K5(j,k,a,p),$=E.length;for(let F=0;F<$;F++){k=k,M=M;const W=E[F],H=wx(W,h);for(const K in k)N(k[K],qj(M,K),Sx(K,H),F,$)}}_=x,x+=z}return h.forEach((w,S)=>{for(const j in w){const k=w[j];k.sort(Yj);const M=[],z=[],N=[];for(let W=0;W<k.length;W++){const{at:H,value:K,easing:ae}=k[W];M.push(K),z.push(hl(0,b,H)),N.push(ae||"easeOut")}z[0]!==0&&(z.unshift(0),M.unshift(M[0]),N.unshift(Wj)),z[z.length-1]!==1&&(z.push(1),M.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const E=d.get(S);E.keyframes[j]=M;const{type:$,...F}=n;E.transition[j]={...F,duration:b,ease:N,times:z,...i}}}),d}function wx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Sx(t,n){return n[t]||(n[t]=[]),n[t]}function Xj(t){return Array.isArray(t)?t:[t]}function qj(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const Gj=t=>typeof t=="number",Kj=t=>t.every(Gj);function Qj(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=$d(t)&&!i5(t)?new w5(n):new g5(n);i.mount(t),jc.set(t,i)}function Zj(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new Ek(n);i.mount(t),jc.set(t,i)}function Jj(t,n){return oo(t)||typeof t=="number"||typeof t=="string"&&!Fp(n)}function Q5(t,n,i,a){const c=[];if(Jj(t,n))c.push(D5(t,Fp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=K5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?Qj:Zj;jc.has(p)||g(p);const _=jc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Lp(_,{...n,transition:x},{}))}}return c}function eM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=Qa(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return Fj(c,n,i,{spring:kc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...Q5(p,d,h))}),a}function tM(t){return Array.isArray(t)&&t.some(Array.isArray)}function nM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(tM(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=eM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=Q5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new y3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{fl(n.animations,g)})),g}return a}const Cx=nM();var sM=Object.freeze({}),oM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const j=w.slice(0,-7),k=d.get(j);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:sM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},on=new oM;function iM(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(on.registerPanel(c,t,u.current,p.current),()=>on.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}on.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>on.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>on.subscribe(c,b),()=>on.getValues(c),()=>on.getValues(c));return Z5(n,x,"")}function Z5(t,n,i){var c,u,d,h,p,g,_,x,b,w;const a={};for(const[S,j]of Object.entries(t)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[S]=(c=n[k])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[S]=(u=n[k])!=null?u:j;else if(aM(j)||rM(j))a[S]=(d=n[k])!=null?d:j;else if(lM(j))a[S]=(h=n[k])!=null?h:j;else if(cM(j)){const M=(p=j.default)!=null?p:fM(j.options);a[S]=(g=n[k])!=null?g:M}else uM(j)?a[S]=(x=(_=n[k])!=null?_:j.default)!=null?x:"#000000":dM(j)?a[S]=(w=(b=n[k])!=null?b:j.default)!=null?w:"":typeof j=="object"&&j!==null&&(a[S]=Z5(j,n,k))}return a}function yl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function aM(t){return yl(t,"spring")}function rM(t){return yl(t,"easing")}function lM(t){return yl(t,"action")}function cM(t){return yl(t,"select")&&"options"in t&&Array.isArray(t.options)}function uM(t){return yl(t,"color")}function dM(t){return yl(t,"text")}function fM(t){const n=t[0];return typeof n=="string"?n:n.value}function lp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function vd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(lp(n)))}function uc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function dc(t,n,i,a,c){var g,_;const u=on.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));on.updateValue(t,n,vd(p,a))}function hM(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function cd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Cm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function J5(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=J5(i.children,n);if(a)return a}}return null}var ud=4;function mM(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function pM(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=mM(n);return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function _M(t){return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function e2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var t2=y.createContext({activePanelId:null,activePath:null});function gM({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=on.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((g=S.interaction)!=null?g:"scroll")!==p)continue;const j=J5(b.controls,w);if(j&&j.type==="slider")return{panelId:b.id,path:w,control:j,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=j=>{if(cd())return;const k=j.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const E=h("scroll")||h("drag")||h("move");if(E&&E.control.type==="slider"){j.preventDefault();const $=k==="arrowright"||k==="arrowup"?1:-1,F=uc(E.control,E.shortcut);dc(E.panelId,E.path,E.control,F,$);return}}const M=a.current.has(k);a.current.add(k);const z=Cm(j),N=on.resolveShortcutTarget(k,z);if(N&&(i({activePanelId:N.panelId,activePath:N.path}),!M&&N.control.type==="toggle")){const E=on.getValue(N.panelId,N.path);on.updateValue(N.panelId,N.path,!E)}M||(u.current=null,d.current=0)},g=j=>{const k=j.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let M=!1;for(const z of a.current){const N=Cm(j),E=on.resolveShortcutTarget(z,N);if(E){i({activePanelId:E.panelId,activePath:E.path}),M=!0;break}}M||i({activePanelId:null,activePath:null})}},_=j=>{var z,N;if(cd())return;const k=Cm(j);if(a.current.size>0)for(const E of a.current){const $=on.resolveShortcutTarget(E,k);if(!$)continue;const{panelId:F,path:W,control:H}=$;if(((N=(z=H.shortcut)==null?void 0:z.interaction)!=null?N:"scroll")!=="scroll"||H.type!=="slider")continue;j.preventDefault();const ae=uc(H,H.shortcut),re=j.deltaY>0?-1:1;dc(F,W,H,ae,re);return}const M=on.resolveScrollOnlyTargets();for(const{panelId:E,path:$,control:F,shortcut:W}of M){if(F.type!=="slider")continue;j.preventDefault();const H=uc(F,W),K=j.deltaY>0?-1:1;dc(E,$,F,H,K);return}},x=j=>{if(cd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=j=>{if(cd()||a.current.size===0)return;if(c.current){const M=h("drag");if(M&&u.current!==null){const z=j.clientX-u.current;u.current=j.clientX,d.current+=z;const N=uc(M.control,M.shortcut),E=Math.trunc(d.current/ud);E!==0&&(d.current-=E*ud,dc(M.panelId,M.path,M.control,N,E))}return}const k=h("move");if(k){if(u.current===null){u.current=j.clientX;return}const M=j.clientX-u.current;u.current=j.clientX,d.current+=M;const z=uc(k.control,k.shortcut),N=Math.trunc(d.current/ud);N!==0&&(d.current-=N*ud,dc(k.panelId,k.path,k.control,z,N))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(t2.Provider,{value:n,children:t})}var Xp="M6 9.5L12 15.5L18 9.5",yM="M5 12.75L10 19L19 5",km={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},xM=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],bM=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],kx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Ld({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,w]=y.useState(void 0),[S,j]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const z=()=>j(window.innerHeight);return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[a]),y.useEffect(()=>{const z=x.current;if(!z)return;const N=new ResizeObserver(()=>{if(h){const E=z.offsetHeight;w($=>$===E?$:E)}});return N.observe(z),()=>N.disconnect()},[h]);const k=()=>{if(c&&a)return;const z=!h;p(z),_(!z),u==null||u(z)},M=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:kx.path,fill:"currentColor"}),kx.circles.map((z,N)=>l.jsx("circle",{cx:z.cx,cy:z.cy,r:z.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},N))]}),!a&&l.jsx(si.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Xp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:z=>z.stopPropagation(),children:d})]}),l.jsx(Ud,{initial:!1,children:h&&l.jsx(si.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:M});const z=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(si.div,{className:"dialkit-panel-inner",style:z,onClick:h?void 0:k,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:M})}return M}var vM=3,wM=32,SM=200,CM=8;function Ro({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var tt;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,j]=y.useState(!1),[k,M]=y.useState(!1),[z,N]=y.useState(!1),[E,$]=y.useState(!1),[F,W]=y.useState(!1),[H,K]=y.useState(!1),[ae,re]=y.useState(""),Se=y.useRef(null),Ne=y.useRef(null),ee=y.useRef(!0),fe=y.useRef(null),L=y.useRef(null),ne=y.useRef(1),U=(n-a)/(c-a)*100,q=S||z,ge=rp(U),D=ld(ge,P=>`${P}%`),ce=ld(ge,P=>`max(5px, calc(${P}% - 9px))`),Z=rp(0),he=ld(Z,P=>`calc(100% + ${Math.abs(P)}px)`),Ee=ld(Z,P=>P<0?P:0);y.useEffect(()=>{!S&&!fe.current&&ge.jump(U)},[U,S,ge]);const Ue=y.useCallback(P=>{const te=L.current;if(!te)return n;const ve=(P-te.left)/ne.current,Ye=g.current?g.current.offsetWidth:te.width,Xe=Math.max(0,Math.min(1,ve/Ye)),Te=a+Xe*(c-a);return Math.max(a,Math.min(c,Te))},[a,c,n]),Me=y.useCallback(P=>(P-a)/(c-a)*100,[a,c]),mt=y.useCallback((P,te)=>{const Q=L.current;if(!Q)return 0;const ve=te<0?Q.left-P:P-Q.right,Ye=Math.max(0,ve-wM);return te*CM*Math.sqrt(Math.min(Ye/SM,1))},[]),et=y.useCallback(P=>{if(!H&&(P.preventDefault(),P.target.setPointerCapture(P.pointerId),Ne.current={x:P.clientX,y:P.clientY},ee.current=!0,j(!0),g.current)){L.current=g.current.getBoundingClientRect();const te=g.current.offsetWidth;ne.current=L.current.width/te}},[H]),ze=y.useCallback(P=>{if(!S||!Ne.current)return;const te=P.clientX-Ne.current.x,Q=P.clientY-Ne.current.y,ve=Math.sqrt(te*te+Q*Q);if(ee.current&&ve>vM&&(ee.current=!1,M(!0)),!ee.current){const Ye=L.current;Ye&&(P.clientX<Ye.left?Z.jump(mt(P.clientX,-1)):P.clientX>Ye.right?Z.jump(mt(P.clientX,1)):Z.jump(0));const Xe=Ue(P.clientX),Te=Me(Xe);fe.current&&(fe.current.stop(),fe.current=null),ge.jump(Te),i(vd(Xe,u))}},[S,Ue,Me,i,ge,Z,mt]),ct=y.useCallback(P=>{if(S){if(ee.current){const te=Ue(P.clientX),ve=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((te-a)/u)*u)):hM(te,a,c),Ye=Me(ve);fe.current&&fe.current.stop(),fe.current=Cx(ge,Ye,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{fe.current=null}}),i(vd(ve,u))}Z.get()!==0&&Cx(Z,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),M(!1),Ne.current=null}},[S,Ue,Me,i,a,c,ge,Z]);y.useEffect(()=>(E&&!H&&!F?Se.current=setTimeout(()=>{W(!0)},800):!E&&!H&&(Se.current&&(clearTimeout(Se.current),Se.current=null),W(!1)),()=>{Se.current&&clearTimeout(Se.current)}),[E,H,F]),y.useEffect(()=>{H&&x.current&&(x.current.focus(),x.current.select())},[H]);const it=P=>{re(P.target.value)},Mt=()=>{const P=parseFloat(ae);if(!isNaN(P)){const te=Math.max(a,Math.min(c,P));i(vd(te,u))}K(!1),$(!1),W(!1)},Ct=P=>{F&&(P.stopPropagation(),P.preventDefault(),K(!0),re(n.toFixed(lp(u))))},zt=P=>{P.key==="Enter"?Mt():P.key==="Escape"&&(K(!1),$(!1))},Zt=()=>{Mt()},Oe=n.toFixed(lp(u)),ie=8,He=10,Ze=10;let Ie=30,ht=78;const ut=(tt=g.current)==null?void 0:tt.offsetWidth;ut&&ut>0&&(b.current&&(Ie=(He+b.current.offsetWidth+ie)/ut*100),w.current&&(ht=(ut-Ze-w.current.offsetWidth-ie)/ut*100));const dt=U<Ie||U>ht,Je=q?dt?.1:k?.9:.5:0,rt=(c-a)/u,Vt=rt<=10?Array.from({length:rt-1},(P,te)=>{const Q=(te+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Q}%`}},te)}):Array.from({length:9},(P,te)=>{const Q=(te+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Q}%`}},te)});return l.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:l.jsxs(si.div,{ref:_,className:`dialkit-slider ${q?"dialkit-slider-active":""}`,onPointerDown:et,onPointerMove:ze,onPointerUp:ct,onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),style:{width:he,x:Ee},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Vt}),l.jsx(si.div,{className:"dialkit-slider-fill",style:{width:D}}),l.jsx(si.div,{className:"dialkit-slider-handle",style:{left:ce,y:"-50%"},animate:{opacity:Je,scaleX:q?1:.25,scaleY:q&&dt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:pM(h)})]}),H?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ae,onChange:it,onKeyDown:zt,onBlur:Zt,onClick:P=>P.stopPropagation(),onMouseDown:P=>P.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${F?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),onClick:Ct,onMouseDown:P=>F&&P.stopPropagation(),style:{cursor:F?"text":"default"},children:Oe})]})})}function qp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return l.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function kM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:_M(a)})]}),l.jsx(qp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function jM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function n2({spring:t,isSimpleMode:n}){var j,k,M,z,N;let c,u,d;if(n){const E=(j=t.visualDuration)!=null?j:.3,$=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/E,c=Math.pow(c,2),u=2*(1-$)*Math.sqrt(c*d)}else c=(M=t.stiffness)!=null?M:400,u=(z=t.damping)!=null?z:17,d=(N=t.mass)!=null?N:1;const h=2,p=jM(c,u,d,h),g=p.map(([,E])=>E),_=Math.min(...g),b=Math.max(...g)-_,w=p.map(([E,$],F)=>{const W=E/h*256,K=140-(($-_)/(b||1)*140*.6+140*.2);return`${F===0?"M":"L"} ${W} ${K}`}).join(" "),S=[];for(let E=1;E<4;E++){const $=64*E,F=140/4*E;S.push(l.jsx("line",{x1:$,y1:0,x2:$,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${E}`),l.jsx("line",{x1:0,y1:F,x2:256,y2:F,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${E}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function MM({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=y.useSyncExternalStore(j=>on.subscribe(t,j),()=>on.getSpringMode(t,n),()=>on.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{on.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},g=(j,k)=>{if(d){const{stiffness:M,damping:z,mass:N,...E}=a;c({...E,[j]:k})}else{const{visualDuration:M,bounce:z,...N}=a;c({...N,[j]:k})}};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(n2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ro,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:j=>g("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ro,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>g("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ro,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>g("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Ro,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:j=>g("damping",j),min:1,max:100,step:1}),l.jsx(Ro,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:j=>g("mass",j),min:.1,max:10,step:.1})]})]})})}function TM({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function EM({panelId:t,path:n,label:i,value:a,onChange:c}){var S,j,k,M,z;const u=y.useSyncExternalStore(N=>on.subscribe(t,N),()=>on.getTransitionMode(t,n),()=>on.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=N=>{on.updateTransitionMode(t,n,N),c(N==="easing"?p.current.easing:N==="simple"?p.current.simple:p.current.advanced)},b=(N,E)=>{if(h){const{stiffness:$,damping:F,mass:W,...H}=g;c({...H,[N]:E})}else{const{visualDuration:$,bounce:F,...W}=g;c({...W,[N]:E})}},w=(N,E)=>{const $=[..._.ease];$[N]=E,c({..._,ease:$})};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(TM,{easing:_}):l.jsx(n2,{spring:g,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ro,{label:"x1",value:_.ease[0],onChange:N=>w(0,N),min:0,max:1,step:.01}),l.jsx(Ro,{label:"y1",value:_.ease[1],onChange:N=>w(1,N),min:-1,max:2,step:.01}),l.jsx(Ro,{label:"x2",value:_.ease[2],onChange:N=>w(2,N),min:0,max:1,step:.01}),l.jsx(Ro,{label:"y2",value:_.ease[3],onChange:N=>w(3,N),min:-1,max:2,step:.01}),l.jsx(Ro,{label:"Duration",value:_.duration,onChange:N=>c({..._,duration:N}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(DM,{ease:_.ease,onChange:N=>c({..._,ease:N})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Ro,{label:"Duration",value:(S=g.visualDuration)!=null?S:.3,onChange:N=>b("visualDuration",N),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ro,{label:"Bounce",value:(j=g.bounce)!=null?j:.2,onChange:N=>b("bounce",N),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ro,{label:"Stiffness",value:(k=g.stiffness)!=null?k:400,onChange:N=>b("stiffness",N),min:1,max:1e3,step:10}),l.jsx(Ro,{label:"Damping",value:(M=g.damping)!=null?M:17,onChange:N=>b("damping",N),min:1,max:100,step:1}),l.jsx(Ro,{label:"Mass",value:(z=g.mass)!=null?z:1,onChange:N=>b("mass",N),min:.1,max:10,step:.1})]})]})})}function jx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function AM(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function DM({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(jx(t)),a(!0)},h=()=>{const g=AM(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:jx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function NM({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function RM(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function BM(t){return t.map(n=>typeof n=="string"?{value:n,label:RM(n)}:n)}function LM({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=BM(i),w=b.find(k=>k.value===n),S=y.useCallback(()=>{const k=d.current;if(!k)return;const M=k.getBoundingClientRect(),z=8+b.length*36,N=window.innerHeight-M.bottom-4,E=N<z&&M.top>N;x({top:E?M.top-4:M.bottom+4,left:M.left,width:M.width,above:E})},[b.length]);return y.useEffect(()=>{var M;const k=(M=d.current)==null?void 0:M.closest(".dialkit-root");g(k!=null?k:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const k=M=>{const z=M.target;d.current&&!d.current.contains(z)&&h.current&&!h.current.contains(z)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=w==null?void 0:w.label)!=null?j:n}),l.jsx(si.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Xp})})]})]}),p&&Ac.createPortal(l.jsx(Ud,{children:c&&_&&l.jsx(si.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(k=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var OM=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function zM({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),OM.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?$M(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function $M(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function IM({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(M=>M.id===i),b=y.useCallback(()=>{var z;if(!_)return;const M=(z=d.current)==null?void 0:z.getBoundingClientRect();M&&g({top:M.bottom+4,left:M.left,width:M.width}),u(!0)},[_]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const M=z=>{var E,$;const N=z.target;(E=d.current)!=null&&E.contains(N)||($=h.current)!=null&&$.contains(N)||w()};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c,w]);const j=M=>{M?on.loadPreset(t,M):on.clearActivePreset(t),w()},k=(M,z)=>{M.stopPropagation(),on.deletePreset(t,z)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(si.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Xp})})]}),Ac.createPortal(l.jsx(Ud,{children:c&&l.jsxs(si.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(M=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(M.id===i),onClick:()=>j(M.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:M.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:z=>k(z,M.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:bM.map((z,N)=>l.jsx("path",{d:z},N))})})]},M.id))]})}),document.body)]})}function PM({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(t2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(k=>on.subscribe(t.id,k),()=>on.getValues(t.id),()=>on.getValues(t.id)),g=on.getPresets(t.id),_=on.getActivePresetId(t.id),x=()=>{const k=g.length+2;on.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),M=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(M),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var z,N,E;const M=p[k.path];switch(k.type){case"slider":return l.jsx(Ro,{label:k.label,value:M,onChange:$=>on.updateValue(t.id,k.path,$),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return l.jsx(kM,{label:k.label,checked:M,onChange:$=>on.updateValue(t.id,k.path,$),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return l.jsx(MM,{panelId:t.id,path:k.path,label:k.label,spring:M,onChange:$=>on.updateValue(t.id,k.path,$)},k.path);case"transition":return l.jsx(EM,{panelId:t.id,path:k.path,label:k.label,value:M,onChange:$=>on.updateValue(t.id,k.path,$)},k.path);case"folder":return l.jsx(Ld,{title:k.label,defaultOpen:(z=k.defaultOpen)!=null?z:!0,children:(N=k.children)==null?void 0:N.map(w)},k.path);case"text":return l.jsx(NM,{label:k.label,value:M,onChange:$=>on.updateValue(t.id,k.path,$),placeholder:k.placeholder},k.path);case"select":return l.jsx(LM,{label:k.label,value:M,options:(E=k.options)!=null?E:[],onChange:$=>on.updateValue(t.id,k.path,$)},k.path);case"color":return l.jsx(zM,{label:k.label,value:M,onChange:$=>on.updateValue(t.id,k.path,$)},k.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>on.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),j=l.jsxs(l.Fragment,{children:[l.jsx(si.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:xM.map((k,M)=>l.jsx("path",{d:k},M))})}),l.jsx(IM,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),l.jsx(si.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Ud,{initial:!1,mode:"wait",children:a?l.jsx(si.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:yM})},"check"):l.jsxs(si.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:km.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:km.sparkle,fill:"currentColor"}),l.jsx("path",{d:km.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Ld,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:S()})})}var HM=typeof process<"u"?!1:!(typeof import.meta<"u");function UM({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=HM}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),j=y.useRef(null),k=y.useRef(!1),M=y.useRef(null),z=y.useRef(!1);y.useEffect(()=>(p(!0),d(on.getPanels()),on.subscribeGlobal(()=>{d(on.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const H=new MutationObserver(()=>{var re;const K=(re=_.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!K)return;if(K.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const Se=x.x+21,Ne=window.innerWidth/2;S(Se<Ne?"top-left":"top-right")}else S(t);b(null)}});return H.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>H.disconnect()},[g,x,t]);const N=y.useCallback(H=>{var re;const K=(re=_.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!K||K.getAttribute("data-collapsed")!=="true")return;const ae=_.current.getBoundingClientRect();M.current={pointerX:H.clientX,pointerY:H.clientY,elX:ae.left,elY:ae.top},z.current=!1,k.current=!0,H.target.setPointerCapture(H.pointerId)},[]),E=y.useCallback(H=>{if(!k.current||!M.current)return;const K=H.clientX-M.current.pointerX,ae=H.clientY-M.current.pointerY;!z.current&&Math.abs(K)+Math.abs(ae)<4||(z.current=!0,b({x:M.current.elX+K,y:M.current.elY+ae}))},[]),$=y.useCallback(H=>{var K;if(k.current&&(k.current=!1,M.current=null,z.current)){H.stopPropagation();const ae=(K=_.current)==null?void 0:K.querySelector(".dialkit-panel-inner");if(ae){const re=Se=>{Se.stopPropagation()};ae.addEventListener("click",re,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const F=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,W=l.jsx(gM,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:w,"data-mode":i,style:F,onPointerDown:g?void 0:N,onPointerMove:g?void 0:E,onPointerUp:g?void 0:$,children:u.map(H=>l.jsx(PM,{panel:H,defaultOpen:g||n,inline:g},H.id))})})});return g?W:Ac.createPortal(W,document.body)}const VM=()=>(iM("Git Visualizer",{preview:[1,0,1]}),null),YM=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(VM,{}),l.jsx(UM,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(W6,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Ev.createRoot(document.getElementById("root")).render(l.jsx(YM,{children:l.jsx(Tw,{})}));

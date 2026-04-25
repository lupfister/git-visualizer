(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Bx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oh={exports:{}},sc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function Tv(){if(ey)return sc;ey=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return sc.Fragment=n,sc.jsx=i,sc.jsxs=i,sc}var ty;function Av(){return ty||(ty=1,Oh.exports=Tv()),Oh.exports}var l=Av(),zh={exports:{}},oc={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Dv(){return ny||(ny=1,(function(t){function n(z,ce){var U=z.length;z.push(ce);e:for(;0<U;){var Q=U-1>>>1,_e=z[Q];if(0<c(_e,ce))z[Q]=ce,z[U]=_e,U=Q;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var ce=z[0],U=z.pop();if(U!==ce){z[0]=U;e:for(var Q=0,_e=z.length,N=_e>>>1;Q<N;){var ae=2*(Q+1)-1,oe=z[ae],ge=ae+1,De=z[ge];if(0>c(oe,U))ge<_e&&0>c(De,oe)?(z[Q]=De,z[ge]=U,Q=ge):(z[Q]=oe,z[ae]=U,Q=ae);else if(ge<_e&&0>c(De,U))z[Q]=De,z[ge]=U,Q=ge;else break e}}return ce}function c(z,ce){var U=z.sortIndex-ce.sortIndex;return U!==0?U:z.id-ce.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],_=1,x=null,b=3,w=!1,S=!1,k=!1,j=!1,E=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var ce=i(y);ce!==null;){if(ce.callback===null)a(y);else if(ce.startTime<=z)a(y),ce.sortIndex=ce.expirationTime,n(p,ce);else break;ce=i(y)}}function W(z){if(k=!1,D(z),!S)if(i(p)!==null)S=!0,H||(H=!0,je());else{var ce=i(y);ce!==null&&de(W,ce.startTime-z)}}var H=!1,X=-1,P=5,K=-1;function re(){return j?!0:!(t.unstable_now()-K<P)}function se(){if(j=!1,H){var z=t.unstable_now();K=z;var ce=!0;try{e:{S=!1,k&&(k=!1,I(X),X=-1),w=!0;var U=b;try{t:{for(D(z),x=i(p);x!==null&&!(x.expirationTime>z&&re());){var Q=x.callback;if(typeof Q=="function"){x.callback=null,b=x.priorityLevel;var _e=Q(x.expirationTime<=z);if(z=t.unstable_now(),typeof _e=="function"){x.callback=_e,D(z),ce=!0;break t}x===i(p)&&a(p),D(z)}else a(p);x=i(p)}if(x!==null)ce=!0;else{var N=i(y);N!==null&&de(W,N.startTime-z),ce=!1}}break e}finally{x=null,b=U,w=!1}ce=void 0}}finally{ce?je():H=!1}}}var je;if(typeof O=="function")je=function(){O(se)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,J=Pe.port2;Pe.port1.onmessage=se,je=function(){J.postMessage(null)}}else je=function(){E(se,0)};function de(z,ce){X=E(function(){z(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(z){switch(b){case 1:case 2:case 3:var ce=3;break;default:ce=b}var U=b;b=ce;try{return z()}finally{b=U}},t.unstable_requestPaint=function(){j=!0},t.unstable_runWithPriority=function(z,ce){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var U=b;b=z;try{return ce()}finally{b=U}},t.unstable_scheduleCallback=function(z,ce,U){var Q=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Q+U:Q):U=Q,z){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=U+_e,z={id:_++,callback:ce,priorityLevel:z,startTime:U,expirationTime:_e,sortIndex:-1},U>Q?(z.sortIndex=U,n(y,z),i(p)===null&&z===i(y)&&(k?(I(X),X=-1):k=!0,de(W,U-Q))):(z.sortIndex=_e,n(p,z),S||w||(S=!0,H||(H=!0,je()))),z},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(z){var ce=b;return function(){var U=b;b=ce;try{return z.apply(this,arguments)}finally{b=U}}}})(Ih)),Ih}var sy;function Nv(){return sy||(sy=1,$h.exports=Dv()),$h.exports}var Ph={exports:{}},Jt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Rv(){if(oy)return Jt;oy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,j={};function E(N,ae,oe){this.props=N,this.context=ae,this.refs=j,this.updater=oe||S}E.prototype.isReactComponent={},E.prototype.setState=function(N,ae){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ae,"setState")},E.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function I(){}I.prototype=E.prototype;function O(N,ae,oe){this.props=N,this.context=ae,this.refs=j,this.updater=oe||S}var D=O.prototype=new I;D.constructor=O,k(D,E.prototype),D.isPureReactComponent=!0;var W=Array.isArray;function H(){}var X={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function K(N,ae,oe){var ge=oe.ref;return{$$typeof:t,type:N,key:ae,ref:ge!==void 0?ge:null,props:oe}}function re(N,ae){return K(N.type,ae,N.props)}function se(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function je(N){var ae={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(oe){return ae[oe]})}var Pe=/\/+/g;function J(N,ae){return typeof N=="object"&&N!==null&&N.key!=null?je(""+N.key):ae.toString(36)}function de(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function(ae){N.status==="pending"&&(N.status="fulfilled",N.value=ae)},function(ae){N.status==="pending"&&(N.status="rejected",N.reason=ae)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,ae,oe,ge,De){var ze=typeof N;(ze==="undefined"||ze==="boolean")&&(N=null);var ot=!1;if(N===null)ot=!0;else switch(ze){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(N.$$typeof){case t:case n:ot=!0;break;case _:return ot=N._init,z(ot(N._payload),ae,oe,ge,De)}}if(ot)return De=De(N),ot=ge===""?"."+J(N,0):ge,W(De)?(oe="",ot!=null&&(oe=ot.replace(Pe,"$&/")+"/"),z(De,ae,oe,"",function(Yt){return Yt})):De!=null&&(se(De)&&(De=re(De,oe+(De.key==null||N&&N.key===De.key?"":(""+De.key).replace(Pe,"$&/")+"/")+ot)),ae.push(De)),1;ot=0;var ct=ge===""?".":ge+":";if(W(N))for(var Ct=0;Ct<N.length;Ct++)ge=N[Ct],ze=ct+J(ge,Ct),ot+=z(ge,ae,oe,ze,De);else if(Ct=w(N),typeof Ct=="function")for(N=Ct.call(N),Ct=0;!(ge=N.next()).done;)ge=ge.value,ze=ct+J(ge,Ct++),ot+=z(ge,ae,oe,ze,De);else if(ze==="object"){if(typeof N.then=="function")return z(de(N),ae,oe,ge,De);throw ae=String(N),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return ot}function ce(N,ae,oe){if(N==null)return N;var ge=[],De=0;return z(N,ge,"","",function(ze){return ae.call(oe,ze,De++)}),ge}function U(N){if(N._status===-1){var ae=N._result;ae=ae(),ae.then(function(oe){(N._status===0||N._status===-1)&&(N._status=1,N._result=oe)},function(oe){(N._status===0||N._status===-1)&&(N._status=2,N._result=oe)}),N._status===-1&&(N._status=0,N._result=ae)}if(N._status===1)return N._result.default;throw N._result}var Q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},_e={map:ce,forEach:function(N,ae,oe){ce(N,function(){ae.apply(this,arguments)},oe)},count:function(N){var ae=0;return ce(N,function(){ae++}),ae},toArray:function(N){return ce(N,function(ae){return ae})||[]},only:function(N){if(!se(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Jt.Activity=x,Jt.Children=_e,Jt.Component=E,Jt.Fragment=i,Jt.Profiler=c,Jt.PureComponent=O,Jt.StrictMode=a,Jt.Suspense=p,Jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,Jt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return X.H.useMemoCache(N)}},Jt.cache=function(N){return function(){return N.apply(null,arguments)}},Jt.cacheSignal=function(){return null},Jt.cloneElement=function(N,ae,oe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ge=k({},N.props),De=N.key;if(ae!=null)for(ze in ae.key!==void 0&&(De=""+ae.key),ae)!P.call(ae,ze)||ze==="key"||ze==="__self"||ze==="__source"||ze==="ref"&&ae.ref===void 0||(ge[ze]=ae[ze]);var ze=arguments.length-2;if(ze===1)ge.children=oe;else if(1<ze){for(var ot=Array(ze),ct=0;ct<ze;ct++)ot[ct]=arguments[ct+2];ge.children=ot}return K(N.type,De,ge)},Jt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},Jt.createElement=function(N,ae,oe){var ge,De={},ze=null;if(ae!=null)for(ge in ae.key!==void 0&&(ze=""+ae.key),ae)P.call(ae,ge)&&ge!=="key"&&ge!=="__self"&&ge!=="__source"&&(De[ge]=ae[ge]);var ot=arguments.length-2;if(ot===1)De.children=oe;else if(1<ot){for(var ct=Array(ot),Ct=0;Ct<ot;Ct++)ct[Ct]=arguments[Ct+2];De.children=ct}if(N&&N.defaultProps)for(ge in ot=N.defaultProps,ot)De[ge]===void 0&&(De[ge]=ot[ge]);return K(N,ze,De)},Jt.createRef=function(){return{current:null}},Jt.forwardRef=function(N){return{$$typeof:h,render:N}},Jt.isValidElement=se,Jt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:U}},Jt.memo=function(N,ae){return{$$typeof:y,type:N,compare:ae===void 0?null:ae}},Jt.startTransition=function(N){var ae=X.T,oe={};X.T=oe;try{var ge=N(),De=X.S;De!==null&&De(oe,ge),typeof ge=="object"&&ge!==null&&typeof ge.then=="function"&&ge.then(H,Q)}catch(ze){Q(ze)}finally{ae!==null&&oe.types!==null&&(ae.types=oe.types),X.T=ae}},Jt.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},Jt.use=function(N){return X.H.use(N)},Jt.useActionState=function(N,ae,oe){return X.H.useActionState(N,ae,oe)},Jt.useCallback=function(N,ae){return X.H.useCallback(N,ae)},Jt.useContext=function(N){return X.H.useContext(N)},Jt.useDebugValue=function(){},Jt.useDeferredValue=function(N,ae){return X.H.useDeferredValue(N,ae)},Jt.useEffect=function(N,ae){return X.H.useEffect(N,ae)},Jt.useEffectEvent=function(N){return X.H.useEffectEvent(N)},Jt.useId=function(){return X.H.useId()},Jt.useImperativeHandle=function(N,ae,oe){return X.H.useImperativeHandle(N,ae,oe)},Jt.useInsertionEffect=function(N,ae){return X.H.useInsertionEffect(N,ae)},Jt.useLayoutEffect=function(N,ae){return X.H.useLayoutEffect(N,ae)},Jt.useMemo=function(N,ae){return X.H.useMemo(N,ae)},Jt.useOptimistic=function(N,ae){return X.H.useOptimistic(N,ae)},Jt.useReducer=function(N,ae,oe){return X.H.useReducer(N,ae,oe)},Jt.useRef=function(N){return X.H.useRef(N)},Jt.useState=function(N){return X.H.useState(N)},Jt.useSyncExternalStore=function(N,ae,oe){return X.H.useSyncExternalStore(N,ae,oe)},Jt.useTransition=function(){return X.H.useTransition()},Jt.version="19.2.4",Jt}var iy;function cp(){return iy||(iy=1,Ph.exports=Rv()),Ph.exports}var Hh={exports:{}},zo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function Bv(){if(ay)return zo;ay=1;var t=cp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return zo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zo.createPortal=function(p,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,_)},zo.flushSync=function(p){var y=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=_,a.d.f()}},zo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},zo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},zo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var _=y.as,x=h(_,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},zo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},zo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,x=h(_,y.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},zo.preloadModule=function(p,y){if(typeof p=="string")if(y){var _=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},zo.requestFormReset=function(p){a.d.r(p)},zo.unstable_batchedUpdates=function(p,y){return p(y)},zo.useFormState=function(p,y,_){return d.H.useFormState(p,y,_)},zo.useFormStatus=function(){return d.H.useHostTransitionStatus()},zo.version="19.2.4",zo}var ry;function Lx(){if(ry)return Hh.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=Bv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Lv(){if(ly)return oc;ly=1;var t=Nv(),n=cp(),i=Lx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case E:return"Profiler";case j:return"StrictMode";case W:return"Suspense";case H:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case O:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case D:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return s=e.displayName||null,s!==null?s:J(e.type)||"Memo";case P:s=e._payload,e=e._init;try{return J(e(s))}catch{}}return null}var de=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},Q=[],_e=-1;function N(e){return{current:e}}function ae(e){0>_e||(e.current=Q[_e],Q[_e]=null,_e--)}function oe(e,s){_e++,Q[_e]=e.current,e.current=s}var ge=N(null),De=N(null),ze=N(null),ot=N(null);function ct(e,s){switch(oe(ze,s),oe(De,e),oe(ge,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?S0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=S0(s),e=C0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(ge),oe(ge,e)}function Ct(){ae(ge),ae(De),ae(ze)}function Yt(e){e.memoizedState!==null&&oe(ot,e);var s=ge.current,o=C0(s,e.type);s!==o&&(oe(De,e),oe(ge,o))}function xt(e){De.current===e&&(ae(ge),ae(De)),ot.current===e&&(ae(ot),Jl._currentValue=U)}var mt,Ke;function Wt(e){if(mt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);mt=s&&s[1]||"",Ke=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+Ke}var qe=!1;function _t(e,s){if(!e||qe)return"";qe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Le=function(){throw Error()};if(Object.defineProperty(Le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Le,[])}catch(ve){var ye=ve}Reflect.construct(e,[],Le)}else{try{Le.call()}catch(ve){ye=ve}e.call(Le.prototype)}}else{try{throw Error()}catch(ve){ye=ve}(Le=e())&&typeof Le.catch=="function"&&Le.catch(function(){})}}catch(ve){if(ve&&ye&&typeof ve.stack=="string")return[ve.stack,ye.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var q=v.split(`
`),pe=A.split(`
`);for(f=r=0;r<q.length&&!q[r].includes("DetermineComponentFrameRoot");)r++;for(;f<pe.length&&!pe[f].includes("DetermineComponentFrameRoot");)f++;if(r===q.length||f===pe.length)for(r=q.length-1,f=pe.length-1;1<=r&&0<=f&&q[r]!==pe[f];)f--;for(;1<=r&&0<=f;r--,f--)if(q[r]!==pe[f]){if(r!==1||f!==1)do if(r--,f--,0>f||q[r]!==pe[f]){var Ee=`
`+q[r].replace(" at new "," at ");return e.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",e.displayName)),Ee}while(1<=r&&0<=f);break}}}finally{qe=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Wt(o):""}function ke(e,s){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return e.child!==s&&s!==null?Wt("Suspense Fallback"):Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return _t(e.type,!1);case 11:return _t(e.type.render,!1);case 1:return _t(e.type,!0);case 31:return Wt("Activity");default:return""}}function ne(e){try{var s="",o=null;do s+=ke(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Me=Object.prototype.hasOwnProperty,Xe=t.unstable_scheduleCallback,Ue=t.unstable_cancelCallback,Ye=t.unstable_shouldYield,nt=t.unstable_requestPaint,ft=t.unstable_now,dt=t.unstable_getCurrentPriorityLevel,gt=t.unstable_ImmediatePriority,$t=t.unstable_UserBlockingPriority,at=t.unstable_NormalPriority,V=t.unstable_LowPriority,Z=t.unstable_IdlePriority,fe=t.log,be=t.unstable_setDisableYieldValue,Je=null,Ge=null;function Ne(e){if(typeof fe=="function"&&be(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(Je,e)}catch{}}var wt=Math.clz32?Math.clz32:St,He=Math.log,Gt=Math.LN2;function St(e){return e>>>=0,e===0?32:31-(He(e)/Gt|0)|0}var tt=256,Ot=262144,Ht=4194304;function Zt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function st(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=Zt(r):(v&=A,v!==0?f=Zt(v):o||(o=A&~e,o!==0&&(f=Zt(o))))):(A=r&~m,A!==0?f=Zt(A):v!==0?f=Zt(v):o||(o=r&~e,o!==0&&(f=Zt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function et(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Dt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function It(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function yt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,q=e.expirationTimes,pe=e.hiddenUpdates;for(o=v&~o;0<o;){var Ee=31-wt(o),Le=1<<Ee;A[Ee]=0,q[Ee]=-1;var ye=pe[Ee];if(ye!==null)for(pe[Ee]=null,Ee=0;Ee<ye.length;Ee++){var ve=ye[Ee];ve!==null&&(ve.lane&=-536870913)}o&=~Le}r!==0&&an(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function an(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-wt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function _n(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-wt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function vn(e,s){var o=s&-s;return o=(o&42)!==0?1:is(o),(o&(e.suspendedLanes|s))!==0?0:o}function is(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function In(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function An(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:X0(e.type))}function Mn(e,s){var o=ce.p;try{return ce.p=e,s()}finally{ce.p=o}}var as=Math.random().toString(36).slice(2),cn="__reactFiber$"+as,Dn="__reactProps$"+as,it="__reactContainer$"+as,rs="__reactEvents$"+as,No="__reactListeners$"+as,Kn="__reactHandles$"+as,js="__reactResources$"+as,Ms="__reactMarker$"+as;function qs(e){delete e[cn],delete e[Dn],delete e[rs],delete e[No],delete e[Kn]}function _s(e){var s=e[cn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[it]||o[cn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=D0(e);e!==null;){if(o=e[cn])return o;e=D0(e)}return s}e=o,o=e.parentNode}return null}function So(e){if(e=e[cn]||e[it]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Io(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function ao(e){var s=e[js];return s||(s=e[js]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function un(e){e[Ms]=!0}var yi=new Set,Ds={};function Ns(e,s){gs(e,s),gs(e+"Capture",s)}function gs(e,s){for(Ds[e]=s,e=0;e<s.length;e++)yi.add(s[e])}var ro=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qo={},ys={};function Qn(e){return Me.call(ys,e)?!0:Me.call(Qo,e)?!1:ro.test(e)?ys[e]=!0:(Qo[e]=!0,!1)}function Es(e,s,o){if(Qn(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function gn(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Pn(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function dn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wn(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Gi(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Zo(e){if(!e._valueTracker){var s=Wn(e)?"checked":"value";e._valueTracker=Gi(e,s,""+e[s])}}function li(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Wn(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jo=/[\n"\\]/g;function Ts(e){return e.replace(Jo,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function fs(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+dn(s)):e.value!==""+dn(s)&&(e.value=""+dn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Rs(e,v,dn(s)):o!=null?Rs(e,v,dn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+dn(A):e.removeAttribute("name")}function Nn(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Zo(e);return}o=o!=null?""+dn(o):"",s=s!=null?""+dn(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Zo(e)}function Rs(e,s,o){s==="number"&&_o(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function Hn(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+dn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function ls(e,s,o){if(s!=null&&(s=""+dn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+dn(o):""}function xi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(de(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=dn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Zo(e)}function Po(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||qi.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Ks(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Kt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Kt(e,m,s[m])}function Us(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ho=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(e){return bi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qs(){}var vi=null;function lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,go=null;function Vn(e){var s=So(e);if(s&&(e=s.stateNode)){var o=e[Dn]||null;e:switch(e=s.stateNode,s.type){case"input":if(fs(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ts(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[Dn]||null;if(!f)throw Error(a(90));fs(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&li(r)}break e;case"textarea":ls(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Hn(e,!!o.multiple,s,!1)}}}var Bs=!1;function co(e,s,o){if(Bs)return e(s,o);Bs=!0;try{var r=e(s);return r}finally{if(Bs=!1,(Sn!==null||go!==null)&&(vu(),Sn&&(s=Sn,e=go,go=Sn=null,Vn(s),e)))for(s=0;s<e.length;s++)Vn(e[s])}}function rn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[Dn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Ys=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ws=!1;if(Ys)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Ws=!1}var hs=null,Ro=null,Zs=null;function Co(){if(Zs)return Zs;var e,s=Ro,o=s.length,r,f="value"in hs?hs.value:hs.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Zs=f.slice(e,1<r?1-r:void 0)}function yo(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function En(){return!1}function Un(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bo:En,this.isPropagationStopped=En,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),s}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=Un(Fn),uo=x({},Fn,{view:0,detail:0}),Js=Un(uo),ei,xo,Cs,Os=x({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cs&&(Cs&&e.type==="mousemove"?(ei=e.screenX-Cs.screenX,xo=e.screenY-Cs.screenY):xo=ei=0,Cs=e),ei)},movementY:function(e){return"movementY"in e?e.movementY:xo}}),Uo=Un(Os),jo=x({},Os,{dataTransfer:0}),bo=Un(jo),T=x({},uo,{relatedTarget:0}),G=Un(T),xe=x({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ce=Un(xe),Qe=x({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ze=Un(Qe),Nt=x({},Fn,{data:0}),We=Un(Nt),Bt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ln(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=tn[e])?!!s[e]:!1}function nn(){return ln}var Cn=x({},uo,{key:function(e){if(e.key){var s=Bt[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zt[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nn,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kn=Un(Cn),zs=x({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fo=Un(zs),ci=x({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nn}),Li=Un(ci),Ki=x({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lo=Un(Ki),or=x({},Os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qi=Un(or),Zi=x({},Fn,{newState:0,oldState:0}),Yo=Un(Zi),Oi=[9,13,27,32],R=Ys&&"CompositionEvent"in window,F=null;Ys&&"documentMode"in document&&(F=document.documentMode);var ee=Ys&&"TextEvent"in window&&!F,ue=Ys&&(!R||F&&8<F&&11>=F),Ve=" ",lt=!1;function ht(e,s){switch(e){case"keyup":return Oi.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ft(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function As(e,s){switch(e){case"compositionend":return Ft(s);case"keypress":return s.which!==32?null:(lt=!0,Ve);case"textInput":return e=s.data,e===Ve&&lt?null:e;default:return null}}function vo(e,s){if(yn)return e==="compositionend"||!R&&ht(e,s)?(e=Co(),Zs=Ro=hs=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ue&&s.locale!=="ko"?null:s.data;default:return null}}var $s={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vt(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!$s[e.type]:s==="textarea"}function Rn(e,s,o,r){Sn?go?go.push(r):go=[r]:Sn=r,s=Eu(s,"onChange"),0<s.length&&(o=new ko("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var hn=null,he=null;function $e(e){g0(e,0)}function C(e){var s=Io(e);if(li(s))return e}function M(e,s){if(e==="change")return s}var B=!1;if(Ys){var L;if(Ys){var Y="oninput"in document;if(!Y){var ie=document.createElement("div");ie.setAttribute("oninput","return;"),Y=typeof ie.oninput=="function"}L=Y}else L=!1;B=L&&(!document.documentMode||9<document.documentMode)}function Te(){hn&&(hn.detachEvent("onpropertychange",Se),he=hn=null)}function Se(e){if(e.propertyName==="value"&&C(he)){var s=[];Rn(s,he,e,lo(e)),co($e,s)}}function Oe(e,s,o){e==="focusin"?(Te(),hn=s,he=o,hn.attachEvent("onpropertychange",Se)):e==="focusout"&&Te()}function rt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return C(he)}function ut(e,s){if(e==="click")return C(s)}function Et(e,s){if(e==="input"||e==="change")return C(s)}function Lt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var vt=typeof Object.is=="function"?Object.is:Lt;function pt(e,s){if(vt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Me.call(s,f)||!vt(e[f],s[f]))return!1}return!0}function Zn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,s){var o=Zn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Zn(o)}}function bs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?bs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function jn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=_o(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=_o(e.document)}return s}function Yn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var qt=Ys&&"documentMode"in document&&11>=document.documentMode,Qt=null,vs=null,Tn=null,ho=!1;function Oo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ho||Qt==null||Qt!==_o(r)||(r=Qt,"selectionStart"in r&&Yn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&pt(Tn,r)||(Tn=r,r=Eu(vs,"onSelect"),0<r.length&&(s=new ko("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Qt)))}function cs(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var wi={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},zi={},$i={};Ys&&($i=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function Jn(e){if(zi[e])return zi[e];if(!wi[e])return e;var s=wi[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in $i)return zi[e]=s[o];return e}var Ii=Jn("animationend"),Ji=Jn("animationiteration"),Pc=Jn("animationstart"),Wd=Jn("transitionrun"),Fd=Jn("transitionstart"),Xd=Jn("transitioncancel"),Kp=Jn("transitionend"),Qp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Pi(e,s){Qp.set(e,s),Ns(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],Rr=0,qd=0;function Vc(){for(var e=Rr,s=qd=Rr=0;s<e;){var o=Si[s];Si[s++]=null;var r=Si[s];Si[s++]=null;var f=Si[s];Si[s++]=null;var m=Si[s];if(Si[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Zp(o,f,m)}}function Uc(e,s,o,r){Si[Rr++]=e,Si[Rr++]=s,Si[Rr++]=o,Si[Rr++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Uc(e,s,o,r),Yc(e)}function ir(e,s){return Uc(e,null,null,s),Yc(e)}function Zp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-wt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Fl)throw Fl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Br={};function f2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,s,o,r){return new f2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,s){var o=e.alternate;return o===null?(o=ui(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Jp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=gv(e,o,ge.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=ui(31,o,s,f),e.elementType=K,e.lanes=m,e;case k:return ar(o.children,f,m,s);case j:v=8,f|=24;break;case E:return e=ui(12,o,s,f|2),e.elementType=E,e.lanes=m,e;case W:return e=ui(13,o,s,f),e.elementType=W,e.lanes=m,e;case H:return e=ui(19,o,s,f),e.elementType=H,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:v=10;break e;case I:v=9;break e;case D:v=11;break e;case X:v=14;break e;case P:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=ui(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ar(e,s,o,r){return e=ui(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=ui(6,e,null,s),e.lanes=o,e}function e_(e){var s=ui(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=ui(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var t_=new WeakMap;function Ci(e,s){if(typeof e=="object"&&e!==null){var o=t_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ne(s)},t_.set(e,s),s)}return{value:e,source:s,stack:ne(s)}}var Lr=[],Or=0,Fc=null,kl=0,ki=[],ji=0,Ma=null,ea=1,ta="";function da(e,s){Lr[Or++]=kl,Lr[Or++]=Fc,Fc=e,kl=s}function n_(e,s,o){ki[ji++]=ea,ki[ji++]=ta,ki[ji++]=Ma,Ma=e;var r=ea;e=ta;var f=32-wt(r)-1;r&=~(1<<f),o+=1;var m=32-wt(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ea=1<<32-wt(s)+f|o<<f|r,ta=m+e}else ea=1<<m|o<<f|r,ta=e}function ef(e){e.return!==null&&(da(e,1),n_(e,1,0))}function tf(e){for(;e===Fc;)Fc=Lr[--Or],Lr[Or]=null,kl=Lr[--Or],Lr[Or]=null;for(;e===Ma;)Ma=ki[--ji],ki[ji]=null,ta=ki[--ji],ki[ji]=null,ea=ki[--ji],ki[ji]=null}function s_(e,s){ki[ji++]=ea,ki[ji++]=ta,ki[ji++]=Ma,ea=s.id,ta=s.overflow,Ma=e}var Mo=null,ws=null,wn=!1,Ea=null,Mi=!1,nf=Error(a(519));function Ta(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jl(Ci(s,e)),nf}function o_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[cn]=e,s[Dn]=r,o){case"dialog":pn("cancel",s),pn("close",s);break;case"iframe":case"object":case"embed":pn("load",s);break;case"video":case"audio":for(o=0;o<Gl.length;o++)pn(Gl[o],s);break;case"source":pn("error",s);break;case"img":case"image":case"link":pn("error",s),pn("load",s);break;case"details":pn("toggle",s);break;case"input":pn("invalid",s),Nn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pn("invalid",s);break;case"textarea":pn("invalid",s),xi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||v0(s.textContent,o)?(r.popover!=null&&(pn("beforetoggle",s),pn("toggle",s)),r.onScroll!=null&&pn("scroll",s),r.onScrollEnd!=null&&pn("scrollend",s),r.onClick!=null&&(s.onclick=Qs),s=!0):s=!1,s||Ta(e,!0)}function i_(e){for(Mo=e.return;Mo;)switch(Mo.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Mo=Mo.return}}function zr(e){if(e!==Mo)return!1;if(!wn)return i_(e),wn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&ws&&Ta(e),i_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ws=A0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ws=A0(e)}else s===27?(s=ws,Ua(e.type)?(e=jh,jh=null,ws=e):ws=s):ws=Mo?Ti(e.stateNode.nextSibling):null;return!0}function rr(){ws=Mo=null,wn=!1}function sf(){var e=Ea;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),Ea=null),e}function jl(e){Ea===null?Ea=[e]:Ea.push(e)}var of=N(null),lr=null,fa=null;function Aa(e,s,o){oe(of,s._currentValue),s._currentValue=o}function ha(e){e._currentValue=of.current,ae(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var q=0;q<s.length;q++)if(A.context===s[q]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function $r(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;vt(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===ot.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Jl):e=[Jl])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Eo(e){return a_(lr,e)}function Gc(e,s){return lr===null&&cr(e),a_(e,s)}function a_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},fa===null){if(e===null)throw Error(a(308));fa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else fa=fa.next=s;return o}var h2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},m2=t.unstable_scheduleCallback,p2=t.unstable_NormalPriority,eo={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new h2,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&m2(p2,function(){e.controller.abort()})}var El=null,cf=0,Ir=0,Pr=null;function _2(e,s){if(El===null){var o=El=[];cf=0,Ir=fh(),Pr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(r_,r_),s}function r_(){if(--cf===0&&El!==null){Pr!==null&&(Pr.status="fulfilled");var e=El;El=null,Ir=0,Pr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function g2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var l_=z.S;z.S=function(e,s){Wg=ft(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&_2(e,s),l_!==null&&l_(e,s)};var ur=N(null);function uf(){var e=ur.current;return e!==null?e:us.pooledCache}function qc(e,s){s===null?oe(ur,ur.current):oe(ur,s.pool)}function c_(){var e=uf();return e===null?null:{parent:eo._currentValue,pool:e}}var Hr=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function u_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Qs,Qs),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e;default:if(typeof s.status=="string")s.then(Qs,Qs);else{if(e=us,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e}throw fr=s,Hr}}function dr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(fr=o,Hr):o}}var fr=null;function f_(){if(fr===null)throw Error(a(459));var e=fr;return fr=null,e}function h_(e){if(e===Hr||e===Kc)throw Error(a(483))}var Vr=null,Tl=0;function Zc(e){var s=Tl;return Tl+=1,Vr===null&&(Vr=[]),d_(Vr,e,s)}function Al(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function m_(e){function s(le,te){if(e){var me=le.deletions;me===null?(le.deletions=[te],le.flags|=16):me.push(te)}}function o(le,te){if(!e)return null;for(;te!==null;)s(le,te),te=te.sibling;return null}function r(le){for(var te=new Map;le!==null;)le.key!==null?te.set(le.key,le):te.set(le.index,le),le=le.sibling;return te}function f(le,te){return le=ua(le,te),le.index=0,le.sibling=null,le}function m(le,te,me){return le.index=me,e?(me=le.alternate,me!==null?(me=me.index,me<te?(le.flags|=67108866,te):me):(le.flags|=67108866,te)):(le.flags|=1048576,te)}function v(le){return e&&le.alternate===null&&(le.flags|=67108866),le}function A(le,te,me,Be){return te===null||te.tag!==6?(te=Zd(me,le.mode,Be),te.return=le,te):(te=f(te,me),te.return=le,te)}function q(le,te,me,Be){var Pt=me.type;return Pt===k?Ee(le,te,me.props.children,Be,me.key):te!==null&&(te.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===P&&dr(Pt)===te.type)?(te=f(te,me.props),Al(te,me),te.return=le,te):(te=Wc(me.type,me.key,me.props,null,le.mode,Be),Al(te,me),te.return=le,te)}function pe(le,te,me,Be){return te===null||te.tag!==4||te.stateNode.containerInfo!==me.containerInfo||te.stateNode.implementation!==me.implementation?(te=Jd(me,le.mode,Be),te.return=le,te):(te=f(te,me.children||[]),te.return=le,te)}function Ee(le,te,me,Be,Pt){return te===null||te.tag!==7?(te=ar(me,le.mode,Be,Pt),te.return=le,te):(te=f(te,me),te.return=le,te)}function Le(le,te,me){if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return te=Zd(""+te,le.mode,me),te.return=le,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case w:return me=Wc(te.type,te.key,te.props,null,le.mode,me),Al(me,te),me.return=le,me;case S:return te=Jd(te,le.mode,me),te.return=le,te;case P:return te=dr(te),Le(le,te,me)}if(de(te)||je(te))return te=ar(te,le.mode,me,null),te.return=le,te;if(typeof te.then=="function")return Le(le,Zc(te),me);if(te.$$typeof===O)return Le(le,Gc(le,te),me);Jc(le,te)}return null}function ye(le,te,me,Be){var Pt=te!==null?te.key:null;if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Pt!==null?null:A(le,te,""+me,Be);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case w:return me.key===Pt?q(le,te,me,Be):null;case S:return me.key===Pt?pe(le,te,me,Be):null;case P:return me=dr(me),ye(le,te,me,Be)}if(de(me)||je(me))return Pt!==null?null:Ee(le,te,me,Be,null);if(typeof me.then=="function")return ye(le,te,Zc(me),Be);if(me.$$typeof===O)return ye(le,te,Gc(le,me),Be);Jc(le,me)}return null}function ve(le,te,me,Be,Pt){if(typeof Be=="string"&&Be!==""||typeof Be=="number"||typeof Be=="bigint")return le=le.get(me)||null,A(te,le,""+Be,Pt);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case w:return le=le.get(Be.key===null?me:Be.key)||null,q(te,le,Be,Pt);case S:return le=le.get(Be.key===null?me:Be.key)||null,pe(te,le,Be,Pt);case P:return Be=dr(Be),ve(le,te,me,Be,Pt)}if(de(Be)||je(Be))return le=le.get(me)||null,Ee(te,le,Be,Pt,null);if(typeof Be.then=="function")return ve(le,te,me,Zc(Be),Pt);if(Be.$$typeof===O)return ve(le,te,me,Gc(te,Be),Pt);Jc(te,Be)}return null}function Mt(le,te,me,Be){for(var Pt=null,Bn=null,Rt=te,on=te=0,bn=null;Rt!==null&&on<me.length;on++){Rt.index>on?(bn=Rt,Rt=null):bn=Rt.sibling;var Ln=ye(le,Rt,me[on],Be);if(Ln===null){Rt===null&&(Rt=bn);break}e&&Rt&&Ln.alternate===null&&s(le,Rt),te=m(Ln,te,on),Bn===null?Pt=Ln:Bn.sibling=Ln,Bn=Ln,Rt=bn}if(on===me.length)return o(le,Rt),wn&&da(le,on),Pt;if(Rt===null){for(;on<me.length;on++)Rt=Le(le,me[on],Be),Rt!==null&&(te=m(Rt,te,on),Bn===null?Pt=Rt:Bn.sibling=Rt,Bn=Rt);return wn&&da(le,on),Pt}for(Rt=r(Rt);on<me.length;on++)bn=ve(Rt,le,on,me[on],Be),bn!==null&&(e&&bn.alternate!==null&&Rt.delete(bn.key===null?on:bn.key),te=m(bn,te,on),Bn===null?Pt=bn:Bn.sibling=bn,Bn=bn);return e&&Rt.forEach(function(Ga){return s(le,Ga)}),wn&&da(le,on),Pt}function Xt(le,te,me,Be){if(me==null)throw Error(a(151));for(var Pt=null,Bn=null,Rt=te,on=te=0,bn=null,Ln=me.next();Rt!==null&&!Ln.done;on++,Ln=me.next()){Rt.index>on?(bn=Rt,Rt=null):bn=Rt.sibling;var Ga=ye(le,Rt,Ln.value,Be);if(Ga===null){Rt===null&&(Rt=bn);break}e&&Rt&&Ga.alternate===null&&s(le,Rt),te=m(Ga,te,on),Bn===null?Pt=Ga:Bn.sibling=Ga,Bn=Ga,Rt=bn}if(Ln.done)return o(le,Rt),wn&&da(le,on),Pt;if(Rt===null){for(;!Ln.done;on++,Ln=me.next())Ln=Le(le,Ln.value,Be),Ln!==null&&(te=m(Ln,te,on),Bn===null?Pt=Ln:Bn.sibling=Ln,Bn=Ln);return wn&&da(le,on),Pt}for(Rt=r(Rt);!Ln.done;on++,Ln=me.next())Ln=ve(Rt,le,on,Ln.value,Be),Ln!==null&&(e&&Ln.alternate!==null&&Rt.delete(Ln.key===null?on:Ln.key),te=m(Ln,te,on),Bn===null?Pt=Ln:Bn.sibling=Ln,Bn=Ln);return e&&Rt.forEach(function(Ev){return s(le,Ev)}),wn&&da(le,on),Pt}function ns(le,te,me,Be){if(typeof me=="object"&&me!==null&&me.type===k&&me.key===null&&(me=me.props.children),typeof me=="object"&&me!==null){switch(me.$$typeof){case w:e:{for(var Pt=me.key;te!==null;){if(te.key===Pt){if(Pt=me.type,Pt===k){if(te.tag===7){o(le,te.sibling),Be=f(te,me.props.children),Be.return=le,le=Be;break e}}else if(te.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===P&&dr(Pt)===te.type){o(le,te.sibling),Be=f(te,me.props),Al(Be,me),Be.return=le,le=Be;break e}o(le,te);break}else s(le,te);te=te.sibling}me.type===k?(Be=ar(me.props.children,le.mode,Be,me.key),Be.return=le,le=Be):(Be=Wc(me.type,me.key,me.props,null,le.mode,Be),Al(Be,me),Be.return=le,le=Be)}return v(le);case S:e:{for(Pt=me.key;te!==null;){if(te.key===Pt)if(te.tag===4&&te.stateNode.containerInfo===me.containerInfo&&te.stateNode.implementation===me.implementation){o(le,te.sibling),Be=f(te,me.children||[]),Be.return=le,le=Be;break e}else{o(le,te);break}else s(le,te);te=te.sibling}Be=Jd(me,le.mode,Be),Be.return=le,le=Be}return v(le);case P:return me=dr(me),ns(le,te,me,Be)}if(de(me))return Mt(le,te,me,Be);if(je(me)){if(Pt=je(me),typeof Pt!="function")throw Error(a(150));return me=Pt.call(me),Xt(le,te,me,Be)}if(typeof me.then=="function")return ns(le,te,Zc(me),Be);if(me.$$typeof===O)return ns(le,te,Gc(le,me),Be);Jc(le,me)}return typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint"?(me=""+me,te!==null&&te.tag===6?(o(le,te.sibling),Be=f(te,me),Be.return=le,le=Be):(o(le,te),Be=Zd(me,le.mode,Be),Be.return=le,le=Be),v(le)):o(le,te)}return function(le,te,me,Be){try{Tl=0;var Pt=ns(le,te,me,Be);return Vr=null,Pt}catch(Rt){if(Rt===Hr||Rt===Kc)throw Rt;var Bn=ui(29,Rt,null,le.mode);return Bn.lanes=Be,Bn.return=le,Bn}finally{}}}var hr=m_(!0),p_=m_(!1),Da=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(zn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Zp(e,null,o),s}return Uc(e,r,s,o),Yc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,_n(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Nl(){if(pf){var e=Pr;if(e!==null)throw e}}function Rl(e,s,o,r){pf=!1;var f=e.updateQueue;Da=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var q=A,pe=q.next;q.next=null,v===null?m=pe:v.next=pe,v=q;var Ee=e.alternate;Ee!==null&&(Ee=Ee.updateQueue,A=Ee.lastBaseUpdate,A!==v&&(A===null?Ee.firstBaseUpdate=pe:A.next=pe,Ee.lastBaseUpdate=q))}if(m!==null){var Le=f.baseState;v=0,Ee=pe=q=null,A=m;do{var ye=A.lane&-536870913,ve=ye!==A.lane;if(ve?(xn&ye)===ye:(r&ye)===ye){ye!==0&&ye===Ir&&(pf=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Mt=e,Xt=A;ye=s;var ns=o;switch(Xt.tag){case 1:if(Mt=Xt.payload,typeof Mt=="function"){Le=Mt.call(ns,Le,ye);break e}Le=Mt;break e;case 3:Mt.flags=Mt.flags&-65537|128;case 0:if(Mt=Xt.payload,ye=typeof Mt=="function"?Mt.call(ns,Le,ye):Mt,ye==null)break e;Le=x({},Le,ye);break e;case 2:Da=!0}}ye=A.callback,ye!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[ye]:ve.push(ye))}else ve={lane:ye,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Ee===null?(pe=Ee=ve,q=Le):Ee=Ee.next=ve,v|=ye;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ve=A,A=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);Ee===null&&(q=Le),f.baseState=q,f.firstBaseUpdate=pe,f.lastBaseUpdate=Ee,m===null&&(f.shared.lanes=0),$a|=v,e.lanes=v,e.memoizedState=Le}}function __(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function g_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)__(o[e],s)}var Ur=N(null),eu=N(0);function y_(e,s){e=wa,oe(eu,e),oe(Ur,s),wa=e|s.baseLanes}function _f(){oe(eu,wa),oe(Ur,Ur.current)}function gf(){wa=eu.current,ae(Ur),ae(eu)}var di=N(null),Ei=null;function Ba(e){var s=e.alternate;oe(Fs,Fs.current&1),oe(di,e),Ei===null&&(s===null||Ur.current!==null||s.memoizedState!==null)&&(Ei=e)}function yf(e){oe(Fs,Fs.current),oe(di,e),Ei===null&&(Ei=e)}function x_(e){e.tag===22?(oe(Fs,Fs.current),oe(di,e),Ei===null&&(Ei=e)):La()}function La(){oe(Fs,Fs.current),oe(di,di.current)}function fi(e){ae(di),Ei===e&&(Ei=null),ae(Fs)}var Fs=N(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ma=0,sn=null,es=null,to=null,nu=!1,Yr=!1,mr=!1,su=0,Bl=0,Wr=null,y2=0;function Is(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!vt(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return ma=m,sn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=e===null||e.memoizedState===null?ng:Lf,mr=!1,m=o(r,f),mr=!1,Yr&&(m=v_(s,o,r,f)),b_(e),m}function b_(e){z.H=zl;var s=es!==null&&es.next!==null;if(ma=0,to=es=sn=null,nu=!1,Bl=0,Wr=null,s)throw Error(a(300));e===null||no||(e=e.dependencies,e!==null&&Xc(e)&&(no=!0))}function v_(e,s,o,r){sn=e;var f=0;do{if(Yr&&(Wr=null),Bl=0,Yr=!1,25<=f)throw Error(a(301));if(f+=1,to=es=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=sg,m=s(o,r)}while(Yr);return m}function x2(){var e=z.H,s=e.useState()[0];return s=typeof s.then=="function"?Ll(s):s,e=e.useState()[0],(es!==null?es.memoizedState:null)!==e&&(sn.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}ma=0,to=es=sn=null,Yr=!1,Bl=su=0,Wr=null}function Wo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return to===null?sn.memoizedState=to=e:to=to.next=e,to}function Xs(){if(es===null){var e=sn.alternate;e=e!==null?e.memoizedState:null}else e=es.next;var s=to===null?sn.memoizedState:to.next;if(s!==null)to=s,es=e;else{if(e===null)throw sn.alternate===null?Error(a(467)):Error(a(310));es=e,e={memoizedState:es.memoizedState,baseState:es.baseState,baseQueue:es.baseQueue,queue:es.queue,next:null},to===null?sn.memoizedState=to=e:to=to.next=e}return to}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(e){var s=Bl;return Bl+=1,Wr===null&&(Wr=[]),e=d_(Wr,e,s),s=sn,(to===null?s.memoizedState:to.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?ng:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ll(e);if(e.$$typeof===O)return Eo(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=sn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=sn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),sn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=re;return s.index++,o}function pa(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Xs();return kf(s,es,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,q=null,pe=s,Ee=!1;do{var Le=pe.lane&-536870913;if(Le!==pe.lane?(xn&Le)===Le:(ma&Le)===Le){var ye=pe.revertLane;if(ye===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),Le===Ir&&(Ee=!0);else if((ma&ye)===ye){pe=pe.next,ye===Ir&&(Ee=!0);continue}else Le={lane:0,revertLane:pe.revertLane,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},q===null?(A=q=Le,v=m):q=q.next=Le,sn.lanes|=ye,$a|=ye;Le=pe.action,mr&&o(m,Le),m=pe.hasEagerState?pe.eagerState:o(m,Le)}else ye={lane:Le,revertLane:pe.revertLane,gesture:pe.gesture,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},q===null?(A=q=ye,v=m):q=q.next=ye,sn.lanes|=Le,$a|=Le;pe=pe.next}while(pe!==null&&pe!==s);if(q===null?v=m:q.next=A,!vt(m,e.memoizedState)&&(no=!0,Ee&&(o=Pr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=q,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=Xs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);vt(m,s.memoizedState)||(no=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function w_(e,s,o){var r=sn,f=Xs(),m=wn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!vt((es||f).memoizedState,o);if(v&&(f.memoizedState=o,no=!0),f=f.queue,Tf(k_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||to!==null&&to.memoizedState.tag&1){if(r.flags|=2048,Fr(9,{destroy:void 0},C_.bind(null,r,f,o,s),null),us===null)throw Error(a(349));m||(ma&127)!==0||S_(r,s,o)}return o}function S_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=sn.updateQueue,s===null?(s=ou(),sn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function C_(e,s,o,r){s.value=o,s.getSnapshot=r,j_(s)&&M_(e)}function k_(e,s,o){return o(function(){j_(s)&&M_(e)})}function j_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!vt(e,o)}catch{return!0}}function M_(e){var s=ir(e,2);s!==null&&ii(s,e,2)}function Mf(e){var s=Wo();if(typeof e=="function"){var o=e;if(e=o(),mr){Ne(!0);try{o()}finally{Ne(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},s}function E_(e,s,o,r){return e.baseState=o,kf(e,es,typeof r=="function"?r:pa)}function b2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};z.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,T_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function T_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=z.T,v={};z.T=v;try{var A=o(f,r),q=z.S;q!==null&&q(v,A),A_(e,s,A)}catch(pe){Ef(e,s,pe)}finally{m!==null&&v.types!==null&&(m.types=v.types),z.T=m}}else try{m=o(f,r),A_(e,s,m)}catch(pe){Ef(e,s,pe)}}function A_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){D_(e,s,r)},function(r){return Ef(e,s,r)}):D_(e,s,o)}function D_(e,s,o){s.status="fulfilled",s.value=o,N_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,T_(e,o)))}function Ef(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,N_(s),s=s.next;while(s!==r)}e.action=null}function N_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function R_(e,s){return s}function B_(e,s){if(wn){var o=us.formState;if(o!==null){e:{var r=sn;if(wn){if(ws){t:{for(var f=ws,m=Mi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ti(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ws=Ti(f.nextSibling),r=f.data==="F!";break e}}Ta(r)}r=!1}r&&(s=o[0])}}return o=Wo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R_,lastRenderedState:s},o.queue=r,o=J_.bind(null,sn,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,sn,!1,r.queue),r=Wo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=b2.bind(null,sn,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function L_(e){var s=Xs();return O_(s,es,e)}function O_(e,s,o){if(s=kf(e,s,R_)[0],e=au(pa)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Ll(s)}catch(v){throw v===Hr?Kc:v}else r=s;s=Xs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(sn.flags|=2048,Fr(9,{destroy:void 0},v2.bind(null,f,o),null)),[r,m,e]}function v2(e,s){e.action=s}function z_(e){var s=Xs(),o=es;if(o!==null)return O_(s,o,e);Xs(),s=s.memoizedState,o=Xs();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Fr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=sn.updateQueue,s===null&&(s=ou(),sn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function $_(){return Xs().memoizedState}function ru(e,s,o,r){var f=Wo();sn.flags|=e,f.memoizedState=Fr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=Xs();r=r===void 0?null:r;var m=f.memoizedState.inst;es!==null&&r!==null&&xf(r,es.memoizedState.deps)?f.memoizedState=Fr(s,m,o,r):(sn.flags|=e,f.memoizedState=Fr(1|s,m,o,r))}function I_(e,s){ru(8390656,8,e,s)}function Tf(e,s){lu(2048,8,e,s)}function w2(e){sn.flags|=4;var s=sn.updateQueue;if(s===null)s=ou(),sn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function P_(e){var s=Xs().memoizedState;return w2({ref:s,nextImpl:e}),function(){if((zn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function H_(e,s){return lu(4,2,e,s)}function V_(e,s){return lu(4,4,e,s)}function U_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function Y_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,U_.bind(null,s,e),o)}function Af(){}function W_(e,s){var o=Xs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function F_(e,s){var o=Xs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),mr){Ne(!0);try{e()}finally{Ne(!1)}}return o.memoizedState=[r,s],r}function Df(e,s,o){return o===void 0||(ma&1073741824)!==0&&(xn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Xg(),sn.lanes|=e,$a|=e,o)}function X_(e,s,o,r){return vt(o,s)?o:Ur.current!==null?(e=Df(e,o,r),vt(e,s)||(no=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(xn&261930)===0?(no=!0,e.memoizedState=o):(e=Xg(),sn.lanes|=e,$a|=e,s)}function G_(e,s,o,r,f){var m=ce.p;ce.p=m!==0&&8>m?m:8;var v=z.T,A={};z.T=A,Bf(e,!1,s,o);try{var q=f(),pe=z.S;if(pe!==null&&pe(A,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var Ee=g2(q,r);Ol(e,s,Ee,pi(e))}else Ol(e,s,r,pi(e))}catch(Le){Ol(e,s,{then:function(){},status:"rejected",reason:Le},pi())}finally{ce.p=m,v!==null&&A.types!==null&&(v.types=A.types),z.T=v}}function S2(){}function Nf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=q_(e).queue;G_(e,f,s,U,o===null?S2:function(){return K_(e),o(r)})}function q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:U},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function K_(e){var s=q_(e);s.next===null&&(s=e.alternate.memoizedState),Ol(e,s.next.queue,{},pi())}function Rf(){return Eo(Jl)}function Q_(){return Xs().memoizedState}function Z_(){return Xs().memoizedState}function C2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=pi();e=Na(o);var r=Ra(s,e,o);r!==null&&(ii(r,s,o),Dl(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function k2(e,s,o){var r=pi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?eg(s,o):(o=Kd(e,s,o,r),o!==null&&(ii(o,e,r),tg(o,s,r)))}function J_(e,s,o){var r=pi();Ol(e,s,o,r)}function Ol(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))eg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,vt(A,v))return Uc(e,s,f,0),us===null&&Vc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return ii(o,e,r),tg(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&ii(s,e,2)}function cu(e){var s=e.alternate;return e===sn||s!==null&&s===sn}function eg(e,s){Yr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function tg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,_n(e,o)}}var zl={readContext:Eo,use:iu,useCallback:Is,useContext:Is,useEffect:Is,useImperativeHandle:Is,useLayoutEffect:Is,useInsertionEffect:Is,useMemo:Is,useReducer:Is,useRef:Is,useState:Is,useDebugValue:Is,useDeferredValue:Is,useTransition:Is,useSyncExternalStore:Is,useId:Is,useHostTransitionStatus:Is,useFormState:Is,useActionState:Is,useOptimistic:Is,useMemoCache:Is,useCacheRefresh:Is};zl.useEffectEvent=Is;var ng={readContext:Eo,use:iu,useCallback:function(e,s){return Wo().memoizedState=[e,s===void 0?null:s],e},useContext:Eo,useEffect:I_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,U_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=Wo();s=s===void 0?null:s;var r=e();if(mr){Ne(!0);try{e()}finally{Ne(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Wo();if(o!==void 0){var f=o(s);if(mr){Ne(!0);try{o(s)}finally{Ne(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=k2.bind(null,sn,e),[r.memoizedState,e]},useRef:function(e){var s=Wo();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=J_.bind(null,sn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=Wo();return Df(o,e,s)},useTransition:function(){var e=Mf(!1);return e=G_.bind(null,sn,e.queue,!0,!1),Wo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=sn,f=Wo();if(wn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),us===null)throw Error(a(349));(xn&127)!==0||S_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,I_(k_.bind(null,r,m,e),[e]),r.flags|=2048,Fr(9,{destroy:void 0},C_.bind(null,r,m,o,s),null),o},useId:function(){var e=Wo(),s=us.identifierPrefix;if(wn){var o=ta,r=ea;o=(r&~(1<<32-wt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=y2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:B_,useActionState:B_,useOptimistic:function(e){var s=Wo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,sn,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return Wo().memoizedState=C2.bind(null,sn)},useEffectEvent:function(e){var s=Wo(),o={impl:e};return s.memoizedState=o,function(){if((zn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:Eo,use:iu,useCallback:W_,useContext:Eo,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:F_,useReducer:au,useRef:$_,useState:function(){return au(pa)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Xs();return X_(o,es.memoizedState,e,s)},useTransition:function(){var e=au(pa)[0],s=Xs().memoizedState;return[typeof e=="boolean"?e:Ll(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Rf,useFormState:L_,useActionState:L_,useOptimistic:function(e,s){var o=Xs();return E_(o,es,e,s)},useMemoCache:Cf,useCacheRefresh:Z_};Lf.useEffectEvent=P_;var sg={readContext:Eo,use:iu,useCallback:W_,useContext:Eo,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:F_,useReducer:jf,useRef:$_,useState:function(){return jf(pa)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Xs();return es===null?Df(o,e,s):X_(o,es.memoizedState,e,s)},useTransition:function(){var e=jf(pa)[0],s=Xs().memoizedState;return[typeof e=="boolean"?e:Ll(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Rf,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var o=Xs();return es!==null?E_(o,es,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:Z_};sg.useEffectEvent=P_;function Of(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var zf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=pi(),f=Na(r);f.payload=s,o!=null&&(f.callback=o),s=Ra(e,f,r),s!==null&&(ii(s,e,r),Dl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=pi(),f=Na(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ra(e,f,r),s!==null&&(ii(s,e,r),Dl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=pi(),r=Na(o);r.tag=2,s!=null&&(r.callback=s),s=Ra(e,r,o),s!==null&&(ii(s,e,o),Dl(s,e,o))}};function og(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!pt(o,r)||!pt(f,m):!0}function ig(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&zf.enqueueReplaceState(s,s.state,null)}function pr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ag(e){Hc(e)}function rg(e){console.error(e)}function lg(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function cg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=Na(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function ug(e){return e=Na(e),e.tag=3,e}function dg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){cg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){cg(s,o,r),typeof f!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function j2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&$r(s,o,f,!0),o=di.current,o!==null){switch(o.tag){case 31:case 13:return Ei===null?wu():o.alternate===null&&Ps===0&&(Ps=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),wu(),!1}if(wn)return s=di.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),jl(Ci(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),jl(Ci(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ci(r,o),f=$f(e.stateNode,r,f),mf(e,f),Ps!==4&&(Ps=2)),!1;var m=Error(a(520),{cause:r});if(m=Ci(m,o),Wl===null?Wl=[m]:Wl.push(m),Ps!==4&&(Ps=2),s===null)return!0;r=Ci(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ia===null||!Ia.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=ug(f),dg(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),no=!1;function To(e,s,o,r){s.child=e===null?p_(s,null,o,r):hr(s,e.child,o,r)}function fg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return cr(s),r=bf(e,s,o,v,m,f),A=vf(),e!==null&&!no?(wf(e,s,f),_a(e,s,f)):(wn&&A&&ef(s),s.flags|=1,To(e,s,r,f),s.child)}function hg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,mg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:pt,o(v,r)&&e.ref===s.ref)return _a(e,s,f)}return s.flags|=1,e=ua(m,r),e.ref=s.ref,e.return=s,s.child=e}function mg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(pt(m,r)&&e.ref===s.ref)if(no=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(no=!0);else return s.lanes=e.lanes,_a(e,s,f)}return Pf(e,s,o,r,f)}function pg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return _g(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?y_(s,m):_f(),x_(s);else return r=s.lanes=536870912,_g(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),y_(s,m),La(),s.memoizedState=null):(e!==null&&qc(s,null),_f(),La());return To(e,s,f,o),s.child}function $l(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function _g(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:eo._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),_f(),x_(s),e!==null&&$r(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function gg(e,s,o){return hr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,fi(s),s.memoizedState=null,e}function M2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(wn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,$l(null,e);if(yf(s),(e=ws)?(e=T0(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,Mo=s,ws=null)):e=null,e===null)throw Ta(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=gg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(no||$r(e,s,o,!1),f=(o&e.childLanes)!==0,no||f){if(r=us,r!==null&&(v=vn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,ir(e,v),ii(r,e,v),If;wu(),s=gg(e,s,o)}else e=m.treeContext,ws=Ti(v.nextSibling),Mo=s,wn=!0,Ea=null,Mi=!1,e!==null&&s_(s,e),s=du(s,r),s.flags|=4096;return s}return e=ua(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return cr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!no?(wf(e,s,f),_a(e,s,f)):(wn&&r&&ef(s),s.flags|=1,To(e,s,o,f),s.child)}function yg(e,s,o,r,f,m){return cr(s),s.updateQueue=null,o=v_(s,r,o,f),b_(e),r=vf(),e!==null&&!no?(wf(e,s,m),_a(e,s,m)):(wn&&r&&ef(s),s.flags|=1,To(e,s,o,m),s.child)}function xg(e,s,o,r,f){if(cr(s),s.stateNode===null){var m=Br,v=o.contextType;typeof v=="object"&&v!==null&&(m=Eo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Eo(v):Br,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Of(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&zf.enqueueReplaceState(m,m.state,null),Rl(s,r,m,f),Nl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,q=pr(o,A);m.props=q;var pe=m.context,Ee=o.contextType;v=Br,typeof Ee=="object"&&Ee!==null&&(v=Eo(Ee));var Le=o.getDerivedStateFromProps;Ee=typeof Le=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,Ee||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||pe!==v)&&ig(s,m,r,v),Da=!1;var ye=s.memoizedState;m.state=ye,Rl(s,r,m,f),Nl(),pe=s.memoizedState,A||ye!==pe||Da?(typeof Le=="function"&&(Of(s,o,Le,r),pe=s.memoizedState),(q=Da||og(s,o,q,r,ye,pe,v))?(Ee||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=pe),m.props=r,m.state=pe,m.context=v,r=q):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,Ee=pr(o,v),m.props=Ee,Le=s.pendingProps,ye=m.context,pe=o.contextType,q=Br,typeof pe=="object"&&pe!==null&&(q=Eo(pe)),A=o.getDerivedStateFromProps,(pe=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Le||ye!==q)&&ig(s,m,r,q),Da=!1,ye=s.memoizedState,m.state=ye,Rl(s,r,m,f),Nl();var ve=s.memoizedState;v!==Le||ye!==ve||Da||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&(Of(s,o,A,r),ve=s.memoizedState),(Ee=Da||og(s,o,Ee,r,ye,ve,q)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(pe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ve,q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ve,q)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ve),m.props=r,m.state=ve,m.context=q,r=Ee):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ye===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=hr(s,e.child,null,f),s.child=hr(s,null,o,f)):To(e,s,o,f),s.memoizedState=m.state,e=s.child):e=_a(e,s,f),e}function bg(e,s,o,r){return rr(),s.flags|=256,To(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:c_()}}function Uf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=mi),e}function vg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Fs.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(wn){if(f?Ba(s):La(),(e=ws)?(e=T0(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,Mo=s,ws=null)):e=null,e===null)throw Ta(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(La(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=ar(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Vf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Hf,$l(null,r)):(Ba(s),Yf(s,A))}var q=e.memoizedState;if(q!==null&&(A=q.dehydrated,A!==null)){if(m)s.flags&256?(Ba(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(La(),s.child=e.child,s.flags|=128,s=null):(La(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=ar(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,hr(s,e.child,null,o),r=s.child,r.memoizedState=Vf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Hf,s=$l(null,r));else if(Ba(s),kh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var pe=v.dgst;v=pe,r=Error(a(419)),r.stack="",r.digest=v,jl({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(no||$r(e,s,o,!1),v=(o&e.childLanes)!==0,no||v){if(v=us,v!==null&&(r=vn(v,o),r!==0&&r!==q.retryLane))throw q.retryLane=r,ir(e,r),ii(v,e,r),If;Ch(A)||wu(),s=Wf(e,s,o)}else Ch(A)?(s.flags|=192,s.child=e.child,s=null):(e=q.treeContext,ws=Ti(A.nextSibling),Mo=s,wn=!0,Ea=null,Mi=!1,e!==null&&s_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(La(),A=r.fallback,f=s.mode,q=e.child,pe=q.sibling,r=ua(q,{mode:"hidden",children:r.children}),r.subtreeFlags=q.subtreeFlags&65011712,pe!==null?A=ua(pe,A):(A=ar(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,$l(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Vf(o):(f=A.cachePool,f!==null?(q=eo._currentValue,f=f.parent!==q?{parent:q,pool:q}:f):f=c_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Uf(e,v,o),s.memoizedState=Hf,$l(e.child,r)):(Ba(s),o=e.child,e=o.sibling,o=ua(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=ui(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return hr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function wg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Sg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Fs.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,oe(Fs,v),To(e,s,r,o),r=wn?kl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,o,s);else if(e.tag===19)wg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function _a(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),$a|=s.lanes,(o&s.childLanes)===0)if(e!==null){if($r(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=ua(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=ua(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function E2(e,s,o){switch(s.tag){case 3:ct(s,s.stateNode.containerInfo),Aa(s,eo,e.memoizedState.cache),rr();break;case 27:case 5:Yt(s);break;case 4:ct(s,s.stateNode.containerInfo);break;case 10:Aa(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Ba(s),s.flags|=128,null):(o&s.child.childLanes)!==0?vg(e,s,o):(Ba(s),e=_a(e,s,o),e!==null?e.sibling:null);Ba(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||($r(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Sg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),oe(Fs,Fs.current),r)break;return null;case 22:return s.lanes=0,pg(e,s,o,s.pendingProps);case 24:Aa(s,eo,e.memoizedState.cache)}return _a(e,s,o)}function Cg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)no=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return no=!1,E2(e,s,o);no=(e.flags&131072)!==0}else no=!1,wn&&(s.flags&1048576)!==0&&n_(s,kl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=dr(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=pr(e,r),s.tag=1,s=xg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===D){s.tag=11,s=fg(null,s,e,r,o);break e}else if(f===X){s.tag=14,s=hg(null,s,e,r,o);break e}}throw s=J(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=pr(r,s.pendingProps),xg(e,s,r,f,o);case 3:e:{if(ct(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Rl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Aa(s,eo,r),r!==m.cache&&rf(s,[eo],o,!0),Nl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=bg(e,s,r,o);break e}else if(r!==f){f=Ci(Error(a(424)),s),jl(f),s=bg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ws=Ti(e.firstChild),Mo=s,wn=!0,Ea=null,Mi=!0,o=p_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(rr(),r===f){s=_a(e,s,o);break e}To(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=L0(s.type,null,s.pendingProps,null))?s.memoizedState=o:wn||(o=s.type,e=s.pendingProps,r=Tu(ze.current).createElement(o),r[cn]=s,r[Dn]=e,Ao(r,o,e),un(r),s.stateNode=r):s.memoizedState=L0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Yt(s),e===null&&wn&&(r=s.stateNode=N0(s.type,s.pendingProps,ze.current),Mo=s,Mi=!0,f=ws,Ua(s.type)?(jh=f,ws=Ti(r.firstChild)):ws=f),To(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&wn&&((f=r=ws)&&(r=ov(r,s.type,s.pendingProps,Mi),r!==null?(s.stateNode=r,Mo=s,ws=Ti(r.firstChild),Mi=!1,f=!0):f=!1),f||Ta(s)),Yt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,x2,null,null,o),Jl._currentValue=f),fu(e,s),To(e,s,r,o),s.child;case 6:return e===null&&wn&&((e=o=ws)&&(o=iv(o,s.pendingProps,Mi),o!==null?(s.stateNode=o,Mo=s,ws=null,e=!0):e=!1),e||Ta(s)),null;case 13:return vg(e,s,o);case 4:return ct(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=hr(s,null,r,o):To(e,s,r,o),s.child;case 11:return fg(e,s,s.type,s.pendingProps,o);case 7:return To(e,s,s.pendingProps,o),s.child;case 8:return To(e,s,s.pendingProps.children,o),s.child;case 12:return To(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Aa(s,s.type,r.value),To(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,cr(s),f=Eo(f),r=r(f),s.flags|=1,To(e,s,r,o),s.child;case 14:return hg(e,s,s.type,s.pendingProps,o);case 15:return mg(e,s,s.type,s.pendingProps,o);case 19:return Sg(e,s,o);case 31:return M2(e,s,o);case 22:return pg(e,s,o,s.pendingProps);case 24:return cr(s),r=Eo(eo),e===null?(f=uf(),f===null&&(f=us,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),Aa(s,eo,f)):((e.lanes&o)!==0&&(hf(e,s),Rl(s,null,null,o),Nl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Aa(s,eo,r)):(r=m.cache,Aa(s,eo,r),r!==f.cache&&rf(s,[eo],o,!0))),To(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ga(e){e.flags|=4}function Gf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw fr=Qc,df}else e.flags&=-16777217}function kg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P0(s))if(Qg())e.flags|=8192;else throw fr=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?bt():536870912,e.lanes|=s,Kr|=s)}function Il(e,s){if(!wn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ss(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function T2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ss(s),null;case 1:return Ss(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ha(eo),Ct(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(zr(s)?ga(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),Ss(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ga(s),m!==null?(Ss(s),kg(s,m)):(Ss(s),Gf(s,f,null,r,o))):m?m!==e.memoizedState?(ga(s),Ss(s),kg(s,m)):(Ss(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ga(s),Ss(s),Gf(s,f,e,r,o)),null;case 27:if(xt(s),o=ze.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ga(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ss(s),null}e=ge.current,zr(s)?o_(s):(e=N0(f,r,o),s.stateNode=e,ga(s))}return Ss(s),null;case 5:if(xt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ga(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ss(s),null}if(m=ge.current,zr(s))o_(s);else{var v=Tu(ze.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[cn]=s,m[Dn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Ao(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ga(s)}}return Ss(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ga(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=ze.current,zr(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=Mo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[cn]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||v0(e.nodeValue,o)),e||Ta(s,!0)}else e=Tu(e).createTextNode(r),e[cn]=s,s.stateNode=e}return Ss(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=zr(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[cn]=s}else rr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ss(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(fi(s),s):(fi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return Ss(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=zr(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[cn]=s}else rr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ss(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(fi(s),s):(fi(s),null)}return fi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),Ss(s),null);case 4:return Ct(),e===null&&_h(s.stateNode.containerInfo),Ss(s),null;case 10:return ha(s.type),Ss(s),null;case 19:if(ae(Fs),r=s.memoizedState,r===null)return Ss(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Il(r,!1);else{if(Ps!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Il(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Jp(o,e),o=o.sibling;return oe(Fs,Fs.current&1|2),wn&&da(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&ft()>xu&&(s.flags|=128,f=!0,Il(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Il(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!wn)return Ss(s),null}else 2*ft()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Il(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ft(),e.sibling=null,o=Fs.current,oe(Fs,f?o&1|2:o&1),wn&&da(s,r.treeForkCount),e):(Ss(s),null);case 22:case 23:return fi(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(Ss(s),s.subtreeFlags&6&&(s.flags|=8192)):Ss(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ae(ur),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ha(eo),Ss(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function A2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ha(eo),Ct(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return xt(s),null;case 31:if(s.memoizedState!==null){if(fi(s),s.alternate===null)throw Error(a(340));rr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(fi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));rr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ae(Fs),null;case 4:return Ct(),null;case 10:return ha(s.type),null;case 22:case 23:return fi(s),gf(),e!==null&&ae(ur),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ha(eo),null;case 25:return null;default:return null}}function jg(e,s){switch(tf(s),s.tag){case 3:ha(eo),Ct();break;case 26:case 27:case 5:xt(s);break;case 4:Ct();break;case 31:s.memoizedState!==null&&fi(s);break;case 13:fi(s);break;case 19:ae(Fs);break;case 10:ha(s.type);break;case 22:case 23:fi(s),gf(),e!==null&&ae(ur);break;case 24:ha(eo)}}function Pl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Gn(s,s.return,A)}}function Oa(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var q=o,pe=A;try{pe()}catch(Ee){Gn(f,q,Ee)}}}r=r.next}while(r!==m)}}catch(Ee){Gn(s,s.return,Ee)}}function Mg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{g_(s,o)}catch(r){Gn(e,e.return,r)}}}function Eg(e,s,o){o.props=pr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Gn(e,s,r)}}function Hl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Gn(e,s,f)}}function na(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Gn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Gn(e,s,f)}else o.current=null}function Tg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Gn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;Z2(r,e.type,o,s),r[Dn]=s}catch(f){Gn(e,e.return,f)}}function Ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Qs));else if(r!==4&&(r===27&&Ua(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ua(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Dg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Ao(s,r,o),s[cn]=e,s[Dn]=o}catch(m){Gn(e,e.return,m)}}var ya=!1,so=!1,Zf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,wo=null;function D2(e,s){if(e=e.containerInfo,xh=Ou,e=jn(e),Yn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,q=-1,pe=0,Ee=0,Le=e,ye=null;t:for(;;){for(var ve;Le!==o||f!==0&&Le.nodeType!==3||(A=v+f),Le!==m||r!==0&&Le.nodeType!==3||(q=v+r),Le.nodeType===3&&(v+=Le.nodeValue.length),(ve=Le.firstChild)!==null;)ye=Le,Le=ve;for(;;){if(Le===e)break t;if(ye===o&&++pe===f&&(A=v),ye===m&&++Ee===r&&(q=v),(ve=Le.nextSibling)!==null)break;Le=ye,ye=Le.parentNode}Le=ve}o=A===-1||q===-1?null:{start:A,end:q}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},Ou=!1,wo=s;wo!==null;)if(s=wo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,wo=e;else for(;wo!==null;){switch(s=wo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Mt=pr(o.type,f);e=r.getSnapshotBeforeUpdate(Mt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Xt){Gn(o,o.return,Xt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,wo=e;break}wo=s.return}}function Rg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:ba(e,o),r&4&&Pl(5,o);break;case 1:if(ba(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Gn(o,o.return,v)}else{var f=pr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Gn(o,o.return,v)}}r&64&&Mg(o),r&512&&Hl(o,o.return);break;case 3:if(ba(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{g_(e,s)}catch(v){Gn(o,o.return,v)}}break;case 27:s===null&&r&4&&Dg(o);case 26:case 5:ba(e,o),s===null&&r&4&&Tg(o),r&512&&Hl(o,o.return);break;case 12:ba(e,o);break;case 31:ba(e,o),r&4&&Og(e,o);break;case 13:ba(e,o),r&4&&zg(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=P2.bind(null,o),av(e,o))));break;case 22:if(r=o.memoizedState!==null||ya,!r){s=s!==null&&s.memoizedState!==null||so,f=ya;var m=so;ya=r,(so=s)&&!m?va(e,o,(o.subtreeFlags&8772)!==0):ba(e,o),ya=f,so=m}break;case 30:break;default:ba(e,o)}}function Bg(e){var s=e.alternate;s!==null&&(e.alternate=null,Bg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&qs(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ks=null,ti=!1;function xa(e,s,o){for(o=o.child;o!==null;)Lg(e,s,o),o=o.sibling}function Lg(e,s,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 26:so||na(o,s),xa(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:so||na(o,s);var r=ks,f=ti;Ua(o.type)&&(ks=o.stateNode,ti=!1),xa(e,s,o),Kl(o.stateNode),ks=r,ti=f;break;case 5:so||na(o,s);case 6:if(r=ks,f=ti,ks=null,xa(e,s,o),ks=r,ti=f,ks!==null)if(ti)try{(ks.nodeType===9?ks.body:ks.nodeName==="HTML"?ks.ownerDocument.body:ks).removeChild(o.stateNode)}catch(m){Gn(o,s,m)}else try{ks.removeChild(o.stateNode)}catch(m){Gn(o,s,m)}break;case 18:ks!==null&&(ti?(e=ks,M0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),ol(e)):M0(ks,o.stateNode));break;case 4:r=ks,f=ti,ks=o.stateNode.containerInfo,ti=!0,xa(e,s,o),ks=r,ti=f;break;case 0:case 11:case 14:case 15:Oa(2,o,s),so||Oa(4,o,s),xa(e,s,o);break;case 1:so||(na(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Eg(o,s,r)),xa(e,s,o);break;case 21:xa(e,s,o);break;case 22:so=(r=so)||o.memoizedState!==null,xa(e,s,o),so=r;break;default:xa(e,s,o)}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ol(e)}catch(o){Gn(s,s.return,o)}}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ol(e)}catch(o){Gn(s,s.return,o)}}function N2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Ng),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Ng),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=N2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=H2.bind(null,e,r);r.then(f,f)}})}function ni(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Ua(A.type)){ks=A.stateNode,ti=!1;break e}break;case 5:ks=A.stateNode,ti=!1;break e;case 3:case 4:ks=A.stateNode.containerInfo,ti=!0;break e}A=A.return}if(ks===null)throw Error(a(160));Lg(m,v,f),ks=null,ti=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)$g(s,e),s=s.sibling}var Hi=null;function $g(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(s,e),si(e),r&4&&(Oa(3,e,e.return),Pl(3,e),Oa(5,e,e.return));break;case 1:ni(s,e),si(e),r&512&&(so||o===null||na(o,o.return)),r&64&&ya&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Hi;if(ni(s,e),si(e),r&512&&(so||o===null||na(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ms]||m[cn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Ao(m,r,o),m[cn]=e,un(m),r=m;break e;case"link":var v=$0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),Ao(m,r,o),f.head.appendChild(m);break;case"meta":if(v=$0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),Ao(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[cn]=e,un(m),r=m}e.stateNode=r}else I0(f,e.type,e.stateNode);else e.stateNode=z0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?I0(f,e.type,e.stateNode):z0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ni(s,e),si(e),r&512&&(so||o===null||na(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ni(s,e),si(e),r&512&&(so||o===null||na(o,o.return)),e.flags&32){f=e.stateNode;try{Po(f,"")}catch(Mt){Gn(e,e.return,Mt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(ni(s,e),si(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Mt){Gn(e,e.return,Mt)}}break;case 3:if(Nu=null,f=Hi,Hi=Au(s.containerInfo),ni(s,e),Hi=f,si(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{ol(s.containerInfo)}catch(Mt){Gn(e,e.return,Mt)}Zf&&(Zf=!1,Ig(e));break;case 4:r=Hi,Hi=Au(e.stateNode.containerInfo),ni(s,e),si(e),Hi=r;break;case 12:ni(s,e),si(e);break;case 31:ni(s,e),si(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ni(s,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=ft()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var q=o!==null&&o.memoizedState!==null,pe=ya,Ee=so;if(ya=pe||f,so=Ee||q,ni(s,e),so=Ee,ya=pe,si(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||q||ya||so||_r(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){q=o=s;try{if(m=q.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=q.stateNode;var Le=q.memoizedProps.style,ye=Le!=null&&Le.hasOwnProperty("display")?Le.display:null;A.style.display=ye==null||typeof ye=="boolean"?"":(""+ye).trim()}}catch(Mt){Gn(q,q.return,Mt)}}}else if(s.tag===6){if(o===null){q=s;try{q.stateNode.nodeValue=f?"":q.memoizedProps}catch(Mt){Gn(q,q.return,Mt)}}}else if(s.tag===18){if(o===null){q=s;try{var ve=q.stateNode;f?E0(ve,!0):E0(q.stateNode,!1)}catch(Mt){Gn(q,q.return,Mt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ni(s,e),si(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ni(s,e),si(e)}}function si(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ag(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Po(v,""),o.flags&=-33);var A=Kf(e);pu(e,A,v);break;case 3:case 4:var q=o.stateNode.containerInfo,pe=Kf(e);Qf(e,pe,q);break;default:throw Error(a(161))}}catch(Ee){Gn(e,e.return,Ee)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Ig(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function ba(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Rg(e,s.alternate,s),s=s.sibling}function _r(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Oa(4,s,s.return),_r(s);break;case 1:na(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Eg(s,s.return,o),_r(s);break;case 27:Kl(s.stateNode);case 26:case 5:na(s,s.return),_r(s);break;case 22:s.memoizedState===null&&_r(s);break;case 30:_r(s);break;default:_r(s)}e=e.sibling}}function va(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:va(f,m,o),Pl(4,m);break;case 1:if(va(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(pe){Gn(r,r.return,pe)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var q=f.shared.hiddenCallbacks;if(q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<q.length;f++)__(q[f],A)}catch(pe){Gn(r,r.return,pe)}}o&&v&64&&Mg(m),Hl(m,m.return);break;case 27:Dg(m);case 26:case 5:va(f,m,o),o&&r===null&&v&4&&Tg(m),Hl(m,m.return);break;case 12:va(f,m,o);break;case 31:va(f,m,o),o&&v&4&&Og(f,m);break;case 13:va(f,m,o),o&&v&4&&zg(f,m);break;case 22:m.memoizedState===null&&va(f,m,o),Hl(m,m.return);break;case 30:break;default:va(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Ml(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Ml(e))}function Vi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Pg(e,s,o,r),s=s.sibling}function Pg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Vi(e,s,o,r),f&2048&&Pl(9,s);break;case 1:Vi(e,s,o,r);break;case 3:Vi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Ml(e)));break;case 12:if(f&2048){Vi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(q){Gn(s,s.return,q)}}else Vi(e,s,o,r);break;case 31:Vi(e,s,o,r);break;case 13:Vi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Vi(e,s,o,r):Vl(e,s):m._visibility&2?Vi(e,s,o,r):(m._visibility|=2,Xr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Vi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Vi(e,s,o,r)}}function Xr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,q=r,pe=v.flags;switch(v.tag){case 0:case 11:case 15:Xr(m,v,A,q,f),Pl(8,v);break;case 23:break;case 22:var Ee=v.stateNode;v.memoizedState!==null?Ee._visibility&2?Xr(m,v,A,q,f):Vl(m,v):(Ee._visibility|=2,Xr(m,v,A,q,f)),f&&pe&2048&&Jf(v.alternate,v);break;case 24:Xr(m,v,A,q,f),f&&pe&2048&&eh(v.alternate,v);break;default:Xr(m,v,A,q,f)}s=s.sibling}}function Vl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Vl(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Vl(o,r),f&2048&&eh(r.alternate,r);break;default:Vl(o,r)}s=s.sibling}}var Ul=8192;function Gr(e,s,o){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)Hg(e,s,o),e=e.sibling}function Hg(e,s,o){switch(e.tag){case 26:Gr(e,s,o),e.flags&Ul&&e.memoizedState!==null&&yv(o,Hi,e.memoizedState,e.memoizedProps);break;case 5:Gr(e,s,o);break;case 3:case 4:var r=Hi;Hi=Au(e.stateNode.containerInfo),Gr(e,s,o),Hi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ul,Ul=16777216,Gr(e,s,o),Ul=r):Gr(e,s,o));break;default:Gr(e,s,o)}}function Vg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Yl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];wo=r,Yg(r,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:Yl(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Yl(e);break;case 12:Yl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Yl(e);break;default:Yl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];wo=r,Yg(r,e)}Vg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Oa(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Yg(e,s){for(;wo!==null;){var o=wo;switch(o.tag){case 0:case 11:case 15:Oa(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ml(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,wo=r;else e:for(o=e;wo!==null;){r=wo;var f=r.sibling,m=r.return;if(Bg(r),r===o){wo=null;break e}if(f!==null){f.return=m,wo=f;break e}wo=m}}}var R2={getCacheForType:function(e){var s=Eo(eo),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Eo(eo).controller.signal}},B2=typeof WeakMap=="function"?WeakMap:Map,zn=0,us=null,mn=null,xn=0,Xn=0,hi=null,za=!1,qr=!1,th=!1,wa=0,Ps=0,$a=0,gr=0,nh=0,mi=0,Kr=0,Wl=null,oi=null,sh=!1,yu=0,Wg=0,xu=1/0,bu=null,Ia=null,mo=0,Pa=null,Qr=null,Sa=0,oh=0,ih=null,Fg=null,Fl=0,ah=null;function pi(){return(zn&2)!==0&&xn!==0?xn&-xn:z.T!==null?fh():An()}function Xg(){if(mi===0)if((xn&536870912)===0||wn){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),mi=e}else mi=536870912;return e=di.current,e!==null&&(e.flags|=32),mi}function ii(e,s,o){(e===us&&(Xn===2||Xn===9)||e.cancelPendingCommit!==null)&&(Zr(e,0),Ha(e,xn,mi,!1)),yt(e,o),((zn&2)===0||e!==us)&&(e===us&&((zn&2)===0&&(gr|=o),Ps===4&&Ha(e,xn,mi,!1)),sa(e))}function Gg(e,s,o){if((zn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||et(e,s),f=r?z2(e,s):lh(e,s,!0),m=r;do{if(f===0){qr&&!r&&Ha(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!L2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Wl;var q=A.current.memoizedState.isDehydrated;if(q&&(Zr(A,v).flags|=256),v=lh(A,v,!1),v!==2){if(th&&!q){A.errorRecoveryDisabledLanes|=m,gr|=m,f=4;break e}m=oi,oi=f,m!==null&&(oi===null?oi=m:oi.push.apply(oi,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Zr(e,0),Ha(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ha(r,s,mi,!za);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-ft(),10<f)){if(Ha(r,s,mi,!za),st(r,0,!0)!==0)break e;Sa=s,r.timeoutHandle=k0(qg.bind(null,r,o,oi,bu,sh,s,mi,gr,Kr,za,m,"Throttled",-0,0),f);break e}qg(r,o,oi,bu,sh,s,mi,gr,Kr,za,m,null,-0,0)}}break}while(!0);sa(e)}function qg(e,s,o,r,f,m,v,A,q,pe,Ee,Le,ye,ve){if(e.timeoutHandle=-1,Le=s.subtreeFlags,Le&8192||(Le&16785408)===16785408){Le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qs},Hg(s,m,Le);var Mt=(m&62914560)===m?yu-ft():(m&4194048)===m?Wg-ft():0;if(Mt=xv(Le,Mt),Mt!==null){Sa=m,e.cancelPendingCommit=Mt(s0.bind(null,e,s,m,o,r,f,v,A,q,Ee,Le,null,ye,ve)),Ha(e,m,v,!pe);return}}s0(e,s,m,o,r,f,v,A,q)}function L2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!vt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ha(e,s,o,r){s&=~nh,s&=~gr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-wt(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&an(e,o,s)}function vu(){return(zn&6)===0?(Xl(0),!1):!0}function rh(){if(mn!==null){if(Xn===0)var e=mn.return;else e=mn,fa=lr=null,Sf(e),Vr=null,Tl=0,e=mn;for(;e!==null;)jg(e.alternate,e),e=e.return;mn=null}}function Zr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,tv(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Sa=0,rh(),us=e,mn=o=ua(e.current,null),xn=s,Xn=0,hi=null,za=!1,qr=et(e,s),th=!1,Kr=mi=nh=gr=$a=Ps=0,oi=Wl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-wt(r),m=1<<f;s|=e[f],r&=~m}return wa=s,Vc(),o}function Kg(e,s){sn=null,z.H=zl,s===Hr||s===Kc?(s=f_(),Xn=3):s===df?(s=f_(),Xn=4):Xn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,hi=s,mn===null&&(Ps=1,uu(e,Ci(s,e.current)))}function Qg(){var e=di.current;return e===null?!0:(xn&4194048)===xn?Ei===null:(xn&62914560)===xn||(xn&536870912)!==0?e===Ei:!1}function Zg(){var e=z.H;return z.H=zl,e===null?zl:e}function Jg(){var e=z.A;return z.A=R2,e}function wu(){Ps=4,za||(xn&4194048)!==xn&&di.current!==null||(qr=!0),($a&134217727)===0&&(gr&134217727)===0||us===null||Ha(us,xn,mi,!1)}function lh(e,s,o){var r=zn;zn|=2;var f=Zg(),m=Jg();(us!==e||xn!==s)&&(bu=null,Zr(e,s)),s=!1;var v=Ps;e:do try{if(Xn!==0&&mn!==null){var A=mn,q=hi;switch(Xn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(s=!0);var pe=Xn;if(Xn=0,hi=null,Jr(e,A,q,pe),o&&qr){v=0;break e}break;default:pe=Xn,Xn=0,hi=null,Jr(e,A,q,pe)}}O2(),v=Ps;break}catch(Ee){Kg(e,Ee)}while(!0);return s&&e.shellSuspendCounter++,fa=lr=null,zn=r,z.H=f,z.A=m,mn===null&&(us=null,xn=0,Vc()),v}function O2(){for(;mn!==null;)e0(mn)}function z2(e,s){var o=zn;zn|=2;var r=Zg(),f=Jg();us!==e||xn!==s?(bu=null,xu=ft()+500,Zr(e,s)):qr=et(e,s);e:do try{if(Xn!==0&&mn!==null){s=mn;var m=hi;t:switch(Xn){case 1:Xn=0,hi=null,Jr(e,s,m,1);break;case 2:case 9:if(u_(m)){Xn=0,hi=null,t0(s);break}s=function(){Xn!==2&&Xn!==9||us!==e||(Xn=7),sa(e)},m.then(s,s);break e;case 3:Xn=7;break e;case 4:Xn=5;break e;case 7:u_(m)?(Xn=0,hi=null,t0(s)):(Xn=0,hi=null,Jr(e,s,m,7));break;case 5:var v=null;switch(mn.tag){case 26:v=mn.memoizedState;case 5:case 27:var A=mn;if(v?P0(v):A.stateNode.complete){Xn=0,hi=null;var q=A.sibling;if(q!==null)mn=q;else{var pe=A.return;pe!==null?(mn=pe,Su(pe)):mn=null}break t}}Xn=0,hi=null,Jr(e,s,m,5);break;case 6:Xn=0,hi=null,Jr(e,s,m,6);break;case 8:rh(),Ps=6;break e;default:throw Error(a(462))}}$2();break}catch(Ee){Kg(e,Ee)}while(!0);return fa=lr=null,z.H=r,z.A=f,zn=o,mn!==null?0:(us=null,xn=0,Vc(),Ps)}function $2(){for(;mn!==null&&!Ye();)e0(mn)}function e0(e){var s=Cg(e.alternate,e,wa);e.memoizedProps=e.pendingProps,s===null?Su(e):mn=s}function t0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=yg(o,s,s.pendingProps,s.type,void 0,xn);break;case 11:s=yg(o,s,s.pendingProps,s.type.render,s.ref,xn);break;case 5:Sf(s);default:jg(o,s),s=mn=Jp(s,wa),s=Cg(o,s,wa)}e.memoizedProps=e.pendingProps,s===null?Su(e):mn=s}function Jr(e,s,o,r){fa=lr=null,Sf(s),Vr=null,Tl=0;var f=s.return;try{if(j2(e,f,s,o,xn)){Ps=1,uu(e,Ci(o,e.current)),mn=null;return}}catch(m){if(f!==null)throw mn=f,m;Ps=1,uu(e,Ci(o,e.current)),mn=null;return}s.flags&32768?(wn||r===1?e=!0:qr||(xn&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=di.current,r!==null&&r.tag===13&&(r.flags|=16384))),n0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){n0(s,za);return}e=s.return;var o=T2(s.alternate,s,wa);if(o!==null){mn=o;return}if(s=s.sibling,s!==null){mn=s;return}mn=s=e}while(s!==null);Ps===0&&(Ps=5)}function n0(e,s){do{var o=A2(e.alternate,e);if(o!==null){o.flags&=32767,mn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){mn=e;return}mn=e=o}while(e!==null);Ps=6,mn=null}function s0(e,s,o,r,f,m,v,A,q){e.cancelPendingCommit=null;do Cu();while(mo!==0);if((zn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,At(e,o,m,v,A,q),e===us&&(mn=us=null,xn=0),Qr=s,Pa=e,Sa=o,oh=m,ih=f,Fg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,V2(at,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,f=ce.p,ce.p=2,v=zn,zn|=4;try{D2(e,s,o)}finally{zn=v,ce.p=f,z.T=r}}mo=1,o0(),i0(),a0()}}function o0(){if(mo===1){mo=0;var e=Pa,s=Qr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var r=ce.p;ce.p=2;var f=zn;zn|=4;try{$g(s,e);var m=bh,v=jn(e.containerInfo),A=m.focusedElem,q=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&bs(A.ownerDocument.documentElement,A)){if(q!==null&&Yn(A)){var pe=q.start,Ee=q.end;if(Ee===void 0&&(Ee=pe),"selectionStart"in A)A.selectionStart=pe,A.selectionEnd=Math.min(Ee,A.value.length);else{var Le=A.ownerDocument||document,ye=Le&&Le.defaultView||window;if(ye.getSelection){var ve=ye.getSelection(),Mt=A.textContent.length,Xt=Math.min(q.start,Mt),ns=q.end===void 0?Xt:Math.min(q.end,Mt);!ve.extend&&Xt>ns&&(v=ns,ns=Xt,Xt=v);var le=xs(A,Xt),te=xs(A,ns);if(le&&te&&(ve.rangeCount!==1||ve.anchorNode!==le.node||ve.anchorOffset!==le.offset||ve.focusNode!==te.node||ve.focusOffset!==te.offset)){var me=Le.createRange();me.setStart(le.node,le.offset),ve.removeAllRanges(),Xt>ns?(ve.addRange(me),ve.extend(te.node,te.offset)):(me.setEnd(te.node,te.offset),ve.addRange(me))}}}}for(Le=[],ve=A;ve=ve.parentNode;)ve.nodeType===1&&Le.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Le.length;A++){var Be=Le[A];Be.element.scrollLeft=Be.left,Be.element.scrollTop=Be.top}}Ou=!!xh,bh=xh=null}finally{zn=f,ce.p=r,z.T=o}}e.current=s,mo=2}}function i0(){if(mo===2){mo=0;var e=Pa,s=Qr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var r=ce.p;ce.p=2;var f=zn;zn|=4;try{Rg(e,s.alternate,s)}finally{zn=f,ce.p=r,z.T=o}}mo=3}}function a0(){if(mo===4||mo===3){mo=0,nt();var e=Pa,s=Qr,o=Sa,r=Fg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?mo=5:(mo=0,Qr=Pa=null,r0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ia=null),In(o),s=s.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Je,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=z.T,f=ce.p,ce.p=2,z.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{z.T=s,ce.p=f}}(Sa&3)!==0&&Cu(),sa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Fl++:(Fl=0,ah=e):Fl=0,Xl(0)}}function r0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Ml(s)))}function Cu(){return o0(),i0(),a0(),l0()}function l0(){if(mo!==5)return!1;var e=Pa,s=oh;oh=0;var o=In(Sa),r=z.T,f=ce.p;try{ce.p=32>o?32:o,z.T=null,o=ih,ih=null;var m=Pa,v=Sa;if(mo=0,Qr=Pa=null,Sa=0,(zn&6)!==0)throw Error(a(331));var A=zn;if(zn|=4,Ug(m.current),Pg(m,m.current,v,o),zn=A,Xl(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Je,m)}catch{}return!0}finally{ce.p=f,z.T=r,r0(e,s)}}function c0(e,s,o){s=Ci(o,s),s=$f(e.stateNode,s,2),e=Ra(e,s,2),e!==null&&(yt(e,2),sa(e))}function Gn(e,s,o){if(e.tag===3)c0(e,e,o);else for(;s!==null;){if(s.tag===3){c0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=Ci(o,e),o=ug(2),r=Ra(s,o,2),r!==null&&(dg(o,r,s,e),yt(r,2),sa(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new B2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=I2.bind(null,e,s,o),s.then(e,e))}function I2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,us===e&&(xn&o)===o&&(Ps===4||Ps===3&&(xn&62914560)===xn&&300>ft()-yu?(zn&2)===0&&Zr(e,0):nh|=o,Kr===xn&&(Kr=0)),sa(e)}function u0(e,s){s===0&&(s=bt()),e=ir(e,s),e!==null&&(yt(e,s),sa(e))}function P2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),u0(e,o)}function H2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),u0(e,o)}function V2(e,s){return Xe(e,s)}var ku=null,el=null,uh=!1,ju=!1,dh=!1,Va=0;function sa(e){e!==el&&e.next===null&&(el===null?ku=el=e:el=el.next=e),ju=!0,uh||(uh=!0,Y2())}function Xl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-wt(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,m0(r,m))}else m=xn,m=st(r,r===us?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||et(r,m)||(o=!0,m0(r,m));r=r.next}while(o);dh=!1}}function U2(){d0()}function d0(){ju=uh=!1;var e=0;Va!==0&&ev()&&(e=Va);for(var s=ft(),o=null,r=ku;r!==null;){var f=r.next,m=f0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(el=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}mo!==0&&mo!==5||Xl(e),Va!==0&&(Va=0)}function f0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-wt(m),A=1<<v,q=f[v];q===-1?((A&o)===0||(A&r)!==0)&&(f[v]=Dt(A,s)):q<=s&&(e.expiredLanes|=A),m&=~A}if(s=us,o=xn,o=st(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Xn===2||Xn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ue(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||et(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Ue(r),In(o)){case 2:case 8:o=$t;break;case 32:o=at;break;case 268435456:o=Z;break;default:o=at}return r=h0.bind(null,e),o=Xe(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Ue(r),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,s){if(mo!==0&&mo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=xn;return r=st(e,e===us?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Gg(e,r,s),f0(e,ft()),e.callbackNode!=null&&e.callbackNode===o?h0.bind(null,e):null)}function m0(e,s){if(Cu())return null;Gg(e,s,!0)}function Y2(){nv(function(){(zn&6)!==0?Xe(gt,U2):d0()})}function fh(){if(Va===0){var e=Ir;e===0&&(e=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Va=e}return Va}function p0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vo(""+e)}function _0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function W2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=p0((f[Dn]||null).action),v=r.submitter;v&&(s=(s=v[Dn]||null)?p0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new ko("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var q=v?_0(f,v):new FormData(f);Nf(o,{pending:!0,data:q,method:f.method,action:m},null,q)}}else typeof m=="function"&&(A.preventDefault(),q=v?_0(f,v):new FormData(f),Nf(o,{pending:!0,data:q,method:f.method,action:m},m,q))},currentTarget:f}]})}}for(var hh=0;hh<Gd.length;hh++){var mh=Gd[hh],F2=mh.toLowerCase(),X2=mh[0].toUpperCase()+mh.slice(1);Pi(F2,"on"+X2)}Pi(Ii,"onAnimationEnd"),Pi(Ji,"onAnimationIteration"),Pi(Pc,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(Wd,"onTransitionRun"),Pi(Fd,"onTransitionStart"),Pi(Xd,"onTransitionCancel"),Pi(Kp,"onTransitionEnd"),gs("onMouseEnter",["mouseout","mouseover"]),gs("onMouseLeave",["mouseout","mouseover"]),gs("onPointerEnter",["pointerout","pointerover"]),gs("onPointerLeave",["pointerout","pointerover"]),Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function g0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],q=A.instance,pe=A.currentTarget;if(A=A.listener,q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=pe;try{m(f)}catch(Ee){Hc(Ee)}f.currentTarget=null,m=q}else for(v=0;v<r.length;v++){if(A=r[v],q=A.instance,pe=A.currentTarget,A=A.listener,q!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=pe;try{m(f)}catch(Ee){Hc(Ee)}f.currentTarget=null,m=q}}}}function pn(e,s){var o=s[rs];o===void 0&&(o=s[rs]=new Set);var r=e+"__bubble";o.has(r)||(y0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),y0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,yi.forEach(function(o){o!=="selectionchange"&&(G2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function y0(e,s,o,r){switch(X0(s)){case 2:var f=wv;break;case 8:f=Sv;break;default:f=Dh}o=f.bind(null,s,o,e),f=void 0,!Ws||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var q=v.tag;if((q===3||q===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=_s(A),v===null)return;if(q=v.tag,q===5||q===6||q===26||q===27){r=m=v;continue e}A=A.parentNode}}r=r.return}co(function(){var pe=m,Ee=lo(o),Le=[];e:{var ye=Qp.get(e);if(ye!==void 0){var ve=ko,Mt=e;switch(e){case"keypress":if(yo(o)===0)break e;case"keydown":case"keyup":ve=kn;break;case"focusin":Mt="focus",ve=G;break;case"focusout":Mt="blur",ve=G;break;case"beforeblur":case"afterblur":ve=G;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=bo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=Li;break;case Ii:case Ji:case Pc:ve=Ce;break;case Kp:ve=Lo;break;case"scroll":case"scrollend":ve=Js;break;case"wheel":ve=Qi;break;case"copy":case"cut":case"paste":ve=Ze;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=fo;break;case"toggle":case"beforetoggle":ve=Yo}var Xt=(s&4)!==0,ns=!Xt&&(e==="scroll"||e==="scrollend"),le=Xt?ye!==null?ye+"Capture":null:ye;Xt=[];for(var te=pe,me;te!==null;){var Be=te;if(me=Be.stateNode,Be=Be.tag,Be!==5&&Be!==26&&Be!==27||me===null||le===null||(Be=rn(te,le),Be!=null&&Xt.push(ql(te,Be,me))),ns)break;te=te.return}0<Xt.length&&(ye=new ve(ye,Mt,null,o,Ee),Le.push({event:ye,listeners:Xt}))}}if((s&7)===0){e:{if(ye=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",ye&&o!==vi&&(Mt=o.relatedTarget||o.fromElement)&&(_s(Mt)||Mt[it]))break e;if((ve||ye)&&(ye=Ee.window===Ee?Ee:(ye=Ee.ownerDocument)?ye.defaultView||ye.parentWindow:window,ve?(Mt=o.relatedTarget||o.toElement,ve=pe,Mt=Mt?_s(Mt):null,Mt!==null&&(ns=u(Mt),Xt=Mt.tag,Mt!==ns||Xt!==5&&Xt!==27&&Xt!==6)&&(Mt=null)):(ve=null,Mt=pe),ve!==Mt)){if(Xt=Uo,Be="onMouseLeave",le="onMouseEnter",te="mouse",(e==="pointerout"||e==="pointerover")&&(Xt=fo,Be="onPointerLeave",le="onPointerEnter",te="pointer"),ns=ve==null?ye:Io(ve),me=Mt==null?ye:Io(Mt),ye=new Xt(Be,te+"leave",ve,o,Ee),ye.target=ns,ye.relatedTarget=me,Be=null,_s(Ee)===pe&&(Xt=new Xt(le,te+"enter",Mt,o,Ee),Xt.target=me,Xt.relatedTarget=ns,Be=Xt),ns=Be,ve&&Mt)t:{for(Xt=q2,le=ve,te=Mt,me=0,Be=le;Be;Be=Xt(Be))me++;Be=0;for(var Pt=te;Pt;Pt=Xt(Pt))Be++;for(;0<me-Be;)le=Xt(le),me--;for(;0<Be-me;)te=Xt(te),Be--;for(;me--;){if(le===te||te!==null&&le===te.alternate){Xt=le;break t}le=Xt(le),te=Xt(te)}Xt=null}else Xt=null;ve!==null&&x0(Le,ye,ve,Xt,!1),Mt!==null&&ns!==null&&x0(Le,ns,Mt,Xt,!0)}}e:{if(ye=pe?Io(pe):window,ve=ye.nodeName&&ye.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ye.type==="file")var Bn=M;else if(Vt(ye))if(B)Bn=Et;else{Bn=rt;var Rt=Oe}else ve=ye.nodeName,!ve||ve.toLowerCase()!=="input"||ye.type!=="checkbox"&&ye.type!=="radio"?pe&&Us(pe.elementType)&&(Bn=M):Bn=ut;if(Bn&&(Bn=Bn(e,pe))){Rn(Le,Bn,o,Ee);break e}Rt&&Rt(e,ye,pe),e==="focusout"&&pe&&ye.type==="number"&&pe.memoizedProps.value!=null&&Rs(ye,"number",ye.value)}switch(Rt=pe?Io(pe):window,e){case"focusin":(Vt(Rt)||Rt.contentEditable==="true")&&(Qt=Rt,vs=pe,Tn=null);break;case"focusout":Tn=vs=Qt=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,Oo(Le,o,Ee);break;case"selectionchange":if(qt)break;case"keydown":case"keyup":Oo(Le,o,Ee)}var on;if(R)e:{switch(e){case"compositionstart":var bn="onCompositionStart";break e;case"compositionend":bn="onCompositionEnd";break e;case"compositionupdate":bn="onCompositionUpdate";break e}bn=void 0}else yn?ht(e,o)&&(bn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(bn="onCompositionStart");bn&&(ue&&o.locale!=="ko"&&(yn||bn!=="onCompositionStart"?bn==="onCompositionEnd"&&yn&&(on=Co()):(hs=Ee,Ro="value"in hs?hs.value:hs.textContent,yn=!0)),Rt=Eu(pe,bn),0<Rt.length&&(bn=new We(bn,e,null,o,Ee),Le.push({event:bn,listeners:Rt}),on?bn.data=on:(on=Ft(o),on!==null&&(bn.data=on)))),(on=ee?As(e,o):vo(e,o))&&(bn=Eu(pe,"onBeforeInput"),0<bn.length&&(Rt=new We("onBeforeInput","beforeinput",null,o,Ee),Le.push({event:Rt,listeners:bn}),Rt.data=on)),W2(Le,e,pe,o,Ee)}g0(Le,s)})}function ql(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Eu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=rn(e,o),f!=null&&r.unshift(ql(e,f,m)),f=rn(e,s),f!=null&&r.push(ql(e,f,m))),e.tag===3)return r;e=e.return}return[]}function q2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,q=A.alternate,pe=A.stateNode;if(A=A.tag,q!==null&&q===r)break;A!==5&&A!==26&&A!==27||pe===null||(q=pe,f?(pe=rn(o,m),pe!=null&&v.unshift(ql(o,pe,q))):f||(pe=rn(o,m),pe!=null&&v.push(ql(o,pe,q)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var K2=/\r\n?/g,Q2=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(K2,`
`).replace(Q2,"")}function v0(e,s){return s=b0(s),b0(e)===s}function ts(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Po(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Po(e,""+r);break;case"className":gn(e,"class",r);break;case"tabIndex":gn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":gn(e,o,r);break;case"style":Ks(e,r,m);break;case"data":if(s!=="object"){gn(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Vo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ts(e,s,"name",f.name,f,null),ts(e,s,"formEncType",f.formEncType,f,null),ts(e,s,"formMethod",f.formMethod,f,null),ts(e,s,"formTarget",f.formTarget,f,null)):(ts(e,s,"encType",f.encType,f,null),ts(e,s,"method",f.method,f,null),ts(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Vo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Qs);break;case"onScroll":r!=null&&pn("scroll",e);break;case"onScrollEnd":r!=null&&pn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Vo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":pn("beforetoggle",e),pn("toggle",e),Es(e,"popover",r);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Es(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Ho.get(o)||o,Es(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":Ks(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Po(e,r):(typeof r=="number"||typeof r=="bigint")&&Po(e,""+r);break;case"onScroll":r!=null&&pn("scroll",e);break;case"onScrollEnd":r!=null&&pn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Qs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ds.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[Dn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):Es(e,o,r)}}}function Ao(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pn("error",e),pn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(e,s,m,v,o,null)}}f&&ts(e,s,"srcSet",o.srcSet,o,null),r&&ts(e,s,"src",o.src,o,null);return;case"input":pn("invalid",e);var A=m=v=f=null,q=null,pe=null;for(r in o)if(o.hasOwnProperty(r)){var Ee=o[r];if(Ee!=null)switch(r){case"name":f=Ee;break;case"type":v=Ee;break;case"checked":q=Ee;break;case"defaultChecked":pe=Ee;break;case"value":m=Ee;break;case"defaultValue":A=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(a(137,s));break;default:ts(e,s,r,Ee,o,null)}}Nn(e,m,A,q,pe,v,f,!1);return;case"select":pn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:ts(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?Hn(e,!!r,s,!1):o!=null&&Hn(e,!!r,o,!0);return;case"textarea":pn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ts(e,s,v,A,o,null)}xi(e,r,f,m);return;case"option":for(q in o)if(o.hasOwnProperty(q)&&(r=o[q],r!=null))switch(q){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ts(e,s,q,r,o,null)}return;case"dialog":pn("beforetoggle",e),pn("toggle",e),pn("cancel",e),pn("close",e);break;case"iframe":case"object":pn("load",e);break;case"video":case"audio":for(r=0;r<Gl.length;r++)pn(Gl[r],e);break;case"image":pn("error",e),pn("load",e);break;case"details":pn("toggle",e);break;case"embed":case"source":case"link":pn("error",e),pn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(pe in o)if(o.hasOwnProperty(pe)&&(r=o[pe],r!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(e,s,pe,r,o,null)}return;default:if(Us(s)){for(Ee in o)o.hasOwnProperty(Ee)&&(r=o[Ee],r!==void 0&&yh(e,s,Ee,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&ts(e,s,A,r,o,null))}function Z2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,q=null,pe=null,Ee=null;for(ve in o){var Le=o[ve];if(o.hasOwnProperty(ve)&&Le!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":q=Le;default:r.hasOwnProperty(ve)||ts(e,s,ve,null,r,Le)}}for(var ye in r){var ve=r[ye];if(Le=o[ye],r.hasOwnProperty(ye)&&(ve!=null||Le!=null))switch(ye){case"type":m=ve;break;case"name":f=ve;break;case"checked":pe=ve;break;case"defaultChecked":Ee=ve;break;case"value":v=ve;break;case"defaultValue":A=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ve!==Le&&ts(e,s,ye,ve,r,Le)}}fs(e,v,A,q,pe,Ee,m,f);return;case"select":ve=v=A=ye=null;for(m in o)if(q=o[m],o.hasOwnProperty(m)&&q!=null)switch(m){case"value":break;case"multiple":ve=q;default:r.hasOwnProperty(m)||ts(e,s,m,null,r,q)}for(f in r)if(m=r[f],q=o[f],r.hasOwnProperty(f)&&(m!=null||q!=null))switch(f){case"value":ye=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==q&&ts(e,s,f,m,r,q)}s=A,o=v,r=ve,ye!=null?Hn(e,!!o,ye,!1):!!r!=!!o&&(s!=null?Hn(e,!!o,s,!0):Hn(e,!!o,o?[]:"",!1));return;case"textarea":ve=ye=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ts(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ye=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ts(e,s,v,f,r,m)}ls(e,ye,ve);return;case"option":for(var Mt in o)if(ye=o[Mt],o.hasOwnProperty(Mt)&&ye!=null&&!r.hasOwnProperty(Mt))switch(Mt){case"selected":e.selected=!1;break;default:ts(e,s,Mt,null,r,ye)}for(q in r)if(ye=r[q],ve=o[q],r.hasOwnProperty(q)&&ye!==ve&&(ye!=null||ve!=null))switch(q){case"selected":e.selected=ye&&typeof ye!="function"&&typeof ye!="symbol";break;default:ts(e,s,q,ye,r,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in o)ye=o[Xt],o.hasOwnProperty(Xt)&&ye!=null&&!r.hasOwnProperty(Xt)&&ts(e,s,Xt,null,r,ye);for(pe in r)if(ye=r[pe],ve=o[pe],r.hasOwnProperty(pe)&&ye!==ve&&(ye!=null||ve!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(a(137,s));break;default:ts(e,s,pe,ye,r,ve)}return;default:if(Us(s)){for(var ns in o)ye=o[ns],o.hasOwnProperty(ns)&&ye!==void 0&&!r.hasOwnProperty(ns)&&yh(e,s,ns,void 0,r,ye);for(Ee in r)ye=r[Ee],ve=o[Ee],!r.hasOwnProperty(Ee)||ye===ve||ye===void 0&&ve===void 0||yh(e,s,Ee,ye,r,ve);return}}for(var le in o)ye=o[le],o.hasOwnProperty(le)&&ye!=null&&!r.hasOwnProperty(le)&&ts(e,s,le,null,r,ye);for(Le in r)ye=r[Le],ve=o[Le],!r.hasOwnProperty(Le)||ye===ve||ye==null&&ve==null||ts(e,s,Le,ye,r,ve)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&w0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var q=o[r],pe=q.startTime;if(pe>A)break;var Ee=q.transferSize,Le=q.initiatorType;Ee&&w0(Le)&&(q=q.responseEnd,v+=Ee*(q<A?1:(A-pe)/(q-pe)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function S0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function ev(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(sv)}:k0;function sv(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function M0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),ol(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Kl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Kl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[Ms]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Kl(e.ownerDocument.body);o=f}while(o);ol(s)}function E0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),qs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function ov(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ms])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function iv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ti(e.nextSibling),e===null))return null;return e}function T0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ti(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function av(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ti(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function A0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ti(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function N0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Kl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);qs(e)}var Ai=new Map,R0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ca=ce.d;ce.d={f:rv,r:lv,D:cv,C:uv,L:dv,m:fv,X:mv,S:hv,M:pv};function rv(){var e=Ca.f(),s=vu();return e||s}function lv(e){var s=So(e);s!==null&&s.tag===5&&s.type==="form"?K_(s):Ca.r(e)}var tl=typeof document>"u"?null:document;function B0(e,s,o){var r=tl;if(r&&typeof s=="string"&&s){var f=Ts(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),R0.has(f)||(R0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Ao(s,"link",e),un(s),r.head.appendChild(s)))}}function cv(e){Ca.D(e),B0("dns-prefetch",e,null)}function uv(e,s){Ca.C(e,s),B0("preconnect",e,s)}function dv(e,s,o){Ca.L(e,s,o);var r=tl;if(r&&e&&s){var f='link[rel="preload"][as="'+Ts(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ts(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ts(o.imageSizes)+'"]')):f+='[href="'+Ts(e)+'"]';var m=f;switch(s){case"style":m=nl(e);break;case"script":m=sl(e)}Ai.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Ai.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Ql(m))||s==="script"&&r.querySelector(Zl(m))||(s=r.createElement("link"),Ao(s,"link",e),un(s),r.head.appendChild(s)))}}function fv(e,s){Ca.m(e,s);var o=tl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ts(r)+'"][href="'+Ts(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=sl(e)}if(!Ai.has(m)&&(e=x({rel:"modulepreload",href:e},s),Ai.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zl(m)))return}r=o.createElement("link"),Ao(r,"link",e),un(r),o.head.appendChild(r)}}}function hv(e,s,o){Ca.S(e,s,o);var r=tl;if(r&&e){var f=ao(r).hoistableStyles,m=nl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Ql(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Ai.get(m))&&Mh(e,o);var q=v=r.createElement("link");un(q),Ao(q,"link",e),q._p=new Promise(function(pe,Ee){q.onload=pe,q.onerror=Ee}),q.addEventListener("load",function(){A.loading|=1}),q.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Du(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function mv(e,s){Ca.X(e,s);var o=tl;if(o&&e){var r=ao(o).hoistableScripts,f=sl(e),m=r.get(f);m||(m=o.querySelector(Zl(f)),m||(e=x({src:e,async:!0},s),(s=Ai.get(f))&&Eh(e,s),m=o.createElement("script"),un(m),Ao(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function pv(e,s){Ca.M(e,s);var o=tl;if(o&&e){var r=ao(o).hoistableScripts,f=sl(e),m=r.get(f);m||(m=o.querySelector(Zl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Ai.get(f))&&Eh(e,s),m=o.createElement("script"),un(m),Ao(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function L0(e,s,o,r){var f=(f=ze.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=nl(o.href),o=ao(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=nl(o.href);var m=ao(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Ql(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Ai.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ai.set(e,o),m||_v(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=sl(o),o=ao(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function nl(e){return'href="'+Ts(e)+'"'}function Ql(e){return'link[rel="stylesheet"]['+e+"]"}function O0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function _v(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Ao(s,"link",o),un(s),e.head.appendChild(s))}function sl(e){return'[src="'+Ts(e)+'"]'}function Zl(e){return"script[async]"+e}function z0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+Ts(o.href)+'"]');if(r)return s.instance=r,un(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),un(r),Ao(r,"style",f),Du(r,o.precedence,e),s.instance=r;case"stylesheet":f=nl(o.href);var m=e.querySelector(Ql(f));if(m)return s.state.loading|=4,s.instance=m,un(m),m;r=O0(o),(f=Ai.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),un(m);var v=m;return v._p=new Promise(function(A,q){v.onload=A,v.onerror=q}),Ao(m,"link",r),s.state.loading|=4,Du(m,o.precedence,e),s.instance=m;case"script":return m=sl(o.src),(f=e.querySelector(Zl(m)))?(s.instance=f,un(f),f):(r=o,(f=Ai.get(m))&&(r=x({},o),Eh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),un(f),Ao(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Du(r,o.precedence,e));return s.instance}function Du(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Eh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Nu=null;function $0(e,s,o){if(Nu===null){var r=new Map,f=Nu=new Map;f.set(o,r)}else f=Nu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Ms]||m[cn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function I0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function gv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function P0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=nl(r.href),m=s.querySelector(Ql(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,un(m);return}m=s.ownerDocument||s,r=O0(r),(f=Ai.get(f))&&Mh(r,f),m=m.createElement("link"),un(m);var v=m;v._p=new Promise(function(A,q){v.onload=A,v.onerror=q}),Ao(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function xv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*J2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(bv,e),Bu=null,Ru.call(e))}function bv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Jl={$$typeof:O,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function vv(e,s,o,r,f,m,v,A,q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=It(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=It(0),this.hiddenUpdates=It(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function H0(e,s,o,r,f,m,v,A,q,pe,Ee,Le){return e=new vv(e,s,o,v,q,pe,Ee,Le,A),s=1,m===!0&&(s|=24),m=ui(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function V0(e){return e?(e=Br,e):Br}function U0(e,s,o,r,f,m){f=V0(f),r.context===null?r.context=f:r.pendingContext=f,r=Na(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ra(e,r,s),o!==null&&(ii(o,e,s),Dl(o,e,s))}function Y0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){Y0(e,s),(e=e.alternate)&&Y0(e,s)}function W0(e){if(e.tag===13||e.tag===31){var s=ir(e,67108864);s!==null&&ii(s,e,67108864),Ah(e,67108864)}}function F0(e){if(e.tag===13||e.tag===31){var s=pi();s=is(s);var o=ir(e,s);o!==null&&ii(o,e,s),Ah(e,s)}}var Ou=!0;function wv(e,s,o,r){var f=z.T;z.T=null;var m=ce.p;try{ce.p=2,Dh(e,s,o,r)}finally{ce.p=m,z.T=f}}function Sv(e,s,o,r){var f=z.T;z.T=null;var m=ce.p;try{ce.p=8,Dh(e,s,o,r)}finally{ce.p=m,z.T=f}}function Dh(e,s,o,r){if(Ou){var f=Nh(r);if(f===null)gh(e,s,r,zu,o),G0(e,r);else if(kv(f,e,s,o,r))r.stopPropagation();else if(G0(e,r),s&4&&-1<Cv.indexOf(e)){for(;f!==null;){var m=So(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Zt(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var q=1<<31-wt(v);A.entanglements[1]|=q,v&=~q}sa(m),(zn&6)===0&&(xu=ft()+500,Xl(0))}}break;case 31:case 13:A=ir(m,2),A!==null&&ii(A,m,2),vu(),Ah(m,2)}if(m=Nh(r),m===null&&gh(e,s,r,zu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Nh(e){return e=lo(e),Rh(e)}var zu=null;function Rh(e){if(zu=null,e=_s(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function X0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case gt:return 2;case $t:return 8;case at:case V:return 32;case Z:return 268435456;default:return 32}default:return 32}}var Bh=!1,Ya=null,Wa=null,Fa=null,ec=new Map,tc=new Map,Xa=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G0(e,s){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":ec.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":tc.delete(s.pointerId)}}function nc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=So(s),s!==null&&W0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function kv(e,s,o,r,f){switch(s){case"focusin":return Ya=nc(Ya,e,s,o,r,f),!0;case"dragenter":return Wa=nc(Wa,e,s,o,r,f),!0;case"mouseover":return Fa=nc(Fa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return ec.set(m,nc(ec.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,tc.set(m,nc(tc.get(m)||null,e,s,o,r,f)),!0}return!1}function q0(e){var s=_s(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,Mn(e.priority,function(){F0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,Mn(e.priority,function(){F0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Nh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);vi=r,o.target.dispatchEvent(r),vi=null}else return s=So(o),s!==null&&W0(s),e.blockedOn=o,!1;s.shift()}return!0}function K0(e,s,o){$u(e)&&o.delete(s)}function jv(){Bh=!1,Ya!==null&&$u(Ya)&&(Ya=null),Wa!==null&&$u(Wa)&&(Wa=null),Fa!==null&&$u(Fa)&&(Fa=null),ec.forEach(K0),tc.forEach(K0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jv)))}var Pu=null;function Q0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=So(o);m!==null&&(e.splice(s,3),s-=3,Nf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function ol(e){function s(q){return Iu(q,e)}Ya!==null&&Iu(Ya,e),Wa!==null&&Iu(Wa,e),Fa!==null&&Iu(Fa,e),ec.forEach(s),tc.forEach(s);for(var o=0;o<Xa.length;o++){var r=Xa[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Xa.length&&(o=Xa[0],o.blockedOn===null);)q0(o),o.blockedOn===null&&Xa.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[Dn]||null;if(typeof m=="function")v||Q0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[Dn]||null)A=v.formAction;else if(Rh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),Q0(o)}}}function Z0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=pi();U0(o,r,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;U0(e.current,2,null,e,null,null),vu(),s[it]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=An();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Xa.length&&s!==0&&s<Xa[o].priority;o++);Xa.splice(o,0,e),o===0&&q0(e)}};var J0=n.version;if(J0!=="19.2.4")throw Error(a(527,J0,"19.2.4"));ce.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Mv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Je=Vu.inject(Mv),Ge=Vu}catch{}}return oc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ag,m=rg,v=lg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=H0(e,1,!1,null,null,o,r,null,f,m,v,Z0),e[it]=s.current,_h(e),new Lh(s)},oc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ag,v=rg,A=lg,q=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(q=o.formState)),s=H0(e,1,!0,s,o!=null?o:null,r,f,q,m,v,A,Z0),s.context=V0(null),o=s.current,r=pi(),r=is(r),f=Na(r),f.callback=null,Ra(o,f,r),o=r,s.current.lanes=o,yt(s,o),sa(s),e[it]=s.current,_h(e),new Hu(s)},oc.version="19.2.4",oc}var cy;function Ov(){if(cy)return zh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=Lv(),zh.exports}var zv=Ov();const $v=Bx(zv);var g=cp();const Iv=Bx(g);function Pv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Hv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const Bi="__TAURI_TO_IPC_KEY__";function Vv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function we(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Uv{get rid(){return Pv(this,hd,"f")}constructor(n){hd.set(this,void 0),Hv(this,hd,n)}async close(){return we("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var _i;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(_i||(_i={}));async function Ox(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await we("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return we("plugin:event|listen",{event:t,target:c,handler:Vv(n)}).then(u=>async()=>Ox(t,u))}async function Yv(t,n,i){return yc(t,a=>{Ox(t,a.id),n(a)},i)}async function Wv(t,n){await we("plugin:event|emit",{event:t,payload:n})}async function Fv(t,n,i){await we("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class zx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[Bi](){return{width:this.width,height:this.height}}toJSON(){return this[Bi]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new zx(this.width/n,this.height/n)}[Bi](){return{width:this.width,height:this.height}}toJSON(){return this[Bi]()}}class il{constructor(n){this.size=n}toLogical(n){return this.size instanceof zx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[Bi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Bi]()}}class $x{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ja(this.x*n,this.y*n)}[Bi](){return{x:this.x,y:this.y}}toJSON(){return this[Bi]()}}class Ja{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new $x(this.x/n,this.y/n)}[Bi](){return{x:this.x,y:this.y}}toJSON(){return this[Bi]()}}class Uu{constructor(n){this.position=n}toLogical(n){return this.position instanceof $x?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ja?this.position:this.position.toPhysical(n)}[Bi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Bi]()}}class bc extends Uv{constructor(n){super(n)}static async new(n,i,a){return we("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return we("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new bc(i))}static async fromPath(n){return we("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return we("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return we("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Mm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Mm||(Mm={}));class Xv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var uy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(uy||(uy={}));function up(){return new Ix(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Vh(){return we("plugin:window|get_all_windows").then(t=>t.map(n=>new Ix(n,{skip:!0})))}const Uh=["tauri://created","tauri://error"];class Ix{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||we("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Vh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return up()}static async getAll(){return Vh()}static async getFocusedWindow(){for(const n of await Vh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Yv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Uh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Wv(n,i)}async emitTo(n,i,a){if(Uh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Fv(n,i,a)}_handleTauriEvent(n,i){return Uh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return we("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return we("plugin:window|inner_position",{label:this.label}).then(n=>new Ja(n))}async outerPosition(){return we("plugin:window|outer_position",{label:this.label}).then(n=>new Ja(n))}async innerSize(){return we("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return we("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return we("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return we("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return we("plugin:window|is_maximized",{label:this.label})}async isFocused(){return we("plugin:window|is_focused",{label:this.label})}async isDecorated(){return we("plugin:window|is_decorated",{label:this.label})}async isResizable(){return we("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return we("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return we("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return we("plugin:window|is_closable",{label:this.label})}async isVisible(){return we("plugin:window|is_visible",{label:this.label})}async title(){return we("plugin:window|title",{label:this.label})}async theme(){return we("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return we("plugin:window|is_always_on_top",{label:this.label})}async center(){return we("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Mm.Critical?i={type:"Critical"}:i={type:"Informational"}),we("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return we("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return we("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return we("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return we("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return we("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return we("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return we("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return we("plugin:window|maximize",{label:this.label})}async unmaximize(){return we("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return we("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return we("plugin:window|minimize",{label:this.label})}async unminimize(){return we("plugin:window|unminimize",{label:this.label})}async show(){return we("plugin:window|show",{label:this.label})}async hide(){return we("plugin:window|hide",{label:this.label})}async close(){return we("plugin:window|close",{label:this.label})}async destroy(){return we("plugin:window|destroy",{label:this.label})}async setDecorations(n){return we("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return we("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return we("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return we("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return we("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return we("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return we("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return we("plugin:window|set_size",{label:this.label,value:n instanceof il?n:new il(n)})}async setMinSize(n){return we("plugin:window|set_min_size",{label:this.label,value:n instanceof il?n:n?new il(n):null})}async setMaxSize(n){return we("plugin:window|set_max_size",{label:this.label,value:n instanceof il?n:n?new il(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return we("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return we("plugin:window|set_position",{label:this.label,value:n instanceof Uu?n:new Uu(n)})}async setFullscreen(n){return we("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return we("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return we("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return we("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return we("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return we("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return we("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return we("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return we("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return we("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return we("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Uu?n:new Uu(n)})}async setIgnoreCursorEvents(n){return we("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return we("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return we("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return we("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return we("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return we("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return we("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return we("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return we("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return we("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(_i.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(_i.WINDOW_MOVED,i=>{i.payload=new Ja(i.payload),n(i)})}async onCloseRequested(n){return this.listen(_i.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Xv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(_i.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),a=await this.listen(_i.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ja(d.payload.position)}})}),c=await this.listen(_i.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),u=await this.listen(_i.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(_i.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(_i.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(_i.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(_i.WINDOW_THEME_CHANGED,n)}}var dy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(dy||(dy={}));var fy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(fy||(fy={}));var hy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(hy||(hy={}));var my;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(my||(my={}));async function Gv(t={}){return typeof t=="object"&&Object.freeze(t),await we("plugin:dialog|open",{options:t})}/**
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
 */const py=t=>{const n=Kv(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
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
 */const Jv=g.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>g.createElement("svg",{ref:p,...Qv,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Px("lucide",c),...!u&&!Zv(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,_])=>g.createElement(y,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=(t,n)=>{const i=g.forwardRef(({className:a,...c},u)=>g.createElement(Jv,{ref:u,iconNode:n,className:Px(`lucide-${qv(py(t))}`,`lucide-${t}`,a),...c}));return i.displayName=py(t),i};/**
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
 */const cw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],uw=xl("search",cw),dw=3.7,Yu=200,Em=240,ms=540,Hs=176,Yh=32,bl=20,fw=Em/2,ic=ms+fw,yr=18,xr=18,Wh="#E6E6E6";function _y(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function jr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ka(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ka(t).localeCompare(ka(n))}function Vx(t){return[...t].sort(_c)}function hw(t){var h,p,y,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ka(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ka(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=ka(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const k=(y=a.get(w))!=null?y:[];k.push(b),a.set(w,k)}for(const b of a.values())b.sort(_c);const c=t.filter(b=>{var w;return((w=i.get(ka(b)))!=null?w:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=ka(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const k=ka(S),j=((x=i.get(k))!=null?x:0)-1;i.set(k,j),j===0&&c.push(S)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ka(b))).sort(_c)]}function Ux(t,n){var i;return Vx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Yx(t,n,i){return Ux(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function mw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function pw(t,n,i){var _,x,b,w,S,k,j;const a=Yx(t,i,n);if(a.length===0)return null;const c=a.map(E=>jr(t,E)),u=new Set(c.map(E=>E.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(E=>E.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,y=c.find(E=>h&&E.id===h||d&&E.id===d?!0:!E.parentSha||!u.has(E.parentSha));return y||((j=(k=mw(c,p!=null?p:void 0))!=null?k:c[0])!=null?j:null)}function _w(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Ux(t.name,i);if(a.length>0){const y=a.map(b=>jr(t.name,b)),_=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function dp(t,n,i={},a={}){var re,se,je,Pe;const u=new Map(t.map(J=>[J.name,J])),d=new Map,h=new Map;for(const J of t){const z=((re=i[J.name])!=null?re:[]).filter(ce=>ce.kind!=="branch-created").map(ce=>new Date(ce.date).getTime()).filter(ce=>Number.isFinite(ce)).sort((ce,U)=>ce-U)[0];z!=null&&h.set(J.name,z)}const p=J=>{const de=h.get(J.name);return de!=null?de:_y(J).start},y=J=>{var z;const de=(z=a[J.name])!=null?z:null;return de&&de!==J.name&&(de===n||u.has(de))?de:J.name===n?null:J.parentBranch&&J.parentBranch!==J.name&&(J.parentBranch===n||u.has(J.parentBranch))?J.parentBranch:null};for(const J of t){if(J.name===n)continue;const de=(se=y(J))!=null?se:n,z=(je=d.get(de))!=null?je:[];z.push(J),d.set(de,z)}for(const J of d.values())J.sort((de,z)=>p(de)-p(z)||de.name.localeCompare(z.name));const _=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const J of Object.values(i))for(const de of J){const z=new Date(de.date).getTime();Number.isFinite(z)&&(de.fullSha&&S.set(de.fullSha,z),de.sha&&S.set(de.sha,z))}const k=(J,de)=>({start:Math.min(J,de),end:Math.max(J,de)}),j=J=>{var oe,ge;const de=k(p(J),_y(J).end),z=[de],ce=de.start,U=_w(J,n,i),Q=U?S.get(U):void 0,_e=new Date((ge=(oe=J.divergedFromDate)!=null?oe:J.createdDate)!=null?ge:J.lastCommitDate).getTime(),N=Number.isFinite(Q!=null?Q:NaN)?Q:Number.isFinite(_e)?_e:null;if(N==null)return z;const ae=k(N,ce);return ae.start!==ae.end&&z.push(ae),z},E=Math.max(1,360*60*1e3*dw),I=(J,de)=>!(J.start-de.end>=E||de.start-J.end>=E),O=(J,de)=>de.some(z=>{var ce;return((ce=w.get(J))!=null?ce:[]).some(U=>I(z,U))}),D=(J,de=new Set)=>{const z=b.get(J);if(z!=null)return z;if(de.has(J))return 1;de.add(J);const ce=u.get(J);if(!ce||J===n)return de.delete(J),b.set(J,0),0;const U=y(ce),Q=U?D(U,de)+1:1;return de.delete(J),b.set(J,Q),Q},W=(J,de=new Set)=>{var ze,ot;const z=_.get(J);if(z)return z.column;if(de.has(J))return 0;de.add(J);const ce=u.get(J);if(!ce)return de.delete(J),0;if(J===n){const ct={name:J,column:0,parentName:null};_.set(J,ct),x.push(ct);const Ct=j(ce);return w.set(0,[...(ze=w.get(0))!=null?ze:[],...Ct]),de.delete(J),0}const U=y(ce),Q=U&&!de.has(U)?U:null,_e=Q?W(Q,de):0,N=Math.max(1,D(J)),ae=Math.max(Q?_e+1:1,N),oe=j(ce);let ge=ae;for(;O(ge,oe);)ge+=1;const De={name:J,column:ge,parentName:Q};return _.set(J,De),x.push(De),w.set(ge,[...(ot=w.get(ge))!=null?ot:[],...oe]),de.delete(J),ge};W(n);const H=t.filter(J=>!_.has(J.name)).sort((J,de)=>p(J)-p(de)||J.name.localeCompare(de.name)),X=H.filter(J=>y(J)!=null),P=H.filter(J=>y(J)==null);for(const J of X)W(J.name);let K=Math.max(0,...x.map(J=>J.column))+1+1;for(const J of P){const de=j(J);let z=K;for(;O(z,de);)z+=1;const ce={name:J.name,column:z,parentName:null};_.set(J.name,ce),x.push(ce),w.set(z,[...(Pe=w.get(z))!=null?Pe:[],...de]),K=z+1}return x.sort((J,de)=>J.column-de.column||J.name.localeCompare(de.name))}function gw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Ui=0,Xh=0,yw=1800*1e3,xw=1440*60*1e3,Di=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Xo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function gy(t,n,i=new Map){var X,P,K,re,se,je,Pe,J,de,z,ce,U;if(t.length===0)return new Map;const a=[...t].sort((Q,_e)=>{const N=Di(Q.date)-Di(_e.date);return N!==0?N:Q.id!==_e.id?Q.id.localeCompare(_e.id):Q.visualId.localeCompare(_e.visualId)}),c=new Map;for(const Q of t){const _e=(X=Q.parentSha)!=null?X:null;if(_e){const N=(P=c.get(_e))!=null?P:new Set;N.add(Q.id),c.set(_e,N)}for(const N of(K=i.get(Q.id))!=null?K:[]){if(!N)continue;const ae=(re=c.get(N))!=null?re:new Set;ae.add(Q.id),c.set(N,ae)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,_=new Map,x=new Map,b=new Map;for(const Q of t){const _e=(se=y.get(Q.branchName))!=null?se:new Set;_e.add(Q.id),y.set(Q.branchName,_e);const N=(Pe=(je=n.get(Q.branchName))==null?void 0:je.column)!=null?Pe:0,ae=(J=_.get(Q.id))!=null?J:new Set;ae.add(N),_.set(Q.id,ae);const oe=new Set;Q.parentSha&&oe.add(Q.parentSha),x.set(Q.visualId,oe);const ge=new Set(oe);for(const De of(de=i.get(Q.id))!=null?de:[])De&&ge.add(De);b.set(Q.visualId,ge)}const w=new Set(Array.from(_.keys())),S=Array.from(w),k=new Map,j=Q=>{const _e=[];for(const N of S)Xo(N,Q)&&_e.push(N);return _e},E=new Map;for(const Q of S)E.set(Q,new Set);for(const Q of t){const _e=j(Q.id);if(_e.length===0)continue;const N=(z=b.get(Q.visualId))!=null?z:new Set,ae=new Set;for(const oe of N)for(const ge of j(oe))ae.add(ge);for(const oe of _e){const ge=(ce=E.get(oe))!=null?ce:new Set;for(const De of ae)ge.add(De);E.set(oe,ge)}}const I=new Map,O=(Q,_e=new Set)=>{var ge;const N=I.get(Q);if(N)return N;if(_e.has(Q))return new Set;_e.add(Q);const ae=(ge=E.get(Q))!=null?ge:new Set,oe=new Set;for(const De of ae){oe.add(De);for(const ze of O(De,_e))oe.add(ze)}return _e.delete(Q),I.set(Q,oe),oe},D=(Q,_e)=>{if(Xo(Q,_e))return!0;const N=j(Q),ae=j(_e);for(const oe of N){const ge=O(oe);for(const De of ae)if(ge.has(De))return!0}for(const oe of ae){const ge=O(oe);for(const De of N)if(ge.has(De))return!0}return!1};let W=1;const H=(Q,_e)=>{var _t,ke,ne,Me,Xe,Ue,Ye,nt,ft;const N=(ke=(_t=n.get(Q.branchName))==null?void 0:_t.column)!=null?ke:0,ae=(ne=y.get(Q.branchName))!=null?ne:new Set,ge=!(!!Q.parentSha&&ae.has(Q.parentSha))&&Q.parentSha?Q.parentSha:null,De=Array.from(_e).flatMap(dt=>j(dt).flatMap(gt=>{var $t;return($t=k.get(gt))!=null?$t:[]})),ze=(Q.kind==="branch-created"||Q.kind==="stash")&&De.length>0?Math.max(...De)+1:null,ot=De.length>0?Math.max(...De)+1:1,ct=(Me=c.get(Q.id))!=null?Me:new Set,Yt=Array.from(ct).flatMap(dt=>{var gt;return Array.from((gt=_.get(dt))!=null?gt:[])}).some(dt=>dt!==N),xt=new Date(Q.date).getTime(),mt=Math.max(ot,1);let Ke=null;for(let dt=mt;dt<W;dt+=1){const gt=(Xe=d.get(dt))!=null?Xe:[];if(gt.length===0||Yt||p.has(dt))continue;const $t=(Ue=b.get(Q.visualId))!=null?Ue:new Set;if(!(gt.some(fe=>D(Q.id,fe.sha)?!0:Array.from($t).some(Je=>Xo(Je,fe.sha)))||gt.some(fe=>fe.column===N)||!Number.isFinite(xt)||!gt.every(fe=>{if(!Number.isFinite(fe.time))return!1;const Je=!!ge&&!!fe.branchEntryParentSha&&ge===fe.branchEntryParentSha?xw:yw;return Math.abs(fe.time-xt)<=Je}))){Ke=dt;break}}ze!=null&&(Ke=ze),Ke==null&&(Ke=Math.max(ot,W)),u.set(Q.visualId,Ke),Ke>=W&&(W=Ke+1);const Wt=(Ye=d.get(Ke))!=null?Ye:[];Wt.push({visualId:Q.visualId,sha:Q.id,column:N,time:xt,branchEntryParentSha:ge}),d.set(Ke,Wt),Yt&&p.add(Ke);for(const dt of _e){const gt=(nt=h.get(dt))!=null?nt:[];gt.push(Ke),h.set(dt,gt)}const qe=(ft=k.get(Q.id))!=null?ft:[];qe.push(Ke),k.set(Q.id,qe)};for(const Q of a){const _e=(U=x.get(Q.visualId))!=null?U:new Set;H(Q,_e)}return u}function Mc(t){var Gi,Zo,li,_o,Jo,Ts,fs,Nn,Rs,Hn,ls,xi,Po,qi,Kt,Ks,Us,Ho,bi,Vo,Qs,vi,lo,Sn,go,Vn,Bs,co,rn,Ys,Ws,Ls,hs,Ro,Zs,Co,yo,Bo,En,Un,Fn,ko,uo,Js,ei,xo,Cs,Os,Uo,jo,bo;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:k,orientation:j="horizontal",nodePositionOverrides:E={}}=t,I=j==="horizontal",O=new Map(i.map(T=>[T.name,T])),D=new Map(n.map(T=>[T.name,T])),W=hw([...a.map(T=>{var G,xe,Ce;return{id:T.fullSha,branchName:d,message:(G=T.prTitle)!=null?G:T.sha,author:"",date:T.date,parentSha:(Ce=(xe=T.parentShas)==null?void 0:xe[0])!=null?Ce:null}}),...((Gi=h[d])!=null?Gi:[]).map(T=>jr(d,T)),...c.map(T=>jr(T.branch||"",T)),...u.map(T=>jr(T.branch||"",T))]),H=new Map,X=new Map;for(const T of i){if(T.name===d)continue;const G=Yx(T.name,y,h);X.set(T.name,G);const xe=Vx(G.map(We=>jr(T.name,We)));if(xe.length>0){H.set(T.name,xe);continue}const Ce=(_o=(li=(Zo=T.presidesFromSha)!=null?Zo:T.divergedFromSha)!=null?li:T.createdFromSha)!=null?_o:null;if(!Ce)continue;const Qe=(Jo=c.find(We=>Xo(We.fullSha,Ce)||Xo(We.sha,Ce)))==null?void 0:Jo.date,Ze=Qe?null:(Ts=Object.values(h).flat().find(We=>Xo(We.fullSha,Ce)||Xo(We.sha,Ce)))==null?void 0:Ts.date,Nt={id:`BRANCH_HEAD:${T.name}:${Ce}`,branchName:T.name,message:`Branch ${T.name}`,author:T.lastCommitAuthor,date:(Rs=(Nn=(fs=Qe!=null?Qe:Ze)!=null?fs:T.createdDate)!=null?Nn:T.divergedFromDate)!=null?Rs:T.lastCommitDate,parentSha:Ce,kind:"branch-created"};H.set(T.name,[Nt])}const P=new Set(W.map(T=>T.id)),K=(Hn=[...W].sort((T,G)=>Di(T.date)-Di(G.date)||T.id.localeCompare(G.id))[0])!=null?Hn:null,re=new Map(Array.from(H.entries()).map(([T,G])=>[T,new Set(G.map(xe=>xe.id))])),se=new Map;for(const T of i){if(T.name===d)continue;const G=pw(T.name,h,y);if(G){se.set(T.name,G);continue}const xe=(ls=H.get(T.name))==null?void 0:ls[0];if(xe){const Ce=(qi=(Po=(xi=T.presidesFromSha)!=null?xi:T.divergedFromSha)!=null?Po:T.createdFromSha)!=null?qi:null;se.set(T.name,{...xe,parentSha:Ce})}}const je=new Map;for(const[T,G]of H.entries()){const xe=G.find(Ce=>Ce.kind!=="branch-created");xe&&je.set(T,xe)}const Pe=new Map;for(const[T,G]of H.entries()){const xe=G.filter(Ze=>Ze.kind!=="branch-created"),Qe=(Kt=(xe.length>0?xe:G)[0])!=null?Kt:null;Qe&&Pe.set(T,Qe)}const J=new Map;for(const T of i){if(T.name===d)continue;const G=(Ks=Pe.get(T.name))!=null?Ks:null,xe=(Ho=(Us=se.get(T.name))==null?void 0:Us.parentSha)!=null?Ho:null,Ce=(Qs=(Vo=(bi=T.presidesFromSha)!=null?bi:T.divergedFromSha)!=null?Vo:T.createdFromSha)!=null?Qs:null,Qe=(vi=G==null?void 0:G.parentSha)!=null?vi:null,Ze=(lo=Qe!=null?Qe:xe)!=null?lo:Ce;Ze&&J.set(T.name,Ze)}const de=T=>{var Ze,Nt,We,Bt,zt,tn,ln,nn;const G=(Ze=p[T.name])!=null?Ze:null;if(!(G&&G!==d&&G!==T.name&&O.has(G)))return G!=null?G:"";const Ce=(Bt=(We=(Nt=J.get(T.name))!=null?Nt:T.presidesFromSha)!=null?We:T.divergedFromSha)!=null?Bt:T.createdFromSha;if(Ce&&((zt=re.get(G))!=null?zt:new Set).has(Ce))return G;const Qe=(ln=(tn=se.get(T.name))==null?void 0:tn.parentSha)!=null?ln:null;return Qe&&((nn=re.get(G))!=null?nn:new Set).has(Qe),G},z=T=>{var Qe,Ze,Nt,We,Bt,zt,tn,ln;const G=se.get(T.name),xe=(Bt=(We=(Nt=(Ze=(Qe=J.get(T.name))!=null?Qe:G==null?void 0:G.parentSha)!=null?Ze:T.presidesFromSha)!=null?Nt:T.divergedFromSha)!=null?We:T.createdFromSha)!=null?Bt:null;if(!T.parentBranch&&!xe||!xe)return null;if(de(T)===d){if(P.has(xe))return xe;const nn=(zt=G==null?void 0:G.parentSha)!=null?zt:null;return nn&&P.has(nn)?nn:(ln=(tn=K==null?void 0:K.id)!=null?tn:nn)!=null?ln:xe}return P.has(xe),xe},ce=T=>z(T),U=new Map;for(const T of[...c,...u]){const G={...jr(T.branch||"",T),visualId:`${T.branch||""}:${T.fullSha}`};U.set(T.fullSha,G)}const Q=new Map(U),_e=T=>{Q.has(T.id)||Q.set(T.id,T)},N=new Map(Array.from(H.entries()).map(([T,G])=>[T,new Set(G.map(xe=>xe.id))])),ae=new Set;for(const T of N.values())for(const G of T)ae.add(G);for(const T of W)ae.has(T.id)||_e({...T,visualId:`${T.branchName}:${T.id}`});for(const[T,G]of H.entries())for(const xe of G)_e({...xe,visualId:`${T}:${xe.id}`});const ge=[...Array.from(Q.values()).map(T=>({...T,visualId:`${T.branchName}:${T.id}`}))].sort((T,G)=>Di(T.date)-Di(G.date)||T.id.localeCompare(G.id)),De=new Map;for(const T of ge){const G=(Sn=De.get(T.branchName))!=null?Sn:new Set;G.add(T.id),De.set(T.branchName,G)}const ze=(T,G)=>{const xe=De.get(T);if(!xe||xe.size===0)return!1;for(const Ce of xe)if(Xo(Ce,G))return!0;return!1},ot=(T,G)=>{const xe=Array.from(De.entries()).filter(([Ce])=>Ce!==G).filter(([,Ce])=>Array.from(Ce).some(Qe=>Xo(Qe,T))).map(([Ce])=>Ce);return xe.length>0?xe.sort()[0]:T.slice(0,7)},ct=[],Ct=new Map,Yt=new Map;for(const T of a){const G=T.fullSha,xe=T.targetBranch,Ce=T.targetCommitSha;if(!G||!xe||!Ce||!ze(xe,Ce))continue;const Qe=((go=T.parentShas)!=null?go:[]).slice(1).filter(Nt=>!!Nt&&!Xo(Nt,G));if(Qe.length===0)continue;const Ze=(Vn=Yt.get(G))!=null?Vn:new Set;for(const Nt of Qe){Ze.add(Nt);const We=ot(Nt,xe);ct.push({sourceCommitSha:Nt,sourceBranchName:We,mergeCommitSha:G,targetCommitSha:Ce,targetBranchName:xe});const Bt=(Bs=Ct.get(We))!=null?Bs:new Map,zt=(co=Bt.get(Nt))!=null?co:new Set;zt.add(xe),Bt.set(Nt,zt),Ct.set(We,Bt)}Yt.set(G,Ze)}const xt=new Map;for(const T of i){if(T.name===d)continue;const G=z(T);G&&xt.set(T.name,G)}const mt=new Map;for(const T of ge){const G=Yt.get(T.id);if(G&&G.size>0){const Qe=(rn=mt.get(T.id))!=null?rn:new Set;for(const Ze of G)Qe.add(Ze);mt.set(T.id,Qe)}if(T.branchName===d)continue;const xe=xt.get(T.branchName);if(!xe||xe===T.id)continue;const Ce=(Ys=mt.get(T.id))!=null?Ys:new Set;Ce.add(xe),mt.set(T.id,Ce)}const Ke=gy(ge,D,mt),Wt=new Map;for(const T of ge){const G=(Ws=Wt.get(T.branchName))!=null?Ws:[];G.push(T),Wt.set(T.branchName,G)}const qe=new Map,_t=new Map,ke=new Map,ne=new Map,Me=new Map,Xe=(T,G)=>{var Ze,Nt,We;if(G.length===0)return[];const xe=[...G].sort((Bt,zt)=>{var nn,Cn;const tn=(nn=Ke.get(Bt.visualId))!=null?nn:Number.MAX_SAFE_INTEGER,ln=(Cn=Ke.get(zt.visualId))!=null?Cn:Number.MAX_SAFE_INTEGER;return tn!==ln?tn-ln:Di(Bt.date)-Di(zt.date)||Bt.id.localeCompare(zt.id)}),Ce=new Map;for(const Bt of xe){const zt=((Ze=Bt.clusterKey)==null?void 0:Ze.trim())||`cluster:${T}:${Bt.id}`,tn=(Nt=Ce.get(zt))!=null?Nt:[];tn.push(Bt),Ce.set(zt,tn)}const Qe=[];for(const[Bt,zt]of Ce.entries()){if(zt.length===0)continue;const ln=[...zt].sort((Cn,kn)=>{var ci,Li;const zs=(ci=Ke.get(Cn.visualId))!=null?ci:Number.MIN_SAFE_INTEGER,fo=(Li=Ke.get(kn.visualId))!=null?Li:Number.MIN_SAFE_INTEGER;return zs!==fo?fo-zs:Di(kn.date)-Di(Cn.date)||kn.id.localeCompare(Cn.id)})[0].visualId,nn={branchName:T,key:Bt,commitIds:zt.map(Cn=>Cn.visualId),leadId:ln,count:zt.length};Qe.push(nn),ne.set(Bt,ln),Me.set(Bt,zt.length);for(const Cn of nn.commitIds){_t.set(Cn,Bt);const kn=Cn.split(":").slice(1).join(":"),zs=(We=ke.get(kn))!=null?We:[];zs.includes(Bt)||zs.push(Bt),ke.set(kn,zs)}}return Qe};for(const[T,G]of Wt.entries())qe.set(T,Xe(T,G));const Ue=new Map;for(const T of ge)Ue.set(T.id,T);const Ye=T=>{if(!T)return"none";const G=Array.from(Ue.values()).find(xe=>Xo(xe.id,T)||Xo(xe.id.slice(0,7),T)||Xo(T,xe.id));return G?`${G.id.slice(0,7)} ${G.branchName}`:T.slice(0,7)},nt=b?["Lane rows (expected):",...[...n].sort((T,G)=>T.column-G.column||T.name.localeCompare(G.name)).map(T=>{var G;return`  row=${T.column} branch=${T.name} parent=${(G=T.parentName)!=null?G:"none"}`}),"",...i.flatMap(T=>{var Nt,We,Bt,zt,tn,ln,nn,Cn;const G=(Nt=h[T.name])!=null?Nt:[],xe=[...(We=X.get(T.name))!=null?We:[]].reverse(),Ce=new Set(((Bt=H.get(T.name))!=null?Bt:[]).map(kn=>kn.id)),Qe=(tn=(zt=xe.find(kn=>!kn.parentSha||!xe.some(zs=>{var fo;return Xo(zs.fullSha,(fo=kn.parentSha)!=null?fo:"")})))!=null?zt:xe[0])!=null?tn:null,Ze=(nn=(ln=Qe==null?void 0:Qe.parentSha)!=null?ln:J.get(T.name))!=null?nn:null;return[`Branch ${T.name}`,`  ahead=${(Cn=y[T.name])!=null?Cn:0} previews=${xe.length} rendered=${Ce.size}`,`  db parent commit=${Ye(Ze)}`,`  db child commit=${Qe?`${Qe.fullSha.slice(0,7)} ${T.name}`:"none"}`,...xe.map(kn=>{const zs=Ce.has(kn.fullSha)?"visible":"hidden",fo=Ce.has(kn.fullSha)?"kept by render set":"dropped by render set";return`  ${zs} ${kn.fullSha.slice(0,7)} ${kn.message} [${fo}]`}),G.length===0?"  no preview data":null].filter(kn=>kn!=null)})]:[],ft=b?Array.from(H.entries()).map(([T,G])=>[`Branch debug ${T}`,...G.map(xe=>`  ${xe.id.slice(0,7)} ${xe.message}`)].join(`
`)):[],dt=Ke,gt=Em/Fu,$t=20/Fu,at=I?ms+gt+$t:Yu+gt+$t,V=I?Yu+gt+$t:ic,Z=Math.max(0,...ge.map(T=>{var G;return(G=dt.get(T.visualId))!=null?G:1})),fe=ge.map(T=>{var Qe,Ze;const G=D.get(T.branchName),xe=(Qe=dt.get(T.visualId))!=null?Qe:1,Ce=(Ze=G==null?void 0:G.column)!=null?Ze:0;return I?{commit:T,row:xe,column:Ce,x:xr+(xe-1)*at,y:yr+Ce*V}:{commit:T,row:xe,column:Ce,x:xr+Ce*ic,y:yr+(Z-xe)*at}}),be=T=>{var xe;const G=(xe=E[T.commit.visualId])!=null?xe:E[T.commit.id];return G?{...T,x:G.x,y:G.y}:T},Je=fe.map(be),Ge=w.trim().toLowerCase(),Ne=Ge?Je.filter(T=>{const G=T.commit.id.toLowerCase(),xe=T.commit.id.slice(0,7).toLowerCase(),Ce=T.commit.message.toLowerCase(),Qe=T.commit.branchName.toLowerCase();return G.includes(Ge)||xe.includes(Ge)||Ce.includes(Ge)||Qe.includes(Ge)}):Je,wt=S&&(Ls=Je.find(T=>T.commit.id===S))!=null?Ls:null,He=new Set(Ne.map(T=>T.commit.id)),Gt=(hs=k==null?void 0:k.headSha)!=null?hs:null,St=(()=>{var G,xe;const T=(G=k==null?void 0:k.branchName)!=null?G:null;return!Gt||!T?null:(xe=_t.get(`${T}:${Gt}`))!=null?xe:null})(),tt=new Set;for(const T of qe.values())for(const G of T)G.count>1&&G.key!==St&&tt.add(G.key);const Ot=[...ge].filter(T=>{var Ze;const G=_t.get(T.visualId);if(!G)return!0;const xe=ne.get(G),Ce=(Ze=Me.get(G))!=null?Ze:1,Qe=_.has(G)||!tt.has(G)&&!x.has(G);return Ce<=1||Qe||xe===T.visualId}),Ht=gy(Ot,D,mt),Zt=Em/Fu,st=20/Fu,et=I?ms+Zt+st:Yu+Zt+st,Dt=I?Yu+Zt+st:ic,bt=Math.max(0,...ge.map(T=>{var G;return(G=Ke.get(T.visualId))!=null?G:1})),It=Math.max(0,...Ot.map(T=>{var G;return(G=Ht.get(T.visualId))!=null?G:1})),yt=Math.max(0,bt-It),At=Ot.map(T=>{var Qe,Ze;const G=D.get(T.branchName),xe=(Qe=Ht.get(T.visualId))!=null?Qe:1,Ce=(Ze=G==null?void 0:G.column)!=null?Ze:0;return be(I?{commit:T,row:xe,column:Ce,x:xr+(yt+xe-1)*et,y:yr+Ce*Dt}:{commit:T,row:xe,column:Ce,x:xr+Ce*ic,y:yr+(It-xe)*et})}),an=new Map;for(const T of At){const G=(Ro=an.get(T.commit.id))!=null?Ro:[];G.push(T),an.set(T.commit.id,G)}const _n=new Map;for(const T of At){const G=_t.get(T.commit.visualId);if(!G)continue;const xe=_n.get(G);(!xe||(I?T.x>xe.x:T.y<xe.y))&&_n.set(G,T)}const vn=(T,G)=>`${T.toFixed(1)} ${G.toFixed(1)}`,is=Math.max(0,...At.map(T=>T.row)),In=Math.max(0,...n.map(T=>T.column)),An=Math.max(0,...At.map(T=>T.x+ms)),Mn=Math.max(0,...At.map(T=>T.y+bl+Hs)),as=Math.max(I?xr*2+Math.max(0,is-1)*et+ms+Yh+st:xr*2+(In+1)*ic,An+xr),cn=Math.max(I?yr*2+In*Dt+Hs+Yh+st:yr*2+Math.max(0,is-1)*et+Hs+Yh+st,Mn+yr),Dn=[],it=new Map(i.map(T=>{var xe,Ce;const G=new Date((Ce=(xe=T.createdDate)!=null?xe:T.divergedFromDate)!=null?Ce:T.lastCommitDate).getTime();return[T.name,Number.isFinite(G)?G:0]})),rs=T=>{var G;return(G=it.get(T))!=null?G:0},No=[],Kn=T=>{b&&No.push(T)},js=new Set,Ms=new Map,qs=(T,G)=>{var Ce;const xe=(Ce=Ms.get(T))!=null?Ce:[];xe.includes(G)||xe.push(G),Ms.set(T,xe)},_s=new Set,So=new Set,Io=new Set,ao=(T,G)=>{var Qe,Ze;if(!T)return null;const xe=Wu(an,T,G);if(xe)return xe;const Ce=(Qe=_t.get(`${G!=null?G:d}:${T}`))!=null?Qe:_t.get(T);return Ce&&(Ze=_n.get(Ce))!=null?Ze:null},un=new Set;for(const T of i){const G=ce(T);G&&So.add(G);const xe=(Zs=J.get(T.name))!=null?Zs:null;xe&&Io.add(xe)}const yi=T=>{var Qe;const G=ao(T.id,T.branchName);if(G)return G;const xe=_t.get(T.visualId);if(!xe)return null;const Ce=ne.get(xe);return Ce&&(Qe=At.find(Ze=>Ze.commit.id===Ce))!=null?Qe:null},Ds=(T,G)=>T?Wu(an,T,G):null,Ns=(T,G)=>I?{x:T.x-Ui,y:T.y+Hs/2,face:"left"}:{x:T.x+ms/2,y:T.y+Hs+Ui,face:"bottom"},gs=T=>I?{x:T.x-Ui,y:T.y+Hs/2,face:"left"}:{x:T.x+ms/2,y:T.y+Hs+Ui,face:"bottom"},ro=(T,G)=>T.column!==G.column?!0:I?T.commit.branchName!==G.commit.branchName:!1,Qo=(T,G,xe)=>{if(!I)return{x:G?T.x+ms:T.x+ms/2,y:G?T.y+Hs/2:T.y,face:G?"right":"top"};if(!G)return{x:T.x+ms+Ui,y:T.y+Hs/2,face:"right"};if(xe&&xe.column===T.column&&xe.commit.branchName!==T.commit.branchName){if(xe.x>T.x)return{x:T.x+ms/2,y:T.y+Hs+Ui,face:"bottom"};if(xe.x<T.x)return{x:T.x+ms/2,y:T.y-Ui,face:"top"}}return!xe||xe.column===T.column?{x:T.x+ms+Ui,y:T.y+Hs/2,face:"right"}:xe.column>T.column?{x:T.x+ms/2,y:T.y+Hs+Ui,face:"bottom"}:{x:T.x+ms/2,y:T.y-Ui,face:"top"}},ys=T=>I?{x:T.x+ms/2,y:T.y+Hs+Ui,face:"bottom"}:{x:T.x+ms,y:T.y+Hs/2,face:"right"},Qn=(T,G)=>Wu(an,T,G),Es=(T,G)=>Ds(T,G),gn=[],Pn=new Set;for(const T of ct){const G=(Co=ao(T.targetCommitSha,T.targetBranchName))!=null?Co:null;if(!G){Kn({id:`merge:${T.mergeCommitSha}:${T.sourceCommitSha}:target`,kind:"merge",parent:T.sourceCommitSha,child:T.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const xe=T.sourceCommitSha,Ce=`merge:${T.mergeCommitSha}:${xe!=null?xe:"unknown"}`;if(!xe||Xo(xe,T.targetCommitSha)){Kn({id:Ce,kind:"merge",parent:xe!=null?xe:"unknown",child:T.targetCommitSha,rendered:!1,reason:xe?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Qe=(yo=Wu(an,xe))!=null?yo:null;if(!Qe){Kn({id:Ce,kind:"merge",parent:xe,child:T.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Qe.commit.id===G.commit.id){Kn({id:Ce,kind:"merge",parent:Qe.commit.id,child:G.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let Ze,Nt,We;const Bt=I?G.x+ms/2:G.x+ms-Xh,zt=I?G.y+Hs+Xh:G.y+Hs/2,tn=I?"bottom":"right";I?(Ze=Qe.x+ms+Xh,Nt=Qe.y+Hs/2,We="right"):(Ze=Qe.x+ms/2,Nt=Qe.y,We="top");const ln=`${Ze.toFixed(2)}:${Nt.toFixed(2)}:${Bt.toFixed(2)}:${zt.toFixed(2)}`;if(Pn.has(ln)){Kn({id:Ce,kind:"merge",parent:Qe.commit.id,child:G.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Pn.add(ln),gn.push({id:Ce,fromX:Ze,fromY:Nt,toX:Bt,toY:zt,fromFace:We,toFace:tn,zIndex:rs(Qe.commit.branchName)}),Kn({id:Ce,kind:"merge",parent:Qe.commit.id,child:G.commit.id,rendered:!0,reason:`merge connector rendered to ${T.targetBranchName}`})}const dn=new Set;for(const T of i){if(T.name===d)continue;const G=se.get(T.name);if(!G)continue;const xe=de(T),Ce=Qn((Bo=J.get(T.name))!=null?Bo:"",xe),Qe=(En=je.get(T.name))!=null?En:G,Ze=(Un=Es(Qe.id,T.name))!=null?Un:yi(Qe);if(!Ce||!Ze||Ce.commit.id===Ze.commit.id){const tn=_t.get(`${T.name}:${G.id}`),ln=_t.get(`${T.name}:${Qe.id}`),nn=!!tn&&!tt.has(tn),Cn=!!ln&&!tt.has(ln),kn=!!tn&&!_.has(tn)&&(nn?x.has(tn):!0),zs=!!ln&&!_.has(ln)&&(Cn?x.has(ln):!0);!Ce&&!kn&&qs((Fn=Ze==null?void 0:Ze.commit.id)!=null?Fn:G.id,"Missing parent node"),!Ze&&!zs&&qs(G.id,"Missing child node"),Kn({id:`branch:${(ko=Ce==null?void 0:Ce.commit.id)!=null?ko:"null"}->${(uo=Ze==null?void 0:Ze.commit.id)!=null?uo:"null"}`,kind:"branch",parent:(Js=Ce==null?void 0:Ce.commit.id)!=null?Js:"null",child:(ei=Ze==null?void 0:Ze.commit.id)!=null?ei:"null",rendered:!1,reason:Ce?Ze?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Nt=`branch:${Ce.commit.id}->${Ze.commit.id}`;if(un.has(Nt)){Kn({id:Nt,kind:"branch",parent:Ce.commit.id,child:Ze.commit.id,rendered:!1,reason:"duplicate connector key"});continue}un.add(Nt),_s.add(Ce.commit.id);const We=ro(Ce,Ze);Ce.commit.branchName!==Ze.commit.branchName&&dn.add(Ce.commit.id);const Bt=ys(Ce),zt=gs(Ze);Dn.push({id:Nt,fromX:Bt.x,fromY:Bt.y,toX:zt.x,toY:zt.y,fromFace:Bt.face,toFace:zt.face,zIndex:rs(Ze.commit.branchName)}),Kn({id:Nt,kind:"branch",parent:Ce.commit.id,child:Ze.commit.id,rendered:!0,reason:We?"branch connector rendered":I?"horizontal connector rendered":"vertical connector rendered"})}for(const T of ge){const G=yi(T);if(!G)continue;const xe=(xo=T.parentSha)!=null?xo:null;if(!xe)continue;const Ce=(Cs=ao(xe,T.branchName))!=null?Cs:Qn(xe,T.branchName);if(!Ce){const Bt=(Os=_t.get(`${T.branchName}:${xe}`))!=null?Os:_t.get(xe),zt=!!Bt&&!tt.has(Bt);!!Bt&&!_.has(Bt)&&(zt?x.has(Bt):!0)||qs(T.id,"Missing parent node"),Kn({id:`${T.visualId}->${xe}`,kind:"ancestry",parent:xe,child:T.id,rendered:!1,reason:"missing parent node"});continue}if(G.commit.id===Ce.commit.id){qs(G.commit.id,"Parent and child resolve to the same node"),Kn({id:`${Ce.commit.id}->${G.commit.id}`,kind:"ancestry",parent:Ce.commit.id,child:G.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Qe=`${T.branchName}:${(Uo=Ce.commit.visualId)!=null?Uo:Ce.commit.id}->${G.commit.visualId}`;if(un.has(Qe)){qs(Ce.commit.id,"Duplicate connector key"),qs(G.commit.id,"Duplicate connector key"),Kn({id:Qe,kind:"ancestry",parent:Ce.commit.id,child:G.commit.id,rendered:!1,reason:"duplicate connector key"});continue}un.add(Qe),_s.add(Ce.commit.id);const Ze=ro(Ce,G),Nt=Qo(Ce,Ze,G),We=Ns(G);Dn.push({id:Qe,fromX:Nt.x,fromY:Nt.y,toX:We.x,toY:We.y,fromFace:Nt.face,toFace:We.face,zIndex:rs(G.commit.branchName)}),Kn({id:Qe,kind:"ancestry",parent:Ce.commit.id,child:G.commit.id,rendered:!0,reason:Ze?"ancestry connector rendered":I?"horizontal ancestry rendered":"vertical ancestry rendered"}),js.add(Ce.commit.id),js.add(G.commit.id)}const Wn=new Map;for(const T of At){const G=(jo=Wn.get(T.commit.branchName))!=null?jo:[];G.push(T),Wn.set(T.commit.branchName,G)}for(const[T,G]of Wn.entries()){if(G.length<2)continue;const xe=[...G].sort((Ce,Qe)=>{var Ze,Nt,We,Bt,zt,tn,ln,nn;return Ce.row!==Qe.row?Ce.row-Qe.row:Di((Nt=(Ze=Ce==null?void 0:Ce.commit)==null?void 0:Ze.date)!=null?Nt:null)-Di((Bt=(We=Qe==null?void 0:Qe.commit)==null?void 0:We.date)!=null?Bt:null)||((tn=(zt=Ce==null?void 0:Ce.commit)==null?void 0:zt.id)!=null?tn:"").localeCompare((nn=(ln=Qe==null?void 0:Qe.commit)==null?void 0:ln.id)!=null?nn:"")});for(let Ce=1;Ce<xe.length;Ce+=1){const Qe=xe[Ce-1],Ze=xe[Ce];if(Qe.commit.id===Ze.commit.id)continue;const Nt=(bo=Ze.commit.parentSha)!=null?bo:null;if(Nt&&Qn(Nt,Ze.commit.branchName))continue;const We=`chain:${T}:${Qe.commit.id}->${Ze.commit.id}`;if(un.has(We)){qs(Qe.commit.id,"Duplicate branch chain connector"),qs(Ze.commit.id,"Duplicate branch chain connector"),Kn({id:We,kind:"ancestry",parent:Qe.commit.id,child:Ze.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}un.add(We);const Bt=ro(Qe,Ze),zt=Qo(Qe,Bt,Ze),tn=Ns(Ze);Dn.push({id:We,fromX:zt.x,fromY:zt.y,toX:tn.x,toY:tn.y,fromFace:zt.face,toFace:tn.face,zIndex:rs(Ze.commit.branchName)}),Kn({id:We,kind:"ancestry",parent:Qe.commit.id,child:Ze.commit.id,rendered:!0,reason:"branch chain rendered"}),js.add(Qe.commit.id),js.add(Ze.commit.id)}}return{branchByName:O,laneByName:D,mainCommits:W,branchCommitsByLane:H,branchPreviewSets:X,allCommits:ge,clustersByBranch:qe,clusterKeyByCommitId:_t,clusterKeyBySha:ke,leadByClusterKey:ne,clusterCounts:Me,debugRows:nt,branchDebugRows:ft,nodes:fe,normalizedSearchQuery:Ge,matchingNodes:Ne,matchingNodeIds:He,focusedNode:wt,checkedOutClusterKey:St,defaultCollapsedClumps:tt,visibleCommitsList:Ot,renderNodes:At,visibleNodesBySha:an,visibleNodeByClusterKey:_n,pointFormatter:vn,contentWidth:as,contentHeight:cn,connectors:Dn,mergeConnectors:gn,connectorDecisions:No,nodeWarnings:Ms,connectorParentShas:_s,branchStartShas:So,branchOffNodeShas:Io,crossBranchOutgoingShas:dn,commitIdsWithRenderedAncestry:js,branchBaseCommitByName:se,firstBranchCommitByName:Pe,mergeDestinations:ct,mergeTargetBranchesBySourceBranchAndCommitSha:Ct}}const bw=8,vw=44,yy=120,xy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Wx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<bw){const H=d/_,X=h/_,P=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+H*P,c1y:n+X*P,c2x:i-H*P,c2y:a-X*P}}if(Math.min(p,y)<vw){const H=d/_,X=h/_,P=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+H*P,c1y:n+X*P,c2x:i-H*P,c2y:a-X*P}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),k=Math.min(120,y*.32),j=Math.min(160,y*.42),E=xy(c),I=xy(u);if(!(E==="v"&&I==="h"||E==="v"&&I==null&&y>=p||E==null&&I==="h"&&y>=p||E==="v"&&I==="v"||E==null&&I==null&&y>p)){const H=i,X=n;return{kind:"elbowH",cx:H,cy:X,s1c1x:t+x*w,s1c1y:n,s1c2x:H-x*S,s1c2y:X,s2c1x:H,s2c1y:X+b*k,s2c2x:i,s2c2y:a-b*j}}const D=t,W=a;return{kind:"elbowV",cx:D,cy:W,s1c1x:t,s1c1y:n+b*j,s1c2x:D,s1c2y:W-b*k,s2c1x:D+x*w,s2c1y:W,s2c2x:i-x*S,s2c2y:a}}function ww(t,n,i,a,c,u){const d=Wx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function by(t,n,i,a,c,u,d){const h=Wx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,k=a>=n?1:-1,j=h.cx-S*w,E=h.cy+k*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(j-S*w*.5,h.cy)} ${c(j,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,E)}`,`C ${c(h.cx,E+k*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const fp=2.25,ac=fp/2,Sw=.45,Cw=.01,ra=fp,kd=10,kw=-100,vy=0,wy=.9,jw=.9,Sy=.001,Gh=.001,Mw=12,Ew=ms+48;function On(...t){return t.filter(Boolean).join(" ")}function Tw(t){return Math.max(Sw,Math.min(fp,t))}function Aw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Fx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Dw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Nw(t,n,i,a,c,u,d){const h=ww(t,n,i,a,u,d),p=Dw(h);return Fx(c,p)}function Xx(t,n){return{left:t.x,top:t.y+n,right:t.x+ms,bottom:t.y+bl+Hs+4}}function Rw(t,n){const i=Ew,a=Math.max(120,Math.ceil(bl+Hs+4-n+24)),c=new Map;for(const u of t){const d=Xx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=y;w<=_;w++){const S=`${b},${w}`;let k=c.get(S);k||(k=new Set,c.set(S,k)),k.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Bw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=y;S<=_;S++){const k=d.get(`${w},${S}`);if(k)for(const j of k)x.add(j)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const k=Xx(S,a);Fx(n,k)&&b.add(w)}return b}function Cy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ra;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Lw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function ky(t,n,i){const a=n/ra;return!Number.isFinite(a)||a<=0?t:Lw(t,100/a)}function jy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function gi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Tm(t,n){if(n){const i=jy(n),a=jy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Tm(t,n)}function Ow(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function zw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:y,onPushCurrentBranch:_,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:w,selectedPushTargets:S,selectedPushLabel:k,canPushCurrentBranch:j,pushCurrentBranchLabel:E,pushableRemoteBranchCount:I,selectedCommitTargetOption:O,mergeInProgress:D,setMergeTargetCommitSha:W,worktrees:H,currentRepoPath:X,worktreeMenuOpen:P,setWorktreeMenuOpen:K,onSwitchToWorktree:re,onRemoveWorktree:se,removeWorktreeInProgress:je,setCommitDialogOpen:Pe,setNewBranchDialogOpen:J}){var Yt;const de=t.length>0,z=t.length>0&&t.every(xt=>xt==="WORKING_TREE"),[ce,U]=g.useState(!1),Q=g.useRef(null),_e=g.useRef(null),N="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",ae=!!p&&d&&!i&&!n&&(!de||z),oe=!!_&&j&&!de&&!u,ge=!!b&&S.length>0&&!u,De=!!x&&I>=2&&!de&&!u,ze=!!y&&!c&&!de&&!a,ot="Push Selected...",ct=ae?{label:n?"Committing...":"Commit",run:()=>Pe(!0),disabled:!ae}:oe?{label:u?"Pushing...":E,run:()=>void(_==null?void 0:_()),disabled:!oe}:ge?{label:ot,run:()=>void(b==null?void 0:b(S.map(xt=>({branchName:xt.branchName,targetSha:xt.targetSha})))),disabled:!ge}:null;return g.useEffect(()=>{const xt=mt=>{var Wt,qe;const Ke=mt.target;Ke&&((Wt=Q.current)!=null&&Wt.contains(Ke)||(qe=_e.current)!=null&&qe.contains(Ke)||(U(!1),K(!1)))};return window.addEventListener("pointerdown",xt),()=>window.removeEventListener("pointerdown",xt)},[K]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:Q,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{ct&&ct.run()},disabled:!ct||ct.disabled,className:On(N,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:(Yt=ct==null?void 0:ct.label)!=null?Yt:"Commit"}),l.jsx("button",{type:"button",onClick:()=>U(xt=>!xt),disabled:!ct,"aria-haspopup":"menu","aria-expanded":ce,className:On(N,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Hx,{className:"h-3.5 w-3.5 shrink-0"})}),ce&&ct?l.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsx("button",{type:"button",onClick:()=>{U(!1),Pe(!0)},disabled:!ae,className:On(N,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!ae&&"text-muted-foreground opacity-50"),children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>{U(!1),_==null||_()},disabled:!oe,className:On(N,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!oe&&"text-muted-foreground opacity-50"),children:u?"Pushing...":E}),l.jsx("button",{type:"button",onClick:()=>{U(!1),b==null||b(S.map(xt=>({branchName:xt.branchName,targetSha:xt.targetSha})))},disabled:!ge,className:On(N,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!ge&&"text-muted-foreground opacity-50"),title:k,children:ot}),l.jsx("button",{type:"button",onClick:()=>{U(!1),x==null||x()},disabled:!De,className:On(N,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!De&&"text-muted-foreground opacity-50"),children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>{U(!1),y==null||y()},disabled:!ze,className:On(N,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!ze&&"text-muted-foreground opacity-50"),children:a?"Stashing...":"Stash"})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsx("button",{type:"button",onClick:()=>J(!0),disabled:h,className:On(N,"pointer-events-auto relative z-10 bg-background"),children:h?"Creating...":"New Branch"})}),t.length>1&&O.options.length>0&&O.targetBranch&&w?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),O.options.map(xt=>{const mt=xt.targetBranch===O.targetBranch;return l.jsx("button",{type:"button",onClick:()=>W(xt.targetSha),className:On("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",mt?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:xt.targetBranch},`merge-${xt.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void w(O.sources,O.targetBranch),disabled:O.sources.length===0||D,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:D?"Merging...":"Confirm"})]}):null,H.length>0&&(re||se)?l.jsxs("div",{ref:_e,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>K(xt=>!xt),className:N,children:[H.length," ",H.length===1?"Worktree":"Worktrees"]}),P?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:H.map(xt=>{var mt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:xt.path,children:Tm(xt,X)?Ow(xt.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(mt=xt.branchName)!=null?mt:"detached"," • ",xt.headSha.slice(0,7)]})]}),Tm(xt,X)?l.jsxs("div",{className:"flex items-center gap-1",children:[re?l.jsx("button",{type:"button",onClick:()=>{K(!1),re(xt.path)},disabled:je||xt.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,se?l.jsx("button",{type:"button",onClick:()=>void se(xt.path,xt.isPrunable),disabled:je,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:je?"...":"Remove"}):null]}):null]},xt.path)})}):null]}):null]})})}function $w({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=g.useState(!t);return g.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const _=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(_),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Iw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:_,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,normalizedSearchQuery:S,matchingNodeIds:k,focusedNode:j,renderNodes:E,shouldRenderNode:I,manuallyOpenedClumps:O,manuallyClosedClumps:D,defaultCollapsedClumps:W,leadByClusterKey:H,clusterKeyByCommitId:X,clusterCounts:P,commitIdsWithRenderedAncestry:K,nodeWarnings:re,connectorParentShas:se,branchStartShas:je,branchOffNodeShas:Pe,crossBranchOutgoingShas:J,branchBaseCommitByName:de,branchStartAccentClass:z,connectorParentAccentClass:ce,commitCornerRadiusPx:U,lineStrokeWidth:Q,pointFormatter:_e,connectors:N,mergeConnectors:ae,cullConnectorPath:oe,flushCameraReactTick:ge,setManuallyOpenedClumps:De,setManuallyClosedClumps:ze,onCommitCardClick:ot,unpushedCommitShasSetByBranch:ct,checkedOutHeadSha:Ct}){const[Yt,xt]=g.useState(new Set),mt=g.useRef(null);g.useEffect(()=>{const ke=new Set;P.forEach((Xe,Ue)=>{(O.has(Ue)||!W.has(Ue)&&!D.has(Ue))&&ke.add(Ue)});const ne=mt.current;if(ne==null){mt.current=ke;return}const Me=[];if(ke.forEach(Xe=>{ne.has(Xe)||Me.push(Xe)}),Me.length>0){xt(Ue=>{const Ye=new Set(Ue);return Me.forEach(nt=>Ye.add(nt)),Ye});const Xe=window.setTimeout(()=>{xt(Ue=>{const Ye=new Set(Ue);return Me.forEach(nt=>Ye.delete(nt)),Ye})},260);return mt.current=ke,()=>{window.clearTimeout(Xe)}}mt.current=ke},[P,W,D,O]);const Ke=(ke,ne)=>{const Me=ne.zIndex-ke.zIndex;if(Me!==0)return Me;const Xe=Math.min(ke.fromY,ke.toY),Ue=Math.min(ne.fromY,ne.toY),Ye=Xe-Ue;return Ye!==0?Ye:ke.id.localeCompare(ne.id)},Wt=ae.filter(ke=>oe(ke)).sort(Ke),qe=N.filter(ke=>oe(ke)).sort(Ke),_t=E.filter(ke=>I(ke));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[_t.map(ke=>{var St,tt,Ot,Ht,Zt,st;const ne=X.get(ke.commit.visualId),Me=ne?O.has(ne)||!W.has(ne)&&!D.has(ne):!1,Xe=ne?H.get(ne)===ke.commit.visualId:!1,Ue=ne!=null&&Me&&!Xe&&Yt.has(ne),Ye=ne&&(St=P.get(ne))!=null?St:1,nt=K.has(ke.commit.id),ft=(tt=re.get(ke.commit.id))!=null?tt:[],dt=ft.length>0&&!nt,gt=w.includes(ke.commit.id),$t=ke.commit.id==="WORKING_TREE"||ke.commit.kind==="uncommitted",at=ke.commit.kind==="stash"||ke.commit.id.startsWith("STASH:"),V=/^STASH:(\d+)$/.exec(ke.commit.id),Z=V?`Stash:${V[1]}`:null,fe=at?ke.commit.message.trim()&&ke.commit.message.trim()!=="git-visualizer"?ke.commit.message:"Stashed changes":ke.commit.message,be=ke.commit.kind==="branch-created"&&ke.commit.id.startsWith("BRANCH_HEAD:"),Je=$t||((Ht=(Ot=ct.get(ke.commit.branchName))==null?void 0:Ot.has(ke.commit.id))!=null?Ht:!1),Ne=($t||Ct!=null&&ke.commit.id===Ct)&&!gt,wt=Ne?"text-[#38BDF2]":gt?"text-[#158EFC]":"text-muted-foreground",He=Ne?{color:"#38BDF2"}:gt?{color:"#158EFC"}:void 0,Gt=(Zt=He==null?void 0:He.color)!=null?Zt:"#8B8B8B";return l.jsxs($w,{fadeIn:Ue,dataCommitCard:"true",className:On("group absolute z-20 cursor-grab active:cursor-grabbing",S&&!k.has(ke.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&k.has(ke.commit.id)?"scale-[1.01]":"",(j==null?void 0:j.commit.id)===ke.commit.id?"z-30":""),style:{left:ke.x,top:ke.y,width:ms,height:bl+Hs+4,overflow:"visible"},onClick:et=>ot(et,ke),onPointerDown:et=>y(et,ke),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${_}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:On("min-w-0 h-4 flex-1 text-sm font-medium leading-none",wt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:He,children:at&&Z?Z:ke.commit.branchName?`${ke.commit.branchName}/${ke.commit.id.slice(0,7)}`:ke.commit.id.slice(0,7)}),Xe&&Ye>1?l.jsx("button",{type:"button",onMouseDown:et=>{et.stopPropagation()},onClick:et=>{if(et.stopPropagation(),et.preventDefault(),!ne)return;!W.has(ne)?(De(bt=>{if(!bt.has(ne))return bt;const It=new Set(bt);return It.delete(ne),It}),ze(bt=>{const It=new Set(bt);return It.has(ne)?It.delete(ne):It.add(ne),It})):(ze(bt=>{if(!bt.has(ne))return bt;const It=new Set(bt);return It.delete(ne),It}),De(bt=>{const It=new Set(bt);return It.has(ne)?It.delete(ne):It.add(ne),It})),ge()},className:On("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",wt),style:He,children:Me?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Ye}`}):null]})}),l.jsx("div",{className:On("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Ne&&!Je&&!at&&!be?"bg-[#EBF7FE]":gt&&!Je&&!at&&!be?"bg-[#E5F0FF]":Je||at||be?"bg-transparent":"bg-[#F5F5F5]",at||$t||be?"border-dashed":"",Pe.has(ke.commit.id)||je.has(ke.commit.id)||J.has(ke.commit.id)?z:se.has(ke.commit.id)?ce:((st=de.get(ke.commit.branchName))==null?void 0:st.id)===ke.commit.id?"border-amber-500":dt?"border-red-500":"",(S&&k.has(ke.commit.id)&&!d,"")),style:{top:0,borderWidth:(j==null?void 0:j.commit.id)===ke.commit.id?`${at||$t||be?Q*(2/1.5):Q}px`:`${at||$t||be?Q*(2/1.5):Q}px`,borderColor:(j==null?void 0:j.commit.id)===ke.commit.id?Gt:Ne?"#38BDF2":gt?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${U}px`,borderBottomRightRadius:`${U}px`,borderBottomLeftRadius:`${U}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:On("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",wt,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:He,children:Xe&&Me?fe:Xe&&Ye>1?`${fe} +${Ye-1}`:fe}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:dt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:ft.join(`
`),children:"Broken ancestry"}):null})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:On("select-text text-sm font-medium",wt),"data-selectable-text":"true",style:He,children:["@",ke.commit.author]}),l.jsx("div",{className:On("select-text text-sm font-medium",wt),"data-selectable-text":"true",style:He,children:new Date(ke.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},ke.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Wt.map(ke=>{const{fromX:ne,fromY:Me,toX:Xe,toY:Ue}=ke,Ye=by(ne,Me,Xe,Ue,_e,ke.fromFace,ke.toFace);return l.jsx("path",{d:Ye,fill:"none",stroke:Wh,strokeWidth:Q,strokeLinecap:"round",strokeLinejoin:"round"},ke.id)}),qe.map(ke=>{const{fromX:ne,fromY:Me,toX:Xe,toY:Ue}=ke,Ye=by(ne,Me,Xe,Ue,_e,ke.fromFace,ke.toFace);return l.jsx("path",{d:Ye,fill:"none",stroke:Wh,strokeWidth:Q,strokeLinecap:"round",strokeLinejoin:"round"},ke.id)})]})]})})})}function Pw({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:_,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",..._,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function Hw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:k,onNewBranchCreateModeChange:j,onNewBranchDialogClose:E,onNewBranchConfirm:I,selectedCommitCanCreateBranch:O,currentCheckedOutCommitCanCreateBranch:D,createBranchFromNodeInProgress:W}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:H=>H.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:H=>i(H.target.value),onKeyDown:H=>{(H.metaKey||H.ctrlKey)&&H.key==="Enter"&&(H.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:H=>H.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(H=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:H},H))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:E,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:H=>H.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>j("from-selected-node"),className:On("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>j("new-root"),className:On("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:H=>k(H.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:E,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:I,disabled:!w.trim()||W||S==="from-selected-node"&&!O&&!D,className:On("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:W?"Creating...":"Create"})]})]})}):null]})}const My="/icon-GitOrientation.svg";function Vw({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>n(i),className:On("window-no-drag inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:On("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${My})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${My})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function Uw({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=g.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[20rem] shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(uw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(nw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Hx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function Yw({mapPadHostRef:t,transformLayerRef:n}){const i=g.useRef({x:0,y:0}),a=g.useRef(ac),c=g.useRef({panX:0,panY:0,zoom:ac}),u=g.useRef(null),d=g.useRef(ac),h=g.useRef(null),[p,y]=g.useState(!1),[_,x]=g.useState(ac),[b,w]=g.useState(0),S=g.useRef(null),k=g.useRef(0),j=g.useCallback(()=>{const K=t.current;if(!K)return null;const re=K.getBoundingClientRect(),se=getComputedStyle(K),je=Number.parseFloat(se.borderLeftWidth)||0,Pe=Number.parseFloat(se.borderTopWidth)||0,J=Number.parseFloat(se.paddingLeft)||kd,de=Number.parseFloat(se.paddingTop)||kd;return{x:re.left+je+J,y:re.top+Pe+de}},[t]),E=g.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),g.startTransition(()=>{w(K=>K+1)}),k.current=performance.now()},[]),I=g.useCallback((K,re,se)=>{const je=c.current;c.current={panX:K,panY:re,zoom:se};const Pe=n.current;if(Pe&&(Pe.style.transform=`translate3d(${K}px, ${re}px, 0) scale(${se/ra})`),Math.abs(d.current-se)>Gh&&(d.current=se,x(se)),Math.abs(se-je.zoom)>Gh){E();return}const z=performance.now()-k.current;if(z>=vy){E();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,E()},vy-z)},[E,n]),O=g.useRef(null),D=g.useCallback(()=>{u.current!=null||!O.current||(u.current=window.requestAnimationFrame(O.current))},[]),W=g.useCallback(()=>{y(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,y(!1)},90)},[]),H=g.useCallback((K,re,se)=>{i.current={x:K,y:re},a.current=se,W(),D()},[W,D]);O.current=()=>{u.current=null;const K=c.current,re=i.current.x,se=i.current.y,je=a.current,Pe=Math.abs(re-K.panX)<=Sy?re:K.panX+(re-K.panX)*wy,J=Math.abs(se-K.panY)<=Sy?se:K.panY+(se-K.panY)*wy,de=Math.abs(je-K.zoom)<=Gh?je:K.zoom+(je-K.zoom)*jw;I(Pe,J,de),Pe!==re||J!==se||de!==je?O.current&&(u.current=window.requestAnimationFrame(O.current)):E()};const X=g.useCallback((K,re,se)=>{const je=Tw(se),Pe=i.current.x,J=i.current.y,de=a.current,z=j();if(!z){H(Pe,J,je);return}const ce=K-z.x,U=re-z.y,Q=de/ra,_e=je/ra,N=(ce-Pe)/Q,ae=(U-J)/Q;H(ce-N*_e,U-ae*_e,je)},[j,H]),P=g.useCallback(K=>{if(K.preventDefault(),K.ctrlKey||K.metaKey){const re=Math.exp(-K.deltaY*Cw);X(K.clientX,K.clientY,a.current*re);return}H(i.current.x-K.deltaX,i.current.y-K.deltaY,a.current)},[H,X]);return g.useLayoutEffect(()=>(I(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[I]),g.useLayoutEffect(()=>{const K=n.current;if(!K)return;const re=c.current;K.style.transform=`translate3d(${re.panX}px, ${re.panY}px, 0) scale(${re.zoom/ra})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:j,flushCameraReactTick:E,syncCamera:H,handleWheel:P}}function Ww(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function Fw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=g.useRef(null),h=g.useRef(!1),p=g.useRef([]),[y,_]=g.useState(!1),[x,b]=g.useState(null),[w,S]=g.useState([]),[k,j]=g.useState(null),E=g.useCallback(O=>{const D=t.current,W=i();if(!D||!W)return[];const H=D.getBoundingClientRect(),X=n.current.zoom/ra;if(X<=0)return[];const P=[],K=O.left,re=O.left+O.width,se=O.top,je=O.top+O.height;for(const Pe of a){if(!c(Pe))continue;const J=W.x+n.current.panX+Pe.x*X-H.left,de=W.y+n.current.panY+Pe.y*X-H.top,z=J+ms*X,ce=de+(bl+Hs)*X;!(z<K||J>re||ce<se||de>je)&&P.push(Pe.commit.id)}return P},[i,a,n,t,c]),I=g.useCallback(O=>{if(O.button!==0)return;const D=O.target;if(D!=null&&D.closest("[data-commit-card]")||D!=null&&D.closest("button, a, input, textarea, select"))return;const W=t.current;if(!W)return;O.preventDefault();const H=W.getBoundingClientRect(),X=O.clientX-H.left,P=O.clientY-H.top;d.current={startX:X,startY:P,currentX:X,currentY:P,additive:O.metaKey||O.ctrlKey},h.current=!1,p.current=O.metaKey||O.ctrlKey?w:[],_(!0),b({left:X,top:P,width:0,height:0})},[t,w]);return g.useEffect(()=>{const O=W=>{var se;const H=d.current;if(!H)return;const X=t.current;if(!X)return;const P=X.getBoundingClientRect();H.currentX=W.clientX-P.left,H.currentY=W.clientY-P.top,!h.current&&(Math.abs(H.currentX-H.startX)>2||Math.abs(H.currentY-H.startY)>2)&&(h.current=!0);const K=Ww(H);b(K);const re=E(K);S(H.additive?Array.from(new Set([...p.current,...re])):Array.from(new Set(re))),H.additive||j((se=re[re.length-1])!=null?se:null)},D=()=>{if(d.current){const W=h.current;d.current=null,h.current=!1,_(!1),b(null),W||(S([]),j(null));return}u()};return window.addEventListener("mousemove",O),window.addEventListener("mouseup",D),()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",D)}},[E,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:k,setMergeTargetCommitSha:j,startMarqueeDrag:I}}function Ey({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:k,mergeInProgress:j=!1,onPushAllBranches:E,onPushCurrentBranch:I,onPushCommitTargets:O,pushInProgress:D=!1,onDeleteSelection:W,deleteInProgress:H=!1,worktrees:X=[],currentRepoPath:P,onRemoveWorktree:K,removeWorktreeInProgress:re=!1,onSwitchToWorktree:se,onStashLocalChanges:je,stashInProgress:Pe=!1,stashDisabled:J=!1,onCommitLocalChanges:de,commitInProgress:z=!1,commitDisabled:ce=!1,onStageAllChanges:U,stageInProgress:Q=!1,onCreateBranchFromNode:_e,onCreateRootBranch:N,createBranchFromNodeInProgress:ae=!1,isDebugOpen:oe=!1,onDebugClose:ge,orientation:De="horizontal",branchCommitPreviews:ze={},branchParentByName:ot={},branchUniqueAheadCounts:ct={},gridSearchQuery:Ct="",gridSearchJumpToken:Yt=0,gridSearchJumpDirection:xt=1,gridFocusSha:mt=null,checkedOutRef:Ke=null,onGridSearchResultCountChange:Wt,onGridSearchResultIndexChange:qe,onGridSearchFocusChange:_t,onInteractionChange:ke,manuallyOpenedClumps:ne,manuallyClosedClumps:Me,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:Ue,gridHudProps:Ye}){var F,ee,ue,Ve,lt,ht,Ft,yn,As,vo,$s,Vt,Rn,hn;const nt=g.useRef(null),ft=g.useRef(null),dt=g.useRef(null),gt=g.useRef(null),$t=g.useRef(void 0),at=g.useRef(void 0),V=g.useRef(void 0),Z=g.useRef(0),fe=g.useRef(null),[be,Je]=g.useState(!1),[Ge,Ne]=g.useState(!1),[wt,He]=g.useState(""),[Gt,St]=g.useState(!1),[tt,Ot]=g.useState(!1),[Ht,Zt]=g.useState(""),[st,et]=g.useState("from-selected-node"),[Dt,bt]=g.useState(()=>new Set),[It,yt]=g.useState(()=>new Set),[At,an]=g.useState({}),_n=g.useRef(!1),vn=g.useRef(null),is=g.useRef(null),In=ne!=null?ne:Dt,An=Me!=null?Me:It,Mn=Xe!=null?Xe:bt,as=Ue!=null?Ue:yt,[cn,Dn]=g.useState(null),[it,rs]=g.useState(null),{isCameraMoving:No,renderedZoom:Kn,cameraRenderTick:js,renderedCameraRef:Ms,interactionIdleTimeoutRef:qs,getTransformLayerOriginScreen:_s,flushCameraReactTick:So,syncCamera:Io,handleWheel:ao}=Yw({mapPadHostRef:ft,transformLayerRef:dt}),un=g.useMemo(()=>dp(t,d,ze,ot),[t,d,ze,ot]),Ds=g.useMemo(()=>Mc({lanes:un,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:ze,branchParentByName:ot,branchUniqueAheadCounts:ct,manuallyOpenedClumps:In,manuallyClosedClumps:An,isDebugOpen:oe,gridSearchQuery:Ct,gridFocusSha:mt,checkedOutRef:Ke!=null?Ke:null,orientation:De,nodePositionOverrides:At}),[un,t,n,i,a,d,ze,ot,ct,In,An,oe,Ct,mt,(F=Ke==null?void 0:Ke.headSha)!=null?F:null,(ee=Ke==null?void 0:Ke.branchName)!=null?ee:null,De,At]),Ns=g.useMemo(()=>Mc({lanes:un,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:ze,branchParentByName:ot,branchUniqueAheadCounts:ct,manuallyOpenedClumps:In,manuallyClosedClumps:An,isDebugOpen:oe,gridSearchQuery:Ct,gridFocusSha:mt,checkedOutRef:Ke!=null?Ke:null,orientation:De,nodePositionOverrides:At}),[un,t,n,i,a,d,ze,ot,ct,In,An,oe,Ct,mt,(ue=Ke==null?void 0:Ke.headSha)!=null?ue:null,(Ve=Ke==null?void 0:Ke.branchName)!=null?Ve:null,De,At]),{allCommits:gs,clusterKeyByCommitId:ro,leadByClusterKey:Qo,clusterCounts:ys,matchingNodes:Qn,matchingNodeIds:Es,normalizedSearchQuery:gn,focusedNode:Pn,defaultCollapsedClumps:dn,renderNodes:Wn,visibleNodesBySha:Gi,contentWidth:Zo,contentHeight:li,connectors:_o,mergeConnectors:Jo,connectorDecisions:Ts,nodeWarnings:fs,commitIdsWithRenderedAncestry:Nn,connectorParentShas:Rs,branchStartShas:Hn,branchOffNodeShas:ls,crossBranchOutgoingShas:xi,branchBaseCommitByName:Po,pointFormatter:qi}=Ds,Kt=!!gn,Ks=Kn/ra,Us=g.useMemo(()=>({transform:`scale(${1/Ks})`,transformOrigin:"top left",width:`${100*Ks}%`,height:`${100*Ks}%`}),[Ks]),Ho=-(20/Ks),bi=g.useMemo(()=>{const he=new Map;for(const $e of Wn)he.set($e.commit.visualId,$e);return he},[Wn]),Vo=g.useMemo(()=>Rw(Wn,Ho),[Wn,Ho]),Qs=he=>{var B;const $e=he.commit.id,C=he.commit.visualId;if(Kt&&Es.has($e)||(Pn==null?void 0:Pn.commit.id)===$e||cn===null)return!0;if(!cn.has(C))return!1;const M=ro.get(C);return M&&((B=ys.get(M))!=null?B:1)>1&&(In.has(M)||!dn.has(M)&&!An.has(M)),!0},vi=1.5/Ks,lo=Mw/Ks,Sn="border-slate-400/70",go="border-blue-500",Vn=g.useMemo(()=>new Map(t.map(he=>[he.name,he])),[t]),Bs=(lt=Ke==null?void 0:Ke.hasUncommittedChanges)!=null?lt:!1;g.useMemo(()=>new Set(t.filter(he=>he.commitsAhead===0&&!he.name.startsWith("*")).map(he=>he.name)),[t]);const co=g.useMemo(()=>{var $e,C;const he=new Map;for(const M of Wn){const B=($e=he.get(M.commit.id))!=null?$e:new Set;B.add(M.commit.branchName),he.set(M.commit.id,B)}for(const M of i){const B=(C=he.get(M.fullSha))!=null?C:new Set;M.branch&&B.add(M.branch),he.set(M.fullSha,B)}return he},[Wn,i,d]),rn=g.useMemo(()=>new Map(Object.entries(c).map(([he,$e])=>[he,new Set($e)])),[c]),Ys=g.useCallback(()=>{qs.current,So()},[So,qs]),{isMarqueeSelecting:Ws,marqueeRect:Ls,selectedCommitShas:hs,setSelectedCommitShas:Ro,mergeTargetCommitSha:Zs,setMergeTargetCommitSha:Co,startMarqueeDrag:yo}=Fw({scrollContainerRef:nt,renderedCameraRef:Ms,getTransformLayerOriginScreen:_s,renderNodes:Wn,shouldRenderNode:Qs,onPointerReleaseNoMarquee:Ys}),Bo=g.useMemo(()=>new Set(Wn.map(he=>he.commit.id)),[Wn]),En=g.useMemo(()=>hs.filter(he=>Bo.has(he)),[hs,Bo]),Un=g.useCallback((he,$e)=>{var B;if(!$e)return!1;if(((B=ze[he])!=null?B:[]).some(L=>gi(L.fullSha,$e)||gi(L.sha,$e)))return!0;const M=Vn.get(he);return!!(M!=null&&M.headSha&&gi(M.headSha,$e))},[ze,Vn]),Fn=(ht=Ke==null?void 0:Ke.branchName)!=null?ht:null,ko=(Ft=Ke==null?void 0:Ke.headSha)!=null?Ft:null,uo=Fn==null,Js=g.useMemo(()=>{if(!mt)return null;const he=Wn.filter($e=>$e.commit.id===mt);return he.length===0?null:he.length===1||!Pn?he[0]:he.reduce(($e,C)=>{const M=($e.x-Pn.x)**2+($e.y-Pn.y)**2;return(C.x-Pn.x)**2+(C.y-Pn.y)**2<M?C:$e})},[mt,Wn,Pn]),ei=g.useCallback((he,$e,C)=>{for(const M of X){if(!qh(M,P))continue;if(M.branchName){if(M.branchName===he&&gi(M.headSha,$e))return M;continue}if(!gi(M.headSha,$e)&&!gi(M.headSha,C))continue;if(M.parentSha&&Un(he,M.parentSha)||Un(he,M.headSha))return M;const B=Vn.get(he);if(B&&gi(B.headSha,M.headSha)||he===d&&i.some(L=>gi(L.fullSha,M.headSha)))return M}return null},[X,P,Un,Vn,d,i]),xo=g.useCallback(he=>{for(const $e of X)if(qh($e,P)&&$e.branchName===he)return $e;return null},[X,P]),Cs=g.useCallback((he,$e)=>{for(const C of X)if(qh(C,P)&&(gi(C.headSha,he)||gi(C.headSha,$e)))return C;return null},[X,P]),Os=g.useCallback(he=>{var $e;return Array.from(($e=co.get(he))!=null?$e:[])},[co]),Uo=g.useMemo(()=>{var B,L,Y,ie;const he=new Map;for(const Te of En){const Se=Os(Te);if(Se.length===0)continue;const Oe=(B=Se.find(ut=>ut!==d))!=null?B:Se[0],rt=En.filter(ut=>ut!==Te).filter(ut=>!new Set(Os(ut)).has(Oe));he.set(Oe,{targetSha:Te,targetBranch:Oe,sourceRefs:rt})}const $e=Array.from(he.values()),C=Zs?$e.find(Te=>{var Se;return Te.targetSha===Zs||Te.targetBranch===((Se=Os(Zs)[0])!=null?Se:"")}):null,M=(L=C!=null?C:$e[$e.length-1])!=null?L:null;return{options:$e,selected:M,targetBranch:(Y=M==null?void 0:M.targetBranch)!=null?Y:null,sources:(ie=M==null?void 0:M.sourceRefs)!=null?ie:[]}},[En,Os,d,Zs]),jo=g.useMemo(()=>{const he=[...Fn===d?[{name:d,headSha:ko!=null?ko:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter($e=>!$e.name.startsWith("*")&&$e.unpushedCommits>0&&$e.remoteSyncStatus!=="on-github").map($e=>[$e.name,$e]);return new Map(he)},[t,Fn,ko,d,a.length]),bo=g.useMemo(()=>{const he=M=>{var L;const B=Os(M).filter(Y=>jo.has(Y));return B.length===0?null:B.length===1?B[0]:Fn&&B.includes(Fn)?Fn:(L=B.find(Y=>Y!==d))!=null?L:B[0]},$e=M=>{var B;return M===d?a.map(L=>{var Y,ie;return{fullSha:L.fullSha,sha:L.sha,parentSha:(Y=L.parentSha)!=null?Y:null,message:L.message,author:L.author,date:L.date,kind:(ie=L.kind)!=null?ie:"commit"}}):(B=ze[M])!=null?B:[]},C=new Map;for(const M of En){const B=he(M);if(!B)continue;const L=jo.get(B);if(!L)continue;const Y=$e(B).slice(0,L.unpushedCommits),ie=Y.findIndex(Se=>Se.fullSha===M);if(ie===-1)continue;const Te=C.get(B);(!Te||ie<Te.targetIndex)&&C.set(B,{branchName:B,targetSha:M,targetIndex:ie,commitCount:Y.length-ie})}return Array.from(C.values())},[En,Os,jo,Fn,d,a,ze]),T=g.useMemo(()=>Array.from(new Set(En.map(he=>/^STASH:(\d+)$/.exec(he)).filter(he=>!!he).map(he=>parseInt(he[1],10)))).sort((he,$e)=>he-$e),[En]),G=En.includes("WORKING_TREE"),xe=(G?1:0)+T.length,Ce=[...G?["Uncommitted changes"]:[],...T.map(he=>`Stash ${he+1}`)],Qe=jo.size,Ze=!uo&&!!Fn&&jo.has(Fn),Nt=Fn?`Push ${Fn}`:"Push current branch",We=bo.length===1?bo[0].commitCount>1?`Push ${bo[0].commitCount} commits on ${bo[0].branchName}`:`Push ${bo[0].targetSha.slice(0,7)} on ${bo[0].branchName}`:`Push ${bo.length} selected ranges`,Bt=g.useCallback(he=>{const $e=he.target;$e!=null&&$e.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||up().startDragging()},[]);g.useEffect(()=>{const he=No||Ws;gt.current!==he&&(gt.current=he,ke==null||ke(he))},[No,Ws,ke]),g.useEffect(()=>{const he=gn?Qn.length:null;$t.current!==he&&($t.current=he,Wt==null||Wt(he))},[Qn.length,gn,Wt]),g.useEffect(()=>{const he=gn&&mt?(()=>{const $e=Qn.findIndex(C=>C.commit.id===mt);return $e>=0?$e:null})():null;at.current!==he&&(at.current=he,qe==null||qe(he))},[mt,Qn,gn,qe]);const zt=g.useMemo(()=>{var Te,Se,Oe,rt,ut,Et;if(!gn)return null;const he=gn,$e=t.map(Lt=>Lt.name),C=$e.find(Lt=>Lt.toLowerCase()===he),M=C!=null?C:$e.find(Lt=>Lt.toLowerCase().startsWith(he)),L=M!=null?M:$e.find(Lt=>Lt.toLowerCase().includes(he));if(!L)return null;const Y=(Te=t.find(Lt=>Lt.name===L))!=null?Te:null;if(Y!=null&&Y.headSha)return Y.headSha;const ie=(Se=ze[L])!=null?Se:[];return ie.length>0?(rt=(Oe=ie[0])==null?void 0:Oe.fullSha)!=null?rt:null:L===d&&(Et=(ut=i[0])==null?void 0:ut.fullSha)!=null?Et:null},[gn,t,ze,d,i]);g.useEffect(()=>{var M,B,L;if(!gn){if(Z.current=Yt,V.current===null)return;V.current=null,_t==null||_t(null);return}if(Yt<=0||Z.current===Yt)return;Z.current=Yt;let he;const $e=mt?Qn.findIndex(Y=>Y.commit.id===mt):-1,C=Qn.length>0?$e<0?0:($e+xt+Qn.length)%Qn.length:-1;he=(L=(B=(M=Qn[C])==null?void 0:M.commit.id)!=null?B:zt)!=null?L:null,V.current!==he&&(V.current=he,_t==null||_t(he))},[Qn,gn,_t,zt,Yt,xt]),g.useLayoutEffect(()=>{if(!mt)return;const he=`${mt}:${Yt}`;if(fe.current===he)return;const $e=nt.current,C=Js;if(!$e||!C)return;const M=_s();if(!M)return;const B=$e.getBoundingClientRect(),L=Ms.current.zoom,Y=L/ra,ie=C.x+ms/2,Te=C.y+bl+Hs/2,Se=B.left+B.width/2,Oe=B.top+B.height/2;Io(Se-M.x-ie*Y,Oe-M.y-Te*Y,L),fe.current=he},[mt,Yt,Js,_s,Io,Ms]);const tn=(vo=(As=it==null?void 0:it.width)!=null?As:(yn=nt.current)==null?void 0:yn.clientWidth)!=null?vo:0,ln=(Rn=(Vt=it==null?void 0:it.height)!=null?Vt:($s=nt.current)==null?void 0:$s.clientHeight)!=null?Rn:0,nn=tn>0&&ln>0?Cy(tn,ln,Ms.current,{innerPaddingPx:kd}):null,Cn=nn!=null?ky(nn,Ms.current.zoom):null,kn=he=>{if(!Cn)return!0;const{fromX:$e,fromY:C,toX:M,toY:B}=he;return Nw($e,C,M,B,Cn,he.fromFace,he.toFace)};g.useLayoutEffect(()=>{var Y;const he=nt.current;if(!he||he.clientWidth<=0||he.clientHeight<=0)return;const $e=he.clientWidth,C=he.clientHeight;rs(ie=>(ie==null?void 0:ie.width)===$e&&(ie==null?void 0:ie.height)===C?ie:{width:$e,height:C});const M=Cy($e,C,Ms.current,{innerPaddingPx:kd});if(!M){Dn(ie=>ie===null?ie:null);return}const B=ky(M,Ms.current.zoom),L=Bw(Vo,B,bi,Ho);for(const ie of Wn){const Te=ro.get(ie.commit.visualId);if(!Te||((Y=ys.get(Te))!=null?Y:1)<=1)continue;(In.has(Te)||!dn.has(Te)&&!An.has(Te))&&L.add(ie.commit.visualId)}Dn(ie=>Aw(ie,L)?ie:L)},[Kn,Yt,mt,No,js,In,An,dn,ro,ys,Wn,it,Vo,bi,Ho]),g.useLayoutEffect(()=>{const he=nt.current;if(!he)return;const $e=()=>{const M=he.clientWidth,B=he.clientHeight;M<=0||B<=0||rs(L=>(L==null?void 0:L.width)===M&&(L==null?void 0:L.height)===B?L:{width:M,height:B})};$e();const C=new ResizeObserver($e);return C.observe(he),()=>C.disconnect()},[gs.length]);const zs=Wn.filter(he=>Qs(he)).length,fo=Jo.filter(he=>kn(he)).length,ci=_o.filter(he=>kn(he)).length,Li=g.useCallback((he,$e)=>{if(_n.current){he.preventDefault(),he.stopPropagation();return}he.stopPropagation();const C=$e.commit.id;if(he.shiftKey?(Ro(Y=>Y.includes(C)?Y.filter(ie=>ie!==C):[...Y,C]),Co(C)):(Ro(Y=>Y.includes(C)?[]:[C]),Co(Y=>Y===C?null:C)),!(he.metaKey||he.ctrlKey||he.detail>=2)||C==="WORKING_TREE")return;const B=C.length>=40?C.slice(0,7):C;let L=null;if($e.commit.branchName?(L=ei($e.commit.branchName,C,B),L||(L=xo($e.commit.branchName))):L=Cs(C,B),L&&se){se(L.path);return}h==null||h({commitSha:C})},[Cs,ei,xo,h,se]),Ki=g.useCallback((he,$e)=>{var ie,Te,Se,Oe,rt;if(he.button!==0)return;const C=he.target;if(C!=null&&C.closest('[data-selectable-text="true"]')||C!=null&&C.closest("button, a, input, textarea, select"))return;he.stopPropagation(),he.preventDefault(),_n.current=!1,he.currentTarget.setPointerCapture(he.pointerId);const M=(ie=At[$e.commit.visualId])!=null?ie:At[$e.commit.id];vn.current={nodeId:$e.commit.visualId,startX:he.clientX,startY:he.clientY,baseX:(Te=M==null?void 0:M.x)!=null?Te:$e.x,baseY:(Se=M==null?void 0:M.y)!=null?Se:$e.y,moved:!1,pendingX:(Oe=M==null?void 0:M.x)!=null?Oe:$e.x,pendingY:(rt=M==null?void 0:M.y)!=null?rt:$e.y};const B=()=>{is.current=null;const ut=vn.current;ut&&an(Et=>({...Et,[ut.nodeId]:{x:ut.pendingX,y:ut.pendingY}}))},L=ut=>{const Et=vn.current;if(!Et)return;const Lt=Ms.current.zoom/ra,vt=Lt>0?1/Lt:1,pt=(ut.clientX-Et.startX)*vt,Zn=(ut.clientY-Et.startY)*vt;(Math.abs(pt)>2||Math.abs(Zn)>2)&&(Et.moved=!0),Et.moved&&(_n.current=!0),Et.pendingX=Et.baseX+pt,Et.pendingY=Et.baseY+Zn,is.current==null&&(is.current=window.requestAnimationFrame(B))},Y=()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",Y),window.removeEventListener("pointercancel",Y),is.current!=null&&(window.cancelAnimationFrame(is.current),is.current=null,B());try{he.currentTarget.releasePointerCapture(he.pointerId)}catch{}const ut=vn.current;vn.current=null,ut&&window.setTimeout(()=>{_n.current=!1},0)};window.addEventListener("pointermove",L),window.addEventListener("pointerup",Y),window.addEventListener("pointercancel",Y)},[At]),Lo=g.useCallback(async()=>{if(!de)return;await de(wt)&&(Ne(!1),He(""))},[de,wt]),or=g.useCallback(async()=>{W&&(await W({branchNames:[],discardUncommittedChanges:G,stashIndices:T}),St(!1),Ro([]),Co(null))},[W,G,T]),Qi=g.useCallback(async()=>{var $e;const he=Ht.trim();if(he){if(st==="new-root"){if(!N)return;await N(he)}else{if(!_e)return;const C=En.length===1?En[0]:($e=Ke==null?void 0:Ke.headSha)!=null?$e:null;if(!C||!(C==="WORKING_TREE"||C.startsWith("STASH:")||C===(Ke==null?void 0:Ke.headSha)))return;await _e(C,he)}Ot(!1),Zt(""),et("from-selected-node"),Ro([]),Co(null)}},[Ke==null?void 0:Ke.headSha,st,Ht,_e,N,En]),Zi=!!(Ke!=null&&Ke.headSha),Yo=En.length===0&&Zi,Oi=En.length===1&&(En[0]==="WORKING_TREE"||En[0].startsWith("STASH:"))||Yo,R=!!N;return g.useEffect(()=>{if(tt){if(!Oi&&!Yo&&R){et("new-root");return}(Oi||Yo)&&et("from-selected-node")}},[R,Yo,tt,Oi]),g.useEffect(()=>{const he=$e=>{if(!W||Gt||En.length===0)return;const C=$e.target;C!=null&&C.closest('input, textarea, select, button, [contenteditable="true"]')||$e.key!=="Delete"&&$e.key!=="Backspace"||($e.preventDefault(),St(!0))};return window.addEventListener("keydown",he),()=>window.removeEventListener("keydown",he)},[Gt,W,En.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx(Pw,{isOpen:oe,onClose:()=>ge==null?void 0:ge(),visibleBounds:Cn,renderedNodeCount:zs,totalNodeCount:Wn.length,renderedMergeConnectorCount:fo,totalMergeConnectorCount:Jo.length,renderedConnectorCount:ci,totalConnectorCount:_o.length,mapGridCullViewportInsetScreenPx:kw,debugRows:Ns.debugRows,branchDebugRows:Ns.branchDebugRows,connectorDecisions:Ts}),Ye?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:Bt,className:"window-drag-region pointer-events-auto absolute left-0 right-0 top-0 z-[70] flex justify-between select-none",children:[l.jsxs("div",{className:"flex flex-1 min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-1 items-center",children:l.jsx("div",{className:"window-no-drag pointer-events-auto flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(zw,{selectedVisibleCommitShas:En,commitInProgress:z,commitDisabled:ce,stageInProgress:Q,stashInProgress:Pe,stashDisabled:J,pushInProgress:D,hasUncommittedChanges:Bs,createBranchFromNodeInProgress:ae,onCommitLocalChanges:de,onStageAllChanges:U?()=>void U():void 0,onStashLocalChanges:je,onPushCurrentBranch:I,onPushAllBranches:E,onPushCommitTargets:O,onMergeRefsIntoBranch:k,selectedPushTargets:bo,selectedPushLabel:We,canPushCurrentBranch:Ze,pushCurrentBranchLabel:Nt,pushableRemoteBranchCount:Qe,selectedCommitTargetOption:Uo,mergeInProgress:j,mergeTargetCommitSha:Zs,setMergeTargetCommitSha:Co,worktrees:X,currentRepoPath:P,worktreeMenuOpen:be,setWorktreeMenuOpen:Je,onSwitchToWorktree:se,onRemoveWorktree:K,removeWorktreeInProgress:re,setCommitDialogOpen:Ne,setNewBranchDialogOpen:Ot})})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[l.jsx(Uw,{query:Ye.gridSearchQuery,onQueryChange:Ye.setGridSearchQuery,resultCount:Ye.gridSearchResultCount,resultIndex:Ye.gridSearchResultIndex,onJump:he=>{Ye.setGridSearchJumpDirection(he),Ye.setGridSearchJumpToken($e=>$e+1)}}),l.jsx(Vw,{orientation:Ye.mapGridOrientation,onOrientationChange:Ye.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(hn=Ye.githubAuthStatus)!=null&&hn.ghAvailable&&!Ye.githubAuthStatus.authenticated?l.jsx("button",{onClick:Ye.onGitHubAuthSetup,disabled:Ye.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ye.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Ye.githubAuthStatus&&!Ye.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Ye.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Ye.githubAuthMessage,children:Ye.githubAuthMessage})]}):null,Ye.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Ye.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Ye.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Ye.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Ye.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Ye.commitSwitchFeedback.message})]}):null]})]}):null,gs.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(Iw,{scrollContainerRef:nt,mapPadHostRef:ft,transformLayerRef:dt,isMarqueeSelecting:Ws,contentWidth:Zo,contentHeight:li,isCameraMoving:No,onWheel:ao,onMouseDown:yo,onNodePointerDown:Ki,labelTopPx:Ho,inverseZoomStyle:Us,displayZoom:Ks,selectedVisibleCommitShas:En,normalizedSearchQuery:gn,matchingNodeIds:Es,focusedNode:Js,renderNodes:Wn,shouldRenderNode:Qs,manuallyOpenedClumps:In,manuallyClosedClumps:An,defaultCollapsedClumps:dn,leadByClusterKey:Qo,clusterKeyByCommitId:ro,clusterCounts:ys,commitIdsWithRenderedAncestry:Nn,nodeWarnings:fs,connectorParentShas:Rs,branchStartShas:Hn,branchOffNodeShas:ls,crossBranchOutgoingShas:xi,branchBaseCommitByName:Po,branchStartAccentClass:go,connectorParentAccentClass:Sn,commitCornerRadiusPx:lo,lineStrokeWidth:vi,pointFormatter:qi,connectors:_o,mergeConnectors:Jo,cullConnectorPath:kn,flushCameraReactTick:So,setManuallyOpenedClumps:Mn,setManuallyClosedClumps:as,onCommitCardClick:Li,unpushedCommitShasSetByBranch:rn,checkedOutHeadSha:ko,orientation:De}),Ls&&Ws?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Ls.left,top:Ls.top,width:Ls.width,height:Ls.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Hw,{commitDialogOpen:Ge,commitMessageDraft:wt,onCommitMessageDraftChange:He,onCommitDialogClose:()=>Ne(!1),onCommitConfirm:()=>void Lo(),commitInProgress:z,deleteConfirmOpen:Gt,deleteSelectionItems:Ce,onDeleteConfirmClose:()=>St(!1),onDeleteConfirm:()=>void or(),deleteInProgress:H,deletableSelectionCount:xe,newBranchDialogOpen:tt,newBranchName:Ht,newBranchCreateMode:st,onNewBranchNameChange:Zt,onNewBranchCreateModeChange:et,onNewBranchDialogClose:()=>Ot(!1),onNewBranchConfirm:()=>void Qi(),selectedCommitCanCreateBranch:Oi,currentCheckedOutCommitCanCreateBranch:Yo,createBranchFromNodeInProgress:ae})]})}function Xw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:k=1,gridFocusSha:j=null,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:I,onGridSearchFocusChange:O,view:D="time",isLoading:W=!1,scrollRequest:H,focusedErrorBranch:X,checkedOutRef:P=null,mapTopInsetPx:K=0,onMergeRefsIntoBranch:re,mergeInProgress:se=!1,onPushAllBranches:je,onPushCurrentBranch:Pe,onPushCommitTargets:J,pushInProgress:de=!1,onDeleteSelection:z,worktrees:ce=[],currentRepoPath:U,onRemoveWorktree:Q,removeWorktreeInProgress:_e=!1,onSwitchToWorktree:N,onStashLocalChanges:ae,stashInProgress:oe=!1,stashDisabled:ge=!1,onCommitLocalChanges:De,commitInProgress:ze=!1,commitDisabled:ot=!1,onStageAllChanges:ct,stageInProgress:Ct=!1,onCreateBranchFromNode:Yt,onCreateRootBranch:xt,createBranchFromNodeInProgress:mt=!1,onMoveNodeBackToBranch:Ke,isDebugOpen:Wt=!1,onDebugClose:qe,orientation:_t="horizontal",onInteractionChange:ke,manuallyOpenedClumps:ne,manuallyClosedClumps:Me,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:Ue,layoutModel:Ye,gridHudProps:nt}){const ft=new Set(u.map(V=>V.branchName)),dt=14*864e5,gt=Date.now();function $t(V){return ft.has(V.name)||gt-new Date(V.lastCommitDate).getTime()<=dt}const at=t.filter(V=>V.status==="stale"&&$t(V)).sort((V,Z)=>new Date(Z.lastCommitDate).getTime()-new Date(V.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:D==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Ey,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:k,gridFocusSha:j,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:I,onGridSearchFocusChange:O,staleBranches:at,isLoading:W,scrollRequest:H,focusedErrorBranch:X,checkedOutRef:P,mapTopInsetPx:K,onMergeRefsIntoBranch:re,mergeInProgress:se,onPushAllBranches:je,onPushCurrentBranch:Pe,onPushCommitTargets:J,pushInProgress:de,onDeleteSelection:z,worktrees:ce,currentRepoPath:U,onRemoveWorktree:Q,removeWorktreeInProgress:_e,onSwitchToWorktree:N,onStashLocalChanges:ae,stashInProgress:oe,stashDisabled:ge,onCommitLocalChanges:De,commitInProgress:ze,commitDisabled:ot,onStageAllChanges:ct,stageInProgress:Ct,onCreateBranchFromNode:Yt,onCreateRootBranch:xt,createBranchFromNodeInProgress:mt,onMoveNodeBackToBranch:Ke,isDebugOpen:Wt,onDebugClose:qe,orientation:_t,onInteractionChange:ke,manuallyOpenedClumps:ne,manuallyClosedClumps:Me,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:Ue,layoutModel:Ye,gridHudProps:nt})}):D==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Ey,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:k,gridFocusSha:j,checkedOutRef:P,onGridSearchResultCountChange:E,onGridSearchResultIndexChange:I,onGridSearchFocusChange:O,onInteractionChange:ke,manuallyOpenedClumps:ne,manuallyClosedClumps:Me,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:Ue,layoutModel:Ye,isDebugOpen:Wt,onDebugClose:qe,orientation:_t,gridHudProps:nt})}):null})}const Cr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Gw(t,n,i,a){if(!t)return null;const c=d=>Cr(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function qw(t,n,i,a,c,u,d=!1){var se,je,Pe,J,de;const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,_=(je=(se=i[0])==null?void 0:se.fullSha)!=null?je:null,x=[{name:u,headSha:_!=null?_:"",isDefault:!0},...n.map(z=>({name:z.name,headSha:z.headSha,isDefault:!1}))],b=h?x.filter(z=>Cr(z.headSha,h)):[],w=Gw(h,i,a,u),S=w?x.find(z=>z.name===w):void 0,k=(J=(Pe=b.find(z=>z.isDefault))!=null?Pe:b[0])!=null?J:S,j=!!(k&&h&&Cr(k.headSha,h)),E=k&&!k.isDefault?n.find(z=>z.name===k.name):void 0,I=(()=>{var ce;if(!h)return null;const z=i.find(U=>Cr(U.fullSha,h)||Cr(U.sha,h));if(z!=null&&z.date)return z.date;if(E&&!d){const U=((ce=a[E.name])!=null?ce:[]).find(Q=>Cr(Q.fullSha,h)||Cr(Q.sha,h));if(U!=null&&U.date)return U.date}return null})(),O=I?new Date(I).getTime():Number.NaN,D=Date.now(),W=Number.isFinite(O)?Math.max(D,O+1+t.index):D+t.index,H=new Date(W).toISOString(),X=t.message.trim(),P={fullSha:p,sha:y,parentSha:h,message:X||y,author:"You",date:H,kind:"stash"};if(j&&E)return{branches:n.map(ce=>ce.name===E.name?{...ce,commitsAhead:ce.commitsAhead+1,unpushedCommits:ce.unpushedCommits+1,lastCommitDate:H,headSha:p}:ce),directCommits:i,branchCommitPreviews:{...a,[E.name]:[P,...a[E.name]||[]]},branchUniqueAheadCounts:{...c,[E.name]:Math.max(0,(de=Object.prototype.hasOwnProperty.call(c,E.name)?c[E.name]:E.commitsAhead)!=null?de:0)+1}};if(j&&(k!=null&&k.isDefault)&&!d)return{branches:n,directCommits:i,branchCommitPreviews:{...a,[u]:[P,...a[u]||[]]},branchUniqueAheadCounts:c};const K=`*Stash:${t.index}`;return{branches:[{name:K,commitsAhead:1,commitsBehind:0,lastCommitDate:H,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:(k==null?void 0:k.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[K]:[P]},branchUniqueAheadCounts:{...c,[K]:1}}}function Gx(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,_)=>y.index-_.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=qw(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function Kw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var X,P;const k=Gx(y,t,i,u,h,c,(X=p==null?void 0:p.hasUncommittedChanges)!=null?X:!1);let j=k.branches,E=k.directCommits,I=k.branchCommitPreviews,O=k.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const K=p.headSha||p.parentSha||null,re=(U,Q)=>!U||!Q?!1:U===Q||U.startsWith(Q)||Q.startsWith(U),se=p.branchName?j.find(U=>U.name===p.branchName):void 0,je=(()=>{var Q;if(!K)return null;const U=E.find(_e=>re(_e.fullSha,K)||re(_e.sha,K));if(U!=null&&U.date)return U.date;if(se){const _e=((Q=I[se.name])!=null?Q:[]).find(N=>re(N.fullSha,K)||re(N.sha,K));if(_e!=null&&_e.date)return _e.date}return null})(),Pe=je?new Date(je).getTime():Number.NaN,J=Date.now(),de=Number.isFinite(Pe)?Math.max(J,Pe+1):J,z=new Date(de).toISOString(),ce={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:K,message:"Local uncommitted changes",author:"You",date:z,kind:"uncommitted"};se?(j=j.map(U=>U.name===se.name?{...U,commitsAhead:U.commitsAhead+1,unpushedCommits:U.unpushedCommits+1,lastCommitDate:z,headSha:"WORKING_TREE"}:U),I={...I,[se.name]:[ce,...I[se.name]||[]]},O={...O,[se.name]:Math.max(0,(P=Object.prototype.hasOwnProperty.call(O,se.name)?O[se.name]:se.commitsAhead)!=null?P:0)+1}):I={...I,[c]:[ce,...I[c]||[]]}}const D={...d};D[c]=null;const W=dp(j,c,I,D),H=Mc({lanes:W,branches:j,mergeNodes:n,directCommits:E,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:I,branchParentByName:D,branchUniqueAheadCounts:O,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:j,enrichedBranchCommitPreviews:I,enrichedBranchUniqueAheadCounts:O,enrichedDirectCommits:E,sharedGridLayoutModel:H}}const Ty="git-visualizer:expanded-projects",Ay="git-visualizer:expanded-branches";function Qw(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function Zw(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Jw(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const _=[...h,y];if(y===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Am({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:j,onSelectCommit:E,onSelectBranch:I}){var N,ae;if(_.has(t)||!a.get(t))return null;const D=(N=u.get(t))!=null?N:[],W=D.length>0,H=g.useMemo(()=>{var oe;return[...(oe=c[t])!=null?oe:[]]},[c,t]),X=x&&H.length>0,P=x,K=W||X,re=h.has(t),se=P?H:[],je=re&&se.length>0,Pe=y===t,J=new Set(_);J.add(t);const de="top-[-0.2rem] h-4.5 w-[10px]",z="rounded-bl-[7px]",ce="left-[0.65rem]",U=new Map,Q=[];for(const oe of D){const ge=d.get(oe);if(ge){const De=se.findIndex(ze=>gi(ze.fullSha,ge)||gi(ze.sha,ge));if(De>=0){const ze=(ae=U.get(De))!=null?ae:[];ze.push(oe),U.set(De,ze);continue}}Q.push(oe)}const _e=g.useMemo(()=>{if(!x||se.length===0)return[];const oe=[];let ge=[],De=null;const ze=()=>{if(ge.length===0)return;const ot=ge[ge.length-1],ct=`sidebar-single-${t}-${ot.fullSha}`;oe.push({key:De!=null?De:ct,commits:ge,count:ge.length,lead:ot}),ge=[],De=null};return se.forEach(ot=>{var Ct;const ct=(Ct=S.get(`${t}:${ot.fullSha}`))!=null?Ct:null;if(ge.length===0){ge=[ot],De=ct;return}if(ct===De){ge.push(ot);return}ze(),ge=[ot],De=ct}),ze(),oe},[t,x,se,S]);return l.jsxs("li",{className:On("relative",n>0?"pl-4":"pl-0",n===0&&!i?re?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:On("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",z,ce,de)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:On("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ce)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:On("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-7 text-left text-sm font-normal transition-colors hover:bg-accent",Pe?"text-foreground":"text-muted-foreground hover:text-foreground"),role:K?"button":void 0,tabIndex:K?0:void 0,onClick:()=>{K?p(t):I==null||I(t)},onKeyDown:oe=>{K&&(oe.key==="Enter"||oe.key===" ")&&(oe.preventDefault(),p(t))},children:[K?l.jsx("button",{type:"button","aria-label":`${re?"Collapse":"Expand"} ${t}`,onPointerDown:oe=>{oe.preventDefault()},onClick:oe=>{oe.preventDefault(),oe.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:l.jsx("span",{"aria-hidden":"true",className:On("inline-block transition-transform",re?"rotate-90":""),children:"▶"})}):null,l.jsx("span",{className:"min-w-0 flex-1 break-words",children:t})]})}),je?l.jsx("ul",{className:"relative space-y-1 pl-4",children:_e.map(oe=>{const ge=oe.count>1&&!k(oe.key);return(ge?[oe.lead]:oe.commits).map(ze=>{var Ct;const ot=se.findIndex(Yt=>Yt.fullSha===ze.fullSha),ct=b(ze.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>E==null?void 0:E(ze.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:ze.message,children:[l.jsx("span",{className:"block truncate",children:ze.message}),ct.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:ct.map(Yt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:Yt})]},`${ze.fullSha}:${Yt}`))}):null]}),oe.count>1&&ze.fullSha===oe.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${oe.lead.fullSha}`,onClick:()=>j(oe.key,`${t}:${oe.lead.fullSha}`),className:On("shrink-0 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",ge?"":"min-w-[2ch] text-center"),children:ge?`+${Math.max(1,oe.count-1)}`:"−"}):null]}),(Ct=U.get(ot))!=null&&Ct.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:U.get(ot).map((Yt,xt,mt)=>l.jsx(Am,{branchName:Yt,depth:n+1,isLast:xt===mt.length-1&&Q.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:J,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Yt,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:j,onSelectCommit:E,onSelectBranch:I},Yt))}):null]},`${t}:${ze.fullSha}`)})})}):null,W&&re&&Q.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:Q.map((oe,ge)=>l.jsx(Am,{branchName:oe,depth:n+1,isLast:ge===Q.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:J,showCommits:x,getMergeTargetLabels:b,sourceBranchName:oe,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:j,onSelectCommit:E,onSelectBranch:I},oe))}):null]})}function eS({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function tS({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,projectLoading:d=!1,projectError:h=null,checkedOutRef:p,manuallyOpenedClumpsByProject:y={},manuallyClosedClumpsByProject:_={},manuallyOpenedClumps:x,manuallyClosedClumps:b,setManuallyOpenedClumps:w,setManuallyClosedClumps:S,gridLayoutModel:k,onSelectCommit:j,onSelectBranch:E,showCommits:I,onToggleShowCommits:O,className:D,style:W,collapsed:H=!1}){var Wt;const X=g.useRef(null),P=g.useRef(null),[K,re]=g.useState(()=>{if(typeof window>"u")return new Set;try{const qe=window.localStorage.getItem(Ty);if(qe){const _t=JSON.parse(qe);if(Array.isArray(_t)){const ke=new Set;for(const ne of _t)typeof ne=="string"&&ke.add(ne);return ke}}}catch{}return new Set(t.map(qe=>qe.path))}),[se,je]=g.useState({}),[Pe,J]=g.useState(()=>new Set),[de,z]=g.useState(()=>new Set),[ce,U]=g.useState(null),Q=x!=null?x:Pe,_e=b!=null?b:de,N=w!=null?w:J,ae=S!=null?S:z,[oe,ge]=g.useState(null),[De,ze]=g.useState(null),ot=qe=>{try{window.localStorage.setItem(Ty,JSON.stringify(Array.from(qe)))}catch{}},ct=qe=>{try{const _t=Object.fromEntries(Object.entries(qe).map(([ke,ne])=>[ke,Array.from(ne)]));window.localStorage.setItem(Ay,JSON.stringify(_t))}catch{}};g.useEffect(()=>{ot(K)},[K]),g.useEffect(()=>{try{const qe=window.localStorage.getItem(Ay);if(!qe)return;const _t=JSON.parse(qe);if(!_t||typeof _t!="object")return;const ke={};for(const[ne,Me]of Object.entries(_t)){if(!Array.isArray(Me))continue;const Xe=new Set;for(const Ue of Me)typeof Ue=="string"&&Xe.add(Ue);ke[ne]=Xe}je(ke)}catch{}},[]),g.useEffect(()=>{ct(se)},[se]);const Ct=(Wt=k==null?void 0:k.defaultCollapsedClumps)!=null?Wt:new Set,Yt=qe=>Q.has(qe)||!Ct.has(qe)&&!_e.has(qe),xt=(qe,_t)=>{const ke=X.current,ne=P.current;if(ke&&ne){const Me=`[data-clump-toggle-id="${_t}"]`,Xe=ke.querySelector(Me);if(Xe){const Ue=Xe.getBoundingClientRect().top-ne.getBoundingClientRect().top;ze({id:_t,topWithinScrollBody:Ue})}else ze(null)}else ze(null);ge(_t),N(Me=>{const Xe=new Set(Me),Ue=Yt(qe);return ae(Ye=>{const nt=new Set(Ye);return Ue?(Xe.delete(qe),nt.add(qe)):(nt.delete(qe),Xe.add(qe)),nt}),Xe})};g.useLayoutEffect(()=>{if(!oe)return;const qe=X.current,_t=P.current;if(!qe||!_t)return;const ke=`[data-clump-toggle-id="${oe}"]`,ne=qe.querySelector(ke);if(ne){if((De==null?void 0:De.id)===oe){const Xe=ne.getBoundingClientRect().top-_t.getBoundingClientRect().top-De.topWithinScrollBody;Number.isFinite(Xe)&&Xe!==0&&(_t.scrollTop+=Xe)}ne.focus({preventScroll:!0}),ge(null),ze(null)}},[Q,_e,oe,De]);const mt=(qe,_t)=>{je(ke=>{var Ue;const ne=(Ue=ke[qe])!=null?Ue:new Set,Me=new Set(ne);Me.has(_t)?Me.delete(_t):Me.add(_t);const Xe={...ke,[qe]:Me};return ct(Xe),Xe})};g.useEffect(()=>{if(ce==null)return;const qe=()=>U(null);return window.addEventListener("pointerdown",qe),()=>window.removeEventListener("pointerdown",qe)},[ce]);const Ke=g.useMemo(()=>{var _t,ke,ne,Me,Xe,Ue,Ye,nt,ft,dt,gt,$t,at,V;const qe=new Map;for(const Z of t){const fe=Kw({branches:Z.branches,mergeNodes:Z.mergeNodes,directCommits:Z.directCommits,unpushedDirectCommits:Z.unpushedDirectCommits,defaultBranch:Z.defaultBranch,branchCommitPreviews:Z.branchCommitPreviews,branchUniqueAheadCounts:Z.branchUniqueAheadCounts,checkedOutRef:Z.checkedOutRef,stashes:Z.stashes,manuallyOpenedClumps:(_t=y[Z.path])!=null?_t:new Set,manuallyClosedClumps:(ke=_[Z.path])!=null?ke:new Set}),be=fe.enrichedBranches.some(et=>et.name===Z.defaultBranch)?fe.enrichedBranches:[{name:Z.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...fe.enrichedBranches],Je=new Map(fe.sharedGridLayoutModel.nodes.map(et=>[et.commit.visualId,et.row])),Ge={};for(const et of fe.sharedGridLayoutModel.allCommits){const Dt=(ne=Ge[et.branchName])!=null?ne:[];Dt.push({fullSha:et.id,sha:et.id.slice(0,7),parentSha:(Me=et.parentSha)!=null?Me:null,message:et.message,author:et.author,date:et.date,kind:(Xe=et.kind)!=null?Xe:"commit"}),Ge[et.branchName]=Dt}for(const et of Object.keys(Ge))Ge[et]=Ge[et].sort((Dt,bt)=>{var _n,vn;const It=new Date(Dt.date).getTime(),yt=new Date(bt.date).getTime();if(It!==yt)return It-yt;const At=(_n=Je.get(`${et}:${Dt.fullSha}`))!=null?_n:Number.MAX_SAFE_INTEGER,an=(vn=Je.get(`${et}:${bt.fullSha}`))!=null?vn:Number.MAX_SAFE_INTEGER;return At!==an?At-an:Dt.fullSha.localeCompare(bt.fullSha)});const Ne=(Ue=fe.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?Ue:new Map,wt=(et,Dt)=>{const bt=Ne.get(Dt);if(!bt)return[];for(const[It,yt]of bt.entries())if(gi(et,It))return Array.from(yt).sort();return[]},He=Qw(be,Z.defaultBranch),Gt=Zw(be,Z.defaultBranch,He),St=new Map(be.map(et=>[et.name,et])),tt=new Map;for(const et of be){const Dt=(nt=(Ye=fe.sharedGridLayoutModel.firstBranchCommitByName.get(et.name))==null?void 0:Ye.parentSha)!=null?nt:null,bt=Dt!=null?Dt:null;tt.set(et.name,bt)}const Ot=(ft=fe.sharedGridLayoutModel.defaultCollapsedClumps)!=null?ft:new Set,Ht=(dt=y[Z.path])!=null?dt:new Set,Zt=(gt=_[Z.path])!=null?gt:new Set,st=et=>Ht.has(et)||!Ot.has(et)&&!Zt.has(et);qe.set(Z.path,{rootBranchNames:Gt,branchByName:St,branchCommitPreviewsFromLayout:Ge,childNamesByParent:He,branchAnchorShaByName:tt,checkedOutBranchName:(at=($t=Z.checkedOutRef)==null?void 0:$t.branchName)!=null?at:null,clusterKeyByCommitId:(V=fe.sharedGridLayoutModel.clusterKeyByCommitId)!=null?V:new Map,getMergeTargetLabels:wt,isGridClusterOpen:st})}return qe},[n,_,y,t]);return l.jsxs("aside",{ref:X,"aria-label":"Dense branch sidebar",className:On("pointer-events-auto relative h-full select-none overflow-hidden",D),style:W,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:l.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:d,"aria-label":"Add Repo",className:"window-no-drag flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:l.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:[l.jsx("path",{d:"M19.5 10V8C19.5 6.89543 18.6046 6 17.5 6H12.5C11.8509 6 11.2193 5.78947 10.7 5.4L10.3 5.1C9.78071 4.71053 9.14911 4.5 8.5 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16.5C3.5 17.6046 4.39543 18.5 5.5 18.5H11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M18 17V14M18 17H15M18 17H21M18 17V20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M3.5 10L11.9211 10L19.5 10",stroke:"currentColor",strokeWidth:"1.5"})]})}),l.jsx("button",{type:"button",onClick:O,className:"window-no-drag shrink-0 rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent",children:I?"Hide Commits":"Show Commits"})]})}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[h&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:h})}),l.jsx("div",{ref:P,className:On("min-h-0 flex-1 space-y-6 overflow-y-auto px-2.5",H?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(qe=>{var Ue,Ye;const _t=qe.path===n,ke=K.has(qe.path),ne=(Ue=qe.treeLoaded)!=null?Ue:qe.branches.length>0,Me=Ke.get(qe.path),Xe=(Ye=se[qe.path])!=null?Ye:Me?Jw(Me.rootBranchNames,Me.childNamesByParent,p,qe.defaultBranch):new Set;return l.jsx("div",{className:On("relative z-0",ke&&Me?"mb-5":"mb-1"),children:l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:On("sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 py-1 transition-colors hover:bg-accent",_t?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[l.jsx("button",{type:"button",onClick:()=>{re(nt=>{const ft=new Set(nt);return ft.has(qe.path)?ft.delete(qe.path):ft.add(qe.path),ot(ft),ft})},"aria-expanded":ke,"aria-label":`${ke?"Collapse":"Expand"} ${qe.name}`,className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(eS,{open:ke})}),l.jsx("button",{type:"button",onClick:()=>{i(qe.path)},className:On("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal",_t?"text-primary":"text-muted-foreground"),children:qe.name}),l.jsxs("div",{className:"relative shrink-0",children:[l.jsx("button",{type:"button","aria-label":`Project actions for ${qe.name}`,"aria-expanded":ce===qe.path,onClick:nt=>{nt.stopPropagation(),U(ft=>ft===qe.path?null:qe.path)},className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(ow,{className:"h-4 w-4 shrink-0"})}),ce===qe.path?l.jsxs("div",{role:"menu",className:"absolute right-0 top-full z-30 mt-1 w-40 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-lg",onClick:nt=>nt.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{U(null),u(qe.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{U(null),c(qe.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",children:"Remove"})]}):null]})]}),ke?ne&&Me?l.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:Me.rootBranchNames.map((nt,ft)=>l.jsx(Am,{branchName:nt,depth:0,isLast:ft===Me.rootBranchNames.length-1,branchByName:Me.branchByName,branchCommitPreviews:Me.branchCommitPreviewsFromLayout,childNamesByParent:Me.childNamesByParent,branchAnchorShaByName:Me.branchAnchorShaByName,expandedBranchNames:Xe,onToggleBranch:dt=>mt(qe.path,dt),checkedOutBranchName:Me.checkedOutBranchName,ancestors:new Set,showCommits:I,getMergeTargetLabels:Me.getMergeTargetLabels,sourceBranchName:nt,clusterKeyByCommitId:Me.clusterKeyByCommitId,isGridClusterOpen:Me.isGridClusterOpen,onToggleGridCluster:xt,onSelectCommit:async dt=>{_t||await i(qe.path),j==null||j(dt)},onSelectBranch:async dt=>{_t||await i(qe.path),E==null||E(dt)}},`${qe.path}:${nt}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},qe.path)})})]})]})}const nS="git-visualizer",Kh="git-visualizer:projects",Dy=12,Ny=1400,sS=180,Ry="git-visualizer:sidebar-width",By="git-visualizer:sidebar-collapsed",Ly="git-visualizer:grid-clumps",Oy=432,zy=280,$y=640;function qa(t){return t==="/"?t:t.replace(/\/+$/,"")}function oS(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function iS(t){return md(t)===nS}function aS(){var Qi,Zi,Yo,Oi;const[t,n]=g.useState(null),[i,a]=g.useState(""),[c,u]=g.useState([]),[d,h]=g.useState({}),[p,y]=g.useState(!1),[_,x]=g.useState([]),[b,w]=g.useState([]),[S,k]=g.useState([]),[j,E]=g.useState([]),[I,O]=g.useState({}),[D,W]=g.useState([]),[H,X]=g.useState("main"),[P,K]=g.useState(null),[re,se]=g.useState([]),[je,Pe]=g.useState(!1),[J,de]=g.useState(""),[z,ce]=g.useState(0),[U,Q]=g.useState(1),[_e,N]=g.useState({}),[ae,oe]=g.useState({}),[ge,De]=g.useState(null),[ze,ot]=g.useState(null),[ct,Ct]=g.useState(null),[Yt,xt]=g.useState(!1),[mt,Ke]=g.useState(!1),[Wt,qe]=g.useState(!1),[_t,ke]=g.useState(null),[ne,Me]=g.useState(!1),[Xe,Ue]=g.useState(!1),[Ye,nt]=g.useState("active"),[ft,dt]=g.useState(null),[gt,$t]=g.useState(null),[at,V]=g.useState(!1),[Z,fe]=g.useState(null),[be,Je]=g.useState(!1),[Ge,Ne]=g.useState(null),[wt,He]=g.useState(null),[Gt,St]=g.useState(!1),[tt,Ot]=g.useState(!1),[Ht,Zt]=g.useState(!1),[st,et]=g.useState(!1),[Dt,bt]=g.useState({}),[It,yt]=g.useState({}),[At,an]=g.useState({}),[_n,vn]=g.useState({}),[is,In]=g.useState({}),[An,Mn]=g.useState([]),[as,cn]=g.useState(!1),[Dn,it]=g.useState(!1),[rs,No]=g.useState(!1),[Kn,js]=g.useState(!1),[Ms,qs]=g.useState(!1),[_s,So]=g.useState("horizontal"),[Io,ao]=g.useState(!1),[un,yi]=g.useState(Oy),[Ds,Ns]=g.useState(!1),[gs,ro]=g.useState({dragging:!1,lastEvent:"idle"}),Qo=g.useRef(null),ys=g.useRef(0),Qn=g.useRef(0),Es=g.useRef(null),gn=g.useRef(Oy),Pn=g.useRef(null),dn=g.useRef(null),Wn=iS(t)||!0,Gi=g.useRef(!1),Zo=g.useRef(!1),li=g.useRef(new Set),_o=g.useRef([]),Jo=g.useRef([]),Ts=g.useRef(null),fs=t!=null?t:"__no-repo__",Nn=(R,F)=>{try{const ee={opened:Object.fromEntries(Object.entries(R).map(([ue,Ve])=>[ue,Array.from(Ve)])),closed:Object.fromEntries(Object.entries(F).map(([ue,Ve])=>[ue,Array.from(Ve)]))};window.localStorage.setItem(Ly,JSON.stringify(ee))}catch{}};g.useEffect(()=>{var R,F;try{const ee=window.localStorage.getItem(Ly);if(!ee)return;const ue=JSON.parse(ee);if(!ue||typeof ue!="object")return;const Ve={},lt={},ht=ue;for(const[Ft,yn]of Object.entries((R=ht.opened)!=null?R:{}))Array.isArray(yn)&&(Ve[Ft]=new Set(yn.filter(As=>typeof As=="string")));for(const[Ft,yn]of Object.entries((F=ht.closed)!=null?F:{}))Array.isArray(yn)&&(lt[Ft]=new Set(yn.filter(As=>typeof As=="string")));N(Ve),oe(lt)}catch{}},[]),g.useEffect(()=>{Nn(_e,ae)},[ae,_e]);const Rs=g.useMemo(()=>{var R;return(R=_e[fs])!=null?R:new Set},[fs,_e]),Hn=g.useMemo(()=>{var R;return(R=ae[fs])!=null?R:new Set},[fs,ae]),ls=g.useCallback(R=>{N(F=>{var lt;const ee=(lt=F[fs])!=null?lt:new Set,ue=typeof R=="function"?R(ee):R,Ve={...F,[fs]:new Set(ue)};return Nn(Ve,ae),Ve})},[fs,ae]),xi=g.useCallback(R=>{oe(F=>{var lt;const ee=(lt=F[fs])!=null?lt:new Set,ue=typeof R=="function"?R(ee):R,Ve={...F,[fs]:new Set(ue)};return Nn(_e,Ve),Ve})},[fs,_e]),Po=g.useMemo(()=>c.map(R=>{var F,ee,ue,Ve,lt,ht,Ft,yn,As,vo,$s,Vt,Rn,hn,he,$e,C,M,B,L,Y,ie,Te,Se,Oe,rt,ut,Et;return{...R,...(F=d[R.path])!=null?F:{},branches:(ue=(ee=d[R.path])==null?void 0:ee.branches)!=null?ue:[],mergeNodes:(lt=(Ve=d[R.path])==null?void 0:Ve.mergeNodes)!=null?lt:[],directCommits:(Ft=(ht=d[R.path])==null?void 0:ht.directCommits)!=null?Ft:[],unpushedDirectCommits:(As=(yn=d[R.path])==null?void 0:yn.unpushedDirectCommits)!=null?As:[],unpushedCommitShasByBranch:($s=(vo=d[R.path])==null?void 0:vo.unpushedCommitShasByBranch)!=null?$s:{},checkedOutRef:(Rn=(Vt=d[R.path])==null?void 0:Vt.checkedOutRef)!=null?Rn:null,worktrees:(he=(hn=d[R.path])==null?void 0:hn.worktrees)!=null?he:[],stashes:(C=($e=d[R.path])==null?void 0:$e.stashes)!=null?C:[],branchCommitPreviews:(B=(M=d[R.path])==null?void 0:M.branchCommitPreviews)!=null?B:{},laneByBranch:(Y=(L=d[R.path])==null?void 0:L.laneByBranch)!=null?Y:{},branchUniqueAheadCounts:(Te=(ie=d[R.path])==null?void 0:ie.branchUniqueAheadCounts)!=null?Te:{},defaultBranch:(rt=(Oe=(Se=d[R.path])==null?void 0:Se.defaultBranch)!=null?Oe:R.branchName)!=null?rt:"main",treeLoaded:(Et=(ut=d[R.path])==null?void 0:ut.loaded)!=null?Et:!1}}),[c,d]);g.useEffect(()=>{try{const R=localStorage.getItem(Kh);if(!R)return;const F=JSON.parse(R);if(!Array.isArray(F))return;const ee=F.filter(ue=>typeof ue=="object"&&ue!==null&&typeof ue.path=="string"&&typeof ue.name=="string"&&typeof ue.lastOpenedAt=="number");u(ee.slice(0,Dy))}catch{u([])}},[]),g.useEffect(()=>{Zo.current||t||c.length!==0&&(Zo.current=!0,Ls(c[0].path))},[c,t]);const qi=g.useMemo(()=>b.reduce((R,F)=>(R[F.targetCommitSha]=F.targetBranch,R),{}),[b]);g.useEffect(()=>{t&&h(R=>{var F,ee;return{...R,[t]:{path:t,name:i||md(t),branches:_,mergeNodes:b,directCommits:S,unpushedDirectCommits:j,mergeTargetBranchByCommitSha:b.reduce((ue,Ve)=>(ue[Ve.targetCommitSha]=Ve.targetBranch,ue),{}),unpushedCommitShasByBranch:I,checkedOutRef:P,worktrees:re,stashes:An,branchCommitPreviews:It,branchParentByName:At,laneByBranch:_n,branchUniqueAheadCounts:is,defaultBranch:H,loaded:!0,cacheSchemaVersion:(ee=(F=R[t])==null?void 0:F.cacheSchemaVersion)!=null?ee:1,updatedAtMs:Date.now()}}})},[t,i,_,b,S,j,qi,I,P,re,An,It,At,_n,is,H]);async function Kt(R,F=!1){var ue;const ee=qa(R);if(ee&&!li.current.has(ee)&&!(!F&&((ue=d[ee])!=null&&ue.loaded))){li.current.add(ee),y(!0);try{const Ve=await we("get_repo_visual_snapshot",{repoPath:ee,forceRefresh:F});h(lt=>({...lt,[ee]:Ve}))}finally{li.current.delete(ee),li.current.size===0&&y(!1)}}}g.useEffect(()=>{c.length!==0&&c.forEach(R=>{Kt(R.path),we("watch_repo",{repoPath:R.path}).catch(console.error)})},[c]),g.useEffect(()=>{let R=!1,F=null;return yc("git-activity",ee=>{if(R)return;const ue=qa(ee.payload.repoPath);!ue||ue===t||Kt(ue,!0)}).then(ee=>{R?ee():F=ee}).catch(console.error),()=>{R=!0,F&&F()}},[t]);function Ks(R){u(F=>{const ee=qa(R.path);if(!ee)return F;const ue={...R,path:ee},lt=(F.some(ht=>ht.path===ee)?F.map(ht=>ht.path===ee?ue:ht):[...F,ue]).slice(-Dy);try{localStorage.setItem(Kh,JSON.stringify(lt))}catch{}return lt})}async function Us(R){const F=qa(R);if(F){ke(null);try{const[ee,ue]=await Promise.all([we("get_repo_info",{repoPath:F}),we("get_default_branch",{repoPath:F}).catch(()=>"main")]);Ks({path:F,name:ee.name,lastOpenedAt:Date.now(),branchName:ue}),await Kt(F,!0)}catch(ee){ke(ee instanceof Error?ee.message:String(ee))}}}function Ho(R){var ee,ue;const F=qa(R);if(F&&(u(Ve=>{const lt=Ve.filter(ht=>ht.path!==F);try{localStorage.setItem(Kh,JSON.stringify(lt))}catch{}return lt}),h(Ve=>{if(!(F in Ve))return Ve;const lt={...Ve};return delete lt[F],lt}),t===F)){const Ve=(ue=(ee=c.find(lt=>lt.path!==F))==null?void 0:ee.path)!=null?ue:null;Ve?Ls(Ve):(n(null),a(""),x([]),w([]),k([]),E([]),O({}),K(null),se([]),Mn([]),yt({}),an({}),vn({}),In({}))}}async function bi(R){const F=qa(R);if(F)try{await we("reveal_in_finder",{path:F})}catch(ee){ke(ee instanceof Error?ee.message:String(ee))}}const Vo=()=>{(async()=>{var R,F;try{const ee=await Gv({directory:!0,multiple:!1,defaultPath:(F=(R=c[0])==null?void 0:R.path)!=null?F:void 0});typeof ee=="string"&&ee&&await Us(ee)}catch(ee){ke(ee instanceof Error?ee.message:String(ee))}})()};async function Qs(R,F){const ue=[];let Ve=0;for(;;){const lt=await we("get_merge_nodes",{repoPath:R,branch:F,page:Ve,perPage:100});if(ue.push(...lt.nodes),!lt.hasMore||lt.nodes.length===0)break;Ve+=1}return ue}async function vi(R,F,ee){const ue=Array.from(new Set([ee,...F.map(ht=>ht.name)].filter(ht=>!!ht)));if(ue.length===0)return[];const Ve=await Promise.all(ue.map(ht=>Qs(R,ht).catch(()=>[]))),lt=new Map;for(const ht of Ve)for(const Ft of ht){const yn=`${Ft.targetCommitSha}:${Ft.targetBranch}`;lt.has(yn)||lt.set(yn,Ft)}return Array.from(lt.values())}const lo=R=>R.map(F=>`${F.name}|${F.headSha}|${F.commitsAhead}|${F.commitsBehind}|${F.unpushedCommits}|${F.remoteSyncStatus}`).join("||"),Sn=R=>R.map(F=>F.fullSha).join("|"),go=R=>{var F,ee;return R?`${(F=R.branchName)!=null?F:""}|${R.headSha}|${(ee=R.parentSha)!=null?ee:""}|${R.hasUncommittedChanges?1:0}`:"__none__"};async function Vn(R,F){const ee=F!=null?F:H,[ue,Ve,lt,ht,Ft,yn]=await Promise.all([we("get_branches",{repoPath:R}),we("get_all_repo_commits",{repoPath:R}),we("get_unpushed_direct_commits",{repoPath:R,branch:ee}).catch(()=>[]),we("get_checked_out_ref",{repoPath:R}).catch(()=>null),we("list_worktrees",{repoPath:R}).catch(()=>[]),we("list_stashes",{repoPath:R}).catch(()=>[])]),As=await vi(R,ue,ee),vo=await Promise.all([ee,...ue.map($s=>$s.name)].map(async $s=>{const Vt=await we("get_branch_unpushed_commit_shas",{repoPath:R,branch:$s}).catch(()=>[]);return[$s,Vt]}));x(ue),w(As),k(Ve),E(lt),O(Object.fromEntries(vo)),K(ht),se(Ft),Mn(yn)}async function Bs(R){const[F,ee,ue]=await Promise.all([we("get_branches",{repoPath:R}).catch(()=>[]),we("get_all_repo_commits",{repoPath:R}).catch(()=>[]),we("get_checked_out_ref",{repoPath:R}).catch(()=>null)]);return lo(F)!==lo(_o.current)||Sn(ee)!==Sn(Jo.current)||go(ue)!==go(Ts.current)}async function co(R){He(null),qe(!0);try{const[F,ee]=await Promise.all([we("get_repo_info",{repoPath:R}),we("get_default_branch",{repoPath:R})]);a(F.name),X(ee),n(R),await Vn(R,ee),hs(R),He({kind:"success",message:`Now targeting worktree at ${R}`})}catch(F){const ee=F instanceof Error?F.message:String(F);He({kind:"error",message:ee}),console.error("Failed to switch worktree:",ee)}finally{qe(!1)}}async function rn(R,F){if(!(!t||je)){Pe(!0),He(null);try{await we("remove_worktree",{repoPath:t,worktreePath:R,force:F}),await Vn(t),He({kind:"success",message:`Removed worktree at ${R}`})}catch(ee){const ue=ee instanceof Error?ee.message:String(ee);He({kind:"error",message:ue}),console.error("Failed to remove worktree:",ue)}finally{Pe(!1)}}}function Ys(R,F){var ee,ue;a(F.name||md(R)),X(F.defaultBranch||"main"),x(F.branches),w(F.mergeNodes),k(F.directCommits),E(F.unpushedDirectCommits),O(F.unpushedCommitShasByBranch),K(F.checkedOutRef),se(F.worktrees),Mn(F.stashes),yt(F.branchCommitPreviews),an((ee=F.branchParentByName)!=null?ee:{}),vn((ue=F.laneByBranch)!=null?ue:{}),In(F.branchUniqueAheadCounts),n(R)}async function Ws(R,F,ee){const ue=ee==null?void 0:ee.forceRefresh,Ve=ee==null?void 0:ee.applyToActiveState;try{const[lt,ht]=await Promise.all([we("get_repo_info",{repoPath:R}),we("get_default_branch",{repoPath:R})]);if(F!==ys.current)return;const Ft=await we("get_repo_visual_snapshot",{repoPath:R,forceRefresh:ue});if(F!==ys.current)return;h(yn=>({...yn,[R]:Ft})),Ve&&(t===R||ys.current),hs(R)}catch(lt){if(F!==ys.current)return;console.error("Background snapshot refresh failed:",lt)}}async function Ls(R){const F=++ys.current,ee=qa(R);if(!ee)return;const ue=d[ee];if(ue!=null&&ue.loaded){ke(null),Ys(ee,ue),Ks({path:ee,name:ue.name||md(ee),lastOpenedAt:Date.now(),branchName:ue.defaultBranch}),qe(!1),Ke(!1),Ws(ee,F,{forceRefresh:!1,applyToActiveState:!1});return}if(Ke(!0),qe(!0),ke(null),await new Promise(Ve=>setTimeout(Ve,15)),F===ys.current)try{const[Ve,lt]=await Promise.all([we("get_repo_info",{repoPath:ee}),we("get_default_branch",{repoPath:ee})]);if(F!==ys.current)return;a(Ve.name),X(lt);const ht=await we("get_repo_visual_snapshot",{repoPath:ee,forceRefresh:!0});if(F!==ys.current)return;h(Ft=>({...Ft,[ee]:ht})),Ys(ee,ht),Ks({path:ee,name:Ve.name,lastOpenedAt:Date.now(),branchName:lt}),qe(!1),Ke(!1),hs(ee)}catch(Ve){if(F!==ys.current)return;console.error("Failed to load repo:",Ve),ke(Ve instanceof Error?Ve.message:String(Ve)),n(null),Ke(!1),qe(!1)}}async function hs(R){const F=++Qn.current;try{if(F!==Qn.current)return;V(!1),Ne(null);const ee=await we("get_github_info",{repoPath:R}),ue=await we("get_github_auth_status");if(F!==Qn.current||(fe(ue),!ue.ghAvailable||!ue.authenticated))return;const Ve=await we("get_open_prs",{owner:ee.owner,repo:ee.repo});if(F!==Qn.current)return;W(Ve),V(!0)}catch(ee){if(F!==Qn.current)return;console.log("GitHub data not available:",ee),Ne(ee instanceof Error?ee.message:String(ee)),V(!1)}}g.useEffect(()=>{let R=null,F=!1;const ee=(()=>{try{return up().label}catch{return null}})(),ue=async lt=>{var Ft;const ht=(Ft=lt==null?void 0:lt.path)==null?void 0:Ft.trim();!ht||F||t!==ht&&await Ls(ht)};return(async()=>{ee==="main"&&(R=await yc("gitviz://open-repo",async ht=>{await ue(ht.payload)}));const lt=await we("take_pending_open_repo");await ue(lt)})(),()=>{F=!0,R&&R()}},[t]),g.useEffect(()=>{_o.current=_},[_]),g.useEffect(()=>{Jo.current=S},[S]),g.useEffect(()=>{Ts.current=P},[P]),g.useEffect(()=>{Gi.current=Ms},[Ms]),g.useEffect(()=>{},[t,H,Wn]),g.useEffect(()=>{if(!t||!H||!Wn)return;we("watch_repo",{repoPath:t}).catch(console.error);let R=!1,F=!1,ee=!1,ue=null;const Ve=async()=>{if(!R){if(Gi.current){F=!0;return}if(ee){F=!0;return}ee=!0;try{if(!await Bs(t)||R)return;await Vn(t,H)}catch(ht){console.warn("Frozen git-activity refresh failed:",ht)}finally{ee=!1,F&&!R&&(F=!1,window.setTimeout(()=>{Ve()},0))}}},lt=()=>{F=!0,Ve()};return yc("git-activity",ht=>{qa(ht.payload.repoPath)===t&&(Kt(t,!0),lt())}).then(ht=>{R?ht():ue=ht}).catch(console.error),()=>{R=!0,ue&&ue()}},[t,H,Wn]);async function Ro(){if(t){Je(!0),Ne(null);try{await we("authenticate_github");const R=await we("get_github_auth_status");fe(R),R.authenticated?await hs(t):R.message&&Ne(R.message)}catch(R){Ne(R instanceof Error?R.message:String(R))}finally{Je(!1)}}}const Zs=new Set(D.map(R=>R.branchName)),Co=14*864e5,yo=Date.now(),Bo=_.filter(R=>R.status==="stale"),En=Bo.filter(R=>Zs.has(R.name)||yo-new Date(R.lastCommitDate).getTime()<=Co),Un=Bo.filter(R=>!Zs.has(R.name)&&yo-new Date(R.lastCommitDate).getTime()>Co),Fn=R=>{var F;return Object.prototype.hasOwnProperty.call(is,R.name)?Math.max(0,(F=is[R.name])!=null?F:0):Math.max(0,R.commitsAhead)};g.useEffect(()=>{bt({}),dn.current=null,Je(!1),fe(null),Ne(null),W([]),He(null)},[t]),g.useEffect(()=>{var yn,As,vo,$s;if(!t||!H){bt({}),yt({}),an({}),vn({}),In({}),dn.current=null;return}const R=_.map(Vt=>{var Rn;return`${Vt.name}:${Vt.headSha}:${(Rn=Vt.parentBranch)!=null?Rn:""}:${Vt.commitsAhead}`}).join("|"),F=b.map(Vt=>{var Rn,hn;return`${Vt.fullSha}:${(hn=(Rn=Vt.parentShas)==null?void 0:Rn[1])!=null?hn:""}`}).join("|"),ee=`${t}|${H}|${R}|${F}`;if(dn.current===ee)return;dn.current=ee;const ue={},Ve={};for(const Vt of _){if(Vt.name===H)continue;const Rn=S.filter(hn=>hn.branch===Vt.name).map(hn=>{var he;return{fullSha:hn.fullSha,sha:hn.sha,parentSha:(he=hn.parentSha)!=null?he:null,message:hn.message,author:hn.author,date:hn.date,kind:"commit"}});ue[Vt.name]=Rn,Ve[Vt.name]=Rn.length}const lt=new Map;for(const Vt of S)lt.set(Vt.fullSha,Vt.branch);const ht=Vt=>{if(!Vt)return null;const Rn=lt.get(Vt);if(Rn)return Rn;for(const[hn,he]of lt.entries())if(hn.startsWith(Vt)||Vt.startsWith(hn))return he;return null},Ft={[H]:null};for(const Vt of _){if(Vt.name===H){Ft[Vt.name]=null;continue}const Rn=S.filter(C=>C.branch===Vt.name),hn=new Set(Rn.map(C=>C.fullSha)),he=(As=(yn=Rn.filter(C=>{var B;const M=(B=C.parentSha)!=null?B:null;return!M||!hn.has(M)}).sort((C,M)=>{const B=new Date(C.date).getTime()-new Date(M.date).getTime();return B!==0?B:C.fullSha.localeCompare(M.fullSha)})[0])==null?void 0:yn.parentSha)!=null?As:null,$e=ht(he);Ft[Vt.name]=($s=(vo=$e!=null?$e:At[Vt.name])!=null?vo:Vt.parentBranch)!=null?$s:null}bt({}),yt(ue),an(Ft),vn(Vt=>{const Rn={};for(const hn of _){const he=Vt[hn.name];he!=null&&Number.isFinite(he)&&(Rn[hn.name]=he)}return Rn}),In(Ve)},[t,H,_,b,S,At]),g.useEffect(()=>{if(!wt){St(!1);return}St(!0);const R=window.setTimeout(()=>{St(!1)},Ny),F=window.setTimeout(()=>{He(null)},Ny+sS);return()=>{window.clearTimeout(R),window.clearTimeout(F)}},[wt]),g.useEffect(()=>{if(!t||_.length===0)return;const R=ue=>new Promise(Ve=>setTimeout(Ve,ue));async function F(){const Ve=`${await we("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Ve}`),await R(800),await we("screenshot",{path:`${Ve}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Ve}`)}const ee=ue=>{if((ue.metaKey||ue.ctrlKey)&&!ue.shiftKey&&!ue.altKey&&ue.key.toLowerCase()==="b"){ue.preventDefault(),Ns(Ve=>!Ve);return}(ue.metaKey||ue.ctrlKey)&&ue.shiftKey&&ue.key==="S"&&(ue.preventDefault(),F())};return window.addEventListener("keydown",ee),()=>window.removeEventListener("keydown",ee)},[t,i,_]);function ko(){Ue(!0),setTimeout(()=>{Me(!1),Ue(!1),nt("active"),$t(null)},100)}async function uo(R){if(!t)return;He(null);const F=/^STASH:(\d+)$/.exec(R.commitSha);if(F){try{const ee=parseInt(F[1],10),ue=await we("apply_stash_restore",{repoPath:t,stashIndex:ee});K(ue),await Vn(t);const Ve=`Stash ${ee+1}`,lt=ue.branchName?` on branch ${ue.branchName}`:" at the stash base (detached HEAD)";He({kind:"success",message:`Restored ${Ve}${lt}; stash applied and dropped (uncommitted changes).`})}catch(ee){const ue=ee instanceof Error?ee.message:String(ee);He({kind:"error",message:ue}),console.error("Failed to apply stash:",ue)}return}if(R.branchName){const ee=(Ve,lt)=>{const ht=Ve.replace(/\\/g,"/").replace(/\/+$/,""),Ft=lt.replace(/\\/g,"/").replace(/\/+$/,"");return ht===Ft||ht.toLowerCase()===Ft.toLowerCase()},ue=re.find(Ve=>Ve.pathExists===!1||Ve.isCurrent||t&&ee(Ve.path,t)?!1:Ve.branchName===R.branchName);if(ue){await co(ue.path);return}}try{let ee="";(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await we("stash_push",{repoPath:t,includeUntracked:!0}),ee="Stashed local changes (including untracked), then ",await Vn(t));const Ve=R.branchName?await we("checkout_branch",{repoPath:t,branchName:R.branchName}):await we("checkout_ref",{repoPath:t,refName:R.commitSha}),lt=await we("get_checked_out_ref",{repoPath:t}).catch(()=>Ve);K(lt),await Vn(t);const ht=lt.branchName?lt.branchName:`${lt.headSha.slice(0,7)} (detached)`;He({kind:"success",message:`${ee}Checked out ${ht}`})}catch(ee){const ue=ee instanceof Error?ee.message:String(ee);He({kind:"error",message:ue}),console.error("Failed to checkout commit:",ue)}}async function Js(){if(!(!t||as)){He(null),cn(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){He({kind:"error",message:"No local changes to stash."});return}await we("stash_push",{repoPath:t,includeUntracked:!0}),await Vn(t),He({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(R){const F=R instanceof Error?R.message:String(R);He({kind:"error",message:F}),console.error("Failed to stash:",F)}finally{cn(!1)}}}async function ei(R){if(!t||Dn)return!1;const F=R.trim();if(!F)return He({kind:"error",message:"Enter a commit message."}),!1;He(null),it(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return He({kind:"error",message:"No local changes to commit."}),!1;const ue=await we("commit_working_tree",{repoPath:t,message:F});return K(ue),await Vn(t),He({kind:"success",message:"Committed local changes."}),!0}catch(ee){const ue=ee instanceof Error?ee.message:String(ee);return He({kind:"error",message:ue}),console.error("Failed to commit:",ue),!1}finally{it(!1)}}async function xo(){if(!t||rs)return!1;He(null),No(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return He({kind:"error",message:"No local changes to stage."}),!1;const F=await we("stage_working_tree",{repoPath:t});return K(F),await Vn(t),He({kind:"success",message:"Staged all changes."}),!0}catch(R){const F=R instanceof Error?R.message:String(R);return He({kind:"error",message:F}),console.error("Failed to stage:",F),!1}finally{No(!1)}}async function Cs(R,F){if(!(!t||Kn)){js(!0),He(null);try{const ee=/^STASH:(\d+)$/.exec(R);let ue;if(ee){const Ve=parseInt(ee[1],10);ue=await we("move_stash_to_new_branch",{repoPath:t,stashIndex:Ve,branchName:F})}else ue=await we("create_branch_from_uncommitted",{repoPath:t,branchName:F});K(ue),await Vn(t),He({kind:"success",message:`Moved to new branch "${F}"`})}catch(ee){const ue=ee instanceof Error?ee.message:String(ee);He({kind:"error",message:ue}),console.error("Failed to create branch from node:",ue)}finally{js(!1)}}}async function Os(R){if(!(!t||Kn)){js(!0),He(null);try{const F=await we("create_root_branch",{repoPath:t,branchName:R});K(F),await Vn(t),He({kind:"success",message:`Created new root branch "${R}"`})}catch(F){const ee=F instanceof Error?F.message:String(F);He({kind:"error",message:ee}),console.error("Failed to create root branch:",ee)}finally{js(!1)}}}async function Uo(R,F){if(!t)return;const ee=Array.from(new Set(R.filter(ue=>!!ue&&ue!==F)));if(ee.length!==0){He(null),Ot(!0);try{let ue=null;for(const Ve of ee)ue=await we("merge_ref_into_branch",{repoPath:t,sourceRef:Ve,targetBranch:F});await Vn(t),ue&&K(ue),He({kind:"success",message:ee.length===1?`Merged ${ee[0].slice(0,7)} into ${F}`:`Merged ${ee.length} commits into ${F}`})}catch(ue){const Ve=ue instanceof Error?ue.message:String(ue);He({kind:"error",message:Ve}),console.error("Failed to merge refs into branch:",Ve)}finally{Ot(!1)}}}async function jo(){if(!(!t||Ht)){He(null),Zt(!0);try{const R=await we("push_all_unpushed_branches",{repoPath:t});await Vn(t),He({kind:"success",message:R.length>0?R.length===1?`Pushed ${R[0].branchName}`:`Pushed ${R.length} branches`:"Everything local is already pushed."})}catch(R){const F=R instanceof Error?R.message:String(R);He({kind:"error",message:F}),console.error("Failed to push all branches:",F)}finally{Zt(!1)}}}async function bo(){if(!(!t||Ht)){He(null),Zt(!0);try{const R=await we("push_current_branch",{repoPath:t});await Vn(t),He({kind:"success",message:`Pushed ${R.branchName}`})}catch(R){const F=R instanceof Error?R.message:String(R);He({kind:"error",message:F}),console.error("Failed to push current branch:",F)}finally{Zt(!1)}}}async function T(R){var ee;if(!t||Ht)return;const F=Array.from(new Map(R.filter(ue=>ue.branchName&&ue.targetSha).map(ue=>[ue.branchName,ue])).values());if(F.length!==0){He(null),Zt(!0);try{for(const ue of F)await we("push_branch",{repoPath:t,branchName:ue.branchName,targetSha:ue.targetSha});await Vn(t),He({kind:"success",message:F.length===1?`Pushed ${F[0].branchName} through ${(ee=F[0].targetSha)==null?void 0:ee.slice(0,7)}`:`Pushed ${F.length} selected commit ranges`})}catch(ue){const Ve=ue instanceof Error?ue.message:String(ue);He({kind:"error",message:Ve}),console.error("Failed to push selected commits:",Ve)}finally{Zt(!1)}}}async function G(R){var lt;if(!t||st)return;const F=Array.from(new Set(R.branchNames.filter(ht=>ht&&ht!==H))),ee=!!R.discardUncommittedChanges,ue=(lt=R.stashIndices)!=null?lt:[],Ve=Array.from(new Set(ue)).sort((ht,Ft)=>Ft-ht);if(!(F.length===0&&!ee&&Ve.length===0)){He(null),et(!0);try{for(const yn of Ve)await we("stash_drop",{repoPath:t,stashIndex:yn});const ht=F.length>0||ee?await we("delete_selected_elements",{repoPath:t,branchNames:F,discardUncommittedChanges:ee}):{deletedBranches:[],discardedUncommittedChanges:!1};await Vn(t);const Ft=[];Ve.length>0&&Ft.push(Ve.length===1?`removed stash ${Ve[0]+1}`:`removed ${Ve.length} stashes`),ht.discardedUncommittedChanges&&Ft.push("discarded local uncommitted changes"),ht.deletedBranches.length>0&&Ft.push(ht.deletedBranches.length===1?`deleted ${ht.deletedBranches[0]}`:`deleted ${ht.deletedBranches.length} branches`),He({kind:"success",message:Ft.length>0?Ft.join(" and "):"Nothing to delete."})}catch(ht){const Ft=ht instanceof Error?ht.message:String(ht);He({kind:"error",message:Ft}),console.error("Failed to delete selected elements:",Ft)}finally{et(!1)}}}function xe(R){$t(R),dt(F=>{var ee;return{branch:R,seq:((ee=F==null?void 0:F.seq)!=null?ee:0)+1}})}function Ce(R){R&&(Ct(R),ce(F=>F+1))}function Qe(R){R&&(de(R),ce(F=>F+1))}g.useEffect(()=>{var ee;const R=P!=null&&P.hasUncommittedChanges?"WORKING_TREE":(ee=P==null?void 0:P.headSha)!=null?ee:null;if(!R)return;const F=`${t!=null?t:"__no-repo__"}|${_s}|${R}`;Qo.current!==F&&(Qo.current=F,Ct(R),ce(ue=>ue+1))},[P==null?void 0:P.hasUncommittedChanges,P==null?void 0:P.headSha,_s,t]),g.useEffect(()=>{Qo.current=null},[t]);const{enrichedBranches:Ze,enrichedBranchCommitPreviews:Nt,enrichedBranchUniqueAheadCounts:We,enrichedDirectCommits:Bt}=g.useMemo(()=>{var B,L,Y,ie,Te;const R=Gx(An,_,S,It,is,H,(B=P==null?void 0:P.hasUncommittedChanges)!=null?B:!1);let F=R.branches,ee=R.directCommits,ue=R.branchCommitPreviews,Ve=R.branchUniqueAheadCounts;if(!(P!=null&&P.hasUncommittedChanges))return{enrichedBranches:F,enrichedDirectCommits:ee,enrichedBranchCommitPreviews:ue,enrichedBranchUniqueAheadCounts:Ve};const lt=P.headSha||P.parentSha||null,ht=(Y=(L=ee[0])==null?void 0:L.fullSha)!=null?Y:null,Ft=(Se,Oe)=>!Se||!Oe?!1:Se===Oe||Se.startsWith(Oe)||Oe.startsWith(Se),yn=[{name:H,headSha:ht!=null?ht:"",isDefault:!0},...F.map(Se=>({name:Se.name,headSha:Se.headSha,isDefault:!1}))],As=P.branchName?yn.find(Se=>Se.name===P.branchName):void 0,vo=lt?yn.filter(Se=>Ft(Se.headSha,lt)):[],$s=(ie=As!=null?As:vo.find(Se=>Se.isDefault))!=null?ie:vo[0],Vt=$s&&!$s.isDefault?F.find(Se=>Se.name===$s.name):void 0,Rn=(()=>{var Oe;if(!lt)return null;const Se=ee.find(rt=>Ft(rt.fullSha,lt)||Ft(rt.sha,lt));if(Se!=null&&Se.date)return Se.date;if(Vt){const rt=((Oe=ue[Vt.name])!=null?Oe:[]).find(ut=>Ft(ut.fullSha,lt)||Ft(ut.sha,lt));if(rt!=null&&rt.date)return rt.date}return null})(),hn=Rn?new Date(Rn).getTime():Number.NaN,he=Date.now(),$e=Number.isFinite(hn)?Math.max(he,hn+1):he,C=new Date($e).toISOString(),M={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:lt,message:"Local uncommitted changes",author:"You",date:C,kind:"uncommitted"};return Vt?{enrichedBranches:F.map(Oe=>Oe.name===Vt.name?{...Oe,commitsAhead:Oe.commitsAhead+1,unpushedCommits:Oe.unpushedCommits+1,lastCommitDate:C,headSha:"WORKING_TREE"}:Oe),enrichedDirectCommits:ee,enrichedBranchCommitPreviews:{...ue,[Vt.name]:[M,...ue[Vt.name]||[]]},enrichedBranchUniqueAheadCounts:{...Ve,[Vt.name]:Math.max(0,(Te=Object.prototype.hasOwnProperty.call(Ve,Vt.name)?Ve[Vt.name]:Vt.commitsAhead)!=null?Te:0)+1}}:{enrichedBranches:F,enrichedBranchCommitPreviews:{...ue,[H]:[M,...ue[H]||[]]},enrichedBranchUniqueAheadCounts:{...Ve},enrichedDirectCommits:ee}},[_,It,is,P,H,S,An]),zt=g.useMemo(()=>{const R={...At};return R[H]=null,R},[At,H,Ze]),tn=g.useMemo(()=>{var R;return(R=gw(Ze,H,zt,_n))!=null?R:dp(Ze,H,Nt,zt)},[Ze,H,Nt,zt,_n]),ln=g.useMemo(()=>Mc({lanes:tn,branches:Ze,mergeNodes:b,directCommits:Bt,unpushedDirectCommits:j,defaultBranch:H,branchCommitPreviews:Nt,branchParentByName:zt,branchUniqueAheadCounts:We,manuallyOpenedClumps:Rs,manuallyClosedClumps:Hn,isDebugOpen:!1,gridSearchQuery:J,gridFocusSha:ct,checkedOutRef:P!=null?P:null,orientation:_s}),[tn,Ze,b,Bt,j,H,Nt,zt,We,Rs,Hn,J,ct,(Qi=P==null?void 0:P.headSha)!=null?Qi:null,(Zi=P==null?void 0:P.branchName)!=null?Zi:null,_s]),nn=g.useMemo(()=>{var R;return ct&&(R=ln.clusterKeyByCommitId.get(ct))!=null?R:null},[ln.clusterKeyByCommitId,ct]),Cn=g.useMemo(()=>{if(!nn||Hn.has(nn))return Rs;const R=new Set(Rs);return R.add(nn),R},[Hn,Rs,nn]),kn=g.useMemo(()=>{if(!nn)return Hn;const R=new Set(Hn);return R.delete(nn),R},[Hn,nn]),zs=g.useMemo(()=>Mc({lanes:tn,branches:Ze,mergeNodes:b,directCommits:Bt,unpushedDirectCommits:j,defaultBranch:H,branchCommitPreviews:Nt,branchParentByName:zt,branchUniqueAheadCounts:We,manuallyOpenedClumps:Cn,manuallyClosedClumps:kn,isDebugOpen:!1,gridSearchQuery:J,gridFocusSha:ct,checkedOutRef:P!=null?P:null,orientation:_s}),[tn,Ze,b,Bt,j,H,Nt,zt,We,Cn,kn,J,ct,(Yo=P==null?void 0:P.headSha)!=null?Yo:null,(Oi=P==null?void 0:P.branchName)!=null?Oi:null,_s]);g.useEffect(()=>{try{const R=window.localStorage.getItem(Ry);if(R){const ee=Number(R);Number.isFinite(ee)&&yi(Math.min($y,Math.max(zy,ee)))}const F=window.localStorage.getItem(By);F!=null&&Ns(F==="true")}catch{}},[]),g.useEffect(()=>{gn.current=un},[un]),g.useEffect(()=>{const R=Pn.current;R&&(R.style.width=Ds?"0px":`${un}px`)},[un,Ds]),g.useEffect(()=>{try{window.localStorage.setItem(By,String(Ds))}catch{}},[Ds]);const fo=R=>{const F=Es.current;if(!F)return;const ee=F.startWidth+(R-F.startX);F.pendingWidth=Math.min($y,Math.max(zy,ee));const ue=Pn.current;ue&&(ue.style.width=`${F.pendingWidth}px`)},ci=(R,F)=>{const ee=Es.current;if(ee&&!(F!=null&&ee.pointerId!==F)){Es.current=null,ro({dragging:!1,lastEvent:R}),document.body.style.cursor="",document.body.style.userSelect="",yi(ee.pendingWidth);try{window.localStorage.setItem(Ry,String(ee.pendingWidth))}catch{}}},Li=R=>{R.button===0&&(R.preventDefault(),ro({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:R.pointerId,clientX:R.clientX,width:gn.current}),Es.current={startX:R.clientX,startWidth:gn.current,pendingWidth:gn.current,pointerId:R.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",R.currentTarget.setPointerCapture(R.pointerId))},Ki=R=>{const F=Es.current;!F||F.pointerId!==R.pointerId||(gs.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:R.clientX}),ro(ee=>ee.dragging?{dragging:!0,lastEvent:"move"}:ee),fo(R.clientX))},Lo=R=>{if(Es.current){console.debug("[sidebar-resize] pointerup",{pointerId:R.pointerId});try{R.currentTarget.releasePointerCapture(R.pointerId)}catch{}ci("pointerup",R.pointerId)}},or=R=>{if(Es.current){console.debug("[sidebar-resize] pointercancel",{pointerId:R.pointerId});try{R.currentTarget.releasePointerCapture(R.pointerId)}catch{}ci("pointercancel",R.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:Pn,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:Ds?64:un},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[90] inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":Ds?"Open sidebar":"Collapse sidebar",onClick:()=>Ns(R=>!R),children:Ds?l.jsx(lw,{className:"h-4 w-4 shrink-0"}):l.jsx(aw,{className:"h-4 w-4 shrink-0"})}),l.jsx(tS,{className:oS("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:Ds,projects:Po,activeProjectPath:t,onSelectProject:Ls,onAddProject:Vo,onRemoveProject:Ho,onRevealProjectInFinder:bi,projectLoading:mt||p,projectError:_t,checkedOutRef:P,showCommits:Yt,onToggleShowCommits:()=>xt(R=>!R),manuallyOpenedClumpsByProject:_e,manuallyClosedClumpsByProject:ae,manuallyOpenedClumps:Cn,manuallyClosedClumps:kn,setManuallyOpenedClumps:ls,setManuallyClosedClumps:xi,gridLayoutModel:zs,onSelectCommit:Ce,onSelectBranch:Qe}),Ds?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Li,onPointerMove:Ki,onPointerUp:Lo,onPointerCancel:or,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(Xw,{branches:Ze,mergeNodes:b,directCommits:Bt,unpushedDirectCommits:j,unpushedCommitShasByBranch:I,defaultBranch:H,branchCommitPreviews:Nt,branchParentByName:zt,branchUniqueAheadCounts:We,gridSearchQuery:J,gridSearchJumpToken:z,gridSearchJumpDirection:U,gridFocusSha:ct,onGridSearchResultCountChange:De,onGridSearchResultIndexChange:ot,onGridSearchFocusChange:Ct,checkedOutRef:P,onCommitClick:uo,onMergeRefsIntoBranch:Uo,mergeInProgress:tt,onPushAllBranches:jo,onPushCurrentBranch:bo,onPushCommitTargets:T,pushInProgress:Ht,onDeleteSelection:G,deleteInProgress:st,worktrees:re,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:rn,removeWorktreeInProgress:je,onSwitchToWorktree:co,onStashLocalChanges:Js,stashInProgress:as,stashDisabled:!1,onCommitLocalChanges:ei,commitInProgress:Dn,commitDisabled:!1,onStageAllChanges:xo,stageInProgress:rs,onCreateBranchFromNode:Cs,onCreateRootBranch:Os,createBranchFromNodeInProgress:Kn,isDebugOpen:Io,onDebugClose:()=>ao(!1),onInteractionChange:qs,manuallyOpenedClumps:Cn,manuallyClosedClumps:kn,setManuallyOpenedClumps:ls,setManuallyClosedClumps:xi,layoutModel:zs,orientation:_s,gridHudProps:{githubAuthStatus:Z,githubAuthLoading:be,onGitHubAuthSetup:Ro,gridSearchQuery:J,setGridSearchQuery:de,gridSearchResultCount:ge,gridSearchResultIndex:ze,setGridSearchJumpDirection:Q,setGridSearchJumpToken:ce,mapGridOrientation:_s,setMapGridOrientation:So,setIsGridDebugOpen:ao,githubAuthMessage:Ge,commitSwitchFeedback:wt,isCommitSwitchFeedbackVisible:Gt}})]}),ne&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${Xe?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:ko,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>nt("active"),className:`text-xs font-medium transition-colors ${Ye==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[En.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>nt("inactive"),className:`text-xs font-medium transition-colors ${Ye==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Un.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Ye==="active"?En:Un).map(R=>{const F=(gt==null?void 0:gt.name)===R.name,ee=Fn(R);return l.jsxs("button",{onClick:()=>xe(R),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${F?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:R.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[ee>0&&`${ee} ahead`,ee>0&&R.commitsBehind>0&&", ",R.commitsBehind>0&&`${R.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},R.name)})})]})]})})})}var Bc=Lx(),rS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,lS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=rS}var ds=lS,cS=`.icon-transitions-module__iconState___uqK9J {
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
}`,uS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=cS}var ss=uS,dS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),fS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),hS=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),mS=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ss.iconState} ${n?ss.hiddenScaled:ss.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ss.iconState} ${n?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),pS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ss.iconStateFast} ${i?ss.visibleScaled:u?ss.sending:ss.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ss.iconStateFast} ${a?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconStateFast} ${c?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},_S=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFade} ${n?ss.visible:ss.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconFade} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),gS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFadeFast} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ss.iconFadeFast} ${n?ss.visible:ss.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),yS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),xS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),qx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),bS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),vS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),wS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),SS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),CS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),kS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),jS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Kx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Qh=Kx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Zh="__agentation_freeze";function MS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Zh]||(t[Zh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Zh]}var fn=MS();typeof window<"u"&&!fn.installed&&(fn.origSetTimeout=window.setTimeout.bind(window),fn.origSetInterval=window.setInterval.bind(window),fn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?fn.origSetTimeout(t,n):fn.origSetTimeout((...a)=>{fn.frozen?fn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?fn.origSetInterval(t,n):fn.origSetInterval((...a)=>{fn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>fn.origRAF(n=>{fn.frozen?fn.frozenRAFQueue.push(t):t(n)}),fn.installed=!0);var Ut=fn.origSetTimeout,ES=fn.origSetInterval,ul=fn.origRAF;function TS(t){return t?Kx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function AS(){if(typeof document>"u"||fn.frozen)return;fn.frozen=!0,fn.frozenTimeoutQueue=[],fn.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Qh},
    *${Qh}::before,
    *${Qh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),fn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;TS(i)||(n.pause(),fn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Iy(){var i;if(typeof document>"u"||!fn.frozen)return;fn.frozen=!1;const t=fn.frozenTimeoutQueue;fn.frozenTimeoutQueue=[];for(const a of t)fn.origSetTimeout(()=>{if(fn.frozen){fn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=fn.frozenRAFQueue;fn.frozenRAFQueue=[];for(const a of n)fn.origRAF(c=>{if(fn.frozen){fn.frozenRAFQueue.push(a);return}a(c)});for(const a of fn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}fn.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Jh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=g.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},k){const[j,E]=g.useState(u),[I,O]=g.useState(!1),[D,W]=g.useState("initial"),[H,X]=g.useState(!1),[P,K]=g.useState(!1),re=g.useRef(null),se=g.useRef(null),je=g.useRef(null),Pe=g.useRef(null);g.useEffect(()=>{b&&D!=="exit"&&W("exit")},[b,D]),g.useEffect(()=>{Ut(()=>{W("enter")},0);const Q=Ut(()=>{W("entered")},200),_e=Ut(()=>{const N=re.current;N&&(Jh(N),N.selectionStart=N.selectionEnd=N.value.length,N.scrollTop=N.scrollHeight)},50);return()=>{clearTimeout(Q),clearTimeout(_e),je.current&&clearTimeout(je.current),Pe.current&&clearTimeout(Pe.current)}},[]);const J=g.useCallback(()=>{Pe.current&&clearTimeout(Pe.current),O(!0),Pe.current=Ut(()=>{O(!1),Jh(re.current)},250)},[]);g.useImperativeHandle(k,()=>({shake:J}),[J]);const de=g.useCallback(()=>{W("exit"),je.current=Ut(()=>{p()},150)},[p]),z=g.useCallback(()=>{j.trim()&&h(j.trim())},[j,h]),ce=g.useCallback(Q=>{Q.stopPropagation(),!Q.nativeEvent.isComposing&&(Q.key==="Enter"&&!Q.shiftKey&&(Q.preventDefault(),z()),Q.key==="Escape"&&de())},[z,de]),U=[ds.popup,w?ds.light:"",D==="enter"?ds.enter:"",D==="entered"?ds.entered:"",D==="exit"?ds.exit:"",I?ds.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:se,className:U,"data-annotation-popup":!0,style:_,onClick:Q=>Q.stopPropagation(),children:[l.jsxs("div",{className:ds.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:ds.headerToggle,onClick:()=>{const Q=P;K(!P),Q&&Ut(()=>Jh(re.current),0)},type:"button",children:[l.jsx("svg",{className:`${ds.chevron} ${P?ds.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ds.element,children:n})]}):l.jsx("span",{className:ds.element,children:n}),i&&l.jsx("span",{className:ds.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${ds.stylesWrapper} ${P?ds.expanded:""}`,children:l.jsx("div",{className:ds.stylesInner,children:l.jsx("div",{className:ds.stylesBlock,children:Object.entries(S).map(([Q,_e])=>l.jsxs("div",{className:ds.styleLine,children:[l.jsx("span",{className:ds.styleProperty,children:Q.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ds.styleValue,children:_e}),";"]},Q))})})}),a&&l.jsxs("div",{className:ds.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:re,className:ds.textarea,style:{borderColor:H?x:void 0},placeholder:c,value:j,onChange:Q=>E(Q.target.value),onFocus:()=>X(!0),onBlur:()=>X(!1),rows:2,onKeyDown:ce}),l.jsxs("div",{className:ds.actions,children:[y&&l.jsx("div",{className:ds.deleteWrapper,children:l.jsx("button",{className:ds.deleteButton,onClick:y,type:"button",children:l.jsx(CS,{size:22})})}),l.jsx("button",{className:ds.cancel,onClick:de,children:"Cancel"}),l.jsx("button",{className:ds.submit,style:{backgroundColor:x,opacity:j.trim()?1:.4},onClick:z,disabled:!j.trim(),children:d})]})]})}),DS=({content:t,children:n,...i})=>{const[a,c]=g.useState(!1),[u,d]=g.useState(!1),[h,p]=g.useState({top:0,right:0}),y=g.useRef(null),_=g.useRef(null),x=g.useRef(null),b=()=>{if(y.current){const k=y.current.getBoundingClientRect();p({top:k.top+k.height/2,right:window.innerWidth-k.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Ut(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Ut(()=>{d(!1)},150)};return g.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Bc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},NS=`.styles-module__tooltip___mcXL2 {
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
}`,RS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=NS}var Py=RS,Mr=({content:t})=>l.jsx(DS,{className:Py.tooltip,content:t,children:l.jsx(hS,{className:Py.tooltipIcon})}),kt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Qx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...kt.navigation},{type:"header",label:"Header",...kt.header},{type:"hero",label:"Hero",...kt.hero},{type:"section",label:"Section",...kt.section},{type:"sidebar",label:"Sidebar",...kt.sidebar},{type:"footer",label:"Footer",...kt.footer},{type:"modal",label:"Modal",...kt.modal},{type:"banner",label:"Banner",...kt.banner},{type:"drawer",label:"Drawer",...kt.drawer},{type:"popover",label:"Popover",...kt.popover},{type:"divider",label:"Divider",...kt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...kt.card},{type:"text",label:"Text",...kt.text},{type:"image",label:"Image",...kt.image},{type:"video",label:"Video",...kt.video},{type:"table",label:"Table",...kt.table},{type:"grid",label:"Grid",...kt.grid},{type:"list",label:"List",...kt.list},{type:"chart",label:"Chart",...kt.chart},{type:"codeBlock",label:"Code Block",...kt.codeBlock},{type:"map",label:"Map",...kt.map},{type:"timeline",label:"Timeline",...kt.timeline},{type:"calendar",label:"Calendar",...kt.calendar},{type:"accordion",label:"Accordion",...kt.accordion},{type:"carousel",label:"Carousel",...kt.carousel},{type:"logo",label:"Logo",...kt.logo},{type:"faq",label:"FAQ",...kt.faq},{type:"gallery",label:"Gallery",...kt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...kt.button},{type:"input",label:"Input",...kt.input},{type:"search",label:"Search",...kt.search},{type:"form",label:"Form",...kt.form},{type:"tabs",label:"Tabs",...kt.tabs},{type:"dropdown",label:"Dropdown",...kt.dropdown},{type:"toggle",label:"Toggle",...kt.toggle},{type:"stepper",label:"Stepper",...kt.stepper},{type:"rating",label:"Rating",...kt.rating},{type:"fileUpload",label:"File Upload",...kt.fileUpload},{type:"checkbox",label:"Checkbox",...kt.checkbox},{type:"radio",label:"Radio",...kt.radio},{type:"slider",label:"Slider",...kt.slider},{type:"datePicker",label:"Date Picker",...kt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...kt.avatar},{type:"badge",label:"Badge",...kt.badge},{type:"tag",label:"Tag",...kt.tag},{type:"breadcrumb",label:"Breadcrumb",...kt.breadcrumb},{type:"pagination",label:"Pagination",...kt.pagination},{type:"progress",label:"Progress",...kt.progress},{type:"alert",label:"Alert",...kt.alert},{type:"toast",label:"Toast",...kt.toast},{type:"notification",label:"Notification",...kt.notification},{type:"tooltip",label:"Tooltip",...kt.tooltip},{type:"stat",label:"Stat",...kt.stat},{type:"skeleton",label:"Skeleton",...kt.skeleton},{type:"chip",label:"Chip",...kt.chip},{type:"icon",label:"Icon",...kt.icon},{type:"spinner",label:"Spinner",...kt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...kt.pricing},{type:"testimonial",label:"Testimonial",...kt.testimonial},{type:"cta",label:"CTA",...kt.cta},{type:"productCard",label:"Product Card",...kt.productCard},{type:"profile",label:"Profile",...kt.profile},{type:"feature",label:"Feature",...kt.feature},{type:"team",label:"Team",...kt.team},{type:"login",label:"Login",...kt.login},{type:"contact",label:"Contact",...kt.contact}]}],Fi={};for(const t of Qx)for(const n of t.items)Fi[n.type]=n;function Ie({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function qn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Ko({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function BS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(qn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Ie,{w:t*.06}),l.jsx(Ie,{w:t*.07}),l.jsx(Ie,{w:t*.05}),l.jsx(Ie,{w:t*.06})]}),l.jsx(qn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function LS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ie,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ie,{w:t*.6}),l.jsx(Ie,{w:t*.4}),l.jsx(qn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function OS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ie,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(qn,{w:10,h:10,radius:2}),l.jsx(Ie,{w:t*(.4+c*17%30/100)})]},c))]})}function zS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"70%",h:2}),l.jsx(Ie,{w:"60%",h:2})]},c))})}function $S({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"90%"}),l.jsx(Ie,{w:"70%"}),l.jsx(Ie,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(qn,{w:70,h:26,radius:4}),l.jsx(qn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function IS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:4,strong:!0}),l.jsx(Ie,{w:"95%",h:2}),l.jsx(Ie,{w:"85%",h:2}),l.jsx(Ie,{w:"50%",h:2})]})]})}function PS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ie,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ie,{w:`${70+u*13%25}%`,h:2},u))]})}function HS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function VS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function US({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Ko,{size:8}),l.jsx(Ie,{w:`${55+c*17%35}%`,h:2})]},c))})}function YS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ie,{w:Math.max(20,t*.5),h:3,strong:!0})})}function WS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ie,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ie,{w:"40%",h:2})})]})}function FS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:60+c*17%30,h:2}),l.jsx(qn,{w:"100%",h:28,radius:4})]},c)),l.jsx(qn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function XS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ie,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"65%",h:2}),l.jsx(Ie,{w:"75%",h:2})]})]})}function GS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function qS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0})})}function KS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ie,{w:t*.35})]})}function QS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx(Ie,{w:t*.7}),l.jsx(Ie,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(qn,{w:"33%",h:"100%",radius:4}),l.jsx(qn,{w:"33%",h:"100%",radius:4}),l.jsx(qn,{w:"33%",h:"100%",radius:4})]})]})}function ZS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(qn,{w:"100%",h:"100%",radius:4},u))})}function JS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ie,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ie,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function e4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function t4({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Ko,{size:Math.min(14,n*.4)}),l.jsx(Ie,{w:"50%",h:2})]})}function n4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Ko,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function s4({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function o4({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(qn,{w:a,h:`${d}%`,radius:2},u)})})}function i4({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(qn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function a4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function r4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ie,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function l4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(qn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function c4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function u4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ie,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function d4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(qn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Ko,{size:5}),l.jsx(Ko,{size:5}),l.jsx(Ko,{size:5})]})]})}function f4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(Ie,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Ko,{size:5}),l.jsx(Ie,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(qn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function h4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"75%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Ko,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ie,{w:60,h:3,strong:!0}),l.jsx(Ie,{w:40,h:2})]})]})]})}function m4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ie,{w:t*.35}),l.jsx(qn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function p4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"40%",h:3,strong:!0}),l.jsx(Ie,{w:"70%",h:2})]})]})}function _4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(qn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function g4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ie,{w:t*.5,h:2}),l.jsx(Ie,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ie,{w:t*.3,h:2})]})}function y4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function x4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function b4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function v4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function w4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Ko,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function S4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ie,{w:t*.4,h:2}),l.jsx(Ie,{w:t*.25,h:2})]})}function C4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Ko,{size:6}),l.jsx(Ko,{size:6}),l.jsx(Ko,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ie,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function k4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ie,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function j4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Ko,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"50%",h:3,strong:!0}),l.jsx(Ie,{w:"75%",h:2})]}),l.jsx(Ie,{w:30,h:2})]})}function M4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"65%",h:4,strong:!0}),l.jsx(Ie,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"30%",h:5,strong:!0}),l.jsx(qn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function E4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ko,{size:i}),l.jsx(Ie,{w:t*.45,h:4,strong:!0}),l.jsx(Ie,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]})]})]})}function T4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ie,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ie,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function A4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:3,strong:!0}),l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function D4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(qn,{w:i,h:i,radius:i*.25}),l.jsx(Ie,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function N4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ie,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function R4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function B4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function L4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function O4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function z4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function $4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function I4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ie,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function P4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function H4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function V4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(qn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function U4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Ko,{size:a}),l.jsx(Ie,{w:t*.12,h:3,strong:!0}),l.jsx(Ie,{w:t*.08,h:2})]},u))})]})}function Y4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ie,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:Math.min(60,t*.2),h:2}),l.jsx(qn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(qn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ie,{w:t*.4,h:2})]})}function W4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Ie,{w:t*.4,h:4,strong:!0}),l.jsx(Ie,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:40,h:2}),l.jsx(qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ie,{w:60,h:2}),l.jsx(qn,{w:"100%",h:"100%",radius:4})]}),l.jsx(qn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var F4={navigation:BS,hero:LS,sidebar:OS,footer:zS,modal:$S,card:IS,text:PS,image:HS,table:VS,list:US,button:YS,input:WS,form:FS,tabs:XS,avatar:GS,badge:qS,header:KS,section:QS,grid:ZS,dropdown:JS,toggle:e4,search:t4,toast:n4,progress:s4,chart:o4,video:i4,tooltip:a4,breadcrumb:r4,pagination:l4,divider:c4,accordion:u4,carousel:d4,pricing:f4,testimonial:h4,cta:m4,alert:p4,banner:_4,stat:g4,stepper:y4,tag:x4,rating:b4,map:v4,timeline:w4,fileUpload:S4,codeBlock:C4,calendar:k4,notification:j4,productCard:M4,profile:E4,drawer:T4,popover:A4,logo:D4,faq:N4,gallery:R4,checkbox:B4,radio:L4,slider:O4,datePicker:z4,skeleton:$4,chip:I4,icon:P4,spinner:H4,feature:V4,team:U4,login:Y4,contact:W4};function X4({type:t,width:n,height:i,text:a}){const c=F4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var G4=`svg[fill=none] {
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
}`,q4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=G4}var Re=q4,al=24,Xu=5;function Hy(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],k=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],j=[];for(const se of n)i.has(se.id)||j.push(se);c&&j.push(...c);for(const se of j){const je=se.x,Pe=se.x+se.width,J=se.x+se.width/2,de=se.y,z=se.y+se.height,ce=se.y+se.height/2;for(const U of S)for(const Q of[je,Pe,J]){const _e=Q-U;Math.abs(_e)<Xu&&Math.abs(_e)<Math.abs(u)&&(u=_e)}for(const U of k)for(const Q of[de,z,ce]){const _e=Q-U;Math.abs(_e)<Xu&&Math.abs(_e)<Math.abs(d)&&(d=_e)}}const E=Math.abs(u)<Xu?u:0,I=Math.abs(d)<Xu?d:0,O=[],D=new Set,W=h+E,H=p+E,X=y+E,P=_+I,K=x+I,re=b+I;for(const se of j){const je=se.x,Pe=se.x+se.width,J=se.x+se.width/2,de=se.y,z=se.y+se.height,ce=se.y+se.height/2;for(const U of[je,J,Pe])for(const Q of[W,X,H])if(Math.abs(Q-U)<.5){const _e=`x:${Math.round(U)}`;D.has(_e)||(D.add(_e),O.push({axis:"x",pos:U}))}for(const U of[de,ce,z])for(const Q of[P,re,K])if(Math.abs(Q-U)<.5){const _e=`y:${Math.round(U)}`;D.has(_e)||(D.add(_e),O.push({axis:"y",pos:U}))}}return{dx:E,dy:I,guides:O}}function Vy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function K4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:k}){const[j,E]=g.useState(new Set),[I,O]=g.useState(null),[D,W]=g.useState(null),[H,X]=g.useState(null),[P,K]=g.useState([]),[re,se]=g.useState(null),[je,Pe]=g.useState(!1),J=g.useRef(!1),[de,z]=g.useState(new Set),ce=g.useRef(new Map),U=g.useRef(null),Q=g.useRef(null),_e=g.useRef(t);_e.current=t;const N=g.useRef(_);N.current=_;const ae=g.useRef(b);ae.current=b;const oe=g.useRef(w);oe.current=w;const ge=g.useRef(x);g.useEffect(()=>{x!==ge.current&&(ge.current=x,E(new Set))},[x]);const De=g.useRef(S);g.useEffect(()=>{if(S!==void 0&&S!==De.current){De.current=S;const ne=new Set(_e.current.map(Me=>Me.id));ne.size>0&&(z(ne),E(new Set),Q.current=null,Ut(()=>{n([]),z(new Set)},180))}},[S,n]),g.useEffect(()=>{const ne=Me=>{const Xe=Me.target;if(!(Xe.tagName==="INPUT"||Xe.tagName==="TEXTAREA"||Xe.isContentEditable)){if((Me.key==="Backspace"||Me.key==="Delete")&&j.size>0){Me.preventDefault();const Ye=new Set(j);z(Ye),E(new Set),Ut(()=>{n(_e.current.filter(nt=>!Ye.has(nt.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Me.key)&&j.size>0){Me.preventDefault();const Ye=Me.shiftKey?20:1,nt=Me.key==="ArrowLeft"?-Ye:Me.key==="ArrowRight"?Ye:0,ft=Me.key==="ArrowUp"?-Ye:Me.key==="ArrowDown"?Ye:0;n(t.map(dt=>j.has(dt.id)?{...dt,x:Math.max(0,dt.x+nt),y:Math.max(0,dt.y+ft)}:dt));return}if(Me.key==="Escape"){i?a(null):j.size>0&&E(new Set);return}}};return document.addEventListener("keydown",ne),()=>document.removeEventListener("keydown",ne)},[j,i,t,n,a]);const ze=g.useCallback(ne=>{if(ne.button!==0||p||ne.target.closest(`.${Re.placement}`))return;ne.preventDefault(),ne.stopPropagation();const Xe=window.scrollY,Ue=ne.clientX,Ye=ne.clientY;if(i){Q.current="place",d==null||d(!0);let nt=!1,ft=Ue,dt=Ye;const gt=at=>{ft=at.clientX,dt=at.clientY;const V=Math.abs(ft-Ue),Z=Math.abs(dt-Ye);if((V>5||Z>5)&&(nt=!0),nt){const fe=Math.min(Ue,ft),be=Math.min(Ye,dt),Je=Math.abs(ft-Ue),Ge=Math.abs(dt-Ye);O({x:fe,y:be,w:Je,h:Ge}),X({x:at.clientX+12,y:at.clientY+12,text:`${Math.round(Je)} × ${Math.round(Ge)}`})}},$t=at=>{window.removeEventListener("mousemove",gt),window.removeEventListener("mouseup",$t),O(null),X(null),Q.current=null,d==null||d(!1);const V=kt[i];let Z,fe,be,Je;nt?(Z=Math.min(Ue,ft),fe=Math.min(Ye,dt)+Xe,be=Math.max(al,Math.abs(ft-Ue)),Je=Math.max(al,Math.abs(dt-Ye))):(be=V.width,Je=V.height,Z=Ue-be/2,fe=Ye+Xe-Je/2),Z=Math.max(0,Z),fe=Math.max(0,fe);const Ge={id:Vy(),type:i,x:Z,y:fe,width:be,height:Je,scrollY:Xe,timestamp:Date.now()},Ne=[...t,Ge];n(Ne),E(new Set([Ge.id])),a(null)};window.addEventListener("mousemove",gt),window.addEventListener("mouseup",$t)}else{ne.shiftKey||E(new Set),Q.current="select";let nt=!1;const ft=gt=>{const $t=Math.abs(gt.clientX-Ue),at=Math.abs(gt.clientY-Ye);if(($t>4||at>4)&&(nt=!0),nt){const V=Math.min(Ue,gt.clientX),Z=Math.min(Ye,gt.clientY);W({x:V,y:Z,w:Math.abs(gt.clientX-Ue),h:Math.abs(gt.clientY-Ye)})}},dt=gt=>{if(window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",dt),Q.current=null,nt){const $t=Math.min(Ue,gt.clientX),at=Math.min(Ye,gt.clientY)+Xe,V=Math.abs(gt.clientX-Ue),Z=Math.abs(gt.clientY-Ye),fe=new Set(ne.shiftKey?j:new Set);for(const be of t)be.y-Xe,be.x+be.width>$t&&be.x<$t+V&&be.y+be.height>at&&be.y<at+Z&&fe.add(be.id);E(fe)}W(null)};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",dt)}},[i,p,t,n,j]),ot=g.useCallback((ne,Me)=>{var Ge;if(ne.button!==0)return;const Xe=ne.target;if(Xe.closest(`.${Re.handle}`)||Xe.closest(`.${Re.deleteButton}`))return;ne.preventDefault(),ne.stopPropagation();let Ue;ne.shiftKey?(Ue=new Set(j),Ue.has(Me)?Ue.delete(Me):Ue.add(Me)):j.has(Me)?Ue=new Set(j):Ue=new Set([Me]),E(Ue),(Ue.size!==j.size||[...Ue].some(Ne=>!j.has(Ne)))&&((Ge=N.current)==null||Ge.call(N,Ue,ne.shiftKey));const nt=ne.clientX,ft=ne.clientY,dt=new Map;for(const Ne of t)Ue.has(Ne.id)&&dt.set(Ne.id,{x:Ne.x,y:Ne.y});Q.current="move",d==null||d(!0);let gt=!1,$t=!1,at=t,V=0,Z=0;const fe=new Map;for(const Ne of t)dt.has(Ne.id)&&fe.set(Ne.id,{w:Ne.width,h:Ne.height});const be=Ne=>{var It;const wt=Ne.clientX-nt,He=Ne.clientY-ft;if((Math.abs(wt)>2||Math.abs(He)>2)&&(gt=!0),!gt)return;if(Ne.altKey&&!$t){$t=!0;const yt=[];for(const At of t)dt.has(At.id)&&yt.push({...At,id:Vy(),timestamp:Date.now()});at=[...t,...yt]}let Gt=1/0,St=1/0,tt=-1/0,Ot=-1/0;for(const[yt,At]of dt){const an=fe.get(yt);an&&(Gt=Math.min(Gt,At.x+wt),St=Math.min(St,At.y+He),tt=Math.max(tt,At.x+wt+an.w),Ot=Math.max(Ot,At.y+He+an.h))}const Ht={x:Gt,y:St,width:tt-Gt,height:Ot-St},{dx:Zt,dy:st,guides:et}=Hy(Ht,at,new Set(dt.keys()),void 0,y);K(et);const Dt=wt+Zt,bt=He+st;V=Dt,Z=bt,n(at.map(yt=>{const At=dt.get(yt.id);return At?{...yt,x:Math.max(0,At.x+Dt),y:Math.max(0,At.y+bt)}:yt})),(It=ae.current)==null||It.call(ae,Dt,bt)},Je=()=>{var Ne;window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",Je),Q.current=null,d==null||d(!1),K([]),(Ne=oe.current)==null||Ne.call(oe,V,Z,gt)};window.addEventListener("mousemove",be),window.addEventListener("mouseup",Je)},[j,t,n,d]),ct=g.useCallback((ne,Me,Xe)=>{ne.preventDefault(),ne.stopPropagation();const Ue=t.find(fe=>fe.id===Me);if(!Ue)return;E(new Set([Me])),Q.current="resize",d==null||d(!0);const Ye=ne.clientX,nt=ne.clientY,ft=Ue.width,dt=Ue.height,gt=Ue.x,$t=Ue.y,at={left:Xe.includes("w"),right:Xe.includes("e"),top:Xe.includes("n"),bottom:Xe.includes("s")},V=fe=>{const be=fe.clientX-Ye,Je=fe.clientY-nt;let Ge=ft,Ne=dt,wt=gt,He=$t;Xe.includes("e")&&(Ge=Math.max(al,ft+be)),Xe.includes("w")&&(Ge=Math.max(al,ft-be),wt=gt+ft-Ge),Xe.includes("s")&&(Ne=Math.max(al,dt+Je)),Xe.includes("n")&&(Ne=Math.max(al,dt-Je),He=$t+dt-Ne);const Gt={x:wt,y:He,width:Ge,height:Ne},{dx:St,dy:tt,guides:Ot}=Hy(Gt,_e.current,new Set([Me]),at,y);K(Ot),St!==0&&(at.right?Ge+=St:at.left&&(wt+=St,Ge-=St)),tt!==0&&(at.bottom?Ne+=tt:at.top&&(He+=tt,Ne-=tt)),n(_e.current.map(Ht=>Ht.id===Me?{...Ht,x:wt,y:He,width:Ge,height:Ne}:Ht)),X({x:fe.clientX+12,y:fe.clientY+12,text:`${Math.round(Ge)} × ${Math.round(Ne)}`})},Z=()=>{window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",Z),X(null),Q.current=null,d==null||d(!1),K([])};window.addEventListener("mousemove",V),window.addEventListener("mouseup",Z)},[t,n,d]),Ct=g.useCallback(ne=>{Q.current=null,z(Me=>{const Xe=new Set(Me);return Xe.add(ne),Xe}),E(Me=>{const Xe=new Set(Me);return Xe.delete(ne),Xe}),Ut(()=>{n(_e.current.filter(Me=>Me.id!==ne)),z(Me=>{const Xe=new Set(Me);return Xe.delete(ne),Xe})},180)},[n]),Yt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},xt=g.useCallback(ne=>{const Me=t.find(Xe=>Xe.id===ne);Me&&(J.current=!!Me.text,se(ne),Pe(!1))},[t]),mt=g.useCallback(()=>{re&&(Pe(!0),Ut(()=>{se(null),Pe(!1)},150))},[re]);g.useEffect(()=>{u&&re&&mt()},[u]);const Ke=g.useCallback(ne=>{re&&(n(t.map(Me=>Me.id===re?{...Me,text:ne.trim()||void 0}:Me)),mt())},[re,t,n,mt]),Wt=typeof window<"u"?window.scrollY:0,qe=["nw","ne","se","sw"],_t=k?"#f97316":"#3c82f7",ke=[{dir:"n",cls:Re.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:_t})})},{dir:"e",cls:Re.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:_t})})},{dir:"s",cls:Re.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:_t})})},{dir:"w",cls:Re.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:_t})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:U,className:`${Re.overlay} ${c?"":Re.light} ${i?Re.placing:""} ${p?Re.passthrough:""} ${u?Re.overlayExiting:""} ${k?Re.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:ze,children:t.map(ne=>{var Ye;const Me=j.has(ne.id),Xe=((Ye=Fi[ne.type])==null?void 0:Ye.label)||ne.type,Ue=ne.y-Wt;return l.jsxs("div",{"data-design-placement":ne.id,className:`${Re.placement} ${Me?Re.selected:""} ${de.has(ne.id)?Re.exiting:""}`,style:{left:ne.x,top:Ue,width:ne.width,height:ne.height,position:"fixed"},onMouseDown:nt=>ot(nt,ne.id),onDoubleClick:()=>xt(ne.id),children:[l.jsx("span",{className:Re.placementLabel,children:Xe}),l.jsx("span",{className:`${Re.placementAnnotation} ${ne.text?Re.annotationVisible:""}`,children:(ne.text&&ce.current.set(ne.id,ne.text),ne.text||ce.current.get(ne.id)||"")}),l.jsx("div",{className:Re.placementContent,children:l.jsx(X4,{type:ne.type,width:ne.width,height:ne.height,text:ne.text})}),l.jsx("div",{className:Re.deleteButton,onMouseDown:nt=>nt.stopPropagation(),onClick:()=>Ct(ne.id),children:"✕"}),qe.map(nt=>l.jsx("div",{className:`${Re.handle} ${Re[`handle${nt.charAt(0).toUpperCase()}${nt.slice(1)}`]}`,onMouseDown:ft=>ct(ft,ne.id,nt)},nt)),ke.map(({dir:nt,cls:ft,arrow:dt})=>l.jsx("div",{className:`${Re.edgeHandle} ${ft}`,onMouseDown:gt=>ct(gt,ne.id,nt),children:dt},nt))]},ne.id)})}),re&&(()=>{var $t,at;const ne=t.find(V=>V.id===re);if(!ne)return null;const Me=ne.y-Wt,Xe=ne.x+ne.width/2,Ue=Me-8,Ye=Me+ne.height+8,nt=Ue>200,ft=Ye<window.innerHeight-100,dt=Math.max(160,Math.min(window.innerWidth-160,Xe));let gt;return nt?gt={left:dt,bottom:window.innerHeight-Ue}:ft?gt={left:dt,top:Ye}:gt={left:dt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:(($t=Fi[ne.type])==null?void 0:$t.label)||ne.type,placeholder:Yt[ne.type]||"Label or content text",initialValue:(at=ne.text)!=null?at:"",submitLabel:J.current?"Save":"Set",onSubmit:Ke,onCancel:mt,onDelete:J.current?()=>{Ke("")}:void 0,isExiting:je,lightMode:!c,style:gt})})(),I&&l.jsx("div",{className:Re.drawBox,style:{left:I.x,top:I.y,width:I.w,height:I.h},"data-feedback-toolbar":!0}),D&&l.jsx("div",{className:Re.selectBox,style:{left:D.x,top:D.y,width:D.w,height:D.h},"data-feedback-toolbar":!0}),H&&l.jsx("div",{className:Re.sizeIndicator,style:{left:H.x,top:H.y},"data-feedback-toolbar":!0,children:H.text}),P.map((ne,Me)=>l.jsx("div",{className:Re.guideLine,style:ne.axis==="x"?{position:"fixed",left:ne.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ne.pos-Wt,right:0,height:1},"data-feedback-toolbar":!0},`${ne.axis}-${ne.pos}-${Me}`))]})}function Q4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Re.fadeTop:""} ${i?Re.fadeBottom:""}`}var $="currentColor",Ae="0.5";function Z4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:$,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:$,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:$,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:$,strokeWidth:Ae})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:$,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:$,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:$,strokeWidth:Ae})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:$,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:$,strokeWidth:Ae,fill:$,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:$,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:$,strokeWidth:Ae})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:$,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:$,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:$,strokeWidth:Ae})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:$,strokeWidth:Ae,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:$,strokeWidth:Ae,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:$,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:$,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:$,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:$,strokeWidth:Ae}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Ae,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:$,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:$,strokeWidth:Ae})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:$,strokeWidth:Ae})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:$,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:$,strokeWidth:Ae,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:$,strokeWidth:Ae}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:$,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:$,strokeWidth:Ae}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:$,strokeWidth:Ae}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:$,strokeWidth:Ae})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:$,strokeWidth:Ae,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:$,strokeWidth:Ae,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:$,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:$,opacity:".15",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:$,strokeWidth:Ae})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:$,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:$,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:$,strokeWidth:Ae})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:$,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:$,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:$,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:$,strokeWidth:Ae,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:$,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:$,strokeWidth:Ae})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:$,strokeWidth:Ae,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:$,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:$,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:$,strokeWidth:Ae})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:$,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:$,opacity:".2",stroke:$,strokeWidth:Ae}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:$,strokeWidth:Ae}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:$,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:$,strokeWidth:Ae})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:$,strokeWidth:Ae,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:$,strokeWidth:Ae,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:$,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:$,strokeWidth:Ae,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:$,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:$,opacity:".15",stroke:$,strokeWidth:Ae})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:$,opacity:".2",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:$,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:$,strokeWidth:Ae,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:$,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:$,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:$,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:$,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:$,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:$,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:$,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:$,strokeWidth:Ae,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:$,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:$,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:$,strokeWidth:Ae})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:$,strokeWidth:Ae,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:$,strokeWidth:Ae})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:$,strokeWidth:Ae}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:$,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:$,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:$,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:$,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:$,strokeWidth:Ae})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:$,strokeWidth:Ae,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:$,strokeWidth:Ae}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:$,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:$,strokeWidth:Ae})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:$,strokeWidth:Ae,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:$,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:$,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:$,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:$,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:$,opacity:".08",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:$,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:$,strokeWidth:Ae,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:$,strokeWidth:Ae,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:$,strokeWidth:Ae,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:$,strokeWidth:Ae,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:$,strokeWidth:Ae,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:$,strokeWidth:Ae,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:$,strokeWidth:Ae,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:$,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:$,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:$,strokeWidth:Ae,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:$,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:$,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:$,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:$,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:$,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:$,strokeWidth:Ae}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:$,opacity:".2"})]});default:return null}}function J4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Re.placeScroll} ${c||""}`,children:Qx.map(d=>l.jsxs("div",{className:Re.paletteSection,children:[l.jsx("div",{className:Re.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Re.paletteItem} ${t===h.type?Re.active:""} ${u?Re.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Re.paletteItemIcon,children:l.jsx(Z4,{type:h.type})}),l.jsx("span",{className:Re.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function e6({value:t,suffix:n}){const[i,a]=g.useState(null),[c,u]=g.useState(n),[d,h]=g.useState("up"),p=g.useRef(t),y=g.useRef(n),_=g.useRef(),x=i!==null&&c!==n;return g.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(_.current),_.current=Ut(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Re.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Re.rollingNum} ${d==="up"?Re.exitUp:Re.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Re.rollingNum} ${d==="up"?Re.enterUp:Re.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Re.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Re.rollingNum} ${d==="up"?Re.exitUp:Re.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Re.rollingNum} ${d==="up"?Re.enterUp:Re.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function t6({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[k,j]=g.useState(!1),[E,I]=g.useState("exit"),[O,D]=g.useState(!1),[W,H]=g.useState(!0),X=g.useRef(0),P=g.useRef(""),K=g.useRef(0),re=g.useRef(),se=g.useRef(null),[je,Pe]=g.useState("");g.useEffect(()=>(u?(j(!0),clearTimeout(re.current),cancelAnimationFrame(K.current),K.current=ul(()=>{K.current=ul(()=>{I("enter")})})):(cancelAnimationFrame(K.current),I("exit"),clearTimeout(re.current),re.current=Ut(()=>{j(!1),d==null||d()},200)),()=>cancelAnimationFrame(K.current)),[u]);const J=h>0||a>0,de=h+a;return de>0&&(X.current=de,P.current=_?de===1?"Component":"Components":de===1?"Change":"Changes"),g.useEffect(()=>{if(J)O?H(!1):(H(!0),D(!0),ul(()=>{ul(()=>{H(!1)})}));else{H(!0);const z=Ut(()=>D(!1),300);return()=>clearTimeout(z)}},[J]),g.useEffect(()=>{if(!k)return;const z=se.current;if(!z)return;const ce=()=>Pe(Q4(z));ce(),z.addEventListener("scroll",ce,{passive:!0});const U=new ResizeObserver(ce);return U.observe(z),()=>{z.removeEventListener("scroll",ce),U.disconnect()}},[k]),k?l.jsxs("div",{className:`${Re.palette} ${Re[E]} ${i?"":Re.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(re.current),j(!1),I("exit"),d==null||d()))},children:[l.jsxs("div",{className:Re.paletteHeader,children:[l.jsx("div",{className:Re.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Re.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Re.canvasToggle} ${_?Re.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:Re.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Re.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Re.wireframePurposeWrap} ${_?"":Re.collapsed}`,children:l.jsx("div",{className:Re.wireframePurposeInner,children:l.jsx("textarea",{className:Re.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:z=>w(z.target.value),rows:2})})}),l.jsx(J4,{activeType:t,onSelect:n,onDragStart:y,scrollRef:se,fadeClass:je,blankCanvas:_}),O&&l.jsx("div",{className:`${Re.paletteFooterWrap} ${W?Re.footerHidden:""}`,children:l.jsx("div",{className:Re.paletteFooterInner,children:l.jsx("div",{className:Re.paletteFooterInnerContent,children:l.jsxs("div",{className:Re.paletteFooter,children:[l.jsx("span",{className:Re.paletteFooterCount,children:l.jsx(e6,{value:X.current,suffix:P.current})}),l.jsx("button",{className:Re.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function pl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Fo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=pl(i)}return null}function n6(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=pl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ml(t){var a,c,u,d,h,p,y,_;const n=n6(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Fo(t,"svg");if(x){const b=pl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ml(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=pl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(k=>k.replace(/[A-Z0-9]{5,}.*$/,"")).filter(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function rc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Gu(t){const n=pl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const k=b.split(/\s+/).map(j=>j.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j));k&&(w=`.${k}`)}if(x==="button"||x==="a"){const k=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(k)return`${x}${w} "${k}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function lc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Zx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),s6=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),o6=new Set(["input","textarea","select"]),i6=new Set(["img","video","canvas","svg"]),a6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;s6.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:o6.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:i6.has(a)?c=["width","height","objectFit","borderRadius"]:a6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Zx.has(h)&&(i[u]=h)}return i}var r6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of r6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Zx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function l6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=pl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var c6=new Set(["nav","header","main","section","article","footer","aside"]),Nm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Uy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},u6=new Set(["script","style","noscript","link","meta"]),d6=40;function Jx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Nr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Nr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Nm[a])return Nm[a];if(Uy[n])return Uy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ml(t);return u.charAt(0).toUpperCase()+u.slice(1)}function eb(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function tb(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function f6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(u6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<d6)return;const y=c6.has(d),_=c.getAttribute("role")&&Nm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!_&&!x)return;const b=window.scrollY,w=Jx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Nr(c),role:c.getAttribute("role"),className:eb(c),textSnippet:tb(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function h6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Jx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Nr(t),role:t.getAttribute("role"),className:eb(t),textSnippet:tb(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Yy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Wy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Fy=16,ed=5;function Xy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const X of n)i.has(X.id)||b.push(X.currentRect);a&&b.push(...a);for(const X of b){const P=X.x,K=X.x+X.width,re=X.x+X.width/2,se=X.y,je=X.y+X.height,Pe=X.y+X.height/2;for(const J of[d,h,p])for(const de of[P,K,re]){const z=de-J;Math.abs(z)<ed&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const J of[y,_,x])for(const de of[se,je,Pe]){const z=de-J;Math.abs(z)<ed&&Math.abs(z)<Math.abs(u)&&(u=z)}}const w=Math.abs(c)<ed?c:0,S=Math.abs(u)<ed?u:0,k=[],j=new Set,E=d+w,I=h+w,O=p+w,D=y+S,W=_+S,H=x+S;for(const X of b){const P=X.x,K=X.x+X.width,re=X.x+X.width/2,se=X.y,je=X.y+X.height,Pe=X.y+X.height/2;for(const J of[P,re,K])for(const de of[E,O,I])if(Math.abs(de-J)<.5){const z=`x:${Math.round(J)}`;j.has(z)||(j.add(z),k.push({axis:"x",pos:J}))}for(const J of[se,Pe,je])for(const de of[D,H,W])if(Math.abs(de-J)<.5){const z=`y:${Math.round(J)}`;j.has(z)||(j.add(z),k.push({axis:"y",pos:J}))}}return{dx:w,dy:S,guides:k}}var m6=new Set(["script","style","noscript","link","meta","br","hr"]);function Gy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(m6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Fy&&i.height>=Fy)return n;n=n.parentElement}return null}function p6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=g.useRef(t);w.current=t;const[S,k]=g.useState(new Set),[j,E]=g.useState(!1),I=g.useRef(x);g.useEffect(()=>{x!==void 0&&x!==I.current&&(I.current=x,b.length>0&&E(!0))},[x,b.length]);const O=g.useRef(p);g.useEffect(()=>{p!==O.current&&(O.current=p,k(new Set))},[p]);const[D,W]=g.useState(null),[H,X]=g.useState(!1),P=g.useRef(!1),K=g.useCallback(V=>{const Z=b.find(fe=>fe.id===V);Z&&(P.current=!!Z.note,W(V),X(!1))},[b]),re=g.useCallback(()=>{D&&(X(!0),Ut(()=>{W(null),X(!1)},150))},[D]),se=g.useCallback(V=>{D&&(n({...t,sections:b.map(Z=>Z.id===D?{...Z,note:V.trim()||void 0}:Z)}),re())},[D,b,t,n,re]);g.useEffect(()=>{a&&D&&re()},[a]);const[je,Pe]=g.useState(new Set),J=g.useRef(new Map),[de,z]=g.useState(null),[ce,U]=g.useState(null),[Q,_e]=g.useState([]),[N,ae]=g.useState(0),oe=g.useRef(null),ge=g.useRef(new Set),De=g.useRef(new Map),[ze,ot]=g.useState(new Map),[ct,Ct]=g.useState(new Map),Yt=g.useRef(new Set),xt=g.useRef(new Map),mt=g.useRef(h);mt.current=h;const Ke=g.useRef(y);Ke.current=y;const Wt=g.useRef(_);Wt.current=_,g.useEffect(()=>{u&&k(new Set)},[u]);const[qe,_t]=g.useState(()=>!t.sections.some(V=>{const Z=V.originalRect,fe=V.currentRect;return Math.abs(Z.x-fe.x)>1||Math.abs(Z.y-fe.y)>1||Math.abs(Z.width-fe.width)>1||Math.abs(Z.height-fe.height)>1}));g.useEffect(()=>{if(!qe){const V=Ut(()=>_t(!0),380);return()=>clearTimeout(V)}},[]);const ke=g.useRef(new Set);g.useEffect(()=>{ke.current=new Set(b.map(V=>V.selector))},[b]),g.useEffect(()=>{const V=()=>ae(window.scrollY);return V(),window.addEventListener("scroll",V,{passive:!0}),window.addEventListener("resize",V,{passive:!0}),()=>{window.removeEventListener("scroll",V),window.removeEventListener("resize",V)}},[]),g.useEffect(()=>{const V=Z=>{if(oe.current){z(null);return}const fe=document.elementFromPoint(Z.clientX,Z.clientY);if(!fe){z(null);return}if(fe.closest("[data-feedback-toolbar]")){z(null);return}if(fe.closest("[data-design-placement]")){z(null);return}if(fe.closest("[data-annotation-popup]")){z(null);return}const be=Gy(fe);if(!be){z(null);return}for(const Ge of ke.current)try{const Ne=document.querySelector(Ge);if(Ne&&(Ne===be||be.contains(Ne))){z(null);return}}catch{}const Je=be.getBoundingClientRect();z({x:Je.x,y:Je.y,w:Je.width,h:Je.height})};return document.addEventListener("mousemove",V,{passive:!0}),()=>document.removeEventListener("mousemove",V)},[b]),g.useEffect(()=>{const V=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=V}},[]),g.useEffect(()=>{const V=Z=>{var Ne,wt,He,Gt;if(oe.current||Z.button!==0)return;const fe=Z.target;if(!fe||fe.closest("[data-feedback-toolbar]")||fe.closest("[data-design-placement]")||fe.closest("[data-annotation-popup]"))return;const be=Gy(fe);let Je=!1;if(be)for(const St of ke.current)try{const tt=document.querySelector(St);if(tt&&(tt===be||be.contains(tt))){Je=!0;break}}catch{}const Ge=!!(Z.shiftKey||Z.metaKey||Z.ctrlKey);if(be&&!Je){Z.preventDefault(),Z.stopPropagation();const St=h6(be),tt=[...b,St],Ot=[...t.originalOrder,St.id];n({...t,sections:tt,originalOrder:Ot});const Ht=new Set([St.id]);k(Ht),(Ne=mt.current)==null||Ne.call(mt,Ht,Ge),z(null);const Zt=Z.clientX,st=Z.clientY,et={x:St.currentRect.x,y:St.currentRect.y};St.originalRect;let Dt=!1,bt=0,It=0;oe.current="move";const yt=an=>{var cn;const _n=an.clientX-Zt,vn=an.clientY-st;if(!Dt&&(Math.abs(_n)>2||Math.abs(vn)>2)&&(Dt=!0),!Dt)return;const is={x:et.x+_n,y:et.y+vn,width:St.currentRect.width,height:St.currentRect.height},In=Xy(is,tt,new Set([St.id]),d);_e(In.guides);const An=_n+In.dx,Mn=vn+In.dy;bt=An,It=Mn;const as=document.querySelector(`[data-rearrange-section="${St.id}"]`);as&&(as.style.transform=`translate(${An}px, ${Mn}px)`),ot(new Map([[St.id,{x:et.x+An,y:et.y+Mn,width:St.currentRect.width,height:St.currentRect.height}]])),(cn=Ke.current)==null||cn.call(Ke,An,Mn)},At=()=>{var _n;window.removeEventListener("mousemove",yt),window.removeEventListener("mouseup",At),oe.current=null,_e([]),ot(new Map);const an=document.querySelector(`[data-rearrange-section="${St.id}"]`);an&&(an.style.transform=""),Dt&&n({...t,sections:tt.map(vn=>vn.id===St.id?{...vn,currentRect:{...vn.currentRect,x:Math.max(0,et.x+bt),y:Math.max(0,et.y+It)}}:vn),originalOrder:Ot}),(_n=Wt.current)==null||_n.call(Wt,bt,It,Dt)};window.addEventListener("mousemove",yt),window.addEventListener("mouseup",At)}else if(Je&&be){Z.preventDefault();for(const St of b)try{const tt=document.querySelector(St.selector);if(tt&&tt===be){const Ot=new Set([St.id]);k(Ot),(wt=mt.current)==null||wt.call(mt,Ot,Ge);return}}catch{}Ge||(k(new Set),(He=mt.current)==null||He.call(mt,new Set,!1))}else Ge||(k(new Set),(Gt=mt.current)==null||Gt.call(mt,new Set,!1))};return document.addEventListener("mousedown",V,!0),()=>document.removeEventListener("mousedown",V,!0)},[b,t,n]),g.useEffect(()=>{const V=Z=>{const fe=Z.target;if(!(fe.tagName==="INPUT"||fe.tagName==="TEXTAREA"||fe.isContentEditable)){if((Z.key==="Backspace"||Z.key==="Delete")&&S.size>0){Z.preventDefault();const be=new Set(S);Pe(Je=>{const Ge=new Set(Je);for(const Ne of be)Ge.add(Ne);return Ge}),k(new Set),Ut(()=>{const Je=w.current;n({...Je,sections:Je.sections.filter(Ge=>!be.has(Ge.id)),originalOrder:Je.originalOrder.filter(Ge=>!be.has(Ge))}),Pe(Ge=>{const Ne=new Set(Ge);for(const wt of be)Ne.delete(wt);return Ne})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Z.key)&&S.size>0){Z.preventDefault();const be=Z.shiftKey?20:1,Je=Z.key==="ArrowLeft"?-be:Z.key==="ArrowRight"?be:0,Ge=Z.key==="ArrowUp"?-be:Z.key==="ArrowDown"?be:0;n({...t,sections:b.map(Ne=>S.has(Ne.id)?{...Ne,currentRect:{...Ne.currentRect,x:Math.max(0,Ne.currentRect.x+Je),y:Math.max(0,Ne.currentRect.y+Ge)}}:Ne)});return}Z.key==="Escape"&&S.size>0&&k(new Set)}};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[S,b,t,n]);const ne=g.useCallback((V,Z)=>{var Zt;if(V.button!==0)return;const fe=V.target;if(fe.closest(`.${Re.handle}`)||fe.closest(`.${Re.deleteButton}`))return;V.preventDefault(),V.stopPropagation();let be;V.shiftKey||V.metaKey||V.ctrlKey?(be=new Set(S),be.has(Z)?be.delete(Z):be.add(Z)):S.has(Z)?be=new Set(S):be=new Set([Z]),k(be),(be.size!==S.size||[...be].some(st=>!S.has(st)))&&((Zt=mt.current)==null||Zt.call(mt,be,!!(V.shiftKey||V.metaKey||V.ctrlKey)));const Ge=V.clientX,Ne=V.clientY,wt=new Map;for(const st of b)be.has(st.id)&&wt.set(st.id,{x:st.currentRect.x,y:st.currentRect.y});oe.current="move";let He=!1,Gt=0,St=0;const tt=new Map;for(const st of b)if(be.has(st.id)){const et=document.querySelector(`[data-rearrange-section="${st.id}"]`);tt.set(st.id,{outlineEl:et,curW:st.currentRect.width,curH:st.currentRect.height})}const Ot=st=>{var In;const et=st.clientX-Ge,Dt=st.clientY-Ne;if(et===0&&Dt===0)return;He=!0;let bt=1/0,It=1/0,yt=-1/0,At=-1/0;for(const[An,{curW:Mn,curH:as}]of tt){const cn=wt.get(An);if(!cn)continue;const Dn=cn.x+et,it=cn.y+Dt;bt=Math.min(bt,Dn),It=Math.min(It,it),yt=Math.max(yt,Dn+Mn),At=Math.max(At,it+as)}const an=Xy({x:bt,y:It,width:yt-bt,height:At-It},b,be,d),_n=et+an.dx,vn=Dt+an.dy;Gt=_n,St=vn,_e(an.guides);for(const[,{outlineEl:An}]of tt)An&&(An.style.transform=`translate(${_n}px, ${vn}px)`);const is=new Map;for(const[An,{curW:Mn,curH:as}]of tt){const cn=wt.get(An);if(cn){const Dn={x:Math.max(0,cn.x+_n),y:Math.max(0,cn.y+vn),width:Mn,height:as};is.set(An,Dn)}}ot(is),(In=Ke.current)==null||In.call(Ke,_n,vn)},Ht=st=>{var et,Dt;window.removeEventListener("mousemove",Ot),window.removeEventListener("mouseup",Ht),oe.current=null,_e([]),ot(new Map);for(const[,{outlineEl:bt}]of tt)bt&&(bt.style.transform="");if(He){const bt=st.clientX-Ge,It=st.clientY-Ne;if(Math.abs(bt)<5&&Math.abs(It)<5)n({...t,sections:b.map(yt=>{const At=wt.get(yt.id);return At?{...yt,currentRect:{...yt.currentRect,x:At.x,y:At.y}}:yt})});else{n({...t,sections:b.map(yt=>{const At=wt.get(yt.id);return At?{...yt,currentRect:{...yt.currentRect,x:Math.max(0,At.x+Gt),y:Math.max(0,At.y+St)}}:yt})}),(et=Wt.current)==null||et.call(Wt,Gt,St,!0);return}}(Dt=Wt.current)==null||Dt.call(Wt,0,0,!1)};window.addEventListener("mousemove",Ot),window.addEventListener("mouseup",Ht)},[S,b,t,n]),Me=g.useCallback((V,Z,fe)=>{V.preventDefault(),V.stopPropagation();const be=b.find(Ot=>Ot.id===Z);if(!be)return;k(new Set([Z])),oe.current="resize";const Je=V.clientX,Ge=V.clientY,Ne={...be.currentRect};be.originalRect;const wt=Ne.width/Ne.height;let He={...Ne};const Gt=document.querySelector(`[data-rearrange-section="${Z}"]`),St=Ot=>{const Ht=Ot.clientX-Je,Zt=Ot.clientY-Ge;let st=Ne.x,et=Ne.y,Dt=Ne.width,bt=Ne.height;if(fe.includes("e")&&(Dt=Math.max(Ju,Ne.width+Ht)),fe.includes("w")&&(Dt=Math.max(Ju,Ne.width-Ht),st=Ne.x+Ne.width-Dt),fe.includes("s")&&(bt=Math.max(Ju,Ne.height+Zt)),fe.includes("n")&&(bt=Math.max(Ju,Ne.height-Zt),et=Ne.y+Ne.height-bt),Ot.shiftKey)if(fe.length===2){const yt=Math.abs(Dt-Ne.width),At=Math.abs(bt-Ne.height);yt>At?bt=Dt/wt:Dt=bt*wt,fe.includes("w")&&(st=Ne.x+Ne.width-Dt),fe.includes("n")&&(et=Ne.y+Ne.height-bt)}else fe==="e"||fe==="w"?bt=Dt/wt:Dt=bt*wt,fe==="w"&&(st=Ne.x+Ne.width-Dt),fe==="n"&&(et=Ne.y+Ne.height-bt);He={x:st,y:et,width:Dt,height:bt},Gt&&(Gt.style.left=`${st}px`,Gt.style.top=`${et-N}px`,Gt.style.width=`${Dt}px`,Gt.style.height=`${bt}px`),U({x:Ot.clientX+12,y:Ot.clientY+12,text:`${Math.round(Dt)} × ${Math.round(bt)}`}),ot(new Map([[Z,He]]))},tt=()=>{window.removeEventListener("mousemove",St),window.removeEventListener("mouseup",tt),U(null),oe.current=null,ot(new Map),n({...t,sections:b.map(Ot=>Ot.id===Z?{...Ot,currentRect:He}:Ot)})};window.addEventListener("mousemove",St),window.addEventListener("mouseup",tt)},[b,t,n,N]),Xe=g.useCallback(V=>{Pe(Z=>{const fe=new Set(Z);return fe.add(V),fe}),k(Z=>{const fe=new Set(Z);return fe.delete(V),fe}),Ut(()=>{const Z=w.current;n({...Z,sections:Z.sections.filter(fe=>fe.id!==V),originalOrder:Z.originalOrder.filter(fe=>fe!==V)}),Pe(fe=>{const be=new Set(fe);return be.delete(V),be})},180)},[n]),Ue=V=>{const Z=V.originalRect,fe=V.currentRect;return Math.abs(Z.x-fe.x)>1||Math.abs(Z.y-fe.y)>1||Math.abs(Z.width-fe.width)>1||Math.abs(Z.height-fe.height)>1},Ye=V=>{const Z=V.originalRect,fe=V.currentRect;return Math.abs(Z.x-fe.x)>1||Math.abs(Z.y-fe.y)>1},nt=V=>{const Z=V.originalRect,fe=V.currentRect;return Math.abs(Z.width-fe.width)>1||Math.abs(Z.height-fe.height)>1};for(const V of b)De.current.has(V.id)||(Ye(V)?De.current.set(V.id,"move"):nt(V)&&De.current.set(V.id,"resize"));for(const V of De.current.keys())b.some(Z=>Z.id===V)||De.current.delete(V);const ft=b.filter(V=>{try{if(je.has(V.id)||S.has(V.id))return!0;const Z=document.querySelector(V.selector);if(!Z)return!1;const fe=Z.getBoundingClientRect(),be=V.originalRect;return Math.abs(fe.width-be.width)+Math.abs(fe.height-be.height)<200}catch{return!1}}),dt=ft.filter(V=>Ue(V)),gt=ft.filter(V=>!Ue(V)),$t=new Set(dt.map(V=>V.id));for(const V of ge.current)$t.has(V)||ge.current.delete(V);const at=[...$t].sort().join(",");for(const V of dt)xt.current.set(V.id,{currentRect:V.currentRect,originalRect:V.originalRect,isFixed:V.isFixed});return g.useEffect(()=>{const V=Yt.current;Yt.current=$t;const Z=new Map;for(const fe of V)if(!$t.has(fe)){if(!b.some(Je=>Je.id===fe))continue;const be=xt.current.get(fe);be&&(Z.set(fe,{orig:be.originalRect,target:be.currentRect,isFixed:be.isFixed}),xt.current.delete(fe))}if(Z.size>0){Ct(be=>{const Je=new Map(be);for(const[Ge,Ne]of Z)Je.set(Ge,Ne);return Je});const fe=Ut(()=>{Ct(be=>{const Je=new Map(be);for(const Ge of Z.keys())Je.delete(Ge);return Je})},250);return()=>clearTimeout(fe)}},[at,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Re.rearrangeOverlay} ${i?"":Re.light} ${a?Re.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[de&&l.jsx("div",{className:Re.hoverHighlight,style:{left:de.x,top:de.y,width:de.w,height:de.h}}),gt.map(V=>{const Z=V.currentRect,fe=V.isFixed?Z.y:Z.y-N,be=Yy,Je=S.has(V.id);return l.jsxs("div",{"data-rearrange-section":V.id,className:`${Re.sectionOutline} ${Je?Re.selected:""} ${j||a||je.has(V.id)?Re.exiting:""}`,style:{left:Z.x,top:fe,width:Z.width,height:Z.height,borderColor:be.border,backgroundColor:be.bg,...qe?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ge=>ne(Ge,V.id),onDoubleClick:()=>K(V.id),children:[l.jsx("span",{className:Re.sectionLabel,style:{backgroundColor:be.pill},children:V.label}),l.jsx("span",{className:`${Re.sectionAnnotation} ${V.note?Re.annotationVisible:""}`,children:(V.note&&J.current.set(V.id,V.note),V.note||J.current.get(V.id)||"")}),l.jsxs("span",{className:Re.sectionDimensions,children:[Math.round(Z.width)," × ",Math.round(Z.height)]}),l.jsx("div",{className:Re.deleteButton,onMouseDown:Ge=>Ge.stopPropagation(),onClick:()=>Xe(V.id),children:"✕"}),Wy.map(Ge=>l.jsx("div",{className:`${Re.handle} ${Re[`handle${Ge.charAt(0).toUpperCase()}${Ge.slice(1)}`]}`,onMouseDown:Ne=>Me(Ne,V.id,Ge)},Ge))]},V.id)}),dt.map(V=>{const Z=V.currentRect,fe=V.isFixed?Z.y:Z.y-N,be=S.has(V.id),Je=Ye(V),Ge=nt(V);if(u&&!be)return null;const wt=!ge.current.has(V.id);return wt&&ge.current.add(V.id),l.jsxs("div",{"data-rearrange-section":V.id,className:`${Re.ghostOutline} ${be?Re.selected:""} ${j||a||je.has(V.id)?Re.exiting:""}`,style:{left:Z.x,top:fe,width:Z.width,height:Z.height,...qe?{}:{opacity:0,animation:"none",transition:"none"},...wt?{}:{animation:"none"}},onMouseDown:He=>ne(He,V.id),onDoubleClick:()=>K(V.id),children:[l.jsx("span",{className:Re.sectionLabel,style:{backgroundColor:Yy.pill},children:V.label}),l.jsx("span",{className:`${Re.sectionAnnotation} ${V.note?Re.annotationVisible:""}`,children:(V.note&&J.current.set(V.id,V.note),V.note||J.current.get(V.id)||"")}),l.jsxs("span",{className:Re.sectionDimensions,children:[Math.round(Z.width)," × ",Math.round(Z.height)]}),l.jsx("div",{className:Re.deleteButton,onMouseDown:He=>He.stopPropagation(),onClick:()=>Xe(V.id),children:"✕"}),Wy.map(He=>l.jsx("div",{className:`${Re.handle} ${Re[`handle${He.charAt(0).toUpperCase()}${He.slice(1)}`]}`,onMouseDown:Gt=>Me(Gt,V.id,He)},He)),l.jsx("span",{className:Re.ghostBadge,children:(()=>{const He=De.current.get(V.id);if(Je&&Ge){const[Gt,St]=He==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Gt," ",l.jsxs("span",{className:Re.ghostBadgeExtra,children:["& ",St]})]})}return`Suggested ${Ge?"Resize":"Move"}`})()})]},V.id)})]}),!u&&(()=>{const V=[];for(const Z of dt){const fe=ze.get(Z.id);V.push({id:Z.id,orig:Z.originalRect,target:fe||Z.currentRect,isFixed:Z.isFixed,isSelected:S.has(Z.id),isExiting:je.has(Z.id)})}for(const[Z,fe]of ze)if(!V.some(be=>be.id===Z)){const be=b.find(Je=>Je.id===Z);be&&V.push({id:Z,orig:be.originalRect,target:fe,isFixed:be.isFixed,isSelected:S.has(Z)})}for(const[Z,fe]of ct)V.some(be=>be.id===Z)||V.push({id:Z,orig:fe.orig,target:fe.target,isFixed:fe.isFixed,isSelected:!1,isExiting:!0});return V.length===0?null:l.jsxs("svg",{className:`${Re.connectorSvg} ${j||a?Re.connectorExiting:""}`,children:[V.map(({id:Z,orig:fe,target:be,isFixed:Je,isSelected:Ge,isExiting:Ne})=>{const wt=fe.x+fe.width/2,He=(Je?fe.y:fe.y-N)+fe.height/2,Gt=be.x+be.width/2,St=(Je?be.y:be.y-N)+be.height/2,tt=Gt-wt,Ot=St-He,Ht=Math.sqrt(tt*tt+Ot*Ot);if(Ht<2)return null;const Zt=Math.min(1,Ht/40),st=Math.min(Ht*.3,60),et=Ht>0?-Ot/Ht:0,Dt=Ht>0?tt/Ht:0,bt=(wt+Gt)/2+et*st,It=(He+St)/2+Dt*st,yt=ze.has(Z),At=yt||Ge?1:.4,an=yt||Ge?1:.5;return l.jsxs("g",{className:Ne?Re.connectorExiting:"",children:[l.jsx("path",{className:Re.connectorLine,d:`M ${wt} ${He} Q ${bt} ${It} ${Gt} ${St}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:At*Zt}),l.jsx("circle",{className:Re.connectorDot,cx:wt,cy:He,r:4*Zt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:an*Zt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Re.connectorDot,cx:Gt,cy:St,r:4*Zt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:an*Zt,filter:"url(#connDotShadow)"})]},`conn-${Z}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),D&&(()=>{var St;const V=b.find(tt=>tt.id===D);if(!V)return null;const Z=V.currentRect,fe=V.isFixed?Z.y:Z.y-N,be=Z.x+Z.width/2,Je=fe-8,Ge=fe+Z.height+8,Ne=Je>200,wt=Ge<window.innerHeight-100,He=Math.max(160,Math.min(window.innerWidth-160,be));let Gt;return Ne?Gt={left:He,bottom:window.innerHeight-Je}:wt?Gt={left:He,top:Ge}:Gt={left:He,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:V.label,placeholder:"Add a note about this section",initialValue:(St=V.note)!=null?St:"",submitLabel:P.current?"Save":"Set",onSubmit:se,onCancel:re,onDelete:P.current?()=>{se("")}:void 0,isExiting:H,lightMode:!i,style:Gt})})(),ce&&l.jsx("div",{className:Re.sizeIndicator,style:{left:ce.x,top:ce.y},"data-feedback-toolbar":!0,children:ce.text}),Q.map((V,Z)=>l.jsx("div",{className:Re.guideLine,style:V.axis==="x"?{position:"fixed",left:V.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:V.pos-N,width:"100vw",height:1}},`${V.axis}-${V.pos}-${Z}`))]})}var Rm=new Set(["script","style","noscript","link","meta","br","hr"]);function _6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Rm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Nr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Rm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Md(h),selector:Nr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function g6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function y6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Bm(t,n){const i=n?g6(n):_6(),a=y6(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const k=a.right>S.left+5&&a.left<S.right-5,j=a.bottom>S.top+5&&a.top<S.bottom-5;if(k&&S.bottom<=a.top+5){const E=Math.round(a.top-S.bottom);(!c||E<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(k&&S.top>=a.bottom-5){const E=Math.round(S.top-a.bottom);(!u||E<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(j&&S.right<=a.left+5){const E=Math.round(a.left-S.right);(!d||E<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}if(j&&S.left>=a.right-5){const E=Math.round(S.left-a.right);(!h||E<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,E),_dist:E})}}const y=window.innerWidth,_=window.innerHeight,x=b6(t,y),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=x6(a,t,y,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function x6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(y){const _=[];t.left<y.left-2&&_.push("left"),t.right>y.right+2&&_.push("right"),t.top<y.top-2&&_.push("top"),t.bottom>y.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function b6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function nb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function sb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=nb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function v6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(nb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var qy=15;function Ky(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function w6(t){var d;if(t.length<2)return[];const n=Ky(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Ky(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(y=x,_=b)}if(y){const x=y.labels.filter(w=>p.has(w)),b=x.join(", ");if(y.type!==h.type){const w=h.type==="row"?"y":"x",S=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${S}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${y.sharedEdge}`:"",k=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${k}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function ob(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Rm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Nr(h)}}}return{viewport:t,contentArea:null}}function S6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Nr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ib(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,_=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function ab(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function C6(t){const n=S6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Qy(t,n,i,a="standard"){var j,E,I,O;if(t.length===0)return"";const c=[...t].sort((D,W)=>Math.abs(D.y-W.y)<20?D.x-W.x:D.y-W.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((D,W)=>{var X;const H=((X=Fi[D.type])==null?void 0:X.label)||D.type;u+=`${W+1}. **${H}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}),u;const d=ob(n);u+=ab(d),u+=`### Components
`,c.forEach((D,W)=>{var je;const H=((je=Fi[D.type])==null?void 0:je.label)||D.type,X={x:D.x,y:D.y,width:D.width,height:D.height};u+=`${W+1}. **${H}** — \`${Math.round(D.width)}×${Math.round(D.height)}px\` at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`;const P=Bm(X),re=sb(P,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Pe of re)u+=`   - ${Pe}
`;const se=ib(X,d);se&&(u+=`   - CSS: ${se}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const D of c){const W=h.find(H=>Math.abs(H.y-D.y)<30);W?W.items.push(D):h.push({y:D.y,items:[D]})}if(h.sort((D,W)=>D.y-W.y),h.forEach((D,W)=>{D.items.sort((X,P)=>X.x-P.x);const H=D.items.map(X=>{var P;return((P=Fi[X.type])==null?void 0:P.label)||X.type});if(D.items.length===1){const P=D.items[0].width>n.width*.8;u+=`- Row ${W+1} (y≈${Math.round(D.y)}): ${H[0]}${P?" — full width":""}
`}else u+=`- Row ${W+1} (y≈${Math.round(D.y)}): ${H.join(" | ")} — ${D.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let D=0;D<c.length-1;D++){const W=c[D],H=c[D+1],X=((j=Fi[W.type])==null?void 0:j.label)||W.type,P=((E=Fi[H.type])==null?void 0:E.label)||H.type,K=Math.round(H.y-(W.y+W.height)),re=Math.round(H.x-(W.x+W.width));Math.abs(W.y-H.y)<30?u+=`- ${X} → ${P}: \`${re}px\` horizontal gap
`:u+=`- ${X} → ${P}: \`${K}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let D=0;D<c.length;D++)for(let W=D+1;W<c.length;W++){const H=c[D],X=c[W],P=((I=Fi[H.type])==null?void 0:I.label)||H.type,K=((O=Fi[X.type])==null?void 0:O.label)||X.type,re=Math.round(X.y-(H.y+H.height)),se=Math.round(X.x-(H.x+H.width));u+=`- ${P} ↔ ${K}: h=\`${se}px\` v=\`${re}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((D,W)=>{var X;const H=((X=Fi[D.type])==null?void 0:X.label)||D.type;u+=`${W}. ${H} at \`(${Math.round(D.x)}, ${Math.round(D.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(D=>D.type==="navigation"),y=c.some(D=>D.type==="hero"),_=c.some(D=>D.type==="sidebar"),x=c.some(D=>D.type==="footer"),b=c.filter(D=>D.type==="card"),w=c.filter(D=>D.type==="form"),S=c.filter(D=>D.type==="table"),k=c.filter(D=>D.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),_&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),k.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,_){const D=c.find(W=>W.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(D.width)}px 1fr;\`
`}if(b.length>1){const D=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${D}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Zy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=ob({width:d,height:h});n!=="compact"&&(u+=ab(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const w=_.originalRect,S=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const j=Bm(w,y("original")),E=Bm(S,y("current")),I=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${v6(j,{x:w.x,y:w.y},I)}
`;const O=b?{width:S.width,height:S.height}:void 0,D=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,W=O?`, ${Math.round(O.width)}×${Math.round(O.height)}px`:"",X=sb(E,{includeLeftRight:n==="detailed"||n==="forensic"});if(X.length>0){u+=`  - Suggested position ${D}${W}: ${X[0]}
`;for(let K=1;K<X.length;K++)u+=`    ${X[K]}
`}else u+=`  - Suggested position ${D}${W}
`;const P=ib(S,p);P&&(u+=`  - CSS: ${P}
`)}const k=C6(_.selector);if(k&&(u+=`  - ${k}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const j=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;j!==_.selector&&(u+=`  - Element: \`${j}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=w6(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Lm="feedback-annotations-",rb=7;function Ed(t){return`${Lm}${t}`}function em(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Ed(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-rb*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function lb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Ed(t),JSON.stringify(n))}catch{}}function k6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-rb*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Lm)){const c=a.slice(Lm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));lb(t,a)}var hp="agentation-design-";function j6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function M6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function E6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-rearrange-";function T6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function A6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function D6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-wireframe-";function N6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Jy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var cb="agentation-session-";function _p(t){return`${cb}${t}`}function R6(t){if(typeof window>"u")return null;try{return localStorage.getItem(_p(t))}catch{return null}}function tm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(_p(t),n)}catch{}}function B6(t){if(!(typeof window>"u"))try{localStorage.removeItem(_p(t))}catch{}}var ub=`${cb}toolbar-hidden`;function L6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(ub)==="1"}catch{return!1}}function O6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(ub,"1")}catch{}}async function nm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function e1(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function rl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function t1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Ka(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var $n={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},n1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),s1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],z6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function $6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=n1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...n1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...s1,...t.skipPatterns]:s1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:z6,filter:t==null?void 0:t.filter}}function I6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function P6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function H6(t,n){const i=I6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function V6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&H6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ll=null,U6=new WeakMap;function sm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function Y6(){if(ll!==null)return ll;if(typeof document>"u")return!1;if(document.body&&sm(document.body))return ll=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&sm(i))return ll=!0,!0}if(document.body){for(const n of document.body.children)if(sm(n))return ll=!0,!0}return ll=!1,!1}var uc={map:U6};function W6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function F6(t){const n=W6(t);return n?t[n]:null}function br(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function X6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===$n.HostComponent||n===$n.HostText||n===$n.HostHoistable||n===$n.HostSingleton||n===$n.Fragment||n===$n.Mode||n===$n.Profiler||n===$n.DehydratedFragment||n===$n.HostRoot||n===$n.HostPortal||n===$n.ScopeComponent||n===$n.OffscreenComponent||n===$n.LegacyHiddenComponent||n===$n.CacheComponent||n===$n.TracingMarkerComponent||n===$n.Throw||n===$n.ViewTransitionComponent||n===$n.ActivityComponent)return null;if(n===$n.ForwardRef){const u=a;if(u!=null&&u.render){const d=br(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:br(i)}if(n===$n.MemoComponent||n===$n.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=br(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:br(i)}if(n===$n.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===$n.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===$n.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?br(u._result):null}return n===$n.SuspenseComponent||n===$n.SuspenseListComponent?null:n===$n.IncompleteClassComponent||n===$n.IncompleteFunctionComponent||n===$n.FunctionComponent||n===$n.ClassComponent||n===$n.IndeterminateComponent?br(i):null}function G6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function q6(t,n){const i=$6(n),a=i.mode==="all";if(a){const p=uc.map.get(t);if(p!==void 0)return p}if(!Y6()){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const c=i.mode==="smart"?P6(t):void 0,u=[];try{let p=F6(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const _=X6(p);_&&!G6(_)&&V6(_,y,i,c)&&u.push(_),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&uc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&uc.map.set(t,h),h}var dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function K6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Ec(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Q6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Ec(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Ec(i._debugOwner)};i=i.return,a++}return null}function Z6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Ec(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Ec(n)}}}n=n.return,i++}return null}var nd=new Map;function J6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===dc.FunctionComponent||n===dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===dc.MemoComponent||n===dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function eC(){const t=Iv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function tC(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function nC(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function sC(t){const n=J6(t);if(!n)return null;if(nd.has(n))return nd.get(n);const i=eC();if(!i)return nd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=tC(d.stack);h&&(c={fileName:nC(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Ec(t)||void 0})}}}finally{i.set(a)}return nd.set(n,c),c}function oC(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=sC(i);if(c)return c;i=i.return,a++}return null}function Om(t){const n=K6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=Q6(n);if(i||(i=Z6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=oC(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function iC(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function aC(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Om(i);if(c.found)return c;i=i.parentElement,a++}return Om(t)}var rC=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,lC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=rC}var Fe=lC,fc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function o1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var cC=`@keyframes styles-module__markerIn___x4G8D {
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
}`,uC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=cC}var Gs=uC;function i1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:k,onContextMenu:j}){const E=(h||p)&&!y,I=E&&x==="delete",O=t.isMultiSelect,D=O?"var(--agentation-color-green)":"var(--agentation-color-accent)",W=c?Gs.exit:u?Gs.clearing:d?"":Gs.enter,H=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Gs.marker} ${O?Gs.multiSelect:""} ${W} ${I?Gs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:I?void 0:D,animationDelay:H},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:X=>{X.stopPropagation(),c||k(t)},onContextMenu:j?X=>{x==="delete"&&(X.preventDefault(),X.stopPropagation(),c||j(t))}:void 0,children:[E?I?l.jsx(qx,{size:O?18:16}):l.jsx(SS,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Gs.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Gs.markerTooltip} ${Gs.enter}`,style:b,children:[l.jsxs("span",{className:Gs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Gs.markerNote,children:t.comment})]})]})}function dC({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Gs.marker} ${Gs.pending} ${i?Gs.multiSelect:""} ${a?Gs.exit:Gs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(dS,{size:12})})}function a1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Gs.marker} ${n?Gs.fixed:""} ${Gs.hovered} ${i?Gs.multiSelect:""} ${Gs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(qx,{size:i?12:10})})}var fC=`.styles-module__switchContainer___Ka-AB {
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
}`,hC={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=fC}var om=hC,im=({className:t="",...n})=>l.jsxs("div",{className:`${om.switchContainer} ${t}`,children:[l.jsx("input",{className:om.switchInput,type:"checkbox",...n}),l.jsx("div",{className:om.switchThumb})]}),mC=`.styles-module__checkboxContainer___joqZk {
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
}`,pC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=mC}var sd=pC,_C=({className:t="",...n})=>l.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),gC=`.styles-module__container___w8eAF {
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
}`,yC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=gC}var r1=yC,l1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=g.useId();return l.jsxs("div",{className:`${r1.container} ${t}`,...u,children:[l.jsx(_C,{id:d,onChange:c,checked:a}),l.jsx("label",{className:r1.label,htmlFor:d,children:n}),i&&l.jsx(Mr,{content:i})]})},xC=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,bC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=xC}var jt=bC;function vC({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${jt.settingsPanel} ${h?jt.enter:jt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:jt.settingsPanelContainer,children:[l.jsxs("div",{className:`${jt.settingsPage} ${y==="automations"?jt.slideLeft:""}`,children:[l.jsxs("div",{className:jt.settingsHeader,children:[l.jsx("a",{className:jt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:jt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:jt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:jt.themeIconWrapper,children:l.jsx("span",{className:jt.themeIcon,children:i?l.jsx(vS,{size:20}):l.jsx(wS,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("div",{className:jt.settingsLabel,children:["Output Detail",l.jsx(Mr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:jt.cycleButton,onClick:()=>{const S=(fc.findIndex(k=>k.value===t.outputDetail)+1)%fc.length;n({outputDetail:fc[S].value})},children:[l.jsx("span",{className:jt.cycleButtonText,children:(b=fc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:jt.cycleDots,children:fc.map(w=>l.jsx("span",{className:`${jt.cycleDot} ${t.outputDetail===w.value?jt.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${jt.settingsRow} ${jt.settingsRowMarginTop} ${c?"":jt.settingsRowDisabled}`,children:[l.jsxs("div",{className:jt.settingsLabel,children:["React Components",l.jsx(Mr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(im,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${jt.settingsRow} ${jt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:jt.settingsLabel,children:["Hide Until Restart",l.jsx(Mr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(im,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsx("div",{className:`${jt.settingsLabel} ${jt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:jt.colorOptions,children:vc.map(w=>l.jsx("button",{className:`${jt.colorOption} ${t.annotationColorId===w.id?jt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsx(l1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(l1,{className:jt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:jt.divider}),l.jsxs("button",{className:jt.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:jt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${jt.mcpNavIndicator} ${jt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${jt.settingsPage} ${jt.automationsPage} ${y==="automations"?jt.slideIn:""}`,children:[l.jsxs("button",{className:jt.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(kS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("span",{className:jt.automationHeader,children:["MCP Connection",l.jsx(Mr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${jt.mcpStatusDot} ${jt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:jt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:jt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:`${jt.settingsSection} ${jt.settingsSectionGrow}`,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("span",{className:jt.automationHeader,children:["Webhooks",l.jsx(Mr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:jt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${jt.autoSendLabel} ${t.webhooksEnabled?jt.active:""} ${t.webhookUrl?"":jt.disabled}`,children:"Auto-Send"}),l.jsx(im,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:jt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:jt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function am(t,n="filtered"){const{name:i,path:a}=ml(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=q6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var c1=!1,rm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},oa=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],wC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...vc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};wC();function vr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function lm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function wr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=Om(t),i=n.found?n:aC(t);if(i.found&&i.source)return iC(i.source,"path")}function SC({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var vo,$s,Vt,Rn,hn,he,$e;const[k,j]=g.useState(!1),[E,I]=g.useState([]),[O,D]=g.useState(!0),[W,H]=g.useState(()=>L6()),[X,P]=g.useState(!1),K=g.useRef(null);g.useEffect(()=>{const C=B=>{const L=K.current;L&&L.contains(B.target)&&B.stopPropagation()},M=["mousedown","click","pointerdown"];return M.forEach(B=>document.body.addEventListener(B,C)),()=>{M.forEach(B=>document.body.removeEventListener(B,C))}},[]);const[re,se]=g.useState(!1),[je,Pe]=g.useState(!1),[J,de]=g.useState(null),[z,ce]=g.useState({x:0,y:0}),[U,Q]=g.useState(null),[_e,N]=g.useState(!1),[ae,oe]=g.useState("idle"),[ge,De]=g.useState(!1),[ze,ot]=g.useState(!1),[ct,Ct]=g.useState(null),[Yt,xt]=g.useState(null),[mt,Ke]=g.useState([]),[Wt,qe]=g.useState(null),[_t,ke]=g.useState(null),[ne,Me]=g.useState(null),[Xe,Ue]=g.useState(null),[Ye,nt]=g.useState([]),[ft,dt]=g.useState(0),[gt,$t]=g.useState(!1),[at,V]=g.useState(!1),[Z,fe]=g.useState(!1),[be,Je]=g.useState(!1),[Ge,Ne]=g.useState(!1),[wt,He]=g.useState("main"),[Gt,St]=g.useState(!1),[tt,Ot]=g.useState(!1),[Ht,Zt]=g.useState(!1),[st,et]=g.useState([]),[Dt,bt]=g.useState(null),It=g.useRef(!1),[yt,At]=g.useState(!1),[an,_n]=g.useState(!1),[vn,is]=g.useState(1),[In,An]=g.useState("new-page"),[Mn,as]=g.useState(""),[cn,Dn]=g.useState(!1),[it,rs]=g.useState(null),No=g.useRef(!1),Kn=g.useRef({rearrange:null,placements:[]}),js=g.useRef({rearrange:null,placements:[]}),[Ms,qs]=g.useState(0),[_s,So]=g.useState(0),[Io,ao]=g.useState(0),[un,yi]=g.useState(0),Ds=g.useRef(new Set),Ns=g.useRef(new Set),gs=g.useRef(null),ro=g.useRef(),Qo=tt&&k&&!Ht&&yt;g.useEffect(()=>{if(Qo){_n(!1);const C=ul(()=>{_n(!0)});return()=>cancelAnimationFrame(C)}else _n(!1)},[Qo]);const ys=g.useRef(new Map),Qn=g.useRef(new Map),Es=g.useRef(),[gn,Pn]=g.useState(!1),[dn,Wn]=g.useState([]),Gi=g.useRef(dn);Gi.current=dn;const[Zo,li]=g.useState(null),_o=g.useRef(null);g.useRef(!1),g.useRef([]),g.useRef(0),g.useRef(null),g.useRef(null),g.useRef(1);const[Jo,Ts]=g.useState(!1),fs=g.useRef(null),[Nn,Rs]=g.useState([]),Hn=g.useRef({cmd:!1,shift:!1}),ls=()=>{St(!0)},xi=()=>{St(!1)},Po=()=>{Jo||(fs.current=Ut(()=>Ts(!0),850))},qi=()=>{fs.current&&(clearTimeout(fs.current),fs.current=null),Ts(!1),xi()};g.useEffect(()=>()=>{fs.current&&clearTimeout(fs.current)},[]);const[Kt,Ks]=g.useState(()=>{var C;try{const M=JSON.parse((C=localStorage.getItem("feedback-toolbar-settings"))!=null?C:"");return{...rm,...M,annotationColorId:vc.find(B=>B.id===M.annotationColorId)?M.annotationColorId:rm.annotationColorId}}catch{return rm}}),[Us,Ho]=g.useState(!0),[bi,Vo]=g.useState(!1),Qs=()=>{var C;(C=K.current)==null||C.classList.add(Fe.disableTransitions),Ho(M=>!M),ul(()=>{var M;(M=K.current)==null||M.classList.remove(Fe.disableTransitions)})},vi=!1,lo="off",[Sn,go]=g.useState(x!=null?x:null),Vn=g.useRef(!1),[Bs,co]=g.useState(_?"connecting":"disconnected"),[rn,Ys]=g.useState(null),[Ws,Ls]=g.useState(!1),[hs,Ro]=g.useState(null),Zs=g.useRef(!1),[Co,yo]=g.useState(new Set),[Bo,En]=g.useState(new Set),[Un,Fn]=g.useState(!1),[ko,uo]=g.useState(!1),[Js,ei]=g.useState(!1),xo=g.useRef(null),Cs=g.useRef(null),Os=g.useRef(null),Uo=g.useRef(null),jo=g.useRef(!1),bo=g.useRef(0),T=g.useRef(null),G=g.useRef(null),xe=8,Ce=50,Qe=g.useRef(null),Ze=g.useRef(null),Nt=g.useRef(null),We=typeof window<"u"?window.location.pathname:"/";g.useEffect(()=>{if(be)Ne(!0);else{St(!1),He("main");const C=Ut(()=>Ne(!1),0);return()=>clearTimeout(C)}},[be]);const Bt=k&&O&&!tt;g.useEffect(()=>{if(Bt){Pe(!1),se(!0),yo(new Set);const C=Ut(()=>{yo(M=>{const B=new Set(M);return E.forEach(L=>B.add(L.id)),B})},350);return()=>clearTimeout(C)}else if(re){Pe(!0);const C=Ut(()=>{se(!1),Pe(!1)},250);return()=>clearTimeout(C)}},[Bt]),g.useEffect(()=>{V(!0),dt(window.scrollY);const C=em(We);I(C.filter(wr)),c1||(Vo(!0),c1=!0,Ut(()=>Vo(!1),750));try{const M=localStorage.getItem("feedback-toolbar-theme");M!==null&&Ho(M==="dark")}catch{}try{const M=localStorage.getItem("feedback-toolbar-position");if(M){const B=JSON.parse(M);typeof B.x=="number"&&typeof B.y=="number"&&Ys(B)}}catch{}},[We]),g.useEffect(()=>{at&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Kt))},[Kt,at]),g.useEffect(()=>{at&&localStorage.setItem("feedback-toolbar-theme",Us?"dark":"light")},[Us,at]);const zt=g.useRef(!1);g.useEffect(()=>{const C=zt.current;zt.current=Ws,C&&!Ws&&rn&&at&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(rn))},[Ws,rn,at]),g.useEffect(()=>{if(!_||!at||Vn.current)return;Vn.current=!0,co("connecting"),(async()=>{try{const M=R6(We),B=x||M;let L=!1;if(B)try{const Y=await e1(_,B);go(Y.id),co("connected"),tm(We,Y.id),L=!0;const ie=em(We),Te=new Set(Y.annotations.map(Oe=>Oe.id)),Se=ie.filter(Oe=>!Te.has(Oe.id));if(Se.length>0){const rt=`${typeof window<"u"?window.location.origin:""}${We}`,Et=(await Promise.allSettled(Se.map(vt=>rl(_,Y.id,{...vt,sessionId:Y.id,url:rt})))).map((vt,pt)=>vt.status==="fulfilled"?vt.value:(console.warn("[Agentation] Failed to sync annotation:",vt.reason),Se[pt])),Lt=[...Y.annotations,...Et];I(Lt.filter(wr)),cc(We,Lt.filter(wr),Y.id)}else I(Y.annotations.filter(wr)),cc(We,Y.annotations.filter(wr),Y.id)}catch(Y){console.warn("[Agentation] Could not join session, creating new:",Y),B6(We)}if(!L){const Y=typeof window<"u"?window.location.href:"/",ie=await nm(_,Y);go(ie.id),co("connected"),tm(We,ie.id),b==null||b(ie.id);const Te=k6(),Se=typeof window<"u"?window.location.origin:"",Oe=[];for(const[rt,ut]of Te){const Et=ut.filter(pt=>!pt._syncedTo);if(Et.length===0)continue;const Lt=`${Se}${rt}`,vt=rt===We;Oe.push((async()=>{try{const pt=vt?ie:await nm(_,Lt),bs=(await Promise.allSettled(Et.map(jn=>rl(_,pt.id,{...jn,sessionId:pt.id,url:Lt})))).map((jn,Yn)=>jn.status==="fulfilled"?jn.value:(console.warn("[Agentation] Failed to sync annotation:",jn.reason),Et[Yn])).filter(wr);if(cc(rt,bs,pt.id),vt){const jn=new Set(Et.map(Yn=>Yn.id));I(Yn=>{const qt=Yn.filter(Qt=>!jn.has(Qt.id));return[...bs,...qt]})}}catch(pt){console.warn(`[Agentation] Failed to sync annotations for ${rt}:`,pt)}})())}await Promise.allSettled(Oe)}}catch(M){co("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",M)}})()},[_,x,at,b,We]),g.useEffect(()=>{if(!_||!at)return;const C=async()=>{try{(await fetch(`${_}/health`)).ok?co("connected"):co("disconnected")}catch{co("disconnected")}};C();const M=ES(C,1e4);return()=>clearInterval(M)},[_,at]),g.useEffect(()=>{if(!_||!at||!Sn)return;const C=new EventSource(`${_}/sessions/${Sn}/events`),M=["resolved","dismissed"],B=L=>{var Y;try{const ie=JSON.parse(L.data);if(M.includes((Y=ie.payload)==null?void 0:Y.status)){const Te=ie.payload.id,Se=ie.payload.kind;if(Se==="placement"){for(const[Oe,rt]of ys.current)if(rt===Te){ys.current.delete(Oe),et(ut=>ut.filter(Et=>Et.id!==Oe));break}}else if(Se==="rearrange"){for(const[Oe,rt]of Qn.current)if(rt===Te){Qn.current.delete(Oe),rs(ut=>{if(!ut)return null;const Et=ut.sections.filter(Lt=>Lt.id!==Oe);return Et.length===0?null:{...ut,sections:Et}});break}}else En(Oe=>new Set(Oe).add(Te)),Ut(()=>{I(Oe=>Oe.filter(rt=>rt.id!==Te)),En(Oe=>{const rt=new Set(Oe);return rt.delete(Te),rt})},150)}}catch{}};return C.addEventListener("annotation.updated",B),()=>{C.removeEventListener("annotation.updated",B),C.close()}},[_,at,Sn]),g.useEffect(()=>{if(!_||!at)return;const C=G.current==="disconnected",M=Bs==="connected";G.current=Bs,C&&M&&(async()=>{try{const L=em(We);if(L.length===0)return;const ie=`${typeof window<"u"?window.location.origin:""}${We}`;let Te=Sn,Se=[];if(Te)try{Se=(await e1(_,Te)).annotations}catch{Te=null}Te||(Te=(await nm(_,ie)).id,go(Te),tm(We,Te));const Oe=new Set(Se.map(ut=>ut.id)),rt=L.filter(ut=>!Oe.has(ut.id));if(rt.length>0){const Et=(await Promise.allSettled(rt.map(pt=>rl(_,Te,{...pt,sessionId:Te,url:ie})))).map((pt,Zn)=>pt.status==="fulfilled"?pt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",pt.reason),rt[Zn])),vt=[...Se,...Et].filter(wr);I(vt),cc(We,vt,Te)}}catch(L){console.warn("[Agentation] Failed to sync on reconnect:",L)}})()},[Bs,_,at,Sn,We]);const tn=g.useCallback(()=>{X||(P(!0),Je(!1),j(!1),Ut(()=>{O6(!0),H(!0),P(!1)},400))},[X]);g.useEffect(()=>{if(!i||!at||!t||t.length===0||E.length>0)return;const C=[];return C.push(Ut(()=>{j(!0)},n-200)),t.forEach((M,B)=>{const L=n+B*300;C.push(Ut(()=>{const Y=document.querySelector(M.selector);if(!Y)return;const ie=Y.getBoundingClientRect(),{name:Te,path:Se}=ml(Y),Oe={id:`demo-${Date.now()}-${B}`,x:(ie.left+ie.width/2)/window.innerWidth*100,y:ie.top+ie.height/2+window.scrollY,comment:M.comment,element:Te,elementPath:Se,timestamp:Date.now(),selectedText:M.selectedText,boundingBox:{x:ie.left,y:ie.top+window.scrollY,width:ie.width,height:ie.height},nearbyText:rc(Y),cssClasses:lc(Y)};I(rt=>[...rt,Oe])},L))}),()=>{C.forEach(clearTimeout)}},[i,at,t,n]),g.useEffect(()=>{const C=()=>{dt(window.scrollY),$t(!0),Nt.current&&clearTimeout(Nt.current),Nt.current=Ut(()=>{$t(!1)},150)};return window.addEventListener("scroll",C,{passive:!0}),()=>{window.removeEventListener("scroll",C),Nt.current&&clearTimeout(Nt.current)}},[]),g.useEffect(()=>{at&&E.length>0?Sn?cc(We,E,Sn):lb(We,E):at&&E.length===0&&localStorage.removeItem(Ed(We))},[E,We,at,Sn]),g.useEffect(()=>{if(at&&!It.current){It.current=!0;const C=j6(We);C.length>0&&et(C)}},[at,We]),g.useEffect(()=>{at&&It.current&&!yt&&(st.length>0?M6(We,st):E6(We))},[st,We,at,yt]),g.useEffect(()=>{if(at&&!No.current){No.current=!0;const C=T6(We);if(C){const M={...C,sections:C.sections.map(B=>{var L;return{...B,currentRect:(L=B.currentRect)!=null?L:{...B.originalRect}}})};rs(M)}}},[at,We]),g.useEffect(()=>{at&&No.current&&!yt&&(it?A6(We,it):D6(We))},[it,We,at,yt]);const ln=g.useRef(!1);g.useEffect(()=>{if(at&&!ln.current){ln.current=!0;const C=N6(We);C&&(js.current={rearrange:C.rearrange,placements:C.placements||[]},C.purpose&&as(C.purpose))}},[at,We]),g.useEffect(()=>{var M,B,L,Y,ie;if(!at||!ln.current)return;const C=js.current;yt?((B=(M=it==null?void 0:it.sections)==null?void 0:M.length)!=null?B:0)>0||st.length>0||Mn?Jy(We,{rearrange:it,placements:st,purpose:Mn}):td(We):((ie=(Y=(L=C.rearrange)==null?void 0:L.sections)==null?void 0:Y.length)!=null?ie:0)>0||C.placements.length>0||Mn?Jy(We,{rearrange:C.rearrange,placements:C.placements,purpose:Mn}):td(We)},[it,st,Mn,yt,We,at]),g.useEffect(()=>{tt&&!it&&rs({sections:[],originalOrder:[],detectedAt:Date.now()})},[tt,it]),g.useEffect(()=>{if(!_||!Sn)return;const C=ys.current,M=new Set(st.map(B=>B.id));for(const B of st){if(C.has(B.id))continue;C.set(B.id,"");const L=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:We;rl(_,Sn,{id:B.id,x:B.x/window.innerWidth*100,y:B.y,comment:`Place ${B.type} at (${Math.round(B.x)}, ${Math.round(B.y)}), ${B.width}×${B.height}px${B.text?` — "${B.text}"`:""}`,element:`[design:${B.type}]`,elementPath:"[placement]",timestamp:B.timestamp,url:L,intent:"change",severity:"important",kind:"placement",placement:{componentType:B.type,width:B.width,height:B.height,scrollY:B.scrollY,text:B.text}}).then(Y=>{C.has(B.id)&&C.set(B.id,Y.id)}).catch(Y=>{console.warn("[Agentation] Failed to sync placement annotation:",Y),C.delete(B.id)})}for(const[B,L]of C)M.has(B)||(C.delete(B),L&&Ka(_,L).catch(()=>{}))},[st,_,Sn,We]),g.useEffect(()=>{if(!(!_||!Sn))return Es.current&&clearTimeout(Es.current),Es.current=Ut(()=>{const C=Qn.current;if(!it||it.sections.length===0){for(const[,L]of C)L&&Ka(_,L).catch(()=>{});C.clear();return}const M=new Set(it.sections.map(L=>L.id)),B=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:We;for(const L of it.sections){const Y=L.originalRect,ie=L.currentRect;if(!(Math.abs(Y.x-ie.x)>1||Math.abs(Y.y-ie.y)>1||Math.abs(Y.width-ie.width)>1||Math.abs(Y.height-ie.height)>1)){const Oe=C.get(L.id);Oe&&(C.delete(L.id),Ka(_,Oe).catch(()=>{}));continue}const Se=C.get(L.id);Se?t1(_,Se,{comment:`Move ${L.label} section (${L.tagName}) — from (${Math.round(Y.x)},${Math.round(Y.y)}) ${Math.round(Y.width)}×${Math.round(Y.height)} to (${Math.round(ie.x)},${Math.round(ie.y)}) ${Math.round(ie.width)}×${Math.round(ie.height)}`}).catch(Oe=>{console.warn("[Agentation] Failed to update rearrange annotation:",Oe)}):(C.set(L.id,""),rl(_,Sn,{id:L.id,x:ie.x/window.innerWidth*100,y:ie.y,comment:`Move ${L.label} section (${L.tagName}) — from (${Math.round(Y.x)},${Math.round(Y.y)}) ${Math.round(Y.width)}×${Math.round(Y.height)} to (${Math.round(ie.x)},${Math.round(ie.y)}) ${Math.round(ie.width)}×${Math.round(ie.height)}`,element:L.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:B,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:L.selector,label:L.label,tagName:L.tagName,originalRect:Y,currentRect:ie}}).then(Oe=>{C.has(L.id)&&C.set(L.id,Oe.id)}).catch(Oe=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Oe),C.delete(L.id)}))}for(const[L,Y]of C)M.has(L)||(C.delete(L),Y&&Ka(_,Y).catch(()=>{}))},300),()=>{Es.current&&clearTimeout(Es.current)}},[it,_,Sn,We]);const nn=g.useRef(new Map);g.useLayoutEffect(()=>{var B;const C=(B=it==null?void 0:it.sections)!=null?B:[],M=new Set;if((tt||Ht)&&k)for(const L of C){M.add(L.id);try{const Y=document.querySelector(L.selector);if(!Y)continue;if(!nn.current.has(L.id)){const ie={transform:Y.style.transform,transformOrigin:Y.style.transformOrigin,opacity:Y.style.opacity,position:Y.style.position,zIndex:Y.style.zIndex,display:Y.style.display},Te=[];let Se=Y.parentElement;for(;Se&&Se!==document.body;){const rt=getComputedStyle(Se);(rt.overflow!=="visible"||rt.overflowX!=="visible"||rt.overflowY!=="visible")&&(Te.push({el:Se,overflow:Se.style.overflow}),Se.style.overflow="visible"),Se=Se.parentElement}getComputedStyle(Y).display==="inline"&&(Y.style.display="inline-block"),nn.current.set(L.id,{el:Y,origStyles:ie,ancestors:Te}),Y.style.transformOrigin="top left",Y.style.zIndex="9999"}}catch{}}for(const[L,Y]of nn.current)if(!M.has(L)){const{el:ie,origStyles:Te,ancestors:Se}=Y;ie.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ie.style.transform=Te.transform,ie.style.transformOrigin=Te.transformOrigin,ie.style.opacity=Te.opacity,ie.style.position=Te.position,ie.style.zIndex=Te.zIndex,nn.current.delete(L),Ut(()=>{ie.style.transition="",ie.style.display=Te.display;for(const Oe of Se)Oe.el.style.overflow=Oe.overflow},450)}},[it,tt,Ht,k]),g.useEffect(()=>()=>{for(const[,C]of nn.current){const{el:M,origStyles:B,ancestors:L}=C;M.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",M.style.transform=B.transform,M.style.transformOrigin=B.transformOrigin,M.style.opacity=B.opacity,M.style.position=B.position,M.style.zIndex=B.zIndex,Ut(()=>{M.style.transition="",M.style.display=B.display;for(const Y of L)Y.el.style.overflow=Y.overflow},450)}nn.current.clear()},[]);const Cn=g.useCallback(()=>{Zt(!0),Ot(!1),bt(null),clearTimeout(ro.current),ro.current=Ut(()=>{Zt(!1)},300)},[]),kn=g.useCallback(()=>{tt&&(Zt(!0),Ot(!1),bt(null),clearTimeout(ro.current),ro.current=Ut(()=>{Zt(!1)},300)),j(!1)},[tt]),zs=g.useCallback(()=>{Z||(AS(),fe(!0))},[Z]),fo=g.useCallback(()=>{Z&&(Iy(),fe(!1))},[Z]),ci=g.useCallback(()=>{Z?fo():zs()},[Z,zs,fo]),Li=g.useCallback(()=>{if(Nn.length===0)return;const C=Nn[0],M=C.element,B=Nn.length>1,L=Nn.map(Y=>Y.element.getBoundingClientRect());if(B){const Y={left:Math.min(...L.map(pt=>pt.left)),top:Math.min(...L.map(pt=>pt.top)),right:Math.max(...L.map(pt=>pt.right)),bottom:Math.max(...L.map(pt=>pt.bottom))},ie=Nn.slice(0,5).map(pt=>pt.name).join(", "),Te=Nn.length>5?` +${Nn.length-5} more`:"",Se=L.map(pt=>({x:pt.left,y:pt.top+window.scrollY,width:pt.width,height:pt.height})),rt=Nn[Nn.length-1].element,ut=L[L.length-1],Et=ut.left+ut.width/2,Lt=ut.top+ut.height/2,vt=lm(rt);Q({x:Et/window.innerWidth*100,y:vt?Lt:Lt+window.scrollY,clientY:Lt,element:`${Nn.length} elements: ${ie}${Te}`,elementPath:"multi-select",boundingBox:{x:Y.left,y:Y.top+window.scrollY,width:Y.right-Y.left,height:Y.bottom-Y.top},isMultiSelect:!0,isFixed:vt,elementBoundingBoxes:Se,multiSelectElements:Nn.map(pt=>pt.element),targetElement:rt,fullPath:Zu(M),accessibility:Qu(M),computedStyles:Ku(M),computedStylesObj:qu(M),nearbyElements:Gu(M),cssClasses:lc(M),nearbyText:rc(M),sourceFile:od(M)})}else{const Y=L[0],ie=lm(M);Q({x:Y.left/window.innerWidth*100,y:ie?Y.top:Y.top+window.scrollY,clientY:Y.top,element:C.name,elementPath:C.path,boundingBox:{x:Y.left,y:ie?Y.top:Y.top+window.scrollY,width:Y.width,height:Y.height},isFixed:ie,fullPath:Zu(M),accessibility:Qu(M),computedStyles:Ku(M),computedStylesObj:qu(M),nearbyElements:Gu(M),cssClasses:lc(M),nearbyText:rc(M),reactComponents:C.reactComponents,sourceFile:od(M)})}Rs([]),de(null)},[Nn]);g.useEffect(()=>{k||(Q(null),Me(null),Ue(null),nt([]),de(null),Je(!1),Rs([]),Hn.current={cmd:!1,shift:!1},Z&&fo())},[k,Z,fo]),g.useEffect(()=>()=>{Iy()},[]),g.useEffect(()=>{if(!k)return;const C=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),M=":not([data-agentation-root]):not([data-agentation-root] *)",B=document.createElement("style");return B.id="feedback-cursor-styles",B.textContent=`
      body ${M} {
        cursor: crosshair !important;
      }

      body :is(${C})${M} {
        cursor: text !important;
      }
    `,document.head.appendChild(B),()=>{const L=document.getElementById("feedback-cursor-styles");L&&L.remove()}},[k]),g.useEffect(()=>{if(Zo!==null&&k)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Zo,k]),g.useEffect(()=>{if(!k||U||gn||tt)return;const C=M=>{const B=M.composedPath()[0]||M.target;if(Fo(B,"[data-feedback-toolbar]")){de(null);return}const L=vr(M.clientX,M.clientY);if(!L||Fo(L,"[data-feedback-toolbar]")){de(null);return}const{name:Y,elementName:ie,path:Te,reactComponents:Se}=am(L,lo),Oe=L.getBoundingClientRect();de({element:Y,elementName:ie,elementPath:Te,rect:Oe,reactComponents:Se}),ce({x:M.clientX,y:M.clientY})};return document.addEventListener("mousemove",C),()=>document.removeEventListener("mousemove",C)},[k,U,gn,tt,lo,dn]);const Ki=g.useCallback(C=>{var M;if(Me(C),Ct(null),xt(null),Ke([]),(M=C.elementBoundingBoxes)!=null&&M.length){const B=[];for(const L of C.elementBoundingBoxes){const Y=L.x+L.width/2,ie=L.y+L.height/2-window.scrollY,Te=vr(Y,ie);Te&&B.push(Te)}nt(B),Ue(null)}else if(C.boundingBox){const B=C.boundingBox,L=B.x+B.width/2,Y=C.isFixed?B.y+B.height/2:B.y+B.height/2-window.scrollY,ie=vr(L,Y);if(ie){const Te=ie.getBoundingClientRect(),Se=Te.width/B.width,Oe=Te.height/B.height;Se<.5||Oe<.5?Ue(null):Ue(ie)}else Ue(null);nt([])}else Ue(null),nt([])},[]);g.useEffect(()=>{if(!k||gn||tt)return;const C=M=>{var xs,bs;if(jo.current){jo.current=!1;return}const B=M.composedPath()[0]||M.target;if(Fo(B,"[data-feedback-toolbar]")||Fo(B,"[data-annotation-popup]")||Fo(B,"[data-annotation-marker]"))return;if(M.metaKey&&M.shiftKey&&!U&&!ne){M.preventDefault(),M.stopPropagation();const jn=vr(M.clientX,M.clientY);if(!jn)return;const Yn=jn.getBoundingClientRect(),{name:qt,path:Qt,reactComponents:vs}=am(jn,lo),Tn=Nn.findIndex(ho=>ho.element===jn);Tn>=0?Rs(ho=>ho.filter((Oo,cs)=>cs!==Tn)):Rs(ho=>[...ho,{element:jn,rect:Yn,name:qt,path:Qt,reactComponents:vs!=null?vs:void 0}]);return}const L=Fo(B,"button, a, input, select, textarea, [role='button'], [onclick]");if(Kt.blockInteractions&&L&&(M.preventDefault(),M.stopPropagation()),U){if(L&&!Kt.blockInteractions)return;M.preventDefault(),(xs=Qe.current)==null||xs.shake();return}if(ne){if(L&&!Kt.blockInteractions)return;M.preventDefault(),(bs=Ze.current)==null||bs.shake();return}M.preventDefault();const Y=vr(M.clientX,M.clientY);if(!Y)return;const{name:ie,path:Te,reactComponents:Se}=am(Y,lo),Oe=Y.getBoundingClientRect(),rt=M.clientX/window.innerWidth*100,ut=lm(Y),Et=ut?M.clientY:M.clientY+window.scrollY,Lt=window.getSelection();let vt;Lt&&Lt.toString().trim().length>0&&(vt=Lt.toString().trim().slice(0,500));const pt=qu(Y),Zn=Ku(Y);Q({x:rt,y:Et,clientY:M.clientY,element:ie,elementPath:Te,selectedText:vt,boundingBox:{x:Oe.left,y:ut?Oe.top:Oe.top+window.scrollY,width:Oe.width,height:Oe.height},nearbyText:rc(Y),cssClasses:lc(Y),isFixed:ut,fullPath:Zu(Y),accessibility:Qu(Y),computedStyles:Zn,computedStylesObj:pt,nearbyElements:Gu(Y),reactComponents:Se!=null?Se:void 0,sourceFile:od(Y),targetElement:Y}),de(null)};return document.addEventListener("click",C,!0),()=>document.removeEventListener("click",C,!0)},[k,gn,tt,U,ne,Kt.blockInteractions,lo,Nn]),g.useEffect(()=>{if(!k)return;const C=L=>{L.key==="Meta"&&(Hn.current.cmd=!0),L.key==="Shift"&&(Hn.current.shift=!0)},M=L=>{const Y=Hn.current.cmd&&Hn.current.shift;L.key==="Meta"&&(Hn.current.cmd=!1),L.key==="Shift"&&(Hn.current.shift=!1);const ie=Hn.current.cmd&&Hn.current.shift;Y&&!ie&&Nn.length>0&&Li()},B=()=>{Hn.current={cmd:!1,shift:!1},Rs([])};return document.addEventListener("keydown",C),document.addEventListener("keyup",M),window.addEventListener("blur",B),()=>{document.removeEventListener("keydown",C),document.removeEventListener("keyup",M),window.removeEventListener("blur",B)}},[k,Nn,Li]),g.useEffect(()=>{if(!k||U||gn||tt)return;const C=M=>{const B=M.composedPath()[0]||M.target;Fo(B,"[data-feedback-toolbar]")||Fo(B,"[data-annotation-marker]")||Fo(B,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(B.tagName)||B.isContentEditable||(M.preventDefault(),xo.current={x:M.clientX,y:M.clientY})};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[k,U,gn,tt]),g.useEffect(()=>{if(!k||U)return;const C=M=>{if(!xo.current)return;const B=M.clientX-xo.current.x,L=M.clientY-xo.current.y,Y=B*B+L*L,ie=xe*xe;if(!Js&&Y>=ie&&(Cs.current=xo.current,ei(!0),M.preventDefault()),(Js||Y>=ie)&&Cs.current){if(Os.current){const qt=Math.min(Cs.current.x,M.clientX),Qt=Math.min(Cs.current.y,M.clientY),vs=Math.abs(M.clientX-Cs.current.x),Tn=Math.abs(M.clientY-Cs.current.y);Os.current.style.transform=`translate(${qt}px, ${Qt}px)`,Os.current.style.width=`${vs}px`,Os.current.style.height=`${Tn}px`}const Te=Date.now();if(Te-bo.current<Ce)return;bo.current=Te;const Se=Cs.current.x,Oe=Cs.current.y,rt=Math.min(Se,M.clientX),ut=Math.min(Oe,M.clientY),Et=Math.max(Se,M.clientX),Lt=Math.max(Oe,M.clientY),vt=(rt+Et)/2,pt=(ut+Lt)/2,Zn=new Set,xs=[[rt,ut],[Et,ut],[rt,Lt],[Et,Lt],[vt,pt],[vt,ut],[vt,Lt],[rt,pt],[Et,pt]];for(const[qt,Qt]of xs){const vs=document.elementsFromPoint(qt,Qt);for(const Tn of vs)Tn instanceof HTMLElement&&Zn.add(Tn)}const bs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const qt of bs)if(qt instanceof HTMLElement){const Qt=qt.getBoundingClientRect(),vs=Qt.left+Qt.width/2,Tn=Qt.top+Qt.height/2,ho=vs>=rt&&vs<=Et&&Tn>=ut&&Tn<=Lt,Oo=Math.min(Qt.right,Et)-Math.max(Qt.left,rt),cs=Math.min(Qt.bottom,Lt)-Math.max(Qt.top,ut),wi=Oo>0&&cs>0?Oo*cs:0,zi=Qt.width*Qt.height,$i=zi>0?wi/zi:0;(ho||$i>.5)&&Zn.add(qt)}const jn=[],Yn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const qt of Zn){if(Fo(qt,"[data-feedback-toolbar]")||Fo(qt,"[data-annotation-marker]"))continue;const Qt=qt.getBoundingClientRect();if(!(Qt.width>window.innerWidth*.8&&Qt.height>window.innerHeight*.5)&&!(Qt.width<10||Qt.height<10)&&Qt.left<Et&&Qt.right>rt&&Qt.top<Lt&&Qt.bottom>ut){const vs=qt.tagName;let Tn=Yn.has(vs);if(!Tn&&(vs==="DIV"||vs==="SPAN")){const ho=qt.textContent&&qt.textContent.trim().length>0,Oo=qt.onclick!==null||qt.getAttribute("role")==="button"||qt.getAttribute("role")==="link"||qt.classList.contains("clickable")||qt.hasAttribute("data-clickable");(ho||Oo)&&!qt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Tn=!0)}if(Tn){let ho=!1;for(const Oo of jn)if(Oo.left<=Qt.left&&Oo.right>=Qt.right&&Oo.top<=Qt.top&&Oo.bottom>=Qt.bottom){ho=!0;break}ho||jn.push(Qt)}}}if(Uo.current){const qt=Uo.current;for(;qt.children.length>jn.length;)qt.removeChild(qt.lastChild);jn.forEach((Qt,vs)=>{let Tn=qt.children[vs];Tn||(Tn=document.createElement("div"),Tn.className=Fe.selectedElementHighlight,qt.appendChild(Tn)),Tn.style.transform=`translate(${Qt.left}px, ${Qt.top}px)`,Tn.style.width=`${Qt.width}px`,Tn.style.height=`${Qt.height}px`})}}};return document.addEventListener("mousemove",C,{passive:!0}),()=>document.removeEventListener("mousemove",C)},[k,U,Js,xe]),g.useEffect(()=>{if(!k)return;const C=M=>{const B=Js,L=Cs.current;if(Js&&L){jo.current=!0;const Y=Math.min(L.x,M.clientX),ie=Math.min(L.y,M.clientY),Te=Math.max(L.x,M.clientX),Se=Math.max(L.y,M.clientY),Oe=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(vt=>{if(!(vt instanceof HTMLElement)||Fo(vt,"[data-feedback-toolbar]")||Fo(vt,"[data-annotation-marker]"))return;const pt=vt.getBoundingClientRect();pt.width>window.innerWidth*.8&&pt.height>window.innerHeight*.5||pt.width<10||pt.height<10||pt.left<Te&&pt.right>Y&&pt.top<Se&&pt.bottom>ie&&Oe.push({element:vt,rect:pt})});const ut=Oe.filter(({element:vt})=>!Oe.some(({element:pt})=>pt!==vt&&vt.contains(pt))),Et=M.clientX/window.innerWidth*100,Lt=M.clientY+window.scrollY;if(ut.length>0){const vt=ut.reduce((Yn,{rect:qt})=>({left:Math.min(Yn.left,qt.left),top:Math.min(Yn.top,qt.top),right:Math.max(Yn.right,qt.right),bottom:Math.max(Yn.bottom,qt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),pt=ut.slice(0,5).map(({element:Yn})=>ml(Yn).name).join(", "),Zn=ut.length>5?` +${ut.length-5} more`:"",xs=ut[0].element,bs=qu(xs),jn=Ku(xs);Q({x:Et,y:Lt,clientY:M.clientY,element:`${ut.length} elements: ${pt}${Zn}`,elementPath:"multi-select",boundingBox:{x:vt.left,y:vt.top+window.scrollY,width:vt.right-vt.left,height:vt.bottom-vt.top},isMultiSelect:!0,fullPath:Zu(xs),accessibility:Qu(xs),computedStyles:jn,computedStylesObj:bs,nearbyElements:Gu(xs),cssClasses:lc(xs),nearbyText:rc(xs),sourceFile:od(xs)})}else{const vt=Math.abs(Te-Y),pt=Math.abs(Se-ie);vt>20&&pt>20&&Q({x:Et,y:Lt,clientY:M.clientY,element:"Area selection",elementPath:`region at (${Math.round(Y)}, ${Math.round(ie)})`,boundingBox:{x:Y,y:ie+window.scrollY,width:vt,height:pt},isMultiSelect:!0})}de(null)}else B&&(jo.current=!0);xo.current=null,Cs.current=null,ei(!1),Uo.current&&(Uo.current.innerHTML="")};return document.addEventListener("mouseup",C),()=>document.removeEventListener("mouseup",C)},[k,Js]);const Lo=g.useCallback(async(C,M,B)=>{const L=Kt.webhookUrl||w;if(!L||!Kt.webhooksEnabled&&!B)return!1;try{return(await fetch(L,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:C,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...M})})).ok}catch(Y){return console.warn("[Agentation] Webhook failed:",Y),!1}},[w,Kt.webhookUrl,Kt.webhooksEnabled]),or=g.useCallback(C=>{var B;if(!U)return;const M={id:Date.now().toString(),x:U.x,y:U.y,comment:C,element:U.element,elementPath:U.elementPath,timestamp:Date.now(),selectedText:U.selectedText,boundingBox:U.boundingBox,nearbyText:U.nearbyText,cssClasses:U.cssClasses,isMultiSelect:U.isMultiSelect,isFixed:U.isFixed,fullPath:U.fullPath,accessibility:U.accessibility,computedStyles:U.computedStyles,nearbyElements:U.nearbyElements,reactComponents:U.reactComponents,sourceFile:U.sourceFile,elementBoundingBoxes:U.elementBoundingBoxes,..._&&Sn?{sessionId:Sn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};I(L=>[...L,M]),T.current=M.id,Ut(()=>{T.current=null},300),Ut(()=>{yo(L=>new Set(L).add(M.id))},250),a==null||a(M),Lo("annotation.add",{annotation:M}),Fn(!0),Ut(()=>{Q(null),Fn(!1)},150),(B=window.getSelection())==null||B.removeAllRanges(),_&&Sn&&rl(_,Sn,M).then(L=>{L.id!==M.id&&(I(Y=>Y.map(ie=>ie.id===M.id?{...ie,id:L.id}:ie)),yo(Y=>{const ie=new Set(Y);return ie.delete(M.id),ie.add(L.id),ie}))}).catch(L=>{console.warn("[Agentation] Failed to sync annotation:",L)})},[U,a,Lo,_,Sn]),Qi=g.useCallback(()=>{Fn(!0),Ut(()=>{Q(null),Fn(!1)},150)},[]),Zi=g.useCallback(C=>{const M=E.findIndex(L=>L.id===C),B=E[M];(ne==null?void 0:ne.id)===C&&(uo(!0),Ut(()=>{Me(null),Ue(null),nt([]),uo(!1)},150)),qe(C),En(L=>new Set(L).add(C)),B&&(c==null||c(B),Lo("annotation.delete",{annotation:B})),_&&Ka(_,C).catch(L=>{console.warn("[Agentation] Failed to delete annotation from server:",L)}),Ut(()=>{I(L=>L.filter(Y=>Y.id!==C)),En(L=>{const Y=new Set(L);return Y.delete(C),Y}),qe(null),M<E.length-1&&(ke(M),Ut(()=>ke(null),200))},150)},[E,ne,c,Lo,_]),Yo=g.useCallback(C=>{var M;if(!C){Ct(null),xt(null),Ke([]);return}if(Ct(C.id),(M=C.elementBoundingBoxes)!=null&&M.length){const B=[];for(const L of C.elementBoundingBoxes){const Y=L.x+L.width/2,ie=L.y+L.height/2-window.scrollY,Se=document.elementsFromPoint(Y,ie).find(Oe=>!Oe.closest("[data-annotation-marker]")&&!Oe.closest("[data-agentation-root]"));Se&&B.push(Se)}Ke(B),xt(null)}else if(C.boundingBox){const B=C.boundingBox,L=B.x+B.width/2,Y=C.isFixed?B.y+B.height/2:B.y+B.height/2-window.scrollY,ie=vr(L,Y);if(ie){const Te=ie.getBoundingClientRect(),Se=Te.width/B.width,Oe=Te.height/B.height;Se<.5||Oe<.5?xt(null):xt(ie)}else xt(null);Ke([])}else xt(null),Ke([])},[]),Oi=g.useCallback(C=>{if(!ne)return;const M={...ne,comment:C};I(B=>B.map(L=>L.id===ne.id?M:L)),u==null||u(M),Lo("annotation.update",{annotation:M}),_&&t1(_,ne.id,{comment:C}).catch(B=>{console.warn("[Agentation] Failed to update annotation on server:",B)}),uo(!0),Ut(()=>{Me(null),Ue(null),nt([]),uo(!1)},150)},[ne,u,Lo,_]),R=g.useCallback(()=>{uo(!0),Ut(()=>{Me(null),Ue(null),nt([]),uo(!1)},150)},[]),F=g.useCallback(()=>{const C=E.length,M=st.length>0||!!it;if(C===0&&dn.length===0&&!M)return;if(d==null||d(E),Lo("annotations.clear",{annotations:E}),_){Promise.all(E.map(Y=>Ka(_,Y.id).catch(ie=>{console.warn("[Agentation] Failed to delete annotation from server:",ie)})));for(const[,Y]of ys.current)Y&&Ka(_,Y).catch(()=>{});ys.current.clear();for(const[,Y]of Qn.current)Y&&Ka(_,Y).catch(()=>{});Qn.current.clear()}ot(!0),De(!0),Wn([]);const B=_o.current;if(B){const Y=B.getContext("2d");Y&&Y.clearRect(0,0,B.width,B.height)}(st.length>0||it)&&(ao(Y=>Y+1),yi(Y=>Y+1),Ut(()=>{et([]),rs(null)},200)),yt&&At(!1),Mn&&as(""),js.current={rearrange:null,placements:[]},td(We);const L=C*30+200;Ut(()=>{I([]),yo(new Set),localStorage.removeItem(Ed(We)),ot(!1)},L),Ut(()=>De(!1),1500)},[We,E,dn,st,it,yt,Mn,d,Lo,_]),ee=g.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:We,M=tt&&yt;let B;if(M){if(st.length===0&&!it&&!Mn)return;B=""}else{if(B=o1(E,C,Kt.outputDetail),!B&&dn.length===0&&st.length===0&&!it)return;B||(B=`## Page Feedback: ${C}
`)}if(!M&&dn.length>0){const L=new Set;for(const Se of E)Se.drawingIndex!=null&&L.add(Se.drawingIndex);const Y=_o.current;Y&&(Y.style.visibility="hidden");const ie=[],Te=window.scrollY;for(let Se=0;Se<dn.length;Se++){if(L.has(Se))continue;const Oe=dn[Se];if(Oe.points.length<2)continue;const rt=Oe.fixed?Oe.points:Oe.points.map(Jn=>({x:Jn.x,y:Jn.y-Te}));let ut=1/0,Et=1/0,Lt=-1/0,vt=-1/0;for(const Jn of rt)ut=Math.min(ut,Jn.x),Et=Math.min(Et,Jn.y),Lt=Math.max(Lt,Jn.x),vt=Math.max(vt,Jn.y);const pt=Lt-ut,Zn=vt-Et,xs=Math.hypot(pt,Zn),bs=rt[0],jn=rt[rt.length-1],Yn=Math.hypot(jn.x-bs.x,jn.y-bs.y);let qt;const Qt=Yn<xs*.35,vs=pt/Math.max(Zn,1);if(Qt&&xs>20){const Jn=Math.max(pt,Zn)*.15;let Ii=0;for(const Ji of rt){const Pc=Ji.x-ut<Jn,Wd=Lt-Ji.x<Jn,Fd=Ji.y-Et<Jn,Xd=vt-Ji.y<Jn;(Pc||Wd)&&(Fd||Xd)&&Ii++}qt=Ii>rt.length*.15?"box":"circle"}else vs>3&&Zn<40?qt="underline":Yn>xs*.5?qt="arrow":qt="drawing";const Tn=Math.min(10,rt.length),ho=Math.max(1,Math.floor(rt.length/Tn)),Oo=new Set,cs=[],wi=[bs];for(let Jn=ho;Jn<rt.length-1;Jn+=ho)wi.push(rt[Jn]);wi.push(jn);for(const Jn of wi){const Ii=vr(Jn.x,Jn.y);if(!Ii||Oo.has(Ii)||Fo(Ii,"[data-feedback-toolbar]"))continue;Oo.add(Ii);const{name:Ji}=ml(Ii);cs.includes(Ji)||cs.push(Ji)}const zi=`${Math.round(ut)},${Math.round(Et)} → ${Math.round(Lt)},${Math.round(vt)}`;let $i;(qt==="circle"||qt==="box")&&cs.length>0?$i=`${qt==="box"?"Boxed":"Circled"} **${cs[0]}**${cs.length>1?` (and ${cs.slice(1).join(", ")})`:""} (region: ${zi})`:qt==="underline"&&cs.length>0?$i=`Underlined **${cs[0]}** (${zi})`:qt==="arrow"&&cs.length>=2?$i=`Arrow from **${cs[0]}** to **${cs[cs.length-1]}** (${Math.round(bs.x)},${Math.round(bs.y)} → ${Math.round(jn.x)},${Math.round(jn.y)})`:cs.length>0?$i=`${qt==="arrow"?"Arrow":"Drawing"} near **${cs.join("**, **")}** (region: ${zi})`:$i=`Drawing at ${zi}`,ie.push($i)}Y&&(Y.style.visibility=""),ie.length>0&&(B+=`
**Drawings:**
`,ie.forEach((Se,Oe)=>{B+=`${Oe+1}. ${Se}
`}))}if((st.length>0||M&&Mn)&&(B+=`
`+Qy(st,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:yt,wireframePurpose:Mn||void 0},Kt.outputDetail)),it){const L=Zy(it,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});L&&(B+=`
`+L)}if(y)try{await navigator.clipboard.writeText(B)}catch{}h==null||h(B),N(!0),Ut(()=>N(!1),2e3),Kt.autoClearAfterCopy&&Ut(()=>F(),500)},[E,dn,st,it,yt,tt,In,Mn,We,Kt.outputDetail,lo,Kt.autoClearAfterCopy,F,y,h]),ue=g.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:We;let M=o1(E,C,Kt.outputDetail);if(!M&&st.length===0&&!it)return;if(M||(M=`## Page Feedback: ${C}
`),st.length>0&&(M+=`
`+Qy(st,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:yt,wireframePurpose:Mn||void 0},Kt.outputDetail)),it){const L=Zy(it,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});L&&(M+=`
`+L)}p&&p(M,E),oe("sending"),await new Promise(L=>Ut(L,150));const B=await Lo("submit",{output:M,annotations:E},!0);oe(B?"sent":"failed"),Ut(()=>oe("idle"),2500),B&&Kt.autoClearAfterCopy&&Ut(()=>F(),500)},[p,Lo,E,st,it,yt,In,We,Kt.outputDetail,lo,Kt.autoClearAfterCopy,F]);g.useEffect(()=>{if(!hs)return;const C=10,M=L=>{const Y=L.clientX-hs.x,ie=L.clientY-hs.y,Te=Math.sqrt(Y*Y+ie*ie);if(!Ws&&Te>C&&Ls(!0),Ws||Te>C){let Se=hs.toolbarX+Y,Oe=hs.toolbarY+ie;const rt=20,ut=337,Et=44,vt=ut-(k?Bs==="connected"?297:257:44),pt=rt-vt,Zn=window.innerWidth-rt-ut;Se=Math.max(pt,Math.min(Zn,Se)),Oe=Math.max(rt,Math.min(window.innerHeight-Et-rt,Oe)),Ys({x:Se,y:Oe})}},B=()=>{Ws&&(Zs.current=!0),Ls(!1),Ro(null)};return document.addEventListener("mousemove",M),document.addEventListener("mouseup",B),()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",B)}},[hs,Ws,k,Bs]);const Ve=g.useCallback(C=>{var ie,Te;if(C.target.closest("button")||C.target.closest("[data-agentation-settings-panel]"))return;const M=C.currentTarget.parentElement;if(!M)return;const B=M.getBoundingClientRect(),L=(ie=rn==null?void 0:rn.x)!=null?ie:B.left,Y=(Te=rn==null?void 0:rn.y)!=null?Te:B.top;Ro({x:C.clientX,y:C.clientY,toolbarX:L,toolbarY:Y})},[rn]);if(g.useEffect(()=>{if(!rn)return;const C=()=>{let Y=rn.x,ie=rn.y;const Oe=20-(337-(k?Bs==="connected"?297:257:44)),rt=window.innerWidth-20-337;Y=Math.max(Oe,Math.min(rt,Y)),ie=Math.max(20,Math.min(window.innerHeight-44-20,ie)),(Y!==rn.x||ie!==rn.y)&&Ys({x:Y,y:ie})};return C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[rn,k,Bs]),g.useEffect(()=>{const C=M=>{const B=M.target,L=B.tagName==="INPUT"||B.tagName==="TEXTAREA"||B.isContentEditable;if(M.key==="Escape"){if(tt){Dt?bt(null):Cn();return}if(gn){Pn(!1);return}if(Nn.length>0){Rs([]);return}U||k&&(ls(),j(!1))}if((M.metaKey||M.ctrlKey)&&M.shiftKey&&(M.key==="f"||M.key==="F")){M.preventDefault(),ls(),k?kn():j(!0);return}if(!(L||M.metaKey||M.ctrlKey)&&((M.key==="p"||M.key==="P")&&(M.preventDefault(),ls(),ci()),(M.key==="l"||M.key==="L")&&(M.preventDefault(),ls(),gn&&Pn(!1),be&&Je(!1),U&&Qi(),tt?Cn():Ot(!0)),(M.key==="h"||M.key==="H")&&E.length>0&&(M.preventDefault(),ls(),D(Y=>!Y)),(M.key==="c"||M.key==="C")&&(E.length>0||st.length>0||it)&&(M.preventDefault(),ls(),ee()),(M.key==="x"||M.key==="X")&&(E.length>0||st.length>0||it)&&(M.preventDefault(),ls(),F(),st.length>0&&et([]),it&&rs(null)),M.key==="s"||M.key==="S")){const Y=oa(Kt.webhookUrl)||oa(w||"");E.length>0&&Y&&ae==="idle"&&(M.preventDefault(),ls(),ue())}};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[k,gn,tt,Dt,st,it,U,E.length,Kt.webhookUrl,w,ae,ue,ci,ee,F,Nn]),!at||W)return null;const lt=E.length>0,ht=E.filter(C=>!Bo.has(C.id)&&C.kind!=="placement"&&C.kind!=="rearrange"),Ft=ht.length>0,yn=E.filter(C=>Bo.has(C.id)),As=C=>{const ie=C.x/100*window.innerWidth,Te=typeof C.y=="string"?parseFloat(C.y):C.y,Se={};window.innerHeight-Te-22-10<80&&(Se.top="auto",Se.bottom="calc(100% + 10px)");const rt=ie-200/2,ut=10;if(rt<ut){const Et=ut-rt;Se.left=`calc(50% + ${Et}px)`}else if(rt+200>window.innerWidth-ut){const Et=rt+200-(window.innerWidth-ut);Se.left=`calc(50% - ${Et}px)`}return Se};return Bc.createPortal(l.jsxs("div",{ref:K,style:{display:"contents"},"data-agentation-theme":Us?"dark":"light","data-agentation-accent":Kt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Fe.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:rn?{left:rn.x,top:rn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Fe.toolbarContainer} ${k?Fe.expanded:Fe.collapsed} ${bi?Fe.entrance:""} ${X?Fe.hiding:""} ${!Kt.webhooksEnabled&&(oa(Kt.webhookUrl)||oa(w||""))?Fe.serverConnected:""}`,onClick:k?void 0:C=>{if(Zs.current){Zs.current=!1,C.preventDefault();return}j(!0)},onMouseDown:Ve,role:k?void 0:"button",tabIndex:k?-1:0,title:k?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Fe.toggleContent} ${k?Fe.hidden:Fe.visible}`,children:[l.jsx(fS,{size:24}),Ft&&l.jsx("span",{className:`${Fe.badge} ${k?Fe.fadeOut:""} ${bi?Fe.entrance:""}`,children:ht.length})]}),l.jsxs("div",{className:`${Fe.controlsContent} ${k?Fe.visible:Fe.hidden} ${rn&&rn.y<100?Fe.tooltipBelow:""} ${Gt||be?Fe.tooltipsHidden:""} ${Jo?Fe.tooltipsInSession:""}`,onMouseEnter:Po,onMouseLeave:qi,children:[l.jsxs("div",{className:`${Fe.buttonWrapper} ${rn&&rn.x<120?Fe.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Fe.controlButton,onClick:C=>{C.stopPropagation(),ls(),ci()},"data-active":Z,children:l.jsx(gS,{size:24,isPaused:Z})}),l.jsxs("span",{className:Fe.buttonTooltip,children:[Z?"Resume animations":"Pause animations",l.jsx("span",{className:Fe.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:`${Fe.controlButton} ${Us?"":Fe.light}`,onClick:C=>{C.stopPropagation(),ls(),gn&&Pn(!1),be&&Je(!1),U&&Qi(),tt?Cn():Ot(!0)},"data-active":tt,style:tt&&yt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(jS,{size:21})}),l.jsxs("span",{className:Fe.buttonTooltip,children:[tt?"Exit layout mode":"Layout mode",l.jsx("span",{className:Fe.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:Fe.controlButton,onClick:C=>{C.stopPropagation(),ls(),D(!O)},disabled:!lt||tt,children:l.jsx(_S,{size:24,isOpen:O})}),l.jsxs("span",{className:Fe.buttonTooltip,children:[O?"Hide markers":"Show markers",l.jsx("span",{className:Fe.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:`${Fe.controlButton} ${_e?Fe.statusShowing:""}`,onClick:C=>{C.stopPropagation(),ls(),ee()},disabled:tt&&yt?st.length===0&&!((vo=it==null?void 0:it.sections)!=null&&vo.length):!lt&&dn.length===0&&st.length===0&&!(($s=it==null?void 0:it.sections)!=null&&$s.length),"data-active":_e,children:l.jsx(mS,{size:24,copied:_e,tint:tt&&yt&&(st.length>0||(Vt=it==null?void 0:it.sections)!=null&&Vt.length)?"#f97316":void 0})}),l.jsxs("span",{className:Fe.buttonTooltip,children:[tt&&yt?"Copy layout":"Copy feedback",l.jsx("span",{className:Fe.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Fe.buttonWrapper} ${Fe.sendButtonWrapper} ${k&&!Kt.webhooksEnabled&&(oa(Kt.webhookUrl)||oa(w||""))?Fe.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Fe.controlButton} ${ae==="sent"||ae==="failed"?Fe.statusShowing:""}`,onClick:C=>{C.stopPropagation(),ls(),ue()},disabled:!lt||!oa(Kt.webhookUrl)&&!oa(w||"")||ae==="sending","data-no-hover":ae==="sent"||ae==="failed",tabIndex:oa(Kt.webhookUrl)||oa(w||"")?0:-1,children:[l.jsx(pS,{size:24,state:ae}),lt&&ae==="idle"&&l.jsx("span",{className:Fe.buttonBadge,children:E.length})]}),l.jsxs("span",{className:Fe.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Fe.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:Fe.controlButton,onClick:C=>{C.stopPropagation(),ls(),F()},disabled:!lt&&dn.length===0&&st.length===0&&!((Rn=it==null?void 0:it.sections)!=null&&Rn.length),"data-danger":!0,children:l.jsx(xS,{size:24})}),l.jsxs("span",{className:Fe.buttonTooltip,children:["Clear all",l.jsx("span",{className:Fe.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Fe.buttonWrapper,children:[l.jsx("button",{className:Fe.controlButton,onClick:C=>{C.stopPropagation(),ls(),tt&&Cn(),Je(!be)},children:l.jsx(yS,{size:24})}),_&&Bs!=="disconnected"&&l.jsx("span",{className:`${Fe.mcpIndicator} ${Fe[Bs]} ${be?Fe.hidden:""}`,title:Bs==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Fe.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Fe.divider}),l.jsxs("div",{className:`${Fe.buttonWrapper} ${rn&&typeof window<"u"&&rn.x>window.innerWidth-120?Fe.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Fe.controlButton,onClick:C=>{C.stopPropagation(),ls(),kn()},children:l.jsx(bS,{size:24})}),l.jsxs("span",{className:Fe.buttonTooltip,children:["Exit",l.jsx("span",{className:Fe.shortcut,children:"Esc"})]})]})]}),l.jsx(t6,{visible:tt&&k,activeType:Dt,onSelect:C=>{bt(Dt===C?null:C)},isDarkMode:Us,sectionCount:(hn=it==null?void 0:it.sections.length)!=null?hn:0,onDetectSections:()=>{var Te,Se;const C=f6(),M=(Te=it==null?void 0:it.sections)!=null?Te:[],B=new Set(M.map(Oe=>Oe.selector)),L=C.filter(Oe=>!B.has(Oe.selector)),Y=[...M,...L],ie=[...(Se=it==null?void 0:it.originalOrder)!=null?Se:[],...L.map(Oe=>Oe.id)];rs({sections:Y,originalOrder:ie,detectedAt:Date.now()})},placementCount:st.length,onClearPlacements:()=>{ao(C=>C+1),yi(C=>C+1),Ut(()=>{rs({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:yt,onBlankCanvasChange:C=>{const M={sections:[],originalOrder:[],detectedAt:Date.now()};C?(Kn.current={rearrange:it,placements:st},rs(js.current.rearrange||M),et(js.current.placements),bt(null)):(js.current={rearrange:it,placements:st},rs(Kn.current.rearrange||M),et(Kn.current.placements)),At(C)},wireframePurpose:Mn,onWireframePurposeChange:as,Tooltip:Mr,onDragStart:(C,M)=>{var Et;M.preventDefault();const B=kt[C];let L=null,Y=!1;const ie=M.clientX,Te=M.clientY,Se=M.target.closest("[data-feedback-toolbar]"),Oe=(Et=Se==null?void 0:Se.getBoundingClientRect().top)!=null?Et:window.innerHeight,rt=Lt=>{const vt=Lt.clientX-ie,pt=Lt.clientY-Te;if(!Y&&(Math.abs(vt)>4||Math.abs(pt)>4)&&(Y=!0,L=document.createElement("div"),L.className=`${Re.dragPreview}${yt?` ${Re.dragPreviewWireframe}`:""}`,document.body.appendChild(L)),!L)return;const Zn=Math.max(0,Oe-Lt.clientY),xs=Math.min(1,Zn/180),bs=1-Math.pow(1-xs,2),jn=28,Yn=20,qt=Math.min(140,B.width*.18),Qt=Math.min(90,B.height*.18),vs=jn+(qt-jn)*bs,Tn=Yn+(Qt-Yn)*bs;L.style.width=`${vs}px`,L.style.height=`${Tn}px`,L.style.left=`${Lt.clientX-vs/2}px`,L.style.top=`${Lt.clientY-Tn/2}px`,L.style.opacity=`${.5+.5*bs}`,L.textContent=bs>.25?C:""},ut=Lt=>{if(window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",ut),L&&document.body.removeChild(L),Y){const vt=B.width,pt=B.height,Zn=window.scrollY,xs=Math.max(0,Lt.clientX-vt/2),bs=Math.max(0,Lt.clientY+Zn-pt/2),jn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:C,x:xs,y:bs,width:vt,height:pt,scrollY:Zn,timestamp:Date.now()};et(Yn=>[...Yn,jn]),bt(null),Ds.current=new Set,qs(Yn=>Yn+1)}};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",ut)}}),l.jsx(vC,{settings:Kt,onSettingsChange:C=>Ks(M=>({...M,...C})),isDarkMode:Us,onToggleTheme:Qs,isDevMode:vi,connectionStatus:Bs,endpoint:_,isVisible:Ge,toolbarNearBottom:!!rn&&rn.y<230,settingsPage:wt,onSettingsPageChange:He,onHideToolbar:tn})]})}),(tt||Ht)&&l.jsx("div",{className:`${Re.blankCanvas} ${an?Re.visible:""} ${cn?Re.gridActive:""}`,style:{"--canvas-opacity":vn},"data-feedback-toolbar":!0}),tt&&yt&&an&&l.jsxs("div",{className:Re.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Re.wireframeOpacityRow,children:[l.jsx("span",{className:Re.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Re.wireframeOpacitySlider,min:0,max:1,step:.01,value:vn,onChange:C=>is(Number(C.target.value))})]}),l.jsxs("div",{className:Re.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Re.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Re.wireframeNoticeDivider}),l.jsx("button",{className:Re.wireframeStartOver,onClick:()=>{ao(C=>C+1),rs({sections:[],originalOrder:[],detectedAt:Date.now()}),js.current={rearrange:null,placements:[]},as(""),td(We)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(tt||Ht)&&l.jsx(K4,{placements:st,onChange:et,activeComponent:Ht?null:Dt,onActiveComponentChange:bt,isDarkMode:Us,exiting:Ht,onInteractionChange:Dn,passthrough:!Dt,extraSnapRects:it==null?void 0:it.sections.map(C=>C.currentRect),deselectSignal:Ms,clearSignal:Io,wireframe:yt,onSelectionChange:(C,M)=>{Ds.current=C,M||(Ns.current=new Set,So(B=>B+1))},onDragMove:(C,M)=>{const B=Ns.current;if(!(!B.size||!it)){if(!gs.current){gs.current=new Map;for(const L of it.sections)B.has(L.id)&&gs.current.set(L.id,{x:L.currentRect.x,y:L.currentRect.y})}for(const L of it.sections){if(!B.has(L.id)||!gs.current.get(L.id))continue;const ie=document.querySelector(`[data-rearrange-section="${L.id}"]`);ie&&(ie.style.transform=`translate(${C}px, ${M}px)`)}}},onDragEnd:(C,M,B)=>{const L=Ns.current,Y=gs.current;if(gs.current=null,!(!L.size||!it||!Y)){for(const ie of L){const Te=document.querySelector(`[data-rearrange-section="${ie}"]`);Te&&(Te.style.transform="")}B&&rs(ie=>ie&&{...ie,sections:ie.sections.map(Te=>{const Se=Y.get(Te.id);return Se?{...Te,currentRect:{...Te.currentRect,x:Math.max(0,Se.x+C),y:Math.max(0,Se.y+M)}}:Te})})}}}),(tt||Ht)&&it&&l.jsx(p6,{rearrangeState:it,onChange:rs,isDarkMode:Us,exiting:Ht,blankCanvas:yt,extraSnapRects:st.map(C=>({x:C.x,y:C.y,width:C.width,height:C.height})),clearSignal:un,deselectSignal:_s,onSelectionChange:(C,M)=>{Ns.current=C,M||(Ds.current=new Set,qs(B=>B+1))},onDragMove:(C,M)=>{const B=Ds.current;if(B.size){if(!gs.current){gs.current=new Map;for(const L of st)B.has(L.id)&&gs.current.set(L.id,{x:L.x,y:L.y})}for(const L of B){const Y=document.querySelector(`[data-design-placement="${L}"]`);Y&&(Y.style.transform=`translate(${C}px, ${M}px)`)}}},onDragEnd:(C,M,B)=>{const L=Ds.current,Y=gs.current;if(gs.current=null,!(!L.size||!Y)){for(const ie of L){const Te=document.querySelector(`[data-design-placement="${ie}"]`);Te&&(Te.style.transform="")}B&&et(ie=>ie.map(Te=>{const Se=Y.get(Te.id);return Se?{...Te,x:Math.max(0,Se.x+C),y:Math.max(0,Se.y+M)}:Te}))}}}),l.jsx("canvas",{ref:_o,className:`${Fe.drawCanvas} ${gn?Fe.active:""}`,style:{opacity:Bt?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Fe.markersLayer,"data-feedback-toolbar":!0,children:[re&&ht.filter(C=>!C.isFixed).map((C,M,B)=>l.jsx(i1,{annotation:C,globalIndex:ht.findIndex(L=>L.id===C.id),layerIndex:M,layerSize:B.length,isExiting:je,isClearing:ze,isAnimated:Co.has(C.id),isHovered:!je&&ct===C.id,isDeleting:Wt===C.id,isEditingAny:!!ne,renumberFrom:_t,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:As(C),onHoverEnter:L=>!je&&L.id!==T.current&&Yo(L),onHoverLeave:()=>Yo(null),onClick:L=>Kt.markerClickBehavior==="delete"?Zi(L.id):Ki(L),onContextMenu:Ki},C.id)),re&&!je&&yn.filter(C=>!C.isFixed).map(C=>l.jsx(a1,{annotation:C},C.id))]}),l.jsxs("div",{className:Fe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[re&&ht.filter(C=>C.isFixed).map((C,M,B)=>l.jsx(i1,{annotation:C,globalIndex:ht.findIndex(L=>L.id===C.id),layerIndex:M,layerSize:B.length,isExiting:je,isClearing:ze,isAnimated:Co.has(C.id),isHovered:!je&&ct===C.id,isDeleting:Wt===C.id,isEditingAny:!!ne,renumberFrom:_t,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:As(C),onHoverEnter:L=>!je&&L.id!==T.current&&Yo(L),onHoverLeave:()=>Yo(null),onClick:L=>Kt.markerClickBehavior==="delete"?Zi(L.id):Ki(L),onContextMenu:Ki},C.id)),re&&!je&&yn.filter(C=>C.isFixed).map(C=>l.jsx(a1,{annotation:C,fixed:!0},C.id))]}),k&&l.jsxs("div",{className:Fe.overlay,"data-feedback-toolbar":!0,style:U||ne?{zIndex:99999}:void 0,children:[(J==null?void 0:J.rect)&&!U&&!gt&&!Js&&l.jsx("div",{className:`${Fe.hoverHighlight} ${Fe.enter}`,style:{left:J.rect.left,top:J.rect.top,width:J.rect.width,height:J.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Nn.filter(C=>document.contains(C.element)).map((C,M)=>{const B=C.element.getBoundingClientRect(),L=Nn.length>1;return l.jsx("div",{className:L?Fe.multiSelectOutline:Fe.singleSelectOutline,style:{position:"fixed",left:B.left,top:B.top,width:B.width,height:B.height,...L?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},M)}),ct&&!U&&(()=>{var Y;const C=E.find(ie=>ie.id===ct);if(!(C!=null&&C.boundingBox))return null;if((Y=C.elementBoundingBoxes)!=null&&Y.length)return mt.length>0?mt.filter(ie=>document.contains(ie)).map((ie,Te)=>{const Se=ie.getBoundingClientRect();return l.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:Se.left,top:Se.top,width:Se.width,height:Se.height}},`hover-outline-live-${Te}`)}):C.elementBoundingBoxes.map((ie,Te)=>l.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:ie.x,top:ie.y-ft,width:ie.width,height:ie.height}},`hover-outline-${Te}`));const M=Yt&&document.contains(Yt)?Yt.getBoundingClientRect():null,B=M?{x:M.left,y:M.top,width:M.width,height:M.height}:{x:C.boundingBox.x,y:C.isFixed?C.boundingBox.y:C.boundingBox.y-ft,width:C.boundingBox.width,height:C.boundingBox.height},L=C.isMultiSelect;return l.jsx("div",{className:`${L?Fe.multiSelectOutline:Fe.singleSelectOutline} ${Fe.enter}`,style:{left:B.x,top:B.y,width:B.width,height:B.height,...L?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),J&&!U&&!gt&&!Js&&l.jsxs("div",{className:`${Fe.hoverTooltip} ${Fe.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(J.reactComponents?48:32),8)},children:[J.reactComponents&&l.jsx("div",{className:Fe.hoverReactPath,children:J.reactComponents}),l.jsx("div",{className:Fe.hoverElementName,children:J.elementName})]}),U&&l.jsxs(l.Fragment,{children:[(he=U.multiSelectElements)!=null&&he.length?U.multiSelectElements.filter(C=>document.contains(C)).map((C,M)=>{const B=C.getBoundingClientRect();return l.jsx("div",{className:`${Fe.multiSelectOutline} ${Un?Fe.exit:Fe.enter}`,style:{left:B.left,top:B.top,width:B.width,height:B.height}},`pending-multi-${M}`)}):U.targetElement&&document.contains(U.targetElement)?(()=>{const C=U.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Fe.singleSelectOutline} ${Un?Fe.exit:Fe.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():U.boundingBox&&l.jsx("div",{className:`${U.isMultiSelect?Fe.multiSelectOutline:Fe.singleSelectOutline} ${Un?Fe.exit:Fe.enter}`,style:{left:U.boundingBox.x,top:U.boundingBox.y-ft,width:U.boundingBox.width,height:U.boundingBox.height,...U.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const C=U.x,M=U.isFixed?U.y:U.y-ft;return l.jsxs(l.Fragment,{children:[l.jsx(dC,{x:C,y:M,isMultiSelect:U.isMultiSelect,isExiting:Un}),l.jsx(jd,{ref:Qe,element:U.element,selectedText:U.selectedText,computedStyles:U.computedStylesObj,placeholder:U.element==="Area selection"?"What should change in this area?":U.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:or,onCancel:Qi,isExiting:Un,lightMode:!Us,accentColor:U.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,C/100*window.innerWidth)),...M>window.innerHeight-290?{bottom:window.innerHeight-M+20}:{top:M+20}}})]})})()]}),ne&&l.jsxs(l.Fragment,{children:[($e=ne.elementBoundingBoxes)!=null&&$e.length?Ye.length>0?Ye.filter(C=>document.contains(C)).map((C,M)=>{const B=C.getBoundingClientRect();return l.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:B.left,top:B.top,width:B.width,height:B.height}},`edit-multi-live-${M}`)}):ne.elementBoundingBoxes.map((C,M)=>l.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:C.x,top:C.y-ft,width:C.width,height:C.height}},`edit-multi-${M}`)):(()=>{const C=Xe&&document.contains(Xe)?Xe.getBoundingClientRect():null,M=C?{x:C.left,y:C.top,width:C.width,height:C.height}:ne.boundingBox?{x:ne.boundingBox.x,y:ne.isFixed?ne.boundingBox.y:ne.boundingBox.y-ft,width:ne.boundingBox.width,height:ne.boundingBox.height}:null;return M?l.jsx("div",{className:`${ne.isMultiSelect?Fe.multiSelectOutline:Fe.singleSelectOutline} ${Fe.enter}`,style:{left:M.x,top:M.y,width:M.width,height:M.height,...ne.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:Ze,element:ne.element,selectedText:ne.selectedText,computedStyles:l6(ne.computedStyles),placeholder:"Edit your feedback...",initialValue:ne.comment,submitLabel:"Save",onSubmit:Oi,onCancel:R,onDelete:()=>Zi(ne.id),isExiting:ko,lightMode:!Us,accentColor:ne.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const C=ne.isFixed?ne.y:ne.y-ft;return{left:Math.max(160,Math.min(window.innerWidth-160,ne.x/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})()})]}),Js&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Os,className:Fe.dragSelection}),l.jsx("div",{ref:Uo,className:Fe.highlightsContainer})]})]})]}),document.body)}const gp=g.createContext({});function Lc(t){const n=g.useRef(null);return n.current===null&&(n.current=t()),n.current}const CC=typeof window<"u",yp=CC?g.useLayoutEffect:g.useEffect,zd=g.createContext(null);function xp(t,n){t.indexOf(n)===-1&&t.push(n)}function _l(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ca=(t,n,i)=>i>n?n:i<t?t:i;let bp=()=>{};const tr={},db=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function fb(t){return typeof t=="object"&&t!==null}const hb=t=>/^0[^.\s]+$/u.test(t);function mb(t){let n;return()=>(n===void 0&&(n=t()),n)}const Ri=t=>t,kC=(t,n)=>i=>n(t(i)),Oc=(...t)=>t.reduce(kC),gl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class vp{constructor(){this.subscriptions=[]}add(n){return xp(this.subscriptions,n),()=>_l(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ri=t=>t*1e3,Ni=t=>t/1e3;function pb(t,n){return n?t*(1e3/n):0}const jC=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},_b=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,MC=1e-7,EC=12;function TC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=_b(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>MC&&++h<EC);return d}function zc(t,n,i,a){if(t===n&&i===a)return Ri;const c=u=>TC(u,0,1,t,i);return u=>u===0||u===1?u:_b(c(u),n,a)}const gb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,yb=t=>n=>1-t(1-n),xb=zc(.33,1.53,.69,.99),wp=yb(xb),bb=gb(wp),vb=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),wb=yb(Sp),Sb=gb(Sp),AC=zc(.42,0,1,1),DC=zc(0,0,.58,1),Cb=zc(.42,0,.58,1),kb=t=>Array.isArray(t)&&typeof t[0]!="number";function jb(t,n){return kb(t)?t[jC(0,t.length,n)]:t}const Mb=t=>Array.isArray(t)&&typeof t[0]=="number",NC={linear:Ri,easeIn:AC,easeInOut:Cb,easeOut:DC,circIn:Sp,circInOut:Sb,circOut:wb,backIn:wp,backInOut:bb,backOut:xb,anticipate:vb},RC=t=>typeof t=="string",u1=t=>{if(Mb(t)){bp(t.length===4);const[n,i,a,c]=t;return zc(n,i,a,c)}else if(RC(t))return NC[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function BC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(y.schedule(_),t()),_(h)}const y={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(_))}};return y}const LC=40;function Eb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((O,D)=>(O[D]=BC(u),O),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,k=()=>{const O=tr.useManualTiming,D=O?c.timestamp:performance.now();i=!1,O||(c.delta=a?1e3/60:Math.max(Math.min(D-c.timestamp,LC),1)),c.timestamp=D,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(k))},j=()=>{i=!0,a=!0,c.isProcessing||t(k)};return{schedule:id.reduce((O,D)=>{const W=d[D];return O[D]=(H,X=!1,P=!1)=>(i||j(),W.schedule(H,X,P)),O},{}),cancel:O=>{for(let D=0;D<id.length;D++)d[id[D]].cancel(O)},state:c,steps:d}}const{schedule:os,cancel:ja,state:Do,steps:cm}=Eb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ri,!0);let pd;function OC(){pd=void 0}const Go={now:()=>(pd===void 0&&Go.set(Do.isProcessing||tr.useManualTiming?Do.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(OC)}},Tb=t=>n=>typeof n=="string"&&n.startsWith(t),Ab=Tb("--"),zC=Tb("var(--"),Cp=t=>zC(t)?$C.test(t.split("/*")[0].trim()):!1,$C=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function d1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const vl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...vl,transform:t=>ca(0,1,t)},ad={...vl,default:1},wc=t=>Math.round(t*1e5)/1e5,kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function IC(t){return t==null}const PC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jp=(t,n)=>i=>!!(typeof i=="string"&&PC.test(i)&&i.startsWith(t)||n&&!IC(i)&&Object.prototype.hasOwnProperty.call(i,n)),Db=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(kp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},HC=t=>ca(0,255,t),um={...vl,transform:t=>Math.round(HC(t))},Er={test:jp("rgb","red"),parse:Db("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+um.transform(t)+", "+um.transform(n)+", "+um.transform(i)+", "+wc(Tc.transform(a))+")"};function VC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const zm={test:jp("#"),parse:VC,transform:Er.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Qa=$c("deg"),la=$c("%"),Tt=$c("px"),UC=$c("vh"),YC=$c("vw"),f1={...la,parse:t=>la.parse(t)/100,transform:t=>la.transform(t*100)},dl={test:jp("hsl","hue"),parse:Db("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+la.transform(wc(n))+", "+la.transform(wc(i))+", "+wc(Tc.transform(a))+")"},io={test:t=>Er.test(t)||zm.test(t)||dl.test(t),parse:t=>Er.test(t)?Er.parse(t):dl.test(t)?dl.parse(t):zm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Er.transform(t):dl.transform(t),getAnimatableNone:t=>{const n=io.parse(t);return n.alpha=0,io.transform(n)}},WC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function FC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(kp))==null?void 0:n.length)||0)+(((i=t.match(WC))==null?void 0:i.length)||0)>0}const Nb="number",Rb="color",XC="var",GC="var(",h1="${}",qC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(qC,p=>(io.test(p)?(a.color.push(u),c.push(Rb),i.push(io.parse(p))):p.startsWith(GC)?(a.var.push(u),c.push(XC),i.push(p)):(a.number.push(u),c.push(Nb),i.push(parseFloat(p))),++u,h1)).split(h1);return{values:i,split:h,indexes:a,types:c}}function KC(t){return yl(t).values}function Bb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Nb?c+=wc(a[u]):d===Rb?c+=io.transform(a[u]):c+=a[u]}return c}}function QC(t){return Bb(yl(t))}const ZC=t=>typeof t=="number"?0:io.test(t)?io.getAnimatableNone(t):t,JC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:ZC(t);function e3(t){const n=yl(t);return Bb(n)(n.values.map((a,c)=>JC(a,n.split[c])))}const Xi={test:FC,parse:KC,createTransformer:QC,getAnimatableNone:e3};function dm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function t3({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=dm(p,h,t+1/3),u=dm(p,h,t),d=dm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const ps=(t,n,i)=>t+(n-t)*i,fm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},n3=[zm,Er,dl],s3=t=>n3.find(n=>n.test(t));function m1(t){const n=s3(t);if(!n)return!1;let i=n.parse(t);return n===dl&&(i=t3(i)),i}const p1=(t,n)=>{const i=m1(t),a=m1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=fm(i.red,a.red,u),c.green=fm(i.green,a.green,u),c.blue=fm(i.blue,a.blue,u),c.alpha=ps(i.alpha,a.alpha,u),Er.transform(c))},$m=new Set(["none","hidden"]);function o3(t,n){return $m.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function i3(t,n){return i=>ps(t,n,i)}function Mp(t){return typeof t=="number"?i3:typeof t=="string"?Cp(t)?Td:io.test(t)?p1:l3:Array.isArray(t)?Lb:typeof t=="object"?io.test(t)?p1:a3:Td}function Lb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Mp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function a3(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Mp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function r3(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const l3=(t,n)=>{const i=Xi.createTransformer(n),a=yl(t),c=yl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?$m.has(t)&&!c.values.length||$m.has(n)&&!a.values.length?o3(t,n):Oc(Lb(r3(a,c),c.values),i):Td(t,n)};function Ob(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?ps(t,n,i):Mp(t)(t,n)}const c3=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>os.update(n,i),stop:()=>ja(n),now:()=>Do.isProcessing?Do.timestamp:Go.now()}},zb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function Ep(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function $b(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Ep(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Ni(c)}}const Vs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Im(t,n){return t*Math.sqrt(1-n*n)}const u3=12;function d3(t,n,i){let a=i;for(let c=1;c<u3;c++)a=a-t(a)/n(a);return a}const hm=.001;function f3({duration:t=Vs.duration,bounce:n=Vs.bounce,velocity:i=Vs.velocity,mass:a=Vs.mass}){let c,u,d=1-n;d=ca(Vs.minDamping,Vs.maxDamping,d),t=ca(Vs.minDuration,Vs.maxDuration,Ni(t)),d<1?(c=y=>{const _=y*d,x=_*t,b=_-i,w=Im(y,d),S=Math.exp(-x);return hm-b/w*S},u=y=>{const x=y*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(y,2)*t,S=Math.exp(-x),k=Im(Math.pow(y,2),d);return(-c(y)+hm>0?-1:1)*((b-w)*S)/k}):(c=y=>{const _=Math.exp(-y*t),x=(y-i)*t+1;return-hm+_*x},u=y=>{const _=Math.exp(-y*t),x=(i-y)*(t*t);return _*x});const h=5/t,p=d3(c,u,h);if(t=ri(t),isNaN(p))return{stiffness:Vs.stiffness,damping:Vs.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const h3=["duration","bounce"],m3=["stiffness","damping","mass"];function _1(t,n){return n.some(i=>t[i]!==void 0)}function p3(t){let n={velocity:Vs.velocity,stiffness:Vs.stiffness,damping:Vs.damping,mass:Vs.mass,isResolvedFromDuration:!1,...t};if(!_1(t,m3)&&_1(t,h3))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ca(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Vs.mass,stiffness:c,damping:u}}else{const i=f3({...t,velocity:0});n={...n,...i,mass:Vs.mass},n.isResolvedFromDuration=!0}return n}function Ac(t=Vs.visualDuration,n=Vs.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=p3({...i,velocity:-Ni(i.velocity||0)}),S=b||0,k=y/(2*Math.sqrt(p*_)),j=d-u,E=Ni(Math.sqrt(p/_)),I=Math.abs(j)<5;a||(a=I?Vs.restSpeed.granular:Vs.restSpeed.default),c||(c=I?Vs.restDelta.granular:Vs.restDelta.default);let O,D,W,H,X,P;if(k<1)W=Im(E,k),H=(S+k*E*j)/W,O=re=>{const se=Math.exp(-k*E*re);return d-se*(H*Math.sin(W*re)+j*Math.cos(W*re))},X=k*E*H+j*W,P=k*E*j-H*W,D=re=>Math.exp(-k*E*re)*(X*Math.sin(W*re)+P*Math.cos(W*re));else if(k===1){O=se=>d-Math.exp(-E*se)*(j+(S+E*j)*se);const re=S+E*j;D=se=>Math.exp(-E*se)*(E*re*se-S)}else{const re=E*Math.sqrt(k*k-1);O=J=>{const de=Math.exp(-k*E*J),z=Math.min(re*J,300);return d-de*((S+k*E*j)*Math.sinh(z)+re*j*Math.cosh(z))/re};const se=(S+k*E*j)/re,je=k*E*se-j*re,Pe=k*E*j-se*re;D=J=>{const de=Math.exp(-k*E*J),z=Math.min(re*J,300);return de*(je*Math.sinh(z)+Pe*Math.cosh(z))}}const K={calculatedDuration:w&&x||null,velocity:re=>ri(D(re)),next:re=>{if(!w&&k<1){const je=Math.exp(-k*E*re),Pe=Math.sin(W*re),J=Math.cos(W*re),de=d-je*(H*Pe+j*J),z=ri(je*(X*Pe+P*J));return h.done=Math.abs(z)<=a&&Math.abs(d-de)<=c,h.value=h.done?d:de,h}const se=O(re);if(w)h.done=re>=x;else{const je=ri(D(re));h.done=Math.abs(je)<=a&&Math.abs(d-se)<=c}return h.value=h.done?d:se,h},toString:()=>{const re=Math.min(Ep(K),Ad),se=zb(je=>K.next(re*je).value,re,30);return re+"ms "+se},toTransition:()=>{}};return K}Ac.applyToOptions=t=>{const n=$b(t,100,Ac);return t.ease=n.ease,t.duration=ri(n.duration),t.type="keyframes",t};const _3=5;function Ib(t,n,i){const a=Math.max(n-_3,0);return pb(i-t(a),n-a)}function Pm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=P=>h!==void 0&&P<h||p!==void 0&&P>p,S=P=>h===void 0?p:p===void 0||Math.abs(h-P)<Math.abs(p-P)?h:p;let k=i*n;const j=x+k,E=d===void 0?j:d(j);E!==j&&(k=E-x);const I=P=>-k*Math.exp(-P/a),O=P=>E+I(P),D=P=>{const K=I(P),re=O(P);b.done=Math.abs(K)<=y,b.value=b.done?E:re};let W,H;const X=P=>{w(b.value)&&(W=P,H=Ac({keyframes:[b.value,S(b.value)],velocity:Ib(O,P,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:_}))};return X(0),{calculatedDuration:null,next:P=>{let K=!1;return!H&&W===void 0&&(K=!0,D(P),X(P)),W!==void 0&&P>=W?H.next(P-W):(!K&&D(P),b)}}}function g3(t,n,i){const a=[],c=i||tr.mix||Ob,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Ri:n;h=Oc(p,h)}a.push(h)}return a}function Pb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(bp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=g3(n,a,c),p=h.length,y=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=gl(t[x],t[x+1],_);return h[x](b)};return i?_=>y(ca(t[0],t[u-1],_)):y}function Hb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=gl(0,n,a);t.push(ps(i,1,c))}}function Vb(t){const n=[0];return Hb(n,t.length-1),n}function y3(t,n){return t.map(i=>i*n)}function x3(t,n){return t.map(()=>n||Cb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=kb(a)?a.map(u1):u1(a),u={done:!1,value:n[0]},d=y3(i&&i.length===n.length?i:Vb(n),t),h=Pb(d,n,{ease:Array.isArray(c)?c:x3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const b3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(b3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const v3={decay:Pm,inertia:Pm,tween:Sc,keyframes:Sc,spring:Ac};function Ub(t){typeof t.type=="string"&&(t.type=v3[t.type])}class Tp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const w3=t=>t/100;class Dd extends Tp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Go.now()&&this.tick(Go.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Ub(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=Oc(w3,Ob(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Ep(y));const{calculatedDuration:_}=y;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:k,finalKeyframe:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const E=this.currentTime-y*(this.playbackSpeed>=0?1:-1),I=this.playbackSpeed>=0?E<0:E>c;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let O=this.currentTime,D=a;if(x){const P=Math.min(this.currentTime,c)/h;let K=Math.floor(P),re=P%1;!re&&P>=1&&(re=1),re===1&&K--,K=Math.min(K,x+1),!!(K%2)&&(b==="reverse"?(re=1-re,w&&(re-=w/h)):b==="mirror"&&(D=d)),O=ca(0,1,re)*h}let W;I?(this.delayState.value=_[0],W=this.delayState):W=D.next(O),u&&!I&&(W.value=u(W.value));let{done:H}=W;!I&&p!==null&&(H=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&H);return X&&S!==Pm&&(W.value=$d(_,this.options,j,this.speed)),k&&k(W.value),X&&this.finish(),W}then(n,i){return this.finished.then(n,i)}get duration(){return Ni(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ni(n)}get time(){return Ni(this.currentTime)}set time(n){n=ri(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ib(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Go.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Ni(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=c3,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Go.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function S3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Tr=t=>t*180/Math.PI,Hm=t=>{const n=Tr(Math.atan2(t[1],t[0]));return Vm(n)},C3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hm,rotateZ:Hm,skewX:t=>Tr(Math.atan(t[1])),skewY:t=>Tr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Vm=t=>(t=t%360,t<0&&(t+=360),t),g1=Hm,y1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),x1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),k3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:y1,scaleY:x1,scale:t=>(y1(t)+x1(t))/2,rotateX:t=>Vm(Tr(Math.atan2(t[6],t[5]))),rotateY:t=>Vm(Tr(Math.atan2(-t[2],t[0]))),rotateZ:g1,rotate:g1,skewX:t=>Tr(Math.atan(t[4])),skewY:t=>Tr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Um(t){return t.includes("scale")?1:0}function Ym(t,n){if(!t||t==="none")return Um(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=k3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=C3,c=h}if(!c)return Um(n);const u=a[n],d=c[1].split(",").map(M3);return typeof u=="function"?u(d):d[u]}const j3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Ym(i,n)};function M3(t){return parseFloat(t.trim())}const wl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sl=new Set(wl),b1=t=>t===vl||t===Tt,E3=new Set(["x","y","z"]),T3=wl.filter(t=>!E3.has(t));function A3(t){const n=[];return T3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const er={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Ym(n,"x"),y:(t,{transform:n})=>Ym(n,"y")};er.translateX=er.x;er.translateY=er.y;const Ar=new Set;let Wm=!1,Fm=!1,Xm=!1;function Yb(){if(Fm){const t=Array.from(Ar).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=A3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Fm=!1,Wm=!1,Ar.forEach(t=>t.complete(Xm)),Ar.clear()}function Wb(){Ar.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fm=!0)})}function D3(){Xm=!0,Wb(),Yb(),Xm=!1}class Ap{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ar.add(this),Wm||(Wm=!0,os.read(Wb),os.resolveKeyframes(Yb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}S3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Ar.delete(this)}cancel(){this.state==="scheduled"&&(Ar.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const N3=t=>t.startsWith("--");function Fb(t,n,i){N3(n)?t.style.setProperty(n,i):t.style[n]=i}const R3={};function Xb(t,n){const i=mb(t);return()=>{var a;return(a=R3[n])!=null?a:i()}}const B3=Xb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Gb=Xb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,v1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function qb(t,n){if(t)return typeof t=="function"?Gb()?zb(t,n):"ease-out":Mb(t)?gc(t):Array.isArray(t)?t.map(i=>qb(i,n)||v1.easeOut):v1[t]}function L3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const _={[n]:i};p&&(_.offset=p);const x=qb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(_,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function O3({type:t,...n}){var i,a;return Dp(t)&&Gb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Kb extends Tp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,bp(typeof n.type!="string");const y=O3(n);this.animation=L3(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),Fb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Ni(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Ni(n)}get time(){return Ni(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ri(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&B3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Ri):c(this)}}const Qb={anticipate:vb,backInOut:bb,circInOut:Sb};function z3(t){return t in Qb}function $3(t){typeof t.ease=="string"&&z3(t.ease)&&(t.ease=Qb[t.ease])}const mm=10;class I3 extends Kb{constructor(n){$3(n),Ub(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Dd({...d,autoplay:!1}),p=Math.max(mm,Go.now()-this.startTime),y=ca(0,mm,p-mm),_=h.sample(p).value,{name:x}=this.options;u&&x&&Fb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,_,y),h.stop()}}const w1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Xi.test(t)||t==="0")&&!t.startsWith("url("));function P3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function H3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=w1(c,n),h=w1(u,n);return!d||!h?!1:P3(t)||(i==="spring"||Dp(i))&&a}function Gm(t){t.duration=0,t.type="keyframes"}const Zb=new Set(["opacity","clipPath","filter","transform"]),V3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function U3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&V3.test(t[n]))return!0;return!1}const Y3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),W3=mb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function F3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:_}=n.owner.getProps();return W3()&&i&&(Zb.has(i)||Y3.has(i)&&U3(h))&&(i!=="transform"||!_)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const X3=40;class G3 extends Tp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:_,...x}){var S;super(),this.stop=()=>{var k,j;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(j=this.keyframeResolver)==null||j.cancel()},this.createdAt=Go.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Ap;this.keyframeResolver=new w(h,(k,j,E)=>this.onKeyframesResolved(k,j,b,!E),p,y,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var E,I;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:_}=a;this.resolvedAt=Go.now();let x=!0;H3(n,u,d,h)||(x=!1,(tr.instantAnimations||!p)&&(_==null||_($d(n,a,i))),n[0]=n[n.length-1],Gm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>X3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!y&&F3(w),k=(I=(E=w.motionValue)==null?void 0:E.owner)==null?void 0:I.current;let j;if(S)try{j=new I3({...w,element:k})}catch{j=new Dd(w)}else j=new Dd(w);j.finished.then(()=>{this.notifyFinished()}).catch(Ri),this.pendingTimeline&&(this.stopTimeline=j.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=j}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),D3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class q3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return S1(this.animations,"duration")}get iterationDuration(){return S1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function S1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class K3 extends q3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Jb(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,_)=>y.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const Q3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Z3(t){const n=Q3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function e5(t,n,i=1){const[a,c]=Z3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return db(d)?parseFloat(d):d}return Cp(c)?e5(c,n,i+1):c}const J3={type:"spring",stiffness:500,damping:25,restSpeed:10},ek=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),tk={type:"keyframes",duration:.8},nk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},sk=(t,{keyframes:n})=>n.length>2?tk:Sl.has(t)?t.startsWith("scale")?ek(n[1]):J3:nk;function t5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Np(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?t5(i,t):i}const ok=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function ik(t){for(const n in t)if(!ok.has(n))return!0;return!1}const Rp=(t,n,i,a={},c,u)=>d=>{const h=Np(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-ri(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};ik(h)||Object.assign(_,sk(t,_)),_.duration&&(_.duration=ri(_.duration)),_.repeatDelay&&(_.repeatDelay=ri(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Gm(_),_.delay===0&&(x=!0)),(tr.instantAnimations||tr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Gm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(_.keyframes,h);if(b!==void 0){os.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Dd(_):new G3(_)};function C1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Bp(t,n,i,a){if(typeof n=="function"){const[c,u]=C1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=C1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Dr(t,n,i){const a=t.getProps();return Bp(a,n,i!==void 0?i:a.custom,t)}const n5=new Set(["width","height","top","left","right","bottom",...wl]),k1=30,ak=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class rk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Go.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Go.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=ak(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new vp);const a=this.events[n].add(i);return n==="change"?()=>{a(),os.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Go.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>k1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,k1);return pb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nr(t,n){return new rk(t,n)}const qm=t=>Array.isArray(t);function lk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,nr(i))}function ck(t){return qm(t)?t[t.length-1]||0:t}function uk(t,n){const i=Dr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=ck(u[d]);lk(t,d,h)}}const po=t=>!!(t&&t.getVelocity);function dk(t){return!!(po(t)&&t.add)}function Km(t,n){const i=t.getValue("willChange");if(dk(i))return i.add(n);if(!i&&tr.WillChange){const a=new tr.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Lp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const fk="framerAppearId",s5="data-"+Lp(fk);function o5(t){return t.props[s5]}function hk({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Op(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?t5(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),k=h[w];if(k===void 0||x&&hk(x,w))continue;const j={delay:i,...Np(u||{},w)},E=S.get();if(E!==void 0&&!S.isAnimating()&&!Array.isArray(k)&&k===E&&!j.velocity){os.update(()=>S.set(k));continue}let I=!1;if(window.MotionHandoffAnimation){const W=o5(t);if(W){const H=window.MotionHandoffAnimation(W,w,os);H!==null&&(j.startTime=H,I=!0)}}Km(t,w);const O=y!=null?y:t.shouldReduceMotion;S.start(Rp(w,S,k,O&&n5.has(w)?{type:!1}:j,t,I));const D=S.animation;D&&_.push(D)}if(d){const w=()=>os.update(()=>{d&&uk(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Qm(t,n,i={}){var p;const a=Dr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Op(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return mk(t,n,y,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,_]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function mk(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Qm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Jb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function pk(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Qm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Qm(t,n,i);else{const c=typeof n=="function"?Dr(t,n,i.custom):n;a=Promise.all(Op(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const _k={test:t=>t==="auto",parse:t=>t},i5=t=>n=>n.test(t),a5=[vl,Tt,la,Qa,YC,UC,_k],j1=t=>a5.find(i5(t));function gk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||hb(t):!0}const yk=new Set(["brightness","contrast","saturate","opacity"]);function xk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(kp)||[];if(!a)return t;const c=i.replace(a,"");let u=yk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const bk=/\b([a-z-]*)\(.*?\)/gu,Zm={...Xi,getAnimatableNone:t=>{const n=t.match(bk);return n?n.map(xk).join(" "):t}},Jm={...Xi,getAnimatableNone:t=>{const n=Xi.parse(t);return Xi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},M1={...vl,transform:Math.round},vk={rotate:Qa,rotateX:Qa,rotateY:Qa,rotateZ:Qa,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:Qa,skewX:Qa,skewY:Qa,distance:Tt,translateX:Tt,translateY:Tt,translateZ:Tt,x:Tt,y:Tt,z:Tt,perspective:Tt,transformPerspective:Tt,opacity:Tc,originX:f1,originY:f1,originZ:Tt},zp={borderWidth:Tt,borderTopWidth:Tt,borderRightWidth:Tt,borderBottomWidth:Tt,borderLeftWidth:Tt,borderRadius:Tt,borderTopLeftRadius:Tt,borderTopRightRadius:Tt,borderBottomRightRadius:Tt,borderBottomLeftRadius:Tt,width:Tt,maxWidth:Tt,height:Tt,maxHeight:Tt,top:Tt,right:Tt,bottom:Tt,left:Tt,inset:Tt,insetBlock:Tt,insetBlockStart:Tt,insetBlockEnd:Tt,insetInline:Tt,insetInlineStart:Tt,insetInlineEnd:Tt,padding:Tt,paddingTop:Tt,paddingRight:Tt,paddingBottom:Tt,paddingLeft:Tt,paddingBlock:Tt,paddingBlockStart:Tt,paddingBlockEnd:Tt,paddingInline:Tt,paddingInlineStart:Tt,paddingInlineEnd:Tt,margin:Tt,marginTop:Tt,marginRight:Tt,marginBottom:Tt,marginLeft:Tt,marginBlock:Tt,marginBlockStart:Tt,marginBlockEnd:Tt,marginInline:Tt,marginInlineStart:Tt,marginInlineEnd:Tt,fontSize:Tt,backgroundPositionX:Tt,backgroundPositionY:Tt,...vk,zIndex:M1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:M1},wk={...zp,color:io,backgroundColor:io,outlineColor:io,fill:io,stroke:io,borderColor:io,borderTopColor:io,borderRightColor:io,borderBottomColor:io,borderLeftColor:io,filter:Zm,WebkitFilter:Zm,mask:Jm,WebkitMask:Jm},r5=t=>wk[t],Sk=new Set([Zm,Jm]);function l5(t,n){let i=r5(t);return Sk.has(i)||(i=Xi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const Ck=new Set(["auto","none","0"]);function kk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!Ck.has(u)&&yl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=l5(i,c)}class jk extends Ap{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),Cp(x))){const b=e5(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!n5.has(a)||n.length!==2)return;const[c,u]=n,d=j1(c),h=j1(u),p=d1(c),y=d1(u);if(p!==y&&er[a]){this.needsMeasurement=!0;return}if(d!==h)if(b1(d)&&b1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else er[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||gk(n[c]))&&a.push(c);a.length&&kk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=er[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=er[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function $p(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const c5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return fb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ip}=Eb(queueMicrotask,!1),Wi={x:!1,y:!1};function u5(){return Wi.x||Wi.y}function Mk(t){return t==="x"||t==="y"?Wi[t]?null:(Wi[t]=!0,()=>{Wi[t]=!1}):Wi.x||Wi.y?null:(Wi.x=Wi.y=!0,()=>{Wi.x=Wi.y=!1})}function d5(t,n){const i=$p(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function Ek(t){return!(t.pointerType==="touch"||u5())}function Tk(t,n,i={}){const[a,c,u]=d5(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const _=()=>{d.removeEventListener("pointerleave",S)},x=j=>{y&&(y(j),y=void 0),_()},b=j=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(j))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=j=>{if(j.pointerType!=="touch"){if(h){p=!0;return}x(j)}},k=j=>{if(!Ek(j))return;p=!1;const E=n(d,j);typeof E=="function"&&(y=E,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",k,c),d.addEventListener("pointerdown",w,c)}),u}const f5=(t,n)=>n?t===n?!0:f5(t,n.parentElement):!1,Pp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Ak=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Dk(t){return Ak.has(t.tagName)||t.isContentEditable===!0}const Nk=new Set(["INPUT","SELECT","TEXTAREA"]);function Rk(t){return Nk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function E1(t){return n=>{n.key==="Enter"&&t(n)}}function pm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Bk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=E1(()=>{if(gd.has(i))return;pm(i,"down");const c=E1(()=>{pm(i,"up")}),u=()=>pm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function T1(t){return Pp(t)&&!u5()}const A1=new WeakSet;function Lk(t,n,i={}){const[a,c,u]=d5(t,i),d=h=>{const p=h.currentTarget;if(!T1(h)||A1.has(h))return;gd.add(p),i.stopPropagation&&A1.add(h);const y=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),T1(w)&&typeof y=="function"&&y(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||f5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",y=>Bk(y,c)),!Dk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return fb(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let Za;const h5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Ok=h5("inline","width","offsetWidth"),zk=h5("block","height","offsetHeight");function $k({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Ok(t,n)},get height(){return zk(t,n)}})})}function Ik(t){t.forEach($k)}function Pk(){typeof ResizeObserver>"u"||(Za=new ResizeObserver(Ik))}function Hk(t,n){Za||Pk();const i=$p(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),Za==null||Za.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||Za==null||Za.unobserve(a)})}}const xd=new Set;let fl;function Vk(){fl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",fl)}function Uk(t){return xd.add(t),fl||Vk(),()=>{xd.delete(t),!xd.size&&typeof fl=="function"&&(window.removeEventListener("resize",fl),fl=void 0)}}function D1(t,n){return typeof t=="function"?Uk(t):Hk(t,n)}function m5(t){return Id(t)&&t.tagName==="svg"}function Yk(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Pb(c,u,d);return n?h(a):h}const Wk=[...a5,io,Xi],Fk=t=>Wk.find(i5(t)),N1=()=>({translate:0,scale:1,origin:0,originPoint:0}),hl=()=>({x:N1(),y:N1()}),R1=()=>({min:0,max:0}),oo=()=>({x:R1(),y:R1()}),Dc=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Nc(t){return typeof t=="string"||Array.isArray(t)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...Hp];function Hd(t){return Pd(t.animate)||Vp.some(n=>Nc(t[n]))}function p5(t){return!!(Hd(t)||t.variants)}function Xk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(po(c))t.addValue(a,c);else if(po(u))t.addValue(a,nr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,nr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const ep={current:null},_5={current:!1},Gk=typeof window<"u";function qk(){if(_5.current=!0,!!Gk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>ep.current=t.matches;t.addEventListener("change",n),n()}else ep.current=!1}const B1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Nd={};function g5(t){Nd=t}function Kk(){return Nd}class y5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ap,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Go.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,os.render(this.render,!1,!0))};const{latestValues:y,renderState:_}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=p5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];y[w]!==void 0&&po(S)&&S.set(y[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Dc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(_5.current||qk(),this.shouldReduceMotion=ep.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),ja(this.notifyUpdate),ja(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Zb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:_}=i.accelerate,x=new Kb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:ri(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Sl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&os.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Nd){const i=Nd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):oo()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<B1.length;a++){const c=B1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Xk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=nr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(db(a)||hb(a))?a=parseFloat(a):!Fk(a)&&Xi.test(i)&&(a=l5(n,i)),this.setBaseTarget(n,po(a)?a.get():a)),po(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Bp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!po(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new vp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ip.render(this.render)}}class x5 extends y5{constructor(){super(...arguments),this.KeyframeResolver=jk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;po(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class sr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function b5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function Qk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function Zk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function _m(t){return t===void 0||t===1}function tp({scale:t,scaleX:n,scaleY:i}){return!_m(t)||!_m(n)||!_m(i)}function kr(t){return tp(t)||v5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function v5(t){return L1(t.x)||L1(t.y)}function L1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function O1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function np(t,n=0,i=1,a,c){t.min=O1(t.min,n,i,a,c),t.max=O1(t.max,n,i,a,c)}function w5(t,{x:n,y:i}){np(t.x,n.translate,n.scale,n.originPoint),np(t.y,i.translate,i.scale,i.originPoint)}const z1=.999999999999,$1=1.0000000000001;function Jk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(aa(t.x,-u.scroll.offset.x),aa(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,w5(t,d)),a&&kr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<$1&&n.x>z1&&(n.x=1),n.y<$1&&n.y>z1&&(n.y=1)}function aa(t,n){t.min+=n,t.max+=n}function I1(t,n,i,a,c=.5){const u=ps(t.min,t.max,c);np(t,n,i,u,a)}function P1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;I1(t.x,P1(n.x,a.x),n.scaleX,n.scale,n.originX),I1(t.y,P1(n.y,a.y),n.scaleY,n.scale,n.originY)}function S5(t,n){return b5(Zk(t.getBoundingClientRect(),n))}function e8(t,n,i){const a=S5(t,i),{scroll:c}=n;return c&&(aa(a.x,c.offset.x),aa(a.y,c.offset.y)),a}const t8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},n8=wl.length;function s8(t,n,i){let a="",c=!0;for(let u=0;u<n8;u++){const d=wl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=c5(h,zp[d]);if(!p){c=!1;const _=t8[d]||d;a+=`${_}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Up(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Sl.has(p)){d=!0;continue}else if(Ab(p)){c[p]=y;continue}else{const _=c5(y,zp[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=s8(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${y} ${_}`}}function C5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function H1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const hc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Tt.test(t))t=parseFloat(t);else return t;const i=H1(t,n.target.x),a=H1(t,n.target.y);return`${i}% ${a}%`}},o8={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Xi.parse(t);if(c.length>5)return a;const u=Xi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=ps(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},sp={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:o8};function k5(t,{layout:n,layoutId:i}){return Sl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!sp[t]||t==="opacity")}function Yp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(po(a[h])||c&&po(c[h])||k5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function i8(t){return window.getComputedStyle(t)}class j5 extends x5{constructor(){super(...arguments),this.type="html",this.renderInstance=C5}readValueFromInstance(n,i){var a;if(Sl.has(i))return(a=this.projection)!=null&&a.isProjecting?Um(i):j3(n,i);{const c=i8(n),u=(Ab(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return S5(n,i)}build(n,i,a){Up(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Yp(n,i,a)}}function a8(t,n){return t in n}class r8 extends y5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(a8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return oo()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const l8={offset:"stroke-dashoffset",array:"stroke-dasharray"},c8={offset:"strokeDashoffset",array:"strokeDasharray"};function u8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?l8:c8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const d8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function M5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,_){var w,S;if(Up(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const k of d8)x[k]!==void 0&&(b[k]=x[k],delete x[k]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&u8(x,c,u,d,!1)}const E5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),T5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function f8(t,n,i,a){C5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(E5.has(c)?c:Lp(c),n.attrs[c])}function A5(t,n,i){const a=Yp(t,n,i);for(const c in t)if(po(t[c])||po(n[c])){const u=wl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class D5 extends x5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=oo}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Sl.has(i)){const a=r5(i);return a&&a.default||0}return i=E5.has(i)?i:Lp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return A5(n,i,a)}build(n,i,a){M5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){f8(n,i,a,c)}mount(n){this.isSVGTag=T5(n.tagName),super.mount(n)}}const h8=Vp.length;function N5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?N5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<h8;i++){const a=Vp[i],c=t.props[a];(Nc(c)||c===!1)&&(n[a]=c)}return n}function R5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const m8=[...Hp].reverse(),p8=Hp.length;function _8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>pk(t,i,a)))}function g8(t){let n=_8(t),i=V1(),a=!0,c=!1;const u=y=>(_,x)=>{var w;const b=Dr(t,x,y==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:k,...j}=b;_={..._,...j,...k}}return _};function d(y){n=y(t)}function h(y){const{props:_}=t,x=N5(t.parent)||{},b=[],w=new Set;let S={},k=1/0;for(let E=0;E<p8;E++){const I=m8[E],O=i[I],D=_[I]!==void 0?_[I]:x[I],W=Nc(D),H=I===y?O.isActive:null;H===!1&&(k=E);let X=D===x[I]&&D!==_[I]&&W;if(X&&(a||c)&&t.manuallyAnimateOnMount&&(X=!1),O.protectedKeys={...S},!O.isActive&&H===null||!D&&!O.prevProp||Pd(D)||typeof D=="boolean")continue;if(I==="exit"&&O.isActive&&H!==!0){O.prevResolvedValues&&(S={...S,...O.prevResolvedValues});continue}const P=y8(O.prevProp,D);let K=P||I===y&&O.isActive&&!X&&W||E>k&&W,re=!1;const se=Array.isArray(D)?D:[D];let je=se.reduce(u(I),{});H===!1&&(je={});const{prevResolvedValues:Pe={}}=O,J={...Pe,...je},de=U=>{K=!0,w.has(U)&&(re=!0,w.delete(U)),O.needsAnimating[U]=!0;const Q=t.getValue(U);Q&&(Q.liveStyle=!1)};for(const U in J){const Q=je[U],_e=Pe[U];if(S.hasOwnProperty(U))continue;let N=!1;qm(Q)&&qm(_e)?N=!R5(Q,_e):N=Q!==_e,N?Q!=null?de(U):w.add(U):Q!==void 0&&w.has(U)?de(U):O.protectedKeys[U]=!0}O.prevProp=D,O.prevResolvedValues=je,O.isActive&&(S={...S,...je}),(a||c)&&t.blockInitialAnimation&&(K=!1);const z=X&&P;K&&(!z||re)&&b.push(...se.map(U=>{const Q={type:I};if(typeof U=="string"&&(a||c)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:_e}=t,N=Dr(_e,U);if(_e.enteringChildren&&N){const{delayChildren:ae}=N.transition||{};Q.delay=Jb(_e.enteringChildren,t,ae)}}return{animation:U,options:Q}}))}if(w.size){const E={};if(typeof _.initial!="boolean"){const I=Dr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);I&&I.transition&&(E.transition=I.transition)}w.forEach(I=>{const O=t.getBaseTarget(I),D=t.getValue(I);D&&(D.liveStyle=!0),E[I]=O!=null?O:null}),b.push({animation:E})}let j=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(j=!1),a=!1,c=!1,j?n(b):Promise.resolve()}function p(y,_){var b;if(i[y].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(y,_)}),i[y].isActive=_;const x=h(y);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=V1(),c=!0}}}function y8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!R5(n,t):!1}function Sr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function V1(){return{animate:Sr(!0),whileInView:Sr(),whileHover:Sr(),whileTap:Sr(),whileDrag:Sr(),whileFocus:Sr(),exit:Sr()}}function op(t,n){t.min=n.min,t.max=n.max}function Yi(t,n){op(t.x,n.x),op(t.y,n.y)}function U1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const B5=1e-4,x8=1-B5,b8=1+B5,L5=.01,v8=0-L5,w8=0+L5;function qo(t){return t.max-t.min}function S8(t,n,i){return Math.abs(t-n)<=i}function Y1(t,n,i,a=.5){t.origin=a,t.originPoint=ps(n.min,n.max,t.origin),t.scale=qo(i)/qo(n),t.translate=ps(i.min,i.max,t.origin)-t.originPoint,(t.scale>=x8&&t.scale<=b8||isNaN(t.scale))&&(t.scale=1),(t.translate>=v8&&t.translate<=w8||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){Y1(t.x,n.x,i.x,a?a.originX:void 0),Y1(t.y,n.y,i.y,a?a.originY:void 0)}function W1(t,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+qo(n)}function C8(t,n,i,a){W1(t.x,n.x,i.x,a==null?void 0:a.x),W1(t.y,n.y,i.y,a==null?void 0:a.y)}function F1(t,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+qo(n)}function Bd(t,n,i,a){F1(t.x,n.x,i.x,a==null?void 0:a.x),F1(t.y,n.y,i.y,a==null?void 0:a.y)}function X1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function k8(t,n=0,i=1,a=.5,c,u=t,d=t){if(la.test(n)&&(n=parseFloat(n),n=ps(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ps(u.min,u.max,a);t===u&&(h-=n),t.min=X1(t.min,n,i,h,c),t.max=X1(t.max,n,i,h,c)}function G1(t,n,[i,a,c],u,d){k8(t,n[i],n[a],n[c],n.scale,u,d)}const j8=["x","scaleX","originX"],M8=["y","scaleY","originY"];function q1(t,n,i,a){G1(t.x,n,j8,i?i.x:void 0,a?a.x:void 0),G1(t.y,n,M8,i?i.y:void 0,a?a.y:void 0)}function K1(t){return t.translate===0&&t.scale===1}function O5(t){return K1(t.x)&&K1(t.y)}function Q1(t,n){return t.min===n.min&&t.max===n.max}function E8(t,n){return Q1(t.x,n.x)&&Q1(t.y,n.y)}function Z1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function z5(t,n){return Z1(t.x,n.x)&&Z1(t.y,n.y)}function J1(t){return qo(t.x)/qo(t.y)}function ex(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function ia(t){return[t("x"),t("y")]}function T8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;y&&(a=`perspective(${y}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const $5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],A8=$5.length,tx=t=>typeof t=="string"?parseFloat(t):t,nx=t=>typeof t=="number"||Tt.test(t);function D8(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=ps(0,(d=i.opacity)!=null?d:1,N8(a)),t.opacityExit=ps((h=n.opacity)!=null?h:1,0,R8(a))):u&&(t.opacity=ps((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let _=0;_<A8;_++){const x=$5[_];let b=sx(n,x),w=sx(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||nx(b)===nx(w)?(t[x]=Math.max(ps(tx(b),tx(w),a),0),(la.test(w)||la.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=ps(n.rotate||0,i.rotate||0,a))}function sx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const N8=I5(0,.5,wb),R8=I5(.5,.95,Ri);function I5(t,n,i){return a=>a<t?0:a>n?1:i(gl(t,n,a))}function P5(t,n,i){const a=po(t)?t:nr(t);return a.start(Rp("",a,n,i)),a.animation}function Rc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const B8=(t,n)=>t.depth-n.depth;class L8{constructor(){this.children=[],this.isDirty=!1}add(n){xp(this.children,n),this.isDirty=!0}remove(n){_l(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(B8),this.isDirty=!1,this.children.forEach(n)}}function O8(t,n){const i=Go.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(ja(a),t(u-n))};return os.setup(a,!0),()=>ja(a)}function vd(t){return po(t)?t.get():t}class z8{constructor(){this.members=[]}add(n){xp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(_l(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(_l(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gm=["","X","Y","Z"],$8=1e3;let I8=0;function ym(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function H5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=o5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",os,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&H5(a)}function V5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=I8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(V8),this.nodes.forEach(G8),this.nodes.forEach(q8),this.nodes.forEach(U8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new L8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new vp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!m5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;os.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=O8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(ax)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||y.getDefaultTransition()||ej,{onLayoutAnimationStart:k,onLayoutAnimationComplete:j}=y.getProps(),E=!this.targetLayout||!z5(this.targetLayout,w),I=!x&&b;if(this.options.layoutRoot||this.resumeFrom||I||x&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...Np(S,"layout"),onPlay:k,onComplete:j};(y.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(_,I)}else x||ax(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ja(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(K8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&H5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(W8),this.nodes.forEach(ox);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ix);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(F8),this.nodes.forEach(X8),this.nodes.forEach(P8),this.nodes.forEach(H8)):this.nodes.forEach(ix),this.clearAllSnapshots();const h=Go.now();Do.delta=ca(0,1e3/60,h-Do.timestamp),Do.timestamp=h,Do.isProcessing=!0,cm.update.process(Do),cm.preRender.process(Do),cm.render.process(Do),Do.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Y8),this.sharedNodes.forEach(Q8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,os.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){os.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!qo(this.snapshot.measuredBox.x)&&!qo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=oo()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!O5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,_=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||kr(this.latestValues)||_)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),tj(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return oo();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(nj))){const{scroll:_}=this.root;_&&(aa(h.x,_.offset.x),aa(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=oo();if(Yi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const _=this.path[y],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Yi(h,d),aa(h.x,x.offset.x),aa(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const y=p||oo();Yi(y,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(aa(y.x,-w.scroll.offset.x),aa(y.y,-w.scroll.offset.y)),kr(w.latestValues)&&bd(y,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return kr(this.latestValues)&&bd(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=oo();Yi(h,d);for(let y=0;y<this.path.length;y++){const _=this.path[y];if(!kr(_.latestValues))continue;let x;_.instance&&(tp(_.latestValues)&&_.updateSnapshot(),x=oo(),Yi(x,_.measurePageBox())),q1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return kr(this.latestValues)&&q1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Do.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=Do.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=oo(),this.targetWithTransforms=oo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),C8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Yi(this.target,this.layout.layoutBox),w5(this.target,this.targetDelta)):Yi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||tp(this.parent.latestValues)||v5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oo(),this.relativeTargetOrigin=oo(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Yi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Do.timestamp&&(p=!1),p)return;const{layout:y,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||_))return;Yi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;Jk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=oo());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U1(this.prevProjectionDelta.x,this.projectionDelta.x),U1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!ex(this.projectionDelta.x,this.prevProjectionDelta.x)||!ex(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hl(),this.projectionDelta=hl(),this.projectionDeltaWithTransform=hl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},_={...this.latestValues},x=hl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=oo(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,k=w!==S,j=this.getStack(),E=!j||j.members.length<=1,I=!!(k&&!E&&this.options.crossfade===!0&&!this.path.some(J8));this.animationProgress=0;let O;this.mixTargetDelta=D=>{const W=D/1e3;rx(x.x,d.x,W),rx(x.y,d.y,W),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Z8(this.relativeTarget,this.relativeTargetOrigin,b,W),O&&E8(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=oo()),Yi(O,this.relativeTarget)),k&&(this.animationValues=_,D8(_,y,this.latestValues,W,I,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=W},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(ja(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=os.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=nr(0)),this.motionValue.jump(0,!1),this.currentAnimation=P5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta($8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:_}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&U5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||oo();const x=qo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=qo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Yi(h,p),bd(h,_),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new z8),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&ym("z",d,y,this.animationValues);for(let _=0;_<gm.length;_++)ym(`rotate${gm[_]}`,d,y,this.animationValues),ym(`skew${gm[_]}`,d,y,this.animationValues);d.render();for(const _ in y)d.setStaticValue(_,y[_]),this.animationValues&&(this.animationValues[_]=y[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,k;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!kr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=T8(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,y.animationValues?d.opacity=y===this?(k=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?k:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=y===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const j in sp){if(_[j]===void 0)continue;const{correct:E,applyTo:I,isCSSVariable:O}=sp[j],D=x==="none"?_[j]:E(_[j],y);if(I){const W=I.length;for(let H=0;H<W;H++)d[I[H]]=D}else O?this.options.visualElement.renderState.vars[j]=D:d[j]=D}this.options.layoutId&&(d.pointerEvents=y===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(ox),this.root.sharedNodes.clear()}}}function P8(t){t.updateLayout()}function H8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")ia(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=qo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";op(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else U5(u,n.layoutBox,a)&&ia(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=qo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=hl();kc(h,a,n.layoutBox);const p=hl();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const y=!O5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,k=oo();Bd(k,n.layoutBox,b.layoutBox,S);const j=oo();Bd(j,a,w.layoutBox,S),z5(k,j)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=j,t.relativeTargetOrigin=k,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function V8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function U8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Y8(t){t.clearSnapshot()}function ox(t){t.clearMeasurements()}function W8(t){t.isLayoutDirty=!0,t.updateLayout()}function ix(t){t.isLayoutDirty=!1}function F8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function X8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ax(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function G8(t){t.resolveTargetDelta()}function q8(t){t.calcProjection()}function K8(t){t.resetSkewAndRotation()}function Q8(t){t.removeLeadSnapshot()}function rx(t,n,i){t.translate=ps(n.translate,0,i),t.scale=ps(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function lx(t,n,i,a){t.min=ps(n.min,i.min,a),t.max=ps(n.max,i.max,a)}function Z8(t,n,i,a){lx(t.x,n.x,i.x,a),lx(t.y,n.y,i.y,a)}function J8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const ej={duration:.45,ease:[.4,0,.1,1]},cx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ux=cx("applewebkit/")&&!cx("chrome/")?Math.round:Ri;function dx(t){t.min=ux(t.min),t.max=ux(t.max)}function tj(t){dx(t.x),dx(t.y)}function U5(t,n,i){return t==="position"||t==="preserve-aspect"&&!S8(J1(n),J1(i),.2)}function nj(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const sj=V5({attachResizeListener:(t,n)=>Rc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xm={current:void 0},Y5=V5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!xm.current){const t=new sj({});t.mount(window),t.setOptions({layoutScroll:!0}),xm.current=t}return xm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Vd=g.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function fx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function oj(...t){return n=>{let i=!1;const a=t.map(c=>{const u=fx(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():fx(t[c],null)}}}}function ij(...t){return g.useCallback(oj(...t),t)}class aj extends g.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function rj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=g.useId(),h=g.useRef(null),p=g.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=g.useContext(Vd),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=ij(h,_);return g.useInsertionEffect(()=>{const{width:S,height:k,top:j,left:E,right:I,bottom:O}=p.current;if(n||u===!1||!h.current||!S||!k)return;const D=i==="left"?`left: ${E}`:`right: ${I}`,W=a==="bottom"?`bottom: ${O}`:`top: ${j}`;h.current.dataset.motionPopId=d;const H=document.createElement("style");y&&(H.nonce=y);const X=c!=null?c:document.head;return X.appendChild(H),H.sheet&&H.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${k}px !important;
            ${D}px !important;
            ${W}px !important;
          }
        `),()=>{var P;(P=h.current)==null||P.removeAttribute("data-motion-pop-id"),X.contains(H)&&X.removeChild(H)}},[n]),l.jsx(aj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:g.cloneElement(t,{ref:x})})}const lj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const _=Lc(cj),x=g.useId();let b=!0,w=g.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const k of _.values())if(!k)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),g.useMemo(()=>{_.forEach((S,k)=>_.set(k,!1))},[i]),g.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(rj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(zd.Provider,{value:w,children:t})};function cj(){return new Map}function W5(t=!0){const n=g.useContext(zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=g.useId();g.useEffect(()=>{if(t)return c(u)},[t]);const d=g.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function hx(t){const n=[];return g.Children.forEach(t,i=>{g.isValidElement(i)&&n.push(i)}),n}const Ud=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[_,x]=W5(d),b=g.useMemo(()=>hx(t),[t]),w=d&&!_?[]:b.map(rd),S=g.useRef(!0),k=g.useRef(b),j=Lc(()=>new Map),E=g.useRef(new Set),[I,O]=g.useState(b),[D,W]=g.useState(b);yp(()=>{S.current=!1,k.current=b;for(let P=0;P<D.length;P++){const K=rd(D[P]);w.includes(K)?(j.delete(K),E.current.delete(K)):j.get(K)!==!0&&j.set(K,!1)}},[D,w.length,w.join("-")]);const H=[];if(b!==I){let P=[...b];for(let K=0;K<D.length;K++){const re=D[K],se=rd(re);w.includes(se)||(P.splice(K,0,re),H.push(re))}return u==="wait"&&H.length&&(P=H),W(hx(P)),O(b),null}const{forceRender:X}=g.useContext(gp);return l.jsx(l.Fragment,{children:D.map(P=>{const K=rd(P),re=d&&!_?!1:b===D||w.includes(K),se=()=>{if(E.current.has(K))return;if(j.has(K))E.current.add(K),j.set(K,!0);else return;let je=!0;j.forEach(Pe=>{Pe||(je=!1)}),je&&(X==null||X(),W(k.current),d&&(x==null||x()),a&&a())};return l.jsx(lj,{isPresent:re,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:re?void 0:se,anchorX:h,anchorY:p,children:P},K)})})},F5=g.createContext({strict:!1}),mx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let px=!1;function uj(){if(px)return;const t={};for(const n in mx)t[n]={isEnabled:i=>mx[n].some(a=>!!i[a])};g5(t),px=!0}function X5(){return uj(),Kk()}function dj(t){const n=X5();for(const i in t)n[i]={...n[i],...t[i]};g5(n)}const fj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||fj.has(t)}let G5=t=>!Ld(t);function hj(t){typeof t=="function"&&(G5=n=>n.startsWith("on")?!Ld(n):t(n))}try{hj(require("@emotion/is-prop-valid").default)}catch{}function mj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||po(t[c])||(G5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=g.createContext({});function pj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Nc(i)?i:void 0,animate:Nc(a)?a:void 0}}return t.inherit!==!1?n:{}}function _j(t){const{initial:n,animate:i}=pj(t,g.useContext(Yd));return g.useMemo(()=>({initial:n,animate:i}),[_x(n),_x(i)])}function _x(t){return Array.isArray(t)?t.join(" "):t}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function q5(t,n,i){for(const a in n)!po(n[a])&&!k5(a,i)&&(t[a]=n[a])}function gj({transformTemplate:t},n){return g.useMemo(()=>{const i=Wp();return Up(i,n,t),Object.assign({},i.vars,i.style)},[n])}function yj(t,n){const i=t.style||{},a={};return q5(a,i,t),Object.assign(a,gj(t,n)),a}function xj(t,n){const i={},a=yj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const K5=()=>({...Wp(),attrs:{}});function bj(t,n,i,a){const c=g.useMemo(()=>{const u=K5();return M5(u,n,T5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};q5(u,t.style,t),c.style={...u,...c.style}}return c}const vj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(t){return typeof t!="string"||t.includes("-")?!1:!!(vj.indexOf(t)>-1||/[A-Z]/u.test(t))}function wj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Fp(t))?bj:xj)(n,a,c,t),y=mj(n,typeof t=="string",u),_=t!==g.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=g.useMemo(()=>po(x)?x.get():x,[x]);return g.createElement(t,{..._,children:b})}function Sj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:Cj(i,a,c,t),renderState:n()}}function Cj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),y=p5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Bp(t,b[w]);if(S){const{transitionEnd:k,transition:j,...E}=S;for(const I in E){let O=E[I];if(Array.isArray(O)){const D=_?O.length-1:0;O=O[D]}O!==null&&(c[I]=O)}for(const I in k)c[I]=k[I]}}}return c}const Q5=t=>(n,i)=>{const a=g.useContext(Yd),c=g.useContext(zd),u=()=>Sj(t,n,a,c);return i?u():Lc(u)},kj=Q5({scrapeMotionValuesFromProps:Yp,createRenderState:Wp}),jj=Q5({scrapeMotionValuesFromProps:A5,createRenderState:K5}),Mj=Symbol.for("motionComponentSymbol");function Ej(t,n,i){const a=g.useRef(i);g.useInsertionEffect(()=>{a.current=i});const c=g.useRef(null);return g.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const Z5=g.createContext({});function cl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Tj(t,n,i,a,c,u){var O,D;const{visualElement:d}=g.useContext(Yd),h=g.useContext(F5),p=g.useContext(zd),y=g.useContext(Vd),_=y.reducedMotion,x=y.skipAnimations,b=g.useRef(null),w=g.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,k=g.useContext(Z5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Aj(b.current,i,c,k);const j=g.useRef(!1);g.useInsertionEffect(()=>{S&&j.current&&S.update(i,p)});const E=i[s5],I=g.useRef(!!E&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,E))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,E)));return yp(()=>{w.current=!0,S&&(j.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),I.current&&S.animationState&&S.animationState.animateChanges())}),g.useEffect(()=>{S&&(!I.current&&S.animationState&&S.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var W;(W=window.MotionHandoffMarkAsComplete)==null||W.call(window,E)}),I.current=!1),S.enteringChildren=void 0)}),S}function Aj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:J5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&cl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:_})}function J5(t){if(t)return t.options.allowProjection!==!1?t.projection:J5(t.parent)}function bm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,_;a&&dj(a);const u=i?i==="svg":Fp(t),d=u?jj:kj;function h(x,b){let w;const S={...g.useContext(Vd),...x,layoutId:Dj(x)},{isStatic:k}=S,j=_j(x),E=d(x,k);if(!k&&typeof window<"u"){Nj();const I=Rj(S);w=I.MeasureLayout,j.visualElement=Tj(t,E,S,c,I.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:j,children:[w&&j.visualElement?l.jsx(w,{visualElement:j.visualElement,...S}):null,wj(t,x,Ej(E,j.visualElement,b),E,k,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(y=t.displayName)!=null?y:t.name)!=null?_:""})`}`;const p=g.forwardRef(h);return p[Mj]=t,p}function Dj({layoutId:t}){const n=g.useContext(gp).id;return n&&t!==void 0?n+"-"+t:t}function Nj(t,n){g.useContext(F5).strict}function Rj(t){const n=X5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Bj(t,n){if(typeof Proxy>"u")return bm;const i=new Map,a=(u,d)=>bm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,bm(d,void 0,t,n)),i.get(d))})}const Lj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Fp(t))?new D5(n):new j5(n,{allowProjection:t!==g.Fragment})};class Oj extends sr{constructor(n){super(n),n.animationState||(n.animationState=g8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let zj=0;class $j extends sr{constructor(){super(...arguments),this.id=zj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Dr(this.node,d,h);if(p){const{transition:y,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Ij={animation:{Feature:Oj},exit:{Feature:$j}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const Pj=t=>n=>Pp(n)&&t(n,Ic(n));function jc(t,n,i,a){return Rc(t,n,Pj(i),a)}const e2=({current:t})=>t?t.ownerDocument.defaultView:null,gx=(t,n)=>Math.abs(t-n);function Hj(t,n){const i=gx(t.x,n.x),a=gx(t.y,n.y);return Math.sqrt(i**2+a**2)}const yx=new Set(["auto","scroll"]);class t2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const w=vm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,k=Hj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!k)return;const{point:j}=w,{timestamp:E}=Do;this.history.push({...j,timestamp:E});const{onStart:I,onMove:O}=this.handlers;S||(I&&I(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ld(S,this.transformPagePoint),os.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:k,onSessionEnd:j,resumeAnimation:E}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=vm(w.type==="pointercancel"?this.lastMoveEventInfo:ld(S,this.transformPagePoint),this.history);this.startEvent&&k&&k(w,I),j&&j(w,I)},!Pp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),y=ld(p,this.transformPagePoint),{point:_}=y,{timestamp:x}=Do;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,vm(y,this.history)),this.removeListeners=Oc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(yx.has(a.overflowX)||yx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),os.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ja(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function xx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function vm({point:t},n){return{point:t,delta:xx(t,n2(n)),offset:xx(t,Vj(n)),velocity:Uj(n,.1)}}function Vj(t){return t[0]}function n2(t){return t[t.length-1]}function Uj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=n2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ri(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ri(n)*2&&(a=t[1]);const u=Ni(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Yj(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?ps(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?ps(i,t,a.max):Math.min(t,i)),t}function bx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function Wj(t,{top:n,left:i,bottom:a,right:c}){return{x:bx(t.x,i,c),y:bx(t.y,n,a)}}function vx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function Fj(t,n){return{x:vx(t.x,n.x),y:vx(t.y,n.y)}}function Xj(t,n){let i=.5;const a=qo(t),c=qo(n);return c>a?i=gl(n.min,n.max-a,t.min):a>c&&(i=gl(t.min,t.max-c,n.min)),ca(0,1,i)}function Gj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ip=.35;function qj(t=ip){return t===!1?t=0:t===!0&&(t=ip),{x:wx(t,"left","right"),y:wx(t,"top","bottom")}}function wx(t,n,i){return{min:Sx(t,n),max:Sx(t,i)}}function Sx(t,n){return typeof t=="number"?t:t[n]||0}const Kj=new WeakMap;class Qj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=oo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:k}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Mk(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ia(E=>{let I=this.getAxisMotionValue(E).get()||0;if(la.test(I)){const{projection:O}=this.visualElement;if(O&&O.layout){const D=O.layout.layoutBox[E];D&&(I=qo(D)*(parseFloat(I)/100))}}this.originPoint[E]=I}),k&&os.update(()=>k(x,b),!1,!0),Km(this.visualElement,"transform");const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:k,onDrag:j}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:E}=b;if(S&&this.currentDirection===null){this.currentDirection=Jj(E),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",b.point,E),this.updateAxis("y",b.point,E),this.visualElement.render(),j&&os.update(()=>j(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new t2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:e2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&os.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Yj(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&cl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Wj(a.layoutBox,n):this.constraints=!1,this.elastic=qj(i),c!==this.constraints&&!cl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&ia(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Gj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!cl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=e8(a,c.root,this.visualElement.getTransformPagePoint());let d=Fj(c.layout.layoutBox,u);if(i){const h=i(Qk(d));this.hasMutatedConstraints=!!h,h&&(d=b5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=ia(_=>{if(!cd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Km(this.visualElement,n),a.start(Rp(n,a,0,i,this.visualElement,!1))}stopAnimation(){ia(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){ia(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ps(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!cl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};ia(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Xj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),ia(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(ps(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Kj.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",y=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=y.target,w=b!==n&&Rk(b);_&&x&&!w&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();cl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Zj(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),os.read(c);const h=Rc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:_})=>{this.isDragging&&_&&(ia(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ip,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Cx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function Zj(t,n,i){const a=D1(t,Cx(i)),c=D1(n,Cx(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function Jj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class e7 extends sr{constructor(n){super(n),this.removeGroupControls=Ri,this.removeListeners=Ri,this.controls=new Qj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ri}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const wm=t=>(n,i)=>{t&&os.update(()=>t(n,i),!1,!0)};class t7 extends sr{constructor(){super(...arguments),this.removePointerDownListener=Ri}onPointerDown(n){this.session=new t2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:e2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:wm(n),onStart:wm(i),onMove:wm(a),onEnd:(u,d)=>{delete this.session,c&&os.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Sm=!1;class n7 extends g.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Sm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Sm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||os.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ip.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Sm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function s2(t){const[n,i]=W5(),a=g.useContext(gp);return l.jsx(n7,{...t,layoutGroup:a,switchLayoutGroup:g.useContext(Z5),isPresent:n,safeToRemove:i})}const s7={pan:{Feature:t7},drag:{Feature:e7,ProjectionNode:Y5,MeasureLayout:s2}};function kx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&os.postRender(()=>u(n,Ic(n)))}class o7 extends sr{mount(){const{current:n}=this.node;n&&(this.unmount=Tk(n,(i,a)=>(kx(this.node,a,"Start"),c=>kx(this.node,c,"End"))))}unmount(){}}class i7 extends sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(Rc(this.node.current,"focus",()=>this.onFocus()),Rc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function jx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&os.postRender(()=>u(n,Ic(n)))}class a7 extends sr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Lk(n,(c,u)=>(jx(this.node,u,"Start"),(d,{success:h})=>jx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ap=new WeakMap,Cm=new WeakMap,r7=t=>{const n=ap.get(t.target);n&&n(t)},l7=t=>{t.forEach(r7)};function c7({root:t,...n}){const i=t||document;Cm.has(i)||Cm.set(i,{});const a=Cm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(l7,{root:t,...n})),a[c]}function u7(t,n,i){const a=c7(n);return ap.set(t,i),a.observe(t),()=>{ap.delete(t),a.unobserve(t)}}const d7={some:0,all:1};class f7 extends sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:d7[c]},h=y=>{const{isIntersecting:_}=y;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(y)};this.stopObserver=u7(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(h7(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function h7({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const m7={inView:{Feature:f7},tap:{Feature:a7},focus:{Feature:i7},hover:{Feature:o7}},p7={layout:{ProjectionNode:Y5,MeasureLayout:s2}},_7={...Ij,...m7,...s7,...p7},ai=Bj(_7,Lj);function rp(t){const n=Lc(()=>nr(t)),{isStatic:i}=g.useContext(Vd);if(i){const[,a]=g.useState(t);g.useEffect(()=>n.on("change",a),[])}return n}function o2(t,n){const i=rp(n()),a=()=>i.set(n());return a(),yp(()=>{const c=()=>os.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),ja(a)}}),i}function g7(t){Cc.current=[],t();const n=o2(Cc.current,t);return Cc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return g7(t);const u=typeof n=="function"?n:Yk(n,i,a),d=Array.isArray(t)?Mx(t,u):Mx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function Mx(t,n){const i=Lc(()=>[]);return o2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Xp(t){return typeof t=="object"&&!Array.isArray(t)}function i2(t,n,i,a){return t==null?[]:typeof t=="string"&&Xp(n)?$p(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function y7(t,n,i){return t*(n+1)}function Ex(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function x7(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(_l(t,c),a--)}}function b7(t,n,i,a,c,u){x7(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:ps(c,u,a[d]),easing:jb(i,d)})}function v7(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function w7(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const S7="easeInOut";function C7(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){y.set(S,x);continue}else if(!Array.isArray(S)){y.set(S.name,Ex(x,S.at,_,y));continue}let[k,j,E={}]=S;E.at!==void 0&&(x=Ex(x,E.at,_,y));let I=0;const O=(D,W,H,X=0,P=0)=>{const K=k7(D),{delay:re=0,times:se=Vb(K),type:je=n.type||"keyframes",repeat:Pe,repeatType:J,repeatDelay:de=0,...z}=W;let{ease:ce=n.ease||"easeOut",duration:U}=W;const Q=typeof re=="function"?re(X,P):re,_e=K.length,N=Dp(je)?je:c==null?void 0:c[je||"keyframes"];if(_e<=2&&N){let De=100;if(_e===2&&E7(K)){const ct=K[1]-K[0];De=Math.abs(ct)}const ze={...n,...z};U!==void 0&&(ze.duration=ri(U));const ot=$b(ze,De,N);ce=ot.ease,U=ot.duration}U!=null||(U=u);const ae=x+Q;se.length===1&&se[0]===0&&(se[1]=1);const oe=se.length-K.length;if(oe>0&&Hb(se,oe),K.length===1&&K.unshift(null),Pe){U=y7(U,Pe);const De=[...K],ze=[...se];ce=Array.isArray(ce)?[...ce]:[ce];const ot=[...ce];for(let ct=0;ct<Pe;ct++){K.push(...De);for(let Ct=0;Ct<De.length;Ct++)se.push(ze[Ct]+(ct+1)),ce.push(Ct===0?"linear":jb(ot,Ct-1))}v7(se,Pe)}const ge=ae+U;b7(H,K,ce,se,ae,ge),I=Math.max(Q+U,I),b=Math.max(ge,b)};if(po(k)){const D=Tx(k,h);O(j,E,Ax("default",D))}else{const D=i2(k,j,a,p),W=D.length;for(let H=0;H<W;H++){j=j,E=E;const X=D[H],P=Tx(X,h);for(const K in j)O(j[K],j7(E,K),Ax(K,P),H,W)}}_=x,x+=I}return h.forEach((w,S)=>{for(const k in w){const j=w[k];j.sort(w7);const E=[],I=[],O=[];for(let X=0;X<j.length;X++){const{at:P,value:K,easing:re}=j[X];E.push(K),I.push(gl(0,b,P)),O.push(re||"easeOut")}I[0]!==0&&(I.unshift(0),E.unshift(E[0]),O.unshift(S7)),I[I.length-1]!==1&&(I.push(1),E.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const D=d.get(S);D.keyframes[k]=E;const{type:W,...H}=n;D.transition[k]={...H,duration:b,ease:O,times:I,...i}}}),d}function Tx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Ax(t,n){return n[t]||(n[t]=[]),n[t]}function k7(t){return Array.isArray(t)?t:[t]}function j7(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const M7=t=>typeof t=="number",E7=t=>t.every(M7);function T7(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!m5(t)?new D5(n):new j5(n);i.mount(t),Dc.set(t,i)}function A7(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new r8(n);i.mount(t),Dc.set(t,i)}function D7(t,n){return po(t)||typeof t=="number"||typeof t=="string"&&!Xp(n)}function a2(t,n,i,a){const c=[];if(D7(t,n))c.push(P5(t,Xp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=i2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?T7:A7;Dc.has(p)||y(p);const _=Dc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Op(_,{...n,transition:x},{}))}}return c}function N7(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=nr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return C7(c,n,i,{spring:Ac}).forEach(({keyframes:d,transition:h},p)=>{a.push(...a2(p,d,h))}),a}function R7(t){return Array.isArray(t)&&t.some(Array.isArray)}function B7(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(R7(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=N7(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=a2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new K3(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{_l(n.animations,y)})),y}return a}const Dx=B7();var L7=Object.freeze({}),O7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const k=w.slice(0,-7),j=d.get(k);(j==null?void 0:j.type)==="transition"&&(p[w]=S)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:L7}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],_=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},en=new O7;function z7(t,n,i){const a=g.useId(),c=`${t}-${a}`,u=g.useRef(n),d=JSON.stringify(n);u.current=n;const h=g.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=g.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);g.useEffect(()=>(en.registerPanel(c,t,u.current,p.current),()=>en.unregisterPanel(c)),[c,t]);const _=g.useRef(!1);g.useEffect(()=>{if(!_.current){_.current=!0;return}en.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),g.useEffect(()=>en.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=g.useSyncExternalStore(b=>en.subscribe(c,b),()=>en.getValues(c),()=>en.getValues(c));return r2(n,x,"")}function r2(t,n,i){var c,u,d,h,p,y,_,x,b,w;const a={};for(const[S,k]of Object.entries(t)){if(S==="_collapsed")continue;const j=i?`${i}.${S}`:S;if(Array.isArray(k)&&k.length<=4&&typeof k[0]=="number")a[S]=(c=n[j])!=null?c:k[0];else if(typeof k=="number"||typeof k=="boolean"||typeof k=="string")a[S]=(u=n[j])!=null?u:k;else if($7(k)||I7(k))a[S]=(d=n[j])!=null?d:k;else if(P7(k))a[S]=(h=n[j])!=null?h:k;else if(H7(k)){const E=(p=k.default)!=null?p:Y7(k.options);a[S]=(y=n[j])!=null?y:E}else V7(k)?a[S]=(x=(_=n[j])!=null?_:k.default)!=null?x:"#000000":U7(k)?a[S]=(w=(b=n[j])!=null?b:k.default)!=null?w:"":typeof k=="object"&&k!==null&&(a[S]=r2(k,n,j))}return a}function Cl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function $7(t){return Cl(t,"spring")}function I7(t){return Cl(t,"easing")}function P7(t){return Cl(t,"action")}function H7(t){return Cl(t,"select")&&"options"in t&&Array.isArray(t.options)}function V7(t){return Cl(t,"color")}function U7(t){return Cl(t,"text")}function Y7(t){const n=t[0];return typeof n=="string"?n:n.value}function lp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(lp(n)))}function mc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function pc(t,n,i,a,c){var y,_;const u=en.getValue(t,n),d=(y=i.min)!=null?y:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));en.updateValue(t,n,Sd(p,a))}function W7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function km(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function l2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=l2(i.children,n);if(a)return a}}return null}var fd=4;function F7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function X7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=F7(n);return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function G7(t){return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function c2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var u2=g.createContext({activePanelId:null,activePath:null});function q7({children:t}){const[n,i]=g.useState({activePanelId:null,activePath:null}),a=g.useRef(new Set),c=g.useRef(!1),u=g.useRef(null),d=g.useRef(0),h=g.useCallback(p=>{var y;for(const _ of a.current){const x=en.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((y=S.interaction)!=null?y:"scroll")!==p)continue;const k=l2(b.controls,w);if(k&&k.type==="slider")return{panelId:b.id,path:w,control:k,shortcut:S}}}return null},[]);return g.useEffect(()=>{const p=k=>{if(dd())return;const j=k.key.toLowerCase();if((j==="arrowleft"||j==="arrowright"||j==="arrowup"||j==="arrowdown")&&a.current.size>0){const D=h("scroll")||h("drag")||h("move");if(D&&D.control.type==="slider"){k.preventDefault();const W=j==="arrowright"||j==="arrowup"?1:-1,H=mc(D.control,D.shortcut);pc(D.panelId,D.path,D.control,H,W);return}}const E=a.current.has(j);a.current.add(j);const I=km(k),O=en.resolveShortcutTarget(j,I);if(O&&(i({activePanelId:O.panelId,activePath:O.path}),!E&&O.control.type==="toggle")){const D=en.getValue(O.panelId,O.path);en.updateValue(O.panelId,O.path,!D)}E||(u.current=null,d.current=0)},y=k=>{const j=k.key.toLowerCase();if(a.current.delete(j),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let E=!1;for(const I of a.current){const O=km(k),D=en.resolveShortcutTarget(I,O);if(D){i({activePanelId:D.panelId,activePath:D.path}),E=!0;break}}E||i({activePanelId:null,activePath:null})}},_=k=>{var I,O;if(dd())return;const j=km(k);if(a.current.size>0)for(const D of a.current){const W=en.resolveShortcutTarget(D,j);if(!W)continue;const{panelId:H,path:X,control:P}=W;if(((O=(I=P.shortcut)==null?void 0:I.interaction)!=null?O:"scroll")!=="scroll"||P.type!=="slider")continue;k.preventDefault();const re=mc(P,P.shortcut),se=k.deltaY>0?-1:1;pc(H,X,P,re,se);return}const E=en.resolveScrollOnlyTargets();for(const{panelId:D,path:W,control:H,shortcut:X}of E){if(H.type!=="slider")continue;k.preventDefault();const P=mc(H,X),K=k.deltaY>0?-1:1;pc(D,W,H,P,K);return}},x=k=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=k.clientX,d.current=0,k.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=k=>{if(dd()||a.current.size===0)return;if(c.current){const E=h("drag");if(E&&u.current!==null){const I=k.clientX-u.current;u.current=k.clientX,d.current+=I;const O=mc(E.control,E.shortcut),D=Math.trunc(d.current/fd);D!==0&&(d.current-=D*fd,pc(E.panelId,E.path,E.control,O,D))}return}const j=h("move");if(j){if(u.current===null){u.current=k.clientX;return}const E=k.clientX-u.current;u.current=k.clientX,d.current+=E;const I=mc(j.control,j.shortcut),O=Math.trunc(d.current/fd);O!==0&&(d.current-=O*fd,pc(j.panelId,j.path,j.control,I,O))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(u2.Provider,{value:n,children:t})}var Gp="M6 9.5L12 15.5L18 9.5",K7="M5 12.75L10 19L19 5",jm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},Q7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],Z7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Nx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Od({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=g.useState(i),[y,_]=g.useState(!i),x=g.useRef(null),[b,w]=g.useState(void 0),[S,k]=g.useState(typeof window<"u"?window.innerHeight:800);g.useEffect(()=>{if(!a)return;const I=()=>k(window.innerHeight);return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[a]),g.useEffect(()=>{const I=x.current;if(!I)return;const O=new ResizeObserver(()=>{if(h){const D=I.offsetHeight;w(W=>W===D?W:D)}});return O.observe(I),()=>O.disconnect()},[h]);const j=()=>{if(c&&a)return;const I=!h;p(I),_(!I),u==null||u(I)},E=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:j,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Nx.path,fill:"currentColor"}),Nx.circles.map((I,O)=>l.jsx("circle",{cx:I.cx,cy:I.cy,r:I.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},O))]}),!a&&l.jsx(ai.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Gp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:I=>I.stopPropagation(),children:d})]}),l.jsx(Ud,{initial:!1,children:h&&l.jsx(ai.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:E});const I=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ai.div,{className:"dialkit-panel-inner",style:I,onClick:h?void 0:j,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:E})}return E}var J7=3,eM=32,tM=200,nM=8;function $o({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var at;const y=g.useRef(null),_=g.useRef(null),x=g.useRef(null),b=g.useRef(null),w=g.useRef(null),[S,k]=g.useState(!1),[j,E]=g.useState(!1),[I,O]=g.useState(!1),[D,W]=g.useState(!1),[H,X]=g.useState(!1),[P,K]=g.useState(!1),[re,se]=g.useState(""),je=g.useRef(null),Pe=g.useRef(null),J=g.useRef(!0),de=g.useRef(null),z=g.useRef(null),ce=g.useRef(1),U=(n-a)/(c-a)*100,Q=S||I,_e=rp(U),N=ud(_e,V=>`${V}%`),ae=ud(_e,V=>`max(5px, calc(${V}% - 9px))`),oe=rp(0),ge=ud(oe,V=>`calc(100% + ${Math.abs(V)}px)`),De=ud(oe,V=>V<0?V:0);g.useEffect(()=>{!S&&!de.current&&_e.jump(U)},[U,S,_e]);const ze=g.useCallback(V=>{const Z=z.current;if(!Z)return n;const be=(V-Z.left)/ce.current,Je=y.current?y.current.offsetWidth:Z.width,Ge=Math.max(0,Math.min(1,be/Je)),Ne=a+Ge*(c-a);return Math.max(a,Math.min(c,Ne))},[a,c,n]),ot=g.useCallback(V=>(V-a)/(c-a)*100,[a,c]),ct=g.useCallback((V,Z)=>{const fe=z.current;if(!fe)return 0;const be=Z<0?fe.left-V:V-fe.right,Je=Math.max(0,be-eM);return Z*nM*Math.sqrt(Math.min(Je/tM,1))},[]),Ct=g.useCallback(V=>{if(!P&&(V.preventDefault(),V.target.setPointerCapture(V.pointerId),Pe.current={x:V.clientX,y:V.clientY},J.current=!0,k(!0),y.current)){z.current=y.current.getBoundingClientRect();const Z=y.current.offsetWidth;ce.current=z.current.width/Z}},[P]),Yt=g.useCallback(V=>{if(!S||!Pe.current)return;const Z=V.clientX-Pe.current.x,fe=V.clientY-Pe.current.y,be=Math.sqrt(Z*Z+fe*fe);if(J.current&&be>J7&&(J.current=!1,E(!0)),!J.current){const Je=z.current;Je&&(V.clientX<Je.left?oe.jump(ct(V.clientX,-1)):V.clientX>Je.right?oe.jump(ct(V.clientX,1)):oe.jump(0));const Ge=ze(V.clientX),Ne=ot(Ge);de.current&&(de.current.stop(),de.current=null),_e.jump(Ne),i(Sd(Ge,u))}},[S,ze,ot,i,_e,oe,ct]),xt=g.useCallback(V=>{if(S){if(J.current){const Z=ze(V.clientX),be=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((Z-a)/u)*u)):W7(Z,a,c),Je=ot(be);de.current&&de.current.stop(),de.current=Dx(_e,Je,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{de.current=null}}),i(Sd(be,u))}oe.get()!==0&&Dx(oe,0,{type:"spring",visualDuration:.35,bounce:.15}),k(!1),E(!1),Pe.current=null}},[S,ze,ot,i,a,c,_e,oe]);g.useEffect(()=>(D&&!P&&!H?je.current=setTimeout(()=>{X(!0)},800):!D&&!P&&(je.current&&(clearTimeout(je.current),je.current=null),X(!1)),()=>{je.current&&clearTimeout(je.current)}),[D,P,H]),g.useEffect(()=>{P&&x.current&&(x.current.focus(),x.current.select())},[P]);const mt=V=>{se(V.target.value)},Ke=()=>{const V=parseFloat(re);if(!isNaN(V)){const Z=Math.max(a,Math.min(c,V));i(Sd(Z,u))}K(!1),W(!1),X(!1)},Wt=V=>{H&&(V.stopPropagation(),V.preventDefault(),K(!0),se(n.toFixed(lp(u))))},qe=V=>{V.key==="Enter"?Ke():V.key==="Escape"&&(K(!1),W(!1))},_t=()=>{Ke()},ke=n.toFixed(lp(u)),ne=8,Me=10,Xe=10;let Ue=30,Ye=78;const nt=(at=y.current)==null?void 0:at.offsetWidth;nt&&nt>0&&(b.current&&(Ue=(Me+b.current.offsetWidth+ne)/nt*100),w.current&&(Ye=(nt-Xe-w.current.offsetWidth-ne)/nt*100));const ft=U<Ue||U>Ye,dt=Q?ft?.1:j?.9:.5:0,gt=(c-a)/u,$t=gt<=10?Array.from({length:gt-1},(V,Z)=>{const fe=(Z+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${fe}%`}},Z)}):Array.from({length:9},(V,Z)=>{const fe=(Z+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${fe}%`}},Z)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ai.div,{ref:_,className:`dialkit-slider ${Q?"dialkit-slider-active":""}`,onPointerDown:Ct,onPointerMove:Yt,onPointerUp:xt,onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),style:{width:ge,x:De},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:$t}),l.jsx(ai.div,{className:"dialkit-slider-fill",style:{width:N}}),l.jsx(ai.div,{className:"dialkit-slider-handle",style:{left:ae,y:"-50%"},animate:{opacity:dt,scaleX:Q?1:.25,scaleY:Q&&ft?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:X7(h)})]}),P?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:re,onChange:mt,onKeyDown:qe,onBlur:_t,onClick:V=>V.stopPropagation(),onMouseDown:V=>V.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${H?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>W(!0),onMouseLeave:()=>W(!1),onClick:Wt,onMouseDown:V=>H&&V.stopPropagation(),style:{cursor:H?"text":"default"},children:ke})]})})}function qp({options:t,value:n,onChange:i}){const a=g.useRef(null),c=g.useRef(!1),[u,d]=g.useState(null),h=g.useCallback(()=>{const y=a.current;if(!y)return;const _=y.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);g.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const _=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(_),children:y.label},y.value)})]})}function sM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:G7(a)})]}),l.jsx(qp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function oM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-y),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function d2({spring:t,isSimpleMode:n}){var k,j,E,I,O;let c,u,d;if(n){const D=(k=t.visualDuration)!=null?k:.3,W=(j=t.bounce)!=null?j:.2;d=1,c=2*Math.PI/D,c=Math.pow(c,2),u=2*(1-W)*Math.sqrt(c*d)}else c=(E=t.stiffness)!=null?E:400,u=(I=t.damping)!=null?I:17,d=(O=t.mass)!=null?O:1;const h=2,p=oM(c,u,d,h),y=p.map(([,D])=>D),_=Math.min(...y),b=Math.max(...y)-_,w=p.map(([D,W],H)=>{const X=D/h*256,K=140-((W-_)/(b||1)*140*.6+140*.2);return`${H===0?"M":"L"} ${X} ${K}`}).join(" "),S=[];for(let D=1;D<4;D++){const W=64*D,H=140/4*D;S.push(l.jsx("line",{x1:W,y1:0,x2:W,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${D}`),l.jsx("line",{x1:0,y1:H,x2:256,y2:H,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${D}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function iM({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=g.useSyncExternalStore(k=>en.subscribe(t,k),()=>en.getSpringMode(t,n),()=>en.getSpringMode(t,n)),d=u==="simple",h=g.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=k=>{en.updateSpringMode(t,n,k),c(k==="simple"?h.current.simple:h.current.advanced)},y=(k,j)=>{if(d){const{stiffness:E,damping:I,mass:O,...D}=a;c({...D,[k]:j})}else{const{visualDuration:E,bounce:I,...O}=a;c({...O,[k]:j})}};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(d2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:k=>y("visualDuration",k),min:.1,max:1,step:.05,unit:"s"}),l.jsx($o,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:k=>y("bounce",k),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:k=>y("stiffness",k),min:1,max:1e3,step:10}),l.jsx($o,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:k=>y("damping",k),min:1,max:100,step:1}),l.jsx($o,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:k=>y("mass",k),min:.1,max:10,step:.1})]})]})})}function aM({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function rM({panelId:t,path:n,label:i,value:a,onChange:c}){var S,k,j,E,I;const u=g.useSyncExternalStore(O=>en.subscribe(t,O),()=>en.getTransitionMode(t,n),()=>en.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=g.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=O=>{en.updateTransitionMode(t,n,O),c(O==="easing"?p.current.easing:O==="simple"?p.current.simple:p.current.advanced)},b=(O,D)=>{if(h){const{stiffness:W,damping:H,mass:X,...P}=y;c({...P,[O]:D})}else{const{visualDuration:W,bounce:H,...X}=y;c({...X,[O]:D})}},w=(O,D)=>{const W=[..._.ease];W[O]=D,c({..._,ease:W})};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(aM,{easing:_}):l.jsx(d2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"x1",value:_.ease[0],onChange:O=>w(0,O),min:0,max:1,step:.01}),l.jsx($o,{label:"y1",value:_.ease[1],onChange:O=>w(1,O),min:-1,max:2,step:.01}),l.jsx($o,{label:"x2",value:_.ease[2],onChange:O=>w(2,O),min:0,max:1,step:.01}),l.jsx($o,{label:"y2",value:_.ease[3],onChange:O=>w(3,O),min:-1,max:2,step:.01}),l.jsx($o,{label:"Duration",value:_.duration,onChange:O=>c({..._,duration:O}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(cM,{ease:_.ease,onChange:O=>c({..._,ease:O})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"Duration",value:(S=y.visualDuration)!=null?S:.3,onChange:O=>b("visualDuration",O),min:.1,max:1,step:.05,unit:"s"}),l.jsx($o,{label:"Bounce",value:(k=y.bounce)!=null?k:.2,onChange:O=>b("bounce",O),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"Stiffness",value:(j=y.stiffness)!=null?j:400,onChange:O=>b("stiffness",O),min:1,max:1e3,step:10}),l.jsx($o,{label:"Damping",value:(E=y.damping)!=null?E:17,onChange:O=>b("damping",O),min:1,max:100,step:1}),l.jsx($o,{label:"Mass",value:(I=y.mass)!=null?I:1,onChange:O=>b("mass",O),min:.1,max:10,step:.1})]})]})})}function Rx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function lM(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function cM({ease:t,onChange:n}){const[i,a]=g.useState(!1),[c,u]=g.useState(""),d=()=>{u(Rx(t)),a(!0)},h=()=>{const y=lM(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Rx(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function uM({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function dM(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function fM(t){return t.map(n=>typeof n=="string"?{value:n,label:dM(n)}:n)}function hM({label:t,value:n,options:i,onChange:a}){var k;const[c,u]=g.useState(!1),d=g.useRef(null),h=g.useRef(null),[p,y]=g.useState(null),[_,x]=g.useState(null),b=fM(i),w=b.find(j=>j.value===n),S=g.useCallback(()=>{const j=d.current;if(!j)return;const E=j.getBoundingClientRect(),I=8+b.length*36,O=window.innerHeight-E.bottom-4,D=O<I&&E.top>O;x({top:D?E.top-4:E.bottom+4,left:E.left,width:E.width,above:D})},[b.length]);return g.useEffect(()=>{var E;const j=(E=d.current)==null?void 0:E.closest(".dialkit-root");y(j!=null?j:document.body)},[]),g.useEffect(()=>{c&&S()},[c,S]),g.useEffect(()=>{if(!c)return;const j=E=>{const I=E.target;d.current&&!d.current.contains(I)&&h.current&&!h.current.contains(I)&&u(!1)};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(k=w==null?void 0:w.label)!=null?k:n}),l.jsx(ai.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Gp})})]})]}),p&&Bc.createPortal(l.jsx(Ud,{children:c&&_&&l.jsx(ai.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(j=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(j.value===n),onClick:()=>{a(j.value),u(!1)},children:j.label},j.value))})}),p)]})}var mM=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function pM({label:t,value:n,onChange:i}){const[a,c]=g.useState(!1),[u,d]=g.useState(n),h=g.useRef(null);g.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),mM.test(u)?i(u):d(n)}function y(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?_M(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function _M(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function gM({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=g.useState(!1),d=g.useRef(null),h=g.useRef(null),[p,y]=g.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(E=>E.id===i),b=g.useCallback(()=>{var I;if(!_)return;const E=(I=d.current)==null?void 0:I.getBoundingClientRect();E&&y({top:E.bottom+4,left:E.left,width:E.width}),u(!0)},[_]),w=g.useCallback(()=>u(!1),[]),S=g.useCallback(()=>{c?w():b()},[c,b,w]);g.useEffect(()=>{if(!c)return;const E=I=>{var D,W;const O=I.target;(D=d.current)!=null&&D.contains(O)||(W=h.current)!=null&&W.contains(O)||w()};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c,w]);const k=E=>{E?en.loadPreset(t,E):en.clearActivePreset(t),w()},j=(E,I)=>{E.stopPropagation(),en.deletePreset(t,I)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ai.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Gp})})]}),Bc.createPortal(l.jsx(Ud,{children:c&&l.jsxs(ai.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>k(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(E=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(E.id===i),onClick:()=>k(E.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:E.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:I=>j(I,E.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Z7.map((I,O)=>l.jsx("path",{d:I},O))})})]},E.id))]})}),document.body)]})}function yM({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=g.useState(!1),[u,d]=g.useState(n),h=g.useContext(u2);Object.keys(t.shortcuts).length>0;const p=g.useSyncExternalStore(j=>en.subscribe(t.id,j),()=>en.getValues(t.id),()=>en.getValues(t.id)),y=en.getPresets(t.id),_=en.getActivePresetId(t.id),x=()=>{const j=y.length+2;en.savePreset(t.id,`Version ${j}`)},b=()=>{const j=JSON.stringify(p,null,2),E=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${j}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(E),c(!0),setTimeout(()=>c(!1),1500)},w=j=>{var I,O,D;const E=p[j.path];switch(j.type){case"slider":return l.jsx($o,{label:j.label,value:E,onChange:W=>en.updateValue(t.id,j.path,W),min:j.min,max:j.max,step:j.step,shortcut:j.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===j.path},j.path);case"toggle":return l.jsx(sM,{label:j.label,checked:E,onChange:W=>en.updateValue(t.id,j.path,W),shortcut:j.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===j.path},j.path);case"spring":return l.jsx(iM,{panelId:t.id,path:j.path,label:j.label,spring:E,onChange:W=>en.updateValue(t.id,j.path,W)},j.path);case"transition":return l.jsx(rM,{panelId:t.id,path:j.path,label:j.label,value:E,onChange:W=>en.updateValue(t.id,j.path,W)},j.path);case"folder":return l.jsx(Od,{title:j.label,defaultOpen:(I=j.defaultOpen)!=null?I:!0,children:(O=j.children)==null?void 0:O.map(w)},j.path);case"text":return l.jsx(uM,{label:j.label,value:E,onChange:W=>en.updateValue(t.id,j.path,W),placeholder:j.placeholder},j.path);case"select":return l.jsx(hM,{label:j.label,value:E,options:(D=j.options)!=null?D:[],onChange:W=>en.updateValue(t.id,j.path,W)},j.path);case"color":return l.jsx(pM,{label:j.label,value:E,onChange:W=>en.updateValue(t.id,j.path,W)},j.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>en.triggerAction(t.id,j.path),children:j.label},j.path);default:return null}},S=()=>t.controls.map(w),k=l.jsxs(l.Fragment,{children:[l.jsx(ai.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:Q7.map((j,E)=>l.jsx("path",{d:j},E))})}),l.jsx(gM,{panelId:t.id,presets:y,activePresetId:_,onAdd:x}),l.jsx(ai.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Ud,{initial:!1,mode:"wait",children:a?l.jsx(ai.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:K7})},"check"):l.jsxs(ai.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:jm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:jm.sparkle,fill:"currentColor"}),l.jsx("path",{d:jm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Od,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:k,children:S()})})}var xM=typeof process<"u"?!1:!(typeof import.meta<"u");function bM({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=xM}){if(!c)return null;const[u,d]=g.useState([]),[h,p]=g.useState(!1),y=i==="inline",_=g.useRef(null),[x,b]=g.useState(null),[w,S]=g.useState(t),k=g.useRef(null),j=g.useRef(!1),E=g.useRef(null),I=g.useRef(!1);g.useEffect(()=>(p(!0),d(en.getPanels()),en.subscribeGlobal(()=>{d(en.getPanels())})),[]),g.useEffect(()=>{if(!_.current||y)return;const P=new MutationObserver(()=>{var se;const K=(se=_.current)==null?void 0:se.querySelector(".dialkit-panel-inner");if(!K)return;if(K.getAttribute("data-collapsed")==="true")k.current&&b(k.current);else{if(x){k.current=x;const je=x.x+21,Pe=window.innerWidth/2;S(je<Pe?"top-left":"top-right")}else S(t);b(null)}});return P.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>P.disconnect()},[y,x,t]);const O=g.useCallback(P=>{var se;const K=(se=_.current)==null?void 0:se.querySelector(".dialkit-panel-inner");if(!K||K.getAttribute("data-collapsed")!=="true")return;const re=_.current.getBoundingClientRect();E.current={pointerX:P.clientX,pointerY:P.clientY,elX:re.left,elY:re.top},I.current=!1,j.current=!0,P.target.setPointerCapture(P.pointerId)},[]),D=g.useCallback(P=>{if(!j.current||!E.current)return;const K=P.clientX-E.current.pointerX,re=P.clientY-E.current.pointerY;!I.current&&Math.abs(K)+Math.abs(re)<4||(I.current=!0,b({x:E.current.elX+K,y:E.current.elY+re}))},[]),W=g.useCallback(P=>{var K;if(j.current&&(j.current=!1,E.current=null,I.current)){P.stopPropagation();const re=(K=_.current)==null?void 0:K.querySelector(".dialkit-panel-inner");if(re){const se=je=>{je.stopPropagation()};re.addEventListener("click",se,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const H=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,X=l.jsx(q7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":y||x?void 0:w,"data-mode":i,style:H,onPointerDown:y?void 0:O,onPointerMove:y?void 0:D,onPointerUp:y?void 0:W,children:u.map(P=>l.jsx(yM,{panel:P,defaultOpen:y||n,inline:y},P.id))})})});return y?X:Bc.createPortal(X,document.body)}const vM=()=>(z7("Git Visualizer",{preview:[1,0,1]}),null),wM=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(vM,{}),l.jsx(bM,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(SC,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});$v.createRoot(document.getElementById("root")).render(l.jsx(wM,{children:l.jsx(aS,{})}));

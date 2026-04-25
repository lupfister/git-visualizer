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
 */var ny;function Dv(){return ny||(ny=1,(function(t){function n(I,se){var W=I.length;I.push(se);e:for(;0<W;){var K=W-1>>>1,ge=I[K];if(0<c(ge,se))I[K]=se,I[W]=ge,W=K;else break e}}function i(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var se=I[0],W=I.pop();if(W!==se){I[0]=W;e:for(var K=0,ge=I.length,R=ge>>>1;K<R;){var re=2*(K+1)-1,ie=I[re],he=re+1,Te=I[he];if(0>c(ie,W))he<ge&&0>c(Te,ie)?(I[K]=Te,I[he]=W,K=he):(I[K]=ie,I[re]=W,K=re);else if(he<ge&&0>c(Te,W))I[K]=Te,I[he]=W,K=he;else break e}}return se}function c(I,se){var W=I.sortIndex-se.sortIndex;return W!==0?W:I.id-se.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,w=!1,S=!1,j=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(I){for(var se=i(y);se!==null;){if(se.callback===null)a(y);else if(se.startTime<=I)a(y),se.sortIndex=se.expirationTime,n(p,se);else break;se=i(y)}}function Y(I){if(j=!1,N(I),!S)if(i(p)!==null)S=!0,H||(H=!0,je());else{var se=i(y);se!==null&&ue(Y,se.startTime-I)}}var H=!1,X=-1,U=5,Z=-1;function le(){return k?!0:!(t.unstable_now()-Z<U)}function oe(){if(k=!1,H){var I=t.unstable_now();Z=I;var se=!0;try{e:{S=!1,j&&(j=!1,$(X),X=-1),w=!0;var W=b;try{t:{for(N(I),x=i(p);x!==null&&!(x.expirationTime>I&&le());){var K=x.callback;if(typeof K=="function"){x.callback=null,b=x.priorityLevel;var ge=K(x.expirationTime<=I);if(I=t.unstable_now(),typeof ge=="function"){x.callback=ge,N(I),se=!0;break t}x===i(p)&&a(p),N(I)}else a(p);x=i(p)}if(x!==null)se=!0;else{var R=i(y);R!==null&&ue(Y,R.startTime-I),se=!1}}break e}finally{x=null,b=W,w=!1}se=void 0}}finally{se?je():H=!1}}}var je;if(typeof L=="function")je=function(){L(oe)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,J=ze.port2;ze.port1.onmessage=oe,je=function(){J.postMessage(null)}}else je=function(){M(oe,0)};function ue(I,se){X=M(function(){I(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(I){switch(b){case 1:case 2:case 3:var se=3;break;default:se=b}var W=b;b=se;try{return I()}finally{b=W}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(I,se){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=b;b=I;try{return se()}finally{b=W}},t.unstable_scheduleCallback=function(I,se,W){var K=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?K+W:K):W=K,I){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=W+ge,I={id:g++,callback:se,priorityLevel:I,startTime:W,expirationTime:ge,sortIndex:-1},W>K?(I.sortIndex=W,n(y,I),i(p)===null&&I===i(y)&&(j?($(X),X=-1):j=!0,ue(Y,W-K))):(I.sortIndex=ge,n(p,I),S||w||(S=!0,H||(H=!0,je()))),I},t.unstable_shouldYield=le,t.unstable_wrapCallback=function(I){var se=b;return function(){var W=b;b=se;try{return I.apply(this,arguments)}finally{b=W}}}})(Ih)),Ih}var sy;function Nv(){return sy||(sy=1,$h.exports=Dv()),$h.exports}var Ph={exports:{}},en={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Rv(){if(oy)return en;oy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(R){return R===null||typeof R!="object"?null:(R=b&&R[b]||R["@@iterator"],typeof R=="function"?R:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function M(R,re,ie){this.props=R,this.context=re,this.refs=k,this.updater=ie||S}M.prototype.isReactComponent={},M.prototype.setState=function(R,re){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,re,"setState")},M.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function $(){}$.prototype=M.prototype;function L(R,re,ie){this.props=R,this.context=re,this.refs=k,this.updater=ie||S}var N=L.prototype=new $;N.constructor=L,j(N,M.prototype),N.isPureReactComponent=!0;var Y=Array.isArray;function H(){}var X={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function Z(R,re,ie){var he=ie.ref;return{$$typeof:t,type:R,key:re,ref:he!==void 0?he:null,props:ie}}function le(R,re){return Z(R.type,re,R.props)}function oe(R){return typeof R=="object"&&R!==null&&R.$$typeof===t}function je(R){var re={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ie){return re[ie]})}var ze=/\/+/g;function J(R,re){return typeof R=="object"&&R!==null&&R.key!=null?je(""+R.key):re.toString(36)}function ue(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(H,H):(R.status="pending",R.then(function(re){R.status==="pending"&&(R.status="fulfilled",R.value=re)},function(re){R.status==="pending"&&(R.status="rejected",R.reason=re)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function I(R,re,ie,he,Te){var $e=typeof R;($e==="undefined"||$e==="boolean")&&(R=null);var Be=!1;if(R===null)Be=!0;else switch($e){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(R.$$typeof){case t:case n:Be=!0;break;case g:return Be=R._init,I(Be(R._payload),re,ie,he,Te)}}if(Be)return Te=Te(R),Be=he===""?"."+J(R,0):he,Y(Te)?(ie="",Be!=null&&(ie=Be.replace(ze,"$&/")+"/"),I(Te,re,ie,"",function(It){return It})):Te!=null&&(oe(Te)&&(Te=le(Te,ie+(Te.key==null||R&&R.key===Te.key?"":(""+Te.key).replace(ze,"$&/")+"/")+Be)),re.push(Te)),1;Be=0;var tt=he===""?".":he+":";if(Y(R))for(var _t=0;_t<R.length;_t++)he=R[_t],$e=tt+J(he,_t),Be+=I(he,re,ie,$e,Te);else if(_t=w(R),typeof _t=="function")for(R=_t.call(R),_t=0;!(he=R.next()).done;)he=he.value,$e=tt+J(he,_t++),Be+=I(he,re,ie,$e,Te);else if($e==="object"){if(typeof R.then=="function")return I(ue(R),re,ie,he,Te);throw re=String(R),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return Be}function se(R,re,ie){if(R==null)return R;var he=[],Te=0;return I(R,he,"","",function($e){return re.call(ie,$e,Te++)}),he}function W(R){if(R._status===-1){var re=R._result;re=re(),re.then(function(ie){(R._status===0||R._status===-1)&&(R._status=1,R._result=ie)},function(ie){(R._status===0||R._status===-1)&&(R._status=2,R._result=ie)}),R._status===-1&&(R._status=0,R._result=re)}if(R._status===1)return R._result.default;throw R._result}var K=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},ge={map:se,forEach:function(R,re,ie){se(R,function(){re.apply(this,arguments)},ie)},count:function(R){var re=0;return se(R,function(){re++}),re},toArray:function(R){return se(R,function(re){return re})||[]},only:function(R){if(!oe(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return en.Activity=x,en.Children=ge,en.Component=M,en.Fragment=i,en.Profiler=c,en.PureComponent=L,en.StrictMode=a,en.Suspense=p,en.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,en.__COMPILER_RUNTIME={__proto__:null,c:function(R){return X.H.useMemoCache(R)}},en.cache=function(R){return function(){return R.apply(null,arguments)}},en.cacheSignal=function(){return null},en.cloneElement=function(R,re,ie){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var he=j({},R.props),Te=R.key;if(re!=null)for($e in re.key!==void 0&&(Te=""+re.key),re)!U.call(re,$e)||$e==="key"||$e==="__self"||$e==="__source"||$e==="ref"&&re.ref===void 0||(he[$e]=re[$e]);var $e=arguments.length-2;if($e===1)he.children=ie;else if(1<$e){for(var Be=Array($e),tt=0;tt<$e;tt++)Be[tt]=arguments[tt+2];he.children=Be}return Z(R.type,Te,he)},en.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},en.createElement=function(R,re,ie){var he,Te={},$e=null;if(re!=null)for(he in re.key!==void 0&&($e=""+re.key),re)U.call(re,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(Te[he]=re[he]);var Be=arguments.length-2;if(Be===1)Te.children=ie;else if(1<Be){for(var tt=Array(Be),_t=0;_t<Be;_t++)tt[_t]=arguments[_t+2];Te.children=tt}if(R&&R.defaultProps)for(he in Be=R.defaultProps,Be)Te[he]===void 0&&(Te[he]=Be[he]);return Z(R,$e,Te)},en.createRef=function(){return{current:null}},en.forwardRef=function(R){return{$$typeof:h,render:R}},en.isValidElement=oe,en.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:W}},en.memo=function(R,re){return{$$typeof:y,type:R,compare:re===void 0?null:re}},en.startTransition=function(R){var re=X.T,ie={};X.T=ie;try{var he=R(),Te=X.S;Te!==null&&Te(ie,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(H,K)}catch($e){K($e)}finally{re!==null&&ie.types!==null&&(re.types=ie.types),X.T=re}},en.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},en.use=function(R){return X.H.use(R)},en.useActionState=function(R,re,ie){return X.H.useActionState(R,re,ie)},en.useCallback=function(R,re){return X.H.useCallback(R,re)},en.useContext=function(R){return X.H.useContext(R)},en.useDebugValue=function(){},en.useDeferredValue=function(R,re){return X.H.useDeferredValue(R,re)},en.useEffect=function(R,re){return X.H.useEffect(R,re)},en.useEffectEvent=function(R){return X.H.useEffectEvent(R)},en.useId=function(){return X.H.useId()},en.useImperativeHandle=function(R,re,ie){return X.H.useImperativeHandle(R,re,ie)},en.useInsertionEffect=function(R,re){return X.H.useInsertionEffect(R,re)},en.useLayoutEffect=function(R,re){return X.H.useLayoutEffect(R,re)},en.useMemo=function(R,re){return X.H.useMemo(R,re)},en.useOptimistic=function(R,re){return X.H.useOptimistic(R,re)},en.useReducer=function(R,re,ie){return X.H.useReducer(R,re,ie)},en.useRef=function(R){return X.H.useRef(R)},en.useState=function(R){return X.H.useState(R)},en.useSyncExternalStore=function(R,re,ie){return X.H.useSyncExternalStore(R,re,ie)},en.useTransition=function(){return X.H.useTransition()},en.version="19.2.4",en}var iy;function cp(){return iy||(iy=1,Ph.exports=Rv()),Ph.exports}var Hh={exports:{}},Bo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function Bv(){if(ay)return Bo;ay=1;var t=cp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Bo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},Bo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},Bo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},Bo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Bo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Bo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},Bo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Bo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},Bo.requestFormReset=function(p){a.d.r(p)},Bo.unstable_batchedUpdates=function(p,y){return p(y)},Bo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Bo.useFormStatus=function(){return d.H.useHostTransitionStatus()},Bo.version="19.2.4",Bo}var ry;function Lx(){if(ry)return Hh.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=Bv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Lv(){if(ly)return oc;ly=1;var t=Nv(),n=cp(),i=Lx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case Y:return"Suspense";case H:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case N:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return s=e.displayName||null,s!==null?s:J(e.type)||"Memo";case U:s=e._payload,e=e._init;try{return J(e(s))}catch{}}return null}var ue=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},K=[],ge=-1;function R(e){return{current:e}}function re(e){0>ge||(e.current=K[ge],K[ge]=null,ge--)}function ie(e,s){ge++,K[ge]=e.current,e.current=s}var he=R(null),Te=R(null),$e=R(null),Be=R(null);function tt(e,s){switch(ie($e,s),ie(Te,e),ie(he,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?S0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=S0(s),e=C0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}re(he),ie(he,e)}function _t(){re(he),re(Te),re($e)}function It(e){e.memoizedState!==null&&ie(Be,e);var s=he.current,o=C0(s,e.type);s!==o&&(ie(Te,e),ie(he,o))}function vt(e){Te.current===e&&(re(he),re(Te)),Be.current===e&&(re(Be),Jl._currentValue=W)}var yt,Ze;function Yt(e){if(yt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);yt=s&&s[1]||"",Ze=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+Ze}var Qe=!1;function pt(e,s){if(!e||Qe)return"";Qe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Oe=function(){throw Error()};if(Object.defineProperty(Oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Oe,[])}catch(ve){var xe=ve}Reflect.construct(e,[],Oe)}else{try{Oe.call()}catch(ve){xe=ve}e.call(Oe.prototype)}}else{try{throw Error()}catch(ve){xe=ve}(Oe=e())&&typeof Oe.catch=="function"&&Oe.catch(function(){})}}catch(ve){if(ve&&xe&&typeof ve.stack=="string")return[ve.stack,xe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var G=v.split(`
`),_e=A.split(`
`);for(f=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;f<_e.length&&!_e[f].includes("DetermineComponentFrameRoot");)f++;if(r===G.length||f===_e.length)for(r=G.length-1,f=_e.length-1;1<=r&&0<=f&&G[r]!==_e[f];)f--;for(;1<=r&&0<=f;r--,f--)if(G[r]!==_e[f]){if(r!==1||f!==1)do if(r--,f--,0>f||G[r]!==_e[f]){var Ee=`
`+G[r].replace(" at new "," at ");return e.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",e.displayName)),Ee}while(1<=r&&0<=f);break}}}finally{Qe=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Yt(o):""}function ke(e,s){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return e.child!==s&&s!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return pt(e.type,!1);case 11:return pt(e.type.render,!1);case 1:return pt(e.type,!0);case 31:return Yt("Activity");default:return""}}function ne(e){try{var s="",o=null;do s+=ke(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Me=Object.prototype.hasOwnProperty,Xe=t.unstable_scheduleCallback,Ye=t.unstable_cancelCallback,ct=t.unstable_shouldYield,Pe=t.unstable_requestPaint,ut=t.unstable_now,dt=t.unstable_getCurrentPriorityLevel,bt=t.unstable_ImmediatePriority,zt=t.unstable_UserBlockingPriority,rt=t.unstable_NormalPriority,V=t.unstable_LowPriority,Q=t.unstable_IdlePriority,fe=t.log,be=t.unstable_setDisableYieldValue,Je=null,Ge=null;function De(e){if(typeof fe=="function"&&be(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(Je,e)}catch{}}var St=Math.clz32?Math.clz32:Ct,He=Math.log,Ft=Math.LN2;function Ct(e){return e>>>=0,e===0?32:31-(He(e)/Ft|0)|0}var nt=256,Ot=262144,Pt=4194304;function Kt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function st(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=Kt(r):(v&=A,v!==0?f=Kt(v):o||(o=A&~e,o!==0&&(f=Kt(o))))):(A=r&~m,A!==0?f=Kt(A):v!==0?f=Kt(v):o||(o=r&~e,o!==0&&(f=Kt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function et(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Dt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wt(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Nt(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function ft(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,_e=e.hiddenUpdates;for(o=v&~o;0<o;){var Ee=31-St(o),Oe=1<<Ee;A[Ee]=0,G[Ee]=-1;var xe=_e[Ee];if(xe!==null)for(_e[Ee]=null,Ee=0;Ee<xe.length;Ee++){var ve=xe[Ee];ve!==null&&(ve.lane&=-536870913)}o&=~Oe}r!==0&&vn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function vn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-St(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function wn(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-St(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function _n(e,s){var o=s&-s;return o=(o&42)!==0?1:fs(o),(o&(e.suspendedLanes|s))!==0?0:o}function fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function An(){var e=se.p;return e!==0?e:(e=window.event,e===void 0?32:X0(e.type))}function kn(e,s){var o=se.p;try{return se.p=e,s()}finally{se.p=o}}var In=Math.random().toString(36).slice(2),un="__reactFiber$"+In,Dn="__reactProps$"+In,ot="__reactContainer$"+In,dn="__reactEvents$"+In,no="__reactListeners$"+In,Eo="__reactHandles$"+In,hs="__reactResources$"+In,Es="__reactMarker$"+In;function Go(e){delete e[un],delete e[Dn],delete e[dn],delete e[no],delete e[Eo]}function ks(e){var s=e[un];if(s)return s;for(var o=e.parentNode;o;){if(s=o[ot]||o[un]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=D0(e);e!==null;){if(o=e[un])return o;e=D0(e)}return s}e=o,o=e.parentNode}return null}function uo(e){if(e=e[un]||e[ot]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function so(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function fo(e){var s=e[hs];return s||(s=e[hs]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function jn(e){e[Es]=!0}var qo=new Set,Ps={};function Ns(e,s){ms(e,s),ms(e+"Capture",s)}function ms(e,s){for(Ps[e]=s,e=0;e<s.length;e++)qo.add(s[e])}var Oo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ho={},Rs={};function Hs(e){return Me.call(Rs,e)?!0:Me.call(ho,e)?!1:Oo.test(e)?Rs[e]=!0:(ho[e]=!0,!1)}function Nn(e,s,o){if(Hs(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function is(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Mn(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function nn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function To(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ps(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function li(e){if(!e._valueTracker){var s=To(e)?"checked":"value";e._valueTracker=ps(e,s,""+e[s])}}function ci(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=To(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ko=/[\n"\\]/g;function xs(e){return e.replace(Ko,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function _s(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+nn(s)):e.value!==""+nn(s)&&(e.value=""+nn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Bs(e,v,nn(s)):o!=null?Bs(e,v,nn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+nn(A):e.removeAttribute("name")}function Rn(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){li(e);return}o=o!=null?""+nn(o):"",s=s!=null?""+nn(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),li(e)}function Bs(e,s,o){s==="number"&&Ao(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function Pn(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+nn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function as(e,s,o){if(s!=null&&(s=""+nn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+nn(o):""}function xi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(ue(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=nn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),li(e)}function zo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Xi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Xi.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function ui(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Gt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Gt(e,m,s[m])}function qn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$o=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(e){return $o.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oo(){}var Qo=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,mo=null;function rs(e){var s=uo(e);if(s&&(e=s.stateNode)){var o=e[Dn]||null;e:switch(e=s.stateNode,s.type){case"input":if(_s(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+xs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[Dn]||null;if(!f)throw Error(a(90));_s(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&ci(r)}break e;case"textarea":as(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Pn(e,!!o.multiple,s,!1)}}}var bs=!1;function po(e,s,o){if(bs)return e(s,o);bs=!0;try{var r=e(s);return r}finally{if(bs=!1,(Sn!==null||mo!==null)&&(vu(),Sn&&(s=Sn,e=mo,mo=Sn=null,rs(s),e)))for(s=0;s<e.length;s++)rs(e[s])}}function rn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[Dn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Us=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=!1;if(Us)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){_o=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{_o=!1}var Wn=null,Zo=null,ao=null;function wo(){if(ao)return ao;var e,s=Zo,o=s.length,r,f="value"in Wn?Wn.value:Wn.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return ao=f.slice(e,1<r?1-r:void 0)}function Ls(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function Do(){return!1}function Qt(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Po:Do,this.isPropagationStopped=Do,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),s}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ts=Qt(Ys),As=x({},Ys,{view:0,detail:0}),go=Qt(As),Ho,yo,js,xo=x({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:on,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(Ho=e.screenX-js.screenX,yo=e.screenY-js.screenY):yo=Ho=0,js=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:yo}}),qs=Qt(xo),T=x({},xo,{dataTransfer:0}),q=Qt(T),pe=x({},As,{relatedTarget:0}),Se=Qt(pe),qe=x({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),at=Qt(qe),Ut=x({},Ys,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lt=Qt(Ut),At=x({},Ys,{data:0}),Ke=Qt(At),Jt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},En={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hn(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=En[e])?!!s[e]:!1}function on(){return Hn}var ls=x({},As,{key:function(e){if(e.key){var s=Jt[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:on,charCode:function(e){return e.type==="keypress"?Ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ws=Qt(ls),Jo=x({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ei=Qt(Jo),Gi=x({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:on}),ja=Qt(Gi),qi=x({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),No=Qt(qi),or=x({},xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ki=Qt(or),Qi=x({},Ys,{newState:0,oldState:0}),Li=Qt(Qi),bi=[9,13,27,32],B=Us&&"CompositionEvent"in window,F=null;Us&&"documentMode"in document&&(F=document.documentMode);var ee=Us&&"TextEvent"in window&&!F,de=Us&&(!B||F&&8<F&&11>=F),Ue=" ",it=!1;function mt(e,s){switch(e){case"keyup":return bi.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Ds(e,s){switch(e){case"compositionend":return Vt(s);case"keypress":return s.which!==32?null:(it=!0,Ue);case"textInput":return e=s.data,e===Ue&&it?null:e;default:return null}}function bo(e,s){if(gn)return e==="compositionend"||!B&&mt(e,s)?(e=wo(),ao=Zo=Wn=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return de&&s.locale!=="ko"?null:s.data;default:return null}}var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zt(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Un[e.type]:s==="textarea"}function cn(e,s,o,r){Sn?mo?mo.push(r):mo=[r]:Sn=r,s=Eu(s,"onChange"),0<s.length&&(o=new Ts("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var hn=null,Kn=null;function ye(e){g0(e,0)}function C(e){var s=so(e);if(ci(s))return e}function E(e,s){if(e==="change")return s}var D=!1;if(Us){var O;if(Us){var P="oninput"in document;if(!P){var ae=document.createElement("div");ae.setAttribute("oninput","return;"),P=typeof ae.oninput=="function"}O=P}else O=!1;D=O&&(!document.documentMode||9<document.documentMode)}function we(){hn&&(hn.detachEvent("onpropertychange",Ne),Kn=hn=null)}function Ne(e){if(e.propertyName==="value"&&C(Kn)){var s=[];cn(s,Kn,e,io(e)),po(ye,s)}}function Ve(e,s,o){e==="focusin"?(we(),hn=s,Kn=o,hn.attachEvent("onpropertychange",Ne)):e==="focusout"&&we()}function Fe(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return C(Kn)}function lt(e,s){if(e==="click")return C(s)}function xt(e,s){if(e==="input"||e==="change")return C(s)}function Et(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var ht=typeof Object.is=="function"?Object.is:Et;function gt(e,s){if(ht(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Me.call(s,f)||!ht(e[f],s[f]))return!1}return!0}function Qn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zn(e,s){var o=Qn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qn(o)}}function vs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?vs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Cn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Ao(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Ao(e.document)}return s}function Vn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Xt=Us&&"documentMode"in document&&11>=document.documentMode,qt=null,ws=null,Tn=null,ro=!1;function Ro(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ro||qt==null||qt!==Ao(r)||(r=qt,"selectionStart"in r&&Vn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&gt(Tn,r)||(Tn=r,r=Eu(ws,"onSelect"),0<r.length&&(s=new Ts("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=qt)))}function cs(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var vi={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Oi={},zi={};Us&&(zi=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Jn(e){if(Oi[e])return Oi[e];if(!vi[e])return e;var s=vi[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in zi)return Oi[e]=s[o];return e}var $i=Jn("animationend"),Zi=Jn("animationiteration"),Pc=Jn("animationstart"),Wd=Jn("transitionrun"),Fd=Jn("transitionstart"),Xd=Jn("transitioncancel"),Kp=Jn("transitionend"),Qp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Ii(e,s){Qp.set(e,s),Ns(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wi=[],Rr=0,qd=0;function Uc(){for(var e=Rr,s=qd=Rr=0;s<e;){var o=wi[s];wi[s++]=null;var r=wi[s];wi[s++]=null;var f=wi[s];wi[s++]=null;var m=wi[s];if(wi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Zp(o,f,m)}}function Vc(e,s,o,r){wi[Rr++]=e,wi[Rr++]=s,wi[Rr++]=o,wi[Rr++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Vc(e,s,o,r),Yc(e)}function ir(e,s){return Vc(e,null,null,s),Yc(e)}function Zp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-St(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Fl)throw Fl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Br={};function f2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,s,o,r){return new f2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,s){var o=e.alternate;return o===null?(o=di(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Jp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=gv(e,o,he.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=di(31,o,s,f),e.elementType=Z,e.lanes=m,e;case j:return ar(o.children,f,m,s);case k:v=8,f|=24;break;case M:return e=di(12,o,s,f|2),e.elementType=M,e.lanes=m,e;case Y:return e=di(13,o,s,f),e.elementType=Y,e.lanes=m,e;case H:return e=di(19,o,s,f),e.elementType=H,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case $:v=9;break e;case N:v=11;break e;case X:v=14;break e;case U:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=di(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ar(e,s,o,r){return e=di(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=di(6,e,null,s),e.lanes=o,e}function e_(e){var s=di(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=di(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var t_=new WeakMap;function Si(e,s){if(typeof e=="object"&&e!==null){var o=t_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ne(s)},t_.set(e,s),s)}return{value:e,source:s,stack:ne(s)}}var Lr=[],Or=0,Fc=null,kl=0,Ci=[],ki=0,Ma=null,Ji=1,ea="";function ua(e,s){Lr[Or++]=kl,Lr[Or++]=Fc,Fc=e,kl=s}function n_(e,s,o){Ci[ki++]=Ji,Ci[ki++]=ea,Ci[ki++]=Ma,Ma=e;var r=Ji;e=ea;var f=32-St(r)-1;r&=~(1<<f),o+=1;var m=32-St(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,Ji=1<<32-St(s)+f|o<<f|r,ea=m+e}else Ji=1<<m|o<<f|r,ea=e}function ef(e){e.return!==null&&(ua(e,1),n_(e,1,0))}function tf(e){for(;e===Fc;)Fc=Lr[--Or],Lr[Or]=null,kl=Lr[--Or],Lr[Or]=null;for(;e===Ma;)Ma=Ci[--ki],Ci[ki]=null,ea=Ci[--ki],Ci[ki]=null,Ji=Ci[--ki],Ci[ki]=null}function s_(e,s){Ci[ki++]=Ji,Ci[ki++]=ea,Ci[ki++]=Ma,Ji=s.id,ea=s.overflow,Ma=e}var So=null,Ss=null,bn=!1,Ea=null,ji=!1,nf=Error(a(519));function Ta(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jl(Si(s,e)),nf}function o_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[un]=e,s[Dn]=r,o){case"dialog":pn("cancel",s),pn("close",s);break;case"iframe":case"object":case"embed":pn("load",s);break;case"video":case"audio":for(o=0;o<Gl.length;o++)pn(Gl[o],s);break;case"source":pn("error",s);break;case"img":case"image":case"link":pn("error",s),pn("load",s);break;case"details":pn("toggle",s);break;case"input":pn("invalid",s),Rn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pn("invalid",s);break;case"textarea":pn("invalid",s),xi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||v0(s.textContent,o)?(r.popover!=null&&(pn("beforetoggle",s),pn("toggle",s)),r.onScroll!=null&&pn("scroll",s),r.onScrollEnd!=null&&pn("scrollend",s),r.onClick!=null&&(s.onclick=oo),s=!0):s=!1,s||Ta(e,!0)}function i_(e){for(So=e.return;So;)switch(So.tag){case 5:case 31:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:So=So.return}}function zr(e){if(e!==So)return!1;if(!bn)return i_(e),bn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&Ss&&Ta(e),i_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ss=A0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ss=A0(e)}else s===27?(s=Ss,Va(e.type)?(e=jh,jh=null,Ss=e):Ss=s):Ss=So?Ei(e.stateNode.nextSibling):null;return!0}function rr(){Ss=So=null,bn=!1}function sf(){var e=Ea;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),Ea=null),e}function jl(e){Ea===null?Ea=[e]:Ea.push(e)}var of=R(null),lr=null,da=null;function Aa(e,s,o){ie(of,s._currentValue),s._currentValue=o}function fa(e){e._currentValue=of.current,re(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var G=0;G<s.length;G++)if(A.context===s[G]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function $r(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;ht(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===Be.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Jl):e=[Jl])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Co(e){return a_(lr,e)}function Gc(e,s){return lr===null&&cr(e),a_(e,s)}function a_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},da===null){if(e===null)throw Error(a(308));da=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else da=da.next=s;return o}var h2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},m2=t.unstable_scheduleCallback,p2=t.unstable_NormalPriority,Ks={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new h2,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&m2(p2,function(){e.controller.abort()})}var El=null,cf=0,Ir=0,Pr=null;function _2(e,s){if(El===null){var o=El=[];cf=0,Ir=fh(),Pr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(r_,r_),s}function r_(){if(--cf===0&&El!==null){Pr!==null&&(Pr.status="fulfilled");var e=El;El=null,Ir=0,Pr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function g2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var l_=I.S;I.S=function(e,s){Wg=ut(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&_2(e,s),l_!==null&&l_(e,s)};var ur=R(null);function uf(){var e=ur.current;return e!==null?e:us.pooledCache}function qc(e,s){s===null?ie(ur,ur.current):ie(ur,s.pool)}function c_(){var e=uf();return e===null?null:{parent:Ks._currentValue,pool:e}}var Hr=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function u_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(oo,oo),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e;default:if(typeof s.status=="string")s.then(oo,oo);else{if(e=us,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e}throw fr=s,Hr}}function dr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(fr=o,Hr):o}}var fr=null;function f_(){if(fr===null)throw Error(a(459));var e=fr;return fr=null,e}function h_(e){if(e===Hr||e===Kc)throw Error(a(483))}var Ur=null,Tl=0;function Zc(e){var s=Tl;return Tl+=1,Ur===null&&(Ur=[]),d_(Ur,e,s)}function Al(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function m_(e){function s(ce,te){if(e){var me=ce.deletions;me===null?(ce.deletions=[te],ce.flags|=16):me.push(te)}}function o(ce,te){if(!e)return null;for(;te!==null;)s(ce,te),te=te.sibling;return null}function r(ce){for(var te=new Map;ce!==null;)ce.key!==null?te.set(ce.key,ce):te.set(ce.index,ce),ce=ce.sibling;return te}function f(ce,te){return ce=ca(ce,te),ce.index=0,ce.sibling=null,ce}function m(ce,te,me){return ce.index=me,e?(me=ce.alternate,me!==null?(me=me.index,me<te?(ce.flags|=67108866,te):me):(ce.flags|=67108866,te)):(ce.flags|=1048576,te)}function v(ce){return e&&ce.alternate===null&&(ce.flags|=67108866),ce}function A(ce,te,me,Le){return te===null||te.tag!==6?(te=Zd(me,ce.mode,Le),te.return=ce,te):(te=f(te,me),te.return=ce,te)}function G(ce,te,me,Le){var $t=me.type;return $t===j?Ee(ce,te,me.props.children,Le,me.key):te!==null&&(te.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===U&&dr($t)===te.type)?(te=f(te,me.props),Al(te,me),te.return=ce,te):(te=Wc(me.type,me.key,me.props,null,ce.mode,Le),Al(te,me),te.return=ce,te)}function _e(ce,te,me,Le){return te===null||te.tag!==4||te.stateNode.containerInfo!==me.containerInfo||te.stateNode.implementation!==me.implementation?(te=Jd(me,ce.mode,Le),te.return=ce,te):(te=f(te,me.children||[]),te.return=ce,te)}function Ee(ce,te,me,Le,$t){return te===null||te.tag!==7?(te=ar(me,ce.mode,Le,$t),te.return=ce,te):(te=f(te,me),te.return=ce,te)}function Oe(ce,te,me){if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return te=Zd(""+te,ce.mode,me),te.return=ce,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case w:return me=Wc(te.type,te.key,te.props,null,ce.mode,me),Al(me,te),me.return=ce,me;case S:return te=Jd(te,ce.mode,me),te.return=ce,te;case U:return te=dr(te),Oe(ce,te,me)}if(ue(te)||je(te))return te=ar(te,ce.mode,me,null),te.return=ce,te;if(typeof te.then=="function")return Oe(ce,Zc(te),me);if(te.$$typeof===L)return Oe(ce,Gc(ce,te),me);Jc(ce,te)}return null}function xe(ce,te,me,Le){var $t=te!==null?te.key:null;if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return $t!==null?null:A(ce,te,""+me,Le);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case w:return me.key===$t?G(ce,te,me,Le):null;case S:return me.key===$t?_e(ce,te,me,Le):null;case U:return me=dr(me),xe(ce,te,me,Le)}if(ue(me)||je(me))return $t!==null?null:Ee(ce,te,me,Le,null);if(typeof me.then=="function")return xe(ce,te,Zc(me),Le);if(me.$$typeof===L)return xe(ce,te,Gc(ce,me),Le);Jc(ce,me)}return null}function ve(ce,te,me,Le,$t){if(typeof Le=="string"&&Le!==""||typeof Le=="number"||typeof Le=="bigint")return ce=ce.get(me)||null,A(te,ce,""+Le,$t);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case w:return ce=ce.get(Le.key===null?me:Le.key)||null,G(te,ce,Le,$t);case S:return ce=ce.get(Le.key===null?me:Le.key)||null,_e(te,ce,Le,$t);case U:return Le=dr(Le),ve(ce,te,me,Le,$t)}if(ue(Le)||je(Le))return ce=ce.get(me)||null,Ee(te,ce,Le,$t,null);if(typeof Le.then=="function")return ve(ce,te,me,Zc(Le),$t);if(Le.$$typeof===L)return ve(ce,te,me,Gc(te,Le),$t);Jc(te,Le)}return null}function Mt(ce,te,me,Le){for(var $t=null,Bn=null,Rt=te,ln=te=0,xn=null;Rt!==null&&ln<me.length;ln++){Rt.index>ln?(xn=Rt,Rt=null):xn=Rt.sibling;var Ln=xe(ce,Rt,me[ln],Le);if(Ln===null){Rt===null&&(Rt=xn);break}e&&Rt&&Ln.alternate===null&&s(ce,Rt),te=m(Ln,te,ln),Bn===null?$t=Ln:Bn.sibling=Ln,Bn=Ln,Rt=xn}if(ln===me.length)return o(ce,Rt),bn&&ua(ce,ln),$t;if(Rt===null){for(;ln<me.length;ln++)Rt=Oe(ce,me[ln],Le),Rt!==null&&(te=m(Rt,te,ln),Bn===null?$t=Rt:Bn.sibling=Rt,Bn=Rt);return bn&&ua(ce,ln),$t}for(Rt=r(Rt);ln<me.length;ln++)xn=ve(Rt,ce,ln,me[ln],Le),xn!==null&&(e&&xn.alternate!==null&&Rt.delete(xn.key===null?ln:xn.key),te=m(xn,te,ln),Bn===null?$t=xn:Bn.sibling=xn,Bn=xn);return e&&Rt.forEach(function(Ga){return s(ce,Ga)}),bn&&ua(ce,ln),$t}function Wt(ce,te,me,Le){if(me==null)throw Error(a(151));for(var $t=null,Bn=null,Rt=te,ln=te=0,xn=null,Ln=me.next();Rt!==null&&!Ln.done;ln++,Ln=me.next()){Rt.index>ln?(xn=Rt,Rt=null):xn=Rt.sibling;var Ga=xe(ce,Rt,Ln.value,Le);if(Ga===null){Rt===null&&(Rt=xn);break}e&&Rt&&Ga.alternate===null&&s(ce,Rt),te=m(Ga,te,ln),Bn===null?$t=Ga:Bn.sibling=Ga,Bn=Ga,Rt=xn}if(Ln.done)return o(ce,Rt),bn&&ua(ce,ln),$t;if(Rt===null){for(;!Ln.done;ln++,Ln=me.next())Ln=Oe(ce,Ln.value,Le),Ln!==null&&(te=m(Ln,te,ln),Bn===null?$t=Ln:Bn.sibling=Ln,Bn=Ln);return bn&&ua(ce,ln),$t}for(Rt=r(Rt);!Ln.done;ln++,Ln=me.next())Ln=ve(Rt,ce,ln,Ln.value,Le),Ln!==null&&(e&&Ln.alternate!==null&&Rt.delete(Ln.key===null?ln:Ln.key),te=m(Ln,te,ln),Bn===null?$t=Ln:Bn.sibling=Ln,Bn=Ln);return e&&Rt.forEach(function(Ev){return s(ce,Ev)}),bn&&ua(ce,ln),$t}function ns(ce,te,me,Le){if(typeof me=="object"&&me!==null&&me.type===j&&me.key===null&&(me=me.props.children),typeof me=="object"&&me!==null){switch(me.$$typeof){case w:e:{for(var $t=me.key;te!==null;){if(te.key===$t){if($t=me.type,$t===j){if(te.tag===7){o(ce,te.sibling),Le=f(te,me.props.children),Le.return=ce,ce=Le;break e}}else if(te.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===U&&dr($t)===te.type){o(ce,te.sibling),Le=f(te,me.props),Al(Le,me),Le.return=ce,ce=Le;break e}o(ce,te);break}else s(ce,te);te=te.sibling}me.type===j?(Le=ar(me.props.children,ce.mode,Le,me.key),Le.return=ce,ce=Le):(Le=Wc(me.type,me.key,me.props,null,ce.mode,Le),Al(Le,me),Le.return=ce,ce=Le)}return v(ce);case S:e:{for($t=me.key;te!==null;){if(te.key===$t)if(te.tag===4&&te.stateNode.containerInfo===me.containerInfo&&te.stateNode.implementation===me.implementation){o(ce,te.sibling),Le=f(te,me.children||[]),Le.return=ce,ce=Le;break e}else{o(ce,te);break}else s(ce,te);te=te.sibling}Le=Jd(me,ce.mode,Le),Le.return=ce,ce=Le}return v(ce);case U:return me=dr(me),ns(ce,te,me,Le)}if(ue(me))return Mt(ce,te,me,Le);if(je(me)){if($t=je(me),typeof $t!="function")throw Error(a(150));return me=$t.call(me),Wt(ce,te,me,Le)}if(typeof me.then=="function")return ns(ce,te,Zc(me),Le);if(me.$$typeof===L)return ns(ce,te,Gc(ce,me),Le);Jc(ce,me)}return typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint"?(me=""+me,te!==null&&te.tag===6?(o(ce,te.sibling),Le=f(te,me),Le.return=ce,ce=Le):(o(ce,te),Le=Zd(me,ce.mode,Le),Le.return=ce,ce=Le),v(ce)):o(ce,te)}return function(ce,te,me,Le){try{Tl=0;var $t=ns(ce,te,me,Le);return Ur=null,$t}catch(Rt){if(Rt===Hr||Rt===Kc)throw Rt;var Bn=di(29,Rt,null,ce.mode);return Bn.lanes=Le,Bn.return=ce,Bn}finally{}}}var hr=m_(!0),p_=m_(!1),Da=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(zn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Zp(e,null,o),s}return Vc(e,r,s,o),Yc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,wn(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Nl(){if(pf){var e=Pr;if(e!==null)throw e}}function Rl(e,s,o,r){pf=!1;var f=e.updateQueue;Da=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var G=A,_e=G.next;G.next=null,v===null?m=_e:v.next=_e,v=G;var Ee=e.alternate;Ee!==null&&(Ee=Ee.updateQueue,A=Ee.lastBaseUpdate,A!==v&&(A===null?Ee.firstBaseUpdate=_e:A.next=_e,Ee.lastBaseUpdate=G))}if(m!==null){var Oe=f.baseState;v=0,Ee=_e=G=null,A=m;do{var xe=A.lane&-536870913,ve=xe!==A.lane;if(ve?(yn&xe)===xe:(r&xe)===xe){xe!==0&&xe===Ir&&(pf=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Mt=e,Wt=A;xe=s;var ns=o;switch(Wt.tag){case 1:if(Mt=Wt.payload,typeof Mt=="function"){Oe=Mt.call(ns,Oe,xe);break e}Oe=Mt;break e;case 3:Mt.flags=Mt.flags&-65537|128;case 0:if(Mt=Wt.payload,xe=typeof Mt=="function"?Mt.call(ns,Oe,xe):Mt,xe==null)break e;Oe=x({},Oe,xe);break e;case 2:Da=!0}}xe=A.callback,xe!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[xe]:ve.push(xe))}else ve={lane:xe,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Ee===null?(_e=Ee=ve,G=Oe):Ee=Ee.next=ve,v|=xe;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ve=A,A=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);Ee===null&&(G=Oe),f.baseState=G,f.firstBaseUpdate=_e,f.lastBaseUpdate=Ee,m===null&&(f.shared.lanes=0),$a|=v,e.lanes=v,e.memoizedState=Oe}}function __(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function g_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)__(o[e],s)}var Vr=R(null),eu=R(0);function y_(e,s){e=va,ie(eu,e),ie(Vr,s),va=e|s.baseLanes}function _f(){ie(eu,va),ie(Vr,Vr.current)}function gf(){va=eu.current,re(Vr),re(eu)}var fi=R(null),Mi=null;function Ba(e){var s=e.alternate;ie(Fs,Fs.current&1),ie(fi,e),Mi===null&&(s===null||Vr.current!==null||s.memoizedState!==null)&&(Mi=e)}function yf(e){ie(Fs,Fs.current),ie(fi,e),Mi===null&&(Mi=e)}function x_(e){e.tag===22?(ie(Fs,Fs.current),ie(fi,e),Mi===null&&(Mi=e)):La()}function La(){ie(Fs,Fs.current),ie(fi,fi.current)}function hi(e){re(fi),Mi===e&&(Mi=null),re(Fs)}var Fs=R(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ha=0,an=null,es=null,Qs=null,nu=!1,Yr=!1,mr=!1,su=0,Bl=0,Wr=null,y2=0;function Os(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!ht(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return ha=m,an=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,I.H=e===null||e.memoizedState===null?ng:Lf,mr=!1,m=o(r,f),mr=!1,Yr&&(m=v_(s,o,r,f)),b_(e),m}function b_(e){I.H=zl;var s=es!==null&&es.next!==null;if(ha=0,Qs=es=an=null,nu=!1,Bl=0,Wr=null,s)throw Error(a(300));e===null||Zs||(e=e.dependencies,e!==null&&Xc(e)&&(Zs=!0))}function v_(e,s,o,r){an=e;var f=0;do{if(Yr&&(Wr=null),Bl=0,Yr=!1,25<=f)throw Error(a(301));if(f+=1,Qs=es=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=sg,m=s(o,r)}while(Yr);return m}function x2(){var e=I.H,s=e.useState()[0];return s=typeof s.then=="function"?Ll(s):s,e=e.useState()[0],(es!==null?es.memoizedState:null)!==e&&(an.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}ha=0,Qs=es=an=null,Yr=!1,Bl=su=0,Wr=null}function Uo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qs===null?an.memoizedState=Qs=e:Qs=Qs.next=e,Qs}function Xs(){if(es===null){var e=an.alternate;e=e!==null?e.memoizedState:null}else e=es.next;var s=Qs===null?an.memoizedState:Qs.next;if(s!==null)Qs=s,es=e;else{if(e===null)throw an.alternate===null?Error(a(467)):Error(a(310));es=e,e={memoizedState:es.memoizedState,baseState:es.baseState,baseQueue:es.baseQueue,queue:es.queue,next:null},Qs===null?an.memoizedState=Qs=e:Qs=Qs.next=e}return Qs}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(e){var s=Bl;return Bl+=1,Wr===null&&(Wr=[]),e=d_(Wr,e,s),s=an,(Qs===null?s.memoizedState:Qs.next)===null&&(s=s.alternate,I.H=s===null||s.memoizedState===null?ng:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ll(e);if(e.$$typeof===L)return Co(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=an.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=an.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),an.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=le;return s.index++,o}function ma(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Xs();return kf(s,es,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,G=null,_e=s,Ee=!1;do{var Oe=_e.lane&-536870913;if(Oe!==_e.lane?(yn&Oe)===Oe:(ha&Oe)===Oe){var xe=_e.revertLane;if(xe===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),Oe===Ir&&(Ee=!0);else if((ha&xe)===xe){_e=_e.next,xe===Ir&&(Ee=!0);continue}else Oe={lane:0,revertLane:_e.revertLane,gesture:null,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null},G===null?(A=G=Oe,v=m):G=G.next=Oe,an.lanes|=xe,$a|=xe;Oe=_e.action,mr&&o(m,Oe),m=_e.hasEagerState?_e.eagerState:o(m,Oe)}else xe={lane:Oe,revertLane:_e.revertLane,gesture:_e.gesture,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null},G===null?(A=G=xe,v=m):G=G.next=xe,an.lanes|=Oe,$a|=Oe;_e=_e.next}while(_e!==null&&_e!==s);if(G===null?v=m:G.next=A,!ht(m,e.memoizedState)&&(Zs=!0,Ee&&(o=Pr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=G,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=Xs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);ht(m,s.memoizedState)||(Zs=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function w_(e,s,o){var r=an,f=Xs(),m=bn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!ht((es||f).memoizedState,o);if(v&&(f.memoizedState=o,Zs=!0),f=f.queue,Tf(k_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||Qs!==null&&Qs.memoizedState.tag&1){if(r.flags|=2048,Fr(9,{destroy:void 0},C_.bind(null,r,f,o,s),null),us===null)throw Error(a(349));m||(ha&127)!==0||S_(r,s,o)}return o}function S_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=an.updateQueue,s===null?(s=ou(),an.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function C_(e,s,o,r){s.value=o,s.getSnapshot=r,j_(s)&&M_(e)}function k_(e,s,o){return o(function(){j_(s)&&M_(e)})}function j_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!ht(e,o)}catch{return!0}}function M_(e){var s=ir(e,2);s!==null&&ii(s,e,2)}function Mf(e){var s=Uo();if(typeof e=="function"){var o=e;if(e=o(),mr){De(!0);try{o()}finally{De(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},s}function E_(e,s,o,r){return e.baseState=o,kf(e,es,typeof r=="function"?r:ma)}function b2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};I.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,T_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function T_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=I.T,v={};I.T=v;try{var A=o(f,r),G=I.S;G!==null&&G(v,A),A_(e,s,A)}catch(_e){Ef(e,s,_e)}finally{m!==null&&v.types!==null&&(m.types=v.types),I.T=m}}else try{m=o(f,r),A_(e,s,m)}catch(_e){Ef(e,s,_e)}}function A_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){D_(e,s,r)},function(r){return Ef(e,s,r)}):D_(e,s,o)}function D_(e,s,o){s.status="fulfilled",s.value=o,N_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,T_(e,o)))}function Ef(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,N_(s),s=s.next;while(s!==r)}e.action=null}function N_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function R_(e,s){return s}function B_(e,s){if(bn){var o=us.formState;if(o!==null){e:{var r=an;if(bn){if(Ss){t:{for(var f=Ss,m=ji;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ss=Ei(f.nextSibling),r=f.data==="F!";break e}}Ta(r)}r=!1}r&&(s=o[0])}}return o=Uo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R_,lastRenderedState:s},o.queue=r,o=J_.bind(null,an,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,an,!1,r.queue),r=Uo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=b2.bind(null,an,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function L_(e){var s=Xs();return O_(s,es,e)}function O_(e,s,o){if(s=kf(e,s,R_)[0],e=au(ma)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Ll(s)}catch(v){throw v===Hr?Kc:v}else r=s;s=Xs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(an.flags|=2048,Fr(9,{destroy:void 0},v2.bind(null,f,o),null)),[r,m,e]}function v2(e,s){e.action=s}function z_(e){var s=Xs(),o=es;if(o!==null)return O_(s,o,e);Xs(),s=s.memoizedState,o=Xs();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Fr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=an.updateQueue,s===null&&(s=ou(),an.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function $_(){return Xs().memoizedState}function ru(e,s,o,r){var f=Uo();an.flags|=e,f.memoizedState=Fr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=Xs();r=r===void 0?null:r;var m=f.memoizedState.inst;es!==null&&r!==null&&xf(r,es.memoizedState.deps)?f.memoizedState=Fr(s,m,o,r):(an.flags|=e,f.memoizedState=Fr(1|s,m,o,r))}function I_(e,s){ru(8390656,8,e,s)}function Tf(e,s){lu(2048,8,e,s)}function w2(e){an.flags|=4;var s=an.updateQueue;if(s===null)s=ou(),an.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function P_(e){var s=Xs().memoizedState;return w2({ref:s,nextImpl:e}),function(){if((zn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function H_(e,s){return lu(4,2,e,s)}function U_(e,s){return lu(4,4,e,s)}function V_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function Y_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,V_.bind(null,s,e),o)}function Af(){}function W_(e,s){var o=Xs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function F_(e,s){var o=Xs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),mr){De(!0);try{e()}finally{De(!1)}}return o.memoizedState=[r,s],r}function Df(e,s,o){return o===void 0||(ha&1073741824)!==0&&(yn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Xg(),an.lanes|=e,$a|=e,o)}function X_(e,s,o,r){return ht(o,s)?o:Vr.current!==null?(e=Df(e,o,r),ht(e,s)||(Zs=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(yn&261930)===0?(Zs=!0,e.memoizedState=o):(e=Xg(),an.lanes|=e,$a|=e,s)}function G_(e,s,o,r,f){var m=se.p;se.p=m!==0&&8>m?m:8;var v=I.T,A={};I.T=A,Bf(e,!1,s,o);try{var G=f(),_e=I.S;if(_e!==null&&_e(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Ee=g2(G,r);Ol(e,s,Ee,_i(e))}else Ol(e,s,r,_i(e))}catch(Oe){Ol(e,s,{then:function(){},status:"rejected",reason:Oe},_i())}finally{se.p=m,v!==null&&A.types!==null&&(v.types=A.types),I.T=v}}function S2(){}function Nf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=q_(e).queue;G_(e,f,s,W,o===null?S2:function(){return K_(e),o(r)})}function q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:W},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function K_(e){var s=q_(e);s.next===null&&(s=e.alternate.memoizedState),Ol(e,s.next.queue,{},_i())}function Rf(){return Co(Jl)}function Q_(){return Xs().memoizedState}function Z_(){return Xs().memoizedState}function C2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=_i();e=Na(o);var r=Ra(s,e,o);r!==null&&(ii(r,s,o),Dl(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function k2(e,s,o){var r=_i();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?eg(s,o):(o=Kd(e,s,o,r),o!==null&&(ii(o,e,r),tg(o,s,r)))}function J_(e,s,o){var r=_i();Ol(e,s,o,r)}function Ol(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))eg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,ht(A,v))return Vc(e,s,f,0),us===null&&Uc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return ii(o,e,r),tg(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&ii(s,e,2)}function cu(e){var s=e.alternate;return e===an||s!==null&&s===an}function eg(e,s){Yr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function tg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,wn(e,o)}}var zl={readContext:Co,use:iu,useCallback:Os,useContext:Os,useEffect:Os,useImperativeHandle:Os,useLayoutEffect:Os,useInsertionEffect:Os,useMemo:Os,useReducer:Os,useRef:Os,useState:Os,useDebugValue:Os,useDeferredValue:Os,useTransition:Os,useSyncExternalStore:Os,useId:Os,useHostTransitionStatus:Os,useFormState:Os,useActionState:Os,useOptimistic:Os,useMemoCache:Os,useCacheRefresh:Os};zl.useEffectEvent=Os;var ng={readContext:Co,use:iu,useCallback:function(e,s){return Uo().memoizedState=[e,s===void 0?null:s],e},useContext:Co,useEffect:I_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,V_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=Uo();s=s===void 0?null:s;var r=e();if(mr){De(!0);try{e()}finally{De(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Uo();if(o!==void 0){var f=o(s);if(mr){De(!0);try{o(s)}finally{De(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=k2.bind(null,an,e),[r.memoizedState,e]},useRef:function(e){var s=Uo();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=J_.bind(null,an,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=Uo();return Df(o,e,s)},useTransition:function(){var e=Mf(!1);return e=G_.bind(null,an,e.queue,!0,!1),Uo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=an,f=Uo();if(bn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),us===null)throw Error(a(349));(yn&127)!==0||S_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,I_(k_.bind(null,r,m,e),[e]),r.flags|=2048,Fr(9,{destroy:void 0},C_.bind(null,r,m,o,s),null),o},useId:function(){var e=Uo(),s=us.identifierPrefix;if(bn){var o=ea,r=Ji;o=(r&~(1<<32-St(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=y2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:B_,useActionState:B_,useOptimistic:function(e){var s=Uo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,an,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return Uo().memoizedState=C2.bind(null,an)},useEffectEvent:function(e){var s=Uo(),o={impl:e};return s.memoizedState=o,function(){if((zn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:Co,use:iu,useCallback:W_,useContext:Co,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:U_,useMemo:F_,useReducer:au,useRef:$_,useState:function(){return au(ma)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Xs();return X_(o,es.memoizedState,e,s)},useTransition:function(){var e=au(ma)[0],s=Xs().memoizedState;return[typeof e=="boolean"?e:Ll(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Rf,useFormState:L_,useActionState:L_,useOptimistic:function(e,s){var o=Xs();return E_(o,es,e,s)},useMemoCache:Cf,useCacheRefresh:Z_};Lf.useEffectEvent=P_;var sg={readContext:Co,use:iu,useCallback:W_,useContext:Co,useEffect:Tf,useImperativeHandle:Y_,useInsertionEffect:H_,useLayoutEffect:U_,useMemo:F_,useReducer:jf,useRef:$_,useState:function(){return jf(ma)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Xs();return es===null?Df(o,e,s):X_(o,es.memoizedState,e,s)},useTransition:function(){var e=jf(ma)[0],s=Xs().memoizedState;return[typeof e=="boolean"?e:Ll(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Rf,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var o=Xs();return es!==null?E_(o,es,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:Z_};sg.useEffectEvent=P_;function Of(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var zf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=_i(),f=Na(r);f.payload=s,o!=null&&(f.callback=o),s=Ra(e,f,r),s!==null&&(ii(s,e,r),Dl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=_i(),f=Na(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ra(e,f,r),s!==null&&(ii(s,e,r),Dl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=_i(),r=Na(o);r.tag=2,s!=null&&(r.callback=s),s=Ra(e,r,o),s!==null&&(ii(s,e,o),Dl(s,e,o))}};function og(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!gt(o,r)||!gt(f,m):!0}function ig(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&zf.enqueueReplaceState(s,s.state,null)}function pr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ag(e){Hc(e)}function rg(e){console.error(e)}function lg(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function cg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=Na(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function ug(e){return e=Na(e),e.tag=3,e}function dg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){cg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){cg(s,o,r),typeof f!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function j2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&$r(s,o,f,!0),o=fi.current,o!==null){switch(o.tag){case 31:case 13:return Mi===null?wu():o.alternate===null&&zs===0&&(zs=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),wu(),!1}if(bn)return s=fi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),jl(Si(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),jl(Si(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Si(r,o),f=$f(e.stateNode,r,f),mf(e,f),zs!==4&&(zs=2)),!1;var m=Error(a(520),{cause:r});if(m=Si(m,o),Wl===null?Wl=[m]:Wl.push(m),zs!==4&&(zs=2),s===null)return!0;r=Si(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ia===null||!Ia.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=ug(f),dg(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),Zs=!1;function ko(e,s,o,r){s.child=e===null?p_(s,null,o,r):hr(s,e.child,o,r)}function fg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return cr(s),r=bf(e,s,o,v,m,f),A=vf(),e!==null&&!Zs?(wf(e,s,f),pa(e,s,f)):(bn&&A&&ef(s),s.flags|=1,ko(e,s,r,f),s.child)}function hg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,mg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:gt,o(v,r)&&e.ref===s.ref)return pa(e,s,f)}return s.flags|=1,e=ca(m,r),e.ref=s.ref,e.return=s,s.child=e}function mg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(gt(m,r)&&e.ref===s.ref)if(Zs=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(Zs=!0);else return s.lanes=e.lanes,pa(e,s,f)}return Pf(e,s,o,r,f)}function pg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return _g(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?y_(s,m):_f(),x_(s);else return r=s.lanes=536870912,_g(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),y_(s,m),La(),s.memoizedState=null):(e!==null&&qc(s,null),_f(),La());return ko(e,s,f,o),s.child}function $l(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function _g(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:Ks._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),_f(),x_(s),e!==null&&$r(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function gg(e,s,o){return hr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,hi(s),s.memoizedState=null,e}function M2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(bn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,$l(null,e);if(yf(s),(e=Ss)?(e=T0(e,ji),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ji,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,So=s,Ss=null)):e=null,e===null)throw Ta(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=gg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Zs||$r(e,s,o,!1),f=(o&e.childLanes)!==0,Zs||f){if(r=us,r!==null&&(v=_n(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,ir(e,v),ii(r,e,v),If;wu(),s=gg(e,s,o)}else e=m.treeContext,Ss=Ei(v.nextSibling),So=s,bn=!0,Ea=null,ji=!1,e!==null&&s_(s,e),s=du(s,r),s.flags|=4096;return s}return e=ca(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return cr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!Zs?(wf(e,s,f),pa(e,s,f)):(bn&&r&&ef(s),s.flags|=1,ko(e,s,o,f),s.child)}function yg(e,s,o,r,f,m){return cr(s),s.updateQueue=null,o=v_(s,r,o,f),b_(e),r=vf(),e!==null&&!Zs?(wf(e,s,m),pa(e,s,m)):(bn&&r&&ef(s),s.flags|=1,ko(e,s,o,m),s.child)}function xg(e,s,o,r,f){if(cr(s),s.stateNode===null){var m=Br,v=o.contextType;typeof v=="object"&&v!==null&&(m=Co(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Co(v):Br,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Of(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&zf.enqueueReplaceState(m,m.state,null),Rl(s,r,m,f),Nl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,G=pr(o,A);m.props=G;var _e=m.context,Ee=o.contextType;v=Br,typeof Ee=="object"&&Ee!==null&&(v=Co(Ee));var Oe=o.getDerivedStateFromProps;Ee=typeof Oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,Ee||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||_e!==v)&&ig(s,m,r,v),Da=!1;var xe=s.memoizedState;m.state=xe,Rl(s,r,m,f),Nl(),_e=s.memoizedState,A||xe!==_e||Da?(typeof Oe=="function"&&(Of(s,o,Oe,r),_e=s.memoizedState),(G=Da||og(s,o,G,r,xe,_e,v))?(Ee||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=_e),m.props=r,m.state=_e,m.context=v,r=G):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,Ee=pr(o,v),m.props=Ee,Oe=s.pendingProps,xe=m.context,_e=o.contextType,G=Br,typeof _e=="object"&&_e!==null&&(G=Co(_e)),A=o.getDerivedStateFromProps,(_e=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Oe||xe!==G)&&ig(s,m,r,G),Da=!1,xe=s.memoizedState,m.state=xe,Rl(s,r,m,f),Nl();var ve=s.memoizedState;v!==Oe||xe!==ve||Da||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&(Of(s,o,A,r),ve=s.memoizedState),(Ee=Da||og(s,o,Ee,r,xe,ve,G)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(_e||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ve,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ve,G)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ve),m.props=r,m.state=ve,m.context=G,r=Ee):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=hr(s,e.child,null,f),s.child=hr(s,null,o,f)):ko(e,s,o,f),s.memoizedState=m.state,e=s.child):e=pa(e,s,f),e}function bg(e,s,o,r){return rr(),s.flags|=256,ko(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:c_()}}function Vf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=pi),e}function vg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Fs.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(bn){if(f?Ba(s):La(),(e=Ss)?(e=T0(e,ji),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ji,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},o=e_(e),o.return=s,s.child=o,So=s,Ss=null)):e=null,e===null)throw Ta(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(La(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=ar(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,$l(null,r)):(Ba(s),Yf(s,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(m)s.flags&256?(Ba(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(La(),s.child=e.child,s.flags|=128,s=null):(La(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=ar(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,hr(s,e.child,null,o),r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,s=$l(null,r));else if(Ba(s),kh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var _e=v.dgst;v=_e,r=Error(a(419)),r.stack="",r.digest=v,jl({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(Zs||$r(e,s,o,!1),v=(o&e.childLanes)!==0,Zs||v){if(v=us,v!==null&&(r=_n(v,o),r!==0&&r!==G.retryLane))throw G.retryLane=r,ir(e,r),ii(v,e,r),If;Ch(A)||wu(),s=Wf(e,s,o)}else Ch(A)?(s.flags|=192,s.child=e.child,s=null):(e=G.treeContext,Ss=Ei(A.nextSibling),So=s,bn=!0,Ea=null,ji=!1,e!==null&&s_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(La(),A=r.fallback,f=s.mode,G=e.child,_e=G.sibling,r=ca(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,_e!==null?A=ca(_e,A):(A=ar(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,$l(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Uf(o):(f=A.cachePool,f!==null?(G=Ks._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=c_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Vf(e,v,o),s.memoizedState=Hf,$l(e.child,r)):(Ba(s),o=e.child,e=o.sibling,o=ca(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=di(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return hr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function wg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Sg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Fs.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,ie(Fs,v),ko(e,s,r,o),r=bn?kl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,o,s);else if(e.tag===19)wg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function pa(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),$a|=s.lanes,(o&s.childLanes)===0)if(e!==null){if($r(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=ca(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=ca(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function E2(e,s,o){switch(s.tag){case 3:tt(s,s.stateNode.containerInfo),Aa(s,Ks,e.memoizedState.cache),rr();break;case 27:case 5:It(s);break;case 4:tt(s,s.stateNode.containerInfo);break;case 10:Aa(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Ba(s),s.flags|=128,null):(o&s.child.childLanes)!==0?vg(e,s,o):(Ba(s),e=pa(e,s,o),e!==null?e.sibling:null);Ba(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||($r(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Sg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Fs,Fs.current),r)break;return null;case 22:return s.lanes=0,pg(e,s,o,s.pendingProps);case 24:Aa(s,Ks,e.memoizedState.cache)}return pa(e,s,o)}function Cg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Zs=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return Zs=!1,E2(e,s,o);Zs=(e.flags&131072)!==0}else Zs=!1,bn&&(s.flags&1048576)!==0&&n_(s,kl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=dr(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=pr(e,r),s.tag=1,s=xg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===N){s.tag=11,s=fg(null,s,e,r,o);break e}else if(f===X){s.tag=14,s=hg(null,s,e,r,o);break e}}throw s=J(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=pr(r,s.pendingProps),xg(e,s,r,f,o);case 3:e:{if(tt(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Rl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Aa(s,Ks,r),r!==m.cache&&rf(s,[Ks],o,!0),Nl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=bg(e,s,r,o);break e}else if(r!==f){f=Si(Error(a(424)),s),jl(f),s=bg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ss=Ei(e.firstChild),So=s,bn=!0,Ea=null,ji=!0,o=p_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(rr(),r===f){s=pa(e,s,o);break e}ko(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=L0(s.type,null,s.pendingProps,null))?s.memoizedState=o:bn||(o=s.type,e=s.pendingProps,r=Tu($e.current).createElement(o),r[un]=s,r[Dn]=e,jo(r,o,e),jn(r),s.stateNode=r):s.memoizedState=L0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return It(s),e===null&&bn&&(r=s.stateNode=N0(s.type,s.pendingProps,$e.current),So=s,ji=!0,f=Ss,Va(s.type)?(jh=f,Ss=Ei(r.firstChild)):Ss=f),ko(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&bn&&((f=r=Ss)&&(r=ov(r,s.type,s.pendingProps,ji),r!==null?(s.stateNode=r,So=s,Ss=Ei(r.firstChild),ji=!1,f=!0):f=!1),f||Ta(s)),It(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,x2,null,null,o),Jl._currentValue=f),fu(e,s),ko(e,s,r,o),s.child;case 6:return e===null&&bn&&((e=o=Ss)&&(o=iv(o,s.pendingProps,ji),o!==null?(s.stateNode=o,So=s,Ss=null,e=!0):e=!1),e||Ta(s)),null;case 13:return vg(e,s,o);case 4:return tt(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=hr(s,null,r,o):ko(e,s,r,o),s.child;case 11:return fg(e,s,s.type,s.pendingProps,o);case 7:return ko(e,s,s.pendingProps,o),s.child;case 8:return ko(e,s,s.pendingProps.children,o),s.child;case 12:return ko(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Aa(s,s.type,r.value),ko(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,cr(s),f=Co(f),r=r(f),s.flags|=1,ko(e,s,r,o),s.child;case 14:return hg(e,s,s.type,s.pendingProps,o);case 15:return mg(e,s,s.type,s.pendingProps,o);case 19:return Sg(e,s,o);case 31:return M2(e,s,o);case 22:return pg(e,s,o,s.pendingProps);case 24:return cr(s),r=Co(Ks),e===null?(f=uf(),f===null&&(f=us,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),Aa(s,Ks,f)):((e.lanes&o)!==0&&(hf(e,s),Rl(s,null,null,o),Nl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Aa(s,Ks,r)):(r=m.cache,Aa(s,Ks,r),r!==f.cache&&rf(s,[Ks],o,!0))),ko(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function _a(e){e.flags|=4}function Gf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw fr=Qc,df}else e.flags&=-16777217}function kg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P0(s))if(Qg())e.flags|=8192;else throw fr=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?wt():536870912,e.lanes|=s,Kr|=s)}function Il(e,s){if(!bn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Cs(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function T2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cs(s),null;case 1:return Cs(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),fa(Ks),_t(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(zr(s)?_a(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),Cs(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(_a(s),m!==null?(Cs(s),kg(s,m)):(Cs(s),Gf(s,f,null,r,o))):m?m!==e.memoizedState?(_a(s),Cs(s),kg(s,m)):(Cs(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&_a(s),Cs(s),Gf(s,f,e,r,o)),null;case 27:if(vt(s),o=$e.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&_a(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Cs(s),null}e=he.current,zr(s)?o_(s):(e=N0(f,r,o),s.stateNode=e,_a(s))}return Cs(s),null;case 5:if(vt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&_a(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Cs(s),null}if(m=he.current,zr(s))o_(s);else{var v=Tu($e.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[un]=s,m[Dn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(jo(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&_a(s)}}return Cs(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&_a(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=$e.current,zr(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=So,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[un]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||v0(e.nodeValue,o)),e||Ta(s,!0)}else e=Tu(e).createTextNode(r),e[un]=s,s.stateNode=e}return Cs(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=zr(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[un]=s}else rr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Cs(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(hi(s),s):(hi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return Cs(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=zr(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[un]=s}else rr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Cs(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(hi(s),s):(hi(s),null)}return hi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),Cs(s),null);case 4:return _t(),e===null&&_h(s.stateNode.containerInfo),Cs(s),null;case 10:return fa(s.type),Cs(s),null;case 19:if(re(Fs),r=s.memoizedState,r===null)return Cs(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Il(r,!1);else{if(zs!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Il(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Jp(o,e),o=o.sibling;return ie(Fs,Fs.current&1|2),bn&&ua(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&ut()>xu&&(s.flags|=128,f=!0,Il(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Il(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!bn)return Cs(s),null}else 2*ut()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Il(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ut(),e.sibling=null,o=Fs.current,ie(Fs,f?o&1|2:o&1),bn&&ua(s,r.treeForkCount),e):(Cs(s),null);case 22:case 23:return hi(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(Cs(s),s.subtreeFlags&6&&(s.flags|=8192)):Cs(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&re(ur),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),fa(Ks),Cs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function A2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return fa(Ks),_t(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return vt(s),null;case 31:if(s.memoizedState!==null){if(hi(s),s.alternate===null)throw Error(a(340));rr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(hi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));rr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return re(Fs),null;case 4:return _t(),null;case 10:return fa(s.type),null;case 22:case 23:return hi(s),gf(),e!==null&&re(ur),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return fa(Ks),null;case 25:return null;default:return null}}function jg(e,s){switch(tf(s),s.tag){case 3:fa(Ks),_t();break;case 26:case 27:case 5:vt(s);break;case 4:_t();break;case 31:s.memoizedState!==null&&hi(s);break;case 13:hi(s);break;case 19:re(Fs);break;case 10:fa(s.type);break;case 22:case 23:hi(s),gf(),e!==null&&re(ur);break;case 24:fa(Ks)}}function Pl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Xn(s,s.return,A)}}function Oa(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var G=o,_e=A;try{_e()}catch(Ee){Xn(f,G,Ee)}}}r=r.next}while(r!==m)}}catch(Ee){Xn(s,s.return,Ee)}}function Mg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{g_(s,o)}catch(r){Xn(e,e.return,r)}}}function Eg(e,s,o){o.props=pr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Xn(e,s,r)}}function Hl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Xn(e,s,f)}}function ta(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Xn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Xn(e,s,f)}else o.current=null}function Tg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Xn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;Z2(r,e.type,o,s),r[Dn]=s}catch(f){Xn(e,e.return,f)}}function Ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=oo));else if(r!==4&&(r===27&&Va(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Va(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Dg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);jo(s,r,o),s[un]=e,s[Dn]=o}catch(m){Xn(e,e.return,m)}}var ga=!1,Js=!1,Zf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,vo=null;function D2(e,s){if(e=e.containerInfo,xh=Ou,e=Cn(e),Vn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,G=-1,_e=0,Ee=0,Oe=e,xe=null;t:for(;;){for(var ve;Oe!==o||f!==0&&Oe.nodeType!==3||(A=v+f),Oe!==m||r!==0&&Oe.nodeType!==3||(G=v+r),Oe.nodeType===3&&(v+=Oe.nodeValue.length),(ve=Oe.firstChild)!==null;)xe=Oe,Oe=ve;for(;;){if(Oe===e)break t;if(xe===o&&++_e===f&&(A=v),xe===m&&++Ee===r&&(G=v),(ve=Oe.nextSibling)!==null)break;Oe=xe,xe=Oe.parentNode}Oe=ve}o=A===-1||G===-1?null:{start:A,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},Ou=!1,vo=s;vo!==null;)if(s=vo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,vo=e;else for(;vo!==null;){switch(s=vo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Mt=pr(o.type,f);e=r.getSnapshotBeforeUpdate(Mt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Wt){Xn(o,o.return,Wt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,vo=e;break}vo=s.return}}function Rg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:xa(e,o),r&4&&Pl(5,o);break;case 1:if(xa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Xn(o,o.return,v)}else{var f=pr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xn(o,o.return,v)}}r&64&&Mg(o),r&512&&Hl(o,o.return);break;case 3:if(xa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{g_(e,s)}catch(v){Xn(o,o.return,v)}}break;case 27:s===null&&r&4&&Dg(o);case 26:case 5:xa(e,o),s===null&&r&4&&Tg(o),r&512&&Hl(o,o.return);break;case 12:xa(e,o);break;case 31:xa(e,o),r&4&&Og(e,o);break;case 13:xa(e,o),r&4&&zg(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=P2.bind(null,o),av(e,o))));break;case 22:if(r=o.memoizedState!==null||ga,!r){s=s!==null&&s.memoizedState!==null||Js,f=ga;var m=Js;ga=r,(Js=s)&&!m?ba(e,o,(o.subtreeFlags&8772)!==0):xa(e,o),ga=f,Js=m}break;case 30:break;default:xa(e,o)}}function Bg(e){var s=e.alternate;s!==null&&(e.alternate=null,Bg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&Go(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ms=null,ti=!1;function ya(e,s,o){for(o=o.child;o!==null;)Lg(e,s,o),o=o.sibling}function Lg(e,s,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 26:Js||ta(o,s),ya(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Js||ta(o,s);var r=Ms,f=ti;Va(o.type)&&(Ms=o.stateNode,ti=!1),ya(e,s,o),Kl(o.stateNode),Ms=r,ti=f;break;case 5:Js||ta(o,s);case 6:if(r=Ms,f=ti,Ms=null,ya(e,s,o),Ms=r,ti=f,Ms!==null)if(ti)try{(Ms.nodeType===9?Ms.body:Ms.nodeName==="HTML"?Ms.ownerDocument.body:Ms).removeChild(o.stateNode)}catch(m){Xn(o,s,m)}else try{Ms.removeChild(o.stateNode)}catch(m){Xn(o,s,m)}break;case 18:Ms!==null&&(ti?(e=Ms,M0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),ol(e)):M0(Ms,o.stateNode));break;case 4:r=Ms,f=ti,Ms=o.stateNode.containerInfo,ti=!0,ya(e,s,o),Ms=r,ti=f;break;case 0:case 11:case 14:case 15:Oa(2,o,s),Js||Oa(4,o,s),ya(e,s,o);break;case 1:Js||(ta(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Eg(o,s,r)),ya(e,s,o);break;case 21:ya(e,s,o);break;case 22:Js=(r=Js)||o.memoizedState!==null,ya(e,s,o),Js=r;break;default:ya(e,s,o)}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ol(e)}catch(o){Xn(s,s.return,o)}}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ol(e)}catch(o){Xn(s,s.return,o)}}function N2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Ng),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Ng),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=N2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=H2.bind(null,e,r);r.then(f,f)}})}function ni(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Va(A.type)){Ms=A.stateNode,ti=!1;break e}break;case 5:Ms=A.stateNode,ti=!1;break e;case 3:case 4:Ms=A.stateNode.containerInfo,ti=!0;break e}A=A.return}if(Ms===null)throw Error(a(160));Lg(m,v,f),Ms=null,ti=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)$g(s,e),s=s.sibling}var Pi=null;function $g(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(s,e),si(e),r&4&&(Oa(3,e,e.return),Pl(3,e),Oa(5,e,e.return));break;case 1:ni(s,e),si(e),r&512&&(Js||o===null||ta(o,o.return)),r&64&&ga&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Pi;if(ni(s,e),si(e),r&512&&(Js||o===null||ta(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Es]||m[un]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),jo(m,r,o),m[un]=e,jn(m),r=m;break e;case"link":var v=$0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),jo(m,r,o),f.head.appendChild(m);break;case"meta":if(v=$0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),jo(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[un]=e,jn(m),r=m}e.stateNode=r}else I0(f,e.type,e.stateNode);else e.stateNode=z0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?I0(f,e.type,e.stateNode):z0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ni(s,e),si(e),r&512&&(Js||o===null||ta(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ni(s,e),si(e),r&512&&(Js||o===null||ta(o,o.return)),e.flags&32){f=e.stateNode;try{zo(f,"")}catch(Mt){Xn(e,e.return,Mt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(ni(s,e),si(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Mt){Xn(e,e.return,Mt)}}break;case 3:if(Nu=null,f=Pi,Pi=Au(s.containerInfo),ni(s,e),Pi=f,si(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{ol(s.containerInfo)}catch(Mt){Xn(e,e.return,Mt)}Zf&&(Zf=!1,Ig(e));break;case 4:r=Pi,Pi=Au(e.stateNode.containerInfo),ni(s,e),si(e),Pi=r;break;case 12:ni(s,e),si(e);break;case 31:ni(s,e),si(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ni(s,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=ut()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var G=o!==null&&o.memoizedState!==null,_e=ga,Ee=Js;if(ga=_e||f,Js=Ee||G,ni(s,e),Js=Ee,ga=_e,si(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||G||ga||Js||_r(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){G=o=s;try{if(m=G.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=G.stateNode;var Oe=G.memoizedProps.style,xe=Oe!=null&&Oe.hasOwnProperty("display")?Oe.display:null;A.style.display=xe==null||typeof xe=="boolean"?"":(""+xe).trim()}}catch(Mt){Xn(G,G.return,Mt)}}}else if(s.tag===6){if(o===null){G=s;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Mt){Xn(G,G.return,Mt)}}}else if(s.tag===18){if(o===null){G=s;try{var ve=G.stateNode;f?E0(ve,!0):E0(G.stateNode,!1)}catch(Mt){Xn(G,G.return,Mt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ni(s,e),si(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ni(s,e),si(e)}}function si(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ag(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(zo(v,""),o.flags&=-33);var A=Kf(e);pu(e,A,v);break;case 3:case 4:var G=o.stateNode.containerInfo,_e=Kf(e);Qf(e,_e,G);break;default:throw Error(a(161))}}catch(Ee){Xn(e,e.return,Ee)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Ig(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function xa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Rg(e,s.alternate,s),s=s.sibling}function _r(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Oa(4,s,s.return),_r(s);break;case 1:ta(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Eg(s,s.return,o),_r(s);break;case 27:Kl(s.stateNode);case 26:case 5:ta(s,s.return),_r(s);break;case 22:s.memoizedState===null&&_r(s);break;case 30:_r(s);break;default:_r(s)}e=e.sibling}}function ba(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:ba(f,m,o),Pl(4,m);break;case 1:if(ba(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(_e){Xn(r,r.return,_e)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)__(G[f],A)}catch(_e){Xn(r,r.return,_e)}}o&&v&64&&Mg(m),Hl(m,m.return);break;case 27:Dg(m);case 26:case 5:ba(f,m,o),o&&r===null&&v&4&&Tg(m),Hl(m,m.return);break;case 12:ba(f,m,o);break;case 31:ba(f,m,o),o&&v&4&&Og(f,m);break;case 13:ba(f,m,o),o&&v&4&&zg(f,m);break;case 22:m.memoizedState===null&&ba(f,m,o),Hl(m,m.return);break;case 30:break;default:ba(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Ml(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Ml(e))}function Hi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Pg(e,s,o,r),s=s.sibling}function Pg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Hi(e,s,o,r),f&2048&&Pl(9,s);break;case 1:Hi(e,s,o,r);break;case 3:Hi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&Ml(e)));break;case 12:if(f&2048){Hi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Xn(s,s.return,G)}}else Hi(e,s,o,r);break;case 31:Hi(e,s,o,r);break;case 13:Hi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Hi(e,s,o,r):Ul(e,s):m._visibility&2?Hi(e,s,o,r):(m._visibility|=2,Xr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Hi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Hi(e,s,o,r)}}function Xr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,G=r,_e=v.flags;switch(v.tag){case 0:case 11:case 15:Xr(m,v,A,G,f),Pl(8,v);break;case 23:break;case 22:var Ee=v.stateNode;v.memoizedState!==null?Ee._visibility&2?Xr(m,v,A,G,f):Ul(m,v):(Ee._visibility|=2,Xr(m,v,A,G,f)),f&&_e&2048&&Jf(v.alternate,v);break;case 24:Xr(m,v,A,G,f),f&&_e&2048&&eh(v.alternate,v);break;default:Xr(m,v,A,G,f)}s=s.sibling}}function Ul(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Ul(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Ul(o,r),f&2048&&eh(r.alternate,r);break;default:Ul(o,r)}s=s.sibling}}var Vl=8192;function Gr(e,s,o){if(e.subtreeFlags&Vl)for(e=e.child;e!==null;)Hg(e,s,o),e=e.sibling}function Hg(e,s,o){switch(e.tag){case 26:Gr(e,s,o),e.flags&Vl&&e.memoizedState!==null&&yv(o,Pi,e.memoizedState,e.memoizedProps);break;case 5:Gr(e,s,o);break;case 3:case 4:var r=Pi;Pi=Au(e.stateNode.containerInfo),Gr(e,s,o),Pi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Vl,Vl=16777216,Gr(e,s,o),Vl=r):Gr(e,s,o));break;default:Gr(e,s,o)}}function Ug(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Yl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];vo=r,Yg(r,e)}Ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:Yl(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Yl(e);break;case 12:Yl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Yl(e);break;default:Yl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];vo=r,Yg(r,e)}Ug(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Oa(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Yg(e,s){for(;vo!==null;){var o=vo;switch(o.tag){case 0:case 11:case 15:Oa(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ml(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,vo=r;else e:for(o=e;vo!==null;){r=vo;var f=r.sibling,m=r.return;if(Bg(r),r===o){vo=null;break e}if(f!==null){f.return=m,vo=f;break e}vo=m}}}var R2={getCacheForType:function(e){var s=Co(Ks),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Co(Ks).controller.signal}},B2=typeof WeakMap=="function"?WeakMap:Map,zn=0,us=null,mn=null,yn=0,Fn=0,mi=null,za=!1,qr=!1,th=!1,va=0,zs=0,$a=0,gr=0,nh=0,pi=0,Kr=0,Wl=null,oi=null,sh=!1,yu=0,Wg=0,xu=1/0,bu=null,Ia=null,lo=0,Pa=null,Qr=null,wa=0,oh=0,ih=null,Fg=null,Fl=0,ah=null;function _i(){return(zn&2)!==0&&yn!==0?yn&-yn:I.T!==null?fh():An()}function Xg(){if(pi===0)if((yn&536870912)===0||bn){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),pi=e}else pi=536870912;return e=fi.current,e!==null&&(e.flags|=32),pi}function ii(e,s,o){(e===us&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)&&(Zr(e,0),Ha(e,yn,pi,!1)),ft(e,o),((zn&2)===0||e!==us)&&(e===us&&((zn&2)===0&&(gr|=o),zs===4&&Ha(e,yn,pi,!1)),na(e))}function Gg(e,s,o){if((zn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||et(e,s),f=r?z2(e,s):lh(e,s,!0),m=r;do{if(f===0){qr&&!r&&Ha(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!L2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Wl;var G=A.current.memoizedState.isDehydrated;if(G&&(Zr(A,v).flags|=256),v=lh(A,v,!1),v!==2){if(th&&!G){A.errorRecoveryDisabledLanes|=m,gr|=m,f=4;break e}m=oi,oi=f,m!==null&&(oi===null?oi=m:oi.push.apply(oi,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Zr(e,0),Ha(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ha(r,s,pi,!za);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-ut(),10<f)){if(Ha(r,s,pi,!za),st(r,0,!0)!==0)break e;wa=s,r.timeoutHandle=k0(qg.bind(null,r,o,oi,bu,sh,s,pi,gr,Kr,za,m,"Throttled",-0,0),f);break e}qg(r,o,oi,bu,sh,s,pi,gr,Kr,za,m,null,-0,0)}}break}while(!0);na(e)}function qg(e,s,o,r,f,m,v,A,G,_e,Ee,Oe,xe,ve){if(e.timeoutHandle=-1,Oe=s.subtreeFlags,Oe&8192||(Oe&16785408)===16785408){Oe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oo},Hg(s,m,Oe);var Mt=(m&62914560)===m?yu-ut():(m&4194048)===m?Wg-ut():0;if(Mt=xv(Oe,Mt),Mt!==null){wa=m,e.cancelPendingCommit=Mt(s0.bind(null,e,s,m,o,r,f,v,A,G,Ee,Oe,null,xe,ve)),Ha(e,m,v,!_e);return}}s0(e,s,m,o,r,f,v,A,G)}function L2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!ht(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ha(e,s,o,r){s&=~nh,s&=~gr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-St(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&vn(e,o,s)}function vu(){return(zn&6)===0?(Xl(0),!1):!0}function rh(){if(mn!==null){if(Fn===0)var e=mn.return;else e=mn,da=lr=null,Sf(e),Ur=null,Tl=0,e=mn;for(;e!==null;)jg(e.alternate,e),e=e.return;mn=null}}function Zr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,tv(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),wa=0,rh(),us=e,mn=o=ca(e.current,null),yn=s,Fn=0,mi=null,za=!1,qr=et(e,s),th=!1,Kr=pi=nh=gr=$a=zs=0,oi=Wl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-St(r),m=1<<f;s|=e[f],r&=~m}return va=s,Uc(),o}function Kg(e,s){an=null,I.H=zl,s===Hr||s===Kc?(s=f_(),Fn=3):s===df?(s=f_(),Fn=4):Fn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,mi=s,mn===null&&(zs=1,uu(e,Si(s,e.current)))}function Qg(){var e=fi.current;return e===null?!0:(yn&4194048)===yn?Mi===null:(yn&62914560)===yn||(yn&536870912)!==0?e===Mi:!1}function Zg(){var e=I.H;return I.H=zl,e===null?zl:e}function Jg(){var e=I.A;return I.A=R2,e}function wu(){zs=4,za||(yn&4194048)!==yn&&fi.current!==null||(qr=!0),($a&134217727)===0&&(gr&134217727)===0||us===null||Ha(us,yn,pi,!1)}function lh(e,s,o){var r=zn;zn|=2;var f=Zg(),m=Jg();(us!==e||yn!==s)&&(bu=null,Zr(e,s)),s=!1;var v=zs;e:do try{if(Fn!==0&&mn!==null){var A=mn,G=mi;switch(Fn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(s=!0);var _e=Fn;if(Fn=0,mi=null,Jr(e,A,G,_e),o&&qr){v=0;break e}break;default:_e=Fn,Fn=0,mi=null,Jr(e,A,G,_e)}}O2(),v=zs;break}catch(Ee){Kg(e,Ee)}while(!0);return s&&e.shellSuspendCounter++,da=lr=null,zn=r,I.H=f,I.A=m,mn===null&&(us=null,yn=0,Uc()),v}function O2(){for(;mn!==null;)e0(mn)}function z2(e,s){var o=zn;zn|=2;var r=Zg(),f=Jg();us!==e||yn!==s?(bu=null,xu=ut()+500,Zr(e,s)):qr=et(e,s);e:do try{if(Fn!==0&&mn!==null){s=mn;var m=mi;t:switch(Fn){case 1:Fn=0,mi=null,Jr(e,s,m,1);break;case 2:case 9:if(u_(m)){Fn=0,mi=null,t0(s);break}s=function(){Fn!==2&&Fn!==9||us!==e||(Fn=7),na(e)},m.then(s,s);break e;case 3:Fn=7;break e;case 4:Fn=5;break e;case 7:u_(m)?(Fn=0,mi=null,t0(s)):(Fn=0,mi=null,Jr(e,s,m,7));break;case 5:var v=null;switch(mn.tag){case 26:v=mn.memoizedState;case 5:case 27:var A=mn;if(v?P0(v):A.stateNode.complete){Fn=0,mi=null;var G=A.sibling;if(G!==null)mn=G;else{var _e=A.return;_e!==null?(mn=_e,Su(_e)):mn=null}break t}}Fn=0,mi=null,Jr(e,s,m,5);break;case 6:Fn=0,mi=null,Jr(e,s,m,6);break;case 8:rh(),zs=6;break e;default:throw Error(a(462))}}$2();break}catch(Ee){Kg(e,Ee)}while(!0);return da=lr=null,I.H=r,I.A=f,zn=o,mn!==null?0:(us=null,yn=0,Uc(),zs)}function $2(){for(;mn!==null&&!ct();)e0(mn)}function e0(e){var s=Cg(e.alternate,e,va);e.memoizedProps=e.pendingProps,s===null?Su(e):mn=s}function t0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=yg(o,s,s.pendingProps,s.type,void 0,yn);break;case 11:s=yg(o,s,s.pendingProps,s.type.render,s.ref,yn);break;case 5:Sf(s);default:jg(o,s),s=mn=Jp(s,va),s=Cg(o,s,va)}e.memoizedProps=e.pendingProps,s===null?Su(e):mn=s}function Jr(e,s,o,r){da=lr=null,Sf(s),Ur=null,Tl=0;var f=s.return;try{if(j2(e,f,s,o,yn)){zs=1,uu(e,Si(o,e.current)),mn=null;return}}catch(m){if(f!==null)throw mn=f,m;zs=1,uu(e,Si(o,e.current)),mn=null;return}s.flags&32768?(bn||r===1?e=!0:qr||(yn&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=fi.current,r!==null&&r.tag===13&&(r.flags|=16384))),n0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){n0(s,za);return}e=s.return;var o=T2(s.alternate,s,va);if(o!==null){mn=o;return}if(s=s.sibling,s!==null){mn=s;return}mn=s=e}while(s!==null);zs===0&&(zs=5)}function n0(e,s){do{var o=A2(e.alternate,e);if(o!==null){o.flags&=32767,mn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){mn=e;return}mn=e=o}while(e!==null);zs=6,mn=null}function s0(e,s,o,r,f,m,v,A,G){e.cancelPendingCommit=null;do Cu();while(lo!==0);if((zn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Bt(e,o,m,v,A,G),e===us&&(mn=us=null,yn=0),Qr=s,Pa=e,wa=o,oh=m,ih=f,Fg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,U2(rt,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,f=se.p,se.p=2,v=zn,zn|=4;try{D2(e,s,o)}finally{zn=v,se.p=f,I.T=r}}lo=1,o0(),i0(),a0()}}function o0(){if(lo===1){lo=0;var e=Pa,s=Qr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=I.T,I.T=null;var r=se.p;se.p=2;var f=zn;zn|=4;try{$g(s,e);var m=bh,v=Cn(e.containerInfo),A=m.focusedElem,G=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&vs(A.ownerDocument.documentElement,A)){if(G!==null&&Vn(A)){var _e=G.start,Ee=G.end;if(Ee===void 0&&(Ee=_e),"selectionStart"in A)A.selectionStart=_e,A.selectionEnd=Math.min(Ee,A.value.length);else{var Oe=A.ownerDocument||document,xe=Oe&&Oe.defaultView||window;if(xe.getSelection){var ve=xe.getSelection(),Mt=A.textContent.length,Wt=Math.min(G.start,Mt),ns=G.end===void 0?Wt:Math.min(G.end,Mt);!ve.extend&&Wt>ns&&(v=ns,ns=Wt,Wt=v);var ce=Zn(A,Wt),te=Zn(A,ns);if(ce&&te&&(ve.rangeCount!==1||ve.anchorNode!==ce.node||ve.anchorOffset!==ce.offset||ve.focusNode!==te.node||ve.focusOffset!==te.offset)){var me=Oe.createRange();me.setStart(ce.node,ce.offset),ve.removeAllRanges(),Wt>ns?(ve.addRange(me),ve.extend(te.node,te.offset)):(me.setEnd(te.node,te.offset),ve.addRange(me))}}}}for(Oe=[],ve=A;ve=ve.parentNode;)ve.nodeType===1&&Oe.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Oe.length;A++){var Le=Oe[A];Le.element.scrollLeft=Le.left,Le.element.scrollTop=Le.top}}Ou=!!xh,bh=xh=null}finally{zn=f,se.p=r,I.T=o}}e.current=s,lo=2}}function i0(){if(lo===2){lo=0;var e=Pa,s=Qr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=I.T,I.T=null;var r=se.p;se.p=2;var f=zn;zn|=4;try{Rg(e,s.alternate,s)}finally{zn=f,se.p=r,I.T=o}}lo=3}}function a0(){if(lo===4||lo===3){lo=0,Pe();var e=Pa,s=Qr,o=wa,r=Fg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?lo=5:(lo=0,Qr=Pa=null,r0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ia=null),Yn(o),s=s.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Je,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=I.T,f=se.p,se.p=2,I.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{I.T=s,se.p=f}}(wa&3)!==0&&Cu(),na(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Fl++:(Fl=0,ah=e):Fl=0,Xl(0)}}function r0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,Ml(s)))}function Cu(){return o0(),i0(),a0(),l0()}function l0(){if(lo!==5)return!1;var e=Pa,s=oh;oh=0;var o=Yn(wa),r=I.T,f=se.p;try{se.p=32>o?32:o,I.T=null,o=ih,ih=null;var m=Pa,v=wa;if(lo=0,Qr=Pa=null,wa=0,(zn&6)!==0)throw Error(a(331));var A=zn;if(zn|=4,Vg(m.current),Pg(m,m.current,v,o),zn=A,Xl(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Je,m)}catch{}return!0}finally{se.p=f,I.T=r,r0(e,s)}}function c0(e,s,o){s=Si(o,s),s=$f(e.stateNode,s,2),e=Ra(e,s,2),e!==null&&(ft(e,2),na(e))}function Xn(e,s,o){if(e.tag===3)c0(e,e,o);else for(;s!==null;){if(s.tag===3){c0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=Si(o,e),o=ug(2),r=Ra(s,o,2),r!==null&&(dg(o,r,s,e),ft(r,2),na(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new B2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=I2.bind(null,e,s,o),s.then(e,e))}function I2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,us===e&&(yn&o)===o&&(zs===4||zs===3&&(yn&62914560)===yn&&300>ut()-yu?(zn&2)===0&&Zr(e,0):nh|=o,Kr===yn&&(Kr=0)),na(e)}function u0(e,s){s===0&&(s=wt()),e=ir(e,s),e!==null&&(ft(e,s),na(e))}function P2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),u0(e,o)}function H2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),u0(e,o)}function U2(e,s){return Xe(e,s)}var ku=null,el=null,uh=!1,ju=!1,dh=!1,Ua=0;function na(e){e!==el&&e.next===null&&(el===null?ku=el=e:el=el.next=e),ju=!0,uh||(uh=!0,Y2())}function Xl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-St(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,m0(r,m))}else m=yn,m=st(r,r===us?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||et(r,m)||(o=!0,m0(r,m));r=r.next}while(o);dh=!1}}function V2(){d0()}function d0(){ju=uh=!1;var e=0;Ua!==0&&ev()&&(e=Ua);for(var s=ut(),o=null,r=ku;r!==null;){var f=r.next,m=f0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(el=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}lo!==0&&lo!==5||Xl(e),Ua!==0&&(Ua=0)}function f0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-St(m),A=1<<v,G=f[v];G===-1?((A&o)===0||(A&r)!==0)&&(f[v]=Dt(A,s)):G<=s&&(e.expiredLanes|=A),m&=~A}if(s=us,o=yn,o=st(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Fn===2||Fn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ye(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||et(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Ye(r),Yn(o)){case 2:case 8:o=zt;break;case 32:o=rt;break;case 268435456:o=Q;break;default:o=rt}return r=h0.bind(null,e),o=Xe(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Ye(r),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,s){if(lo!==0&&lo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=yn;return r=st(e,e===us?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Gg(e,r,s),f0(e,ut()),e.callbackNode!=null&&e.callbackNode===o?h0.bind(null,e):null)}function m0(e,s){if(Cu())return null;Gg(e,s,!0)}function Y2(){nv(function(){(zn&6)!==0?Xe(bt,V2):d0()})}function fh(){if(Ua===0){var e=Ir;e===0&&(e=nt,nt<<=1,(nt&261888)===0&&(nt=256)),Ua=e}return Ua}function p0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Io(""+e)}function _0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function W2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=p0((f[Dn]||null).action),v=r.submitter;v&&(s=(s=v[Dn]||null)?p0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new Ts("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ua!==0){var G=v?_0(f,v):new FormData(f);Nf(o,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(A.preventDefault(),G=v?_0(f,v):new FormData(f),Nf(o,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var hh=0;hh<Gd.length;hh++){var mh=Gd[hh],F2=mh.toLowerCase(),X2=mh[0].toUpperCase()+mh.slice(1);Ii(F2,"on"+X2)}Ii($i,"onAnimationEnd"),Ii(Zi,"onAnimationIteration"),Ii(Pc,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(Wd,"onTransitionRun"),Ii(Fd,"onTransitionStart"),Ii(Xd,"onTransitionCancel"),Ii(Kp,"onTransitionEnd"),ms("onMouseEnter",["mouseout","mouseover"]),ms("onMouseLeave",["mouseout","mouseover"]),ms("onPointerEnter",["pointerout","pointerover"]),ms("onPointerLeave",["pointerout","pointerover"]),Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function g0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],G=A.instance,_e=A.currentTarget;if(A=A.listener,G!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=_e;try{m(f)}catch(Ee){Hc(Ee)}f.currentTarget=null,m=G}else for(v=0;v<r.length;v++){if(A=r[v],G=A.instance,_e=A.currentTarget,A=A.listener,G!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=_e;try{m(f)}catch(Ee){Hc(Ee)}f.currentTarget=null,m=G}}}}function pn(e,s){var o=s[dn];o===void 0&&(o=s[dn]=new Set);var r=e+"__bubble";o.has(r)||(y0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),y0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,qo.forEach(function(o){o!=="selectionchange"&&(G2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function y0(e,s,o,r){switch(X0(s)){case 2:var f=wv;break;case 8:f=Sv;break;default:f=Dh}o=f.bind(null,s,o,e),f=void 0,!_o||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=ks(A),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){r=m=v;continue e}A=A.parentNode}}r=r.return}po(function(){var _e=m,Ee=io(o),Oe=[];e:{var xe=Qp.get(e);if(xe!==void 0){var ve=Ts,Mt=e;switch(e){case"keypress":if(Ls(o)===0)break e;case"keydown":case"keyup":ve=Ws;break;case"focusin":Mt="focus",ve=Se;break;case"focusout":Mt="blur",ve=Se;break;case"beforeblur":case"afterblur":ve=Se;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=q;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=ja;break;case $i:case Zi:case Pc:ve=at;break;case Kp:ve=No;break;case"scroll":case"scrollend":ve=go;break;case"wheel":ve=Ki;break;case"copy":case"cut":case"paste":ve=Lt;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=ei;break;case"toggle":case"beforetoggle":ve=Li}var Wt=(s&4)!==0,ns=!Wt&&(e==="scroll"||e==="scrollend"),ce=Wt?xe!==null?xe+"Capture":null:xe;Wt=[];for(var te=_e,me;te!==null;){var Le=te;if(me=Le.stateNode,Le=Le.tag,Le!==5&&Le!==26&&Le!==27||me===null||ce===null||(Le=rn(te,ce),Le!=null&&Wt.push(ql(te,Le,me))),ns)break;te=te.return}0<Wt.length&&(xe=new ve(xe,Mt,null,o,Ee),Oe.push({event:xe,listeners:Wt}))}}if((s&7)===0){e:{if(xe=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",xe&&o!==Qo&&(Mt=o.relatedTarget||o.fromElement)&&(ks(Mt)||Mt[ot]))break e;if((ve||xe)&&(xe=Ee.window===Ee?Ee:(xe=Ee.ownerDocument)?xe.defaultView||xe.parentWindow:window,ve?(Mt=o.relatedTarget||o.toElement,ve=_e,Mt=Mt?ks(Mt):null,Mt!==null&&(ns=u(Mt),Wt=Mt.tag,Mt!==ns||Wt!==5&&Wt!==27&&Wt!==6)&&(Mt=null)):(ve=null,Mt=_e),ve!==Mt)){if(Wt=qs,Le="onMouseLeave",ce="onMouseEnter",te="mouse",(e==="pointerout"||e==="pointerover")&&(Wt=ei,Le="onPointerLeave",ce="onPointerEnter",te="pointer"),ns=ve==null?xe:so(ve),me=Mt==null?xe:so(Mt),xe=new Wt(Le,te+"leave",ve,o,Ee),xe.target=ns,xe.relatedTarget=me,Le=null,ks(Ee)===_e&&(Wt=new Wt(ce,te+"enter",Mt,o,Ee),Wt.target=me,Wt.relatedTarget=ns,Le=Wt),ns=Le,ve&&Mt)t:{for(Wt=q2,ce=ve,te=Mt,me=0,Le=ce;Le;Le=Wt(Le))me++;Le=0;for(var $t=te;$t;$t=Wt($t))Le++;for(;0<me-Le;)ce=Wt(ce),me--;for(;0<Le-me;)te=Wt(te),Le--;for(;me--;){if(ce===te||te!==null&&ce===te.alternate){Wt=ce;break t}ce=Wt(ce),te=Wt(te)}Wt=null}else Wt=null;ve!==null&&x0(Oe,xe,ve,Wt,!1),Mt!==null&&ns!==null&&x0(Oe,ns,Mt,Wt,!0)}}e:{if(xe=_e?so(_e):window,ve=xe.nodeName&&xe.nodeName.toLowerCase(),ve==="select"||ve==="input"&&xe.type==="file")var Bn=E;else if(Zt(xe))if(D)Bn=xt;else{Bn=Fe;var Rt=Ve}else ve=xe.nodeName,!ve||ve.toLowerCase()!=="input"||xe.type!=="checkbox"&&xe.type!=="radio"?_e&&qn(_e.elementType)&&(Bn=E):Bn=lt;if(Bn&&(Bn=Bn(e,_e))){cn(Oe,Bn,o,Ee);break e}Rt&&Rt(e,xe,_e),e==="focusout"&&_e&&xe.type==="number"&&_e.memoizedProps.value!=null&&Bs(xe,"number",xe.value)}switch(Rt=_e?so(_e):window,e){case"focusin":(Zt(Rt)||Rt.contentEditable==="true")&&(qt=Rt,ws=_e,Tn=null);break;case"focusout":Tn=ws=qt=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,Ro(Oe,o,Ee);break;case"selectionchange":if(Xt)break;case"keydown":case"keyup":Ro(Oe,o,Ee)}var ln;if(B)e:{switch(e){case"compositionstart":var xn="onCompositionStart";break e;case"compositionend":xn="onCompositionEnd";break e;case"compositionupdate":xn="onCompositionUpdate";break e}xn=void 0}else gn?mt(e,o)&&(xn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(xn="onCompositionStart");xn&&(de&&o.locale!=="ko"&&(gn||xn!=="onCompositionStart"?xn==="onCompositionEnd"&&gn&&(ln=wo()):(Wn=Ee,Zo="value"in Wn?Wn.value:Wn.textContent,gn=!0)),Rt=Eu(_e,xn),0<Rt.length&&(xn=new Ke(xn,e,null,o,Ee),Oe.push({event:xn,listeners:Rt}),ln?xn.data=ln:(ln=Vt(o),ln!==null&&(xn.data=ln)))),(ln=ee?Ds(e,o):bo(e,o))&&(xn=Eu(_e,"onBeforeInput"),0<xn.length&&(Rt=new Ke("onBeforeInput","beforeinput",null,o,Ee),Oe.push({event:Rt,listeners:xn}),Rt.data=ln)),W2(Oe,e,_e,o,Ee)}g0(Oe,s)})}function ql(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Eu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=rn(e,o),f!=null&&r.unshift(ql(e,f,m)),f=rn(e,s),f!=null&&r.push(ql(e,f,m))),e.tag===3)return r;e=e.return}return[]}function q2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,G=A.alternate,_e=A.stateNode;if(A=A.tag,G!==null&&G===r)break;A!==5&&A!==26&&A!==27||_e===null||(G=_e,f?(_e=rn(o,m),_e!=null&&v.unshift(ql(o,_e,G))):f||(_e=rn(o,m),_e!=null&&v.push(ql(o,_e,G)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var K2=/\r\n?/g,Q2=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(K2,`
`).replace(Q2,"")}function v0(e,s){return s=b0(s),b0(e)===s}function ts(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||zo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&zo(e,""+r);break;case"className":is(e,"class",r);break;case"tabIndex":is(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":is(e,o,r);break;case"style":ui(e,r,m);break;case"data":if(s!=="object"){is(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Io(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ts(e,s,"name",f.name,f,null),ts(e,s,"formEncType",f.formEncType,f,null),ts(e,s,"formMethod",f.formMethod,f,null),ts(e,s,"formTarget",f.formTarget,f,null)):(ts(e,s,"encType",f.encType,f,null),ts(e,s,"method",f.method,f,null),ts(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Io(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=oo);break;case"onScroll":r!=null&&pn("scroll",e);break;case"onScrollEnd":r!=null&&pn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Io(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":pn("beforetoggle",e),pn("toggle",e),Nn(e,"popover",r);break;case"xlinkActuate":Mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Mn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Mn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Mn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Mn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Nn(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Bi.get(o)||o,Nn(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":ui(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?zo(e,r):(typeof r=="number"||typeof r=="bigint")&&zo(e,""+r);break;case"onScroll":r!=null&&pn("scroll",e);break;case"onScrollEnd":r!=null&&pn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=oo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ps.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[Dn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):Nn(e,o,r)}}}function jo(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pn("error",e),pn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(e,s,m,v,o,null)}}f&&ts(e,s,"srcSet",o.srcSet,o,null),r&&ts(e,s,"src",o.src,o,null);return;case"input":pn("invalid",e);var A=m=v=f=null,G=null,_e=null;for(r in o)if(o.hasOwnProperty(r)){var Ee=o[r];if(Ee!=null)switch(r){case"name":f=Ee;break;case"type":v=Ee;break;case"checked":G=Ee;break;case"defaultChecked":_e=Ee;break;case"value":m=Ee;break;case"defaultValue":A=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(a(137,s));break;default:ts(e,s,r,Ee,o,null)}}Rn(e,m,A,G,_e,v,f,!1);return;case"select":pn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:ts(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?Pn(e,!!r,s,!1):o!=null&&Pn(e,!!r,o,!0);return;case"textarea":pn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ts(e,s,v,A,o,null)}xi(e,r,f,m);return;case"option":for(G in o)if(o.hasOwnProperty(G)&&(r=o[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ts(e,s,G,r,o,null)}return;case"dialog":pn("beforetoggle",e),pn("toggle",e),pn("cancel",e),pn("close",e);break;case"iframe":case"object":pn("load",e);break;case"video":case"audio":for(r=0;r<Gl.length;r++)pn(Gl[r],e);break;case"image":pn("error",e),pn("load",e);break;case"details":pn("toggle",e);break;case"embed":case"source":case"link":pn("error",e),pn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_e in o)if(o.hasOwnProperty(_e)&&(r=o[_e],r!=null))switch(_e){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(e,s,_e,r,o,null)}return;default:if(qn(s)){for(Ee in o)o.hasOwnProperty(Ee)&&(r=o[Ee],r!==void 0&&yh(e,s,Ee,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&ts(e,s,A,r,o,null))}function Z2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,G=null,_e=null,Ee=null;for(ve in o){var Oe=o[ve];if(o.hasOwnProperty(ve)&&Oe!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":G=Oe;default:r.hasOwnProperty(ve)||ts(e,s,ve,null,r,Oe)}}for(var xe in r){var ve=r[xe];if(Oe=o[xe],r.hasOwnProperty(xe)&&(ve!=null||Oe!=null))switch(xe){case"type":m=ve;break;case"name":f=ve;break;case"checked":_e=ve;break;case"defaultChecked":Ee=ve;break;case"value":v=ve;break;case"defaultValue":A=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ve!==Oe&&ts(e,s,xe,ve,r,Oe)}}_s(e,v,A,G,_e,Ee,m,f);return;case"select":ve=v=A=xe=null;for(m in o)if(G=o[m],o.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ve=G;default:r.hasOwnProperty(m)||ts(e,s,m,null,r,G)}for(f in r)if(m=r[f],G=o[f],r.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":xe=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==G&&ts(e,s,f,m,r,G)}s=A,o=v,r=ve,xe!=null?Pn(e,!!o,xe,!1):!!r!=!!o&&(s!=null?Pn(e,!!o,s,!0):Pn(e,!!o,o?[]:"",!1));return;case"textarea":ve=xe=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ts(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":xe=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ts(e,s,v,f,r,m)}as(e,xe,ve);return;case"option":for(var Mt in o)if(xe=o[Mt],o.hasOwnProperty(Mt)&&xe!=null&&!r.hasOwnProperty(Mt))switch(Mt){case"selected":e.selected=!1;break;default:ts(e,s,Mt,null,r,xe)}for(G in r)if(xe=r[G],ve=o[G],r.hasOwnProperty(G)&&xe!==ve&&(xe!=null||ve!=null))switch(G){case"selected":e.selected=xe&&typeof xe!="function"&&typeof xe!="symbol";break;default:ts(e,s,G,xe,r,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in o)xe=o[Wt],o.hasOwnProperty(Wt)&&xe!=null&&!r.hasOwnProperty(Wt)&&ts(e,s,Wt,null,r,xe);for(_e in r)if(xe=r[_e],ve=o[_e],r.hasOwnProperty(_e)&&xe!==ve&&(xe!=null||ve!=null))switch(_e){case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,s));break;default:ts(e,s,_e,xe,r,ve)}return;default:if(qn(s)){for(var ns in o)xe=o[ns],o.hasOwnProperty(ns)&&xe!==void 0&&!r.hasOwnProperty(ns)&&yh(e,s,ns,void 0,r,xe);for(Ee in r)xe=r[Ee],ve=o[Ee],!r.hasOwnProperty(Ee)||xe===ve||xe===void 0&&ve===void 0||yh(e,s,Ee,xe,r,ve);return}}for(var ce in o)xe=o[ce],o.hasOwnProperty(ce)&&xe!=null&&!r.hasOwnProperty(ce)&&ts(e,s,ce,null,r,xe);for(Oe in r)xe=r[Oe],ve=o[Oe],!r.hasOwnProperty(Oe)||xe===ve||xe==null&&ve==null||ts(e,s,Oe,xe,r,ve)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&w0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var G=o[r],_e=G.startTime;if(_e>A)break;var Ee=G.transferSize,Oe=G.initiatorType;Ee&&w0(Oe)&&(G=G.responseEnd,v+=Ee*(G<A?1:(A-_e)/(G-_e)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function S0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function ev(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(sv)}:k0;function sv(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function M0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),ol(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Kl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Kl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[Es]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Kl(e.ownerDocument.body);o=f}while(o);ol(s)}function E0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),Go(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function ov(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Es])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function iv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ei(e.nextSibling),e===null))return null;return e}function T0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ei(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function av(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ei(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function A0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ei(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function N0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Kl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Go(e)}var Ti=new Map,R0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=se.d;se.d={f:rv,r:lv,D:cv,C:uv,L:dv,m:fv,X:mv,S:hv,M:pv};function rv(){var e=Sa.f(),s=vu();return e||s}function lv(e){var s=uo(e);s!==null&&s.tag===5&&s.type==="form"?K_(s):Sa.r(e)}var tl=typeof document>"u"?null:document;function B0(e,s,o){var r=tl;if(r&&typeof s=="string"&&s){var f=xs(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),R0.has(f)||(R0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),jo(s,"link",e),jn(s),r.head.appendChild(s)))}}function cv(e){Sa.D(e),B0("dns-prefetch",e,null)}function uv(e,s){Sa.C(e,s),B0("preconnect",e,s)}function dv(e,s,o){Sa.L(e,s,o);var r=tl;if(r&&e&&s){var f='link[rel="preload"][as="'+xs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+xs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+xs(o.imageSizes)+'"]')):f+='[href="'+xs(e)+'"]';var m=f;switch(s){case"style":m=nl(e);break;case"script":m=sl(e)}Ti.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Ti.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Ql(m))||s==="script"&&r.querySelector(Zl(m))||(s=r.createElement("link"),jo(s,"link",e),jn(s),r.head.appendChild(s)))}}function fv(e,s){Sa.m(e,s);var o=tl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+xs(r)+'"][href="'+xs(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=sl(e)}if(!Ti.has(m)&&(e=x({rel:"modulepreload",href:e},s),Ti.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zl(m)))return}r=o.createElement("link"),jo(r,"link",e),jn(r),o.head.appendChild(r)}}}function hv(e,s,o){Sa.S(e,s,o);var r=tl;if(r&&e){var f=fo(r).hoistableStyles,m=nl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Ql(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Ti.get(m))&&Mh(e,o);var G=v=r.createElement("link");jn(G),jo(G,"link",e),G._p=new Promise(function(_e,Ee){G.onload=_e,G.onerror=Ee}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Du(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function mv(e,s){Sa.X(e,s);var o=tl;if(o&&e){var r=fo(o).hoistableScripts,f=sl(e),m=r.get(f);m||(m=o.querySelector(Zl(f)),m||(e=x({src:e,async:!0},s),(s=Ti.get(f))&&Eh(e,s),m=o.createElement("script"),jn(m),jo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function pv(e,s){Sa.M(e,s);var o=tl;if(o&&e){var r=fo(o).hoistableScripts,f=sl(e),m=r.get(f);m||(m=o.querySelector(Zl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Ti.get(f))&&Eh(e,s),m=o.createElement("script"),jn(m),jo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function L0(e,s,o,r){var f=(f=$e.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=nl(o.href),o=fo(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=nl(o.href);var m=fo(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Ql(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Ti.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ti.set(e,o),m||_v(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=sl(o),o=fo(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function nl(e){return'href="'+xs(e)+'"'}function Ql(e){return'link[rel="stylesheet"]['+e+"]"}function O0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function _v(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),jo(s,"link",o),jn(s),e.head.appendChild(s))}function sl(e){return'[src="'+xs(e)+'"]'}function Zl(e){return"script[async]"+e}function z0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+xs(o.href)+'"]');if(r)return s.instance=r,jn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),jn(r),jo(r,"style",f),Du(r,o.precedence,e),s.instance=r;case"stylesheet":f=nl(o.href);var m=e.querySelector(Ql(f));if(m)return s.state.loading|=4,s.instance=m,jn(m),m;r=O0(o),(f=Ti.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),jn(m);var v=m;return v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),jo(m,"link",r),s.state.loading|=4,Du(m,o.precedence,e),s.instance=m;case"script":return m=sl(o.src),(f=e.querySelector(Zl(m)))?(s.instance=f,jn(f),f):(r=o,(f=Ti.get(m))&&(r=x({},o),Eh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),jn(f),jo(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Du(r,o.precedence,e));return s.instance}function Du(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Eh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Nu=null;function $0(e,s,o){if(Nu===null){var r=new Map,f=Nu=new Map;f.set(o,r)}else f=Nu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Es]||m[un]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function I0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function gv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function P0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=nl(r.href),m=s.querySelector(Ql(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,jn(m);return}m=s.ownerDocument||s,r=O0(r),(f=Ti.get(f))&&Mh(r,f),m=m.createElement("link"),jn(m);var v=m;v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),jo(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function xv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*J2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(bv,e),Bu=null,Ru.call(e))}function bv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Jl={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function vv(e,s,o,r,f,m,v,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.hiddenUpdates=Nt(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function H0(e,s,o,r,f,m,v,A,G,_e,Ee,Oe){return e=new vv(e,s,o,v,G,_e,Ee,Oe,A),s=1,m===!0&&(s|=24),m=di(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function U0(e){return e?(e=Br,e):Br}function V0(e,s,o,r,f,m){f=U0(f),r.context===null?r.context=f:r.pendingContext=f,r=Na(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ra(e,r,s),o!==null&&(ii(o,e,s),Dl(o,e,s))}function Y0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){Y0(e,s),(e=e.alternate)&&Y0(e,s)}function W0(e){if(e.tag===13||e.tag===31){var s=ir(e,67108864);s!==null&&ii(s,e,67108864),Ah(e,67108864)}}function F0(e){if(e.tag===13||e.tag===31){var s=_i();s=fs(s);var o=ir(e,s);o!==null&&ii(o,e,s),Ah(e,s)}}var Ou=!0;function wv(e,s,o,r){var f=I.T;I.T=null;var m=se.p;try{se.p=2,Dh(e,s,o,r)}finally{se.p=m,I.T=f}}function Sv(e,s,o,r){var f=I.T;I.T=null;var m=se.p;try{se.p=8,Dh(e,s,o,r)}finally{se.p=m,I.T=f}}function Dh(e,s,o,r){if(Ou){var f=Nh(r);if(f===null)gh(e,s,r,zu,o),G0(e,r);else if(kv(f,e,s,o,r))r.stopPropagation();else if(G0(e,r),s&4&&-1<Cv.indexOf(e)){for(;f!==null;){var m=uo(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Kt(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var G=1<<31-St(v);A.entanglements[1]|=G,v&=~G}na(m),(zn&6)===0&&(xu=ut()+500,Xl(0))}}break;case 31:case 13:A=ir(m,2),A!==null&&ii(A,m,2),vu(),Ah(m,2)}if(m=Nh(r),m===null&&gh(e,s,r,zu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Nh(e){return e=io(e),Rh(e)}var zu=null;function Rh(e){if(zu=null,e=ks(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function X0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case bt:return 2;case zt:return 8;case rt:case V:return 32;case Q:return 268435456;default:return 32}default:return 32}}var Bh=!1,Ya=null,Wa=null,Fa=null,ec=new Map,tc=new Map,Xa=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G0(e,s){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":ec.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":tc.delete(s.pointerId)}}function nc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=uo(s),s!==null&&W0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function kv(e,s,o,r,f){switch(s){case"focusin":return Ya=nc(Ya,e,s,o,r,f),!0;case"dragenter":return Wa=nc(Wa,e,s,o,r,f),!0;case"mouseover":return Fa=nc(Fa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return ec.set(m,nc(ec.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,tc.set(m,nc(tc.get(m)||null,e,s,o,r,f)),!0}return!1}function q0(e){var s=ks(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,kn(e.priority,function(){F0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,kn(e.priority,function(){F0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Nh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Qo=r,o.target.dispatchEvent(r),Qo=null}else return s=uo(o),s!==null&&W0(s),e.blockedOn=o,!1;s.shift()}return!0}function K0(e,s,o){$u(e)&&o.delete(s)}function jv(){Bh=!1,Ya!==null&&$u(Ya)&&(Ya=null),Wa!==null&&$u(Wa)&&(Wa=null),Fa!==null&&$u(Fa)&&(Fa=null),ec.forEach(K0),tc.forEach(K0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jv)))}var Pu=null;function Q0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=uo(o);m!==null&&(e.splice(s,3),s-=3,Nf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function ol(e){function s(G){return Iu(G,e)}Ya!==null&&Iu(Ya,e),Wa!==null&&Iu(Wa,e),Fa!==null&&Iu(Fa,e),ec.forEach(s),tc.forEach(s);for(var o=0;o<Xa.length;o++){var r=Xa[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Xa.length&&(o=Xa[0],o.blockedOn===null);)q0(o),o.blockedOn===null&&Xa.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[Dn]||null;if(typeof m=="function")v||Q0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[Dn]||null)A=v.formAction;else if(Rh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),Q0(o)}}}function Z0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=_i();V0(o,r,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;V0(e.current,2,null,e,null,null),vu(),s[ot]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=An();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Xa.length&&s!==0&&s<Xa[o].priority;o++);Xa.splice(o,0,e),o===0&&q0(e)}};var J0=n.version;if(J0!=="19.2.4")throw Error(a(527,J0,"19.2.4"));se.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Mv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Je=Uu.inject(Mv),Ge=Uu}catch{}}return oc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ag,m=rg,v=lg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=H0(e,1,!1,null,null,o,r,null,f,m,v,Z0),e[ot]=s.current,_h(e),new Lh(s)},oc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ag,v=rg,A=lg,G=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(G=o.formState)),s=H0(e,1,!0,s,o!=null?o:null,r,f,G,m,v,A,Z0),s.context=U0(null),o=s.current,r=_i(),r=fs(r),f=Na(r),f.callback=null,Ra(o,f,r),o=r,s.current.lanes=o,ft(s,o),na(s),e[ot]=s.current,_h(e),new Hu(s)},oc.version="19.2.4",oc}var cy;function Ov(){if(cy)return zh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=Lv(),zh.exports}var zv=Ov();const $v=Bx(zv);var _=cp();const Iv=Bx(_);function Pv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Hv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const Ri="__TAURI_TO_IPC_KEY__";function Uv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function Ce(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Vv{get rid(){return Pv(this,hd,"f")}constructor(n){hd.set(this,void 0),Hv(this,hd,n)}async close(){return Ce("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var gi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(gi||(gi={}));async function Ox(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await Ce("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Ce("plugin:event|listen",{event:t,target:c,handler:Uv(n)}).then(u=>async()=>Ox(t,u))}async function Yv(t,n,i){return yc(t,a=>{Ox(t,a.id),n(a)},i)}async function Wv(t,n){await Ce("plugin:event|emit",{event:t,payload:n})}async function Fv(t,n,i){await Ce("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class zx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[Ri](){return{width:this.width,height:this.height}}toJSON(){return this[Ri]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new zx(this.width/n,this.height/n)}[Ri](){return{width:this.width,height:this.height}}toJSON(){return this[Ri]()}}class il{constructor(n){this.size=n}toLogical(n){return this.size instanceof zx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[Ri](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ri]()}}class $x{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ja(this.x*n,this.y*n)}[Ri](){return{x:this.x,y:this.y}}toJSON(){return this[Ri]()}}class Ja{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new $x(this.x/n,this.y/n)}[Ri](){return{x:this.x,y:this.y}}toJSON(){return this[Ri]()}}class Vu{constructor(n){this.position=n}toLogical(n){return this.position instanceof $x?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ja?this.position:this.position.toPhysical(n)}[Ri](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ri]()}}class bc extends Vv{constructor(n){super(n)}static async new(n,i,a){return Ce("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return Ce("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new bc(i))}static async fromPath(n){return Ce("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return Ce("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Ce("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Mm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Mm||(Mm={}));class Xv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var uy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(uy||(uy={}));function up(){return new Ix(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Uh(){return Ce("plugin:window|get_all_windows").then(t=>t.map(n=>new Ix(n,{skip:!0})))}const Vh=["tauri://created","tauri://error"];class Ix{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Ce("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Uh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return up()}static async getAll(){return Uh()}static async getFocusedWindow(){for(const n of await Uh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Yv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Vh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Wv(n,i)}async emitTo(n,i,a){if(Vh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Fv(n,i,a)}_handleTauriEvent(n,i){return Vh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Ce("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Ce("plugin:window|inner_position",{label:this.label}).then(n=>new Ja(n))}async outerPosition(){return Ce("plugin:window|outer_position",{label:this.label}).then(n=>new Ja(n))}async innerSize(){return Ce("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return Ce("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return Ce("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Ce("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Ce("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Ce("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Ce("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Ce("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Ce("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Ce("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Ce("plugin:window|is_closable",{label:this.label})}async isVisible(){return Ce("plugin:window|is_visible",{label:this.label})}async title(){return Ce("plugin:window|title",{label:this.label})}async theme(){return Ce("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Ce("plugin:window|is_always_on_top",{label:this.label})}async center(){return Ce("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Mm.Critical?i={type:"Critical"}:i={type:"Informational"}),Ce("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Ce("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Ce("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Ce("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Ce("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Ce("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Ce("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Ce("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Ce("plugin:window|maximize",{label:this.label})}async unmaximize(){return Ce("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Ce("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Ce("plugin:window|minimize",{label:this.label})}async unminimize(){return Ce("plugin:window|unminimize",{label:this.label})}async show(){return Ce("plugin:window|show",{label:this.label})}async hide(){return Ce("plugin:window|hide",{label:this.label})}async close(){return Ce("plugin:window|close",{label:this.label})}async destroy(){return Ce("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Ce("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Ce("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Ce("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Ce("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Ce("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Ce("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Ce("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Ce("plugin:window|set_size",{label:this.label,value:n instanceof il?n:new il(n)})}async setMinSize(n){return Ce("plugin:window|set_min_size",{label:this.label,value:n instanceof il?n:n?new il(n):null})}async setMaxSize(n){return Ce("plugin:window|set_max_size",{label:this.label,value:n instanceof il?n:n?new il(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Ce("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Ce("plugin:window|set_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setFullscreen(n){return Ce("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Ce("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Ce("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Ce("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Ce("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return Ce("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Ce("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Ce("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Ce("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Ce("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Ce("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setIgnoreCursorEvents(n){return Ce("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Ce("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Ce("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Ce("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Ce("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Ce("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return Ce("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Ce("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Ce("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Ce("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(gi.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(gi.WINDOW_MOVED,i=>{i.payload=new Ja(i.payload),n(i)})}async onCloseRequested(n){return this.listen(gi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Xv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(gi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),a=await this.listen(gi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ja(d.payload.position)}})}),c=await this.listen(gi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),u=await this.listen(gi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(gi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(gi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(gi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(gi.WINDOW_THEME_CHANGED,n)}}var dy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(dy||(dy={}));var fy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(fy||(fy={}));var hy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(hy||(hy={}));var my;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(my||(my={}));async function Gv(t={}){return typeof t=="object"&&Object.freeze(t),await Ce("plugin:dialog|open",{options:t})}/**
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
 */const Jv=_.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...Qv,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Px("lucide",c),...!u&&!Zv(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=(t,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(Jv,{ref:u,iconNode:n,className:Px(`lucide-${qv(py(t))}`,`lucide-${t}`,a),...c}));return i.displayName=py(t),i};/**
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
 */const cw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],uw=xl("search",cw),dw=3.7,Yu=200,Em=240,gs=540,$s=176,Yh=32,bl=20,fw=Em/2,ic=gs+fw,yr=18,xr=18,Wh="#E6E6E6";function _y(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function jr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function Ca(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:Ca(t).localeCompare(Ca(n))}function Ux(t){return[...t].sort(_c)}function hw(t){var h,p,y,g,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[Ca(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(Ca(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=Ca(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const j=(y=a.get(w))!=null?y:[];j.push(b),a.set(w,j)}for(const b of a.values())b.sort(_c);const c=t.filter(b=>{var w;return((w=i.get(Ca(b)))!=null?w:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=Ca(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(g=a.get(w))!=null?g:[]){const j=Ca(S),k=((x=i.get(j))!=null?x:0)-1;i.set(j,k),k===0&&c.push(S)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(Ca(b))).sort(_c)]}function Vx(t,n){var i;return Ux(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Yx(t,n,i){return Vx(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function mw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function pw(t,n,i){var g,x,b,w,S,j,k;const a=Yx(t,i,n);if(a.length===0)return null;const c=a.map(M=>jr(t,M)),u=new Set(c.map(M=>M.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(w=(b=c.find(M=>M.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,y=c.find(M=>h&&M.id===h||d&&M.id===d?!0:!M.parentSha||!u.has(M.parentSha));return y||((k=(j=mw(c,p!=null?p:void 0))!=null?j:c[0])!=null?k:null)}function _w(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Vx(t.name,i);if(a.length>0){const y=a.map(b=>jr(t.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function dp(t,n,i={},a={}){var le,oe,je,ze;const u=new Map(t.map(J=>[J.name,J])),d=new Map,h=new Map;for(const J of t){const I=((le=i[J.name])!=null?le:[]).filter(se=>se.kind!=="branch-created").map(se=>new Date(se.date).getTime()).filter(se=>Number.isFinite(se)).sort((se,W)=>se-W)[0];I!=null&&h.set(J.name,I)}const p=J=>{const ue=h.get(J.name);return ue!=null?ue:_y(J).start},y=J=>{var I;const ue=(I=a[J.name])!=null?I:null;return ue&&ue!==J.name&&(ue===n||u.has(ue))?ue:J.name===n?null:J.parentBranch&&J.parentBranch!==J.name&&(J.parentBranch===n||u.has(J.parentBranch))?J.parentBranch:null};for(const J of t){if(J.name===n)continue;const ue=(oe=y(J))!=null?oe:n,I=(je=d.get(ue))!=null?je:[];I.push(J),d.set(ue,I)}for(const J of d.values())J.sort((ue,I)=>p(ue)-p(I)||ue.name.localeCompare(I.name));const g=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const J of Object.values(i))for(const ue of J){const I=new Date(ue.date).getTime();Number.isFinite(I)&&(ue.fullSha&&S.set(ue.fullSha,I),ue.sha&&S.set(ue.sha,I))}const j=(J,ue)=>({start:Math.min(J,ue),end:Math.max(J,ue)}),k=J=>{var ie,he;const ue=j(p(J),_y(J).end),I=[ue],se=ue.start,W=_w(J,n,i),K=W?S.get(W):void 0,ge=new Date((he=(ie=J.divergedFromDate)!=null?ie:J.createdDate)!=null?he:J.lastCommitDate).getTime(),R=Number.isFinite(K!=null?K:NaN)?K:Number.isFinite(ge)?ge:null;if(R==null)return I;const re=j(R,se);return re.start!==re.end&&I.push(re),I},M=Math.max(1,360*60*1e3*dw),$=(J,ue)=>!(J.start-ue.end>=M||ue.start-J.end>=M),L=(J,ue)=>ue.some(I=>{var se;return((se=w.get(J))!=null?se:[]).some(W=>$(I,W))}),N=(J,ue=new Set)=>{const I=b.get(J);if(I!=null)return I;if(ue.has(J))return 1;ue.add(J);const se=u.get(J);if(!se||J===n)return ue.delete(J),b.set(J,0),0;const W=y(se),K=W?N(W,ue)+1:1;return ue.delete(J),b.set(J,K),K},Y=(J,ue=new Set)=>{var $e,Be;const I=g.get(J);if(I)return I.column;if(ue.has(J))return 0;ue.add(J);const se=u.get(J);if(!se)return ue.delete(J),0;if(J===n){const tt={name:J,column:0,parentName:null};g.set(J,tt),x.push(tt);const _t=k(se);return w.set(0,[...($e=w.get(0))!=null?$e:[],..._t]),ue.delete(J),0}const W=y(se),K=W&&!ue.has(W)?W:null,ge=K?Y(K,ue):0,R=Math.max(1,N(J)),re=Math.max(K?ge+1:1,R),ie=k(se);let he=re;for(;L(he,ie);)he+=1;const Te={name:J,column:he,parentName:K};return g.set(J,Te),x.push(Te),w.set(he,[...(Be=w.get(he))!=null?Be:[],...ie]),ue.delete(J),he};Y(n);const H=t.filter(J=>!g.has(J.name)).sort((J,ue)=>p(J)-p(ue)||J.name.localeCompare(ue.name)),X=H.filter(J=>y(J)!=null),U=H.filter(J=>y(J)==null);for(const J of X)Y(J.name);let Z=Math.max(0,...x.map(J=>J.column))+1+1;for(const J of U){const ue=k(J);let I=Z;for(;L(I,ue);)I+=1;const se={name:J.name,column:I,parentName:null};g.set(J.name,se),x.push(se),w.set(I,[...(ze=w.get(I))!=null?ze:[],...ue]),Z=I+1}return x.sort((J,ue)=>J.column-ue.column||J.name.localeCompare(ue.name))}function gw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Ui=0,Xh=0,yw=1800*1e3,xw=1440*60*1e3,Ai=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Yo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function gy(t,n,i=new Map){var X,U,Z,le,oe,je,ze,J,ue,I,se,W;if(t.length===0)return new Map;const a=[...t].sort((K,ge)=>{const R=Ai(K.date)-Ai(ge.date);return R!==0?R:K.id!==ge.id?K.id.localeCompare(ge.id):K.visualId.localeCompare(ge.visualId)}),c=new Map;for(const K of t){const ge=(X=K.parentSha)!=null?X:null;if(ge){const R=(U=c.get(ge))!=null?U:new Set;R.add(K.id),c.set(ge,R)}for(const R of(Z=i.get(K.id))!=null?Z:[]){if(!R)continue;const re=(le=c.get(R))!=null?le:new Set;re.add(K.id),c.set(R,re)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const K of t){const ge=(oe=y.get(K.branchName))!=null?oe:new Set;ge.add(K.id),y.set(K.branchName,ge);const R=(ze=(je=n.get(K.branchName))==null?void 0:je.column)!=null?ze:0,re=(J=g.get(K.id))!=null?J:new Set;re.add(R),g.set(K.id,re);const ie=new Set;K.parentSha&&ie.add(K.parentSha),x.set(K.visualId,ie);const he=new Set(ie);for(const Te of(ue=i.get(K.id))!=null?ue:[])Te&&he.add(Te);b.set(K.visualId,he)}const w=new Set(Array.from(g.keys())),S=Array.from(w),j=new Map,k=K=>{const ge=[];for(const R of S)Yo(R,K)&&ge.push(R);return ge},M=new Map;for(const K of S)M.set(K,new Set);for(const K of t){const ge=k(K.id);if(ge.length===0)continue;const R=(I=b.get(K.visualId))!=null?I:new Set,re=new Set;for(const ie of R)for(const he of k(ie))re.add(he);for(const ie of ge){const he=(se=M.get(ie))!=null?se:new Set;for(const Te of re)he.add(Te);M.set(ie,he)}}const $=new Map,L=(K,ge=new Set)=>{var he;const R=$.get(K);if(R)return R;if(ge.has(K))return new Set;ge.add(K);const re=(he=M.get(K))!=null?he:new Set,ie=new Set;for(const Te of re){ie.add(Te);for(const $e of L(Te,ge))ie.add($e)}return ge.delete(K),$.set(K,ie),ie},N=(K,ge)=>{if(Yo(K,ge))return!0;const R=k(K),re=k(ge);for(const ie of R){const he=L(ie);for(const Te of re)if(he.has(Te))return!0}for(const ie of re){const he=L(ie);for(const Te of R)if(he.has(Te))return!0}return!1};let Y=1;const H=(K,ge)=>{var pt,ke,ne,Me,Xe,Ye,ct,Pe,ut;const R=(ke=(pt=n.get(K.branchName))==null?void 0:pt.column)!=null?ke:0,re=(ne=y.get(K.branchName))!=null?ne:new Set,he=!(!!K.parentSha&&re.has(K.parentSha))&&K.parentSha?K.parentSha:null,Te=Array.from(ge).flatMap(dt=>k(dt).flatMap(bt=>{var zt;return(zt=j.get(bt))!=null?zt:[]})),$e=(K.kind==="branch-created"||K.kind==="stash")&&Te.length>0?Math.max(...Te)+1:null,Be=Te.length>0?Math.max(...Te)+1:1,tt=(Me=c.get(K.id))!=null?Me:new Set,It=Array.from(tt).flatMap(dt=>{var bt;return Array.from((bt=g.get(dt))!=null?bt:[])}).some(dt=>dt!==R),vt=new Date(K.date).getTime(),yt=Math.max(Be,1);let Ze=null;for(let dt=yt;dt<Y;dt+=1){const bt=(Xe=d.get(dt))!=null?Xe:[];if(bt.length===0||It||p.has(dt))continue;const zt=(Ye=b.get(K.visualId))!=null?Ye:new Set;if(!(bt.some(fe=>N(K.id,fe.sha)?!0:Array.from(zt).some(Je=>Yo(Je,fe.sha)))||bt.some(fe=>fe.column===R)||!Number.isFinite(vt)||!bt.every(fe=>{if(!Number.isFinite(fe.time))return!1;const Je=!!he&&!!fe.branchEntryParentSha&&he===fe.branchEntryParentSha?xw:yw;return Math.abs(fe.time-vt)<=Je}))){Ze=dt;break}}$e!=null&&(Ze=$e),Ze==null&&(Ze=Math.max(Be,Y)),u.set(K.visualId,Ze),Ze>=Y&&(Y=Ze+1);const Yt=(ct=d.get(Ze))!=null?ct:[];Yt.push({visualId:K.visualId,sha:K.id,column:R,time:vt,branchEntryParentSha:he}),d.set(Ze,Yt),It&&p.add(Ze);for(const dt of ge){const bt=(Pe=h.get(dt))!=null?Pe:[];bt.push(Ze),h.set(dt,bt)}const Qe=(ut=j.get(K.id))!=null?ut:[];Qe.push(Ze),j.set(K.id,Qe)};for(const K of a){const ge=(W=x.get(K.visualId))!=null?W:new Set;H(K,ge)}return u}function Mc(t){var nn,To,ps,li,ci,Ao,Ko,xs,_s,Rn,Bs,Pn,as,xi,zo,Xi,Gt,ui,qn,Bi,$o,Io,oo,Qo,io,Sn,mo,rs,bs,po,rn,Us,_o,Vs,Wn,Zo,ao,wo,Ls,Po,Do,Qt,Ys,Ts,As,go,Ho,yo,js,xo,qs;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:j,orientation:k="horizontal",nodePositionOverrides:M={}}=t,$=k==="horizontal",L=new Map(i.map(T=>[T.name,T])),N=new Map(n.map(T=>[T.name,T])),Y=hw([...a.map(T=>{var q,pe,Se;return{id:T.fullSha,branchName:d,message:(q=T.prTitle)!=null?q:T.sha,author:"",date:T.date,parentSha:(Se=(pe=T.parentShas)==null?void 0:pe[0])!=null?Se:null}}),...((nn=h[d])!=null?nn:[]).map(T=>jr(d,T)),...c.map(T=>jr(T.branch||"",T)),...u.map(T=>jr(T.branch||"",T))]),H=new Map,X=new Map;for(const T of i){if(T.name===d)continue;const q=Yx(T.name,y,h);X.set(T.name,q);const pe=Ux(q.map(Lt=>jr(T.name,Lt)));if(pe.length>0){H.set(T.name,pe);continue}const Se=(li=(ps=(To=T.presidesFromSha)!=null?To:T.divergedFromSha)!=null?ps:T.createdFromSha)!=null?li:null;if(!Se)continue;const qe=(ci=c.find(Lt=>Yo(Lt.fullSha,Se)||Yo(Lt.sha,Se)))==null?void 0:ci.date,at=qe?null:(Ao=Object.values(h).flat().find(Lt=>Yo(Lt.fullSha,Se)||Yo(Lt.sha,Se)))==null?void 0:Ao.date,Ut={id:`BRANCH_HEAD:${T.name}:${Se}`,branchName:T.name,message:`Branch ${T.name}`,author:T.lastCommitAuthor,date:(_s=(xs=(Ko=qe!=null?qe:at)!=null?Ko:T.createdDate)!=null?xs:T.divergedFromDate)!=null?_s:T.lastCommitDate,parentSha:Se,kind:"branch-created"};H.set(T.name,[Ut])}const U=new Set(Y.map(T=>T.id)),Z=(Rn=[...Y].sort((T,q)=>Ai(T.date)-Ai(q.date)||T.id.localeCompare(q.id))[0])!=null?Rn:null,le=new Map(Array.from(H.entries()).map(([T,q])=>[T,new Set(q.map(pe=>pe.id))])),oe=new Map;for(const T of i){if(T.name===d)continue;const q=pw(T.name,h,y);if(q){oe.set(T.name,q);continue}const pe=(Bs=H.get(T.name))==null?void 0:Bs[0];if(pe){const Se=(xi=(as=(Pn=T.presidesFromSha)!=null?Pn:T.divergedFromSha)!=null?as:T.createdFromSha)!=null?xi:null;oe.set(T.name,{...pe,parentSha:Se})}}const je=new Map;for(const[T,q]of H.entries()){const pe=q.find(Se=>Se.kind!=="branch-created");pe&&je.set(T,pe)}const ze=new Map;for(const[T,q]of H.entries()){const pe=q.filter(at=>at.kind!=="branch-created"),qe=(zo=(pe.length>0?pe:q)[0])!=null?zo:null;qe&&ze.set(T,qe)}const J=new Map;for(const T of i){if(T.name===d)continue;const q=(Xi=ze.get(T.name))!=null?Xi:null,pe=(ui=(Gt=oe.get(T.name))==null?void 0:Gt.parentSha)!=null?ui:null,Se=($o=(Bi=(qn=T.presidesFromSha)!=null?qn:T.divergedFromSha)!=null?Bi:T.createdFromSha)!=null?$o:null,qe=(Io=q==null?void 0:q.parentSha)!=null?Io:null,at=(oo=qe!=null?qe:pe)!=null?oo:Se;at&&J.set(T.name,at)}const ue=T=>{var at,Ut,Lt,At,Ke,Jt,sn,En;const q=(at=p[T.name])!=null?at:null;if(!(q&&q!==d&&q!==T.name&&L.has(q)))return q!=null?q:"";const Se=(At=(Lt=(Ut=J.get(T.name))!=null?Ut:T.presidesFromSha)!=null?Lt:T.divergedFromSha)!=null?At:T.createdFromSha;if(Se&&((Ke=le.get(q))!=null?Ke:new Set).has(Se))return q;const qe=(sn=(Jt=oe.get(T.name))==null?void 0:Jt.parentSha)!=null?sn:null;return qe&&((En=le.get(q))!=null?En:new Set).has(qe),q},I=T=>{var qe,at,Ut,Lt,At,Ke,Jt,sn;const q=oe.get(T.name),pe=(At=(Lt=(Ut=(at=(qe=J.get(T.name))!=null?qe:q==null?void 0:q.parentSha)!=null?at:T.presidesFromSha)!=null?Ut:T.divergedFromSha)!=null?Lt:T.createdFromSha)!=null?At:null;if(!T.parentBranch&&!pe||!pe)return null;if(ue(T)===d){if(U.has(pe))return pe;const En=(Ke=q==null?void 0:q.parentSha)!=null?Ke:null;return En&&U.has(En)?En:(sn=(Jt=Z==null?void 0:Z.id)!=null?Jt:En)!=null?sn:pe}return U.has(pe),pe},se=T=>I(T),W=new Map;for(const T of[...c,...u]){const q={...jr(T.branch||"",T),visualId:`${T.branch||""}:${T.fullSha}`};W.set(T.fullSha,q)}const K=new Map(W),ge=T=>{K.has(T.id)||K.set(T.id,T)},R=new Map(Array.from(H.entries()).map(([T,q])=>[T,new Set(q.map(pe=>pe.id))])),re=new Set;for(const T of R.values())for(const q of T)re.add(q);for(const T of Y)re.has(T.id)||ge({...T,visualId:`${T.branchName}:${T.id}`});for(const[T,q]of H.entries())for(const pe of q)ge({...pe,visualId:`${T}:${pe.id}`});const he=[...Array.from(K.values()).map(T=>({...T,visualId:`${T.branchName}:${T.id}`}))].sort((T,q)=>Ai(T.date)-Ai(q.date)||T.id.localeCompare(q.id)),Te=new Map;for(const T of he){const q=(Qo=Te.get(T.branchName))!=null?Qo:new Set;q.add(T.id),Te.set(T.branchName,q)}const $e=(T,q)=>{const pe=Te.get(T);if(!pe||pe.size===0)return!1;for(const Se of pe)if(Yo(Se,q))return!0;return!1},Be=(T,q)=>{const pe=Array.from(Te.entries()).filter(([Se])=>Se!==q).filter(([,Se])=>Array.from(Se).some(qe=>Yo(qe,T))).map(([Se])=>Se);return pe.length>0?pe.sort()[0]:T.slice(0,7)},tt=[],_t=new Map,It=new Map;for(const T of a){const q=T.fullSha,pe=T.targetBranch,Se=T.targetCommitSha;if(!q||!pe||!Se||!$e(pe,Se))continue;const qe=((io=T.parentShas)!=null?io:[]).slice(1).filter(Ut=>!!Ut&&!Yo(Ut,q));if(qe.length===0)continue;const at=(Sn=It.get(q))!=null?Sn:new Set;for(const Ut of qe){at.add(Ut);const Lt=Be(Ut,pe);tt.push({sourceCommitSha:Ut,sourceBranchName:Lt,mergeCommitSha:q,targetCommitSha:Se,targetBranchName:pe});const At=(mo=_t.get(Lt))!=null?mo:new Map,Ke=(rs=At.get(Ut))!=null?rs:new Set;Ke.add(pe),At.set(Ut,Ke),_t.set(Lt,At)}It.set(q,at)}const vt=new Map;for(const T of i){if(T.name===d)continue;const q=I(T);q&&vt.set(T.name,q)}const yt=new Map;for(const T of he){const q=It.get(T.id);if(q&&q.size>0){const qe=(bs=yt.get(T.id))!=null?bs:new Set;for(const at of q)qe.add(at);yt.set(T.id,qe)}if(T.branchName===d)continue;const pe=vt.get(T.branchName);if(!pe||pe===T.id)continue;const Se=(po=yt.get(T.id))!=null?po:new Set;Se.add(pe),yt.set(T.id,Se)}const Ze=gy(he,N,yt),Yt=new Map;for(const T of he){const q=(rn=Yt.get(T.branchName))!=null?rn:[];q.push(T),Yt.set(T.branchName,q)}const Qe=new Map,pt=new Map,ke=new Map,ne=new Map,Me=new Map,Xe=(T,q)=>{var at,Ut,Lt;if(q.length===0)return[];const pe=[...q].sort((At,Ke)=>{var En,Hn;const Jt=(En=Ze.get(At.visualId))!=null?En:Number.MAX_SAFE_INTEGER,sn=(Hn=Ze.get(Ke.visualId))!=null?Hn:Number.MAX_SAFE_INTEGER;return Jt!==sn?Jt-sn:Ai(At.date)-Ai(Ke.date)||At.id.localeCompare(Ke.id)}),Se=new Map;for(const At of pe){const Ke=((at=At.clusterKey)==null?void 0:at.trim())||`cluster:${T}:${At.id}`,Jt=(Ut=Se.get(Ke))!=null?Ut:[];Jt.push(At),Se.set(Ke,Jt)}const qe=[];for(const[At,Ke]of Se.entries()){if(Ke.length===0)continue;const sn=[...Ke].sort((Hn,on)=>{var Jo,ei;const ls=(Jo=Ze.get(Hn.visualId))!=null?Jo:Number.MIN_SAFE_INTEGER,Ws=(ei=Ze.get(on.visualId))!=null?ei:Number.MIN_SAFE_INTEGER;return ls!==Ws?Ws-ls:Ai(on.date)-Ai(Hn.date)||on.id.localeCompare(Hn.id)})[0].visualId,En={branchName:T,key:At,commitIds:Ke.map(Hn=>Hn.visualId),leadId:sn,count:Ke.length};qe.push(En),ne.set(At,sn),Me.set(At,Ke.length);for(const Hn of En.commitIds){pt.set(Hn,At);const on=Hn.split(":").slice(1).join(":"),ls=(Lt=ke.get(on))!=null?Lt:[];ls.includes(At)||ls.push(At),ke.set(on,ls)}}return qe};for(const[T,q]of Yt.entries())Qe.set(T,Xe(T,q));const Ye=new Map;for(const T of he)Ye.set(T.id,T);const ct=T=>{if(!T)return"none";const q=Array.from(Ye.values()).find(pe=>Yo(pe.id,T)||Yo(pe.id.slice(0,7),T)||Yo(T,pe.id));return q?`${q.id.slice(0,7)} ${q.branchName}`:T.slice(0,7)},Pe=b?["Lane rows (expected):",...[...n].sort((T,q)=>T.column-q.column||T.name.localeCompare(q.name)).map(T=>{var q;return`  row=${T.column} branch=${T.name} parent=${(q=T.parentName)!=null?q:"none"}`}),"",...i.flatMap(T=>{var Ut,Lt,At,Ke,Jt,sn,En,Hn;const q=(Ut=h[T.name])!=null?Ut:[],pe=[...(Lt=X.get(T.name))!=null?Lt:[]].reverse(),Se=new Set(((At=H.get(T.name))!=null?At:[]).map(on=>on.id)),qe=(Jt=(Ke=pe.find(on=>!on.parentSha||!pe.some(ls=>{var Ws;return Yo(ls.fullSha,(Ws=on.parentSha)!=null?Ws:"")})))!=null?Ke:pe[0])!=null?Jt:null,at=(En=(sn=qe==null?void 0:qe.parentSha)!=null?sn:J.get(T.name))!=null?En:null;return[`Branch ${T.name}`,`  ahead=${(Hn=y[T.name])!=null?Hn:0} previews=${pe.length} rendered=${Se.size}`,`  db parent commit=${ct(at)}`,`  db child commit=${qe?`${qe.fullSha.slice(0,7)} ${T.name}`:"none"}`,...pe.map(on=>{const ls=Se.has(on.fullSha)?"visible":"hidden",Ws=Se.has(on.fullSha)?"kept by render set":"dropped by render set";return`  ${ls} ${on.fullSha.slice(0,7)} ${on.message} [${Ws}]`}),q.length===0?"  no preview data":null].filter(on=>on!=null)})]:[],ut=b?Array.from(H.entries()).map(([T,q])=>[`Branch debug ${T}`,...q.map(pe=>`  ${pe.id.slice(0,7)} ${pe.message}`)].join(`
`)):[],dt=Ze,bt=Em/Fu,zt=20/Fu,rt=$?gs+bt+zt:Yu+bt+zt,V=$?Yu+bt+zt:ic,Q=Math.max(0,...he.map(T=>{var q;return(q=dt.get(T.visualId))!=null?q:1})),fe=he.map(T=>{var qe,at;const q=N.get(T.branchName),pe=(qe=dt.get(T.visualId))!=null?qe:1,Se=(at=q==null?void 0:q.column)!=null?at:0;return $?{commit:T,row:pe,column:Se,x:xr+(pe-1)*rt,y:yr+Se*V}:{commit:T,row:pe,column:Se,x:xr+Se*ic,y:yr+(Q-pe)*rt}}),be=T=>{var pe;const q=(pe=M[T.commit.visualId])!=null?pe:M[T.commit.id];return q?{...T,x:q.x,y:q.y}:T},Je=fe.map(be),Ge=w.trim().toLowerCase(),De=Ge?Je.filter(T=>{const q=T.commit.id.toLowerCase(),pe=T.commit.id.slice(0,7).toLowerCase(),Se=T.commit.message.toLowerCase(),qe=T.commit.branchName.toLowerCase();return q.includes(Ge)||pe.includes(Ge)||Se.includes(Ge)||qe.includes(Ge)}):Je,St=S&&(Us=Je.find(T=>T.commit.id===S))!=null?Us:null,He=new Set(De.map(T=>T.commit.id)),Ft=(_o=j==null?void 0:j.headSha)!=null?_o:null,Ct=(()=>{var q,pe;const T=(q=j==null?void 0:j.branchName)!=null?q:null;return!Ft||!T?null:(pe=pt.get(`${T}:${Ft}`))!=null?pe:null})(),nt=new Set;for(const T of Qe.values())for(const q of T)q.count>1&&q.key!==Ct&&nt.add(q.key);const Ot=[...he].filter(T=>{var at;const q=pt.get(T.visualId);if(!q)return!0;const pe=ne.get(q),Se=(at=Me.get(q))!=null?at:1,qe=g.has(q)||!nt.has(q)&&!x.has(q);return Se<=1||qe||pe===T.visualId}),Pt=gy(Ot,N,yt),Kt=Em/Fu,st=20/Fu,et=$?gs+Kt+st:Yu+Kt+st,Dt=$?Yu+Kt+st:ic,wt=Math.max(0,...Ot.map(T=>{var q;return(q=Pt.get(T.visualId))!=null?q:1})),Nt=Ot.map(T=>{var qe,at;const q=N.get(T.branchName),pe=(qe=Pt.get(T.visualId))!=null?qe:1,Se=(at=q==null?void 0:q.column)!=null?at:0;return be($?{commit:T,row:pe,column:Se,x:xr+(pe-1)*et,y:yr+Se*Dt}:{commit:T,row:pe,column:Se,x:xr+Se*ic,y:yr+(wt-pe)*et})}),ft=new Map;for(const T of Nt){const q=(Vs=ft.get(T.commit.id))!=null?Vs:[];q.push(T),ft.set(T.commit.id,q)}const Bt=new Map;for(const T of Nt){const q=pt.get(T.commit.visualId);if(!q)continue;const pe=Bt.get(q);(!pe||($?T.x>pe.x:T.y<pe.y))&&Bt.set(q,T)}const vn=(T,q)=>`${T.toFixed(1)} ${q.toFixed(1)}`,wn=Math.max(0,...Nt.map(T=>T.row)),_n=Math.max(0,...n.map(T=>T.column)),fs=Math.max(0,...Nt.map(T=>T.x+gs)),Yn=Math.max(0,...Nt.map(T=>T.y+bl+$s)),An=Math.max($?xr*2+Math.max(0,wn-1)*et+gs+Yh+st:xr*2+(_n+1)*ic,fs+xr),kn=Math.max($?yr*2+_n*Dt+$s+Yh+st:yr*2+Math.max(0,wn-1)*et+$s+Yh+st,Yn+yr),In=[],un=new Map(i.map(T=>{var pe,Se;const q=new Date((Se=(pe=T.createdDate)!=null?pe:T.divergedFromDate)!=null?Se:T.lastCommitDate).getTime();return[T.name,Number.isFinite(q)?q:0]})),Dn=T=>{var q;return(q=un.get(T))!=null?q:0},ot=[],dn=T=>{b&&ot.push(T)},no=new Set,Eo=new Map,hs=(T,q)=>{var Se;const pe=(Se=Eo.get(T))!=null?Se:[];pe.includes(q)||pe.push(q),Eo.set(T,pe)},Es=new Set,Go=new Set,ks=new Set,uo=(T,q)=>{var qe,at;if(!T)return null;const pe=Wu(ft,T,q);if(pe)return pe;const Se=(qe=pt.get(`${q!=null?q:d}:${T}`))!=null?qe:pt.get(T);return Se&&(at=Bt.get(Se))!=null?at:null},so=new Set;for(const T of i){const q=se(T);q&&Go.add(q);const pe=(Wn=J.get(T.name))!=null?Wn:null;pe&&ks.add(pe)}const fo=T=>{var qe;const q=uo(T.id,T.branchName);if(q)return q;const pe=pt.get(T.visualId);if(!pe)return null;const Se=ne.get(pe);return Se&&(qe=Nt.find(at=>at.commit.id===Se))!=null?qe:null},jn=(T,q)=>T?Wu(ft,T,q):null,qo=(T,q)=>$?{x:T.x-Ui,y:T.y+$s/2,face:"left"}:{x:T.x+gs/2,y:T.y+$s+Ui,face:"bottom"},Ps=T=>$?{x:T.x-Ui,y:T.y+$s/2,face:"left"}:{x:T.x+gs/2,y:T.y+$s+Ui,face:"bottom"},Ns=(T,q)=>T.column!==q.column?!0:$?T.commit.branchName!==q.commit.branchName:!1,ms=(T,q,pe)=>{if(!$)return{x:q?T.x+gs:T.x+gs/2,y:q?T.y+$s/2:T.y,face:q?"right":"top"};if(!q)return{x:T.x+gs+Ui,y:T.y+$s/2,face:"right"};if(pe&&pe.column===T.column&&pe.commit.branchName!==T.commit.branchName){if(pe.x>T.x)return{x:T.x+gs/2,y:T.y+$s+Ui,face:"bottom"};if(pe.x<T.x)return{x:T.x+gs/2,y:T.y-Ui,face:"top"}}return!pe||pe.column===T.column?{x:T.x+gs+Ui,y:T.y+$s/2,face:"right"}:pe.column>T.column?{x:T.x+gs/2,y:T.y+$s+Ui,face:"bottom"}:{x:T.x+gs/2,y:T.y-Ui,face:"top"}},Oo=T=>$?{x:T.x+gs/2,y:T.y+$s+Ui,face:"bottom"}:{x:T.x+gs,y:T.y+$s/2,face:"right"},ho=(T,q)=>Wu(ft,T,q),Rs=(T,q)=>jn(T,q),Hs=[],Nn=new Set;for(const T of tt){const q=(Zo=uo(T.targetCommitSha,T.targetBranchName))!=null?Zo:null;if(!q){dn({id:`merge:${T.mergeCommitSha}:${T.sourceCommitSha}:target`,kind:"merge",parent:T.sourceCommitSha,child:T.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const pe=T.sourceCommitSha,Se=`merge:${T.mergeCommitSha}:${pe!=null?pe:"unknown"}`;if(!pe||Yo(pe,T.targetCommitSha)){dn({id:Se,kind:"merge",parent:pe!=null?pe:"unknown",child:T.targetCommitSha,rendered:!1,reason:pe?"merged parent equals merge target sha":"missing merged parent sha"});continue}const qe=(ao=Wu(ft,pe))!=null?ao:null;if(!qe){dn({id:Se,kind:"merge",parent:pe,child:T.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(qe.commit.id===q.commit.id){dn({id:Se,kind:"merge",parent:qe.commit.id,child:q.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let at,Ut,Lt;const At=$?q.x+gs/2:q.x+gs-Xh,Ke=$?q.y+$s+Xh:q.y+$s/2,Jt=$?"bottom":"right";$?(at=qe.x+gs+Xh,Ut=qe.y+$s/2,Lt="right"):(at=qe.x+gs/2,Ut=qe.y,Lt="top");const sn=`${at.toFixed(2)}:${Ut.toFixed(2)}:${At.toFixed(2)}:${Ke.toFixed(2)}`;if(Nn.has(sn)){dn({id:Se,kind:"merge",parent:qe.commit.id,child:q.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Nn.add(sn),Hs.push({id:Se,fromX:at,fromY:Ut,toX:At,toY:Ke,fromFace:Lt,toFace:Jt,zIndex:Dn(qe.commit.branchName)}),dn({id:Se,kind:"merge",parent:qe.commit.id,child:q.commit.id,rendered:!0,reason:`merge connector rendered to ${T.targetBranchName}`})}const is=new Set;for(const T of i){if(T.name===d)continue;const q=oe.get(T.name);if(!q)continue;const pe=ue(T),Se=ho((wo=J.get(T.name))!=null?wo:"",pe),qe=(Ls=je.get(T.name))!=null?Ls:q,at=(Po=Rs(qe.id,T.name))!=null?Po:fo(qe);if(!Se||!at||Se.commit.id===at.commit.id){const Jt=pt.get(`${T.name}:${q.id}`),sn=pt.get(`${T.name}:${qe.id}`),En=!!Jt&&!nt.has(Jt),Hn=!!sn&&!nt.has(sn),on=!!Jt&&!g.has(Jt)&&(En?x.has(Jt):!0),ls=!!sn&&!g.has(sn)&&(Hn?x.has(sn):!0);!Se&&!on&&hs((Do=at==null?void 0:at.commit.id)!=null?Do:q.id,"Missing parent node"),!at&&!ls&&hs(q.id,"Missing child node"),dn({id:`branch:${(Qt=Se==null?void 0:Se.commit.id)!=null?Qt:"null"}->${(Ys=at==null?void 0:at.commit.id)!=null?Ys:"null"}`,kind:"branch",parent:(Ts=Se==null?void 0:Se.commit.id)!=null?Ts:"null",child:(As=at==null?void 0:at.commit.id)!=null?As:"null",rendered:!1,reason:Se?at?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Ut=`branch:${Se.commit.id}->${at.commit.id}`;if(so.has(Ut)){dn({id:Ut,kind:"branch",parent:Se.commit.id,child:at.commit.id,rendered:!1,reason:"duplicate connector key"});continue}so.add(Ut),Es.add(Se.commit.id);const Lt=Ns(Se,at);Se.commit.branchName!==at.commit.branchName&&is.add(Se.commit.id);const At=Oo(Se),Ke=Ps(at);In.push({id:Ut,fromX:At.x,fromY:At.y,toX:Ke.x,toY:Ke.y,fromFace:At.face,toFace:Ke.face,zIndex:Dn(at.commit.branchName)}),dn({id:Ut,kind:"branch",parent:Se.commit.id,child:at.commit.id,rendered:!0,reason:Lt?"branch connector rendered":$?"horizontal connector rendered":"vertical connector rendered"})}for(const T of he){const q=fo(T);if(!q)continue;const pe=(go=T.parentSha)!=null?go:null;if(!pe)continue;const Se=(Ho=uo(pe,T.branchName))!=null?Ho:ho(pe,T.branchName);if(!Se){const At=(yo=pt.get(`${T.branchName}:${pe}`))!=null?yo:pt.get(pe),Ke=!!At&&!nt.has(At);!!At&&!g.has(At)&&(Ke?x.has(At):!0)||hs(T.id,"Missing parent node"),dn({id:`${T.visualId}->${pe}`,kind:"ancestry",parent:pe,child:T.id,rendered:!1,reason:"missing parent node"});continue}if(q.commit.id===Se.commit.id){hs(q.commit.id,"Parent and child resolve to the same node"),dn({id:`${Se.commit.id}->${q.commit.id}`,kind:"ancestry",parent:Se.commit.id,child:q.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const qe=`${T.branchName}:${(js=Se.commit.visualId)!=null?js:Se.commit.id}->${q.commit.visualId}`;if(so.has(qe)){hs(Se.commit.id,"Duplicate connector key"),hs(q.commit.id,"Duplicate connector key"),dn({id:qe,kind:"ancestry",parent:Se.commit.id,child:q.commit.id,rendered:!1,reason:"duplicate connector key"});continue}so.add(qe),Es.add(Se.commit.id);const at=Ns(Se,q),Ut=ms(Se,at,q),Lt=qo(q);In.push({id:qe,fromX:Ut.x,fromY:Ut.y,toX:Lt.x,toY:Lt.y,fromFace:Ut.face,toFace:Lt.face,zIndex:Dn(q.commit.branchName)}),dn({id:qe,kind:"ancestry",parent:Se.commit.id,child:q.commit.id,rendered:!0,reason:at?"ancestry connector rendered":$?"horizontal ancestry rendered":"vertical ancestry rendered"}),no.add(Se.commit.id),no.add(q.commit.id)}const Mn=new Map;for(const T of Nt){const q=(xo=Mn.get(T.commit.branchName))!=null?xo:[];q.push(T),Mn.set(T.commit.branchName,q)}for(const[T,q]of Mn.entries()){if(q.length<2)continue;const pe=[...q].sort((Se,qe)=>{var at,Ut,Lt,At,Ke,Jt,sn,En;return Se.row!==qe.row?Se.row-qe.row:Ai((Ut=(at=Se==null?void 0:Se.commit)==null?void 0:at.date)!=null?Ut:null)-Ai((At=(Lt=qe==null?void 0:qe.commit)==null?void 0:Lt.date)!=null?At:null)||((Jt=(Ke=Se==null?void 0:Se.commit)==null?void 0:Ke.id)!=null?Jt:"").localeCompare((En=(sn=qe==null?void 0:qe.commit)==null?void 0:sn.id)!=null?En:"")});for(let Se=1;Se<pe.length;Se+=1){const qe=pe[Se-1],at=pe[Se];if(qe.commit.id===at.commit.id)continue;const Ut=(qs=at.commit.parentSha)!=null?qs:null;if(Ut&&ho(Ut,at.commit.branchName))continue;const Lt=`chain:${T}:${qe.commit.id}->${at.commit.id}`;if(so.has(Lt)){hs(qe.commit.id,"Duplicate branch chain connector"),hs(at.commit.id,"Duplicate branch chain connector"),dn({id:Lt,kind:"ancestry",parent:qe.commit.id,child:at.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}so.add(Lt);const At=Ns(qe,at),Ke=ms(qe,At,at),Jt=qo(at);In.push({id:Lt,fromX:Ke.x,fromY:Ke.y,toX:Jt.x,toY:Jt.y,fromFace:Ke.face,toFace:Jt.face,zIndex:Dn(at.commit.branchName)}),dn({id:Lt,kind:"ancestry",parent:qe.commit.id,child:at.commit.id,rendered:!0,reason:"branch chain rendered"}),no.add(qe.commit.id),no.add(at.commit.id)}}return{branchByName:L,laneByName:N,mainCommits:Y,branchCommitsByLane:H,branchPreviewSets:X,allCommits:he,clustersByBranch:Qe,clusterKeyByCommitId:pt,clusterKeyBySha:ke,leadByClusterKey:ne,clusterCounts:Me,debugRows:Pe,branchDebugRows:ut,nodes:fe,normalizedSearchQuery:Ge,matchingNodes:De,matchingNodeIds:He,focusedNode:St,checkedOutClusterKey:Ct,defaultCollapsedClumps:nt,visibleCommitsList:Ot,renderNodes:Nt,visibleNodesBySha:ft,visibleNodeByClusterKey:Bt,pointFormatter:vn,contentWidth:An,contentHeight:kn,connectors:In,mergeConnectors:Hs,connectorDecisions:ot,nodeWarnings:Eo,connectorParentShas:Es,branchStartShas:Go,branchOffNodeShas:ks,crossBranchOutgoingShas:is,commitIdsWithRenderedAncestry:no,branchBaseCommitByName:oe,firstBranchCommitByName:ze,mergeDestinations:tt,mergeTargetBranchesBySourceBranchAndCommitSha:_t}}const bw=8,vw=44,yy=120,xy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Wx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<bw){const H=d/g,X=h/g,U=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+H*U,c1y:n+X*U,c2x:i-H*U,c2y:a-X*U}}if(Math.min(p,y)<vw){const H=d/g,X=h/g,U=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+H*U,c1y:n+X*U,c2x:i-H*U,c2y:a-X*U}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),j=Math.min(120,y*.32),k=Math.min(160,y*.42),M=xy(c),$=xy(u);if(!(M==="v"&&$==="h"||M==="v"&&$==null&&y>=p||M==null&&$==="h"&&y>=p||M==="v"&&$==="v"||M==null&&$==null&&y>p)){const H=i,X=n;return{kind:"elbowH",cx:H,cy:X,s1c1x:t+x*w,s1c1y:n,s1c2x:H-x*S,s1c2y:X,s2c1x:H,s2c1y:X+b*j,s2c2x:i,s2c2y:a-b*k}}const N=t,Y=a;return{kind:"elbowV",cx:N,cy:Y,s1c1x:t,s1c1y:n+b*k,s1c2x:N,s1c2y:Y-b*j,s2c1x:N+x*w,s2c1y:Y,s2c2x:i-x*S,s2c2y:a}}function ww(t,n,i,a,c,u){const d=Wx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function by(t,n,i,a,c,u,d){const h=Wx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,j=a>=n?1:-1,k=h.cx-S*w,M=h.cy+j*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(k-S*w*.5,h.cy)} ${c(k,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,M)}`,`C ${c(h.cx,M+j*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(yy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const fp=2.25,ac=fp/2,Sw=.45,Cw=.01,aa=fp,kd=10,kw=-100,vy=0,wy=.9,jw=.9,Sy=.001,Gh=.001,Mw=12,Ew=gs+48;function On(...t){return t.filter(Boolean).join(" ")}function Tw(t){return Math.max(Sw,Math.min(fp,t))}function Aw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Fx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Dw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Nw(t,n,i,a,c,u,d){const h=ww(t,n,i,a,u,d),p=Dw(h);return Fx(c,p)}function Xx(t,n){return{left:t.x,top:t.y+n,right:t.x+gs,bottom:t.y+bl+$s+4}}function Rw(t,n){const i=Ew,a=Math.max(120,Math.ceil(bl+$s+4-n+24)),c=new Map;for(const u of t){const d=Xx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=y;w<=g;w++){const S=`${b},${w}`;let j=c.get(S);j||(j=new Set,c.set(S,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Bw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=y;S<=g;S++){const j=d.get(`${w},${S}`);if(j)for(const k of j)x.add(k)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const j=Xx(S,a);Fx(n,j)&&b.add(w)}return b}function Cy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/aa;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Lw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function ky(t,n,i){const a=n/aa;return!Number.isFinite(a)||a<=0?t:Lw(t,100/a)}function jy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function yi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Tm(t,n){if(n){const i=jy(n),a=jy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Tm(t,n)}function Ow(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function zw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:y,onPushCurrentBranch:g,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:w,selectedPushTargets:S,selectedPushLabel:j,canPushCurrentBranch:k,pushCurrentBranchLabel:M,pushableRemoteBranchCount:$,selectedCommitTargetOption:L,mergeInProgress:N,setMergeTargetCommitSha:Y,worktrees:H,currentRepoPath:X,worktreeMenuOpen:U,setWorktreeMenuOpen:Z,onSwitchToWorktree:le,onRemoveWorktree:oe,removeWorktreeInProgress:je,setCommitDialogOpen:ze,setNewBranchDialogOpen:J}){var It;const ue=t.length>0,I=t.length>0&&t.every(vt=>vt==="WORKING_TREE"),[se,W]=_.useState(!1),K=_.useRef(null),ge=_.useRef(null),R="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",re=!!p&&d&&!i&&!n&&(!ue||I),ie=!!g&&k&&!ue&&!u,he=!!b&&S.length>0&&!u,Te=!!x&&$>=2&&!ue&&!u,$e=!!y&&!c&&!ue&&!a,Be="Push Selected...",tt=re?{label:n?"Committing...":"Commit",run:()=>ze(!0),disabled:!re}:ie?{label:u?"Pushing...":M,run:()=>void(g==null?void 0:g()),disabled:!ie}:he?{label:Be,run:()=>void(b==null?void 0:b(S.map(vt=>({branchName:vt.branchName,targetSha:vt.targetSha})))),disabled:!he}:null;return _.useEffect(()=>{const vt=yt=>{var Yt,Qe;const Ze=yt.target;Ze&&((Yt=K.current)!=null&&Yt.contains(Ze)||(Qe=ge.current)!=null&&Qe.contains(Ze)||(W(!1),Z(!1)))};return window.addEventListener("pointerdown",vt),()=>window.removeEventListener("pointerdown",vt)},[Z]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:K,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{tt&&tt.run()},disabled:!tt||tt.disabled,className:On(R,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:(It=tt==null?void 0:tt.label)!=null?It:"Commit"}),l.jsx("button",{type:"button",onClick:()=>W(vt=>!vt),disabled:!tt,"aria-haspopup":"menu","aria-expanded":se,className:On(R,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Hx,{className:"h-3.5 w-3.5 shrink-0"})}),se&&tt?l.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsx("button",{type:"button",onClick:()=>{W(!1),ze(!0)},disabled:!re,className:On(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!re&&"text-muted-foreground opacity-50"),children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>{W(!1),g==null||g()},disabled:!ie,className:On(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!ie&&"text-muted-foreground opacity-50"),children:u?"Pushing...":M}),l.jsx("button",{type:"button",onClick:()=>{W(!1),b==null||b(S.map(vt=>({branchName:vt.branchName,targetSha:vt.targetSha})))},disabled:!he,className:On(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!he&&"text-muted-foreground opacity-50"),title:j,children:Be}),l.jsx("button",{type:"button",onClick:()=>{W(!1),x==null||x()},disabled:!Te,className:On(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Te&&"text-muted-foreground opacity-50"),children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>{W(!1),y==null||y()},disabled:!$e,className:On(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!$e&&"text-muted-foreground opacity-50"),children:a?"Stashing...":"Stash"})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsx("button",{type:"button",onClick:()=>J(!0),disabled:h,className:On(R,"pointer-events-auto relative z-10 bg-background"),children:h?"Creating...":"New Branch"})}),t.length>1&&L.options.length>0&&L.targetBranch&&w?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),L.options.map(vt=>{const yt=vt.targetBranch===L.targetBranch;return l.jsx("button",{type:"button",onClick:()=>Y(vt.targetSha),className:On("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",yt?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:vt.targetBranch},`merge-${vt.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void w(L.sources,L.targetBranch),disabled:L.sources.length===0||N,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:N?"Merging...":"Confirm"})]}):null,H.length>0&&(le||oe)?l.jsxs("div",{ref:ge,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>Z(vt=>!vt),className:R,children:[H.length," ",H.length===1?"Worktree":"Worktrees"]}),U?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:H.map(vt=>{var yt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:vt.path,children:Tm(vt,X)?Ow(vt.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(yt=vt.branchName)!=null?yt:"detached"," • ",vt.headSha.slice(0,7)]})]}),Tm(vt,X)?l.jsxs("div",{className:"flex items-center gap-1",children:[le?l.jsx("button",{type:"button",onClick:()=>{Z(!1),le(vt.path)},disabled:je||vt.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,oe?l.jsx("button",{type:"button",onClick:()=>void oe(vt.path,vt.isPrunable),disabled:je,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:je?"...":"Remove"}):null]}):null]},vt.path)})}):null]}):null]})})}function $w({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!t);return _.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Iw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,normalizedSearchQuery:S,matchingNodeIds:j,focusedNode:k,renderNodes:M,shouldRenderNode:$,manuallyOpenedClumps:L,manuallyClosedClumps:N,defaultCollapsedClumps:Y,leadByClusterKey:H,clusterKeyByCommitId:X,clusterCounts:U,commitIdsWithRenderedAncestry:Z,nodeWarnings:le,connectorParentShas:oe,branchStartShas:je,branchOffNodeShas:ze,crossBranchOutgoingShas:J,branchBaseCommitByName:ue,branchStartAccentClass:I,connectorParentAccentClass:se,commitCornerRadiusPx:W,lineStrokeWidth:K,pointFormatter:ge,connectors:R,mergeConnectors:re,cullConnectorPath:ie,flushCameraReactTick:he,setManuallyOpenedClumps:Te,setManuallyClosedClumps:$e,onCommitCardClick:Be,unpushedCommitShasSetByBranch:tt,checkedOutHeadSha:_t}){const[It,vt]=_.useState(new Set),yt=_.useRef(null);_.useEffect(()=>{const ke=new Set;U.forEach((Xe,Ye)=>{(L.has(Ye)||!Y.has(Ye)&&!N.has(Ye))&&ke.add(Ye)});const ne=yt.current;if(ne==null){yt.current=ke;return}const Me=[];if(ke.forEach(Xe=>{ne.has(Xe)||Me.push(Xe)}),Me.length>0){vt(Ye=>{const ct=new Set(Ye);return Me.forEach(Pe=>ct.add(Pe)),ct});const Xe=window.setTimeout(()=>{vt(Ye=>{const ct=new Set(Ye);return Me.forEach(Pe=>ct.delete(Pe)),ct})},260);return yt.current=ke,()=>{window.clearTimeout(Xe)}}yt.current=ke},[U,Y,N,L]);const Ze=(ke,ne)=>{const Me=ne.zIndex-ke.zIndex;if(Me!==0)return Me;const Xe=Math.min(ke.fromY,ke.toY),Ye=Math.min(ne.fromY,ne.toY),ct=Xe-Ye;return ct!==0?ct:ke.id.localeCompare(ne.id)},Yt=re.filter(ke=>ie(ke)).sort(Ze),Qe=R.filter(ke=>ie(ke)).sort(Ze),pt=M.filter(ke=>$(ke));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[pt.map(ke=>{var Ct,nt,Ot,Pt,Kt,st;const ne=X.get(ke.commit.visualId),Me=ne?L.has(ne)||!Y.has(ne)&&!N.has(ne):!1,Xe=ne?H.get(ne)===ke.commit.visualId:!1,Ye=ne!=null&&Me&&!Xe&&It.has(ne),ct=ne&&(Ct=U.get(ne))!=null?Ct:1,Pe=Z.has(ke.commit.id),ut=(nt=le.get(ke.commit.id))!=null?nt:[],dt=ut.length>0&&!Pe,bt=w.includes(ke.commit.id),zt=ke.commit.id==="WORKING_TREE"||ke.commit.kind==="uncommitted",rt=ke.commit.kind==="stash"||ke.commit.id.startsWith("STASH:"),V=/^STASH:(\d+)$/.exec(ke.commit.id),Q=V?`Stash:${V[1]}`:null,fe=rt?ke.commit.message.trim()&&ke.commit.message.trim()!=="git-visualizer"?ke.commit.message:"Stashed changes":ke.commit.message,be=ke.commit.kind==="branch-created"&&ke.commit.id.startsWith("BRANCH_HEAD:"),Je=zt||((Pt=(Ot=tt.get(ke.commit.branchName))==null?void 0:Ot.has(ke.commit.id))!=null?Pt:!1),De=(zt||_t!=null&&ke.commit.id===_t)&&!bt,St=De?"text-[#38BDF2]":bt?"text-[#158EFC]":"text-muted-foreground",He=De?{color:"#38BDF2"}:bt?{color:"#158EFC"}:void 0,Ft=(Kt=He==null?void 0:He.color)!=null?Kt:"#8B8B8B";return l.jsxs($w,{fadeIn:Ye,dataCommitCard:"true",className:On("group absolute z-20 cursor-grab active:cursor-grabbing",S&&!j.has(ke.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&j.has(ke.commit.id)?"scale-[1.01]":"",(k==null?void 0:k.commit.id)===ke.commit.id?"z-30":""),style:{left:ke.x,top:ke.y,width:gs,height:bl+$s+4,overflow:"visible"},onClick:et=>Be(et,ke),onPointerDown:et=>y(et,ke),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:On("min-w-0 h-4 flex-1 text-sm font-medium leading-none",St,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:He,children:rt&&Q?Q:ke.commit.branchName?`${ke.commit.branchName}/${ke.commit.id.slice(0,7)}`:ke.commit.id.slice(0,7)}),Xe&&ct>1?l.jsx("button",{type:"button",onMouseDown:et=>{et.stopPropagation()},onClick:et=>{if(et.stopPropagation(),et.preventDefault(),!ne)return;!Y.has(ne)?(Te(wt=>{if(!wt.has(ne))return wt;const Nt=new Set(wt);return Nt.delete(ne),Nt}),$e(wt=>{const Nt=new Set(wt);return Nt.has(ne)?Nt.delete(ne):Nt.add(ne),Nt})):($e(wt=>{if(!wt.has(ne))return wt;const Nt=new Set(wt);return Nt.delete(ne),Nt}),Te(wt=>{const Nt=new Set(wt);return Nt.has(ne)?Nt.delete(ne):Nt.add(ne),Nt})),he()},className:On("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",St),style:He,children:Me?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${ct}`}):null]})}),l.jsx("div",{className:On("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",De&&!Je&&!rt&&!be?"bg-[#EBF7FE]":bt&&!Je&&!rt&&!be?"bg-[#E5F0FF]":Je||rt||be?"bg-transparent":"bg-[#F5F5F5]",rt||zt||be?"border-dashed":"",ze.has(ke.commit.id)||je.has(ke.commit.id)||J.has(ke.commit.id)?I:oe.has(ke.commit.id)?se:((st=ue.get(ke.commit.branchName))==null?void 0:st.id)===ke.commit.id?"border-amber-500":dt?"border-red-500":"",(S&&j.has(ke.commit.id)&&!d,"")),style:{top:0,borderWidth:(k==null?void 0:k.commit.id)===ke.commit.id?`${rt||zt||be?K*(2/1.5):K}px`:`${rt||zt||be?K*(2/1.5):K}px`,borderColor:(k==null?void 0:k.commit.id)===ke.commit.id?Ft:De?"#38BDF2":bt?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${W}px`,borderBottomRightRadius:`${W}px`,borderBottomLeftRadius:`${W}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:On("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",St,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:He,children:Xe&&Me?fe:Xe&&ct>1?`${fe} +${ct-1}`:fe}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:dt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:ut.join(`
`),children:"Broken ancestry"}):null})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:On("select-text text-sm font-medium",St),"data-selectable-text":"true",style:He,children:["@",ke.commit.author]}),l.jsx("div",{className:On("select-text text-sm font-medium",St),"data-selectable-text":"true",style:He,children:new Date(ke.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},ke.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Yt.map(ke=>{const{fromX:ne,fromY:Me,toX:Xe,toY:Ye}=ke,ct=by(ne,Me,Xe,Ye,ge,ke.fromFace,ke.toFace);return l.jsx("path",{d:ct,fill:"none",stroke:Wh,strokeWidth:K,strokeLinecap:"round",strokeLinejoin:"round"},ke.id)}),Qe.map(ke=>{const{fromX:ne,fromY:Me,toX:Xe,toY:Ye}=ke,ct=by(ne,Me,Xe,Ye,ge,ke.fromFace,ke.toFace);return l.jsx("path",{d:ct,fill:"none",stroke:Wh,strokeWidth:K,strokeLinecap:"round",strokeLinejoin:"round"},ke.id)})]})]})})})}function Pw({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function Hw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:j,onNewBranchCreateModeChange:k,onNewBranchDialogClose:M,onNewBranchConfirm:$,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:N,createBranchFromNodeInProgress:Y}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:H=>H.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:H=>i(H.target.value),onKeyDown:H=>{(H.metaKey||H.ctrlKey)&&H.key==="Enter"&&(H.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:H=>H.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(H=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:H},H))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:M,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:H=>H.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:On("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>k("new-root"),className:On("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:H=>j(H.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:M,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:$,disabled:!w.trim()||Y||S==="from-selected-node"&&!L&&!N,className:On("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:Y?"Creating...":"Create"})]})]})}):null]})}const My="/icon-GitOrientation.svg";function Uw({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>n(i),className:On("window-no-drag inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:On("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${My})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${My})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function Vw({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[20rem] shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(uw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(nw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Hx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function Yw({mapPadHostRef:t,transformLayerRef:n}){const i=_.useRef({x:0,y:0}),a=_.useRef(ac),c=_.useRef({panX:0,panY:0,zoom:ac}),u=_.useRef(null),d=_.useRef(ac),h=_.useRef(null),[p,y]=_.useState(!1),[g,x]=_.useState(ac),[b,w]=_.useState(0),S=_.useRef(null),j=_.useRef(0),k=_.useCallback(()=>{const Z=t.current;if(!Z)return null;const le=Z.getBoundingClientRect(),oe=getComputedStyle(Z),je=Number.parseFloat(oe.borderLeftWidth)||0,ze=Number.parseFloat(oe.borderTopWidth)||0,J=Number.parseFloat(oe.paddingLeft)||kd,ue=Number.parseFloat(oe.paddingTop)||kd;return{x:le.left+je+J,y:le.top+ze+ue}},[t]),M=_.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),_.startTransition(()=>{w(Z=>Z+1)}),j.current=performance.now()},[]),$=_.useCallback((Z,le,oe)=>{const je=c.current;c.current={panX:Z,panY:le,zoom:oe};const ze=n.current;if(ze&&(ze.style.transform=`translate3d(${Z}px, ${le}px, 0) scale(${oe/aa})`),Math.abs(d.current-oe)>Gh&&(d.current=oe,x(oe)),Math.abs(oe-je.zoom)>Gh){M();return}const I=performance.now()-j.current;if(I>=vy){M();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,M()},vy-I)},[M,n]),L=_.useRef(null),N=_.useCallback(()=>{u.current!=null||!L.current||(u.current=window.requestAnimationFrame(L.current))},[]),Y=_.useCallback(()=>{y(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,y(!1)},90)},[]),H=_.useCallback((Z,le,oe)=>{i.current={x:Z,y:le},a.current=oe,Y(),N()},[Y,N]);L.current=()=>{u.current=null;const Z=c.current,le=i.current.x,oe=i.current.y,je=a.current,ze=Math.abs(le-Z.panX)<=Sy?le:Z.panX+(le-Z.panX)*wy,J=Math.abs(oe-Z.panY)<=Sy?oe:Z.panY+(oe-Z.panY)*wy,ue=Math.abs(je-Z.zoom)<=Gh?je:Z.zoom+(je-Z.zoom)*jw;$(ze,J,ue),ze!==le||J!==oe||ue!==je?L.current&&(u.current=window.requestAnimationFrame(L.current)):M()};const X=_.useCallback((Z,le,oe)=>{const je=Tw(oe),ze=c.current,J=k();if(!J){H(i.current.x,i.current.y,je);return}const ue=Z-J.x,I=le-J.y,se=ze.zoom/aa,W=je/aa,K=(ue-ze.panX)/se,ge=(I-ze.panY)/se;H(ue-K*W,I-ge*W,je)},[k,H]),U=_.useCallback(Z=>{if(Z.preventDefault(),Z.ctrlKey||Z.metaKey){const le=Math.exp(-Z.deltaY*Cw);X(Z.clientX,Z.clientY,a.current*le);return}H(i.current.x-Z.deltaX,i.current.y-Z.deltaY,a.current)},[H,X]);return _.useLayoutEffect(()=>($(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[$]),_.useLayoutEffect(()=>{const Z=n.current;if(!Z)return;const le=c.current;Z.style.transform=`translate3d(${le.panX}px, ${le.panY}px, 0) scale(${le.zoom/aa})`}),{isCameraMoving:p,renderedZoom:g,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:k,flushCameraReactTick:M,syncCamera:H,handleWheel:U}}function Ww(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function Fw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[w,S]=_.useState([]),[j,k]=_.useState(null),M=_.useCallback(L=>{const N=t.current,Y=i();if(!N||!Y)return[];const H=N.getBoundingClientRect(),X=n.current.zoom/aa;if(X<=0)return[];const U=[],Z=L.left,le=L.left+L.width,oe=L.top,je=L.top+L.height;for(const ze of a){if(!c(ze))continue;const J=Y.x+n.current.panX+ze.x*X-H.left,ue=Y.y+n.current.panY+ze.y*X-H.top,I=J+gs*X,se=ue+(bl+$s)*X;!(I<Z||J>le||se<oe||ue>je)&&U.push(ze.commit.id)}return U},[i,a,n,t,c]),$=_.useCallback(L=>{if(L.button!==0)return;const N=L.target;if(N!=null&&N.closest("[data-commit-card]")||N!=null&&N.closest("button, a, input, textarea, select"))return;const Y=t.current;if(!Y)return;L.preventDefault();const H=Y.getBoundingClientRect(),X=L.clientX-H.left,U=L.clientY-H.top;d.current={startX:X,startY:U,currentX:X,currentY:U,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?w:[],g(!0),b({left:X,top:U,width:0,height:0})},[t,w]);return _.useEffect(()=>{const L=Y=>{var oe;const H=d.current;if(!H)return;const X=t.current;if(!X)return;const U=X.getBoundingClientRect();H.currentX=Y.clientX-U.left,H.currentY=Y.clientY-U.top,!h.current&&(Math.abs(H.currentX-H.startX)>2||Math.abs(H.currentY-H.startY)>2)&&(h.current=!0);const Z=Ww(H);b(Z);const le=M(Z);S(H.additive?Array.from(new Set([...p.current,...le])):Array.from(new Set(le))),H.additive||k((oe=le[le.length-1])!=null?oe:null)},N=()=>{if(d.current){const Y=h.current;d.current=null,h.current=!1,g(!1),b(null),Y||(S([]),k(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",N),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",N)}},[M,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:j,setMergeTargetCommitSha:k,startMarqueeDrag:$}}function Ey({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:j,mergeInProgress:k=!1,onPushAllBranches:M,onPushCurrentBranch:$,onPushCommitTargets:L,pushInProgress:N=!1,onDeleteSelection:Y,deleteInProgress:H=!1,worktrees:X=[],currentRepoPath:U,onRemoveWorktree:Z,removeWorktreeInProgress:le=!1,onSwitchToWorktree:oe,onStashLocalChanges:je,stashInProgress:ze=!1,stashDisabled:J=!1,onCommitLocalChanges:ue,commitInProgress:I=!1,commitDisabled:se=!1,onStageAllChanges:W,stageInProgress:K=!1,onCreateBranchFromNode:ge,onCreateRootBranch:R,createBranchFromNodeInProgress:re=!1,isDebugOpen:ie=!1,onDebugClose:he,orientation:Te="horizontal",branchCommitPreviews:$e={},branchParentByName:Be={},branchUniqueAheadCounts:tt={},gridSearchQuery:_t="",gridSearchJumpToken:It=0,gridSearchJumpDirection:vt=1,gridFocusSha:yt=null,checkedOutRef:Ze=null,onGridSearchResultCountChange:Yt,onGridSearchResultIndexChange:Qe,onGridSearchFocusChange:pt,onInteractionChange:ke,manuallyOpenedClumps:ne,manuallyClosedClumps:Me,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:Ye,layoutModel:ct,gridHudProps:Pe}){var ee,de,Ue,it,mt,Vt,gn,Ds,bo,Un,Zt,cn,hn,Kn;const ut=_.useRef(null),dt=_.useRef(null),bt=_.useRef(null),zt=_.useRef(null),rt=_.useRef(void 0),V=_.useRef(void 0),Q=_.useRef(void 0),fe=_.useRef(0),[be,Je]=_.useState(!1),[Ge,De]=_.useState(!1),[St,He]=_.useState(""),[Ft,Ct]=_.useState(!1),[nt,Ot]=_.useState(!1),[Pt,Kt]=_.useState(""),[st,et]=_.useState("from-selected-node"),[Dt,wt]=_.useState(()=>new Set),[Nt,ft]=_.useState(()=>new Set),[Bt,vn]=_.useState({}),wn=_.useRef(!1),_n=_.useRef(null),fs=_.useRef(null),Yn=ne!=null?ne:Dt,An=Me!=null?Me:Nt,kn=Xe!=null?Xe:wt,In=Ye!=null?Ye:ft,[un,Dn]=_.useState(null),[ot,dn]=_.useState(null),{isCameraMoving:no,renderedZoom:Eo,cameraRenderTick:hs,renderedCameraRef:Es,interactionIdleTimeoutRef:Go,getTransformLayerOriginScreen:ks,flushCameraReactTick:uo,syncCamera:so,handleWheel:fo}=Yw({mapPadHostRef:dt,transformLayerRef:bt}),jn=_.useMemo(()=>dp(t,d,$e,Be),[t,d,$e,Be]),qo=_.useMemo(()=>Mc({lanes:jn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:$e,branchParentByName:Be,branchUniqueAheadCounts:tt,manuallyOpenedClumps:Yn,manuallyClosedClumps:An,isDebugOpen:ie,gridSearchQuery:_t,gridFocusSha:yt,checkedOutRef:Ze!=null?Ze:null,orientation:Te,nodePositionOverrides:Bt}),[jn,t,n,i,a,d,$e,Be,tt,Yn,An,ie,_t,yt,(ee=Ze==null?void 0:Ze.headSha)!=null?ee:null,(de=Ze==null?void 0:Ze.branchName)!=null?de:null,Te,Bt]),Ns=Object.keys(Bt).length>0?qo:ct!=null?ct:qo,ms=_.useMemo(()=>Mc({lanes:jn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:$e,branchParentByName:Be,branchUniqueAheadCounts:tt,manuallyOpenedClumps:Yn,manuallyClosedClumps:An,isDebugOpen:ie,gridSearchQuery:_t,gridFocusSha:yt,checkedOutRef:Ze!=null?Ze:null,orientation:Te,nodePositionOverrides:Bt}),[jn,t,n,i,a,d,$e,Be,tt,Yn,An,ie,_t,yt,(Ue=Ze==null?void 0:Ze.headSha)!=null?Ue:null,(it=Ze==null?void 0:Ze.branchName)!=null?it:null,Te,Bt]),{allCommits:Oo,clusterKeyByCommitId:ho,leadByClusterKey:Rs,clusterCounts:Hs,matchingNodes:Nn,matchingNodeIds:is,normalizedSearchQuery:Mn,focusedNode:nn,defaultCollapsedClumps:To,renderNodes:ps,visibleNodesBySha:li,contentWidth:ci,contentHeight:Ao,connectors:Ko,mergeConnectors:xs,connectorDecisions:_s,nodeWarnings:Rn,commitIdsWithRenderedAncestry:Bs,connectorParentShas:Pn,branchStartShas:as,branchOffNodeShas:xi,crossBranchOutgoingShas:zo,branchBaseCommitByName:Xi,pointFormatter:Gt}=Ns,ui=!!Mn,qn=Eo/aa,Bi=_.useMemo(()=>({transform:`scale(${1/qn})`,transformOrigin:"top left",width:`${100*qn}%`,height:`${100*qn}%`}),[qn]),$o=-(20/qn),Io=_.useMemo(()=>{const ye=new Map;for(const C of ps)ye.set(C.commit.visualId,C);return ye},[ps]),oo=_.useMemo(()=>Rw(ps,$o),[ps,$o]),Qo=ye=>{var O;const C=ye.commit.id,E=ye.commit.visualId;if(ui&&is.has(C)||(nn==null?void 0:nn.commit.id)===C||un===null)return!0;if(!un.has(E))return!1;const D=ho.get(E);return D&&((O=Hs.get(D))!=null?O:1)>1&&(Yn.has(D)||!To.has(D)&&!An.has(D)),!0},io=1.5/qn,Sn=Mw/qn,mo="border-slate-400/70",rs="border-blue-500",bs=_.useMemo(()=>new Map(t.map(ye=>[ye.name,ye])),[t]),po=(mt=Ze==null?void 0:Ze.hasUncommittedChanges)!=null?mt:!1;_.useMemo(()=>new Set(t.filter(ye=>ye.commitsAhead===0&&!ye.name.startsWith("*")).map(ye=>ye.name)),[t]);const rn=_.useMemo(()=>{var C,E;const ye=new Map;for(const D of ps){const O=(C=ye.get(D.commit.id))!=null?C:new Set;O.add(D.commit.branchName),ye.set(D.commit.id,O)}for(const D of i){const O=(E=ye.get(D.fullSha))!=null?E:new Set;D.branch&&O.add(D.branch),ye.set(D.fullSha,O)}return ye},[ps,i,d]),Us=_.useMemo(()=>new Map(Object.entries(c).map(([ye,C])=>[ye,new Set(C)])),[c]),_o=_.useCallback(()=>{Go.current,uo()},[uo,Go]),{isMarqueeSelecting:Vs,marqueeRect:Wn,selectedCommitShas:Zo,setSelectedCommitShas:ao,mergeTargetCommitSha:wo,setMergeTargetCommitSha:Ls,startMarqueeDrag:Po}=Fw({scrollContainerRef:ut,renderedCameraRef:Es,getTransformLayerOriginScreen:ks,renderNodes:ps,shouldRenderNode:Qo,onPointerReleaseNoMarquee:_o}),Do=_.useMemo(()=>new Set(ps.map(ye=>ye.commit.id)),[ps]),Qt=_.useMemo(()=>Zo.filter(ye=>Do.has(ye)),[Zo,Do]),Ys=_.useCallback((ye,C)=>{var O;if(!C)return!1;if(((O=$e[ye])!=null?O:[]).some(P=>yi(P.fullSha,C)||yi(P.sha,C)))return!0;const D=bs.get(ye);return!!(D!=null&&D.headSha&&yi(D.headSha,C))},[$e,bs]),Ts=(Vt=Ze==null?void 0:Ze.branchName)!=null?Vt:null,As=(gn=Ze==null?void 0:Ze.headSha)!=null?gn:null,go=Ts==null,Ho=_.useMemo(()=>{if(!yt)return null;const ye=ps.filter(C=>C.commit.id===yt);return ye.length===0?null:ye.length===1||!nn?ye[0]:ye.reduce((C,E)=>{const D=(C.x-nn.x)**2+(C.y-nn.y)**2;return(E.x-nn.x)**2+(E.y-nn.y)**2<D?E:C})},[yt,ps,nn]),yo=_.useCallback((ye,C,E)=>{for(const D of X){if(!qh(D,U))continue;if(D.branchName){if(D.branchName===ye&&yi(D.headSha,C))return D;continue}if(!yi(D.headSha,C)&&!yi(D.headSha,E))continue;if(D.parentSha&&Ys(ye,D.parentSha)||Ys(ye,D.headSha))return D;const O=bs.get(ye);if(O&&yi(O.headSha,D.headSha)||ye===d&&i.some(P=>yi(P.fullSha,D.headSha)))return D}return null},[X,U,Ys,bs,d,i]),js=_.useCallback(ye=>{for(const C of X)if(qh(C,U)&&C.branchName===ye)return C;return null},[X,U]),xo=_.useCallback((ye,C)=>{for(const E of X)if(qh(E,U)&&(yi(E.headSha,ye)||yi(E.headSha,C)))return E;return null},[X,U]),qs=_.useCallback(ye=>{var C;return Array.from((C=rn.get(ye))!=null?C:[])},[rn]),T=_.useMemo(()=>{var O,P,ae,we;const ye=new Map;for(const Ne of Qt){const Ve=qs(Ne);if(Ve.length===0)continue;const Fe=(O=Ve.find(xt=>xt!==d))!=null?O:Ve[0],lt=Qt.filter(xt=>xt!==Ne).filter(xt=>!new Set(qs(xt)).has(Fe));ye.set(Fe,{targetSha:Ne,targetBranch:Fe,sourceRefs:lt})}const C=Array.from(ye.values()),E=wo?C.find(Ne=>{var Ve;return Ne.targetSha===wo||Ne.targetBranch===((Ve=qs(wo)[0])!=null?Ve:"")}):null,D=(P=E!=null?E:C[C.length-1])!=null?P:null;return{options:C,selected:D,targetBranch:(ae=D==null?void 0:D.targetBranch)!=null?ae:null,sources:(we=D==null?void 0:D.sourceRefs)!=null?we:[]}},[Qt,qs,d,wo]),q=_.useMemo(()=>{const ye=[...Ts===d?[{name:d,headSha:As!=null?As:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(C=>!C.name.startsWith("*")&&C.unpushedCommits>0&&C.remoteSyncStatus!=="on-github").map(C=>[C.name,C]);return new Map(ye)},[t,Ts,As,d,a.length]),pe=_.useMemo(()=>{const ye=D=>{var P;const O=qs(D).filter(ae=>q.has(ae));return O.length===0?null:O.length===1?O[0]:Ts&&O.includes(Ts)?Ts:(P=O.find(ae=>ae!==d))!=null?P:O[0]},C=D=>{var O;return D===d?a.map(P=>{var ae,we;return{fullSha:P.fullSha,sha:P.sha,parentSha:(ae=P.parentSha)!=null?ae:null,message:P.message,author:P.author,date:P.date,kind:(we=P.kind)!=null?we:"commit"}}):(O=$e[D])!=null?O:[]},E=new Map;for(const D of Qt){const O=ye(D);if(!O)continue;const P=q.get(O);if(!P)continue;const ae=C(O).slice(0,P.unpushedCommits),we=ae.findIndex(Ve=>Ve.fullSha===D);if(we===-1)continue;const Ne=E.get(O);(!Ne||we<Ne.targetIndex)&&E.set(O,{branchName:O,targetSha:D,targetIndex:we,commitCount:ae.length-we})}return Array.from(E.values())},[Qt,qs,q,Ts,d,a,$e]),Se=_.useMemo(()=>Array.from(new Set(Qt.map(ye=>/^STASH:(\d+)$/.exec(ye)).filter(ye=>!!ye).map(ye=>parseInt(ye[1],10)))).sort((ye,C)=>ye-C),[Qt]),qe=Qt.includes("WORKING_TREE"),at=(qe?1:0)+Se.length,Ut=[...qe?["Uncommitted changes"]:[],...Se.map(ye=>`Stash ${ye+1}`)],Lt=q.size,At=!go&&!!Ts&&q.has(Ts),Ke=Ts?`Push ${Ts}`:"Push current branch",Jt=pe.length===1?pe[0].commitCount>1?`Push ${pe[0].commitCount} commits on ${pe[0].branchName}`:`Push ${pe[0].targetSha.slice(0,7)} on ${pe[0].branchName}`:`Push ${pe.length} selected ranges`,sn=_.useCallback(ye=>{const C=ye.target;C!=null&&C.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||up().startDragging()},[]);_.useEffect(()=>{const ye=no||Vs;zt.current!==ye&&(zt.current=ye,ke==null||ke(ye))},[no,Vs,ke]),_.useEffect(()=>{const ye=Mn?Nn.length:null;rt.current!==ye&&(rt.current=ye,Yt==null||Yt(ye))},[Nn.length,Mn,Yt]),_.useEffect(()=>{const ye=Mn&&yt?(()=>{const C=Nn.findIndex(E=>E.commit.id===yt);return C>=0?C:null})():null;V.current!==ye&&(V.current=ye,Qe==null||Qe(ye))},[yt,Nn,Mn,Qe]);const En=_.useMemo(()=>{var Ne,Ve,Fe,lt,xt,Et;if(!Mn)return null;const ye=Mn,C=t.map(ht=>ht.name),E=C.find(ht=>ht.toLowerCase()===ye),D=E!=null?E:C.find(ht=>ht.toLowerCase().startsWith(ye)),P=D!=null?D:C.find(ht=>ht.toLowerCase().includes(ye));if(!P)return null;const ae=(Ne=t.find(ht=>ht.name===P))!=null?Ne:null;if(ae!=null&&ae.headSha)return ae.headSha;const we=(Ve=$e[P])!=null?Ve:[];return we.length>0?(lt=(Fe=we[0])==null?void 0:Fe.fullSha)!=null?lt:null:P===d&&(Et=(xt=i[0])==null?void 0:xt.fullSha)!=null?Et:null},[Mn,t,$e,d,i]);_.useEffect(()=>{var D,O,P;if(!Mn){if(fe.current=It,Q.current===null)return;Q.current=null,pt==null||pt(null);return}if(It<=0||fe.current===It)return;fe.current=It;let ye;const C=yt?Nn.findIndex(ae=>ae.commit.id===yt):-1,E=Nn.length>0?C<0?0:(C+vt+Nn.length)%Nn.length:-1;ye=(P=(O=(D=Nn[E])==null?void 0:D.commit.id)!=null?O:En)!=null?P:null,Q.current!==ye&&(Q.current=ye,pt==null||pt(ye))},[Nn,Mn,pt,En,It,vt]),_.useLayoutEffect(()=>{if(!yt)return;const ye=ut.current,C=Ho;if(!ye||!C)return;const E=ks();if(!E)return;const D=ye.getBoundingClientRect(),O=Es.current.zoom,P=O/aa,ae=C.x+gs/2,we=C.y+bl+$s/2,Ne=D.left+D.width/2,Ve=D.top+D.height/2;so(Ne-E.x-ae*P,Ve-E.y-we*P,O)},[yt,It,Ho,ks,so,Es]);const Hn=(Un=(bo=ot==null?void 0:ot.width)!=null?bo:(Ds=ut.current)==null?void 0:Ds.clientWidth)!=null?Un:0,on=(hn=(cn=ot==null?void 0:ot.height)!=null?cn:(Zt=ut.current)==null?void 0:Zt.clientHeight)!=null?hn:0,ls=Hn>0&&on>0?Cy(Hn,on,Es.current,{innerPaddingPx:kd}):null,Ws=ls!=null?ky(ls,Es.current.zoom):null,Jo=ye=>{if(!Ws)return!0;const{fromX:C,fromY:E,toX:D,toY:O}=ye;return Nw(C,E,D,O,Ws,ye.fromFace,ye.toFace)};_.useLayoutEffect(()=>{var ae;const ye=ut.current;if(!ye||ye.clientWidth<=0||ye.clientHeight<=0)return;const C=ye.clientWidth,E=ye.clientHeight;dn(we=>(we==null?void 0:we.width)===C&&(we==null?void 0:we.height)===E?we:{width:C,height:E});const D=Cy(C,E,Es.current,{innerPaddingPx:kd});if(!D){Dn(we=>we===null?we:null);return}const O=ky(D,Es.current.zoom),P=Bw(oo,O,Io,$o);for(const we of ps){const Ne=ho.get(we.commit.visualId);if(!Ne||((ae=Hs.get(Ne))!=null?ae:1)<=1)continue;(Yn.has(Ne)||!To.has(Ne)&&!An.has(Ne))&&P.add(we.commit.visualId)}Dn(we=>Aw(we,P)?we:P)},[Eo,It,yt,no,hs,Yn,An,To,ho,Hs,ps,ot,oo,Io,$o]),_.useLayoutEffect(()=>{const ye=ut.current;if(!ye)return;const C=()=>{const D=ye.clientWidth,O=ye.clientHeight;D<=0||O<=0||dn(P=>(P==null?void 0:P.width)===D&&(P==null?void 0:P.height)===O?P:{width:D,height:O})};C();const E=new ResizeObserver(C);return E.observe(ye),()=>E.disconnect()},[Oo.length]);const ei=ps.filter(ye=>Qo(ye)).length,Gi=xs.filter(ye=>Jo(ye)).length,ja=Ko.filter(ye=>Jo(ye)).length,qi=_.useCallback((ye,C)=>{if(wn.current){ye.preventDefault(),ye.stopPropagation();return}ye.stopPropagation();const E=C.commit.id;if(ye.shiftKey?(ao(ae=>ae.includes(E)?ae.filter(we=>we!==E):[...ae,E]),Ls(E)):(ao(ae=>ae.includes(E)?[]:[E]),Ls(ae=>ae===E?null:E)),!(ye.metaKey||ye.ctrlKey||ye.detail>=2)||E==="WORKING_TREE")return;const O=E.length>=40?E.slice(0,7):E;let P=null;if(C.commit.branchName?(P=yo(C.commit.branchName,E,O),P||(P=js(C.commit.branchName))):P=xo(E,O),P&&oe){oe(P.path);return}h==null||h({commitSha:E})},[xo,yo,js,h,oe]),No=_.useCallback((ye,C)=>{var we,Ne,Ve,Fe,lt;if(ye.button!==0)return;const E=ye.target;if(E!=null&&E.closest('[data-selectable-text="true"]')||E!=null&&E.closest("button, a, input, textarea, select"))return;ye.stopPropagation(),ye.preventDefault(),wn.current=!1,ye.currentTarget.setPointerCapture(ye.pointerId);const D=(we=Bt[C.commit.visualId])!=null?we:Bt[C.commit.id];_n.current={nodeId:C.commit.visualId,startX:ye.clientX,startY:ye.clientY,baseX:(Ne=D==null?void 0:D.x)!=null?Ne:C.x,baseY:(Ve=D==null?void 0:D.y)!=null?Ve:C.y,moved:!1,pendingX:(Fe=D==null?void 0:D.x)!=null?Fe:C.x,pendingY:(lt=D==null?void 0:D.y)!=null?lt:C.y};const O=()=>{fs.current=null;const xt=_n.current;xt&&vn(Et=>({...Et,[xt.nodeId]:{x:xt.pendingX,y:xt.pendingY}}))},P=xt=>{const Et=_n.current;if(!Et)return;const ht=Es.current.zoom/aa,gt=ht>0?1/ht:1,Qn=(xt.clientX-Et.startX)*gt,Zn=(xt.clientY-Et.startY)*gt;(Math.abs(Qn)>2||Math.abs(Zn)>2)&&(Et.moved=!0),Et.moved&&(wn.current=!0),Et.pendingX=Et.baseX+Qn,Et.pendingY=Et.baseY+Zn,fs.current==null&&(fs.current=window.requestAnimationFrame(O))},ae=()=>{window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",ae),window.removeEventListener("pointercancel",ae),fs.current!=null&&(window.cancelAnimationFrame(fs.current),fs.current=null,O());try{ye.currentTarget.releasePointerCapture(ye.pointerId)}catch{}const xt=_n.current;_n.current=null,xt&&window.setTimeout(()=>{wn.current=!1},0)};window.addEventListener("pointermove",P),window.addEventListener("pointerup",ae),window.addEventListener("pointercancel",ae)},[Bt]),or=_.useCallback(async()=>{if(!ue)return;await ue(St)&&(De(!1),He(""))},[ue,St]),Ki=_.useCallback(async()=>{Y&&(await Y({branchNames:[],discardUncommittedChanges:qe,stashIndices:Se}),Ct(!1),ao([]),Ls(null))},[Y,qe,Se]),Qi=_.useCallback(async()=>{var C;const ye=Pt.trim();if(ye){if(st==="new-root"){if(!R)return;await R(ye)}else{if(!ge)return;const E=Qt.length===1?Qt[0]:(C=Ze==null?void 0:Ze.headSha)!=null?C:null;if(!E||!(E==="WORKING_TREE"||E.startsWith("STASH:")||E===(Ze==null?void 0:Ze.headSha)))return;await ge(E,ye)}Ot(!1),Kt(""),et("from-selected-node"),ao([]),Ls(null)}},[Ze==null?void 0:Ze.headSha,st,Pt,ge,R,Qt]),Li=!!(Ze!=null&&Ze.headSha),bi=Qt.length===0&&Li,B=Qt.length===1&&(Qt[0]==="WORKING_TREE"||Qt[0].startsWith("STASH:"))||bi,F=!!R;return _.useEffect(()=>{if(nt){if(!B&&!bi&&F){et("new-root");return}(B||bi)&&et("from-selected-node")}},[F,bi,nt,B]),_.useEffect(()=>{const ye=C=>{if(!Y||Ft||Qt.length===0)return;const E=C.target;E!=null&&E.closest('input, textarea, select, button, [contenteditable="true"]')||C.key!=="Delete"&&C.key!=="Backspace"||(C.preventDefault(),Ct(!0))};return window.addEventListener("keydown",ye),()=>window.removeEventListener("keydown",ye)},[Ft,Y,Qt.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx(Pw,{isOpen:ie,onClose:()=>he==null?void 0:he(),visibleBounds:Ws,renderedNodeCount:ei,totalNodeCount:ps.length,renderedMergeConnectorCount:Gi,totalMergeConnectorCount:xs.length,renderedConnectorCount:ja,totalConnectorCount:Ko.length,mapGridCullViewportInsetScreenPx:kw,debugRows:ms.debugRows,branchDebugRows:ms.branchDebugRows,connectorDecisions:_s}),Pe?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:sn,className:"window-drag-region pointer-events-auto absolute left-0 right-0 top-0 z-[70] flex justify-between select-none",children:[l.jsxs("div",{className:"flex flex-1 min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-1 items-center",children:l.jsx("div",{className:"window-no-drag pointer-events-auto flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(zw,{selectedVisibleCommitShas:Qt,commitInProgress:I,commitDisabled:se,stageInProgress:K,stashInProgress:ze,stashDisabled:J,pushInProgress:N,hasUncommittedChanges:po,createBranchFromNodeInProgress:re,onCommitLocalChanges:ue,onStageAllChanges:W?()=>void W():void 0,onStashLocalChanges:je,onPushCurrentBranch:$,onPushAllBranches:M,onPushCommitTargets:L,onMergeRefsIntoBranch:j,selectedPushTargets:pe,selectedPushLabel:Jt,canPushCurrentBranch:At,pushCurrentBranchLabel:Ke,pushableRemoteBranchCount:Lt,selectedCommitTargetOption:T,mergeInProgress:k,mergeTargetCommitSha:wo,setMergeTargetCommitSha:Ls,worktrees:X,currentRepoPath:U,worktreeMenuOpen:be,setWorktreeMenuOpen:Je,onSwitchToWorktree:oe,onRemoveWorktree:Z,removeWorktreeInProgress:le,setCommitDialogOpen:De,setNewBranchDialogOpen:Ot})})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[l.jsx(Vw,{query:Pe.gridSearchQuery,onQueryChange:Pe.setGridSearchQuery,resultCount:Pe.gridSearchResultCount,resultIndex:Pe.gridSearchResultIndex,onJump:ye=>{Pe.setGridSearchJumpDirection(ye),Pe.setGridSearchJumpToken(C=>C+1)}}),l.jsx(Uw,{orientation:Pe.mapGridOrientation,onOrientationChange:Pe.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(Kn=Pe.githubAuthStatus)!=null&&Kn.ghAvailable&&!Pe.githubAuthStatus.authenticated?l.jsx("button",{onClick:Pe.onGitHubAuthSetup,disabled:Pe.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Pe.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Pe.githubAuthStatus&&!Pe.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Pe.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Pe.githubAuthMessage,children:Pe.githubAuthMessage})]}):null,Pe.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Pe.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Pe.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Pe.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Pe.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Pe.commitSwitchFeedback.message})]}):null]})]}):null,Oo.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(Iw,{scrollContainerRef:ut,mapPadHostRef:dt,transformLayerRef:bt,isMarqueeSelecting:Vs,contentWidth:ci,contentHeight:Ao,isCameraMoving:no,onWheel:fo,onMouseDown:Po,onNodePointerDown:No,labelTopPx:$o,inverseZoomStyle:Bi,displayZoom:qn,selectedVisibleCommitShas:Qt,normalizedSearchQuery:Mn,matchingNodeIds:is,focusedNode:Ho,renderNodes:ps,shouldRenderNode:Qo,manuallyOpenedClumps:Yn,manuallyClosedClumps:An,defaultCollapsedClumps:To,leadByClusterKey:Rs,clusterKeyByCommitId:ho,clusterCounts:Hs,commitIdsWithRenderedAncestry:Bs,nodeWarnings:Rn,connectorParentShas:Pn,branchStartShas:as,branchOffNodeShas:xi,crossBranchOutgoingShas:zo,branchBaseCommitByName:Xi,branchStartAccentClass:rs,connectorParentAccentClass:mo,commitCornerRadiusPx:Sn,lineStrokeWidth:io,pointFormatter:Gt,connectors:Ko,mergeConnectors:xs,cullConnectorPath:Jo,flushCameraReactTick:uo,setManuallyOpenedClumps:kn,setManuallyClosedClumps:In,onCommitCardClick:qi,unpushedCommitShasSetByBranch:Us,checkedOutHeadSha:As}),Wn&&Vs?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Wn.left,top:Wn.top,width:Wn.width,height:Wn.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Hw,{commitDialogOpen:Ge,commitMessageDraft:St,onCommitMessageDraftChange:He,onCommitDialogClose:()=>De(!1),onCommitConfirm:()=>void or(),commitInProgress:I,deleteConfirmOpen:Ft,deleteSelectionItems:Ut,onDeleteConfirmClose:()=>Ct(!1),onDeleteConfirm:()=>void Ki(),deleteInProgress:H,deletableSelectionCount:at,newBranchDialogOpen:nt,newBranchName:Pt,newBranchCreateMode:st,onNewBranchNameChange:Kt,onNewBranchCreateModeChange:et,onNewBranchDialogClose:()=>Ot(!1),onNewBranchConfirm:()=>void Qi(),selectedCommitCanCreateBranch:B,currentCheckedOutCommitCanCreateBranch:bi,createBranchFromNodeInProgress:re})]})}function Xw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:j=1,gridFocusSha:k=null,onGridSearchResultCountChange:M,onGridSearchResultIndexChange:$,onGridSearchFocusChange:L,view:N="time",isLoading:Y=!1,scrollRequest:H,focusedErrorBranch:X,checkedOutRef:U=null,mapTopInsetPx:Z=0,onMergeRefsIntoBranch:le,mergeInProgress:oe=!1,onPushAllBranches:je,onPushCurrentBranch:ze,onPushCommitTargets:J,pushInProgress:ue=!1,onDeleteSelection:I,worktrees:se=[],currentRepoPath:W,onRemoveWorktree:K,removeWorktreeInProgress:ge=!1,onSwitchToWorktree:R,onStashLocalChanges:re,stashInProgress:ie=!1,stashDisabled:he=!1,onCommitLocalChanges:Te,commitInProgress:$e=!1,commitDisabled:Be=!1,onStageAllChanges:tt,stageInProgress:_t=!1,onCreateBranchFromNode:It,onCreateRootBranch:vt,createBranchFromNodeInProgress:yt=!1,onMoveNodeBackToBranch:Ze,isDebugOpen:Yt=!1,onDebugClose:Qe,orientation:pt="horizontal",onInteractionChange:ke,manuallyOpenedClumps:ne,manuallyClosedClumps:Me,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:Ye,layoutModel:ct,gridHudProps:Pe}){const ut=new Set(u.map(V=>V.branchName)),dt=14*864e5,bt=Date.now();function zt(V){return ut.has(V.name)||bt-new Date(V.lastCommitDate).getTime()<=dt}const rt=t.filter(V=>V.status==="stale"&&zt(V)).sort((V,Q)=>new Date(Q.lastCommitDate).getTime()-new Date(V.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:N==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Ey,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,onGridSearchResultCountChange:M,onGridSearchResultIndexChange:$,onGridSearchFocusChange:L,staleBranches:rt,isLoading:Y,scrollRequest:H,focusedErrorBranch:X,checkedOutRef:U,mapTopInsetPx:Z,onMergeRefsIntoBranch:le,mergeInProgress:oe,onPushAllBranches:je,onPushCurrentBranch:ze,onPushCommitTargets:J,pushInProgress:ue,onDeleteSelection:I,worktrees:se,currentRepoPath:W,onRemoveWorktree:K,removeWorktreeInProgress:ge,onSwitchToWorktree:R,onStashLocalChanges:re,stashInProgress:ie,stashDisabled:he,onCommitLocalChanges:Te,commitInProgress:$e,commitDisabled:Be,onStageAllChanges:tt,stageInProgress:_t,onCreateBranchFromNode:It,onCreateRootBranch:vt,createBranchFromNodeInProgress:yt,onMoveNodeBackToBranch:Ze,isDebugOpen:Yt,onDebugClose:Qe,orientation:pt,onInteractionChange:ke,manuallyOpenedClumps:ne,manuallyClosedClumps:Me,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:Ye,layoutModel:ct,gridHudProps:Pe})}):N==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Ey,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,checkedOutRef:U,onGridSearchResultCountChange:M,onGridSearchResultIndexChange:$,onGridSearchFocusChange:L,onInteractionChange:ke,manuallyOpenedClumps:ne,manuallyClosedClumps:Me,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:Ye,layoutModel:ct,isDebugOpen:Yt,onDebugClose:Qe,orientation:pt,gridHudProps:Pe})}):null})}const Cr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Gw(t,n,i,a){if(!t)return null;const c=d=>Cr(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function qw(t,n,i,a,c,u){var oe,je,ze,J,ue,I;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,y=(je=(oe=i[0])==null?void 0:oe.fullSha)!=null?je:null,g=[{name:u,headSha:y!=null?y:"",isDefault:!0},...n.map(se=>({name:se.name,headSha:se.headSha,isDefault:!1}))],x=d?g.filter(se=>Cr(se.headSha,d)):[],b=Gw(d,i,a,u),w=b?g.find(se=>se.name===b):void 0,S=(J=(ze=x.find(se=>se.isDefault))!=null?ze:x[0])!=null?J:w,j=!!(S&&d&&Cr(S.headSha,d)),k=S&&!S.isDefault?n.find(se=>se.name===S.name):void 0,M=(()=>{var W;if(!d)return null;const se=i.find(K=>Cr(K.fullSha,d)||Cr(K.sha,d));if(se!=null&&se.date)return se.date;if(k){const K=((W=a[k.name])!=null?W:[]).find(ge=>Cr(ge.fullSha,d)||Cr(ge.sha,d));if(K!=null&&K.date)return K.date}return null})(),$=M?new Date(M).getTime():Number.NaN,L=Date.now(),N=Number.isFinite($)?Math.max(L,$+1+t.index):L+t.index,Y=new Date(N).toISOString(),H=t.message.trim(),X={fullSha:h,sha:p,parentSha:d,message:H||p,author:"You",date:Y,kind:"stash"},U={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(ue=k==null?void 0:k.name)!=null?ue:u,message:H||p,author:"You",date:Y,kind:"stash"};if(j&&(S!=null&&S.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,U]};if(j&&k)return{branches:n.map(W=>W.name===k.name?{...W,commitsAhead:W.commitsAhead+1,unpushedCommits:W.unpushedCommits+1,lastCommitDate:Y,headSha:h}:W),directCommits:i,branchCommitPreviews:{...a,[k.name]:[X,...a[k.name]||[]]},branchUniqueAheadCounts:{...c,[k.name]:Math.max(0,(I=Object.prototype.hasOwnProperty.call(c,k.name)?c[k.name]:k.commitsAhead)!=null?I:0)+1}};const Z=`*Stash:${t.index}`;return{branches:[{name:Z,commitsAhead:1,commitsBehind:0,lastCommitDate:Y,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(S==null?void 0:S.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[Z]:[X]},branchUniqueAheadCounts:{...c,[Z]:1}}}function Gx(t,n,i,a,c,u){const d=[...t].sort((p,y)=>p.index-y.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=qw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function Kw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var X,U,Z,le;const j=Gx(y,t,i,u,h,c);let k=j.branches,M=j.directCommits,$=j.branchCommitPreviews,L=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const oe=p.headSha||p.parentSha||null,je=(U=(X=M[0])==null?void 0:X.fullSha)!=null?U:null,ze=(Be,tt)=>!Be||!tt?!1:Be===tt||Be.startsWith(tt)||tt.startsWith(Be),J=[{name:c,headSha:je!=null?je:"",isDefault:!0},...k.map(Be=>({name:Be.name,headSha:Be.headSha,isDefault:!1}))],ue=p.branchName?J.find(Be=>Be.name===p.branchName):void 0,I=oe?J.filter(Be=>ze(Be.headSha,oe)):[],se=(Z=ue!=null?ue:I.find(Be=>Be.isDefault))!=null?Z:I[0],W=!!(se&&oe&&ze(se.headSha,oe)),K=se&&!se.isDefault?k.find(Be=>Be.name===se.name):void 0,ge=(()=>{var tt;if(!oe)return null;const Be=M.find(_t=>ze(_t.fullSha,oe)||ze(_t.sha,oe));if(Be!=null&&Be.date)return Be.date;if(K){const _t=((tt=$[K.name])!=null?tt:[]).find(It=>ze(It.fullSha,oe)||ze(It.sha,oe));if(_t!=null&&_t.date)return _t.date}return null})(),R=ge?new Date(ge).getTime():Number.NaN,re=Date.now(),ie=Number.isFinite(R)?Math.max(re,R+1):re,he=new Date(ie).toISOString(),Te={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:oe,message:"Local uncommitted changes",author:"You",date:he,kind:"uncommitted"},$e={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:oe,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:he,kind:"uncommitted"};if(W&&(se!=null&&se.isDefault))M=[...M,$e];else if(W&&K)k=k.map(Be=>Be.name===K.name?{...Be,commitsAhead:Be.commitsAhead+1,unpushedCommits:Be.unpushedCommits+1,lastCommitDate:he,headSha:"WORKING_TREE"}:Be),$={...$,[K.name]:[Te,...$[K.name]||[]]},L={...L,[K.name]:Math.max(0,(le=Object.prototype.hasOwnProperty.call(L,K.name)?L[K.name]:K.commitsAhead)!=null?le:0)+1};else{const Be={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:he,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:oe!=null?oe:void 0,parentBranch:(se==null?void 0:se.name)||p.branchName||c};k=[Be,...k],$={...$,[Be.name]:[Te]},L={...L,[Be.name]:1}}}const N={...d};N[c]=null;const Y=dp(k,c,$,N),H=Mc({lanes:Y,branches:k,mergeNodes:n,directCommits:M,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:$,branchParentByName:N,branchUniqueAheadCounts:L,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:k,enrichedBranchCommitPreviews:$,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:M,sharedGridLayoutModel:H}}const Ty="git-visualizer:expanded-projects",Ay="git-visualizer:expanded-branches";function Qw(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function Zw(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,w;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Jw(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(t,[]),c}function Am({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:g,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:$}){var R,re;if(g.has(t)||!a.get(t))return null;const N=(R=u.get(t))!=null?R:[],Y=N.length>0,H=_.useMemo(()=>{var ie;return[...(ie=c[t])!=null?ie:[]]},[c,t]),X=x&&H.length>0,U=x,Z=Y||X,le=h.has(t),oe=U?H:[],je=le&&oe.length>0,ze=y===t,J=new Set(g);J.add(t);const ue="top-[-0.2rem] h-4.5 w-[10px]",I="rounded-bl-[7px]",se="left-[0.65rem]",W=new Map,K=[];for(const ie of N){const he=d.get(ie);if(he){const Te=oe.findIndex($e=>yi($e.fullSha,he)||yi($e.sha,he));if(Te>=0){const $e=(re=W.get(Te))!=null?re:[];$e.push(ie),W.set(Te,$e);continue}}K.push(ie)}const ge=_.useMemo(()=>{if(!x||oe.length===0)return[];const ie=[];let he=[],Te=null;const $e=()=>{if(he.length===0)return;const Be=he[he.length-1],tt=`sidebar-single-${t}-${Be.fullSha}`;ie.push({key:Te!=null?Te:tt,commits:he,count:he.length,lead:Be}),he=[],Te=null};return oe.forEach(Be=>{var _t;const tt=(_t=S.get(`${t}:${Be.fullSha}`))!=null?_t:null;if(he.length===0){he=[Be],Te=tt;return}if(tt===Te){he.push(Be);return}$e(),he=[Be],Te=tt}),$e(),ie},[t,x,oe,S]);return l.jsxs("li",{className:On("relative",n>0?"pl-4":"pl-0",n===0&&!i?le?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:On("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",I,se,ue)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:On("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",se)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:On("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-7 text-left text-sm font-normal transition-colors hover:bg-accent",ze?"text-foreground":"text-muted-foreground hover:text-foreground"),role:Z?"button":void 0,tabIndex:Z?0:void 0,onClick:()=>{Z?p(t):$==null||$(t)},onKeyDown:ie=>{Z&&(ie.key==="Enter"||ie.key===" ")&&(ie.preventDefault(),p(t))},children:[Z?l.jsx("button",{type:"button","aria-label":`${le?"Collapse":"Expand"} ${t}`,onPointerDown:ie=>{ie.preventDefault()},onClick:ie=>{ie.preventDefault(),ie.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:l.jsx("span",{"aria-hidden":"true",className:On("inline-block transition-transform",le?"rotate-90":""),children:"▶"})}):null,l.jsx("span",{className:"min-w-0 flex-1 break-words",children:t})]})}),je?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ge.map(ie=>{const he=ie.count>1&&!j(ie.key);return(he?[ie.lead]:ie.commits).map($e=>{var _t;const Be=oe.findIndex(It=>It.fullSha===$e.fullSha),tt=b($e.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>M==null?void 0:M($e.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:$e.message,children:[l.jsx("span",{className:"block truncate",children:$e.message}),tt.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:tt.map(It=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:It})]},`${$e.fullSha}:${It}`))}):null]}),ie.count>1&&$e.fullSha===ie.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${ie.lead.fullSha}`,onClick:()=>k(ie.key,`${t}:${ie.lead.fullSha}`),className:On("shrink-0 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",he?"":"min-w-[2ch] text-center"),children:he?`+${Math.max(1,ie.count-1)}`:"−"}):null]}),(_t=W.get(Be))!=null&&_t.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:W.get(Be).map((It,vt,yt)=>l.jsx(Am,{branchName:It,depth:n+1,isLast:vt===yt.length-1&&K.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:J,showCommits:x,getMergeTargetLabels:b,sourceBranchName:It,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:$},It))}):null]},`${t}:${$e.fullSha}`)})})}):null,Y&&le&&K.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:K.map((ie,he)=>l.jsx(Am,{branchName:ie,depth:n+1,isLast:he===K.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:J,showCommits:x,getMergeTargetLabels:b,sourceBranchName:ie,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:$},ie))}):null]})}function eS({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function tS({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,projectLoading:d=!1,projectError:h=null,checkedOutRef:p,manuallyOpenedClumpsByProject:y={},manuallyClosedClumpsByProject:g={},manuallyOpenedClumps:x,manuallyClosedClumps:b,setManuallyOpenedClumps:w,setManuallyClosedClumps:S,gridLayoutModel:j,onSelectCommit:k,onSelectBranch:M,showCommits:$,onToggleShowCommits:L,className:N,style:Y,collapsed:H=!1}){var Yt;const X=_.useRef(null),U=_.useRef(null),[Z,le]=_.useState(()=>new Set),[oe,je]=_.useState({}),[ze,J]=_.useState(()=>new Set),[ue,I]=_.useState(()=>new Set),[se,W]=_.useState(null),K=x!=null?x:ze,ge=b!=null?b:ue,R=w!=null?w:J,re=S!=null?S:I,[ie,he]=_.useState(null),[Te,$e]=_.useState(null),Be=Qe=>{try{window.localStorage.setItem(Ty,JSON.stringify(Array.from(Qe)))}catch{}},tt=Qe=>{try{const pt=Object.fromEntries(Object.entries(Qe).map(([ke,ne])=>[ke,Array.from(ne)]));window.localStorage.setItem(Ay,JSON.stringify(pt))}catch{}};_.useEffect(()=>{try{const Qe=window.localStorage.getItem(Ty);if(!Qe)return;const pt=JSON.parse(Qe);if(!Array.isArray(pt))return;const ke=new Set;for(const ne of pt)typeof ne=="string"&&ke.add(ne);le(ke)}catch{}},[]),_.useEffect(()=>{le(Qe=>{const pt=new Set(Qe);for(const ke of t)pt.add(ke.path);return pt})},[t]),_.useEffect(()=>{Be(Z)},[Z]),_.useEffect(()=>{try{const Qe=window.localStorage.getItem(Ay);if(!Qe)return;const pt=JSON.parse(Qe);if(!pt||typeof pt!="object")return;const ke={};for(const[ne,Me]of Object.entries(pt)){if(!Array.isArray(Me))continue;const Xe=new Set;for(const Ye of Me)typeof Ye=="string"&&Xe.add(Ye);ke[ne]=Xe}je(ke)}catch{}},[]),_.useEffect(()=>{tt(oe)},[oe]);const _t=(Yt=j==null?void 0:j.defaultCollapsedClumps)!=null?Yt:new Set,It=Qe=>K.has(Qe)||!_t.has(Qe)&&!ge.has(Qe),vt=(Qe,pt)=>{const ke=X.current,ne=U.current;if(ke&&ne){const Me=`[data-clump-toggle-id="${pt}"]`,Xe=ke.querySelector(Me);if(Xe){const Ye=Xe.getBoundingClientRect().top-ne.getBoundingClientRect().top;$e({id:pt,topWithinScrollBody:Ye})}else $e(null)}else $e(null);he(pt),R(Me=>{const Xe=new Set(Me),Ye=It(Qe);return re(ct=>{const Pe=new Set(ct);return Ye?(Xe.delete(Qe),Pe.add(Qe)):(Pe.delete(Qe),Xe.add(Qe)),Pe}),Xe})};_.useLayoutEffect(()=>{if(!ie)return;const Qe=X.current,pt=U.current;if(!Qe||!pt)return;const ke=`[data-clump-toggle-id="${ie}"]`,ne=Qe.querySelector(ke);if(ne){if((Te==null?void 0:Te.id)===ie){const Xe=ne.getBoundingClientRect().top-pt.getBoundingClientRect().top-Te.topWithinScrollBody;Number.isFinite(Xe)&&Xe!==0&&(pt.scrollTop+=Xe)}ne.focus({preventScroll:!0}),he(null),$e(null)}},[K,ge,ie,Te]);const yt=(Qe,pt)=>{je(ke=>{var Ye;const ne=(Ye=ke[Qe])!=null?Ye:new Set,Me=new Set(ne);Me.has(pt)?Me.delete(pt):Me.add(pt);const Xe={...ke,[Qe]:Me};return tt(Xe),Xe})};_.useEffect(()=>{if(se==null)return;const Qe=()=>W(null);return window.addEventListener("pointerdown",Qe),()=>window.removeEventListener("pointerdown",Qe)},[se]);const Ze=_.useMemo(()=>{var pt,ke,ne,Me,Xe,Ye,ct,Pe,ut,dt,bt,zt,rt,V;const Qe=new Map;for(const Q of t){const fe=Kw({branches:Q.branches,mergeNodes:Q.mergeNodes,directCommits:Q.directCommits,unpushedDirectCommits:Q.unpushedDirectCommits,defaultBranch:Q.defaultBranch,branchCommitPreviews:Q.branchCommitPreviews,branchUniqueAheadCounts:Q.branchUniqueAheadCounts,checkedOutRef:Q.checkedOutRef,stashes:Q.stashes,manuallyOpenedClumps:(pt=y[Q.path])!=null?pt:new Set,manuallyClosedClumps:(ke=g[Q.path])!=null?ke:new Set}),be=fe.enrichedBranches.some(et=>et.name===Q.defaultBranch)?fe.enrichedBranches:[{name:Q.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...fe.enrichedBranches],Je=new Map(fe.sharedGridLayoutModel.nodes.map(et=>[et.commit.visualId,et.row])),Ge={};for(const et of fe.sharedGridLayoutModel.allCommits){const Dt=(ne=Ge[et.branchName])!=null?ne:[];Dt.push({fullSha:et.id,sha:et.id.slice(0,7),parentSha:(Me=et.parentSha)!=null?Me:null,message:et.message,author:et.author,date:et.date,kind:(Xe=et.kind)!=null?Xe:"commit"}),Ge[et.branchName]=Dt}for(const et of Object.keys(Ge))Ge[et]=Ge[et].sort((Dt,wt)=>{var wn,_n;const Nt=new Date(Dt.date).getTime(),ft=new Date(wt.date).getTime();if(Nt!==ft)return Nt-ft;const Bt=(wn=Je.get(`${et}:${Dt.fullSha}`))!=null?wn:Number.MAX_SAFE_INTEGER,vn=(_n=Je.get(`${et}:${wt.fullSha}`))!=null?_n:Number.MAX_SAFE_INTEGER;return Bt!==vn?Bt-vn:Dt.fullSha.localeCompare(wt.fullSha)});const De=(Ye=fe.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?Ye:new Map,St=(et,Dt)=>{const wt=De.get(Dt);if(!wt)return[];for(const[Nt,ft]of wt.entries())if(yi(et,Nt))return Array.from(ft).sort();return[]},He=Qw(be,Q.defaultBranch),Ft=Zw(be,Q.defaultBranch,He),Ct=new Map(be.map(et=>[et.name,et])),nt=new Map;for(const et of be){const Dt=(Pe=(ct=fe.sharedGridLayoutModel.firstBranchCommitByName.get(et.name))==null?void 0:ct.parentSha)!=null?Pe:null,wt=Dt!=null?Dt:null;nt.set(et.name,wt)}const Ot=(ut=fe.sharedGridLayoutModel.defaultCollapsedClumps)!=null?ut:new Set,Pt=(dt=y[Q.path])!=null?dt:new Set,Kt=(bt=g[Q.path])!=null?bt:new Set,st=et=>Pt.has(et)||!Ot.has(et)&&!Kt.has(et);Qe.set(Q.path,{rootBranchNames:Ft,branchByName:Ct,branchCommitPreviewsFromLayout:Ge,childNamesByParent:He,branchAnchorShaByName:nt,checkedOutBranchName:(rt=(zt=Q.checkedOutRef)==null?void 0:zt.branchName)!=null?rt:null,clusterKeyByCommitId:(V=fe.sharedGridLayoutModel.clusterKeyByCommitId)!=null?V:new Map,getMergeTargetLabels:St,isGridClusterOpen:st})}return Qe},[n,g,y,t]);return l.jsxs("aside",{ref:X,"aria-label":"Dense branch sidebar",className:On("pointer-events-auto relative h-full select-none overflow-hidden",N),style:Y,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:l.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:d,"aria-label":"Add Repo",className:"window-no-drag flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:l.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:[l.jsx("path",{d:"M19.5 10V8C19.5 6.89543 18.6046 6 17.5 6H12.5C11.8509 6 11.2193 5.78947 10.7 5.4L10.3 5.1C9.78071 4.71053 9.14911 4.5 8.5 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16.5C3.5 17.6046 4.39543 18.5 5.5 18.5H11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M18 17V14M18 17H15M18 17H21M18 17V20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M3.5 10L11.9211 10L19.5 10",stroke:"currentColor",strokeWidth:"1.5"})]})}),l.jsx("button",{type:"button",onClick:L,className:"window-no-drag shrink-0 rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent",children:$?"Hide Commits":"Show Commits"})]})}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[h&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:h})}),l.jsx("div",{ref:U,className:On("min-h-0 flex-1 space-y-6 overflow-y-auto px-2.5",H?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(Qe=>{var Ye,ct;const pt=Qe.path===n,ke=Z.has(Qe.path),ne=(Ye=Qe.treeLoaded)!=null?Ye:Qe.branches.length>0,Me=Ze.get(Qe.path),Xe=(ct=oe[Qe.path])!=null?ct:Me?Jw(Me.rootBranchNames,Me.childNamesByParent,p,Qe.defaultBranch):new Set;return l.jsx("div",{className:On("relative z-0",ke&&Me?"mb-5":"mb-1"),children:l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:On("sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 py-1 transition-colors hover:bg-accent",pt?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[l.jsx("button",{type:"button",onClick:()=>{le(Pe=>{const ut=new Set(Pe);return ut.has(Qe.path)?ut.delete(Qe.path):ut.add(Qe.path),ut})},"aria-expanded":ke,"aria-label":`${ke?"Collapse":"Expand"} ${Qe.name}`,className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(eS,{open:ke})}),l.jsx("button",{type:"button",onClick:()=>{i(Qe.path)},className:On("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal",pt?"text-primary":"text-muted-foreground"),children:Qe.name}),l.jsxs("div",{className:"relative shrink-0",children:[l.jsx("button",{type:"button","aria-label":`Project actions for ${Qe.name}`,"aria-expanded":se===Qe.path,onClick:Pe=>{Pe.stopPropagation(),W(ut=>ut===Qe.path?null:Qe.path)},className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(ow,{className:"h-4 w-4 shrink-0"})}),se===Qe.path?l.jsxs("div",{role:"menu",className:"absolute right-0 top-full z-30 mt-1 w-40 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-lg",onClick:Pe=>Pe.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{W(null),u(Qe.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{W(null),c(Qe.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",children:"Remove"})]}):null]})]}),ke?ne&&Me?l.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:Me.rootBranchNames.map((Pe,ut)=>l.jsx(Am,{branchName:Pe,depth:0,isLast:ut===Me.rootBranchNames.length-1,branchByName:Me.branchByName,branchCommitPreviews:Me.branchCommitPreviewsFromLayout,childNamesByParent:Me.childNamesByParent,branchAnchorShaByName:Me.branchAnchorShaByName,expandedBranchNames:Xe,onToggleBranch:dt=>yt(Qe.path,dt),checkedOutBranchName:Me.checkedOutBranchName,ancestors:new Set,showCommits:$,getMergeTargetLabels:Me.getMergeTargetLabels,sourceBranchName:Pe,clusterKeyByCommitId:Me.clusterKeyByCommitId,isGridClusterOpen:Me.isGridClusterOpen,onToggleGridCluster:vt,onSelectCommit:async dt=>{pt||await i(Qe.path),k==null||k(dt)},onSelectBranch:async dt=>{pt||await i(Qe.path),M==null||M(dt)}},`${Qe.path}:${Pe}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},Qe.path)})})]})]})}const nS="git-visualizer",Kh="git-visualizer:projects",Dy=12,Ny=1400,sS=180,Ry="git-visualizer:sidebar-width",By="git-visualizer:sidebar-collapsed",Ly="git-visualizer:grid-clumps",Oy=432,zy=280,$y=640;function qa(t){return t==="/"?t:t.replace(/\/+$/,"")}function oS(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function iS(t){return md(t)===nS}function aS(){var Ki,Qi,Li,bi;const[t,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,w]=_.useState([]),[S,j]=_.useState([]),[k,M]=_.useState([]),[$,L]=_.useState({}),[N,Y]=_.useState([]),[H,X]=_.useState("main"),[U,Z]=_.useState(null),[le,oe]=_.useState([]),[je,ze]=_.useState(!1),[J,ue]=_.useState(""),[I,se]=_.useState(0),[W,K]=_.useState(1),[ge,R]=_.useState({}),[re,ie]=_.useState({}),[he,Te]=_.useState(null),[$e,Be]=_.useState(null),[tt,_t]=_.useState(null),[It,vt]=_.useState(!1),[yt,Ze]=_.useState(!1),[Yt,Qe]=_.useState(!1),[pt,ke]=_.useState(null),[ne,Me]=_.useState(!1),[Xe,Ye]=_.useState(!1),[ct,Pe]=_.useState("active"),[ut,dt]=_.useState(null),[bt,zt]=_.useState(null),[rt,V]=_.useState(!1),[Q,fe]=_.useState(null),[be,Je]=_.useState(!1),[Ge,De]=_.useState(null),[St,He]=_.useState(null),[Ft,Ct]=_.useState(!1),[nt,Ot]=_.useState(!1),[Pt,Kt]=_.useState(!1),[st,et]=_.useState(!1),[Dt,wt]=_.useState({}),[Nt,ft]=_.useState({}),[Bt,vn]=_.useState({}),[wn,_n]=_.useState({}),[fs,Yn]=_.useState({}),[An,kn]=_.useState([]),[In,un]=_.useState(!1),[Dn,ot]=_.useState(!1),[dn,no]=_.useState(!1),[Eo,hs]=_.useState(!1),[Es,Go]=_.useState(!1),[ks,uo]=_.useState("horizontal"),[so,fo]=_.useState(!1),[jn,qo]=_.useState(Oy),[Ps,Ns]=_.useState(!1),[ms,Oo]=_.useState({dragging:!1,lastEvent:"idle"}),ho=_.useRef(null),Rs=_.useRef(0),Hs=_.useRef(0),Nn=_.useRef(null),is=_.useRef(Oy),Mn=_.useRef(null),nn=_.useRef(null),To=iS(t)||!0,ps=_.useRef(!1),li=_.useRef(!1),ci=_.useRef(new Set),Ao=_.useRef([]),Ko=_.useRef([]),xs=_.useRef(null),_s=t!=null?t:"__no-repo__",Rn=(B,F)=>{try{const ee={opened:Object.fromEntries(Object.entries(B).map(([de,Ue])=>[de,Array.from(Ue)])),closed:Object.fromEntries(Object.entries(F).map(([de,Ue])=>[de,Array.from(Ue)]))};window.localStorage.setItem(Ly,JSON.stringify(ee))}catch{}};_.useEffect(()=>{var B,F;try{const ee=window.localStorage.getItem(Ly);if(!ee)return;const de=JSON.parse(ee);if(!de||typeof de!="object")return;const Ue={},it={},mt=de;for(const[Vt,gn]of Object.entries((B=mt.opened)!=null?B:{}))Array.isArray(gn)&&(Ue[Vt]=new Set(gn.filter(Ds=>typeof Ds=="string")));for(const[Vt,gn]of Object.entries((F=mt.closed)!=null?F:{}))Array.isArray(gn)&&(it[Vt]=new Set(gn.filter(Ds=>typeof Ds=="string")));R(Ue),ie(it)}catch{}},[]),_.useEffect(()=>{Rn(ge,re)},[re,ge]);const Bs=_.useMemo(()=>{var B;return(B=ge[_s])!=null?B:new Set},[_s,ge]),Pn=_.useMemo(()=>{var B;return(B=re[_s])!=null?B:new Set},[_s,re]),as=_.useCallback(B=>{R(F=>{var it;const ee=(it=F[_s])!=null?it:new Set,de=typeof B=="function"?B(ee):B,Ue={...F,[_s]:new Set(de)};return Rn(Ue,re),Ue})},[_s,re]),xi=_.useCallback(B=>{ie(F=>{var it;const ee=(it=F[_s])!=null?it:new Set,de=typeof B=="function"?B(ee):B,Ue={...F,[_s]:new Set(de)};return Rn(ge,Ue),Ue})},[_s,ge]),zo=_.useMemo(()=>c.map(B=>{var F,ee,de,Ue,it,mt,Vt,gn,Ds,bo,Un,Zt,cn,hn,Kn,ye,C,E,D,O,P,ae,we,Ne,Ve,Fe,lt,xt;return{...B,...(F=d[B.path])!=null?F:{},branches:(de=(ee=d[B.path])==null?void 0:ee.branches)!=null?de:[],mergeNodes:(it=(Ue=d[B.path])==null?void 0:Ue.mergeNodes)!=null?it:[],directCommits:(Vt=(mt=d[B.path])==null?void 0:mt.directCommits)!=null?Vt:[],unpushedDirectCommits:(Ds=(gn=d[B.path])==null?void 0:gn.unpushedDirectCommits)!=null?Ds:[],unpushedCommitShasByBranch:(Un=(bo=d[B.path])==null?void 0:bo.unpushedCommitShasByBranch)!=null?Un:{},checkedOutRef:(cn=(Zt=d[B.path])==null?void 0:Zt.checkedOutRef)!=null?cn:null,worktrees:(Kn=(hn=d[B.path])==null?void 0:hn.worktrees)!=null?Kn:[],stashes:(C=(ye=d[B.path])==null?void 0:ye.stashes)!=null?C:[],branchCommitPreviews:(D=(E=d[B.path])==null?void 0:E.branchCommitPreviews)!=null?D:{},laneByBranch:(P=(O=d[B.path])==null?void 0:O.laneByBranch)!=null?P:{},branchUniqueAheadCounts:(we=(ae=d[B.path])==null?void 0:ae.branchUniqueAheadCounts)!=null?we:{},defaultBranch:(Fe=(Ve=(Ne=d[B.path])==null?void 0:Ne.defaultBranch)!=null?Ve:B.branchName)!=null?Fe:"main",treeLoaded:(xt=(lt=d[B.path])==null?void 0:lt.loaded)!=null?xt:!1}}),[c,d]);_.useEffect(()=>{try{const B=localStorage.getItem(Kh);if(!B)return;const F=JSON.parse(B);if(!Array.isArray(F))return;const ee=F.filter(de=>typeof de=="object"&&de!==null&&typeof de.path=="string"&&typeof de.name=="string"&&typeof de.lastOpenedAt=="number");u(ee.slice(0,Dy))}catch{u([])}},[]),_.useEffect(()=>{li.current||t||c.length!==0&&(li.current=!0,Vs(c[0].path))},[c,t]);const Xi=_.useMemo(()=>b.reduce((B,F)=>(B[F.targetCommitSha]=F.targetBranch,B),{}),[b]);_.useEffect(()=>{t&&h(B=>{var F,ee;return{...B,[t]:{path:t,name:i||md(t),branches:g,mergeNodes:b,directCommits:S,unpushedDirectCommits:k,mergeTargetBranchByCommitSha:b.reduce((de,Ue)=>(de[Ue.targetCommitSha]=Ue.targetBranch,de),{}),unpushedCommitShasByBranch:$,checkedOutRef:U,worktrees:le,stashes:An,branchCommitPreviews:Nt,branchParentByName:Bt,laneByBranch:wn,branchUniqueAheadCounts:fs,defaultBranch:H,loaded:!0,cacheSchemaVersion:(ee=(F=B[t])==null?void 0:F.cacheSchemaVersion)!=null?ee:1,updatedAtMs:Date.now()}}})},[t,i,g,b,S,k,Xi,$,U,le,An,Nt,Bt,wn,fs,H]);async function Gt(B,F=!1){var de;const ee=qa(B);if(ee&&!ci.current.has(ee)&&!(!F&&((de=d[ee])!=null&&de.loaded))){ci.current.add(ee),y(!0);try{const Ue=await Ce("get_repo_visual_snapshot",{repoPath:ee,forceRefresh:F});h(it=>({...it,[ee]:Ue}))}finally{ci.current.delete(ee),ci.current.size===0&&y(!1)}}}_.useEffect(()=>{c.length!==0&&c.forEach(B=>{Gt(B.path),Ce("watch_repo",{repoPath:B.path}).catch(console.error)})},[c]),_.useEffect(()=>{let B=!1,F=null;return yc("git-activity",ee=>{if(B)return;const de=qa(ee.payload.repoPath);!de||de===t||Gt(de,!0)}).then(ee=>{B?ee():F=ee}).catch(console.error),()=>{B=!0,F&&F()}},[t]);function ui(B){u(F=>{const ee=qa(B.path);if(!ee)return F;const de={...B,path:ee},it=(F.some(mt=>mt.path===ee)?F.map(mt=>mt.path===ee?de:mt):[...F,de]).slice(-Dy);try{localStorage.setItem(Kh,JSON.stringify(it))}catch{}return it})}async function qn(B){const F=qa(B);if(F){ke(null);try{const[ee,de]=await Promise.all([Ce("get_repo_info",{repoPath:F}),Ce("get_default_branch",{repoPath:F}).catch(()=>"main")]);ui({path:F,name:ee.name,lastOpenedAt:Date.now(),branchName:de}),await Gt(F,!0)}catch(ee){ke(ee instanceof Error?ee.message:String(ee))}}}function Bi(B){var ee,de;const F=qa(B);if(F&&(u(Ue=>{const it=Ue.filter(mt=>mt.path!==F);try{localStorage.setItem(Kh,JSON.stringify(it))}catch{}return it}),h(Ue=>{if(!(F in Ue))return Ue;const it={...Ue};return delete it[F],it}),t===F)){const Ue=(de=(ee=c.find(it=>it.path!==F))==null?void 0:ee.path)!=null?de:null;Ue?Vs(Ue):(n(null),a(""),x([]),w([]),j([]),M([]),L({}),Z(null),oe([]),kn([]),ft({}),vn({}),_n({}),Yn({}))}}async function $o(B){const F=qa(B);if(F)try{await Ce("reveal_in_finder",{path:F})}catch(ee){ke(ee instanceof Error?ee.message:String(ee))}}const Io=()=>{(async()=>{var B,F;try{const ee=await Gv({directory:!0,multiple:!1,defaultPath:(F=(B=c[0])==null?void 0:B.path)!=null?F:void 0});typeof ee=="string"&&ee&&await qn(ee)}catch(ee){ke(ee instanceof Error?ee.message:String(ee))}})()};async function oo(B,F){const de=[];let Ue=0;for(;;){const it=await Ce("get_merge_nodes",{repoPath:B,branch:F,page:Ue,perPage:100});if(de.push(...it.nodes),!it.hasMore||it.nodes.length===0)break;Ue+=1}return de}async function Qo(B,F,ee){const de=Array.from(new Set([ee,...F.map(mt=>mt.name)].filter(mt=>!!mt)));if(de.length===0)return[];const Ue=await Promise.all(de.map(mt=>oo(B,mt).catch(()=>[]))),it=new Map;for(const mt of Ue)for(const Vt of mt){const gn=`${Vt.targetCommitSha}:${Vt.targetBranch}`;it.has(gn)||it.set(gn,Vt)}return Array.from(it.values())}const io=B=>B.map(F=>`${F.name}|${F.headSha}|${F.commitsAhead}|${F.commitsBehind}|${F.unpushedCommits}|${F.remoteSyncStatus}`).join("||"),Sn=B=>B.map(F=>F.fullSha).join("|"),mo=B=>{var F,ee;return B?`${(F=B.branchName)!=null?F:""}|${B.headSha}|${(ee=B.parentSha)!=null?ee:""}|${B.hasUncommittedChanges?1:0}`:"__none__"};async function rs(B,F){const ee=F!=null?F:H,[de,Ue,it,mt,Vt,gn]=await Promise.all([Ce("get_branches",{repoPath:B}),Ce("get_all_repo_commits",{repoPath:B}),Ce("get_unpushed_direct_commits",{repoPath:B,branch:ee}).catch(()=>[]),Ce("get_checked_out_ref",{repoPath:B}).catch(()=>null),Ce("list_worktrees",{repoPath:B}).catch(()=>[]),Ce("list_stashes",{repoPath:B}).catch(()=>[])]),Ds=await Qo(B,de,ee),bo=await Promise.all([ee,...de.map(Un=>Un.name)].map(async Un=>{const Zt=await Ce("get_branch_unpushed_commit_shas",{repoPath:B,branch:Un}).catch(()=>[]);return[Un,Zt]}));x(de),w(Ds),j(Ue),M(it),L(Object.fromEntries(bo)),Z(mt),oe(Vt),kn(gn)}async function bs(B){const[F,ee,de]=await Promise.all([Ce("get_branches",{repoPath:B}).catch(()=>[]),Ce("get_all_repo_commits",{repoPath:B}).catch(()=>[]),Ce("get_checked_out_ref",{repoPath:B}).catch(()=>null)]);return io(F)!==io(Ao.current)||Sn(ee)!==Sn(Ko.current)||mo(de)!==mo(xs.current)}async function po(B){He(null),Qe(!0);try{const[F,ee]=await Promise.all([Ce("get_repo_info",{repoPath:B}),Ce("get_default_branch",{repoPath:B})]);a(F.name),X(ee),n(B),await rs(B,ee),Wn(B),He({kind:"success",message:`Now targeting worktree at ${B}`})}catch(F){const ee=F instanceof Error?F.message:String(F);He({kind:"error",message:ee}),console.error("Failed to switch worktree:",ee)}finally{Qe(!1)}}async function rn(B,F){if(!(!t||je)){ze(!0),He(null);try{await Ce("remove_worktree",{repoPath:t,worktreePath:B,force:F}),await rs(t),He({kind:"success",message:`Removed worktree at ${B}`})}catch(ee){const de=ee instanceof Error?ee.message:String(ee);He({kind:"error",message:de}),console.error("Failed to remove worktree:",de)}finally{ze(!1)}}}function Us(B,F){var ee,de;a(F.name||md(B)),X(F.defaultBranch||"main"),x(F.branches),w(F.mergeNodes),j(F.directCommits),M(F.unpushedDirectCommits),L(F.unpushedCommitShasByBranch),Z(F.checkedOutRef),oe(F.worktrees),kn(F.stashes),ft(F.branchCommitPreviews),vn((ee=F.branchParentByName)!=null?ee:{}),_n((de=F.laneByBranch)!=null?de:{}),Yn(F.branchUniqueAheadCounts),n(B)}async function _o(B,F,ee){const de=ee==null?void 0:ee.forceRefresh,Ue=ee==null?void 0:ee.applyToActiveState;try{const[it,mt]=await Promise.all([Ce("get_repo_info",{repoPath:B}),Ce("get_default_branch",{repoPath:B})]);if(F!==Rs.current)return;const Vt=await Ce("get_repo_visual_snapshot",{repoPath:B,forceRefresh:de});if(F!==Rs.current)return;h(gn=>({...gn,[B]:Vt})),Ue&&(t===B||Rs.current),Wn(B)}catch(it){if(F!==Rs.current)return;console.error("Background snapshot refresh failed:",it)}}async function Vs(B){const F=++Rs.current,ee=qa(B);if(!ee)return;const de=d[ee];if(de!=null&&de.loaded){ke(null),Us(ee,de),ui({path:ee,name:de.name||md(ee),lastOpenedAt:Date.now(),branchName:de.defaultBranch}),Qe(!1),Ze(!1),_o(ee,F,{forceRefresh:!1,applyToActiveState:!1});return}if(Ze(!0),Qe(!0),ke(null),await new Promise(Ue=>setTimeout(Ue,15)),F===Rs.current)try{const[Ue,it]=await Promise.all([Ce("get_repo_info",{repoPath:ee}),Ce("get_default_branch",{repoPath:ee})]);if(F!==Rs.current)return;a(Ue.name),X(it);const mt=await Ce("get_repo_visual_snapshot",{repoPath:ee,forceRefresh:!0});if(F!==Rs.current)return;h(Vt=>({...Vt,[ee]:mt})),Us(ee,mt),ui({path:ee,name:Ue.name,lastOpenedAt:Date.now(),branchName:it}),Qe(!1),Ze(!1),Wn(ee)}catch(Ue){if(F!==Rs.current)return;console.error("Failed to load repo:",Ue),ke(Ue instanceof Error?Ue.message:String(Ue)),n(null),Ze(!1),Qe(!1)}}async function Wn(B){const F=++Hs.current;try{if(F!==Hs.current)return;V(!1),De(null);const ee=await Ce("get_github_info",{repoPath:B}),de=await Ce("get_github_auth_status");if(F!==Hs.current||(fe(de),!de.ghAvailable||!de.authenticated))return;const Ue=await Ce("get_open_prs",{owner:ee.owner,repo:ee.repo});if(F!==Hs.current)return;Y(Ue),V(!0)}catch(ee){if(F!==Hs.current)return;console.log("GitHub data not available:",ee),De(ee instanceof Error?ee.message:String(ee)),V(!1)}}_.useEffect(()=>{let B=null,F=!1;const ee=(()=>{try{return up().label}catch{return null}})(),de=async it=>{var Vt;const mt=(Vt=it==null?void 0:it.path)==null?void 0:Vt.trim();!mt||F||t!==mt&&await Vs(mt)};return(async()=>{ee==="main"&&(B=await yc("gitviz://open-repo",async mt=>{await de(mt.payload)}));const it=await Ce("take_pending_open_repo");await de(it)})(),()=>{F=!0,B&&B()}},[t]),_.useEffect(()=>{Ao.current=g},[g]),_.useEffect(()=>{Ko.current=S},[S]),_.useEffect(()=>{xs.current=U},[U]),_.useEffect(()=>{ps.current=Es},[Es]),_.useEffect(()=>{},[t,H,To]),_.useEffect(()=>{if(!t||!H||!To)return;Ce("watch_repo",{repoPath:t}).catch(console.error);let B=!1,F=!1,ee=!1,de=null;const Ue=async()=>{if(!B){if(ps.current){F=!0;return}if(ee){F=!0;return}ee=!0;try{if(!await bs(t)||B)return;await rs(t,H)}catch(mt){console.warn("Frozen git-activity refresh failed:",mt)}finally{ee=!1,F&&!B&&(F=!1,window.setTimeout(()=>{Ue()},0))}}},it=()=>{F=!0,Ue()};return yc("git-activity",mt=>{qa(mt.payload.repoPath)===t&&(Gt(t,!0),it())}).then(mt=>{B?mt():de=mt}).catch(console.error),()=>{B=!0,de&&de()}},[t,H,To]);async function Zo(){if(t){Je(!0),De(null);try{await Ce("authenticate_github");const B=await Ce("get_github_auth_status");fe(B),B.authenticated?await Wn(t):B.message&&De(B.message)}catch(B){De(B instanceof Error?B.message:String(B))}finally{Je(!1)}}}const ao=new Set(N.map(B=>B.branchName)),wo=14*864e5,Ls=Date.now(),Po=g.filter(B=>B.status==="stale"),Do=Po.filter(B=>ao.has(B.name)||Ls-new Date(B.lastCommitDate).getTime()<=wo),Qt=Po.filter(B=>!ao.has(B.name)&&Ls-new Date(B.lastCommitDate).getTime()>wo),Ys=B=>{var F;return Object.prototype.hasOwnProperty.call(fs,B.name)?Math.max(0,(F=fs[B.name])!=null?F:0):Math.max(0,B.commitsAhead)};_.useEffect(()=>{wt({}),nn.current=null,Je(!1),fe(null),De(null),Y([]),He(null)},[t]),_.useEffect(()=>{var gn,Ds,bo,Un;if(!t||!H){wt({}),ft({}),vn({}),_n({}),Yn({}),nn.current=null;return}const B=g.map(Zt=>{var cn;return`${Zt.name}:${Zt.headSha}:${(cn=Zt.parentBranch)!=null?cn:""}:${Zt.commitsAhead}`}).join("|"),F=b.map(Zt=>{var cn,hn;return`${Zt.fullSha}:${(hn=(cn=Zt.parentShas)==null?void 0:cn[1])!=null?hn:""}`}).join("|"),ee=`${t}|${H}|${B}|${F}`;if(nn.current===ee)return;nn.current=ee;const de={},Ue={};for(const Zt of g){if(Zt.name===H)continue;const cn=S.filter(hn=>hn.branch===Zt.name).map(hn=>{var Kn;return{fullSha:hn.fullSha,sha:hn.sha,parentSha:(Kn=hn.parentSha)!=null?Kn:null,message:hn.message,author:hn.author,date:hn.date,kind:"commit"}});de[Zt.name]=cn,Ue[Zt.name]=cn.length}const it=new Map;for(const Zt of S)it.set(Zt.fullSha,Zt.branch);const mt=Zt=>{if(!Zt)return null;const cn=it.get(Zt);if(cn)return cn;for(const[hn,Kn]of it.entries())if(hn.startsWith(Zt)||Zt.startsWith(hn))return Kn;return null},Vt={[H]:null};for(const Zt of g){if(Zt.name===H){Vt[Zt.name]=null;continue}const cn=S.filter(C=>C.branch===Zt.name),hn=new Set(cn.map(C=>C.fullSha)),Kn=(Ds=(gn=cn.filter(C=>{var D;const E=(D=C.parentSha)!=null?D:null;return!E||!hn.has(E)}).sort((C,E)=>{const D=new Date(C.date).getTime()-new Date(E.date).getTime();return D!==0?D:C.fullSha.localeCompare(E.fullSha)})[0])==null?void 0:gn.parentSha)!=null?Ds:null,ye=mt(Kn);Vt[Zt.name]=(Un=(bo=ye!=null?ye:Bt[Zt.name])!=null?bo:Zt.parentBranch)!=null?Un:null}wt({}),ft(de),vn(Vt),_n(Zt=>{const cn={};for(const hn of g){const Kn=Zt[hn.name];Kn!=null&&Number.isFinite(Kn)&&(cn[hn.name]=Kn)}return cn}),Yn(Ue)},[t,H,g,b,S,Bt]),_.useEffect(()=>{if(!St){Ct(!1);return}Ct(!0);const B=window.setTimeout(()=>{Ct(!1)},Ny),F=window.setTimeout(()=>{He(null)},Ny+sS);return()=>{window.clearTimeout(B),window.clearTimeout(F)}},[St]),_.useEffect(()=>{if(!t||g.length===0)return;const B=de=>new Promise(Ue=>setTimeout(Ue,de));async function F(){const Ue=`${await Ce("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Ue}`),await B(800),await Ce("screenshot",{path:`${Ue}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Ue}`)}const ee=de=>{if((de.metaKey||de.ctrlKey)&&!de.shiftKey&&!de.altKey&&de.key.toLowerCase()==="b"){de.preventDefault(),Ns(Ue=>!Ue);return}(de.metaKey||de.ctrlKey)&&de.shiftKey&&de.key==="S"&&(de.preventDefault(),F())};return window.addEventListener("keydown",ee),()=>window.removeEventListener("keydown",ee)},[t,i,g]);function Ts(){Ye(!0),setTimeout(()=>{Me(!1),Ye(!1),Pe("active"),zt(null)},100)}async function As(B){if(!t)return;He(null);const F=/^STASH:(\d+)$/.exec(B.commitSha);if(F){try{const ee=parseInt(F[1],10),de=await Ce("apply_stash_restore",{repoPath:t,stashIndex:ee});Z(de),await rs(t);const Ue=`Stash ${ee+1}`,it=de.branchName?` on branch ${de.branchName}`:" at the stash base (detached HEAD)";He({kind:"success",message:`Restored ${Ue}${it}; stash applied and dropped (uncommitted changes).`})}catch(ee){const de=ee instanceof Error?ee.message:String(ee);He({kind:"error",message:de}),console.error("Failed to apply stash:",de)}return}if(B.branchName){const ee=(Ue,it)=>{const mt=Ue.replace(/\\/g,"/").replace(/\/+$/,""),Vt=it.replace(/\\/g,"/").replace(/\/+$/,"");return mt===Vt||mt.toLowerCase()===Vt.toLowerCase()},de=le.find(Ue=>Ue.pathExists===!1||Ue.isCurrent||t&&ee(Ue.path,t)?!1:Ue.branchName===B.branchName);if(de){await po(de.path);return}}try{let ee="";(await Ce("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await Ce("stash_push",{repoPath:t,includeUntracked:!0}),ee="Stashed local changes (including untracked), then ",await rs(t));const Ue=B.branchName?await Ce("checkout_branch",{repoPath:t,branchName:B.branchName}):await Ce("checkout_ref",{repoPath:t,refName:B.commitSha}),it=await Ce("get_checked_out_ref",{repoPath:t}).catch(()=>Ue);Z(it),await rs(t);const mt=it.branchName?it.branchName:`${it.headSha.slice(0,7)} (detached)`;He({kind:"success",message:`${ee}Checked out ${mt}`})}catch(ee){const de=ee instanceof Error?ee.message:String(ee);He({kind:"error",message:de}),console.error("Failed to checkout commit:",de)}}async function go(){if(!(!t||In)){He(null),un(!0);try{if(!(await Ce("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){He({kind:"error",message:"No local changes to stash."});return}await Ce("stash_push",{repoPath:t,includeUntracked:!0}),await rs(t),He({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(B){const F=B instanceof Error?B.message:String(B);He({kind:"error",message:F}),console.error("Failed to stash:",F)}finally{un(!1)}}}async function Ho(B){if(!t||Dn)return!1;const F=B.trim();if(!F)return He({kind:"error",message:"Enter a commit message."}),!1;He(null),ot(!0);try{if(!(await Ce("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return He({kind:"error",message:"No local changes to commit."}),!1;const de=await Ce("commit_working_tree",{repoPath:t,message:F});return Z(de),await rs(t),He({kind:"success",message:"Committed local changes."}),!0}catch(ee){const de=ee instanceof Error?ee.message:String(ee);return He({kind:"error",message:de}),console.error("Failed to commit:",de),!1}finally{ot(!1)}}async function yo(){if(!t||dn)return!1;He(null),no(!0);try{if(!(await Ce("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return He({kind:"error",message:"No local changes to stage."}),!1;const F=await Ce("stage_working_tree",{repoPath:t});return Z(F),await rs(t),He({kind:"success",message:"Staged all changes."}),!0}catch(B){const F=B instanceof Error?B.message:String(B);return He({kind:"error",message:F}),console.error("Failed to stage:",F),!1}finally{no(!1)}}async function js(B,F){if(!(!t||Eo)){hs(!0),He(null);try{const ee=/^STASH:(\d+)$/.exec(B);let de;if(ee){const Ue=parseInt(ee[1],10);de=await Ce("move_stash_to_new_branch",{repoPath:t,stashIndex:Ue,branchName:F})}else de=await Ce("create_branch_from_uncommitted",{repoPath:t,branchName:F});Z(de),await rs(t),He({kind:"success",message:`Moved to new branch "${F}"`})}catch(ee){const de=ee instanceof Error?ee.message:String(ee);He({kind:"error",message:de}),console.error("Failed to create branch from node:",de)}finally{hs(!1)}}}async function xo(B){if(!(!t||Eo)){hs(!0),He(null);try{const F=await Ce("create_root_branch",{repoPath:t,branchName:B});Z(F),await rs(t),He({kind:"success",message:`Created new root branch "${B}"`})}catch(F){const ee=F instanceof Error?F.message:String(F);He({kind:"error",message:ee}),console.error("Failed to create root branch:",ee)}finally{hs(!1)}}}async function qs(B,F){if(!t)return;const ee=Array.from(new Set(B.filter(de=>!!de&&de!==F)));if(ee.length!==0){He(null),Ot(!0);try{let de=null;for(const Ue of ee)de=await Ce("merge_ref_into_branch",{repoPath:t,sourceRef:Ue,targetBranch:F});await rs(t),de&&Z(de),He({kind:"success",message:ee.length===1?`Merged ${ee[0].slice(0,7)} into ${F}`:`Merged ${ee.length} commits into ${F}`})}catch(de){const Ue=de instanceof Error?de.message:String(de);He({kind:"error",message:Ue}),console.error("Failed to merge refs into branch:",Ue)}finally{Ot(!1)}}}async function T(){if(!(!t||Pt)){He(null),Kt(!0);try{const B=await Ce("push_all_unpushed_branches",{repoPath:t});await rs(t),He({kind:"success",message:B.length>0?B.length===1?`Pushed ${B[0].branchName}`:`Pushed ${B.length} branches`:"Everything local is already pushed."})}catch(B){const F=B instanceof Error?B.message:String(B);He({kind:"error",message:F}),console.error("Failed to push all branches:",F)}finally{Kt(!1)}}}async function q(){if(!(!t||Pt)){He(null),Kt(!0);try{const B=await Ce("push_current_branch",{repoPath:t});await rs(t),He({kind:"success",message:`Pushed ${B.branchName}`})}catch(B){const F=B instanceof Error?B.message:String(B);He({kind:"error",message:F}),console.error("Failed to push current branch:",F)}finally{Kt(!1)}}}async function pe(B){var ee;if(!t||Pt)return;const F=Array.from(new Map(B.filter(de=>de.branchName&&de.targetSha).map(de=>[de.branchName,de])).values());if(F.length!==0){He(null),Kt(!0);try{for(const de of F)await Ce("push_branch",{repoPath:t,branchName:de.branchName,targetSha:de.targetSha});await rs(t),He({kind:"success",message:F.length===1?`Pushed ${F[0].branchName} through ${(ee=F[0].targetSha)==null?void 0:ee.slice(0,7)}`:`Pushed ${F.length} selected commit ranges`})}catch(de){const Ue=de instanceof Error?de.message:String(de);He({kind:"error",message:Ue}),console.error("Failed to push selected commits:",Ue)}finally{Kt(!1)}}}async function Se(B){var it;if(!t||st)return;const F=Array.from(new Set(B.branchNames.filter(mt=>mt&&mt!==H))),ee=!!B.discardUncommittedChanges,de=(it=B.stashIndices)!=null?it:[],Ue=Array.from(new Set(de)).sort((mt,Vt)=>Vt-mt);if(!(F.length===0&&!ee&&Ue.length===0)){He(null),et(!0);try{for(const gn of Ue)await Ce("stash_drop",{repoPath:t,stashIndex:gn});const mt=F.length>0||ee?await Ce("delete_selected_elements",{repoPath:t,branchNames:F,discardUncommittedChanges:ee}):{deletedBranches:[],discardedUncommittedChanges:!1};await rs(t);const Vt=[];Ue.length>0&&Vt.push(Ue.length===1?`removed stash ${Ue[0]+1}`:`removed ${Ue.length} stashes`),mt.discardedUncommittedChanges&&Vt.push("discarded local uncommitted changes"),mt.deletedBranches.length>0&&Vt.push(mt.deletedBranches.length===1?`deleted ${mt.deletedBranches[0]}`:`deleted ${mt.deletedBranches.length} branches`),He({kind:"success",message:Vt.length>0?Vt.join(" and "):"Nothing to delete."})}catch(mt){const Vt=mt instanceof Error?mt.message:String(mt);He({kind:"error",message:Vt}),console.error("Failed to delete selected elements:",Vt)}finally{et(!1)}}}function qe(B){zt(B),dt(F=>{var ee;return{branch:B,seq:((ee=F==null?void 0:F.seq)!=null?ee:0)+1}})}function at(B){B&&(_t(B),se(F=>F+1))}function Ut(B){B&&(ue(B),se(F=>F+1))}_.useEffect(()=>{var ee;const B=U!=null&&U.hasUncommittedChanges?"WORKING_TREE":(ee=U==null?void 0:U.headSha)!=null?ee:null;if(!B)return;const F=`${t!=null?t:"__no-repo__"}|${ks}|${B}`;ho.current!==F&&(ho.current=F,_t(B),se(de=>de+1))},[U==null?void 0:U.hasUncommittedChanges,U==null?void 0:U.headSha,ks,t]),_.useEffect(()=>{ho.current=null},[t]);const{enrichedBranches:Lt,enrichedBranchCommitPreviews:At,enrichedBranchUniqueAheadCounts:Ke,enrichedDirectCommits:Jt}=_.useMemo(()=>{var ae,we,Ne,Ve;const B=Gx(An,g,S,Nt,fs,H);let F=B.branches,ee=B.directCommits,de=B.branchCommitPreviews,Ue=B.branchUniqueAheadCounts;if(!(U!=null&&U.hasUncommittedChanges))return{enrichedBranches:F,enrichedDirectCommits:ee,enrichedBranchCommitPreviews:de,enrichedBranchUniqueAheadCounts:Ue};const it=U.headSha||U.parentSha||null,mt=(we=(ae=ee[0])==null?void 0:ae.fullSha)!=null?we:null,Vt=(Fe,lt)=>!Fe||!lt?!1:Fe===lt||Fe.startsWith(lt)||lt.startsWith(Fe),gn=[{name:H,headSha:mt!=null?mt:"",isDefault:!0},...F.map(Fe=>({name:Fe.name,headSha:Fe.headSha,isDefault:!1}))],Ds=U.branchName?gn.find(Fe=>Fe.name===U.branchName):void 0,bo=it?gn.filter(Fe=>Vt(Fe.headSha,it)):[],Un=(Ne=Ds!=null?Ds:bo.find(Fe=>Fe.isDefault))!=null?Ne:bo[0],Zt=!!(Un&&it&&Vt(Un.headSha,it)),cn=Un&&!Un.isDefault?F.find(Fe=>Fe.name===Un.name):void 0,hn=(()=>{var lt;if(!it)return null;const Fe=ee.find(xt=>Vt(xt.fullSha,it)||Vt(xt.sha,it));if(Fe!=null&&Fe.date)return Fe.date;if(cn){const xt=((lt=de[cn.name])!=null?lt:[]).find(Et=>Vt(Et.fullSha,it)||Vt(Et.sha,it));if(xt!=null&&xt.date)return xt.date}return null})(),Kn=hn?new Date(hn).getTime():Number.NaN,ye=Date.now(),C=Number.isFinite(Kn)?Math.max(ye,Kn+1):ye,E=new Date(C).toISOString(),D={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:it,message:"Local uncommitted changes",author:"You",date:E,kind:"uncommitted"},O={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:it,childShas:[],branch:H,message:"Local uncommitted changes",author:"You",date:E,kind:"uncommitted"};if(Zt&&(Un!=null&&Un.isDefault))return{enrichedBranches:F,enrichedBranchCommitPreviews:de,enrichedBranchUniqueAheadCounts:Ue,enrichedDirectCommits:[...ee,O]};if(Zt&&cn)return{enrichedBranches:F.map(lt=>lt.name===cn.name?{...lt,commitsAhead:lt.commitsAhead+1,unpushedCommits:lt.unpushedCommits+1,lastCommitDate:E,headSha:"WORKING_TREE"}:lt),enrichedDirectCommits:ee,enrichedBranchCommitPreviews:{...de,[cn.name]:[D,...de[cn.name]||[]]},enrichedBranchUniqueAheadCounts:{...Ue,[cn.name]:Math.max(0,(Ve=Object.prototype.hasOwnProperty.call(Ue,cn.name)?Ue[cn.name]:cn.commitsAhead)!=null?Ve:0)+1}};const P={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:E,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:it!=null?it:void 0,parentBranch:(Un==null?void 0:Un.name)||U.branchName||H};return{enrichedBranches:[P,...F],enrichedBranchCommitPreviews:{...de,[P.name]:[D]},enrichedBranchUniqueAheadCounts:{...Ue,[P.name]:1},enrichedDirectCommits:ee}},[g,Nt,fs,U,H,S,An]),sn=_.useMemo(()=>{const B={...Bt};return B[H]=null,B},[Bt,H,Lt]),En=_.useMemo(()=>{var B;return(B=gw(Lt,H,sn,wn))!=null?B:dp(Lt,H,At,sn)},[Lt,H,At,sn,wn]),Hn=_.useMemo(()=>Mc({lanes:En,branches:Lt,mergeNodes:b,directCommits:Jt,unpushedDirectCommits:k,defaultBranch:H,branchCommitPreviews:At,branchParentByName:sn,branchUniqueAheadCounts:Ke,manuallyOpenedClumps:Bs,manuallyClosedClumps:Pn,isDebugOpen:!1,gridSearchQuery:J,gridFocusSha:tt,checkedOutRef:U!=null?U:null,orientation:ks}),[En,Lt,b,Jt,k,H,At,sn,Ke,Bs,Pn,J,tt,(Ki=U==null?void 0:U.headSha)!=null?Ki:null,(Qi=U==null?void 0:U.branchName)!=null?Qi:null,ks]),on=_.useMemo(()=>{var B;return tt&&(B=Hn.clusterKeyByCommitId.get(tt))!=null?B:null},[Hn.clusterKeyByCommitId,tt]),ls=_.useMemo(()=>{if(!on||Pn.has(on))return Bs;const B=new Set(Bs);return B.add(on),B},[Pn,Bs,on]),Ws=_.useMemo(()=>{if(!on)return Pn;const B=new Set(Pn);return B.delete(on),B},[Pn,on]),Jo=_.useMemo(()=>Mc({lanes:En,branches:Lt,mergeNodes:b,directCommits:Jt,unpushedDirectCommits:k,defaultBranch:H,branchCommitPreviews:At,branchParentByName:sn,branchUniqueAheadCounts:Ke,manuallyOpenedClumps:ls,manuallyClosedClumps:Ws,isDebugOpen:!1,gridSearchQuery:J,gridFocusSha:tt,checkedOutRef:U!=null?U:null,orientation:ks}),[En,Lt,b,Jt,k,H,At,sn,Ke,ls,Ws,J,tt,(Li=U==null?void 0:U.headSha)!=null?Li:null,(bi=U==null?void 0:U.branchName)!=null?bi:null,ks]);_.useEffect(()=>{try{const B=window.localStorage.getItem(Ry);if(B){const ee=Number(B);Number.isFinite(ee)&&qo(Math.min($y,Math.max(zy,ee)))}const F=window.localStorage.getItem(By);F!=null&&Ns(F==="true")}catch{}},[]),_.useEffect(()=>{is.current=jn},[jn]),_.useEffect(()=>{const B=Mn.current;B&&(B.style.width=Ps?"0px":`${jn}px`)},[jn,Ps]),_.useEffect(()=>{try{window.localStorage.setItem(By,String(Ps))}catch{}},[Ps]);const ei=B=>{const F=Nn.current;if(!F)return;const ee=F.startWidth+(B-F.startX);F.pendingWidth=Math.min($y,Math.max(zy,ee));const de=Mn.current;de&&(de.style.width=`${F.pendingWidth}px`)},Gi=(B,F)=>{const ee=Nn.current;if(ee&&!(F!=null&&ee.pointerId!==F)){Nn.current=null,Oo({dragging:!1,lastEvent:B}),document.body.style.cursor="",document.body.style.userSelect="",qo(ee.pendingWidth);try{window.localStorage.setItem(Ry,String(ee.pendingWidth))}catch{}}},ja=B=>{B.button===0&&(B.preventDefault(),Oo({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:B.pointerId,clientX:B.clientX,width:is.current}),Nn.current={startX:B.clientX,startWidth:is.current,pendingWidth:is.current,pointerId:B.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",B.currentTarget.setPointerCapture(B.pointerId))},qi=B=>{const F=Nn.current;!F||F.pointerId!==B.pointerId||(ms.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:B.clientX}),Oo(ee=>ee.dragging?{dragging:!0,lastEvent:"move"}:ee),ei(B.clientX))},No=B=>{if(Nn.current){console.debug("[sidebar-resize] pointerup",{pointerId:B.pointerId});try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}Gi("pointerup",B.pointerId)}},or=B=>{if(Nn.current){console.debug("[sidebar-resize] pointercancel",{pointerId:B.pointerId});try{B.currentTarget.releasePointerCapture(B.pointerId)}catch{}Gi("pointercancel",B.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:Mn,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:Ps?64:jn},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[90] inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":Ps?"Open sidebar":"Collapse sidebar",onClick:()=>Ns(B=>!B),children:Ps?l.jsx(lw,{className:"h-4 w-4 shrink-0"}):l.jsx(aw,{className:"h-4 w-4 shrink-0"})}),l.jsx(tS,{className:oS("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:Ps,projects:zo,activeProjectPath:t,onSelectProject:Vs,onAddProject:Io,onRemoveProject:Bi,onRevealProjectInFinder:$o,projectLoading:yt||p,projectError:pt,checkedOutRef:U,showCommits:It,onToggleShowCommits:()=>vt(B=>!B),manuallyOpenedClumpsByProject:ge,manuallyClosedClumpsByProject:re,manuallyOpenedClumps:ls,manuallyClosedClumps:Ws,setManuallyOpenedClumps:as,setManuallyClosedClumps:xi,gridLayoutModel:Jo,onSelectCommit:at,onSelectBranch:Ut}),Ps?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:ja,onPointerMove:qi,onPointerUp:No,onPointerCancel:or,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(Xw,{branches:Lt,mergeNodes:b,directCommits:Jt,unpushedDirectCommits:k,unpushedCommitShasByBranch:$,defaultBranch:H,branchCommitPreviews:At,branchParentByName:sn,branchUniqueAheadCounts:Ke,gridSearchQuery:J,gridSearchJumpToken:I,gridSearchJumpDirection:W,gridFocusSha:tt,onGridSearchResultCountChange:Te,onGridSearchResultIndexChange:Be,onGridSearchFocusChange:_t,checkedOutRef:U,onCommitClick:As,onMergeRefsIntoBranch:qs,mergeInProgress:nt,onPushAllBranches:T,onPushCurrentBranch:q,onPushCommitTargets:pe,pushInProgress:Pt,onDeleteSelection:Se,deleteInProgress:st,worktrees:le,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:rn,removeWorktreeInProgress:je,onSwitchToWorktree:po,onStashLocalChanges:go,stashInProgress:In,stashDisabled:!1,onCommitLocalChanges:Ho,commitInProgress:Dn,commitDisabled:!1,onStageAllChanges:yo,stageInProgress:dn,onCreateBranchFromNode:js,onCreateRootBranch:xo,createBranchFromNodeInProgress:Eo,isDebugOpen:so,onDebugClose:()=>fo(!1),onInteractionChange:Go,manuallyOpenedClumps:ls,manuallyClosedClumps:Ws,setManuallyOpenedClumps:as,setManuallyClosedClumps:xi,layoutModel:Jo,orientation:ks,gridHudProps:{githubAuthStatus:Q,githubAuthLoading:be,onGitHubAuthSetup:Zo,gridSearchQuery:J,setGridSearchQuery:ue,gridSearchResultCount:he,gridSearchResultIndex:$e,setGridSearchJumpDirection:K,setGridSearchJumpToken:se,mapGridOrientation:ks,setMapGridOrientation:uo,setIsGridDebugOpen:fo,githubAuthMessage:Ge,commitSwitchFeedback:St,isCommitSwitchFeedbackVisible:Ft}})]}),ne&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${Xe?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Ts,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Pe("active"),className:`text-xs font-medium transition-colors ${ct==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[Do.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Pe("inactive"),className:`text-xs font-medium transition-colors ${ct==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Qt.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(ct==="active"?Do:Qt).map(B=>{const F=(bt==null?void 0:bt.name)===B.name,ee=Ys(B);return l.jsxs("button",{onClick:()=>qe(B),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${F?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:B.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[ee>0&&`${ee} ahead`,ee>0&&B.commitsBehind>0&&", ",B.commitsBehind>0&&`${B.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},B.name)})})]})]})})})}var Bc=Lx(),rS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,uS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=cS}var ss=uS,dS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),fS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),hS=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),mS=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ss.iconState} ${n?ss.hiddenScaled:ss.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ss.iconState} ${n?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),pS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ss.iconStateFast} ${i?ss.visibleScaled:u?ss.sending:ss.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ss.iconStateFast} ${a?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconStateFast} ${c?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},_S=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFade} ${n?ss.visible:ss.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconFade} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),gS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFadeFast} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ss.iconFadeFast} ${n?ss.visible:ss.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),yS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),xS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),qx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),bS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),vS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),wS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),SS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),CS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),kS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),jS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Kx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Qh=Kx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Zh="__agentation_freeze";function MS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Zh]||(t[Zh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Zh]}var fn=MS();typeof window<"u"&&!fn.installed&&(fn.origSetTimeout=window.setTimeout.bind(window),fn.origSetInterval=window.setInterval.bind(window),fn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?fn.origSetTimeout(t,n):fn.origSetTimeout((...a)=>{fn.frozen?fn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?fn.origSetInterval(t,n):fn.origSetInterval((...a)=>{fn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>fn.origRAF(n=>{fn.frozen?fn.frozenRAFQueue.push(t):t(n)}),fn.installed=!0);var Ht=fn.origSetTimeout,ES=fn.origSetInterval,ul=fn.origRAF;function TS(t){return t?Kx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function AS(){if(typeof document>"u"||fn.frozen)return;fn.frozen=!0,fn.frozenTimeoutQueue=[],fn.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Qh},
    *${Qh}::before,
    *${Qh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),fn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;TS(i)||(n.pause(),fn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Iy(){var i;if(typeof document>"u"||!fn.frozen)return;fn.frozen=!1;const t=fn.frozenTimeoutQueue;fn.frozenTimeoutQueue=[];for(const a of t)fn.origSetTimeout(()=>{if(fn.frozen){fn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=fn.frozenRAFQueue;fn.frozenRAFQueue=[];for(const a of n)fn.origRAF(c=>{if(fn.frozen){fn.frozenRAFQueue.push(a);return}a(c)});for(const a of fn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}fn.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Jh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},j){const[k,M]=_.useState(u),[$,L]=_.useState(!1),[N,Y]=_.useState("initial"),[H,X]=_.useState(!1),[U,Z]=_.useState(!1),le=_.useRef(null),oe=_.useRef(null),je=_.useRef(null),ze=_.useRef(null);_.useEffect(()=>{b&&N!=="exit"&&Y("exit")},[b,N]),_.useEffect(()=>{Ht(()=>{Y("enter")},0);const K=Ht(()=>{Y("entered")},200),ge=Ht(()=>{const R=le.current;R&&(Jh(R),R.selectionStart=R.selectionEnd=R.value.length,R.scrollTop=R.scrollHeight)},50);return()=>{clearTimeout(K),clearTimeout(ge),je.current&&clearTimeout(je.current),ze.current&&clearTimeout(ze.current)}},[]);const J=_.useCallback(()=>{ze.current&&clearTimeout(ze.current),L(!0),ze.current=Ht(()=>{L(!1),Jh(le.current)},250)},[]);_.useImperativeHandle(j,()=>({shake:J}),[J]);const ue=_.useCallback(()=>{Y("exit"),je.current=Ht(()=>{p()},150)},[p]),I=_.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),se=_.useCallback(K=>{K.stopPropagation(),!K.nativeEvent.isComposing&&(K.key==="Enter"&&!K.shiftKey&&(K.preventDefault(),I()),K.key==="Escape"&&ue())},[I,ue]),W=[ds.popup,w?ds.light:"",N==="enter"?ds.enter:"",N==="entered"?ds.entered:"",N==="exit"?ds.exit:"",$?ds.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:oe,className:W,"data-annotation-popup":!0,style:g,onClick:K=>K.stopPropagation(),children:[l.jsxs("div",{className:ds.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:ds.headerToggle,onClick:()=>{const K=U;Z(!U),K&&Ht(()=>Jh(le.current),0)},type:"button",children:[l.jsx("svg",{className:`${ds.chevron} ${U?ds.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ds.element,children:n})]}):l.jsx("span",{className:ds.element,children:n}),i&&l.jsx("span",{className:ds.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${ds.stylesWrapper} ${U?ds.expanded:""}`,children:l.jsx("div",{className:ds.stylesInner,children:l.jsx("div",{className:ds.stylesBlock,children:Object.entries(S).map(([K,ge])=>l.jsxs("div",{className:ds.styleLine,children:[l.jsx("span",{className:ds.styleProperty,children:K.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ds.styleValue,children:ge}),";"]},K))})})}),a&&l.jsxs("div",{className:ds.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:le,className:ds.textarea,style:{borderColor:H?x:void 0},placeholder:c,value:k,onChange:K=>M(K.target.value),onFocus:()=>X(!0),onBlur:()=>X(!1),rows:2,onKeyDown:se}),l.jsxs("div",{className:ds.actions,children:[y&&l.jsx("div",{className:ds.deleteWrapper,children:l.jsx("button",{className:ds.deleteButton,onClick:y,type:"button",children:l.jsx(CS,{size:22})})}),l.jsx("button",{className:ds.cancel,onClick:ue,children:"Cancel"}),l.jsx("button",{className:ds.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:I,disabled:!k.trim(),children:d})]})]})}),DS=({content:t,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const j=y.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Ht(()=>{c(!0)},500)},S=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Ht(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Bc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},NS=`.styles-module__tooltip___mcXL2 {
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
}`,RS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=NS}var Py=RS,Mr=({content:t})=>l.jsx(DS,{className:Py.tooltip,content:t,children:l.jsx(hS,{className:Py.tooltipIcon})}),kt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Qx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...kt.navigation},{type:"header",label:"Header",...kt.header},{type:"hero",label:"Hero",...kt.hero},{type:"section",label:"Section",...kt.section},{type:"sidebar",label:"Sidebar",...kt.sidebar},{type:"footer",label:"Footer",...kt.footer},{type:"modal",label:"Modal",...kt.modal},{type:"banner",label:"Banner",...kt.banner},{type:"drawer",label:"Drawer",...kt.drawer},{type:"popover",label:"Popover",...kt.popover},{type:"divider",label:"Divider",...kt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...kt.card},{type:"text",label:"Text",...kt.text},{type:"image",label:"Image",...kt.image},{type:"video",label:"Video",...kt.video},{type:"table",label:"Table",...kt.table},{type:"grid",label:"Grid",...kt.grid},{type:"list",label:"List",...kt.list},{type:"chart",label:"Chart",...kt.chart},{type:"codeBlock",label:"Code Block",...kt.codeBlock},{type:"map",label:"Map",...kt.map},{type:"timeline",label:"Timeline",...kt.timeline},{type:"calendar",label:"Calendar",...kt.calendar},{type:"accordion",label:"Accordion",...kt.accordion},{type:"carousel",label:"Carousel",...kt.carousel},{type:"logo",label:"Logo",...kt.logo},{type:"faq",label:"FAQ",...kt.faq},{type:"gallery",label:"Gallery",...kt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...kt.button},{type:"input",label:"Input",...kt.input},{type:"search",label:"Search",...kt.search},{type:"form",label:"Form",...kt.form},{type:"tabs",label:"Tabs",...kt.tabs},{type:"dropdown",label:"Dropdown",...kt.dropdown},{type:"toggle",label:"Toggle",...kt.toggle},{type:"stepper",label:"Stepper",...kt.stepper},{type:"rating",label:"Rating",...kt.rating},{type:"fileUpload",label:"File Upload",...kt.fileUpload},{type:"checkbox",label:"Checkbox",...kt.checkbox},{type:"radio",label:"Radio",...kt.radio},{type:"slider",label:"Slider",...kt.slider},{type:"datePicker",label:"Date Picker",...kt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...kt.avatar},{type:"badge",label:"Badge",...kt.badge},{type:"tag",label:"Tag",...kt.tag},{type:"breadcrumb",label:"Breadcrumb",...kt.breadcrumb},{type:"pagination",label:"Pagination",...kt.pagination},{type:"progress",label:"Progress",...kt.progress},{type:"alert",label:"Alert",...kt.alert},{type:"toast",label:"Toast",...kt.toast},{type:"notification",label:"Notification",...kt.notification},{type:"tooltip",label:"Tooltip",...kt.tooltip},{type:"stat",label:"Stat",...kt.stat},{type:"skeleton",label:"Skeleton",...kt.skeleton},{type:"chip",label:"Chip",...kt.chip},{type:"icon",label:"Icon",...kt.icon},{type:"spinner",label:"Spinner",...kt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...kt.pricing},{type:"testimonial",label:"Testimonial",...kt.testimonial},{type:"cta",label:"CTA",...kt.cta},{type:"productCard",label:"Product Card",...kt.productCard},{type:"profile",label:"Profile",...kt.profile},{type:"feature",label:"Feature",...kt.feature},{type:"team",label:"Team",...kt.team},{type:"login",label:"Login",...kt.login},{type:"contact",label:"Contact",...kt.contact}]}],Wi={};for(const t of Qx)for(const n of t.items)Wi[n.type]=n;function Ie({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Gn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Xo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function BS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Gn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Ie,{w:t*.06}),l.jsx(Ie,{w:t*.07}),l.jsx(Ie,{w:t*.05}),l.jsx(Ie,{w:t*.06})]}),l.jsx(Gn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function LS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ie,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ie,{w:t*.6}),l.jsx(Ie,{w:t*.4}),l.jsx(Gn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function OS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ie,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Gn,{w:10,h:10,radius:2}),l.jsx(Ie,{w:t*(.4+c*17%30/100)})]},c))]})}function zS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"70%",h:2}),l.jsx(Ie,{w:"60%",h:2})]},c))})}function $S({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"90%"}),l.jsx(Ie,{w:"70%"}),l.jsx(Ie,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Gn,{w:70,h:26,radius:4}),l.jsx(Gn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function IS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:4,strong:!0}),l.jsx(Ie,{w:"95%",h:2}),l.jsx(Ie,{w:"85%",h:2}),l.jsx(Ie,{w:"50%",h:2})]})]})}function PS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ie,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ie,{w:`${70+u*13%25}%`,h:2},u))]})}function HS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function US({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function VS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Xo,{size:8}),l.jsx(Ie,{w:`${55+c*17%35}%`,h:2})]},c))})}function YS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ie,{w:Math.max(20,t*.5),h:3,strong:!0})})}function WS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ie,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ie,{w:"40%",h:2})})]})}function FS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:60+c*17%30,h:2}),l.jsx(Gn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Gn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function XS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ie,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"65%",h:2}),l.jsx(Ie,{w:"75%",h:2})]})]})}function GS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function qS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0})})}function KS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ie,{w:t*.35})]})}function QS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx(Ie,{w:t*.7}),l.jsx(Ie,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4})]})]})}function ZS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Gn,{w:"100%",h:"100%",radius:4},u))})}function JS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ie,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ie,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function e4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function t4({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Xo,{size:Math.min(14,n*.4)}),l.jsx(Ie,{w:"50%",h:2})]})}function n4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Xo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function s4({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function o4({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Gn,{w:a,h:`${d}%`,radius:2},u)})})}function i4({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function a4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function r4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ie,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function l4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Gn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function c4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function u4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ie,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function d4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Xo,{size:5}),l.jsx(Xo,{size:5}),l.jsx(Xo,{size:5})]})]})}function f4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(Ie,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Xo,{size:5}),l.jsx(Ie,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Gn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function h4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"75%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Xo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ie,{w:60,h:3,strong:!0}),l.jsx(Ie,{w:40,h:2})]})]})]})}function m4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ie,{w:t*.35}),l.jsx(Gn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function p4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"40%",h:3,strong:!0}),l.jsx(Ie,{w:"70%",h:2})]})]})}function _4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(Gn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function g4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ie,{w:t*.5,h:2}),l.jsx(Ie,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ie,{w:t*.3,h:2})]})}function y4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function x4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function b4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function v4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function w4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Xo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function S4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ie,{w:t*.4,h:2}),l.jsx(Ie,{w:t*.25,h:2})]})}function C4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Xo,{size:6}),l.jsx(Xo,{size:6}),l.jsx(Xo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ie,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function k4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ie,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function j4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Xo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"50%",h:3,strong:!0}),l.jsx(Ie,{w:"75%",h:2})]}),l.jsx(Ie,{w:30,h:2})]})}function M4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"65%",h:4,strong:!0}),l.jsx(Ie,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"30%",h:5,strong:!0}),l.jsx(Gn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function E4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Xo,{size:i}),l.jsx(Ie,{w:t*.45,h:4,strong:!0}),l.jsx(Ie,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]})]})]})}function T4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ie,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ie,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function A4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:3,strong:!0}),l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function D4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsx(Ie,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function N4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ie,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function R4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function B4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function L4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function O4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function z4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function $4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function I4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ie,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function P4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function H4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function U4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function V4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Xo,{size:a}),l.jsx(Ie,{w:t*.12,h:3,strong:!0}),l.jsx(Ie,{w:t*.08,h:2})]},u))})]})}function Y4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ie,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:Math.min(60,t*.2),h:2}),l.jsx(Gn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Gn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ie,{w:t*.4,h:2})]})}function W4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Ie,{w:t*.4,h:4,strong:!0}),l.jsx(Ie,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:40,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ie,{w:60,h:2}),l.jsx(Gn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Gn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var F4={navigation:BS,hero:LS,sidebar:OS,footer:zS,modal:$S,card:IS,text:PS,image:HS,table:US,list:VS,button:YS,input:WS,form:FS,tabs:XS,avatar:GS,badge:qS,header:KS,section:QS,grid:ZS,dropdown:JS,toggle:e4,search:t4,toast:n4,progress:s4,chart:o4,video:i4,tooltip:a4,breadcrumb:r4,pagination:l4,divider:c4,accordion:u4,carousel:d4,pricing:f4,testimonial:h4,cta:m4,alert:p4,banner:_4,stat:g4,stepper:y4,tag:x4,rating:b4,map:v4,timeline:w4,fileUpload:S4,codeBlock:C4,calendar:k4,notification:j4,productCard:M4,profile:E4,drawer:T4,popover:A4,logo:D4,faq:N4,gallery:R4,checkbox:B4,radio:L4,slider:O4,datePicker:z4,skeleton:$4,chip:I4,icon:P4,spinner:H4,feature:U4,team:V4,login:Y4,contact:W4};function X4({type:t,width:n,height:i,text:a}){const c=F4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var G4=`svg[fill=none] {
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
}`,q4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=G4}var Re=q4,al=24,Xu=5;function Hy(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,g=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],j=w?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],k=[];for(const oe of n)i.has(oe.id)||k.push(oe);c&&k.push(...c);for(const oe of k){const je=oe.x,ze=oe.x+oe.width,J=oe.x+oe.width/2,ue=oe.y,I=oe.y+oe.height,se=oe.y+oe.height/2;for(const W of S)for(const K of[je,ze,J]){const ge=K-W;Math.abs(ge)<Xu&&Math.abs(ge)<Math.abs(u)&&(u=ge)}for(const W of j)for(const K of[ue,I,se]){const ge=K-W;Math.abs(ge)<Xu&&Math.abs(ge)<Math.abs(d)&&(d=ge)}}const M=Math.abs(u)<Xu?u:0,$=Math.abs(d)<Xu?d:0,L=[],N=new Set,Y=h+M,H=p+M,X=y+M,U=g+$,Z=x+$,le=b+$;for(const oe of k){const je=oe.x,ze=oe.x+oe.width,J=oe.x+oe.width/2,ue=oe.y,I=oe.y+oe.height,se=oe.y+oe.height/2;for(const W of[je,J,ze])for(const K of[Y,X,H])if(Math.abs(K-W)<.5){const ge=`x:${Math.round(W)}`;N.has(ge)||(N.add(ge),L.push({axis:"x",pos:W}))}for(const W of[ue,se,I])for(const K of[U,le,Z])if(Math.abs(K-W)<.5){const ge=`y:${Math.round(W)}`;N.has(ge)||(N.add(ge),L.push({axis:"y",pos:W}))}}return{dx:M,dy:$,guides:L}}function Uy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function K4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:j}){const[k,M]=_.useState(new Set),[$,L]=_.useState(null),[N,Y]=_.useState(null),[H,X]=_.useState(null),[U,Z]=_.useState([]),[le,oe]=_.useState(null),[je,ze]=_.useState(!1),J=_.useRef(!1),[ue,I]=_.useState(new Set),se=_.useRef(new Map),W=_.useRef(null),K=_.useRef(null),ge=_.useRef(t);ge.current=t;const R=_.useRef(g);R.current=g;const re=_.useRef(b);re.current=b;const ie=_.useRef(w);ie.current=w;const he=_.useRef(x);_.useEffect(()=>{x!==he.current&&(he.current=x,M(new Set))},[x]);const Te=_.useRef(S);_.useEffect(()=>{if(S!==void 0&&S!==Te.current){Te.current=S;const ne=new Set(ge.current.map(Me=>Me.id));ne.size>0&&(I(ne),M(new Set),K.current=null,Ht(()=>{n([]),I(new Set)},180))}},[S,n]),_.useEffect(()=>{const ne=Me=>{const Xe=Me.target;if(!(Xe.tagName==="INPUT"||Xe.tagName==="TEXTAREA"||Xe.isContentEditable)){if((Me.key==="Backspace"||Me.key==="Delete")&&k.size>0){Me.preventDefault();const ct=new Set(k);I(ct),M(new Set),Ht(()=>{n(ge.current.filter(Pe=>!ct.has(Pe.id))),I(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Me.key)&&k.size>0){Me.preventDefault();const ct=Me.shiftKey?20:1,Pe=Me.key==="ArrowLeft"?-ct:Me.key==="ArrowRight"?ct:0,ut=Me.key==="ArrowUp"?-ct:Me.key==="ArrowDown"?ct:0;n(t.map(dt=>k.has(dt.id)?{...dt,x:Math.max(0,dt.x+Pe),y:Math.max(0,dt.y+ut)}:dt));return}if(Me.key==="Escape"){i?a(null):k.size>0&&M(new Set);return}}};return document.addEventListener("keydown",ne),()=>document.removeEventListener("keydown",ne)},[k,i,t,n,a]);const $e=_.useCallback(ne=>{if(ne.button!==0||p||ne.target.closest(`.${Re.placement}`))return;ne.preventDefault(),ne.stopPropagation();const Xe=window.scrollY,Ye=ne.clientX,ct=ne.clientY;if(i){K.current="place",d==null||d(!0);let Pe=!1,ut=Ye,dt=ct;const bt=rt=>{ut=rt.clientX,dt=rt.clientY;const V=Math.abs(ut-Ye),Q=Math.abs(dt-ct);if((V>5||Q>5)&&(Pe=!0),Pe){const fe=Math.min(Ye,ut),be=Math.min(ct,dt),Je=Math.abs(ut-Ye),Ge=Math.abs(dt-ct);L({x:fe,y:be,w:Je,h:Ge}),X({x:rt.clientX+12,y:rt.clientY+12,text:`${Math.round(Je)} × ${Math.round(Ge)}`})}},zt=rt=>{window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",zt),L(null),X(null),K.current=null,d==null||d(!1);const V=kt[i];let Q,fe,be,Je;Pe?(Q=Math.min(Ye,ut),fe=Math.min(ct,dt)+Xe,be=Math.max(al,Math.abs(ut-Ye)),Je=Math.max(al,Math.abs(dt-ct))):(be=V.width,Je=V.height,Q=Ye-be/2,fe=ct+Xe-Je/2),Q=Math.max(0,Q),fe=Math.max(0,fe);const Ge={id:Uy(),type:i,x:Q,y:fe,width:be,height:Je,scrollY:Xe,timestamp:Date.now()},De=[...t,Ge];n(De),M(new Set([Ge.id])),a(null)};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",zt)}else{ne.shiftKey||M(new Set),K.current="select";let Pe=!1;const ut=bt=>{const zt=Math.abs(bt.clientX-Ye),rt=Math.abs(bt.clientY-ct);if((zt>4||rt>4)&&(Pe=!0),Pe){const V=Math.min(Ye,bt.clientX),Q=Math.min(ct,bt.clientY);Y({x:V,y:Q,w:Math.abs(bt.clientX-Ye),h:Math.abs(bt.clientY-ct)})}},dt=bt=>{if(window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",dt),K.current=null,Pe){const zt=Math.min(Ye,bt.clientX),rt=Math.min(ct,bt.clientY)+Xe,V=Math.abs(bt.clientX-Ye),Q=Math.abs(bt.clientY-ct),fe=new Set(ne.shiftKey?k:new Set);for(const be of t)be.y-Xe,be.x+be.width>zt&&be.x<zt+V&&be.y+be.height>rt&&be.y<rt+Q&&fe.add(be.id);M(fe)}Y(null)};window.addEventListener("mousemove",ut),window.addEventListener("mouseup",dt)}},[i,p,t,n,k]),Be=_.useCallback((ne,Me)=>{var Ge;if(ne.button!==0)return;const Xe=ne.target;if(Xe.closest(`.${Re.handle}`)||Xe.closest(`.${Re.deleteButton}`))return;ne.preventDefault(),ne.stopPropagation();let Ye;ne.shiftKey?(Ye=new Set(k),Ye.has(Me)?Ye.delete(Me):Ye.add(Me)):k.has(Me)?Ye=new Set(k):Ye=new Set([Me]),M(Ye),(Ye.size!==k.size||[...Ye].some(De=>!k.has(De)))&&((Ge=R.current)==null||Ge.call(R,Ye,ne.shiftKey));const Pe=ne.clientX,ut=ne.clientY,dt=new Map;for(const De of t)Ye.has(De.id)&&dt.set(De.id,{x:De.x,y:De.y});K.current="move",d==null||d(!0);let bt=!1,zt=!1,rt=t,V=0,Q=0;const fe=new Map;for(const De of t)dt.has(De.id)&&fe.set(De.id,{w:De.width,h:De.height});const be=De=>{var Nt;const St=De.clientX-Pe,He=De.clientY-ut;if((Math.abs(St)>2||Math.abs(He)>2)&&(bt=!0),!bt)return;if(De.altKey&&!zt){zt=!0;const ft=[];for(const Bt of t)dt.has(Bt.id)&&ft.push({...Bt,id:Uy(),timestamp:Date.now()});rt=[...t,...ft]}let Ft=1/0,Ct=1/0,nt=-1/0,Ot=-1/0;for(const[ft,Bt]of dt){const vn=fe.get(ft);vn&&(Ft=Math.min(Ft,Bt.x+St),Ct=Math.min(Ct,Bt.y+He),nt=Math.max(nt,Bt.x+St+vn.w),Ot=Math.max(Ot,Bt.y+He+vn.h))}const Pt={x:Ft,y:Ct,width:nt-Ft,height:Ot-Ct},{dx:Kt,dy:st,guides:et}=Hy(Pt,rt,new Set(dt.keys()),void 0,y);Z(et);const Dt=St+Kt,wt=He+st;V=Dt,Q=wt,n(rt.map(ft=>{const Bt=dt.get(ft.id);return Bt?{...ft,x:Math.max(0,Bt.x+Dt),y:Math.max(0,Bt.y+wt)}:ft})),(Nt=re.current)==null||Nt.call(re,Dt,wt)},Je=()=>{var De;window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",Je),K.current=null,d==null||d(!1),Z([]),(De=ie.current)==null||De.call(ie,V,Q,bt)};window.addEventListener("mousemove",be),window.addEventListener("mouseup",Je)},[k,t,n,d]),tt=_.useCallback((ne,Me,Xe)=>{ne.preventDefault(),ne.stopPropagation();const Ye=t.find(fe=>fe.id===Me);if(!Ye)return;M(new Set([Me])),K.current="resize",d==null||d(!0);const ct=ne.clientX,Pe=ne.clientY,ut=Ye.width,dt=Ye.height,bt=Ye.x,zt=Ye.y,rt={left:Xe.includes("w"),right:Xe.includes("e"),top:Xe.includes("n"),bottom:Xe.includes("s")},V=fe=>{const be=fe.clientX-ct,Je=fe.clientY-Pe;let Ge=ut,De=dt,St=bt,He=zt;Xe.includes("e")&&(Ge=Math.max(al,ut+be)),Xe.includes("w")&&(Ge=Math.max(al,ut-be),St=bt+ut-Ge),Xe.includes("s")&&(De=Math.max(al,dt+Je)),Xe.includes("n")&&(De=Math.max(al,dt-Je),He=zt+dt-De);const Ft={x:St,y:He,width:Ge,height:De},{dx:Ct,dy:nt,guides:Ot}=Hy(Ft,ge.current,new Set([Me]),rt,y);Z(Ot),Ct!==0&&(rt.right?Ge+=Ct:rt.left&&(St+=Ct,Ge-=Ct)),nt!==0&&(rt.bottom?De+=nt:rt.top&&(He+=nt,De-=nt)),n(ge.current.map(Pt=>Pt.id===Me?{...Pt,x:St,y:He,width:Ge,height:De}:Pt)),X({x:fe.clientX+12,y:fe.clientY+12,text:`${Math.round(Ge)} × ${Math.round(De)}`})},Q=()=>{window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",Q),X(null),K.current=null,d==null||d(!1),Z([])};window.addEventListener("mousemove",V),window.addEventListener("mouseup",Q)},[t,n,d]),_t=_.useCallback(ne=>{K.current=null,I(Me=>{const Xe=new Set(Me);return Xe.add(ne),Xe}),M(Me=>{const Xe=new Set(Me);return Xe.delete(ne),Xe}),Ht(()=>{n(ge.current.filter(Me=>Me.id!==ne)),I(Me=>{const Xe=new Set(Me);return Xe.delete(ne),Xe})},180)},[n]),It={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},vt=_.useCallback(ne=>{const Me=t.find(Xe=>Xe.id===ne);Me&&(J.current=!!Me.text,oe(ne),ze(!1))},[t]),yt=_.useCallback(()=>{le&&(ze(!0),Ht(()=>{oe(null),ze(!1)},150))},[le]);_.useEffect(()=>{u&&le&&yt()},[u]);const Ze=_.useCallback(ne=>{le&&(n(t.map(Me=>Me.id===le?{...Me,text:ne.trim()||void 0}:Me)),yt())},[le,t,n,yt]),Yt=typeof window<"u"?window.scrollY:0,Qe=["nw","ne","se","sw"],pt=j?"#f97316":"#3c82f7",ke=[{dir:"n",cls:Re.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:pt})})},{dir:"e",cls:Re.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:pt})})},{dir:"s",cls:Re.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:pt})})},{dir:"w",cls:Re.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:pt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:W,className:`${Re.overlay} ${c?"":Re.light} ${i?Re.placing:""} ${p?Re.passthrough:""} ${u?Re.overlayExiting:""} ${j?Re.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:$e,children:t.map(ne=>{var ct;const Me=k.has(ne.id),Xe=((ct=Wi[ne.type])==null?void 0:ct.label)||ne.type,Ye=ne.y-Yt;return l.jsxs("div",{"data-design-placement":ne.id,className:`${Re.placement} ${Me?Re.selected:""} ${ue.has(ne.id)?Re.exiting:""}`,style:{left:ne.x,top:Ye,width:ne.width,height:ne.height,position:"fixed"},onMouseDown:Pe=>Be(Pe,ne.id),onDoubleClick:()=>vt(ne.id),children:[l.jsx("span",{className:Re.placementLabel,children:Xe}),l.jsx("span",{className:`${Re.placementAnnotation} ${ne.text?Re.annotationVisible:""}`,children:(ne.text&&se.current.set(ne.id,ne.text),ne.text||se.current.get(ne.id)||"")}),l.jsx("div",{className:Re.placementContent,children:l.jsx(X4,{type:ne.type,width:ne.width,height:ne.height,text:ne.text})}),l.jsx("div",{className:Re.deleteButton,onMouseDown:Pe=>Pe.stopPropagation(),onClick:()=>_t(ne.id),children:"✕"}),Qe.map(Pe=>l.jsx("div",{className:`${Re.handle} ${Re[`handle${Pe.charAt(0).toUpperCase()}${Pe.slice(1)}`]}`,onMouseDown:ut=>tt(ut,ne.id,Pe)},Pe)),ke.map(({dir:Pe,cls:ut,arrow:dt})=>l.jsx("div",{className:`${Re.edgeHandle} ${ut}`,onMouseDown:bt=>tt(bt,ne.id,Pe),children:dt},Pe))]},ne.id)})}),le&&(()=>{var zt,rt;const ne=t.find(V=>V.id===le);if(!ne)return null;const Me=ne.y-Yt,Xe=ne.x+ne.width/2,Ye=Me-8,ct=Me+ne.height+8,Pe=Ye>200,ut=ct<window.innerHeight-100,dt=Math.max(160,Math.min(window.innerWidth-160,Xe));let bt;return Pe?bt={left:dt,bottom:window.innerHeight-Ye}:ut?bt={left:dt,top:ct}:bt={left:dt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:((zt=Wi[ne.type])==null?void 0:zt.label)||ne.type,placeholder:It[ne.type]||"Label or content text",initialValue:(rt=ne.text)!=null?rt:"",submitLabel:J.current?"Save":"Set",onSubmit:Ze,onCancel:yt,onDelete:J.current?()=>{Ze("")}:void 0,isExiting:je,lightMode:!c,style:bt})})(),$&&l.jsx("div",{className:Re.drawBox,style:{left:$.x,top:$.y,width:$.w,height:$.h},"data-feedback-toolbar":!0}),N&&l.jsx("div",{className:Re.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),H&&l.jsx("div",{className:Re.sizeIndicator,style:{left:H.x,top:H.y},"data-feedback-toolbar":!0,children:H.text}),U.map((ne,Me)=>l.jsx("div",{className:Re.guideLine,style:ne.axis==="x"?{position:"fixed",left:ne.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ne.pos-Yt,right:0,height:1},"data-feedback-toolbar":!0},`${ne.axis}-${ne.pos}-${Me}`))]})}function Q4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Re.fadeTop:""} ${i?Re.fadeBottom:""}`}var z="currentColor",Ae="0.5";function Z4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:z,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:z,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:z,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:z,strokeWidth:Ae})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:z,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:z,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:z,strokeWidth:Ae})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:z,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:z,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:z,strokeWidth:Ae,fill:z,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Ae})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:z,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Ae})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:z,strokeWidth:Ae,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:z,strokeWidth:Ae,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:z,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:z,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:z,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:z,strokeWidth:Ae}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Ae,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:z,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:z,strokeWidth:Ae})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Ae})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:z,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:z,strokeWidth:Ae,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:z,strokeWidth:Ae}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:z,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:z,strokeWidth:Ae}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:z,strokeWidth:Ae}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:z,strokeWidth:Ae})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:z,strokeWidth:Ae,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:z,strokeWidth:Ae,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:z,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:z,opacity:".15",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Ae})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:z,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:z,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:z,strokeWidth:Ae})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:z,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:z,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:z,strokeWidth:Ae,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:z,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:z,strokeWidth:Ae})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Ae,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:z,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:z,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:z,strokeWidth:Ae})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:z,opacity:".2",stroke:z,strokeWidth:Ae}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:z,strokeWidth:Ae}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:z,strokeWidth:Ae})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:z,strokeWidth:Ae,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:z,strokeWidth:Ae,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:z,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:z,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:z,strokeWidth:Ae,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:z,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:z,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:z,opacity:".15",stroke:z,strokeWidth:Ae})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:z,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:z,opacity:".2",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:z,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Ae,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:z,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:z,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:z,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:z,strokeWidth:Ae,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:z,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:z,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:z,strokeWidth:Ae})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Ae,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:z,strokeWidth:Ae})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:z,strokeWidth:Ae}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:z,strokeWidth:Ae,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:z,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Ae})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:z,strokeWidth:Ae,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:z,strokeWidth:Ae}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:z,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:z,strokeWidth:Ae})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:z,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:z,strokeWidth:Ae,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:z,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:z,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:z,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:z,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:z,opacity:".08",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:z,strokeWidth:Ae,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:z,strokeWidth:Ae,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:z,strokeWidth:Ae,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:z,strokeWidth:Ae,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:z,strokeWidth:Ae,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:z,strokeWidth:Ae,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:z,strokeWidth:Ae,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:z,strokeWidth:Ae,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:z,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:z,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:z,strokeWidth:Ae}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:z,opacity:".2"})]});default:return null}}function J4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Re.placeScroll} ${c||""}`,children:Qx.map(d=>l.jsxs("div",{className:Re.paletteSection,children:[l.jsx("div",{className:Re.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Re.paletteItem} ${t===h.type?Re.active:""} ${u?Re.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Re.paletteItemIcon,children:l.jsx(Z4,{type:h.type})}),l.jsx("span",{className:Re.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function e6({value:t,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(t),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(g.current),g.current=Ht(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Re.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Re.rollingNum} ${d==="up"?Re.exitUp:Re.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Re.rollingNum} ${d==="up"?Re.enterUp:Re.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Re.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Re.rollingNum} ${d==="up"?Re.exitUp:Re.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Re.rollingNum} ${d==="up"?Re.enterUp:Re.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function t6({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[j,k]=_.useState(!1),[M,$]=_.useState("exit"),[L,N]=_.useState(!1),[Y,H]=_.useState(!0),X=_.useRef(0),U=_.useRef(""),Z=_.useRef(0),le=_.useRef(),oe=_.useRef(null),[je,ze]=_.useState("");_.useEffect(()=>(u?(k(!0),clearTimeout(le.current),cancelAnimationFrame(Z.current),Z.current=ul(()=>{Z.current=ul(()=>{$("enter")})})):(cancelAnimationFrame(Z.current),$("exit"),clearTimeout(le.current),le.current=Ht(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(Z.current)),[u]);const J=h>0||a>0,ue=h+a;return ue>0&&(X.current=ue,U.current=g?ue===1?"Component":"Components":ue===1?"Change":"Changes"),_.useEffect(()=>{if(J)L?H(!1):(H(!0),N(!0),ul(()=>{ul(()=>{H(!1)})}));else{H(!0);const I=Ht(()=>N(!1),300);return()=>clearTimeout(I)}},[J]),_.useEffect(()=>{if(!j)return;const I=oe.current;if(!I)return;const se=()=>ze(Q4(I));se(),I.addEventListener("scroll",se,{passive:!0});const W=new ResizeObserver(se);return W.observe(I),()=>{I.removeEventListener("scroll",se),W.disconnect()}},[j]),j?l.jsxs("div",{className:`${Re.palette} ${Re[M]} ${i?"":Re.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation(),onTransitionEnd:I=>{I.target===I.currentTarget&&(u||(clearTimeout(le.current),k(!1),$("exit"),d==null||d()))},children:[l.jsxs("div",{className:Re.paletteHeader,children:[l.jsx("div",{className:Re.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Re.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Re.canvasToggle} ${g?Re.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:Re.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Re.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Re.wireframePurposeWrap} ${g?"":Re.collapsed}`,children:l.jsx("div",{className:Re.wireframePurposeInner,children:l.jsx("textarea",{className:Re.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:I=>w(I.target.value),rows:2})})}),l.jsx(J4,{activeType:t,onSelect:n,onDragStart:y,scrollRef:oe,fadeClass:je,blankCanvas:g}),L&&l.jsx("div",{className:`${Re.paletteFooterWrap} ${Y?Re.footerHidden:""}`,children:l.jsx("div",{className:Re.paletteFooterInner,children:l.jsx("div",{className:Re.paletteFooterInnerContent,children:l.jsxs("div",{className:Re.paletteFooter,children:[l.jsx("span",{className:Re.paletteFooterCount,children:l.jsx(e6,{value:X.current,suffix:U.current})}),l.jsx("button",{className:Re.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function pl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Vo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=pl(i)}return null}function n6(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=pl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ml(t){var a,c,u,d,h,p,y,g;const n=n6(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Vo(t,"svg");if(x){const b=pl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ml(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=pl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function rc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Gu(t){const n=pl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var S;const x=g.tagName.toLowerCase(),b=g.className;let w="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));j&&(w=`.${j}`)}if(x==="button"||x==="a"){const j=(S=g.textContent)==null?void 0:S.trim().slice(0,15);if(j)return`${x}${w} "${j}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function lc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Zx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),s6=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),o6=new Set(["input","textarea","select"]),i6=new Set(["img","video","canvas","svg"]),a6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;s6.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:o6.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:i6.has(a)?c=["width","height","objectFit","borderRadius"]:a6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Zx.has(h)&&(i[u]=h)}return i}var r6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of r6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Zx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function l6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=pl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var c6=new Set(["nav","header","main","section","article","footer","aside"]),Nm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Vy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},u6=new Set(["script","style","noscript","link","meta"]),d6=40;function Jx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Nr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Nr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Nm[a])return Nm[a];if(Vy[n])return Vy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ml(t);return u.charAt(0).toUpperCase()+u.slice(1)}function eb(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function tb(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function f6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(u6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<d6)return;const y=c6.has(d),g=c.getAttribute("role")&&Nm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,w=Jx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Nr(c),role:c.getAttribute("role"),className:eb(c),textSnippet:tb(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function h6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Jx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Nr(t),role:t.getAttribute("role"),className:eb(t),textSnippet:tb(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Yy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Wy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Fy=16,ed=5;function Xy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,g=t.y+t.height,x=t.y+t.height/2,b=[];for(const X of n)i.has(X.id)||b.push(X.currentRect);a&&b.push(...a);for(const X of b){const U=X.x,Z=X.x+X.width,le=X.x+X.width/2,oe=X.y,je=X.y+X.height,ze=X.y+X.height/2;for(const J of[d,h,p])for(const ue of[U,Z,le]){const I=ue-J;Math.abs(I)<ed&&Math.abs(I)<Math.abs(c)&&(c=I)}for(const J of[y,g,x])for(const ue of[oe,je,ze]){const I=ue-J;Math.abs(I)<ed&&Math.abs(I)<Math.abs(u)&&(u=I)}}const w=Math.abs(c)<ed?c:0,S=Math.abs(u)<ed?u:0,j=[],k=new Set,M=d+w,$=h+w,L=p+w,N=y+S,Y=g+S,H=x+S;for(const X of b){const U=X.x,Z=X.x+X.width,le=X.x+X.width/2,oe=X.y,je=X.y+X.height,ze=X.y+X.height/2;for(const J of[U,le,Z])for(const ue of[M,L,$])if(Math.abs(ue-J)<.5){const I=`x:${Math.round(J)}`;k.has(I)||(k.add(I),j.push({axis:"x",pos:J}))}for(const J of[oe,ze,je])for(const ue of[N,H,Y])if(Math.abs(ue-J)<.5){const I=`y:${Math.round(J)}`;k.has(I)||(k.add(I),j.push({axis:"y",pos:J}))}}return{dx:w,dy:S,guides:j}}var m6=new Set(["script","style","noscript","link","meta","br","hr"]);function Gy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(m6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Fy&&i.height>=Fy)return n;n=n.parentElement}return null}function p6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=t,w=_.useRef(t);w.current=t;const[S,j]=_.useState(new Set),[k,M]=_.useState(!1),$=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==$.current&&($.current=x,b.length>0&&M(!0))},[x,b.length]);const L=_.useRef(p);_.useEffect(()=>{p!==L.current&&(L.current=p,j(new Set))},[p]);const[N,Y]=_.useState(null),[H,X]=_.useState(!1),U=_.useRef(!1),Z=_.useCallback(V=>{const Q=b.find(fe=>fe.id===V);Q&&(U.current=!!Q.note,Y(V),X(!1))},[b]),le=_.useCallback(()=>{N&&(X(!0),Ht(()=>{Y(null),X(!1)},150))},[N]),oe=_.useCallback(V=>{N&&(n({...t,sections:b.map(Q=>Q.id===N?{...Q,note:V.trim()||void 0}:Q)}),le())},[N,b,t,n,le]);_.useEffect(()=>{a&&N&&le()},[a]);const[je,ze]=_.useState(new Set),J=_.useRef(new Map),[ue,I]=_.useState(null),[se,W]=_.useState(null),[K,ge]=_.useState([]),[R,re]=_.useState(0),ie=_.useRef(null),he=_.useRef(new Set),Te=_.useRef(new Map),[$e,Be]=_.useState(new Map),[tt,_t]=_.useState(new Map),It=_.useRef(new Set),vt=_.useRef(new Map),yt=_.useRef(h);yt.current=h;const Ze=_.useRef(y);Ze.current=y;const Yt=_.useRef(g);Yt.current=g,_.useEffect(()=>{u&&j(new Set)},[u]);const[Qe,pt]=_.useState(()=>!t.sections.some(V=>{const Q=V.originalRect,fe=V.currentRect;return Math.abs(Q.x-fe.x)>1||Math.abs(Q.y-fe.y)>1||Math.abs(Q.width-fe.width)>1||Math.abs(Q.height-fe.height)>1}));_.useEffect(()=>{if(!Qe){const V=Ht(()=>pt(!0),380);return()=>clearTimeout(V)}},[]);const ke=_.useRef(new Set);_.useEffect(()=>{ke.current=new Set(b.map(V=>V.selector))},[b]),_.useEffect(()=>{const V=()=>re(window.scrollY);return V(),window.addEventListener("scroll",V,{passive:!0}),window.addEventListener("resize",V,{passive:!0}),()=>{window.removeEventListener("scroll",V),window.removeEventListener("resize",V)}},[]),_.useEffect(()=>{const V=Q=>{if(ie.current){I(null);return}const fe=document.elementFromPoint(Q.clientX,Q.clientY);if(!fe){I(null);return}if(fe.closest("[data-feedback-toolbar]")){I(null);return}if(fe.closest("[data-design-placement]")){I(null);return}if(fe.closest("[data-annotation-popup]")){I(null);return}const be=Gy(fe);if(!be){I(null);return}for(const Ge of ke.current)try{const De=document.querySelector(Ge);if(De&&(De===be||be.contains(De))){I(null);return}}catch{}const Je=be.getBoundingClientRect();I({x:Je.x,y:Je.y,w:Je.width,h:Je.height})};return document.addEventListener("mousemove",V,{passive:!0}),()=>document.removeEventListener("mousemove",V)},[b]),_.useEffect(()=>{const V=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=V}},[]),_.useEffect(()=>{const V=Q=>{var De,St,He,Ft;if(ie.current||Q.button!==0)return;const fe=Q.target;if(!fe||fe.closest("[data-feedback-toolbar]")||fe.closest("[data-design-placement]")||fe.closest("[data-annotation-popup]"))return;const be=Gy(fe);let Je=!1;if(be)for(const Ct of ke.current)try{const nt=document.querySelector(Ct);if(nt&&(nt===be||be.contains(nt))){Je=!0;break}}catch{}const Ge=!!(Q.shiftKey||Q.metaKey||Q.ctrlKey);if(be&&!Je){Q.preventDefault(),Q.stopPropagation();const Ct=h6(be),nt=[...b,Ct],Ot=[...t.originalOrder,Ct.id];n({...t,sections:nt,originalOrder:Ot});const Pt=new Set([Ct.id]);j(Pt),(De=yt.current)==null||De.call(yt,Pt,Ge),I(null);const Kt=Q.clientX,st=Q.clientY,et={x:Ct.currentRect.x,y:Ct.currentRect.y};Ct.originalRect;let Dt=!1,wt=0,Nt=0;ie.current="move";const ft=vn=>{var un;const wn=vn.clientX-Kt,_n=vn.clientY-st;if(!Dt&&(Math.abs(wn)>2||Math.abs(_n)>2)&&(Dt=!0),!Dt)return;const fs={x:et.x+wn,y:et.y+_n,width:Ct.currentRect.width,height:Ct.currentRect.height},Yn=Xy(fs,nt,new Set([Ct.id]),d);ge(Yn.guides);const An=wn+Yn.dx,kn=_n+Yn.dy;wt=An,Nt=kn;const In=document.querySelector(`[data-rearrange-section="${Ct.id}"]`);In&&(In.style.transform=`translate(${An}px, ${kn}px)`),Be(new Map([[Ct.id,{x:et.x+An,y:et.y+kn,width:Ct.currentRect.width,height:Ct.currentRect.height}]])),(un=Ze.current)==null||un.call(Ze,An,kn)},Bt=()=>{var wn;window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",Bt),ie.current=null,ge([]),Be(new Map);const vn=document.querySelector(`[data-rearrange-section="${Ct.id}"]`);vn&&(vn.style.transform=""),Dt&&n({...t,sections:nt.map(_n=>_n.id===Ct.id?{..._n,currentRect:{..._n.currentRect,x:Math.max(0,et.x+wt),y:Math.max(0,et.y+Nt)}}:_n),originalOrder:Ot}),(wn=Yt.current)==null||wn.call(Yt,wt,Nt,Dt)};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",Bt)}else if(Je&&be){Q.preventDefault();for(const Ct of b)try{const nt=document.querySelector(Ct.selector);if(nt&&nt===be){const Ot=new Set([Ct.id]);j(Ot),(St=yt.current)==null||St.call(yt,Ot,Ge);return}}catch{}Ge||(j(new Set),(He=yt.current)==null||He.call(yt,new Set,!1))}else Ge||(j(new Set),(Ft=yt.current)==null||Ft.call(yt,new Set,!1))};return document.addEventListener("mousedown",V,!0),()=>document.removeEventListener("mousedown",V,!0)},[b,t,n]),_.useEffect(()=>{const V=Q=>{const fe=Q.target;if(!(fe.tagName==="INPUT"||fe.tagName==="TEXTAREA"||fe.isContentEditable)){if((Q.key==="Backspace"||Q.key==="Delete")&&S.size>0){Q.preventDefault();const be=new Set(S);ze(Je=>{const Ge=new Set(Je);for(const De of be)Ge.add(De);return Ge}),j(new Set),Ht(()=>{const Je=w.current;n({...Je,sections:Je.sections.filter(Ge=>!be.has(Ge.id)),originalOrder:Je.originalOrder.filter(Ge=>!be.has(Ge))}),ze(Ge=>{const De=new Set(Ge);for(const St of be)De.delete(St);return De})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Q.key)&&S.size>0){Q.preventDefault();const be=Q.shiftKey?20:1,Je=Q.key==="ArrowLeft"?-be:Q.key==="ArrowRight"?be:0,Ge=Q.key==="ArrowUp"?-be:Q.key==="ArrowDown"?be:0;n({...t,sections:b.map(De=>S.has(De.id)?{...De,currentRect:{...De.currentRect,x:Math.max(0,De.currentRect.x+Je),y:Math.max(0,De.currentRect.y+Ge)}}:De)});return}Q.key==="Escape"&&S.size>0&&j(new Set)}};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[S,b,t,n]);const ne=_.useCallback((V,Q)=>{var Kt;if(V.button!==0)return;const fe=V.target;if(fe.closest(`.${Re.handle}`)||fe.closest(`.${Re.deleteButton}`))return;V.preventDefault(),V.stopPropagation();let be;V.shiftKey||V.metaKey||V.ctrlKey?(be=new Set(S),be.has(Q)?be.delete(Q):be.add(Q)):S.has(Q)?be=new Set(S):be=new Set([Q]),j(be),(be.size!==S.size||[...be].some(st=>!S.has(st)))&&((Kt=yt.current)==null||Kt.call(yt,be,!!(V.shiftKey||V.metaKey||V.ctrlKey)));const Ge=V.clientX,De=V.clientY,St=new Map;for(const st of b)be.has(st.id)&&St.set(st.id,{x:st.currentRect.x,y:st.currentRect.y});ie.current="move";let He=!1,Ft=0,Ct=0;const nt=new Map;for(const st of b)if(be.has(st.id)){const et=document.querySelector(`[data-rearrange-section="${st.id}"]`);nt.set(st.id,{outlineEl:et,curW:st.currentRect.width,curH:st.currentRect.height})}const Ot=st=>{var Yn;const et=st.clientX-Ge,Dt=st.clientY-De;if(et===0&&Dt===0)return;He=!0;let wt=1/0,Nt=1/0,ft=-1/0,Bt=-1/0;for(const[An,{curW:kn,curH:In}]of nt){const un=St.get(An);if(!un)continue;const Dn=un.x+et,ot=un.y+Dt;wt=Math.min(wt,Dn),Nt=Math.min(Nt,ot),ft=Math.max(ft,Dn+kn),Bt=Math.max(Bt,ot+In)}const vn=Xy({x:wt,y:Nt,width:ft-wt,height:Bt-Nt},b,be,d),wn=et+vn.dx,_n=Dt+vn.dy;Ft=wn,Ct=_n,ge(vn.guides);for(const[,{outlineEl:An}]of nt)An&&(An.style.transform=`translate(${wn}px, ${_n}px)`);const fs=new Map;for(const[An,{curW:kn,curH:In}]of nt){const un=St.get(An);if(un){const Dn={x:Math.max(0,un.x+wn),y:Math.max(0,un.y+_n),width:kn,height:In};fs.set(An,Dn)}}Be(fs),(Yn=Ze.current)==null||Yn.call(Ze,wn,_n)},Pt=st=>{var et,Dt;window.removeEventListener("mousemove",Ot),window.removeEventListener("mouseup",Pt),ie.current=null,ge([]),Be(new Map);for(const[,{outlineEl:wt}]of nt)wt&&(wt.style.transform="");if(He){const wt=st.clientX-Ge,Nt=st.clientY-De;if(Math.abs(wt)<5&&Math.abs(Nt)<5)n({...t,sections:b.map(ft=>{const Bt=St.get(ft.id);return Bt?{...ft,currentRect:{...ft.currentRect,x:Bt.x,y:Bt.y}}:ft})});else{n({...t,sections:b.map(ft=>{const Bt=St.get(ft.id);return Bt?{...ft,currentRect:{...ft.currentRect,x:Math.max(0,Bt.x+Ft),y:Math.max(0,Bt.y+Ct)}}:ft})}),(et=Yt.current)==null||et.call(Yt,Ft,Ct,!0);return}}(Dt=Yt.current)==null||Dt.call(Yt,0,0,!1)};window.addEventListener("mousemove",Ot),window.addEventListener("mouseup",Pt)},[S,b,t,n]),Me=_.useCallback((V,Q,fe)=>{V.preventDefault(),V.stopPropagation();const be=b.find(Ot=>Ot.id===Q);if(!be)return;j(new Set([Q])),ie.current="resize";const Je=V.clientX,Ge=V.clientY,De={...be.currentRect};be.originalRect;const St=De.width/De.height;let He={...De};const Ft=document.querySelector(`[data-rearrange-section="${Q}"]`),Ct=Ot=>{const Pt=Ot.clientX-Je,Kt=Ot.clientY-Ge;let st=De.x,et=De.y,Dt=De.width,wt=De.height;if(fe.includes("e")&&(Dt=Math.max(Ju,De.width+Pt)),fe.includes("w")&&(Dt=Math.max(Ju,De.width-Pt),st=De.x+De.width-Dt),fe.includes("s")&&(wt=Math.max(Ju,De.height+Kt)),fe.includes("n")&&(wt=Math.max(Ju,De.height-Kt),et=De.y+De.height-wt),Ot.shiftKey)if(fe.length===2){const ft=Math.abs(Dt-De.width),Bt=Math.abs(wt-De.height);ft>Bt?wt=Dt/St:Dt=wt*St,fe.includes("w")&&(st=De.x+De.width-Dt),fe.includes("n")&&(et=De.y+De.height-wt)}else fe==="e"||fe==="w"?wt=Dt/St:Dt=wt*St,fe==="w"&&(st=De.x+De.width-Dt),fe==="n"&&(et=De.y+De.height-wt);He={x:st,y:et,width:Dt,height:wt},Ft&&(Ft.style.left=`${st}px`,Ft.style.top=`${et-R}px`,Ft.style.width=`${Dt}px`,Ft.style.height=`${wt}px`),W({x:Ot.clientX+12,y:Ot.clientY+12,text:`${Math.round(Dt)} × ${Math.round(wt)}`}),Be(new Map([[Q,He]]))},nt=()=>{window.removeEventListener("mousemove",Ct),window.removeEventListener("mouseup",nt),W(null),ie.current=null,Be(new Map),n({...t,sections:b.map(Ot=>Ot.id===Q?{...Ot,currentRect:He}:Ot)})};window.addEventListener("mousemove",Ct),window.addEventListener("mouseup",nt)},[b,t,n,R]),Xe=_.useCallback(V=>{ze(Q=>{const fe=new Set(Q);return fe.add(V),fe}),j(Q=>{const fe=new Set(Q);return fe.delete(V),fe}),Ht(()=>{const Q=w.current;n({...Q,sections:Q.sections.filter(fe=>fe.id!==V),originalOrder:Q.originalOrder.filter(fe=>fe!==V)}),ze(fe=>{const be=new Set(fe);return be.delete(V),be})},180)},[n]),Ye=V=>{const Q=V.originalRect,fe=V.currentRect;return Math.abs(Q.x-fe.x)>1||Math.abs(Q.y-fe.y)>1||Math.abs(Q.width-fe.width)>1||Math.abs(Q.height-fe.height)>1},ct=V=>{const Q=V.originalRect,fe=V.currentRect;return Math.abs(Q.x-fe.x)>1||Math.abs(Q.y-fe.y)>1},Pe=V=>{const Q=V.originalRect,fe=V.currentRect;return Math.abs(Q.width-fe.width)>1||Math.abs(Q.height-fe.height)>1};for(const V of b)Te.current.has(V.id)||(ct(V)?Te.current.set(V.id,"move"):Pe(V)&&Te.current.set(V.id,"resize"));for(const V of Te.current.keys())b.some(Q=>Q.id===V)||Te.current.delete(V);const ut=b.filter(V=>{try{if(je.has(V.id)||S.has(V.id))return!0;const Q=document.querySelector(V.selector);if(!Q)return!1;const fe=Q.getBoundingClientRect(),be=V.originalRect;return Math.abs(fe.width-be.width)+Math.abs(fe.height-be.height)<200}catch{return!1}}),dt=ut.filter(V=>Ye(V)),bt=ut.filter(V=>!Ye(V)),zt=new Set(dt.map(V=>V.id));for(const V of he.current)zt.has(V)||he.current.delete(V);const rt=[...zt].sort().join(",");for(const V of dt)vt.current.set(V.id,{currentRect:V.currentRect,originalRect:V.originalRect,isFixed:V.isFixed});return _.useEffect(()=>{const V=It.current;It.current=zt;const Q=new Map;for(const fe of V)if(!zt.has(fe)){if(!b.some(Je=>Je.id===fe))continue;const be=vt.current.get(fe);be&&(Q.set(fe,{orig:be.originalRect,target:be.currentRect,isFixed:be.isFixed}),vt.current.delete(fe))}if(Q.size>0){_t(be=>{const Je=new Map(be);for(const[Ge,De]of Q)Je.set(Ge,De);return Je});const fe=Ht(()=>{_t(be=>{const Je=new Map(be);for(const Ge of Q.keys())Je.delete(Ge);return Je})},250);return()=>clearTimeout(fe)}},[rt,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Re.rearrangeOverlay} ${i?"":Re.light} ${a?Re.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ue&&l.jsx("div",{className:Re.hoverHighlight,style:{left:ue.x,top:ue.y,width:ue.w,height:ue.h}}),bt.map(V=>{const Q=V.currentRect,fe=V.isFixed?Q.y:Q.y-R,be=Yy,Je=S.has(V.id);return l.jsxs("div",{"data-rearrange-section":V.id,className:`${Re.sectionOutline} ${Je?Re.selected:""} ${k||a||je.has(V.id)?Re.exiting:""}`,style:{left:Q.x,top:fe,width:Q.width,height:Q.height,borderColor:be.border,backgroundColor:be.bg,...Qe?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ge=>ne(Ge,V.id),onDoubleClick:()=>Z(V.id),children:[l.jsx("span",{className:Re.sectionLabel,style:{backgroundColor:be.pill},children:V.label}),l.jsx("span",{className:`${Re.sectionAnnotation} ${V.note?Re.annotationVisible:""}`,children:(V.note&&J.current.set(V.id,V.note),V.note||J.current.get(V.id)||"")}),l.jsxs("span",{className:Re.sectionDimensions,children:[Math.round(Q.width)," × ",Math.round(Q.height)]}),l.jsx("div",{className:Re.deleteButton,onMouseDown:Ge=>Ge.stopPropagation(),onClick:()=>Xe(V.id),children:"✕"}),Wy.map(Ge=>l.jsx("div",{className:`${Re.handle} ${Re[`handle${Ge.charAt(0).toUpperCase()}${Ge.slice(1)}`]}`,onMouseDown:De=>Me(De,V.id,Ge)},Ge))]},V.id)}),dt.map(V=>{const Q=V.currentRect,fe=V.isFixed?Q.y:Q.y-R,be=S.has(V.id),Je=ct(V),Ge=Pe(V);if(u&&!be)return null;const St=!he.current.has(V.id);return St&&he.current.add(V.id),l.jsxs("div",{"data-rearrange-section":V.id,className:`${Re.ghostOutline} ${be?Re.selected:""} ${k||a||je.has(V.id)?Re.exiting:""}`,style:{left:Q.x,top:fe,width:Q.width,height:Q.height,...Qe?{}:{opacity:0,animation:"none",transition:"none"},...St?{}:{animation:"none"}},onMouseDown:He=>ne(He,V.id),onDoubleClick:()=>Z(V.id),children:[l.jsx("span",{className:Re.sectionLabel,style:{backgroundColor:Yy.pill},children:V.label}),l.jsx("span",{className:`${Re.sectionAnnotation} ${V.note?Re.annotationVisible:""}`,children:(V.note&&J.current.set(V.id,V.note),V.note||J.current.get(V.id)||"")}),l.jsxs("span",{className:Re.sectionDimensions,children:[Math.round(Q.width)," × ",Math.round(Q.height)]}),l.jsx("div",{className:Re.deleteButton,onMouseDown:He=>He.stopPropagation(),onClick:()=>Xe(V.id),children:"✕"}),Wy.map(He=>l.jsx("div",{className:`${Re.handle} ${Re[`handle${He.charAt(0).toUpperCase()}${He.slice(1)}`]}`,onMouseDown:Ft=>Me(Ft,V.id,He)},He)),l.jsx("span",{className:Re.ghostBadge,children:(()=>{const He=Te.current.get(V.id);if(Je&&Ge){const[Ft,Ct]=He==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Ft," ",l.jsxs("span",{className:Re.ghostBadgeExtra,children:["& ",Ct]})]})}return`Suggested ${Ge?"Resize":"Move"}`})()})]},V.id)})]}),!u&&(()=>{const V=[];for(const Q of dt){const fe=$e.get(Q.id);V.push({id:Q.id,orig:Q.originalRect,target:fe||Q.currentRect,isFixed:Q.isFixed,isSelected:S.has(Q.id),isExiting:je.has(Q.id)})}for(const[Q,fe]of $e)if(!V.some(be=>be.id===Q)){const be=b.find(Je=>Je.id===Q);be&&V.push({id:Q,orig:be.originalRect,target:fe,isFixed:be.isFixed,isSelected:S.has(Q)})}for(const[Q,fe]of tt)V.some(be=>be.id===Q)||V.push({id:Q,orig:fe.orig,target:fe.target,isFixed:fe.isFixed,isSelected:!1,isExiting:!0});return V.length===0?null:l.jsxs("svg",{className:`${Re.connectorSvg} ${k||a?Re.connectorExiting:""}`,children:[V.map(({id:Q,orig:fe,target:be,isFixed:Je,isSelected:Ge,isExiting:De})=>{const St=fe.x+fe.width/2,He=(Je?fe.y:fe.y-R)+fe.height/2,Ft=be.x+be.width/2,Ct=(Je?be.y:be.y-R)+be.height/2,nt=Ft-St,Ot=Ct-He,Pt=Math.sqrt(nt*nt+Ot*Ot);if(Pt<2)return null;const Kt=Math.min(1,Pt/40),st=Math.min(Pt*.3,60),et=Pt>0?-Ot/Pt:0,Dt=Pt>0?nt/Pt:0,wt=(St+Ft)/2+et*st,Nt=(He+Ct)/2+Dt*st,ft=$e.has(Q),Bt=ft||Ge?1:.4,vn=ft||Ge?1:.5;return l.jsxs("g",{className:De?Re.connectorExiting:"",children:[l.jsx("path",{className:Re.connectorLine,d:`M ${St} ${He} Q ${wt} ${Nt} ${Ft} ${Ct}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Bt*Kt}),l.jsx("circle",{className:Re.connectorDot,cx:St,cy:He,r:4*Kt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:vn*Kt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Re.connectorDot,cx:Ft,cy:Ct,r:4*Kt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:vn*Kt,filter:"url(#connDotShadow)"})]},`conn-${Q}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{var Ct;const V=b.find(nt=>nt.id===N);if(!V)return null;const Q=V.currentRect,fe=V.isFixed?Q.y:Q.y-R,be=Q.x+Q.width/2,Je=fe-8,Ge=fe+Q.height+8,De=Je>200,St=Ge<window.innerHeight-100,He=Math.max(160,Math.min(window.innerWidth-160,be));let Ft;return De?Ft={left:He,bottom:window.innerHeight-Je}:St?Ft={left:He,top:Ge}:Ft={left:He,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:V.label,placeholder:"Add a note about this section",initialValue:(Ct=V.note)!=null?Ct:"",submitLabel:U.current?"Save":"Set",onSubmit:oe,onCancel:le,onDelete:U.current?()=>{oe("")}:void 0,isExiting:H,lightMode:!i,style:Ft})})(),se&&l.jsx("div",{className:Re.sizeIndicator,style:{left:se.x,top:se.y},"data-feedback-toolbar":!0,children:se.text}),K.map((V,Q)=>l.jsx("div",{className:Re.guideLine,style:V.axis==="x"?{position:"fixed",left:V.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:V.pos-R,width:"100vw",height:1}},`${V.axis}-${V.pos}-${Q}`))]})}var Rm=new Set(["script","style","noscript","link","meta","br","hr"]);function _6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Rm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Nr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Rm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Md(h),selector:Nr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function g6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function y6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Bm(t,n){const i=n?g6(n):_6(),a=y6(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const j=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(j&&S.bottom<=a.top+5){const M=Math.round(a.top-S.bottom);(!c||M<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(j&&S.top>=a.bottom-5){const M=Math.round(S.top-a.bottom);(!u||M<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.right<=a.left+5){const M=Math.round(a.left-S.right);(!d||M<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.left>=a.right-5){const M=Math.round(S.left-a.right);(!h||M<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}}const y=window.innerWidth,g=window.innerHeight,x=b6(t,y),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=x6(a,t,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function x6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];t.left<y.left-2&&g.push("left"),t.right>y.right+2&&g.push("right"),t.top<y.top-2&&g.push("top"),t.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function b6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function nb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function sb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=nb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function v6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(nb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var qy=15;function Ky(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<qy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function w6(t){var d;if(t.length<2)return[];const n=Ky(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Ky(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(w=>p.has(w)),b=x.join(", ");if(y.type!==h.type){const w=h.type==="row"?"y":"x",S=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${S}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${y.sharedEdge}`:"",j=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${j}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function ob(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Rm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Nr(h)}}}return{viewport:t,contentArea:null}}function S6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Nr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ib(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,g=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function ab(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function C6(t){const n=S6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Qy(t,n,i,a="standard"){var k,M,$,L;if(t.length===0)return"";const c=[...t].sort((N,Y)=>Math.abs(N.y-Y.y)<20?N.x-Y.x:N.y-Y.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((N,Y)=>{var X;const H=((X=Wi[N.type])==null?void 0:X.label)||N.type;u+=`${Y+1}. **${H}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}),u;const d=ob(n);u+=ab(d),u+=`### Components
`,c.forEach((N,Y)=>{var je;const H=((je=Wi[N.type])==null?void 0:je.label)||N.type,X={x:N.x,y:N.y,width:N.width,height:N.height};u+=`${Y+1}. **${H}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`;const U=Bm(X),le=sb(U,{includeLeftRight:a==="detailed"||a==="forensic"});for(const ze of le)u+=`   - ${ze}
`;const oe=ib(X,d);oe&&(u+=`   - CSS: ${oe}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const N of c){const Y=h.find(H=>Math.abs(H.y-N.y)<30);Y?Y.items.push(N):h.push({y:N.y,items:[N]})}if(h.sort((N,Y)=>N.y-Y.y),h.forEach((N,Y)=>{N.items.sort((X,U)=>X.x-U.x);const H=N.items.map(X=>{var U;return((U=Wi[X.type])==null?void 0:U.label)||X.type});if(N.items.length===1){const U=N.items[0].width>n.width*.8;u+=`- Row ${Y+1} (y≈${Math.round(N.y)}): ${H[0]}${U?" — full width":""}
`}else u+=`- Row ${Y+1} (y≈${Math.round(N.y)}): ${H.join(" | ")} — ${N.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let N=0;N<c.length-1;N++){const Y=c[N],H=c[N+1],X=((k=Wi[Y.type])==null?void 0:k.label)||Y.type,U=((M=Wi[H.type])==null?void 0:M.label)||H.type,Z=Math.round(H.y-(Y.y+Y.height)),le=Math.round(H.x-(Y.x+Y.width));Math.abs(Y.y-H.y)<30?u+=`- ${X} → ${U}: \`${le}px\` horizontal gap
`:u+=`- ${X} → ${U}: \`${Z}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let N=0;N<c.length;N++)for(let Y=N+1;Y<c.length;Y++){const H=c[N],X=c[Y],U=(($=Wi[H.type])==null?void 0:$.label)||H.type,Z=((L=Wi[X.type])==null?void 0:L.label)||X.type,le=Math.round(X.y-(H.y+H.height)),oe=Math.round(X.x-(H.x+H.width));u+=`- ${U} ↔ ${Z}: h=\`${oe}px\` v=\`${le}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((N,Y)=>{var X;const H=((X=Wi[N.type])==null?void 0:X.label)||N.type;u+=`${Y}. ${H} at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(N=>N.type==="navigation"),y=c.some(N=>N.type==="hero"),g=c.some(N=>N.type==="sidebar"),x=c.some(N=>N.type==="footer"),b=c.filter(N=>N.type==="card"),w=c.filter(N=>N.type==="form"),S=c.filter(N=>N.type==="table"),j=c.filter(N=>N.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const N=c.find(Y=>Y.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(N.width)}px 1fr;\`
`}if(b.length>1){const N=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${N}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Zy(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=ob({width:d,height:h});n!=="compact"&&(u+=ab(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const w=g.originalRect,S=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const k=Bm(w,y("original")),M=Bm(S,y("current")),$=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${v6(k,{x:w.x,y:w.y},$)}
`;const L=b?{width:S.width,height:S.height}:void 0,N=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,Y=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",X=sb(M,{includeLeftRight:n==="detailed"||n==="forensic"});if(X.length>0){u+=`  - Suggested position ${N}${Y}: ${X[0]}
`;for(let Z=1;Z<X.length;Z++)u+=`    ${X[Z]}
`}else u+=`  - Suggested position ${N}${Y}
`;const U=ib(S,p);U&&(u+=`  - CSS: ${U}
`)}const j=C6(g.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const k=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;k!==g.selector&&(u+=`  - Element: \`${k}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=w6(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Lm="feedback-annotations-",rb=7;function Ed(t){return`${Lm}${t}`}function em(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Ed(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-rb*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function lb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Ed(t),JSON.stringify(n))}catch{}}function k6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-rb*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Lm)){const c=a.slice(Lm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));lb(t,a)}var hp="agentation-design-";function j6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function M6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function E6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-rearrange-";function T6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function A6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function D6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-wireframe-";function N6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Jy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var cb="agentation-session-";function _p(t){return`${cb}${t}`}function R6(t){if(typeof window>"u")return null;try{return localStorage.getItem(_p(t))}catch{return null}}function tm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(_p(t),n)}catch{}}function B6(t){if(!(typeof window>"u"))try{localStorage.removeItem(_p(t))}catch{}}var ub=`${cb}toolbar-hidden`;function L6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(ub)==="1"}catch{return!1}}function O6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(ub,"1")}catch{}}async function nm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function e1(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function rl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function t1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Ka(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var $n={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},n1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),s1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],z6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function $6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=n1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...n1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...s1,...t.skipPatterns]:s1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:z6,filter:t==null?void 0:t.filter}}function I6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function P6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function H6(t,n){const i=I6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function U6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&H6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ll=null,V6=new WeakMap;function sm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function Y6(){if(ll!==null)return ll;if(typeof document>"u")return!1;if(document.body&&sm(document.body))return ll=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&sm(i))return ll=!0,!0}if(document.body){for(const n of document.body.children)if(sm(n))return ll=!0,!0}return ll=!1,!1}var uc={map:V6};function W6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function F6(t){const n=W6(t);return n?t[n]:null}function br(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function X6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===$n.HostComponent||n===$n.HostText||n===$n.HostHoistable||n===$n.HostSingleton||n===$n.Fragment||n===$n.Mode||n===$n.Profiler||n===$n.DehydratedFragment||n===$n.HostRoot||n===$n.HostPortal||n===$n.ScopeComponent||n===$n.OffscreenComponent||n===$n.LegacyHiddenComponent||n===$n.CacheComponent||n===$n.TracingMarkerComponent||n===$n.Throw||n===$n.ViewTransitionComponent||n===$n.ActivityComponent)return null;if(n===$n.ForwardRef){const u=a;if(u!=null&&u.render){const d=br(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:br(i)}if(n===$n.MemoComponent||n===$n.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=br(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:br(i)}if(n===$n.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===$n.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===$n.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?br(u._result):null}return n===$n.SuspenseComponent||n===$n.SuspenseListComponent?null:n===$n.IncompleteClassComponent||n===$n.IncompleteFunctionComponent||n===$n.FunctionComponent||n===$n.ClassComponent||n===$n.IndeterminateComponent?br(i):null}function G6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function q6(t,n){const i=$6(n),a=i.mode==="all";if(a){const p=uc.map.get(t);if(p!==void 0)return p}if(!Y6()){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const c=i.mode==="smart"?P6(t):void 0,u=[];try{let p=F6(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=X6(p);g&&!G6(g)&&U6(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&uc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&uc.map.set(t,h),h}var dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function K6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Ec(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Q6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Ec(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Ec(i._debugOwner)};i=i.return,a++}return null}function Z6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Ec(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Ec(n)}}}n=n.return,i++}return null}var nd=new Map;function J6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===dc.FunctionComponent||n===dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===dc.MemoComponent||n===dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function eC(){const t=Iv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function tC(t){const n=t.split(`
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
}`,lC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=rC}var We=lC,fc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function o1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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
}`,uC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=cC}var Gs=uC;function i1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:j,onContextMenu:k}){const M=(h||p)&&!y,$=M&&x==="delete",L=t.isMultiSelect,N=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",Y=c?Gs.exit:u?Gs.clearing:d?"":Gs.enter,H=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Gs.marker} ${L?Gs.multiSelect:""} ${Y} ${$?Gs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:$?void 0:N,animationDelay:H},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:X=>{X.stopPropagation(),c||j(t)},onContextMenu:k?X=>{x==="delete"&&(X.preventDefault(),X.stopPropagation(),c||k(t))}:void 0,children:[M?$?l.jsx(qx,{size:L?18:16}):l.jsx(SS,{size:16}):l.jsx("span",{className:g!==null&&n>=g?Gs.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Gs.markerTooltip} ${Gs.enter}`,style:b,children:[l.jsxs("span",{className:Gs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Gs.markerNote,children:t.comment})]})]})}function dC({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Gs.marker} ${Gs.pending} ${i?Gs.multiSelect:""} ${a?Gs.exit:Gs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(dS,{size:12})})}function a1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Gs.marker} ${n?Gs.fixed:""} ${Gs.hovered} ${i?Gs.multiSelect:""} ${Gs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(qx,{size:i?12:10})})}var fC=`.styles-module__switchContainer___Ka-AB {
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
}`,yC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=gC}var r1=yC,l1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${r1.container} ${t}`,...u,children:[l.jsx(_C,{id:d,onChange:c,checked:a}),l.jsx("label",{className:r1.label,htmlFor:d,children:n}),i&&l.jsx(Mr,{content:i})]})},xC=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,bC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=xC}var jt=bC;function vC({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${jt.settingsPanel} ${h?jt.enter:jt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:jt.settingsPanelContainer,children:[l.jsxs("div",{className:`${jt.settingsPage} ${y==="automations"?jt.slideLeft:""}`,children:[l.jsxs("div",{className:jt.settingsHeader,children:[l.jsx("a",{className:jt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:jt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:jt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:jt.themeIconWrapper,children:l.jsx("span",{className:jt.themeIcon,children:i?l.jsx(vS,{size:20}):l.jsx(wS,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("div",{className:jt.settingsLabel,children:["Output Detail",l.jsx(Mr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:jt.cycleButton,onClick:()=>{const S=(fc.findIndex(j=>j.value===t.outputDetail)+1)%fc.length;n({outputDetail:fc[S].value})},children:[l.jsx("span",{className:jt.cycleButtonText,children:(b=fc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:jt.cycleDots,children:fc.map(w=>l.jsx("span",{className:`${jt.cycleDot} ${t.outputDetail===w.value?jt.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${jt.settingsRow} ${jt.settingsRowMarginTop} ${c?"":jt.settingsRowDisabled}`,children:[l.jsxs("div",{className:jt.settingsLabel,children:["React Components",l.jsx(Mr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(im,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${jt.settingsRow} ${jt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:jt.settingsLabel,children:["Hide Until Restart",l.jsx(Mr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(im,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsx("div",{className:`${jt.settingsLabel} ${jt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:jt.colorOptions,children:vc.map(w=>l.jsx("button",{className:`${jt.colorOption} ${t.annotationColorId===w.id?jt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsx(l1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(l1,{className:jt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:jt.divider}),l.jsxs("button",{className:jt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:jt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${jt.mcpNavIndicator} ${jt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${jt.settingsPage} ${jt.automationsPage} ${y==="automations"?jt.slideIn:""}`,children:[l.jsxs("button",{className:jt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(kS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("span",{className:jt.automationHeader,children:["MCP Connection",l.jsx(Mr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${jt.mcpStatusDot} ${jt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:jt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:jt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:`${jt.settingsSection} ${jt.settingsSectionGrow}`,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("span",{className:jt.automationHeader,children:["Webhooks",l.jsx(Mr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:jt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${jt.autoSendLabel} ${t.webhooksEnabled?jt.active:""} ${t.webhookUrl?"":jt.disabled}`,children:"Auto-Send"}),l.jsx(im,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:jt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:jt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function am(t,n="filtered"){const{name:i,path:a}=ml(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=q6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var c1=!1,rm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},sa=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],wC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...vc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};wC();function vr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function lm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function wr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=Om(t),i=n.found?n:aC(t);if(i.found&&i.source)return iC(i.source,"path")}function SC({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var bo,Un,Zt,cn,hn,Kn,ye;const[j,k]=_.useState(!1),[M,$]=_.useState([]),[L,N]=_.useState(!0),[Y,H]=_.useState(()=>L6()),[X,U]=_.useState(!1),Z=_.useRef(null);_.useEffect(()=>{const C=D=>{const O=Z.current;O&&O.contains(D.target)&&D.stopPropagation()},E=["mousedown","click","pointerdown"];return E.forEach(D=>document.body.addEventListener(D,C)),()=>{E.forEach(D=>document.body.removeEventListener(D,C))}},[]);const[le,oe]=_.useState(!1),[je,ze]=_.useState(!1),[J,ue]=_.useState(null),[I,se]=_.useState({x:0,y:0}),[W,K]=_.useState(null),[ge,R]=_.useState(!1),[re,ie]=_.useState("idle"),[he,Te]=_.useState(!1),[$e,Be]=_.useState(!1),[tt,_t]=_.useState(null),[It,vt]=_.useState(null),[yt,Ze]=_.useState([]),[Yt,Qe]=_.useState(null),[pt,ke]=_.useState(null),[ne,Me]=_.useState(null),[Xe,Ye]=_.useState(null),[ct,Pe]=_.useState([]),[ut,dt]=_.useState(0),[bt,zt]=_.useState(!1),[rt,V]=_.useState(!1),[Q,fe]=_.useState(!1),[be,Je]=_.useState(!1),[Ge,De]=_.useState(!1),[St,He]=_.useState("main"),[Ft,Ct]=_.useState(!1),[nt,Ot]=_.useState(!1),[Pt,Kt]=_.useState(!1),[st,et]=_.useState([]),[Dt,wt]=_.useState(null),Nt=_.useRef(!1),[ft,Bt]=_.useState(!1),[vn,wn]=_.useState(!1),[_n,fs]=_.useState(1),[Yn,An]=_.useState("new-page"),[kn,In]=_.useState(""),[un,Dn]=_.useState(!1),[ot,dn]=_.useState(null),no=_.useRef(!1),Eo=_.useRef({rearrange:null,placements:[]}),hs=_.useRef({rearrange:null,placements:[]}),[Es,Go]=_.useState(0),[ks,uo]=_.useState(0),[so,fo]=_.useState(0),[jn,qo]=_.useState(0),Ps=_.useRef(new Set),Ns=_.useRef(new Set),ms=_.useRef(null),Oo=_.useRef(),ho=nt&&j&&!Pt&&ft;_.useEffect(()=>{if(ho){wn(!1);const C=ul(()=>{wn(!0)});return()=>cancelAnimationFrame(C)}else wn(!1)},[ho]);const Rs=_.useRef(new Map),Hs=_.useRef(new Map),Nn=_.useRef(),[is,Mn]=_.useState(!1),[nn,To]=_.useState([]),ps=_.useRef(nn);ps.current=nn;const[li,ci]=_.useState(null),Ao=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[Ko,xs]=_.useState(!1),_s=_.useRef(null),[Rn,Bs]=_.useState([]),Pn=_.useRef({cmd:!1,shift:!1}),as=()=>{Ct(!0)},xi=()=>{Ct(!1)},zo=()=>{Ko||(_s.current=Ht(()=>xs(!0),850))},Xi=()=>{_s.current&&(clearTimeout(_s.current),_s.current=null),xs(!1),xi()};_.useEffect(()=>()=>{_s.current&&clearTimeout(_s.current)},[]);const[Gt,ui]=_.useState(()=>{var C;try{const E=JSON.parse((C=localStorage.getItem("feedback-toolbar-settings"))!=null?C:"");return{...rm,...E,annotationColorId:vc.find(D=>D.id===E.annotationColorId)?E.annotationColorId:rm.annotationColorId}}catch{return rm}}),[qn,Bi]=_.useState(!0),[$o,Io]=_.useState(!1),oo=()=>{var C;(C=Z.current)==null||C.classList.add(We.disableTransitions),Bi(E=>!E),ul(()=>{var E;(E=Z.current)==null||E.classList.remove(We.disableTransitions)})},Qo=!1,io="off",[Sn,mo]=_.useState(x!=null?x:null),rs=_.useRef(!1),[bs,po]=_.useState(g?"connecting":"disconnected"),[rn,Us]=_.useState(null),[_o,Vs]=_.useState(!1),[Wn,Zo]=_.useState(null),ao=_.useRef(!1),[wo,Ls]=_.useState(new Set),[Po,Do]=_.useState(new Set),[Qt,Ys]=_.useState(!1),[Ts,As]=_.useState(!1),[go,Ho]=_.useState(!1),yo=_.useRef(null),js=_.useRef(null),xo=_.useRef(null),qs=_.useRef(null),T=_.useRef(!1),q=_.useRef(0),pe=_.useRef(null),Se=_.useRef(null),qe=8,at=50,Ut=_.useRef(null),Lt=_.useRef(null),At=_.useRef(null),Ke=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(be)De(!0);else{Ct(!1),He("main");const C=Ht(()=>De(!1),0);return()=>clearTimeout(C)}},[be]);const Jt=j&&L&&!nt;_.useEffect(()=>{if(Jt){ze(!1),oe(!0),Ls(new Set);const C=Ht(()=>{Ls(E=>{const D=new Set(E);return M.forEach(O=>D.add(O.id)),D})},350);return()=>clearTimeout(C)}else if(le){ze(!0);const C=Ht(()=>{oe(!1),ze(!1)},250);return()=>clearTimeout(C)}},[Jt]),_.useEffect(()=>{V(!0),dt(window.scrollY);const C=em(Ke);$(C.filter(wr)),c1||(Io(!0),c1=!0,Ht(()=>Io(!1),750));try{const E=localStorage.getItem("feedback-toolbar-theme");E!==null&&Bi(E==="dark")}catch{}try{const E=localStorage.getItem("feedback-toolbar-position");if(E){const D=JSON.parse(E);typeof D.x=="number"&&typeof D.y=="number"&&Us(D)}}catch{}},[Ke]),_.useEffect(()=>{rt&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Gt))},[Gt,rt]),_.useEffect(()=>{rt&&localStorage.setItem("feedback-toolbar-theme",qn?"dark":"light")},[qn,rt]);const sn=_.useRef(!1);_.useEffect(()=>{const C=sn.current;sn.current=_o,C&&!_o&&rn&&rt&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(rn))},[_o,rn,rt]),_.useEffect(()=>{if(!g||!rt||rs.current)return;rs.current=!0,po("connecting"),(async()=>{try{const E=R6(Ke),D=x||E;let O=!1;if(D)try{const P=await e1(g,D);mo(P.id),po("connected"),tm(Ke,P.id),O=!0;const ae=em(Ke),we=new Set(P.annotations.map(Ve=>Ve.id)),Ne=ae.filter(Ve=>!we.has(Ve.id));if(Ne.length>0){const Fe=`${typeof window<"u"?window.location.origin:""}${Ke}`,xt=(await Promise.allSettled(Ne.map(ht=>rl(g,P.id,{...ht,sessionId:P.id,url:Fe})))).map((ht,gt)=>ht.status==="fulfilled"?ht.value:(console.warn("[Agentation] Failed to sync annotation:",ht.reason),Ne[gt])),Et=[...P.annotations,...xt];$(Et.filter(wr)),cc(Ke,Et.filter(wr),P.id)}else $(P.annotations.filter(wr)),cc(Ke,P.annotations.filter(wr),P.id)}catch(P){console.warn("[Agentation] Could not join session, creating new:",P),B6(Ke)}if(!O){const P=typeof window<"u"?window.location.href:"/",ae=await nm(g,P);mo(ae.id),po("connected"),tm(Ke,ae.id),b==null||b(ae.id);const we=k6(),Ne=typeof window<"u"?window.location.origin:"",Ve=[];for(const[Fe,lt]of we){const xt=lt.filter(gt=>!gt._syncedTo);if(xt.length===0)continue;const Et=`${Ne}${Fe}`,ht=Fe===Ke;Ve.push((async()=>{try{const gt=ht?ae:await nm(g,Et),vs=(await Promise.allSettled(xt.map(Cn=>rl(g,gt.id,{...Cn,sessionId:gt.id,url:Et})))).map((Cn,Vn)=>Cn.status==="fulfilled"?Cn.value:(console.warn("[Agentation] Failed to sync annotation:",Cn.reason),xt[Vn])).filter(wr);if(cc(Fe,vs,gt.id),ht){const Cn=new Set(xt.map(Vn=>Vn.id));$(Vn=>{const Xt=Vn.filter(qt=>!Cn.has(qt.id));return[...vs,...Xt]})}}catch(gt){console.warn(`[Agentation] Failed to sync annotations for ${Fe}:`,gt)}})())}await Promise.allSettled(Ve)}}catch(E){po("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",E)}})()},[g,x,rt,b,Ke]),_.useEffect(()=>{if(!g||!rt)return;const C=async()=>{try{(await fetch(`${g}/health`)).ok?po("connected"):po("disconnected")}catch{po("disconnected")}};C();const E=ES(C,1e4);return()=>clearInterval(E)},[g,rt]),_.useEffect(()=>{if(!g||!rt||!Sn)return;const C=new EventSource(`${g}/sessions/${Sn}/events`),E=["resolved","dismissed"],D=O=>{var P;try{const ae=JSON.parse(O.data);if(E.includes((P=ae.payload)==null?void 0:P.status)){const we=ae.payload.id,Ne=ae.payload.kind;if(Ne==="placement"){for(const[Ve,Fe]of Rs.current)if(Fe===we){Rs.current.delete(Ve),et(lt=>lt.filter(xt=>xt.id!==Ve));break}}else if(Ne==="rearrange"){for(const[Ve,Fe]of Hs.current)if(Fe===we){Hs.current.delete(Ve),dn(lt=>{if(!lt)return null;const xt=lt.sections.filter(Et=>Et.id!==Ve);return xt.length===0?null:{...lt,sections:xt}});break}}else Do(Ve=>new Set(Ve).add(we)),Ht(()=>{$(Ve=>Ve.filter(Fe=>Fe.id!==we)),Do(Ve=>{const Fe=new Set(Ve);return Fe.delete(we),Fe})},150)}}catch{}};return C.addEventListener("annotation.updated",D),()=>{C.removeEventListener("annotation.updated",D),C.close()}},[g,rt,Sn]),_.useEffect(()=>{if(!g||!rt)return;const C=Se.current==="disconnected",E=bs==="connected";Se.current=bs,C&&E&&(async()=>{try{const O=em(Ke);if(O.length===0)return;const ae=`${typeof window<"u"?window.location.origin:""}${Ke}`;let we=Sn,Ne=[];if(we)try{Ne=(await e1(g,we)).annotations}catch{we=null}we||(we=(await nm(g,ae)).id,mo(we),tm(Ke,we));const Ve=new Set(Ne.map(lt=>lt.id)),Fe=O.filter(lt=>!Ve.has(lt.id));if(Fe.length>0){const xt=(await Promise.allSettled(Fe.map(gt=>rl(g,we,{...gt,sessionId:we,url:ae})))).map((gt,Qn)=>gt.status==="fulfilled"?gt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",gt.reason),Fe[Qn])),ht=[...Ne,...xt].filter(wr);$(ht),cc(Ke,ht,we)}}catch(O){console.warn("[Agentation] Failed to sync on reconnect:",O)}})()},[bs,g,rt,Sn,Ke]);const En=_.useCallback(()=>{X||(U(!0),Je(!1),k(!1),Ht(()=>{O6(!0),H(!0),U(!1)},400))},[X]);_.useEffect(()=>{if(!i||!rt||!t||t.length===0||M.length>0)return;const C=[];return C.push(Ht(()=>{k(!0)},n-200)),t.forEach((E,D)=>{const O=n+D*300;C.push(Ht(()=>{const P=document.querySelector(E.selector);if(!P)return;const ae=P.getBoundingClientRect(),{name:we,path:Ne}=ml(P),Ve={id:`demo-${Date.now()}-${D}`,x:(ae.left+ae.width/2)/window.innerWidth*100,y:ae.top+ae.height/2+window.scrollY,comment:E.comment,element:we,elementPath:Ne,timestamp:Date.now(),selectedText:E.selectedText,boundingBox:{x:ae.left,y:ae.top+window.scrollY,width:ae.width,height:ae.height},nearbyText:rc(P),cssClasses:lc(P)};$(Fe=>[...Fe,Ve])},O))}),()=>{C.forEach(clearTimeout)}},[i,rt,t,n]),_.useEffect(()=>{const C=()=>{dt(window.scrollY),zt(!0),At.current&&clearTimeout(At.current),At.current=Ht(()=>{zt(!1)},150)};return window.addEventListener("scroll",C,{passive:!0}),()=>{window.removeEventListener("scroll",C),At.current&&clearTimeout(At.current)}},[]),_.useEffect(()=>{rt&&M.length>0?Sn?cc(Ke,M,Sn):lb(Ke,M):rt&&M.length===0&&localStorage.removeItem(Ed(Ke))},[M,Ke,rt,Sn]),_.useEffect(()=>{if(rt&&!Nt.current){Nt.current=!0;const C=j6(Ke);C.length>0&&et(C)}},[rt,Ke]),_.useEffect(()=>{rt&&Nt.current&&!ft&&(st.length>0?M6(Ke,st):E6(Ke))},[st,Ke,rt,ft]),_.useEffect(()=>{if(rt&&!no.current){no.current=!0;const C=T6(Ke);if(C){const E={...C,sections:C.sections.map(D=>{var O;return{...D,currentRect:(O=D.currentRect)!=null?O:{...D.originalRect}}})};dn(E)}}},[rt,Ke]),_.useEffect(()=>{rt&&no.current&&!ft&&(ot?A6(Ke,ot):D6(Ke))},[ot,Ke,rt,ft]);const Hn=_.useRef(!1);_.useEffect(()=>{if(rt&&!Hn.current){Hn.current=!0;const C=N6(Ke);C&&(hs.current={rearrange:C.rearrange,placements:C.placements||[]},C.purpose&&In(C.purpose))}},[rt,Ke]),_.useEffect(()=>{var E,D,O,P,ae;if(!rt||!Hn.current)return;const C=hs.current;ft?((D=(E=ot==null?void 0:ot.sections)==null?void 0:E.length)!=null?D:0)>0||st.length>0||kn?Jy(Ke,{rearrange:ot,placements:st,purpose:kn}):td(Ke):((ae=(P=(O=C.rearrange)==null?void 0:O.sections)==null?void 0:P.length)!=null?ae:0)>0||C.placements.length>0||kn?Jy(Ke,{rearrange:C.rearrange,placements:C.placements,purpose:kn}):td(Ke)},[ot,st,kn,ft,Ke,rt]),_.useEffect(()=>{nt&&!ot&&dn({sections:[],originalOrder:[],detectedAt:Date.now()})},[nt,ot]),_.useEffect(()=>{if(!g||!Sn)return;const C=Rs.current,E=new Set(st.map(D=>D.id));for(const D of st){if(C.has(D.id))continue;C.set(D.id,"");const O=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;rl(g,Sn,{id:D.id,x:D.x/window.innerWidth*100,y:D.y,comment:`Place ${D.type} at (${Math.round(D.x)}, ${Math.round(D.y)}), ${D.width}×${D.height}px${D.text?` — "${D.text}"`:""}`,element:`[design:${D.type}]`,elementPath:"[placement]",timestamp:D.timestamp,url:O,intent:"change",severity:"important",kind:"placement",placement:{componentType:D.type,width:D.width,height:D.height,scrollY:D.scrollY,text:D.text}}).then(P=>{C.has(D.id)&&C.set(D.id,P.id)}).catch(P=>{console.warn("[Agentation] Failed to sync placement annotation:",P),C.delete(D.id)})}for(const[D,O]of C)E.has(D)||(C.delete(D),O&&Ka(g,O).catch(()=>{}))},[st,g,Sn,Ke]),_.useEffect(()=>{if(!(!g||!Sn))return Nn.current&&clearTimeout(Nn.current),Nn.current=Ht(()=>{const C=Hs.current;if(!ot||ot.sections.length===0){for(const[,O]of C)O&&Ka(g,O).catch(()=>{});C.clear();return}const E=new Set(ot.sections.map(O=>O.id)),D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;for(const O of ot.sections){const P=O.originalRect,ae=O.currentRect;if(!(Math.abs(P.x-ae.x)>1||Math.abs(P.y-ae.y)>1||Math.abs(P.width-ae.width)>1||Math.abs(P.height-ae.height)>1)){const Ve=C.get(O.id);Ve&&(C.delete(O.id),Ka(g,Ve).catch(()=>{}));continue}const Ne=C.get(O.id);Ne?t1(g,Ne,{comment:`Move ${O.label} section (${O.tagName}) — from (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)} to (${Math.round(ae.x)},${Math.round(ae.y)}) ${Math.round(ae.width)}×${Math.round(ae.height)}`}).catch(Ve=>{console.warn("[Agentation] Failed to update rearrange annotation:",Ve)}):(C.set(O.id,""),rl(g,Sn,{id:O.id,x:ae.x/window.innerWidth*100,y:ae.y,comment:`Move ${O.label} section (${O.tagName}) — from (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)} to (${Math.round(ae.x)},${Math.round(ae.y)}) ${Math.round(ae.width)}×${Math.round(ae.height)}`,element:O.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:D,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:O.selector,label:O.label,tagName:O.tagName,originalRect:P,currentRect:ae}}).then(Ve=>{C.has(O.id)&&C.set(O.id,Ve.id)}).catch(Ve=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Ve),C.delete(O.id)}))}for(const[O,P]of C)E.has(O)||(C.delete(O),P&&Ka(g,P).catch(()=>{}))},300),()=>{Nn.current&&clearTimeout(Nn.current)}},[ot,g,Sn,Ke]);const on=_.useRef(new Map);_.useLayoutEffect(()=>{var D;const C=(D=ot==null?void 0:ot.sections)!=null?D:[],E=new Set;if((nt||Pt)&&j)for(const O of C){E.add(O.id);try{const P=document.querySelector(O.selector);if(!P)continue;if(!on.current.has(O.id)){const ae={transform:P.style.transform,transformOrigin:P.style.transformOrigin,opacity:P.style.opacity,position:P.style.position,zIndex:P.style.zIndex,display:P.style.display},we=[];let Ne=P.parentElement;for(;Ne&&Ne!==document.body;){const Fe=getComputedStyle(Ne);(Fe.overflow!=="visible"||Fe.overflowX!=="visible"||Fe.overflowY!=="visible")&&(we.push({el:Ne,overflow:Ne.style.overflow}),Ne.style.overflow="visible"),Ne=Ne.parentElement}getComputedStyle(P).display==="inline"&&(P.style.display="inline-block"),on.current.set(O.id,{el:P,origStyles:ae,ancestors:we}),P.style.transformOrigin="top left",P.style.zIndex="9999"}}catch{}}for(const[O,P]of on.current)if(!E.has(O)){const{el:ae,origStyles:we,ancestors:Ne}=P;ae.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ae.style.transform=we.transform,ae.style.transformOrigin=we.transformOrigin,ae.style.opacity=we.opacity,ae.style.position=we.position,ae.style.zIndex=we.zIndex,on.current.delete(O),Ht(()=>{ae.style.transition="",ae.style.display=we.display;for(const Ve of Ne)Ve.el.style.overflow=Ve.overflow},450)}},[ot,nt,Pt,j]),_.useEffect(()=>()=>{for(const[,C]of on.current){const{el:E,origStyles:D,ancestors:O}=C;E.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",E.style.transform=D.transform,E.style.transformOrigin=D.transformOrigin,E.style.opacity=D.opacity,E.style.position=D.position,E.style.zIndex=D.zIndex,Ht(()=>{E.style.transition="",E.style.display=D.display;for(const P of O)P.el.style.overflow=P.overflow},450)}on.current.clear()},[]);const ls=_.useCallback(()=>{Kt(!0),Ot(!1),wt(null),clearTimeout(Oo.current),Oo.current=Ht(()=>{Kt(!1)},300)},[]),Ws=_.useCallback(()=>{nt&&(Kt(!0),Ot(!1),wt(null),clearTimeout(Oo.current),Oo.current=Ht(()=>{Kt(!1)},300)),k(!1)},[nt]),Jo=_.useCallback(()=>{Q||(AS(),fe(!0))},[Q]),ei=_.useCallback(()=>{Q&&(Iy(),fe(!1))},[Q]),Gi=_.useCallback(()=>{Q?ei():Jo()},[Q,Jo,ei]),ja=_.useCallback(()=>{if(Rn.length===0)return;const C=Rn[0],E=C.element,D=Rn.length>1,O=Rn.map(P=>P.element.getBoundingClientRect());if(D){const P={left:Math.min(...O.map(gt=>gt.left)),top:Math.min(...O.map(gt=>gt.top)),right:Math.max(...O.map(gt=>gt.right)),bottom:Math.max(...O.map(gt=>gt.bottom))},ae=Rn.slice(0,5).map(gt=>gt.name).join(", "),we=Rn.length>5?` +${Rn.length-5} more`:"",Ne=O.map(gt=>({x:gt.left,y:gt.top+window.scrollY,width:gt.width,height:gt.height})),Fe=Rn[Rn.length-1].element,lt=O[O.length-1],xt=lt.left+lt.width/2,Et=lt.top+lt.height/2,ht=lm(Fe);K({x:xt/window.innerWidth*100,y:ht?Et:Et+window.scrollY,clientY:Et,element:`${Rn.length} elements: ${ae}${we}`,elementPath:"multi-select",boundingBox:{x:P.left,y:P.top+window.scrollY,width:P.right-P.left,height:P.bottom-P.top},isMultiSelect:!0,isFixed:ht,elementBoundingBoxes:Ne,multiSelectElements:Rn.map(gt=>gt.element),targetElement:Fe,fullPath:Zu(E),accessibility:Qu(E),computedStyles:Ku(E),computedStylesObj:qu(E),nearbyElements:Gu(E),cssClasses:lc(E),nearbyText:rc(E),sourceFile:od(E)})}else{const P=O[0],ae=lm(E);K({x:P.left/window.innerWidth*100,y:ae?P.top:P.top+window.scrollY,clientY:P.top,element:C.name,elementPath:C.path,boundingBox:{x:P.left,y:ae?P.top:P.top+window.scrollY,width:P.width,height:P.height},isFixed:ae,fullPath:Zu(E),accessibility:Qu(E),computedStyles:Ku(E),computedStylesObj:qu(E),nearbyElements:Gu(E),cssClasses:lc(E),nearbyText:rc(E),reactComponents:C.reactComponents,sourceFile:od(E)})}Bs([]),ue(null)},[Rn]);_.useEffect(()=>{j||(K(null),Me(null),Ye(null),Pe([]),ue(null),Je(!1),Bs([]),Pn.current={cmd:!1,shift:!1},Q&&ei())},[j,Q,ei]),_.useEffect(()=>()=>{Iy()},[]),_.useEffect(()=>{if(!j)return;const C=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),E=":not([data-agentation-root]):not([data-agentation-root] *)",D=document.createElement("style");return D.id="feedback-cursor-styles",D.textContent=`
      body ${E} {
        cursor: crosshair !important;
      }

      body :is(${C})${E} {
        cursor: text !important;
      }
    `,document.head.appendChild(D),()=>{const O=document.getElementById("feedback-cursor-styles");O&&O.remove()}},[j]),_.useEffect(()=>{if(li!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[li,j]),_.useEffect(()=>{if(!j||W||is||nt)return;const C=E=>{const D=E.composedPath()[0]||E.target;if(Vo(D,"[data-feedback-toolbar]")){ue(null);return}const O=vr(E.clientX,E.clientY);if(!O||Vo(O,"[data-feedback-toolbar]")){ue(null);return}const{name:P,elementName:ae,path:we,reactComponents:Ne}=am(O,io),Ve=O.getBoundingClientRect();ue({element:P,elementName:ae,elementPath:we,rect:Ve,reactComponents:Ne}),se({x:E.clientX,y:E.clientY})};return document.addEventListener("mousemove",C),()=>document.removeEventListener("mousemove",C)},[j,W,is,nt,io,nn]);const qi=_.useCallback(C=>{var E;if(Me(C),_t(null),vt(null),Ze([]),(E=C.elementBoundingBoxes)!=null&&E.length){const D=[];for(const O of C.elementBoundingBoxes){const P=O.x+O.width/2,ae=O.y+O.height/2-window.scrollY,we=vr(P,ae);we&&D.push(we)}Pe(D),Ye(null)}else if(C.boundingBox){const D=C.boundingBox,O=D.x+D.width/2,P=C.isFixed?D.y+D.height/2:D.y+D.height/2-window.scrollY,ae=vr(O,P);if(ae){const we=ae.getBoundingClientRect(),Ne=we.width/D.width,Ve=we.height/D.height;Ne<.5||Ve<.5?Ye(null):Ye(ae)}else Ye(null);Pe([])}else Ye(null),Pe([])},[]);_.useEffect(()=>{if(!j||is||nt)return;const C=E=>{var Zn,vs;if(T.current){T.current=!1;return}const D=E.composedPath()[0]||E.target;if(Vo(D,"[data-feedback-toolbar]")||Vo(D,"[data-annotation-popup]")||Vo(D,"[data-annotation-marker]"))return;if(E.metaKey&&E.shiftKey&&!W&&!ne){E.preventDefault(),E.stopPropagation();const Cn=vr(E.clientX,E.clientY);if(!Cn)return;const Vn=Cn.getBoundingClientRect(),{name:Xt,path:qt,reactComponents:ws}=am(Cn,io),Tn=Rn.findIndex(ro=>ro.element===Cn);Tn>=0?Bs(ro=>ro.filter((Ro,cs)=>cs!==Tn)):Bs(ro=>[...ro,{element:Cn,rect:Vn,name:Xt,path:qt,reactComponents:ws!=null?ws:void 0}]);return}const O=Vo(D,"button, a, input, select, textarea, [role='button'], [onclick]");if(Gt.blockInteractions&&O&&(E.preventDefault(),E.stopPropagation()),W){if(O&&!Gt.blockInteractions)return;E.preventDefault(),(Zn=Ut.current)==null||Zn.shake();return}if(ne){if(O&&!Gt.blockInteractions)return;E.preventDefault(),(vs=Lt.current)==null||vs.shake();return}E.preventDefault();const P=vr(E.clientX,E.clientY);if(!P)return;const{name:ae,path:we,reactComponents:Ne}=am(P,io),Ve=P.getBoundingClientRect(),Fe=E.clientX/window.innerWidth*100,lt=lm(P),xt=lt?E.clientY:E.clientY+window.scrollY,Et=window.getSelection();let ht;Et&&Et.toString().trim().length>0&&(ht=Et.toString().trim().slice(0,500));const gt=qu(P),Qn=Ku(P);K({x:Fe,y:xt,clientY:E.clientY,element:ae,elementPath:we,selectedText:ht,boundingBox:{x:Ve.left,y:lt?Ve.top:Ve.top+window.scrollY,width:Ve.width,height:Ve.height},nearbyText:rc(P),cssClasses:lc(P),isFixed:lt,fullPath:Zu(P),accessibility:Qu(P),computedStyles:Qn,computedStylesObj:gt,nearbyElements:Gu(P),reactComponents:Ne!=null?Ne:void 0,sourceFile:od(P),targetElement:P}),ue(null)};return document.addEventListener("click",C,!0),()=>document.removeEventListener("click",C,!0)},[j,is,nt,W,ne,Gt.blockInteractions,io,Rn]),_.useEffect(()=>{if(!j)return;const C=O=>{O.key==="Meta"&&(Pn.current.cmd=!0),O.key==="Shift"&&(Pn.current.shift=!0)},E=O=>{const P=Pn.current.cmd&&Pn.current.shift;O.key==="Meta"&&(Pn.current.cmd=!1),O.key==="Shift"&&(Pn.current.shift=!1);const ae=Pn.current.cmd&&Pn.current.shift;P&&!ae&&Rn.length>0&&ja()},D=()=>{Pn.current={cmd:!1,shift:!1},Bs([])};return document.addEventListener("keydown",C),document.addEventListener("keyup",E),window.addEventListener("blur",D),()=>{document.removeEventListener("keydown",C),document.removeEventListener("keyup",E),window.removeEventListener("blur",D)}},[j,Rn,ja]),_.useEffect(()=>{if(!j||W||is||nt)return;const C=E=>{const D=E.composedPath()[0]||E.target;Vo(D,"[data-feedback-toolbar]")||Vo(D,"[data-annotation-marker]")||Vo(D,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(D.tagName)||D.isContentEditable||(E.preventDefault(),yo.current={x:E.clientX,y:E.clientY})};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[j,W,is,nt]),_.useEffect(()=>{if(!j||W)return;const C=E=>{if(!yo.current)return;const D=E.clientX-yo.current.x,O=E.clientY-yo.current.y,P=D*D+O*O,ae=qe*qe;if(!go&&P>=ae&&(js.current=yo.current,Ho(!0),E.preventDefault()),(go||P>=ae)&&js.current){if(xo.current){const Xt=Math.min(js.current.x,E.clientX),qt=Math.min(js.current.y,E.clientY),ws=Math.abs(E.clientX-js.current.x),Tn=Math.abs(E.clientY-js.current.y);xo.current.style.transform=`translate(${Xt}px, ${qt}px)`,xo.current.style.width=`${ws}px`,xo.current.style.height=`${Tn}px`}const we=Date.now();if(we-q.current<at)return;q.current=we;const Ne=js.current.x,Ve=js.current.y,Fe=Math.min(Ne,E.clientX),lt=Math.min(Ve,E.clientY),xt=Math.max(Ne,E.clientX),Et=Math.max(Ve,E.clientY),ht=(Fe+xt)/2,gt=(lt+Et)/2,Qn=new Set,Zn=[[Fe,lt],[xt,lt],[Fe,Et],[xt,Et],[ht,gt],[ht,lt],[ht,Et],[Fe,gt],[xt,gt]];for(const[Xt,qt]of Zn){const ws=document.elementsFromPoint(Xt,qt);for(const Tn of ws)Tn instanceof HTMLElement&&Qn.add(Tn)}const vs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Xt of vs)if(Xt instanceof HTMLElement){const qt=Xt.getBoundingClientRect(),ws=qt.left+qt.width/2,Tn=qt.top+qt.height/2,ro=ws>=Fe&&ws<=xt&&Tn>=lt&&Tn<=Et,Ro=Math.min(qt.right,xt)-Math.max(qt.left,Fe),cs=Math.min(qt.bottom,Et)-Math.max(qt.top,lt),vi=Ro>0&&cs>0?Ro*cs:0,Oi=qt.width*qt.height,zi=Oi>0?vi/Oi:0;(ro||zi>.5)&&Qn.add(Xt)}const Cn=[],Vn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Xt of Qn){if(Vo(Xt,"[data-feedback-toolbar]")||Vo(Xt,"[data-annotation-marker]"))continue;const qt=Xt.getBoundingClientRect();if(!(qt.width>window.innerWidth*.8&&qt.height>window.innerHeight*.5)&&!(qt.width<10||qt.height<10)&&qt.left<xt&&qt.right>Fe&&qt.top<Et&&qt.bottom>lt){const ws=Xt.tagName;let Tn=Vn.has(ws);if(!Tn&&(ws==="DIV"||ws==="SPAN")){const ro=Xt.textContent&&Xt.textContent.trim().length>0,Ro=Xt.onclick!==null||Xt.getAttribute("role")==="button"||Xt.getAttribute("role")==="link"||Xt.classList.contains("clickable")||Xt.hasAttribute("data-clickable");(ro||Ro)&&!Xt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Tn=!0)}if(Tn){let ro=!1;for(const Ro of Cn)if(Ro.left<=qt.left&&Ro.right>=qt.right&&Ro.top<=qt.top&&Ro.bottom>=qt.bottom){ro=!0;break}ro||Cn.push(qt)}}}if(qs.current){const Xt=qs.current;for(;Xt.children.length>Cn.length;)Xt.removeChild(Xt.lastChild);Cn.forEach((qt,ws)=>{let Tn=Xt.children[ws];Tn||(Tn=document.createElement("div"),Tn.className=We.selectedElementHighlight,Xt.appendChild(Tn)),Tn.style.transform=`translate(${qt.left}px, ${qt.top}px)`,Tn.style.width=`${qt.width}px`,Tn.style.height=`${qt.height}px`})}}};return document.addEventListener("mousemove",C,{passive:!0}),()=>document.removeEventListener("mousemove",C)},[j,W,go,qe]),_.useEffect(()=>{if(!j)return;const C=E=>{const D=go,O=js.current;if(go&&O){T.current=!0;const P=Math.min(O.x,E.clientX),ae=Math.min(O.y,E.clientY),we=Math.max(O.x,E.clientX),Ne=Math.max(O.y,E.clientY),Ve=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ht=>{if(!(ht instanceof HTMLElement)||Vo(ht,"[data-feedback-toolbar]")||Vo(ht,"[data-annotation-marker]"))return;const gt=ht.getBoundingClientRect();gt.width>window.innerWidth*.8&&gt.height>window.innerHeight*.5||gt.width<10||gt.height<10||gt.left<we&&gt.right>P&&gt.top<Ne&&gt.bottom>ae&&Ve.push({element:ht,rect:gt})});const lt=Ve.filter(({element:ht})=>!Ve.some(({element:gt})=>gt!==ht&&ht.contains(gt))),xt=E.clientX/window.innerWidth*100,Et=E.clientY+window.scrollY;if(lt.length>0){const ht=lt.reduce((Vn,{rect:Xt})=>({left:Math.min(Vn.left,Xt.left),top:Math.min(Vn.top,Xt.top),right:Math.max(Vn.right,Xt.right),bottom:Math.max(Vn.bottom,Xt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),gt=lt.slice(0,5).map(({element:Vn})=>ml(Vn).name).join(", "),Qn=lt.length>5?` +${lt.length-5} more`:"",Zn=lt[0].element,vs=qu(Zn),Cn=Ku(Zn);K({x:xt,y:Et,clientY:E.clientY,element:`${lt.length} elements: ${gt}${Qn}`,elementPath:"multi-select",boundingBox:{x:ht.left,y:ht.top+window.scrollY,width:ht.right-ht.left,height:ht.bottom-ht.top},isMultiSelect:!0,fullPath:Zu(Zn),accessibility:Qu(Zn),computedStyles:Cn,computedStylesObj:vs,nearbyElements:Gu(Zn),cssClasses:lc(Zn),nearbyText:rc(Zn),sourceFile:od(Zn)})}else{const ht=Math.abs(we-P),gt=Math.abs(Ne-ae);ht>20&&gt>20&&K({x:xt,y:Et,clientY:E.clientY,element:"Area selection",elementPath:`region at (${Math.round(P)}, ${Math.round(ae)})`,boundingBox:{x:P,y:ae+window.scrollY,width:ht,height:gt},isMultiSelect:!0})}ue(null)}else D&&(T.current=!0);yo.current=null,js.current=null,Ho(!1),qs.current&&(qs.current.innerHTML="")};return document.addEventListener("mouseup",C),()=>document.removeEventListener("mouseup",C)},[j,go]);const No=_.useCallback(async(C,E,D)=>{const O=Gt.webhookUrl||w;if(!O||!Gt.webhooksEnabled&&!D)return!1;try{return(await fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:C,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...E})})).ok}catch(P){return console.warn("[Agentation] Webhook failed:",P),!1}},[w,Gt.webhookUrl,Gt.webhooksEnabled]),or=_.useCallback(C=>{var D;if(!W)return;const E={id:Date.now().toString(),x:W.x,y:W.y,comment:C,element:W.element,elementPath:W.elementPath,timestamp:Date.now(),selectedText:W.selectedText,boundingBox:W.boundingBox,nearbyText:W.nearbyText,cssClasses:W.cssClasses,isMultiSelect:W.isMultiSelect,isFixed:W.isFixed,fullPath:W.fullPath,accessibility:W.accessibility,computedStyles:W.computedStyles,nearbyElements:W.nearbyElements,reactComponents:W.reactComponents,sourceFile:W.sourceFile,elementBoundingBoxes:W.elementBoundingBoxes,...g&&Sn?{sessionId:Sn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};$(O=>[...O,E]),pe.current=E.id,Ht(()=>{pe.current=null},300),Ht(()=>{Ls(O=>new Set(O).add(E.id))},250),a==null||a(E),No("annotation.add",{annotation:E}),Ys(!0),Ht(()=>{K(null),Ys(!1)},150),(D=window.getSelection())==null||D.removeAllRanges(),g&&Sn&&rl(g,Sn,E).then(O=>{O.id!==E.id&&($(P=>P.map(ae=>ae.id===E.id?{...ae,id:O.id}:ae)),Ls(P=>{const ae=new Set(P);return ae.delete(E.id),ae.add(O.id),ae}))}).catch(O=>{console.warn("[Agentation] Failed to sync annotation:",O)})},[W,a,No,g,Sn]),Ki=_.useCallback(()=>{Ys(!0),Ht(()=>{K(null),Ys(!1)},150)},[]),Qi=_.useCallback(C=>{const E=M.findIndex(O=>O.id===C),D=M[E];(ne==null?void 0:ne.id)===C&&(As(!0),Ht(()=>{Me(null),Ye(null),Pe([]),As(!1)},150)),Qe(C),Do(O=>new Set(O).add(C)),D&&(c==null||c(D),No("annotation.delete",{annotation:D})),g&&Ka(g,C).catch(O=>{console.warn("[Agentation] Failed to delete annotation from server:",O)}),Ht(()=>{$(O=>O.filter(P=>P.id!==C)),Do(O=>{const P=new Set(O);return P.delete(C),P}),Qe(null),E<M.length-1&&(ke(E),Ht(()=>ke(null),200))},150)},[M,ne,c,No,g]),Li=_.useCallback(C=>{var E;if(!C){_t(null),vt(null),Ze([]);return}if(_t(C.id),(E=C.elementBoundingBoxes)!=null&&E.length){const D=[];for(const O of C.elementBoundingBoxes){const P=O.x+O.width/2,ae=O.y+O.height/2-window.scrollY,Ne=document.elementsFromPoint(P,ae).find(Ve=>!Ve.closest("[data-annotation-marker]")&&!Ve.closest("[data-agentation-root]"));Ne&&D.push(Ne)}Ze(D),vt(null)}else if(C.boundingBox){const D=C.boundingBox,O=D.x+D.width/2,P=C.isFixed?D.y+D.height/2:D.y+D.height/2-window.scrollY,ae=vr(O,P);if(ae){const we=ae.getBoundingClientRect(),Ne=we.width/D.width,Ve=we.height/D.height;Ne<.5||Ve<.5?vt(null):vt(ae)}else vt(null);Ze([])}else vt(null),Ze([])},[]),bi=_.useCallback(C=>{if(!ne)return;const E={...ne,comment:C};$(D=>D.map(O=>O.id===ne.id?E:O)),u==null||u(E),No("annotation.update",{annotation:E}),g&&t1(g,ne.id,{comment:C}).catch(D=>{console.warn("[Agentation] Failed to update annotation on server:",D)}),As(!0),Ht(()=>{Me(null),Ye(null),Pe([]),As(!1)},150)},[ne,u,No,g]),B=_.useCallback(()=>{As(!0),Ht(()=>{Me(null),Ye(null),Pe([]),As(!1)},150)},[]),F=_.useCallback(()=>{const C=M.length,E=st.length>0||!!ot;if(C===0&&nn.length===0&&!E)return;if(d==null||d(M),No("annotations.clear",{annotations:M}),g){Promise.all(M.map(P=>Ka(g,P.id).catch(ae=>{console.warn("[Agentation] Failed to delete annotation from server:",ae)})));for(const[,P]of Rs.current)P&&Ka(g,P).catch(()=>{});Rs.current.clear();for(const[,P]of Hs.current)P&&Ka(g,P).catch(()=>{});Hs.current.clear()}Be(!0),Te(!0),To([]);const D=Ao.current;if(D){const P=D.getContext("2d");P&&P.clearRect(0,0,D.width,D.height)}(st.length>0||ot)&&(fo(P=>P+1),qo(P=>P+1),Ht(()=>{et([]),dn(null)},200)),ft&&Bt(!1),kn&&In(""),hs.current={rearrange:null,placements:[]},td(Ke);const O=C*30+200;Ht(()=>{$([]),Ls(new Set),localStorage.removeItem(Ed(Ke)),Be(!1)},O),Ht(()=>Te(!1),1500)},[Ke,M,nn,st,ot,ft,kn,d,No,g]),ee=_.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke,E=nt&&ft;let D;if(E){if(st.length===0&&!ot&&!kn)return;D=""}else{if(D=o1(M,C,Gt.outputDetail),!D&&nn.length===0&&st.length===0&&!ot)return;D||(D=`## Page Feedback: ${C}
`)}if(!E&&nn.length>0){const O=new Set;for(const Ne of M)Ne.drawingIndex!=null&&O.add(Ne.drawingIndex);const P=Ao.current;P&&(P.style.visibility="hidden");const ae=[],we=window.scrollY;for(let Ne=0;Ne<nn.length;Ne++){if(O.has(Ne))continue;const Ve=nn[Ne];if(Ve.points.length<2)continue;const Fe=Ve.fixed?Ve.points:Ve.points.map(Jn=>({x:Jn.x,y:Jn.y-we}));let lt=1/0,xt=1/0,Et=-1/0,ht=-1/0;for(const Jn of Fe)lt=Math.min(lt,Jn.x),xt=Math.min(xt,Jn.y),Et=Math.max(Et,Jn.x),ht=Math.max(ht,Jn.y);const gt=Et-lt,Qn=ht-xt,Zn=Math.hypot(gt,Qn),vs=Fe[0],Cn=Fe[Fe.length-1],Vn=Math.hypot(Cn.x-vs.x,Cn.y-vs.y);let Xt;const qt=Vn<Zn*.35,ws=gt/Math.max(Qn,1);if(qt&&Zn>20){const Jn=Math.max(gt,Qn)*.15;let $i=0;for(const Zi of Fe){const Pc=Zi.x-lt<Jn,Wd=Et-Zi.x<Jn,Fd=Zi.y-xt<Jn,Xd=ht-Zi.y<Jn;(Pc||Wd)&&(Fd||Xd)&&$i++}Xt=$i>Fe.length*.15?"box":"circle"}else ws>3&&Qn<40?Xt="underline":Vn>Zn*.5?Xt="arrow":Xt="drawing";const Tn=Math.min(10,Fe.length),ro=Math.max(1,Math.floor(Fe.length/Tn)),Ro=new Set,cs=[],vi=[vs];for(let Jn=ro;Jn<Fe.length-1;Jn+=ro)vi.push(Fe[Jn]);vi.push(Cn);for(const Jn of vi){const $i=vr(Jn.x,Jn.y);if(!$i||Ro.has($i)||Vo($i,"[data-feedback-toolbar]"))continue;Ro.add($i);const{name:Zi}=ml($i);cs.includes(Zi)||cs.push(Zi)}const Oi=`${Math.round(lt)},${Math.round(xt)} → ${Math.round(Et)},${Math.round(ht)}`;let zi;(Xt==="circle"||Xt==="box")&&cs.length>0?zi=`${Xt==="box"?"Boxed":"Circled"} **${cs[0]}**${cs.length>1?` (and ${cs.slice(1).join(", ")})`:""} (region: ${Oi})`:Xt==="underline"&&cs.length>0?zi=`Underlined **${cs[0]}** (${Oi})`:Xt==="arrow"&&cs.length>=2?zi=`Arrow from **${cs[0]}** to **${cs[cs.length-1]}** (${Math.round(vs.x)},${Math.round(vs.y)} → ${Math.round(Cn.x)},${Math.round(Cn.y)})`:cs.length>0?zi=`${Xt==="arrow"?"Arrow":"Drawing"} near **${cs.join("**, **")}** (region: ${Oi})`:zi=`Drawing at ${Oi}`,ae.push(zi)}P&&(P.style.visibility=""),ae.length>0&&(D+=`
**Drawings:**
`,ae.forEach((Ne,Ve)=>{D+=`${Ve+1}. ${Ne}
`}))}if((st.length>0||E&&kn)&&(D+=`
`+Qy(st,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:kn||void 0},Gt.outputDetail)),ot){const O=Zy(ot,Gt.outputDetail,{width:window.innerWidth,height:window.innerHeight});O&&(D+=`
`+O)}if(y)try{await navigator.clipboard.writeText(D)}catch{}h==null||h(D),R(!0),Ht(()=>R(!1),2e3),Gt.autoClearAfterCopy&&Ht(()=>F(),500)},[M,nn,st,ot,ft,nt,Yn,kn,Ke,Gt.outputDetail,io,Gt.autoClearAfterCopy,F,y,h]),de=_.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;let E=o1(M,C,Gt.outputDetail);if(!E&&st.length===0&&!ot)return;if(E||(E=`## Page Feedback: ${C}
`),st.length>0&&(E+=`
`+Qy(st,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:kn||void 0},Gt.outputDetail)),ot){const O=Zy(ot,Gt.outputDetail,{width:window.innerWidth,height:window.innerHeight});O&&(E+=`
`+O)}p&&p(E,M),ie("sending"),await new Promise(O=>Ht(O,150));const D=await No("submit",{output:E,annotations:M},!0);ie(D?"sent":"failed"),Ht(()=>ie("idle"),2500),D&&Gt.autoClearAfterCopy&&Ht(()=>F(),500)},[p,No,M,st,ot,ft,Yn,Ke,Gt.outputDetail,io,Gt.autoClearAfterCopy,F]);_.useEffect(()=>{if(!Wn)return;const C=10,E=O=>{const P=O.clientX-Wn.x,ae=O.clientY-Wn.y,we=Math.sqrt(P*P+ae*ae);if(!_o&&we>C&&Vs(!0),_o||we>C){let Ne=Wn.toolbarX+P,Ve=Wn.toolbarY+ae;const Fe=20,lt=337,xt=44,ht=lt-(j?bs==="connected"?297:257:44),gt=Fe-ht,Qn=window.innerWidth-Fe-lt;Ne=Math.max(gt,Math.min(Qn,Ne)),Ve=Math.max(Fe,Math.min(window.innerHeight-xt-Fe,Ve)),Us({x:Ne,y:Ve})}},D=()=>{_o&&(ao.current=!0),Vs(!1),Zo(null)};return document.addEventListener("mousemove",E),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",D)}},[Wn,_o,j,bs]);const Ue=_.useCallback(C=>{var ae,we;if(C.target.closest("button")||C.target.closest("[data-agentation-settings-panel]"))return;const E=C.currentTarget.parentElement;if(!E)return;const D=E.getBoundingClientRect(),O=(ae=rn==null?void 0:rn.x)!=null?ae:D.left,P=(we=rn==null?void 0:rn.y)!=null?we:D.top;Zo({x:C.clientX,y:C.clientY,toolbarX:O,toolbarY:P})},[rn]);if(_.useEffect(()=>{if(!rn)return;const C=()=>{let P=rn.x,ae=rn.y;const Ve=20-(337-(j?bs==="connected"?297:257:44)),Fe=window.innerWidth-20-337;P=Math.max(Ve,Math.min(Fe,P)),ae=Math.max(20,Math.min(window.innerHeight-44-20,ae)),(P!==rn.x||ae!==rn.y)&&Us({x:P,y:ae})};return C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[rn,j,bs]),_.useEffect(()=>{const C=E=>{const D=E.target,O=D.tagName==="INPUT"||D.tagName==="TEXTAREA"||D.isContentEditable;if(E.key==="Escape"){if(nt){Dt?wt(null):ls();return}if(is){Mn(!1);return}if(Rn.length>0){Bs([]);return}W||j&&(as(),k(!1))}if((E.metaKey||E.ctrlKey)&&E.shiftKey&&(E.key==="f"||E.key==="F")){E.preventDefault(),as(),j?Ws():k(!0);return}if(!(O||E.metaKey||E.ctrlKey)&&((E.key==="p"||E.key==="P")&&(E.preventDefault(),as(),Gi()),(E.key==="l"||E.key==="L")&&(E.preventDefault(),as(),is&&Mn(!1),be&&Je(!1),W&&Ki(),nt?ls():Ot(!0)),(E.key==="h"||E.key==="H")&&M.length>0&&(E.preventDefault(),as(),N(P=>!P)),(E.key==="c"||E.key==="C")&&(M.length>0||st.length>0||ot)&&(E.preventDefault(),as(),ee()),(E.key==="x"||E.key==="X")&&(M.length>0||st.length>0||ot)&&(E.preventDefault(),as(),F(),st.length>0&&et([]),ot&&dn(null)),E.key==="s"||E.key==="S")){const P=sa(Gt.webhookUrl)||sa(w||"");M.length>0&&P&&re==="idle"&&(E.preventDefault(),as(),de())}};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[j,is,nt,Dt,st,ot,W,M.length,Gt.webhookUrl,w,re,de,Gi,ee,F,Rn]),!rt||Y)return null;const it=M.length>0,mt=M.filter(C=>!Po.has(C.id)&&C.kind!=="placement"&&C.kind!=="rearrange"),Vt=mt.length>0,gn=M.filter(C=>Po.has(C.id)),Ds=C=>{const ae=C.x/100*window.innerWidth,we=typeof C.y=="string"?parseFloat(C.y):C.y,Ne={};window.innerHeight-we-22-10<80&&(Ne.top="auto",Ne.bottom="calc(100% + 10px)");const Fe=ae-200/2,lt=10;if(Fe<lt){const xt=lt-Fe;Ne.left=`calc(50% + ${xt}px)`}else if(Fe+200>window.innerWidth-lt){const xt=Fe+200-(window.innerWidth-lt);Ne.left=`calc(50% - ${xt}px)`}return Ne};return Bc.createPortal(l.jsxs("div",{ref:Z,style:{display:"contents"},"data-agentation-theme":qn?"dark":"light","data-agentation-accent":Gt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${We.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:rn?{left:rn.x,top:rn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${We.toolbarContainer} ${j?We.expanded:We.collapsed} ${$o?We.entrance:""} ${X?We.hiding:""} ${!Gt.webhooksEnabled&&(sa(Gt.webhookUrl)||sa(w||""))?We.serverConnected:""}`,onClick:j?void 0:C=>{if(ao.current){ao.current=!1,C.preventDefault();return}k(!0)},onMouseDown:Ue,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${We.toggleContent} ${j?We.hidden:We.visible}`,children:[l.jsx(fS,{size:24}),Vt&&l.jsx("span",{className:`${We.badge} ${j?We.fadeOut:""} ${$o?We.entrance:""}`,children:mt.length})]}),l.jsxs("div",{className:`${We.controlsContent} ${j?We.visible:We.hidden} ${rn&&rn.y<100?We.tooltipBelow:""} ${Ft||be?We.tooltipsHidden:""} ${Ko?We.tooltipsInSession:""}`,onMouseEnter:zo,onMouseLeave:Xi,children:[l.jsxs("div",{className:`${We.buttonWrapper} ${rn&&rn.x<120?We.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),as(),Gi()},"data-active":Q,children:l.jsx(gS,{size:24,isPaused:Q})}),l.jsxs("span",{className:We.buttonTooltip,children:[Q?"Resume animations":"Pause animations",l.jsx("span",{className:We.shortcut,children:"P"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:`${We.controlButton} ${qn?"":We.light}`,onClick:C=>{C.stopPropagation(),as(),is&&Mn(!1),be&&Je(!1),W&&Ki(),nt?ls():Ot(!0)},"data-active":nt,style:nt&&ft?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(jS,{size:21})}),l.jsxs("span",{className:We.buttonTooltip,children:[nt?"Exit layout mode":"Layout mode",l.jsx("span",{className:We.shortcut,children:"L"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),as(),N(!L)},disabled:!it||nt,children:l.jsx(_S,{size:24,isOpen:L})}),l.jsxs("span",{className:We.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:We.shortcut,children:"H"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:`${We.controlButton} ${ge?We.statusShowing:""}`,onClick:C=>{C.stopPropagation(),as(),ee()},disabled:nt&&ft?st.length===0&&!((bo=ot==null?void 0:ot.sections)!=null&&bo.length):!it&&nn.length===0&&st.length===0&&!((Un=ot==null?void 0:ot.sections)!=null&&Un.length),"data-active":ge,children:l.jsx(mS,{size:24,copied:ge,tint:nt&&ft&&(st.length>0||(Zt=ot==null?void 0:ot.sections)!=null&&Zt.length)?"#f97316":void 0})}),l.jsxs("span",{className:We.buttonTooltip,children:[nt&&ft?"Copy layout":"Copy feedback",l.jsx("span",{className:We.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${We.buttonWrapper} ${We.sendButtonWrapper} ${j&&!Gt.webhooksEnabled&&(sa(Gt.webhookUrl)||sa(w||""))?We.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${We.controlButton} ${re==="sent"||re==="failed"?We.statusShowing:""}`,onClick:C=>{C.stopPropagation(),as(),de()},disabled:!it||!sa(Gt.webhookUrl)&&!sa(w||"")||re==="sending","data-no-hover":re==="sent"||re==="failed",tabIndex:sa(Gt.webhookUrl)||sa(w||"")?0:-1,children:[l.jsx(pS,{size:24,state:re}),it&&re==="idle"&&l.jsx("span",{className:We.buttonBadge,children:M.length})]}),l.jsxs("span",{className:We.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:We.shortcut,children:"S"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),as(),F()},disabled:!it&&nn.length===0&&st.length===0&&!((cn=ot==null?void 0:ot.sections)!=null&&cn.length),"data-danger":!0,children:l.jsx(xS,{size:24})}),l.jsxs("span",{className:We.buttonTooltip,children:["Clear all",l.jsx("span",{className:We.shortcut,children:"X"})]})]}),l.jsxs("div",{className:We.buttonWrapper,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),as(),nt&&ls(),Je(!be)},children:l.jsx(yS,{size:24})}),g&&bs!=="disconnected"&&l.jsx("span",{className:`${We.mcpIndicator} ${We[bs]} ${be?We.hidden:""}`,title:bs==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:We.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:We.divider}),l.jsxs("div",{className:`${We.buttonWrapper} ${rn&&typeof window<"u"&&rn.x>window.innerWidth-120?We.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:We.controlButton,onClick:C=>{C.stopPropagation(),as(),Ws()},children:l.jsx(bS,{size:24})}),l.jsxs("span",{className:We.buttonTooltip,children:["Exit",l.jsx("span",{className:We.shortcut,children:"Esc"})]})]})]}),l.jsx(t6,{visible:nt&&j,activeType:Dt,onSelect:C=>{wt(Dt===C?null:C)},isDarkMode:qn,sectionCount:(hn=ot==null?void 0:ot.sections.length)!=null?hn:0,onDetectSections:()=>{var we,Ne;const C=f6(),E=(we=ot==null?void 0:ot.sections)!=null?we:[],D=new Set(E.map(Ve=>Ve.selector)),O=C.filter(Ve=>!D.has(Ve.selector)),P=[...E,...O],ae=[...(Ne=ot==null?void 0:ot.originalOrder)!=null?Ne:[],...O.map(Ve=>Ve.id)];dn({sections:P,originalOrder:ae,detectedAt:Date.now()})},placementCount:st.length,onClearPlacements:()=>{fo(C=>C+1),qo(C=>C+1),Ht(()=>{dn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ft,onBlankCanvasChange:C=>{const E={sections:[],originalOrder:[],detectedAt:Date.now()};C?(Eo.current={rearrange:ot,placements:st},dn(hs.current.rearrange||E),et(hs.current.placements),wt(null)):(hs.current={rearrange:ot,placements:st},dn(Eo.current.rearrange||E),et(Eo.current.placements)),Bt(C)},wireframePurpose:kn,onWireframePurposeChange:In,Tooltip:Mr,onDragStart:(C,E)=>{var xt;E.preventDefault();const D=kt[C];let O=null,P=!1;const ae=E.clientX,we=E.clientY,Ne=E.target.closest("[data-feedback-toolbar]"),Ve=(xt=Ne==null?void 0:Ne.getBoundingClientRect().top)!=null?xt:window.innerHeight,Fe=Et=>{const ht=Et.clientX-ae,gt=Et.clientY-we;if(!P&&(Math.abs(ht)>4||Math.abs(gt)>4)&&(P=!0,O=document.createElement("div"),O.className=`${Re.dragPreview}${ft?` ${Re.dragPreviewWireframe}`:""}`,document.body.appendChild(O)),!O)return;const Qn=Math.max(0,Ve-Et.clientY),Zn=Math.min(1,Qn/180),vs=1-Math.pow(1-Zn,2),Cn=28,Vn=20,Xt=Math.min(140,D.width*.18),qt=Math.min(90,D.height*.18),ws=Cn+(Xt-Cn)*vs,Tn=Vn+(qt-Vn)*vs;O.style.width=`${ws}px`,O.style.height=`${Tn}px`,O.style.left=`${Et.clientX-ws/2}px`,O.style.top=`${Et.clientY-Tn/2}px`,O.style.opacity=`${.5+.5*vs}`,O.textContent=vs>.25?C:""},lt=Et=>{if(window.removeEventListener("mousemove",Fe),window.removeEventListener("mouseup",lt),O&&document.body.removeChild(O),P){const ht=D.width,gt=D.height,Qn=window.scrollY,Zn=Math.max(0,Et.clientX-ht/2),vs=Math.max(0,Et.clientY+Qn-gt/2),Cn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:C,x:Zn,y:vs,width:ht,height:gt,scrollY:Qn,timestamp:Date.now()};et(Vn=>[...Vn,Cn]),wt(null),Ps.current=new Set,Go(Vn=>Vn+1)}};window.addEventListener("mousemove",Fe),window.addEventListener("mouseup",lt)}}),l.jsx(vC,{settings:Gt,onSettingsChange:C=>ui(E=>({...E,...C})),isDarkMode:qn,onToggleTheme:oo,isDevMode:Qo,connectionStatus:bs,endpoint:g,isVisible:Ge,toolbarNearBottom:!!rn&&rn.y<230,settingsPage:St,onSettingsPageChange:He,onHideToolbar:En})]})}),(nt||Pt)&&l.jsx("div",{className:`${Re.blankCanvas} ${vn?Re.visible:""} ${un?Re.gridActive:""}`,style:{"--canvas-opacity":_n},"data-feedback-toolbar":!0}),nt&&ft&&vn&&l.jsxs("div",{className:Re.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Re.wireframeOpacityRow,children:[l.jsx("span",{className:Re.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Re.wireframeOpacitySlider,min:0,max:1,step:.01,value:_n,onChange:C=>fs(Number(C.target.value))})]}),l.jsxs("div",{className:Re.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Re.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Re.wireframeNoticeDivider}),l.jsx("button",{className:Re.wireframeStartOver,onClick:()=>{fo(C=>C+1),dn({sections:[],originalOrder:[],detectedAt:Date.now()}),hs.current={rearrange:null,placements:[]},In(""),td(Ke)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(nt||Pt)&&l.jsx(K4,{placements:st,onChange:et,activeComponent:Pt?null:Dt,onActiveComponentChange:wt,isDarkMode:qn,exiting:Pt,onInteractionChange:Dn,passthrough:!Dt,extraSnapRects:ot==null?void 0:ot.sections.map(C=>C.currentRect),deselectSignal:Es,clearSignal:so,wireframe:ft,onSelectionChange:(C,E)=>{Ps.current=C,E||(Ns.current=new Set,uo(D=>D+1))},onDragMove:(C,E)=>{const D=Ns.current;if(!(!D.size||!ot)){if(!ms.current){ms.current=new Map;for(const O of ot.sections)D.has(O.id)&&ms.current.set(O.id,{x:O.currentRect.x,y:O.currentRect.y})}for(const O of ot.sections){if(!D.has(O.id)||!ms.current.get(O.id))continue;const ae=document.querySelector(`[data-rearrange-section="${O.id}"]`);ae&&(ae.style.transform=`translate(${C}px, ${E}px)`)}}},onDragEnd:(C,E,D)=>{const O=Ns.current,P=ms.current;if(ms.current=null,!(!O.size||!ot||!P)){for(const ae of O){const we=document.querySelector(`[data-rearrange-section="${ae}"]`);we&&(we.style.transform="")}D&&dn(ae=>ae&&{...ae,sections:ae.sections.map(we=>{const Ne=P.get(we.id);return Ne?{...we,currentRect:{...we.currentRect,x:Math.max(0,Ne.x+C),y:Math.max(0,Ne.y+E)}}:we})})}}}),(nt||Pt)&&ot&&l.jsx(p6,{rearrangeState:ot,onChange:dn,isDarkMode:qn,exiting:Pt,blankCanvas:ft,extraSnapRects:st.map(C=>({x:C.x,y:C.y,width:C.width,height:C.height})),clearSignal:jn,deselectSignal:ks,onSelectionChange:(C,E)=>{Ns.current=C,E||(Ps.current=new Set,Go(D=>D+1))},onDragMove:(C,E)=>{const D=Ps.current;if(D.size){if(!ms.current){ms.current=new Map;for(const O of st)D.has(O.id)&&ms.current.set(O.id,{x:O.x,y:O.y})}for(const O of D){const P=document.querySelector(`[data-design-placement="${O}"]`);P&&(P.style.transform=`translate(${C}px, ${E}px)`)}}},onDragEnd:(C,E,D)=>{const O=Ps.current,P=ms.current;if(ms.current=null,!(!O.size||!P)){for(const ae of O){const we=document.querySelector(`[data-design-placement="${ae}"]`);we&&(we.style.transform="")}D&&et(ae=>ae.map(we=>{const Ne=P.get(we.id);return Ne?{...we,x:Math.max(0,Ne.x+C),y:Math.max(0,Ne.y+E)}:we}))}}}),l.jsx("canvas",{ref:Ao,className:`${We.drawCanvas} ${is?We.active:""}`,style:{opacity:Jt?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:We.markersLayer,"data-feedback-toolbar":!0,children:[le&&mt.filter(C=>!C.isFixed).map((C,E,D)=>l.jsx(i1,{annotation:C,globalIndex:mt.findIndex(O=>O.id===C.id),layerIndex:E,layerSize:D.length,isExiting:je,isClearing:$e,isAnimated:wo.has(C.id),isHovered:!je&&tt===C.id,isDeleting:Yt===C.id,isEditingAny:!!ne,renumberFrom:pt,markerClickBehavior:Gt.markerClickBehavior,tooltipStyle:Ds(C),onHoverEnter:O=>!je&&O.id!==pe.current&&Li(O),onHoverLeave:()=>Li(null),onClick:O=>Gt.markerClickBehavior==="delete"?Qi(O.id):qi(O),onContextMenu:qi},C.id)),le&&!je&&gn.filter(C=>!C.isFixed).map(C=>l.jsx(a1,{annotation:C},C.id))]}),l.jsxs("div",{className:We.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[le&&mt.filter(C=>C.isFixed).map((C,E,D)=>l.jsx(i1,{annotation:C,globalIndex:mt.findIndex(O=>O.id===C.id),layerIndex:E,layerSize:D.length,isExiting:je,isClearing:$e,isAnimated:wo.has(C.id),isHovered:!je&&tt===C.id,isDeleting:Yt===C.id,isEditingAny:!!ne,renumberFrom:pt,markerClickBehavior:Gt.markerClickBehavior,tooltipStyle:Ds(C),onHoverEnter:O=>!je&&O.id!==pe.current&&Li(O),onHoverLeave:()=>Li(null),onClick:O=>Gt.markerClickBehavior==="delete"?Qi(O.id):qi(O),onContextMenu:qi},C.id)),le&&!je&&gn.filter(C=>C.isFixed).map(C=>l.jsx(a1,{annotation:C,fixed:!0},C.id))]}),j&&l.jsxs("div",{className:We.overlay,"data-feedback-toolbar":!0,style:W||ne?{zIndex:99999}:void 0,children:[(J==null?void 0:J.rect)&&!W&&!bt&&!go&&l.jsx("div",{className:`${We.hoverHighlight} ${We.enter}`,style:{left:J.rect.left,top:J.rect.top,width:J.rect.width,height:J.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Rn.filter(C=>document.contains(C.element)).map((C,E)=>{const D=C.element.getBoundingClientRect(),O=Rn.length>1;return l.jsx("div",{className:O?We.multiSelectOutline:We.singleSelectOutline,style:{position:"fixed",left:D.left,top:D.top,width:D.width,height:D.height,...O?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},E)}),tt&&!W&&(()=>{var P;const C=M.find(ae=>ae.id===tt);if(!(C!=null&&C.boundingBox))return null;if((P=C.elementBoundingBoxes)!=null&&P.length)return yt.length>0?yt.filter(ae=>document.contains(ae)).map((ae,we)=>{const Ne=ae.getBoundingClientRect();return l.jsx("div",{className:`${We.multiSelectOutline} ${We.enter}`,style:{left:Ne.left,top:Ne.top,width:Ne.width,height:Ne.height}},`hover-outline-live-${we}`)}):C.elementBoundingBoxes.map((ae,we)=>l.jsx("div",{className:`${We.multiSelectOutline} ${We.enter}`,style:{left:ae.x,top:ae.y-ut,width:ae.width,height:ae.height}},`hover-outline-${we}`));const E=It&&document.contains(It)?It.getBoundingClientRect():null,D=E?{x:E.left,y:E.top,width:E.width,height:E.height}:{x:C.boundingBox.x,y:C.isFixed?C.boundingBox.y:C.boundingBox.y-ut,width:C.boundingBox.width,height:C.boundingBox.height},O=C.isMultiSelect;return l.jsx("div",{className:`${O?We.multiSelectOutline:We.singleSelectOutline} ${We.enter}`,style:{left:D.x,top:D.y,width:D.width,height:D.height,...O?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),J&&!W&&!bt&&!go&&l.jsxs("div",{className:`${We.hoverTooltip} ${We.enter}`,style:{left:Math.max(8,Math.min(I.x,window.innerWidth-100)),top:Math.max(I.y-(J.reactComponents?48:32),8)},children:[J.reactComponents&&l.jsx("div",{className:We.hoverReactPath,children:J.reactComponents}),l.jsx("div",{className:We.hoverElementName,children:J.elementName})]}),W&&l.jsxs(l.Fragment,{children:[(Kn=W.multiSelectElements)!=null&&Kn.length?W.multiSelectElements.filter(C=>document.contains(C)).map((C,E)=>{const D=C.getBoundingClientRect();return l.jsx("div",{className:`${We.multiSelectOutline} ${Qt?We.exit:We.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height}},`pending-multi-${E}`)}):W.targetElement&&document.contains(W.targetElement)?(()=>{const C=W.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${We.singleSelectOutline} ${Qt?We.exit:We.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():W.boundingBox&&l.jsx("div",{className:`${W.isMultiSelect?We.multiSelectOutline:We.singleSelectOutline} ${Qt?We.exit:We.enter}`,style:{left:W.boundingBox.x,top:W.boundingBox.y-ut,width:W.boundingBox.width,height:W.boundingBox.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const C=W.x,E=W.isFixed?W.y:W.y-ut;return l.jsxs(l.Fragment,{children:[l.jsx(dC,{x:C,y:E,isMultiSelect:W.isMultiSelect,isExiting:Qt}),l.jsx(jd,{ref:Ut,element:W.element,selectedText:W.selectedText,computedStyles:W.computedStylesObj,placeholder:W.element==="Area selection"?"What should change in this area?":W.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:or,onCancel:Ki,isExiting:Qt,lightMode:!qn,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,C/100*window.innerWidth)),...E>window.innerHeight-290?{bottom:window.innerHeight-E+20}:{top:E+20}}})]})})()]}),ne&&l.jsxs(l.Fragment,{children:[(ye=ne.elementBoundingBoxes)!=null&&ye.length?ct.length>0?ct.filter(C=>document.contains(C)).map((C,E)=>{const D=C.getBoundingClientRect();return l.jsx("div",{className:`${We.multiSelectOutline} ${We.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height}},`edit-multi-live-${E}`)}):ne.elementBoundingBoxes.map((C,E)=>l.jsx("div",{className:`${We.multiSelectOutline} ${We.enter}`,style:{left:C.x,top:C.y-ut,width:C.width,height:C.height}},`edit-multi-${E}`)):(()=>{const C=Xe&&document.contains(Xe)?Xe.getBoundingClientRect():null,E=C?{x:C.left,y:C.top,width:C.width,height:C.height}:ne.boundingBox?{x:ne.boundingBox.x,y:ne.isFixed?ne.boundingBox.y:ne.boundingBox.y-ut,width:ne.boundingBox.width,height:ne.boundingBox.height}:null;return E?l.jsx("div",{className:`${ne.isMultiSelect?We.multiSelectOutline:We.singleSelectOutline} ${We.enter}`,style:{left:E.x,top:E.y,width:E.width,height:E.height,...ne.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:Lt,element:ne.element,selectedText:ne.selectedText,computedStyles:l6(ne.computedStyles),placeholder:"Edit your feedback...",initialValue:ne.comment,submitLabel:"Save",onSubmit:bi,onCancel:B,onDelete:()=>Qi(ne.id),isExiting:Ts,lightMode:!qn,accentColor:ne.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const C=ne.isFixed?ne.y:ne.y-ut;return{left:Math.max(160,Math.min(window.innerWidth-160,ne.x/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})()})]}),go&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:xo,className:We.dragSelection}),l.jsx("div",{ref:qs,className:We.highlightsContainer})]})]})]}),document.body)}const gp=_.createContext({});function Lc(t){const n=_.useRef(null);return n.current===null&&(n.current=t()),n.current}const CC=typeof window<"u",yp=CC?_.useLayoutEffect:_.useEffect,zd=_.createContext(null);function xp(t,n){t.indexOf(n)===-1&&t.push(n)}function _l(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const la=(t,n,i)=>i>n?n:i<t?t:i;let bp=()=>{};const tr={},db=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function fb(t){return typeof t=="object"&&t!==null}const hb=t=>/^0[^.\s]+$/u.test(t);function mb(t){let n;return()=>(n===void 0&&(n=t()),n)}const Ni=t=>t,kC=(t,n)=>i=>n(t(i)),Oc=(...t)=>t.reduce(kC),gl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class vp{constructor(){this.subscriptions=[]}add(n){return xp(this.subscriptions,n),()=>_l(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ri=t=>t*1e3,Di=t=>t/1e3;function pb(t,n){return n?t*(1e3/n):0}const jC=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},_b=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,MC=1e-7,EC=12;function TC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=_b(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>MC&&++h<EC);return d}function zc(t,n,i,a){if(t===n&&i===a)return Ni;const c=u=>TC(u,0,1,t,i);return u=>u===0||u===1?u:_b(c(u),n,a)}const gb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,yb=t=>n=>1-t(1-n),xb=zc(.33,1.53,.69,.99),wp=yb(xb),bb=gb(wp),vb=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),wb=yb(Sp),Sb=gb(Sp),AC=zc(.42,0,1,1),DC=zc(0,0,.58,1),Cb=zc(.42,0,.58,1),kb=t=>Array.isArray(t)&&typeof t[0]!="number";function jb(t,n){return kb(t)?t[jC(0,t.length,n)]:t}const Mb=t=>Array.isArray(t)&&typeof t[0]=="number",NC={linear:Ni,easeIn:AC,easeInOut:Cb,easeOut:DC,circIn:Sp,circInOut:Sb,circOut:wb,backIn:wp,backInOut:bb,backOut:xb,anticipate:vb},RC=t=>typeof t=="string",u1=t=>{if(Mb(t)){bp(t.length===4);const[n,i,a,c]=t;return zc(n,i,a,c)}else if(RC(t))return NC[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function BC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),t()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(g),S.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const LC=40;function Eb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((L,N)=>(L[N]=BC(u),L),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:w,postRender:S}=d,j=()=>{const L=tr.useManualTiming,N=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(N-c.timestamp,LC),1)),c.timestamp=N,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},k=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:id.reduce((L,N)=>{const Y=d[N];return L[N]=(H,X=!1,U=!1)=>(i||k(),Y.schedule(H,X,U)),L},{}),cancel:L=>{for(let N=0;N<id.length;N++)d[id[N]].cancel(L)},state:c,steps:d}}const{schedule:os,cancel:ka,state:Mo,steps:cm}=Eb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ni,!0);let pd;function OC(){pd=void 0}const Wo={now:()=>(pd===void 0&&Wo.set(Mo.isProcessing||tr.useManualTiming?Mo.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(OC)}},Tb=t=>n=>typeof n=="string"&&n.startsWith(t),Ab=Tb("--"),zC=Tb("var(--"),Cp=t=>zC(t)?$C.test(t.split("/*")[0].trim()):!1,$C=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function d1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const vl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...vl,transform:t=>la(0,1,t)},ad={...vl,default:1},wc=t=>Math.round(t*1e5)/1e5,kp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function IC(t){return t==null}const PC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jp=(t,n)=>i=>!!(typeof i=="string"&&PC.test(i)&&i.startsWith(t)||n&&!IC(i)&&Object.prototype.hasOwnProperty.call(i,n)),Db=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(kp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},HC=t=>la(0,255,t),um={...vl,transform:t=>Math.round(HC(t))},Er={test:jp("rgb","red"),parse:Db("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+um.transform(t)+", "+um.transform(n)+", "+um.transform(i)+", "+wc(Tc.transform(a))+")"};function UC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const zm={test:jp("#"),parse:UC,transform:Er.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Qa=$c("deg"),ra=$c("%"),Tt=$c("px"),VC=$c("vh"),YC=$c("vw"),f1={...ra,parse:t=>ra.parse(t)/100,transform:t=>ra.transform(t*100)},dl={test:jp("hsl","hue"),parse:Db("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+ra.transform(wc(n))+", "+ra.transform(wc(i))+", "+wc(Tc.transform(a))+")"},to={test:t=>Er.test(t)||zm.test(t)||dl.test(t),parse:t=>Er.test(t)?Er.parse(t):dl.test(t)?dl.parse(t):zm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Er.transform(t):dl.transform(t),getAnimatableNone:t=>{const n=to.parse(t);return n.alpha=0,to.transform(n)}},WC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function FC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(kp))==null?void 0:n.length)||0)+(((i=t.match(WC))==null?void 0:i.length)||0)>0}const Nb="number",Rb="color",XC="var",GC="var(",h1="${}",qC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(qC,p=>(to.test(p)?(a.color.push(u),c.push(Rb),i.push(to.parse(p))):p.startsWith(GC)?(a.var.push(u),c.push(XC),i.push(p)):(a.number.push(u),c.push(Nb),i.push(parseFloat(p))),++u,h1)).split(h1);return{values:i,split:h,indexes:a,types:c}}function KC(t){return yl(t).values}function Bb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Nb?c+=wc(a[u]):d===Rb?c+=to.transform(a[u]):c+=a[u]}return c}}function QC(t){return Bb(yl(t))}const ZC=t=>typeof t=="number"?0:to.test(t)?to.getAnimatableNone(t):t,JC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:ZC(t);function e3(t){const n=yl(t);return Bb(n)(n.values.map((a,c)=>JC(a,n.split[c])))}const Fi={test:FC,parse:KC,createTransformer:QC,getAnimatableNone:e3};function dm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function t3({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=dm(p,h,t+1/3),u=dm(p,h,t),d=dm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const ys=(t,n,i)=>t+(n-t)*i,fm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},n3=[zm,Er,dl],s3=t=>n3.find(n=>n.test(t));function m1(t){const n=s3(t);if(!n)return!1;let i=n.parse(t);return n===dl&&(i=t3(i)),i}const p1=(t,n)=>{const i=m1(t),a=m1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=fm(i.red,a.red,u),c.green=fm(i.green,a.green,u),c.blue=fm(i.blue,a.blue,u),c.alpha=ys(i.alpha,a.alpha,u),Er.transform(c))},$m=new Set(["none","hidden"]);function o3(t,n){return $m.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function i3(t,n){return i=>ys(t,n,i)}function Mp(t){return typeof t=="number"?i3:typeof t=="string"?Cp(t)?Td:to.test(t)?p1:l3:Array.isArray(t)?Lb:typeof t=="object"?to.test(t)?p1:a3:Td}function Lb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Mp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function a3(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Mp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function r3(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const l3=(t,n)=>{const i=Fi.createTransformer(n),a=yl(t),c=yl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?$m.has(t)&&!c.values.length||$m.has(n)&&!a.values.length?o3(t,n):Oc(Lb(r3(a,c),c.values),i):Td(t,n)};function Ob(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?ys(t,n,i):Mp(t)(t,n)}const c3=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>os.update(n,i),stop:()=>ka(n),now:()=>Mo.isProcessing?Mo.timestamp:Wo.now()}},zb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function Ep(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function $b(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Ep(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Di(c)}}const Is={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Im(t,n){return t*Math.sqrt(1-n*n)}const u3=12;function d3(t,n,i){let a=i;for(let c=1;c<u3;c++)a=a-t(a)/n(a);return a}const hm=.001;function f3({duration:t=Is.duration,bounce:n=Is.bounce,velocity:i=Is.velocity,mass:a=Is.mass}){let c,u,d=1-n;d=la(Is.minDamping,Is.maxDamping,d),t=la(Is.minDuration,Is.maxDuration,Di(t)),d<1?(c=y=>{const g=y*d,x=g*t,b=g-i,w=Im(y,d),S=Math.exp(-x);return hm-b/w*S},u=y=>{const x=y*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(y,2)*t,S=Math.exp(-x),j=Im(Math.pow(y,2),d);return(-c(y)+hm>0?-1:1)*((b-w)*S)/j}):(c=y=>{const g=Math.exp(-y*t),x=(y-i)*t+1;return-hm+g*x},u=y=>{const g=Math.exp(-y*t),x=(i-y)*(t*t);return g*x});const h=5/t,p=d3(c,u,h);if(t=ri(t),isNaN(p))return{stiffness:Is.stiffness,damping:Is.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const h3=["duration","bounce"],m3=["stiffness","damping","mass"];function _1(t,n){return n.some(i=>t[i]!==void 0)}function p3(t){let n={velocity:Is.velocity,stiffness:Is.stiffness,damping:Is.damping,mass:Is.mass,isResolvedFromDuration:!1,...t};if(!_1(t,m3)&&_1(t,h3))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*la(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Is.mass,stiffness:c,damping:u}}else{const i=f3({...t,velocity:0});n={...n,...i,mass:Is.mass},n.isResolvedFromDuration=!0}return n}function Ac(t=Is.visualDuration,n=Is.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:w}=p3({...i,velocity:-Di(i.velocity||0)}),S=b||0,j=y/(2*Math.sqrt(p*g)),k=d-u,M=Di(Math.sqrt(p/g)),$=Math.abs(k)<5;a||(a=$?Is.restSpeed.granular:Is.restSpeed.default),c||(c=$?Is.restDelta.granular:Is.restDelta.default);let L,N,Y,H,X,U;if(j<1)Y=Im(M,j),H=(S+j*M*k)/Y,L=le=>{const oe=Math.exp(-j*M*le);return d-oe*(H*Math.sin(Y*le)+k*Math.cos(Y*le))},X=j*M*H+k*Y,U=j*M*k-H*Y,N=le=>Math.exp(-j*M*le)*(X*Math.sin(Y*le)+U*Math.cos(Y*le));else if(j===1){L=oe=>d-Math.exp(-M*oe)*(k+(S+M*k)*oe);const le=S+M*k;N=oe=>Math.exp(-M*oe)*(M*le*oe-S)}else{const le=M*Math.sqrt(j*j-1);L=J=>{const ue=Math.exp(-j*M*J),I=Math.min(le*J,300);return d-ue*((S+j*M*k)*Math.sinh(I)+le*k*Math.cosh(I))/le};const oe=(S+j*M*k)/le,je=j*M*oe-k*le,ze=j*M*k-oe*le;N=J=>{const ue=Math.exp(-j*M*J),I=Math.min(le*J,300);return ue*(je*Math.sinh(I)+ze*Math.cosh(I))}}const Z={calculatedDuration:w&&x||null,velocity:le=>ri(N(le)),next:le=>{if(!w&&j<1){const je=Math.exp(-j*M*le),ze=Math.sin(Y*le),J=Math.cos(Y*le),ue=d-je*(H*ze+k*J),I=ri(je*(X*ze+U*J));return h.done=Math.abs(I)<=a&&Math.abs(d-ue)<=c,h.value=h.done?d:ue,h}const oe=L(le);if(w)h.done=le>=x;else{const je=ri(N(le));h.done=Math.abs(je)<=a&&Math.abs(d-oe)<=c}return h.value=h.done?d:oe,h},toString:()=>{const le=Math.min(Ep(Z),Ad),oe=zb(je=>Z.next(le*je).value,le,30);return le+"ms "+oe},toTransition:()=>{}};return Z}Ac.applyToOptions=t=>{const n=$b(t,100,Ac);return t.ease=n.ease,t.duration=ri(n.duration),t.type="keyframes",t};const _3=5;function Ib(t,n,i){const a=Math.max(n-_3,0);return pb(i-t(a),n-a)}function Pm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=t[0],b={done:!1,value:x},w=U=>h!==void 0&&U<h||p!==void 0&&U>p,S=U=>h===void 0?p:p===void 0||Math.abs(h-U)<Math.abs(p-U)?h:p;let j=i*n;const k=x+j,M=d===void 0?k:d(k);M!==k&&(j=M-x);const $=U=>-j*Math.exp(-U/a),L=U=>M+$(U),N=U=>{const Z=$(U),le=L(U);b.done=Math.abs(Z)<=y,b.value=b.done?M:le};let Y,H;const X=U=>{w(b.value)&&(Y=U,H=Ac({keyframes:[b.value,S(b.value)],velocity:Ib(L,U,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return X(0),{calculatedDuration:null,next:U=>{let Z=!1;return!H&&Y===void 0&&(Z=!0,N(U),X(U)),Y!==void 0&&U>=Y?H.next(U-Y):(!Z&&N(U),b)}}}function g3(t,n,i){const a=[],c=i||tr.mix||Ob,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Ni:n;h=Oc(p,h)}a.push(h)}return a}function Pb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(bp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=g3(n,a,c),p=h.length,y=g=>{if(d&&g<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const b=gl(t[x],t[x+1],g);return h[x](b)};return i?g=>y(la(t[0],t[u-1],g)):y}function Hb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=gl(0,n,a);t.push(ys(i,1,c))}}function Ub(t){const n=[0];return Hb(n,t.length-1),n}function y3(t,n){return t.map(i=>i*n)}function x3(t,n){return t.map(()=>n||Cb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=kb(a)?a.map(u1):u1(a),u={done:!1,value:n[0]},d=y3(i&&i.length===n.length?i:Ub(n),t),h=Pb(d,n,{ease:Array.isArray(c)?c:x3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const b3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(b3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const v3={decay:Pm,inertia:Pm,tween:Sc,keyframes:Sc,spring:Ac};function Vb(t){typeof t.type=="string"&&(t.type=v3[t.type])}class Tp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const w3=t=>t/100;class Dd extends Tp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Wo.now()&&this.tick(Wo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Vb(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=Oc(w3,Ob(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Ep(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:j,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-y*(this.playbackSpeed>=0?1:-1),$=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,N=a;if(x){const U=Math.min(this.currentTime,c)/h;let Z=Math.floor(U),le=U%1;!le&&U>=1&&(le=1),le===1&&Z--,Z=Math.min(Z,x+1),!!(Z%2)&&(b==="reverse"?(le=1-le,w&&(le-=w/h)):b==="mirror"&&(N=d)),L=la(0,1,le)*h}let Y;$?(this.delayState.value=g[0],Y=this.delayState):Y=N.next(L),u&&!$&&(Y.value=u(Y.value));let{done:H}=Y;!$&&p!==null&&(H=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&H);return X&&S!==Pm&&(Y.value=$d(g,this.options,k,this.speed)),j&&j(Y.value),X&&this.finish(),Y}then(n,i){return this.finished.then(n,i)}get duration(){return Di(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Di(n)}get time(){return Di(this.currentTime)}set time(n){n=ri(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ib(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Wo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Di(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=c3,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Wo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function S3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Tr=t=>t*180/Math.PI,Hm=t=>{const n=Tr(Math.atan2(t[1],t[0]));return Um(n)},C3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hm,rotateZ:Hm,skewX:t=>Tr(Math.atan(t[1])),skewY:t=>Tr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Um=t=>(t=t%360,t<0&&(t+=360),t),g1=Hm,y1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),x1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),k3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:y1,scaleY:x1,scale:t=>(y1(t)+x1(t))/2,rotateX:t=>Um(Tr(Math.atan2(t[6],t[5]))),rotateY:t=>Um(Tr(Math.atan2(-t[2],t[0]))),rotateZ:g1,rotate:g1,skewX:t=>Tr(Math.atan(t[4])),skewY:t=>Tr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Vm(t){return t.includes("scale")?1:0}function Ym(t,n){if(!t||t==="none")return Vm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=k3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=C3,c=h}if(!c)return Vm(n);const u=a[n],d=c[1].split(",").map(M3);return typeof u=="function"?u(d):d[u]}const j3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Ym(i,n)};function M3(t){return parseFloat(t.trim())}const wl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sl=new Set(wl),b1=t=>t===vl||t===Tt,E3=new Set(["x","y","z"]),T3=wl.filter(t=>!E3.has(t));function A3(t){const n=[];return T3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const er={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Ym(n,"x"),y:(t,{transform:n})=>Ym(n,"y")};er.translateX=er.x;er.translateY=er.y;const Ar=new Set;let Wm=!1,Fm=!1,Xm=!1;function Yb(){if(Fm){const t=Array.from(Ar).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=A3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Fm=!1,Wm=!1,Ar.forEach(t=>t.complete(Xm)),Ar.clear()}function Wb(){Ar.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fm=!0)})}function D3(){Xm=!0,Wb(),Yb(),Xm=!1}class Ap{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ar.add(this),Wm||(Wm=!0,os.read(Wb),os.resolveKeyframes(Yb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}S3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Ar.delete(this)}cancel(){this.state==="scheduled"&&(Ar.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const N3=t=>t.startsWith("--");function Fb(t,n,i){N3(n)?t.style.setProperty(n,i):t.style[n]=i}const R3={};function Xb(t,n){const i=mb(t);return()=>{var a;return(a=R3[n])!=null?a:i()}}const B3=Xb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Gb=Xb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,v1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function qb(t,n){if(t)return typeof t=="function"?Gb()?zb(t,n):"ease-out":Mb(t)?gc(t):Array.isArray(t)?t.map(i=>qb(i,n)||v1.easeOut):v1[t]}function L3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=qb(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(g,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function O3({type:t,...n}){var i,a;return Dp(t)&&Gb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Kb extends Tp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,bp(typeof n.type!="string");const y=O3(n);this.animation=L3(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Fb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Di(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Di(n)}get time(){return Di(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ri(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&B3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Ni):c(this)}}const Qb={anticipate:vb,backInOut:bb,circInOut:Sb};function z3(t){return t in Qb}function $3(t){typeof t.ease=="string"&&z3(t.ease)&&(t.ease=Qb[t.ease])}const mm=10;class I3 extends Kb{constructor(n){$3(n),Vb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Dd({...d,autoplay:!1}),p=Math.max(mm,Wo.now()-this.startTime),y=la(0,mm,p-mm),g=h.sample(p).value,{name:x}=this.options;u&&x&&Fb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const w1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Fi.test(t)||t==="0")&&!t.startsWith("url("));function P3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function H3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=w1(c,n),h=w1(u,n);return!d||!h?!1:P3(t)||(i==="spring"||Dp(i))&&a}function Gm(t){t.duration=0,t.type="keyframes"}const Zb=new Set(["opacity","clipPath","filter","transform"]),U3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function V3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&U3.test(t[n]))return!0;return!1}const Y3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),W3=mb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function F3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return W3()&&i&&(Zb.has(i)||Y3.has(i)&&V3(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const X3=40;class G3 extends Tp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var S;super(),this.stop=()=>{var j,k;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Wo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},w=(g==null?void 0:g.KeyframeResolver)||Ap;this.keyframeResolver=new w(h,(j,k,M)=>this.onKeyframesResolved(j,k,b,!M),p,y,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var M,$;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=Wo.now();let x=!0;H3(n,u,d,h)||(x=!1,(tr.instantAnimations||!p)&&(g==null||g($d(n,a,i))),n[0]=n[n.length-1],Gm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>X3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!y&&F3(w),j=($=(M=w.motionValue)==null?void 0:M.owner)==null?void 0:$.current;let k;if(S)try{k=new I3({...w,element:j})}catch{k=new Dd(w)}else k=new Dd(w);k.finished.then(()=>{this.notifyFinished()}).catch(Ni),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),D3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class q3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return S1(this.animations,"duration")}get iterationDuration(){return S1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function S1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class K3 extends q3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Jb(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const Q3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Z3(t){const n=Q3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function e5(t,n,i=1){const[a,c]=Z3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return db(d)?parseFloat(d):d}return Cp(c)?e5(c,n,i+1):c}const J3={type:"spring",stiffness:500,damping:25,restSpeed:10},ek=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),tk={type:"keyframes",duration:.8},nk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},sk=(t,{keyframes:n})=>n.length>2?tk:Sl.has(t)?t.startsWith("scale")?ek(n[1]):J3:nk;function t5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Np(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?t5(i,t):i}const ok=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function ik(t){for(const n in t)if(!ok.has(n))return!0;return!1}const Rp=(t,n,i,a={},c,u)=>d=>{const h=Np(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-ri(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};ik(h)||Object.assign(g,sk(t,g)),g.duration&&(g.duration=ri(g.duration)),g.repeatDelay&&(g.repeatDelay=ri(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Gm(g),g.delay===0&&(x=!0)),(tr.instantAnimations||tr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Gm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(g.keyframes,h);if(b!==void 0){os.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Dd(g):new G3(g)};function C1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Bp(t,n,i,a){if(typeof n=="function"){const[c,u]=C1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=C1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Dr(t,n,i){const a=t.getProps();return Bp(a,n,i!==void 0?i:a.custom,t)}const n5=new Set(["width","height","top","left","right","bottom",...wl]),k1=30,ak=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class rk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Wo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Wo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=ak(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new vp);const a=this.events[n].add(i);return n==="change"?()=>{a(),os.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Wo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>k1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,k1);return pb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nr(t,n){return new rk(t,n)}const qm=t=>Array.isArray(t);function lk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,nr(i))}function ck(t){return qm(t)?t[t.length-1]||0:t}function uk(t,n){const i=Dr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=ck(u[d]);lk(t,d,h)}}const co=t=>!!(t&&t.getVelocity);function dk(t){return!!(co(t)&&t.add)}function Km(t,n){const i=t.getValue("willChange");if(dk(i))return i.add(n);if(!i&&tr.WillChange){const a=new tr.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Lp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const fk="framerAppearId",s5="data-"+Lp(fk);function o5(t){return t.props[s5]}function hk({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Op(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?t5(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),j=h[w];if(j===void 0||x&&hk(x,w))continue;const k={delay:i,...Np(u||{},w)},M=S.get();if(M!==void 0&&!S.isAnimating()&&!Array.isArray(j)&&j===M&&!k.velocity){os.update(()=>S.set(j));continue}let $=!1;if(window.MotionHandoffAnimation){const Y=o5(t);if(Y){const H=window.MotionHandoffAnimation(Y,w,os);H!==null&&(k.startTime=H,$=!0)}}Km(t,w);const L=y!=null?y:t.shouldReduceMotion;S.start(Rp(w,S,j,L&&n5.has(w)?{type:!1}:k,t,$));const N=S.animation;N&&g.push(N)}if(d){const w=()=>os.update(()=>{d&&uk(t,d)});g.length?Promise.all(g).then(w):w()}return g}function Qm(t,n,i={}){var p;const a=Dr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Op(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return mk(t,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function mk(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Qm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Jb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function pk(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Qm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Qm(t,n,i);else{const c=typeof n=="function"?Dr(t,n,i.custom):n;a=Promise.all(Op(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const _k={test:t=>t==="auto",parse:t=>t},i5=t=>n=>n.test(t),a5=[vl,Tt,ra,Qa,YC,VC,_k],j1=t=>a5.find(i5(t));function gk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||hb(t):!0}const yk=new Set(["brightness","contrast","saturate","opacity"]);function xk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(kp)||[];if(!a)return t;const c=i.replace(a,"");let u=yk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const bk=/\b([a-z-]*)\(.*?\)/gu,Zm={...Fi,getAnimatableNone:t=>{const n=t.match(bk);return n?n.map(xk).join(" "):t}},Jm={...Fi,getAnimatableNone:t=>{const n=Fi.parse(t);return Fi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},M1={...vl,transform:Math.round},vk={rotate:Qa,rotateX:Qa,rotateY:Qa,rotateZ:Qa,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:Qa,skewX:Qa,skewY:Qa,distance:Tt,translateX:Tt,translateY:Tt,translateZ:Tt,x:Tt,y:Tt,z:Tt,perspective:Tt,transformPerspective:Tt,opacity:Tc,originX:f1,originY:f1,originZ:Tt},zp={borderWidth:Tt,borderTopWidth:Tt,borderRightWidth:Tt,borderBottomWidth:Tt,borderLeftWidth:Tt,borderRadius:Tt,borderTopLeftRadius:Tt,borderTopRightRadius:Tt,borderBottomRightRadius:Tt,borderBottomLeftRadius:Tt,width:Tt,maxWidth:Tt,height:Tt,maxHeight:Tt,top:Tt,right:Tt,bottom:Tt,left:Tt,inset:Tt,insetBlock:Tt,insetBlockStart:Tt,insetBlockEnd:Tt,insetInline:Tt,insetInlineStart:Tt,insetInlineEnd:Tt,padding:Tt,paddingTop:Tt,paddingRight:Tt,paddingBottom:Tt,paddingLeft:Tt,paddingBlock:Tt,paddingBlockStart:Tt,paddingBlockEnd:Tt,paddingInline:Tt,paddingInlineStart:Tt,paddingInlineEnd:Tt,margin:Tt,marginTop:Tt,marginRight:Tt,marginBottom:Tt,marginLeft:Tt,marginBlock:Tt,marginBlockStart:Tt,marginBlockEnd:Tt,marginInline:Tt,marginInlineStart:Tt,marginInlineEnd:Tt,fontSize:Tt,backgroundPositionX:Tt,backgroundPositionY:Tt,...vk,zIndex:M1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:M1},wk={...zp,color:to,backgroundColor:to,outlineColor:to,fill:to,stroke:to,borderColor:to,borderTopColor:to,borderRightColor:to,borderBottomColor:to,borderLeftColor:to,filter:Zm,WebkitFilter:Zm,mask:Jm,WebkitMask:Jm},r5=t=>wk[t],Sk=new Set([Zm,Jm]);function l5(t,n){let i=r5(t);return Sk.has(i)||(i=Fi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const Ck=new Set(["auto","none","0"]);function kk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!Ck.has(u)&&yl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=l5(i,c)}class jk extends Ap{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),Cp(x))){const b=e5(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!n5.has(a)||n.length!==2)return;const[c,u]=n,d=j1(c),h=j1(u),p=d1(c),y=d1(u);if(p!==y&&er[a]){this.needsMeasurement=!0;return}if(d!==h)if(b1(d)&&b1(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else er[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||gk(n[c]))&&a.push(c);a.length&&kk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=er[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=er[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function $p(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const c5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return fb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ip}=Eb(queueMicrotask,!1),Yi={x:!1,y:!1};function u5(){return Yi.x||Yi.y}function Mk(t){return t==="x"||t==="y"?Yi[t]?null:(Yi[t]=!0,()=>{Yi[t]=!1}):Yi.x||Yi.y?null:(Yi.x=Yi.y=!0,()=>{Yi.x=Yi.y=!1})}function d5(t,n){const i=$p(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function Ek(t){return!(t.pointerType==="touch"||u5())}function Tk(t,n,i={}){const[a,c,u]=d5(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",S)},x=k=>{y&&(y(k),y=void 0),g()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},j=k=>{if(!Ek(k))return;p=!1;const M=n(d,k);typeof M=="function"&&(y=M,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",w,c)}),u}const f5=(t,n)=>n?t===n?!0:f5(t,n.parentElement):!1,Pp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Ak=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Dk(t){return Ak.has(t.tagName)||t.isContentEditable===!0}const Nk=new Set(["INPUT","SELECT","TEXTAREA"]);function Rk(t){return Nk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function E1(t){return n=>{n.key==="Enter"&&t(n)}}function pm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Bk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=E1(()=>{if(gd.has(i))return;pm(i,"down");const c=E1(()=>{pm(i,"up")}),u=()=>pm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function T1(t){return Pp(t)&&!u5()}const A1=new WeakSet;function Lk(t,n,i={}){const[a,c,u]=d5(t,i),d=h=>{const p=h.currentTarget;if(!T1(h)||A1.has(h))return;gd.add(p),i.stopPropagation&&A1.add(h);const y=n(p,h),g=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),T1(w)&&typeof y=="function"&&y(w,{success:S})},x=w=>{g(w,p===window||p===document||i.useGlobalTarget||f5(p,w.target))},b=w=>{g(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",y=>Bk(y,c)),!Dk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return fb(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let Za;const h5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Ok=h5("inline","width","offsetWidth"),zk=h5("block","height","offsetHeight");function $k({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Ok(t,n)},get height(){return zk(t,n)}})})}function Ik(t){t.forEach($k)}function Pk(){typeof ResizeObserver>"u"||(Za=new ResizeObserver(Ik))}function Hk(t,n){Za||Pk();const i=$p(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),Za==null||Za.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||Za==null||Za.unobserve(a)})}}const xd=new Set;let fl;function Uk(){fl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",fl)}function Vk(t){return xd.add(t),fl||Uk(),()=>{xd.delete(t),!xd.size&&typeof fl=="function"&&(window.removeEventListener("resize",fl),fl=void 0)}}function D1(t,n){return typeof t=="function"?Vk(t):Hk(t,n)}function m5(t){return Id(t)&&t.tagName==="svg"}function Yk(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Pb(c,u,d);return n?h(a):h}const Wk=[...a5,to,Fi],Fk=t=>Wk.find(i5(t)),N1=()=>({translate:0,scale:1,origin:0,originPoint:0}),hl=()=>({x:N1(),y:N1()}),R1=()=>({min:0,max:0}),eo=()=>({x:R1(),y:R1()}),Dc=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Nc(t){return typeof t=="string"||Array.isArray(t)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Up=["initial",...Hp];function Hd(t){return Pd(t.animate)||Up.some(n=>Nc(t[n]))}function p5(t){return!!(Hd(t)||t.variants)}function Xk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(co(c))t.addValue(a,c);else if(co(u))t.addValue(a,nr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,nr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const ep={current:null},_5={current:!1},Gk=typeof window<"u";function qk(){if(_5.current=!0,!!Gk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>ep.current=t.matches;t.addEventListener("change",n),n()}else ep.current=!1}const B1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Nd={};function g5(t){Nd=t}function Kk(){return Nd}class y5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ap,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Wo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,os.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=p5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];y[w]!==void 0&&co(S)&&S.set(y[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Dc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(_5.current||qk(),this.shouldReduceMotion=ep.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),ka(this.notifyUpdate),ka(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Zb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new Kb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:ri(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Sl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&os.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Nd){const i=Nd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):eo()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<B1.length;a++){const c=B1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Xk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=nr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(db(a)||hb(a))?a=parseFloat(a):!Fk(a)&&Fi.test(i)&&(a=l5(n,i)),this.setBaseTarget(n,co(a)?a.get():a)),co(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Bp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!co(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new vp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ip.render(this.render)}}class x5 extends y5{constructor(){super(...arguments),this.KeyframeResolver=jk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;co(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class sr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function b5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function Qk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function Zk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function _m(t){return t===void 0||t===1}function tp({scale:t,scaleX:n,scaleY:i}){return!_m(t)||!_m(n)||!_m(i)}function kr(t){return tp(t)||v5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function v5(t){return L1(t.x)||L1(t.y)}function L1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function O1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function np(t,n=0,i=1,a,c){t.min=O1(t.min,n,i,a,c),t.max=O1(t.max,n,i,a,c)}function w5(t,{x:n,y:i}){np(t.x,n.translate,n.scale,n.originPoint),np(t.y,i.translate,i.scale,i.originPoint)}const z1=.999999999999,$1=1.0000000000001;function Jk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ia(t.x,-u.scroll.offset.x),ia(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,w5(t,d)),a&&kr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<$1&&n.x>z1&&(n.x=1),n.y<$1&&n.y>z1&&(n.y=1)}function ia(t,n){t.min+=n,t.max+=n}function I1(t,n,i,a,c=.5){const u=ys(t.min,t.max,c);np(t,n,i,u,a)}function P1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;I1(t.x,P1(n.x,a.x),n.scaleX,n.scale,n.originX),I1(t.y,P1(n.y,a.y),n.scaleY,n.scale,n.originY)}function S5(t,n){return b5(Zk(t.getBoundingClientRect(),n))}function e8(t,n,i){const a=S5(t,i),{scroll:c}=n;return c&&(ia(a.x,c.offset.x),ia(a.y,c.offset.y)),a}const t8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},n8=wl.length;function s8(t,n,i){let a="",c=!0;for(let u=0;u<n8;u++){const d=wl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=c5(h,zp[d]);if(!p){c=!1;const g=t8[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Vp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Sl.has(p)){d=!0;continue}else if(Ab(p)){c[p]=y;continue}else{const g=c5(y,zp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=s8(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function C5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function H1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const hc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Tt.test(t))t=parseFloat(t);else return t;const i=H1(t,n.target.x),a=H1(t,n.target.y);return`${i}% ${a}%`}},o8={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Fi.parse(t);if(c.length>5)return a;const u=Fi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=ys(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},sp={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:o8};function k5(t,{layout:n,layoutId:i}){return Sl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!sp[t]||t==="opacity")}function Yp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(co(a[h])||c&&co(c[h])||k5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function i8(t){return window.getComputedStyle(t)}class j5 extends x5{constructor(){super(...arguments),this.type="html",this.renderInstance=C5}readValueFromInstance(n,i){var a;if(Sl.has(i))return(a=this.projection)!=null&&a.isProjecting?Vm(i):j3(n,i);{const c=i8(n),u=(Ab(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return S5(n,i)}build(n,i,a){Vp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Yp(n,i,a)}}function a8(t,n){return t in n}class r8 extends y5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(a8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return eo()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const l8={offset:"stroke-dashoffset",array:"stroke-dasharray"},c8={offset:"strokeDashoffset",array:"strokeDasharray"};function u8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?l8:c8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const d8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function M5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var w,S;if(Vp(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=g==null?void 0:g.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const j of d8)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&u8(x,c,u,d,!1)}const E5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),T5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function f8(t,n,i,a){C5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(E5.has(c)?c:Lp(c),n.attrs[c])}function A5(t,n,i){const a=Yp(t,n,i);for(const c in t)if(co(t[c])||co(n[c])){const u=wl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class D5 extends x5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=eo}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Sl.has(i)){const a=r5(i);return a&&a.default||0}return i=E5.has(i)?i:Lp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return A5(n,i,a)}build(n,i,a){M5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){f8(n,i,a,c)}mount(n){this.isSVGTag=T5(n.tagName),super.mount(n)}}const h8=Up.length;function N5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?N5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<h8;i++){const a=Up[i],c=t.props[a];(Nc(c)||c===!1)&&(n[a]=c)}return n}function R5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const m8=[...Hp].reverse(),p8=Hp.length;function _8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>pk(t,i,a)))}function g8(t){let n=_8(t),i=U1(),a=!0,c=!1;const u=y=>(g,x)=>{var w;const b=Dr(t,x,y==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:j,...k}=b;g={...g,...k,...j}}return g};function d(y){n=y(t)}function h(y){const{props:g}=t,x=N5(t.parent)||{},b=[],w=new Set;let S={},j=1/0;for(let M=0;M<p8;M++){const $=m8[M],L=i[$],N=g[$]!==void 0?g[$]:x[$],Y=Nc(N),H=$===y?L.isActive:null;H===!1&&(j=M);let X=N===x[$]&&N!==g[$]&&Y;if(X&&(a||c)&&t.manuallyAnimateOnMount&&(X=!1),L.protectedKeys={...S},!L.isActive&&H===null||!N&&!L.prevProp||Pd(N)||typeof N=="boolean")continue;if($==="exit"&&L.isActive&&H!==!0){L.prevResolvedValues&&(S={...S,...L.prevResolvedValues});continue}const U=y8(L.prevProp,N);let Z=U||$===y&&L.isActive&&!X&&Y||M>j&&Y,le=!1;const oe=Array.isArray(N)?N:[N];let je=oe.reduce(u($),{});H===!1&&(je={});const{prevResolvedValues:ze={}}=L,J={...ze,...je},ue=W=>{Z=!0,w.has(W)&&(le=!0,w.delete(W)),L.needsAnimating[W]=!0;const K=t.getValue(W);K&&(K.liveStyle=!1)};for(const W in J){const K=je[W],ge=ze[W];if(S.hasOwnProperty(W))continue;let R=!1;qm(K)&&qm(ge)?R=!R5(K,ge):R=K!==ge,R?K!=null?ue(W):w.add(W):K!==void 0&&w.has(W)?ue(W):L.protectedKeys[W]=!0}L.prevProp=N,L.prevResolvedValues=je,L.isActive&&(S={...S,...je}),(a||c)&&t.blockInitialAnimation&&(Z=!1);const I=X&&U;Z&&(!I||le)&&b.push(...oe.map(W=>{const K={type:$};if(typeof W=="string"&&(a||c)&&!I&&t.manuallyAnimateOnMount&&t.parent){const{parent:ge}=t,R=Dr(ge,W);if(ge.enteringChildren&&R){const{delayChildren:re}=R.transition||{};K.delay=Jb(ge.enteringChildren,t,re)}}return{animation:W,options:K}}))}if(w.size){const M={};if(typeof g.initial!="boolean"){const $=Dr(t,Array.isArray(g.initial)?g.initial[0]:g.initial);$&&$.transition&&(M.transition=$.transition)}w.forEach($=>{const L=t.getBaseTarget($),N=t.getValue($);N&&(N.liveStyle=!0),M[$]=L!=null?L:null}),b.push({animation:M})}let k=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=U1(),c=!0}}}function y8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!R5(n,t):!1}function Sr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function U1(){return{animate:Sr(!0),whileInView:Sr(),whileHover:Sr(),whileTap:Sr(),whileDrag:Sr(),whileFocus:Sr(),exit:Sr()}}function op(t,n){t.min=n.min,t.max=n.max}function Vi(t,n){op(t.x,n.x),op(t.y,n.y)}function V1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const B5=1e-4,x8=1-B5,b8=1+B5,L5=.01,v8=0-L5,w8=0+L5;function Fo(t){return t.max-t.min}function S8(t,n,i){return Math.abs(t-n)<=i}function Y1(t,n,i,a=.5){t.origin=a,t.originPoint=ys(n.min,n.max,t.origin),t.scale=Fo(i)/Fo(n),t.translate=ys(i.min,i.max,t.origin)-t.originPoint,(t.scale>=x8&&t.scale<=b8||isNaN(t.scale))&&(t.scale=1),(t.translate>=v8&&t.translate<=w8||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){Y1(t.x,n.x,i.x,a?a.originX:void 0),Y1(t.y,n.y,i.y,a?a.originY:void 0)}function W1(t,n,i,a=0){const c=a?ys(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Fo(n)}function C8(t,n,i,a){W1(t.x,n.x,i.x,a==null?void 0:a.x),W1(t.y,n.y,i.y,a==null?void 0:a.y)}function F1(t,n,i,a=0){const c=a?ys(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Fo(n)}function Bd(t,n,i,a){F1(t.x,n.x,i.x,a==null?void 0:a.x),F1(t.y,n.y,i.y,a==null?void 0:a.y)}function X1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function k8(t,n=0,i=1,a=.5,c,u=t,d=t){if(ra.test(n)&&(n=parseFloat(n),n=ys(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ys(u.min,u.max,a);t===u&&(h-=n),t.min=X1(t.min,n,i,h,c),t.max=X1(t.max,n,i,h,c)}function G1(t,n,[i,a,c],u,d){k8(t,n[i],n[a],n[c],n.scale,u,d)}const j8=["x","scaleX","originX"],M8=["y","scaleY","originY"];function q1(t,n,i,a){G1(t.x,n,j8,i?i.x:void 0,a?a.x:void 0),G1(t.y,n,M8,i?i.y:void 0,a?a.y:void 0)}function K1(t){return t.translate===0&&t.scale===1}function O5(t){return K1(t.x)&&K1(t.y)}function Q1(t,n){return t.min===n.min&&t.max===n.max}function E8(t,n){return Q1(t.x,n.x)&&Q1(t.y,n.y)}function Z1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function z5(t,n){return Z1(t.x,n.x)&&Z1(t.y,n.y)}function J1(t){return Fo(t.x)/Fo(t.y)}function ex(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function oa(t){return[t("x"),t("y")]}function T8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const $5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],A8=$5.length,tx=t=>typeof t=="string"?parseFloat(t):t,nx=t=>typeof t=="number"||Tt.test(t);function D8(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=ys(0,(d=i.opacity)!=null?d:1,N8(a)),t.opacityExit=ys((h=n.opacity)!=null?h:1,0,R8(a))):u&&(t.opacity=ys((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<A8;g++){const x=$5[g];let b=sx(n,x),w=sx(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||nx(b)===nx(w)?(t[x]=Math.max(ys(tx(b),tx(w),a),0),(ra.test(w)||ra.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=ys(n.rotate||0,i.rotate||0,a))}function sx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const N8=I5(0,.5,wb),R8=I5(.5,.95,Ni);function I5(t,n,i){return a=>a<t?0:a>n?1:i(gl(t,n,a))}function P5(t,n,i){const a=co(t)?t:nr(t);return a.start(Rp("",a,n,i)),a.animation}function Rc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const B8=(t,n)=>t.depth-n.depth;class L8{constructor(){this.children=[],this.isDirty=!1}add(n){xp(this.children,n),this.isDirty=!0}remove(n){_l(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(B8),this.isDirty=!1,this.children.forEach(n)}}function O8(t,n){const i=Wo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(ka(a),t(u-n))};return os.setup(a,!0),()=>ka(a)}function vd(t){return co(t)?t.get():t}class z8{constructor(){this.members=[]}add(n){xp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(_l(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(_l(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gm=["","X","Y","Z"],$8=1e3;let I8=0;function ym(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function H5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=o5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",os,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&H5(a)}function U5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=I8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(U8),this.nodes.forEach(G8),this.nodes.forEach(q8),this.nodes.forEach(V8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new L8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new vp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!m5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;os.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,g&&g(),g=O8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(ax)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||y.getDefaultTransition()||ej,{onLayoutAnimationStart:j,onLayoutAnimationComplete:k}=y.getProps(),M=!this.targetLayout||!z5(this.targetLayout,w),$=!x&&b;if(this.options.layoutRoot||this.resumeFrom||$||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Np(S,"layout"),onPlay:j,onComplete:k};(y.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(g,$)}else x||ax(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ka(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(K8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&H5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(W8),this.nodes.forEach(ox);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ix);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(F8),this.nodes.forEach(X8),this.nodes.forEach(P8),this.nodes.forEach(H8)):this.nodes.forEach(ix),this.clearAllSnapshots();const h=Wo.now();Mo.delta=la(0,1e3/60,h-Mo.timestamp),Mo.timestamp=h,Mo.isProcessing=!0,cm.update.process(Mo),cm.preRender.process(Mo),cm.render.process(Mo),Mo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Y8),this.sharedNodes.forEach(Q8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,os.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){os.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Fo(this.snapshot.measuredBox.x)&&!Fo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=eo()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!O5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||kr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),tj(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return eo();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(nj))){const{scroll:g}=this.root;g&&(ia(h.x,g.offset.x),ia(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=eo();if(Vi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Vi(h,d),ia(h.x,x.offset.x),ia(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||eo();Vi(y,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(ia(y.x,-w.scroll.offset.x),ia(y.y,-w.scroll.offset.y)),kr(w.latestValues)&&bd(y,w.latestValues,(g=w.layout)==null?void 0:g.layoutBox)}return kr(this.latestValues)&&bd(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=eo();Vi(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!kr(g.latestValues))continue;let x;g.instance&&(tp(g.latestValues)&&g.updateSnapshot(),x=eo(),Vi(x,g.measurePageBox())),q1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return kr(this.latestValues)&&q1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Mo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=eo(),this.targetWithTransforms=eo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),C8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Vi(this.target,this.layout.layoutBox),w5(this.target,this.targetDelta)):Vi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||tp(this.parent.latestValues)||v5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=eo(),this.relativeTargetOrigin=eo(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Vi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Mo.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;Vi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;Jk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=eo());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(V1(this.prevProjectionDelta.x,this.projectionDelta.x),V1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!ex(this.projectionDelta.x,this.prevProjectionDelta.x)||!ex(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hl(),this.projectionDelta=hl(),this.projectionDeltaWithTransform=hl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=hl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=eo(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=w!==S,k=this.getStack(),M=!k||k.members.length<=1,$=!!(j&&!M&&this.options.crossfade===!0&&!this.path.some(J8));this.animationProgress=0;let L;this.mixTargetDelta=N=>{const Y=N/1e3;rx(x.x,d.x,Y),rx(x.y,d.y,Y),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Z8(this.relativeTarget,this.relativeTargetOrigin,b,Y),L&&E8(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=eo()),Vi(L,this.relativeTarget)),j&&(this.animationValues=g,D8(g,y,this.latestValues,Y,$,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(ka(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=os.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=nr(0)),this.motionValue.jump(0,!1),this.currentAnimation=P5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta($8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&V5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||eo();const x=Fo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Fo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Vi(h,p),bd(h,g),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new z8),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&ym("z",d,y,this.animationValues);for(let g=0;g<gm.length;g++)ym(`rotate${gm[g]}`,d,y,this.animationValues),ym(`skew${gm[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var S,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!kr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=T8(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,y.animationValues?d.opacity=y===this?(j=(S=g.opacity)!=null?S:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const k in sp){if(g[k]===void 0)continue;const{correct:M,applyTo:$,isCSSVariable:L}=sp[k],N=x==="none"?g[k]:M(g[k],y);if($){const Y=$.length;for(let H=0;H<Y;H++)d[$[H]]=N}else L?this.options.visualElement.renderState.vars[k]=N:d[k]=N}this.options.layoutId&&(d.pointerEvents=y===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(ox),this.root.sharedNodes.clear()}}}function P8(t){t.updateLayout()}function H8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")oa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Fo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";op(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else V5(u,n.layoutBox,a)&&oa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Fo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=hl();kc(h,a,n.layoutBox);const p=hl();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const y=!O5(h);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,j=eo();Bd(j,n.layoutBox,b.layoutBox,S);const k=eo();Bd(k,a,w.layoutBox,S),z5(j,k)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function U8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function V8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Y8(t){t.clearSnapshot()}function ox(t){t.clearMeasurements()}function W8(t){t.isLayoutDirty=!0,t.updateLayout()}function ix(t){t.isLayoutDirty=!1}function F8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function X8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ax(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function G8(t){t.resolveTargetDelta()}function q8(t){t.calcProjection()}function K8(t){t.resetSkewAndRotation()}function Q8(t){t.removeLeadSnapshot()}function rx(t,n,i){t.translate=ys(n.translate,0,i),t.scale=ys(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function lx(t,n,i,a){t.min=ys(n.min,i.min,a),t.max=ys(n.max,i.max,a)}function Z8(t,n,i,a){lx(t.x,n.x,i.x,a),lx(t.y,n.y,i.y,a)}function J8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const ej={duration:.45,ease:[.4,0,.1,1]},cx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ux=cx("applewebkit/")&&!cx("chrome/")?Math.round:Ni;function dx(t){t.min=ux(t.min),t.max=ux(t.max)}function tj(t){dx(t.x),dx(t.y)}function V5(t,n,i){return t==="position"||t==="preserve-aspect"&&!S8(J1(n),J1(i),.2)}function nj(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const sj=U5({attachResizeListener:(t,n)=>Rc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xm={current:void 0},Y5=U5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!xm.current){const t=new sj({});t.mount(window),t.setOptions({layoutScroll:!0}),xm.current=t}return xm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ud=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function fx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function oj(...t){return n=>{let i=!1;const a=t.map(c=>{const u=fx(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():fx(t[c],null)}}}}function ij(...t){return _.useCallback(oj(...t),t)}class aj extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function rj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(Ud),g=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=ij(h,g);return _.useInsertionEffect(()=>{const{width:S,height:j,top:k,left:M,right:$,bottom:L}=p.current;if(n||u===!1||!h.current||!S||!j)return;const N=i==="left"?`left: ${M}`:`right: ${$}`,Y=a==="bottom"?`bottom: ${L}`:`top: ${k}`;h.current.dataset.motionPopId=d;const H=document.createElement("style");y&&(H.nonce=y);const X=c!=null?c:document.head;return X.appendChild(H),H.sheet&&H.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${j}px !important;
            ${N}px !important;
            ${Y}px !important;
          }
        `),()=>{var U;(U=h.current)==null||U.removeAttribute("data-motion-pop-id"),X.contains(H)&&X.removeChild(H)}},[n]),l.jsx(aj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:_.cloneElement(t,{ref:x})})}const lj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Lc(cj),x=_.useId();let b=!0,w=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{g.set(S,!0);for(const j of g.values())if(!j)return;a&&a()},register:S=>(g.set(S,!1),()=>g.delete(S))}),[i,g,a]);return u&&b&&(w={...w}),_.useMemo(()=>{g.forEach((S,j)=>g.set(j,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=l.jsx(rj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(zd.Provider,{value:w,children:t})};function cj(){return new Map}function W5(t=!0){const n=_.useContext(zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(t)return c(u)},[t]);const d=_.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function hx(t){const n=[];return _.Children.forEach(t,i=>{_.isValidElement(i)&&n.push(i)}),n}const Vd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=W5(d),b=_.useMemo(()=>hx(t),[t]),w=d&&!g?[]:b.map(rd),S=_.useRef(!0),j=_.useRef(b),k=Lc(()=>new Map),M=_.useRef(new Set),[$,L]=_.useState(b),[N,Y]=_.useState(b);yp(()=>{S.current=!1,j.current=b;for(let U=0;U<N.length;U++){const Z=rd(N[U]);w.includes(Z)?(k.delete(Z),M.current.delete(Z)):k.get(Z)!==!0&&k.set(Z,!1)}},[N,w.length,w.join("-")]);const H=[];if(b!==$){let U=[...b];for(let Z=0;Z<N.length;Z++){const le=N[Z],oe=rd(le);w.includes(oe)||(U.splice(Z,0,le),H.push(le))}return u==="wait"&&H.length&&(U=H),Y(hx(U)),L(b),null}const{forceRender:X}=_.useContext(gp);return l.jsx(l.Fragment,{children:N.map(U=>{const Z=rd(U),le=d&&!g?!1:b===N||w.includes(Z),oe=()=>{if(M.current.has(Z))return;if(k.has(Z))M.current.add(Z),k.set(Z,!0);else return;let je=!0;k.forEach(ze=>{ze||(je=!1)}),je&&(X==null||X(),Y(j.current),d&&(x==null||x()),a&&a())};return l.jsx(lj,{isPresent:le,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:le?void 0:oe,anchorX:h,anchorY:p,children:U},Z)})})},F5=_.createContext({strict:!1}),mx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let px=!1;function uj(){if(px)return;const t={};for(const n in mx)t[n]={isEnabled:i=>mx[n].some(a=>!!i[a])};g5(t),px=!0}function X5(){return uj(),Kk()}function dj(t){const n=X5();for(const i in t)n[i]={...n[i],...t[i]};g5(n)}const fj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||fj.has(t)}let G5=t=>!Ld(t);function hj(t){typeof t=="function"&&(G5=n=>n.startsWith("on")?!Ld(n):t(n))}try{hj(require("@emotion/is-prop-valid").default)}catch{}function mj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||co(t[c])||(G5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=_.createContext({});function pj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Nc(i)?i:void 0,animate:Nc(a)?a:void 0}}return t.inherit!==!1?n:{}}function _j(t){const{initial:n,animate:i}=pj(t,_.useContext(Yd));return _.useMemo(()=>({initial:n,animate:i}),[_x(n),_x(i)])}function _x(t){return Array.isArray(t)?t.join(" "):t}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function q5(t,n,i){for(const a in n)!co(n[a])&&!k5(a,i)&&(t[a]=n[a])}function gj({transformTemplate:t},n){return _.useMemo(()=>{const i=Wp();return Vp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function yj(t,n){const i=t.style||{},a={};return q5(a,i,t),Object.assign(a,gj(t,n)),a}function xj(t,n){const i={},a=yj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const K5=()=>({...Wp(),attrs:{}});function bj(t,n,i,a){const c=_.useMemo(()=>{const u=K5();return M5(u,n,T5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};q5(u,t.style,t),c.style={...u,...c.style}}return c}const vj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fp(t){return typeof t!="string"||t.includes("-")?!1:!!(vj.indexOf(t)>-1||/[A-Z]/u.test(t))}function wj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Fp(t))?bj:xj)(n,a,c,t),y=mj(n,typeof t=="string",u),g=t!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>co(x)?x.get():x,[x]);return _.createElement(t,{...g,children:b})}function Sj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:Cj(i,a,c,t),renderState:n()}}function Cj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),y=p5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Bp(t,b[w]);if(S){const{transitionEnd:j,transition:k,...M}=S;for(const $ in M){let L=M[$];if(Array.isArray(L)){const N=g?L.length-1:0;L=L[N]}L!==null&&(c[$]=L)}for(const $ in j)c[$]=j[$]}}}return c}const Q5=t=>(n,i)=>{const a=_.useContext(Yd),c=_.useContext(zd),u=()=>Sj(t,n,a,c);return i?u():Lc(u)},kj=Q5({scrapeMotionValuesFromProps:Yp,createRenderState:Wp}),jj=Q5({scrapeMotionValuesFromProps:A5,createRenderState:K5}),Mj=Symbol.for("motionComponentSymbol");function Ej(t,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const Z5=_.createContext({});function cl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Tj(t,n,i,a,c,u){var L,N;const{visualElement:d}=_.useContext(Yd),h=_.useContext(F5),p=_.useContext(zd),y=_.useContext(Ud),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),w=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,j=_.useContext(Z5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Aj(b.current,i,c,j);const k=_.useRef(!1);_.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const M=i[s5],$=_.useRef(!!M&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,M))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,M)));return yp(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),$.current&&S.animationState&&S.animationState.animateChanges())}),_.useEffect(()=>{S&&(!$.current&&S.animationState&&S.animationState.animateChanges(),$.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,M)}),$.current=!1),S.enteringChildren=void 0)}),S}function Aj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:J5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&cl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function J5(t){if(t)return t.options.allowProjection!==!1?t.projection:J5(t.parent)}function bm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&dj(a);const u=i?i==="svg":Fp(t),d=u?jj:kj;function h(x,b){let w;const S={..._.useContext(Ud),...x,layoutId:Dj(x)},{isStatic:j}=S,k=_j(x),M=d(x,j);if(!j&&typeof window<"u"){Nj();const $=Rj(S);w=$.MeasureLayout,k.visualElement=Tj(t,M,S,c,$.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:k,children:[w&&k.visualElement?l.jsx(w,{visualElement:k.visualElement,...S}):null,wj(t,x,Ej(M,k.visualElement,b),M,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(g=(y=t.displayName)!=null?y:t.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[Mj]=t,p}function Dj({layoutId:t}){const n=_.useContext(gp).id;return n&&t!==void 0?n+"-"+t:t}function Nj(t,n){_.useContext(F5).strict}function Rj(t){const n=X5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Bj(t,n){if(typeof Proxy>"u")return bm;const i=new Map,a=(u,d)=>bm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,bm(d,void 0,t,n)),i.get(d))})}const Lj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Fp(t))?new D5(n):new j5(n,{allowProjection:t!==_.Fragment})};class Oj extends sr{constructor(n){super(n),n.animationState||(n.animationState=g8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let zj=0;class $j extends sr{constructor(){super(...arguments),this.id=zj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Dr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Ij={animation:{Feature:Oj},exit:{Feature:$j}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const Pj=t=>n=>Pp(n)&&t(n,Ic(n));function jc(t,n,i,a){return Rc(t,n,Pj(i),a)}const e2=({current:t})=>t?t.ownerDocument.defaultView:null,gx=(t,n)=>Math.abs(t-n);function Hj(t,n){const i=gx(t.x,n.x),a=gx(t.y,n.y);return Math.sqrt(i**2+a**2)}const yx=new Set(["auto","scroll"]);class t2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const w=vm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,j=Hj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!j)return;const{point:k}=w,{timestamp:M}=Mo;this.history.push({...k,timestamp:M});const{onStart:$,onMove:L}=this.handlers;S||($&&$(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ld(S,this.transformPagePoint),os.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:j,onSessionEnd:k,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const $=vm(w.type==="pointercancel"?this.lastMoveEventInfo:ld(S,this.transformPagePoint),this.history);this.startEvent&&j&&j(w,$),k&&k(w,$)},!Pp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),y=ld(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Mo;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,vm(y,this.history)),this.removeListeners=Oc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(yx.has(a.overflowX)||yx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),os.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ka(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function xx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function vm({point:t},n){return{point:t,delta:xx(t,n2(n)),offset:xx(t,Uj(n)),velocity:Vj(n,.1)}}function Uj(t){return t[0]}function n2(t){return t[t.length-1]}function Vj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=n2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ri(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ri(n)*2&&(a=t[1]);const u=Di(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Yj(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?ys(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?ys(i,t,a.max):Math.min(t,i)),t}function bx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function Wj(t,{top:n,left:i,bottom:a,right:c}){return{x:bx(t.x,i,c),y:bx(t.y,n,a)}}function vx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function Fj(t,n){return{x:vx(t.x,n.x),y:vx(t.y,n.y)}}function Xj(t,n){let i=.5;const a=Fo(t),c=Fo(n);return c>a?i=gl(n.min,n.max-a,t.min):a>c&&(i=gl(t.min,t.max-c,n.min)),la(0,1,i)}function Gj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ip=.35;function qj(t=ip){return t===!1?t=0:t===!0&&(t=ip),{x:wx(t,"left","right"),y:wx(t,"top","bottom")}}function wx(t,n,i){return{min:Sx(t,n),max:Sx(t,i)}}function Sx(t,n){return typeof t=="number"?t:t[n]||0}const Kj=new WeakMap;class Qj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=eo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:j}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Mk(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),oa(M=>{let $=this.getAxisMotionValue(M).get()||0;if(ra.test($)){const{projection:L}=this.visualElement;if(L&&L.layout){const N=L.layout.layoutBox[M];N&&($=Fo(N)*(parseFloat($)/100))}}this.originPoint[M]=$}),j&&os.update(()=>j(x,b),!1,!0),Km(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:j,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:M}=b;if(S&&this.currentDirection===null){this.currentDirection=Jj(M),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),k&&os.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new t2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:e2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&os.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Yj(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&cl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Wj(a.layoutBox,n):this.constraints=!1,this.elastic=qj(i),c!==this.constraints&&!cl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&oa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Gj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!cl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=e8(a,c.root,this.visualElement.getTransformPagePoint());let d=Fj(c.layout.layoutBox,u);if(i){const h=i(Qk(d));this.hasMutatedConstraints=!!h,h&&(d=b5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=oa(g=>{if(!cd(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,S)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Km(this.visualElement,n),a.start(Rp(n,a,0,i,this.visualElement,!1))}stopAnimation(){oa(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){oa(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ys(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!cl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};oa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Xj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),oa(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(ys(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Kj.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,w=b!==n&&Rk(b);g&&x&&!w&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();cl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Zj(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),os.read(c);const h=Rc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(oa(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ip,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Cx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function Zj(t,n,i){const a=D1(t,Cx(i)),c=D1(n,Cx(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function Jj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class e7 extends sr{constructor(n){super(n),this.removeGroupControls=Ni,this.removeListeners=Ni,this.controls=new Qj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ni}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const wm=t=>(n,i)=>{t&&os.update(()=>t(n,i),!1,!0)};class t7 extends sr{constructor(){super(...arguments),this.removePointerDownListener=Ni}onPointerDown(n){this.session=new t2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:e2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:wm(n),onStart:wm(i),onMove:wm(a),onEnd:(u,d)=>{delete this.session,c&&os.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Sm=!1;class n7 extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Sm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Sm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||os.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ip.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Sm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function s2(t){const[n,i]=W5(),a=_.useContext(gp);return l.jsx(n7,{...t,layoutGroup:a,switchLayoutGroup:_.useContext(Z5),isPresent:n,safeToRemove:i})}const s7={pan:{Feature:t7},drag:{Feature:e7,ProjectionNode:Y5,MeasureLayout:s2}};function kx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&os.postRender(()=>u(n,Ic(n)))}class o7 extends sr{mount(){const{current:n}=this.node;n&&(this.unmount=Tk(n,(i,a)=>(kx(this.node,a,"Start"),c=>kx(this.node,c,"End"))))}unmount(){}}class i7 extends sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(Rc(this.node.current,"focus",()=>this.onFocus()),Rc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function jx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&os.postRender(()=>u(n,Ic(n)))}class a7 extends sr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Lk(n,(c,u)=>(jx(this.node,u,"Start"),(d,{success:h})=>jx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ap=new WeakMap,Cm=new WeakMap,r7=t=>{const n=ap.get(t.target);n&&n(t)},l7=t=>{t.forEach(r7)};function c7({root:t,...n}){const i=t||document;Cm.has(i)||Cm.set(i,{});const a=Cm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(l7,{root:t,...n})),a[c]}function u7(t,n,i){const a=c7(n);return ap.set(t,i),a.observe(t),()=>{ap.delete(t),a.unobserve(t)}}const d7={some:0,all:1};class f7 extends sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:d7[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=g?x:b;w&&w(y)};this.stopObserver=u7(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(h7(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function h7({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const m7={inView:{Feature:f7},tap:{Feature:a7},focus:{Feature:i7},hover:{Feature:o7}},p7={layout:{ProjectionNode:Y5,MeasureLayout:s2}},_7={...Ij,...m7,...s7,...p7},ai=Bj(_7,Lj);function rp(t){const n=Lc(()=>nr(t)),{isStatic:i}=_.useContext(Ud);if(i){const[,a]=_.useState(t);_.useEffect(()=>n.on("change",a),[])}return n}function o2(t,n){const i=rp(n()),a=()=>i.set(n());return a(),yp(()=>{const c=()=>os.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),ka(a)}}),i}function g7(t){Cc.current=[],t();const n=o2(Cc.current,t);return Cc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return g7(t);const u=typeof n=="function"?n:Yk(n,i,a),d=Array.isArray(t)?Mx(t,u):Mx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function Mx(t,n){const i=Lc(()=>[]);return o2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Xp(t){return typeof t=="object"&&!Array.isArray(t)}function i2(t,n,i,a){return t==null?[]:typeof t=="string"&&Xp(n)?$p(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function y7(t,n,i){return t*(n+1)}function Ex(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function x7(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(_l(t,c),a--)}}function b7(t,n,i,a,c,u){x7(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:ys(c,u,a[d]),easing:jb(i,d)})}function v7(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function w7(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const S7="easeInOut";function C7(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){y.set(S,x);continue}else if(!Array.isArray(S)){y.set(S.name,Ex(x,S.at,g,y));continue}let[j,k,M={}]=S;M.at!==void 0&&(x=Ex(x,M.at,g,y));let $=0;const L=(N,Y,H,X=0,U=0)=>{const Z=k7(N),{delay:le=0,times:oe=Ub(Z),type:je=n.type||"keyframes",repeat:ze,repeatType:J,repeatDelay:ue=0,...I}=Y;let{ease:se=n.ease||"easeOut",duration:W}=Y;const K=typeof le=="function"?le(X,U):le,ge=Z.length,R=Dp(je)?je:c==null?void 0:c[je||"keyframes"];if(ge<=2&&R){let Te=100;if(ge===2&&E7(Z)){const tt=Z[1]-Z[0];Te=Math.abs(tt)}const $e={...n,...I};W!==void 0&&($e.duration=ri(W));const Be=$b($e,Te,R);se=Be.ease,W=Be.duration}W!=null||(W=u);const re=x+K;oe.length===1&&oe[0]===0&&(oe[1]=1);const ie=oe.length-Z.length;if(ie>0&&Hb(oe,ie),Z.length===1&&Z.unshift(null),ze){W=y7(W,ze);const Te=[...Z],$e=[...oe];se=Array.isArray(se)?[...se]:[se];const Be=[...se];for(let tt=0;tt<ze;tt++){Z.push(...Te);for(let _t=0;_t<Te.length;_t++)oe.push($e[_t]+(tt+1)),se.push(_t===0?"linear":jb(Be,_t-1))}v7(oe,ze)}const he=re+W;b7(H,Z,se,oe,re,he),$=Math.max(K+W,$),b=Math.max(he,b)};if(co(j)){const N=Tx(j,h);L(k,M,Ax("default",N))}else{const N=i2(j,k,a,p),Y=N.length;for(let H=0;H<Y;H++){k=k,M=M;const X=N[H],U=Tx(X,h);for(const Z in k)L(k[Z],j7(M,Z),Ax(Z,U),H,Y)}}g=x,x+=$}return h.forEach((w,S)=>{for(const j in w){const k=w[j];k.sort(w7);const M=[],$=[],L=[];for(let X=0;X<k.length;X++){const{at:U,value:Z,easing:le}=k[X];M.push(Z),$.push(gl(0,b,U)),L.push(le||"easeOut")}$[0]!==0&&($.unshift(0),M.unshift(M[0]),L.unshift(S7)),$[$.length-1]!==1&&($.push(1),M.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const N=d.get(S);N.keyframes[j]=M;const{type:Y,...H}=n;N.transition[j]={...H,duration:b,ease:L,times:$,...i}}}),d}function Tx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Ax(t,n){return n[t]||(n[t]=[]),n[t]}function k7(t){return Array.isArray(t)?t:[t]}function j7(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const M7=t=>typeof t=="number",E7=t=>t.every(M7);function T7(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!m5(t)?new D5(n):new j5(n);i.mount(t),Dc.set(t,i)}function A7(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new r8(n);i.mount(t),Dc.set(t,i)}function D7(t,n){return co(t)||typeof t=="number"||typeof t=="string"&&!Xp(n)}function a2(t,n,i,a){const c=[];if(D7(t,n))c.push(P5(t,Xp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=i2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?T7:A7;Dc.has(p)||y(p);const g=Dc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Op(g,{...n,transition:x},{}))}}return c}function N7(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=nr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return C7(c,n,i,{spring:Ac}).forEach(({keyframes:d,transition:h},p)=>{a.push(...a2(p,d,h))}),a}function R7(t){return Array.isArray(t)&&t.some(Array.isArray)}function B7(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(R7(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=N7(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=a2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new K3(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{_l(n.animations,y)})),y}return a}const Dx=B7();var L7=Object.freeze({}),O7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const j=w.slice(0,-7),k=d.get(j);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const g=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(g[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:L7}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},tn=new O7;function z7(t,n,i){const a=_.useId(),c=`${t}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(tn.registerPanel(c,t,u.current,p.current),()=>tn.unregisterPanel(c)),[c,t]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}tn.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),_.useEffect(()=>tn.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>tn.subscribe(c,b),()=>tn.getValues(c),()=>tn.getValues(c));return r2(n,x,"")}function r2(t,n,i){var c,u,d,h,p,y,g,x,b,w;const a={};for(const[S,j]of Object.entries(t)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[S]=(c=n[k])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[S]=(u=n[k])!=null?u:j;else if($7(j)||I7(j))a[S]=(d=n[k])!=null?d:j;else if(P7(j))a[S]=(h=n[k])!=null?h:j;else if(H7(j)){const M=(p=j.default)!=null?p:Y7(j.options);a[S]=(y=n[k])!=null?y:M}else U7(j)?a[S]=(x=(g=n[k])!=null?g:j.default)!=null?x:"#000000":V7(j)?a[S]=(w=(b=n[k])!=null?b:j.default)!=null?w:"":typeof j=="object"&&j!==null&&(a[S]=r2(j,n,k))}return a}function Cl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function $7(t){return Cl(t,"spring")}function I7(t){return Cl(t,"easing")}function P7(t){return Cl(t,"action")}function H7(t){return Cl(t,"select")&&"options"in t&&Array.isArray(t.options)}function U7(t){return Cl(t,"color")}function V7(t){return Cl(t,"text")}function Y7(t){const n=t[0];return typeof n=="string"?n:n.value}function lp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(lp(n)))}function mc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function pc(t,n,i,a,c){var y,g;const u=tn.getValue(t,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));tn.updateValue(t,n,Sd(p,a))}function W7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function km(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function l2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=l2(i.children,n);if(a)return a}}return null}var fd=4;function F7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function X7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=F7(n);return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function G7(t){return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function c2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var u2=_.createContext({activePanelId:null,activePath:null});function q7({children:t}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=tn.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==g||((y=S.interaction)!=null?y:"scroll")!==p)continue;const j=l2(b.controls,w);if(j&&j.type==="slider")return{panelId:b.id,path:w,control:j,shortcut:S}}}return null},[]);return _.useEffect(()=>{const p=j=>{if(dd())return;const k=j.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const N=h("scroll")||h("drag")||h("move");if(N&&N.control.type==="slider"){j.preventDefault();const Y=k==="arrowright"||k==="arrowup"?1:-1,H=mc(N.control,N.shortcut);pc(N.panelId,N.path,N.control,H,Y);return}}const M=a.current.has(k);a.current.add(k);const $=km(j),L=tn.resolveShortcutTarget(k,$);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!M&&L.control.type==="toggle")){const N=tn.getValue(L.panelId,L.path);tn.updateValue(L.panelId,L.path,!N)}M||(u.current=null,d.current=0)},y=j=>{const k=j.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let M=!1;for(const $ of a.current){const L=km(j),N=tn.resolveShortcutTarget($,L);if(N){i({activePanelId:N.panelId,activePath:N.path}),M=!0;break}}M||i({activePanelId:null,activePath:null})}},g=j=>{var $,L;if(dd())return;const k=km(j);if(a.current.size>0)for(const N of a.current){const Y=tn.resolveShortcutTarget(N,k);if(!Y)continue;const{panelId:H,path:X,control:U}=Y;if(((L=($=U.shortcut)==null?void 0:$.interaction)!=null?L:"scroll")!=="scroll"||U.type!=="slider")continue;j.preventDefault();const le=mc(U,U.shortcut),oe=j.deltaY>0?-1:1;pc(H,X,U,le,oe);return}const M=tn.resolveScrollOnlyTargets();for(const{panelId:N,path:Y,control:H,shortcut:X}of M){if(H.type!=="slider")continue;j.preventDefault();const U=mc(H,X),Z=j.deltaY>0?-1:1;pc(N,Y,H,U,Z);return}},x=j=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=j=>{if(dd()||a.current.size===0)return;if(c.current){const M=h("drag");if(M&&u.current!==null){const $=j.clientX-u.current;u.current=j.clientX,d.current+=$;const L=mc(M.control,M.shortcut),N=Math.trunc(d.current/fd);N!==0&&(d.current-=N*fd,pc(M.panelId,M.path,M.control,L,N))}return}const k=h("move");if(k){if(u.current===null){u.current=j.clientX;return}const M=j.clientX-u.current;u.current=j.clientX,d.current+=M;const $=mc(k.control,k.shortcut),L=Math.trunc(d.current/fd);L!==0&&(d.current-=L*fd,pc(k.panelId,k.path,k.control,$,L))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(u2.Provider,{value:n,children:t})}var Gp="M6 9.5L12 15.5L18 9.5",K7="M5 12.75L10 19L19 5",jm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},Q7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],Z7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Nx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Od({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,w]=_.useState(void 0),[S,j]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const $=()=>j(window.innerHeight);return window.addEventListener("resize",$),()=>window.removeEventListener("resize",$)},[a]),_.useEffect(()=>{const $=x.current;if(!$)return;const L=new ResizeObserver(()=>{if(h){const N=$.offsetHeight;w(Y=>Y===N?Y:N)}});return L.observe($),()=>L.disconnect()},[h]);const k=()=>{if(c&&a)return;const $=!h;p($),g(!$),u==null||u($)},M=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Nx.path,fill:"currentColor"}),Nx.circles.map(($,L)=>l.jsx("circle",{cx:$.cx,cy:$.cy,r:$.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(ai.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Gp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:$=>$.stopPropagation(),children:d})]}),l.jsx(Vd,{initial:!1,children:h&&l.jsx(ai.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:M});const $=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ai.div,{className:"dialkit-panel-inner",style:$,onClick:h?void 0:k,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:M})}return M}var J7=3,eM=32,tM=200,nM=8;function Lo({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var rt;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),w=_.useRef(null),[S,j]=_.useState(!1),[k,M]=_.useState(!1),[$,L]=_.useState(!1),[N,Y]=_.useState(!1),[H,X]=_.useState(!1),[U,Z]=_.useState(!1),[le,oe]=_.useState(""),je=_.useRef(null),ze=_.useRef(null),J=_.useRef(!0),ue=_.useRef(null),I=_.useRef(null),se=_.useRef(1),W=(n-a)/(c-a)*100,K=S||$,ge=rp(W),R=ud(ge,V=>`${V}%`),re=ud(ge,V=>`max(5px, calc(${V}% - 9px))`),ie=rp(0),he=ud(ie,V=>`calc(100% + ${Math.abs(V)}px)`),Te=ud(ie,V=>V<0?V:0);_.useEffect(()=>{!S&&!ue.current&&ge.jump(W)},[W,S,ge]);const $e=_.useCallback(V=>{const Q=I.current;if(!Q)return n;const be=(V-Q.left)/se.current,Je=y.current?y.current.offsetWidth:Q.width,Ge=Math.max(0,Math.min(1,be/Je)),De=a+Ge*(c-a);return Math.max(a,Math.min(c,De))},[a,c,n]),Be=_.useCallback(V=>(V-a)/(c-a)*100,[a,c]),tt=_.useCallback((V,Q)=>{const fe=I.current;if(!fe)return 0;const be=Q<0?fe.left-V:V-fe.right,Je=Math.max(0,be-eM);return Q*nM*Math.sqrt(Math.min(Je/tM,1))},[]),_t=_.useCallback(V=>{if(!U&&(V.preventDefault(),V.target.setPointerCapture(V.pointerId),ze.current={x:V.clientX,y:V.clientY},J.current=!0,j(!0),y.current)){I.current=y.current.getBoundingClientRect();const Q=y.current.offsetWidth;se.current=I.current.width/Q}},[U]),It=_.useCallback(V=>{if(!S||!ze.current)return;const Q=V.clientX-ze.current.x,fe=V.clientY-ze.current.y,be=Math.sqrt(Q*Q+fe*fe);if(J.current&&be>J7&&(J.current=!1,M(!0)),!J.current){const Je=I.current;Je&&(V.clientX<Je.left?ie.jump(tt(V.clientX,-1)):V.clientX>Je.right?ie.jump(tt(V.clientX,1)):ie.jump(0));const Ge=$e(V.clientX),De=Be(Ge);ue.current&&(ue.current.stop(),ue.current=null),ge.jump(De),i(Sd(Ge,u))}},[S,$e,Be,i,ge,ie,tt]),vt=_.useCallback(V=>{if(S){if(J.current){const Q=$e(V.clientX),be=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((Q-a)/u)*u)):W7(Q,a,c),Je=Be(be);ue.current&&ue.current.stop(),ue.current=Dx(ge,Je,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{ue.current=null}}),i(Sd(be,u))}ie.get()!==0&&Dx(ie,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),M(!1),ze.current=null}},[S,$e,Be,i,a,c,ge,ie]);_.useEffect(()=>(N&&!U&&!H?je.current=setTimeout(()=>{X(!0)},800):!N&&!U&&(je.current&&(clearTimeout(je.current),je.current=null),X(!1)),()=>{je.current&&clearTimeout(je.current)}),[N,U,H]),_.useEffect(()=>{U&&x.current&&(x.current.focus(),x.current.select())},[U]);const yt=V=>{oe(V.target.value)},Ze=()=>{const V=parseFloat(le);if(!isNaN(V)){const Q=Math.max(a,Math.min(c,V));i(Sd(Q,u))}Z(!1),Y(!1),X(!1)},Yt=V=>{H&&(V.stopPropagation(),V.preventDefault(),Z(!0),oe(n.toFixed(lp(u))))},Qe=V=>{V.key==="Enter"?Ze():V.key==="Escape"&&(Z(!1),Y(!1))},pt=()=>{Ze()},ke=n.toFixed(lp(u)),ne=8,Me=10,Xe=10;let Ye=30,ct=78;const Pe=(rt=y.current)==null?void 0:rt.offsetWidth;Pe&&Pe>0&&(b.current&&(Ye=(Me+b.current.offsetWidth+ne)/Pe*100),w.current&&(ct=(Pe-Xe-w.current.offsetWidth-ne)/Pe*100));const ut=W<Ye||W>ct,dt=K?ut?.1:k?.9:.5:0,bt=(c-a)/u,zt=bt<=10?Array.from({length:bt-1},(V,Q)=>{const fe=(Q+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${fe}%`}},Q)}):Array.from({length:9},(V,Q)=>{const fe=(Q+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${fe}%`}},Q)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ai.div,{ref:g,className:`dialkit-slider ${K?"dialkit-slider-active":""}`,onPointerDown:_t,onPointerMove:It,onPointerUp:vt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:he,x:Te},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:zt}),l.jsx(ai.div,{className:"dialkit-slider-fill",style:{width:R}}),l.jsx(ai.div,{className:"dialkit-slider-handle",style:{left:re,y:"-50%"},animate:{opacity:dt,scaleX:K?1:.25,scaleY:K&&ut?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:X7(h)})]}),U?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:le,onChange:yt,onKeyDown:Qe,onBlur:pt,onClick:V=>V.stopPropagation(),onMouseDown:V=>V.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${H?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>Y(!0),onMouseLeave:()=>Y(!1),onClick:Yt,onMouseDown:V=>H&&V.stopPropagation(),style:{cursor:H?"text":"default"},children:ke})]})})}function qp({options:t,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function sM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:G7(a)})]}),l.jsx(qp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function oM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-t*(h-y),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function d2({spring:t,isSimpleMode:n}){var j,k,M,$,L;let c,u,d;if(n){const N=(j=t.visualDuration)!=null?j:.3,Y=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/N,c=Math.pow(c,2),u=2*(1-Y)*Math.sqrt(c*d)}else c=(M=t.stiffness)!=null?M:400,u=($=t.damping)!=null?$:17,d=(L=t.mass)!=null?L:1;const h=2,p=oM(c,u,d,h),y=p.map(([,N])=>N),g=Math.min(...y),b=Math.max(...y)-g,w=p.map(([N,Y],H)=>{const X=N/h*256,Z=140-((Y-g)/(b||1)*140*.6+140*.2);return`${H===0?"M":"L"} ${X} ${Z}`}).join(" "),S=[];for(let N=1;N<4;N++){const Y=64*N,H=140/4*N;S.push(l.jsx("line",{x1:Y,y1:0,x2:Y,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${N}`),l.jsx("line",{x1:0,y1:H,x2:256,y2:H,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${N}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function iM({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,x,b,w,S;const u=_.useSyncExternalStore(j=>tn.subscribe(t,j),()=>tn.getSpringMode(t,n),()=>tn.getSpringMode(t,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{tn.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},y=(j,k)=>{if(d){const{stiffness:M,damping:$,mass:L,...N}=a;c({...N,[j]:k})}else{const{visualDuration:M,bounce:$,...L}=a;c({...L,[j]:k})}};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(d2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Lo,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:j=>y("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Lo,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>y("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Lo,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>y("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Lo,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:j=>y("damping",j),min:1,max:100,step:1}),l.jsx(Lo,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:j=>y("mass",j),min:.1,max:10,step:.1})]})]})})}function aM({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function rM({panelId:t,path:n,label:i,value:a,onChange:c}){var S,j,k,M,$;const u=_.useSyncExternalStore(L=>tn.subscribe(t,L),()=>tn.getTransitionMode(t,n),()=>tn.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=L=>{tn.updateTransitionMode(t,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,N)=>{if(h){const{stiffness:Y,damping:H,mass:X,...U}=y;c({...U,[L]:N})}else{const{visualDuration:Y,bounce:H,...X}=y;c({...X,[L]:N})}},w=(L,N)=>{const Y=[...g.ease];Y[L]=N,c({...g,ease:Y})};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(aM,{easing:g}):l.jsx(d2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Lo,{label:"x1",value:g.ease[0],onChange:L=>w(0,L),min:0,max:1,step:.01}),l.jsx(Lo,{label:"y1",value:g.ease[1],onChange:L=>w(1,L),min:-1,max:2,step:.01}),l.jsx(Lo,{label:"x2",value:g.ease[2],onChange:L=>w(2,L),min:0,max:1,step:.01}),l.jsx(Lo,{label:"y2",value:g.ease[3],onChange:L=>w(3,L),min:-1,max:2,step:.01}),l.jsx(Lo,{label:"Duration",value:g.duration,onChange:L=>c({...g,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(cM,{ease:g.ease,onChange:L=>c({...g,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Lo,{label:"Duration",value:(S=y.visualDuration)!=null?S:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Lo,{label:"Bounce",value:(j=y.bounce)!=null?j:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Lo,{label:"Stiffness",value:(k=y.stiffness)!=null?k:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx(Lo,{label:"Damping",value:(M=y.damping)!=null?M:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx(Lo,{label:"Mass",value:($=y.mass)!=null?$:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Rx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function lM(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function cM({ease:t,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Rx(t)),a(!0)},h=()=>{const y=lM(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Rx(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function uM({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function dM(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function fM(t){return t.map(n=>typeof n=="string"?{value:n,label:dM(n)}:n)}function hM({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=fM(i),w=b.find(k=>k.value===n),S=_.useCallback(()=>{const k=d.current;if(!k)return;const M=k.getBoundingClientRect(),$=8+b.length*36,L=window.innerHeight-M.bottom-4,N=L<$&&M.top>L;x({top:N?M.top-4:M.bottom+4,left:M.left,width:M.width,above:N})},[b.length]);return _.useEffect(()=>{var M;const k=(M=d.current)==null?void 0:M.closest(".dialkit-root");y(k!=null?k:document.body)},[]),_.useEffect(()=>{c&&S()},[c,S]),_.useEffect(()=>{if(!c)return;const k=M=>{const $=M.target;d.current&&!d.current.contains($)&&h.current&&!h.current.contains($)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=w==null?void 0:w.label)!=null?j:n}),l.jsx(ai.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Gp})})]})]}),p&&Bc.createPortal(l.jsx(Vd,{children:c&&g&&l.jsx(ai.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(k=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var mM=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function pM({label:t,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),mM.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?_M(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function _M(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function gM({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(M=>M.id===i),b=_.useCallback(()=>{var $;if(!g)return;const M=($=d.current)==null?void 0:$.getBoundingClientRect();M&&y({top:M.bottom+4,left:M.left,width:M.width}),u(!0)},[g]),w=_.useCallback(()=>u(!1),[]),S=_.useCallback(()=>{c?w():b()},[c,b,w]);_.useEffect(()=>{if(!c)return;const M=$=>{var N,Y;const L=$.target;(N=d.current)!=null&&N.contains(L)||(Y=h.current)!=null&&Y.contains(L)||w()};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c,w]);const j=M=>{M?tn.loadPreset(t,M):tn.clearActivePreset(t),w()},k=(M,$)=>{M.stopPropagation(),tn.deletePreset(t,$)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ai.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Gp})})]}),Bc.createPortal(l.jsx(Vd,{children:c&&l.jsxs(ai.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(M=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(M.id===i),onClick:()=>j(M.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:M.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:$=>k($,M.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Z7.map(($,L)=>l.jsx("path",{d:$},L))})})]},M.id))]})}),document.body)]})}function yM({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(u2);Object.keys(t.shortcuts).length>0;const p=_.useSyncExternalStore(k=>tn.subscribe(t.id,k),()=>tn.getValues(t.id),()=>tn.getValues(t.id)),y=tn.getPresets(t.id),g=tn.getActivePresetId(t.id),x=()=>{const k=y.length+2;tn.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),M=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(M),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var $,L,N;const M=p[k.path];switch(k.type){case"slider":return l.jsx(Lo,{label:k.label,value:M,onChange:Y=>tn.updateValue(t.id,k.path,Y),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return l.jsx(sM,{label:k.label,checked:M,onChange:Y=>tn.updateValue(t.id,k.path,Y),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return l.jsx(iM,{panelId:t.id,path:k.path,label:k.label,spring:M,onChange:Y=>tn.updateValue(t.id,k.path,Y)},k.path);case"transition":return l.jsx(rM,{panelId:t.id,path:k.path,label:k.label,value:M,onChange:Y=>tn.updateValue(t.id,k.path,Y)},k.path);case"folder":return l.jsx(Od,{title:k.label,defaultOpen:($=k.defaultOpen)!=null?$:!0,children:(L=k.children)==null?void 0:L.map(w)},k.path);case"text":return l.jsx(uM,{label:k.label,value:M,onChange:Y=>tn.updateValue(t.id,k.path,Y),placeholder:k.placeholder},k.path);case"select":return l.jsx(hM,{label:k.label,value:M,options:(N=k.options)!=null?N:[],onChange:Y=>tn.updateValue(t.id,k.path,Y)},k.path);case"color":return l.jsx(pM,{label:k.label,value:M,onChange:Y=>tn.updateValue(t.id,k.path,Y)},k.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>tn.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),j=l.jsxs(l.Fragment,{children:[l.jsx(ai.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:Q7.map((k,M)=>l.jsx("path",{d:k},M))})}),l.jsx(gM,{panelId:t.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(ai.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Vd,{initial:!1,mode:"wait",children:a?l.jsx(ai.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:K7})},"check"):l.jsxs(ai.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:jm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:jm.sparkle,fill:"currentColor"}),l.jsx("path",{d:jm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Od,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:S()})})}var xM=typeof process<"u"?!1:!(typeof import.meta<"u");function bM({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=xM}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[w,S]=_.useState(t),j=_.useRef(null),k=_.useRef(!1),M=_.useRef(null),$=_.useRef(!1);_.useEffect(()=>(p(!0),d(tn.getPanels()),tn.subscribeGlobal(()=>{d(tn.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const U=new MutationObserver(()=>{var oe;const Z=(oe=g.current)==null?void 0:oe.querySelector(".dialkit-panel-inner");if(!Z)return;if(Z.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const je=x.x+21,ze=window.innerWidth/2;S(je<ze?"top-left":"top-right")}else S(t);b(null)}});return U.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>U.disconnect()},[y,x,t]);const L=_.useCallback(U=>{var oe;const Z=(oe=g.current)==null?void 0:oe.querySelector(".dialkit-panel-inner");if(!Z||Z.getAttribute("data-collapsed")!=="true")return;const le=g.current.getBoundingClientRect();M.current={pointerX:U.clientX,pointerY:U.clientY,elX:le.left,elY:le.top},$.current=!1,k.current=!0,U.target.setPointerCapture(U.pointerId)},[]),N=_.useCallback(U=>{if(!k.current||!M.current)return;const Z=U.clientX-M.current.pointerX,le=U.clientY-M.current.pointerY;!$.current&&Math.abs(Z)+Math.abs(le)<4||($.current=!0,b({x:M.current.elX+Z,y:M.current.elY+le}))},[]),Y=_.useCallback(U=>{var Z;if(k.current&&(k.current=!1,M.current=null,$.current)){U.stopPropagation();const le=(Z=g.current)==null?void 0:Z.querySelector(".dialkit-panel-inner");if(le){const oe=je=>{je.stopPropagation()};le.addEventListener("click",oe,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const H=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,X=l.jsx(q7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:w,"data-mode":i,style:H,onPointerDown:y?void 0:L,onPointerMove:y?void 0:N,onPointerUp:y?void 0:Y,children:u.map(U=>l.jsx(yM,{panel:U,defaultOpen:y||n,inline:y},U.id))})})});return y?X:Bc.createPortal(X,document.body)}const vM=()=>(z7("Git Visualizer",{preview:[1,0,1]}),null),wM=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(vM,{}),l.jsx(bM,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(SC,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});$v.createRoot(document.getElementById("root")).render(l.jsx(wM,{children:l.jsx(aS,{})}));

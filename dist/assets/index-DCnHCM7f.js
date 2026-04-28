(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function zx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oh={exports:{}},oc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function Rv(){if(ty)return oc;ty=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return oc.Fragment=n,oc.jsx=i,oc.jsxs=i,oc}var ny;function Bv(){return ny||(ny=1,Oh.exports=Rv()),Oh.exports}var l=Bv(),zh={exports:{}},ic={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function Lv(){return sy||(sy=1,(function(t){function n(I,ie){var F=I.length;I.push(ie);e:for(;0<F;){var me=F-1>>>1,Te=I[me];if(0<c(Te,ie))I[me]=ie,I[F]=Te,F=me;else break e}}function i(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var ie=I[0],F=I.pop();if(F!==ie){I[0]=F;e:for(var me=0,Te=I.length,$=Te>>>1;me<$;){var fe=2*(me+1)-1,G=I[fe],_e=fe+1,ve=I[_e];if(0>c(G,F))_e<Te&&0>c(ve,G)?(I[me]=ve,I[_e]=F,me=_e):(I[me]=G,I[fe]=F,me=fe);else if(_e<Te&&0>c(ve,F))I[me]=ve,I[_e]=F,me=_e;else break e}}return ie}function c(I,ie){var F=I.sortIndex-ie.sortIndex;return F!==0?F:I.id-ie.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,S=!1,C=!1,M=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(I){for(var ie=i(y);ie!==null;){if(ie.callback===null)a(y);else if(ie.startTime<=I)a(y),ie.sortIndex=ie.expirationTime,n(p,ie);else break;ie=i(y)}}function q(I){if(M=!1,N(I),!C)if(i(p)!==null)C=!0,Y||(Y=!0,Ne());else{var ie=i(y);ie!==null&&he(q,ie.startTime-I)}}var Y=!1,Q=-1,V=5,ee=-1;function le(){return E?!0:!(t.unstable_now()-ee<V)}function re(){if(E=!1,Y){var I=t.unstable_now();ee=I;var ie=!0;try{e:{C=!1,M&&(M=!1,O(Q),Q=-1),S=!0;var F=b;try{t:{for(N(I),x=i(p);x!==null&&!(x.expirationTime>I&&le());){var me=x.callback;if(typeof me=="function"){x.callback=null,b=x.priorityLevel;var Te=me(x.expirationTime<=I);if(I=t.unstable_now(),typeof Te=="function"){x.callback=Te,N(I),ie=!0;break t}x===i(p)&&a(p),N(I)}else a(p);x=i(p)}if(x!==null)ie=!0;else{var $=i(y);$!==null&&he(q,$.startTime-I),ie=!1}}break e}finally{x=null,b=F,S=!1}ie=void 0}}finally{ie?Ne():Y=!1}}}var Ne;if(typeof L=="function")Ne=function(){L(re)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,te=Ve.port2;Ve.port1.onmessage=re,Ne=function(){te.postMessage(null)}}else Ne=function(){T(re,0)};function he(I,ie){Q=T(function(){I(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(I){switch(b){case 1:case 2:case 3:var ie=3;break;default:ie=b}var F=b;b=ie;try{return I()}finally{b=F}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function(I,ie){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=b;b=I;try{return ie()}finally{b=F}},t.unstable_scheduleCallback=function(I,ie,F){var me=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?me+F:me):F=me,I){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=F+Te,I={id:g++,callback:ie,priorityLevel:I,startTime:F,expirationTime:Te,sortIndex:-1},F>me?(I.sortIndex=F,n(y,I),i(p)===null&&I===i(y)&&(M?(O(Q),Q=-1):M=!0,he(q,F-me))):(I.sortIndex=Te,n(p,I),C||S||(C=!0,Y||(Y=!0,Ne()))),I},t.unstable_shouldYield=le,t.unstable_wrapCallback=function(I){var ie=b;return function(){var F=b;b=ie;try{return I.apply(this,arguments)}finally{b=F}}}})(Ih)),Ih}var oy;function Ov(){return oy||(oy=1,$h.exports=Lv()),$h.exports}var Ph={exports:{}},Jt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function zv(){if(iy)return Jt;iy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function S($){return $===null||typeof $!="object"?null:($=b&&$[b]||$["@@iterator"],typeof $=="function"?$:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function T($,fe,G){this.props=$,this.context=fe,this.refs=E,this.updater=G||C}T.prototype.isReactComponent={},T.prototype.setState=function($,fe){if(typeof $!="object"&&typeof $!="function"&&$!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,$,fe,"setState")},T.prototype.forceUpdate=function($){this.updater.enqueueForceUpdate(this,$,"forceUpdate")};function O(){}O.prototype=T.prototype;function L($,fe,G){this.props=$,this.context=fe,this.refs=E,this.updater=G||C}var N=L.prototype=new O;N.constructor=L,M(N,T.prototype),N.isPureReactComponent=!0;var q=Array.isArray;function Y(){}var Q={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function ee($,fe,G){var _e=G.ref;return{$$typeof:t,type:$,key:fe,ref:_e!==void 0?_e:null,props:G}}function le($,fe){return ee($.type,fe,$.props)}function re($){return typeof $=="object"&&$!==null&&$.$$typeof===t}function Ne($){var fe={"=":"=0",":":"=2"};return"$"+$.replace(/[=:]/g,function(G){return fe[G]})}var Ve=/\/+/g;function te($,fe){return typeof $=="object"&&$!==null&&$.key!=null?Ne(""+$.key):fe.toString(36)}function he($){switch($.status){case"fulfilled":return $.value;case"rejected":throw $.reason;default:switch(typeof $.status=="string"?$.then(Y,Y):($.status="pending",$.then(function(fe){$.status==="pending"&&($.status="fulfilled",$.value=fe)},function(fe){$.status==="pending"&&($.status="rejected",$.reason=fe)})),$.status){case"fulfilled":return $.value;case"rejected":throw $.reason}}throw $}function I($,fe,G,_e,ve){var Ae=typeof $;(Ae==="undefined"||Ae==="boolean")&&($=null);var We=!1;if($===null)We=!0;else switch(Ae){case"bigint":case"string":case"number":We=!0;break;case"object":switch($.$$typeof){case t:case n:We=!0;break;case g:return We=$._init,I(We($._payload),fe,G,_e,ve)}}if(We)return ve=ve($),We=_e===""?"."+te($,0):_e,q(ve)?(G="",We!=null&&(G=We.replace(Ve,"$&/")+"/"),I(ve,fe,G,"",function(Bt){return Bt})):ve!=null&&(re(ve)&&(ve=le(ve,G+(ve.key==null||$&&$.key===ve.key?"":(""+ve.key).replace(Ve,"$&/")+"/")+We)),fe.push(ve)),1;We=0;var Ye=_e===""?".":_e+":";if(q($))for(var lt=0;lt<$.length;lt++)_e=$[lt],Ae=Ye+te(_e,lt),We+=I(_e,fe,G,Ae,ve);else if(lt=S($),typeof lt=="function")for($=lt.call($),lt=0;!(_e=$.next()).done;)_e=_e.value,Ae=Ye+te(_e,lt++),We+=I(_e,fe,G,Ae,ve);else if(Ae==="object"){if(typeof $.then=="function")return I(he($),fe,G,_e,ve);throw fe=String($),Error("Objects are not valid as a React child (found: "+(fe==="[object Object]"?"object with keys {"+Object.keys($).join(", ")+"}":fe)+"). If you meant to render a collection of children, use an array instead.")}return We}function ie($,fe,G){if($==null)return $;var _e=[],ve=0;return I($,_e,"","",function(Ae){return fe.call(G,Ae,ve++)}),_e}function F($){if($._status===-1){var fe=$._result;fe=fe(),fe.then(function(G){($._status===0||$._status===-1)&&($._status=1,$._result=G)},function(G){($._status===0||$._status===-1)&&($._status=2,$._result=G)}),$._status===-1&&($._status=0,$._result=fe)}if($._status===1)return $._result.default;throw $._result}var me=typeof reportError=="function"?reportError:function($){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var fe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof $=="object"&&$!==null&&typeof $.message=="string"?String($.message):String($),error:$});if(!window.dispatchEvent(fe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",$);return}console.error($)},Te={map:ie,forEach:function($,fe,G){ie($,function(){fe.apply(this,arguments)},G)},count:function($){var fe=0;return ie($,function(){fe++}),fe},toArray:function($){return ie($,function(fe){return fe})||[]},only:function($){if(!re($))throw Error("React.Children.only expected to receive a single React element child.");return $}};return Jt.Activity=x,Jt.Children=Te,Jt.Component=T,Jt.Fragment=i,Jt.Profiler=c,Jt.PureComponent=L,Jt.StrictMode=a,Jt.Suspense=p,Jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,Jt.__COMPILER_RUNTIME={__proto__:null,c:function($){return Q.H.useMemoCache($)}},Jt.cache=function($){return function(){return $.apply(null,arguments)}},Jt.cacheSignal=function(){return null},Jt.cloneElement=function($,fe,G){if($==null)throw Error("The argument must be a React element, but you passed "+$+".");var _e=M({},$.props),ve=$.key;if(fe!=null)for(Ae in fe.key!==void 0&&(ve=""+fe.key),fe)!V.call(fe,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&fe.ref===void 0||(_e[Ae]=fe[Ae]);var Ae=arguments.length-2;if(Ae===1)_e.children=G;else if(1<Ae){for(var We=Array(Ae),Ye=0;Ye<Ae;Ye++)We[Ye]=arguments[Ye+2];_e.children=We}return ee($.type,ve,_e)},Jt.createContext=function($){return $={$$typeof:d,_currentValue:$,_currentValue2:$,_threadCount:0,Provider:null,Consumer:null},$.Provider=$,$.Consumer={$$typeof:u,_context:$},$},Jt.createElement=function($,fe,G){var _e,ve={},Ae=null;if(fe!=null)for(_e in fe.key!==void 0&&(Ae=""+fe.key),fe)V.call(fe,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(ve[_e]=fe[_e]);var We=arguments.length-2;if(We===1)ve.children=G;else if(1<We){for(var Ye=Array(We),lt=0;lt<We;lt++)Ye[lt]=arguments[lt+2];ve.children=Ye}if($&&$.defaultProps)for(_e in We=$.defaultProps,We)ve[_e]===void 0&&(ve[_e]=We[_e]);return ee($,Ae,ve)},Jt.createRef=function(){return{current:null}},Jt.forwardRef=function($){return{$$typeof:h,render:$}},Jt.isValidElement=re,Jt.lazy=function($){return{$$typeof:g,_payload:{_status:-1,_result:$},_init:F}},Jt.memo=function($,fe){return{$$typeof:y,type:$,compare:fe===void 0?null:fe}},Jt.startTransition=function($){var fe=Q.T,G={};Q.T=G;try{var _e=$(),ve=Q.S;ve!==null&&ve(G,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(Y,me)}catch(Ae){me(Ae)}finally{fe!==null&&G.types!==null&&(fe.types=G.types),Q.T=fe}},Jt.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},Jt.use=function($){return Q.H.use($)},Jt.useActionState=function($,fe,G){return Q.H.useActionState($,fe,G)},Jt.useCallback=function($,fe){return Q.H.useCallback($,fe)},Jt.useContext=function($){return Q.H.useContext($)},Jt.useDebugValue=function(){},Jt.useDeferredValue=function($,fe){return Q.H.useDeferredValue($,fe)},Jt.useEffect=function($,fe){return Q.H.useEffect($,fe)},Jt.useEffectEvent=function($){return Q.H.useEffectEvent($)},Jt.useId=function(){return Q.H.useId()},Jt.useImperativeHandle=function($,fe,G){return Q.H.useImperativeHandle($,fe,G)},Jt.useInsertionEffect=function($,fe){return Q.H.useInsertionEffect($,fe)},Jt.useLayoutEffect=function($,fe){return Q.H.useLayoutEffect($,fe)},Jt.useMemo=function($,fe){return Q.H.useMemo($,fe)},Jt.useOptimistic=function($,fe){return Q.H.useOptimistic($,fe)},Jt.useReducer=function($,fe,G){return Q.H.useReducer($,fe,G)},Jt.useRef=function($){return Q.H.useRef($)},Jt.useState=function($){return Q.H.useState($)},Jt.useSyncExternalStore=function($,fe,G){return Q.H.useSyncExternalStore($,fe,G)},Jt.useTransition=function(){return Q.H.useTransition()},Jt.version="19.2.4",Jt}var ay;function up(){return ay||(ay=1,Ph.exports=zv()),Ph.exports}var Hh={exports:{}},zo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function $v(){if(ry)return zo;ry=1;var t=up();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return zo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},zo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},zo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},zo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},zo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,S=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:S,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},zo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},zo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},zo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},zo.requestFormReset=function(p){a.d.r(p)},zo.unstable_batchedUpdates=function(p,y){return p(y)},zo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},zo.useFormStatus=function(){return d.H.useHostTransitionStatus()},zo.version="19.2.4",zo}var ly;function $x(){if(ly)return Hh.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=$v(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function Iv(){if(cy)return ic;cy=1;var t=Ov(),n=up(),i=$x();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function y(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function g(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=g(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function Ne(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Symbol.for("react.client.reference");function te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case T:return"Profiler";case E:return"StrictMode";case q:return"Suspense";case Y:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case L:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case N:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return s=e.displayName||null,s!==null?s:te(e.type)||"Memo";case V:s=e._payload,e=e._init;try{return te(e(s))}catch{}}return null}var he=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},me=[],Te=-1;function $(e){return{current:e}}function fe(e){0>Te||(e.current=me[Te],me[Te]=null,Te--)}function G(e,s){Te++,me[Te]=e.current,e.current=s}var _e=$(null),ve=$(null),Ae=$(null),We=$(null);function Ye(e,s){switch(G(Ae,s),G(ve,e),G(_e,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=C0(s),e=k0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}fe(_e),G(_e,e)}function lt(){fe(_e),fe(ve),fe(Ae)}function Bt(e){e.memoizedState!==null&&G(We,e);var s=_e.current,o=k0(s,e.type);s!==o&&(G(ve,e),G(_e,o))}function Kt(e){ve.current===e&&(fe(_e),fe(ve)),We.current===e&&(fe(We),ec._currentValue=F)}var Ze,ot;function zt(e){if(Ze===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ze=s&&s[1]||"",ot=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+e+ot}var qe=!1;function wt(e,s){if(!e||qe)return"";qe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var $e=function(){throw Error()};if(Object.defineProperty($e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($e,[])}catch(we){var be=we}Reflect.construct(e,[],$e)}else{try{$e.call()}catch(we){be=we}e.call($e.prototype)}}else{try{throw Error()}catch(we){be=we}($e=e())&&typeof $e.catch=="function"&&$e.catch(function(){})}}catch(we){if(we&&be&&typeof we.stack=="string")return[we.stack,be.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var Z=v.split(`
`),xe=A.split(`
`);for(f=r=0;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;for(;f<xe.length&&!xe[f].includes("DetermineComponentFrameRoot");)f++;if(r===Z.length||f===xe.length)for(r=Z.length-1,f=xe.length-1;1<=r&&0<=f&&Z[r]!==xe[f];)f--;for(;1<=r&&0<=f;r--,f--)if(Z[r]!==xe[f]){if(r!==1||f!==1)do if(r--,f--,0>f||Z[r]!==xe[f]){var De=`
`+Z[r].replace(" at new "," at ");return e.displayName&&De.includes("<anonymous>")&&(De=De.replace("<anonymous>",e.displayName)),De}while(1<=r&&0<=f);break}}}finally{qe=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?zt(o):""}function ke(e,s){switch(e.tag){case 26:case 27:case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return e.child!==s&&s!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return wt(e.type,!1);case 11:return wt(e.type.render,!1);case 1:return wt(e.type,!0);case 31:return zt("Activity");default:return""}}function se(e){try{var s="",o=null;do s+=ke(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Re=Object.prototype.hasOwnProperty,Xe=t.unstable_scheduleCallback,He=t.unstable_cancelCallback,Fe=t.unstable_shouldYield,tt=t.unstable_requestPaint,it=t.unstable_now,gt=t.unstable_getCurrentPriorityLevel,bt=t.unstable_ImmediatePriority,$t=t.unstable_UserBlockingPriority,at=t.unstable_NormalPriority,P=t.unstable_LowPriority,J=t.unstable_IdlePriority,ge=t.log,Se=t.unstable_setDisableYieldValue,et=null,Ke=null;function Ee(e){if(typeof ge=="function"&&Se(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(et,e)}catch{}}var _t=Math.clz32?Math.clz32:xt,Ie=Math.log,Ft=Math.LN2;function xt(e){return e>>>=0,e===0?32:31-(Ie(e)/Ft|0)|0}var ct=256,Lt=262144,Rt=4194304;function Qt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=Qt(r):(v&=A,v!==0?f=Qt(v):o||(o=A&~e,o!==0&&(f=Qt(o))))):(A=r&~m,A!==0?f=Qt(A):v!==0?f=Qt(v):o||(o=r&~e,o!==0&&(f=Qt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function nt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function jt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pt(){var e=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),e}function At(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function mt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ot(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,Z=e.expirationTimes,xe=e.hiddenUpdates;for(o=v&~o;0<o;){var De=31-_t(o),$e=1<<De;A[De]=0,Z[De]=-1;var be=xe[De];if(be!==null)for(xe[De]=null,De=0;De<be.length;De++){var we=be[De];we!==null&&(we.lane&=-536870913)}o&=~$e}r!==0&&hn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function hn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-_t(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function ln(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-_t(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function on(e,s){var o=s&-s;return o=(o&42)!==0?1:Xn(o),(o&(e.suspendedLanes|s))!==0?0:o}function Xn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sn(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:G0(e.type))}function vn(e,s){var o=ie.p;try{return ie.p=e,s()}finally{ie.p=o}}var rs=Math.random().toString(36).slice(2),Xt="__reactFiber$"+rs,$n="__reactProps$"+rs,rt="__reactContainer$"+rs,In="__reactEvents$"+rs,fo="__reactListeners$"+rs,Zo="__reactHandles$"+rs,Is="__reactResources$"+rs,Cs="__reactMarker$"+rs;function ui(e){delete e[Xt],delete e[$n],delete e[In],delete e[fo],delete e[Zo]}function _s(e){var s=e[Xt];if(s)return s;for(var o=e.parentNode;o;){if(s=o[rt]||o[Xt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=D0(e);e!==null;){if(o=e[Xt])return o;e=D0(e)}return s}e=o,o=e.parentNode}return null}function bo(e){if(e=e[Xt]||e[rt]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Jo(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Ns(e){var s=e[Is];return s||(s=e[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Cn(e){e[Cs]=!0}var ei=new Set,vs={};function gn(e,s){Un(e,s),Un(e+"Capture",s)}function Un(e,s){for(vs[e]=s,e=0;e<s.length;e++)ei.add(s[e])}var so=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ps={},ls={};function ns(e){return Re.call(ls,e)?!0:Re.call(Ps,e)?!1:so.test(e)?ls[e]=!0:(Ps[e]=!0,!1)}function Hs(e,s,o){if(ns(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function yn(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function mn(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function tn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pn(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Io(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Po(e){if(!e._valueTracker){var s=Pn(e)?"checked":"value";e._valueTracker=Io(e,s,""+e[s])}}function di(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Pn(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Us(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ti=/[\n"\\]/g;function gs(e){return e.replace(ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function vo(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+tn(s)):e.value!==""+tn(s)&&(e.value=""+tn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?ho(e,v,tn(s)):o!=null?ho(e,v,tn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+tn(A):e.removeAttribute("name")}function kn(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Po(e);return}o=o!=null?""+tn(o):"",s=s!=null?""+tn(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Po(e)}function ho(e,s,o){s==="number"&&Us(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function fs(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+tn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function Gn(e,s,o){if(s!=null&&(s=""+tn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+tn(o):""}function Vs(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(he(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=tn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),Po(e)}function wo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Ho=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ut(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Ho.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function oo(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Ut(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Ut(e,m,s[m])}function ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function So(e){return wi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ds(){}var Vo=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jn=null,Co=null;function mo(e){var s=bo(e);if(s&&(e=s.stateNode)){var o=e[$n]||null;e:switch(e=s.stateNode,s.type){case"input":if(vo(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+gs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[$n]||null;if(!f)throw Error(a(90));vo(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&di(r)}break e;case"textarea":Gn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&fs(e,!!o.multiple,s,!1)}}}var ys=!1;function po(e,s,o){if(ys)return e(s,o);ys=!0;try{var r=e(s);return r}finally{if(ys=!1,(jn!==null||Co!==null)&&(vu(),jn&&(s=jn,e=Co,Co=jn=null,mo(s),e)))for(s=0;s<e.length;s++)mo(e[s])}}function an(e,s){var o=e.stateNode;if(o===null)return null;var r=o[$n]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Ws=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rs=!1;if(Ws)try{var io={};Object.defineProperty(io,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Rs=!1}var ws=null,ko=null,Fs=null;function jo(){if(Fs)return Fs;var e,s=ko,o=s.length,r,f="value"in ws?ws.value:ws.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Fs=f.slice(e,1<r?1-r:void 0)}function Mn(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function En(){return!1}function Vn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Yo:En,this.isPropagationStopped=En,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),s}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=Vn(Rn),js=x({},Rn,{view:0,detail:0}),Bs=Vn(js),Wo,ao,hs,Ss=x({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hs&&(hs&&e.type==="mousemove"?(Wo=e.screenX-hs.screenX,ao=e.screenY-hs.screenY):ao=Wo=0,hs=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),Ro=Vn(Ss),_o=x({},Ss,{dataTransfer:0}),go=Vn(_o),Bo=x({},js,{relatedTarget:0}),Lo=Vn(Bo),Si=x({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),ta=Vn(Si),Ii=x({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pi=Vn(Ii),ni=x({},Rn,{data:0}),Tt=Vn(ni),Ci={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ki={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fi(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Hi[e])?!!s[e]:!1}function yo(){return fi}var Fo=x({},js,{key:function(e){if(e.key){var s=Ci[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Mn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ki[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(e){return e.type==="keypress"?Mn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hi=Vn(Fo),j=x({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U=Vn(j),ue=x({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),Ce=Vn(ue),Pe=x({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qe=Vn(Pe),Vt=x({},Ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nt=Vn(Vt),Zt=x({},Rn,{newState:0,oldState:0}),Gt=Vn(Zt),rn=[9,13,27,32],xn=Ws&&"CompositionEvent"in window,cn=null;Ws&&"documentMode"in document&&(cn=document.documentMode);var Gs=Ws&&"TextEvent"in window&&!cn,Yt=Ws&&(!xn||cn&&8<cn&&11>=cn),ss=" ",xs=!1;function cs(e,s){switch(e){case"keyup":return rn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ro(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qs=!1;function Ls(e,s){switch(e){case"compositionend":return ro(s);case"keypress":return s.which!==32?null:(xs=!0,ss);case"textInput":return e=s.data,e===ss&&xs?null:e;default:return null}}function Ks(e,s){if(qs)return e==="compositionend"||!xn&&cs(e,s)?(e=jo(),Fs=ko=ws=null,qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Yt&&s.locale!=="ko"?null:s.data;default:return null}}var D={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!D[e.type]:s==="textarea"}function K(e,s,o,r){jn?Co?Co.push(r):Co=[r]:jn=r,s=Eu(s,"onChange"),0<s.length&&(o=new Xs("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var ce=null,W=null;function ae(e){y0(e,0)}function w(e){var s=Jo(e);if(di(s))return e}function k(e,s){if(e==="change")return s}var R=!1;if(Ws){var B;if(Ws){var H="oninput"in document;if(!H){var oe=document.createElement("div");oe.setAttribute("oninput","return;"),H=typeof oe.oninput=="function"}B=H}else B=!1;R=B&&(!document.documentMode||9<document.documentMode)}function pe(){ce&&(ce.detachEvent("onpropertychange",Me),W=ce=null)}function Me(e){if(e.propertyName==="value"&&w(W)){var s=[];K(s,W,e,Ys(e)),po(ae,s)}}function Be(e,s,o){e==="focusin"?(pe(),ce=s,W=o,ce.attachEvent("onpropertychange",Me)):e==="focusout"&&pe()}function Je(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return w(W)}function st(e,s){if(e==="click")return w(s)}function ht(e,s){if(e==="input"||e==="change")return w(s)}function yt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var dt=typeof Object.is=="function"?Object.is:yt;function ft(e,s){if(dt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Re.call(s,f)||!dt(e[f],s[f]))return!1}return!0}function wn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bn(e,s){var o=wn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=wn(o)}}function Ln(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?Ln(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Dt(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Us(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Us(e.document)}return s}function qt(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Mt=Ws&&"documentMode"in document&&11>=document.documentMode,Pt=null,qn=null,Tn=null,lo=!1;function Oo(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lo||Pt==null||Pt!==Us(r)||(r=Pt,"selectionStart"in r&&qt(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&ft(Tn,r)||(Tn=r,r=Eu(qn,"onSelect"),0<r.length&&(s=new Xs("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Pt)))}function os(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ji={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},Ui={},Vi={};Ws&&(Vi=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Kn(e){if(Ui[e])return Ui[e];if(!ji[e])return e;var s=ji[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Vi)return Ui[e]=s[o];return e}var Yi=Kn("animationend"),na=Kn("animationiteration"),Pc=Kn("animationstart"),Wd=Kn("transitionrun"),Fd=Kn("transitionstart"),Xd=Kn("transitioncancel"),Qp=Kn("transitionend"),Zp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Wi(e,s){Zp.set(e,s),gn(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],Br=0,qd=0;function Uc(){for(var e=Br,s=qd=Br=0;s<e;){var o=Mi[s];Mi[s++]=null;var r=Mi[s];Mi[s++]=null;var f=Mi[s];Mi[s++]=null;var m=Mi[s];if(Mi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Jp(o,f,m)}}function Vc(e,s,o,r){Mi[Br++]=e,Mi[Br++]=s,Mi[Br++]=o,Mi[Br++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Vc(e,s,o,r),Yc(e)}function cr(e,s){return Vc(e,null,null,s),Yc(e)}function Jp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-_t(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Xl)throw Xl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Lr={};function _2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,s,o,r){return new _2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,s){var o=e.alternate;return o===null?(o=mi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function e_(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=vv(e,o,_e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ee:return e=mi(31,o,s,f),e.elementType=ee,e.lanes=m,e;case M:return ur(o.children,f,m,s);case E:v=8,f|=24;break;case T:return e=mi(12,o,s,f|2),e.elementType=T,e.lanes=m,e;case q:return e=mi(13,o,s,f),e.elementType=q,e.lanes=m,e;case Y:return e=mi(19,o,s,f),e.elementType=Y,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case O:v=9;break e;case N:v=11;break e;case Q:v=14;break e;case V:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=mi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ur(e,s,o,r){return e=mi(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=mi(6,e,null,s),e.lanes=o,e}function t_(e){var s=mi(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=mi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var n_=new WeakMap;function Ei(e,s){if(typeof e=="object"&&e!==null){var o=n_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:se(s)},n_.set(e,s),s)}return{value:e,source:s,stack:se(s)}}var Or=[],zr=0,Fc=null,jl=0,Ti=[],Ai=0,Da=null,sa=1,oa="";function ma(e,s){Or[zr++]=jl,Or[zr++]=Fc,Fc=e,jl=s}function s_(e,s,o){Ti[Ai++]=sa,Ti[Ai++]=oa,Ti[Ai++]=Da,Da=e;var r=sa;e=oa;var f=32-_t(r)-1;r&=~(1<<f),o+=1;var m=32-_t(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,sa=1<<32-_t(s)+f|o<<f|r,oa=m+e}else sa=1<<m|o<<f|r,oa=e}function ef(e){e.return!==null&&(ma(e,1),s_(e,1,0))}function tf(e){for(;e===Fc;)Fc=Or[--zr],Or[zr]=null,jl=Or[--zr],Or[zr]=null;for(;e===Da;)Da=Ti[--Ai],Ti[Ai]=null,oa=Ti[--Ai],Ti[Ai]=null,sa=Ti[--Ai],Ti[Ai]=null}function o_(e,s){Ti[Ai++]=sa,Ti[Ai++]=oa,Ti[Ai++]=Da,sa=s.id,oa=s.overflow,Da=e}var Mo=null,ms=null,bn=!1,Ra=null,Ni=!1,nf=Error(a(519));function Ba(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(Ei(s,e)),nf}function i_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[Xt]=e,s[$n]=r,o){case"dialog":fn("cancel",s),fn("close",s);break;case"iframe":case"object":case"embed":fn("load",s);break;case"video":case"audio":for(o=0;o<ql.length;o++)fn(ql[o],s);break;case"source":fn("error",s);break;case"img":case"image":case"link":fn("error",s),fn("load",s);break;case"details":fn("toggle",s);break;case"input":fn("invalid",s),kn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":fn("invalid",s);break;case"textarea":fn("invalid",s),Vs(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||w0(s.textContent,o)?(r.popover!=null&&(fn("beforetoggle",s),fn("toggle",s)),r.onScroll!=null&&fn("scroll",s),r.onScrollEnd!=null&&fn("scrollend",s),r.onClick!=null&&(s.onclick=Ds),s=!0):s=!1,s||Ba(e,!0)}function a_(e){for(Mo=e.return;Mo;)switch(Mo.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Mo=Mo.return}}function $r(e){if(e!==Mo)return!1;if(!bn)return a_(e),bn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&ms&&Ba(e),a_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ms=N0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ms=N0(e)}else s===27?(s=ms,Ga(e.type)?(e=jh,jh=null,ms=e):ms=s):ms=Mo?Ri(e.stateNode.nextSibling):null;return!0}function dr(){ms=Mo=null,bn=!1}function sf(){var e=Ra;return e!==null&&(ai===null?ai=e:ai.push.apply(ai,e),Ra=null),e}function Ml(e){Ra===null?Ra=[e]:Ra.push(e)}var of=$(null),fr=null,pa=null;function La(e,s,o){G(of,s._currentValue),s._currentValue=o}function _a(e){e._currentValue=of.current,fe(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var Z=0;Z<s.length;Z++)if(A.context===s[Z]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ir(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;dt(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===We.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ec):e=[ec])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Eo(e){return r_(fr,e)}function Gc(e,s){return fr===null&&hr(e),r_(e,s)}function r_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},pa===null){if(e===null)throw Error(a(308));pa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else pa=pa.next=s;return o}var g2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},y2=t.unstable_scheduleCallback,x2=t.unstable_NormalPriority,Qs={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new g2,data:new Map,refCount:0}}function El(e){e.refCount--,e.refCount===0&&y2(x2,function(){e.controller.abort()})}var Tl=null,cf=0,Pr=0,Hr=null;function b2(e,s){if(Tl===null){var o=Tl=[];cf=0,Pr=fh(),Hr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(l_,l_),s}function l_(){if(--cf===0&&Tl!==null){Hr!==null&&(Hr.status="fulfilled");var e=Tl;Tl=null,Pr=0,Hr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function v2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var c_=I.S;I.S=function(e,s){Fg=it(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&b2(e,s),c_!==null&&c_(e,s)};var mr=$(null);function uf(){var e=mr.current;return e!==null?e:is.pooledCache}function qc(e,s){s===null?G(mr,mr.current):G(mr,s.pool)}function u_(){var e=uf();return e===null?null:{parent:Qs._currentValue,pool:e}}var Ur=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function d_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function f_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Ds,Ds),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e;default:if(typeof s.status=="string")s.then(Ds,Ds);else{if(e=is,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,m_(e),e}throw _r=s,Ur}}function pr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(_r=o,Ur):o}}var _r=null;function h_(){if(_r===null)throw Error(a(459));var e=_r;return _r=null,e}function m_(e){if(e===Ur||e===Kc)throw Error(a(483))}var Vr=null,Al=0;function Zc(e){var s=Al;return Al+=1,Vr===null&&(Vr=[]),f_(Vr,e,s)}function Nl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function p_(e){function s(de,ne){if(e){var ye=de.deletions;ye===null?(de.deletions=[ne],de.flags|=16):ye.push(ne)}}function o(de,ne){if(!e)return null;for(;ne!==null;)s(de,ne),ne=ne.sibling;return null}function r(de){for(var ne=new Map;de!==null;)de.key!==null?ne.set(de.key,de):ne.set(de.index,de),de=de.sibling;return ne}function f(de,ne){return de=ha(de,ne),de.index=0,de.sibling=null,de}function m(de,ne,ye){return de.index=ye,e?(ye=de.alternate,ye!==null?(ye=ye.index,ye<ne?(de.flags|=67108866,ne):ye):(de.flags|=67108866,ne)):(de.flags|=1048576,ne)}function v(de){return e&&de.alternate===null&&(de.flags|=67108866),de}function A(de,ne,ye,ze){return ne===null||ne.tag!==6?(ne=Zd(ye,de.mode,ze),ne.return=de,ne):(ne=f(ne,ye),ne.return=de,ne)}function Z(de,ne,ye,ze){var It=ye.type;return It===M?De(de,ne,ye.props.children,ze,ye.key):ne!==null&&(ne.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===V&&pr(It)===ne.type)?(ne=f(ne,ye.props),Nl(ne,ye),ne.return=de,ne):(ne=Wc(ye.type,ye.key,ye.props,null,de.mode,ze),Nl(ne,ye),ne.return=de,ne)}function xe(de,ne,ye,ze){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ye.containerInfo||ne.stateNode.implementation!==ye.implementation?(ne=Jd(ye,de.mode,ze),ne.return=de,ne):(ne=f(ne,ye.children||[]),ne.return=de,ne)}function De(de,ne,ye,ze,It){return ne===null||ne.tag!==7?(ne=ur(ye,de.mode,ze,It),ne.return=de,ne):(ne=f(ne,ye),ne.return=de,ne)}function $e(de,ne,ye){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ne=Zd(""+ne,de.mode,ye),ne.return=de,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:return ye=Wc(ne.type,ne.key,ne.props,null,de.mode,ye),Nl(ye,ne),ye.return=de,ye;case C:return ne=Jd(ne,de.mode,ye),ne.return=de,ne;case V:return ne=pr(ne),$e(de,ne,ye)}if(he(ne)||Ne(ne))return ne=ur(ne,de.mode,ye,null),ne.return=de,ne;if(typeof ne.then=="function")return $e(de,Zc(ne),ye);if(ne.$$typeof===L)return $e(de,Gc(de,ne),ye);Jc(de,ne)}return null}function be(de,ne,ye,ze){var It=ne!==null?ne.key:null;if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return It!==null?null:A(de,ne,""+ye,ze);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case S:return ye.key===It?Z(de,ne,ye,ze):null;case C:return ye.key===It?xe(de,ne,ye,ze):null;case V:return ye=pr(ye),be(de,ne,ye,ze)}if(he(ye)||Ne(ye))return It!==null?null:De(de,ne,ye,ze,null);if(typeof ye.then=="function")return be(de,ne,Zc(ye),ze);if(ye.$$typeof===L)return be(de,ne,Gc(de,ye),ze);Jc(de,ye)}return null}function we(de,ne,ye,ze,It){if(typeof ze=="string"&&ze!==""||typeof ze=="number"||typeof ze=="bigint")return de=de.get(ye)||null,A(ne,de,""+ze,It);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case S:return de=de.get(ze.key===null?ye:ze.key)||null,Z(ne,de,ze,It);case C:return de=de.get(ze.key===null?ye:ze.key)||null,xe(ne,de,ze,It);case V:return ze=pr(ze),we(de,ne,ye,ze,It)}if(he(ze)||Ne(ze))return de=de.get(ye)||null,De(ne,de,ze,It,null);if(typeof ze.then=="function")return we(de,ne,ye,Zc(ze),It);if(ze.$$typeof===L)return we(de,ne,ye,Gc(ne,ze),It);Jc(ne,ze)}return null}function Ct(de,ne,ye,ze){for(var It=null,An=null,Et=ne,sn=ne=0,_n=null;Et!==null&&sn<ye.length;sn++){Et.index>sn?(_n=Et,Et=null):_n=Et.sibling;var Nn=be(de,Et,ye[sn],ze);if(Nn===null){Et===null&&(Et=_n);break}e&&Et&&Nn.alternate===null&&s(de,Et),ne=m(Nn,ne,sn),An===null?It=Nn:An.sibling=Nn,An=Nn,Et=_n}if(sn===ye.length)return o(de,Et),bn&&ma(de,sn),It;if(Et===null){for(;sn<ye.length;sn++)Et=$e(de,ye[sn],ze),Et!==null&&(ne=m(Et,ne,sn),An===null?It=Et:An.sibling=Et,An=Et);return bn&&ma(de,sn),It}for(Et=r(Et);sn<ye.length;sn++)_n=we(Et,de,sn,ye[sn],ze),_n!==null&&(e&&_n.alternate!==null&&Et.delete(_n.key===null?sn:_n.key),ne=m(_n,ne,sn),An===null?It=_n:An.sibling=_n,An=_n);return e&&Et.forEach(function(Ja){return s(de,Ja)}),bn&&ma(de,sn),It}function Wt(de,ne,ye,ze){if(ye==null)throw Error(a(151));for(var It=null,An=null,Et=ne,sn=ne=0,_n=null,Nn=ye.next();Et!==null&&!Nn.done;sn++,Nn=ye.next()){Et.index>sn?(_n=Et,Et=null):_n=Et.sibling;var Ja=be(de,Et,Nn.value,ze);if(Ja===null){Et===null&&(Et=_n);break}e&&Et&&Ja.alternate===null&&s(de,Et),ne=m(Ja,ne,sn),An===null?It=Ja:An.sibling=Ja,An=Ja,Et=_n}if(Nn.done)return o(de,Et),bn&&ma(de,sn),It;if(Et===null){for(;!Nn.done;sn++,Nn=ye.next())Nn=$e(de,Nn.value,ze),Nn!==null&&(ne=m(Nn,ne,sn),An===null?It=Nn:An.sibling=Nn,An=Nn);return bn&&ma(de,sn),It}for(Et=r(Et);!Nn.done;sn++,Nn=ye.next())Nn=we(Et,de,sn,Nn.value,ze),Nn!==null&&(e&&Nn.alternate!==null&&Et.delete(Nn.key===null?sn:Nn.key),ne=m(Nn,ne,sn),An===null?It=Nn:An.sibling=Nn,An=Nn);return e&&Et.forEach(function(Dv){return s(de,Dv)}),bn&&ma(de,sn),It}function Jn(de,ne,ye,ze){if(typeof ye=="object"&&ye!==null&&ye.type===M&&ye.key===null&&(ye=ye.props.children),typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case S:e:{for(var It=ye.key;ne!==null;){if(ne.key===It){if(It=ye.type,It===M){if(ne.tag===7){o(de,ne.sibling),ze=f(ne,ye.props.children),ze.return=de,de=ze;break e}}else if(ne.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===V&&pr(It)===ne.type){o(de,ne.sibling),ze=f(ne,ye.props),Nl(ze,ye),ze.return=de,de=ze;break e}o(de,ne);break}else s(de,ne);ne=ne.sibling}ye.type===M?(ze=ur(ye.props.children,de.mode,ze,ye.key),ze.return=de,de=ze):(ze=Wc(ye.type,ye.key,ye.props,null,de.mode,ze),Nl(ze,ye),ze.return=de,de=ze)}return v(de);case C:e:{for(It=ye.key;ne!==null;){if(ne.key===It)if(ne.tag===4&&ne.stateNode.containerInfo===ye.containerInfo&&ne.stateNode.implementation===ye.implementation){o(de,ne.sibling),ze=f(ne,ye.children||[]),ze.return=de,de=ze;break e}else{o(de,ne);break}else s(de,ne);ne=ne.sibling}ze=Jd(ye,de.mode,ze),ze.return=de,de=ze}return v(de);case V:return ye=pr(ye),Jn(de,ne,ye,ze)}if(he(ye))return Ct(de,ne,ye,ze);if(Ne(ye)){if(It=Ne(ye),typeof It!="function")throw Error(a(150));return ye=It.call(ye),Wt(de,ne,ye,ze)}if(typeof ye.then=="function")return Jn(de,ne,Zc(ye),ze);if(ye.$$typeof===L)return Jn(de,ne,Gc(de,ye),ze);Jc(de,ye)}return typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint"?(ye=""+ye,ne!==null&&ne.tag===6?(o(de,ne.sibling),ze=f(ne,ye),ze.return=de,de=ze):(o(de,ne),ze=Zd(ye,de.mode,ze),ze.return=de,de=ze),v(de)):o(de,ne)}return function(de,ne,ye,ze){try{Al=0;var It=Jn(de,ne,ye,ze);return Vr=null,It}catch(Et){if(Et===Ur||Et===Kc)throw Et;var An=mi(29,Et,null,de.mode);return An.lanes=ze,An.return=de,An}finally{}}}var gr=p_(!0),__=p_(!1),Oa=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(On&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Jp(e,null,o),s}return Vc(e,r,s,o),Yc(e)}function Dl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,ln(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Rl(){if(pf){var e=Hr;if(e!==null)throw e}}function Bl(e,s,o,r){pf=!1;var f=e.updateQueue;Oa=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var Z=A,xe=Z.next;Z.next=null,v===null?m=xe:v.next=xe,v=Z;var De=e.alternate;De!==null&&(De=De.updateQueue,A=De.lastBaseUpdate,A!==v&&(A===null?De.firstBaseUpdate=xe:A.next=xe,De.lastBaseUpdate=Z))}if(m!==null){var $e=f.baseState;v=0,De=xe=Z=null,A=m;do{var be=A.lane&-536870913,we=be!==A.lane;if(we?(pn&be)===be:(r&be)===be){be!==0&&be===Pr&&(pf=!0),De!==null&&(De=De.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ct=e,Wt=A;be=s;var Jn=o;switch(Wt.tag){case 1:if(Ct=Wt.payload,typeof Ct=="function"){$e=Ct.call(Jn,$e,be);break e}$e=Ct;break e;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Wt.payload,be=typeof Ct=="function"?Ct.call(Jn,$e,be):Ct,be==null)break e;$e=x({},$e,be);break e;case 2:Oa=!0}}be=A.callback,be!==null&&(e.flags|=64,we&&(e.flags|=8192),we=f.callbacks,we===null?f.callbacks=[be]:we.push(be))}else we={lane:be,tag:A.tag,payload:A.payload,callback:A.callback,next:null},De===null?(xe=De=we,Z=$e):De=De.next=we,v|=be;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;we=A,A=we.next,we.next=null,f.lastBaseUpdate=we,f.shared.pending=null}}while(!0);De===null&&(Z=$e),f.baseState=Z,f.firstBaseUpdate=xe,f.lastBaseUpdate=De,m===null&&(f.shared.lanes=0),Va|=v,e.lanes=v,e.memoizedState=$e}}function g_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function y_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)g_(o[e],s)}var Yr=$(null),eu=$(0);function x_(e,s){e=ka,G(eu,e),G(Yr,s),ka=e|s.baseLanes}function _f(){G(eu,ka),G(Yr,Yr.current)}function gf(){ka=eu.current,fe(Yr),fe(eu)}var pi=$(null),Di=null;function Ia(e){var s=e.alternate;G(Os,Os.current&1),G(pi,e),Di===null&&(s===null||Yr.current!==null||s.memoizedState!==null)&&(Di=e)}function yf(e){G(Os,Os.current),G(pi,e),Di===null&&(Di=e)}function b_(e){e.tag===22?(G(Os,Os.current),G(pi,e),Di===null&&(Di=e)):Pa()}function Pa(){G(Os,Os.current),G(pi,pi.current)}function _i(e){fe(pi),Di===e&&(Di=null),fe(Os)}var Os=$(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ga=0,nn=null,Qn=null,Zs=null,nu=!1,Wr=!1,yr=!1,su=0,Ll=0,Fr=null,w2=0;function Ms(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!dt(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return ga=m,nn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,I.H=e===null||e.memoizedState===null?sg:Lf,yr=!1,m=o(r,f),yr=!1,Wr&&(m=w_(s,o,r,f)),v_(e),m}function v_(e){I.H=$l;var s=Qn!==null&&Qn.next!==null;if(ga=0,Zs=Qn=nn=null,nu=!1,Ll=0,Fr=null,s)throw Error(a(300));e===null||Js||(e=e.dependencies,e!==null&&Xc(e)&&(Js=!0))}function w_(e,s,o,r){nn=e;var f=0;do{if(Wr&&(Fr=null),Ll=0,Wr=!1,25<=f)throw Error(a(301));if(f+=1,Zs=Qn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=og,m=s(o,r)}while(Wr);return m}function S2(){var e=I.H,s=e.useState()[0];return s=typeof s.then=="function"?Ol(s):s,e=e.useState()[0],(Qn!==null?Qn.memoizedState:null)!==e&&(nn.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}ga=0,Zs=Qn=nn=null,Wr=!1,Ll=su=0,Fr=null}function Xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zs===null?nn.memoizedState=Zs=e:Zs=Zs.next=e,Zs}function zs(){if(Qn===null){var e=nn.alternate;e=e!==null?e.memoizedState:null}else e=Qn.next;var s=Zs===null?nn.memoizedState:Zs.next;if(s!==null)Zs=s,Qn=e;else{if(e===null)throw nn.alternate===null?Error(a(467)):Error(a(310));Qn=e,e={memoizedState:Qn.memoizedState,baseState:Qn.baseState,baseQueue:Qn.baseQueue,queue:Qn.queue,next:null},Zs===null?nn.memoizedState=Zs=e:Zs=Zs.next=e}return Zs}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var s=Ll;return Ll+=1,Fr===null&&(Fr=[]),e=f_(Fr,e,s),s=nn,(Zs===null?s.memoizedState:Zs.next)===null&&(s=s.alternate,I.H=s===null||s.memoizedState===null?sg:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===L)return Eo(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=nn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=nn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),nn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=le;return s.index++,o}function ya(e,s){return typeof s=="function"?s(e):s}function au(e){var s=zs();return kf(s,Qn,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,Z=null,xe=s,De=!1;do{var $e=xe.lane&-536870913;if($e!==xe.lane?(pn&$e)===$e:(ga&$e)===$e){var be=xe.revertLane;if(be===0)Z!==null&&(Z=Z.next={lane:0,revertLane:0,gesture:null,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null}),$e===Pr&&(De=!0);else if((ga&be)===be){xe=xe.next,be===Pr&&(De=!0);continue}else $e={lane:0,revertLane:xe.revertLane,gesture:null,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null},Z===null?(A=Z=$e,v=m):Z=Z.next=$e,nn.lanes|=be,Va|=be;$e=xe.action,yr&&o(m,$e),m=xe.hasEagerState?xe.eagerState:o(m,$e)}else be={lane:$e,revertLane:xe.revertLane,gesture:xe.gesture,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null},Z===null?(A=Z=be,v=m):Z=Z.next=be,nn.lanes|=$e,Va|=$e;xe=xe.next}while(xe!==null&&xe!==s);if(Z===null?v=m:Z.next=A,!dt(m,e.memoizedState)&&(Js=!0,De&&(o=Hr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=Z,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=zs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);dt(m,s.memoizedState)||(Js=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function S_(e,s,o){var r=nn,f=zs(),m=bn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!dt((Qn||f).memoizedState,o);if(v&&(f.memoizedState=o,Js=!0),f=f.queue,Tf(j_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||Zs!==null&&Zs.memoizedState.tag&1){if(r.flags|=2048,Xr(9,{destroy:void 0},k_.bind(null,r,f,o,s),null),is===null)throw Error(a(349));m||(ga&127)!==0||C_(r,s,o)}return o}function C_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=nn.updateQueue,s===null?(s=ou(),nn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function k_(e,s,o,r){s.value=o,s.getSnapshot=r,M_(s)&&E_(e)}function j_(e,s,o){return o(function(){M_(s)&&E_(e)})}function M_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!dt(e,o)}catch{return!0}}function E_(e){var s=cr(e,2);s!==null&&ri(s,e,2)}function Mf(e){var s=Xo();if(typeof e=="function"){var o=e;if(e=o(),yr){Ee(!0);try{o()}finally{Ee(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},s}function T_(e,s,o,r){return e.baseState=o,kf(e,Qn,typeof r=="function"?r:ya)}function C2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};I.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,A_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function A_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=I.T,v={};I.T=v;try{var A=o(f,r),Z=I.S;Z!==null&&Z(v,A),N_(e,s,A)}catch(xe){Ef(e,s,xe)}finally{m!==null&&v.types!==null&&(m.types=v.types),I.T=m}}else try{m=o(f,r),N_(e,s,m)}catch(xe){Ef(e,s,xe)}}function N_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){D_(e,s,r)},function(r){return Ef(e,s,r)}):D_(e,s,o)}function D_(e,s,o){s.status="fulfilled",s.value=o,R_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,A_(e,o)))}function Ef(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,R_(s),s=s.next;while(s!==r)}e.action=null}function R_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function B_(e,s){return s}function L_(e,s){if(bn){var o=is.formState;if(o!==null){e:{var r=nn;if(bn){if(ms){t:{for(var f=ms,m=Ni;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ms=Ri(f.nextSibling),r=f.data==="F!";break e}}Ba(r)}r=!1}r&&(s=o[0])}}return o=Xo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B_,lastRenderedState:s},o.queue=r,o=eg.bind(null,nn,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,nn,!1,r.queue),r=Xo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=C2.bind(null,nn,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function O_(e){var s=zs();return z_(s,Qn,e)}function z_(e,s,o){if(s=kf(e,s,B_)[0],e=au(ya)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Ol(s)}catch(v){throw v===Ur?Kc:v}else r=s;s=zs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(nn.flags|=2048,Xr(9,{destroy:void 0},k2.bind(null,f,o),null)),[r,m,e]}function k2(e,s){e.action=s}function $_(e){var s=zs(),o=Qn;if(o!==null)return z_(s,o,e);zs(),s=s.memoizedState,o=zs();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Xr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=nn.updateQueue,s===null&&(s=ou(),nn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function I_(){return zs().memoizedState}function ru(e,s,o,r){var f=Xo();nn.flags|=e,f.memoizedState=Xr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=zs();r=r===void 0?null:r;var m=f.memoizedState.inst;Qn!==null&&r!==null&&xf(r,Qn.memoizedState.deps)?f.memoizedState=Xr(s,m,o,r):(nn.flags|=e,f.memoizedState=Xr(1|s,m,o,r))}function P_(e,s){ru(8390656,8,e,s)}function Tf(e,s){lu(2048,8,e,s)}function j2(e){nn.flags|=4;var s=nn.updateQueue;if(s===null)s=ou(),nn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function H_(e){var s=zs().memoizedState;return j2({ref:s,nextImpl:e}),function(){if((On&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function U_(e,s){return lu(4,2,e,s)}function V_(e,s){return lu(4,4,e,s)}function Y_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function W_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,Y_.bind(null,s,e),o)}function Af(){}function F_(e,s){var o=zs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function X_(e,s){var o=zs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),yr){Ee(!0);try{e()}finally{Ee(!1)}}return o.memoizedState=[r,s],r}function Nf(e,s,o){return o===void 0||(ga&1073741824)!==0&&(pn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Gg(),nn.lanes|=e,Va|=e,o)}function G_(e,s,o,r){return dt(o,s)?o:Yr.current!==null?(e=Nf(e,o,r),dt(e,s)||(Js=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(pn&261930)===0?(Js=!0,e.memoizedState=o):(e=Gg(),nn.lanes|=e,Va|=e,s)}function q_(e,s,o,r,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var v=I.T,A={};I.T=A,Bf(e,!1,s,o);try{var Z=f(),xe=I.S;if(xe!==null&&xe(A,Z),Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var De=v2(Z,r);zl(e,s,De,xi(e))}else zl(e,s,r,xi(e))}catch($e){zl(e,s,{then:function(){},status:"rejected",reason:$e},xi())}finally{ie.p=m,v!==null&&A.types!==null&&(v.types=A.types),I.T=v}}function M2(){}function Df(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=K_(e).queue;q_(e,f,s,F,o===null?M2:function(){return Q_(e),o(r)})}function K_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:F},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function Q_(e){var s=K_(e);s.next===null&&(s=e.alternate.memoizedState),zl(e,s.next.queue,{},xi())}function Rf(){return Eo(ec)}function Z_(){return zs().memoizedState}function J_(){return zs().memoizedState}function E2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=xi();e=za(o);var r=$a(s,e,o);r!==null&&(ri(r,s,o),Dl(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function T2(e,s,o){var r=xi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?tg(s,o):(o=Kd(e,s,o,r),o!==null&&(ri(o,e,r),ng(o,s,r)))}function eg(e,s,o){var r=xi();zl(e,s,o,r)}function zl(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))tg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,dt(A,v))return Vc(e,s,f,0),is===null&&Uc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return ri(o,e,r),ng(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&ri(s,e,2)}function cu(e){var s=e.alternate;return e===nn||s!==null&&s===nn}function tg(e,s){Wr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function ng(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,ln(e,o)}}var $l={readContext:Eo,use:iu,useCallback:Ms,useContext:Ms,useEffect:Ms,useImperativeHandle:Ms,useLayoutEffect:Ms,useInsertionEffect:Ms,useMemo:Ms,useReducer:Ms,useRef:Ms,useState:Ms,useDebugValue:Ms,useDeferredValue:Ms,useTransition:Ms,useSyncExternalStore:Ms,useId:Ms,useHostTransitionStatus:Ms,useFormState:Ms,useActionState:Ms,useOptimistic:Ms,useMemoCache:Ms,useCacheRefresh:Ms};$l.useEffectEvent=Ms;var sg={readContext:Eo,use:iu,useCallback:function(e,s){return Xo().memoizedState=[e,s===void 0?null:s],e},useContext:Eo,useEffect:P_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,Y_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=Xo();s=s===void 0?null:s;var r=e();if(yr){Ee(!0);try{e()}finally{Ee(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Xo();if(o!==void 0){var f=o(s);if(yr){Ee(!0);try{o(s)}finally{Ee(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=T2.bind(null,nn,e),[r.memoizedState,e]},useRef:function(e){var s=Xo();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=eg.bind(null,nn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=Xo();return Nf(o,e,s)},useTransition:function(){var e=Mf(!1);return e=q_.bind(null,nn,e.queue,!0,!1),Xo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=nn,f=Xo();if(bn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),is===null)throw Error(a(349));(pn&127)!==0||C_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,P_(j_.bind(null,r,m,e),[e]),r.flags|=2048,Xr(9,{destroy:void 0},k_.bind(null,r,m,o,s),null),o},useId:function(){var e=Xo(),s=is.identifierPrefix;if(bn){var o=oa,r=sa;o=(r&~(1<<32-_t(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=w2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:L_,useActionState:L_,useOptimistic:function(e){var s=Xo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,nn,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return Xo().memoizedState=E2.bind(null,nn)},useEffectEvent:function(e){var s=Xo(),o={impl:e};return s.memoizedState=o,function(){if((On&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:Eo,use:iu,useCallback:F_,useContext:Eo,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:U_,useLayoutEffect:V_,useMemo:X_,useReducer:au,useRef:I_,useState:function(){return au(ya)},useDebugValue:Af,useDeferredValue:function(e,s){var o=zs();return G_(o,Qn.memoizedState,e,s)},useTransition:function(){var e=au(ya)[0],s=zs().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Rf,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=zs();return T_(o,Qn,e,s)},useMemoCache:Cf,useCacheRefresh:J_};Lf.useEffectEvent=H_;var og={readContext:Eo,use:iu,useCallback:F_,useContext:Eo,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:U_,useLayoutEffect:V_,useMemo:X_,useReducer:jf,useRef:I_,useState:function(){return jf(ya)},useDebugValue:Af,useDeferredValue:function(e,s){var o=zs();return Qn===null?Nf(o,e,s):G_(o,Qn.memoizedState,e,s)},useTransition:function(){var e=jf(ya)[0],s=zs().memoizedState;return[typeof e=="boolean"?e:Ol(e),s]},useSyncExternalStore:S_,useId:Z_,useHostTransitionStatus:Rf,useFormState:$_,useActionState:$_,useOptimistic:function(e,s){var o=zs();return Qn!==null?T_(o,Qn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:J_};og.useEffectEvent=H_;function Of(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var zf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=xi(),f=za(r);f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(ri(s,e,r),Dl(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=xi(),f=za(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=$a(e,f,r),s!==null&&(ri(s,e,r),Dl(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=xi(),r=za(o);r.tag=2,s!=null&&(r.callback=s),s=$a(e,r,o),s!==null&&(ri(s,e,o),Dl(s,e,o))}};function ig(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!ft(o,r)||!ft(f,m):!0}function ag(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&zf.enqueueReplaceState(s,s.state,null)}function xr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function rg(e){Hc(e)}function lg(e){console.error(e)}function cg(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function ug(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=za(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function dg(e){return e=za(e),e.tag=3,e}function fg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){ug(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ug(s,o,r),typeof f!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function A2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&Ir(s,o,f,!0),o=pi.current,o!==null){switch(o.tag){case 31:case 13:return Di===null?wu():o.alternate===null&&Es===0&&(Es=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),wu(),!1}if(bn)return s=pi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),Ml(Ei(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),Ml(Ei(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ei(r,o),f=$f(e.stateNode,r,f),mf(e,f),Es!==4&&(Es=2)),!1;var m=Error(a(520),{cause:r});if(m=Ei(m,o),Fl===null?Fl=[m]:Fl.push(m),Es!==4&&(Es=2),s===null)return!0;r=Ei(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ya===null||!Ya.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=dg(f),fg(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),Js=!1;function To(e,s,o,r){s.child=e===null?__(s,null,o,r):gr(s,e.child,o,r)}function hg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return hr(s),r=bf(e,s,o,v,m,f),A=vf(),e!==null&&!Js?(wf(e,s,f),xa(e,s,f)):(bn&&A&&ef(s),s.flags|=1,To(e,s,r,f),s.child)}function mg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,pg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:ft,o(v,r)&&e.ref===s.ref)return xa(e,s,f)}return s.flags|=1,e=ha(m,r),e.ref=s.ref,e.return=s,s.child=e}function pg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(ft(m,r)&&e.ref===s.ref)if(Js=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(Js=!0);else return s.lanes=e.lanes,xa(e,s,f)}return Pf(e,s,o,r,f)}function _g(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return gg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?x_(s,m):_f(),b_(s);else return r=s.lanes=536870912,gg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),x_(s,m),Pa(),s.memoizedState=null):(e!==null&&qc(s,null),_f(),Pa());return To(e,s,f,o),s.child}function Il(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function gg(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:Qs._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),_f(),b_(s),e!==null&&Ir(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function yg(e,s,o){return gr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,_i(s),s.memoizedState=null,e}function N2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(bn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,Il(null,e);if(yf(s),(e=ms)?(e=A0(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,Mo=s,ms=null)):e=null,e===null)throw Ba(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=yg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Js||Ir(e,s,o,!1),f=(o&e.childLanes)!==0,Js||f){if(r=is,r!==null&&(v=on(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,cr(e,v),ri(r,e,v),If;wu(),s=yg(e,s,o)}else e=m.treeContext,ms=Ri(v.nextSibling),Mo=s,bn=!0,Ra=null,Ni=!1,e!==null&&o_(s,e),s=du(s,r),s.flags|=4096;return s}return e=ha(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return hr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!Js?(wf(e,s,f),xa(e,s,f)):(bn&&r&&ef(s),s.flags|=1,To(e,s,o,f),s.child)}function xg(e,s,o,r,f,m){return hr(s),s.updateQueue=null,o=w_(s,r,o,f),v_(e),r=vf(),e!==null&&!Js?(wf(e,s,m),xa(e,s,m)):(bn&&r&&ef(s),s.flags|=1,To(e,s,o,m),s.child)}function bg(e,s,o,r,f){if(hr(s),s.stateNode===null){var m=Lr,v=o.contextType;typeof v=="object"&&v!==null&&(m=Eo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Eo(v):Lr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Of(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&zf.enqueueReplaceState(m,m.state,null),Bl(s,r,m,f),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,Z=xr(o,A);m.props=Z;var xe=m.context,De=o.contextType;v=Lr,typeof De=="object"&&De!==null&&(v=Eo(De));var $e=o.getDerivedStateFromProps;De=typeof $e=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,De||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||xe!==v)&&ag(s,m,r,v),Oa=!1;var be=s.memoizedState;m.state=be,Bl(s,r,m,f),Rl(),xe=s.memoizedState,A||be!==xe||Oa?(typeof $e=="function"&&(Of(s,o,$e,r),xe=s.memoizedState),(Z=Oa||ig(s,o,Z,r,be,xe,v))?(De||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=xe),m.props=r,m.state=xe,m.context=v,r=Z):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,De=xr(o,v),m.props=De,$e=s.pendingProps,be=m.context,xe=o.contextType,Z=Lr,typeof xe=="object"&&xe!==null&&(Z=Eo(xe)),A=o.getDerivedStateFromProps,(xe=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==$e||be!==Z)&&ag(s,m,r,Z),Oa=!1,be=s.memoizedState,m.state=be,Bl(s,r,m,f),Rl();var we=s.memoizedState;v!==$e||be!==we||Oa||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&(Of(s,o,A,r),we=s.memoizedState),(De=Oa||ig(s,o,De,r,be,we,Z)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(xe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,we,Z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,we,Z)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&be===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&be===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=we),m.props=r,m.state=we,m.context=Z,r=De):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&be===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&be===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=gr(s,e.child,null,f),s.child=gr(s,null,o,f)):To(e,s,o,f),s.memoizedState=m.state,e=s.child):e=xa(e,s,f),e}function vg(e,s,o,r){return dr(),s.flags|=256,To(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:u_()}}function Vf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=yi),e}function wg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Os.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(bn){if(f?Ia(s):Pa(),(e=ms)?(e=A0(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Da!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=t_(e),o.return=s,s.child=o,Mo=s,ms=null)):e=null,e===null)throw Ba(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Pa(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=ur(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,Il(null,r)):(Ia(s),Yf(s,A))}var Z=e.memoizedState;if(Z!==null&&(A=Z.dehydrated,A!==null)){if(m)s.flags&256?(Ia(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(Pa(),s.child=e.child,s.flags|=128,s=null):(Pa(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=ur(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,gr(s,e.child,null,o),r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,s=Il(null,r));else if(Ia(s),kh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var xe=v.dgst;v=xe,r=Error(a(419)),r.stack="",r.digest=v,Ml({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(Js||Ir(e,s,o,!1),v=(o&e.childLanes)!==0,Js||v){if(v=is,v!==null&&(r=on(v,o),r!==0&&r!==Z.retryLane))throw Z.retryLane=r,cr(e,r),ri(v,e,r),If;Ch(A)||wu(),s=Wf(e,s,o)}else Ch(A)?(s.flags|=192,s.child=e.child,s=null):(e=Z.treeContext,ms=Ri(A.nextSibling),Mo=s,bn=!0,Ra=null,Ni=!1,e!==null&&o_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(Pa(),A=r.fallback,f=s.mode,Z=e.child,xe=Z.sibling,r=ha(Z,{mode:"hidden",children:r.children}),r.subtreeFlags=Z.subtreeFlags&65011712,xe!==null?A=ha(xe,A):(A=ur(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,Il(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Uf(o):(f=A.cachePool,f!==null?(Z=Qs._currentValue,f=f.parent!==Z?{parent:Z,pool:Z}:f):f=u_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Vf(e,v,o),s.memoizedState=Hf,Il(e.child,r)):(Ia(s),o=e.child,e=o.sibling,o=ha(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=mi(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return gr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Sg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Cg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Os.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,G(Os,v),To(e,s,r,o),r=bn?jl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,o,s);else if(e.tag===19)Sg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function xa(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Va|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Ir(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=ha(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=ha(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function D2(e,s,o){switch(s.tag){case 3:Ye(s,s.stateNode.containerInfo),La(s,Qs,e.memoizedState.cache),dr();break;case 27:case 5:Bt(s);break;case 4:Ye(s,s.stateNode.containerInfo);break;case 10:La(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(s),s.flags|=128,null):(o&s.child.childLanes)!==0?wg(e,s,o):(Ia(s),e=xa(e,s,o),e!==null?e.sibling:null);Ia(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(Ir(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Cg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),G(Os,Os.current),r)break;return null;case 22:return s.lanes=0,_g(e,s,o,s.pendingProps);case 24:La(s,Qs,e.memoizedState.cache)}return xa(e,s,o)}function kg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Js=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return Js=!1,D2(e,s,o);Js=(e.flags&131072)!==0}else Js=!1,bn&&(s.flags&1048576)!==0&&s_(s,jl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=pr(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=xr(e,r),s.tag=1,s=bg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===N){s.tag=11,s=hg(null,s,e,r,o);break e}else if(f===Q){s.tag=14,s=mg(null,s,e,r,o);break e}}throw s=te(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=xr(r,s.pendingProps),bg(e,s,r,f,o);case 3:e:{if(Ye(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Bl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,La(s,Qs,r),r!==m.cache&&rf(s,[Qs],o,!0),Rl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=vg(e,s,r,o);break e}else if(r!==f){f=Ei(Error(a(424)),s),Ml(f),s=vg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ms=Ri(e.firstChild),Mo=s,bn=!0,Ra=null,Ni=!0,o=__(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(dr(),r===f){s=xa(e,s,o);break e}To(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=O0(s.type,null,s.pendingProps,null))?s.memoizedState=o:bn||(o=s.type,e=s.pendingProps,r=Tu(Ae.current).createElement(o),r[Xt]=s,r[$n]=e,Ao(r,o,e),Cn(r),s.stateNode=r):s.memoizedState=O0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Bt(s),e===null&&bn&&(r=s.stateNode=R0(s.type,s.pendingProps,Ae.current),Mo=s,Ni=!0,f=ms,Ga(s.type)?(jh=f,ms=Ri(r.firstChild)):ms=f),To(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&bn&&((f=r=ms)&&(r=lv(r,s.type,s.pendingProps,Ni),r!==null?(s.stateNode=r,Mo=s,ms=Ri(r.firstChild),Ni=!1,f=!0):f=!1),f||Ba(s)),Bt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,S2,null,null,o),ec._currentValue=f),fu(e,s),To(e,s,r,o),s.child;case 6:return e===null&&bn&&((e=o=ms)&&(o=cv(o,s.pendingProps,Ni),o!==null?(s.stateNode=o,Mo=s,ms=null,e=!0):e=!1),e||Ba(s)),null;case 13:return wg(e,s,o);case 4:return Ye(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=gr(s,null,r,o):To(e,s,r,o),s.child;case 11:return hg(e,s,s.type,s.pendingProps,o);case 7:return To(e,s,s.pendingProps,o),s.child;case 8:return To(e,s,s.pendingProps.children,o),s.child;case 12:return To(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,La(s,s.type,r.value),To(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,hr(s),f=Eo(f),r=r(f),s.flags|=1,To(e,s,r,o),s.child;case 14:return mg(e,s,s.type,s.pendingProps,o);case 15:return pg(e,s,s.type,s.pendingProps,o);case 19:return Cg(e,s,o);case 31:return N2(e,s,o);case 22:return _g(e,s,o,s.pendingProps);case 24:return hr(s),r=Eo(Qs),e===null?(f=uf(),f===null&&(f=is,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),La(s,Qs,f)):((e.lanes&o)!==0&&(hf(e,s),Bl(s,null,null,o),Rl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),La(s,Qs,r)):(r=m.cache,La(s,Qs,r),r!==f.cache&&rf(s,[Qs],o,!0))),To(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ba(e){e.flags|=4}function Gf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Zg())e.flags|=8192;else throw _r=Qc,df}else e.flags&=-16777217}function jg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(s))if(Zg())e.flags|=8192;else throw _r=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?pt():536870912,e.lanes|=s,Qr|=s)}function Pl(e,s){if(!bn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ps(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function R2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ps(s),null;case 1:return ps(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),_a(Qs),lt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($r(s)?ba(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),ps(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ba(s),m!==null?(ps(s),jg(s,m)):(ps(s),Gf(s,f,null,r,o))):m?m!==e.memoizedState?(ba(s),ps(s),jg(s,m)):(ps(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ba(s),ps(s),Gf(s,f,e,r,o)),null;case 27:if(Kt(s),o=Ae.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ps(s),null}e=_e.current,$r(s)?i_(s):(e=R0(f,r,o),s.stateNode=e,ba(s))}return ps(s),null;case 5:if(Kt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return ps(s),null}if(m=_e.current,$r(s))i_(s);else{var v=Tu(Ae.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[Xt]=s,m[$n]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Ao(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ba(s)}}return ps(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ba(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ae.current,$r(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=Mo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[Xt]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||w0(e.nodeValue,o)),e||Ba(s,!0)}else e=Tu(e).createTextNode(r),e[Xt]=s,s.stateNode=e}return ps(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=$r(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Xt]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ps(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(_i(s),s):(_i(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ps(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=$r(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Xt]=s}else dr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ps(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(_i(s),s):(_i(s),null)}return _i(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),ps(s),null);case 4:return lt(),e===null&&_h(s.stateNode.containerInfo),ps(s),null;case 10:return _a(s.type),ps(s),null;case 19:if(fe(Os),r=s.memoizedState,r===null)return ps(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)Pl(r,!1);else{if(Es!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,Pl(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)e_(o,e),o=o.sibling;return G(Os,Os.current&1|2),bn&&ma(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&it()>xu&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),Pl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!bn)return ps(s),null}else 2*it()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,Pl(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=it(),e.sibling=null,o=Os.current,G(Os,f?o&1|2:o&1),bn&&ma(s,r.treeForkCount),e):(ps(s),null);case 22:case 23:return _i(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(ps(s),s.subtreeFlags&6&&(s.flags|=8192)):ps(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&fe(mr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),_a(Qs),ps(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function B2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return _a(Qs),lt(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Kt(s),null;case 31:if(s.memoizedState!==null){if(_i(s),s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(_i(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));dr()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return fe(Os),null;case 4:return lt(),null;case 10:return _a(s.type),null;case 22:case 23:return _i(s),gf(),e!==null&&fe(mr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return _a(Qs),null;case 25:return null;default:return null}}function Mg(e,s){switch(tf(s),s.tag){case 3:_a(Qs),lt();break;case 26:case 27:case 5:Kt(s);break;case 4:lt();break;case 31:s.memoizedState!==null&&_i(s);break;case 13:_i(s);break;case 19:fe(Os);break;case 10:_a(s.type);break;case 22:case 23:_i(s),gf(),e!==null&&fe(mr);break;case 24:_a(Qs)}}function Hl(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Wn(s,s.return,A)}}function Ha(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var Z=o,xe=A;try{xe()}catch(De){Wn(f,Z,De)}}}r=r.next}while(r!==m)}}catch(De){Wn(s,s.return,De)}}function Eg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{y_(s,o)}catch(r){Wn(e,e.return,r)}}}function Tg(e,s,o){o.props=xr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Wn(e,s,r)}}function Ul(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Wn(e,s,f)}}function ia(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Wn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Wn(e,s,f)}else o.current=null}function Ag(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Wn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;nv(r,e.type,o,s),r[$n]=s}catch(f){Wn(e,e.return,f)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Ds));else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ga(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Dg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Ao(s,r,o),s[Xt]=e,s[$n]=o}catch(m){Wn(e,e.return,m)}}var va=!1,eo=!1,Zf=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,xo=null;function L2(e,s){if(e=e.containerInfo,xh=Ou,e=Dt(e),qt(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,Z=-1,xe=0,De=0,$e=e,be=null;t:for(;;){for(var we;$e!==o||f!==0&&$e.nodeType!==3||(A=v+f),$e!==m||r!==0&&$e.nodeType!==3||(Z=v+r),$e.nodeType===3&&(v+=$e.nodeValue.length),(we=$e.firstChild)!==null;)be=$e,$e=we;for(;;){if($e===e)break t;if(be===o&&++xe===f&&(A=v),be===m&&++De===r&&(Z=v),(we=$e.nextSibling)!==null)break;$e=be,be=$e.parentNode}$e=we}o=A===-1||Z===-1?null:{start:A,end:Z}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},Ou=!1,xo=s;xo!==null;)if(s=xo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,xo=e;else for(;xo!==null;){switch(s=xo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Ct=xr(o.type,f);e=r.getSnapshotBeforeUpdate(Ct,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Wt){Wn(o,o.return,Wt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,xo=e;break}xo=s.return}}function Bg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Sa(e,o),r&4&&Hl(5,o);break;case 1:if(Sa(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Wn(o,o.return,v)}else{var f=xr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Wn(o,o.return,v)}}r&64&&Eg(o),r&512&&Ul(o,o.return);break;case 3:if(Sa(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{y_(e,s)}catch(v){Wn(o,o.return,v)}}break;case 27:s===null&&r&4&&Dg(o);case 26:case 5:Sa(e,o),s===null&&r&4&&Ag(o),r&512&&Ul(o,o.return);break;case 12:Sa(e,o);break;case 31:Sa(e,o),r&4&&zg(e,o);break;case 13:Sa(e,o),r&4&&$g(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=Y2.bind(null,o),uv(e,o))));break;case 22:if(r=o.memoizedState!==null||va,!r){s=s!==null&&s.memoizedState!==null||eo,f=va;var m=eo;va=r,(eo=s)&&!m?Ca(e,o,(o.subtreeFlags&8772)!==0):Sa(e,o),va=f,eo=m}break;case 30:break;default:Sa(e,o)}}function Lg(e){var s=e.alternate;s!==null&&(e.alternate=null,Lg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ui(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bs=null,si=!1;function wa(e,s,o){for(o=o.child;o!==null;)Og(e,s,o),o=o.sibling}function Og(e,s,o){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(et,o)}catch{}switch(o.tag){case 26:eo||ia(o,s),wa(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:eo||ia(o,s);var r=bs,f=si;Ga(o.type)&&(bs=o.stateNode,si=!1),wa(e,s,o),Ql(o.stateNode),bs=r,si=f;break;case 5:eo||ia(o,s);case 6:if(r=bs,f=si,bs=null,wa(e,s,o),bs=r,si=f,bs!==null)if(si)try{(bs.nodeType===9?bs.body:bs.nodeName==="HTML"?bs.ownerDocument.body:bs).removeChild(o.stateNode)}catch(m){Wn(o,s,m)}else try{bs.removeChild(o.stateNode)}catch(m){Wn(o,s,m)}break;case 18:bs!==null&&(si?(e=bs,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),il(e)):E0(bs,o.stateNode));break;case 4:r=bs,f=si,bs=o.stateNode.containerInfo,si=!0,wa(e,s,o),bs=r,si=f;break;case 0:case 11:case 14:case 15:Ha(2,o,s),eo||Ha(4,o,s),wa(e,s,o);break;case 1:eo||(ia(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Tg(o,s,r)),wa(e,s,o);break;case 21:wa(e,s,o);break;case 22:eo=(r=eo)||o.memoizedState!==null,wa(e,s,o),eo=r;break;default:wa(e,s,o)}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(o){Wn(s,s.return,o)}}}function $g(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(o){Wn(s,s.return,o)}}function O2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Rg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Rg),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=O2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=W2.bind(null,e,r);r.then(f,f)}})}function oi(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){bs=A.stateNode,si=!1;break e}break;case 5:bs=A.stateNode,si=!1;break e;case 3:case 4:bs=A.stateNode.containerInfo,si=!0;break e}A=A.return}if(bs===null)throw Error(a(160));Og(m,v,f),bs=null,si=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Ig(s,e),s=s.sibling}var Fi=null;function Ig(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oi(s,e),ii(e),r&4&&(Ha(3,e,e.return),Hl(3,e),Ha(5,e,e.return));break;case 1:oi(s,e),ii(e),r&512&&(eo||o===null||ia(o,o.return)),r&64&&va&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Fi;if(oi(s,e),ii(e),r&512&&(eo||o===null||ia(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Cs]||m[Xt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Ao(m,r,o),m[Xt]=e,Cn(m),r=m;break e;case"link":var v=I0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),Ao(m,r,o),f.head.appendChild(m);break;case"meta":if(v=I0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),Ao(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[Xt]=e,Cn(m),r=m}e.stateNode=r}else P0(f,e.type,e.stateNode);else e.stateNode=$0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?P0(f,e.type,e.stateNode):$0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:oi(s,e),ii(e),r&512&&(eo||o===null||ia(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(oi(s,e),ii(e),r&512&&(eo||o===null||ia(o,o.return)),e.flags&32){f=e.stateNode;try{wo(f,"")}catch(Ct){Wn(e,e.return,Ct)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(oi(s,e),ii(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Ct){Wn(e,e.return,Ct)}}break;case 3:if(Du=null,f=Fi,Fi=Au(s.containerInfo),oi(s,e),Fi=f,ii(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{il(s.containerInfo)}catch(Ct){Wn(e,e.return,Ct)}Zf&&(Zf=!1,Pg(e));break;case 4:r=Fi,Fi=Au(e.stateNode.containerInfo),oi(s,e),ii(e),Fi=r;break;case 12:oi(s,e),ii(e);break;case 31:oi(s,e),ii(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:oi(s,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=it()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var Z=o!==null&&o.memoizedState!==null,xe=va,De=eo;if(va=xe||f,eo=De||Z,oi(s,e),eo=De,va=xe,ii(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||Z||va||eo||br(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){Z=o=s;try{if(m=Z.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=Z.stateNode;var $e=Z.memoizedProps.style,be=$e!=null&&$e.hasOwnProperty("display")?$e.display:null;A.style.display=be==null||typeof be=="boolean"?"":(""+be).trim()}}catch(Ct){Wn(Z,Z.return,Ct)}}}else if(s.tag===6){if(o===null){Z=s;try{Z.stateNode.nodeValue=f?"":Z.memoizedProps}catch(Ct){Wn(Z,Z.return,Ct)}}}else if(s.tag===18){if(o===null){Z=s;try{var we=Z.stateNode;f?T0(we,!0):T0(Z.stateNode,!1)}catch(Ct){Wn(Z,Z.return,Ct)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:oi(s,e),ii(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:oi(s,e),ii(e)}}function ii(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Ng(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(wo(v,""),o.flags&=-33);var A=Kf(e);pu(e,A,v);break;case 3:case 4:var Z=o.stateNode.containerInfo,xe=Kf(e);Qf(e,xe,Z);break;default:throw Error(a(161))}}catch(De){Wn(e,e.return,De)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Pg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function Sa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Bg(e,s.alternate,s),s=s.sibling}function br(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ha(4,s,s.return),br(s);break;case 1:ia(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Tg(s,s.return,o),br(s);break;case 27:Ql(s.stateNode);case 26:case 5:ia(s,s.return),br(s);break;case 22:s.memoizedState===null&&br(s);break;case 30:br(s);break;default:br(s)}e=e.sibling}}function Ca(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(f,m,o),Hl(4,m);break;case 1:if(Ca(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(xe){Wn(r,r.return,xe)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var Z=f.shared.hiddenCallbacks;if(Z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Z.length;f++)g_(Z[f],A)}catch(xe){Wn(r,r.return,xe)}}o&&v&64&&Eg(m),Ul(m,m.return);break;case 27:Dg(m);case 26:case 5:Ca(f,m,o),o&&r===null&&v&4&&Ag(m),Ul(m,m.return);break;case 12:Ca(f,m,o);break;case 31:Ca(f,m,o),o&&v&4&&zg(f,m);break;case 13:Ca(f,m,o),o&&v&4&&$g(f,m);break;case 22:m.memoizedState===null&&Ca(f,m,o),Ul(m,m.return);break;case 30:break;default:Ca(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&El(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e))}function Xi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Hg(e,s,o,r),s=s.sibling}function Hg(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Xi(e,s,o,r),f&2048&&Hl(9,s);break;case 1:Xi(e,s,o,r);break;case 3:Xi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&El(e)));break;case 12:if(f&2048){Xi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Z){Wn(s,s.return,Z)}}else Xi(e,s,o,r);break;case 31:Xi(e,s,o,r);break;case 13:Xi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Xi(e,s,o,r):Vl(e,s):m._visibility&2?Xi(e,s,o,r):(m._visibility|=2,Gr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Xi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Xi(e,s,o,r)}}function Gr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,Z=r,xe=v.flags;switch(v.tag){case 0:case 11:case 15:Gr(m,v,A,Z,f),Hl(8,v);break;case 23:break;case 22:var De=v.stateNode;v.memoizedState!==null?De._visibility&2?Gr(m,v,A,Z,f):Vl(m,v):(De._visibility|=2,Gr(m,v,A,Z,f)),f&&xe&2048&&Jf(v.alternate,v);break;case 24:Gr(m,v,A,Z,f),f&&xe&2048&&eh(v.alternate,v);break;default:Gr(m,v,A,Z,f)}s=s.sibling}}function Vl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Vl(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Vl(o,r),f&2048&&eh(r.alternate,r);break;default:Vl(o,r)}s=s.sibling}}var Yl=8192;function qr(e,s,o){if(e.subtreeFlags&Yl)for(e=e.child;e!==null;)Ug(e,s,o),e=e.sibling}function Ug(e,s,o){switch(e.tag){case 26:qr(e,s,o),e.flags&Yl&&e.memoizedState!==null&&wv(o,Fi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,s,o);break;case 3:case 4:var r=Fi;Fi=Au(e.stateNode.containerInfo),qr(e,s,o),Fi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Yl,Yl=16777216,qr(e,s,o),Yl=r):qr(e,s,o));break;default:qr(e,s,o)}}function Vg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Wl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];xo=r,Wg(r,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Wl(e);break;default:Wl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];xo=r,Wg(r,e)}Vg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ha(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Wg(e,s){for(;xo!==null;){var o=xo;switch(o.tag){case 0:case 11:case 15:Ha(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:El(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,xo=r;else e:for(o=e;xo!==null;){r=xo;var f=r.sibling,m=r.return;if(Lg(r),r===o){xo=null;break e}if(f!==null){f.return=m,xo=f;break e}xo=m}}}var z2={getCacheForType:function(e){var s=Eo(Qs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Eo(Qs).controller.signal}},$2=typeof WeakMap=="function"?WeakMap:Map,On=0,is=null,dn=null,pn=0,Yn=0,gi=null,Ua=!1,Kr=!1,th=!1,ka=0,Es=0,Va=0,vr=0,nh=0,yi=0,Qr=0,Fl=null,ai=null,sh=!1,yu=0,Fg=0,xu=1/0,bu=null,Ya=null,co=0,Wa=null,Zr=null,ja=0,oh=0,ih=null,Xg=null,Xl=0,ah=null;function xi(){return(On&2)!==0&&pn!==0?pn&-pn:I.T!==null?fh():Sn()}function Gg(){if(yi===0)if((pn&536870912)===0||bn){var e=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),yi=e}else yi=536870912;return e=pi.current,e!==null&&(e.flags|=32),yi}function ri(e,s,o){(e===is&&(Yn===2||Yn===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Fa(e,pn,yi,!1)),mt(e,o),((On&2)===0||e!==is)&&(e===is&&((On&2)===0&&(vr|=o),Es===4&&Fa(e,pn,yi,!1)),aa(e))}function qg(e,s,o){if((On&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||nt(e,s),f=r?H2(e,s):lh(e,s,!0),m=r;do{if(f===0){Kr&&!r&&Fa(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!I2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Fl;var Z=A.current.memoizedState.isDehydrated;if(Z&&(Jr(A,v).flags|=256),v=lh(A,v,!1),v!==2){if(th&&!Z){A.errorRecoveryDisabledLanes|=m,vr|=m,f=4;break e}m=ai,ai=f,m!==null&&(ai===null?ai=m:ai.push.apply(ai,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Jr(e,0),Fa(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Fa(r,s,yi,!Ua);break e;case 2:ai=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-it(),10<f)){if(Fa(r,s,yi,!Ua),ut(r,0,!0)!==0)break e;ja=s,r.timeoutHandle=j0(Kg.bind(null,r,o,ai,bu,sh,s,yi,vr,Qr,Ua,m,"Throttled",-0,0),f);break e}Kg(r,o,ai,bu,sh,s,yi,vr,Qr,Ua,m,null,-0,0)}}break}while(!0);aa(e)}function Kg(e,s,o,r,f,m,v,A,Z,xe,De,$e,be,we){if(e.timeoutHandle=-1,$e=s.subtreeFlags,$e&8192||($e&16785408)===16785408){$e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ds},Ug(s,m,$e);var Ct=(m&62914560)===m?yu-it():(m&4194048)===m?Fg-it():0;if(Ct=Sv($e,Ct),Ct!==null){ja=m,e.cancelPendingCommit=Ct(o0.bind(null,e,s,m,o,r,f,v,A,Z,De,$e,null,be,we)),Fa(e,m,v,!xe);return}}o0(e,s,m,o,r,f,v,A,Z)}function I2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!dt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fa(e,s,o,r){s&=~nh,s&=~vr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-_t(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&hn(e,o,s)}function vu(){return(On&6)===0?(Gl(0),!1):!0}function rh(){if(dn!==null){if(Yn===0)var e=dn.return;else e=dn,pa=fr=null,Sf(e),Vr=null,Al=0,e=dn;for(;e!==null;)Mg(e.alternate,e),e=e.return;dn=null}}function Jr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,iv(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ja=0,rh(),is=e,dn=o=ha(e.current,null),pn=s,Yn=0,gi=null,Ua=!1,Kr=nt(e,s),th=!1,Qr=yi=nh=vr=Va=Es=0,ai=Fl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-_t(r),m=1<<f;s|=e[f],r&=~m}return ka=s,Uc(),o}function Qg(e,s){nn=null,I.H=$l,s===Ur||s===Kc?(s=h_(),Yn=3):s===df?(s=h_(),Yn=4):Yn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,gi=s,dn===null&&(Es=1,uu(e,Ei(s,e.current)))}function Zg(){var e=pi.current;return e===null?!0:(pn&4194048)===pn?Di===null:(pn&62914560)===pn||(pn&536870912)!==0?e===Di:!1}function Jg(){var e=I.H;return I.H=$l,e===null?$l:e}function e0(){var e=I.A;return I.A=z2,e}function wu(){Es=4,Ua||(pn&4194048)!==pn&&pi.current!==null||(Kr=!0),(Va&134217727)===0&&(vr&134217727)===0||is===null||Fa(is,pn,yi,!1)}function lh(e,s,o){var r=On;On|=2;var f=Jg(),m=e0();(is!==e||pn!==s)&&(bu=null,Jr(e,s)),s=!1;var v=Es;e:do try{if(Yn!==0&&dn!==null){var A=dn,Z=gi;switch(Yn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:pi.current===null&&(s=!0);var xe=Yn;if(Yn=0,gi=null,el(e,A,Z,xe),o&&Kr){v=0;break e}break;default:xe=Yn,Yn=0,gi=null,el(e,A,Z,xe)}}P2(),v=Es;break}catch(De){Qg(e,De)}while(!0);return s&&e.shellSuspendCounter++,pa=fr=null,On=r,I.H=f,I.A=m,dn===null&&(is=null,pn=0,Uc()),v}function P2(){for(;dn!==null;)t0(dn)}function H2(e,s){var o=On;On|=2;var r=Jg(),f=e0();is!==e||pn!==s?(bu=null,xu=it()+500,Jr(e,s)):Kr=nt(e,s);e:do try{if(Yn!==0&&dn!==null){s=dn;var m=gi;t:switch(Yn){case 1:Yn=0,gi=null,el(e,s,m,1);break;case 2:case 9:if(d_(m)){Yn=0,gi=null,n0(s);break}s=function(){Yn!==2&&Yn!==9||is!==e||(Yn=7),aa(e)},m.then(s,s);break e;case 3:Yn=7;break e;case 4:Yn=5;break e;case 7:d_(m)?(Yn=0,gi=null,n0(s)):(Yn=0,gi=null,el(e,s,m,7));break;case 5:var v=null;switch(dn.tag){case 26:v=dn.memoizedState;case 5:case 27:var A=dn;if(v?H0(v):A.stateNode.complete){Yn=0,gi=null;var Z=A.sibling;if(Z!==null)dn=Z;else{var xe=A.return;xe!==null?(dn=xe,Su(xe)):dn=null}break t}}Yn=0,gi=null,el(e,s,m,5);break;case 6:Yn=0,gi=null,el(e,s,m,6);break;case 8:rh(),Es=6;break e;default:throw Error(a(462))}}U2();break}catch(De){Qg(e,De)}while(!0);return pa=fr=null,I.H=r,I.A=f,On=o,dn!==null?0:(is=null,pn=0,Uc(),Es)}function U2(){for(;dn!==null&&!Fe();)t0(dn)}function t0(e){var s=kg(e.alternate,e,ka);e.memoizedProps=e.pendingProps,s===null?Su(e):dn=s}function n0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=xg(o,s,s.pendingProps,s.type,void 0,pn);break;case 11:s=xg(o,s,s.pendingProps,s.type.render,s.ref,pn);break;case 5:Sf(s);default:Mg(o,s),s=dn=e_(s,ka),s=kg(o,s,ka)}e.memoizedProps=e.pendingProps,s===null?Su(e):dn=s}function el(e,s,o,r){pa=fr=null,Sf(s),Vr=null,Al=0;var f=s.return;try{if(A2(e,f,s,o,pn)){Es=1,uu(e,Ei(o,e.current)),dn=null;return}}catch(m){if(f!==null)throw dn=f,m;Es=1,uu(e,Ei(o,e.current)),dn=null;return}s.flags&32768?(bn||r===1?e=!0:Kr||(pn&536870912)!==0?e=!1:(Ua=e=!0,(r===2||r===9||r===3||r===6)&&(r=pi.current,r!==null&&r.tag===13&&(r.flags|=16384))),s0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){s0(s,Ua);return}e=s.return;var o=R2(s.alternate,s,ka);if(o!==null){dn=o;return}if(s=s.sibling,s!==null){dn=s;return}dn=s=e}while(s!==null);Es===0&&(Es=5)}function s0(e,s){do{var o=B2(e.alternate,e);if(o!==null){o.flags&=32767,dn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){dn=e;return}dn=e=o}while(e!==null);Es=6,dn=null}function o0(e,s,o,r,f,m,v,A,Z){e.cancelPendingCommit=null;do Cu();while(co!==0);if((On&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Ot(e,o,m,v,A,Z),e===is&&(dn=is=null,pn=0),Zr=s,Wa=e,ja=o,oh=m,ih=f,Xg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,F2(at,function(){return c0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,f=ie.p,ie.p=2,v=On,On|=4;try{L2(e,s,o)}finally{On=v,ie.p=f,I.T=r}}co=1,i0(),a0(),r0()}}function i0(){if(co===1){co=0;var e=Wa,s=Zr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=I.T,I.T=null;var r=ie.p;ie.p=2;var f=On;On|=4;try{Ig(s,e);var m=bh,v=Dt(e.containerInfo),A=m.focusedElem,Z=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&Ln(A.ownerDocument.documentElement,A)){if(Z!==null&&qt(A)){var xe=Z.start,De=Z.end;if(De===void 0&&(De=xe),"selectionStart"in A)A.selectionStart=xe,A.selectionEnd=Math.min(De,A.value.length);else{var $e=A.ownerDocument||document,be=$e&&$e.defaultView||window;if(be.getSelection){var we=be.getSelection(),Ct=A.textContent.length,Wt=Math.min(Z.start,Ct),Jn=Z.end===void 0?Wt:Math.min(Z.end,Ct);!we.extend&&Wt>Jn&&(v=Jn,Jn=Wt,Wt=v);var de=Bn(A,Wt),ne=Bn(A,Jn);if(de&&ne&&(we.rangeCount!==1||we.anchorNode!==de.node||we.anchorOffset!==de.offset||we.focusNode!==ne.node||we.focusOffset!==ne.offset)){var ye=$e.createRange();ye.setStart(de.node,de.offset),we.removeAllRanges(),Wt>Jn?(we.addRange(ye),we.extend(ne.node,ne.offset)):(ye.setEnd(ne.node,ne.offset),we.addRange(ye))}}}}for($e=[],we=A;we=we.parentNode;)we.nodeType===1&&$e.push({element:we,left:we.scrollLeft,top:we.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<$e.length;A++){var ze=$e[A];ze.element.scrollLeft=ze.left,ze.element.scrollTop=ze.top}}Ou=!!xh,bh=xh=null}finally{On=f,ie.p=r,I.T=o}}e.current=s,co=2}}function a0(){if(co===2){co=0;var e=Wa,s=Zr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=I.T,I.T=null;var r=ie.p;ie.p=2;var f=On;On|=4;try{Bg(e,s.alternate,s)}finally{On=f,ie.p=r,I.T=o}}co=3}}function r0(){if(co===4||co===3){co=0,tt();var e=Wa,s=Zr,o=ja,r=Xg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?co=5:(co=0,Zr=Wa=null,l0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ya=null),Hn(o),s=s.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(et,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=I.T,f=ie.p,ie.p=2,I.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{I.T=s,ie.p=f}}(ja&3)!==0&&Cu(),aa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Xl++:(Xl=0,ah=e):Xl=0,Gl(0)}}function l0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,El(s)))}function Cu(){return i0(),a0(),r0(),c0()}function c0(){if(co!==5)return!1;var e=Wa,s=oh;oh=0;var o=Hn(ja),r=I.T,f=ie.p;try{ie.p=32>o?32:o,I.T=null,o=ih,ih=null;var m=Wa,v=ja;if(co=0,Zr=Wa=null,ja=0,(On&6)!==0)throw Error(a(331));var A=On;if(On|=4,Yg(m.current),Hg(m,m.current,v,o),On=A,Gl(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(et,m)}catch{}return!0}finally{ie.p=f,I.T=r,l0(e,s)}}function u0(e,s,o){s=Ei(o,s),s=$f(e.stateNode,s,2),e=$a(e,s,2),e!==null&&(mt(e,2),aa(e))}function Wn(e,s,o){if(e.tag===3)u0(e,e,o);else for(;s!==null;){if(s.tag===3){u0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){e=Ei(o,e),o=dg(2),r=$a(s,o,2),r!==null&&(fg(o,r,s,e),mt(r,2),aa(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new $2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=V2.bind(null,e,s,o),s.then(e,e))}function V2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,is===e&&(pn&o)===o&&(Es===4||Es===3&&(pn&62914560)===pn&&300>it()-yu?(On&2)===0&&Jr(e,0):nh|=o,Qr===pn&&(Qr=0)),aa(e)}function d0(e,s){s===0&&(s=pt()),e=cr(e,s),e!==null&&(mt(e,s),aa(e))}function Y2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),d0(e,o)}function W2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),d0(e,o)}function F2(e,s){return Xe(e,s)}var ku=null,tl=null,uh=!1,ju=!1,dh=!1,Xa=0;function aa(e){e!==tl&&e.next===null&&(tl===null?ku=tl=e:tl=tl.next=e),ju=!0,uh||(uh=!0,G2())}function Gl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-_t(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,p0(r,m))}else m=pn,m=ut(r,r===is?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||nt(r,m)||(o=!0,p0(r,m));r=r.next}while(o);dh=!1}}function X2(){f0()}function f0(){ju=uh=!1;var e=0;Xa!==0&&ov()&&(e=Xa);for(var s=it(),o=null,r=ku;r!==null;){var f=r.next,m=h0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(tl=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}co!==0&&co!==5||Gl(e),Xa!==0&&(Xa=0)}function h0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-_t(m),A=1<<v,Z=f[v];Z===-1?((A&o)===0||(A&r)!==0)&&(f[v]=jt(A,s)):Z<=s&&(e.expiredLanes|=A),m&=~A}if(s=is,o=pn,o=ut(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Yn===2||Yn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&He(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||nt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&He(r),Hn(o)){case 2:case 8:o=$t;break;case 32:o=at;break;case 268435456:o=J;break;default:o=at}return r=m0.bind(null,e),o=Xe(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&He(r),e.callbackPriority=2,e.callbackNode=null,2}function m0(e,s){if(co!==0&&co!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=pn;return r=ut(e,e===is?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qg(e,r,s),h0(e,it()),e.callbackNode!=null&&e.callbackNode===o?m0.bind(null,e):null)}function p0(e,s){if(Cu())return null;qg(e,s,!0)}function G2(){av(function(){(On&6)!==0?Xe(bt,X2):f0()})}function fh(){if(Xa===0){var e=Pr;e===0&&(e=ct,ct<<=1,(ct&261888)===0&&(ct=256)),Xa=e}return Xa}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:So(""+e)}function g0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function q2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=_0((f[$n]||null).action),v=r.submitter;v&&(s=(s=v[$n]||null)?_0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new Xs("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var Z=v?g0(f,v):new FormData(f);Df(o,{pending:!0,data:Z,method:f.method,action:m},null,Z)}}else typeof m=="function"&&(A.preventDefault(),Z=v?g0(f,v):new FormData(f),Df(o,{pending:!0,data:Z,method:f.method,action:m},m,Z))},currentTarget:f}]})}}for(var hh=0;hh<Gd.length;hh++){var mh=Gd[hh],K2=mh.toLowerCase(),Q2=mh[0].toUpperCase()+mh.slice(1);Wi(K2,"on"+Q2)}Wi(Yi,"onAnimationEnd"),Wi(na,"onAnimationIteration"),Wi(Pc,"onAnimationStart"),Wi("dblclick","onDoubleClick"),Wi("focusin","onFocus"),Wi("focusout","onBlur"),Wi(Wd,"onTransitionRun"),Wi(Fd,"onTransitionStart"),Wi(Xd,"onTransitionCancel"),Wi(Qp,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function y0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],Z=A.instance,xe=A.currentTarget;if(A=A.listener,Z!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=xe;try{m(f)}catch(De){Hc(De)}f.currentTarget=null,m=Z}else for(v=0;v<r.length;v++){if(A=r[v],Z=A.instance,xe=A.currentTarget,A=A.listener,Z!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=xe;try{m(f)}catch(De){Hc(De)}f.currentTarget=null,m=Z}}}}function fn(e,s){var o=s[In];o===void 0&&(o=s[In]=new Set);var r=e+"__bubble";o.has(r)||(x0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),x0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,ei.forEach(function(o){o!=="selectionchange"&&(Z2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function x0(e,s,o,r){switch(G0(s)){case 2:var f=jv;break;case 8:f=Mv;break;default:f=Nh}o=f.bind(null,s,o,e),f=void 0,!Rs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var Z=v.tag;if((Z===3||Z===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=_s(A),v===null)return;if(Z=v.tag,Z===5||Z===6||Z===26||Z===27){r=m=v;continue e}A=A.parentNode}}r=r.return}po(function(){var xe=m,De=Ys(o),$e=[];e:{var be=Zp.get(e);if(be!==void 0){var we=Xs,Ct=e;switch(e){case"keypress":if(Mn(o)===0)break e;case"keydown":case"keyup":we=hi;break;case"focusin":Ct="focus",we=Lo;break;case"focusout":Ct="blur",we=Lo;break;case"beforeblur":case"afterblur":we=Lo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":we=Ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":we=go;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":we=Ce;break;case Yi:case na:case Pc:we=ta;break;case Qp:we=Qe;break;case"scroll":case"scrollend":we=Bs;break;case"wheel":we=Nt;break;case"copy":case"cut":case"paste":we=Pi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":we=U;break;case"toggle":case"beforetoggle":we=Gt}var Wt=(s&4)!==0,Jn=!Wt&&(e==="scroll"||e==="scrollend"),de=Wt?be!==null?be+"Capture":null:be;Wt=[];for(var ne=xe,ye;ne!==null;){var ze=ne;if(ye=ze.stateNode,ze=ze.tag,ze!==5&&ze!==26&&ze!==27||ye===null||de===null||(ze=an(ne,de),ze!=null&&Wt.push(Kl(ne,ze,ye))),Jn)break;ne=ne.return}0<Wt.length&&(be=new we(be,Ct,null,o,De),$e.push({event:be,listeners:Wt}))}}if((s&7)===0){e:{if(be=e==="mouseover"||e==="pointerover",we=e==="mouseout"||e==="pointerout",be&&o!==Vo&&(Ct=o.relatedTarget||o.fromElement)&&(_s(Ct)||Ct[rt]))break e;if((we||be)&&(be=De.window===De?De:(be=De.ownerDocument)?be.defaultView||be.parentWindow:window,we?(Ct=o.relatedTarget||o.toElement,we=xe,Ct=Ct?_s(Ct):null,Ct!==null&&(Jn=u(Ct),Wt=Ct.tag,Ct!==Jn||Wt!==5&&Wt!==27&&Wt!==6)&&(Ct=null)):(we=null,Ct=xe),we!==Ct)){if(Wt=Ro,ze="onMouseLeave",de="onMouseEnter",ne="mouse",(e==="pointerout"||e==="pointerover")&&(Wt=U,ze="onPointerLeave",de="onPointerEnter",ne="pointer"),Jn=we==null?be:Jo(we),ye=Ct==null?be:Jo(Ct),be=new Wt(ze,ne+"leave",we,o,De),be.target=Jn,be.relatedTarget=ye,ze=null,_s(De)===xe&&(Wt=new Wt(de,ne+"enter",Ct,o,De),Wt.target=ye,Wt.relatedTarget=Jn,ze=Wt),Jn=ze,we&&Ct)t:{for(Wt=J2,de=we,ne=Ct,ye=0,ze=de;ze;ze=Wt(ze))ye++;ze=0;for(var It=ne;It;It=Wt(It))ze++;for(;0<ye-ze;)de=Wt(de),ye--;for(;0<ze-ye;)ne=Wt(ne),ze--;for(;ye--;){if(de===ne||ne!==null&&de===ne.alternate){Wt=de;break t}de=Wt(de),ne=Wt(ne)}Wt=null}else Wt=null;we!==null&&b0($e,be,we,Wt,!1),Ct!==null&&Jn!==null&&b0($e,Jn,Ct,Wt,!0)}}e:{if(be=xe?Jo(xe):window,we=be.nodeName&&be.nodeName.toLowerCase(),we==="select"||we==="input"&&be.type==="file")var An=k;else if(X(be))if(R)An=ht;else{An=Je;var Et=Be}else we=be.nodeName,!we||we.toLowerCase()!=="input"||be.type!=="checkbox"&&be.type!=="radio"?xe&&ks(xe.elementType)&&(An=k):An=st;if(An&&(An=An(e,xe))){K($e,An,o,De);break e}Et&&Et(e,be,xe),e==="focusout"&&xe&&be.type==="number"&&xe.memoizedProps.value!=null&&ho(be,"number",be.value)}switch(Et=xe?Jo(xe):window,e){case"focusin":(X(Et)||Et.contentEditable==="true")&&(Pt=Et,qn=xe,Tn=null);break;case"focusout":Tn=qn=Pt=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,Oo($e,o,De);break;case"selectionchange":if(Mt)break;case"keydown":case"keyup":Oo($e,o,De)}var sn;if(xn)e:{switch(e){case"compositionstart":var _n="onCompositionStart";break e;case"compositionend":_n="onCompositionEnd";break e;case"compositionupdate":_n="onCompositionUpdate";break e}_n=void 0}else qs?cs(e,o)&&(_n="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(_n="onCompositionStart");_n&&(Yt&&o.locale!=="ko"&&(qs||_n!=="onCompositionStart"?_n==="onCompositionEnd"&&qs&&(sn=jo()):(ws=De,ko="value"in ws?ws.value:ws.textContent,qs=!0)),Et=Eu(xe,_n),0<Et.length&&(_n=new Tt(_n,e,null,o,De),$e.push({event:_n,listeners:Et}),sn?_n.data=sn:(sn=ro(o),sn!==null&&(_n.data=sn)))),(sn=Gs?Ls(e,o):Ks(e,o))&&(_n=Eu(xe,"onBeforeInput"),0<_n.length&&(Et=new Tt("onBeforeInput","beforeinput",null,o,De),$e.push({event:Et,listeners:_n}),Et.data=sn)),q2($e,e,xe,o,De)}y0($e,s)})}function Kl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Eu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=an(e,o),f!=null&&r.unshift(Kl(e,f,m)),f=an(e,s),f!=null&&r.push(Kl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function J2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,Z=A.alternate,xe=A.stateNode;if(A=A.tag,Z!==null&&Z===r)break;A!==5&&A!==26&&A!==27||xe===null||(Z=xe,f?(xe=an(o,m),xe!=null&&v.unshift(Kl(o,xe,Z))):f||(xe=an(o,m),xe!=null&&v.push(Kl(o,xe,Z)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var ev=/\r\n?/g,tv=/\u0000|\uFFFD/g;function v0(e){return(typeof e=="string"?e:""+e).replace(ev,`
`).replace(tv,"")}function w0(e,s){return s=v0(s),v0(e)===s}function Zn(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||wo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&wo(e,""+r);break;case"className":yn(e,"class",r);break;case"tabIndex":yn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":yn(e,o,r);break;case"style":oo(e,r,m);break;case"data":if(s!=="object"){yn(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=So(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Zn(e,s,"name",f.name,f,null),Zn(e,s,"formEncType",f.formEncType,f,null),Zn(e,s,"formMethod",f.formMethod,f,null),Zn(e,s,"formTarget",f.formTarget,f,null)):(Zn(e,s,"encType",f.encType,f,null),Zn(e,s,"method",f.method,f,null),Zn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=So(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=Ds);break;case"onScroll":r!=null&&fn("scroll",e);break;case"onScrollEnd":r!=null&&fn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=So(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":fn("beforetoggle",e),fn("toggle",e),Hs(e,"popover",r);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Hs(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Uo.get(o)||o,Hs(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":oo(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?wo(e,r):(typeof r=="number"||typeof r=="bigint")&&wo(e,""+r);break;case"onScroll":r!=null&&fn("scroll",e);break;case"onScrollEnd":r!=null&&fn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ds);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vs.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[$n]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):Hs(e,o,r)}}}function Ao(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fn("error",e),fn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Zn(e,s,m,v,o,null)}}f&&Zn(e,s,"srcSet",o.srcSet,o,null),r&&Zn(e,s,"src",o.src,o,null);return;case"input":fn("invalid",e);var A=m=v=f=null,Z=null,xe=null;for(r in o)if(o.hasOwnProperty(r)){var De=o[r];if(De!=null)switch(r){case"name":f=De;break;case"type":v=De;break;case"checked":Z=De;break;case"defaultChecked":xe=De;break;case"value":m=De;break;case"defaultValue":A=De;break;case"children":case"dangerouslySetInnerHTML":if(De!=null)throw Error(a(137,s));break;default:Zn(e,s,r,De,o,null)}}kn(e,m,A,Z,xe,v,f,!1);return;case"select":fn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:Zn(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?fs(e,!!r,s,!1):o!=null&&fs(e,!!r,o,!0);return;case"textarea":fn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Zn(e,s,v,A,o,null)}Vs(e,r,f,m);return;case"option":for(Z in o)if(o.hasOwnProperty(Z)&&(r=o[Z],r!=null))switch(Z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Zn(e,s,Z,r,o,null)}return;case"dialog":fn("beforetoggle",e),fn("toggle",e),fn("cancel",e),fn("close",e);break;case"iframe":case"object":fn("load",e);break;case"video":case"audio":for(r=0;r<ql.length;r++)fn(ql[r],e);break;case"image":fn("error",e),fn("load",e);break;case"details":fn("toggle",e);break;case"embed":case"source":case"link":fn("error",e),fn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(xe in o)if(o.hasOwnProperty(xe)&&(r=o[xe],r!=null))switch(xe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Zn(e,s,xe,r,o,null)}return;default:if(ks(s)){for(De in o)o.hasOwnProperty(De)&&(r=o[De],r!==void 0&&yh(e,s,De,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&Zn(e,s,A,r,o,null))}function nv(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,Z=null,xe=null,De=null;for(we in o){var $e=o[we];if(o.hasOwnProperty(we)&&$e!=null)switch(we){case"checked":break;case"value":break;case"defaultValue":Z=$e;default:r.hasOwnProperty(we)||Zn(e,s,we,null,r,$e)}}for(var be in r){var we=r[be];if($e=o[be],r.hasOwnProperty(be)&&(we!=null||$e!=null))switch(be){case"type":m=we;break;case"name":f=we;break;case"checked":xe=we;break;case"defaultChecked":De=we;break;case"value":v=we;break;case"defaultValue":A=we;break;case"children":case"dangerouslySetInnerHTML":if(we!=null)throw Error(a(137,s));break;default:we!==$e&&Zn(e,s,be,we,r,$e)}}vo(e,v,A,Z,xe,De,m,f);return;case"select":we=v=A=be=null;for(m in o)if(Z=o[m],o.hasOwnProperty(m)&&Z!=null)switch(m){case"value":break;case"multiple":we=Z;default:r.hasOwnProperty(m)||Zn(e,s,m,null,r,Z)}for(f in r)if(m=r[f],Z=o[f],r.hasOwnProperty(f)&&(m!=null||Z!=null))switch(f){case"value":be=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==Z&&Zn(e,s,f,m,r,Z)}s=A,o=v,r=we,be!=null?fs(e,!!o,be,!1):!!r!=!!o&&(s!=null?fs(e,!!o,s,!0):fs(e,!!o,o?[]:"",!1));return;case"textarea":we=be=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Zn(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":be=f;break;case"defaultValue":we=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Zn(e,s,v,f,r,m)}Gn(e,be,we);return;case"option":for(var Ct in o)if(be=o[Ct],o.hasOwnProperty(Ct)&&be!=null&&!r.hasOwnProperty(Ct))switch(Ct){case"selected":e.selected=!1;break;default:Zn(e,s,Ct,null,r,be)}for(Z in r)if(be=r[Z],we=o[Z],r.hasOwnProperty(Z)&&be!==we&&(be!=null||we!=null))switch(Z){case"selected":e.selected=be&&typeof be!="function"&&typeof be!="symbol";break;default:Zn(e,s,Z,be,r,we)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in o)be=o[Wt],o.hasOwnProperty(Wt)&&be!=null&&!r.hasOwnProperty(Wt)&&Zn(e,s,Wt,null,r,be);for(xe in r)if(be=r[xe],we=o[xe],r.hasOwnProperty(xe)&&be!==we&&(be!=null||we!=null))switch(xe){case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(a(137,s));break;default:Zn(e,s,xe,be,r,we)}return;default:if(ks(s)){for(var Jn in o)be=o[Jn],o.hasOwnProperty(Jn)&&be!==void 0&&!r.hasOwnProperty(Jn)&&yh(e,s,Jn,void 0,r,be);for(De in r)be=r[De],we=o[De],!r.hasOwnProperty(De)||be===we||be===void 0&&we===void 0||yh(e,s,De,be,r,we);return}}for(var de in o)be=o[de],o.hasOwnProperty(de)&&be!=null&&!r.hasOwnProperty(de)&&Zn(e,s,de,null,r,be);for($e in r)be=r[$e],we=o[$e],!r.hasOwnProperty($e)||be===we||be==null&&we==null||Zn(e,s,$e,be,r,we)}function S0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&S0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var Z=o[r],xe=Z.startTime;if(xe>A)break;var De=Z.transferSize,$e=Z.initiatorType;De&&S0($e)&&(Z=Z.responseEnd,v+=De*(Z<A?1:(A-xe)/(Z-xe)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Tu(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function ov(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,iv=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,av=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(rv)}:j0;function rv(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function E0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),il(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Ql(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Ql(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[Cs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Ql(e.ownerDocument.body);o=f}while(o);il(s)}function T0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),ui(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function lv(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Cs])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function cv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ri(e.nextSibling),e===null))return null;return e}function A0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ri(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uv(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function N0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Ri(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function R0(e,s,o){switch(s=Tu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ql(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ui(e)}var Bi=new Map,B0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=ie.d;ie.d={f:dv,r:fv,D:hv,C:mv,L:pv,m:_v,X:yv,S:gv,M:xv};function dv(){var e=Ma.f(),s=vu();return e||s}function fv(e){var s=bo(e);s!==null&&s.tag===5&&s.type==="form"?Q_(s):Ma.r(e)}var nl=typeof document>"u"?null:document;function L0(e,s,o){var r=nl;if(r&&typeof s=="string"&&s){var f=gs(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),B0.has(f)||(B0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Ao(s,"link",e),Cn(s),r.head.appendChild(s)))}}function hv(e){Ma.D(e),L0("dns-prefetch",e,null)}function mv(e,s){Ma.C(e,s),L0("preconnect",e,s)}function pv(e,s,o){Ma.L(e,s,o);var r=nl;if(r&&e&&s){var f='link[rel="preload"][as="'+gs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+gs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+gs(o.imageSizes)+'"]')):f+='[href="'+gs(e)+'"]';var m=f;switch(s){case"style":m=sl(e);break;case"script":m=ol(e)}Bi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Bi.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Zl(m))||s==="script"&&r.querySelector(Jl(m))||(s=r.createElement("link"),Ao(s,"link",e),Cn(s),r.head.appendChild(s)))}}function _v(e,s){Ma.m(e,s);var o=nl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+gs(r)+'"][href="'+gs(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ol(e)}if(!Bi.has(m)&&(e=x({rel:"modulepreload",href:e},s),Bi.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Jl(m)))return}r=o.createElement("link"),Ao(r,"link",e),Cn(r),o.head.appendChild(r)}}}function gv(e,s,o){Ma.S(e,s,o);var r=nl;if(r&&e){var f=Ns(r).hoistableStyles,m=sl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Zl(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Bi.get(m))&&Mh(e,o);var Z=v=r.createElement("link");Cn(Z),Ao(Z,"link",e),Z._p=new Promise(function(xe,De){Z.onload=xe,Z.onerror=De}),Z.addEventListener("load",function(){A.loading|=1}),Z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Nu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function yv(e,s){Ma.X(e,s);var o=nl;if(o&&e){var r=Ns(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0},s),(s=Bi.get(f))&&Eh(e,s),m=o.createElement("script"),Cn(m),Ao(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function xv(e,s){Ma.M(e,s);var o=nl;if(o&&e){var r=Ns(o).hoistableScripts,f=ol(e),m=r.get(f);m||(m=o.querySelector(Jl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Bi.get(f))&&Eh(e,s),m=o.createElement("script"),Cn(m),Ao(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function O0(e,s,o,r){var f=(f=Ae.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=Ns(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=sl(o.href);var m=Ns(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Zl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Bi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(e,o),m||bv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ol(o),o=Ns(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function sl(e){return'href="'+gs(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function bv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Ao(s,"link",o),Cn(s),e.head.appendChild(s))}function ol(e){return'[src="'+gs(e)+'"]'}function Jl(e){return"script[async]"+e}function $0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+gs(o.href)+'"]');if(r)return s.instance=r,Cn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Cn(r),Ao(r,"style",f),Nu(r,o.precedence,e),s.instance=r;case"stylesheet":f=sl(o.href);var m=e.querySelector(Zl(f));if(m)return s.state.loading|=4,s.instance=m,Cn(m),m;r=z0(o),(f=Bi.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),Cn(m);var v=m;return v._p=new Promise(function(A,Z){v.onload=A,v.onerror=Z}),Ao(m,"link",r),s.state.loading|=4,Nu(m,o.precedence,e),s.instance=m;case"script":return m=ol(o.src),(f=e.querySelector(Jl(m)))?(s.instance=f,Cn(f),f):(r=o,(f=Bi.get(m))&&(r=x({},o),Eh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),Cn(f),Ao(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Nu(r,o.precedence,e));return s.instance}function Nu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Eh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Du=null;function I0(e,s,o){if(Du===null){var r=new Map,f=Du=new Map;f.set(o,r)}else f=Du,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Cs]||m[Xt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function P0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function vv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=sl(r.href),m=s.querySelector(Zl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,Cn(m);return}m=s.ownerDocument||s,r=z0(r),(f=Bi.get(f))&&Mh(r,f),m=m.createElement("link"),Cn(m);var v=m;v._p=new Promise(function(A,Z){v.onload=A,v.onerror=Z}),Ao(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function Sv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*sv());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(Cv,e),Bu=null,Ru.call(e))}function Cv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var ec={$$typeof:L,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function kv(e,s,o,r,f,m,v,A,Z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Z,this.incompleteTransitions=new Map}function U0(e,s,o,r,f,m,v,A,Z,xe,De,$e){return e=new kv(e,s,o,v,Z,xe,De,$e,A),s=1,m===!0&&(s|=24),m=mi(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function V0(e){return e?(e=Lr,e):Lr}function Y0(e,s,o,r,f,m){f=V0(f),r.context===null?r.context=f:r.pendingContext=f,r=za(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=$a(e,r,s),o!==null&&(ri(o,e,s),Dl(o,e,s))}function W0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){W0(e,s),(e=e.alternate)&&W0(e,s)}function F0(e){if(e.tag===13||e.tag===31){var s=cr(e,67108864);s!==null&&ri(s,e,67108864),Ah(e,67108864)}}function X0(e){if(e.tag===13||e.tag===31){var s=xi();s=Xn(s);var o=cr(e,s);o!==null&&ri(o,e,s),Ah(e,s)}}var Ou=!0;function jv(e,s,o,r){var f=I.T;I.T=null;var m=ie.p;try{ie.p=2,Nh(e,s,o,r)}finally{ie.p=m,I.T=f}}function Mv(e,s,o,r){var f=I.T;I.T=null;var m=ie.p;try{ie.p=8,Nh(e,s,o,r)}finally{ie.p=m,I.T=f}}function Nh(e,s,o,r){if(Ou){var f=Dh(r);if(f===null)gh(e,s,r,zu,o),q0(e,r);else if(Tv(f,e,s,o,r))r.stopPropagation();else if(q0(e,r),s&4&&-1<Ev.indexOf(e)){for(;f!==null;){var m=bo(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Qt(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var Z=1<<31-_t(v);A.entanglements[1]|=Z,v&=~Z}aa(m),(On&6)===0&&(xu=it()+500,Gl(0))}}break;case 31:case 13:A=cr(m,2),A!==null&&ri(A,m,2),vu(),Ah(m,2)}if(m=Dh(r),m===null&&gh(e,s,r,zu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Dh(e){return e=Ys(e),Rh(e)}var zu=null;function Rh(e){if(zu=null,e=_s(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function G0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case bt:return 2;case $t:return 8;case at:case P:return 32;case J:return 268435456;default:return 32}default:return 32}}var Bh=!1,qa=null,Ka=null,Qa=null,tc=new Map,nc=new Map,Za=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,s){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":tc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(s.pointerId)}}function sc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=bo(s),s!==null&&F0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function Tv(e,s,o,r,f){switch(s){case"focusin":return qa=sc(qa,e,s,o,r,f),!0;case"dragenter":return Ka=sc(Ka,e,s,o,r,f),!0;case"mouseover":return Qa=sc(Qa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return tc.set(m,sc(tc.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,nc.set(m,sc(nc.get(m)||null,e,s,o,r,f)),!0}return!1}function K0(e){var s=_s(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,vn(e.priority,function(){X0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,vn(e.priority,function(){X0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Vo=r,o.target.dispatchEvent(r),Vo=null}else return s=bo(o),s!==null&&F0(s),e.blockedOn=o,!1;s.shift()}return!0}function Q0(e,s,o){$u(e)&&o.delete(s)}function Av(){Bh=!1,qa!==null&&$u(qa)&&(qa=null),Ka!==null&&$u(Ka)&&(Ka=null),Qa!==null&&$u(Qa)&&(Qa=null),tc.forEach(Q0),nc.forEach(Q0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Av)))}var Pu=null;function Z0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=bo(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function il(e){function s(Z){return Iu(Z,e)}qa!==null&&Iu(qa,e),Ka!==null&&Iu(Ka,e),Qa!==null&&Iu(Qa,e),tc.forEach(s),nc.forEach(s);for(var o=0;o<Za.length;o++){var r=Za[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Za.length&&(o=Za[0],o.blockedOn===null);)K0(o),o.blockedOn===null&&Za.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[$n]||null;if(typeof m=="function")v||Z0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[$n]||null)A=v.formAction;else if(Rh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),Z0(o)}}}function J0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=xi();Y0(o,r,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;Y0(e.current,2,null,e,null,null),vu(),s[rt]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=Sn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Za.length&&s!==0&&s<Za[o].priority;o++);Za.splice(o,0,e),o===0&&K0(e)}};var ey=n.version;if(ey!=="19.2.4")throw Error(a(527,ey,"19.2.4"));ie.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(s),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Nv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{et=Uu.inject(Nv),Ke=Uu}catch{}}return ic.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=rg,m=lg,v=cg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=U0(e,1,!1,null,null,o,r,null,f,m,v,J0),e[rt]=s.current,_h(e),new Lh(s)},ic.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=rg,v=lg,A=cg,Z=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(Z=o.formState)),s=U0(e,1,!0,s,o!=null?o:null,r,f,Z,m,v,A,J0),s.context=V0(null),o=s.current,r=xi(),r=Xn(r),f=za(r),f.callback=null,$a(o,f,r),o=r,s.current.lanes=o,mt(s,o),aa(s),e[rt]=s.current,_h(e),new Hu(s)},ic.version="19.2.4",ic}var uy;function Pv(){if(uy)return zh.exports;uy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=Iv(),zh.exports}var Hv=Pv();const Uv=zx(Hv);var _=up();const Vv=zx(_);function Yv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Wv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const $i="__TAURI_TO_IPC_KEY__";function Fv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function je(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Xv{get rid(){return Yv(this,hd,"f")}constructor(n){hd.set(this,void 0),Wv(this,hd,n)}async close(){return je("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var bi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(bi||(bi={}));async function Ix(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await je("plugin:event|unlisten",{event:t,eventId:n})}async function yc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return je("plugin:event|listen",{event:t,target:c,handler:Fv(n)}).then(u=>async()=>Ix(t,u))}async function Gv(t,n,i){return yc(t,a=>{Ix(t,a.id),n(a)},i)}async function qv(t,n){await je("plugin:event|emit",{event:t,payload:n})}async function Kv(t,n,i){await je("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Px{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new xc(this.width*n,this.height*n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class xc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Px(this.width/n,this.height/n)}[$i](){return{width:this.width,height:this.height}}toJSON(){return this[$i]()}}class al{constructor(n){this.size=n}toLogical(n){return this.size instanceof Px?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof xc?this.size:this.size.toPhysical(n)}[$i](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[$i]()}}class Hx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new or(this.x*n,this.y*n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class or{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Hx(this.x/n,this.y/n)}[$i](){return{x:this.x,y:this.y}}toJSON(){return this[$i]()}}class Vu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Hx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof or?this.position:this.position.toPhysical(n)}[$i](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[$i]()}}class bc extends Xv{constructor(n){super(n)}static async new(n,i,a){return je("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new bc(c))}static async fromBytes(n){return je("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new bc(i))}static async fromPath(n){return je("plugin:image|from_path",{path:n}).then(i=>new bc(i))}async rgba(){return je("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return je("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof bc?t.rid:t}var Em;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Em||(Em={}));class Qv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var dy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(dy||(dy={}));function dp(){return new Ux(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Uh(){return je("plugin:window|get_all_windows").then(t=>t.map(n=>new Ux(n,{skip:!0})))}const Vh=["tauri://created","tauri://error"];class Ux{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||je("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Uh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return dp()}static async getAll(){return Uh()}static async getFocusedWindow(){for(const n of await Uh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:yc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Gv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Vh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return qv(n,i)}async emitTo(n,i,a){if(Vh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Kv(n,i,a)}_handleTauriEvent(n,i){return Vh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return je("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return je("plugin:window|inner_position",{label:this.label}).then(n=>new or(n))}async outerPosition(){return je("plugin:window|outer_position",{label:this.label}).then(n=>new or(n))}async innerSize(){return je("plugin:window|inner_size",{label:this.label}).then(n=>new xc(n))}async outerSize(){return je("plugin:window|outer_size",{label:this.label}).then(n=>new xc(n))}async isFullscreen(){return je("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return je("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return je("plugin:window|is_maximized",{label:this.label})}async isFocused(){return je("plugin:window|is_focused",{label:this.label})}async isDecorated(){return je("plugin:window|is_decorated",{label:this.label})}async isResizable(){return je("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return je("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return je("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return je("plugin:window|is_closable",{label:this.label})}async isVisible(){return je("plugin:window|is_visible",{label:this.label})}async title(){return je("plugin:window|title",{label:this.label})}async theme(){return je("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return je("plugin:window|is_always_on_top",{label:this.label})}async center(){return je("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Em.Critical?i={type:"Critical"}:i={type:"Informational"}),je("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return je("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return je("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return je("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return je("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return je("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return je("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return je("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return je("plugin:window|maximize",{label:this.label})}async unmaximize(){return je("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return je("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return je("plugin:window|minimize",{label:this.label})}async unminimize(){return je("plugin:window|unminimize",{label:this.label})}async show(){return je("plugin:window|show",{label:this.label})}async hide(){return je("plugin:window|hide",{label:this.label})}async close(){return je("plugin:window|close",{label:this.label})}async destroy(){return je("plugin:window|destroy",{label:this.label})}async setDecorations(n){return je("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return je("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return je("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return je("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return je("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return je("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return je("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return je("plugin:window|set_size",{label:this.label,value:n instanceof al?n:new al(n)})}async setMinSize(n){return je("plugin:window|set_min_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setMaxSize(n){return je("plugin:window|set_max_size",{label:this.label,value:n instanceof al?n:n?new al(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return je("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return je("plugin:window|set_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setFullscreen(n){return je("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return je("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return je("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return je("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return je("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return je("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return je("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return je("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return je("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return je("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return je("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setIgnoreCursorEvents(n){return je("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return je("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return je("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return je("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return je("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return je("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return je("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return je("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return je("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return je("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(bi.WINDOW_RESIZED,i=>{i.payload=new xc(i.payload),n(i)})}async onMoved(n){return this.listen(bi.WINDOW_MOVED,i=>{i.payload=new or(i.payload),n(i)})}async onCloseRequested(n){return this.listen(bi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Qv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(bi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new or(d.payload.position)}})}),a=await this.listen(bi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new or(d.payload.position)}})}),c=await this.listen(bi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new or(d.payload.position)}})}),u=await this.listen(bi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(bi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(bi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(bi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(bi.WINDOW_THEME_CHANGED,n)}}var fy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(fy||(fy={}));var hy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(hy||(hy={}));var my;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(my||(my={}));var py;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(py||(py={}));async function Zv(t={}){return typeof t=="object"&&Object.freeze(t),await je("plugin:dialog|open",{options:t})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=(...t)=>t.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=t=>{const n=ew(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=_.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...tw,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Vx("lucide",c),...!u&&!nw(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=(t,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(sw,{ref:u,iconNode:n,className:Vx(`lucide-${Jv(_y(t))}`,`lucide-${t}`,a),...c}));return i.displayName=_y(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Yx=ea("chevron-down",ow);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],aw=ea("chevron-right",iw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],lw=ea("chevron-up",rw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],uw=ea("ellipsis",cw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],fw=ea("folder-git-2",dw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Wx=ea("git-branch-plus",hw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],pw=ea("git-commit-horizontal",mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],gw=ea("git-merge",_w);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],xw=ea("panel-left-close",yw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],vw=ea("panel-left-open",bw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Sw=ea("search",ww),Cw=3.7,Yu=200,Tm=240,us=540,Ts=176,Yh=32,vl=20,kw=Tm/2,rl=us+kw,Ea=18,Ta=18,Wh="#E6E6E6";function gy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Mr(t,n){var a,c,u;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind}}function Aa(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function _c(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:Aa(t).localeCompare(Aa(n))}function Fx(t){return[...t].sort(_c)}function jw(t){var h,p,y,g,x,b;if(t.length<=1)return[...t];const n=new Map(t.map(S=>[Aa(S),S])),i=new Map,a=new Map;t.forEach(S=>i.set(Aa(S),0));for(const S of t){const C=((h=S.parentShas)!=null?h:[]).length>0?(p=S.parentShas)!=null?p:[]:S.parentSha?[S.parentSha]:[];for(const M of C){if(!M||!n.has(M))continue;const E=Aa(S);i.set(E,((y=i.get(E))!=null?y:0)+1);const T=(g=a.get(M))!=null?g:[];T.push(S),a.set(M,T)}}for(const S of a.values())S.sort(_c);const c=t.filter(S=>{var C;return((C=i.get(Aa(S)))!=null?C:0)===0}).sort(_c),u=[],d=new Set;for(;c.length>0;){const S=c.shift(),C=Aa(S);if(!d.has(C)){d.add(C),u.push(S);for(const M of(x=a.get(C))!=null?x:[]){const E=Aa(M),T=((b=i.get(E))!=null?b:0)-1;i.set(E,T),T===0&&c.push(M)}c.sort(_c)}}return u.length===t.length?u:[...u,...t.filter(S=>!d.has(Aa(S))).sort(_c)]}function Xx(t,n){var i;return Fx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Gx(t,n,i){return Xx(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Mw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Ew(t,n,i){var g,x,b,S,C,M,E;const a=Gx(t,i,n);if(a.length===0)return null;const c=a.map(T=>Mr(t,T)),u=new Set(c.map(T=>T.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(S=(b=c.find(T=>T.kind==="branch-created"))==null?void 0:b.id)!=null?S:null,p=(C=c[0])==null?void 0:C.date,y=c.find(T=>h&&T.id===h||d&&T.id===d?!0:!T.parentSha||!u.has(T.parentSha));return y||((E=(M=Mw(c,p!=null?p:void 0))!=null?M:c[0])!=null?E:null)}function Tw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Xx(t.name,i);if(a.length>0){const y=a.map(b=>Mr(t.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function fp(t,n,i={},a={}){var le,re,Ne,Ve;const u=new Map(t.map(te=>[te.name,te])),d=new Map,h=new Map;for(const te of t){const I=((le=i[te.name])!=null?le:[]).filter(ie=>ie.kind!=="branch-created").map(ie=>new Date(ie.date).getTime()).filter(ie=>Number.isFinite(ie)).sort((ie,F)=>ie-F)[0];I!=null&&h.set(te.name,I)}const p=te=>{const he=h.get(te.name);return he!=null?he:gy(te).start},y=te=>{var I;const he=(I=a[te.name])!=null?I:null;return he&&he!==te.name&&(he===n||u.has(he))?he:te.name===n?null:te.parentBranch&&te.parentBranch!==te.name&&(te.parentBranch===n||u.has(te.parentBranch))?te.parentBranch:null};for(const te of t){if(te.name===n)continue;const he=(re=y(te))!=null?re:n,I=(Ne=d.get(he))!=null?Ne:[];I.push(te),d.set(he,I)}for(const te of d.values())te.sort((he,I)=>p(he)-p(I)||he.name.localeCompare(I.name));const g=new Map,x=[],b=new Map,S=new Map,C=new Map;for(const te of Object.values(i))for(const he of te){const I=new Date(he.date).getTime();Number.isFinite(I)&&(he.fullSha&&C.set(he.fullSha,I),he.sha&&C.set(he.sha,I))}const M=(te,he)=>({start:Math.min(te,he),end:Math.max(te,he)}),E=te=>{var G,_e;const he=M(p(te),gy(te).end),I=[he],ie=he.start,F=Tw(te,n,i),me=F?C.get(F):void 0,Te=new Date((_e=(G=te.divergedFromDate)!=null?G:te.createdDate)!=null?_e:te.lastCommitDate).getTime(),$=Number.isFinite(me!=null?me:NaN)?me:Number.isFinite(Te)?Te:null;if($==null)return I;const fe=M($,ie);return fe.start!==fe.end&&I.push(fe),I},T=Math.max(1,360*60*1e3*Cw),O=(te,he)=>!(te.start-he.end>=T||he.start-te.end>=T),L=(te,he)=>he.some(I=>{var ie;return((ie=S.get(te))!=null?ie:[]).some(F=>O(I,F))}),N=(te,he=new Set)=>{const I=b.get(te);if(I!=null)return I;if(he.has(te))return 1;he.add(te);const ie=u.get(te);if(!ie||te===n)return he.delete(te),b.set(te,0),0;const F=y(ie),me=F?N(F,he)+1:1;return he.delete(te),b.set(te,me),me},q=(te,he=new Set)=>{var Ae,We;const I=g.get(te);if(I)return I.column;if(he.has(te))return 0;he.add(te);const ie=u.get(te);if(!ie)return he.delete(te),0;if(te===n){const Ye={name:te,column:0,parentName:null};g.set(te,Ye),x.push(Ye);const lt=E(ie);return S.set(0,[...(Ae=S.get(0))!=null?Ae:[],...lt]),he.delete(te),0}const F=y(ie),me=F&&!he.has(F)?F:null,Te=me?q(me,he):0,$=Math.max(1,N(te)),fe=Math.max(me?Te+1:1,$),G=E(ie);let _e=fe;for(;L(_e,G);)_e+=1;const ve={name:te,column:_e,parentName:me};return g.set(te,ve),x.push(ve),S.set(_e,[...(We=S.get(_e))!=null?We:[],...G]),he.delete(te),_e};q(n);const Y=t.filter(te=>!g.has(te.name)).sort((te,he)=>p(te)-p(he)||te.name.localeCompare(he.name)),Q=Y.filter(te=>y(te)!=null),V=Y.filter(te=>y(te)==null);for(const te of Q)q(te.name);let ee=Math.max(0,...x.map(te=>te.column))+1+1;for(const te of V){const he=E(te);let I=ee;for(;L(I,he);)I+=1;const ie={name:te.name,column:I,parentName:null};g.set(te.name,ie),x.push(ie),S.set(I,[...(Ve=S.get(I))!=null?Ve:[],...he]),ee=I+1}return x.sort((te,he)=>te.column-he.column||te.name.localeCompare(he.name))}function Aw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Gi=0,Xh=0,Nw=3600*1e3,Dw=3600*1e3,Li=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},No=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function yy(t,n,i=new Map){var V,ee,le,re,Ne,Ve,te,he,I,ie,F,me,Te,$,fe;if(t.length===0)return new Map;const a=[...t].sort((G,_e)=>{const ve=Li(G.date)-Li(_e.date);return ve!==0?ve:G.id!==_e.id?G.id.localeCompare(_e.id):G.visualId.localeCompare(_e.visualId)}),c=new Map;for(const G of t){const _e=(V=G.parentSha)!=null?V:null;if(_e){const ve=(ee=c.get(_e))!=null?ee:new Set;ve.add(G.id),c.set(_e,ve)}for(const ve of(le=i.get(G.id))!=null?le:[]){if(!ve)continue;const Ae=(re=c.get(ve))!=null?re:new Set;Ae.add(G.id),c.set(ve,Ae)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const G of t){const _e=(Ne=y.get(G.branchName))!=null?Ne:new Set;_e.add(G.id),y.set(G.branchName,_e);const ve=(te=(Ve=n.get(G.branchName))==null?void 0:Ve.column)!=null?te:0,Ae=(he=g.get(G.id))!=null?he:new Set;Ae.add(ve),g.set(G.id,Ae);const We=new Set;G.parentSha&&We.add(G.parentSha),x.set(G.visualId,We);const Ye=new Set(We);for(const lt of(I=i.get(G.id))!=null?I:[])lt&&Ye.add(lt);b.set(G.visualId,Ye)}const S=new Set(Array.from(g.keys())),C=Array.from(S),M=new Map,E=G=>{const _e=[];for(const ve of C)No(ve,G)&&_e.push(ve);return _e},T=new Map;for(const G of C)T.set(G,new Set);for(const G of t){const _e=E(G.id);if(_e.length===0)continue;const ve=(ie=b.get(G.visualId))!=null?ie:new Set,Ae=new Set;for(const We of ve)for(const Ye of E(We))Ae.add(Ye);for(const We of _e){const Ye=(F=T.get(We))!=null?F:new Set;for(const lt of Ae)Ye.add(lt);T.set(We,Ye)}}const O=new Map,L=(G,_e=new Set)=>{var Ye;const ve=O.get(G);if(ve)return ve;if(_e.has(G))return new Set;_e.add(G);const Ae=(Ye=T.get(G))!=null?Ye:new Set,We=new Set;for(const lt of Ae){We.add(lt);for(const Bt of L(lt,_e))We.add(Bt)}return _e.delete(G),O.set(G,We),We},N=(G,_e)=>{if(No(G,_e))return!0;const ve=E(G),Ae=E(_e);for(const We of ve){const Ye=L(We);for(const lt of Ae)if(Ye.has(lt))return!0}for(const We of Ae){const Ye=L(We);for(const lt of ve)if(Ye.has(lt))return!0}return!1};let q=1;const Y=(G,_e)=>{var Xe,He,Fe,tt,it,gt,bt,$t,at;const ve=(He=(Xe=n.get(G.branchName))==null?void 0:Xe.column)!=null?He:0,Ae=(Fe=y.get(G.branchName))!=null?Fe:new Set,Ye=!(!!G.parentSha&&Ae.has(G.parentSha))&&G.parentSha?G.parentSha:null,lt=Array.from(_e).flatMap(P=>E(P).flatMap(J=>{var ge;return(ge=M.get(J))!=null?ge:[]})),Bt=(G.kind==="branch-created"||G.kind==="stash")&&lt.length>0?Math.max(...lt)+1:null,Kt=lt.length>0?Math.max(...lt)+1:1,Ze=(tt=c.get(G.id))!=null?tt:new Set,zt=Array.from(Ze).flatMap(P=>{var J;return Array.from((J=g.get(P))!=null?J:[])}).some(P=>P!==ve),qe=new Date(G.date).getTime(),wt=Math.max(Kt,1);let ke=null;for(let P=wt;P<q;P+=1){const J=(it=d.get(P))!=null?it:[];if(J.length===0||zt||p.has(P))continue;const ge=(gt=b.get(G.visualId))!=null?gt:new Set;if(!(J.some(Ee=>N(G.id,Ee.sha)?!0:Array.from(ge).some(Ie=>No(Ie,Ee.sha)))||J.some(Ee=>Ee.column===ve)||!Number.isFinite(qe)||!J.every(Ee=>{if(!Number.isFinite(Ee.time))return!1;const Ie=!!Ye&&!!Ee.branchEntryParentSha&&Ye===Ee.branchEntryParentSha?Dw:Nw;return Math.abs(Ee.time-qe)<=Ie}))){ke=P;break}}Bt!=null&&(ke=Bt),ke==null&&(ke=Math.max(Kt,q)),u.set(G.visualId,ke),ke>=q&&(q=ke+1);const se=(bt=d.get(ke))!=null?bt:[];se.push({visualId:G.visualId,sha:G.id,column:ve,time:qe,branchEntryParentSha:Ye}),d.set(ke,se),zt&&p.add(ke);for(const P of _e){const J=($t=h.get(P))!=null?$t:[];J.push(ke),h.set(P,J)}const Re=(at=M.get(G.id))!=null?at:[];Re.push(ke),M.set(G.id,Re)};for(const G of a){const _e=(me=x.get(G.visualId))!=null?me:new Set;Y(G,_e)}const Q=Math.max(1,a.length*2);for(let G=0;G<Q;G+=1){let _e=!1;for(const ve of a){const Ae=(Te=x.get(ve.visualId))!=null?Te:new Set;if(Ae.size===0)continue;const We=($=u.get(ve.visualId))!=null?$:1;let Ye=1;for(const lt of Ae){const Bt=E(lt).flatMap(Kt=>{var Ze;return(Ze=M.get(Kt))!=null?Ze:[]});Bt.length>0&&(Ye=Math.max(Ye,Math.max(...Bt)+1))}if(We<Ye){u.set(ve.visualId,Ye);const lt=(fe=M.get(ve.id))!=null?fe:[];lt.length===0?M.set(ve.id,[Ye]):M.set(ve.id,[...lt.slice(0,-1),Ye]),_e=!0}}if(!_e)break}return u}function Mc(t){var Vs,wo,Ho,Ut,oo,ks,Uo,wi,So,Ds,Vo,Ys,jn,Co,mo,ys,po,an,Ws,Rs,io,ws,ko,Fs,jo,Mn,Yo,En,Vn,Rn,Xs,js,Bs,Wo,ao,hs,Ss,Ro,_o,go,Bo,Lo,Si,ta,Ii,Pi,ni,Tt,Ci,ki,Hi,fi,yo,Fo,hi;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:y,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:S,gridFocusSha:C,checkedOutRef:M,orientation:E="horizontal",nodePositionOverrides:T={}}=t,O=E==="horizontal",L=new Map(i.map(j=>[j.name,j])),N=new Map(n.map(j=>[j.name,j])),q=jw([...a.map(j=>{var U,ue,Ce,Pe;return{id:j.fullSha,branchName:d,message:(U=j.prTitle)!=null?U:j.sha,author:"",date:j.date,parentSha:(Ce=(ue=j.parentShas)==null?void 0:ue[0])!=null?Ce:null,parentShas:(Pe=j.parentShas)!=null?Pe:[]}}),...((Vs=h[d])!=null?Vs:[]).map(j=>Mr(d,j)),...c.map(j=>Mr(j.branch||"",j)),...u.map(j=>Mr(j.branch||"",j))]),Y=new Map,Q=new Map;for(const j of i){if(j.name===d)continue;const U=Gx(j.name,y,h);Q.set(j.name,U);const ue=Fx(U.map(Nt=>Mr(j.name,Nt)));if(ue.length>0){Y.set(j.name,ue);continue}const Ce=(Ut=(Ho=(wo=j.presidesFromSha)!=null?wo:j.divergedFromSha)!=null?Ho:j.createdFromSha)!=null?Ut:null;if(!Ce)continue;const Pe=(oo=c.find(Nt=>No(Nt.fullSha,Ce)||No(Nt.sha,Ce)))==null?void 0:oo.date,Qe=Pe?null:(ks=Object.values(h).flat().find(Nt=>No(Nt.fullSha,Ce)||No(Nt.sha,Ce)))==null?void 0:ks.date,Vt={id:`BRANCH_HEAD:${j.name}:${Ce}`,branchName:j.name,message:`Branch ${j.name}`,author:j.lastCommitAuthor,date:(So=(wi=(Uo=Pe!=null?Pe:Qe)!=null?Uo:j.createdDate)!=null?wi:j.divergedFromDate)!=null?So:j.lastCommitDate,parentSha:Ce,clusterKey:null,childShas:[],kind:"branch-created"};Y.set(j.name,[Vt])}const V=new Set(q.map(j=>j.id)),ee=(Ds=[...q].sort((j,U)=>Li(j.date)-Li(U.date)||j.id.localeCompare(U.id))[0])!=null?Ds:null,le=new Map(Array.from(Y.entries()).map(([j,U])=>[j,new Set(U.map(ue=>ue.id))])),re=new Map;for(const j of i){if(j.name===d)continue;const U=Ew(j.name,h,y);if(U){re.set(j.name,U);continue}const ue=(Vo=Y.get(j.name))==null?void 0:Vo[0];if(ue){const Ce=(Co=(jn=(Ys=j.presidesFromSha)!=null?Ys:j.divergedFromSha)!=null?jn:j.createdFromSha)!=null?Co:null;re.set(j.name,{...ue,parentSha:Ce})}}const Ne=new Map;for(const[j,U]of Y.entries()){const ue=U.find(Ce=>Ce.kind!=="branch-created");ue&&Ne.set(j,ue)}const Ve=new Map;for(const[j,U]of Y.entries()){const ue=U.filter(Qe=>Qe.kind!=="branch-created"),Pe=(mo=(ue.length>0?ue:U)[0])!=null?mo:null;Pe&&Ve.set(j,Pe)}const te=new Map;for(const j of i){if(j.name===d)continue;const U=(ys=Ve.get(j.name))!=null?ys:null,ue=(an=(po=re.get(j.name))==null?void 0:po.parentSha)!=null?an:null,Ce=(io=(Rs=(Ws=j.presidesFromSha)!=null?Ws:j.divergedFromSha)!=null?Rs:j.createdFromSha)!=null?io:null,Pe=(ws=U==null?void 0:U.parentSha)!=null?ws:null,Qe=(ko=Pe!=null?Pe:ue)!=null?ko:Ce;Qe&&te.set(j.name,Qe)}const he=j=>{var Qe,Vt,Nt,Zt,Gt,rn,xn,cn;const U=(Qe=p[j.name])!=null?Qe:null;if(!(U&&U!==d&&U!==j.name&&L.has(U)))return U!=null?U:"";const Ce=(Zt=(Nt=(Vt=te.get(j.name))!=null?Vt:j.presidesFromSha)!=null?Nt:j.divergedFromSha)!=null?Zt:j.createdFromSha;if(Ce&&((Gt=le.get(U))!=null?Gt:new Set).has(Ce))return U;const Pe=(xn=(rn=re.get(j.name))==null?void 0:rn.parentSha)!=null?xn:null;return Pe&&((cn=le.get(U))!=null?cn:new Set).has(Pe),U},I=j=>{var Pe,Qe,Vt,Nt,Zt,Gt,rn,xn;const U=re.get(j.name),ue=(Zt=(Nt=(Vt=(Qe=(Pe=te.get(j.name))!=null?Pe:U==null?void 0:U.parentSha)!=null?Qe:j.presidesFromSha)!=null?Vt:j.divergedFromSha)!=null?Nt:j.createdFromSha)!=null?Zt:null;if(!j.parentBranch&&!ue||!ue)return null;if(he(j)===d){if(V.has(ue))return ue;const cn=(Gt=U==null?void 0:U.parentSha)!=null?Gt:null;return cn&&V.has(cn)?cn:(xn=(rn=ee==null?void 0:ee.id)!=null?rn:cn)!=null?xn:ue}return V.has(ue),ue},ie=j=>I(j),F=new Map;for(const j of[...c,...u]){const U={...Mr(j.branch||"",j),visualId:`${j.branch||""}:${j.fullSha}`};F.set(j.fullSha,U)}const me=new Map(F),Te=j=>{me.has(j.id)||me.set(j.id,j)},$=new Set(u.map(j=>j.fullSha)),fe=new Map(Array.from(Y.entries()).map(([j,U])=>[j,new Set(U.map(ue=>ue.id))])),G=new Set;for(const j of fe.values())for(const U of j)G.add(U);for(const j of q)G.has(j.id)||Te({...j,visualId:`${j.branchName}:${j.id}`});for(const[j,U]of Y.entries())for(const ue of U)Te({...ue,visualId:`${j}:${ue.id}`});const ve=[...Array.from(me.values()).map(j=>({...j,visualId:`${j.branchName}:${j.id}`}))].sort((j,U)=>Li(j.date)-Li(U.date)||j.id.localeCompare(U.id)),Ae=new Map;for(const j of ve){const U=(Fs=Ae.get(j.branchName))!=null?Fs:new Set;U.add(j.id),Ae.set(j.branchName,U)}const We=(j,U)=>{const ue=Ae.get(j);if(!ue||ue.size===0)return!1;for(const Ce of ue)if(No(Ce,U))return!0;return!1},Ye=(j,U)=>{const ue=Array.from(Ae.entries()).filter(([Ce])=>Ce!==U).filter(([,Ce])=>Array.from(Ce).some(Pe=>No(Pe,j))).map(([Ce])=>Ce);return ue.length>0?ue.sort()[0]:j.slice(0,7)},lt=[],Bt=new Map,Kt=new Map;for(const j of a){const U=j.fullSha,ue=j.targetBranch,Ce=j.targetCommitSha;if(!U||!ue||!Ce||!We(ue,Ce))continue;const Pe=((jo=j.parentShas)!=null?jo:[]).slice(1).filter(Vt=>!!Vt&&!No(Vt,U));if(Pe.length===0)continue;const Qe=(Mn=Kt.get(U))!=null?Mn:new Set;for(const Vt of Pe){Qe.add(Vt);const Nt=Ye(Vt,ue);lt.push({sourceCommitSha:Vt,sourceBranchName:Nt,mergeCommitSha:U,targetCommitSha:Ce,targetBranchName:ue});const Zt=(Yo=Bt.get(Nt))!=null?Yo:new Map,Gt=(En=Zt.get(Vt))!=null?En:new Set;Gt.add(ue),Zt.set(Vt,Gt),Bt.set(Nt,Zt)}Kt.set(U,Qe)}const Ze=new Map;for(const j of i){if(j.name===d)continue;const U=I(j);U&&Ze.set(j.name,U)}const ot=new Map;for(const j of ve){const U=Kt.get(j.id);if(U&&U.size>0){const Pe=(Vn=ot.get(j.id))!=null?Vn:new Set;for(const Qe of U)Pe.add(Qe);ot.set(j.id,Pe)}if(j.branchName===d)continue;const ue=Ze.get(j.branchName);if(!ue||ue===j.id)continue;const Ce=(Rn=ot.get(j.id))!=null?Rn:new Set;Ce.add(ue),ot.set(j.id,Ce)}const zt=new Map,qe=new Map;for(const j of ve){if(qe.set(j.id,j),j.parentSha){const U=(Xs=zt.get(j.parentSha))!=null?Xs:new Set;U.add(j.id),zt.set(j.parentSha,U)}for(const U of(js=ot.get(j.id))!=null?js:[]){if(!U)continue;const ue=(Bs=zt.get(U))!=null?Bs:new Set;ue.add(j.id),zt.set(U,ue)}}const wt=new Map;for(const[j,U]of zt.entries())wt.set(j,Array.from(U));const ke=new Set(["branch-created","stash"]),se=new Set,Re=j=>{if(!j)return null;const U=ve.find(ue=>No(ue.id,j)||No(ue.visualId.split(":").slice(1).join(":"),j));return U!=null?U:null};for(const j of ve){if(j.parentSha){const ue=Re(j.parentSha),Ce=!!ue&&se.has(ue.visualId);ue&&(j.kind==="stash"||j.kind==="branch-created"||Ce)&&se.add(ue.visualId)}const U=(Wo=zt.get(j.id))!=null?Wo:new Set;(U.size>1||Array.from(U).map(ue=>qe.get(ue)).some(ue=>ue!=null&&ue.kind!=null&&ke.has(ue.kind)))&&se.add(j.visualId)}const Xe=ve.map(j=>{var U,ue;return{...j,childShas:(ue=(U=wt.get(j.id))!=null?U:j.childShas)!=null?ue:[]}}),He=yy(Xe,N,ot),Fe=new Map;for(const j of Xe){const U=(ao=Fe.get(j.branchName))!=null?ao:[];U.push(j),Fe.set(j.branchName,U)}const tt=new Map,it=new Map,gt=new Map,bt=new Map,$t=new Map,at=(j,U)=>{var Gt,rn,xn,cn,Gs;if(U.length===0)return[];const ue=[...U].sort((Yt,ss)=>{var ro,qs;const xs=(ro=He.get(Yt.visualId))!=null?ro:Number.MAX_SAFE_INTEGER,cs=(qs=He.get(ss.visualId))!=null?qs:Number.MAX_SAFE_INTEGER;return xs!==cs?xs-cs:Li(Yt.date)-Li(ss.date)||Yt.id.localeCompare(ss.id)}),Ce=new Map;let Pe=null,Qe=0;const Vt=Yt=>Yt.kind==="uncommitted"?"uncommitted":Yt.kind==="stash"?"stash":Yt.kind==="branch-created"?"branch-created":$.has(Yt.id)?"unpushed":"pushed";let Nt=null;for(const Yt of ue){const ss=Yt.kind==="stash"||Yt.kind==="branch-created",xs=se.has(Yt.visualId);if(ss)continue;const cs=Vt(Yt);(!Pe||Nt!=null&&Nt!==cs)&&(Qe+=1,Pe=`cluster:${j}:segment:${Qe}`);const ro=(Gt=Ce.get(Pe))!=null?Gt:[];ro.push(Yt),Ce.set(Pe,ro),xs&&(Pe=null),Nt=cs}const Zt=[];for(const[Yt,ss]of Ce.entries()){if(ss.length===0)continue;const cs=[...ss].sort((Ls,Ks)=>{var K,ce;const D=(K=He.get(Ls.visualId))!=null?K:Number.MIN_SAFE_INTEGER,X=(ce=He.get(Ks.visualId))!=null?ce:Number.MIN_SAFE_INTEGER;return D!==X?X-D:Li(Ks.date)-Li(Ls.date)||Ks.id.localeCompare(Ls.id)})[0].visualId,ro={branchName:j,key:Yt,commitIds:ss.map(Ls=>Ls.visualId),leadId:cs,count:ss.length};Zt.push(ro);const qs=(rn=$t.get(Yt))!=null?rn:0;if(!bt.has(Yt))bt.set(Yt,cs);else{const Ls=bt.get(Yt),Ks=qe.get(Ls.split(":").slice(1).join(":"));if(Ks){const D=(xn=He.get(Ks.visualId))!=null?xn:Number.MIN_SAFE_INTEGER;((cn=He.get(cs))!=null?cn:Number.MIN_SAFE_INTEGER)>D&&bt.set(Yt,cs)}}$t.set(Yt,Math.max(qs,ss.length));for(const Ls of ro.commitIds){it.set(Ls,Yt);const Ks=Ls.split(":").slice(1).join(":"),D=(Gs=gt.get(Ks))!=null?Gs:[];D.includes(Yt)||D.push(Yt),gt.set(Ks,D)}}return Zt};for(const[j,U]of Fe.entries())tt.set(j,at(j,U));const P=new Map;for(const j of Xe)P.set(j.id,j);const J=j=>{if(!j)return"none";const U=Array.from(P.values()).find(ue=>No(ue.id,j)||No(ue.id.slice(0,7),j)||No(j,ue.id));return U?`${U.id.slice(0,7)} ${U.branchName}`:j.slice(0,7)},ge=b?["Lane rows (expected):",...[...n].sort((j,U)=>j.column-U.column||j.name.localeCompare(U.name)).map(j=>{var U;return`  row=${j.column} branch=${j.name} parent=${(U=j.parentName)!=null?U:"none"}`}),"",...i.flatMap(j=>{var Vt,Nt,Zt,Gt,rn,xn,cn,Gs;const U=(Vt=h[j.name])!=null?Vt:[],ue=[...(Nt=Q.get(j.name))!=null?Nt:[]].reverse(),Ce=new Set(((Zt=Y.get(j.name))!=null?Zt:[]).map(Yt=>Yt.id)),Pe=(rn=(Gt=ue.find(Yt=>!Yt.parentSha||!ue.some(ss=>{var xs;return No(ss.fullSha,(xs=Yt.parentSha)!=null?xs:"")})))!=null?Gt:ue[0])!=null?rn:null,Qe=(cn=(xn=Pe==null?void 0:Pe.parentSha)!=null?xn:te.get(j.name))!=null?cn:null;return[`Branch ${j.name}`,`  ahead=${(Gs=y[j.name])!=null?Gs:0} previews=${ue.length} rendered=${Ce.size}`,`  db parent commit=${J(Qe)}`,`  db child commit=${Pe?`${Pe.fullSha.slice(0,7)} ${j.name}`:"none"}`,...ue.map(Yt=>{const ss=Ce.has(Yt.fullSha)?"visible":"hidden",xs=Ce.has(Yt.fullSha)?"kept by render set":"dropped by render set";return`  ${ss} ${Yt.fullSha.slice(0,7)} ${Yt.message} [${xs}]`}),U.length===0?"  no preview data":null].filter(Yt=>Yt!=null)})]:[],Se=b?Array.from(Y.entries()).map(([j,U])=>[`Branch debug ${j}`,...U.map(ue=>`  ${ue.id.slice(0,7)} ${ue.message}`)].join(`
`)):[],et=He,Ke=Tm/Fu,Ee=20/Fu,_t=O?us+Ke+Ee:Yu+Ke+Ee,Ie=O?Yu+Ke+Ee:rl,Ft=Math.max(0,...Xe.map(j=>{var U;return(U=et.get(j.visualId))!=null?U:1})),xt=Xe.map(j=>{var Pe,Qe;const U=N.get(j.branchName),ue=(Pe=et.get(j.visualId))!=null?Pe:1,Ce=(Qe=U==null?void 0:U.column)!=null?Qe:0;return O?{commit:j,row:ue,column:Ce,x:Ta+(ue-1)*_t,y:Ea+Ce*Ie}:{commit:j,row:ue,column:Ce,x:Ta+Ce*rl,y:Ea+(Ft-ue)*_t}}),ct=j=>{var ue;const U=(ue=T[j.commit.visualId])!=null?ue:T[j.commit.id];return U?{...j,x:U.x,y:U.y}:j},Lt=xt.map(ct),Rt=S.trim().toLowerCase(),Qt=Rt?Lt.filter(j=>{const U=j.commit.id.toLowerCase(),ue=j.commit.id.slice(0,7).toLowerCase(),Ce=j.commit.message.toLowerCase(),Pe=j.commit.branchName.toLowerCase();return U.includes(Rt)||ue.includes(Rt)||Ce.includes(Rt)||Pe.includes(Rt)}):Lt,ut=C&&(hs=Lt.find(j=>j.commit.id===C))!=null?hs:null,nt=new Set(Qt.map(j=>j.commit.id)),jt=(Ss=M==null?void 0:M.headSha)!=null?Ss:null,pt=(()=>{var U,ue;const j=(U=M==null?void 0:M.branchName)!=null?U:null;return!jt||!j?null:(ue=it.get(`${j}:${jt}`))!=null?ue:null})(),At=new Set;for(const[j,U]of $t.entries())U>1&&j!==pt&&At.add(j);const mt=[...ve].filter(j=>{var Qe;const U=it.get(j.visualId);if(!U)return!0;const ue=bt.get(U),Ce=(Qe=$t.get(U))!=null?Qe:1,Pe=g.has(U)||!At.has(U)&&!x.has(U);return Ce<=1||Pe||ue===j.visualId}),Ot=yy(mt,N,ot),hn=Tm/Fu,ln=20/Fu,on=O?us+hn+ln:Yu+hn+ln,Xn=O?Yu+hn+ln:rl,Hn=Math.max(0,...ve.map(j=>{var U;return(U=He.get(j.visualId))!=null?U:1})),Sn=Math.max(0,...mt.map(j=>{var U;return(U=Ot.get(j.visualId))!=null?U:1})),vn=Math.max(0,Hn-Sn),Xt=[...mt.map(j=>{var Pe,Qe;const U=N.get(j.branchName),ue=(Pe=Ot.get(j.visualId))!=null?Pe:1,Ce=(Qe=U==null?void 0:U.column)!=null?Qe:0;return ct(O?{commit:j,row:ue,column:Ce,x:Ta+(vn+ue-1)*on,y:Ea+Ce*Xn}:{commit:j,row:ue,column:Ce,x:Ta+Ce*rl,y:Ea+(Sn-ue)*on})})].sort((j,U)=>j.row!==U.row?j.row-U.row:j.column!==U.column?j.column-U.column:j.commit.visualId.localeCompare(U.commit.visualId)).map(j=>({...j})),$n=new Set;for(const j of Xt){let U=j.row,ue=`${j.column}:${U}`;for(;$n.has(ue);)U+=1,ue=`${j.column}:${U}`;j.row=U,$n.add(ue)}const rt=Math.max(0,...Xt.map(j=>j.row));for(const j of Xt){if(O){j.x=Ta+(vn+j.row-1)*on,j.y=Ea+j.column*Xn;continue}j.x=Ta+j.column*rl,j.y=Ea+(rt-j.row)*on}const In=new Map;for(const j of Xt){const U=(Ro=In.get(j.commit.id))!=null?Ro:[];U.push(j),In.set(j.commit.id,U)}const fo=new Map;for(const j of Xt){const U=it.get(j.commit.visualId);if(!U)continue;const ue=fo.get(U);(!ue||(O?j.x>ue.x:j.y<ue.y))&&fo.set(U,j)}const Zo=(j,U)=>`${j.toFixed(1)} ${U.toFixed(1)}`,Is=Math.max(0,...Xt.map(j=>j.row)),Cs=Math.max(0,...n.map(j=>j.column)),ui=Math.max(0,...Xt.map(j=>j.x+us)),_s=Math.max(0,...Xt.map(j=>j.y+vl+Ts)),bo=Math.max(O?Ta*2+Math.max(0,Is-1)*on+us+Yh+ln:Ta*2+(Cs+1)*rl,ui+Ta),Jo=Math.max(O?Ea*2+Cs*Xn+Ts+Yh+ln:Ea*2+Math.max(0,Is-1)*on+Ts+Yh+ln,_s+Ea),Ns=[],Cn=new Map(i.map(j=>{var ue,Ce;const U=new Date((Ce=(ue=j.createdDate)!=null?ue:j.divergedFromDate)!=null?Ce:j.lastCommitDate).getTime();return[j.name,Number.isFinite(U)?U:0]})),ei=j=>{var U;return(U=Cn.get(j))!=null?U:0},vs=[],gn=j=>{b&&vs.push(j)},Un=new Set,so=new Map,Ps=(j,U)=>{var Ce;const ue=(Ce=so.get(j))!=null?Ce:[];ue.includes(U)||ue.push(U),so.set(j,ue)},ls=new Set,ns=new Set,Hs=new Set,yn=(j,U)=>{var Pe,Qe;if(!j)return null;const ue=Wu(In,j,U);if(ue)return ue;const Ce=(Pe=it.get(`${U!=null?U:d}:${j}`))!=null?Pe:it.get(j);return Ce&&(Qe=fo.get(Ce))!=null?Qe:null},mn=new Set;for(const j of i){const U=ie(j);U&&ns.add(U);const ue=(_o=te.get(j.name))!=null?_o:null;ue&&Hs.add(ue)}const tn=j=>{var Pe;const U=yn(j.id,j.branchName);if(U)return U;const ue=it.get(j.visualId);if(!ue)return null;const Ce=bt.get(ue);return Ce&&(Pe=Xt.find(Qe=>Qe.commit.id===Ce))!=null?Pe:null},Pn=(j,U)=>j?Wu(In,j,U):null,Io=(j,U)=>O?{x:j.x-Gi,y:j.y+Ts/2,face:"left"}:{x:j.x+us/2,y:j.y+Ts+Gi,face:"bottom"},Po=j=>O?{x:j.x-Gi,y:j.y+Ts/2,face:"left"}:{x:j.x+us/2,y:j.y+Ts+Gi,face:"bottom"},di=(j,U)=>j.column!==U.column?!0:O?j.commit.branchName!==U.commit.branchName:!1,Us=(j,U,ue)=>{if(!O)return{x:U?j.x+us:j.x+us/2,y:U?j.y+Ts/2:j.y,face:U?"right":"top"};if(!U)return{x:j.x+us+Gi,y:j.y+Ts/2,face:"right"};if(ue&&ue.column===j.column&&ue.commit.branchName!==j.commit.branchName){if(ue.x>j.x)return{x:j.x+us/2,y:j.y+Ts+Gi,face:"bottom"};if(ue.x<j.x)return{x:j.x+us/2,y:j.y-Gi,face:"top"}}return!ue||ue.column===j.column?{x:j.x+us+Gi,y:j.y+Ts/2,face:"right"}:ue.column>j.column?{x:j.x+us/2,y:j.y+Ts+Gi,face:"bottom"}:{x:j.x+us/2,y:j.y-Gi,face:"top"}},ti=j=>O?{x:j.x+us/2,y:j.y+Ts+Gi,face:"bottom"}:{x:j.x+us,y:j.y+Ts/2,face:"right"},gs=(j,U)=>Wu(In,j,U),vo=(j,U)=>Pn(j,U),kn=[],ho=new Set;for(const j of lt){const U=(go=yn(j.targetCommitSha,j.targetBranchName))!=null?go:null;if(!U){gn({id:`merge:${j.mergeCommitSha}:${j.sourceCommitSha}:target`,kind:"merge",parent:j.sourceCommitSha,child:j.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const ue=j.sourceCommitSha,Ce=`merge:${j.mergeCommitSha}:${ue!=null?ue:"unknown"}`;if(!ue||No(ue,j.targetCommitSha)){gn({id:Ce,kind:"merge",parent:ue!=null?ue:"unknown",child:j.targetCommitSha,rendered:!1,reason:ue?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Pe=(Bo=Wu(In,ue))!=null?Bo:null;if(!Pe){gn({id:Ce,kind:"merge",parent:ue,child:j.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Pe.commit.id===U.commit.id){gn({id:Ce,kind:"merge",parent:Pe.commit.id,child:U.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let Qe,Vt,Nt;const Zt=O?U.x+us/2:U.x+us-Xh,Gt=O?U.y+Ts+Xh:U.y+Ts/2,rn=O?"bottom":"right";O?(Qe=Pe.x+us+Xh,Vt=Pe.y+Ts/2,Nt="right"):(Qe=Pe.x+us/2,Vt=Pe.y,Nt="top");const xn=`${Qe.toFixed(2)}:${Vt.toFixed(2)}:${Zt.toFixed(2)}:${Gt.toFixed(2)}`;if(ho.has(xn)){gn({id:Ce,kind:"merge",parent:Pe.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}ho.add(xn),kn.push({id:Ce,fromX:Qe,fromY:Vt,toX:Zt,toY:Gt,fromFace:Nt,toFace:rn,zIndex:ei(Pe.commit.branchName)}),gn({id:Ce,kind:"merge",parent:Pe.commit.id,child:U.commit.id,rendered:!0,reason:`merge connector rendered to ${j.targetBranchName}`})}const fs=new Set;for(const j of i){if(j.name===d)continue;const U=re.get(j.name);if(!U)continue;const ue=he(j),Ce=gs((Lo=te.get(j.name))!=null?Lo:"",ue),Pe=(Si=Ne.get(j.name))!=null?Si:U,Qe=(ta=vo(Pe.id,j.name))!=null?ta:tn(Pe);if(!Ce||!Qe||Ce.commit.id===Qe.commit.id){const rn=it.get(`${j.name}:${U.id}`),xn=it.get(`${j.name}:${Pe.id}`),cn=!!rn&&!At.has(rn),Gs=!!xn&&!At.has(xn),Yt=!!rn&&!g.has(rn)&&(cn?x.has(rn):!0),ss=!!xn&&!g.has(xn)&&(Gs?x.has(xn):!0);!Ce&&!Yt&&Ps((Ii=Qe==null?void 0:Qe.commit.id)!=null?Ii:U.id,"Missing parent node"),!Qe&&!ss&&Ps(U.id,"Missing child node"),gn({id:`branch:${(Pi=Ce==null?void 0:Ce.commit.id)!=null?Pi:"null"}->${(ni=Qe==null?void 0:Qe.commit.id)!=null?ni:"null"}`,kind:"branch",parent:(Tt=Ce==null?void 0:Ce.commit.id)!=null?Tt:"null",child:(Ci=Qe==null?void 0:Qe.commit.id)!=null?Ci:"null",rendered:!1,reason:Ce?Qe?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Vt=`branch:${Ce.commit.id}->${Qe.commit.id}`;if(mn.has(Vt)){gn({id:Vt,kind:"branch",parent:Ce.commit.id,child:Qe.commit.id,rendered:!1,reason:"duplicate connector key"});continue}mn.add(Vt),ls.add(Ce.commit.id);const Nt=di(Ce,Qe);Ce.commit.branchName!==Qe.commit.branchName&&fs.add(Ce.commit.id);const Zt=ti(Ce),Gt=Po(Qe);Ns.push({id:Vt,fromX:Zt.x,fromY:Zt.y,toX:Gt.x,toY:Gt.y,fromFace:Zt.face,toFace:Gt.face,zIndex:ei(Qe.commit.branchName)}),gn({id:Vt,kind:"branch",parent:Ce.commit.id,child:Qe.commit.id,rendered:!0,reason:Nt?"branch connector rendered":O?"horizontal connector rendered":"vertical connector rendered"})}for(const j of ve){const U=tn(j);if(!U)continue;const ue=(ki=j.parentSha)!=null?ki:null;if(!ue)continue;const Ce=(Hi=yn(ue,j.branchName))!=null?Hi:gs(ue,j.branchName);if(!Ce){const Zt=(fi=it.get(`${j.branchName}:${ue}`))!=null?fi:it.get(ue),Gt=!!Zt&&!At.has(Zt);!!Zt&&!g.has(Zt)&&(Gt?x.has(Zt):!0)||Ps(j.id,"Missing parent node"),gn({id:`${j.visualId}->${ue}`,kind:"ancestry",parent:ue,child:j.id,rendered:!1,reason:"missing parent node"});continue}if(U.commit.id===Ce.commit.id){Ps(U.commit.id,"Parent and child resolve to the same node"),gn({id:`${Ce.commit.id}->${U.commit.id}`,kind:"ancestry",parent:Ce.commit.id,child:U.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Pe=`${j.branchName}:${(yo=Ce.commit.visualId)!=null?yo:Ce.commit.id}->${U.commit.visualId}`;if(mn.has(Pe)){Ps(Ce.commit.id,"Duplicate connector key"),Ps(U.commit.id,"Duplicate connector key"),gn({id:Pe,kind:"ancestry",parent:Ce.commit.id,child:U.commit.id,rendered:!1,reason:"duplicate connector key"});continue}mn.add(Pe),ls.add(Ce.commit.id);const Qe=di(Ce,U),Vt=Us(Ce,Qe,U),Nt=Io(U);Ns.push({id:Pe,fromX:Vt.x,fromY:Vt.y,toX:Nt.x,toY:Nt.y,fromFace:Vt.face,toFace:Nt.face,zIndex:ei(U.commit.branchName)}),gn({id:Pe,kind:"ancestry",parent:Ce.commit.id,child:U.commit.id,rendered:!0,reason:Qe?"ancestry connector rendered":O?"horizontal ancestry rendered":"vertical ancestry rendered"}),Un.add(Ce.commit.id),Un.add(U.commit.id)}const Gn=new Map;for(const j of Xt){const U=(Fo=Gn.get(j.commit.branchName))!=null?Fo:[];U.push(j),Gn.set(j.commit.branchName,U)}for(const[j,U]of Gn.entries()){if(U.length<2)continue;const ue=[...U].sort((Ce,Pe)=>{var Qe,Vt,Nt,Zt,Gt,rn,xn,cn;return Ce.row!==Pe.row?Ce.row-Pe.row:Li((Vt=(Qe=Ce==null?void 0:Ce.commit)==null?void 0:Qe.date)!=null?Vt:null)-Li((Zt=(Nt=Pe==null?void 0:Pe.commit)==null?void 0:Nt.date)!=null?Zt:null)||((rn=(Gt=Ce==null?void 0:Ce.commit)==null?void 0:Gt.id)!=null?rn:"").localeCompare((cn=(xn=Pe==null?void 0:Pe.commit)==null?void 0:xn.id)!=null?cn:"")});for(let Ce=1;Ce<ue.length;Ce+=1){const Pe=ue[Ce-1],Qe=ue[Ce];if(Pe.commit.id===Qe.commit.id)continue;const Vt=(hi=Qe.commit.parentSha)!=null?hi:null;if(Vt&&gs(Vt,Qe.commit.branchName))continue;const Nt=`chain:${j}:${Pe.commit.id}->${Qe.commit.id}`;if(mn.has(Nt)){Ps(Pe.commit.id,"Duplicate branch chain connector"),Ps(Qe.commit.id,"Duplicate branch chain connector"),gn({id:Nt,kind:"ancestry",parent:Pe.commit.id,child:Qe.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}mn.add(Nt);const Zt=di(Pe,Qe),Gt=Us(Pe,Zt,Qe),rn=Io(Qe);Ns.push({id:Nt,fromX:Gt.x,fromY:Gt.y,toX:rn.x,toY:rn.y,fromFace:Gt.face,toFace:rn.face,zIndex:ei(Qe.commit.branchName)}),gn({id:Nt,kind:"ancestry",parent:Pe.commit.id,child:Qe.commit.id,rendered:!0,reason:"branch chain rendered"}),Un.add(Pe.commit.id),Un.add(Qe.commit.id)}}return{branchByName:L,laneByName:N,mainCommits:q,branchCommitsByLane:Y,branchPreviewSets:Q,allCommits:ve,clustersByBranch:tt,clusterKeyByCommitId:it,clusterKeyBySha:gt,leadByClusterKey:bt,clusterCounts:$t,debugRows:ge,branchDebugRows:Se,nodes:xt,normalizedSearchQuery:Rt,matchingNodes:Qt,matchingNodeIds:nt,focusedNode:ut,checkedOutClusterKey:pt,defaultCollapsedClumps:At,visibleCommitsList:mt,renderNodes:Xt,visibleNodesBySha:In,visibleNodeByClusterKey:fo,pointFormatter:Zo,contentWidth:bo,contentHeight:Jo,connectors:Ns,mergeConnectors:kn,connectorDecisions:vs,nodeWarnings:so,connectorParentShas:ls,branchStartShas:ns,branchOffNodeShas:Hs,crossBranchOutgoingShas:fs,commitIdsWithRenderedAncestry:Un,branchBaseCommitByName:re,firstBranchCommitByName:Ve,mergeDestinations:lt,mergeTargetBranchesBySourceBranchAndCommitSha:Bt}}const Rw=8,Bw=44,xy=120,by=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function qx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Rw){const Y=d/g,Q=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+Y*V,c1y:n+Q*V,c2x:i-Y*V,c2y:a-Q*V}}if(Math.min(p,y)<Bw){const Y=d/g,Q=h/g,V=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:t+Y*V,c1y:n+Q*V,c2x:i-Y*V,c2y:a-Q*V}}const S=Math.min(160,p*.42),C=Math.min(100,p*.22),M=Math.min(120,y*.32),E=Math.min(160,y*.42),T=by(c),O=by(u);if(!(T==="v"&&O==="h"||T==="v"&&O==null&&y>=p||T==null&&O==="h"&&y>=p||T==="v"&&O==="v"||T==null&&O==null&&y>p)){const Y=i,Q=n;return{kind:"elbowH",cx:Y,cy:Q,s1c1x:t+x*S,s1c1y:n,s1c2x:Y-x*C,s1c2y:Q,s2c1x:Y,s2c1y:Q+b*M,s2c2x:i,s2c2y:a-b*E}}const N=t,q=a;return{kind:"elbowV",cx:N,cy:q,s1c1x:t,s1c1y:n+b*E,s1c2x:N,s1c2y:q-b*M,s2c1x:N+x*S,s2c1y:q,s2c2x:i-x*C,s2c2y:a}}function Lw(t,n,i,a,c,u){const d=qx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function vy(t,n,i,a,c,u,d){const h=qx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const S=Math.max(8,Math.min(xy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),C=i>=t?1:-1,M=a>=n?1:-1,E=h.cx-C*S,T=h.cy+M*S;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(E-C*S*.5,h.cy)} ${c(E,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,T)}`,`C ${c(h.cx,T+M*S*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(xy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),y=i>=t?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const hp=2.25,ac=hp/2,Ow=.45,zw=.01,ua=hp,kd=10,$w=-100,wy=0,Sy=.9,Iw=.9,Cy=.001,Gh=.001,Pw=12,Hw=us+48;function Dn(...t){return t.filter(Boolean).join(" ")}function Uw(t){return Math.max(Ow,Math.min(hp,t))}function Vw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Kx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Yw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of t)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function Ww(t,n,i,a,c,u,d){const h=Lw(t,n,i,a,u,d),p=Yw(h);return Kx(c,p)}function Qx(t,n){return{left:t.x,top:t.y+n,right:t.x+us,bottom:t.y+vl+Ts+4}}function Fw(t,n){const i=Hw,a=Math.max(120,Math.ceil(vl+Ts+4-n+24)),c=new Map;for(const u of t){const d=Qx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let S=y;S<=g;S++){const C=`${b},${S}`;let M=c.get(C);M||(M=new Set,c.set(C,M)),M.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Xw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let S=h;S<=p;S++)for(let C=y;C<=g;C++){const M=d.get(`${S},${C}`);if(M)for(const E of M)x.add(E)}const b=new Set;for(const S of x){const C=i.get(S);if(!C)continue;const M=Qx(C,a);Kx(n,M)&&b.add(S)}return b}function ky(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ua;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Gw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function jy(t,n,i){const a=n/ua;return!Number.isFinite(a)||a<=0?t:Gw(t,100/a)}function My(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function vi(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Am(t,n){if(n){const i=My(n),a=My(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Am(t,n)}function qw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Kw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:y,onPushCurrentBranch:g,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:S,selectedPushTargets:C,selectedPushLabel:M,canPushCurrentBranch:E,pushCurrentBranchLabel:T,pushableRemoteBranchCount:O,selectedCommitTargetOption:L,mergeInProgress:N,setMergeTargetCommitSha:q,worktrees:Y,currentRepoPath:Q,worktreeMenuOpen:V,setWorktreeMenuOpen:ee,onSwitchToWorktree:le,onRemoveWorktree:re,removeWorktreeInProgress:Ne,setCommitDialogOpen:Ve,setNewBranchDialogOpen:te}){var Bt,Kt;const he=t.length>0,I=t.length>0&&t.every(Ze=>Ze==="WORKING_TREE"),[ie,F]=_.useState(!1),me=_.useRef(null),Te=_.useRef(null),$="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",fe=!!p&&d&&!i&&!n&&(!he||I),G=!!g&&E&&!he&&!u,_e=!!b&&C.length>0&&!u,ve=!!x&&O>=2&&!he&&!u,Ae=!!y&&!c&&!he&&!a,We="Push Selected...",Ye=fe?{label:n?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>Ve(!0),disabled:!fe}:G?{label:u?"Pushing...":T,iconSrc:"/icon-pushBranch.svg",run:()=>void(g==null?void 0:g()),disabled:!G}:_e?{label:We,iconSrc:"/icon-pushSelected.svg",run:()=>void(b==null?void 0:b(C.map(Ze=>({branchName:Ze.branchName,targetSha:Ze.targetSha})))),disabled:!_e}:null;return _.useEffect(()=>{const Ze=ot=>{var qe,wt;const zt=ot.target;zt&&((qe=me.current)!=null&&qe.contains(zt)||(wt=Te.current)!=null&&wt.contains(zt)||(F(!1),ee(!1)))};return window.addEventListener("pointerdown",Ze),()=>window.removeEventListener("pointerdown",Ze)},[ee]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:me,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{Ye&&Ye.run()},disabled:!Ye||Ye.disabled,className:Dn($,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[l.jsx("img",{src:(Bt=Ye==null?void 0:Ye.iconSrc)!=null?Bt:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"h-4.5 w-4.5 shrink-0"}),l.jsx("span",{children:(Kt=Ye==null?void 0:Ye.label)!=null?Kt:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>F(Ze=>!Ze),disabled:!Ye,"aria-haspopup":"menu","aria-expanded":ie,className:Dn($,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Yx,{className:"h-3.5 w-3.5 shrink-0"})}),ie&&Ye?l.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{F(!1),Ve(!0)},disabled:!fe,className:Dn($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!fe&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-commit.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),n?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),g==null||g()},disabled:!G,className:Dn($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!G&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushBranch.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),u?"Pushing...":T]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),b==null||b(C.map(Ze=>({branchName:Ze.branchName,targetSha:Ze.targetSha})))},disabled:!_e,className:Dn($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!_e&&"text-muted-foreground opacity-50"),title:M,children:[l.jsx("img",{src:"/icon-pushSelected.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),We]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),x==null||x()},disabled:!ve,className:Dn($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!ve&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-pushAll.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{F(!1),y==null||y()},disabled:!Ae,className:Dn($,"w-full justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Ae&&"text-muted-foreground opacity-50"),children:[l.jsx("img",{src:"/icon-stash.svg",alt:"","aria-hidden":"true",className:"mr-1.5 h-4.5 w-4.5 shrink-0"}),a?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>te(!0),disabled:h,className:Dn($,"pointer-events-auto relative z-10 bg-background"),children:[l.jsx(Wx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),h?"Creating...":"New Branch"]})}),t.length>1&&L.options.length>0&&L.targetBranch&&S?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),L.options.map(Ze=>{const ot=Ze.targetBranch===L.targetBranch;return l.jsx("button",{type:"button",onClick:()=>q(Ze.targetSha),className:Dn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",ot?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:Ze.targetBranch},`merge-${Ze.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void S(L.sources,L.targetBranch),disabled:L.sources.length===0||N,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(gw,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),N?"Merging...":"Confirm"]})]}):null,Y.length>0&&(le||re)?l.jsxs("div",{ref:Te,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>ee(Ze=>!Ze),className:$,children:[l.jsx(fw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),Y.length," ",Y.length===1?"Worktree":"Worktrees"]}),V?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:Y.map(Ze=>{var ot;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:Ze.path,children:Am(Ze,Q)?qw(Ze.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(ot=Ze.branchName)!=null?ot:"detached"," • ",Ze.headSha.slice(0,7)]})]}),Am(Ze,Q)?l.jsxs("div",{className:"flex items-center gap-1",children:[le?l.jsx("button",{type:"button",onClick:()=>{ee(!1),le(Ze.path)},disabled:Ne||Ze.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,re?l.jsx("button",{type:"button",onClick:()=>void re(Ze.path,Ze.isPrunable),disabled:Ne,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ne?"...":"Remove"}):null]}):null]},Ze.path)})}):null]}):null]})})}function Qw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!t);return _.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function Zw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:S,normalizedSearchQuery:C,matchingNodeIds:M,focusedNode:E,renderNodes:T,shouldRenderNode:O,manuallyOpenedClumps:L,manuallyClosedClumps:N,defaultCollapsedClumps:q,leadByClusterKey:Y,clusterKeyByCommitId:Q,clusterCounts:V,commitIdsWithRenderedAncestry:ee,nodeWarnings:le,connectorParentShas:re,branchStartShas:Ne,branchOffNodeShas:Ve,crossBranchOutgoingShas:te,branchBaseCommitByName:he,branchStartAccentClass:I,connectorParentAccentClass:ie,commitCornerRadiusPx:F,lineStrokeWidth:me,pointFormatter:Te,connectors:$,mergeConnectors:fe,cullConnectorPath:G,flushCameraReactTick:_e,setManuallyOpenedClumps:ve,setManuallyClosedClumps:Ae,onCommitCardClick:We,unpushedCommitShasSetByBranch:Ye,checkedOutHeadSha:lt}){const[Bt,Kt]=_.useState(new Set),Ze=_.useRef(null);_.useEffect(()=>{const ke=new Set;V.forEach((Xe,He)=>{(L.has(He)||!q.has(He)&&!N.has(He))&&ke.add(He)});const se=Ze.current;if(se==null){Ze.current=ke;return}const Re=[];if(ke.forEach(Xe=>{se.has(Xe)||Re.push(Xe)}),Re.length>0){Kt(He=>{const Fe=new Set(He);return Re.forEach(tt=>Fe.add(tt)),Fe});const Xe=window.setTimeout(()=>{Kt(He=>{const Fe=new Set(He);return Re.forEach(tt=>Fe.delete(tt)),Fe})},260);return Ze.current=ke,()=>{window.clearTimeout(Xe)}}Ze.current=ke},[V,q,N,L]);const ot=(ke,se)=>{const Re=se.zIndex-ke.zIndex;if(Re!==0)return Re;const Xe=Math.min(ke.fromY,ke.toY),He=Math.min(se.fromY,se.toY),Fe=Xe-He;return Fe!==0?Fe:ke.id.localeCompare(se.id)},zt=fe.filter(ke=>G(ke)).sort(ot),qe=$.filter(ke=>G(ke)).sort(ot),wt=T.filter(ke=>O(ke));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[wt.map(ke=>{var xt,ct,Lt,Rt,Qt,ut;const se=Q.get(ke.commit.visualId),Re=se?L.has(se)||!q.has(se)&&!N.has(se):!1,Xe=se?Y.get(se)===ke.commit.visualId:!1,He=se!=null&&Re&&!Xe&&Bt.has(se),Fe=se&&(xt=V.get(se))!=null?xt:1,tt=ee.has(ke.commit.id),it=(ct=le.get(ke.commit.id))!=null?ct:[],gt=it.length>0&&!tt,bt=S.includes(ke.commit.id),$t=ke.commit.id==="WORKING_TREE"||ke.commit.kind==="uncommitted",at=ke.commit.kind==="stash"||ke.commit.id.startsWith("STASH:"),P=/^STASH:(\d+)$/.exec(ke.commit.id),J=P?`Stash:${P[1]}`:null,ge=at?ke.commit.message.trim()&&ke.commit.message.trim()!=="git-visualizer"?ke.commit.message:"Stashed changes":ke.commit.message,Se=ke.commit.kind==="branch-created"&&ke.commit.id.startsWith("BRANCH_HEAD:"),et=$t||((Rt=(Lt=Ye.get(ke.commit.branchName))==null?void 0:Lt.has(ke.commit.id))!=null?Rt:!1),Ee=($t||lt!=null&&ke.commit.id===lt)&&!bt,_t=Ee?"text-[#38BDF2]":bt?"text-[#158EFC]":"text-muted-foreground",Ie=Ee?{color:"#38BDF2"}:bt?{color:"#158EFC"}:void 0,Ft=(Qt=Ie==null?void 0:Ie.color)!=null?Qt:"#8B8B8B";return l.jsxs(Qw,{fadeIn:He,dataCommitCard:"true",className:Dn("group absolute z-20 cursor-grab active:cursor-grabbing",C&&!M.has(ke.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",C&&M.has(ke.commit.id)?"scale-[1.01]":"",(E==null?void 0:E.commit.id)===ke.commit.id?"z-30":""),style:{left:ke.x,top:ke.y,width:us,height:vl+Ts+4,overflow:"visible"},onClick:nt=>We(nt,ke),onPointerDown:nt=>y(nt,ke),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Dn("min-w-0 h-4 flex-1 text-sm font-medium leading-none",_t,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ie,children:at&&J?J:ke.commit.branchName?`${ke.commit.branchName}/${ke.commit.id.slice(0,7)}`:ke.commit.id.slice(0,7)}),Xe&&Fe>1?l.jsx("button",{type:"button",onMouseDown:nt=>{nt.stopPropagation()},onClick:nt=>{if(nt.stopPropagation(),nt.preventDefault(),!se)return;!q.has(se)?(ve(pt=>{if(!pt.has(se))return pt;const At=new Set(pt);return At.delete(se),At}),Ae(pt=>{const At=new Set(pt);return At.has(se)?At.delete(se):At.add(se),At})):(Ae(pt=>{if(!pt.has(se))return pt;const At=new Set(pt);return At.delete(se),At}),ve(pt=>{const At=new Set(pt);return At.has(se)?At.delete(se):At.add(se),At})),_e()},className:Dn("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",_t),style:Ie,children:Re?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Fe}`}):null]})}),l.jsx("div",{className:Dn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Ee&&!et&&!at&&!Se?"bg-[#EBF7FE]":bt&&!et&&!at&&!Se?"bg-[#E5F0FF]":et||at||Se?"bg-transparent":"bg-[#F5F5F5]",at||$t||Se?"border-dashed":"",Ve.has(ke.commit.id)||Ne.has(ke.commit.id)||te.has(ke.commit.id)?I:re.has(ke.commit.id)?ie:((ut=he.get(ke.commit.branchName))==null?void 0:ut.id)===ke.commit.id?"border-amber-500":gt?"border-red-500":"",(C&&M.has(ke.commit.id)&&!d,"")),style:{top:0,borderWidth:(E==null?void 0:E.commit.id)===ke.commit.id?`${at||$t||Se?me*(2/1.5):me}px`:`${at||$t||Se?me*(2/1.5):me}px`,borderColor:(E==null?void 0:E.commit.id)===ke.commit.id?Ft:Ee?"#38BDF2":bt?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${F}px`,borderBottomRightRadius:`${F}px`,borderBottomLeftRadius:`${F}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Dn("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",_t,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:Ie,children:Xe&&Re?ge:Xe&&Fe>1?`${ge} +${Fe-1}`:ge}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:gt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:it.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!at?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Dn("select-text text-sm font-medium",_t),"data-selectable-text":"true",style:Ie,children:["@",ke.commit.author]}),l.jsx("div",{className:Dn("select-text text-sm font-medium",_t),"data-selectable-text":"true",style:Ie,children:new Date(ke.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},ke.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[zt.map(ke=>{const{fromX:se,fromY:Re,toX:Xe,toY:He}=ke,Fe=vy(se,Re,Xe,He,Te,ke.fromFace,ke.toFace);return l.jsx("path",{d:Fe,fill:"none",stroke:Wh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},ke.id)}),qe.map(ke=>{const{fromX:se,fromY:Re,toX:Xe,toY:He}=ke,Fe=vy(se,Re,Xe,He,Te,ke.fromFace,ke.toFace);return l.jsx("path",{d:Fe,fill:"none",stroke:Wh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},ke.id)})]})]})})})}function Jw({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null})}function eS({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:S,newBranchCreateMode:C,onNewBranchNameChange:M,onNewBranchCreateModeChange:E,onNewBranchDialogClose:T,onNewBranchConfirm:O,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:N,createBranchFromNodeInProgress:q}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:Y=>i(Y.target.value),onKeyDown:Y=>{(Y.metaKey||Y.ctrlKey)&&Y.key==="Enter"&&(Y.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(pw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(Y=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:Y},Y))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:T,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:Y=>Y.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>E("from-selected-node"),className:Dn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>E("new-root"),className:Dn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",C==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),C==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:S,onChange:Y=>M(Y.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:T,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:O,disabled:!S.trim()||q||C==="from-selected-node"&&!L&&!N,className:Dn("inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(Wx,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),q?"Creating...":"Create"]})]})]})}):null]})}const Ey="/icon-GitOrientation.svg";function tS({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>n(i),className:Dn("window-no-drag inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:Dn("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Ey})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Ey})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function nS({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[20rem] shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(Sw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{ref:u,value:t,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(lw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Yx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function sS({mapPadHostRef:t,transformLayerRef:n}){const i=_.useRef({x:0,y:0}),a=_.useRef(ac),c=_.useRef({panX:0,panY:0,zoom:ac}),u=_.useRef(null),d=_.useRef(ac),h=_.useRef(null),[p,y]=_.useState(!1),[g,x]=_.useState(ac),[b,S]=_.useState(0),C=_.useRef(null),M=_.useRef(0),E=_.useCallback(()=>{const ee=t.current;if(!ee)return null;const le=ee.getBoundingClientRect(),re=getComputedStyle(ee),Ne=Number.parseFloat(re.borderLeftWidth)||0,Ve=Number.parseFloat(re.borderTopWidth)||0,te=Number.parseFloat(re.paddingLeft)||kd,he=Number.parseFloat(re.paddingTop)||kd;return{x:le.left+Ne+te,y:le.top+Ve+he}},[t]),T=_.useCallback(()=>{C.current!=null&&(window.clearTimeout(C.current),C.current=null),_.startTransition(()=>{S(ee=>ee+1)}),M.current=performance.now()},[]),O=_.useCallback((ee,le,re)=>{const Ne=c.current;c.current={panX:ee,panY:le,zoom:re};const Ve=n.current;if(Ve&&(Ve.style.transform=`translate3d(${ee}px, ${le}px, 0) scale(${re/ua})`),Math.abs(d.current-re)>Gh&&(d.current=re,x(re)),Math.abs(re-Ne.zoom)>Gh){T();return}const I=performance.now()-M.current;if(I>=wy){T();return}C.current!=null&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{C.current=null,T()},wy-I)},[T,n]),L=_.useRef(null),N=_.useCallback(()=>{u.current!=null||!L.current||(u.current=window.requestAnimationFrame(L.current))},[]),q=_.useCallback(()=>{y(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,y(!1)},90)},[]),Y=_.useCallback((ee,le,re)=>{i.current={x:ee,y:le},a.current=re,q(),N()},[q,N]);L.current=()=>{u.current=null;const ee=c.current,le=i.current.x,re=i.current.y,Ne=a.current,Ve=Math.abs(le-ee.panX)<=Cy?le:ee.panX+(le-ee.panX)*Sy,te=Math.abs(re-ee.panY)<=Cy?re:ee.panY+(re-ee.panY)*Sy,he=Math.abs(Ne-ee.zoom)<=Gh?Ne:ee.zoom+(Ne-ee.zoom)*Iw;O(Ve,te,he),Ve!==le||te!==re||he!==Ne?L.current&&(u.current=window.requestAnimationFrame(L.current)):T()};const Q=_.useCallback((ee,le,re)=>{const Ne=Uw(re),Ve=i.current.x,te=i.current.y,he=a.current,I=E();if(!I){Y(Ve,te,Ne);return}const ie=ee-I.x,F=le-I.y,me=he/ua,Te=Ne/ua,$=(ie-Ve)/me,fe=(F-te)/me,G=ie-$*Te,_e=F-fe*Te;i.current={x:G,y:_e},a.current=Ne,O(G,_e,Ne)},[O,E]),V=_.useCallback(ee=>{if(ee.preventDefault(),ee.ctrlKey||ee.metaKey){const le=Math.exp(-ee.deltaY*zw);Q(ee.clientX,ee.clientY,a.current*le);return}Y(i.current.x-ee.deltaX,i.current.y-ee.deltaY,a.current)},[Y,Q]);return _.useLayoutEffect(()=>(O(0,0,ac),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),C.current!=null&&(window.clearTimeout(C.current),C.current=null)}),[O]),_.useLayoutEffect(()=>{const ee=n.current;if(!ee)return;const le=c.current;ee.style.transform=`translate3d(${le.panX}px, ${le.panY}px, 0) scale(${le.zoom/ua})`}),{isCameraMoving:p,renderedZoom:g,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:E,flushCameraReactTick:T,syncCamera:Y,handleWheel:V}}function oS(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function iS({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[S,C]=_.useState([]),[M,E]=_.useState(null),T=_.useCallback(L=>{const N=t.current,q=i();if(!N||!q)return[];const Y=N.getBoundingClientRect(),Q=n.current.zoom/ua;if(Q<=0)return[];const V=[],ee=L.left,le=L.left+L.width,re=L.top,Ne=L.top+L.height;for(const Ve of a){if(!c(Ve))continue;const te=q.x+n.current.panX+Ve.x*Q-Y.left,he=q.y+n.current.panY+Ve.y*Q-Y.top,I=te+us*Q,ie=he+(vl+Ts)*Q;!(I<ee||te>le||ie<re||he>Ne)&&V.push(Ve.commit.id)}return V},[i,a,n,t,c]),O=_.useCallback(L=>{if(L.button!==0)return;const N=L.target;if(N!=null&&N.closest("[data-commit-card]")||N!=null&&N.closest("button, a, input, textarea, select"))return;const q=t.current;if(!q)return;L.preventDefault();const Y=q.getBoundingClientRect(),Q=L.clientX-Y.left,V=L.clientY-Y.top;d.current={startX:Q,startY:V,currentX:Q,currentY:V,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?S:[],g(!0),b({left:Q,top:V,width:0,height:0})},[t,S]);return _.useEffect(()=>{const L=q=>{var re;const Y=d.current;if(!Y)return;const Q=t.current;if(!Q)return;const V=Q.getBoundingClientRect();Y.currentX=q.clientX-V.left,Y.currentY=q.clientY-V.top,!h.current&&(Math.abs(Y.currentX-Y.startX)>2||Math.abs(Y.currentY-Y.startY)>2)&&(h.current=!0);const ee=oS(Y);b(ee);const le=T(ee);C(Y.additive?Array.from(new Set([...p.current,...le])):Array.from(new Set(le))),Y.additive||E((re=le[le.length-1])!=null?re:null)},N=()=>{if(d.current){const q=h.current;d.current=null,h.current=!1,g(!1),b(null),q||(C([]),E(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",N),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",N)}},[T,u,t]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:S,setSelectedCommitShas:C,mergeTargetCommitSha:M,setMergeTargetCommitSha:E,startMarqueeDrag:O}}function aS(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function Ty({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:S,mapTopInsetPx:C=0,onMergeRefsIntoBranch:M,mergeInProgress:E=!1,onPushAllBranches:T,onPushCurrentBranch:O,onPushCommitTargets:L,pushInProgress:N=!1,onDeleteSelection:q,deleteInProgress:Y=!1,worktrees:Q=[],currentRepoPath:V,onRemoveWorktree:ee,removeWorktreeInProgress:le=!1,onSwitchToWorktree:re,onStashLocalChanges:Ne,stashInProgress:Ve=!1,stashDisabled:te=!1,onCommitLocalChanges:he,commitInProgress:I=!1,commitDisabled:ie=!1,onStageAllChanges:F,stageInProgress:me=!1,onCreateBranchFromNode:Te,onCreateRootBranch:$,createBranchFromNodeInProgress:fe=!1,isDebugOpen:G=!1,onDebugClose:_e,orientation:ve="horizontal",branchCommitPreviews:Ae={},branchParentByName:We={},branchUniqueAheadCounts:Ye={},gridSearchQuery:lt="",gridSearchJumpToken:Bt=0,gridSearchJumpDirection:Kt=1,gridFocusSha:Ze=null,checkedOutRef:ot=null,onGridSearchResultCountChange:zt,onGridSearchResultIndexChange:qe,onGridSearchFocusChange:wt,onInteractionChange:ke,manuallyOpenedClumps:se,manuallyClosedClumps:Re,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:He,gridHudProps:Fe}){var cn,Gs,Yt,ss,xs,cs,ro,qs,Ls,Ks,D,X,K,ce;const tt=_.useRef(null),it=_.useRef(null),gt=_.useRef(null),bt=_.useRef(null),$t=_.useRef(void 0),at=_.useRef(void 0),P=_.useRef(void 0),J=_.useRef(0),ge=_.useRef(null),[Se,et]=_.useState(!1),[Ke,Ee]=_.useState(!1),[_t,Ie]=_.useState(""),[Ft,xt]=_.useState(!1),[ct,Lt]=_.useState(!1),[Rt,Qt]=_.useState(""),[ut,nt]=_.useState("from-selected-node"),[jt,pt]=_.useState(()=>new Set),[At,mt]=_.useState(()=>new Set),[Ot,hn]=_.useState({}),ln=_.useRef(!1),on=_.useRef(null),Xn=_.useRef(null),Hn=se!=null?se:jt,Sn=Re!=null?Re:At,vn=Xe!=null?Xe:pt,rs=He!=null?He:mt,[Xt,$n]=_.useState(null),[rt,In]=_.useState(null),{isCameraMoving:fo,renderedZoom:Zo,cameraRenderTick:Is,renderedCameraRef:Cs,interactionIdleTimeoutRef:ui,getTransformLayerOriginScreen:_s,flushCameraReactTick:bo,syncCamera:Jo,handleWheel:Ns}=sS({mapPadHostRef:it,transformLayerRef:gt}),Cn=_.useMemo(()=>fp(t,d,Ae,We),[t,d,Ae,We]),vs=_.useMemo(()=>Mc({lanes:Cn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Ae,branchParentByName:We,branchUniqueAheadCounts:Ye,manuallyOpenedClumps:Hn,manuallyClosedClumps:Sn,isDebugOpen:G,gridSearchQuery:lt,gridFocusSha:Ze,checkedOutRef:ot!=null?ot:null,orientation:ve,nodePositionOverrides:Ot}),[Cn,t,n,i,a,d,Ae,We,Ye,Hn,Sn,G,lt,Ze,(cn=ot==null?void 0:ot.headSha)!=null?cn:null,(Gs=ot==null?void 0:ot.branchName)!=null?Gs:null,ve,Ot]),gn=_.useMemo(()=>Mc({lanes:Cn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Ae,branchParentByName:We,branchUniqueAheadCounts:Ye,manuallyOpenedClumps:Hn,manuallyClosedClumps:Sn,isDebugOpen:G,gridSearchQuery:lt,gridFocusSha:Ze,checkedOutRef:ot!=null?ot:null,orientation:ve,nodePositionOverrides:Ot}),[Cn,t,n,i,a,d,Ae,We,Ye,Hn,Sn,G,lt,Ze,(Yt=ot==null?void 0:ot.headSha)!=null?Yt:null,(ss=ot==null?void 0:ot.branchName)!=null?ss:null,ve,Ot]),{allCommits:Un,clusterKeyByCommitId:so,leadByClusterKey:Ps,clusterCounts:ls,matchingNodes:ns,matchingNodeIds:Hs,normalizedSearchQuery:yn,focusedNode:mn,defaultCollapsedClumps:tn,renderNodes:Pn,visibleNodesBySha:Io,contentWidth:Po,contentHeight:di,connectors:Us,mergeConnectors:ti,connectorDecisions:gs,nodeWarnings:vo,commitIdsWithRenderedAncestry:kn,connectorParentShas:ho,branchStartShas:fs,branchOffNodeShas:Gn,crossBranchOutgoingShas:Vs,branchBaseCommitByName:wo,pointFormatter:Ho}=vs,Ut=!!yn,oo=Zo/ua,ks=_.useMemo(()=>({transform:`scale(${1/oo})`,transformOrigin:"top left",width:`${100*oo}%`,height:`${100*oo}%`}),[oo]),Uo=-(20/oo),wi=_.useMemo(()=>{const W=new Map;for(const ae of Pn)W.set(ae.commit.visualId,ae);return W},[Pn]),So=_.useMemo(()=>Fw(Pn,Uo),[Pn,Uo]),Ds=W=>{var R;const ae=W.commit.id,w=W.commit.visualId;if(Ut&&Hs.has(ae)||(mn==null?void 0:mn.commit.id)===ae||Xt===null)return!0;if(!Xt.has(w))return!1;const k=so.get(w);return k&&((R=ls.get(k))!=null?R:1)>1&&(Hn.has(k)||!tn.has(k)&&!Sn.has(k)),!0},Vo=1.5/oo,Ys=Pw/oo,jn="border-slate-400/70",Co="border-blue-500",mo=_.useMemo(()=>new Map(t.map(W=>[W.name,W])),[t]),ys=(xs=ot==null?void 0:ot.hasUncommittedChanges)!=null?xs:!1;_.useMemo(()=>new Set(t.filter(W=>W.commitsAhead===0&&!W.name.startsWith("*")).map(W=>W.name)),[t]);const po=_.useMemo(()=>{var ae,w;const W=new Map;for(const k of Pn){const R=(ae=W.get(k.commit.id))!=null?ae:new Set;R.add(k.commit.branchName),W.set(k.commit.id,R)}for(const k of i){const R=(w=W.get(k.fullSha))!=null?w:new Set;k.branch&&R.add(k.branch),W.set(k.fullSha,R)}return W},[Pn,i,d]),an=_.useMemo(()=>new Map(Object.entries(c).map(([W,ae])=>[W,new Set(ae)])),[c]),Ws=_.useCallback(()=>{ui.current,bo()},[bo,ui]),{isMarqueeSelecting:Rs,marqueeRect:io,selectedCommitShas:ws,setSelectedCommitShas:ko,mergeTargetCommitSha:Fs,setMergeTargetCommitSha:jo,startMarqueeDrag:Mn}=iS({scrollContainerRef:tt,renderedCameraRef:Cs,getTransformLayerOriginScreen:_s,renderNodes:Pn,shouldRenderNode:Ds,onPointerReleaseNoMarquee:Ws}),Yo=_.useMemo(()=>new Set(Pn.map(W=>W.commit.id)),[Pn]),En=_.useMemo(()=>ws.filter(W=>Yo.has(W)),[ws,Yo]),Vn=_.useCallback((W,ae)=>{var R;if(!ae)return!1;if(((R=Ae[W])!=null?R:[]).some(B=>vi(B.fullSha,ae)||vi(B.sha,ae)))return!0;const k=mo.get(W);return!!(k!=null&&k.headSha&&vi(k.headSha,ae))},[Ae,mo]),Rn=(cs=ot==null?void 0:ot.branchName)!=null?cs:null,Xs=(ro=ot==null?void 0:ot.headSha)!=null?ro:null,js=Rn==null,Bs=_.useMemo(()=>{if(!Ze)return null;const W=Pn.filter(ae=>ae.commit.id===Ze);return W.length===0?null:W.length===1||!mn?W[0]:W.reduce((ae,w)=>{const k=(ae.x-mn.x)**2+(ae.y-mn.y)**2;return(w.x-mn.x)**2+(w.y-mn.y)**2<k?w:ae})},[Ze,Pn,mn]),Wo=_.useCallback((W,ae,w)=>{for(const k of Q){if(!qh(k,V))continue;if(k.branchName){if(k.branchName===W&&vi(k.headSha,ae))return k;continue}if(!vi(k.headSha,ae)&&!vi(k.headSha,w))continue;if(k.parentSha&&Vn(W,k.parentSha)||Vn(W,k.headSha))return k;const R=mo.get(W);if(R&&vi(R.headSha,k.headSha)||W===d&&i.some(B=>vi(B.fullSha,k.headSha)))return k}return null},[Q,V,Vn,mo,d,i]),ao=_.useCallback(W=>{for(const ae of Q)if(qh(ae,V)&&ae.branchName===W)return ae;return null},[Q,V]),hs=_.useCallback((W,ae)=>{for(const w of Q)if(qh(w,V)&&(vi(w.headSha,W)||vi(w.headSha,ae)))return w;return null},[Q,V]),Ss=_.useCallback(W=>{var ae;return Array.from((ae=po.get(W))!=null?ae:[])},[po]),Ro=_.useMemo(()=>{var R,B,H,oe;const W=new Map;for(const pe of En){const Me=Ss(pe);if(Me.length===0)continue;const Be=(R=Me.find(st=>st!==d))!=null?R:Me[0],Je=En.filter(st=>st!==pe).filter(st=>!new Set(Ss(st)).has(Be));W.set(Be,{targetSha:pe,targetBranch:Be,sourceRefs:Je})}const ae=Array.from(W.values()),w=Fs?ae.find(pe=>{var Me;return pe.targetSha===Fs||pe.targetBranch===((Me=Ss(Fs)[0])!=null?Me:"")}):null,k=(B=w!=null?w:ae[ae.length-1])!=null?B:null;return{options:ae,selected:k,targetBranch:(H=k==null?void 0:k.targetBranch)!=null?H:null,sources:(oe=k==null?void 0:k.sourceRefs)!=null?oe:[]}},[En,Ss,d,Fs]),_o=_.useMemo(()=>{const W=[...Rn===d?[{name:d,headSha:Xs!=null?Xs:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(ae=>!ae.name.startsWith("*")&&ae.unpushedCommits>0&&ae.remoteSyncStatus!=="on-github").map(ae=>[ae.name,ae]);return new Map(W)},[t,Rn,Xs,d,a.length]),go=_.useMemo(()=>{const W=k=>{var B;const R=Ss(k).filter(H=>_o.has(H));return R.length===0?null:R.length===1?R[0]:Rn&&R.includes(Rn)?Rn:(B=R.find(H=>H!==d))!=null?B:R[0]},ae=k=>{var R;return k===d?a.map(B=>{var H,oe;return{fullSha:B.fullSha,sha:B.sha,parentSha:(H=B.parentSha)!=null?H:null,message:B.message,author:B.author,date:B.date,kind:(oe=B.kind)!=null?oe:"commit"}}):(R=Ae[k])!=null?R:[]},w=new Map;for(const k of En){const R=W(k);if(!R)continue;const B=_o.get(R);if(!B)continue;const H=ae(R).slice(0,B.unpushedCommits),oe=H.findIndex(Me=>Me.fullSha===k);if(oe===-1)continue;const pe=w.get(R);(!pe||oe<pe.targetIndex)&&w.set(R,{branchName:R,targetSha:k,targetIndex:oe,commitCount:H.length-oe})}return Array.from(w.values())},[En,Ss,_o,Rn,d,a,Ae]),Bo=_.useMemo(()=>Array.from(new Set(En.map(W=>/^STASH:(\d+)$/.exec(W)).filter(W=>!!W).map(W=>parseInt(W[1],10)))).sort((W,ae)=>W-ae),[En]),Lo=En.includes("WORKING_TREE"),Si=(Lo?1:0)+Bo.length,ta=[...Lo?["Uncommitted changes"]:[],...Bo.map(W=>`Stash ${W+1}`)],Ii=_o.size,Pi=!js&&!!Rn&&_o.has(Rn),ni=Rn?`Push ${Rn}`:"Push current branch",Tt=go.length===1?go[0].commitCount>1?`Push ${go[0].commitCount} commits on ${go[0].branchName}`:`Push ${go[0].targetSha.slice(0,7)} on ${go[0].branchName}`:`Push ${go.length} selected ranges`,Ci=_.useCallback(W=>{const ae=W.target;ae!=null&&ae.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||dp().startDragging()},[]);_.useEffect(()=>{const W=fo||Rs;bt.current!==W&&(bt.current=W,ke==null||ke(W))},[fo,Rs,ke]),_.useEffect(()=>{const W=yn?ns.length:null;$t.current!==W&&($t.current=W,zt==null||zt(W))},[ns.length,yn,zt]),_.useEffect(()=>{const W=yn&&Ze?(()=>{const ae=ns.findIndex(w=>w.commit.id===Ze);return ae>=0?ae:null})():null;at.current!==W&&(at.current=W,qe==null||qe(W))},[Ze,ns,yn,qe]);const ki=_.useMemo(()=>{var pe,Me,Be,Je,st,ht;if(!yn)return null;const W=yn,ae=t.map(yt=>yt.name),w=ae.find(yt=>yt.toLowerCase()===W),k=w!=null?w:ae.find(yt=>yt.toLowerCase().startsWith(W)),B=k!=null?k:ae.find(yt=>yt.toLowerCase().includes(W));if(!B)return null;const H=(pe=t.find(yt=>yt.name===B))!=null?pe:null;if(H!=null&&H.headSha)return H.headSha;const oe=(Me=Ae[B])!=null?Me:[];return oe.length>0?(Je=(Be=oe[0])==null?void 0:Be.fullSha)!=null?Je:null:B===d&&(ht=(st=i[0])==null?void 0:st.fullSha)!=null?ht:null},[yn,t,Ae,d,i]);_.useEffect(()=>{var k,R,B;if(!yn){if(J.current=Bt,P.current===null)return;P.current=null,wt==null||wt(null);return}if(Bt<=0||J.current===Bt)return;J.current=Bt;let W;const ae=Ze?ns.findIndex(H=>H.commit.id===Ze):-1,w=ns.length>0?ae<0?0:(ae+Kt+ns.length)%ns.length:-1;W=(B=(R=(k=ns[w])==null?void 0:k.commit.id)!=null?R:ki)!=null?B:null,P.current!==W&&(P.current=W,wt==null||wt(W))},[ns,yn,wt,ki,Bt,Kt]),_.useLayoutEffect(()=>{if(!Ze)return;const W=`${Ze}:${Bt}`;if(ge.current===W)return;const ae=tt.current,w=Bs;if(!ae||!w)return;const k=_s();if(!k)return;const R=ae.getBoundingClientRect(),B=Cs.current.zoom,H=B/ua,oe=w.x+us/2,pe=w.y+vl+Ts/2,Me=R.left+R.width/2,Be=R.top+R.height/2;Jo(Me-k.x-oe*H,Be-k.y-pe*H,B),ge.current=W},[Ze,Bt,Bs,_s,Jo,Cs]);const Hi=(Ks=(Ls=rt==null?void 0:rt.width)!=null?Ls:(qs=tt.current)==null?void 0:qs.clientWidth)!=null?Ks:0,fi=(K=(X=rt==null?void 0:rt.height)!=null?X:(D=tt.current)==null?void 0:D.clientHeight)!=null?K:0,yo=Hi>0&&fi>0?ky(Hi,fi,Cs.current,{innerPaddingPx:kd}):null,Fo=yo!=null?jy(yo,Cs.current.zoom):null,hi=W=>{if(!Fo)return!0;const{fromX:ae,fromY:w,toX:k,toY:R}=W;return Ww(ae,w,k,R,Fo,W.fromFace,W.toFace)};_.useLayoutEffect(()=>{var H;const W=tt.current;if(!W||W.clientWidth<=0||W.clientHeight<=0)return;const ae=W.clientWidth,w=W.clientHeight;In(oe=>(oe==null?void 0:oe.width)===ae&&(oe==null?void 0:oe.height)===w?oe:{width:ae,height:w});const k=ky(ae,w,Cs.current,{innerPaddingPx:kd});if(!k){$n(oe=>oe===null?oe:null);return}const R=jy(k,Cs.current.zoom),B=Xw(So,R,wi,Uo);for(const oe of Pn){const pe=so.get(oe.commit.visualId);if(!pe||((H=ls.get(pe))!=null?H:1)<=1)continue;(Hn.has(pe)||!tn.has(pe)&&!Sn.has(pe))&&B.add(oe.commit.visualId)}$n(oe=>Vw(oe,B)?oe:B)},[Zo,Bt,Ze,fo,Is,Hn,Sn,tn,so,ls,Pn,rt,So,wi,Uo]),_.useLayoutEffect(()=>{const W=tt.current;if(!W)return;const ae=()=>{const k=W.clientWidth,R=W.clientHeight;k<=0||R<=0||In(B=>(B==null?void 0:B.width)===k&&(B==null?void 0:B.height)===R?B:{width:k,height:R})};ae();const w=new ResizeObserver(ae);return w.observe(W),()=>w.disconnect()},[Un.length]);const j=Pn.filter(W=>Ds(W)).length,U=ti.filter(W=>hi(W)).length,ue=Us.filter(W=>hi(W)).length,Ce=_.useCallback((W,ae)=>{if(ln.current){W.preventDefault(),W.stopPropagation();return}W.stopPropagation();const w=ae.commit.id;if(W.shiftKey?(ko(H=>H.includes(w)?H.filter(oe=>oe!==w):[...H,w]),jo(w)):(ko(H=>H.includes(w)?[]:[w]),jo(H=>H===w?null:w)),!(W.metaKey||W.ctrlKey||W.detail>=2)||w==="WORKING_TREE")return;const R=w.length>=40?w.slice(0,7):w;let B=null;if(ae.commit.branchName?(B=Wo(ae.commit.branchName,w,R),B||(B=ao(ae.commit.branchName))):B=hs(w,R),B&&re){re(B.path);return}h==null||h({commitSha:w})},[hs,Wo,ao,h,re]),Pe=_.useCallback((W,ae)=>{var oe,pe,Me,Be,Je;if(W.button!==0)return;const w=W.target;if(w!=null&&w.closest('[data-selectable-text="true"]')||w!=null&&w.closest("button, a, input, textarea, select"))return;W.stopPropagation(),W.preventDefault(),ln.current=!1,W.currentTarget.setPointerCapture(W.pointerId);const k=(oe=Ot[ae.commit.visualId])!=null?oe:Ot[ae.commit.id];on.current={nodeId:ae.commit.visualId,startX:W.clientX,startY:W.clientY,baseX:(pe=k==null?void 0:k.x)!=null?pe:ae.x,baseY:(Me=k==null?void 0:k.y)!=null?Me:ae.y,moved:!1,pendingX:(Be=k==null?void 0:k.x)!=null?Be:ae.x,pendingY:(Je=k==null?void 0:k.y)!=null?Je:ae.y};const R=()=>{Xn.current=null;const st=on.current;st&&hn(ht=>({...ht,[st.nodeId]:{x:st.pendingX,y:st.pendingY}}))},B=st=>{const ht=on.current;if(!ht)return;const yt=Cs.current.zoom/ua,dt=yt>0?1/yt:1,ft=(st.clientX-ht.startX)*dt,wn=(st.clientY-ht.startY)*dt;(Math.abs(ft)>2||Math.abs(wn)>2)&&(ht.moved=!0),ht.moved&&(ln.current=!0),ht.pendingX=ht.baseX+ft,ht.pendingY=ht.baseY+wn,Xn.current==null&&(Xn.current=window.requestAnimationFrame(R))},H=()=>{window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",H),window.removeEventListener("pointercancel",H),Xn.current!=null&&(window.cancelAnimationFrame(Xn.current),Xn.current=null,R());try{W.currentTarget.releasePointerCapture(W.pointerId)}catch{}const st=on.current;on.current=null,st&&window.setTimeout(()=>{ln.current=!1},0)};window.addEventListener("pointermove",B),window.addEventListener("pointerup",H),window.addEventListener("pointercancel",H)},[Ot]),Qe=_.useCallback(async()=>{if(!he)return;await he(_t)&&(Ee(!1),Ie(""))},[he,_t]),Vt=_.useCallback(async()=>{q&&(await q({branchNames:[],discardUncommittedChanges:Lo,stashIndices:Bo}),xt(!1),ko([]),jo(null))},[q,Lo,Bo]),Nt=_.useCallback(async()=>{var ae;const W=Rt.trim();if(W){if(ut==="new-root"){if(!$)return;await $(W)}else{if(!Te)return;const w=En.length===1?En[0]:(ae=ot==null?void 0:ot.headSha)!=null?ae:null;if(!w||!(w==="WORKING_TREE"||w.startsWith("STASH:")||w===(ot==null?void 0:ot.headSha)))return;await Te(w,W)}Lt(!1),Qt(""),nt("from-selected-node"),ko([]),jo(null)}},[ot==null?void 0:ot.headSha,ut,Rt,Te,$,En]),Zt=!!(ot!=null&&ot.headSha),Gt=En.length===0&&Zt,rn=En.length===1&&(En[0]==="WORKING_TREE"||En[0].startsWith("STASH:"))||Gt,xn=!!$;return _.useEffect(()=>{if(ct){if(!rn&&!Gt&&xn){nt("new-root");return}(rn||Gt)&&nt("from-selected-node")}},[xn,Gt,ct,rn]),_.useEffect(()=>{const W=ae=>{if(!q||Ft||En.length===0)return;const w=ae.target;w!=null&&w.closest('input, textarea, select, button, [contenteditable="true"]')||ae.key!=="Delete"&&ae.key!=="Backspace"||(ae.preventDefault(),xt(!0))};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[Ft,q,En.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx(Jw,{isOpen:G,onClose:()=>_e==null?void 0:_e(),visibleBounds:Fo,renderedNodeCount:j,totalNodeCount:Pn.length,renderedMergeConnectorCount:U,totalMergeConnectorCount:ti.length,renderedConnectorCount:ue,totalConnectorCount:Us.length,mapGridCullViewportInsetScreenPx:$w,debugRows:gn.debugRows,branchDebugRows:gn.branchDebugRows,connectorDecisions:gs}),Fe?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:Ci,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(Kw,{selectedVisibleCommitShas:En,commitInProgress:I,commitDisabled:ie,stageInProgress:me,stashInProgress:Ve,stashDisabled:te,pushInProgress:N,hasUncommittedChanges:ys,createBranchFromNodeInProgress:fe,onCommitLocalChanges:he,onStageAllChanges:F?()=>void F():void 0,onStashLocalChanges:Ne,onPushCurrentBranch:O,onPushAllBranches:T,onPushCommitTargets:L,onMergeRefsIntoBranch:M,selectedPushTargets:go,selectedPushLabel:Tt,canPushCurrentBranch:Pi,pushCurrentBranchLabel:ni,pushableRemoteBranchCount:Ii,selectedCommitTargetOption:Ro,mergeInProgress:E,mergeTargetCommitSha:Fs,setMergeTargetCommitSha:jo,worktrees:Q,currentRepoPath:V,worktreeMenuOpen:Se,setWorktreeMenuOpen:et,onSwitchToWorktree:re,onRemoveWorktree:ee,removeWorktreeInProgress:le,setCommitDialogOpen:Ee,setNewBranchDialogOpen:Lt})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[l.jsx(nS,{query:Fe.gridSearchQuery,onQueryChange:Fe.setGridSearchQuery,resultCount:Fe.gridSearchResultCount,resultIndex:Fe.gridSearchResultIndex,onJump:W=>{Fe.setGridSearchJumpDirection(W),Fe.setGridSearchJumpToken(ae=>ae+1)}}),l.jsx(tS,{orientation:Fe.mapGridOrientation,onOrientationChange:Fe.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(ce=Fe.githubAuthStatus)!=null&&ce.ghAvailable&&!Fe.githubAuthStatus.authenticated?l.jsx("button",{onClick:Fe.onGitHubAuthSetup,disabled:Fe.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Fe.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Fe.githubAuthStatus&&!Fe.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Fe.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Fe.githubAuthMessage,children:Fe.githubAuthMessage})]}):null,Fe.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Fe.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Fe.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Fe.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Fe.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Fe.commitSwitchFeedback.message})]}):null]})]}):null,x||Un.length===0?l.jsx(aS,{}):l.jsx(Zw,{scrollContainerRef:tt,mapPadHostRef:it,transformLayerRef:gt,isMarqueeSelecting:Rs,contentWidth:Po,contentHeight:di,isCameraMoving:fo,onWheel:Ns,onMouseDown:Mn,onNodePointerDown:Pe,labelTopPx:Uo,inverseZoomStyle:ks,displayZoom:oo,selectedVisibleCommitShas:En,normalizedSearchQuery:yn,matchingNodeIds:Hs,focusedNode:Bs,renderNodes:Pn,shouldRenderNode:Ds,manuallyOpenedClumps:Hn,manuallyClosedClumps:Sn,defaultCollapsedClumps:tn,leadByClusterKey:Ps,clusterKeyByCommitId:so,clusterCounts:ls,commitIdsWithRenderedAncestry:kn,nodeWarnings:vo,connectorParentShas:ho,branchStartShas:fs,branchOffNodeShas:Gn,crossBranchOutgoingShas:Vs,branchBaseCommitByName:wo,branchStartAccentClass:Co,connectorParentAccentClass:jn,commitCornerRadiusPx:Ys,lineStrokeWidth:Vo,pointFormatter:Ho,connectors:Us,mergeConnectors:ti,cullConnectorPath:hi,flushCameraReactTick:bo,setManuallyOpenedClumps:vn,setManuallyClosedClumps:rs,onCommitCardClick:Ce,unpushedCommitShasSetByBranch:an,checkedOutHeadSha:Xs,orientation:ve}),io&&Rs?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:io.left,top:io.top,width:io.width,height:io.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(eS,{commitDialogOpen:Ke,commitMessageDraft:_t,onCommitMessageDraftChange:Ie,onCommitDialogClose:()=>Ee(!1),onCommitConfirm:()=>void Qe(),commitInProgress:I,deleteConfirmOpen:Ft,deleteSelectionItems:ta,onDeleteConfirmClose:()=>xt(!1),onDeleteConfirm:()=>void Vt(),deleteInProgress:Y,deletableSelectionCount:Si,newBranchDialogOpen:ct,newBranchName:Rt,newBranchCreateMode:ut,onNewBranchNameChange:Qt,onNewBranchCreateModeChange:nt,onNewBranchDialogClose:()=>Lt(!1),onNewBranchConfirm:()=>void Nt(),selectedCommitCanCreateBranch:rn,currentCheckedOutCommitCanCreateBranch:Gt,createBranchFromNodeInProgress:fe})]})}function rS({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:S="",gridSearchJumpToken:C=0,gridSearchJumpDirection:M=1,gridFocusSha:E=null,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,view:N="time",isLoading:q=!1,scrollRequest:Y,focusedErrorBranch:Q,checkedOutRef:V=null,mapTopInsetPx:ee=0,onMergeRefsIntoBranch:le,mergeInProgress:re=!1,onPushAllBranches:Ne,onPushCurrentBranch:Ve,onPushCommitTargets:te,pushInProgress:he=!1,onDeleteSelection:I,worktrees:ie=[],currentRepoPath:F,onRemoveWorktree:me,removeWorktreeInProgress:Te=!1,onSwitchToWorktree:$,onStashLocalChanges:fe,stashInProgress:G=!1,stashDisabled:_e=!1,onCommitLocalChanges:ve,commitInProgress:Ae=!1,commitDisabled:We=!1,onStageAllChanges:Ye,stageInProgress:lt=!1,onCreateBranchFromNode:Bt,onCreateRootBranch:Kt,createBranchFromNodeInProgress:Ze=!1,onMoveNodeBackToBranch:ot,isDebugOpen:zt=!1,onDebugClose:qe,orientation:wt="horizontal",onInteractionChange:ke,manuallyOpenedClumps:se,manuallyClosedClumps:Re,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:He,layoutModel:Fe,gridHudProps:tt}){const it=new Set(u.map(P=>P.branchName)),gt=14*864e5,bt=Date.now();function $t(P){return it.has(P.name)||bt-new Date(P.lastCommitDate).getTime()<=gt}const at=t.filter(P=>P.status==="stale"&&$t(P)).sort((P,J)=>new Date(J.lastCommitDate).getTime()-new Date(P.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:N==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(Ty,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:C,gridSearchJumpDirection:M,gridFocusSha:E,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,staleBranches:at,isLoading:q,scrollRequest:Y,focusedErrorBranch:Q,checkedOutRef:V,mapTopInsetPx:ee,onMergeRefsIntoBranch:le,mergeInProgress:re,onPushAllBranches:Ne,onPushCurrentBranch:Ve,onPushCommitTargets:te,pushInProgress:he,onDeleteSelection:I,worktrees:ie,currentRepoPath:F,onRemoveWorktree:me,removeWorktreeInProgress:Te,onSwitchToWorktree:$,onStashLocalChanges:fe,stashInProgress:G,stashDisabled:_e,onCommitLocalChanges:ve,commitInProgress:Ae,commitDisabled:We,onStageAllChanges:Ye,stageInProgress:lt,onCreateBranchFromNode:Bt,onCreateRootBranch:Kt,createBranchFromNodeInProgress:Ze,onMoveNodeBackToBranch:ot,isDebugOpen:zt,onDebugClose:qe,orientation:wt,onInteractionChange:ke,manuallyOpenedClumps:se,manuallyClosedClumps:Re,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:He,layoutModel:Fe,gridHudProps:tt})}):N==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(Ty,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:S,gridSearchJumpToken:C,gridSearchJumpDirection:M,gridFocusSha:E,checkedOutRef:V,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:O,onGridSearchFocusChange:L,onInteractionChange:ke,manuallyOpenedClumps:se,manuallyClosedClumps:Re,setManuallyOpenedClumps:Xe,setManuallyClosedClumps:He,layoutModel:Fe,isDebugOpen:zt,onDebugClose:qe,orientation:wt,gridHudProps:tt})}):null})}const Zi=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Ay(t,n){var a;const i=[...(a=t.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...t,childShas:i}}function Kh(t,n,i,a,c,u){if(!i)return{directCommits:t,branchCommitPreviews:n};const d=t.map(p=>Zi(p.fullSha,i)||Zi(p.sha,i)?Ay(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Zi(g.fullSha,i)||Zi(g.sha,i))?Ay(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function lS(t,n,i,a){if(!t)return null;const c=d=>Zi(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function cS(t,n,i,a,c,u,d=!1){var Ne,Ve,te,he,I;const h=t.baseSha,p=`STASH:${t.index}`,y=`Stash ${t.index+1}`,g=(Ve=(Ne=i[0])==null?void 0:Ne.fullSha)!=null?Ve:null,x=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(ie=>({name:ie.name,headSha:ie.headSha,isDefault:!1}))],b=h?x.filter(ie=>Zi(ie.headSha,h)):[],S=lS(h,i,a,u),C=S?x.find(ie=>ie.name===S):void 0,M=(he=(te=b.find(ie=>ie.isDefault))!=null?te:b[0])!=null?he:C,E=!!(M&&h&&Zi(M.headSha,h)),T=M&&!M.isDefault?n.find(ie=>ie.name===M.name):void 0,O=(()=>{var F;if(!h)return null;const ie=i.find(me=>Zi(me.fullSha,h)||Zi(me.sha,h));if(ie!=null&&ie.date)return ie.date;if(T&&!d){const me=((F=a[T.name])!=null?F:[]).find(Te=>Zi(Te.fullSha,h)||Zi(Te.sha,h));if(me!=null&&me.date)return me.date}return null})(),L=O?new Date(O).getTime():Number.NaN,N=Date.now(),q=Number.isFinite(L)?Math.max(N,L+1+t.index):N+t.index,Y=new Date(q).toISOString(),Q=t.message.trim(),V={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:Q||y,author:"You",date:Y,kind:"stash"};if(E&&T){const ie=Kh(i,a,h,p,T.name,u);return{branches:n.map(me=>me.name===T.name?{...me,commitsAhead:me.commitsAhead+1,unpushedCommits:me.unpushedCommits+1,lastCommitDate:Y,headSha:p}:me),directCommits:ie.directCommits,branchCommitPreviews:{...ie.branchCommitPreviews,[T.name]:[V,...a[T.name]||[]]},branchUniqueAheadCounts:{...c,[T.name]:Math.max(0,(I=Object.prototype.hasOwnProperty.call(c,T.name)?c[T.name]:T.commitsAhead)!=null?I:0)+1}}}if(E&&(M!=null&&M.isDefault)&&!d){const ie=Kh(i,a,h,p,u,u);return{branches:n,directCommits:ie.directCommits,branchCommitPreviews:{...ie.branchCommitPreviews,[u]:[V,...a[u]||[]]},branchUniqueAheadCounts:c}}const ee=`*Stash:${t.index}`,le={name:ee,commitsAhead:1,commitsBehind:0,lastCommitDate:Y,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:(M==null?void 0:M.name)||u},re=Kh(i,a,h,p,ee,u);return{branches:[le,...n],directCommits:re.directCommits,branchCommitPreviews:{...re.branchCommitPreviews,[ee]:[V]},branchUniqueAheadCounts:{...c,[ee]:1}}}function Zx(t,n,i,a,c,u,d=!1){const h=[...t].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=cS(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function uS({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:S=null,orientation:C="horizontal"}){var Q,V;const M=Zx(y,t,i,u,h,c,(Q=p==null?void 0:p.hasUncommittedChanges)!=null?Q:!1);let E=M.branches,T=M.directCommits,O=M.branchCommitPreviews,L=M.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ee=p.headSha||p.parentSha||null,le=(F,me)=>!F||!me?!1:F===me||F.startsWith(me)||me.startsWith(F),re=p.branchName?E.find(F=>F.name===p.branchName):void 0,Ne=(()=>{var me;if(!ee)return null;const F=T.find(Te=>le(Te.fullSha,ee)||le(Te.sha,ee));if(F!=null&&F.date)return F.date;if(re){const Te=((me=O[re.name])!=null?me:[]).find($=>le($.fullSha,ee)||le($.sha,ee));if(Te!=null&&Te.date)return Te.date}return null})(),Ve=Ne?new Date(Ne).getTime():Number.NaN,te=Date.now(),he=Number.isFinite(Ve)?Math.max(te,Ve+1):te,I=new Date(he).toISOString(),ie={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ee,message:"Local uncommitted changes",author:"You",date:I,kind:"uncommitted"};re?(E=E.map(F=>F.name===re.name?{...F,commitsAhead:F.commitsAhead+1,unpushedCommits:F.unpushedCommits+1,lastCommitDate:I,headSha:"WORKING_TREE"}:F),O={...O,[re.name]:[ie,...O[re.name]||[]]},L={...L,[re.name]:Math.max(0,(V=Object.prototype.hasOwnProperty.call(L,re.name)?L[re.name]:re.commitsAhead)!=null?V:0)+1}):O={...O,[c]:[ie,...O[c]||[]]}}const N={...d};N[c]=null;const q=fp(E,c,O,N),Y=Mc({lanes:q,branches:E,mergeNodes:n,directCommits:T,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:O,branchParentByName:N,branchUniqueAheadCounts:L,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:S,checkedOutRef:p,orientation:C});return{enrichedBranches:E,enrichedBranchCommitPreviews:O,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:T,sharedGridLayoutModel:Y}}const Ny="git-visualizer:expanded-projects",Dy="git-visualizer:expanded-branches";function dS(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,S;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((S=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function fS(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,S;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((S=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?S:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function hS(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(t,[]),c}function Nm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:g,showCommits:x,getMergeTargetLabels:b,sourceBranchName:S,clusterKeyByCommitId:C,isGridClusterOpen:M,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:O}){var $,fe;if(g.has(t)||!a.get(t))return null;const N=($=u.get(t))!=null?$:[],q=N.length>0,Y=_.useMemo(()=>{var G;return[...(G=c[t])!=null?G:[]]},[c,t]),Q=x&&Y.length>0,V=x,ee=q||Q,le=h.has(t),re=V?Y:[],Ne=le&&re.length>0,Ve=y===t,te=new Set(g);te.add(t);const he="top-[-0.2rem] h-4.5 w-[10px]",I="rounded-bl-[7px]",ie="left-[0.65rem]",F=new Map,me=[];for(const G of N){const _e=d.get(G);if(_e){const ve=re.findIndex(Ae=>vi(Ae.fullSha,_e)||vi(Ae.sha,_e));if(ve>=0){const Ae=(fe=F.get(ve))!=null?fe:[];Ae.push(G),F.set(ve,Ae);continue}}me.push(G)}const Te=_.useMemo(()=>{if(!x||re.length===0)return[];const G=[];let _e=[],ve=null;const Ae=()=>{if(_e.length===0)return;const We=_e[_e.length-1],Ye=`sidebar-single-${t}-${We.fullSha}`;G.push({key:ve!=null?ve:Ye,commits:_e,count:_e.length,lead:We}),_e=[],ve=null};return re.forEach(We=>{var lt;const Ye=(lt=C.get(`${t}:${We.fullSha}`))!=null?lt:null;if(_e.length===0){_e=[We],ve=Ye;return}if(Ye===ve){_e.push(We);return}Ae(),_e=[We],ve=Ye}),Ae(),G},[t,x,re,C]);return l.jsxs("li",{className:Dn("relative",n>0?"pl-4":"pl-0",n===0&&!i?le?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Dn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",I,ie,he)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Dn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ie)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:Dn("group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-7 text-left text-sm font-normal transition-colors hover:bg-accent",Ve?"text-foreground":"text-muted-foreground hover:text-foreground"),role:ee?"button":void 0,tabIndex:ee?0:void 0,onClick:()=>{ee?p(t):O==null||O(t)},onKeyDown:G=>{ee&&(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),p(t))},children:[ee?l.jsx("button",{type:"button","aria-label":`${le?"Collapse":"Expand"} ${t}`,onPointerDown:G=>{G.preventDefault()},onClick:G=>{G.preventDefault(),G.stopPropagation(),p(t)},className:"group/chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none text-muted-foreground transition-colors hover:bg-accent",children:l.jsx(aw,{"aria-hidden":"true",className:Dn("h-3.5 w-3.5 shrink-0 transition-transform",le?"rotate-90":"")})}):null,l.jsx("span",{className:"min-w-0 flex-1 break-words",children:t})]})}),Ne?l.jsx("ul",{className:"relative space-y-1 pl-4",children:Te.map(G=>{const _e=G.count>1&&!M(G.key);return(_e?[G.lead]:G.commits).map(Ae=>{var lt;const We=re.findIndex(Bt=>Bt.fullSha===Ae.fullSha),Ye=b(Ae.fullSha,S!=null?S:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>T==null?void 0:T(Ae.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Ae.message,children:[l.jsx("span",{className:"block truncate",children:Ae.message}),Ye.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:Ye.map(Bt=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:Bt})]},`${Ae.fullSha}:${Bt}`))}):null]}),G.count>1&&Ae.fullSha===G.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${G.lead.fullSha}`,onClick:()=>E(G.key,`${t}:${G.lead.fullSha}`),className:Dn("shrink-0 rounded-md px-2 py-1 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",_e?"":"min-w-[2ch] text-center"),children:_e?`+${Math.max(1,G.count-1)}`:"−"}):null]}),(lt=F.get(We))!=null&&lt.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:F.get(We).map((Bt,Kt,Ze)=>l.jsx(Nm,{branchName:Bt,depth:n+1,isLast:Kt===Ze.length-1&&me.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:te,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Bt,clusterKeyByCommitId:C,isGridClusterOpen:M,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:O},Bt))}):null]},`${t}:${Ae.fullSha}`)})})}):null,q&&le&&me.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:me.map((G,_e)=>l.jsx(Nm,{branchName:G,depth:n+1,isLast:_e===me.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,ancestors:te,showCommits:x,getMergeTargetLabels:b,sourceBranchName:G,clusterKeyByCommitId:C,isGridClusterOpen:M,onToggleGridCluster:E,onSelectCommit:T,onSelectBranch:O},G))}):null]})}function mS({open:t}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function pS({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,projectLoading:d=!1,projectError:h=null,checkedOutRef:p,manuallyOpenedClumpsByProject:y={},manuallyClosedClumpsByProject:g={},manuallyOpenedClumps:x,manuallyClosedClumps:b,setManuallyOpenedClumps:S,setManuallyClosedClumps:C,gridLayoutModel:M,onSelectCommit:E,onSelectBranch:T,showCommits:O,onToggleShowCommits:L,className:N,style:q,collapsed:Y=!1}){var zt;const Q=_.useRef(null),V=_.useRef(null),[ee,le]=_.useState(()=>{if(typeof window>"u")return new Set;try{const qe=window.localStorage.getItem(Ny);if(qe){const wt=JSON.parse(qe);if(Array.isArray(wt)){const ke=new Set;for(const se of wt)typeof se=="string"&&ke.add(se);return ke}}}catch{}return new Set(t.map(qe=>qe.path))}),[re,Ne]=_.useState({}),[Ve,te]=_.useState(()=>new Set),[he,I]=_.useState(()=>new Set),[ie,F]=_.useState(null),me=x!=null?x:Ve,Te=b!=null?b:he,$=S!=null?S:te,fe=C!=null?C:I,[G,_e]=_.useState(null),[ve,Ae]=_.useState(null),We=qe=>{try{window.localStorage.setItem(Ny,JSON.stringify(Array.from(qe)))}catch{}},Ye=qe=>{try{const wt=Object.fromEntries(Object.entries(qe).map(([ke,se])=>[ke,Array.from(se)]));window.localStorage.setItem(Dy,JSON.stringify(wt))}catch{}};_.useEffect(()=>{We(ee)},[ee]),_.useEffect(()=>{try{const qe=window.localStorage.getItem(Dy);if(!qe)return;const wt=JSON.parse(qe);if(!wt||typeof wt!="object")return;const ke={};for(const[se,Re]of Object.entries(wt)){if(!Array.isArray(Re))continue;const Xe=new Set;for(const He of Re)typeof He=="string"&&Xe.add(He);ke[se]=Xe}Ne(ke)}catch{}},[]),_.useEffect(()=>{Ye(re)},[re]);const lt=(zt=M==null?void 0:M.defaultCollapsedClumps)!=null?zt:new Set,Bt=qe=>me.has(qe)||!lt.has(qe)&&!Te.has(qe),Kt=(qe,wt)=>{const ke=Q.current,se=V.current;if(ke&&se){const Re=`[data-clump-toggle-id="${wt}"]`,Xe=ke.querySelector(Re);if(Xe){const He=Xe.getBoundingClientRect().top-se.getBoundingClientRect().top;Ae({id:wt,topWithinScrollBody:He})}else Ae(null)}else Ae(null);_e(wt),$(Re=>{const Xe=new Set(Re),He=Bt(qe);return fe(Fe=>{const tt=new Set(Fe);return He?(Xe.delete(qe),tt.add(qe)):(tt.delete(qe),Xe.add(qe)),tt}),Xe})};_.useLayoutEffect(()=>{if(!G)return;const qe=Q.current,wt=V.current;if(!qe||!wt)return;const ke=`[data-clump-toggle-id="${G}"]`,se=qe.querySelector(ke);if(se){if((ve==null?void 0:ve.id)===G){const Xe=se.getBoundingClientRect().top-wt.getBoundingClientRect().top-ve.topWithinScrollBody;Number.isFinite(Xe)&&Xe!==0&&(wt.scrollTop+=Xe)}se.focus({preventScroll:!0}),_e(null),Ae(null)}},[me,Te,G,ve]);const Ze=(qe,wt)=>{Ne(ke=>{var He;const se=(He=ke[qe])!=null?He:new Set,Re=new Set(se);Re.has(wt)?Re.delete(wt):Re.add(wt);const Xe={...ke,[qe]:Re};return Ye(Xe),Xe})};_.useEffect(()=>{if(ie==null)return;const qe=()=>F(null);return window.addEventListener("pointerdown",qe),()=>window.removeEventListener("pointerdown",qe)},[ie]);const ot=_.useMemo(()=>{var wt,ke,se,Re,Xe,He,Fe,tt,it,gt,bt,$t,at,P;const qe=new Map;for(const J of t){const ge=uS({branches:J.branches,mergeNodes:J.mergeNodes,directCommits:J.directCommits,unpushedDirectCommits:J.unpushedDirectCommits,defaultBranch:J.defaultBranch,branchCommitPreviews:J.branchCommitPreviews,branchUniqueAheadCounts:J.branchUniqueAheadCounts,checkedOutRef:J.checkedOutRef,stashes:J.stashes,manuallyOpenedClumps:(wt=y[J.path])!=null?wt:new Set,manuallyClosedClumps:(ke=g[J.path])!=null?ke:new Set}),Se=ge.enrichedBranches.some(nt=>nt.name===J.defaultBranch)?ge.enrichedBranches:[{name:J.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...ge.enrichedBranches],et=new Map(ge.sharedGridLayoutModel.nodes.map(nt=>[nt.commit.visualId,nt.row])),Ke={};for(const nt of ge.sharedGridLayoutModel.allCommits){const jt=(se=Ke[nt.branchName])!=null?se:[];jt.push({fullSha:nt.id,sha:nt.id.slice(0,7),parentSha:(Re=nt.parentSha)!=null?Re:null,message:nt.message,author:nt.author,date:nt.date,kind:(Xe=nt.kind)!=null?Xe:"commit"}),Ke[nt.branchName]=jt}for(const nt of Object.keys(Ke))Ke[nt]=Ke[nt].sort((jt,pt)=>{var ln,on;const At=new Date(jt.date).getTime(),mt=new Date(pt.date).getTime();if(At!==mt)return At-mt;const Ot=(ln=et.get(`${nt}:${jt.fullSha}`))!=null?ln:Number.MAX_SAFE_INTEGER,hn=(on=et.get(`${nt}:${pt.fullSha}`))!=null?on:Number.MAX_SAFE_INTEGER;return Ot!==hn?Ot-hn:jt.fullSha.localeCompare(pt.fullSha)});const Ee=(He=ge.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?He:new Map,_t=(nt,jt)=>{const pt=Ee.get(jt);if(!pt)return[];for(const[At,mt]of pt.entries())if(vi(nt,At))return Array.from(mt).sort();return[]},Ie=dS(Se,J.defaultBranch),Ft=fS(Se,J.defaultBranch,Ie),xt=new Map(Se.map(nt=>[nt.name,nt])),ct=new Map;for(const nt of Se){const jt=(tt=(Fe=ge.sharedGridLayoutModel.firstBranchCommitByName.get(nt.name))==null?void 0:Fe.parentSha)!=null?tt:null,pt=jt!=null?jt:null;ct.set(nt.name,pt)}const Lt=(it=ge.sharedGridLayoutModel.defaultCollapsedClumps)!=null?it:new Set,Rt=(gt=y[J.path])!=null?gt:new Set,Qt=(bt=g[J.path])!=null?bt:new Set,ut=nt=>Rt.has(nt)||!Lt.has(nt)&&!Qt.has(nt);qe.set(J.path,{rootBranchNames:Ft,branchByName:xt,branchCommitPreviewsFromLayout:Ke,childNamesByParent:Ie,branchAnchorShaByName:ct,checkedOutBranchName:(at=($t=J.checkedOutRef)==null?void 0:$t.branchName)!=null?at:null,clusterKeyByCommitId:(P=ge.sharedGridLayoutModel.clusterKeyByCommitId)!=null?P:new Map,getMergeTargetLabels:_t,isGridClusterOpen:ut})}return qe},[n,g,y,t]);return l.jsxs("aside",{ref:Q,"aria-label":"Dense branch sidebar",className:Dn("pointer-events-auto relative h-full select-none overflow-hidden",N),style:q,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:l.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:d,"aria-label":"Add Repo",className:"window-no-drag flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:l.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4.5 w-4.5 shrink-0",children:[l.jsx("path",{d:"M19.5 10V8C19.5 6.89543 18.6046 6 17.5 6H12.5C11.8509 6 11.2193 5.78947 10.7 5.4L10.3 5.1C9.78071 4.71053 9.14911 4.5 8.5 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16.5C3.5 17.6046 4.39543 18.5 5.5 18.5H11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M18 17V14M18 17H15M18 17H21M18 17V20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M3.5 10L11.9211 10L19.5 10",stroke:"currentColor",strokeWidth:"1.5"})]})}),l.jsx("button",{type:"button",onClick:L,"aria-hidden":"true",tabIndex:-1,className:"hidden",children:O?"Hide Commits":"Show Commits"})]})}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[h&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:h})}),l.jsx("div",{ref:V,className:Dn("min-h-0 flex-1 space-y-6 overflow-y-auto px-2.5",Y?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(qe=>{var He,Fe;const wt=qe.path===n,ke=ee.has(qe.path),se=(He=qe.treeLoaded)!=null?He:qe.branches.length>0,Re=ot.get(qe.path),Xe=(Fe=re[qe.path])!=null?Fe:Re?hS(Re.rootBranchNames,Re.childNamesByParent,p,qe.defaultBranch):new Set;return l.jsx("div",{className:Dn("relative z-0",ke&&Re?"mb-5":"mb-1"),children:l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:Dn("sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-background px-0 py-1 transition-colors hover:bg-accent",wt?"text-foreground":"text-muted-foreground"),children:[l.jsx("button",{type:"button",onClick:()=>{le(tt=>{const it=new Set(tt);return it.has(qe.path)?it.delete(qe.path):it.add(qe.path),We(it),it})},"aria-expanded":ke,"aria-label":`${ke?"Collapse":"Expand"} ${qe.name}`,className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(mS,{open:ke})}),l.jsx("button",{type:"button",onClick:()=>{i(qe.path)},className:Dn("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors hover:text-foreground","font-normal",wt?"text-primary":"text-muted-foreground"),children:qe.name}),l.jsxs("div",{className:"relative shrink-0",children:[l.jsx("button",{type:"button","aria-label":`Project actions for ${qe.name}`,"aria-expanded":ie===qe.path,onClick:tt=>{tt.stopPropagation(),F(it=>it===qe.path?null:qe.path)},className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-muted-foreground",children:l.jsx(uw,{className:"h-4 w-4 shrink-0"})}),ie===qe.path?l.jsxs("div",{role:"menu",className:"absolute right-0 top-full z-30 mt-1 w-40 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-lg",onClick:tt=>tt.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{F(null),u(qe.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onClick:()=>{F(null),c(qe.path)},className:"flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",children:"Remove"})]}):null]})]}),ke?se&&Re?l.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:Re.rootBranchNames.map((tt,it)=>l.jsx(Nm,{branchName:tt,depth:0,isLast:it===Re.rootBranchNames.length-1,branchByName:Re.branchByName,branchCommitPreviews:Re.branchCommitPreviewsFromLayout,childNamesByParent:Re.childNamesByParent,branchAnchorShaByName:Re.branchAnchorShaByName,expandedBranchNames:Xe,onToggleBranch:gt=>Ze(qe.path,gt),checkedOutBranchName:Re.checkedOutBranchName,ancestors:new Set,showCommits:O,getMergeTargetLabels:Re.getMergeTargetLabels,sourceBranchName:tt,clusterKeyByCommitId:Re.clusterKeyByCommitId,isGridClusterOpen:Re.isGridClusterOpen,onToggleGridCluster:Kt,onSelectCommit:async gt=>{wt||await i(qe.path),E==null||E(gt)},onSelectBranch:async gt=>{wt||await i(qe.path),T==null||T(gt)}},`${qe.path}:${tt}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},qe.path)})})]})]})}const _S="git-visualizer",Qh="git-visualizer:projects",Ry=12,By=1400,gS=180,Ly="git-visualizer:sidebar-width",Oy="git-visualizer:sidebar-collapsed",zy="git-visualizer:grid-clumps",$y=432,Iy=280,Py=640;function er(t){return t==="/"?t:t.replace(/\/+$/,"")}function yS(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function xS(t){return md(t)===_S}function Hy(t){var n,i;return[t.path,t.name,t.defaultBranch,t.updatedAtMs,t.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),t.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),t.directCommits.map(a=>a.fullSha).join("|"),t.unpushedDirectCommits.map(a=>a.fullSha).join("|"),t.checkedOutRef?[(n=t.checkedOutRef.branchName)!=null?n:"",t.checkedOutRef.headSha,(i=t.checkedOutRef.parentSha)!=null?i:"",t.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(t.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(t.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(t.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(t.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(t.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function bS(){var cs,ro,qs,Ls,Ks;const[t,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,S]=_.useState([]),[C,M]=_.useState([]),[E,T]=_.useState([]),[O,L]=_.useState({}),[N,q]=_.useState([]),[Y,Q]=_.useState("main"),[V,ee]=_.useState(null),[le,re]=_.useState([]),[Ne,Ve]=_.useState(!1),[te,he]=_.useState(""),[I,ie]=_.useState(0),[F,me]=_.useState(1),[Te,$]=_.useState({}),[fe,G]=_.useState({}),[_e,ve]=_.useState(null),[Ae,We]=_.useState(null),[Ye,lt]=_.useState(null),[Bt,Kt]=_.useState(!1),[Ze,ot]=_.useState(!1),[zt,qe]=_.useState(!1),[wt,ke]=_.useState(null),[se,Re]=_.useState(!1),[Xe,He]=_.useState(!1),[Fe,tt]=_.useState("active"),[it,gt]=_.useState(null),[bt,$t]=_.useState(null),[at,P]=_.useState(!1),[J,ge]=_.useState(null),[Se,et]=_.useState(!1),[Ke,Ee]=_.useState(null),[_t,Ie]=_.useState(null),[Ft,xt]=_.useState(!1),[ct,Lt]=_.useState(!1),[Rt,Qt]=_.useState(!1),[ut,nt]=_.useState(!1),[jt,pt]=_.useState({}),[At,mt]=_.useState({}),[Ot,hn]=_.useState({}),[ln,on]=_.useState({}),[Xn,Hn]=_.useState({}),[Sn,vn]=_.useState([]),[rs,Xt]=_.useState(!1),[$n,rt]=_.useState(!1),[In,fo]=_.useState(!1),[Zo,Is]=_.useState(!1),[Cs,ui]=_.useState(!1),[_s,bo]=_.useState("horizontal"),[Jo,Ns]=_.useState(!1),[Cn,ei]=_.useState($y),[vs,gn]=_.useState(!1),[Un,so]=_.useState({dragging:!1,lastEvent:"idle"}),Ps=_.useRef(null),ls=_.useRef(0),ns=_.useRef(0),Hs=_.useRef({}),yn=_.useRef(null),mn=_.useRef({}),tn=_.useRef({}),Pn=_.useRef(!1),Io=_.useRef(null),Po=_.useRef($y),di=_.useRef(null),Us=_.useRef(null),ti=xS(t)||!0,gs=_.useRef(!1),vo=_.useRef(!1),kn=_.useRef(new Set),ho=_.useRef([]),fs=_.useRef([]),Gn=_.useRef(null),Vs=t!=null?t:"__no-repo__",wo=(D,X)=>{try{const K={opened:Object.fromEntries(Object.entries(D).map(([ce,W])=>[ce,Array.from(W)])),closed:Object.fromEntries(Object.entries(X).map(([ce,W])=>[ce,Array.from(W)]))};window.localStorage.setItem(zy,JSON.stringify(K))}catch{}};_.useEffect(()=>{var D,X;try{const K=window.localStorage.getItem(zy);if(!K)return;const ce=JSON.parse(K);if(!ce||typeof ce!="object")return;const W={},ae={},w=ce;for(const[k,R]of Object.entries((D=w.opened)!=null?D:{}))Array.isArray(R)&&(W[k]=new Set(R.filter(B=>typeof B=="string")));for(const[k,R]of Object.entries((X=w.closed)!=null?X:{}))Array.isArray(R)&&(ae[k]=new Set(R.filter(B=>typeof B=="string")));$(W),G(ae)}catch{}},[]),_.useEffect(()=>{wo(Te,fe)},[fe,Te]);const Ho=_.useMemo(()=>{var D;return(D=Te[Vs])!=null?D:new Set},[Vs,Te]),Ut=_.useMemo(()=>{var D;return(D=fe[Vs])!=null?D:new Set},[Vs,fe]),oo=_.useCallback(D=>{$(X=>{var ae;const K=(ae=X[Vs])!=null?ae:new Set,ce=typeof D=="function"?D(K):D,W={...X,[Vs]:new Set(ce)};return wo(W,fe),W})},[Vs,fe]),ks=_.useCallback(D=>{G(X=>{var ae;const K=(ae=X[Vs])!=null?ae:new Set,ce=typeof D=="function"?D(K):D,W={...X,[Vs]:new Set(ce)};return wo(Te,W),W})},[Vs,Te]),Uo=_.useMemo(()=>c.map(D=>{var X,K,ce,W,ae,w,k,R,B,H,oe,pe,Me,Be,Je,st,ht,yt,dt,ft,wn,Bn,Ln,Dt,qt,Mt,Pt,qn;return{...D,...(X=d[D.path])!=null?X:{},branches:(ce=(K=d[D.path])==null?void 0:K.branches)!=null?ce:[],mergeNodes:(ae=(W=d[D.path])==null?void 0:W.mergeNodes)!=null?ae:[],directCommits:(k=(w=d[D.path])==null?void 0:w.directCommits)!=null?k:[],unpushedDirectCommits:(B=(R=d[D.path])==null?void 0:R.unpushedDirectCommits)!=null?B:[],unpushedCommitShasByBranch:(oe=(H=d[D.path])==null?void 0:H.unpushedCommitShasByBranch)!=null?oe:{},checkedOutRef:(Me=(pe=d[D.path])==null?void 0:pe.checkedOutRef)!=null?Me:null,worktrees:(Je=(Be=d[D.path])==null?void 0:Be.worktrees)!=null?Je:[],stashes:(ht=(st=d[D.path])==null?void 0:st.stashes)!=null?ht:[],branchCommitPreviews:(dt=(yt=d[D.path])==null?void 0:yt.branchCommitPreviews)!=null?dt:{},laneByBranch:(wn=(ft=d[D.path])==null?void 0:ft.laneByBranch)!=null?wn:{},branchUniqueAheadCounts:(Ln=(Bn=d[D.path])==null?void 0:Bn.branchUniqueAheadCounts)!=null?Ln:{},defaultBranch:(Mt=(qt=(Dt=d[D.path])==null?void 0:Dt.defaultBranch)!=null?qt:D.branchName)!=null?Mt:"main",treeLoaded:(qn=(Pt=d[D.path])==null?void 0:Pt.loaded)!=null?qn:!1}}),[c,d]),wi=_.useMemo(()=>({githubAuthStatus:J,githubAuthLoading:Se,onGitHubAuthSetup:Bs,gridSearchQuery:te,setGridSearchQuery:he,gridSearchResultCount:_e,gridSearchResultIndex:Ae,setGridSearchJumpDirection:me,setGridSearchJumpToken:ie,mapGridOrientation:_s,setMapGridOrientation:bo,setIsGridDebugOpen:Ns,githubAuthMessage:Ke,commitSwitchFeedback:_t,isCommitSwitchFeedbackVisible:Ft}),[_t,Se,Ke,J,te,_e,Ae,Bs,Ft,_s,he,me,ie,Ns,bo]);function So(D,X){const K=Hy(X);return Hs.current[D]===K?!1:(Hs.current={...Hs.current,[D]:K},h(W=>W[D]===X?W:{...W,[D]:X}),!0)}function Ds(D){var X;return[D.repoPath,D.defaultBranch,D.headSha,(X=D.upstreamSha)!=null?X:"",D.hasUncommittedChanges?"1":"0",D.branchCount,D.worktreeCount,D.stashCount].join("|")}function Vo(D){var X;return[D.repoPath,D.headSha,(X=D.upstreamSha)!=null?X:"",D.hasUncommittedChanges?"1":"0"].join("|")}function Ys(D,X){var K,ce,W,ae,w,k;return{repoPath:D,headSha:(ce=(K=X.checkedOutRef)==null?void 0:K.headSha)!=null?ce:"",upstreamSha:(ae=(W=X.checkedOutRef)==null?void 0:W.parentSha)!=null?ae:null,hasUncommittedChanges:(k=(w=X.checkedOutRef)==null?void 0:w.hasUncommittedChanges)!=null?k:!1}}function jn(D,X,K){var ce,W,ae,w,k,R;return{repoPath:D,defaultBranch:X,headSha:(W=(ce=K.checkedOutRef)==null?void 0:ce.headSha)!=null?W:"",upstreamSha:(w=(ae=K.checkedOutRef)==null?void 0:ae.parentSha)!=null?w:null,hasUncommittedChanges:(R=(k=K.checkedOutRef)==null?void 0:k.hasUncommittedChanges)!=null?R:!1,branchCount:K.branches.length,worktreeCount:K.worktrees.length,stashCount:K.stashes.length}}_.useEffect(()=>{try{const D=localStorage.getItem(Qh);if(!D)return;const X=JSON.parse(D);if(!Array.isArray(X))return;const K=X.filter(ce=>typeof ce=="object"&&ce!==null&&typeof ce.path=="string"&&typeof ce.name=="string"&&typeof ce.lastOpenedAt=="number");u(K.slice(0,Ry))}catch{u([])}},[]),_.useEffect(()=>{vo.current||t||c.length!==0&&(vo.current=!0,Xs(c[0].path))},[c,t]);const Co=_.useMemo(()=>b.reduce((D,X)=>(D[X.targetCommitSha]=X.targetBranch,D),{}),[b]);_.useEffect(()=>{t&&(Pn.current||h(D=>{var X,K;return{...D,[t]:{path:t,name:i||md(t),branches:g,mergeNodes:b,directCommits:C,unpushedDirectCommits:E,mergeTargetBranchByCommitSha:b.reduce((ce,W)=>(ce[W.targetCommitSha]=W.targetBranch,ce),{}),unpushedCommitShasByBranch:O,checkedOutRef:V,worktrees:le,stashes:Sn,branchCommitPreviews:At,branchParentByName:Ot,laneByBranch:ln,branchUniqueAheadCounts:Xn,defaultBranch:Y,loaded:!0,cacheSchemaVersion:(K=(X=D[t])==null?void 0:X.cacheSchemaVersion)!=null?K:1,updatedAtMs:Date.now()}}}))},[t,i,g,b,C,E,Co,O,V,le,Sn,At,Ot,ln,Xn,Y]);async function mo(D,X=!1){var ce;const K=er(D);if(K&&!kn.current.has(K)&&!(!X&&((ce=d[K])!=null&&ce.loaded))){kn.current.add(K),K===t&&y(!0);try{const W=await je("get_repo_visual_snapshot",{repoPath:K,forceRefresh:X});So(K,W)}finally{kn.current.delete(K),K===t&&kn.current.size===0&&y(!1)}}}_.useEffect(()=>{c.length!==0&&c.forEach(D=>{mo(D.path),je("watch_repo",{repoPath:D.path}).catch(console.error)})},[c]),_.useEffect(()=>{let D=!1,X=null;return yc("git-activity",K=>{if(D)return;const ce=er(K.payload.repoPath);!ce||ce===t||mo(ce,!0)}).then(K=>{D?K():X=K}).catch(console.error),()=>{D=!0,X&&X()}},[t]);function ys(D){u(X=>{const K=er(D.path);if(!K)return X;const ce={...D,path:K},ae=(X.some(w=>w.path===K)?X.map(w=>w.path===K?ce:w):[...X,ce]).slice(-Ry);try{localStorage.setItem(Qh,JSON.stringify(ae))}catch{}return ae})}async function po(D){const X=er(D);if(X){ke(null);try{const[K,ce]=await Promise.all([je("get_repo_info",{repoPath:X}),je("get_default_branch",{repoPath:X}).catch(()=>"main")]);ys({path:X,name:K.name,lastOpenedAt:Date.now(),branchName:ce}),await mo(X,!0)}catch(K){ke(K instanceof Error?K.message:String(K))}}}function an(D){var K,ce;const X=er(D);if(X&&(u(W=>{const ae=W.filter(w=>w.path!==X);try{localStorage.setItem(Qh,JSON.stringify(ae))}catch{}return ae}),h(W=>{if(!(X in W))return W;const ae={...W};return delete ae[X],ae}),t===X)){const W=(ce=(K=c.find(ae=>ae.path!==X))==null?void 0:K.path)!=null?ce:null;W?Xs(W):(n(null),a(""),x([]),S([]),M([]),T([]),L({}),ee(null),re([]),vn([]),mt({}),hn({}),on({}),Hn({}))}}async function Ws(D){const X=er(D);if(X)try{await je("reveal_in_finder",{path:X})}catch(K){ke(K instanceof Error?K.message:String(K))}}const Rs=()=>{(async()=>{var D,X;try{const K=await Zv({directory:!0,multiple:!1,defaultPath:(X=(D=c[0])==null?void 0:D.path)!=null?X:void 0});typeof K=="string"&&K&&await po(K)}catch(K){ke(K instanceof Error?K.message:String(K))}})()};async function io(D,X){const ce=[];let W=0;for(;;){const ae=await je("get_merge_nodes",{repoPath:D,branch:X,page:W,perPage:100});if(ce.push(...ae.nodes),!ae.hasMore||ae.nodes.length===0)break;W+=1}return ce}async function ws(D,X,K){const ce=Array.from(new Set([K,...X.map(w=>w.name)].filter(w=>!!w)));if(ce.length===0)return[];const W=await Promise.all(ce.map(w=>io(D,w).catch(()=>[]))),ae=new Map;for(const w of W)for(const k of w){const R=`${k.targetCommitSha}:${k.targetBranch}`;ae.has(R)||ae.set(R,k)}return Array.from(ae.values())}const ko=D=>D.map(X=>`${X.name}|${X.headSha}|${X.commitsAhead}|${X.commitsBehind}|${X.unpushedCommits}|${X.remoteSyncStatus}`).join("||"),Fs=D=>D.map(X=>X.fullSha).join("|"),jo=D=>{var X,K;return D?`${(X=D.branchName)!=null?X:""}|${D.headSha}|${(K=D.parentSha)!=null?K:""}|${D.hasUncommittedChanges?1:0}`:"__none__"};async function Mn(D,X,K){var Be,Je;const ce=X!=null?X:Y,W=(Be=K==null?void 0:K.includeMergeNodes)!=null?Be:!0,ae=(Je=K==null?void 0:K.includeUnpushedShaMap)!=null?Je:!0,[w,k,R,B,H,oe]=await Promise.all([je("get_branches",{repoPath:D}),je("get_all_repo_commits",{repoPath:D}),je("get_unpushed_direct_commits",{repoPath:D,branch:ce}).catch(()=>[]),je("get_checked_out_ref",{repoPath:D}).catch(()=>null),je("list_worktrees",{repoPath:D}).catch(()=>[]),je("list_stashes",{repoPath:D}).catch(()=>[])]),pe=W?await ws(D,w,ce):b,Me=ae?await Promise.all([ce,...w.map(st=>st.name)].map(async st=>{const ht=await je("get_branch_unpushed_commit_shas",{repoPath:D,branch:st}).catch(()=>[]);return[st,ht]})):Object.entries(O);x(w),S(pe),M(k),T(R),L(Object.fromEntries(Me)),ee(B),re(H),vn(oe)}async function Yo(D){const[X,K,ce]=await Promise.all([je("get_branches",{repoPath:D}).catch(()=>[]),je("get_all_repo_commits",{repoPath:D}).catch(()=>[]),je("get_checked_out_ref",{repoPath:D}).catch(()=>null)]);return ko(X)!==ko(ho.current)||Fs(K)!==Fs(fs.current)||jo(ce)!==jo(Gn.current)}async function En(D){Ie(null),qe(!0),Pn.current=!0;try{const[X,K]=await Promise.all([je("get_repo_info",{repoPath:D}),je("get_default_branch",{repoPath:D})]);a(X.name),Q(K),n(D),await Mn(D,K),js(D),Ie({kind:"success",message:`Now targeting worktree at ${D}`})}catch(X){const K=X instanceof Error?X.message:String(X);Ie({kind:"error",message:K}),console.error("Failed to switch worktree:",K)}finally{qe(!1),Pn.current=!1}}async function Vn(D,X){if(!(!t||Ne)){Ve(!0),Ie(null);try{await je("remove_worktree",{repoPath:t,worktreePath:D,force:X}),await Mn(t),Ie({kind:"success",message:`Removed worktree at ${D}`})}catch(K){const ce=K instanceof Error?K.message:String(K);Ie({kind:"error",message:ce}),console.error("Failed to remove worktree:",ce)}finally{Ve(!1)}}}function Rn(D,X){var ce,W;const K=Hy(X);return yn.current===K?!1:(yn.current=K,a(X.name||md(D)),Q(X.defaultBranch||"main"),x(X.branches),S(X.mergeNodes),M(X.directCommits),T(X.unpushedDirectCommits),L(X.unpushedCommitShasByBranch),ee(X.checkedOutRef),re(X.worktrees),vn(X.stashes),mt(X.branchCommitPreviews),hn((ce=X.branchParentByName)!=null?ce:{}),on((W=X.laneByBranch)!=null?W:{}),Hn(X.branchUniqueAheadCounts),n(D),!0)}async function Xs(D){var W;const X=++ls.current,K=er(D);if(!K)return;Pn.current=!0;const ce=d[K];if(ce!=null&&ce.loaded)try{const ae=await je("get_repo_quick_state",{repoPath:K});if(X!==ls.current)return;const w=Vo(ae);if(((W=tn.current[K])!=null?W:ce?Vo(Ys(K,ce)):null)===w){ke(null),tn.current={...tn.current,[K]:w},Rn(K,ce),ys({path:K,name:ce.name||md(K),lastOpenedAt:Date.now(),branchName:ce.defaultBranch}),qe(!1),ot(!1),js(K),(async()=>{try{const R=await je("get_repo_refresh_fingerprint",{repoPath:K}),B=Ds(R);if(X!==ls.current)return;if(mn.current[K]!==B){const H=await je("get_repo_visual_snapshot",{repoPath:K,forceRefresh:!0});if(X!==ls.current)return;So(K,H),mn.current={...mn.current,[K]:B},tn.current={...tn.current,[K]:Vo(Ys(K,H))},Rn(K,H)}}catch{}})(),Pn.current=!1;return}tn.current={...tn.current,[K]:w}}catch{}if(ot(!0),qe(!0),ke(null),await new Promise(ae=>setTimeout(ae,15)),X===ls.current)try{const[ae,w]=await Promise.all([je("get_repo_info",{repoPath:K}),je("get_default_branch",{repoPath:K})]);if(X!==ls.current)return;a(ae.name),Q(w);const k=await je("get_repo_visual_snapshot",{repoPath:K,forceRefresh:!0});if(X!==ls.current)return;So(K,k),mn.current={...mn.current,[K]:Ds(jn(K,w,k))},tn.current={...tn.current,[K]:Vo(Ys(K,k))},Rn(K,k),ys({path:K,name:ae.name,lastOpenedAt:Date.now(),branchName:w}),qe(!1),ot(!1),js(K)}catch(ae){if(X!==ls.current)return;console.error("Failed to load repo:",ae),ke(ae instanceof Error?ae.message:String(ae)),n(null),ot(!1),qe(!1)}finally{Pn.current=!1}}async function js(D){const X=++ns.current;try{if(X!==ns.current)return;P(!1),Ee(null);const K=await je("get_github_info",{repoPath:D}),ce=await je("get_github_auth_status");if(X!==ns.current||(ge(ce),!ce.ghAvailable||!ce.authenticated))return;const W=await je("get_open_prs",{owner:K.owner,repo:K.repo});if(X!==ns.current)return;q(W),P(!0)}catch(K){if(X!==ns.current)return;console.log("GitHub data not available:",K),Ee(K instanceof Error?K.message:String(K)),P(!1)}}_.useEffect(()=>{let D=null,X=!1;const K=(()=>{try{return dp().label}catch{return null}})(),ce=async ae=>{var k;const w=(k=ae==null?void 0:ae.path)==null?void 0:k.trim();!w||X||t!==w&&await Xs(w)};return(async()=>{K==="main"&&(D=await yc("gitviz://open-repo",async w=>{await ce(w.payload)}));const ae=await je("take_pending_open_repo");await ce(ae)})(),()=>{X=!0,D&&D()}},[t]),_.useEffect(()=>{ho.current=g},[g]),_.useEffect(()=>{fs.current=C},[C]),_.useEffect(()=>{Gn.current=V},[V]),_.useEffect(()=>{gs.current=Cs},[Cs]),_.useEffect(()=>{},[t,Y,ti]),_.useEffect(()=>{if(!t||!Y||!ti)return;je("watch_repo",{repoPath:t}).catch(console.error);let D=!1,X=!1,K=!1,ce=!1,W=null,ae=null,w=null;const k=async()=>{if(!D){if(gs.current){X=!0;return}if(K){X=!0;return}K=!0;try{if(!await Yo(t)||D)return;await Mn(t,Y)}catch(H){console.warn("Frozen git-activity refresh failed:",H)}finally{K=!1,X&&!D&&(X=!1,window.setTimeout(()=>{k()},0))}}},R=()=>{X=!0,k()},B=async()=>{if(!(D||ce||document.visibilityState!=="visible")){ce=!0;try{const H=await je("get_remote_branch_head_sha",{repoPath:t,branch:Y});if(D||H==null)return;if(W==null){W=H;return}if(H===W)return;W=H,await Mn(t,Y)}catch(H){console.warn("Remote tip refresh failed:",H)}finally{ce=!1}}};return ae=window.setInterval(()=>{B()},15e3),B(),yc("git-activity",H=>{er(H.payload.repoPath)===t&&(mo(t,!0),R())}).then(H=>{D?H():w=H}).catch(console.error),()=>{D=!0,ae!=null&&window.clearInterval(ae),w&&w()}},[t,Y,ti]);async function Bs(){if(t){et(!0),Ee(null);try{await je("authenticate_github");const D=await je("get_github_auth_status");ge(D),D.authenticated?await js(t):D.message&&Ee(D.message)}catch(D){Ee(D instanceof Error?D.message:String(D))}finally{et(!1)}}}const Wo=new Set(N.map(D=>D.branchName)),ao=14*864e5,hs=Date.now(),Ss=g.filter(D=>D.status==="stale"),Ro=Ss.filter(D=>Wo.has(D.name)||hs-new Date(D.lastCommitDate).getTime()<=ao),_o=Ss.filter(D=>!Wo.has(D.name)&&hs-new Date(D.lastCommitDate).getTime()>ao),go=D=>{var X;return Object.prototype.hasOwnProperty.call(Xn,D.name)?Math.max(0,(X=Xn[D.name])!=null?X:0):Math.max(0,D.commitsAhead)};_.useEffect(()=>{pt({}),Us.current=null,et(!1),ge(null),Ee(null),q([]),Ie(null)},[t]),_.useEffect(()=>{var R,B,H,oe;if(!t||!Y){pt({}),mt({}),hn({}),on({}),Hn({}),Us.current=null;return}const D=g.map(pe=>{var Me;return`${pe.name}:${pe.headSha}:${(Me=pe.parentBranch)!=null?Me:""}:${pe.commitsAhead}`}).join("|"),X=b.map(pe=>{var Me,Be;return`${pe.fullSha}:${(Be=(Me=pe.parentShas)==null?void 0:Me[1])!=null?Be:""}`}).join("|"),K=`${t}|${Y}|${D}|${X}`;if(Us.current===K)return;Us.current=K;const ce={},W={};for(const pe of g){if(pe.name===Y)continue;const Me=C.filter(Be=>Be.branch===pe.name).map(Be=>{var Je;return{fullSha:Be.fullSha,sha:Be.sha,parentSha:(Je=Be.parentSha)!=null?Je:null,message:Be.message,author:Be.author,date:Be.date,kind:"commit"}});ce[pe.name]=Me,W[pe.name]=Me.length}const ae=new Map;for(const pe of C)ae.set(pe.fullSha,pe.branch);const w=pe=>{if(!pe)return null;const Me=ae.get(pe);if(Me)return Me;for(const[Be,Je]of ae.entries())if(Be.startsWith(pe)||pe.startsWith(Be))return Je;return null},k={[Y]:null};for(const pe of g){if(pe.name===Y){k[pe.name]=null;continue}const Me=C.filter(ht=>ht.branch===pe.name),Be=new Set(Me.map(ht=>ht.fullSha)),Je=(B=(R=Me.filter(ht=>{var dt;const yt=(dt=ht.parentSha)!=null?dt:null;return!yt||!Be.has(yt)}).sort((ht,yt)=>{const dt=new Date(ht.date).getTime()-new Date(yt.date).getTime();return dt!==0?dt:ht.fullSha.localeCompare(yt.fullSha)})[0])==null?void 0:R.parentSha)!=null?B:null,st=w(Je);k[pe.name]=(oe=(H=st!=null?st:Ot[pe.name])!=null?H:pe.parentBranch)!=null?oe:null}pt({}),mt(ce),hn(k),on(pe=>{const Me={};for(const Be of g){const Je=pe[Be.name];Je!=null&&Number.isFinite(Je)&&(Me[Be.name]=Je)}return Me}),Hn(W)},[t,Y,g,b,C,Ot]),_.useEffect(()=>{if(!_t){xt(!1);return}xt(!0);const D=window.setTimeout(()=>{xt(!1)},By),X=window.setTimeout(()=>{Ie(null)},By+gS);return()=>{window.clearTimeout(D),window.clearTimeout(X)}},[_t]),_.useEffect(()=>{if(!t||g.length===0)return;const D=ce=>new Promise(W=>setTimeout(W,ce));async function X(){const W=`${await je("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${W}`),await D(800),await je("screenshot",{path:`${W}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${W}`)}const K=ce=>{if((ce.metaKey||ce.ctrlKey)&&!ce.shiftKey&&!ce.altKey&&ce.key.toLowerCase()==="b"){ce.preventDefault(),gn(W=>!W);return}(ce.metaKey||ce.ctrlKey)&&ce.shiftKey&&ce.key==="S"&&(ce.preventDefault(),X())};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[t,i,g]);function Bo(){He(!0),setTimeout(()=>{Re(!1),He(!1),tt("active"),$t(null)},100)}async function Lo(D){if(!t)return;Ie(null);const X=/^STASH:(\d+)$/.exec(D.commitSha);if(X){try{const K=parseInt(X[1],10),ce=await je("apply_stash_restore",{repoPath:t,stashIndex:K});ee(ce),await Mn(t);const W=`Stash ${K+1}`,ae=ce.branchName?` on branch ${ce.branchName}`:" at the stash base (detached HEAD)";Ie({kind:"success",message:`Restored ${W}${ae}; stash applied and dropped (uncommitted changes).`})}catch(K){const ce=K instanceof Error?K.message:String(K);Ie({kind:"error",message:ce}),console.error("Failed to apply stash:",ce)}return}if(D.branchName){const K=(W,ae)=>{const w=W.replace(/\\/g,"/").replace(/\/+$/,""),k=ae.replace(/\\/g,"/").replace(/\/+$/,"");return w===k||w.toLowerCase()===k.toLowerCase()},ce=le.find(W=>W.pathExists===!1||W.isCurrent||t&&K(W.path,t)?!1:W.branchName===D.branchName);if(ce){await En(ce.path);return}}try{let K="";(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await je("stash_push",{repoPath:t,includeUntracked:!0}),K="Stashed local changes (including untracked), then ",await Mn(t));const W=D.branchName?await je("checkout_branch",{repoPath:t,branchName:D.branchName}):await je("checkout_ref",{repoPath:t,refName:D.commitSha}),ae=await je("get_checked_out_ref",{repoPath:t}).catch(()=>W);ee(ae),await Mn(t);const w=ae.branchName?ae.branchName:`${ae.headSha.slice(0,7)} (detached)`;Ie({kind:"success",message:`${K}Checked out ${w}`})}catch(K){const ce=K instanceof Error?K.message:String(K);Ie({kind:"error",message:ce}),console.error("Failed to checkout commit:",ce)}}async function Si(){if(!(!t||rs)){Ie(null),Xt(!0);try{if(!(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Ie({kind:"error",message:"No local changes to stash."});return}await je("stash_push",{repoPath:t,includeUntracked:!0}),await Mn(t),Ie({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(D){const X=D instanceof Error?D.message:String(D);Ie({kind:"error",message:X}),console.error("Failed to stash:",X)}finally{Xt(!1)}}}async function ta(D){if(!t||$n)return!1;const X=D.trim();if(!X)return Ie({kind:"error",message:"Enter a commit message."}),!1;Ie(null),rt(!0);try{if(!(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ie({kind:"error",message:"No local changes to commit."}),!1;const ce=await je("commit_working_tree",{repoPath:t,message:X});return ee(ce),Mn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:"Committed local changes."}),!0}catch(K){const ce=K instanceof Error?K.message:String(K);return Ie({kind:"error",message:ce}),console.error("Failed to commit:",ce),!1}finally{rt(!1)}}async function Ii(){if(!t||In)return!1;Ie(null),fo(!0);try{if(!(await je("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ie({kind:"error",message:"No local changes to stage."}),!1;const X=await je("stage_working_tree",{repoPath:t});return ee(X),Mn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:"Staged all changes."}),!0}catch(D){const X=D instanceof Error?D.message:String(D);return Ie({kind:"error",message:X}),console.error("Failed to stage:",X),!1}finally{fo(!1)}}async function Pi(D,X){if(!(!t||Zo)){Is(!0),Ie(null);try{const K=/^STASH:(\d+)$/.exec(D);let ce;if(K){const W=parseInt(K[1],10);ce=await je("move_stash_to_new_branch",{repoPath:t,stashIndex:W,branchName:X})}else ce=await je("create_branch_from_uncommitted",{repoPath:t,branchName:X});ee(ce),Mn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:`Moved to new branch "${X}"`})}catch(K){const ce=K instanceof Error?K.message:String(K);Ie({kind:"error",message:ce}),console.error("Failed to create branch from node:",ce)}finally{Is(!1)}}}async function ni(D){if(!(!t||Zo)){Is(!0),Ie(null);try{const X=await je("create_root_branch",{repoPath:t,branchName:D});ee(X),Mn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:`Created new root branch "${D}"`})}catch(X){const K=X instanceof Error?X.message:String(X);Ie({kind:"error",message:K}),console.error("Failed to create root branch:",K)}finally{Is(!1)}}}async function Tt(D,X){if(!t)return;const K=Array.from(new Set(D.filter(ce=>!!ce&&ce!==X)));if(K.length!==0){Ie(null),Lt(!0);try{let ce=null;for(const W of K)ce=await je("merge_ref_into_branch",{repoPath:t,sourceRef:W,targetBranch:X});Mn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),ce&&ee(ce),Ie({kind:"success",message:K.length===1?`Merged ${K[0].slice(0,7)} into ${X}`:`Merged ${K.length} commits into ${X}`})}catch(ce){const W=ce instanceof Error?ce.message:String(ce);Ie({kind:"error",message:W}),console.error("Failed to merge refs into branch:",W)}finally{Lt(!1)}}}async function Ci(){if(!(!t||Rt)){Ie(null),Qt(!0);try{const D=await je("push_all_unpushed_branches",{repoPath:t});Mn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:D.length>0?D.length===1?`Pushed ${D[0].branchName}`:`Pushed ${D.length} branches`:"Everything local is already pushed."})}catch(D){const X=D instanceof Error?D.message:String(D);Ie({kind:"error",message:X}),console.error("Failed to push all branches:",X)}finally{Qt(!1)}}}async function ki(){if(!(!t||Rt)){Ie(null),Qt(!0);try{const D=await je("push_current_branch",{repoPath:t});Mn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:`Pushed ${D.branchName}`})}catch(D){const X=D instanceof Error?D.message:String(D);Ie({kind:"error",message:X}),console.error("Failed to push current branch:",X)}finally{Qt(!1)}}}async function Hi(D){var K;if(!t||Rt)return;const X=Array.from(new Map(D.filter(ce=>ce.branchName&&ce.targetSha).map(ce=>[ce.branchName,ce])).values());if(X.length!==0){Ie(null),Qt(!0);try{for(const ce of X)await je("push_branch",{repoPath:t,branchName:ce.branchName,targetSha:ce.targetSha});Mn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1}),Ie({kind:"success",message:X.length===1?`Pushed ${X[0].branchName} through ${(K=X[0].targetSha)==null?void 0:K.slice(0,7)}`:`Pushed ${X.length} selected commit ranges`})}catch(ce){const W=ce instanceof Error?ce.message:String(ce);Ie({kind:"error",message:W}),console.error("Failed to push selected commits:",W)}finally{Qt(!1)}}}async function fi(D){var ae;if(!t||ut)return;const X=Array.from(new Set(D.branchNames.filter(w=>w&&w!==Y))),K=!!D.discardUncommittedChanges,ce=(ae=D.stashIndices)!=null?ae:[],W=Array.from(new Set(ce)).sort((w,k)=>k-w);if(!(X.length===0&&!K&&W.length===0)){Ie(null),nt(!0);try{for(const R of W)await je("stash_drop",{repoPath:t,stashIndex:R});const w=X.length>0||K?await je("delete_selected_elements",{repoPath:t,branchNames:X,discardUncommittedChanges:K}):{deletedBranches:[],discardedUncommittedChanges:!1};Mn(t,void 0,{includeMergeNodes:!1,includeUnpushedShaMap:!1});const k=[];W.length>0&&k.push(W.length===1?`removed stash ${W[0]+1}`:`removed ${W.length} stashes`),w.discardedUncommittedChanges&&k.push("discarded local uncommitted changes"),w.deletedBranches.length>0&&k.push(w.deletedBranches.length===1?`deleted ${w.deletedBranches[0]}`:`deleted ${w.deletedBranches.length} branches`),Ie({kind:"success",message:k.length>0?k.join(" and "):"Nothing to delete."})}catch(w){const k=w instanceof Error?w.message:String(w);Ie({kind:"error",message:k}),console.error("Failed to delete selected elements:",k)}finally{nt(!1)}}}function yo(D){$t(D),gt(X=>{var K;return{branch:D,seq:((K=X==null?void 0:X.seq)!=null?K:0)+1}})}function Fo(D){D&&(lt(D),ie(X=>X+1))}function hi(D){D&&(he(D),ie(X=>X+1))}_.useEffect(()=>{var K;const D=V!=null&&V.hasUncommittedChanges?"WORKING_TREE":(K=V==null?void 0:V.headSha)!=null?K:null;if(!D)return;const X=`${t!=null?t:"__no-repo__"}|${_s}|${D}`;Ps.current!==X&&(Ps.current=X,lt(D),ie(ce=>ce+1))},[V==null?void 0:V.hasUncommittedChanges,V==null?void 0:V.headSha,_s,t]),_.useEffect(()=>{Ps.current=null},[t]);const{enrichedBranches:j,enrichedBranchCommitPreviews:U,enrichedBranchUniqueAheadCounts:ue,enrichedDirectCommits:Ce}=_.useMemo(()=>{var dt,ft,wn,Bn,Ln;const D=Zx(Sn,g,C,At,Xn,Y,(dt=V==null?void 0:V.hasUncommittedChanges)!=null?dt:!1);let X=D.branches,K=D.directCommits,ce=D.branchCommitPreviews,W=D.branchUniqueAheadCounts;if(!(V!=null&&V.hasUncommittedChanges))return{enrichedBranches:X,enrichedDirectCommits:K,enrichedBranchCommitPreviews:ce,enrichedBranchUniqueAheadCounts:W};const ae=V.headSha||V.parentSha||null,w=(wn=(ft=K[0])==null?void 0:ft.fullSha)!=null?wn:null,k=(Dt,qt)=>!Dt||!qt?!1:Dt===qt||Dt.startsWith(qt)||qt.startsWith(Dt),R=[{name:Y,headSha:w!=null?w:"",isDefault:!0},...X.map(Dt=>({name:Dt.name,headSha:Dt.headSha,isDefault:!1}))],B=V.branchName?R.find(Dt=>Dt.name===V.branchName):void 0,H=ae?R.filter(Dt=>k(Dt.headSha,ae)):[],oe=(Bn=B!=null?B:H.find(Dt=>Dt.isDefault))!=null?Bn:H[0],pe=oe&&!oe.isDefault?X.find(Dt=>Dt.name===oe.name):void 0,Me=(()=>{var qt;if(!ae)return null;const Dt=K.find(Mt=>k(Mt.fullSha,ae)||k(Mt.sha,ae));if(Dt!=null&&Dt.date)return Dt.date;if(pe){const Mt=((qt=ce[pe.name])!=null?qt:[]).find(Pt=>k(Pt.fullSha,ae)||k(Pt.sha,ae));if(Mt!=null&&Mt.date)return Mt.date}return null})(),Be=Me?new Date(Me).getTime():Number.NaN,Je=Date.now(),st=Number.isFinite(Be)?Math.max(Je,Be+1):Je,ht=new Date(st).toISOString(),yt={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ae,message:"Local uncommitted changes",author:"You",date:ht,kind:"uncommitted"};return pe?{enrichedBranches:X.map(qt=>qt.name===pe.name?{...qt,commitsAhead:qt.commitsAhead+1,unpushedCommits:qt.unpushedCommits+1,lastCommitDate:ht,headSha:"WORKING_TREE"}:qt),enrichedDirectCommits:K,enrichedBranchCommitPreviews:{...ce,[pe.name]:[yt,...ce[pe.name]||[]]},enrichedBranchUniqueAheadCounts:{...W,[pe.name]:Math.max(0,(Ln=Object.prototype.hasOwnProperty.call(W,pe.name)?W[pe.name]:pe.commitsAhead)!=null?Ln:0)+1}}:{enrichedBranches:X,enrichedBranchCommitPreviews:{...ce,[Y]:[yt,...ce[Y]||[]]},enrichedBranchUniqueAheadCounts:{...W},enrichedDirectCommits:K}},[g,At,Xn,V,Y,C,Sn]),Pe=_.useMemo(()=>{const D={...Ot};return D[Y]=null,D},[Ot,Y,j]),Qe=_.useMemo(()=>{var D;return(D=Aw(j,Y,Pe,ln))!=null?D:fp(j,Y,U,Pe)},[j,Y,U,Pe,ln]),Vt=_.useMemo(()=>Mc({lanes:Qe,branches:j,mergeNodes:b,directCommits:Ce,unpushedDirectCommits:E,defaultBranch:Y,branchCommitPreviews:U,branchParentByName:Pe,branchUniqueAheadCounts:ue,manuallyOpenedClumps:Ho,manuallyClosedClumps:Ut,isDebugOpen:!1,gridSearchQuery:te,gridFocusSha:Ye,checkedOutRef:V!=null?V:null,orientation:_s}),[Qe,j,b,Ce,E,Y,U,Pe,ue,Ho,Ut,te,Ye,(cs=V==null?void 0:V.headSha)!=null?cs:null,(ro=V==null?void 0:V.branchName)!=null?ro:null,_s]),Nt=_.useMemo(()=>{var D;return Ye&&(D=Vt.clusterKeyByCommitId.get(Ye))!=null?D:null},[Vt.clusterKeyByCommitId,Ye]),Zt=_.useMemo(()=>{if(!Nt||Ut.has(Nt))return Ho;const D=new Set(Ho);return D.add(Nt),D},[Ut,Ho,Nt]),Gt=_.useMemo(()=>{if(!Nt)return Ut;const D=new Set(Ut);return D.delete(Nt),D},[Ut,Nt]),rn=_.useMemo(()=>Mc({lanes:Qe,branches:j,mergeNodes:b,directCommits:Ce,unpushedDirectCommits:E,defaultBranch:Y,branchCommitPreviews:U,branchParentByName:Pe,branchUniqueAheadCounts:ue,manuallyOpenedClumps:Zt,manuallyClosedClumps:Gt,isDebugOpen:!1,gridSearchQuery:te,gridFocusSha:Ye,checkedOutRef:V!=null?V:null,orientation:_s}),[Qe,j,b,Ce,E,Y,U,Pe,ue,Zt,Gt,te,Ye,(qs=V==null?void 0:V.headSha)!=null?qs:null,(Ls=V==null?void 0:V.branchName)!=null?Ls:null,_s]);_.useEffect(()=>{try{const D=window.localStorage.getItem(Ly);if(D){const K=Number(D);Number.isFinite(K)&&ei(Math.min(Py,Math.max(Iy,K)))}const X=window.localStorage.getItem(Oy);X!=null&&gn(X==="true")}catch{}},[]),_.useEffect(()=>{Po.current=Cn},[Cn]),_.useEffect(()=>{const D=di.current;D&&(D.style.width=vs?"0px":`${Cn}px`)},[Cn,vs]),_.useEffect(()=>{try{window.localStorage.setItem(Oy,String(vs))}catch{}},[vs]);const xn=D=>{const X=Io.current;if(!X)return;const K=X.startWidth+(D-X.startX);X.pendingWidth=Math.min(Py,Math.max(Iy,K));const ce=di.current;ce&&(ce.style.width=`${X.pendingWidth}px`)},cn=(D,X)=>{const K=Io.current;if(K&&!(X!=null&&K.pointerId!==X)){Io.current=null,so({dragging:!1,lastEvent:D}),document.body.style.cursor="",document.body.style.userSelect="",ei(K.pendingWidth);try{window.localStorage.setItem(Ly,String(K.pendingWidth))}catch{}}},Gs=D=>{D.button===0&&(D.preventDefault(),so({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:D.pointerId,clientX:D.clientX,width:Po.current}),Io.current={startX:D.clientX,startWidth:Po.current,pendingWidth:Po.current,pointerId:D.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",D.currentTarget.setPointerCapture(D.pointerId))},Yt=D=>{const X=Io.current;!X||X.pointerId!==D.pointerId||(Un.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:D.clientX}),so(K=>K.dragging?{dragging:!0,lastEvent:"move"}:K),xn(D.clientX))},ss=D=>{if(Io.current){console.debug("[sidebar-resize] pointerup",{pointerId:D.pointerId});try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}cn("pointerup",D.pointerId)}},xs=D=>{if(Io.current){console.debug("[sidebar-resize] pointercancel",{pointerId:D.pointerId});try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}cn("pointercancel",D.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:di,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:vs?64:Cn},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent","aria-label":vs?"Open sidebar":"Collapse sidebar",onClick:()=>gn(D=>!D),children:vs?l.jsx(vw,{className:"h-4 w-4 shrink-0"}):l.jsx(xw,{className:"h-4 w-4 shrink-0"})}),l.jsx(pS,{className:yS("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:vs,projects:Uo,activeProjectPath:t,onSelectProject:Xs,onAddProject:Rs,onRemoveProject:an,onRevealProjectInFinder:Ws,projectLoading:Ze||(p&&t?!((Ks=d[t])!=null&&Ks.loaded):!1),projectError:wt,checkedOutRef:V,showCommits:Bt,onToggleShowCommits:()=>Kt(D=>!D),manuallyOpenedClumpsByProject:Te,manuallyClosedClumpsByProject:fe,manuallyOpenedClumps:Zt,manuallyClosedClumps:Gt,setManuallyOpenedClumps:oo,setManuallyClosedClumps:ks,gridLayoutModel:rn,onSelectCommit:Fo,onSelectBranch:hi}),vs?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Gs,onPointerMove:Yt,onPointerUp:ss,onPointerCancel:xs,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(rS,{branches:j,mergeNodes:b,directCommits:Ce,unpushedDirectCommits:E,unpushedCommitShasByBranch:O,defaultBranch:Y,branchCommitPreviews:U,branchParentByName:Pe,branchUniqueAheadCounts:ue,gridSearchQuery:te,gridSearchJumpToken:I,gridSearchJumpDirection:F,gridFocusSha:Ye,onGridSearchResultCountChange:ve,onGridSearchResultIndexChange:We,onGridSearchFocusChange:lt,checkedOutRef:V,onCommitClick:Lo,onMergeRefsIntoBranch:Tt,mergeInProgress:ct,onPushAllBranches:Ci,onPushCurrentBranch:ki,onPushCommitTargets:Hi,pushInProgress:Rt,onDeleteSelection:fi,deleteInProgress:ut,worktrees:le,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Vn,removeWorktreeInProgress:Ne,onSwitchToWorktree:En,onStashLocalChanges:Si,stashInProgress:rs,stashDisabled:!1,onCommitLocalChanges:ta,commitInProgress:$n,commitDisabled:!1,onStageAllChanges:Ii,stageInProgress:In,onCreateBranchFromNode:Pi,onCreateRootBranch:ni,createBranchFromNodeInProgress:Zo,isDebugOpen:Jo,onDebugClose:()=>Ns(!1),onInteractionChange:ui,manuallyOpenedClumps:Zt,manuallyClosedClumps:Gt,setManuallyOpenedClumps:oo,setManuallyClosedClumps:ks,layoutModel:rn,orientation:_s,gridHudProps:wi})]}),se&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${Xe?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Bo,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>tt("active"),className:`text-xs font-medium transition-colors ${Fe==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[Ro.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>tt("inactive"),className:`text-xs font-medium transition-colors ${Fe==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[_o.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Fe==="active"?Ro:_o).map(D=>{const X=(bt==null?void 0:bt.name)===D.name,K=go(D);return l.jsxs("button",{onClick:()=>yo(D),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${X?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:D.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[K>0&&`${K} ahead`,K>0&&D.commitsBehind>0&&", ",D.commitsBehind>0&&`${D.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},D.name)})})]})]})})})}var Bc=$x(),vS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,wS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=vS}var as=wS,SS=`.icon-transitions-module__iconState___uqK9J {
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
}`,CS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=SS}var es=CS,kS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),jS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),MS=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),ES=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${es.iconState} ${n?es.hiddenScaled:es.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${es.iconState} ${n?es.visibleScaled:es.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),TS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${es.iconStateFast} ${i?es.visibleScaled:u?es.sending:es.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${es.iconStateFast} ${a?es.visibleScaled:es.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${es.iconStateFast} ${c?es.visibleScaled:es.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},AS=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${es.iconFade} ${n?es.visible:es.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${es.iconFade} ${n?es.hidden:es.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),NS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${es.iconFadeFast} ${n?es.hidden:es.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${es.iconFadeFast} ${n?es.visible:es.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),DS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),RS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Jx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),BS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),LS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),OS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),zS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),$S=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),IS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),PS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),eb=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Zh=eb.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Jh="__agentation_freeze";function HS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Jh]||(t[Jh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Jh]}var un=HS();typeof window<"u"&&!un.installed&&(un.origSetTimeout=window.setTimeout.bind(window),un.origSetInterval=window.setInterval.bind(window),un.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?un.origSetTimeout(t,n):un.origSetTimeout((...a)=>{un.frozen?un.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?un.origSetInterval(t,n):un.origSetInterval((...a)=>{un.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>un.origRAF(n=>{un.frozen?un.frozenRAFQueue.push(t):t(n)}),un.installed=!0);var Ht=un.origSetTimeout,US=un.origSetInterval,fl=un.origRAF;function VS(t){return t?eb.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function YS(){if(typeof document>"u"||un.frozen)return;un.frozen=!0,un.frozenTimeoutQueue=[],un.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Zh},
    *${Zh}::before,
    *${Zh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),un.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;VS(i)||(n.pause(),un.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Uy(){var i;if(typeof document>"u"||!un.frozen)return;un.frozen=!1;const t=un.frozenTimeoutQueue;un.frozenTimeoutQueue=[];for(const a of t)un.origSetTimeout(()=>{if(un.frozen){un.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=un.frozenRAFQueue;un.frozenRAFQueue=[];for(const a of n)un.origRAF(c=>{if(un.frozen){un.frozenRAFQueue.push(a);return}a(c)});for(const a of un.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}un.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function em(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:S=!1,computedStyles:C},M){const[E,T]=_.useState(u),[O,L]=_.useState(!1),[N,q]=_.useState("initial"),[Y,Q]=_.useState(!1),[V,ee]=_.useState(!1),le=_.useRef(null),re=_.useRef(null),Ne=_.useRef(null),Ve=_.useRef(null);_.useEffect(()=>{b&&N!=="exit"&&q("exit")},[b,N]),_.useEffect(()=>{Ht(()=>{q("enter")},0);const me=Ht(()=>{q("entered")},200),Te=Ht(()=>{const $=le.current;$&&(em($),$.selectionStart=$.selectionEnd=$.value.length,$.scrollTop=$.scrollHeight)},50);return()=>{clearTimeout(me),clearTimeout(Te),Ne.current&&clearTimeout(Ne.current),Ve.current&&clearTimeout(Ve.current)}},[]);const te=_.useCallback(()=>{Ve.current&&clearTimeout(Ve.current),L(!0),Ve.current=Ht(()=>{L(!1),em(le.current)},250)},[]);_.useImperativeHandle(M,()=>({shake:te}),[te]);const he=_.useCallback(()=>{q("exit"),Ne.current=Ht(()=>{p()},150)},[p]),I=_.useCallback(()=>{E.trim()&&h(E.trim())},[E,h]),ie=_.useCallback(me=>{me.stopPropagation(),!me.nativeEvent.isComposing&&(me.key==="Enter"&&!me.shiftKey&&(me.preventDefault(),I()),me.key==="Escape"&&he())},[I,he]),F=[as.popup,S?as.light:"",N==="enter"?as.enter:"",N==="entered"?as.entered:"",N==="exit"?as.exit:"",O?as.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:re,className:F,"data-annotation-popup":!0,style:g,onClick:me=>me.stopPropagation(),children:[l.jsxs("div",{className:as.header,children:[C&&Object.keys(C).length>0?l.jsxs("button",{className:as.headerToggle,onClick:()=>{const me=V;ee(!V),me&&Ht(()=>em(le.current),0)},type:"button",children:[l.jsx("svg",{className:`${as.chevron} ${V?as.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:as.element,children:n})]}):l.jsx("span",{className:as.element,children:n}),i&&l.jsx("span",{className:as.timestamp,children:i})]}),C&&Object.keys(C).length>0&&l.jsx("div",{className:`${as.stylesWrapper} ${V?as.expanded:""}`,children:l.jsx("div",{className:as.stylesInner,children:l.jsx("div",{className:as.stylesBlock,children:Object.entries(C).map(([me,Te])=>l.jsxs("div",{className:as.styleLine,children:[l.jsx("span",{className:as.styleProperty,children:me.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:as.styleValue,children:Te}),";"]},me))})})}),a&&l.jsxs("div",{className:as.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:le,className:as.textarea,style:{borderColor:Y?x:void 0},placeholder:c,value:E,onChange:me=>T(me.target.value),onFocus:()=>Q(!0),onBlur:()=>Q(!1),rows:2,onKeyDown:ie}),l.jsxs("div",{className:as.actions,children:[y&&l.jsx("div",{className:as.deleteWrapper,children:l.jsx("button",{className:as.deleteButton,onClick:y,type:"button",children:l.jsx($S,{size:22})})}),l.jsx("button",{className:as.cancel,onClick:he,children:"Cancel"}),l.jsx("button",{className:as.submit,style:{backgroundColor:x,opacity:E.trim()?1:.4},onClick:I,disabled:!E.trim(),children:d})]})]})}),WS=({content:t,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const M=y.current.getBoundingClientRect();p({top:M.top+M.height/2,right:window.innerWidth-M.left+8})}},S=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Ht(()=>{c(!0)},500)},C=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Ht(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:S,onMouseLeave:C,...i,children:n}),u&&Bc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},FS=`.styles-module__tooltip___mcXL2 {
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
}`,XS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=FS}var Vy=XS,Er=({content:t})=>l.jsx(WS,{className:Vy.tooltip,content:t,children:l.jsx(MS,{className:Vy.tooltipIcon})}),vt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},tb=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...vt.navigation},{type:"header",label:"Header",...vt.header},{type:"hero",label:"Hero",...vt.hero},{type:"section",label:"Section",...vt.section},{type:"sidebar",label:"Sidebar",...vt.sidebar},{type:"footer",label:"Footer",...vt.footer},{type:"modal",label:"Modal",...vt.modal},{type:"banner",label:"Banner",...vt.banner},{type:"drawer",label:"Drawer",...vt.drawer},{type:"popover",label:"Popover",...vt.popover},{type:"divider",label:"Divider",...vt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...vt.card},{type:"text",label:"Text",...vt.text},{type:"image",label:"Image",...vt.image},{type:"video",label:"Video",...vt.video},{type:"table",label:"Table",...vt.table},{type:"grid",label:"Grid",...vt.grid},{type:"list",label:"List",...vt.list},{type:"chart",label:"Chart",...vt.chart},{type:"codeBlock",label:"Code Block",...vt.codeBlock},{type:"map",label:"Map",...vt.map},{type:"timeline",label:"Timeline",...vt.timeline},{type:"calendar",label:"Calendar",...vt.calendar},{type:"accordion",label:"Accordion",...vt.accordion},{type:"carousel",label:"Carousel",...vt.carousel},{type:"logo",label:"Logo",...vt.logo},{type:"faq",label:"FAQ",...vt.faq},{type:"gallery",label:"Gallery",...vt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...vt.button},{type:"input",label:"Input",...vt.input},{type:"search",label:"Search",...vt.search},{type:"form",label:"Form",...vt.form},{type:"tabs",label:"Tabs",...vt.tabs},{type:"dropdown",label:"Dropdown",...vt.dropdown},{type:"toggle",label:"Toggle",...vt.toggle},{type:"stepper",label:"Stepper",...vt.stepper},{type:"rating",label:"Rating",...vt.rating},{type:"fileUpload",label:"File Upload",...vt.fileUpload},{type:"checkbox",label:"Checkbox",...vt.checkbox},{type:"radio",label:"Radio",...vt.radio},{type:"slider",label:"Slider",...vt.slider},{type:"datePicker",label:"Date Picker",...vt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...vt.avatar},{type:"badge",label:"Badge",...vt.badge},{type:"tag",label:"Tag",...vt.tag},{type:"breadcrumb",label:"Breadcrumb",...vt.breadcrumb},{type:"pagination",label:"Pagination",...vt.pagination},{type:"progress",label:"Progress",...vt.progress},{type:"alert",label:"Alert",...vt.alert},{type:"toast",label:"Toast",...vt.toast},{type:"notification",label:"Notification",...vt.notification},{type:"tooltip",label:"Tooltip",...vt.tooltip},{type:"stat",label:"Stat",...vt.stat},{type:"skeleton",label:"Skeleton",...vt.skeleton},{type:"chip",label:"Chip",...vt.chip},{type:"icon",label:"Icon",...vt.icon},{type:"spinner",label:"Spinner",...vt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...vt.pricing},{type:"testimonial",label:"Testimonial",...vt.testimonial},{type:"cta",label:"CTA",...vt.cta},{type:"productCard",label:"Product Card",...vt.productCard},{type:"profile",label:"Profile",...vt.profile},{type:"feature",label:"Feature",...vt.feature},{type:"team",label:"Team",...vt.team},{type:"login",label:"Login",...vt.login},{type:"contact",label:"Contact",...vt.contact}]}],Qi={};for(const t of tb)for(const n of t.items)Qi[n.type]=n;function Ue({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Fn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Qo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function GS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Fn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Ue,{w:t*.06}),l.jsx(Ue,{w:t*.07}),l.jsx(Ue,{w:t*.05}),l.jsx(Ue,{w:t*.06})]}),l.jsx(Fn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function qS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ue,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ue,{w:t*.6}),l.jsx(Ue,{w:t*.4}),l.jsx(Fn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function KS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ue,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Fn,{w:10,h:10,radius:2}),l.jsx(Ue,{w:t*(.4+c*17%30/100)})]},c))]})}function QS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:"60%",h:3,strong:!0}),l.jsx(Ue,{w:"80%",h:2}),l.jsx(Ue,{w:"70%",h:2}),l.jsx(Ue,{w:"60%",h:2})]},c))})}function ZS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ue,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ue,{w:"90%"}),l.jsx(Ue,{w:"70%"}),l.jsx(Ue,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Fn,{w:70,h:26,radius:4}),l.jsx(Fn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function JS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ue,{w:"70%",h:4,strong:!0}),l.jsx(Ue,{w:"95%",h:2}),l.jsx(Ue,{w:"85%",h:2}),l.jsx(Ue,{w:"50%",h:2})]})]})}function e4({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ue,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ue,{w:`${70+u*13%25}%`,h:2},u))]})}function t4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function n4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ue,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ue,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function s4({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Qo,{size:8}),l.jsx(Ue,{w:`${55+c*17%35}%`,h:2})]},c))})}function o4({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ue,{w:Math.max(20,t*.5),h:3,strong:!0})})}function i4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ue,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ue,{w:"40%",h:2})})]})}function a4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:60+c*17%30,h:2}),l.jsx(Fn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Fn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function r4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ue,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ue,{w:"80%",h:2}),l.jsx(Ue,{w:"65%",h:2}),l.jsx(Ue,{w:"75%",h:2})]})]})}function l4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function c4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ue,{w:Math.max(16,t*.5),h:2,strong:!0})})}function u4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ue,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ue,{w:t*.35})]})}function d4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Ue,{w:t*.3,h:4,strong:!0}),l.jsx(Ue,{w:t*.7}),l.jsx(Ue,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Fn,{w:"33%",h:"100%",radius:4}),l.jsx(Fn,{w:"33%",h:"100%",radius:4}),l.jsx(Fn,{w:"33%",h:"100%",radius:4})]})]})}function f4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Fn,{w:"100%",h:"100%",radius:4},u))})}function h4({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ue,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ue,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function m4({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function p4({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Qo,{size:Math.min(14,n*.4)}),l.jsx(Ue,{w:"50%",h:2})]})}function _4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Qo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:"60%",h:3,strong:!0}),l.jsx(Ue,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function g4({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function y4({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Fn,{w:a,h:`${d}%`,radius:2},u)})})}function x4({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Fn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function b4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ue,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function v4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ue,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function w4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Fn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function S4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function C4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ue,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function k4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Qo,{size:5}),l.jsx(Qo,{size:5}),l.jsx(Qo,{size:5})]})]})}function j4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ue,{w:t*.4,h:3,strong:!0}),l.jsx(Ue,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Qo,{size:5}),l.jsx(Ue,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Fn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function M4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:"90%",h:2}),l.jsx(Ue,{w:"75%",h:2}),l.jsx(Ue,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Qo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ue,{w:60,h:3,strong:!0}),l.jsx(Ue,{w:40,h:2})]})]})]})}function E4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ue,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ue,{w:t*.35}),l.jsx(Fn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function T4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:"40%",h:3,strong:!0}),l.jsx(Ue,{w:"70%",h:2})]})]})}function A4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ue,{w:t*.4,h:3,strong:!0}),l.jsx(Fn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function N4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ue,{w:t*.5,h:2}),l.jsx(Ue,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ue,{w:t*.3,h:2})]})}function D4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function R4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ue,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function B4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function L4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function O4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Qo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ue,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function z4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ue,{w:t*.4,h:2}),l.jsx(Ue,{w:t*.25,h:2})]})}function $4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Qo,{size:6}),l.jsx(Qo,{size:6}),l.jsx(Qo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ue,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function I4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ue,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ue,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function P4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Qo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:"50%",h:3,strong:!0}),l.jsx(Ue,{w:"75%",h:2})]}),l.jsx(Ue,{w:30,h:2})]})}function H4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ue,{w:"65%",h:4,strong:!0}),l.jsx(Ue,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ue,{w:"30%",h:5,strong:!0}),l.jsx(Fn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function U4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Qo,{size:i}),l.jsx(Ue,{w:t*.45,h:4,strong:!0}),l.jsx(Ue,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ue,{w:20,h:3,strong:!0}),l.jsx(Ue,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ue,{w:20,h:3,strong:!0}),l.jsx(Ue,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ue,{w:20,h:3,strong:!0}),l.jsx(Ue,{w:28,h:2})]})]})]})}function V4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ue,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ue,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function Y4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ue,{w:"70%",h:3,strong:!0}),l.jsx(Ue,{w:"90%",h:2}),l.jsx(Ue,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function W4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Fn,{w:i,h:i,radius:i*.25}),l.jsx(Ue,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function F4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ue,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function X4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function G4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function q4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function K4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Q4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ue,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ue,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function Z4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function J4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ue,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function e6({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function t6({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function n6({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Fn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ue,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ue,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function s6({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ue,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Qo,{size:a}),l.jsx(Ue,{w:t*.12,h:3,strong:!0}),l.jsx(Ue,{w:t*.08,h:2})]},u))})]})}function o6({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Ue,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ue,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:Math.min(60,t*.2),h:2}),l.jsx(Fn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Fn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ue,{w:t*.4,h:2})]})}function i6({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Ue,{w:t*.4,h:4,strong:!0}),l.jsx(Ue,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:50,h:2}),l.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:40,h:2}),l.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ue,{w:50,h:2}),l.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ue,{w:60,h:2}),l.jsx(Fn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Fn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var a6={navigation:GS,hero:qS,sidebar:KS,footer:QS,modal:ZS,card:JS,text:e4,image:t4,table:n4,list:s4,button:o4,input:i4,form:a4,tabs:r4,avatar:l4,badge:c4,header:u4,section:d4,grid:f4,dropdown:h4,toggle:m4,search:p4,toast:_4,progress:g4,chart:y4,video:x4,tooltip:b4,breadcrumb:v4,pagination:w4,divider:S4,accordion:C4,carousel:k4,pricing:j4,testimonial:M4,cta:E4,alert:T4,banner:A4,stat:N4,stepper:D4,tag:R4,rating:B4,map:L4,timeline:O4,fileUpload:z4,codeBlock:$4,calendar:I4,notification:P4,productCard:H4,profile:U4,drawer:V4,popover:Y4,logo:W4,faq:F4,gallery:X4,checkbox:G4,radio:q4,slider:K4,datePicker:Q4,skeleton:Z4,chip:J4,icon:e6,spinner:t6,feature:n6,team:s6,login:o6,contact:i6};function r6({type:t,width:n,height:i,text:a}){const c=a6[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var l6=`svg[fill=none] {
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
}`,c6={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=l6}var Oe=c6,ll=24,Xu=5;function Yy(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,y=t.x+t.width/2,g=t.y,x=t.y+t.height,b=t.y+t.height/2,S=!a,C=S?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],M=S?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],E=[];for(const re of n)i.has(re.id)||E.push(re);c&&E.push(...c);for(const re of E){const Ne=re.x,Ve=re.x+re.width,te=re.x+re.width/2,he=re.y,I=re.y+re.height,ie=re.y+re.height/2;for(const F of C)for(const me of[Ne,Ve,te]){const Te=me-F;Math.abs(Te)<Xu&&Math.abs(Te)<Math.abs(u)&&(u=Te)}for(const F of M)for(const me of[he,I,ie]){const Te=me-F;Math.abs(Te)<Xu&&Math.abs(Te)<Math.abs(d)&&(d=Te)}}const T=Math.abs(u)<Xu?u:0,O=Math.abs(d)<Xu?d:0,L=[],N=new Set,q=h+T,Y=p+T,Q=y+T,V=g+O,ee=x+O,le=b+O;for(const re of E){const Ne=re.x,Ve=re.x+re.width,te=re.x+re.width/2,he=re.y,I=re.y+re.height,ie=re.y+re.height/2;for(const F of[Ne,te,Ve])for(const me of[q,Q,Y])if(Math.abs(me-F)<.5){const Te=`x:${Math.round(F)}`;N.has(Te)||(N.add(Te),L.push({axis:"x",pos:F}))}for(const F of[he,ie,I])for(const me of[V,le,ee])if(Math.abs(me-F)<.5){const Te=`y:${Math.round(F)}`;N.has(Te)||(N.add(Te),L.push({axis:"y",pos:F}))}}return{dx:T,dy:O,guides:L}}function Wy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function u6({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:S,clearSignal:C,wireframe:M}){const[E,T]=_.useState(new Set),[O,L]=_.useState(null),[N,q]=_.useState(null),[Y,Q]=_.useState(null),[V,ee]=_.useState([]),[le,re]=_.useState(null),[Ne,Ve]=_.useState(!1),te=_.useRef(!1),[he,I]=_.useState(new Set),ie=_.useRef(new Map),F=_.useRef(null),me=_.useRef(null),Te=_.useRef(t);Te.current=t;const $=_.useRef(g);$.current=g;const fe=_.useRef(b);fe.current=b;const G=_.useRef(S);G.current=S;const _e=_.useRef(x);_.useEffect(()=>{x!==_e.current&&(_e.current=x,T(new Set))},[x]);const ve=_.useRef(C);_.useEffect(()=>{if(C!==void 0&&C!==ve.current){ve.current=C;const se=new Set(Te.current.map(Re=>Re.id));se.size>0&&(I(se),T(new Set),me.current=null,Ht(()=>{n([]),I(new Set)},180))}},[C,n]),_.useEffect(()=>{const se=Re=>{const Xe=Re.target;if(!(Xe.tagName==="INPUT"||Xe.tagName==="TEXTAREA"||Xe.isContentEditable)){if((Re.key==="Backspace"||Re.key==="Delete")&&E.size>0){Re.preventDefault();const Fe=new Set(E);I(Fe),T(new Set),Ht(()=>{n(Te.current.filter(tt=>!Fe.has(tt.id))),I(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Re.key)&&E.size>0){Re.preventDefault();const Fe=Re.shiftKey?20:1,tt=Re.key==="ArrowLeft"?-Fe:Re.key==="ArrowRight"?Fe:0,it=Re.key==="ArrowUp"?-Fe:Re.key==="ArrowDown"?Fe:0;n(t.map(gt=>E.has(gt.id)?{...gt,x:Math.max(0,gt.x+tt),y:Math.max(0,gt.y+it)}:gt));return}if(Re.key==="Escape"){i?a(null):E.size>0&&T(new Set);return}}};return document.addEventListener("keydown",se),()=>document.removeEventListener("keydown",se)},[E,i,t,n,a]);const Ae=_.useCallback(se=>{if(se.button!==0||p||se.target.closest(`.${Oe.placement}`))return;se.preventDefault(),se.stopPropagation();const Xe=window.scrollY,He=se.clientX,Fe=se.clientY;if(i){me.current="place",d==null||d(!0);let tt=!1,it=He,gt=Fe;const bt=at=>{it=at.clientX,gt=at.clientY;const P=Math.abs(it-He),J=Math.abs(gt-Fe);if((P>5||J>5)&&(tt=!0),tt){const ge=Math.min(He,it),Se=Math.min(Fe,gt),et=Math.abs(it-He),Ke=Math.abs(gt-Fe);L({x:ge,y:Se,w:et,h:Ke}),Q({x:at.clientX+12,y:at.clientY+12,text:`${Math.round(et)} × ${Math.round(Ke)}`})}},$t=at=>{window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",$t),L(null),Q(null),me.current=null,d==null||d(!1);const P=vt[i];let J,ge,Se,et;tt?(J=Math.min(He,it),ge=Math.min(Fe,gt)+Xe,Se=Math.max(ll,Math.abs(it-He)),et=Math.max(ll,Math.abs(gt-Fe))):(Se=P.width,et=P.height,J=He-Se/2,ge=Fe+Xe-et/2),J=Math.max(0,J),ge=Math.max(0,ge);const Ke={id:Wy(),type:i,x:J,y:ge,width:Se,height:et,scrollY:Xe,timestamp:Date.now()},Ee=[...t,Ke];n(Ee),T(new Set([Ke.id])),a(null)};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",$t)}else{se.shiftKey||T(new Set),me.current="select";let tt=!1;const it=bt=>{const $t=Math.abs(bt.clientX-He),at=Math.abs(bt.clientY-Fe);if(($t>4||at>4)&&(tt=!0),tt){const P=Math.min(He,bt.clientX),J=Math.min(Fe,bt.clientY);q({x:P,y:J,w:Math.abs(bt.clientX-He),h:Math.abs(bt.clientY-Fe)})}},gt=bt=>{if(window.removeEventListener("mousemove",it),window.removeEventListener("mouseup",gt),me.current=null,tt){const $t=Math.min(He,bt.clientX),at=Math.min(Fe,bt.clientY)+Xe,P=Math.abs(bt.clientX-He),J=Math.abs(bt.clientY-Fe),ge=new Set(se.shiftKey?E:new Set);for(const Se of t)Se.y-Xe,Se.x+Se.width>$t&&Se.x<$t+P&&Se.y+Se.height>at&&Se.y<at+J&&ge.add(Se.id);T(ge)}q(null)};window.addEventListener("mousemove",it),window.addEventListener("mouseup",gt)}},[i,p,t,n,E]),We=_.useCallback((se,Re)=>{var Ke;if(se.button!==0)return;const Xe=se.target;if(Xe.closest(`.${Oe.handle}`)||Xe.closest(`.${Oe.deleteButton}`))return;se.preventDefault(),se.stopPropagation();let He;se.shiftKey?(He=new Set(E),He.has(Re)?He.delete(Re):He.add(Re)):E.has(Re)?He=new Set(E):He=new Set([Re]),T(He),(He.size!==E.size||[...He].some(Ee=>!E.has(Ee)))&&((Ke=$.current)==null||Ke.call($,He,se.shiftKey));const tt=se.clientX,it=se.clientY,gt=new Map;for(const Ee of t)He.has(Ee.id)&&gt.set(Ee.id,{x:Ee.x,y:Ee.y});me.current="move",d==null||d(!0);let bt=!1,$t=!1,at=t,P=0,J=0;const ge=new Map;for(const Ee of t)gt.has(Ee.id)&&ge.set(Ee.id,{w:Ee.width,h:Ee.height});const Se=Ee=>{var At;const _t=Ee.clientX-tt,Ie=Ee.clientY-it;if((Math.abs(_t)>2||Math.abs(Ie)>2)&&(bt=!0),!bt)return;if(Ee.altKey&&!$t){$t=!0;const mt=[];for(const Ot of t)gt.has(Ot.id)&&mt.push({...Ot,id:Wy(),timestamp:Date.now()});at=[...t,...mt]}let Ft=1/0,xt=1/0,ct=-1/0,Lt=-1/0;for(const[mt,Ot]of gt){const hn=ge.get(mt);hn&&(Ft=Math.min(Ft,Ot.x+_t),xt=Math.min(xt,Ot.y+Ie),ct=Math.max(ct,Ot.x+_t+hn.w),Lt=Math.max(Lt,Ot.y+Ie+hn.h))}const Rt={x:Ft,y:xt,width:ct-Ft,height:Lt-xt},{dx:Qt,dy:ut,guides:nt}=Yy(Rt,at,new Set(gt.keys()),void 0,y);ee(nt);const jt=_t+Qt,pt=Ie+ut;P=jt,J=pt,n(at.map(mt=>{const Ot=gt.get(mt.id);return Ot?{...mt,x:Math.max(0,Ot.x+jt),y:Math.max(0,Ot.y+pt)}:mt})),(At=fe.current)==null||At.call(fe,jt,pt)},et=()=>{var Ee;window.removeEventListener("mousemove",Se),window.removeEventListener("mouseup",et),me.current=null,d==null||d(!1),ee([]),(Ee=G.current)==null||Ee.call(G,P,J,bt)};window.addEventListener("mousemove",Se),window.addEventListener("mouseup",et)},[E,t,n,d]),Ye=_.useCallback((se,Re,Xe)=>{se.preventDefault(),se.stopPropagation();const He=t.find(ge=>ge.id===Re);if(!He)return;T(new Set([Re])),me.current="resize",d==null||d(!0);const Fe=se.clientX,tt=se.clientY,it=He.width,gt=He.height,bt=He.x,$t=He.y,at={left:Xe.includes("w"),right:Xe.includes("e"),top:Xe.includes("n"),bottom:Xe.includes("s")},P=ge=>{const Se=ge.clientX-Fe,et=ge.clientY-tt;let Ke=it,Ee=gt,_t=bt,Ie=$t;Xe.includes("e")&&(Ke=Math.max(ll,it+Se)),Xe.includes("w")&&(Ke=Math.max(ll,it-Se),_t=bt+it-Ke),Xe.includes("s")&&(Ee=Math.max(ll,gt+et)),Xe.includes("n")&&(Ee=Math.max(ll,gt-et),Ie=$t+gt-Ee);const Ft={x:_t,y:Ie,width:Ke,height:Ee},{dx:xt,dy:ct,guides:Lt}=Yy(Ft,Te.current,new Set([Re]),at,y);ee(Lt),xt!==0&&(at.right?Ke+=xt:at.left&&(_t+=xt,Ke-=xt)),ct!==0&&(at.bottom?Ee+=ct:at.top&&(Ie+=ct,Ee-=ct)),n(Te.current.map(Rt=>Rt.id===Re?{...Rt,x:_t,y:Ie,width:Ke,height:Ee}:Rt)),Q({x:ge.clientX+12,y:ge.clientY+12,text:`${Math.round(Ke)} × ${Math.round(Ee)}`})},J=()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",J),Q(null),me.current=null,d==null||d(!1),ee([])};window.addEventListener("mousemove",P),window.addEventListener("mouseup",J)},[t,n,d]),lt=_.useCallback(se=>{me.current=null,I(Re=>{const Xe=new Set(Re);return Xe.add(se),Xe}),T(Re=>{const Xe=new Set(Re);return Xe.delete(se),Xe}),Ht(()=>{n(Te.current.filter(Re=>Re.id!==se)),I(Re=>{const Xe=new Set(Re);return Xe.delete(se),Xe})},180)},[n]),Bt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Kt=_.useCallback(se=>{const Re=t.find(Xe=>Xe.id===se);Re&&(te.current=!!Re.text,re(se),Ve(!1))},[t]),Ze=_.useCallback(()=>{le&&(Ve(!0),Ht(()=>{re(null),Ve(!1)},150))},[le]);_.useEffect(()=>{u&&le&&Ze()},[u]);const ot=_.useCallback(se=>{le&&(n(t.map(Re=>Re.id===le?{...Re,text:se.trim()||void 0}:Re)),Ze())},[le,t,n,Ze]),zt=typeof window<"u"?window.scrollY:0,qe=["nw","ne","se","sw"],wt=M?"#f97316":"#3c82f7",ke=[{dir:"n",cls:Oe.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:wt})})},{dir:"e",cls:Oe.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:wt})})},{dir:"s",cls:Oe.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:wt})})},{dir:"w",cls:Oe.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:wt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:F,className:`${Oe.overlay} ${c?"":Oe.light} ${i?Oe.placing:""} ${p?Oe.passthrough:""} ${u?Oe.overlayExiting:""} ${M?Oe.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ae,children:t.map(se=>{var Fe;const Re=E.has(se.id),Xe=((Fe=Qi[se.type])==null?void 0:Fe.label)||se.type,He=se.y-zt;return l.jsxs("div",{"data-design-placement":se.id,className:`${Oe.placement} ${Re?Oe.selected:""} ${he.has(se.id)?Oe.exiting:""}`,style:{left:se.x,top:He,width:se.width,height:se.height,position:"fixed"},onMouseDown:tt=>We(tt,se.id),onDoubleClick:()=>Kt(se.id),children:[l.jsx("span",{className:Oe.placementLabel,children:Xe}),l.jsx("span",{className:`${Oe.placementAnnotation} ${se.text?Oe.annotationVisible:""}`,children:(se.text&&ie.current.set(se.id,se.text),se.text||ie.current.get(se.id)||"")}),l.jsx("div",{className:Oe.placementContent,children:l.jsx(r6,{type:se.type,width:se.width,height:se.height,text:se.text})}),l.jsx("div",{className:Oe.deleteButton,onMouseDown:tt=>tt.stopPropagation(),onClick:()=>lt(se.id),children:"✕"}),qe.map(tt=>l.jsx("div",{className:`${Oe.handle} ${Oe[`handle${tt.charAt(0).toUpperCase()}${tt.slice(1)}`]}`,onMouseDown:it=>Ye(it,se.id,tt)},tt)),ke.map(({dir:tt,cls:it,arrow:gt})=>l.jsx("div",{className:`${Oe.edgeHandle} ${it}`,onMouseDown:bt=>Ye(bt,se.id,tt),children:gt},tt))]},se.id)})}),le&&(()=>{var $t,at;const se=t.find(P=>P.id===le);if(!se)return null;const Re=se.y-zt,Xe=se.x+se.width/2,He=Re-8,Fe=Re+se.height+8,tt=He>200,it=Fe<window.innerHeight-100,gt=Math.max(160,Math.min(window.innerWidth-160,Xe));let bt;return tt?bt={left:gt,bottom:window.innerHeight-He}:it?bt={left:gt,top:Fe}:bt={left:gt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:(($t=Qi[se.type])==null?void 0:$t.label)||se.type,placeholder:Bt[se.type]||"Label or content text",initialValue:(at=se.text)!=null?at:"",submitLabel:te.current?"Save":"Set",onSubmit:ot,onCancel:Ze,onDelete:te.current?()=>{ot("")}:void 0,isExiting:Ne,lightMode:!c,style:bt})})(),O&&l.jsx("div",{className:Oe.drawBox,style:{left:O.x,top:O.y,width:O.w,height:O.h},"data-feedback-toolbar":!0}),N&&l.jsx("div",{className:Oe.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),Y&&l.jsx("div",{className:Oe.sizeIndicator,style:{left:Y.x,top:Y.y},"data-feedback-toolbar":!0,children:Y.text}),V.map((se,Re)=>l.jsx("div",{className:Oe.guideLine,style:se.axis==="x"?{position:"fixed",left:se.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:se.pos-zt,right:0,height:1},"data-feedback-toolbar":!0},`${se.axis}-${se.pos}-${Re}`))]})}function d6(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Oe.fadeTop:""} ${i?Oe.fadeBottom:""}`}var z="currentColor",Le="0.5";function f6({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:z,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:z,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:z,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:z,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:z,strokeWidth:Le})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:z,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:z,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:z,strokeWidth:Le})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:z,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:z,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:z,strokeWidth:Le,fill:z,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:z,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:z,strokeWidth:Le})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:z,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:z,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:z,strokeWidth:Le})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:z,strokeWidth:Le,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:z,strokeWidth:Le,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:z,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:z,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:z,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:z,strokeWidth:Le}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Le,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:z,strokeWidth:Le,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:z,strokeWidth:Le})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:z,strokeWidth:Le})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:z,strokeWidth:Le,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:z,strokeWidth:Le,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:z,strokeWidth:Le}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:z,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:z,strokeWidth:Le}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:z,strokeWidth:Le}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:z,strokeWidth:Le})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:z,strokeWidth:Le,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:z,strokeWidth:Le,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:z,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:z,opacity:".15",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:z,strokeWidth:Le})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:z,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:z,strokeWidth:Le,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:z,strokeWidth:Le})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:z,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:z,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:z,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:z,strokeWidth:Le,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:z,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:z,strokeWidth:Le})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:z,strokeWidth:Le,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:z,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:z,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:z,strokeWidth:Le})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:z,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:z,opacity:".2",stroke:z,strokeWidth:Le}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:z,strokeWidth:Le}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:z,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:z,strokeWidth:Le})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:z,strokeWidth:Le,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:z,strokeWidth:Le,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:z,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:z,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:z,strokeWidth:Le,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:z,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:z,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:z,opacity:".15",stroke:z,strokeWidth:Le})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:z,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:z,opacity:".2",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:z,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:z,strokeWidth:Le,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:z,strokeWidth:Le,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:z,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:z,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:z,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:z,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:z,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:z,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:z,strokeWidth:Le,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:z,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:z,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:z,strokeWidth:Le})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:z,strokeWidth:Le,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:z,strokeWidth:Le})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:z,strokeWidth:Le}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:z,strokeWidth:Le,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:z,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:z,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:z,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:z,strokeWidth:Le})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:z,strokeWidth:Le,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:z,strokeWidth:Le}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:z,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:z,strokeWidth:Le})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:z,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:z,strokeWidth:Le,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:z,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:z,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:z,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:z,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:z,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:z,opacity:".08",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:z,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:z,strokeWidth:Le,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:z,strokeWidth:Le,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:z,strokeWidth:Le,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:z,strokeWidth:Le,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:z,strokeWidth:Le,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:z,strokeWidth:Le,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:z,strokeWidth:Le,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:z,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:z,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:z,strokeWidth:Le,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:z,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:z,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:z,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:z,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:z,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:z,strokeWidth:Le}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:z,opacity:".2"})]});default:return null}}function h6({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Oe.placeScroll} ${c||""}`,children:tb.map(d=>l.jsxs("div",{className:Oe.paletteSection,children:[l.jsx("div",{className:Oe.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Oe.paletteItem} ${t===h.type?Oe.active:""} ${u?Oe.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Oe.paletteItemIcon,children:l.jsx(f6,{type:h.type})}),l.jsx("span",{className:Oe.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function m6({value:t,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(t),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,y.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(y.current),p.current=t,y.current=n,clearTimeout(g.current),g.current=Ht(()=>a(null),250)}else y.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Oe.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.exitUp:Oe.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.enterUp:Oe.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Oe.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.exitUp:Oe.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Oe.rollingNum} ${d==="up"?Oe.enterUp:Oe.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function p6({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:S,Tooltip:C}){const[M,E]=_.useState(!1),[T,O]=_.useState("exit"),[L,N]=_.useState(!1),[q,Y]=_.useState(!0),Q=_.useRef(0),V=_.useRef(""),ee=_.useRef(0),le=_.useRef(),re=_.useRef(null),[Ne,Ve]=_.useState("");_.useEffect(()=>(u?(E(!0),clearTimeout(le.current),cancelAnimationFrame(ee.current),ee.current=fl(()=>{ee.current=fl(()=>{O("enter")})})):(cancelAnimationFrame(ee.current),O("exit"),clearTimeout(le.current),le.current=Ht(()=>{E(!1),d==null||d()},200)),()=>cancelAnimationFrame(ee.current)),[u]);const te=h>0||a>0,he=h+a;return he>0&&(Q.current=he,V.current=g?he===1?"Component":"Components":he===1?"Change":"Changes"),_.useEffect(()=>{if(te)L?Y(!1):(Y(!0),N(!0),fl(()=>{fl(()=>{Y(!1)})}));else{Y(!0);const I=Ht(()=>N(!1),300);return()=>clearTimeout(I)}},[te]),_.useEffect(()=>{if(!M)return;const I=re.current;if(!I)return;const ie=()=>Ve(d6(I));ie(),I.addEventListener("scroll",ie,{passive:!0});const F=new ResizeObserver(ie);return F.observe(I),()=>{I.removeEventListener("scroll",ie),F.disconnect()}},[M]),M?l.jsxs("div",{className:`${Oe.palette} ${Oe[T]} ${i?"":Oe.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation(),onTransitionEnd:I=>{I.target===I.currentTarget&&(u||(clearTimeout(le.current),E(!1),O("exit"),d==null||d()))},children:[l.jsxs("div",{className:Oe.paletteHeader,children:[l.jsx("div",{className:Oe.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Oe.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Oe.canvasToggle} ${g?Oe.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:Oe.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Oe.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Oe.wireframePurposeWrap} ${g?"":Oe.collapsed}`,children:l.jsx("div",{className:Oe.wireframePurposeInner,children:l.jsx("textarea",{className:Oe.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:I=>S(I.target.value),rows:2})})}),l.jsx(h6,{activeType:t,onSelect:n,onDragStart:y,scrollRef:re,fadeClass:Ne,blankCanvas:g}),L&&l.jsx("div",{className:`${Oe.paletteFooterWrap} ${q?Oe.footerHidden:""}`,children:l.jsx("div",{className:Oe.paletteFooterInner,children:l.jsx("div",{className:Oe.paletteFooterInnerContent,children:l.jsxs("div",{className:Oe.paletteFooter,children:[l.jsx("span",{className:Oe.paletteFooterCount,children:l.jsx(m6,{value:Q.current,suffix:V.current})}),l.jsx("button",{className:Oe.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function gl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Go(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=gl(i)}return null}function _6(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=gl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function _l(t){var a,c,u,d,h,p,y,g;const n=_6(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Go(t,"svg");if(x){const b=gl(x);if(b instanceof HTMLElement)return{name:`graphic in ${_l(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=gl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),S=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:S?{name:`input [${S}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),S=t.getAttribute("aria-label");if(S)return{name:`${i} [${S}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const C=x.split(/[\s_-]+/).map(M=>M.replace(/[A-Z0-9]{5,}.*$/,"")).filter(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M)).slice(0,2);if(C.length>0)return{name:C.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function rc(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Gu(t){const n=gl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var C;const x=g.tagName.toLowerCase(),b=g.className;let S="";if(typeof b=="string"&&b){const M=b.split(/\s+/).map(E=>E.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(E=>E.length>2&&!/^[a-z]{1,2}$/.test(E));M&&(S=`.${M}`)}if(x==="button"||x==="a"){const M=(C=g.textContent)==null?void 0:C.trim().slice(0,15);if(M)return`${x}${S} "${M}"`}return`${x}${S}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function lc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var nb=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),g6=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),y6=new Set(["input","textarea","select"]),x6=new Set(["img","video","canvas","svg"]),b6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;g6.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:y6.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:x6.has(a)?c=["width","height","objectFit","borderRadius"]:b6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!nb.has(h)&&(i[u]=h)}return i}var v6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of v6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!nb.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function w6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=gl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var S6=new Set(["nav","header","main","section","article","footer","aside"]),Rm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Fy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},C6=new Set(["script","style","noscript","link","meta"]),k6=40;function sb(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Rr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Rr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Rm[a])return Rm[a];if(Fy[n])return Fy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=_l(t);return u.charAt(0).toUpperCase()+u.slice(1)}function ob(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function ib(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function j6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(C6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<k6)return;const y=S6.has(d),g=c.getAttribute("role")&&Rm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,S=sb(c),C={x:p.x,y:S?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Rr(c),role:c.getAttribute("role"),className:ob(c),textSnippet:ib(c),originalRect:C,currentRect:{...C},originalIndex:u,isFixed:S})}),a}function M6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=sb(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Rr(t),role:t.getAttribute("role"),className:ob(t),textSnippet:ib(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Xy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Gy=["nw","n","ne","e","se","s","sw","w"],Ju=24,qy=16,ed=5;function Ky(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,y=t.y,g=t.y+t.height,x=t.y+t.height/2,b=[];for(const Q of n)i.has(Q.id)||b.push(Q.currentRect);a&&b.push(...a);for(const Q of b){const V=Q.x,ee=Q.x+Q.width,le=Q.x+Q.width/2,re=Q.y,Ne=Q.y+Q.height,Ve=Q.y+Q.height/2;for(const te of[d,h,p])for(const he of[V,ee,le]){const I=he-te;Math.abs(I)<ed&&Math.abs(I)<Math.abs(c)&&(c=I)}for(const te of[y,g,x])for(const he of[re,Ne,Ve]){const I=he-te;Math.abs(I)<ed&&Math.abs(I)<Math.abs(u)&&(u=I)}}const S=Math.abs(c)<ed?c:0,C=Math.abs(u)<ed?u:0,M=[],E=new Set,T=d+S,O=h+S,L=p+S,N=y+C,q=g+C,Y=x+C;for(const Q of b){const V=Q.x,ee=Q.x+Q.width,le=Q.x+Q.width/2,re=Q.y,Ne=Q.y+Q.height,Ve=Q.y+Q.height/2;for(const te of[V,le,ee])for(const he of[T,L,O])if(Math.abs(he-te)<.5){const I=`x:${Math.round(te)}`;E.has(I)||(E.add(I),M.push({axis:"x",pos:te}))}for(const te of[re,Ve,Ne])for(const he of[N,Y,q])if(Math.abs(he-te)<.5){const I=`y:${Math.round(te)}`;E.has(I)||(E.add(I),M.push({axis:"y",pos:te}))}}return{dx:S,dy:C,guides:M}}var E6=new Set(["script","style","noscript","link","meta","br","hr"]);function Qy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(E6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=qy&&i.height>=qy)return n;n=n.parentElement}return null}function T6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=t,S=_.useRef(t);S.current=t;const[C,M]=_.useState(new Set),[E,T]=_.useState(!1),O=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==O.current&&(O.current=x,b.length>0&&T(!0))},[x,b.length]);const L=_.useRef(p);_.useEffect(()=>{p!==L.current&&(L.current=p,M(new Set))},[p]);const[N,q]=_.useState(null),[Y,Q]=_.useState(!1),V=_.useRef(!1),ee=_.useCallback(P=>{const J=b.find(ge=>ge.id===P);J&&(V.current=!!J.note,q(P),Q(!1))},[b]),le=_.useCallback(()=>{N&&(Q(!0),Ht(()=>{q(null),Q(!1)},150))},[N]),re=_.useCallback(P=>{N&&(n({...t,sections:b.map(J=>J.id===N?{...J,note:P.trim()||void 0}:J)}),le())},[N,b,t,n,le]);_.useEffect(()=>{a&&N&&le()},[a]);const[Ne,Ve]=_.useState(new Set),te=_.useRef(new Map),[he,I]=_.useState(null),[ie,F]=_.useState(null),[me,Te]=_.useState([]),[$,fe]=_.useState(0),G=_.useRef(null),_e=_.useRef(new Set),ve=_.useRef(new Map),[Ae,We]=_.useState(new Map),[Ye,lt]=_.useState(new Map),Bt=_.useRef(new Set),Kt=_.useRef(new Map),Ze=_.useRef(h);Ze.current=h;const ot=_.useRef(y);ot.current=y;const zt=_.useRef(g);zt.current=g,_.useEffect(()=>{u&&M(new Set)},[u]);const[qe,wt]=_.useState(()=>!t.sections.some(P=>{const J=P.originalRect,ge=P.currentRect;return Math.abs(J.x-ge.x)>1||Math.abs(J.y-ge.y)>1||Math.abs(J.width-ge.width)>1||Math.abs(J.height-ge.height)>1}));_.useEffect(()=>{if(!qe){const P=Ht(()=>wt(!0),380);return()=>clearTimeout(P)}},[]);const ke=_.useRef(new Set);_.useEffect(()=>{ke.current=new Set(b.map(P=>P.selector))},[b]),_.useEffect(()=>{const P=()=>fe(window.scrollY);return P(),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),()=>{window.removeEventListener("scroll",P),window.removeEventListener("resize",P)}},[]),_.useEffect(()=>{const P=J=>{if(G.current){I(null);return}const ge=document.elementFromPoint(J.clientX,J.clientY);if(!ge){I(null);return}if(ge.closest("[data-feedback-toolbar]")){I(null);return}if(ge.closest("[data-design-placement]")){I(null);return}if(ge.closest("[data-annotation-popup]")){I(null);return}const Se=Qy(ge);if(!Se){I(null);return}for(const Ke of ke.current)try{const Ee=document.querySelector(Ke);if(Ee&&(Ee===Se||Se.contains(Ee))){I(null);return}}catch{}const et=Se.getBoundingClientRect();I({x:et.x,y:et.y,w:et.width,h:et.height})};return document.addEventListener("mousemove",P,{passive:!0}),()=>document.removeEventListener("mousemove",P)},[b]),_.useEffect(()=>{const P=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=P}},[]),_.useEffect(()=>{const P=J=>{var Ee,_t,Ie,Ft;if(G.current||J.button!==0)return;const ge=J.target;if(!ge||ge.closest("[data-feedback-toolbar]")||ge.closest("[data-design-placement]")||ge.closest("[data-annotation-popup]"))return;const Se=Qy(ge);let et=!1;if(Se)for(const xt of ke.current)try{const ct=document.querySelector(xt);if(ct&&(ct===Se||Se.contains(ct))){et=!0;break}}catch{}const Ke=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(Se&&!et){J.preventDefault(),J.stopPropagation();const xt=M6(Se),ct=[...b,xt],Lt=[...t.originalOrder,xt.id];n({...t,sections:ct,originalOrder:Lt});const Rt=new Set([xt.id]);M(Rt),(Ee=Ze.current)==null||Ee.call(Ze,Rt,Ke),I(null);const Qt=J.clientX,ut=J.clientY,nt={x:xt.currentRect.x,y:xt.currentRect.y};xt.originalRect;let jt=!1,pt=0,At=0;G.current="move";const mt=hn=>{var Xt;const ln=hn.clientX-Qt,on=hn.clientY-ut;if(!jt&&(Math.abs(ln)>2||Math.abs(on)>2)&&(jt=!0),!jt)return;const Xn={x:nt.x+ln,y:nt.y+on,width:xt.currentRect.width,height:xt.currentRect.height},Hn=Ky(Xn,ct,new Set([xt.id]),d);Te(Hn.guides);const Sn=ln+Hn.dx,vn=on+Hn.dy;pt=Sn,At=vn;const rs=document.querySelector(`[data-rearrange-section="${xt.id}"]`);rs&&(rs.style.transform=`translate(${Sn}px, ${vn}px)`),We(new Map([[xt.id,{x:nt.x+Sn,y:nt.y+vn,width:xt.currentRect.width,height:xt.currentRect.height}]])),(Xt=ot.current)==null||Xt.call(ot,Sn,vn)},Ot=()=>{var ln;window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",Ot),G.current=null,Te([]),We(new Map);const hn=document.querySelector(`[data-rearrange-section="${xt.id}"]`);hn&&(hn.style.transform=""),jt&&n({...t,sections:ct.map(on=>on.id===xt.id?{...on,currentRect:{...on.currentRect,x:Math.max(0,nt.x+pt),y:Math.max(0,nt.y+At)}}:on),originalOrder:Lt}),(ln=zt.current)==null||ln.call(zt,pt,At,jt)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",Ot)}else if(et&&Se){J.preventDefault();for(const xt of b)try{const ct=document.querySelector(xt.selector);if(ct&&ct===Se){const Lt=new Set([xt.id]);M(Lt),(_t=Ze.current)==null||_t.call(Ze,Lt,Ke);return}}catch{}Ke||(M(new Set),(Ie=Ze.current)==null||Ie.call(Ze,new Set,!1))}else Ke||(M(new Set),(Ft=Ze.current)==null||Ft.call(Ze,new Set,!1))};return document.addEventListener("mousedown",P,!0),()=>document.removeEventListener("mousedown",P,!0)},[b,t,n]),_.useEffect(()=>{const P=J=>{const ge=J.target;if(!(ge.tagName==="INPUT"||ge.tagName==="TEXTAREA"||ge.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&C.size>0){J.preventDefault();const Se=new Set(C);Ve(et=>{const Ke=new Set(et);for(const Ee of Se)Ke.add(Ee);return Ke}),M(new Set),Ht(()=>{const et=S.current;n({...et,sections:et.sections.filter(Ke=>!Se.has(Ke.id)),originalOrder:et.originalOrder.filter(Ke=>!Se.has(Ke))}),Ve(Ke=>{const Ee=new Set(Ke);for(const _t of Se)Ee.delete(_t);return Ee})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&C.size>0){J.preventDefault();const Se=J.shiftKey?20:1,et=J.key==="ArrowLeft"?-Se:J.key==="ArrowRight"?Se:0,Ke=J.key==="ArrowUp"?-Se:J.key==="ArrowDown"?Se:0;n({...t,sections:b.map(Ee=>C.has(Ee.id)?{...Ee,currentRect:{...Ee.currentRect,x:Math.max(0,Ee.currentRect.x+et),y:Math.max(0,Ee.currentRect.y+Ke)}}:Ee)});return}J.key==="Escape"&&C.size>0&&M(new Set)}};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[C,b,t,n]);const se=_.useCallback((P,J)=>{var Qt;if(P.button!==0)return;const ge=P.target;if(ge.closest(`.${Oe.handle}`)||ge.closest(`.${Oe.deleteButton}`))return;P.preventDefault(),P.stopPropagation();let Se;P.shiftKey||P.metaKey||P.ctrlKey?(Se=new Set(C),Se.has(J)?Se.delete(J):Se.add(J)):C.has(J)?Se=new Set(C):Se=new Set([J]),M(Se),(Se.size!==C.size||[...Se].some(ut=>!C.has(ut)))&&((Qt=Ze.current)==null||Qt.call(Ze,Se,!!(P.shiftKey||P.metaKey||P.ctrlKey)));const Ke=P.clientX,Ee=P.clientY,_t=new Map;for(const ut of b)Se.has(ut.id)&&_t.set(ut.id,{x:ut.currentRect.x,y:ut.currentRect.y});G.current="move";let Ie=!1,Ft=0,xt=0;const ct=new Map;for(const ut of b)if(Se.has(ut.id)){const nt=document.querySelector(`[data-rearrange-section="${ut.id}"]`);ct.set(ut.id,{outlineEl:nt,curW:ut.currentRect.width,curH:ut.currentRect.height})}const Lt=ut=>{var Hn;const nt=ut.clientX-Ke,jt=ut.clientY-Ee;if(nt===0&&jt===0)return;Ie=!0;let pt=1/0,At=1/0,mt=-1/0,Ot=-1/0;for(const[Sn,{curW:vn,curH:rs}]of ct){const Xt=_t.get(Sn);if(!Xt)continue;const $n=Xt.x+nt,rt=Xt.y+jt;pt=Math.min(pt,$n),At=Math.min(At,rt),mt=Math.max(mt,$n+vn),Ot=Math.max(Ot,rt+rs)}const hn=Ky({x:pt,y:At,width:mt-pt,height:Ot-At},b,Se,d),ln=nt+hn.dx,on=jt+hn.dy;Ft=ln,xt=on,Te(hn.guides);for(const[,{outlineEl:Sn}]of ct)Sn&&(Sn.style.transform=`translate(${ln}px, ${on}px)`);const Xn=new Map;for(const[Sn,{curW:vn,curH:rs}]of ct){const Xt=_t.get(Sn);if(Xt){const $n={x:Math.max(0,Xt.x+ln),y:Math.max(0,Xt.y+on),width:vn,height:rs};Xn.set(Sn,$n)}}We(Xn),(Hn=ot.current)==null||Hn.call(ot,ln,on)},Rt=ut=>{var nt,jt;window.removeEventListener("mousemove",Lt),window.removeEventListener("mouseup",Rt),G.current=null,Te([]),We(new Map);for(const[,{outlineEl:pt}]of ct)pt&&(pt.style.transform="");if(Ie){const pt=ut.clientX-Ke,At=ut.clientY-Ee;if(Math.abs(pt)<5&&Math.abs(At)<5)n({...t,sections:b.map(mt=>{const Ot=_t.get(mt.id);return Ot?{...mt,currentRect:{...mt.currentRect,x:Ot.x,y:Ot.y}}:mt})});else{n({...t,sections:b.map(mt=>{const Ot=_t.get(mt.id);return Ot?{...mt,currentRect:{...mt.currentRect,x:Math.max(0,Ot.x+Ft),y:Math.max(0,Ot.y+xt)}}:mt})}),(nt=zt.current)==null||nt.call(zt,Ft,xt,!0);return}}(jt=zt.current)==null||jt.call(zt,0,0,!1)};window.addEventListener("mousemove",Lt),window.addEventListener("mouseup",Rt)},[C,b,t,n]),Re=_.useCallback((P,J,ge)=>{P.preventDefault(),P.stopPropagation();const Se=b.find(Lt=>Lt.id===J);if(!Se)return;M(new Set([J])),G.current="resize";const et=P.clientX,Ke=P.clientY,Ee={...Se.currentRect};Se.originalRect;const _t=Ee.width/Ee.height;let Ie={...Ee};const Ft=document.querySelector(`[data-rearrange-section="${J}"]`),xt=Lt=>{const Rt=Lt.clientX-et,Qt=Lt.clientY-Ke;let ut=Ee.x,nt=Ee.y,jt=Ee.width,pt=Ee.height;if(ge.includes("e")&&(jt=Math.max(Ju,Ee.width+Rt)),ge.includes("w")&&(jt=Math.max(Ju,Ee.width-Rt),ut=Ee.x+Ee.width-jt),ge.includes("s")&&(pt=Math.max(Ju,Ee.height+Qt)),ge.includes("n")&&(pt=Math.max(Ju,Ee.height-Qt),nt=Ee.y+Ee.height-pt),Lt.shiftKey)if(ge.length===2){const mt=Math.abs(jt-Ee.width),Ot=Math.abs(pt-Ee.height);mt>Ot?pt=jt/_t:jt=pt*_t,ge.includes("w")&&(ut=Ee.x+Ee.width-jt),ge.includes("n")&&(nt=Ee.y+Ee.height-pt)}else ge==="e"||ge==="w"?pt=jt/_t:jt=pt*_t,ge==="w"&&(ut=Ee.x+Ee.width-jt),ge==="n"&&(nt=Ee.y+Ee.height-pt);Ie={x:ut,y:nt,width:jt,height:pt},Ft&&(Ft.style.left=`${ut}px`,Ft.style.top=`${nt-$}px`,Ft.style.width=`${jt}px`,Ft.style.height=`${pt}px`),F({x:Lt.clientX+12,y:Lt.clientY+12,text:`${Math.round(jt)} × ${Math.round(pt)}`}),We(new Map([[J,Ie]]))},ct=()=>{window.removeEventListener("mousemove",xt),window.removeEventListener("mouseup",ct),F(null),G.current=null,We(new Map),n({...t,sections:b.map(Lt=>Lt.id===J?{...Lt,currentRect:Ie}:Lt)})};window.addEventListener("mousemove",xt),window.addEventListener("mouseup",ct)},[b,t,n,$]),Xe=_.useCallback(P=>{Ve(J=>{const ge=new Set(J);return ge.add(P),ge}),M(J=>{const ge=new Set(J);return ge.delete(P),ge}),Ht(()=>{const J=S.current;n({...J,sections:J.sections.filter(ge=>ge.id!==P),originalOrder:J.originalOrder.filter(ge=>ge!==P)}),Ve(ge=>{const Se=new Set(ge);return Se.delete(P),Se})},180)},[n]),He=P=>{const J=P.originalRect,ge=P.currentRect;return Math.abs(J.x-ge.x)>1||Math.abs(J.y-ge.y)>1||Math.abs(J.width-ge.width)>1||Math.abs(J.height-ge.height)>1},Fe=P=>{const J=P.originalRect,ge=P.currentRect;return Math.abs(J.x-ge.x)>1||Math.abs(J.y-ge.y)>1},tt=P=>{const J=P.originalRect,ge=P.currentRect;return Math.abs(J.width-ge.width)>1||Math.abs(J.height-ge.height)>1};for(const P of b)ve.current.has(P.id)||(Fe(P)?ve.current.set(P.id,"move"):tt(P)&&ve.current.set(P.id,"resize"));for(const P of ve.current.keys())b.some(J=>J.id===P)||ve.current.delete(P);const it=b.filter(P=>{try{if(Ne.has(P.id)||C.has(P.id))return!0;const J=document.querySelector(P.selector);if(!J)return!1;const ge=J.getBoundingClientRect(),Se=P.originalRect;return Math.abs(ge.width-Se.width)+Math.abs(ge.height-Se.height)<200}catch{return!1}}),gt=it.filter(P=>He(P)),bt=it.filter(P=>!He(P)),$t=new Set(gt.map(P=>P.id));for(const P of _e.current)$t.has(P)||_e.current.delete(P);const at=[...$t].sort().join(",");for(const P of gt)Kt.current.set(P.id,{currentRect:P.currentRect,originalRect:P.originalRect,isFixed:P.isFixed});return _.useEffect(()=>{const P=Bt.current;Bt.current=$t;const J=new Map;for(const ge of P)if(!$t.has(ge)){if(!b.some(et=>et.id===ge))continue;const Se=Kt.current.get(ge);Se&&(J.set(ge,{orig:Se.originalRect,target:Se.currentRect,isFixed:Se.isFixed}),Kt.current.delete(ge))}if(J.size>0){lt(Se=>{const et=new Map(Se);for(const[Ke,Ee]of J)et.set(Ke,Ee);return et});const ge=Ht(()=>{lt(Se=>{const et=new Map(Se);for(const Ke of J.keys())et.delete(Ke);return et})},250);return()=>clearTimeout(ge)}},[at,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Oe.rearrangeOverlay} ${i?"":Oe.light} ${a?Oe.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[he&&l.jsx("div",{className:Oe.hoverHighlight,style:{left:he.x,top:he.y,width:he.w,height:he.h}}),bt.map(P=>{const J=P.currentRect,ge=P.isFixed?J.y:J.y-$,Se=Xy,et=C.has(P.id);return l.jsxs("div",{"data-rearrange-section":P.id,className:`${Oe.sectionOutline} ${et?Oe.selected:""} ${E||a||Ne.has(P.id)?Oe.exiting:""}`,style:{left:J.x,top:ge,width:J.width,height:J.height,borderColor:Se.border,backgroundColor:Se.bg,...qe?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ke=>se(Ke,P.id),onDoubleClick:()=>ee(P.id),children:[l.jsx("span",{className:Oe.sectionLabel,style:{backgroundColor:Se.pill},children:P.label}),l.jsx("span",{className:`${Oe.sectionAnnotation} ${P.note?Oe.annotationVisible:""}`,children:(P.note&&te.current.set(P.id,P.note),P.note||te.current.get(P.id)||"")}),l.jsxs("span",{className:Oe.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Oe.deleteButton,onMouseDown:Ke=>Ke.stopPropagation(),onClick:()=>Xe(P.id),children:"✕"}),Gy.map(Ke=>l.jsx("div",{className:`${Oe.handle} ${Oe[`handle${Ke.charAt(0).toUpperCase()}${Ke.slice(1)}`]}`,onMouseDown:Ee=>Re(Ee,P.id,Ke)},Ke))]},P.id)}),gt.map(P=>{const J=P.currentRect,ge=P.isFixed?J.y:J.y-$,Se=C.has(P.id),et=Fe(P),Ke=tt(P);if(u&&!Se)return null;const _t=!_e.current.has(P.id);return _t&&_e.current.add(P.id),l.jsxs("div",{"data-rearrange-section":P.id,className:`${Oe.ghostOutline} ${Se?Oe.selected:""} ${E||a||Ne.has(P.id)?Oe.exiting:""}`,style:{left:J.x,top:ge,width:J.width,height:J.height,...qe?{}:{opacity:0,animation:"none",transition:"none"},..._t?{}:{animation:"none"}},onMouseDown:Ie=>se(Ie,P.id),onDoubleClick:()=>ee(P.id),children:[l.jsx("span",{className:Oe.sectionLabel,style:{backgroundColor:Xy.pill},children:P.label}),l.jsx("span",{className:`${Oe.sectionAnnotation} ${P.note?Oe.annotationVisible:""}`,children:(P.note&&te.current.set(P.id,P.note),P.note||te.current.get(P.id)||"")}),l.jsxs("span",{className:Oe.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Oe.deleteButton,onMouseDown:Ie=>Ie.stopPropagation(),onClick:()=>Xe(P.id),children:"✕"}),Gy.map(Ie=>l.jsx("div",{className:`${Oe.handle} ${Oe[`handle${Ie.charAt(0).toUpperCase()}${Ie.slice(1)}`]}`,onMouseDown:Ft=>Re(Ft,P.id,Ie)},Ie)),l.jsx("span",{className:Oe.ghostBadge,children:(()=>{const Ie=ve.current.get(P.id);if(et&&Ke){const[Ft,xt]=Ie==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Ft," ",l.jsxs("span",{className:Oe.ghostBadgeExtra,children:["& ",xt]})]})}return`Suggested ${Ke?"Resize":"Move"}`})()})]},P.id)})]}),!u&&(()=>{const P=[];for(const J of gt){const ge=Ae.get(J.id);P.push({id:J.id,orig:J.originalRect,target:ge||J.currentRect,isFixed:J.isFixed,isSelected:C.has(J.id),isExiting:Ne.has(J.id)})}for(const[J,ge]of Ae)if(!P.some(Se=>Se.id===J)){const Se=b.find(et=>et.id===J);Se&&P.push({id:J,orig:Se.originalRect,target:ge,isFixed:Se.isFixed,isSelected:C.has(J)})}for(const[J,ge]of Ye)P.some(Se=>Se.id===J)||P.push({id:J,orig:ge.orig,target:ge.target,isFixed:ge.isFixed,isSelected:!1,isExiting:!0});return P.length===0?null:l.jsxs("svg",{className:`${Oe.connectorSvg} ${E||a?Oe.connectorExiting:""}`,children:[P.map(({id:J,orig:ge,target:Se,isFixed:et,isSelected:Ke,isExiting:Ee})=>{const _t=ge.x+ge.width/2,Ie=(et?ge.y:ge.y-$)+ge.height/2,Ft=Se.x+Se.width/2,xt=(et?Se.y:Se.y-$)+Se.height/2,ct=Ft-_t,Lt=xt-Ie,Rt=Math.sqrt(ct*ct+Lt*Lt);if(Rt<2)return null;const Qt=Math.min(1,Rt/40),ut=Math.min(Rt*.3,60),nt=Rt>0?-Lt/Rt:0,jt=Rt>0?ct/Rt:0,pt=(_t+Ft)/2+nt*ut,At=(Ie+xt)/2+jt*ut,mt=Ae.has(J),Ot=mt||Ke?1:.4,hn=mt||Ke?1:.5;return l.jsxs("g",{className:Ee?Oe.connectorExiting:"",children:[l.jsx("path",{className:Oe.connectorLine,d:`M ${_t} ${Ie} Q ${pt} ${At} ${Ft} ${xt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ot*Qt}),l.jsx("circle",{className:Oe.connectorDot,cx:_t,cy:Ie,r:4*Qt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:hn*Qt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Oe.connectorDot,cx:Ft,cy:xt,r:4*Qt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:hn*Qt,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{var xt;const P=b.find(ct=>ct.id===N);if(!P)return null;const J=P.currentRect,ge=P.isFixed?J.y:J.y-$,Se=J.x+J.width/2,et=ge-8,Ke=ge+J.height+8,Ee=et>200,_t=Ke<window.innerHeight-100,Ie=Math.max(160,Math.min(window.innerWidth-160,Se));let Ft;return Ee?Ft={left:Ie,bottom:window.innerHeight-et}:_t?Ft={left:Ie,top:Ke}:Ft={left:Ie,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:P.label,placeholder:"Add a note about this section",initialValue:(xt=P.note)!=null?xt:"",submitLabel:V.current?"Save":"Set",onSubmit:re,onCancel:le,onDelete:V.current?()=>{re("")}:void 0,isExiting:Y,lightMode:!i,style:Ft})})(),ie&&l.jsx("div",{className:Oe.sizeIndicator,style:{left:ie.x,top:ie.y},"data-feedback-toolbar":!0,children:ie.text}),me.map((P,J)=>l.jsx("div",{className:Oe.guideLine,style:P.axis==="x"?{position:"fixed",left:P.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:P.pos-$,width:"100vw",height:1}},`${P.axis}-${P.pos}-${J}`))]})}var Bm=new Set(["script","style","noscript","link","meta","br","hr"]);function A6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Bm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Rr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Bm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Md(h),selector:Rr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function N6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function D6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Lm(t,n){const i=n?N6(n):A6(),a=D6(t);let c=null,u=null,d=null,h=null,p=null;for(const C of i){if(Math.abs(C.left-a.left)<2&&Math.abs(C.top-a.top)<2&&Math.abs(C.right-C.left-t.width)<2&&Math.abs(C.bottom-C.top-t.height)<2)continue;C.left<=a.left+2&&C.right>=a.right-2&&C.top<=a.top+2&&C.bottom>=a.bottom-2&&C.area>a.area*1.5&&(!p||C.area<p._area)&&(p={label:C.label,selector:C.selector,_area:C.area});const M=a.right>C.left+5&&a.left<C.right-5,E=a.bottom>C.top+5&&a.top<C.bottom-5;if(M&&C.bottom<=a.top+5){const T=Math.round(a.top-C.bottom);(!c||T<c._dist)&&(c={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}if(M&&C.top>=a.bottom-5){const T=Math.round(C.top-a.bottom);(!u||T<u._dist)&&(u={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}if(E&&C.right<=a.left+5){const T=Math.round(a.left-C.right);(!d||T<d._dist)&&(d={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}if(E&&C.left>=a.right-5){const T=Math.round(C.left-a.right);(!h||T<h._dist)&&(h={label:C.label,selector:C.selector,gap:Math.max(0,T),_dist:T})}}const y=window.innerWidth,g=window.innerHeight,x=B6(t,y),b=C=>C?{label:C.label,selector:C.selector,gap:C.gap}:null,S=R6(a,t,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:S}}function R6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];t.left<y.left-2&&g.push("left"),t.right>y.right+2&&g.push("right"),t.top<y.top-2&&g.push("top"),t.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function B6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function ab(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function rb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=ab(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function L6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(ab(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Zy=15;function Jy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Zy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Zy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function O6(t){var d;if(t.length<2)return[];const n=Jy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Jy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(S=>p.has(S)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(S=>p.has(S)),b=x.join(", ");if(y.type!==h.type){const S=h.type==="row"?"y":"x",C=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${S}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${C}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const S=h.type==="row"?"y":"x",C=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${S}: ${h.sharedEdge} → ${y.sharedEdge}`:"",M=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${C}${M}`)}x.forEach(S=>c.add(S))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(S=>c.add(S))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function lb(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Bm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Rr(h)}}}return{viewport:t,contentArea:null}}function z6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Rr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function cb(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),y=t.x+t.width/2,g=Math.abs(y-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function ub(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function $6(t){const n=z6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function e1(t,n,i,a="standard"){var E,T,O,L;if(t.length===0)return"";const c=[...t].sort((N,q)=>Math.abs(N.y-q.y)<20?N.x-q.x:N.y-q.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((N,q)=>{var Q;const Y=((Q=Qi[N.type])==null?void 0:Q.label)||N.type;u+=`${q+1}. **${Y}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}),u;const d=lb(n);u+=ub(d),u+=`### Components
`,c.forEach((N,q)=>{var Ne;const Y=((Ne=Qi[N.type])==null?void 0:Ne.label)||N.type,Q={x:N.x,y:N.y,width:N.width,height:N.height};u+=`${q+1}. **${Y}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`;const V=Lm(Q),le=rb(V,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Ve of le)u+=`   - ${Ve}
`;const re=cb(Q,d);re&&(u+=`   - CSS: ${re}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const N of c){const q=h.find(Y=>Math.abs(Y.y-N.y)<30);q?q.items.push(N):h.push({y:N.y,items:[N]})}if(h.sort((N,q)=>N.y-q.y),h.forEach((N,q)=>{N.items.sort((Q,V)=>Q.x-V.x);const Y=N.items.map(Q=>{var V;return((V=Qi[Q.type])==null?void 0:V.label)||Q.type});if(N.items.length===1){const V=N.items[0].width>n.width*.8;u+=`- Row ${q+1} (y≈${Math.round(N.y)}): ${Y[0]}${V?" — full width":""}
`}else u+=`- Row ${q+1} (y≈${Math.round(N.y)}): ${Y.join(" | ")} — ${N.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let N=0;N<c.length-1;N++){const q=c[N],Y=c[N+1],Q=((E=Qi[q.type])==null?void 0:E.label)||q.type,V=((T=Qi[Y.type])==null?void 0:T.label)||Y.type,ee=Math.round(Y.y-(q.y+q.height)),le=Math.round(Y.x-(q.x+q.width));Math.abs(q.y-Y.y)<30?u+=`- ${Q} → ${V}: \`${le}px\` horizontal gap
`:u+=`- ${Q} → ${V}: \`${ee}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let N=0;N<c.length;N++)for(let q=N+1;q<c.length;q++){const Y=c[N],Q=c[q],V=((O=Qi[Y.type])==null?void 0:O.label)||Y.type,ee=((L=Qi[Q.type])==null?void 0:L.label)||Q.type,le=Math.round(Q.y-(Y.y+Y.height)),re=Math.round(Q.x-(Y.x+Y.width));u+=`- ${V} ↔ ${ee}: h=\`${re}px\` v=\`${le}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((N,q)=>{var Q;const Y=((Q=Qi[N.type])==null?void 0:Q.label)||N.type;u+=`${q}. ${Y} at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(N=>N.type==="navigation"),y=c.some(N=>N.type==="hero"),g=c.some(N=>N.type==="sidebar"),x=c.some(N=>N.type==="footer"),b=c.filter(N=>N.type==="card"),S=c.filter(N=>N.type==="form"),C=c.filter(N=>N.type==="table"),M=c.filter(N=>N.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),S.length>0&&(u+=`- ${S.length} form${S.length>1?"s":""} — add proper labels, validation, and submit handling
`),C.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),M.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const N=c.find(q=>q.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(N.width)}px 1fr;\`
`}if(b.length>1){const N=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${N}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function t1(t,n="standard",i){const{sections:a}=t,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,S=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,C=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!S&&!C){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:S,sizeChanged:C})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=lb({width:d,height:h});n!=="compact"&&(u+=ub(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const S=g.originalRect,C=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(C.x)}, ${Math.round(C.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(C.width)}×${Math.round(C.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(S.width)}×${Math.round(S.height)}px to ${Math.round(C.width)}×${Math.round(C.height)}px
`,x){const E=Lm(S,y("original")),T=Lm(C,y("current")),O=b?{width:S.width,height:S.height}:void 0;u+=`  - Currently ${L6(E,{x:S.x,y:S.y},O)}
`;const L=b?{width:C.width,height:C.height}:void 0,N=`at (${Math.round(C.x)}, ${Math.round(C.y)})`,q=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",Q=rb(T,{includeLeftRight:n==="detailed"||n==="forensic"});if(Q.length>0){u+=`  - Suggested position ${N}${q}: ${Q[0]}
`;for(let ee=1;ee<Q.length;ee++)u+=`    ${Q[ee]}
`}else u+=`  - Suggested position ${N}${q}
`;const V=cb(C,p);V&&(u+=`  - CSS: ${V}
`)}const M=$6(g.selector);if(M&&(u+=`  - ${M}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const E=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;E!==g.selector&&(u+=`  - Element: \`${E}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=O6(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,S=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${S?" ← suggested":""}
`}}return u}var Om="feedback-annotations-",db=7;function Ed(t){return`${Om}${t}`}function tm(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Ed(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-db*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function fb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Ed(t),JSON.stringify(n))}catch{}}function I6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-db*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Om)){const c=a.slice(Om.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function cc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));fb(t,a)}var mp="agentation-design-";function P6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function H6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function U6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-rearrange-";function V6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Y6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function W6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var _p="agentation-wireframe-";function F6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${_p}${t}`);return n?JSON.parse(n):null}catch{return null}}function n1(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${_p}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${_p}${t}`)}catch{}}var hb="agentation-session-";function gp(t){return`${hb}${t}`}function X6(t){if(typeof window>"u")return null;try{return localStorage.getItem(gp(t))}catch{return null}}function nm(t,n){if(!(typeof window>"u"))try{localStorage.setItem(gp(t),n)}catch{}}function G6(t){if(!(typeof window>"u"))try{localStorage.removeItem(gp(t))}catch{}}var mb=`${hb}toolbar-hidden`;function q6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(mb)==="1"}catch{return!1}}function K6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(mb,"1")}catch{}}async function sm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function s1(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function cl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function o1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function tr(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var zn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},i1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),a1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Q6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Z6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=i1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...i1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...a1,...t.skipPatterns]:a1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:Q6,filter:t==null?void 0:t.filter}}function J6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function eC(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function tC(t,n){const i=J6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function nC(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&tC(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ul=null,sC=new WeakMap;function om(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function oC(){if(ul!==null)return ul;if(typeof document>"u")return!1;if(document.body&&om(document.body))return ul=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&om(i))return ul=!0,!0}if(document.body){for(const n of document.body.children)if(om(n))return ul=!0,!0}return ul=!1,!1}var uc={map:sC};function iC(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function aC(t){const n=iC(t);return n?t[n]:null}function wr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function rC(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===zn.HostComponent||n===zn.HostText||n===zn.HostHoistable||n===zn.HostSingleton||n===zn.Fragment||n===zn.Mode||n===zn.Profiler||n===zn.DehydratedFragment||n===zn.HostRoot||n===zn.HostPortal||n===zn.ScopeComponent||n===zn.OffscreenComponent||n===zn.LegacyHiddenComponent||n===zn.CacheComponent||n===zn.TracingMarkerComponent||n===zn.Throw||n===zn.ViewTransitionComponent||n===zn.ActivityComponent)return null;if(n===zn.ForwardRef){const u=a;if(u!=null&&u.render){const d=wr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:wr(i)}if(n===zn.MemoComponent||n===zn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=wr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:wr(i)}if(n===zn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===zn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===zn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?wr(u._result):null}return n===zn.SuspenseComponent||n===zn.SuspenseListComponent?null:n===zn.IncompleteClassComponent||n===zn.IncompleteFunctionComponent||n===zn.FunctionComponent||n===zn.ClassComponent||n===zn.IndeterminateComponent?wr(i):null}function lC(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function cC(t,n){const i=Z6(n),a=i.mode==="all";if(a){const p=uc.map.get(t);if(p!==void 0)return p}if(!oC()){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const c=i.mode==="smart"?eC(t):void 0,u=[];try{let p=aC(t),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=rC(p);g&&!lC(g)&&nC(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&uc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&uc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&uc.map.set(t,h),h}var dc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function uC(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Ec(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function dC(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Ec(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Ec(i._debugOwner)};i=i.return,a++}return null}function fC(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Ec(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Ec(n)}}}n=n.return,i++}return null}var nd=new Map;function hC(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===dc.FunctionComponent||n===dc.IndeterminateComponent)&&typeof i=="function")return i;if(n===dc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===dc.MemoComponent||n===dc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function mC(){const t=Vv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function pC(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function _C(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function gC(t){const n=hC(t);if(!n)return null;if(nd.has(n))return nd.get(n);const i=mC();if(!i)return nd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=pC(d.stack);h&&(c={fileName:_C(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Ec(t)||void 0})}}}finally{i.set(a)}return nd.set(n,c),c}function yC(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=gC(i);if(c)return c;i=i.return,a++}return null}function zm(t){const n=uC(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=dC(n);if(i||(i=fC(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=yC(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function xC(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function bC(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=zm(i);if(c.found)return c;i=i.parentElement,a++}return zm(t)}var vC=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,wC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=vC}var Ge=wC,fc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function r1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var SC=`@keyframes styles-module__markerIn___x4G8D {
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
}`,CC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=SC}var $s=CC;function l1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:S,onHoverLeave:C,onClick:M,onContextMenu:E}){const T=(h||p)&&!y,O=T&&x==="delete",L=t.isMultiSelect,N=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",q=c?$s.exit:u?$s.clearing:d?"":$s.enter,Y=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${$s.marker} ${L?$s.multiSelect:""} ${q} ${O?$s.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:O?void 0:N,animationDelay:Y},onMouseEnter:()=>S(t),onMouseLeave:C,onClick:Q=>{Q.stopPropagation(),c||M(t)},onContextMenu:E?Q=>{x==="delete"&&(Q.preventDefault(),Q.stopPropagation(),c||E(t))}:void 0,children:[T?O?l.jsx(Jx,{size:L?18:16}):l.jsx(zS,{size:16}):l.jsx("span",{className:g!==null&&n>=g?$s.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${$s.markerTooltip} ${$s.enter}`,style:b,children:[l.jsxs("span",{className:$s.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:$s.markerNote,children:t.comment})]})]})}function kC({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${$s.marker} ${$s.pending} ${i?$s.multiSelect:""} ${a?$s.exit:$s.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(kS,{size:12})})}function c1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${$s.marker} ${n?$s.fixed:""} ${$s.hovered} ${i?$s.multiSelect:""} ${$s.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Jx,{size:i?12:10})})}var jC=`.styles-module__switchContainer___Ka-AB {
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
}`,MC={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=jC}var im=MC,am=({className:t="",...n})=>l.jsxs("div",{className:`${im.switchContainer} ${t}`,children:[l.jsx("input",{className:im.switchInput,type:"checkbox",...n}),l.jsx("div",{className:im.switchThumb})]}),EC=`.styles-module__checkboxContainer___joqZk {
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
}`,TC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=EC}var sd=TC,AC=({className:t="",...n})=>l.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),NC=`.styles-module__container___w8eAF {
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
}`,DC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=NC}var u1=DC,d1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${u1.container} ${t}`,...u,children:[l.jsx(AC,{id:d,onChange:c,checked:a}),l.jsx("label",{className:u1.label,htmlFor:d,children:n}),i&&l.jsx(Er,{content:i})]})},RC=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,BC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=RC}var St=BC;function LC({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${St.settingsPanel} ${h?St.enter:St.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:St.settingsPanelContainer,children:[l.jsxs("div",{className:`${St.settingsPage} ${y==="automations"?St.slideLeft:""}`,children:[l.jsxs("div",{className:St.settingsHeader,children:[l.jsx("a",{className:St.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:St.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:St.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:St.themeIconWrapper,children:l.jsx("span",{className:St.themeIcon,children:i?l.jsx(LS,{size:20}):l.jsx(OS,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:St.settingsSection,children:[l.jsxs("div",{className:St.settingsRow,children:[l.jsxs("div",{className:St.settingsLabel,children:["Output Detail",l.jsx(Er,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:St.cycleButton,onClick:()=>{const C=(fc.findIndex(M=>M.value===t.outputDetail)+1)%fc.length;n({outputDetail:fc[C].value})},children:[l.jsx("span",{className:St.cycleButtonText,children:(b=fc.find(S=>S.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:St.cycleDots,children:fc.map(S=>l.jsx("span",{className:`${St.cycleDot} ${t.outputDetail===S.value?St.active:""}`},S.value))})]})]}),l.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop} ${c?"":St.settingsRowDisabled}`,children:[l.jsxs("div",{className:St.settingsLabel,children:["React Components",l.jsx(Er,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(am,{checked:c&&t.reactEnabled,onChange:S=>n({reactEnabled:S.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop}`,children:[l.jsxs("div",{className:St.settingsLabel,children:["Hide Until Restart",l.jsx(Er,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(am,{checked:!1,onChange:S=>{S.target.checked&&x()}})]})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:St.settingsSection,children:[l.jsx("div",{className:`${St.settingsLabel} ${St.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:St.colorOptions,children:vc.map(S=>l.jsx("button",{className:`${St.colorOption} ${t.annotationColorId===S.id?St.selected:""}`,style:{"--swatch":S.srgb,"--swatch-p3":S.p3},onClick:()=>n({annotationColorId:S.id}),title:S.label,type:"button"},S.id))})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:St.settingsSection,children:[l.jsx(d1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:S=>n({autoClearAfterCopy:S.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(d1,{className:St.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:S=>n({blockInteractions:S.target.checked})})]}),l.jsx("div",{className:St.divider}),l.jsxs("button",{className:St.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:St.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${St.mcpNavIndicator} ${St[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${St.settingsPage} ${St.automationsPage} ${y==="automations"?St.slideIn:""}`,children:[l.jsxs("button",{className:St.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(IS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:St.settingsSection,children:[l.jsxs("div",{className:St.settingsRow,children:[l.jsxs("span",{className:St.automationHeader,children:["MCP Connection",l.jsx(Er,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${St.mcpStatusDot} ${St[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:St.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:St.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:`${St.settingsSection} ${St.settingsSectionGrow}`,children:[l.jsxs("div",{className:St.settingsRow,children:[l.jsxs("span",{className:St.automationHeader,children:["Webhooks",l.jsx(Er,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:St.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${St.autoSendLabel} ${t.webhooksEnabled?St.active:""} ${t.webhookUrl?"":St.disabled}`,children:"Auto-Send"}),l.jsx(am,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:S=>n({webhooksEnabled:S.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:St.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:St.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:S=>S.stopPropagation(),onChange:S=>n({webhookUrl:S.target.value})})]})]})]})})}function rm(t,n="filtered"){const{name:i,path:a}=_l(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=cC(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var f1=!1,lm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ra=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},vc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],OC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...vc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};OC();function Sr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function cm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Cr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=zm(t),i=n.found?n:bC(t);if(i.found&&i.source)return xC(i.source,"path")}function zC({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:S,className:C}={}){var Ks,D,X,K,ce,W,ae;const[M,E]=_.useState(!1),[T,O]=_.useState([]),[L,N]=_.useState(!0),[q,Y]=_.useState(()=>q6()),[Q,V]=_.useState(!1),ee=_.useRef(null);_.useEffect(()=>{const w=R=>{const B=ee.current;B&&B.contains(R.target)&&R.stopPropagation()},k=["mousedown","click","pointerdown"];return k.forEach(R=>document.body.addEventListener(R,w)),()=>{k.forEach(R=>document.body.removeEventListener(R,w))}},[]);const[le,re]=_.useState(!1),[Ne,Ve]=_.useState(!1),[te,he]=_.useState(null),[I,ie]=_.useState({x:0,y:0}),[F,me]=_.useState(null),[Te,$]=_.useState(!1),[fe,G]=_.useState("idle"),[_e,ve]=_.useState(!1),[Ae,We]=_.useState(!1),[Ye,lt]=_.useState(null),[Bt,Kt]=_.useState(null),[Ze,ot]=_.useState([]),[zt,qe]=_.useState(null),[wt,ke]=_.useState(null),[se,Re]=_.useState(null),[Xe,He]=_.useState(null),[Fe,tt]=_.useState([]),[it,gt]=_.useState(0),[bt,$t]=_.useState(!1),[at,P]=_.useState(!1),[J,ge]=_.useState(!1),[Se,et]=_.useState(!1),[Ke,Ee]=_.useState(!1),[_t,Ie]=_.useState("main"),[Ft,xt]=_.useState(!1),[ct,Lt]=_.useState(!1),[Rt,Qt]=_.useState(!1),[ut,nt]=_.useState([]),[jt,pt]=_.useState(null),At=_.useRef(!1),[mt,Ot]=_.useState(!1),[hn,ln]=_.useState(!1),[on,Xn]=_.useState(1),[Hn,Sn]=_.useState("new-page"),[vn,rs]=_.useState(""),[Xt,$n]=_.useState(!1),[rt,In]=_.useState(null),fo=_.useRef(!1),Zo=_.useRef({rearrange:null,placements:[]}),Is=_.useRef({rearrange:null,placements:[]}),[Cs,ui]=_.useState(0),[_s,bo]=_.useState(0),[Jo,Ns]=_.useState(0),[Cn,ei]=_.useState(0),vs=_.useRef(new Set),gn=_.useRef(new Set),Un=_.useRef(null),so=_.useRef(),Ps=ct&&M&&!Rt&&mt;_.useEffect(()=>{if(Ps){ln(!1);const w=fl(()=>{ln(!0)});return()=>cancelAnimationFrame(w)}else ln(!1)},[Ps]);const ls=_.useRef(new Map),ns=_.useRef(new Map),Hs=_.useRef(),[yn,mn]=_.useState(!1),[tn,Pn]=_.useState([]),Io=_.useRef(tn);Io.current=tn;const[Po,di]=_.useState(null),Us=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[ti,gs]=_.useState(!1),vo=_.useRef(null),[kn,ho]=_.useState([]),fs=_.useRef({cmd:!1,shift:!1}),Gn=()=>{xt(!0)},Vs=()=>{xt(!1)},wo=()=>{ti||(vo.current=Ht(()=>gs(!0),850))},Ho=()=>{vo.current&&(clearTimeout(vo.current),vo.current=null),gs(!1),Vs()};_.useEffect(()=>()=>{vo.current&&clearTimeout(vo.current)},[]);const[Ut,oo]=_.useState(()=>{var w;try{const k=JSON.parse((w=localStorage.getItem("feedback-toolbar-settings"))!=null?w:"");return{...lm,...k,annotationColorId:vc.find(R=>R.id===k.annotationColorId)?k.annotationColorId:lm.annotationColorId}}catch{return lm}}),[ks,Uo]=_.useState(!0),[wi,So]=_.useState(!1),Ds=()=>{var w;(w=ee.current)==null||w.classList.add(Ge.disableTransitions),Uo(k=>!k),fl(()=>{var k;(k=ee.current)==null||k.classList.remove(Ge.disableTransitions)})},Vo=!1,Ys="off",[jn,Co]=_.useState(x!=null?x:null),mo=_.useRef(!1),[ys,po]=_.useState(g?"connecting":"disconnected"),[an,Ws]=_.useState(null),[Rs,io]=_.useState(!1),[ws,ko]=_.useState(null),Fs=_.useRef(!1),[jo,Mn]=_.useState(new Set),[Yo,En]=_.useState(new Set),[Vn,Rn]=_.useState(!1),[Xs,js]=_.useState(!1),[Bs,Wo]=_.useState(!1),ao=_.useRef(null),hs=_.useRef(null),Ss=_.useRef(null),Ro=_.useRef(null),_o=_.useRef(!1),go=_.useRef(0),Bo=_.useRef(null),Lo=_.useRef(null),Si=8,ta=50,Ii=_.useRef(null),Pi=_.useRef(null),ni=_.useRef(null),Tt=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(Se)Ee(!0);else{xt(!1),Ie("main");const w=Ht(()=>Ee(!1),0);return()=>clearTimeout(w)}},[Se]);const Ci=M&&L&&!ct;_.useEffect(()=>{if(Ci){Ve(!1),re(!0),Mn(new Set);const w=Ht(()=>{Mn(k=>{const R=new Set(k);return T.forEach(B=>R.add(B.id)),R})},350);return()=>clearTimeout(w)}else if(le){Ve(!0);const w=Ht(()=>{re(!1),Ve(!1)},250);return()=>clearTimeout(w)}},[Ci]),_.useEffect(()=>{P(!0),gt(window.scrollY);const w=tm(Tt);O(w.filter(Cr)),f1||(So(!0),f1=!0,Ht(()=>So(!1),750));try{const k=localStorage.getItem("feedback-toolbar-theme");k!==null&&Uo(k==="dark")}catch{}try{const k=localStorage.getItem("feedback-toolbar-position");if(k){const R=JSON.parse(k);typeof R.x=="number"&&typeof R.y=="number"&&Ws(R)}}catch{}},[Tt]),_.useEffect(()=>{at&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Ut))},[Ut,at]),_.useEffect(()=>{at&&localStorage.setItem("feedback-toolbar-theme",ks?"dark":"light")},[ks,at]);const ki=_.useRef(!1);_.useEffect(()=>{const w=ki.current;ki.current=Rs,w&&!Rs&&an&&at&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(an))},[Rs,an,at]),_.useEffect(()=>{if(!g||!at||mo.current)return;mo.current=!0,po("connecting"),(async()=>{try{const k=X6(Tt),R=x||k;let B=!1;if(R)try{const H=await s1(g,R);Co(H.id),po("connected"),nm(Tt,H.id),B=!0;const oe=tm(Tt),pe=new Set(H.annotations.map(Be=>Be.id)),Me=oe.filter(Be=>!pe.has(Be.id));if(Me.length>0){const Je=`${typeof window<"u"?window.location.origin:""}${Tt}`,ht=(await Promise.allSettled(Me.map(dt=>cl(g,H.id,{...dt,sessionId:H.id,url:Je})))).map((dt,ft)=>dt.status==="fulfilled"?dt.value:(console.warn("[Agentation] Failed to sync annotation:",dt.reason),Me[ft])),yt=[...H.annotations,...ht];O(yt.filter(Cr)),cc(Tt,yt.filter(Cr),H.id)}else O(H.annotations.filter(Cr)),cc(Tt,H.annotations.filter(Cr),H.id)}catch(H){console.warn("[Agentation] Could not join session, creating new:",H),G6(Tt)}if(!B){const H=typeof window<"u"?window.location.href:"/",oe=await sm(g,H);Co(oe.id),po("connected"),nm(Tt,oe.id),b==null||b(oe.id);const pe=I6(),Me=typeof window<"u"?window.location.origin:"",Be=[];for(const[Je,st]of pe){const ht=st.filter(ft=>!ft._syncedTo);if(ht.length===0)continue;const yt=`${Me}${Je}`,dt=Je===Tt;Be.push((async()=>{try{const ft=dt?oe:await sm(g,yt),Ln=(await Promise.allSettled(ht.map(Dt=>cl(g,ft.id,{...Dt,sessionId:ft.id,url:yt})))).map((Dt,qt)=>Dt.status==="fulfilled"?Dt.value:(console.warn("[Agentation] Failed to sync annotation:",Dt.reason),ht[qt])).filter(Cr);if(cc(Je,Ln,ft.id),dt){const Dt=new Set(ht.map(qt=>qt.id));O(qt=>{const Mt=qt.filter(Pt=>!Dt.has(Pt.id));return[...Ln,...Mt]})}}catch(ft){console.warn(`[Agentation] Failed to sync annotations for ${Je}:`,ft)}})())}await Promise.allSettled(Be)}}catch(k){po("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",k)}})()},[g,x,at,b,Tt]),_.useEffect(()=>{if(!g||!at)return;const w=async()=>{try{(await fetch(`${g}/health`)).ok?po("connected"):po("disconnected")}catch{po("disconnected")}};w();const k=US(w,1e4);return()=>clearInterval(k)},[g,at]),_.useEffect(()=>{if(!g||!at||!jn)return;const w=new EventSource(`${g}/sessions/${jn}/events`),k=["resolved","dismissed"],R=B=>{var H;try{const oe=JSON.parse(B.data);if(k.includes((H=oe.payload)==null?void 0:H.status)){const pe=oe.payload.id,Me=oe.payload.kind;if(Me==="placement"){for(const[Be,Je]of ls.current)if(Je===pe){ls.current.delete(Be),nt(st=>st.filter(ht=>ht.id!==Be));break}}else if(Me==="rearrange"){for(const[Be,Je]of ns.current)if(Je===pe){ns.current.delete(Be),In(st=>{if(!st)return null;const ht=st.sections.filter(yt=>yt.id!==Be);return ht.length===0?null:{...st,sections:ht}});break}}else En(Be=>new Set(Be).add(pe)),Ht(()=>{O(Be=>Be.filter(Je=>Je.id!==pe)),En(Be=>{const Je=new Set(Be);return Je.delete(pe),Je})},150)}}catch{}};return w.addEventListener("annotation.updated",R),()=>{w.removeEventListener("annotation.updated",R),w.close()}},[g,at,jn]),_.useEffect(()=>{if(!g||!at)return;const w=Lo.current==="disconnected",k=ys==="connected";Lo.current=ys,w&&k&&(async()=>{try{const B=tm(Tt);if(B.length===0)return;const oe=`${typeof window<"u"?window.location.origin:""}${Tt}`;let pe=jn,Me=[];if(pe)try{Me=(await s1(g,pe)).annotations}catch{pe=null}pe||(pe=(await sm(g,oe)).id,Co(pe),nm(Tt,pe));const Be=new Set(Me.map(st=>st.id)),Je=B.filter(st=>!Be.has(st.id));if(Je.length>0){const ht=(await Promise.allSettled(Je.map(ft=>cl(g,pe,{...ft,sessionId:pe,url:oe})))).map((ft,wn)=>ft.status==="fulfilled"?ft.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ft.reason),Je[wn])),dt=[...Me,...ht].filter(Cr);O(dt),cc(Tt,dt,pe)}}catch(B){console.warn("[Agentation] Failed to sync on reconnect:",B)}})()},[ys,g,at,jn,Tt]);const Hi=_.useCallback(()=>{Q||(V(!0),et(!1),E(!1),Ht(()=>{K6(!0),Y(!0),V(!1)},400))},[Q]);_.useEffect(()=>{if(!i||!at||!t||t.length===0||T.length>0)return;const w=[];return w.push(Ht(()=>{E(!0)},n-200)),t.forEach((k,R)=>{const B=n+R*300;w.push(Ht(()=>{const H=document.querySelector(k.selector);if(!H)return;const oe=H.getBoundingClientRect(),{name:pe,path:Me}=_l(H),Be={id:`demo-${Date.now()}-${R}`,x:(oe.left+oe.width/2)/window.innerWidth*100,y:oe.top+oe.height/2+window.scrollY,comment:k.comment,element:pe,elementPath:Me,timestamp:Date.now(),selectedText:k.selectedText,boundingBox:{x:oe.left,y:oe.top+window.scrollY,width:oe.width,height:oe.height},nearbyText:rc(H),cssClasses:lc(H)};O(Je=>[...Je,Be])},B))}),()=>{w.forEach(clearTimeout)}},[i,at,t,n]),_.useEffect(()=>{const w=()=>{gt(window.scrollY),$t(!0),ni.current&&clearTimeout(ni.current),ni.current=Ht(()=>{$t(!1)},150)};return window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),ni.current&&clearTimeout(ni.current)}},[]),_.useEffect(()=>{at&&T.length>0?jn?cc(Tt,T,jn):fb(Tt,T):at&&T.length===0&&localStorage.removeItem(Ed(Tt))},[T,Tt,at,jn]),_.useEffect(()=>{if(at&&!At.current){At.current=!0;const w=P6(Tt);w.length>0&&nt(w)}},[at,Tt]),_.useEffect(()=>{at&&At.current&&!mt&&(ut.length>0?H6(Tt,ut):U6(Tt))},[ut,Tt,at,mt]),_.useEffect(()=>{if(at&&!fo.current){fo.current=!0;const w=V6(Tt);if(w){const k={...w,sections:w.sections.map(R=>{var B;return{...R,currentRect:(B=R.currentRect)!=null?B:{...R.originalRect}}})};In(k)}}},[at,Tt]),_.useEffect(()=>{at&&fo.current&&!mt&&(rt?Y6(Tt,rt):W6(Tt))},[rt,Tt,at,mt]);const fi=_.useRef(!1);_.useEffect(()=>{if(at&&!fi.current){fi.current=!0;const w=F6(Tt);w&&(Is.current={rearrange:w.rearrange,placements:w.placements||[]},w.purpose&&rs(w.purpose))}},[at,Tt]),_.useEffect(()=>{var k,R,B,H,oe;if(!at||!fi.current)return;const w=Is.current;mt?((R=(k=rt==null?void 0:rt.sections)==null?void 0:k.length)!=null?R:0)>0||ut.length>0||vn?n1(Tt,{rearrange:rt,placements:ut,purpose:vn}):td(Tt):((oe=(H=(B=w.rearrange)==null?void 0:B.sections)==null?void 0:H.length)!=null?oe:0)>0||w.placements.length>0||vn?n1(Tt,{rearrange:w.rearrange,placements:w.placements,purpose:vn}):td(Tt)},[rt,ut,vn,mt,Tt,at]),_.useEffect(()=>{ct&&!rt&&In({sections:[],originalOrder:[],detectedAt:Date.now()})},[ct,rt]),_.useEffect(()=>{if(!g||!jn)return;const w=ls.current,k=new Set(ut.map(R=>R.id));for(const R of ut){if(w.has(R.id))continue;w.set(R.id,"");const B=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Tt;cl(g,jn,{id:R.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Place ${R.type} at (${Math.round(R.x)}, ${Math.round(R.y)}), ${R.width}×${R.height}px${R.text?` — "${R.text}"`:""}`,element:`[design:${R.type}]`,elementPath:"[placement]",timestamp:R.timestamp,url:B,intent:"change",severity:"important",kind:"placement",placement:{componentType:R.type,width:R.width,height:R.height,scrollY:R.scrollY,text:R.text}}).then(H=>{w.has(R.id)&&w.set(R.id,H.id)}).catch(H=>{console.warn("[Agentation] Failed to sync placement annotation:",H),w.delete(R.id)})}for(const[R,B]of w)k.has(R)||(w.delete(R),B&&tr(g,B).catch(()=>{}))},[ut,g,jn,Tt]),_.useEffect(()=>{if(!(!g||!jn))return Hs.current&&clearTimeout(Hs.current),Hs.current=Ht(()=>{const w=ns.current;if(!rt||rt.sections.length===0){for(const[,B]of w)B&&tr(g,B).catch(()=>{});w.clear();return}const k=new Set(rt.sections.map(B=>B.id)),R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Tt;for(const B of rt.sections){const H=B.originalRect,oe=B.currentRect;if(!(Math.abs(H.x-oe.x)>1||Math.abs(H.y-oe.y)>1||Math.abs(H.width-oe.width)>1||Math.abs(H.height-oe.height)>1)){const Be=w.get(B.id);Be&&(w.delete(B.id),tr(g,Be).catch(()=>{}));continue}const Me=w.get(B.id);Me?o1(g,Me,{comment:`Move ${B.label} section (${B.tagName}) — from (${Math.round(H.x)},${Math.round(H.y)}) ${Math.round(H.width)}×${Math.round(H.height)} to (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)}`}).catch(Be=>{console.warn("[Agentation] Failed to update rearrange annotation:",Be)}):(w.set(B.id,""),cl(g,jn,{id:B.id,x:oe.x/window.innerWidth*100,y:oe.y,comment:`Move ${B.label} section (${B.tagName}) — from (${Math.round(H.x)},${Math.round(H.y)}) ${Math.round(H.width)}×${Math.round(H.height)} to (${Math.round(oe.x)},${Math.round(oe.y)}) ${Math.round(oe.width)}×${Math.round(oe.height)}`,element:B.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:R,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:B.selector,label:B.label,tagName:B.tagName,originalRect:H,currentRect:oe}}).then(Be=>{w.has(B.id)&&w.set(B.id,Be.id)}).catch(Be=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Be),w.delete(B.id)}))}for(const[B,H]of w)k.has(B)||(w.delete(B),H&&tr(g,H).catch(()=>{}))},300),()=>{Hs.current&&clearTimeout(Hs.current)}},[rt,g,jn,Tt]);const yo=_.useRef(new Map);_.useLayoutEffect(()=>{var R;const w=(R=rt==null?void 0:rt.sections)!=null?R:[],k=new Set;if((ct||Rt)&&M)for(const B of w){k.add(B.id);try{const H=document.querySelector(B.selector);if(!H)continue;if(!yo.current.has(B.id)){const oe={transform:H.style.transform,transformOrigin:H.style.transformOrigin,opacity:H.style.opacity,position:H.style.position,zIndex:H.style.zIndex,display:H.style.display},pe=[];let Me=H.parentElement;for(;Me&&Me!==document.body;){const Je=getComputedStyle(Me);(Je.overflow!=="visible"||Je.overflowX!=="visible"||Je.overflowY!=="visible")&&(pe.push({el:Me,overflow:Me.style.overflow}),Me.style.overflow="visible"),Me=Me.parentElement}getComputedStyle(H).display==="inline"&&(H.style.display="inline-block"),yo.current.set(B.id,{el:H,origStyles:oe,ancestors:pe}),H.style.transformOrigin="top left",H.style.zIndex="9999"}}catch{}}for(const[B,H]of yo.current)if(!k.has(B)){const{el:oe,origStyles:pe,ancestors:Me}=H;oe.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",oe.style.transform=pe.transform,oe.style.transformOrigin=pe.transformOrigin,oe.style.opacity=pe.opacity,oe.style.position=pe.position,oe.style.zIndex=pe.zIndex,yo.current.delete(B),Ht(()=>{oe.style.transition="",oe.style.display=pe.display;for(const Be of Me)Be.el.style.overflow=Be.overflow},450)}},[rt,ct,Rt,M]),_.useEffect(()=>()=>{for(const[,w]of yo.current){const{el:k,origStyles:R,ancestors:B}=w;k.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",k.style.transform=R.transform,k.style.transformOrigin=R.transformOrigin,k.style.opacity=R.opacity,k.style.position=R.position,k.style.zIndex=R.zIndex,Ht(()=>{k.style.transition="",k.style.display=R.display;for(const H of B)H.el.style.overflow=H.overflow},450)}yo.current.clear()},[]);const Fo=_.useCallback(()=>{Qt(!0),Lt(!1),pt(null),clearTimeout(so.current),so.current=Ht(()=>{Qt(!1)},300)},[]),hi=_.useCallback(()=>{ct&&(Qt(!0),Lt(!1),pt(null),clearTimeout(so.current),so.current=Ht(()=>{Qt(!1)},300)),E(!1)},[ct]),j=_.useCallback(()=>{J||(YS(),ge(!0))},[J]),U=_.useCallback(()=>{J&&(Uy(),ge(!1))},[J]),ue=_.useCallback(()=>{J?U():j()},[J,j,U]),Ce=_.useCallback(()=>{if(kn.length===0)return;const w=kn[0],k=w.element,R=kn.length>1,B=kn.map(H=>H.element.getBoundingClientRect());if(R){const H={left:Math.min(...B.map(ft=>ft.left)),top:Math.min(...B.map(ft=>ft.top)),right:Math.max(...B.map(ft=>ft.right)),bottom:Math.max(...B.map(ft=>ft.bottom))},oe=kn.slice(0,5).map(ft=>ft.name).join(", "),pe=kn.length>5?` +${kn.length-5} more`:"",Me=B.map(ft=>({x:ft.left,y:ft.top+window.scrollY,width:ft.width,height:ft.height})),Je=kn[kn.length-1].element,st=B[B.length-1],ht=st.left+st.width/2,yt=st.top+st.height/2,dt=cm(Je);me({x:ht/window.innerWidth*100,y:dt?yt:yt+window.scrollY,clientY:yt,element:`${kn.length} elements: ${oe}${pe}`,elementPath:"multi-select",boundingBox:{x:H.left,y:H.top+window.scrollY,width:H.right-H.left,height:H.bottom-H.top},isMultiSelect:!0,isFixed:dt,elementBoundingBoxes:Me,multiSelectElements:kn.map(ft=>ft.element),targetElement:Je,fullPath:Zu(k),accessibility:Qu(k),computedStyles:Ku(k),computedStylesObj:qu(k),nearbyElements:Gu(k),cssClasses:lc(k),nearbyText:rc(k),sourceFile:od(k)})}else{const H=B[0],oe=cm(k);me({x:H.left/window.innerWidth*100,y:oe?H.top:H.top+window.scrollY,clientY:H.top,element:w.name,elementPath:w.path,boundingBox:{x:H.left,y:oe?H.top:H.top+window.scrollY,width:H.width,height:H.height},isFixed:oe,fullPath:Zu(k),accessibility:Qu(k),computedStyles:Ku(k),computedStylesObj:qu(k),nearbyElements:Gu(k),cssClasses:lc(k),nearbyText:rc(k),reactComponents:w.reactComponents,sourceFile:od(k)})}ho([]),he(null)},[kn]);_.useEffect(()=>{M||(me(null),Re(null),He(null),tt([]),he(null),et(!1),ho([]),fs.current={cmd:!1,shift:!1},J&&U())},[M,J,U]),_.useEffect(()=>()=>{Uy()},[]),_.useEffect(()=>{if(!M)return;const w=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),k=":not([data-agentation-root]):not([data-agentation-root] *)",R=document.createElement("style");return R.id="feedback-cursor-styles",R.textContent=`
      body ${k} {
        cursor: crosshair !important;
      }

      body :is(${w})${k} {
        cursor: text !important;
      }
    `,document.head.appendChild(R),()=>{const B=document.getElementById("feedback-cursor-styles");B&&B.remove()}},[M]),_.useEffect(()=>{if(Po!==null&&M)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Po,M]),_.useEffect(()=>{if(!M||F||yn||ct)return;const w=k=>{const R=k.composedPath()[0]||k.target;if(Go(R,"[data-feedback-toolbar]")){he(null);return}const B=Sr(k.clientX,k.clientY);if(!B||Go(B,"[data-feedback-toolbar]")){he(null);return}const{name:H,elementName:oe,path:pe,reactComponents:Me}=rm(B,Ys),Be=B.getBoundingClientRect();he({element:H,elementName:oe,elementPath:pe,rect:Be,reactComponents:Me}),ie({x:k.clientX,y:k.clientY})};return document.addEventListener("mousemove",w),()=>document.removeEventListener("mousemove",w)},[M,F,yn,ct,Ys,tn]);const Pe=_.useCallback(w=>{var k;if(Re(w),lt(null),Kt(null),ot([]),(k=w.elementBoundingBoxes)!=null&&k.length){const R=[];for(const B of w.elementBoundingBoxes){const H=B.x+B.width/2,oe=B.y+B.height/2-window.scrollY,pe=Sr(H,oe);pe&&R.push(pe)}tt(R),He(null)}else if(w.boundingBox){const R=w.boundingBox,B=R.x+R.width/2,H=w.isFixed?R.y+R.height/2:R.y+R.height/2-window.scrollY,oe=Sr(B,H);if(oe){const pe=oe.getBoundingClientRect(),Me=pe.width/R.width,Be=pe.height/R.height;Me<.5||Be<.5?He(null):He(oe)}else He(null);tt([])}else He(null),tt([])},[]);_.useEffect(()=>{if(!M||yn||ct)return;const w=k=>{var Bn,Ln;if(_o.current){_o.current=!1;return}const R=k.composedPath()[0]||k.target;if(Go(R,"[data-feedback-toolbar]")||Go(R,"[data-annotation-popup]")||Go(R,"[data-annotation-marker]"))return;if(k.metaKey&&k.shiftKey&&!F&&!se){k.preventDefault(),k.stopPropagation();const Dt=Sr(k.clientX,k.clientY);if(!Dt)return;const qt=Dt.getBoundingClientRect(),{name:Mt,path:Pt,reactComponents:qn}=rm(Dt,Ys),Tn=kn.findIndex(lo=>lo.element===Dt);Tn>=0?ho(lo=>lo.filter((Oo,os)=>os!==Tn)):ho(lo=>[...lo,{element:Dt,rect:qt,name:Mt,path:Pt,reactComponents:qn!=null?qn:void 0}]);return}const B=Go(R,"button, a, input, select, textarea, [role='button'], [onclick]");if(Ut.blockInteractions&&B&&(k.preventDefault(),k.stopPropagation()),F){if(B&&!Ut.blockInteractions)return;k.preventDefault(),(Bn=Ii.current)==null||Bn.shake();return}if(se){if(B&&!Ut.blockInteractions)return;k.preventDefault(),(Ln=Pi.current)==null||Ln.shake();return}k.preventDefault();const H=Sr(k.clientX,k.clientY);if(!H)return;const{name:oe,path:pe,reactComponents:Me}=rm(H,Ys),Be=H.getBoundingClientRect(),Je=k.clientX/window.innerWidth*100,st=cm(H),ht=st?k.clientY:k.clientY+window.scrollY,yt=window.getSelection();let dt;yt&&yt.toString().trim().length>0&&(dt=yt.toString().trim().slice(0,500));const ft=qu(H),wn=Ku(H);me({x:Je,y:ht,clientY:k.clientY,element:oe,elementPath:pe,selectedText:dt,boundingBox:{x:Be.left,y:st?Be.top:Be.top+window.scrollY,width:Be.width,height:Be.height},nearbyText:rc(H),cssClasses:lc(H),isFixed:st,fullPath:Zu(H),accessibility:Qu(H),computedStyles:wn,computedStylesObj:ft,nearbyElements:Gu(H),reactComponents:Me!=null?Me:void 0,sourceFile:od(H),targetElement:H}),he(null)};return document.addEventListener("click",w,!0),()=>document.removeEventListener("click",w,!0)},[M,yn,ct,F,se,Ut.blockInteractions,Ys,kn]),_.useEffect(()=>{if(!M)return;const w=B=>{B.key==="Meta"&&(fs.current.cmd=!0),B.key==="Shift"&&(fs.current.shift=!0)},k=B=>{const H=fs.current.cmd&&fs.current.shift;B.key==="Meta"&&(fs.current.cmd=!1),B.key==="Shift"&&(fs.current.shift=!1);const oe=fs.current.cmd&&fs.current.shift;H&&!oe&&kn.length>0&&Ce()},R=()=>{fs.current={cmd:!1,shift:!1},ho([])};return document.addEventListener("keydown",w),document.addEventListener("keyup",k),window.addEventListener("blur",R),()=>{document.removeEventListener("keydown",w),document.removeEventListener("keyup",k),window.removeEventListener("blur",R)}},[M,kn,Ce]),_.useEffect(()=>{if(!M||F||yn||ct)return;const w=k=>{const R=k.composedPath()[0]||k.target;Go(R,"[data-feedback-toolbar]")||Go(R,"[data-annotation-marker]")||Go(R,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(R.tagName)||R.isContentEditable||(k.preventDefault(),ao.current={x:k.clientX,y:k.clientY})};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[M,F,yn,ct]),_.useEffect(()=>{if(!M||F)return;const w=k=>{if(!ao.current)return;const R=k.clientX-ao.current.x,B=k.clientY-ao.current.y,H=R*R+B*B,oe=Si*Si;if(!Bs&&H>=oe&&(hs.current=ao.current,Wo(!0),k.preventDefault()),(Bs||H>=oe)&&hs.current){if(Ss.current){const Mt=Math.min(hs.current.x,k.clientX),Pt=Math.min(hs.current.y,k.clientY),qn=Math.abs(k.clientX-hs.current.x),Tn=Math.abs(k.clientY-hs.current.y);Ss.current.style.transform=`translate(${Mt}px, ${Pt}px)`,Ss.current.style.width=`${qn}px`,Ss.current.style.height=`${Tn}px`}const pe=Date.now();if(pe-go.current<ta)return;go.current=pe;const Me=hs.current.x,Be=hs.current.y,Je=Math.min(Me,k.clientX),st=Math.min(Be,k.clientY),ht=Math.max(Me,k.clientX),yt=Math.max(Be,k.clientY),dt=(Je+ht)/2,ft=(st+yt)/2,wn=new Set,Bn=[[Je,st],[ht,st],[Je,yt],[ht,yt],[dt,ft],[dt,st],[dt,yt],[Je,ft],[ht,ft]];for(const[Mt,Pt]of Bn){const qn=document.elementsFromPoint(Mt,Pt);for(const Tn of qn)Tn instanceof HTMLElement&&wn.add(Tn)}const Ln=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Mt of Ln)if(Mt instanceof HTMLElement){const Pt=Mt.getBoundingClientRect(),qn=Pt.left+Pt.width/2,Tn=Pt.top+Pt.height/2,lo=qn>=Je&&qn<=ht&&Tn>=st&&Tn<=yt,Oo=Math.min(Pt.right,ht)-Math.max(Pt.left,Je),os=Math.min(Pt.bottom,yt)-Math.max(Pt.top,st),ji=Oo>0&&os>0?Oo*os:0,Ui=Pt.width*Pt.height,Vi=Ui>0?ji/Ui:0;(lo||Vi>.5)&&wn.add(Mt)}const Dt=[],qt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Mt of wn){if(Go(Mt,"[data-feedback-toolbar]")||Go(Mt,"[data-annotation-marker]"))continue;const Pt=Mt.getBoundingClientRect();if(!(Pt.width>window.innerWidth*.8&&Pt.height>window.innerHeight*.5)&&!(Pt.width<10||Pt.height<10)&&Pt.left<ht&&Pt.right>Je&&Pt.top<yt&&Pt.bottom>st){const qn=Mt.tagName;let Tn=qt.has(qn);if(!Tn&&(qn==="DIV"||qn==="SPAN")){const lo=Mt.textContent&&Mt.textContent.trim().length>0,Oo=Mt.onclick!==null||Mt.getAttribute("role")==="button"||Mt.getAttribute("role")==="link"||Mt.classList.contains("clickable")||Mt.hasAttribute("data-clickable");(lo||Oo)&&!Mt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Tn=!0)}if(Tn){let lo=!1;for(const Oo of Dt)if(Oo.left<=Pt.left&&Oo.right>=Pt.right&&Oo.top<=Pt.top&&Oo.bottom>=Pt.bottom){lo=!0;break}lo||Dt.push(Pt)}}}if(Ro.current){const Mt=Ro.current;for(;Mt.children.length>Dt.length;)Mt.removeChild(Mt.lastChild);Dt.forEach((Pt,qn)=>{let Tn=Mt.children[qn];Tn||(Tn=document.createElement("div"),Tn.className=Ge.selectedElementHighlight,Mt.appendChild(Tn)),Tn.style.transform=`translate(${Pt.left}px, ${Pt.top}px)`,Tn.style.width=`${Pt.width}px`,Tn.style.height=`${Pt.height}px`})}}};return document.addEventListener("mousemove",w,{passive:!0}),()=>document.removeEventListener("mousemove",w)},[M,F,Bs,Si]),_.useEffect(()=>{if(!M)return;const w=k=>{const R=Bs,B=hs.current;if(Bs&&B){_o.current=!0;const H=Math.min(B.x,k.clientX),oe=Math.min(B.y,k.clientY),pe=Math.max(B.x,k.clientX),Me=Math.max(B.y,k.clientY),Be=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(dt=>{if(!(dt instanceof HTMLElement)||Go(dt,"[data-feedback-toolbar]")||Go(dt,"[data-annotation-marker]"))return;const ft=dt.getBoundingClientRect();ft.width>window.innerWidth*.8&&ft.height>window.innerHeight*.5||ft.width<10||ft.height<10||ft.left<pe&&ft.right>H&&ft.top<Me&&ft.bottom>oe&&Be.push({element:dt,rect:ft})});const st=Be.filter(({element:dt})=>!Be.some(({element:ft})=>ft!==dt&&dt.contains(ft))),ht=k.clientX/window.innerWidth*100,yt=k.clientY+window.scrollY;if(st.length>0){const dt=st.reduce((qt,{rect:Mt})=>({left:Math.min(qt.left,Mt.left),top:Math.min(qt.top,Mt.top),right:Math.max(qt.right,Mt.right),bottom:Math.max(qt.bottom,Mt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ft=st.slice(0,5).map(({element:qt})=>_l(qt).name).join(", "),wn=st.length>5?` +${st.length-5} more`:"",Bn=st[0].element,Ln=qu(Bn),Dt=Ku(Bn);me({x:ht,y:yt,clientY:k.clientY,element:`${st.length} elements: ${ft}${wn}`,elementPath:"multi-select",boundingBox:{x:dt.left,y:dt.top+window.scrollY,width:dt.right-dt.left,height:dt.bottom-dt.top},isMultiSelect:!0,fullPath:Zu(Bn),accessibility:Qu(Bn),computedStyles:Dt,computedStylesObj:Ln,nearbyElements:Gu(Bn),cssClasses:lc(Bn),nearbyText:rc(Bn),sourceFile:od(Bn)})}else{const dt=Math.abs(pe-H),ft=Math.abs(Me-oe);dt>20&&ft>20&&me({x:ht,y:yt,clientY:k.clientY,element:"Area selection",elementPath:`region at (${Math.round(H)}, ${Math.round(oe)})`,boundingBox:{x:H,y:oe+window.scrollY,width:dt,height:ft},isMultiSelect:!0})}he(null)}else R&&(_o.current=!0);ao.current=null,hs.current=null,Wo(!1),Ro.current&&(Ro.current.innerHTML="")};return document.addEventListener("mouseup",w),()=>document.removeEventListener("mouseup",w)},[M,Bs]);const Qe=_.useCallback(async(w,k,R)=>{const B=Ut.webhookUrl||S;if(!B||!Ut.webhooksEnabled&&!R)return!1;try{return(await fetch(B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:w,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...k})})).ok}catch(H){return console.warn("[Agentation] Webhook failed:",H),!1}},[S,Ut.webhookUrl,Ut.webhooksEnabled]),Vt=_.useCallback(w=>{var R;if(!F)return;const k={id:Date.now().toString(),x:F.x,y:F.y,comment:w,element:F.element,elementPath:F.elementPath,timestamp:Date.now(),selectedText:F.selectedText,boundingBox:F.boundingBox,nearbyText:F.nearbyText,cssClasses:F.cssClasses,isMultiSelect:F.isMultiSelect,isFixed:F.isFixed,fullPath:F.fullPath,accessibility:F.accessibility,computedStyles:F.computedStyles,nearbyElements:F.nearbyElements,reactComponents:F.reactComponents,sourceFile:F.sourceFile,elementBoundingBoxes:F.elementBoundingBoxes,...g&&jn?{sessionId:jn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};O(B=>[...B,k]),Bo.current=k.id,Ht(()=>{Bo.current=null},300),Ht(()=>{Mn(B=>new Set(B).add(k.id))},250),a==null||a(k),Qe("annotation.add",{annotation:k}),Rn(!0),Ht(()=>{me(null),Rn(!1)},150),(R=window.getSelection())==null||R.removeAllRanges(),g&&jn&&cl(g,jn,k).then(B=>{B.id!==k.id&&(O(H=>H.map(oe=>oe.id===k.id?{...oe,id:B.id}:oe)),Mn(H=>{const oe=new Set(H);return oe.delete(k.id),oe.add(B.id),oe}))}).catch(B=>{console.warn("[Agentation] Failed to sync annotation:",B)})},[F,a,Qe,g,jn]),Nt=_.useCallback(()=>{Rn(!0),Ht(()=>{me(null),Rn(!1)},150)},[]),Zt=_.useCallback(w=>{const k=T.findIndex(B=>B.id===w),R=T[k];(se==null?void 0:se.id)===w&&(js(!0),Ht(()=>{Re(null),He(null),tt([]),js(!1)},150)),qe(w),En(B=>new Set(B).add(w)),R&&(c==null||c(R),Qe("annotation.delete",{annotation:R})),g&&tr(g,w).catch(B=>{console.warn("[Agentation] Failed to delete annotation from server:",B)}),Ht(()=>{O(B=>B.filter(H=>H.id!==w)),En(B=>{const H=new Set(B);return H.delete(w),H}),qe(null),k<T.length-1&&(ke(k),Ht(()=>ke(null),200))},150)},[T,se,c,Qe,g]),Gt=_.useCallback(w=>{var k;if(!w){lt(null),Kt(null),ot([]);return}if(lt(w.id),(k=w.elementBoundingBoxes)!=null&&k.length){const R=[];for(const B of w.elementBoundingBoxes){const H=B.x+B.width/2,oe=B.y+B.height/2-window.scrollY,Me=document.elementsFromPoint(H,oe).find(Be=>!Be.closest("[data-annotation-marker]")&&!Be.closest("[data-agentation-root]"));Me&&R.push(Me)}ot(R),Kt(null)}else if(w.boundingBox){const R=w.boundingBox,B=R.x+R.width/2,H=w.isFixed?R.y+R.height/2:R.y+R.height/2-window.scrollY,oe=Sr(B,H);if(oe){const pe=oe.getBoundingClientRect(),Me=pe.width/R.width,Be=pe.height/R.height;Me<.5||Be<.5?Kt(null):Kt(oe)}else Kt(null);ot([])}else Kt(null),ot([])},[]),rn=_.useCallback(w=>{if(!se)return;const k={...se,comment:w};O(R=>R.map(B=>B.id===se.id?k:B)),u==null||u(k),Qe("annotation.update",{annotation:k}),g&&o1(g,se.id,{comment:w}).catch(R=>{console.warn("[Agentation] Failed to update annotation on server:",R)}),js(!0),Ht(()=>{Re(null),He(null),tt([]),js(!1)},150)},[se,u,Qe,g]),xn=_.useCallback(()=>{js(!0),Ht(()=>{Re(null),He(null),tt([]),js(!1)},150)},[]),cn=_.useCallback(()=>{const w=T.length,k=ut.length>0||!!rt;if(w===0&&tn.length===0&&!k)return;if(d==null||d(T),Qe("annotations.clear",{annotations:T}),g){Promise.all(T.map(H=>tr(g,H.id).catch(oe=>{console.warn("[Agentation] Failed to delete annotation from server:",oe)})));for(const[,H]of ls.current)H&&tr(g,H).catch(()=>{});ls.current.clear();for(const[,H]of ns.current)H&&tr(g,H).catch(()=>{});ns.current.clear()}We(!0),ve(!0),Pn([]);const R=Us.current;if(R){const H=R.getContext("2d");H&&H.clearRect(0,0,R.width,R.height)}(ut.length>0||rt)&&(Ns(H=>H+1),ei(H=>H+1),Ht(()=>{nt([]),In(null)},200)),mt&&Ot(!1),vn&&rs(""),Is.current={rearrange:null,placements:[]},td(Tt);const B=w*30+200;Ht(()=>{O([]),Mn(new Set),localStorage.removeItem(Ed(Tt)),We(!1)},B),Ht(()=>ve(!1),1500)},[Tt,T,tn,ut,rt,mt,vn,d,Qe,g]),Gs=_.useCallback(async()=>{const w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Tt,k=ct&&mt;let R;if(k){if(ut.length===0&&!rt&&!vn)return;R=""}else{if(R=r1(T,w,Ut.outputDetail),!R&&tn.length===0&&ut.length===0&&!rt)return;R||(R=`## Page Feedback: ${w}
`)}if(!k&&tn.length>0){const B=new Set;for(const Me of T)Me.drawingIndex!=null&&B.add(Me.drawingIndex);const H=Us.current;H&&(H.style.visibility="hidden");const oe=[],pe=window.scrollY;for(let Me=0;Me<tn.length;Me++){if(B.has(Me))continue;const Be=tn[Me];if(Be.points.length<2)continue;const Je=Be.fixed?Be.points:Be.points.map(Kn=>({x:Kn.x,y:Kn.y-pe}));let st=1/0,ht=1/0,yt=-1/0,dt=-1/0;for(const Kn of Je)st=Math.min(st,Kn.x),ht=Math.min(ht,Kn.y),yt=Math.max(yt,Kn.x),dt=Math.max(dt,Kn.y);const ft=yt-st,wn=dt-ht,Bn=Math.hypot(ft,wn),Ln=Je[0],Dt=Je[Je.length-1],qt=Math.hypot(Dt.x-Ln.x,Dt.y-Ln.y);let Mt;const Pt=qt<Bn*.35,qn=ft/Math.max(wn,1);if(Pt&&Bn>20){const Kn=Math.max(ft,wn)*.15;let Yi=0;for(const na of Je){const Pc=na.x-st<Kn,Wd=yt-na.x<Kn,Fd=na.y-ht<Kn,Xd=dt-na.y<Kn;(Pc||Wd)&&(Fd||Xd)&&Yi++}Mt=Yi>Je.length*.15?"box":"circle"}else qn>3&&wn<40?Mt="underline":qt>Bn*.5?Mt="arrow":Mt="drawing";const Tn=Math.min(10,Je.length),lo=Math.max(1,Math.floor(Je.length/Tn)),Oo=new Set,os=[],ji=[Ln];for(let Kn=lo;Kn<Je.length-1;Kn+=lo)ji.push(Je[Kn]);ji.push(Dt);for(const Kn of ji){const Yi=Sr(Kn.x,Kn.y);if(!Yi||Oo.has(Yi)||Go(Yi,"[data-feedback-toolbar]"))continue;Oo.add(Yi);const{name:na}=_l(Yi);os.includes(na)||os.push(na)}const Ui=`${Math.round(st)},${Math.round(ht)} → ${Math.round(yt)},${Math.round(dt)}`;let Vi;(Mt==="circle"||Mt==="box")&&os.length>0?Vi=`${Mt==="box"?"Boxed":"Circled"} **${os[0]}**${os.length>1?` (and ${os.slice(1).join(", ")})`:""} (region: ${Ui})`:Mt==="underline"&&os.length>0?Vi=`Underlined **${os[0]}** (${Ui})`:Mt==="arrow"&&os.length>=2?Vi=`Arrow from **${os[0]}** to **${os[os.length-1]}** (${Math.round(Ln.x)},${Math.round(Ln.y)} → ${Math.round(Dt.x)},${Math.round(Dt.y)})`:os.length>0?Vi=`${Mt==="arrow"?"Arrow":"Drawing"} near **${os.join("**, **")}** (region: ${Ui})`:Vi=`Drawing at ${Ui}`,oe.push(Vi)}H&&(H.style.visibility=""),oe.length>0&&(R+=`
**Drawings:**
`,oe.forEach((Me,Be)=>{R+=`${Be+1}. ${Me}
`}))}if((ut.length>0||k&&vn)&&(R+=`
`+e1(ut,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:vn||void 0},Ut.outputDetail)),rt){const B=t1(rt,Ut.outputDetail,{width:window.innerWidth,height:window.innerHeight});B&&(R+=`
`+B)}if(y)try{await navigator.clipboard.writeText(R)}catch{}h==null||h(R),$(!0),Ht(()=>$(!1),2e3),Ut.autoClearAfterCopy&&Ht(()=>cn(),500)},[T,tn,ut,rt,mt,ct,Hn,vn,Tt,Ut.outputDetail,Ys,Ut.autoClearAfterCopy,cn,y,h]),Yt=_.useCallback(async()=>{const w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Tt;let k=r1(T,w,Ut.outputDetail);if(!k&&ut.length===0&&!rt)return;if(k||(k=`## Page Feedback: ${w}
`),ut.length>0&&(k+=`
`+e1(ut,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:mt,wireframePurpose:vn||void 0},Ut.outputDetail)),rt){const B=t1(rt,Ut.outputDetail,{width:window.innerWidth,height:window.innerHeight});B&&(k+=`
`+B)}p&&p(k,T),G("sending"),await new Promise(B=>Ht(B,150));const R=await Qe("submit",{output:k,annotations:T},!0);G(R?"sent":"failed"),Ht(()=>G("idle"),2500),R&&Ut.autoClearAfterCopy&&Ht(()=>cn(),500)},[p,Qe,T,ut,rt,mt,Hn,Tt,Ut.outputDetail,Ys,Ut.autoClearAfterCopy,cn]);_.useEffect(()=>{if(!ws)return;const w=10,k=B=>{const H=B.clientX-ws.x,oe=B.clientY-ws.y,pe=Math.sqrt(H*H+oe*oe);if(!Rs&&pe>w&&io(!0),Rs||pe>w){let Me=ws.toolbarX+H,Be=ws.toolbarY+oe;const Je=20,st=337,ht=44,dt=st-(M?ys==="connected"?297:257:44),ft=Je-dt,wn=window.innerWidth-Je-st;Me=Math.max(ft,Math.min(wn,Me)),Be=Math.max(Je,Math.min(window.innerHeight-ht-Je,Be)),Ws({x:Me,y:Be})}},R=()=>{Rs&&(Fs.current=!0),io(!1),ko(null)};return document.addEventListener("mousemove",k),document.addEventListener("mouseup",R),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",R)}},[ws,Rs,M,ys]);const ss=_.useCallback(w=>{var oe,pe;if(w.target.closest("button")||w.target.closest("[data-agentation-settings-panel]"))return;const k=w.currentTarget.parentElement;if(!k)return;const R=k.getBoundingClientRect(),B=(oe=an==null?void 0:an.x)!=null?oe:R.left,H=(pe=an==null?void 0:an.y)!=null?pe:R.top;ko({x:w.clientX,y:w.clientY,toolbarX:B,toolbarY:H})},[an]);if(_.useEffect(()=>{if(!an)return;const w=()=>{let H=an.x,oe=an.y;const Be=20-(337-(M?ys==="connected"?297:257:44)),Je=window.innerWidth-20-337;H=Math.max(Be,Math.min(Je,H)),oe=Math.max(20,Math.min(window.innerHeight-44-20,oe)),(H!==an.x||oe!==an.y)&&Ws({x:H,y:oe})};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[an,M,ys]),_.useEffect(()=>{const w=k=>{const R=k.target,B=R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable;if(k.key==="Escape"){if(ct){jt?pt(null):Fo();return}if(yn){mn(!1);return}if(kn.length>0){ho([]);return}F||M&&(Gn(),E(!1))}if((k.metaKey||k.ctrlKey)&&k.shiftKey&&(k.key==="f"||k.key==="F")){k.preventDefault(),Gn(),M?hi():E(!0);return}if(!(B||k.metaKey||k.ctrlKey)&&((k.key==="p"||k.key==="P")&&(k.preventDefault(),Gn(),ue()),(k.key==="l"||k.key==="L")&&(k.preventDefault(),Gn(),yn&&mn(!1),Se&&et(!1),F&&Nt(),ct?Fo():Lt(!0)),(k.key==="h"||k.key==="H")&&T.length>0&&(k.preventDefault(),Gn(),N(H=>!H)),(k.key==="c"||k.key==="C")&&(T.length>0||ut.length>0||rt)&&(k.preventDefault(),Gn(),Gs()),(k.key==="x"||k.key==="X")&&(T.length>0||ut.length>0||rt)&&(k.preventDefault(),Gn(),cn(),ut.length>0&&nt([]),rt&&In(null)),k.key==="s"||k.key==="S")){const H=ra(Ut.webhookUrl)||ra(S||"");T.length>0&&H&&fe==="idle"&&(k.preventDefault(),Gn(),Yt())}};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[M,yn,ct,jt,ut,rt,F,T.length,Ut.webhookUrl,S,fe,Yt,ue,Gs,cn,kn]),!at||q)return null;const xs=T.length>0,cs=T.filter(w=>!Yo.has(w.id)&&w.kind!=="placement"&&w.kind!=="rearrange"),ro=cs.length>0,qs=T.filter(w=>Yo.has(w.id)),Ls=w=>{const oe=w.x/100*window.innerWidth,pe=typeof w.y=="string"?parseFloat(w.y):w.y,Me={};window.innerHeight-pe-22-10<80&&(Me.top="auto",Me.bottom="calc(100% + 10px)");const Je=oe-200/2,st=10;if(Je<st){const ht=st-Je;Me.left=`calc(50% + ${ht}px)`}else if(Je+200>window.innerWidth-st){const ht=Je+200-(window.innerWidth-st);Me.left=`calc(50% - ${ht}px)`}return Me};return Bc.createPortal(l.jsxs("div",{ref:ee,style:{display:"contents"},"data-agentation-theme":ks?"dark":"light","data-agentation-accent":Ut.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ge.toolbar}${C?` ${C}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:an?{left:an.x,top:an.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ge.toolbarContainer} ${M?Ge.expanded:Ge.collapsed} ${wi?Ge.entrance:""} ${Q?Ge.hiding:""} ${!Ut.webhooksEnabled&&(ra(Ut.webhookUrl)||ra(S||""))?Ge.serverConnected:""}`,onClick:M?void 0:w=>{if(Fs.current){Fs.current=!1,w.preventDefault();return}E(!0)},onMouseDown:ss,role:M?void 0:"button",tabIndex:M?-1:0,title:M?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ge.toggleContent} ${M?Ge.hidden:Ge.visible}`,children:[l.jsx(jS,{size:24}),ro&&l.jsx("span",{className:`${Ge.badge} ${M?Ge.fadeOut:""} ${wi?Ge.entrance:""}`,children:cs.length})]}),l.jsxs("div",{className:`${Ge.controlsContent} ${M?Ge.visible:Ge.hidden} ${an&&an.y<100?Ge.tooltipBelow:""} ${Ft||Se?Ge.tooltipsHidden:""} ${ti?Ge.tooltipsInSession:""}`,onMouseEnter:wo,onMouseLeave:Ho,children:[l.jsxs("div",{className:`${Ge.buttonWrapper} ${an&&an.x<120?Ge.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Gn(),ue()},"data-active":J,children:l.jsx(NS,{size:24,isPaused:J})}),l.jsxs("span",{className:Ge.buttonTooltip,children:[J?"Resume animations":"Pause animations",l.jsx("span",{className:Ge.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:`${Ge.controlButton} ${ks?"":Ge.light}`,onClick:w=>{w.stopPropagation(),Gn(),yn&&mn(!1),Se&&et(!1),F&&Nt(),ct?Fo():Lt(!0)},"data-active":ct,style:ct&&mt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(PS,{size:21})}),l.jsxs("span",{className:Ge.buttonTooltip,children:[ct?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ge.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Gn(),N(!L)},disabled:!xs||ct,children:l.jsx(AS,{size:24,isOpen:L})}),l.jsxs("span",{className:Ge.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:Ge.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:`${Ge.controlButton} ${Te?Ge.statusShowing:""}`,onClick:w=>{w.stopPropagation(),Gn(),Gs()},disabled:ct&&mt?ut.length===0&&!((Ks=rt==null?void 0:rt.sections)!=null&&Ks.length):!xs&&tn.length===0&&ut.length===0&&!((D=rt==null?void 0:rt.sections)!=null&&D.length),"data-active":Te,children:l.jsx(ES,{size:24,copied:Te,tint:ct&&mt&&(ut.length>0||(X=rt==null?void 0:rt.sections)!=null&&X.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ge.buttonTooltip,children:[ct&&mt?"Copy layout":"Copy feedback",l.jsx("span",{className:Ge.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ge.buttonWrapper} ${Ge.sendButtonWrapper} ${M&&!Ut.webhooksEnabled&&(ra(Ut.webhookUrl)||ra(S||""))?Ge.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ge.controlButton} ${fe==="sent"||fe==="failed"?Ge.statusShowing:""}`,onClick:w=>{w.stopPropagation(),Gn(),Yt()},disabled:!xs||!ra(Ut.webhookUrl)&&!ra(S||"")||fe==="sending","data-no-hover":fe==="sent"||fe==="failed",tabIndex:ra(Ut.webhookUrl)||ra(S||"")?0:-1,children:[l.jsx(TS,{size:24,state:fe}),xs&&fe==="idle"&&l.jsx("span",{className:Ge.buttonBadge,children:T.length})]}),l.jsxs("span",{className:Ge.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ge.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Gn(),cn()},disabled:!xs&&tn.length===0&&ut.length===0&&!((K=rt==null?void 0:rt.sections)!=null&&K.length),"data-danger":!0,children:l.jsx(RS,{size:24})}),l.jsxs("span",{className:Ge.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ge.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ge.buttonWrapper,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Gn(),ct&&Fo(),et(!Se)},children:l.jsx(DS,{size:24})}),g&&ys!=="disconnected"&&l.jsx("span",{className:`${Ge.mcpIndicator} ${Ge[ys]} ${Se?Ge.hidden:""}`,title:ys==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ge.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ge.divider}),l.jsxs("div",{className:`${Ge.buttonWrapper} ${an&&typeof window<"u"&&an.x>window.innerWidth-120?Ge.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ge.controlButton,onClick:w=>{w.stopPropagation(),Gn(),hi()},children:l.jsx(BS,{size:24})}),l.jsxs("span",{className:Ge.buttonTooltip,children:["Exit",l.jsx("span",{className:Ge.shortcut,children:"Esc"})]})]})]}),l.jsx(p6,{visible:ct&&M,activeType:jt,onSelect:w=>{pt(jt===w?null:w)},isDarkMode:ks,sectionCount:(ce=rt==null?void 0:rt.sections.length)!=null?ce:0,onDetectSections:()=>{var pe,Me;const w=j6(),k=(pe=rt==null?void 0:rt.sections)!=null?pe:[],R=new Set(k.map(Be=>Be.selector)),B=w.filter(Be=>!R.has(Be.selector)),H=[...k,...B],oe=[...(Me=rt==null?void 0:rt.originalOrder)!=null?Me:[],...B.map(Be=>Be.id)];In({sections:H,originalOrder:oe,detectedAt:Date.now()})},placementCount:ut.length,onClearPlacements:()=>{Ns(w=>w+1),ei(w=>w+1),Ht(()=>{In({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:mt,onBlankCanvasChange:w=>{const k={sections:[],originalOrder:[],detectedAt:Date.now()};w?(Zo.current={rearrange:rt,placements:ut},In(Is.current.rearrange||k),nt(Is.current.placements),pt(null)):(Is.current={rearrange:rt,placements:ut},In(Zo.current.rearrange||k),nt(Zo.current.placements)),Ot(w)},wireframePurpose:vn,onWireframePurposeChange:rs,Tooltip:Er,onDragStart:(w,k)=>{var ht;k.preventDefault();const R=vt[w];let B=null,H=!1;const oe=k.clientX,pe=k.clientY,Me=k.target.closest("[data-feedback-toolbar]"),Be=(ht=Me==null?void 0:Me.getBoundingClientRect().top)!=null?ht:window.innerHeight,Je=yt=>{const dt=yt.clientX-oe,ft=yt.clientY-pe;if(!H&&(Math.abs(dt)>4||Math.abs(ft)>4)&&(H=!0,B=document.createElement("div"),B.className=`${Oe.dragPreview}${mt?` ${Oe.dragPreviewWireframe}`:""}`,document.body.appendChild(B)),!B)return;const wn=Math.max(0,Be-yt.clientY),Bn=Math.min(1,wn/180),Ln=1-Math.pow(1-Bn,2),Dt=28,qt=20,Mt=Math.min(140,R.width*.18),Pt=Math.min(90,R.height*.18),qn=Dt+(Mt-Dt)*Ln,Tn=qt+(Pt-qt)*Ln;B.style.width=`${qn}px`,B.style.height=`${Tn}px`,B.style.left=`${yt.clientX-qn/2}px`,B.style.top=`${yt.clientY-Tn/2}px`,B.style.opacity=`${.5+.5*Ln}`,B.textContent=Ln>.25?w:""},st=yt=>{if(window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",st),B&&document.body.removeChild(B),H){const dt=R.width,ft=R.height,wn=window.scrollY,Bn=Math.max(0,yt.clientX-dt/2),Ln=Math.max(0,yt.clientY+wn-ft/2),Dt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:w,x:Bn,y:Ln,width:dt,height:ft,scrollY:wn,timestamp:Date.now()};nt(qt=>[...qt,Dt]),pt(null),vs.current=new Set,ui(qt=>qt+1)}};window.addEventListener("mousemove",Je),window.addEventListener("mouseup",st)}}),l.jsx(LC,{settings:Ut,onSettingsChange:w=>oo(k=>({...k,...w})),isDarkMode:ks,onToggleTheme:Ds,isDevMode:Vo,connectionStatus:ys,endpoint:g,isVisible:Ke,toolbarNearBottom:!!an&&an.y<230,settingsPage:_t,onSettingsPageChange:Ie,onHideToolbar:Hi})]})}),(ct||Rt)&&l.jsx("div",{className:`${Oe.blankCanvas} ${hn?Oe.visible:""} ${Xt?Oe.gridActive:""}`,style:{"--canvas-opacity":on},"data-feedback-toolbar":!0}),ct&&mt&&hn&&l.jsxs("div",{className:Oe.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Oe.wireframeOpacityRow,children:[l.jsx("span",{className:Oe.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Oe.wireframeOpacitySlider,min:0,max:1,step:.01,value:on,onChange:w=>Xn(Number(w.target.value))})]}),l.jsxs("div",{className:Oe.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Oe.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Oe.wireframeNoticeDivider}),l.jsx("button",{className:Oe.wireframeStartOver,onClick:()=>{Ns(w=>w+1),In({sections:[],originalOrder:[],detectedAt:Date.now()}),Is.current={rearrange:null,placements:[]},rs(""),td(Tt)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(ct||Rt)&&l.jsx(u6,{placements:ut,onChange:nt,activeComponent:Rt?null:jt,onActiveComponentChange:pt,isDarkMode:ks,exiting:Rt,onInteractionChange:$n,passthrough:!jt,extraSnapRects:rt==null?void 0:rt.sections.map(w=>w.currentRect),deselectSignal:Cs,clearSignal:Jo,wireframe:mt,onSelectionChange:(w,k)=>{vs.current=w,k||(gn.current=new Set,bo(R=>R+1))},onDragMove:(w,k)=>{const R=gn.current;if(!(!R.size||!rt)){if(!Un.current){Un.current=new Map;for(const B of rt.sections)R.has(B.id)&&Un.current.set(B.id,{x:B.currentRect.x,y:B.currentRect.y})}for(const B of rt.sections){if(!R.has(B.id)||!Un.current.get(B.id))continue;const oe=document.querySelector(`[data-rearrange-section="${B.id}"]`);oe&&(oe.style.transform=`translate(${w}px, ${k}px)`)}}},onDragEnd:(w,k,R)=>{const B=gn.current,H=Un.current;if(Un.current=null,!(!B.size||!rt||!H)){for(const oe of B){const pe=document.querySelector(`[data-rearrange-section="${oe}"]`);pe&&(pe.style.transform="")}R&&In(oe=>oe&&{...oe,sections:oe.sections.map(pe=>{const Me=H.get(pe.id);return Me?{...pe,currentRect:{...pe.currentRect,x:Math.max(0,Me.x+w),y:Math.max(0,Me.y+k)}}:pe})})}}}),(ct||Rt)&&rt&&l.jsx(T6,{rearrangeState:rt,onChange:In,isDarkMode:ks,exiting:Rt,blankCanvas:mt,extraSnapRects:ut.map(w=>({x:w.x,y:w.y,width:w.width,height:w.height})),clearSignal:Cn,deselectSignal:_s,onSelectionChange:(w,k)=>{gn.current=w,k||(vs.current=new Set,ui(R=>R+1))},onDragMove:(w,k)=>{const R=vs.current;if(R.size){if(!Un.current){Un.current=new Map;for(const B of ut)R.has(B.id)&&Un.current.set(B.id,{x:B.x,y:B.y})}for(const B of R){const H=document.querySelector(`[data-design-placement="${B}"]`);H&&(H.style.transform=`translate(${w}px, ${k}px)`)}}},onDragEnd:(w,k,R)=>{const B=vs.current,H=Un.current;if(Un.current=null,!(!B.size||!H)){for(const oe of B){const pe=document.querySelector(`[data-design-placement="${oe}"]`);pe&&(pe.style.transform="")}R&&nt(oe=>oe.map(pe=>{const Me=H.get(pe.id);return Me?{...pe,x:Math.max(0,Me.x+w),y:Math.max(0,Me.y+k)}:pe}))}}}),l.jsx("canvas",{ref:Us,className:`${Ge.drawCanvas} ${yn?Ge.active:""}`,style:{opacity:Ci?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ge.markersLayer,"data-feedback-toolbar":!0,children:[le&&cs.filter(w=>!w.isFixed).map((w,k,R)=>l.jsx(l1,{annotation:w,globalIndex:cs.findIndex(B=>B.id===w.id),layerIndex:k,layerSize:R.length,isExiting:Ne,isClearing:Ae,isAnimated:jo.has(w.id),isHovered:!Ne&&Ye===w.id,isDeleting:zt===w.id,isEditingAny:!!se,renumberFrom:wt,markerClickBehavior:Ut.markerClickBehavior,tooltipStyle:Ls(w),onHoverEnter:B=>!Ne&&B.id!==Bo.current&&Gt(B),onHoverLeave:()=>Gt(null),onClick:B=>Ut.markerClickBehavior==="delete"?Zt(B.id):Pe(B),onContextMenu:Pe},w.id)),le&&!Ne&&qs.filter(w=>!w.isFixed).map(w=>l.jsx(c1,{annotation:w},w.id))]}),l.jsxs("div",{className:Ge.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[le&&cs.filter(w=>w.isFixed).map((w,k,R)=>l.jsx(l1,{annotation:w,globalIndex:cs.findIndex(B=>B.id===w.id),layerIndex:k,layerSize:R.length,isExiting:Ne,isClearing:Ae,isAnimated:jo.has(w.id),isHovered:!Ne&&Ye===w.id,isDeleting:zt===w.id,isEditingAny:!!se,renumberFrom:wt,markerClickBehavior:Ut.markerClickBehavior,tooltipStyle:Ls(w),onHoverEnter:B=>!Ne&&B.id!==Bo.current&&Gt(B),onHoverLeave:()=>Gt(null),onClick:B=>Ut.markerClickBehavior==="delete"?Zt(B.id):Pe(B),onContextMenu:Pe},w.id)),le&&!Ne&&qs.filter(w=>w.isFixed).map(w=>l.jsx(c1,{annotation:w,fixed:!0},w.id))]}),M&&l.jsxs("div",{className:Ge.overlay,"data-feedback-toolbar":!0,style:F||se?{zIndex:99999}:void 0,children:[(te==null?void 0:te.rect)&&!F&&!bt&&!Bs&&l.jsx("div",{className:`${Ge.hoverHighlight} ${Ge.enter}`,style:{left:te.rect.left,top:te.rect.top,width:te.rect.width,height:te.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),kn.filter(w=>document.contains(w.element)).map((w,k)=>{const R=w.element.getBoundingClientRect(),B=kn.length>1;return l.jsx("div",{className:B?Ge.multiSelectOutline:Ge.singleSelectOutline,style:{position:"fixed",left:R.left,top:R.top,width:R.width,height:R.height,...B?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},k)}),Ye&&!F&&(()=>{var H;const w=T.find(oe=>oe.id===Ye);if(!(w!=null&&w.boundingBox))return null;if((H=w.elementBoundingBoxes)!=null&&H.length)return Ze.length>0?Ze.filter(oe=>document.contains(oe)).map((oe,pe)=>{const Me=oe.getBoundingClientRect();return l.jsx("div",{className:`${Ge.multiSelectOutline} ${Ge.enter}`,style:{left:Me.left,top:Me.top,width:Me.width,height:Me.height}},`hover-outline-live-${pe}`)}):w.elementBoundingBoxes.map((oe,pe)=>l.jsx("div",{className:`${Ge.multiSelectOutline} ${Ge.enter}`,style:{left:oe.x,top:oe.y-it,width:oe.width,height:oe.height}},`hover-outline-${pe}`));const k=Bt&&document.contains(Bt)?Bt.getBoundingClientRect():null,R=k?{x:k.left,y:k.top,width:k.width,height:k.height}:{x:w.boundingBox.x,y:w.isFixed?w.boundingBox.y:w.boundingBox.y-it,width:w.boundingBox.width,height:w.boundingBox.height},B=w.isMultiSelect;return l.jsx("div",{className:`${B?Ge.multiSelectOutline:Ge.singleSelectOutline} ${Ge.enter}`,style:{left:R.x,top:R.y,width:R.width,height:R.height,...B?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),te&&!F&&!bt&&!Bs&&l.jsxs("div",{className:`${Ge.hoverTooltip} ${Ge.enter}`,style:{left:Math.max(8,Math.min(I.x,window.innerWidth-100)),top:Math.max(I.y-(te.reactComponents?48:32),8)},children:[te.reactComponents&&l.jsx("div",{className:Ge.hoverReactPath,children:te.reactComponents}),l.jsx("div",{className:Ge.hoverElementName,children:te.elementName})]}),F&&l.jsxs(l.Fragment,{children:[(W=F.multiSelectElements)!=null&&W.length?F.multiSelectElements.filter(w=>document.contains(w)).map((w,k)=>{const R=w.getBoundingClientRect();return l.jsx("div",{className:`${Ge.multiSelectOutline} ${Vn?Ge.exit:Ge.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`pending-multi-${k}`)}):F.targetElement&&document.contains(F.targetElement)?(()=>{const w=F.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ge.singleSelectOutline} ${Vn?Ge.exit:Ge.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():F.boundingBox&&l.jsx("div",{className:`${F.isMultiSelect?Ge.multiSelectOutline:Ge.singleSelectOutline} ${Vn?Ge.exit:Ge.enter}`,style:{left:F.boundingBox.x,top:F.boundingBox.y-it,width:F.boundingBox.width,height:F.boundingBox.height,...F.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const w=F.x,k=F.isFixed?F.y:F.y-it;return l.jsxs(l.Fragment,{children:[l.jsx(kC,{x:w,y:k,isMultiSelect:F.isMultiSelect,isExiting:Vn}),l.jsx(jd,{ref:Ii,element:F.element,selectedText:F.selectedText,computedStyles:F.computedStylesObj,placeholder:F.element==="Area selection"?"What should change in this area?":F.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Vt,onCancel:Nt,isExiting:Vn,lightMode:!ks,accentColor:F.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,w/100*window.innerWidth)),...k>window.innerHeight-290?{bottom:window.innerHeight-k+20}:{top:k+20}}})]})})()]}),se&&l.jsxs(l.Fragment,{children:[(ae=se.elementBoundingBoxes)!=null&&ae.length?Fe.length>0?Fe.filter(w=>document.contains(w)).map((w,k)=>{const R=w.getBoundingClientRect();return l.jsx("div",{className:`${Ge.multiSelectOutline} ${Ge.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`edit-multi-live-${k}`)}):se.elementBoundingBoxes.map((w,k)=>l.jsx("div",{className:`${Ge.multiSelectOutline} ${Ge.enter}`,style:{left:w.x,top:w.y-it,width:w.width,height:w.height}},`edit-multi-${k}`)):(()=>{const w=Xe&&document.contains(Xe)?Xe.getBoundingClientRect():null,k=w?{x:w.left,y:w.top,width:w.width,height:w.height}:se.boundingBox?{x:se.boundingBox.x,y:se.isFixed?se.boundingBox.y:se.boundingBox.y-it,width:se.boundingBox.width,height:se.boundingBox.height}:null;return k?l.jsx("div",{className:`${se.isMultiSelect?Ge.multiSelectOutline:Ge.singleSelectOutline} ${Ge.enter}`,style:{left:k.x,top:k.y,width:k.width,height:k.height,...se.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:Pi,element:se.element,selectedText:se.selectedText,computedStyles:w6(se.computedStyles),placeholder:"Edit your feedback...",initialValue:se.comment,submitLabel:"Save",onSubmit:rn,onCancel:xn,onDelete:()=>Zt(se.id),isExiting:Xs,lightMode:!ks,accentColor:se.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const w=se.isFixed?se.y:se.y-it;return{left:Math.max(160,Math.min(window.innerWidth-160,se.x/100*window.innerWidth)),...w>window.innerHeight-290?{bottom:window.innerHeight-w+20}:{top:w+20}}})()})]}),Bs&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Ss,className:Ge.dragSelection}),l.jsx("div",{ref:Ro,className:Ge.highlightsContainer})]})]})]}),document.body)}const yp=_.createContext({});function Lc(t){const n=_.useRef(null);return n.current===null&&(n.current=t()),n.current}const $C=typeof window<"u",xp=$C?_.useLayoutEffect:_.useEffect,zd=_.createContext(null);function bp(t,n){t.indexOf(n)===-1&&t.push(n)}function yl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const fa=(t,n,i)=>i>n?n:i<t?t:i;let vp=()=>{};const ar={},pb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function _b(t){return typeof t=="object"&&t!==null}const gb=t=>/^0[^.\s]+$/u.test(t);function yb(t){let n;return()=>(n===void 0&&(n=t()),n)}const zi=t=>t,IC=(t,n)=>i=>n(t(i)),Oc=(...t)=>t.reduce(IC),xl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class wp{constructor(){this.subscriptions=[]}add(n){return bp(this.subscriptions,n),()=>yl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ci=t=>t*1e3,Oi=t=>t/1e3;function xb(t,n){return n?t*(1e3/n):0}const PC=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},bb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,HC=1e-7,UC=12;function VC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=bb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>HC&&++h<UC);return d}function zc(t,n,i,a){if(t===n&&i===a)return zi;const c=u=>VC(u,0,1,t,i);return u=>u===0||u===1?u:bb(c(u),n,a)}const vb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,wb=t=>n=>1-t(1-n),Sb=zc(.33,1.53,.69,.99),Sp=wb(Sb),Cb=vb(Sp),kb=t=>t>=1?1:(t*=2)<1?.5*Sp(t):.5*(2-Math.pow(2,-10*(t-1))),Cp=t=>1-Math.sin(Math.acos(t)),jb=wb(Cp),Mb=vb(Cp),YC=zc(.42,0,1,1),WC=zc(0,0,.58,1),Eb=zc(.42,0,.58,1),Tb=t=>Array.isArray(t)&&typeof t[0]!="number";function Ab(t,n){return Tb(t)?t[PC(0,t.length,n)]:t}const Nb=t=>Array.isArray(t)&&typeof t[0]=="number",FC={linear:zi,easeIn:YC,easeInOut:Eb,easeOut:WC,circIn:Cp,circInOut:Mb,circOut:jb,backIn:Sp,backInOut:Cb,backOut:Sb,anticipate:kb},XC=t=>typeof t=="string",h1=t=>{if(Nb(t)){vp(t.length===4);const[n,i,a,c]=t;return zc(n,i,a,c)}else if(XC(t))return FC[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function GC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),t()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const C=b&&c?i:a;return x&&d.add(g),C.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const qC=40;function Db(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((L,N)=>(L[N]=GC(u),L),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:S,postRender:C}=d,M=()=>{const L=ar.useManualTiming,N=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(N-c.timestamp,qC),1)),c.timestamp=N,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),S.process(c),C.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(M))},E=()=>{i=!0,a=!0,c.isProcessing||t(M)};return{schedule:id.reduce((L,N)=>{const q=d[N];return L[N]=(Y,Q=!1,V=!1)=>(i||E(),q.schedule(Y,Q,V)),L},{}),cancel:L=>{for(let N=0;N<id.length;N++)d[id[N]].cancel(L)},state:c,steps:d}}const{schedule:ts,cancel:Na,state:Do,steps:um}=Db(typeof requestAnimationFrame<"u"?requestAnimationFrame:zi,!0);let pd;function KC(){pd=void 0}const qo={now:()=>(pd===void 0&&qo.set(Do.isProcessing||ar.useManualTiming?Do.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(KC)}},Rb=t=>n=>typeof n=="string"&&n.startsWith(t),Bb=Rb("--"),QC=Rb("var(--"),kp=t=>QC(t)?ZC.test(t.split("/*")[0].trim()):!1,ZC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function m1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const wl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...wl,transform:t=>fa(0,1,t)},ad={...wl,default:1},wc=t=>Math.round(t*1e5)/1e5,jp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function JC(t){return t==null}const e3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mp=(t,n)=>i=>!!(typeof i=="string"&&e3.test(i)&&i.startsWith(t)||n&&!JC(i)&&Object.prototype.hasOwnProperty.call(i,n)),Lb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(jp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},t3=t=>fa(0,255,t),dm={...wl,transform:t=>Math.round(t3(t))},Tr={test:Mp("rgb","red"),parse:Lb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+dm.transform(t)+", "+dm.transform(n)+", "+dm.transform(i)+", "+wc(Tc.transform(a))+")"};function n3(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const $m={test:Mp("#"),parse:n3,transform:Tr.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),nr=$c("deg"),da=$c("%"),kt=$c("px"),s3=$c("vh"),o3=$c("vw"),p1={...da,parse:t=>da.parse(t)/100,transform:t=>da.transform(t*100)},hl={test:Mp("hsl","hue"),parse:Lb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+da.transform(wc(n))+", "+da.transform(wc(i))+", "+wc(Tc.transform(a))+")"},no={test:t=>Tr.test(t)||$m.test(t)||hl.test(t),parse:t=>Tr.test(t)?Tr.parse(t):hl.test(t)?hl.parse(t):$m.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Tr.transform(t):hl.transform(t),getAnimatableNone:t=>{const n=no.parse(t);return n.alpha=0,no.transform(n)}},i3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function a3(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(jp))==null?void 0:n.length)||0)+(((i=t.match(i3))==null?void 0:i.length)||0)>0}const Ob="number",zb="color",r3="var",l3="var(",_1="${}",c3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(c3,p=>(no.test(p)?(a.color.push(u),c.push(zb),i.push(no.parse(p))):p.startsWith(l3)?(a.var.push(u),c.push(r3),i.push(p)):(a.number.push(u),c.push(Ob),i.push(parseFloat(p))),++u,_1)).split(_1);return{values:i,split:h,indexes:a,types:c}}function u3(t){return bl(t).values}function $b({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Ob?c+=wc(a[u]):d===zb?c+=no.transform(a[u]):c+=a[u]}return c}}function d3(t){return $b(bl(t))}const f3=t=>typeof t=="number"?0:no.test(t)?no.getAnimatableNone(t):t,h3=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:f3(t);function m3(t){const n=bl(t);return $b(n)(n.values.map((a,c)=>h3(a,n.split[c])))}const Ji={test:a3,parse:u3,createTransformer:d3,getAnimatableNone:m3};function fm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function p3({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=fm(p,h,t+1/3),u=fm(p,h,t),d=fm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const ds=(t,n,i)=>t+(n-t)*i,hm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},_3=[$m,Tr,hl],g3=t=>_3.find(n=>n.test(t));function g1(t){const n=g3(t);if(!n)return!1;let i=n.parse(t);return n===hl&&(i=p3(i)),i}const y1=(t,n)=>{const i=g1(t),a=g1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=hm(i.red,a.red,u),c.green=hm(i.green,a.green,u),c.blue=hm(i.blue,a.blue,u),c.alpha=ds(i.alpha,a.alpha,u),Tr.transform(c))},Im=new Set(["none","hidden"]);function y3(t,n){return Im.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function x3(t,n){return i=>ds(t,n,i)}function Ep(t){return typeof t=="number"?x3:typeof t=="string"?kp(t)?Td:no.test(t)?y1:w3:Array.isArray(t)?Ib:typeof t=="object"?no.test(t)?y1:b3:Td}function Ib(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Ep(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function b3(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Ep(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function v3(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const w3=(t,n)=>{const i=Ji.createTransformer(n),a=bl(t),c=bl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Im.has(t)&&!c.values.length||Im.has(n)&&!a.values.length?y3(t,n):Oc(Ib(v3(a,c),c.values),i):Td(t,n)};function Pb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?ds(t,n,i):Ep(t)(t,n)}const S3=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>ts.update(n,i),stop:()=>Na(n),now:()=>Do.isProcessing?Do.timestamp:qo.now()}},Hb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function Tp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function Ub(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Tp(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Oi(c)}}const As={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Pm(t,n){return t*Math.sqrt(1-n*n)}const C3=12;function k3(t,n,i){let a=i;for(let c=1;c<C3;c++)a=a-t(a)/n(a);return a}const mm=.001;function j3({duration:t=As.duration,bounce:n=As.bounce,velocity:i=As.velocity,mass:a=As.mass}){let c,u,d=1-n;d=fa(As.minDamping,As.maxDamping,d),t=fa(As.minDuration,As.maxDuration,Oi(t)),d<1?(c=y=>{const g=y*d,x=g*t,b=g-i,S=Pm(y,d),C=Math.exp(-x);return mm-b/S*C},u=y=>{const x=y*d*t,b=x*i+i,S=Math.pow(d,2)*Math.pow(y,2)*t,C=Math.exp(-x),M=Pm(Math.pow(y,2),d);return(-c(y)+mm>0?-1:1)*((b-S)*C)/M}):(c=y=>{const g=Math.exp(-y*t),x=(y-i)*t+1;return-mm+g*x},u=y=>{const g=Math.exp(-y*t),x=(i-y)*(t*t);return g*x});const h=5/t,p=k3(c,u,h);if(t=ci(t),isNaN(p))return{stiffness:As.stiffness,damping:As.damping,duration:t};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:t}}}const M3=["duration","bounce"],E3=["stiffness","damping","mass"];function x1(t,n){return n.some(i=>t[i]!==void 0)}function T3(t){let n={velocity:As.velocity,stiffness:As.stiffness,damping:As.damping,mass:As.mass,isResolvedFromDuration:!1,...t};if(!x1(t,E3)&&x1(t,M3))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*fa(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:As.mass,stiffness:c,damping:u}}else{const i=j3({...t,velocity:0});n={...n,...i,mass:As.mass},n.isResolvedFromDuration=!0}return n}function Ac(t=As.visualDuration,n=As.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:S}=T3({...i,velocity:-Oi(i.velocity||0)}),C=b||0,M=y/(2*Math.sqrt(p*g)),E=d-u,T=Oi(Math.sqrt(p/g)),O=Math.abs(E)<5;a||(a=O?As.restSpeed.granular:As.restSpeed.default),c||(c=O?As.restDelta.granular:As.restDelta.default);let L,N,q,Y,Q,V;if(M<1)q=Pm(T,M),Y=(C+M*T*E)/q,L=le=>{const re=Math.exp(-M*T*le);return d-re*(Y*Math.sin(q*le)+E*Math.cos(q*le))},Q=M*T*Y+E*q,V=M*T*E-Y*q,N=le=>Math.exp(-M*T*le)*(Q*Math.sin(q*le)+V*Math.cos(q*le));else if(M===1){L=re=>d-Math.exp(-T*re)*(E+(C+T*E)*re);const le=C+T*E;N=re=>Math.exp(-T*re)*(T*le*re-C)}else{const le=T*Math.sqrt(M*M-1);L=te=>{const he=Math.exp(-M*T*te),I=Math.min(le*te,300);return d-he*((C+M*T*E)*Math.sinh(I)+le*E*Math.cosh(I))/le};const re=(C+M*T*E)/le,Ne=M*T*re-E*le,Ve=M*T*E-re*le;N=te=>{const he=Math.exp(-M*T*te),I=Math.min(le*te,300);return he*(Ne*Math.sinh(I)+Ve*Math.cosh(I))}}const ee={calculatedDuration:S&&x||null,velocity:le=>ci(N(le)),next:le=>{if(!S&&M<1){const Ne=Math.exp(-M*T*le),Ve=Math.sin(q*le),te=Math.cos(q*le),he=d-Ne*(Y*Ve+E*te),I=ci(Ne*(Q*Ve+V*te));return h.done=Math.abs(I)<=a&&Math.abs(d-he)<=c,h.value=h.done?d:he,h}const re=L(le);if(S)h.done=le>=x;else{const Ne=ci(N(le));h.done=Math.abs(Ne)<=a&&Math.abs(d-re)<=c}return h.value=h.done?d:re,h},toString:()=>{const le=Math.min(Tp(ee),Ad),re=Hb(Ne=>ee.next(le*Ne).value,le,30);return le+"ms "+re},toTransition:()=>{}};return ee}Ac.applyToOptions=t=>{const n=Ub(t,100,Ac);return t.ease=n.ease,t.duration=ci(n.duration),t.type="keyframes",t};const A3=5;function Vb(t,n,i){const a=Math.max(n-A3,0);return xb(i-t(a),n-a)}function Hm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=t[0],b={done:!1,value:x},S=V=>h!==void 0&&V<h||p!==void 0&&V>p,C=V=>h===void 0?p:p===void 0||Math.abs(h-V)<Math.abs(p-V)?h:p;let M=i*n;const E=x+M,T=d===void 0?E:d(E);T!==E&&(M=T-x);const O=V=>-M*Math.exp(-V/a),L=V=>T+O(V),N=V=>{const ee=O(V),le=L(V);b.done=Math.abs(ee)<=y,b.value=b.done?T:le};let q,Y;const Q=V=>{S(b.value)&&(q=V,Y=Ac({keyframes:[b.value,C(b.value)],velocity:Vb(L,V,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return Q(0),{calculatedDuration:null,next:V=>{let ee=!1;return!Y&&q===void 0&&(ee=!0,N(V),Q(V)),q!==void 0&&V>=q?Y.next(V-q):(!ee&&N(V),b)}}}function N3(t,n,i){const a=[],c=i||ar.mix||Pb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||zi:n;h=Oc(p,h)}a.push(h)}return a}function Yb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(vp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=N3(n,a,c),p=h.length,y=g=>{if(d&&g<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const b=xl(t[x],t[x+1],g);return h[x](b)};return i?g=>y(fa(t[0],t[u-1],g)):y}function Wb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=xl(0,n,a);t.push(ds(i,1,c))}}function Fb(t){const n=[0];return Wb(n,t.length-1),n}function D3(t,n){return t.map(i=>i*n)}function R3(t,n){return t.map(()=>n||Eb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=Tb(a)?a.map(h1):h1(a),u={done:!1,value:n[0]},d=D3(i&&i.length===n.length?i:Fb(n),t),h=Yb(d,n,{ease:Array.isArray(c)?c:R3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const B3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(B3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const L3={decay:Hm,inertia:Hm,tween:Sc,keyframes:Sc,spring:Ac};function Xb(t){typeof t.type=="string"&&(t.type=L3[t.type])}class Ap{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const O3=t=>t/100;class Nd extends Ap{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==qo.now()&&this.tick(qo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Xb(n);const{type:i=Sc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Sc;p!==Sc&&typeof h[0]!="number"&&(this.mixKeyframes=Oc(O3,Pb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Tp(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:S,type:C,onUpdate:M,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const T=this.currentTime-y*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?T<0:T>c;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,N=a;if(x){const V=Math.min(this.currentTime,c)/h;let ee=Math.floor(V),le=V%1;!le&&V>=1&&(le=1),le===1&&ee--,ee=Math.min(ee,x+1),!!(ee%2)&&(b==="reverse"?(le=1-le,S&&(le-=S/h)):b==="mirror"&&(N=d)),L=fa(0,1,le)*h}let q;O?(this.delayState.value=g[0],q=this.delayState):q=N.next(L),u&&!O&&(q.value=u(q.value));let{done:Y}=q;!O&&p!==null&&(Y=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return Q&&C!==Hm&&(q.value=$d(g,this.options,E,this.speed)),M&&M(q.value),Q&&this.finish(),q}then(n,i){return this.finished.then(n,i)}get duration(){return Oi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(this.currentTime)}set time(n){n=ci(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Vb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(qo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Oi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=S3,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function z3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Ar=t=>t*180/Math.PI,Um=t=>{const n=Ar(Math.atan2(t[1],t[0]));return Vm(n)},$3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Um,rotateZ:Um,skewX:t=>Ar(Math.atan(t[1])),skewY:t=>Ar(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Vm=t=>(t=t%360,t<0&&(t+=360),t),b1=Um,v1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),w1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),I3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:v1,scaleY:w1,scale:t=>(v1(t)+w1(t))/2,rotateX:t=>Vm(Ar(Math.atan2(t[6],t[5]))),rotateY:t=>Vm(Ar(Math.atan2(-t[2],t[0]))),rotateZ:b1,rotate:b1,skewX:t=>Ar(Math.atan(t[4])),skewY:t=>Ar(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ym(t){return t.includes("scale")?1:0}function Wm(t,n){if(!t||t==="none")return Ym(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=I3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=$3,c=h}if(!c)return Ym(n);const u=a[n],d=c[1].split(",").map(H3);return typeof u=="function"?u(d):d[u]}const P3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Wm(i,n)};function H3(t){return parseFloat(t.trim())}const Sl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Cl=new Set(Sl),S1=t=>t===wl||t===kt,U3=new Set(["x","y","z"]),V3=Sl.filter(t=>!U3.has(t));function Y3(t){const n=[];return V3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const ir={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Wm(n,"x"),y:(t,{transform:n})=>Wm(n,"y")};ir.translateX=ir.x;ir.translateY=ir.y;const Nr=new Set;let Fm=!1,Xm=!1,Gm=!1;function Gb(){if(Xm){const t=Array.from(Nr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=Y3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Xm=!1,Fm=!1,Nr.forEach(t=>t.complete(Gm)),Nr.clear()}function qb(){Nr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Xm=!0)})}function W3(){Gm=!0,qb(),Gb(),Gm=!1}class Np{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Nr.add(this),Fm||(Fm=!0,ts.read(qb),ts.resolveKeyframes(Gb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}z3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Nr.delete(this)}cancel(){this.state==="scheduled"&&(Nr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const F3=t=>t.startsWith("--");function Kb(t,n,i){F3(n)?t.style.setProperty(n,i):t.style[n]=i}const X3={};function Qb(t,n){const i=yb(t);return()=>{var a;return(a=X3[n])!=null?a:i()}}const G3=Qb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Zb=Qb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,C1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gc([0,.65,.55,1]),circOut:gc([.55,0,1,.45]),backIn:gc([.31,.01,.66,-.59]),backOut:gc([.33,1.53,.69,.99])};function Jb(t,n){if(t)return typeof t=="function"?Zb()?Hb(t,n):"ease-out":Nb(t)?gc(t):Array.isArray(t)?t.map(i=>Jb(i,n)||C1.easeOut):C1[t]}function q3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=Jb(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),t.animate(g,b)}function Dp(t){return typeof t=="function"&&"applyToOptions"in t}function K3({type:t,...n}){var i,a;return Dp(t)&&Zb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class e5 extends Ap{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,vp(typeof n.type!="string");const y=K3(n);this.animation=q3(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Kb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Oi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Oi(n)}get time(){return Oi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ci(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&G3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),zi):c(this)}}const t5={anticipate:kb,backInOut:Cb,circInOut:Mb};function Q3(t){return t in t5}function Z3(t){typeof t.ease=="string"&&Q3(t.ease)&&(t.ease=t5[t.ease])}const pm=10;class J3 extends e5{constructor(n){Z3(n),Xb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Nd({...d,autoplay:!1}),p=Math.max(pm,qo.now()-this.startTime),y=fa(0,pm,p-pm),g=h.sample(p).value,{name:x}=this.options;u&&x&&Kb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const k1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ji.test(t)||t==="0")&&!t.startsWith("url("));function ek(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function tk(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=k1(c,n),h=k1(u,n);return!d||!h?!1:ek(t)||(i==="spring"||Dp(i))&&a}function qm(t){t.duration=0,t.type="keyframes"}const n5=new Set(["opacity","clipPath","filter","transform"]),nk=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function sk(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&nk.test(t[n]))return!0;return!1}const ok=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),ik=yb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ak(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return ik()&&i&&(n5.has(i)||ok.has(i)&&sk(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const rk=40;class lk extends Ap{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var C;super(),this.stop=()=>{var M,E;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=qo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},S=(g==null?void 0:g.KeyframeResolver)||Np;this.keyframeResolver=new S(h,(M,E,T)=>this.onKeyframesResolved(M,E,b,!T),p,y,g),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(n,i,a,c){var T,O;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=qo.now();let x=!0;tk(n,u,d,h)||(x=!1,(ar.instantAnimations||!p)&&(g==null||g($d(n,a,i))),n[0]=n[n.length-1],qm(a),a.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>rk?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},C=x&&!y&&ak(S),M=(O=(T=S.motionValue)==null?void 0:T.owner)==null?void 0:O.current;let E;if(C)try{E=new J3({...S,element:M})}catch{E=new Nd(S)}else E=new Nd(S);E.finished.then(()=>{this.notifyFinished()}).catch(zi),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),W3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class ck{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return j1(this.animations,"duration")}get iterationDuration(){return j1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function j1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class uk extends ck{then(n,i){return this.finished.finally(n).then(()=>{})}}function s5(t,n,i,a=0,c=1){const u=Array.from(t).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const dk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fk(t){const n=dk.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function o5(t,n,i=1){const[a,c]=fk(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return pb(d)?parseFloat(d):d}return kp(c)?o5(c,n,i+1):c}const hk={type:"spring",stiffness:500,damping:25,restSpeed:10},mk=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),pk={type:"keyframes",duration:.8},_k={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},gk=(t,{keyframes:n})=>n.length>2?pk:Cl.has(t)?t.startsWith("scale")?mk(n[1]):hk:_k;function i5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Rp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?i5(i,t):i}const yk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function xk(t){for(const n in t)if(!yk.has(n))return!0;return!1}const Bp=(t,n,i,a={},c,u)=>d=>{const h=Rp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-ci(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};xk(h)||Object.assign(g,gk(t,g)),g.duration&&(g.duration=ci(g.duration)),g.repeatDelay&&(g.repeatDelay=ci(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(qm(g),g.delay===0&&(x=!0)),(ar.instantAnimations||ar.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,qm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(g.keyframes,h);if(b!==void 0){ts.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Nd(g):new lk(g)};function M1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Lp(t,n,i,a){if(typeof n=="function"){const[c,u]=M1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=M1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Dr(t,n,i){const a=t.getProps();return Lp(a,n,i!==void 0?i:a.custom,t)}const a5=new Set(["width","height","top","left","right","bottom",...Sl]),E1=30,bk=t=>!isNaN(parseFloat(t)),Cc={current:void 0};class vk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=qo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=qo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=bk(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new wp);const a=this.events[n].add(i);return n==="change"?()=>{a(),ts.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Cc.current&&Cc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=qo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>E1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,E1);return xb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(t,n){return new vk(t,n)}const Km=t=>Array.isArray(t);function wk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,rr(i))}function Sk(t){return Km(t)?t[t.length-1]||0:t}function Ck(t,n){const i=Dr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=Sk(u[d]);wk(t,d,h)}}const uo=t=>!!(t&&t.getVelocity);function kk(t){return!!(uo(t)&&t.add)}function Qm(t,n){const i=t.getValue("willChange");if(kk(i))return i.add(n);if(!i&&ar.WillChange){const a=new ar.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Op(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const jk="framerAppearId",r5="data-"+Op(jk);function l5(t){return t.props[r5]}function Mk({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function zp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?i5(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const S in h){const C=t.getValue(S,(b=t.latestValues[S])!=null?b:null),M=h[S];if(M===void 0||x&&Mk(x,S))continue;const E={delay:i,...Rp(u||{},S)},T=C.get();if(T!==void 0&&!C.isAnimating()&&!Array.isArray(M)&&M===T&&!E.velocity){ts.update(()=>C.set(M));continue}let O=!1;if(window.MotionHandoffAnimation){const q=l5(t);if(q){const Y=window.MotionHandoffAnimation(q,S,ts);Y!==null&&(E.startTime=Y,O=!0)}}Qm(t,S);const L=y!=null?y:t.shouldReduceMotion;C.start(Bp(S,C,M,L&&a5.has(S)?{type:!1}:E,t,O));const N=C.animation;N&&g.push(N)}if(d){const S=()=>ts.update(()=>{d&&Ck(t,d)});g.length?Promise.all(g).then(S):S()}return g}function Zm(t,n,i={}){var p;const a=Dr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(zp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return Ek(t,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function Ek(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Zm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+s5(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function Tk(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Zm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Zm(t,n,i);else{const c=typeof n=="function"?Dr(t,n,i.custom):n;a=Promise.all(zp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const Ak={test:t=>t==="auto",parse:t=>t},c5=t=>n=>n.test(t),u5=[wl,kt,da,nr,o3,s3,Ak],T1=t=>u5.find(c5(t));function Nk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||gb(t):!0}const Dk=new Set(["brightness","contrast","saturate","opacity"]);function Rk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(jp)||[];if(!a)return t;const c=i.replace(a,"");let u=Dk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const Bk=/\b([a-z-]*)\(.*?\)/gu,Jm={...Ji,getAnimatableNone:t=>{const n=t.match(Bk);return n?n.map(Rk).join(" "):t}},ep={...Ji,getAnimatableNone:t=>{const n=Ji.parse(t);return Ji.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},A1={...wl,transform:Math.round},Lk={rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:nr,skewX:nr,skewY:nr,distance:kt,translateX:kt,translateY:kt,translateZ:kt,x:kt,y:kt,z:kt,perspective:kt,transformPerspective:kt,opacity:Tc,originX:p1,originY:p1,originZ:kt},$p={borderWidth:kt,borderTopWidth:kt,borderRightWidth:kt,borderBottomWidth:kt,borderLeftWidth:kt,borderRadius:kt,borderTopLeftRadius:kt,borderTopRightRadius:kt,borderBottomRightRadius:kt,borderBottomLeftRadius:kt,width:kt,maxWidth:kt,height:kt,maxHeight:kt,top:kt,right:kt,bottom:kt,left:kt,inset:kt,insetBlock:kt,insetBlockStart:kt,insetBlockEnd:kt,insetInline:kt,insetInlineStart:kt,insetInlineEnd:kt,padding:kt,paddingTop:kt,paddingRight:kt,paddingBottom:kt,paddingLeft:kt,paddingBlock:kt,paddingBlockStart:kt,paddingBlockEnd:kt,paddingInline:kt,paddingInlineStart:kt,paddingInlineEnd:kt,margin:kt,marginTop:kt,marginRight:kt,marginBottom:kt,marginLeft:kt,marginBlock:kt,marginBlockStart:kt,marginBlockEnd:kt,marginInline:kt,marginInlineStart:kt,marginInlineEnd:kt,fontSize:kt,backgroundPositionX:kt,backgroundPositionY:kt,...Lk,zIndex:A1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:A1},Ok={...$p,color:no,backgroundColor:no,outlineColor:no,fill:no,stroke:no,borderColor:no,borderTopColor:no,borderRightColor:no,borderBottomColor:no,borderLeftColor:no,filter:Jm,WebkitFilter:Jm,mask:ep,WebkitMask:ep},d5=t=>Ok[t],zk=new Set([Jm,ep]);function f5(t,n){let i=d5(t);return zk.has(i)||(i=Ji),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const $k=new Set(["auto","none","0"]);function Ik(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!$k.has(u)&&bl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=f5(i,c)}class Pk extends Np{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),kp(x))){const b=o5(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!a5.has(a)||n.length!==2)return;const[c,u]=n,d=T1(c),h=T1(u),p=m1(c),y=m1(u);if(p!==y&&ir[a]){this.needsMeasurement=!0;return}if(d!==h)if(S1(d)&&S1(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else ir[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||Nk(n[c]))&&a.push(c);a.length&&Ik(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ir[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=ir[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Ip(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const h5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return _b(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Pp}=Db(queueMicrotask,!1),Ki={x:!1,y:!1};function m5(){return Ki.x||Ki.y}function Hk(t){return t==="x"||t==="y"?Ki[t]?null:(Ki[t]=!0,()=>{Ki[t]=!1}):Ki.x||Ki.y?null:(Ki.x=Ki.y=!0,()=>{Ki.x=Ki.y=!1})}function p5(t,n){const i=Ip(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function Uk(t){return!(t.pointerType==="touch"||m5())}function Vk(t,n,i={}){const[a,c,u]=p5(t,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",C)},x=E=>{y&&(y(E),y=void 0),g()},b=E=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(E))},S=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},C=E=>{if(E.pointerType!=="touch"){if(h){p=!0;return}x(E)}},M=E=>{if(!Uk(E))return;p=!1;const T=n(d,E);typeof T=="function"&&(y=T,d.addEventListener("pointerleave",C,c))};d.addEventListener("pointerenter",M,c),d.addEventListener("pointerdown",S,c)}),u}const _5=(t,n)=>n?t===n?!0:_5(t,n.parentElement):!1,Hp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Yk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Wk(t){return Yk.has(t.tagName)||t.isContentEditable===!0}const Fk=new Set(["INPUT","SELECT","TEXTAREA"]);function Xk(t){return Fk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function N1(t){return n=>{n.key==="Enter"&&t(n)}}function _m(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Gk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=N1(()=>{if(gd.has(i))return;_m(i,"down");const c=N1(()=>{_m(i,"up")}),u=()=>_m(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function D1(t){return Hp(t)&&!m5()}const R1=new WeakSet;function qk(t,n,i={}){const[a,c,u]=p5(t,i),d=h=>{const p=h.currentTarget;if(!D1(h)||R1.has(h))return;gd.add(p),i.stopPropagation&&R1.add(h);const y=n(p,h),g=(S,C)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),D1(S)&&typeof y=="function"&&y(S,{success:C})},x=S=>{g(S,p===window||p===document||i.useGlobalTarget||_5(p,S.target))},b=S=>{g(S,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",y=>Gk(y,c)),!Wk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return _b(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let sr;const g5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Kk=g5("inline","width","offsetWidth"),Qk=g5("block","height","offsetHeight");function Zk({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Kk(t,n)},get height(){return Qk(t,n)}})})}function Jk(t){t.forEach(Zk)}function e8(){typeof ResizeObserver>"u"||(sr=new ResizeObserver(Jk))}function t8(t,n){sr||e8();const i=Ip(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),sr==null||sr.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||sr==null||sr.unobserve(a)})}}const xd=new Set;let ml;function n8(){ml=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",ml)}function s8(t){return xd.add(t),ml||n8(),()=>{xd.delete(t),!xd.size&&typeof ml=="function"&&(window.removeEventListener("resize",ml),ml=void 0)}}function B1(t,n){return typeof t=="function"?s8(t):t8(t,n)}function y5(t){return Id(t)&&t.tagName==="svg"}function o8(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Yb(c,u,d);return n?h(a):h}const i8=[...u5,no,Ji],a8=t=>i8.find(c5(t)),L1=()=>({translate:0,scale:1,origin:0,originPoint:0}),pl=()=>({x:L1(),y:L1()}),O1=()=>({min:0,max:0}),to=()=>({x:O1(),y:O1()}),Nc=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Dc(t){return typeof t=="string"||Array.isArray(t)}const Up=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...Up];function Hd(t){return Pd(t.animate)||Vp.some(n=>Dc(t[n]))}function x5(t){return!!(Hd(t)||t.variants)}function r8(t,n,i){for(const a in n){const c=n[a],u=i[a];if(uo(c))t.addValue(a,c);else if(uo(u))t.addValue(a,rr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,rr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const tp={current:null},b5={current:!1},l8=typeof window<"u";function c8(){if(b5.current=!0,!!l8)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>tp.current=t.matches;t.addEventListener("change",n),n()}else tp.current=!1}const z1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function v5(t){Dd=t}function u8(){return Dd}class w5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Np,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=qo.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,ts.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=x5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in b){const C=b[S];y[S]!==void 0&&uo(C)&&C.set(y[S])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Nc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(b5.current||c8(),this.shouldReduceMotion=tp.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Na(this.notifyUpdate),Na(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&n5.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new e5({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:ci(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Cl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&ts.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):to()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<z1.length;a++){const c=z1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=r8(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=rr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(pb(a)||gb(a))?a=parseFloat(a):!a8(a)&&Ji.test(i)&&(a=f5(n,i)),this.setBaseTarget(n,uo(a)?a.get():a)),uo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Lp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!uo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new wp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Pp.render(this.render)}}class S5 extends w5{constructor(){super(...arguments),this.KeyframeResolver=Pk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;uo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class lr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function C5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function d8({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function f8(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function gm(t){return t===void 0||t===1}function np({scale:t,scaleX:n,scaleY:i}){return!gm(t)||!gm(n)||!gm(i)}function jr(t){return np(t)||k5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function k5(t){return $1(t.x)||$1(t.y)}function $1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function I1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function sp(t,n=0,i=1,a,c){t.min=I1(t.min,n,i,a,c),t.max=I1(t.max,n,i,a,c)}function j5(t,{x:n,y:i}){sp(t.x,n.translate,n.scale,n.originPoint),sp(t.y,i.translate,i.scale,i.originPoint)}const P1=.999999999999,H1=1.0000000000001;function h8(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ca(t.x,-u.scroll.offset.x),ca(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,j5(t,d)),a&&jr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<H1&&n.x>P1&&(n.x=1),n.y<H1&&n.y>P1&&(n.y=1)}function ca(t,n){t.min+=n,t.max+=n}function U1(t,n,i,a,c=.5){const u=ds(t.min,t.max,c);sp(t,n,i,u,a)}function V1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;U1(t.x,V1(n.x,a.x),n.scaleX,n.scale,n.originX),U1(t.y,V1(n.y,a.y),n.scaleY,n.scale,n.originY)}function M5(t,n){return C5(f8(t.getBoundingClientRect(),n))}function m8(t,n,i){const a=M5(t,i),{scroll:c}=n;return c&&(ca(a.x,c.offset.x),ca(a.y,c.offset.y)),a}const p8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_8=Sl.length;function g8(t,n,i){let a="",c=!0;for(let u=0;u<_8;u++){const d=Sl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=h5(h,$p[d]);if(!p){c=!1;const g=p8[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Yp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const y=n[p];if(Cl.has(p)){d=!0;continue}else if(Bb(p)){c[p]=y;continue}else{const g=h5(y,$p[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=g8(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function E5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function Y1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const hc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(kt.test(t))t=parseFloat(t);else return t;const i=Y1(t,n.target.x),a=Y1(t,n.target.y);return`${i}% ${a}%`}},y8={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ji.parse(t);if(c.length>5)return a;const u=Ji.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=ds(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},op={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:y8};function T5(t,{layout:n,layoutId:i}){return Cl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!op[t]||t==="opacity")}function Wp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(uo(a[h])||c&&uo(c[h])||T5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function x8(t){return window.getComputedStyle(t)}class A5 extends S5{constructor(){super(...arguments),this.type="html",this.renderInstance=E5}readValueFromInstance(n,i){var a;if(Cl.has(i))return(a=this.projection)!=null&&a.isProjecting?Ym(i):P3(n,i);{const c=x8(n),u=(Bb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return M5(n,i)}build(n,i,a){Yp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Wp(n,i,a)}}function b8(t,n){return t in n}class v8 extends w5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(b8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return to()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const w8={offset:"stroke-dashoffset",array:"stroke-dasharray"},S8={offset:"strokeDashoffset",array:"strokeDasharray"};function C8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?w8:S8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const k8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function N5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var S,C;if(Yp(t,h,y),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(S=x.transformOrigin)!=null?S:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(C=g==null?void 0:g.transformBox)!=null?C:"fill-box",delete x.transformBox);for(const M of k8)x[M]!==void 0&&(b[M]=x[M],delete x[M]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&C8(x,c,u,d,!1)}const D5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),R5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function j8(t,n,i,a){E5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(D5.has(c)?c:Op(c),n.attrs[c])}function B5(t,n,i){const a=Wp(t,n,i);for(const c in t)if(uo(t[c])||uo(n[c])){const u=Sl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class L5 extends S5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=to}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Cl.has(i)){const a=d5(i);return a&&a.default||0}return i=D5.has(i)?i:Op(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return B5(n,i,a)}build(n,i,a){N5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){j8(n,i,a,c)}mount(n){this.isSVGTag=R5(n.tagName),super.mount(n)}}const M8=Vp.length;function O5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?O5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<M8;i++){const a=Vp[i],c=t.props[a];(Dc(c)||c===!1)&&(n[a]=c)}return n}function z5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const E8=[...Up].reverse(),T8=Up.length;function A8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>Tk(t,i,a)))}function N8(t){let n=A8(t),i=W1(),a=!0,c=!1;const u=y=>(g,x)=>{var S;const b=Dr(t,x,y==="exit"?(S=t.presenceContext)==null?void 0:S.custom:void 0);if(b){const{transition:C,transitionEnd:M,...E}=b;g={...g,...E,...M}}return g};function d(y){n=y(t)}function h(y){const{props:g}=t,x=O5(t.parent)||{},b=[],S=new Set;let C={},M=1/0;for(let T=0;T<T8;T++){const O=E8[T],L=i[O],N=g[O]!==void 0?g[O]:x[O],q=Dc(N),Y=O===y?L.isActive:null;Y===!1&&(M=T);let Q=N===x[O]&&N!==g[O]&&q;if(Q&&(a||c)&&t.manuallyAnimateOnMount&&(Q=!1),L.protectedKeys={...C},!L.isActive&&Y===null||!N&&!L.prevProp||Pd(N)||typeof N=="boolean")continue;if(O==="exit"&&L.isActive&&Y!==!0){L.prevResolvedValues&&(C={...C,...L.prevResolvedValues});continue}const V=D8(L.prevProp,N);let ee=V||O===y&&L.isActive&&!Q&&q||T>M&&q,le=!1;const re=Array.isArray(N)?N:[N];let Ne=re.reduce(u(O),{});Y===!1&&(Ne={});const{prevResolvedValues:Ve={}}=L,te={...Ve,...Ne},he=F=>{ee=!0,S.has(F)&&(le=!0,S.delete(F)),L.needsAnimating[F]=!0;const me=t.getValue(F);me&&(me.liveStyle=!1)};for(const F in te){const me=Ne[F],Te=Ve[F];if(C.hasOwnProperty(F))continue;let $=!1;Km(me)&&Km(Te)?$=!z5(me,Te):$=me!==Te,$?me!=null?he(F):S.add(F):me!==void 0&&S.has(F)?he(F):L.protectedKeys[F]=!0}L.prevProp=N,L.prevResolvedValues=Ne,L.isActive&&(C={...C,...Ne}),(a||c)&&t.blockInitialAnimation&&(ee=!1);const I=Q&&V;ee&&(!I||le)&&b.push(...re.map(F=>{const me={type:O};if(typeof F=="string"&&(a||c)&&!I&&t.manuallyAnimateOnMount&&t.parent){const{parent:Te}=t,$=Dr(Te,F);if(Te.enteringChildren&&$){const{delayChildren:fe}=$.transition||{};me.delay=s5(Te.enteringChildren,t,fe)}}return{animation:F,options:me}}))}if(S.size){const T={};if(typeof g.initial!="boolean"){const O=Dr(t,Array.isArray(g.initial)?g.initial[0]:g.initial);O&&O.transition&&(T.transition=O.transition)}S.forEach(O=>{const L=t.getBaseTarget(O),N=t.getValue(O);N&&(N.liveStyle=!0),T[O]=L!=null?L:null}),b.push({animation:T})}let E=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(E=!1),a=!1,c=!1,E?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(S=>{var C;return(C=S.animationState)==null?void 0:C.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const S in i)i[S].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=W1(),c=!0}}}function D8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!z5(n,t):!1}function kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function W1(){return{animate:kr(!0),whileInView:kr(),whileHover:kr(),whileTap:kr(),whileDrag:kr(),whileFocus:kr(),exit:kr()}}function ip(t,n){t.min=n.min,t.max=n.max}function qi(t,n){ip(t.x,n.x),ip(t.y,n.y)}function F1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const $5=1e-4,R8=1-$5,B8=1+$5,I5=.01,L8=0-I5,O8=0+I5;function Ko(t){return t.max-t.min}function z8(t,n,i){return Math.abs(t-n)<=i}function X1(t,n,i,a=.5){t.origin=a,t.originPoint=ds(n.min,n.max,t.origin),t.scale=Ko(i)/Ko(n),t.translate=ds(i.min,i.max,t.origin)-t.originPoint,(t.scale>=R8&&t.scale<=B8||isNaN(t.scale))&&(t.scale=1),(t.translate>=L8&&t.translate<=O8||isNaN(t.translate))&&(t.translate=0)}function kc(t,n,i,a){X1(t.x,n.x,i.x,a?a.originX:void 0),X1(t.y,n.y,i.y,a?a.originY:void 0)}function G1(t,n,i,a=0){const c=a?ds(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Ko(n)}function $8(t,n,i,a){G1(t.x,n.x,i.x,a==null?void 0:a.x),G1(t.y,n.y,i.y,a==null?void 0:a.y)}function q1(t,n,i,a=0){const c=a?ds(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Ko(n)}function Bd(t,n,i,a){q1(t.x,n.x,i.x,a==null?void 0:a.x),q1(t.y,n.y,i.y,a==null?void 0:a.y)}function K1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function I8(t,n=0,i=1,a=.5,c,u=t,d=t){if(da.test(n)&&(n=parseFloat(n),n=ds(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ds(u.min,u.max,a);t===u&&(h-=n),t.min=K1(t.min,n,i,h,c),t.max=K1(t.max,n,i,h,c)}function Q1(t,n,[i,a,c],u,d){I8(t,n[i],n[a],n[c],n.scale,u,d)}const P8=["x","scaleX","originX"],H8=["y","scaleY","originY"];function Z1(t,n,i,a){Q1(t.x,n,P8,i?i.x:void 0,a?a.x:void 0),Q1(t.y,n,H8,i?i.y:void 0,a?a.y:void 0)}function J1(t){return t.translate===0&&t.scale===1}function P5(t){return J1(t.x)&&J1(t.y)}function ex(t,n){return t.min===n.min&&t.max===n.max}function U8(t,n){return ex(t.x,n.x)&&ex(t.y,n.y)}function tx(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function H5(t,n){return tx(t.x,n.x)&&tx(t.y,n.y)}function nx(t){return Ko(t.x)/Ko(t.y)}function sx(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function la(t){return[t("x"),t("y")]}function V8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:S,skewY:C}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),S&&(a+=`skewX(${S}deg) `),C&&(a+=`skewY(${C}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const U5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Y8=U5.length,ox=t=>typeof t=="string"?parseFloat(t):t,ix=t=>typeof t=="number"||kt.test(t);function W8(t,n,i,a,c,u){var d,h,p,y;c?(t.opacity=ds(0,(d=i.opacity)!=null?d:1,F8(a)),t.opacityExit=ds((h=n.opacity)!=null?h:1,0,X8(a))):u&&(t.opacity=ds((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<Y8;g++){const x=U5[g];let b=ax(n,x),S=ax(i,x);if(b===void 0&&S===void 0)continue;b||(b=0),S||(S=0),b===0||S===0||ix(b)===ix(S)?(t[x]=Math.max(ds(ox(b),ox(S),a),0),(da.test(S)||da.test(b))&&(t[x]+="%")):t[x]=S}(n.rotate||i.rotate)&&(t.rotate=ds(n.rotate||0,i.rotate||0,a))}function ax(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const F8=V5(0,.5,jb),X8=V5(.5,.95,zi);function V5(t,n,i){return a=>a<t?0:a>n?1:i(xl(t,n,a))}function Y5(t,n,i){const a=uo(t)?t:rr(t);return a.start(Bp("",a,n,i)),a.animation}function Rc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const G8=(t,n)=>t.depth-n.depth;class q8{constructor(){this.children=[],this.isDirty=!1}add(n){bp(this.children,n),this.isDirty=!0}remove(n){yl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(G8),this.isDirty=!1,this.children.forEach(n)}}function K8(t,n){const i=qo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Na(a),t(u-n))};return ts.setup(a,!0),()=>Na(a)}function vd(t){return uo(t)?t.get():t}class Q8{constructor(){this.members=[]}add(n){bp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(yl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(yl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ym=["","X","Y","Z"],Z8=1e3;let J8=0;function xm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function W5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=l5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ts,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&W5(a)}function F5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=J8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(nj),this.nodes.forEach(lj),this.nodes.forEach(cj),this.nodes.forEach(sj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new q8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new wp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!y5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;ts.read(()=>{x=window.innerWidth}),t(d,()=>{const S=window.innerWidth;S!==x&&(x=S,this.root.updateBlockedByResize=!0,g&&g(),g=K8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(cx)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||y.getDefaultTransition()||mj,{onLayoutAnimationStart:M,onLayoutAnimationComplete:E}=y.getProps(),T=!this.targetLayout||!H5(this.targetLayout,S),O=!x&&b;if(this.options.layoutRoot||this.resumeFrom||O||x&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Rp(C,"layout"),onPlay:M,onComplete:E};(y.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(g,O)}else x||cx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Na(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uj),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&W5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(ij),this.nodes.forEach(rx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(lx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(aj),this.nodes.forEach(rj),this.nodes.forEach(ej),this.nodes.forEach(tj)):this.nodes.forEach(lx),this.clearAllSnapshots();const h=qo.now();Do.delta=fa(0,1e3/60,h-Do.timestamp),Do.timestamp=h,Do.isProcessing=!0,um.update.process(Do),um.preRender.process(Do),um.render.process(Do),Do.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(oj),this.sharedNodes.forEach(dj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ts.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ts.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ko(this.snapshot.measuredBox.x)&&!Ko(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=to()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!P5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||jr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),pj(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return to();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(_j))){const{scroll:g}=this.root;g&&(ca(h.x,g.offset.x),ca(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=to();if(qi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&qi(h,d),ca(h.x,x.offset.x),ca(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||to();qi(y,d);for(let b=0;b<this.path.length;b++){const S=this.path[b];!h&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(ca(y.x,-S.scroll.offset.x),ca(y.y,-S.scroll.offset.y)),jr(S.latestValues)&&bd(y,S.latestValues,(g=S.layout)==null?void 0:g.layoutBox)}return jr(this.latestValues)&&bd(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=to();qi(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!jr(g.latestValues))continue;let x;g.instance&&(np(g.latestValues)&&g.updateSnapshot(),x=to(),qi(x,g.measurePageBox())),Z1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return jr(this.latestValues)&&Z1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Do.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var S;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Do.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=to(),this.targetWithTransforms=to()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qi(this.target,this.layout.layoutBox),j5(this.target,this.targetDelta)):qi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||np(this.parent.latestValues)||k5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=to(),this.relativeTargetOrigin=to(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),qi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var C;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Do.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;qi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;h8(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=to());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(F1(this.prevProjectionDelta.x,this.projectionDelta.x),F1(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!sx(this.projectionDelta.x,this.prevProjectionDelta.x)||!sx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pl(),this.projectionDelta=pl(),this.projectionDeltaWithTransform=pl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=pl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=to(),S=p?p.source:void 0,C=this.layout?this.layout.source:void 0,M=S!==C,E=this.getStack(),T=!E||E.members.length<=1,O=!!(M&&!T&&this.options.crossfade===!0&&!this.path.some(hj));this.animationProgress=0;let L;this.mixTargetDelta=N=>{const q=N/1e3;ux(x.x,d.x,q),ux(x.y,d.y,q),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),fj(this.relativeTarget,this.relativeTargetOrigin,b,q),L&&U8(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=to()),qi(L,this.relativeTarget)),M&&(this.animationValues=g,W8(g,y,this.latestValues,q,O,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Na(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ts.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=rr(0)),this.motionValue.jump(0,!1),this.currentAnimation=Y5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Z8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&X5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||to();const x=Ko(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Ko(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}qi(h,p),bd(h,g),kc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Q8),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&xm("z",d,y,this.animationValues);for(let g=0;g<ym.length;g++)xm(`rotate${ym[g]}`,d,y,this.animationValues),xm(`skew${ym[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var C,M;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=V8(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:S}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,y.animationValues?d.opacity=y===this?(M=(C=g.opacity)!=null?C:this.latestValues.opacity)!=null?M:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in op){if(g[E]===void 0)continue;const{correct:T,applyTo:O,isCSSVariable:L}=op[E],N=x==="none"?g[E]:T(g[E],y);if(O){const q=O.length;for(let Y=0;Y<q;Y++)d[O[Y]]=N}else L?this.options.visualElement.renderState.vars[E]=N:d[E]=N}this.options.layoutId&&(d.pointerEvents=y===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(rx),this.root.sharedNodes.clear()}}}function ej(t){t.updateLayout()}function tj(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")la(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Ko(b);b.min=a[x].min,b.max=b.min+S});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";ip(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else X5(u,n.layoutBox,a)&&la(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],S=Ko(a[x]);b.max=b.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+S)});const h=pl();kc(h,a,n.layoutBox);const p=pl();d?kc(p,t.applyTransform(c,!0),n.measuredBox):kc(p,a,n.layoutBox);const y=!P5(h);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:S}=x;if(b&&S){const C=t.options.layoutAnchor||void 0,M=to();Bd(M,n.layoutBox,b.layoutBox,C);const E=to();Bd(E,a,S.layoutBox,C),H5(M,E)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=M,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function nj(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function sj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function oj(t){t.clearSnapshot()}function rx(t){t.clearMeasurements()}function ij(t){t.isLayoutDirty=!0,t.updateLayout()}function lx(t){t.isLayoutDirty=!1}function aj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function rj(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function cx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function lj(t){t.resolveTargetDelta()}function cj(t){t.calcProjection()}function uj(t){t.resetSkewAndRotation()}function dj(t){t.removeLeadSnapshot()}function ux(t,n,i){t.translate=ds(n.translate,0,i),t.scale=ds(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function dx(t,n,i,a){t.min=ds(n.min,i.min,a),t.max=ds(n.max,i.max,a)}function fj(t,n,i,a){dx(t.x,n.x,i.x,a),dx(t.y,n.y,i.y,a)}function hj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const mj={duration:.45,ease:[.4,0,.1,1]},fx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),hx=fx("applewebkit/")&&!fx("chrome/")?Math.round:zi;function mx(t){t.min=hx(t.min),t.max=hx(t.max)}function pj(t){mx(t.x),mx(t.y)}function X5(t,n,i){return t==="position"||t==="preserve-aspect"&&!z8(nx(n),nx(i),.2)}function _j(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const gj=F5({attachResizeListener:(t,n)=>Rc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bm={current:void 0},G5=F5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!bm.current){const t=new gj({});t.mount(window),t.setOptions({layoutScroll:!0}),bm.current=t}return bm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ud=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function px(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function yj(...t){return n=>{let i=!1;const a=t.map(c=>{const u=px(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():px(t[c],null)}}}}function xj(...t){return _.useCallback(yj(...t),t)}class bj extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function vj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,S;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(Ud),g=(S=(b=t.props)==null?void 0:b.ref)!=null?S:t==null?void 0:t.ref,x=xj(h,g);return _.useInsertionEffect(()=>{const{width:C,height:M,top:E,left:T,right:O,bottom:L}=p.current;if(n||u===!1||!h.current||!C||!M)return;const N=i==="left"?`left: ${T}`:`right: ${O}`,q=a==="bottom"?`bottom: ${L}`:`top: ${E}`;h.current.dataset.motionPopId=d;const Y=document.createElement("style");y&&(Y.nonce=y);const Q=c!=null?c:document.head;return Q.appendChild(Y),Y.sheet&&Y.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${M}px !important;
            ${N}px !important;
            ${q}px !important;
          }
        `),()=>{var V;(V=h.current)==null||V.removeAttribute("data-motion-pop-id"),Q.contains(Y)&&Q.removeChild(Y)}},[n]),l.jsx(bj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:_.cloneElement(t,{ref:x})})}const wj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Lc(Sj),x=_.useId();let b=!0,S=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:C=>{g.set(C,!0);for(const M of g.values())if(!M)return;a&&a()},register:C=>(g.set(C,!1),()=>g.delete(C))}),[i,g,a]);return u&&b&&(S={...S}),_.useMemo(()=>{g.forEach((C,M)=>g.set(M,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),t=l.jsx(vj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:t}),l.jsx(zd.Provider,{value:S,children:t})};function Sj(){return new Map}function q5(t=!0){const n=_.useContext(zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(t)return c(u)},[t]);const d=_.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function _x(t){const n=[];return _.Children.forEach(t,i=>{_.isValidElement(i)&&n.push(i)}),n}const Vd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=q5(d),b=_.useMemo(()=>_x(t),[t]),S=d&&!g?[]:b.map(rd),C=_.useRef(!0),M=_.useRef(b),E=Lc(()=>new Map),T=_.useRef(new Set),[O,L]=_.useState(b),[N,q]=_.useState(b);xp(()=>{C.current=!1,M.current=b;for(let V=0;V<N.length;V++){const ee=rd(N[V]);S.includes(ee)?(E.delete(ee),T.current.delete(ee)):E.get(ee)!==!0&&E.set(ee,!1)}},[N,S.length,S.join("-")]);const Y=[];if(b!==O){let V=[...b];for(let ee=0;ee<N.length;ee++){const le=N[ee],re=rd(le);S.includes(re)||(V.splice(ee,0,le),Y.push(le))}return u==="wait"&&Y.length&&(V=Y),q(_x(V)),L(b),null}const{forceRender:Q}=_.useContext(yp);return l.jsx(l.Fragment,{children:N.map(V=>{const ee=rd(V),le=d&&!g?!1:b===N||S.includes(ee),re=()=>{if(T.current.has(ee))return;if(E.has(ee))T.current.add(ee),E.set(ee,!0);else return;let Ne=!0;E.forEach(Ve=>{Ve||(Ne=!1)}),Ne&&(Q==null||Q(),q(M.current),d&&(x==null||x()),a&&a())};return l.jsx(wj,{isPresent:le,initial:!C.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:le?void 0:re,anchorX:h,anchorY:p,children:V},ee)})})},K5=_.createContext({strict:!1}),gx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let yx=!1;function Cj(){if(yx)return;const t={};for(const n in gx)t[n]={isEnabled:i=>gx[n].some(a=>!!i[a])};v5(t),yx=!0}function Q5(){return Cj(),u8()}function kj(t){const n=Q5();for(const i in t)n[i]={...n[i],...t[i]};v5(n)}const jj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||jj.has(t)}let Z5=t=>!Ld(t);function Mj(t){typeof t=="function"&&(Z5=n=>n.startsWith("on")?!Ld(n):t(n))}try{Mj(require("@emotion/is-prop-valid").default)}catch{}function Ej(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||uo(t[c])||(Z5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=_.createContext({});function Tj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Dc(i)?i:void 0,animate:Dc(a)?a:void 0}}return t.inherit!==!1?n:{}}function Aj(t){const{initial:n,animate:i}=Tj(t,_.useContext(Yd));return _.useMemo(()=>({initial:n,animate:i}),[xx(n),xx(i)])}function xx(t){return Array.isArray(t)?t.join(" "):t}const Fp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function J5(t,n,i){for(const a in n)!uo(n[a])&&!T5(a,i)&&(t[a]=n[a])}function Nj({transformTemplate:t},n){return _.useMemo(()=>{const i=Fp();return Yp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function Dj(t,n){const i=t.style||{},a={};return J5(a,i,t),Object.assign(a,Nj(t,n)),a}function Rj(t,n){const i={},a=Dj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const e2=()=>({...Fp(),attrs:{}});function Bj(t,n,i,a){const c=_.useMemo(()=>{const u=e2();return N5(u,n,R5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};J5(u,t.style,t),c.style={...u,...c.style}}return c}const Lj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xp(t){return typeof t!="string"||t.includes("-")?!1:!!(Lj.indexOf(t)>-1||/[A-Z]/u.test(t))}function Oj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Xp(t))?Bj:Rj)(n,a,c,t),y=Ej(n,typeof t=="string",u),g=t!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>uo(x)?x.get():x,[x]);return _.createElement(t,{...g,children:b})}function zj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:$j(i,a,c,t),renderState:n()}}function $j(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),y=x5(t);n&&y&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let S=0;S<b.length;S++){const C=Lp(t,b[S]);if(C){const{transitionEnd:M,transition:E,...T}=C;for(const O in T){let L=T[O];if(Array.isArray(L)){const N=g?L.length-1:0;L=L[N]}L!==null&&(c[O]=L)}for(const O in M)c[O]=M[O]}}}return c}const t2=t=>(n,i)=>{const a=_.useContext(Yd),c=_.useContext(zd),u=()=>zj(t,n,a,c);return i?u():Lc(u)},Ij=t2({scrapeMotionValuesFromProps:Wp,createRenderState:Fp}),Pj=t2({scrapeMotionValuesFromProps:B5,createRenderState:e2}),Hj=Symbol.for("motionComponentSymbol");function Uj(t,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const n2=_.createContext({});function dl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Vj(t,n,i,a,c,u){var L,N;const{visualElement:d}=_.useContext(Yd),h=_.useContext(K5),p=_.useContext(zd),y=_.useContext(Ud),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),S=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),S.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const C=b.current,M=_.useContext(n2);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&Yj(b.current,i,c,M);const E=_.useRef(!1);_.useInsertionEffect(()=>{C&&E.current&&C.update(i,p)});const T=i[r5],O=_.useRef(!!T&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,T))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,T)));return xp(()=>{S.current=!0,C&&(E.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),O.current&&C.animationState&&C.animationState.animateChanges())}),_.useEffect(()=>{C&&(!O.current&&C.animationState&&C.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var q;(q=window.MotionHandoffMarkAsComplete)==null||q.call(window,T)}),O.current=!1),C.enteringChildren=void 0)}),C}function Yj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:s2(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&dl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function s2(t){if(t)return t.options.allowProjection!==!1?t.projection:s2(t.parent)}function vm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&kj(a);const u=i?i==="svg":Xp(t),d=u?Pj:Ij;function h(x,b){let S;const C={..._.useContext(Ud),...x,layoutId:Wj(x)},{isStatic:M}=C,E=Aj(x),T=d(x,M);if(!M&&typeof window<"u"){Fj();const O=Xj(C);S=O.MeasureLayout,E.visualElement=Vj(t,T,C,c,O.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:E,children:[S&&E.visualElement?l.jsx(S,{visualElement:E.visualElement,...C}):null,Oj(t,x,Uj(T,E.visualElement,b),T,M,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(g=(y=t.displayName)!=null?y:t.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[Hj]=t,p}function Wj({layoutId:t}){const n=_.useContext(yp).id;return n&&t!==void 0?n+"-"+t:t}function Fj(t,n){_.useContext(K5).strict}function Xj(t){const n=Q5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Gj(t,n){if(typeof Proxy>"u")return vm;const i=new Map,a=(u,d)=>vm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,vm(d,void 0,t,n)),i.get(d))})}const qj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Xp(t))?new L5(n):new A5(n,{allowProjection:t!==_.Fragment})};class Kj extends lr{constructor(n){super(n),n.animationState||(n.animationState=N8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Qj=0;class Zj extends lr{constructor(){super(...arguments),this.id=Qj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Dr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Jj={animation:{Feature:Kj},exit:{Feature:Zj}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const eM=t=>n=>Hp(n)&&t(n,Ic(n));function jc(t,n,i,a){return Rc(t,n,eM(i),a)}const o2=({current:t})=>t?t.ownerDocument.defaultView:null,bx=(t,n)=>Math.abs(t-n);function tM(t,n){const i=bx(t.x,n.x),a=bx(t.y,n.y);return Math.sqrt(i**2+a**2)}const vx=new Set(["auto","scroll"]);class i2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const S=wm(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,M=tM(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!M)return;const{point:E}=S,{timestamp:T}=Do;this.history.push({...E,timestamp:T});const{onStart:O,onMove:L}=this.handlers;C||(O&&O(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,S)},this.handlePointerMove=(S,C)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=ld(C,this.transformPagePoint),ts.update(this.updatePoint,!0)},this.handlePointerUp=(S,C)=>{this.end();const{onEnd:M,onSessionEnd:E,resumeAnimation:T}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=wm(S.type==="pointercancel"?this.lastMoveEventInfo:ld(C,this.transformPagePoint),this.history);this.startEvent&&M&&M(S,O),E&&E(S,O)},!Hp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),y=ld(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Do;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,wm(y,this.history)),this.removeListeners=Oc(jc(this.contextWindow,"pointermove",this.handlePointerMove),jc(this.contextWindow,"pointerup",this.handlePointerUp),jc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(vx.has(a.overflowX)||vx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),ts.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Na(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function wx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function wm({point:t},n){return{point:t,delta:wx(t,a2(n)),offset:wx(t,nM(n)),velocity:sM(n,.1)}}function nM(t){return t[0]}function a2(t){return t[t.length-1]}function sM(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=a2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ci(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ci(n)*2&&(a=t[1]);const u=Oi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function oM(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?ds(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?ds(i,t,a.max):Math.min(t,i)),t}function Sx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function iM(t,{top:n,left:i,bottom:a,right:c}){return{x:Sx(t.x,i,c),y:Sx(t.y,n,a)}}function Cx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function aM(t,n){return{x:Cx(t.x,n.x),y:Cx(t.y,n.y)}}function rM(t,n){let i=.5;const a=Ko(t),c=Ko(n);return c>a?i=xl(n.min,n.max-a,t.min):a>c&&(i=xl(t.min,t.max-c,n.min)),fa(0,1,i)}function lM(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ap=.35;function cM(t=ap){return t===!1?t=0:t===!0&&(t=ap),{x:kx(t,"left","right"),y:kx(t,"top","bottom")}}function kx(t,n,i){return{min:jx(t,n),max:jx(t,i)}}function jx(t,n){return typeof t=="number"?t:t[n]||0}const uM=new WeakMap;class dM{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=to(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:S,dragPropagation:C,onDragStart:M}=this.getProps();if(S&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Hk(S),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),la(T=>{let O=this.getAxisMotionValue(T).get()||0;if(da.test(O)){const{projection:L}=this.visualElement;if(L&&L.layout){const N=L.layout.layoutBox[T];N&&(O=Ko(N)*(parseFloat(O)/100))}}this.originPoint[T]=O}),M&&ts.update(()=>M(x,b),!1,!0),Qm(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:S,dragDirectionLock:C,onDirectionLock:M,onDrag:E}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:T}=b;if(C&&this.currentDirection===null){this.currentDirection=hM(T),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",b.point,T),this.updateAxis("y",b.point,T),this.visualElement.render(),E&&ts.update(()=>E(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new i2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:o2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&ts.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=oM(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&dl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=iM(a.layoutBox,n):this.constraints=!1,this.elastic=cM(i),c!==this.constraints&&!dl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&la(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=lM(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!dl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=m8(a,c.root,this.visualElement.getTransformPagePoint());let d=aM(c.layout.layoutBox,u);if(i){const h=i(d8(d));this.hasMutatedConstraints=!!h,h&&(d=C5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=la(g=>{if(!cd(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,S=c?40:1e7,C={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,C)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Qm(this.visualElement,n),a.start(Bp(n,a,0,i,this.visualElement,!1))}stopAnimation(){la(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){la(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ds(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!dl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};la(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=rM({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),la(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(ds(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;uM.set(this.visualElement,this);const n=this.visualElement.current,i=jc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,S=b!==n&&Xk(b);g&&x&&!S&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();dl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=fM(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ts.read(c);const h=Rc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(la(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ap,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Mx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function fM(t,n,i){const a=B1(t,Mx(i)),c=B1(n,Mx(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function hM(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class mM extends lr{constructor(n){super(n),this.removeGroupControls=zi,this.removeListeners=zi,this.controls=new dM(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Sm=t=>(n,i)=>{t&&ts.update(()=>t(n,i),!1,!0)};class pM extends lr{constructor(){super(...arguments),this.removePointerDownListener=zi}onPointerDown(n){this.session=new i2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:o2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:Sm(n),onStart:Sm(i),onMove:Sm(a),onEnd:(u,d)=>{delete this.session,c&&ts.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=jc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Cm=!1;class _M extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),Cm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Cm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||ts.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Pp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;Cm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function r2(t){const[n,i]=q5(),a=_.useContext(yp);return l.jsx(_M,{...t,layoutGroup:a,switchLayoutGroup:_.useContext(n2),isPresent:n,safeToRemove:i})}const gM={pan:{Feature:pM},drag:{Feature:mM,ProjectionNode:G5,MeasureLayout:r2}};function Ex(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&ts.postRender(()=>u(n,Ic(n)))}class yM extends lr{mount(){const{current:n}=this.node;n&&(this.unmount=Vk(n,(i,a)=>(Ex(this.node,a,"Start"),c=>Ex(this.node,c,"End"))))}unmount(){}}class xM extends lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(Rc(this.node.current,"focus",()=>this.onFocus()),Rc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Tx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&ts.postRender(()=>u(n,Ic(n)))}class bM extends lr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=qk(n,(c,u)=>(Tx(this.node,u,"Start"),(d,{success:h})=>Tx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const rp=new WeakMap,km=new WeakMap,vM=t=>{const n=rp.get(t.target);n&&n(t)},wM=t=>{t.forEach(vM)};function SM({root:t,...n}){const i=t||document;km.has(i)||km.set(i,{});const a=km.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(wM,{root:t,...n})),a[c]}function CM(t,n,i){const a=SM(n);return rp.set(t,i),a.observe(t),()=>{rp.delete(t),a.unobserve(t)}}const kM={some:0,all:1};class jM extends lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:kM[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),S=g?x:b;S&&S(y)};this.stopObserver=CM(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(MM(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function MM({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const EM={inView:{Feature:jM},tap:{Feature:bM},focus:{Feature:xM},hover:{Feature:yM}},TM={layout:{ProjectionNode:G5,MeasureLayout:r2}},AM={...Jj,...EM,...gM,...TM},li=Gj(AM,qj);function lp(t){const n=Lc(()=>rr(t)),{isStatic:i}=_.useContext(Ud);if(i){const[,a]=_.useState(t);_.useEffect(()=>n.on("change",a),[])}return n}function l2(t,n){const i=lp(n()),a=()=>i.set(n());return a(),xp(()=>{const c=()=>ts.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Na(a)}}),i}function NM(t){Cc.current=[],t();const n=l2(Cc.current,t);return Cc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return NM(t);const u=typeof n=="function"?n:o8(n,i,a),d=Array.isArray(t)?Ax(t,u):Ax([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function Ax(t,n){const i=Lc(()=>[]);return l2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Gp(t){return typeof t=="object"&&!Array.isArray(t)}function c2(t,n,i,a){return t==null?[]:typeof t=="string"&&Gp(n)?Ip(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function DM(t,n,i){return t*(n+1)}function Nx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function RM(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(yl(t,c),a--)}}function BM(t,n,i,a,c,u){RM(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:ds(c,u,a[d]),easing:Ab(i,d)})}function LM(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function OM(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const zM="easeInOut";function $M(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let S=0;S<t.length;S++){const C=t[S];if(typeof C=="string"){y.set(C,x);continue}else if(!Array.isArray(C)){y.set(C.name,Nx(x,C.at,g,y));continue}let[M,E,T={}]=C;T.at!==void 0&&(x=Nx(x,T.at,g,y));let O=0;const L=(N,q,Y,Q=0,V=0)=>{const ee=IM(N),{delay:le=0,times:re=Fb(ee),type:Ne=n.type||"keyframes",repeat:Ve,repeatType:te,repeatDelay:he=0,...I}=q;let{ease:ie=n.ease||"easeOut",duration:F}=q;const me=typeof le=="function"?le(Q,V):le,Te=ee.length,$=Dp(Ne)?Ne:c==null?void 0:c[Ne||"keyframes"];if(Te<=2&&$){let ve=100;if(Te===2&&UM(ee)){const Ye=ee[1]-ee[0];ve=Math.abs(Ye)}const Ae={...n,...I};F!==void 0&&(Ae.duration=ci(F));const We=Ub(Ae,ve,$);ie=We.ease,F=We.duration}F!=null||(F=u);const fe=x+me;re.length===1&&re[0]===0&&(re[1]=1);const G=re.length-ee.length;if(G>0&&Wb(re,G),ee.length===1&&ee.unshift(null),Ve){F=DM(F,Ve);const ve=[...ee],Ae=[...re];ie=Array.isArray(ie)?[...ie]:[ie];const We=[...ie];for(let Ye=0;Ye<Ve;Ye++){ee.push(...ve);for(let lt=0;lt<ve.length;lt++)re.push(Ae[lt]+(Ye+1)),ie.push(lt===0?"linear":Ab(We,lt-1))}LM(re,Ve)}const _e=fe+F;BM(Y,ee,ie,re,fe,_e),O=Math.max(me+F,O),b=Math.max(_e,b)};if(uo(M)){const N=Dx(M,h);L(E,T,Rx("default",N))}else{const N=c2(M,E,a,p),q=N.length;for(let Y=0;Y<q;Y++){E=E,T=T;const Q=N[Y],V=Dx(Q,h);for(const ee in E)L(E[ee],PM(T,ee),Rx(ee,V),Y,q)}}g=x,x+=O}return h.forEach((S,C)=>{for(const M in S){const E=S[M];E.sort(OM);const T=[],O=[],L=[];for(let Q=0;Q<E.length;Q++){const{at:V,value:ee,easing:le}=E[Q];T.push(ee),O.push(xl(0,b,V)),L.push(le||"easeOut")}O[0]!==0&&(O.unshift(0),T.unshift(T[0]),L.unshift(zM)),O[O.length-1]!==1&&(O.push(1),T.push(null)),d.has(C)||d.set(C,{keyframes:{},transition:{}});const N=d.get(C);N.keyframes[M]=T;const{type:q,...Y}=n;N.transition[M]={...Y,duration:b,ease:L,times:O,...i}}}),d}function Dx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Rx(t,n){return n[t]||(n[t]=[]),n[t]}function IM(t){return Array.isArray(t)?t:[t]}function PM(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const HM=t=>typeof t=="number",UM=t=>t.every(HM);function VM(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!y5(t)?new L5(n):new A5(n);i.mount(t),Nc.set(t,i)}function YM(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new v8(n);i.mount(t),Nc.set(t,i)}function WM(t,n){return uo(t)||typeof t=="number"||typeof t=="string"&&!Gp(n)}function u2(t,n,i,a){const c=[];if(WM(t,n))c.push(Y5(t,Gp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=c2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?VM:YM;Nc.has(p)||y(p);const g=Nc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...zp(g,{...n,transition:x},{}))}}return c}function FM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=rr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return $M(c,n,i,{spring:Ac}).forEach(({keyframes:d,transition:h},p)=>{a.push(...u2(p,d,h))}),a}function XM(t){return Array.isArray(t)&&t.some(Array.isArray)}function GM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(XM(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=FM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=u2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new uk(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{yl(n.animations,y)})),y}return a}const Bx=GM();var qM=Object.freeze({}),KM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[S,C]of Object.entries(h))p[S]=this.normalizePreservedValue(c.values[S],C,d.get(S));this.initTransitionModes(i,"",p);for(const[S,C]of Object.entries(c.values)){if(!S.endsWith(".__mode"))continue;const M=S.slice(0,-7),E=d.get(M);(E==null?void 0:E.type)==="transition"&&(p[S]=C)}const y={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,y),this.snapshots.set(t,{...p});const g=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[S,C]of Object.entries(h))x[S]=this.normalizePreservedValue(g[S],C,d.get(S));for(const[S,C]of Object.entries(p))S.endsWith(".__mode")&&(x[S]=C);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:qM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},en=new KM;function QM(t,n,i){const a=_.useId(),c=`${t}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(en.registerPanel(c,t,u.current,p.current),()=>en.unregisterPanel(c)),[c,t]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}en.updatePanel(c,t,u.current,p.current)},[c,t,d,y]),_.useEffect(()=>en.subscribeActions(c,b=>{var S;(S=h.current)==null||S.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>en.subscribe(c,b),()=>en.getValues(c),()=>en.getValues(c));return d2(n,x,"")}function d2(t,n,i){var c,u,d,h,p,y,g,x,b,S;const a={};for(const[C,M]of Object.entries(t)){if(C==="_collapsed")continue;const E=i?`${i}.${C}`:C;if(Array.isArray(M)&&M.length<=4&&typeof M[0]=="number")a[C]=(c=n[E])!=null?c:M[0];else if(typeof M=="number"||typeof M=="boolean"||typeof M=="string")a[C]=(u=n[E])!=null?u:M;else if(ZM(M)||JM(M))a[C]=(d=n[E])!=null?d:M;else if(e7(M))a[C]=(h=n[E])!=null?h:M;else if(t7(M)){const T=(p=M.default)!=null?p:o7(M.options);a[C]=(y=n[E])!=null?y:T}else n7(M)?a[C]=(x=(g=n[E])!=null?g:M.default)!=null?x:"#000000":s7(M)?a[C]=(S=(b=n[E])!=null?b:M.default)!=null?S:"":typeof M=="object"&&M!==null&&(a[C]=d2(M,n,E))}return a}function kl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function ZM(t){return kl(t,"spring")}function JM(t){return kl(t,"easing")}function e7(t){return kl(t,"action")}function t7(t){return kl(t,"select")&&"options"in t&&Array.isArray(t.options)}function n7(t){return kl(t,"color")}function s7(t){return kl(t,"text")}function o7(t){const n=t[0];return typeof n=="string"?n:n.value}function cp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(cp(n)))}function mc(t,n){var d,h,p,y;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=t.step)!=null?y:1}function pc(t,n,i,a,c){var y,g;const u=en.getValue(t,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));en.updateValue(t,n,Sd(p,a))}function i7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function jm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function f2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=f2(i.children,n);if(a)return a}}return null}var fd=4;function a7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function r7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=a7(n);return t.key?`${h2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function l7(t){return t.key?`${h2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function h2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var m2=_.createContext({activePanelId:null,activePath:null});function c7({children:t}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=en.getPanels();for(const b of x)for(const[S,C]of Object.entries(b.shortcuts)){if(!C.key||C.key.toLowerCase()!==g||((y=C.interaction)!=null?y:"scroll")!==p)continue;const M=f2(b.controls,S);if(M&&M.type==="slider")return{panelId:b.id,path:S,control:M,shortcut:C}}}return null},[]);return _.useEffect(()=>{const p=M=>{if(dd())return;const E=M.key.toLowerCase();if((E==="arrowleft"||E==="arrowright"||E==="arrowup"||E==="arrowdown")&&a.current.size>0){const N=h("scroll")||h("drag")||h("move");if(N&&N.control.type==="slider"){M.preventDefault();const q=E==="arrowright"||E==="arrowup"?1:-1,Y=mc(N.control,N.shortcut);pc(N.panelId,N.path,N.control,Y,q);return}}const T=a.current.has(E);a.current.add(E);const O=jm(M),L=en.resolveShortcutTarget(E,O);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!T&&L.control.type==="toggle")){const N=en.getValue(L.panelId,L.path);en.updateValue(L.panelId,L.path,!N)}T||(u.current=null,d.current=0)},y=M=>{const E=M.key.toLowerCase();if(a.current.delete(E),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let T=!1;for(const O of a.current){const L=jm(M),N=en.resolveShortcutTarget(O,L);if(N){i({activePanelId:N.panelId,activePath:N.path}),T=!0;break}}T||i({activePanelId:null,activePath:null})}},g=M=>{var O,L;if(dd())return;const E=jm(M);if(a.current.size>0)for(const N of a.current){const q=en.resolveShortcutTarget(N,E);if(!q)continue;const{panelId:Y,path:Q,control:V}=q;if(((L=(O=V.shortcut)==null?void 0:O.interaction)!=null?L:"scroll")!=="scroll"||V.type!=="slider")continue;M.preventDefault();const le=mc(V,V.shortcut),re=M.deltaY>0?-1:1;pc(Y,Q,V,le,re);return}const T=en.resolveScrollOnlyTargets();for(const{panelId:N,path:q,control:Y,shortcut:Q}of T){if(Y.type!=="slider")continue;M.preventDefault();const V=mc(Y,Q),ee=M.deltaY>0?-1:1;pc(N,q,Y,V,ee);return}},x=M=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=M.clientX,d.current=0,M.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},S=M=>{if(dd()||a.current.size===0)return;if(c.current){const T=h("drag");if(T&&u.current!==null){const O=M.clientX-u.current;u.current=M.clientX,d.current+=O;const L=mc(T.control,T.shortcut),N=Math.trunc(d.current/fd);N!==0&&(d.current-=N*fd,pc(T.panelId,T.path,T.control,L,N))}return}const E=h("move");if(E){if(u.current===null){u.current=M.clientX;return}const T=M.clientX-u.current;u.current=M.clientX,d.current+=T;const O=mc(E.control,E.shortcut),L=Math.trunc(d.current/fd);L!==0&&(d.current-=L*fd,pc(E.panelId,E.path,E.control,O,L))}},C=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",S),window.addEventListener("blur",C),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",S),window.removeEventListener("blur",C)}},[h]),l.jsx(m2.Provider,{value:n,children:t})}var qp="M6 9.5L12 15.5L18 9.5",u7="M5 12.75L10 19L19 5",Mm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},d7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],f7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Lx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Od({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,S]=_.useState(void 0),[C,M]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const O=()=>M(window.innerHeight);return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[a]),_.useEffect(()=>{const O=x.current;if(!O)return;const L=new ResizeObserver(()=>{if(h){const N=O.offsetHeight;S(q=>q===N?q:N)}});return L.observe(O),()=>L.disconnect()},[h]);const E=()=>{if(c&&a)return;const O=!h;p(O),g(!O),u==null||u(O)},T=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:E,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Lx.path,fill:"currentColor"}),Lx.circles.map((O,L)=>l.jsx("circle",{cx:O.cx,cy:O.cy,r:O.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(li.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:qp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:O=>O.stopPropagation(),children:d})]}),l.jsx(Vd,{initial:!1,children:h&&l.jsx(li.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:T});const O=h?{width:280,height:b!==void 0?Math.min(b+10,C-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(li.div,{className:"dialkit-panel-inner",style:O,onClick:h?void 0:E,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:T})}return T}var h7=3,m7=32,p7=200,_7=8;function $o({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var at;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),S=_.useRef(null),[C,M]=_.useState(!1),[E,T]=_.useState(!1),[O,L]=_.useState(!1),[N,q]=_.useState(!1),[Y,Q]=_.useState(!1),[V,ee]=_.useState(!1),[le,re]=_.useState(""),Ne=_.useRef(null),Ve=_.useRef(null),te=_.useRef(!0),he=_.useRef(null),I=_.useRef(null),ie=_.useRef(1),F=(n-a)/(c-a)*100,me=C||O,Te=lp(F),$=ud(Te,P=>`${P}%`),fe=ud(Te,P=>`max(5px, calc(${P}% - 9px))`),G=lp(0),_e=ud(G,P=>`calc(100% + ${Math.abs(P)}px)`),ve=ud(G,P=>P<0?P:0);_.useEffect(()=>{!C&&!he.current&&Te.jump(F)},[F,C,Te]);const Ae=_.useCallback(P=>{const J=I.current;if(!J)return n;const Se=(P-J.left)/ie.current,et=y.current?y.current.offsetWidth:J.width,Ke=Math.max(0,Math.min(1,Se/et)),Ee=a+Ke*(c-a);return Math.max(a,Math.min(c,Ee))},[a,c,n]),We=_.useCallback(P=>(P-a)/(c-a)*100,[a,c]),Ye=_.useCallback((P,J)=>{const ge=I.current;if(!ge)return 0;const Se=J<0?ge.left-P:P-ge.right,et=Math.max(0,Se-m7);return J*_7*Math.sqrt(Math.min(et/p7,1))},[]),lt=_.useCallback(P=>{if(!V&&(P.preventDefault(),P.target.setPointerCapture(P.pointerId),Ve.current={x:P.clientX,y:P.clientY},te.current=!0,M(!0),y.current)){I.current=y.current.getBoundingClientRect();const J=y.current.offsetWidth;ie.current=I.current.width/J}},[V]),Bt=_.useCallback(P=>{if(!C||!Ve.current)return;const J=P.clientX-Ve.current.x,ge=P.clientY-Ve.current.y,Se=Math.sqrt(J*J+ge*ge);if(te.current&&Se>h7&&(te.current=!1,T(!0)),!te.current){const et=I.current;et&&(P.clientX<et.left?G.jump(Ye(P.clientX,-1)):P.clientX>et.right?G.jump(Ye(P.clientX,1)):G.jump(0));const Ke=Ae(P.clientX),Ee=We(Ke);he.current&&(he.current.stop(),he.current=null),Te.jump(Ee),i(Sd(Ke,u))}},[C,Ae,We,i,Te,G,Ye]),Kt=_.useCallback(P=>{if(C){if(te.current){const J=Ae(P.clientX),Se=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):i7(J,a,c),et=We(Se);he.current&&he.current.stop(),he.current=Bx(Te,et,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{he.current=null}}),i(Sd(Se,u))}G.get()!==0&&Bx(G,0,{type:"spring",visualDuration:.35,bounce:.15}),M(!1),T(!1),Ve.current=null}},[C,Ae,We,i,a,c,Te,G]);_.useEffect(()=>(N&&!V&&!Y?Ne.current=setTimeout(()=>{Q(!0)},800):!N&&!V&&(Ne.current&&(clearTimeout(Ne.current),Ne.current=null),Q(!1)),()=>{Ne.current&&clearTimeout(Ne.current)}),[N,V,Y]),_.useEffect(()=>{V&&x.current&&(x.current.focus(),x.current.select())},[V]);const Ze=P=>{re(P.target.value)},ot=()=>{const P=parseFloat(le);if(!isNaN(P)){const J=Math.max(a,Math.min(c,P));i(Sd(J,u))}ee(!1),q(!1),Q(!1)},zt=P=>{Y&&(P.stopPropagation(),P.preventDefault(),ee(!0),re(n.toFixed(cp(u))))},qe=P=>{P.key==="Enter"?ot():P.key==="Escape"&&(ee(!1),q(!1))},wt=()=>{ot()},ke=n.toFixed(cp(u)),se=8,Re=10,Xe=10;let He=30,Fe=78;const tt=(at=y.current)==null?void 0:at.offsetWidth;tt&&tt>0&&(b.current&&(He=(Re+b.current.offsetWidth+se)/tt*100),S.current&&(Fe=(tt-Xe-S.current.offsetWidth-se)/tt*100));const it=F<He||F>Fe,gt=me?it?.1:E?.9:.5:0,bt=(c-a)/u,$t=bt<=10?Array.from({length:bt-1},(P,J)=>{const ge=(J+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ge}%`}},J)}):Array.from({length:9},(P,J)=>{const ge=(J+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ge}%`}},J)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(li.div,{ref:g,className:`dialkit-slider ${me?"dialkit-slider-active":""}`,onPointerDown:lt,onPointerMove:Bt,onPointerUp:Kt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:_e,x:ve},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:$t}),l.jsx(li.div,{className:"dialkit-slider-fill",style:{width:$}}),l.jsx(li.div,{className:"dialkit-slider-handle",style:{left:fe,y:"-50%"},animate:{opacity:gt,scaleX:me?1:.25,scaleY:me&&it?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:r7(h)})]}),V?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:le,onChange:Ze,onKeyDown:qe,onBlur:wt,onClick:P=>P.stopPropagation(),onMouseDown:P=>P.stopPropagation()}):l.jsx("span",{ref:S,className:`dialkit-slider-value ${Y?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>q(!0),onMouseLeave:()=>q(!1),onClick:zt,onMouseDown:P=>Y&&P.stopPropagation(),style:{cursor:Y?"text":"default"},children:ke})]})})}function Kp({options:t,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function g7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:l7(a)})]}),l.jsx(Kp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function y7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-t*(h-y),S=-n*p,C=(b+S)/i;p+=C*d,h+=p*d}return c}function p2({spring:t,isSimpleMode:n}){var M,E,T,O,L;let c,u,d;if(n){const N=(M=t.visualDuration)!=null?M:.3,q=(E=t.bounce)!=null?E:.2;d=1,c=2*Math.PI/N,c=Math.pow(c,2),u=2*(1-q)*Math.sqrt(c*d)}else c=(T=t.stiffness)!=null?T:400,u=(O=t.damping)!=null?O:17,d=(L=t.mass)!=null?L:1;const h=2,p=y7(c,u,d,h),y=p.map(([,N])=>N),g=Math.min(...y),b=Math.max(...y)-g,S=p.map(([N,q],Y)=>{const Q=N/h*256,ee=140-((q-g)/(b||1)*140*.6+140*.2);return`${Y===0?"M":"L"} ${Q} ${ee}`}).join(" "),C=[];for(let N=1;N<4;N++){const q=64*N,Y=140/4*N;C.push(l.jsx("line",{x1:q,y1:0,x2:q,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${N}`),l.jsx("line",{x1:0,y1:Y,x2:256,y2:Y,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${N}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[C,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:S,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function x7({panelId:t,path:n,label:i,spring:a,onChange:c}){var g,x,b,S,C;const u=_.useSyncExternalStore(M=>en.subscribe(t,M),()=>en.getSpringMode(t,n),()=>en.getSpringMode(t,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=M=>{en.updateSpringMode(t,n,M),c(M==="simple"?h.current.simple:h.current.advanced)},y=(M,E)=>{if(d){const{stiffness:T,damping:O,mass:L,...N}=a;c({...N,[M]:E})}else{const{visualDuration:T,bounce:O,...L}=a;c({...L,[M]:E})}};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(p2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:M=>y("visualDuration",M),min:.1,max:1,step:.05,unit:"s"}),l.jsx($o,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:M=>y("bounce",M),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:M=>y("stiffness",M),min:1,max:1e3,step:10}),l.jsx($o,{label:"Damping",value:(S=a.damping)!=null?S:17,onChange:M=>y("damping",M),min:1,max:100,step:1}),l.jsx($o,{label:"Mass",value:(C=a.mass)!=null?C:1,onChange:M=>y("mass",M),min:.1,max:10,step:.1})]})]})})}function b7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,S)=>({x:a+(b+.5)*u,y:a+(1.5-S)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function v7({panelId:t,path:n,label:i,value:a,onChange:c}){var C,M,E,T,O;const u=_.useSyncExternalStore(L=>en.subscribe(t,L),()=>en.getTransitionMode(t,n),()=>en.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=L=>{en.updateTransitionMode(t,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,N)=>{if(h){const{stiffness:q,damping:Y,mass:Q,...V}=y;c({...V,[L]:N})}else{const{visualDuration:q,bounce:Y,...Q}=y;c({...Q,[L]:N})}},S=(L,N)=>{const q=[...g.ease];q[L]=N,c({...g,ease:q})};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(b7,{easing:g}):l.jsx(p2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Kp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"x1",value:g.ease[0],onChange:L=>S(0,L),min:0,max:1,step:.01}),l.jsx($o,{label:"y1",value:g.ease[1],onChange:L=>S(1,L),min:-1,max:2,step:.01}),l.jsx($o,{label:"x2",value:g.ease[2],onChange:L=>S(2,L),min:0,max:1,step:.01}),l.jsx($o,{label:"y2",value:g.ease[3],onChange:L=>S(3,L),min:-1,max:2,step:.01}),l.jsx($o,{label:"Duration",value:g.duration,onChange:L=>c({...g,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(S7,{ease:g.ease,onChange:L=>c({...g,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"Duration",value:(C=y.visualDuration)!=null?C:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx($o,{label:"Bounce",value:(M=y.bounce)!=null?M:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx($o,{label:"Stiffness",value:(E=y.stiffness)!=null?E:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx($o,{label:"Damping",value:(T=y.damping)!=null?T:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx($o,{label:"Mass",value:(O=y.mass)!=null?O:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Ox(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function w7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function S7({ease:t,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Ox(t)),a(!0)},h=()=>{const y=w7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Ox(t),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function C7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function k7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function j7(t){return t.map(n=>typeof n=="string"?{value:n,label:k7(n)}:n)}function M7({label:t,value:n,options:i,onChange:a}){var M;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=j7(i),S=b.find(E=>E.value===n),C=_.useCallback(()=>{const E=d.current;if(!E)return;const T=E.getBoundingClientRect(),O=8+b.length*36,L=window.innerHeight-T.bottom-4,N=L<O&&T.top>L;x({top:N?T.top-4:T.bottom+4,left:T.left,width:T.width,above:N})},[b.length]);return _.useEffect(()=>{var T;const E=(T=d.current)==null?void 0:T.closest(".dialkit-root");y(E!=null?E:document.body)},[]),_.useEffect(()=>{c&&C()},[c,C]),_.useEffect(()=>{if(!c)return;const E=T=>{const O=T.target;d.current&&!d.current.contains(O)&&h.current&&!h.current.contains(O)&&u(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(M=S==null?void 0:S.label)!=null?M:n}),l.jsx(li.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]})]}),p&&Bc.createPortal(l.jsx(Vd,{children:c&&g&&l.jsx(li.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(E=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(E.value===n),onClick:()=>{a(E.value),u(!1)},children:E.label},E.value))})}),p)]})}var E7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function T7({label:t,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),E7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?A7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function A7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function N7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(T=>T.id===i),b=_.useCallback(()=>{var O;if(!g)return;const T=(O=d.current)==null?void 0:O.getBoundingClientRect();T&&y({top:T.bottom+4,left:T.left,width:T.width}),u(!0)},[g]),S=_.useCallback(()=>u(!1),[]),C=_.useCallback(()=>{c?S():b()},[c,b,S]);_.useEffect(()=>{if(!c)return;const T=O=>{var N,q;const L=O.target;(N=d.current)!=null&&N.contains(L)||(q=h.current)!=null&&q.contains(L)||S()};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c,S]);const M=T=>{T?en.loadPreset(t,T):en.clearActivePreset(t),S()},E=(T,O)=>{T.stopPropagation(),en.deletePreset(t,O)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:C,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(li.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:qp})})]}),Bc.createPortal(l.jsx(Vd,{children:c&&l.jsxs(li.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>M(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(T=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(T.id===i),onClick:()=>M(T.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:T.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:O=>E(O,T.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f7.map((O,L)=>l.jsx("path",{d:O},L))})})]},T.id))]})}),document.body)]})}function D7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(m2);Object.keys(t.shortcuts).length>0;const p=_.useSyncExternalStore(E=>en.subscribe(t.id,E),()=>en.getValues(t.id),()=>en.getValues(t.id)),y=en.getPresets(t.id),g=en.getActivePresetId(t.id),x=()=>{const E=y.length+2;en.savePreset(t.id,`Version ${E}`)},b=()=>{const E=JSON.stringify(p,null,2),T=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${E}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(T),c(!0),setTimeout(()=>c(!1),1500)},S=E=>{var O,L,N;const T=p[E.path];switch(E.type){case"slider":return l.jsx($o,{label:E.label,value:T,onChange:q=>en.updateValue(t.id,E.path,q),min:E.min,max:E.max,step:E.step,shortcut:E.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===E.path},E.path);case"toggle":return l.jsx(g7,{label:E.label,checked:T,onChange:q=>en.updateValue(t.id,E.path,q),shortcut:E.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===E.path},E.path);case"spring":return l.jsx(x7,{panelId:t.id,path:E.path,label:E.label,spring:T,onChange:q=>en.updateValue(t.id,E.path,q)},E.path);case"transition":return l.jsx(v7,{panelId:t.id,path:E.path,label:E.label,value:T,onChange:q=>en.updateValue(t.id,E.path,q)},E.path);case"folder":return l.jsx(Od,{title:E.label,defaultOpen:(O=E.defaultOpen)!=null?O:!0,children:(L=E.children)==null?void 0:L.map(S)},E.path);case"text":return l.jsx(C7,{label:E.label,value:T,onChange:q=>en.updateValue(t.id,E.path,q),placeholder:E.placeholder},E.path);case"select":return l.jsx(M7,{label:E.label,value:T,options:(N=E.options)!=null?N:[],onChange:q=>en.updateValue(t.id,E.path,q)},E.path);case"color":return l.jsx(T7,{label:E.label,value:T,onChange:q=>en.updateValue(t.id,E.path,q)},E.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>en.triggerAction(t.id,E.path),children:E.label},E.path);default:return null}},C=()=>t.controls.map(S),M=l.jsxs(l.Fragment,{children:[l.jsx(li.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:d7.map((E,T)=>l.jsx("path",{d:E},T))})}),l.jsx(N7,{panelId:t.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(li.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Vd,{initial:!1,mode:"wait",children:a?l.jsx(li.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:u7})},"check"):l.jsxs(li.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:Mm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:Mm.sparkle,fill:"currentColor"}),l.jsx("path",{d:Mm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Od,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:M,children:C()})})}var R7=typeof process<"u"?!1:!(typeof import.meta<"u");function B7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=R7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[S,C]=_.useState(t),M=_.useRef(null),E=_.useRef(!1),T=_.useRef(null),O=_.useRef(!1);_.useEffect(()=>(p(!0),d(en.getPanels()),en.subscribeGlobal(()=>{d(en.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const V=new MutationObserver(()=>{var re;const ee=(re=g.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!ee)return;if(ee.getAttribute("data-collapsed")==="true")M.current&&b(M.current);else{if(x){M.current=x;const Ne=x.x+21,Ve=window.innerWidth/2;C(Ne<Ve?"top-left":"top-right")}else C(t);b(null)}});return V.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>V.disconnect()},[y,x,t]);const L=_.useCallback(V=>{var re;const ee=(re=g.current)==null?void 0:re.querySelector(".dialkit-panel-inner");if(!ee||ee.getAttribute("data-collapsed")!=="true")return;const le=g.current.getBoundingClientRect();T.current={pointerX:V.clientX,pointerY:V.clientY,elX:le.left,elY:le.top},O.current=!1,E.current=!0,V.target.setPointerCapture(V.pointerId)},[]),N=_.useCallback(V=>{if(!E.current||!T.current)return;const ee=V.clientX-T.current.pointerX,le=V.clientY-T.current.pointerY;!O.current&&Math.abs(ee)+Math.abs(le)<4||(O.current=!0,b({x:T.current.elX+ee,y:T.current.elY+le}))},[]),q=_.useCallback(V=>{var ee;if(E.current&&(E.current=!1,T.current=null,O.current)){V.stopPropagation();const le=(ee=g.current)==null?void 0:ee.querySelector(".dialkit-panel-inner");if(le){const re=Ne=>{Ne.stopPropagation()};le.addEventListener("click",re,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const Y=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,Q=l.jsx(c7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:S,"data-mode":i,style:Y,onPointerDown:y?void 0:L,onPointerMove:y?void 0:N,onPointerUp:y?void 0:q,children:u.map(V=>l.jsx(D7,{panel:V,defaultOpen:y||n,inline:y},V.id))})})});return y?Q:Bc.createPortal(Q,document.body)}const L7=()=>(QM("Git Visualizer",{preview:[1,0,1]}),null),O7=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(L7,{}),l.jsx(B7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(zC,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Uv.createRoot(document.getElementById("root")).render(l.jsx(O7,{children:l.jsx(bS,{})}));

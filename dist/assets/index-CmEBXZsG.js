(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Gx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yh={exports:{}},Sc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function Yv(){if(uy)return Sc;uy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:e,type:a,key:d,ref:c!==void 0?c:null,props:u}}return Sc.Fragment=n,Sc.jsx=i,Sc.jsxs=i,Sc}var dy;function Wv(){return dy||(dy=1,Yh.exports=Yv()),Yh.exports}var l=Wv(),Wh={exports:{}},Cc={},Fh={exports:{}},Xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function Fv(){return fy||(fy=1,(function(e){function n(O,oe){var P=O.length;O.push(oe);e:for(;0<P;){var me=P-1>>>1,be=O[me];if(0<c(be,oe))O[me]=oe,O[P]=be,P=me;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var oe=O[0],P=O.pop();if(P!==oe){O[0]=P;e:for(var me=0,be=O.length,$=be>>>1;me<$;){var ie=2*(me+1)-1,ee=O[ie],ve=ie+1,Te=O[ve];if(0>c(ee,P))ve<be&&0>c(Te,ee)?(O[me]=Te,O[ve]=P,me=ve):(O[me]=ee,O[ie]=P,me=ie);else if(ve<be&&0>c(Te,P))O[me]=Te,O[ve]=P,me=ve;else break e}}return oe}function c(O,oe){var P=O.sortIndex-oe.sortIndex;return P!==0?P:O.id-oe.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,x=null,b=3,C=!1,j=!1,T=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function A(O){for(var oe=i(y);oe!==null;){if(oe.callback===null)a(y);else if(oe.startTime<=O)a(y),oe.sortIndex=oe.expirationTime,n(p,oe);else break;oe=i(y)}}function X(O){if(T=!1,A(O),!j)if(i(p)!==null)j=!0,W||(W=!0,De());else{var oe=i(y);oe!==null&&he(X,oe.startTime-O)}}var W=!1,Y=-1,q=5,ue=-1;function fe(){return E?!0:!(e.unstable_now()-ue<q)}function _e(){if(E=!1,W){var O=e.unstable_now();ue=O;var oe=!0;try{e:{j=!1,T&&(T=!1,H(Y),Y=-1),C=!0;var P=b;try{t:{for(A(O),x=i(p);x!==null&&!(x.expirationTime>O&&fe());){var me=x.callback;if(typeof me=="function"){x.callback=null,b=x.priorityLevel;var be=me(x.expirationTime<=O);if(O=e.unstable_now(),typeof be=="function"){x.callback=be,A(O),oe=!0;break t}x===i(p)&&a(p),A(O)}else a(p);x=i(p)}if(x!==null)oe=!0;else{var $=i(y);$!==null&&he(X,$.startTime-O),oe=!1}}break e}finally{x=null,b=P,C=!1}oe=void 0}}finally{oe?De():W=!1}}}var De;if(typeof L=="function")De=function(){L(_e)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,se=qe.port2;qe.port1.onmessage=_e,De=function(){se.postMessage(null)}}else De=function(){N(_e,0)};function he(O,oe){Y=N(function(){O(e.unstable_now())},oe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(O){switch(b){case 1:case 2:case 3:var oe=3;break;default:oe=b}var P=b;b=oe;try{return O()}finally{b=P}},e.unstable_requestPaint=function(){E=!0},e.unstable_runWithPriority=function(O,oe){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var P=b;b=O;try{return oe()}finally{b=P}},e.unstable_scheduleCallback=function(O,oe,P){var me=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?me+P:me):P=me,O){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=P+be,O={id:g++,callback:oe,priorityLevel:O,startTime:P,expirationTime:be,sortIndex:-1},P>me?(O.sortIndex=P,n(y,O),i(p)===null&&O===i(y)&&(T?(H(Y),Y=-1):T=!0,he(X,P-me))):(O.sortIndex=be,n(p,O),j||C||(j=!0,W||(W=!0,De()))),O},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(O){var oe=b;return function(){var P=b;b=oe;try{return O.apply(this,arguments)}finally{b=P}}}})(Xh)),Xh}var hy;function Xv(){return hy||(hy=1,Fh.exports=Fv()),Fh.exports}var Gh={exports:{}},rn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function Gv(){if(my)return rn;my=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function C($){return $===null||typeof $!="object"?null:($=b&&$[b]||$["@@iterator"],typeof $=="function"?$:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function N($,ie,ee){this.props=$,this.context=ie,this.refs=E,this.updater=ee||j}N.prototype.isReactComponent={},N.prototype.setState=function($,ie){if(typeof $!="object"&&typeof $!="function"&&$!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,$,ie,"setState")},N.prototype.forceUpdate=function($){this.updater.enqueueForceUpdate(this,$,"forceUpdate")};function H(){}H.prototype=N.prototype;function L($,ie,ee){this.props=$,this.context=ie,this.refs=E,this.updater=ee||j}var A=L.prototype=new H;A.constructor=L,T(A,N.prototype),A.isPureReactComponent=!0;var X=Array.isArray;function W(){}var Y={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function ue($,ie,ee){var ve=ee.ref;return{$$typeof:e,type:$,key:ie,ref:ve!==void 0?ve:null,props:ee}}function fe($,ie){return ue($.type,ie,$.props)}function _e($){return typeof $=="object"&&$!==null&&$.$$typeof===e}function De($){var ie={"=":"=0",":":"=2"};return"$"+$.replace(/[=:]/g,function(ee){return ie[ee]})}var qe=/\/+/g;function se($,ie){return typeof $=="object"&&$!==null&&$.key!=null?De(""+$.key):ie.toString(36)}function he($){switch($.status){case"fulfilled":return $.value;case"rejected":throw $.reason;default:switch(typeof $.status=="string"?$.then(W,W):($.status="pending",$.then(function(ie){$.status==="pending"&&($.status="fulfilled",$.value=ie)},function(ie){$.status==="pending"&&($.status="rejected",$.reason=ie)})),$.status){case"fulfilled":return $.value;case"rejected":throw $.reason}}throw $}function O($,ie,ee,ve,Te){var pe=typeof $;(pe==="undefined"||pe==="boolean")&&($=null);var Oe=!1;if($===null)Oe=!0;else switch(pe){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch($.$$typeof){case e:case n:Oe=!0;break;case g:return Oe=$._init,O(Oe($._payload),ie,ee,ve,Te)}}if(Oe)return Te=Te($),Oe=ve===""?"."+se($,0):ve,X(Te)?(ee="",Oe!=null&&(ee=Oe.replace(qe,"$&/")+"/"),O(Te,ie,ee,"",function(mt){return mt})):Te!=null&&(_e(Te)&&(Te=fe(Te,ee+(Te.key==null||$&&$.key===Te.key?"":(""+Te.key).replace(qe,"$&/")+"/")+Oe)),ie.push(Te)),1;Oe=0;var et=ve===""?".":ve+":";if(X($))for(var We=0;We<$.length;We++)ve=$[We],pe=et+se(ve,We),Oe+=O(ve,ie,ee,pe,Te);else if(We=C($),typeof We=="function")for($=We.call($),We=0;!(ve=$.next()).done;)ve=ve.value,pe=et+se(ve,We++),Oe+=O(ve,ie,ee,pe,Te);else if(pe==="object"){if(typeof $.then=="function")return O(he($),ie,ee,ve,Te);throw ie=String($),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys($).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function oe($,ie,ee){if($==null)return $;var ve=[],Te=0;return O($,ve,"","",function(pe){return ie.call(ee,pe,Te++)}),ve}function P($){if($._status===-1){var ie=$._result;ie=ie(),ie.then(function(ee){($._status===0||$._status===-1)&&($._status=1,$._result=ee)},function(ee){($._status===0||$._status===-1)&&($._status=2,$._result=ee)}),$._status===-1&&($._status=0,$._result=ie)}if($._status===1)return $._result.default;throw $._result}var me=typeof reportError=="function"?reportError:function($){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof $=="object"&&$!==null&&typeof $.message=="string"?String($.message):String($),error:$});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",$);return}console.error($)},be={map:oe,forEach:function($,ie,ee){oe($,function(){ie.apply(this,arguments)},ee)},count:function($){var ie=0;return oe($,function(){ie++}),ie},toArray:function($){return oe($,function(ie){return ie})||[]},only:function($){if(!_e($))throw Error("React.Children.only expected to receive a single React element child.");return $}};return rn.Activity=x,rn.Children=be,rn.Component=N,rn.Fragment=i,rn.Profiler=c,rn.PureComponent=L,rn.StrictMode=a,rn.Suspense=p,rn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,rn.__COMPILER_RUNTIME={__proto__:null,c:function($){return Y.H.useMemoCache($)}},rn.cache=function($){return function(){return $.apply(null,arguments)}},rn.cacheSignal=function(){return null},rn.cloneElement=function($,ie,ee){if($==null)throw Error("The argument must be a React element, but you passed "+$+".");var ve=T({},$.props),Te=$.key;if(ie!=null)for(pe in ie.key!==void 0&&(Te=""+ie.key),ie)!q.call(ie,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&ie.ref===void 0||(ve[pe]=ie[pe]);var pe=arguments.length-2;if(pe===1)ve.children=ee;else if(1<pe){for(var Oe=Array(pe),et=0;et<pe;et++)Oe[et]=arguments[et+2];ve.children=Oe}return ue($.type,Te,ve)},rn.createContext=function($){return $={$$typeof:d,_currentValue:$,_currentValue2:$,_threadCount:0,Provider:null,Consumer:null},$.Provider=$,$.Consumer={$$typeof:u,_context:$},$},rn.createElement=function($,ie,ee){var ve,Te={},pe=null;if(ie!=null)for(ve in ie.key!==void 0&&(pe=""+ie.key),ie)q.call(ie,ve)&&ve!=="key"&&ve!=="__self"&&ve!=="__source"&&(Te[ve]=ie[ve]);var Oe=arguments.length-2;if(Oe===1)Te.children=ee;else if(1<Oe){for(var et=Array(Oe),We=0;We<Oe;We++)et[We]=arguments[We+2];Te.children=et}if($&&$.defaultProps)for(ve in Oe=$.defaultProps,Oe)Te[ve]===void 0&&(Te[ve]=Oe[ve]);return ue($,pe,Te)},rn.createRef=function(){return{current:null}},rn.forwardRef=function($){return{$$typeof:h,render:$}},rn.isValidElement=_e,rn.lazy=function($){return{$$typeof:g,_payload:{_status:-1,_result:$},_init:P}},rn.memo=function($,ie){return{$$typeof:y,type:$,compare:ie===void 0?null:ie}},rn.startTransition=function($){var ie=Y.T,ee={};Y.T=ee;try{var ve=$(),Te=Y.S;Te!==null&&Te(ee,ve),typeof ve=="object"&&ve!==null&&typeof ve.then=="function"&&ve.then(W,me)}catch(pe){me(pe)}finally{ie!==null&&ee.types!==null&&(ie.types=ee.types),Y.T=ie}},rn.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},rn.use=function($){return Y.H.use($)},rn.useActionState=function($,ie,ee){return Y.H.useActionState($,ie,ee)},rn.useCallback=function($,ie){return Y.H.useCallback($,ie)},rn.useContext=function($){return Y.H.useContext($)},rn.useDebugValue=function(){},rn.useDeferredValue=function($,ie){return Y.H.useDeferredValue($,ie)},rn.useEffect=function($,ie){return Y.H.useEffect($,ie)},rn.useEffectEvent=function($){return Y.H.useEffectEvent($)},rn.useId=function(){return Y.H.useId()},rn.useImperativeHandle=function($,ie,ee){return Y.H.useImperativeHandle($,ie,ee)},rn.useInsertionEffect=function($,ie){return Y.H.useInsertionEffect($,ie)},rn.useLayoutEffect=function($,ie){return Y.H.useLayoutEffect($,ie)},rn.useMemo=function($,ie){return Y.H.useMemo($,ie)},rn.useOptimistic=function($,ie){return Y.H.useOptimistic($,ie)},rn.useReducer=function($,ie,ee){return Y.H.useReducer($,ie,ee)},rn.useRef=function($){return Y.H.useRef($)},rn.useState=function($){return Y.H.useState($)},rn.useSyncExternalStore=function($,ie,ee){return Y.H.useSyncExternalStore($,ie,ee)},rn.useTransition=function(){return Y.H.useTransition()},rn.version="19.2.4",rn}var py;function wp(){return py||(py=1,Gh.exports=Gv()),Gh.exports}var qh={exports:{}},qo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function qv(){if(_y)return qo;_y=1;var e=wp();function n(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,y,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:y,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return qo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qo.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return u(p,y,null,g)},qo.flushSync=function(p){var y=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=y,a.p=g,a.d.f()}},qo.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},qo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},qo.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,C=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:C}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:C,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},qo.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},qo.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,x=h(g,y.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},qo.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},qo.requestFormReset=function(p){a.d.r(p)},qo.unstable_batchedUpdates=function(p,y){return p(y)},qo.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},qo.useFormStatus=function(){return d.H.useHostTransitionStatus()},qo.version="19.2.4",qo}var gy;function qx(){if(gy)return qh.exports;gy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),qh.exports=qv(),qh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function Kv(){if(yy)return Cc;yy=1;var e=Xv(),n=wp(),i=qx();function a(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var s=t,o=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(o=s.return),t=s.return;while(t)}return s.tag===3?o:null}function d(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function h(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(a(188))}function y(t){var s=t.alternate;if(!s){if(s=u(t),s===null)throw Error(a(188));return s!==t?null:t}for(var o=t,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),t;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,D=f.child;D;){if(D===o){v=!0,o=f,r=m;break}if(D===r){v=!0,r=f,o=m;break}D=D.sibling}if(!v){for(D=m.child;D;){if(D===o){v=!0,o=m,r=f;break}if(D===r){v=!0,r=m,o=f;break}D=D.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?t:s}function g(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=g(t),s!==null)return s;t=t.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),L=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function De(t){return t===null||typeof t!="object"?null:(t=_e&&t[_e]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Symbol.for("react.client.reference");function se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===qe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case N:return"Profiler";case E:return"StrictMode";case X:return"Suspense";case W:return"SuspenseList";case ue:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case j:return"Portal";case L:return t.displayName||"Context";case H:return(t._context.displayName||"Context")+".Consumer";case A:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return s=t.displayName||null,s!==null?s:se(t.type)||"Memo";case q:s=t._payload,t=t._init;try{return se(t(s))}catch{}}return null}var he=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},me=[],be=-1;function $(t){return{current:t}}function ie(t){0>be||(t.current=me[be],me[be]=null,be--)}function ee(t,s){be++,me[be]=t.current,t.current=s}var ve=$(null),Te=$(null),pe=$(null),Oe=$(null);function et(t,s){switch(ee(pe,s),ee(Te,t),ee(ve,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?R0(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=R0(s),t=B0(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(ve),ee(ve,t)}function We(){ie(ve),ie(Te),ie(pe)}function mt(t){t.memoizedState!==null&&ee(Oe,t);var s=ve.current,o=B0(s,t.type);s!==o&&(ee(Te,t),ee(ve,o))}function Nt(t){Te.current===t&&(ie(ve),ie(Te)),Oe.current===t&&(ie(Oe),xc._currentValue=P)}var Mt,ut;function $t(t){if(Mt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Mt=s&&s[1]||"",ut=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+ut}var _t=!1;function Gt(t,s){if(!t||_t)return"";_t=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var Ve=function(){throw Error()};if(Object.defineProperty(Ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ve,[])}catch(ke){var we=ke}Reflect.construct(t,[],Ve)}else{try{Ve.call()}catch(ke){we=ke}t.call(Ve.prototype)}}else{try{throw Error()}catch(ke){we=ke}(Ve=t())&&typeof Ve.catch=="function"&&Ve.catch(function(){})}}catch(ke){if(ke&&we&&typeof ke.stack=="string")return[ke.stack,we.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],D=m[1];if(v&&D){var K=v.split(`
`),ye=D.split(`
`);for(f=r=0;r<K.length&&!K[r].includes("DetermineComponentFrameRoot");)r++;for(;f<ye.length&&!ye[f].includes("DetermineComponentFrameRoot");)f++;if(r===K.length||f===ye.length)for(r=K.length-1,f=ye.length-1;1<=r&&0<=f&&K[r]!==ye[f];)f--;for(;1<=r&&0<=f;r--,f--)if(K[r]!==ye[f]){if(r!==1||f!==1)do if(r--,f--,0>f||K[r]!==ye[f]){var Le=`
`+K[r].replace(" at new "," at ");return t.displayName&&Le.includes("<anonymous>")&&(Le=Le.replace("<anonymous>",t.displayName)),Le}while(1<=r&&0<=f);break}}}finally{_t=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?$t(o):""}function Jt(t,s){switch(t.tag){case 26:case 27:case 5:return $t(t.type);case 16:return $t("Lazy");case 13:return t.child!==s&&s!==null?$t("Suspense Fallback"):$t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return Gt(t.type,!1);case 11:return Gt(t.type.render,!1);case 1:return Gt(t.type,!0);case 31:return $t("Activity");default:return""}}function Z(t){try{var s="",o=null;do s+=Jt(t,o),o=t,t=t.return;while(t);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Re=Object.prototype.hasOwnProperty,dt=e.unstable_scheduleCallback,rt=e.unstable_cancelCallback,gt=e.unstable_shouldYield,Ue=e.unstable_requestPaint,vt=e.unstable_now,yt=e.unstable_getCurrentPriorityLevel,Et=e.unstable_ImmediatePriority,Ke=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,V=e.unstable_LowPriority,te=e.unstable_IdlePriority,Se=e.log,je=e.unstable_setDisableYieldValue,nt=null,Ye=null;function Ne(t){if(typeof Se=="function"&&je(t),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(nt,t)}catch{}}var xe=Math.clz32?Math.clz32:st,ot=Math.log,Xe=Math.LN2;function st(t){return t>>>=0,t===0?32:31-(ot(t)/Xe|0)|0}var Be=256,tt=262144,wt=4194304;function Ct(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ze(t,s,o){var r=t.pendingLanes;if(r===0)return 0;var f=0,m=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var D=r&134217727;return D!==0?(r=D&~m,r!==0?f=Ct(r):(v&=D,v!==0?f=Ct(v):o||(o=D&~t,o!==0&&(f=Ct(o))))):(D=r&~m,D!==0?f=Ct(D):v!==0?f=Ct(v):o||(o=r&~t,o!==0&&(f=Ct(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Bt(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function kt(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pt(){var t=wt;return wt<<=1,(wt&62914560)===0&&(wt=4194304),t}function cn(t){for(var s=[],o=0;31>o;o++)s.push(t);return s}function ft(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pt(t,s,o,r,f,m){var v=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var D=t.entanglements,K=t.expirationTimes,ye=t.hiddenUpdates;for(o=v&~o;0<o;){var Le=31-xe(o),Ve=1<<Le;D[Le]=0,K[Le]=-1;var we=ye[Le];if(we!==null)for(ye[Le]=null,Le=0;Le<we.length;Le++){var ke=we[Le];ke!==null&&(ke.lane&=-536870913)}o&=~Ve}r!==0&&hn(t,r,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(v&~s))}function hn(t,s,o){t.pendingLanes|=s,t.suspendedLanes&=~s;var r=31-xe(s);t.entangledLanes|=s,t.entanglements[r]=t.entanglements[r]|1073741824|o&261930}function Ot(t,s){var o=t.entangledLanes|=s;for(t=t.entanglements;o;){var r=31-xe(o),f=1<<r;f&s|t[r]&s&&(t[r]|=s),o&=~f}}function jt(t,s){var o=s&-s;return o=(o&42)!==0?1:mn(o),(o&(t.suspendedLanes|s))!==0?0:o}function mn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function en(){var t=oe.p;return t!==0?t:(t=window.event,t===void 0?32:sy(t.type))}function gn(t,s){var o=oe.p;try{return oe.p=t,s()}finally{oe.p=o}}var nn=Math.random().toString(36).slice(2),zt="__reactFiber$"+nn,on="__reactProps$"+nn,Qe="__reactContainer$"+nn,zn="__reactEvents$"+nn,$n="__reactListeners$"+nn,Ds="__reactHandles$"+nn,Un="__reactResources$"+nn,bo="__reactMarker$"+nn;function Ys(t){delete t[zt],delete t[on],delete t[zn],delete t[$n],delete t[Ds]}function co(t){var s=t[zt];if(s)return s;for(var o=t.parentNode;o;){if(s=o[Qe]||o[zt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(t=H0(t);t!==null;){if(o=t[zt])return o;t=H0(t)}return s}t=o,o=t.parentNode}return null}function Ws(t){if(t=t[zt]||t[Qe]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function tn(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(a(33))}function kn(t){var s=t[Un];return s||(s=t[Un]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function bn(t){t[bo]=!0}var Fs=new Set,Bn={};function hs(t,s){sn(t,s),sn(t+"Capture",s)}function sn(t,s){for(Bn[t]=s,t=0;t<s.length;t++)Fs.add(s[t])}var ts=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vo={},bs={};function eo(t){return Re.call(bs,t)?!0:Re.call(vo,t)?!1:ts.test(t)?bs[t]=!0:(vo[t]=!0,!1)}function Rs(t,s,o){if(eo(s))if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+o)}}function qn(t,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+o)}}function _s(t,s,o,r){if(r===null)t.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(s,o,""+r)}}function jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uo(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ci(t,s,o){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(t,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function wo(t){if(!t._valueTracker){var s=Uo(t)?"checked":"value";t._valueTracker=ci(t,s,""+t[s])}}function ra(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return t&&(r=Uo(t)?t.checked?"true":"false":t.value),t=r,t!==o?(s.setValue(t),!0):!1}function Bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xs=/[\n"\\]/g;function ks(t){return t.replace(Xs,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Kn(t,s,o,r,f,m,v,D){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),s!=null?v==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+jn(s)):t.value!==""+jn(s)&&(t.value=""+jn(s)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),s!=null?Gs(t,v,jn(s)):o!=null?Gs(t,v,jn(o)):r!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+jn(D):t.removeAttribute("name")}function Sn(t,s,o,r,f,m,v,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){wo(t);return}o=o!=null?""+jn(o):"",s=s!=null?""+jn(s):o,D||s===t.value||(t.value=s),t.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=D?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),wo(t)}function Gs(t,s,o){s==="number"&&Bs(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function vn(t,s,o,r){if(t=t.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=s.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&r&&(t[o].defaultSelected=!0)}else{for(o=""+jn(o),s=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,r&&(t[f].defaultSelected=!0);return}s!==null||t[f].disabled||(s=t[f])}s!==null&&(s.selected=!0)}}function ms(t,s,o){if(s!=null&&(s=""+jn(s),s!==t.value&&(t.value=s),o==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=o!=null?""+jn(o):""}function Si(t,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(he(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=jn(s),t.defaultValue=o,r=t.textContent,r===o&&r!==""&&r!==null&&(t.value=r),wo(t)}function Vo(t,s){if(s){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=s;return}}t.textContent=s}var Ci=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qt(t,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":r?t.setProperty(s,o):typeof o!="number"||o===0||Ci.has(s)?s==="float"?t.cssFloat=o:t[s]=(""+o).trim():t[s]=o+"px"}function Ls(t,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(t=t.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&qt(t,f,r)}else for(var m in s)s.hasOwnProperty(m)&&qt(t,m,s[m])}function Vn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ji=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Os(t){return ji.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function uo(){}var to=null;function ls(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dn=null,js=null;function gs(t){var s=Ws(t);if(s&&(t=s.stateNode)){var o=t[on]||null;e:switch(t=s.stateNode,s.type){case"input":if(Kn(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ks(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==t&&r.form===t.form){var f=r[on]||null;if(!f)throw Error(a(90));Kn(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===t.form&&ra(r)}break e;case"textarea":ms(t,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&vn(t,!!o.multiple,s,!1)}}}var Ms=!1;function zs(t,s,o){if(Ms)return t(s,o);Ms=!0;try{var r=t(s);return r}finally{if(Ms=!1,(Dn!==null||js!==null)&&(Ru(),Dn&&(s=Dn,t=js,js=Dn=null,gs(s),t)))for(s=0;s<t.length;s++)gs(t[s])}}function yn(t,s){var o=t.stateNode;if(o===null)return null;var r=o[on]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var qs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$s=!1;if(qs)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{$s=!1}var Es=null,ui=null,Zo=null;function Jo(){if(Zo)return Zo;var t,s=ui,o=s.length,r,f="value"in Es?Es.value:Es.textContent,m=f.length;for(t=0;t<o&&s[t]===f[t];t++);var v=o-t;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return Zo=f.slice(t,1<r?1-r:void 0)}function fo(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function Ao(){return!0}function di(){return!1}function cs(t){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ao:di,this.isPropagationStopped=di,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),s}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=cs(ho),Ts=x({},ho,{view:0,detail:0}),mo=cs(Ts),Wo,As,wn,po=x({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wn&&(wn&&t.type==="mousemove"?(Wo=t.screenX-wn.screenX,As=t.screenY-wn.screenY):As=Wo=0,wn=t),Wo)},movementY:function(t){return"movementY"in t?t.movementY:As}}),us=cs(po),Tn=x({},po,{dataTransfer:0}),Fo=cs(Tn),vs=x({},Ts,{relatedTarget:0}),No=cs(vs),fi=x({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Mi=cs(fi),ei=x({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ti=cs(ei),Xo=x({},ho,{data:0}),At=cs(Xo),no={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $i(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=zi[t])?!!s[t]:!1}function So(){return $i}var Do=x({},Ts,{key:function(t){if(t.key){var s=no[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qi[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(t){return t.type==="keypress"?fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Co=cs(Do),hi=x({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M=cs(hi),F=x({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),de=cs(F),Ae=x({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pe=cs(Ae),lt=x({},po,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yt=cs(lt),Ht=x({},ho,{newState:0,oldState:0}),Zt=cs(Ht),xt=[9,13,27,32],un=qs&&"CompositionEvent"in window,an=null;qs&&"documentMode"in document&&(an=document.documentMode);var Gn=qs&&"TextEvent"in window&&!an,Is=qs&&(!un||an&&8<an&&11>=an),Kt=" ",Ut=!1;function Yn(t,s){switch(t){case"keyup":return xt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _o(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function Ei(t,s){switch(t){case"compositionend":return _o(s);case"keypress":return s.which!==32?null:(Ut=!0,Kt);case"textInput":return t=s.data,t===Kt&&Ut?null:t;default:return null}}function go(t,s){if(Ns)return t==="compositionend"||!un&&Yn(t,s)?(t=Jo(),Zo=ui=Es=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Is&&s.locale!=="ko"?null:s.data;default:return null}}var ko={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!ko[t.type]:s==="textarea"}function Ro(t,s,o,r){Dn?js?js.push(r):js=[r]:Dn=r,s=Pu(s,"onChange"),0<s.length&&(o=new Yo("onChange","change",null,o,r),t.push({event:o,listeners:s}))}var Mo=null,Go=null;function la(t){M0(t,0)}function B(t){var s=tn(t);if(ra(s))return t}function U(t,s){if(t==="change")return s}var w=!1;if(qs){var S;if(qs){var k="oninput"in document;if(!k){var R=document.createElement("div");R.setAttribute("oninput","return;"),k=typeof R.oninput=="function"}S=k}else S=!1;w=S&&(!document.documentMode||9<document.documentMode)}function z(){Mo&&(Mo.detachEvent("onpropertychange",J),Go=Mo=null)}function J(t){if(t.propertyName==="value"&&B(Go)){var s=[];Ro(s,Go,t,ls(t)),zs(la,s)}}function ae(t,s,o){t==="focusin"?(z(),Mo=s,Go=o,Mo.attachEvent("onpropertychange",J)):t==="focusout"&&z()}function Me(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return B(Go)}function Ge(t,s){if(t==="click")return B(s)}function G(t,s){if(t==="input"||t==="change")return B(s)}function re(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var le=typeof Object.is=="function"?Object.is:re;function Q(t,s){if(le(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var o=Object.keys(t),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Re.call(s,f)||!le(t[f],s[f]))return!1}return!0}function Ee(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ie(t,s){var o=Ee(t);t=0;for(var r;o;){if(o.nodeType===3){if(r=t+o.textContent.length,t<=s&&r>=s)return{node:o,offset:s-t};t=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ee(o)}}function at(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?at(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function ct(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=Bs(t.document);s instanceof t.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)t=s.contentWindow;else break;s=Bs(t.document)}return s}function St(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var ht=qs&&"documentMode"in document&&11>=document.documentMode,bt=null,dn=null,Ft=null,fn=!1;function Ln(t,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fn||bt==null||bt!==Bs(r)||(r=bt,"selectionStart"in r&&St(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ft&&Q(Ft,r)||(Ft=r,r=Pu(dn,"onSelect"),0<r.length&&(s=new Yo("onSelect","select",null,s,o),t.push({event:s,listeners:r}),s.target=bt)))}function On(t,s){var o={};return o[t.toLowerCase()]=s.toLowerCase(),o["Webkit"+t]="webkit"+s,o["Moz"+t]="moz"+s,o}var Eo={animationend:On("Animation","AnimationEnd"),animationiteration:On("Animation","AnimationIteration"),animationstart:On("Animation","AnimationStart"),transitionrun:On("Transition","TransitionRun"),transitionstart:On("Transition","TransitionStart"),transitioncancel:On("Transition","TransitionCancel"),transitionend:On("Transition","TransitionEnd")},Bo={},mi={};qs&&(mi=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function Wn(t){if(Bo[t])return Bo[t];if(!Eo[t])return t;var s=Eo[t],o;for(o in s)if(s.hasOwnProperty(o)&&o in mi)return Bo[t]=s[o];return t}var pi=Wn("animationend"),Ti=Wn("animationiteration"),gr=Wn("animationstart"),Wr=Wn("transitionrun"),Fr=Wn("transitionstart"),Xr=Wn("transitioncancel"),Ul=Wn("transitionend"),Vl=new Map,Gr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gr.push("scrollEnd");function _i(t,s){Vl.set(t,s),hs(s,[t])}var yr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],xa=0,qr=0;function xr(){for(var t=xa,s=qr=xa=0;s<t;){var o=ni[s];ni[s++]=null;var r=ni[s];ni[s++]=null;var f=ni[s];ni[s++]=null;var m=ni[s];if(ni[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Yl(o,f,m)}}function br(t,s,o,r){ni[xa++]=t,ni[xa++]=s,ni[xa++]=o,ni[xa++]=r,qr|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Kr(t,s,o,r){return br(t,s,o,r),vr(t)}function ca(t,s){return br(t,null,null,s),vr(t)}function Yl(t,s,o){t.lanes|=o;var r=t.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=t.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&s!==null&&(f=31-xe(o),t=m.hiddenUpdates,r=t[f],r===null?t[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function vr(t){if(50<fc)throw fc=0,mh=null,Error(a(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var ba={};function su(t,s,o,r){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,s,o,r){return new su(t,s,o,r)}function Qn(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ws(t,s){var o=t.alternate;return o===null?(o=Qt(t.tag,s,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=s,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,s=t.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function Ii(t,s){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,s=o.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function va(t,s,o,r,f,m){var v=0;if(r=t,typeof t=="function")Qn(t)&&(v=1);else if(typeof t=="string")v=Dv(t,o,ve.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case ue:return t=Qt(31,o,s,f),t.elementType=ue,t.lanes=m,t;case T:return Ks(o.children,f,m,s);case E:v=8,f|=24;break;case N:return t=Qt(12,o,s,f|2),t.elementType=N,t.lanes=m,t;case X:return t=Qt(13,o,s,f),t.elementType=X,t.lanes=m,t;case W:return t=Qt(19,o,s,f),t.elementType=W,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:v=10;break e;case H:v=9;break e;case A:v=11;break e;case Y:v=14;break e;case q:v=16,r=null;break e}v=29,o=Error(a(130,t===null?"null":typeof t,"")),r=null}return s=Qt(v,o,s,f),s.elementType=t,s.type=r,s.lanes=m,s}function Ks(t,s,o,r){return t=Qt(7,t,r,s),t.lanes=o,t}function Ss(t,s,o){return t=Qt(6,t,null,s),t.lanes=o,t}function u_(t){var s=Qt(18,null,null,0);return s.stateNode=t,s}function lf(t,s,o){return s=Qt(4,t.children!==null?t.children:[],t.key,s),s.lanes=o,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var d_=new WeakMap;function Pi(t,s){if(typeof t=="object"&&t!==null){var o=d_.get(t);return o!==void 0?o:(s={value:t,source:s,stack:Z(s)},d_.set(t,s),s)}return{value:t,source:s,stack:Z(s)}}var Qr=[],Zr=0,ou=null,Wl=0,Hi=[],Ui=0,Ha=null,ua=1,da="";function wa(t,s){Qr[Zr++]=Wl,Qr[Zr++]=ou,ou=t,Wl=s}function f_(t,s,o){Hi[Ui++]=ua,Hi[Ui++]=da,Hi[Ui++]=Ha,Ha=t;var r=ua;t=da;var f=32-xe(r)-1;r&=~(1<<f),o+=1;var m=32-xe(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ua=1<<32-xe(s)+f|o<<f|r,da=m+t}else ua=1<<m|o<<f|r,da=t}function cf(t){t.return!==null&&(wa(t,1),f_(t,1,0))}function uf(t){for(;t===ou;)ou=Qr[--Zr],Qr[Zr]=null,Wl=Qr[--Zr],Qr[Zr]=null;for(;t===Ha;)Ha=Hi[--Ui],Hi[Ui]=null,da=Hi[--Ui],Hi[Ui]=null,ua=Hi[--Ui],Hi[Ui]=null}function h_(t,s){Hi[Ui++]=ua,Hi[Ui++]=da,Hi[Ui++]=Ha,ua=s.id,da=s.overflow,Ha=t}var Lo=null,ys=null,Rn=!1,Ua=null,Vi=!1,df=Error(a(519));function Va(t){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(Pi(s,t)),df}function m_(t){var s=t.stateNode,o=t.type,r=t.memoizedProps;switch(s[zt]=t,s[on]=r,o){case"dialog":En("cancel",s),En("close",s);break;case"iframe":case"object":case"embed":En("load",s);break;case"video":case"audio":for(o=0;o<mc.length;o++)En(mc[o],s);break;case"source":En("error",s);break;case"img":case"image":case"link":En("error",s),En("load",s);break;case"details":En("toggle",s);break;case"input":En("invalid",s),Sn(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":En("invalid",s);break;case"textarea":En("invalid",s),Si(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||N0(s.textContent,o)?(r.popover!=null&&(En("beforetoggle",s),En("toggle",s)),r.onScroll!=null&&En("scroll",s),r.onScrollEnd!=null&&En("scrollend",s),r.onClick!=null&&(s.onclick=uo),s=!0):s=!1,s||Va(t,!0)}function p_(t){for(Lo=t.return;Lo;)switch(Lo.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Lo=Lo.return}}function Jr(t){if(t!==Lo)return!1;if(!Rn)return p_(t),Rn=!0,!1;var s=t.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||Th(t.type,t.memoizedProps)),o=!o),o&&ys&&Va(t),p_(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ys=P0(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ys=P0(t)}else s===27?(s=ys,sr(t.type)?(t=Bh,Bh=null,ys=t):ys=s):ys=Lo?Wi(t.stateNode.nextSibling):null;return!0}function wr(){ys=Lo=null,Rn=!1}function ff(){var t=Ua;return t!==null&&(bi===null?bi=t:bi.push.apply(bi,t),Ua=null),t}function Fl(t){Ua===null?Ua=[t]:Ua.push(t)}var hf=$(null),Sr=null,Sa=null;function Ya(t,s,o){ee(hf,s._currentValue),s._currentValue=o}function Ca(t){t._currentValue=hf.current,ie(hf)}function mf(t,s,o){for(;t!==null;){var r=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),t===o)break;t=t.return}}function pf(t,s,o,r){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var D=m;m=f;for(var K=0;K<s.length;K++)if(D.context===s[K]){m.lanes|=o,D=m.alternate,D!==null&&(D.lanes|=o),mf(m.return,o,t),r||(v=null);break e}m=D.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),mf(v,o,t),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===t){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function el(t,s,o,r){t=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var D=f.type;le(f.pendingProps.value,v.value)||(t!==null?t.push(D):t=[D])}}else if(f===Oe.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(xc):t=[xc])}f=f.return}t!==null&&pf(s,t,o,r),s.flags|=262144}function iu(t){for(t=t.firstContext;t!==null;){if(!le(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Sr=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Oo(t){return __(Sr,t)}function au(t,s){return Sr===null&&Cr(t),__(t,s)}function __(t,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Sa===null){if(t===null)throw Error(a(308));Sa=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else Sa=Sa.next=s;return o}var E2=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(o,r){t.push(r)}};this.abort=function(){s.aborted=!0,t.forEach(function(o){return o()})}},T2=e.unstable_scheduleCallback,A2=e.unstable_NormalPriority,so={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _f(){return{controller:new E2,data:new Map,refCount:0}}function Xl(t){t.refCount--,t.refCount===0&&T2(A2,function(){t.controller.abort()})}var Gl=null,gf=0,tl=0,nl=null;function N2(t,s){if(Gl===null){var o=Gl=[];gf=0,tl=bh(),nl={status:"pending",value:void 0,then:function(r){o.push(r)}}}return gf++,s.then(g_,g_),s}function g_(){if(--gf===0&&Gl!==null){nl!==null&&(nl.status="fulfilled");var t=Gl;Gl=null,tl=0,nl=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function D2(t,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return t.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var y_=O.S;O.S=function(t,s){t0=vt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&N2(t,s),y_!==null&&y_(t,s)};var kr=$(null);function yf(){var t=kr.current;return t!==null?t:ds.pooledCache}function ru(t,s){s===null?ee(kr,kr.current):ee(kr,s.pool)}function x_(){var t=yf();return t===null?null:{parent:so._currentValue,pool:t}}var sl=Error(a(460)),xf=Error(a(474)),lu=Error(a(542)),cu={then:function(){}};function b_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function v_(t,s,o){switch(o=t[o],o===void 0?t.push(s):o!==s&&(s.then(uo,uo),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,S_(t),t;default:if(typeof s.status=="string")s.then(uo,uo);else{if(t=ds,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=s,t.status="pending",t.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,S_(t),t}throw Mr=s,sl}}function jr(t){try{var s=t._init;return s(t._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Mr=o,sl):o}}var Mr=null;function w_(){if(Mr===null)throw Error(a(459));var t=Mr;return Mr=null,t}function S_(t){if(t===sl||t===lu)throw Error(a(483))}var ol=null,ql=0;function uu(t){var s=ql;return ql+=1,ol===null&&(ol=[]),v_(ol,t,s)}function Kl(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function du(t,s){throw s.$$typeof===b?Error(a(525)):(t=Object.prototype.toString.call(s),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function C_(t){function s(ce,ne){if(t){var ge=ce.deletions;ge===null?(ce.deletions=[ne],ce.flags|=16):ge.push(ne)}}function o(ce,ne){if(!t)return null;for(;ne!==null;)s(ce,ne),ne=ne.sibling;return null}function r(ce){for(var ne=new Map;ce!==null;)ce.key!==null?ne.set(ce.key,ce):ne.set(ce.index,ce),ce=ce.sibling;return ne}function f(ce,ne){return ce=ws(ce,ne),ce.index=0,ce.sibling=null,ce}function m(ce,ne,ge){return ce.index=ge,t?(ge=ce.alternate,ge!==null?(ge=ge.index,ge<ne?(ce.flags|=67108866,ne):ge):(ce.flags|=67108866,ne)):(ce.flags|=1048576,ne)}function v(ce){return t&&ce.alternate===null&&(ce.flags|=67108866),ce}function D(ce,ne,ge,He){return ne===null||ne.tag!==6?(ne=Ss(ge,ce.mode,He),ne.return=ce,ne):(ne=f(ne,ge),ne.return=ce,ne)}function K(ce,ne,ge,He){var Vt=ge.type;return Vt===T?Le(ce,ne,ge.props.children,He,ge.key):ne!==null&&(ne.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===q&&jr(Vt)===ne.type)?(ne=f(ne,ge.props),Kl(ne,ge),ne.return=ce,ne):(ne=va(ge.type,ge.key,ge.props,null,ce.mode,He),Kl(ne,ge),ne.return=ce,ne)}function ye(ce,ne,ge,He){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ge.containerInfo||ne.stateNode.implementation!==ge.implementation?(ne=lf(ge,ce.mode,He),ne.return=ce,ne):(ne=f(ne,ge.children||[]),ne.return=ce,ne)}function Le(ce,ne,ge,He,Vt){return ne===null||ne.tag!==7?(ne=Ks(ge,ce.mode,He,Vt),ne.return=ce,ne):(ne=f(ne,ge),ne.return=ce,ne)}function Ve(ce,ne,ge){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ne=Ss(""+ne,ce.mode,ge),ne.return=ce,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case C:return ge=va(ne.type,ne.key,ne.props,null,ce.mode,ge),Kl(ge,ne),ge.return=ce,ge;case j:return ne=lf(ne,ce.mode,ge),ne.return=ce,ne;case q:return ne=jr(ne),Ve(ce,ne,ge)}if(he(ne)||De(ne))return ne=Ks(ne,ce.mode,ge,null),ne.return=ce,ne;if(typeof ne.then=="function")return Ve(ce,uu(ne),ge);if(ne.$$typeof===L)return Ve(ce,au(ce,ne),ge);du(ce,ne)}return null}function we(ce,ne,ge,He){var Vt=ne!==null?ne.key:null;if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Vt!==null?null:D(ce,ne,""+ge,He);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case C:return ge.key===Vt?K(ce,ne,ge,He):null;case j:return ge.key===Vt?ye(ce,ne,ge,He):null;case q:return ge=jr(ge),we(ce,ne,ge,He)}if(he(ge)||De(ge))return Vt!==null?null:Le(ce,ne,ge,He,null);if(typeof ge.then=="function")return we(ce,ne,uu(ge),He);if(ge.$$typeof===L)return we(ce,ne,au(ce,ge),He);du(ce,ge)}return null}function ke(ce,ne,ge,He,Vt){if(typeof He=="string"&&He!==""||typeof He=="number"||typeof He=="bigint")return ce=ce.get(ge)||null,D(ne,ce,""+He,Vt);if(typeof He=="object"&&He!==null){switch(He.$$typeof){case C:return ce=ce.get(He.key===null?ge:He.key)||null,K(ne,ce,He,Vt);case j:return ce=ce.get(He.key===null?ge:He.key)||null,ye(ne,ce,He,Vt);case q:return He=jr(He),ke(ce,ne,ge,He,Vt)}if(he(He)||De(He))return ce=ce.get(ge)||null,Le(ne,ce,He,Vt,null);if(typeof He.then=="function")return ke(ce,ne,ge,uu(He),Vt);if(He.$$typeof===L)return ke(ce,ne,ge,au(ne,He),Vt);du(ne,He)}return null}function Rt(ce,ne,ge,He){for(var Vt=null,In=null,It=ne,xn=ne=0,Nn=null;It!==null&&xn<ge.length;xn++){It.index>xn?(Nn=It,It=null):Nn=It.sibling;var Pn=we(ce,It,ge[xn],He);if(Pn===null){It===null&&(It=Nn);break}t&&It&&Pn.alternate===null&&s(ce,It),ne=m(Pn,ne,xn),In===null?Vt=Pn:In.sibling=Pn,In=Pn,It=Nn}if(xn===ge.length)return o(ce,It),Rn&&wa(ce,xn),Vt;if(It===null){for(;xn<ge.length;xn++)It=Ve(ce,ge[xn],He),It!==null&&(ne=m(It,ne,xn),In===null?Vt=It:In.sibling=It,In=It);return Rn&&wa(ce,xn),Vt}for(It=r(It);xn<ge.length;xn++)Nn=ke(It,ce,xn,ge[xn],He),Nn!==null&&(t&&Nn.alternate!==null&&It.delete(Nn.key===null?xn:Nn.key),ne=m(Nn,ne,xn),In===null?Vt=Nn:In.sibling=Nn,In=Nn);return t&&It.forEach(function(lr){return s(ce,lr)}),Rn&&wa(ce,xn),Vt}function Xt(ce,ne,ge,He){if(ge==null)throw Error(a(151));for(var Vt=null,In=null,It=ne,xn=ne=0,Nn=null,Pn=ge.next();It!==null&&!Pn.done;xn++,Pn=ge.next()){It.index>xn?(Nn=It,It=null):Nn=It.sibling;var lr=we(ce,It,Pn.value,He);if(lr===null){It===null&&(It=Nn);break}t&&It&&lr.alternate===null&&s(ce,It),ne=m(lr,ne,xn),In===null?Vt=lr:In.sibling=lr,In=lr,It=Nn}if(Pn.done)return o(ce,It),Rn&&wa(ce,xn),Vt;if(It===null){for(;!Pn.done;xn++,Pn=ge.next())Pn=Ve(ce,Pn.value,He),Pn!==null&&(ne=m(Pn,ne,xn),In===null?Vt=Pn:In.sibling=Pn,In=Pn);return Rn&&wa(ce,xn),Vt}for(It=r(It);!Pn.done;xn++,Pn=ge.next())Pn=ke(It,ce,xn,Pn.value,He),Pn!==null&&(t&&Pn.alternate!==null&&It.delete(Pn.key===null?xn:Pn.key),ne=m(Pn,ne,xn),In===null?Vt=Pn:In.sibling=Pn,In=Pn);return t&&It.forEach(function(Vv){return s(ce,Vv)}),Rn&&wa(ce,xn),Vt}function os(ce,ne,ge,He){if(typeof ge=="object"&&ge!==null&&ge.type===T&&ge.key===null&&(ge=ge.props.children),typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case C:e:{for(var Vt=ge.key;ne!==null;){if(ne.key===Vt){if(Vt=ge.type,Vt===T){if(ne.tag===7){o(ce,ne.sibling),He=f(ne,ge.props.children),He.return=ce,ce=He;break e}}else if(ne.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===q&&jr(Vt)===ne.type){o(ce,ne.sibling),He=f(ne,ge.props),Kl(He,ge),He.return=ce,ce=He;break e}o(ce,ne);break}else s(ce,ne);ne=ne.sibling}ge.type===T?(He=Ks(ge.props.children,ce.mode,He,ge.key),He.return=ce,ce=He):(He=va(ge.type,ge.key,ge.props,null,ce.mode,He),Kl(He,ge),He.return=ce,ce=He)}return v(ce);case j:e:{for(Vt=ge.key;ne!==null;){if(ne.key===Vt)if(ne.tag===4&&ne.stateNode.containerInfo===ge.containerInfo&&ne.stateNode.implementation===ge.implementation){o(ce,ne.sibling),He=f(ne,ge.children||[]),He.return=ce,ce=He;break e}else{o(ce,ne);break}else s(ce,ne);ne=ne.sibling}He=lf(ge,ce.mode,He),He.return=ce,ce=He}return v(ce);case q:return ge=jr(ge),os(ce,ne,ge,He)}if(he(ge))return Rt(ce,ne,ge,He);if(De(ge)){if(Vt=De(ge),typeof Vt!="function")throw Error(a(150));return ge=Vt.call(ge),Xt(ce,ne,ge,He)}if(typeof ge.then=="function")return os(ce,ne,uu(ge),He);if(ge.$$typeof===L)return os(ce,ne,au(ce,ge),He);du(ce,ge)}return typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint"?(ge=""+ge,ne!==null&&ne.tag===6?(o(ce,ne.sibling),He=f(ne,ge),He.return=ce,ce=He):(o(ce,ne),He=Ss(ge,ce.mode,He),He.return=ce,ce=He),v(ce)):o(ce,ne)}return function(ce,ne,ge,He){try{ql=0;var Vt=os(ce,ne,ge,He);return ol=null,Vt}catch(It){if(It===sl||It===lu)throw It;var In=Qt(29,It,null,ce.mode);return In.lanes=He,In.return=ce,In}finally{}}}var Er=C_(!0),k_=C_(!1),Wa=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,s,o){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Fn&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=vr(t),Yl(t,null,o),s}return br(t,r,s,o),vr(t)}function Ql(t,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Ot(t,o)}}function wf(t,s){var o=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=s:t.next=s,o.lastBaseUpdate=s}var Sf=!1;function Zl(){if(Sf){var t=nl;if(t!==null)throw t}}function Jl(t,s,o,r){Sf=!1;var f=t.updateQueue;Wa=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var K=D,ye=K.next;K.next=null,v===null?m=ye:v.next=ye,v=K;var Le=t.alternate;Le!==null&&(Le=Le.updateQueue,D=Le.lastBaseUpdate,D!==v&&(D===null?Le.firstBaseUpdate=ye:D.next=ye,Le.lastBaseUpdate=K))}if(m!==null){var Ve=f.baseState;v=0,Le=ye=K=null,D=m;do{var we=D.lane&-536870913,ke=we!==D.lane;if(ke?(An&we)===we:(r&we)===we){we!==0&&we===tl&&(Sf=!0),Le!==null&&(Le=Le.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Rt=t,Xt=D;we=s;var os=o;switch(Xt.tag){case 1:if(Rt=Xt.payload,typeof Rt=="function"){Ve=Rt.call(os,Ve,we);break e}Ve=Rt;break e;case 3:Rt.flags=Rt.flags&-65537|128;case 0:if(Rt=Xt.payload,we=typeof Rt=="function"?Rt.call(os,Ve,we):Rt,we==null)break e;Ve=x({},Ve,we);break e;case 2:Wa=!0}}we=D.callback,we!==null&&(t.flags|=64,ke&&(t.flags|=8192),ke=f.callbacks,ke===null?f.callbacks=[we]:ke.push(we))}else ke={lane:we,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Le===null?(ye=Le=ke,K=Ve):Le=Le.next=ke,v|=we;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ke=D,D=ke.next,ke.next=null,f.lastBaseUpdate=ke,f.shared.pending=null}}while(!0);Le===null&&(K=Ve),f.baseState=K,f.firstBaseUpdate=ye,f.lastBaseUpdate=Le,m===null&&(f.shared.lanes=0),Za|=v,t.lanes=v,t.memoizedState=Ve}}function j_(t,s){if(typeof t!="function")throw Error(a(191,t));t.call(s)}function M_(t,s){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)j_(o[t],s)}var il=$(null),fu=$(0);function E_(t,s){t=Ra,ee(fu,t),ee(il,s),Ra=t|s.baseLanes}function Cf(){ee(fu,Ra),ee(il,il.current)}function kf(){Ra=fu.current,ie(il),ie(fu)}var Ai=$(null),Yi=null;function Ga(t){var s=t.alternate;ee(Qs,Qs.current&1),ee(Ai,t),Yi===null&&(s===null||il.current!==null||s.memoizedState!==null)&&(Yi=t)}function jf(t){ee(Qs,Qs.current),ee(Ai,t),Yi===null&&(Yi=t)}function T_(t){t.tag===22?(ee(Qs,Qs.current),ee(Ai,t),Yi===null&&(Yi=t)):qa()}function qa(){ee(Qs,Qs.current),ee(Ai,Ai.current)}function Ni(t){ie(Ai),Yi===t&&(Yi=null),ie(Qs)}var Qs=$(0);function hu(t){for(var s=t;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Dh(o)||Rh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ka=0,pn=null,ns=null,oo=null,mu=!1,al=!1,Tr=!1,pu=0,ec=0,rl=null,R2=0;function Ps(){throw Error(a(321))}function Mf(t,s){if(s===null)return!1;for(var o=0;o<s.length&&o<t.length;o++)if(!le(t[o],s[o]))return!1;return!0}function Ef(t,s,o,r,f,m){return ka=m,pn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,O.H=t===null||t.memoizedState===null?fg:Vf,Tr=!1,m=o(r,f),Tr=!1,al&&(m=N_(s,o,r,f)),A_(t),m}function A_(t){O.H=sc;var s=ns!==null&&ns.next!==null;if(ka=0,oo=ns=pn=null,mu=!1,ec=0,rl=null,s)throw Error(a(300));t===null||io||(t=t.dependencies,t!==null&&iu(t)&&(io=!0))}function N_(t,s,o,r){pn=t;var f=0;do{if(al&&(rl=null),ec=0,al=!1,25<=f)throw Error(a(301));if(f+=1,oo=ns=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=hg,m=s(o,r)}while(al);return m}function B2(){var t=O.H,s=t.useState()[0];return s=typeof s.then=="function"?tc(s):s,t=t.useState()[0],(ns!==null?ns.memoizedState:null)!==t&&(pn.flags|=1024),s}function Tf(){var t=pu!==0;return pu=0,t}function Af(t,s,o){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~o}function Nf(t){if(mu){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}mu=!1}ka=0,oo=ns=pn=null,al=!1,ec=pu=0,rl=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oo===null?pn.memoizedState=oo=t:oo=oo.next=t,oo}function Zs(){if(ns===null){var t=pn.alternate;t=t!==null?t.memoizedState:null}else t=ns.next;var s=oo===null?pn.memoizedState:oo.next;if(s!==null)oo=s,ns=t;else{if(t===null)throw pn.alternate===null?Error(a(467)):Error(a(310));ns=t,t={memoizedState:ns.memoizedState,baseState:ns.baseState,baseQueue:ns.baseQueue,queue:ns.queue,next:null},oo===null?pn.memoizedState=oo=t:oo=oo.next=t}return oo}function _u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tc(t){var s=ec;return ec+=1,rl===null&&(rl=[]),t=v_(rl,t,s),s=pn,(oo===null?s.memoizedState:oo.next)===null&&(s=s.alternate,O.H=s===null||s.memoizedState===null?fg:Vf),t}function gu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tc(t);if(t.$$typeof===L)return Oo(t)}throw Error(a(438,String(t)))}function Df(t){var s=null,o=pn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=pn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=_u(),pn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(t),r=0;r<t;r++)o[r]=fe;return s.index++,o}function ja(t,s){return typeof s=="function"?s(t):s}function yu(t){var s=Zs();return Rf(s,ns,t)}function Rf(t,s,o){var r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=t.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{s=f.next;var D=v=null,K=null,ye=s,Le=!1;do{var Ve=ye.lane&-536870913;if(Ve!==ye.lane?(An&Ve)===Ve:(ka&Ve)===Ve){var we=ye.revertLane;if(we===0)K!==null&&(K=K.next={lane:0,revertLane:0,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null}),Ve===tl&&(Le=!0);else if((ka&we)===we){ye=ye.next,we===tl&&(Le=!0);continue}else Ve={lane:0,revertLane:ye.revertLane,gesture:null,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},K===null?(D=K=Ve,v=m):K=K.next=Ve,pn.lanes|=we,Za|=we;Ve=ye.action,Tr&&o(m,Ve),m=ye.hasEagerState?ye.eagerState:o(m,Ve)}else we={lane:Ve,revertLane:ye.revertLane,gesture:ye.gesture,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null},K===null?(D=K=we,v=m):K=K.next=we,pn.lanes|=Ve,Za|=Ve;ye=ye.next}while(ye!==null&&ye!==s);if(K===null?v=m:K.next=D,!le(m,t.memoizedState)&&(io=!0,Le&&(o=nl,o!==null)))throw o;t.memoizedState=m,t.baseState=v,t.baseQueue=K,r.lastRenderedState=m}return f===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Bf(t){var s=Zs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=t(m,v.action),v=v.next;while(v!==f);le(m,s.memoizedState)||(io=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function D_(t,s,o){var r=pn,f=Zs(),m=Rn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!le((ns||f).memoizedState,o);if(v&&(f.memoizedState=o,io=!0),f=f.queue,zf(L_.bind(null,r,f,t),[t]),f.getSnapshot!==s||v||oo!==null&&oo.memoizedState.tag&1){if(r.flags|=2048,ll(9,{destroy:void 0},B_.bind(null,r,f,o,s),null),ds===null)throw Error(a(349));m||(ka&127)!==0||R_(r,s,o)}return o}function R_(t,s,o){t.flags|=16384,t={getSnapshot:s,value:o},s=pn.updateQueue,s===null?(s=_u(),pn.updateQueue=s,s.stores=[t]):(o=s.stores,o===null?s.stores=[t]:o.push(t))}function B_(t,s,o,r){s.value=o,s.getSnapshot=r,O_(s)&&z_(t)}function L_(t,s,o){return o(function(){O_(s)&&z_(t)})}function O_(t){var s=t.getSnapshot;t=t.value;try{var o=s();return!le(t,o)}catch{return!0}}function z_(t){var s=ca(t,2);s!==null&&vi(s,t,2)}function Lf(t){var s=si();if(typeof t=="function"){var o=t;if(t=o(),Tr){Ne(!0);try{o()}finally{Ne(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},s}function $_(t,s,o,r){return t.baseState=o,Rf(t,ns,typeof r=="function"?r:ja)}function L2(t,s,o,r,f){if(vu(t))throw Error(a(485));if(t=s.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};O.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,I_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function I_(t,s){var o=s.action,r=s.payload,f=t.state;if(s.isTransition){var m=O.T,v={};O.T=v;try{var D=o(f,r),K=O.S;K!==null&&K(v,D),P_(t,s,D)}catch(ye){Of(t,s,ye)}finally{m!==null&&v.types!==null&&(m.types=v.types),O.T=m}}else try{m=o(f,r),P_(t,s,m)}catch(ye){Of(t,s,ye)}}function P_(t,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){H_(t,s,r)},function(r){return Of(t,s,r)}):H_(t,s,o)}function H_(t,s,o){s.status="fulfilled",s.value=o,U_(s),t.state=o,s=t.pending,s!==null&&(o=s.next,o===s?t.pending=null:(o=o.next,s.next=o,I_(t,o)))}function Of(t,s,o){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,U_(s),s=s.next;while(s!==r)}t.action=null}function U_(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function V_(t,s){return s}function Y_(t,s){if(Rn){var o=ds.formState;if(o!==null){e:{var r=pn;if(Rn){if(ys){t:{for(var f=ys,m=Vi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Wi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ys=Wi(f.nextSibling),r=f.data==="F!";break e}}Va(r)}r=!1}r&&(s=o[0])}}return o=si(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:V_,lastRenderedState:s},o.queue=r,o=cg.bind(null,pn,r),r.dispatch=o,r=Lf(!1),m=Uf.bind(null,pn,!1,r.queue),r=si(),f={state:s,dispatch:null,action:t,pending:null},r.queue=f,o=L2.bind(null,pn,f,m,o),f.dispatch=o,r.memoizedState=t,[s,o,!1]}function W_(t){var s=Zs();return F_(s,ns,t)}function F_(t,s,o){if(s=Rf(t,s,V_)[0],t=yu(ja)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=tc(s)}catch(v){throw v===sl?lu:v}else r=s;s=Zs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(pn.flags|=2048,ll(9,{destroy:void 0},O2.bind(null,f,o),null)),[r,m,t]}function O2(t,s){t.action=s}function X_(t){var s=Zs(),o=ns;if(o!==null)return F_(s,o,t);Zs(),s=s.memoizedState,o=Zs();var r=o.queue.dispatch;return o.memoizedState=t,[s,r,!1]}function ll(t,s,o,r){return t={tag:t,create:o,deps:r,inst:s,next:null},s=pn.updateQueue,s===null&&(s=_u(),pn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=t.next=t:(r=o.next,o.next=t,t.next=r,s.lastEffect=t),t}function G_(){return Zs().memoizedState}function xu(t,s,o,r){var f=si();pn.flags|=t,f.memoizedState=ll(1|s,{destroy:void 0},o,r===void 0?null:r)}function bu(t,s,o,r){var f=Zs();r=r===void 0?null:r;var m=f.memoizedState.inst;ns!==null&&r!==null&&Mf(r,ns.memoizedState.deps)?f.memoizedState=ll(s,m,o,r):(pn.flags|=t,f.memoizedState=ll(1|s,m,o,r))}function q_(t,s){xu(8390656,8,t,s)}function zf(t,s){bu(2048,8,t,s)}function z2(t){pn.flags|=4;var s=pn.updateQueue;if(s===null)s=_u(),pn.updateQueue=s,s.events=[t];else{var o=s.events;o===null?s.events=[t]:o.push(t)}}function K_(t){var s=Zs().memoizedState;return z2({ref:s,nextImpl:t}),function(){if((Fn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function Q_(t,s){return bu(4,2,t,s)}function Z_(t,s){return bu(4,4,t,s)}function J_(t,s){if(typeof s=="function"){t=t();var o=s(t);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function eg(t,s,o){o=o!=null?o.concat([t]):null,bu(4,4,J_.bind(null,s,t),o)}function $f(){}function tg(t,s){var o=Zs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&Mf(s,r[1])?r[0]:(o.memoizedState=[t,s],t)}function ng(t,s){var o=Zs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&Mf(s,r[1]))return r[0];if(r=t(),Tr){Ne(!0);try{t()}finally{Ne(!1)}}return o.memoizedState=[r,s],r}function If(t,s,o){return o===void 0||(ka&1073741824)!==0&&(An&261930)===0?t.memoizedState=s:(t.memoizedState=o,t=s0(),pn.lanes|=t,Za|=t,o)}function sg(t,s,o,r){return le(o,s)?o:il.current!==null?(t=If(t,o,r),le(t,s)||(io=!0),t):(ka&42)===0||(ka&1073741824)!==0&&(An&261930)===0?(io=!0,t.memoizedState=o):(t=s0(),pn.lanes|=t,Za|=t,s)}function og(t,s,o,r,f){var m=oe.p;oe.p=m!==0&&8>m?m:8;var v=O.T,D={};O.T=D,Uf(t,!1,s,o);try{var K=f(),ye=O.S;if(ye!==null&&ye(D,K),K!==null&&typeof K=="object"&&typeof K.then=="function"){var Le=D2(K,r);nc(t,s,Le,Bi(t))}else nc(t,s,r,Bi(t))}catch(Ve){nc(t,s,{then:function(){},status:"rejected",reason:Ve},Bi())}finally{oe.p=m,v!==null&&D.types!==null&&(v.types=D.types),O.T=v}}function $2(){}function Pf(t,s,o,r){if(t.tag!==5)throw Error(a(476));var f=ig(t).queue;og(t,f,s,P,o===null?$2:function(){return ag(t),o(r)})}function ig(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:P},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:o},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function ag(t){var s=ig(t);s.next===null&&(s=t.alternate.memoizedState),nc(t,s.next.queue,{},Bi())}function Hf(){return Oo(xc)}function rg(){return Zs().memoizedState}function lg(){return Zs().memoizedState}function I2(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var o=Bi();t=Fa(o);var r=Xa(s,t,o);r!==null&&(vi(r,s,o),Ql(r,s,o)),s={cache:_f()},t.payload=s;return}s=s.return}}function P2(t,s,o){var r=Bi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vu(t)?ug(s,o):(o=Kr(t,s,o,r),o!==null&&(vi(o,t,r),dg(o,s,r)))}function cg(t,s,o){var r=Bi();nc(t,s,o,r)}function nc(t,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(vu(t))ug(s,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,D=m(v,o);if(f.hasEagerState=!0,f.eagerState=D,le(D,v))return br(t,s,f,0),ds===null&&xr(),!1}catch{}finally{}if(o=Kr(t,s,f,r),o!==null)return vi(o,t,r),dg(o,s,r),!0}return!1}function Uf(t,s,o,r){if(r={lane:2,revertLane:bh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vu(t)){if(s)throw Error(a(479))}else s=Kr(t,o,r,2),s!==null&&vi(s,t,2)}function vu(t){var s=t.alternate;return t===pn||s!==null&&s===pn}function ug(t,s){al=mu=!0;var o=t.pending;o===null?s.next=s:(s.next=o.next,o.next=s),t.pending=s}function dg(t,s,o){if((o&4194048)!==0){var r=s.lanes;r&=t.pendingLanes,o|=r,s.lanes=o,Ot(t,o)}}var sc={readContext:Oo,use:gu,useCallback:Ps,useContext:Ps,useEffect:Ps,useImperativeHandle:Ps,useLayoutEffect:Ps,useInsertionEffect:Ps,useMemo:Ps,useReducer:Ps,useRef:Ps,useState:Ps,useDebugValue:Ps,useDeferredValue:Ps,useTransition:Ps,useSyncExternalStore:Ps,useId:Ps,useHostTransitionStatus:Ps,useFormState:Ps,useActionState:Ps,useOptimistic:Ps,useMemoCache:Ps,useCacheRefresh:Ps};sc.useEffectEvent=Ps;var fg={readContext:Oo,use:gu,useCallback:function(t,s){return si().memoizedState=[t,s===void 0?null:s],t},useContext:Oo,useEffect:q_,useImperativeHandle:function(t,s,o){o=o!=null?o.concat([t]):null,xu(4194308,4,J_.bind(null,s,t),o)},useLayoutEffect:function(t,s){return xu(4194308,4,t,s)},useInsertionEffect:function(t,s){xu(4,2,t,s)},useMemo:function(t,s){var o=si();s=s===void 0?null:s;var r=t();if(Tr){Ne(!0);try{t()}finally{Ne(!1)}}return o.memoizedState=[r,s],r},useReducer:function(t,s,o){var r=si();if(o!==void 0){var f=o(s);if(Tr){Ne(!0);try{o(s)}finally{Ne(!1)}}}else f=s;return r.memoizedState=r.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},r.queue=t,t=t.dispatch=P2.bind(null,pn,t),[r.memoizedState,t]},useRef:function(t){var s=si();return t={current:t},s.memoizedState=t},useState:function(t){t=Lf(t);var s=t.queue,o=cg.bind(null,pn,s);return s.dispatch=o,[t.memoizedState,o]},useDebugValue:$f,useDeferredValue:function(t,s){var o=si();return If(o,t,s)},useTransition:function(){var t=Lf(!1);return t=og.bind(null,pn,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,o){var r=pn,f=si();if(Rn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),ds===null)throw Error(a(349));(An&127)!==0||R_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,q_(L_.bind(null,r,m,t),[t]),r.flags|=2048,ll(9,{destroy:void 0},B_.bind(null,r,m,o,s),null),o},useId:function(){var t=si(),s=ds.identifierPrefix;if(Rn){var o=da,r=ua;o=(r&~(1<<32-xe(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=pu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=R2++,s="_"+s+"r_"+o.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:Hf,useFormState:Y_,useActionState:Y_,useOptimistic:function(t){var s=si();s.memoizedState=s.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Uf.bind(null,pn,!0,o),o.dispatch=s,[t,s]},useMemoCache:Df,useCacheRefresh:function(){return si().memoizedState=I2.bind(null,pn)},useEffectEvent:function(t){var s=si(),o={impl:t};return s.memoizedState=o,function(){if((Fn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Vf={readContext:Oo,use:gu,useCallback:tg,useContext:Oo,useEffect:zf,useImperativeHandle:eg,useInsertionEffect:Q_,useLayoutEffect:Z_,useMemo:ng,useReducer:yu,useRef:G_,useState:function(){return yu(ja)},useDebugValue:$f,useDeferredValue:function(t,s){var o=Zs();return sg(o,ns.memoizedState,t,s)},useTransition:function(){var t=yu(ja)[0],s=Zs().memoizedState;return[typeof t=="boolean"?t:tc(t),s]},useSyncExternalStore:D_,useId:rg,useHostTransitionStatus:Hf,useFormState:W_,useActionState:W_,useOptimistic:function(t,s){var o=Zs();return $_(o,ns,t,s)},useMemoCache:Df,useCacheRefresh:lg};Vf.useEffectEvent=K_;var hg={readContext:Oo,use:gu,useCallback:tg,useContext:Oo,useEffect:zf,useImperativeHandle:eg,useInsertionEffect:Q_,useLayoutEffect:Z_,useMemo:ng,useReducer:Bf,useRef:G_,useState:function(){return Bf(ja)},useDebugValue:$f,useDeferredValue:function(t,s){var o=Zs();return ns===null?If(o,t,s):sg(o,ns.memoizedState,t,s)},useTransition:function(){var t=Bf(ja)[0],s=Zs().memoizedState;return[typeof t=="boolean"?t:tc(t),s]},useSyncExternalStore:D_,useId:rg,useHostTransitionStatus:Hf,useFormState:X_,useActionState:X_,useOptimistic:function(t,s){var o=Zs();return ns!==null?$_(o,ns,t,s):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Df,useCacheRefresh:lg};hg.useEffectEvent=K_;function Yf(t,s,o,r){s=t.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Wf={enqueueSetState:function(t,s,o){t=t._reactInternals;var r=Bi(),f=Fa(r);f.payload=s,o!=null&&(f.callback=o),s=Xa(t,f,r),s!==null&&(vi(s,t,r),Ql(s,t,r))},enqueueReplaceState:function(t,s,o){t=t._reactInternals;var r=Bi(),f=Fa(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Xa(t,f,r),s!==null&&(vi(s,t,r),Ql(s,t,r))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var o=Bi(),r=Fa(o);r.tag=2,s!=null&&(r.callback=s),s=Xa(t,r,o),s!==null&&(vi(s,t,o),Ql(s,t,o))}};function mg(t,s,o,r,f,m,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!Q(o,r)||!Q(f,m):!0}function pg(t,s,o,r){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==t&&Wf.enqueueReplaceState(s,s.state,null)}function Ar(t,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(t=t.defaultProps){o===s&&(o=x({},o));for(var f in t)o[f]===void 0&&(o[f]=t[f])}return o}function _g(t){yr(t)}function gg(t){console.error(t)}function yg(t){yr(t)}function wu(t,s){try{var o=t.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function xg(t,s,o){try{var r=t.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ff(t,s,o){return o=Fa(o),o.tag=3,o.payload={element:null},o.callback=function(){wu(t,s)},o}function bg(t){return t=Fa(t),t.tag=3,t}function vg(t,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;t.payload=function(){return f(m)},t.callback=function(){xg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){xg(s,o,r),typeof f!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var D=r.stack;this.componentDidCatch(r.value,{componentStack:D!==null?D:""})})}function H2(t,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&el(s,o,f,!0),o=Ai.current,o!==null){switch(o.tag){case 31:case 13:return Yi===null?Bu():o.alternate===null&&Hs===0&&(Hs=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===cu?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),gh(t,r,f)),!1;case 22:return o.flags|=65536,r===cu?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),gh(t,r,f)),!1}throw Error(a(435,o.tag))}return gh(t,r,f),Bu(),!1}if(Rn)return s=Ai.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==df&&(t=Error(a(422),{cause:r}),Fl(Pi(t,o)))):(r!==df&&(s=Error(a(423),{cause:r}),Fl(Pi(s,o))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,r=Pi(r,o),f=Ff(t.stateNode,r,f),wf(t,f),Hs!==4&&(Hs=2)),!1;var m=Error(a(520),{cause:r});if(m=Pi(m,o),dc===null?dc=[m]:dc.push(m),Hs!==4&&(Hs=2),s===null)return!0;r=Pi(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,t=f&-f,o.lanes|=t,t=Ff(o.stateNode,r,t),wf(o,t),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ja===null||!Ja.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=bg(f),vg(f,t,o,r),wf(o,f),!1}o=o.return}while(o!==null);return!1}var Xf=Error(a(461)),io=!1;function zo(t,s,o,r){s.child=t===null?k_(s,null,o,r):Er(s,t.child,o,r)}function wg(t,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var D in r)D!=="ref"&&(v[D]=r[D])}else v=r;return Cr(s),r=Ef(t,s,o,v,m,f),D=Tf(),t!==null&&!io?(Af(t,s,f),Ma(t,s,f)):(Rn&&D&&cf(s),s.flags|=1,zo(t,s,r,f),s.child)}function Sg(t,s,o,r,f){if(t===null){var m=o.type;return typeof m=="function"&&!Qn(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,Cg(t,s,m,r,f)):(t=va(o.type,null,r,s,s.mode,f),t.ref=s.ref,t.return=s,s.child=t)}if(m=t.child,!th(t,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:Q,o(v,r)&&t.ref===s.ref)return Ma(t,s,f)}return s.flags|=1,t=ws(m,r),t.ref=s.ref,t.return=s,s.child=t}function Cg(t,s,o,r,f){if(t!==null){var m=t.memoizedProps;if(Q(m,r)&&t.ref===s.ref)if(io=!1,s.pendingProps=r=m,th(t,f))(t.flags&131072)!==0&&(io=!0);else return s.lanes=t.lanes,Ma(t,s,f)}return Gf(t,s,o,r,f)}function kg(t,s,o,r){var f=r.children,m=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,t!==null){for(r=s.child=t.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return jg(t,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&ru(s,m!==null?m.cachePool:null),m!==null?E_(s,m):Cf(),T_(s);else return r=s.lanes=536870912,jg(t,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(ru(s,m.cachePool),E_(s,m),qa(),s.memoizedState=null):(t!==null&&ru(s,null),Cf(),qa());return zo(t,s,f,o),s.child}function oc(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function jg(t,s,o,r,f){var m=yf();return m=m===null?null:{parent:so._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},t!==null&&ru(s,null),Cf(),T_(s),t!==null&&el(t,s,r,!0),s.childLanes=f,null}function Su(t,s){return s=ku({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function Mg(t,s,o){return Er(s,t.child,null,o),t=Su(s,s.pendingProps),t.flags|=2,Ni(s),s.memoizedState=null,t}function U2(t,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(Rn){if(r.mode==="hidden")return t=Su(s,r),s.lanes=536870912,oc(null,t);if(jf(s),(t=ys)?(t=I0(t,Vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:ua,overflow:da}:null,retryLane:536870912,hydrationErrors:null},o=u_(t),o.return=s,s.child=o,Lo=s,ys=null)):t=null,t===null)throw Va(s);return s.lanes=536870912,null}return Su(s,r)}var m=t.memoizedState;if(m!==null){var v=m.dehydrated;if(jf(s),f)if(s.flags&256)s.flags&=-257,s=Mg(t,s,o);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(a(558));else if(io||el(t,s,o,!1),f=(o&t.childLanes)!==0,io||f){if(r=ds,r!==null&&(v=jt(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,ca(t,v),vi(r,t,v),Xf;Bu(),s=Mg(t,s,o)}else t=m.treeContext,ys=Wi(v.nextSibling),Lo=s,Rn=!0,Ua=null,Vi=!1,t!==null&&h_(s,t),s=Su(s,r),s.flags|=4096;return s}return t=ws(t.child,{mode:r.mode,children:r.children}),t.ref=s.ref,s.child=t,t.return=s,t}function Cu(t,s){var o=s.ref;if(o===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(t===null||t.ref!==o)&&(s.flags|=4194816)}}function Gf(t,s,o,r,f){return Cr(s),o=Ef(t,s,o,r,void 0,f),r=Tf(),t!==null&&!io?(Af(t,s,f),Ma(t,s,f)):(Rn&&r&&cf(s),s.flags|=1,zo(t,s,o,f),s.child)}function Eg(t,s,o,r,f,m){return Cr(s),s.updateQueue=null,o=N_(s,r,o,f),A_(t),r=Tf(),t!==null&&!io?(Af(t,s,m),Ma(t,s,m)):(Rn&&r&&cf(s),s.flags|=1,zo(t,s,o,m),s.child)}function Tg(t,s,o,r,f){if(Cr(s),s.stateNode===null){var m=ba,v=o.contextType;typeof v=="object"&&v!==null&&(m=Oo(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Wf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},bf(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Oo(v):ba,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Yf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Wf.enqueueReplaceState(m,m.state,null),Jl(s,r,m,f),Zl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(t===null){m=s.stateNode;var D=s.memoizedProps,K=Ar(o,D);m.props=K;var ye=m.context,Le=o.contextType;v=ba,typeof Le=="object"&&Le!==null&&(v=Oo(Le));var Ve=o.getDerivedStateFromProps;Le=typeof Ve=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=s.pendingProps!==D,Le||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||ye!==v)&&pg(s,m,r,v),Wa=!1;var we=s.memoizedState;m.state=we,Jl(s,r,m,f),Zl(),ye=s.memoizedState,D||we!==ye||Wa?(typeof Ve=="function"&&(Yf(s,o,Ve,r),ye=s.memoizedState),(K=Wa||mg(s,o,K,r,we,ye,v))?(Le||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=ye),m.props=r,m.state=ye,m.context=v,r=K):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,vf(t,s),v=s.memoizedProps,Le=Ar(o,v),m.props=Le,Ve=s.pendingProps,we=m.context,ye=o.contextType,K=ba,typeof ye=="object"&&ye!==null&&(K=Oo(ye)),D=o.getDerivedStateFromProps,(ye=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Ve||we!==K)&&pg(s,m,r,K),Wa=!1,we=s.memoizedState,m.state=we,Jl(s,r,m,f),Zl();var ke=s.memoizedState;v!==Ve||we!==ke||Wa||t!==null&&t.dependencies!==null&&iu(t.dependencies)?(typeof D=="function"&&(Yf(s,o,D,r),ke=s.memoizedState),(Le=Wa||mg(s,o,Le,r,we,ke,K)||t!==null&&t.dependencies!==null&&iu(t.dependencies))?(ye||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ke,K),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ke,K)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&we===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&we===t.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ke),m.props=r,m.state=ke,m.context=K,r=Le):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&we===t.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&we===t.memoizedState||(s.flags|=1024),r=!1)}return m=r,Cu(t,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,t!==null&&r?(s.child=Er(s,t.child,null,f),s.child=Er(s,null,o,f)):zo(t,s,o,f),s.memoizedState=m.state,t=s.child):t=Ma(t,s,f),t}function Ag(t,s,o,r){return wr(),s.flags|=256,zo(t,s,o,r),s.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(t){return{baseLanes:t,cachePool:x_()}}function Qf(t,s,o){return t=t!==null?t.childLanes&~o:0,s&&(t|=Ri),t}function Ng(t,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=t!==null&&t.memoizedState===null?!1:(Qs.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,t===null){if(Rn){if(f?Ga(s):qa(),(t=ys)?(t=I0(t,Vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:ua,overflow:da}:null,retryLane:536870912,hydrationErrors:null},o=u_(t),o.return=s,s.child=o,Lo=s,ys=null)):t=null,t===null)throw Va(s);return Rh(t)?s.lanes=32:s.lanes=536870912,null}var D=r.children;return r=r.fallback,f?(qa(),f=s.mode,D=ku({mode:"hidden",children:D},f),r=Ks(r,f,o,null),D.return=s,r.return=s,D.sibling=r,s.child=D,r=s.child,r.memoizedState=Kf(o),r.childLanes=Qf(t,v,o),s.memoizedState=qf,oc(null,r)):(Ga(s),Zf(s,D))}var K=t.memoizedState;if(K!==null&&(D=K.dehydrated,D!==null)){if(m)s.flags&256?(Ga(s),s.flags&=-257,s=Jf(t,s,o)):s.memoizedState!==null?(qa(),s.child=t.child,s.flags|=128,s=null):(qa(),D=r.fallback,f=s.mode,r=ku({mode:"visible",children:r.children},f),D=Ks(D,f,o,null),D.flags|=2,r.return=s,D.return=s,r.sibling=D,s.child=r,Er(s,t.child,null,o),r=s.child,r.memoizedState=Kf(o),r.childLanes=Qf(t,v,o),s.memoizedState=qf,s=oc(null,r));else if(Ga(s),Rh(D)){if(v=D.nextSibling&&D.nextSibling.dataset,v)var ye=v.dgst;v=ye,r=Error(a(419)),r.stack="",r.digest=v,Fl({value:r,source:null,stack:null}),s=Jf(t,s,o)}else if(io||el(t,s,o,!1),v=(o&t.childLanes)!==0,io||v){if(v=ds,v!==null&&(r=jt(v,o),r!==0&&r!==K.retryLane))throw K.retryLane=r,ca(t,r),vi(v,t,r),Xf;Dh(D)||Bu(),s=Jf(t,s,o)}else Dh(D)?(s.flags|=192,s.child=t.child,s=null):(t=K.treeContext,ys=Wi(D.nextSibling),Lo=s,Rn=!0,Ua=null,Vi=!1,t!==null&&h_(s,t),s=Zf(s,r.children),s.flags|=4096);return s}return f?(qa(),D=r.fallback,f=s.mode,K=t.child,ye=K.sibling,r=ws(K,{mode:"hidden",children:r.children}),r.subtreeFlags=K.subtreeFlags&65011712,ye!==null?D=ws(ye,D):(D=Ks(D,f,o,null),D.flags|=2),D.return=s,r.return=s,r.sibling=D,s.child=r,oc(null,r),r=s.child,D=t.child.memoizedState,D===null?D=Kf(o):(f=D.cachePool,f!==null?(K=so._currentValue,f=f.parent!==K?{parent:K,pool:K}:f):f=x_(),D={baseLanes:D.baseLanes|o,cachePool:f}),r.memoizedState=D,r.childLanes=Qf(t,v,o),s.memoizedState=qf,oc(t.child,r)):(Ga(s),o=t.child,t=o.sibling,o=ws(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,t!==null&&(v=s.deletions,v===null?(s.deletions=[t],s.flags|=16):v.push(t)),s.child=o,s.memoizedState=null,o)}function Zf(t,s){return s=ku({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function ku(t,s){return t=Qt(22,t,null,s),t.lanes=0,t}function Jf(t,s,o){return Er(s,t.child,null,o),t=Zf(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function Dg(t,s,o){t.lanes|=s;var r=t.alternate;r!==null&&(r.lanes|=s),mf(t.return,s,o)}function eh(t,s,o,r,f,m){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function Rg(t,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Qs.current,D=(v&2)!==0;if(D?(v=v&1|2,s.flags|=128):v&=1,ee(Qs,v),zo(t,s,r,o),r=Rn?Wl:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,o,s);else if(t.tag===19)Dg(t,o,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)t=o.alternate,t!==null&&hu(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),eh(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(t=f.alternate,t!==null&&hu(t)===null){s.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}eh(s,!0,o,null,m,r);break;case"together":eh(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function Ma(t,s,o){if(t!==null&&(s.dependencies=t.dependencies),Za|=s.lanes,(o&s.childLanes)===0)if(t!==null){if(el(t,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(a(153));if(s.child!==null){for(t=s.child,o=ws(t,t.pendingProps),s.child=o,o.return=s;t.sibling!==null;)t=t.sibling,o=o.sibling=ws(t,t.pendingProps),o.return=s;o.sibling=null}return s.child}function th(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&iu(t)))}function V2(t,s,o){switch(s.tag){case 3:et(s,s.stateNode.containerInfo),Ya(s,so,t.memoizedState.cache),wr();break;case 27:case 5:mt(s);break;case 4:et(s,s.stateNode.containerInfo);break;case 10:Ya(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,jf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Ga(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Ng(t,s,o):(Ga(s),t=Ma(t,s,o),t!==null?t.sibling:null);Ga(s);break;case 19:var f=(t.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(el(t,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return Rg(t,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(Qs,Qs.current),r)break;return null;case 22:return s.lanes=0,kg(t,s,o,s.pendingProps);case 24:Ya(s,so,t.memoizedState.cache)}return Ma(t,s,o)}function Bg(t,s,o){if(t!==null)if(t.memoizedProps!==s.pendingProps)io=!0;else{if(!th(t,o)&&(s.flags&128)===0)return io=!1,V2(t,s,o);io=(t.flags&131072)!==0}else io=!1,Rn&&(s.flags&1048576)!==0&&f_(s,Wl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(t=jr(s.elementType),s.type=t,typeof t=="function")Qn(t)?(r=Ar(t,r),s.tag=1,s=Tg(null,s,t,r,o)):(s.tag=0,s=Gf(null,s,t,r,o));else{if(t!=null){var f=t.$$typeof;if(f===A){s.tag=11,s=wg(null,s,t,r,o);break e}else if(f===Y){s.tag=14,s=Sg(null,s,t,r,o);break e}}throw s=se(t)||t,Error(a(306,s,""))}}return s;case 0:return Gf(t,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=Ar(r,s.pendingProps),Tg(t,s,r,f,o);case 3:e:{if(et(s,s.stateNode.containerInfo),t===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,vf(t,s),Jl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Ya(s,so,r),r!==m.cache&&pf(s,[so],o,!0),Zl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=Ag(t,s,r,o);break e}else if(r!==f){f=Pi(Error(a(424)),s),Fl(f),s=Ag(t,s,r,o);break e}else{switch(t=s.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ys=Wi(t.firstChild),Lo=s,Rn=!0,Ua=null,Vi=!0,o=k_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(wr(),r===f){s=Ma(t,s,o);break e}zo(t,s,r,o)}s=s.child}return s;case 26:return Cu(t,s),t===null?(o=W0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Rn||(o=s.type,t=s.pendingProps,r=Hu(pe.current).createElement(o),r[zt]=s,r[on]=t,$o(r,o,t),bn(r),s.stateNode=r):s.memoizedState=W0(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return mt(s),t===null&&Rn&&(r=s.stateNode=U0(s.type,s.pendingProps,pe.current),Lo=s,Vi=!0,f=ys,sr(s.type)?(Bh=f,ys=Wi(r.firstChild)):ys=f),zo(t,s,s.pendingProps.children,o),Cu(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&Rn&&((f=r=ys)&&(r=xv(r,s.type,s.pendingProps,Vi),r!==null?(s.stateNode=r,Lo=s,ys=Wi(r.firstChild),Vi=!1,f=!0):f=!1),f||Va(s)),mt(s),f=s.type,m=s.pendingProps,v=t!==null?t.memoizedProps:null,r=m.children,Th(f,m)?r=null:v!==null&&Th(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=Ef(t,s,B2,null,null,o),xc._currentValue=f),Cu(t,s),zo(t,s,r,o),s.child;case 6:return t===null&&Rn&&((t=o=ys)&&(o=bv(o,s.pendingProps,Vi),o!==null?(s.stateNode=o,Lo=s,ys=null,t=!0):t=!1),t||Va(s)),null;case 13:return Ng(t,s,o);case 4:return et(s,s.stateNode.containerInfo),r=s.pendingProps,t===null?s.child=Er(s,null,r,o):zo(t,s,r,o),s.child;case 11:return wg(t,s,s.type,s.pendingProps,o);case 7:return zo(t,s,s.pendingProps,o),s.child;case 8:return zo(t,s,s.pendingProps.children,o),s.child;case 12:return zo(t,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Ya(s,s.type,r.value),zo(t,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,Cr(s),f=Oo(f),r=r(f),s.flags|=1,zo(t,s,r,o),s.child;case 14:return Sg(t,s,s.type,s.pendingProps,o);case 15:return Cg(t,s,s.type,s.pendingProps,o);case 19:return Rg(t,s,o);case 31:return U2(t,s,o);case 22:return kg(t,s,o,s.pendingProps);case 24:return Cr(s),r=Oo(so),t===null?(f=yf(),f===null&&(f=ds,m=_f(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},bf(s),Ya(s,so,f)):((t.lanes&o)!==0&&(vf(t,s),Jl(s,null,null,o),Zl()),f=t.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ya(s,so,r)):(r=m.cache,Ya(s,so,r),r!==f.cache&&pf(s,[so],o,!0))),zo(t,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function Ea(t){t.flags|=4}function nh(t,s,o,r,f){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(r0())t.flags|=8192;else throw Mr=cu,xf}else t.flags&=-16777217}function Lg(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K0(s))if(r0())t.flags|=8192;else throw Mr=cu,xf}function ju(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?pt():536870912,t.lanes|=s,fl|=s)}function ic(t,s){if(!Rn)switch(t.tailMode){case"hidden":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xs(t){var s=t.alternate!==null&&t.alternate.child===t.child,o=0,r=0;if(s)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=r,t.childLanes=o,s}function Y2(t,s,o){var r=s.pendingProps;switch(uf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xs(s),null;case 1:return xs(s),null;case 3:return o=s.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),Ca(so),We(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Jr(s)?Ea(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,ff())),xs(s),null;case 26:var f=s.type,m=s.memoizedState;return t===null?(Ea(s),m!==null?(xs(s),Lg(s,m)):(xs(s),nh(s,f,null,r,o))):m?m!==t.memoizedState?(Ea(s),xs(s),Lg(s,m)):(xs(s),s.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ea(s),xs(s),nh(s,f,t,r,o)),null;case 27:if(Nt(s),o=pe.current,f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ea(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return xs(s),null}t=ve.current,Jr(s)?m_(s):(t=U0(f,r,o),s.stateNode=t,Ea(s))}return xs(s),null;case 5:if(Nt(s),f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==r&&Ea(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return xs(s),null}if(m=ve.current,Jr(s))m_(s);else{var v=Hu(pe.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[zt]=s,m[on]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch($o(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ea(s)}}return xs(s),nh(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,o),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==r&&Ea(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(t=pe.current,Jr(s)){if(t=s.stateNode,o=s.memoizedProps,r=null,f=Lo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}t[zt]=s,t=!!(t.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||N0(t.nodeValue,o)),t||Va(s,!0)}else t=Hu(t).createTextNode(r),t[zt]=s,s.stateNode=t}return xs(s),null;case 31:if(o=s.memoizedState,t===null||t.memoizedState!==null){if(r=Jr(s),o!==null){if(t===null){if(!r)throw Error(a(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[zt]=s}else wr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;xs(s),t=!1}else o=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),t=!0;if(!t)return s.flags&256?(Ni(s),s):(Ni(s),null);if((s.flags&128)!==0)throw Error(a(558))}return xs(s),null;case 13:if(r=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Jr(s),r!==null&&r.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[zt]=s}else wr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;xs(s),f=!1}else f=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Ni(s),s):(Ni(s),null)}return Ni(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,t=t!==null&&t.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==t&&o&&(s.child.flags|=8192),ju(s,s.updateQueue),xs(s),null);case 4:return We(),t===null&&Ch(s.stateNode.containerInfo),xs(s),null;case 10:return Ca(s.type),xs(s),null;case 19:if(ie(Qs),r=s.memoizedState,r===null)return xs(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)ic(r,!1);else{if(Hs!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(m=hu(t),m!==null){for(s.flags|=128,ic(r,!1),t=m.updateQueue,s.updateQueue=t,ju(s,t),s.subtreeFlags=0,t=o,o=s.child;o!==null;)Ii(o,t),o=o.sibling;return ee(Qs,Qs.current&1|2),Rn&&wa(s,r.treeForkCount),s.child}t=t.sibling}r.tail!==null&&vt()>Nu&&(s.flags|=128,f=!0,ic(r,!1),s.lanes=4194304)}else{if(!f)if(t=hu(m),t!==null){if(s.flags|=128,f=!0,t=t.updateQueue,s.updateQueue=t,ju(s,t),ic(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Rn)return xs(s),null}else 2*vt()-r.renderingStartTime>Nu&&o!==536870912&&(s.flags|=128,f=!0,ic(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(t=r.last,t!==null?t.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=vt(),t.sibling=null,o=Qs.current,ee(Qs,f?o&1|2:o&1),Rn&&wa(s,r.treeForkCount),t):(xs(s),null);case 22:case 23:return Ni(s),kf(),r=s.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(xs(s),s.subtreeFlags&6&&(s.flags|=8192)):xs(s),o=s.updateQueue,o!==null&&ju(s,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),t!==null&&ie(kr),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Ca(so),xs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function W2(t,s){switch(uf(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Ca(so),We(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return Nt(s),null;case 31:if(s.memoizedState!==null){if(Ni(s),s.alternate===null)throw Error(a(340));wr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(Ni(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(a(340));wr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return ie(Qs),null;case 4:return We(),null;case 10:return Ca(s.type),null;case 22:case 23:return Ni(s),kf(),t!==null&&ie(kr),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return Ca(so),null;case 25:return null;default:return null}}function Og(t,s){switch(uf(s),s.tag){case 3:Ca(so),We();break;case 26:case 27:case 5:Nt(s);break;case 4:We();break;case 31:s.memoizedState!==null&&Ni(s);break;case 13:Ni(s);break;case 19:ie(Qs);break;case 10:Ca(s.type);break;case 22:case 23:Ni(s),kf(),t!==null&&ie(kr);break;case 24:Ca(so)}}function ac(t,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&t)===t){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(D){Jn(s,s.return,D)}}function Ka(t,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&t)===t){var v=r.inst,D=v.destroy;if(D!==void 0){v.destroy=void 0,f=s;var K=o,ye=D;try{ye()}catch(Le){Jn(f,K,Le)}}}r=r.next}while(r!==m)}}catch(Le){Jn(s,s.return,Le)}}function zg(t){var s=t.updateQueue;if(s!==null){var o=t.stateNode;try{M_(s,o)}catch(r){Jn(t,t.return,r)}}}function $g(t,s,o){o.props=Ar(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(r){Jn(t,s,r)}}function rc(t,s){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof o=="function"?t.refCleanup=o(r):o.current=r}}catch(f){Jn(t,s,f)}}function fa(t,s){var o=t.ref,r=t.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Jn(t,s,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Jn(t,s,f)}else o.current=null}function Ig(t){var s=t.type,o=t.memoizedProps,r=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Jn(t,t.return,f)}}function sh(t,s,o){try{var r=t.stateNode;hv(r,t.type,o,s),r[on]=s}catch(f){Jn(t,t.return,f)}}function Pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(t),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=uo));else if(r!==4&&(r===27&&sr(t.type)&&(o=t.stateNode,s=null),t=t.child,t!==null))for(ih(t,s,o),t=t.sibling;t!==null;)ih(t,s,o),t=t.sibling}function Mu(t,s,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?o.insertBefore(t,s):o.appendChild(t);else if(r!==4&&(r===27&&sr(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(Mu(t,s,o),t=t.sibling;t!==null;)Mu(t,s,o),t=t.sibling}function Hg(t){var s=t.stateNode,o=t.memoizedProps;try{for(var r=t.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);$o(s,r,o),s[zt]=t,s[on]=o}catch(m){Jn(t,t.return,m)}}var Ta=!1,ao=!1,ah=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,To=null;function F2(t,s){if(t=t.containerInfo,Mh=Gu,t=ct(t),St(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,D=-1,K=-1,ye=0,Le=0,Ve=t,we=null;t:for(;;){for(var ke;Ve!==o||f!==0&&Ve.nodeType!==3||(D=v+f),Ve!==m||r!==0&&Ve.nodeType!==3||(K=v+r),Ve.nodeType===3&&(v+=Ve.nodeValue.length),(ke=Ve.firstChild)!==null;)we=Ve,Ve=ke;for(;;){if(Ve===t)break t;if(we===o&&++ye===f&&(D=v),we===m&&++Le===r&&(K=v),(ke=Ve.nextSibling)!==null)break;Ve=we,we=Ve.parentNode}Ve=ke}o=D===-1||K===-1?null:{start:D,end:K}}else o=null}o=o||{start:0,end:0}}else o=null;for(Eh={focusedElem:t,selectionRange:o},Gu=!1,To=s;To!==null;)if(s=To,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,To=t;else for(;To!==null;){switch(s=To,m=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(o=0;o<t.length;o++)f=t[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Rt=Ar(o.type,f);t=r.getSnapshotBeforeUpdate(Rt,m),r.__reactInternalSnapshotBeforeUpdate=t}catch(Xt){Jn(o,o.return,Xt)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,o=t.nodeType,o===9)Nh(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=s.sibling,t!==null){t.return=s.return,To=t;break}To=s.return}}function Vg(t,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:Na(t,o),r&4&&ac(5,o);break;case 1:if(Na(t,o),r&4)if(t=o.stateNode,s===null)try{t.componentDidMount()}catch(v){Jn(o,o.return,v)}else{var f=Ar(o.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(f,s,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Jn(o,o.return,v)}}r&64&&zg(o),r&512&&rc(o,o.return);break;case 3:if(Na(t,o),r&64&&(t=o.updateQueue,t!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{M_(t,s)}catch(v){Jn(o,o.return,v)}}break;case 27:s===null&&r&4&&Hg(o);case 26:case 5:Na(t,o),s===null&&r&4&&Ig(o),r&512&&rc(o,o.return);break;case 12:Na(t,o);break;case 31:Na(t,o),r&4&&Fg(t,o);break;case 13:Na(t,o),r&4&&Xg(t,o),r&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=tv.bind(null,o),vv(t,o))));break;case 22:if(r=o.memoizedState!==null||Ta,!r){s=s!==null&&s.memoizedState!==null||ao,f=Ta;var m=ao;Ta=r,(ao=s)&&!m?Da(t,o,(o.subtreeFlags&8772)!==0):Na(t,o),Ta=f,ao=m}break;case 30:break;default:Na(t,o)}}function Yg(t){var s=t.alternate;s!==null&&(t.alternate=null,Yg(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&Ys(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Cs=null,gi=!1;function Aa(t,s,o){for(o=o.child;o!==null;)Wg(t,s,o),o=o.sibling}function Wg(t,s,o){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(nt,o)}catch{}switch(o.tag){case 26:ao||fa(o,s),Aa(t,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:ao||fa(o,s);var r=Cs,f=gi;sr(o.type)&&(Cs=o.stateNode,gi=!1),Aa(t,s,o),_c(o.stateNode),Cs=r,gi=f;break;case 5:ao||fa(o,s);case 6:if(r=Cs,f=gi,Cs=null,Aa(t,s,o),Cs=r,gi=f,Cs!==null)if(gi)try{(Cs.nodeType===9?Cs.body:Cs.nodeName==="HTML"?Cs.ownerDocument.body:Cs).removeChild(o.stateNode)}catch(m){Jn(o,s,m)}else try{Cs.removeChild(o.stateNode)}catch(m){Jn(o,s,m)}break;case 18:Cs!==null&&(gi?(t=Cs,z0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),bl(t)):z0(Cs,o.stateNode));break;case 4:r=Cs,f=gi,Cs=o.stateNode.containerInfo,gi=!0,Aa(t,s,o),Cs=r,gi=f;break;case 0:case 11:case 14:case 15:Ka(2,o,s),ao||Ka(4,o,s),Aa(t,s,o);break;case 1:ao||(fa(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&$g(o,s,r)),Aa(t,s,o);break;case 21:Aa(t,s,o);break;case 22:ao=(r=ao)||o.memoizedState!==null,Aa(t,s,o),ao=r;break;default:Aa(t,s,o)}}function Fg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bl(t)}catch(o){Jn(s,s.return,o)}}}function Xg(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bl(t)}catch(o){Jn(s,s.return,o)}}function X2(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new Ug),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new Ug),s;default:throw Error(a(435,t.tag))}}function Eu(t,s){var o=X2(t);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=nv.bind(null,t,r);r.then(f,f)}})}function yi(t,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=t,v=s,D=v;e:for(;D!==null;){switch(D.tag){case 27:if(sr(D.type)){Cs=D.stateNode,gi=!1;break e}break;case 5:Cs=D.stateNode,gi=!1;break e;case 3:case 4:Cs=D.stateNode.containerInfo,gi=!0;break e}D=D.return}if(Cs===null)throw Error(a(160));Wg(m,v,f),Cs=null,gi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Gg(s,t),s=s.sibling}var Zi=null;function Gg(t,s){var o=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yi(s,t),xi(t),r&4&&(Ka(3,t,t.return),ac(3,t),Ka(5,t,t.return));break;case 1:yi(s,t),xi(t),r&512&&(ao||o===null||fa(o,o.return)),r&64&&Ta&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Zi;if(yi(s,t),xi(t),r&512&&(ao||o===null||fa(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=t.memoizedState,o===null)if(r===null)if(t.stateNode===null){e:{r=t.type,o=t.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[bo]||m[zt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),$o(m,r,o),m[zt]=t,bn(m),r=m;break e;case"link":var v=G0("link","href",f).get(r+(o.href||""));if(v){for(var D=0;D<v.length;D++)if(m=v[D],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(D,1);break t}}m=f.createElement(r),$o(m,r,o),f.head.appendChild(m);break;case"meta":if(v=G0("meta","content",f).get(r+(o.content||""))){for(D=0;D<v.length;D++)if(m=v[D],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(D,1);break t}}m=f.createElement(r),$o(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[zt]=t,bn(m),r=m}t.stateNode=r}else q0(f,t.type,t.stateNode);else t.stateNode=X0(f,r,t.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?q0(f,t.type,t.stateNode):X0(f,r,t.memoizedProps)):r===null&&t.stateNode!==null&&sh(t,t.memoizedProps,o.memoizedProps)}break;case 27:yi(s,t),xi(t),r&512&&(ao||o===null||fa(o,o.return)),o!==null&&r&4&&sh(t,t.memoizedProps,o.memoizedProps);break;case 5:if(yi(s,t),xi(t),r&512&&(ao||o===null||fa(o,o.return)),t.flags&32){f=t.stateNode;try{Vo(f,"")}catch(Rt){Jn(t,t.return,Rt)}}r&4&&t.stateNode!=null&&(f=t.memoizedProps,sh(t,f,o!==null?o.memoizedProps:f)),r&1024&&(ah=!0);break;case 6:if(yi(s,t),xi(t),r&4){if(t.stateNode===null)throw Error(a(162));r=t.memoizedProps,o=t.stateNode;try{o.nodeValue=r}catch(Rt){Jn(t,t.return,Rt)}}break;case 3:if(Yu=null,f=Zi,Zi=Uu(s.containerInfo),yi(s,t),Zi=f,xi(t),r&4&&o!==null&&o.memoizedState.isDehydrated)try{bl(s.containerInfo)}catch(Rt){Jn(t,t.return,Rt)}ah&&(ah=!1,qg(t));break;case 4:r=Zi,Zi=Uu(t.stateNode.containerInfo),yi(s,t),xi(t),Zi=r;break;case 12:yi(s,t),xi(t);break;case 31:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Eu(t,r)));break;case 13:yi(s,t),xi(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Au=vt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Eu(t,r)));break;case 22:f=t.memoizedState!==null;var K=o!==null&&o.memoizedState!==null,ye=Ta,Le=ao;if(Ta=ye||f,ao=Le||K,yi(s,t),ao=Le,Ta=ye,xi(t),r&8192)e:for(s=t.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||K||Ta||ao||Nr(t)),o=null,s=t;;){if(s.tag===5||s.tag===26){if(o===null){K=o=s;try{if(m=K.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{D=K.stateNode;var Ve=K.memoizedProps.style,we=Ve!=null&&Ve.hasOwnProperty("display")?Ve.display:null;D.style.display=we==null||typeof we=="boolean"?"":(""+we).trim()}}catch(Rt){Jn(K,K.return,Rt)}}}else if(s.tag===6){if(o===null){K=s;try{K.stateNode.nodeValue=f?"":K.memoizedProps}catch(Rt){Jn(K,K.return,Rt)}}}else if(s.tag===18){if(o===null){K=s;try{var ke=K.stateNode;f?$0(ke,!0):$0(K.stateNode,!1)}catch(Rt){Jn(K,K.return,Rt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=t.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,Eu(t,o))));break;case 19:yi(s,t),xi(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Eu(t,r)));break;case 30:break;case 21:break;default:yi(s,t),xi(t)}}function xi(t){var s=t.flags;if(s&2){try{for(var o,r=t.return;r!==null;){if(Pg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=oh(t);Mu(t,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Vo(v,""),o.flags&=-33);var D=oh(t);Mu(t,D,v);break;case 3:case 4:var K=o.stateNode.containerInfo,ye=oh(t);ih(t,ye,K);break;default:throw Error(a(161))}}catch(Le){Jn(t,t.return,Le)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;qg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function Na(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Vg(t,s.alternate,s),s=s.sibling}function Nr(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:Ka(4,s,s.return),Nr(s);break;case 1:fa(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&$g(s,s.return,o),Nr(s);break;case 27:_c(s.stateNode);case 26:case 5:fa(s,s.return),Nr(s);break;case 22:s.memoizedState===null&&Nr(s);break;case 30:Nr(s);break;default:Nr(s)}t=t.sibling}}function Da(t,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=t,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:Da(f,m,o),ac(4,m);break;case 1:if(Da(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ye){Jn(r,r.return,ye)}if(r=m,f=r.updateQueue,f!==null){var D=r.stateNode;try{var K=f.shared.hiddenCallbacks;if(K!==null)for(f.shared.hiddenCallbacks=null,f=0;f<K.length;f++)j_(K[f],D)}catch(ye){Jn(r,r.return,ye)}}o&&v&64&&zg(m),rc(m,m.return);break;case 27:Hg(m);case 26:case 5:Da(f,m,o),o&&r===null&&v&4&&Ig(m),rc(m,m.return);break;case 12:Da(f,m,o);break;case 31:Da(f,m,o),o&&v&4&&Fg(f,m);break;case 13:Da(f,m,o),o&&v&4&&Xg(f,m);break;case 22:m.memoizedState===null&&Da(f,m,o),rc(m,m.return);break;case 30:break;default:Da(f,m,o)}s=s.sibling}}function rh(t,s){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&Xl(o))}function lh(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Xl(t))}function Ji(t,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Kg(t,s,o,r),s=s.sibling}function Kg(t,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Ji(t,s,o,r),f&2048&&ac(9,s);break;case 1:Ji(t,s,o,r);break;case 3:Ji(t,s,o,r),f&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&Xl(t)));break;case 12:if(f&2048){Ji(t,s,o,r),t=s.stateNode;try{var m=s.memoizedProps,v=m.id,D=m.onPostCommit;typeof D=="function"&&D(v,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(K){Jn(s,s.return,K)}}else Ji(t,s,o,r);break;case 31:Ji(t,s,o,r);break;case 13:Ji(t,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Ji(t,s,o,r):lc(t,s):m._visibility&2?Ji(t,s,o,r):(m._visibility|=2,cl(t,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&rh(v,s);break;case 24:Ji(t,s,o,r),f&2048&&lh(s.alternate,s);break;default:Ji(t,s,o,r)}}function cl(t,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=t,v=s,D=o,K=r,ye=v.flags;switch(v.tag){case 0:case 11:case 15:cl(m,v,D,K,f),ac(8,v);break;case 23:break;case 22:var Le=v.stateNode;v.memoizedState!==null?Le._visibility&2?cl(m,v,D,K,f):lc(m,v):(Le._visibility|=2,cl(m,v,D,K,f)),f&&ye&2048&&rh(v.alternate,v);break;case 24:cl(m,v,D,K,f),f&&ye&2048&&lh(v.alternate,v);break;default:cl(m,v,D,K,f)}s=s.sibling}}function lc(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=t,r=s,f=r.flags;switch(r.tag){case 22:lc(o,r),f&2048&&rh(r.alternate,r);break;case 24:lc(o,r),f&2048&&lh(r.alternate,r);break;default:lc(o,r)}s=s.sibling}}var cc=8192;function ul(t,s,o){if(t.subtreeFlags&cc)for(t=t.child;t!==null;)Qg(t,s,o),t=t.sibling}function Qg(t,s,o){switch(t.tag){case 26:ul(t,s,o),t.flags&cc&&t.memoizedState!==null&&Rv(o,Zi,t.memoizedState,t.memoizedProps);break;case 5:ul(t,s,o);break;case 3:case 4:var r=Zi;Zi=Uu(t.stateNode.containerInfo),ul(t,s,o),Zi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=cc,cc=16777216,ul(t,s,o),cc=r):ul(t,s,o));break;default:ul(t,s,o)}}function Zg(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function uc(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];To=r,e0(r,t)}Zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jg(t),t=t.sibling}function Jg(t){switch(t.tag){case 0:case 11:case 15:uc(t),t.flags&2048&&Ka(9,t,t.return);break;case 3:uc(t);break;case 12:uc(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,Tu(t)):uc(t);break;default:uc(t)}}function Tu(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];To=r,e0(r,t)}Zg(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:Ka(8,s,s.return),Tu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Tu(s));break;default:Tu(s)}t=t.sibling}}function e0(t,s){for(;To!==null;){var o=To;switch(o.tag){case 0:case 11:case 15:Ka(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Xl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,To=r;else e:for(o=t;To!==null;){r=To;var f=r.sibling,m=r.return;if(Yg(r),r===o){To=null;break e}if(f!==null){f.return=m,To=f;break e}To=m}}}var G2={getCacheForType:function(t){var s=Oo(so),o=s.data.get(t);return o===void 0&&(o=t(),s.data.set(t,o)),o},cacheSignal:function(){return Oo(so).controller.signal}},q2=typeof WeakMap=="function"?WeakMap:Map,Fn=0,ds=null,Mn=null,An=0,Zn=0,Di=null,Qa=!1,dl=!1,ch=!1,Ra=0,Hs=0,Za=0,Dr=0,uh=0,Ri=0,fl=0,dc=null,bi=null,dh=!1,Au=0,t0=0,Nu=1/0,Du=null,Ja=null,yo=0,er=null,hl=null,Ba=0,fh=0,hh=null,n0=null,fc=0,mh=null;function Bi(){return(Fn&2)!==0&&An!==0?An&-An:O.T!==null?bh():en()}function s0(){if(Ri===0)if((An&536870912)===0||Rn){var t=tt;tt<<=1,(tt&3932160)===0&&(tt=262144),Ri=t}else Ri=536870912;return t=Ai.current,t!==null&&(t.flags|=32),Ri}function vi(t,s,o){(t===ds&&(Zn===2||Zn===9)||t.cancelPendingCommit!==null)&&(ml(t,0),tr(t,An,Ri,!1)),ft(t,o),((Fn&2)===0||t!==ds)&&(t===ds&&((Fn&2)===0&&(Dr|=o),Hs===4&&tr(t,An,Ri,!1)),ha(t))}function o0(t,s,o){if((Fn&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&t.expiredLanes)===0||Bt(t,s),f=r?Z2(t,s):_h(t,s,!0),m=r;do{if(f===0){dl&&!r&&tr(t,s,0,!1);break}else{if(o=t.current.alternate,m&&!K2(o)){f=_h(t,s,!1),m=!1;continue}if(f===2){if(m=s,t.errorRecoveryDisabledLanes&m)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var D=t;f=dc;var K=D.current.memoizedState.isDehydrated;if(K&&(ml(D,v).flags|=256),v=_h(D,v,!1),v!==2){if(ch&&!K){D.errorRecoveryDisabledLanes|=m,Dr|=m,f=4;break e}m=bi,bi=f,m!==null&&(bi===null?bi=m:bi.push.apply(bi,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){ml(t,0),tr(t,s,0,!0);break}e:{switch(r=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:tr(r,s,Ri,!Qa);break e;case 2:bi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=Au+300-vt(),10<f)){if(tr(r,s,Ri,!Qa),Ze(r,0,!0)!==0)break e;Ba=s,r.timeoutHandle=L0(i0.bind(null,r,o,bi,Du,dh,s,Ri,Dr,fl,Qa,m,"Throttled",-0,0),f);break e}i0(r,o,bi,Du,dh,s,Ri,Dr,fl,Qa,m,null,-0,0)}}break}while(!0);ha(t)}function i0(t,s,o,r,f,m,v,D,K,ye,Le,Ve,we,ke){if(t.timeoutHandle=-1,Ve=s.subtreeFlags,Ve&8192||(Ve&16785408)===16785408){Ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:uo},Qg(s,m,Ve);var Rt=(m&62914560)===m?Au-vt():(m&4194048)===m?t0-vt():0;if(Rt=Bv(Ve,Rt),Rt!==null){Ba=m,t.cancelPendingCommit=Rt(h0.bind(null,t,s,m,o,r,f,v,D,K,Le,Ve,null,we,ke)),tr(t,m,v,!ye);return}}h0(t,s,m,o,r,f,v,D,K)}function K2(t){for(var s=t;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!le(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function tr(t,s,o,r){s&=~uh,s&=~Dr,t.suspendedLanes|=s,t.pingedLanes&=~s,r&&(t.warmLanes|=s),r=t.expirationTimes;for(var f=s;0<f;){var m=31-xe(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&hn(t,o,s)}function Ru(){return(Fn&6)===0?(hc(0),!1):!0}function ph(){if(Mn!==null){if(Zn===0)var t=Mn.return;else t=Mn,Sa=Sr=null,Nf(t),ol=null,ql=0,t=Mn;for(;t!==null;)Og(t.alternate,t),t=t.return;Mn=null}}function ml(t,s){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,_v(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),Ba=0,ph(),ds=t,Mn=o=ws(t.current,null),An=s,Zn=0,Di=null,Qa=!1,dl=Bt(t,s),ch=!1,fl=Ri=uh=Dr=Za=Hs=0,bi=dc=null,dh=!1,(s&8)!==0&&(s|=s&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=s;0<r;){var f=31-xe(r),m=1<<f;s|=t[f],r&=~m}return Ra=s,xr(),o}function a0(t,s){pn=null,O.H=sc,s===sl||s===lu?(s=w_(),Zn=3):s===xf?(s=w_(),Zn=4):Zn=s===Xf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Di=s,Mn===null&&(Hs=1,wu(t,Pi(s,t.current)))}function r0(){var t=Ai.current;return t===null?!0:(An&4194048)===An?Yi===null:(An&62914560)===An||(An&536870912)!==0?t===Yi:!1}function l0(){var t=O.H;return O.H=sc,t===null?sc:t}function c0(){var t=O.A;return O.A=G2,t}function Bu(){Hs=4,Qa||(An&4194048)!==An&&Ai.current!==null||(dl=!0),(Za&134217727)===0&&(Dr&134217727)===0||ds===null||tr(ds,An,Ri,!1)}function _h(t,s,o){var r=Fn;Fn|=2;var f=l0(),m=c0();(ds!==t||An!==s)&&(Du=null,ml(t,s)),s=!1;var v=Hs;e:do try{if(Zn!==0&&Mn!==null){var D=Mn,K=Di;switch(Zn){case 8:ph(),v=6;break e;case 3:case 2:case 9:case 6:Ai.current===null&&(s=!0);var ye=Zn;if(Zn=0,Di=null,pl(t,D,K,ye),o&&dl){v=0;break e}break;default:ye=Zn,Zn=0,Di=null,pl(t,D,K,ye)}}Q2(),v=Hs;break}catch(Le){a0(t,Le)}while(!0);return s&&t.shellSuspendCounter++,Sa=Sr=null,Fn=r,O.H=f,O.A=m,Mn===null&&(ds=null,An=0,xr()),v}function Q2(){for(;Mn!==null;)u0(Mn)}function Z2(t,s){var o=Fn;Fn|=2;var r=l0(),f=c0();ds!==t||An!==s?(Du=null,Nu=vt()+500,ml(t,s)):dl=Bt(t,s);e:do try{if(Zn!==0&&Mn!==null){s=Mn;var m=Di;t:switch(Zn){case 1:Zn=0,Di=null,pl(t,s,m,1);break;case 2:case 9:if(b_(m)){Zn=0,Di=null,d0(s);break}s=function(){Zn!==2&&Zn!==9||ds!==t||(Zn=7),ha(t)},m.then(s,s);break e;case 3:Zn=7;break e;case 4:Zn=5;break e;case 7:b_(m)?(Zn=0,Di=null,d0(s)):(Zn=0,Di=null,pl(t,s,m,7));break;case 5:var v=null;switch(Mn.tag){case 26:v=Mn.memoizedState;case 5:case 27:var D=Mn;if(v?K0(v):D.stateNode.complete){Zn=0,Di=null;var K=D.sibling;if(K!==null)Mn=K;else{var ye=D.return;ye!==null?(Mn=ye,Lu(ye)):Mn=null}break t}}Zn=0,Di=null,pl(t,s,m,5);break;case 6:Zn=0,Di=null,pl(t,s,m,6);break;case 8:ph(),Hs=6;break e;default:throw Error(a(462))}}J2();break}catch(Le){a0(t,Le)}while(!0);return Sa=Sr=null,O.H=r,O.A=f,Fn=o,Mn!==null?0:(ds=null,An=0,xr(),Hs)}function J2(){for(;Mn!==null&&!gt();)u0(Mn)}function u0(t){var s=Bg(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,s===null?Lu(t):Mn=s}function d0(t){var s=t,o=s.alternate;switch(s.tag){case 15:case 0:s=Eg(o,s,s.pendingProps,s.type,void 0,An);break;case 11:s=Eg(o,s,s.pendingProps,s.type.render,s.ref,An);break;case 5:Nf(s);default:Og(o,s),s=Mn=Ii(s,Ra),s=Bg(o,s,Ra)}t.memoizedProps=t.pendingProps,s===null?Lu(t):Mn=s}function pl(t,s,o,r){Sa=Sr=null,Nf(s),ol=null,ql=0;var f=s.return;try{if(H2(t,f,s,o,An)){Hs=1,wu(t,Pi(o,t.current)),Mn=null;return}}catch(m){if(f!==null)throw Mn=f,m;Hs=1,wu(t,Pi(o,t.current)),Mn=null;return}s.flags&32768?(Rn||r===1?t=!0:dl||(An&536870912)!==0?t=!1:(Qa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Ai.current,r!==null&&r.tag===13&&(r.flags|=16384))),f0(s,t)):Lu(s)}function Lu(t){var s=t;do{if((s.flags&32768)!==0){f0(s,Qa);return}t=s.return;var o=Y2(s.alternate,s,Ra);if(o!==null){Mn=o;return}if(s=s.sibling,s!==null){Mn=s;return}Mn=s=t}while(s!==null);Hs===0&&(Hs=5)}function f0(t,s){do{var o=W2(t.alternate,t);if(o!==null){o.flags&=32767,Mn=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(t=t.sibling,t!==null)){Mn=t;return}Mn=t=o}while(t!==null);Hs=6,Mn=null}function h0(t,s,o,r,f,m,v,D,K){t.cancelPendingCommit=null;do Ou();while(yo!==0);if((Fn&6)!==0)throw Error(a(327));if(s!==null){if(s===t.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qr,Pt(t,o,m,v,D,K),t===ds&&(Mn=ds=null,An=0),hl=s,er=t,Ba=o,fh=m,hh=f,n0=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sv(it,function(){return y0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,f=oe.p,oe.p=2,v=Fn,Fn|=4;try{F2(t,s,o)}finally{Fn=v,oe.p=f,O.T=r}}yo=1,m0(),p0(),_0()}}function m0(){if(yo===1){yo=0;var t=er,s=hl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=O.T,O.T=null;var r=oe.p;oe.p=2;var f=Fn;Fn|=4;try{Gg(s,t);var m=Eh,v=ct(t.containerInfo),D=m.focusedElem,K=m.selectionRange;if(v!==D&&D&&D.ownerDocument&&at(D.ownerDocument.documentElement,D)){if(K!==null&&St(D)){var ye=K.start,Le=K.end;if(Le===void 0&&(Le=ye),"selectionStart"in D)D.selectionStart=ye,D.selectionEnd=Math.min(Le,D.value.length);else{var Ve=D.ownerDocument||document,we=Ve&&Ve.defaultView||window;if(we.getSelection){var ke=we.getSelection(),Rt=D.textContent.length,Xt=Math.min(K.start,Rt),os=K.end===void 0?Xt:Math.min(K.end,Rt);!ke.extend&&Xt>os&&(v=os,os=Xt,Xt=v);var ce=Ie(D,Xt),ne=Ie(D,os);if(ce&&ne&&(ke.rangeCount!==1||ke.anchorNode!==ce.node||ke.anchorOffset!==ce.offset||ke.focusNode!==ne.node||ke.focusOffset!==ne.offset)){var ge=Ve.createRange();ge.setStart(ce.node,ce.offset),ke.removeAllRanges(),Xt>os?(ke.addRange(ge),ke.extend(ne.node,ne.offset)):(ge.setEnd(ne.node,ne.offset),ke.addRange(ge))}}}}for(Ve=[],ke=D;ke=ke.parentNode;)ke.nodeType===1&&Ve.push({element:ke,left:ke.scrollLeft,top:ke.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Ve.length;D++){var He=Ve[D];He.element.scrollLeft=He.left,He.element.scrollTop=He.top}}Gu=!!Mh,Eh=Mh=null}finally{Fn=f,oe.p=r,O.T=o}}t.current=s,yo=2}}function p0(){if(yo===2){yo=0;var t=er,s=hl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=O.T,O.T=null;var r=oe.p;oe.p=2;var f=Fn;Fn|=4;try{Vg(t,s.alternate,s)}finally{Fn=f,oe.p=r,O.T=o}}yo=3}}function _0(){if(yo===4||yo===3){yo=0,Ue();var t=er,s=hl,o=Ba,r=n0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?yo=5:(yo=0,hl=er=null,g0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ja=null),rs(o),s=s.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(nt,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=O.T,f=oe.p,oe.p=2,O.T=null;try{for(var m=t.onRecoverableError,v=0;v<r.length;v++){var D=r[v];m(D.value,{componentStack:D.stack})}}finally{O.T=s,oe.p=f}}(Ba&3)!==0&&Ou(),ha(t),f=t.pendingLanes,(o&261930)!==0&&(f&42)!==0?t===mh?fc++:(fc=0,mh=t):fc=0,hc(0)}}function g0(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,Xl(s)))}function Ou(){return m0(),p0(),_0(),y0()}function y0(){if(yo!==5)return!1;var t=er,s=fh;fh=0;var o=rs(Ba),r=O.T,f=oe.p;try{oe.p=32>o?32:o,O.T=null,o=hh,hh=null;var m=er,v=Ba;if(yo=0,hl=er=null,Ba=0,(Fn&6)!==0)throw Error(a(331));var D=Fn;if(Fn|=4,Jg(m.current),Kg(m,m.current,v,o),Fn=D,hc(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(nt,m)}catch{}return!0}finally{oe.p=f,O.T=r,g0(t,s)}}function x0(t,s,o){s=Pi(o,s),s=Ff(t.stateNode,s,2),t=Xa(t,s,2),t!==null&&(ft(t,2),ha(t))}function Jn(t,s,o){if(t.tag===3)x0(t,t,o);else for(;s!==null;){if(s.tag===3){x0(s,t,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))){t=Pi(o,t),o=bg(2),r=Xa(s,o,2),r!==null&&(vg(o,r,s,t),ft(r,2),ha(r));break}}s=s.return}}function gh(t,s,o){var r=t.pingCache;if(r===null){r=t.pingCache=new q2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(ch=!0,f.add(o),t=ev.bind(null,t,s,o),s.then(t,t))}function ev(t,s,o){var r=t.pingCache;r!==null&&r.delete(s),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,ds===t&&(An&o)===o&&(Hs===4||Hs===3&&(An&62914560)===An&&300>vt()-Au?(Fn&2)===0&&ml(t,0):uh|=o,fl===An&&(fl=0)),ha(t)}function b0(t,s){s===0&&(s=pt()),t=ca(t,s),t!==null&&(ft(t,s),ha(t))}function tv(t){var s=t.memoizedState,o=0;s!==null&&(o=s.retryLane),b0(t,o)}function nv(t,s){var o=0;switch(t.tag){case 31:case 13:var r=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),b0(t,o)}function sv(t,s){return dt(t,s)}var zu=null,_l=null,yh=!1,$u=!1,xh=!1,nr=0;function ha(t){t!==_l&&t.next===null&&(_l===null?zu=_l=t:_l=_l.next=t),$u=!0,yh||(yh=!0,iv())}function hc(t,s){if(!xh&&$u){xh=!0;do for(var o=!1,r=zu;r!==null;){if(t!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,D=r.pingedLanes;m=(1<<31-xe(42|t)+1)-1,m&=f&~(v&~D),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,C0(r,m))}else m=An,m=Ze(r,r===ds?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Bt(r,m)||(o=!0,C0(r,m));r=r.next}while(o);xh=!1}}function ov(){v0()}function v0(){$u=yh=!1;var t=0;nr!==0&&pv()&&(t=nr);for(var s=vt(),o=null,r=zu;r!==null;){var f=r.next,m=w0(r,s);m===0?(r.next=null,o===null?zu=f:o.next=f,f===null&&(_l=o)):(o=r,(t!==0||(m&3)!==0)&&($u=!0)),r=f}yo!==0&&yo!==5||hc(t),nr!==0&&(nr=0)}function w0(t,s){for(var o=t.suspendedLanes,r=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var v=31-xe(m),D=1<<v,K=f[v];K===-1?((D&o)===0||(D&r)!==0)&&(f[v]=kt(D,s)):K<=s&&(t.expiredLanes|=D),m&=~D}if(s=ds,o=An,o=Ze(t,t===s?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,o===0||t===s&&(Zn===2||Zn===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&rt(r),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||Bt(t,o)){if(s=o&-o,s===t.callbackPriority)return s;switch(r!==null&&rt(r),rs(o)){case 2:case 8:o=Ke;break;case 32:o=it;break;case 268435456:o=te;break;default:o=it}return r=S0.bind(null,t),o=dt(o,r),t.callbackPriority=s,t.callbackNode=o,s}return r!==null&&r!==null&&rt(r),t.callbackPriority=2,t.callbackNode=null,2}function S0(t,s){if(yo!==0&&yo!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(Ou()&&t.callbackNode!==o)return null;var r=An;return r=Ze(t,t===ds?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(o0(t,r,s),w0(t,vt()),t.callbackNode!=null&&t.callbackNode===o?S0.bind(null,t):null)}function C0(t,s){if(Ou())return null;o0(t,s,!0)}function iv(){gv(function(){(Fn&6)!==0?dt(Et,ov):v0()})}function bh(){if(nr===0){var t=tl;t===0&&(t=Be,Be<<=1,(Be&261888)===0&&(Be=256)),nr=t}return nr}function k0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Os(""+t)}function j0(t,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,t.id&&o.setAttribute("form",t.id),s.parentNode.insertBefore(o,s),t=new FormData(t),o.parentNode.removeChild(o),t}function av(t,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=k0((f[on]||null).action),v=r.submitter;v&&(s=(s=v[on]||null)?k0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var D=new Yo("action","action",null,r,f);t.push({event:D,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nr!==0){var K=v?j0(f,v):new FormData(f);Pf(o,{pending:!0,data:K,method:f.method,action:m},null,K)}}else typeof m=="function"&&(D.preventDefault(),K=v?j0(f,v):new FormData(f),Pf(o,{pending:!0,data:K,method:f.method,action:m},m,K))},currentTarget:f}]})}}for(var vh=0;vh<Gr.length;vh++){var wh=Gr[vh],rv=wh.toLowerCase(),lv=wh[0].toUpperCase()+wh.slice(1);_i(rv,"on"+lv)}_i(pi,"onAnimationEnd"),_i(Ti,"onAnimationIteration"),_i(gr,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Wr,"onTransitionRun"),_i(Fr,"onTransitionStart"),_i(Xr,"onTransitionCancel"),_i(Ul,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hs("onBeforeInput",["compositionend","keypress","textInput","paste"]),hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mc));function M0(t,s){s=(s&4)!==0;for(var o=0;o<t.length;o++){var r=t[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var D=r[v],K=D.instance,ye=D.currentTarget;if(D=D.listener,K!==m&&f.isPropagationStopped())break e;m=D,f.currentTarget=ye;try{m(f)}catch(Le){yr(Le)}f.currentTarget=null,m=K}else for(v=0;v<r.length;v++){if(D=r[v],K=D.instance,ye=D.currentTarget,D=D.listener,K!==m&&f.isPropagationStopped())break e;m=D,f.currentTarget=ye;try{m(f)}catch(Le){yr(Le)}f.currentTarget=null,m=K}}}}function En(t,s){var o=s[zn];o===void 0&&(o=s[zn]=new Set);var r=t+"__bubble";o.has(r)||(E0(s,t,2,!1),o.add(r))}function Sh(t,s,o){var r=0;s&&(r|=4),E0(o,t,r,s)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function Ch(t){if(!t[Iu]){t[Iu]=!0,Fs.forEach(function(o){o!=="selectionchange"&&(cv.has(o)||Sh(o,!1,t),Sh(o,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[Iu]||(s[Iu]=!0,Sh("selectionchange",!1,s))}}function E0(t,s,o,r){switch(sy(s)){case 2:var f=zv;break;case 8:f=$v;break;default:f=Ih}o=f.bind(null,s,o,t),f=void 0,!$s||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?t.addEventListener(s,o,{capture:!0,passive:f}):t.addEventListener(s,o,!0):f!==void 0?t.addEventListener(s,o,{passive:f}):t.addEventListener(s,o,!1)}function kh(t,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var D=r.stateNode.containerInfo;if(D===f)break;if(v===4)for(v=r.return;v!==null;){var K=v.tag;if((K===3||K===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;D!==null;){if(v=co(D),v===null)return;if(K=v.tag,K===5||K===6||K===26||K===27){r=m=v;continue e}D=D.parentNode}}r=r.return}zs(function(){var ye=m,Le=ls(o),Ve=[];e:{var we=Vl.get(t);if(we!==void 0){var ke=Yo,Rt=t;switch(t){case"keypress":if(fo(o)===0)break e;case"keydown":case"keyup":ke=Co;break;case"focusin":Rt="focus",ke=No;break;case"focusout":Rt="blur",ke=No;break;case"beforeblur":case"afterblur":ke=No;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Fo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=de;break;case pi:case Ti:case gr:ke=Mi;break;case Ul:ke=Pe;break;case"scroll":case"scrollend":ke=mo;break;case"wheel":ke=Yt;break;case"copy":case"cut":case"paste":ke=ti;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=M;break;case"toggle":case"beforetoggle":ke=Zt}var Xt=(s&4)!==0,os=!Xt&&(t==="scroll"||t==="scrollend"),ce=Xt?we!==null?we+"Capture":null:we;Xt=[];for(var ne=ye,ge;ne!==null;){var He=ne;if(ge=He.stateNode,He=He.tag,He!==5&&He!==26&&He!==27||ge===null||ce===null||(He=yn(ne,ce),He!=null&&Xt.push(pc(ne,He,ge))),os)break;ne=ne.return}0<Xt.length&&(we=new ke(we,Rt,null,o,Le),Ve.push({event:we,listeners:Xt}))}}if((s&7)===0){e:{if(we=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",we&&o!==to&&(Rt=o.relatedTarget||o.fromElement)&&(co(Rt)||Rt[Qe]))break e;if((ke||we)&&(we=Le.window===Le?Le:(we=Le.ownerDocument)?we.defaultView||we.parentWindow:window,ke?(Rt=o.relatedTarget||o.toElement,ke=ye,Rt=Rt?co(Rt):null,Rt!==null&&(os=u(Rt),Xt=Rt.tag,Rt!==os||Xt!==5&&Xt!==27&&Xt!==6)&&(Rt=null)):(ke=null,Rt=ye),ke!==Rt)){if(Xt=us,He="onMouseLeave",ce="onMouseEnter",ne="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=M,He="onPointerLeave",ce="onPointerEnter",ne="pointer"),os=ke==null?we:tn(ke),ge=Rt==null?we:tn(Rt),we=new Xt(He,ne+"leave",ke,o,Le),we.target=os,we.relatedTarget=ge,He=null,co(Le)===ye&&(Xt=new Xt(ce,ne+"enter",Rt,o,Le),Xt.target=ge,Xt.relatedTarget=os,He=Xt),os=He,ke&&Rt)t:{for(Xt=uv,ce=ke,ne=Rt,ge=0,He=ce;He;He=Xt(He))ge++;He=0;for(var Vt=ne;Vt;Vt=Xt(Vt))He++;for(;0<ge-He;)ce=Xt(ce),ge--;for(;0<He-ge;)ne=Xt(ne),He--;for(;ge--;){if(ce===ne||ne!==null&&ce===ne.alternate){Xt=ce;break t}ce=Xt(ce),ne=Xt(ne)}Xt=null}else Xt=null;ke!==null&&T0(Ve,we,ke,Xt,!1),Rt!==null&&os!==null&&T0(Ve,os,Rt,Xt,!0)}}e:{if(we=ye?tn(ye):window,ke=we.nodeName&&we.nodeName.toLowerCase(),ke==="select"||ke==="input"&&we.type==="file")var In=U;else if(jo(we))if(w)In=G;else{In=Me;var It=ae}else ke=we.nodeName,!ke||ke.toLowerCase()!=="input"||we.type!=="checkbox"&&we.type!=="radio"?ye&&Vn(ye.elementType)&&(In=U):In=Ge;if(In&&(In=In(t,ye))){Ro(Ve,In,o,Le);break e}It&&It(t,we,ye),t==="focusout"&&ye&&we.type==="number"&&ye.memoizedProps.value!=null&&Gs(we,"number",we.value)}switch(It=ye?tn(ye):window,t){case"focusin":(jo(It)||It.contentEditable==="true")&&(bt=It,dn=ye,Ft=null);break;case"focusout":Ft=dn=bt=null;break;case"mousedown":fn=!0;break;case"contextmenu":case"mouseup":case"dragend":fn=!1,Ln(Ve,o,Le);break;case"selectionchange":if(ht)break;case"keydown":case"keyup":Ln(Ve,o,Le)}var xn;if(un)e:{switch(t){case"compositionstart":var Nn="onCompositionStart";break e;case"compositionend":Nn="onCompositionEnd";break e;case"compositionupdate":Nn="onCompositionUpdate";break e}Nn=void 0}else Ns?Yn(t,o)&&(Nn="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Nn="onCompositionStart");Nn&&(Is&&o.locale!=="ko"&&(Ns||Nn!=="onCompositionStart"?Nn==="onCompositionEnd"&&Ns&&(xn=Jo()):(Es=Le,ui="value"in Es?Es.value:Es.textContent,Ns=!0)),It=Pu(ye,Nn),0<It.length&&(Nn=new At(Nn,t,null,o,Le),Ve.push({event:Nn,listeners:It}),xn?Nn.data=xn:(xn=_o(o),xn!==null&&(Nn.data=xn)))),(xn=Gn?Ei(t,o):go(t,o))&&(Nn=Pu(ye,"onBeforeInput"),0<Nn.length&&(It=new At("onBeforeInput","beforeinput",null,o,Le),Ve.push({event:It,listeners:Nn}),It.data=xn)),av(Ve,t,ye,o,Le)}M0(Ve,s)})}function pc(t,s,o){return{instance:t,listener:s,currentTarget:o}}function Pu(t,s){for(var o=s+"Capture",r=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=yn(t,o),f!=null&&r.unshift(pc(t,f,m)),f=yn(t,s),f!=null&&r.push(pc(t,f,m))),t.tag===3)return r;t=t.return}return[]}function uv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T0(t,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var D=o,K=D.alternate,ye=D.stateNode;if(D=D.tag,K!==null&&K===r)break;D!==5&&D!==26&&D!==27||ye===null||(K=ye,f?(ye=yn(o,m),ye!=null&&v.unshift(pc(o,ye,K))):f||(ye=yn(o,m),ye!=null&&v.push(pc(o,ye,K)))),o=o.return}v.length!==0&&t.push({event:s,listeners:v})}var dv=/\r\n?/g,fv=/\u0000|\uFFFD/g;function A0(t){return(typeof t=="string"?t:""+t).replace(dv,`
`).replace(fv,"")}function N0(t,s){return s=A0(s),A0(t)===s}function ss(t,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Vo(t,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Vo(t,""+r);break;case"className":qn(t,"class",r);break;case"tabIndex":qn(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(t,o,r);break;case"style":Ls(t,r,m);break;case"data":if(s!=="object"){qn(t,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){t.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Os(""+r),t.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ss(t,s,"name",f.name,f,null),ss(t,s,"formEncType",f.formEncType,f,null),ss(t,s,"formMethod",f.formMethod,f,null),ss(t,s,"formTarget",f.formTarget,f,null)):(ss(t,s,"encType",f.encType,f,null),ss(t,s,"method",f.method,f,null),ss(t,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=Os(""+r),t.setAttribute(o,r);break;case"onClick":r!=null&&(t.onclick=uo);break;case"onScroll":r!=null&&En("scroll",t);break;case"onScrollEnd":r!=null&&En("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}o=Os(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""+r):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":r===!0?t.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,r):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(o,r):t.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(o):t.setAttribute(o,r);break;case"popover":En("beforetoggle",t),En("toggle",t),Rs(t,"popover",r);break;case"xlinkActuate":_s(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":_s(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":_s(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":_s(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":_s(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":_s(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":_s(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":_s(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":_s(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Rs(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ki.get(o)||o,Rs(t,o,r))}}function jh(t,s,o,r,f,m){switch(o){case"style":Ls(t,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"children":typeof r=="string"?Vo(t,r):(typeof r=="number"||typeof r=="bigint")&&Vo(t,""+r);break;case"onScroll":r!=null&&En("scroll",t);break;case"onScrollEnd":r!=null&&En("scrollend",t);break;case"onClick":r!=null&&(t.onclick=uo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bn.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=t[on]||null,m=m!=null?m[o]:null,typeof m=="function"&&t.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(s,r,f);break e}o in t?t[o]=r:r===!0?t.setAttribute(o,""):Rs(t,o,r)}}}function $o(t,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":En("error",t),En("load",t);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ss(t,s,m,v,o,null)}}f&&ss(t,s,"srcSet",o.srcSet,o,null),r&&ss(t,s,"src",o.src,o,null);return;case"input":En("invalid",t);var D=m=v=f=null,K=null,ye=null;for(r in o)if(o.hasOwnProperty(r)){var Le=o[r];if(Le!=null)switch(r){case"name":f=Le;break;case"type":v=Le;break;case"checked":K=Le;break;case"defaultChecked":ye=Le;break;case"value":m=Le;break;case"defaultValue":D=Le;break;case"children":case"dangerouslySetInnerHTML":if(Le!=null)throw Error(a(137,s));break;default:ss(t,s,r,Le,o,null)}}Sn(t,m,D,K,ye,v,f,!1);return;case"select":En("invalid",t),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(D=o[f],D!=null))switch(f){case"value":m=D;break;case"defaultValue":v=D;break;case"multiple":r=D;default:ss(t,s,f,D,o,null)}s=m,o=v,t.multiple=!!r,s!=null?vn(t,!!r,s,!1):o!=null&&vn(t,!!r,o,!0);return;case"textarea":En("invalid",t),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(D=o[v],D!=null))switch(v){case"value":r=D;break;case"defaultValue":f=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:ss(t,s,v,D,o,null)}Si(t,r,f,m);return;case"option":for(K in o)if(o.hasOwnProperty(K)&&(r=o[K],r!=null))switch(K){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ss(t,s,K,r,o,null)}return;case"dialog":En("beforetoggle",t),En("toggle",t),En("cancel",t),En("close",t);break;case"iframe":case"object":En("load",t);break;case"video":case"audio":for(r=0;r<mc.length;r++)En(mc[r],t);break;case"image":En("error",t),En("load",t);break;case"details":En("toggle",t);break;case"embed":case"source":case"link":En("error",t),En("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ye in o)if(o.hasOwnProperty(ye)&&(r=o[ye],r!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ss(t,s,ye,r,o,null)}return;default:if(Vn(s)){for(Le in o)o.hasOwnProperty(Le)&&(r=o[Le],r!==void 0&&jh(t,s,Le,r,o,void 0));return}}for(D in o)o.hasOwnProperty(D)&&(r=o[D],r!=null&&ss(t,s,D,r,o,null))}function hv(t,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,D=null,K=null,ye=null,Le=null;for(ke in o){var Ve=o[ke];if(o.hasOwnProperty(ke)&&Ve!=null)switch(ke){case"checked":break;case"value":break;case"defaultValue":K=Ve;default:r.hasOwnProperty(ke)||ss(t,s,ke,null,r,Ve)}}for(var we in r){var ke=r[we];if(Ve=o[we],r.hasOwnProperty(we)&&(ke!=null||Ve!=null))switch(we){case"type":m=ke;break;case"name":f=ke;break;case"checked":ye=ke;break;case"defaultChecked":Le=ke;break;case"value":v=ke;break;case"defaultValue":D=ke;break;case"children":case"dangerouslySetInnerHTML":if(ke!=null)throw Error(a(137,s));break;default:ke!==Ve&&ss(t,s,we,ke,r,Ve)}}Kn(t,v,D,K,ye,Le,m,f);return;case"select":ke=v=D=we=null;for(m in o)if(K=o[m],o.hasOwnProperty(m)&&K!=null)switch(m){case"value":break;case"multiple":ke=K;default:r.hasOwnProperty(m)||ss(t,s,m,null,r,K)}for(f in r)if(m=r[f],K=o[f],r.hasOwnProperty(f)&&(m!=null||K!=null))switch(f){case"value":we=m;break;case"defaultValue":D=m;break;case"multiple":v=m;default:m!==K&&ss(t,s,f,m,r,K)}s=D,o=v,r=ke,we!=null?vn(t,!!o,we,!1):!!r!=!!o&&(s!=null?vn(t,!!o,s,!0):vn(t,!!o,o?[]:"",!1));return;case"textarea":ke=we=null;for(D in o)if(f=o[D],o.hasOwnProperty(D)&&f!=null&&!r.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:ss(t,s,D,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":we=f;break;case"defaultValue":ke=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ss(t,s,v,f,r,m)}ms(t,we,ke);return;case"option":for(var Rt in o)if(we=o[Rt],o.hasOwnProperty(Rt)&&we!=null&&!r.hasOwnProperty(Rt))switch(Rt){case"selected":t.selected=!1;break;default:ss(t,s,Rt,null,r,we)}for(K in r)if(we=r[K],ke=o[K],r.hasOwnProperty(K)&&we!==ke&&(we!=null||ke!=null))switch(K){case"selected":t.selected=we&&typeof we!="function"&&typeof we!="symbol";break;default:ss(t,s,K,we,r,ke)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in o)we=o[Xt],o.hasOwnProperty(Xt)&&we!=null&&!r.hasOwnProperty(Xt)&&ss(t,s,Xt,null,r,we);for(ye in r)if(we=r[ye],ke=o[ye],r.hasOwnProperty(ye)&&we!==ke&&(we!=null||ke!=null))switch(ye){case"children":case"dangerouslySetInnerHTML":if(we!=null)throw Error(a(137,s));break;default:ss(t,s,ye,we,r,ke)}return;default:if(Vn(s)){for(var os in o)we=o[os],o.hasOwnProperty(os)&&we!==void 0&&!r.hasOwnProperty(os)&&jh(t,s,os,void 0,r,we);for(Le in r)we=r[Le],ke=o[Le],!r.hasOwnProperty(Le)||we===ke||we===void 0&&ke===void 0||jh(t,s,Le,we,r,ke);return}}for(var ce in o)we=o[ce],o.hasOwnProperty(ce)&&we!=null&&!r.hasOwnProperty(ce)&&ss(t,s,ce,null,r,we);for(Ve in r)we=r[Ve],ke=o[Ve],!r.hasOwnProperty(Ve)||we===ke||we==null&&ke==null||ss(t,s,Ve,we,r,ke)}function D0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,D=f.duration;if(m&&D&&D0(v)){for(v=0,D=f.responseEnd,r+=1;r<o.length;r++){var K=o[r],ye=K.startTime;if(ye>D)break;var Le=K.transferSize,Ve=K.initiatorType;Le&&D0(Ve)&&(K=K.responseEnd,v+=Le*(K<D?1:(D-ye)/(K-ye)))}if(--r,s+=8*(m+v)/(f.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mh=null,Eh=null;function Hu(t){return t.nodeType===9?t:t.ownerDocument}function R0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B0(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function Th(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ah=null;function pv(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(t){return O0.resolve(null).then(t).catch(yv)}:L0;function yv(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function z0(t,s){var o=s,r=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){t.removeChild(f),bl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")_c(t.ownerDocument.documentElement);else if(o==="head"){o=t.ownerDocument.head,_c(o);for(var m=o.firstChild;m;){var v=m.nextSibling,D=m.nodeName;m[bo]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&_c(t.ownerDocument.body);o=f}while(o);bl(s)}function $0(t,s){var o=t;t=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(t===0)break;t--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||t++;o=r}while(o)}function Nh(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Nh(o),Ys(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function xv(t,s,o,r){for(;t.nodeType===1;){var f=o;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[bo])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Wi(t.nextSibling),t===null)break}return null}function bv(t,s,o){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Wi(t.nextSibling),t===null))return null;return t}function I0(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Wi(t.nextSibling),t===null))return null;return t}function Dh(t){return t.data==="$?"||t.data==="$~"}function Rh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function vv(t,s){var o=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Wi(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var Bh=null;function P0(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"||o==="/&"){if(s===0)return Wi(t.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}t=t.nextSibling}return null}function H0(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return t;s--}else o!=="/$"&&o!=="/&"||s++}t=t.previousSibling}return null}function U0(t,s,o){switch(s=Hu(o),t){case"html":if(t=s.documentElement,!t)throw Error(a(452));return t;case"head":if(t=s.head,!t)throw Error(a(453));return t;case"body":if(t=s.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function _c(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ys(t)}var Fi=new Map,V0=new Set;function Uu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var La=oe.d;oe.d={f:wv,r:Sv,D:Cv,C:kv,L:jv,m:Mv,X:Tv,S:Ev,M:Av};function wv(){var t=La.f(),s=Ru();return t||s}function Sv(t){var s=Ws(t);s!==null&&s.tag===5&&s.type==="form"?ag(s):La.r(t)}var gl=typeof document>"u"?null:document;function Y0(t,s,o){var r=gl;if(r&&typeof s=="string"&&s){var f=ks(s);f='link[rel="'+t+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),V0.has(f)||(V0.add(f),t={rel:t,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),$o(s,"link",t),bn(s),r.head.appendChild(s)))}}function Cv(t){La.D(t),Y0("dns-prefetch",t,null)}function kv(t,s){La.C(t,s),Y0("preconnect",t,s)}function jv(t,s,o){La.L(t,s,o);var r=gl;if(r&&t&&s){var f='link[rel="preload"][as="'+ks(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+ks(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+ks(o.imageSizes)+'"]')):f+='[href="'+ks(t)+'"]';var m=f;switch(s){case"style":m=yl(t);break;case"script":m=xl(t)}Fi.has(m)||(t=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:t,as:s},o),Fi.set(m,t),r.querySelector(f)!==null||s==="style"&&r.querySelector(gc(m))||s==="script"&&r.querySelector(yc(m))||(s=r.createElement("link"),$o(s,"link",t),bn(s),r.head.appendChild(s)))}}function Mv(t,s){La.m(t,s);var o=gl;if(o&&t){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+ks(r)+'"][href="'+ks(t)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xl(t)}if(!Fi.has(m)&&(t=x({rel:"modulepreload",href:t},s),Fi.set(m,t),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(yc(m)))return}r=o.createElement("link"),$o(r,"link",t),bn(r),o.head.appendChild(r)}}}function Ev(t,s,o){La.S(t,s,o);var r=gl;if(r&&t){var f=kn(r).hoistableStyles,m=yl(t);s=s||"default";var v=f.get(m);if(!v){var D={loading:0,preload:null};if(v=r.querySelector(gc(m)))D.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":s},o),(o=Fi.get(m))&&Lh(t,o);var K=v=r.createElement("link");bn(K),$o(K,"link",t),K._p=new Promise(function(ye,Le){K.onload=ye,K.onerror=Le}),K.addEventListener("load",function(){D.loading|=1}),K.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Vu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:D},f.set(m,v)}}}function Tv(t,s){La.X(t,s);var o=gl;if(o&&t){var r=kn(o).hoistableScripts,f=xl(t),m=r.get(f);m||(m=o.querySelector(yc(f)),m||(t=x({src:t,async:!0},s),(s=Fi.get(f))&&Oh(t,s),m=o.createElement("script"),bn(m),$o(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function Av(t,s){La.M(t,s);var o=gl;if(o&&t){var r=kn(o).hoistableScripts,f=xl(t),m=r.get(f);m||(m=o.querySelector(yc(f)),m||(t=x({src:t,async:!0,type:"module"},s),(s=Fi.get(f))&&Oh(t,s),m=o.createElement("script"),bn(m),$o(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function W0(t,s,o,r){var f=(f=pe.current)?Uu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=yl(o.href),o=kn(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=yl(o.href);var m=kn(f).hoistableStyles,v=m.get(t);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,v),(m=f.querySelector(gc(t)))&&!m._p&&(v.instance=m,v.state.loading=5),Fi.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Fi.set(t,o),m||Nv(f,t,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=xl(o),o=kn(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function yl(t){return'href="'+ks(t)+'"'}function gc(t){return'link[rel="stylesheet"]['+t+"]"}function F0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Nv(t,s,o,r){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=t.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),$o(s,"link",o),bn(s),t.head.appendChild(s))}function xl(t){return'[src="'+ks(t)+'"]'}function yc(t){return"script[async]"+t}function X0(t,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=t.querySelector('style[data-href~="'+ks(o.href)+'"]');if(r)return s.instance=r,bn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),bn(r),$o(r,"style",f),Vu(r,o.precedence,t),s.instance=r;case"stylesheet":f=yl(o.href);var m=t.querySelector(gc(f));if(m)return s.state.loading|=4,s.instance=m,bn(m),m;r=F0(o),(f=Fi.get(f))&&Lh(r,f),m=(t.ownerDocument||t).createElement("link"),bn(m);var v=m;return v._p=new Promise(function(D,K){v.onload=D,v.onerror=K}),$o(m,"link",r),s.state.loading|=4,Vu(m,o.precedence,t),s.instance=m;case"script":return m=xl(o.src),(f=t.querySelector(yc(m)))?(s.instance=f,bn(f),f):(r=o,(f=Fi.get(m))&&(r=x({},o),Oh(r,f)),t=t.ownerDocument||t,f=t.createElement("script"),bn(f),$o(f,"link",r),t.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Vu(r,o.precedence,t));return s.instance}function Vu(t,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var D=r[v];if(D.dataset.precedence===s)m=D;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(t,s.firstChild))}function Lh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function Oh(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var Yu=null;function G0(t,s,o){if(Yu===null){var r=new Map,f=Yu=new Map;f.set(o,r)}else f=Yu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(t))return r;for(r.set(t,null),o=o.getElementsByTagName(t),f=0;f<o.length;f++){var m=o[f];if(!(m[bo]||m[zt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=t+v;var D=r.get(v);D?D.push(m):r.set(v,[m])}}return r}function q0(t,s,o){t=t.ownerDocument||t,t.head.insertBefore(o,s==="title"?t.querySelector("head > title"):null)}function Dv(t,s,o){if(o===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return t=s.disabled,typeof s.precedence=="string"&&t==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function K0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Rv(t,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=yl(r.href),m=s.querySelector(gc(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=Wu.bind(t),s.then(t,t)),o.state.loading|=4,o.instance=m,bn(m);return}m=s.ownerDocument||s,r=F0(r),(f=Fi.get(f))&&Lh(r,f),m=m.createElement("link"),bn(m);var v=m;v._p=new Promise(function(D,K){v.onload=D,v.onerror=K}),$o(m,"link",r),o.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(t.count++,o=Wu.bind(t),s.addEventListener("load",o),s.addEventListener("error",o))}}var zh=0;function Bv(t,s){return t.stylesheets&&t.count===0&&Xu(t,t.stylesheets),0<t.count||0<t.imgCount?function(o){var r=setTimeout(function(){if(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+s);0<t.imgBytes&&zh===0&&(zh=62500*mv());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>zh?50:800)+s);return t.unsuspend=o,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fu=null;function Xu(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fu=new Map,s.forEach(Lv,t),Fu=null,Wu.call(t))}function Lv(t,s){if(!(s.state.loading&4)){var o=Fu.get(t);if(o)var r=o.get(null);else{o=new Map,Fu.set(t,o);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Wu.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),s.state.loading|=4}}var xc={$$typeof:L,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Ov(t,s,o,r,f,m,v,D,K){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.hiddenUpdates=cn(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=K,this.incompleteTransitions=new Map}function Q0(t,s,o,r,f,m,v,D,K,ye,Le,Ve){return t=new Ov(t,s,o,v,K,ye,Le,Ve,D),s=1,m===!0&&(s|=24),m=Qt(3,null,null,s),t.current=m,m.stateNode=t,s=_f(),s.refCount++,t.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},bf(m),t}function Z0(t){return t?(t=ba,t):ba}function J0(t,s,o,r,f,m){f=Z0(f),r.context===null?r.context=f:r.pendingContext=f,r=Fa(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Xa(t,r,s),o!==null&&(vi(o,t,s),Ql(o,t,s))}function ey(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<s?o:s}}function $h(t,s){ey(t,s),(t=t.alternate)&&ey(t,s)}function ty(t){if(t.tag===13||t.tag===31){var s=ca(t,67108864);s!==null&&vi(s,t,67108864),$h(t,67108864)}}function ny(t){if(t.tag===13||t.tag===31){var s=Bi();s=mn(s);var o=ca(t,s);o!==null&&vi(o,t,s),$h(t,s)}}var Gu=!0;function zv(t,s,o,r){var f=O.T;O.T=null;var m=oe.p;try{oe.p=2,Ih(t,s,o,r)}finally{oe.p=m,O.T=f}}function $v(t,s,o,r){var f=O.T;O.T=null;var m=oe.p;try{oe.p=8,Ih(t,s,o,r)}finally{oe.p=m,O.T=f}}function Ih(t,s,o,r){if(Gu){var f=Ph(r);if(f===null)kh(t,s,r,qu,o),oy(t,r);else if(Pv(f,t,s,o,r))r.stopPropagation();else if(oy(t,r),s&4&&-1<Iv.indexOf(t)){for(;f!==null;){var m=Ws(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Ct(m.pendingLanes);if(v!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;v;){var K=1<<31-xe(v);D.entanglements[1]|=K,v&=~K}ha(m),(Fn&6)===0&&(Nu=vt()+500,hc(0))}}break;case 31:case 13:D=ca(m,2),D!==null&&vi(D,m,2),Ru(),$h(m,2)}if(m=Ph(r),m===null&&kh(t,s,r,qu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else kh(t,s,r,null,o)}}function Ph(t){return t=ls(t),Hh(t)}var qu=null;function Hh(t){if(qu=null,t=co(t),t!==null){var s=u(t);if(s===null)t=null;else{var o=s.tag;if(o===13){if(t=d(s),t!==null)return t;t=null}else if(o===31){if(t=h(s),t!==null)return t;t=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return qu=t,null}function sy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case Et:return 2;case Ke:return 8;case it:case V:return 32;case te:return 268435456;default:return 32}default:return 32}}var Uh=!1,or=null,ir=null,ar=null,bc=new Map,vc=new Map,rr=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oy(t,s){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":bc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":vc.delete(s.pointerId)}}function wc(t,s,o,r,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Ws(s),s!==null&&ty(s)),t):(t.eventSystemFlags|=r,s=t.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),t)}function Pv(t,s,o,r,f){switch(s){case"focusin":return or=wc(or,t,s,o,r,f),!0;case"dragenter":return ir=wc(ir,t,s,o,r,f),!0;case"mouseover":return ar=wc(ar,t,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return bc.set(m,wc(bc.get(m)||null,t,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,vc.set(m,wc(vc.get(m)||null,t,s,o,r,f)),!0}return!1}function iy(t){var s=co(t.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){t.blockedOn=s,gn(t.priority,function(){ny(o)});return}}else if(s===31){if(s=h(o),s!==null){t.blockedOn=s,gn(t.priority,function(){ny(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ku(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var o=Ph(t.nativeEvent);if(o===null){o=t.nativeEvent;var r=new o.constructor(o.type,o);to=r,o.target.dispatchEvent(r),to=null}else return s=Ws(o),s!==null&&ty(s),t.blockedOn=o,!1;s.shift()}return!0}function ay(t,s,o){Ku(t)&&o.delete(s)}function Hv(){Uh=!1,or!==null&&Ku(or)&&(or=null),ir!==null&&Ku(ir)&&(ir=null),ar!==null&&Ku(ar)&&(ar=null),bc.forEach(ay),vc.forEach(ay)}function Qu(t,s){t.blockedOn===s&&(t.blockedOn=null,Uh||(Uh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hv)))}var Zu=null;function ry(t){Zu!==t&&(Zu=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Zu===t&&(Zu=null);for(var s=0;s<t.length;s+=3){var o=t[s],r=t[s+1],f=t[s+2];if(typeof r!="function"){if(Hh(r||o)===null)continue;break}var m=Ws(o);m!==null&&(t.splice(s,3),s-=3,Pf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function bl(t){function s(K){return Qu(K,t)}or!==null&&Qu(or,t),ir!==null&&Qu(ir,t),ar!==null&&Qu(ar,t),bc.forEach(s),vc.forEach(s);for(var o=0;o<rr.length;o++){var r=rr[o];r.blockedOn===t&&(r.blockedOn=null)}for(;0<rr.length&&(o=rr[0],o.blockedOn===null);)iy(o),o.blockedOn===null&&rr.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[on]||null;if(typeof m=="function")v||ry(o);else if(v){var D=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[on]||null)D=v.formAction;else if(Hh(f)!==null)continue}else D=v.action;typeof D=="function"?o[r+1]=D:(o.splice(r,3),r-=3),ry(o)}}}function ly(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Vh(t){this._internalRoot=t}Ju.prototype.render=Vh.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=Bi();J0(o,r,t,s,null,null)},Ju.prototype.unmount=Vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;J0(t.current,2,null,t,null,null),Ru(),s[Qe]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var s=en();t={blockedOn:null,target:t,priority:s};for(var o=0;o<rr.length&&s!==0&&s<rr[o].priority;o++);rr.splice(o,0,t),o===0&&iy(t)}};var cy=n.version;if(cy!=="19.2.4")throw Error(a(527,cy,"19.2.4"));oe.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=y(s),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Uv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ed=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ed.isDisabled&&ed.supportsFiber)try{nt=ed.inject(Uv),Ye=ed}catch{}}return Cc.createRoot=function(t,s){if(!c(t))throw Error(a(299));var o=!1,r="",f=_g,m=gg,v=yg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=Q0(t,1,!1,null,null,o,r,null,f,m,v,ly),t[Qe]=s.current,Ch(t),new Vh(s)},Cc.hydrateRoot=function(t,s,o){if(!c(t))throw Error(a(299));var r=!1,f="",m=_g,v=gg,D=yg,K=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(D=o.onRecoverableError),o.formState!==void 0&&(K=o.formState)),s=Q0(t,1,!0,s,o!=null?o:null,r,f,K,m,v,D,ly),s.context=Z0(null),o=s.current,r=Bi(),r=mn(r),f=Fa(r),f.callback=null,Xa(o,f,r),o=r,s.current.lanes=o,ft(s,o),ha(s),t[Qe]=s.current,Ch(t),new Ju(s)},Cc.version="19.2.4",Cc}var xy;function Qv(){if(xy)return Wh.exports;xy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Wh.exports=Kv(),Wh.exports}var Zv=Qv();const Jv=Gx(Zv);var _=wp();const ew=Gx(_);function tw(e,n,i,a){if(typeof n=="function"?e!==n||!a:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(e):a?a.value:n.get(e)}function nw(e,n,i,a,c){if(typeof n=="function"?e!==n||!0:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(e,i),i}var Td;const Ki="__TAURI_TO_IPC_KEY__";function sw(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}async function Ce(e,n={},i){return window.__TAURI_INTERNALS__.invoke(e,n,i)}class ow{get rid(){return tw(this,Td,"f")}constructor(n){Td.set(this,void 0),nw(this,Td,n)}async close(){return Ce("plugin:resources|close",{rid:this.rid})}}Td=new WeakMap;var Li;(function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_CREATED="tauri://window-created",e.WEBVIEW_CREATED="tauri://webview-created",e.DRAG_ENTER="tauri://drag-enter",e.DRAG_OVER="tauri://drag-over",e.DRAG_DROP="tauri://drag-drop",e.DRAG_LEAVE="tauri://drag-leave"})(Li||(Li={}));async function Kx(e,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e,n),await Ce("plugin:event|unlisten",{event:e,eventId:n})}async function zc(e,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Ce("plugin:event|listen",{event:e,target:c,handler:sw(n)}).then(u=>async()=>Kx(e,u))}async function iw(e,n,i){return zc(e,a=>{Kx(e,a.id),n(a)},i)}async function aw(e,n){await Ce("plugin:event|emit",{event:e,payload:n})}async function rw(e,n,i){await Ce("plugin:event|emit_to",{target:typeof e=="string"?{kind:"AnyLabel",label:e}:e,event:n,payload:i})}class Qx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new $c(this.width*n,this.height*n)}[Ki](){return{width:this.width,height:this.height}}toJSON(){return this[Ki]()}}class $c{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Qx(this.width/n,this.height/n)}[Ki](){return{width:this.width,height:this.height}}toJSON(){return this[Ki]()}}class vl{constructor(n){this.size=n}toLogical(n){return this.size instanceof Qx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof $c?this.size:this.size.toPhysical(n)}[Ki](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ki]()}}class Zx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new fr(this.x*n,this.y*n)}[Ki](){return{x:this.x,y:this.y}}toJSON(){return this[Ki]()}}class fr{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Zx(this.x/n,this.y/n)}[Ki](){return{x:this.x,y:this.y}}toJSON(){return this[Ki]()}}class td{constructor(n){this.position=n}toLogical(n){return this.position instanceof Zx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof fr?this.position:this.position.toPhysical(n)}[Ki](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ki]()}}class Ic extends ow{constructor(n){super(n)}static async new(n,i,a){return Ce("plugin:image|new",{rgba:Id(n),width:i,height:a}).then(c=>new Ic(c))}static async fromBytes(n){return Ce("plugin:image|from_bytes",{bytes:Id(n)}).then(i=>new Ic(i))}static async fromPath(n){return Ce("plugin:image|from_path",{path:n}).then(i=>new Ic(i))}async rgba(){return Ce("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Ce("plugin:image|size",{rid:this.rid})}}function Id(e){return e==null?null:typeof e=="string"?e:e instanceof Ic?e.rid:e}var Im;(function(e){e[e.Critical=1]="Critical",e[e.Informational=2]="Informational"})(Im||(Im={}));class lw{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var by;(function(e){e.None="none",e.Normal="normal",e.Indeterminate="indeterminate",e.Paused="paused",e.Error="error"})(by||(by={}));function Sp(){return new Jx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Kh(){return Ce("plugin:window|get_all_windows").then(e=>e.map(n=>new Jx(n,{skip:!0})))}const Qh=["tauri://created","tauri://error"];class Jx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Ce("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Kh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Sp()}static async getAll(){return Kh()}static async getFocusedWindow(){for(const n of await Kh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:zc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:iw(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Qh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return aw(n,i)}async emitTo(n,i,a){if(Qh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return rw(n,i,a)}_handleTauriEvent(n,i){return Qh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Ce("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Ce("plugin:window|inner_position",{label:this.label}).then(n=>new fr(n))}async outerPosition(){return Ce("plugin:window|outer_position",{label:this.label}).then(n=>new fr(n))}async innerSize(){return Ce("plugin:window|inner_size",{label:this.label}).then(n=>new $c(n))}async outerSize(){return Ce("plugin:window|outer_size",{label:this.label}).then(n=>new $c(n))}async isFullscreen(){return Ce("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Ce("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Ce("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Ce("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Ce("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Ce("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Ce("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Ce("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Ce("plugin:window|is_closable",{label:this.label})}async isVisible(){return Ce("plugin:window|is_visible",{label:this.label})}async title(){return Ce("plugin:window|title",{label:this.label})}async theme(){return Ce("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Ce("plugin:window|is_always_on_top",{label:this.label})}async center(){return Ce("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Im.Critical?i={type:"Critical"}:i={type:"Informational"}),Ce("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Ce("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Ce("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Ce("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Ce("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Ce("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Ce("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Ce("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Ce("plugin:window|maximize",{label:this.label})}async unmaximize(){return Ce("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Ce("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Ce("plugin:window|minimize",{label:this.label})}async unminimize(){return Ce("plugin:window|unminimize",{label:this.label})}async show(){return Ce("plugin:window|show",{label:this.label})}async hide(){return Ce("plugin:window|hide",{label:this.label})}async close(){return Ce("plugin:window|close",{label:this.label})}async destroy(){return Ce("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Ce("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Ce("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Ce("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Ce("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Ce("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Ce("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Ce("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Ce("plugin:window|set_size",{label:this.label,value:n instanceof vl?n:new vl(n)})}async setMinSize(n){return Ce("plugin:window|set_min_size",{label:this.label,value:n instanceof vl?n:n?new vl(n):null})}async setMaxSize(n){return Ce("plugin:window|set_max_size",{label:this.label,value:n instanceof vl?n:n?new vl(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Ce("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Ce("plugin:window|set_position",{label:this.label,value:n instanceof td?n:new td(n)})}async setFullscreen(n){return Ce("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Ce("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Ce("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Ce("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Ce("plugin:window|set_icon",{label:this.label,value:Id(n)})}async setSkipTaskbar(n){return Ce("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Ce("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Ce("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Ce("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Ce("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Ce("plugin:window|set_cursor_position",{label:this.label,value:n instanceof td?n:new td(n)})}async setIgnoreCursorEvents(n){return Ce("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Ce("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Ce("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Ce("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Ce("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Ce("plugin:window|set_overlay_icon",{label:this.label,value:n?Id(n):void 0})}async setProgressBar(n){return Ce("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Ce("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Ce("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Ce("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Li.WINDOW_RESIZED,i=>{i.payload=new $c(i.payload),n(i)})}async onMoved(n){return this.listen(Li.WINDOW_MOVED,i=>{i.payload=new fr(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Li.WINDOW_CLOSE_REQUESTED,async i=>{const a=new lw(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Li.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new fr(d.payload.position)}})}),a=await this.listen(Li.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new fr(d.payload.position)}})}),c=await this.listen(Li.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new fr(d.payload.position)}})}),u=await this.listen(Li.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Li.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Li.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Li.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Li.WINDOW_THEME_CHANGED,n)}}var vy;(function(e){e.Disabled="disabled",e.Throttle="throttle",e.Suspend="suspend"})(vy||(vy={}));var wy;(function(e){e.Default="default",e.FluentOverlay="fluentOverlay"})(wy||(wy={}));var Sy;(function(e){e.AppearanceBased="appearanceBased",e.Light="light",e.Dark="dark",e.MediumLight="mediumLight",e.UltraDark="ultraDark",e.Titlebar="titlebar",e.Selection="selection",e.Menu="menu",e.Popover="popover",e.Sidebar="sidebar",e.HeaderView="headerView",e.Sheet="sheet",e.WindowBackground="windowBackground",e.HudWindow="hudWindow",e.FullScreenUI="fullScreenUI",e.Tooltip="tooltip",e.ContentBackground="contentBackground",e.UnderWindowBackground="underWindowBackground",e.UnderPageBackground="underPageBackground",e.Mica="mica",e.Blur="blur",e.Acrylic="acrylic",e.Tabbed="tabbed",e.TabbedDark="tabbedDark",e.TabbedLight="tabbedLight"})(Sy||(Sy={}));var Cy;(function(e){e.FollowsWindowActiveState="followsWindowActiveState",e.Active="active",e.Inactive="inactive"})(Cy||(Cy={}));async function cw(e={}){return typeof e=="object"&&Object.freeze(e),await Ce("plugin:dialog|open",{options:e})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=(...e)=>e.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=e=>{const n=dw(e);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=_.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>_.createElement("svg",{ref:p,...fw,width:n,height:n,stroke:e,strokeWidth:a?Number(i)*24/Number(n):i,className:eb("lucide",c),...!u&&!hw(h)&&{"aria-hidden":"true"},...h},[...d.map(([y,g])=>_.createElement(y,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=(e,n)=>{const i=_.forwardRef(({className:a,...c},u)=>_.createElement(mw,{ref:u,iconNode:n,className:eb(`lucide-${uw(ky(e))}`,`lucide-${e}`,a),...c}));return i.displayName=ky(e),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],tb=aa("chevron-down",pw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gw=aa("chevron-right",_w);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],xw=aa("chevron-up",yw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],vw=aa("ellipsis",bw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Sw=aa("folder-git-2",ww);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],nb=aa("git-branch-plus",Cw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],jw=aa("git-commit-horizontal",kw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],sb=aa("git-merge",Mw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],Tw=aa("panel-left-close",Ew);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Nw=aa("panel-left-open",Aw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Rw=aa("search",Dw),Bw=3.7,nd=200,Pm=240,Hn=540,Us=176,Zh=32,Ol=20,Lw=Pm/2,wl=Hn+Lw,Oa=18,za=18,Jh="var(--border)";function jy(e){var n,i;return{start:new Date((i=(n=e.createdDate)!=null?n:e.divergedFromDate)!=null?i:e.lastCommitDate).getTime(),end:new Date(e.lastCommitDate).getTime()}}function $r(e,n){var a,c,u,d;const i="branch"in n&&n.branch?n.branch:e;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,parentShas:"parentShas"in n?(a=n.parentShas)!=null?a:[]:n.parentSha?[n.parentSha]:[],childShas:"childShas"in n?(c=n.childShas)!=null?c:[]:[],clusterKey:"clusterKey"in n&&(u=n.clusterKey)!=null?u:null,kind:n.kind,isRemote:(d=n.isRemote)!=null?d:!1}}function $a(e){var n,i;return(i=(n=e.id)!=null?n:e.fullSha)!=null?i:""}function Lc(e,n){const i=new Date(e.date).getTime()-new Date(n.date).getTime();return i!==0?i:$a(e).localeCompare($a(n))}function ob(e){return[...e].sort(Lc)}function Ow(e){var h,p,y,g,x,b;if(e.length<=1)return[...e];const n=new Map(e.map(C=>[$a(C),C])),i=new Map,a=new Map;e.forEach(C=>i.set($a(C),0));for(const C of e){const j=((h=C.parentShas)!=null?h:[]).length>0?(p=C.parentShas)!=null?p:[]:C.parentSha?[C.parentSha]:[];for(const T of j){if(!T||!n.has(T))continue;const E=$a(C);i.set(E,((y=i.get(E))!=null?y:0)+1);const N=(g=a.get(T))!=null?g:[];N.push(C),a.set(T,N)}}for(const C of a.values())C.sort(Lc);const c=e.filter(C=>{var j;return((j=i.get($a(C)))!=null?j:0)===0}).sort(Lc),u=[],d=new Set;for(;c.length>0;){const C=c.shift(),j=$a(C);if(!d.has(j)){d.add(j),u.push(C);for(const T of(x=a.get(j))!=null?x:[]){const E=$a(T),N=((b=i.get(E))!=null?b:0)-1;i.set(E,N),N===0&&c.push(T)}c.sort(Lc)}}return u.length===e.length?u:[...u,...e.filter(C=>!d.has($a(C))).sort(Lc)]}function ib(e,n){var i;return ob(((i=n[e])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function ab(e,n,i){return ib(e,i)}function em(e){var n;return e.length===0?null:(n=[...e].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function zw(e,n){var u,d;if(!n||e.length===0)return em(e);const i=new Date(n).getTime();if(!Number.isFinite(i))return em(e);let a=null,c=null;for(const h of e){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const y=i-p;(!a||y<a.delta)&&(a={delta:y,commit:h})}else{const y=p-i;(!c||y<c.delta)&&(c={delta:y,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:em(e)}function sd(e,n,i){var c,u;if(!n)return null;const a=(c=e.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function $w(e,n,i){var g,x,b,C,j,T,E;const a=ab(e,i,n);if(a.length===0)return null;const c=a.map(N=>$r(e,N)),u=new Set(c.map(N=>N.id)),d=(x=(g=c[0])==null?void 0:g.parentSha)!=null?x:null,h=(C=(b=c.find(N=>N.kind==="branch-created"))==null?void 0:b.id)!=null?C:null,p=(j=c[0])==null?void 0:j.date,y=c.find(N=>h&&N.id===h||d&&N.id===d?!0:!N.parentSha||!u.has(N.parentSha));return y||((E=(T=zw(c,p!=null?p:void 0))!=null?T:c[0])!=null?E:null)}function Iw(e,n,i){var c,u,d,h,p;if(e.name===n)return null;const a=ib(e.name,i);if(a.length>0){const y=a.map(b=>$r(e.name,b)),g=new Set(y.map(b=>b.id)),x=(u=(c=y.find(b=>!b.parentSha||!g.has(b.parentSha)))!=null?c:y[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=e.presidesFromSha)!=null?d:e.divergedFromSha)!=null?h:e.createdFromSha)!=null?p:null}function Cp(e,n,i={},a={}){var fe,_e,De,qe;const u=new Map(e.map(se=>[se.name,se])),d=new Map,h=new Map;for(const se of e){const O=((fe=i[se.name])!=null?fe:[]).filter(oe=>oe.kind!=="branch-created").map(oe=>new Date(oe.date).getTime()).filter(oe=>Number.isFinite(oe)).sort((oe,P)=>oe-P)[0];O!=null&&h.set(se.name,O)}const p=se=>{const he=h.get(se.name);return he!=null?he:jy(se).start},y=se=>{var O;const he=(O=a[se.name])!=null?O:null;return he&&he!==se.name&&(he===n||u.has(he))?he:se.name===n?null:se.parentBranch&&se.parentBranch!==se.name&&(se.parentBranch===n||u.has(se.parentBranch))?se.parentBranch:null};for(const se of e){if(se.name===n)continue;const he=(_e=y(se))!=null?_e:n,O=(De=d.get(he))!=null?De:[];O.push(se),d.set(he,O)}for(const se of d.values())se.sort((he,O)=>p(he)-p(O)||he.name.localeCompare(O.name));const g=new Map,x=[],b=new Map,C=new Map,j=new Map;for(const se of Object.values(i))for(const he of se){const O=new Date(he.date).getTime();Number.isFinite(O)&&(he.fullSha&&j.set(he.fullSha,O),he.sha&&j.set(he.sha,O))}const T=(se,he)=>({start:Math.min(se,he),end:Math.max(se,he)}),E=se=>{var ee,ve;const he=T(p(se),jy(se).end),O=[he],oe=he.start,P=Iw(se,n,i),me=P?j.get(P):void 0,be=new Date((ve=(ee=se.divergedFromDate)!=null?ee:se.createdDate)!=null?ve:se.lastCommitDate).getTime(),$=Number.isFinite(me!=null?me:NaN)?me:Number.isFinite(be)?be:null;if($==null)return O;const ie=T($,oe);return ie.start!==ie.end&&O.push(ie),O},N=Math.max(1,360*60*1e3*Bw),H=(se,he)=>!(se.start-he.end>=N||he.start-se.end>=N),L=(se,he)=>he.some(O=>{var oe;return((oe=C.get(se))!=null?oe:[]).some(P=>H(O,P))}),A=(se,he=new Set)=>{const O=b.get(se);if(O!=null)return O;if(he.has(se))return 1;he.add(se);const oe=u.get(se);if(!oe||se===n)return he.delete(se),b.set(se,0),0;const P=y(oe),me=P?A(P,he)+1:1;return he.delete(se),b.set(se,me),me},X=(se,he=new Set)=>{var pe,Oe;const O=g.get(se);if(O)return O.column;if(he.has(se))return 0;he.add(se);const oe=u.get(se);if(!oe)return he.delete(se),0;if(se===n){const et={name:se,column:0,parentName:null};g.set(se,et),x.push(et);const We=E(oe);return C.set(0,[...(pe=C.get(0))!=null?pe:[],...We]),he.delete(se),0}const P=y(oe),me=P&&!he.has(P)?P:null,be=me?X(me,he):0,$=Math.max(1,A(se)),ie=Math.max(me?be+1:1,$),ee=E(oe);let ve=ie;for(;L(ve,ee);)ve+=1;const Te={name:se,column:ve,parentName:me};return g.set(se,Te),x.push(Te),C.set(ve,[...(Oe=C.get(ve))!=null?Oe:[],...ee]),he.delete(se),ve};X(n);const W=e.filter(se=>!g.has(se.name)).sort((se,he)=>p(se)-p(he)||se.name.localeCompare(he.name)),Y=W.filter(se=>y(se)!=null),q=W.filter(se=>y(se)==null);for(const se of Y)X(se.name);let ue=Math.max(0,...x.map(se=>se.column))+1+1;for(const se of q){const he=E(se);let O=ue;for(;L(O,he);)O+=1;const oe={name:se.name,column:O,parentName:null};g.set(se.name,oe),x.push(oe),C.set(O,[...(qe=C.get(O))!=null?qe:[],...he]),ue=O+1}return x.sort((se,he)=>se.column-he.column||se.name.localeCompare(he.name))}function Pw(e,n,i,a){const c=new Map(e.map(h=>[h.name,h])),u=h=>{var y;const p=(y=i[h.name])!=null?y:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of e){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const od=2.25,ea=0,tm=0,Hw=3600*1e3,Uw=3600*1e3,Xi=e=>{const n=e?new Date(e).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Po=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function My(e,n,i=new Map){var q,ue,fe,_e,De,qe,se,he,O,oe,P,me,be,$,ie;if(e.length===0)return new Map;const a=[...e].sort((ee,ve)=>{const Te=Xi(ee.date)-Xi(ve.date);return Te!==0?Te:ee.id!==ve.id?ee.id.localeCompare(ve.id):ee.visualId.localeCompare(ve.visualId)}),c=new Map;for(const ee of e){const ve=(q=ee.parentSha)!=null?q:null;if(ve){const Te=(ue=c.get(ve))!=null?ue:new Set;Te.add(ee.id),c.set(ve,Te)}for(const Te of(fe=i.get(ee.id))!=null?fe:[]){if(!Te)continue;const pe=(_e=c.get(Te))!=null?_e:new Set;pe.add(ee.id),c.set(Te,pe)}}const u=new Map,d=new Map,h=new Map,p=new Set,y=new Map,g=new Map,x=new Map,b=new Map;for(const ee of e){const ve=(De=y.get(ee.branchName))!=null?De:new Set;ve.add(ee.id),y.set(ee.branchName,ve);const Te=(se=(qe=n.get(ee.branchName))==null?void 0:qe.column)!=null?se:0,pe=(he=g.get(ee.id))!=null?he:new Set;pe.add(Te),g.set(ee.id,pe);const Oe=new Set;ee.parentSha&&Oe.add(ee.parentSha),x.set(ee.visualId,Oe);const et=new Set(Oe);for(const We of(O=i.get(ee.id))!=null?O:[])We&&et.add(We);b.set(ee.visualId,et)}const C=new Set(Array.from(g.keys())),j=Array.from(C),T=new Map,E=ee=>{const ve=[];for(const Te of j)Po(Te,ee)&&ve.push(Te);return ve},N=new Map;for(const ee of j)N.set(ee,new Set);for(const ee of e){const ve=E(ee.id);if(ve.length===0)continue;const Te=(oe=b.get(ee.visualId))!=null?oe:new Set,pe=new Set;for(const Oe of Te)for(const et of E(Oe))pe.add(et);for(const Oe of ve){const et=(P=N.get(Oe))!=null?P:new Set;for(const We of pe)et.add(We);N.set(Oe,et)}}const H=new Map,L=(ee,ve=new Set)=>{var et;const Te=H.get(ee);if(Te)return Te;if(ve.has(ee))return new Set;ve.add(ee);const pe=(et=N.get(ee))!=null?et:new Set,Oe=new Set;for(const We of pe){Oe.add(We);for(const mt of L(We,ve))Oe.add(mt)}return ve.delete(ee),H.set(ee,Oe),Oe},A=(ee,ve)=>{if(Po(ee,ve))return!0;const Te=E(ee),pe=E(ve);for(const Oe of Te){const et=L(Oe);for(const We of pe)if(et.has(We))return!0}for(const Oe of pe){const et=L(Oe);for(const We of Te)if(et.has(We))return!0}return!1};let X=1;const W=(ee,ve)=>{var dt,rt,gt,Ue,vt,yt,Et,Ke,it;const Te=(rt=(dt=n.get(ee.branchName))==null?void 0:dt.column)!=null?rt:0,pe=(gt=y.get(ee.branchName))!=null?gt:new Set,et=!(!!ee.parentSha&&pe.has(ee.parentSha))&&ee.parentSha?ee.parentSha:null,We=Array.from(ve).flatMap(V=>E(V).flatMap(te=>{var Se;return(Se=T.get(te))!=null?Se:[]})),mt=(ee.kind==="branch-created"||ee.kind==="stash")&&We.length>0?Math.max(...We)+1:null,Nt=We.length>0?Math.max(...We)+1:1,Mt=(Ue=c.get(ee.id))!=null?Ue:new Set,$t=Array.from(Mt).flatMap(V=>{var te;return Array.from((te=g.get(V))!=null?te:[])}).some(V=>V!==Te),_t=new Date(ee.date).getTime(),Gt=Math.max(Nt,1);let Jt=null;for(let V=Gt;V<X;V+=1){const te=(vt=d.get(V))!=null?vt:[];if(te.length===0||$t||p.has(V))continue;const Se=(yt=b.get(ee.visualId))!=null?yt:new Set;if(!(te.some(Ne=>A(ee.id,Ne.sha)?!0:Array.from(Se).some(ot=>Po(ot,Ne.sha)))||te.some(Ne=>Ne.column===Te)||!Number.isFinite(_t)||!te.every(Ne=>{if(!Number.isFinite(Ne.time))return!1;const ot=!!et&&!!Ne.branchEntryParentSha&&et===Ne.branchEntryParentSha?Uw:Hw;return Math.abs(Ne.time-_t)<=ot}))){Jt=V;break}}mt!=null&&(Jt=mt),Jt==null&&(Jt=Math.max(Nt,X)),u.set(ee.visualId,Jt),Jt>=X&&(X=Jt+1);const Z=(Et=d.get(Jt))!=null?Et:[];Z.push({visualId:ee.visualId,sha:ee.id,column:Te,time:_t,branchEntryParentSha:et}),d.set(Jt,Z),$t&&p.add(Jt);for(const V of ve){const te=(Ke=h.get(V))!=null?Ke:[];te.push(Jt),h.set(V,te)}const Re=(it=T.get(ee.id))!=null?it:[];Re.push(Jt),T.set(ee.id,Re)};for(const ee of a){const ve=(me=x.get(ee.visualId))!=null?me:new Set;W(ee,ve)}const Y=Math.max(1,a.length*2);for(let ee=0;ee<Y;ee+=1){let ve=!1;for(const Te of a){const pe=(be=x.get(Te.visualId))!=null?be:new Set;if(pe.size===0)continue;const Oe=($=u.get(Te.visualId))!=null?$:1;let et=1;for(const We of pe){const mt=E(We).flatMap(Nt=>{var Mt;return(Mt=T.get(Nt))!=null?Mt:[]});mt.length>0&&(et=Math.max(et,Math.max(...mt)+1))}if(Oe<et){u.set(Te.visualId,et);const We=(ie=T.get(Te.id))!=null?ie:[];We.length===0?T.set(Te.id,[et]):T.set(Te.id,[...We.slice(0,-1),et]),ve=!0}}if(!ve)break}return u}function kp(e){var Vo,Ci,qt,Ls,Vn,ki,ji,Os,uo,to,ls,Dn,js,gs,Ms,zs,yn,qs,$s,Qo,Es,ui,Zo,Jo,fo,Ao,di,cs,ho,Yo,Ts,mo,Wo,As,wn,po,us,Tn,Fo,vs,No,fi,Mi,ei,ti,Xo,At,no,Qi,zi,$i,So,Do,Co,hi;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,unpushedCommitShasByBranch:d={},defaultBranch:h,branchCommitPreviews:p,branchParentByName:y={},branchUniqueAheadCounts:g,manuallyOpenedClumps:x,manuallyClosedClumps:b,isDebugOpen:C,gridSearchQuery:j,gridFocusSha:T,checkedOutRef:E,orientation:N="horizontal",nodePositionOverrides:H={}}=e,L=N==="horizontal",A=new Map(i.map(M=>[M.name,M])),X=new Map(n.map(M=>[M.name,M])),W=Ow([...a.map(M=>{var F,de,Ae,Pe;return{id:M.fullSha,branchName:h,message:(F=M.prTitle)!=null?F:M.sha,author:"",date:M.date,parentSha:(Ae=(de=M.parentShas)==null?void 0:de[0])!=null?Ae:null,parentShas:(Pe=M.parentShas)!=null?Pe:[]}}),...((Vo=p[h])!=null?Vo:[]).map(M=>$r(h,M)),...c.map(M=>$r(M.branch||"",M)),...u.map(M=>$r(M.branch||"",M))]),Y=new Map,q=new Map;for(const M of i){if(M.name===h)continue;const F=ab(M.name,g,p);q.set(M.name,F);const de=ob(F.map(Ht=>$r(M.name,Ht)));if(de.length>0){Y.set(M.name,de);continue}const Ae=(Ls=(qt=(Ci=M.presidesFromSha)!=null?Ci:M.divergedFromSha)!=null?qt:M.createdFromSha)!=null?Ls:null;if(!Ae)continue;const Pe=(Vn=c.find(Ht=>Po(Ht.fullSha,Ae)||Po(Ht.sha,Ae)))==null?void 0:Vn.date,lt=Pe?null:(ki=Object.values(p).flat().find(Ht=>Po(Ht.fullSha,Ae)||Po(Ht.sha,Ae)))==null?void 0:ki.date,Yt={id:`BRANCH_HEAD:${M.name}:${Ae}`,branchName:M.name,message:`Branch ${M.name}`,author:M.lastCommitAuthor,date:(uo=(Os=(ji=Pe!=null?Pe:lt)!=null?ji:M.createdDate)!=null?Os:M.divergedFromDate)!=null?uo:M.lastCommitDate,parentSha:Ae,clusterKey:null,childShas:[],kind:"branch-created"};Y.set(M.name,[Yt])}const ue=new Set(W.map(M=>M.id)),fe=(to=[...W].sort((M,F)=>Xi(M.date)-Xi(F.date)||M.id.localeCompare(F.id))[0])!=null?to:null,_e=new Map(Array.from(Y.entries()).map(([M,F])=>[M,new Set(F.map(de=>de.id))])),De=new Map;for(const M of i){if(M.name===h)continue;const F=$w(M.name,p,g);if(F){De.set(M.name,F);continue}const de=(ls=Y.get(M.name))==null?void 0:ls[0];if(de){const Ae=(gs=(js=(Dn=M.presidesFromSha)!=null?Dn:M.divergedFromSha)!=null?js:M.createdFromSha)!=null?gs:null;De.set(M.name,{...de,parentSha:Ae})}}const qe=new Map;for(const[M,F]of Y.entries()){const de=F.find(Ae=>Ae.kind!=="branch-created");de&&qe.set(M,de)}const se=new Map;for(const[M,F]of Y.entries()){const de=F.filter(lt=>lt.kind!=="branch-created"),Pe=(Ms=(de.length>0?de:F)[0])!=null?Ms:null;Pe&&se.set(M,Pe)}const he=new Map;for(const M of i){if(M.name===h)continue;const F=(zs=se.get(M.name))!=null?zs:null,de=(qs=(yn=De.get(M.name))==null?void 0:yn.parentSha)!=null?qs:null,Ae=(Es=(Qo=($s=M.presidesFromSha)!=null?$s:M.divergedFromSha)!=null?Qo:M.createdFromSha)!=null?Es:null,Pe=(ui=F==null?void 0:F.parentSha)!=null?ui:null,lt=(Zo=Pe!=null?Pe:de)!=null?Zo:Ae;lt&&he.set(M.name,lt)}const O=M=>{var lt,Yt,Ht,Zt,xt,un,an,Gn;const F=(lt=y[M.name])!=null?lt:null;if(!(F&&F!==h&&F!==M.name&&A.has(F)))return F!=null?F:"";const Ae=(Zt=(Ht=(Yt=he.get(M.name))!=null?Yt:M.presidesFromSha)!=null?Ht:M.divergedFromSha)!=null?Zt:M.createdFromSha;if(Ae&&((xt=_e.get(F))!=null?xt:new Set).has(Ae))return F;const Pe=(an=(un=De.get(M.name))==null?void 0:un.parentSha)!=null?an:null;return Pe&&((Gn=_e.get(F))!=null?Gn:new Set).has(Pe),F},oe=M=>{var Pe,lt,Yt,Ht,Zt,xt,un,an;const F=De.get(M.name),de=(Zt=(Ht=(Yt=(lt=(Pe=he.get(M.name))!=null?Pe:F==null?void 0:F.parentSha)!=null?lt:M.presidesFromSha)!=null?Yt:M.divergedFromSha)!=null?Ht:M.createdFromSha)!=null?Zt:null;if(!M.parentBranch&&!de||!de)return null;if(O(M)===h){if(ue.has(de))return de;const Gn=(xt=F==null?void 0:F.parentSha)!=null?xt:null;return Gn&&ue.has(Gn)?Gn:(an=(un=fe==null?void 0:fe.id)!=null?un:Gn)!=null?an:de}return ue.has(de),de},P=M=>oe(M),me=new Map;for(const M of[...c,...u]){const F={...$r(M.branch||"",M),visualId:`${M.branch||""}:${M.fullSha}`};me.set(M.fullSha,F)}const be=new Map(me),$=M=>{be.has(M.id)||be.set(M.id,M)},ie=new Map(Object.entries(d).map(([M,F])=>[M,new Set(F)])),ee=new Map(Array.from(Y.entries()).map(([M,F])=>[M,new Set(F.map(de=>de.id))])),ve=new Set;for(const M of ee.values())for(const F of M)ve.add(F);for(const M of W)ve.has(M.id)||$({...M,visualId:`${M.branchName}:${M.id}`});for(const[M,F]of Y.entries())for(const de of F)$({...de,visualId:`${M}:${de.id}`});const pe=[...Array.from(be.values()).map(M=>({...M,visualId:`${M.branchName}:${M.id}`}))].sort((M,F)=>Xi(M.date)-Xi(F.date)||M.id.localeCompare(F.id)),Oe=new Map;for(const M of pe){const F=(Jo=Oe.get(M.branchName))!=null?Jo:new Set;F.add(M.id),Oe.set(M.branchName,F)}const et=(M,F)=>{const de=Oe.get(M);if(!de||de.size===0)return!1;for(const Ae of de)if(Po(Ae,F))return!0;return!1},We=(M,F)=>{const de=Array.from(Oe.entries()).filter(([Ae])=>Ae!==F).filter(([,Ae])=>Array.from(Ae).some(Pe=>Po(Pe,M))).map(([Ae])=>Ae);return de.length>0?de.sort()[0]:M.slice(0,7)},mt=[],Nt=new Map,Mt=new Map;for(const M of a){const F=M.fullSha,de=M.targetBranch,Ae=M.targetCommitSha;if(!F||!de||!Ae||!et(de,Ae))continue;const Pe=((fo=M.parentShas)!=null?fo:[]).slice(1).filter(Yt=>!!Yt&&!Po(Yt,F));if(Pe.length===0)continue;const lt=(Ao=Mt.get(F))!=null?Ao:new Set;for(const Yt of Pe){lt.add(Yt);const Ht=We(Yt,de);mt.push({sourceCommitSha:Yt,sourceBranchName:Ht,mergeCommitSha:F,targetCommitSha:Ae,targetBranchName:de});const Zt=(di=Nt.get(Ht))!=null?di:new Map,xt=(cs=Zt.get(Yt))!=null?cs:new Set;xt.add(de),Zt.set(Yt,xt),Nt.set(Ht,Zt)}Mt.set(F,lt)}const ut=new Map;for(const M of i){if(M.name===h)continue;const F=oe(M);F&&ut.set(M.name,F)}const $t=new Map;for(const M of pe){const F=Mt.get(M.id);if(F&&F.size>0){const Pe=(ho=$t.get(M.id))!=null?ho:new Set;for(const lt of F)Pe.add(lt);$t.set(M.id,Pe)}if(M.branchName===h)continue;const de=ut.get(M.branchName);if(!de||de===M.id)continue;const Ae=(Yo=$t.get(M.id))!=null?Yo:new Set;Ae.add(de),$t.set(M.id,Ae)}const _t=new Map,Gt=new Map;for(const M of pe){if(Gt.set(M.id,M),M.parentSha){const F=(Ts=_t.get(M.parentSha))!=null?Ts:new Set;F.add(M.id),_t.set(M.parentSha,F)}for(const F of(mo=$t.get(M.id))!=null?mo:[]){if(!F)continue;const de=(Wo=_t.get(F))!=null?Wo:new Set;de.add(M.id),_t.set(F,de)}}const Jt=new Map;for(const[M,F]of _t.entries())Jt.set(M,Array.from(F));const Z=new Set(["branch-created","stash"]),Re=new Set,dt=M=>{if(!M)return null;const F=pe.find(de=>Po(de.id,M)||Po(de.visualId.split(":").slice(1).join(":"),M));return F!=null?F:null};for(const M of pe){if(M.parentSha){const de=dt(M.parentSha),Ae=!!de&&Re.has(de.visualId);de&&(M.kind==="stash"||M.kind==="branch-created"||Ae)&&Re.add(de.visualId)}const F=(As=_t.get(M.id))!=null?As:new Set;(F.size>1||Array.from(F).map(de=>Gt.get(de)).some(de=>de!=null&&de.kind!=null&&Z.has(de.kind)))&&Re.add(M.visualId)}const rt=pe.map(M=>{var F,de;return{...M,childShas:(de=(F=Jt.get(M.id))!=null?F:M.childShas)!=null?de:[]}}),gt=My(rt,X,$t),Ue=new Map;for(const M of rt){const F=(wn=Ue.get(M.branchName))!=null?wn:[];F.push(M),Ue.set(M.branchName,F)}const vt=new Map,yt=new Map,Et=new Map,Ke=new Map,it=new Map,V=(M,F)=>{var xt,un,an,Gn,Is;if(F.length===0)return[];const de=[...F].sort((Kt,Ut)=>{var Ns,Ei;const Yn=(Ns=gt.get(Kt.visualId))!=null?Ns:Number.MAX_SAFE_INTEGER,_o=(Ei=gt.get(Ut.visualId))!=null?Ei:Number.MAX_SAFE_INTEGER;return Yn!==_o?Yn-_o:Xi(Kt.date)-Xi(Ut.date)||Kt.id.localeCompare(Ut.id)}),Ae=new Map;let Pe=null,lt=0;const Yt=Kt=>{if(Kt.kind==="uncommitted")return"uncommitted";if(Kt.kind==="stash")return"stash";if(Kt.kind==="branch-created")return"branch-created";const Ut=ie.get(Kt.branchName);return Ut!=null&&Ut.has(Kt.id)?"unpushed":"pushed"};let Ht=null;for(const Kt of de){const Ut=Kt.kind==="stash"||Kt.kind==="branch-created",Yn=Re.has(Kt.visualId);if(Ut)continue;const _o=Yt(Kt);(!Pe||Ht!=null&&Ht!==_o)&&(lt+=1,Pe=`cluster:${M}:segment:${lt}`);const Ns=(xt=Ae.get(Pe))!=null?xt:[];Ns.push(Kt),Ae.set(Pe,Ns),Yn&&(Pe=null),Ht=_o}const Zt=[];for(const[Kt,Ut]of Ae.entries()){if(Ut.length===0)continue;const _o=[...Ut].sort((go,ko)=>{var Mo,Go;const jo=(Mo=gt.get(go.visualId))!=null?Mo:Number.MIN_SAFE_INTEGER,Ro=(Go=gt.get(ko.visualId))!=null?Go:Number.MIN_SAFE_INTEGER;return jo!==Ro?Ro-jo:Xi(ko.date)-Xi(go.date)||ko.id.localeCompare(go.id)})[0].visualId,Ns={branchName:M,key:Kt,commitIds:Ut.map(go=>go.visualId),leadId:_o,count:Ut.length};Zt.push(Ns);const Ei=(un=it.get(Kt))!=null?un:0;if(!Ke.has(Kt))Ke.set(Kt,_o);else{const go=Ke.get(Kt),ko=Gt.get(go.split(":").slice(1).join(":"));if(ko){const jo=(an=gt.get(ko.visualId))!=null?an:Number.MIN_SAFE_INTEGER;((Gn=gt.get(_o))!=null?Gn:Number.MIN_SAFE_INTEGER)>jo&&Ke.set(Kt,_o)}}it.set(Kt,Math.max(Ei,Ut.length));for(const go of Ns.commitIds){yt.set(go,Kt);const ko=go.split(":").slice(1).join(":"),jo=(Is=Et.get(ko))!=null?Is:[];jo.includes(Kt)||jo.push(Kt),Et.set(ko,jo)}}return Zt};for(const[M,F]of Ue.entries())vt.set(M,V(M,F));const te=new Map;for(const M of rt)te.set(M.id,M);const Se=M=>{if(!M)return"none";const F=Array.from(te.values()).find(de=>Po(de.id,M)||Po(de.id.slice(0,7),M)||Po(M,de.id));return F?`${F.id.slice(0,7)} ${F.branchName}`:M.slice(0,7)},je=C?["Lane rows (expected):",...[...n].sort((M,F)=>M.column-F.column||M.name.localeCompare(F.name)).map(M=>{var F;return`  row=${M.column} branch=${M.name} parent=${(F=M.parentName)!=null?F:"none"}`}),"",...i.flatMap(M=>{var Yt,Ht,Zt,xt,un,an,Gn,Is;const F=(Yt=p[M.name])!=null?Yt:[],de=[...(Ht=q.get(M.name))!=null?Ht:[]].reverse(),Ae=new Set(((Zt=Y.get(M.name))!=null?Zt:[]).map(Kt=>Kt.id)),Pe=(un=(xt=de.find(Kt=>!Kt.parentSha||!de.some(Ut=>{var Yn;return Po(Ut.fullSha,(Yn=Kt.parentSha)!=null?Yn:"")})))!=null?xt:de[0])!=null?un:null,lt=(Gn=(an=Pe==null?void 0:Pe.parentSha)!=null?an:he.get(M.name))!=null?Gn:null;return[`Branch ${M.name}`,`  ahead=${(Is=g[M.name])!=null?Is:0} previews=${de.length} rendered=${Ae.size}`,`  db parent commit=${Se(lt)}`,`  db child commit=${Pe?`${Pe.fullSha.slice(0,7)} ${M.name}`:"none"}`,...de.map(Kt=>{const Ut=Ae.has(Kt.fullSha)?"visible":"hidden",Yn=Ae.has(Kt.fullSha)?"kept by render set":"dropped by render set";return`  ${Ut} ${Kt.fullSha.slice(0,7)} ${Kt.message} [${Yn}]`}),F.length===0?"  no preview data":null].filter(Kt=>Kt!=null)})]:[],nt=C?Array.from(Y.entries()).map(([M,F])=>[`Branch debug ${M}`,...F.map(de=>`  ${de.id.slice(0,7)} ${de.message}`)].join(`
`)):[],Ye=gt,Ne=Pm/od,xe=20/od,ot=L?Hn+Ne+xe:nd+Ne+xe,Xe=L?nd+Ne+xe:wl,st=Math.max(0,...rt.map(M=>{var F;return(F=Ye.get(M.visualId))!=null?F:1})),Be=rt.map(M=>{var Pe,lt;const F=X.get(M.branchName),de=(Pe=Ye.get(M.visualId))!=null?Pe:1,Ae=(lt=F==null?void 0:F.column)!=null?lt:0;return L?{commit:M,row:de,column:Ae,x:za+(de-1)*ot,y:Oa+Ae*Xe}:{commit:M,row:de,column:Ae,x:za+Ae*wl,y:Oa+(st-de)*ot}}),tt=M=>{var de;const F=(de=H[M.commit.visualId])!=null?de:H[M.commit.id];return F?{...M,x:F.x,y:F.y}:M},wt=Be.map(tt),Ct=j.trim().toLowerCase(),Ze=Ct?wt.filter(M=>{const F=M.commit.id.toLowerCase(),de=M.commit.id.slice(0,7).toLowerCase(),Ae=M.commit.message.toLowerCase(),Pe=M.commit.branchName.toLowerCase();return F.includes(Ct)||de.includes(Ct)||Ae.includes(Ct)||Pe.includes(Ct)}):wt,Bt=T&&(po=wt.find(M=>M.commit.id===T))!=null?po:null,kt=new Set(Ze.map(M=>M.commit.id)),pt=(us=E==null?void 0:E.headSha)!=null?us:null,cn=(()=>{var F,de;const M=(F=E==null?void 0:E.branchName)!=null?F:null;return!pt||!M?null:(de=yt.get(`${M}:${pt}`))!=null?de:null})(),ft=new Set;for(const[M,F]of it.entries())F>1&&M!==cn&&ft.add(M);const Pt=[...pe].filter(M=>{var lt;const F=yt.get(M.visualId);if(!F)return!0;const de=Ke.get(F),Ae=(lt=it.get(F))!=null?lt:1,Pe=x.has(F)||!ft.has(F)&&!b.has(F);return Ae<=1||Pe||de===M.visualId}),hn=My(Pt,X,$t),Ot=Pm/od,jt=20/od,mn=L?Hn+Ot+jt:nd+Ot+jt,rs=L?nd+Ot+jt:wl,en=Math.max(0,...pe.map(M=>{var F;return(F=gt.get(M.visualId))!=null?F:1})),gn=Math.max(0,...Pt.map(M=>{var F;return(F=hn.get(M.visualId))!=null?F:1})),nn=Math.max(0,en-gn),on=[...Pt.map(M=>{var Pe,lt;const F=X.get(M.branchName),de=(Pe=hn.get(M.visualId))!=null?Pe:1,Ae=(lt=F==null?void 0:F.column)!=null?lt:0;return tt(L?{commit:M,row:de,column:Ae,x:za+(nn+de-1)*mn,y:Oa+Ae*rs}:{commit:M,row:de,column:Ae,x:za+Ae*wl,y:Oa+(gn-de)*mn})})].sort((M,F)=>M.row!==F.row?M.row-F.row:M.column!==F.column?M.column-F.column:M.commit.visualId.localeCompare(F.commit.visualId)).map(M=>({...M})),Qe=new Set;for(const M of on){let F=M.row,de=`${M.column}:${F}`;for(;Qe.has(de);)F+=1,de=`${M.column}:${F}`;M.row=F,Qe.add(de)}const zn=Math.max(0,...on.map(M=>M.row));for(const M of on){if(L){M.x=za+(nn+M.row-1)*mn,M.y=Oa+M.column*rs;continue}M.x=za+M.column*wl,M.y=Oa+(zn-M.row)*mn}const $n=new Map;for(const M of on){const F=(Tn=$n.get(M.commit.id))!=null?Tn:[];F.push(M),$n.set(M.commit.id,F)}const Ds=new Map;for(const M of on){const F=yt.get(M.commit.visualId);if(!F)continue;const de=Ds.get(F);(!de||(L?M.x>de.x:M.y<de.y))&&Ds.set(F,M)}const Un=(M,F)=>`${M.toFixed(1)} ${F.toFixed(1)}`,bo=Math.max(0,...on.map(M=>M.row)),Ys=Math.max(0,...n.map(M=>M.column)),co=Math.max(0,...on.map(M=>M.x+Hn)),Ws=Math.max(0,...on.map(M=>M.y+Ol+Us)),tn=Math.max(L?za*2+Math.max(0,bo-1)*mn+Hn+Zh+jt:za*2+(Ys+1)*wl,co+za),kn=Math.max(L?Oa*2+Ys*rs+Us+Zh+jt:Oa*2+Math.max(0,bo-1)*mn+Us+Zh+jt,Ws+Oa),bn=[],Fs=new Map(i.map(M=>{var de,Ae;const F=new Date((Ae=(de=M.createdDate)!=null?de:M.divergedFromDate)!=null?Ae:M.lastCommitDate).getTime();return[M.name,Number.isFinite(F)?F:0]})),Bn=M=>{var F;return(F=Fs.get(M))!=null?F:0},hs=[],sn=M=>{C&&hs.push(M)},ts=new Set,vo=new Map,bs=(M,F)=>{var Ae;const de=(Ae=vo.get(M))!=null?Ae:[];de.includes(F)||de.push(F),vo.set(M,de)},eo=new Set,Rs=new Set,qn=new Set,_s=(M,F)=>{var Pe,lt;if(!M)return null;const de=sd($n,M,F);if(de)return de;const Ae=(Pe=yt.get(`${F!=null?F:h}:${M}`))!=null?Pe:yt.get(M);return Ae&&(lt=Ds.get(Ae))!=null?lt:null},jn=new Set;for(const M of i){const F=P(M);F&&Rs.add(F);const de=(Fo=he.get(M.name))!=null?Fo:null;de&&qn.add(de)}const Uo=M=>{var Pe;const F=_s(M.id,M.branchName);if(F)return F;const de=yt.get(M.visualId);if(!de)return null;const Ae=Ke.get(de);return Ae&&(Pe=on.find(lt=>lt.commit.id===Ae))!=null?Pe:null},ci=(M,F)=>M?sd($n,M,F):null,wo=(M,F)=>L?{x:M.x-ea,y:M.y+Us/2,face:"left"}:{x:M.x+Hn/2,y:M.y+Us+ea,face:"bottom"},ra=M=>L?{x:M.x-ea,y:M.y+Us/2,face:"left"}:{x:M.x+Hn/2,y:M.y+Us+ea,face:"bottom"},Bs=(M,F)=>M.column!==F.column?!0:L?M.commit.branchName!==F.commit.branchName:!1,Xs=(M,F,de)=>{if(!L)return{x:F?M.x+Hn:M.x+Hn/2,y:F?M.y+Us/2:M.y,face:F?"right":"top"};if(!F)return{x:M.x+Hn+ea,y:M.y+Us/2,face:"right"};if(de&&de.column===M.column&&de.commit.branchName!==M.commit.branchName){if(de.x>M.x)return{x:M.x+Hn/2,y:M.y+Us+ea,face:"bottom"};if(de.x<M.x)return{x:M.x+Hn/2,y:M.y-ea,face:"top"}}return!de||de.column===M.column?{x:M.x+Hn+ea,y:M.y+Us/2,face:"right"}:de.column>M.column?{x:M.x+Hn/2,y:M.y+Us+ea,face:"bottom"}:{x:M.x+Hn/2,y:M.y-ea,face:"top"}},ks=M=>L?{x:M.x+Hn/2,y:M.y+Us+ea,face:"bottom"}:{x:M.x+Hn,y:M.y+Us/2,face:"right"},Kn=(M,F)=>sd($n,M,F),Sn=(M,F)=>ci(M,F),Gs=[],vn=new Set;for(const M of mt){const F=(vs=_s(M.targetCommitSha,M.targetBranchName))!=null?vs:null;if(!F){sn({id:`merge:${M.mergeCommitSha}:${M.sourceCommitSha}:target`,kind:"merge",parent:M.sourceCommitSha,child:M.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const de=M.sourceCommitSha,Ae=`merge:${M.mergeCommitSha}:${de!=null?de:"unknown"}`;if(!de||Po(de,M.targetCommitSha)){sn({id:Ae,kind:"merge",parent:de!=null?de:"unknown",child:M.targetCommitSha,rendered:!1,reason:de?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Pe=(No=sd($n,de))!=null?No:null;if(!Pe){sn({id:Ae,kind:"merge",parent:de,child:M.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Pe.commit.id===F.commit.id){sn({id:Ae,kind:"merge",parent:Pe.commit.id,child:F.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let lt,Yt,Ht;const Zt=L?F.x+Hn/2:F.x+Hn-tm,xt=L?F.y+Us+tm:F.y+Us/2,un=L?"bottom":"right";L?(lt=Pe.x+Hn+tm,Yt=Pe.y+Us/2,Ht="right"):(lt=Pe.x+Hn/2,Yt=Pe.y,Ht="top");const an=`${lt.toFixed(2)}:${Yt.toFixed(2)}:${Zt.toFixed(2)}:${xt.toFixed(2)}`;if(vn.has(an)){sn({id:Ae,kind:"merge",parent:Pe.commit.id,child:F.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}vn.add(an),Gs.push({id:Ae,fromX:lt,fromY:Yt,toX:Zt,toY:xt,fromFace:Ht,toFace:un,zIndex:Bn(Pe.commit.branchName)}),sn({id:Ae,kind:"merge",parent:Pe.commit.id,child:F.commit.id,rendered:!0,reason:`merge connector rendered to ${M.targetBranchName}`})}const ms=new Set;for(const M of i){if(M.name===h)continue;const F=De.get(M.name);if(!F)continue;const de=O(M),Ae=Kn((fi=he.get(M.name))!=null?fi:"",de),Pe=(Mi=qe.get(M.name))!=null?Mi:F,lt=(ei=Sn(Pe.id,M.name))!=null?ei:Uo(Pe);if(!Ae||!lt||Ae.commit.id===lt.commit.id){const un=yt.get(`${M.name}:${F.id}`),an=yt.get(`${M.name}:${Pe.id}`),Gn=!!un&&!ft.has(un),Is=!!an&&!ft.has(an),Kt=!!un&&!x.has(un)&&(Gn?b.has(un):!0),Ut=!!an&&!x.has(an)&&(Is?b.has(an):!0);!Ae&&!Kt&&bs((ti=lt==null?void 0:lt.commit.id)!=null?ti:F.id,"Missing parent node"),!lt&&!Ut&&bs(F.id,"Missing child node"),sn({id:`branch:${(Xo=Ae==null?void 0:Ae.commit.id)!=null?Xo:"null"}->${(At=lt==null?void 0:lt.commit.id)!=null?At:"null"}`,kind:"branch",parent:(no=Ae==null?void 0:Ae.commit.id)!=null?no:"null",child:(Qi=lt==null?void 0:lt.commit.id)!=null?Qi:"null",rendered:!1,reason:Ae?lt?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Yt=`branch:${Ae.commit.id}->${lt.commit.id}`;if(jn.has(Yt)){sn({id:Yt,kind:"branch",parent:Ae.commit.id,child:lt.commit.id,rendered:!1,reason:"duplicate connector key"});continue}jn.add(Yt),eo.add(Ae.commit.id);const Ht=Bs(Ae,lt);Ae.commit.branchName!==lt.commit.branchName&&ms.add(Ae.commit.id);const Zt=ks(Ae),xt=ra(lt);bn.push({id:Yt,fromX:Zt.x,fromY:Zt.y,toX:xt.x,toY:xt.y,fromFace:Zt.face,toFace:xt.face,zIndex:Bn(lt.commit.branchName)}),sn({id:Yt,kind:"branch",parent:Ae.commit.id,child:lt.commit.id,rendered:!0,reason:Ht?"branch connector rendered":L?"horizontal connector rendered":"vertical connector rendered"})}for(const M of pe){const F=Uo(M);if(!F)continue;const de=(zi=M.parentSha)!=null?zi:null;if(!de)continue;const Ae=($i=_s(de,M.branchName))!=null?$i:Kn(de,M.branchName);if(!Ae){const Zt=(So=yt.get(`${M.branchName}:${de}`))!=null?So:yt.get(de),xt=!!Zt&&!ft.has(Zt);!!Zt&&!x.has(Zt)&&(xt?b.has(Zt):!0)||bs(M.id,"Missing parent node"),sn({id:`${M.visualId}->${de}`,kind:"ancestry",parent:de,child:M.id,rendered:!1,reason:"missing parent node"});continue}if(F.commit.id===Ae.commit.id){bs(F.commit.id,"Parent and child resolve to the same node"),sn({id:`${Ae.commit.id}->${F.commit.id}`,kind:"ancestry",parent:Ae.commit.id,child:F.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Pe=`${M.branchName}:${(Do=Ae.commit.visualId)!=null?Do:Ae.commit.id}->${F.commit.visualId}`;if(jn.has(Pe)){bs(Ae.commit.id,"Duplicate connector key"),bs(F.commit.id,"Duplicate connector key"),sn({id:Pe,kind:"ancestry",parent:Ae.commit.id,child:F.commit.id,rendered:!1,reason:"duplicate connector key"});continue}jn.add(Pe),eo.add(Ae.commit.id);const lt=Bs(Ae,F),Yt=Xs(Ae,lt,F),Ht=wo(F);bn.push({id:Pe,fromX:Yt.x,fromY:Yt.y,toX:Ht.x,toY:Ht.y,fromFace:Yt.face,toFace:Ht.face,zIndex:Bn(F.commit.branchName)}),sn({id:Pe,kind:"ancestry",parent:Ae.commit.id,child:F.commit.id,rendered:!0,reason:lt?"ancestry connector rendered":L?"horizontal ancestry rendered":"vertical ancestry rendered"}),ts.add(Ae.commit.id),ts.add(F.commit.id)}const Si=new Map;for(const M of on){const F=(Co=Si.get(M.commit.branchName))!=null?Co:[];F.push(M),Si.set(M.commit.branchName,F)}for(const[M,F]of Si.entries()){if(F.length<2)continue;const de=[...F].sort((Ae,Pe)=>{var lt,Yt,Ht,Zt,xt,un,an,Gn;return Ae.row!==Pe.row?Ae.row-Pe.row:Xi((Yt=(lt=Ae==null?void 0:Ae.commit)==null?void 0:lt.date)!=null?Yt:null)-Xi((Zt=(Ht=Pe==null?void 0:Pe.commit)==null?void 0:Ht.date)!=null?Zt:null)||((un=(xt=Ae==null?void 0:Ae.commit)==null?void 0:xt.id)!=null?un:"").localeCompare((Gn=(an=Pe==null?void 0:Pe.commit)==null?void 0:an.id)!=null?Gn:"")});for(let Ae=1;Ae<de.length;Ae+=1){const Pe=de[Ae-1],lt=de[Ae];if(Pe.commit.id===lt.commit.id)continue;const Yt=(hi=lt.commit.parentSha)!=null?hi:null;if(Yt&&Kn(Yt,lt.commit.branchName))continue;const Ht=`chain:${M}:${Pe.commit.id}->${lt.commit.id}`;if(jn.has(Ht)){bs(Pe.commit.id,"Duplicate branch chain connector"),bs(lt.commit.id,"Duplicate branch chain connector"),sn({id:Ht,kind:"ancestry",parent:Pe.commit.id,child:lt.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}jn.add(Ht);const Zt=Bs(Pe,lt),xt=Xs(Pe,Zt,lt),un=wo(lt);bn.push({id:Ht,fromX:xt.x,fromY:xt.y,toX:un.x,toY:un.y,fromFace:xt.face,toFace:un.face,zIndex:Bn(lt.commit.branchName)}),sn({id:Ht,kind:"ancestry",parent:Pe.commit.id,child:lt.commit.id,rendered:!0,reason:"branch chain rendered"}),ts.add(Pe.commit.id),ts.add(lt.commit.id)}}return{branchByName:A,laneByName:X,mainCommits:W,branchCommitsByLane:Y,branchPreviewSets:q,allCommits:pe,clustersByBranch:vt,clusterKeyByCommitId:yt,clusterKeyBySha:Et,leadByClusterKey:Ke,clusterCounts:it,debugRows:je,branchDebugRows:nt,nodes:Be,normalizedSearchQuery:Ct,matchingNodes:Ze,matchingNodeIds:kt,focusedNode:Bt,checkedOutClusterKey:cn,defaultCollapsedClumps:ft,visibleCommitsList:Pt,renderNodes:on,visibleNodesBySha:$n,visibleNodeByClusterKey:Ds,pointFormatter:Un,contentWidth:tn,contentHeight:kn,connectors:bn,mergeConnectors:Gs,connectorDecisions:hs,nodeWarnings:vo,connectorParentShas:eo,branchStartShas:Rs,branchOffNodeShas:qn,crossBranchOutgoingShas:ms,commitIdsWithRenderedAncestry:ts,branchBaseCommitByName:De,firstBranchCommitByName:se,mergeDestinations:mt,mergeTargetBranchesBySourceBranchAndCommitSha:Nt}}const Vw=8,Yw=44,Ey=120,Ty=e=>e==="left"||e==="right"?"h":e==="top"||e==="bottom"?"v":null;function rb(e,n,i,a,c,u){const d=i-e,h=a-n,p=Math.abs(d),y=Math.abs(h),g=Math.hypot(d,h);if(g<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,y)<Vw){const W=d/g,Y=h/g,q=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+W*q,c1y:n+Y*q,c2x:i-W*q,c2y:a-Y*q}}if(Math.min(p,y)<Yw){const W=d/g,Y=h/g,q=Math.min(240,Math.max(56,g*.42));return{kind:"chord",c1x:e+W*q,c1y:n+Y*q,c2x:i-W*q,c2y:a-Y*q}}const C=Math.min(160,p*.42),j=Math.min(100,p*.22),T=Math.min(120,y*.32),E=Math.min(160,y*.42),N=Ty(c),H=Ty(u);if(!(N==="v"&&H==="h"||N==="v"&&H==null&&y>=p||N==null&&H==="h"&&y>=p||N==="v"&&H==="v"||N==null&&H==null&&y>p)){const W=i,Y=n;return{kind:"elbowH",cx:W,cy:Y,s1c1x:e+x*C,s1c1y:n,s1c2x:W-x*j,s1c2y:Y,s2c1x:W,s2c1y:Y+b*T,s2c2x:i,s2c2y:a-b*E}}const A=e,X=a;return{kind:"elbowV",cx:A,cy:X,s1c1x:e,s1c1y:n+b*E,s1c2x:A,s1c2y:X-b*T,s2c1x:A+x*C,s2c1y:X,s2c2x:i-x*j,s2c2y:a}}function Ww(e,n,i,a,c,u){const d=rb(e,n,i,a,c,u);return d.kind==="line"?[{x:e,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:e,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:e,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function Ay(e,n,i,a,c,u,d){const h=rb(e,n,i,a,u,d);if(h.kind==="line")return[`M ${c(e,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(e,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const C=Math.max(8,Math.min(Ey,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),j=i>=e?1:-1,T=a>=n?1:-1,E=h.cx-j*C,N=h.cy+T*C;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(E-j*C*.5,h.cy)} ${c(E,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,N)}`,`C ${c(h.cx,N+T*C*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(Ey,Math.abs(i-e)*.48,Math.abs(a-n)*.48)),y=i>=e?1:-1,g=a>=n?1:-1,x=h.cy-g*p,b=h.cx+y*p;return[`M ${c(e,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-g*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+y*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const jp=2.25,kc=jp/2,Fw=.45,Xw=.02,oa=jp,Pd=10,Gw=-100,Ny=0,qw=.25,id=.001,Kw=12,Qw=Hn+48;function _n(...e){return e.filter(Boolean).join(" ")}function Dy(e){return Math.max(Fw,Math.min(jp,e))}function Zw(e,n){if(e===null||e.size!==n.size)return!1;for(const i of e)if(!n.has(i))return!1;return!0}function lb(e,n){return!(n.right<e.left||n.left>e.right||n.bottom<e.top||n.top>e.bottom)}function Jw(e){var u,d,h,p;let n=(d=(u=e[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=e[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const y of e)n=Math.min(n,y.x),i=Math.min(i,y.y),a=Math.max(a,y.x),c=Math.max(c,y.y);return{left:n,top:i,right:a,bottom:c}}function eS(e,n,i,a,c,u,d){const h=Ww(e,n,i,a,u,d),p=Jw(h);return lb(c,p)}function cb(e,n){return{left:e.x,top:e.y+n,right:e.x+Hn,bottom:e.y+Ol+Us+4}}function tS(e,n){const i=Qw,a=Math.max(120,Math.ceil(Ol+Us+4-n+24)),c=new Map;for(const u of e){const d=cb(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),y=Math.floor(d.top/a),g=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let C=y;C<=g;C++){const j=`${b},${C}`;let T=c.get(j);T||(T=new Set,c.set(j,T)),T.add(x)}}return{cellW:i,cellH:a,buckets:c}}function nS(e,n,i,a){const{cellW:c,cellH:u,buckets:d}=e,h=Math.floor(n.left/c),p=Math.floor(n.right/c),y=Math.floor(n.top/u),g=Math.floor(n.bottom/u),x=new Set;for(let C=h;C<=p;C++)for(let j=y;j<=g;j++){const T=d.get(`${C},${j}`);if(T)for(const E of T)x.add(E)}const b=new Set;for(const C of x){const j=i.get(C);if(!j)continue;const T=cb(j,a);lb(n,T)&&b.add(C)}return b}function Ry(e,n,i,a){var d;if(i.zoom<=0||e<=0||n<=0)return null;const c=i.zoom/oa;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(e-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function sS(e,n){return n>0?{left:e.left-n,top:e.top-n,right:e.right+n,bottom:e.bottom+n}:e}function By(e,n,i){const a=n/oa;return!Number.isFinite(a)||a<=0?e:sS(e,100/a)}function Ly(e){return e.replace(/\\/g,"/").replace(/\/+$/,"")}function Oi(e,n){return!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e)}function Hm(e,n){if(n){const i=Ly(n),a=Ly(e.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!e.isCurrent}function nm(e,n){return e.pathExists===!1?!1:Hm(e,n)}function oS(e){const n=e.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?e:`.../${n.slice(-2).join("/")}`}function iS({compactLabels:e=!1,selectedVisibleCommitShas:n,commitInProgress:i,commitDisabled:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,hasUncommittedChanges:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:y,onStashLocalChanges:g,onPushCurrentBranch:x,onPushAllBranches:b,onPushCommitTargets:C,onMergeRefsIntoBranch:j,selectedPushTargets:T,selectedPushLabel:E,canPushCurrentBranch:N,pushCurrentBranchLabel:H,pushableRemoteBranchCount:L,selectedCommitTargetOption:A,mergeInProgress:X,setMergeTargetCommitSha:W,worktrees:Y,currentRepoPath:q,worktreeMenuOpen:ue,setWorktreeMenuOpen:fe,onSwitchToWorktree:_e,onRemoveWorktree:De,removeWorktreeInProgress:qe,setCommitDialogOpen:se,setNewBranchDialogOpen:he,hideMergeControls:O=!1}){var ut,$t;const oe=n.length>0,P=n.length>0&&n.every(_t=>_t==="WORKING_TREE"),[me,be]=_.useState(!1),$=_.useRef(null),ie=_.useRef(null),ee="inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",ve=!!y&&h&&!a&&!i&&(!oe||P),Te=!!x&&N&&!oe&&!d,pe=!!C&&T.length>0&&!d,Oe=!!b&&L>=2&&!oe&&!d,et=!!g&&!u&&!oe&&!c,We="Push Selected...",mt=ve?{label:i?"Committing...":"Commit",iconSrc:"/icon-commit.svg",run:()=>se(!0),disabled:!ve}:Te?{label:d?"Pushing...":H,iconSrc:"/icon-pushBranch.svg",run:()=>void(x==null?void 0:x()),disabled:!Te}:pe?{label:We,iconSrc:"/icon-pushSelected.svg",run:()=>void(C==null?void 0:C(T.map(_t=>({branchName:_t.branchName,targetSha:_t.targetSha})))),disabled:!pe}:null,Nt=(_t,Gt)=>l.jsx("span",{"aria-hidden":"true",className:_n("inline-block shrink-0 bg-current",Gt),style:{WebkitMaskImage:`url(${_t})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${_t})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}});return _.useEffect(()=>{const _t=Gt=>{var Z,Re;const Jt=Gt.target;Jt&&((Z=$.current)!=null&&Z.contains(Jt)||(Re=ie.current)!=null&&Re.contains(Jt)||(be(!1),fe(!1)))};return window.addEventListener("pointerdown",_t),()=>window.removeEventListener("pointerdown",_t)},[fe]),l.jsx("div",{className:"window-no-drag pointer-events-none z-[60] flex w-full justify-start",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:$,className:"relative inline-flex h-7 items-stretch rounded-md border border-border bg-background",children:[l.jsx("button",{type:"button",onClick:()=>{mt&&mt.run()},disabled:!mt||mt.disabled,className:_n(ee,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-muted"),children:l.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[Nt((ut=mt==null?void 0:mt.iconSrc)!=null?ut:"/icon-commit.svg","h-4.5 w-4.5"),e?null:l.jsx("span",{children:($t=mt==null?void 0:mt.label)!=null?$t:"Commit"})]})}),l.jsx("button",{type:"button",onClick:()=>be(_t=>!_t),disabled:!mt,"aria-haspopup":"menu","aria-expanded":me,className:_n(ee,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-muted"),title:"More actions",children:l.jsx(tb,{className:"h-3.5 w-3.5 shrink-0"})}),me&&mt?l.jsxs("div",{className:"absolute left-[-1px] top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background p-1",children:[l.jsxs("button",{type:"button",onClick:()=>{be(!1),se(!0)},disabled:!ve,className:_n(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!ve&&"text-foreground opacity-50"),children:[Nt("/icon-commit.svg","mr-1.5 h-4.5 w-4.5"),i?"Committing...":"Commit"]}),l.jsxs("button",{type:"button",onClick:()=>{be(!1),x==null||x()},disabled:!Te,className:_n(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Te&&"text-foreground opacity-50"),children:[Nt("/icon-pushBranch.svg","mr-1.5 h-4.5 w-4.5"),d?"Pushing...":H]}),l.jsxs("button",{type:"button",onClick:()=>{be(!1),C==null||C(T.map(_t=>({branchName:_t.branchName,targetSha:_t.targetSha})))},disabled:!pe,className:_n(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!pe&&"text-foreground opacity-50"),title:E,children:[Nt("/icon-pushSelected.svg","mr-1.5 h-4.5 w-4.5"),We]}),l.jsxs("button",{type:"button",onClick:()=>{be(!1),b==null||b()},disabled:!Oe,className:_n(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!Oe&&"text-foreground opacity-50"),children:[Nt("/icon-pushAll.svg","mr-1.5 h-4.5 w-4.5"),"Push all"]}),l.jsxs("button",{type:"button",onClick:()=>{be(!1),g==null||g()},disabled:!et,className:_n(ee,"w-full justify-start whitespace-nowrap rounded-[2px] border-0 bg-transparent px-2 hover:bg-muted",!et&&"text-foreground opacity-50"),children:[Nt("/icon-stash.svg","mr-1.5 h-4.5 w-4.5"),c?"Stashing...":"Stash"]})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsxs("button",{type:"button",onClick:()=>he(!0),disabled:p,className:_n(ee,"pointer-events-auto relative z-10 !bg-background !border-border hover:!bg-muted",e?"w-7 justify-center px-0":""),children:[l.jsx(nb,{className:_n("h-3.5 w-3.5 shrink-0",e?"":"mr-1.5")}),e?null:p?"Creating...":"Branch"]})}),!O&&n.length>1&&A.options.length>0&&A.targetBranch&&j?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border bg-background px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-foreground",children:"Merge to"}),A.options.map(_t=>{const Gt=_t.targetBranch===A.targetBranch;return l.jsx("button",{type:"button",onClick:()=>W(_t.targetSha),className:_n("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",Gt?"bg-background text-foreground":"text-foreground hover:bg-muted hover:text-foreground"),children:_t.targetBranch},`merge-${_t.targetBranch}`)}),l.jsxs("button",{type:"button",onClick:()=>void j(A.sources,A.targetBranch),disabled:A.sources.length===0||X,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(sb,{className:"mr-1 inline h-3 w-3 shrink-0 align-text-bottom"}),X?"Merging...":"Confirm"]})]}):null,Y.length>0&&(_e||De)?l.jsxs("div",{ref:ie,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>fe(_t=>!_t),className:_n(ee,"!bg-background !border-border hover:!bg-muted"),children:[l.jsx(Sw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),Y.length,e?null:` ${Y.length===1?"Worktree":"Worktrees"}`]}),ue?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-md border border-border bg-background p-1",children:Y.map(_t=>{var Gt;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:_t.path,children:Hm(_t,q)?oS(_t.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-foreground",children:[(Gt=_t.branchName)!=null?Gt:"detached"," • ",_t.headSha.slice(0,7)]})]}),Hm(_t,q)?l.jsxs("div",{className:"flex items-center gap-1",children:[_e?l.jsx("button",{type:"button",onClick:()=>{fe(!1),_e(_t.path)},disabled:qe||_t.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,De?l.jsx("button",{type:"button",onClick:()=>void De(_t.path,_t.isPrunable),disabled:qe,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:qe?"...":"Remove"}):null]}):null]},_t.path)})}):null]}):null]})})}function aS({fadeIn:e,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=_.useState(!e);return _.useLayoutEffect(()=>{if(!e){p(!0);return}p(!1);let y=null;const g=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(g),y!=null&&cancelAnimationFrame(y)}},[e]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:e?"opacity 240ms ease-out":void 0},children:d})}function rS({scrollContainerRef:e,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:y,labelTopPx:g,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:C,normalizedSearchQuery:j,matchingNodeIds:T,focusedNode:E,renderNodes:N,shouldRenderNode:H,manuallyOpenedClumps:L,manuallyClosedClumps:A,defaultCollapsedClumps:X,leadByClusterKey:W,clusterKeyByCommitId:Y,clusterCounts:q,commitIdsWithRenderedAncestry:ue,nodeWarnings:fe,connectorParentShas:_e,branchStartShas:De,branchOffNodeShas:qe,crossBranchOutgoingShas:se,branchBaseCommitByName:he,branchStartAccentClass:O,connectorParentAccentClass:oe,commitCornerRadiusPx:P,lineStrokeWidth:me,pointFormatter:be,connectors:$,mergeConnectors:ie,cullConnectorPath:ee,flushCameraReactTick:ve,setManuallyOpenedClumps:Te,setManuallyClosedClumps:pe,onCommitCardClick:Oe,unpushedCommitShasSetByBranch:et,remoteCommitShas:We,checkedOutHeadSha:mt}){const[Nt,Mt]=_.useState(new Set),ut=_.useRef(null);_.useEffect(()=>{const Z=new Set;q.forEach((rt,gt)=>{(L.has(gt)||!X.has(gt)&&!A.has(gt))&&Z.add(gt)});const Re=ut.current;if(Re==null){ut.current=Z;return}const dt=[];if(Z.forEach(rt=>{Re.has(rt)||dt.push(rt)}),dt.length>0){Mt(gt=>{const Ue=new Set(gt);return dt.forEach(vt=>Ue.add(vt)),Ue});const rt=window.setTimeout(()=>{Mt(gt=>{const Ue=new Set(gt);return dt.forEach(vt=>Ue.delete(vt)),Ue})},260);return ut.current=Z,()=>{window.clearTimeout(rt)}}ut.current=Z},[q,X,A,L]);const $t=(Z,Re)=>{const dt=Re.zIndex-Z.zIndex;if(dt!==0)return dt;const rt=Math.min(Z.fromY,Z.toY),gt=Math.min(Re.fromY,Re.toY),Ue=rt-gt;return Ue!==0?Ue:Z.id.localeCompare(Re.id)},_t=ie.filter(Z=>ee(Z)).sort($t),Gt=$.filter(Z=>ee(Z)).sort($t),Jt=N.filter(Z=>H(Z));return l.jsx("div",{ref:e,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},onWheel:h,onMouseDown:p,children:l.jsx("div",{ref:n,className:"relative min-w-full bg-background p-2.5",style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Jt.map(Z=>{var Pt,hn,Ot,jt,mn,rs;const Re=Y.get(Z.commit.visualId),dt=Re?L.has(Re)||!X.has(Re)&&!A.has(Re):!1,rt=Re?W.get(Re)===Z.commit.visualId:!1,gt=Re!=null&&dt&&!rt&&Nt.has(Re),Ue=Re&&(Pt=q.get(Re))!=null?Pt:1,vt=ue.has(Z.commit.id),yt=(hn=fe.get(Z.commit.id))!=null?hn:[],Et=yt.length>0&&!vt,Ke=C.includes(Z.commit.id),it=Z.commit.id==="WORKING_TREE"||Z.commit.kind==="uncommitted",V=Z.commit.kind==="stash"||Z.commit.id.startsWith("STASH:"),te=/^STASH:(\d+)$/.exec(Z.commit.id),Se=te?`Stash ${Number.parseInt(te[1],10)+1}`:null,je=V?Z.commit.message.trim()&&Z.commit.message.trim()!=="git-visualizer"?Z.commit.message:"Stashed changes":Z.commit.message,nt=Z.commit.kind==="branch-created"&&Z.commit.id.startsWith("BRANCH_HEAD:"),Ye=it||((jt=(Ot=et.get(Z.commit.branchName))==null?void 0:Ot.has(Z.commit.id))!=null?jt:!1),Ne=Z.commit.isRemote===!0,xe=!it&&!Ye&&(Ne||We.has(Z.commit.id)),Xe=(it||mt!=null&&Z.commit.id===mt)&&!Ke,st=xe&&!Xe&&!Ke,Be=Xe?"text-checked":st?"text-remote":Ke?"text-select":"text-foreground",tt=Xe?{color:"var(--checked)"}:st?{color:"var(--remote)"}:Ke?{color:"var(--select)"}:void 0,wt=(mn=tt==null?void 0:tt.color)!=null?mn:"var(--foreground)",Ct=(E==null?void 0:E.commit.id)===Z.commit.id?wt:Xe?"var(--checked)":st?"var(--remote)":Ke?"var(--select)":Jh,Ze=V||nt||it?1.25/b:me,Bt=V||it||nt,kt=`${12/b} ${6/b}`,pt=Ze/2,cn=`M ${pt} ${pt} H ${Hn-pt-P} Q ${Hn-pt} ${pt} ${Hn-pt} ${pt+P} V ${176-pt-P} Q ${Hn-pt} ${176-pt} ${Hn-pt-P} ${176-pt} H ${pt+P} Q ${pt} ${176-pt} ${pt} ${176-pt-P} V ${pt}`,ft=Ye&&!Xe&&!Ke?{color:"var(--muted-foreground)"}:void 0;return l.jsxs(aS,{fadeIn:gt,dataCommitCard:"true",className:_n("group absolute z-20",j&&!T.has(Z.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",j&&T.has(Z.commit.id)?"scale-[1.01]":"",(E==null?void 0:E.commit.id)===Z.commit.id?"z-30":""),style:{left:Z.x,top:Z.y,width:Hn,height:Ol+Us+4,overflow:"visible"},onClick:en=>Oe(en,Z),onPointerDown:en=>y(en,Z),children:[Bt?l.jsx("svg",{className:"pointer-events-none absolute inset-0 z-20 overflow-visible","aria-hidden":"true",viewBox:`0 0 ${Hn} 176`,preserveAspectRatio:"none",children:l.jsx("path",{d:cn,fill:"none",stroke:Ct,strokeWidth:Ze,strokeDasharray:kt,strokeLinecap:"butt",strokeLinejoin:"round"})}):null,l.jsx("div",{className:"absolute left-0 z-30 w-full",style:{...x,top:`${g}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 bg-transparent pb-0",children:[l.jsx("div",{className:_n("min-w-0 h-4 flex-1 text-sm font-normal leading-none",Be,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:tt!=null?tt:ft,children:V&&Se?Se:Z.commit.branchName?`${Z.commit.branchName}/${Z.commit.id.slice(0,7)}`:Z.commit.id.slice(0,7)}),rt&&Ue>1?l.jsx("button",{type:"button",onMouseDown:en=>{en.stopPropagation()},onClick:en=>{if(en.stopPropagation(),en.preventDefault(),!Re)return;!X.has(Re)?(Te(nn=>{if(!nn.has(Re))return nn;const zt=new Set(nn);return zt.delete(Re),zt}),pe(nn=>{const zt=new Set(nn);return zt.has(Re)?zt.delete(Re):zt.add(Re),zt})):(pe(nn=>{if(!nn.has(Re))return nn;const zt=new Set(nn);return zt.delete(Re),zt}),Te(nn=>{const zt=new Set(nn);return zt.has(Re)?zt.delete(Re):zt.add(Re),zt})),ve()},className:_n("inline-flex self-start items-center bg-transparent p-0 text-sm font-normal leading-none",Be),style:tt!=null?tt:ft,children:dt?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`+${Ue-1}`}):null]})}),l.jsx("div",{className:_n("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Xe&&!Ye&&!V&&!nt?"bg-checked-muted":st&&!V&&!nt?"bg-remote-muted":Ke&&!Ye&&!V&&!nt?"bg-select-muted":Ye||V||nt?"bg-transparent":"bg-muted",Bt?"border-solid":"",qe.has(Z.commit.id)||De.has(Z.commit.id)||se.has(Z.commit.id)?O:_e.has(Z.commit.id)?oe:((rs=he.get(Z.commit.branchName))==null?void 0:rs.id)===Z.commit.id?"border-amber-500":Et?"border-red-500":"",(j&&T.has(Z.commit.id)&&!d,"")),style:{top:0,borderWidth:`${Ze}px`,borderColor:Bt?"transparent":Ct,borderTopLeftRadius:0,borderTopRightRadius:`${P}px`,borderBottomRightRadius:`${P}px`,borderBottomLeftRadius:`${P}px`},children:l.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:_n("max-w-[38rem] select-text text-sm font-normal leading-tight tracking-tight text-foreground",Be,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:tt!=null?tt:ft,children:rt&&dt?je:rt&&Ue>1?`${je} +${Ue-1}`:je}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:Et?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-foreground dark:bg-red-900/20 dark:text-foreground",title:yt.join(`
`),children:"Broken ancestry"}):null})]}),b>.5&&!V?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:_n("select-text text-sm font-normal",Be),"data-selectable-text":"true",style:tt!=null?tt:ft,children:["@",Z.commit.author]}),l.jsx("div",{className:_n("select-text text-sm font-normal",Be),"data-selectable-text":"true",style:tt!=null?tt:ft,children:new Date(Z.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null]})})]},Z.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[_t.map(Z=>{const{fromX:Re,fromY:dt,toX:rt,toY:gt}=Z,Ue=Ay(Re,dt,rt,gt,be,Z.fromFace,Z.toFace);return l.jsx("path",{d:Ue,fill:"none",stroke:Jh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},Z.id)}),Gt.map(Z=>{const{fromX:Re,fromY:dt,toX:rt,toY:gt}=Z,Ue=Ay(Re,dt,rt,gt,be,Z.fromFace,Z.toFace);return l.jsx("path",{d:Ue,fill:"none",stroke:Jh,strokeWidth:me,strokeLinecap:"round",strokeLinejoin:"round"},Z.id)})]})]})})})}function lS({isOpen:e,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:y,debugRows:g,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:e?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${y}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",...g,...x,"",...b.map(C=>`${C.rendered?"rendered":"skipped"} [${C.kind}] ${C.parent.slice(0,7)} -> ${C.child.slice(0,7)} (${C.reason})`)].join(`
`)})})]}):null})}function cS({commitDialogOpen:e,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:y,deleteInProgress:g,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:C,newBranchCreateMode:j,onNewBranchNameChange:T,onNewBranchCreateModeChange:E,onNewBranchDialogClose:N,onNewBranchConfirm:H,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:A,createBranchFromNodeInProgress:X}){return l.jsxs(l.Fragment,{children:[e?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:W=>W.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:W=>i(W.target.value),onKeyDown:W=>{(W.metaKey||W.ctrlKey)&&W.key==="Enter"&&(W.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(jw,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),u?"Committing...":"Commit"]})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-background p-4",onClick:W=>W.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(W=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:W},W))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsx("button",{type:"button",onClick:y,disabled:x===0||g,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:g?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:N,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-background p-4",onClick:W=>W.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>E("from-selected-node"),className:_n("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",j==="from-selected-node"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>E("new-root"),className:_n("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",j==="new-root"?"bg-background text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:"New root"})]}),j==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:C,onChange:W=>T(W.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:N,className:"rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted",children:"Cancel"}),l.jsxs("button",{type:"button",onClick:H,disabled:!C.trim()||X||j==="from-selected-node"&&!L&&!A,className:_n("inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted","disabled:cursor-not-allowed disabled:opacity-50"),children:[l.jsx(nb,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),X?"Creating...":"Create"]})]})]})}):null]})}const Oy="/icon-GitOrientation.svg";function uS({compactLabels:e=!1,orientation:n,onOrientationChange:i}){const a=n==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>i(a),className:_n("window-no-drag inline-flex h-7 items-center rounded-md border border-border bg-background text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",e?"w-7 justify-center px-0":"gap-1.5 pl-1.5 pr-2 py-1"),"aria-label":`Rotate view to ${a}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:_n("absolute inset-0 bg-current transition-transform duration-300 ease-in-out",n==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${Oy})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${Oy})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),e?null:l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-foreground transition-colors",children:"Rotate View"})]})}function dS({query:e,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){const u=_.useRef(null);return l.jsxs("div",{className:"window-no-drag flex h-7 w-[12rem] shrink-0 items-center gap-2 rounded-full border border-border bg-background pl-1.5 pr-2.5",children:[l.jsx(Rw,{className:"h-3.5 w-3.5 shrink-0 text-foreground"}),l.jsx("input",{ref:u,value:e,onChange:d=>n(d.target.value),onBlur:d=>{const h=d.relatedTarget;h!=null&&h.closest('button, a, input, textarea, select, [contenteditable="true"]')||window.setTimeout(()=>{var p;(p=u.current)==null||p.focus()},0)},onKeyDown:d=>{d.key==="Enter"&&(d.preventDefault(),c(1))},placeholder:"Search",className:"min-w-0 flex-1 bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(xw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(tb,{className:"h-4 w-4 shrink-0"})})]}):null]})}const fS="git-visualizer:map-grid-camera:",zy=2e5;function hS({mapPadHostRef:e,transformLayerRef:n,isEnabled:i=!0,onUserCameraChange:a,cameraStorageScopeKey:c}){const u=_.useRef({x:0,y:0}),d=_.useRef(kc),h=_.useRef(null),p=_.useRef({panX:0,panY:0,zoom:kc}),y=_.useRef(null),g=_.useRef(kc),x=_.useRef(null),[b,C]=_.useState(!1),[j,T]=_.useState(kc),[E,N]=_.useState(0),H=_.useRef(null),L=_.useRef(0),A=_.useRef(!1),X=_.useCallback(()=>{const O=(c==null?void 0:c.trim())||window.location.pathname;return`${fS}${O}`},[c]),W=_.useCallback(O=>{try{window.localStorage.setItem(X(),JSON.stringify(O))}catch{}},[X]),Y=_.useCallback(()=>{const O=e.current;if(!O)return null;const oe=O.getBoundingClientRect(),P=getComputedStyle(O),me=Number.parseFloat(P.borderLeftWidth)||0,be=Number.parseFloat(P.borderTopWidth)||0,$=Number.parseFloat(P.paddingLeft)||Pd,ie=Number.parseFloat(P.paddingTop)||Pd;return{x:oe.left+me+$,y:oe.top+be+ie}},[e]),q=_.useCallback(()=>{H.current!=null&&(window.clearTimeout(H.current),H.current=null),_.startTransition(()=>{N(O=>O+1)}),L.current=performance.now()},[]),ue=_.useCallback((O,oe,P,me)=>{const be=p.current,$={panX:O,panY:oe,zoom:P};p.current=$;const ie=n.current;if(ie&&(ie.style.transform=`translate3d(${O}px, ${oe}px, 0) scale(${P/oa})`),Math.abs(g.current-P)>id&&(g.current=P,T(P)),(me==null?void 0:me.emitTick)===!1||A.current)return;if(Math.abs(P-be.zoom)>id){q();return}const Te=performance.now()-L.current;if(Te>=Ny){q();return}H.current!=null&&window.clearTimeout(H.current),H.current=window.setTimeout(()=>{H.current=null,q()},Ny-Te)},[q,n]),fe=_.useRef(null),_e=_.useCallback(()=>{y.current!=null||!fe.current||(y.current=window.requestAnimationFrame(fe.current))},[]),De=_.useCallback(()=>{A.current=!0,C(!0),x.current!=null&&window.clearTimeout(x.current),x.current=window.setTimeout(()=>{x.current=null,A.current=!1,C(!1),q(),W(p.current)},90)},[q,W]),qe=_.useCallback((O,oe,P)=>{i&&(u.current={x:O,y:oe},d.current=P,De(),_e())},[i,De,_e]);fe.current=()=>{y.current=null;const O=p.current,oe=u.current.x,P=u.current.y,me=d.current,be=h.current,$=Math.abs(me-O.zoom)<=id?me:O.zoom+(me-O.zoom)*qw,ie=be!=null?be.anchorX-be.worldX*($/oa):oe,ee=be!=null?be.anchorY-be.worldY*($/oa):P;be!=null&&Math.abs($-me)<=id&&(h.current=null),ue(ie,ee,$),ie!==oe||ee!==P||$!==me?fe.current&&(y.current=window.requestAnimationFrame(fe.current)):q()};const se=_.useCallback((O,oe,P)=>{if(!i)return;const me=Dy(P),be=u.current.x,$=u.current.y,ie=d.current,ee=Y();if(!ee){qe(be,$,me);return}const ve=O-ee.x,Te=oe-ee.y,pe=ie/oa,Oe=me/oa,et=(ve-be)/pe,We=(Te-$)/pe,mt=ve-et*Oe,Nt=Te-We*Oe;h.current={anchorX:ve,anchorY:Te,worldX:et,worldY:We},qe(mt,Nt,me)},[Y,i,qe]),he=_.useCallback(O=>{if(!i)return;if(O.preventDefault(),O.ctrlKey||O.metaKey){a==null||a();const be=Math.exp(-O.deltaY*Xw);se(O.clientX,O.clientY,d.current*be);return}a==null||a(),h.current=null;const oe=p.current;u.current={x:oe.panX,y:oe.panY},d.current=oe.zoom;const P=oe.panX-O.deltaX,me=oe.panY-O.deltaY;u.current={x:P,y:me},ue(P,me,oe.zoom)},[ue,i,a,se]);return _.useLayoutEffect(()=>{if(!i)return;let O={panX:0,panY:0,zoom:kc};try{const oe=window.localStorage.getItem(X());if(oe){const P=JSON.parse(oe);typeof P.panX=="number"&&Number.isFinite(P.panX)&&Math.abs(P.panX)<=zy&&typeof P.panY=="number"&&Number.isFinite(P.panY)&&Math.abs(P.panY)<=zy&&typeof P.zoom=="number"&&Number.isFinite(P.zoom)&&(O={panX:P.panX,panY:P.panY,zoom:Dy(P.zoom)})}}catch{}return u.current={x:O.panX,y:O.panY},d.current=O.zoom,ue(O.panX,O.panY,O.zoom,{emitTick:!1}),()=>{x.current!=null&&window.clearTimeout(x.current),y.current!=null&&window.cancelAnimationFrame(y.current),H.current!=null&&(window.clearTimeout(H.current),H.current=null),W(p.current)}},[ue,X,i,W]),{isCameraMoving:b,renderedZoom:j,cameraRenderTick:E,renderedCameraRef:p,interactionIdleTimeoutRef:x,getTransformLayerOriginScreen:Y,flushCameraReactTick:q,syncCamera:qe,handleWheel:he}}function mS(e){const n=Math.min(e.startX,e.currentX),i=Math.min(e.startY,e.currentY),a=Math.abs(e.currentX-e.startX),c=Math.abs(e.currentY-e.startY);return{left:n,top:i,width:a,height:c}}function pS({scrollContainerRef:e,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=_.useRef(null),h=_.useRef(!1),p=_.useRef([]),[y,g]=_.useState(!1),[x,b]=_.useState(null),[C,j]=_.useState([]),[T,E]=_.useState(null),N=_.useCallback(L=>{const A=e.current,X=i();if(!A||!X)return[];const W=A.getBoundingClientRect(),Y=n.current.zoom/oa;if(Y<=0)return[];const q=[],ue=L.left,fe=L.left+L.width,_e=L.top,De=L.top+L.height;for(const qe of a){if(!c(qe))continue;const se=X.x+n.current.panX+qe.x*Y-W.left,he=X.y+n.current.panY+qe.y*Y-W.top,O=se+Hn*Y,oe=he+(Ol+Us)*Y;!(O<ue||se>fe||oe<_e||he>De)&&q.push(qe.commit.id)}return q},[i,a,n,e,c]),H=_.useCallback(L=>{if(L.button!==0)return;const A=L.target;if(A!=null&&A.closest("[data-commit-card]")||A!=null&&A.closest("button, a, input, textarea, select"))return;const X=e.current;if(!X)return;L.preventDefault();const W=X.getBoundingClientRect(),Y=L.clientX-W.left,q=L.clientY-W.top;d.current={startX:Y,startY:q,currentX:Y,currentY:q,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?C:[],g(!0),b({left:Y,top:q,width:0,height:0})},[e,C]);return _.useEffect(()=>{const L=X=>{var _e;const W=d.current;if(!W)return;const Y=e.current;if(!Y)return;const q=Y.getBoundingClientRect();W.currentX=X.clientX-q.left,W.currentY=X.clientY-q.top,!h.current&&(Math.abs(W.currentX-W.startX)>2||Math.abs(W.currentY-W.startY)>2)&&(h.current=!0);const ue=mS(W);b(ue);const fe=N(ue);j(W.additive?Array.from(new Set([...p.current,...fe])):Array.from(new Set(fe))),W.additive||E((_e=fe[fe.length-1])!=null?_e:null)},A=()=>{if(d.current){const X=h.current;d.current=null,h.current=!1,g(!1),b(null),X||(j([]),E(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",A),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",A)}},[N,u,e]),{isMarqueeSelecting:y,marqueeRect:x,selectedCommitShas:C,setSelectedCommitShas:j,mergeTargetCommitSha:T,setMergeTargetCommitSha:E,startMarqueeDrag:H}}function _S(){return l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center",children:l.jsx("div",{role:"status","aria-label":"Loading commits",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function gS(){return l.jsx("div",{className:"pointer-events-auto absolute inset-0 z-[120] flex min-h-0 items-center justify-center bg-background/80 backdrop-blur-sm",children:l.jsx("div",{role:"status","aria-label":"Preparing map",className:"h-5 w-5 rounded-full border-2 border-border border-t-muted-foreground animate-spin"})})}function $y({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:y,staleBranches:g=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:C,mapTopInsetPx:j=0,onMergeRefsIntoBranch:T,mergeInProgress:E=!1,onPushAllBranches:N,onPushCurrentBranch:H,onPushCommitTargets:L,pushInProgress:A=!1,onDeleteSelection:X,deleteInProgress:W=!1,worktrees:Y=[],currentRepoPath:q,onRemoveWorktree:ue,removeWorktreeInProgress:fe=!1,onSwitchToWorktree:_e,onStashLocalChanges:De,stashInProgress:qe=!1,stashDisabled:se=!1,onCommitLocalChanges:he,commitInProgress:O=!1,commitDisabled:oe=!1,onStageAllChanges:P,stageInProgress:me=!1,onCreateBranchFromNode:be,onCreateRootBranch:$,createBranchFromNodeInProgress:ie=!1,isDebugOpen:ee=!1,onDebugClose:ve,orientation:Te="horizontal",branchCommitPreviews:pe={},branchParentByName:Oe={},branchUniqueAheadCounts:et={},gridSearchQuery:We="",gridSearchJumpToken:mt=0,gridSearchJumpDirection:Nt=1,gridFocusSha:Mt=null,checkedOutRef:ut=null,onGridSearchResultCountChange:$t,onGridSearchResultIndexChange:_t,onGridSearchFocusChange:Gt,onInteractionChange:Jt,manuallyOpenedClumps:Z,manuallyClosedClumps:Re,setManuallyOpenedClumps:dt,setManuallyClosedClumps:rt,layoutModel:gt,gridHudProps:Ue,blockMapInteraction:vt=!1,blockMapDisplay:yt=!1,mapReadyEpoch:Et=0,onMapReadyForDisplay:Ke}){var la,B,U,w,S,k,R,z,J,ae,Me,Ge;const it=_.useRef(null),V=_.useRef(null),te=_.useRef(null),Se=_.useRef(null),je=_.useRef(null),nt=_.useRef(void 0),Ye=_.useRef(void 0),Ne=_.useRef(void 0),xe=_.useRef(0),ot=_.useRef(null),[Xe,st]=_.useState(!1),[Be,tt]=_.useState(!1),[wt,Ct]=_.useState(""),[Ze,Bt]=_.useState(!1),[kt,pt]=_.useState(!1),[cn,ft]=_.useState(""),[Pt,hn]=_.useState("from-selected-node"),[Ot,jt]=_.useState(()=>new Set),[mn,rs]=_.useState(()=>new Set),[en,gn]=_.useState({}),nn=_.useRef(!1),zt=_.useRef(null),on=_.useRef(null),Qe=Z!=null?Z:Ot,zn=Re!=null?Re:mn,$n=dt!=null?dt:jt,Ds=rt!=null?rt:rs,[Un,bo]=_.useState(null),[Ys,co]=_.useState(null),[Ws,tn]=_.useState(!1),[kn,bn]=_.useState(!1),Fs=_.useId(),{isCameraMoving:Bn,renderedZoom:hs,cameraRenderTick:sn,renderedCameraRef:ts,interactionIdleTimeoutRef:vo,getTransformLayerOriginScreen:bs,flushCameraReactTick:eo,syncCamera:Rs,handleWheel:qn}=hS({mapPadHostRef:te,transformLayerRef:Se,isEnabled:!vt,cameraStorageScopeKey:`${q!=null?q:"__no-repo__"}::${Te}`}),_s=_.useRef(0),Uo=_.useMemo(()=>{if(gt)return gt;const G=Cp(e,d,pe,Oe);return kp({lanes:G,branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,defaultBranch:d,branchCommitPreviews:pe,branchParentByName:Oe,branchUniqueAheadCounts:et,manuallyOpenedClumps:Qe,manuallyClosedClumps:zn,isDebugOpen:ee,gridSearchQuery:We,gridFocusSha:Mt,checkedOutRef:ut!=null?ut:null,orientation:Te,nodePositionOverrides:en})},[gt,e,n,i,a,c,d,pe,Oe,et,Qe,zn,ee,We,Mt,(la=ut==null?void 0:ut.headSha)!=null?la:null,(B=ut==null?void 0:ut.branchName)!=null?B:null,Te,en]),{allCommits:ci,clusterKeyByCommitId:wo,leadByClusterKey:ra,clusterCounts:Bs,matchingNodes:Xs,matchingNodeIds:ks,normalizedSearchQuery:Kn,focusedNode:Sn,defaultCollapsedClumps:Gs,renderNodes:vn,visibleNodesBySha:ms,contentWidth:Si,contentHeight:Vo,connectors:Ci,mergeConnectors:qt,connectorDecisions:Ls,nodeWarnings:Vn,commitIdsWithRenderedAncestry:ki,connectorParentShas:ji,branchStartShas:Os,branchOffNodeShas:uo,crossBranchOutgoingShas:to,branchBaseCommitByName:ls,pointFormatter:Dn}=Uo,js=!!Kn,gs=hs/oa,Ms=_.useMemo(()=>({transform:`scale(${1/gs})`,transformOrigin:"top left",width:`${100*gs}%`,height:`${100*gs}%`}),[gs]),zs=-(20/gs),yn=_.useMemo(()=>{const G=new Map;for(const re of vn)G.set(re.commit.visualId,re);return G},[vn]),qs=_.useMemo(()=>tS(vn,zs),[vn,zs]),$s=G=>{var Ee;const re=G.commit.id,le=G.commit.visualId;if(js&&ks.has(re)||(Sn==null?void 0:Sn.commit.id)===re||Un===null)return!0;if(!Un.has(le))return!1;const Q=wo.get(le);return Q&&((Ee=Bs.get(Q))!=null?Ee:1)>1&&(Qe.has(Q)||!Gs.has(Q)&&!zn.has(Q)),!0},Qo=1.25/gs,Es=Kw/gs,ui="border-border/70",Zo="border-select",Jo=_.useMemo(()=>new Map(e.map(G=>[G.name,G])),[e]),fo=(U=ut==null?void 0:ut.hasUncommittedChanges)!=null?U:!1;_.useMemo(()=>new Set(e.filter(G=>G.commitsAhead===0&&!G.name.startsWith("*")).map(G=>G.name)),[e]);const Ao=_.useMemo(()=>{var re,le;const G=new Map;for(const Q of vn){const Ee=(re=G.get(Q.commit.id))!=null?re:new Set;Ee.add(Q.commit.branchName),G.set(Q.commit.id,Ee)}for(const Q of i){const Ee=(le=G.get(Q.fullSha))!=null?le:new Set;Q.branch&&Ee.add(Q.branch),G.set(Q.fullSha,Ee)}return G},[vn,i,d]),di=_.useMemo(()=>new Map(Object.entries(c).map(([G,re])=>[G,new Set(re)])),[c]),cs=_.useMemo(()=>{var Q;const G=new Set(i.map(Ee=>Ee.fullSha)),re=new Set,le=Ee=>{Ee&&(re.add(Ee),re.add(Ee.slice(0,7)))};for(const Ee of e){if(Ee.commitsBehind<=0)continue;const Ie=(Q=pe[Ee.name])!=null?Q:[];for(const at of Ie)at.kind==="branch-created"||at.kind==="uncommitted"||at.kind==="stash"||G.has(at.fullSha)||le(at.fullSha);Ee.headSha&&!G.has(Ee.headSha)&&le(Ee.headSha)}return re},[e,pe,i]),ho=_.useCallback(()=>{vo.current,eo()},[eo,vo]),{isMarqueeSelecting:Yo,marqueeRect:Ts,selectedCommitShas:mo,setSelectedCommitShas:Wo,mergeTargetCommitSha:As,setMergeTargetCommitSha:wn,startMarqueeDrag:po}=pS({scrollContainerRef:it,renderedCameraRef:ts,getTransformLayerOriginScreen:bs,renderNodes:vn,shouldRenderNode:$s,onPointerReleaseNoMarquee:ho}),us=_.useMemo(()=>new Set(vn.map(G=>G.commit.id)),[vn]),Tn=_.useMemo(()=>mo.filter(G=>us.has(G)),[mo,us]),Fo=_.useCallback((G,re)=>{var Ee;if(!re)return!1;if(((Ee=pe[G])!=null?Ee:[]).some(Ie=>Oi(Ie.fullSha,re)||Oi(Ie.sha,re)))return!0;const Q=Jo.get(G);return!!(Q!=null&&Q.headSha&&Oi(Q.headSha,re))},[pe,Jo]),vs=(w=ut==null?void 0:ut.branchName)!=null?w:null,No=(S=ut==null?void 0:ut.headSha)!=null?S:null,fi=vs==null,Mi=_.useMemo(()=>{if(!Mt)return null;const G=vn.filter(re=>re.commit.id===Mt);return G.length===0?null:G.length===1||!Sn?G[0]:G.reduce((re,le)=>{const Q=(re.x-Sn.x)**2+(re.y-Sn.y)**2;return(le.x-Sn.x)**2+(le.y-Sn.y)**2<Q?le:re})},[Mt,vn,Sn]),ei=_.useCallback((G,re,le)=>{for(const Q of Y){if(!nm(Q,q))continue;if(Q.branchName){if(Q.branchName===G&&Oi(Q.headSha,re))return Q;continue}if(!Oi(Q.headSha,re)&&!Oi(Q.headSha,le))continue;if(Q.parentSha&&Fo(G,Q.parentSha)||Fo(G,Q.headSha))return Q;const Ee=Jo.get(G);if(Ee&&Oi(Ee.headSha,Q.headSha)||G===d&&i.some(Ie=>Oi(Ie.fullSha,Q.headSha)))return Q}return null},[Y,q,Fo,Jo,d,i]),ti=_.useCallback(G=>{for(const re of Y)if(nm(re,q)&&re.branchName===G)return re;return null},[Y,q]),Xo=_.useCallback((G,re)=>{for(const le of Y)if(nm(le,q)&&(Oi(le.headSha,G)||Oi(le.headSha,re)))return le;return null},[Y,q]),At=_.useCallback(G=>{var re;return Array.from((re=Ao.get(G))!=null?re:[])},[Ao]),no=_.useMemo(()=>{var Ie,at,ct,St;const G=ht=>!/^stash\b/i.test(ht.trim()),re=new Map;for(const ht of Tn){const bt=At(ht).filter(G);if(bt.length===0)continue;const dn=(Ie=bt.find(fn=>fn!==d))!=null?Ie:bt[0],Ft=Tn.filter(fn=>fn!==ht).filter(fn=>!new Set(At(fn).filter(G)).has(dn));re.set(dn,{targetSha:ht,targetBranch:dn,sourceRefs:Ft})}const le=Array.from(re.values()),Q=As?le.find(ht=>{var bt;return ht.targetSha===As||ht.targetBranch===((bt=At(As)[0])!=null?bt:"")}):null,Ee=(at=Q!=null?Q:le[le.length-1])!=null?at:null;return{options:le,selected:Ee,targetBranch:(ct=Ee==null?void 0:Ee.targetBranch)!=null?ct:null,sources:(St=Ee==null?void 0:Ee.sourceRefs)!=null?St:[]}},[Tn,At,d,As]),Qi=_.useMemo(()=>{const G=re=>!/^stash\b/i.test(re.trim());return Tn.some(re=>{const le=At(re);return le.length>0&&le.filter(G).length===0})},[Tn,At]),zi=Tn.length>1&&no.options.length>0&&!!no.targetBranch&&no.sources.length>0&&!Qi&&!!T,[$i,So]=_.useState(!1);_.useEffect(()=>{zi&&So(!1)},[zi,Tn]);const Do=_.useMemo(()=>{const G=[...vs===d?[{name:d,headSha:No!=null?No:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...e].filter(re=>!re.name.startsWith("*")&&re.unpushedCommits>0&&re.remoteSyncStatus!=="on-github").map(re=>[re.name,re]);return new Map(G)},[e,vs,No,d,a.length]),Co=_.useMemo(()=>{const G=Q=>{var Ie;const Ee=At(Q).filter(at=>Do.has(at));return Ee.length===0?null:Ee.length===1?Ee[0]:vs&&Ee.includes(vs)?vs:(Ie=Ee.find(at=>at!==d))!=null?Ie:Ee[0]},re=Q=>{var Ee;return Q===d?a.map(Ie=>{var at,ct;return{fullSha:Ie.fullSha,sha:Ie.sha,parentSha:(at=Ie.parentSha)!=null?at:null,message:Ie.message,author:Ie.author,date:Ie.date,kind:(ct=Ie.kind)!=null?ct:"commit"}}):(Ee=pe[Q])!=null?Ee:[]},le=new Map;for(const Q of Tn){const Ee=G(Q);if(!Ee)continue;const Ie=Do.get(Ee);if(!Ie)continue;const at=re(Ee).slice(0,Ie.unpushedCommits),ct=at.findIndex(ht=>ht.fullSha===Q);if(ct===-1)continue;const St=le.get(Ee);(!St||ct<St.targetIndex)&&le.set(Ee,{branchName:Ee,targetSha:Q,targetIndex:ct,commitCount:at.length-ct})}return Array.from(le.values())},[Tn,At,Do,vs,d,a,pe]),hi=_.useMemo(()=>Array.from(new Set(Tn.map(G=>/^STASH:(\d+)$/.exec(G)).filter(G=>!!G).map(G=>parseInt(G[1],10)))).sort((G,re)=>G-re),[Tn]),M=Tn.includes("WORKING_TREE"),F=(M?1:0)+hi.length,de=[...M?["Uncommitted changes"]:[],...hi.map(G=>`Stash ${G+1}`)],Ae=Do.size,Pe=!fi&&!!vs&&Do.has(vs),lt=vs?`Push ${vs}`:"Push current branch",Yt=Co.length===1?Co[0].commitCount>1?`Push ${Co[0].commitCount} commits on ${Co[0].branchName}`:`Push ${Co[0].targetSha.slice(0,7)} on ${Co[0].branchName}`:`Push ${Co.length} selected ranges`,Ht=_.useCallback(G=>{const re=G.target;re!=null&&re.closest('.window-no-drag, input, textarea, select, button, [contenteditable="true"]')||Sp().startDragging()},[]);_.useEffect(()=>{const G=Bn||Yo;je.current!==G&&(je.current=G,Jt==null||Jt(G))},[Bn,Yo,Jt]),_.useEffect(()=>{const G=Kn?Xs.length:null;nt.current!==G&&(nt.current=G,$t==null||$t(G))},[Xs.length,Kn,$t]),_.useEffect(()=>{const G=Kn&&Mt?(()=>{const re=Xs.findIndex(le=>le.commit.id===Mt);return re>=0?re:null})():null;Ye.current!==G&&(Ye.current=G,_t==null||_t(G))},[Mt,Xs,Kn,_t]);const Zt=_.useMemo(()=>{var St,ht,bt,dn,Ft,fn;if(!Kn)return null;const G=Kn,re=e.map(Ln=>Ln.name),le=re.find(Ln=>Ln.toLowerCase()===G),Q=le!=null?le:re.find(Ln=>Ln.toLowerCase().startsWith(G)),Ie=Q!=null?Q:re.find(Ln=>Ln.toLowerCase().includes(G));if(!Ie)return null;const at=(St=e.find(Ln=>Ln.name===Ie))!=null?St:null;if(at!=null&&at.headSha)return at.headSha;const ct=(ht=pe[Ie])!=null?ht:[];return ct.length>0?(dn=(bt=ct[0])==null?void 0:bt.fullSha)!=null?dn:null:Ie===d&&(fn=(Ft=i[0])==null?void 0:Ft.fullSha)!=null?fn:null},[Kn,e,pe,d,i]);_.useEffect(()=>{var Q,Ee,Ie;if(!Kn){if(xe.current=mt,Ne.current===null)return;Ne.current=null,Gt==null||Gt(null);return}if(mt<=0||xe.current===mt)return;xe.current=mt;let G;const re=Mt?Xs.findIndex(at=>at.commit.id===Mt):-1,le=Xs.length>0?re<0?0:(re+Nt+Xs.length)%Xs.length:-1;G=(Ie=(Ee=(Q=Xs[le])==null?void 0:Q.commit.id)!=null?Ee:Zt)!=null?Ie:null,Ne.current!==G&&(Ne.current=G,Gt==null||Gt(G))},[Xs,Kn,Gt,Zt,mt,Nt]),_.useLayoutEffect(()=>{if(!Mt)return;const G=`${Mt}:${mt}`;if(ot.current===G)return;const re=it.current,le=Mi;if(!re||!le)return;const Q=bs();if(!Q)return;const Ee=re.getBoundingClientRect(),Ie=ts.current.zoom,at=Ie/oa,ct=le.x+Hn/2,St=le.y+Ol+Us/2,ht=Ee.left+Ee.width/2,bt=Ee.top+Ee.height/2;Rs(ht-Q.x-ct*at,bt-Q.y-St*at,Ie),ot.current=G},[Mt,mt,Mi,bs,Rs,ts]);const xt=(z=(R=Ys==null?void 0:Ys.width)!=null?R:(k=it.current)==null?void 0:k.clientWidth)!=null?z:0,un=(Me=(ae=Ys==null?void 0:Ys.height)!=null?ae:(J=it.current)==null?void 0:J.clientHeight)!=null?Me:0,an=xt>0&&un>0?Ry(xt,un,ts.current,{innerPaddingPx:Pd}):null,Gn=an!=null?By(an,ts.current.zoom):null,Is=G=>{if(!Gn)return!0;const{fromX:re,fromY:le,toX:Q,toY:Ee}=G;return eS(re,le,Q,Ee,Gn,G.fromFace,G.toFace)};_.useLayoutEffect(()=>{var at;const G=it.current;if(!G||G.clientWidth<=0||G.clientHeight<=0)return;const re=G.clientWidth,le=G.clientHeight;co(ct=>(ct==null?void 0:ct.width)===re&&(ct==null?void 0:ct.height)===le?ct:{width:re,height:le});const Q=Ry(re,le,ts.current,{innerPaddingPx:Pd});if(!Q){bo(ct=>ct===null?ct:null);return}const Ee=By(Q,ts.current.zoom),Ie=nS(qs,Ee,yn,zs);for(const ct of vn){const St=wo.get(ct.commit.visualId);if(!St||((at=Bs.get(St))!=null?at:1)<=1)continue;(Qe.has(St)||!Gs.has(St)&&!zn.has(St))&&Ie.add(ct.commit.visualId)}bo(ct=>Zw(ct,Ie)?ct:Ie)},[hs,mt,Mt,sn,Qe,zn,Gs,wo,Bs,vn,Ys,qs,yn,zs]),_.useLayoutEffect(()=>{const G=it.current;if(!G)return;const re=()=>{const Q=G.clientWidth,Ee=G.clientHeight;Q<=0||Ee<=0||co(Ie=>(Ie==null?void 0:Ie.width)===Q&&(Ie==null?void 0:Ie.height)===Ee?Ie:{width:Q,height:Ee})};re();const le=new ResizeObserver(re);return le.observe(G),()=>le.disconnect()},[ci.length]);const Kt=vn.filter(G=>$s(G)).length,Ut=qt.filter(G=>Is(G)).length,Yn=Ci.filter(G=>Is(G)).length,_o=_.useCallback((G,re)=>{if(nn.current){G.preventDefault(),G.stopPropagation();return}G.stopPropagation();const le=re.commit.id;if(G.shiftKey?(Wo(at=>at.includes(le)?at.filter(ct=>ct!==le):[...at,le]),wn(le)):(Wo(at=>at.includes(le)?[]:[le]),wn(at=>at===le?null:le)),!(G.metaKey||G.ctrlKey||G.detail>=2)||le==="WORKING_TREE")return;const Ee=le.length>=40?le.slice(0,7):le;let Ie=null;if(re.commit.branchName?(Ie=ei(re.commit.branchName,le,Ee),Ie||(Ie=ti(re.commit.branchName))):Ie=Xo(le,Ee),Ie&&_e){_e(Ie.path);return}h==null||h({commitSha:le})},[Xo,ei,ti,h,_e]),Ns=_.useCallback((G,re)=>{var ct,St,ht,bt,dn;if(G.button!==0)return;const le=G.target;if(le!=null&&le.closest('[data-selectable-text="true"]')||le!=null&&le.closest("button, a, input, textarea, select"))return;G.stopPropagation(),G.preventDefault(),nn.current=!1,G.currentTarget.setPointerCapture(G.pointerId);const Q=(ct=en[re.commit.visualId])!=null?ct:en[re.commit.id];zt.current={nodeId:re.commit.visualId,startX:G.clientX,startY:G.clientY,baseX:(St=Q==null?void 0:Q.x)!=null?St:re.x,baseY:(ht=Q==null?void 0:Q.y)!=null?ht:re.y,moved:!1,pendingX:(bt=Q==null?void 0:Q.x)!=null?bt:re.x,pendingY:(dn=Q==null?void 0:Q.y)!=null?dn:re.y};const Ee=()=>{on.current=null;const Ft=zt.current;Ft&&gn(fn=>({...fn,[Ft.nodeId]:{x:Ft.pendingX,y:Ft.pendingY}}))},Ie=Ft=>{const fn=zt.current;if(!fn)return;const Ln=ts.current.zoom/oa,On=Ln>0?1/Ln:1,Eo=(Ft.clientX-fn.startX)*On,Bo=(Ft.clientY-fn.startY)*On;(Math.abs(Eo)>2||Math.abs(Bo)>2)&&(fn.moved=!0),fn.moved&&(nn.current=!0),fn.pendingX=fn.baseX+Eo,fn.pendingY=fn.baseY+Bo,on.current==null&&(on.current=window.requestAnimationFrame(Ee))},at=()=>{window.removeEventListener("pointermove",Ie),window.removeEventListener("pointerup",at),window.removeEventListener("pointercancel",at),on.current!=null&&(window.cancelAnimationFrame(on.current),on.current=null,Ee());try{G.currentTarget.releasePointerCapture(G.pointerId)}catch{}const Ft=zt.current;zt.current=null,Ft&&window.setTimeout(()=>{nn.current=!1},0)};window.addEventListener("pointermove",Ie),window.addEventListener("pointerup",at),window.addEventListener("pointercancel",at)},[en]),Ei=_.useCallback(async()=>{if(!he)return;await he(wt)&&(tt(!1),Ct(""))},[he,wt]),go=_.useCallback(async()=>{X&&(await X({branchNames:[],discardUncommittedChanges:M,stashIndices:hi}),Bt(!1),Wo([]),wn(null))},[X,M,hi]),ko=_.useCallback(async()=>{var re;const G=cn.trim();if(G){if(Pt==="new-root"){if(!$)return;await $(G)}else{if(!be)return;const le=Tn.length===1?Tn[0]:(re=ut==null?void 0:ut.headSha)!=null?re:null;if(!le||!(le==="WORKING_TREE"||le.startsWith("STASH:")||le===(ut==null?void 0:ut.headSha)))return;await be(le,G)}pt(!1),ft(""),hn("from-selected-node"),Wo([]),wn(null)}},[ut==null?void 0:ut.headSha,Pt,cn,be,$,Tn]),jo=!!(ut!=null&&ut.headSha),Ro=Tn.length===0&&jo,Mo=Tn.length===1&&(Tn[0]==="WORKING_TREE"||Tn[0].startsWith("STASH:"))||Ro,Go=!!$;return _.useEffect(()=>{if(kt){if(!Mo&&!Ro&&Go){hn("new-root");return}(Mo||Ro)&&hn("from-selected-node")}},[Go,Ro,kt,Mo]),_.useEffect(()=>{const G=V.current;if(!G)return;const re=640,le=440,Q=()=>{const Ie=G.getBoundingClientRect().width;tn(Ie<re),bn(Ie<le)};Q();const Ee=new ResizeObserver(()=>Q());return Ee.observe(G),()=>Ee.disconnect()},[]),_.useEffect(()=>{const G=re=>{if(!X||Ze||Tn.length===0)return;const le=re.target;le!=null&&le.closest('input, textarea, select, button, [contenteditable="true"]')||re.key!=="Delete"&&re.key!=="Backspace"||(re.preventDefault(),Bt(!0))};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[Ze,X,Tn.length]),_.useLayoutEffect(()=>{if(x||vt||ci.length===0||_s.current===Et)return;const G=window.requestAnimationFrame(()=>{_s.current!==Et&&(_s.current=Et,Ke==null||Ke(Et))});return()=>window.cancelAnimationFrame(G)},[ci.length,x,vt,Et,Ke]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",children:[l.jsx(lS,{isOpen:ee,onClose:()=>ve==null?void 0:ve(),visibleBounds:Gn,renderedNodeCount:Kt,totalNodeCount:vn.length,renderedMergeConnectorCount:Ut,totalMergeConnectorCount:qt.length,renderedConnectorCount:Yn,totalConnectorCount:Ci.length,mapGridCullViewportInsetScreenPx:Gw,debugRows:Uo.debugRows,branchDebugRows:Uo.branchDebugRows,connectorDecisions:Ls}),Ue?l.jsxs("header",{"data-tauri-drag-region":!0,onPointerDown:Ht,className:"window-drag-region pointer-events-none absolute inset-x-0 top-0 z-[70] flex w-full select-none",children:[l.jsxs("div",{ref:V,className:"pointer-events-auto ml-auto flex w-full max-w-[calc(100vw-116px)] min-w-0 items-start justify-between gap-3 p-2.25 select-none",children:[l.jsx("div",{className:"flex min-w-0 flex-nowrap items-center justify-start gap-3 overflow-visible",children:l.jsx(iS,{compactLabels:Ws,selectedVisibleCommitShas:Tn,commitInProgress:O,commitDisabled:oe,stageInProgress:me,stashInProgress:qe,stashDisabled:se,pushInProgress:A,hasUncommittedChanges:fo,createBranchFromNodeInProgress:ie,onCommitLocalChanges:he,onStageAllChanges:P?()=>void P():void 0,onStashLocalChanges:De,onPushCurrentBranch:H,onPushAllBranches:N,onPushCommitTargets:L,onMergeRefsIntoBranch:T,selectedPushTargets:Co,selectedPushLabel:Yt,canPushCurrentBranch:Pe,pushCurrentBranchLabel:lt,pushableRemoteBranchCount:Ae,selectedCommitTargetOption:no,mergeInProgress:E,mergeTargetCommitSha:As,setMergeTargetCommitSha:wn,worktrees:Y,currentRepoPath:q,worktreeMenuOpen:Xe,setWorktreeMenuOpen:st,onSwitchToWorktree:_e,onRemoveWorktree:ue,removeWorktreeInProgress:fe,setCommitDialogOpen:tt,setNewBranchDialogOpen:pt,hideMergeControls:!0})}),l.jsx("div",{className:"flex min-w-0 shrink-0 items-center justify-end gap-2",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto flex items-center gap-2",children:[kn?null:l.jsx(dS,{query:Ue.gridSearchQuery,onQueryChange:Ue.setGridSearchQuery,resultCount:Ue.gridSearchResultCount,resultIndex:Ue.gridSearchResultIndex,onJump:G=>{Ue.setGridSearchJumpDirection(G),Ue.setGridSearchJumpToken(re=>re+1)}}),l.jsx(uS,{compactLabels:Ws,orientation:Ue.mapGridOrientation,onOrientationChange:Ue.setMapGridOrientation})]})})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(Ge=Ue.githubAuthStatus)!=null&&Ge.ghAvailable&&!Ue.githubAuthStatus.authenticated?l.jsx("button",{onClick:Ue.onGitHubAuthSetup,disabled:Ue.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ue.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Ue.githubAuthStatus&&!Ue.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] font-medium text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Ue.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-background/95 px-2 text-[11px] text-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Ue.githubAuthMessage,children:Ue.githubAuthMessage})]}):null,Ue.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Ue.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Ue.commitSwitchFeedback.kind==="error"?"border-red-500/25 bg-red-50/95 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400":"border-blue-500/25 bg-blue-50/95 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"}`,title:Ue.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Ue.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Ue.commitSwitchFeedback.message})]}):null]})]}):null,zi?l.jsx("div",{className:"pointer-events-none absolute bottom-2.25 left-1/2 z-[80] -translate-x-1/2",children:l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-2.25",children:[l.jsxs("div",{className:"inline-flex h-7 items-center rounded-md border border-border bg-background/95 pl-[2px] pr-[4px] backdrop-blur-sm",children:[l.jsx("span",{className:"px-2 text-[11px] font-medium text-foreground",children:"Merge to..."}),l.jsxs("div",{className:"relative inline-flex h-5 items-center rounded-[2px] bg-muted/30 p-0.5",children:[l.jsx("div",{className:"absolute inset-0.5 overflow-hidden rounded-[1px]",children:l.jsx("div",{className:`h-full rounded-[1px] bg-border ${$i?"transition-all duration-200 ease-in-out":""}`,style:{width:`var(--${Fs}-active-width, 0px)`,transform:`translateX(var(--${Fs}-active-offset, 0px))`}})}),no.options.map(G=>{const re=G.targetBranch===no.targetBranch;return l.jsx("button",{type:"button",onClick:()=>{G.targetSha!==As&&So(!0),wn(G.targetSha)},ref:le=>{if(!le)return;const Q=le.parentElement;if(!Q||!re)return;const Ee=le.getBoundingClientRect(),Ie=Q.getBoundingClientRect();Q.style.setProperty(`--${Fs}-active-width`,`${Ee.width}px`),Q.style.setProperty(`--${Fs}-active-offset`,`${Ee.left-Ie.left}px`)},className:`relative z-10 h-4.5 px-2 text-[11px] font-medium transition-colors ${re?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:G.targetBranch},`merge-${G.targetBranch}`)})]})]}),l.jsxs("button",{type:"button",onClick:()=>void T(no.sources,no.targetBranch),disabled:no.sources.length===0||E,className:"inline-flex h-7 items-center rounded-md border border-border bg-background px-2 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx(sb,{className:"mr-1.5 h-3.5 w-3.5 shrink-0"}),E?"Merging...":"Confirm"]})]})}):null,x||ci.length===0?l.jsx(_S,{}):l.jsx(rS,{scrollContainerRef:it,mapPadHostRef:te,transformLayerRef:Se,isMarqueeSelecting:Yo,contentWidth:Si,contentHeight:Vo,isCameraMoving:Bn,onWheel:qn,onMouseDown:po,onNodePointerDown:Ns,labelTopPx:zs,inverseZoomStyle:Ms,displayZoom:gs,selectedVisibleCommitShas:Tn,normalizedSearchQuery:Kn,matchingNodeIds:ks,focusedNode:Mi,renderNodes:vn,shouldRenderNode:$s,manuallyOpenedClumps:Qe,manuallyClosedClumps:zn,defaultCollapsedClumps:Gs,leadByClusterKey:ra,clusterKeyByCommitId:wo,clusterCounts:Bs,commitIdsWithRenderedAncestry:ki,nodeWarnings:Vn,connectorParentShas:ji,branchStartShas:Os,branchOffNodeShas:uo,crossBranchOutgoingShas:to,branchBaseCommitByName:ls,branchStartAccentClass:Zo,connectorParentAccentClass:ui,commitCornerRadiusPx:Es,lineStrokeWidth:Qo,pointFormatter:Dn,connectors:Ci,mergeConnectors:qt,cullConnectorPath:Is,flushCameraReactTick:eo,setManuallyOpenedClumps:$n,setManuallyClosedClumps:Ds,onCommitCardClick:_o,unpushedCommitShasSetByBranch:di,remoteCommitShas:cs,checkedOutHeadSha:No,orientation:Te}),yt?l.jsx(gS,{}):null,Ts&&Yo?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Ts.left,top:Ts.top,width:Ts.width,height:Ts.height,borderColor:"var(--select)",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(cS,{commitDialogOpen:Be,commitMessageDraft:wt,onCommitMessageDraftChange:Ct,onCommitDialogClose:()=>tt(!1),onCommitConfirm:()=>void Ei(),commitInProgress:O,deleteConfirmOpen:Ze,deleteSelectionItems:de,onDeleteConfirmClose:()=>Bt(!1),onDeleteConfirm:()=>void go(),deleteInProgress:W,deletableSelectionCount:F,newBranchDialogOpen:kt,newBranchName:cn,newBranchCreateMode:Pt,onNewBranchNameChange:ft,onNewBranchCreateModeChange:hn,onNewBranchDialogClose:()=>pt(!1),onNewBranchConfirm:()=>void ko(),selectedCommitCanCreateBranch:Mo,currentCheckedOutCommitCanCreateBranch:Ro,createBranchFromNodeInProgress:ie})]})}function yS({branches:e,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y={},branchCommitPreviews:g={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:C="",gridSearchJumpToken:j=0,gridSearchJumpDirection:T=1,gridFocusSha:E=null,onGridSearchResultCountChange:N,onGridSearchResultIndexChange:H,onGridSearchFocusChange:L,view:A="time",isLoading:X=!1,scrollRequest:W,focusedErrorBranch:Y,checkedOutRef:q=null,mapTopInsetPx:ue=0,onMergeRefsIntoBranch:fe,mergeInProgress:_e=!1,onPushAllBranches:De,onPushCurrentBranch:qe,onPushCommitTargets:se,pushInProgress:he=!1,onDeleteSelection:O,worktrees:oe=[],currentRepoPath:P,onRemoveWorktree:me,removeWorktreeInProgress:be=!1,onSwitchToWorktree:$,onStashLocalChanges:ie,stashInProgress:ee=!1,stashDisabled:ve=!1,onCommitLocalChanges:Te,commitInProgress:pe=!1,commitDisabled:Oe=!1,onStageAllChanges:et,stageInProgress:We=!1,onCreateBranchFromNode:mt,onCreateRootBranch:Nt,createBranchFromNodeInProgress:Mt=!1,isMutationBusy:ut=!1,onMoveNodeBackToBranch:$t,isDebugOpen:_t=!1,onDebugClose:Gt,orientation:Jt="horizontal",onInteractionChange:Z,manuallyOpenedClumps:Re,manuallyClosedClumps:dt,setManuallyOpenedClumps:rt,setManuallyClosedClumps:gt,layoutModel:Ue,gridHudProps:vt,blockMapInteraction:yt=!1,blockMapDisplay:Et=!1,mapReadyEpoch:Ke=0,onMapReadyForDisplay:it}){const V=new Set(u.map(Ye=>Ye.branchName)),te=14*864e5,Se=Date.now();function je(Ye){return V.has(Ye.name)||Se-new Date(Ye.lastCommitDate).getTime()<=te}const nt=e.filter(Ye=>Ye.status==="stale"&&je(Ye)).sort((Ye,Ne)=>new Date(Ne.lastCommitDate).getTime()-new Date(Ye.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:A==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx($y,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:y,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:C,gridSearchJumpToken:j,gridSearchJumpDirection:T,gridFocusSha:E,onGridSearchResultCountChange:N,onGridSearchResultIndexChange:H,onGridSearchFocusChange:L,staleBranches:nt,isLoading:X,scrollRequest:W,focusedErrorBranch:Y,checkedOutRef:q,mapTopInsetPx:ue,onMergeRefsIntoBranch:fe,mergeInProgress:_e,onPushAllBranches:De,onPushCurrentBranch:qe,onPushCommitTargets:se,pushInProgress:he,onDeleteSelection:O,worktrees:oe,currentRepoPath:P,onRemoveWorktree:me,removeWorktreeInProgress:be,onSwitchToWorktree:$,onStashLocalChanges:ie,stashInProgress:ee,stashDisabled:ve,onCommitLocalChanges:Te,commitInProgress:pe,commitDisabled:Oe,onStageAllChanges:et,stageInProgress:We,onCreateBranchFromNode:mt,onCreateRootBranch:Nt,createBranchFromNodeInProgress:Mt,isMutationBusy:ut,onMoveNodeBackToBranch:$t,isDebugOpen:_t,onDebugClose:Gt,orientation:Jt,onInteractionChange:Z,manuallyOpenedClumps:Re,manuallyClosedClumps:dt,setManuallyOpenedClumps:rt,setManuallyClosedClumps:gt,layoutModel:Ue,gridHudProps:vt,blockMapInteraction:yt,blockMapDisplay:Et,mapReadyEpoch:Ke,onMapReadyForDisplay:it})}):A==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx($y,{branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,isLoading:X,defaultBranch:d,branchCommitPreviews:g,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:C,gridSearchJumpToken:j,gridSearchJumpDirection:T,gridFocusSha:E,checkedOutRef:q,onGridSearchResultCountChange:N,onGridSearchResultIndexChange:H,onGridSearchFocusChange:L,onInteractionChange:Z,manuallyOpenedClumps:Re,manuallyClosedClumps:dt,setManuallyOpenedClumps:rt,setManuallyClosedClumps:gt,layoutModel:Ue,isDebugOpen:_t,onDebugClose:Gt,orientation:Jt,gridHudProps:vt,blockMapInteraction:yt,blockMapDisplay:Et,mapReadyEpoch:Ke,onMapReadyForDisplay:it})}):null})}var zl=qx();const Mp=_.createContext({});function Zc(e){const n=_.useRef(null);return n.current===null&&(n.current=e()),n.current}const xS=typeof window<"u",Ep=xS?_.useLayoutEffect:_.useEffect,Jd=_.createContext(null);function Tp(e,n){e.indexOf(n)===-1&&e.push(n)}function Dl(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const ya=(e,n,i)=>i>n?n:i<e?e:i;let Ap=()=>{};const mr={},ub=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function db(e){return typeof e=="object"&&e!==null}const fb=e=>/^0[^.\s]+$/u.test(e);function hb(e){let n;return()=>(n===void 0&&(n=e()),n)}const qi=e=>e,bS=(e,n)=>i=>n(e(i)),Jc=(...e)=>e.reduce(bS),Rl=(e,n,i)=>{const a=n-e;return a===0?1:(i-e)/a};class Np{constructor(){this.subscriptions=[]}add(n){return Tp(this.subscriptions,n),()=>Dl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const wi=e=>e*1e3,Gi=e=>e/1e3;function mb(e,n){return n?e*(1e3/n):0}const vS=(e,n,i)=>{const a=n-e;return((i-e)%a+a)%a+e},pb=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,wS=1e-7,SS=12;function CS(e,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=pb(d,a,c)-e,u>0?i=d:n=d;while(Math.abs(u)>wS&&++h<SS);return d}function eu(e,n,i,a){if(e===n&&i===a)return qi;const c=u=>CS(u,0,1,e,i);return u=>u===0||u===1?u:pb(c(u),n,a)}const _b=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,gb=e=>n=>1-e(1-n),yb=eu(.33,1.53,.69,.99),Dp=gb(yb),xb=_b(Dp),bb=e=>e>=1?1:(e*=2)<1?.5*Dp(e):.5*(2-Math.pow(2,-10*(e-1))),Rp=e=>1-Math.sin(Math.acos(e)),vb=gb(Rp),wb=_b(Rp),kS=eu(.42,0,1,1),jS=eu(0,0,.58,1),Sb=eu(.42,0,.58,1),Cb=e=>Array.isArray(e)&&typeof e[0]!="number";function kb(e,n){return Cb(e)?e[vS(0,e.length,n)]:e}const jb=e=>Array.isArray(e)&&typeof e[0]=="number",MS={linear:qi,easeIn:kS,easeInOut:Sb,easeOut:jS,circIn:Rp,circInOut:wb,circOut:vb,backIn:Dp,backInOut:xb,backOut:yb,anticipate:bb},ES=e=>typeof e=="string",Iy=e=>{if(jb(e)){Ap(e.length===4);const[n,i,a,c]=e;return eu(n,i,a,c)}else if(ES(e))return MS[e];return e},ad=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function TS(e,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(y.schedule(g),e()),g(h)}const y={schedule:(g,x=!1,b=!1)=>{const j=b&&c?i:a;return x&&d.add(g),j.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(h=g,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,y.process(g))}};return y}const AS=40;function Mb(e,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=ad.reduce((L,A)=>(L[A]=TS(u),L),{}),{setup:h,read:p,resolveKeyframes:y,preUpdate:g,update:x,preRender:b,render:C,postRender:j}=d,T=()=>{const L=mr.useManualTiming,A=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(A-c.timestamp,AS),1)),c.timestamp=A,c.isProcessing=!0,h.process(c),p.process(c),y.process(c),g.process(c),x.process(c),b.process(c),C.process(c),j.process(c),c.isProcessing=!1,i&&n&&(a=!1,e(T))},E=()=>{i=!0,a=!0,c.isProcessing||e(T)};return{schedule:ad.reduce((L,A)=>{const X=d[A];return L[A]=(W,Y=!1,q=!1)=>(i||E(),X.schedule(W,Y,q)),L},{}),cancel:L=>{for(let A=0;A<ad.length;A++)d[ad[A]].cancel(L)},state:c,steps:d}}const{schedule:as,cancel:Pa,state:Ho,steps:sm}=Mb(typeof requestAnimationFrame<"u"?requestAnimationFrame:qi,!0);let Ad;function NS(){Ad=void 0}const ii={now:()=>(Ad===void 0&&ii.set(Ho.isProcessing||mr.useManualTiming?Ho.timestamp:performance.now()),Ad),set:e=>{Ad=e,queueMicrotask(NS)}},Eb=e=>n=>typeof n=="string"&&n.startsWith(e),Tb=Eb("--"),DS=Eb("var(--"),Bp=e=>DS(e)?RS.test(e.split("/*")[0].trim()):!1,RS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Py(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const $l={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fc={...$l,transform:e=>ya(0,1,e)},rd={...$l,default:1},Pc=e=>Math.round(e*1e5)/1e5,Lp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function BS(e){return e==null}const LS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Op=(e,n)=>i=>!!(typeof i=="string"&&LS.test(i)&&i.startsWith(e)||n&&!BS(i)&&Object.prototype.hasOwnProperty.call(i,n)),Ab=(e,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Lp);return{[e]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},OS=e=>ya(0,255,e),om={...$l,transform:e=>Math.round(OS(e))},Pr={test:Op("rgb","red"),parse:Ab("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:a=1})=>"rgba("+om.transform(e)+", "+om.transform(n)+", "+om.transform(i)+", "+Pc(Fc.transform(a))+")"};function zS(e){let n="",i="",a="",c="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),c=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),c=e.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Um={test:Op("#"),parse:zS,transform:Pr.transform},tu=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),ur=tu("deg"),ga=tu("%"),Lt=tu("px"),$S=tu("vh"),IS=tu("vw"),Hy={...ga,parse:e=>ga.parse(e)/100,transform:e=>ga.transform(e*100)},Ml={test:Op("hsl","hue"),parse:Ab("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+ga.transform(Pc(n))+", "+ga.transform(Pc(i))+", "+Pc(Fc.transform(a))+")"},lo={test:e=>Pr.test(e)||Um.test(e)||Ml.test(e),parse:e=>Pr.test(e)?Pr.parse(e):Ml.test(e)?Ml.parse(e):Um.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Pr.transform(e):Ml.transform(e),getAnimatableNone:e=>{const n=lo.parse(e);return n.alpha=0,lo.transform(n)}},PS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function HS(e){var n,i;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Lp))==null?void 0:n.length)||0)+(((i=e.match(PS))==null?void 0:i.length)||0)>0}const Nb="number",Db="color",US="var",VS="var(",Uy="${}",YS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Bl(e){const n=e.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(YS,p=>(lo.test(p)?(a.color.push(u),c.push(Db),i.push(lo.parse(p))):p.startsWith(VS)?(a.var.push(u),c.push(US),i.push(p)):(a.number.push(u),c.push(Nb),i.push(parseFloat(p))),++u,Uy)).split(Uy);return{values:i,split:h,indexes:a,types:c}}function WS(e){return Bl(e).values}function Rb({split:e,types:n}){const i=e.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=e[u],a[u]!==void 0){const d=n[u];d===Nb?c+=Pc(a[u]):d===Db?c+=lo.transform(a[u]):c+=a[u]}return c}}function FS(e){return Rb(Bl(e))}const XS=e=>typeof e=="number"?0:lo.test(e)?lo.getAnimatableNone(e):e,GS=(e,n)=>typeof e=="number"?n!=null&&n.trim().endsWith("/")?e:0:XS(e);function qS(e){const n=Bl(e);return Rb(n)(n.values.map((a,c)=>GS(a,n.split[c])))}const ia={test:HS,parse:WS,createTransformer:FS,getAnimatableNone:qS};function im(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function KS({hue:e,saturation:n,lightness:i,alpha:a}){e/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=im(p,h,e+1/3),u=im(p,h,e),d=im(p,h,e-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Hd(e,n){return i=>i>0?n:e}const ps=(e,n,i)=>e+(n-e)*i,am=(e,n,i)=>{const a=e*e,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},QS=[Um,Pr,Ml],ZS=e=>QS.find(n=>n.test(e));function Vy(e){const n=ZS(e);if(!n)return!1;let i=n.parse(e);return n===Ml&&(i=KS(i)),i}const Yy=(e,n)=>{const i=Vy(e),a=Vy(n);if(!i||!a)return Hd(e,n);const c={...i};return u=>(c.red=am(i.red,a.red,u),c.green=am(i.green,a.green,u),c.blue=am(i.blue,a.blue,u),c.alpha=ps(i.alpha,a.alpha,u),Pr.transform(c))},Vm=new Set(["none","hidden"]);function JS(e,n){return Vm.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function e4(e,n){return i=>ps(e,n,i)}function zp(e){return typeof e=="number"?e4:typeof e=="string"?Bp(e)?Hd:lo.test(e)?Yy:s4:Array.isArray(e)?Bb:typeof e=="object"?lo.test(e)?Yy:t4:Hd}function Bb(e,n){const i=[...e],a=i.length,c=e.map((u,d)=>zp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function t4(e,n){const i={...e,...n},a={};for(const c in i)e[c]!==void 0&&n[c]!==void 0&&(a[c]=zp(e[c])(e[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function n4(e,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=e.indexes[d][a[d]],p=(c=e.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const s4=(e,n)=>{const i=ia.createTransformer(n),a=Bl(e),c=Bl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Vm.has(e)&&!c.values.length||Vm.has(n)&&!a.values.length?JS(e,n):Jc(Bb(n4(a,c),c.values),i):Hd(e,n)};function Lb(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?ps(e,n,i):zp(e)(e,n)}const o4=e=>{const n=({timestamp:i})=>e(i);return{start:(i=!0)=>as.update(n,i),stop:()=>Pa(n),now:()=>Ho.isProcessing?Ho.timestamp:ii.now()}},Ob=(e,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(e(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ud=2e4;function $p(e){let n=0;const i=50;let a=e.next(n);for(;!a.done&&n<Ud;)n+=i,a=e.next(n);return n>=Ud?1/0:n}function zb(e,n=100,i){const a=i({...e,keyframes:[0,n]}),c=Math.min($p(a),Ud);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:Gi(c)}}const Vs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Ym(e,n){return e*Math.sqrt(1-n*n)}const i4=12;function a4(e,n,i){let a=i;for(let c=1;c<i4;c++)a=a-e(a)/n(a);return a}const rm=.001;function r4({duration:e=Vs.duration,bounce:n=Vs.bounce,velocity:i=Vs.velocity,mass:a=Vs.mass}){let c,u,d=1-n;d=ya(Vs.minDamping,Vs.maxDamping,d),e=ya(Vs.minDuration,Vs.maxDuration,Gi(e)),d<1?(c=y=>{const g=y*d,x=g*e,b=g-i,C=Ym(y,d),j=Math.exp(-x);return rm-b/C*j},u=y=>{const x=y*d*e,b=x*i+i,C=Math.pow(d,2)*Math.pow(y,2)*e,j=Math.exp(-x),T=Ym(Math.pow(y,2),d);return(-c(y)+rm>0?-1:1)*((b-C)*j)/T}):(c=y=>{const g=Math.exp(-y*e),x=(y-i)*e+1;return-rm+g*x},u=y=>{const g=Math.exp(-y*e),x=(i-y)*(e*e);return g*x});const h=5/e,p=a4(c,u,h);if(e=wi(e),isNaN(p))return{stiffness:Vs.stiffness,damping:Vs.damping,duration:e};{const y=Math.pow(p,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:e}}}const l4=["duration","bounce"],c4=["stiffness","damping","mass"];function Wy(e,n){return n.some(i=>e[i]!==void 0)}function u4(e){let n={velocity:Vs.velocity,stiffness:Vs.stiffness,damping:Vs.damping,mass:Vs.mass,isResolvedFromDuration:!1,...e};if(!Wy(e,c4)&&Wy(e,l4))if(n.velocity=0,e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ya(.05,1,1-(e.bounce||0))*Math.sqrt(c);n={...n,mass:Vs.mass,stiffness:c,damping:u}}else{const i=r4({...e,velocity:0});n={...n,...i,mass:Vs.mass},n.isResolvedFromDuration=!0}return n}function Xc(e=Vs.visualDuration,n=Vs.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:y,mass:g,duration:x,velocity:b,isResolvedFromDuration:C}=u4({...i,velocity:-Gi(i.velocity||0)}),j=b||0,T=y/(2*Math.sqrt(p*g)),E=d-u,N=Gi(Math.sqrt(p/g)),H=Math.abs(E)<5;a||(a=H?Vs.restSpeed.granular:Vs.restSpeed.default),c||(c=H?Vs.restDelta.granular:Vs.restDelta.default);let L,A,X,W,Y,q;if(T<1)X=Ym(N,T),W=(j+T*N*E)/X,L=fe=>{const _e=Math.exp(-T*N*fe);return d-_e*(W*Math.sin(X*fe)+E*Math.cos(X*fe))},Y=T*N*W+E*X,q=T*N*E-W*X,A=fe=>Math.exp(-T*N*fe)*(Y*Math.sin(X*fe)+q*Math.cos(X*fe));else if(T===1){L=_e=>d-Math.exp(-N*_e)*(E+(j+N*E)*_e);const fe=j+N*E;A=_e=>Math.exp(-N*_e)*(N*fe*_e-j)}else{const fe=N*Math.sqrt(T*T-1);L=se=>{const he=Math.exp(-T*N*se),O=Math.min(fe*se,300);return d-he*((j+T*N*E)*Math.sinh(O)+fe*E*Math.cosh(O))/fe};const _e=(j+T*N*E)/fe,De=T*N*_e-E*fe,qe=T*N*E-_e*fe;A=se=>{const he=Math.exp(-T*N*se),O=Math.min(fe*se,300);return he*(De*Math.sinh(O)+qe*Math.cosh(O))}}const ue={calculatedDuration:C&&x||null,velocity:fe=>wi(A(fe)),next:fe=>{if(!C&&T<1){const De=Math.exp(-T*N*fe),qe=Math.sin(X*fe),se=Math.cos(X*fe),he=d-De*(W*qe+E*se),O=wi(De*(Y*qe+q*se));return h.done=Math.abs(O)<=a&&Math.abs(d-he)<=c,h.value=h.done?d:he,h}const _e=L(fe);if(C)h.done=fe>=x;else{const De=wi(A(fe));h.done=Math.abs(De)<=a&&Math.abs(d-_e)<=c}return h.value=h.done?d:_e,h},toString:()=>{const fe=Math.min($p(ue),Ud),_e=Ob(De=>ue.next(fe*De).value,fe,30);return fe+"ms "+_e},toTransition:()=>{}};return ue}Xc.applyToOptions=e=>{const n=zb(e,100,Xc);return e.ease=n.ease,e.duration=wi(n.duration),e.type="keyframes",e};const d4=5;function $b(e,n,i){const a=Math.max(n-d4,0);return mb(i-e(a),n-a)}function Wm({keyframes:e,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:y=.5,restSpeed:g}){const x=e[0],b={done:!1,value:x},C=q=>h!==void 0&&q<h||p!==void 0&&q>p,j=q=>h===void 0?p:p===void 0||Math.abs(h-q)<Math.abs(p-q)?h:p;let T=i*n;const E=x+T,N=d===void 0?E:d(E);N!==E&&(T=N-x);const H=q=>-T*Math.exp(-q/a),L=q=>N+H(q),A=q=>{const ue=H(q),fe=L(q);b.done=Math.abs(ue)<=y,b.value=b.done?N:fe};let X,W;const Y=q=>{C(b.value)&&(X=q,W=Xc({keyframes:[b.value,j(b.value)],velocity:$b(L,q,b.value),damping:c,stiffness:u,restDelta:y,restSpeed:g}))};return Y(0),{calculatedDuration:null,next:q=>{let ue=!1;return!W&&X===void 0&&(ue=!0,A(q),Y(q)),X!==void 0&&q>=X?W.next(q-X):(!ue&&A(q),b)}}}function f4(e,n,i){const a=[],c=i||mr.mix||Lb,u=e.length-1;for(let d=0;d<u;d++){let h=c(e[d],e[d+1]);if(n){const p=Array.isArray(n)?n[d]||qi:n;h=Jc(p,h)}a.push(h)}return a}function Ib(e,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=e.length;if(Ap(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const h=f4(n,a,c),p=h.length,y=g=>{if(d&&g<e[0])return n[0];let x=0;if(p>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const b=Rl(e[x],e[x+1],g);return h[x](b)};return i?g=>y(ya(e[0],e[u-1],g)):y}function Pb(e,n){const i=e[e.length-1];for(let a=1;a<=n;a++){const c=Rl(0,n,a);e.push(ps(i,1,c))}}function Hb(e){const n=[0];return Pb(n,e.length-1),n}function h4(e,n){return e.map(i=>i*n)}function m4(e,n){return e.map(()=>n||Sb).splice(0,e.length-1)}function Hc({duration:e=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=Cb(a)?a.map(Iy):Iy(a),u={done:!1,value:n[0]},d=h4(i&&i.length===n.length?i:Hb(n),e),h=Ib(d,n,{ease:Array.isArray(c)?c:m4(n,c)});return{calculatedDuration:e,next:p=>(u.value=h(p),u.done=p>=e,u)}}const p4=e=>e!==null;function ef(e,{repeat:n,repeatType:i="loop"},a,c=1){const u=e.filter(p4),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const _4={decay:Wm,inertia:Wm,tween:Hc,keyframes:Hc,spring:Xc};function Ub(e){typeof e.type=="string"&&(e.type=_4[e.type])}class Ip{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const g4=e=>e/100;class Vd extends Ip{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==ii.now()&&this.tick(ii.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Ub(n);const{type:i=Hc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||Hc;p!==Hc&&typeof h[0]!="number"&&(this.mixKeyframes=Jc(g4,Lb(h[0],h[1])),h=[0,100]);const y=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=$p(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=y}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:y=0,keyframes:g,repeat:x,repeatType:b,repeatDelay:C,type:j,onUpdate:T,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const N=this.currentTime-y*(this.playbackSpeed>=0?1:-1),H=this.playbackSpeed>=0?N<0:N>c;this.currentTime=Math.max(N,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,A=a;if(x){const q=Math.min(this.currentTime,c)/h;let ue=Math.floor(q),fe=q%1;!fe&&q>=1&&(fe=1),fe===1&&ue--,ue=Math.min(ue,x+1),!!(ue%2)&&(b==="reverse"?(fe=1-fe,C&&(fe-=C/h)):b==="mirror"&&(A=d)),L=ya(0,1,fe)*h}let X;H?(this.delayState.value=g[0],X=this.delayState):X=A.next(L),u&&!H&&(X.value=u(X.value));let{done:W}=X;!H&&p!==null&&(W=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const Y=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return Y&&j!==Wm&&(X.value=ef(g,this.options,E,this.speed)),T&&T(X.value),Y&&this.finish(),X}then(n,i){return this.finished.then(n,i)}get duration(){return Gi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Gi(n)}get time(){return Gi(this.currentTime)}set time(n){n=wi(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return $b(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(ii.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=Gi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=o4,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ii.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function y4(e){var n;for(let i=1;i<e.length;i++)(n=e[i])!=null||(e[i]=e[i-1])}const Hr=e=>e*180/Math.PI,Fm=e=>{const n=Hr(Math.atan2(e[1],e[0]));return Xm(n)},x4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Fm,rotateZ:Fm,skewX:e=>Hr(Math.atan(e[1])),skewY:e=>Hr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Xm=e=>(e=e%360,e<0&&(e+=360),e),Fy=Fm,Xy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Gy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),b4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xy,scaleY:Gy,scale:e=>(Xy(e)+Gy(e))/2,rotateX:e=>Xm(Hr(Math.atan2(e[6],e[5]))),rotateY:e=>Xm(Hr(Math.atan2(-e[2],e[0]))),rotateZ:Fy,rotate:Fy,skewX:e=>Hr(Math.atan(e[4])),skewY:e=>Hr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Gm(e){return e.includes("scale")?1:0}function qm(e,n){if(!e||e==="none")return Gm(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=b4,c=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=x4,c=h}if(!c)return Gm(n);const u=a[n],d=c[1].split(",").map(w4);return typeof u=="function"?u(d):d[u]}const v4=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return qm(i,n)};function w4(e){return parseFloat(e.trim())}const Il=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Pl=new Set(Il),qy=e=>e===$l||e===Lt,S4=new Set(["x","y","z"]),C4=Il.filter(e=>!S4.has(e));function k4(e){const n=[];return C4.forEach(i=>{const a=e.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const hr={width:({x:e},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:e},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=e.max-e.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>qm(n,"x"),y:(e,{transform:n})=>qm(n,"y")};hr.translateX=hr.x;hr.translateY=hr.y;const Ur=new Set;let Km=!1,Qm=!1,Zm=!1;function Vb(){if(Qm){const e=Array.from(Ur).filter(a=>a.needsMeasurement),n=new Set(e.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=k4(a);c.length&&(i.set(a,c),a.render())}),e.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Qm=!1,Km=!1,Ur.forEach(e=>e.complete(Zm)),Ur.clear()}function Yb(){Ur.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Qm=!0)})}function j4(){Zm=!0,Yb(),Vb(),Zm=!1}class Pp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ur.add(this),Km||(Km=!0,as.read(Yb),as.resolveKeyframes(Vb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}y4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Ur.delete(this)}cancel(){this.state==="scheduled"&&(Ur.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const M4=e=>e.startsWith("--");function Wb(e,n,i){M4(n)?e.style.setProperty(n,i):e.style[n]=i}const E4={};function Fb(e,n){const i=hb(e);return()=>{var a;return(a=E4[n])!=null?a:i()}}const T4=Fb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Xb=Fb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Oc=([e,n,i,a])=>`cubic-bezier(${e}, ${n}, ${i}, ${a})`,Ky={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oc([0,.65,.55,1]),circOut:Oc([.55,0,1,.45]),backIn:Oc([.31,.01,.66,-.59]),backOut:Oc([.33,1.53,.69,.99])};function Gb(e,n){if(e)return typeof e=="function"?Xb()?Ob(e,n):"ease-out":jb(e)?Oc(e):Array.isArray(e)?e.map(i=>Gb(i,n)||Ky.easeOut):Ky[e]}function A4(e,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},y=void 0){const g={[n]:i};p&&(g.offset=p);const x=Gb(h,c);Array.isArray(x)&&(g.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return y&&(b.pseudoElement=y),e.animate(g,b)}function Hp(e){return typeof e=="function"&&"applyToOptions"in e}function N4({type:e,...n}){var i,a;return Hp(e)&&Xb()?e.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class qb extends Ip{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,Ap(typeof n.type!="string");const y=N4(n);this.animation=A4(i,a,c,y,u),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=ef(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Wb(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Gi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Gi(n)}get time(){return Gi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=wi(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&T4()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),qi):c(this)}}const Kb={anticipate:bb,backInOut:xb,circInOut:wb};function D4(e){return e in Kb}function R4(e){typeof e.ease=="string"&&D4(e.ease)&&(e.ease=Kb[e.ease])}const lm=10;class B4 extends qb{constructor(n){R4(n),Ub(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Vd({...d,autoplay:!1}),p=Math.max(lm,ii.now()-this.startTime),y=ya(0,lm,p-lm),g=h.sample(p).value,{name:x}=this.options;u&&x&&Wb(u,x,g),i.setWithVelocity(h.sample(Math.max(0,p-y)).value,g,y),h.stop()}}const Qy=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ia.test(e)||e==="0")&&!e.startsWith("url("));function L4(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function O4(e,n,i,a){const c=e[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],d=Qy(c,n),h=Qy(u,n);return!d||!h?!1:L4(e)||(i==="spring"||Hp(i))&&a}function Jm(e){e.duration=0,e.type="keyframes"}const Qb=new Set(["opacity","clipPath","filter","transform"]),z4=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function $4(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&z4.test(e[n]))return!0;return!1}const I4=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),P4=hb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function H4(e){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=e;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=n.owner.getProps();return P4()&&i&&(Qb.has(i)||I4.has(i)&&$4(h))&&(i!=="transform"||!g)&&!y&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const U4=40;class V4 extends Ip{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:y,element:g,...x}){var j;super(),this.stop=()=>{var T,E;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=ii.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:y,element:g,...x},C=(g==null?void 0:g.KeyframeResolver)||Pp;this.keyframeResolver=new C(h,(T,E,N)=>this.onKeyframesResolved(T,E,b,!N),p,y,g),(j=this.keyframeResolver)==null||j.scheduleResolve()}onKeyframesResolved(n,i,a,c){var N,H;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:y,onUpdate:g}=a;this.resolvedAt=ii.now();let x=!0;O4(n,u,d,h)||(x=!1,(mr.instantAnimations||!p)&&(g==null||g(ef(n,a,i))),n[0]=n[n.length-1],Jm(a),a.repeat=0);const C={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>U4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},j=x&&!y&&H4(C),T=(H=(N=C.motionValue)==null?void 0:N.owner)==null?void 0:H.current;let E;if(j)try{E=new B4({...C,element:T})}catch{E=new Vd(C)}else E=new Vd(C);E.finished.then(()=>{this.notifyFinished()}).catch(qi),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),j4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class Y4{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Zy(this.animations,"duration")}get iterationDuration(){return Zy(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Zy(e,n){let i=0;for(let a=0;a<e.length;a++){const c=e[a][n];c!==null&&c>i&&(i=c)}return i}class W4 extends Y4{then(n,i){return this.finished.finally(n).then(()=>{})}}function Zb(e,n,i,a=0,c=1){const u=Array.from(e).sort((y,g)=>y.sortNodePosition(g)).indexOf(n),d=e.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const F4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function X4(e){const n=F4.exec(e);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Jb(e,n,i=1){const[a,c]=X4(e);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return ub(d)?parseFloat(d):d}return Bp(c)?Jb(c,n,i+1):c}const G4={type:"spring",stiffness:500,damping:25,restSpeed:10},q4=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),K4={type:"keyframes",duration:.8},Q4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Z4=(e,{keyframes:n})=>n.length>2?K4:Pl.has(e)?e.startsWith("scale")?q4(n[1]):G4:Q4;function e5(e,n){if(e!=null&&e.inherit&&n){const{inherit:i,...a}=e;return{...n,...a}}return e}function Up(e,n){var a,c;const i=(c=(a=e==null?void 0:e[n])!=null?a:e==null?void 0:e.default)!=null?c:e;return i!==e?e5(i,e):i}const J4=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function eC(e){for(const n in e)if(!J4.has(n))return!0;return!1}const Vp=(e,n,i,a={},c,u)=>d=>{const h=Up(a,e)||{},p=h.delay||a.delay||0;let{elapsed:y=0}=a;y=y-wi(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-y,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:e,motionValue:n,element:u?void 0:c};eC(h)||Object.assign(g,Z4(e,g)),g.duration&&(g.duration=wi(g.duration)),g.repeatDelay&&(g.repeatDelay=wi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Jm(g),g.delay===0&&(x=!0)),(mr.instantAnimations||mr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Jm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=ef(g.keyframes,h);if(b!==void 0){as.update(()=>{g.onUpdate(b),g.onComplete()});return}}return h.isSync?new Vd(g):new V4(g)};function Jy(e){const n=[{},{}];return e==null||e.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Yp(e,n,i,a){if(typeof n=="function"){const[c,u]=Jy(a);n=n(i!==void 0?i:e.custom,c,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[c,u]=Jy(a);n=n(i!==void 0?i:e.custom,c,u)}return n}function Vr(e,n,i){const a=e.getProps();return Yp(a,n,i!==void 0?i:a.custom,e)}const t5=new Set(["width","height","top","left","right","bottom",...Il]),e1=30,tC=e=>!isNaN(parseFloat(e)),Uc={current:void 0};class nC{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=ii.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=ii.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=tC(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Np);const a=this.events[n].add(i);return n==="change"?()=>{a(),as.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Uc.current&&Uc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=ii.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>e1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,e1);return mb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function pr(e,n){return new nC(e,n)}const ep=e=>Array.isArray(e);function sC(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,pr(i))}function oC(e){return ep(e)?e[e.length-1]||0:e}function iC(e,n){const i=Vr(e,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=oC(u[d]);sC(e,d,h)}}const xo=e=>!!(e&&e.getVelocity);function aC(e){return!!(xo(e)&&e.add)}function tp(e,n){const i=e.getValue("willChange");if(aC(i))return i.add(n);if(!i&&mr.WillChange){const a=new mr.WillChange("auto");e.addValue("willChange",a),a.add(n)}}function Wp(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const rC="framerAppearId",n5="data-"+Wp(rC);function s5(e){return e.props[n5]}function lC({protectedKeys:e,needsAnimating:n},i){const a=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Fp(e,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=e.getDefaultTransition();u=u?e5(u,p):p;const y=u==null?void 0:u.reduceMotion;a&&(u=a);const g=[],x=c&&e.animationState&&e.animationState.getState()[c];for(const C in h){const j=e.getValue(C,(b=e.latestValues[C])!=null?b:null),T=h[C];if(T===void 0||x&&lC(x,C))continue;const E={delay:i,...Up(u||{},C)},N=j.get();if(N!==void 0&&!j.isAnimating()&&!Array.isArray(T)&&T===N&&!E.velocity){as.update(()=>j.set(T));continue}let H=!1;if(window.MotionHandoffAnimation){const X=s5(e);if(X){const W=window.MotionHandoffAnimation(X,C,as);W!==null&&(E.startTime=W,H=!0)}}tp(e,C);const L=y!=null?y:e.shouldReduceMotion;j.start(Vp(C,j,T,L&&t5.has(C)?{type:!1}:E,e,H));const A=j.animation;A&&g.push(A)}if(d){const C=()=>as.update(()=>{d&&iC(e,d)});g.length?Promise.all(g).then(C):C()}return g}function np(e,n,i={}){var p;const a=Vr(e,n,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Fp(e,a,i)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=c;return cC(e,n,y,g,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[y,g]=h==="beforeChildren"?[u,d]:[d,u];return y().then(()=>g())}else return Promise.all([u(),d(i.delay)])}function cC(e,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of e.variantChildren)p.notify("AnimationStart",n),h.push(np(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Zb(e.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function uC(e,n,i={}){e.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>np(e,u,i));a=Promise.all(c)}else if(typeof n=="string")a=np(e,n,i);else{const c=typeof n=="function"?Vr(e,n,i.custom):n;a=Promise.all(Fp(e,c,i))}return a.then(()=>{e.notify("AnimationComplete",n)})}const dC={test:e=>e==="auto",parse:e=>e},o5=e=>n=>n.test(e),i5=[$l,Lt,ga,ur,IS,$S,dC],t1=e=>i5.find(o5(e));function fC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||fb(e):!0}const hC=new Set(["brightness","contrast","saturate","opacity"]);function mC(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=i.match(Lp)||[];if(!a)return e;const c=i.replace(a,"");let u=hC.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const pC=/\b([a-z-]*)\(.*?\)/gu,sp={...ia,getAnimatableNone:e=>{const n=e.match(pC);return n?n.map(mC).join(" "):e}},op={...ia,getAnimatableNone:e=>{const n=ia.parse(e);return ia.createTransformer(e)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},n1={...$l,transform:Math.round},_C={rotate:ur,rotateX:ur,rotateY:ur,rotateZ:ur,scale:rd,scaleX:rd,scaleY:rd,scaleZ:rd,skew:ur,skewX:ur,skewY:ur,distance:Lt,translateX:Lt,translateY:Lt,translateZ:Lt,x:Lt,y:Lt,z:Lt,perspective:Lt,transformPerspective:Lt,opacity:Fc,originX:Hy,originY:Hy,originZ:Lt},Xp={borderWidth:Lt,borderTopWidth:Lt,borderRightWidth:Lt,borderBottomWidth:Lt,borderLeftWidth:Lt,borderRadius:Lt,borderTopLeftRadius:Lt,borderTopRightRadius:Lt,borderBottomRightRadius:Lt,borderBottomLeftRadius:Lt,width:Lt,maxWidth:Lt,height:Lt,maxHeight:Lt,top:Lt,right:Lt,bottom:Lt,left:Lt,inset:Lt,insetBlock:Lt,insetBlockStart:Lt,insetBlockEnd:Lt,insetInline:Lt,insetInlineStart:Lt,insetInlineEnd:Lt,padding:Lt,paddingTop:Lt,paddingRight:Lt,paddingBottom:Lt,paddingLeft:Lt,paddingBlock:Lt,paddingBlockStart:Lt,paddingBlockEnd:Lt,paddingInline:Lt,paddingInlineStart:Lt,paddingInlineEnd:Lt,margin:Lt,marginTop:Lt,marginRight:Lt,marginBottom:Lt,marginLeft:Lt,marginBlock:Lt,marginBlockStart:Lt,marginBlockEnd:Lt,marginInline:Lt,marginInlineStart:Lt,marginInlineEnd:Lt,fontSize:Lt,backgroundPositionX:Lt,backgroundPositionY:Lt,..._C,zIndex:n1,fillOpacity:Fc,strokeOpacity:Fc,numOctaves:n1},gC={...Xp,color:lo,backgroundColor:lo,outlineColor:lo,fill:lo,stroke:lo,borderColor:lo,borderTopColor:lo,borderRightColor:lo,borderBottomColor:lo,borderLeftColor:lo,filter:sp,WebkitFilter:sp,mask:op,WebkitMask:op},a5=e=>gC[e],yC=new Set([sp,op]);function r5(e,n){let i=a5(e);return yC.has(i)||(i=ia),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const xC=new Set(["auto","none","0"]);function bC(e,n,i){let a=0,c;for(;a<e.length&&!c;){const u=e[a];typeof u=="string"&&!xC.has(u)&&Bl(u).values.length&&(c=e[a]),a++}if(c&&i)for(const u of n)e[u]=r5(i,c)}class vC extends Pp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<n.length;g++){let x=n[g];if(typeof x=="string"&&(x=x.trim(),Bp(x))){const b=Jb(x,i.current);b!==void 0&&(n[g]=b),g===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!t5.has(a)||n.length!==2)return;const[c,u]=n,d=t1(c),h=t1(u),p=Py(c),y=Py(u);if(p!==y&&hr[a]){this.needsMeasurement=!0;return}if(d!==h)if(qy(d)&&qy(h))for(let g=0;g<n.length;g++){const x=n[g];typeof x=="string"&&(n[g]=parseFloat(x))}else hr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||fC(n[c]))&&a.push(c);a.length&&bC(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=hr[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=hr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,y])=>{n.getValue(p).set(y)}),this.resolveNoneKeyframes()}}function Gp(e,n,i){var a;if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[e])!=null?a:c.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e).filter(c=>c!=null)}const l5=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function Nd(e){return db(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:qp}=Mb(queueMicrotask,!1),na={x:!1,y:!1};function c5(){return na.x||na.y}function wC(e){return e==="x"||e==="y"?na[e]?null:(na[e]=!0,()=>{na[e]=!1}):na.x||na.y?null:(na.x=na.y=!0,()=>{na.x=na.y=!1})}function u5(e,n){const i=Gp(e),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function SC(e){return!(e.pointerType==="touch"||c5())}function CC(e,n,i={}){const[a,c,u]=u5(e,i);return a.forEach(d=>{let h=!1,p=!1,y;const g=()=>{d.removeEventListener("pointerleave",j)},x=E=>{y&&(y(E),y=void 0),g()},b=E=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(E))},C=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},j=E=>{if(E.pointerType!=="touch"){if(h){p=!0;return}x(E)}},T=E=>{if(!SC(E))return;p=!1;const N=n(d,E);typeof N=="function"&&(y=N,d.addEventListener("pointerleave",j,c))};d.addEventListener("pointerenter",T,c),d.addEventListener("pointerdown",C,c)}),u}const d5=(e,n)=>n?e===n?!0:d5(e,n.parentElement):!1,Kp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,kC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jC(e){return kC.has(e.tagName)||e.isContentEditable===!0}const MC=new Set(["INPUT","SELECT","TEXTAREA"]);function EC(e){return MC.has(e.tagName)||e.isContentEditable===!0}const Dd=new WeakSet;function s1(e){return n=>{n.key==="Enter"&&e(n)}}function cm(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const TC=(e,n)=>{const i=e.currentTarget;if(!i)return;const a=s1(()=>{if(Dd.has(i))return;cm(i,"down");const c=s1(()=>{cm(i,"up")}),u=()=>cm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function o1(e){return Kp(e)&&!c5()}const i1=new WeakSet;function AC(e,n,i={}){const[a,c,u]=u5(e,i),d=h=>{const p=h.currentTarget;if(!o1(h)||i1.has(h))return;Dd.add(p),i.stopPropagation&&i1.add(h);const y=n(p,h),g=(C,j)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),Dd.has(p)&&Dd.delete(p),o1(C)&&typeof y=="function"&&y(C,{success:j})},x=C=>{g(C,p===window||p===document||i.useGlobalTarget||d5(p,C.target))},b=C=>{g(C,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),Nd(h)&&(h.addEventListener("focus",y=>TC(y,c)),!jC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function tf(e){return db(e)&&"ownerSVGElement"in e}const Rd=new WeakMap;let dr;const f5=(e,n,i)=>(a,c)=>c&&c[0]?c[0][e+"Size"]:tf(a)&&"getBBox"in a?a.getBBox()[n]:a[i],NC=f5("inline","width","offsetWidth"),DC=f5("block","height","offsetHeight");function RC({target:e,borderBoxSize:n}){var i;(i=Rd.get(e))==null||i.forEach(a=>{a(e,{get width(){return NC(e,n)},get height(){return DC(e,n)}})})}function BC(e){e.forEach(RC)}function LC(){typeof ResizeObserver>"u"||(dr=new ResizeObserver(BC))}function OC(e,n){dr||LC();const i=Gp(e);return i.forEach(a=>{let c=Rd.get(a);c||(c=new Set,Rd.set(a,c)),c.add(n),dr==null||dr.observe(a)}),()=>{i.forEach(a=>{const c=Rd.get(a);c==null||c.delete(n),c!=null&&c.size||dr==null||dr.unobserve(a)})}}const Bd=new Set;let El;function zC(){El=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Bd.forEach(n=>n(e))},window.addEventListener("resize",El)}function $C(e){return Bd.add(e),El||zC(),()=>{Bd.delete(e),!Bd.size&&typeof El=="function"&&(window.removeEventListener("resize",El),El=void 0)}}function a1(e,n){return typeof e=="function"?$C(e):OC(e,n)}function h5(e){return tf(e)&&e.tagName==="svg"}function IC(...e){const n=!Array.isArray(e[0]),i=n?0:-1,a=e[0+i],c=e[1+i],u=e[2+i],d=e[3+i],h=Ib(c,u,d);return n?h(a):h}const PC=[...i5,lo,ia],HC=e=>PC.find(o5(e)),r1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Tl=()=>({x:r1(),y:r1()}),l1=()=>({min:0,max:0}),ro=()=>({x:l1(),y:l1()}),Gc=new WeakMap;function nf(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function qc(e){return typeof e=="string"||Array.isArray(e)}const Qp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zp=["initial",...Qp];function sf(e){return nf(e.animate)||Zp.some(n=>qc(e[n]))}function m5(e){return!!(sf(e)||e.variants)}function UC(e,n,i){for(const a in n){const c=n[a],u=i[a];if(xo(c))e.addValue(a,c);else if(xo(u))e.addValue(a,pr(c,{owner:e}));else if(u!==c)if(e.hasValue(a)){const d=e.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=e.getStaticValue(a);e.addValue(a,pr(d!==void 0?d:c,{owner:e}))}}for(const a in i)n[a]===void 0&&e.removeValue(a);return n}const ip={current:null},p5={current:!1},VC=typeof window<"u";function YC(){if(p5.current=!0,!!VC)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>ip.current=e.matches;e.addEventListener("change",n),n()}else ip.current=!1}const c1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Yd={};function _5(e){Yd=e}function WC(){return Yd}class g5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Pp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=ii.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,as.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=i.initial?{...y}:{},this.renderState=g,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=sf(i),this.isVariantNode=m5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const C in b){const j=b[C];y[C]!==void 0&&xo(j)&&j.set(y[C])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Gc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(p5.current||YC(),this.shouldReduceMotion=ip.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Pa(this.notifyUpdate),Pa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Qb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:y,duration:g}=i.accelerate,x=new qb({element:this.current,name:n,keyframes:h,times:p,ease:y,duration:wi(g)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=Pl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&as.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Yd){const i=Yd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ro()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<c1.length;a++){const c=c1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=UC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=pr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(ub(a)||fb(a))?a=parseFloat(a):!HC(a)&&ia.test(i)&&(a=r5(n,i)),this.setBaseTarget(n,xo(a)?a.get():a)),xo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Yp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!xo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Np),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){qp.render(this.render)}}class y5 extends g5{constructor(){super(...arguments),this.KeyframeResolver=vC}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;xo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class _r{constructor(n){this.isMounted=!1,this.node=n}update(){}}function x5({top:e,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:e,max:a}}}function FC({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function XC(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),a=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function um(e){return e===void 0||e===1}function ap({scale:e,scaleX:n,scaleY:i}){return!um(e)||!um(n)||!um(i)}function zr(e){return ap(e)||b5(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function b5(e){return u1(e.x)||u1(e.y)}function u1(e){return e&&e!=="0%"}function Wd(e,n,i){const a=e-i,c=n*a;return i+c}function d1(e,n,i,a,c){return c!==void 0&&(e=Wd(e,c,a)),Wd(e,i,a)+n}function rp(e,n=0,i=1,a,c){e.min=d1(e.min,n,i,a,c),e.max=d1(e.max,n,i,a,c)}function v5(e,{x:n,y:i}){rp(e.x,n.translate,n.scale,n.originPoint),rp(e.y,i.translate,i.scale,i.originPoint)}const f1=.999999999999,h1=1.0000000000001;function GC(e,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:y}=u.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(_a(e.x,-u.scroll.offset.x),_a(e.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,v5(e,d)),a&&zr(u.latestValues)&&Ld(e,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<h1&&n.x>f1&&(n.x=1),n.y<h1&&n.y>f1&&(n.y=1)}function _a(e,n){e.min+=n,e.max+=n}function m1(e,n,i,a,c=.5){const u=ps(e.min,e.max,c);rp(e,n,i,u,a)}function p1(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function Ld(e,n,i){const a=i!=null?i:e;m1(e.x,p1(n.x,a.x),n.scaleX,n.scale,n.originX),m1(e.y,p1(n.y,a.y),n.scaleY,n.scale,n.originY)}function w5(e,n){return x5(XC(e.getBoundingClientRect(),n))}function qC(e,n,i){const a=w5(e,i),{scroll:c}=n;return c&&(_a(a.x,c.offset.x),_a(a.y,c.offset.y)),a}const KC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},QC=Il.length;function ZC(e,n,i){let a="",c=!0;for(let u=0;u<QC;u++){const d=Il[u],h=e[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const y=parseFloat(h);p=d.startsWith("scale")?y===1:y===0}if(!p||i){const y=l5(h,Xp[d]);if(!p){c=!1;const g=KC[d]||d;a+=`${g}(${y}) `}i&&(n[d]=y)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Jp(e,n,i){const{style:a,vars:c,transformOrigin:u}=e;let d=!1,h=!1;for(const p in n){const y=n[p];if(Pl.has(p)){d=!0;continue}else if(Tb(p)){c[p]=y;continue}else{const g=l5(y,Xp[p]);p.startsWith("origin")?(h=!0,u[p]=g):a[p]=g}}if(n.transform||(d||i?a.transform=ZC(n,e.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:y="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${y} ${g}`}}function S5(e,{style:n,vars:i},a,c){const u=e.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function _1(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const jc={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(Lt.test(e))e=parseFloat(e);else return e;const i=_1(e,n.target.x),a=_1(e,n.target.y);return`${i}% ${a}%`}},JC={correct:(e,{treeScale:n,projectionDelta:i})=>{const a=e,c=ia.parse(e);if(c.length>5)return a;const u=ia.createTransformer(e),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const y=ps(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),u(c)}},lp={borderRadius:{...jc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jc,borderTopRightRadius:jc,borderBottomLeftRadius:jc,borderBottomRightRadius:jc,boxShadow:JC};function C5(e,{layout:n,layoutId:i}){return Pl.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!lp[e]||e==="opacity")}function e_(e,n,i){var d;const a=e.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(xo(a[h])||c&&xo(c[h])||C5(h,e)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function e6(e){return window.getComputedStyle(e)}class k5 extends y5{constructor(){super(...arguments),this.type="html",this.renderInstance=S5}readValueFromInstance(n,i){var a;if(Pl.has(i))return(a=this.projection)!=null&&a.isProjecting?Gm(i):v4(n,i);{const c=e6(n),u=(Tb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return w5(n,i)}build(n,i,a){Jp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return e_(n,i,a)}}function t6(e,n){return e in n}class n6 extends g5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(t6(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return ro()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const s6={offset:"stroke-dashoffset",array:"stroke-dasharray"},o6={offset:"strokeDashoffset",array:"strokeDasharray"};function i6(e,n,i=1,a=0,c=!0){e.pathLength=1;const u=c?s6:o6;e[u.offset]=`${-a}`,e[u.array]=`${n} ${i}`}const a6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function j5(e,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,y,g){var C,j;if(Jp(e,h,y),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:b}=e;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(C=x.transformOrigin)!=null?C:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(j=g==null?void 0:g.transformBox)!=null?j:"fill-box",delete x.transformBox);for(const T of a6)x[T]!==void 0&&(b[T]=x[T],delete x[T]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&i6(x,c,u,d,!1)}const M5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),E5=e=>typeof e=="string"&&e.toLowerCase()==="svg";function r6(e,n,i,a){S5(e,n,void 0,a);for(const c in n.attrs)e.setAttribute(M5.has(c)?c:Wp(c),n.attrs[c])}function T5(e,n,i){const a=e_(e,n,i);for(const c in e)if(xo(e[c])||xo(n[c])){const u=Il.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=e[c]}return a}class A5 extends y5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ro}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Pl.has(i)){const a=a5(i);return a&&a.default||0}return i=M5.has(i)?i:Wp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return T5(n,i,a)}build(n,i,a){j5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){r6(n,i,a,c)}mount(n){this.isSVGTag=E5(n.tagName),super.mount(n)}}const l6=Zp.length;function N5(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?N5(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<l6;i++){const a=Zp[i],c=e.props[a];(qc(c)||c===!1)&&(n[a]=c)}return n}function D5(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(n[a]!==e[a])return!1;return!0}const c6=[...Qp].reverse(),u6=Qp.length;function d6(e){return n=>Promise.all(n.map(({animation:i,options:a})=>uC(e,i,a)))}function f6(e){let n=d6(e),i=g1(),a=!0,c=!1;const u=y=>(g,x)=>{var C;const b=Vr(e,x,y==="exit"?(C=e.presenceContext)==null?void 0:C.custom:void 0);if(b){const{transition:j,transitionEnd:T,...E}=b;g={...g,...E,...T}}return g};function d(y){n=y(e)}function h(y){const{props:g}=e,x=N5(e.parent)||{},b=[],C=new Set;let j={},T=1/0;for(let N=0;N<u6;N++){const H=c6[N],L=i[H],A=g[H]!==void 0?g[H]:x[H],X=qc(A),W=H===y?L.isActive:null;W===!1&&(T=N);let Y=A===x[H]&&A!==g[H]&&X;if(Y&&(a||c)&&e.manuallyAnimateOnMount&&(Y=!1),L.protectedKeys={...j},!L.isActive&&W===null||!A&&!L.prevProp||nf(A)||typeof A=="boolean")continue;if(H==="exit"&&L.isActive&&W!==!0){L.prevResolvedValues&&(j={...j,...L.prevResolvedValues});continue}const q=h6(L.prevProp,A);let ue=q||H===y&&L.isActive&&!Y&&X||N>T&&X,fe=!1;const _e=Array.isArray(A)?A:[A];let De=_e.reduce(u(H),{});W===!1&&(De={});const{prevResolvedValues:qe={}}=L,se={...qe,...De},he=P=>{ue=!0,C.has(P)&&(fe=!0,C.delete(P)),L.needsAnimating[P]=!0;const me=e.getValue(P);me&&(me.liveStyle=!1)};for(const P in se){const me=De[P],be=qe[P];if(j.hasOwnProperty(P))continue;let $=!1;ep(me)&&ep(be)?$=!D5(me,be):$=me!==be,$?me!=null?he(P):C.add(P):me!==void 0&&C.has(P)?he(P):L.protectedKeys[P]=!0}L.prevProp=A,L.prevResolvedValues=De,L.isActive&&(j={...j,...De}),(a||c)&&e.blockInitialAnimation&&(ue=!1);const O=Y&&q;ue&&(!O||fe)&&b.push(..._e.map(P=>{const me={type:H};if(typeof P=="string"&&(a||c)&&!O&&e.manuallyAnimateOnMount&&e.parent){const{parent:be}=e,$=Vr(be,P);if(be.enteringChildren&&$){const{delayChildren:ie}=$.transition||{};me.delay=Zb(be.enteringChildren,e,ie)}}return{animation:P,options:me}}))}if(C.size){const N={};if(typeof g.initial!="boolean"){const H=Vr(e,Array.isArray(g.initial)?g.initial[0]:g.initial);H&&H.transition&&(N.transition=H.transition)}C.forEach(H=>{const L=e.getBaseTarget(H),A=e.getValue(H);A&&(A.liveStyle=!0),N[H]=L!=null?L:null}),b.push({animation:N})}let E=!!b.length;return a&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(E=!1),a=!1,c=!1,E?n(b):Promise.resolve()}function p(y,g){var b;if(i[y].isActive===g)return Promise.resolve();(b=e.variantChildren)==null||b.forEach(C=>{var j;return(j=C.animationState)==null?void 0:j.setActive(y,g)}),i[y].isActive=g;const x=h(y);for(const C in i)i[C].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=g1(),c=!0}}}function h6(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!D5(n,e):!1}function Rr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function g1(){return{animate:Rr(!0),whileInView:Rr(),whileHover:Rr(),whileTap:Rr(),whileDrag:Rr(),whileFocus:Rr(),exit:Rr()}}function cp(e,n){e.min=n.min,e.max=n.max}function ta(e,n){cp(e.x,n.x),cp(e.y,n.y)}function y1(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const R5=1e-4,m6=1-R5,p6=1+R5,B5=.01,_6=0-B5,g6=0+B5;function ai(e){return e.max-e.min}function y6(e,n,i){return Math.abs(e-n)<=i}function x1(e,n,i,a=.5){e.origin=a,e.originPoint=ps(n.min,n.max,e.origin),e.scale=ai(i)/ai(n),e.translate=ps(i.min,i.max,e.origin)-e.originPoint,(e.scale>=m6&&e.scale<=p6||isNaN(e.scale))&&(e.scale=1),(e.translate>=_6&&e.translate<=g6||isNaN(e.translate))&&(e.translate=0)}function Vc(e,n,i,a){x1(e.x,n.x,i.x,a?a.originX:void 0),x1(e.y,n.y,i.y,a?a.originY:void 0)}function b1(e,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;e.min=c+n.min,e.max=e.min+ai(n)}function x6(e,n,i,a){b1(e.x,n.x,i.x,a==null?void 0:a.x),b1(e.y,n.y,i.y,a==null?void 0:a.y)}function v1(e,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;e.min=n.min-c,e.max=e.min+ai(n)}function Fd(e,n,i,a){v1(e.x,n.x,i.x,a==null?void 0:a.x),v1(e.y,n.y,i.y,a==null?void 0:a.y)}function w1(e,n,i,a,c){return e-=n,e=Wd(e,1/i,a),c!==void 0&&(e=Wd(e,1/c,a)),e}function b6(e,n=0,i=1,a=.5,c,u=e,d=e){if(ga.test(n)&&(n=parseFloat(n),n=ps(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ps(u.min,u.max,a);e===u&&(h-=n),e.min=w1(e.min,n,i,h,c),e.max=w1(e.max,n,i,h,c)}function S1(e,n,[i,a,c],u,d){b6(e,n[i],n[a],n[c],n.scale,u,d)}const v6=["x","scaleX","originX"],w6=["y","scaleY","originY"];function C1(e,n,i,a){S1(e.x,n,v6,i?i.x:void 0,a?a.x:void 0),S1(e.y,n,w6,i?i.y:void 0,a?a.y:void 0)}function k1(e){return e.translate===0&&e.scale===1}function L5(e){return k1(e.x)&&k1(e.y)}function j1(e,n){return e.min===n.min&&e.max===n.max}function S6(e,n){return j1(e.x,n.x)&&j1(e.y,n.y)}function M1(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function O5(e,n){return M1(e.x,n.x)&&M1(e.y,n.y)}function E1(e){return ai(e.x)/ai(e.y)}function T1(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function pa(e){return[e("x"),e("y")]}function C6(e,n,i){let a="";const c=e.x.translate/n.x,u=e.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:y,rotate:g,rotateX:x,rotateY:b,skewX:C,skewY:j}=i;y&&(a=`perspective(${y}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),C&&(a+=`skewX(${C}deg) `),j&&(a+=`skewY(${j}deg) `)}const h=e.x.scale*n.x,p=e.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const z5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],k6=z5.length,A1=e=>typeof e=="string"?parseFloat(e):e,N1=e=>typeof e=="number"||Lt.test(e);function j6(e,n,i,a,c,u){var d,h,p,y;c?(e.opacity=ps(0,(d=i.opacity)!=null?d:1,M6(a)),e.opacityExit=ps((h=n.opacity)!=null?h:1,0,E6(a))):u&&(e.opacity=ps((p=n.opacity)!=null?p:1,(y=i.opacity)!=null?y:1,a));for(let g=0;g<k6;g++){const x=z5[g];let b=D1(n,x),C=D1(i,x);if(b===void 0&&C===void 0)continue;b||(b=0),C||(C=0),b===0||C===0||N1(b)===N1(C)?(e[x]=Math.max(ps(A1(b),A1(C),a),0),(ga.test(C)||ga.test(b))&&(e[x]+="%")):e[x]=C}(n.rotate||i.rotate)&&(e.rotate=ps(n.rotate||0,i.rotate||0,a))}function D1(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const M6=$5(0,.5,vb),E6=$5(.5,.95,qi);function $5(e,n,i){return a=>a<e?0:a>n?1:i(Rl(e,n,a))}function I5(e,n,i){const a=xo(e)?e:pr(e);return a.start(Vp("",a,n,i)),a.animation}function Kc(e,n,i,a={passive:!0}){return e.addEventListener(n,i,a),()=>e.removeEventListener(n,i)}const T6=(e,n)=>e.depth-n.depth;class A6{constructor(){this.children=[],this.isDirty=!1}add(n){Tp(this.children,n),this.isDirty=!0}remove(n){Dl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(T6),this.isDirty=!1,this.children.forEach(n)}}function N6(e,n){const i=ii.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Pa(a),e(u-n))};return as.setup(a,!0),()=>Pa(a)}function Od(e){return xo(e)?e.get():e}class D6{constructor(){this.members=[]}add(n){Tp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(Dl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(Dl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const zd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},dm=["","X","Y","Z"],R6=1e3;let B6=0;function fm(e,n,i,a){const{latestValues:c}=n;c[e]&&(i[e]=c[e],n.setStaticValue(e,0),a&&(a[e]=0))}function P5(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=s5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",as,!(c||u))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&P5(a)}function H5({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=B6++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(z6),this.nodes.forEach(V6),this.nodes.forEach(Y6),this.nodes.forEach($6)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new A6)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Np),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=tf(d)&&!h5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),e){let g,x=0;const b=()=>this.root.updateBlockedByResize=!1;as.read(()=>{x=window.innerWidth}),e(d,()=>{const C=window.innerWidth;C!==x&&(x=C,this.root.updateBlockedByResize=!0,g&&g(),g=N6(b,250),zd.hasAnimatedSinceResize&&(zd.hasAnimatedSinceResize=!1,this.nodes.forEach(L1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&y&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||y.getDefaultTransition()||q6,{onLayoutAnimationStart:T,onLayoutAnimationComplete:E}=y.getProps(),N=!this.targetLayout||!O5(this.targetLayout,C),H=!x&&b;if(this.options.layoutRoot||this.resumeFrom||H||x&&(N||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Up(j,"layout"),onPlay:T,onComplete:E};(y.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(g,H)}else x||L1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(W6),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&P5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(P6),this.nodes.forEach(R1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(B1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(H6),this.nodes.forEach(U6),this.nodes.forEach(L6),this.nodes.forEach(O6)):this.nodes.forEach(B1),this.clearAllSnapshots();const h=ii.now();Ho.delta=ya(0,1e3/60,h-Ho.timestamp),Ho.timestamp=h,Ho.isProcessing=!0,sm.update.process(Ho),sm.preRender.process(Ho),sm.render.process(Ho),Ho.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(I6),this.sharedNodes.forEach(F6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,as.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){as.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ai(this.snapshot.measuredBox.x)&&!ai(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ro()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!L5(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(h||zr(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),K6(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var y;const{visualElement:d}=this.options;if(!d)return ro();const h=d.measureViewportBox();if(!(((y=this.scroll)==null?void 0:y.wasRoot)||this.path.some(Q6))){const{scroll:g}=this.root;g&&(_a(h.x,g.offset.x),_a(h.y,g.offset.y))}return h}removeElementScroll(d){var p;const h=ro();if(ta(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&ta(h,d),_a(h.x,x.offset.x),_a(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var g,x;const y=p||ro();ta(y,d);for(let b=0;b<this.path.length;b++){const C=this.path[b];!h&&C.options.layoutScroll&&C.scroll&&C!==C.root&&(_a(y.x,-C.scroll.offset.x),_a(y.y,-C.scroll.offset.y)),zr(C.latestValues)&&Ld(y,C.latestValues,(g=C.layout)==null?void 0:g.layoutBox)}return zr(this.latestValues)&&Ld(y,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),y}removeTransform(d){var p;const h=ro();ta(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!zr(g.latestValues))continue;let x;g.instance&&(ap(g.latestValues)&&g.updateSnapshot(),x=ro(),ta(x,g.measurePageBox())),C1(h,g.latestValues,(p=g.snapshot)==null?void 0:p.layoutBox,x)}return zr(this.latestValues)&&C1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ho.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var C;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!this.layout||!(g||x))return;this.resolvedRelativeTargetAt=Ho.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ro(),this.targetWithTransforms=ro()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),x6(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):ta(this.target,this.layout.layoutBox),v5(this.target,this.targetDelta)):ta(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ap(this.parent.latestValues)||b5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ro(),this.relativeTargetOrigin=ro(),Fd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),ta(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var j;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(j=this.parent)!=null&&j.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ho.timestamp&&(p=!1),p)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;ta(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;GC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ro());const{target:C}=d;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(y1(this.prevProjectionDelta.x,this.projectionDelta.x),y1(this.prevProjectionDelta.y,this.projectionDelta.y)),Vc(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!T1(this.projectionDelta.x,this.prevProjectionDelta.x)||!T1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Tl(),this.projectionDelta=Tl(),this.projectionDeltaWithTransform=Tl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,y=p?p.latestValues:{},g={...this.latestValues},x=Tl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=ro(),C=p?p.source:void 0,j=this.layout?this.layout.source:void 0,T=C!==j,E=this.getStack(),N=!E||E.members.length<=1,H=!!(T&&!N&&this.options.crossfade===!0&&!this.path.some(G6));this.animationProgress=0;let L;this.mixTargetDelta=A=>{const X=A/1e3;O1(x.x,d.x,X),O1(x.y,d.y,X),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),X6(this.relativeTarget,this.relativeTargetOrigin,b,X),L&&S6(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=ro()),ta(L,this.relativeTarget)),T&&(this.animationValues=g,j6(g,y,this.latestValues,X,H,N)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=X},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,y;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(y=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||y.stop(),this.pendingAnimation&&(Pa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=as.update(()=>{zd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=pr(0)),this.motionValue.jump(0,!1),this.currentAnimation=I5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(R6),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:y,latestValues:g}=d;if(!(!h||!p||!y)){if(this!==d&&this.layout&&y&&U5(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||ro();const x=ai(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=ai(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}ta(h,p),Ld(h,g),Vc(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new D6),this.sharedNodes.get(d).add(h);const y=h.options.initialPromotionConfig;h.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const y={};p.z&&fm("z",d,y,this.animationValues);for(let g=0;g<dm.length;g++)fm(`rotate${dm[g]}`,d,y,this.animationValues),fm(`skew${dm[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,h){var j,T;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Od(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Od(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!zr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let x=C6(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),d.transform=x;const{x:b,y:C}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${C.origin*100}% 0`,y.animationValues?d.opacity=y===this?(T=(j=g.opacity)!=null?j:this.latestValues.opacity)!=null?T:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in lp){if(g[E]===void 0)continue;const{correct:N,applyTo:H,isCSSVariable:L}=lp[E],A=x==="none"?g[E]:N(g[E],y);if(H){const X=H.length;for(let W=0;W<X;W++)d[H[W]]=A}else L?this.options.visualElement.renderState.vars[E]=A:d[E]=A}this.options.layoutId&&(d.pointerEvents=y===this?Od(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(R1),this.root.sharedNodes.clear()}}}function L6(e){e.updateLayout()}function O6(e){var i;const n=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=e.layout,{animationType:u}=e.options,d=n.source!==e.layout.source;if(u==="size")pa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],C=ai(b);b.min=a[x].min,b.max=b.min+C});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";cp(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else U5(u,n.layoutBox,a)&&pa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],C=ai(a[x]);b.max=b.min+C,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+C)});const h=Tl();Vc(h,a,n.layoutBox);const p=Tl();d?Vc(p,e.applyTransform(c,!0),n.measuredBox):Vc(p,a,n.layoutBox);const y=!L5(h);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:C}=x;if(b&&C){const j=e.options.layoutAnchor||void 0,T=ro();Fd(T,n.layoutBox,b.layoutBox,j);const E=ro();Fd(E,a,C.layoutBox,j),O5(T,E)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=E,e.relativeTargetOrigin=T,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function z6(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function $6(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function I6(e){e.clearSnapshot()}function R1(e){e.clearMeasurements()}function P6(e){e.isLayoutDirty=!0,e.updateLayout()}function B1(e){e.isLayoutDirty=!1}function H6(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function U6(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function L1(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function V6(e){e.resolveTargetDelta()}function Y6(e){e.calcProjection()}function W6(e){e.resetSkewAndRotation()}function F6(e){e.removeLeadSnapshot()}function O1(e,n,i){e.translate=ps(n.translate,0,i),e.scale=ps(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function z1(e,n,i,a){e.min=ps(n.min,i.min,a),e.max=ps(n.max,i.max,a)}function X6(e,n,i,a){z1(e.x,n.x,i.x,a),z1(e.y,n.y,i.y,a)}function G6(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const q6={duration:.45,ease:[.4,0,.1,1]},$1=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),I1=$1("applewebkit/")&&!$1("chrome/")?Math.round:qi;function P1(e){e.min=I1(e.min),e.max=I1(e.max)}function K6(e){P1(e.x),P1(e.y)}function U5(e,n,i){return e==="position"||e==="preserve-aspect"&&!y6(E1(n),E1(i),.2)}function Q6(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const Z6=H5({attachResizeListener:(e,n)=>Kc(e,"resize",n),measureScroll:()=>{var e,n;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),hm={current:void 0},V5=H5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!hm.current){const e=new Z6({});e.mount(window),e.setOptions({layoutScroll:!0}),hm.current=e}return hm.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),of=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function H1(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function J6(...e){return n=>{let i=!1;const a=e.map(c=>{const u=H1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():H1(e[c],null)}}}}function ek(...e){return _.useCallback(J6(...e),e)}class tk extends _.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(Nd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=Nd(a)&&a.offsetWidth||0,u=Nd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function nk({children:e,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,C;const d=_.useId(),h=_.useRef(null),p=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=_.useContext(of),g=(C=(b=e.props)==null?void 0:b.ref)!=null?C:e==null?void 0:e.ref,x=ek(h,g);return _.useInsertionEffect(()=>{const{width:j,height:T,top:E,left:N,right:H,bottom:L}=p.current;if(n||u===!1||!h.current||!j||!T)return;const A=i==="left"?`left: ${N}`:`right: ${H}`,X=a==="bottom"?`bottom: ${L}`:`top: ${E}`;h.current.dataset.motionPopId=d;const W=document.createElement("style");y&&(W.nonce=y);const Y=c!=null?c:document.head;return Y.appendChild(W),W.sheet&&W.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${j}px !important;
            height: ${T}px !important;
            ${A}px !important;
            ${X}px !important;
          }
        `),()=>{var q;(q=h.current)==null||q.removeAttribute("data-motion-pop-id"),Y.contains(W)&&Y.removeChild(W)}},[n]),l.jsx(tk,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?e:_.cloneElement(e,{ref:x})})}const sk=({children:e,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:y})=>{const g=Zc(ok),x=_.useId();let b=!0,C=_.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:j=>{g.set(j,!0);for(const T of g.values())if(!T)return;a&&a()},register:j=>(g.set(j,!1),()=>g.delete(j))}),[i,g,a]);return u&&b&&(C={...C}),_.useMemo(()=>{g.forEach((j,T)=>g.set(T,!1))},[i]),_.useEffect(()=>{!i&&!g.size&&a&&a()},[i]),e=l.jsx(nk,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:y,children:e}),l.jsx(Jd.Provider,{value:C,children:e})};function ok(){return new Map}function Y5(e=!0){const n=_.useContext(Jd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=_.useId();_.useEffect(()=>{if(e)return c(u)},[e]);const d=_.useCallback(()=>e&&a&&a(u),[u,a,e]);return!i&&a?[!1,d]:[!0]}const ld=e=>e.key||"";function U1(e){const n=[];return _.Children.forEach(e,i=>{_.isValidElement(i)&&n.push(i)}),n}const af=({children:e,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:y})=>{const[g,x]=Y5(d),b=_.useMemo(()=>U1(e),[e]),C=d&&!g?[]:b.map(ld),j=_.useRef(!0),T=_.useRef(b),E=Zc(()=>new Map),N=_.useRef(new Set),[H,L]=_.useState(b),[A,X]=_.useState(b);Ep(()=>{j.current=!1,T.current=b;for(let q=0;q<A.length;q++){const ue=ld(A[q]);C.includes(ue)?(E.delete(ue),N.current.delete(ue)):E.get(ue)!==!0&&E.set(ue,!1)}},[A,C.length,C.join("-")]);const W=[];if(b!==H){let q=[...b];for(let ue=0;ue<A.length;ue++){const fe=A[ue],_e=ld(fe);C.includes(_e)||(q.splice(ue,0,fe),W.push(fe))}return u==="wait"&&W.length&&(q=W),X(U1(q)),L(b),null}const{forceRender:Y}=_.useContext(Mp);return l.jsx(l.Fragment,{children:A.map(q=>{const ue=ld(q),fe=d&&!g?!1:b===A||C.includes(ue),_e=()=>{if(N.current.has(ue))return;if(E.has(ue))N.current.add(ue),E.set(ue,!0);else return;let De=!0;E.forEach(qe=>{qe||(De=!1)}),De&&(Y==null||Y(),X(T.current),d&&(x==null||x()),a&&a())};return l.jsx(sk,{isPresent:fe,initial:!j.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:y,onExitComplete:fe?void 0:_e,anchorX:h,anchorY:p,children:q},ue)})})},W5=_.createContext({strict:!1}),V1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Y1=!1;function ik(){if(Y1)return;const e={};for(const n in V1)e[n]={isEnabled:i=>V1[n].some(a=>!!i[a])};_5(e),Y1=!0}function F5(){return ik(),WC()}function ak(e){const n=F5();for(const i in e)n[i]={...n[i],...e[i]};_5(n)}const rk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Xd(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||rk.has(e)}let X5=e=>!Xd(e);function lk(e){typeof e=="function"&&(X5=n=>n.startsWith("on")?!Xd(n):e(n))}try{lk(require("@emotion/is-prop-valid").default)}catch{}function ck(e,n,i){const a={};for(const c in e)c==="values"&&typeof e.values=="object"||xo(e[c])||(X5(c)||i===!0&&Xd(c)||!n&&!Xd(c)||e.draggable&&c.startsWith("onDrag"))&&(a[c]=e[c]);return a}const rf=_.createContext({});function uk(e,n){if(sf(e)){const{initial:i,animate:a}=e;return{initial:i===!1||qc(i)?i:void 0,animate:qc(a)?a:void 0}}return e.inherit!==!1?n:{}}function dk(e){const{initial:n,animate:i}=uk(e,_.useContext(rf));return _.useMemo(()=>({initial:n,animate:i}),[W1(n),W1(i)])}function W1(e){return Array.isArray(e)?e.join(" "):e}const t_=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function G5(e,n,i){for(const a in n)!xo(n[a])&&!C5(a,i)&&(e[a]=n[a])}function fk({transformTemplate:e},n){return _.useMemo(()=>{const i=t_();return Jp(i,n,e),Object.assign({},i.vars,i.style)},[n])}function hk(e,n){const i=e.style||{},a={};return G5(a,i,e),Object.assign(a,fk(e,n)),a}function mk(e,n){const i={},a=hk(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const q5=()=>({...t_(),attrs:{}});function pk(e,n,i,a){const c=_.useMemo(()=>{const u=q5();return j5(u,n,E5(a),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};G5(u,e.style,e),c.style={...u,...c.style}}return c}const _k=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function n_(e){return typeof e!="string"||e.includes("-")?!1:!!(_k.indexOf(e)>-1||/[A-Z]/u.test(e))}function gk(e,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:n_(e))?pk:mk)(n,a,c,e),y=ck(n,typeof e=="string",u),g=e!==_.Fragment?{...y,...p,ref:i}:{},{children:x}=n,b=_.useMemo(()=>xo(x)?x.get():x,[x]);return _.createElement(e,{...g,children:b})}function yk({scrapeMotionValuesFromProps:e,createRenderState:n},i,a,c){return{latestValues:xk(i,a,c,e),renderState:n()}}function xk(e,n,i,a){const c={},u=a(e,{});for(const b in u)c[b]=Od(u[b]);let{initial:d,animate:h}=e;const p=sf(e),y=m5(e);n&&y&&!p&&e.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let g=i?i.initial===!1:!1;g=g||d===!1;const x=g?h:d;if(x&&typeof x!="boolean"&&!nf(x)){const b=Array.isArray(x)?x:[x];for(let C=0;C<b.length;C++){const j=Yp(e,b[C]);if(j){const{transitionEnd:T,transition:E,...N}=j;for(const H in N){let L=N[H];if(Array.isArray(L)){const A=g?L.length-1:0;L=L[A]}L!==null&&(c[H]=L)}for(const H in T)c[H]=T[H]}}}return c}const K5=e=>(n,i)=>{const a=_.useContext(rf),c=_.useContext(Jd),u=()=>yk(e,n,a,c);return i?u():Zc(u)},bk=K5({scrapeMotionValuesFromProps:e_,createRenderState:t_}),vk=K5({scrapeMotionValuesFromProps:T5,createRenderState:q5}),wk=Symbol.for("motionComponentSymbol");function Sk(e,n,i){const a=_.useRef(i);_.useInsertionEffect(()=>{a.current=i});const c=_.useRef(null);return _.useCallback(u=>{var h;u&&((h=e.onMount)==null||h.call(e,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const Q5=_.createContext({});function jl(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ck(e,n,i,a,c,u){var L,A;const{visualElement:d}=_.useContext(rf),h=_.useContext(W5),p=_.useContext(Jd),y=_.useContext(of),g=y.reducedMotion,x=y.skipAnimations,b=_.useRef(null),C=_.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(e,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g,skipAnimations:x,isSVG:u}),C.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const j=b.current,T=_.useContext(Q5);j&&!j.projection&&c&&(j.type==="html"||j.type==="svg")&&kk(b.current,i,c,T);const E=_.useRef(!1);_.useInsertionEffect(()=>{j&&E.current&&j.update(i,p)});const N=i[n5],H=_.useRef(!!N&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,N))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,N)));return Ep(()=>{C.current=!0,j&&(E.current=!0,window.MotionIsMounted=!0,j.updateFeatures(),j.scheduleRenderMicrotask(),H.current&&j.animationState&&j.animationState.animateChanges())}),_.useEffect(()=>{j&&(!H.current&&j.animationState&&j.animationState.animateChanges(),H.current&&(queueMicrotask(()=>{var X;(X=window.MotionHandoffMarkAsComplete)==null||X.call(window,N)}),H.current=!1),j.enteringChildren=void 0)}),j}function kk(e,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:y,layoutAnchor:g,layoutCrossfade:x}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:Z5(e.parent)),e.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&jl(h),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:y,layoutAnchor:g})}function Z5(e){if(e)return e.options.allowProjection!==!1?e.projection:Z5(e.parent)}function mm(e,{forwardMotionProps:n=!1,type:i}={},a,c){var y,g;a&&ak(a);const u=i?i==="svg":n_(e),d=u?vk:bk;function h(x,b){let C;const j={..._.useContext(of),...x,layoutId:jk(x)},{isStatic:T}=j,E=dk(x),N=d(x,T);if(!T&&typeof window<"u"){Mk();const H=Ek(j);C=H.MeasureLayout,E.visualElement=Ck(e,N,j,c,H.ProjectionNode,u)}return l.jsxs(rf.Provider,{value:E,children:[C&&E.visualElement?l.jsx(C,{visualElement:E.visualElement,...j}):null,gk(e,x,Sk(N,E.visualElement,b),N,T,n,u)]})}h.displayName=`motion.${typeof e=="string"?e:`create(${(g=(y=e.displayName)!=null?y:e.name)!=null?g:""})`}`;const p=_.forwardRef(h);return p[wk]=e,p}function jk({layoutId:e}){const n=_.useContext(Mp).id;return n&&e!==void 0?n+"-"+e:e}function Mk(e,n){_.useContext(W5).strict}function Ek(e){const n=F5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(e)||a!=null&&a.isEnabled(e)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Tk(e,n){if(typeof Proxy>"u")return mm;const i=new Map,a=(u,d)=>mm(u,d,e,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,mm(d,void 0,e,n)),i.get(d))})}const Ak=(e,n)=>{var a;return((a=n.isSVG)!=null?a:n_(e))?new A5(n):new k5(n,{allowProjection:e!==_.Fragment})};class Nk extends _r{constructor(n){super(n),n.animationState||(n.animationState=f6(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();nf(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Dk=0;class Rk extends _r{constructor(){super(...arguments),this.id=Dk++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Vr(this.node,d,h);if(p){const{transition:y,transitionEnd:g,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Bk={animation:{Feature:Nk},exit:{Feature:Rk}};function nu(e){return{point:{x:e.pageX,y:e.pageY}}}const Lk=e=>n=>Kp(n)&&e(n,nu(n));function Yc(e,n,i,a){return Kc(e,n,Lk(i),a)}const J5=({current:e})=>e?e.ownerDocument.defaultView:null,F1=(e,n)=>Math.abs(e-n);function Ok(e,n){const i=F1(e.x,n.x),a=F1(e.y,n.y);return Math.sqrt(i**2+a**2)}const X1=new Set(["auto","scroll"]);class e2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=C=>{this.handleScroll(C.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=cd(this.lastRawMoveEventInfo,this.transformPagePoint));const C=pm(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,T=Ok(C.offset,{x:0,y:0})>=this.distanceThreshold;if(!j&&!T)return;const{point:E}=C,{timestamp:N}=Ho;this.history.push({...E,timestamp:N});const{onStart:H,onMove:L}=this.handlers;j||(H&&H(this.lastMoveEvent,C),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,C)},this.handlePointerMove=(C,j)=>{this.lastMoveEvent=C,this.lastRawMoveEventInfo=j,this.lastMoveEventInfo=cd(j,this.transformPagePoint),as.update(this.updatePoint,!0)},this.handlePointerUp=(C,j)=>{this.end();const{onEnd:T,onSessionEnd:E,resumeAnimation:N}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const H=pm(C.type==="pointercancel"?this.lastMoveEventInfo:cd(j,this.transformPagePoint),this.history);this.startEvent&&T&&T(C,H),E&&E(C,H)},!Kp(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=nu(n),y=cd(p,this.transformPagePoint),{point:g}=y,{timestamp:x}=Ho;this.history=[{...g,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,pm(y,this.history)),this.removeListeners=Jc(Yc(this.contextWindow,"pointermove",this.handlePointerMove),Yc(this.contextWindow,"pointerup",this.handlePointerUp),Yc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(X1.has(a.overflowX)||X1.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),as.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Pa(this.updatePoint)}}function cd(e,n){return n?{point:n(e.point)}:e}function G1(e,n){return{x:e.x-n.x,y:e.y-n.y}}function pm({point:e},n){return{point:e,delta:G1(e,t2(n)),offset:G1(e,zk(n)),velocity:$k(n,.1)}}function zk(e){return e[0]}function t2(e){return e[e.length-1]}function $k(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const c=t2(e);for(;i>=0&&(a=e[i],!(c.timestamp-a.timestamp>wi(n)));)i--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&c.timestamp-a.timestamp>wi(n)*2&&(a=e[1]);const u=Gi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Ik(e,{min:n,max:i},a){return n!==void 0&&e<n?e=a?ps(n,e,a.min):Math.max(e,n):i!==void 0&&e>i&&(e=a?ps(i,e,a.max):Math.min(e,i)),e}function q1(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function Pk(e,{top:n,left:i,bottom:a,right:c}){return{x:q1(e.x,i,c),y:q1(e.y,n,a)}}function K1(e,n){let i=n.min-e.min,a=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function Hk(e,n){return{x:K1(e.x,n.x),y:K1(e.y,n.y)}}function Uk(e,n){let i=.5;const a=ai(e),c=ai(n);return c>a?i=Rl(n.min,n.max-a,e.min):a>c&&(i=Rl(e.min,e.max-c,n.min)),ya(0,1,i)}function Vk(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const up=.35;function Yk(e=up){return e===!1?e=0:e===!0&&(e=up),{x:Q1(e,"left","right"),y:Q1(e,"top","bottom")}}function Q1(e,n,i){return{min:Z1(e,n),max:Z1(e,i)}}function Z1(e,n){return typeof e=="number"?e:e[n]||0}const Wk=new WeakMap;class Fk{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ro(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(nu(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:C,dragPropagation:j,onDragStart:T}=this.getProps();if(C&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wC(C),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),pa(N=>{let H=this.getAxisMotionValue(N).get()||0;if(ga.test(H)){const{projection:L}=this.visualElement;if(L&&L.layout){const A=L.layout.layoutBox[N];A&&(H=ai(A)*(parseFloat(H)/100))}}this.originPoint[N]=H}),T&&as.update(()=>T(x,b),!1,!0),tp(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:C,dragDirectionLock:j,onDirectionLock:T,onDrag:E}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:N}=b;if(j&&this.currentDirection===null){this.currentDirection=Gk(N),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",b.point,N),this.updateAxis("y",b.point,N),this.visualElement.render(),E&&as.update(()=>E(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new e2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:J5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&as.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!ud(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Ik(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&jl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Pk(a.layoutBox,n):this.constraints=!1,this.elastic=Yk(i),c!==this.constraints&&!jl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&pa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Vk(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!jl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=qC(a,c.root,this.visualElement.getTransformPagePoint());let d=Hk(c.layout.layoutBox,u);if(i){const h=i(FC(d));this.hasMutatedConstraints=!!h,h&&(d=x5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},y=pa(g=>{if(!ud(g,i,this.currentDirection))return;let x=p&&p[g]||{};(d===!0||d===g)&&(x={min:0,max:0});const b=c?200:1e6,C=c?40:1e7,j={type:"inertia",velocity:a?n[g]:0,bounceStiffness:b,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,j)});return Promise.all(y).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return tp(this.visualElement,n),a.start(Vp(n,a,0,i,this.visualElement,!1))}stopAnimation(){pa(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){pa(i=>{const{drag:a}=this.getProps();if(!ud(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ps(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!jl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};pa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Uk({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),pa(d=>{if(!ud(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];h.set(ps(p,y,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Wk.set(this.visualElement,this);const n=this.visualElement.current,i=Yc(n,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps(),b=y.target,C=b!==n&&EC(b);g&&x&&!C&&this.start(y)});let a;const c=()=>{const{dragConstraints:y}=this.getProps();jl(y)&&y.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Xk(n,y.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),as.read(c);const h=Kc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(pa(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=up,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function J1(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function Xk(e,n,i){const a=a1(e,J1(i)),c=a1(n,J1(i));return()=>{a(),c()}}function ud(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function Gk(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class qk extends _r{constructor(n){super(n),this.removeGroupControls=qi,this.removeListeners=qi,this.controls=new Fk(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const _m=e=>(n,i)=>{e&&as.update(()=>e(n,i),!1,!0)};class Kk extends _r{constructor(){super(...arguments),this.removePointerDownListener=qi}onPointerDown(n){this.session=new e2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:J5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:_m(n),onStart:_m(i),onMove:_m(a),onEnd:(u,d)=>{delete this.session,c&&as.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=Yc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let gm=!1;class Qk extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),gm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),zd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),gm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||as.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),qp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;gm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function n2(e){const[n,i]=Y5(),a=_.useContext(Mp);return l.jsx(Qk,{...e,layoutGroup:a,switchLayoutGroup:_.useContext(Q5),isPresent:n,safeToRemove:i})}const Zk={pan:{Feature:Kk},drag:{Feature:qk,ProjectionNode:V5,MeasureLayout:n2}};function ex(e,n,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&as.postRender(()=>u(n,nu(n)))}class Jk extends _r{mount(){const{current:n}=this.node;n&&(this.unmount=CC(n,(i,a)=>(ex(this.node,a,"Start"),c=>ex(this.node,c,"End"))))}unmount(){}}class e3 extends _r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Jc(Kc(this.node.current,"focus",()=>this.onFocus()),Kc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function tx(e,n,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&as.postRender(()=>u(n,nu(n)))}class t3 extends _r{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=AC(n,(c,u)=>(tx(this.node,u,"Start"),(d,{success:h})=>tx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const dp=new WeakMap,ym=new WeakMap,n3=e=>{const n=dp.get(e.target);n&&n(e)},s3=e=>{e.forEach(n3)};function o3({root:e,...n}){const i=e||document;ym.has(i)||ym.set(i,{});const a=ym.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(s3,{root:e,...n})),a[c]}function i3(e,n,i){const a=o3(n);return dp.set(e,i),a.observe(e),()=>{dp.delete(e),a.unobserve(e)}}const a3={some:0,all:1};class r3 extends _r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:a3[c]},h=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),C=g?x:b;C&&C(y)};this.stopObserver=i3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(l3(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function l3({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const c3={inView:{Feature:r3},tap:{Feature:t3},focus:{Feature:e3},hover:{Feature:Jk}},u3={layout:{ProjectionNode:V5,MeasureLayout:n2}},d3={...Bk,...c3,...Zk,...u3},ri=Tk(d3,Ak);function fp(e){const n=Zc(()=>pr(e)),{isStatic:i}=_.useContext(of);if(i){const[,a]=_.useState(e);_.useEffect(()=>n.on("change",a),[])}return n}function s2(e,n){const i=fp(n()),a=()=>i.set(n());return a(),Ep(()=>{const c=()=>as.preRender(a,!1,!0),u=e.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Pa(a)}}),i}function f3(e){Uc.current=[],e();const n=s2(Uc.current,e);return Uc.current=void 0,n}function dd(e,n,i,a){if(typeof e=="function")return f3(e);const u=typeof n=="function"?n:IC(n,i,a),d=Array.isArray(e)?nx(e,u):nx([e],([p])=>u(p)),h=Array.isArray(e)?void 0:e.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function nx(e,n){const i=Zc(()=>[]);return s2(e,()=>{i.length=0;const a=e.length;for(let c=0;c<a;c++)i[c]=e[c].get();return n(i)})}function s_(e){return typeof e=="object"&&!Array.isArray(e)}function o2(e,n,i,a){return e==null?[]:typeof e=="string"&&s_(n)?Gp(e,i,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(c=>c!=null):[e]}function h3(e,n,i){return e*(n+1)}function sx(e,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,e+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:e}function m3(e,n,i){for(let a=0;a<e.length;a++){const c=e[a];c.at>n&&c.at<i&&(Dl(e,c),a--)}}function p3(e,n,i,a,c,u){m3(e,c,u);for(let d=0;d<n.length;d++)e.push({value:n[d],at:ps(c,u,a[d]),easing:kb(i,d)})}function _3(e,n){for(let i=0;i<e.length;i++)e[i]=e[i]/(n+1)}function g3(e,n){return e.at===n.at?e.value===null?1:n.value===null?-1:0:e.at-n.at}const y3="easeInOut";function x3(e,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},y=new Map;let g=0,x=0,b=0;for(let C=0;C<e.length;C++){const j=e[C];if(typeof j=="string"){y.set(j,x);continue}else if(!Array.isArray(j)){y.set(j.name,sx(x,j.at,g,y));continue}let[T,E,N={}]=j;N.at!==void 0&&(x=sx(x,N.at,g,y));let H=0;const L=(A,X,W,Y=0,q=0)=>{const ue=b3(A),{delay:fe=0,times:_e=Hb(ue),type:De=n.type||"keyframes",repeat:qe,repeatType:se,repeatDelay:he=0,...O}=X;let{ease:oe=n.ease||"easeOut",duration:P}=X;const me=typeof fe=="function"?fe(Y,q):fe,be=ue.length,$=Hp(De)?De:c==null?void 0:c[De||"keyframes"];if(be<=2&&$){let Te=100;if(be===2&&S3(ue)){const et=ue[1]-ue[0];Te=Math.abs(et)}const pe={...n,...O};P!==void 0&&(pe.duration=wi(P));const Oe=zb(pe,Te,$);oe=Oe.ease,P=Oe.duration}P!=null||(P=u);const ie=x+me;_e.length===1&&_e[0]===0&&(_e[1]=1);const ee=_e.length-ue.length;if(ee>0&&Pb(_e,ee),ue.length===1&&ue.unshift(null),qe){P=h3(P,qe);const Te=[...ue],pe=[..._e];oe=Array.isArray(oe)?[...oe]:[oe];const Oe=[...oe];for(let et=0;et<qe;et++){ue.push(...Te);for(let We=0;We<Te.length;We++)_e.push(pe[We]+(et+1)),oe.push(We===0?"linear":kb(Oe,We-1))}_3(_e,qe)}const ve=ie+P;p3(W,ue,oe,_e,ie,ve),H=Math.max(me+P,H),b=Math.max(ve,b)};if(xo(T)){const A=ox(T,h);L(E,N,ix("default",A))}else{const A=o2(T,E,a,p),X=A.length;for(let W=0;W<X;W++){E=E,N=N;const Y=A[W],q=ox(Y,h);for(const ue in E)L(E[ue],v3(N,ue),ix(ue,q),W,X)}}g=x,x+=H}return h.forEach((C,j)=>{for(const T in C){const E=C[T];E.sort(g3);const N=[],H=[],L=[];for(let Y=0;Y<E.length;Y++){const{at:q,value:ue,easing:fe}=E[Y];N.push(ue),H.push(Rl(0,b,q)),L.push(fe||"easeOut")}H[0]!==0&&(H.unshift(0),N.unshift(N[0]),L.unshift(y3)),H[H.length-1]!==1&&(H.push(1),N.push(null)),d.has(j)||d.set(j,{keyframes:{},transition:{}});const A=d.get(j);A.keyframes[T]=N;const{type:X,...W}=n;A.transition[T]={...W,duration:b,ease:L,times:H,...i}}}),d}function ox(e,n){return!n.has(e)&&n.set(e,{}),n.get(e)}function ix(e,n){return n[e]||(n[e]=[]),n[e]}function b3(e){return Array.isArray(e)?e:[e]}function v3(e,n){return e&&e[n]?{...e,...e[n]}:{...e}}const w3=e=>typeof e=="number",S3=e=>e.every(w3);function C3(e){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=tf(e)&&!h5(e)?new A5(n):new k5(n);i.mount(e),Gc.set(e,i)}function k3(e){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new n6(n);i.mount(e),Gc.set(e,i)}function j3(e,n){return xo(e)||typeof e=="number"||typeof e=="string"&&!s_(n)}function i2(e,n,i,a){const c=[];if(j3(e,n))c.push(I5(e,s_(n)&&n.default||n,i&&(i.default||i)));else{if(e==null)return c;const u=o2(e,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],y=p instanceof Element?C3:k3;Gc.has(p)||y(p);const g=Gc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Fp(g,{...n,transition:x},{}))}}return c}function M3(e,n,i){const a=[],c=e.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=pr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return x3(c,n,i,{spring:Xc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...i2(p,d,h))}),a}function E3(e){return Array.isArray(e)&&e.some(Array.isArray)}function T3(e={}){const{scope:n,reduceMotion:i}=e;function a(c,u,d){let h=[],p;if(E3(c)){const{onComplete:g,...x}=u||{};typeof g=="function"&&(p=g),h=M3(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:g,...x}=d||{};typeof g=="function"&&(p=g),h=i2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const y=new W4(h);return p&&y.finished.then(p),n&&(n.animations.push(y),y.finished.then(()=>{Dl(n.animations,y)})),y}return a}const ax=T3(),Ia=(e,n)=>!e||!n?!1:e===n||e.startsWith(n)||n.startsWith(e);function rx(e,n){var a;const i=[...(a=e.childShas)!=null?a:[]];return i.includes(n)||i.push(n),{...e,childShas:i}}function A3(e,n,i,a,c,u){if(!i)return{directCommits:e,branchCommitPreviews:n};const d=e.map(p=>Ia(p.fullSha,i)||Ia(p.sha,i)?rx(p,a):p),h=Object.fromEntries(Object.entries(n).map(([p,y])=>[p,y.map(g=>(p===c||p===u)&&(Ia(g.fullSha,i)||Ia(g.sha,i))?rx(g,a):g)]));return{directCommits:d,branchCommitPreviews:h}}function N3(e,n,i,a){if(!e)return null;const c=d=>Ia(d,e);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(y=>c(y.fullSha)||c(y.sha)))return d;return null}function D3(e,n,i,a,c,u,d=!1){const h=e.baseSha,p=`STASH:${e.index}`,y=`Stash ${e.index+1}`,g=N3(h,i,a,u),x=(()=>{var W;if(!h)return null;const X=i.find(Y=>Ia(Y.fullSha,h)||Ia(Y.sha,h));if(X!=null&&X.date)return X.date;if(g&&!d){const Y=((W=a[g])!=null?W:[]).find(q=>Ia(q.fullSha,h)||Ia(q.sha,h));if(Y!=null&&Y.date)return Y.date}return null})(),b=x?new Date(x).getTime():Number.NaN,C=Date.now(),j=Number.isFinite(b)?Math.max(C,b+1+e.index):C+e.index,T=new Date(j).toISOString(),E=e.message.trim(),N={fullSha:p,sha:y,parentSha:h,clusterKey:null,childShas:[],message:E||y,author:"You",date:T,kind:"stash"},H=`Stash ${e.index+1}`,L={name:H,commitsAhead:1,commitsBehind:0,lastCommitDate:T,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:p,divergedFromSha:h!=null?h:void 0,parentBranch:g||u},A=A3(i,a,h,p,H,u);return{branches:[L,...n],directCommits:A.directCommits,branchCommitPreviews:{...A.branchCommitPreviews,[H]:[N]},branchUniqueAheadCounts:{...c,[H]:1}}}function a2(e,n,i,a,c,u,d=!1){const h=[...e].sort((y,g)=>y.index-g.index);let p={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const y of h)p=D3(y,p.branches,p.directCommits,p.branchCommitPreviews,p.branchUniqueAheadCounts,u,d);return p}function hp({branches:e,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:y,manuallyOpenedClumps:g=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:C=null,orientation:j="horizontal"}){var Y,q;const T=a2(y,e,i,u,h,c,(Y=p==null?void 0:p.hasUncommittedChanges)!=null?Y:!1);let E=T.branches,N=T.directCommits,H=T.branchCommitPreviews,L=T.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ue=p.headSha||p.parentSha||null,fe=(P,me)=>!P||!me?!1:P===me||P.startsWith(me)||me.startsWith(P),_e=p.branchName?E.find(P=>P.name===p.branchName):void 0,De=(()=>{var me;if(!ue)return null;const P=N.find(be=>fe(be.fullSha,ue)||fe(be.sha,ue));if(P!=null&&P.date)return P.date;if(_e){const be=((me=H[_e.name])!=null?me:[]).find($=>fe($.fullSha,ue)||fe($.sha,ue));if(be!=null&&be.date)return be.date}return null})(),qe=De?new Date(De).getTime():Number.NaN,se=Date.now(),he=Number.isFinite(qe)?Math.max(se,qe+1):se,O=new Date(he).toISOString(),oe={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ue,message:"Local uncommitted changes",author:"You",date:O,kind:"uncommitted"};_e?(E=E.map(P=>P.name===_e.name?{...P,commitsAhead:P.commitsAhead+1,unpushedCommits:P.unpushedCommits+1,lastCommitDate:O,headSha:"WORKING_TREE"}:P),H={...H,[_e.name]:[oe,...H[_e.name]||[]]},L={...L,[_e.name]:Math.max(0,(q=Object.prototype.hasOwnProperty.call(L,_e.name)?L[_e.name]:_e.commitsAhead)!=null?q:0)+1}):H={...H,[c]:[oe,...H[c]||[]]}}const A={...d};A[c]=null;const X=Cp(E,c,H,A),W=kp({lanes:X,branches:E,mergeNodes:n,directCommits:N,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:H,branchParentByName:A,branchUniqueAheadCounts:L,manuallyOpenedClumps:g,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:C,checkedOutRef:p,orientation:j});return{enrichedBranches:E,enrichedBranchCommitPreviews:H,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:N,sharedGridLayoutModel:W}}const lx="git-visualizer:expanded-projects",cx="git-visualizer:expanded-branches";function R3(e,n){var u;const i=new Map(e.map(d=>[d.name,d])),a=new Map;for(const d of e){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const y=(u=a.get(h))!=null?u:[];y.push(d.name),a.set(h,y)}const c=(d,h)=>{var g,x,b,C;const p=new Date((x=(g=i.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((C=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?C:0).getTime();return p-y};for(const[d,h]of a.entries())h.sort(c);return a}function B3(e,n,i){const a=new Map(e.map(d=>[d.name,d])),c=(d,h)=>{var g,x,b,C;const p=new Date((x=(g=a.get(d))==null?void 0:g.lastCommitDate)!=null?x:0).getTime(),y=new Date((C=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?C:0).getTime();return p-y},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return e.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function L3(e,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const y of d){const g=[...h,y];if(y===i.branchName){for(const x of g)c.add(x);return!0}if(u((p=n.get(y))!=null?p:[],g))return!0}return!1};return u(e,[]),c}function xm(e,n){if(!e||!n)return!1;const i=u=>{const d=u.replace(/\\/g,"/").replace(/\/+$/,""),h=new Set([d]);return d.startsWith("/private/")&&h.add(d.slice(8)),Array.from(h)},a=i(e),c=i(n);for(const u of a)for(const d of c)if(u===d||u.toLowerCase()===d.toLowerCase())return!0;return!1}function mp({branchName:e,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:x,showCommits:b,getMergeTargetLabels:C,sourceBranchName:j,clusterKeyByCommitId:T,unpushedCommitShasByBranch:E,isGridClusterOpen:N,onToggleGridCluster:H,onSelectCommit:L,onSelectBranch:A,isActiveProject:X}){var ve,Te;if(x.has(e))return null;const W=a.get(e);if(!W)return null;const Y=(ve=u.get(e))!=null?ve:[],q=Y.length>0,ue=_.useMemo(()=>{var pe;return[...(pe=c[e])!=null?pe:[]]},[c,e]),fe=b&&ue.length>0,_e=b,De=q||fe,qe=h.has(e),se=_e?ue:[],he=qe&&se.length>0,O=y===e||g!=null&&W.headSha===g,oe=new Set(x);oe.add(e);const P="top-[-0.45rem] h-5 w-[10px]",me="rounded-bl-[7px]",be="left-[0.65rem]",$=new Map,ie=[];for(const pe of Y){const Oe=d.get(pe);if(Oe){const et=se.findIndex(We=>Oi(We.fullSha,Oe)||Oi(We.sha,Oe));if(et>=0){const We=(Te=$.get(et))!=null?Te:[];We.push(pe),$.set(et,We);continue}}ie.push(pe)}const ee=_.useMemo(()=>{if(!b||se.length===0)return[];const pe=[];let Oe=[],et=null;const We=()=>{if(Oe.length===0)return;const mt=Oe[Oe.length-1],Nt=`sidebar-single-${e}-${mt.fullSha}`;pe.push({key:et!=null?et:Nt,commits:Oe,count:Oe.length,lead:mt}),Oe=[],et=null};return se.forEach(mt=>{var $t,_t;const Nt=($t=T.get(`${e}:${mt.fullSha}`))!=null?$t:null,Mt=((_t=E[e])!=null?_t:[]).includes(mt.fullSha),ut=`${Nt!=null?Nt:`sidebar-single-${e}-${mt.fullSha}`}:${Mt?"unpushed":"pushed"}`;if(Oe.length===0){Oe=[mt],et=ut;return}if(ut===et){Oe.push(mt);return}We(),Oe=[mt],et=ut}),We(),pe},[e,b,se,T,E]);return l.jsxs("li",{className:_n("relative flex flex-col gap-1",n>0?"pl-4":"pl-0",qe?"mb-2.5":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:_n("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",me,be,P)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:_n("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.25rem]",be)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("div",{className:_n("branch-row","group flex min-w-0 flex-1 items-center gap-0 rounded-md px-2 h-6 text-left text-sm font-normal transition-colors hover:bg-border/50","text-inherit hover:text-inherit"),"data-active-project":X?"true":"false","data-checked-out-branch":O?"true":"false",style:{color:X?O?"var(--checked)":"var(--foreground)":"var(--muted-foreground)"},role:"button",tabIndex:0,onClick:()=>{X?A==null||A(e):De?p(e):A==null||A(e)},onKeyDown:pe=>{(pe.key==="Enter"||pe.key===" ")&&(pe.preventDefault(),X?A==null||A(e):De?p(e):A==null||A(e))},children:[De?l.jsx("button",{type:"button","aria-label":`${qe?"Collapse":"Expand"} ${e}`,onPointerDown:pe=>{pe.preventDefault()},onClick:pe=>{pe.preventDefault(),pe.stopPropagation(),p(e)},className:"group/chevron branch-chevron flex h-6 w-6 -ml-2 shrink-0 items-center justify-center rounded-sm p-0 text-[10px] leading-none transition-colors hover:bg-border/50",children:l.jsx(gw,{"aria-hidden":"true",className:_n("h-3.5 w-3.5 shrink-0 transition-transform text-current",qe?"rotate-90":"")})}):null,l.jsx("span",{className:_n("branch-label min-w-0 flex-1 truncate font-normal whitespace-nowrap overflow-hidden","font-medium"),children:e})]})}),he?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ee.map(pe=>{const Oe=pe.count>1&&!N(pe.key);return(Oe?[pe.lead]:pe.commits).map(We=>{var Mt;const mt=se.findIndex(ut=>ut.fullSha===We.fullSha),Nt=C(We.fullSha,j!=null?j:e);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>L==null?void 0:L(We.fullSha),className:"min-w-0 flex-1 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",title:We.message,children:[l.jsx("span",{className:"block truncate",children:We.message}),Nt.length>0?l.jsx("span",{className:"mt-0 block space-y-2",children:Nt.map(ut=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:ut})]},`${We.fullSha}:${ut}`))}):null]}),pe.count>1&&We.fullSha===pe.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${e}:${pe.lead.fullSha}`,onClick:()=>H(pe.key,`${e}:${pe.lead.fullSha}`),className:_n("shrink-0 rounded-md px-2 h-6 text-left text-xs font-normal leading-4 text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground",Oe?"":"min-w-[2ch] text-center"),children:Oe?`+${Math.max(1,pe.count-1)}`:"−"}):null]}),(Mt=$.get(mt))!=null&&Mt.length?l.jsx("ul",{className:"relative space-y-1",children:$.get(mt).map((ut,$t,_t)=>l.jsx(mp,{branchName:ut,depth:n+1,isLast:$t===_t.length-1&&ie.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:oe,showCommits:b,getMergeTargetLabels:C,sourceBranchName:ut,clusterKeyByCommitId:T,unpushedCommitShasByBranch:E,isGridClusterOpen:N,onToggleGridCluster:H,onSelectCommit:L,onSelectBranch:A,isActiveProject:X},ut))}):null]},`${e}:${We.fullSha}`)})})}):null,q&&qe&&ie.length>0?l.jsx("ul",{className:"relative space-y-1",children:ie.map((pe,Oe)=>l.jsx(mp,{branchName:pe,depth:n+1,isLast:Oe===ie.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:y,checkedOutHeadSha:g,ancestors:oe,showCommits:b,getMergeTargetLabels:C,sourceBranchName:pe,clusterKeyByCommitId:T,unpushedCommitShasByBranch:E,isGridClusterOpen:N,onToggleGridCluster:H,onSelectCommit:L,onSelectBranch:A,isActiveProject:X},pe))}):null]})}function O3({open:e}){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-4 w-4 shrink-0 transition-opacity",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.7031 19H5.97457C4.96341 19 4.11131 18.2453 3.9892 17.2415L2.77269 7.24152C2.62773 6.04996 3.5577 5 4.75805 5H7C7.64911 5 8.28071 5.21053 8.8 5.6L9.2 5.9C9.71929 6.28947 10.3509 6.5 11 6.5H16.2369C17.2445 6.5 18.0947 7.24955 18.2211 8.2492L18.4938 10.4062",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M5.21532 12.0419C5.42789 11.1385 6.23405 10.5 7.16215 10.5H19.8105C20.7133 10.5 21.38 11.3419 21.1733 12.2207L19.9409 17.4581C19.7284 18.3615 18.9222 19 17.9941 19H6.10333C4.81363 19 3.8611 17.7973 4.1565 16.5419L5.21532 12.0419Z",stroke:"currentColor",strokeWidth:"1.5"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 7C4 5.89543 4.89543 5 6 5H9C9.64911 5 10.2807 5.21053 10.8 5.6L11.2 5.9C11.7193 6.28947 12.3509 6.5 13 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 10.5L12.4211 10.5L20 10.5",stroke:"currentColor",strokeWidth:"1.5"})]})})}function z3({projects:e,activeProjectPath:n,onSelectProject:i,onAddProject:a,onRemoveProject:c,onRevealProjectInFinder:u,onReorderProjects:d,projectLoading:h=!1,projectError:p=null,checkedOutRef:y,manuallyOpenedClumpsByProject:g={},manuallyClosedClumpsByProject:x={},manuallyOpenedClumps:b,manuallyClosedClumps:C,setManuallyOpenedClumps:j,setManuallyClosedClumps:T,gridLayoutModel:E,onSelectCommit:N,onSelectBranch:H,showCommits:L,className:A,style:X,collapsed:W=!1}){var Ye,Ne;const Y=_.useRef(null),q=_.useRef(null),[ue,fe]=_.useState(()=>{if(typeof window>"u")return new Set;try{const xe=window.localStorage.getItem(lx);if(xe){const ot=JSON.parse(xe);if(Array.isArray(ot)){const Xe=new Set;for(const st of ot)typeof st=="string"&&Xe.add(st);return Xe}}}catch{}return new Set}),[_e,De]=_.useState({}),[qe,se]=_.useState(()=>new Set),[he,O]=_.useState(()=>new Set),[oe,P]=_.useState(null),me=b!=null?b:qe,be=C!=null?C:he,$=j!=null?j:se,ie=T!=null?T:O,[ee,ve]=_.useState(null),[Te,pe]=_.useState(null),[Oe,et]=_.useState(null),[We,mt]=_.useState(null),[Nt,Mt]=_.useState(null),[ut,$t]=_.useState(null),[_t,Gt]=_.useState(null),Jt=_.useRef(new Map),Z=_.useRef(!1),Re=_.useRef(null),dt=_.useRef(null),rt=xe=>{try{window.localStorage.setItem(lx,JSON.stringify(Array.from(xe)))}catch{}},gt=xe=>{try{const ot=Object.fromEntries(Object.entries(xe).map(([Xe,st])=>[Xe,Array.from(st)]));window.localStorage.setItem(cx,JSON.stringify(ot))}catch{}};_.useEffect(()=>{rt(ue)},[ue]),_.useEffect(()=>{try{const xe=window.localStorage.getItem(cx);if(!xe)return;const ot=JSON.parse(xe);if(!ot||typeof ot!="object")return;const Xe={};for(const[st,Be]of Object.entries(ot)){if(!Array.isArray(Be))continue;const tt=new Set;for(const wt of Be)typeof wt=="string"&&tt.add(wt);Xe[st]=tt}De(Xe)}catch{}},[]),_.useEffect(()=>{gt(_e)},[_e]);const Ue=e,vt=_.useMemo(()=>{if(!We)return Ue;const xe=Ue.find(Be=>Be.path===We);if(!xe)return Ue;const ot=Ue.filter(Be=>Be.path!==We);if(Nt==null)return ot;const Xe=[...ot],st=Math.max(0,Math.min(Nt,Xe.length));return Xe.splice(st,0,xe),Xe},[Nt,We,Ue]),yt=_.useCallback(xe=>{d==null||d(xe)},[d]),Et=_.useCallback(()=>{et(null),mt(null),Mt(null),$t(null)},[]);_.useEffect(()=>{if(!Oe)return;const xe=Xe=>{const st=Re.current;!st||!st.active||Math.abs(Xe.clientX-st.startX)<=4&&Math.abs(Xe.clientY-st.startY)<=4||dt.current==null&&(dt.current=window.requestAnimationFrame(()=>{var Ze,Bt;dt.current=null;const Be=Re.current;if(!Be||!Be.active)return;(Math.abs(Xe.clientX-Be.startX)>4||Math.abs(Xe.clientY-Be.startY)>4)&&(Be.moved=!0,mt(Be.path)),$t({x:Xe.clientX-Be.offsetX,y:Xe.clientY-Be.offsetY,width:Be.width});const wt=Array.from((Bt=(Ze=q.current)==null?void 0:Ze.querySelectorAll("[data-project-path]"))!=null?Bt:[]).filter(kt=>kt.dataset.projectPath&&kt.dataset.projectPath!==Be.path);let Ct=wt.length;if(wt.length>0)for(let kt=0;kt<wt.length;kt+=1){const pt=wt[kt].getBoundingClientRect(),cn=pt.top+pt.height/2;if(Xe.clientY<cn){Ct=kt;break}}Mt(Ct)}))},ot=()=>{const Xe=Re.current;if(Re.current=null,dt.current!=null&&(window.cancelAnimationFrame(dt.current),dt.current=null),!Xe){Et();return}if(!Xe.moved){Et();return}Z.current=!0;const st=Ue.map(Ze=>Ze.path);if(st.indexOf(Xe.path)<0){Et();return}const tt=Nt;if(tt==null){Et();return}const wt=st.filter(Ze=>Ze!==Xe.path),Ct=Math.max(0,Math.min(tt,wt.length));wt.splice(Ct,0,Xe.path),yt(wt),Et(),window.requestAnimationFrame(()=>{Z.current=!1,P(null)})};return window.addEventListener("pointermove",xe),window.addEventListener("pointerup",ot),window.addEventListener("pointercancel",ot),()=>{window.removeEventListener("pointermove",xe),window.removeEventListener("pointerup",ot),window.removeEventListener("pointercancel",ot)}},[Et,yt,Oe,Nt,Ue]);const Ke=_.useCallback((xe,ot)=>{if(xe.button!==0)return;const Xe=xe.currentTarget.getBoundingClientRect();Re.current={active:!0,path:ot,startX:xe.clientX,startY:xe.clientY,offsetX:xe.clientX-Xe.left,offsetY:xe.clientY-Xe.top,width:Xe.width,moved:!1},et(ot),mt(null),Mt(null),$t({x:xe.clientX-Xe.left,y:xe.clientY-Xe.top,width:Xe.width})},[]),it=(Ye=E==null?void 0:E.defaultCollapsedClumps)!=null?Ye:new Set,V=xe=>me.has(xe)||!it.has(xe)&&!be.has(xe),te=(xe,ot)=>{const Xe=Y.current,st=q.current;if(Xe&&st){const Be=`[data-clump-toggle-id="${ot}"]`,tt=Xe.querySelector(Be);if(tt){const wt=tt.getBoundingClientRect().top-st.getBoundingClientRect().top;pe({id:ot,topWithinScrollBody:wt})}else pe(null)}else pe(null);ve(ot),$(Be=>{const tt=new Set(Be),wt=V(xe);return ie(Ct=>{const Ze=new Set(Ct);return wt?(tt.delete(xe),Ze.add(xe)):(Ze.delete(xe),tt.add(xe)),Ze}),tt})};_.useLayoutEffect(()=>{if(!ee)return;const xe=Y.current,ot=q.current;if(!xe||!ot)return;const Xe=`[data-clump-toggle-id="${ee}"]`,st=xe.querySelector(Xe);if(st){if((Te==null?void 0:Te.id)===ee){const tt=st.getBoundingClientRect().top-ot.getBoundingClientRect().top-Te.topWithinScrollBody;Number.isFinite(tt)&&tt!==0&&(ot.scrollTop+=tt)}st.focus({preventScroll:!0}),ve(null),pe(null)}},[me,be,ee,Te]);const Se=(xe,ot)=>{De(Xe=>{var wt;const st=(wt=Xe[xe])!=null?wt:new Set,Be=new Set(st);Be.has(ot)?Be.delete(ot):Be.add(ot);const tt={...Xe,[xe]:Be};return gt(tt),tt})};_.useEffect(()=>{if(oe==null)return;const xe=()=>{const Xe=Jt.current.get(oe);if(!Xe)return;const st=Xe.getBoundingClientRect();Gt({top:st.bottom+8,right:Math.max(8,window.innerWidth-st.right)})};xe();const ot=()=>P(null);return window.addEventListener("pointerdown",ot),window.addEventListener("resize",xe),window.addEventListener("scroll",xe,!0),()=>{window.removeEventListener("pointerdown",ot),window.removeEventListener("resize",xe),window.removeEventListener("scroll",xe,!0)}},[oe]);const je=_.useMemo(()=>{var ot,Xe,st,Be,tt,wt,Ct,Ze,Bt,kt,pt,cn,ft,Pt,hn,Ot;const xe=new Map;for(const jt of e){const mn=xm(jt.path,n),rs=ue.has(jt.path);if(!mn&&!rs)continue;const en=hp({branches:jt.branches,mergeNodes:jt.mergeNodes,directCommits:jt.directCommits,unpushedDirectCommits:jt.unpushedDirectCommits,defaultBranch:jt.defaultBranch,branchCommitPreviews:jt.branchCommitPreviews,branchUniqueAheadCounts:jt.branchUniqueAheadCounts,checkedOutRef:jt.checkedOutRef,stashes:jt.stashes,manuallyOpenedClumps:(ot=g[jt.path])!=null?ot:new Set,manuallyClosedClumps:(Xe=x[jt.path])!=null?Xe:new Set}),gn=en.enrichedBranches.some(tn=>tn.name===jt.defaultBranch)?en.enrichedBranches:[{name:jt.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...en.enrichedBranches],nn=new Map(en.sharedGridLayoutModel.nodes.map(tn=>[tn.commit.visualId,tn.row])),zt={};for(const tn of en.sharedGridLayoutModel.allCommits){const kn=(st=zt[tn.branchName])!=null?st:[];kn.push({fullSha:tn.id,sha:tn.id.slice(0,7),parentSha:(Be=tn.parentSha)!=null?Be:null,message:tn.message,author:tn.author,date:tn.date,kind:(tt=tn.kind)!=null?tt:"commit"}),zt[tn.branchName]=kn}for(const tn of Object.keys(zt))zt[tn]=zt[tn].sort((kn,bn)=>{var ts,vo;const Fs=new Date(kn.date).getTime(),Bn=new Date(bn.date).getTime();if(Fs!==Bn)return Fs-Bn;const hs=(ts=nn.get(`${tn}:${kn.fullSha}`))!=null?ts:Number.MAX_SAFE_INTEGER,sn=(vo=nn.get(`${tn}:${bn.fullSha}`))!=null?vo:Number.MAX_SAFE_INTEGER;return hs!==sn?hs-sn:kn.fullSha.localeCompare(bn.fullSha)});const on=(wt=en.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?wt:new Map,Qe=(tn,kn)=>{const bn=on.get(kn);if(!bn)return[];for(const[Fs,Bn]of bn.entries())if(Oi(tn,Fs))return Array.from(Bn).sort();return[]},zn=R3(gn,jt.defaultBranch),$n=B3(gn,jt.defaultBranch,zn),Ds=new Map(gn.map(tn=>[tn.name,tn])),Un=new Map;for(const tn of gn){const kn=(Ze=(Ct=en.sharedGridLayoutModel.firstBranchCommitByName.get(tn.name))==null?void 0:Ct.parentSha)!=null?Ze:null,bn=kn!=null?kn:null;Un.set(tn.name,bn)}const bo=(Bt=en.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Bt:new Set,Ys=(kt=g[jt.path])!=null?kt:new Set,co=(pt=x[jt.path])!=null?pt:new Set,Ws=tn=>Ys.has(tn)||!bo.has(tn)&&!co.has(tn);xe.set(jt.path,{rootBranchNames:$n,branchByName:Ds,branchCommitPreviewsFromLayout:zt,childNamesByParent:zn,branchAnchorShaByName:Un,unpushedCommitShasByBranch:jt.unpushedCommitShasByBranch,checkedOutBranchName:(ft=(cn=jt.checkedOutRef)==null?void 0:cn.branchName)!=null?ft:null,checkedOutHeadSha:(hn=(Pt=jt.checkedOutRef)==null?void 0:Pt.headSha)!=null?hn:null,clusterKeyByCommitId:(Ot=en.sharedGridLayoutModel.clusterKeyByCommitId)!=null?Ot:new Map,getMergeTargetLabels:Qe,isGridClusterOpen:Ws})}return xe},[n,ue,x,g,e]),nt=(xe,ot={})=>{var pt,cn,ft,Pt,hn;const Xe=(pt=ot.ghostMode)!=null?pt:!1,st=(cn=ot.hideLive)!=null?cn:!1,Be=xm(xe.path,n),tt=ue.has(xe.path),wt=(ft=xe.treeLoaded)!=null?ft:xe.branches.length>0,Ct=je.get(xe.path),Ze=(Pt=_e[xe.path])!=null?Pt:Ct?L3(Ct.rootBranchNames,Ct.childNamesByParent,y,xe.defaultBranch):new Set,Bt=We===xe.path,kt=xm(xe.path,n);return l.jsxs(ri.div,{layout:"position",transition:{duration:.12,ease:"easeOut"},"data-project-path":xe.path,"data-active-project":kt?"true":"false",className:_n("project-row relative z-10 flex flex-col gap-1 transition-colors",tt&&Ct?"mb-2.5":""),children:[Nt!==null&&We!==xe.path&&((hn=vt[Nt])==null?void 0:hn.path)===xe.path?l.jsx("div",{className:"h-px","aria-hidden":"true",children:l.jsx("div",{className:"mx-1 h-px bg-foreground/60"})}):null,l.jsxs("div",{className:_n("relative z-0 px-1",st?"pointer-events-none opacity-0":""),children:[l.jsxs("div",{className:_n(Xe?"group flex w-full items-center gap-0 rounded-lg px-0 h-6":"group sticky top-0 z-20 flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 transition-all duration-100 ease-out hover:bg-border/50 cursor-grab active:cursor-grabbing",Bt&&!Xe?"opacity-0":""),onPointerDownCapture:Ot=>{if(Xe)return;const jt=Ot.target;jt!=null&&jt.closest('.window-no-drag, button, input, textarea, select, [contenteditable="true"]')||Ke(Ot,xe.path)},onClick:Ot=>{if(Xe||kt||We===xe.path||Z.current)return;const jt=Ot.target;jt!=null&&jt.closest('button, input, textarea, select, [contenteditable="true"]')||i(xe.path)},children:[l.jsx("button",{type:"button",onPointerDown:Ot=>Ot.stopPropagation(),onClick:Ot=>{Ot.preventDefault(),Ot.stopPropagation(),fe(jt=>{const mn=new Set(jt);return mn.has(xe.path)?mn.delete(xe.path):mn.add(xe.path),rt(mn),mn})},"aria-expanded":tt,"aria-label":`${tt?"Collapse":"Expand"} ${xe.name}`,className:_n("project-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-border/50",Xe?"pointer-events-none":""),style:{color:kt?"var(--foreground)":"var(--muted-foreground)"},children:l.jsx(O3,{open:tt})}),l.jsx("span",{className:_n("project-name min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors","font-normal"),style:{color:kt?"var(--foreground)":"var(--muted-foreground)"},children:xe.name}),l.jsxs("div",{className:"relative z-[130] shrink-0",children:[l.jsx("button",{type:"button",onPointerDown:Ot=>Ot.stopPropagation(),"aria-label":`Project actions for ${xe.name}`,"aria-expanded":oe===xe.path,ref:Ot=>{Jt.current.set(xe.path,Ot)},onClick:Ot=>{Ot.stopPropagation();const jt=Ot.currentTarget.getBoundingClientRect();Gt({top:jt.bottom+8,right:Math.max(8,window.innerWidth-jt.right)}),P(mn=>mn===xe.path?null:xe.path)},className:_n("pr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md opacity-0 hover:bg-border/50 group-hover:opacity-100 text-current",Xe?"pointer-events-none":""),children:l.jsx(vw,{className:"h-4 w-4 shrink-0"})}),oe===xe.path&&!Xe&&_t&&typeof document<"u"?zl.createPortal(l.jsxs("div",{role:"menu",className:"fixed z-[10000] inline-flex w-max flex-col overflow-hidden rounded-md border border-border bg-background p-1",style:{top:`${_t.top}px`,right:`${_t.right}px`},onPointerDownCapture:Ot=>Ot.stopPropagation(),onClick:Ot=>Ot.stopPropagation(),children:[l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Ot=>Ot.stopPropagation(),onClick:()=>{P(null),u(xe.path)},className:"flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",children:"Open in Finder"}),l.jsx("button",{type:"button",role:"menuitem",onPointerDown:Ot=>Ot.stopPropagation(),onClick:()=>{P(null),c(xe.path)},className:"project-menu-remove flex w-full items-center rounded-[2px] px-2 py-1.5 text-left text-xs font-medium",children:"Remove"})]}),document.body):null]})]}),tt?wt&&Ct?l.jsx("ul",{className:_n("relative z-0 space-y-1 pt-0",Xe?"opacity-70":""),children:Ct.rootBranchNames.map((Ot,jt)=>l.jsx(mp,{branchName:Ot,depth:0,isLast:jt===Ct.rootBranchNames.length-1,branchByName:Ct.branchByName,branchCommitPreviews:Ct.branchCommitPreviewsFromLayout,childNamesByParent:Ct.childNamesByParent,branchAnchorShaByName:Ct.branchAnchorShaByName,expandedBranchNames:Ze,onToggleBranch:mn=>Se(xe.path,mn),checkedOutBranchName:Ct.checkedOutBranchName,checkedOutHeadSha:Ct.checkedOutHeadSha,ancestors:new Set,showCommits:L,getMergeTargetLabels:Ct.getMergeTargetLabels,sourceBranchName:Ot,clusterKeyByCommitId:Ct.clusterKeyByCommitId,unpushedCommitShasByBranch:Ct.unpushedCommitShasByBranch,isGridClusterOpen:Ct.isGridClusterOpen,onToggleGridCluster:te,onSelectCommit:async mn=>{Be||await i(xe.path),N==null||N(mn)},onSelectBranch:async mn=>{Be||await i(xe.path),H==null||H(mn)},isActiveProject:kt},`${xe.path}:${Ot}`))}):l.jsx("p",{className:_n("px-2 py-2 text-xs text-muted-foreground",Xe?"opacity-70":""),children:"Loading branch tree..."}):null]})]},xe.path)};return l.jsxs("aside",{ref:Y,"aria-label":"Dense branch sidebar",className:_n("pointer-events-auto relative z-[120] h-full select-none overflow-hidden bg-muted",A),style:X,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 h-12"}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[p&&l.jsx("div",{className:"px-2.5 pb-2",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:p})}),l.jsx("div",{className:_n("px-2 pb-2",W?"opacity-0 pointer-events-none":""),children:l.jsx("div",{className:"px-1",children:l.jsxs("button",{type:"button",onClick:a,disabled:h,"aria-label":"Add Repo",className:"window-no-drag group flex w-full items-center gap-0 rounded-lg bg-muted px-0 h-6 text-foreground transition-colors hover:bg-border/50 disabled:cursor-not-allowed disabled:opacity-50",children:[l.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-border/50 text-foreground",children:l.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-4 w-4 shrink-0",children:l.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}),l.jsx("span",{className:"min-w-0 flex-1 truncate pl-0 text-left text-sm font-normal text-foreground",children:"New Project"})]})})}),l.jsx("div",{ref:q,className:_n("sidebar-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto px-2",W?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:vt.map(xe=>nt(xe,{hideLive:We===xe.path}))})]}),We&&ut?l.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed left-0 top-0 z-[90]",style:{transform:`translate3d(${ut.x}px, ${ut.y}px, 0)`,width:`${ut.width}px`},children:nt((Ne=e.find(xe=>xe.path===We))!=null?Ne:Ue.find(xe=>xe.path===We),{ghostMode:!0})}):null]})}function bm(e){return{branchByName:Array.from(e.branchByName.entries()),laneByName:Array.from(e.laneByName.entries()),mainCommits:e.mainCommits,branchCommitsByLane:Array.from(e.branchCommitsByLane.entries()),branchPreviewSets:Array.from(e.branchPreviewSets.entries()),allCommits:e.allCommits,clustersByBranch:Array.from(e.clustersByBranch.entries()),clusterKeyByCommitId:Array.from(e.clusterKeyByCommitId.entries()),clusterKeyBySha:Array.from(e.clusterKeyBySha.entries()),leadByClusterKey:Array.from(e.leadByClusterKey.entries()),clusterCounts:Array.from(e.clusterCounts.entries()),debugRows:e.debugRows,branchDebugRows:e.branchDebugRows,nodes:e.nodes,normalizedSearchQuery:e.normalizedSearchQuery,matchingNodes:e.matchingNodes,matchingNodeIds:Array.from(e.matchingNodeIds),focusedNode:e.focusedNode,checkedOutClusterKey:e.checkedOutClusterKey,defaultCollapsedClumps:Array.from(e.defaultCollapsedClumps),visibleCommitsList:e.visibleCommitsList,renderNodes:e.renderNodes,visibleNodesBySha:Array.from(e.visibleNodesBySha.entries()),visibleNodeByClusterKey:Array.from(e.visibleNodeByClusterKey.entries()),contentWidth:e.contentWidth,contentHeight:e.contentHeight,connectors:e.connectors,mergeConnectors:e.mergeConnectors,connectorDecisions:e.connectorDecisions,nodeWarnings:Array.from(e.nodeWarnings.entries()),connectorParentShas:Array.from(e.connectorParentShas),branchStartShas:Array.from(e.branchStartShas),branchOffNodeShas:Array.from(e.branchOffNodeShas),crossBranchOutgoingShas:Array.from(e.crossBranchOutgoingShas),commitIdsWithRenderedAncestry:Array.from(e.commitIdsWithRenderedAncestry),branchBaseCommitByName:Array.from(e.branchBaseCommitByName.entries()),firstBranchCommitByName:Array.from(e.firstBranchCommitByName.entries()),mergeDestinations:e.mergeDestinations,mergeTargetBranchesBySourceBranchAndCommitSha:Array.from(e.mergeTargetBranchesBySourceBranchAndCommitSha.entries()).map(([n,i])=>[n,Array.from(i.entries()).map(([a,c])=>[a,Array.from(c)])])}}function vm(e){var i,a,c,u,d,h,p,y,g,x,b,C,j,T,E,N,H,L,A,X,W,Y,q,ue,fe,_e,De,qe,se,he,O,oe,P,me,be,$,ie,ee,ve;const n=new Map(((i=e.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?i:[]).map(([Te,pe])=>[Te,new Map(pe.map(([Oe,et])=>[Oe,new Set(et)]))]));return{branchByName:new Map((a=e.branchByName)!=null?a:[]),laneByName:new Map((c=e.laneByName)!=null?c:[]),mainCommits:(u=e.mainCommits)!=null?u:[],branchCommitsByLane:new Map((d=e.branchCommitsByLane)!=null?d:[]),branchPreviewSets:new Map((h=e.branchPreviewSets)!=null?h:[]),allCommits:(p=e.allCommits)!=null?p:[],clustersByBranch:new Map((y=e.clustersByBranch)!=null?y:[]),clusterKeyByCommitId:new Map((g=e.clusterKeyByCommitId)!=null?g:[]),clusterKeyBySha:new Map((x=e.clusterKeyBySha)!=null?x:[]),leadByClusterKey:new Map((b=e.leadByClusterKey)!=null?b:[]),clusterCounts:new Map((C=e.clusterCounts)!=null?C:[]),debugRows:(j=e.debugRows)!=null?j:[],branchDebugRows:(T=e.branchDebugRows)!=null?T:[],nodes:(E=e.nodes)!=null?E:[],normalizedSearchQuery:(N=e.normalizedSearchQuery)!=null?N:"",matchingNodes:(H=e.matchingNodes)!=null?H:[],matchingNodeIds:new Set((L=e.matchingNodeIds)!=null?L:[]),focusedNode:(A=e.focusedNode)!=null?A:null,checkedOutClusterKey:(X=e.checkedOutClusterKey)!=null?X:null,defaultCollapsedClumps:new Set((W=e.defaultCollapsedClumps)!=null?W:[]),visibleCommitsList:(Y=e.visibleCommitsList)!=null?Y:[],renderNodes:(q=e.renderNodes)!=null?q:[],visibleNodesBySha:new Map((ue=e.visibleNodesBySha)!=null?ue:[]),visibleNodeByClusterKey:new Map((fe=e.visibleNodeByClusterKey)!=null?fe:[]),pointFormatter:(Te,pe)=>`${Te},${pe}`,contentWidth:(_e=e.contentWidth)!=null?_e:0,contentHeight:(De=e.contentHeight)!=null?De:0,connectors:(qe=e.connectors)!=null?qe:[],mergeConnectors:(se=e.mergeConnectors)!=null?se:[],connectorDecisions:(he=e.connectorDecisions)!=null?he:[],nodeWarnings:new Map((O=e.nodeWarnings)!=null?O:[]),connectorParentShas:new Set((oe=e.connectorParentShas)!=null?oe:[]),branchStartShas:new Set((P=e.branchStartShas)!=null?P:[]),branchOffNodeShas:new Set((me=e.branchOffNodeShas)!=null?me:[]),crossBranchOutgoingShas:new Set((be=e.crossBranchOutgoingShas)!=null?be:[]),commitIdsWithRenderedAncestry:new Set(($=e.commitIdsWithRenderedAncestry)!=null?$:[]),branchBaseCommitByName:new Map((ie=e.branchBaseCommitByName)!=null?ie:[]),firstBranchCommitByName:new Map((ee=e.firstBranchCommitByName)!=null?ee:[]),mergeDestinations:(ve=e.mergeDestinations)!=null?ve:[],mergeTargetBranchesBySourceBranchAndCommitSha:n}}const fd="git-visualizer:projects",wm="git-visualizer:active-project",ux="git-visualizer:map-orientation",hd=12,dx=1400,$3=180,fx="git-visualizer:sidebar-width",hx="git-visualizer:sidebar-collapsed",mx="git-visualizer:grid-clumps",px=360,_x=180,gx=360;function Io(e){return e==="/"?e:e.replace(/\/+$/,"")}function yx(e,n){return!e||!n?!1:Io(e).toLowerCase()===Io(n).toLowerCase()}function I3(...e){return e.filter(Boolean).join(" ")}function Sm(e){var a;if(!e)return"";const i=e.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Gd(e){return e.size===0?"__none__":Array.from(e).sort().join(",")}function md(e,n,i,a,c=""){return["layout-v3",e,n,Gd(i),Gd(a),c].join("|")}function xx(e){var n,i;return[e.path,e.name,e.defaultBranch,e.updatedAtMs,e.branches.map(a=>[a.name,a.headSha,a.commitsAhead,a.commitsBehind,a.unpushedCommits,a.remoteSyncStatus,a.status,a.lastCommitDate].join(":")).join("|"),e.mergeNodes.map(a=>[a.fullSha,a.targetBranch,a.targetCommitSha].join(":")).join("|"),e.directCommits.map(a=>a.fullSha).join("|"),e.unpushedDirectCommits.map(a=>a.fullSha).join("|"),e.checkedOutRef?[(n=e.checkedOutRef.branchName)!=null?n:"",e.checkedOutRef.headSha,(i=e.checkedOutRef.parentSha)!=null?i:"",e.checkedOutRef.hasUncommittedChanges?"1":"0"].join(":"):"__none__",Object.entries(e.unpushedCommitShasByBranch).map(([a,c])=>`${a}:${c.join(",")}`).join("|"),Object.entries(e.branchCommitPreviews).map(([a,c])=>`${a}:${c.map(u=>u.fullSha).join(",")}`).join("|"),Object.entries(e.branchParentByName).map(([a,c])=>`${a}:${c!=null?c:""}`).join("|"),Object.entries(e.laneByBranch).map(([a,c])=>`${a}:${c}`).join("|"),Object.entries(e.branchUniqueAheadCounts).map(([a,c])=>`${a}:${c}`).join("|")].join("@@")}function Cm(e){var n,i;return(i=(n=e==null?void 0:e.payload)==null?void 0:n.repoVisualSnapshot)!=null?i:null}function P3(){var la,B,U;const[e,n]=_.useState(null),[i,a]=_.useState(""),[c,u]=_.useState([]),[d,h]=_.useState({}),[p,y]=_.useState(!1),[g,x]=_.useState([]),[b,C]=_.useState([]),[j,T]=_.useState([]),[E,N]=_.useState([]),[H,L]=_.useState({}),[A,X]=_.useState("main"),[W,Y]=_.useState(null),[q,ue]=_.useState([]),[fe,_e]=_.useState(!1),[De,qe]=_.useState(""),[se,he]=_.useState(0),[O,oe]=_.useState(1),[P,me]=_.useState({}),[be,$]=_.useState({}),[ie,ee]=_.useState(null),[ve,Te]=_.useState(null),[pe,Oe]=_.useState(null),[et,We]=_.useState(!1),[mt,Nt]=_.useState(!1),[Mt,ut]=_.useState(0),[$t,_t]=_.useState(!1),[Gt,Jt]=_.useState("loading"),[Z,Re]=_.useState(null),[dt,rt]=_.useState(null),[gt,Ue]=_.useState(!1),[vt,yt]=_.useState(null),[Et,Ke]=_.useState(null),[it,V]=_.useState(!1),[te,Se]=_.useState(!1),[je,nt]=_.useState(!1),[Ye,Ne]=_.useState(!1),[xe,ot]=_.useState({}),[Xe,st]=_.useState({}),[Be,tt]=_.useState({}),[wt,Ct]=_.useState({}),[Ze,Bt]=_.useState({}),[kt,pt]=_.useState([]),[cn,ft]=_.useState([]),[Pt,hn]=_.useState(!1),[Ot,jt]=_.useState(!1),[mn,rs]=_.useState(!1),[en,gn]=_.useState(!1),nn=Ot||mn||Pt||je||Ye||te||fe||en,[zt,on]=_.useState(!1),[Qe,zn]=_.useState("horizontal"),[$n]=_.useState(null),[Ds]=_.useState(null),[Un]=_.useState(null),[bo]=_.useState(!1),[Ys,co]=_.useState(!1),[Ws,tn]=_.useState(px),[kn,bn]=_.useState(!1),Fs=_.useRef(null),Bn=_.useRef(0),hs=_.useRef(0),sn=_.useRef(0),ts=_.useRef({}),vo=_.useRef(null),bs=_.useRef({}),eo=_.useRef({}),Rs=_.useRef(!1),qn=_.useRef(null),_s=_.useRef(px),jn=_.useRef(null),Uo=_.useRef(null),ci=_.useRef(!1),wo=_.useRef(!1),ra=_.useRef(!1);_.useRef(!1);const Bs=_.useRef(new Set),[Xs,ks]=_.useState(!1),Kn=_.useRef([]),Sn=_.useRef([]),Gs=_.useRef(null),vn=_.useRef([]),ms=_.useRef([]),Si=_.useRef([]),Vo=_.useRef({}),Ci=_.useRef([]),qt=_.useRef({}),Ls=_.useRef(new Map),Vn=_.useRef(new Set),ki=_.useRef(null),[ji,Os]=_.useState(null),[uo,to]=_.useState(null),ls=e!=null?e:"__no-repo__",Dn=(w,S)=>{try{const k={opened:Object.fromEntries(Object.entries(w).map(([R,z])=>[R,Array.from(z)])),closed:Object.fromEntries(Object.entries(S).map(([R,z])=>[R,Array.from(z)]))};window.localStorage.setItem(mx,JSON.stringify(k))}catch{}};_.useEffect(()=>{var w,S;try{const k=window.localStorage.getItem(mx);if(!k)return;const R=JSON.parse(k);if(!R||typeof R!="object")return;const z={},J={},ae=R;for(const[Me,Ge]of Object.entries((w=ae.opened)!=null?w:{}))Array.isArray(Ge)&&(z[Me]=new Set(Ge.filter(G=>typeof G=="string")));for(const[Me,Ge]of Object.entries((S=ae.closed)!=null?S:{}))Array.isArray(Ge)&&(J[Me]=new Set(Ge.filter(G=>typeof G=="string")));me(z),$(J)}catch{}},[]),_.useEffect(()=>{Dn(P,be)},[be,P]);const js=_.useMemo(()=>{var w;return(w=P[ls])!=null?w:new Set},[ls,P]),gs=_.useMemo(()=>{var w;return(w=be[ls])!=null?w:new Set},[ls,be]),Ms=_.useCallback(w=>{me(S=>{var J;const k=(J=S[ls])!=null?J:new Set,R=typeof w=="function"?w(k):w,z={...S,[ls]:new Set(R)};return Dn(z,be),z})},[ls,be]),zs=_.useCallback(w=>{$(S=>{var J;const k=(J=S[ls])!=null?J:new Set,R=typeof w=="function"?w(k):w,z={...S,[ls]:new Set(R)};return Dn(P,z),z})},[ls,P]),yn=_.useMemo(()=>c.map(w=>{var R,z,J,ae,Me,Ge,G,re,le,Q,Ee,Ie,at,ct,St;const S=(()=>{if(!e)return!1;const ht=Io(w.path).toLowerCase(),bt=Io(e).toLowerCase();return ht===bt})(),k=(R=d[w.path])!=null?R:{};return{...w,...k,branches:(z=k.branches)!=null?z:[],mergeNodes:(J=k.mergeNodes)!=null?J:[],directCommits:(ae=k.directCommits)!=null?ae:[],unpushedDirectCommits:(Me=k.unpushedDirectCommits)!=null?Me:[],unpushedCommitShasByBranch:(Ge=k.unpushedCommitShasByBranch)!=null?Ge:{},checkedOutRef:S?W:(G=k.checkedOutRef)!=null?G:null,worktrees:(re=k.worktrees)!=null?re:[],stashes:(le=k.stashes)!=null?le:[],branchCommitPreviews:(Q=k.branchCommitPreviews)!=null?Q:{},laneByBranch:(Ee=k.laneByBranch)!=null?Ee:{},branchUniqueAheadCounts:(Ie=k.branchUniqueAheadCounts)!=null?Ie:{},defaultBranch:(ct=(at=k.defaultBranch)!=null?at:w.branchName)!=null?ct:"main",treeLoaded:(St=k.loaded)!=null?St:!1}}),[c,d,e,W]),qs=_.useMemo(()=>({githubAuthStatus:dt,githubAuthLoading:gt,onGitHubAuthSetup:Xo,gridSearchQuery:De,setGridSearchQuery:qe,gridSearchResultCount:ie,gridSearchResultIndex:ve,setGridSearchJumpDirection:oe,setGridSearchJumpToken:he,mapGridOrientation:Qe,setMapGridOrientation:zn,setIsGridDebugOpen:co,githubAuthMessage:vt,commitSwitchFeedback:Et,isCommitSwitchFeedbackVisible:it}),[Et,gt,vt,dt,De,ie,ve,Xo,it,Qe,qe,oe,he,co,zn]);function $s(w,S,k){const R=xx(S);return ts.current[w]===R?!1:(ts.current={...ts.current,[w]:R},h(J=>J[w]===S?J:{...J,[w]:S}),!0)}function Qo(w){var S;return[w.repoPath,w.defaultBranch,w.headSha,(S=w.upstreamSha)!=null?S:"",w.hasUncommittedChanges?"1":"0",w.branchCount,w.worktreeCount,w.stashCount].join("|")}function Es(w){var S;return[w.repoPath,w.headSha,(S=w.upstreamSha)!=null?S:"",w.hasUncommittedChanges?"1":"0"].join("|")}function ui(w,S){var k,R,z,J,ae,Me;return{repoPath:w,headSha:(R=(k=S.checkedOutRef)==null?void 0:k.headSha)!=null?R:"",upstreamSha:(J=(z=S.checkedOutRef)==null?void 0:z.parentSha)!=null?J:null,hasUncommittedChanges:(Me=(ae=S.checkedOutRef)==null?void 0:ae.hasUncommittedChanges)!=null?Me:!1}}function Zo(w,S,k){var R,z,J,ae,Me,Ge;return{repoPath:w,defaultBranch:S,headSha:(z=(R=k.checkedOutRef)==null?void 0:R.headSha)!=null?z:"",upstreamSha:(ae=(J=k.checkedOutRef)==null?void 0:J.parentSha)!=null?ae:null,hasUncommittedChanges:(Ge=(Me=k.checkedOutRef)==null?void 0:Me.hasUncommittedChanges)!=null?Ge:!1,branchCount:k.branches.length,worktreeCount:k.worktrees.length,stashCount:k.stashes.length}}_.useEffect(()=>{try{const w=localStorage.getItem(fd);if(!w)return;const S=JSON.parse(w);if(!Array.isArray(S))return;const k=S.filter(R=>typeof R=="object"&&R!==null&&typeof R.path=="string"&&typeof R.name=="string"&&typeof R.lastOpenedAt=="number");u(k.slice(0,hd))}catch{u([])}},[]),_.useEffect(()=>{try{const w=window.localStorage.getItem(ux);(w==="vertical"||w==="horizontal")&&zn(w)}catch{}},[]),_.useEffect(()=>{var k;if(ra.current||e||c.length===0||!Xs)return;const w=(()=>{try{return window.localStorage.getItem(wm)}catch{return null}})(),S=w?c.find(R=>Io(R.path).toLowerCase()===Io(w).toLowerCase()):null;ra.current=!0,ei((k=S==null?void 0:S.path)!=null?k:c[0].path)},[Xs,c,e]),_.useEffect(()=>{if(e)try{window.localStorage.setItem(wm,e)}catch{}},[e]),_.useEffect(()=>{try{window.localStorage.setItem(ux,Qe)}catch{}},[Qe]);const Jo=_.useMemo(()=>b.reduce((w,S)=>(w[S.targetCommitSha]=S.targetBranch,w),{}),[b]);_.useEffect(()=>{e&&(Rs.current||h(w=>{var S,k,R,z;return{...w,[e]:{path:e,name:i||Sm(e),branches:g,mergeNodes:b,directCommits:j,unpushedDirectCommits:E,mergeTargetBranchByCommitSha:b.reduce((J,ae)=>(J[ae.targetCommitSha]=ae.targetBranch,J),{}),unpushedCommitShasByBranch:H,checkedOutRef:W,worktrees:q,stashes:kt,branchCommitPreviews:Xe,branchParentByName:Be,laneByBranch:wt,branchUniqueAheadCounts:Ze,defaultBranch:A,loaded:!0,cacheSchemaVersion:(k=(S=w[e])==null?void 0:S.cacheSchemaVersion)!=null?k:1,updatedAtMs:(z=(R=w[e])==null?void 0:R.updatedAtMs)!=null?z:Date.now()}}}))},[e,i,g,b,j,E,Jo,H,W,q,kt,Xe,Be,wt,Ze,A]);async function fo(w,S=!1){var R;const k=Io(w);if(k&&!Bs.current.has(k)&&!(!S&&((R=d[k])!=null&&R.loaded))){Bs.current.add(k),k===e&&y(!0);try{let z=null;S?z=await Ce("add_project_and_ingest",{repoPath:k}):(z=await Ce("load_project_snapshot",{projectId:k}),z||(z=await Ce("add_project_and_ingest",{repoPath:k})));const J=Cm(z);if(!J)throw new Error("Missing repo visual snapshot payload");$s(k,J)}finally{Bs.current.delete(k),k===e&&Bs.current.size===0&&y(!1)}}}_.useEffect(()=>{if(c.length===0){ks(!0);return}let w=!1;const S=!1;return(async()=>{try{await Promise.all(c.map(async k=>{await fo(k.path,S),await Ce("watch_repo",{repoPath:k.path}).catch(console.error)}))}catch(k){console.error("Failed to preload project snapshots:",k)}w||(ks(!0),y(!1))})(),()=>{w=!0}},[c]),_.useEffect(()=>{let w=!1,S=null;return zc("git-activity",k=>{if(w)return;const R=Io(k.payload.repoPath);!R||yx(R,e)||fo(R,!1)}).then(k=>{w?k():S=k}).catch(console.error),()=>{w=!0,S&&S()}},[e]),_.useEffect(()=>{if(mt||Rs.current||c.length===0)return;let w=!1;return(async()=>{var S,k;for(const R of c){const z=Io(R.path),J=d[z];if(!(J!=null&&J.loaded))continue;const ae=(S=P[z])!=null?S:new Set,Me=(k=be[z])!=null?k:new Set,Ge=md(z,Qe,ae,Me);if(Ls.current.has(Ge))continue;const G=await Ce("get_repo_layout_snapshot",{repoPath:z,layoutKey:Ge}).catch(()=>null);if(w)return;if(G)try{const Ee=JSON.parse(G),Ie=vm(Ee);Ls.current.set(Ge,Ie),Vn.current.add(Ge);continue}catch{}const le=hp({branches:J.branches,mergeNodes:J.mergeNodes,directCommits:J.directCommits,unpushedDirectCommits:J.unpushedDirectCommits,defaultBranch:J.defaultBranch,branchCommitPreviews:J.branchCommitPreviews,branchParentByName:J.branchParentByName,branchUniqueAheadCounts:J.branchUniqueAheadCounts,checkedOutRef:J.checkedOutRef,stashes:J.stashes,manuallyOpenedClumps:ae,manuallyClosedClumps:Me,gridSearchQuery:"",gridFocusSha:null,orientation:Qe}).sharedGridLayoutModel;Ls.current.set(Ge,le),Vn.current.add(Ge);const Q=JSON.stringify(bm(le));if(Ce("store_repo_layout_snapshot",{repoPath:z,layoutKey:Ge,payloadJson:Q}).catch(()=>{Vn.current.delete(Ge)}),await us(),w)return}})(),()=>{w=!0}},[c,d,Qe,P,be,mt]);function Ao(w){u(S=>{const k=Io(w.path);if(!k)return S;const R={...w,path:k},J=(S.some(ae=>ae.path===k)?S.map(ae=>ae.path===k?R:ae):[...S,R]).slice(-hd);try{localStorage.setItem(fd,JSON.stringify(J))}catch{}return J})}function di(w){u(S=>{const k=new Map(S.map(z=>[z.path,z])),R=[];for(const z of w){const J=k.get(z);J&&(R.push(J),k.delete(z))}for(const z of S)k.has(z.path)&&R.push(z);try{localStorage.setItem(fd,JSON.stringify(R.slice(0,hd)))}catch{}return R.slice(0,hd)})}async function cs(w){const S=Io(w);if(S){Re(null);try{const[k,R]=await Promise.all([Ce("get_repo_info",{repoPath:S}),Ce("get_default_branch",{repoPath:S}).catch(()=>"main")]);Ao({path:S,name:k.name,lastOpenedAt:Date.now(),branchName:R}),await fo(S,!1)}catch(k){Re(k instanceof Error?k.message:String(k))}}}function ho(w){var k,R;const S=Io(w);if(S){u(z=>{const J=z.filter(ae=>ae.path!==S);try{localStorage.setItem(fd,JSON.stringify(J))}catch{}return J});try{e&&Io(e).toLowerCase()===S.toLowerCase()&&window.localStorage.removeItem(wm)}catch{}if(h(z=>{if(!(S in z))return z;const J={...z};return delete J[S],J}),e===S){const z=(R=(k=c.find(J=>J.path!==S))==null?void 0:k.path)!=null?R:null;z?ei(z):(n(null),a(""),x([]),C([]),T([]),N([]),L({}),Y(null),ue([]),pt([]),st({}),tt({}),Ct({}),Bt({}))}}}async function Yo(w){const S=Io(w);if(S)try{await Ce("reveal_in_finder",{path:S})}catch(k){Re(k instanceof Error?k.message:String(k))}}const Ts=()=>{(async()=>{var w,S;try{const k=await cw({directory:!0,multiple:!1,defaultPath:(S=(w=c[0])==null?void 0:w.path)!=null?S:void 0});typeof k=="string"&&k&&await cs(k)}catch(k){Re(k instanceof Error?k.message:String(k))}})()};async function mo(w,S){const R=[];let z=0;for(;;){const J=await Ce("get_merge_nodes",{repoPath:w,branch:S,page:z,perPage:100});if(R.push(...J.nodes),!J.hasMore||J.nodes.length===0)break;z+=1}return R}async function Wo(w,S,k){const R=Array.from(new Set([k,...S.map(ae=>ae.name)].filter(ae=>!!ae)));if(R.length===0)return[];const z=await Promise.all(R.map(ae=>mo(w,ae).catch(()=>[]))),J=new Map;for(const ae of z)for(const Me of ae){const Ge=`${Me.targetCommitSha}:${Me.targetBranch}`;J.has(Ge)||J.set(Ge,Me)}return Array.from(J.values())}async function As(w,S,k){var ct,St,ht,bt;const R=S!=null?S:A,z=(ct=k==null?void 0:k.includeMergeNodes)!=null?ct:!0,J=(St=k==null?void 0:k.includeUnpushedShaMap)!=null?St:!0,ae=(ht=k==null?void 0:k.includeWorktrees)!=null?ht:!0,Me=(bt=k==null?void 0:k.includeStashes)!=null?bt:!0,[Ge,G,re,le,Q,Ee]=await Promise.all([Ce("get_branches",{repoPath:w}),Ce("get_all_repo_commits",{repoPath:w}),Ce("get_unpushed_direct_commits",{repoPath:w,branch:R}).catch(()=>[]),Ce("get_checked_out_ref",{repoPath:w}).catch(()=>null),ae?Ce("list_worktrees",{repoPath:w}).catch(()=>[]):Promise.resolve(q),Me?Ce("list_stashes",{repoPath:w}).catch(()=>[]):Promise.resolve(kt)]),Ie=z?await Wo(w,Ge,R):b,at=J?await Promise.all([R,...Ge.map(dn=>dn.name)].map(async dn=>{const Ft=await Ce("get_branch_unpushed_commit_shas",{repoPath:w,branch:dn}).catch(()=>[]);return[dn,Ft]})):Object.entries(H);_.startTransition(()=>{x(Ge),C(Ie),T(G),N(re),L(Object.fromEntries(at)),Y(le),ue(Q),pt(Ee)})}async function wn(w,S){await As(w,S,{includeMergeNodes:!1,includeUnpushedShaMap:!0,includeWorktrees:!1,includeStashes:!1})}async function po(w,S){const k=A,[R,z,J]=await Promise.all([Ce("get_branches",{repoPath:w}),Ce("get_unpushed_direct_commits",{repoPath:w,branch:k}).catch(()=>[]),Ce("get_checked_out_ref",{repoPath:w}).catch(()=>null)]),ae=await Promise.all([k,...R.map(Me=>Me.name)].map(async Me=>{const Ge=await Ce("get_branch_unpushed_commit_shas",{repoPath:w,branch:Me}).catch(()=>[]);return[Me,Ge]}));_.startTransition(()=>{x(R),N(z),L(Object.fromEntries(ae)),Y(J)})}async function us(){await new Promise(w=>{window.requestAnimationFrame(()=>w())})}function Tn(){const w=hs.current+1;return hs.current=w,ut(w),_t(!1),Jt("loading"),w}function Fo(w,S="ready"){w===hs.current&&(Nt(!1),Rs.current=!1,Jt(S))}async function vs(w){const S=Tn();let k=!1;Ke(null),Nt(!0),Rs.current=!0;try{const[R,z]=await Promise.all([Ce("get_repo_info",{repoPath:w}),Ce("get_default_branch",{repoPath:w})]);a(R.name),X(z),n(w),await As(w,z),ti(w),Ke({kind:"success",message:`Now targeting worktree at ${w}`})}catch(R){k=!0;const z=R instanceof Error?R.message:String(R);Ke({kind:"error",message:z}),console.error("Failed to switch worktree:",z)}finally{Fo(S,k?"error":"ready")}}async function No(w,S){if(!(!e||fe)){_e(!0),Ke(null);try{await Ce("remove_worktree",{repoPath:e,worktreePath:w,force:S}),await wn(e),Ke({kind:"success",message:`Removed worktree at ${w}`})}catch(k){const R=k instanceof Error?k.message:String(k);Ke({kind:"error",message:R}),console.error("Failed to remove worktree:",R)}finally{_e(!1)}}}function fi(w,S,k){var z,J,ae;const R=xx(S);return vo.current===R?!1:(Kn.current=S.branches,Sn.current=S.directCommits,Gs.current=S.checkedOutRef,vn.current=S.unpushedDirectCommits,ms.current=S.worktrees,Si.current=S.stashes,Vo.current=S.unpushedCommitShasByBranch,Ci.current=S.mergeNodes,qt.current=(z=S.branchParentByName)!=null?z:{},vo.current=R,a(S.name||Sm(w)),X(S.defaultBranch||"main"),x(S.branches),C(S.mergeNodes),T(S.directCommits),N(S.unpushedDirectCommits),L(S.unpushedCommitShasByBranch),Y(S.checkedOutRef),ue(S.worktrees),pt(S.stashes),st(S.branchCommitPreviews),tt((J=S.branchParentByName)!=null?J:{}),Ct((ae=S.laneByBranch)!=null?ae:{}),Bt(S.branchUniqueAheadCounts),n(w),!0)}async function Mi(w,S,k,R){const z=md(w,Qe,k,R),J=Ls.current.get(z);if(J)return{layoutKey:z,model:J};const ae=await Ce("get_repo_layout_snapshot",{repoPath:w,layoutKey:z}).catch(()=>null);if(ae)try{const G=JSON.parse(ae),re=vm(G);return Ls.current.set(z,re),Vn.current.add(z),{layoutKey:z,model:re}}catch{}const Me=hp({branches:S.branches,mergeNodes:S.mergeNodes,directCommits:S.directCommits,unpushedDirectCommits:S.unpushedDirectCommits,defaultBranch:S.defaultBranch,branchCommitPreviews:S.branchCommitPreviews,branchParentByName:S.branchParentByName,branchUniqueAheadCounts:S.branchUniqueAheadCounts,checkedOutRef:S.checkedOutRef,stashes:S.stashes,manuallyOpenedClumps:k,manuallyClosedClumps:R,gridSearchQuery:"",gridFocusSha:null,orientation:Qe}).sharedGridLayoutModel;Ls.current.set(z,Me),Vn.current.add(z);const Ge=JSON.stringify(bm(Me));return Ce("store_repo_layout_snapshot",{repoPath:w,layoutKey:z,payloadJson:Ge}).catch(()=>{Vn.current.delete(z)}),{layoutKey:z,model:Me}}async function ei(w){var re,le;const S=++Bn.current,k=Tn();let R=!1;const z=Io(w);if(!z)return;e&&Ut&&Ls.current.set(Ut,Yn);const J=(re=P[z])!=null?re:new Set,ae=(le=be[z])!=null?le:new Set,Me=md(z,Qe,J,ae),Ge=Ls.current.get(Me);if(Ge?(Os(Ge),to(Me)):(Os(null),to(null)),Rs.current=!0,Nt(!0),We(!0),Re(null),await us(),S!==Bn.current)return;const G=d[z];if(G!=null&&G.loaded){eo.current={...eo.current,[z]:Es(ui(z,G))};const Q=await Mi(z,G,J,ae);if(S!==Bn.current||(Os(Q.model),to(Q.layoutKey),fi(z,G),Ao({path:z,name:G.name||Sm(z),lastOpenedAt:Date.now(),branchName:G.defaultBranch}),await us(),await us(),S!==Bn.current))return;Fo(k,"ready"),We(!1),ti(z);return}if(await new Promise(Q=>setTimeout(Q,15)),S===Bn.current)try{const[Q,Ee]=await Promise.all([Ce("get_repo_info",{repoPath:z}),Ce("get_default_branch",{repoPath:z})]);if(S!==Bn.current)return;a(Q.name),X(Ee);const Ie=await Ce("add_project_and_ingest",{repoPath:z}),at=Cm(Ie);if(!at)throw new Error("Missing repo visual snapshot payload");if(S!==Bn.current)return;const ct=await Mi(z,at,J,ae);if(S!==Bn.current||(Os(ct.model),to(ct.layoutKey),$s(z,at),bs.current={...bs.current,[z]:Qo(Zo(z,Ee,at))},eo.current={...eo.current,[z]:Es(ui(z,at))},fi(z,at),Ao({path:z,name:Q.name,lastOpenedAt:Date.now(),branchName:Ee}),await us(),await us(),S!==Bn.current))return;Fo(k,"ready"),We(!1),ti(z)}catch(Q){if(R=!0,S!==Bn.current)return;console.error("Failed to load repo:",Q),Re(Q instanceof Error?Q.message:String(Q)),n(null),We(!1)}finally{if(S!==Bn.current)return;Fo(k,R?"error":"ready")}}async function ti(w){const S=++sn.current;try{if(S!==sn.current)return;yt(null);const k=await Ce("get_github_info",{repoPath:w}),R=await Ce("get_github_auth_status");if(S!==sn.current||(rt(R),!R.ghAvailable||!R.authenticated))return;const z=await Ce("get_open_prs",{owner:k.owner,repo:k.repo});if(S!==sn.current)return;ft(z)}catch(k){if(S!==sn.current)return;console.log("GitHub data not available:",k),yt(k instanceof Error?k.message:String(k))}}_.useEffect(()=>{let w=null,S=!1;const k=(()=>{try{return Sp().label}catch{return null}})(),R=async J=>{var Me;const ae=(Me=J==null?void 0:J.path)==null?void 0:Me.trim();!ae||S||e!==ae&&await ei(ae)};return(async()=>{k==="main"&&(w=await zc("gitviz://open-repo",async ae=>{await R(ae.payload)}));const J=await Ce("take_pending_open_repo");await R(J)})(),()=>{S=!0,w&&w()}},[e]),_.useEffect(()=>{Kn.current=g},[g]),_.useEffect(()=>{Sn.current=j},[j]),_.useEffect(()=>{Gs.current=W},[W]),_.useEffect(()=>{vn.current=E},[E]),_.useEffect(()=>{ms.current=q},[q]),_.useEffect(()=>{Si.current=kt},[kt]),_.useEffect(()=>{Vo.current=H},[H]),_.useEffect(()=>{Ci.current=b},[b]),_.useEffect(()=>{qt.current=Be},[Be]),_.useEffect(()=>{ci.current=zt},[zt]),_.useEffect(()=>{if(!e||!A)return;Ce("watch_repo",{repoPath:e}).catch(console.error);let w=!1,S=!1,k=null,R=null;const z=async()=>{var Me;if(!(w||S)){if(ci.current){wo.current=!0;return}S=!0;try{wo.current=!1;const Ge=await Ce("refresh_project_if_changed",{projectId:e});if(!Ge.updated)return;const G=Cm((Me=Ge.snapshot)!=null?Me:null);if(!G)return;$s(e,G),Io(e)===Io(G.path)&&fi(e,G)}catch(Ge){console.warn("Background project refresh failed:",Ge)}finally{S=!1,!w&&wo.current&&!ci.current&&z()}}},J=()=>{if(w)return;k!=null&&window.clearTimeout(k);const Ge=document.visibilityState!=="visible"?9e4:3e4;k=window.setTimeout(()=>{z(),J()},Ge)};zc("git-activity",Me=>{yx(Me.payload.repoPath,e)&&z()}).then(Me=>{w?Me():R=Me}).catch(console.error);const ae=window.setTimeout(()=>{z()},250);return J(),()=>{w=!0,window.clearTimeout(ae),k!=null&&window.clearTimeout(k),R&&R()}},[e,A]);async function Xo(){if(e){Ue(!0),yt(null);try{await Ce("authenticate_github");const w=await Ce("get_github_auth_status");rt(w),w.authenticated?await ti(e):w.message&&yt(w.message)}catch(w){yt(w instanceof Error?w.message:String(w))}finally{Ue(!1)}}}_.useEffect(()=>{ot({}),Uo.current=null,Ue(!1),rt(null),yt(null),ft([]),Ke(null)},[e]),_.useEffect(()=>{var Ge,G,re,le;if(!e||!A){ot({}),st({}),tt({}),Ct({}),Bt({}),Uo.current=null;return}const w=g.map(Q=>{var Ee;return`${Q.name}:${Q.headSha}:${(Ee=Q.parentBranch)!=null?Ee:""}:${Q.commitsAhead}`}).join("|"),S=b.map(Q=>{var Ee,Ie;return`${Q.fullSha}:${(Ie=(Ee=Q.parentShas)==null?void 0:Ee[1])!=null?Ie:""}`}).join("|"),k=`${e}|${A}|${w}|${S}`;if(Uo.current===k)return;Uo.current=k;const R={},z={};for(const Q of g){if(Q.name===A)continue;const Ee=j.filter(Ie=>Ie.branch===Q.name).map(Ie=>{var at;return{fullSha:Ie.fullSha,sha:Ie.sha,parentSha:(at=Ie.parentSha)!=null?at:null,message:Ie.message,author:Ie.author,date:Ie.date,kind:"commit"}});R[Q.name]=Ee,z[Q.name]=Ee.length}const J=new Map;for(const Q of j)J.set(Q.fullSha,Q.branch);const ae=Q=>{if(!Q)return null;const Ee=J.get(Q);if(Ee)return Ee;for(const[Ie,at]of J.entries())if(Ie.startsWith(Q)||Q.startsWith(Ie))return at;return null},Me={[A]:null};for(const Q of g){if(Q.name===A){Me[Q.name]=null;continue}const Ee=j.filter(St=>St.branch===Q.name),Ie=new Set(Ee.map(St=>St.fullSha)),at=(G=(Ge=Ee.filter(St=>{var bt;const ht=(bt=St.parentSha)!=null?bt:null;return!ht||!Ie.has(ht)}).sort((St,ht)=>{const bt=new Date(St.date).getTime()-new Date(ht.date).getTime();return bt!==0?bt:St.fullSha.localeCompare(ht.fullSha)})[0])==null?void 0:Ge.parentSha)!=null?G:null,ct=ae(at);Me[Q.name]=(le=(re=ct!=null?ct:qt.current[Q.name])!=null?re:Q.parentBranch)!=null?le:null}ot({}),st(R),tt(Me),Ct(Q=>{const Ee={};for(const Ie of g){const at=Q[Ie.name];at!=null&&Number.isFinite(at)&&(Ee[Ie.name]=at)}return Ee}),Bt(z)},[e,A,g,b,j]),_.useEffect(()=>{if(!Et){V(!1);return}V(!0);const w=window.setTimeout(()=>{V(!1)},dx),S=window.setTimeout(()=>{Ke(null)},dx+$3);return()=>{window.clearTimeout(w),window.clearTimeout(S)}},[Et]),_.useEffect(()=>{if(!e||g.length===0)return;const w=R=>new Promise(z=>setTimeout(z,R));async function S(){const z=`${await Ce("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${z}`),await w(800),await Ce("screenshot",{path:`${z}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${z}`)}const k=R=>{if((R.metaKey||R.ctrlKey)&&!R.shiftKey&&!R.altKey&&R.key.toLowerCase()==="b"){R.preventDefault(),bn(z=>!z);return}(R.metaKey||R.ctrlKey)&&R.shiftKey&&R.key==="S"&&(R.preventDefault(),S())};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[e,i,g]);async function At(w){if(!e)return;Ke(null);const S=/^STASH:(\d+)$/.exec(w.commitSha);if(S){try{const k=parseInt(S[1],10),R=await Ce("apply_stash_restore",{repoPath:e,stashIndex:k});Y(R),await wn(e);const z=`Stash ${k+1}`,J=R.branchName?` on branch ${R.branchName}`:" at the stash base (detached HEAD)";Ke({kind:"success",message:`Restored ${z}${J}; stash applied and dropped (uncommitted changes).`})}catch(k){const R=k instanceof Error?k.message:String(k);Ke({kind:"error",message:R}),console.error("Failed to apply stash:",R)}return}if(w.branchName){const k=(z,J)=>{const ae=z.replace(/\\/g,"/").replace(/\/+$/,""),Me=J.replace(/\\/g,"/").replace(/\/+$/,"");return ae===Me||ae.toLowerCase()===Me.toLowerCase()},R=q.find(z=>z.pathExists===!1||z.isCurrent||e&&k(z.path,e)?!1:z.branchName===w.branchName);if(R){await vs(R.path);return}}try{let k="";(await Ce("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges&&(await Ce("stash_push",{repoPath:e,includeUntracked:!0}),k="Stashed local changes (including untracked), then ",await wn(e));const z=w.branchName?await Ce("checkout_branch",{repoPath:e,branchName:w.branchName}):await Ce("checkout_ref",{repoPath:e,refName:w.commitSha}),J=await Ce("get_checked_out_ref",{repoPath:e}).catch(()=>z);Y(J),await wn(e);const ae=J.branchName?J.branchName:`${J.headSha.slice(0,7)} (detached)`;Ke({kind:"success",message:`${k}Checked out ${ae}`})}catch(k){const R=k instanceof Error?k.message:String(k);Ke({kind:"error",message:R}),console.error("Failed to checkout commit:",R)}}async function no(){if(!(!e||Pt)){Ke(null),hn(!0);try{if(!(await Ce("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges){Ke({kind:"error",message:"No local changes to stash."});return}await Ce("stash_push",{repoPath:e,includeUntracked:!0}),await us(),await wn(e),Ke({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(w){const S=w instanceof Error?w.message:String(w);Ke({kind:"error",message:S}),console.error("Failed to stash:",S)}finally{hn(!1)}}}async function Qi(w){if(!e||Ot)return!1;const S=w.trim();if(!S)return Ke({kind:"error",message:"Enter a commit message."}),!1;Ke(null),jt(!0);try{if(!(await Ce("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Ke({kind:"error",message:"No local changes to commit."}),!1;const R=await Ce("commit_working_tree",{repoPath:e,message:S});return Y(R),await us(),await wn(e),Ke({kind:"success",message:"Committed local changes."}),!0}catch(k){const R=k instanceof Error?k.message:String(k);return Ke({kind:"error",message:R}),console.error("Failed to commit:",R),!1}finally{jt(!1)}}async function zi(){if(!e||mn)return!1;Ke(null),rs(!0);try{if(!(await Ce("get_checked_out_ref",{repoPath:e})).hasUncommittedChanges)return Ke({kind:"error",message:"No local changes to stage."}),!1;const S=await Ce("stage_working_tree",{repoPath:e});return Y(S),await us(),await wn(e),Ke({kind:"success",message:"Staged all changes."}),!0}catch(w){const S=w instanceof Error?w.message:String(w);return Ke({kind:"error",message:S}),console.error("Failed to stage:",S),!1}finally{rs(!1)}}async function $i(w,S){if(!(!e||en)){gn(!0),Ke(null);try{const k=/^STASH:(\d+)$/.exec(w);let R;if(k){const z=parseInt(k[1],10);R=await Ce("move_stash_to_new_branch",{repoPath:e,stashIndex:z,branchName:S})}else R=await Ce("create_branch_from_uncommitted",{repoPath:e,branchName:S});Y(R),await wn(e),Ke({kind:"success",message:`Moved to new branch "${S}"`})}catch(k){const R=k instanceof Error?k.message:String(k);Ke({kind:"error",message:R}),console.error("Failed to create branch from node:",R)}finally{gn(!1)}}}async function So(w){if(!(!e||en)){gn(!0),Ke(null);try{const S=await Ce("create_root_branch",{repoPath:e,branchName:w});Y(S),await wn(e),Ke({kind:"success",message:`Created new root branch "${w}"`})}catch(S){const k=S instanceof Error?S.message:String(S);Ke({kind:"error",message:k}),console.error("Failed to create root branch:",k)}finally{gn(!1)}}}async function Do(w,S){if(!e)return;const k=Array.from(new Set(w.filter(R=>!!R&&R!==S)));if(k.length!==0){Ke(null),Se(!0);try{let R=null;for(const z of k)R=await Ce("merge_ref_into_branch",{repoPath:e,sourceRef:z,targetBranch:S});await wn(e),R&&Y(R),Ke({kind:"success",message:k.length===1?`Merged ${k[0].slice(0,7)} into ${S}`:`Merged ${k.length} commits into ${S}`})}catch(R){const z=R instanceof Error?R.message:String(R);Ke({kind:"error",message:z}),console.error("Failed to merge refs into branch:",z)}finally{Se(!1)}}}async function Co(){if(!(!e||je)){Ke(null),nt(!0);try{let w=[];try{w=await Ce("push_all_unpushed_branches",{repoPath:e})}catch(S){const k=S instanceof Error?S.message:String(S);if(!/non-fast-forward|fetch first|rejected/i.test(k))throw S;const z=W==null?void 0:W.branchName;if(!z)throw S;const J=window.confirm(`Push all hit non-fast-forward.

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await Ce("pull_branch_with_strategy",{repoPath:e,branchName:z,rebase:J}),w=await Ce("push_all_unpushed_branches",{repoPath:e})}await us(),await po(e),Ke({kind:"success",message:w.length>0?w.length===1?`Pushed ${w[0].branchName}`:`Pushed ${w.length} branches`:"Everything local is already pushed."})}catch(w){const S=w instanceof Error?w.message:String(w);Ke({kind:"error",message:S}),console.error("Failed to push all branches:",S)}finally{nt(!1)}}}async function hi(){if(!(!e||je)){Ke(null),nt(!0);try{const w=await Ce("push_current_branch",{repoPath:e});await us(),await po(e),Ke({kind:"success",message:`Pushed ${w.branchName}`})}catch(w){const S=w instanceof Error?w.message:String(w);if(/non-fast-forward|fetch first|rejected/i.test(S)){const R=window.confirm(`Push was rejected (non-fast-forward).

OK: pull --rebase then retry push
Cancel: pull --no-rebase then retry push`);try{const z=W==null?void 0:W.branchName;if(!z)throw new Error("Cannot resolve current branch for pull.");await Ce("pull_branch_with_strategy",{repoPath:e,branchName:z,rebase:R});const J=await Ce("push_current_branch",{repoPath:e});await us(),await po(e),Ke({kind:"success",message:`Pulled (${R?"rebase":"merge"}) and pushed ${J.branchName}`});return}catch(z){const J=z instanceof Error?z.message:String(z);Ke({kind:"error",message:J}),console.error("Failed to resolve non-fast-forward:",J);return}}Ke({kind:"error",message:S}),console.error("Failed to push current branch:",S)}finally{nt(!1)}}}async function M(w){var k;if(!e||je)return;const S=Array.from(new Map(w.filter(R=>R.branchName&&R.targetSha).map(R=>[R.branchName,R])).values());if(S.length!==0){Ke(null),nt(!0);try{for(const R of S)try{await Ce("push_branch",{repoPath:e,branchName:R.branchName,targetSha:R.targetSha})}catch(z){const J=z instanceof Error?z.message:String(z);if(!/non-fast-forward|fetch first|rejected/i.test(J))throw z;const Me=window.confirm(`Push rejected for ${R.branchName} (non-fast-forward).

OK: pull --rebase then retry
Cancel: pull --no-rebase then retry`);await Ce("pull_branch_with_strategy",{repoPath:e,branchName:R.branchName,rebase:Me}),await Ce("push_branch",{repoPath:e,branchName:R.branchName,targetSha:R.targetSha})}await wn(e),Ke({kind:"success",message:S.length===1?`Pushed ${S[0].branchName} through ${(k=S[0].targetSha)==null?void 0:k.slice(0,7)}`:`Pushed ${S.length} selected commit ranges`})}catch(R){const z=R instanceof Error?R.message:String(R);Ke({kind:"error",message:z}),console.error("Failed to push selected commits:",z)}finally{nt(!1)}}}async function F(w){var J;if(!e||Ye)return;const S=Array.from(new Set(w.branchNames.filter(ae=>ae&&ae!==A))),k=!!w.discardUncommittedChanges,R=(J=w.stashIndices)!=null?J:[],z=Array.from(new Set(R)).sort((ae,Me)=>Me-ae);if(!(S.length===0&&!k&&z.length===0)){Ke(null),Ne(!0);try{for(const Ge of z)await Ce("stash_drop",{repoPath:e,stashIndex:Ge});const ae=S.length>0||k?await Ce("delete_selected_elements",{repoPath:e,branchNames:S,discardUncommittedChanges:k}):{deletedBranches:[],discardedUncommittedChanges:!1};await wn(e);const Me=[];z.length>0&&Me.push(z.length===1?`removed stash ${z[0]+1}`:`removed ${z.length} stashes`),ae.discardedUncommittedChanges&&Me.push("discarded local uncommitted changes"),ae.deletedBranches.length>0&&Me.push(ae.deletedBranches.length===1?`deleted ${ae.deletedBranches[0]}`:`deleted ${ae.deletedBranches.length} branches`),Ke({kind:"success",message:Me.length>0?Me.join(" and "):"Nothing to delete."})}catch(ae){const Me=ae instanceof Error?ae.message:String(ae);Ke({kind:"error",message:Me}),console.error("Failed to delete selected elements:",Me)}finally{Ne(!1)}}}function de(w){w&&(Oe(w),he(S=>S+1))}function Ae(w){w&&(qe(w),he(S=>S+1))}const{enrichedBranches:Pe,enrichedBranchCommitPreviews:lt,enrichedBranchUniqueAheadCounts:Yt,enrichedDirectCommits:Ht,enrichedUnpushedDirectCommits:Zt,visualCheckedOutRef:xt}=_.useMemo(()=>{var On,Eo,Bo,mi,Wn,pi,Ti,gr,Wr,Fr,Xr,Ul,Vl,Gr,_i,yr,ni,xa,qr,xr,br,Kr,ca,Yl,vr,ba,su;const w=a2(kt,g,j,Xe,Ze,A,(On=W==null?void 0:W.hasUncommittedChanges)!=null?On:!1);let S=w.branches,k=w.directCommits,R=E,z=w.branchCommitPreviews,J=w.branchUniqueAheadCounts,ae=W;const Me=$n?k.some(Qt=>Qt.fullSha===$n||Qt.sha===$n.slice(0,7)):!0;if($n&&Un&&!Me){const Qt=(pi=(Wn=(Eo=k.find(Ks=>Ks.fullSha===Un||Ks.sha===Un.slice(0,7)))==null?void 0:Eo.date)!=null?Wn:(mi=(Bo=z[A])==null?void 0:Bo.find(Ks=>Ks.fullSha===Un||Ks.sha===Un.slice(0,7)))==null?void 0:mi.date)!=null?pi:null,Qn=Qt?new Date(new Date(Qt).getTime()+1e3).toISOString():new Date().toISOString(),ws=(Fr=Un!=null?Un:(Ti=S.find(Ks=>Ks.name===A))==null?void 0:Ti.headSha)!=null?Fr:(Wr=(gr=k[0])==null?void 0:gr.fullSha)!=null?Wr:null,Ii={fullSha:$n,sha:$n.slice(0,7),parentSha:ws,message:((Xr=Ds==null?void 0:Ds.subject)==null?void 0:Xr.trim())||`Remote commit on origin/${A}`,author:((Ul=Ds==null?void 0:Ds.author)==null?void 0:Ul.trim())||"Unknown",date:Qn,kind:"commit",isRemote:!0};k=[{fullSha:$n,sha:$n.slice(0,7),parentSha:ws,parentShas:ws?[ws]:[],childShas:[],branch:A,message:Ii.message,author:Ii.author,date:Qn,kind:"commit",isRemote:!0},...k],z={...z,[A]:[Ii,...(Vl=z[A])!=null?Vl:[]]},S=S.map(Ks=>Ks.name===A?{...Ks,headSha:$n,lastCommitDate:Qn}:Ks)}if(!!$n&&!!Un&&!Me&&(W==null?void 0:W.branchName)===A&&W.headSha!==$n&&(W.hasUncommittedChanges||E.length>0)){const Qt=`${A} (local)`,Qn=new Set(E.map(Ss=>Ss.fullSha));W!=null&&W.headSha&&Qn.add(W.headSha);const ws=(ni=(yr=(Gr=E[0])==null?void 0:Gr.date)!=null?yr:W!=null&&W.headSha?(_i=k.find(Ss=>Ss.fullSha===W.headSha))==null?void 0:_i.date:void 0)!=null?ni:new Date().toISOString();S.some(Ss=>Ss.name===Qt)||(S=[...S,{name:Qt,commitsAhead:Math.max(1,Qn.size),commitsBehind:0,lastCommitDate:ws,lastCommitAuthor:(xa=W==null?void 0:W.branchName)!=null?xa:"You",status:"fresh",remoteSyncStatus:"unpushed",unpushedCommits:Math.max(1,Qn.size),headSha:(br=W==null?void 0:W.headSha)!=null?br:(xr=(qr=E[0])==null?void 0:qr.fullSha)!=null?xr:"WORKING_TREE",parentBranch:A}]),k=k.map(Ss=>Ss.branch===A&&Qn.has(Ss.fullSha)?{...Ss,branch:Qt}:Ss),R=R.map(Ss=>Ss.branch===A&&Qn.has(Ss.fullSha)?{...Ss,branch:Qt}:Ss);const Ii=(Kr=z[A])!=null?Kr:[],va=Ii.filter(Ss=>Ss.fullSha==="WORKING_TREE"||Qn.has(Ss.fullSha)),Ks=Ii.filter(Ss=>!va.includes(Ss));va.length>0&&(z={...z,[A]:Ks,[Qt]:[...va,...(ca=z[Qt])!=null?ca:[]]}),J={...J,[Qt]:Math.max(1,Qn.size)},(ae==null?void 0:ae.branchName)===A&&(ae={...ae,branchName:Qt})}if(!(ae!=null&&ae.hasUncommittedChanges))return{enrichedBranches:S,enrichedDirectCommits:k,enrichedUnpushedDirectCommits:R,enrichedBranchCommitPreviews:z,enrichedBranchUniqueAheadCounts:J,visualCheckedOutRef:ae};const re=ae.headSha||ae.parentSha||null,le=(vr=(Yl=k[0])==null?void 0:Yl.fullSha)!=null?vr:null,Q=(Qt,Qn)=>!Qt||!Qn?!1:Qt===Qn||Qt.startsWith(Qn)||Qn.startsWith(Qt),Ee=[{name:A,headSha:le!=null?le:"",isDefault:!0},...S.map(Qt=>({name:Qt.name,headSha:Qt.headSha,isDefault:!1}))],Ie=ae.branchName?Ee.find(Qt=>Qt.name===ae.branchName):void 0,at=re?Ee.filter(Qt=>Q(Qt.headSha,re)):[],ct=(ba=Ie!=null?Ie:at.find(Qt=>Qt.isDefault))!=null?ba:at[0],St=ct&&!ct.isDefault?S.find(Qt=>Qt.name===ct.name):void 0,ht=(()=>{var Qn;if(!re)return null;const Qt=k.find(ws=>Q(ws.fullSha,re)||Q(ws.sha,re));if(Qt!=null&&Qt.date)return Qt.date;if(St){const ws=((Qn=z[St.name])!=null?Qn:[]).find(Ii=>Q(Ii.fullSha,re)||Q(Ii.sha,re));if(ws!=null&&ws.date)return ws.date}return null})(),bt=ht?new Date(ht).getTime():Number.NaN,dn=Date.now(),Ft=Number.isFinite(bt)?Math.max(dn,bt+1):dn,fn=new Date(Ft).toISOString(),Ln={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:re,message:"Local uncommitted changes",author:"You",date:fn,kind:"uncommitted"};return St?{enrichedBranches:S.map(Qn=>Qn.name===St.name?{...Qn,commitsAhead:Qn.commitsAhead+1,unpushedCommits:Qn.unpushedCommits+1,lastCommitDate:fn,headSha:"WORKING_TREE"}:Qn),enrichedDirectCommits:k,enrichedUnpushedDirectCommits:R,enrichedBranchCommitPreviews:{...z,[St.name]:[Ln,...z[St.name]||[]]},enrichedBranchUniqueAheadCounts:{...J,[St.name]:Math.max(0,(su=Object.prototype.hasOwnProperty.call(J,St.name)?J[St.name]:St.commitsAhead)!=null?su:0)+1},visualCheckedOutRef:ae}:{enrichedBranches:S,enrichedBranchCommitPreviews:{...z,[A]:[Ln,...z[A]||[]]},enrichedBranchUniqueAheadCounts:{...J},enrichedDirectCommits:k,enrichedUnpushedDirectCommits:R,visualCheckedOutRef:ae}},[g,Xe,Ze,W,A,j,Ds,Un,$n,kt,E]);_.useEffect(()=>{var R;if(!(!mt&&!et&&($n==null||bo&&Un!=null)))return;const S=xt!=null&&xt.hasUncommittedChanges?"WORKING_TREE":(R=xt==null?void 0:xt.headSha)!=null?R:null;if(!S)return;const k=`${e!=null?e:"__no-repo__"}|${Qe}|${S}`;Fs.current!==k&&(Fs.current=k,Oe(S),he(z=>z+1))},[bo,et,Qe,mt,Un,$n,e,xt==null?void 0:xt.hasUncommittedChanges,xt==null?void 0:xt.headSha]),_.useEffect(()=>{Fs.current=null},[e]);const un=_.useMemo(()=>{const w={...Be};return w[A]=null,w},[Be,A,Pe]),an=_.useMemo(()=>{var w;return(w=Pw(Pe,A,un,wt))!=null?w:Cp(Pe,A,lt,un)},[Pe,A,lt,un,wt]),Gn=_.useMemo(()=>Gd(js),[js]),Is=_.useMemo(()=>Gd(gs),[gs]),Kt=_.useMemo(()=>{var w,S;return[A,(w=xt==null?void 0:xt.branchName)!=null?w:"",(S=xt==null?void 0:xt.headSha)!=null?S:"",xt!=null&&xt.hasUncommittedChanges?"1":"0",Pe.map(k=>`${k.name}:${k.headSha}:${k.commitsAhead}:${k.commitsBehind}`).join("|"),Ht.length,Zt.map(k=>k.fullSha).sort().join("|"),b.map(k=>`${k.fullSha}:${k.targetBranch}:${k.targetCommitSha}`).join("|")].join("@@")},[A,xt==null?void 0:xt.branchName,xt==null?void 0:xt.headSha,xt==null?void 0:xt.hasUncommittedChanges,Pe,Ht,Zt,b]),Ut=_.useMemo(()=>e?md(e,Qe,js,gs,Kt):null,[e,Qe,Gn,Is,Kt]);_.useEffect(()=>{if(!e||!Ut){Os(null),to(null);return}const w=Ls.current.get(Ut);if(w){Os(w),to(Ut),Vn.current.add(Ut);return}let S=!1;return Os(null),to(null),Ce("get_repo_layout_snapshot",{repoPath:e,layoutKey:Ut}).then(k=>{if(S||!k)return;const R=JSON.parse(k),z=vm(R);Ls.current.set(Ut,z),Vn.current.add(Ut),Os(z),to(Ut)}).catch(()=>{S||(Os(null),to(null))}),()=>{S=!0}},[e,Ut]);const Yn=_.useMemo(()=>{var w;if(De.trim().length===0&&Ut&&uo===Ut&&ji)return ji;if(mt){const S=Ut&&(w=Ls.current.get(Ut))!=null?w:null;if(S)return S;if(ki.current)return ki.current}return kp({lanes:an,branches:Pe,mergeNodes:b,directCommits:Ht,unpushedDirectCommits:Zt,defaultBranch:A,branchCommitPreviews:lt,branchParentByName:un,branchUniqueAheadCounts:Yt,manuallyOpenedClumps:js,manuallyClosedClumps:gs,isDebugOpen:!1,gridSearchQuery:De,gridFocusSha:pe,checkedOutRef:xt!=null?xt:null,orientation:Qe})},[an,Pe,b,Ht,Zt,A,lt,un,Yt,js,gs,De,pe,(la=xt==null?void 0:xt.headSha)!=null?la:null,(B=xt==null?void 0:xt.branchName)!=null?B:null,Qe,De,Ut,uo,ji,mt]);_.useEffect(()=>{ki.current=Yn},[Yn]),_.useEffect(()=>{if(!e||!Ut||(Ls.current.set(Ut,Yn),Vn.current.has(Ut)))return;Vn.current.add(Ut);const w=JSON.stringify(bm(Yn));Ce("store_repo_layout_snapshot",{repoPath:e,layoutKey:Ut,payloadJson:w}).catch(()=>{Vn.current.delete(Ut)})},[e,Ut,Yn]),_.useEffect(()=>{try{const w=window.localStorage.getItem(fx);if(w){const k=Number(w);Number.isFinite(k)&&tn(Math.min(gx,Math.max(_x,k)))}const S=window.localStorage.getItem(hx);S!=null&&bn(S==="true")}catch{}},[]),_.useEffect(()=>{_s.current=Ws},[Ws]),_.useEffect(()=>{const w=jn.current;w&&(w.style.width=kn?"0px":`${Ws}px`)},[Ws,kn]),_.useEffect(()=>{try{window.localStorage.setItem(hx,String(kn))}catch{}},[kn]);const _o=w=>{const S=qn.current;if(!S)return;const k=S.startWidth+(w-S.startX);S.pendingWidth=Math.min(gx,Math.max(_x,k));const R=jn.current;R&&(R.style.width=`${S.pendingWidth}px`)},Ns=(w,S)=>{const k=qn.current;if(k&&!(S!=null&&k.pointerId!==S)){qn.current=null,document.body.style.cursor="",document.body.style.userSelect="",tn(k.pendingWidth);try{window.localStorage.setItem(fx,String(k.pendingWidth))}catch{}}},Ei=w=>{w.button===0&&(w.preventDefault(),qn.current={startX:w.clientX,startWidth:_s.current,pendingWidth:_s.current,pointerId:w.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",w.currentTarget.setPointerCapture(w.pointerId))},go=w=>{const S=qn.current;!S||S.pointerId!==w.pointerId||_o(w.clientX)},ko=w=>{if(qn.current){try{w.currentTarget.releasePointerCapture(w.pointerId)}catch{}Ns("pointerup",w.pointerId)}},jo=w=>{if(qn.current){try{w.currentTarget.releasePointerCapture(w.pointerId)}catch{}Ns("pointercancel",w.pointerId)}},Ro=_.useCallback(w=>{w===hs.current&&Gt==="ready"&&_t(!0)},[Gt]),Mo=!$t||Gt!=="ready",Go=mt||et;return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:jn,className:"relative z-[60] flex h-full min-h-0 flex-none overflow-visible",style:{width:kn?64:Ws},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[9999] inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted","aria-label":kn?"Open sidebar":"Collapse sidebar",onClick:()=>bn(w=>!w),children:kn?l.jsx(Nw,{className:"h-4 w-4 shrink-0"}):l.jsx(Tw,{className:"h-4 w-4 shrink-0"})}),l.jsx(z3,{className:I3("min-h-0 shrink-0 overflow-hidden pt-14 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:kn,projects:yn,activeProjectPath:e,onSelectProject:ei,onAddProject:Ts,onRemoveProject:ho,onReorderProjects:di,onRevealProjectInFinder:Yo,projectLoading:et||(p&&e?!((U=d[e])!=null&&U.loaded):!1),projectError:Z,checkedOutRef:W,showCommits:!1,manuallyOpenedClumpsByProject:P,manuallyClosedClumpsByProject:be,manuallyOpenedClumps:js,manuallyClosedClumps:gs,setManuallyOpenedClumps:Ms,setManuallyClosedClumps:zs,gridLayoutModel:Yn,onSelectCommit:de,onSelectBranch:Ae}),kn?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Ei,onPointerMove:go,onPointerUp:ko,onPointerCancel:jo,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(yS,{branches:Pe,mergeNodes:b,directCommits:Ht,unpushedDirectCommits:Zt,unpushedCommitShasByBranch:H,openPRs:cn,defaultBranch:A,branchCommitPreviews:lt,branchParentByName:un,branchUniqueAheadCounts:Yt,gridSearchQuery:De,gridSearchJumpToken:se,gridSearchJumpDirection:O,gridFocusSha:pe,isLoading:mt||et,blockMapDisplay:Mo,blockMapInteraction:Go,mapReadyEpoch:Mt,onMapReadyForDisplay:Ro,onGridSearchResultCountChange:ee,onGridSearchResultIndexChange:Te,onGridSearchFocusChange:Oe,checkedOutRef:xt,onCommitClick:At,onMergeRefsIntoBranch:Do,mergeInProgress:te,onPushAllBranches:Co,onPushCurrentBranch:hi,onPushCommitTargets:M,pushInProgress:je,onDeleteSelection:F,deleteInProgress:Ye,worktrees:q,currentRepoPath:e!=null?e:void 0,onRemoveWorktree:No,removeWorktreeInProgress:fe,onSwitchToWorktree:vs,onStashLocalChanges:no,stashInProgress:Pt,stashDisabled:!1,onCommitLocalChanges:Qi,commitInProgress:Ot,commitDisabled:!1,onStageAllChanges:zi,stageInProgress:mn,onCreateBranchFromNode:$i,onCreateRootBranch:So,createBranchFromNodeInProgress:en,isMutationBusy:nn,isDebugOpen:Ys,onDebugClose:()=>co(!1),onInteractionChange:on,manuallyOpenedClumps:js,manuallyClosedClumps:gs,setManuallyOpenedClumps:Ms,setManuallyClosedClumps:zs,layoutModel:Yn,orientation:Qe,gridHudProps:qs})]})]})})})}var H3=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,U3={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=H3}var fs=U3,V3=`.icon-transitions-module__iconState___uqK9J {
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
}`,Y3={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=V3}var is=Y3,W3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),F3=({size:e=24,style:n={}})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),X3=({size:e=20,...n})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),G3=({size:e=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${is.iconState} ${n?is.hiddenScaled:is.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${is.iconState} ${n?is.visibleScaled:is.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),q3=({size:e=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${is.iconStateFast} ${i?is.visibleScaled:u?is.sending:is.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${is.iconStateFast} ${a?is.visibleScaled:is.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${is.iconStateFast} ${c?is.visibleScaled:is.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},K3=({size:e=24,isOpen:n=!0})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${is.iconFade} ${n?is.visible:is.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${is.iconFade} ${n?is.hidden:is.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Q3=({size:e=24,isPaused:n=!1})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${is.iconFadeFast} ${n?is.hidden:is.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${is.iconFadeFast} ${n?is.visible:is.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Z3=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),J3=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),r2=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),ej=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),tj=({size:e=16})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),nj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),sj=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),oj=({size:e=24})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),ij=({size:e=16})=>l.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),aj=({size:e=24})=>l.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),l2=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],km=l2.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),pp="feedback-freeze-styles",jm="__agentation_freeze";function rj(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[jm]||(e[jm]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[jm]}var Cn=rj();typeof window<"u"&&!Cn.installed&&(Cn.origSetTimeout=window.setTimeout.bind(window),Cn.origSetInterval=window.setInterval.bind(window),Cn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,n,...i)=>typeof e=="string"?Cn.origSetTimeout(e,n):Cn.origSetTimeout((...a)=>{Cn.frozen?Cn.frozenTimeoutQueue.push(()=>e(...a)):e(...a)},n,...i),window.setInterval=(e,n,...i)=>typeof e=="string"?Cn.origSetInterval(e,n):Cn.origSetInterval((...a)=>{Cn.frozen||e(...a)},n,...i),window.requestAnimationFrame=e=>Cn.origRAF(n=>{Cn.frozen?Cn.frozenRAFQueue.push(e):e(n)}),Cn.installed=!0);var Wt=Cn.origSetTimeout,lj=Cn.origSetInterval,Al=Cn.origRAF;function cj(e){return e?l2.some(n=>{var i;return!!((i=e.closest)!=null&&i.call(e,`[${n}]`))}):!1}function uj(){if(typeof document>"u"||Cn.frozen)return;Cn.frozen=!0,Cn.frozenTimeoutQueue=[],Cn.frozenRAFQueue=[];let e=document.getElementById(pp);e||(e=document.createElement("style"),e.id=pp),e.textContent=`
    *${km},
    *${km}::before,
    *${km}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Cn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;cj(i)||(n.pause(),Cn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function bx(){var i;if(typeof document>"u"||!Cn.frozen)return;Cn.frozen=!1;const e=Cn.frozenTimeoutQueue;Cn.frozenTimeoutQueue=[];for(const a of e)Cn.origSetTimeout(()=>{if(Cn.frozen){Cn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=Cn.frozenRAFQueue;Cn.frozenRAFQueue=[];for(const a of n)Cn.origRAF(c=>{if(Cn.frozen){Cn.frozenRAFQueue.push(a);return}a(c)});for(const a of Cn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}Cn.pausedAnimations=[],(i=document.getElementById(pp))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Mm(e){if(!e)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{e.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var qd=_.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:y,style:g,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:C=!1,computedStyles:j},T){const[E,N]=_.useState(u),[H,L]=_.useState(!1),[A,X]=_.useState("initial"),[W,Y]=_.useState(!1),[q,ue]=_.useState(!1),fe=_.useRef(null),_e=_.useRef(null),De=_.useRef(null),qe=_.useRef(null);_.useEffect(()=>{b&&A!=="exit"&&X("exit")},[b,A]),_.useEffect(()=>{Wt(()=>{X("enter")},0);const me=Wt(()=>{X("entered")},200),be=Wt(()=>{const $=fe.current;$&&(Mm($),$.selectionStart=$.selectionEnd=$.value.length,$.scrollTop=$.scrollHeight)},50);return()=>{clearTimeout(me),clearTimeout(be),De.current&&clearTimeout(De.current),qe.current&&clearTimeout(qe.current)}},[]);const se=_.useCallback(()=>{qe.current&&clearTimeout(qe.current),L(!0),qe.current=Wt(()=>{L(!1),Mm(fe.current)},250)},[]);_.useImperativeHandle(T,()=>({shake:se}),[se]);const he=_.useCallback(()=>{X("exit"),De.current=Wt(()=>{p()},150)},[p]),O=_.useCallback(()=>{E.trim()&&h(E.trim())},[E,h]),oe=_.useCallback(me=>{me.stopPropagation(),!me.nativeEvent.isComposing&&(me.key==="Enter"&&!me.shiftKey&&(me.preventDefault(),O()),me.key==="Escape"&&he())},[O,he]),P=[fs.popup,C?fs.light:"",A==="enter"?fs.enter:"",A==="entered"?fs.entered:"",A==="exit"?fs.exit:"",H?fs.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:_e,className:P,"data-annotation-popup":!0,style:g,onClick:me=>me.stopPropagation(),children:[l.jsxs("div",{className:fs.header,children:[j&&Object.keys(j).length>0?l.jsxs("button",{className:fs.headerToggle,onClick:()=>{const me=q;ue(!q),me&&Wt(()=>Mm(fe.current),0)},type:"button",children:[l.jsx("svg",{className:`${fs.chevron} ${q?fs.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:fs.element,children:n})]}):l.jsx("span",{className:fs.element,children:n}),i&&l.jsx("span",{className:fs.timestamp,children:i})]}),j&&Object.keys(j).length>0&&l.jsx("div",{className:`${fs.stylesWrapper} ${q?fs.expanded:""}`,children:l.jsx("div",{className:fs.stylesInner,children:l.jsx("div",{className:fs.stylesBlock,children:Object.entries(j).map(([me,be])=>l.jsxs("div",{className:fs.styleLine,children:[l.jsx("span",{className:fs.styleProperty,children:me.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:fs.styleValue,children:be}),";"]},me))})})}),a&&l.jsxs("div",{className:fs.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:fe,className:fs.textarea,style:{borderColor:W?x:void 0},placeholder:c,value:E,onChange:me=>N(me.target.value),onFocus:()=>Y(!0),onBlur:()=>Y(!1),rows:2,onKeyDown:oe}),l.jsxs("div",{className:fs.actions,children:[y&&l.jsx("div",{className:fs.deleteWrapper,children:l.jsx("button",{className:fs.deleteButton,onClick:y,type:"button",children:l.jsx(oj,{size:22})})}),l.jsx("button",{className:fs.cancel,onClick:he,children:"Cancel"}),l.jsx("button",{className:fs.submit,style:{backgroundColor:x,opacity:E.trim()?1:.4},onClick:O,disabled:!E.trim(),children:d})]})]})}),dj=({content:e,children:n,...i})=>{const[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,p]=_.useState({top:0,right:0}),y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=()=>{if(y.current){const T=y.current.getBoundingClientRect();p({top:T.top+T.height/2,right:window.innerWidth-T.left+8})}},C=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),g.current=Wt(()=>{c(!0)},500)},j=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),x.current=Wt(()=>{d(!1)},150)};return _.useEffect(()=>()=>{g.current&&clearTimeout(g.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:y,onMouseEnter:C,onMouseLeave:j,...i,children:n}),u&&zl.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},fj=`.styles-module__tooltip___mcXL2 {
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
}`,hj={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=fj}var vx=hj,Ir=({content:e})=>l.jsx(dj,{className:vx.tooltip,content:e,children:l.jsx(X3,{className:vx.tooltipIcon})}),Tt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},c2=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Tt.navigation},{type:"header",label:"Header",...Tt.header},{type:"hero",label:"Hero",...Tt.hero},{type:"section",label:"Section",...Tt.section},{type:"sidebar",label:"Sidebar",...Tt.sidebar},{type:"footer",label:"Footer",...Tt.footer},{type:"modal",label:"Modal",...Tt.modal},{type:"banner",label:"Banner",...Tt.banner},{type:"drawer",label:"Drawer",...Tt.drawer},{type:"popover",label:"Popover",...Tt.popover},{type:"divider",label:"Divider",...Tt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Tt.card},{type:"text",label:"Text",...Tt.text},{type:"image",label:"Image",...Tt.image},{type:"video",label:"Video",...Tt.video},{type:"table",label:"Table",...Tt.table},{type:"grid",label:"Grid",...Tt.grid},{type:"list",label:"List",...Tt.list},{type:"chart",label:"Chart",...Tt.chart},{type:"codeBlock",label:"Code Block",...Tt.codeBlock},{type:"map",label:"Map",...Tt.map},{type:"timeline",label:"Timeline",...Tt.timeline},{type:"calendar",label:"Calendar",...Tt.calendar},{type:"accordion",label:"Accordion",...Tt.accordion},{type:"carousel",label:"Carousel",...Tt.carousel},{type:"logo",label:"Logo",...Tt.logo},{type:"faq",label:"FAQ",...Tt.faq},{type:"gallery",label:"Gallery",...Tt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Tt.button},{type:"input",label:"Input",...Tt.input},{type:"search",label:"Search",...Tt.search},{type:"form",label:"Form",...Tt.form},{type:"tabs",label:"Tabs",...Tt.tabs},{type:"dropdown",label:"Dropdown",...Tt.dropdown},{type:"toggle",label:"Toggle",...Tt.toggle},{type:"stepper",label:"Stepper",...Tt.stepper},{type:"rating",label:"Rating",...Tt.rating},{type:"fileUpload",label:"File Upload",...Tt.fileUpload},{type:"checkbox",label:"Checkbox",...Tt.checkbox},{type:"radio",label:"Radio",...Tt.radio},{type:"slider",label:"Slider",...Tt.slider},{type:"datePicker",label:"Date Picker",...Tt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Tt.avatar},{type:"badge",label:"Badge",...Tt.badge},{type:"tag",label:"Tag",...Tt.tag},{type:"breadcrumb",label:"Breadcrumb",...Tt.breadcrumb},{type:"pagination",label:"Pagination",...Tt.pagination},{type:"progress",label:"Progress",...Tt.progress},{type:"alert",label:"Alert",...Tt.alert},{type:"toast",label:"Toast",...Tt.toast},{type:"notification",label:"Notification",...Tt.notification},{type:"tooltip",label:"Tooltip",...Tt.tooltip},{type:"stat",label:"Stat",...Tt.stat},{type:"skeleton",label:"Skeleton",...Tt.skeleton},{type:"chip",label:"Chip",...Tt.chip},{type:"icon",label:"Icon",...Tt.icon},{type:"spinner",label:"Spinner",...Tt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Tt.pricing},{type:"testimonial",label:"Testimonial",...Tt.testimonial},{type:"cta",label:"CTA",...Tt.cta},{type:"productCard",label:"Product Card",...Tt.productCard},{type:"profile",label:"Profile",...Tt.profile},{type:"feature",label:"Feature",...Tt.feature},{type:"team",label:"Team",...Tt.team},{type:"login",label:"Login",...Tt.login},{type:"contact",label:"Contact",...Tt.contact}]}],sa={};for(const e of c2)for(const n of e.items)sa[n.type]=n;function Fe({w:e,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function es({w:e,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function li({size:e}){return l.jsx("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function mj({width:e,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:e*.02},children:[l.jsx(es,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[l.jsx(Fe,{w:e*.06}),l.jsx(Fe,{w:e*.07}),l.jsx(Fe,{w:e*.05}),l.jsx(Fe,{w:e*.06})]}),l.jsx(es,{w:e*.1,h:Math.min(28,n*.5),radius:4})]})}function pj({width:e,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Fe,{w:e*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Fe,{w:e*.6}),l.jsx(Fe,{w:e*.4}),l.jsx(es,{w:Math.min(140,e*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function _j({width:e,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Fe,{w:e*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(es,{w:10,h:10,radius:2}),l.jsx(Fe,{w:e*(.4+c*17%30/100)})]},c))]})}function gj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:"60%",h:3,strong:!0}),l.jsx(Fe,{w:"80%",h:2}),l.jsx(Fe,{w:"70%",h:2}),l.jsx(Fe,{w:"60%",h:2})]},c))})}function yj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Fe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Fe,{w:"90%"}),l.jsx(Fe,{w:"70%"}),l.jsx(Fe,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(es,{w:70,h:26,radius:4}),l.jsx(es,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function xj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"70%",h:4,strong:!0}),l.jsx(Fe,{w:"95%",h:2}),l.jsx(Fe,{w:"85%",h:2}),l.jsx(Fe,{w:"50%",h:2})]})]})}function bj({width:e,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Fe,{w:e*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Fe,{w:`${70+u*13%25}%`,h:2},u))]})}function vj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:e,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:e,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e*.3,cy:n*.3,r:Math.min(e,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function wj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(e/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Fe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Fe,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function Sj({width:e,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(li,{size:8}),l.jsx(Fe,{w:`${55+c*17%35}%`,h:2})]},c))})}function Cj({width:e,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Fe,{w:Math.max(20,e*.5),h:3,strong:!0})})}function kj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Fe,{w:Math.min(80,e*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Fe,{w:"40%",h:2})})]})}function jj({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:60+c*17%30,h:2}),l.jsx(es,{w:"100%",h:28,radius:4})]},c)),l.jsx(es,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Mj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Fe,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Fe,{w:"80%",h:2}),l.jsx(Fe,{w:"65%",h:2}),l.jsx(Fe,{w:"75%",h:2})]})]})}function Ej({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:e/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${e/2-i*.55} ${n*.78} C${e/2-i*.55} ${n*.55} ${e/2+i*.55} ${n*.55} ${e/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Tj({width:e,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Fe,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Aj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Fe,{w:e*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Fe,{w:e*.35})]})}function Nj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:e*.04},children:[l.jsx(Fe,{w:e*.3,h:4,strong:!0}),l.jsx(Fe,{w:e*.7}),l.jsx(Fe,{w:e*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:n*.06},children:[l.jsx(es,{w:"33%",h:"100%",radius:4}),l.jsx(es,{w:"33%",h:"100%",radius:4}),l.jsx(es,{w:"33%",h:"100%",radius:4})]})]})}function Dj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(es,{w:"100%",h:"100%",radius:4},u))})}function Rj({width:e,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Fe,{w:e*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Fe,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Bj({width:e,height:n}){const i=Math.min(e,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:e-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:e-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function Lj({width:e,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(li,{size:Math.min(14,n*.4)}),l.jsx(Fe,{w:"50%",h:2})]})}function Oj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(li,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"60%",h:3,strong:!0}),l.jsx(Fe,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function zj({width:e,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:e,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:e*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function $j({width:e,height:n}){const i=Math.max(3,Math.min(7,Math.floor(e/50))),a=e/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(es,{w:a,h:`${d}%`,radius:2},u)})})}function Ij({width:e,height:n}){const i=Math.min(e,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(es,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function Pj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Fe,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Hj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Fe,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function Uj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(es,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Vj({width:e}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Yj({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Fe,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function Wj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(es,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(li,{size:5}),l.jsx(li,{size:5}),l.jsx(li,{size:5})]})]})}function Fj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Fe,{w:e*.4,h:3,strong:!0}),l.jsx(Fe,{w:e*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(li,{size:5}),l.jsx(Fe,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(es,{w:e*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Xj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:"90%",h:2}),l.jsx(Fe,{w:"75%",h:2}),l.jsx(Fe,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(li,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Fe,{w:60,h:3,strong:!0}),l.jsx(Fe,{w:40,h:2})]})]})]})}function Gj({width:e,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Fe,{w:e*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Fe,{w:e*.35}),l.jsx(es,{w:Math.min(140,e*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function qj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"40%",h:3,strong:!0}),l.jsx(Fe,{w:"70%",h:2})]})]})}function Kj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Fe,{w:e*.4,h:3,strong:!0}),l.jsx(es,{w:60,h:Math.min(24,n*.6),radius:4})]})}function Qj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Fe,{w:e*.5,h:2}),l.jsx(Fe,{w:e*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Fe,{w:e*.3,h:2})]})}function Zj({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(e/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function Jj({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Fe,{w:Math.max(16,e*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function e8({width:e,height:n}){const a=Math.min(n*.7,e/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function t8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:e,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:e,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:e*.4,y1:0,x2:e*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function n8({width:e,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(li,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Fe,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function s8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Fe,{w:e*.4,h:2}),l.jsx(Fe,{w:e*.25,h:2})]})}function o8({width:e,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(li,{size:6}),l.jsx(li,{size:6}),l.jsx(li,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Fe,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function i8({width:e,height:n}){const c=Math.min((e-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fe,{w:e*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Fe,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function a8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(li,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:"50%",h:3,strong:!0}),l.jsx(Fe,{w:"75%",h:2})]}),l.jsx(Fe,{w:30,h:2})]})}function r8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"65%",h:4,strong:!0}),l.jsx(Fe,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Fe,{w:"30%",h:5,strong:!0}),l.jsx(es,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function l8({width:e,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(li,{size:i}),l.jsx(Fe,{w:e*.45,h:4,strong:!0}),l.jsx(Fe,{w:e*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:e*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Fe,{w:20,h:3,strong:!0}),l.jsx(Fe,{w:28,h:2})]})]})]})}function c8({width:e,height:n}){const i=Math.max(e*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:e-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Fe,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Fe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function u8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Fe,{w:"70%",h:3,strong:!0}),l.jsx(Fe,{w:"90%",h:2}),l.jsx(Fe,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function d8({width:e,height:n}){const i=Math.min(n*.7,e*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[l.jsx(es,{w:i,h:i,radius:i*.25}),l.jsx(Fe,{w:e*.45,h:Math.max(4,n*.2),strong:!0})]})}function f8({width:e,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Fe,{w:e*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function h8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function m8({width:e,height:n}){const i=Math.min(e,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function p8({width:e,height:n}){const i=Math.min(e,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:e/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function _8({width:e,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=e*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function g8({width:e,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((e-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Fe,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fe,{w:e*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function y8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function x8({width:e,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Fe,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function b8({width:e,height:n}){const i=Math.min(e,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:l.jsx("path",{d:`M${e/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function v8({width:e,height:n}){const i=Math.min(e,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[l.jsx("circle",{cx:e/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${e/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function w8({width:e,height:n}){const i=Math.min(36,n*.25,e*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[l.jsx(es,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Fe,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Fe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function S8({width:e,height:n}){const i=Math.max(2,Math.min(4,Math.floor(e/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Fe,{w:e*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(li,{size:a}),l.jsx(Fe,{w:e*.12,h:3,strong:!0}),l.jsx(Fe,{w:e*.08,h:2})]},u))})]})}function C8({width:e,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:n*.04},children:[l.jsx(Fe,{w:e*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Fe,{w:e*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:Math.min(60,e*.2),h:2}),l.jsx(es,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(es,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Fe,{w:e*.4,h:2})]})}function k8({width:e,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:n*.03},children:[l.jsx(Fe,{w:e*.4,h:4,strong:!0}),l.jsx(Fe,{w:e*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:50,h:2}),l.jsx(es,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:40,h:2}),l.jsx(es,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Fe,{w:50,h:2}),l.jsx(es,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Fe,{w:60,h:2}),l.jsx(es,{w:"100%",h:"100%",radius:4})]}),l.jsx(es,{w:Math.min(120,e*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var j8={navigation:mj,hero:pj,sidebar:_j,footer:gj,modal:yj,card:xj,text:bj,image:vj,table:wj,list:Sj,button:Cj,input:kj,form:jj,tabs:Mj,avatar:Ej,badge:Tj,header:Aj,section:Nj,grid:Dj,dropdown:Rj,toggle:Bj,search:Lj,toast:Oj,progress:zj,chart:$j,video:Ij,tooltip:Pj,breadcrumb:Hj,pagination:Uj,divider:Vj,accordion:Yj,carousel:Wj,pricing:Fj,testimonial:Xj,cta:Gj,alert:qj,banner:Kj,stat:Qj,stepper:Zj,tag:Jj,rating:e8,map:t8,timeline:n8,fileUpload:s8,codeBlock:o8,calendar:i8,notification:a8,productCard:r8,profile:l8,drawer:c8,popover:u8,logo:d8,faq:f8,gallery:h8,checkbox:m8,radio:p8,slider:_8,datePicker:g8,skeleton:y8,chip:x8,icon:b8,spinner:v8,feature:w8,team:S8,login:C8,contact:k8};function M8({type:e,width:n,height:i,text:a}){const c=j8[e];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var E8=`svg[fill=none] {
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
}`,T8={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=E8}var $e=T8,Sl=24,pd=5;function wx(e,n,i,a,c){let u=1/0,d=1/0;const h=e.x,p=e.x+e.width,y=e.x+e.width/2,g=e.y,x=e.y+e.height,b=e.y+e.height/2,C=!a,j=C?[h,p,y]:[...a.left?[h]:[],...a.right?[p]:[]],T=C?[g,x,b]:[...a.top?[g]:[],...a.bottom?[x]:[]],E=[];for(const _e of n)i.has(_e.id)||E.push(_e);c&&E.push(...c);for(const _e of E){const De=_e.x,qe=_e.x+_e.width,se=_e.x+_e.width/2,he=_e.y,O=_e.y+_e.height,oe=_e.y+_e.height/2;for(const P of j)for(const me of[De,qe,se]){const be=me-P;Math.abs(be)<pd&&Math.abs(be)<Math.abs(u)&&(u=be)}for(const P of T)for(const me of[he,O,oe]){const be=me-P;Math.abs(be)<pd&&Math.abs(be)<Math.abs(d)&&(d=be)}}const N=Math.abs(u)<pd?u:0,H=Math.abs(d)<pd?d:0,L=[],A=new Set,X=h+N,W=p+N,Y=y+N,q=g+H,ue=x+H,fe=b+H;for(const _e of E){const De=_e.x,qe=_e.x+_e.width,se=_e.x+_e.width/2,he=_e.y,O=_e.y+_e.height,oe=_e.y+_e.height/2;for(const P of[De,se,qe])for(const me of[X,Y,W])if(Math.abs(me-P)<.5){const be=`x:${Math.round(P)}`;A.has(be)||(A.add(be),L.push({axis:"x",pos:P}))}for(const P of[he,oe,O])for(const me of[q,fe,ue])if(Math.abs(me-P)<.5){const be=`y:${Math.round(P)}`;A.has(be)||(A.add(be),L.push({axis:"y",pos:P}))}}return{dx:N,dy:H,guides:L}}function Sx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function A8({placements:e,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:y,onSelectionChange:g,deselectSignal:x,onDragMove:b,onDragEnd:C,clearSignal:j,wireframe:T}){const[E,N]=_.useState(new Set),[H,L]=_.useState(null),[A,X]=_.useState(null),[W,Y]=_.useState(null),[q,ue]=_.useState([]),[fe,_e]=_.useState(null),[De,qe]=_.useState(!1),se=_.useRef(!1),[he,O]=_.useState(new Set),oe=_.useRef(new Map),P=_.useRef(null),me=_.useRef(null),be=_.useRef(e);be.current=e;const $=_.useRef(g);$.current=g;const ie=_.useRef(b);ie.current=b;const ee=_.useRef(C);ee.current=C;const ve=_.useRef(x);_.useEffect(()=>{x!==ve.current&&(ve.current=x,N(new Set))},[x]);const Te=_.useRef(j);_.useEffect(()=>{if(j!==void 0&&j!==Te.current){Te.current=j;const Z=new Set(be.current.map(Re=>Re.id));Z.size>0&&(O(Z),N(new Set),me.current=null,Wt(()=>{n([]),O(new Set)},180))}},[j,n]),_.useEffect(()=>{const Z=Re=>{const dt=Re.target;if(!(dt.tagName==="INPUT"||dt.tagName==="TEXTAREA"||dt.isContentEditable)){if((Re.key==="Backspace"||Re.key==="Delete")&&E.size>0){Re.preventDefault();const gt=new Set(E);O(gt),N(new Set),Wt(()=>{n(be.current.filter(Ue=>!gt.has(Ue.id))),O(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Re.key)&&E.size>0){Re.preventDefault();const gt=Re.shiftKey?20:1,Ue=Re.key==="ArrowLeft"?-gt:Re.key==="ArrowRight"?gt:0,vt=Re.key==="ArrowUp"?-gt:Re.key==="ArrowDown"?gt:0;n(e.map(yt=>E.has(yt.id)?{...yt,x:Math.max(0,yt.x+Ue),y:Math.max(0,yt.y+vt)}:yt));return}if(Re.key==="Escape"){i?a(null):E.size>0&&N(new Set);return}}};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[E,i,e,n,a]);const pe=_.useCallback(Z=>{if(Z.button!==0||p||Z.target.closest(`.${$e.placement}`))return;Z.preventDefault(),Z.stopPropagation();const dt=window.scrollY,rt=Z.clientX,gt=Z.clientY;if(i){me.current="place",d==null||d(!0);let Ue=!1,vt=rt,yt=gt;const Et=it=>{vt=it.clientX,yt=it.clientY;const V=Math.abs(vt-rt),te=Math.abs(yt-gt);if((V>5||te>5)&&(Ue=!0),Ue){const Se=Math.min(rt,vt),je=Math.min(gt,yt),nt=Math.abs(vt-rt),Ye=Math.abs(yt-gt);L({x:Se,y:je,w:nt,h:Ye}),Y({x:it.clientX+12,y:it.clientY+12,text:`${Math.round(nt)} × ${Math.round(Ye)}`})}},Ke=it=>{window.removeEventListener("mousemove",Et),window.removeEventListener("mouseup",Ke),L(null),Y(null),me.current=null,d==null||d(!1);const V=Tt[i];let te,Se,je,nt;Ue?(te=Math.min(rt,vt),Se=Math.min(gt,yt)+dt,je=Math.max(Sl,Math.abs(vt-rt)),nt=Math.max(Sl,Math.abs(yt-gt))):(je=V.width,nt=V.height,te=rt-je/2,Se=gt+dt-nt/2),te=Math.max(0,te),Se=Math.max(0,Se);const Ye={id:Sx(),type:i,x:te,y:Se,width:je,height:nt,scrollY:dt,timestamp:Date.now()},Ne=[...e,Ye];n(Ne),N(new Set([Ye.id])),a(null)};window.addEventListener("mousemove",Et),window.addEventListener("mouseup",Ke)}else{Z.shiftKey||N(new Set),me.current="select";let Ue=!1;const vt=Et=>{const Ke=Math.abs(Et.clientX-rt),it=Math.abs(Et.clientY-gt);if((Ke>4||it>4)&&(Ue=!0),Ue){const V=Math.min(rt,Et.clientX),te=Math.min(gt,Et.clientY);X({x:V,y:te,w:Math.abs(Et.clientX-rt),h:Math.abs(Et.clientY-gt)})}},yt=Et=>{if(window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",yt),me.current=null,Ue){const Ke=Math.min(rt,Et.clientX),it=Math.min(gt,Et.clientY)+dt,V=Math.abs(Et.clientX-rt),te=Math.abs(Et.clientY-gt),Se=new Set(Z.shiftKey?E:new Set);for(const je of e)je.y-dt,je.x+je.width>Ke&&je.x<Ke+V&&je.y+je.height>it&&je.y<it+te&&Se.add(je.id);N(Se)}X(null)};window.addEventListener("mousemove",vt),window.addEventListener("mouseup",yt)}},[i,p,e,n,E]),Oe=_.useCallback((Z,Re)=>{var Ye;if(Z.button!==0)return;const dt=Z.target;if(dt.closest(`.${$e.handle}`)||dt.closest(`.${$e.deleteButton}`))return;Z.preventDefault(),Z.stopPropagation();let rt;Z.shiftKey?(rt=new Set(E),rt.has(Re)?rt.delete(Re):rt.add(Re)):E.has(Re)?rt=new Set(E):rt=new Set([Re]),N(rt),(rt.size!==E.size||[...rt].some(Ne=>!E.has(Ne)))&&((Ye=$.current)==null||Ye.call($,rt,Z.shiftKey));const Ue=Z.clientX,vt=Z.clientY,yt=new Map;for(const Ne of e)rt.has(Ne.id)&&yt.set(Ne.id,{x:Ne.x,y:Ne.y});me.current="move",d==null||d(!0);let Et=!1,Ke=!1,it=e,V=0,te=0;const Se=new Map;for(const Ne of e)yt.has(Ne.id)&&Se.set(Ne.id,{w:Ne.width,h:Ne.height});const je=Ne=>{var cn;const xe=Ne.clientX-Ue,ot=Ne.clientY-vt;if((Math.abs(xe)>2||Math.abs(ot)>2)&&(Et=!0),!Et)return;if(Ne.altKey&&!Ke){Ke=!0;const ft=[];for(const Pt of e)yt.has(Pt.id)&&ft.push({...Pt,id:Sx(),timestamp:Date.now()});it=[...e,...ft]}let Xe=1/0,st=1/0,Be=-1/0,tt=-1/0;for(const[ft,Pt]of yt){const hn=Se.get(ft);hn&&(Xe=Math.min(Xe,Pt.x+xe),st=Math.min(st,Pt.y+ot),Be=Math.max(Be,Pt.x+xe+hn.w),tt=Math.max(tt,Pt.y+ot+hn.h))}const wt={x:Xe,y:st,width:Be-Xe,height:tt-st},{dx:Ct,dy:Ze,guides:Bt}=wx(wt,it,new Set(yt.keys()),void 0,y);ue(Bt);const kt=xe+Ct,pt=ot+Ze;V=kt,te=pt,n(it.map(ft=>{const Pt=yt.get(ft.id);return Pt?{...ft,x:Math.max(0,Pt.x+kt),y:Math.max(0,Pt.y+pt)}:ft})),(cn=ie.current)==null||cn.call(ie,kt,pt)},nt=()=>{var Ne;window.removeEventListener("mousemove",je),window.removeEventListener("mouseup",nt),me.current=null,d==null||d(!1),ue([]),(Ne=ee.current)==null||Ne.call(ee,V,te,Et)};window.addEventListener("mousemove",je),window.addEventListener("mouseup",nt)},[E,e,n,d]),et=_.useCallback((Z,Re,dt)=>{Z.preventDefault(),Z.stopPropagation();const rt=e.find(Se=>Se.id===Re);if(!rt)return;N(new Set([Re])),me.current="resize",d==null||d(!0);const gt=Z.clientX,Ue=Z.clientY,vt=rt.width,yt=rt.height,Et=rt.x,Ke=rt.y,it={left:dt.includes("w"),right:dt.includes("e"),top:dt.includes("n"),bottom:dt.includes("s")},V=Se=>{const je=Se.clientX-gt,nt=Se.clientY-Ue;let Ye=vt,Ne=yt,xe=Et,ot=Ke;dt.includes("e")&&(Ye=Math.max(Sl,vt+je)),dt.includes("w")&&(Ye=Math.max(Sl,vt-je),xe=Et+vt-Ye),dt.includes("s")&&(Ne=Math.max(Sl,yt+nt)),dt.includes("n")&&(Ne=Math.max(Sl,yt-nt),ot=Ke+yt-Ne);const Xe={x:xe,y:ot,width:Ye,height:Ne},{dx:st,dy:Be,guides:tt}=wx(Xe,be.current,new Set([Re]),it,y);ue(tt),st!==0&&(it.right?Ye+=st:it.left&&(xe+=st,Ye-=st)),Be!==0&&(it.bottom?Ne+=Be:it.top&&(ot+=Be,Ne-=Be)),n(be.current.map(wt=>wt.id===Re?{...wt,x:xe,y:ot,width:Ye,height:Ne}:wt)),Y({x:Se.clientX+12,y:Se.clientY+12,text:`${Math.round(Ye)} × ${Math.round(Ne)}`})},te=()=>{window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",te),Y(null),me.current=null,d==null||d(!1),ue([])};window.addEventListener("mousemove",V),window.addEventListener("mouseup",te)},[e,n,d]),We=_.useCallback(Z=>{me.current=null,O(Re=>{const dt=new Set(Re);return dt.add(Z),dt}),N(Re=>{const dt=new Set(Re);return dt.delete(Z),dt}),Wt(()=>{n(be.current.filter(Re=>Re.id!==Z)),O(Re=>{const dt=new Set(Re);return dt.delete(Z),dt})},180)},[n]),mt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Nt=_.useCallback(Z=>{const Re=e.find(dt=>dt.id===Z);Re&&(se.current=!!Re.text,_e(Z),qe(!1))},[e]),Mt=_.useCallback(()=>{fe&&(qe(!0),Wt(()=>{_e(null),qe(!1)},150))},[fe]);_.useEffect(()=>{u&&fe&&Mt()},[u]);const ut=_.useCallback(Z=>{fe&&(n(e.map(Re=>Re.id===fe?{...Re,text:Z.trim()||void 0}:Re)),Mt())},[fe,e,n,Mt]),$t=typeof window<"u"?window.scrollY:0,_t=["nw","ne","se","sw"],Gt=T?"#f97316":"#3c82f7",Jt=[{dir:"n",cls:$e.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Gt})})},{dir:"e",cls:$e.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Gt})})},{dir:"s",cls:$e.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Gt})})},{dir:"w",cls:$e.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Gt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:P,className:`${$e.overlay} ${c?"":$e.light} ${i?$e.placing:""} ${p?$e.passthrough:""} ${u?$e.overlayExiting:""} ${T?$e.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:pe,children:e.map(Z=>{var gt;const Re=E.has(Z.id),dt=((gt=sa[Z.type])==null?void 0:gt.label)||Z.type,rt=Z.y-$t;return l.jsxs("div",{"data-design-placement":Z.id,className:`${$e.placement} ${Re?$e.selected:""} ${he.has(Z.id)?$e.exiting:""}`,style:{left:Z.x,top:rt,width:Z.width,height:Z.height,position:"fixed"},onMouseDown:Ue=>Oe(Ue,Z.id),onDoubleClick:()=>Nt(Z.id),children:[l.jsx("span",{className:$e.placementLabel,children:dt}),l.jsx("span",{className:`${$e.placementAnnotation} ${Z.text?$e.annotationVisible:""}`,children:(Z.text&&oe.current.set(Z.id,Z.text),Z.text||oe.current.get(Z.id)||"")}),l.jsx("div",{className:$e.placementContent,children:l.jsx(M8,{type:Z.type,width:Z.width,height:Z.height,text:Z.text})}),l.jsx("div",{className:$e.deleteButton,onMouseDown:Ue=>Ue.stopPropagation(),onClick:()=>We(Z.id),children:"✕"}),_t.map(Ue=>l.jsx("div",{className:`${$e.handle} ${$e[`handle${Ue.charAt(0).toUpperCase()}${Ue.slice(1)}`]}`,onMouseDown:vt=>et(vt,Z.id,Ue)},Ue)),Jt.map(({dir:Ue,cls:vt,arrow:yt})=>l.jsx("div",{className:`${$e.edgeHandle} ${vt}`,onMouseDown:Et=>et(Et,Z.id,Ue),children:yt},Ue))]},Z.id)})}),fe&&(()=>{var Ke,it;const Z=e.find(V=>V.id===fe);if(!Z)return null;const Re=Z.y-$t,dt=Z.x+Z.width/2,rt=Re-8,gt=Re+Z.height+8,Ue=rt>200,vt=gt<window.innerHeight-100,yt=Math.max(160,Math.min(window.innerWidth-160,dt));let Et;return Ue?Et={left:yt,bottom:window.innerHeight-rt}:vt?Et={left:yt,top:gt}:Et={left:yt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(qd,{element:((Ke=sa[Z.type])==null?void 0:Ke.label)||Z.type,placeholder:mt[Z.type]||"Label or content text",initialValue:(it=Z.text)!=null?it:"",submitLabel:se.current?"Save":"Set",onSubmit:ut,onCancel:Mt,onDelete:se.current?()=>{ut("")}:void 0,isExiting:De,lightMode:!c,style:Et})})(),H&&l.jsx("div",{className:$e.drawBox,style:{left:H.x,top:H.y,width:H.w,height:H.h},"data-feedback-toolbar":!0}),A&&l.jsx("div",{className:$e.selectBox,style:{left:A.x,top:A.y,width:A.w,height:A.h},"data-feedback-toolbar":!0}),W&&l.jsx("div",{className:$e.sizeIndicator,style:{left:W.x,top:W.y},"data-feedback-toolbar":!0,children:W.text}),q.map((Z,Re)=>l.jsx("div",{className:$e.guideLine,style:Z.axis==="x"?{position:"fixed",left:Z.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:Z.pos-$t,right:0,height:1},"data-feedback-toolbar":!0},`${Z.axis}-${Z.pos}-${Re}`))]})}function N8(e){if(!e)return"";const n=e.scrollTop>2,i=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${n?$e.fadeTop:""} ${i?$e.fadeBottom:""}`}var I="currentColor",ze="0.5";function D8({type:e}){switch(e){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:I,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:I,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:I,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:I,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:I,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:I,strokeWidth:ze})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:I,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:I,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:I,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:I,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:I,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:I,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:I,strokeWidth:ze})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:I,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:I,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:I,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:I,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:I,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:I,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:I,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:I,strokeWidth:ze,fill:I,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:I,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:I,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:I,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:I,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:I,strokeWidth:ze})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:I,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:I,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:I,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:I,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:I,strokeWidth:ze})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:I,strokeWidth:ze,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:I,strokeWidth:ze,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:I,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:I,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:I,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:I,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:I,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:I,strokeWidth:ze}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:I,strokeWidth:ze,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:I,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:I,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:I,strokeWidth:ze})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:I,strokeWidth:ze})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:I,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:I,strokeWidth:ze,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:I,strokeWidth:ze}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:I,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:I,strokeWidth:ze}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:I,strokeWidth:ze}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:I,strokeWidth:ze})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:I,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:I,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:I,strokeWidth:ze,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:I,strokeWidth:ze,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:I,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:I,opacity:".15",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:I,strokeWidth:ze})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:I,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:I,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:I,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:I,strokeWidth:ze})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:I,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:I,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:I,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:I,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:I,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:I,strokeWidth:ze,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:I,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:I,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:I,strokeWidth:ze})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:I,strokeWidth:ze,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:I,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:I,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:I,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:I,strokeWidth:ze})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:I,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:I,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:I,opacity:".2",stroke:I,strokeWidth:ze}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:I,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:I,strokeWidth:ze}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:I,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:I,strokeWidth:ze})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:I,strokeWidth:ze,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:I,strokeWidth:ze,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:I,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:I,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:I,strokeWidth:ze,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:I,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:I,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:I,opacity:".15",stroke:I,strokeWidth:ze})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:I,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:I,opacity:".2",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:I,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:I,strokeWidth:ze,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:I,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:I,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:I,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:I,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:I,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:I,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:I,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:I,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:I,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:I,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:I,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:I,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:I,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:I,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:I,strokeWidth:ze,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:I,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:I,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:I,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:I,strokeWidth:ze})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:I,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:I,strokeWidth:ze,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:I,strokeWidth:ze})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:I,strokeWidth:ze}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:I,strokeWidth:ze,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:I,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:I,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:I,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:I,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:I,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:I,strokeWidth:ze})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:I,strokeWidth:ze,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:I,strokeWidth:ze}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:I,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:I,strokeWidth:ze})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:I,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:I,strokeWidth:ze,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:I,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:I,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:I,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:I,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:I,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:I,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:I,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:I,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:I,opacity:".08",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:I,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:I,strokeWidth:ze,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:I,strokeWidth:ze,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:I,strokeWidth:ze,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:I,strokeWidth:ze,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:I,strokeWidth:ze,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:I,strokeWidth:ze,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:I,strokeWidth:ze,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:I,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:I,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:I,strokeWidth:ze,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:I,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:I,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:I,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:I,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:I,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:I,strokeWidth:ze}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:I,opacity:".2"})]});default:return null}}function R8({activeType:e,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${$e.placeScroll} ${c||""}`,children:c2.map(d=>l.jsxs("div",{className:$e.paletteSection,children:[l.jsx("div",{className:$e.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${$e.paletteItem} ${e===h.type?$e.active:""} ${u?$e.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:$e.paletteItemIcon,children:l.jsx(D8,{type:h.type})}),l.jsx("span",{className:$e.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function B8({value:e,suffix:n}){const[i,a]=_.useState(null),[c,u]=_.useState(n),[d,h]=_.useState("up"),p=_.useRef(e),y=_.useRef(n),g=_.useRef(),x=i!==null&&c!==n;return _.useEffect(()=>{if(e!==p.current){if(e===0){p.current=e,y.current=n,a(null);return}h(e>p.current?"up":"down"),a(p.current),u(y.current),p.current=e,y.current=n,clearTimeout(g.current),g.current=Wt(()=>a(null),250)}else y.current=n},[e,n]),i===null?l.jsxs(l.Fragment,{children:[e,n?` ${n}`:""]}):x?l.jsxs("span",{className:$e.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[e," ",n]}),l.jsxs("span",{className:`${$e.rollingNum} ${d==="up"?$e.exitUp:$e.exitDown}`,children:[i," ",c]},`o${i}-${e}`),l.jsxs("span",{className:`${$e.rollingNum} ${d==="up"?$e.enterUp:$e.enterDown}`,children:[e," ",n]},`n${e}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:$e.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:e}),l.jsx("span",{className:`${$e.rollingNum} ${d==="up"?$e.exitUp:$e.exitDown}`,children:i},`o${i}-${e}`),l.jsx("span",{className:`${$e.rollingNum} ${d==="up"?$e.enterUp:$e.enterDown}`,children:e},`n${e}`)]}),n?` ${n}`:""]})}function L8({activeType:e,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:y,blankCanvas:g,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:C,Tooltip:j}){const[T,E]=_.useState(!1),[N,H]=_.useState("exit"),[L,A]=_.useState(!1),[X,W]=_.useState(!0),Y=_.useRef(0),q=_.useRef(""),ue=_.useRef(0),fe=_.useRef(),_e=_.useRef(null),[De,qe]=_.useState("");_.useEffect(()=>(u?(E(!0),clearTimeout(fe.current),cancelAnimationFrame(ue.current),ue.current=Al(()=>{ue.current=Al(()=>{H("enter")})})):(cancelAnimationFrame(ue.current),H("exit"),clearTimeout(fe.current),fe.current=Wt(()=>{E(!1),d==null||d()},200)),()=>cancelAnimationFrame(ue.current)),[u]);const se=h>0||a>0,he=h+a;return he>0&&(Y.current=he,q.current=g?he===1?"Component":"Components":he===1?"Change":"Changes"),_.useEffect(()=>{if(se)L?W(!1):(W(!0),A(!0),Al(()=>{Al(()=>{W(!1)})}));else{W(!0);const O=Wt(()=>A(!1),300);return()=>clearTimeout(O)}},[se]),_.useEffect(()=>{if(!T)return;const O=_e.current;if(!O)return;const oe=()=>qe(N8(O));oe(),O.addEventListener("scroll",oe,{passive:!0});const P=new ResizeObserver(oe);return P.observe(O),()=>{O.removeEventListener("scroll",oe),P.disconnect()}},[T]),T?l.jsxs("div",{className:`${$e.palette} ${$e[N]} ${i?"":$e.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:O=>O.stopPropagation(),onMouseDown:O=>O.stopPropagation(),onTransitionEnd:O=>{O.target===O.currentTarget&&(u||(clearTimeout(fe.current),E(!1),H("exit"),d==null||d()))},children:[l.jsxs("div",{className:$e.paletteHeader,children:[l.jsx("div",{className:$e.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:$e.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${$e.canvasToggle} ${g?$e.active:""}`,onClick:()=>x(!g),children:[l.jsx("span",{className:$e.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:$e.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${$e.wireframePurposeWrap} ${g?"":$e.collapsed}`,children:l.jsx("div",{className:$e.wireframePurposeInner,children:l.jsx("textarea",{className:$e.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:O=>C(O.target.value),rows:2})})}),l.jsx(R8,{activeType:e,onSelect:n,onDragStart:y,scrollRef:_e,fadeClass:De,blankCanvas:g}),L&&l.jsx("div",{className:`${$e.paletteFooterWrap} ${X?$e.footerHidden:""}`,children:l.jsx("div",{className:$e.paletteFooterInner,children:l.jsx("div",{className:$e.paletteFooterInnerContent,children:l.jsxs("div",{className:$e.paletteFooter,children:[l.jsx("span",{className:$e.paletteFooterCount,children:l.jsx(B8,{value:Y.current,suffix:q.current})}),l.jsx("button",{className:$e.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function Ll(e){if(e.parentElement)return e.parentElement;const n=e.getRootNode();return n instanceof ShadowRoot?n.host:null}function oi(e,n){let i=e;for(;i;){if(i.matches(n))return i;i=Ll(i)}return null}function O8(e,n=4){const i=[];let a=e,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(y=>y.length>2&&!y.match(/^[a-z]{1,2}$/)&&!y.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=Ll(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function Nl(e){var a,c,u,d,h,p,y,g;const n=O8(e);if(e.dataset.element)return{name:e.dataset.element,path:n};const i=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=oi(e,"svg");if(x){const b=Ll(x);if(b instanceof HTMLElement)return{name:`graphic in ${Nl(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=Ll(e);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=e.textContent)==null?void 0:c.trim(),b=e.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=e.textContent)==null?void 0:u.trim(),b=e.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=e.getAttribute("type")||"text",b=e.getAttribute("placeholder"),C=e.getAttribute("name");return b?{name:`input "${b}"`,path:n}:C?{name:`input [${C}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=e.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=e.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=e.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(y=e.textContent)==null?void 0:y.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(g=e.textContent)==null?void 0:g.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=e.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=e.className,b=e.getAttribute("role"),C=e.getAttribute("aria-label");if(C)return{name:`${i} [${C}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const j=x.split(/[\s_-]+/).map(T=>T.replace(/[A-Z0-9]{5,}.*$/,"")).filter(T=>T.length>2&&!/^[a-z]{1,2}$/.test(T)).slice(0,2);if(j.length>0)return{name:j.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function Mc(e){var u,d,h;const n=[],i=(u=e.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=e.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=e.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function _d(e){const n=Ll(e);if(!n)return"";const c=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter(g=>g!==e&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var j;const x=g.tagName.toLowerCase(),b=g.className;let C="";if(typeof b=="string"&&b){const T=b.split(/\s+/).map(E=>E.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(E=>E.length>2&&!/^[a-z]{1,2}$/.test(E));T&&(C=`.${T}`)}if(x==="button"||x==="a"){const T=(j=g.textContent)==null?void 0:j.trim().slice(0,15);if(T)return`${x}${C} "${T}"`}return`${x}${C}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const g=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));g&&(h=`.${g}`)}const p=n.children.length,y=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+y}function Ec(e){const n=e.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var u2=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),z8=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),$8=new Set(["input","textarea","select"]),I8=new Set(["img","video","canvas","svg"]),P8=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function gd(e){if(typeof window>"u")return{};const n=window.getComputedStyle(e),i={},a=e.tagName.toLowerCase();let c;z8.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&e.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:$8.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:I8.has(a)?c=["width","height","objectFit","borderRadius"]:P8.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!u2.has(h)&&(i[u]=h)}return i}var H8=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function yd(e){if(typeof window>"u")return"";const n=window.getComputedStyle(e),i=[];for(const a of H8){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!u2.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function U8(e){if(!e)return;const n={},i=e.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function xd(e){const n=[],i=e.getAttribute("role"),a=e.getAttribute("aria-label"),c=e.getAttribute("aria-describedby"),u=e.getAttribute("tabindex"),d=e.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function bd(e){const n=[];let i=e;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=Ll(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var V8=new Set(["nav","header","main","section","article","footer","aside"]),_p={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Cx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Y8=new Set(["script","style","noscript","link","meta"]),W8=40;function d2(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Yr(e){const n=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){const c=e.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=e.parentElement;if(i){const c=Array.from(i.children).indexOf(e)+1;return`${i===document.body?"body":Yr(i)} > ${n}:nth-child(${c})`}return n}function Kd(e){var d;const n=e.tagName.toLowerCase(),i=e.getAttribute("aria-label");if(i)return i;const a=e.getAttribute("role");if(a&&_p[a])return _p[a];if(Cx[n])return Cx[n];const c=e.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=Nl(e);return u.charAt(0).toUpperCase()+u.slice(1)}function f2(e){const n=e.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function h2(e){var a;const n=(a=e.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function F8(){const e=document.querySelector("main")||document.body,n=Array.from(e.children);let i=n;e!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(Y8.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<W8)return;const y=V8.has(d),g=c.getAttribute("role")&&_p[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!y&&!g&&!x)return;const b=window.scrollY,C=d2(c),j={x:p.x,y:C?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Kd(c),tagName:d,selector:Yr(c),role:c.getAttribute("role"),className:f2(c),textSnippet:h2(c),originalRect:j,currentRect:{...j},originalIndex:u,isFixed:C})}),a}function X8(e){const n=window.scrollY,i=e.getBoundingClientRect(),a=d2(e),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=e.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Kd(e),tagName:e.tagName.toLowerCase(),selector:Yr(e),role:e.getAttribute("role"),className:f2(e),textSnippet:h2(e),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var kx={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},jx=["nw","n","ne","e","se","s","sw","w"],vd=24,Mx=16,wd=5;function Ex(e,n,i,a){let c=1/0,u=1/0;const d=e.x,h=e.x+e.width,p=e.x+e.width/2,y=e.y,g=e.y+e.height,x=e.y+e.height/2,b=[];for(const Y of n)i.has(Y.id)||b.push(Y.currentRect);a&&b.push(...a);for(const Y of b){const q=Y.x,ue=Y.x+Y.width,fe=Y.x+Y.width/2,_e=Y.y,De=Y.y+Y.height,qe=Y.y+Y.height/2;for(const se of[d,h,p])for(const he of[q,ue,fe]){const O=he-se;Math.abs(O)<wd&&Math.abs(O)<Math.abs(c)&&(c=O)}for(const se of[y,g,x])for(const he of[_e,De,qe]){const O=he-se;Math.abs(O)<wd&&Math.abs(O)<Math.abs(u)&&(u=O)}}const C=Math.abs(c)<wd?c:0,j=Math.abs(u)<wd?u:0,T=[],E=new Set,N=d+C,H=h+C,L=p+C,A=y+j,X=g+j,W=x+j;for(const Y of b){const q=Y.x,ue=Y.x+Y.width,fe=Y.x+Y.width/2,_e=Y.y,De=Y.y+Y.height,qe=Y.y+Y.height/2;for(const se of[q,fe,ue])for(const he of[N,L,H])if(Math.abs(he-se)<.5){const O=`x:${Math.round(se)}`;E.has(O)||(E.add(O),T.push({axis:"x",pos:se}))}for(const se of[_e,qe,De])for(const he of[A,W,X])if(Math.abs(he-se)<.5){const O=`y:${Math.round(se)}`;E.has(O)||(E.add(O),T.push({axis:"y",pos:se}))}}return{dx:C,dy:j,guides:T}}var G8=new Set(["script","style","noscript","link","meta","br","hr"]);function Tx(e){let n=e;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(G8.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Mx&&i.height>=Mx)return n;n=n.parentElement}return null}function q8({rearrangeState:e,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:y,onDragEnd:g,clearSignal:x}){const{sections:b}=e,C=_.useRef(e);C.current=e;const[j,T]=_.useState(new Set),[E,N]=_.useState(!1),H=_.useRef(x);_.useEffect(()=>{x!==void 0&&x!==H.current&&(H.current=x,b.length>0&&N(!0))},[x,b.length]);const L=_.useRef(p);_.useEffect(()=>{p!==L.current&&(L.current=p,T(new Set))},[p]);const[A,X]=_.useState(null),[W,Y]=_.useState(!1),q=_.useRef(!1),ue=_.useCallback(V=>{const te=b.find(Se=>Se.id===V);te&&(q.current=!!te.note,X(V),Y(!1))},[b]),fe=_.useCallback(()=>{A&&(Y(!0),Wt(()=>{X(null),Y(!1)},150))},[A]),_e=_.useCallback(V=>{A&&(n({...e,sections:b.map(te=>te.id===A?{...te,note:V.trim()||void 0}:te)}),fe())},[A,b,e,n,fe]);_.useEffect(()=>{a&&A&&fe()},[a]);const[De,qe]=_.useState(new Set),se=_.useRef(new Map),[he,O]=_.useState(null),[oe,P]=_.useState(null),[me,be]=_.useState([]),[$,ie]=_.useState(0),ee=_.useRef(null),ve=_.useRef(new Set),Te=_.useRef(new Map),[pe,Oe]=_.useState(new Map),[et,We]=_.useState(new Map),mt=_.useRef(new Set),Nt=_.useRef(new Map),Mt=_.useRef(h);Mt.current=h;const ut=_.useRef(y);ut.current=y;const $t=_.useRef(g);$t.current=g,_.useEffect(()=>{u&&T(new Set)},[u]);const[_t,Gt]=_.useState(()=>!e.sections.some(V=>{const te=V.originalRect,Se=V.currentRect;return Math.abs(te.x-Se.x)>1||Math.abs(te.y-Se.y)>1||Math.abs(te.width-Se.width)>1||Math.abs(te.height-Se.height)>1}));_.useEffect(()=>{if(!_t){const V=Wt(()=>Gt(!0),380);return()=>clearTimeout(V)}},[]);const Jt=_.useRef(new Set);_.useEffect(()=>{Jt.current=new Set(b.map(V=>V.selector))},[b]),_.useEffect(()=>{const V=()=>ie(window.scrollY);return V(),window.addEventListener("scroll",V,{passive:!0}),window.addEventListener("resize",V,{passive:!0}),()=>{window.removeEventListener("scroll",V),window.removeEventListener("resize",V)}},[]),_.useEffect(()=>{const V=te=>{if(ee.current){O(null);return}const Se=document.elementFromPoint(te.clientX,te.clientY);if(!Se){O(null);return}if(Se.closest("[data-feedback-toolbar]")){O(null);return}if(Se.closest("[data-design-placement]")){O(null);return}if(Se.closest("[data-annotation-popup]")){O(null);return}const je=Tx(Se);if(!je){O(null);return}for(const Ye of Jt.current)try{const Ne=document.querySelector(Ye);if(Ne&&(Ne===je||je.contains(Ne))){O(null);return}}catch{}const nt=je.getBoundingClientRect();O({x:nt.x,y:nt.y,w:nt.width,h:nt.height})};return document.addEventListener("mousemove",V,{passive:!0}),()=>document.removeEventListener("mousemove",V)},[b]),_.useEffect(()=>{const V=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=V}},[]),_.useEffect(()=>{const V=te=>{var Ne,xe,ot,Xe;if(ee.current||te.button!==0)return;const Se=te.target;if(!Se||Se.closest("[data-feedback-toolbar]")||Se.closest("[data-design-placement]")||Se.closest("[data-annotation-popup]"))return;const je=Tx(Se);let nt=!1;if(je)for(const st of Jt.current)try{const Be=document.querySelector(st);if(Be&&(Be===je||je.contains(Be))){nt=!0;break}}catch{}const Ye=!!(te.shiftKey||te.metaKey||te.ctrlKey);if(je&&!nt){te.preventDefault(),te.stopPropagation();const st=X8(je),Be=[...b,st],tt=[...e.originalOrder,st.id];n({...e,sections:Be,originalOrder:tt});const wt=new Set([st.id]);T(wt),(Ne=Mt.current)==null||Ne.call(Mt,wt,Ye),O(null);const Ct=te.clientX,Ze=te.clientY,Bt={x:st.currentRect.x,y:st.currentRect.y};st.originalRect;let kt=!1,pt=0,cn=0;ee.current="move";const ft=hn=>{var zt;const Ot=hn.clientX-Ct,jt=hn.clientY-Ze;if(!kt&&(Math.abs(Ot)>2||Math.abs(jt)>2)&&(kt=!0),!kt)return;const mn={x:Bt.x+Ot,y:Bt.y+jt,width:st.currentRect.width,height:st.currentRect.height},rs=Ex(mn,Be,new Set([st.id]),d);be(rs.guides);const en=Ot+rs.dx,gn=jt+rs.dy;pt=en,cn=gn;const nn=document.querySelector(`[data-rearrange-section="${st.id}"]`);nn&&(nn.style.transform=`translate(${en}px, ${gn}px)`),Oe(new Map([[st.id,{x:Bt.x+en,y:Bt.y+gn,width:st.currentRect.width,height:st.currentRect.height}]])),(zt=ut.current)==null||zt.call(ut,en,gn)},Pt=()=>{var Ot;window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",Pt),ee.current=null,be([]),Oe(new Map);const hn=document.querySelector(`[data-rearrange-section="${st.id}"]`);hn&&(hn.style.transform=""),kt&&n({...e,sections:Be.map(jt=>jt.id===st.id?{...jt,currentRect:{...jt.currentRect,x:Math.max(0,Bt.x+pt),y:Math.max(0,Bt.y+cn)}}:jt),originalOrder:tt}),(Ot=$t.current)==null||Ot.call($t,pt,cn,kt)};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",Pt)}else if(nt&&je){te.preventDefault();for(const st of b)try{const Be=document.querySelector(st.selector);if(Be&&Be===je){const tt=new Set([st.id]);T(tt),(xe=Mt.current)==null||xe.call(Mt,tt,Ye);return}}catch{}Ye||(T(new Set),(ot=Mt.current)==null||ot.call(Mt,new Set,!1))}else Ye||(T(new Set),(Xe=Mt.current)==null||Xe.call(Mt,new Set,!1))};return document.addEventListener("mousedown",V,!0),()=>document.removeEventListener("mousedown",V,!0)},[b,e,n]),_.useEffect(()=>{const V=te=>{const Se=te.target;if(!(Se.tagName==="INPUT"||Se.tagName==="TEXTAREA"||Se.isContentEditable)){if((te.key==="Backspace"||te.key==="Delete")&&j.size>0){te.preventDefault();const je=new Set(j);qe(nt=>{const Ye=new Set(nt);for(const Ne of je)Ye.add(Ne);return Ye}),T(new Set),Wt(()=>{const nt=C.current;n({...nt,sections:nt.sections.filter(Ye=>!je.has(Ye.id)),originalOrder:nt.originalOrder.filter(Ye=>!je.has(Ye))}),qe(Ye=>{const Ne=new Set(Ye);for(const xe of je)Ne.delete(xe);return Ne})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(te.key)&&j.size>0){te.preventDefault();const je=te.shiftKey?20:1,nt=te.key==="ArrowLeft"?-je:te.key==="ArrowRight"?je:0,Ye=te.key==="ArrowUp"?-je:te.key==="ArrowDown"?je:0;n({...e,sections:b.map(Ne=>j.has(Ne.id)?{...Ne,currentRect:{...Ne.currentRect,x:Math.max(0,Ne.currentRect.x+nt),y:Math.max(0,Ne.currentRect.y+Ye)}}:Ne)});return}te.key==="Escape"&&j.size>0&&T(new Set)}};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[j,b,e,n]);const Z=_.useCallback((V,te)=>{var Ct;if(V.button!==0)return;const Se=V.target;if(Se.closest(`.${$e.handle}`)||Se.closest(`.${$e.deleteButton}`))return;V.preventDefault(),V.stopPropagation();let je;V.shiftKey||V.metaKey||V.ctrlKey?(je=new Set(j),je.has(te)?je.delete(te):je.add(te)):j.has(te)?je=new Set(j):je=new Set([te]),T(je),(je.size!==j.size||[...je].some(Ze=>!j.has(Ze)))&&((Ct=Mt.current)==null||Ct.call(Mt,je,!!(V.shiftKey||V.metaKey||V.ctrlKey)));const Ye=V.clientX,Ne=V.clientY,xe=new Map;for(const Ze of b)je.has(Ze.id)&&xe.set(Ze.id,{x:Ze.currentRect.x,y:Ze.currentRect.y});ee.current="move";let ot=!1,Xe=0,st=0;const Be=new Map;for(const Ze of b)if(je.has(Ze.id)){const Bt=document.querySelector(`[data-rearrange-section="${Ze.id}"]`);Be.set(Ze.id,{outlineEl:Bt,curW:Ze.currentRect.width,curH:Ze.currentRect.height})}const tt=Ze=>{var rs;const Bt=Ze.clientX-Ye,kt=Ze.clientY-Ne;if(Bt===0&&kt===0)return;ot=!0;let pt=1/0,cn=1/0,ft=-1/0,Pt=-1/0;for(const[en,{curW:gn,curH:nn}]of Be){const zt=xe.get(en);if(!zt)continue;const on=zt.x+Bt,Qe=zt.y+kt;pt=Math.min(pt,on),cn=Math.min(cn,Qe),ft=Math.max(ft,on+gn),Pt=Math.max(Pt,Qe+nn)}const hn=Ex({x:pt,y:cn,width:ft-pt,height:Pt-cn},b,je,d),Ot=Bt+hn.dx,jt=kt+hn.dy;Xe=Ot,st=jt,be(hn.guides);for(const[,{outlineEl:en}]of Be)en&&(en.style.transform=`translate(${Ot}px, ${jt}px)`);const mn=new Map;for(const[en,{curW:gn,curH:nn}]of Be){const zt=xe.get(en);if(zt){const on={x:Math.max(0,zt.x+Ot),y:Math.max(0,zt.y+jt),width:gn,height:nn};mn.set(en,on)}}Oe(mn),(rs=ut.current)==null||rs.call(ut,Ot,jt)},wt=Ze=>{var Bt,kt;window.removeEventListener("mousemove",tt),window.removeEventListener("mouseup",wt),ee.current=null,be([]),Oe(new Map);for(const[,{outlineEl:pt}]of Be)pt&&(pt.style.transform="");if(ot){const pt=Ze.clientX-Ye,cn=Ze.clientY-Ne;if(Math.abs(pt)<5&&Math.abs(cn)<5)n({...e,sections:b.map(ft=>{const Pt=xe.get(ft.id);return Pt?{...ft,currentRect:{...ft.currentRect,x:Pt.x,y:Pt.y}}:ft})});else{n({...e,sections:b.map(ft=>{const Pt=xe.get(ft.id);return Pt?{...ft,currentRect:{...ft.currentRect,x:Math.max(0,Pt.x+Xe),y:Math.max(0,Pt.y+st)}}:ft})}),(Bt=$t.current)==null||Bt.call($t,Xe,st,!0);return}}(kt=$t.current)==null||kt.call($t,0,0,!1)};window.addEventListener("mousemove",tt),window.addEventListener("mouseup",wt)},[j,b,e,n]),Re=_.useCallback((V,te,Se)=>{V.preventDefault(),V.stopPropagation();const je=b.find(tt=>tt.id===te);if(!je)return;T(new Set([te])),ee.current="resize";const nt=V.clientX,Ye=V.clientY,Ne={...je.currentRect};je.originalRect;const xe=Ne.width/Ne.height;let ot={...Ne};const Xe=document.querySelector(`[data-rearrange-section="${te}"]`),st=tt=>{const wt=tt.clientX-nt,Ct=tt.clientY-Ye;let Ze=Ne.x,Bt=Ne.y,kt=Ne.width,pt=Ne.height;if(Se.includes("e")&&(kt=Math.max(vd,Ne.width+wt)),Se.includes("w")&&(kt=Math.max(vd,Ne.width-wt),Ze=Ne.x+Ne.width-kt),Se.includes("s")&&(pt=Math.max(vd,Ne.height+Ct)),Se.includes("n")&&(pt=Math.max(vd,Ne.height-Ct),Bt=Ne.y+Ne.height-pt),tt.shiftKey)if(Se.length===2){const ft=Math.abs(kt-Ne.width),Pt=Math.abs(pt-Ne.height);ft>Pt?pt=kt/xe:kt=pt*xe,Se.includes("w")&&(Ze=Ne.x+Ne.width-kt),Se.includes("n")&&(Bt=Ne.y+Ne.height-pt)}else Se==="e"||Se==="w"?pt=kt/xe:kt=pt*xe,Se==="w"&&(Ze=Ne.x+Ne.width-kt),Se==="n"&&(Bt=Ne.y+Ne.height-pt);ot={x:Ze,y:Bt,width:kt,height:pt},Xe&&(Xe.style.left=`${Ze}px`,Xe.style.top=`${Bt-$}px`,Xe.style.width=`${kt}px`,Xe.style.height=`${pt}px`),P({x:tt.clientX+12,y:tt.clientY+12,text:`${Math.round(kt)} × ${Math.round(pt)}`}),Oe(new Map([[te,ot]]))},Be=()=>{window.removeEventListener("mousemove",st),window.removeEventListener("mouseup",Be),P(null),ee.current=null,Oe(new Map),n({...e,sections:b.map(tt=>tt.id===te?{...tt,currentRect:ot}:tt)})};window.addEventListener("mousemove",st),window.addEventListener("mouseup",Be)},[b,e,n,$]),dt=_.useCallback(V=>{qe(te=>{const Se=new Set(te);return Se.add(V),Se}),T(te=>{const Se=new Set(te);return Se.delete(V),Se}),Wt(()=>{const te=C.current;n({...te,sections:te.sections.filter(Se=>Se.id!==V),originalOrder:te.originalOrder.filter(Se=>Se!==V)}),qe(Se=>{const je=new Set(Se);return je.delete(V),je})},180)},[n]),rt=V=>{const te=V.originalRect,Se=V.currentRect;return Math.abs(te.x-Se.x)>1||Math.abs(te.y-Se.y)>1||Math.abs(te.width-Se.width)>1||Math.abs(te.height-Se.height)>1},gt=V=>{const te=V.originalRect,Se=V.currentRect;return Math.abs(te.x-Se.x)>1||Math.abs(te.y-Se.y)>1},Ue=V=>{const te=V.originalRect,Se=V.currentRect;return Math.abs(te.width-Se.width)>1||Math.abs(te.height-Se.height)>1};for(const V of b)Te.current.has(V.id)||(gt(V)?Te.current.set(V.id,"move"):Ue(V)&&Te.current.set(V.id,"resize"));for(const V of Te.current.keys())b.some(te=>te.id===V)||Te.current.delete(V);const vt=b.filter(V=>{try{if(De.has(V.id)||j.has(V.id))return!0;const te=document.querySelector(V.selector);if(!te)return!1;const Se=te.getBoundingClientRect(),je=V.originalRect;return Math.abs(Se.width-je.width)+Math.abs(Se.height-je.height)<200}catch{return!1}}),yt=vt.filter(V=>rt(V)),Et=vt.filter(V=>!rt(V)),Ke=new Set(yt.map(V=>V.id));for(const V of ve.current)Ke.has(V)||ve.current.delete(V);const it=[...Ke].sort().join(",");for(const V of yt)Nt.current.set(V.id,{currentRect:V.currentRect,originalRect:V.originalRect,isFixed:V.isFixed});return _.useEffect(()=>{const V=mt.current;mt.current=Ke;const te=new Map;for(const Se of V)if(!Ke.has(Se)){if(!b.some(nt=>nt.id===Se))continue;const je=Nt.current.get(Se);je&&(te.set(Se,{orig:je.originalRect,target:je.currentRect,isFixed:je.isFixed}),Nt.current.delete(Se))}if(te.size>0){We(je=>{const nt=new Map(je);for(const[Ye,Ne]of te)nt.set(Ye,Ne);return nt});const Se=Wt(()=>{We(je=>{const nt=new Map(je);for(const Ye of te.keys())nt.delete(Ye);return nt})},250);return()=>clearTimeout(Se)}},[it,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${$e.rearrangeOverlay} ${i?"":$e.light} ${a?$e.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[he&&l.jsx("div",{className:$e.hoverHighlight,style:{left:he.x,top:he.y,width:he.w,height:he.h}}),Et.map(V=>{const te=V.currentRect,Se=V.isFixed?te.y:te.y-$,je=kx,nt=j.has(V.id);return l.jsxs("div",{"data-rearrange-section":V.id,className:`${$e.sectionOutline} ${nt?$e.selected:""} ${E||a||De.has(V.id)?$e.exiting:""}`,style:{left:te.x,top:Se,width:te.width,height:te.height,borderColor:je.border,backgroundColor:je.bg,..._t?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ye=>Z(Ye,V.id),onDoubleClick:()=>ue(V.id),children:[l.jsx("span",{className:$e.sectionLabel,style:{backgroundColor:je.pill},children:V.label}),l.jsx("span",{className:`${$e.sectionAnnotation} ${V.note?$e.annotationVisible:""}`,children:(V.note&&se.current.set(V.id,V.note),V.note||se.current.get(V.id)||"")}),l.jsxs("span",{className:$e.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:$e.deleteButton,onMouseDown:Ye=>Ye.stopPropagation(),onClick:()=>dt(V.id),children:"✕"}),jx.map(Ye=>l.jsx("div",{className:`${$e.handle} ${$e[`handle${Ye.charAt(0).toUpperCase()}${Ye.slice(1)}`]}`,onMouseDown:Ne=>Re(Ne,V.id,Ye)},Ye))]},V.id)}),yt.map(V=>{const te=V.currentRect,Se=V.isFixed?te.y:te.y-$,je=j.has(V.id),nt=gt(V),Ye=Ue(V);if(u&&!je)return null;const xe=!ve.current.has(V.id);return xe&&ve.current.add(V.id),l.jsxs("div",{"data-rearrange-section":V.id,className:`${$e.ghostOutline} ${je?$e.selected:""} ${E||a||De.has(V.id)?$e.exiting:""}`,style:{left:te.x,top:Se,width:te.width,height:te.height,..._t?{}:{opacity:0,animation:"none",transition:"none"},...xe?{}:{animation:"none"}},onMouseDown:ot=>Z(ot,V.id),onDoubleClick:()=>ue(V.id),children:[l.jsx("span",{className:$e.sectionLabel,style:{backgroundColor:kx.pill},children:V.label}),l.jsx("span",{className:`${$e.sectionAnnotation} ${V.note?$e.annotationVisible:""}`,children:(V.note&&se.current.set(V.id,V.note),V.note||se.current.get(V.id)||"")}),l.jsxs("span",{className:$e.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:$e.deleteButton,onMouseDown:ot=>ot.stopPropagation(),onClick:()=>dt(V.id),children:"✕"}),jx.map(ot=>l.jsx("div",{className:`${$e.handle} ${$e[`handle${ot.charAt(0).toUpperCase()}${ot.slice(1)}`]}`,onMouseDown:Xe=>Re(Xe,V.id,ot)},ot)),l.jsx("span",{className:$e.ghostBadge,children:(()=>{const ot=Te.current.get(V.id);if(nt&&Ye){const[Xe,st]=ot==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Xe," ",l.jsxs("span",{className:$e.ghostBadgeExtra,children:["& ",st]})]})}return`Suggested ${Ye?"Resize":"Move"}`})()})]},V.id)})]}),!u&&(()=>{const V=[];for(const te of yt){const Se=pe.get(te.id);V.push({id:te.id,orig:te.originalRect,target:Se||te.currentRect,isFixed:te.isFixed,isSelected:j.has(te.id),isExiting:De.has(te.id)})}for(const[te,Se]of pe)if(!V.some(je=>je.id===te)){const je=b.find(nt=>nt.id===te);je&&V.push({id:te,orig:je.originalRect,target:Se,isFixed:je.isFixed,isSelected:j.has(te)})}for(const[te,Se]of et)V.some(je=>je.id===te)||V.push({id:te,orig:Se.orig,target:Se.target,isFixed:Se.isFixed,isSelected:!1,isExiting:!0});return V.length===0?null:l.jsxs("svg",{className:`${$e.connectorSvg} ${E||a?$e.connectorExiting:""}`,children:[V.map(({id:te,orig:Se,target:je,isFixed:nt,isSelected:Ye,isExiting:Ne})=>{const xe=Se.x+Se.width/2,ot=(nt?Se.y:Se.y-$)+Se.height/2,Xe=je.x+je.width/2,st=(nt?je.y:je.y-$)+je.height/2,Be=Xe-xe,tt=st-ot,wt=Math.sqrt(Be*Be+tt*tt);if(wt<2)return null;const Ct=Math.min(1,wt/40),Ze=Math.min(wt*.3,60),Bt=wt>0?-tt/wt:0,kt=wt>0?Be/wt:0,pt=(xe+Xe)/2+Bt*Ze,cn=(ot+st)/2+kt*Ze,ft=pe.has(te),Pt=ft||Ye?1:.4,hn=ft||Ye?1:.5;return l.jsxs("g",{className:Ne?$e.connectorExiting:"",children:[l.jsx("path",{className:$e.connectorLine,d:`M ${xe} ${ot} Q ${pt} ${cn} ${Xe} ${st}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Pt*Ct}),l.jsx("circle",{className:$e.connectorDot,cx:xe,cy:ot,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:hn*Ct,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:$e.connectorDot,cx:Xe,cy:st,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:hn*Ct,filter:"url(#connDotShadow)"})]},`conn-${te}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),A&&(()=>{var st;const V=b.find(Be=>Be.id===A);if(!V)return null;const te=V.currentRect,Se=V.isFixed?te.y:te.y-$,je=te.x+te.width/2,nt=Se-8,Ye=Se+te.height+8,Ne=nt>200,xe=Ye<window.innerHeight-100,ot=Math.max(160,Math.min(window.innerWidth-160,je));let Xe;return Ne?Xe={left:ot,bottom:window.innerHeight-nt}:xe?Xe={left:ot,top:Ye}:Xe={left:ot,top:Math.max(80,window.innerHeight/2-80)},l.jsx(qd,{element:V.label,placeholder:"Add a note about this section",initialValue:(st=V.note)!=null?st:"",submitLabel:q.current?"Save":"Set",onSubmit:_e,onCancel:fe,onDelete:q.current?()=>{_e("")}:void 0,isExiting:W,lightMode:!i,style:Xe})})(),oe&&l.jsx("div",{className:$e.sizeIndicator,style:{left:oe.x,top:oe.y},"data-feedback-toolbar":!0,children:oe.text}),me.map((V,te)=>l.jsx("div",{className:$e.guideLine,style:V.axis==="x"?{position:"fixed",left:V.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:V.pos-$,width:"100vw",height:1}},`${V.axis}-${V.pos}-${te}`))]})}var gp=new Set(["script","style","noscript","link","meta","br","hr"]);function K8(){const e=document.querySelector("main")||document.body,n=[],i=Array.from(e.children),a=e!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||gp.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Kd(c),selector:Yr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||gp.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const y=h.getBoundingClientRect();y.height<10||y.width<10||n.push({label:Kd(h),selector:Yr(h),top:y.top,bottom:y.bottom,left:y.left,right:y.right,area:y.width*y.height})}}}return n}function Q8(e){const n=window.scrollY;return e.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function Z8(e){const n=window.scrollY,i=e.y-n,a=e.x;return{top:i,bottom:i+e.height,left:a,right:a+e.width,area:e.width*e.height}}function yp(e,n){const i=n?Q8(n):K8(),a=Z8(e);let c=null,u=null,d=null,h=null,p=null;for(const j of i){if(Math.abs(j.left-a.left)<2&&Math.abs(j.top-a.top)<2&&Math.abs(j.right-j.left-e.width)<2&&Math.abs(j.bottom-j.top-e.height)<2)continue;j.left<=a.left+2&&j.right>=a.right-2&&j.top<=a.top+2&&j.bottom>=a.bottom-2&&j.area>a.area*1.5&&(!p||j.area<p._area)&&(p={label:j.label,selector:j.selector,_area:j.area});const T=a.right>j.left+5&&a.left<j.right-5,E=a.bottom>j.top+5&&a.top<j.bottom-5;if(T&&j.bottom<=a.top+5){const N=Math.round(a.top-j.bottom);(!c||N<c._dist)&&(c={label:j.label,selector:j.selector,gap:Math.max(0,N),_dist:N})}if(T&&j.top>=a.bottom-5){const N=Math.round(j.top-a.bottom);(!u||N<u._dist)&&(u={label:j.label,selector:j.selector,gap:Math.max(0,N),_dist:N})}if(E&&j.right<=a.left+5){const N=Math.round(a.left-j.right);(!d||N<d._dist)&&(d={label:j.label,selector:j.selector,gap:Math.max(0,N),_dist:N})}if(E&&j.left>=a.right-5){const N=Math.round(j.left-a.right);(!h||N<h._dist)&&(h={label:j.label,selector:j.selector,gap:Math.max(0,N),_dist:N})}}const y=window.innerWidth,g=window.innerHeight,x=eM(e,y),b=j=>j?{label:j.label,selector:j.selector,gap:j.gap}:null,C=J8(a,e,y,g,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:C}}function J8(e,n,i,a,c,u){const d={};let h=!1;const p=[];if(e.left<-2&&p.push("left"),e.right>i+2&&p.push("right"),e.top<-2&&p.push("top"),e.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const y=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(y){const g=[];e.left<y.left-2&&g.push("left"),e.right>y.right+2&&g.push("right"),e.top<y.top-2&&g.push("top"),e.bottom>y.bottom+2&&g.push("bottom"),g.length>0&&(d.container={label:c.label,edges:g},h=!0)}}return h?d:null}function eM(e,n){if(e.width/n>.85)return"full-width";const a=e.x+e.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function m2(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function p2(e,n={}){const i=[];e.above&&i.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&i.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),n.includeLeftRight&&(e.left&&i.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&i.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));const a=m2(e.alignment);return e.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${e.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&i.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&i.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),i}function tM(e,n,i){var u,d;const a=[];e.above&&a.push(`below \`${e.above.label}\``),e.below&&a.push(`above \`${e.below.label}\``),e.left&&a.push(`right of \`${e.left.label}\``),e.right&&a.push(`left of \`${e.right.label}\``),e.containedIn&&a.push(`inside \`${e.containedIn.label}\``),a.push(m2(e.alignment)),(u=e.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(d=e.outOfBounds)!=null&&d.container&&a.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Ax=15;function Nx(e){if(e.length<2)return[];const n=[],i=new Set;for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.y-e[u].rect.y)<Ax&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.x-y.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,y)=>p+y.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<e.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<e.length;u++)i.has(u)||Math.abs(e[a].rect.x-e[u].rect.x)<Ax&&c.push(u);if(c.length>=2){const u=c.map(p=>e[p]);u.sort((p,y)=>p.rect.y-y.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,y)=>p+y.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,y)=>p+y,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function nM(e){var d;if(e.length<2)return[];const n=Nx(e.map(h=>({label:h.label,rect:h.originalRect}))),i=Nx(e.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let y=null,g=0;for(const x of i){const b=x.labels.filter(C=>p.has(C)).length;b>=2&&b>g&&(y=x,g=b)}if(y){const x=y.labels.filter(C=>p.has(C)),b=x.join(", ");if(y.type!==h.type){const C=h.type==="row"?"y":"x",j=y.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${C}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${y.type} (${j}≈${y.sharedEdge}, ${y.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-y.sharedEdge)>20||Math.abs(h.avgGap-y.avgGap)>5){const C=h.type==="row"?"y":"x",j=Math.abs(h.sharedEdge-y.sharedEdge)>20?` ${C}: ${h.sharedEdge} → ${y.sharedEdge}`:"",T=Math.abs(h.avgGap-y.avgGap)>5?` gaps: ${h.avgGap}px → ${y.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${j}${T}`)}x.forEach(C=>c.add(C))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(C=>c.add(C))}}for(const h of i){if(h.labels.every(g=>c.has(g))||h.labels.filter(g=>!c.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(b=>h.labels.includes(b)).length>=2)){const g=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${g}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=e.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const y=Math.round(p.currentRect.x/5)*5;((d=h[y])!=null?d:h[y]=[]).push(p.label)}for(const[p,y]of Object.entries(h))y.length>=2&&a.push(`**${y.join(", ")}**: shared left edge at x≈${p}`)}return a}function _2(e){if(typeof document>"u")return{viewport:e,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||gp.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const y of Array.from(p.children))a(y)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const y=getComputedStyle(h);if(y.maxWidth&&y.maxWidth!=="none"&&y.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<e.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:e,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Yr(h)}}}return{viewport:e,contentArea:null}}function sM(e){if(typeof document>"u")return null;const n=document.querySelector(e);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Yr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function g2(e,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(e.x-c),h=Math.round(c+a-(e.x+e.width)),p=(e.width/a*100).toFixed(1),y=e.x+e.width/2,g=Math.abs(y-u)<20,x=e.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(e.width)}px\`)`),g&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function y2(e){const{viewport:n,contentArea:i}=e;let a=`### Reference Frame
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
`,a}function oM(e){const n=sM(e);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Dx(e,n,i,a="standard"){var E,N,H,L;if(e.length===0)return"";const c=[...e].sort((A,X)=>Math.abs(A.y-X.y)<20?A.x-X.x:A.y-X.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((A,X)=>{var Y;const W=((Y=sa[A.type])==null?void 0:Y.label)||A.type;u+=`${X+1}. **${W}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}),u;const d=_2(n);u+=y2(d),u+=`### Components
`,c.forEach((A,X)=>{var De;const W=((De=sa[A.type])==null?void 0:De.label)||A.type,Y={x:A.x,y:A.y,width:A.width,height:A.height};u+=`${X+1}. **${W}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`;const q=yp(Y),fe=p2(q,{includeLeftRight:a==="detailed"||a==="forensic"});for(const qe of fe)u+=`   - ${qe}
`;const _e=g2(Y,d);_e&&(u+=`   - CSS: ${_e}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const A of c){const X=h.find(W=>Math.abs(W.y-A.y)<30);X?X.items.push(A):h.push({y:A.y,items:[A]})}if(h.sort((A,X)=>A.y-X.y),h.forEach((A,X)=>{A.items.sort((Y,q)=>Y.x-q.x);const W=A.items.map(Y=>{var q;return((q=sa[Y.type])==null?void 0:q.label)||Y.type});if(A.items.length===1){const q=A.items[0].width>n.width*.8;u+=`- Row ${X+1} (y≈${Math.round(A.y)}): ${W[0]}${q?" — full width":""}
`}else u+=`- Row ${X+1} (y≈${Math.round(A.y)}): ${W.join(" | ")} — ${A.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let A=0;A<c.length-1;A++){const X=c[A],W=c[A+1],Y=((E=sa[X.type])==null?void 0:E.label)||X.type,q=((N=sa[W.type])==null?void 0:N.label)||W.type,ue=Math.round(W.y-(X.y+X.height)),fe=Math.round(W.x-(X.x+X.width));Math.abs(X.y-W.y)<30?u+=`- ${Y} → ${q}: \`${fe}px\` horizontal gap
`:u+=`- ${Y} → ${q}: \`${ue}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let A=0;A<c.length;A++)for(let X=A+1;X<c.length;X++){const W=c[A],Y=c[X],q=((H=sa[W.type])==null?void 0:H.label)||W.type,ue=((L=sa[Y.type])==null?void 0:L.label)||Y.type,fe=Math.round(Y.y-(W.y+W.height)),_e=Math.round(Y.x-(W.x+W.width));u+=`- ${q} ↔ ${ue}: h=\`${_e}px\` v=\`${fe}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,e.forEach((A,X)=>{var Y;const W=((Y=sa[A.type])==null?void 0:Y.label)||A.type;u+=`${X}. ${W} at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(A=>A.type==="navigation"),y=c.some(A=>A.type==="hero"),g=c.some(A=>A.type==="sidebar"),x=c.some(A=>A.type==="footer"),b=c.filter(A=>A.type==="card"),C=c.filter(A=>A.type==="form"),j=c.filter(A=>A.type==="table"),T=c.filter(A=>A.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),y&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),C.length>0&&(u+=`- ${C.length} form${C.length>1?"s":""} — add proper labels, validation, and submit handling
`),j.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),T.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const A=c.find(X=>X.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(A.width)}px 1fr;\`
`}if(b.length>1){const A=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${A}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Rx(e,n="standard",i){const{sections:a}=e,c=[];for(const g of a){const x=g.originalRect,b=g.currentRect,C=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,j=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!C&&!j){n==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:C,sizeChanged:j})}if(c.length===0||n!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=_2({width:d,height:h});n!=="compact"&&(u+=y2(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const y=g=>a.map(x=>({label:x.label,selector:x.selector,rect:g==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:x,sizeChanged:b}of c){const C=g.originalRect,j=g.currentRect;if(!x&&!b){u+=`- ${g.label} — unchanged at (${Math.round(j.x)}, ${Math.round(j.y)}) ${Math.round(j.width)}×${Math.round(j.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${g.label}** to (${Math.round(j.x)}, ${Math.round(j.y)}) ${Math.round(j.width)}×${Math.round(j.height)}px
`:x?u+=`- Suggested: move **${g.label}** to (${Math.round(j.x)}, ${Math.round(j.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(j.width)}×${Math.round(j.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${g.label}**
`:x?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(C.width)}×${Math.round(C.height)}px to ${Math.round(j.width)}×${Math.round(j.height)}px
`,x){const E=yp(C,y("original")),N=yp(j,y("current")),H=b?{width:C.width,height:C.height}:void 0;u+=`  - Currently ${tM(E,{x:C.x,y:C.y},H)}
`;const L=b?{width:j.width,height:j.height}:void 0,A=`at (${Math.round(j.x)}, ${Math.round(j.y)})`,X=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",Y=p2(N,{includeLeftRight:n==="detailed"||n==="forensic"});if(Y.length>0){u+=`  - Suggested position ${A}${X}: ${Y[0]}
`;for(let ue=1;ue<Y.length;ue++)u+=`    ${Y[ue]}
`}else u+=`  - Suggested position ${A}${X}
`;const q=g2(j,p);q&&(u+=`  - CSS: ${q}
`)}const T=oM(g.selector);if(T&&(u+=`  - ${T}
`),u+=`  - Selector: \`${g.selector}\`
`,n==="detailed"||n==="forensic"){const E=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;E!==g.selector&&(u+=`  - Element: \`${E}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),n==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(j.x)}, y: ${Math.round(j.y)}, w: ${Math.round(j.width)}, h: ${Math.round(j.height)} }\`
`)}if(n!=="compact"){const g=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=nM(g);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of g){const b=x.currentRect,C=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${C?" ← suggested":""}
`}}return u}var xp="feedback-annotations-",x2=7;function Qd(e){return`${xp}${e}`}function Em(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(Qd(e));if(!n)return[];const i=JSON.parse(n),a=Date.now()-x2*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function b2(e,n){if(!(typeof window>"u"))try{localStorage.setItem(Qd(e),JSON.stringify(n))}catch{}}function iM(){const e=new Map;if(typeof window>"u")return e;try{const n=Date.now()-x2*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(xp)){const c=a.slice(xp.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&e.set(c,h)}}}}catch{}return e}function Tc(e,n,i){const a=n.map(c=>({...c,_syncedTo:i}));b2(e,a)}var o_="agentation-design-";function aM(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${o_}${e}`);return n?JSON.parse(n):[]}catch{return[]}}function rM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${o_}${e}`,JSON.stringify(n))}catch{}}function lM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${o_}${e}`)}catch{}}var i_="agentation-rearrange-";function cM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${i_}${e}`);return n?JSON.parse(n):null}catch{return null}}function uM(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${i_}${e}`,JSON.stringify(n))}catch{}}function dM(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${i_}${e}`)}catch{}}var a_="agentation-wireframe-";function fM(e){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${a_}${e}`);return n?JSON.parse(n):null}catch{return null}}function Bx(e,n){if(!(typeof window>"u"))try{localStorage.setItem(`${a_}${e}`,JSON.stringify(n))}catch{}}function Sd(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${a_}${e}`)}catch{}}var v2="agentation-session-";function r_(e){return`${v2}${e}`}function hM(e){if(typeof window>"u")return null;try{return localStorage.getItem(r_(e))}catch{return null}}function Tm(e,n){if(!(typeof window>"u"))try{localStorage.setItem(r_(e),n)}catch{}}function mM(e){if(!(typeof window>"u"))try{localStorage.removeItem(r_(e))}catch{}}var w2=`${v2}toolbar-hidden`;function pM(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(w2)==="1"}catch{return!1}}function _M(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(w2,"1")}catch{}}async function Am(e,n){const i=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Lx(e,n){const i=await fetch(`${e}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Cl(e,n,i){const a=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Ox(e,n,i){const a=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function cr(e,n){const i=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Xn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},zx=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),$x=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],gM=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function yM(e){var a,c,u,d;const n=(a=e==null?void 0:e.mode)!=null?a:"filtered";let i=zx;if(e!=null&&e.skipExact){const h=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);i=new Set([...zx,...h])}return{maxComponents:(c=e==null?void 0:e.maxComponents)!=null?c:6,maxDepth:(u=e==null?void 0:e.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:e!=null&&e.skipPatterns?[...$x,...e.skipPatterns]:$x,userPatterns:(d=e==null?void 0:e.userPatterns)!=null?d:gM,filter:e==null?void 0:e.filter}}function xM(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function bM(e,n=10){const i=new Set;let a=e,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function vM(e,n){const i=xM(e);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function wM(e,n,i,a){if(i.filter)return i.filter(e,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e)));case"smart":return i.skipExact.has(e)||i.skipPatterns.some(c=>c.test(e))?!1:!!(a&&vM(e,a)||i.userPatterns.some(c=>c.test(e)));default:return!0}}var kl=null,SM=new WeakMap;function Nm(e){return Object.keys(e).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function CM(){if(kl!==null)return kl;if(typeof document>"u")return!1;if(document.body&&Nm(document.body))return kl=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const n of e){const i=document.querySelector(n);if(i&&Nm(i))return kl=!0,!0}if(document.body){for(const n of document.body.children)if(Nm(n))return kl=!0,!0}return kl=!1,!1}var Ac={map:SM};function kM(e){return Object.keys(e).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function jM(e){const n=kM(e);return n?e[n]:null}function Br(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function MM(e){var c;const{tag:n,type:i,elementType:a}=e;if(n===Xn.HostComponent||n===Xn.HostText||n===Xn.HostHoistable||n===Xn.HostSingleton||n===Xn.Fragment||n===Xn.Mode||n===Xn.Profiler||n===Xn.DehydratedFragment||n===Xn.HostRoot||n===Xn.HostPortal||n===Xn.ScopeComponent||n===Xn.OffscreenComponent||n===Xn.LegacyHiddenComponent||n===Xn.CacheComponent||n===Xn.TracingMarkerComponent||n===Xn.Throw||n===Xn.ViewTransitionComponent||n===Xn.ActivityComponent)return null;if(n===Xn.ForwardRef){const u=a;if(u!=null&&u.render){const d=Br(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:Br(i)}if(n===Xn.MemoComponent||n===Xn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=Br(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:Br(i)}if(n===Xn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Xn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Xn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?Br(u._result):null}return n===Xn.SuspenseComponent||n===Xn.SuspenseListComponent?null:n===Xn.IncompleteClassComponent||n===Xn.IncompleteFunctionComponent||n===Xn.FunctionComponent||n===Xn.ClassComponent||n===Xn.IndeterminateComponent?Br(i):null}function EM(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function TM(e,n){const i=yM(n),a=i.mode==="all";if(a){const p=Ac.map.get(e);if(p!==void 0)return p}if(!CM()){const p={path:null,components:[]};return a&&Ac.map.set(e,p),p}const c=i.mode==="smart"?bM(e):void 0,u=[];try{let p=jM(e),y=0;for(;p&&y<i.maxDepth&&u.length<i.maxComponents;){const g=MM(p);g&&!EM(g)&&wM(g,y,i,c)&&u.push(g),p=p.return,y++}}catch{const p={path:null,components:[]};return a&&Ac.map.set(e,p),p}if(u.length===0){const p={path:null,components:[]};return a&&Ac.map.set(e,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&Ac.map.set(e,h),h}var Nc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function AM(e){if(!e||typeof e!="object")return null;const n=Object.keys(e),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return e[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return e[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=e[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&e[c]||null}function Qc(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function NM(e,n=50){var c;let i=e,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Qc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Qc(i._debugOwner)};i=i.return,a++}return null}function DM(e){let n=e,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Qc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Qc(n)}}}n=n.return,i++}return null}var Cd=new Map;function RM(e){var c;const n=e.tag,i=e.type,a=e.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===Nc.FunctionComponent||n===Nc.IndeterminateComponent)&&typeof i=="function")return i;if(n===Nc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===Nc.MemoComponent||n===Nc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function BM(){const e=ew,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function LM(e){const n=e.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function OM(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function zM(e){const n=RM(e);if(!n)return null;if(Cd.has(n))return Cd.get(n);const i=BM();if(!i)return Cd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=LM(d.stack);h&&(c={fileName:OM(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Qc(e)||void 0})}}}finally{i.set(a)}return Cd.set(n,c),c}function $M(e,n=15){let i=e,a=0;for(;i&&a<n;){const c=zM(i);if(c)return c;i=i.return,a++}return null}function bp(e){const n=AM(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=NM(n);if(i||(i=DM(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=$M(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function IM(e,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=e;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function PM(e,n=10){let i=e,a=0;for(;i&&a<n;){const c=bp(i);if(c.found)return c;i=i.parentElement,a++}return bp(e)}var HM=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,UM={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=HM}var Je=UM,Dc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Ix(e,n,i="standard"){if(e.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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
`,e.forEach((u,d)=>{i==="compact"?(c+=`${d+1}. **${u.element}**${u.sourceFile?` (${u.sourceFile})`:""}: ${u.comment}`,u.selectedText&&(c+=` (re: "${u.selectedText.slice(0,30)}${u.selectedText.length>30?"...":""}")`),c+=`
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

`)}),c.trim()}var VM=`@keyframes styles-module__markerIn___x4G8D {
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
}`,YM={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=VM}var Js=YM;function Px({annotation:e,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:y,renumberFrom:g,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:C,onHoverLeave:j,onClick:T,onContextMenu:E}){const N=(h||p)&&!y,H=N&&x==="delete",L=e.isMultiSelect,A=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",X=c?Js.exit:u?Js.clearing:d?"":Js.enter,W=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Js.marker} ${L?Js.multiSelect:""} ${X} ${H?Js.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:H?void 0:A,animationDelay:W},onMouseEnter:()=>C(e),onMouseLeave:j,onClick:Y=>{Y.stopPropagation(),c||T(e)},onContextMenu:E?Y=>{x==="delete"&&(Y.preventDefault(),Y.stopPropagation(),c||E(e))}:void 0,children:[N?H?l.jsx(r2,{size:L?18:16}):l.jsx(sj,{size:16}):l.jsx("span",{className:g!==null&&n>=g?Js.renumber:void 0,children:n+1}),h&&!y&&l.jsxs("div",{className:`${Js.markerTooltip} ${Js.enter}`,style:b,children:[l.jsxs("span",{className:Js.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Js.markerNote,children:e.comment})]})]})}function WM({x:e,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Js.marker} ${Js.pending} ${i?Js.multiSelect:""} ${a?Js.exit:Js.enter}`,style:{left:`${e}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(W3,{size:12})})}function Hx({annotation:e,fixed:n}){const i=e.isMultiSelect;return l.jsx("div",{className:`${Js.marker} ${n?Js.fixed:""} ${Js.hovered} ${i?Js.multiSelect:""} ${Js.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:l.jsx(r2,{size:i?12:10})})}var FM=`.styles-module__switchContainer___Ka-AB {
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
}`,XM={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=FM}var Dm=XM,Rm=({className:e="",...n})=>l.jsxs("div",{className:`${Dm.switchContainer} ${e}`,children:[l.jsx("input",{className:Dm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:Dm.switchThumb})]}),GM=`.styles-module__checkboxContainer___joqZk {
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
}`,qM={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=GM}var kd=qM,KM=({className:e="",...n})=>l.jsxs("div",{className:`${kd.checkboxContainer} ${e}`,children:[l.jsx("input",{className:kd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:kd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:kd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),QM=`.styles-module__container___w8eAF {
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
}`,ZM={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=QM}var Ux=ZM,Vx=({className:e="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=_.useId();return l.jsxs("div",{className:`${Ux.container} ${e}`,...u,children:[l.jsx(KM,{id:d,onChange:c,checked:a}),l.jsx("label",{className:Ux.label,htmlFor:d,children:n}),i&&l.jsx(Ir,{content:i})]})},JM=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,e7={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=JM}var Dt=e7;function t7({settings:e,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:y,onSettingsPageChange:g,onHideToolbar:x}){var b;return l.jsx("div",{className:`${Dt.settingsPanel} ${h?Dt.enter:Dt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:Dt.settingsPanelContainer,children:[l.jsxs("div",{className:`${Dt.settingsPage} ${y==="automations"?Dt.slideLeft:""}`,children:[l.jsxs("div",{className:Dt.settingsHeader,children:[l.jsx("a",{className:Dt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:Dt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:Dt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:Dt.themeIconWrapper,children:l.jsx("span",{className:Dt.themeIcon,children:i?l.jsx(tj,{size:20}):l.jsx(nj,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:Dt.settingsSection,children:[l.jsxs("div",{className:Dt.settingsRow,children:[l.jsxs("div",{className:Dt.settingsLabel,children:["Output Detail",l.jsx(Ir,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:Dt.cycleButton,onClick:()=>{const j=(Dc.findIndex(T=>T.value===e.outputDetail)+1)%Dc.length;n({outputDetail:Dc[j].value})},children:[l.jsx("span",{className:Dt.cycleButtonText,children:(b=Dc.find(C=>C.value===e.outputDetail))==null?void 0:b.label},e.outputDetail),l.jsx("span",{className:Dt.cycleDots,children:Dc.map(C=>l.jsx("span",{className:`${Dt.cycleDot} ${e.outputDetail===C.value?Dt.active:""}`},C.value))})]})]}),l.jsxs("div",{className:`${Dt.settingsRow} ${Dt.settingsRowMarginTop} ${c?"":Dt.settingsRowDisabled}`,children:[l.jsxs("div",{className:Dt.settingsLabel,children:["React Components",l.jsx(Ir,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(Rm,{checked:c&&e.reactEnabled,onChange:C=>n({reactEnabled:C.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${Dt.settingsRow} ${Dt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:Dt.settingsLabel,children:["Hide Until Restart",l.jsx(Ir,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(Rm,{checked:!1,onChange:C=>{C.target.checked&&x()}})]})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:Dt.settingsSection,children:[l.jsx("div",{className:`${Dt.settingsLabel} ${Dt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:Dt.colorOptions,children:Wc.map(C=>l.jsx("button",{className:`${Dt.colorOption} ${e.annotationColorId===C.id?Dt.selected:""}`,style:{"--swatch":C.srgb,"--swatch-p3":C.p3},onClick:()=>n({annotationColorId:C.id}),title:C.label,type:"button"},C.id))})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:Dt.settingsSection,children:[l.jsx(Vx,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:C=>n({autoClearAfterCopy:C.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(Vx,{className:Dt.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:C=>n({blockInteractions:C.target.checked})})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("button",{className:Dt.settingsNavLink,onClick:()=>g("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:Dt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${Dt.mcpNavIndicator} ${Dt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${Dt.settingsPage} ${Dt.automationsPage} ${y==="automations"?Dt.slideIn:""}`,children:[l.jsxs("button",{className:Dt.settingsBackButton,onClick:()=>g("main"),children:[l.jsx(ij,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:Dt.settingsSection,children:[l.jsxs("div",{className:Dt.settingsRow,children:[l.jsxs("span",{className:Dt.automationHeader,children:["MCP Connection",l.jsx(Ir,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${Dt.mcpStatusDot} ${Dt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:Dt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Dt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:Dt.divider}),l.jsxs("div",{className:`${Dt.settingsSection} ${Dt.settingsSectionGrow}`,children:[l.jsxs("div",{className:Dt.settingsRow,children:[l.jsxs("span",{className:Dt.automationHeader,children:["Webhooks",l.jsx(Ir,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:Dt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${Dt.autoSendLabel} ${e.webhooksEnabled?Dt.active:""} ${e.webhookUrl?"":Dt.disabled}`,children:"Auto-Send"}),l.jsx(Rm,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:C=>n({webhooksEnabled:C.target.checked}),disabled:!e.webhookUrl})]})]}),l.jsx("p",{className:Dt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:Dt.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:C=>C.stopPropagation(),onChange:C=>n({webhookUrl:C.target.value})})]})]})]})})}function Bm(e,n="filtered"){const{name:i,path:a}=Nl(e);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=TM(e,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Yx=!1,Lm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ma=e=>{if(!e||!e.trim())return!1;try{const n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Wc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],n7=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...Wc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${Wc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Wc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};n7();function Lr(e,n){let i=document.elementFromPoint(e,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(e,n);if(!a||a===i)break;i=a}return i}function Om(e){let n=e;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function Or(e){return e.status!=="resolved"&&e.status!=="dismissed"}function jd(e){const n=bp(e),i=n.found?n:PM(e);if(i.found&&i.source)return IM(i.source,"path")}function s7({demoAnnotations:e,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:y=!0,endpoint:g,sessionId:x,onSessionCreated:b,webhookUrl:C,className:j}={}){var go,ko,jo,Ro,Mo,Go,la;const[T,E]=_.useState(!1),[N,H]=_.useState([]),[L,A]=_.useState(!0),[X,W]=_.useState(()=>pM()),[Y,q]=_.useState(!1),ue=_.useRef(null);_.useEffect(()=>{const B=w=>{const S=ue.current;S&&S.contains(w.target)&&w.stopPropagation()},U=["mousedown","click","pointerdown"];return U.forEach(w=>document.body.addEventListener(w,B)),()=>{U.forEach(w=>document.body.removeEventListener(w,B))}},[]);const[fe,_e]=_.useState(!1),[De,qe]=_.useState(!1),[se,he]=_.useState(null),[O,oe]=_.useState({x:0,y:0}),[P,me]=_.useState(null),[be,$]=_.useState(!1),[ie,ee]=_.useState("idle"),[ve,Te]=_.useState(!1),[pe,Oe]=_.useState(!1),[et,We]=_.useState(null),[mt,Nt]=_.useState(null),[Mt,ut]=_.useState([]),[$t,_t]=_.useState(null),[Gt,Jt]=_.useState(null),[Z,Re]=_.useState(null),[dt,rt]=_.useState(null),[gt,Ue]=_.useState([]),[vt,yt]=_.useState(0),[Et,Ke]=_.useState(!1),[it,V]=_.useState(!1),[te,Se]=_.useState(!1),[je,nt]=_.useState(!1),[Ye,Ne]=_.useState(!1),[xe,ot]=_.useState("main"),[Xe,st]=_.useState(!1),[Be,tt]=_.useState(!1),[wt,Ct]=_.useState(!1),[Ze,Bt]=_.useState([]),[kt,pt]=_.useState(null),cn=_.useRef(!1),[ft,Pt]=_.useState(!1),[hn,Ot]=_.useState(!1),[jt,mn]=_.useState(1),[rs,en]=_.useState("new-page"),[gn,nn]=_.useState(""),[zt,on]=_.useState(!1),[Qe,zn]=_.useState(null),$n=_.useRef(!1),Ds=_.useRef({rearrange:null,placements:[]}),Un=_.useRef({rearrange:null,placements:[]}),[bo,Ys]=_.useState(0),[co,Ws]=_.useState(0),[tn,kn]=_.useState(0),[bn,Fs]=_.useState(0),Bn=_.useRef(new Set),hs=_.useRef(new Set),sn=_.useRef(null),ts=_.useRef(),vo=Be&&T&&!wt&&ft;_.useEffect(()=>{if(vo){Ot(!1);const B=Al(()=>{Ot(!0)});return()=>cancelAnimationFrame(B)}else Ot(!1)},[vo]);const bs=_.useRef(new Map),eo=_.useRef(new Map),Rs=_.useRef(),[qn,_s]=_.useState(!1),[jn,Uo]=_.useState([]),ci=_.useRef(jn);ci.current=jn;const[wo,ra]=_.useState(null),Bs=_.useRef(null);_.useRef(!1),_.useRef([]),_.useRef(0),_.useRef(null),_.useRef(null),_.useRef(1);const[Xs,ks]=_.useState(!1),Kn=_.useRef(null),[Sn,Gs]=_.useState([]),vn=_.useRef({cmd:!1,shift:!1}),ms=()=>{st(!0)},Si=()=>{st(!1)},Vo=()=>{Xs||(Kn.current=Wt(()=>ks(!0),850))},Ci=()=>{Kn.current&&(clearTimeout(Kn.current),Kn.current=null),ks(!1),Si()};_.useEffect(()=>()=>{Kn.current&&clearTimeout(Kn.current)},[]);const[qt,Ls]=_.useState(()=>{var B;try{const U=JSON.parse((B=localStorage.getItem("feedback-toolbar-settings"))!=null?B:"");return{...Lm,...U,annotationColorId:Wc.find(w=>w.id===U.annotationColorId)?U.annotationColorId:Lm.annotationColorId}}catch{return Lm}}),[Vn,ki]=_.useState(!0),[ji,Os]=_.useState(!1),uo=()=>{var B;(B=ue.current)==null||B.classList.add(Je.disableTransitions),ki(U=>!U),Al(()=>{var U;(U=ue.current)==null||U.classList.remove(Je.disableTransitions)})},to=!1,ls="off",[Dn,js]=_.useState(x!=null?x:null),gs=_.useRef(!1),[Ms,zs]=_.useState(g?"connecting":"disconnected"),[yn,qs]=_.useState(null),[$s,Qo]=_.useState(!1),[Es,ui]=_.useState(null),Zo=_.useRef(!1),[Jo,fo]=_.useState(new Set),[Ao,di]=_.useState(new Set),[cs,ho]=_.useState(!1),[Yo,Ts]=_.useState(!1),[mo,Wo]=_.useState(!1),As=_.useRef(null),wn=_.useRef(null),po=_.useRef(null),us=_.useRef(null),Tn=_.useRef(!1),Fo=_.useRef(0),vs=_.useRef(null),No=_.useRef(null),fi=8,Mi=50,ei=_.useRef(null),ti=_.useRef(null),Xo=_.useRef(null),At=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(je)Ne(!0);else{st(!1),ot("main");const B=Wt(()=>Ne(!1),0);return()=>clearTimeout(B)}},[je]);const no=T&&L&&!Be;_.useEffect(()=>{if(no){qe(!1),_e(!0),fo(new Set);const B=Wt(()=>{fo(U=>{const w=new Set(U);return N.forEach(S=>w.add(S.id)),w})},350);return()=>clearTimeout(B)}else if(fe){qe(!0);const B=Wt(()=>{_e(!1),qe(!1)},250);return()=>clearTimeout(B)}},[no]),_.useEffect(()=>{V(!0),yt(window.scrollY);const B=Em(At);H(B.filter(Or)),Yx||(Os(!0),Yx=!0,Wt(()=>Os(!1),750));try{const U=localStorage.getItem("feedback-toolbar-theme");U!==null&&ki(U==="dark")}catch{}try{const U=localStorage.getItem("feedback-toolbar-position");if(U){const w=JSON.parse(U);typeof w.x=="number"&&typeof w.y=="number"&&qs(w)}}catch{}},[At]),_.useEffect(()=>{it&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(qt))},[qt,it]),_.useEffect(()=>{it&&localStorage.setItem("feedback-toolbar-theme",Vn?"dark":"light")},[Vn,it]);const Qi=_.useRef(!1);_.useEffect(()=>{const B=Qi.current;Qi.current=$s,B&&!$s&&yn&&it&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(yn))},[$s,yn,it]),_.useEffect(()=>{if(!g||!it||gs.current)return;gs.current=!0,zs("connecting"),(async()=>{try{const U=hM(At),w=x||U;let S=!1;if(w)try{const k=await Lx(g,w);js(k.id),zs("connected"),Tm(At,k.id),S=!0;const R=Em(At),z=new Set(k.annotations.map(ae=>ae.id)),J=R.filter(ae=>!z.has(ae.id));if(J.length>0){const Me=`${typeof window<"u"?window.location.origin:""}${At}`,G=(await Promise.allSettled(J.map(le=>Cl(g,k.id,{...le,sessionId:k.id,url:Me})))).map((le,Q)=>le.status==="fulfilled"?le.value:(console.warn("[Agentation] Failed to sync annotation:",le.reason),J[Q])),re=[...k.annotations,...G];H(re.filter(Or)),Tc(At,re.filter(Or),k.id)}else H(k.annotations.filter(Or)),Tc(At,k.annotations.filter(Or),k.id)}catch(k){console.warn("[Agentation] Could not join session, creating new:",k),mM(At)}if(!S){const k=typeof window<"u"?window.location.href:"/",R=await Am(g,k);js(R.id),zs("connected"),Tm(At,R.id),b==null||b(R.id);const z=iM(),J=typeof window<"u"?window.location.origin:"",ae=[];for(const[Me,Ge]of z){const G=Ge.filter(Q=>!Q._syncedTo);if(G.length===0)continue;const re=`${J}${Me}`,le=Me===At;ae.push((async()=>{try{const Q=le?R:await Am(g,re),at=(await Promise.allSettled(G.map(ct=>Cl(g,Q.id,{...ct,sessionId:Q.id,url:re})))).map((ct,St)=>ct.status==="fulfilled"?ct.value:(console.warn("[Agentation] Failed to sync annotation:",ct.reason),G[St])).filter(Or);if(Tc(Me,at,Q.id),le){const ct=new Set(G.map(St=>St.id));H(St=>{const ht=St.filter(bt=>!ct.has(bt.id));return[...at,...ht]})}}catch(Q){console.warn(`[Agentation] Failed to sync annotations for ${Me}:`,Q)}})())}await Promise.allSettled(ae)}}catch(U){zs("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",U)}})()},[g,x,it,b,At]),_.useEffect(()=>{if(!g||!it)return;const B=async()=>{try{(await fetch(`${g}/health`)).ok?zs("connected"):zs("disconnected")}catch{zs("disconnected")}};B();const U=lj(B,1e4);return()=>clearInterval(U)},[g,it]),_.useEffect(()=>{if(!g||!it||!Dn)return;const B=new EventSource(`${g}/sessions/${Dn}/events`),U=["resolved","dismissed"],w=S=>{var k;try{const R=JSON.parse(S.data);if(U.includes((k=R.payload)==null?void 0:k.status)){const z=R.payload.id,J=R.payload.kind;if(J==="placement"){for(const[ae,Me]of bs.current)if(Me===z){bs.current.delete(ae),Bt(Ge=>Ge.filter(G=>G.id!==ae));break}}else if(J==="rearrange"){for(const[ae,Me]of eo.current)if(Me===z){eo.current.delete(ae),zn(Ge=>{if(!Ge)return null;const G=Ge.sections.filter(re=>re.id!==ae);return G.length===0?null:{...Ge,sections:G}});break}}else di(ae=>new Set(ae).add(z)),Wt(()=>{H(ae=>ae.filter(Me=>Me.id!==z)),di(ae=>{const Me=new Set(ae);return Me.delete(z),Me})},150)}}catch{}};return B.addEventListener("annotation.updated",w),()=>{B.removeEventListener("annotation.updated",w),B.close()}},[g,it,Dn]),_.useEffect(()=>{if(!g||!it)return;const B=No.current==="disconnected",U=Ms==="connected";No.current=Ms,B&&U&&(async()=>{try{const S=Em(At);if(S.length===0)return;const R=`${typeof window<"u"?window.location.origin:""}${At}`;let z=Dn,J=[];if(z)try{J=(await Lx(g,z)).annotations}catch{z=null}z||(z=(await Am(g,R)).id,js(z),Tm(At,z));const ae=new Set(J.map(Ge=>Ge.id)),Me=S.filter(Ge=>!ae.has(Ge.id));if(Me.length>0){const G=(await Promise.allSettled(Me.map(Q=>Cl(g,z,{...Q,sessionId:z,url:R})))).map((Q,Ee)=>Q.status==="fulfilled"?Q.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Q.reason),Me[Ee])),le=[...J,...G].filter(Or);H(le),Tc(At,le,z)}}catch(S){console.warn("[Agentation] Failed to sync on reconnect:",S)}})()},[Ms,g,it,Dn,At]);const zi=_.useCallback(()=>{Y||(q(!0),nt(!1),E(!1),Wt(()=>{_M(!0),W(!0),q(!1)},400))},[Y]);_.useEffect(()=>{if(!i||!it||!e||e.length===0||N.length>0)return;const B=[];return B.push(Wt(()=>{E(!0)},n-200)),e.forEach((U,w)=>{const S=n+w*300;B.push(Wt(()=>{const k=document.querySelector(U.selector);if(!k)return;const R=k.getBoundingClientRect(),{name:z,path:J}=Nl(k),ae={id:`demo-${Date.now()}-${w}`,x:(R.left+R.width/2)/window.innerWidth*100,y:R.top+R.height/2+window.scrollY,comment:U.comment,element:z,elementPath:J,timestamp:Date.now(),selectedText:U.selectedText,boundingBox:{x:R.left,y:R.top+window.scrollY,width:R.width,height:R.height},nearbyText:Mc(k),cssClasses:Ec(k)};H(Me=>[...Me,ae])},S))}),()=>{B.forEach(clearTimeout)}},[i,it,e,n]),_.useEffect(()=>{const B=()=>{yt(window.scrollY),Ke(!0),Xo.current&&clearTimeout(Xo.current),Xo.current=Wt(()=>{Ke(!1)},150)};return window.addEventListener("scroll",B,{passive:!0}),()=>{window.removeEventListener("scroll",B),Xo.current&&clearTimeout(Xo.current)}},[]),_.useEffect(()=>{it&&N.length>0?Dn?Tc(At,N,Dn):b2(At,N):it&&N.length===0&&localStorage.removeItem(Qd(At))},[N,At,it,Dn]),_.useEffect(()=>{if(it&&!cn.current){cn.current=!0;const B=aM(At);B.length>0&&Bt(B)}},[it,At]),_.useEffect(()=>{it&&cn.current&&!ft&&(Ze.length>0?rM(At,Ze):lM(At))},[Ze,At,it,ft]),_.useEffect(()=>{if(it&&!$n.current){$n.current=!0;const B=cM(At);if(B){const U={...B,sections:B.sections.map(w=>{var S;return{...w,currentRect:(S=w.currentRect)!=null?S:{...w.originalRect}}})};zn(U)}}},[it,At]),_.useEffect(()=>{it&&$n.current&&!ft&&(Qe?uM(At,Qe):dM(At))},[Qe,At,it,ft]);const $i=_.useRef(!1);_.useEffect(()=>{if(it&&!$i.current){$i.current=!0;const B=fM(At);B&&(Un.current={rearrange:B.rearrange,placements:B.placements||[]},B.purpose&&nn(B.purpose))}},[it,At]),_.useEffect(()=>{var U,w,S,k,R;if(!it||!$i.current)return;const B=Un.current;ft?((w=(U=Qe==null?void 0:Qe.sections)==null?void 0:U.length)!=null?w:0)>0||Ze.length>0||gn?Bx(At,{rearrange:Qe,placements:Ze,purpose:gn}):Sd(At):((R=(k=(S=B.rearrange)==null?void 0:S.sections)==null?void 0:k.length)!=null?R:0)>0||B.placements.length>0||gn?Bx(At,{rearrange:B.rearrange,placements:B.placements,purpose:gn}):Sd(At)},[Qe,Ze,gn,ft,At,it]),_.useEffect(()=>{Be&&!Qe&&zn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Be,Qe]),_.useEffect(()=>{if(!g||!Dn)return;const B=bs.current,U=new Set(Ze.map(w=>w.id));for(const w of Ze){if(B.has(w.id))continue;B.set(w.id,"");const S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:At;Cl(g,Dn,{id:w.id,x:w.x/window.innerWidth*100,y:w.y,comment:`Place ${w.type} at (${Math.round(w.x)}, ${Math.round(w.y)}), ${w.width}×${w.height}px${w.text?` — "${w.text}"`:""}`,element:`[design:${w.type}]`,elementPath:"[placement]",timestamp:w.timestamp,url:S,intent:"change",severity:"important",kind:"placement",placement:{componentType:w.type,width:w.width,height:w.height,scrollY:w.scrollY,text:w.text}}).then(k=>{B.has(w.id)&&B.set(w.id,k.id)}).catch(k=>{console.warn("[Agentation] Failed to sync placement annotation:",k),B.delete(w.id)})}for(const[w,S]of B)U.has(w)||(B.delete(w),S&&cr(g,S).catch(()=>{}))},[Ze,g,Dn,At]),_.useEffect(()=>{if(!(!g||!Dn))return Rs.current&&clearTimeout(Rs.current),Rs.current=Wt(()=>{const B=eo.current;if(!Qe||Qe.sections.length===0){for(const[,S]of B)S&&cr(g,S).catch(()=>{});B.clear();return}const U=new Set(Qe.sections.map(S=>S.id)),w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:At;for(const S of Qe.sections){const k=S.originalRect,R=S.currentRect;if(!(Math.abs(k.x-R.x)>1||Math.abs(k.y-R.y)>1||Math.abs(k.width-R.width)>1||Math.abs(k.height-R.height)>1)){const ae=B.get(S.id);ae&&(B.delete(S.id),cr(g,ae).catch(()=>{}));continue}const J=B.get(S.id);J?Ox(g,J,{comment:`Move ${S.label} section (${S.tagName}) — from (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)} to (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}×${Math.round(R.height)}`}).catch(ae=>{console.warn("[Agentation] Failed to update rearrange annotation:",ae)}):(B.set(S.id,""),Cl(g,Dn,{id:S.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Move ${S.label} section (${S.tagName}) — from (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)} to (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}×${Math.round(R.height)}`,element:S.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:w,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:S.selector,label:S.label,tagName:S.tagName,originalRect:k,currentRect:R}}).then(ae=>{B.has(S.id)&&B.set(S.id,ae.id)}).catch(ae=>{console.warn("[Agentation] Failed to sync rearrange annotation:",ae),B.delete(S.id)}))}for(const[S,k]of B)U.has(S)||(B.delete(S),k&&cr(g,k).catch(()=>{}))},300),()=>{Rs.current&&clearTimeout(Rs.current)}},[Qe,g,Dn,At]);const So=_.useRef(new Map);_.useLayoutEffect(()=>{var w;const B=(w=Qe==null?void 0:Qe.sections)!=null?w:[],U=new Set;if((Be||wt)&&T)for(const S of B){U.add(S.id);try{const k=document.querySelector(S.selector);if(!k)continue;if(!So.current.has(S.id)){const R={transform:k.style.transform,transformOrigin:k.style.transformOrigin,opacity:k.style.opacity,position:k.style.position,zIndex:k.style.zIndex,display:k.style.display},z=[];let J=k.parentElement;for(;J&&J!==document.body;){const Me=getComputedStyle(J);(Me.overflow!=="visible"||Me.overflowX!=="visible"||Me.overflowY!=="visible")&&(z.push({el:J,overflow:J.style.overflow}),J.style.overflow="visible"),J=J.parentElement}getComputedStyle(k).display==="inline"&&(k.style.display="inline-block"),So.current.set(S.id,{el:k,origStyles:R,ancestors:z}),k.style.transformOrigin="top left",k.style.zIndex="9999"}}catch{}}for(const[S,k]of So.current)if(!U.has(S)){const{el:R,origStyles:z,ancestors:J}=k;R.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",R.style.transform=z.transform,R.style.transformOrigin=z.transformOrigin,R.style.opacity=z.opacity,R.style.position=z.position,R.style.zIndex=z.zIndex,So.current.delete(S),Wt(()=>{R.style.transition="",R.style.display=z.display;for(const ae of J)ae.el.style.overflow=ae.overflow},450)}},[Qe,Be,wt,T]),_.useEffect(()=>()=>{for(const[,B]of So.current){const{el:U,origStyles:w,ancestors:S}=B;U.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",U.style.transform=w.transform,U.style.transformOrigin=w.transformOrigin,U.style.opacity=w.opacity,U.style.position=w.position,U.style.zIndex=w.zIndex,Wt(()=>{U.style.transition="",U.style.display=w.display;for(const k of S)k.el.style.overflow=k.overflow},450)}So.current.clear()},[]);const Do=_.useCallback(()=>{Ct(!0),tt(!1),pt(null),clearTimeout(ts.current),ts.current=Wt(()=>{Ct(!1)},300)},[]),Co=_.useCallback(()=>{Be&&(Ct(!0),tt(!1),pt(null),clearTimeout(ts.current),ts.current=Wt(()=>{Ct(!1)},300)),E(!1)},[Be]),hi=_.useCallback(()=>{te||(uj(),Se(!0))},[te]),M=_.useCallback(()=>{te&&(bx(),Se(!1))},[te]),F=_.useCallback(()=>{te?M():hi()},[te,hi,M]),de=_.useCallback(()=>{if(Sn.length===0)return;const B=Sn[0],U=B.element,w=Sn.length>1,S=Sn.map(k=>k.element.getBoundingClientRect());if(w){const k={left:Math.min(...S.map(Q=>Q.left)),top:Math.min(...S.map(Q=>Q.top)),right:Math.max(...S.map(Q=>Q.right)),bottom:Math.max(...S.map(Q=>Q.bottom))},R=Sn.slice(0,5).map(Q=>Q.name).join(", "),z=Sn.length>5?` +${Sn.length-5} more`:"",J=S.map(Q=>({x:Q.left,y:Q.top+window.scrollY,width:Q.width,height:Q.height})),Me=Sn[Sn.length-1].element,Ge=S[S.length-1],G=Ge.left+Ge.width/2,re=Ge.top+Ge.height/2,le=Om(Me);me({x:G/window.innerWidth*100,y:le?re:re+window.scrollY,clientY:re,element:`${Sn.length} elements: ${R}${z}`,elementPath:"multi-select",boundingBox:{x:k.left,y:k.top+window.scrollY,width:k.right-k.left,height:k.bottom-k.top},isMultiSelect:!0,isFixed:le,elementBoundingBoxes:J,multiSelectElements:Sn.map(Q=>Q.element),targetElement:Me,fullPath:bd(U),accessibility:xd(U),computedStyles:yd(U),computedStylesObj:gd(U),nearbyElements:_d(U),cssClasses:Ec(U),nearbyText:Mc(U),sourceFile:jd(U)})}else{const k=S[0],R=Om(U);me({x:k.left/window.innerWidth*100,y:R?k.top:k.top+window.scrollY,clientY:k.top,element:B.name,elementPath:B.path,boundingBox:{x:k.left,y:R?k.top:k.top+window.scrollY,width:k.width,height:k.height},isFixed:R,fullPath:bd(U),accessibility:xd(U),computedStyles:yd(U),computedStylesObj:gd(U),nearbyElements:_d(U),cssClasses:Ec(U),nearbyText:Mc(U),reactComponents:B.reactComponents,sourceFile:jd(U)})}Gs([]),he(null)},[Sn]);_.useEffect(()=>{T||(me(null),Re(null),rt(null),Ue([]),he(null),nt(!1),Gs([]),vn.current={cmd:!1,shift:!1},te&&M())},[T,te,M]),_.useEffect(()=>()=>{bx()},[]),_.useEffect(()=>{if(!T)return;const B=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),U=":not([data-agentation-root]):not([data-agentation-root] *)",w=document.createElement("style");return w.id="feedback-cursor-styles",w.textContent=`
      body ${U} {
        cursor: crosshair !important;
      }

      body :is(${B})${U} {
        cursor: text !important;
      }
    `,document.head.appendChild(w),()=>{const S=document.getElementById("feedback-cursor-styles");S&&S.remove()}},[T]),_.useEffect(()=>{if(wo!==null&&T)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[wo,T]),_.useEffect(()=>{if(!T||P||qn||Be)return;const B=U=>{const w=U.composedPath()[0]||U.target;if(oi(w,"[data-feedback-toolbar]")){he(null);return}const S=Lr(U.clientX,U.clientY);if(!S||oi(S,"[data-feedback-toolbar]")){he(null);return}const{name:k,elementName:R,path:z,reactComponents:J}=Bm(S,ls),ae=S.getBoundingClientRect();he({element:k,elementName:R,elementPath:z,rect:ae,reactComponents:J}),oe({x:U.clientX,y:U.clientY})};return document.addEventListener("mousemove",B),()=>document.removeEventListener("mousemove",B)},[T,P,qn,Be,ls,jn]);const Ae=_.useCallback(B=>{var U;if(Re(B),We(null),Nt(null),ut([]),(U=B.elementBoundingBoxes)!=null&&U.length){const w=[];for(const S of B.elementBoundingBoxes){const k=S.x+S.width/2,R=S.y+S.height/2-window.scrollY,z=Lr(k,R);z&&w.push(z)}Ue(w),rt(null)}else if(B.boundingBox){const w=B.boundingBox,S=w.x+w.width/2,k=B.isFixed?w.y+w.height/2:w.y+w.height/2-window.scrollY,R=Lr(S,k);if(R){const z=R.getBoundingClientRect(),J=z.width/w.width,ae=z.height/w.height;J<.5||ae<.5?rt(null):rt(R)}else rt(null);Ue([])}else rt(null),Ue([])},[]);_.useEffect(()=>{if(!T||qn||Be)return;const B=U=>{var Ie,at;if(Tn.current){Tn.current=!1;return}const w=U.composedPath()[0]||U.target;if(oi(w,"[data-feedback-toolbar]")||oi(w,"[data-annotation-popup]")||oi(w,"[data-annotation-marker]"))return;if(U.metaKey&&U.shiftKey&&!P&&!Z){U.preventDefault(),U.stopPropagation();const ct=Lr(U.clientX,U.clientY);if(!ct)return;const St=ct.getBoundingClientRect(),{name:ht,path:bt,reactComponents:dn}=Bm(ct,ls),Ft=Sn.findIndex(fn=>fn.element===ct);Ft>=0?Gs(fn=>fn.filter((Ln,On)=>On!==Ft)):Gs(fn=>[...fn,{element:ct,rect:St,name:ht,path:bt,reactComponents:dn!=null?dn:void 0}]);return}const S=oi(w,"button, a, input, select, textarea, [role='button'], [onclick]");if(qt.blockInteractions&&S&&(U.preventDefault(),U.stopPropagation()),P){if(S&&!qt.blockInteractions)return;U.preventDefault(),(Ie=ei.current)==null||Ie.shake();return}if(Z){if(S&&!qt.blockInteractions)return;U.preventDefault(),(at=ti.current)==null||at.shake();return}U.preventDefault();const k=Lr(U.clientX,U.clientY);if(!k)return;const{name:R,path:z,reactComponents:J}=Bm(k,ls),ae=k.getBoundingClientRect(),Me=U.clientX/window.innerWidth*100,Ge=Om(k),G=Ge?U.clientY:U.clientY+window.scrollY,re=window.getSelection();let le;re&&re.toString().trim().length>0&&(le=re.toString().trim().slice(0,500));const Q=gd(k),Ee=yd(k);me({x:Me,y:G,clientY:U.clientY,element:R,elementPath:z,selectedText:le,boundingBox:{x:ae.left,y:Ge?ae.top:ae.top+window.scrollY,width:ae.width,height:ae.height},nearbyText:Mc(k),cssClasses:Ec(k),isFixed:Ge,fullPath:bd(k),accessibility:xd(k),computedStyles:Ee,computedStylesObj:Q,nearbyElements:_d(k),reactComponents:J!=null?J:void 0,sourceFile:jd(k),targetElement:k}),he(null)};return document.addEventListener("click",B,!0),()=>document.removeEventListener("click",B,!0)},[T,qn,Be,P,Z,qt.blockInteractions,ls,Sn]),_.useEffect(()=>{if(!T)return;const B=S=>{S.key==="Meta"&&(vn.current.cmd=!0),S.key==="Shift"&&(vn.current.shift=!0)},U=S=>{const k=vn.current.cmd&&vn.current.shift;S.key==="Meta"&&(vn.current.cmd=!1),S.key==="Shift"&&(vn.current.shift=!1);const R=vn.current.cmd&&vn.current.shift;k&&!R&&Sn.length>0&&de()},w=()=>{vn.current={cmd:!1,shift:!1},Gs([])};return document.addEventListener("keydown",B),document.addEventListener("keyup",U),window.addEventListener("blur",w),()=>{document.removeEventListener("keydown",B),document.removeEventListener("keyup",U),window.removeEventListener("blur",w)}},[T,Sn,de]),_.useEffect(()=>{if(!T||P||qn||Be)return;const B=U=>{const w=U.composedPath()[0]||U.target;oi(w,"[data-feedback-toolbar]")||oi(w,"[data-annotation-marker]")||oi(w,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(w.tagName)||w.isContentEditable||(U.preventDefault(),As.current={x:U.clientX,y:U.clientY})};return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[T,P,qn,Be]),_.useEffect(()=>{if(!T||P)return;const B=U=>{if(!As.current)return;const w=U.clientX-As.current.x,S=U.clientY-As.current.y,k=w*w+S*S,R=fi*fi;if(!mo&&k>=R&&(wn.current=As.current,Wo(!0),U.preventDefault()),(mo||k>=R)&&wn.current){if(po.current){const ht=Math.min(wn.current.x,U.clientX),bt=Math.min(wn.current.y,U.clientY),dn=Math.abs(U.clientX-wn.current.x),Ft=Math.abs(U.clientY-wn.current.y);po.current.style.transform=`translate(${ht}px, ${bt}px)`,po.current.style.width=`${dn}px`,po.current.style.height=`${Ft}px`}const z=Date.now();if(z-Fo.current<Mi)return;Fo.current=z;const J=wn.current.x,ae=wn.current.y,Me=Math.min(J,U.clientX),Ge=Math.min(ae,U.clientY),G=Math.max(J,U.clientX),re=Math.max(ae,U.clientY),le=(Me+G)/2,Q=(Ge+re)/2,Ee=new Set,Ie=[[Me,Ge],[G,Ge],[Me,re],[G,re],[le,Q],[le,Ge],[le,re],[Me,Q],[G,Q]];for(const[ht,bt]of Ie){const dn=document.elementsFromPoint(ht,bt);for(const Ft of dn)Ft instanceof HTMLElement&&Ee.add(Ft)}const at=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const ht of at)if(ht instanceof HTMLElement){const bt=ht.getBoundingClientRect(),dn=bt.left+bt.width/2,Ft=bt.top+bt.height/2,fn=dn>=Me&&dn<=G&&Ft>=Ge&&Ft<=re,Ln=Math.min(bt.right,G)-Math.max(bt.left,Me),On=Math.min(bt.bottom,re)-Math.max(bt.top,Ge),Eo=Ln>0&&On>0?Ln*On:0,Bo=bt.width*bt.height,mi=Bo>0?Eo/Bo:0;(fn||mi>.5)&&Ee.add(ht)}const ct=[],St=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const ht of Ee){if(oi(ht,"[data-feedback-toolbar]")||oi(ht,"[data-annotation-marker]"))continue;const bt=ht.getBoundingClientRect();if(!(bt.width>window.innerWidth*.8&&bt.height>window.innerHeight*.5)&&!(bt.width<10||bt.height<10)&&bt.left<G&&bt.right>Me&&bt.top<re&&bt.bottom>Ge){const dn=ht.tagName;let Ft=St.has(dn);if(!Ft&&(dn==="DIV"||dn==="SPAN")){const fn=ht.textContent&&ht.textContent.trim().length>0,Ln=ht.onclick!==null||ht.getAttribute("role")==="button"||ht.getAttribute("role")==="link"||ht.classList.contains("clickable")||ht.hasAttribute("data-clickable");(fn||Ln)&&!ht.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Ft=!0)}if(Ft){let fn=!1;for(const Ln of ct)if(Ln.left<=bt.left&&Ln.right>=bt.right&&Ln.top<=bt.top&&Ln.bottom>=bt.bottom){fn=!0;break}fn||ct.push(bt)}}}if(us.current){const ht=us.current;for(;ht.children.length>ct.length;)ht.removeChild(ht.lastChild);ct.forEach((bt,dn)=>{let Ft=ht.children[dn];Ft||(Ft=document.createElement("div"),Ft.className=Je.selectedElementHighlight,ht.appendChild(Ft)),Ft.style.transform=`translate(${bt.left}px, ${bt.top}px)`,Ft.style.width=`${bt.width}px`,Ft.style.height=`${bt.height}px`})}}};return document.addEventListener("mousemove",B,{passive:!0}),()=>document.removeEventListener("mousemove",B)},[T,P,mo,fi]),_.useEffect(()=>{if(!T)return;const B=U=>{const w=mo,S=wn.current;if(mo&&S){Tn.current=!0;const k=Math.min(S.x,U.clientX),R=Math.min(S.y,U.clientY),z=Math.max(S.x,U.clientX),J=Math.max(S.y,U.clientY),ae=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(le=>{if(!(le instanceof HTMLElement)||oi(le,"[data-feedback-toolbar]")||oi(le,"[data-annotation-marker]"))return;const Q=le.getBoundingClientRect();Q.width>window.innerWidth*.8&&Q.height>window.innerHeight*.5||Q.width<10||Q.height<10||Q.left<z&&Q.right>k&&Q.top<J&&Q.bottom>R&&ae.push({element:le,rect:Q})});const Ge=ae.filter(({element:le})=>!ae.some(({element:Q})=>Q!==le&&le.contains(Q))),G=U.clientX/window.innerWidth*100,re=U.clientY+window.scrollY;if(Ge.length>0){const le=Ge.reduce((St,{rect:ht})=>({left:Math.min(St.left,ht.left),top:Math.min(St.top,ht.top),right:Math.max(St.right,ht.right),bottom:Math.max(St.bottom,ht.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Q=Ge.slice(0,5).map(({element:St})=>Nl(St).name).join(", "),Ee=Ge.length>5?` +${Ge.length-5} more`:"",Ie=Ge[0].element,at=gd(Ie),ct=yd(Ie);me({x:G,y:re,clientY:U.clientY,element:`${Ge.length} elements: ${Q}${Ee}`,elementPath:"multi-select",boundingBox:{x:le.left,y:le.top+window.scrollY,width:le.right-le.left,height:le.bottom-le.top},isMultiSelect:!0,fullPath:bd(Ie),accessibility:xd(Ie),computedStyles:ct,computedStylesObj:at,nearbyElements:_d(Ie),cssClasses:Ec(Ie),nearbyText:Mc(Ie),sourceFile:jd(Ie)})}else{const le=Math.abs(z-k),Q=Math.abs(J-R);le>20&&Q>20&&me({x:G,y:re,clientY:U.clientY,element:"Area selection",elementPath:`region at (${Math.round(k)}, ${Math.round(R)})`,boundingBox:{x:k,y:R+window.scrollY,width:le,height:Q},isMultiSelect:!0})}he(null)}else w&&(Tn.current=!0);As.current=null,wn.current=null,Wo(!1),us.current&&(us.current.innerHTML="")};return document.addEventListener("mouseup",B),()=>document.removeEventListener("mouseup",B)},[T,mo]);const Pe=_.useCallback(async(B,U,w)=>{const S=qt.webhookUrl||C;if(!S||!qt.webhooksEnabled&&!w)return!1;try{return(await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:B,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...U})})).ok}catch(k){return console.warn("[Agentation] Webhook failed:",k),!1}},[C,qt.webhookUrl,qt.webhooksEnabled]),lt=_.useCallback(B=>{var w;if(!P)return;const U={id:Date.now().toString(),x:P.x,y:P.y,comment:B,element:P.element,elementPath:P.elementPath,timestamp:Date.now(),selectedText:P.selectedText,boundingBox:P.boundingBox,nearbyText:P.nearbyText,cssClasses:P.cssClasses,isMultiSelect:P.isMultiSelect,isFixed:P.isFixed,fullPath:P.fullPath,accessibility:P.accessibility,computedStyles:P.computedStyles,nearbyElements:P.nearbyElements,reactComponents:P.reactComponents,sourceFile:P.sourceFile,elementBoundingBoxes:P.elementBoundingBoxes,...g&&Dn?{sessionId:Dn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};H(S=>[...S,U]),vs.current=U.id,Wt(()=>{vs.current=null},300),Wt(()=>{fo(S=>new Set(S).add(U.id))},250),a==null||a(U),Pe("annotation.add",{annotation:U}),ho(!0),Wt(()=>{me(null),ho(!1)},150),(w=window.getSelection())==null||w.removeAllRanges(),g&&Dn&&Cl(g,Dn,U).then(S=>{S.id!==U.id&&(H(k=>k.map(R=>R.id===U.id?{...R,id:S.id}:R)),fo(k=>{const R=new Set(k);return R.delete(U.id),R.add(S.id),R}))}).catch(S=>{console.warn("[Agentation] Failed to sync annotation:",S)})},[P,a,Pe,g,Dn]),Yt=_.useCallback(()=>{ho(!0),Wt(()=>{me(null),ho(!1)},150)},[]),Ht=_.useCallback(B=>{const U=N.findIndex(S=>S.id===B),w=N[U];(Z==null?void 0:Z.id)===B&&(Ts(!0),Wt(()=>{Re(null),rt(null),Ue([]),Ts(!1)},150)),_t(B),di(S=>new Set(S).add(B)),w&&(c==null||c(w),Pe("annotation.delete",{annotation:w})),g&&cr(g,B).catch(S=>{console.warn("[Agentation] Failed to delete annotation from server:",S)}),Wt(()=>{H(S=>S.filter(k=>k.id!==B)),di(S=>{const k=new Set(S);return k.delete(B),k}),_t(null),U<N.length-1&&(Jt(U),Wt(()=>Jt(null),200))},150)},[N,Z,c,Pe,g]),Zt=_.useCallback(B=>{var U;if(!B){We(null),Nt(null),ut([]);return}if(We(B.id),(U=B.elementBoundingBoxes)!=null&&U.length){const w=[];for(const S of B.elementBoundingBoxes){const k=S.x+S.width/2,R=S.y+S.height/2-window.scrollY,J=document.elementsFromPoint(k,R).find(ae=>!ae.closest("[data-annotation-marker]")&&!ae.closest("[data-agentation-root]"));J&&w.push(J)}ut(w),Nt(null)}else if(B.boundingBox){const w=B.boundingBox,S=w.x+w.width/2,k=B.isFixed?w.y+w.height/2:w.y+w.height/2-window.scrollY,R=Lr(S,k);if(R){const z=R.getBoundingClientRect(),J=z.width/w.width,ae=z.height/w.height;J<.5||ae<.5?Nt(null):Nt(R)}else Nt(null);ut([])}else Nt(null),ut([])},[]),xt=_.useCallback(B=>{if(!Z)return;const U={...Z,comment:B};H(w=>w.map(S=>S.id===Z.id?U:S)),u==null||u(U),Pe("annotation.update",{annotation:U}),g&&Ox(g,Z.id,{comment:B}).catch(w=>{console.warn("[Agentation] Failed to update annotation on server:",w)}),Ts(!0),Wt(()=>{Re(null),rt(null),Ue([]),Ts(!1)},150)},[Z,u,Pe,g]),un=_.useCallback(()=>{Ts(!0),Wt(()=>{Re(null),rt(null),Ue([]),Ts(!1)},150)},[]),an=_.useCallback(()=>{const B=N.length,U=Ze.length>0||!!Qe;if(B===0&&jn.length===0&&!U)return;if(d==null||d(N),Pe("annotations.clear",{annotations:N}),g){Promise.all(N.map(k=>cr(g,k.id).catch(R=>{console.warn("[Agentation] Failed to delete annotation from server:",R)})));for(const[,k]of bs.current)k&&cr(g,k).catch(()=>{});bs.current.clear();for(const[,k]of eo.current)k&&cr(g,k).catch(()=>{});eo.current.clear()}Oe(!0),Te(!0),Uo([]);const w=Bs.current;if(w){const k=w.getContext("2d");k&&k.clearRect(0,0,w.width,w.height)}(Ze.length>0||Qe)&&(kn(k=>k+1),Fs(k=>k+1),Wt(()=>{Bt([]),zn(null)},200)),ft&&Pt(!1),gn&&nn(""),Un.current={rearrange:null,placements:[]},Sd(At);const S=B*30+200;Wt(()=>{H([]),fo(new Set),localStorage.removeItem(Qd(At)),Oe(!1)},S),Wt(()=>Te(!1),1500)},[At,N,jn,Ze,Qe,ft,gn,d,Pe,g]),Gn=_.useCallback(async()=>{const B=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:At,U=Be&&ft;let w;if(U){if(Ze.length===0&&!Qe&&!gn)return;w=""}else{if(w=Ix(N,B,qt.outputDetail),!w&&jn.length===0&&Ze.length===0&&!Qe)return;w||(w=`## Page Feedback: ${B}
`)}if(!U&&jn.length>0){const S=new Set;for(const J of N)J.drawingIndex!=null&&S.add(J.drawingIndex);const k=Bs.current;k&&(k.style.visibility="hidden");const R=[],z=window.scrollY;for(let J=0;J<jn.length;J++){if(S.has(J))continue;const ae=jn[J];if(ae.points.length<2)continue;const Me=ae.fixed?ae.points:ae.points.map(Wn=>({x:Wn.x,y:Wn.y-z}));let Ge=1/0,G=1/0,re=-1/0,le=-1/0;for(const Wn of Me)Ge=Math.min(Ge,Wn.x),G=Math.min(G,Wn.y),re=Math.max(re,Wn.x),le=Math.max(le,Wn.y);const Q=re-Ge,Ee=le-G,Ie=Math.hypot(Q,Ee),at=Me[0],ct=Me[Me.length-1],St=Math.hypot(ct.x-at.x,ct.y-at.y);let ht;const bt=St<Ie*.35,dn=Q/Math.max(Ee,1);if(bt&&Ie>20){const Wn=Math.max(Q,Ee)*.15;let pi=0;for(const Ti of Me){const gr=Ti.x-Ge<Wn,Wr=re-Ti.x<Wn,Fr=Ti.y-G<Wn,Xr=le-Ti.y<Wn;(gr||Wr)&&(Fr||Xr)&&pi++}ht=pi>Me.length*.15?"box":"circle"}else dn>3&&Ee<40?ht="underline":St>Ie*.5?ht="arrow":ht="drawing";const Ft=Math.min(10,Me.length),fn=Math.max(1,Math.floor(Me.length/Ft)),Ln=new Set,On=[],Eo=[at];for(let Wn=fn;Wn<Me.length-1;Wn+=fn)Eo.push(Me[Wn]);Eo.push(ct);for(const Wn of Eo){const pi=Lr(Wn.x,Wn.y);if(!pi||Ln.has(pi)||oi(pi,"[data-feedback-toolbar]"))continue;Ln.add(pi);const{name:Ti}=Nl(pi);On.includes(Ti)||On.push(Ti)}const Bo=`${Math.round(Ge)},${Math.round(G)} → ${Math.round(re)},${Math.round(le)}`;let mi;(ht==="circle"||ht==="box")&&On.length>0?mi=`${ht==="box"?"Boxed":"Circled"} **${On[0]}**${On.length>1?` (and ${On.slice(1).join(", ")})`:""} (region: ${Bo})`:ht==="underline"&&On.length>0?mi=`Underlined **${On[0]}** (${Bo})`:ht==="arrow"&&On.length>=2?mi=`Arrow from **${On[0]}** to **${On[On.length-1]}** (${Math.round(at.x)},${Math.round(at.y)} → ${Math.round(ct.x)},${Math.round(ct.y)})`:On.length>0?mi=`${ht==="arrow"?"Arrow":"Drawing"} near **${On.join("**, **")}** (region: ${Bo})`:mi=`Drawing at ${Bo}`,R.push(mi)}k&&(k.style.visibility=""),R.length>0&&(w+=`
**Drawings:**
`,R.forEach((J,ae)=>{w+=`${ae+1}. ${J}
`}))}if((Ze.length>0||U&&gn)&&(w+=`
`+Dx(Ze,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:gn||void 0},qt.outputDetail)),Qe){const S=Rx(Qe,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});S&&(w+=`
`+S)}if(y)try{await navigator.clipboard.writeText(w)}catch{}h==null||h(w),$(!0),Wt(()=>$(!1),2e3),qt.autoClearAfterCopy&&Wt(()=>an(),500)},[N,jn,Ze,Qe,ft,Be,rs,gn,At,qt.outputDetail,ls,qt.autoClearAfterCopy,an,y,h]),Is=_.useCallback(async()=>{const B=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:At;let U=Ix(N,B,qt.outputDetail);if(!U&&Ze.length===0&&!Qe)return;if(U||(U=`## Page Feedback: ${B}
`),Ze.length>0&&(U+=`
`+Dx(Ze,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:gn||void 0},qt.outputDetail)),Qe){const S=Rx(Qe,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});S&&(U+=`
`+S)}p&&p(U,N),ee("sending"),await new Promise(S=>Wt(S,150));const w=await Pe("submit",{output:U,annotations:N},!0);ee(w?"sent":"failed"),Wt(()=>ee("idle"),2500),w&&qt.autoClearAfterCopy&&Wt(()=>an(),500)},[p,Pe,N,Ze,Qe,ft,rs,At,qt.outputDetail,ls,qt.autoClearAfterCopy,an]);_.useEffect(()=>{if(!Es)return;const B=10,U=S=>{const k=S.clientX-Es.x,R=S.clientY-Es.y,z=Math.sqrt(k*k+R*R);if(!$s&&z>B&&Qo(!0),$s||z>B){let J=Es.toolbarX+k,ae=Es.toolbarY+R;const Me=20,Ge=337,G=44,le=Ge-(T?Ms==="connected"?297:257:44),Q=Me-le,Ee=window.innerWidth-Me-Ge;J=Math.max(Q,Math.min(Ee,J)),ae=Math.max(Me,Math.min(window.innerHeight-G-Me,ae)),qs({x:J,y:ae})}},w=()=>{$s&&(Zo.current=!0),Qo(!1),ui(null)};return document.addEventListener("mousemove",U),document.addEventListener("mouseup",w),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",w)}},[Es,$s,T,Ms]);const Kt=_.useCallback(B=>{var R,z;if(B.target.closest("button")||B.target.closest("[data-agentation-settings-panel]"))return;const U=B.currentTarget.parentElement;if(!U)return;const w=U.getBoundingClientRect(),S=(R=yn==null?void 0:yn.x)!=null?R:w.left,k=(z=yn==null?void 0:yn.y)!=null?z:w.top;ui({x:B.clientX,y:B.clientY,toolbarX:S,toolbarY:k})},[yn]);if(_.useEffect(()=>{if(!yn)return;const B=()=>{let k=yn.x,R=yn.y;const ae=20-(337-(T?Ms==="connected"?297:257:44)),Me=window.innerWidth-20-337;k=Math.max(ae,Math.min(Me,k)),R=Math.max(20,Math.min(window.innerHeight-44-20,R)),(k!==yn.x||R!==yn.y)&&qs({x:k,y:R})};return B(),window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[yn,T,Ms]),_.useEffect(()=>{const B=U=>{const w=U.target,S=w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable;if(U.key==="Escape"){if(Be){kt?pt(null):Do();return}if(qn){_s(!1);return}if(Sn.length>0){Gs([]);return}P||T&&(ms(),E(!1))}if((U.metaKey||U.ctrlKey)&&U.shiftKey&&(U.key==="f"||U.key==="F")){U.preventDefault(),ms(),T?Co():E(!0);return}if(!(S||U.metaKey||U.ctrlKey)&&((U.key==="p"||U.key==="P")&&(U.preventDefault(),ms(),F()),(U.key==="l"||U.key==="L")&&(U.preventDefault(),ms(),qn&&_s(!1),je&&nt(!1),P&&Yt(),Be?Do():tt(!0)),(U.key==="h"||U.key==="H")&&N.length>0&&(U.preventDefault(),ms(),A(k=>!k)),(U.key==="c"||U.key==="C")&&(N.length>0||Ze.length>0||Qe)&&(U.preventDefault(),ms(),Gn()),(U.key==="x"||U.key==="X")&&(N.length>0||Ze.length>0||Qe)&&(U.preventDefault(),ms(),an(),Ze.length>0&&Bt([]),Qe&&zn(null)),U.key==="s"||U.key==="S")){const k=ma(qt.webhookUrl)||ma(C||"");N.length>0&&k&&ie==="idle"&&(U.preventDefault(),ms(),Is())}};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[T,qn,Be,kt,Ze,Qe,P,N.length,qt.webhookUrl,C,ie,Is,F,Gn,an,Sn]),!it||X)return null;const Ut=N.length>0,Yn=N.filter(B=>!Ao.has(B.id)&&B.kind!=="placement"&&B.kind!=="rearrange"),_o=Yn.length>0,Ns=N.filter(B=>Ao.has(B.id)),Ei=B=>{const R=B.x/100*window.innerWidth,z=typeof B.y=="string"?parseFloat(B.y):B.y,J={};window.innerHeight-z-22-10<80&&(J.top="auto",J.bottom="calc(100% + 10px)");const Me=R-200/2,Ge=10;if(Me<Ge){const G=Ge-Me;J.left=`calc(50% + ${G}px)`}else if(Me+200>window.innerWidth-Ge){const G=Me+200-(window.innerWidth-Ge);J.left=`calc(50% - ${G}px)`}return J};return zl.createPortal(l.jsxs("div",{ref:ue,style:{display:"contents"},"data-agentation-theme":Vn?"dark":"light","data-agentation-accent":qt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Je.toolbar}${j?` ${j}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:yn?{left:yn.x,top:yn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Je.toolbarContainer} ${T?Je.expanded:Je.collapsed} ${ji?Je.entrance:""} ${Y?Je.hiding:""} ${!qt.webhooksEnabled&&(ma(qt.webhookUrl)||ma(C||""))?Je.serverConnected:""}`,onClick:T?void 0:B=>{if(Zo.current){Zo.current=!1,B.preventDefault();return}E(!0)},onMouseDown:Kt,role:T?void 0:"button",tabIndex:T?-1:0,title:T?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Je.toggleContent} ${T?Je.hidden:Je.visible}`,children:[l.jsx(F3,{size:24}),_o&&l.jsx("span",{className:`${Je.badge} ${T?Je.fadeOut:""} ${ji?Je.entrance:""}`,children:Yn.length})]}),l.jsxs("div",{className:`${Je.controlsContent} ${T?Je.visible:Je.hidden} ${yn&&yn.y<100?Je.tooltipBelow:""} ${Xe||je?Je.tooltipsHidden:""} ${Xs?Je.tooltipsInSession:""}`,onMouseEnter:Vo,onMouseLeave:Ci,children:[l.jsxs("div",{className:`${Je.buttonWrapper} ${yn&&yn.x<120?Je.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Je.controlButton,onClick:B=>{B.stopPropagation(),ms(),F()},"data-active":te,children:l.jsx(Q3,{size:24,isPaused:te})}),l.jsxs("span",{className:Je.buttonTooltip,children:[te?"Resume animations":"Pause animations",l.jsx("span",{className:Je.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Je.buttonWrapper,children:[l.jsx("button",{className:`${Je.controlButton} ${Vn?"":Je.light}`,onClick:B=>{B.stopPropagation(),ms(),qn&&_s(!1),je&&nt(!1),P&&Yt(),Be?Do():tt(!0)},"data-active":Be,style:Be&&ft?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(aj,{size:21})}),l.jsxs("span",{className:Je.buttonTooltip,children:[Be?"Exit layout mode":"Layout mode",l.jsx("span",{className:Je.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Je.buttonWrapper,children:[l.jsx("button",{className:Je.controlButton,onClick:B=>{B.stopPropagation(),ms(),A(!L)},disabled:!Ut||Be,children:l.jsx(K3,{size:24,isOpen:L})}),l.jsxs("span",{className:Je.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:Je.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Je.buttonWrapper,children:[l.jsx("button",{className:`${Je.controlButton} ${be?Je.statusShowing:""}`,onClick:B=>{B.stopPropagation(),ms(),Gn()},disabled:Be&&ft?Ze.length===0&&!((go=Qe==null?void 0:Qe.sections)!=null&&go.length):!Ut&&jn.length===0&&Ze.length===0&&!((ko=Qe==null?void 0:Qe.sections)!=null&&ko.length),"data-active":be,children:l.jsx(G3,{size:24,copied:be,tint:Be&&ft&&(Ze.length>0||(jo=Qe==null?void 0:Qe.sections)!=null&&jo.length)?"#f97316":void 0})}),l.jsxs("span",{className:Je.buttonTooltip,children:[Be&&ft?"Copy layout":"Copy feedback",l.jsx("span",{className:Je.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Je.buttonWrapper} ${Je.sendButtonWrapper} ${T&&!qt.webhooksEnabled&&(ma(qt.webhookUrl)||ma(C||""))?Je.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Je.controlButton} ${ie==="sent"||ie==="failed"?Je.statusShowing:""}`,onClick:B=>{B.stopPropagation(),ms(),Is()},disabled:!Ut||!ma(qt.webhookUrl)&&!ma(C||"")||ie==="sending","data-no-hover":ie==="sent"||ie==="failed",tabIndex:ma(qt.webhookUrl)||ma(C||"")?0:-1,children:[l.jsx(q3,{size:24,state:ie}),Ut&&ie==="idle"&&l.jsx("span",{className:Je.buttonBadge,children:N.length})]}),l.jsxs("span",{className:Je.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Je.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Je.buttonWrapper,children:[l.jsx("button",{className:Je.controlButton,onClick:B=>{B.stopPropagation(),ms(),an()},disabled:!Ut&&jn.length===0&&Ze.length===0&&!((Ro=Qe==null?void 0:Qe.sections)!=null&&Ro.length),"data-danger":!0,children:l.jsx(J3,{size:24})}),l.jsxs("span",{className:Je.buttonTooltip,children:["Clear all",l.jsx("span",{className:Je.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Je.buttonWrapper,children:[l.jsx("button",{className:Je.controlButton,onClick:B=>{B.stopPropagation(),ms(),Be&&Do(),nt(!je)},children:l.jsx(Z3,{size:24})}),g&&Ms!=="disconnected"&&l.jsx("span",{className:`${Je.mcpIndicator} ${Je[Ms]} ${je?Je.hidden:""}`,title:Ms==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Je.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Je.divider}),l.jsxs("div",{className:`${Je.buttonWrapper} ${yn&&typeof window<"u"&&yn.x>window.innerWidth-120?Je.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Je.controlButton,onClick:B=>{B.stopPropagation(),ms(),Co()},children:l.jsx(ej,{size:24})}),l.jsxs("span",{className:Je.buttonTooltip,children:["Exit",l.jsx("span",{className:Je.shortcut,children:"Esc"})]})]})]}),l.jsx(L8,{visible:Be&&T,activeType:kt,onSelect:B=>{pt(kt===B?null:B)},isDarkMode:Vn,sectionCount:(Mo=Qe==null?void 0:Qe.sections.length)!=null?Mo:0,onDetectSections:()=>{var z,J;const B=F8(),U=(z=Qe==null?void 0:Qe.sections)!=null?z:[],w=new Set(U.map(ae=>ae.selector)),S=B.filter(ae=>!w.has(ae.selector)),k=[...U,...S],R=[...(J=Qe==null?void 0:Qe.originalOrder)!=null?J:[],...S.map(ae=>ae.id)];zn({sections:k,originalOrder:R,detectedAt:Date.now()})},placementCount:Ze.length,onClearPlacements:()=>{kn(B=>B+1),Fs(B=>B+1),Wt(()=>{zn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ft,onBlankCanvasChange:B=>{const U={sections:[],originalOrder:[],detectedAt:Date.now()};B?(Ds.current={rearrange:Qe,placements:Ze},zn(Un.current.rearrange||U),Bt(Un.current.placements),pt(null)):(Un.current={rearrange:Qe,placements:Ze},zn(Ds.current.rearrange||U),Bt(Ds.current.placements)),Pt(B)},wireframePurpose:gn,onWireframePurposeChange:nn,Tooltip:Ir,onDragStart:(B,U)=>{var G;U.preventDefault();const w=Tt[B];let S=null,k=!1;const R=U.clientX,z=U.clientY,J=U.target.closest("[data-feedback-toolbar]"),ae=(G=J==null?void 0:J.getBoundingClientRect().top)!=null?G:window.innerHeight,Me=re=>{const le=re.clientX-R,Q=re.clientY-z;if(!k&&(Math.abs(le)>4||Math.abs(Q)>4)&&(k=!0,S=document.createElement("div"),S.className=`${$e.dragPreview}${ft?` ${$e.dragPreviewWireframe}`:""}`,document.body.appendChild(S)),!S)return;const Ee=Math.max(0,ae-re.clientY),Ie=Math.min(1,Ee/180),at=1-Math.pow(1-Ie,2),ct=28,St=20,ht=Math.min(140,w.width*.18),bt=Math.min(90,w.height*.18),dn=ct+(ht-ct)*at,Ft=St+(bt-St)*at;S.style.width=`${dn}px`,S.style.height=`${Ft}px`,S.style.left=`${re.clientX-dn/2}px`,S.style.top=`${re.clientY-Ft/2}px`,S.style.opacity=`${.5+.5*at}`,S.textContent=at>.25?B:""},Ge=re=>{if(window.removeEventListener("mousemove",Me),window.removeEventListener("mouseup",Ge),S&&document.body.removeChild(S),k){const le=w.width,Q=w.height,Ee=window.scrollY,Ie=Math.max(0,re.clientX-le/2),at=Math.max(0,re.clientY+Ee-Q/2),ct={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:B,x:Ie,y:at,width:le,height:Q,scrollY:Ee,timestamp:Date.now()};Bt(St=>[...St,ct]),pt(null),Bn.current=new Set,Ys(St=>St+1)}};window.addEventListener("mousemove",Me),window.addEventListener("mouseup",Ge)}}),l.jsx(t7,{settings:qt,onSettingsChange:B=>Ls(U=>({...U,...B})),isDarkMode:Vn,onToggleTheme:uo,isDevMode:to,connectionStatus:Ms,endpoint:g,isVisible:Ye,toolbarNearBottom:!!yn&&yn.y<230,settingsPage:xe,onSettingsPageChange:ot,onHideToolbar:zi})]})}),(Be||wt)&&l.jsx("div",{className:`${$e.blankCanvas} ${hn?$e.visible:""} ${zt?$e.gridActive:""}`,style:{"--canvas-opacity":jt},"data-feedback-toolbar":!0}),Be&&ft&&hn&&l.jsxs("div",{className:$e.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:$e.wireframeOpacityRow,children:[l.jsx("span",{className:$e.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:$e.wireframeOpacitySlider,min:0,max:1,step:.01,value:jt,onChange:B=>mn(Number(B.target.value))})]}),l.jsxs("div",{className:$e.wireframeNoticeTitleRow,children:[l.jsx("span",{className:$e.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:$e.wireframeNoticeDivider}),l.jsx("button",{className:$e.wireframeStartOver,onClick:()=>{kn(B=>B+1),zn({sections:[],originalOrder:[],detectedAt:Date.now()}),Un.current={rearrange:null,placements:[]},nn(""),Sd(At)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Be||wt)&&l.jsx(A8,{placements:Ze,onChange:Bt,activeComponent:wt?null:kt,onActiveComponentChange:pt,isDarkMode:Vn,exiting:wt,onInteractionChange:on,passthrough:!kt,extraSnapRects:Qe==null?void 0:Qe.sections.map(B=>B.currentRect),deselectSignal:bo,clearSignal:tn,wireframe:ft,onSelectionChange:(B,U)=>{Bn.current=B,U||(hs.current=new Set,Ws(w=>w+1))},onDragMove:(B,U)=>{const w=hs.current;if(!(!w.size||!Qe)){if(!sn.current){sn.current=new Map;for(const S of Qe.sections)w.has(S.id)&&sn.current.set(S.id,{x:S.currentRect.x,y:S.currentRect.y})}for(const S of Qe.sections){if(!w.has(S.id)||!sn.current.get(S.id))continue;const R=document.querySelector(`[data-rearrange-section="${S.id}"]`);R&&(R.style.transform=`translate(${B}px, ${U}px)`)}}},onDragEnd:(B,U,w)=>{const S=hs.current,k=sn.current;if(sn.current=null,!(!S.size||!Qe||!k)){for(const R of S){const z=document.querySelector(`[data-rearrange-section="${R}"]`);z&&(z.style.transform="")}w&&zn(R=>R&&{...R,sections:R.sections.map(z=>{const J=k.get(z.id);return J?{...z,currentRect:{...z.currentRect,x:Math.max(0,J.x+B),y:Math.max(0,J.y+U)}}:z})})}}}),(Be||wt)&&Qe&&l.jsx(q8,{rearrangeState:Qe,onChange:zn,isDarkMode:Vn,exiting:wt,blankCanvas:ft,extraSnapRects:Ze.map(B=>({x:B.x,y:B.y,width:B.width,height:B.height})),clearSignal:bn,deselectSignal:co,onSelectionChange:(B,U)=>{hs.current=B,U||(Bn.current=new Set,Ys(w=>w+1))},onDragMove:(B,U)=>{const w=Bn.current;if(w.size){if(!sn.current){sn.current=new Map;for(const S of Ze)w.has(S.id)&&sn.current.set(S.id,{x:S.x,y:S.y})}for(const S of w){const k=document.querySelector(`[data-design-placement="${S}"]`);k&&(k.style.transform=`translate(${B}px, ${U}px)`)}}},onDragEnd:(B,U,w)=>{const S=Bn.current,k=sn.current;if(sn.current=null,!(!S.size||!k)){for(const R of S){const z=document.querySelector(`[data-design-placement="${R}"]`);z&&(z.style.transform="")}w&&Bt(R=>R.map(z=>{const J=k.get(z.id);return J?{...z,x:Math.max(0,J.x+B),y:Math.max(0,J.y+U)}:z}))}}}),l.jsx("canvas",{ref:Bs,className:`${Je.drawCanvas} ${qn?Je.active:""}`,style:{opacity:no?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Je.markersLayer,"data-feedback-toolbar":!0,children:[fe&&Yn.filter(B=>!B.isFixed).map((B,U,w)=>l.jsx(Px,{annotation:B,globalIndex:Yn.findIndex(S=>S.id===B.id),layerIndex:U,layerSize:w.length,isExiting:De,isClearing:pe,isAnimated:Jo.has(B.id),isHovered:!De&&et===B.id,isDeleting:$t===B.id,isEditingAny:!!Z,renumberFrom:Gt,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:Ei(B),onHoverEnter:S=>!De&&S.id!==vs.current&&Zt(S),onHoverLeave:()=>Zt(null),onClick:S=>qt.markerClickBehavior==="delete"?Ht(S.id):Ae(S),onContextMenu:Ae},B.id)),fe&&!De&&Ns.filter(B=>!B.isFixed).map(B=>l.jsx(Hx,{annotation:B},B.id))]}),l.jsxs("div",{className:Je.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[fe&&Yn.filter(B=>B.isFixed).map((B,U,w)=>l.jsx(Px,{annotation:B,globalIndex:Yn.findIndex(S=>S.id===B.id),layerIndex:U,layerSize:w.length,isExiting:De,isClearing:pe,isAnimated:Jo.has(B.id),isHovered:!De&&et===B.id,isDeleting:$t===B.id,isEditingAny:!!Z,renumberFrom:Gt,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:Ei(B),onHoverEnter:S=>!De&&S.id!==vs.current&&Zt(S),onHoverLeave:()=>Zt(null),onClick:S=>qt.markerClickBehavior==="delete"?Ht(S.id):Ae(S),onContextMenu:Ae},B.id)),fe&&!De&&Ns.filter(B=>B.isFixed).map(B=>l.jsx(Hx,{annotation:B,fixed:!0},B.id))]}),T&&l.jsxs("div",{className:Je.overlay,"data-feedback-toolbar":!0,style:P||Z?{zIndex:99999}:void 0,children:[(se==null?void 0:se.rect)&&!P&&!Et&&!mo&&l.jsx("div",{className:`${Je.hoverHighlight} ${Je.enter}`,style:{left:se.rect.left,top:se.rect.top,width:se.rect.width,height:se.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Sn.filter(B=>document.contains(B.element)).map((B,U)=>{const w=B.element.getBoundingClientRect(),S=Sn.length>1;return l.jsx("div",{className:S?Je.multiSelectOutline:Je.singleSelectOutline,style:{position:"fixed",left:w.left,top:w.top,width:w.width,height:w.height,...S?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},U)}),et&&!P&&(()=>{var k;const B=N.find(R=>R.id===et);if(!(B!=null&&B.boundingBox))return null;if((k=B.elementBoundingBoxes)!=null&&k.length)return Mt.length>0?Mt.filter(R=>document.contains(R)).map((R,z)=>{const J=R.getBoundingClientRect();return l.jsx("div",{className:`${Je.multiSelectOutline} ${Je.enter}`,style:{left:J.left,top:J.top,width:J.width,height:J.height}},`hover-outline-live-${z}`)}):B.elementBoundingBoxes.map((R,z)=>l.jsx("div",{className:`${Je.multiSelectOutline} ${Je.enter}`,style:{left:R.x,top:R.y-vt,width:R.width,height:R.height}},`hover-outline-${z}`));const U=mt&&document.contains(mt)?mt.getBoundingClientRect():null,w=U?{x:U.left,y:U.top,width:U.width,height:U.height}:{x:B.boundingBox.x,y:B.isFixed?B.boundingBox.y:B.boundingBox.y-vt,width:B.boundingBox.width,height:B.boundingBox.height},S=B.isMultiSelect;return l.jsx("div",{className:`${S?Je.multiSelectOutline:Je.singleSelectOutline} ${Je.enter}`,style:{left:w.x,top:w.y,width:w.width,height:w.height,...S?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),se&&!P&&!Et&&!mo&&l.jsxs("div",{className:`${Je.hoverTooltip} ${Je.enter}`,style:{left:Math.max(8,Math.min(O.x,window.innerWidth-100)),top:Math.max(O.y-(se.reactComponents?48:32),8)},children:[se.reactComponents&&l.jsx("div",{className:Je.hoverReactPath,children:se.reactComponents}),l.jsx("div",{className:Je.hoverElementName,children:se.elementName})]}),P&&l.jsxs(l.Fragment,{children:[(Go=P.multiSelectElements)!=null&&Go.length?P.multiSelectElements.filter(B=>document.contains(B)).map((B,U)=>{const w=B.getBoundingClientRect();return l.jsx("div",{className:`${Je.multiSelectOutline} ${cs?Je.exit:Je.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`pending-multi-${U}`)}):P.targetElement&&document.contains(P.targetElement)?(()=>{const B=P.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Je.singleSelectOutline} ${cs?Je.exit:Je.enter}`,style:{left:B.left,top:B.top,width:B.width,height:B.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():P.boundingBox&&l.jsx("div",{className:`${P.isMultiSelect?Je.multiSelectOutline:Je.singleSelectOutline} ${cs?Je.exit:Je.enter}`,style:{left:P.boundingBox.x,top:P.boundingBox.y-vt,width:P.boundingBox.width,height:P.boundingBox.height,...P.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const B=P.x,U=P.isFixed?P.y:P.y-vt;return l.jsxs(l.Fragment,{children:[l.jsx(WM,{x:B,y:U,isMultiSelect:P.isMultiSelect,isExiting:cs}),l.jsx(qd,{ref:ei,element:P.element,selectedText:P.selectedText,computedStyles:P.computedStylesObj,placeholder:P.element==="Area selection"?"What should change in this area?":P.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:lt,onCancel:Yt,isExiting:cs,lightMode:!Vn,accentColor:P.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,B/100*window.innerWidth)),...U>window.innerHeight-290?{bottom:window.innerHeight-U+20}:{top:U+20}}})]})})()]}),Z&&l.jsxs(l.Fragment,{children:[(la=Z.elementBoundingBoxes)!=null&&la.length?gt.length>0?gt.filter(B=>document.contains(B)).map((B,U)=>{const w=B.getBoundingClientRect();return l.jsx("div",{className:`${Je.multiSelectOutline} ${Je.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`edit-multi-live-${U}`)}):Z.elementBoundingBoxes.map((B,U)=>l.jsx("div",{className:`${Je.multiSelectOutline} ${Je.enter}`,style:{left:B.x,top:B.y-vt,width:B.width,height:B.height}},`edit-multi-${U}`)):(()=>{const B=dt&&document.contains(dt)?dt.getBoundingClientRect():null,U=B?{x:B.left,y:B.top,width:B.width,height:B.height}:Z.boundingBox?{x:Z.boundingBox.x,y:Z.isFixed?Z.boundingBox.y:Z.boundingBox.y-vt,width:Z.boundingBox.width,height:Z.boundingBox.height}:null;return U?l.jsx("div",{className:`${Z.isMultiSelect?Je.multiSelectOutline:Je.singleSelectOutline} ${Je.enter}`,style:{left:U.x,top:U.y,width:U.width,height:U.height,...Z.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(qd,{ref:ti,element:Z.element,selectedText:Z.selectedText,computedStyles:U8(Z.computedStyles),placeholder:"Edit your feedback...",initialValue:Z.comment,submitLabel:"Save",onSubmit:xt,onCancel:un,onDelete:()=>Ht(Z.id),isExiting:Yo,lightMode:!Vn,accentColor:Z.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const B=Z.isFixed?Z.y:Z.y-vt;return{left:Math.max(160,Math.min(window.innerWidth-160,Z.x/100*window.innerWidth)),...B>window.innerHeight-290?{bottom:window.innerHeight-B+20}:{top:B+20}}})()})]}),mo&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:po,className:Je.dragSelection}),l.jsx("div",{ref:us,className:Je.highlightsContainer})]})]})]}),document.body)}var o7=Object.freeze({}),i7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(e,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(e,{id:e,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(e,{...u}),this.baseValues.set(e,{...u}),this.notifyGlobal()}updatePanel(e,n,i,a){var b;const c=this.panels.get(e);if(!c){this.registerPanel(e,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[C,j]of Object.entries(h))p[C]=this.normalizePreservedValue(c.values[C],j,d.get(C));this.initTransitionModes(i,"",p);for(const[C,j]of Object.entries(c.values)){if(!C.endsWith(".__mode"))continue;const T=C.slice(0,-7),E=d.get(T);(E==null?void 0:E.type)==="transition"&&(p[C]=j)}const y={id:e,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(e,y),this.snapshots.set(e,{...p});const g=(b=this.baseValues.get(e))!=null?b:{},x={};for(const[C,j]of Object.entries(h))x[C]=this.normalizePreservedValue(g[C],j,d.get(C));for(const[C,j]of Object.entries(p))C.endsWith(".__mode")&&(x[C]=j);this.baseValues.set(e,x),this.notify(e),this.notifyGlobal()}unregisterPanel(e){this.panels.delete(e),this.listeners.delete(e),this.snapshots.delete(e),this.actionListeners.delete(e),this.baseValues.delete(e),this.notifyGlobal()}updateValue(e,n,i){var u;const a=this.panels.get(e);if(!a)return;a.values[n]=i;const c=this.activePreset.get(e);if(c){const h=((u=this.presets.get(e))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(e);d&&(d[n]=i)}this.snapshots.set(e,{...a.values}),this.notify(e)}updateSpringMode(e,n,i){this.updateTransitionMode(e,n,i)}getSpringMode(e,n){const i=this.getTransitionMode(e,n);return i==="easing"?"simple":i}updateTransitionMode(e,n,i){const a=this.panels.get(e);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(e,{...a.values}),this.notify(e))}getTransitionMode(e,n){const i=this.panels.get(e);return i&&i.values[`${n}.__mode`]||"simple"}getValue(e,n){const i=this.panels.get(e);return i==null?void 0:i.values[n]}getValues(e){var n;return(n=this.snapshots.get(e))!=null?n:o7}getPanels(){return Array.from(this.panels.values())}getPanel(e){return this.panels.get(e)}subscribe(e,n){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(n),()=>{var i;(i=this.listeners.get(e))==null||i.delete(n)}}subscribeGlobal(e){return this.globalListeners.add(e),()=>this.globalListeners.delete(e)}subscribeActions(e,n){return this.actionListeners.has(e)||this.actionListeners.set(e,new Set),this.actionListeners.get(e).add(n),()=>{var i;(i=this.actionListeners.get(e))==null||i.delete(n)}}triggerAction(e,n){var i;(i=this.actionListeners.get(e))==null||i.forEach(a=>a(n))}savePreset(e,n){var d;const i=this.panels.get(e);if(!i)throw new Error(`Panel ${e} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(e))!=null?d:[];return this.presets.set(e,[...u,c]),this.activePreset.set(e,a),this.snapshots.set(e,{...i.values}),this.notify(e),a}loadPreset(e,n){var u;const i=this.panels.get(e);if(!i)return;const c=((u=this.presets.get(e))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(e,{...i.values}),this.activePreset.set(e,n),this.notify(e))}deletePreset(e,n){var c;const i=(c=this.presets.get(e))!=null?c:[];this.presets.set(e,i.filter(u=>u.id!==n)),this.activePreset.get(e)===n&&this.activePreset.set(e,null);const a=this.panels.get(e);a&&this.snapshots.set(e,{...a.values}),this.notify(e)}getPresets(e){var n;return(n=this.presets.get(e))!=null?n:[]}getActivePresetId(e){var n;return(n=this.activePreset.get(e))!=null?n:null}clearActivePreset(e){const n=this.panels.get(e),i=this.baseValues.get(e);n&&i&&(n.values={...i},this.snapshots.set(e,{...n.values})),this.activePreset.set(e,null),this.notify(e)}resolveShortcutTarget(e,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==e.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const e=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&e.push({panelId:i.id,path:a,control:u,shortcut:c})}return e}findControlByPath(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(e){var n;(n=this.listeners.get(e))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(e=>e())}initTransitionModes(e,n,i){for(const[a,c]of Object.entries(e)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(e,n,i){var c;const a=[];for(const[u,d]of Object.entries(e)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),y=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:y});else if(typeof d=="number"){const{min:g,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:g,max:x,step:b,shortcut:y})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:y});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const g=d,x="_collapsed"in g?!g._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(g,h,i)})}}return a}flattenValues(e,n){var a,c,u;const i={};for(const[d,h]of Object.entries(e)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const y=h.options[0],g=typeof y=="string"?y:y.value;i[p]=(a=h.default)!=null?a:g}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="spring"}isEasingConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="easing"}isActionConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="action"}isSelectConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="select"&&"options"in e&&Array.isArray(e.options)}isColorConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="color"}isTextConfig(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="text"}isHexColor(e){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(e)}formatLabel(e){return e.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(e){return e>=0&&e<=1?{min:0,max:1,step:.01}:e>=0&&e<=10?{min:0,max:e*3||10,step:.1}:e>=0&&e<=100?{min:0,max:e*3||100,step:1}:e>=0?{min:0,max:e*3||1e3,step:10}:{min:e*3,max:-e*3,step:1}}inferStep(e,n){const i=n-e;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(e,n,i){var a,c,u;if(e===void 0||!i)return n;switch(i.type){case"slider":{if(typeof e!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,e));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof e=="boolean"?e:n;case"select":{if(typeof e!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(e)?e:n}case"color":case"text":return typeof e=="string"?e:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(e)?e:n:this.isEasingConfig(n)&&this.isEasingConfig(e)?e:n;case"action":return n;default:return n}}roundToStep(e,n,i,a){const c=n+Math.round((e-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(e){const n=String(e),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(e){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(e),n}},ln=new i7;function a7(e,n,i){const a=_.useId(),c=`${e}-${a}`,u=_.useRef(n),d=JSON.stringify(n);u.current=n;const h=_.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=_.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const y=JSON.stringify(i==null?void 0:i.shortcuts);_.useEffect(()=>(ln.registerPanel(c,e,u.current,p.current),()=>ln.unregisterPanel(c)),[c,e]);const g=_.useRef(!1);_.useEffect(()=>{if(!g.current){g.current=!0;return}ln.updatePanel(c,e,u.current,p.current)},[c,e,d,y]),_.useEffect(()=>ln.subscribeActions(c,b=>{var C;(C=h.current)==null||C.call(h,b)}),[c]);const x=_.useSyncExternalStore(b=>ln.subscribe(c,b),()=>ln.getValues(c),()=>ln.getValues(c));return S2(n,x,"")}function S2(e,n,i){var c,u,d,h,p,y,g,x,b,C;const a={};for(const[j,T]of Object.entries(e)){if(j==="_collapsed")continue;const E=i?`${i}.${j}`:j;if(Array.isArray(T)&&T.length<=4&&typeof T[0]=="number")a[j]=(c=n[E])!=null?c:T[0];else if(typeof T=="number"||typeof T=="boolean"||typeof T=="string")a[j]=(u=n[E])!=null?u:T;else if(r7(T)||l7(T))a[j]=(d=n[E])!=null?d:T;else if(c7(T))a[j]=(h=n[E])!=null?h:T;else if(u7(T)){const N=(p=T.default)!=null?p:h7(T.options);a[j]=(y=n[E])!=null?y:N}else d7(T)?a[j]=(x=(g=n[E])!=null?g:T.default)!=null?x:"#000000":f7(T)?a[j]=(C=(b=n[E])!=null?b:T.default)!=null?C:"":typeof T=="object"&&T!==null&&(a[j]=S2(T,n,E))}return a}function Hl(e,n){return typeof e=="object"&&e!==null&&"type"in e&&e.type===n}function r7(e){return Hl(e,"spring")}function l7(e){return Hl(e,"easing")}function c7(e){return Hl(e,"action")}function u7(e){return Hl(e,"select")&&"options"in e&&Array.isArray(e.options)}function d7(e){return Hl(e,"color")}function f7(e){return Hl(e,"text")}function h7(e){const n=e[0];return typeof n=="string"?n:n.value}function vp(e){const n=e.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function $d(e,n){const i=Math.round(e/n)*n;return parseFloat(i.toFixed(vp(n)))}function Rc(e,n){var d,h,p,y;const i=(d=e.min)!=null?d:0,c=((h=e.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(y=e.step)!=null?y:1}function Bc(e,n,i,a,c){var y,g;const u=ln.getValue(e,n),d=(y=i.min)!=null?y:0,h=(g=i.max)!=null?g:1,p=Math.max(d,Math.min(h,u+c*a));ln.updateValue(e,n,$d(p,a))}function m7(e,n,i){const a=(e-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):e}function Md(){const e=document.activeElement;if(!e)return!1;const n=e.tagName;return n==="INPUT"||n==="TEXTAREA"||e.contentEditable==="true"}function zm(e){if(e.altKey)return"alt";if(e.shiftKey)return"shift";if(e.metaKey)return"meta"}function C2(e,n){for(const i of e){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=C2(i.children,n);if(a)return a}}return null}var Ed=4;function p7(e){switch(e){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function _7(e){var c;const n=(c=e.interaction)!=null?c:"scroll",i=p7(n);return e.key?`${k2(e.modifier)}${e.key.toUpperCase()}+${i}`:i}function g7(e){return e.key?`${k2(e.modifier)}${e.key.toUpperCase()}`:"Press"}function k2(e){return e==="alt"?"⌥":e==="shift"?"⇧":e==="meta"?"⌘":""}var j2=_.createContext({activePanelId:null,activePath:null});function y7({children:e}){const[n,i]=_.useState({activePanelId:null,activePath:null}),a=_.useRef(new Set),c=_.useRef(!1),u=_.useRef(null),d=_.useRef(0),h=_.useCallback(p=>{var y;for(const g of a.current){const x=ln.getPanels();for(const b of x)for(const[C,j]of Object.entries(b.shortcuts)){if(!j.key||j.key.toLowerCase()!==g||((y=j.interaction)!=null?y:"scroll")!==p)continue;const T=C2(b.controls,C);if(T&&T.type==="slider")return{panelId:b.id,path:C,control:T,shortcut:j}}}return null},[]);return _.useEffect(()=>{const p=T=>{if(Md())return;const E=T.key.toLowerCase();if((E==="arrowleft"||E==="arrowright"||E==="arrowup"||E==="arrowdown")&&a.current.size>0){const A=h("scroll")||h("drag")||h("move");if(A&&A.control.type==="slider"){T.preventDefault();const X=E==="arrowright"||E==="arrowup"?1:-1,W=Rc(A.control,A.shortcut);Bc(A.panelId,A.path,A.control,W,X);return}}const N=a.current.has(E);a.current.add(E);const H=zm(T),L=ln.resolveShortcutTarget(E,H);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!N&&L.control.type==="toggle")){const A=ln.getValue(L.panelId,L.path);ln.updateValue(L.panelId,L.path,!A)}N||(u.current=null,d.current=0)},y=T=>{const E=T.key.toLowerCase();if(a.current.delete(E),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let N=!1;for(const H of a.current){const L=zm(T),A=ln.resolveShortcutTarget(H,L);if(A){i({activePanelId:A.panelId,activePath:A.path}),N=!0;break}}N||i({activePanelId:null,activePath:null})}},g=T=>{var H,L;if(Md())return;const E=zm(T);if(a.current.size>0)for(const A of a.current){const X=ln.resolveShortcutTarget(A,E);if(!X)continue;const{panelId:W,path:Y,control:q}=X;if(((L=(H=q.shortcut)==null?void 0:H.interaction)!=null?L:"scroll")!=="scroll"||q.type!=="slider")continue;T.preventDefault();const fe=Rc(q,q.shortcut),_e=T.deltaY>0?-1:1;Bc(W,Y,q,fe,_e);return}const N=ln.resolveScrollOnlyTargets();for(const{panelId:A,path:X,control:W,shortcut:Y}of N){if(W.type!=="slider")continue;T.preventDefault();const q=Rc(W,Y),ue=T.deltaY>0?-1:1;Bc(A,X,W,q,ue);return}},x=T=>{if(Md()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=T.clientX,d.current=0,T.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},C=T=>{if(Md()||a.current.size===0)return;if(c.current){const N=h("drag");if(N&&u.current!==null){const H=T.clientX-u.current;u.current=T.clientX,d.current+=H;const L=Rc(N.control,N.shortcut),A=Math.trunc(d.current/Ed);A!==0&&(d.current-=A*Ed,Bc(N.panelId,N.path,N.control,L,A))}return}const E=h("move");if(E){if(u.current===null){u.current=T.clientX;return}const N=T.clientX-u.current;u.current=T.clientX,d.current+=N;const H=Rc(E.control,E.shortcut),L=Math.trunc(d.current/Ed);L!==0&&(d.current-=L*Ed,Bc(E.panelId,E.path,E.control,H,L))}},j=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",C),window.addEventListener("blur",j),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("wheel",g),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",C),window.removeEventListener("blur",j)}},[h]),l.jsx(j2.Provider,{value:n,children:e})}var l_="M6 9.5L12 15.5L18 9.5",x7="M5 12.75L10 19L19 5",$m={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},b7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],v7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Wx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Zd({title:e,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=_.useState(i),[y,g]=_.useState(!i),x=_.useRef(null),[b,C]=_.useState(void 0),[j,T]=_.useState(typeof window<"u"?window.innerHeight:800);_.useEffect(()=>{if(!a)return;const H=()=>T(window.innerHeight);return window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[a]),_.useEffect(()=>{const H=x.current;if(!H)return;const L=new ResizeObserver(()=>{if(h){const A=H.offsetHeight;C(X=>X===A?X:A)}});return L.observe(H),()=>L.disconnect()},[h]);const E=()=>{if(c&&a)return;const H=!h;p(H),g(!H),u==null||u(H)},N=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:E,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:e})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:e})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Wx.path,fill:"currentColor"}),Wx.circles.map((H,L)=>l.jsx("circle",{cx:H.cx,cy:H.cy,r:H.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(ri.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:l_})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:H=>H.stopPropagation(),children:d})]}),l.jsx(af,{initial:!1,children:h&&l.jsx(ri.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:N});const H=h?{width:280,height:b!==void 0?Math.min(b+10,j-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(ri.div,{className:"dialkit-panel-inner",style:H,onClick:h?void 0:E,"data-collapsed":y,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:N})}return N}var w7=3,S7=32,C7=200,k7=8;function Ko({label:e,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var it;const y=_.useRef(null),g=_.useRef(null),x=_.useRef(null),b=_.useRef(null),C=_.useRef(null),[j,T]=_.useState(!1),[E,N]=_.useState(!1),[H,L]=_.useState(!1),[A,X]=_.useState(!1),[W,Y]=_.useState(!1),[q,ue]=_.useState(!1),[fe,_e]=_.useState(""),De=_.useRef(null),qe=_.useRef(null),se=_.useRef(!0),he=_.useRef(null),O=_.useRef(null),oe=_.useRef(1),P=(n-a)/(c-a)*100,me=j||H,be=fp(P),$=dd(be,V=>`${V}%`),ie=dd(be,V=>`max(5px, calc(${V}% - 9px))`),ee=fp(0),ve=dd(ee,V=>`calc(100% + ${Math.abs(V)}px)`),Te=dd(ee,V=>V<0?V:0);_.useEffect(()=>{!j&&!he.current&&be.jump(P)},[P,j,be]);const pe=_.useCallback(V=>{const te=O.current;if(!te)return n;const je=(V-te.left)/oe.current,nt=y.current?y.current.offsetWidth:te.width,Ye=Math.max(0,Math.min(1,je/nt)),Ne=a+Ye*(c-a);return Math.max(a,Math.min(c,Ne))},[a,c,n]),Oe=_.useCallback(V=>(V-a)/(c-a)*100,[a,c]),et=_.useCallback((V,te)=>{const Se=O.current;if(!Se)return 0;const je=te<0?Se.left-V:V-Se.right,nt=Math.max(0,je-S7);return te*k7*Math.sqrt(Math.min(nt/C7,1))},[]),We=_.useCallback(V=>{if(!q&&(V.preventDefault(),V.target.setPointerCapture(V.pointerId),qe.current={x:V.clientX,y:V.clientY},se.current=!0,T(!0),y.current)){O.current=y.current.getBoundingClientRect();const te=y.current.offsetWidth;oe.current=O.current.width/te}},[q]),mt=_.useCallback(V=>{if(!j||!qe.current)return;const te=V.clientX-qe.current.x,Se=V.clientY-qe.current.y,je=Math.sqrt(te*te+Se*Se);if(se.current&&je>w7&&(se.current=!1,N(!0)),!se.current){const nt=O.current;nt&&(V.clientX<nt.left?ee.jump(et(V.clientX,-1)):V.clientX>nt.right?ee.jump(et(V.clientX,1)):ee.jump(0));const Ye=pe(V.clientX),Ne=Oe(Ye);he.current&&(he.current.stop(),he.current=null),be.jump(Ne),i($d(Ye,u))}},[j,pe,Oe,i,be,ee,et]),Nt=_.useCallback(V=>{if(j){if(se.current){const te=pe(V.clientX),je=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((te-a)/u)*u)):m7(te,a,c),nt=Oe(je);he.current&&he.current.stop(),he.current=ax(be,nt,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{he.current=null}}),i($d(je,u))}ee.get()!==0&&ax(ee,0,{type:"spring",visualDuration:.35,bounce:.15}),T(!1),N(!1),qe.current=null}},[j,pe,Oe,i,a,c,be,ee]);_.useEffect(()=>(A&&!q&&!W?De.current=setTimeout(()=>{Y(!0)},800):!A&&!q&&(De.current&&(clearTimeout(De.current),De.current=null),Y(!1)),()=>{De.current&&clearTimeout(De.current)}),[A,q,W]),_.useEffect(()=>{q&&x.current&&(x.current.focus(),x.current.select())},[q]);const Mt=V=>{_e(V.target.value)},ut=()=>{const V=parseFloat(fe);if(!isNaN(V)){const te=Math.max(a,Math.min(c,V));i($d(te,u))}ue(!1),X(!1),Y(!1)},$t=V=>{W&&(V.stopPropagation(),V.preventDefault(),ue(!0),_e(n.toFixed(vp(u))))},_t=V=>{V.key==="Enter"?ut():V.key==="Escape"&&(ue(!1),X(!1))},Gt=()=>{ut()},Jt=n.toFixed(vp(u)),Z=8,Re=10,dt=10;let rt=30,gt=78;const Ue=(it=y.current)==null?void 0:it.offsetWidth;Ue&&Ue>0&&(b.current&&(rt=(Re+b.current.offsetWidth+Z)/Ue*100),C.current&&(gt=(Ue-dt-C.current.offsetWidth-Z)/Ue*100));const vt=P<rt||P>gt,yt=me?vt?.1:E?.9:.5:0,Et=(c-a)/u,Ke=Et<=10?Array.from({length:Et-1},(V,te)=>{const Se=(te+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Se}%`}},te)}):Array.from({length:9},(V,te)=>{const Se=(te+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Se}%`}},te)});return l.jsx("div",{ref:y,className:"dialkit-slider-wrapper",children:l.jsxs(ri.div,{ref:g,className:`dialkit-slider ${me?"dialkit-slider-active":""}`,onPointerDown:We,onPointerMove:mt,onPointerUp:Nt,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:ve,x:Te},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:Ke}),l.jsx(ri.div,{className:"dialkit-slider-fill",style:{width:$}}),l.jsx(ri.div,{className:"dialkit-slider-handle",style:{left:ie,y:"-50%"},animate:{opacity:yt,scaleX:me?1:.25,scaleY:me&&vt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[e,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:_7(h)})]}),q?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:fe,onChange:Mt,onKeyDown:_t,onBlur:Gt,onClick:V=>V.stopPropagation(),onMouseDown:V=>V.stopPropagation()}):l.jsx("span",{ref:C,className:`dialkit-slider-value ${W?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>X(!0),onMouseLeave:()=>X(!1),onClick:$t,onMouseDown:V=>W&&V.stopPropagation(),style:{cursor:W?"text":"default"},children:Jt})]})})}function c_({options:e,value:n,onChange:i}){const a=_.useRef(null),c=_.useRef(!1),[u,d]=_.useState(null),h=_.useCallback(()=>{const y=a.current;if(!y)return;const g=y.querySelector('[data-active="true"]');g&&d({left:g.offsetLeft,width:g.offsetWidth})},[]);_.useLayoutEffect(()=>{h()},[n,e.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),e.map(y=>{const g=n===y.value;return l.jsx("button",{onClick:()=>i(y.value),className:"dialkit-segmented-button","data-active":String(g),children:y.label},y.value)})]})}function j7({label:e,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[e,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:g7(a)})]}),l.jsx(c_,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function M7(e,n,i,a){const c=[],d=a/100;let h=0,p=0;const y=1;for(let g=0;g<=100;g++){const x=g*d;c.push([x,h]);const b=-e*(h-y),C=-n*p,j=(b+C)/i;p+=j*d,h+=p*d}return c}function M2({spring:e,isSimpleMode:n}){var T,E,N,H,L;let c,u,d;if(n){const A=(T=e.visualDuration)!=null?T:.3,X=(E=e.bounce)!=null?E:.2;d=1,c=2*Math.PI/A,c=Math.pow(c,2),u=2*(1-X)*Math.sqrt(c*d)}else c=(N=e.stiffness)!=null?N:400,u=(H=e.damping)!=null?H:17,d=(L=e.mass)!=null?L:1;const h=2,p=M7(c,u,d,h),y=p.map(([,A])=>A),g=Math.min(...y),b=Math.max(...y)-g,C=p.map(([A,X],W)=>{const Y=A/h*256,ue=140-((X-g)/(b||1)*140*.6+140*.2);return`${W===0?"M":"L"} ${Y} ${ue}`}).join(" "),j=[];for(let A=1;A<4;A++){const X=64*A,W=140/4*A;j.push(l.jsx("line",{x1:X,y1:0,x2:X,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${A}`),l.jsx("line",{x1:0,y1:W,x2:256,y2:W,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${A}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[j,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:C,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function E7({panelId:e,path:n,label:i,spring:a,onChange:c}){var g,x,b,C,j;const u=_.useSyncExternalStore(T=>ln.subscribe(e,T),()=>ln.getSpringMode(e,n),()=>ln.getSpringMode(e,n)),d=u==="simple",h=_.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=T=>{ln.updateSpringMode(e,n,T),c(T==="simple"?h.current.simple:h.current.advanced)},y=(T,E)=>{if(d){const{stiffness:N,damping:H,mass:L,...A}=a;c({...A,[T]:E})}else{const{visualDuration:N,bounce:H,...L}=a;c({...L,[T]:E})}};return l.jsx(Zd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(M2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(c_,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Duration",value:(g=a.visualDuration)!=null?g:.3,onChange:T=>y("visualDuration",T),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ko,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:T=>y("bounce",T),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:T=>y("stiffness",T),min:1,max:1e3,step:10}),l.jsx(Ko,{label:"Damping",value:(C=a.damping)!=null?C:17,onChange:T=>y("damping",T),min:1,max:100,step:1}),l.jsx(Ko,{label:"Mass",value:(j=a.mass)!=null?j:1,onChange:T=>y("mass",T),min:.1,max:10,step:.1})]})]})})}function T7({easing:e}){const n=e.ease,i=200,a=10,u=(i-a*2)/2,d=(b,C)=>({x:a+(b+.5)*u,y:a+(1.5-C)*u}),h=d(0,0),p=d(1,1),y=d(n[0],n[1]),g=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${y.x} ${y.y}, ${g.x} ${g.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function A7({panelId:e,path:n,label:i,value:a,onChange:c}){var j,T,E,N,H;const u=_.useSyncExternalStore(L=>ln.subscribe(e,L),()=>ln.getTransitionMode(e,n),()=>ln.getTransitionMode(e,n)),d=u==="easing",h=u==="simple",p=_.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const y=a.type==="spring"?a:p.current.simple,g=a.type==="easing"?a:p.current.easing,x=L=>{ln.updateTransitionMode(e,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,A)=>{if(h){const{stiffness:X,damping:W,mass:Y,...q}=y;c({...q,[L]:A})}else{const{visualDuration:X,bounce:W,...Y}=y;c({...Y,[L]:A})}},C=(L,A)=>{const X=[...g.ease];X[L]=A,c({...g,ease:X})};return l.jsx(Zd,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(T7,{easing:g}):l.jsx(M2,{spring:y,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(c_,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"x1",value:g.ease[0],onChange:L=>C(0,L),min:0,max:1,step:.01}),l.jsx(Ko,{label:"y1",value:g.ease[1],onChange:L=>C(1,L),min:-1,max:2,step:.01}),l.jsx(Ko,{label:"x2",value:g.ease[2],onChange:L=>C(2,L),min:0,max:1,step:.01}),l.jsx(Ko,{label:"y2",value:g.ease[3],onChange:L=>C(3,L),min:-1,max:2,step:.01}),l.jsx(Ko,{label:"Duration",value:g.duration,onChange:L=>c({...g,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(D7,{ease:g.ease,onChange:L=>c({...g,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Duration",value:(j=y.visualDuration)!=null?j:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Ko,{label:"Bounce",value:(T=y.bounce)!=null?T:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ko,{label:"Stiffness",value:(E=y.stiffness)!=null?E:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx(Ko,{label:"Damping",value:(N=y.damping)!=null?N:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx(Ko,{label:"Mass",value:(H=y.mass)!=null?H:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Fx(e){return e.map(n=>parseFloat(n.toFixed(2))).join(", ")}function N7(e){const n=e.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function D7({ease:e,onChange:n}){const[i,a]=_.useState(!1),[c,u]=_.useState(""),d=()=>{u(Fx(e)),a(!0)},h=()=>{const y=N7(c);y&&n(y),a(!1)},p=y=>{y.key==="Enter"&&y.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Fx(e),onChange:y=>u(y.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function R7({label:e,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:e}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function B7(e){return e.replace(/\b\w/g,n=>n.toUpperCase())}function L7(e){return e.map(n=>typeof n=="string"?{value:n,label:B7(n)}:n)}function O7({label:e,value:n,options:i,onChange:a}){var T;const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState(null),[g,x]=_.useState(null),b=L7(i),C=b.find(E=>E.value===n),j=_.useCallback(()=>{const E=d.current;if(!E)return;const N=E.getBoundingClientRect(),H=8+b.length*36,L=window.innerHeight-N.bottom-4,A=L<H&&N.top>L;x({top:A?N.top-4:N.bottom+4,left:N.left,width:N.width,above:A})},[b.length]);return _.useEffect(()=>{var N;const E=(N=d.current)==null?void 0:N.closest(".dialkit-root");y(E!=null?E:document.body)},[]),_.useEffect(()=>{c&&j()},[c,j]),_.useEffect(()=>{if(!c)return;const E=N=>{const H=N.target;d.current&&!d.current.contains(H)&&h.current&&!h.current.contains(H)&&u(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:e}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(T=C==null?void 0:C.label)!=null?T:n}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:l_})})]})]}),p&&zl.createPortal(l.jsx(af,{children:c&&g&&l.jsx(ri.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:b.map(E=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(E.value===n),onClick:()=>{a(E.value),u(!1)},children:E.label},E.value))})}),p)]})}var z7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function $7({label:e,value:n,onChange:i}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useRef(null);_.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),z7.test(u)?i(u):d(n)}function y(g){g.key==="Enter"?p():g.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:e}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:g=>d(g.target.value),onBlur:p,onKeyDown:y,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var g;return(g=h.current)==null?void 0:g.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?I7(n):n.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function I7(e){return e.length!==4?e:`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`}function P7({panelId:e,presets:n,activePresetId:i,onAdd:a}){const[c,u]=_.useState(!1),d=_.useRef(null),h=_.useRef(null),[p,y]=_.useState({top:0,left:0,width:0}),g=n.length>0,x=n.find(N=>N.id===i),b=_.useCallback(()=>{var H;if(!g)return;const N=(H=d.current)==null?void 0:H.getBoundingClientRect();N&&y({top:N.bottom+4,left:N.left,width:N.width}),u(!0)},[g]),C=_.useCallback(()=>u(!1),[]),j=_.useCallback(()=>{c?C():b()},[c,b,C]);_.useEffect(()=>{if(!c)return;const N=H=>{var A,X;const L=H.target;(A=d.current)!=null&&A.contains(L)||(X=h.current)!=null&&X.contains(L)||C()};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[c,C]);const T=N=>{N?ln.loadPreset(e,N):ln.clearActivePreset(e),C()},E=(N,H)=>{N.stopPropagation(),ln.deletePreset(e,H)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:j,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!g),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(ri.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:l_})})]}),zl.createPortal(l.jsx(af,{children:c&&l.jsxs(ri.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>T(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(N=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(N.id===i),onClick:()=>T(N.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:N.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:H=>E(H,N.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v7.map((H,L)=>l.jsx("path",{d:H},L))})})]},N.id))]})}),document.body)]})}function H7({panel:e,defaultOpen:n=!0,inline:i=!1}){const[a,c]=_.useState(!1),[u,d]=_.useState(n),h=_.useContext(j2);Object.keys(e.shortcuts).length>0;const p=_.useSyncExternalStore(E=>ln.subscribe(e.id,E),()=>ln.getValues(e.id),()=>ln.getValues(e.id)),y=ln.getPresets(e.id),g=ln.getActivePresetId(e.id),x=()=>{const E=y.length+2;ln.savePreset(e.id,`Version ${E}`)},b=()=>{const E=JSON.stringify(p,null,2),N=`Update the useDialKit configuration for "${e.name}" with these values:

\`\`\`json
${E}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(N),c(!0),setTimeout(()=>c(!1),1500)},C=E=>{var H,L,A;const N=p[E.path];switch(E.type){case"slider":return l.jsx(Ko,{label:E.label,value:N,onChange:X=>ln.updateValue(e.id,E.path,X),min:E.min,max:E.max,step:E.step,shortcut:E.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===E.path},E.path);case"toggle":return l.jsx(j7,{label:E.label,checked:N,onChange:X=>ln.updateValue(e.id,E.path,X),shortcut:E.shortcut,shortcutActive:h.activePanelId===e.id&&h.activePath===E.path},E.path);case"spring":return l.jsx(E7,{panelId:e.id,path:E.path,label:E.label,spring:N,onChange:X=>ln.updateValue(e.id,E.path,X)},E.path);case"transition":return l.jsx(A7,{panelId:e.id,path:E.path,label:E.label,value:N,onChange:X=>ln.updateValue(e.id,E.path,X)},E.path);case"folder":return l.jsx(Zd,{title:E.label,defaultOpen:(H=E.defaultOpen)!=null?H:!0,children:(L=E.children)==null?void 0:L.map(C)},E.path);case"text":return l.jsx(R7,{label:E.label,value:N,onChange:X=>ln.updateValue(e.id,E.path,X),placeholder:E.placeholder},E.path);case"select":return l.jsx(O7,{label:E.label,value:N,options:(A=E.options)!=null?A:[],onChange:X=>ln.updateValue(e.id,E.path,X)},E.path);case"color":return l.jsx($7,{label:E.label,value:N,onChange:X=>ln.updateValue(e.id,E.path,X)},E.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>ln.triggerAction(e.id,E.path),children:E.label},E.path);default:return null}},j=()=>e.controls.map(C),T=l.jsxs(l.Fragment,{children:[l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:b7.map((E,N)=>l.jsx("path",{d:E},N))})}),l.jsx(P7,{panelId:e.id,presets:y,activePresetId:g,onAdd:x}),l.jsx(ri.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(af,{initial:!1,mode:"wait",children:a?l.jsx(ri.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:x7})},"check"):l.jsxs(ri.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:$m.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:$m.sparkle,fill:"currentColor"}),l.jsx("path",{d:$m.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Zd,{title:e.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:T,children:j()})})}var U7=typeof process<"u"?!1:!(typeof import.meta<"u");function V7({position:e="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=U7}){if(!c)return null;const[u,d]=_.useState([]),[h,p]=_.useState(!1),y=i==="inline",g=_.useRef(null),[x,b]=_.useState(null),[C,j]=_.useState(e),T=_.useRef(null),E=_.useRef(!1),N=_.useRef(null),H=_.useRef(!1);_.useEffect(()=>(p(!0),d(ln.getPanels()),ln.subscribeGlobal(()=>{d(ln.getPanels())})),[]),_.useEffect(()=>{if(!g.current||y)return;const q=new MutationObserver(()=>{var _e;const ue=(_e=g.current)==null?void 0:_e.querySelector(".dialkit-panel-inner");if(!ue)return;if(ue.getAttribute("data-collapsed")==="true")T.current&&b(T.current);else{if(x){T.current=x;const De=x.x+21,qe=window.innerWidth/2;j(De<qe?"top-left":"top-right")}else j(e);b(null)}});return q.observe(g.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>q.disconnect()},[y,x,e]);const L=_.useCallback(q=>{var _e;const ue=(_e=g.current)==null?void 0:_e.querySelector(".dialkit-panel-inner");if(!ue||ue.getAttribute("data-collapsed")!=="true")return;const fe=g.current.getBoundingClientRect();N.current={pointerX:q.clientX,pointerY:q.clientY,elX:fe.left,elY:fe.top},H.current=!1,E.current=!0,q.target.setPointerCapture(q.pointerId)},[]),A=_.useCallback(q=>{if(!E.current||!N.current)return;const ue=q.clientX-N.current.pointerX,fe=q.clientY-N.current.pointerY;!H.current&&Math.abs(ue)+Math.abs(fe)<4||(H.current=!0,b({x:N.current.elX+ue,y:N.current.elY+fe}))},[]),X=_.useCallback(q=>{var ue;if(E.current&&(E.current=!1,N.current=null,H.current)){q.stopPropagation();const fe=(ue=g.current)==null?void 0:ue.querySelector(".dialkit-panel-inner");if(fe){const _e=De=>{De.stopPropagation()};fe.addEventListener("click",_e,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const W=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,Y=l.jsx(y7,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:g,className:"dialkit-panel","data-position":y||x?void 0:C,"data-mode":i,style:W,onPointerDown:y?void 0:L,onPointerMove:y?void 0:A,onPointerUp:y?void 0:X,children:u.map(q=>l.jsx(H7,{panel:q,defaultOpen:y||n,inline:y},q.id))})})});return y?Y:zl.createPortal(Y,document.body)}const Y7=()=>(a7("Git Visualizer",{preview:[1,0,1]}),null),Xx="git-visualizer.chrome-ui-hidden",W7=({children:e})=>{const[n,i]=_.useState(!1);return _.useEffect(()=>{i(window.localStorage.getItem(Xx)==="true")},[]),_.useEffect(()=>{const a=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="d"&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),i(u=>{const d=!u;return window.localStorage.setItem(Xx,String(d)),d}))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),l.jsxs(l.Fragment,{children:[e,l.jsx(Y7,{}),!n&&l.jsxs(l.Fragment,{children:[l.jsx(V7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(s7,{})]})]})};document.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="r"&&(e.preventDefault(),location.reload())});Jv.createRoot(document.getElementById("root")).render(l.jsx(W7,{children:l.jsx(P3,{})}));
